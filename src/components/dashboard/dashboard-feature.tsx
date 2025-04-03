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
    "3cbkCGanz9db8vK8g8BTcniP2Prek4GJrqjw87ikwiwjN771LwgxLRXqTFPhc6eEyFJ8i5VCAC2v2R7wGjzu3FNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PfEBC896sUj6EwAQDYCjWzvFi9PN5SzHi28S7NP25ota6RaQVMWKtv3wngD46A2m1LdGgkCmiU6HbmKBrDGLrW9",
  "key1": "4gufyHwnBteP1ayi1SgQhVxDhq46GMknJhEobxXPvVnHR6ZuzGRcgFwMuPpgApHLo9m1KocVrTFbkTpyc6MFCSbk",
  "key2": "35TQvQ2mVafyW3tp7XUDTDD11Qe5Fr5i3ZTx5fz9LkH5Sn4EqXKsSHnp5vwyEhZPwAUJUpFxW7ssMtqm3ZcHjX4m",
  "key3": "oq3cnhzmoC6QHWoJJYHm1EE8zb56inSvibU5zhQ4Yetzp1zNcQGYrmj7pFZrRs5YzhX3z2uidJQp7AKmauFb6PX",
  "key4": "45hXm3QPEJReVNCD2B5HWE1DErM1eaGV77tAhCC9JAbannpxPBvY3wjbbUK6NTzjz6zvrP6PNh7QBuqxLaZ5QhQA",
  "key5": "2B7Ju6Gd9u7dMLxHiGSwaZvGZfgC9q3GpntGNEiREy1hg5HHuMzyhAPbfoS98ZtH7PnTfJX1U9CsPZQctiVe5HiJ",
  "key6": "4XWY3vpCKzFpvBh2P9xY7WocfGaX6QGZmSzmTQN7YDEaBhdNYC7MPveRY2m2imNHHrNTwkTwFuTMUwUEEwQ36BQm",
  "key7": "gjQmadJX6K21T9seAnCQvqiy9ZXkddKgnXu3VgfHwnMPiJLJUMo3Da66kfhDt7QiarqPtT4p1vmSvkDkNBms8ht",
  "key8": "2WBjJEGfYCApyR1ke22Rr8cZFAJeCDUgsnaXaEEtuNJkfAjK5C2RdNNE5gJMN7FRV5Sd6wwu2E11Sv5jAFvzdFCe",
  "key9": "2mkf4hkVNQgNLzQ3zijJu7WRXfkv6UL1avKd477Vm4v2gaV2GvwnS7ybzDUFZpny6viB42D6TJjfwV7PLK3nTE5f",
  "key10": "2zYFgRwq2Y1BCP97N24MPLeLEp1sHSp8MGb2GjHEBJMie2URuUnXy8kW6wu2XJRC3f3BjFjCWU7CrJYQWVxg9cYr",
  "key11": "3RVojLdUE378FSc3bkPKqmVsQBMihwaGMhyp5NKMKqid9y3H3cYfFcKyzpHJuBFUypfdcbQkjtshEzhPmVqFkgH7",
  "key12": "2JE1bMTqghkbwyLMfP5YwKy7tWPTcwS1XmZdcJH4az7ZhykMC55fdv8doijxxKr6miWLR4okQjeX7cv4fRihYNbH",
  "key13": "7CmQ5YPGvM8u1FPrdNwTLVNBJ2APS2jpdP8CJMqhNYkWLYojZQUCUPkmkHMnR2PZN1LN7cthQBWZPC7ujDgcchS",
  "key14": "5DDRrFuhavjNrrK3Suh5mUmJ2YKEor3d1WRFfBxFVTcVQGC5dQxqPJZMrgKMC15TeL1PUxUrKGfmW54y8BnAdeQk",
  "key15": "4TwpzAUHyHEJTp87UCRxnmE1VPKwjqU1U2VCMaY9e33VHAC3cWNLJMpaLJbBXp1yiT1uMBWmiHUzZ3qAVt5bxGeW",
  "key16": "3qs6NxWQXfFL2gFYqGmyUTjFLMkUzgLf7opZzuLsmfKRs3gobA8WFt2DNdpwsKHoadytpfgHjv6PqdGXausn4w2F",
  "key17": "4vbWW5W6Mq2YNZnWtxwQsp3GXxW4m4Y1vfGnPvYDm8fzFmcK5S9CqUHNoPayTnbyyFdbQsXFM4L88x6EA6qwHUMo",
  "key18": "5XAJik4mwsNXZwuCHhm4mxKrjczZhX1Xht6U6ggdXpVzzFjCZJyJQKEXUou5awrKsSdkZeYGDS6JjRDBULoq91K7",
  "key19": "vkrywJGFzHNX6Sv11RAqNSbvePtVAvbciTLiih9ABdu93RtqbS7ijwVQPSDuxCpLXjNvuYU91ufbkyZJCaCo6ia",
  "key20": "458YsZcFrhdBbghUTu6zmPrpneAft8avS2F2t8wseVJx5QDKMQUxSaFSzJuimWxhL8aWVDZ1NwyHAC98sUkf6T7x",
  "key21": "5YM9pKGQGiV2CDoeWkoNW4gYo8wRLtPUKvvE5LjWw74Wt5AF8qyL2gjBKnSfbgLxnGD2qgRnSHFv1CjPMesBj5m2",
  "key22": "5H9KZo91WrWncfr5td42wB8TgmT7twDQgt6vnUMYu3SAC4iNrgM9UuKLkJkVSf3hd1SWdF9Ad2ENPe1sAsWQu4N6",
  "key23": "xTPo1avgQpB3vmkZqnk5TY4QESxE8AJkbcSNNA9kyNZAG3gprW7SZiJvkXDHmAvH9tFmH7CodBcpixuNSLq7uyo",
  "key24": "2a4MtLDmdk1XqFvFGjMw9WRJ8dZJgjKe1H4eEfJH8wkVsGt1GCzWXm1mGh6tngpnJ5ktdQ9THLLiGALKu85kYdDL",
  "key25": "56uhzJ2o3umDX8PqE2det4NaP8H4CmJPVBmMoJD7txwVcw7rcBEQcuXuEN5AbMDrZbMCUomtjVftxd2dJ5ZPiMBS",
  "key26": "4mK2f6j64mSR93HidtMQ176HukgXMyr5wYQWssqbhcDQjZB1Y8SuWqxii3GeCoZWrqLixXX3sbDogqXvtnf65PNv",
  "key27": "4mGqKsSu16e4vjJwgTZLEsaRwBRRCLd7P1Dr6CcChA4LnE4SzArKasQggv3Zhy3kDfF2yM5q8a2S3F3kkbzccj91",
  "key28": "3MJCmHykDuG6bYjhweqP9j9C7WGA1bYvoQ8tH3s8ey6QYPSSTqgs9CGz2tNkWoV6bZDiTqXLi8X3mk8ZDSPEceT4",
  "key29": "4DGSSxpkkd5AzaMPmBafEESTkhLZ1JUDPmjX8AGjiYyng8BqNXunVSKZR4a9omXwagXs5obQQq5arG114RNKaDD7",
  "key30": "4M4D1kLFxwqaBC15pB6MVoR1kEG4HDrtDEMtfHqaCNkNWYj8gyrNLvP7TwVgvxTMTmxi61hcjR8cUoWTkJrgMTXw",
  "key31": "2NjCVfp8ePRnQEWXfpFAJHZctTtP5K8BKMBn4GwXWKo3rwvcN5j1QeUF19vQtsXYrsp3B9iViBaJjH2cMgte1LTm",
  "key32": "4t4cwq8ZZiN8nuom8YgaiuokJfQFpCnqufWcX6YTrG1tieguyTm6xmAR8PkKomuwHvRCuofoF3sZFRuhH8hVTwgJ",
  "key33": "2zyg2siN7DV7J9AbFaMfN7xZhYtaD8ZrZqxniCjUe1nZPgxDM8B8zCaRv4iy9K5bv3R6xN4ReGJbejxCRnX9tgVj",
  "key34": "3C6i1hZVTERPTEMofva4Y1yw2gc1y9SVB9Bz9PxHpnameDydWGjiHNbjRLFHaakdQp7qbASkvBi96xBewndM8AYm",
  "key35": "3CBt83r67CUAVbbzi16SXJUQtmKN5QbLmv3hQgC5GHVRLDjHB6SoSPn5nFRwKpKVNF2uWknXkRNitWGgxjD5PRCg",
  "key36": "3cyVCnVNz1kDBm2WV42jovsGacfYW8xbi5v4zggq9CNFvvtJqNduQ4XZPChn5myQFDUwwJy8cycg2oxta2sn5NoD",
  "key37": "5C9qsRkTHn8A1aVAMvb3gMN3PTs5LiZU193DqbeggxTc3vDaTarvSUZyZMn8CaXmse6ivoLzCiwL59WnPVgKoPmZ",
  "key38": "5DXgf2xzfdfPAQ7EKBKAr3KBqCZybPtEPy4uCW2wVM6p4WXE7xRMszzLV9dZqn2qfBv8Jd2WpLDyMuexje7Tuqpw",
  "key39": "2bJvry8m2VFc3wMKE4Cp5BXKXYEoUo1DqdbUFu9cscT2gGifAwwkE5gS7c8ZhjPV7HS3Ck7mF5PeFDKW3kcoHZo4",
  "key40": "2FiYsQcwPdZ348XVywZwPDcEFfpG7LDxaNX3Te9gEFDhrhM3LwXnYJyrGmjUEG3Bbfa7UpazhXWzecnQUFcjbh6Q",
  "key41": "5maTEdY8fwVmXXpHydHpFab6ScsRvXtk1ox2TdP2tUJYminQCRfAHwisnEuHX8DVtHSKyNyWmjsshrwMsi5L8Hdk"
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
