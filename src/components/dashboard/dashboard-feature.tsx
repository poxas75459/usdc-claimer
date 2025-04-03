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
    "3dFWCTKxE2v7ySqcPjffGdGNUEorhoaHHSTMWXsBX9bJQ5jqGTCXdtWnVJXD9cznRc6jtPhH2hFiL5yXbahso2Bd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wRibb6ZZYhYsaQtY35QjAiBo17WRpvvG5cQKsWvvZar61DmmJd5oeJEXE3vsTpj8RDzyxsUt8n5FLKJoBQHMBy6",
  "key1": "3TsTYmxDVT8xUV5brwWbJfe9bg9p31MQccdyA3LEYf8P6ctroLpcuetbyoLXqg2c2dr6ofALD7EB9DUF1eJAsk3r",
  "key2": "NMGeNHQXkGnpmcNrUqXjHoydZFS9YuEbvyvSbBvuZMkXeQrsCZfPffHtzm34TXSYkVXkVtLm9LqCvtRUi26zyJ4",
  "key3": "2i2fUfdc1HkrstsR3q3jWJeAWHDdn1nhDczRh4i5SpmKS9CnQooDoquVtWgCUWZuwuSJ8Ht2oXrLt7bxMsyjEmot",
  "key4": "3DysafDTww3icnbi39Vjog6TddLhBrQ7dvBnFCti16hLFbxEmfqfk7QcS5WB7ohHHuTUNrAP6Go5YuWY2Yua9BVx",
  "key5": "d4dnoQFeH2Wje2XBLMQ9czM1JyVuKb9rus1d3MZ22ALyvRkHprqvNTGJ45Sg5872sYTUH8xj5hVZ8qyr4Kcn4t7",
  "key6": "5zmzgTj83uerL1uGwMSaoAB12ZuJFVJv7D7y9whyKZdZU7rUxMZPYtHmL1TNviRuDeFnYKtZJchhmAVQwFYqwsrU",
  "key7": "KHx3TAC9esMpp9vRNsg5eNgdnuxtUr8ExPMVwtFRcqiMxnVaQk5hSxUXaY6EGF1UKZi6sVmhA5ks5UenazLRwF5",
  "key8": "2ENAF6THV546QFBJGobxqTyzRSXmRFuq3kyQUyxFgD1onopKZPKgTEeGUzi7szTQ7TQ6UKMxYeqvDakSrNK95vTa",
  "key9": "3DgZJrNRF5u6MRMe8JrmhqaLNsSeSWzff7vZFepx5jcgUKvZQHJWKpUJBryi92Uc73Kj7kFkpm6G5UviETYpCRwQ",
  "key10": "T2xARYy2QhGyXVJGyUzcn4QhvmkastPGqFzDbThxeeK2hCNAxgtbCU2DbSqvVLUNMrUpopZJ3REo5irZVcUN488",
  "key11": "5XRE3tJZQ8Rkem6JbtYebMzDZ3RAdY5NZrduXym4c3xtVnfXzHLm7r3456RJbJTbopJ64MnxJExZKfJYpwhGy8AZ",
  "key12": "jSLk8hZAMjUcxgiYXcqPwCCyVZWFhVbPJ9AQ3baxTnQne9bpuH6ETMyjZLfD72xqrvhDwyCA7q7AqqQDocDY7qu",
  "key13": "nsfUFTko3hWhzV9VcEVvUBqQPu9mFQwh6HMSyJebEG9zah2Jn9wqrgF6iF5AdRciJWwACCfLNc14Ru6vMB1gi3K",
  "key14": "2LE1RorpuTtBsAs1Hw2Fco5deqnrzycPEafSk6ip6wb23vAdWMuvvvfzssSjTuVAdeDRDT2R41xr484737aG9Sue",
  "key15": "3yqqwhvSNkzaEWKeEo83WAcbfbZBBr5rwQs67LEHPDuCXCiMKKTbQespCg1bAKf4mQs5KAnDLmY6vkExB1SwQjHT",
  "key16": "2ynxvqkCUQdR4WnTTxWUuxSutFbcMifwMNvH2MXXHLx1t14xBwd84gQZ1KHgUYQyQJqA8DRqPTFLCuRDrJ2bGeZQ",
  "key17": "5iCA44GHYAZGLq4PXfsF1bSAX3ncjNrziUEDWSxdUZHdYbRz2KGBk7A2TyGeNpA7qmPcXbU1w5z4m7Rg9dgoqex9",
  "key18": "ZJnJZ4MQqXzi4EuRKHAbpcLUkFZt1zSwZtrAqt5AA17Q7S25wYXWJ35W6oyAwKZ5ZyNUivuF12kHvyNUChYEwx3",
  "key19": "2uSTe9eQyj2SLdgVWCzz7D7pkRPRgpysrNw2TPP6yqVtYgurqpKTfc4c7ov23hfzjksf8i88rdzYTFpYx9kVr1aL",
  "key20": "4aek7Z7fTbwsqBsmXBJ2R3WHJ45rXBB4YofLt1MgsBEyKJSj2Jc6Bq6wSVzhnY2GsnJkzC2Vva1C7KbJXyoz8hes",
  "key21": "cpHvbCv9eETLniCttmTvqFTpxvAzsJQZeJTZ92McwaP2ZxBmRz8dqxH9qMv7WeoozDWgsmMYKm3CoaA3EUWr1aL",
  "key22": "zVdXjBVaKs3VEGNNTbYvAMs9fiwkHGexnxcWb49okxp5qGeMo4yCcQQLrYdPRr6UzGfeHrDLKXbSpvX5qKmcZYm",
  "key23": "GsNitqvajzq3nW7RrT1iHJs9DqHjZAU3dTizLWEyMk2ny4UDmHmnzdTp2Rw9qCqeqMCgrZ6gGTdyQSJ42xKSsjt",
  "key24": "3UxW1tcNKTfKdt92xrSmBT7dVMqFQQrGQy9Cxnxcjod98FzeZzCwDVnNf16ZJzdU8ADn2mXQ1z7bYGDHMsEybG4S",
  "key25": "3S3ngxRXk3ghJ1NJTJaxputErci1jqw81pozQAKYSGafdMahXD9eH91k9SFWq67naxvR8BYeHVL4VnaZcVHCDxUx",
  "key26": "3XuQEkuwSVFBckaXVuvkUV8FPVwWTHYmT3i7hMCyzByZdfmbGHDzzLfXG6kwmg4sVSHz9FnmfpbaLUiVWzx6hAtX",
  "key27": "3usEAfkZB1AQ3UyxSW67i3Fmfbx31nNJRWgnbtkSGQ31kbCeYn35Hgd5aEKfTUKV2HUPqkqaZm98NqVgydkHo1Ea",
  "key28": "25MjVu3Dm7tWqaiH9voBJLcdjVpmu4BKECJ24aUGL6Yv36HEMESxLPtSyKf7YKPQ6JvEuELQm2Mu7ZYSGqiEMr8t",
  "key29": "3Mi1qDcRxFMSWw6hfXgDDxYr4WVvj4B3MnxB9EQjHC9LwgwrqS1cm17713WCrsq8q7WFKz83E1YW2cCKHPPXsXs5",
  "key30": "2eatZ1e72PeKVRqM5H4qSLE5wyVQ3bfpWP6debfRmYWiY23gMMWRDGDFTeauU6bGT39CoeFpJwGJrEJfQBxjGd9N",
  "key31": "Ag3PcV7CuV4PxFv6QxACi3dLguHuuUWxHY2JANKaUzJjjMyboKWYsv3kunVpYBhLPg4VBV3etcZLKRH37fKePFT",
  "key32": "4aaAWiurX4VwCqCr9TfLoqEMZhgFYwdVBT5bWZYq37QJRsFe6vJ2RqjAk8adjNcSx6e5mGJuhnqbjaoWYCmS4Sbz"
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
