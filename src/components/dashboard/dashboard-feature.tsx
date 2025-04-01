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
    "2ZqzL7Awq3ohHhPJLbradvsFJTCBJXvCLt48PYjuJvTPA5GnNdXP5AVQk4anMKaHPMVrsqbtM6q2n1vePiQi4eeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eAiyhRFDQCoMgMVdvx6PWKVd1pLjo4wmoyvoXdEBgWGcH8tRdR3w1WbsrKJ5j5BLPiYAFKQvzWTFzDgidSVoaiP",
  "key1": "5YVAvHH12J5JmxxZUaxjDgayVr1M22VtDR9p6N67Lr4CDsWyohZGyusv9EyxDvxJQkP7qg6ahZLv73H3aDEREW9X",
  "key2": "5pewJHcTqSSp4QcePz7wkAbSmMPdYeunmW6U6dewp7niSV5YDevR3YxtqjRzJrGWx39hZX8byz1epNNwUQ54Hqu5",
  "key3": "31jjKJB7VfeWPSUKnCVeoYkuxq6BrrzQ2FD7cdfC33AsQAi4YEU1KQYCfQgnunjUuBCEQxSWYZ2uKwTnRJbrfmMz",
  "key4": "2Wb8qEUpC7CZNEtgWe65riHh8tvPBaaeZknkTF5DCyvNCCzD1XiSB5qMBJwdChoubx7zyy53aucEJEAJ9Te1CtNF",
  "key5": "2bkzBZ9jCZBs6PAZtdiVA9mwhhuo8EFFNc5tZs13Mk9nxkNMhbUSR2XX9ByYFpovEh4yyJhGCZGRAf1G1hoRo5i4",
  "key6": "3tdpcTv249aYori6qX6BzCmUPX3z35PA61HK1U21HeHKuzKru3t15EFR2e2ZjLsiuNFtR4XwotQUkU5JiYtqEA71",
  "key7": "2VM9gmRvCprw2wyK39XV9uX6MraKWbYCjNyV4sL19nD2XmCLgm37CG5WriF5WpZn5yKq4ygSjCXFYu9gi7q5tPgx",
  "key8": "4LzswodTe9Qz5ZVUWymUVtUUppNmC1pPV4GuGWYqP6PUghTNzkehFBSor1uhhcWMT4QgiBEr6PSwqANda4zMhB9k",
  "key9": "29xmaTTK8wybNejx5vuxhHNJX9rkg76kmupfsP8wdYwpyiQZC5cwgtBRjKmihFQBzpy2t22KKwfp3Y8ZWyfx6zgQ",
  "key10": "5MUxkwKiYyWPYJLZa3wyb55n8mri7i5erYgiJB7WdxkNUbJzFSDZ2bAeyEpLbu5q2YmdHPMHw88yMK6kES9hGZiy",
  "key11": "2XJbjrBvN2bktagajqecCkegXByrSmqEjeDToFShQmgBJzgv42CzfdhtkpzBYwTd1kBoaRPfwTo7rHoc7Ro81VXT",
  "key12": "43gwgCgi2JHZEmX9dMDUNvFHzoDHtVMLWmYBKWCg58o8uRYv45MamsywN7yvJNp57K1XhrVcWRxBjSoxVrpCnLzy",
  "key13": "3pxKVw7awy2yHe9zYJUngjRNMUZg2hfhqz1EfVd6jMcDKNpzdg1JCG8NRCpxy6W9qwLevh2KfQQWQ98L25hvGoxn",
  "key14": "5sBZBCYj3FyJHjN85y8jq5FvY9gb8ptiig4bSvvrPhZNc1RYGQJfof67MxC6VKzw89mNYFbDytgm43bUC4PggJPi",
  "key15": "3XwM3RPVrAe46anVd3UcT71c37EnHVGU9UMcU1Vkf1N35sYkZDJKzWtChvgcT5XxDUquwAJaxYN4sVbLMti9RCT5",
  "key16": "3pH85Z6offzPjDDh3RM4RjhdeAhKCvokKoHyyCQrm87qcWsi5zTs6ThZXY5oMNzJYdTb2WWGiPDzcyU2KcVrZwi3",
  "key17": "5DUvebDoaHnsLSB5LYz1Std9ZUB7cb6w1wsKLJPnaviFg4Ntwq6BTxV5f7den24TQyZ5QsJgtXhFPGuqsveqYUhM",
  "key18": "3kBtbTfUN74HnepbmHVoKudpT92u91i1vQcE7rkUTcsmrCewgxrjTr5cdrCJkF41FZE91GEckwouxhFD893UAxFZ",
  "key19": "5K6qS8d7KVq3dQ7yXRqJwCSLV2Rxy99Hi8kASrQDUtAXD1HLe5K79E8sQKganN2EuKq9kkcwjgAnCouW2rrZcCVT",
  "key20": "2YKBWWqCL49myDm7yLpcN8CUeNiWQkY1pccWMFyts4eTu8v5ZDVGDygDx2QpL4KTzkTrkJmPpWQh3M5SYxyoqutc",
  "key21": "3Jq6W1f4Ezi1pRvYknRGwn4NBbh1ergJa84DgPhiSjbvtxjuU98B9qQjnkUDDpekw1Fpemrr6SGPrtd5h7WzoqQi",
  "key22": "2L8tavmh2FnBu8PkzNrBrvVN5zp3xUQvqoc6u1wYixp22USrmBEegZfXHLHuZu6NWf3GLDqM4hCiGBqhGHZSAagq",
  "key23": "5TKYvkpNgowjL36dQxQi9zLLVE5p5AED39EAwGoJhwFUHvVaquc4jkkpnYPAQpXUkVs9Lfqhc8zHDmHrrua155xe",
  "key24": "5Z4myMbuPgg5JQTQza9P3V9frmi37uiZ24W5W8QjmRnT6pyCkHgjPscHy11Jc9aXwMy8RDa7ko9SfCsJYrK9CPw2",
  "key25": "3LN1iCs9cVeYCZj2FHaxXK29W39cUTu9kTDkB6M7ekmCbcCVwQs3c3TXms5UnMubfbKQkiRvvVmGSsp4DrKZmccc",
  "key26": "2qrk1pChEGNSvkCPboBDePX8dJZ1BZ88DkfTDzNJ5b72bXun2RCDgzhGDFCDXsPgRu76AFmSMYURbLz4GjG8HzDK",
  "key27": "2UvFGKDTWBpfubf8b5bQLvdQAwZHW1PzptqPJqT65CWx5WMmD3Ub6xhurgk6gHe9Qt6bEvHbbqNCxHqVxBm42zkA",
  "key28": "3tDWi75ueBiMA6x68hRWomiHR7ekp74EWp5t71t5Ax65iJ22D19Uqd2uZMwLy6Wx7dRN1AG62Afp5NycD3PaFjzu",
  "key29": "2wY7hWqTA17Wq4qk5CL3NLnmtw4evgfsUni3PAVPoNJzuAk4TkjiTwSxscn2nTAnJan1paTmhVYWapdvzSQrEMPT",
  "key30": "2MrqucxMoNkurEip3NFF76ihSSduvQfgBEERnMxtnPzqCCRK9LxQLcCKNKyhSdLzpnNKrwuUD4Ur3FQj2qTB4HsK",
  "key31": "3PPBwougDAsDreo4WSNuVUybMFzcBAhVdCsQmc9zJEowUKd4QjwQCikAtGRPoLVxDWMV67YpTdnpM9zEHdHt2YEB",
  "key32": "2dUG7b7hPuvY3ErUR8DJAM7dNdDzJ7kvTktb1in91PDtckC89c9yM9ya9vkwuWYs4FEZPQiF8VevZcRS45ECno61",
  "key33": "HqheC6rAvTfyNh8KRRErRbYG32T4C5GMvTty1VAQzQrm59BUNj4nMKX3kDV5jFTNksnXkLDqPbmWexHrPcMbXbk",
  "key34": "5JjmRdJTM4zEiVBVbz4nbXCpVoJw1ZQwMV8f3iQyWziiFYfqNFtfzmLvvd21UZkFwPyfcqKjfw7pyiZ2bk5wAKjJ",
  "key35": "3JGYHigqPngP6Lk12SAcbFvfYNHcoCSvJScucWjzCaSPkudg27B5iy8F1jic83pHUz7x9vsgibgK2ZEZwAguznL",
  "key36": "2ARTpv5AsNM4uLdSSjrn8Ar9JT6YTqypGvapUrxSdG86fyK5GiHYQ4Eta14UYF8u3XihBp9tnSjicqqAiEeHjjPg"
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
