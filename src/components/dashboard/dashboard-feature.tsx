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
    "33uQNhSypCuL7qRiw9XoEJoSUXA1a9CSvhfqCqBzDBUzAYc5fqNGczavcj4URApmkSz7AmUQzh7PY9p6GUwuE3dW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QMGHyibjAhwWRdkUuDkMSanw1JvKPDdzz4pfLiZMpMJ5MJ45tZsevZMpqMNahTVjw8ZacsUCMKwgVBjSNX1BZwj",
  "key1": "5iRgEE68Zg4YMdgYhPeFhkBE1DyCsV8AqbdEVc8LZ93Ud1ATyJdKoGfiRPQKNDtoVeSamG1Z1kz5ymKtjcqHMDDo",
  "key2": "4DPw9yAVcU8mn7kvWmAsrBYV917hfCXNmxbY4Xpg8h8g8U88iE2bNc5WJQVRzppvtn6hDzDsBnfND9Yh6pQzp2Eo",
  "key3": "hBAQjKoxQhwFPVWaQJaig2zvWyJtTeESkt9W24p6kdeq58pXnfKS1XqWYrytNAzg7fGaP3prgDqh5gTFqvuQpY6",
  "key4": "539fmK5cg719oEWWmt3sP3g131xpmhv9AApwZjPaetLbAU8TfHQPLKPbtQq6htyU2kyCJ7unDF4H46P4RZwFz2vk",
  "key5": "29SUqb5n44MyrKhXUsc1q8hkXRCuB5j6xv9AbHHa2WxyhuDQHyea26epXt6FRn1pW7xyC9vB312d3QcFFXNuA5ro",
  "key6": "3L9j54q8LX84YqzzMtmqVicMHQ2cZEHpcLzdbdNsHd1zZsNxYzMZde2yn8Z2SZkhicRfLpC9WEzdaF7NkTp21ScC",
  "key7": "2PgjTZyB6tj4pEqMXNwQ3RXSeyZmKEW7WdUgNQ1ADGVgvXPpW8dnamdkkNyVvbGJtLM94PBrJgcby6qgNkiWWwCa",
  "key8": "5jszFrHpNAZQSWLhGtSkUw7e2FayCA7ixkiQgZM3q7niB5YR4aSmcmCsNowCL5wwUqVNXTpQGcvShDajdx54UuG5",
  "key9": "5LGogcdFy1iHiv963GKsUBxCQ2xq6wPVi2GHxe1rjqwgSQTEFSzyvbCt2uGNiUb85UcqESssF8X5Z8h2fN8og1qF",
  "key10": "5pYYYp9vL2ekrGtPhDSXnZYrkXgkidRei4i57YiHecCyAqdniuQXHVih9VL8DKQv3pRDib1jDXiezmpYJJaL92MM",
  "key11": "4wT7sfMec3WgTJutQvEtbD1gjhczREpVZWdCN1UuxyrKkSkN1znEeeD5axvYos2CLe2hz1CZmxvZxYzZgHzqnH9U",
  "key12": "2N1jmfNiGfbyRSnQR4UL3fsPhKPrtEnftr4Hvb4ThncKhHimmQ86aPBj4EHyRp8gm5M1LBpe7Ghv4YQzQPxiNsdi",
  "key13": "2vbj15Sxuq6BJeemx2PBy5kdZyAfLTXU1raCN6oLxKMdMzmu44cT5Cg8ckGDsJ3g74cb46EQG6GbadDsaihfcNpW",
  "key14": "6YMKNGyAGavqG5gVBm1w3NJPzvH8TJJgiA8fad93dYf9L4M1rNhNmtJ5bdrWB9KRFvLJUfruEfk6JqUVyHdn519",
  "key15": "33in5xpGZp7bz7oREWMzM2Em5pe3aFGJ5KubEcgauKYqfsghEbuWDryhQAYgpJZvg5YEG7P3eagj27UJu9dqZr5R",
  "key16": "DKYTow3cMcuCDkExVdRwn1xU7YdPwJGsFtBSWSxR5W8sJ5dL9HKVkRevyXXG6aeU19MeQwA7qtcXANAm2X3es22",
  "key17": "4Z39P1LdvZKtURrTwEH9LH6wGxaFKhCzstiyab78uHWWqnoG3CkfjiWeRtsWRDNy8mfHVtWJxoCehYrHwX4Yagxi",
  "key18": "4LAwRyAW9M17dU24MWdmYjr9HvkS9wUF4wX4h9bY4UvVDjwBhDk1eDMzuUKdhYtDdhAbLFHvafsnwsoh9N89RgJg",
  "key19": "4AYhzfbptQDqbDwHCYQChaG2s5q6eW1b1GSTGvX1kTsngP3hc8hdQPZ8QcBXWyZqYBEukm8HfCzNPHsUsgwrdUhY",
  "key20": "3CmxNK8DWtusM7NavFWNWcfTYuSK3a8AUQcuNjVY1a489v78aiPvPAYmeMVm6D87F8SWaf9fcXzMVzHtwsYpLDDE",
  "key21": "3QuJFkhDHmxKPQHAy58j8RXBLqcb398vBNDisNRNPjj6QbeTk6VcBxGbNybQtdSQaNiW9fuJ8YYZ2BrkVbvEUtop",
  "key22": "5eDdv2BojCSGrRaytrxdZbbkEpiV8xsVrG5MXsC9HSZLGL9gZyYyDafvEy1XYcMm7sr9PfA1QGVDJwwSz7KP8NMZ",
  "key23": "4baqHuhUnVWxMafnQYsFKyamPrBbffRyvEmLB13bBowWuees6n3cnLcV8ooe9LqbG1L2EPr5USVjWBaZaJfhKi5b",
  "key24": "fszwQbzrx2CTYgF8K3goho12sYmnQyexkEn19WQ6cD2BGz21nSiDqZavMJTQtCZAJAgQZrCB6DnmY8n2LzoNC9H",
  "key25": "4xpC1fS9NdUAnmJxBfbjVgPyDxwaXcEu6RJxevK2xNcpsvWY8TG3d6gwzHefcqPfAmcD6biEXcqmrAyJNETHY3mq",
  "key26": "2p17YkutYsGMemUyeUnXXiUN5n3h8A2QQH4cYfjGzWFVHTfGg6Uwta8RynJpn9b3mM7iHNCPxUef723b1gi7xLTz",
  "key27": "5UGGjqUB7zz7PhR9yQf8Dz1F4soKWMPxehoWi4pbdTSBs9VdqcugBeUBuhEhzt9xjptnMqn2iKvk9RPwU1Dtjy2g",
  "key28": "2uwgcQfuNbHdtFNNjMoGyXaidZLGYYUYA5PBYrPYQuGzPCKifiRnqwrSSRta6B8xr2t3irf71HntKY7wZZfowB2u",
  "key29": "2CisbNk7B9PwwjRpD1HHCKNqVdSVaWws6vCBSqYcYJWsS64qcF3ZfuwScUjNH9tQsZh2nvtCnB3Bfm6nNS7FxYaW"
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
