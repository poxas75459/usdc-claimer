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
    "3whpL6aU8jhupDirbyrssMCYumWydmyLMbPr1nnGWS4zmwRS6C8ERF8BBhRmBbg64Xe7gpouxDCfZTU9hGnU1e98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pTtmvnAgNCt8Gy4Ydj7m3pYHRWVA9DEhnsdKTiwFBzfNWCp3bUrJorGYLeLPMyEmgVxn9aPpeHKkX8wuS8bDrHU",
  "key1": "5Sp3aXPDrzGJn35zto8LGpp71A3QeREQg1mZgFZZgpfGdbwPGXk7ghTGUUztEyeyz2Tgc2qtLCMXcbS8c8kaRVkv",
  "key2": "2zq7pTudxG6NBuWx74QgGdps5XUXWU9Z71BXJ1GRJixfdHCC45Ffy7KTEHzWjsXQADaW3dc7z91tZhWx5oaFPnHx",
  "key3": "3tgnjhNjhbppfmwPaddpnnvbXkUmpWRrPe8zr8ApWWBiE4vqwiUzLs55nmPDaWCL8aX47Aq3Se5MsQ3HLfAjXB5L",
  "key4": "5sNPc7DAusGtTWVAVeUR6ipZ6GcNWgJS6LNeYNHBe4emKHt1evZsJYQkqdm1f8awnWNvwnQ1FpjhS1VXSfaXDood",
  "key5": "23apzzqHHgxKUHbq8shAnTGAYAicgPZqSEMj2LQzeE7DJFf6Gj2YABtGRA6U3YiJU1uPcaCPsZ2uze7G9eeYGAPN",
  "key6": "5GjPRHG97Tq6hFxHgDtunnPusoTVT7C3qFApenAR7iZBUnEjob5w3GZaymVPRrb8UMdSyeWxYs5vizsFLEU8MGKj",
  "key7": "23z9YoHQpUi7K45V3KFbicVbJ1y9SVWiNrvxyaDd5VRa9WCBRdWbKwnY8GspsZnFXiZLAWjcud5bavKrQDKjqT12",
  "key8": "4K3R6x2MJJhBG1jFaJW5oQKu6UU91ZanxXtV4xbrGHhHigCekhpVLnWAdx5vQJZYH3eqZv2x8Dq1EDsBYsjVCpvM",
  "key9": "2iG9g9cd4oPgNGCi8xmUzrStUdWiUfQFupJGQPW9ZrcsRsd31i2vn7JhQCGp1dRbGfhCXAMiXRHnUeABEM33uedJ",
  "key10": "34mbxLrc4TwvVeemC6nDcadZACHCKVgvXqGkXkJEPFRvRo27E6LMYo5j7PBFxJFbuyPEConCaw3gwFSF8SiNDH2P",
  "key11": "4kmLBZTNYNgX8wTAwL61QUwkkyE5UY4m1cTPcGoAmHW5VtSQPqHa86Zzz8qXcmh9k2zhMxydsX68hF26gicm9KGu",
  "key12": "3iYFskc5j8dABLj7ryU46QXiPsqi7wYn5LVe6bKVkpfApzJ5YkDXf621V25x2TYSUZbsTraa9zKAhzntyyfdnwFm",
  "key13": "tCk8thHrG9gqAfoUWDjmTjUUFHUUEfJrZHcgGb75J77rRsogg7uB3nundbajxTxeGkBK5Pq5vHwSf3ZDNTCL3kS",
  "key14": "27YvUknppoJaaWCgeNvSCYFXUHqSaimsaw3t1sLyQNJczA4dSfhSRz3onR7RkTTEBexBfU1wAPkNKEoq3N7YbG7M",
  "key15": "5GAC7DzedJwKUWVehP6jtHCdUyE26HbV1B4UCMHxEgBRZaqabBTEATtFx2xzGgp6M6EbjFD6aEQMCyLiz8hhY65r",
  "key16": "5zrRyKGD6g2GzwQGyUS85fjfnuoqMJSNW4LVoHS1VRq72sohKu8YBaKBZE3YbbDXvDgcPpdu27nMn3de6YDdTsni",
  "key17": "ySmSGUQGvvEuSeDeUSW58BzmxoKN2Vq55KQDRtHoFxDNVpTeFq31uyoXfoRzZuXn2s2EThcqPF3MCENCaScnDxR",
  "key18": "52M5ZFAtcHJZx8GPwX9WYpQywWcshCMhXYT697bQkUAmV8npZqZqU8MNQM6YdZsvkT8T5CPTCtgTRteN73LTc4mM",
  "key19": "2g8qKk33rZGUCuJn116EQYtCJo6axkgL3zkkqZSh6ZPjpeoYbVU36gmjJxfei4mbewXn1QDZKpNatrXXQmHbnuWk",
  "key20": "56HQ7wtZGgWWLveLZLpPhS692GU7NugGLWhM3Ek9m9FNrUiyZSUrW8LunsC8tKh2dHUXfFXFkC3zvwjtNuBLq5jV",
  "key21": "4BzxpfhUXfU1QoqS92J2m4EDSCHqbpU6Y4YAU7ZXJ448WZ61w9VXdfRNDSfnzwyMytxhNntGEGQcCtFBKwLbRrMG",
  "key22": "4fdinuVuWLBPnqMZquRGpZ3iorNM9QP23CX1mCEtGVYugFJ98zKwsoYhzwshRRfhEznygh6oFwng6Xd7YNeJ3PkX",
  "key23": "42d1RcnkDFgk9c1GjCnGFUAXY5BRFnPJWmLomZDTY5hhgYuryBPX3K4oyYFWiUDH89bbsKHXA9N9LKpxrRt2oszQ",
  "key24": "pL24cXXhkGLm6pKfxderZCrBCQhBVSJAfn4aatGQ6ysLF4DNtgVJtZyN1x3Jrg1yqd9sYQpqkF9HX4jMhLCzPrY",
  "key25": "45KJLWYH5pVuKkiA9Q3fWDvo6uQJgHNJoo4BDHtQbiFVntLSD69MiVK32MN1ZZME3BzucaE9aXLj62EMzytmGQqR",
  "key26": "47TszwoXepi4BsoLnMdhUDZjikw1Tw9Z2EJEDwc3h9fPa56EokmEW7omeM39PBEufGBwmLNPsw6em9xetP9KvUDd",
  "key27": "3wMX9Jxdz4tEky2peFR8YcvK6v6j6zQmoFvpjFR6NAyJF3B2Vn4VCLr4LFo7yPP3F2mTYXM75mUQQVjZuYGJ68Ga",
  "key28": "wFpdTV9gcMzpZYNHhNo28xgiSaK4Zbe7AgKt3QqARY2xAVgptrBWThYchuBXDyaAhUnLjM5nu518AkqMHXFLYri",
  "key29": "WiTDhjiJR5HtZ5GSN3WpcQWEDNxTovRUFvgqN8dHHb9Y8Zp2ptM7GZpXzqH91bCJz2TRXysX4tfFKUT66ZUfPeo",
  "key30": "41ZowGCe6aP12vzSDiDGW9cEoc87pgXaEQSUa98gVH7R8ckWFcXx1VU7aXDYuETFHc18J75oE8jckxQdKKAqWrFM",
  "key31": "54nU3QVeCq2J7WHVqh1SU7H4ChcXnSpWkbnQST2bDkfJ8QXTN7TaJpxRW6p581eQ7mprgPJkP7L6A9qCvwCPzQSB"
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
