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
    "5EWuK1xxBU4rtzexzcnQ9LAD9XUqviMv5UxqRXEsY2bPghMFtd6NuoRVXU4iWfUhu6H8gkgVJ7UWTepxnBwBbkBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zDtgPJEjJyS7vGFJ1uRnxcsAEmASEQzeWFzZUbY7C1BJxo6xZbSuWi5iFaGchSCspcXTzaD1WQzRHBdN86EmQYS",
  "key1": "9MvThztPk2mUPXLBNTa7dFZ5PMCrcabD6YNM3Ty23oEjhDX8H3tW2BnDRVfWcefLjMTGG6UJkHgRMjWhrGCpwtp",
  "key2": "4FXhfe6zf7WZiC1N89PqBdoCMiRRp93jCVEZ1r2UsHxpWfrnH8GwPi5G6ce72SetTZ9NMydFKZnz1gjsqRYFiCu5",
  "key3": "33ekbgcxD6BEque5G2LLFywgrLwz2jzdAA3Zan6Npsm1L1cPTtThpTSrLVmnS5PJVCcVSNSSz8ekfgMscSUQUU78",
  "key4": "QzbdFsyyPMRe2RgZT8PdmGXXKcCXqQ9wgZNkJ2KpAUXjAAQRjk8NbY5tWzzxNvGjBTfzVnEvn9GvbVy92Nr3zhr",
  "key5": "FV6SMKL9kmrZsuEkacX5Q1LuNQV9zo9ZYZeDsCCqLDeSNig9G29mJMeNPawXzqfr6UWxBs82H672kTvZZeqCdhH",
  "key6": "R3xiBrC3QBDVUjL6o75SmjZC6d8khq6JC5VivoZU4iG2VqqJquKVbWqhcWsxyfgQXocRgjBxRLBQmJebFXdbXtY",
  "key7": "5th2nUk2E4iup2kv38gfHtnmKSd5mrJhSyHSbSKhJbB3WQ29bPSHHev11ac7nPo8DNG14uNrotvT2hd4zQWcMcv8",
  "key8": "2WwF1oU9XpT3QzKdv5sMWCrxKQGzjVqckXh8mQhTd3gye9ijVXeaMaXCDuNSR2eYoMxUsuFbxS6MVwrgPizvyCF9",
  "key9": "4kGvcrnyNNEusReNB4WafSK5ZWjMrtwurq3ySGJ3uZBiKUHNYLGq98eqEKT8SU3pmt6p5iFnfY3TYRGKpvrStSvQ",
  "key10": "61CxcNdRSwxnMR4YUbmau2YXi2jpQjW1WfcCaLLg7aAkLQ9uRss4MFPny42GApDp8XRjEu7tSzCR5zfUUZBQA6xb",
  "key11": "3V4apk6YYqkA6mGm5xv5MXnveumdtz3iXpdU8jmS2yFRahAqSsxELkghHmyWREybjcNX8NXgPo7E4qQkZevi2fNT",
  "key12": "4PDbKryWEXnwWurH7jJ2py9giuxdFtDPHcpAdi6JeuRtQpimGpY2NiPABygFxuVFHfX9myxJDdginQFS1aQV2EUq",
  "key13": "5ASePtysHKvVPas3acvNbYpkwqf8Q7wTmfV2bQyAUEbTHkheUAJx1dTzDJC9vj6c4DzBaQhdYf2bJDs3BVyE259G",
  "key14": "3ZrUtWKh4L64YeRDzwpDwN5ZaXQ7R8RB7w4QsKE1n11xmjYeFqaE7W43dDJTN9Ymh4LLGFawitmf1WVQWEeEbGBf",
  "key15": "3ZY3QpsthzLGZX3iEj58JvpiLmtGCBY64cGgJ8QGH3w8cAgCiUVcB7NsVexuyFpvWi9iLnUzwXLchWTWogU762uS",
  "key16": "2cqChhPhJZVtUi2vuZfnHz1BPBnTZgicAWdeoLdJ5Du7f39HWtdES9uBF5kuvsPzBPAkvNtSTbgKqSsGEMkrBSrq",
  "key17": "49Ee2uQgkPtfRwS64fL4ngii2Hx9z2sawEBjA5De9G3qjpe8b1u49Cb58BYNKZKANxnfGwd1JY3GhAcW567pJjx7",
  "key18": "44gerNKP37E8pDPurUAnhjAKjyMUAgceQtvtv7ZGnNX2s6pEA7ZtMUKW9a3k4QXaRmaSEW77ohA9HFhUGEicjwdm",
  "key19": "613fwHCxbqj5SU8uzoTPVxUucsCbmQWvri5d5qYxxjqTfcJBF9SJqhPB8mu3iEorxN5kByaDRBWgg7JgR3kQSYXZ",
  "key20": "5ssxB4jrtUYsNsMcU1ekyYT6XEy745E3YivrqWXmo3quQn1Z2QhJnseyWMzmS2QL2VbmsjiCXzKLp2iugjdQmcJq",
  "key21": "56kGLKVZqhExRCRdrWgnoZmnhbQoBgR29NwmAeWsdDsSKLaYQuZvqjBY5T6ELTuDaHgqVBrxfd1zXYDknVFUFHfX",
  "key22": "47cMb9GGFTQQPmxEJE4dv8GF3i6YrjnXtLJD4AL9qJEFLJehR26KnD81dYkonUYEWUc1rNAXFn34MZxNk6Jr89Mh",
  "key23": "4wjNbc5AbfNAwips1pgyMAh9QZ6RDcTGAmWJCqj3THJr2tHJXH3JwFBgB7SrxTY6hpUTHNcNdLex5jfeDfyN9aMd",
  "key24": "4P9NZRNNWzQBU7PLgxJVuVWPAj8pcSpPFhXzD5nwfTQ1xRLJ3RrtUMomkxBDSgWAGasRn3Fxz4MNxAnAdqQecRPS",
  "key25": "5ypUgZSeyemn6YSPsNfUe3E1YSCdCu443BEdavw1ciX9MAeqUUz15CYDE4s8hFMA4hdxoNhT7juatAvYRmH7Btiz",
  "key26": "5YEvrQ6sZM9XLDZJvWmnyoghUd1bjm5GhZTko63JFs2T5ggve3ZLSbgJbA2E2kEFSxHBEbWXTkMhgEZ5YB6tuxY5",
  "key27": "35hdvceUjWBvyKMvMtrRgzHdmo7LQCexWtBvqpJCa2zGerrUnhbHKV4WoDYnY3RS2ybNsksT1921dA1TVVZdHobn",
  "key28": "5isZiMzD6vqutpns5XMc6PUBHoVJQUwSMPNFX7AZj2ENT5Z5nyPiF3ZsWVKtXGJA32GPRk5c4LFsDEonsmfdJFhZ",
  "key29": "4qkujJVGs5F6MR7KgyHeRXB9RXYSha34AcnmTtMYvB3bPJnHWb7x6gCeJBdryU4kiXpHdfkkG7XEif5ParvXtujf"
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
