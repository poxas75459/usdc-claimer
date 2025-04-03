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
    "wvestngrwtSNCfksnrV8EX9RKYXbaUKzNY1wKiEVhMMS3nAD6CTPuXwdemR9t8Y8BksvGwU6YiSMicYdokUi6mE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d5hAco8ADCsFasFKQSSne3jkxccK5LXxLbzL58AYy5Wtig5pJqEs7TFnzRchRRi9VhKpVtgLWLAs61hnQTJzacK",
  "key1": "4mPVsBAms2qcuecpXG8DfLthGeuqXuo6Lscn5Xo22ymnhDTm98EvAzFNv3RbQhtTsS2YQzV8pC6y8XPETBriyBF9",
  "key2": "3ifbWqk3zgF8Wgph8M3Kped4V1yeETZWgTKfnYo3AdT8epWaWAAnmC4bzKogYBd2QxC8o3cFZ6EzhzNgUwM4JJoM",
  "key3": "51JY5Eosz3yNtoC265J7Zc3LEvS1LwqGZSJeZ68hoRbX6tWj9Zd71w64TvahfDfHAC1qQkWQGSb8RFyd3GRjBAGg",
  "key4": "zsfdZ79Pfbs1sJkivMbtn6XFMvkeYD1Js8KYv1gVTgvAxU4M3Utg6Dx5PNh2NUnEr1k6DmgA55xTrVJWMBN1FR9",
  "key5": "59YzyeYjNt13ZV1PgoNXrCfQ3yfruyrHsWoYRYbm8eABY3Y79KN7MyGy4ygFLRuZV13oh6e8maSq55zVfdLuB4he",
  "key6": "3jqwkpVZ4hvQDPNCZwYJM7uzyJ6yB1oz6A5jNQ2n66dpHfDqp29PcTwTwEUdG6STU3sAHEwZj8awdCSXhZcu5sHJ",
  "key7": "54ZV9Ek5PTxzg8for5qV24KBHXaNfiu3TQxsaNVSr61ahRTkCZzeWXow37XFDEuW2fvYcYDa1XyAzzQk3UFAmzBu",
  "key8": "4De2MVjYPNkWiSkXs7G92DnYor8Hu9cgtnohj63aZzQNMd7odCgVDwPNoiTvgLcpth2o27TVa6rXWvgCEcWjT7kk",
  "key9": "5tsvJMUbPDWwJzg8kAidNYcLYnTiZz1oWD7EuKgoqqKSCAu3EXMTLVyJnZBGG8XH2mmhBtQQVYt6XsQRqH135Npf",
  "key10": "2BmEmiSJGEWBfaJSXGYYc5TDVej7PbrhefWEheF5dE75zaPQY7dvYcNvGWxJn1a2TN3oipkRsaY7XZcaKdxQ3FCK",
  "key11": "xurAVRySmk28KBfQC2idW6RcfRiypfK43KADFm9qa7HaWWa3NZ58eG8f9xK19PXJNQ98WYqVgboubWeZXt8oD1R",
  "key12": "3uvVNTFtvpwc4nMNcuDqZoXK9iJ2xxLrMoDnU7DgpWHJVr9NqowzGz8RVHwz4XvUUuCqPEyW8fD1dsnn88arBUrT",
  "key13": "5vqFq6MZMyKegAsZUJhWg568mQ4vRDhE32Q6wQTw9U81tcthzoQ4GXVk4dZPHmdEyPx5CkiJKLaStaR9PNzJh1cQ",
  "key14": "4PbuHiT7aGrgjCufrr7zzxLn1BG9dGqMKozTwd3b8RDARwLcmkSGnmMDq94ckH9zxCE36mwr5DTneB9yr3t8pBRq",
  "key15": "2Uts4pk3mRMP2F11yHP3Tu8D2UaZyFmpti5bELoLgzbk2rusSVpVfSF3HJX7pUxGDJmfTDYiGcZ26GD17BHviCmV",
  "key16": "29jgZNhRCpLTbnRDwGWi4iLsrsuFqRBvRB4RiZFz6irKBANnXXfBteCs6wn8dimME1j1q6dWGgkQHi96K8DWGY9M",
  "key17": "5cpWHL6oQmXkZECXym1fQHr6frFe7uJ6vQNEe3m9nPYE68hJi3mmw3jxqphseURpXRVKpdvGQdEnvEKeNnxKpo7H",
  "key18": "2dNDBi9rnkR7N6cvV6n7rJvBY3ZYzzuHR9UKkRKidMtFdnJpDfbYqpGwvDFf2TGTsvvFNVKDds1QPcrizhLKnGbV",
  "key19": "3SxXtX8T62NLyiGwhqNZWQz3Gxy4DX5kdxQRsxHnmsJSkgrMgdiFDJ6DLfQqyYSern4jGj4nQ1qY63JtdK8MXEJC",
  "key20": "5wD7gps3DBVm6M33c4VUQNe5HLdkWZsbLi4Ybnvpxac98dZN2DMADzv9Fc4gXKVZLNfCdhysyxUYZPktM7mp7AJW",
  "key21": "51zGeTxb9jup97qhcrSqVcg9fV3XNxuicxAXjdbVVvoyxNVXoz7Gy3mSWYrF2pVySvwS6WGXTieTPvKLQeQm8DH5",
  "key22": "4fc8dnz7DvS6JzkDCmte6DR3PPWbf9TXaw28CeExkDmJ8VKpdDWbv7BaBs1dpi5qgWQFGn3tj6n2XNAEqXeUdBCQ",
  "key23": "2LyWAgN7tvwf2UMq3FrbXtoSNyUNwCfkFfUUe3oXazZqYdRqnYLEu4vMMbcbeTYMz9Tf5DEFPyPQobTDu9oVjj4C",
  "key24": "bN8cQpPY6ChVnhrtZoRHxCWTvjmga4BrApNBKua8eQzqhVHaUVDvzhM2VJhGUKAFwNKcjDMFC4RmT56X1cPvoLX",
  "key25": "4oWytSSGwtdvpYd8nHyK8KM8W8T5vvoWA3G9arST7FmZXp3h9bLKaL7qzfee88BbvNNUSGsgTqerrbRX7S4Pt3Z1",
  "key26": "ERTTqy7VJyxiDB2wYU8ju8bxd4FvopqUU3nj3hfx5Ut39vQPjTs3QbmbQPfJ6cw1DeqtRauz4rd5pqDojtVZdec",
  "key27": "2gTGAoZtXtQz6K8QqaGjSC8KG1T2ci9p2gmNFkQ5CAVEfRAdnJs5U9nug2Jm72AG8SGuVcF2FxXKTsKXXWYmVKTR",
  "key28": "27rY9Vxc4dV9XV44da72ZZkUBj2zK3i5Vw8PxxBMpq5d5s4eKCr1J1ijwb1Zp8vempAfE15rQZQfgF7WT9XV6upd",
  "key29": "ZJ7Tj8To8HuJ3jMVtMkKdcMjz1aTzBhWt8niBFsFSstCQkA1NnZCCY62uLkbgSAquxxf3pMpZgMJ4swnR9KvHFH",
  "key30": "aSBm8WagdRBRUJzk5dvANUhCbMjRu3hn5M5cBrUpzizAGZu4rNvkwKj4bqHGr6bTouvvwhXm8ZA5AFUUvRQ7PBC",
  "key31": "4dtCb8THPenM2w85DXAzVDWnXZd73zzT7UQzw9UYxSs4KxuihfwtxjYCwUhe75sE8yVw4W2vTrJYFmvo8iWANdXi"
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
