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
    "21u9nYQjponXWeZnhKh7sn5minKVJGr2CGYAwGBvRfRQmYzvLGnwLnxkenJnAKuKSL3MvUFBUFMtdNSAb3fA3e16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4krkovwHswp3Jq24mGz1ngnrDw1pTb5YwaypSrE7ggMkdq53L9VPGnNT346atYZG5KmWqNYaxFvTEriw1CRpuJD4",
  "key1": "3TZidy7n1w5EivoxwT7JfS6WRFaUmxSwhyC1QwWdtbxFNF7t6PvTntMjycpKyYV1Fi9HqP9kqS7idBY81bhXWm8",
  "key2": "23tX4avyrfAEk5ST1Lh8Pdf2saWZEy36vxsZihKT58okwzA4YyykZte85Q2HWAWHFYyBnWBUpVX96v4uxieoM1H8",
  "key3": "3D5HRpenzDwVmaS1SVZ6x1Md9qkMrzoCZv4gkTBrjoFzNfNRTtKrdM1oFNVKoei872sK2Vu7DdFM8aYiiuCTJQSL",
  "key4": "4RbUZTLZcEVKH1jnhdEK7YmZ9TVE3CKzerK3eCipB7b18PvogoDyHG8qggniXNgTX9KygxDQawc4B1ejHyaqRUFt",
  "key5": "5vWWNKVKsEQjGJTB3h7SgKxmcxzs1ptw8kxsuJYHdL3WY5M6YJZNi9nSrMWZRHX7TTJaEHcxe9w3fbSwBBc18gma",
  "key6": "2z9g6dePt14dK1WozsRLz2XtRuHm5UHMiUZTPsjTvFmgsXxY2JeJJRYRnHmBtngqgto58k2wAbsugUuwrRvC44Qw",
  "key7": "mXxmy6XsoEnC2Lp8CShgiM93EG1czcjybQcZinJWeWV5br7tNH3FKgfoiCBLiXTApxPuu5dZc12EJBHecrUpqYm",
  "key8": "415tHDV9tuixkJoih6oeWAamXrAUteDwQHzk9agZ5DK2CaXJYKCfysELJTwAH9ubabKr7SWDkidtKfzSXfoXt2a9",
  "key9": "5uZPL48MwyQhBwGH4zqTqpJhRcbj3aCw15SEnN2Uu97W7k2PsYPU6uqT2bHqAzb6wmixJ7duxKqs6LHQv3fvsDyw",
  "key10": "3mpb5ndFcuV8vn4sQUTVvnarEZQ2TSnw3ohcymVhRyRH7CVY5t23GLKcGnJi7QYFrQkwGsxHYDALU3oaunYV13xj",
  "key11": "482QaXRh2PkXf4UTX8Ph7cYKGb7cSB5pymxAvE9gN6gHunMjfTPrNwT5CwwK37K8EVoHTNnGMGAiMSqvBP7Yoqja",
  "key12": "5MRgNPCtWRdKfQPE4xevfxjoUbvC7oHwmBc8vhJ6KnqxK9YwWTeEGjUtgJnAi5F1oTvD2XkKGE1XsLDmemi5noM4",
  "key13": "ajYnGDk5bqKLJbpHyfyJvLuS64QAeszDxrRJmQvZCFFiN14HDsawFNmj85m9C2WRkdVWBYLrmMA9S2meDp7a4Rt",
  "key14": "31f4XKV9ekLnzy327Kx5PCTd6vmP1pjGmZ71KsiZhrtV2KVmecai8LUQm2tNWeQbZHjhNJfqQuSTrTVpDhfCAW3g",
  "key15": "5xMcK7idiSjLFvvpoHG4pNj8W7Lb8F3eq1Ppqf4tYq4bUN3ZYbeYarqFaNuSK62sHL9vXLXvF8GE9LV8D3rTDxPN",
  "key16": "64b5i9HfcZQj2dt4mxgKcwNtY56e6YkFLL6ipcUvZXLbrThSrzxD19vKc7dw6b2js3KE1vkfBrS2qwY2s4FJVpHm",
  "key17": "YzgACYmCfRT1Ci9y99Dif3T1VJrd2FGgW4Cb8utGwH9idkerXopX9JZ1jcZ3EYb9uuqht7m9bfkkHaY9GjRNQGU",
  "key18": "4mFWmRXbSUuWBKGmZk39nkwScFA7GRTZew3Xd57t7S3GFRK5JGsrB5Ahfudo4jcnoqTq1sJk7F2UAMAPtiHbjjL4",
  "key19": "4hcH7oyKhHnM52U1xpUKKD1VpGB8RFc6pskUhKN4CU2Gf5pVhSK5nqoX7LaGFwmz26T1Wfpi9vEGxb2thPA1t2hx",
  "key20": "2pcSwCzi8Fvc8DmkdCNv71LwwRSoLyXb4SzHU33g2cCYer1Uhwug3GDHsfP2zxvWCchfH9u9s5bXtpFJqquXQ1pw",
  "key21": "5ZnDt9tu3hoYrkasMBt3Zy5LFWoEXUamHMWZyrfiad8nh8s1vRYAwdEfoT33bYr2rBUdbehh8TZybjJDqgU4NiK3",
  "key22": "4v1txrMsBNVUhoA8tmX7mGV14BAoEaKHdRa3vFixb9LwsX4niZMGvTn1yQ7HX3YWnBw47Hj7aHTgH6pvCZPPcEEA",
  "key23": "24S59MPhmMpLSAgDy9onDmSh3i8aWGrFf5s1JEz1ZTC2gbWEGJJQXQyjyHFcgxTVjAWgVv6LudEDNW98ZkpZMmG9",
  "key24": "32ZvYgfXsEWhLjwHuNf1By36Nac4HiSdtJkaPmLbiAV3WzcsVhJJYyA61fVBQNka9zUpXxnmh3tQ9XVShbzhtEVu",
  "key25": "5gQzLSwXwVQ1rWL7TwtgsoBSW9mbTakvui5N8Be6zvNf2UTaXiFXFPFTLCmpxtoJ3AEuifYVKjHQcUrq3rPApoKh",
  "key26": "3NmBwbb6fYxzmCuetb29v8wgcBVR8okUuB1qxzEnqExn2hcZe3HmAQMYJshUGAuF22We5b3mXdNburgUKQ3kMC6n",
  "key27": "46hbW4BG1CVrSX1ce2rqdAWaTNL3ySpz9JvaZBNtFdLG46RER8yvkrMWPauE6wKF4iuHnY2LcNBu7FfabCF5WkJt",
  "key28": "pNN6CvFFQdz55ffUi5GSuLAewH9V11jgriQvQSBGZKmo2aWi2BCnJ2KATCrFwd29YxW3i3D5VN9pvDtsvamENpY",
  "key29": "aXN1d9Gps6pWqJg8zDEbnCxaF5m2WJKazG1M5YBxkpF16td5sszdgsPPmFk45k1CSczNHAdNMEZ8RkDewvwi8eE",
  "key30": "5G9XHApZeF7hrmTaHcbrhvGYuoHPTiApqe9codDkKsD2MZyGm9iVNPnx2XP7F3szJNn15ErS6AgvwG8gm6NvNZaM",
  "key31": "ve1JCrHpEPsKpaSNWJwK4Juioxz6TpyA5Umg43pq2CSA9d25rMcwLCVtdoUgUnKg9uQ1DzUph2NFj96ZLvpVrmk",
  "key32": "2X6tpF7WJ6LWdnSTL94bHZN3tj3tHmbbkAttPU8SScN529gEKnHoLKvkRfspiXV3p2WGuyxiEYsf1Xs21GC4CuEV"
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
