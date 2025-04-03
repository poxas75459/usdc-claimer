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
    "2nDec6FrC5H9MfqWQhM8yrrHASLQyQUP4vKXpcmTdBPzXPUEFGLLKws7HHmq6BegGyBoVhfP6WkS1WA573p2t4Ly"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J6YRopuHXkY4DJkGYxnEQjRe3ov4QS92T5F977dCXQNsbMEnpPNVCmfczgRPb5eYESdjDCGjjExC8fxXQJctM17",
  "key1": "26d7QJRgrf3he5NYvUsdcLFjsHNN3fZGefpb61BQEshWok4f8BypumwiNRYZpAJxZrPTjeAwjL6y9JVYvxJAXJPE",
  "key2": "5AMxX5sUsAeX1i4vi38o4HqxTrr6opuLZjrNCMNEyobgQr8Fb6vWY26gR1NzuZoYqUwkhbXbG4Qj2rS2m6Trusi5",
  "key3": "4SVpBoTtAKJqEPJsQjauQRApDxmtRZg8EgCkBQUvZ2uxiE7kTgwPUoB3RejiSzidjJBRmkAGQZLYWszexSPjsrXR",
  "key4": "5xwsvyCX8vcGsSKYnNzDhDsXDtDcC9VCSHwmucmFqF1BhrecCaSR7NY73MKEg7DwXAbzWheDA2Fm49s7vnnEUjeA",
  "key5": "4GdVKUPLfEbBAyCeV97ZB6QjRuMULRunUoMoq6tLhMhDiwX2x9NEUi8LXHDdx6q2WPkzaymeV9RTDmA1sUmW7Riz",
  "key6": "3hx8BG9urYY3iUuzoQNoasG12nmCPUXmr2TPQp38jD1apPPpikwGnJrfcv1LXKJNNAGmgJn8tRnaerEQiQer7BgL",
  "key7": "aLFjBM1S6jYCurnFsBBXowg4JfSFiVvZwxnBPCQyyw4ApnSw8wpKsexTHeJ9y3zxwznSs14JXRwvdMEQGCqmxz2",
  "key8": "PcJt2uf6LeFQrMYd7DekRxCZd9deDgchcMTCsjjqsBRAFGrxHnG7prYSMtz59NTzrAkGaPeNphsZaqQv5GNZ3Wm",
  "key9": "yD2Z2bW7Ye3ETsAWLE6JtHF7fQG4GQGxxti5YkL1rAhgu2sMQaPNCVo4fgipH94NELobWXoWkGEny67yGxiBA4a",
  "key10": "47xi6S14GysNNEUL6HRzNFa59oPHzxmmWeZ5ev8CdAVM4J76nUPd32vcjqrfXLBRuC9bkye6h5Jm7tEoXRy2VcSS",
  "key11": "39wAecs42YLNhGDXxaFigERybu2JRgW1DecMYs9SVZBKLoHifdK68XPJz59JpRMTAK85vS1SwVQmCQzmK8ticSyd",
  "key12": "2jFztCyNACTihSy6dDLAzyj2a26uEpZ8eVSkVnxdfyLfLCMYcwnYz3SWU5mEfKVJh1FHxfh5Mv1ko6LTPNWjyN8k",
  "key13": "4sJ2sSmxCHhyFyobr1hN24pGs5v8Hi3ga1PTvVGf8r13k6iMqgYSw8whvF1DxEK6xR83r5jhoWpo5ZXFYXTyS4Y1",
  "key14": "5sjPTSrBZYb9MAKXiQ2KLpbSoSUUQKis67Y4M42J3Pznc2fdEJYxjqqBUoWomeS4oVwRTsT5imgkgcko9735xopA",
  "key15": "3o8CuRScrFr1cvnZXWgQqxDXkQDqF8MhuAuWgs6dsxZBsqi9PRx9jMoCW7oSy1uiPfrVBHQKheoMYRa5feRFjHTG",
  "key16": "5ZqH6wE9FJNzTXnVoayWxGP4Z1hTEZyfcmdKsu4SSqrx6irN1JA3RFp1pNjiLzAEEWYEe13TNUrZ5j2mgfGKZCWr",
  "key17": "3hgzLhHukqwnhLcj1Xz7JqQZ7ZfKUorzFgQ74q1c9v5QsKTXQbo6hbNVLpqdbt5f83QNicq43Qzns4kCq1yWQYZi",
  "key18": "is9xTcYPjkL2ne88ncN5XNJJF8deBjb8VtKCTzAY5nb3Ax1jPh8Yfg5K6V9cGzPWBUBpstYUd5SvxBcnJ4P8yo3",
  "key19": "4o5H3tBV3f56wdYftXbTtf2SATghnku1fuRGya3s2EhAibW5q6aqEJupkCex5gRRmgzsMXGGmcu12ZqUG4gyNX3n",
  "key20": "3G6gAJxdfRBDfXKARgkM7Ptra1sCuC6ZpqjaJ3kMpwq5YVaSZWYapZUomTGD1oD7bqxaVz3DyzGYhTx29SLMpWp5",
  "key21": "48b2vWd2wUBftGhywocHfNJ68vVinKHWxstnoLXwFLuSgvpuQ2nbBE858vAvcYNaVe46KirLeQYRV4qcVnyQC1Ks",
  "key22": "2mQ4Z8nfGNt855T9ZTeYv46qdGTFMi6SjWCPrFctjPph7DtQ63hzRVLXizJrvs8DL41kEJk6YsNvH198eKLuhd9s",
  "key23": "Zwgq5CsaNNTRKFjy6z8J33b1TGDU1S3oNZk6qtuoJGdf6hLjadhwkJpqJSxB58rDtpUZLKvpJUwjSi4LF11eCSJ",
  "key24": "4kxi9YzviqnLnZJeoNaeZQP77NvXf5VY8K5ptnU39a1hHrhpLUS7t96359QsU1omcjmvUW1sdbxYbQpiHYwNY4Es",
  "key25": "2my4NbttKs6w4QdMLfXv5Vkq4KEPWkjJLNgtJqdaVs2H6SryaiMQMGjAuwajAw4iY41m3zeghvaR9qYcZqumpVe4",
  "key26": "3SdAtzVonQ3x6ANaKm3EiJNaYzmKzwE4cc5yyx6wvQ8UoBnT7kUXZZ1pj6R5zY6LHxgDRckypJAUgJNfe4hSVCiN",
  "key27": "2zpmN1nCU2SjF7rChUA9pikYPuvYLK2LHRCukKz1swxjed9HSP2acBvg7UqiHUkLZjZppaU4ziebggmgojUsA9Wt",
  "key28": "5EVn69bsmpbtaz3n87vybDbmEiYgjhJBdxHwvtEGTYQ6W3ns4397zAsMDFP1wCrzN4dgZZNxyRjqGstoG4kpevQR",
  "key29": "2FMrcy6ZxZaoBTxQEmtmMZfjudzu3fEXZFQmpZDfTh64hMruQqDNis19FTXYM8iMrGLsgwHN2VTSXRp118Zmwe6v",
  "key30": "4JgWP2vzydWsRr5LVvFRxuJfG7MUjYaBXSVd23UP64mPokE8qW7YWDZb2BMrfUTzgTJG7m5eQQUxds1ekkBmWGYk",
  "key31": "4921zDYx6obYkzjQrVk3ztD5rDAQDbCxm31xLKnCGzEAAzVgUm75Mqzt6rEu24M8CzTAkMAr6ztJHvFnig5JrfBz",
  "key32": "3AFZsMz6aaoyusTArG7h48LkDNA9S7AeQV4EL4ABRd8nQkTTEHKTx1TW3TEyTp2gbdM2XDBUQhnTcr9Y9TkjeCYi",
  "key33": "5fscVmjmhEzAWRddB1Mw7qFy5CLewNcTmozXUuC3Zrk7y23w9DkaZRG7vXKp7yVnjjEAqdXr3H5H6pu86Vb5SAN6",
  "key34": "26YfC2cRRXLXoTf6Y5AmMR42fs2jA85qtt3JHe1DnM6LKE6fY4xwdFZjtgnkKP6iwNLwj8FfoRgZBjwWCbtWorEN",
  "key35": "veHKJdgEnzDF4Fkk6BnGr5d3PRLLpUn46J5Fy1RbunSpL4vSVKMZLER6j2CeKrAzEsUeNHD1bwBCUZEvqri9b4D",
  "key36": "499oh2ZhLZRGiGPNmFfnrogL8s5Y6xYj2k1pQ3GUpYfQoV9Ji7BaUYFzfKEYFCohJ792nZBZQ6Q69XbUuMYeSkug",
  "key37": "38XPQckAAbhwifioWC2YWgiZZ6PYYoAnWNLGEN3SjqASqUUWefSNs9CF9s23h9wX8rjjpg5E9xmhssXJ2JQwKe4k",
  "key38": "3xdA8JFoZ7CACoLinWc5BJu1CxiQBFYKN64G4hZ8sp9nHzrC7ZbM2Dsr3cekv4P7fFzwV4suDZrihJcYJMdtxN5K",
  "key39": "5aYExtzF1MtHydiWQE9pZyAovxmpzLU5Re7C2SRB8hwraotY7PfhPTr8DW9827ws67pFury91qTCqc9nELvEq8aT",
  "key40": "5XbDgkQe2SbFWLVKHAeuQCTKrmv2pYR9WbHz6XnZAZBVbyMbyx1EaitJZUFxEaZUDT7Y9tHHtie25bCpbUmXowH5",
  "key41": "4FDTfYz1bAMDy1EXW5M7LDtnySswbZnqMPFoNE2Ej72pJtfD4CA9C8qWPtHqn2NNGh7Sq1b7x1hvdoPsYuoiShE",
  "key42": "2b3zu6ZdGUfSYogDm4E4h5fsyrqKb5nYD4xHZETVi6qtN4TtsEe49D2itwmHMv7BGr63uH12xcjMpvMHvHHo5gcn",
  "key43": "32EADz4vu4uqrwxwSrodqMSXZyUvMP42qVkqiuJkCFc7acY5eY3s11xNJd1G5RK5Fx9QjUVYo2dnJe2wcQNF9zje",
  "key44": "4tChSZAcx3bCLBdJc63hAoYs6rLd7aRE7H6p2KZFgSYNuUNP7fkWhutdeRd7ugDFsNhbsCRiZvr8LdJbm8TLZZyu",
  "key45": "62vRKqctgzN97HBsoVUjM3oRDWydPSsnUq8zy3e5JGjUYDnoMDRs5QYUkcx5RKF6s8MLCngRDs5mQJtQ79fG4mgB",
  "key46": "4HBMbh132jn8wV9LTeGHhDsLboQCsKur1tNNgvEnoe1C5ww4G2KdoxgEN4LuzL4FNdUfcyE8VUVyNzPpBTXrirKg",
  "key47": "34UdNtVj5ARTsgpbv14oeKvMmggW9FUKQ5mm69VmQ3SyETCKEznnHtuwYkaAWci2oVhfEibWLDgUAuFxgCib6dQp",
  "key48": "Dj9D6LMz522xHR3mvZL8yKWvb64yTZFUMpWGa1Hh1USvYSRVjrXwPBPtYPFZ3V2B3aizKyCrc9TVn1zXcSDcz5m"
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
