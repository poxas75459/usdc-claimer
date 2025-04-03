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
    "5aVF2W4jNQcYKCYU3G2g8pPiSi5MBoMJEycfC9xSY2c3Tad85ssDMLFH7NS3E2LFnsb24rx2QQgsYwWsvZ2EecMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tLGaWX86nXsZaGNJAMmz1XripVsm6kYWNY4ui1y1mdvAxFaCrBZQJC6cmcehQSuLyC41Q2adt688KVaHJ5MM6DK",
  "key1": "4NpxRFZ6fS5QEm29mnp1YwXKUu8RWHZ2xbSgivCmSM2pxAkZi3cxQZJ3HtxPE6SXS3RbZw1srJt3mtLzcLV2j9Ds",
  "key2": "SW5kbdB5jmRrSho1s6KHjJcL9GFCnf7FwwUbLUp5DhZbqBy2GBSHReD8L5ZZwqFeoUh52tWFuuHFSwY2K3FFqHn",
  "key3": "5KvNZjtCdHyWdZRKArjvUTWW5B3BjcEWnxqvCqoWYFTebWmuA1HykRpf4qQx1qKnTCSWrfiSpr9r5Tz2DqKZp4wU",
  "key4": "3v4hdvY4MgmdRLE2rYYpTnp3H7uhef3jfqh3DQNePiNkC75zy8Do9G7WDkGmSxbxSrgyY9ynMXuZxK9ZWTnoL8Qh",
  "key5": "3noDWaA8bqPAj39NfL4v6p47vXJwF9DDeZqDbmKeNreaUXKjL5XpDnwdMLfDw4Uh4bYKLVstTomfZK1SiiRfy1M5",
  "key6": "WUnzQXrLdKCppMFDwMUMdUHjcrCKmzJJKGDjpLv5UeD5QFn81uNsVMMowZZ1wfzvGpB3vn9ZXecNtwWqrYqTwGz",
  "key7": "5KAeTA5D7sihbkhJDho5jbXjGFY9yGK1ReAWK5G6Vcya5sBmbmvGmUsQGR46T2ZMk63ztDe1j7V5Lg81pnaMiZo4",
  "key8": "4G74m6cv3mqyQAqdRKCtJPVbkd8uXY3sFFbuktPT6HU1zFXqXA6XizZprnEF794KtXTpKPZ687o3fajUxyZN6X6C",
  "key9": "37JtU8DskTrXxYXjghZWysgHNcxKXzceGq9gbX8vbghKQjvcJNUFxUXoNqWB8rc3qmX8otfv3GzzfmdrA7vm59bW",
  "key10": "4bLxqBhANYUsxZtfHmfS9AoZdibZwbPuEoBseVbthoWXTphzRVudwwRmseQ5xB7qBgnQrnk1CFQsUbd8M18XDvMT",
  "key11": "2PnK5BkTKvjyTfzUusaUEwjhqJwAeM879DEFx84h7x5wCKM89zpFaPou9dNJUZr1M56gfGJwpbSVXiFZUjr7uGbW",
  "key12": "5nHx5HT1CbH5zs7knYcRUw5STrT5pZnz8dpyx2v6dH2rJFN7pdiBEBzmAhNC8GRdbzVYcSpbnEKsoWsCtJn264An",
  "key13": "qFwYtUSTBWorpyyySeWKZyVFWoP42jcjHqKKMTaUDu6319KhG9rhYhwi6wnJvpgg2YxDdmxJmEvoD1xb1tuP7Kg",
  "key14": "4CAs27KMVY7AxMx9ucwHffmpmpDfwXkNFuA4wrSPzhjaxTx1gipaqyXkc2kCWybP2hEEZcqcppuxHv6aPoecVmuv",
  "key15": "3DhgyaJGiW9b7GiJBYqvB2mcJNGsWGbBFxxoUBdhqVKQLqVcDvmWmGZaxm3owPwS5oV4HB8dE1Vgxxyd5MDixCvG",
  "key16": "3TgJ7ssWFKCj6A3x8L1g3xUmXTwz1RGxreKbRtZQ7gXVaGjxZg8int3xvwvLEvpx8XHww7hJciLpnHFimvgzPuaN",
  "key17": "3DXfRSy4Xe6UjWFi8XEfJ3PBw2BsQcYr5N8yagxmxReeQuecE1MPfrdNR1nZHwgkqhgXXw7iQJybMZZm8LnHwwCm",
  "key18": "5j2TCHiRYAGKe6agXjuFZNAfvi94dd5Cigi1Nuyr8FNQ6dvFz4CtZuxXLjhb3Bw1y9UzPKUAexhGE9tQFXhoTgro",
  "key19": "2whxAjRSesuL8Vk6rSfR1uu9Kc3wMskXwjwGwE54RAvH666ts2b3BHhBWr1vYk4Ff71gnsBwYZ8wEcXNMDcTgG3Q",
  "key20": "23zcZGpjDXMV8JbvzETpsK4DkZJ37SeVS4aXFdoujpySp6V6MgLrgZq97EWBd1TYxL5BkZ1kX3htiSLGLDBv3Nfs",
  "key21": "4xCi8gVk25JVeAtBbTJ4CZaevk4wN1JN9W8Wr1t5uvneNiMQ2dkYipEa5TCHa4tBUjbxMZbvv8a6Tq8p5ixiXUfL",
  "key22": "4b736Hcu2jbZDcdjxdpdstnXZtrSZZju4JFLTvbRfRFpZ46dAUu8yFhJ5Zy2DJpP5qZv9j8irsgfEg5ib2rLY6Lu",
  "key23": "NMxToaDv3oMiuECdiNGwgc1XgmZfNogYqTDymxNE9Dqvy6XAqPHikFm5RKNkPGGUcYidkqKNusRnVycgmwjF9YN",
  "key24": "2su9HQMYycAQePTiUe8zrRbZzpTMbo4FEcQZvLdyKuWqxpZF7jseBkwGnLmafTF9xoV2bkpAU2d9MHohJeeCAWDs",
  "key25": "29MygX5vQmkx5syEs5fxm4St3rKchX2YCwvw2WHUN4FGNEFLkGMoGnSs52BCcEBWNUC86JdxswvpserjNUzpHpzb"
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
