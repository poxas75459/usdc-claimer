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
    "4fuoaRivcgPFVqt69KQ2GJiJos96dXhMk392kxXfpjbbYXBonkzgoyjJDc1kkXDCDw8we918JVWYVN2BhntWF5Ka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xxqqnUFdn1YY4zvHSMeq5TAVBpTFBakmLbBgrHxb4MoKn9b4QcHrK6uJFVhYnsPhByZYDNKw3em3eZZt5p9GPUk",
  "key1": "xNRXxJmnN58X5ypEmd2NFco26CTYAoTFzRtacw6ivQX68hpxVWNpf1khMtQfYEPVzvqipjPwAN2TBv48FGavWH2",
  "key2": "4cvTB9pqrbr7YepgeLzQbk4RM6zKsNsA1UqyHxxrA2jRrvAPFxuMRmqpSasgyPAxM6DZXhVhQJEmemCSoaoPEVUW",
  "key3": "4wSqw6QunhNAjNS6ntgaLn33Tebpycwrdg9cc5mN8tsgBCof1Cz9nKXV3Q3psPKyGnGtX4qt3BxGEqFVEhDrXwUH",
  "key4": "42o7Ej6hfg1Sb2D4robdJepJLhoCgDjT25GvbAwUfNWFhVss6Lo8wag5BB4kM9AHMvhWb27gMtBBS7NHFrqCwvzc",
  "key5": "qfi24SAr4JRU9zC5HxZ4TjLfxrsF5UV8Dixpg1Pb9tkX8ayg9MvPUZXtxZTsHySHqn1tVo3BaePqASjfzgVrGeK",
  "key6": "4PPbUQQx38c4yXdLmYUdb9ZtcPk8J7SowNEW7scbuVqTyGReynjBMVqcH5sgW61BjGVt1QkGLmbZLqTnXNUSct9M",
  "key7": "3uy4ker8Hs9PT4kWL94TucHsoa1VxREmjwr7RDVHvFWpWPD1pnr4REb6p6fV7Cw1W29DdE3SCR367aiEowviucnr",
  "key8": "2Xx8ErWngHXD15JRkkUE99USzqMB4zf7bz3fqGbNAEP6tpTwePG3BAJULWWWFCEnyEvNwtZCEW584bA4rxcMdVFD",
  "key9": "2vas7mZNRDfpQwW7XkQ7em6pZNTVXaY7P3R6JFnmb2c5DiyMNJWNaCucDJPDpLaqCUzNNMxcViuggGEp7s4SS18r",
  "key10": "2sUUP45WEv6hNC7sFwHR4bShtJwKUM92mBPLXWkhhgqfpZrNu5xvEMgLw6fCX9dKUu5jSTixCRBdAVFfxk8guTTc",
  "key11": "sieiUy5QeqWHLp2xgAZBHyNR2vC7SWDU6i3dBWABN6sVtuaiER97hxtMQaCxVKQta1X1fKHhWqywE86D1uMT2va",
  "key12": "gRYhrKj4X3yBeWUgH1iCmqz6G2g1qBnxCMrm7tF3LAJBwPBaAJqn5xjJjWsVZuN1Cc53bo9PXaqLckZBJni5KdQ",
  "key13": "2nrnNQZscVSputW8At8VPtA1K22HKfhC3YKQHA4nvcRyRwnZHNt6rKUmh4cTA89mouYiHxyKPGP146uS9k9ur6yX",
  "key14": "5Sd14pYpkUHM57we4F4zUdv8JiyW3izXufv4AQttzt9mN3xLKEv96EBazHW7iNbajHXwaBQyHmJVwSzjmQVAEdaP",
  "key15": "i2m7EFiCQUfbp8E32k78R3kwhJTvBkMD3ie8MiYnXYf16wpM5CPAhDPSUQC1fmrwquetRvS6ws2DgLqGjFqEtYq",
  "key16": "5JRo6Y9R8tw4wy5oiv9zfHS2Un5d4SGnE6G2TKA5W6pLhXYb46PgURnAdFGsZdUoqmwkGD9jKVhd6x4b6oURYW2G",
  "key17": "52vCuyyW8HZKA4hfsfjmN5kPs8hPsQxqCM3tvKopt2bHKVT1rJ2f1YWQLHanxLdTh66h22hD2eYXbakxaRrh5HrA",
  "key18": "4k2yDvghiFQ6B3HS8HQNho3PEoasxxJsxQ7CAeCkyZAdhUH3dW8GokY57jzzGALN8uxnZb2yqT38AJctnGX4fzU",
  "key19": "3rGNP1RMemqGjtTbG6tfFwibNUxhfFDDaJ3rBmjyGG8CjvBWfF1sFkLyMZpKRdvu6JMirCNqq7Lo8P4kZyzUvQqG",
  "key20": "B4muzbS5svHZxk3pfPrcmoa8yZrKahUWtyEsNgyBVu7Th8uTxuprnmo7azUKBDg4JcfABc8yCf5unzUTRzDPdkF",
  "key21": "5boBkeynw2CbidWPj3wm8GUEJEiBzgSuKfUGVo9UkYk5CCNxGMADiBLfweBkoq9JJ2PJ8T1qEqYr9zw9aRhLKD5y",
  "key22": "4HvCWQsa3UxussmEm37XQ3dSiEDgmYtr7Jm2UmdEXeF4hscLUXZmbVjkWLmkPhsrXrFWfAiQuhsNVKNjmPwznefe",
  "key23": "3Ag7Nm4SPn5evWS6CGN1C85XmTuMoUtpVNCaHuMM6urmJDfKYPzULZZoo9hvhStfP2m4hLjqRXtQ7C3N3WDSadpH",
  "key24": "3TGr9VY51sgyrgUycKFG3eQu3CxQDmkpgVxfqsdERHzUgqLcNkvEuadBa1mtJJWXLDDNvRNsQqkeNAJjnGN72Yhh",
  "key25": "L3KhCh9HY2VZaYjBjAMT67Va81xN3dbeDZQJqvCkwJC7Gbe2YX5XUB3zSybKzvKEgD7puoszf4sdUT3B5kwxbdg",
  "key26": "2QMRTneF1XS4MwiXWuCqt2xRBxTzPcSiH3BPBKV4rAyzKFFHRQbzH5sRz5Ax8QUWFZWoNJwcxG3Ry8ZhPqD2S4YN",
  "key27": "d1zQ65zw38f6dVdMD1RAGNK6bmEgh75incC7s2Rdf8Rw1kNmxiWr8ER8gWr8w2MTjzNCtTEXWBfEBCQt7GQyeHo",
  "key28": "129uGB8Ey63Ez4LJnBLc71DskogyB7uWkZtuUU6vk7PXEGJ8iLu6sHXkBoz3x8yGySQ7gmVYbv35J5mbteWm5gQJ",
  "key29": "64eC9JmaWSxSujwKKuwRzbCY9pxG4cjgA4knoVY52kXoJzmg8Yv8BZaL6Ah1h2i356hsctVvybGDu4YizrTBfyit",
  "key30": "48SmHbNFsoMZJ8yBqeitnqibjoBXG4PUkjKNCdS11JJ6G9cP5dj2KYkYyRUo6bUppdT7Qa3MkFA7sTWukzGEStqL",
  "key31": "33W1RgqFDK8RavuAhFm4gBQJmExKqi4yT7aYNpKcG6P5pE1r2keRd3k641ET4r9Y8v12wdJBBMVPTNhnYqPQ3tSt",
  "key32": "3YuhitUkR7mNwmwcMfu7jfsbEGKPPjiSvrUtNPy6dFfZkhos65dp3Xei6Z4F2fUnT3agYrLmGXQ3pcdm34LpK4RT",
  "key33": "41ue5MgLkSzX3fX5nH7dQgqxj1JVsi1WF79UtemeNKNCh1HbSNS7YyXreojuRGroHHLpvmFsjkemyTNWz3G1Ha5g"
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
