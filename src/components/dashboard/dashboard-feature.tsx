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
    "4qRKfK9Yb6eUrKgeS66QimD6AaFXvg4kpdWm5JZWvQgmrzAhLMZBfJz6MzaJ4ZRSiwjnB22akqRPBPA4gqMDXsoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "362qycZ366t8DdXB21nZejmHcuVudiqnvHbZ7ucnZgDtygt6CEMh68xiQ7SWw1FMyrbgE9R8asEL433YZXm6wMgN",
  "key1": "28ygXDEJduA9sYo6j311aHkANnPYhd6UgHHZbTZouxrvQ2C9qhX45pQijSbJy8uBHZyLTSHZk5BgrSxm69RWpjR3",
  "key2": "2BgTBc2XPaPJBN4EmBT8VwQPkzd1HtN6Fm9iSuB96psJyDmppBzPT5TKayQ7V3fXWWmtH63jEmod4igbcnhuMFDT",
  "key3": "2kucCcwJqiUCV26aLjmLTdi1U8TKHvLd1DLnwb2ct44MoLFnLy5P8fvHVsR1tkY6hsKmxmuMkDSKL6n1V9UpjJLn",
  "key4": "3JSjd5fPDTDsQCFN1HzAsxfEJQMYMGmuzp7gmGiyLQ4yo6tpzwbSSVnADijVzp78Lua1x6k3U4W1GbYNpJPhTzat",
  "key5": "XEpD7s4nSghVvjc1fMBxqCorhgQzSJqkw49ZVcYLMbUQV3oC6kvzirhMVBBaGg2BoofsQWCCt4xzGscf7XkJX6b",
  "key6": "5mPj1dcJZNANChFt2uzVYZRzSNraQKp3JuBue1EqjiPYuPX3JowBtQr2LmRHMEocJXY2tDky2xFChg1NoBhK7Xs",
  "key7": "2SLvoEPPqFk362PYUyEXLjkT9sA9KD5CN1ZtfwXdxtWZ7YmT2TTBNXg7UgR7eGvAnaZspkXA19iFM4JSCEmPNxVt",
  "key8": "juKr2vwyoNxxSLD11KTbbXCVJrSiwFQ1oAATNRVqtciA8YDBwxk1w1iS7VBLq9qkbMm5nPiRAwm9FARpWXBgzGC",
  "key9": "2HRWFdd7n1UX44eJ3nUSTJgxL8miu9aP5WEdToqqvcRnjswS7dwcHp5PThr9e5LcGKdGHp8iUjjQCJEa4TbxfbP",
  "key10": "v8oSv9eFnTExiUGrwJH8ThniFqZqZEd8g4SKiEDuzo39u1ihFsK1j5jErUAdVZozG3Yq7rTxumNgRqYV72gjozf",
  "key11": "4wvBg9wHVrarsR8EVVmeiEMgx2VUEBp84uRKvXQMjGtcuVVGMqUENp2XrWJRnyt6HDxdkehSLAd8P9rbwdsSz1YQ",
  "key12": "4Ezrm5LwXgHa7MoXmpwPvgLARb6JUn9mXnd7fytUcYXyTCaRPDqSjYbtjyE9DNzCy7GMt5upGd6jqiR8Uu6dEs9k",
  "key13": "4Djp9wAC98ouDxpzbXzq6FMrTKpqKBPQaCrwyDsfX9wSeTZxALtMPoCVhEZhX85v2Q1z8nZ1EKKDeDcyQAASdv9m",
  "key14": "5Z24SFe3PpLX8UeafFTpFSS3A8nHxugsJEiPg4Ko5qJp8eDnKv2bAu7rauoAMGC44TJzmK1CzdryKbbEyZaihfHv",
  "key15": "3g18AVwLpFzFBS4Y6Hn1Aj3x1kp4YefatGDFRmPZ2Pcx62s5vBG23pCedJvj7SwMRUgz26A4GAKanW5MqCdYBNrk",
  "key16": "3xh4cWMwPS5DwCGjm44NKcTnu15cqhgFBUobic3XdBjuPYtq6tyn5zDgb1X3HyziPeHoU9dhS97gvrpBPfDzVrYa",
  "key17": "2Z3GLyM7aGttZH9LPUSgyz1XMzSHZDYfcGjdvrsDPV93xLZomaFRWeTy3NtkNpGBoP3mcyCUcMoM7eynzdaKXbYz",
  "key18": "1sWNZaJLwnFvc7XqbCbJKQpbT4RhyuPL4T754otsMdJn7GPwQyiJiU9yaAaUPM6RT6vHS5auLjY7cjomz4eaqFu",
  "key19": "3mmGfB9LhuJ3c8rK6cnSCTAQQkWXzumMBcyedvq3HUukikYa69c7nHupp3PgWhtzNzBo8qxwu5QZpskAh8zCQqSv",
  "key20": "fUoU2FqpH3Hunrajf5DbHTnSkRN3DSmXp9YaGLQCGWPCGoMpbMBwqRfB69mivemJ4merwiKe33tQCTqyB6ddLo5",
  "key21": "3L8kDYDd6zi9KDc8kvhBRTtJYMeVhL9HSxZZZZHxsDKodqt9kUhdQ6fGZ3hxvMi3LbwKM6fFgpgJ7mfSQwMJA1Gb",
  "key22": "2udibjwxqmgtjmodbuu6uiPJZgh7sjNhq3a1KYKMmYCxeCatFMityo314cCdegohps6nwBD226XH4uSwwMNeZsC8",
  "key23": "5bn19BVGHrtqq2cy9QQYo7jvptShqkWM4n2kup3bL2asafhhgHAjiNzfcpUoNVFLZh9yCx1W7bfuDGm4cAZqSjVi",
  "key24": "1Ub2sme9xQC2JaTWnauRen7rZavVCdu6V4FjjPD88gGZ5nBW8RbxKhkvvs838wytpQfkr3HPuAJGK7MxgwxhQxB",
  "key25": "4azByduMterthd9V1ayt3sbfPB2Ra2uS3j1qZgdWtWf8s2zk9fpuRZWNmZ1FXzrqJA8Ki4kLttFagxovWCVUmmb9",
  "key26": "3ryq1mKEEG6h5qCUnXHh2N1mxgvt3BAdyVsys8ocPG2TNZ9BZ5mYcty6HpsVcqJoYpzY8LzDiGdEJqo1CAovmJbj",
  "key27": "5z24ZDNieS4FKvomkzvjnPrgWuv9pGfdjRBxcQCQF83XUt6hrEncpKD19VDnRjqRy8XaeFGQtVvcMPmskNGxLD3d",
  "key28": "5mvU7aewQZneAn9QrPpqtsYU5NduZKaNzbC2L59P7hGo14WvReSNQuBb6PoTXF3TEbE19B5C4Assu7X2wTcfrtKp"
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
