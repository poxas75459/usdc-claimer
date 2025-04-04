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
    "2jzSueUN1f7UcSFZkgpMgwEzxgeeyuD6vZx8xk58BatDVSapP1bUhob3vgbVdkzAWSvtVzfJSonUaGDUDHE2GsST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q31g8WEKo2iMDvwQs8pVuVu5v7zZAnLN2SNWg94FbxodE3rQFcaPtdyCuDT7hqmqFjY1zyWvcHdxTXkx2TpkRgg",
  "key1": "49mbG9MoDjYJUJyd6TwMAQi5asSBePvNHRXDvCL9QTRC3zRRDVBMXvM2JA9QTUQw3AcaXfrfCwUaKNKADgNnGyDs",
  "key2": "4u5YZAaPcqRfttxHQQE73fhzW2caqKczmSB69SELxcD1kmHMLx7ZcNr9wAhQ6Hg1UJLS4zHn8Xp84a1bhcAXm5Do",
  "key3": "3ETuQ4yv3f9keqWXBmKYBTBdDWkSLybrjYAzuf8GnaHM7eFpT6vSbKK8jGsSxhehuqFnhZy2iXZR9NEbhNDu83fr",
  "key4": "4EoufgHMaYTTh13xD8cbmSX3oRPxpRvPKFhCQKNsiPbMKYn7JXJqHA3TR4jwE7h6azfY2AFQ49hW19hZRDj7XRAg",
  "key5": "3eTbKbRGkor54jVifT4zmpWTWAky375MfQhYK32p387FxQBL9fm2KirLXbYnHv25Gd2BBM2D9gQN5GiodqUAZpdT",
  "key6": "2EoDuCLoJu7HB7Vjki5SSibRNon4TQ6kGaBugfTrd3NaMMksDq62o27h4Ro8T7ipsAE5rcTjLwURHYyShbjnjxZC",
  "key7": "5UCgyxREhY7Dx4pNWat4dzCy7V6zRmFchUwDxN8k5AEu3fabZZfbyphZnFZ2DnFvxZSk3TwaEz1XUJmzGDVtydJ3",
  "key8": "419xzaUdRu7PFKdHP8yy5Gtzcoh1ScYXNUVxp6SVQXRzvErtte5dQ4cdvokLWjAad7fBfoLEkZ7tU4aZo76TXMHf",
  "key9": "3UPHpgsWUyFYDLRA26mKXspuTZZhgGLXr2ktXnjBSptjmQ3b8vvqzd4B9AYZPWmt3SLy2k8grD6TcdS9uLLY16uw",
  "key10": "4iAsxp5pTy88MAvtN56mb2fYL5BvfDDJ513NqwYabW4JRcg7668KNSMeUJCNSQKHFqCxFFG7QB2VY1Y7Zu8FKiiY",
  "key11": "23HccrrzWhKmudENKo8vrPRxyCTbyrf1QRALHL19nqYtGkgmhtRbNAB49W6yck7SpzeRZUGYQyXF45DpY7x4LbhZ",
  "key12": "5K6gtiVqVWdT72GqczkdwpxJ2A5ADoRCgQpPpEYDRXPcVXj6zYj8c7hziFLDnkubNnzGNKJ8FyVjJ3bU9duYUJgZ",
  "key13": "5Cv77Htf7R9w4NyhwyqxvZnc43zB6XME3y5r3ZjYnMLSVwZRbfjLP2h9g3wsukC7qz7oaiSAkZtaQynUv7Zbn4ET",
  "key14": "3A9cg6NBBnYhjTxbo4vvecLLkHfgmfrABPZP53qkAej1ZdHAc1iuji1fFjGaXDPe2BUrBRJLy2yyZz9mWoEjaMM7",
  "key15": "4NimpxGUGJNB7xuJ7GeHVzQkt3ZH5zVNYUtnXytZekzmG4JGmAEQBuAkTYjhkhMeKGYpsHx3RyQzekj3u5NCMNKd",
  "key16": "3T271MNGRbMpRgkK2Kedot4iUYwir4FiyNv7TybAxupsaULYPfBQPPrvzY8V4YA1NU9gZKV7J2RoCQu2fX98vMVu",
  "key17": "JwvMmFcWM1Gox7aaQkie972WvqaWy4BpBjvmxvR1Uk5j1E21hrpLddqfJNowJRUBSzCF3R9utDg4BKqy6BN6yCD",
  "key18": "4sYoat2fJkUwCf2MQ4Km8kwX7mZhEGapfXvmGWT7GnoMrUUV7DmRsKS9nMqxSHtkTciKAM1eNVTqSp3xwKy5m4jr",
  "key19": "58yaxAzzzr43LzSRDdJEHAmVYWFKqT3ixViaHK3zNqYxWXe4KtwosanqdU6kSvDdQpURM4XDEmCbTevjBFD3cxYs",
  "key20": "41jsTMUPNVbRo3YYpMYsVDLasxGEf7KvszE1oQi92gjt5fudneRhs6McdgJQAwZ6STdnMdDrCWYwgxL2UKDcbkGP",
  "key21": "YrN7tczTqNWe5cvj1Fn7ZH1AVptk98LrgU7n7zgS7G9QEF5rrKx1NDrco5KB2uZ7TDpSF8PztHVVsj4HCdZiGDm",
  "key22": "3tuNqQhTx69w8hFpuG8LuhBo3BZPTEQd5LFbLXo67S5ytYfgyJXKNtwxx5VspE5CwXzHAoPwX6KPMMDgspArWQfJ",
  "key23": "HjBgZx4dP6tnkBF3eFG57tXMsDxdRyHiJxTfsPea62zP8CJABBZ6YLCZucmusWqkD3Zu8eLFhdoTLYGKvwZmT2V",
  "key24": "2cCCjYuafNqHwMDfzPBtHHvscu2aEpfjNcBUgmfRxnRVMzzuzhdcbiRHMRDAa3NqUEJs7WCQG9yjMYYLHFwJHW6",
  "key25": "2j6i8tfYs42RZQUuvGyxC2VQVGB4YBfkAW6mhQwKsNnBJPBwYZLZ9UoApXEKwTaPwWPqwbc9897PdJFt6h4Nn3SN",
  "key26": "2PMPHL6YbLVmQfu3quU44dcXV9saMKTHYTBA2Y8ji2kZFiqa3r1qX3pfCBjsQXgew9kGJjhsG3w7fzzMqEyjv7j1",
  "key27": "4GbxErjkQymZKAQv8sSfQE8eAM3i8kFPmEAoKJib9nTrMaGs5DMfBL8fuzuZYZ5AZZEo54X9vQP6hCti7U8aiawR",
  "key28": "55ZfkD4dwKWXnifiAWLMYMTjJkpYSvVi8XWRDZ1Kz3TXDdFX4LBmcd3erz31zbS37mHW35VY5FBnjKSM91As1kmk",
  "key29": "2DYNGmxEmuMinqxh8Pv7qW52uafZfPi1vkXdjnQLuQoj2UdSYdAHLqP17fkiWiP89AtuLmeAhoxBvYBAUf4YVkfm",
  "key30": "LjJcLr1xCNc78hZAyBcMssvu58pamX2GDxVHCejB9u3MCrjaHqoK3imENnJCb3BJopJApeXSk6NWiLWKvEYqm1G",
  "key31": "agk2R3KbsnCtTyZFwRKyCo5JgiSkepwQf34edazvvW3wMuxaXyTSxag4iFk6yWWXppbKXvkCwaUKcPM7XZX8ra9",
  "key32": "3VBBLBMxcAKLzXDcsSN9YrcVcj3opYbaUkdKGrDvvNoMe4oQi2tzLwr7tMR2USyRaqMVdEos9fVkLy71YvV4Ai82",
  "key33": "3FNsXp6DNzNowB3osmiSWdQFJHh19EinjGQnbXn1Kad5J9umXSPMB5zyzo29vWyUFVs7gox2ENzh5Spe7wcwUNid",
  "key34": "3knaq867ZTc9JxndTLM9pX3x7Utvs7uZYArDhFbNPggYXHACoo4PvQCqruc9yRuAuL7pWqyrZqUgxxKRnRxdnxjh",
  "key35": "652MEGMfT91N33gH3wttjEcJPzeG8HuMpbHMjgAJ9CKpAEzGBNhEwLCXtbt4vXHQUve72MXTTFWMQZ3JDasDj3Qk",
  "key36": "3ncezU3VWDiuVxkQM8tAd9keZZXXdvVZosm2Kczh2R8FMX6vtyhhEyMoPhKJhRREfyD6NfBBeTFi6wV6hpFP644o",
  "key37": "vPt3BrUpJF6x6DHVmYz4JyutNhQxVakNQucEhqwD29mKqW5dBEmsiVp3JgKvyiocE8TQB1Q3QBj7WLE1pt7feBC",
  "key38": "5biHjCboYz2rxpbBZUw6E3fHhjGAXgXE5fnNagLYL7nRSbicoQuj4FK1zrYVfjFTF4DJqwD1ZUMQ5HtY5k4jV99B",
  "key39": "3MGEaAEX4bFPZ8oxEHYZRCHcjBZjJ43k4sp24HGpDCAZ6LsdNge6beHbJU92NKk28qxexEfQu3QaZSrTzgQnnkEk",
  "key40": "2DyumHjuaJGS5oq9ASboSd3J8JDmiMzXxVLvYuZx58pD9UuBPT1joVoC1ueBqxAx9mFzpg6ALqbYYmy6TuDe1cp8",
  "key41": "343EqYgvMjg9CgQMz5GhzDoVozAcUBkQ64eWMmaqcT8eckbDTZMe1sfCmPwht2LZTHzfH75MQx4sDfBUBzmNL4VT",
  "key42": "3zxi2ctKFpFXU4cSjGsrE9bPD6rFgJotyfqEHdYcDoNBkt7ZF2DUX4ZPvFq8ngA6qXDGDe4wQAwSbVWg7D3rGpaP",
  "key43": "2ZW97oS1CMDt1dJyLRhULtKuF5V72RdHtjVzKc52YP9dfgfXfoy5bAM7Kngrt2s7fxfLAZaQSP2xXU7fqsUwbKfk",
  "key44": "35Yi3urcBphcaKwAcgQtJ1h98fjavG78k4o7GFvcr24Ltt4DpQjQHEnRvH1aNR9PAN5eacCHBJecDD1mzAKqLfeR",
  "key45": "32i6swKUs8gEpov9z5EW5AkAhG7wa6BQAo72xxzJFjVj6YVy2QWe4sBM31MbCtf7ZpmKZ3E9XkwFZgxMgATZR5ZC",
  "key46": "5Nc7LTRhNN25LErV4zUWp1noGDbvEaKWWDwHRnAGcWVckBqTpjb6wZH76QSfeJvDDv6kjETwhtGZe8CKL3w1cMwn",
  "key47": "5eSLhVi4nFLwmrnDMauJwTn4kL5GXurpaBnK5twrRFug7nvrSxBQN7yQi7K8vAw5iUnBeToG7VyRHeCxDjxiDGUJ",
  "key48": "2YSjVjtpRaMuCdn4Dx1zTy1Ha4oi7PUmYjJh8opKccBeWt9FeawQ3M3RYC9vSK4N4hZuop9QuKEr1pkdeaLphnFS"
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
