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
    "4b1pZL5HsuKkFY5b6uX2mCTAHjEcR62s36tPtCtJN2eVRqi6dogtwjf32sm5X1JR15BZCqm6RMG5pENBxZCkKHNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g62qFCxn8gd3zT9YkzXc45i99D5dWmyJDY7jcHR13NfPkX7gEjfqPCD9BQ4k6VXK6Q9W4f698ZLUCwAt3zybPNg",
  "key1": "5BviPowtMCrv7wiFqMZQpTb3wGfGx7ZPKaN4myjGzdjF43ipAuv9tq2pys3KhLWvGanR6cqBkgADvqEJuFBNTJeb",
  "key2": "316zs1crSNQwFMhvGEZtFoN2hU6RxxZCDXyrgGhuFKc8fXYZty4ZcxggjHZ1gaAg7AKC3nqFkNjoNsyy5ekPz37f",
  "key3": "2nKKww4YM5vUS2vQmzNEFVegBXADFtd3VreakMMwTPNFeLKxdVa8h1YDFwemM1NwDtQ6FaJfVnVFDBpMqXT89uVw",
  "key4": "3Nf7N8bdJZtqU97Pjj5DMyKEmtjjBYQ9BB7q6KHtd1BuAYYRzwSHvb8qKiZjTCXd3KFtW4HgJHAY4AA4EiDJyAHq",
  "key5": "3xBcUBhwC8RP8oxV1iMXoDgVVjsDtDjrbZbYF7bqzwtsung9RvjbgXTcCYNYih1mQZceB5P4Pt5ai7pQeCb5JqJe",
  "key6": "3H7zsSWZeMnffbDqBKHsY1CwKy6fUm1ossXX673KPDWNn1E5hP4x4VE4FrRxVvjmKiW5aomMzi3FJ68sXMGGiQ85",
  "key7": "54w2tQG1t3ppnkfQPs6sn91r4URVGVUZrC3yuEm1AcRviNixpMDUUhZBuS1LoZuysxh9PYLMRdFZvK2MYQKuHZxw",
  "key8": "3nJ6kXUErmYd4n3kts7KfDfGY6CGRjq9LyJMPrtb8pBkjWWdPC6FRiZA9VxHHiWXdbAFVrjYDvBPqzK7rE7S6ssD",
  "key9": "2tyrrsP827j1WN9FuWbm82wMfqQBuypdxvTpsBHjqQjYrzEHaYbwJKp3tA9fKJYZwBohT8UCSTuosdUqiVoWjekn",
  "key10": "51QVESdECuFaRKoY5iiTFLKUnNgT1niwXHFZqAi7RdSgKUuhKKEghaSGGc2tReoqvz2ZxHn2WiZfmKFPo4K773fQ",
  "key11": "4o3bzzRrUbshDTpQMZ9CfAU26xB1QKCb6h2UqTRh4NpBY7oAB8pMMSPJiPMte8GARkZ8oj81tKgg1WY2iQRaMea2",
  "key12": "3bQanwKj5akZ3bj8vuav518BMwCvmLu219QYkQpQB1ydLrtGEzJ2FEJshMUfp93tPB66iUY32Q5F9S9fwB3pXDT8",
  "key13": "2tutNuHAFpQcGUJ5PNMZ7L12KpF1JE7P8fFcu5agdTK9zsMLXnNi1r88KNgJyDm8x76Z4yoHTGwuJWSuzyTWqctj",
  "key14": "4QTPsLpW2fqjiaKSuXptgTYgMMvPaob42eNYbtYPxnPNjKCw1fNzzJbmTR19mWeBmP1GtZvbc9qNYhg9nn7NJCkG",
  "key15": "3JtanyAupt4XaewD1iN3josCAQURM9zMDLonPwyzmwkV9k7mBC2nCz4Tuwp4fV8d8FaZVutYowciafffZCnArbgQ",
  "key16": "3jgRYWkZn2DjCDvdr2LhHeviYjbMewaJ7YHvYFHoGsJqZBfSpYRfAbTobJUXdPzpv9XR1q2xuU5QvWddojmoyLyc",
  "key17": "4BamtG9QVTHBs48HXrSX7mUvX8ApinXuYGvwjteetLRF8qj8DSHLAKh6HybYBroxLjo8N3y74s1dvHpKyuUhkzVB",
  "key18": "uyYguy1RReaS7dZCwWoG29dSmWugjkyq78WB9irEBuL3KKQb2Ant6nFibSWvdztHMftM529Xyj6BNBxkeZZuQ94",
  "key19": "5DSpXH229JshqqgmKZpgBxknGfYGdHEt8gb5nZ8gpAiw3K1HNdRXRiBjnN4y8W28QhPshwKCKPVSm8F8F5tTxd46",
  "key20": "5JgQPkxiJTobKkTyTEfHizbpQdt7hZpcr78aBpGzh8PdRXP6hv1FboEn8B9SkjVC9Xmhucu9QWvdD8y6MRMYqwsX",
  "key21": "4a7uBJmja1atMzG3wab28KJxmancwiKpA19HG3dy8iYJYd4618ifTR5DrB6yWC823QarPyTiwrJNS2J2FMYW473s",
  "key22": "2BvnuTtcuEA5P6gRvZqg5bGKp1paRvYz34i1WYEGnU4WzZzZyaEdEUY3RkqUkN5EtdmfGuriW4EuPTFbrGZ9RQFa",
  "key23": "4j344gUMGdU71xZTufUH3EvCRyUEk6WcVwQt9XNmRhriYUTdRyBMzg6rRsk4aVUPR6sUmdNuLwCdmXwx8E2xNEAF",
  "key24": "5A1yyKT4Jn2dvUZcLEaPb5oq7ojsF3eDkaYhN9FA5Pi5V6ebQDLeBvjn6w2wDnmAYCkLXrB3akcMZYMKm5g2PMu5",
  "key25": "Qkn4bHCama4BgHHi7Tymbgc4py54huXxQ4uAQADgXmmftkWpymzpdtxcBaNq2TPqeZha9gXpiiUvzzQgo9jf5pS",
  "key26": "5XNc9KKVu73M7WKaFg7umTMiNGtbXM74NXtKypbtfYYyLMWyDWo5eTEdf3Gr5bmNydeXtjMcBun8MNnPNk7i84KH",
  "key27": "3NjCqig7qUpv678EUFeB8WThVjUaEaL2T5Up5Xonr4M5VbLh17ypq8YQVvF7n85yaubyYRhUt9SsikShmYbAYAmX",
  "key28": "2edqaq3RkFH3HW2GX8kWedjK83vbSWfegSBK1HFnakbCVMQ3bbiEQHtkePgLX12niRZkzHzqazckSEq6doPMqx2p",
  "key29": "2GAcLmTMdxqJyrGus4yDbStRdVdGbukMspGC53AeeoK7YRzDNtAL1swA4J4TQBTBMxiBumJUrYEjfVBHtydg5zms",
  "key30": "5wFREyHr7mvgjyQugw6fqGhptaZScJi1ky8ZisTmiYzRuiNwZNnAME3ttxKaRYxKpVHVyhJNJos1Btwf5a7E2UNb",
  "key31": "5RFAapWiBK5VNQ8muYVKhmmGuhWvjEFCCKjGZe5UsxH8xRdr8HtU999bRQqfBD6NWDBZrwJHSZVe7ZzQYsTWeAJx",
  "key32": "29U5N3qtMCPj8nRHtCwxKJvK1T6ouF3D9rQAYyC23BqhRGvfLXPS5AVYYdfBEQaG329oJFhgUeY7445X3c6H4o5d",
  "key33": "57Qcn5qrkYmDE3k4mdNgM8Nv3of5bPeekxMiYzjHmoXBqS5aQFtpEpt5MccxuFnXHnuME35412XkABuaEgy4kYYu",
  "key34": "2Zqc7xFudBHJuBdDvuzVF2U3RZaiygfvgpwBLaJPxZF7AE4tN2epA5x7g2My9UK4y1M7eWu1aW56fxfyb8NvfYzt",
  "key35": "fYpKJ6cofAYWubZ8WqPiRhiexjzx2NoLgxs8yCjEH8sn2hfn8wNDUYs4tCGJvfdZSAaiEw8P82ZycX8JLuuhb4x",
  "key36": "3V7WjrgqzH6t8ucP7Ekk2uzNES7W4AzMqY1WngmNdhGv5VX19tgAUKwRFH5182vGYPmyaeG66QffZGa7LFmEAYg",
  "key37": "3spBsVkurjFTJbyhhPKYjWSSrS4gXkDVTUbyp6uSzkyyhQ2JjDPpFXQVo75EywMnoXZpaNQsid4hdxbkDkj4kh4e",
  "key38": "2VvgwvvzotNwqBE5ZnXU2GGWF918CKNb6f56d49KYane2eTNsPBHyKoBThevA42jkrHHZ5ywENFAUUWh2dfrwAdV",
  "key39": "5iMah33piCaTnzpShc4ZLW11D8ehNVcBiocFXW6jUZctTczZUvha8P52CJronbDkFBiHmiJ6QeXT74N7WqT3qb7D",
  "key40": "QHqbpZ3CfRupbhCbff3sX1MT3ozZ64aPZ62SCUdvKn3xrJN16guDREKdeCXMTeyx5NPgkq193RMgw95P9WTSXjJ",
  "key41": "2L5JCJEYRPxTBx2hXtzBiu3eytg38MKf5MfQnYeFGWKeRZpB8r92WmtbixjsfV9CZczVRG3DkeC5U6pxf4CJ4kMR",
  "key42": "3hrWzh11gQoFPryZidUUP4uiYdPciEsdceFs6QuMRHdecpKGWu62fqAcxDFweVdNqPkQmwzuA96MTvYte6taEyo5",
  "key43": "4NuzYThzQ6grXx4et3rB3JLkaymqvKSgLrKxFDhR94qa4LPkki9jT4m1Nv8m6KMV4dbFPrAoxgrPVaJ9cTGWRcRP",
  "key44": "5L9qPBSDPL2QztdxS6qoTdaSo8yVjrfgJqwHoLdhdtqEhS15SjA7UpBW1UYHmzC5j1Cv1kJPuRTM7xPuFFYCvLzC",
  "key45": "2JmoPsHfavp26J7Nt9rJQyBZsthtfDb5exfToWbgyrG88DxiTgyhtw7krc7vGg8vCJ3UjHuuRJDPDxxm1UV3RBf6"
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
