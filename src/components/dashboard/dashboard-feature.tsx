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
    "2yJjCodDmGcSo3nseRX43dMWXiFa8VkhMUMYyTnUG7AFDnfJtDrKXr9bBXmLnnmwBLUvs7dtiivBtXdk4VpLbsTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YhB6U9YTBkQg6gC5YNuUNMksj5vbybJwiFDEFFzjFQh8KCDfoJpCrEjw21HA44JDVDq5NusA1y4sSxhe6k9jo4F",
  "key1": "2PUvzgvkQa4CEZSfBJXMqyckjSdtje4XwJJb5Cnpm1NjodT3w8kR5q4TDUTjBiebet2bSL782soMdmwP4mmb1FzX",
  "key2": "4WSSTvxJ6thsU75NeJQKMNmJ6wyxpYyxQG1MdyR1YTpMFRpMxkXogF5ZBwVPHHyUzAjMQ7A7P3wJbocV3gPps2zn",
  "key3": "645pEbJuRHLE1Mc1YDwwwqVRpRoMTYW9JbPZt8DeWX2WMpVREBRRRwc7YhpevN7VwmTLa7ZwbAasvvr59qNR79qJ",
  "key4": "5khdQaSLVrRXvQ5LFA1pZDhyAMLNgtHZwERDMsCyss6KfRT3MNMJcpFnoqqWzsFFspUQ9nc78EuASgBUTUVmM2ig",
  "key5": "GJSUYppPf6qnprcJf8e3k49eQKwv2otJTjeDPWLz5DWdeyyMkwkMJsBfBYXNYFzPmVZ2bYcZA6Tnx4bWZVxRovg",
  "key6": "2UR2aEdmHXGF7d32PHMWimao7T7PWTgCMzPRMDcdgf5FHv2AgxaCoJ1jV3vxNEKiuiK9147k4ZSY3CtQa4odfAi9",
  "key7": "4d3XSg9EoEmpvLAjxNBEYZ4txdHuQE5j1D7W7tSpZaeDDfMHRWjR419ZE2fWNGZtL6ZnQzRyyrRGGqAGLAfQD5LS",
  "key8": "5B2D4cKSFWJExRSZESRyxW6ceJQEBm6HZMSY5jGphXiuM4RPhy2aT1Zh57q8Fwj1fstKg3G9oAfEB2gMvyPYwrFC",
  "key9": "5cV22vL1QHMsRxRRSLhTkdXcmMJapyQPLkBNq2xTBpx7t3TaMQXSr9SzckSQtcRHw9kbnhRjfdLDfzx73aF6c2Ba",
  "key10": "2y4Av5EBbKztcPYJZQKV9t81yJnCz6hYUKZz3Gb6i7WSfQ338mhcvXRV9UdJ94ZcPksjxGAehqravGuzjLoH1cFv",
  "key11": "2kxEsJWQKyv7rDzsmc6joAM1h5tNYdMeEPsbzZijwK7rL7VvAJ19gbKBzrkNRNxbnSrkzSnUWPMXaF1eQVm5etP4",
  "key12": "4PrystTgVf7p5i58xQcwXyGgdSfhH3W6dWYskGQx7tu4MiXtesSVrooGEpQYHgs1guGk7AXcwjwdVsQu7Ea9sYsm",
  "key13": "3UD8fZjwhdf1HddBQZtyZ9UUZug4pTdP1H1DGqMmjp62DHXpxbvEWumo22r7m3DmpyLBeFvDRaZRRvGRWDsDBLLk",
  "key14": "APo7YVuxytKRoKKvr1EkacwsXMsLYVBre6Q7fuUdejXsg7gCojEMXkdSdwpWCfxFFnWBr9oYk8zK2R2eV3qjg4u",
  "key15": "cFqCgsNvxsww3wtXgVDCha6AKQnjeGFWvwWpDN2FmoSMx3XgePKiZt4US7rCKP5ykFzWQsj6CzdRY9SpoT13Y3m",
  "key16": "58p2dF3cHTkjw5frRezptw2eW85pmJ8Co7GQi8d1VztFYdtF1dNfoatb44URoXmAQLat7yEGKc9wsMXK1tuRzb4N",
  "key17": "3GakDQdDdG3FJpBBZC7LJk9aD24HRoQ8PndKpECv6kX5txbfcoFz79uwXBBjSoxDije44nn1hFzvWKoWmiRDawi8",
  "key18": "2Joz4gif8Yrk1uDP99QQebdaKARi9vWLmTj1puFRuBAu5zM9T5xrpkie776ThpuqESBG1DKycecv7t8sQRDF1Wz",
  "key19": "ZVxzfqd7ud38ATjoRbEsvEcs6zKy7vt5KpL91JmbiY241RHMYCXtuaq4LSrReyNStKLknJGN7NCDQJhC8mGP1r1",
  "key20": "5t86UmCbTnrskWWmFpYGbVE82jqhDpSAekUZ4hhdHjniFtbNrz2SWr7Mrj7A4g1CXf7ANWd3WkikVGiE8kZwJ5z9",
  "key21": "2GWEU7mxTd21R5srs1Amm7hKXrPXseWEQK7yR9fD5ByT9pQ3vED1wGfa6uTLmx2T2gMRqqYwwJhcbCu4QbMLPSDL",
  "key22": "5Pwdp5rkDnErzHhrHz5MXyLWtCtArj2SoVp7hyRjqxgsa8EqQj458gsY27PJV2Xv7FAkEUtmnesCLwYEwz1HjFTw",
  "key23": "4TA8sEFVXEpEUwPHxbhwyC7B4jmqhVESfW43DzNJ92LPczfv9S9cbfeAC8dwo8bZYM3ZNZAEaqKdFyrk9dLUJ6vc",
  "key24": "7rc99qVpvt8P42YXom9LybiUkYbg74esn4jetYisQwBGP4SdJdCoL38wX8o9Ly1pLt8zsRgKb9Wca6u3cY8giMc"
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
