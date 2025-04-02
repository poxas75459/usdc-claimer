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
    "3kfm1cXzCu4USWwhmFTwpGns5icNhprHbTzhVTLdZdLRHZZKcCQBfC2vS9ojuAH9yAYVmL418fVtAzXfm9N54BWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZsPkmSoviodg1LKRUtJtQBbHi2ncp8VhEosek5DnWSLV24zGxmf5G65ovm18jZkQ434GmJR97SPDoE8hDnGoXeJ",
  "key1": "YejZ433cUsQrAUVmJeQgyUr84GZeXzru9d8BFHiomQ8FXYHamFiJKFCGmR7AEog7s2ne5NDhPCQNBjwJ5bhfFuk",
  "key2": "52vnSYyZvMfEyCEXmv8veMhasEQahPkpWPrmTgpaEGgYz2CR4qusHaKTH6MEH9SDGNzthXFpBLzyKtZktJMPhaEe",
  "key3": "5Rz4A3zeXfrGsLApJfbZNGXYEiPD6cvrLj8jkFEYAwd5ukJgrDgRADMou1qSJqdZhiUT9K8ZtbzsPmNr6Hrd5Ak4",
  "key4": "Rm8CVmckR9e4VwkMoS1GyaKCpZP24v51jnTDyuosSBXVNGzXvCoJkqG5XvzDCSh3dSXSP8RWPM8jKm4LGHWSLVC",
  "key5": "354Vfry2bhFSuRRoPjiks322HC8AAvehtDKS2X73nMcKNhZt9t18jrTDQzuzR1Ea7hupdZRBhJSaKv7hfw3Q5Ljp",
  "key6": "xrwAxsQRUuR6UtDQ9mMCoPkb14z6pVJDWkt6AcRdPfBkeCx1mM9esHCgxDzrxU1RTn69hC7NoaekQ9uzcoKZ4nu",
  "key7": "8z2j94PP93pyGsvnff8UoBh2x1DAMNgFNj84Z7KVYHVRLPh19hCVk9cYQ5JmXLNfpvu8pXtHitipV6vSaCRPMLJ",
  "key8": "3edCoX9wjTCfcQQeWhmWeuB6fPFwZYSj9dQFopychwp37We11jqwnmwgZjVgrfiJKcPPKUdpJHMrWuothzLxTXsn",
  "key9": "36c2n9GkPhcD7hCzyHfjojRrrPKcMp8nnGY31ixzrr32qRDA6AwAkHwNMVNHGufr3zBSTm8RZamJQ7MwDCVzTBd7",
  "key10": "2UMjYvwFVLk87x4CeRxKDdb2tayyvMD1CeyvmdsVprEqodqr4ob9uZKDPXNMKqoAiU42DCedCpNoP7ZEmyz2qJVG",
  "key11": "4DpMLFNeVqVSr9sLkm3wnCoje5r1U5RJJffZ1vhRAX5SXE53KzHKyabP8cRf4eaLdyAA3gqYSLAhxYsKrszPHqs5",
  "key12": "59iR5hVQ7ZUFTnRFBvw3FX897MFdrsdvT1BKq6a9XHNLqKyK8AxuGbS5JC8WnMQkfvDHYzPc4SpS9aHdgh8f9fma",
  "key13": "5ZidzxaNMcXymY18qtDaiGc3S3L1dBb4UFTVPZkmLpE45WNUPZ8Uid6DjmjU9SrMvDKYFbCPf5dezjuiYZ3S2wyt",
  "key14": "4gqeYM231MzZJDSiiY7rDdQd2PCf5bQXmtWXBy8xDs6CH9wYyfHQwvcdVweYkJ7gopZaA2Ji3xM8MkztaZyFuyBN",
  "key15": "4ZRof4rbJxwEnsLVmSPWE5H4sjFpWUCpfPbpaDMVviwUUMSww4zwFUkyPQ22BvGQm5AE1ToB93gwMd4KJ6yDC1tQ",
  "key16": "4KJrCuk7j6RWDydoFZrtpCmsktihut7AQiWYSTBaRKp5qpnSyBWkL1Gftder2NBaQZrzVyo7Y9vDHPaQxn73wKz9",
  "key17": "XuvS6eKuvJdHNHbozrapxNjpAVa3mTuSLeLCV7CDi26nvLuTCQyhm5Wsia4jN2jzJRwda69Y8mQYRboCpQGak7y",
  "key18": "33zTEgtwqBNSqPj8eypjC1AyNYaXQ2hDyR8Przsg68ifHNQFS94yLabxJ4HDPpRu56JARdC33Np2Loo5xQ1R2r46",
  "key19": "5SRgoxEPp496gCznxdfRUmYJVaUxuUfeKfuv5JyQfFSQN4PsrhHsydv3muCyDuZx3S6LkhT7jYQKrkKq3PRbFJ2v",
  "key20": "SPs156by9RikYE1GXnSw5E1k6RizPxKgTk1TjmqtDUHshcqxWaTWRqhgAQYRP8S246pQGUgKmrJNSRzJoRhuGGf",
  "key21": "4fUXGWqRP75s5m4EZEm49vTurfY9Y3NtnpZwQVdm7TLVSPdK2Xyc7zTj6G43kqDpZUoQTWsyHRm6REhDXGxVr6Q8",
  "key22": "3rbSHYfJbBGy91sLsuE7gJzFBhmZzeouNjmLGmZHxPDDaZSxGq5NYBwisQAAht37etRmNF7b8DM1WkRigvrCccBp",
  "key23": "2KwKYqvZiEioJCm5XTTR9apEZewttkNYfwkmN5he4fDjuv3Yoe4xsNEhoSFX6wkS9uNJ3cnuRo9WpDJzSDMS1mYg",
  "key24": "2UoibxNSEt1wuBtFTdzYmXEBepap6xw4s3Ur2wp9UEodrMDp735pBQt7bevET5TxcvC5jG9oZmGfAi8Uoi2y78FC",
  "key25": "5BTT7QaBuFZK8P47g4wTNQCxmBYrXWfF9baV7NSuQi7nrpNy68JJjWPEnb3mw9r62BALPxb1AB7VTQKHDjqZb7d9",
  "key26": "3Q7UeF8naXZuD9CUFYg17Q4iGwRfzE4jCpWAGP9LQqoHgYVczNNQWABiAnPmxG2S8forVjZU8pMWzezopfTQ5AXW",
  "key27": "35zVg31qK6FoMWY61PfQadRMCLbQtqKGFAQBUjwtNrNGqr9nFf4HoX2xxs7n3Q7moFtTgPkG6JozjSqL2v6FgREG",
  "key28": "4jnmJkkmsQWGBJq1abjcxZQVLUNV12RWiC3z6tB7gnuhrHRPYMcLJfxcL7xvxGGG1DeT9Bo6QLrPS9qoc17dipb9",
  "key29": "4o1SDEJaB2JE47Nc9Uv3J6QvB3WyhDEpvWXgPJTJjVMvfBj9KwoYF7sSVpzMFbsNZ6pJpKMX2Xat1UhzR5iZStAM",
  "key30": "2x1pkGMRdZLT5CTPDgGf7uMiauL8AGsH7Hm8CwxWJfW7VmVJ6nbt7NsEVUuHCH1P886LDDqgFk3W4wXrgoqYMrjY"
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
