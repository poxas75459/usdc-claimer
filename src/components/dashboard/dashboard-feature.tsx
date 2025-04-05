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
    "4NiKsoavUscjjDbZUetxBcbbkki5dSRbTFsdhg4NpHFMZ3MfwhctLctTRxpJs48SsrkrFy4QcVNnzyheqiCsYTwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bZe7qQarSGYbMLW7BoANUedXiuHwNxQpZ4YvvZMM4N3FMr6kirV7XNtSLeCjsV2cCaFvCTBoqfzTbB8H2Yzp6JQ",
  "key1": "4gh8Y5yw1YkAbyMN5HhucYKSuYFaAus1TcqvJjBRojDgStvN4REd8jZoyubN7ukxXPFNxxbHre9XTUsN7G4M3wp7",
  "key2": "3uhczMdayAdgJk98h5XG5oTkJfLuXvdiQxUdbD422TdR2C4cWfFhaozs5dWWxMFk5PFBm9Xn75s5TYYZ3JQaF7Fn",
  "key3": "28QrQrgj5g1hsLZzzi7bGyv31mvSyBB6vrK9nGVyghm4zSLGaFpps7Wu2Dk1mmVPKkLxZFcTeKhvGjxZux4L6RxJ",
  "key4": "4Bapp8KGrP798hzv26nSGB4VigHfZfbponjtTBHmnmVxnYT74uJeANcRWEwWdzxoC659Re97MmwxFVpcdKAq32a3",
  "key5": "38wh6gs8nmAUZ8Y8L8gHvDYYHVUBK88oij69qu4RKHWA926LDiiTUDtdd3MKz8m6Bof9oNk9Qb47Da22PH6FmMJz",
  "key6": "3EfKVryt3jQFKvwhtrkmRGeNq2moRrvqBR3Uwt7vnDjvZB8s76FCQwG7XHkSefJhhsLA9RJmrf4kAie91oJqFjjc",
  "key7": "2dz2XHLE3zj4THTuEn6Ad1mhzgqNJD4nEhrP4tfb8DVUW8bsa5hg4kLxJaGMXzf2Y5oNQYR1u7bLs7DmsQkMvnXd",
  "key8": "424sEvcGrQQY9LnAifFRXmPWpLhi1tbeo5jg1zDpiWncntNw5ACn2WRnZPjxiYNkbz12XtoDjafVgtkgjNo94wkZ",
  "key9": "63KLfUsQoYRyJWb6QtfJjPNbikhrhHMWmi6JsE6bBv7DpwFftfSSYBXy8a9Q5FMbwUCj4nJjchsmsM63qsUZELwP",
  "key10": "3BbFanUpwv4zx5LwY3ZGFsE36SYQjbqVpfTpbXJ8T6myFJvKgC6v3jMV5NP8LQyYYzWW83R8rL6CfRPfKvAGhdV",
  "key11": "67oY7bucTNYQZjctaG9eZavShY1GdEpyYfvo7M3m8dLTGJ64Y1BT6WaZbuaJvN4bLMLutjtEB1guVq5qgAKc1B9Z",
  "key12": "2u6GJXpeRB1t54sLjRR7FajS1G1ZGyLrjtrwJcmLHyj55gT9Xey693b8rpQUwDsTjQ7VFYj4KWz7EX7fc9R6AW5m",
  "key13": "5XeqbxE47JrqGUQjTAsUMd4pwx3uKeQSi54fKiYD6ZS9dNyE3fFGmWyDAJ5ospYidsz6CLscHvdqDs7rNDzm2vh9",
  "key14": "57KCU9aHikLjJmcjXqrTiCjEid6UHF8xs5bNQETdWviQ7TPqmRdmksBqokfJzwSVsYMAh3YhVmhJm86dJfu8QP2W",
  "key15": "3ueeaDyNqUrfrv4smmN1W6a91967oNUsvgCMzUugru8vyDJf86PGz8vMX2aPaSNEb95vy4xSghuDCW3R3zWjeTXb",
  "key16": "4g9J4btmViTD9Pxs7DxuVpzk3qM5YreWs6Uh6HAMYzK6o4UDcKNjG7xEay3T5TS8yShbSHKWdwfnjXL112HoEpjf",
  "key17": "2iPJFaFJ62sq95LH7GtY2iB2Sm4A6M75GWYPpaMEegm1T4LTzaHZS3eUzaqkdUJy8qumhsT1kfQqZbqdjiVG3Z1G",
  "key18": "4yohEeJv99d5Mwm2kQ4u6NoMTEtZnhztK5V4R1kiUyCZKy8NuB2YsojnLCM1tYGip1Cmm34jNjqeZvqEXFjrqVe",
  "key19": "4EHUwuvkR2D3S8EcYrqGmG5V8cJWLnaLCNzXf7e9mXvnckg4nyeTxjczMow9RuTKoqXQrq5uwvZhM2DebBXBiEdo",
  "key20": "2q3RdxJEsugjfkw26CFwKNR7yPNiVPSGo53zttpeuyNm1ETk3bXexMo5dyCdqeh2ixV2qnK6JAMftYWHsfv9zxHq",
  "key21": "2fwsfHoGvwneDLdbaXGubPymKhy6nC7ar9vy7EMXnTNg2VLdLHwY7ZzgGNJAt1RHLA2mVSuVB8nXZShSi3hBA99k",
  "key22": "496mgGBgFuoWo7E3CbAmoGpZbGbHDNQ8QvEZDfzESfVuaA1rnv4fL6ZBX4FeDuaHAq1CYBrrF1YsDCTnBGS8MZSG",
  "key23": "4uvtsuP4qQAxf7fDmPKEZSDehqVbLsCCwHFvYeQjajpUFLMRFpgJPk3cbdyQVZxeVuEYjkFw6GBrhmH2iWB1YB6A",
  "key24": "4e7qcPmKqcSG5crFGifms4eWv6AkZ1YDTFkehoNy1ZHDvkDxnpgB6srb5Cacs6u6oy1qRbLZ92QzPP3hZsQdpwsa",
  "key25": "U1Bzhz56rWBTbQRgRCJzbCZZJxmiiabQF5xXx2JeHWgsbKgE35WXCyLK49qJvdsLXrXqNVTmsnvtthCeNEnyAAD",
  "key26": "61sbhvX1QLd7D6tJ1sq8BkzQVzvPhuFdf5SFVgfw7kSSvCyosR2g6UzCyZvbFCjgafGtYvWQrNyWFtw9b3NTYjpN",
  "key27": "ynbN3HP9hKQL9c9mGPq5TPZjrgxeA9X7GEw81NoRcRcsCxAkuWxTV9VKieTyPbEoPnKCVEeWbuRJEs71Zyp6bhR",
  "key28": "4c5ZKPadFEynQAa2UUxunVgzeQwXRpp6e5DaRJqUJ9FN1MGvwQrMraaseTSqKkDSuT7TenMPM5L3pTckAfj9HhVs",
  "key29": "5CboATMK4E1bDF5VhvHr7EpNHpWHvDYkhv3YHbFRV2R9JnXvgBC8P2ARSpCU8GH2GBUTSVHy4fxrT4ULUPUQrSBx",
  "key30": "3xBZoKEGk37Q7NZp6yNpq4jrPeCD63fkwj8zHpdJ8KXnFT7uYGftoHerkHHbLv5VneVBdmbCuqrSgUYVe5wgV2oX",
  "key31": "3qHi1d3aumG166voZ4BYnUAXk4qyCavPQjiiiNcMLsvc4LXNCUAChmoUDkFWqwfe6HGniN4gondZpfCq6DqTUi4Q",
  "key32": "4tS5GCQ7wbUNWe8ayyWCszSTgi84BNWniP78T2yCdg6VxbwGzj97qEVjEko352YzEomz6ahPFsvytRNV6QsQzawy",
  "key33": "3HXDBU2Za1YMP1s3vZPxMKYLyzPH2vhTkQuqZTz2z9e59CWMaFXrWvKwKdGS9MJaDnSXgiBTzfaeFquT36Zfi7D1",
  "key34": "5aQAYjUgrzhpChRqERQJTm7Ejjat4b6yqZNXsDfrW17jtnJPG8wCkCqtDpAqPUaUaFzSYv2fS1y9ALGKbqqAGwg8",
  "key35": "KQE4oeyVXv2qMui18WZyBZSB2EBbiMVw4kTDEPtK62cAg8NFArwm6N1c1JDGnKwkzMdFLKq2eYdAmFazoAYhyd7",
  "key36": "2UU5PJFx7R1ZkWAAi2h5CKLCYxhDDPq5UqWKpbX9rQnMWAgeUHVST9hwbmUPUzg2qSpAEYqgi7aocGn3SCtUP1aK"
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
