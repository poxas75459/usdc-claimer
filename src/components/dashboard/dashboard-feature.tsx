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
    "3YK4Q9GXrwxjhW6q64VGs5F3qCx1YU3Rz6f1uHXSyPMa6JouDEQFWvXhebrbg7LV5ajJyZyUc9KbgZCvNJ5Qh6TZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dyPENgbCBTtN2Em9pB3pbeJEa9GPAh3zNsdFaqgSdAzn5DqN8yLLL55X5nihNHRRrcbwf64HzQjKtowe1B7oT6K",
  "key1": "4iZz3HmZpJPgb65mgatmfprQLb3bMP2kvZHLKUQCxzU3V7bpegQy4jWr4RNTP7sV3ubPNZ4kAYLo9dUY7BMQNJDE",
  "key2": "3HvLRNYwvVq1gpQHkkygSrYina3YeXqqnB9RXHT2j46CyeDqXmK9H64YAwfipts3iL6QAuJBMYTMipdzVhdHxrnA",
  "key3": "3zrCeVkyY2pBXy4xcbYsDcyQvqvCoWk5gDDXXt1dFTCtmtskAwxhkvfZQdBMKfNZxxKJGKpZrDjKYQtbzACtPXf2",
  "key4": "4LfqTbwsqyj5wD4hG8Eca9FYYTtMEkpqzbug2w4hNwPwVqSS7xX6xKKzfu6VwJHNFPxYyoQgi4C7zGRG22zaBsD",
  "key5": "4FXJyDxrB5b1CYHDKS7FYB3CwjTjsWopp41d8jBALMwRdAyVH1vqqUHXXRXQK7WMkhZyWUJWepnQDBrqui1ZtSGL",
  "key6": "2ozM9DsQiJpfENoipaUZ9QADvD648QgSPuAQZqrzCY1eT1KjfS5J8F71eBvsPCzfc5ffX3ZHhE1pR2Zej8igAwe3",
  "key7": "67pQfibostqvgjzLxieX2DbfWLXCvRG46cCu1oJkFzmmTiKtdEudVeuga1jWNJEFesH7ExBBf7oCXUfeFqx3QFnF",
  "key8": "2cwdpJbCedrrytreFiihip3Kjhe1zPHYLp3SrUhK62bqtgomiaUdBgZTybxc2HCTzvpDuijasKSBmx6Q2fWZfk3B",
  "key9": "2tZi2KcatghphTDvpZwRKdUBLSrC72BsbpcWPVcUeNQkEYMdY24zHvua65GsMPEvVpeXeFuMJ5iv5EpghwH8Nfge",
  "key10": "28FZ7oeCk6cXD5zJcoHainQtM4qFfGt7zgXzdC5pK19ESUthBD6YxchKMdRQNPEEaveZ2SJgR3F9X598TFdokpT3",
  "key11": "2Fjn7K4mEd8imNyL4cS5RUGf6KW1wopjdUH5Tc2xMmhzLwdQhGbSrzm73pKewaqK9U5QnZSfbn7XUhu1Gx6iGdZa",
  "key12": "2KjYcPRsR4jeTCrEjrJGopxvFjuCAp4JBBwesPBvcYuqUkSJ8qSY8fbfLNLq5txUnH3o9y94nSAYi62ag7rRfrE5",
  "key13": "5xmFX5RmdGd8EvV7D6UdGrLsBju3sfXsZJG5r3ckPSQtfdQwtXQASkbXPaX8Ws8p1BuAXxbEUkCXtrun1UBPrKqp",
  "key14": "29CnntsPmfaui4cMSPfdCMU2rBN5GX4onPFwpwpqKL8JT8pdSf49CdXc7hayx7DE4gz17wXhm9jD77wakv57FBzR",
  "key15": "2hXT8JB3GkwW8XqxbX4Hn5BbVUctZcbSXZXMWbfBaAcoXGFNhfmrhLTwExvCHuEQ37LnjrZs3qiqp2tJGRie7fri",
  "key16": "Xa8vUYE9zmRFU3FjRuCCE9DSCbLrgQSaVhkw92jxUYzhFzw6M3RgwtTYghrNppULkHusZ46pu3PcgbpgN3JxpzN",
  "key17": "5Fbp1teBkXXcGMGBNvqma6n1b1aahdAPVadnX1B8Mpw7rVP3LJ9ucJ5CEqmnYcDKqGWKnDS92LfzVM6h8BSKp7SA",
  "key18": "5hGSq9Nq7eMyrbDxBVDz4vNZEgSz4zw8euz8BxzP79S4hoj4hxXTXXQbrtvNzcKMD6EZi1aJnLNuxYzsU4Subyzd",
  "key19": "3JbzNc6T2v9m6vGcpQRegyiu8AHxUehVpvJkRTwuhHnaPejwG1CKH6GhWNJTLyjCmEdyD5zZNWdBr39esbFhAr9e",
  "key20": "2s4xjDVofTivY68rNzwYPopRc6XkrBzyowvSNuX9m4jUGBCXiBYYtQVEKHz8QhkapToAfDd4XaCvfaSpnhfpwXp9",
  "key21": "2CAtr71u2eAUR8k8nrtxfEvceMfJHPLPG3Bj5jccDQxgU5tPKcbUPEDbFjvftm2LiCDLjqCcSXfyCAaJMdiyubv8",
  "key22": "5EZZeB2TSNMTDe3pVsrXXAfuKWP4gkJdoWbpV24w1i8j1gTBPwrhp89nPhiQW8jmjuwvMrmGjhHBeXx9SAeVMbcV",
  "key23": "2ZHDYQhXeoMDf3fD3LoRYonXW76e9bqxzddtqbqaAjnG4Juh8ixWCWdnqbSGntJh7zY37rzu5sTzjGdgjs2zr6g3",
  "key24": "3R61te8GJjJ8pkzeWnke4vtcQj6YtUhM5p4WqmGq6JAbUFdUpmA132hLG9zo4Vbaj3NeLidFCtxMghSFSKneCGV9",
  "key25": "dAvX75gKnKG6jnvNKpM5B7PUozVsmETUt68eAEoBba2FSHfzEEZt4WksPB4LxLWRV9ExbX6eGYPWFd61Rh2LiQ6",
  "key26": "m26RP3QqtLbPugjD4RgHEGj16a9qy1eCubpcNisegEABuMx6qRi463dM6rs1d3KQp1A5EqTvimZ8oU7VnQUJkzr",
  "key27": "3rwUGEb2BSSfB2jp3syLanADFPdjbo1iF59BkeTp3twM4CaSSvjpZ5yhnsrXyYbC8ze7JzgPZK1F4b3T5PYn2RgN",
  "key28": "52QVxaepVkYru9At3nAsjpB8YWQ3jnjeeYJ4Qvwotb6xt23kSXFrfvGy846cVgHmVXVA2YwQaNfqa4M55BdQTCwx",
  "key29": "2Hiady8V9cbbVEcp4YVUSBbYD7gU7MwJEuEw9VY7oNP45iGu1v8F9hwKhK2C6pAVC6FDi9mU45xCUynztdBWJeyt",
  "key30": "3iLvdb2HwvrbEtSyyEgtq9RL7LHvtfFS5wA9QJHh1kpEpmU8YctMvro3ctVuA6DiPU2XryBTDRNBLuw3v18XuH3y",
  "key31": "517QnRzQi6vgq9PUid6NXKUhxi1Dr44RKRzuLjv5soxeWXX13qSo69cwfdBST85TZMktatZWBTL8LaKDhdXhwccQ",
  "key32": "5ko8vLpskzg5AkTdMtkF5fsroXmPcEpvRNtdV2v8UjxmdVzL6HxeN26yQzjj9KPxTDFxXrx6EbvkMjCNjFsMGhac",
  "key33": "2HnE1z5FzZn89yctoZ5nxLoNctBUwzryh3PrMwgKWs3EnEubNCjG29iXqTLqzaeYub6ndJj9W23JpHEZcy4nnYP2",
  "key34": "3i21GDDC9L9kjmnSbZYvbQfK83p6WrV8sgyHTnJ7MeCdkSv47KgjRkUzHhBkvEVNgFcQAqy1rQQkkphzuJCe6WeE",
  "key35": "5BcRRFvUGgBoF3vUJdzHQvh33pmMBM6AaUKsmaoEZf25Ng8HWYaamMKyMBAd1nR6nFKi2U3ga4ZYbPFD7oMTPw1E",
  "key36": "3S825kwtAL8NxxmFfZD6wiPqRwaMQEWh4QdC6GB4kct1dC1zZDbrqeMct57Ei5TKGe7MMtv5uHc2usFy7rJXZppq",
  "key37": "5MuQHKNLLahnnE9akmbZpuWJcnKct6qJpq4FP6DRcQtzKqVSogh2eKCc3z6XprcHBVqPWApyt2qorkHSX3TBjoNn",
  "key38": "4n5WDVHGGnEtLoEcSQCsyVt3EkpYkDnFqt7JuXJybsjEw3K54YfuYFrUDAzo7aNp2PWp9hHpopEpvRUXAWGngb3i"
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
