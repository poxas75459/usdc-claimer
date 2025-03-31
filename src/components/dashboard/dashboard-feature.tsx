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
    "X2n44JydJ8yPNCEHQH71w3xjbveMkWJqZXGnPiKchDSnUNBJst96tckafLdBpRBsery55LjQeePBi48Feuc8TZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SJKPuYbshTQsT6B7L4NMayFwCNu8kUjxVsac52xqNjfBwwnfd3huuyYxZeDR3Sa7qmG9C5qEik8megTzyRtLwdf",
  "key1": "4awn7kGoi2dnZpMpuZTCmNkJbL7JQE3J9EdQUUo7W1Hwnr1hZZPQ8zhriXvdw5YJEXNxxxa4qGJeSDZAd1HGen41",
  "key2": "5QHwRkUkuPq97EvDJtJmGJw5GQK8dTqdz4qfrJLstKxNYkYynM3cWKYU4hTUg1smBt1Sh4acVC4jpGcdVH2uawVH",
  "key3": "4Wi5d1LT7u5if9Q8ECvGbRskHnUJ4NMcrPSnN5BVMyvd5gLenduRzeSA9X269ERXgPNhzGTUCw54cuAaW7XWpKTE",
  "key4": "34NpMfGBfBkzYbvMdyHFfrUsx3L87fbjJBUc5QL8Le1MLQsXAR8SgorqKWb6aAxCqm2KHm4TCSLx4dhkndTNXZVL",
  "key5": "2FnVd3DB5ubBxRLiNKhzwiTJCzJPoG6UXtSAwuc3bYhEZfcjs1RxpTciwnmCzugHVSNyTkxnSXtFxP6LSTENqwMj",
  "key6": "59ZFEQJ26Tjm6dRieZyGM3Zo2AjG9WxXpHg232mC5Ki5AknVzrrZkyCpNcmmTVpXVBoM7vFbdiutGWnLQHPNkqyo",
  "key7": "4i185uws8mB8U4xU9erDPKWkthM1HHCNorspWQUaQoqr1pRypzaCWcdpbsPLDJA3XJf5LAAPmygs1zLjtUYFFtCJ",
  "key8": "5ZxLF22hDkBY56aFDPb3FmFcXdXmaR9BPMAviyFH8LgFLYCRYDmAM5tCU6PYXY7HzAtLxncsUEprma3GDKBaimXn",
  "key9": "47J2T2iYXWWaACN8SA2SDhmcQLXr8xuYeuAQvSv6VU7LM6picsskgyvcFTDPS9H3HscDw7KSnHQ8TjHFnbNrXou2",
  "key10": "MbP1KYtV4nkktZj7EuiMv1pU96MoaH5tm3e4PrWYraHqVyfKW673rUwRCZBFuNTgWqpgkegEYkPsqPRMggAZAwJ",
  "key11": "3hQnUcgPMfTJwVAKnPzrnJVKvegRkUegaFgfJrbrU5Gop1fxJcmhqMvjvn69yExo8WA8wHnmJprFiej5Skcv99gt",
  "key12": "ZpK7uRDeMR4dFobQ9cRQLmbdey63KUCfrRKUU6G5tSL2tPdPbK9b7FHYSMN9rkZLr57gNKv4mG6jgZpXbKkyAT8",
  "key13": "4XBLup4c8k4wXiw1ENN7xTTJ4kseWQpvbCKeM5n17xKmC3XD8wrXd7QFeXYzZF3FT8UGMcNBxC85LmHN3jnJMZGu",
  "key14": "23FtW6G5ciapJWeFaBpqeUzbKeq1ewTFk6csxDaReaTXUruhzmLLx7mh7iBCZtrJ5ACB4Je8BsScrScDWDFucD9S",
  "key15": "4NXKXusMQpCAgAeKYNyLJpqL8ZHRTTZsCpmnFbRYW23Nfu4EcvXZCrWaJRfXKSwm9xCkEE9r4MmNAn3ASNbpUKU9",
  "key16": "QcKhLpyckY2ovSbXh8nY6LGTceHJpTUC4VKnXjRYtPVU3GSe49UP4Q4x2jPGFXe2rC6k4ZzWN59viFKNGYD44BL",
  "key17": "4cr35PRi6hcUC8x7eGzmezC68hdfgwrNRgV7EY4WMxiWwU1wjmq2qP8FY8FkSaqtfLzpgarBnDhTVyLQiy4qu1Xs",
  "key18": "2wok5yojqMacKCtqZVkWN5S2kmTpWcK3ZmWLHw8dxvAjmh8fRSK8qDpV2BqHJJzTtbWw5xrKutotqCSC23h3v9FZ",
  "key19": "55T4NXjRA1ujkdjWpjVF4WM4CrXw8sr6S9yoC28KQpR2mVugzrfaVBihStxuHH6WRcPGaNCbJB374TWiKcKuPdFi",
  "key20": "c8o3rwabaqXqe2nzC9styFKTGH6KH9KwznT2yznxnKP7Fk1VFyuW5WNAbTM3BAXPV6iUEMhSVsnchmQ1UQSVtxk",
  "key21": "4boUjBL7cxxrwENvwGNJH9Y6vc7zJbzTuyAHNJ9DbLE5sbuSZkaWJpYQrVmw79SvaWVfbj9xdHNGvFU732FNDe8B",
  "key22": "4TM9m8yTGZWH41Nmc3CfqUy3pHYZ15d9MSr9XDYKTU4E9uNabDGCEAnyfAR5Vfqj9QFNfPSsSFpemMsUM5WZtiUz",
  "key23": "4T1dKiEscJoA1ST56H9tJwuvFxWgneHiVUg52ffMu7WcNZfc48AvqPM6KidNqPVnqTyWe3AQ9LYpYZNJwAEdhiwk",
  "key24": "4EGSHHLLfTbFqoGUEwU3bN9jL7PonWTNLVGgKRZZt4zXy2Z7PrZSLse1w1ntenHgCeTjgYzEuTkyJN53UQkovXZN",
  "key25": "qWBjQigaTpHMo6kWinCfiyoqRHM6T5coSH9ZYhxXPGny8UTxJVNtGas9tfVYv9STPGCuZCockABMogNYWkBAyzz",
  "key26": "2EWb1nd22RZgDsuxgd6SYf5YrwCt5ySLoUyFWgAqLN6EpMagiPQK7PG6fn9P9VmBeijGU5caqPbHRpG2gtcNaiam"
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
