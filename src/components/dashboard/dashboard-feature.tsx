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
    "2vrjoLrbERFZyJa8tsB6ocE4FvhPjy9F6S66mfoYfg4yMtja8tY2cFViT3tBLY2P7y5ubCiHRPbwpyhxVUhXr1Uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sAG4sSnDap6qpp1VYDVJsbCksNCscNGPk4QBmwFHnT4Hgnhiq5LMs1TgUKRYZoANFDY3uAk7e3KNAx5aHE144US",
  "key1": "5TS2pDizNGDnQ4fF2e1WSx8JzUDD3EC2EhpZMusKPCZPwxhMKCeuXYEjXHbMDwg25hfK6qBGcwJSgfW13kMwBbme",
  "key2": "4DPwuxttG8GAquyxtCm7EwMCfdYQkNGTguxCHkZR6gCF7KnVkbiPk59z1Ery8AmCEPHR73xALSLcHXQ44TaFGzVt",
  "key3": "16hmZBxkCVuBXhCewDoThGQEpNxXKGcWeaH4wHDLU6BY1gvJhzc2SwjkLHa7mSxqGTkdiDRifGtcgBwDP9gcnKK",
  "key4": "fGQe15hXe7jRuJQ5yMJkB86RFqv6D1QWn74hWR22tgWR9Kz1sR3AJu8Squy3JAb6PUnHNe6EzyudGVYdS8gxoPK",
  "key5": "uw9DVXkEL5s8w24wzau8S5eqnMTbF3skyzwh81EdoxEMkCsycPDeY8j5v2vYMhZck5tDj9HvLzaf6Yin2dwaspf",
  "key6": "MWKQheLN4aNvDYNhyt2HjUBDWVrEzw5Za3JeRyzxqncnEE3Vd92wY3rhw4exoon72A3FhsnuidYmJJXHScaiBsT",
  "key7": "v82FxUaZe2XLtsKVb65wNg8VJ2CdKwchKGUKLXe5vEr9c3mSNtrRPKAiMAQsXtbjsaBrVQNraZK4iBJ6SW37nVD",
  "key8": "dyT8besZnkKJwoSKfi51PVhZUADnnGnZECTGPKzwmFYF1RwDXfJaxu2ZZnHzhwAgvtGQTGEsBJGLvJSgz2Zrbm3",
  "key9": "3qFEcqLN2KDv2ZnRnNQxUHPnj6F4fj4xsbTT4CgzB9tDhpJFwEdKxwLH6Gm5h654p9ybsXUuRLdJRGfAFR1Mzg71",
  "key10": "5tRXUZdTQrjkmw2bPWotLDdcV5ED3TKaQKpV1oHxsk8dvkc1u8KyBqNrQmgD7sfkw8mRMD2ehHbEfMHMKjwiYafV",
  "key11": "kjhfFJDkhiydbYgnNh8gpabysQSqxQb9JLrUYooZ66SM6zyuJ8kwqkMbmutw51JSTp8GMRxUKdYzg1pTACAnY4W",
  "key12": "5jGVMzXbMKNEE2wQwYwLW5As3WnRaTpNh98xg5pmDRMowdMgUvjy6xigXRUe2J1cB7kKhjizhnKsVRJvz364hLnN",
  "key13": "5Xp4bLZ5ytZ6cx6giuqk8EDna1jJtv4yVxBukxwy25PVpU55iumF9obxqXsThztiCirZWKFbpxaMWdt4uzG78F3E",
  "key14": "6UXYkxG5Ng6FyF2AzsKy4LhNVLdF9JeKxGNcpFvgkDNoCwZ2Q4c2CPGv3BjFLaVQsS9BMqqaAJbyntCD2BUBrki",
  "key15": "19gqnQ8pLTpmRipiACXdUj2i3w46pKnjv1zC1qsQuGkVP7fAy2stZbpyZrWAZB2tZB7QhkxKws5FBYHUHDQvARD",
  "key16": "5kd53PTwvVoPVxW5U5aCyzVgDnXHQmEZavDYnrjQugXkkXo5hKNqZgTZQBc2yWYz2BGhXWJ3Y6MYnPoYGodK3uKi",
  "key17": "2uhhArMHH2XXCtA3Mr2avzUzjSHTVKD5aLCANsVLCovSTzAyRQVokpSupZtvCZsmgo12WRHMQAGMKc4MZoQafG3a",
  "key18": "3TShWuJ22towWQb2JKUWBaKtnWFWuDLKaXn7XyGie459FdwPPjKz6rii4Z2eD64NCJMfMXuYzL2jRS1KkJr9tZvn",
  "key19": "3t7azr7tTR2kGV74QErgZdHh2VPcJVxh3B83jNmpxijRHdUJ552S2ZoLbwK5EMowMoSZQCJqQ1zA6BoXh6D2wiuT",
  "key20": "2WiGNNrb9KYbQn9KALNtcUqzo9sYV4qvCEHiWWgzJFgs1qEPoaajahj6nLo6QqYwVrVDhwXXACfbgnKfoCjriGai",
  "key21": "3xFsoVJn8LrLYRjk5DykzsJ9MQhVU3LMWYVPt5vxTz2eR8h9iLyuscwWLnDh8Kr9m7xdgV8sE6evDvZYLnc7bnyV",
  "key22": "dQ6Sh5je23vBxntWxZAPBb2brDviPKvaVBAaAjBAgBudHENmqBbrN6zfKmy9Qc3CK4e1twvFzS4qzSRYB2bYTPL",
  "key23": "4wqxhxo2nyYfqpVm5EPUvMQspDBhYn3mvxDuppxfyjs4xuh1CbUxwKCkMj3DPQhDxku4rVDmEb9zbhnx9frAc9ZV",
  "key24": "2qAkJxSEZeFE2TVu1e2T4nHYwUA4fVY82YYBpAZuC81gaGQVxopzF1qCCfrdBB7zPaw7jokvvzMM5Pj5E6zyY29a",
  "key25": "4xTXjynBdWmk3U5Gps2aZTQLqSHps2bJK9E4jtacSYiD8ESEp1vMaHpKqa7nV7R15K7ceNEWvHNApeXXjoaMpceV",
  "key26": "5a64h8pExkeQ7YaxC8LnHAHkkd4WY6fyn2bC76oKDZaDLSJFXriXDboFPooV4SpdZXQ2fjm6nUkABX4RwPV7GtLq",
  "key27": "j7pws52zWAYj8vpXhEybbnmXMqetxJ13Ba3E8a1YC8EMVrDn8ojem6DMDPZxnjs3WvUUs55FQb9tVeQJHg6y3S5",
  "key28": "xPjaio4it5hw5PhTTzJcz2LB6iwg4zdTKzTwZA3WHSQKsgtT6sb7RKGkiXtrm7vV2xzAP4psgpULnYW4oJYJizm",
  "key29": "4ob2yjDrB1aktAYxaoZPeBNBbySsPNCDJg3oQue8BNRVfdkhczmtQsKxHfd1SPoK5Xui5kmKirCfMmXmEGrbZy8E",
  "key30": "52Ca85rPJQ2ssDP6ZMNvV4BsSqDtQYLyv21VYPPeGgUVHSL2XmC1mi4K1MqHER9i5Q3EUcmkrbbZCbjks4hK8LR4",
  "key31": "5CEYQYfpsokqrx9bqATkTk7ADbQVJSRcFXLFn76QvShmgZ16Yr1adHNbwm3SnjMx1A9Q5zJXsZfBDYEFszJydKyS",
  "key32": "2yNyPQoqgNV1eMVVa2jE1zbU3roXFLPKScZu6E9ubba8B9hbqSJjBnh3rxzpF1q4dptF9nn7b2yP16f9HQAqUesk",
  "key33": "3CV7s6HwBpXCfjUzsFceoFsM7GgQecngsmuEYFsvp3WzLwqryzr21TJMb3iLZ74ksMDtzzXZxBs3r413ULEQUuG3",
  "key34": "4nw3p6jfZxUZWVZ1GphbgUoS1TJFCS7HVvR5bDa8wFdvwN8S6bX7BWq6eZTpJmPZ5FkX5eFS8cE55L7yHD7e9nCH",
  "key35": "4nL29VFhMtHBuJxjtRXgiprdeq7zbG5xCvYxF4ZMU8mgAXrA1aaVH8FCEvfdu5bHY3ZCB1LTtY7cpFSJWB3csbj3",
  "key36": "2P68C1svXcJtYqh6NkVnuYbAvYUGUTe4uZQs7DqiLwNAHXYJw9hMWh2cT6qrgb5RJ25oWH5p9mjgmrEksWB284Tj",
  "key37": "4DT2EBDuVGPYiH256xsvYjddCLds1ojDmKU36W1diQw1PrYhuoq6hbCQoy5mwfm4TcBiUrKS8ob16P6E9U6kYKb",
  "key38": "2V5oBrJYLhDfrX5RxtthVQCyPQZG5eXRcuHiDEE6vv69nNbHDer3LotoA3aQfSDCPggPnPGwEGqmrtHd1kaAtt7a",
  "key39": "22TyyhdWeZvwfa9sHVrLrJHbAXXYihyHo1KCMLGsjeWja1zzW31DoGWprqxeEJGAHGRMzPxFcGrqN4DjS93QJQew",
  "key40": "2XLf51pYNkuXspkkr2ayytAT3wqEsSMZbhrfx9SyaQgrELXfyVyqRhCeHe3pumHDrkTK9GYKJYmSbmBK2VoEBs9c",
  "key41": "5TXxuw9z3mQfD88DS2oZaBwzxodKqc1ETxX7n7PjxKgcueoe6H2DaGd7JrYVLZfhHnHMmDeYwCMggbTNAUiJCvmU",
  "key42": "5QBrfsVQNdMPgTU7dXqx7pe9CXRy3NszUxy1fcAJo8Vh2Rzhnu2dK9bvKDe1knUXPUHkymHFL1yyM3kNuFKa2vWS",
  "key43": "4e5TnpGuw3Nzm8XxHuyuSr6Py6pnYYjm44wVai1QPdc63wMdgFmdRyD6F4YCKfDzPhp62oNsLHqmf2KBqVWDzS1C"
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
