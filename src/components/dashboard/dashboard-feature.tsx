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
    "3Rym2Rng2RJn1A86Cf63JNnZAD18bJZ2W3ToPFZByfuLuch3UDwuytMM158M4kN1LXdUg8ZhYkUoDY5LvWXArMtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QSmcPtkC8Qfvak2j2KgZQH2v2CEjRGzGrEBJ11JbQH3mKvtP4VLM8eMzsVgNeSaTEJxMwzZMtce2q1iPXPzEmuH",
  "key1": "5gRBsP5SLFYKXW3NzfNSXCqyFWFMuf5LNef8AsCHr6YK4WD8jydhQdTdsMqaztNc79qMvtfyAqDyTeT6oAyD7uwm",
  "key2": "5UwiMkGwnYyGeBRX3rLARhodjPtpUaSqkSwMogqztNqVwbAVBqTJaEzqiy2m8xPzky6VAwFtbexbyZJiqyHE7D2M",
  "key3": "6388ghc4WjwkYr3pyrEpvxBpKF9NW3BWq9uBsQ31t3xTE5PzTthgB5fBvJczEUcfb7vPTYQL76me7Xpo1c7c2MJe",
  "key4": "FZevf1LNUvgxvC8hk9ZZjJXn8pnFYND58jE5E5R6xZQEkLEB1NVzSE5QeSR4ifhMw6sEnkUvU1MJbaxTAhfwuoN",
  "key5": "44Zce2bBYDc5ECGz5NkyDh2AuNnr5JRhsbc2qRr57x9fUmMc4G5K8G5kgivf1TvwL5zaN6G1ooDMVxLUpPyssEbc",
  "key6": "4FJpfME7BMC7sGAKeh6jVgY4zNAk1rC3gvo2iauiBVapf9Nuwm6sSNgdwHWUUkqmmqY7PXDkaVXmWpMmA4VhjKbF",
  "key7": "5t9WfFCKhCNs3i6L92PSWxK7GPZag9nDB1kwisrn79PXPbyHjSMsLnTzPspzLpJue59cNF8K2NmCPm1aCDbgJVcE",
  "key8": "4egK44kmRk8rth68dD8LvBGVY72HE5ZQcg6qBTRsiv7kBQyhDo2VRf8uNKgkrEEVGjuEePGjoVarynVeoiN3ATVW",
  "key9": "5z7snhBsyAQTusse6Bgn8T1VQDGT1BoGg3LJCpNRa4XzEm3CXnaHYe811UbWZdritM9cQtEQ3z6oee7vJdu458By",
  "key10": "3SJiTcCVb8nYvAAPDAzaAdMkY6egZFmoQ5QuVkUqEVcsbLtayR7e5z2AQWmnvW2Em632ZnnVNLM4KYYWHWJ4KF8e",
  "key11": "654MTTg3GrNUF1Xc6PtyqETTrTZwwvi1opnfARWAXJSbV7eySwKt8QYJUwMdCHFk4zH5udh9hnQCMvZYesWzcdXb",
  "key12": "5YF9txjUkgdYCVRBFPjkdCVEHzexnFQtyb7ZbpkiTjzwkGwHhnjQSEt7a6ZMV9jEk4U19tMr9ayKkbbPWiY48WV1",
  "key13": "j4bNcL7zQuTzgNP12z58EVBeTgvgKxJDwbe8HZdqZwSNdekp9VmbQ43AKns8FBKGaC7ZNJ6Bd5e4gVNKkq8gdfz",
  "key14": "5UGs1Dik8HEVuvAU9aqXQEJoMsYNeagMzXJz3ro1atxV8QKdo8LuESW37PU9GLuGfqA5s5qP1U2EqVDLzPwQ6WyK",
  "key15": "3W3wjpJ8cBs3xsMgHQTLuXqvHp1p3sXfTyzzaKwVXv4ULUxYjiLwCEns5cxAZvb7WT23J1bmbAY2aJhi5EKio2Fk",
  "key16": "2v5sEyesTwSEFmyovk1FTLKBkCCnHaW3t6QvJPnfq93wUwHD3245LZEEpmReajAX7fd3NBV2H1Noc1Y3mKnLr698",
  "key17": "5SQFF8JKH2C5zqhjqS2eFN4pstPrrRKYADgd3CcTkHf4EZHVGjktgBfo6HxnVe1Cb491z2ZFoV96morKRwJoZo7N",
  "key18": "5r5HTM5Mvq4tU286r1awi6mm7k47CqGXiWchGqeavzHiGp8onmse2KHcffgvNp6R96iFQB5bZP8roKbuZ4nFNp7y",
  "key19": "52wpSZVuPWwV7ycFFDJPB16sgHqiXcct5pMDcRNcPGrrkYLtziYWfAJGRdH5dqTZm7dG5mDS53dQnhdnLY8EZaVy",
  "key20": "2KdXCNq5w1sabrH6RLzJr3eTjNzL8EssVWpRtCrnZZQ6cuz8iCwQJ8GnKyo3yCio4Akq5hrPBZx7yHMMMtzGuF8k",
  "key21": "55PsvUB2S3drJrvc3etGGLwb61c1L2y9kSTXCn8WSfcvSdQDgej6BDripatiJawhGPnHjJYoJMGuDYwfhRy7hgrg",
  "key22": "8D4fu27xSqVx54XrY9i4YTbeSB8VYBfEEKmB2PbjYjfHytV1wmDXz8gUgaN72j1JoPLSe1yKgRens3vW9tZhuCD",
  "key23": "4dykiQfz5nxeqcd2xQfzoxe4ytjyXgxegyVpFu1a947FK4UAjYp7PnobGiHnQiDWzo3qektAzck3Npsimqg5Yo7w",
  "key24": "azj475A16hR59DmqtGbBd1kYQsd8TazcRxUc2Z8uVENiX181LV5q3w9RgStDbjKygfHe8Ach6sQV6vxk5m1nW4s"
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
