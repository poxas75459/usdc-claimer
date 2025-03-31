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
    "VuRZ4WW8RbmW5g39kNHiTnmMEEd3JaqHudAwncKEF4Ga6dsp7WsoiAfYKKoXGFKpcx2qF8X6nEbucC2GYXzrVaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rm7Sqm2Ys9NXVVcYTkyzkqKobJtTSvCa1JEqC6U6WymWmszjmuud1VbyXU1hBTQTfFvwEXPSf1FUATy2BQBE7VA",
  "key1": "2mGGA56G9qxTVzds5T1TKCYr3xqPqYpaE53mMrpyFqhAvKkcyYuMNwFLLaCArkd1rUuRAKiCfGmA2fzJyfWu7yEw",
  "key2": "57PDE3Z8c2ePmTyH7oTZd4DVkJQ179kdZEDSPjTy4R1j6Sbt8UD4r9d3a8fQT7JQxaLhXbH9qTAzoPTqAjRVQK5h",
  "key3": "2hXSpKJGj44S4jL6NjyVxzfcRVwNEkfEQUeWZnYLrTp9PYgEXvV9jEXR2EFWi2sGUpB7tCFwGmGRtZoiQsc3fQJ6",
  "key4": "5yEHkwXqwjgDP1HrycvY1vAt9iz6znc7AneREPLWpUpuLaU9FjfvBapJwqESAFM853VbPkApmvvwmvgAhkX3oanT",
  "key5": "46FkFh7tkNz4eY6vfvQB3eCkRzjtvSrNCXeCLMM6PL8Eqghk7wzRGtcEBK4v3Vu1BV1HQH8AyjTJMRnge8YX4hFJ",
  "key6": "2ar2qdGx7RTyHuctTmEKPvHYiNcUFRGdarsvMLFdnrUrifCfVB6g17MLGzcup4hRQa8gP6h21jYz1H95MJbyEwyD",
  "key7": "4rLm16dvYKvz5ig8rx28bJ9zpaCtKLxQGJkKDXHeHCFPgKGTfKfnEwGpY9a3roAcxopP21Tz6REhMb1fEUq8nExM",
  "key8": "3pZv77rJdhbGdf6xLSnBAzz2QksB2ahWwExdndEVRPUv4Tf7dakfKxbPpkmCE36rEZR3KvgxnMEACgtEC6bYFTnR",
  "key9": "5pqfDr3pYghc183TkK42rRRoPjoaQ3iXtzZiA47M3rYLD7DDApg5bjbgLrVm39nPHCwZ6eUq9bRr1Gx2KcZrGAxB",
  "key10": "2FtGcDWmqSr72xNtC9XSjDkF2npsmZqsLqzSGiX1ua2km2MijhTrRfhn82YLP3TnePbYeExjRo4fFLspjpPLfaF1",
  "key11": "5LPPQgDjzKVzwpPejtHFyuTGuL6dbDyBg1u9yY2i6q1Ry5qc1VKG6eyPCPhU1bH4pnmVbFWpSoP2PBPoweYZr79y",
  "key12": "pdNuGPyxKVhrMiteQcVY8m4MtvVQ1nU5wpKNMCbbwUmgZbT39zt9aF1mx36ATi4N4yf2wt9CQ5e6s8ZtTSsKLTR",
  "key13": "3qYa1BqwrHkERepcUWeLVKnn2HdtHppZ3NYGxZx7K8KbfsQDxNhkyrciVxtJYem9op2AZ7Td2MuMHNcXRKUXLxLy",
  "key14": "4uhaf2mN8pM3NoAvEeW53GJnVsPGwRJfqj3nAnhhGRhXKZkLHzGXGqo7gKTtVmTWUbgqo8sW7dLy1eakGpuhgVbs",
  "key15": "vrrJUwgo2GcVQjQKqxA9nAomBPdqpkbDUYWPEX8BAcrEspWY5nk6KoCADuatA15X6GKKu89LEAzVeaVeDXrUEW3",
  "key16": "2eVdkzF3PUKvCHgAf3oCZXGBy9nLBLkSYxQ1AkWivkBU4gWNFno41XKFvA9pT7jzKiNWTnoDXRLJU3ri1iyKsJhp",
  "key17": "3tF87rt4AztWkbrgPpkYxJUe7v3noe4au9ySAjm467omtDDxBsenZP4SGonF4L9e8QhofZ8HqkJXkScsW7FJE7fE",
  "key18": "29fTC9kukLh29zMCuVBttNk8ry1Mxht3xTP4FraRoKbidLgvfGTvHXVnGQhYUmRtx4zH8M2TywP4CUCNuhDj3eTg",
  "key19": "42K7xeCTLyE8LYrTTtyLcaYapYqQnf42zrfoSg8CB4Lc2nsXsJAzosLMZdHU5FJxZCQjSuQGerKeGMHgSbnpbBcM",
  "key20": "5CvSvDgyyqdMsiysi8nEndnMYHAbEDzUtMvCGzyxAM4nB1rPQr8MSytjQajPCwNwDRGm3riowrfrd3Ymec3FMrDv",
  "key21": "4qLBxccwFTVtATjagNstSbrH5jNoaq1tTx2jaE8RMqLaKVGmCdK1YrRdYa4rPnANuhTEL1mXgzNC3mYUtpWHPRpY",
  "key22": "5V5XhDNWXh3g8kr3MCuLBaHD2BfJL1VZLXpsJhZZhuzJu14qAZ4NqqPvnebbxmtkkLpspEWFWv9ijdNSVDw8KX52",
  "key23": "3pekxPa7DorVts3u9Sr88hauE61dCnQiBWQ6HoCTeXS2axZaaCPFXTf9PBkzdYTL3PRdGjeWRLThvtjNNy3tiEtN",
  "key24": "58g5DFNwgJvGY2oCPJdSHxhcJC7Vaf48zFaXigybQDcRwYc6eYFXx8sFjcmo2X1WqQGoZcD42rhLxgLSLZGuiT4Z",
  "key25": "2WvSH8ZeXRSZyvjbH8rMAudoGaWr2se3K4PdM7XfGq1rA6fjqo1oeyeXP1qhLBqpobHrFo5bXA8dSu3dTMo1JvwY",
  "key26": "5wyHB5rzn8oq436KnJ3yk682WCxAtmkgrN5Z6yxA9icBjnd8DDRE2iH7j8QBnpiaMSFXR1sEEKPMoLrUBEgaHwWL",
  "key27": "2hXPMYWSG8ZzUFeRpXHMyrqsXJ7hsittw3DwyrUJV1kTaWPFfCkfWyeHMENaNsYFseP1qVzwjmVKa5rGJD5GYz3v",
  "key28": "66Nw5W8uojvYvQX6g1WL1sjWTFQ89bhpjzVskULzMqtuevKhGAGXfusaDZ46y1KXUwGkf9kFXrwmVVYriMEiD8m8",
  "key29": "23W9c6pjpcuHkEZ6GSLYUbxnC68dS5TexXs54BA5zc77FpqCg8pbHY75K8wrHCTnrVWTL1sjJryhYU93fe78aYo8",
  "key30": "2M9iErqs3tBbKMD1Ay8sAabitiaCfBQE6aobt3Pt753md2q371xkq8uCY4erEvwoujyYKcCtDiLrqFsQ4LTfyAVp",
  "key31": "4Vx9iwnTEczm6BQaX13FU6he3dwrzrwBxnPXCoQX4YJFVQWWJwoQk4KLVL1iXHKwGaVK8PvimTQeu4ibRqjR1R1e",
  "key32": "3n5qKEgSkP4uTc94SF4RWxwc46CRcZeHZJFm9GLqGRpD9mus85sm5FH2w1SvhthfHZ8ow6j8HuAdxVjtbLmtn6fU",
  "key33": "4k2D2CHKz63xWTBxXkrUqs9pwiotJRyYAQ5ZNNw33zvkz5gG9trsyLGQWFTsQkRxshJH8KPfdSc3tSNm9LzyTJ1B",
  "key34": "TLFporRGkM8vuM9oUey9Uiv8unMrd2yVwu5EbjmhAV98uVQTdKmjAAbYL4eSTEUZUKApwF2VP4FGyLHSNzcm5js",
  "key35": "AaziqiCeh6ky7S2e5YwWLp7irbLq8dPrAreQ6zmvUuGtiuR3GMYNbJNbtpqCZD4YBXuTGRVxzk4F7yx6o1S8fRY",
  "key36": "3MnMbqZfqAoykDckgoU9Z1sZUN2BBwLCMpT2bpeKk3XRk9EoHysHvr99v4rRTUJw6qCbnJUhzBLE6NMKsbNnEXuA",
  "key37": "5LXzVG9ZT8r3TpnqA4UGQWD4oVfkn8fDsQt5VrrDrNMc9QvWxgT2xXmsG57fB7shwCQuBprEnSHdg7XwFERUi6zv",
  "key38": "3A45AE99tbyowHgiJH8LXXpy49VfVrAgszgUWQ8zAeEs4aWrPkdcgE19onoS8Q4RQsgqPbgAoqvQXTqEBKS8XZ5x"
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
