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
    "289D1sf2zG9MuULqBF5nEU19rG4e9qVq3DRAzv2mXMs5qNJaH7swWzwJpiDEo5xCnrWLFHiWthiHERAktci1bpTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wrPaKbRBWDzAF3796RA1fjAfAubCGBizd2r7PDNeiSzFnCVSBgV4io9rrwqN29JsC8Y3iCreYWAki824NvD8u6H",
  "key1": "38wiHWBhUWcgZXfY48mNYgQxgeTK7SZ8V9A49hMRG49NmHbCXqfT7sRTR4T1UZaJnBDkv5CumkdGij1Z7bth94S8",
  "key2": "4iTXY4CkLArXQRF66zK1F8A5uoP8BPpygFbhAcxcDPYZKoerLXyKPjnagFRQ2z6dXHC1zQUoGEhZTpdPgzmvKVu2",
  "key3": "27EQHUmonqGPMhY7FcSuq1DJc88taP8erRg9RLg9dv6w8UGTmxn6ZJ4Q6orVWLd39ZeRcHVSVTz8ZN4KBBU2W8N7",
  "key4": "3DwgZHrbu7ncALFoMheU6UuM7qgokgvLWRQx2VDE7rDj3Vsrc8C5NyQhRbS8HJ4Ataf6HkKgCaWarVq1iUUHaYsy",
  "key5": "3Kn5YGQ29yupRBKZrjcC4gaCCHhbzTYWg65UiiFQKfULSmyxkbauMM9gze5iDRfzM8HmiLSrMre2ZZShrMFy1oS1",
  "key6": "NqnewCaAEVa7Xu5jAwmBGMjQUXCe7bzFHXVe1WKRkFGarR4dujCHXEh2hK7kuzqW1fMj2pgy12daJaq1xCTUYAG",
  "key7": "3Q72AYwHQyeQu99joEB2UCKEboJhMS4H1NHk8JhKcgVjrURXaaJBAANZn6htSrEbmB3d9vMUsZXACpJLkvGZzcSR",
  "key8": "jvTjV6XGqQovRXEeXSTaXRSiwjrEbXawv2AS43DgXnsM5cDTvHA59WQY3grjAKfe1KyiFKU5UnHToQgGLGBm5d6",
  "key9": "43WdcTXJCnwYQk3JdEbefx3vupRHdhMojuLywyK7fkDYCc1aN2jHXzk6GpMmCUbXtGqs1dQcp5QLGm4pFAE5TUy8",
  "key10": "rNhtPf1AvRre7avBgb4Cjax2xTCo3yAZAYrXc9wpfs2KHoQU6EinZL6cRhpUZz3JZE1qGL9gicYb6vtgHzxeK6W",
  "key11": "2T5Z7jJCgSJ73qjh6YQ6syvvkVNWirHjxqJKVYr6ZZBphvhfwdhcpYn2yFEAinsRrxLrR5TaZYx9DYpDhPsbG8La",
  "key12": "4zKhY6y58HYRp7bPMHtVg6NX8wfFrs9Ce2UNpoA36Et2rnp9yiGgcSAP4Qo27gSLgVLt17ycdvRBkvtM6ixJPbJ3",
  "key13": "3q98CbRQXoaaU3DFAhSHFJuQVPS3dsgghhRjpNndSjuGS5mxaqkwS8A4972YFKdf4uBS3AUmuCCt3pH1t5NnmWg4",
  "key14": "Dru63HpMsDmauanMkA5M8dtG1xmvucRF8hR7UWF19tuRCWCry7kbY14cG8QyFHjDGhZrnAyExVVdkTkwLBov5By",
  "key15": "273U5f8Tb13YugdUEjyUpxKMeWad9TM3k92zwR5MPH9HomhL4PnJR8jEHXH8iZdmqyP6NvnieEzsWZD1kxG4sEdy",
  "key16": "2YfeTBn1Pd1EZ6kBFbe3yXBFY5qWZPgwkTRuKKnTDMBjdzKxGXN8YUATF6TJwgcTLumpgpEzVZLGJ9LBhK6HqdzS",
  "key17": "4RC8JBhrohukCzeqARbQvpqtsf64qEaEYyjjD7ZHXF3ydzh1vqhuYtcMoKpGZGqZbPaZPdJJNyjPRyKSTLmfEmeH",
  "key18": "9EUCCfX7XfBbD9t4YMSk1j7HGViZwYZnJvMA8Ye3yUGwG53ccb7yrUoYXE6e5AAquA2Z9FTpeho2n2RZ4FDVRdQ",
  "key19": "2Jm9W9v7q8btSHA2MXRSB6bRCbFBpJxjMvXiGoX2GtByiZ2i1Scp5jsjucs5fbGsmuw2J5ujnTH7U3gdRPAmLUEG",
  "key20": "2Dt5F6N3dCTw8UbHpvdLt8d9u1BVLCJHDwpxBufcjnV85KetJGouJDHZzdNNPsK2hcfFx3KhsyhtbJ6uaq6gtomJ",
  "key21": "g8HCLp6A7ATgFTdupdU6fH7ZmpsWpbHLVt5XLx1D3Hf6QueHUAUhNNHVoqpUyd5jBNFtadQCs3uwZ4BPpn5HXUZ",
  "key22": "3LbiTEDTkx1TEPhJ7R6AExWHb1gf2NnWXuZUbAtFcbcckuoLauYxPPsFKFwaL67URsNWoYMeXGHPmkCjx488JmXW",
  "key23": "Y2AdYumedRNKbtxKKpEYE2RdgrRXdnZJd5cAYKX55bWcznN3HVUPp1PD2moLznntnMotQZ892TKdqLDp6QwATX1",
  "key24": "qnyCUX5XqSgs8m2BxRb1Vm1uV2rmdAsYXYSpdEbTrTWu4Num2qgd4Ehhu4F7Y9JbEd6TJByrLy8rQShrjJMJufM",
  "key25": "4maSvK4QShNKB8z7hJXx8PMstCenCEjq8Xyv1snNEsVC84t6pNnqJsbrzwRdbh7aSVuxaFjJFgWgV515Q2aSUJFm",
  "key26": "4nsd7QRCXL6L4F3RdBF8KSrmNzG9YLiP95BAkmCBaUzk8jfYrJbVCp7JXyLvmH5wjNajPiNiuLZiB7KbuduabhMR",
  "key27": "4SDuP4PiDASvrSQQzNkN7DEsMuuTsM6oWzr4tu22DyfuLd656mm9wRXFu1Und5aQkL5fArdQyVsT5a8X3GpQiwGB",
  "key28": "dNxqYW2PFf4g3ErjEWiS7iDuTL6VAgHKTskMhUtM9g8ASwNRNjKWJQjoc2FUvEAQtDExS6RVu7cpWonZqU8hBUT",
  "key29": "5CR8jG82sjZXMGbF7A1yqotctRF1ch5MM6hyHLzLDaGKDHqoawszF6DLT8xnSoAQMG7pbPxiubW3V665hTZ5u6Cr",
  "key30": "2sFAJSdDZ2pggHafEt6x7eGEpLtsn6Ts91LBGw5RETbigXesZHVHPEuaseWyqyxZxH8cpA7pEcXUxH6AYBGDHN52",
  "key31": "2swh9oWwEWJujfSnK4CGdffZLWveh8YwYWsMUYskjV2hA5gMNcQFx1bkBWFM79JpJcWziWi7kTZ3Xo3nQwYQFdy8",
  "key32": "2P5Hdj12dJtLZG34mWStCrVE1rtnRvnhhwwTwq15DfGRYpjFVf9uADe95huDhhDnFJXTCnyj3UyZGCSC8mpqKGSn",
  "key33": "2TaQraPhsCTpnXW8RSyi4xECHh6aSZK6yEtjr8nPawGu3mXkwy1wgc8JfjfBD36aSruD5KUUni1CBxwfV68LNW48",
  "key34": "28xHArUnczXSWrSwJcsX4kfiG7zNMNE46c8EJM6n48HZGFzz2waXFHDUtSUhxGfXcQGLXJXgu762C6mEzNuPKECM",
  "key35": "57DUMNCYm2BuZt1zrE8MvL6Bi3Vi8KgfLjeZGGQ2CRCFL5i4BJwSVWB3fcpKoCEAqJjtax53jmeAptuDLJjzWBkn",
  "key36": "5Zky4TASyTwncrs7fhSK6G1Dvc3tmeekPDGoxCNnoF66iP4fZWZ92Yrbb4isWSSCf5p2H5EdhVP77UTVhDssd6wG",
  "key37": "2xrw36QPZ7B4FjPgtddRuB9p6pxPGwisrqMf9jryvKHvhsZUXJsiVZ9pie9Hn7wddHBVaNitcGuM6qsUtccqovMd",
  "key38": "3QcY6vBQbF7SGzKb3egAE3iFUprCZgnvXXiSfijnurses6CqkEBCyXGWza3ZeRBUk5Z2izJv3azqKFdq5BNai15Q",
  "key39": "MJhPMTQB6WuQrMtaX7FKg6X3CdLPYnnGCmD7JqmFssiuLDW2yUW2afkwp1t6JnZaQrLAc5UUpmVXNfQuunfWTvz",
  "key40": "55R9Tnfc8ZAL9Xa89H2VDio5jUHrPSoYkqgFPNTcm1JkV2LypdTuDctVftRoKrTVgeFmjFqG6xBtuXK5NWNCFYNo",
  "key41": "mYHpHVbAs4Gj8TMQxdJfjypxu6z6QfL92QAQJnboBtVktQtUeFiAzQpmumumqnQ5aZmMRVGm8KXkKkiCYir2w8M",
  "key42": "4BjFTiEPn2BzWZTjohyYh6mtnfxLrQLcEWmyvoCTYu14yeAZBeFJXeaVdH8z1U2t7LKXj9YP1c316gKpRNFRPrxh"
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
