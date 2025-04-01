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
    "4mP1drcQVmiHS9VaEdJQX54iRddtck9GRszic5Yk14pxvFy3jAGtJoZzz2LBGuEbnXTDu5gSRXfmK8QTzaekyet1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UmqRg7Xgi5rJMfmNJn544Rf5zkKB2eyfQEj8ChxFwJUdKNGkbj2Xow4GCjnn2bst6tEkZRpE8X8WiVEyprGabNb",
  "key1": "2N129GDrSuUBoiRRKXKhMj9Cc3AMTTZgFn75tqUaE9TcYydzjKTWhydYQrg3CUiMGHqY3kAPuYdJCuBd9nrbmuuZ",
  "key2": "2WBSwceHrWddpJEqy1rigGaUeSwPo2bnqyDWkki9d6g93BMycoQAQkYcQmkakqZfmwYcZZWAWqmfoQodLj5PYXJE",
  "key3": "WGHfHh8WqGDVHwuHLWLebN1MVrihm6Gy6DTcwyn3knn6YykbbAKuSGKmU3e2fnGUqWvCzAJmKs1m7fziNCRTr5D",
  "key4": "5FFMsqrZm8bbWwF4q9X1RYWT9Jo21pEPzXTszEXfkeWWA7zYxyG5eStXVRoUVeLYMMi4VJaJi1kGPqkLG3nADw1X",
  "key5": "4bsCsdqTJVJjQH4NsGt4WSg51XyWxx5X3zJvfNHnCYmGT7KmoMwMdP3PGHPW6GJuVo5UuxTi3aJdgZ397nzxakAS",
  "key6": "2TkbYmWmSkvk6qoPWWqQXUKqsEK2s5SiDe93gJHtt77Q3Vp1MBZZYiPDLMwq1RB37g3Yf36pLhceDeSDKvQhcqpk",
  "key7": "b5duhmEaGMGX4tsvB4Qzf2A8gWeSMjiMk6wHPL8nK63pjpu9Mndtc1EMP9YfjnJZc2Bsurs6TZBQvAj4VeeTSg8",
  "key8": "35gDpF7DtP4LKH3BZTV2AYeGknGcfV3zbphqNFoRuWrh9kRpebTqLxiH6PxVw69UXYhKVgMw9fDUYhevyk7SgE9U",
  "key9": "2WwhWrySGdWnDAYMpbPUdXVw37WKs3CvAuQjbB6t5bt5kukVyXi9bxKojETPaPMuHiZR6MNUun1QdbbBG5zg7y7F",
  "key10": "4Vqc2pN5WqPrKKNTzzSbmoArPGsDjbyc9fcTdY4cScRtjpLufVyCxbL3hiM4Zu37kMmqGHuaCcEbPS1aFKQfLLtY",
  "key11": "4mggvMh6NdLeFX5pcgf93BjHZPn4GusfiNtmoYNTcyvqXtsteKf1LNbjEuJ4VaJPQYETWvqdDqBqKsuqqHVrsWQN",
  "key12": "5UE34tv5D9obajadgFY51VZSi3z8VvEr5BQ6JiVKWSnFaJ6mAmquLy51FxckvMjp4UnML7twGeDYqHqQLqahSzFv",
  "key13": "5W2aEdaKZ81WnExV8VJo4Fc1Zkq9o6uVnsWhM2K7vcCCoYdqpyjcGqcoavPyQfcyaTfdUKQMfjtYVDgCfDGCHjZs",
  "key14": "4TjPTygkKLeKYtLrsf1bCQdUaDjTArYv4XQnTQQn61TvkVTCAGQew4vkF5KaWWTVWX7RNFaaqPAn932K7gtDE8zx",
  "key15": "2rUSXNAYtNxqjxKUxjr63S48dideXGFkT25jwj18Xr3joK9YythMD7ieJtkVK3bA9JcUQEsWhJoQm8SfFQAzAJ61",
  "key16": "5qfhJihCavEbQZK1SnSvy4nv2s7dttafat2SNZPhJYjLP68jaHaepdRCfcHkeRvJto7B2gF3PwPP3jNEUMh4TWYW",
  "key17": "2zJZZzm3tmRC8UpmsMuCxeHi52FDoMMrYR3fJF9uZVFt1r7FryQrAr3qLtGndYXUYpStizvGnHcmTc9LXY5o8seS",
  "key18": "2vY6X3PkLiozBBpJ3wAiKdSoYtzJfiFqgYV7znp7AUjVWZQcYhFyFWf7u8g2sHHs2aX1ShL141nMLyCCZW8nSJvj",
  "key19": "5ty6jRFD5L3HHorgLEEVTVHKYuLXsQod5ga8JQFC5G6U6fD6rpaPUQ9UPjNww8Vcrj1skwuDvANyH5Te7gfS3pzM",
  "key20": "4hKmeHZeRziM1TX55F1TGRQmA8ZiDgHbPG5oeuKyi2bUVwGZrHhTfBt4Sjkx2WHKt8wYAbfgtJuyXNePXpkgt8qx",
  "key21": "4kt5hZz1XQHVreToRwhrbFnSyoXpgMU3pL4BDfHY4P9nuPk4NVCBwNccqsrsup9t3ppvMUxSUknvagN8fS6ewjuY",
  "key22": "4WBJ7WAH7wi4HVHiYdV9Khs4BZEBL4jhGD7YkDMCAN9uiwNUUY9Hnh9stbsa1GGoTPy26fokyCHiLsC689vCX3QU",
  "key23": "2fb4idDRSP9UjYdVFN8dKSDb37zXTjbjNZpWvpbtmxo4btDUNg5Ma7Q3wVjcCSUJVRefdi3CsLePyA7ThPtJoRnX",
  "key24": "SzrWFMpd5MQyj2jMZ34Lm9ntRMdg3o4dZFPLdaRNUYKQsf3uGVFDK18PFMdnjc6srz8vCyNHc2DA1rTn2tNyNKJ",
  "key25": "25XBfqRTYybzBogmaDMcM7WTX82XgLqXph45s5YCPj1YCK99yhML7d56u2UL1mwSTp5hwjV4Jw6rRcVDWGAn6CRT",
  "key26": "5SdNczJ1s3MfMLC48jSXjZ7QioE6uWRNgFcQknXLhAU8JYTKSJs2RQdYRHsisJQB5PFyoXJwRjLL3vgmuWSNhVqQ",
  "key27": "2LRdcddHRNn8D8e9FLR7rwqTRVDXj4ukMXshAj2mPWqP34ipi2UYiaybGpU7bBRczpmpDFE3t7ddfjkXUmNK5gNz",
  "key28": "2CCHcDV2EsUraAEx5719U8qbm1xUgMp97BnsLZvh5kwNvidcSwnM5Qo1USdnS2wAfA84pUnkyFHTeYJBD8T1KpRL",
  "key29": "5yan68v9jdkv1Fjb1LBvC7Bf6wZiE7DUMros2smMQTM4KMA5qpU8nknfzNtWvEa5B4eZD7B8q9kKz1CajhVAh8ax",
  "key30": "5mBvQniqTMq9NsvCdcic8ELi4UHQZRDRWYNq59eApWdPNW9yw5cVVZ8xv7SFyWB27FhKbBom6XJar7KygDZtf2Nd",
  "key31": "CTGtphKRyeKYWTk3QkPCAbZ4dBoZRwPMTabmxPiyH8CiBUUQg3AybSkyvporTNVFe8hCjXVMaR5Z4Jy4mTRtV2s",
  "key32": "3Y51DisqkfnPst3dPU39h4VN9ebRCjxeKnLmKYdfZuzciD4NYN4z9VhgSGVPZCLvqUrHAj8i2CVJ5cm4c2NzW1Lk",
  "key33": "5KdPpQcTvxpiFCuGrw5gvSoafBJ49jM6coRFd8asfYicxkz4RLokn1hAPTC8CPhLkL2HKzH1yexZfNCYG6z5yNou",
  "key34": "2KGkeNf7AkMqAbqHu6NzL9o1JaRyBG5cDcuCVTgp8gJMeAfe8TqzX7YSmRCsvBJ8YusvPEejFXd41GbcSEEE5faS",
  "key35": "47jF6biHJHGnDToj7ZQgu2wad4UN6TKMKdUxMB7KKcko8hr6RGFuujbbQHnkeUjmC8cr9fEHHiAk8YJu7Dec8PLL",
  "key36": "aTEo8usEhonBQbn8B8szEQmAMX2ZhjRqW9YSXehQeEekas8Ppn69Lx7v2oAk1Aa5kJFgdFBHfuiFc3juq8pa8pf",
  "key37": "2uKvoptEPY7pbMuGGpMiMXwmvw1Gp6fBVaijozrEaqF81HY9xfhVjG5MUdLaoTJ7wC7hf5aw7Du4CUBcHm32pMLQ",
  "key38": "3pibMgGnvS3dKqcm2W8PXn6DGf3sr1xWs83St4ey215w8S1xdrkcazqHT3be5ytq1iphgBGAjvzyZ1RT47iEp3ev",
  "key39": "2W6xkfWVJr3FS7z6u7AvAqPiYHq1AMQzMfEzhXCjR4acb5SR79yhMLhogze3nK3co8vKVxKBdKJBCVpPKBP7yr62",
  "key40": "3B1npVnoTQry5m38teUihfrMYAVvkuEVaTgib7WbEpLNkbPnAKMksgR1BbTEKzBRFaqcgEbADdJS23QGXYy65zhi",
  "key41": "5Vg4taJ6TyikWCNje8NwMgkhgSY5cUcBs3Z5HhCUZrFVTFvNA7KJW1trTnJPDhqi8pDGzY5EvobEdwUgUxfu7NnD",
  "key42": "XWzNrjrDAFheLA7tZLaVb3UCJy6LqQHBkxLcqogdBGNK1iqZRaQuuMT6KU87wvGynJCPNyeQw97znji5AGEkPWT",
  "key43": "3rkuCHYZmZYT15nZjgubuEgshCh4riFhdLQ6iMEmNUsk3eKH1rjVu9rfUBFSV2Fjfpj12GLKvTQZ3wThSppLekGp"
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
