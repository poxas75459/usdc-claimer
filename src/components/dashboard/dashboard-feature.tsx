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
    "3XoaKHrCuC8onKAKMUiRAa68c93M5HurmgeiCu9ynvzY9bfsxKVwTMVvKJz3o9xT7vuxACMHYQ12DhsLqJkpWECy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65qwjSuzXeTGLm29P9vYk4F4B2kseG9KbECAhybrZmHHeiWiHeEKpKf43BfmSjSrtnoSa33yhrCwgCqUygT29wre",
  "key1": "32GcXLGVtirb3dq4oErUQVbZytjJ5AxutJoELFVFuyeRDR6eGh9xe3HXKqFaN2r4E674GapmqpG3Uo3zmfra8a9w",
  "key2": "54f6sBvsKQBH79yDtGx3U7budLhkiPgqhwPN9K95yWrn3VCbvE16scHPRFmon27mQV8UZsZwt4V13Ub3v6VP9oap",
  "key3": "4CAh9zRnUFH4CsWqrzqeXNPdsq7cUTCf8ffrxL5rXRy8Lr7MoFV6RYEQS31syEpEjLZb8nEwPxuYKgkFmLapBNr",
  "key4": "4ogsFxFFTr42y4aKFU7k8T4FKhdsmpEQ56PnfGsD9vNUyUtLdkcY42YzRkQcEVzZynbtQvEdPk4kC9tTmLPBsEaY",
  "key5": "2oBouNWuTk6zrZtaryGanzvATb7RbdZTJ4wnUF1tDLoojcusNWED1QweLpj7LtJBHxsE3ngRz2xy7fTv3wiaodHL",
  "key6": "66uyVTg5NHU1yRFyXCKJxyG58Jnza7JzNUzgkyBZpnBMa49B45aWJ79UaTUk9PkF41WioLcxwox5ReJwNpBRwMKw",
  "key7": "5KJPrcwh2g7oKKCDHMbwCdZsLdQzWEK4szM7EvU2WuZYrmWTDrDxCny6SjmBRSJLApUR6axRzGEpyPvFE35b6VJD",
  "key8": "562A39tB8aL9B7A1p7wD726TgEYe2CuwC1kJtSGmsDQyJSKKi4jPRZCB3juPfpSz8TURgEXPUNFBQGA41uHHtqYh",
  "key9": "4sB8X89ZKkUXZJne3ScoPAE54ySmtgjEUGyLpA9KqQinxzStzDsgSiyucgPe76V7QKRdmiAhhqk9iDBDvdJqT6Vz",
  "key10": "2cpRyta7qgfJzBZ3HMf3FT2nMMrxsEqfLNLDqsQnvDkKNQaHgAQ4QiNuMGAFznfzFkzj4HETa8PqykjQVTERW9MW",
  "key11": "5MR7ZztBpG5TNRocucCW9K2dEFXhRd52GsGLWEwYGah1a1fBimi9pBGeJDzL1fipURUYJk5ydubwtu2qFHZNpp9j",
  "key12": "2joHkk15v4FudwNVNCc3291PJQzhmoAMjRAnwPbmEw1cj9DgPbbqE9YmJtUFUH57w6Yf3HcKEvX8eVpsSbTKcdVS",
  "key13": "Akk6BS1DjMg24EmYdAjJc6g2YKSTrKpxrt8jX28TLLaN8fhWNkUpgJ6zDwvSEks4sU8W68dbhRSGwwPGdM1BRZD",
  "key14": "27oC3PUmoUcQJUYFYqBh4b1aH7AmSSK1nwpJFPUKanX5oFmSNXuwZac73WrxBRjYs1pbGEn754YbpSKWAMnUpZEY",
  "key15": "2XyPDCM9u4K17oREmHQbdA2diE7Eqo9q9Hh2d7yEbBzuT3qSEY6rRPPwcAHdYxyNhptDPMAinaE2eVAsYAnpBtcs",
  "key16": "4P4P4MYNVS8YSABh6aH7o7rSx5RsWnVQg6w1Ut8xVeKQeAxhsPPsSjkYCT1REearXwRgPH4Q2chaUSTtbjummbpA",
  "key17": "3FHfEBDdbbbgNQAinCdBcyh6xzCFChrcniaegKoPbH31XDXQaQib1fd8gCojcksXhL2vYkD5tZfJw3H2rHq5U8m2",
  "key18": "2V2Fq6EBHthuXCKsDyBAYWzrhoMLjXZxPJg5KpwaRq1jeUEdcNxpcg6tN7iv3HsKF8q64RbVhsCqhz9yj8gzFYqx",
  "key19": "34YKcKVc1TdxzxTJHy5y6kQU2TrxxpUauBNHDQTiuqyvHPcTeT6tpMcBZnAsp9NyGULeMJrhCoJRCkcdScL2TfA9",
  "key20": "2xbmw1wtDbCyJ5cH1PBQY2ZjRCn6D72pC72t4Hh7tTR7btLfGP65yDiuzAVur4XryzLsf7yQUjzZF4Vb3Lvws1x4",
  "key21": "wf952sL1m2YhTssqSEWmujkbrvihYvKFVzaLJSCvn3WnJDA1YQQBSEyfHFZVXsiPfxiu5XPvL82ut87BTMqyHGr",
  "key22": "3RsbuD7ZjS6PMmA3wTs8ZJEJKxV7LXdGJGABfVvLZ9ierxkbtD22u4VvfRhaEnDnuNmXqgB7xitW1e99xNQFP7sq",
  "key23": "5KAgEHEoxgvQHd2T1YhB3orKVmvGgoLDDe1KFS2mLyfcpMgxqrBmFPCgDja1RTj2sHVJEEBJXPh3Nn6nKz2N5SKq",
  "key24": "2YkRR3kcTtryqN9JYAWvKV8VR9s78KXTXbt6PXmQZrDZQDAGmVtLuDDbqRxhF6EBVksfESzrQqkqp6o9GZaoFpTw",
  "key25": "3XtWGRJgFULnirQG2yJ273WQfBRmwkST4MqiGyaAE5DH5oj3kTe66szTWx6n1jum8Rc8QCmGUFaqYx8aDrQspV35",
  "key26": "2viNqGrFqjn2R43AMp6UTNex3bfSAYnVZATWJWsjjv94H2FgDpRzLozUSLcqAG7tEAogQkL7Mz21XvxdujjN5727"
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
