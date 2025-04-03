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
    "3PPeykpwCaziuhV3ydd3YD5bDaG6VAMembV42QktqLQD62swXdjHBeJ78x8F4GGEyt13xM4xiCwTkiDH1eCKH9T5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YdWXZScewcs3ufubm2aZB5SoFh2QcADYy7ZbfjipUcTPPGibDTSF7vQcn7i2octQ127J1d2hEWmws7H3U9SX3M6",
  "key1": "MAosJ9ewLx4oKvuZe3EyTa1VcGmYELipNSMzzyLsypo9Yzco2m8mEczuRqRVsZpKCejbS7w4ojNFmsVYvoszcMh",
  "key2": "2chqp4NC7QwU7MUqgiyzB28Rt2PejSLSihbu1aPvctqUVVkb8eTddz7SY6c9Ek8yTp1EGF2NbLBuXzkAqSFuiSfT",
  "key3": "5SqS38nUYGCBe5Qsy29gnWqXHfhdzcGyN69SyagAzspbSMxWDBa7qwYRj57U7qj1nDmRqs1zkYxjAUTAYEbVC7j1",
  "key4": "y8pae11Ch2Pe9vyG3kbTDCdtfghF19b2aDzpgNDzz8XRNNma3U1f59xaU85f4g6ageoP5mxZp7BmTheoWcbffH8",
  "key5": "2Mbm1hqWxZ9Wh9hSEakvZfeUpKQN1abGFjPaCwtmgmZ3FG9B7P6rsBQH53bbHUbYHqZP41dYewHNjoqkpL2p2t9f",
  "key6": "2kbPM31ALVLRND6cQPj85iy4z2bGxwXJUr1WKEbEJwYXwQEniDQNhFtmBcb897KD2oAL5gtuZZ5LZ3JP8RcXasC7",
  "key7": "4hCEUQGAHGYj17UJ9FcQxqvHH8BuJBQqQLmBL7v4ownxHa2vec5dyQ3fb289gp6wqgTN76LBvPSwb1ypqw7F9ZgN",
  "key8": "35mSJqj55pASSfstpMvBf5TuCKqb1SLADG5o6a9oYh4TBJ4CAmBFTtqQ11CpEJpPJHGiwDnet44BuCciWHzvrTdG",
  "key9": "4Za793vz5Y3feEnKbF46NMUHhSZUCRnqBu8tSe8mQckSQ5haBsobVt7iicofWYJ7vPvoyeynBpCMzAHeWqqqf4uw",
  "key10": "5yXra8cv89jkeFo1taapZHSWMYuFJuodPASb9jo5Lmh9CQxiv3ZyJdU8BnEBmEPh4DAE2QHA17ZVZQve8UzhE2ES",
  "key11": "41q936hpHEaVeBr1LAtaHoeMe1VC6pea42v8VgSCE5oKVxw1VXB3hwXks2Zc8674sQEuBz359Narzrb21pZZbJYv",
  "key12": "3nnnb1Zik24ALWejNGAwLTKxRH8QHhvYyR9PhkUfdoT7ruBQaR8Yp2HKayZAYW3PLriHnobmWxbeThR6LokbRJNs",
  "key13": "3W7q42fP3swwDV4bZ4M2s8TbmiS4kkBiriJ1XJYGbmz64u1gEpjAvxHSa3CPYpdwPbqV4WZzpELDeEzssxpYPmEt",
  "key14": "4Y5MiCaRXtwngan3SDqRLS7pFzms79z1WYCxY6oCGB5LAN4f7RLsDQavGHRECJibo6w8cksPTuCv75sLdT1Fk3TU",
  "key15": "3LGiYqcFQe6SkK4FpbCsPhd8X61f7GpNMztCnEAsLsSVqMrbQcExyTatHBJcTju4HepdKsBnLKoNnnZRexpQ7gfH",
  "key16": "4NpJCCpKJgGLUAc8JL8DZuJSrcx3BM8zbmDhRqgGveMKnpNrYZct7m6CP7h7Yc9eLb2xWTR2rhiL4bWCZD9Abgm8",
  "key17": "2qL2cJgJonnRxBHYkTsWxW3UZPn78yMeH9z26UQ4uhLw5kWG6BeojBChUCoVEcwEENxea7jX8LnDCWyAmyRjjw8C",
  "key18": "CqfgAtx95kUDHNC5ZtvFtSEdxv6i8oJaoJPw8qc8rr3RngNb6z4Zhh7y3rUZNQoCCRSg23wtjPHS5US5EKGFfXi",
  "key19": "3hGECJHVeXTqv1LhAAaYRB8FafSswWjj7Z6MAjPSKtJ9iKiqYFTGJ4RqWi3DneuUQg5eHgDeYmBn512rBfj8tSPM",
  "key20": "4dNXKL5FdE4hdFfNKgk6RajMJbsuZM3YVNHZMFVqQwiAyxFi6UpQ4jWAPoMox5ui419rMNk6g6o1jeYwPxFGCFJm",
  "key21": "4sqsgER3K51T3ritJCAn7DyYeMMLpdRQMvaiymCRyZVdbsXvmGA7i3n8JZbxMkmnxyy8unkkxxJ4RxHx6Eqvq5eZ",
  "key22": "aDZFZ3kNMXSSL5ENntrw3rJtj44nEJg8UxtWJXqrHc7WFBfK27ECSbXm3A8CvDdfMBBUYeNt7VYa6UeEogjmiW7",
  "key23": "YHVKnjrte5kFYP8G7TqEuhCWZfNeSDQD6udLVePRuc3jGf9x2DSf88kfSPhbfLeLAHSXhMMYhnFPZppSKB6rLSU",
  "key24": "3sb4LPUjPughCQZzdH5UUkbTfu1xJXsNe9xXmLczYifzUNJsWeCt3DGirdH8g3zGnTvtvzCEbHkVxQgfpeMSDeWR",
  "key25": "4byXVdGSo6432VKhoTpeHg9cSfUn7JF5Q7ZCwhCRpL9ESN3w4fpALtjK2qtA78Rh24Mv2qFuCFmj31Br5jcURazb",
  "key26": "aNCkrWCAq5EKbhrB3v3W4UX21vgEBp43t44wbhNy6omZPk5mTL9WKL1wjHnoo2KdHUdY9KBhj66um8HqGFSCqkM",
  "key27": "5FAYimCCLuWkVswnFjU49go2mqLnuiBgUwPKZpxT8FFxLsz7UBuhvjKezHB7LoEkJzAReZaVKze6y9gF37qGKTJV",
  "key28": "5aZnUuzzFYYqg9LLY9Bjw4YFVCH5YLdJ6Svxgs9r5GmtcU2nYN8FpWMzjTrdtTkm2QjfPUzo6gjSvnc3tYAMQnPP",
  "key29": "eQrtnNRfCnxato3UHJfyaxSRdEwe9KcMFj5gMBptKru8NZTfrXa77RkH6PQdKh9CgkZq6Go8HPBdyy4nymfoRCE",
  "key30": "2SYGyYhuTVFxPFhjk42tdkBjoCttVtpL7sJqBBNfGLdMfWTLV8JZoKCpAQRJtVPmwUtc7VGzo3NmzhZDq8fMNgJo",
  "key31": "2ngTErDasxD57PWDu3gSA46SqKCLXJsRiByZHULLad2KLu3HEpGubWJjmLADAKpPfdhvvxq4LJY7ZPqUDMMvnrEJ",
  "key32": "DqZicavhSTZxXQSJKaBvPohHm6YfTwYvJCePmcqKjhHaXyegZMfjutriMo24aV2fxAPwHKSGtRNCfaamoW22AFR",
  "key33": "kwEqqq281zi35SZG2PYtMjDmiRvJ3eY53oXDuCqAxQEUi6qrhe5vdtzKbGnJeYMYm8uLpVnGEbikrnuvhKDL1iG",
  "key34": "4SUWw4XML9S96XfHFenQoM8Axr3jursBi3TFP3LGfrfgQxM3Shp1kd5zeC5pDA8QEGKzR6jooRJ9cFyiThA3oM93",
  "key35": "4Q6xRgg2KiVMZv4codAxSdjqTzAeU8FgHvh2Nvq2PC7aiTK1MQZ2yUAAK1V7ZvmyjxSfXGmRfhCiNC4tvhMuGwS9",
  "key36": "31ZUE2aW2YQ9BeZyu3peRfiWAeDLymaC4zvr1HMbXSWUWgZE7GJiHRjWSTznRFrbHYa36GNJdAJ8V2hv7YkAVnGs",
  "key37": "3kzAkJLVQYWHSyJCaM8Gx5f2MaeAoouiqgJCQthyBfCNXB31eDSkLZKsfkKtMv7qMs2FFysfx39B7UihFrpLnDu3",
  "key38": "wbM6i4rR916JC5gxUEGZukmzjhV1zJSPvZqdatRPHLk3XFQkZ4sQn7nYkzCxYHPQtNHV4bDz8F6DwYcTMH2PUT8",
  "key39": "xfk6XB1s3Q1T2ncKs3tdD26m1Y4bPzyCXmeL1RB1HPUY2K3FaqW7dw8z3EgTgH9VaxRs9ZHr59ixKwMCLF4tdAN",
  "key40": "4E5rLgJ5CLRWXAJhE4NbgszXHFAcuoNwz6wPzYrJw2yzLwmXArDUmwSzcF3EVYXEjj7wmgovRtyK7dvNRH4nUNiS",
  "key41": "4umEoLKQHPjEpmVAzCtbds6MyUJwwKDt6W9MGmfSa9xxkj8ZXD2hQkgW9SNVLTRvm2ANwY2oLUq49Ntz9Se2RpHJ",
  "key42": "2VQZKpZdLRZwC1szwTuXub3pbBvxboC6m4zB37JNe54C5zkWQgpR3pd4r72XEguM1ZHYi9k57mbYsGr92VmYoX6K",
  "key43": "AHMvVZFDysSJjf7dUZysdRUL958f2X26gkTHpkxaHCeM2NfUh6giA3QJHxurcRCHeZeSCLkfCALxo43v8Pk9y2W",
  "key44": "q4FwrsbVKBoLvGePRvkvf9saRYdRBV1sqPCpfB7ocH1fq26UU7vLKJQpKoWugzJLrB9tGEmJtJMJuQbjXFEKNS3"
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
