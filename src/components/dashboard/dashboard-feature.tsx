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
    "pUoqZexGp9daEpcwaQZPKwtcCSGkiDmMLmyi1ahspfCTmpg7AAqhW6JAgUqzYRx629jv53tbniDjxVnEffw4on2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vGZnbDaayrHSJsvKbQ9oLBcE3VkzRfV2CgNVgtmT8zviskEsEiPfoJeequ995Ws2oVzcV6db7pgB5CFY98j1f4v",
  "key1": "DR9P3thUNkqAMYYCXwmWRZE5z2eCMV28hsZwUVTbg9i8nhWc6nWUAK9M4pqQ8CjkzU4DM6WRVPNnt1tAectct39",
  "key2": "4Pdxhsn7snDB6sZazEzFCPoVH1NeVU1oXPYQBVoWyxAE5WgmLqwD4vZ1fQC5hbu99hDBCWYeYKkhiW78t6KAEC4b",
  "key3": "3VLK41XspQpFcxRrAonDKpa5uzNeMmRs9fzUgZmprsJuSkb5hiHirg2r1yBGxF2eaWU947iLPxQPKKTLzX7ziEqG",
  "key4": "3XR83CxcAqP1Qo14WRkrr4rP5pUqtHRqqAEsnvCYs8JY27EsutkDvqnLUSgUZDC136XRGGSyVLJi65zPHYMjWpr6",
  "key5": "5J4fDBgizC123fdSpg9be5eJyKPtTaxgsS7Mt5UbEm3ZWx85iQGo7mfZkr8cgFPNa9KgqJdfCUwkQbrYrQiwDQnY",
  "key6": "56ve7LTmrC8ne2aaBoA8X1W2FcpBgT2U4QQN8VV13ZBJpSz4ssDiQd4rosD3jnu6Z2Hd1zZJBbzyZsuUjZfgGJgz",
  "key7": "4Lgo4wnR27EKvpKm6G27MH6L2nF86M29cyBjRNC4X6dRmnptAVGUKjURcGwLRu3fDsR8pYZMJXAWoECzgLY3n5M5",
  "key8": "3oRXdPazdexuD6jFALrMdPws4JiGJRrtVv1TTWqxnhf8V4P1pdTPFtPk8uWKPY6XdwhAa9s8bphQmbaEi2UNYht3",
  "key9": "2Dr9pa25A7nNFuXE9PCvUvxLZt78WduoGRAsnF5NDQ2HufAqMUfPRYsusPejjmCtCfWTT61Ji36cCatMtmX7KfhX",
  "key10": "5z5c8xDEi1PxNvmYad9hKiNUu1LUCcpUJhpJzw3EqiD6HzXF2x7jRtX1J2c85gQEfgxAa8bcK31EbVgAYvPgQv54",
  "key11": "2AfoM8n74LAUspxEAyNHRcPJY1X5iGykeqTfyZg1nXtMgfuhvAwb2Xj2E2HRYLp5ZKddcyyXuxwhw5ozQ8nw4ywG",
  "key12": "3usNkyRbv5gVoZSB3WREdhzJXGUCiXtgMZj5Tsj6YuyZM2d9URgDSpbL9LUrYKYQzozYU98PVsCRc9a4CiqfvhHB",
  "key13": "29f7ZdS3fJBM2xDb4Jf4vSGVoAV3RG4zdUQ8HSJUt6CyNkmjamYNRxrRbYBiATPpB2KRTvPFqguDhMYhvHASZFgW",
  "key14": "25dB5PkNgwLadSwWP3GCHZkZLnqD38K9m2xTuFv7NPyjx3pyEWpnyUDUP7G8S5jbnVFWZHXtfZ8G3S8R9M2M7d7j",
  "key15": "2uFW2AZcdYtiZomxfC8HKhDPvenEiBogUxBbieJrLrwXjZgBKw98djPSSj4aPbKvvFGxrwYXX1f5qfGj2UMFXHeH",
  "key16": "2gGXhGRsuAXwaf1KBcSwP4qbkKYL1onnifo5oce4pNdUNK3L3JDHR3TKA7GaaTTCoK8nSkQGXnU5Co8r7S74R4qo",
  "key17": "qTTsnNoWjbrswVmN9HDwWZowSm32tjEQgPZ1TYeKAij5Hcproe8kupAVGdxYE5BTwZbA2qFVUx3ENsaAeYJagrb",
  "key18": "2zs2tB1wNoYg9avosjb7zNBcdtByr97cSBNTyLeZ27r33CkvhneK6dSHdj8HWQYBo6LpkHNNGE8if8aRuVZiSCMX",
  "key19": "5u1u3L5hi6MSHgYgCN3vUg4YyRK2XUtNLFYECNAd6ntjCuBtE2NXRczCCZP9HhS8e9UEoNS4Jd27TSc5jQDLv2DY",
  "key20": "2d1XFsAZuVBecGmvqhZ2LiMMkV1rW292dV1xbCSPt3SbPkNRJWD1Khitv5Jvmc9FqKRvpkg7GCrBH1hwwPDuWChy",
  "key21": "4ked8EntLxTe4igzB67MyVf8je6Q7auVsUdRDtCgrx29eSXjD42huk9LpZwei8QpjTUWJmFG3XVWDVYv52A9r3TV",
  "key22": "4me5QTAjLQZ5Fr1CyjouqkNJfPBYWtp9rmPL51SyBwB6VFmUgyhUZXQ8D5MSq76AKgHCcboMP3y1V1EtEbejaKNi",
  "key23": "vtb3iR3k3y9Z3QU22M5TnnZavKeX4SQm16vNXQotjuLrW6BY5GVYRXe3kziySdWaZxzZPWGdqguxEJWUCWPJrjL",
  "key24": "29QMjhdMcZsBcWLsqMSxXkKbENFZ3W95hdmUgZXn6eEuQ51Ne4zfsMaPyNCBTW5kP6AmaMzcZ8cwxiNWiPWjSc4j",
  "key25": "ghyghMCV4QvMxgQR67ePQz9syE2SSYp2iTeujknksQrMa6uTJkUHu77QnuGD69Pv1GYzpsE7KjcTNmjxUJ9vqLa",
  "key26": "5mevqQLLGDpdaLyoLLoWCcjJUeiUAU7Cs6kHq2e7RQxygVs2KozTdKZ6uZXkgbBBwairNNjVtmufYd2BRyaDXNLQ",
  "key27": "4cxmhEEpmRE3i16h2rDfNX5R5zRWybtnJoRrrK826hGu4y1zjtyKaNM3RJXgDmfzgJjgi22vDPxhWQRqgwL2rr49",
  "key28": "yj166BwJ7VxckpXGYVeLjzLNJWc3rRCyKAv8unvif5YXbWigxUcp6J1TewBQwU6mgMkmUfMfptFDv1DHrVRMXHS",
  "key29": "2CHdQUxYojUA9Zu9DWrnhrWtbNFbXM5hdGWA7YVModUYR1gxb1Vbu4Uoa6SDinuXBCtLm7ZuTkRv7UVh18Y9GugX",
  "key30": "4k2UDxDx7PtX8Fc79KDA5eLAd6EWooBVXn9oNmBzuKV1PLpmizGe7VYfVwuHYJEFKBqg7xWDVo2AeahcH3RtKs6y",
  "key31": "3HetenmF5bZYJatBw3xaj8sPZHpEwPufhrCJk5pTz5FKFwKXWSRrvq3nH7SwbbeURbuqcVCiNLXhfAjLcrk4CJja",
  "key32": "3R1dQns7MQsrJFP3bGh7zAWkBUadbU8t8NuJwqeCU9s5G9DwVjqNcg3rWwLdLEJD5m4LvjH6zVUYE9UVBa41RTAk",
  "key33": "5mMV1CnHngEYguHJzUEXMmjhjb3PA5Aj1ioHnee1bRfhNaRLZPv3XfNLjvbGjWvQ4iDf2d4TxyhehYQpeM29e7pm",
  "key34": "5xBk5Kd3cqVmm29DhKdVnUDy1eGgLz1fxBatiSS2fgYy6SggS6zeCiRSdmaXdxLfrf9jpjyMfCrqqroFhn7phSVR",
  "key35": "4VnsHA4UqKp3VKp3SNGEXKBMx2MryrM9fCcqyLqmd6LJdKTR59z26WjtTxK2aydzTESJbes7qSMvizAuNUG5KqHT",
  "key36": "3GR7CGx4Fx6WxwwE5D92N7hRASsK95EySvgHcZnwrdpRuVuWvEpd4CNtRqeHxF77KVsN1twCGk7CTUqRbXXkWD4L",
  "key37": "45xLtd5P3kZrYK49B5r1C9rKfwDPiNriozBgNM574iJPRQEqk9EH5LAcnmoU6Akzsk3fWtfg7zFxW5TxWZMdNNz8",
  "key38": "5RkUSDB5K4deo7Sb9fdgSgWkKkYzjgKLsJm4v4SDZXNMkypodwUscGuYKe9vg5MqLfUPdq21ofvuqwSHYuBiuZci",
  "key39": "4uy1LEiU6Vt8Ee89PmtDf2icAzwhB8fgWKoGUC5i7RhSXerPREwzC5rMazFvPbWMg63XU3ontJxusWUUZncxy6PA",
  "key40": "444d6FXfc2T6amqudeipK2vLiy4hzWFJZ9hd9QF7Rhtcm3tjcRNc1S4V6ZeRvkh2ciRoD28rF8iwRxdr6bArMBHC",
  "key41": "YtxuFn6ctemVuWNwTqyCHKJrJFzEgoa7XFSNMCqLgfSTiqAvuA4pjem4TTEVjpKjfCMYjduvXcxQPF67z2EkPAJ",
  "key42": "4oSBjTnk5LdBDmztmSEEzo2xbc7VbD4wjkDXXXddASjTTTdSjbuAVpRwae1QwdrtawRhm1G8r9LrU6Fr6dMN6vm9",
  "key43": "42pXoeBUaqUfKNpMXg4gK7wur75CxGeduj9paA1zqZqtyzTsB3ENigx1CTS6rjoUUfHA93LM9zXmRzFGk5y4e1bq",
  "key44": "29LUxdZ8xeyF8rAgEiHqTyMUz84jGyc2EKmYWQ7dmRuebsPreimDJrPNUTrpBCqYNNwyWCcnZGcqjXw6saaVDSNC",
  "key45": "3pLV8sYNNhij5vwMLJ9futiYTGELkG4wBwxCmWbgnVE6xTzzhUMfUcRC6FPLgwXHHUVURgBo9R5nnsdnStXwyn2A"
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
