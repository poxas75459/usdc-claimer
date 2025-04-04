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
    "5njNY8tRGeEncEFnENNMFmQVX47fm8rFh4GZZfXUP3tBwbkypa4oFJHLV9dTWfmTRLmPcH5ps6ppJwx7cHv8iRa2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54JGs9VTxV8HffXXLQ5xtENKDKAULiWWqxw7bpqBJrJe5fS6fMR5V2dcd2HVDunTsPmRjNkBrkWpjudHHU2iKAFz",
  "key1": "4p6gpJGmwLy5uUo2LH7iUiFsqYKsWb9KMerGKUz2HYxU6QbFGEtXQy6fzBfMVPa5MGVYsycCAPnyMTWAuYnnX6d8",
  "key2": "3YUGBWPMyXFgKv2JGgfKDZdBpaRZeWvKKDgbEbHx7gyydzreCRWCCjwii2v5bHvUyg3VSJDsQSzP1NHWjiZM59dF",
  "key3": "3Ke148HzsXVJ1bMoGbAWSe9jMkg6iFFBYBWsYwjY5ixpzScAd2bkb5o5gpdgRS46ETm6ASJCjt8UwWRKGp6nEaHM",
  "key4": "2HtsDs9FgVd6kh6qt7vTRzzQ1YPe4EqhicWPuTVi9DGr7VUeH6E1An7rL78rNZNoPY4aW96wYNx9PssVmz6ZqPaa",
  "key5": "2w2aoTF2RvWfbhCKzZ3NvUqnajBZr9273Niu9XNU158CZM4Scw8xobqTDyCyQRrTRfnchu7wxXBTHLAshpptYXqJ",
  "key6": "471opbNRQ1RxrKKxzEXVTbhPV3mPRP7CbBE7qdX43sEBkLFqnazofvBojdY6gPqS3MowJ5j35SP1jRmUCfUiRF41",
  "key7": "NypdyvmYqEuiiG5uu5fcWKRqAEE7nQwmrQkcMQq96BGV9oscXecpsTFVoK1TduddS5AzgqNxjcRNqdZtxG9uQSM",
  "key8": "4gvZtDj2WFQjT6K1FpZR8LXzzNyseSsKdXWQwrTVGVkEeA5AVsu4Je5Kx4XyM6eHi2B9zDKH6Y98AUxToxiptJTu",
  "key9": "2AptmSt7m9LwPzfGSgbbpuyNU5tkKGThm8ToaZguqd9Et2M8nPvMxCLECRhMtV1Bf8qxWyH38sMNZps8gqRuYicv",
  "key10": "XsUqVSUvXtbKdtXmCKHaxuTzn2J975b8363qXJMv3ZknrdnbeqUsmCAvYbVSNvJMbeLTN5n9kPKxMGzc9u3fVJT",
  "key11": "u2uhXGd6mpWjt4yVT3WmMVVN3euyNVz4AsXK4CBuc52FZ6QJcjwi5oczAmQTbbzizQL5sxCi8GLgdidePG4jJi4",
  "key12": "3xbLVTGr4tT6ptBKd2c1kxVMwGBLHrra3XDJHpvg1dTcxCcgDe9wo18o4r2cJJt56A5Xc2vqJdwyNEXavH4aDybD",
  "key13": "4qbgJKikbDPrKhcRVbQve2ZRazPGR1GLejtJa8GEDbD2ppUfESDifb7hyvkbRumWx3nm1Ky3YTvNGEojU3hRipGP",
  "key14": "3HxzD8WfXV4CnemyfpmNr7LLhytt5YBGihJYF1jnPHG87y9ifEsC69whkXBHqezTsVcfHo4qMkiJ8TdUDk8NCg7C",
  "key15": "gKkq3moDgswNrDKFAh4x83ExzLNEsWJMSSPCtVFfpryh8cYvzB93BbdVQxFkqqXHp7diXvViJQms9iKZVLaToc7",
  "key16": "8cMagwnTecWPai2jSmwtDAXaBBAhNHbT7JLvwea2XWkBUNEnByG1GjeFD2JtyW76Y8x63aWJZYyxK2xV3X5uzQQ",
  "key17": "5mqDNYcc2VRXpborDXd9xkCbk4WLivkaz2Uo9gUW1p9CEzvdQkdKpgMtjG497ZhZVJ9CneYr12tQkxsGQUf74o5r",
  "key18": "2TSKWp6dpqjRzHCWkbHyCgUHF5vB7DVRYmkph3nANXLEwH7LZ1ez1j4FAw3W5S4SULfJEWp5yk4tqQWgpk1epgyV",
  "key19": "FFTrFg16pCUVF89kSBpzv1k2Q7xDx5hd1ExNVeHahTPSjx1iacQAnHu2NM8DwmFp9ig2b61iPyi7kKcwnSW6nkY",
  "key20": "5x3YVVLrm63DSiEhEYjU1rSTSibKiU6wft3o2284B7gP3HGshTUMf9XizPyAxJyJ6miNso9Z47YPfZPDj6xn14NK",
  "key21": "38Gh8rBpmcfmd9q4EnsmmbkhzovpVJv8nBZHVcZJKK3b5kkVyjLQbv2RnTn5MkgwQghHmXcbUkMeQjrsZCKufzPd",
  "key22": "3Q9a1PRPrDSdmk6q4ym3YAEC6ZSS8JHBTmS9yCL4cBPdk62nwqyzg7nGQJX4w8Khnuw34n3Z2ztmuQZrxze1KmYt",
  "key23": "2Bkcx6oguMJaXy3MmJvQ9TPPgx2UyYVKAndWch68kxru5vnu86ssJZFV4ts8Vi6kKo2EU9QcC1d8BvopBCqMpT7j",
  "key24": "4CMxHJ6x7uM9A1mzqQpnBvkcQBiEfZycDjnvEbTE3zcivhasvdia7G3VLVHGKA19JCjxqGnmsE1PK7oY2zVUQtfZ",
  "key25": "zyCPyHj2cDaJDo1P142w9MqkyytmGhY7HLAMEyESXReuezKJZQwh1kEMHePC8DF42qfqD7q6fANgPDyfJKie8Zg",
  "key26": "4JfR1KEnVUGNdbq4SMXhGTYPpuX869SnYK2PuS9a5ULRHevH8mmdLD7hEnQnFTyJBDWNNdFY3puYecoxxXqNqghz",
  "key27": "3Uj7FbKnoH6pWGsJ51cp8PBLRyDLWevE2VbZhL26WqZYrUKwQnswbXzWCyA9xYYkfUDW5AMX6cmqgJigJDYjtybP",
  "key28": "38mJcZ2qX7yNURx9sfoduDxiXcQGo2nEoBFmzcWNWPHGJeqzveEs7nXYP8ZqdUord2C8MuRu5Xzuj4njYnncvezD"
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
