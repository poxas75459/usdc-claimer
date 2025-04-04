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
    "4Cymaget6E6KDFhDxddZrYLA3FpcPik1NUm1SLF9RQ9dV2DFvXGhNfH4bRvE9bc7hM8r4SoAvcHXAVoamhFs9vN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8tZEEDn9cjQb9KeXgg2rj5X2pEH8c8qeeBYH3HEJsbDmFBjZVT3rEKbd12LqKHFwqN9FdSgB9LaQoEvnB8NhnQD",
  "key1": "58tZgmmdBDC2DwwscDsfQavHN9DNhc2qP5U3GpJSG4YvK7tEFCBoLB3zaQA1V51mQMBt6g6vk5SN4HRQrCf8y52t",
  "key2": "21RrFfUuTv6MgU6m74r2J3gXsTQoYXUrUtHQJxjuW8oKRfC2NZGPUyC5gLBqRUEjDBqEZ6KZKCXPo75MhgWi5XFh",
  "key3": "42qg3VSijMfTYKPTA1JXZtf5iwyL39Wt5zWh3ogAoxcenwD2ZTGFAQG4VkyVVFJdRCae6Nqde3ZAFxWpaUpsuomA",
  "key4": "HxXbMBXJNhyLsKtYs43CxPdqpVediP38xGeA3WFgKXCHDewaeorqzSfgxBSFCPRNGvmPC5RhUC9HX81s2RD5w9k",
  "key5": "3h3YUG6tZBH5B2WkEh5f9ZAYyNidphdLuzwtAacUWUwNASmTcPigdYMH712j6bV9meREntaSNibdm6estuhfd6Dj",
  "key6": "3KHT2Kgey3xvc49tVHUHQxCQNc5tR5nFbEeZgksHXBawtaodzruLJgbG9iu9PAHnoJGqSA4zZiQsUjJZB3zfr9zQ",
  "key7": "4qWxdE4JsnVcZ5Mzmsp2wpQLSyAmAhsRnTZeiTawT9eobdgLWHPZ22u2YnvPpFdtJBFshTaS2bXDuANDegUgLE8e",
  "key8": "4BQ3des9bfCsSb9u4PsNqFkp5hnxQJyM1QHHAxQryG2i1X7QPY89SZgbCQjfNFxzyYi6nqdhuyF2j3tZHbyCdHZT",
  "key9": "Ey1ztWq4CVxTx1nMeFWpZcdoqn6xRz8poqbxjF2XkZv4ZL29ciKeT7nHZPxyhQPQTaZvXh1vuELiTh2HiCa6XWJ",
  "key10": "3Tv5QYHCvG2wTkN34MN9xmVXxfmTwiDLNqz42McJTLCJVhm9isAJ5ePvNxC9rVtXoTmA1dgUWEB33CseebWvwrpN",
  "key11": "VJf6VKouPGTW5d4hMTtcebXrZFU1npRQPmGZ793zYinVBpxnDNqZM2QKTDkdrsS6fodC72tJZX3gp3y3LdHk3ar",
  "key12": "EMcY8MPUytBj9c2X52Chk8Ebzxbm151idw32RivZEYrXy83mPi812sYQKk4zpji7vMLf6CLHCmCgtRDEZoALaKk",
  "key13": "3HPQiBrLedd3KMZcwz66Hf8Cvz8fJPkpjXpjqv9iXf5KwfUkb7muvuw99r2L7gPwdRR9kSyVyddDSa4m9gGtxKMc",
  "key14": "4EwwwdKTBqsx4fvnif6UuqkhC5ipdjYMBQmsSeE32GsGw8zNJH6hXAXzNKuUwDWzRqQJMw1KVhCBGvnzqQntUPwS",
  "key15": "5mB9KdxmGXCYHCBGLpMHo6B6mFPvnLf8EHzw1pF5FKUjxTJSw1fi99BuYSQV4efQ96ugpcQS8Nhtm41E9saj3D5z",
  "key16": "2rQ3tA5JdrB7fwFa2YhSWP6LrdUAtvUwqxBH1ujLPzVUmGEjUofx4xeUQYgMhFtwBS7aGQBCNvmHAxS2Sm7RxqtJ",
  "key17": "2S7Hgt9o4mUfpUZ1a8FGuVbnVyAT92vo5Ef17ACBCVxusmf3RenZxyVcKLNqvZpQSsEJnKEKGPAqxUCCgFNXJnT8",
  "key18": "2ZWSZnHfqPW9EzpxuAKucsxpzMatBrWbWUdXw3WxhPJChZiNu8HfwFH99WJxqwgG39saoGVenqUEz39wybeZCKGg",
  "key19": "2f5SBXKJkoNBoKqtp54xvTzCAKidmdGGqeNpSngmVAEbRMyMkegtGAeZdmgqoq14JzbY8sU9rCoopg4n9vkq3sDp",
  "key20": "21paXuUZxGDTp3hEJTnvPk2rRDKujbBZ9puiBubpZtU2JrS4PGnAiATDT2Mw1LV1nKi28bVyZM8tXv5XhCBNgqii",
  "key21": "2P9uX9DHvwMUesnwoymPtQSBF1tMK1iWnC5C6XmzByx6ax4kJUeCe62bkLNRYjVtZR9aBk8nbbMzwQPDXekDUncE",
  "key22": "4oDxDMXxZzwQiJEsncpygGcqHydJzHqrnCgMPTDTA1ZKHDVeqxB6BYF8tdg1Sxa1Rgt13ZmSSBuPoYbCWER8VvqR",
  "key23": "3bRvakrJ1VU9YPU1kk7d9bwLScw6ZH9kpCQyfYdHKqksCbHrrq6cBaKR6zJJReA6dAwTEcdM7gSGCNWcGDZoaH25",
  "key24": "2ce9kGfoMN3DEvXF8hALYQgV8MwqmQkownzERyGYLg623JgEBPNqh9VAmZ7Tq5JBEsXo5rLC8e3bwsdDWhDzcwvq",
  "key25": "2sFvwDUWhoKJ28hh1mJrTC8sYhob4qYGynmAU9UWWmwxDcvZBETMspUM1Sik6apVyXCsipu1kWfEHeNLysnbRAev",
  "key26": "349UsvsXPu9cNSha6XSuLuPb2dzNMR6DxrsMGbUM1WLNgnCupAe4Gbx2nmCRPFujDB4UYwX7VGUoxHi1dxBViJHR",
  "key27": "qNRFo5R4W3J4DboKePbAxRM366iLz745kTxe1jewaGffiA24yTRjXcwe67dWJ8GxSH9XbTmEdoAE3uxF9tbCKAr",
  "key28": "4e8VjSLVFt7xE2h1fLrSWPZTunT1RBrge2e8yRMnwu9HrLuXQn5fKT7BAZLKq2U9WmaVBDCms51HKktSPiWUdV4D",
  "key29": "4PjB8oaiXspBcqqdqEkyPoXh29DtVEeqKMaFHtookJ5ycRvt48eyXt1BzoTf7CL1YhW5y5iQmc8TuvCwR6xKXAGf",
  "key30": "3A3UpXPvmGZ1G1CA6DfXgU8Bs72vduwicC4JdYrn1cU9KX7LNqjcPyShowy1KzP8191SGtd7ntN8pw8qH9KeGUU6",
  "key31": "2aSfo6Q4ZWDHgh1qdoiFQypRmbUcDpqZG5BhVho8ZPGxH7GK5NucVYGCXDLZodGbSES3iUiskDhDiLYpg3vUPXt7",
  "key32": "5JZzHRPoLGBgW6e56XAwG9PwNrjtYmRhZhQknE5pU1E3RF6MWF7at7XvJDhHwAbEzevLxaC7fcWK6UFYXa7AGjrj",
  "key33": "tcTciVEzpijitWLXNPJZWqM7cnY3UD3st4kBBXZS5SSKd5PDzZnwSfvNn1JDUrswehtYKt243yM9AFtr4eJWyZG",
  "key34": "2L67qieoieWBFnNaMXCp8QRbMBF9SgPcvFHsVYFc1aFXBgcuDJSUQd6r9xDY5CkYFc7MUDeAiqQHAREuNUNBzzFT",
  "key35": "2tMRVo2tbQkzHca1VfY7Yhd4JBH6PPrrqVA7cVi4fZthvSdmVp1FNCcv9pSkCem3ZA4jbu1QKVwCjeJbjaXeumak",
  "key36": "2HbYrizUf9ojaUX9TD11iyFUtcnKMMtBYPA7YREBSfmEQNqs9abTMjFGvPrLbpzWSEq34pv3c2KkwQrpuErkK5AW",
  "key37": "2bmqojbJw5q2u6rEZ5UrWKDSLmWtxsSrSaMcEqyr5qdVtTdafQ1JmTEhP9R27GJMi1SprsGzuDFUyWSYV1dEtCXp",
  "key38": "5zh7YyHVBXEYSfYRqm9GhYTFKhfBp5vJz54P3RfvpJ1DDWZnuhLbXpPzL6TvMTFbG8m8qByRgMNA5JfXdPyuHqDG"
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
