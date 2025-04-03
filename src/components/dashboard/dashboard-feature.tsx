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
    "3TgTMzvg76iPq1rcxNgjrcWgvQLPBdWhd4t2CbrRTTfCiz8HFFsg5wVjgDw3tjfYddhn1DgZKpyikRNL342earXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KwHS9p3CbEfQhhs2X7UVjubbQrdJDA9ST5Na7DAn1E6PLip3zx9tDcXCQknCcWmwZPM9Kavf7SFsM2pQSnNmWKe",
  "key1": "3R9vZMrRxZKEffYdEGNCT35MeAovUNCWYKgKK966MGxpfJuXDdE4cbXZtPaYa5ymFhkpjVifhe2ZYTSkwQoha1zn",
  "key2": "6615sHonZuNDSGSFjxEwu8ddZ53c5eEXLiKanTYStCd1NugT3ZHyQDTH8qEKiSpQDPTnsE1qRvT57sUouoxJRMGT",
  "key3": "Lu5VjkvTXEFqxA2jcYAqnB7DHEsKu5X2v49Bxicf7Vr6ZMoh8LErhwoRSNAcALEEUguyZNkNZLeW9w9f6u7cgkJ",
  "key4": "2vtZgt6vUUYf5UnNuyR7vUc7K8uDDs6pWr7oUfExscaK8o6ohNhVsvMJXWjnXFYwPkPYmuJ7SdvZG8xE968Hmhv4",
  "key5": "4uivE819aAbUZBdtqHbH9ag5Vip8WTpctZmNJpNGaZmC1nGwfssaBQoCukBx2X6kHDNvWNq55hKcm4M3z6CK5ptK",
  "key6": "123YBc1PzaPVk1MPuEbaRfnJaLLbAYhJ6fKC8hwfjkVmV7tRx9iWSwGmouoFS9goaKyRdsVsFo3kMaNFhE1y7aiM",
  "key7": "nA3vkYQpEiXufnpZu7wLW3azL7S64TMNTD84Ld9FyFwJkDWLX7CWoisCuTgwnciuPRsmo38cSXYJSzorXqTreSE",
  "key8": "3eDGBsaZMR1nFWdGpLGtVEDZiD5yZYMosWBCdyGeHovSaFvnyPx6H9Y5yrCmnEPVpUGQeSkr9UMCaTuSRcyuWuPg",
  "key9": "4fCUhs23S2KGUSH7jNA4XoJWQXb1e2GZu9gReZM19uyo9dXokumQc74uULQcuyipEMjSxJNKN1kBjSUYdL3X5dDk",
  "key10": "55thJVeQE58XXoQqz66a6sjnH4P9dPKdV9TsQyzg6wrFGUSFbXopKJ1Eoi47NhoZQAa1ar23DFKgfjLA9n1Z88bJ",
  "key11": "3PAbTb853dnHcf4Ziv7Dpu3g4u7BxmSPRuZFhbLn2xAWhUgrV5in5P52sxzeTmy97jzsucexeTdpGB8nUGYXeAdz",
  "key12": "31x2BjQB2KYa2Y672Tqtuacr5nYvo7HRqkpdCNEo3gyZcBX7BqcwjhJ9ZRL7nY9kweseVh2XQxNcZjaz5uwNUH41",
  "key13": "3dB7LWow6wEPV6SGehdngT9hMoPA5bCsMCPRojtkpfZCXy1EEGXKhVYCQyErigDJnitDna5g4CytbdsqTj1tZ1o4",
  "key14": "3vuVeJA4367hrtvfvvmAqV1ee1pBbGwD1ZRVXWDEGMUdtvhUm5YGjws5yy7grfJdD2fyfPnFVaBqorADC6oMcY6X",
  "key15": "5TBhwcozHFN14JyzjNVk84pxuvb3Jk4L7xkKgvh2zUPKmgTGZLL1v6XcWTzrjWi8uzsDf6rRkWnidhodK6kUerY8",
  "key16": "3q1yES6iJULE1sqCzkFnWY7HSQV34CuQ8qX63pMQfeqyZSpba3qRTaHQMNeVa53FDCPJbVJT69UBwSh883NQajUs",
  "key17": "2YM3PbMu6WtYh1T2XoapXy3GLVzQWDuMXzSrmNf62JpvZMViYDqr8AaGkTUFj75qXR6iart5PMDpdCfvuqYDpfuD",
  "key18": "2NotmEkh1qroAQ6d7QBdBfnrCbdKZU1Wsz2C6MDjCwkiDKpucMG3n5FnYmMJH3bokUPAhNh2STDd646gUh6f9Rb5",
  "key19": "3TRXHMM6ycaLBYxz7LmpyCNXTQatBEvkcwDwqoRbVyq913e4fDasNPPGjy41exxoqVSFU12Tz6u918WoK5kUTYms",
  "key20": "2ycv1BzBZSZWixzf83zdF8TZuBRzVYngofGAPgTAmuxcMueurtXtqN1aYHzsQhtFifvgBcMW67Lh9YTiLUKX1sc2",
  "key21": "5uM9H7A1cNVTrHKxMQFaufnF1ZHp7hvD3w5K4tubq5z5UTYGLU5rnjh5PZuDwxEqunpbCWUNUkBUKVDurAffApzW",
  "key22": "D6hRj97Je6qzqViCXtmTZst6dRPCU8DxApSktN8TUYseM3zgUcKdFEyHxGt7T8VD5F9N8ycJG7WvANbSXhmcRZ5",
  "key23": "1M9sXEEbSV8wVkNx3GxDpG7vKRmGs62NubMuXAZYjS1Cz2RAa5MciujBYyELxxqwLQ1qrjy3PWvXydcHoS1T36x",
  "key24": "2DHMnvhJcuWdoiyiVuT2PUVQNP7ymhi3PTqMKu2LbefuV7NnHpWKRuUwXEU8mxdK8itgxct1EyCudo5xTiJ4Xpzm",
  "key25": "4NveScJi1XoZoS8cueoDMGPytCZRS5UWwkHJ3oUiVyU4BdhNqYBfsqNp4ybNjByAzJjFCsKPQ9zJrXjeJtV9Hspu",
  "key26": "5H8F2vd4CmVjLton8gpz31bCu9sNQpxmTiXPm6TJG4vKYLjWajND1DmwCGKxoFUjdQUWSJPr6CXgfAsPPTc14Qsi",
  "key27": "fyRUQQdEuUtMxHYryufCrvC9QCspeUfToqoUHAhXJp5o2xziA8aAtdaDZqjrS6jvKmQRLViPTP9EQZoDL3uDomQ",
  "key28": "2JjBkEELD1nM553M5NaLFGN1iCRByt6cxWZ4GofqqVZeaH3mszekB8Q4RbvgpfAPTo1jQn4zGaW43FZq11QSjqCw",
  "key29": "5APuyw2NE1VbNK8PvqUZTfd6otv77EtpCVJ4LLwNVa3KFoUszsSqP3gGZFFnnHbry43PcPLAPQTh5xBi7kNH27bG",
  "key30": "3FQM5ZENTbRR4x7eGeQyZcaAzRA28E5DrMtrE51BkoPZJyjC71yeJQ5AsyvyNenEGXVntZijvqzCvzNNWB4mf4oF",
  "key31": "5iXRJbk8iy7ka9ys3fBKwaXmm4My8uGJovsPWXj7LHzNWFGhp25WJeLRuBho7kFUTvQq3uZg1qgTd2h2kYFWBbEK",
  "key32": "3ReRKKUpkLorjQmVuLdXe3s2LG6bFmQ3UAYbNTGzZRFDx5esqbcSfTT5knDZerB5N5CrbJn3ZPzof9dQu2VF8Ec1",
  "key33": "5K1FdA774RBBFL4dH2cdmcQwDrVWEP37GuhhkxFDr2CRrKcn71NgTFQ2eTWoEt5WChdfqQBVvQARyqGXzqNkiea7",
  "key34": "4PWm2NVpuF7pCrPGheDgKQ1sZoFp4SnhraDpiRuR8zAZdW4DtEUYxhGxFcyWbLnP7ks4zQceBj74sCkTk6YArMgX",
  "key35": "3GC38RL13W33fWBAghriD8so6gMSjg5QSo1ki6oianqR3Qr3ebKjAzCyLiu1PbqPB8sHjXyBq3TSfPTbjjrMfegp",
  "key36": "4QGosVWWAqyYeR93Jetd3vrrSjeMJqQPHcvfbswZMRaX1NUB25p2Umzfmi9GdEhLKMDnLCz2ynkgvgrqCZ9MJ8NL",
  "key37": "5FV4Q5SmFjN4uyVu9BHb5bBpKFaFZ24SUqx1PP8wAHFZpYkcD7qj1mu8kgXmgvRAwq28ABUofGEWtHpDxG1Pzxvi",
  "key38": "39xXGrGdwtJLpxDnM28s5vLHc9t6ZbKVvDKJRghzDMqmdLfZSJmyJ9iFHwnpanQurENGX2fQghP8N4yddWwyXQBk",
  "key39": "CAew6fgwcJyrr6E2kaBUJM7HoQWA2vXTNFUsBR4wy3hFD6ZiGyqbKgfRGCGDyE6GCmKbDU8KiH9QtuCprp1wSwg"
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
