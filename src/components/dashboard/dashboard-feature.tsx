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
    "4YyU4UuarD2JRXov3F6iS8M7ziNjGzMrU2vbT4bhxGw82qvk6cPsPQyF1URVnomcjUxs1nZn9hNuznjuTVzKAYDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cM23j2UoouzRqYQDbPdiu43zCsPQ7gDHRJWQLKMYDs5KRsdDdQTb6Rk5CYA1C2xGqmk652LNVw9LrrCcFVxQhnJ",
  "key1": "2wLM2M6kHetErmeFbb4gwpapZajcrJZzppxZ8BG44N5M2UYGvUjA1ZscAPdFHWtgRymhqNdNd43QgdyY7yF49CpH",
  "key2": "3ij1cL8HLAHxHxEQ32HYUAf6cYXTxuoeYA53AcDz8Go1k1E2nN4WYuVAJzG2DwVa5YTAfbtmnnb5ooQzGeNgkRPZ",
  "key3": "mgihCmob4aeTYCi9DRUv68JYULMxtbhPHkpxF4usJmatwj52BRxcUsd5kN7cAhCbPZWkKRw55QgCEWt4TUGqUBz",
  "key4": "4WYfxdsXbny7JZdKNDVapCyUbPY2fv4QqWMB1aw9193xSNuENBCbrRXztWBCrKgX2FRvSwWi1aZSoEix6N16zi5w",
  "key5": "U398NsFUtbrzwcpxs1UUS3YqBvS49AJEfk3pvXqt32TpMumBkWK5dffvkncePgNj9D6Rj1wNgSee8fEoHAGsjti",
  "key6": "2c3SLrpXhwoaA5yPpK7iP4vMx2SrC5VojaZee2xHoFpmBLUjwFCrW1Suj8LJcvcLnkKMmN9qPqBQaJZPaKLvB9Pp",
  "key7": "5Wn5jxufBmyG2Bx3dbCf6HuXXsxHngZ82TqQVTcSdHc4c3AjnWhG3aAXsB3kiweWPycehCnzHcVPfS9fPVWMmyos",
  "key8": "5H55QXkDAGYkKCKQE1uPHrMbEU7fJVPMbqeUrzmb1MEQqG5qMBponpHsN6sfGiyTcaD5QYqSXKZUc3oeNia7CWeq",
  "key9": "2ZwV5YuBeaGzGk6RQspWrfiMxgksSQ5Bziyj5eQLhyRcXUWFDV7kDKxf7BCaRsvgPt9kJ4o3M9rdomYd8oSKSg2Z",
  "key10": "5Eu1d6wR23oExzvvF7xqTqUQduQYrayqwTLAr8v7khRrkrJQeD7cKquEYXTC97kGpN7G94iLgMqkPy11Vh9DYcx8",
  "key11": "2BMiHNt1peVkuiWTqUudgJGAJguHeFmVbnSWLzHYjFybB3ug699PxXrFKPxtzH456Hy13m4u9gX16akgEJ3jxY2K",
  "key12": "2NbFxu7GCQ66UxGZMyxGZJnGzCV5vgj7CwAhotJSZ2qQYM1uPPLXwkmZsRTaYAUKA9pWvUKEGqmE6HF7k3szBJ8",
  "key13": "5A9G2JTKnfhgfKjX7UYhQCBXKqwkFjcF953qWF9mEjkPg2dxYKWMJA3yLgS2wtq3q1sexGVcvEULRa862Uca1zBd",
  "key14": "4Wd4nqe9krPF1z2PHqxAhftnQXPq1QJa1qgCCKM8eUjY4nXXUqpXUNPVHr1xd5Mct8FbbmycmDq8bJWEtW4P5Uac",
  "key15": "gS6JJVX2jfNXftvBWTYAXVnbev6aV9KSQoM3BDd1ZyJb1Hj6Z5RQCZ3NHKLzAeDX9DShbTMzyCvSQzXpXTB8or8",
  "key16": "Pqyv3gmo3rgeS1o9VQprwFJosAmah2ot9ZPfEZSN63t7hKaM5FnLC85Vas9bEFfomWhkcveKjqWkNkb6QyKDbv6",
  "key17": "4HybH7EUQ5VQ2Rp57XbyxoShTLzV5xV7ic7ewDop5JLN62RtUdaGYknWV9pDQ8LanEW9eBY6Ck3e9Cf2qWNib6Ec",
  "key18": "PYYdMQ6D5jzzKKuM5PxstyhQzMwToEmsG6uWAoFFpGEvKYXgU5QRuGtiXySTHKbvjH27SA9TEEEdYeVfVEJxSrX",
  "key19": "4JsD1ynFZFUCPkcsS8Lv42hDz67DYYKFyJDPWfsfZjwiLniN4SVKaithuFBE4VX2i5W8wtbvtAUJwqGvTGuu1uGK",
  "key20": "5AHzQpRggLgQKtn7N29q14i71ndxGexFeLrYGGY4XJTQR8a5oGv9cNHL1qBPhS4JQpbVH1TrPdCTQCNLHpAFVb6v",
  "key21": "53oL7Qrkrr8hoQT2WX4ENmrxhuLhJdrdQ6bDvXy55t617FFjzbuyyLAoBn1Qn5qqFBzEhyzR71347Dxwxd7X99hi",
  "key22": "7hXpyPU5YzFR3yXEvaT3uqqF2tLHcXNTCPd2MVNdTDgUpmdUWdFG4835x2uuCR7VJYLbYWYWEc1L5R15VTteEy3",
  "key23": "EYPigwESMPjJBAvxBMN7oYWQ9BJKD2U8kkBrZNzH8CvarEhqkiGu84x9ifGYJzfRdBnoeoSLn3ZAGg5wc3sqqp8",
  "key24": "4PmkGmChupdfppc5JoV2NDpNfTb7gpSFKCpfMkt1HcugUb5VJymgVqdkwRmDqPWKz5rgKHn7AmXjcKPN8uqrQ6am",
  "key25": "38HFQV5qCDmc8VDsWR5X3d4jihT25RWZmtmzMJzCPqAy6CbGnmp8pXGmij3vQziZiip6crN5fMeQ4RWUGmZ1XymT",
  "key26": "3C37zWFgVAfPkR47dvCqLH2Cep96ui4S95bn7W6mV8otE6vkyeUVv3b8eS5xQJjAVaK7DbgfepabUTnEfUJ8Sk9y",
  "key27": "37X7AWmqn2VoqjgVN5HzaLXFCHcQDEPwg3dJsJxhQotVrvTzvjqFdi9PnNn2ZecuqgKS6CEWieNojnrouDkvq85T",
  "key28": "2abS99HjcqHb6VNBhGBBqxvkUienJJovWTVfFnJwdrGoXwEnarwNXqgfKv3np16jevhTeaGPAEovduVXRyffe6Wn",
  "key29": "2xBTAA7i8hqUp8m1gMNZFu88BMJKhs7uTSPHtFLaYzz8KzEA9NdhoQkY6ovqTq2VNHbfSmbTipscQ1Rak7dZmYER",
  "key30": "2DGjd4MBiKnbC3oZ7iCvMq6WmpZCxFnt6L1CNQHhoASPtGPjppLrzNHfNicQCpvc8fYkoABYL2PPKysdKCKTdvY6",
  "key31": "5Km3N8cMJcUCz7bQPnnndQFg6ERqJeVjCRpj6ExnSiZo8j3a9omQDCRqJyrLdmS5QkRPbTmFBdnre1iZMHiaJoiA",
  "key32": "2YRt3zYY8MgDrQSMStfAsxj1oBhG1rsimE5u7bUaqKuXVX9NWYcjNJJeGdQMnNLXnUxuSFqwyVw65uC45p4PjQTX",
  "key33": "pb2XXHSRvCYvWPkV1DWRCJNNdog9sYMUx8qwwicwiC367tLpY3CAfrmzN1CZt1t9bj7v1rZJAHCuQvrkZ5QwF4G",
  "key34": "9rxxFfPfroCjEdtyhXpsNnjqU1WHzeT54cStmYJrW8e31maJuscntNfFzp5drfdcUD1N3WZbGJ1CSyk7K927X6r",
  "key35": "416eVXwsoUX5bdS2WGLHH54yy88UFuDThseCQKJbmmMvfR4VVka1LCtE1XAZnMR45fTSodFxePzp8yrZmkHtxyAz",
  "key36": "GmoZ6UHGA9yW21gary49HqLha4iSFwAigXXMEbVvyYLi9vbiXj8WVeiQiq3Hnqc5qHStZXtw75rAwanvWrM5cTo",
  "key37": "3R2pAHAPtgAu6ptUdYyZsDifupic7pV7Jjf2HYdiFdPT9TQuUpT4iMDs6TkjkdAKA3yDnpUysG3W6F29uPfHiqrH",
  "key38": "52Mbw5mDVytM6B5jDdMfwWoFnX5afimV1YSTiXFGnSk8tJRDxro3uGwcPHdg5N9qYRFZDwheHDKLzuLfKXCgji2X",
  "key39": "4iAQvrK7ibNGgU3KekRiHxLRGZqtUL9QViqz94NsH8kcG3PH5J8kC4YV1bWzF1QJnDmjyFQN3wR3Fpy5UMHdSAib",
  "key40": "4R6rop3EeLbYfDZM6fAJ7KKUUgfpMjfaMDrSs3FcBD4z3nj3UB5YoVLaMuUQjh25Ef12VbuK6HHJ4hqLM7z2Mawt",
  "key41": "54usWnZ9yTtV1DhLm4nqmKaY7kmv9bc4YFV8T9dTbogXJRMyuHPcK6pmH9WJNubduuDM9PVzXMTqdJweuEiveMMp",
  "key42": "5EYW9kiW5AkuEddYg4FJVe8e5NCoPDJdXsatPqVGFejXvNFJMeh2bsGBJYG69wspkDoARbcN29n6aquLGrejeDjL",
  "key43": "27FBdQdzLay1QsXdgfKH27j421g2dXzQgCwMd1bfJiWe5M3MZfe7vHYU7GxypVUkhGSTWjtNMAowahiJr9SM3doG",
  "key44": "4Z4AZweJ4uv5A56qLxyJzGPkBhiGuJo1YA2nPm6x4dk4qa1wv1KLqP2hGsh96w38YUMaXCGyVL5oTUTrcKQf97vK",
  "key45": "b3Vfezhxth8aiQMMrpbZRUfuSUHaTmFrA9snsJwhNN3QpLLyhdTVYvQiNN19uqaDdamEQpYUSba337vERfY1axX"
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
