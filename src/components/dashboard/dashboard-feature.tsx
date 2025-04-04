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
    "29UPQ5Kivv9yeWSYBKnn9zb6PjwosBqqS4K1cfDNHg9UdoivFBx8NSSVg9DDZdnFuRe4vqbpR29tMz8K8iUUzV9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GjtT3Xk47jonYqH36mHxUjKMAWrFyBZoRwu746piKB6vC8g7QQ7KZBAXQCAYV3dFVibBLhzSQUwYyTWXdMePPSK",
  "key1": "55F1awrumaVsfVn4RdPFncfCUo5aFaotwWypA4kFsKLhUq7bvvCS83MJSwmPKM4N4GQ6tPRzvgdEXHcRdSPYK69g",
  "key2": "2DxxxJ4GcyFQkLFC97Xs3uWZtygHhP2PHtkDvnrYKePRphjQRdXRAVyJZS9X1pcRrQKAmDfbWZYUfgPm8icjB3LU",
  "key3": "4TJgrAiGdYNaeoQVezYUtPgg48wQ6dNz7vPDAVwSphBdd4YaGnE3nN4U8d3NVc2PAZGa2DB27iQNsFxLb1HqVyzj",
  "key4": "5AytuTqj9Tnmo4a2jJcYLipjKTb44ptZVkfzDYwxPtpXQS3Qr4nPqY4gdeik5XMwhQpTkQNFdaoT4Lr7fXdxy2N",
  "key5": "2f1vtBvSXvHqepZc85DJcFFa3aHoBaFdNJGMrWNqGqQCB1315NH14nZ5ciEqmcsGRKC7rKXbKimbJje14z3quFgp",
  "key6": "2Ztr5Uqxz8XxLQqujFYPqSWyGgiN5xSCkZWKveHimYM9XjmHh9hLGdGjCwJZuqzFn9wTmRcCwX2WCnnTq6xPAnN2",
  "key7": "234hM4XVoPqBEarFvwfEVuW3W5eVD3uHfkZJFd9wibFSwuYjqYYtT5SNp9n3pLifJd2XXQmGRBPqd4u3HeG2mVJX",
  "key8": "5L24rWDc7pnbzwHErM8jtFceE5eWRkTGxnZZb2u3TnonxCmwdbn1rYTNEFXpFakmhNob5ubH6Wbj3Ki6KhSiXB8T",
  "key9": "F65GRFrrNfdgNNm2eBgYiv9SQYYf5crHBdGFCAdDAzdwXA9tdCfZiEFjn1ZxAFYrowXKKUWELkQ58JaHJh6YJ3o",
  "key10": "56gTsrEtMKRBEZL4RVjpE5ddnX7cCbGaBWmGmn73KPJha7bLy78FDtqsf2uSfyoeTU9wNzs2dXf573Z8iddAWg1n",
  "key11": "2iJihXbet4yvho7b48quoPwbdNVzWemvL84CFg9krkrNoSwuCXoGw6h1UWAXTjxjxkNqTAhunpPgpsQKWdstfa8m",
  "key12": "fDFR4V8jACbgXe9vCPDagKiEPWd5XTbAUxQLBoXAUKy3T91JP41JqFyeM6ZTYzrATPcMBpzyWkBvoDrJt4mCMPP",
  "key13": "ZZk8WWvVFDkamE7WAhEqD5MyVPB8SzVUfExHhmPBXZTJd7dx9akd1WU3nsras9AoEx5o9egwBqXyyb6JpA84XDM",
  "key14": "4okGramtn1vq3FB2639WUiTduHY47jufovG9X4oARk4GHjvx1nYkPFhtV6fUYMNftt81sa8kcXNXCYhiec5kjzSU",
  "key15": "4wBTHzUQCYWXdX8tMmt6VegbyQbkRGmRoYzBhSrxkL8wLDHD3Sb8XyAVqDFjZMQpJNxxvvf8gkjn4JR4GVNFqiKE",
  "key16": "4p1tsyMuXx7Q7VdhwkWauUSQdR81i3uyq39hgo1P2bx2r6ZzoeYATLNycqtVWnzrcxTpK6TnemYPbXfqjS8dnvJ6",
  "key17": "5fc1TrSN8GcftgJnnDVQZGAq6mTKjL1GRUgC9wp3rjLNKHDqxEVvDEXMrdhydiQpehHriWQ5TKD195nH2UcxYMZo",
  "key18": "3mVTobhGMjcKywtheehDKM8nm3noWhcspatjULSH5KMGUPeUFh1Yz1ofwQ77RhUM6c4Y98YtnaQxwTHK9JMWDGWA",
  "key19": "2YR4JgqP5ys3PNeAjTKXmNq4aCaq11zkWWwxeoV7NBCfbPh98FCPDtR5sDmaM8J9exQBq5HcJpo3x83fgcnVnpjC",
  "key20": "2JXvhgwVvCNUsNjoMiDuSC2FzZN12gTvMRyVXHaPpEcQL3v8jbj5w8snWsbiJpCL2uQrAAuGgmdWREECbkJC36QM",
  "key21": "4j88Zud4BmX7zGavm3LRyahvjtbqXfmHc5LcUP4j9QBUR6wUSpWMBhfxxhozz2fEtqtymerLhgQvJGSrPxzaEe7J",
  "key22": "3tGbV7YpfW4upwVRp3xvR6tLV5ciSkREetSSbJH9jbGJU7cVv4EyhE6FCPNqn7v9AS5zVTbT6VoeV92E8Ug73S7q",
  "key23": "51JfSwZUmmg9WNcQQDbkunR1v7vRFrTefvAdJWkmUsCt4BuoPzBt2aLHu5j6hn5L2YaKtU8kyTokJHmac7ju6M2W",
  "key24": "2gYjdaducMVrtXnPZqJAZqkqL6skjB1DbYCTZYaquuK1zteYzHwgdbbZJRx74ePhgJPDHnsycKd8D5hLwPLMimsR",
  "key25": "3ALJS7QZY7oN64ZPURb5bba3nDKkhf4NFpgzRpyFWBDbsedMpQUHD9KJrLYKCBGTGZg5AwWXkiNpUSQNaYrepd7r",
  "key26": "2btPcR7k8eh3V9VaPZUy5XiCibcLxKCtGHSvK3XMj7uk6EZEuf2jVPYhQbyPJ7eUaqdEsmroiRDYaPegSKcRrXEa",
  "key27": "5HZ9EWMmsFohM2U7HraYm38GEp1oQXKoYgrPnWZKUMTpDAB2Gd5uxbrNB1bb3pyrHY5P6N9V2NgrhdSxG7KgytCS",
  "key28": "zJMdCJxmKuHJFEZnNSj3R3pLnSG39E11NTZTgPy4M4nRLCjue7GBxkV2YujeeYyZ7cM7RmMd8Nc2UU31wv3gJ5F",
  "key29": "2kCbvuPvmiwLb4fEXgJSEdb8J6namGUsxV4GZtR4NgPY1iREGmGwGwLX8Pt8pMDfaFeLGCEWDT2QFu79xYZEPgV5",
  "key30": "4pajm5tNJc7GztHpVPUgDr8aoWH9AeWYLd2jsja28VCEXThKXxDMJz9w7DaK6gf4jtzfBpNXMAKn4vqbcvHKypPh",
  "key31": "H646XgYgShmK2UFDoAqwrhbd4GxDsXKUXCuzTJJLhFaHi4s5XiM6KywuE1MXqGRM2t4s4PWdoyAdTyFGhCePF9c",
  "key32": "4U29RCtGUM2RmwSKjqUSq5byhhJdrA6oYQwVNUCVyoE16FUAg7FbQQzPDvtJKbQtqDN5YSeLuMEy6y56y3YsqkHR",
  "key33": "5mWaNwNTrbwX8mesB8UVpr6gRpq89GM9cwPC76NLbQTyjtRnL6Svco13dqQZT8w2UFxxsSHXLMvbuDjZbj4coGh",
  "key34": "5aDTbWFozeMTqBqSguAHxXonB5gk8MHztsJ1J5Qen8RVLgpMaLMsLmdzQvjX4e3u2GuA4y8wxox5FLuuaK4Wwk96",
  "key35": "vmtzkSjp6F2MVrLp1wHLrwwjQk7pdiKPCegF4ATSqUd1VzLiiQJN4ToUvwAdBn3mKziksaM5jXsH2TrTdiB3E4j",
  "key36": "5K9GmBYXLw5dpcQZx2htLj9MLxQULYqQxuyYQ7eVcZhtGutbk9YP1RcWKtZY7sNB6xHtigEQjcoVEHwZZZkS2Ybu",
  "key37": "4E1kMNPtAcLA3i5gub3Zw2ByNsVcDFLhrzonMprNFBQEaESvf9CMqfTSQeJHzwrEngDAUt9AmxwF4dkGdqfJiTTC",
  "key38": "2CAqtmYMSyBdPdrvQcL9LuxoqLPM98VMuf5zh1oqfm1JHxp5SKtbhYrofLkbbYt8xEor3QSSNzsb6CPHi3eeSgCp",
  "key39": "2KAQedZrobMfNJvyMcM1nPhbGgSXJPVY9GtVwnRQNaRNaThH8iyisPNnseF9iqVmzqpEEiB4ExWLj8v9mN6iPSY4",
  "key40": "5GiuF2EU7yBSLWihFA55Lipg4nXJBt4Mun748wonAP2s7HfZaJo25HV34TiJ58nvKRsMnjFjmnzEJMet34qCB1x9",
  "key41": "4tMyHHMyjsgq72kCjLjch8y9Vk1uNHiW8m42ooXLRHBRN3ivazo2FosAgEACYq5L23nbWVX4xZYGunArgPMRqS9M",
  "key42": "2bqCC8HwnT4B9V2a3vjcgiCZvjQxJiydir2NKYjNuAg9Kppo2nCQrqnmxBFPxGfefQwsJesp378vsjNea34FgEL9",
  "key43": "4Yw7HWX9FrMxVGgaVbwQpQCuYmiKDyF1F8RT3vW3FgXwY4CuVUT4if2ax9N5XgY78Ce4FWUm5BJY9ChEPmmc2V6B",
  "key44": "nE3P6f91iPc27t1KdbZWArdFPgNbuxTz8QhBNBwRrRc8Yd5R6nK8wWsMzXv4YC81cky1CWtUBiwGmvdWsSuwmnZ",
  "key45": "4ohMH6jTHNCk1Ntp8sqWaPrfsf21S2CXVqN4paq69dVrWDY15FHNphimEqTrByF9SJuake672kN5hE8qUUW1vcKA"
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
