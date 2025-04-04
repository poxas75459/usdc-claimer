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
    "58TgoqBkBqWXfT41tJhyS3NmEwF5ftGgK6iiZdxkdhCxVy5rmur3tJwWagR2MeABVMN9vQBXqJY1vH8yPE2FvV2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j1p56KBKxB56vcZNtz8QNsSB9PXbUh7wAeJ48G4nKPwnqm9aqzSFJ3PQ382xtsRfeY387bTCHjaFCS6YC3WdH1J",
  "key1": "5cKZWstQgVccNEFrqM2r4mJ6EP9S1aERGTXo1VLjPXCbTU3LRiJLdxZAAQDe1qpvrchYYjD1DMuaFjnrdu314Bix",
  "key2": "4Qd4oTmXgL2GZFwVKw9sFLhL9hrtuPUrZfzz95QGpiUPUJndANL1LrETjL7NYDHYm9obGoGU4GUnpUJjimrD1TNw",
  "key3": "4mgx7z8f12wDo6PBkYR1CDux1HcVQhGazvx8BPWiY5swf9nVbeAbchLhdYAu3bsVwfQmRsJseh1uEgyT7yr76o57",
  "key4": "39zyJsuc2rwwT1Zc3UG1EMWhHivyQjxQSPAgbCSWMGLaL2Yg5TEyqYJVuCCLSRPzwb7r8PeXo4bpEXzVRNhhvsrk",
  "key5": "3TAaMqckceXz53vrcDEsV2cyh3dU3V6L3PKHcyLab48BANqFhbvzN7eMtMheCdLZwTCLyh1qVpeWjrDuAVMh6eck",
  "key6": "Z1AUkKor3KqV7PhRTG9tBPmX8w5j22ym88gDANMyKwJYDP1VjJfNFzWJcjKvcAmiwMczws494DC9zmuv3KEoMAH",
  "key7": "2mypFNz6AwLZZqYcgA3YBW8CBhn1EAnJRXjsn7yxHsRgzSzALok1jrpEkUYpFkQzMVegMHtaahXkbGkRNThf7rY6",
  "key8": "2Lx9FTcZq1TUrQD5VFA4LvPY1h8CpGUzw24beJXBEqhSfPVftjSGxLHX1b83HFsVLtWaoUHJQGy8cUJ5jPrWYLkf",
  "key9": "4ZLkBy4NTRbugZs32pThjuFAmLQqRuYUk1nJGpvG8T3uW7KSya1aBkYeH37PLMu4oUwx82Jw8BFSCr5uvLsVXPZg",
  "key10": "32G3TtGH25u9jNFeEExRQXSvY8gS8b8uKjDRttMg12ntZjs7FB6uciNYfLnnFY6cFSNvfuox4Grt9KrBFXDJxADC",
  "key11": "24BMsE5JnKoyfV9qnXigkqfxpSu8RyPQ4bqffNT7nj8vNjvEEACWQpByZQf58JAm8KVgwvfCHpao5RU13vFksrMG",
  "key12": "5Kdg3PPhSnFqTxsYyVn2wKdzTEdzYARnSfWJWYiGwcN4gMnb5hzS477nWQDka1rVgGM5jEoHpT5odHu9ABQ4x4XZ",
  "key13": "LXYxosMVkPSYpo4iCszZFfFw34AiJ9tr8JpyxrFLBUPEgyqTvF4Kc57KnAYdM33WNpKb1bjEsDykbwVtoVpvrHc",
  "key14": "SFWvkXG48KQ1tWDMKUdEfbKwWZZpowFQUpPW4izgcmJuPQVnXSHdc3Mgh15VGxcewNzURWW278aEgXeTQPdWN1q",
  "key15": "4F4Z2BBQwVu7p9NuH5NnVG4E5FMkJBv1nN3BFjgMbFMW3yvMirDfyPWUpJtNi775sAoaYEjSmR28G5AszLngJsBk",
  "key16": "4gmBVCekCbc3QdRF4hUw6kiu2v8t358X7UHV13manp8SKsSWwbrfFVqcZFdKXifPT1LqQynB9zrxnXPB7wUwwmYv",
  "key17": "5K2yFhaKEnrFpCuzVXnvsHNbFWHrPSQUDfZfREkGXP27HCGJiCwJ24gAxUdjNLY7et4RAXue5x6XFmcEc8MUeGnK",
  "key18": "2DEnq4feqqvSv7KCq5CZ271q1vjTchNKR5CtDkW7Zpe2MhXsyVcQUSYKrKpxderUDMFwPdpunWoxFn9fnc6eWMmt",
  "key19": "2ANmrZtbgLzmgwmdK2PHacvxjiCgzcWzpKKdcCPH7igpif1LLSnitrsTtPXVsHAv2VL8AzRzQHsqEASboZZYJeqS",
  "key20": "BobhXQghUYE2F64bmwuyY4TthrdkYACoN178KQZjavbNXpUpDEuccZJJoCc8BiEizgoH6NNFh9LdGKqnAQL2odr",
  "key21": "iWTi81JcWRastde1CbHeffLwCrumwYbZfbfnuyfmRcSXHqgUe9ZfJkvVnY8kejR49ALiosMhJV2Fn7qPq3eaJof",
  "key22": "8kG6PJaWTFFHNzxewPk7Z7gWWhC12zFioqfNMSToB9iaCGTaAkVFky45XsjNrPUbunJCCBpQnv8aquMdQgM66nX",
  "key23": "2Hpp1KHncA5VcaNwgLNttJvWH7mDtWh5qx1yKX8A5fWQfTzsoicrXi7a7ThXiZvTqRYgGBn9icqoLF56c6k5Mqkn",
  "key24": "4hfiRhvzayPpGrQWP6RyDt921aFknq1LpEJaxJ25po5q17FhZuWd6J6dZYZP9FWoYzUHvnXZqTa1HiXnr6SyzSgn",
  "key25": "56wVGgK63vaNm28H9B3onpCSxxc4g3zDS21GyTsua9rLg5c8ntG19BikvTr5dnz1uatvX9XzcBJHFvtn3NtpG87X",
  "key26": "2Z4gmP5o14iTSYvFj8JHfvHJqdnFbpdLrv5M7rHdQYnvERXPTNmvb3uHqW738Qv84buTbcfCDg3AqaBPTYKuixJT",
  "key27": "4muVDVZr7EQ5LfrvwtsrhxvyTj1SZ6g54pXn6s8jBwtaQN2LVJRzCza5u5nJcVzuLXDE3CKba1FVqbDHwAqUAmTm",
  "key28": "5qxY61BhiLxv62qfBtAbY8Ww9mSn8yHovmubfCJaAcN75G9RujQmZdzi78rBDHaPjZDv3EFc3D2wWt4JXrMwNPmY",
  "key29": "22eo2HsqRV98CgEArL7sU6E7snGPL8bA5RGggBPUWpsPns1zKM7tWhvu6pRR559cCpFTCP2id4Dogegp9hPdjwfm",
  "key30": "yxurH7zD5HGPbomYADBgoRiBs8cVY8HxgaS1VjS5ELvGxMiHMpPf6umcipryoYg59JqutB7N9mRH2dehChFE8EL",
  "key31": "5sVPjykMzDCSuG7zrBKoi4f1D6os15Hxho4vhgSNPGp27fuxBHuuwaj7t9aDsfysEXGAqiEQKeNtq9wYZvMRgzEJ",
  "key32": "5oXh51h72ynXXJvXx64JPrwqfQm3GArFE4k3mobSpYP8GUwPkx8TqbY2QRod8TUNXJXYCBFbvaVFXeHdVDv9qVjD",
  "key33": "63Y8zaDwmKuYJKsNVHCE2NjphCUeJw5HNw987dwTbPHGVL9X7VFV5rsEFDzSNLo3DBdksd61hVUbdNJxrAsfPmsv",
  "key34": "ygGYwMZw1K6dP6JCamjGfTQwuox9yiTVWAGc9GGJc6ZYYXAng4Svq3kZKoDrzjCU6j7jKQR7KRZiN25Ef2kbJqh"
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
