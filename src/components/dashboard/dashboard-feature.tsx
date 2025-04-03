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
    "58hjAabhNUQGurpzqFGJyZRwCocW5LtenFTKJTuCqjzn8VJV9gNnREEXRqwYYoKzMQaYbbq5Yrt3ws5XiRHKf6rZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cykFaaGJEL8QdAJqW3v9X4zC2aJgRmPBpi9Z8quYFP9EARsHAW33PDbnQqAmriFkuqh7PyKHdGwwdc3ZJFQ1ADN",
  "key1": "ywpwCWjjoVxarF6kyo6nGbC8WEZ3G3JGmRc6qqxwtiAFh5MDa69BdaHoQfPHLnLtgsuqWiphe1yTsxin4szAhTM",
  "key2": "5qZXW1N4j25GmA9SJx5uNWdGmi1M4cYmcJhswPqgLr5BCcEBFRkGWvsDV7uxPZUJjN3oQuuC436Z57Rw8op8fPvq",
  "key3": "5QGnAKfHXP5gvqVs4THSfJCTPYQY4DoP7VAHAWDzReJUn7faEEzTe5C4zJJ4Y9XeBhmom3w4ssiGiT98315wyjfw",
  "key4": "4ChNmRpARREyJdgfJrZ8wmFRzb16wVs5FUET2uL7VYfKoWSjZDUfXCUdk7cK3jc5z8rUEZchFZKvkaVgfUnppGWF",
  "key5": "5FywR4ZhbXQSkqkd8tqaajixxXAL6vLs9AzyADGskyUttWU88ZoNCEQDYnwUCdvkqEUPD3enjy4FS9Btory5Zgrn",
  "key6": "5DsAY9VP6A1A6eZNjeKR5ZXc5XLrE8gtXN3tqUURUV5Qb6izufueX2GkS6Ua2jbaGBavbefsPjnsxhCMcZgisFpa",
  "key7": "4fpRU2ruRXLJQMjkibAh9SXiQoDzLY5bCz27wSKjDUFMeemUgEHBfaCLwxNkSRXb1Wf9WV4bFoWUQsYd1GY7L3fo",
  "key8": "4xNpMwho2g9yLAhwXmCwvZh69qkrub1KJo5wsEk6pRvLTZsXcwtrKraW7eHEQHvz8eyLEB49XgnhfGm1rRkynEJT",
  "key9": "5iHVVBBh1mzg3JcJpBrxGN6yg3p4Uxwb6pZsA4n61ESZ8urgE4nrM5JDNT2LJrr3BML7pumfKYMCvyBRCXhRfYEG",
  "key10": "2g1QMZxQQCgii59DHVoK4kQBwis8oa3aEF1yjyQE3zg3Adp96LHJWvGm6q6uAXCKCMS66FPUsLf2y4JwA1bRgWAk",
  "key11": "3YC3XYgYZpX1MQ5JFJAiH6HtYZ31cN28Pgx6uK4ieQPY6kCTr27X7rsqJPw9tEfK4aRzWT6e6iZ53cidw4HWGqjg",
  "key12": "3oFhiymWfxqzaFViX9MEyVsMiYwt8HxAByMCg5bSeFYpFTQtNNvnkJxewaCdNvvsEoMUgRZnHDsNW2qJaQotbtav",
  "key13": "c3zjdat5zZmzRAwnAxhYz6eM5XKbJr6mRRFjd7JEV4ojen3Xbz6xoNU2Ldo2UW9qjLKSY4AYoUR22n4Fb7iM2Nh",
  "key14": "2gegXFceVBVoG7pgvh3mmtfLJQ77LyzYX8sqvRAmeapvhh26WTa5TYPDZ1G4mwKswW9wLDAZ9aKn51fFoXUSAzed",
  "key15": "3koU1syoHVC9auNi4eKpCFAKgCPo1uLvhBKXZfNANVeair3pSaPyZoRVfD8vTsxGuhFjWwAzqJrFgNf8dUw8zAY9",
  "key16": "3tSbsZksxUnf1ZqPpcQzv3VZqYTK5jn7mJzArPSCttWRYL52GSZBtUaEGPkd5pcFQxHN367SBQrWF5ujjRzU46ai",
  "key17": "2c4FaH3Xtihv5muyb4hNiitTEM6ySji8DnZtEEa3kMz5by6RtktnKZpgXqHdanBRNBCfH8r7QdMWSs5JTnyiU9Eb",
  "key18": "2TGsCnEoGe5MCLBYpcm2xDejjWRH8DYybMdMDg5uqj2hk51DghnU7gSvW7porE3iQ4yj8yHR8eJkr8uf4F7csVfv",
  "key19": "g88wFZKffdmRidpEnBAA8c6hW76TJZJUH9z1vSBkh2455QZxeJBN6zEvUKWXqfAbxg5HJFEGSCdC7LMib38357r",
  "key20": "yxqw1kgmjmASbdNigvkzNSKHrCMktw5ArTTP9yj7iGXP7qysDzcZoZxJ7PWUqtea7FYmd1LwBk2HnTUoZJumGqB",
  "key21": "feYhjf5gXQC7EjCBW7yYQ8V93d31pmAxNXE3B2Lv4ioKopuMUWetTSqWfdCtoYSgdT72JdAgGdyVD3hz8iqe9Hp",
  "key22": "34Kcr8ABgN1Te1Vc39gpRvvNYXq6gwAnzow3va8HRTDcVn41XR7GVbMs3pD69s19PAhtAihJhTPer97zXj4SfyWp",
  "key23": "1o7siYH7s6bTpMXV8Jq1zuJMfftajhB6vHtzEEx1i1cqXgvJrUARfQL79EuJFMvq5wLpoMAApj3m3FeXRXurVTp",
  "key24": "4tTYpNxGg8ChYDikVj95VBoDyqT9ahq1yfqCt1H2GZ2dvDj92ipxZCmpWKF8seaoHw4bAwTTwvr5bfjowVKqKLiT",
  "key25": "5mspa4qmAFFAt9vYkWFGiV2SxnPVTDbrJy518Fsw5AGfyNY7M9EnF2vZQunYJED4F6vw37M5W11jcq53Axt7ff9Q",
  "key26": "5vpe2xmhSTqaz7EpXUseUKzQonuLJExK48t8cnhgcecp1NgL8hBS3tbqwNKAcDR7D21JM4y6VRqKaXJqpviRsiza",
  "key27": "4oQiBe6WPu1sfqRwQKCRtgiR1KF3jXdr8eq9nowbVbRemFg2U6MBcp8wW2Jz6RymFMevfEDVaFopicD2tF45dJdj",
  "key28": "LndZJ5zDLCAWudD8hQRWsffaSsB3wtUuoN9MrgWZJzCFFuy4z64aQN7PvqzVntahTfYaQzRPKi6KuHLkh1Dc7wr",
  "key29": "5EyW8ugb8CKUEEL88xEpi71URiHRgQDziKh291SVSaG4zf2XZQXFxRnWxTgsX8SRybBH6GUJEXYTjhLJ2H6unuMD"
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
