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
    "4EnudDREMPKrSiEDBn9FjDmPaDj963uAfTfBQfjQ3169FvndZFK5QJPhaWnCUiCwYJGYhbDogbhDhE58KzDEvRcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xt4cosPxyM5sEkxVR6cfHTxGJA3rFqgqwhoKF174b7pfdwboxy3caheTcvwVyGbYsTNWBizzD2Woa8gaafk7pVd",
  "key1": "2QP36faHU5Ra1CPpqurM68azwHXxyyQrmsBFSyFNRNjkmD3a7BZbH9EPcNzWZ5KbqrsMYQqBogDtXcdZ62bmuQvf",
  "key2": "56i58TxDm9hT6oTHXytGapS59FuQysbs8a1qVJb5Lf7Lp9tUo34fZcyHYNCyE6JsMnNRvXoRXCvpBdNWDBxVxcvT",
  "key3": "2AH99DgwHNhUneYtthMNyHSFNvnvn4dLvaeTAewhNzcg3gMJ1RuiEGS7ENKJNujqvCj8DBMyb8GE95ErkxwVV6ze",
  "key4": "5TC1cyL4jccLo8AKtTa63judMMjdxNZ69RqGrykRfmpvXUDQ4sksjCcNV6kMNoaugtw8DQzEeG6XSg65hr3dZxeo",
  "key5": "G4TLyppkWnWQcTMPKAbrB7MCZZysT3E4D9a6iF5REcPxwMEjzpPNwx8H5znqzjESxvfCohoL7mpwPDcBYtCMbtR",
  "key6": "57RK8KT84NE19e2NjhHb5DnUdLje4uvuC7iUbpKNSZYRNbUFUYHT76F4q8jwoHpTYhmavWskNGWtMRk68A4TXVtN",
  "key7": "4idJc1K8NiE95mPCzBg1rdyBN7bzxKzKq8zxpZ9V4aC2rP3kcFGzDnuPiYHsQmWLXKe18CZxB5wacjHd2WRoPtKC",
  "key8": "5PmMqfUcCJHgzTPiSwUYKpRb3Ra1i7CSBjtV5KzJeBXr11ZC3HfGPNTYbd1DK7rG9iLXrcrB6VSvnWUHd9tCVobw",
  "key9": "3czCdq1imYeGUvSQC29CHQJrCC5kF6frDdGNt2qVqqL51DDCtBaxWM87wqGkh1YejFp1kQLLjzQW82JyUnqVpBrm",
  "key10": "Tpz9v6bVT89NjAcFKyVfQyK8mHK56TgNtqY72QPE8Cpzct2UBExetM5NvXNvxJyYfRLiHWMF4c4fbqHuuA5Hdxs",
  "key11": "NZ2LRBqeJMCzedXo6oGqtsN9SuUoCbhd4nR5sHHKU2JH4PrNb9WneTCVK6aM749cgpuq69UCJ74yfHeGHBXCyJK",
  "key12": "2CBQNkyRLQtTs2eCuJLXurkDERNAfF4RLTyma1yZ4gfuRJ9vUMxuHLxXVFj8idpjhKLUwVp6QUwfo4dReCPJ4if",
  "key13": "2XW1zKi3dzGLtJzuXqfFUHZE9DGk1FNtQqKVWvSbcecGs8r17o2MTaE5Kgfi4L4auyC1MpeFtLeAnhHqMC7AYdwD",
  "key14": "2FamHaRZfnTcysthoARyJAnYUH5onXYcuQ1xrVsYrkNt7m2tXZgKaqm1FXYrBFGmMTBnPtkfzDLhLmmZ1qg9zEfr",
  "key15": "q1Mo6fmvj7sC66hj5y1w2nyWkRyonWLkG8YxWypfMKaKFrKWV8vT4Qmtggr5FUw6x9rdXFcxDC2GK9rRHEko4A5",
  "key16": "2A6A7JQwxAJGnpdBF1To6LALYsFGDTZeFkMHsn6HESGjGvS7j4RziVgQ783v2GRgQ3CTUDHzJU9CGM4R5zmZA5aj",
  "key17": "yDLVTEMtWWb3yQWM4fTUisAUiv6oCqAdtW9m6GtHs5mRbbgSmcVt3KZyRy2m9enVMyWAmMeXvdRjFbSqUTeVR9e",
  "key18": "3tuFatEgaqRAgT4HLZBePUoBa5joFVQtUj31vaTDQ46BQxTWxLmYbB46x5ZzdSqLNWaABJn9APUvx9diuyh5G1NB",
  "key19": "GBxAfrS49X8XFigojZ8iZSERveZrywEPNocMuK739Ba4vekYLNh2WXd1AmpBJdjPURJD5fhdZEgBu1p7fuCf3HZ",
  "key20": "5ubFaunG1Fafkgt6r1mZotfm1ofuZUjwv5bbJfEnLHP1ukxecExwgDyC9spRL7veWU2mdkRgBCadnom4XGhXTs4q",
  "key21": "4QWepamBwiGzPxXTQmPHDGXbJjJrGkUBBpUnBM1wjJKvDYwkJJ4prPFj5oS1tJxuV1owS9fSbbGa4DZ8yAoPwR9U",
  "key22": "5Bt9a4oqnPKH69MEsqMqNmaZaFR75wndQgJFckdW1zaKv2RukisKx5nn1qhASimaceq1dMkqvY9SnRBKhQePcfNC",
  "key23": "2Hqiji9vXPSvS25PSskdsFdpqcD7LB112yetTJComUZ8jVvwEj7qPyo44efFTQ2Paz32CFGavQiJsStpp3xEiwjG",
  "key24": "5nWkymQd5aZDnGyEXNUMRXQwnnfrNBRGbBe5dKetUxuyP82CgeBpnHycWntQZseHafWWZH8ZDgAwfUxgWeutW3Ze",
  "key25": "3uJcrv6DBBbB2xLMDkKNvdX4eGLft3Pu9AsEi6YmDrKPrZYsrRWqf48o9a4ygHg8fsnPvnZzNkTpkW6os9BixTth",
  "key26": "59xrFwkyFCLvaR4rNdGSUQzE22RrgMrCzM1s9yngbqYvv7kfNUaZW6Dqwx7VR4YjFEmVhwMfF8DvjHHVQfiXTwb8",
  "key27": "2AMgpmg1mNSbNvB5GpuhGQ8mBEMFa1D6BV73GpifyPUJXuWm97mT2u4BPEEFe3FxCF4cntnCE6mGqFybDbzUcHzq",
  "key28": "uNHKhEnF8kUbqk7fvbWDzCREqo3bszP7EwBK46fiYdbsk4a5wM3vqFU8sp8CAFqvuN8eEZ4boEn1ScWamr4LFzJ",
  "key29": "4MUQEzPrb1PMYKt8xuyceNVWo3MXkh7KSg3beRkXwgHTb4sGBMgirWV7t7eZcUnyzuKabaik2yYqmJLDdgpwSfBv",
  "key30": "4D8UDVYRBUvFCEFmx6PPf3DmGAYAygcA99HXeYuu9Jby638hunDvuyhRGbH4LFLq3dPZKYFykdpDgEwwzfR6JshN",
  "key31": "gx9tXwbby6vX4YwZMQ1HseV4PoNXm5hVWS7Ygg4aKgLehQkmkZvvsR4vLVrMATVYZXjjNaQzhjChm3A8CegJCHG",
  "key32": "4mP3nZiEAigzTThjQLvLCJ2LaguEy3TZCR3D6EyRRMhZoSv5BhayckR6p33CzknGcWp9JfjpfDY1vyHvj2s5isVQ",
  "key33": "2KXF3VtVvtCdWQf9G7sYKu4iz9qcwebz78p2qNwUwpra6nvkicgtU23Ath2j5KccE52FS8bdfDA6fwU7hSzFxWfP",
  "key34": "26fc8v9rdouRduvXaDLX8nHEEMPi6zc1sMTKbyGdKSxwE5kp9vvGt6ZJvABn2HB42ZVT6kEkoXtffmSoBPFhsvbg",
  "key35": "sBmwuK79zCpKeVeQ323wQ6uA1eKzRTBfgiVJ5ue8oWpGnn1ADYUPFJ4C9nzYV62zaxUuGroTdJemxEjmfYc7fiU",
  "key36": "3o5QWRb6TmoowPqQrzSbQLoYtDGwyRQLWg9GPB8D3mYH83gcnVHv8MFramNc5JCsJ9bBfjJkHJBj5F6PnNHJNQdr",
  "key37": "3Fg1THiQTVR8UmaqVs9rmWvp2rtA9jQd3kk6o5n72dd85qRJfFhxiXJVMaWbKFuWGCNmy1JJjmSXeD1EVhWDzGyz",
  "key38": "teMB8Ys2Wi416RCjAixvLQx8s4atBWiYS3z75g55xBECQbZrHwKCx6qtuBYx2G6VzYoTYSKE5mnVMgNczBHPrtT"
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
