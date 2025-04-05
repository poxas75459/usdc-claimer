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
    "6581AXvmsEmULK4pq351siR9mqGZtsUUFkiPJ9DBDEjePvurqNcdurHrREEv3srh2Y7FaF1TGzFCrVvjq6oBsDX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ggmFuJreceRFnCATYeWFCoTj3UyapwqeRYJXfpkKRgqkoG62pLfZhEQbcJvzoNopCCwcyxtyQztrj2MSZ6MXUxH",
  "key1": "5G1gQAsCvhLQL1JrhvFDb11v8714Gi6aVY3G8PtdG89wveqGLuy8ZBiMcSZuV2GUUqe7WJXEVpcjVZnBsKAiVqDF",
  "key2": "2ZeQ6vJUct3HRZtC2vhoSUW3ufVGd9dnTW969khQtFchQYm95e3VpFWy7RQK2DzuWUeY64TAKvEmk3KhbAmikZGT",
  "key3": "31iVhBBfArMjjqnXBTqqN2qixycMTCB4gxAJj2Z9w1y76vDc9fcqviMPVK2RQ8LN4c4Zg6RZ4AS2tBeLADEJTexW",
  "key4": "5DoSaSsw8ejP7Fa95zATRe9x7qGuwNnuqDNaapjZeKk69ifiaVPYoJvW9YyTH9DtDBihyoZCgz9fFMEr7uRZrKZz",
  "key5": "gxW6DSPMGrX3rGh14p2wtTpVc3S5omLb1dPmp5uECC2BJ7Z5QSBcVdMtouUJPteWsqgPxKfG6PeNv1yrVUhUQmS",
  "key6": "4Ag7LT6ngZ5kNnDjNJtTktmFkRPbn62BrammFugv9bSNi7aFiUErAhR5KQ1EhMaBVP9xiyMbT26PrV7sAaCdk3n4",
  "key7": "5ZgpVtsW51mXjXDnyc7MasFZuzeTwjQWSuu21PGFKjgyhdvSLogLTToagMW71nNTq1rzGdhcdnWYZjmxQkDr21TJ",
  "key8": "2rEN6ubkKsEUF9sWpoqX3pbrPfSJ2PSAsHQzaEh7CF1uxwvXNpoRzGuyKVUkvrhjUixri8AnQBrS7zRRkNjDnEPh",
  "key9": "59dcbE9Sdr29gBREZ61R6qU4vRDQSTEgvhScZ32u8SP5yNL4A9AUaLXZF75bvjtr7uiR6s62aSFWCbJyAqRp9YQ1",
  "key10": "4MYPj9ghWoac1wrQAzNEKxUHf75QLVaCyqhPH9oW1rWoLbjbJ6aM8QrNVzhspY7kf794U7bmo37Mqyi29EdRJotq",
  "key11": "41BCfV5BuvawE8pVxqWxFJ3YjkB7d7n7YtRqQ9rh1maz6AiBPLpU2SmXJCk5dGPGM7BgbZ89Z547zSRAdUTtGrSg",
  "key12": "4EnBwtE19wdvTd4CuXB4YgfeiqpnspcLato5PN3GeKXfjXJPKkiUiHiZhV8zHREkBr962VDGV8oKFmFWUiuywA6G",
  "key13": "yCRAvxsLbPkf7UAngUr3khSLBzExNXfcRb1uRhiGo5yWu6v9hbjUCFbcf89bzsaReh5NCz7bYG6nw7hun6mVq3m",
  "key14": "55mbcykTEkXPRiFudVzqtYyp7XXKvR66NnesENgpVuPRuCfFDDEC5JCevFPBcSs2wr7wu9a6gAewoCc8Aqknucbq",
  "key15": "65M8RVMJGs2RDdXpAfiinN9ZB3b8aCis7S7kpbBhUnLxj1yVaGQ36KpVDDHZTx35RJoyUxvAW4sTM62wmLjHArhg",
  "key16": "4NBVhMs37vV5DwgQUcyNyNntLWRjg4QzbvQi3RsH28bJfrxWeyUW35XMphHqJ1sPczjvDTF9ZSvEezAdkqHdHWFH",
  "key17": "91pTpjSi7zMMJyqdAQTtDQ2nLgZixL5ijKNiG2U81ghrSXoahT475GZw1Cq5ugKXP4UarutnUAQzmyZkALYvBa7",
  "key18": "PpmBbgU1Ly6LAAv4ze1kyGsSSsbfnkCRdnmpqr859p2cBspBXRQ2Pgu1QHJ58UToVVVGL56npvjG9WSQ5b3aQSY",
  "key19": "5Z8qtLdNEoiCxaaiP2syvaopE5fk7GAZvLRbF8T7iLeK9qMUzDsCghqEp9sbLhTvYSYrjcV6N2ysXArbrFAfWYv5",
  "key20": "3q7YPnJrdiYhCYAjic37LD3G4RJek7xTJvK9r2NLNRuAZWa7RduCsfa2rHjZeienbu2mHvpX2tJgXiWhEGyUmLDe",
  "key21": "2NdsC43QrxGVy2N7pNqoQb3RgsSRXaN8XvQANfHhSx6rULipVSVJENYoykSEPAPoREL6NwojnJstMH9f57fJFr1A",
  "key22": "43AcbUJwSZthEL6w8NSHbt476CHWYrJnXncNVNPxPxEs6dxvmNT25RvUrVNw4wnTHSQKyPkLp9eCDk9AG8JURnEm",
  "key23": "5bhrYthWsfJoty4KG98YeFkr2HYLa4RcWkc16KtT5RqvbuiVEQNhK3RqSCE1FqQYhpFTecAhN6YqRVifJEwavNw1",
  "key24": "2vFn2PnquwBefnQrYvavoKnj6EfiLp1YqFpgYD8Gci4DvBLN35oKNuebYiXtErgiTeF8VyvRiskx1h6T5fth5GSA",
  "key25": "2YvkGeS6P5w5cgALCmLQLaonK7k2PS2MckMkqtD8A9hPSbpbks4kSpeMxj86YcgS5j6BEFsNbtrCPNZxBoo3NQ9D",
  "key26": "51qEtr2KCXaViQ3FTy5ybwKpwT2jgJAhjrw1GrXbyPVEz8LskRuHshFSXLuuSeksXptNwvPpnvaedmt4vE9essq1",
  "key27": "27nGpNWBMFFe2DTBLapLP7yqrsfZEHQKdhWm6GzzJbBZk58AyzGP4bW4fUD8itBty8jVXjouSPEuVc97Y5LjdHK6",
  "key28": "5r9sai7SCC9W1Jv64bfLi59K57yJXdAgFtT9VM5Sy1yn1L9sWivXQgUFdWVaZcECGXr4n7CVNj1NCpC196XErJTn",
  "key29": "5H81UsM5nuqaGhsBijfNPHyRjjz3V7KStBRaAvnjLvoaXrNjwzA31ud9LP8mbnrXz7VhPMRr2p3HS4HciJM69UJK",
  "key30": "but6So1z9bvAhPv2bJxfhU4NpdXiPogQNaJWacBAwJrYvB5Eca9VdaEJefdYwgKYkWySsBPR4T1XBEFB2GtrSjY",
  "key31": "57EHx3zB4w4B4kmShC5W1f4QQmbry4DFYYKoFyFKMGfYk5a96YRuXLmAF7A2CdEbc5pAQXZVaLDgMKgtV3qY6va3",
  "key32": "4dDWe8shUYchUe6iQo9DwR1ggxmwwLGf4HGW1BwwRd2PEMskswSCZmyX5dcws6YRWf4pRz79Zq9wcR1aukaKvb4U",
  "key33": "5znmSJ3k4oTNrexQ8Fh13uupXnadTqvE1SmQHobQdga1bcsHyi3M6AN4uYJ1f2WRWkqVB7nJNtUq1SB8SG1BLKjA",
  "key34": "5uhDgTmQo49ycB3ehX6mdgDCCev9jpLHoAQgCPsvJEKXMTwtTZxtF8NhRL2GP9iBN1pRzjr5ayTgvzy4rpspDSjj",
  "key35": "2iVdhdi1ox9MkLersAdQXQSARuiuBA3Qpp9vYxX8TVW9tGFqn5SsB446Tp9xChjwa5kA4zV8kuWait4nShs3E3Sa",
  "key36": "4zgsyJiWkduU2F97APBcmT7QBn1SnMNShRretNKQFfyDBnZSjEG2rUhLbuapRCjDwH3et9E6FDavNtS3PsWo1D2D",
  "key37": "27pywV2DHqYAK38K9qSprY9qCFCFm5VLFJSoJDrSVSoRRgy6sFnyb3XHcbt2VdiBPwTxKBBAHghMW4ZZEZedmHan",
  "key38": "Qxett2xSXnbSiHrNq2ur3YRioYDV6RwGY8LXJN28XMyVyGABcwuALwERPex5ZhhAzVSM15wvbeuZfSuL1rVpQQB",
  "key39": "2soYNfxbL7f2nDnhFkGdZ5kqB3KrTKXY2mzeEQadp3Dw9htTWJ8LLXWkWCmrgWw3eHaJ8WK4XXykeF8Y6fCSD7dt",
  "key40": "2F4TfX5KHZsEtkyDxXJj49F2snrFx6ah53tXEgQYyeFrBWhWD1nFesACQA3DUqjcsrzxSdSDUFaPsqbBtZG45XJ1",
  "key41": "4WUf3iRM74z6De2URr97DbS9KcGMbtkf1DiNSwwJ1vRbRCuRXjwTA5upqjKdw3bBKMmFyU9uZV3rpvzikEhqwWoD",
  "key42": "QakiGQHMzZaSkk32HMZi4yoCpXHKdE65XsFudQRCRRE97N2LG1DxWep78FgejcrNWzqyMyViTSqENfXBvHgNVNm"
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
