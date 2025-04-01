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
    "35Bi8Sk6JGgBebdt2PT5bN3GaYLFJivdCVu2N6epAcZjzB4jKmR9fjtWiQnHqdbyPPCnb182E4B1t7oa6K4s4WQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hmSne6tfhBg9JV8SucUzygRNMqQaHiHmdxEQrh3Dw8mZr7vqe3RmYPenVY2VV3e3b1HwvqHsKyBryF7jgLaraT5",
  "key1": "4r4sBxWzJfm5hRRB4huKqhTddV8ycG26qTdSv5h24Cb1w8HRE45xzXd32yQ651XjPMfeCh6hq1c8aHFCTQWJHj2f",
  "key2": "4czYg5PuTg8mpXCk2Cz3LjSopZ1hLzcvinDFZqrEHLTxGMjaxoPZjUT6ZTcdWmKS82WmXbase8ojvUU744NHNgNu",
  "key3": "4h4YyE8ReVZa2XYADLLakDfUJVKWUQ8WMuFbY6W9temSdZ1xNuyebLpZfQGCBcrXNRULJuFcGjTctyzpqL9GbpLm",
  "key4": "5DMb6UWVN3YKAuQhLz15QGynfxFUiTwRL7GY66EzedhJDy7GarAYyPKzJSE82p8dLLCABMd9Kcah3qUAuUmkh7ui",
  "key5": "3woh4xHmDCRXiSBsGqQ3RZ5iHS3RnSWxic8wKSyY34C4iuwek2KpzUVVfCKH67f8Pu7x2RTdRYixPAvLXW4AKZnW",
  "key6": "24VU3zQ5KLenSzcaBwN1yTV9PAnTuLGbEPuhT68Dos83adh2hUcaijdC3h4p4z8xGKWFqeHMaoDGQbQunPc5jLW5",
  "key7": "oHKDT3gb9zXN5ckEqJyygw1UAgsBVneDQRGK8GSZaCehM1Mxv3RAuFPWX47FzmcAx1WYaMVCyHioxA9PxxHuCyW",
  "key8": "5xmmwNEc5Yx2sdnigTN3VAfoanLK1YDLb83iB8TFrsDqR41YoU2Wr6kXpRXeQN3W5hgr9duguUDpH4xVsBewida9",
  "key9": "3C4zpKXCKLGHqSvLtRbYLiBi4YAavxTt376zD6DexPfG5YJ3JLoyKCw97qVmGMYtg64wVUgxdLbxoa88g1hJvCRR",
  "key10": "5Gey7sfuWEAYivskFXLZ57zeWax8GerS7Mv9hyJyrqv9LNvvq6tS82MwEXLU5Ke7zEkY88E6dhUqWn2Wgs3UxJFK",
  "key11": "3wck5UgP4m1uX49A4rFZxzmCHESZMpKMPZLWUbd5zu4zWS98mMLyvj8n1YnMF6vXNPKMDzhhLKu4VmTWn7hFm6Hw",
  "key12": "55iWMkEdfrfdoMB7u3cpZjrfzvnKbzyc9PAX43XpTWTACSUctos1m5qnyhsvp4ArYSYPdVXNQPPFo1dnSr2dR8nX",
  "key13": "3eTb2geKf2cwgLav1s2gFQDjSqQv1BmGC6BjbZfqrhy1vsuMoNTpPCdGYAJidquG61x5P9ViuAxGLU2Q7tYsuLdT",
  "key14": "5dpB1S1ycsT66VrNN3WUkuJrZtKWCJehJ9KGSg1wmUnsoMYLLwMfoRmXLSNAjrxid82WRh4QgTakuWekrpVQGriu",
  "key15": "41Z4uyLmZoZgXaj4p8RFyxB3BPtKMMTehcB8nAPrJj49gMKiVTAM2HkZThsEbazKmYbHiqExpMMXRoLtQrv9XDcp",
  "key16": "ctRZDUa9B5YdxYvp92Go1kLfgrqLhPi9Nr6WU68jpD2iE8DmGWkKpbD9kpaz5Jse8fr9vxVr8HoGVEBSGr6v16f",
  "key17": "4qyi6mNt4MKNjRbrH9aWTzkQEsyatwcJEin8xKjsGJacK2TKaaq25kvjyFFnbyLT9uswKVMKQAjXomGKmY33SGKo",
  "key18": "5RPsiPe1LMQZTATdhZTwUdNgF3DR7Ff6Xsiaq5E18fCBz8qPJzuoHzwPSog9joJjv146CRisSfzG1GKe9iPAsUwu",
  "key19": "5piaUn4ijyBS5bHSFNYkAxeLgSugttsxKiSXP1RoqMR6hEswuuUNBVPYAf9SwLadB5mfYMwvrER355wLemQ95VFW",
  "key20": "4KLcBfGsaxL7XRfMiWm3DS7rfEMA4KxHjHJ6TRrGiNQx4VbvEUGVB2qaU3G2QHK7jzJU7hoYL7QzmXuVfQZPfcFJ",
  "key21": "2NxFo2uoE9LB8wJHTSNifg5sTUcaTni2JeV9cz3iKLiErZSt9FkET8WuVsfzWi8PNB98qP42FSRFNPDqtmaewnZR",
  "key22": "3PWdGmAmuhD7bd6nEme1hwzNXEwEJa11dB1dYfSXH9HaTQ6QeMFgEwY4PTLh8o16T7GmfZqz6aay1G2qpxs61x1K",
  "key23": "5KgUgFPH6vmB47gjNJqxH3RjBwreP36w6wT811T4dj1dfhUVDnXr5Etmy8cKXatoq4EDJ2qALoyEtcc2J97jz92c",
  "key24": "34ajjmAiShdc3w4dASDZBr45Fs7oLwPaTorWZGYm89C7oVMz8X45aQ2B7juA9eb9pTzuNmeTDRdXeF8JXViCRMVw",
  "key25": "4yfJwbKGsVh4kk71hutebVCPSh7sxFc3Hipf5toVEBV97Kr7sAPZQdvRMhSCrs1vL9QRhfcVu4zWEwogdtnbhbPN",
  "key26": "4PE53jY6gWb2dRXKDpxgaorRVt1AJ9kHf4KtYPCJh8WArbzJUb6CZ8twKtQyCR8Gciyc6X2xkMFWNN7YsF5JJP74",
  "key27": "2pb4H5SMNhMTVmSz6JZLVXtPN3YNfbhM6taZLdTPxurWzXoe39HpeQyw1pi7VCSWtE6twpok1QDLcFngTBfyAJuY",
  "key28": "2JpVr8K2CSbX9ZLPU512vvFF21XunprWbh6HcxYk6dP6yyx4znXKm2MnA2jgugtzoiPRTVHTaYyMwWsT7mvu7Y79",
  "key29": "aU6Lh8ZtUjgKcMnrFR1bY7cvJzv4eXZJBeNMDK6ef25TJE3iVuLzCpxyzX3ccJyfnoWS37HJJfaJ3ysmGkBhYPx",
  "key30": "5rWbivFqpBeoKFmeuuNWSc8jbU6GSBR66JHQM3yWKpgQkAgnu23HrVmz2ACV159BTo3BTqPaNdAwLXMMWzrnD14i",
  "key31": "4KDZDzmB6VAJrGXNifDJDaEv46paDXwBN8Xhtohn7yR6fMbxvV3gKzkSjiYfTAwYYJZRJng3hz3fTSyM7qSxNrnr",
  "key32": "2K2bd4ffXybm2T85WGcNeHmjG8gPB2uparCfauYbVX1m9Nqwoir5quHtQ1Aa3nf8qfqbMbEBA3AW5DVfNLQ2mSAD",
  "key33": "3yAxzWajJHXWEPoGmGzJoyrHR1emN6BMcYaFQ5ZRwrq5SPWhmbLGMemanC6GCEVLtjcfSDmLnZV5gNJm32FWseHN",
  "key34": "71321VpRWGPMWsYAvYtUjUFGuQYKLxG1QtqcUQoGfWDxUEVBU1gLRuZN4kiWCUuU39qnYzQ4unoSd3nSdJ9S7Yb",
  "key35": "5S3RfNxvoxugJfhYEx2zWdEYxZaFsYYmQB2t4stB3EXxcYf2UgzQRYdUu11ospaNUmoyrvyY5RmzXUofjndShWdA",
  "key36": "2rpQisr2e2AvkFRVJdXvJHzAgpu3MkiEMn4RV1yZPhnvsLHAo7nDB3kkKDYfNgSvohUDajcDqcLwdofotzm8MiXY",
  "key37": "fHfAzTbAKZSZrEQkJKZSA2ec8M3vpPoKBGCtNJPREL7Dt4VNKEc9T3KJRkoPapE2P9c3Am8sqVfXntsNv1UGaU5",
  "key38": "65YjRugquuJ2iNYAwNyqmrDnaJrgc7YYWRobRN1GVhHJdgi3sQL1bxUhG37eZ62qwWpzRezNeJk4peHToBZtj7iR",
  "key39": "3zUtqLsyRnHBvDskaZxV1r5VehYqt7E4FHmtViyG3udkyU7BbGJ87sez8HASjdpbmZpcEbxmoATbPgrpqBYVYBcY",
  "key40": "2EXrUtT7atgBx89zM2Q4F3Q2CXrgC2VkwgczPRKN8A5Wv7Ws3BqKEm2nXnaGoKNHLi5fkxXEeTEnuWzkpkBu7cK2",
  "key41": "4qpneTdxZe1U1zLaGhDSq9guQE52V85uGuCzJzGvvRS2dMFep7USiAgUdUymKRvv2Fjkm5cUfMbMCJoF1966xc7a"
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
