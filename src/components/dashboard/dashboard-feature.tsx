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
    "5AgjWkKmUgJ77RKrgMEHgjbyFKZHZb8VnWB9V6TUK81XJSC8ARssVTbAT4TjiuodGHtdVMdGbZFMB9wHouyJ1qVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eVVUPAy5kDRAgD9EvZVTPY45BFe1Cn9tQee1DVB1CvuypuP8kEwndin4y4NDU3GwHay3qHZs8LU6zNUW84ZZ8dC",
  "key1": "3NAcjAoVnYDQoYAryTuqDm6Ht9y75iqgwpJ5KRafM6SXEiaXiFE4QmJ1BfCXuM7y3hnm1kiG1fRAMmwUis149Qak",
  "key2": "3VwQsi6tbh8P3mMHTHhTckDXXghAb3TW96UxosnLaNG5VbqVQs6op6akZQik3n2s6kjzwU89px2bbBqnfmCmH9jw",
  "key3": "5RSkGUHN7d5Y5rAKxGSFvw3PQA9DcB2vAkF3rKajpwBVzADH68w8ph6iPS5F7rMgLGR2F2aFsLfuGRcqwZLCGJJw",
  "key4": "2cNcvaPtveojVLb7qZTAcMKWBu4iQHE4JwQJ3E8oiqvxQNg6rJyHiMvDAhz4phF2wJTEPoPxEPycH1pgum2pNzqg",
  "key5": "3EqhZnsedJNNEp6U6rZzgi7zYU9etkg83N1UCLkeWMBxG9WiNqhY9d7uKohVKMyKP24SNjMKK7PvoW2wmysN7Kp9",
  "key6": "2ik99sczW2zB9kQmzuQasQteAcX28PZNxvuP9Eny9LmJj9sj3XymbZ55SZYxwZc2yxVydsmzbG16f7MCM34hXMN2",
  "key7": "2yzPo6LhAU9zx8bnZu53qrSXK4sxKfZgehCeymHMGzYRkhWY5A3fcP2hdDEW7vuQR29Rr4dxT5rXTHhqUpWL3xz7",
  "key8": "3jyc6phfgTMRLg1rAEAqgyv1G8ovwnCtnBxjpZhSiHmob4mNhNmwQ97cJ7t7ThL49hvUsvnT9YZvaCDQDf1mNS3Z",
  "key9": "5YZtZwu3bCLgE3FiDiDMTkzfXWoSVik9uvfbM7LTYEZYcXGeBt7DGN3mBn532pZDMfme7tAJs1pnmB1EJX5wLtkR",
  "key10": "xWLimAMG7DKS4nA7rN9YocoqRXwKJQLr1FNqXzuRkDXuNLbUkTeFX6kKJBsNMfBC5GbBajTetoxvKTqY836thDY",
  "key11": "5e5tA96QJs5XMzGoVo26AHGeoxcDyJ3xrVFuh8nV1PQXV6JH4eSe2rm6869WEoSMMTn53hJ4zWjwDoFg2dxYQxBS",
  "key12": "htU5Jw2FSgEKNMf4ufh1BRWG3KQrgAzXZKCWMbsu2LLHPzYcAEuqkW16KLsB6dvTcKAXB8Jm89wKD2KDu4SBBgM",
  "key13": "2h5nEwpkumo8BgjSriNJKXnrD6L9fCUPdQLNGfYWehrf6Q837kc1PohJ76LPWZvcrX1Y8Rrq7twCTHkK5xAo9f3u",
  "key14": "2wwsHTQdXA32cFhFcNV4BRjzBqveegLGySdGzns4uAoUpDXxpq363gPxfVtd3UmvVAZgHmmQQRQxhdwzGbSuDE5q",
  "key15": "2W6J5tEE4DNFaRZ8CTLBR4Pc9zdQsaoozTdo6EaJ1Pn5CtDBQZeur96qBsDRZpaYqCC34cqQ628yU1qEewHhBMmJ",
  "key16": "3YP3k6ttnaccqofnGAiFxhp8SREC9yoaJaeKGovmashoHUA7ckvnCyj62mRfUNg4q5RAecWepbBFh5aKA8PVTWz7",
  "key17": "5nAd2Fbu3qMofceQv7EMsepkTKSXK5oEMwFrXeFrQ1gk98s3AbAUztmYziPqUG5PntccJqQ8csYmtirtVoAodpbu",
  "key18": "5yp1sDmaNCGELpw3fYRytiYbZqhuD2W4J1G1k9khXDqHredJ4EPdrZtbqy2mC6hNAAMhytsHzhzqmXo92gD7jTm7",
  "key19": "5UEJsWgcka1ng2ZUufgwxxUfXFe5UHazqS1i4fkpJjwqJt7N16ZDmsKkLMFk7xCm6NKziSyEb5tzvVHTpAMsXpYh",
  "key20": "4jy1nsFVPpcYy8t46iarEdxxULTN38Gt7zi7jDzMUvNMr18HzAVnTS1Jk1GutMYXG9hp4y72zcQym4CCycwtuYWC",
  "key21": "4iyBjGqojXnTQAcZBDNqB9pFHrKrSYAZVQHcKuxZy9DATjdgHiwt5dzqPRXCriZ58dYm1dUtYbcjQrQnm8mt1Hxv",
  "key22": "5K6rDc69k3DM6p2vPNG41Pq4R9vHJtT2n2xL1QfKp73KhUwzYmhDRgHHgJoHtUwxuGWYcYmggBVCKD419r95sK8v",
  "key23": "3Nf4eCASMsH6mjRWWhWVoKJnrVsVjZXpS8vmNQbUHKMqSdNzJCc92GjLSgifq1JojhkhH6xv4TqNiRgpxgVddfpE",
  "key24": "2TtKDKiqSLbNVUpqwDxk33yA8PHoCDcVVE3LfZ6expkK9GxhYTZ662j1FbFHNBPKTYE1jnmxnDjLGUMKFBrftGMf",
  "key25": "4i2hGcdp7z92CveVPeE6St2RgrrcZxkrPbCUocBDMsKwxz2CUN5QgaFPjvo7zxTtNiUka8rdttnEBXTZ7gww2G4c",
  "key26": "2fLB1WHBJGoGQvRYC3az7xoWaQMsGtM1iNWJ18etM3trhGqXYnGtyqF7awZzDizbWW7wrcMF2S8A7DGv2CR3RRYR",
  "key27": "4deJE8RJcxpghY3wuJuybch9YnhaWUmxPA6JndPmrPCLDiea9qNHxo8sZ2TZApH5XBX4yBVC839unZB3Nox9fsNv",
  "key28": "5t4WjpZerudcYK9rRLJR9P2JcyAvZ9DxMnwnnxwesYTht9vudbq2eR84GirboFJDFduCcgJ4uvu4zuRjPgYmZBFm",
  "key29": "4aHLwBvkD2vpDgAyt8DUS3eS2sxSZ7yKzCDgvTGp4SY7iojBSC6j6uWWDixXGcumvXeYVC4fb6nNU8n2UsUBXLGh",
  "key30": "45tz5tUq6SCjiUHhdpu9tMF8xaRwJkf8iu6Zx2kvMEpLLBDtNm6xpmNaZ23DTiKCrwoMvpsZcRf5yW5gmcLsnhuZ",
  "key31": "2KjCAbW89QnfEUMaYKt3FwEd19zEdDDtW3wayzhTP8VmnVUAwfRcHVijhqZkU1DMD11aSYHzzLNeR8SbSo2AkSXU",
  "key32": "juqgT4YcZ4cNMX6SU8A62HwPAMSGfMMRgQQJbpPv5pC4mquxj3JkVR4DhX1XX2D3ryToLEUiLF4VqhjnTKt3SaE",
  "key33": "2hg61z1oqT4ZfEa7QFRCsmdhXKaiiv72UqXcxUG91N9fTmqG9WABkWHRSb9vQogvQDiswvkPm5JwgtXkt2x9DHhj",
  "key34": "3yso9hDPjXZUmbFNgBzFU7v6hK5vkKUW5eAzg5htoWWY9aQEUPbkktG2HZbdxu8WCLneLJ9TrPLNkBNpfANzVyHU",
  "key35": "zXA7c8GjnEBZbeZQ4cgtZ87PTuB4vq9uKnKRUZG8BTCjDCirENKqRRrAQQohyTPPXT3hQXhdVyoZQykzoriqnGx",
  "key36": "2hZcG3SpRkqTqCu93GfXF6CEn8LjkNFCzTSCiqpGmLMeJ5TX3uMWfhCRDjbhhTN19XgmJvN9ociQvQ49opkAbMt4",
  "key37": "4RXzZmSQJeakrTU3xsGELekWFYPhZRX4RTTp6L3377qHdbwmcgrHL6ae4cjFdRHqaH8WR7TysaeHuYeUWVsU6y11",
  "key38": "4aFRLHz3ahczouZt1XwTmZGu4DM6KnzYBrXNEBgu7mtHUEn3TeAJycqRr7rqj4ViGCQLR7GN7hRXxsZEQZXHXvru",
  "key39": "DBPb5g1YQEMxe3QS6QiUPuwY7NZxDfxXcVKS48Kf9gg6tA1oisiJUPXHSnJMDd76ZKXhKygHt5E31fMZPn7xSg4",
  "key40": "1cgtJSLUQ9MWSW9mY4fCMABZs3hGSTdUYKVRe5Lpo7eTdYfDQh1eGBWGMd8DeQvavSjXU47iXhTp3dJPU91Zmud",
  "key41": "5aAcEmghAcozCEo4t5dZ8rFN7USDH4FLRBbvJzuXdDrKSC2Rs5LxiahGbQoMLD9Pf1appiXqX3tHPQqGYYCgBPec",
  "key42": "57pD9XJSVM9EFiQ9phfKqrrhWDcCz6ziLoVEuvTZLUWxXXBKTaMEe5xkDfQSw2isZtELPgbFhx5z5y7FZAoue7TQ",
  "key43": "UWzMEze5jfev3kgutPB6sbDrKnF13yqLCsXKRR5DxwrPj55RCLtE1y3j8GR5Eo8kYhnwGegbFHdCTHJXjNqgmQw",
  "key44": "26TShcFG8EyrkQgDk2E333rAyoYpEREMXD6Fep1RzkrrVFbF15DGcj5VZQwKixheFPdSQ4uPJeLpA2HuzGmACe4x",
  "key45": "pntDdmnR5mfuVwhQfbnMuB1j5oAVyQec4KTWJt47Su1p9L7MUcEtFUepHBrw7SGSv4wpsnGvQ7NS6XzuD7UsUqA",
  "key46": "5TipdNxQ7KTZdBe2MeXw9Ffgp9e7SJi5BgAaFJ22e1FS6Qd4JJNEb6j4ipe5rXPnfoMjjA72y7yD1A1wgbc4B8zq",
  "key47": "5u7VQWZ8qtVmaBHTQgDHuudnp4KrTXWgVKpybJ5EM17Z7Ugvrm85Sr1jQ4QF8WP2g9y8nxWLSCbT2kSXf3Sqprq6",
  "key48": "3ervcNc4eCWSnaPioxbHhV1yqoDorv8AvMULNLUoXi61toDNGyXnkXonEsBydakVtSqqLB5ecCYkGbvMMm9TE4Ms"
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
