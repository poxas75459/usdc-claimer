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
    "GmuQatJrcyS2do1dCng2bNjCTT2g5rv9gbuhTHYoWEqkNjBo4KaHX9SWjzLUkmYyPuxhV9GDUUcd8NHrpMwAvp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u1tZwx7dL29XdGNQW5nAmL4JfvGF7nSeJzjy3Y7SBrW5W766jTj7gMFDEbKPvha4eFfv2zTYjsiVTeusHq8KGko",
  "key1": "jAHP8iiHySfrfpWuNLGnLCqEU3fWQnkQ6WVcrXHdbJKKn3BkJDnGi7VVU759HstUuM6iksbCDZKnzxSx7ewKqqN",
  "key2": "3otmeJFemDpYq3dR7ZsLGfGbFk5Srfe4ttPuA61MNhCkoXCUWFa7J4Z2xNQB7q6uGFy88tyzsWtBEHMnrY1Rxw8K",
  "key3": "jxdgwAZnLFCjVuZDgSHRfnANpZQW7XQ3RPqbTkrHdTwnhmc8tDKAYjBmBfZZaGnGjcp465ZN1eSpbLqPJ3VDhdG",
  "key4": "cgARUyf1f3CHHpkBC1TweFY94rk3PmjMFT4TxASfpDAqXbYcWzaQMnVz6p7kBFLm71GJkagWauPpgQBJL34XdxB",
  "key5": "2G3jo8Qiiste8Azr5HFq4Xy34GUxN42Ne8zgvQLhvRQWkQ8kYXZmwhdJNzazaDt8T6bFjBLjwmwmd2PESPhTS79D",
  "key6": "296ckPv9RJwqRSidUDTkVcSTdqFV1w5ocasi91Y2QbfFH8qkYEG9gK3gY1u2TPEJfuePS4J2V2tsKxctUD9sbXnb",
  "key7": "4QCkNJEfNN1m3qD6brBsGcu9cYdq16gqgxuwque6EEQrZwVGFmT63gHajyvmwrwu8mDg3jbCtgkwWnk5VXRnU6vZ",
  "key8": "4awJkah25GXTziUWqd5DqKmV6CPoxBfyCBL4E9Qskp8JU35pr1ZTkUjd6ojzaeViZuBoZPghruVUGAuxvGETeBnr",
  "key9": "4CZfXmdRB9eJeV5adup5t9Ra4fpBzNnPikgtN5Fghh9Y775y8t9QZRwzcAedyiJVQEdoouJf5G9ZYVSecjfu7Fkt",
  "key10": "4PwpAXVucQeLrD8Ky5g5vDBu6GKgWGssxeKrBCNFPbYw1FGd67W45piB92CApuzgHSfwMJiJTYQnq3nVJzcpeRye",
  "key11": "3x7qrFJg5DULBgkQBBsnkC1rKPcs2qZzSD7dK6WuhNSaMMCzrBUztdTK1ahxM5WJoCMeYn38Bwf7ZbeQBc3G5Cng",
  "key12": "QFb9HG9uBfzf4Fed8XGxELfBK5orKH4oWH5DcJMVRMRTztxxe8ndY6V5gjioNcP1hSLyH2nJPbdQVTeNaMga3tr",
  "key13": "5WHaL6EWtLQzqX15cVxQkVs1VZgxckNH3r9CQAAcEEvCBCCw3ZQZfSvNFUXiDYQX8A3zC1vq5rESSySz6hFUyFv9",
  "key14": "5kQzYA2VVx7uDKoqXsSmn43MVBSptR62HXTdj8RP5iWSeH8kfDXxKjAuxG69joXT2MaFYnfjioYr5JSQ8CwTmaUf",
  "key15": "2PjuSneS3Pp49hDmRfLu34421TnufU7qqWD39hLJy3nMiQosk9SaQecJecdXYCvL638gGLSkuSX8c91481HEk1Un",
  "key16": "5P7L1kG8jhHFWwoePYNn6gCEdmyuznv5XKEkPEq47rc1wq1CZ11rWSF2W2Uhg9DpJSLbtRWYrrQCmZb7wx4hwKQv",
  "key17": "AL6TKs8afbgj3tXBSuCQnuHcxSheXDaDNK8hEaL9RdWLFUGHRZx8THARQ8rFQNDNcuEweRF3BVWihrADfJRF9fe",
  "key18": "3to4DSjUBEZXC52zFvzPqumnFKRJ6Zvhnbkb1XJAQwPTduWnPYYr2oNT7q1vJuC1S3sjFYx9GdRRUSTN1gu9rufU",
  "key19": "2t8TiRaDuzR9Dt9vamTULJr9U7N2HN1RSuhr6Wq2KjjASjKVjyW11jE1aVETNCJSEdMJVmdwmZ21NX6aJvB26sTa",
  "key20": "4vPzTL8PjcSmQ98BnCAXQXewUF8gDP9kDt8JwmUxC1L1Grbb17bu7vDpJNk9vUJADbe51QqhGbVHe5CDszrWVGL",
  "key21": "3So7yzoD4wHcBbEJWCCqB144v4MUyWSHH3P4dR6DZVeRc1bFMSJHMV4YPTvrjGSFzatwWSdxVZ7rgf3Hfr49AqFp",
  "key22": "Y8skYqUMRVdDENbhdenFFiE7jQDd6DVq9Y9Mro2F9ERbDkTcQdnhewu51mceRLRYafXxuHyTLgBbwH5gixiFXLx",
  "key23": "5seBRAYBB1DMknuuNyFw2CrPzfVpDC37NLqPE3Ea1zEuPbAmp4wmrfJVwoNZNCyD9SWWi8umZ2HyrRdQ41PbX3dy",
  "key24": "31SCNtZ8TkDbgB5rAiJmHxDzcN8gCeYb2zsitjt2WwKu5K3AQc8UZtrdjZZiPSbh3rCDdoGRQ33zEsBedHc7NfW9",
  "key25": "4qe9cmiZCrnA8sEx1LYTAb5TeyCX9hU3aHQg2FNNASuXJvpMwVMFdtz348FY2ufMkvsw7frm5beYNw1rEke5ivux",
  "key26": "26SeZxWGzu8kRLCNvGndHPZm3ueHhN4SGfx3TXwzQa7mJfNhj6xEnebRsVr3PggsmATfW3c2Rnf3edX44ntaW86M",
  "key27": "2gS9K1sGe1qugida4oMPhPsdniygyGkYjEcm2y2CPuQNo93iBr6MkzKQUankmZp4oZjfZVFQF7DM6gnBCThyj6hi",
  "key28": "41q2a3iZvVBva84PjKRbrPm1kSZehKdSK9qvkxUy36NxCk8DvWJ67EhgHqugwpDhte7rEekiawRhPNDqZi6L6D8f"
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
