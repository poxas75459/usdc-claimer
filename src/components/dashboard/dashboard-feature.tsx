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
    "3KduzKMXUvqxJjinf7PmwdwV2cKjthTuqh93qDBiAUAjBLQi1ThMTrMRk1BEd3YujbQoE5TFFvoabN6pD7q3kiKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "223qbyBEBmR4fe1FNK5VfzPfQSH72ehzKiiCQ4mhZnQ1qsktuH9A8BX9CF455b4oudEwmxV2TmG9XVyJE4RN8CBZ",
  "key1": "PnxHL8pHDLJDBptmBY2j4S7JRt3vu7jvnGHwv8FBQLYcfdUb4yWpBuKxpy6zWRMni6mrSxmeMR5J942pPabJi9n",
  "key2": "Vh9Sga4D2P49iKFtQkbaZ2q3k5CatdHGmhzmBk1PLG19wGiseuPqZASVUjbAFa3WdyUU26vpfM4qxA6j2vpqiRY",
  "key3": "4pcHMDjUwX5aeEZewuZxgfqcN9B3o2Qzu5jTXtoJmBNfSJmpaXVbJRofcRgVCGCrSC1vC5grGWyQrkmSvHW3aScL",
  "key4": "2Y7M8pF5zSSNkzXgjvrwrveRHMfPDXMuV9SoNXQaq3VRvTGSU5GjxR8uodtxEuZuYQDLfAdYJe1FPB2RZZCvUxvY",
  "key5": "2Etp5ss4ta6nKEaqpyx4Z3JcXE69cxDWeTpJEq8UJNNuNhok7LF33hJFPao3wDAZgMgaouA5kWXQa2eBkvwZ7RkM",
  "key6": "3ojUsbdsffHWF9q8YUTeiCCReW77LxiTrQjo2tTG2X9WTmGQUgccTb4cXJL2KGFaEdj6KGVnh4opktCnTCJhJJ4K",
  "key7": "4sQ8AeYKwi1zpkKMD1i2Xw62kNHr8C35ZpYpcDQdyRVcvK4eDWrw3oMNU7EVCm3cXJwQX42gKzSHU5QSV98wHPbg",
  "key8": "3VnZPTvSKYGv2ELJwavnWwYXzJ4ED8eVmeKhrcLkeFAKk2ryit9r9uWuTkk8e8EDjMFkH4YdPxLSEdmGdkLtpQmM",
  "key9": "wScwW4daoPbUuBRo6PEh1fWWS89cbveVm2zhNWtvz8vgufLiZL7Gg8mJLNApBnZ9fUsiYBDTqGga4scitG3FE2s",
  "key10": "HEHQFBu7KLvfxCGyUMViu2hUAfAq6HckJ3qonVs3H2wzBZWsXezMNRCMaRBaXgzr6iYgEqLrwHvAfxPyQzcPqMc",
  "key11": "23EAfJPQaMprYh3yubFSGKdWNnH7h8jTysZKHbgJ6PwU4CkGqT2KNwt5Y7qbjVuGkcPUxUAcS9ZRJg6MNtmrsEet",
  "key12": "3eRbkt4Fg1MmPqw2raNhnXVL6A6Nq9jSmeGwJ5NRekBqKdaV34hmYfnM1DDCTZ9SQfzDN7CBd7jCQVzmALfvtv1F",
  "key13": "3FW3qUy7z8EzL9AbaG2jehsYMR59FJWokmygTKNAvQ4tdeMjURm1S8dHSrxxgGo5ChoWSeLi8xseRXpJqRvEhmCC",
  "key14": "TkSPy3hBxcwXvoSX5Bj1BxURHCF9hbpvCctUp7Yzwjs1f3kGnKzmd5w6EwjAxnVBUXuuURvZHopFtwDTf9WRbeN",
  "key15": "4JyNwAgjJDGWvNctgTtv3q5ncm13uvozBQqFCffe2beJb8cs8jSkzS9v44yhz7Fn9YxpPMBNW6E8WdA5GFSQx3TS",
  "key16": "43RnUuixNMSfJtSvwjP6vYrgkMgaTWYFgpfKaK7trNP4fcqVfXfjaWXJFbP1UFpwnJhQEtir9vRSTyXQdi5WwCZh",
  "key17": "WyoGCdRb2vm6Hy6vYb44SRiMyzLGCPg9haWXc6Y8wNaWYFufvhKiVxGdVTZF6WDzW92a2KLd4gv3dentAdiQXDD",
  "key18": "5uX194s4bvRL4m42ewX3zJJpvGCpqrACiwWCdUrHUk4wmgatHZy2j9s8WVtiqGnhbiUUvizVzkbRi6mBw6vhij6n",
  "key19": "3J1q8Cc8qfsXpxPfcXVVSsiTzS14GT7JMZDCe138DyUHGaPiaFpUoJYy1cedZHRizkUFqzuFxJfzM8GGaVu3agKT",
  "key20": "5GXLFfKM8BBgqem21fXmeAkYjPDwHnpMEkqTyopKEdKmDAqcURJjvRzL8nSLsA9wNzQhhbBA7icEXqSVFYmwYUNm",
  "key21": "jiKCEmqA9Sz7WVqx7ptGpeQ7Rd3zJG1EjVgUsVHvv9X2C95TKW2sAsR4EHgc55oi21tUHbpYS6seWsoXRy7ymX7",
  "key22": "5QSv9bSJ99VbrnogdzjPcsuhFMFLZXTZq1LYJCtq7wMouoVjkJjejtrHmsQnLVt9c1sEmvrBdFfBwQrkyqLvFpyn",
  "key23": "DXUejoZTdBhnUWZ5kcXFf8sGu4zYnvF9LQWNQKWAV2MmMK47WSgnKRDKh32d6hfCXZVhVGUwRtU4sV7wuc49RVY",
  "key24": "48AuZWDQrNw3qkXK8cfyADahVqM45VP11G3TuaenRem13hSVRdAniZFG9PwDqswsr4EwCfWa5aSU3YdNf3rv1CT9",
  "key25": "bfo1Qo6CPupaiV2PrkkRnzASEvZqj7yLBkrPZ9axWoABfPLVSNPh8QqpM2tnLaxMQgMKoaxgrQKdWdrni8UXSJr",
  "key26": "iLXwpP8V43EwjoCb1zcQprSnM2guH4DoV5uBLtUuLL4hSY3TNeQeT2Gawy3mhVcwkhCBWzdJQxWMzVjmDVWGbUY",
  "key27": "TZjUq3k8CEtG9ZApVSBrc4XM1oXpKj41Ynpb6Weyf8Df2tavCmxsqGwTSeYPjbX8gWVXHU3zXm1SYiLTydHWgNP",
  "key28": "24TfxQopfr5tLWMczKKmBfTDriUrRcXaBSxanVcmPEyUGTcw2nMM9CCBnjKXDqZowniAz9N64FXLp9R5dE7mh1VB",
  "key29": "nJAqpqzhBTdoxuiXAwvKJM2zULw9VZHrtJAC568rmgboDw7a2soixAwqxYRmjiEdKmC7BugMKh6BCpVPLL2a6vm",
  "key30": "5yPQAuzbBV5WCUY4DCDB4oeE8vNcJZdyH87NoVELiP6Ha55pvvMqAmNwLa7XZ8s2jYqeq68Qf24W72oidq6fJxCQ",
  "key31": "3KM3JfSNUARK3NSNcgnetVRs6Yak7zZJnCrnzfL7hc7EHG12wqDEXpYGHAYDPKanLiQRQVELeJrvCg2gs7kArwEg",
  "key32": "nLgeRoTKgSf92vVNgtVi44rqsEoBmkJZEgRryhJ5sYE1Ny9P7pvzfmNCLJiq4Efv2HAxsmBykn18haR84trQz4S",
  "key33": "qN3nPxMUyy4XPj5vm218AejTq5nPVcnvdHpAWPTuV46Q513W5bar6bQTLRo9irocQQdcD2LSFt5BVPNnLXqkocY",
  "key34": "4qhzgqSEB98VEuVudn7a1fgYnMJ1Wx5BrdpvdYbryzn7Q6SQ9y9Gby1bnwJGsX75By1QW6w3zQpEAUZGq9i4fJp5",
  "key35": "5ozhcLmEvphaFGh9dKtapivnqxBhgX2Kvz8bWDScsvDj1dGsTLy7DC5dxHFpKG4957nvdofkrVJkQhYNJxQyDA7T",
  "key36": "VGHvzpj5wxF7uDLUxjdwBJV2tN95f8a5y8VzvxbshjdHShsoBUQTR6GMbTpggKqF7Kj4dk5nM7NxVNseuc6iETR",
  "key37": "2n2uRZ84fw16F1z5yNRUW3MyD3G3erUoCZEgyWGVbtDE4siQ18seS9LoJPKCg5qhWJQGgkqzc7ysjcqV5qQrmeQG",
  "key38": "3t2U4WPQfGsGsjVtomvkCUL738VtoNjueJxVXEwKtWqhjuWfoJkhnmkSgmWmpki2TtEUSLfwVuPWSpqC2naanEr9",
  "key39": "66QFNrDFexFLDLB2uG7DtfggQKdZPRZ5VodRnDx4Gvu9soouPGecpfCm6AacfreUGN1FwT6DWCABNtCRXqDm6GuC",
  "key40": "5daJx6T91hGmg2iFp1svoUdwa2zBqbzExYyhK3rgcSeVaWB7WjwL7SKyc6BXXVvSzaRxkUSgh9HGnYYDnMwzJH7v"
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
