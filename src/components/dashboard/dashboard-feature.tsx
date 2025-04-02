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
    "2LR23GCjPwp2BnJxovqsxGNPua5z1BtTLQoTYowvqAyXYKRKnL4igMo3CrGztqLUxhu3a7dJbBYFrq4aKTYQEFkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YrTQDEzvhQvwjLKAn7JGG4jCKQx4NYiawkHboBr7VutZFX54XcNed5JhE76EteovF28aXjCzKimL9Cu9bfvagoS",
  "key1": "tN7NxtfJfFbRtJZFfmACTE6sD5HBrL8FPDz3RKLqT938zhPb2GCNQouUzU9e2d54qUBK7bT8FCoPhJHzEff8UWF",
  "key2": "3u8gkvdFx2PNPNWj4By9iAYSNrerQCKsyBzC29G1JynTRWbywJrGPkEoWyTwMdPWuvECRzkjxhvUZ8qWzJVN5nvv",
  "key3": "3mJdNC5BZdQCfNrnc7A4YB7nSEHWbiNzJnkXD7XzuQJaHpuRmGB9FDWn3Q7qRxNzbHuADLYpKZQP6F5WXHS44abB",
  "key4": "5VUjbcyRdnkcc5JLJSN1ieyBHUhbuee7UmR5DX6BkoJNgDyrNS1hrut9L8d23MqGosfmrWvZqHZkRUr8xcMkgjRc",
  "key5": "3rNKXAwXn7UYDPGXnvFU8Mf3LKc5rUazfm9sHfrFo5MwqSfsgiYsHeW1DLu6BbAuHakJVpLkUK1DzM2Qo8PsSjjz",
  "key6": "67ciW7GHGbXdzJwRgzxvyUgeEugK4xQR8e5r4uqySp19fE2iMMdbTU38pkgze3Fcm4b4VcKYu2cNn2espgf49wq9",
  "key7": "5sbL8DJChx7DZrjGz3g87D3hd6X9TFXUef2bmrMhXcEFbkPjd88B9HnfDjV9boTjPEEjyZwen71WVfKVdABQtG2Q",
  "key8": "4pXQ35CHeASTPyf1QAwA6TyNbKZbAUtknhHsRBCT9vHkxuJw8TZF8N2WjQce17v996mQPS59zViEddvPaPezpWRp",
  "key9": "5mqTuXheeLvwxsdyoRLthtpzCGsVbpNY9oWDK4RZRV6yGydQBDUUTi1xvrbLASJuWZM5CLVcrZx1haBwc7aTFk3h",
  "key10": "4vJV6t3Sj8JbxkXTYY2Taf3Yk9aa1rRGPcjoxqoqNHYMD7YZRwaJSDnbXru432zHTWtBqBC8kUxqtuvkXK6r74To",
  "key11": "hQ8veukXUNwC4yxHGjeUt1TbKxLF8E6HGjNaKGvt8WfTbogoMo5iimDg3LMFss9W2FqAiDTtMtQ7cZnWPFgbgrR",
  "key12": "3qBS6sfAatXYXVjZzsGLacxQmYfVzSdKSexDFHsGZ9tQ3jQKBUocDnGDk5eRDUB9ZjH6og4evsBwELZc3zpbWm9g",
  "key13": "3oV5pXEEySYmaRrzs6Sapb4HeaD7BzyeBQHaHjTyhgNancZEn4JEdwxvFzEHLFoGJnefXxHU3PgCzQLnQ1uXjhfB",
  "key14": "2i6VXci2A9wUofVWSErS4AVc8wAeJ52tAciNAwmMRh5eFZvzwesosGitG3iWXLnSJjp2Y8ncQyjGtMBXVeMK6fbv",
  "key15": "2vjSkbdhAsssMF4qpMiMhPpBmaKKSp5g5zuBpgVQf3gA425sr8z4p9SgvzkWAGSn1nBHmZLXmAW7m26KaLFRemBt",
  "key16": "4wh3FsqFLa4yJbcrfk1HhZZ6Y1KunbU2RYzLEioTRpf4DqJknvUVt6G5Cd5kTT9BdSyh4uNoetrjeggGZJ5p1DUQ",
  "key17": "4cHVm23cmM86JCMtwjuRMbUE7mzMvyjWPNQ9xxEypDSijM35US72G14orRZzHQ1BDcP6wVivRfUUhGfZSNK4Jask",
  "key18": "5j8Zv2DRpGYVFCzJff9g4Lu9HbXzmNQccjncr3HZLnGhbUsUXk3xMZo1RKt82qRk5fQEcUYY78bdUDXppu5Migge",
  "key19": "4pwtmUYb7Du3ZU9Zc9W9UMMyHXHZqQXfb7MBK9stNQKVx8Lk9rVgupiS5AuzsnrEq2XcYSrnxc7WqoRn2X7WtcbT",
  "key20": "3Kmm29XuuZ2xoaNc45JGVatrVuueZfiJ85SEjuE64QgDBo57suB5Gj6c1AyBNvcYH6HRZRnAXjDQhuX9LThq4Bib",
  "key21": "2LNNgsj8bmKrRMY67SJGYenkARx53ui6AY9oRLefJdNbCw68MSsVNfTZV1rbt7uCJZzvfhzKnGXUkzEL1yx2ETKM",
  "key22": "7sS4UsPtgfGsVx98U5uPExUSbjpmJX2q6V8s9QVSFAeEuxW7mBR6T4v5bGWKMw3tXibYMV9xPFuA5Qc8SWgg7Mh",
  "key23": "tzHfXt5uQ1hm9XPjsMsiXWsX79SsKdgRnwS5cKqSEzwBPmtUbYRZTfZoQLx9gxY6UjurWyjxrhMCdhLMDEN2Vhj",
  "key24": "4Q493xm7U9XUKfJaAQa9NLSyfgAtPgfSXxwoFbvKGDhAJxTBrWhXHQLyhxdQyrPeeVKEuktdneDrDDf9BAFhfen5",
  "key25": "Edpeh6HL9ZfijvZnAquQvrQZYZ5baBPoUSaeMKtxiebCqLiC823rRmpCShjFEpnFstg6eUMrmHcZ4H3yvvfesxh",
  "key26": "4F9cU6aGUKG2id7fa54my8WdH9mnm3gQBcLbPNY2XS2TZqPQCKmo1NjDpcBDxahfiauge5DtkFdtGyDD99XeDNjA",
  "key27": "3zN3dWEm2u4Q3nSqtKqXEcC6HVxVmwT2bjrDbU7oKotn6kxn5ChJFjYj2cY5FgPQQtspgshTYuUGzMujVkZazJXr",
  "key28": "4Q2rPUp3dmzMGQhvuJJ7yX9ESpZRZMUte6Ddi2KzPUvLpUK1WZS6MbDg1q6tYdPL8xTfHXdGZ8sECWfXjsLEfdCY",
  "key29": "5GFdNfxjXC34jdzpXpXDmae37mxccUquXUGxsavVCNtyBummiJsMxeVDcDgc6oNdRRDqDhV9YbJT7qfXT6qriwgK",
  "key30": "26Hk8N4GeVkudtmvLtXS7ECCjL6ocgNNCehB4QvvgHhgtvfchffRGbvnW3jhEZugKakbPmemUcWRtf8qcS7R7qri",
  "key31": "3kjF19EdRkDVD4fGE6DKGYgEzCWj92iQocuDHVpnZrtwCRocfKiZ6j2GLzJCU7Ga4tkCKu9iHMkHwYNXwA7taiu3",
  "key32": "8BAZCgtwpq4Y4cZNgspNuL8zqQp7bGmqTHas7yka4s6ezJodToofsRWEhX9YkDDtPKyoZ1nzAFncZMJfyTHU4yH"
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
