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
    "2BGULTHTaKZshaWKtrJssHZ3tAx83duwJcpwGrS8XbLAVE6w3PL3rq5pYBY4aSRcaUp2iAn15zue6r77WHtKoZkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ppxREmDV4xDyNuBsUokUuQL9ixmxQz3xccDH2vBWSg2pfHBVwX4e5NCJNB284sHTKbgG3XxbJXLa2KidrLsg7HB",
  "key1": "21xEiJxuHpgXJfBTwUYG5cMqjusf8ahJE31SnL6Ejg7Wf9rxMG5s1JGKtKNTnFVZBtxjivqSNT8FZnTuTEDX6VuE",
  "key2": "58jVHkqk2RjXZWoJAwVNxEE3ozEpPf9xa1SExcfA57W5J5qL14pTLUGrG4Dnw4LCQ2oqHj5Hp1Jf2sQRoh4nFVAW",
  "key3": "2y6dhs6ePhPbucp3TMrkSLDUtD3V3uwXWcA56t8UB7CPt9AYU4mEq9MsxWutvhHsymZr5Xj2HsTLCnpgLLGZSBim",
  "key4": "GYjpQF4FxHqatawqVWWihT24or1NKoLnkF3n6vfJ3VAYHiNWiavkPbt2ZCjVskbZzH43qPJudzLoLEEBnxmXCfX",
  "key5": "37EJJTKBh5WU5S5KHDHDzQyzeEaFRYxvNsn1xGNwzKGx6KA5Mdc7kntPNtnSabPHPAvgUENnTsMEPvPU54rSMhc4",
  "key6": "54uxhLa3k1hY1n7NsAMZTfjqPyVxaYCi7WGm9ryGvdigv6p9h8MzZu3ESXdW34iWZQZVGXs7nPLUh7314RVcfd89",
  "key7": "53dy8zyNEL3XfV7Uiooc5x7TsQk4e9LAywt85ErVYmttmsvvZnFph7ud6eTkmRPYGdsULxvyBZgp7W7EjqcadL8m",
  "key8": "2t4Sj82jS1i86mFXLJi9xEpsuyQp4gqyRoVpGQ8GfHqnEkFmFor7cZis3PrEAmxD5F5GQjC8D7XoZPCBuELFmKZH",
  "key9": "5kapmAG4h8s6kHpkkLxs5AGPZb8vufoE8n94Zo7JvXq68qFgFZidtYqKiNSXZG7x4KB3ED4YYmuo42Sn6yQWVjTi",
  "key10": "5s5UkWPqGV75mKgoHbNdAR1qVk7z1uyqkorhzPC5xzhR5Twt3pEJzeaEn1rL9WQKPLg4eTkrqkWCbMyvDbub5T4",
  "key11": "5n7vy2woGHgSQN77aJyj7Wq8Ubiqid1FvJbCuLZe9BvfNPYaUxyzyJsuGqcGZkAioVq2ovKTKNFvspW2kqbE81rT",
  "key12": "2PBUYcymVbJVRCLvLo9ViXr8wtnFQE15FeTtrhSkqR3F21p9ex3zzAb5BspsACNGwJAMmC6CyzJuJhXQKVrRAt5A",
  "key13": "4P96cCf4r2Tzko2g6fqtrMi5GiHrL9rWMSVR3FKXiSgqhES8JJo6pXoTSwgYeBRpHTXkjXRSfvwG5f2M2ezff6Mw",
  "key14": "4KMPGLbZvZ8qv5oRByDwABBf4YBQhHT22xadvCthhEA98fwN9fg7a4EJy91YcDuXDP7vzkvWdTPPe2ywAAR28X3f",
  "key15": "rHLC2yuDAhMbKCWExzbSCMg81LdwgSSR9YJhQnEDZu5NASxS2RHLCWY5aGgtoXxqgLVqHD7JRGwzvNgk4M3Pbqb",
  "key16": "332x66iYzRBBhBFkPMs1kZVuaom9Uq9XojqA4LyGg8yhsygcX2jNog5keV1rMsbhUTf4HtzVBAaccNb4VB4fF6U6",
  "key17": "4uvhXaiUWSCT63xVijA7y5yrs81hWAb9LenQe13jpfkFq2zT6jpa76AgZVXVR9kLRNS7qsNABVaQfx7ckKMBq2sL",
  "key18": "Q5zM8o95zNy35bUb63E6LP3kvAwyhAkyZHMD4Z1nLbGi4ZM2sjBNKaU8DXH2wyLgc7htEtsy6Htim2pS4zUteZ6",
  "key19": "453w8EwWH8kwdZhk9hszAhLijV6gB5YRn3QLY2UaWu8kWtD8MAnQBWgC1ZksnN49rN4nE4A7uTyvnGidMXp1uWSR",
  "key20": "2JC2CAPkf97niRorbgmbYDkFDxHfmoLVLSquY8sYupN1pBB1x4fDz6wNAkx7XjUHcpitzVqMDAi2yH5uMJmPQ1MN",
  "key21": "4ZuF6YKdSMxTyijBZ4EiwKCYiYrA553CW8BQ27AaWi2niULhR7b8MW9JEvniTdjGXoJP5AFmrRrmLNG6viervrfb",
  "key22": "VQ8ukdpLyiEVi5UAXQqRCD7bvwCJ7dSEgnY56SFKs1ChqqM4YhZgWdxnvq6CyTchctSqGBhgZWxkSBGtp3N9qF2",
  "key23": "duhmQUK7xjEWMhqejEBAUyYwnbtzQ8RRmqC3TmWPwM4iApd5MQsKWXv25uhsbZ3g8u2UMt6NiAeZiVxwhUCdf8M",
  "key24": "2pBwjg56m6ZA61gVFJ3Wx6mMco5QRMuQtf1ao1MbB6oUHMaJxbhWpDNkNGYsb8GmAMkaSQ1HxtZYe79qpNM3t6fU",
  "key25": "HPY8YSUhTL7NvVrHTdTHtPWEWScxN6NGvoNSH9A95xHm8MS3yp45P2Qb2rHmjQWkycyjhNHmf7KNimXbRWFY3a3"
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
