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
    "5m1HycTaZWZuf32NPsGdkcgvTNjTnenr3xM91JK66v3YtaJxwTyQr6aV85PEEXbdfkd5iJdwRDeR6DfLZ2GZQRhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3czbnaygy6Gn4Pa6HDtkEnjHjz9GMZubdJhbtXPYizQZfCtBpB6zKCzYyHrZivMADEk9J7QhXCSNJF9Lrmnt3Gn2",
  "key1": "3UJvrYPBFrRwi1nCz9BCWkBrid3JMbAy6GkQNT3smbK1wZk7spfTmGJRAoLHMFrapLPzSei1eUjhKWb68mzrYaDc",
  "key2": "55GAGtYbUnRJyUzdsyDeEbeY3Hiso9nqQp1TAjqpCxvEqm7UkKmfygVKSqvg7rQRVFbD6M3UcprggataGsLxRNra",
  "key3": "5FSH4j4wYwy1mTqbDbhXeYnWzp3bGyxi9GcdQtuabCH6YV4ZEktg5PJkK5wcfZt4pR8xqBDBdxiM2a3C8QyFZqBZ",
  "key4": "5Wv5WJBswAdVBm8ewK1NzHTidckcUY6eNxzGSyixbqgy8PcPEKG8VrUKGTCgv6uHKWxvuH7it9U25R5gzboHAWTH",
  "key5": "3Pj3wTXF9jCnC1zYt6Pp1ohw16RqaYrtxVXBzTJvztCCXysqxTZZXRi3HF5wbjhN9pEpUCbXSfP8MBMtaZyeuaf2",
  "key6": "5ZRt5g28vRs8zP4z9QbGJDKGpm4rXChLgAuUsWxczoaXucb9z17J2g1EqoWc3gNgWiPDeMSnqf6CSNAFWvCsCa4A",
  "key7": "4zZgdQXzBBGdxvnt6Wq7SnEvFoyhB3CituLPcpKQYXeykCk7K6UfJd45AEssDLMZn1ngJrF9s2naiQtmV9gtyMR4",
  "key8": "5pC5amBpZRAG6gpv4xhrGu2mzLR6ZpK44tLtr3FuojKAqe9Vmf9BSNT6QYTQGd9RPjWqyqJ7fFxSiBU5DBkC8fRR",
  "key9": "53UUXV49HNsP9PSRq4Gucy2PcaCeMbQKx6YMHk7ZgmLmgehnpEqYkegL46qPwRt7Ke34KDw73TxKWeFXg6QKGh54",
  "key10": "5Uy7wsyGfYwcqNQjr83wxHsfcRy7cP3HLPtQAabqJk6QKGZLQuVLTkdC4actDZJcAiqh1iFeY4KM4CEqyDFAosDh",
  "key11": "2DZTFCgQbhmuaNGdj2LWEVDWLK8DjnSRUm8Sv2VZ8ZyakYA774cancsgpcDbuovXRJ9XivYXZusWo5Y9PiQXayH7",
  "key12": "5bZbLRGFziNyuAzzUSRgyCu9nMUSiz2UMRDCBvvBML5f4diq4sf6cNUvDG3D8bQhsznmco7SrT5EfpEbZnaVN7Q8",
  "key13": "5ypJxat6v5Y15ytrBj4yCh187Qm5tGBpyvnqy8zTRkwErUpeHGjV53nVhbAARjgswruioodYPLXdyFcC5giLX8P2",
  "key14": "5YxpNMmy2iYQgA5ghhoYMixSXmascfDhVg8dsmzxZFbk3LZAX66ecgNMNWvWd3H7Yx7odEYa2NExQgedjubBVzco",
  "key15": "4yWWDMCAinr6EL5iTpJqrvkdPMJiuesnZ19WP7t4jpsnMrJmiLgnbnCVxRRdKTTFLwPxpvG2JcMLuFCCsQu6oP7H",
  "key16": "2vuAKLmXnZo4qbVNnsRebRLZi6ijWS1QcDnX47Xv1Zc1EKdcr5WzCp48WwYenBRRZ8D1FhiJSeXhmdCmNYGjnpfp",
  "key17": "34VAoQLkCaWYq95HJ9au4ZL8pxmXWvufdCzBWtFVuQD3fTPThpz8GvLiw3FP3crrUXTznfsH3DET2xsRtdxf22WY",
  "key18": "3uf5w7CfQmoppFToiX7KdsUJBzBmZw6TGLp4FDe3MjiJ5CNajmM8FuePeKpAQhmro3jjwXf3jBWMAeKy5y3qvw5U",
  "key19": "3py1zp22TpBu8eQezD3ve4oGkGuxuPtS2uowG5BYMj3UTBSgtfudJpHG7vfMeHWJ1yFekemYJWVz3mBK6FzFBnjB",
  "key20": "21uu3b1j32dKBSSkraDLeCzN2HerduMGUysuu8mMKsXA7SvhNtthLVeDUtNmpewNHN2eUq97VspgsNmYwzQ8cbGJ",
  "key21": "aZmNFqcZqNSeW4dafY8XPQt2LVd5LfLJuKvYa4uvoskSXLTxVrJ2xXUy4msjJFAVqb7kD6X3RKWF3KpVWNJyjUg",
  "key22": "3nVgmabD6ezY4YDD1xyrX2jfUM7SRiVhWkSAWKS6oiAnpjz8kK2XSvWYq7UwJysa6m5yjNmtMBoVcmReSaQBRwDK",
  "key23": "3kdigCRm54v8Rgh6uqWgZHzJh6mNcvkYNYQvGpTek6TbjWgPGsR2p1q49hwAWXsKy5ftfGU45QqKej6BsY83kjYH",
  "key24": "UgjynNJzd6hugpVfxNBcbxERtt6bVMvFKuCTZgbdUYDoXAJFY6hdCJhov55aq5aC77QU4ikVxuGyWgMMfeN9gth",
  "key25": "5U1SttegPdXz77n1L52dayDXZoTRVojs25UM11WzpNzQQ7gkGiKyEVqvHXUxSvFRmh6qwYdLWzLjEqY12tw2M2rj",
  "key26": "9tNxaivQB68jUiFHvG4XziNa3i6zMhELc6wcTYvC7J6qpssj4RH3Ww5hb1j3iYVk7VimWPV6cxUJNZZrADrbHYf",
  "key27": "5yuAFkDMdzvWdDjRE76sc9pEbTw43xaa1rBmLBYK2FWMi463nr3zLfkqLtNRqrG8o7ugAHsDUFrAhcAMtNcswgE1",
  "key28": "65cmgzRnJyRBUApT33nT1QHy434MvSLzfyvQq7f5DQWoZtsG1wbBgP57FfESR9CdtzEzamykbwTmTt96CYJ3h5mH",
  "key29": "3kJQUiGXn9r5HBxy1CeuTdUjwNmCpQnfi726hP7SbMFNwi3JPgsnVmpz6PiZW7fUFda1FVZG2jQeXudGypNkm9k7",
  "key30": "KPksLpuK9P4dzBDDb3NQnhA2QcawCtSBdWJPuXHKM8fz3DrbKg6hzvxbxDHwDZ9dY2WGbjEaPuRisbW3rHuLyCM",
  "key31": "5Kw28LZqc6HG6vPhPvDU5UmnMcH4RQ7FbGEGtAKFVYoBf897rxotxbRYdzBdaancC5jwf1tCW2ZD1qh9Dv4sehHR",
  "key32": "2Xv4KjGyHG63HBt7HRmU73Nkv8sFZDHb35tSpc8MRA9QBKGcfQfynvrGFhsQ5ZAgeVz71ZwzguFCZgRZWqciHCCT",
  "key33": "5tDfAeH6kjEJr4rMpKzM4gR5CKG5Q3VLAMBaWokwiCRdVG6jMhAWEPjsX16Su6V3x9QdWNwCT1p1kJqppbZ2ZRwk",
  "key34": "S6J8RsKR45P982QLCkZ7geSKU1o7G4Ki19U4h5A8bzEq2ZHuZ9RnqXDyJa6U2Qwyz2WzCWr8PfzhBvrad2GwuFw",
  "key35": "XiesKtzpeVW333i1LDVchuuu49mUCpUTNRP1kLqWoT7pnQCvCvu4F3X3Dj2EtJWRAF59mSDFCyMZoeLnMhXSmzz"
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
