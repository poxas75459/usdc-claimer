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
    "3xGevGnHkUZn5bLRxbkXZ67rMmKmqs48X7Y7Vmu8ba71mS9AdDrgKh84eTMmUgkqZdZHc28q5VLRjfZbTxVqXMww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yqqLaxLTrRySzSvLoGkmP8c1G8msuEmgq42fPQYpwQk9UoWs3TWEGWqbZuT74uWj5JswbEZBB5NrUanotp4Q9f5",
  "key1": "3pNr33hWPq3b76y5aRBwWCS9Gcgb9WfBZ1xxrAe5HJmYtYgjhjW45ccwH4XbGLfzaQTgua62XSbc1wmNDuy8Geru",
  "key2": "4S8qWQ4DdjxKirj7kssMCH93Uu12R9qMEJ9DDB8hED3d1c2PbtjRoWrkCCx2jufwPpxSSmVyS95ZwuuiUE1PjMK1",
  "key3": "3dHVLuDsiPSv1vSymsdoBwyLACcwEwv1cTX7G3PxAW8hBfAzhzcC7MsUmqZDqQfbFs7LgxXohQkhfk1eQycLnfEC",
  "key4": "5ZQ7uM4HBSGfaMJX4PeAoP3hQUfg2sVV3HQnMoL94Khou1BuRMB2M2SYSG5vxMMM1jgo4LXXzCzoUSxEYDD5Nv6M",
  "key5": "2zvhzUmgrJZQt1BRfdLpkVgsqM8C21MPt5Yk84bv2pXPtE2ug2h32eGbS7bsxyC7pUTZNiaUpMfmbPrR5JCiTv4S",
  "key6": "T3A2WAQTaF7ntmrVhVJBwg76w4i7NQ3dWBM6c1xqvywP66af7z5V9r1yYGWP5gK1Bx9FtuzNML3PvkeYBKX8yPp",
  "key7": "2E3ytrkGwGiFSafceRkWWRUw8KvW4uEhCLh4HVo1MNEycuMKzjdHCUu9UodBhyrYjaMrkgfY7sKockV9nPHBQWhG",
  "key8": "2eB1oRnqwGfg2jBmfwnTptHabQNZXj2WoHH5nP76MjdvxfJxGW1AUstAiJAQuG1neQCMZKGqrFAVpevhYe5jV7XR",
  "key9": "q9TRyNvvbTkrwu4cFSieYcR3TLFqL1BT2eC2iTMcy1D7EB9dn7C7eYgf5t9H9qvkunfnQjuTaeYCsxYn5jsv2tZ",
  "key10": "2GKBo2Ea2KBXuzJfS4cHiZb689SdEqf6M2otnpYpvYzHwTCkrNSa5xxkdyZJSoDZVsQL5HDThKdYQgBJNt2UQ5Kx",
  "key11": "4FbkiLDmbQYfKQGDta8jHCquTpnTeXt6BDsA8LgyWB2V8uvQKzgMUoy7puRgGmfZ5TaYVCTRjTbYDfQAmziq5HaU",
  "key12": "4gRvvwY2nsMuLKcy2g1sDeBhQSuD1PxCdAV9zumcBrtYVcaXVYm2Y8CEwbvs93bKVNVGZxA4rnVkvZCXxPnzc6Bf",
  "key13": "4hNfsvNGwLUnL5sc6npD1zKyZXS9fdezqPCRPRTEXiJFiGHn9vUcrYaRDi7gRgtK51mtXqge7NHmzHAdUiqxcXA9",
  "key14": "2Dpe1x5bF2SxwYxB9UbXcU3vAthEbv98BiC1uFPTvffDGhuYd5tgzMxEenmukfmiEJY4urvBqVgZfUXsaJivfwrx",
  "key15": "4TA6bzmjgMQhtnGbAAQwveL1jizaEqzR2cv7R7KyzB5JaPjcCqua9sgU7tuLC5TGD8htQHoLLASn1S7aPgf4iCzd",
  "key16": "5zkhMzSLGrbnMWZ7SxAYZZwtnHKzJet8ZvCdgoiTjj8U57EcTp1Snaca31digpi6hZPaPs5LzcSSVureKKwxd8Cz",
  "key17": "2h3kQWJmgBbXc13d8zhFmZqsgygCMngrg4jECJTqhGcqu46wATCyRDaz2k4qsxJPnaemMDHeUFqHgzAcGB2X74eE",
  "key18": "F8JA5EbvE2rgUqNxkbGTGe3jnoMAh8W7JtjBi1HmYcnGoTYJN58Qwd2yAM3Y7vMEmW4xMJGaZdFaMmRcvuqjDCS",
  "key19": "29TzhW7rtEYYF5bdTYSY92rP6ngUJ3otumCzQS3n6cj6kCaAsjqzQBkbBiQzKhgZKmZk4JgLr9aJs2nzaVZFTqdu",
  "key20": "2HHKoCFFcfEsnnw7nHSi5uoC4zag4WrFTn6ZKU2g1yCJv2UzmYxLgAwtvfbd6LkwAz7gZveF5waL7PBQJzXq3a2P",
  "key21": "uDvtvJcX4uezEeqp2SRWLLMq7HkKwttYBzf4VTFdhp8xVWgFXieBXJfm68k5LZKKgD99oavSbXZYgMjjTNYXJ8w",
  "key22": "2tMvirsXDGoZjyzDzu9tLB5gKXoCfSgEmKsANp5CnRgvkfHCFh3wzRRH1Z8TtxpcZxTKPZKaox786MFhoygTjmuW",
  "key23": "3xyAF6X6joCiEpgT5uKeLkjts17Hn1kZ1CseUxkWR65GKmwgpUjJS9hyVYC347S86oeML2oogdLfBsNpsPnTes1Q",
  "key24": "ohKM2gi6PM8itb8JAJ6hT8sJiQJRSHXFG9nXqeTKjZnszrthsWYKDZLz37NrcMzHexzdB1Fo4o2t7KjptzULJXm",
  "key25": "4kbK6WqzitoMUjYf94uXXxYNGpXAe68qsNmvFrv2CS6XDTZEkukim1W8RLi3dhqQguvgjyCRZdz1n4r3dz7BtzqY",
  "key26": "4zBQqgvkxTxeL8T29NnLrmBg2j5Vc3Brn8u14wDCe66CZd8MUJQQYBHAbGKYn4kdxpyuFebaEcF7CnAPeDnVce3S",
  "key27": "wyiMJd4eZH6agttL5BVL1QcEoKSGZufWy8hiBjejYPwH5GcqjZ5Bv5ZGnbSK2eSpmRZGixxBHd9hAEFqdVAWFkx",
  "key28": "2q48x5NkXnE5ZRwQKX2Yj3u76yenpD1bVEi3vqXm91Ti9wbH2aGprNqVsSer6oaPSzpadJffbjJyC91gx43W4zYx",
  "key29": "41RQFU4RPZqP7cvUheSB5KUNntQbcEATrhQQYjEyAEzSAUFYSvYuVCRiHQafhzWbWvAaMapCbbwG2KriTU9En3sx",
  "key30": "cHMowHXAnDEeLmcv2ooyD9Kv6ubxX2V92xbx7EckuqmT9CrpJ5BvBUiAe5e66w13Aakjm66gJsTXzSFKFZ49c1p",
  "key31": "29rFF2tKzUpf7rDUM2bQSk41HmYVuuP9XHtAiQZ5a8NkUF3YaJrJEzouXsuyr1mAekmNAyTGwLeJRJxbZJZSnCWh",
  "key32": "3XB3tsKac1tn51aSrNrTNWtKcrAuWBXjB5wK84t3L2jY5fbDERbk4YmhtZdCXhnRui1yUv7ih4a79uDe46423FUu",
  "key33": "94yMgMUNes2m1SMkYbqsh7yjwbiqCthNwzDFrwhdbnD5CcU2wAoN3F6San7zrSC1oqxTZU17tRNWde4Mpxho1MU",
  "key34": "2GjiGZU9YzEffCsLVCdGcS2fFV3j764jGB42jsTijXMy1AErD4xF4Vp5m3JuJn4RAtPYbte7Qt58B9VwvUxeThAp",
  "key35": "5PcqGYdNaKGRjMUrqbykRKTPgtEipKxCXPgcVkb2W2QxNF5ehJwqVh946TaRPtBSX7AvyWXhiK6ZNLgQRufqzBEn"
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
