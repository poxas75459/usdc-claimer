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
    "2SqdR4Ug5JGQoCeFMnamwaraHGK3RStdvW4xUvG7pSCHUhVKPPmauVsxTZfTybv9Eox4aWhUhXsDmhwf5RMFCABP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cFEyNHhiMka9deR8F22mofcwiRXuBGTdyUgvcDn63ucDX3ERkyHA7mGKb6hyoiYijZiqZmC7UAQDSwrVdN43e5k",
  "key1": "27dfwUEgbQcqMQ3rU8CtrXT7vHCxc5735qh9Km9sQ9XnYQUcdYJt1j17mCYUjjyzRWcbm3iF2iADtxxyuccAVkz1",
  "key2": "3FBFniVJ8jtpkrzXWTsej7ZnCfTmxyDJ2FKCXtePAi4DRt3tLCMyGpXH4T9sCMut5HH4mdNcFFD81ycfWdSafRvc",
  "key3": "4Eyqkb6xgJTxAUZeYdvyeRq7rxNPJnipn48NWm4qvyABEYhqVTiww1Hte1j7akzvteyMvhZmzX1Dck8R6uhoEBXB",
  "key4": "4dXLA6L76g6cfS2qHh6kojhoMYrJ8mLNPfbwQcNWkHrtbG3RE4s4kwTs3mDN8ZzMFYrDFmY3tVMgoZmWhi1cwvEA",
  "key5": "4qveGf6GLSXWc6J3WWq1EEXuNKL5wTHyv45NWUfFVZXjjzVQv3qgKnqgLuLsjieNim4Fj5dG2XBEFJCbLXp2GKwS",
  "key6": "3L8u3ZSPowJZ5PcijPj8LxM6TB4mRkZEYjABugpg9qXgnWJsoyteoWdzHzCjLXMrQQCk9nXAk3mKdJ1cf1S3GzBq",
  "key7": "2At6RmatfF2tjB29SBJeRMRiS22cKMBesomfE1HvS18j1y8rSAMpZBJc7Be3evUdayHw53qMzaR5Rg9o6d8L8YAW",
  "key8": "4oSq7UU7ovRx14VsFioa4yBpq7akFGUqPYnDjG2tM546XLQd4897KCooNMo3dcyKYpnfqe4qgeCnhhoJphnUm7KT",
  "key9": "4Y6TAg9AZzAr6UuUbyZECzizMwasfQ4vCGkTC1y55ujhQyjszXM9FkS15Ew2n5hA5caqCTudhqoBataKFM3MBn6Y",
  "key10": "3nLhGtW2V5yMbcXiiMhkFwmoF9qtueTFAdPqXfdC15RWZ4qi361iv92oMgbyshpTTm65KHwsyFx15cQyEEDRqC6Y",
  "key11": "5DNtnn1ToYrfNh4KGo6Uv1pwDGf41RvDxXsNtTn45RjkyRtmFkF5pzn5hPedDSYgeNeJgHtbbzMi4R4Zf1jCgTni",
  "key12": "65hchTQWtSRWmuBpUub5W51SudPqtMaAAMj4VoBi5Em4LE24hp2eqm6ysnoYAFoNiMo46fFbDsFZh5JmbjaGL1X",
  "key13": "2Y11WGHVAyXdUcZ1SAN2TXpKQpBXYSXtmbjuoBQz2wGRjFbo8Qws9b6Nb1DuR6PK36YNhSR65Pg8ZR5Ez76gfHZm",
  "key14": "559DRaEUngcv75Ce19PPrrckmopkWQWtAy9VyaYNasHVFFTyn1jZckvWB7rh85TTe3krzawb6KSNk3mMrvK441yK",
  "key15": "5GbFmajPZJjTJN7FkS2PVXfqMzKXLMxqJRosYpvgtErgJhLAM5SQCoXeH1ehWZAZ4Me1CYzKRXEvMNpy2XpPoYc3",
  "key16": "262fukXLRQs5v6jBq6PbFjjxW7KfvEYW6fptMNiY8mGDKf5chT7uQhn2rcZ2fdhabjiYiRZRPeVxgzu8C1ZPKmHk",
  "key17": "5HcLZ9sbQaGCUdBTT82XLSZcCqiAo9ZpXTjCWchsQ1kuCV6Qxepb1gaHLtAB59tyPRyxUARS1sE7E4qi2tBUgTYx",
  "key18": "HvWNBqLrqRayPDoASu5bXXs912HcShtFCDurgis6R4sb8ABVMJKaFBYuRmnXr4Jzh8oQzo3pmiUPEEacvE7iwwh",
  "key19": "62C1gzQRmnJieQPCvwPKD5ygT4pe9yTKnMhC2tmvFashv96Dhn6WSqU46gMZrno9c2YQrrqb53CzztLHkqicifzH",
  "key20": "2P8Vh5MxYYMipEcZJdRqFCcQSWwQ4GVCcZGYY4d1oJh9v9wiTcDKxXSLfPjpeiDLS1bK2hyX2QEP7Ycr38QJfctv",
  "key21": "yY8u2z1iHqa3zYaMTSEaiU6ZT9GFGv6SpWTD7Fn2znnxhYL4dr1T87h6V5aqrs6Jaj7GXN82TKnpEEzbX8PvWfw",
  "key22": "4CphMoanBUdD2gWYmAYczTucSmuus8QCJLMZ2j27JzXMTN2Bdu58GqZVPD5cvrWyC24UyxKEniYyHKz1hMrQt6kr",
  "key23": "2tmNnL3tNwPzAFowqXj4F59mSch2kexHpXSqfomxVspqXDoFc6DB12WVWEmFPmhMCLwzrfrxCQiWzfcmke93D3mf",
  "key24": "omKnVdjiroB7Qts6cjSJR18Upx9TrWMjMpQZ4HC4ijVbB8EYvfyPQaYtCCBJgLzkYXy8RjMBLBRy8vSgiH9g9J3",
  "key25": "51SaZ6D8ys7LUnf2jhwP8s9FKCyVs9K11t8m9wmndein9x6hoJVjJB5YSyzABivnavNsA9zDQftraKJdqrM3bVfG",
  "key26": "3p81GrrDgE7QyCjZimp4CazyMUJLjwvhb4jppLGv3YwFd3pZFk6wwtsMjunkh8xbff6ckUMUDt5vAzDpiKb2fCVt",
  "key27": "47Rik34eVEv63pn4tabhe5wSKeBUjQQ8oPXhBgBznGAjMWEp9yi9QVTzS6kAV1ebVRJNYSXLR3fsGQ3LsZJrfpjx",
  "key28": "35eyprg9zt93PGLrLNAtayp5fPaBeEQCAQBeJ8bK4Fr9jwEpFbkHStd65pyww1kidzGtezzU7heQBzb9icHAEaKj",
  "key29": "3RKqXcuY1cAdWgd6ncR4mkPfhxwQpbgtnuBb5qHKAHUahLMQB7Cn4WKBsRoerg3DQyh1CmU9rRtjvMbfCnarvQLN",
  "key30": "4DAsoN9YKpLZhN4AhXeD5J32nC1ZayGhQXeqYJK3HPmaBMtqu1hJS11McFsoAzARxCCtMwKVTS6BBQx4KmKnzuNK",
  "key31": "5Xo42TppzkRcxDifsHQpyPUC1BCxXPQGZkDco852R1rkJK9jMCnzPeUFcgusFf2YSAT1BYTNE4dRMaBLSnMskqj8",
  "key32": "4DLG1G4jgovqKso7ejwS8e9hnAmHnDrxnZ68QzKxYYFGW9EDVkcRiUzaUs8yjL56DFyaBzAMrSPqGCxu4zC9M1K",
  "key33": "3qBjX6MLWPjkiSWxnM4iLWfiBCPJP2vfVF9ReH69pGaCKcPwDEoYJG9M8jAJLKqPnCbm5YBqBGL5iA6i3iPKQnRp",
  "key34": "5Ph27BQXPmnzosdH4ATk7FudjvaP4dhmbTEFGY7b4UhyUyycpFue5wRvL9wkbhqRnnE1VquciS9LCV6EMdLNAU2f",
  "key35": "kJ1RQsRrmrh2EFMZjiZ7ghqpGZC1QVJQFMsYhSxwBEqj7jugr6wx2B7GoTrRtDSatXNc3ASZDcaNmi8PL8xHG9V"
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
