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
    "2tgq7Y7cGX3JRxuMUoaXbybADhGmwJxcnfMnxBbbDk3Zst2Npo43PtMGybK44EU21ZjsbviVGPCCkDwKoNoycm42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hbgT4U3TwpsB42qid9eEJw4ua296DCHmRu4zHFxjfDvbmPQq37QvTevpviRD4ZWzgx16EwqrduMUBc4LqXFiiSx",
  "key1": "2BzpKCme2hhHAbdLVymttCDW9W4mgSeyDD81ZNVS6SeuTQmUyAnEHxfNvkj7UeEq31hxCDQCQnWB1Sdh4JokCXAn",
  "key2": "3LjWNARy8wL572BV2kr4Y9a1M6wTp6E7TgavTRgJcU1nrutiRByjCgVq5EjNZNyfARGKiraf2taAnZFs9hJXbrox",
  "key3": "Cbm3PYbaKfxTa77Yuzr5Jgos7yh9RTriaXvXqWLBHoufKb7B2fGiQ34upvGNJsKCU8NixBexMZXiEXN5EnechuU",
  "key4": "jno3a18accmiDnm4ohbyJNSRMGx7Wa4P9ec4a4HKrcXAV48WR9KzL7q7EkNFMAZ8QRV1aTmqUZocmVs6gEsYJjQ",
  "key5": "4BnSBwj8fpSryLvXr77CV4GDuNEiLvLPJqxa3DsQhBjL6j3a3S5oCUfDaX82PEZ2U3oaRm9VmKJmBMXPJptpkR7",
  "key6": "5EzfHypTd3PbUXNecRFKLGH6b7wQ1m4x7jkHk5BK4ZEVsSaXfQvUiWhWp5ZNHwsG2gzPuXs5tWFXpJ3FqSax8w7K",
  "key7": "5937QPUgB9uwvjgZfCpc9MoHdV65n38JUensEsqqMwFTyDFMFaMBNxy3R5jXmLFNzkcsHHSx2GR9fJK9pKB4gQoQ",
  "key8": "3qtVaSwFHfQ8m5wm4ntGM9vie3JiFotfCZWqYrJ8tRyR3Aqto4maKzr9nAqDdtzpiUU3DxoFBHAyjaxWmU2EXUB4",
  "key9": "wRWcKDrVPrm6guris7rSp39NLmW63hvUW47b4skqVLC2cpKACn7x5X7n6oHfSU7jxjVfSxDfueHcGs9aBQxeok7",
  "key10": "36s7gnSdp9tfdm9LpwNJX4KvwnEqwisCGcVrNrRHwXnXuHwVYVDwYq2M4PhwuRUSnYXaHbSbF5Kjcg4Jb4zoH1d7",
  "key11": "3zzVwghtm3W8LGe8QLq1FJtRSmYssNtADQUwusyAARgWnbYxqNrcbsrUDKUut4683wbMeucYeSCMEZ8gjA8okXTU",
  "key12": "2abuaviq4X43ACQNDBWWvEjpShRNmyWYnv9FiyjAzSgpJPxLLLKxkfeHnb8NYpyCM68sHjMkwYB8mQp6Njs1Q8TK",
  "key13": "5fQv7oXo5Eg94qx3XZESVexLUjPucvFenmkCbQGHnVcpebqyZuMeYxvKZo2P8THypJM7X5Ey8kiYMqFyBuBtpQ55",
  "key14": "7zpVyoJZ1iZGpqVG4joyb33Mf7YcWVYkPqjNKXbfszqW5f6AcXPc1uNaVQZ2YqKX3JdJ6eTLSzLoeCLsEVHtMH7",
  "key15": "46okw5ZL9x4zW7xr76ohjyKwaBzKj8oV94gnNCyK3jsB9wQJqRsmF1AUyWh6snPXQYERvVqT5TyfYxZ9eLEMTV8Y",
  "key16": "2Ca86ozjrbRrezFJ87cFSv4JXpBeuPgtnMu6M6s4LjSpHe6Qsvhf6Eg96tdmXYBexHj34bCY1s6bo1WbrBvcFaQS",
  "key17": "2rDfkziPDGhKRJgeLSwMa8sHAg7e8PCKaTG2iboCLkfRsEaF9wZ1HNzERwdH55eU3p6mRhSU3GUGr2ZuntUUiLFp",
  "key18": "4SgpwgoT7ttPfSpJq1eFSEquMC12VX8baNutkNHNZq6W6SaiSKzggVug2jXatJZ9tA6WsHtFCUVjUw2o2MHx7h7o",
  "key19": "5RqvCt2xAWVNDPkPgQRMewvZkXwJg2P6NBPvxErUdJv98qTLSRdmNZe1z18UhzpU7v8UTgskunAueHYALDmXnzTh",
  "key20": "4fxiDKX4SgqjFNmy3KB13TCh8xAVac8cCmrBNwa5nVwSgFSYScWBoVhSJN4Ct9qQnVgMP5L79RAnxLHdP9EXbQy5",
  "key21": "MxnAtEewFKWu4qmiJsU2r1ybK4rU829GduZvBUZrWt66QUEDd6g7LggMRixgDE3eqU4ym5SmJACh2A1E7BYFSS2",
  "key22": "397UJpvmtCyLPd3gKuGK7y3JQkCntEXbWBQynfERYPySrjcKsUM3BVAbFxz4nMQMJL1bnrYpqURzjz7ooDGkwyAs",
  "key23": "5ZmLPapfgS7hUzNRVEkD45DAuXAMwVmMdi1G6efm9LM7Hg88WdeRELzTMBpQXHPGhLfD3qmUrBqArzu6nf4KKFMv",
  "key24": "4n8jBs7uSTRZN2ipR6v6WrBAsFW9FRwCCkvDwFiEFazRth5FPv8JeutGkGpXDP4Sw9UYvhGHq6NSKw82GuVCJC9x",
  "key25": "3FYCiRdgMaeh5KPWM8FqtQcJNtv5KM2pKMjb8vrNxKeXEYXZAnR16Ymtx62sbhgvPnjm5WxNvjxD4eM133KRnH8x",
  "key26": "5RXcg8oZhbTeDAKqV25PaaC3YAxz8WD7KdhPkpqQ1bveVdrxZwkSBDF4Jh65rWC9iCssK5FZubquGRQPWT2v3Psn",
  "key27": "36uDwanKPFrzRMxnwpcf5XE6GmmuvDdqqcLnrC6w6RaYT8ULi1uNWvbFpeBDHDSsU4aPmaTAZfUqu59r2v8uycqR",
  "key28": "5QUwyvtUneeeKYmbJSja7KWjavzmJapvN3hgMkVX9dcATceUvCSyWMmMWhe7Ka75X6nMSeiFJTkbNmmYWg8wkYtU",
  "key29": "wgSqg4a2QoSe5HZhdaJXHiUrHY5NsSdwjhNxFaDxg3DJVxLSorYQD7y1paiTYXDjd4RW2ASqNWFE2ajoZ8WENVV",
  "key30": "2i5wcTGHZccVJ6mkNdiRs4xiz3rGEJRxq5nCG1uNkdLNfU8CLx7c6LakvsLKEgB1ay4KxPGUYK4fx73W4iHd74rv",
  "key31": "3Z74Hv1EjbxUgXTZ1c7YxQ79jpySKK34KfXia5cvLKbbB1EXcEnjyr3xxyjdgwdGyy3fC5TpP79mA3CLXihxA3VB",
  "key32": "5t5RbiQR4uaezyj44ZEQRNkSqrnypUyFMwTZ1gSyry5rnm9H7ejRCsFGGNxsFoNMrWbw58RcGjtevpQMio4BqHzt",
  "key33": "SwCri15pM9xL39tr2hdNa2VvAi73T8GbnktsNM58GKf7yjRp6e7vNMEEseevocqDQjWjNCDBuEw1f4X3bVARGQg",
  "key34": "5dJwjd35rweRaDs2gzXYS8sFbndqSPbAoz76eQYJsivJUzVVHNbzaP5Qd8NxGu7YFV8oRkhFutKGJJE6VMuD777p",
  "key35": "66nqgaCTzPgf5qTV6ZPHtRVaupbXiE8o4vGPEf1tXmzmkDnDMdug8oQ1NZPSBNECKj3oUbLFenNDKu7HnpWdBdK5",
  "key36": "21UGAgSsw6QSz1Juc4CVFsuBcWpscXBLxhAcVMnYesUykXxx3n6eRB82bcjBpcoaLneukHTEDh7VmVUa9fg5fwW1",
  "key37": "3dnCaFuasnovDza1uazgzhbc2f6XQAjAnSj4oRhPSJ7E6A2B4HzqZtkTY28gWXviXGREQRBnreioiBTMukdAyAoy",
  "key38": "5hEb86gaFVCUhF5XZsMafkruwpbWojYmjH3CRh7dRhVpLoexc982XqhodzoittcY61nHEgqgPF14rSpa3yyoQSfh",
  "key39": "3A7BSu8az4PdrYrJYMH76eDxVJow1YbRq8AHoPgaVw6yc8mUggVNw8gHqtfyDA8TQV3wgZsuG9QTMePPtmhxDPzp",
  "key40": "2C62HNi8CASKwF8dqjSfDK6WjDVqtzAs3dAad64yBR7eim1dJcKUPvmHgAqJbJCTiiJzq42GkBenNfzPmWn8xZb5",
  "key41": "62wdqj5spuaz5tqx1HXegksUdstBWTxJuwYCkV9M9HZq4QZFgDcTSq8raQ1Y9avvvbcXT9pXWXW2ETxPstfWP75t",
  "key42": "3tG5SztBkzjCJZXY84uiB5bkchQcUvTYBrBNSbvBNZkMSde1oGi2i5wQs9deyCLMgxUa4eidvbrKw45UmqxZkfgF",
  "key43": "5nEQhojTCDNndxA6GQNCoxfrBDqoFmJbT1miKQG56wKf4Yg3ukoMifXymgRuZBe2RnWYovQm1Wh8BPm4fUsihQZQ",
  "key44": "5kFzzpYyL2ZvGaB2kyB69tpXCyVQG68XHX9QdqQAupRWDWhnVeUocAoRCtGJcGRDx3t45vF6cYe9Q6v9aCBvGnBD",
  "key45": "2mWgs5yuroacvRtyqetHvhhjJgfeTZRiBmmTyTiVfKXSv8xSQoi3ELcFA9tvUb8sUyeuip3SUPPX7gtFeuv5btSB",
  "key46": "4W8tLJrac7ykK22fgmJko7YqiLaNfDiqUYkTBY26qyrmCjWcZ3HJUus7gMxn9g257bAuZ4ApTGedqPADxT9CbRh5",
  "key47": "4X5VpWYpwix1N8dBUviTyHCQGSwxxiijr1S7qp8urF6BKEYueFx9QhAafurUtiqPzCarYCc3cnvgjsM6GeWHymxo",
  "key48": "4o7CNVh3g2rAbbpvAswHUJdZ5hHbKNXgfFxvFUjv8K23Jf8hih86Zf5MQVc2Pi7KrxM7FT422fcxJxvrye9iscVA"
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
