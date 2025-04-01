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
    "2yQSRepeUdfgkzDMc27xBUsPDzKApioiqyKj5tLdir8uZ6Lem52D3A4tnhzRzzUQFkxREKqMURJ7Br18JJn5xCUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63orNGQb15QJuniTkSawXXRBTEUXTJBk8k5VM6ChaN18uFTDJxM6KTTfQwvxTeh48NToZdf9PTCjqMnzSBYrPQ8u",
  "key1": "399NefMf43dZUg14YpdpHTZ5uDLBzNw7hs9VnYfK2sBPHTe1sDiseYeioBvqMTdkRBx6Q5qsC5Bg73kL8bR91FkZ",
  "key2": "4h48QTsP8kAGtQhvrt15zTHwkbAiYFBTgqiiXdyxXDRhR4wi9nn77xYCsRZUZjq1EZQp4kSW8u4iNtvqQEfqxYUp",
  "key3": "2qWS7Lqv2WhyJv6KYNwF9avWK7kLLY1tk5tBuB5i6nC2wrgrftmhDXS1DAS5xpgLnv3NdZnwTuqwnDR9fBof3WuT",
  "key4": "5Nmj6UD1S1nAk3Lm3qhhmRmC1xaao2h2zX3iEyjhVzsxL1kg8E3UkL5BN92ijiH1ExVMFCy1diXDmLygWk7jnGa",
  "key5": "63VU3Nq1ghinPmrXHGUJwBvDH4vykV9HnzsAr6o8KFRr1iedhDH4U2HLX8qvCB5JML4sdyUvvSG73XEv4CedUFvR",
  "key6": "4ojhEVywHw5DPruVMaqE1kj1NH3Ntugou5ZxUpCnAUcgti1qhogQwNjo5FUCn8ZdSkjMppNX2NAdkzDyCYQNBDfm",
  "key7": "4mPV8G8CENNeZLxvdquNWyg6fe785Nu4ZNnMRvXEAHHL9PJnXRRLLbt8EVFgWj5pzamriFoD6wtEWH3VRJwcaMUy",
  "key8": "23sQTbK8p2Pe6DUNfSu5WjiyEXyyGvgFnzHuvCjiKy3bPTqTZ2Ks7RvWjTHxVfTFM6YdeVU52kNRLXgeQbJmb8Xx",
  "key9": "4eK4rk8UD8T7L9ff52mUsRCnBVwuSfjGniAE1BCxPeVJvXip3W1E8aP2vRTh5EXTA8xK25es25G1978kqpyn7YZd",
  "key10": "4tfwnzuXTJ5frnTYrhn7Wdf8CXrm73FboDeqvjHbzw2uXz38bcPDXg6w1psUSEKPq71bmyVYJ7bjGB5NeFUcaHRA",
  "key11": "F4x2GhZPvN4PSAzFP42XC8Vbjncu5gQyHsi6tNDgHG5uJWyvNjzaUscrRcs8up2rRqooRbzEa6WzxBs25fTqv39",
  "key12": "65uWfjWGLKKvm4oNrcqsK9Um5bTyiAXyeYKhyEFQduumAtvSGX97Q8zXNFH3XDd4WZX1fwekQq4Fm4QPkABU8Yc2",
  "key13": "26JQVJZbhGr4tgXEC4zrBQHu3Ee73jjkF41FckGGx6CRXVF5xN4v9mgWgJBoMUdfvV9rX3WnVx3136rixEutnx4Y",
  "key14": "EnAvJi92aQ8Tp9ZnSuAGxYzq423cfFgJe17kxQZxK6rGcwgSWX5Xkm1qog32frvHaxRBLKVkhsgU9k4RszRURVm",
  "key15": "kPNpzouxmN2guyaLyMpbV9xscBcVFCyDSTyGnmfUsqaEmaUigEXbjyNJLULUKmbn5Kw5n7ByRNTwTD3HrtZz4fh",
  "key16": "4TGyB21tDarLCs8mqdG97ErRp2gLfeg4FGaoWwuuXpE9hS3MdJJXQTtH49YGWZZPxeHn1WgoX1YhvBMyEnziRwm5",
  "key17": "2tFkYPFV6Dxfra3YbARh33KDUn9rHTXvRqUTfhx8CaF9fsSUbHdfvGPHSyQaT5TSGpQT2xJsMN5tULCUh3o7m6az",
  "key18": "2Jqiifzjcp4JC7jV4EHw6BuDD8eexmkwzb4HmotMxdZxwvzFNKPtmm35XBvn21FqXLrwyhSArEjXeZwj3yiTd6vA",
  "key19": "2R4WdHBEWwBnL5HnNQKuncV5MsCfq2XHBY71J2f6ANzbdQD3AeBisB9vTWTf7TCPy3W6E8grzUmFHRY3ybAmbiPJ",
  "key20": "pFmABE4EiZwgL6DWybmu45ZhXRP3wn5S1iy8WapXNA7uoQYKKqS9PhZsL1Ccoxuv46Uurj4d1BwhB5Vew6kL4qe",
  "key21": "4BM3Ew8WZJadUSmWTkjGijLpsbTHWXiHyGhpxZ3C7DZEPajNAGGGsaCzbJCLAGPYRBfvkykBRCKfqq4LBAuDrEwd",
  "key22": "519ibNoF89FzzMfqpME9roFYmvyBy6qB6sye3FyifUX7GU2WSEA5ohGfcBJi9jFRTsswvFEWbi38MzBATuwvaFFd",
  "key23": "4j5KTMCk2sTdWSyyzKr3deF7kRQHwwsqCQVabKtottgyvPfvV4CMY7E3eYdWdLoBGqmzsjcuwzNhLxuDGYMHxf8m",
  "key24": "3hXQg5ZzfdR5XKoLruox5iHU8jRHoAFki3XGKMXzRnYw6YSqUwXympKjzDnxysChLzPiRopQZXxmAdRYgQ5SK8Ee",
  "key25": "3Pd91XzfcSmvDMdKsGYCtutyfL5cdtCmU1ziWdnrD2Z6zVCKGf5JjEDtPHnGik4rksPhbYkJCetB1moJknANGF8s"
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
