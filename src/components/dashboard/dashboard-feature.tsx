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
    "5NZZVrZnNTNttALmUuoXGKRerosiKYRFMajfvJgFGxmcHVR11pu5GcZKMmP58aXAnU9MUzr2CZswf5zyCbh3yziT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2esJMx6KNxevoQ4tRWWnsvh9w31LTCQGE2eTwJww6YhZdfecJvXZg7tuPQWKD5ntZtTdKamyofftcak6gVA3TkMG",
  "key1": "fqkdgPQj66e3ExsXy9KxuQJ3Fuji8AvmDYzR5jitmWtJPfuefxYKim67tyutEsL9jJftMJQoEYiywJWyqUzTZvx",
  "key2": "Tp8H2dNjeBahJEuXj6ixnYj3w5yF56hJA1QHLUaAqT5FPN6SPVNnsj44Cggd3SJemdUMdeUkHs69FeHH5Qc8KaR",
  "key3": "67G278bYLNrRytnExHGUbU9qhsEJ8QAeWRG51EX7tVYF7RQQwYqLAZV4Xz5tbHf8xNg5WDq9kuSBEWPCzpWDxFdK",
  "key4": "2aaK3HoaFu15hPAJZFdTHuEv7AWT8Gx5ARAGCZhZbjNLieTXmQ3T3rzeYpg9fbb3LGZPZvXVzthPS8UkG9sUGT42",
  "key5": "XGBXzY6MAf9E3mUvQdb9fvhx7dbsYCAaupSDgB2avo52N36paQHtDSRkhZrvQ1vszeFz4gxVEFM4bDMSxi8hAKc",
  "key6": "3hQQRofEwsjVPtmGos8gV7uqE6BT7hfZT6M6FJa7aGsRycuTcb7NYi3AkpvsjhzKAAxtdSHqp3VsPp9SHcUjUR6U",
  "key7": "5QEtmD69yHEUF267zG3VGPALSGSYwXQqKe2Hqg8CnuPxoQ3hG3BDTUvxS3KdXPsyEaSjg8x7UN84dJbf4xu8A5w8",
  "key8": "4LLkmvTB5pqWN4XTQQiwiWPTXKyjxjJ6RhSdLbNfZfJLDjwTi6YyoxEfnqRftFyonmisZtJHZixVZAMsJ3HxP5pM",
  "key9": "2qiQtXcMXvC1vH292b44XyswhiestnBfVMFSx399g1sRk9Sqi94vGARR8jXwm9SbUkuUBWSoLYjCWNdG1GXtpByY",
  "key10": "3nCNgZzG5xV2SqnGXTUTAbfyh2p85M6WNaniuSRRa45u6i5hNVTAbYjEdvKYUShbj2QpqVHwr4MUD7zqh55DW6gz",
  "key11": "5Q7c8ifGGitjBZRJi17JGQbPF9pJfUXvLk4iHwSrA3JZAYfpYttVTLthSMMDerhyKqkHLPeTp23UAaxyBBgiCZbt",
  "key12": "5JP5RSnqGdUUjEedsvXUXmRJgj7BbK74LzkEoztaeRyYAv1AsRdZdafLap9FXFApABR32AsyGdNN4QazPhao6hLV",
  "key13": "guGySrnpSZ56p7rf7jsSq6Xn2gqKyJ1ecLQn75DfF413pPikbwXXPMeiq8Hb4KEuZYUWJK9sdnBPA1ptNcxR15K",
  "key14": "3USDrNiCGUNRnCY1Eiqs8oiEDKjPhWzNmyoapA2jGhAqJaSf8h1pjBAgGzH3y3ZmziDVUHD5GwcZDA8PrZwPeSJj",
  "key15": "ZmMEsoXapVrkzBZZ3yjALJYpBBmNUzW4HgPFTc5jCfNHAN9mnwefsMzgJznFKLcH5B5khNd9qN6sL3D1rDY8JmE",
  "key16": "526n35XtLcPWRmXdtxe1jkv8vbjbho2K9yCbatFuYCtpTTDsR9xUrwTrSPCgyoXkYsZmrCg4BSD5WxiB3UYdC46y",
  "key17": "3cEU6LQ6xu9sNVYJihrBZ23zZiyeH8WbDqeaKuz4FNAFcipByhMhkUPuGznd9fN3rgaiegJQAB71rdXnSs6v4kjL",
  "key18": "2UaH7KHjGWSBbXGxin29BS15Yei3RMF7ucqXtymYu92X81oEGXz19rPRJeiPbS44Pp4Ax7qBPRDvwobKPREriUB",
  "key19": "5MBLwvacJtVEgfRSbW55n7i2CHb65wapreBA3MXv9QLESHqh7ercrWpwL7HdZRrVZUPkQ6Xtn6CfHTJNZcUFbj2R",
  "key20": "e11hKfJee9NEggZ1wyRqZjjyX1QLDHpZUHf4a4YBzodRmW6vL7EM9wcLLxRsgvrLQGAtbRNJDGhrRuMseceUdrP",
  "key21": "N26GbPKfuqmiFhR7Fc3oWPN2xdh621YJcuubkAd16o7eBS7s2UQcQ5fpoe2G1kMtZvqz4Thf6Cp93eBLw3XdQSA",
  "key22": "3N3THEW2R2HA3YTAg4c1tRzkCLBmxNwHy14pymAwzuZY1jHxXcyWNfZ1o8YtxUeRJJzXcfZwvgDnaJ62y8LE1MTJ",
  "key23": "47naCHZwcxqcuNkdLj2QY7CQa6srD6fMQa18bUCT3V2iL55rKefnwuTcUuq95t1t7j5hBfkPhZtU5yvXtcenyXNm",
  "key24": "5tfntKeRkX6fxDbvsmBNVoDDJNZqokQB52MWPmsj7ssyPNQQoyMSB5umgsJmFhN1XXRD3ibaVVyCo4PvZJe18ocb",
  "key25": "4mgVcg1StySW2BqPjftNXcG1HQq4gqWXnNCvJ4YMDHMTeDjzPwybioWB14gBmvcWCDzZxsjGFYXTHJYkg11Urv3k",
  "key26": "K8sW1xqop37TEKHmZnMXmFYAaKUhbyxmTH3WSBHfTz1butFz7QJFYs3SxpqJuBUz6zSxSVhP6BCLD8JiRpu2fwZ",
  "key27": "JwLBf9U3Hq5STDDp1rV7nABwKDFnegTsSNC9XWDEJWN9jagG6LPfPfYsFsmPpwezeuSqeMY3mEgkzGpXuXxCuD6",
  "key28": "5Z2mPYhvDy4rkw5rkvN9k2DFacg6mAKndXPVzJFH5m21Q3KF3LyCpdfdEmUtDo7VDQkGsQfYgCt6vKQaXj6jgCSP",
  "key29": "4kutHXhVc68bzLsXDgQPG9WM7cav7rXXve9WUeyTHGA3hnNXK5u7rijpWYF4pwXq5akXRpZenWAnzmY1MHUNoxeS",
  "key30": "2r6fNF4AFt1kRBhT2nDvncSbWcReAcwPMKNpYZwTZiT8dq5kiRDgaevfihj9cLuZeudC7hP11862gMVKtwj4h7Pr",
  "key31": "3RdiFJ9bNai2udrJkYyGx3eFbq7sQWmBcBRp27PzhCwrKUmMeG5LgXqPT1Zn9hYSgFX6Md4tHA4hq7JBY3mz1koX",
  "key32": "5bxQwFA2rGfSjAseyLJhTnMFdMsGeyP18J2DA8efZVmhBseQa5iJqp7jD7GWrzNcK2REgtPGLXubAz9RmSUj8X7W"
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
