/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5skfzcBKXSeSy9k9S6ihi8jighWCkbBiPcHwRJmuk7fJ5SPs9GQY9tpqfGUNWobAsa5Ua7k6rrLkSw9v3U3dhtZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NpkatXoSghChxvpFhE55VgtXZKpMx52vHe4t4nyVLeXp3y6RY44GVTdNLxQN5wJvMpEiDAkDJgmZgSk6Yawq19R",
  "key1": "4JLZJWxR7RBEcFheNCCK3gmT43oA5upZGax8gHQXRGPASkpFhfJQuUnoANy432TCdB2MMxNdBmJ2aHo1Ekbvoojp",
  "key2": "25PRchnknaVEyh17AG4Nvcbsf18UyRxLzHkYdNPtjyN2qhAuP5gxQ2X2omm2yL8f7SMqKFguBmEWkmdea7xgqwNV",
  "key3": "4zRrVBSWXktZSKMAzUHXfFZUir3BNof5JcqBy3NN6nQaT7u195ULhXrP1N4Vq3bLPdyF3oJTbdneG611H16Mr6kG",
  "key4": "5xq3HiwUwAYE9gZQsagDsvt6mKAbT2WdeH2h7sEPKxgTadSQ5jKo4DaahhhcaRrqmt8FVq6jJCn39NQ8oTp2o17G",
  "key5": "3QcYqJybnbJqwF4gX3T6eBAqF2UKG37ecxbBjATs7Aw2RiyMUe5WksFFYNLptbknEj2DQ6ud7BAfJ8Z32CYkVang",
  "key6": "3oBNuTxRzV7UT8BTDcqJCt378dEurbMcwBF6eUkvGp7pmGKdgVYXMDwbFvG27oJRVdFwFnzxCvWCZqkGKB12KVea",
  "key7": "2UPMJzBPT5z1QKi3syxcrEvREJGL7TQhYHTZgctcvGhb3bMvqTLnChuAGHMJ7Z68r4VGtX7K1xWSnUXsim4Gj4zd",
  "key8": "2xVQgKH8JPFM4LwHcoA14XyBP6Q3P5KQUXKDyQhx5jbch4ykiYTvssC4kYDkK8Fsef9EiTPLM9jKtEPARi1TCTbv",
  "key9": "2ZJfZGEpKXcxBkV22Z9LNuL6dLQawXqw5jkkmGWV4LQrY8qE6eVq6y9AZhkA6MeEqK1AHkRoPz7RaHBb1apraCfA",
  "key10": "2jwja5UjNss4YjNY5vCre2C3qZ4TG5qRdK3bKM8LtZRvHJpPRE6jtyTofRY1XEDV8ZPWbAsCvSDCso8oFs6B6tCq",
  "key11": "2THv4bngoBCCQuPKrCEs91yq9hTViknspnTBzMmsLesHYx8n18XaPxQFqFKws6t6yRFS1UQdaovt9uUM3mkJwMaG",
  "key12": "33dKiR6qCB8SZSYfHhWMyKWuA7rVH7diuKG9mr5diyGa2bn32PubrLADQDGEwwTV7JLxJT2zu7nomg6KFaefZZd6",
  "key13": "5dNNdumKr5VFBSh1LvjLi7k9TyGP52yEmEZ2m1mT8Jvaus35RcNA8qJMtJQ4M1DmXcndajad9ncW5vz5XGu8evAw",
  "key14": "35hfwUSKFAunimPrCC1XtRC9wJUWTS486yXA1L3kN7o5KnTS5ujxbzEWWJ7YcToy9LjaxWPLrCqtprEgMvkj2Ubk",
  "key15": "cZ2vutGseRQrwEoFMRarnvXr5MidtyVe7LPMFp7MRty6U19piBwofNQ7ziDFgoY3ctnMjmNoBzY5eYUDcNccKw8",
  "key16": "2kM4NZ8c93QZkMvw84xC8iQ9b3DcWbBGKAMbm8HTv4SbdqsDsMtX7RBVrV7V2R1RbBVzof5ATctbnnPwLQMZgxM",
  "key17": "22aZcBuaJDXqzCEPWXtiDX3J8XHBPfuGCYPDSNs4NicgzBhW6MtXiGjPVzQWR7RBQjBqDaESSEZeME5xYygDKhpp",
  "key18": "1MyH91nCJC9iD4TmN94DQMPmGaoB4BQU3MYNawigtrv1KN5mY5HDrRjCvQeNUc5dewVbUdfCUXqPtaHdJzRc4YP",
  "key19": "XZa7ReNEajuSvNg64a5vLsP3WvDSPpiCH6WQ3MJpBd64wZe4iZoohQBec9PZYXjgHuj7hXRPWxTnZDPRoBP77bJ",
  "key20": "m93yQ1cLcqPUJSwgZEoTTChCN4QztV3k3a2GFnx9yZjsyzGJGUsEwQhQx5bjziJo7evZ8H82xX7qyJYWFd2vev1",
  "key21": "3AFpuPpvW4H6PMgHPVwENxZ1iHKaB2rAt3r8N2HtfLxmCfGk3GsXbTzgj3Fm5DhMPwHhXt2a4EFDADRs6RjNEAMo",
  "key22": "2JGGMQUfnaip4ymdqEGrYq4gvp7M5UZvTKrUbsNvzw8Hf1ziBqyUJrU346Xewt3R6zWYX5SwyQfx2LJcGmWgK9ma",
  "key23": "225ViQHteohuEwvQHFVX25uSYktgKYG497ngFDeNBX9GcqFA3mm3vWRBNmJ6VTCV8dDTvsrFtZf3Dx2AG6Jf8vdw",
  "key24": "5n586wmzqUM9aHPZ6THjFAthS8yS46i2XhMqnmVDJWKC64dRWzBukZAR82qHAbyquCEjKCY3RNgrv6oBcpEzVpqx",
  "key25": "621SEq53idN836vzGd2pkHmawdhiqai4Puh6dahBcyY6MNtSaMSV7mHVH5vcCXFMa41aA13eXCx8sb5KtNSaaRWY",
  "key26": "3yc7PD33hpbQnsd43t1fipiUxK5u1RCxTrQDSRVjCBgNsKkLKwRczPAHBd8h9uLoGNWAQ9vmiYNxnphZRhGozi4u",
  "key27": "3rFdkiwj7mpegSCQ37kZCrGigr9V7LyAohr6GX2A6rSZ8MJwUVrZ5Gd6ip9X4VEFtXCYnKxX8fgLFNTpdJppoDf6",
  "key28": "3sPAXRMeoEEwcQyUTQ12dRCyyDw7NnCGc9E9to2CaEL3GiBBmkZXvSsFvpfTgkds6mFrpkC1vAGjFWbVShoCytA6",
  "key29": "5ZhxmtkZBsHbtq95nGLEPQPyeo8RG2ySLwdiy9eTCHqcvzPkAoVjAyqRmzMsj7iqxHaBihGJrkJfBmYuFDmKs8fh",
  "key30": "2mvhR4mXV4XHSyjgSN9eufpKYavZwou1VrCrYgR4ZQuHXyjn2ndDFrGcHmVhus8pbbbnWK7oqpARKzCxRtGErW9j"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
