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
    "4J1xzm8WFZuUR4f5RrFjXLBoofzwHTHSBRuSYewXx64LpkAkhSpihJZvJxjCtZqqJtTcNr9gv9WmDFmzcgpH1iFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46B1KhSEZ6BAjbbt2Z4vVnae3FGaHKTqY3qKqUUMYVSxNPUNz7Yo9Z5vHZuLgVxtjT4M4GCFSfdHoGeTF9KYR3Ks",
  "key1": "4i9Sbjr5vt21qKy9Loj24zQ9bgq25e5cTeL1A9NzxzKr81y23V8Kf2cc6diVFhMR6gkXs4yTZqv6QWR3zLXHuDu9",
  "key2": "43uoE7T3Km3iVV4KE9Khz8nRshB1mDFAV6A33ew9zbb97gPhcqz9peSVKQJakRPec4CdckNdH6bU4VBdP5CaP29W",
  "key3": "3zyNR17KmYs6P5qFDbh2A68VPYmC856AgmZSFLps7nca3JtP5UGeAxXxWnZJ66Dvb5syWamAa92bbMwqHNkPZBSu",
  "key4": "2eNAL1jftDgFePRduzFHCijh8dyKa5jMwF2XGUcddKuhNBQByFF4T5ZM2tTWSWv4n6yKQWEgBzgUitWj9CcnG21",
  "key5": "3cjn395TAXcgRFojgVJLaafa41oRjVZYja8yw9zKzrmyXwuf3cBxJTABY9C3JdtE2wYTHMGzGvKkvgPSS8cQ9J2b",
  "key6": "3vwyCqsZtg2Bx9L23HKyF9zLnMbWpt2sWeDgYP7tiN1MWPUdcxpkGmQN2Ljs2ahCS7g1U82LM885UK9sSvyG1NDv",
  "key7": "PgsjbDdB2r9xLg5vAdb7C1TYKBg8KWfTq8Y6VCFwtAgZPsNnjoJmDmtAuM5mLJD7aDfK3z4j4Tj9ZueQv7HSX2A",
  "key8": "2H5DVLCQjqz4S8AdVw1oN2HZFaNVdZH4ruck36BYuGmg5r35RxWzzTZHYX2tcazRnbhEHquCFmP7fk4Gwnp9g9TZ",
  "key9": "4PewtUNEfgsQKJ9FuoArcj29sY1nnVx5xp2YhewvQwNJTDxLc4iZeuHxHGQgBMBPNaP4Gzg6DY719fiSnTMt82oB",
  "key10": "525xCH2XXAfP7eigiUbVqz2fTfEvtLkAUXRnr9AjcKZiNgpdPR1sDgp4gwfVgwr6qDoTNRgAQ69oQGNNcWKuvKbi",
  "key11": "3xRLaVQ4KciNsxphorP3MCmDGmZYBiU6ZRAiLq6Ye5PozkrjR72hDiAi69UK8oUzjCmPYw8UWBXAiJ8TJzW8Ffv6",
  "key12": "2enRuoYRRmstW3sSkZsodWPWkeVUZ4yoZcgA1W35WYmY62owQSjBYJGY6SWR1SMrHiz3qHVwcTunHxYQ36TwRhBi",
  "key13": "2usdRBbCJip2yHH2SS2qsk1yj8yxxKtradakDeXyU1nn2k6A7jBYZqTEJQy4AoYvV5GLs6K4Z9Mw9nXunNkzEre7",
  "key14": "3LL8rXUhrcK5iGAnsAfjoLCrP93BQQQqFCEhwpLWKmLF8fKf7SVmE7xvqLMesNpvHXG8GcHZfKefKFfYRQ3JB2Ve",
  "key15": "hWDXrBvPqXHJuKdAA4HLSrLDJhkyfbQeyqwncJRgui2zBxhLJkxbEYMauxSAS74dmmcqgbjwV7LXBEn7soGGQST",
  "key16": "5jdWW3m7NGHSCiY5e6dapxe3si6SqjHQ6KVR1LoRt8cCqCL1NouuWAL6UDtECNge79rcor297Q9Wj4ALozixzV73",
  "key17": "5pkfhB4f4idUj61Mf2do6XuZfvnzCGKZGr3DjXKu8jBtnbMjPchLxKMTa76jF4SE1p2FGKH4uPEHJzFF4zgpXiQF",
  "key18": "5M7HJ6D8hHWRHkmXDGivQy82aT73w5b7W1PjgUxDcLXPCKAGz3G2pBvvX5cfxsfCMqCQ3fNstzH2eJnvXcYpjGoi",
  "key19": "2FkvojwkwXdEN4QnSTVPxAitM5PDAu2FccdrdHtRuGw9uyvrJfYAK3sHVngNQcpheWqGW1PrtKcZjGA1ogZM7G7w",
  "key20": "3DcvwChxhg8mswBDvGgttatTxWR78qmwxhphUzUW56nbbWSM31XsEuxTxzfZueqUjbBj3Z9c74H2KM5zDnu1Atg3",
  "key21": "3eZH1K2Do2wdf8qsEsgYMdM5eKhDAeGrKUpnYsqnkA4M9KmyqyeFr8B327bJZrnUKLLGf32VVxjCGKwz8JFqVbsq",
  "key22": "JPykoWnxF3bG3aNLppqkCws8S2edgnTFFZqvjjLnmzbSahP992S6Zr4Bx4ViESBFmJ26TCU4wE3TxPwaV8JtCgG",
  "key23": "23v27SZcfdbe7yhV7fg6NDoTycV6CzEPecMib3wwZcJqULo79fqW1hStL9swjthqVe8uzsLmbBS6jVfR2xmpx2By",
  "key24": "4CVYp2KxaiPTN8XYPapXeyBe3TxumuEjUiQQ5U9w6K1998GnTtu6EDpb91vrvbrLxVRGmmVKoSDze3SKABAgvNR8",
  "key25": "3BGCyFwtLo8AyJf7oBwt6k7u4DBHEhHAAaU2E5b5cVRWsti6RX4ct6wSBiFQxK9vgtfirzPQRAf48Jj5sJZarBh3",
  "key26": "64g3Qq72LeZkD6ft2a2KstNU6bHre5451o1jcXiGqJbpnbi56eutx4cVehsoVcB2n5vV1qbLjnuLegjXUKWPHQDo",
  "key27": "4cxXbxWqq2AQNLgojAVvPu54X3JzUSJek4wBeN2fbXG9UFpCmyEksFuobJgig12ug8vWhAQnDweXrL8QKvytnXJy",
  "key28": "5QrFAJjS2hn2mdjX3GpDB9SzTW25MGk4E6gKWpv889RfcrHgtpo79VMhyT2HoM1UERAmGA6RteZd5kc4zSN4fb2P",
  "key29": "3etYvPC74Y9fiTvH6eyJJHPN3iky8TkPApjjjRwyMn6MNksoHmadtwVvGSrzthrcFCTtTLFME2cfGxk9MPdyKJLT",
  "key30": "4Y1L2wgaP1VsTPuePGdYsBCx6CnSEHbiyZ1EQorDFXBe6Qqhzwokoq3tvVc5GTCdeN1ntNDMsELh1rZYvv8Moqj",
  "key31": "4t2CzjwiU7HrvL6PXZU7wtL4yoJLNW4Vug3yVP3dxrrRYRVr9rQ18N5VCB9RbYe1Da5t5gPPbMPdvKaoG7huFwr8",
  "key32": "cpNd3Gk85m8i1NRDDrvdmJUCxvfwWHFaTg2mhSdspiHvzvArmFRyEkqcpaeTYeV1nUei1RoY6supA3C8FgEtj6n",
  "key33": "4QY6ZAVqWEfxnkvkbm9AB8kpFH89z5wrznr2KHNM9PkKNsFe4N2XnZU3nF5bvmzpNzNcSEDTe5VCU7p12oQNinXi",
  "key34": "4Wqb9BsWgEmGgh9KNxpN6Ww1zFG78kNZ9FBjmcu39WctyFCeV9NFbcZBvd5D23tFKCTVC9sGVxqs3zsrmQCWyuPW",
  "key35": "4prP4G8bwjG581EfQBPgwa5DuLiyZE55EFYiH9rsuzDzSLPRd7xr9gftK9k4zdgg6oEe4GdPPx6ARoUJ5Gu7ePWJ",
  "key36": "3Ze5mgfG7nFLvCENTzWZpsSafR4daBZHqkGpG1tPfu9uRYLH2ABs1wUPsUbjcRoUVyraKmbR7j8BbnZA8QnZAMXi",
  "key37": "3i4KFWTtiSkYAM3Z7nVZzw7W15Jx4GzPTi59KCqNanVuUMcBVmtQrs5CdPHgmB4Tf4ZEW2Q1Hww3cfXdErZJtLVf",
  "key38": "5F6V2TutbouoggywRj8PWskmRpGDZrALjH76RJGA2eyutd9wDCZRY37AZMNQ285z4sxAdLudsQE6yr63f87pyzBe",
  "key39": "VWQJxSPPuyhxxcFZDGb6yAiWGPQZS8Wo2v22SRmBsVcYR9qPpGyANsbbsDgVLUaGa2Q57HL7esifjm6xVKGbttX",
  "key40": "tw67TbWqrL8ZREgFjGQ8c8Aj68d5cnmN9y68V9KxSWy6Msu8DqpVKQ6vGSWmLPwGsn7m5NS4uL3gep13Tmy4JdW"
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
