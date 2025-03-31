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
    "JPY5zeCYbBBW1JMEux5DcBDjwyngJzxDVet2f8nQEHiMNmPZT1neYGyZ6j62bApJTkMUR65LXqj3uSSeyzR2p8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yoRaPfx4WhEraHD51Yeooe3nyWR5HoUduYexpqGm5gzB33ZS5MSgkDn5sv5RazyY2J1sV99vRMQWtkoJ1ZkLvTW",
  "key1": "5QZ6gsCDEy3Fb3SMK38ast4si4211hnchthvmsYn4JwL4coB67ESZxNhGKD1as88vJu4XyUfQcsKGEUPM6jdeBBP",
  "key2": "5sgfwKWe6XVXwFBUHLT5RoFumjrgz2WG24dfPuTuQ5J7qqwYbPn9p6sDTbmriTAUiJpHYyryhv9B95mLJTw3E5oM",
  "key3": "3zyHD4cvYYQZ3e34qXmtxLVrfqnfLFCPSTUfwEQ5JDJiYmmPAceTdwhyMY3tLVqBTxqsqvDhT5AxcuH3jvNXcpFa",
  "key4": "3MRTqWs9v8JwNvMtYLkv4QPw6VTsziGeo1GMYrCc9TRcK6XpFZYuyK2pEkiPpQiDaHR1VUAgXRq7BfXcyVyD1HPk",
  "key5": "3MRcAoD3EWWmqUVjFyj4FuuFMS8CrDbMLbiZoNCo2QBquAk6xcKCjkos7VL9jvtsvUemJhaWG6tM9HNfde8SSjp",
  "key6": "4gos9y9FZ84FzBVE3jrmQvTD6DY1TjaibAXRJCA3H2ZpYmdzjbAUMJesyFpnjnmD5xvfX48XqxgfgqbmvQbUuuPf",
  "key7": "3WSK3J9xGnNMycTqZcTFswKSxnAR3m6hMeuQFmSpnh21aTY5sJ68acuS8BL6jXMVjEcLN5P7bE9PohRZokVf2Gvm",
  "key8": "2paR3ERPnATcxLXMRH4rkwmjABh2jCbXx4cEhkURWzKwTa2Dsb7LjczrF7n9my7auuiYP1tHpdrcNNbwJcXXbKQk",
  "key9": "5uABdgCS1pd4KFJmQtCy2LSzCvRWKnLGwN6dnmBMHVe6rk4GjFxxa37QEjrETsqJu9EVwc2UcmUjWLGYBvz5L2Eb",
  "key10": "44SMDv4GKCmGGNp4JzhtFJRChzxhYz9b7cYQnVgAK6TLT2LhmW2LiRt5yJRrPG25eVuxPxx7NHZ4ziQANNpsRuC4",
  "key11": "28958kapXNCZ2AVRG4hAnDHGLUWFAf2iAGEn8mNBFtCLYjTY7aRdKvRAE1zCfdbFEDYBfq5rtdXBxYnAXZvA5J9s",
  "key12": "5M5etdqchXjmEsv9Kx673KZviNz3wsYczCXR3Wiu4u578DtRrfk6Rp8HM8WW1r4MnDNFG5HxamBDxbNNgMQR3fCh",
  "key13": "3H3DxT5YeRVT4b5cznSEsnkQgDMKgJfwTJ3s8SP7N7bABwvCdvpD3bZF1hxa1pJDPQTq2f8sffMj1wb3fy2R6SGx",
  "key14": "2iJ72WuyjZ7S3RFiF7z3VuwfX3NArQhyireWFCQgS9A32hbLygfmzVP1BzHJYsep2JSWRCuurCkdYrAZX3DowJ9Q",
  "key15": "2Pu9dGFdsoKkNhpx3hE1uDFE8dEUtiNcAtokMtXPwzHhjLe19SML9YLPaKaSYyo1f4MPvHkwv1iHb61yPsKCjYv2",
  "key16": "5PFQ3Bdp2PC9irJTPrrXdVnkNdygTF6NYvjULtD44PUyHzhygJocRpvcDfvxJTiT1LjLCxZ4mb5ZaktkNHNxpC2G",
  "key17": "3kNsjvkMgQ7i953LC4jiTM2QRPVxFdgBZxWkDBky6Uxdq6PaZ3A4j33u4ukpx9f3SofgeAQ1uyMu68GjCXNF7aVt",
  "key18": "2yJjYsc3Qik5QP4X68FnSkwcCVsxJNubADGLf13AMmNnMsoKBQNKUJMPuLzhWGDFrPnvvYFx6wdjwoM1d3oQa7Hf",
  "key19": "2ymRqpuurZGxdjkeEynPh3qLg6WziAcT1XRiEtgqaszxivtoht24KijEkvX9EdhSU5jro7VqejzKJyRjAU4GgKbn",
  "key20": "5BQK5gnpPaUyfcGjq7c3Kzz1eEoQg7jyiBfxfCk8bgdo3PFVqg3ocy9iQ5fCkbfEEz48U2uX7pgmHgpCSscMjkrj",
  "key21": "2p9GYP4ygidvUrzuEKqETtHjGtNE3LrGnj6UnPbbGT87oHZcNX44aRRm4AKePszSjZ9i2pQEigpHF2kxYvcBh1NW",
  "key22": "3BJbFH4CqsKcQwvU1xbEvqCD5qucb7JZD3EbTP1c82E8DBRtV6EBetpfktY6xyW1EaB9XSPv4VmdfFFf84CVnUHB",
  "key23": "3ZRUXvKv82oYv22voi3dGWoogf93CVZ4qcfKwEXY5BcDaz9XnZ5CTZxHvDZCEHXKFEvgpPATXvWCMkptcAvMARE6",
  "key24": "3UhbeEgQEjTNn8ApXiYm2VMf5zaTbaLynm34eTqLUxJEtLh4FqrjxKG71rUvRUmASA7z5azLYrqBMU7pUnMVdySF",
  "key25": "4Ls5cC1qHJB389WG4EmQCNUU8SLyXaxok8Ds7hzS6iPTwDib1CB665tMf7bN5AuuMGsi6tgLAjQpQPK4ggz7gTDi",
  "key26": "4nidyQfMxKKTXUfCgPNgFGtCXktndSNNWMkP8U9LAJBDJiW9i36UXzvHf48e9UXbc8r4Q4PB8fByeeXnu7KxyZWz",
  "key27": "8iVF8z7RBZ33VJM3aCV5r7GCYHvTmuMWTsshtoswroJcycs3gEAjDVvQnJQeR7gg1jo6b7dvRAxrfFY1HKYzXSM",
  "key28": "ghMvSbueoruTaQpLQJJM92qNYmuEQi26VhhfhDjxBaVuR4HSXM31u67fkZxMD4bgYYxU7jNhhRunExqBaFcGH7d",
  "key29": "2n2zaDuv6RSpFerKyGhrRZz9TfBFMVUC5eWtgKfHz2SEsSV2gxyBetQzqhvc5zVGMCzVDpzPYpphGLKU4sNLByvo",
  "key30": "27GgCzgPeu5FjLEceHgxWZaraPLMWLNjbRyzyYJaUC6m1Vvia3YfzRVwRKegwupShtZXrYYHGtf6y6KhmeSJDp8F",
  "key31": "4984mNxDvWfe22R7GhEMq5F93CuP8CGhzSa5MatDqrbb3Lx4LWLSHj8tz8o21w42gA6eYf5tJPrSggqUuTLzybps",
  "key32": "5uB2ViuWX7vcCsG6cFypuixpgkKeJwma9xNa4ZaKwfD3VKodH25rUtdBuZLGqyQ3rFUDFfMnoT9J7XxodCFprjgS",
  "key33": "5sHKvCDg7BpcKNmxfn9doBkDPi5SHk9QYxjed1WG1dt4YSiTJ5DGksX3inge1aPuqQoNAhPqppYLRLWcSpkopdXq",
  "key34": "23wSUBksB3Jh1ho9BjgwS8xRuVhZhoNafYJb2J8FWWCads5TVudpAdQGBsbbEK6TChZRuAPbUE18dVpDKUnAkXFH",
  "key35": "GNxhqmBfd9FcybjH4bJjoRqcMGQdp6dPAw9jpiFdgbk8pcANT1KWU4vyKp3wEyAyVucsoVyztiqC4PibxV8Rs1s",
  "key36": "2uzYj8AX1ugzabp3BWnD3fEKgeEKhZ2ckcvwHVkjEZKbdP8r6JpDtPZXMK8GPMMHLGDYCS8URuGbffWXygpcN5QN",
  "key37": "ZchpZCbQLi1tRKYMfk83p93xfJpMXAiN2HZLWff3dSwUYh6HYUHRUNjhRng5Bmw7dyQ167YDTjWxBtSGEJmNgSn",
  "key38": "5NAFxs6E7LeBnhq3gkh9qonM6Lw9dNyAbgLJ5rK9NSkvmMApouygjzQMEB19CTapfAopoqhLt6oK9a645FNJcCQm",
  "key39": "2yjckyka8MjTVpeaeuhvfrQdiPf89wRTuHbnsWd898qHe3t2AMwM3UMiutu9hBEFJx7kbuNx6S2WRtC34XnMCjs9",
  "key40": "2TaXpfbr3XzfL8tEii8uyX6CDaot8LrEEb2h9XYnfubEm4RcujZj9RDQ5Uur7YinqSz2j2H5824W4J1biyVrw5Sb"
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
