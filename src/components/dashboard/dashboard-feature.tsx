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
    "5izWWGPMwAW6j56mL3rykY23GPMJ8K3kHEAySueQR4mN7eWmZWfabpXdDYzq4zbxFaHdVjqoNwVoZL4xKqFE28DT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46P1RcEtW34zZrkaLFSUFGLGc3rzFhC5AkWujZzudVRm7G6Ys1DmMCKkV7Ssk45puMEdf7Us9KCnGpEVAGVgsdue",
  "key1": "25qH4EJftvcywPDxaHua2543nY8w7fqGuxqVUj6X2zZZ6CnxmWVRnRgEfAergo3tVGriCxgXCiNf6nUNnUmjcUAS",
  "key2": "uQPUxnwt9fGDwzc4giJBXe2ogAQF5qGoEa679kyJqt5Pw5eTtY3RT2YwfYoLrE74uo2KfvjV9LwpkfcFPVxZgz3",
  "key3": "2ZzNXKR19CC5dwuvkAiPvW4FWvxgXLwukzhj9hyNigE5EpfyAuXwPkTn4h9K1hM1Dzz28fCeW1325Hn2fSctmHoq",
  "key4": "3VzT52B6ojQpM2LuHud26BMT1KjNYZ9uB8a5WcVwG9LCWb96MX2QxJywVmm9TZDzUMd1VpW8WxxLubfFvXXUbxJV",
  "key5": "3NbDct4w9te21Cztzz2uJgw52gtC1D5eqBq8D1tdSsoKm9XwRSiPwq2jcuP22mhGMaePJqrJcCBUd26V8HeFozHa",
  "key6": "4nw2pXkxEXwZFY6MKj9KuJovgbhB29bVh4FR9WTcWm3W5PRe7AENmvWs8ZNHQs5fsCYrvb3u5KhZEf46MvzH7pQD",
  "key7": "ZGm8wFwYJqFT4J8VyzoAMNT7GcCMT5zH6zDF8feiybJ8z2Hd5z7xwgz2sQSajDcfdHNPVyxkWdvfJqP3EsJBYJM",
  "key8": "3pEUT4Km1BdB8RqFa4EzSNZpx2WF5ByJyGtJE81S3Ppxo5CrEtZPLCTzLJjoLuQYNZcWVLoEY7FXgYNvEAMTRD9e",
  "key9": "4fociXxJVexWU7RusZ8gKYp79SEVoNXvybFYqwGJMkSA3WsWn7UZDKCjNA8VEzPUYah6fTJBRJJepCzWYat5yZsP",
  "key10": "2Bvexy6VZ5et3n44gPdCzedJjHNBrYb4mvy5wo1PmyuhmJ88LsNHomzgEDxRtzWVsU3AmvZYmSX3Dxe2fPHfSiq9",
  "key11": "2KowZmDH4gjzHiecgcni1qy1UcEhXrRJxTuc5NB4m2BMoZE6SVJqchPaxSTZ1Auw3v94AMxZ6hN9CHqBpExUoPYv",
  "key12": "2KGbUCTe8d8wbLioUieajvdhABTkqCn3Wp6rgtEtv4gi7KrYAG8pihLnuHZqPi7DgmZdzT5Bc9QLDJY1qjyvvefT",
  "key13": "5EwY9JjFtJsx69LEBetWfgQxLsBSHSXhghh355hnbfYLvqKMQXCExxPaUgT1aJqTmjCWcNfPxF88r3c4GJWKyrJc",
  "key14": "3tXTJE1RVCftAk79DvQwSEXhkXPfcCGLanpK7DxgG4iVyNbRQA8yRx2tm1SL9DiN44yFHjqb2sEJN7517jLMtZVu",
  "key15": "BZRfhg7iWX7wtkfp6unAfDENigv9Eyetzzqo9XKKMn8bTF55FAAoWdCruJoAdbJDoaMEeAMucCxa1wS9oodZSPY",
  "key16": "24JK1mykh2xTMjoCZgAhTW2d2ZZg2XvoPvQb2ZE1kJcjrt5H84zGgiy8qMb5GNyn9WFekjJCL2HLCG25DcufkzBi",
  "key17": "Qe9Ue9fQkWabBLbBNkoBJPsT1XHFJzAxUrDyFWEj7qYeU9eUGtYQ9wBiqrNiXguZgNrzxi6Askcq9rxLJv6vsnv",
  "key18": "5JpTmTGuKiHnHHi5vi8irSEUd3cL2WPYnztBYiJWayqPLBnyTMbWVFVcEfKNbo4viChEi7iNKiNnRGuWJQahMatu",
  "key19": "2dUvuCGvYsypM9M5DwFQzUq6rtV4PNUHLXZywtG81wvmTJ3RTh6xw94tgtuYLkCm7oAGg9o1tf7pk2XgciAMPJAR",
  "key20": "3GjKvZUSj8Cep9jVp9iPMHD2mkGYY2Zb3Dhn6XFVUfSjhoYyUKX24xnjbFKz8G4UVX5FDvonkx2z2i9e5giMqfjd",
  "key21": "9fCy45B8cy28VEkwjh6wCtUfg4UnAk3dGoietpu4HbDp3rfFxQMXbHLvtbotiDxqFfcHDCLdxaQKsEHfQ2VupBL",
  "key22": "Nv2pFx5SdNczaXyf1xJiPgfP1w9bsJACnvgZtM6BteHS39qLMhimgVYFhXYuRzchTw1ioiDsGDiFKRP1hUk5D5D",
  "key23": "5TMdXEwWtXVJM86cck9Dy3EhmbVW3J9RYDENr4nro8cJmvXqZRVTLRVwicEARYvjWhsrZ63Jx66hfpeyvkb9cFV1",
  "key24": "54SQkZxxF63vPbcEvLATxbayYwnnkF88YXop1DWedKgdUDincyrWVaxJVbEteHsfLuYPFXWVj9NoDJ1kbtUgJTTq",
  "key25": "4AvMLhy9Zs2Nc8jKnbh36BqKmsZPE1TKtdBKvgjY5oGikPoShhb2neqBPAcSY5AZu1YhYDpc8vizazSrLnq34JV6",
  "key26": "4TvUiFWKrSYXjUsjzWCfkhFuazL46Ym1tv14ULywoUeaveCMsabim7kSGm8eBaJQRghjWhJaCnwgAjgnqCW3yujc",
  "key27": "5o3jAAjxzxddCSYLYMDLjDZyD94TocxwK67GTnct6snoXgXyhojVy6VyvNLCrvScFsWBxdyCJkkY3MJrS4TohbEX",
  "key28": "2KHikT5RNSEvVq96189UK16cdaxW2fQTa5StAsgH366asMMfBraba1nrLurd5vyj6BUoktdKDqc9yn5wJGtf17Xx",
  "key29": "3a4GHxwDYf96Z5GqftQ8ygBnyjBfTpJjChTxLUUFWVotiEsBPrKxhsEJQHvfKDwJim1MU5eWr5MNqJMnCRXNh4ap",
  "key30": "2QtK1sh32daQUVk3viWZnhrj166gUd8gcMgqdE2vHCPUxiJSJ6mbVW6ymK9XPjbhNBKAJ1LrcSMqgY7BkSHKarFx"
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
