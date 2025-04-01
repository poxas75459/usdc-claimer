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
    "bupiRRaiiNpiTRPE8GC5iQvj3WvdnGiQJDAr3JuHVekPbusSAbhD7khTZ3gU15abopqZWYt9xTKAkqn1bPnJFyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JVichi6cLFg8Z3sbZgb2vR6pbkvyJsnmkvHWwpXXuV5bX5XLQ46AawwyPv8Xu1VrA6xuTZ2hDj3uoTZ9j4Hfv7m",
  "key1": "2yLPLFJC4MLSQgoYgCZT81BJ68kz9ajnnPkSNgA2tVMZJUhkCPhXbZmmGasCkRDB39zve25oXMsjzeBsUEiH93EE",
  "key2": "66s5VNm5oqkTN9sxXrwWUQBkmK2hF3Wce89R7NmSDVCCQP3fkfMtEw48fFFqQce9eWMdcwEUdPjevWUEYmAPu4cH",
  "key3": "4nxsdTua2181dUMWuLZ9qVCADwSyHcFWBWvL5agPehnGfv184dtqAAc2mt7m1gzby1bjTe2BoRah1i7mKdENLLwq",
  "key4": "5cxsSwuyzrv767m3siYv8NvAJ8A4V7ohRCauHJDBAFZLk4XjmCQaz7bbm33M6M14PeV1e63rL41hHf4Xs3Qm3miV",
  "key5": "3i4CT3R2WTmk3E1c918qfv5XLEAhNJ8G5rTWegGfG7b7XQm4iwb8ngGDuBEdj19SGupSkct1fLAkgjjYEzMXiH3K",
  "key6": "tscExoZHnA42QV5n2oi3A9wRSdd3UrA22A6JimiLTS7EENP79TG7fgEtZmAGbRJiXfRugAYq5xqeASjX2hmogbL",
  "key7": "4GijPqaE64NaiwH7vRvCzdQYJhdLtXSFfjF8jMtprgr5sMvDtWFsGZ7Kfdw1nCoC1VQvjiWhSErbU2RnaWV1Ejf4",
  "key8": "2JnGUyzxzt3BmxU5ProscNRcdTk5rCVShR2oXU1Ctdrr4gpDh5QyhvAVgbyxc691wYWiHMwbALXYrVi6GJ2VMv4N",
  "key9": "Guj5joZXLGcYiFUQmooUWqZoMcTuz95GnPpWFpyCtVjKtSQkAitwaf7F6krV3YjXwZ7o2HwypRkevLd1hRNe8Jb",
  "key10": "fqZadNY8rnZNEDRL9JiS5cq334yym5xZngHJ8sryVKarnjkWoxTpeX6b7a7cQLxwJAA2RbGaVNxKA5b8niSnsS3",
  "key11": "2uuZZkQzcj2rxkhT1hytNqhHdWeYhosp9eKZER4qyHYe9mdUonbgt2MrveBpuXy4PtqN3nFs6eVfmdMha6ED4wwL",
  "key12": "5UA2A8NZPZEoc7w22cfwik3uQwvjfvUYTLdfMYnF8fHeG3bXs6vg6k3pCdqfCxAtEj93SKQZ4r1B36RjZtRxrJ5E",
  "key13": "jPSWrQ9dLtQ6us4P3nobz3c4zymhqDWMTnxdRoXTV7vu9UpZbNUp83x9u9S5AnM5uN14AaKdQetTThDxvNcvfRh",
  "key14": "622cjmtktYHKoE9zhU48878tYsbA3YfSnQHhgEztUPLZcYxqBYTr6xSHQYbnFeouJWQaVGZCoPwwDnBuUMdo4zUA",
  "key15": "2tPozzDK6PFaksC7i19aQgs9xQ3yDGMWwydGzUNEzwibzGQ2KZns83kYRiceYs6np4arv3KSawrLqcE7eauBmtvN",
  "key16": "3bzXLbWoKyHiGzziiWGyoEeUcb3NSHMeaPhrspmUgfcpdbSpWrqpKzmLjd2kEGeJvn55yZWGJCRAU9UuaWwcfcz9",
  "key17": "qoG3PqesJkWF2mRQqNBm49A3REwt7147n3FbYuTRsJjMh2CC1CT8TU6EJjnDrPuhEqub8YmeSFM5TbQuhF76Nyx",
  "key18": "NxHW6eTQ7scSTBP3qcyE3KqUDCm8C7GooFc6tfTmYQq7BXp2H1g9zX1rSiR376LuU9rc1fTsdxzLQmKme2HkyeJ",
  "key19": "2CofBJMvcEN124WqQDjvecdKSDQVJvGNu8x4iZ2t9pfVVzRU1ZXTjvUUfbH7mM7H1Z9RNhHKwe8Phgcw9SxEMHrD",
  "key20": "5ZacssSHergXvpT66QTVHn7NA4qDmHKK1gsGJksc5uNK3jkAVytQJm3wwNtdLznEYGdLaXRLUB6f4S4NqMmENKQW",
  "key21": "3iLCnZh4FGufSPzwLNNkcvLGESL9Y1jdFdt2KPJNw5WbVsSeck7FWKqRwVNJ6yv2quGAFVHfGZDP6ddt9m3sWdHs",
  "key22": "5z4BZru1nefkb6VSmbXM9TCTf97b2nJwG9Tn7GoY2TPfvXfMtxWu3jjL8sxPkEUeoFrX88YgDyoaceN1nvsnA7qF",
  "key23": "6Y4D1tzjLQcdrPjKmm8GmUzP9FnQ1dHhR96vB6PPcqvFPJWc5xgAXEKD9ZQTZ28w671HgvRgdEwo5JMen4Gemwn",
  "key24": "4fZa2r49FoXxRijsXi7QEY7fmBfboWnNdFNuWWPTG9p7omRLmVBKj7e7722sEYRnr81GSZxQQySiegiPugafdLF4",
  "key25": "5yqEvfQsbd6CZgvMkSdAE1Vag3o2r214NpKPCW2AtsqrXUtmPCjB8YTvciQ1yPfRo7HKxPckNR4GJrJcPMzKqFB2",
  "key26": "5BWWTVSSQZQoBBJw29SLmozvd7bL3usi7YXUJ4p7h5uUn1ooBU384vBhZC7eYU4XTkdaRyBsEK1w8WVFKvDyjwG6",
  "key27": "6ozbYJSeyVsjgEoEvgvtTbTMkEgX38RMnqTqqLVNrs2EPEgeuJK9xrV3WBoXNPdbX7v1fYsDpKfXTbMpPFELUov",
  "key28": "4ywiAJ7NgpWj18Vuwynv9izPK5idhWyKgJD4z32rBDk2158hogK3MKPohgvCZ5T9DtdsGbSqiNqNUW7YnTjquGxc",
  "key29": "2BnkzsWnABb64QSAjVEn9xwKEQsW5v1X3TcryjLo9WRyvudDkZxzsxtPrtfNNgJ7DbTp9stjwRBTj62MVvbtEYCy",
  "key30": "5eiMT2h8DKLfUSiFWQd2m3kXRSXEBeCg6GmWC41h7JFq7Nms5kuun1bgaT7g6Lzk2AhMeHKLWAwro3doFGP5CSBf",
  "key31": "4oy9ZuCHVtX87zu8ri5gtw7bezdfHEBXNAmJUwbxYttQS1BRYxD55Mezyhj8E3xUH8herbvBc2ECjB1DZRido1S",
  "key32": "3Cqb9xKbrZLPhxyMxWLqSEeVTjiaT3yTCxCmSdXX8DRxzpPyiAva4RDzYiF1f8ta8ZiyK3d47mxk4x5Bp98ZHyow",
  "key33": "3xKva5FTB6yx3NobzLg21QNuu2vAoCknZLT9qC5UjoMF7Cww18FQJYKMNZfKBsphPwVBVmjEAK8WkYFMfVywf3Ez",
  "key34": "5ffu7JqzVQ3qMzGfbH9bezpjCKRVAJu8xUJ7Y1ZkgRe4cpCaKBFHYickmeGka2VzURBkLzme5GZcAsMfWQE2dCma",
  "key35": "4eZinNxhHnxtfy3eQC7irB1WoqneMkbjFw8qMLFQbM1AWuo1JU3WC4yJ6QcnwxCkZCASb4wwWhGa1FqMnRUUu41r",
  "key36": "5HUWQXG5oKMoDobSemWr785jwne3dTBD5BHHzLdYYEUJAxtFoyWLkT42nSsPzTUWc3CcctuwE1ZjpuRswDZB3CM4",
  "key37": "3BuwFUNVeujUHGWd5ZTjF91cmy1qkKCdQcPbnPNu2dXMXBuGY8WXVgyYzXY1x2fZcQALDXWQmYMqWpV7jQANJ6aM",
  "key38": "586JdyPhHtaRFsf64cERci6uEvavGdoCSgmScvkB7CNpiPzUJVvjozFPEYVBR5hg3MSHkaG2jQwtxeKPcwbuSXHJ",
  "key39": "5zhEqh3TyBXXiufowzDojnaNWdgcE47nL19ruSKJ9fUSU9Hgu8Rc5cq3kfqYLUw3dHPZz697K5kpDK1NGBea87Nx"
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
