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
    "3ZsQktZPfXBFcVtDVrN1QMfxTEX8Zy9hh6WMnn7KkPwUJMWzE6JiQ3EPvFDrTZAbdkCzJaWUn7eUsANnRZjG5ReP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5714sKUWd2KJZ91y1eziBNUSJWQ5hp1CqZaT5AyZjhW8eonMhrym98UaJpkg2cdYvAkkFqrActwdg5ue2TP4i9t6",
  "key1": "wTzZBLLEXJzHjwkUJp7ddaro2361H1vFxtoxTVTzkpsjW2bwffXJ3x71ugT3CX6Prq4vKDSKgF6RSL64ArfqkqD",
  "key2": "25GsPVvg3T968yBaYmVEhhMqkSxbbBmadSXYq9zwWHqd1HAH5MS3Di92zPjwf1giRLV52VJnAJKA67orMYHfnpui",
  "key3": "5fLLfs9ipX7Pna2ZenQxi9wxCUVVe9scFwjmfa43K3EEDRj45gRvKjbjyqV4EjRjSYG9FXV2qvnAzEEbg1SUhuSi",
  "key4": "33YVfp2suvdkiGXRtMyJMnzgFbRgMzY5Xz1nmVeAu62qqU94vAGYK4DwwAbVRFrXdsVncrKjsMLy2fCeEP24jsxS",
  "key5": "5UuxweSVsqnf3p5ByJZm86X4UCASK5TvNnWi264je99ko9v1Dyhr5uvQPkxjvFAJdDj8YiFvEq1CViDiSX1HBtfw",
  "key6": "5KCDd75eaHecinxZak3bnEQimeazCVUkAFwksAALwM5bySBbK3JBqtFmuEeT8u2FCumCLUaDLMBzfQPrqWv4wjT5",
  "key7": "3oY3pLkkpFCSMPzKSSC516F5ZyZKF2F4G6ZQ1YMCVM9UUDJvFPwLGjfbvzWXgrUTXHRFUFpw7K5qS8P8pW2GNqtt",
  "key8": "4LzsPFC2zicQNkzABAczQNJwrNZocDaBTEeTsfbFe47U1xS9myQzLfP2FzkYPbnN5Z4ViRWuLt2TsUkmXzuK2Zj4",
  "key9": "4UZrAgSwT3aUBcybUAgCZkurH7HfnQEf8p979pCxqMEs9v8t4k5fJYnbBgrFC7YCY1yJBbL8Dm8iJiQLUAd6p3gv",
  "key10": "omrvxF8U58qchguuCn2Mac98CbUrbtZZ6qQtM6FMi4ac3ibDXq6M169ModbRNKXaQqWje4aGJKQpsq3tkFTGRVy",
  "key11": "5HW352FUsB4TrUhqRzERpNyueuWDZDcKhp4GmmfKT6Zxug2wmCXZzbi6nUGYQU5SR7wXU6cLH1EsRsiuk1MjZhvy",
  "key12": "5osna1hjH85aC6k1xWXiGv2ZDiYHrAXwfx64H97RiAWFZBwE6G1UD9eUKspenMoJwVeSSyPeJEaeSK9gro9pqjYZ",
  "key13": "4UaHY5ctuqH5j9JN1KRnPH4SpT1Nhjcv66ARmdbNs9ThQ9LNfbuqzdDizzpcSWAxV3R1YkfwdXVVNUGMG1AaRoos",
  "key14": "4jeyPn52QvNRYYtdTtjVGhmdPZrFdN6eJRooNoA3iShCyGf4PBXJwq9gWNdyREzc2WnzY3H4a753ZQnnf78fPnwc",
  "key15": "tpxgXRpXkPjTF6vgUttEPsfCri7Crv6vYDAujWikcK24CQbCmysjr2fQ6FABuscKXzrt7vKcwgW5U7fCL3i1uoc",
  "key16": "s8jHLKxuc3aBZ1oudsoupvx7PH7w88WiVrXJVJwjL8149p5HXnb77fJFGHKyKTEUXMNi9WhA8jJgn1C7J5e2867",
  "key17": "2NNMmYW5MTRjXsFadD92bpb1Xpe8FYJYKrwvEmbUcK6XdFcaxZwrDHJSzuQ4v2i9c3bTLm4WVDbUDdJ5adysrs9J",
  "key18": "3KbyVVy2M1c5GyrcSfv3yeRPTEayaHaiEx6w1bgLLAcHriqT7q4TWjqtsiW9jVBzA1xfEqLhFMoDWzVmDpckP4vE",
  "key19": "34GTBeGz9Zpix1xMPeGgSNHvK78LRC6k2Bzp3L2YWybQx8FqA9PgNiq38LHkL6tqufzUzDPSnRQUbWYaGVinXKRn",
  "key20": "2cxoz6N5K43W2UgEvUMxfMyxroEyPRw72qFW9y4ba85A1gkkofg5zH6uw4cod8hUHGYZ9KpcT3T59tU8uusZivYU",
  "key21": "5aWrnfSHhiUX1ymAdDFMHqjitT7wGAVGeaEbN7ubjJcNbN2bvDt4cznksf1AFVJ6XWRdJgc4LRh5oUjd1wv6N4E",
  "key22": "5LEf4Mjzxp8tDttmkFmfn65Rqo8NgCLMU5vfcAoKGr8shJ9opawYUuz85NUHxTb4AQeTyJ5hnDvpWS9hrfYrcCEB",
  "key23": "4WbjLi12wTsD1jSkVnRKrPeC3UzRNriFPYV8cAkQ8czQgAogVsM6PKRvBZEVCq2niBQRynwPJjwTpa1EYVZrzB6v",
  "key24": "5vkwhAdST6g5cDzZtrzegkFHT3QAv57P61W7S3pmStSh4gC97cvzq2z4hA9JidX8MDHCy6sMcrLKaxXgyyRkzK8c",
  "key25": "3LdTgYMR3jndtqc9yXaQQQa4jKTASRiUmg5iQGykyTzsL7gCkjvexFf3JZDQrYMmZUAYj37yofAvwYG8aAjjPt9K",
  "key26": "3tiAtyfeHPYf9WUXDjMNE52s6kkmi9fjgjeAdZ1dzyM51fH5gy18ZZp66uJgEttMgcpEN1NpZATTHYuRpoxo3bPu",
  "key27": "2yTtH1qsckZ4D5H3ZzQwGkgGZcW25PceLK5CA6MunPF4ojNmQZTekBcXrKhhDWUz7xwhWGV2vbLgbAwaBecFftHg",
  "key28": "64hgpjpPkUVCsmuNU2PyuGXGmfWsx2UHDWnQPzVpKTZTT6UYNUPFvuhzGaMd8kzDaKKAXVqfVwr5sD5BrhyQP1Vw",
  "key29": "58Y5NKZ4Jfpcm5NfsnH1BMUrGEpC5dfY2wAy4i14w4gX6yrT49NRvVDSV2HTEwjhFuw96ufma7RV3k14SxKmXm5b",
  "key30": "LqG81jHiMrcnCheeguYWLQ2EgELM19yysLBafTgcCu9Cs2PFNFey3ZXTMFeJfEwRvV11GQah5FPiFsAVcAkNZmq",
  "key31": "4MGsxkG5ML3Vkz5wuWDgJYT7kTsJoKBWVURA2pG5nVmXCKJXxXz3vBnWkjYbWuSR6uEPiHMo3ZECFSNa4uXYHxWr"
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
