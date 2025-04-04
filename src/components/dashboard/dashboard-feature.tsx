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
    "5dXPjqs731zq2BAv54FEdpUFY4QY4uaLdCMzuNQywjG1UtXiXGKJDNy41Um6X9PvwpMPF5AxkKNLMXhHHMdiXEDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LAJNGj5B2Yhbzqm2m2JYTkx53L1pVhRHEFtCKjqZkMMzEDTe2zXmXzzK7F34Ps9zaMU7XSpHNXrUiH9mLE3q5cp",
  "key1": "3fjGEkHZB9mRHAhshj3cVeKyhbP65vAQsxty3k3dj17cd1VcCMwdNsvMc5zYsES1kkeS2DJEe8URSjJAYpMXCYti",
  "key2": "65TxukiQUq42FzfuZ6BsaJ8rZ2pdqUy1tzSu6mFj45uSZhD8a2WZVCSoAc1ksagiLK8KWbp98BWfS5o2Suf2M4iA",
  "key3": "3v4kPgZt8hY627vKfd6WSNoKiQbLRuSvGDDSoJddnLhs8Y4BuEixiquyQtS4smTJjMPZuczVXswkB6CCgQkJJM6c",
  "key4": "bD2eYTon4YsEz6tgV3gBfr2zJWu3FUb8sTv33Kk9bEBA783EXce97VNKnzMsXFmUpx19rQqxLpBzjJfvoH93NSb",
  "key5": "5vNKPi9krCsVzJPyNgL5AUU7Qixo6JjVsaPfVUk3queypUsB2Pkut2D6eYrMrH2Juz9XAMy9dymBir5F1vWyj277",
  "key6": "2LE94wGKPpTDRb2xJQrpA9jeRj68MxXZjPzR2n7jkDWRPyEDiGhbhPJLtvg6NqraAGSsBKXMMYjEAVBVFL216N9a",
  "key7": "36RR3inADBVsz3Y6TVQqyxsiyzhocjUr4LwcRYV5esjTW5yowH8wP1sdcj8v9jsWX7rvtxZ2qG2n3zxMruoAa8Ln",
  "key8": "Dbjm9cRQooV7t7K86PkvuEuQWy6ocVmwBfN8L1iVMktyPppy536uRPxjtuxP2A1yHC9ev2Rgv9VBVEfLna27Pro",
  "key9": "2JKYpGtxGVFxxrjmq4wwyDCX43aj3irGix8uvfZ6japkk91dXfNh23iEQVYQTHVVe3ft7cfKsW9FueSMQcxTr4gk",
  "key10": "4iBdpDAFesNYpQX8BLeZJNyQwGoVJXHw4atSqLHHnMTqxRCNweqtVsiJPHoQsT2AojF6PjZWDHeoyBLwGDzVjmUr",
  "key11": "2MndYcqdpEHMbSCnws6HnGRcwqe15zWdCw8ssWrQTLYZksefYbqKDBF6AAw1Q64Bm1TNpfntNPj5cxqwpxxTAXo6",
  "key12": "q3qbA1DmjA7TDvBGAiy6TPf5XUwZVSNuKh2LJcdGUuT6aNFZUYWUT33VRbeZGoDWfbdtzduPRtZKYjzsJYppC2M",
  "key13": "3pAdqRXwQFU7QK8iai3Z1YDCg1FhHncqAWUX4KU5E2VsSbgoKReooEH6grMUV9mjNPQKfVsBFpQF46RS64hQagFm",
  "key14": "5aBXQMiqnAnhaigVoGsr7ZU9rKw59Jqi2CoooFbPdWnzQ9BFKcXfbz7ZWjiMJ2Ev3CK4CQuZ3dpBEAUoBWiPEpx5",
  "key15": "kEka7FeoQbpVPdM5UsWLywTGfF9bqsq5mTMmb3bmaebUnJxp6FEMpeVNyYKHKzfgUoVgCE686HZFXQE8uiPaSL1",
  "key16": "3yJSEd36MQR5raLGmPESgTb2Ln3Zyp2KfU2VKWxVFNaTnjWAVd7JG2vgAfatXa9ZytZMbEryc8cL4nGLXKF4CzcM",
  "key17": "ew8kRQAeQAZZ1sRfB749mVQPG3aGQTpB1hgTnXtGWkgom3U7qeSAByTq8Ja3yyByvhsAPdgTT9q74JLAcjDcuFo",
  "key18": "k3Xn5zZna5jESqQEFvhRuzkwVmCsPU3ei6hY7F9qYhJbScv4QsZ54Hk3RnBFz8qcaAJnnQ2bB9RdUVLtpXN5ebt",
  "key19": "3X4MhwGsyNp5LK6mjQJqW2pT8tkWpP2WD1SFp4kprTaU38p6LTHbfv2hMBdtUgJVHuPF1gVtUnuWcB2yH29V82Z4",
  "key20": "2fhMifp14zKLoGDn2Ypc1MoTs8qyX9PPG6acrAQobKYncVfYDaSHDQ1aM6KqjSWQeVLsCC33bPm6Q8fV6hh6Men4",
  "key21": "KWYL4MeRLpPWhMVtrXvmmDbBHRrnEE77nwAA9VY5K1FPVTAx9oSmCnURsvDHoYuhYa6mDaLsEqQnw2uMZHizGVS",
  "key22": "5PWNF9a4busWyMjvFf9D1GjwUg33RhWj93GiyaP31LxgHE9DSCmCH5LSAR2WjT79en9FdKk96grrACcE1MYBYHwg",
  "key23": "3hwDfnnH3aLceC6dik9efqfoKa9oK1xKvyAdExsLLpb1awHqx8ax1XWyAgivMcsRNh6FKuJYaPLaymktFN7XdTE2",
  "key24": "4vSMd9o3sLxiQca6nWKu8nvAHMUVMhcMEqBJCCNFEuMGfEW7AWEV2pjQEX8fuK4VxTQrmQdUufJkZ9ZpxB8dvFgD",
  "key25": "23WWKkX5yjzzzE6VdkBq1tr5bCcXX3Xumy8p4ommmQGqTz7E8PrvagJiBQEfPswichAYYLcovUTTwLsJw7yXrbDX",
  "key26": "5ZqQfieJVNy5w7CCXj16PzYcsoFrdswiqFqkKuVGH3YFFpcEYxUSmRPZNofJ41h7v1aEouL16ahkZqB7TQBHqiim",
  "key27": "5hzscdrbFFAXZmzwqso6QjoDQHoKBkTPRAKgs7uszGgD2YjoESeEbk6NiGqETonSWsciiJQqjmXf8BuVKVyS7Rfm",
  "key28": "5RJGGPkDWy9oRFjrQreTW6FYzFcBpkM1hBFFJKWJHAnafY8c3mdFVzEgJcPpZ4JPKNZ9JDSApivCdARvTaqQe44b",
  "key29": "4ZquCDjjou1oce9MdDHjQphTjNqjgkB9u2aAm9xB1MR9YfQxR9Yvbj1mWZkmbx1jZJXGXDkQGBkqPdFEq49ZdzGs",
  "key30": "no4LwGk4yFHGHrvvT1MJWShQR3BhR82qTRh6KpDXtujfHLcnnDwqsZkw6zvkpNTNqXC5ST88g1q5j1GssEEGQmQ",
  "key31": "RaqLjkyeH3Xv6qTV1WJm6SmbKK6sqvrVZYk9cHhLMZDDeNrhFjp4snGH57VivU7zWaX28oS7ZdumYDgo2AbqPZV",
  "key32": "3JGjLWst7yc6RUv1tCMQCWLFEUAqA2Z4UmoW7wRv2TADF1mLn3XVYPnths4eVikkRRBMvfGupcBspgoKn2WTpsK7"
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
