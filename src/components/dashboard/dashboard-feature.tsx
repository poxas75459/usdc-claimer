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
    "3BwWH3qa3Eifxngmf1rMEVWJgKfPD1NbELWa4sLi7JY5iGSh4nGPEHsDFQgA3FhVRkeBp6MruxSfHEj6kFJGUkrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hXmeoCncyjY2Af2TTig7mz2zHr3Njb1jkydnjUFC4U26dLUgeMeQhkB7Zt6XcQze3Zg9SGKgSY1HeDmvp1T2Egc",
  "key1": "3jxqKLhRgTXMauC7LQqk9ui1GXAbgYt9k7e7vnCSuhNByhFPprXF5qKtahg8WvTUPuV6fhjW9aor9Uv1j3BxyyCK",
  "key2": "5HYvgBiMbpWx6EgZuVZTjBrF37A4fz8feXtn4ZA4L7w2cQLFn2V8qv7dRk95RWVBYq3fH4zMMh8xnFYUhP3hjpLE",
  "key3": "27K6VADcFiNymSF6LNqWWZwJaGkuE666Ejoq2LrxYbSVwY3LeYYxRFjUDtCwPRgwGKA3amN7aq9WBPek5KjLUcat",
  "key4": "4X8FLEunUKfKKKbQS2tveaFrG14EZHETqipDap2UCsM4wNF5KrMYajKbNCUBDgqkTrHc31bnBivRxUawnuhw84is",
  "key5": "2wC1dWTDuMJjjfkN7PxFmi5CDTWHSfTT2Sto8jYHXTy4bDBdrAcqHBmyDwBbfJpasU54HEpQeD9r5hpB3T2d3Jtu",
  "key6": "2hdttMpwGdsx97XHsFLREdvwUaHKjq9AM61Qt5h4WgiwVFaXB8LXgen8j43WJFxG63ruLrherXHP5Ug3w8p3CmLS",
  "key7": "aGrGFUCXfxHbcjfKjcix8iu4WsaDaE1ksvjXEw1bp8C5PiwQJaCUC2Fkyra3MjSX9ft7xZfD2Cwuds6cKYQKAqX",
  "key8": "4YVbteRWiSV9QAj5Pv6hi71Y9U6rY7PT6sfq1vsp63SqhF9evnMGZ7PbYynN8h1mgBpxj1rqriamCgJgu6WxY9iJ",
  "key9": "36PbtSkX577LfBxMKmfkepiczhEEDZ7MDXywLnuEi7w9swZxGiYBFmqpQ8qcG6zaziieG6T1ZZmmX7KuJMahH3qf",
  "key10": "FKKMcnrNsu6RBqY6oq9e4Yhj9VGLcfcFg9ioFTeZ4GBYr5tJACP4NrNEurVbbxecgn7HVvCUJYraY9iK9Hnnnde",
  "key11": "4LeYRspeX7hTi6ABDSTBnRExGbWKhxq1QL7TBRWoE1xvniqRYFf6jJ5rag53oNDLBZSuwFKtZQ9yVHoBb8ZF6UzN",
  "key12": "25dtcTySrjdZMhnwRSqVVyQCegfqM1KDKspbohtEAFPHNc3R7m9Bi9cqDLtyxEZbXvSAQWgGrCdtmKWTn6a5g36M",
  "key13": "2pKc1uweR4QcSwcDa7uZXWBRJoxoHq6gWe5gfSqRHCgeiXfxRE5KejJ5PoPypdXCBLacQHCBHeZRgu8K8wLiUq9v",
  "key14": "4LLqiRU8iNgZ1KbohRKgvHXv2zmDbJAvA5U91Dyspdfy75VNmkQVM38SWi5hKCNaTqbduALtKjk4yMSAo1D6yZ2E",
  "key15": "3VWByJqMSpUKRETs8aEHTJqkkCPx4UNiUxEeW99mXSdTuRJ8MBRuMGSus2NTHTWPPuTK8heizY34oogLtxZdRyp9",
  "key16": "314De9rFAW2SeL4X1EPT4f4wp9xeCAi1pWkHnhU6cMq2jkC5VFdT9MeMVavAXp3DaDTmpJ6Zvw6HcAyxzCSGZ63A",
  "key17": "4AfZHzCbfrQoVSFvZgHrUhc2NX69Gdsyx1sxw6WR7GNNp23CCbZNoMYr6u5Uj3BNtcvLd6DJvQjMUafhYixbgUnL",
  "key18": "NqQvY62a4c3FvtEBwsAjiM2sydKWPRxGFHHgHnjFrK7zJcNE6NRABrPH9o7NfDqDrNx7hwDgsr8xyYjxvasrfKJ",
  "key19": "4vm1uwvUMznWBEotaBefQnQozsy2Ky1nKTBoa9LpovLiEepcpxfszz2DqXQjELYu1FWdVGCMF2C8fReQ63rMohBY",
  "key20": "5any69Sn8fWsnFzVZvvWnxSPUDd3VNLBGMkbgfmpLoFxQFX5oMpfEzoCFhaDyo6tDzz53PUHygMw4Kdka6fyYUmW",
  "key21": "2Jfpk6YnDbSJ3CeWTgor3TzTgNf47FmBDNL5rTCGKCLwBiB3oXgaYiUsgeD6Ku8NfFWpVaufBtzsmvJb3HP3D8F",
  "key22": "WpTngPaJStUwq6TL2F4Bm4ft7tYhaz6PTHyTchuz7FALxYQm3XYSCsTgFDgfCRZT3SngJLeQE73eWQ8AL8nFU4u",
  "key23": "9z18GANG4wY4tLZiB81xCYYCBMaSK7HoSE6nbPzWZft93tCdwCdDXfFGDj63ZBavuQZWTNqUqYFYsE3nAVW8iWD",
  "key24": "2P9iFvymDhe2rECRv6qFSi4LAJLb4oKrwQHP6Vrku7WypPc9SCLmKjpSUH3PUwDaGjiWPctDJzbHV7GzZu1GVKfN",
  "key25": "w4YHF48E214yp5pwAHxoiHkR7J4F2Tepsa2ygXnrNNR35Hy1madPNmpsiCgEpdzM3NG7Ggzypt6TivqWMr12v5f",
  "key26": "8xR2pdTKbP2KrVdLhHupR3v613gUihopsbVKq2kvH7Pm34jRZ8ojdP5oEvda4ooKto93r4eNBVMEHboVPu5YK2f",
  "key27": "3o9AUSEdsveyPsRibVrshniGFiPA4PtCRCwB4qB2xyBbpEPdABFXj4rYNsodKfmCCxvr7wNZHV46rS4K9HNHdZBE",
  "key28": "3u3zW5wmnd8aUDwegYaq63J3icXHZYwVZYL7xfWp4PwWcwFkVKmPeRDuJdjPjEeqH4oUGitPei6R74GdSSY8m5Mb",
  "key29": "129EcayZ3jpy4wGiaz29i1n4pW7GKB7Ywc9qrYz9gyZFrPmaSSPX7HvJmzUWRcS9JNEtLCiK9PhtXt1PtDAumS4e",
  "key30": "29CBWT9cKSjvbd14bknoTiJY8qGYtScFfHzYdVSfUKGosPm2gGDzBGksBoykHKn3KVPvALGpxK9yjEhrkL8cNWLm",
  "key31": "3K6XGDQUuBER4q624nmGa6bThVf2AdYHqerxdeAp4wNXMoKk5p4CnBGjKqB35W8ZxQp9Qz6DGposu9MiGQ6R27mD",
  "key32": "3yXLYki6TSZZBVdB9eWBuPRMXSDh1jpG6HWmjUKJ3uGCNxpt3WHrCZrtozxHWYGDiLA7sYkxz4y62UK6kEzKsseL",
  "key33": "3QxrgKPhJNrAr4U2Vd6yXfp1RiEFYqj3nKvb92wjz8o9amCuH4ecMsWLrZsTnwKMB158sYpCpTsdMo2NDDNNx16a",
  "key34": "2wkTU4GXbQJuHSSmwc2zEkSTXaKPqDPvsXx1VTVRsL39DYbY1suTw6NcuLpQoDzQwrNzLRt2Pz1xg7hEh8pRcvcF",
  "key35": "4M3Jb1oEVyJF4YM6zGCo8GamLN14hYDb86jXwBxkNGeNi417ATXJVcNAFMZkR1Fnhz5e93JESwaW4gXz75yhY3bx",
  "key36": "2R9XAbW3M5MxkUS9ZiJeCqV98wZnaEy281KcGhYi2cTQVZoDSECZ8s4qGxkohJRwqb8iktSmuqyWBqsGB615uoKR",
  "key37": "4eWWDePcNovzDXrkyq2qE636HaotrhCWv1EmGrNfm9GEaabU6gdkD2Gw7ojgqhtgydQz7AXHcjoktFn258CjGRbK",
  "key38": "2hRnb5wgKD447CdJ4z6MEL3VvJSUMfFrpuTxSQZqNRjv49Lv8AYxMwKNs8DgPAFeasAK9voiGbsHqdHJawrsmdWB",
  "key39": "5FUTgKobEnXTbVkVRTwRvTWV1wrAf9kc1fScG6YwNksDidjm8HUQG5yu8hhT3wPakHGDw1Ssa7oQpYnYXZ7quxk",
  "key40": "4gbnDw2bQV2BF425sqCf7WXz4SDdeoqNnoYof3yxipdpq7xwLtvCvCfdWQq8vVeMHCjFhnJojdHzDrWMGJFN9zw8",
  "key41": "4vsPwHmNHY656NtMZuSMbMzi58g5DwNoZvAATwtafZHP6gtzGDmvbrEVydEY76hYWnK65TWTfZKtk5WLrdHj9HZd",
  "key42": "3bynakzmKr3zNxfq7zGifqZHwixLQ8WiCMZmto3EhYYZrhwSmJNAy7ZEqFPz6fNNPRyg3CpACuEJMp1AV9o3x5Xx",
  "key43": "E8KWGMjuYTsC2QyoqHbNWpNeC8ENbUw24G1h9X5e4GXGcF9GswjK2UqKtiScaXinZn1zAprf2kEGoZcVSahfZ2D",
  "key44": "5tMWiYnWSvGiAEV1TFvPRAfGTWFnF4fsw8uRnHvQzvnWLbMmMNA4CaFxFyEKNCxUQPVMywpzp7oitDovkcqALCz4",
  "key45": "3LzPwKQcfKa4jg3zw6qYvennJ8dRjcLqM7DHFsStE5N5dE8dFA8Nij33dZdjP3sSCFsJWv1VVyexHYrYr9EjSqVr"
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
