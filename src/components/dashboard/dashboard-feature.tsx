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
    "2FLWkn5Bn43a3Ko68zM55rCZkndyiL2oJtFJS5DMhw6Ji3SSTAUQ2b3fwhsru82wpk8VaX5JLGsaabttFZzrhsvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HbUcPwdXk1TxXS75Y6R5SgRwq9LyHrAhCGRYy6JqdUQjvvtQzAi9BLHrBDKAFZ7qWa4vwLVwXDXmhtsNwAF6g8c",
  "key1": "4VWUySuxX5rKEHCj5R9khFdqeExheUoBKgk9ieHvp4HZPN1TTmDsiYjq6ACU5cTzVvKEXARcRG6gnRkfsZGLFQuP",
  "key2": "4HdbfEMJZqeAx1YypNbnfZEkLQc1yTFwHWSRABJu1r1mukQ1g4sBAooShFWaAQ2ZqsawJUfwLyNwtLM49Uoeu8Z2",
  "key3": "4TK1wT8xMdYYTk2mhR4wTwHEF3KrZmQGEvUXtHThni8T5bZfEZUoPgco6HC9GdnsYJFxS5vVi1xHRF5ybFGraG9B",
  "key4": "38MgxsifWiUqdFMffo1QLdx66zRHgAfPQBkc87q44JsNXpKE2zxXxBn9NrZyPvL81Q77ZRkqEpmJs8T71MceoTzp",
  "key5": "3MZhTNvtMLfA4s9dgbcyhkc1viPYFy6U6ZMR1k1CZKCpaaPCKfmd1CxXoThowoVfRqSrbDsQugRWW6GqwMiTCZ5w",
  "key6": "39g3zQY6B6t5ZGJyuXBFpwMoRUhHo4yfoD3S2N5pWRVDaU1nFozKiWR8GK873dD65eguCZEK2MLh3H3dCsHCnBvv",
  "key7": "4wJh6RX7CTsTijFi2yrU44ZTtp4TTxm2d5PWbcTNkPv92hmfcgL9ZbZVDzqcvRu1c9x3dNLg8deHPTqqE2uqWZPd",
  "key8": "2gLuABQMw3JvYJTwLvDeeLmAbiBurRqBRf6WBjF3D64uvuqh36n9wJa2JQ6CNNzUj5ZBSqsfrosKufb3KeWUHdnv",
  "key9": "5Q7gEDw6xhZ2FnQDx86oqKzB8gNAuxfdWxJQbutnvuKwkSMYfNL55gf3VzsxG1DJd1cXhm9439rroQZrBCWfX8BD",
  "key10": "brtkNRUjfdpqVU6xMK7QQ9fjZtAzjys8XZvHgrcr2A4PuXFcjn1Ar2xMpUTviN8yk1DHqUyJBgpa2MEWCkHahc2",
  "key11": "4991JXckzQmGmSpqbPrXeEYBWPmEFTDCmEJubyuMdfTL32gKqnfFv3NQPaaRg4NAg7GWfbkRQJ599wTeaakgdgyf",
  "key12": "Qrw4q6Rm8LHKvU8eE8JkW5aAy6SzTiepxtyW9Sc1rg2CbGimS3hAgWNqCRZGAfQz1bohCTKjRX2ddYeR8Kkgsq2",
  "key13": "2Waup1NqBLkPsPFcCmp7SFZsL9vfxFhc54dast5t9oqQ2LruuC7WAFJU4uC7223GCBwpzGcrsczrcXQyxuH4pTPV",
  "key14": "2AWJsNa2Apr5xDGGmNbMeJbpFtPfWLbbCppFRZiX9zHEK2RLbEoSLSjp1WqVYLfn6dQiFqKuySntWZ3ebzKC9CpS",
  "key15": "P8xCytLiCFMhajXtefPc7xYz1ibwhTjatPWTQm9LekJfBTqoTPpy8p42sAjncj4xfqTdgXp1QJaW2j99Yb8rDeo",
  "key16": "5652aCZnrJcy5cY3eFAqwdtkFzmnyhymMGjDwbxgEY9WebLV7tEgkyGnYHD4fuKSMcQko8khVnxDsZBbPBH1hSkJ",
  "key17": "64ovjM1fUZ1L12FHzrxVYv9w4HCYUFSZ1CLtgbggPyAgzd6kEqyFzhHw46Vn5dwtNE63QZxLTcYGde5Jf4KrcJAF",
  "key18": "apmjRfZJUYwdkXtsKXD7itM1poSSdQHSM9UGzHwZ2t8aKEe8wBX4VbKC4L9PDM8BocKWyoCPDYUdWWxKVBAenGb",
  "key19": "2ZvqcjNKAxRdVG8Sqif3kVwQkfeZwnTCtiPYf7FYg8hUDGbopYU4PUjvb1LZpRN1SFW1JeLRxvJzUfrjtxoHPmJE",
  "key20": "4P6MtjMwa7RyjQvbQRP5QfWw5bjUqo4S5e3coFaMK5kSVneEaEryq38eoNJL7REm6vLuKLzxiZCEJfyJ4tPGvF68",
  "key21": "2MPrGx396hMiJ8JahAgJFNzNcW1PDUky2dqXR93FhEDgDbdgaApW9MjFhuGBEWyu482Zjoq4dzKQ2QPfZ1biTg1X",
  "key22": "fWkC8qqmzNctvLYtJm3YytqYSQv4juqNa14gowBnsJVGzh7GeMM6EaY3qhcWo2AP9KKQWXkHL7P7XK1syL6p6VP",
  "key23": "5qPvaDWDvfpjgrsK5fNeZkKe1EpkYW57tnZ2TV1USNvr5pXnTs2DXEsPSD8nQHHNjhhd3CPCmb74V4Y9qvaZmXNg",
  "key24": "3Cp5QCWiQc9t4UzKDhShKxPxHMiV5TQubYC3PWup7X7xtxag9STRG7qGifUW1oerq41c5sATsB9f5irLqG4xiab2",
  "key25": "4gdkg8T3nzmEdmL7X214miFR43StTFozf7aQPvrqSpJBxp23jX7M6d6Yx4MWsV45YKMC1AJVwjSNAH4E2cZ3uTUw",
  "key26": "LXJg2GxBfxeRe3uLTvsSEzvk7PWBxvWc3cRCGyxcD1aZBvc1mMH18VknFfAdvaxyidTyoYdixozkNFjvDra9JEs"
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
