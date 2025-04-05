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
    "2UhJJ3heXLG39F5vavdTAc2fJXQ21vehhH2Zk43MPTkKX8ySE9a5MWvfqSJNVKWskoTpfvyiNwhuRLdKjg9Kjv7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EQnb8MhAW53coQGX1VZxhSdU89B8FXECdLT4XvfNmShFuxHdyydXDGLecRg5ABixoFhfuUXmgVx7d467jAh39q3",
  "key1": "4VSThm2tX2XEcf8nvh1aTdnuhefZc4LjDemzu6jyR5jvNaJMYpyeuwXQ3ZJZFwf6yV8m3LYTTLyb7EPHszKjbnwV",
  "key2": "5Kea8PNU92gAqJ4NgSaNHcJi2XBk8sby4C6jgdbnTv5p5hAJoFPDnLsJdSkrnQ9bPchpcUDx6fM3ZyZAfoGGmyEr",
  "key3": "5u1ojxDvPVVRttPm3kZXEjiKA543JDn5EvPCYCJg4k6VfCh7httdgQwejcGfBpSWfdpWjy4Bxscd8VUnj6DtFjEb",
  "key4": "3ZaiJkqwJ7Xe1ZJ5ijr1Ts3Ks3j7bnPdLwnttuPa28dGuENEeko3WMDCFPDMVzV5qpLq9h5ao4UmaMvKRgqpupQJ",
  "key5": "5mZ1thGEtQhLRF5u6evsUk5vSLCST9PetcDd9fLJo7geX1SHmT2nVfRhJ1WpPnMoWTeEoQ5Mx9FqkPkfueg2SSgw",
  "key6": "4iKw3qgx1rh85bPPv2jKVbAjuBsVbbtvGmRkanc71bohKdKZsimPvfx3Wk8rumrZeLVET4yDVNcqW7RdLqEjD5Q5",
  "key7": "CdajBmbvgh376bcuEJhgWa15r3ZnhUKEYwDjxzpyJgzRQnU1pJ4266chD1HjQKqQm1yo27B7j84SMrMF1gZmBbR",
  "key8": "5rbnsvj2X6GVSC1HoDKe3oY2v7NvtqmmYV6FbDdDAF74q6CZrRSQXSYokAQJGWiVgu2vZN8Njw1fkSB7ywMddmnb",
  "key9": "htUsMpLUiBvVCNNNsQbgtgdk4SQMCAGPtLF2ecouCUQLDAyFtZbLLEe2AbgjzwT987rAcdmvAL65fpQc1FnP4KD",
  "key10": "tJtraNPdtqdW2EhB979mizp5KEmdyj25fgDDTrSVFPv4TV52f21fu1qg5fVTysoE8ZyLcMDiuEBqhrywijSJs67",
  "key11": "wBsuDM1aP6ZksFbgPg7e5PGxyLt4fRBUkJjgQLbVVk11TxGWH8hfWnPyVDsgFx3p4gmU1cmTUbKfcYDNJvieRDE",
  "key12": "4jegRrPE7LX2oLExCUU5yxpvsBxndgNnSjuTAvrJhMaXWLgEn8QxXcup8GhSbNkhwKGGJkUyUmSWHY1NZuh8Xjx3",
  "key13": "5NPjybs9pojmrrbGB4xXeJRhPZ4ucLijVm3jHaGAS69Hnm2KEWgoSexMEvmY6K6sH8H3qGZ3n4JQZ3e8XePQeLRp",
  "key14": "Kmmfb5NEte8npe8h5PbXujAZceCyeVrRbMkksSNWbNcUWSshXCYCMT1NNoZrfHMZaaFhrZLWS85qVFsJUysgy5F",
  "key15": "feWfpgKAxFP2hFUXNHqPtpsvPQMHnqXon1zkGuZSqz38JAer6eX7ctWHTAAUtppsJj8eXVbsC7y56gvN5EEkfhz",
  "key16": "4SLK4x7n6hLdnyxtNxbg8SRugmXngsRvTidjGYNLcsLtsWDX8a5asCwAWLtrsfXqyPByJzPHyG7iWbYaVVQKaEcU",
  "key17": "47tCdFNivJvBbiogcWhDwTuVg5GQ2edL7yoaxztxFnq6SoWhauzgqACDQvreyqVBjxWMh5NYWL7pwkzbzHLcK3g2",
  "key18": "uSESujrDVv6ZuXGPaUtbsdZuzPqZsNVnqKvqcjNst5yV4GrWFcppRJhMaJbKgxLYrLLh9dRHncoRJKRxA5cVRA8",
  "key19": "42KdpVUHqABf9BJ5buFx9brgeqQJPh9ehRHY7EQCEizavtewTyiyTweeRgcduH1dnQUvLpucUwoQqpJHezRmFhDf",
  "key20": "5oAJhua1ea7P2uv4qA5hxaWwMPvcEfYDF5smgmi8mVfpaF8yXUNdC3yU7PLZWJUmdmgtW6QwRKhNYpNXDCjvFa8h",
  "key21": "3xSQxiJe2RQFiZ5UYVE2o689rgLWPtWrxBGuXmku3ZSVssMXRV69snVzk3LAeh92AgmAkCKMQvH8D88AsbAPxSjF",
  "key22": "3GZ5XDJnYnvSv1XogdqPbFB9HyZh138YbUf3GyH6tRjpjiwzomTbAm7S42n6J5Fb6w5xC9giRbyWKsnPNYa4fVrP",
  "key23": "sFfeTJS2atNvY2bUfd7tP5kMQwFBJiNuziXMSfw3gM7qLmdhdcb8ZxNso97v6BKAWCdWb5sJtNWKiwwdrDcxRWj",
  "key24": "21tNpqexmxgs1qxL1Tp8ZNiYK3U7MK88BM6qbfTVecLo3ELfouVorxF1S7ZYYNeoPvAtcZeTet7doSdF45PzC8Kv"
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
