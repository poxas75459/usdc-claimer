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
    "672Rz3fcmzsS5scxoJq9JYWKzHqT8XGs2A1ZxoH7Hu4L4Dwkhon8QPbYvvaFxBjtZJs2jCqp5zsuePiFKhrKFF3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nbdMEVL2JszhXUAjLyd9Sn3q8UJo8xEA4QvomHdzH3VpCTBGJwU5ipDWERuAz6kATb36Gs49Tvz1RqdXNspm8Gr",
  "key1": "4XevERzVNLMp6uERgj9qhuRZZCLfWZ713WtUCzFYwt9ZPryMJNfP4Dz1ZDMWAkAGbgoMJRep3L8qdt3P3ztXuvaJ",
  "key2": "48mf5swZfwZ8qYhJN5LmkF7az5y83fxfnfSVn4tHbAjJZSe68Gw4Wu69GKqWX3Z57mG4K8uCAR56UspFvUWyp4Bo",
  "key3": "5ogZ44bNPuoicyFuqCh1d4nVzHcLMLBhsYMNgvsar1tMLwpBxeuz8Hop4DvJjgqVbdLi9PAiHFqubbxCAbFaCZCk",
  "key4": "49uvfdxwqXEWB64nPguF3X9vKoThKXiTSMAcutLv43Q4PHPj2hcZhim9ryNeiaZuT2KdQALWNxLs7e3sNhvZMowe",
  "key5": "3rkEYuEH4st46e1NXGSnt5RvmWFgc4krq6ZdX6dTiHLkg1MowFatfVZMQf8f9LB6sW55Wf92EfaX2dAb8MPWTVqx",
  "key6": "52h6Jfg1sQQhjRfUzou1zKN4Y1FdWi8cGd4sdvVeHcwzK1dRRBLiL9Bxa7JBHExgZMr2kdSE74AbWdnNTn6vkS2X",
  "key7": "5iCEFXxWwtBBeTCsnLret4t86sWxHnTeUNfviJwrBDDRi3a5R2XmtY2KWY1BTMN6idGPZvhR2LLt7FCbB7Mmchx4",
  "key8": "65J6wXfAfXRQJDPHp8GwS6j4HeYNJVgERbSRmDyq6bbYKrADWmfGdmsJZah4jJJwPBjRDa7JJf4fPFjWGTftbgZJ",
  "key9": "2xaVkTFXqxDjDYiSnrBVQkKt8hSj2X6nN9rk1gtLnLB5eMY5qwacBfa97Z7u7sVefLPY4JxpSYcFjEBQDaR6tEqK",
  "key10": "5M24qWL24TQMGxpebuZR7EjXFc6Hq53xZGrmMATkezAW8DzdFVpcLrEjCs3mcJoXQ1rUqtSZdahrt4d5ndS4K6QT",
  "key11": "5qFPppLE4BiztC212t4ZYohduuiEpViiKr79V3ae4SKZBATmkGdEZFpYLVEVsEj9TSyGhSn1obkuQKP2Ao7Xxeau",
  "key12": "3RniRF49sdNJHUuKmDp1124nn9UNG4t9D33R1sB2FBm1xZcCaH5rEp7dKJwxCyCwsPkjLFyTyktgWYzF7KqrJsHH",
  "key13": "5moXFqz1A8Akp2kFS9XWAu2Ev4JT9zJhPzxeDE1FZ1j4tcvn4aDLk9Y5hiUtxbRUri7XSTojBGMw9TrPkzFN7aW5",
  "key14": "8dZPow2PPKRaxWntb37XZng6yyNJp8hSCgSQVbDdb9qJwJwEUoUatM7gGgAPv6L8vPxAccVH1UHVNR2KbJgPwA1",
  "key15": "4naT63wsbAPoTtPDZVTpTpDkGdJrtFvtYyQKb3mRep2ztedTA8MLmSboCUWA37cie4RiXwfg9JhVtyXoQfQRfbGy",
  "key16": "5KkRWmmjpqGRsgN2f1AfbLJhZfAsU197vX6pstBkGs5x1icKXfoBGVrjBJjq5ksAqdcim1Va4qzRavRoy7N7NWW1",
  "key17": "28J81qbWyzJjTCtm6zaux9BvFjzuG5Lfvby8vkPvyodNQ5pbCg2UTDRvdMwe4EDeEC7jD88kqECJjErMwd5UbLhF",
  "key18": "3mCWrzCKFJBA6yiZ7wjtQG8fzCgjetgJxQR4UAUKmtiqC5SkuheFF48nDJvGVrG4g5iGzi4PpdzX3xzemd24uXzq",
  "key19": "63xjccXGuuCE2PBZhmCHSgj1x8whDgnyrRSnUqfG2HAgpotQcsQwTWHSRDXXCnG7qFA8PsoA71i63gDQB2HEJZa3",
  "key20": "62VSbQn8KgrXU1UToyNJXB7QqRt9vDDe9AmtfNwpYMRK3QooXV6ppnsGfa3UHGU1Ttk1qHcZ8yKkRJcmGcup7FHB",
  "key21": "5eiK5bJVgsTgYQN9rBiHJkzyqqF95kvEpfuQCMvoZcYV1usc5CQHC6utRKLYCLFoRyNNWhAG8SsjApu2ZJBBMktv",
  "key22": "37qHgM5Qo4qpU5sbsQkf1d2YerWZke95dUqNuyLUArcNv4QnZp4fpE96YrfkiX63GC8P9nDh5NHsga16Tj3w81RK",
  "key23": "47HC9ZUSeqqzkGY7Ee5UQGcNYBttsbVaka4LGfQDutE9CBVqrQavN6m1qxuac9zPjJQoX7EtyqFDpSKd3k5WT6bZ",
  "key24": "4kfVtqwLjQ4QjY7LiwVq4cnvZGtHpzFTxzhMZqbhSWyLb9oRx5koyrN8BWfBse1vMoWyX4Gap3kcBZRRMmVhDwtk",
  "key25": "4mVntaEjvCtZ8BoeGtw9h53rkvwTuk2K7MJf2xUbTdbxfiCsBKNmhhkPcKCMNARfGkmZCdn9HHbXV6gAd2NttC86",
  "key26": "3JznFcwvgXMkc6bvtvZ2wXqdXEJ7T55TdkNJ1Jqrwn9nbzej82Tmw6jr3CJ8rDF1f2VjsJ9HS3pTsSJu7nZsXSQc",
  "key27": "4KeEAZiasSLWNXinhmNB5qTVB1DcoTYtmZWAP7LHmw6MPyM9thfmNbhmP3b2VMbyv9hgyKWv7TfQghnxb2r666M6",
  "key28": "5nkF3hgXVpJFiqp41KHS6b29Jv5u5F5VokfM5uNQWTruPEuFvya9aYUpSg2z9mTD1sP4V2o1NBvGf5GmuRbUhwHu",
  "key29": "4FgDkJi1or8f9WzvWgnajLqVoqzFsbTaGUCxVbJNsfvxJAX3jaQATTXXTfr4ECQgMugD4bbPtTjaAWhzjsGarTHt",
  "key30": "3TMmSLqKwPXMCnoQYyxcG9UAs46eJg3agfHxRuJLrhNEJnghAgvXQdcvbtL1aYRiGAvwG8APx3cYkNheTcET9H9G",
  "key31": "B338RLFDDPg6UidTpFirRQaud4g6aqAw7XV7bQCwkfPSAmEeXh5wmLr2M5knXqqUdShhbEU36RXvcnygNMSxZiD",
  "key32": "vXrK312a4mcgzpt9SaekDirJuAWLLDXnBBXiJxy1SjRtpvFCAYK1C7j9nTmVw9AY19DyxoQhFj71sEkwFTxjkY2",
  "key33": "2CwXKMKNHsVvd2B57GKxfwX51MsaW3RD7KKPrkUaZjrjH1Ba7iHRnREejJHjAyoo2nUgbz38rM3aZQXVUrZmMLMz",
  "key34": "3taTzDroHXpYrVZawQUQnMH3dmoHgP8fSRXdLxbe1tGM6e1fyy1ATFD1BnwFTmocMKvsySnMD6MufaT8tdPA1SvA",
  "key35": "bDLvSTqBySe4yT6H3GG6nPZ7vS7vKSvxMkXVCLEbPvbhNev5D5vY3vNaKQ7nCT4cdUhfrPudqWpZApRUB1GfM65",
  "key36": "27ZmtVpp4rES65MLya29yWLnoH2fbjwrxzc4WNpzoiYPmbKjSAqizyVGDqV9sVD3GCWHvX97PeTNzQaPCrQ6qA3v",
  "key37": "nEwPsvkD3BvFPySFL8rHS53TP46hLUnKzn5ByFhVCUu5mSHDZDfGhLK2awKbcmj91YHjnqRKEQbfZXTGUV55Tqv",
  "key38": "2h92VS5ZpzzwtYgxzUMX86u2fa65dcLNJasFbjMsQ9EVqew2G1E5rcJLoD8sqvkKRya3z8CMtq2YGBLibGVRGtXC",
  "key39": "5YZZioAZJs2Q6E918gYskFQ4He94gEo7cUg7aZgiR94eFHCgnGXVjNy8KhkHobP6j2RGJSfuHhTjxURx8PwsKRVT",
  "key40": "3oXQNCwN57aX8xkJpAgxexv9S6f9DcFmfrX68uC3LjCkj4uBYDWU7GSEKpfSo4JNKzrLQhawrQ7K3zjgzdmdLKQB",
  "key41": "UXVbhJWhBznPVjeik3fcEftmZdQFarLu6ie5jYhv9txKdv2VPRZR2vApYHJDjTf5MT1hzeQ6qJ1bgYA4fUtAwE9"
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
