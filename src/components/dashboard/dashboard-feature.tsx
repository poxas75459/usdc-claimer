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
    "5N7hbbsQ4AXuf1S44haU5gHYazc8JtMNz4SGSCH22yYzhUMExEptnNi5M4cveU5xF2fnBA8z4zUNDpKLm5jrtmqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33zfRsgcXxhBppChMmzx9wFqHKnFivaYrZzpK59cu4NtnN9VhWnP2DTMY83cpDi7GceHcZd1f3Pn4u1CvM498Ybz",
  "key1": "2wLAfuCRUBkWsSgZvTnVt1r6aLQRsv3M8n7tJkXk9in8Z2QZXsaDPjTN8XXBfYZe3hyPwFudvKao8TVeuSxXUTmk",
  "key2": "5qmGgwTfpHBMp29m5UnRFPj4bq8G2YPV8ZxEv31Ep8gU5Rk7L1LK5SZUdYHvJzXD1CtACU2diRGL43Hzg3NGnwAz",
  "key3": "3ZgruNuxVitFL2c8pALwqnFr3DbBjzRLb23kHH1CX6tRGymGN8MvVCF2TZ7g49wmehL6sWPyEniADQgKUV8Mjt1o",
  "key4": "44putJXSnw4jNenZJEhNNuohBekDkY5oNfDTCyVkV2eRtssrEqSBpCwKpw91n8S8gNTAdwcQXfTNuAE5TTbxKQCT",
  "key5": "4NNKGuvLbUs9JLquDDvZDSFAA6DgFofMrTEC2RAPK7NSNTbsyY4QvsQmupRTpSJEKwqQbMaR8BVmKno6YyhMquZ1",
  "key6": "4B2zeqhr1B68X6qfE2T1huG3Up7YUTJS6vVyu58U9v6kkf4WvbpKCHEjTpLtNXgdv7RiTD3GkzGEGVHezsCoGEsa",
  "key7": "2nUzey4um5mR4LkggMpsQFC1qpkADvaup1iiox7xtYgNtXPa1gHBPAkaY8bWfytsmnbrtg7a5hgcwCuxka1MtmoJ",
  "key8": "qdzMT1AjMKoBTczuqfzb92wo6dybDHZUqG6Mp4rrUyLnoAdtg5rGVNyM2Dd6cLdFvcNMYKy9bGFcbcMs3jVFJyi",
  "key9": "4oKbXeayTdgLboffpA1oV2KfpccG6ujtwaaZ1fhZhH7rDRdTxrWrue13gPbx35EsDhcRY5jfxtYojns4QZnBTkf1",
  "key10": "3Ctm8UiRCV64FYoAMkGieP9UN8pnqQyNegMKjhdjvEdbqtC2mCVEP17aqFGa8bjcjHoG3xfHyMxhQSwwVZt14Kk5",
  "key11": "5VU46Q7j7qV8xwXoD9keAFQ3D31jJ4zhEtiY2J5YhC2zMJU4bJrbPut1aFeRxA754FYxxyrG2QixDzj6vujWc2Da",
  "key12": "5NVYVBER5wwruVbwVwfWmhsBzeUrG46zaDvBbwTLF1DSdZiu8UzXeRCTTNYoWrVbCpMa3819VcM7ntuX4C7Gr8Qg",
  "key13": "3N4xx5DSJPebFm73aUbHJmFV3R4YX84q53xAszVXyR4f6DSGqgqQ7Dt1jgnAvY3qjXUCTjbVJ4Vj3hhQZyPF9x9Z",
  "key14": "4yj98wjqGG2UFkaZVtH3HGPGUnVCnanZxFs9xEkXtoiHDfyckrQdbdfKrDPyh8C8jWGHPfiB1KjorisDTQUPwHuW",
  "key15": "5wf2F6khuaMGPz9BjbDV39Gdz2fFEEW7t283BWDMECUjojW3r1rCZCT81ce3JbDoyrjphu7ih16KoZDHFRNkoxgv",
  "key16": "2BNudQ3ZxUbHtqyk9NwvqJSS3TfSzxy3He1bNg1RyRXja2a8HsMe9YtqZja5VqQQu1iDGq62nhwUZrS4FaDDRUf7",
  "key17": "5KJAxkyawXhj3HrxU8RsBWe1JevuXVvosCwi4Fqv5vwwbXRaTymbgLfbrduugXtigrmngAwcn7riBN8ATwrNsdrw",
  "key18": "3E7iPHt6f2WNaCJxQfGb9DBUC4xiQJQAaxvD4d1sgcTw1Ew6KodCQnCj39Cy5axWHAsSNH9QM5mdDTKEhP63oJLM",
  "key19": "5Zu3akzRG6Q5z4Hq8cMerWEP417VamiA95tdae2v3ibJ2Lr9cFvczTjdRXT84NLBDqNEhU8i66dWyP3CNivJfLg4",
  "key20": "fuS6cMVK3W2znWo3WsRwamNDzb8LMkh6wPuS2r4UNbSXFnr65ERoPvpkvEUnoe9dUrBWp8132Eu2epmPPQNewbL",
  "key21": "4Zx9oaCJY7isVZncFi2S183DyjEqDQ9cSX91hLeLPWUcm1PJYrv9JqwGQr6qUT9ZcqrzqSf2rdZvVG5sA7oNkMnE",
  "key22": "4f7hcqzsUMqNPdcdndYW8G4QqCDiFWWRPFzkmE247nM8UesaSbV7RvoT4AcYJEtHtL5NLCBnXA2RYpFv5HeJxLdk",
  "key23": "3pceA3WSUANTiCTopg4CC95wdseXuCxN2iRETVyzrDFoiwJqv5UDoGYiWy48Qjif2uRwgSBHg5tWpMNVhJa6UpEJ",
  "key24": "2AJj1kYzecCmuMg7cdG5vjcdCubH4Aahdr3CP7enHVVbm4b35pFdbVYtAXX5Ut3DTAwgt6VzkUze7ptmtUVP8wC7",
  "key25": "3ddTGCQuR6KcEAzPuu55ME73rHQjJTYHggckc2rawJZrJiHoWcggUgY33T8BsCbbFVRgtTuzPx4WwPCirK7FUhYD",
  "key26": "475phKr4v8aNuu31ukTnTQmETUe8Dkzw9ZoPBLLzg5bJdFcFr2mDZdDCq1zEeef63SKPAgfT37MeVgZkBKXd7Gsa",
  "key27": "5mHYMc481o4UqFqK1NHKGfAAG4SMQd1d2LcM549z3t1nszysW8JFLhyou3wULae7X189SvpvabYpAmGNat8tsK1y",
  "key28": "2XDTF3TTehvC3QV6G1XKPKrDL3F2LqLNSfmRtXtAhXgaa3yY1LB837fYFXGBZSuarUnnQkK76TzwEezkUVTh1w3h",
  "key29": "ACxwUqHgCQN4nd9aHVAk8NTT93RNJEUuUkd8zNCKpvgdx431Sxy9QQSFM459V2eemCESmjXfRZmYbfjRme6pXSH",
  "key30": "3EvkVpm8o7uFdGqDutuaRRHKZWwWgX9kS33EfSWDdjeMh1pxq2zfKoak86YZRes9waBNxQMWtcV3zX4G66MdAYAA",
  "key31": "5RYeuXZRwqBAUSupHkqdwwAeBownUKxkMKxW5mqNNHuUpAYUTwAtHmSRV6wd28FrudBAxBog8anwo5EpJbw9EN7M",
  "key32": "3BNkr2EvA1kFfmMsp5VJKZSoAaowGqDMDRSC3r3ZRPkWSUQRKhzmUWwL8FEoZkuRWwq8cZsXaxkVuCBJ2zUUR2QE",
  "key33": "4L1T9ANWpULjKHBmv3rbM1AWV4Zo7PVpUnGDzHkiVjNomuXtM2YxQdb4CjBWTuyT5eW5JtsKQLBvFh8CesMD83CP",
  "key34": "badBQevB2UiesKik5TF24zSRzxPXqGHDKc6d5jmeFnKb2KiXQcdnPqCynWSK14JuZ5zq7sBEMedbhiFUaByNpg7",
  "key35": "2FMux7LVEgp5sncxw44ZDB15uqvq89a5rSpWD6qoi8yTddcv2YQ4v8ZYTHfszDEeEmW1xTD11F6yT1Crig1aZDxk",
  "key36": "3kPzc7bpoAucUT9ENkX3jJaQvR6XFtE8KFcu2JEU3XD19pPp8TQ7KrWJsUoVw4XTCmGPaK2GUG95YCd6VcaccYRP",
  "key37": "5z8U7YoashNMZSFjeq6sD9rRX4FWTdUTJ9xWiaifDUnottLKtBt6sFw5UkGdF1i8o4peSYfSENFyQvwnn27PnvB9",
  "key38": "zqiv1dfC59VfQKvJ2FmdN8rGjGR6kcmASDeYNKEG4HehSsupTzJN7YFRoFa63vRYHi3TA7VjpQwMfMsNhfCdf9D"
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
