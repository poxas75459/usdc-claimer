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
    "3jSg3Q8vd7x3EkXYhzUGarAq3xoCmLanWJJpnzDbFgKDVsJx11rUrhNKiemfKriUomBbXC74WTLa66fXKX3Se2nG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o9C3Ysi6WHBiYw7qSzomoWQvT1QMdSrKXEeiDayM2eyPXF179BuxjEit9Gn1EkuCL26MYPWi3DPUHFxtn23wE9F",
  "key1": "4wniXvzwF7yv28TLvdQAyaQwnnW72tCfDjb1bBkJ45sNoNjj4EHNoPwphg9MEVsrjGuvhQyxfw3oTJeT6n7ogRsz",
  "key2": "2j4xp8eDkRCqngtVc1ynCK9RZRtd5rkHWvwzFXX9hzR83yCxpdrgja9Pfj6AaTBnHUNM84TppfhbePeS8nb9ZYWF",
  "key3": "2scYbq8C27Mi9V5dyJiJokjCN2TyZQ3ECt2KUEC6E1TmJDtkM7HyqfHkWYXhXVg8DWBQ26vqJCXMtazsoWJ2aVcA",
  "key4": "3hXY9v8EzhSrfqyaU9rx37uHvCzJL646UBmhRXfG9qhs7NsjEqtstyfDqKxLHjk5BKcUT8QrJHzEC17eJoLiM8aZ",
  "key5": "4WoJxWp21cE1LATciidXbEUEV2DUu2MXJxtamUgJu8P5LGzSEnR6kRbEUyHJgLcv9fK48Ue6AxnpaJC1btQV2PRj",
  "key6": "67NFY26advqUyUM7emmEkKLwXa39X35zAGFn4wXCzrcVtKMiFZdmHBh9Z3utHEkYVHV2EfHEhix7zVDFsmNC9pp4",
  "key7": "3EdFmbWpC3KWz43qmf3QPH69vbStyHGsEhTDwGBir33KfSkjpkDyLVEQrceTbRbNQkAzYK8G7djhEEYJB4Q43CXp",
  "key8": "5DZQmB3JUrAKarTYhcf9bJ4U3Wkeqw3SsumXeiNk5GgP8MCmJ4QZx4jgys2EtiDx9RzKvwkzn6u8igVKvE4MNvK2",
  "key9": "2Vf6brVcHkgpTqsHNdo36LLiMg5ASqADRh9VEzwZ3JS9P33HaqViPTSDBh2z3LZ78JhT3eNLswJrKEt7RPqirZTP",
  "key10": "CSoqPa35ahELXVEDPEewjfpWYYqg2iFpJHyR5poZPMPgnKtoV5kM1FGLzHNbrKM2tUqVf9PN5LRrvx16HSDx9Xw",
  "key11": "4cMvDd47FywresB1MSgyoom2efbrSPgRGcWmk6StZqRWmc6rbqAoTHXQKyEWn6gfzsg8cdWTgNoN9cVwLxye8tiQ",
  "key12": "33AQuS7bRubwHpVWUY3dzw3DbHVKFqSZg96PdN4eNVNwXrLFxNq5AAHrB4s6g3Rr6NtjUDjo1S9vhLzJMB3vUXyh",
  "key13": "p14wuTDXeQEvfrpoPH9Fnej98MuQ5p6NUnBVdvBbMrGCYUWRJApzh8U3UCpkmsXhFioVDKm3Hrtc9xxB7fporXA",
  "key14": "iW6HxCtBL9AzRTjrM4qTZyKe6hMDXVmpRyDkm9LWeSfdEMt851moppdJQo3f1TyGWyudH38Nwp2KNbHQZu5SDfk",
  "key15": "2okboEa5Tp4quqEB5k6PSNzSHBbZym2u1KsRYmQRGPLe75iTwwXABwKAXgLaxZNZP166TozLqHY6df61ao7tXbDX",
  "key16": "3BKRwpK3oLYfvqCkX1ESL5z5V7AmoVrPJbU4DFujZh2Z3gXCTbTkNbvrtU3cJKPy2xgD7ZfNgGQBbzzTkSzw483R",
  "key17": "36Pribu5sh1fnkFjY7dAAWGt6REjvBydgc1PLnNNp9xZrs3668VPsDkXz1bLCn2oNZVWorgNaBW3WKnWD4rn7prH",
  "key18": "64gtxSgsstmZqsGFhdw6AR7W6a7AYvkB2aJPs7BuSKGazAJYuSxLr2L7idAc8ebV9sjNeo3sBGXgMJTow85ffCXv",
  "key19": "uyPm6TzP1uAT7CRe3e1Y7786sLVm8r9JLBfFdcapceRVUuUnF6pioZnhpQgx9LT8bpgzsiybmqJAvPevhHP3a76",
  "key20": "5Y765nv6ed1qvrGEHGX8E6MujLsV3QZV9LyTbMZ6ijGLuBYmvXWsijsYLgokakG6BsRCfjJCePLBP96swkv734My",
  "key21": "3ek8yMcRYH18HdgkNMj8e1Ck26XZozKHWNKJuBXx4V9oJVi34NGd81Y9AhC583bhwwFnpC46vaEvRYvBndh79ob5",
  "key22": "4RhLboC7yC4F8z1ighufjHsiEGGdawLS6vhqUkdQutqczB8BRPSDjBpdFsY9B2VZfoa4ANisft8dndfXZq5tu25W",
  "key23": "3htTqE9p5vUSiS6T48pZX2V195vhcpwiPaB1tkse3UE5uzhwLTv6umUakeNkPG2BXGB8ek1uamcs7xtLrAr2vsqB",
  "key24": "26SxyAEPtKVWXGUNzJk2yJDz3JFvcFxTMrD5S6yqWWr1e7ErENNEFraY7QXEgFZ4aEpd7yy1pteRTpm2De85MW39",
  "key25": "4o6gCa2o95J5PG2hnmFXKWadsQUNbLgb5fyWq3GVAjhydVsXCaBMcF1PsiE7RNPS7eLPxgdU8N6WsbS6tWniYGjx",
  "key26": "3MMeNhrQcvDi6u9mk2oUEeRWMRkN2yLmaFVLNWiL4HzKXbkufN7A82Nsx83TnkWocSYdFeBgGdxc8SzkmJKkW4yE",
  "key27": "4ev7hT4NvFQPunuYuqLPpuMfZodmjnsrwnrgpZFKYrssej4RUpZZLVhBYWRmJkReX6x5skyfwUo5v15JrifcWHSe",
  "key28": "JzMRLqRjgq2P4C4Gt5rv7uZPnXzdY5f62Mdpy16B3AbycqejRhJDkGmxg2DAmRYRXQeNB2oW8xoqJ3pNu2hYW9t",
  "key29": "4385ePSPQaB8cZbw6FYz6mWr3KFZ7TaSVwKjWuEH5SEKiuMeySgYHKBCWXSi1U5gJwEU2HHddT8z9NQsjdkS5CsN",
  "key30": "5XmUc586TLC7T4L3xYHgfpbcig8zHUxspsjhjb9wP8QWb7JvTu5tH9jzBPRvBeaehdPdgPGWfyDo1tyZ5kUjUq2t",
  "key31": "pRmp29jcSeitGHdWipRmFS6rhMEqHCL5C9yLPL6PBiooAvotqkEYsbsRB1hsFZpqEsa2u9778JNJFxSTRYWYFAR",
  "key32": "2cGVyTjA8GMs9aXa9YRAdtgLUjBjJ3XvyXrJwiUQLkVbiwjJuFEWmA4ZKr2ZSaKC93ctd4eZwN1Dz1fTWNGSrR7R",
  "key33": "3gqRRoaK9PTLUcvnU3C7Ddz9nY6Z1X1SkwNCBS1GkgLGQt97srpe1nwbvgUMYy7ypu5xDonCR427zcU6jBFQguEc",
  "key34": "4nSAmCTszdGYuyM6x3YyWhXymGGfyeDBmQv4XTHRHVYkbaVXfiNBoKQzaeGeXoKfuA14439gNefNkA9DGkiT7vyS",
  "key35": "2Wj83hExCza7BCqKA5HTopdey1Jdn2Fy6vT9NpBLSzqtCcRzta2RVKu9FEhc232LfXodduYdzN365gXo7aqXUpj4",
  "key36": "263mQhTSrZH52Zux9HN8uRkEkkRqKcUWnifVDZAfJ1CnZo4qMDchB68woP88eNqm1TZZuZcMZx2s6VMyFrHAuhZy",
  "key37": "2DSKT1apDoML8AQXHwq3p8c6YqDZ6dkmYfgBfdXt35m4n4XB2FvfZ8moU9FrWFuyj9n6ppPJwNBfnWV2KKz8oi4w",
  "key38": "233tp1QL9zkLPU1Ed4wK1Hq3AE1ViQV1FtoFS39U7WVnRcXwdKFPA5GxnVEnHgfQLDFYUm7ND7Vx5G7jaWwijtMz",
  "key39": "5oznbReM28EH2Ux8EtQVdExXXrHoiWtLaBHiyb3xExuzsQTk35hLAEWo9ghvxD6CsMdAS3pBtbG7pbpjneLKKTSC",
  "key40": "2CkHJaX9rVJ9zUQsjrr3EY2vndRJ6CE6t6ox8ZXxSEvM5fYfxZLEmmV8VCUuuKdXE27yxej1tGsaTmWkjzZn9wgN",
  "key41": "4Zi2UUZe1UCNSCELFatGQxMygRjmiAu8jpmUEpi75LV7HiaVUTpXAYA6WehuD1LQ7kedUar4T14Db32L3C4XjhuW",
  "key42": "5q4WH8gvx1wDd5nN9Zksi1okir1NB5Bp8gPj3iCdTR3XLYUZrv44P5KyP5mTRTEnf6T78eMRmzcecVURJaoa8AFQ",
  "key43": "2hoUs3ypirctvzKNEkoapmT7sTknL6DSirEeov4BWFx4m55E5zAwkknh596jFF96ewZiwbt5Jqx5JSJ7pNcEQbAi",
  "key44": "3Zytz2DdyNVYJLCK46hv56tYFZGNJkZRAvixojxs6pnGbD6LLXPzKeXHJCRoRWMUZZyXfDNAPs9mZ8c941UFrr9z"
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
