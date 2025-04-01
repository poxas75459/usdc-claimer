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
    "5MwoFvJa6CQF2NP3iGcerHmi1ZARLe6FBV6pPeLbkHLxcrnm1eg19ZUwXt3ncYi9EFfUbXYmTKtAXSQmwqDFmuvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o2evG9wRpi1rKCkabEwKhMQvuVWq98JVPQWatQ1ytLvWNj6sJXgDDT89kqjyMg6xj3ZH2LmtCdsRe9KqCvJ5KfR",
  "key1": "2XiKAnWnfEzPWYQiwGud3EQnNcDjYhauw24RoJZVD8Y8c4eRdA4VzGhfyuk6jYDWatdDZjCnHVEwx9CcM8CyWZrk",
  "key2": "588Amy5fKC9jvuhKz8dQRxVE3rkccXZjCuQDK8hdvsAqYbkahBkPHw19WZ7E7VibKArUaszFF6M6CEbLUPhct81U",
  "key3": "24bXQikmZahdgz9PX4Q6SBy4TW42J59cHNKPhArg15jMyPn23DAETktFiUj2KVLtVTvQszTzVX3dHG2ivremKHR8",
  "key4": "4xW3FixMs4Ki3edoJLXZA1d4vqxyyTFpgifNyua4FyekfJdNuqvFHogAmzYLRRz1HdvpruSvsUQoKMn8zp1Z9HxP",
  "key5": "5fg7WG8mspsFEPK5rFjKkUjngnnamHYjck9SBCscSfM735B7jP7icYVJsNyUxjD7itFcUZQW7oTDMFXfF42tRNRU",
  "key6": "SMYJ5jXXTtCLmKne7rvLokwekWktGdqetEoP6B9m8M8cw9vbSPHSW7X4sJD8KzFkVmbCY531gu3RnadBabDLYtK",
  "key7": "5B4zuWvnnpb6TJkTkrnWxLZaT2MbeLcuoUzg8Zdstv71E2FdDGDpAsRatMxuVForUVpt1iF9g16ezVp3dRbdWccT",
  "key8": "32wKzJswsZobNqzrVPTab4tqvuJEtPCNKDFLwBYch2RR2sWnYXNvHoEe1wLtDgMJ4WCYun49sTjeKMmmhkiiTm5Z",
  "key9": "3QheqxThF39LUUwepzy9tZnLcBCwdHe28Fx1C8Prc7DbT4QS9c6q5XSBCK6ueMiXjV22PYXNvMDBuDFs2ekrJ3vE",
  "key10": "5ZRkLtw8247XKK5zDP3QL5XUbu6DzrjjaPKUimfwMjYrCTqoR219rzKdjtzBpwvVwkYEkaiphxTBpeXqPdrwCDzs",
  "key11": "2S55Zt1wnvfrdrbeEw9AqDS3DQMXnaYf3eE61j8WaXkHVC8aBVrCrpWrVBXn1fhSsDydi84U6TQQNxxprrFPkYUX",
  "key12": "52b6RDymSAgLZu69ii8xX7pW82RdRinZctdoXD8hYuGw2Z74uSdW2GkcKa5E8ik37m3dQHEcdW5zfqAw2wWCQUYS",
  "key13": "3cRYSu9tZML3P7Dc4iMLgFZEK9ucZ9JhpsoLPMqx2TSM3zuo31H1AT5wsGxMbRKQnEj2UxYoHwNcJwHGhec5pZVK",
  "key14": "4iXiTaxWzJVn7rL7162S3n1PpJoLor5n2btYyybe92rzCPBcRwHuMT5FSwHTNybqWb2AzNJfykkzmR17CLFLevkB",
  "key15": "2dQagnu9jkvxvGCEbrTCnBDvquonpwTw1EtLEZJDXRwKon748UyV7ckUJrDEWX9jBFcaXfk7D8Syh5K5fRVqHWKm",
  "key16": "5K7WFP6c8aYXNowsQd6DhwizcV86fcy3PyafQeet9YCykJjB9LmxnZVozW5Ld2iDvNKzrb5Aif2y7s3hUUbFiAZT",
  "key17": "5pLk5SAfub3q3mAe7nPY1JaCDKGStgvjVwvbnTRE3Giw6q5vgM5QgzfiUHZeARAXkA2kT4YhJ7sbpc64X7jKfNBJ",
  "key18": "4G5xAHegb455hq4PVW8vC1YXXqh9QeeEqCooyiD2oWxrPAhm4i36Mc4gaBdtgSKHCzs5xT4xk1RAtnSutYkkRMTN",
  "key19": "5PVqgX8psFJ9rgz7oTSv2R2BxYx6VVmjVxjnaPykNGN3z23rfq97ZaLAQ2XYCGGWPWXh7TSCneGBTsQvp7E47jUe",
  "key20": "61toXXb37npUErho1EF9YpHHRHQ46tRDtF2xGAeGJWk8kLb3cuGon8z1R2u123F3wVAo35B6wPLxJxphU3L2eNLX",
  "key21": "2FzZNpzuVKHw8q3TxnRneGJwP3THL8B3ULUdBsr13dy7adU87YkpGgD5Ya8ZTEJjcZ7Ri9mtCe7a9aQms9Mp97YL",
  "key22": "2b7jdi7eNFRSpwunYMYUMVH8BMJMtcQX7hJQc7amH8QDMLGXawkyguD4xjrtT5PKWnMKLo4fgF2e3UtkZb1eGqD6",
  "key23": "zJYe7BWL3AuC8JnyY76M7ixG1dhY3X9uAnyKe6MsNyrD9PLvhVQ2inDyh5RLaTWHitVHb2Au32nYsrBb4su5sY7",
  "key24": "3sVHEARrs3cursbvjnHkkDws7A3AoXfPKVVCndQEiLfSHjvcztvcjs1QK9Z4HYEBpcrJwE52nSVevHTkAf9Q83zd",
  "key25": "4V29n9gfuBEDt9U63k9ZDZnbqioa3VrV91cfMMJ3A4hunGhoLUVrSjDU4KHFNgicTkznvR7fsWoavmoUPHfBMsZ8",
  "key26": "2sBmXqo3PNLY1nTVTExrwg9uVLUkT9jxyBf835hJgjtwY21g67UyNtrCz93DeKhiR2vaMrKyvuRP1fQxGjkS8TV8",
  "key27": "2QjiMzb2pNd3HmNdgkrYseLM7feY6xduS54SZVpNu9bpqMrJhpsxNMaF5fSGvd4BRhTFdiMwX68phUVwG83En6Ht",
  "key28": "5ko2yyJbAgxyNQHj6TBjCiwHY5Z5HX7zMdVZMPooYNvXjtrzToNK1qTPHTe9bwqUe3QnDdGnWg2Z1dsssohND5VG",
  "key29": "3yjEPBy22SiRChi6TTi7Fw5wAGfa8C8qAL8ycNvxzRnc9kkLdRvGYmqPnmmRuKBTmHw5nqK5mzU67ojXDiNxHj1z",
  "key30": "59NK1j1VxLni1yij2Ynmg394E5wXA9TDjQ3iTE6emHVv5dH29CDyfgLygS2sBMd8M8DgewwGAdcKAsYLE2AajLut",
  "key31": "2qjdxzpQ7AoBCWsg8zGvX9oadywELphpK5YoA1nPTdQoVm18uzdFp5pYqVqzeF3u2QwRTh1NBqvvGHg8nK5TBKdr",
  "key32": "4NjG3xq4SVM3883Eyp18yg6wve9jGyisYrLurMgQC9ybg8cjFp14wEZHkYXViJuRMQL7sA1yn1oRXgrMEC2EJJLh",
  "key33": "5PPwoe8JrbX5Lhm8BN2NxvgMtsBDCzuDnjcyxaBck23Q3tbHHwqoZZeDHdCBtXLoEAsQMKg76nNNyideu8oDVcLy",
  "key34": "2cNvc9HP6esRfGTfaa5mKfWm8rom4DkrtqM7MbZoCDsaYnLUpQTZVGPkMyEHh2LPBHMjry5opNGg2RfSTK48bAga",
  "key35": "33e6Nj8i9iXJQH54vdNj1xWMkrqdcc5naoxsa3RKKKGxRw5rTqajwZHsttnq6DkX8heD9FFXeQuySoQtcgCzEVLP",
  "key36": "2nnDMuidRJQZjx4pzbt9sdNU3EDL7ncou8KhfgdzcaatVjXVgE2jkmSmrKV4kRRP9dDtSK7o9srdsUaBvrEEeycG",
  "key37": "5zp2HnYpzFCiHpEHjeiPNftZTrCjsuBW2wRpMJ9216QtsYXZDEW3cg4jSfDKP9dPmETeJgSBErkHLQXykCAAteZS",
  "key38": "3fkWWfPUCDwMPmi9xPp82q7XDzjdzcHjKCtAee5kCFVUG3M3UFfeYnfe9gGr6TCHxc7P25D56m3SYVDe8SCUw2Fi",
  "key39": "3n1KZJwoDHrzLadPDgdYaJC9cHfaYXW2R3C1bSLAGvxE7d96ovsuKpmmERnvFfAF8GYNM4qX9dxyZ9if299tpN2h",
  "key40": "JmZa2nXJHoj99wzGPnyy3PnmE97VQCXwNCqnBxx2sLmkjC8gnEAVt1mSsT1yNBZ3URe1HiknEMGDYq66rV43Tis",
  "key41": "2eGgX1fhUohFZvHkYnkBwCtL3RpoZhGrWqN5X7CbyVWPxCT4KKTABDBQbsDEZrtD52eXEi2aF5hpg9wVkqxYJNp8",
  "key42": "5UouF8aJtC4EfixYogcRdxeMmH3gcSuQV8mv37yzSAuC8SXjJsS5XUVbTAX8QbWgcP8dqEWd2nqdUEVM4Ps4so5f"
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
