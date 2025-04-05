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
    "3W9e4TMSU9Je3nMAuXFMDEEKw5iHKg6mghLs6Y5UUQv2s1PX3oVkXceGvQbzGL4gQpXC9oaMDpjPaZ2tJZrWrRgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wr7hCd6DjecYCjPt8YdELV5HXJLZTRLif8YLqaBnRL2DcPZ7gYJbp8FRpXXeYuG4WkdQw53sQdpKpdUDaBPZQ1Y",
  "key1": "4Gfm4aC5jkTJq5r4ppnvie1Ww31642S42Q3vLmx7ni1SbtyAB85rrekUnA1bHzxqyM46YXCBAzjppbGC2MQWNGr5",
  "key2": "2dYBRzUmeRYe24HkUn1kjoeb5tqtBLqaiVcqSzagx2md7bAmjeMP5vvhneNr7nXLkC4w79utGaTvEJpyMtW8Z7Ey",
  "key3": "5spRE6djUrYksvr9AXVsiwhUTVF19y6B3NKvw7NaLVHmdE6VyVBqZNDd8dCbht3bTK5bnFqwRHrQ9wCzn6CrKfNo",
  "key4": "5ZNhGCTzNnGT7ZSnP3bDdkaEVKVz8LENmEyjpkZ5o2ShHKv8x1sjCzU2LpqN4kCjHuAgnQWsWBqTn8GX8385Xbjk",
  "key5": "4jD2X87JbzaUVs8qZQoQNW1ydW1G1eNq4H5zYoGVFLGr6pDEcp7Me9PgTErbu2KmMGf3zPtXiNoioznpdoZddBew",
  "key6": "YSQwspdwBuYZzDun6Ua9zKg6tnPyjAoRBxU1z6uAaDepj3Yf4iYyLVYqF14idugFfMwbg5D9mEjjGHnkseGQfds",
  "key7": "3cDEvenJDPVJntPV2HxzKu3K3iD4maUdjhaA2hiZ7zyso8XXDxHyR77jYnFcGCexn65vSzEufqZrst5RMW1JuJud",
  "key8": "ZR9fHGoXyHrFhXbjHBGhCsUToBCTh9mGXPxxPL8pZyz4uU76BWaunosyXrrxT6D2VMaDc2jtNbdgn5o3t3Vy7BB",
  "key9": "3psX33NNnBnaEkz1YFpRuuuqek1v77TnMXJmP87mF4WG225864kREAbZxG1v3KUETy5bqoWDmnhnLoaUNX1ZGecf",
  "key10": "2taPor7ccUcwhBXLdut2izQXpKxSi9PCoo5LL8DLxqH88kzcj5MiihB5gTqSkXuvFeUfx7VcEb9VcFVaxN2S1XM1",
  "key11": "4997XfEu4yPHBJ94zqgh8SyaJp1b2qdhaTYF7QK6WgypkdYziVH1oz2FWPWVvi3tM8r1TErUrTc2oRmwf4y317UQ",
  "key12": "5Xr4Gpxr5NDbbbCMjCerSHUBPmy2Zsxt8GL9j3qqcnw9vDgzauwFPrWKC8YZj6pDgMgnRNAaxKLbEnPhWNPPXWme",
  "key13": "5Q4kB3qQzcdY8dNkr7qiWBtGaS1VY9QUo6ibCuUS2mQgPcJaVoDyi3FfaR5iDpwRzvyAUPfWmRULaxgMx77bJKgA",
  "key14": "4rrgxdiAh32NYnDYXgnFJXeQqcK9qfcym6nQ9SuxU3gNuVUcZKHSV6HqoFiW3Upe6yj5TdKNfZ46NFjUVfwdijpn",
  "key15": "2Pgny8RyEX8huWHW25Lg4h8TQWAHFjSAZFeJxRciRmLdSfP4D4GYGZDTeBbDuH7d6abzVxa1iHR9XdALmpYqDnP4",
  "key16": "5woY9z75P2aW2D4jSSGb1M8o8557kd44K7XLMPbtzBhrYBupFUB4oMWZAV5a3yjGzLmxf7M789D6h8EVRMRANjmQ",
  "key17": "5c4RGVK5a414DPNNgrbh4woLTyi6MVVV1Dgcohc6DsYiqiR7iWPr4hcQjreYHgn2X4rWTWHLatzxq4fJVckuEuNS",
  "key18": "3rxT2ghw2jz1zCBCpM51qzeKNgUnmuYcX6Us97oTM5fbjXJzruJB282MVhhuaEXVLDSP9JmhhsQgo2bEoWnTkpCL",
  "key19": "3ZxZAb2VLoQcV4pQ7LFV6Qb7Pvzp52GYMUX2uHjfngJbMv53HRwsz9jzzvVP1bTkvYwN6USXfGAv55hyrt1HHe35",
  "key20": "2F2Gc2u9m3AMHSJvBoTZwySfjud7KxxrRQrGc9ajq6h5N5BWdS6zgZPo7bw242LpSEJJTWAHmiZoNP4ZCm3QSFuj",
  "key21": "35niy5TtpGTjaFJhgZMTrD1sYB4tDSpUCytgws6P1MxEfKQSkb6jD6rq2SrE8Rt46TBnu4hkfYByobFgPGwG5X3t",
  "key22": "2uxxNpBYEzno1Q48eKBkhYwbudXWwT6Uex64etZNUh6HfBbXr9ZuBXUYd4Lgv1syB1MwxPgKtpyGGyQp8bkMjwWY",
  "key23": "MRxiFMKAzpyxnfHUr5piSPkXjxuY5hkK9C4dNCUGCxqT9Cs7GhGXZADQbdYRBprZM7LRAif28UvTEr1BYoFVCuu",
  "key24": "2EpYNkxmLmfprPWj9EQyMzKBvXZRyWgHE1sr53bNDA8oaJJjXdVyJhSA84NCUUa9ChghrMPoNgSaDZc5jUjqsRzZ",
  "key25": "2RXKqM2TU1jcUsxyMcBHn5pBpuNTo539a2bVQoBsHjvc9CWpt3JPTBZi1nnCfVrgc3PCkDzyc7sPgQVWXqt6KPrS",
  "key26": "4TdQyE5PQCJj5WsbiELi9zbY18qLG4rXiPgjjFq7DRfyKFKDxxZHAT8RoHj1cyfdktdkTwge4BGYxqAVKToNnC7f",
  "key27": "24NF7zXeAU8NqpPDpevJSMhVrjv4H7pJwQ1maAucuZAVAvJojXHCsCxqNCL3xszi763GCNTgCgjtfU4XCymLXDgL",
  "key28": "4joW1Rn6jPFaimyC5HC2cGkneGPoPkKMo1aNEtFbYzwmeYfqZBLsfXqVU8c6zJR5qrueBMqw3yBygpoahU9ySrR4",
  "key29": "4qxuGH7NQNH8YnUmVfo1ahZTkGcH9ENMbRtAXpnbRLHGnfjfGBXyrtcWxXZ18fSfGmQYyVjZHgB7QN5N1RRHsSDQ"
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
