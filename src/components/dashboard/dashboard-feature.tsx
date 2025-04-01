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
    "4rCawKBYJbckeRdmh4iTcsTEHBq6BfwE9Zd1zV3ar6qc4Yss7jZfequgxiHsSaB4NJa52eUUwJShyKorZqZq651a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q4ZJuM8BXCKyWjG7Xo3wZuKxjoYiEHYCtLWDsBJZt4bar85q1gjSxyaRzFE4Zk311SXmiCWgx4yNGhRQk2EqkQy",
  "key1": "4fuyH3kSYoZ4fheUEASJRXPsHwmcohtp2iyk5UnvsmnC6toH2QjPLMUCfzDKbcLBtkrAUvR4fLJh2zwJNjAh5oy6",
  "key2": "5RAMkdbHAtHvETd3EZy4c2rY8Gfo7mWfu3BFhP9fhgHTwdmG7CaAnVvdcRwoQeGzdEBkXvkxueqHtS2eEzPU1Gxt",
  "key3": "nio948a5WH5y8a4hgFtKS9KyhFni82H8JCU7YG7mnpUvMaxBuYWxAqsmTFNiAmzVVzgwr6yiJYv2RzHjSzCq2NH",
  "key4": "4aAUpcS8fQo8zzwVZzpufzMFwNjSMrRYH8kshMHBzQagXdiBs2KFf4DrVafe4CX6LbqwSGtohDcYmtZp8sBDuaGF",
  "key5": "23ufM13CxLqvTJZ7JM73AjxqoeEftbhJC7sGMEJiZEg7Ggh4kERLxqxy6x853DaKrhgSUdTMSswN9XfM3cm5dq1G",
  "key6": "2wjEJPAjmExyUG9b5veHjh9defXdi2HtYMvNrLpLa91a36rcvkEW8VU5jTLRsJXCjjBbpEfXkmMNJG6CxVX5kXhJ",
  "key7": "2e9XYRanyAGjtAyeBnyH7tVvbyEGFgMopUXUTQnYaomPXwRVhdNjEzMTrdxmoPaczJweUHrcV7A25MVVbE72iqFd",
  "key8": "22NwRzQucYpxZpSVzPXs4M36v4v69S3mnqiju8enKYygrFNSo9iDrvP86V4EpPaS2vbnsUhbJuAHHsSNkroNCmYq",
  "key9": "61q3af4MjEGKpxadDafFg8uk62tFMbAmEwBrxByvLk2gkr2rfwkt48Jc3hAsKNJQqbh7y6HjtJuTZqp32tZ9tjNE",
  "key10": "2JRWqoxFuMcdywZtLxnatfK2zAhLVw5bU56h82ciNDWPc1C4KviuBvbR9iEnatUTBsFh4XSW7nMRCx4G4Gb713ja",
  "key11": "3b64Dt36Uz6o47H6q93z7ECgbnRNGDkXr3tm7hdo3MrSCzw8osvR6C1p3ytANP44EhE2UF9RxQi7NMtKDA6TC9iM",
  "key12": "2ZgxwLCvzCsz7YNiuM3eWLtHN1CxdCDovNCHnbXfw7ka1oEtHw9fD9WZz1nxQ5UuERk5Vv7h9JKFbicTPy19SRq3",
  "key13": "3vxUemK9zvGb7DteZQtyVwhzuUsgpmGrscR4bXJWFiypYyfp4ANxdQygCnkEDfUtre8GxGCuq6foraHHzeQc2Ufi",
  "key14": "2GdGx4WXkpTmm9iDuaNp6hCpibDb5aDpshdhmr1Z6B2fo9UcZgzUZj5tiBCFx3U5W9U9FJUBys38G5bP7pDnfXny",
  "key15": "33EPTziAwaVhsEjQXQayCSTjNcqNqPRWNLEvsH6XazT7UXDa52UgHEKSeMnEkpZGdZUFCEvRoUTtL1T4CK2evKNr",
  "key16": "5nF6zjiyrZJLVsVjapmravsryMreLkebUJ6Q4RM7MX1VBqWqfMEEGJJ2Argqp31BwsVggdH9B49BZYKd9jEMKP9f",
  "key17": "2icHynUVsiQ89nsoqqheKVtrY43Bac9RJkYs9cieKf1ziiqe6kMEaVRcBgaMbqX8EhYNrGZBcCXSkxGWbiukYrDN",
  "key18": "4a9Ry5sSsth48RqVGaxLSwxNTcCncemAaqD5MXQwdKXomWvM7G27D7GCf1ZAx9Y3rH8fsUgA45aqRJfnWXKWw6jp",
  "key19": "3rfVkRyzHbEshb2NEWzLdSdkUrpF11fxvmHVfWcyuxwo3EiZEtT8ezxKWQqYtLGB9e9T1NUZyX3kEbK7sVN4jqDS",
  "key20": "4NnCi31fhmPehVd1BjPZBUPMN6QY8hHtuM7hsds7h85VUrLVfEgngpjJ5vqhaiYLoiMXXe2UTpesLAYuA3VHVr7S",
  "key21": "VeG3Y458jJZBuEYFAKWfwbdPKP2MkwPHm4faA8Jh5qkUBcAzCdmWoz1sNE4nt5x1gaakEue73Qy6A4kSSS8pJaW",
  "key22": "2g78JxqEJhwCbBx1QHycn8gcGdGbjad41KAA181fHc3usyMJxrWirFb9DQHFXPoh5HQW9b6xaZoKJFM3SDcUQYAN",
  "key23": "sfaKgofdxNNXv1fEd1HkFgY13amqL7JxZt5kSkyQun11NyoU5ERi5YZtxPr2M3wF84XbogT1kJUSMQHiateWRBS",
  "key24": "haEkp5L5hQspHskXCEv3LFJJ732u2qu8ChX8iwKq1f6BXU8peNou5WZV1UfLBkRcHLJPYWkmT9xKgT5qUqXBMgX",
  "key25": "37t7hM3h42QMgtJ2oZcsWZUSJeqQUXFTBumVgnNtNiVocvgGDvV5CFJinFX5A6HCJsYd2pUoZ1M9mrfZs92sRsYR",
  "key26": "25RzYeySUVq6ZrCwi7RtHnqbZLuXSgPWXZD2bzbSMmHY1yL3MTUXjSUjsSTtz7gBanF4MrbTJvCfFoYbtFinbRXW",
  "key27": "4b4rpBZBxxrsEdVduqLJDa1NoC2Lx3dn7zbQdoLGin9VZXweLCdGrGS7waSUKphzqkSZq21oTxbyEgAA62p3AMd2",
  "key28": "55MLS1zxLKcUqP1e2APcvzWrDwvZgj4JjYLPMHf5DSr2drVwfLTgmFCcfUub34XKKzYDMoXMqCZEECQsYExzbX8g",
  "key29": "2yTKG5iuyGcgUDEc3LahTFdte4MBAWmrJ3SZV58S9FsW7yvNxxw887idjBavJyLrxAWqKBthUw7WUrQf9tSnhJUx",
  "key30": "5npwYSNnhk4rQL9svEYYf7cgcuX2vE1jusudUge8ji6pcCHPSKZKN5yCzyPZtHUnJCJkq2SNpQsLub7W4JQ3rLhi",
  "key31": "4LcehYTDz16cB4qqF1hHetfVYYeWuwFTU7mUktGhw3Zf4xMUp54oeUSGs3xdD23z88kQPmiQ9AtYTyoohNJfxT1r",
  "key32": "3sCG2U5QxLEDdRCh5Fqzwgw4nmNdcoZ4MANj3L9Ha5X4Brz8r8MQytgnRDbF8WQo5JtuVwVf76RWME5cqyXW1khd",
  "key33": "RD2fPXimiEWUoXYg7eckNx8KFRXW4G3Ej8S22VKV96YdMBaWakx8TL5uQt9q925oaNbjgWoWNwMGnmMSJUuyq5G",
  "key34": "2skkApKR2JbU3m1RLaHG6pHFJCa6vxPfkVqcx844Nx4VkqNDyp6gu5UHyHRkVoHVboGG1E9qHoQcqYXGn58ZQicv",
  "key35": "33PPdc7gkKJXEy7T7jGTfRsH7iDVUYUFXwpe19xA7biYvAS5nNLzzJNRDYXNfeGTc2DGccAiL9yXo7E4eH4aRHAz",
  "key36": "5v3yX3B6ENP7zgpb9gfptSkKcaez9hCzCiJJny2AyAHa84xB2XpwT4NWkkDuiFuYA7KXV2tnFYyseqAt2ZqJB9Yx",
  "key37": "28bdmg2fPY48Q9VzA6WWMLKrd1SVDmLnDYvokVKpuV5poA5pLADHZ1uWw765i9pUs2YrhzNc5s1Ugydnm3fxBT1L",
  "key38": "Jd7iYp35KcXQWoTeGE2b4ur42ND9FQpbtUJjvmfC3XSkszWrMnpXsKidjDoTuMMqzhnwzyQkVBBGL3nhk6Hoi3M",
  "key39": "sf6svLjWvAM2VZxjuCYo6L3U2o85aWKtjSK8NH1LLaWdQeK6mZdhiUKfEty241q5UZP1v9wWRj7huDyb2u9gwSY",
  "key40": "yFvPbh6woHtnSqUjPwvvtBcbDAaAjqeWETwFjDKPGHpBDMAXJW3cpgtMT4Rp17T8vP7gK47S3wsicDvSpHCgxEP",
  "key41": "4NScKDEcramR9cJB4RA8KSARpjdEeExBY9UvWuH4zwXnZDEyx5xJEW5u4N979Wv9h7Jx21MLps14hv3AHmkWC1CQ",
  "key42": "XG1rkkMZxMUQh4cmzin9Mbp3Jf7GvH2AV8MmqAJQCiVda6QBtoHsCR9kR1YJjw6mSHQ8SX8BAqefsfRVorThGXd"
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
