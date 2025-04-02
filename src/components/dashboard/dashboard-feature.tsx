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
    "4YE6tTT7EXUSmJY3pzz5jjkucE3ULqoXX5m7PuPpcPXZwdcMbWSdx2bDHarEUEdRH3hauy8MMEZTg1eDCDxTECvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dV94yP46xRsrfcopQHySBk7hAtqa8txdYja8rjLQPwvTgbKiMHRN9y8EDRHXKD6iPGo9yCza4dtZGbAep7DdC4V",
  "key1": "3vqQXtauccGdEzN9PsrP4yxyVmXr4gpZEF3nHXUQCNuVaSfvfgeNrVrAbNeaWSnBZNGFnE2XuabodgBmKXnQeQKT",
  "key2": "2tev4bn32GtxZgW6csmFHTfWYGUYH1bNXetfTbpUB68rPCxnjZ4M9XVYfuURkXcQHZsmHT2wnkyVNGtm4QYapYob",
  "key3": "kJdvogbKAG4g8ipvumgSQ7P3MvSPj5vkMQNiu9kdRycvcjary2T9oCKmDfwbG4JziduAHRcCZknUpChtyJK4xjA",
  "key4": "2q9SQzNXxHnB3xqhJGusd5icFRJ8K8KuoXtueFkH49Nc6tMf7k2P8sT557ZAReBk4kJytCtghyCMfH6KL2EY9r6h",
  "key5": "2CN7bSHaKe1eAvzDngfpzjr2qnXvv5jzZcVoY7uwfCKsxU2Z31PvXKyZrByu2EAw8bm5vEiLyTX5re9oawDWC7ed",
  "key6": "4Gp4CdR4nVUvQ8HDar9WkUhHSHLdTEVxQPHaxpTRE7aAoWtgsQvMj9fhKwoTXFXBsgM4Eo6CwvjsXmPXPuZxeGxZ",
  "key7": "4mzYbxGe8DuTN73sXbbXys7MDE8pK6J4JpTtii87aaQwnxWxdnAQXtcAWVmZqa7CCzUcJaFtSXA1TYUkpyTgbnam",
  "key8": "2Qwdv7mpT2TztYEKhPVrRegRu5bvvyGUZACMLNKyagUUum6P6vrAjJEyRNg5iSc2kJXGdBzyyzXL9p1BewDtjVBu",
  "key9": "3NCUndedghhyihopR1VusQ6TvduwKFcckHrv4Kr7zPQn8J5zxNkEMugCSJ4PqyLapWVPD5Bc17AwNCZ6qw68A2t3",
  "key10": "LqPAERpw4drERBRbJJZTZgGgN9yxF47HpE1McS21ouzcnTk71NQzHyoN163vrFLktWyu2tfHQTcvRtvqgYUZwG8",
  "key11": "4mbFMZvPVpgPqo2Y4AX9bn6Lnu7RBVJ6fau8iPHn3vb9hLSM1PNzd8MrcyXsabzvth9tdtyqV5H9CzFW2tHUhh9E",
  "key12": "WgqHtT4Bci3G5o2cnfE3MKFG3BFQttu76ih9ttSsHbyTmauN3qMtkAcM9M1Z5SuexMBWHkcSCfHrsdb3oL7JVVZ",
  "key13": "2L4AyK1WEvxK6mht26FhVieVCQgJCj5XLQeSHPTY5QaybfqB9BCD2riiKYN1K4FnhwNHbJ2ATn4g9JS4Hcnry4RP",
  "key14": "5gDD5sFY2VBWCa8HFUUw4BxKJvH6rvYZ14CQh4SCHvAdWoSDx3xzo8NK62MAw4V1zeVpek6mKmTY8QnC9UbaW7Es",
  "key15": "4JS1PkizPU2xSj2EesvfkgwqxJQYRiywgqQhha8hMNSD1kj6zSD4jmpMtJSUgbfQAEhfMejew2zS9PXVmaJAPNJo",
  "key16": "36Me9WnJ8fHDE2jTFM3Dkec3EoqQhVsYLNB6c5RUfUpjxwLbUZXennzPN2hqNZXBqpZR7duWqNFVpPr2kpNEG6oH",
  "key17": "4vbq3sNRTcEQrfkKRW9E5WgPSBEWyYyDJLriaDtLCfhTxieZMLBNvJuhbxBkkELyLVweXKRLWNFSqzmqSeYHtGua",
  "key18": "4znjFg8rJGCVMixJNsjh5CvcipmvYGBnZm23Y2gnJ7hSV78EVk7qpg6v57kyS3iUkV625Fqc4rCmUmj9CdqG3Xgr",
  "key19": "4Yx8ajeLb72yPFXCFdAsebB9E6h2JfJfx1DfFuBQHEe4RP1PkBBCnKJEnY1voVZTkHBze9dq2KcBtbUppTw5nk6G",
  "key20": "9P9Sg8q7PJ1Qsu8NAUQvMhrZHUiCov1tiNSZKpTcBx5j5ZtRrgQvp64ryLTgTxE8ZyVEKxxCwkPqGV9gLrPTo5p",
  "key21": "4ucirGgrtFSCa42bFvBfWDLZVHLaF6tfNNGgQ7aSZwdGtChbDHC7sfGsznTTYVDdVLir8Xqjo74WhRU8vFPSgpVq",
  "key22": "mnqoJ2zxNK4KiAeseBjobu3G7tJR95wLQmrpWXoTTNoRLF5DzTxGFdgpUAm4tyh8V4ZEhvvAB7x4EnBKigSe5pZ",
  "key23": "4jzKZkAmY7ZwZQjonGqgRr1KzdgLy5KgikZgn2SvF9UB9aoEmRDdqqP5UuUmH4muEt3hexcMAM4NwZraT1rCs3a6",
  "key24": "5cuJh8eeyRWvmzeGxV3utCzEVF6w4Kfnf2kzo2kXGyE3MHiVv36NyxWMALPByg8GtpCtYZxyLafLukKKNyYtnhoZ",
  "key25": "3uQQZSoF7fjaVEmDEj5F3t6PtPh1xf7ZnQmrqbB1KyNGL42v4f4nR8uzEtGhB6hC438PZ14aVvPhsRGzGe2srCPy",
  "key26": "4zc7fWE8cvDfk9jHwUYppqVSW1KrU3YWKKevRCdFvbuaM2zhia6DkEzrfD8ENVbv1wY9hCcSq3ea7ouXypnVBJ53",
  "key27": "F9ffvB53HNBtVjWnbdxotsUKU9tMWbXJKAY7GNhPTfE7FsF9aEA1BZemhG2YQuMhpQtmwMH1p9ppMu4boue3DZV",
  "key28": "5wC6TPQ9WksW2H6wNrwynq9G3TKPJW4PiZhVgbVF2atvsb5SYzGeH5w4apVCh6xfW9rMnwHKRAh4wEX8CRzTqffj",
  "key29": "2j5N2Ea6LbgbAaDPtWVR4EswGeUqHrToUsxuEFmS34umddSQjeBqTcr9V2UFNw6wnQU1DRjktZzgSek5hQyfLyPM",
  "key30": "fpthmwz9rJosPJN5yQog8k44ugeiQs7wcn8VhV4mrnacGEwv2An4RBHNNSUitzmUmricSM3by39yB8gAGhyiXpN",
  "key31": "2apeuMH94dV2nHDgN25zgmGefncTPQxu6dN1LJuvhTE7CAiw9AtZLishjYeEv6mtQTMAjdyhxGxFtV1t846K4qkh",
  "key32": "2c1nDwEzWp3MDEwa31rFk44LXRiMsuugTuuinU8R6HBMQxkL1cgtB7u9WuizRDx8NL8zcWYaHYeaTf8TjcwGXwKQ",
  "key33": "3HgtZuVzoZk2hxV3WpfFAeF9xETNWBBQ3izomGiFm2vQP8iWf8NJVN55Z8naiEXFhguHBQb5CqBN249t2byxAubZ",
  "key34": "3LmpGjYBzSvyzioLfHD1ALitq1DBJd19oyHRJtyQA4rkXYVWMGdtwmZDWFpAgb2aUtT3eKjgPdNQqWE9snEicPvG",
  "key35": "oDK1zmDdbsgdfV4ci1d5rLDGjgEEN9YeDnRNWcQ5DBmerWfSYXZyRkwkknpYaUFy7JyJw2ND2MSDweo5MrVMf4V",
  "key36": "5ywq4UWHiiunHBLNgQaJW6Jj4ovQAucYUk3uEJbmf94RxBTvEfMJyrx8Q7v12CttvNGiWuecPn64sCUnLkUXF74N",
  "key37": "3iJZsUWfsquj3grWzRuFPSe1FhVQp4Jfgy9sfNRvxWHeYi7VveQRyu94PE3AXiWfcFX9ofshibWhBzZknjgDYb8W",
  "key38": "5hNCqAUNJLDqTpYBbw1HstjNynyG78naDhCgq2ZRoi2kjgHEuRdUqTr9kJ122ZfZRLiTZCq55cihV3sLy2ynmJVj",
  "key39": "zT1cxsagD2Mz3sefWQP536dSKaAyr2JNYMPEpxswPE8eHKs8fuQiWjSUWAs7RKSyYxmoDyJpoB69aiPthEEQNkY",
  "key40": "3zaHmo773aMzRiRMDWVn22sFb8AaiY9hCmCZE3bSQejCQf5brwzeYCHwWYPS4XwhCZY2qtj9h3dpFiuCB7cg4pf5",
  "key41": "5UkQKqwH2ipFDPfKVu4ZitRm736UgxNkqGw9jrV91nh78ju1DN9BRxNJKmwS26BViL3eZ88rJJg2braoXv1SQ2Vr",
  "key42": "4NFPZzLSTw7bVR2mSiEdCQvJyMfwgFBz2LPKLoD17vtvccUXt6WPphof7KhQbvcLBKBTNZ84mbsympDRDwQSpkxb",
  "key43": "47MsJT6wG4JPiTKpVp6nte7msjdynqow1bfRgEzJMgRmLZF7Cz4MPb6U2H8p34xPhozQciPPdrCVXdXuWWFUeVsD",
  "key44": "3i31pDh7mxc2qAmU3HjMqnpwMvXXQiaRa7qmazrkhfLtVSnzLQDPmN4JsZxYBawDHWqXUE1LU4VAtxGMHZEj6YuY"
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
