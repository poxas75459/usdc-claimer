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
    "3hqNPiXHgCeqNoRPen6h42jpiQ9kKyDey9iKcV2rm2J2hKvdKwMWMk84BWGZqMM4s1tWWRLx45Qbmi8WPEjk6ifP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jLAkreD5ebKGg4jkumKoKGHuu2BcHcnqBecEytdQfLuaLZEaL7nsSUwuEGLS3JxwxJ7Vq642qE3z4oT3mrbP7j6",
  "key1": "2TyYEyQiWC5akW4y7pA9ZP1pZEZconYpjUjKBraRdVyA6QwTkXvrPkWHAEkZfq4fffgquz2p2ir2vwgMrcsqjuDN",
  "key2": "262i1NbJeZL44d2wNRzP1JR2CuSCqURtCWt4j38o8MuGwjXCk75LwVGaQUwQpLHUKuWLimrcAzBJ79evpKnLgXVD",
  "key3": "3EH267ZHD3WTxMBGwYcS9KerbebktZdqfpUxiTyrDG4kVtEGbTjr9mZDsb3RTPRzwxMpTjTGNoQyEfEJrpJJKFiF",
  "key4": "M4oz8ZfnTRPcPs2rawa9GYFWkmNXHh2mtXaQoxShPy86r62M3CSKHBtzHwFTnarceTuMjHQvGvjmeBrh8tjdfuQ",
  "key5": "2mD3s5z5SVhcqdUjW2nay8cnMe6DYeiJVJbMFtQWjGieWQdffj75GVhW4mYB6Y4iWoWMAdXwXnnqrtfWeY18PLWz",
  "key6": "5jWkRXjmcDzzbnyJPBKYTa8f3jomZvWx8RGM2kE6e54Tk5bayXiBcsidf3s2iMs1thSAotsN4AQo9cJYTev2Yw5i",
  "key7": "WHYEiytdpbdLfULqxKr2V2wXbDATSqQZjywUNVVp2Pf3umfY9v2zSWjYc2t4NR1Whq6c9DaUELa9JF6Bkp2E55P",
  "key8": "2ZiDbBDU251KTMkE6p4VVVhVZMzxvWNUxDyNswzTxoxRNyM7tWcYTMYKXDLV3exFouAwqKQLbzUHadbBV6VQF1tY",
  "key9": "5sT5K7Er8XFNX5Ubuw8MkXg2THKxdBTjkSPMNv6Ez56XGB1QpcP3UQvW4nCPnMod9u25VmibrkiS4Ewa227CtDb9",
  "key10": "2eHZYNx1f6UR9NUUaxe8Wmk8PZcqpNx12gYLQbmMhzr6PReFPa4yYc3ECRRRC8b3mhRZEmXe9KGq96Q3M2csYn5z",
  "key11": "3b7m7VjpUYeDXzaMA2LnatwpA7rPsYyKGWC2qj92ApeAz64796qiUwiHuXbVHL1ohbDHXjve7Rw9oZH1SFYbuHL",
  "key12": "4jJUAvtyH5fA7fukmNQjaTR8QseMwY3zhesiWAV65UQGdzNretFVpZjTo7gzSqsCFmqFc8Y4C5gJ38tPjEwZwr8E",
  "key13": "2GZzaEvngBhtRVBaobWzhqFwuDfwLkT6gaWDEcy9bNaNQ3EUa8mDgyVisM2uwDc1fo1EYkJ5h1PdvhWHKDZR1tVB",
  "key14": "5itH8DnPdKvPUsNvzTcHE4CaMUM6zqEyfka4N7fQmCu7Qt6rA3Gev5oMCBj9utM4ns7s1n9RBSqKDJSd2QtsRKiW",
  "key15": "h6z5rJJM1sPSAcup5nNvqypDmAdxZbbSmrd9iVM1Kkwfj7cTDMrwnexNVf9TAqQVAaf9vzc9ov6C6w3cdSTgGmG",
  "key16": "4P6i94zcknmu1WD82tyS3MtTGLti5zMdDRHhv6iEKusiUmCcbpj7gUpsMcPGWh1kp5EAAiz6N4zCe28cyaWS6dkN",
  "key17": "1K88vqrfq9pUqsz1dAokQCR2hTgF3uxMbFkFX7xbKBMyDU8d91Qti8wwGmfbD25up5j6zj6rixpfmEZx6A6UqmD",
  "key18": "62MFq1Qd4NNEt6RfVpdGBDTDcFcNsvmbJ79tfzQFvfkNU3Ru55KMNsi9c24z4h2cN5LNr3AauYB1ptt5CXjG7hfd",
  "key19": "5Xx79HCiDpdtjtvsYNo5t3qCyB4tt7iQiJdbpMT8GfxjiDtMDyi4cANsWaRjvj5FHDmNCyFqSuwLQMJ91EhDDH4M",
  "key20": "3bvQn51iptD7H9fXiQHQ99vt1YKpa6y5dG7QKpccGpeUWvxEEgrFx8DCt4UNFTQVihZThhEoSJ7ZRUkZU1vNDqsG",
  "key21": "4BnNAav5pEt2ZLrZbNpmTSZqRe5qkTw45VzAGTwcsrQKuyeVGmvgB5xzsJT33PqcRjFgihxzEMrekYa6g6RNHAdF",
  "key22": "2p6RC2bZ1VjgpeQ7Bg5iZwT6GQgubdgVRN9vF5Qjc6YZendJqGLiEJgX63nQzQKGGrd9K9dsCLM9j2gKnbSPMH5b",
  "key23": "4W1LmWSoRNHnprVaTeyZnxDR5jYucWaEioJytgFLcEe4Q2c88BaMKbnPgHzsAAfNdZQkWv4B6RJNPMNqxTKozXs1",
  "key24": "5CaSkLRsw49KmsGVAhvdDSNTvtMDTE6j1kp13LpuoqDYS1Nrukdv9XJYeGdnPXEyJrmjeAXhmtWH7PVtnQ2sqhtz",
  "key25": "3N7ciGNcfNFoEuNJMtaxtX6c7UK2JxrSf9TM6HWNm3262CNgapnNYoyt7RzqodaARKwxxNZBjK3JMkphz4d1uVvy",
  "key26": "51Gj8bB17iY8aupoPBNWZxnUgSHC1eAksviskgQzxU8jH1FY9R3knTh3Ea88pksZ7zA862sYA13tkfX4JCfgRF23",
  "key27": "bSNxd5ZTku9oKbBj6x4qHfQ6Tg3epPpBPhuwo2xAbrYk2ByCa6SZxyrJAoxGBMgtX632QPMQpLPzTjwBSzMdPDo",
  "key28": "3osgqknLfKD8MA5sZuMPvqm5wJ7UAi21r6zkqWqrTECeXWckS7r3moUfGiKCQR95fpMhoyEomsUBVbGGoKRMTJPq",
  "key29": "5TKUPnt2Hh2kwa76PztSB7Qp5jcMfGBVzRHu4AjkHRrxZcLHmR79bkuWd8rcv5vtgTzHdCeieVmvpN773BtZGWYj",
  "key30": "2qG6UTcSJkThXYQrhyVVUTMk1Qmn9Pu8bWMFEbaGjS8hNeqfMgfRh9wCmdBRrLKKn3VWXcM5H7rUNuVBxwdG4NVK",
  "key31": "5PmXqKbnN3D1QQi91pb9XPmjZ7YJARr8Fp4fQPkDFHY3HazPZfepwS5z4B4iBndFayTiL1BuutrKdd3UNQz35pCF",
  "key32": "4qrYdEnkUhwE9oiQWATnautJA9yjibKgjJsAu3RTdKKPHJevTEWGaRRAfcEXNaWKP75cd6W9BVV1TbLt3i7xBFVA",
  "key33": "3uueSKgvR7E2LqufZEELnsU9ACvrnxfRzmPf1rcMCLJDWx3ksZCUZJr6qZsXMmjfrqTDXk8w8p981jqprDAojVfe"
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
