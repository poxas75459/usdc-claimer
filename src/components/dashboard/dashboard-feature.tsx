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
    "5dQK9Wn3p9LLuypQDbTKvcK6iiobwF8QwT57Wik9pomPUhKRhRZTeF2ZoHyqUvWvVpqEExwM6Z3XcsvgdVoSUPLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31DVfM4Zow4yk1XXqcUsUD94kzteoEiwf1MYmgAGTNqxvdT6wxJo3Ukjsv9vW3yYuMkLj4AF9wN6Y5gAqFZavU54",
  "key1": "3pf8NZntM2sxvk9Pnw9edhxJcnTMyfYkDYujbsUWC76rT9y8GZJPUFzYPy76A7CMQxBNCMSuKQmQtgPMDaYXEdKs",
  "key2": "4dDsb3v4gntwRLcBXd9FEM6azNEXcKzzAm1WV3ek7BaBvFU1gcPAeF7YRNHXrMSuT6Yvi5LLih5NhH2v9NVqBfCP",
  "key3": "2zUkFeq1jWjHciY3KYqW9m5NA73YzoZpcDM2FrKpnaUggmNutgbtRv2aZKwMR9ztaoDNqHfHjCNsKpjVPfRmtNCB",
  "key4": "5mYjm7MQYJCrrWctHnRLJNmqncFoJHPqAQHnRi7T4XvS3YjpSx8Uc6RVU9LurD26aE3sawcrEWJSBrjSbT3z7TnH",
  "key5": "5MF16bFYv1ShFL4MToq3kRCLntTJg9kqwTNuFYuVYz8YmtrpNvhj7em9kXybPS4JzzNMTc23h3AykWaKc7xfH3mY",
  "key6": "4dqzPepV6xyAP1RjqeqTeXUD1umD2uWiVSDnXTXiQYUmWwm1dDY7vYPbKQnReoYW7RfaB7BETjGohCNCfrEEfJzG",
  "key7": "4a8vZ81pi8L3ycJKVF1pb6cbv6Q1tGrq78q7z1yS3UmqjMBXm97rogj2hgKp6Q6zZkK1JKMAWHi8EBDxxnRLtty2",
  "key8": "4iJrncDcbWhyDpwirv13L3gMcv49bcGUH568yNLnKrFrzVr5uMoMXuYhYLCk55D2ARq9YegNZZ9p3URMbrGaxeht",
  "key9": "4aK2FCuzffmCU71pezeXbZGo3u8kdA7fcsZKMfGk5aU69uGmRUcjFf2YDxZCSG9TyFSBED2TDkX1Q84GmLtuKToE",
  "key10": "2dhkrfoXPohXc7UhzQzzZbcbL38zV4k94w9mqXPxuQpPMexqNxeSbMUuThfW3qP3Q2cnVGZ18NcBw3BdzhZQAUDF",
  "key11": "2ghCNGBcsh2YafEQkAMhpQam9GS9hu4DJprMrN9aXuB9qDsztgf6phMA2sy6vHac7dSKD96X7fL52mAYqh5P7iJS",
  "key12": "5BZqYSMgvUSafWE9ycBSuD293GV3hy3pusCnvsXUcgun2RhoHtsTASrtYZa5J47bzS16czKnMER6WFgRVC3QWXj9",
  "key13": "Xn9fenmnhscow4tDCZzpjKgAZGaSfQV5CtnKv34cB4DVXi7zk3v9YT4M5GRQkYpRew8BkqG1Y5h6nBdpqq9asY7",
  "key14": "2qPCYtg4ZUTuVmULv9PQ1iiH6Jm6eeZYtaWrQdC2C3Fqtad38ybYUSprGAU5JWqT8rui3SBkPn4wK6VTSFVPU63u",
  "key15": "42FeiKYwFpu89BEhDzDLaMBRLFaPT8WoddxnFG8Jqk7BNP8AeKq3yVL1sQfhHybbMxGaQEVGHbnJ5W7gxNaLvEVd",
  "key16": "3YbVZZNei1up4zdER3M7uDaEySBgGt9DSDjJtQJtgr7SjbwC5L87uGXZ5LKV9y3hU6YRumoQSHDMzzqJTkRnwQrH",
  "key17": "wJtEC5w2EJzThLAR6b9unXbNgRQos7vEPJoWXB35bnCL8RpxgVNyvCxE8rVKGs6VfDgMDgpBkUNz5fTyRHh5LS9",
  "key18": "4wEVhPzRvxXbq3R5ZcEcA2W7j6zrJMQSuPW6NZNn52x4mQEsHdV7S1Yea95YVKwyFx2EXJ4SrYNpbGnFLJCidofr",
  "key19": "2MSfbJ9Kjzg8ocw3qWW3YLUDsZnE71PDSwHMznv3Lutf22FKf2SyWiwiS5NctYhFL1tF9uvhMJJgu8D5du3roSmW",
  "key20": "2Z2F5DAqcEasGs5yurrxjQUoSzGghSEACNWn2Mh53iWWSLYpixfWPg7Wa9jWR2CYBWnirB9Z4ersY8u4s7BH1QzL",
  "key21": "XVbbJKu4tYesPY8qTRATGJ5epGgizx6sPkBVSjJwtFzyNPUW5eH9h3YVvdaiDP694rAqHKFdHNWYDL3YGWLtaHk",
  "key22": "2mvrixGikoGvKixCzkD9pehanvVQpAAZmnX5tQrb9nwQQAeorrrRHE34S794UJ9XY5PvV7FF6nJJ2jgGuuo3fjGL",
  "key23": "4LK4HgsTBGm3EPtA38iDMidWPQhcDvoYNb77GXBsHZghHDWiVpXUPGUVGi6UbcWUE4HYyUeLuq3Qrtj76RBYdUpH",
  "key24": "28SN9YGA1E7k7duiFVG6oQC2doknMYKbTS1AoGHd2EpbtsQBEbsEp22wCuaUkBe1UsDbyeFQJCvppk28KQn5vXNn",
  "key25": "5zj8ZjtwAwSMEETZiPLkmSErD7GXPh92zDuz4bFP7t9qhTXpr9gwkAFv6oS3vMynND2gVhGegw4xCUV135THjUt7",
  "key26": "4Cnjs1pYiyn8FFmHUBHGXab7CLb1Q2uJX2ZuGHbo2kPfaVYpHjXifwqL44RyiFtekFB5BFNBu5vcaeWGfz95QoWj",
  "key27": "4Av7KtNcQaUHnyb6FRZKrsizk4n9rWSzAy2eTmRUPnSKHVrVsiTFoWHR8uxJ1g3JJaPCuXF3gDzFdUPFvbhthFbq",
  "key28": "3qMgu4Hg768GxMEFKgddZct3kFABiZtJBA1okQYdQY27MyBau78tnGo51RLXadYFLbzAaQBRPjf4Lvq5tJ2Aw1HR",
  "key29": "3V1a19PYWh3RdP6HGPcGi15bpgt2vJiVh2QhHem2JZB5wtWYLPKfrq4J7sh1BvDtcMyWj7NPHM8LZkL7zSLT12yf",
  "key30": "4Yzmemy5oooBzmu39bXxKs2GYT7DFAHumgfoYX7f9Cno57X6ZrgVDnZRxpf1RE76pTZeAUHrdmVE5shCkirG9rnk",
  "key31": "3uuRu34W6DfbBYmdifiemZvv5RyUxVGD6aitCGtgSkoPtW8RZiM75kBbt4xVkyawM8hKNiWtQYsv4P869Hx4qLxX",
  "key32": "3A9KwgpoGSqh2WVgVTgrjoCRBHHTmUPP6qh9H8YS4DkgSGvfXGgSohKiwZzDZk7FPoHSvWiEeaPc7N4Kex9RGfnD",
  "key33": "4jut5M6jcxeAUJERJegWgoshFkTx1f7pWqY4hFXfYQ98xqhPyZCZDmFUFKEmV727rLyrs4fnXrPRSb87YHGzKvnt",
  "key34": "6wb89UxigVfNvv2bY4VPR2CwPJLacdYDVZjZ2VRfQBrdw4aZpnhC4NpiDtC3MFXxjamf4oH4rwNfCHpEp3Yva56",
  "key35": "2t8kUNkEjr1q37UngpPxiZZGnVKVnDhbi2izbcbEg1ZJQ9NaB14vVWVkfpCtnTkLBNzKPbNFDHERQgoaKNThDReZ",
  "key36": "63vzMrK55dCJCgv6HhFakbzYQxDqow7ZbVLHGskPkrdt1fJ6KcS6BhnjRsMfmZSBcHq9vi6ZiotUXgZfbHYHQDJW",
  "key37": "SpQZuZzejgSGndHVYPsvPC5rvn6mJUZPEo1QWPCJUxk3CMvSnn1ZmXjKabW3MK38TwVaYxizHok9gtarsFLGVv5",
  "key38": "2S8uAmiXxiKMEVqLT3WJA282KLBpPFk1p6dJd1A7ZKw7YkmoW9mj6aifgmqkn5hMPQs57uSFmqhwiiXdqQ7wTypn",
  "key39": "5kQZ4EgFBvLiomPKV7TxDwRk2k4kqPEpvhpoiqW8ofG7Mxigv1DVYYUJC7nRiAMpCnT58wiV1kgvR15M4v7Yehty",
  "key40": "4FnGiWxVXeCTK6krs8vQw2jvbyrpPJ8gFfWWR2bBk2EnEM4nndXZxktkRFRQ6n7ptcdSNYnv9RpV37DsKX2eG9Hy",
  "key41": "59qDZHsSdjh4i5W1Zh2zM5gWx8rFc54AooDUKd67as7z6UUGhKYnLa6eGjNA4458aKZaEnoFuMknJ2YGLCZryA2V",
  "key42": "j4a1MShQWsnq943rbyhJoLeyrxm55fxSEbaEmAyG2kctaBc1Yz8vhzpR9otcdZmfH2upaVyP2pX9xmDunxWP2CJ",
  "key43": "2EKzH4MuKzdRWyFWg7EXe9LoFz2M3XRzzJvNiJwbzFS31tF41subRPjoscmd4DbT9gSbBipj6DvdqjQ2fUiMeWXe"
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
