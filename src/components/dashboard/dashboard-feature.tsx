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
    "3Vh6ZoVh2nDpwDen1naczTB1fsBL17J31EjSBuqzKjNVuhprfEWJoMKwU2819FXHWuaAPywYBxJvD3yCZST5x3vN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W6WWxqbjPPV82PYsjNEfR6bgWFKnTjugwA9bjJpJETFF7VR74YW2W9DoUvqbQtbCvTD6GVtJqqneTdAyFMoUnEP",
  "key1": "1nuiMLr9mMSqN4XWu8gr1oy4LDpNn3stsDELSTV5davQsY9Lp5Wpp5H3a7i71PGNtzXG33mBAxgVQHF6NCyh9Y2",
  "key2": "4cySqwEyiasyVTZauHXKcLaoggjiS5nNPh4NaJB5mjGNon8W9r84bYFXivd1CPvJuvA3MLjipPAYwSbx567qR4g2",
  "key3": "2rLGtA3Zcydmuuw6wLyTUCxDnBETKXxBqcBN27LNDtQdkQcUAusus7ioujYKsaVmknkWugKNiU6Gf5yLSm8v16Yy",
  "key4": "3CX1wFF2pJwVdg3hkt6pTH1ychBaHijhN6jmVmXuDgDJqLbtZQbQmdhEARf4bsDdAhpkaYGarTzaTjFns7HaGTXL",
  "key5": "CixowmEzAfuFWU4tv8DjocMzCZsFirX2ut9eEh8TvLRLn2tUr9atCG87dVLzpzt8ukgdJF6Yz8ECDNTqhC1Aze4",
  "key6": "5BBri8Pk7RiLT4KZt4E77aDCZofB8RbWPsJFKDoKPCpmXcpd8aDF2tKnCnSFm6SE8SxdZjipwBaULCWV3a8x9D3q",
  "key7": "4iYpyprhp8P5czorbAM7GgTmbqs86ARCgRzmST8T9bT5SbKzPoX1STf145fPAdkRMYCVgQJxp61x4rvLbo37Nwex",
  "key8": "53aAs79tqbXvfwcSrzCc8nnHdjckis8KKNmH82pjs4A8HNe15imbZvGDPtvVjUXVc1pJpU34hPkPqbyVpka9KBzQ",
  "key9": "3STCGqpXccm8zH5Rc6tiKQaTrQMW9i91nzXekGhaoTu4WGghErAs9NUVW4YQ1QwxucEzo26s32uuVoAYQRTpg5iL",
  "key10": "KHpwsAo74gqHNEB3ihj8NTkWJnimpo9aJMnea9Q2ZHnaWQrReabpMvQZ8EpD4eotR79wFiWdz9rtD6DAik5uDNW",
  "key11": "2D2csJTAxATKdgGqwcDKGxyxVhYJJDSEQbTEZjbKHzW48we1FuT9pYYoGhYPg5ZbXJr7etqn7BCvWnDC217VNsFt",
  "key12": "23tBuKbcejobsFtwzTDK4uHbzndakNrKrnEb2ZAHtP5AcsWPQ6UU62MttAzojPUm5sEUXTPSmQEVLy3urnVPZqJF",
  "key13": "knMvABPq6eQWJz8QbVHrpMaAVTUnBVU6c4triUf7p8Huh54dGhtjkxHVbwed6MfqH6zR4HrVLvj2HoyNcMFAkgH",
  "key14": "24Yqc5DoANvRR43tucXDyYLcH42p4ryWNdyzd4QUBPUUEHtTL3zfVcg4AvGXwLjk6JmoA1jnSmwJGBKPKzFJGd8M",
  "key15": "3idxrEeVwP6kBJbcQoUgYeXzPzjkP7XjixFQd5UQYvGK3161QDByAxDMKwgrX2S2t9QPa9AigLZH6eg2a7kMVSKG",
  "key16": "5WV6tv7F5NwUE8dAoGmXQyCVPK6fxpkeE9SELZBDoM1tZvYh36T3TDeHp3AzBNmjQQGpACKx228VvUPnswyiKZ6C",
  "key17": "2kVUMdG5UnRj2fKDE9WP8sJ9EyzEREwpQoD1zGNg7h2Gi22AaghkzcU4BqUBq5SB6evjNVKuYoLhJtvjATmR5ZSa",
  "key18": "TDwiULNRR9Wp8uQ8gBEo7RXkewa7JFkmD2sjD83QVBUS2gCGee6vxLrwhAWAeUqNgTZFGnF62nhaADaidkCnY4b",
  "key19": "225RJrEiwF5yKNZy9zE8xcvNhLUvnvzoyKY8ijPLTVF8MGUtkaQzrY2YahGn2V25PURVuV9XoDJ8b3gzoj3sA9bs",
  "key20": "3JLLDhECsthY91ohDaCLjhvNJgUqu9nC5ieTCYe4NVrNZUZwkJPNG8Td6ajC8DYxhNo81E9gF4fSZCUWDH9QUJJp",
  "key21": "2S3gp81MPQPkAKcP9sc1wNteQ2kWvPux8aEuFPb77jedG7aDoPr6GQSXAnTHYjr4Jf1Lf5aCdKArN5BL3M5Tuvhq",
  "key22": "3HkistooQfAbjG4cBwcFka9zNzRvM17nZMehSLf7EpbF9z8K4TWJsWk96ufGMcBZGF7gqSg6oPgii1xDWuRfpLHP",
  "key23": "2jxdw5bSjfJN7QJ1FvkURzonq3BMoPxkMCvEjJX392WNQfHTWMRzhjnZwYn9izxTEuYR1ieFjnGH8eN1pVNaufQk",
  "key24": "4EbeMu5kkpkcXVvMpF3RMA65pZpi2kz7CHBsVPMFnX7T2yBDxYmP3Ms7UuqRAaUXHa54LqbFAiEKgjBmcYyzMgUa",
  "key25": "5CiNPyLWp83JZZrJyRxVVKyrwh58muPh5uoQiTWp6sPpZmHgS3k16sSRKvdTQVk6xLgCXwRY7MX2Qjo1iMHGozkc",
  "key26": "3rrvU4mSkABZJbS8TJ5eqKqoCpGcTbgRP1zWpPvFUjwSBXKP56fEJhXwLtxYkT3zAaiHK94mt5H5XzNjkB79Rumm",
  "key27": "2Fm6pbBkb8RRYHP6CvkdNvk8SH1yYYPuYMg6mRuLap9PWh6rih5bQDtesCJResrHEH5cyQQjwkErYnNZxohf2omb",
  "key28": "31TrRpjgw7QDYTvGrZnZmHxvnihpGuM8A7jN8DuERBab6kkq9eFCTDSQYQdv63Fvi6ZfurMZrhihyYcy5RcQJG9p",
  "key29": "4TeEk7gBzCzSQ2sWwS1Yo81CkhUTD2esvwD1ZfPiXJaviJtJQpyfCtYgDo49SZrRHTSS3fJS8r2ieZ6Q31EgyRk8",
  "key30": "392oUdZvLWA2ckcBQGrGu4b6gdJUroJXrDCKzReqNhtuToVzc18FLpC4FHdgFyjvDXtZdXumXQtocnowBSQ6QMNV",
  "key31": "4RLmwDuBQk9AxSFkqKHd7YqSuAL4eWfbFGVduaEBB4ZnoiaXitJNKPaMWC4nUfjJHZ7G2qgYnpAMnNPB5F2sjrz5",
  "key32": "4MnMDGjU6ewPHtFRS9SPgG3a3g4Jkn9PHcWDPHCrZvgSniLe378ZMuadPogLNGjwuUaDSuWB81owDM2x7Ue1JCYq",
  "key33": "3ndviedEHedvoUWuJL67P7F5r7yJfpoCZ8wkwZbGeXwvJ98mJvSU2W3q2Rdyiken1BfhV4N3dkM69BTuMjYNhXFi"
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
