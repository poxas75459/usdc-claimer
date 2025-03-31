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
    "5snbCUC6N69rzj2rBkEVcaaJDeLvSjnBoFEbNpvLKPUuzq7uTzFoNXARcWL7DpbyMYEXTrhZRrrq2QQ2oeh2tk1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TtXoVf1dDNQZcYLrwSMmb9G55dQBMQNzhUE8WdXBQg8SGd84aJzD9EuDAeNGEzwyZfVfXqKCjntuKXAL8rk8irp",
  "key1": "NKvMVyzkw6sABHEzyicPp7t9WFRXKuRaZNRDt3xr7SpF1qYjZprESP3UqBiipsJ6HMLDGgwxZBNyrMn2f4aL1Yo",
  "key2": "4Ganof6mFfaL7ztv6FNYMq55B9BYD3CoCZbxkFVFDxRbQmJwgTHfqetijYdGS4twvoitGh4nEPbNs7yvuL5iUeFL",
  "key3": "3Ltty8vbwHxEqKWRhPpEmkKYitiXKdaCmYuZfsHRbJ5LTu3E7USMyMn9wFNgV9GRDa4poRQEw7s9jnX5gqerCpBp",
  "key4": "5kNY4uDd7xkrTxMzyU78tT9JBjgoG9bXnmvfDfZmZGuBo4YBMGUd9FqMujBTwX5K9nmY4A47cF9sqSaAjh3xdq9d",
  "key5": "5u86f4iCPDSXMvJ86NWGChPLxtSTsyvwvGL4CBu9Y1xnoxX3MkiSnnfx6iC7A63v6B9g4vZ75k6iVS667bjyXhrY",
  "key6": "4ALGo7zA9esPEYqGf1vGon92DHJ3kXyYHqCo5HJpSzfGpB7xMH83AkmHusWYe7sMeC23iSXatRnaaDpEbLB58hxW",
  "key7": "4oumnv7qk2oqQrmqsGXPBLhabugaanj4Npa2RhdcBykiY6EbEWn34y6MYBrwK5h3ZF96SwDurKcSnxrYU7TFoZrC",
  "key8": "5P4xwr1mvMvSGND7x99eE47JjiTGrXMWyyyYiouFM9o5n4E96DpzkWyNXtdYMZXYkPy1zx7TA9m5fnoHaxoyP22K",
  "key9": "4Tyag8dFD1VsC2DNHFqECryeXGntJQzrotZuG3Jo1hjY2LaUPDBsTdubrew34cD1ThhHzqVEhKrcemGJwNWhgL4E",
  "key10": "3RQUQfyTZxp3xg3YPnUbduu6BNc9KNCfNMt2ZjjGX5JNhJL2a68MHzUKZNh3qxY1V5twg3nL5vUwfqx47Ygf2qzK",
  "key11": "2frFmwFgvTF4GmzMAnz8nixqRAFowWZWswUooPcYnz1Fm1gtR8ubr5LYZKuWm4dmmwfg377DnbquuEWhYT2FYQMM",
  "key12": "2wy6d4eJHBdcWVWafdWmNWHSKxQXku7d45iQ1wMzAkqFipEcJKLP64cd7iTUaQVshRB8zpPi5ygejdGWGKPhquc4",
  "key13": "4UjGnQEDjnrf98vq1CcAGvgriMjfp68yD1U4J1PmkQmbGUDcMEnohiuCAztLP5tdFB4oAoAiJKLfqgfYCbvk3PLf",
  "key14": "4qDWXDayttUMVPjEXM17NewsJfF6fVcHpHKMWkgrpoXSEtKD5xAJjkFUHQ99PvVjCuhAtC9JJQZzA5uCU7mDND4u",
  "key15": "4U4WrkygRmuHQ7xm7JfeTJdDyKAeCRw7uWm6zAXfyYuBDtvLApYHFPya9Gi32tTm4vvTtDPF8U6NWKctH9ybNk8p",
  "key16": "LekF6VKRZ9MRAoFaF5XNL77RMJVZux1Nn2hjBeyx6zbB2GTmeXjeuRicsR7SLWPL2t6VFS6gHWtAvqqF2uExt8C",
  "key17": "5HmoXmwAf6adjQNX2FBgYi6e2oDVrcfZLKwU8aRgPDKnEPVUPFvuukn1oZsW75cVWr42EYCNK7DxuJDgFSvqAz8g",
  "key18": "3RyaNisjhy4rqC888hSCoLiwB5J5KSiE5htts9bB4r8acJRyqsd8mZyrDX1dt4Z1HjVM6XWaM1r1PCNUq2wuwMi5",
  "key19": "5wZkDTg4GcS2wXREARrLGxhmpcHBcAGm26NPdcNdjJjqCqrYEJC3TNoiTjpScDQUNbjSBJK7sXjDhFPufLtLqYcR",
  "key20": "KmfQYpaj8DhpZJE133UNtSDzwNf61kmbNxa2ck5GU6YaMYS17f6jUoMz5VMEAThyak2LtEcoBdLqvRfZ5YvAq2G",
  "key21": "1Q7rxPaH8XpJD4DpNU9QiPcEptnyoqspcUaPAtqbjdEqpvYkydawb3HZnt4WTKSgnLpEnasVxugCvHVfchoUDae",
  "key22": "2y68yzAk8z1fCFV766fTDt31x81euWP2XT6v2bEBTjFquRrvS3F7r7EhNWbwCJeCWrcosfQD71M4ThCP86hFhEgk",
  "key23": "65x8VTE6nP9SQ2mJFNBT2TQdM1aEcevhYdJXgRxCcrpxet636ZFDmKTV3a7RfUEXMMotwxVQhh675hbbdXr1y3Tm",
  "key24": "4Qy1emb6jatbiTqL5qwsWXFQJN1Jud9y2KsgsCGrZYXN5K2zg4ZZv1KBuEs917usqqsYwk75jW9N2oeBVqeqBAUS",
  "key25": "5JX6beWW8jedoGZ3swYAUF1eyqLEGjWxH1dzHMnkEe1ZagdhKfNdqd5VV49bNL5tswZ71N9jYevpqyxK4j23zaF1",
  "key26": "5MZ3AjNXkh6zgcj1vX64pLc2sk9nz13wVG6ghexXeyDKc4JP9U9zM9TiWRthRkRUbJ7uW36DcyRbSyBG2iZA9uNt",
  "key27": "2exgDCKfDJZswT6xyUGW1gPwX6LGibVBZ4d3FXGDwW4kYuZxAXhHoHNgszEB12MAisaigLsgLiJXBnDS6X8kRV61",
  "key28": "5FrTRKG8RhVJEtcSbzn22FoHU6gG2aZar8oDSqfom4imA6vUcbyPcAsfxTM49NJ9HM1cmsKvGYbEBhdo6X91448C",
  "key29": "2TMpcW7D956UKdbQmG5nsi794hj7urVYb3wr9DmAqaTkkWc4xYKeBzxezqWfFCVH7G68iVxctKL7EMMay5Y5Zsp1",
  "key30": "45UkuQSfdVctykT4jDTp4aiZWAp521ShCQhrp2ft4XsgzJsS49U3yBjEgHhCxAd8W1tHTBCC56xSYTe3m8QTzTdT"
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
