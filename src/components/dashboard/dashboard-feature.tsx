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
    "3fBnL6qCpXoQ17y5cPXizZzRUmTrRd2Ti8qe8hfhLRACuqPrPXFRxXqVzcGFDzBNFYTXh7KdpnETGxmVZgAizatK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FaPfBY8KjTRs2nySiTBpqfVC864dg1u7ZGdGDXGWsLhWUoJ9sPtt1Gg3quo5H3st6DGcpSJgHPymSHmHzR9CLpg",
  "key1": "RvoZbaeBPmqM8i9Q8LRiDqKcizqdM1tyNnUwYdH89ZuddQvawFvQTd1MqM5zGd4pq8DRpmSbQ4GBoj1NonKtWQB",
  "key2": "4wCXxQVxR51VVkFYRwQCecqa1vsFdPnPNUepbEUwUnK6oFRLkfD4Qiyq3qgWyjuSpQt5CZA7p5BH4VdvjG5BRfzE",
  "key3": "5AwUHgy8iAshUhUtfXsRa2qkopgrZkmrHmUGkWnWsNpnCFFFCiMkEmu9EnooxwH45tDiFetDP6bcvuz9SiyrkBGh",
  "key4": "Dvjon4ypgSJvGwzvFVu5CgjMjxTGV2EjdCeraCNgBJUo5kdAnEXUNMDijQ9Fzr6HftaFcHB72SGdbcPyEMak2C2",
  "key5": "eSCoTXmYFgwwL9pKmUR9eKHf9B3XJtSzLnap77LUfxqkZZh9YVbiuW2fBzCmtusE8jvnRgfQ8XpdGoAh4HQxkmc",
  "key6": "2HKvUhRMZ7pvQu9pERsY6sULzdSNu8Q9nBBVWu5msjBKf1FBUvBEwu3FyjyuGtYJK9aRswQezJUquwcJE164Y8kk",
  "key7": "WihnuJwM4HypxG5z23ntVjmaoT4HHafNeVkw1EanZcA3wtMMJWnzFHbxfAreN2cgGiZN8mcnMvifXwMTjQzuTXK",
  "key8": "4zQ28zBTiydBopMATnGZxPTASPiEMpZPcHnSxCYCkSPhcSTme9sqSBULBGae953Yq87VrwwH4SZDffwAcuqYNWoq",
  "key9": "2aFMj7xvVsmR691r9JpvFmwgjfJ7z3aqBQAJK2uVBgSVo9zJPKthP3q4M1GvWiwKf1BT5qUQe762tbZfBhAnzh1M",
  "key10": "YV8XqTpaPhABHYg5u8X6tr7D2pBWpzB47hjDVoS9pnNjBaRS2YKfsN7FKMFK7vL66Y5KSurQ8pNdvsZKN2GR4C7",
  "key11": "4a9ys8aEN26cc6cxB7BEVmRNCKmrhjLbgXgwMAH382D6CyYrAzEuR9vJqVDy4CgfQaoqAYBhUHkhSoT16BxoGYkh",
  "key12": "upwzfMokZ9gZWAhirtqbE6t7vfck2X5yb7tnZ1oyy6jLCznt8VgH1DrzSupwmVWk4jYV1XjQAHiNXH72SThrEi8",
  "key13": "573esC2oxe91AJZy2hkpnF7NwpmC7MuuN4NqpY8aZnZ1ctg46S1pHrHctT69gHZZDVAM9ZxyDFuKRNCt27fEqs2k",
  "key14": "2gogvWrX9NatQdvr248oyHHjYgh9QuUPnc1BPJ9qWSLhh489iy6PiDQJznSn5k8eczK6UE34btMCkE7wgbpZdiw3",
  "key15": "5w2KuT9ezaeuvtDfsAi4tBhstRMMgkbryTiBVSV1DYRt529XpSFF7PkCWPpWBJ1qapoaN1uZmkqR7wLxiXLdCixs",
  "key16": "5iCQjwsm7RpbDtANhohG2c8xrMdLhmRnFE9zC6yHtQFHMQ6acyz5hKYQBdPVhd5sJNftuTQ3ozMvVvanENY25ovb",
  "key17": "4v9TXdG1AgSsscdyG3ybUHKK1A9S6ECqukmRutAnC1jRZowqJ3JCaLZTN4D9UYWs1Vu5FbYqFQnaMpZhoRqcrx4n",
  "key18": "3CtZwnjXcYL5LRNdRbVfws6w9nrH31edsTwNt8pVhYbagm824jYkD9i9WTobrKq5gPx96XszFvvnMyyeK8QXgrbD",
  "key19": "4JWuWESg8EGgvZPG4aKmAJHzRJnVK2TryBPNuBuia7czzidMvMp7eQM2KidDRCv86qNHR8rizytf6TjczegM4s6v",
  "key20": "QhTNPhZU2wVyYnW9hEi9DqusLdQqpuZQQ8Q6nXGGqPCwcXrYUJiP2X4CECThr4ht8PuZEWtNb7mH4bjSJZRodTr",
  "key21": "5pHRRCBN36SNZcqUQHBMboSGUcHG9PhV4hRCq2wWP3WbjmtjjnT7myhWN3VeiaT6mHfHtqfD8F9diT1nv9AK4jdB",
  "key22": "mfdGkqbYaLXBHL3Sa8hxsEYBMptqGoWDQR8vZHkSakNNJxiHU1ZW5AETkcPu3amEv3tEqgAmd3jAofPmE8kxzsB",
  "key23": "65VVC2vrjTbXohXQt3iEqgBvNzaZibD7LX866sYEPCLDZdpdamdCDmEj4pFUZvXYD3ZBbySXPELsv9n9A4Mrj3rw",
  "key24": "5YCXVNEQSVuVApdzqBjhFRNvjfUGiQ98r1h9qFmWL3gVADRgQyb3ySx2gYbXJzxnojgwMdrQSE7KPmXL8cPbapyB",
  "key25": "4imDDwtwU2qX2TM8vjLXfNRbA6dqpy6o3kxuk5pYLRNtPNqNfvuW86j4V13PHzJTZkkDkaHcdj4eY9MqyaLNpo2X",
  "key26": "5UDRSeDGesWBSZo1LdaDnrCtfjkt5q35aYw5t7UsgZ8NMWAjUgj1mJXj9DKaJ36Sc22KoQsoNzQgNFoLxrtSEFp7",
  "key27": "24Uwe3Z13qZng3x1FbdLdVJ8H55hLQn56SypVzeMSiSPYVzETwY3UWq3Hfw5weLJSTbc6qhyKT7x3ba3NqH8gceH",
  "key28": "MK3WhJxyrF8QfJY8SU7Vq3yngCuznU1tfugCw8BUEFixCybv13mkAHM2RgnaSEe5SUjncvRmziNruBN19Gazo89",
  "key29": "PLvBGwpECwPbitu3udkbtMwn6R1kmP2t9wBkDbzzoAMjeXrAtD5mRfdFoadconvPQdfa53okjvQu5r9BdPrDpE9",
  "key30": "51fXkcEYWb4Z3hnZnU7kTcCZSJRTcefgtRiWUQvcUo9TPC4crzRtuSvwSJcaa2sP8DianAYxuGB1z348KAuj8DVB",
  "key31": "2iNfUKHmUJkcMRcSfkt2HxTJqP6bv2Dno4Ad4P7iYJZiLv4YtRhJSoyM5vmk7oh3goBc1iSdZqM934dRBej2fNp8",
  "key32": "jFqdjZYrdypA2LkGcLV6yBPAZEvTv1RwEaV9Rb51FznTRd5xj5qqSzuBxq3pTLD9iSPEEUBvPYjuEJGDfikScuw",
  "key33": "4UaRSayr9mXhGjpme1Yrivchwt1vNmbxtsW6MPLc9vG1PELzsS4D8a9m5o5gUKJYQUXvjiqtULASXc7zrbymKJST"
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
