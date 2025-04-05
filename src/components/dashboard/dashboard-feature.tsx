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
    "21DJ4G6QEM2qJi3FpfXpgE7s3UryxuBuafVAGGKza4CBannUNZ8aSCZi3Qc34HmytLkiAtHrDGSfUJRNWkt7kbdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21x4JX7dS3sMobJrJEPkVeXt2zZUNVSMJZsgznhVz6Lw3GdaTEAieSom3FxEZx5FYaucZKMoyuLFhHQ6dTbawkV2",
  "key1": "2JHtQ2WYvNtDxUvN3HGP81cgTG8dqQhBk4hqrPhw8gsxygV8jEwNnH7AU9dnb7m4Pb95gxBx78oshLmAb28c7Wo8",
  "key2": "5cDAqXzTSQPvbm8FooX5oAedCfje1X5uyY1EVh1PTrbVN5DvsCXMnJms2QKnSXbt4C3uC73wix16wEKjgR95WJLL",
  "key3": "221yM6YU98tMiJizusFWR8xsNb5zvhL6yQtVt7fA7QY7UmnzEpeyV7dUMQFUjaXZJa7wkeEymY61sUhVKYYxXVKL",
  "key4": "4GAHXtp1UhsFGdwMwTLaZbaxmLU52N6aBDwfQ5W3aosKSEhBV5qRpk9WDVB59z7ZKqTbhiujzqPqWLEjjV5g4x4y",
  "key5": "5MYpVLvyBfwDPbxaqgzR9wCrh9skUjJFXmF8ELXRXAsQDYRcWgX7wYw5G1go5VTwQXsex1y2mrSUCwvSVQAAczDR",
  "key6": "K1F6jdzPGo9gKAqrSGXJbcmBGKF3pUXz6EsfuzpRNGZyjaqY4DyvotkLxmQebDQqQP1rdPy21JPeCE8xxADxYWq",
  "key7": "AcLwY67TcVDW1egQtXdFba5V2CGrjeAu37TgXDAogRcGdvsiv7kxM5XapNNBWu519DWjL2FJoU7KHoXKNxex2Wi",
  "key8": "2TwazDURMzp7vTRFTQsEn46RCiaWZ5FWf4VfAaVZge5rxmvQupp86AULbCbFmM9KGh2kdXFe81cRcmwYmSawwrRK",
  "key9": "5ZqHPtXEPwDtAvVPTShPzmXDs3A79TECqgkmZ7gRdxp3BfWdKjaHPTJUpsZnJsQ4xPMJGdYSKJtqzpJqHfSYaHGc",
  "key10": "3JzNRdRQGq1w8eAjMCTFHZjX4Dnao82wBC3EoBuhx1F6fH7EyyrNwQFe5NYKwFJqy8QQqQoTFkDsF6JNVzTEf6G3",
  "key11": "3L42dmDWjVQioT5wUyph8p97WLMh2eRMytuG64Fu9ULemvd2WJjfDXwkaQaktMXvr2auKt1Y97Q5xw2fmozCgmd9",
  "key12": "2wz2Ryd8fStZXTKg4YzYsondjBTXwRzxUvLnghcnJkaf9sEPB74yuTdNSG6crfVtDzdnF7KQ6tQX57cRfkSTVcM9",
  "key13": "4SjNSh8QqLdQEvjD4f5x4Pa1xSRxqbs5SiP5waZjGcBtejmERfDfms3qYSz1CBmkm3wbHfamVxexuMyRqkZR1QoX",
  "key14": "4hXeEEkiw3u6NyM37QRnW7qRF2XBDFz7BSK7FJPhBqDjW4T74o6bRavgfwpDXnQB9HHYMnfdQ1Lr5nGvYjndbKYC",
  "key15": "5UF6kNTKb6aWPDU8qDyzaKyNgkdCoBckBQBtC4eYjoExWAYVhhbxNgCH1Sy49vL24EpQon43NdmiBFVcbyLnCoLX",
  "key16": "3XvB6dxCvcXsHYDYJHH4PxDFRWDhCfJvMmPmWE8tpQQG2VUetotyUx7spYnz6sDmFAdAtv1FcwJZkrzwJNJGedTN",
  "key17": "aQzkxhGseDBzriCZDFDjrm1CsTVU1iz18h2pwSUm6Uz2AYceBAqeH73RSA4k23Up9ydVSWKZFsSAz9PEQj5Dujm",
  "key18": "ahSChohhmBp5sm4yTHawLNsQoA2S3PAtMMCVZCkUGWwNagjJBbe1cMQR8dkHfatsPcjX16micQEnkKkDmTuaHQo",
  "key19": "ocgL1iAuiDRWgm7Y1nYwPxR6A92GdKaZjjf8cHpLgCQUD332RyhtiwTubF82VY3LYAi9R86SSgoETVST4GdbXpr",
  "key20": "2DjcyMB4r7sbrWetgjCNfAkGyckEddPDp4ecFNQxbW2hR6qjv8nqQHfUNYR9DcjvN6oEBo4eJykHwnvkRUGcrM1k",
  "key21": "2fKGmBAUMBWSSfXHsWpZQ4xDhsAPNz6ogJoTjN4VTENhxSioxDam2NQB67gRfQvDRmPxmSSY8g2bYwvWrmBrVe2Y",
  "key22": "diuBuqxxTJDWHQUt4PtVgakQE9Yj9eVW17oP3Jg12c88ohYcZuUp77DEiBRZ1T4vXU1iwas52k4PhXSjevYLVaA",
  "key23": "3yGkt1j7jDjse8CyqjpenatbDpnVW3tc6xk8yfryCaEw9u3wf8WFBFvfv3gZd2AoTuzs6BtSUi7Nt9LvoyTtkN3D",
  "key24": "3Vd5kFNW4U4AxBL8FeWPgJKyLTwKe1XEMARohxH53vuERiubykyiDBUjMi2KBv1JzWTU1csyLDThJxnGYWtyVCfy",
  "key25": "3jBk66S8h4RKJAeT9ZEpq5RJpJxLDWA5qkfieZ3Xg6Xg8eGGc5TJDoorphGH5wuV5JN6dqh1Z9J1AxjVRwba3857",
  "key26": "4WamEbDQDyThHtVKipsUaU3mfh2u3uCrQSf9YpsPcESrAjxFNFvFBCuUiQKq78HvqpYayuuukesrwGa2jBJh36Bc",
  "key27": "b4ZidfcyuQJkJGyRFuij3vkETU8qpeKtTLEJbNqaWsWNnrcUStDA7HagJziJzA3Yaxbeb3yweXbUGyf4U7auHfU",
  "key28": "4MyCo7zdHFBrAKCgLUpsWNhfQ3Acf6mm14sYjQ2xAtJtgh3T3v4fDZqjaUMUQ7hjLc7mQyrPvrCTJpzL1ag9r1NV",
  "key29": "7yw7s7z5Z6Hh5hxXJxFgmZs9rzR6d16imdcrd6krFf5kG9J76BFh1SttmzXCN6HMSwKf9ZnVZWcgidbpu17T7y2",
  "key30": "Dps58oVxTMoW8TWGZ8u9GtKyegXmwjZ4eo6Vn1nAs7QPksEmudQT1oBQwaXXhjH8ZgGMKsFekD32TMnq7vPyRL8",
  "key31": "5qDcxuj4MsKyTZSLvZFiwPFBz32DUcx6KyuHEy2YgM54uf6A9WvxDnrnTtd91sguSjdfAga35LqdSBT2xZKLDUcB",
  "key32": "36w6yZ9wwvj3EGAsbhok9uhJJ8A6PdkUvksaReCP3SoxeDhRGLHiJN1FectR3Ts8DCtsq1ecQsbmt2FSCGqKofR3",
  "key33": "5i4pVnCPr57htQQrgo5Sde1dE12Uuo33JFiB1oc9Sbek6RoQxvioVavnrmXRHgvmZM82PxMDRh5mfHoMfEYJQH7V",
  "key34": "4oRK7M5oN4aHR3MNTpeNDbzKG2nhBTFMjVVYoaXwgEaEku8rxdArn7CFphEAcWKJKgwhjQRGoUp72QWFWuTevrqU",
  "key35": "2KeJCbPhDo8iGbneVgP5eTF74TVtgkjzns8zyCfY1FMpTP7Fxu6JbGjcDQFsQ95fmUdVgoXENjXP2Ps5oWyQpMUD",
  "key36": "5iYzKHj4P3RQ7qUUgAKfLWTYq3wMVY528PCugYS7TvUtNEyFxGP437ksrRwidHwR5hLY6aLqitugEqimHQw5ZKmw",
  "key37": "SKnDpDV8dsAovmEd1r81wXXkfiTEnWMXs1T9UUsRVJqPUMUSzR596wM28Po745dWgmD9FqDSz8nKG89err1xPnB",
  "key38": "4DBZD761A6gfmPCbnz86Wto2K6nd6hAGSqGVgqeg1Su8muGS47ztUYFcTLNhg89tHtxyv9kggs7jpWHA6jDFoSm7",
  "key39": "5Pb5uExcya8Gp6UNFenECNyJp2AosfYCWYn75gRubNvR1QM7P8xHocRm2NNgTGoVCnC6SPUfNMdrDnAEMQXPc1ku",
  "key40": "M4hRn5PcxNp1x89K7VU6PYRXN5denMPjmzXww7FTKVFSzgwNyFtea7jdeKVemfvp9mMLQGEVi5N8xG8wDJsemFr",
  "key41": "5MVgThwz5JMr4suYjaDHsWDiYALR56uKH8hp8fpAkMA7N5YQNu5X445Zg2oHZNfKGBsJ4CyoLXYHgoQFWjW8RSjA",
  "key42": "3xLDd5RmBuo1ocWQo1wJmH1Zfu5PpYfCkL2ydRme7Xm6FgPKKteR2xuGEwSZEPVwBUGr6KaWmbJzvEVbWAGVYoqf",
  "key43": "2dVuX7ovUMUesYg4tz9sUu1C8Dut9eTNTt2g4fjsbZFhSZJqQg3AeRThwCVzQ4ELF3NaCtWMnssSohTNdxvAfGQE",
  "key44": "3a9wpjJW4N4NafycMmw8eKWsCa4Q1v2zEJF51i15FkW2Es3NgMFpgf9bk9ZJpXjFr6PBbVMfb8jqhcyUfghaLJvU",
  "key45": "5MzujxMptA1t49VQxYhiceAPY5RuPL9HMmBZzvpB5KkXaEkTun1FSqHeXnHvVLfNsTgBpA8BtkbG7jHh5XB7H11U",
  "key46": "qUKRMwECBmrt38JWcieYLt1k9PrF6h5eLKK18xyryRCZ8dmBU3xYTKKZ7zLFEZ7hCD7BkALb6GVSeU8ucGYKAbZ",
  "key47": "2fzAqQ7z2kgLLrSPSSc2rYWVf1ZXsfiiX8DWW4ntfwBy3xzuNFmHB4g7wer3bdnYZYR7nFso2XZkfiYYqVqxcLtW"
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
