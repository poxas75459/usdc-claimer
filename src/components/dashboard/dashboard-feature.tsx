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
    "2JPauMgp7SycK4tkN6jhqUHw8hPKcuJ41aD5bfnZrNiJAu3Zq5e2g1Uu9EpPKfDk5dWfaHLpY2Bcvpbx9Czx42MV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ivLRCeXTYiwys4PjHmFMHAeoYP9ttnN2H3yJG5STdwLTVKMsLEKKPMkNQVRDGSzPu4wJi2a2zjEpWmcVnHoZBHM",
  "key1": "5SgQfh3xGggoRaW5EefWmprqWMCPoZ8Bq9TdXuWBjGLGZ2KaeEEaSUuYGwdoJi2ShUEu2uFJwgCpr3iz8eeq7W3F",
  "key2": "4795az82yZxiLve8YK8ho4JwsxYDzPj5e9yHweKge6PLPdUudFbG6Ez4x4ULkfpMmc4TcGF9Bbd1hyWg5bcGzYMV",
  "key3": "5YX7ZqYGdpainpzD4rBb9xBWE3hcopkXFaviLoBYjw8EfQ6noRz4Mo5jdS5amnoVykXwyamyB1pD9t4SrjJ7N7Ej",
  "key4": "5YKmp39RSMaeduq1NJP3h3vC6GhE6RDhZxGTTh8GUuTwxC1tcQzcDu5dT8Ukb9qfFbysGfvK8YJRfxxcbjGNJSVC",
  "key5": "5BA41KmcbVsW1UdxBYksDiM51F9z7a3QKfURQroWUHPEdBr9zWNK5h8Gsem5J8LZT82pwVEWVAE1b5hVzPGnmqja",
  "key6": "2JD8tnEJh9gyS2zdrjYQxgro1uVK7SGYhiVkuUsLG8YkLWzUUKnhuvJc1ADrrf77dv1eWqVt4fqYwdoSqfbPctBw",
  "key7": "46RQo7JLf1pmF54PdCQjnmZwj2E5a2tCgfJAb6oACeXM4eR71ZoqLduHCaCopsLW3gbwXQr7aKHciFgEaUpKQehu",
  "key8": "3GPtsVrRGK8a1u828aKbQmYn1u8ubN5s8PAVnr6YRLSRLfkstUUj6t26iM6zjQ868gtmLs63angrsCL3SFfDPqGH",
  "key9": "4tofgWMUeyTHV96aELKQACf85GSNsw9x1bFgQXmH8eXgwmr9WoN6ZbXx8MxqKJTWrk3KyPNErevPN8GustxFPUNw",
  "key10": "4JotutgTiBuR6s5PKB2mP6q1sjHXN62K5im1qAyqP36MpJE1gFSVCJvxCjumJWgMRwFDGhNpp3KPCP61Ufp2aBeX",
  "key11": "4qm47i4XQZB1SZoAJQit8oyQiyuaugAAyJXrQgur6ACtNw69ghsrWwajq2F4ePKgYTEjucMx9UGcjArAeHd94cnb",
  "key12": "5AJdsyS6VwXT64ysMDyV2FNg3LSo9GJqR7eFdkeWPqSadMPF7mXQmd4MqnFtS1gvZtQ2iD3th2ahJyeMAUcAASG6",
  "key13": "3enc9PCLHF282GRqSeLL4YRdtB7kqTsJavb58izASseVRiYQAwN8RLYesX5e4WqFaGpnVjhDKyhJrYwVXxSoBNbQ",
  "key14": "5s6Wn93XDh8oubzdqCQR2s9mseaGWBpJ7BeEGqrpmphWJPEsNPKKGaabaBCi7tB9bcYMFTjMG8GmDMjsRWzmoJRw",
  "key15": "W6FxauEz2Uu59AKoA4X5nTETX9eQSzYPMHNYr65qGYYUYj9Ji5e5d6dA2UfJUdHESzSNuVK4d8MLRUJCs2BGXwz",
  "key16": "4oBfoe47YRPZZdReCnD8an1dsgworkTJjD8FUivvVfKQHsELrirCpDnVtWD7G6XVteCLszEosaMTqpV9RmNUWZng",
  "key17": "4zke99LFTbaaWtB5BiC79A6qc1Lhittqbh6eJcP4fGDqdrwMGCsj7Pz1EWQxRUzo69GXzkF2iBoVKzm1R1h176x8",
  "key18": "bqxzMHPrxZkfLbF7H6e5FUggfoNMhdEPRAwCoUZsSyuJE9zThUY3FakaRzNkDUiG48qDLw1WeHo2LggLw1BKyDh",
  "key19": "2jP4GT3sxFApDcnb6VnfYJaL1iT1gRcynwo7fGiwkgsJ9h3x2Jsr2qzUMzCt5F4zMAK5x3Rqn1fuJ5AEBsFnoZHF",
  "key20": "2LKAw242Wq7Wi8H6tFVc86znSrN3t5Vf3vEDh35KH3Zs9z522WCpSdDrvNjLnz1ETsXp6s8cAszkNsK4CVFcfnbY",
  "key21": "3f7EYkrMkBSFgdjQmSfJvfN2pLJZnsiwhUwtU1GHFULLvXuqQhUe3cYT1RVgghWNw1JPXQBbLXApZ8SWEQVZTQVV",
  "key22": "4eU7FXf8A9vueBYvinSPagT23sNXc5Qn6at6cfFmdL8HWhWWG1dBrf3FJSMYdAeZTWLMFR6UzyerriEEESJS41na",
  "key23": "RSAHdrok2uzAxp2FQaigR4ViYKBMDLkTXxdtAscxa495WYjbHPhkAuiu7KDwJmqLD47d5SQAziRK7Q7iHfRWGAa",
  "key24": "2yhTNnaFhVPHqzPmXexoL4e38PpQ67XpjKDkiKox45Nw2hghzqh8Cm78AbQVYvGsvcTydWTjUyPgzgy6cPGqbWmK",
  "key25": "5SqQWjiuesPPY2GnaGpzoFw7NELCFaKKgk1vWceXddatfaQTbAZJPgcP5PvP2Q45pjJLekSb45HSG1DP4SdUu2gk",
  "key26": "2xbNdY1FesBthqUFd7VYMtLqnwpDCxFQVCiM5wstYWsUMY1HBfi2NSLjc2W3mDtjNtYY8gHxqjtTo47Rxxk6DN3u",
  "key27": "4VKpHjNLmVk8gfob3nSwY1vcu4i2kgB7w8QksXAgeBxxtBd3nEGU5LwkYxVkBiTmDZGyFBUvvwC5dDyTHuDU7NGr",
  "key28": "4TdPGzMVafGTdUo6WjppQp2Zzy3ReKH3MpTmrD86JtCm98V4PKp8i4foLh6K64kvCvXAeFueWaHXYmzkdytUbEi8",
  "key29": "2DUXKSurgbEHYLkmbGqdhNdpuNzavhQfAT2zH5EdA6dsx2PLR4HoQ3A35MaqyooZZo5RSXLgsUCk7Tcn44JPJMkQ",
  "key30": "2ztJgNDSU7UC7BqjQ3exm5jSDbptF3YZKdifmH8rooRFfDx6ncVbFcNahYqUmac3S15bghVKWQaMvgUpMNMKxRZ8",
  "key31": "2pz7zZMXTb375dYCQFpqaZf4ad6RYgS1NKEEpTNDwBEf4bS4MbwPsdGjvNPXgX1Xe1SuRYJQTfAarnD2Bi2nx4Lj",
  "key32": "y3TLX2eVZRCzqhmVsRvZpTL7FfdTfGmsxc4at2gdHTWXzen4Rr6YqBeQpzFh5x2QiFY6ehWuUtzMj9ELpEFJvED",
  "key33": "4BCrLTdgwMKrWzm6qineeucMnVjGNWjDAELJT4aiGXHRt3a51sRe95Rhbrxro94BB9eoM1PuiCDbspjBBBK8hgvF",
  "key34": "4FsKW8sh8x21C59QoB8na19G2VR3H4WpZ3GpoLvTz4YqnKo72UN8r9LCcJfzGZNZkVU71TPuogSrPmxoPbPrKKbu",
  "key35": "4oBKehTwxoFN4hRJ4XkogLY3n6gtTC3YdDJ18pDMSCXypbHAAEKzw7K5z5GEurjRPQQ7HxZmuutdZ62nGaMLfi8F",
  "key36": "4BwrMGqKSpuc3ArsF2xXxqLHB1xZyTrnxUfae8YuF47aVxZ9HSLq7JowqjhJdrxWVe7HhDrY3u1ixmF4nUigEyed",
  "key37": "2sxRwvA2WXqWAY6sSUH4vXATzfG69E9vmm83TXrAipFu35Ni6RmzcdZFVEzFT4N8RHWQLKS9KuU1vD8BJU2Ax4CD"
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
