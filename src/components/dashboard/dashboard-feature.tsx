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
    "5Y94oysL8MLjvCKCNEgeAPAuqai6NG6cCFD5nFHnv3NtKSCNQcJmcCn2PqfBb3HPHDjDTruxfAhKUxdKLYMThbeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zmYEfNQhwV6ZPxwZ6KD4bjubyW5oC9GDLNGJC5iNe8aNp21i6Tcdg59cbXbTG5NcWvjn7bcewRCy1NTFxGihn4P",
  "key1": "46QFQ6GG56p8AMxFZVu51JgT6GiEYhdeQ7KcwcV5zP2dVHLW4NTMYJBa7Fhxaov9wXM333sm8XbPgWib2GeVwLJq",
  "key2": "4YfTikDbNAKq58kEGeUkxYcYtNNd35R8cEp9WqQD7qgjV4WqG8SDpvGyr45idrwi68uR7pD75KaYFP9xEHNaKVoL",
  "key3": "5aWUadTS1hUApBb4RXdBV6JbUrxxBbMX5oBtKu5rqsoyoNsEb2qEmdqPSxuD3jTvJn8nzxN9jkx21H3ehopPvTx1",
  "key4": "4tViVz8pZT2GTsHNALypNPwvpQ3CZpEmLibBVcc9mgZSfzYrgyatQdQGZatExynkrf5v4ZLausoX1sh4iTqWWwQR",
  "key5": "9XL7kudbKNrtX9KKnsFLskTYyGDPJriknSnd96wQxwwseEB4LPoaf3cjoWWKWo4kzp2uHo7agh2TeEB8RL2dRJz",
  "key6": "2xSF88SivLRGp9Nn7931TDyxVfGZJpgizgr5KntQHJfEqvVbknBew5CAns6TMUMv7sFpUNBhAE7n4Q6kN7FkqA38",
  "key7": "57JAKypvQJCTsX3gQZ2fGJURH1CDCfhbv1UBpLLMjKxAFs5oicRJ8KkEDEbPiK1MLCTZkKUf3NQze9TMqU4kY2Jg",
  "key8": "3YCkYz3fAbXNkmMQnJeL5MQSyygsmUJwfrYZYmYjyB9YxjgzB4Dg5qgAcnLCbmqucDh8X1JRXo5Lwu2m7pvLQ7GR",
  "key9": "5RqHjaoH8TNDLopmwdUNsc5x3ZDbk3wVLQ8npRkdKXczgh3CYb8pBYPxewudYDKjLVcenYPQfqbePUEgbaRkAziK",
  "key10": "2ujvvWifcGQepNPuc35a3HZyVLfM8h8ExGie562H8UMAfXKPUvrquxU8QKqUfGLPZ2FHAEdYPRT6VZBt4Ek1m9ZP",
  "key11": "5f2yJqoHgvNk3mLCjJGrYHJt1FrTScgdram5qoADmr5bfz52MnjeM9bDMrUqXT4zXJqq3zhyaKWfQK9qN1Pq4NmZ",
  "key12": "3LpjgpBd5RsAjFdwTexQvfNkPTtkVStpekuoHtEEdQ6hA5JQAfpUstkBqZcKbWd1PyJ2525vDnDjG3cevR6YdEn2",
  "key13": "HyerRdoh5U6cGapUiSU9bvmugKpmXJaees8CGkVsEHtMLu6kn5CWxj4ts9DvP2FEX1mmMYugnqcBmjxmvYfycSb",
  "key14": "5y3jfQqW3E9L5rhe4qVQgiAfawerquczAz51UZUDCkCnq4X2mjL156GcVmeHpmW8TrMQyZ7xDHfYYGHqozHDRqz4",
  "key15": "3Q9E2Prqex3EapusjQ8UX4SbGEr5uTRTsMDmpUygJFZeoF6ZJvnSKUakx9ko3EmodsQWpuR9MfBao1ucGYXGTs52",
  "key16": "EhfZE6Pb9RVx7adwHbbHZBgyF7LtZNhyb6fMo8V8SFGuaGRxCzUQS3tM2jPhctQQ5EcZeuXMgUib3AgSfaN9vo1",
  "key17": "58yfkb89e13fFEykdPtuXMQJgGDfqM2U4ZGxNi1Zc5ca3K26aiazaHJ6GVAgBPAst4Rt1fDPNLWvQMUPedLhExgN",
  "key18": "5uhWUTGoFqGGYekgtDzEcX1YVVwNQ4cfSaA6MB9Gn7mkk2LjHWdDb4wkNMGuu1BoVyCApYobHY5cScKLRU66qoTL",
  "key19": "64cQ4q1gZUacS7ucd4F8JdUwMcEED1WhZRSbRrRRqqqT9wzZXNHpoP1TqsJsUeKfH6j7ZudkZn3a4ZJ5LbcDUbPr",
  "key20": "4QgQAersKxNXyn5h8ZXKUKATtzBVb8WTfbtZ61QKwAwW4URPJhLRagD7nfPFkm5mAiVsgGprsBJVtKFdMUdTKxYo",
  "key21": "5WAQWk8KJxzpiTXWCAsDSXsJoEKyhQNwYcb1mzGXmP9RA3v7eZR2mocdsDwmaa9ztkVRHHWQVZRnZcx631ncb2gy",
  "key22": "2CatjPTjMvhv49m8CrYVmY2GP3xkkvVkTE98C256gjdwXmmnYFyXqNdF1FdLWwP5sJTHK7MDhGSuiUXXuzoQ1kZn",
  "key23": "3A9VJpJpbU6KD7ixAHoj3kuiUEUyd5C54A7vT1djZ1fY9wDnFjWAeTw22i9i1Lx1DbY6CphC4fsUpMvjPg1w4WGK",
  "key24": "34kQHaaC6WTbyuNcPiPinJVNZVubTTb4hHfggqAH9SwJqMCv7k6rB3Z1myHY5TDJzjQZVykuYzGgJHu1QtbmzKqU",
  "key25": "5HNGZ3EyVFWxzhdxq7RiLvEreo92Gq8bZrM5f46siVdqr5jrcC1KLzxbV6LZNmJ7PGzPwsSVPBV52hiet5qkdwCW",
  "key26": "5tnaDcS4Kv98uTNxZQ5c4wDdYtCa1QuwseJKcBEAv2WMs7vHtqyZwKrckCYXPVLP5QXr1DtuynveHtR8f4BcGg8Y",
  "key27": "4hqwa11geoSyr3BEfa2Rt9pfvGgL7DHRPZbBxKHaq8FzgDq6diJqojNCLxdXLd5jv1g5ViVnx6W23h3q7s4aqnz6",
  "key28": "3Vpn8iHJSVvq8Dyq64ewhkGSkq7sNiwjQu5abaxveKiKPNBaZbc63bG4hr9A4ENR3vtNc1JSfDkKngQRod4ETyEa",
  "key29": "3PtiMijmU45CrKCJ6Trsb3akZLfmXqHasmb5VhY3cPXvsKf1fvqmtwRruc8regKQP81VAMqzh1GXfrAyoo7pMcrt",
  "key30": "2PY326TVbVR12asdrBfN6GDxGyx6Nrmx6iL8F7Bop1f6gFPukkReabE1GLB9PvXFMtmUuuSXx39bEmMBCBDqw83R",
  "key31": "HZD5daAbyyYAgM5wBps3ap3XPCeq81zwDRfxtPFD7pT35sBmCTwvRgCdHSTc3twq9kP6AJ1TY6zCYE82frPwyqw",
  "key32": "5u8QzidXhiGHWRJ7RnoLfPpdF42t9TjJerhqFfiGkEddLqZJ49aRVYzDD2oRFMV7AmW4rEnpaWmPsHeT6RUyNFjw",
  "key33": "32Ey86Acz3MajPsd5SPPov9wWqJd9847RFPgsKYYwhK8dY4a1PQjrQkWjaV8PyKGUFQCwvHEuNR4LGoTE3HDDKSu",
  "key34": "43dnoM6rCeV68u5chYfe35rVSEKLuhC8p2oTYbFMiaEkj7YjmF53bV6K8cKHeZsT4P4eWtgnVV3MKVcfhNwCC51e",
  "key35": "LWKYaThtrMu3r4iNFFCX18Pf6yXzdKo1BGmXh3nWxXsRXUrhwBug4tksJmtcuQWYhRLwsKJUeRpaPuJPo7uLNWq"
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
