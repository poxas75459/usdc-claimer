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
    "24cz8uUKtxhXxdNW7NPEXj4VTWPwMHsmfGdSCTmuEiR3gB6JnJNhrtvgxEYcdd7wLmNECowwChEY9nXAtu4YoWky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jSM1F2qPLXtVE3uM6wnoh5YgwWnuFWjfk28GSaCqkzNzpgas4NCCBPykwkKpufEtguqK4UQUNmqSbAVsn6bncaU",
  "key1": "5ErEomVGRzCJkHPstaU4dcCmtPixkhZjk2j6AeyZTxdSpgyWA9XxxjtT9WoF5ZJDykJuDo4GXrVgWaegSZoLMaxY",
  "key2": "4ZYThz4m9oGJUeVH4oiHj72UUbXpg8Fe6Rof3qVFMei8S2kMXbUe4Gb5XHm6x267XVtZvS7EV9mARkRp8KeeFZYy",
  "key3": "23yG5aJSyD9gzHqZhPEey3CB7WRvfk9z8VGyQMmyyQTK1TA2nzmycDnCdfyePLBe5F9imB75pnFQDHboVazwGcvL",
  "key4": "4oHAVk2qUM7PnMiChrkS1FFD9StfBihc2NZp3JYFNpLqEzAjVBBfjVddLniWsDRtSQpKN4ZnunhabJG6EAtc5ZbA",
  "key5": "54UXiNkHR7dFy7SbSvJzHvD8MjNy7iCgQ6FHCwrSwPuux8QR2QqcBGMCmvnYisxwvL5XD5Yqf7neRtcFfYB3SNNM",
  "key6": "5xg3crPiNUxEX2GmURf2g1L7fmXKqPZCdkfWvUV3wCetTnZ4yRLUinJhBQpbmN7xL2ZvksRRTyE1qpA8LKG99UuD",
  "key7": "4TD6HvW778j772LhbERoEjeabuCcXd65XFH7QwT4M1WZwjFAYMraVgXmnhEbWxSMpbi4mA74e3KGe2E9JYzYzEAe",
  "key8": "5vC5G2FFdNox7yBTWrkbwUbWxc8mniLYwExHHMFQMf5MrtN19pL28S4z5k27MFLfApBqmydtPRKJctSmRPwa7MrM",
  "key9": "3FmFMiiioDbZbqQPbKnRavfgK65ztERVLMxkWDCqiC7VjZCsappknm2o2fHfwsEw8eW5R2kaa7SmeyH9e9DnLqEC",
  "key10": "4V9RgP26xUEpBH9sGiDjFRbo9SahuGzuWMt652CaceKV1BwWdXQuw3EQ2c1zfugzZY3WDd3AuUQs5b14aTf4owTu",
  "key11": "2xZgEaCmc8irL5fxExYZ6wkEDu2nrc1TjbXkYrnVaaCFzP7cRs8X1oVEKA6HjkeKSWDjDW7ps3ivZ9oQQysw2ftp",
  "key12": "5K5Ze8C46CbobQCtpNYp9hC5XePS1yP85J7nNTy4C7DzwEstw5Km8LYgkqqb3an3EhQUk9xg8vczvfjAK8tFKPnT",
  "key13": "5LJz6S3WYtF54D9wnHi7bAeiHp9FXmLTUKRcR85k9a2q9jaGwojdfRzjtK144nZWiaLVjpwE1TU5wMkPbJG6FCyH",
  "key14": "3tMq4iP2ZG8sUEkCXmik68iuPEGVLDtuosbbEFeGPtp1taQpXCJoebcaGZmyeVSgmeVuX5J4y21mo1dNYobY5JEr",
  "key15": "4ohAnKhzYjcsLBS5dDt76GLJWs3fRx4CUexVJiUhHbrWPotenhQup5WkorqtiEh2vZWdLAyt663tqGafocWLtB3D",
  "key16": "2bazUPAgeA4ZJeA8MK846h2xdwQaauxSmiYft7EjB5apFbEd5eqwhnwKaQ9eUbdDFK7Puwdja8E1r5dyNCPWgF33",
  "key17": "3sAHCskCtSbFhsFD7gUy21ieHfeiCZeG3CWz9RQCPaXsYqqQah71w1e4uPvAPedXa5mBQXQm1531DL32t4gzG875",
  "key18": "hF8qogC5mcr2fR3ix6yDXBUHBUYNPzDG3GLfzbKcmQT9WiAmGGYrWdNJaJpuaYpdFb9fv8ZsVR3nuRmimG9ybtn",
  "key19": "38xqwkCUemu81zMV8GvHwDLoPu2ezFsbaXqPPE8hyqf4BqwUfrueU7hbXzkCy9ntuv65q31YXeKKuKRioGfzWgtF",
  "key20": "57BFfsN5P99qayLwAwrThcp9vKdun4QcXLTaTDgiRJrjfBsDhpqEEqBzq54fJfVs2bKctsJFmWSgotDhrF8TT8CG",
  "key21": "5Hcn5mkEtWVry2GVixeDaFHf16ws6jZ5Ab2qZRn3zCc6WNKUSUYzsgo8FSvV9XuETb8TuU6gE7h545m1KNcS3YdS",
  "key22": "4RVR7JxkTHjf3RtNCfUXubrovSu6NrzcRUABaKmR2PPNRVqrmeivVvEb7HZdireJGvxyNfVUbi5tKGmmPxkY5BUE",
  "key23": "2HsEdWRJqoV8CMz4LhCcc6TE2Pq8XPHBswgHhXsaxCwh9jMtHqpbjgngvfcoTs8dDPmrTWSGNmABkVoVgE7tS3jG",
  "key24": "4y2T1mGD75pyCg6PSPkVDPd6qBndt5C1yjZqdQE2u72ziuP9jhxg8KTMCtgUkApZgwHu1bJYFUBBQDo8oLeCamoo",
  "key25": "5V9Tb2Y5RwFfeSU4rmCnHQ4TTjyH3cegBpZezaxo7CTgsFgcUGzB3DJs5MrKPAWH5LtuB89z6aoWUZsmqQRr86px",
  "key26": "48H8WEz4o6ocMToXa8fiV1fMci5idtqmxDYPzLKBLLT5kFhDktoQhJjEEJJtzayYMNgPR2uFT1SgbFXYziMxbFQo",
  "key27": "5B34eULCckVYJLegMapC8raWiScdgy4NVXVtr3uhCxVbdbgqhBT122cF54bBne3bZoZcSo74YWGNqX255RQe1ow1",
  "key28": "4qCfHD5b5vHaGcx5Uy5mpKoUQ2cx3s9CkbzacVMmxpM14igDanfGewsMhKLqyoFG6D7NkuqYAFjCrDBXYc4DHx5a",
  "key29": "4K5uXXeVFw7RVskDuKubJgYPgPeYcpoSAhTa6KD9tsVES2Vz79ZqEzQ879jmAuGezxJB8Tnps2KzDrZbY6GVswQA",
  "key30": "3b4yJNEivp43sQtYHeyouqsWF28keRJMwQjou4d1VNhXn87Emg9yyzabS4f5S3jxp2pVsjXm4X3kZiQpPD3yBb1Q",
  "key31": "2VSBaXqvVCGpSETrmwEGGjHco9AjozVcKuPngy53bPoFByob1L4hN3ErJaVEoDC8TPqcvN4wwvQByxxNLm8967pp",
  "key32": "3y3qNsUY1N1so5bbEEhinKtnRZS3S3B3UcqwbJo1bcpBmyFKtG6VFoxpQoBzSNcXyCQUhYczJFpcQG3m76rqULz3",
  "key33": "gNN6DwZZoN4rrxPGqR1pwWHp5kpesrJJWGERtueDsCYWbFus7qKaR298whd7Q3T5xz9oyGoKAD9noo4GM4NQDP4",
  "key34": "4rWw723iGscrxdFqd25KL1FASaPaU4t2gmwfAeDs8c25wwejHuDMqbXMqrLChJD3raBG7nMJ1mtV6a3vhm3mmXZ3",
  "key35": "5xdVVmR99znmr6hSAqfWLAKdX1xx95bkQCTYpW163RJSnyPe4ax7KAa8F29JQTvT57jZ8LAqn2TePcFm5Q5bJxqJ"
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
