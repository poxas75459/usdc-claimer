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
    "3jgAck3hhShdCiYbWDUReqAA1QzsEV7i77TsS6fh6Vs1XQFvJ4pU4AnrNaACut6y2WwmiWA3EE1SabPcZM4QZNpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cDHZCmjfW8fFGvnoTBQ9FLqXukuE3Cb49ZmZmmeJNyFLdtHqExnbt7TWG3no6zicQSjdjd8hLus25NQ4ye3L1N3",
  "key1": "2k6bNY6g16shSZ2MwgLb4AwaKozk35sxtGzZe8EXYKWnFxZpFXkWHudKFT4q2amPfcD1xmdyJk4MktHL1rmZ7Nn9",
  "key2": "8bkTvJJyo3TwW2AYoV9ZYnBgVxNFWdC9WjNGCUx79xMd5JxPK1oaaRNEwCSp4KP5BJ7kUsun81PnqPj9tXkUAus",
  "key3": "RJkecB2CTCjVnArrmbgsgCNRof7Lw9nHQKwCqxVNw1TMPBcVhB98kKAGVR5LA1wjKKxfVT8APD5XXvdScFyUTzE",
  "key4": "43qZaudUBtt77JnVGHs2FEQV9uwzUMsVfeXtQ34tg2Hqj1odaPAWtm937VZaB4Va2setkjVLBr3HV8UbYWa1KygT",
  "key5": "65NjUajL8o7YS6HWWj9zrMug3fVCT7LNccsrvZbLtF3f54gccK5BaRrizm7H4MCBJuDtSv2BNHfo9GxUUoAzLpzF",
  "key6": "4T3FAmhXwYYBp7Ji7TGJsjSsmnsQJ2udKmgyPs11HtUPByMSC5zcjBQzBccypt82mn2by3QfaL1DyVcYigMkQTmq",
  "key7": "4GxYJAvjmuDdg4QqptzobhfbLdvpAx6syQ2ybLSfDDecKaZcfqANp6b7pP8u8dbqry6QWvQZApPxn97xb9isou7v",
  "key8": "42QDJT7nErqWKsnYGuAusJhXBeexrwE6Z6Z69G9xmyPXurGCRquNFBCcrbdjwaqiDMM2naqTncF7F5XbpkEVGPQE",
  "key9": "42K7cjedF9w9bbaxWQPbfMtx4mzU9fbM7V4SCFFb6KJrfskvbZmEiXVWQAKDmP4Y4DofC98fbZef3QJCX3bs1Q8G",
  "key10": "54r6kA6GS1SDLHEZKEnJ5fUKuih2WAFxZYGFLXVjFcDPcYSkkRDubLuxtgdVMiiVoEUpXPn8nMU3mCYyw4pHgFch",
  "key11": "3eGVKcL3oG43Dy6cBHE6q5jMLk2ZAyw2i1Qgko93QJFzNg8UFBzijxftwqELQofKd55eeYoAZVucoxqfge7idj9Y",
  "key12": "4zP27KyHDHpeZAHuimMg14ESGo5aNw36bSLTCxVDt9odNjhkxdzdWQX9P15eNwTeMK3JXJYtBZMBYSdr3tVSnN1D",
  "key13": "mz3q4bbtXmLzauqd8D14jVYGnPhJmnJ864jmaJEppDbGZnhKFZe9NGS9ALbyveUDJQV9vFpdhv7Qif5UdLmCeX4",
  "key14": "2AxAEgJZ5bhTvsZxU7ZdeuQe9XqpSgRi5Xsj93Mrz6t9qGgz6XN7KzXHPzq8VnaWZ7Lxny3F9b6miBLCUiE8C2nD",
  "key15": "66U8mZcdQ6mq1pnYCAdGFwLRJH87ZQNqxcL6ipH6whqbxqTbkHuVUrREC6M5X4MHga1myNfRd7emk8FVDoDbaUGy",
  "key16": "3XoC6DXdKyi7cCNn7Q4To2W9HYZhSfc5yjj3a1xo4GiZfN56cFzkFTFrcQwkv8qqKFKipjW7LJmXq7hY6LtKHhbM",
  "key17": "3XBPo6uvkK1hkck2Ak4ZtwUbc4GJzJQzc2VTmuv1By37s2oaTAx87Uy3RR1AwqkgGd2mvydN54JXgCDkn1Da4AaU",
  "key18": "4FBYkxBC84fMDYqyaJ79nhuiVXGiQi6NUxZR16DurgADbFUDKRs62iJw56Aaqh7YKhzpKxKXBGicYAaJPXvZE29s",
  "key19": "2ACpYFX8VTf8uBBeTjYj7hURKfLG1kdUh3nMovTuCraZ5X2hpsaFsvN24U9ZmFWRqTf8TcFbWWWCuYFUPKnuWfB3",
  "key20": "YwFTboMNuA1TTSbRWmbTVwbstQCiPr4Uqx56QvtT5NiNnnG19WtQz7tUxSif3VFfuDbqaXramcVKFHFEiyrfFPm",
  "key21": "47g8SnEWMiWDDMXirCeYCNGFEEgXhDuHk4xmCHtmAyAYnKq5HY5S1QazhDMJZpAzKGGUkVty32BF8QPLyALyPjsL",
  "key22": "jaDRJmtvuTgKBVN3hfEUTUBgh5MYvSkuTFPi122ydQoEn4mTu1Wuw1KFiTxnaoWdEPcmmNW4k9zK5NQD8vL62pY",
  "key23": "3sJdt9PiJTbRGZqJez8n5BDfC2byWYUKgsggjaHKAaLymv7GszrzfobiU7sCRtMNJZPoKpVQb2Ye3BLkSsWYNUHT",
  "key24": "tgMSvYpeJNoWQXXZyAF7EKctvsuc35NqmZHic2rP53eHdR1km4YuaGyBeqqLMCnZo3Nc6F9q1cAX4yCTG8Uxeuk",
  "key25": "4vr9yfj8FrAqD9huyGrJDVTKDgGaiXBEm6mFaKTfE9h8Q8WcKokQZ65gzeaSJnXr9441HNWaVvZiQpJ5Qdru57uV",
  "key26": "pCiQds9SrjgCEWujm8PXeDJs25sHdA7qNhnwZAzvizZTPR3Un8sEwdEdcFUvKQWEcqykbj6HG2RCSzk4ABiEXPJ",
  "key27": "3QB18NxXzCnZbTLiJspm4tyeraVGxSqRwHEMHdAk1kUg9yk5VVTskUjtjVitLvMCcZDNFp4qqE9vj9cSEJDJYAkV",
  "key28": "2MN6vVmPfnPnCnKPqP9JvhZ9Di3jWA1FdmR3jMtQnwEAzAWwbfPAZyBtZnd84t9b7jSdJG4SZF5r1WpTZHhezHvW",
  "key29": "3n9nzzUnU8gdEJw2ZCyy7qNn6EBgeBcK87ayM3Uu4qTigsx7Ld9GEmuPwhT52bDH3FXATTbRDLcU3Y7UhwFpHwZv",
  "key30": "5pZfKLYbXBFjNrwgWusscPeUfY5r2xzQd7xSRGY5tJ6xogomxvzmj4wgDbjDMeTFLKx4hXVgWuFn4yXonT5Vwtty",
  "key31": "4KKZYswxKZkFzSBPW3R3SMENYR2C1m64ux9rAwh6FND4NTLPHYB6rkjSi2J9pmJ1EYtKBTRVBmbwCEHgG8Sw7Tfb",
  "key32": "2H717VfbUmK5UqgmYNk8Aho67KKXBXscrGhz6TUDWzaohBDmqCGZutrsSAidVNkpZZacxu4DVLNNskNuMXHMbF9h",
  "key33": "4ggAi5vxNc3GYb5sSkFkeWswde3oksw6WFZgBnubNzBTJH7bbKwMDpfjm6eigqd9caVZWY5Ue8bG3ct8LxMTiBXE",
  "key34": "5PjSfayDtopUgLnzmAEYg5kmntdPnr8mQUAsedQzHyEfNh7zKGx9sanWDw3khzoDzRudTpj5e89Zh3mJxuDhJUUs",
  "key35": "5r7G9hXxEwDwfWRfQbJABEMh7RLBXaeFNQhtusLNVUdbEXEeB2WtqTo5z69vLwb9Ah1xyZqCpKY6Umxz7csfkcgp",
  "key36": "3zXD6kx7tY81hswEfMggmM58LGop2GvC7qMuXMPpUYZvZrnNfhfoRECADuHeV24BYBkmrMCZUqz2QkgxJ8JwCcPc",
  "key37": "3QQSZCuS94fq1kUPYaecuP4mCcWKwM3Wpnmho44pid8fts7FV8ybf9Uf5fGdMUbJZDFESk5dqVxMhThM76eadeLd",
  "key38": "5tdeKWNDjxcZrtzf1RZdHi4mEQwt4NiX2d4BkMKAT3dd9QKMHSUoJXt2MT5p6H4u5MWYUYzbCrn24drbNXbxHkxm",
  "key39": "4VmghC6EGbWrXnL485Zy6yTjmZRRN5K6s1HpH2PKAA7ofzZYf9hphqQ2kxKntnw28G8iSdrH4stUJ5s8qQSR6q3k"
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
