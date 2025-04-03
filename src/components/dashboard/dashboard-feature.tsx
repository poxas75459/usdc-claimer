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
    "5RA5rroKM8NHEB5m4bQUbwHerhwZc6TKgzy3VZWTYFBjFak3xoexEgxVr7E9fzepa4DpW8YbCTbLxXVspZuNkmR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "239kQUPjCg6xgpkrEPo19WvxaKVqzxfBcfSiETP74zZFbHFchMQEJC1nW3MxtLwqMF1iCshb1c2nJudutfFV1tq7",
  "key1": "3gSGYX6Zn93CCeVRzhkFAQx2nP4gKCm6PTvbwmkZhrcfMrz4Fuo9xLBkFQ38nQ5xxjybYwtbSZScJjtj4Cb2fqKv",
  "key2": "3YQqsTeSENFv4k4x7Mq2daxwhJXnGnasrgi6HU1BUGeRZmQC3GUjEeVSZcKLUmVyP4V37jaKyU2nHhTTfFKwdmq2",
  "key3": "Mx48UASyg3GCEMpcTQgHfuaJm6K224jdSMuJALFnS1NLv5AWHmibJxV5ZWTbdpvRJRweyXTomAujm8GFYDXTr4E",
  "key4": "36q1dW1HnJcyADyz4q7tDCHk5GHcDKR5yLamMvct4G3qEVFhcUQPC4FqnFmgVYaVXatrthYJ3Cbq6GNEDvhM7TyB",
  "key5": "3a64H3qVybBW9hLMwwnFYso8yPn4WYDC1drA8NXAn6WZPmo7CeCnN81m4QKdiS77pCWnnGDTwGt878VgrWGb4RuS",
  "key6": "3Nz7eJxdWeTo6HvyWCTyCpKr6McxTUuPewRLUk9ytZPScbJXz8B8uN8v6wbVQqgHgrhoU9kBymFnGvhZh4GgbvL6",
  "key7": "F8prHZYoDxhb22ChCyBKrWi9yWTu9DjudZmuzdYbZSaGqvSAEXQeG1d8raubJsMHSGua2RhGYwgQwzXgEkfJjeL",
  "key8": "3faQUttRY77gg21nGjt39JmbMmihW7sJUU84iMcAy7n9KAwjs3y2nDqQ5Am9B9JDY4hNeUFcWuRcbcg5fS5bQC3r",
  "key9": "4pwUnSi8Gkkqe6RwbkPRsamrniejcj9tm8BJj3iPBi1Xs5n6RrtuXxVrithmZ96wJgVwgDB1hQngscDvtfo5SuxV",
  "key10": "57iuqibMZHtT8ud4suxP5DnmDdyibm8v7kVzscjPYfZKc5J4c6dG6QWFdZV3GBzDC5f3ogbyEH96CdJpSrowmnE1",
  "key11": "5rsNTZXcp9Y2FGe76uwLWQg7KvxknyyB8ENF4mpnPV1djvtCDrDWrmrEE3uhc7m3tbU9M1Kyff7o5asKN9Eube2P",
  "key12": "4gk2AJozjayw6iqYcixotp9JDgeem3QDemuh9P6i2jHF5z7Sim2rmgaGRDeisaiATotGSx1k4iG3RoABCypsV9iP",
  "key13": "4GSNUwZwotoKGPFGzG2veeAwv9xQ1LtCYbBpXDcBDSxxqzKtfcn3cirHTpPLT7tAdBEcHdaQEa7zorYicSfKZqJ7",
  "key14": "4eB3Y41YfRuuNu54GaxdvYyqpH6Da23dC1PL5bqAXbkzADNebXoRZpDYdWT3LGkcq2R15fWacUnCPMx7EiYiRsqW",
  "key15": "5tFbzLDhzp9AQvbxQDp1Bc4ou7Ua8gp4A26xtmE4HZNVy43k8ezponVvf1kfDj24pinsDkHvTtJauEZpUsU5Ztpe",
  "key16": "4R64eUSK2c6qqjSFh1LBEc3Go7wA6raJic4xAMUgse7V7nz5186QUJgsgRU4wQ1ZhXA7YwWF7XKfcL32EBUQoRyj",
  "key17": "55ir6NVeABYywA6SWMS7M7n5kCY3j79RM6WNNpHwup3WenVbWGFr18fWsV6Gwiwt9Ty8nFksHnxmWwBM4kZKhFEo",
  "key18": "49dGDLGbCWfqP615tVqxroa7zgKkfMTUFo7crwyAvcNoEUuBGe9dmZEzSGd8VUyNxqs42cmqBh1gKTm71DC5fgvY",
  "key19": "2XUSn7tT1cJDWoRYkeCzMC1jmq7RVoUxqGAVKj1HXevqvtGbT4Z9m9eAM8nPcxf1Ed8NNY1sqjsGoEdQmtm4txxY",
  "key20": "4twTPZKGM7Dfg1z5ZRmFPzFFus7rmaHSqYHXVbLS9TtRhgqtQQxvFtvB2X817Bxt2FPx4pJqLJM4vrQMraxhiYDC",
  "key21": "23RbxucRPgb5zHVfmFunwuoddPaw5q2jDSEQAMFxdUnSpmerq54fWi8SsEJa2uNyhdg3XX79VnaLxFiMzSwZmveR",
  "key22": "648zEDQCwSFJcXjgmNTXSzgNj1SUq3sQVLxAMD97UTNrApTgGaXHDtuDc3fu13W8Pgap6WMqCCAsqjkbAZAmNd2V",
  "key23": "3dAzAdKZdGiqTtSEjCFHKURh19VkGqaioV7dy6aPMvxLg7W8qDXkQd8vvzU3qKaVeKsT7J4mrGBkRhGpAUmG9MaV",
  "key24": "4mKNUufTeLHa5pK8cPoYB6dRoSw1yF7gvr2VZXZc8FYDSYrTrGyR3Ttt7mEGVwLLVhzXpXjoZWAYAy5DSxoYCAM3",
  "key25": "5DrZBoEh9NcWfiTWxb9TB7MHDBk9StKJMpTGBmFHhHL5Nq3vQACsuZ3Zxzt4uHUeXzcvA5MYdzPCa2MSQsA2AG4g",
  "key26": "4xx1oeY8ZCArPqdUVDAEmRc4rXtxWfUKJPJ43ytU8Z7TdTngzkJkTFXuuV4uLxWnKTR6X3dqGQzYPyTZkdzTG1YF",
  "key27": "4HZURM8jzpwMGihJLutthCAazSkB5RbQwbDehEeaqCfVMggwfhdunKQyF7Pr5XvhJ8EZhBAk7TMhSJUci1uPGTHY",
  "key28": "4bPKczKiGQhaEaoifthQj56R5gw64Pvw4RJ6cTAjcMPUkXqkfuv7vgKfye7n4SnYHiGyfwmfLTW1GzVWrqKetmev",
  "key29": "3mk1aNpddxEQ1uRyeeHDAC9EE3FqL4HvJaijLZNC9b58NhqRBk8zi79EnpKy1bYVARH7UiduTXVFuQsvkSfyi6WY",
  "key30": "3ke9iwGGSGoRTLQ49YTwR33G3iy5hQCW5ggW1ivFPczs7rkYerci7Eo6GkSbBSBjJA6Hz93Ryr5Gtu4oNtxwMXHQ",
  "key31": "2hjSBwZ67RdMtmDZAnAE6veHiDQzEhctVA3rY54Z3EziWoZeMr7HjdwxtfJ3XZSMey4Aamrooy6t2K7asGDECW7t",
  "key32": "ZZcZ91RSmEAbybxdVnQ48kT9Uhm2Ki45wbzAQGchJzbyzrWtzycg6fDruEfL8qmc8ch6QGkWMjZDBKjvbtLJxiX",
  "key33": "22tVirN8yKatVJMTvuNpUTMhwFtUNNLmpRhu6xmAQnTcYLh41obEEb1SKDkBvbzAz7R5pKs5dCrZBvkPc6Cn8zjn",
  "key34": "2d4HhCAb6XzWw2WKVR1rxbkzLmuZoBxjiiispXxWLzFANExgfHqBbLf4k4ma1ZRvjYENJoAtaicsNSu6EMuzjv6R",
  "key35": "2xKrh8J2yvFbSFyEZ8BkN9rRTnbhAiFaP6K6spZ4cgauFHqsCy35h4L2F8gHFRumqJJCs3hujbEE6WJuqRWX9P8v",
  "key36": "KZBPzeHYs5A4TLQsRAaqhDnPXgXrCAES8qM1fsTKBjwCUpMMdnBkAqGkaThdK1PN9sq8ZZuWimLqzjf61vpWVDT",
  "key37": "geUauvVTMTSamCZ4sNzvDqbQNhcyMYP5LYwzG5yMq8J8xd4gUa9ngFYMYprzaUHGLNwEkxnbN1XV1FcPg55yo8V",
  "key38": "2kUPhWvhLKmPmpeXmckGDZRB6rGUcyQsJZRthuUWEUbAdvh18YJEzdgxpPaqhiQ9voc1srHcW69km512a7KTasSG",
  "key39": "3xKueXWfKtAURq8FVAMaBnrrv5TgAfc2vWtbZ8LQZXMZKKKCMNYA9ZqD8FWmBR1AnvAsb71MEoDiBLRzLb47XYjn"
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
