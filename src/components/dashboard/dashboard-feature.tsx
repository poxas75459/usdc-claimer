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
    "58T1VUHm2PDLcZEt5cWgM8vjP8PCEJupgpaUs3fSQiTmGCeo8mMCTnadFpXuU8NqK9LYKfvxqgV9o6xgVvz5RZB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VUcURF1riVQnGoYrhp5WUv7UXND55AnPqAMbT4VehhW1re7bsP3qUw1WdV9MRaJtBzJLirJTs8G4gsP3Mc8BvKf",
  "key1": "3tiQiPcaXyY7ZfM6HeLKnkhUW5aEFfYCjMtV71ZHTTFfPQ3Dzdw7drY1ozyXCBc5AzANjf6ntfdSXMF1eAakUArn",
  "key2": "4g2E3Y1DntrZHwCN6QLARm4RnJwKVvcAfscwZmTYqrkLScL1AJDL6Xx9ug94xwzb5oRCEA935T11Fe3eiAdMf9vx",
  "key3": "4FzUUUa9HtN6BWnxVU8GwKGfNCLxBnvsnLbcPnYZ2jtm4Y6pRwgwoZKN1QFgSmJ2aBXr3Mkja9eRYpNmRJ6Um8t5",
  "key4": "5JktdYe8VU3rFUHMXn14FpNSsfThtzcg9XYiYgv5okhnvkousfQP9z4cVdYehfQUFJ1w2tSUKaLyXMUL6rXsVNCx",
  "key5": "JUfXMTkSQT475JifiYijuJcJmhAatPTy8TJ9RsEu42cUSGtH2oD339uxJFmVEa9VPdjWyVKmjrdV3XrwrYSUix3",
  "key6": "3VEZtuzAk4ieRoahQsyZqs5iUxRr5QLHqhbYNQAi7cVy1h9wg34HzWSXd2ptgCCmRo1VigtfrE4ZDw1NgZoXd2om",
  "key7": "WXL8o2WCpBUwNnjUF8bgXZkCc4gNU9czqi5hSN9HPe1yXryjpY9rR2fbfdpPFvwMFg9itKak68jppWZ9DZZRqbw",
  "key8": "2rNT77PdAZjk33YQW5Sdi2tWxxbAeyJb5fGs5iiVS43rW5TvxCwLrd8pETRv21VBv42SpjwtKRXPJi2GuryFueG4",
  "key9": "4csna9VXYrYd7aszbkjTUEnEPUSkbXwbGmeT88mkU4grPdWScTxy47V9S7ktYCvMFC7DGCbzQ6qpjqWWyHgVUC5j",
  "key10": "4FzLnFp5Tkj9EL1gbzqV7hVu3BgmDw4M7weab7bzJTL1Fmpq29HpuLqnzQTeJ5vqu6S3TVXzoAKfdgHWvAhdepyC",
  "key11": "4rjYLTzpejaYM6MLWmiGq1kWmQotgp347gbsF8avXccigFu1i5M6asgnpEZ1wKmdkA51ZMSYgsATTkdfym44VAdX",
  "key12": "35NdtfGr1LGoHsGmJunitNTqrRtKipbFyJYc4AxNa32APKozz3v2SYyCB4UbP9jbxpKgbSZucyj1zEsP2MdEp3v8",
  "key13": "4RS1jX1yKSs62N3zvbVbNVSym13BVjduX2PVgmYvmtMVznPdug6dFwyAsU6oUMxrfNzZxJTPtr3F2MWm4RuXZYcK",
  "key14": "UQqVjDPqpUFwwUNAb3UpHwyPMHuWnEppd7amad8UE3tjYoe16daFYuEJ1N96FbhyKbayV1WJmpvDpRcAh59Rjz8",
  "key15": "2aoCvSeQDUjHUu9DanRqw1CSBjzrRR7stqAPnniU4XysUeX53A4hM4xMz96xrU6o7ZuzDveoqgfgBEiitpLacfst",
  "key16": "UFrn9ohEb5oVKY7LCcJBojuW6UmpvGf5KihCw7APiXsWTV3qJpcfmmzUHP8gDqs627kLmNMzgiVpeyjpYVBevBS",
  "key17": "3hnVJswmzymdftTyzLxUuCHdjppLgmCdwEsqoYT59A56neJsCnxhkqq4ohYKGn8A6q2GYngf3iF9S775mCZU2zp2",
  "key18": "GBFFM3oBVtgr1y47q6YHmkL34mqeXw328TxXxpCZfcNHP5GcivGPrmnRpc6Uz4f6eB3VVnHRhVAGDm6QvkMqpzr",
  "key19": "5gCVxTSBQKcwoy87NYX27C479tiGbBeZmcsaANGVKGpauTyC9ua9Pm7ivrzLhUGUhZSsqHcrKwnP3TvgaDHaGZ8A",
  "key20": "5ZmVcy8pspWCmAA63yBL4XyaU1ouDr6kiVacvF4BngDKxRHwGgLUmPQ5weLJLaPdqPJkDUeA4asi9nYj7hueLrcH",
  "key21": "46HcMk3TcS6PW8PfpQrLhCBRnhBfybS5VUYpxzs1haTqBmChoPg3GUVJU4cJZQb5YV18jDQ27QpUUJy5Shsae76X",
  "key22": "4UFz1uhAy2V8DdB3yXA9bCyCZwZvX5ZExrpuSLW63J9LoMWzuUcHe4gdeUap34StNPFzuz2x28ePKaxkdyshMV9B",
  "key23": "4wYBXzxFdRomzuesuTcwZqP1VjLdcbrsSSnCAXoH88iHajbPRrNJRvEcZgVEKc7wGMtUroLaVvm1qjwj13PZAiC8",
  "key24": "25bGbYbxA6hJw9bLavrTHrcAfzNs5hMfu4V8tnkgVDcRu7QZmkBAYsKAcTc9bJWSTmXgoaAwjjWQd2ecXiY8u4yS",
  "key25": "2oe3DkG5zxnQPRumNX7rTStD3FMNnZK4YNiv94MbC2aNqPNFyRCzDKtvb5aNJNehd9WTy8PxzSbgXy7ugXPLbmNk",
  "key26": "5QjhGj9bzx476z3QPiKr8ZUEgb6c4GMfE5a4rXeKLE6QXRuK8koRxLg8imiVPNwzKcXNygRAQPxuUNmiVuS2uBrm",
  "key27": "5jh8RQAqDqJ1RN1q9FQHY1HNJgq5itgd7HHNjNmUn5Vee3KrZsg2iyW7GCkPkVP9c5dmmdsPb9Z93Phhsu6YrMfX",
  "key28": "4SRWCeXdjBSJUuLfy2g61LZVCVC7HbJmc16vLouNHjg3mYUqiFMYBB6VooLMkBzrg8hk2mz6hVknNGwjH8op5d9R",
  "key29": "37GvYVjsv8d9DWSP7tFRaakFM26voAm59LL9ELFmNvF5rx1xnLjLCeVLmL31Dh1Z1eWBJmqQFd4rxC861HjbEzcb",
  "key30": "5aJ1bVYinLaezqtwHiySrdJpouTb3NsxcspRmGsYWqYPnPvsTCsaVvEf9rUUAmka87HyphK7oPc1kg23Zqz24Ju7"
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
