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
    "4kDtn7Z7nM49C1ZMstcNLPebQ13LXcZ4cBj1kR2xJxLdfGJfgT3uVtApm1sPsBWMJbzdGg3R6sVvfdjpuwzjRa2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T782976E6Wz9TFw8EmJxfAEj1fcfP9yCwRUnKabHAZgBWzVrJZCJxJLpzXcozBYcji2s1uHA1kZUtLdhLKrYgbs",
  "key1": "3fSuFpsUmiQJzsQWzH61BvB7MhZioJ4ZrhjcXeKojxmLSirsjSrpdot8eoqG1xgsVhFT11TD2q4HmVRz7GcSy6Xo",
  "key2": "5GACBUf376YcgJ7n8uHRAkmepdAUzS91LSrdSEi1X3VKGGrKAzrs53QfJALYAwTqzsMKGDb8kH3FCHjLqVe3S5Ru",
  "key3": "4jzkwbr7FS2SC4Vwd9kqGqgAD7upX35Vr5SdKHbyC1oQWoYBUqdmSDR3AdZzUrMjt389YwsA3UQ6dNSJ3iMLJmwd",
  "key4": "5t573v5A7BbKz34yZnVUAvpE8wHFrrXgJCGcnuBk8yzFp2Hgsn3Z1ARMgVSt9XWCUkWSpkmcAkq7oACcPqDjeMvx",
  "key5": "4maKsmSWrR4LUFaPNTBxA2jUE1yym4XYRJAu8vtH1SxTT8BRhHZuAWRKqEjsaNEQZEZMwPYQbJZ7EwndBGTtAXft",
  "key6": "4v3PKArZoMwsRXWr31X276acpzL7DzMQu1YJPxKkfcJDi3GSfa4WTWGsqTBvfWuNqBioTP3sBAUymYr5GNYgDHRt",
  "key7": "5XSFVoRRxHYMausVFQD3FV5RYpMM5PBUfEfaGg4d9UZAWFtLfRVgxG8x8Zbp844RhUVhd6BK3W7cEAL6eX4tmD3D",
  "key8": "3dmBvWTDrhKPTfaKHUvWiL3vbmtHHf23L5UueN6oso2kjULYSQRFvqcsbXuXVeWwygn5u7Ue3XVxhYNYAiA1M6PJ",
  "key9": "5HZqkoZRoUcXEBKzLahpEYn7xrYMZmkdy7ZaHoDCySkk2j1WLZFY5mzEsRoTus76idbsfvqMUKi9tfHhh1NzQCBE",
  "key10": "ZFupfQPDPztq3mshL5SH1BbQ5ynicTdqxJBcK8mXjTL3iQdc6DdWcwFmkGBxr9LCZw9P3DrPzzSQgGyCXFNCacQ",
  "key11": "44Lk2V7NKmvJLiV9qAUedKT6b835GtA7YCqTcmYvDccU4MSaCQBtmroWSjb2g131XMGRhR93hV3dtRs5QpXVB1bS",
  "key12": "2Se29xPWKP81wgTwtcwnTe9kNCGep89WMKrRALorwP3QmmWbWpFRiCv9hUpntT22KzjP3irigGtEdHboFtQPeHdF",
  "key13": "4viCAYgaAwVxKc5f1uBLSkbqhRGW3JokYcxvCfKVmpnvLnGHp2o6HUyJSh2tjmocGF8U96C1EnMtQiZyrWwcsvvW",
  "key14": "26TKhENDYrejHA2jGzMbKyPG5UffsNmg2o9teHDV7gwAShnJRqnZsu8NJ1kUogad4oPrTf5ora7ssbXDTveEBgpu",
  "key15": "5KNxrKdh61CPuMEcYvUgUAMV2jKTpf6ikS6qXZq84gPqGhjmw9DLDfyyFTdWqPyh732h48qmgk8sXomKRymYFfHC",
  "key16": "5B83i2MDfvK8qeqxTZ6syzmuWZA3CdeVSohK35M2zmrwfykor7sJo69egchX6od6xawN9bnr68X1MdtR7EffhjBh",
  "key17": "5brQHRPvHNw62dXJNsUkjZ6NVEqs3SmADnGK8WbhJgo5Pyxc1CRUjD68ZQz1g4zKBQyChm7LewrNPsFqSadYB2uV",
  "key18": "52jfU2UVosTq691bVWcZ9d476EFHJVUYJMWZzFu3xrnLfHt99XRxH58WmPRXuhksdJQzhCsK8RsY7jj35mTpH1XN",
  "key19": "5sPzd4Q34AygTQvgy33pi8ykHGQLpvJrXWX5uKVaicSjFDu64w5Yi5hg649PvA98ATuXvKowWWQQxWfg7AoFgh4e",
  "key20": "5JXdux8BjmEuNWaPCixDt1e1qdhHMEBGVoEsPTPfkKUqg7Ddki8bJiDwaEVLV4qUUG7Za96RFZFaY6KgAYvTkrEp",
  "key21": "2hmv8zAXNWu7egmGnxYuv9mCKFDx2DswfTVoeeorPwybdFBqLwLtd9J9SpxkKKc1oYGEEbX7HHpCPeoGz4AyaSVV",
  "key22": "52yd3zwAtjMqqUUwtNfDrkrAPtuwg6jjpnpEoN8EsGe3TnYETZX85q8uyjcq2nXk3ZstV4J3CciNzjEfRsVfEstV",
  "key23": "4ddoScHEQAGenDNUJNS4L9mRdC9xvJA6Dp6kCLvXKgbjapf4yDf5XvDyDFX88DGtuM4iWdp5XXDXpuAWmMeFGBdP",
  "key24": "HWHNG12VRbeXRsh1ip8vzMHrwYUv4dN9EF8TEAQNKGmHSVxd7mpNb9zKj8wWa1NSQDjyovVQ142aCu7iECAWeQ2",
  "key25": "8hqiQYgmuqdMbSzXrKuvruE9fpJBL24otqopZXenZLUT12FQZLiBbrhnkJVZsi68wDFxtuSggTdgY7rSkk5KeT7",
  "key26": "3AjeJYDkzH3WVGAFmQ8AuEf993aUG5ESZXpWvM1UAseo8wpjZuiwUWKBzZTSCP84nzonpEP4RhgD1z1TgkrnP1w6",
  "key27": "3U3sqVERS5JfvCr8BhDfhP1vAkUWZCnmdsSU6Jtj5neApC7PxUGhZPuH2rGMwD2TisPj3LFipXPGEnPSKiDGWDxg",
  "key28": "4myCsXm38TVs9pZoGevFBWGFitBMwTtsaZ5q6zeZNao6FFW2ENcgGxbqCbvfjayPgruJLcQQBymWzAsUR5mMxNiw",
  "key29": "CVgNohJQUJfLxeyiTNrHzVK83kYvGY2f5bfwHgVH9wJWbWq7zkTmZrGEjrbJxPgiiGEbjw5sKjecjcchRv6aVWA",
  "key30": "3K69t8EwMujiirVegKCA3ssa58c2KV7HT3zdpi5Rt3EXmZ3GCwFTT5qZrA9cRU6h8MQ28LHq7L2D7p1ZEitw5jju",
  "key31": "3QTahNobD953BVJgFWbjib9cyxweFiY6fLPEgYazwZsTBAhSQUZKQ5zJRp3v5QyhRxADyt3LYhS5FJpeqSXNjacr",
  "key32": "4jDJp2dHdw8mCrdWBZw8AqTwCdehf8EuYgEL5L78UUpwTQXtPJ16npNJBtmqdsi4QPQtEGXf3E5eWVqs2rPS24me",
  "key33": "3BToCSkqagKgePZWWJVYBD25KYnFb5GJZvh21YCrcf8yDVRdEryzTDDq8AoWm4KSbLj2DrXAhQ3oug48qJmAo6QZ",
  "key34": "37Vo1p2Acw68yqEL8QKtyUoRTdBXuy6LAukFWu1udxt9VBiHhDmpE9U6LsoHVvji5EPGZkbCGer8HpbzWr8Lq88Z",
  "key35": "5xtpTCM25fXhJutYJzv9SeEUNHNKSRm8zgKKav1mRoXtxe7AprkfdAr3QSPs5DWgKEyoSL9s5Jw2VTjHgo7jK4HD",
  "key36": "37CwSvL1raeEEBnggVWBVCYFJoHRW556DaxCugbyuA7Mcqi6RATRCxruE8grtyJJg9MafTn81CdmiyrLYWfbBkmx",
  "key37": "engsQLJqXdHd7MpYWTJMQJbJZRVkqJKW26XJev98aGWkKekmteSQAnCWxXZYR1z9VYtmw4nesTBtE9sEf4htRwn",
  "key38": "3pMmhpdxW2acbMThFn53mQ4RvsHa3XBdp9nKF2pcAmVUnwopiCXJimnsKjA8tNSj8hqAWq8k2bF3kMJkQczjccry",
  "key39": "4NwJstQCa932eZt4oGwxvQV5edjxmxNDqSnbT6ozGmWMVYCAwrsD8frn14Cv9XyYMDgM9e9fbkCva6FAmaKnYTTQ",
  "key40": "3dd1JSMqXDw5aCFjFhn7VpBw4WnPYR78jtEWrpypYUi5Z6tEU1MqQZr3m6cfsvSBs6FaWZoJ76yuUiCe4J73QNwN",
  "key41": "4uXgpFsudQLLtg6Ky5mykHoFEicB7pAgy1ruPpScFfdREiqh69FqDGNoivFsZdisffjLNBH9WprH3Vyo9j7AxUpS",
  "key42": "HfPyTdW2aZvtunzVWZ7iQmDMpcBkJczch6LXVZjvSLQhgXMvsBCwWWW6SndBt7tCT4GiaFZguULdcvehmPmGe2M",
  "key43": "37TfFu13tRQEK6DRacqCjYoYLkhGUocUhZoC77DMPg7ExK8yvaCnVoomNqcKEvbiedHksApcdDkHLYDg5t7e4dBr",
  "key44": "3LrS5v2ceA1Uuk9XVNcGGh25grrtqSmtGQuAXvLiuwAimPScZkGKZBvWW1J9SYoDkz6x2cqHWhmQMzotVjdT3vgp"
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
