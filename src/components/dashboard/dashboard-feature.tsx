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
    "Js15m3RtFCpfXeethBsmpfwfKPWKfj9p8AidojD1i77CgYeQf3AdnptuaytTaTZhxceHLCvbcCxArSNPi8EAxdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H7WMTNUay5QYTiNHcFYgNY8DmwJ5jCbKS91B7qgkSgNYMTL5wi8LFDJ9qFaZnD78zoerpV9KtF3KLBgv1zT7d13",
  "key1": "4CXfnyQgpN2t45QeE6KVtq5pGnTEngxbX7TfofgGoziApifUEfud9hNiPw6qrNJmugzAhuEkMPfkkAZ4cbm8y4JF",
  "key2": "3JBzjUHNNH3rLXbWagHRbbDHo18hdUFq3v9UBDu5ARJLunuxdazVDQPiqfQopqDrSFVzV5NFf16SkxyJP8GnjHZ5",
  "key3": "5cwBzb3ukXCaNZFzVGWeqPMv6uRa5K2KzSqpbGLJEX5bEiUdgURNNF4i6jsEUFaKieM94zGGyW1cHNgDd3j3cWdF",
  "key4": "4779oCHxL7KE8aCJCegzZLR4CRraTgAnCcMSNbAfViCzajtMWxTmKvVVgJgNWrGEXbAg5C8fuiVjKequbVza18RU",
  "key5": "tX3znLkygGBkcrrEyb2fFMS1xSYGFGxgitbnV8BZyr6D1PKAYcWvTV7GyTkkZM38aFrGpPWXo16FG51nfAbQ8Su",
  "key6": "64BU9bKHuVQfkVppJwBttBzEEZ6xPJX7emvPao4EHFZAU8vAhr1ZEZvtDo9vXYXmB8iL2SUueSjsGcGcAaymrXbW",
  "key7": "3BkubgSVrSQbp69jVHMEyPZVAFxpcaGCVvJBLfCEar7eFnimQ6zDhBP1eLVcLgia3dsBa1poE1hQhsjYPqFzoxdF",
  "key8": "3W45ABpBbwqR2X3vkNg7vH5sxcePaRqRavDNs6ZsUbsgUtGV234p1zn5Mn4jp7M1WGJ5tGFT32qKMBQCMaMWvz9z",
  "key9": "4BKgVS5XrHgPDyGAMTvsTKkwb1ogdUxsb7cRLRqymWirhxNWKRZzWK7FEkSXSnG5Mi7NW8PdPg6wnF6huBfuLbzQ",
  "key10": "4UeDAwErdPr4CcqgwJfiVwDBjkvKFEU1itDvm7cAPv8bXshmzZKA3y8Sfw6b8RiMMuE21PiBNDj3n9XtUKHLYpJa",
  "key11": "3JjNQmejZq9Ab9QFsseavqindf3Jf8L93u7sTCto1UhnzMegsRoihdgNPpECprfXxKtfnsdtvpcKwppHoxeXSMzJ",
  "key12": "3pewBwRe8hep56WPK8aARVDqZnPSg6DHK5sG1ikmYytEhwYh3Q9rviTgAe8BwweqN2qb7Cq8LpuwTAS2CHJsioNJ",
  "key13": "25rL2zrtVWvxNZaZVF5iGG8cekHzkL7e1QRK8hXPABg8n2NgK2N9go1KWSEPMB8cbj7AsG4bAuLz9ZZuoL6ZTtPL",
  "key14": "2ccw3BFquniXugzsAz8UCTDA5qaw8D7x5TfBhjmsJiaz1J18ZWRADarg64mFJHB262zBjjAgLJX5XqcomCeqduge",
  "key15": "9iwabu38w5zJrC75m4VJMvaiYjqLpokGhxjZLqLQwD9jUrvQsYB2UyZ7jj6PBj1EFxoBygzGswSPydEyjm79vwm",
  "key16": "dLvtfotRbRmZUspoDjpCxeDRMc26j62rewb9pa3rivCUu7G6shNQmX7bMsWRCuMGAVG43i3NzmezKfCrHgGgq46",
  "key17": "29ka6cvpEoHLZ2ksvn2EV2H2Nuc1yyVDZKSxauigEBiXdMKetdUkzNaUr2VnmYM8tFgaRDLE7MYskF8R8gGTyrLM",
  "key18": "58F7AzBRy3qrf8md7w9RMZgEQysmMWBRS5u3UX8oA8QAFmF1GKPE8xrjt9N3bdRXqNoKmxMUucKQJLpnwUS7fJqK",
  "key19": "29YWvTjkfC8AycYfasifY7MfAQgdUhTYVZez1KQmwoEo1xMKcX2G7c9UyJEkcNsUioTsVXvyVpqmT8yio4HueRZV",
  "key20": "24jfa1dd9Kr2QcVRBgFz4o2fbkVDjjjaF8dHshjVmuxifqF26cadS7TARW1Bj8mwypEJBoqWyZPxAMj3jUVmDtDB",
  "key21": "2Adk1WRqjdM5hfibgrBQjbKoatxgWXiRPdeMATiYLv4CsFK4q2zif8XvfUUvSR4azQ7J4tfyr1RY2tWr2iUYXoER",
  "key22": "52SgrfAEx1fPzkJkciaCY3s8yq9ALXbR4sNz446gUm8JnMfvyAWhNw9JreNyfx3UcRyenFh99NVYEBTTVh9xPSZB",
  "key23": "32uTwLF9gw5RC6kdWzaRefDwB2768iHiE6ohF9bVgG9d1NkkdJPXrkvG3B3EnjZxTNcJc1oNkm8Rx6wnr3kUCP3t",
  "key24": "42tCPkwPfAwxhoMpsSacMiQt2GDtmR8zoEnFfrxgchSfwCHtvsjP66GKQmqxWmMc2xqhF4HZwv2gWuzmWMohdR4D",
  "key25": "4jh6pnkw5CULQEwPSVJXPSFsJkxzKwfBFbCzE5J15375drVPTZiWkWaFvMTZ8cPA9yFSPX1GeFTqCwFJteNXMfNe",
  "key26": "5tF1pYTYcfyAMjGk3ADgGA3uyGj1hsiEJfV2rNqYTQHRUe5bKVNjGhVXR47RJyGfrDJN9PFbrHSDrDWkakxyu4N5",
  "key27": "3oidqBtrDPoey1vYb2P2i2etKYddpTrGf5CRmMGHAkzDiPGc6aZCzuYRdfLfMYd6QDA7ukQmrZw9yA23oZGkr2ks",
  "key28": "3UqtKYk29oGxmWw2ocR5p5548vucWjV5PUqxTA5ionUukxMPioeXbkxNQM1w7Yb5rAmnyLunBhdgHurgo3aeNhnQ",
  "key29": "9CWomCjz532oM18YQiPsxZvfCT6ByaVbFpoNc9WBmK7fqovqAdXXj4SjDaPJoS67CWvaKrTCeKs24V2CR7eAEmX",
  "key30": "3pHsjkwn7jTpmYFmBaP3j5cxH7XWLMqBjT5G6WCNhZLQQTCXFKmxjqkJiAQ277CbYx85Rzcxkbrug11VothNdFwB",
  "key31": "5AYnbC8RyYE5ubiWd3AZVKVyZhmB4N8BZmbaXyNke5uir3UpHqs8LWaJkrxF3q3P2UyGbP7hUoFLKkNWbrwyn5ip",
  "key32": "zndnAnv3oW4mUJWLeASWabhNwxfZDhWjtbkwwbCgcQUoDzRqVs7y87PUiErcArPqfn28A75SJ7trgTa2pdd21sL",
  "key33": "2nDmg9g8pXNve3j6UdTVERnGK6UnvpVXmtwDucca4Y8ixZ6bE2jgPEoKhMnDGf6B4uZyMdS45iGvByANowSAF3tb",
  "key34": "4aw2YryMXnQSbc3gotJk3istB1FoTiVrphJsyNzy7UC74nfxDt3yH1aCfn44rPdweDczeo8SgUMqcqDQXhEVKoHm",
  "key35": "2iVhQUvLhghVFdprZvF5LLkY3caLqP3h6VbtdJXxGYDpUdde2QLBGVmdQT8WJeBgzTEEiDohyw4VLocRymu7esBZ",
  "key36": "4ijYKAMN2mVEpfL3ofu1gyRwkoay1832o7kGaAehJxuTZQQCrbjmpQdsdwEFRQTZPZgAwbNf5g2cX8FPgjp9ez5W"
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
