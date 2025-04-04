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
    "3jfjpNDrbEjkyKsAAfhSzaYBEhzpVzVWBhfwkXiLS1yQUtq6bA7tN4EmrGcJPsyUo7sLHWTiufdaUD8PuQfVpjJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PBY4oPCmURtFe4MkComYNhpYRhuNjzSgVnkaXjzYt4AjhVB8W7pRbBLeN8h8BijKo4twLCzkYEjmpKmTeBfEm3K",
  "key1": "X6aZUe39VoDW1WN6vuNK4zX2NSFLMFLSDgecZuk129WjfT9mApRKjcSquWqDzHf3BnBGKJzNgQWuAn77nciWSMJ",
  "key2": "2B6ESD5mmAsRHVaXWsMrZvKyszXYXih7skdMDrazhRFcT5QuiVPA3rUziu5eyPUHhNs5Q4fK4ixU4nge3K5CCL3x",
  "key3": "2HfWY5FMrLyQXwhjAsLaGDcj4gABpr3ejHWxgm9mnAsF3nSFBG3Lx4YvU5LwrGboyk9RbjvTwcEf5qcFPAPVq86c",
  "key4": "MSfpN3NW2L6WFKmhUQs6112KRcSAWu89HzLxiebuAicEvXaZNZuSWq4iN3brdSbNXNjkB4HxfhyZUVp3NjQ93pw",
  "key5": "Jihs3DSPG536VnjzwHSeogSz9u64KYZJfsXuktCUUSPv4tL69Qd6ykWT8obXv9nbVXNwDaqtBbmbnhjHuRnKo8z",
  "key6": "3UPU5rcQepL6JSQg7kGMqDmrW4BV5XwcLJRwLFAzaXH95k4bYmEVcTjFYBhWqiozDp8WtzZKfmxPu9QRW7gjywSV",
  "key7": "2BEvVdgsUqhyw68pYGEkEraGCRycgUPrPj5gXyTu3v5FsGoFzUxf3PS9LffMjLhUo49qKav3f5ShHbU9Zf9SyT7X",
  "key8": "35gKHcLu16fbWe2k5w4JFQbfbBgdCtvGrYRrAyyd1NMg9FdqPcqB3DFuHDk8Hb587UHtg1mGCHC91vmKybJhVrk3",
  "key9": "4zwjYMgpyWErSufnfHPNsaKAkiXtaHp5jLhDGjQBnu2aZctPChE5bXv2Br1pytoq5GmyV3AsJMHv4vMFRaXvY8G9",
  "key10": "5J7DABbyzQy8vKD6nPrJ4LcoskyFo23Wb7v8gmrZRnWksf7uE9AQHTmW56MgM8VHddDJ8uf1oDAFWn7wmPMMYnr5",
  "key11": "465H3xEMvxqfxgUuhhzhyFvPYgBNyPKJm9FykaGksbNyux7fEubLZ7K5iyNKkigRpKKGbpi8NiogNFkipmh6ebgs",
  "key12": "21EQKKfQ1VHD4xTYkJN5bpTFBH7YFoPuovwMEmSocMvEkNCbVbYm89FBLim4FZSiEFWtXmh1MRASyhTLKzaipP3n",
  "key13": "33tmPJSkgBz2E1p84vif8qnHQufCjuCFDk5SeE1aWHx6rCREBuuQFN4s8tTcgET3Y7aDtCLsv9uXtvENoCEegXWL",
  "key14": "AjNcpdzESzMMPayzdgqoz3nz8k9Kn4dzacRshCFXLSMM1AtStVgEX9iBZH2BXgn9Sxac2tqStnP7NAuaqemSRkG",
  "key15": "2Qpv2msQZ3GLCisgrEp3QiLc3RqVGhrYeXJpAvwdxixUwUihnDvXDHKrrmLJupeGkposaHsQs5P2nuL5AZAosbbv",
  "key16": "2uLAN6dJ9qHSUHk3YNNN1nRiKX6Qg1BKazK3sj5fETYPFH86chhBHWkwGt9oeR1Ht6vov8XhdH8nnHGCSbEvKfZj",
  "key17": "5Qz9ku6LZjwhqnMbDa6Q1vspzzvxRgdwGsYChx6VUvMzjK4Gm2DjZCqPHV8zb8rwRpwKpKncpNPe8gPMiPy14Gib",
  "key18": "2JAnE5HdUdXoJmmtawHYLkU5kfh19avgMLyQgDzCF7wa2F1WhSW743pNWyn1EreS4d845UhdY8doVwH1SiPTN7K2",
  "key19": "26khZrGH6cFYkg8fbUCg3Ch6wFUqLQoyihKvBm9x6hT7wzn9hV5YTmuFDm5YoW3dhMfnupekJN4Lvgrhgg52a49j",
  "key20": "U3PurvHPz6wL2Tu16KyjmbfhETw1EdufSK16M8V6s4S8FGCREpZYNWTJWyu41hAzfaHP9YkPUPxVZt8tGUpgshH",
  "key21": "5dDsdmnRpDeDXh5FHcMUTpHNZFamhCrVq6Sx4KWYvRiGxesCjAJB6MyWxiPGB4ZXPoDQzhfqyRAkZ6NbSpBnVxwE",
  "key22": "5TCHxzMmrvjsV82nGCJgpZXbNBbAXsnUyMh6ARhmwah2a4csoTcNiZ3GcYeAiMNxFKK3j95Q426PSrgw78gKyLLh",
  "key23": "5BYY595ZWLsq7ruEs7rwvJa7FwpmRERTzkbMmQYDSRxbgyTTBTJhtjSnTmVotCqLdQSVZwJvSV9Q4qc5ehW8Zo1F",
  "key24": "5AcRMRFsvq6Y1eHmKsrSJywUc6Ge3qdUAVgstpz6c8vqnHcLbeogEeBugucMawJ89fvnH9rWf4ZctMtkiDRcqJS8",
  "key25": "3d8c3hjLFegsDFLJcD4aoGA5x5qVLtMEm33x87LGWBAXayh3t5CQJBgWZyYe2KxpYCks4GLYNDS6qwo9h2DueWZm",
  "key26": "38AJeFZrWZKkpdoKuYtpBx9A1Dgg1XeZboaZd7icKs74s1okniEGitndjeXg7f4Euc3gK6nBCrAvmQ5vjMV5jNpn",
  "key27": "52X17Knf9XEnkuV6Z49HcjNN5sM9DDzBRqnP5XECV41AP3VpAzQLKnBcp6jXtJ3bPox2YjLoU64zE6SYn7zdrVw9",
  "key28": "4SHJxJs9bdA75ub7ADFNJPLqmj5qFTrq93FsgxpoYcSqzpyLETsG8fbvreinnDqEGmLvmHopsaUQ5sjXPAwPyUm5",
  "key29": "5dCw4DUXskP6aEvwke9tzytj9N8vjAUn6vzJ6buhP6EUmwsDFb5jqN9p3x5cmy6qx2PXVhGjJ8k5vEyLtV7JhnUv",
  "key30": "2tXFZ7nvqfgedT41xWi4apzJKyugpRN25CRw5aUnQcUPbSHSnReo15jWTJjVjPTgYJouLHDWTTpwwGFpfo73Zbzk",
  "key31": "5qe9TRXNa1rbVLQmi2uMj47NCRsWv9Tfhz7Avq6VrnXaifWNMDXkGtQXg4M8TGGGSuQs4jhzhGSuo1LVYTS4eaS7",
  "key32": "3EgEDvJymVZjXeqM795tiEdVWR1QbWpWLGV1zat1qAuEojN8SDWV7Y4oAJszj8BceHNQAU2Gyuk25CgMrsgJvzC2",
  "key33": "Z4LEoci5XYMaaAe3JJvYwCV6BW579YmPBprwX3Zdr8c19nxXaLfwzzNhKtiQE6QcCECjTbGxHDdgt53v2e7Qsyi",
  "key34": "WR7TKXDsmPn4EnQ4ciuymud99SEknqxAoE1qZg3KNrvPtAcJsQimn7ZJRZS6D8haGkS66VNBQY2xax77L882xCr",
  "key35": "j1YDZyDWT5CFQad5gw3Ujtc7P8MPS8AB68cXAw2xJX11gTifVvN2fWaVgHxsCQAQwKHsR44gx4CyQTTdPbvxguo",
  "key36": "627nM8toTMfnaMuBi9DKEvyyeLqmpwSTxMbLgzcEw4MkDBuVdvSUyKTa3KSWWEksKqjmqq4HNCZkJSAGM6yYCBtv",
  "key37": "5NHMKQhW2SEPsqWL6PFdnQL5Winw4hFLu2jBNU1NGJ1GvwWDygHBH7mQvQ7LF9iKbZU6G6kCZDjofDEVYhsKBckF",
  "key38": "43pVok7C25EhhtFec3fUZPfbmbsDYrRK1B5UAyeq8eAwChrdbjUA6rLYWFA9brVTeazY2fwARei7kvrDaJ7z3Pos",
  "key39": "4A1rrxTG4HLcBz4zYDQW1bFHNtx8NyzzELS4NLQEpAXNhZbVap3xZ9LttSU1TUBzoorGqqHwetvqoNaBBy3HPm6J",
  "key40": "2Cm1CjHCo4vULiZo3qigxtitih8eNpWr5CRYCFoFz15WqZjmhYFaHByAk3WAh78aFJKW4rGDG52FqPzNJ3LLs75b",
  "key41": "2hFvXsrXfjfZNstRWZHf26SsiwVy3mX53TMLroLfdWYYvpVqPg4Z4sdKkVGT5y2jziE3UapydYouifTe3JHUpqmd",
  "key42": "43eiUCwpxEckPtrRDsoSwQ3w7U1cRGmWB77aAXG4rtD1PahFdafELxuFJoF52ykfzSMkxCrsB8WuaxxW2DGGoir",
  "key43": "C5nJTuHsZuvEPMR7b9jfXDsHtMpcf5wEenCkHfApZTLSJx4AjaLbXoSczJbc8x5PCWN79TfeK8pbwj3qecLMyZD",
  "key44": "3v1ymHiCxRoNEW1VxcHdYuTgwoTevwkiANXW8myguvfdsbR1sRTYma7XqCxKoz7YhqQbaSWbP5P2LDAXNA4a3vwe",
  "key45": "pdZZmbnxLtJEaXYgdXjNy6WRnLYCSJLejoVAMQxPDigcsP9mKqvUCFGVhe7vtTjADWEEaQXowxjCRQNgTPsUmkx",
  "key46": "TXmgnqgeKoqh1ZkjT9C53K9CKyG6Q7XeTznWCfEn43sqTZgYViFfdNdbeXcGu2Gr1WNa1vxmUN9WVHgMKJLBJEM"
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
