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
    "89TfAGm4YUfUDeGUoHFqCqSiURgM9BicPkWkBxTaJfokzweeVzntnEjjyJbpP8cEgHG2oLujon1z23WQ2Bvz9zf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h38iocuRdi57xd6y3HzfPtwqNVhyJMyWusto1mnUHGq1obkBKwBA25CyTm9y9EXEExj51X9W36JLsBx8BE1TVPZ",
  "key1": "4uPqQw1RhfvaCtUdXZzbFFcpM4Cy3Uh2gRKh3RNRz1E6AdsX2ecWEjvLBCKxYfQ2p5EsaXmyyCNbJ7daEvDNHutd",
  "key2": "39gU8LmL2rtZicoSByGSmP7UVaoUUxQbLk47bc3NG37CWTVfWoTfrkMXyZ2WWmBFjtbPuy7yuLRBRiVChKUD9EUP",
  "key3": "5zZGSPbQWZtEej4tzuTwBHBL3dsi1yXfsnp5JLPDLZm29XoU47V9LUwuZHDTbNwcLU5t7shXTdKHbM8Zx2pd2N5",
  "key4": "5oFkiUq7LUaYoJG1WR4d3Nzui5t8bBHKzcT5dQNFKcoXXANJT3boA5P8WiLp9oYmNyne4yC4fByNEu1mQwP1CUvS",
  "key5": "5KfC7uauDkXGuJ9mLivXV4VmvBUbPTnp1GsPFSZ6PJ6Em41SCL2LX4DQrXU8RVce6YWHa1QMDhF7cBHQLgLAGkuf",
  "key6": "3w7BkhF2KBq4CsJdUjdpP2N7AokmgNcGQaZEJDvkdQWyWSZRPd8WioWBMwGfJLbyGpmjn9vz3BqhHDwQuLFWJWde",
  "key7": "2npvasSCU5pXJhoxP3JKfuKEno5ASiTzcadiSJCakR2UopZUB4mocyjQtzrnRwuMya5ugBMLsGGGqYvdfCYigemV",
  "key8": "DYjj21nMUbxGCDTUzob3CPk1dfZNXwgPwEcTWyzfApKgPo4SH8wj9mYmUKkhDUK9Ne9W1MUcVKvtjBjW6mQmaxM",
  "key9": "5zkLs1L347eejFgQiohjTSDusbxydecFy3cbdH4HAVq95yZJhJTMpr4J15CLzNvorr6AXGvL2EwS21A4ry42FXwL",
  "key10": "3auqqfQNfS9MZ1s1kUsNqKbfDv4BgS3aUPVKUHcSmVRXZoGUCJNoBUN79zvXH2PTtZvNMY2UBz4phqUsxARjX78U",
  "key11": "3r9DQqzQpM864tgiYM2k4b48kNyyiUuu5k3yQmxV7RLSBj25qcG72jvzyCxnxcNRCQ7P8renauJaUkJiVpGpHJBp",
  "key12": "43WT3FV9ZQvVLnjZrJzRWEg8quBrrJWtdw4vJmshTunRRNBwB8DpWfihoxfTS8ygFghzLgHdGevKyk1Sg9sMxouz",
  "key13": "5i9z2eXydW78Wfq4x5tH1pok819JVK7FskXLozXGCzn1wEpHWLsbDfhYMk9TpLpo4X3AxL3YPujjFwEfNVeGCDfr",
  "key14": "zi3ffzfAJ6fdk87tgETyMZXsug3632iZrMP3GbA2CaU6R4sNQuTFRbPRs5CzVda4MGaRi7K4ico64qsAhhNBBxE",
  "key15": "41MaA48sD11vu7PDNbcF8myPeJ7p24GXrEisbJgNM2bvZYdzLVM3UAuN4boWP4rRKmDx7n3wvpCS7vkXsnahmXFm",
  "key16": "3EwFRydkReTMoysgPEa6CdZekfGxmJxWtsfhETfVg2Bh5GbQMcD2cB8YdHA3Xvy9YKykcZV1ENM7eWfLs2VCkhYX",
  "key17": "2EM93zeyBCQJ6ayvtyxK6FcA64LaRpa2Pve5dtBL6rzsLxV9V7ekXjgVZetAcWUtfnEa9adubCAsHs9w7ZPqyF5i",
  "key18": "2Nrcwyq6SbzYCPAdgDbM37Wjy5iajPBPxXnhPaaQESfqTvwonwsUJ1g81KsE51bdEvkzDxgCpd7Pi3XiU2JrRByL",
  "key19": "3Jye3VuBExojirAj5HdDtr2MpZi7Ad6xfXf1JtLmxwWoGtmVwzirZiZLYmkyVy5pMHtzcBknToDo4hyDji6A3T5Y",
  "key20": "4Zm2ESv1qKqDf3paTUd765BMyPksSm4yoVhXKHAKW8kc34dyZkdUmy89ztaQykAvutLTN4EphwNjGuWY9QirtLy2",
  "key21": "WkDes8KPr1vidST4jyLnmaFTHz4zYZYf74XMnCV4Qan5ZkEAaUuPXDPrU2v4XrKbb4Z8h6iQC4JiiqVB1fgtCsW",
  "key22": "ei1pxEEN2GJsVguWsv8R2XS4XvY8BztYLiytd7U8RXqDaqrGbj3q8Yg46ugBghQkTTUEcAfzwLrrRy7JJ2ygbWk",
  "key23": "5K2spn1UzsPcvT4TuYLtEpj1bdUcmYm3QAngYcBCfddo9eTNKTRXYbYtoGVyDvPknKUAjfpZLoB6DUKb1Wzk7eyc",
  "key24": "4ZXqLkbVG3J5jHpCuejdxUBLhVAXozjkcECqfTpsjdsYat1mjYnHKhcBDSx4kxqTQS4kdaFGWv4xSNfCKGw2jFWL",
  "key25": "eooUfo53P5AsCZG4i1gLeU5fhxrrifChzWwYvsCocLhqwhbxXvWmevk9ETDnQcUeVSKGrCtcPyZJCN39ThMFpwz",
  "key26": "3V2GwTxQk91hVT9Bk11ecJAHpJbCUBGHBoHEZThDgddzPuzDfMGFYTvPSdxk76G9cfr4sspfQKzAjbJRyphU2Jk9",
  "key27": "611NqPWD8TFjsDex89Lc5yCh1KfJVbeo1hq2anE1nyVid1vBHgDD26u7nWRooNoSaxoMDBKyHuv2TWzqD8dPe7fi",
  "key28": "3wfiy8aUpRJfpjWJLCjAPFYxFV6Mp6MSBzgC59Zi34XaFugJB1P8wiwUfZs5kAPCvoozKbBuMk7875XbA39Qwb2G",
  "key29": "4gYdcMLh2yyUknLL49Ba5JKt4DWo3M7rLqztK5KShvzzipCBbCsBn5WSW2fuUoo9fE87dDygnsUnzGc8ZdjAAMGG"
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
