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
    "3ByAkSBBJ61fukTSC2n6QmRw33bawD4pWRppqWX7sR7owUEUFXqqc25i3LFJp16UTz9UT9y3JGNaJR4wmwivvmhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mZUP9Jv1w4nuKHvgL3ms9uo92gDQVzE394DJ9xvtmy8ZL8ZaPv3dBKuEQujovH8GakFdpjrsvydtLgvVQjLGRo7",
  "key1": "47Q7LqanorsrxUmUnK4Y5xtRCRdGE4R3nZLXQsxVitG1vwQTzSgTWgnDLJuLQfSFBrpzeNmGnfRjFPLY9HMBUkLM",
  "key2": "35PhCLmsYCaCjv4qVskpFNeYytWhVY4S1gSHVLhydddYMKQCq7tTf1vtbyzWo2YSToRTzJSkdS8a7jFZHtmn1W35",
  "key3": "64Z9tEziHK1PzGptBcmRSzK22Xjev9pVXzWrH6JFa2wxPBmJrXueMvj34o5VDVZCMhyb8rwmdabDyL6uDRRyr2c8",
  "key4": "4wo531PPUQ7eAZWmNxRf3NXAjzvbvp7tE6wNSodpmUhUn9FfWXTCEJR6yiF593DFpjyJ9EqWS2Wk1nprGa1vHtPD",
  "key5": "4WKqDS8JDB6zKKEPa3R35tqxE3uD88m5DEobenZ9bqfh3zSUP7aRGCXm5SQ3hXYUzi1gqvcgQ2dDWSfKoaTvfDUk",
  "key6": "3Kb8SDfvsiEFkQ6HLcufHgvPAqjwXGoTiYNSLD5DSezcFDDnmahjocj9jpTy8NVTXiVwy92Fn9XrbgEZUj8Nu1PF",
  "key7": "UuFXVofPYrGSwLHyGDa4a4Rc2PxCdm7Dq52FmZ11sVWmC6adiSBRvoHnXsVwYHNjLPsBbujEMZJZa3fa5eJfa3g",
  "key8": "3poyeYPHmcTEsezuDtgJUTmgqzAfm4odFijcsTVAhw91DukxAHtu1ZLNy3UkMn6q7UijakXWgzXiuDbhPxNLmuKh",
  "key9": "3mijovc2HYqEARBJyTnEFP4y8y6PcByhqcrgX6if2d8krYxv1cb1tW7W3TaLzk3Vp2MSCsxrTQHyg3w4ho6RJF7K",
  "key10": "3wtKz6XCDp2aqxKGunN97anPVyA1WA5CFhbeyKLAqQ8v23CGTPDUvc39Kd7zWFQyDFnkzqsxDhkGzCPHTnTDXqU5",
  "key11": "4Etb9DZHCG7mnHZPHPa4uvVN6a9ZVe8u3HG7xHSktTAcu57f9YhPix4yNUnAkR6WBnepx4pBxJKqz1gEDhzjjmty",
  "key12": "4jzhq9KosxPyD9UsJdb96sEQNUyS8ZjHeqbsZt3FUMSwWvKqpSJDcu2aJQvCBUJTfLinbwFKmwdkEncWxGYUvsfi",
  "key13": "32VbW2Xe9aFu4GC2NSZhvPKQwk68XZ7nRsvZzwjgvKeKqrK777BDHnk4An2RBv1zvhcY9swG87pvfaYf57BvtcGS",
  "key14": "iMdhDkNXnnK2jXm1RQvzBizjzNMAPoCpPog91eG5u7sXGubAocT6M3aEndorTWKPvWuRpZJY8TAb9a6hNPLMKnf",
  "key15": "4d4rRosdTZiTZKAwfcTuptJ8NjDoAmijZRBH7wt1N5ZsPo1XBc7PWoFHKYVemwCNUfY2RbKSFtRSDugSzAMUnhgb",
  "key16": "FaaGpprWkL5ZEwQ61Q5z974ecCyZeosaQwtHrdzRFbB7tPWsVRZmGztCayDhp9gXnkD4dtYvS2TJ25C8wRM9gtU",
  "key17": "5h3fPrt6dDphTZ1tDX5CxHabBq3bjHt2wux6TgTZNGgmYNkum8V7b8UWTvrjqLnWGRi6waE8CuzX7gryDtrXC4v1",
  "key18": "53Xjy49XoMSUTHHqGis439Ti1tk8LW2x8AFAyVZgeZnbaf3qTx4AHCJv2CwVC7Bggps9tDtR8hCtmgBE1D9aNDfV",
  "key19": "2cF2A5cxjYTdRmS7ww3V7a66xUcwViLpKUTBwNohyPTKgnwhaZFciRo2BVAHDcdjmE5obFpkLekrJe5DXQt9JpgW",
  "key20": "CVVza47Vx5XG6BHR339aPRN8JJ1hELiHYHBmFgiw4UDb12VpJ2RGzHPpTrGViZNrFpnycg8f4YqqHjhgbpE3aoZ",
  "key21": "T1VgsXXnBRAiDPVSooeNRNfLiTorJJCCDbcjGuGypikZKcyCmJVofReNybmXobYV56HD9bJtEUZNPJc4MuSZfqT",
  "key22": "NFWqJjfPsSaj4wGwQ3DL5K2kdiytgSBwfoA3UaGo5grF4JKmeAao7Yds96UyzdudHbqdkd7n6M36Uj9cCezaqgx",
  "key23": "sfQRmfF2AxjWdMFdiBoayr1TpryzegpF4gAgW2opAfQcNqFpYfV6Dirx5kkq8DAMh44C5ZCUbTksjyBxFwk8hY7",
  "key24": "4ro1Rtj4L5JJZEPMfU55PLYhMZcAMMNY3px8wYLVxYVezTqYTtgothD9egvUtBdQLiAPTb6fTEDm7boj4jiVqEBC",
  "key25": "2hebjSWRyStZzWYZQxuB6a3ioDYwfirtDsVvXBZ2ac5WdWnMqmMgngiyCTy3fWnDo4usnWyFyecdfJUdetXmkD5W",
  "key26": "43VCQQn3WFyUqNrHEeFjhz5C1SffMSoupGwd55QGh5aRkZXVRhmUb4hAjvybQ2Y4tcP1Jz4eXFNkNSFESn6LvQs4",
  "key27": "3ScozXhveqdADtNc6kfb5Q8vA5XE4bxALiLGJvSdKVW7yxJoYg9MyPbdoFHArt3JnomLkW9nHq9DtF5VFfQBDbs5",
  "key28": "2UYbHxfEBgYW7BZuZwUHWvMooswajTH97p62BjfvcH4Dsb4zmHKpyKLfUKuK9DN83NmqUc3DFLziDj87J4ZYk5mz",
  "key29": "5iFwd5drgyz4g8MHMV8WJUVRiJzzrz7DdYQ3iV51Npu8Y9hX2n1iykryuYR5Qe5Y1P6BQ2EdPxutKmVqsxJ68TtW",
  "key30": "64uRpvy2ftbSmW5d6S6LdFmUeN6QZcAFWpAqMWpf6JLjw8roN1brM2aFy5xLgDmt2UBjgRiqQ6kchViD3th47SSi",
  "key31": "3DjTwbZLVGn6jnGCLbwaW1UVaEfhdwdZ7ztNuZeyAfRg4ULzhnDyhbz1Z2RyCGEc81AWYYHcqE7qqH1nD5G98Vrp",
  "key32": "dLBkQiMmmGcCghZj5371wGa8ozUq3yjRjmN6z3RQ3YRhyiXwjj5giv6XkJitM3YMW4fjfHXyAZsBfpCmfJYT2pd",
  "key33": "3myZFvW2myXNLekZt89Dnn1XHaq5oWFWthuUpdtdmufU8SsTbwf1WEHhQ6iP69af8gpCoqk5bKWo5nwpzBbKxFjx",
  "key34": "34Ngv3f6bni66my2p9kZC43X94BkJqnpBFGbJFeKEojxRLF6v5e9Ww6mZXjGDTqgE89RmAk6SU3vFiBF29QHBdCr",
  "key35": "P9bNSQsuJzRdSaa8niMbdYkj5ArCq8pNY39ZcpMqagF6zfRUUzGyidTSRuoVDotQerqbB1QqbA1i5wjNrg7ypQT",
  "key36": "22NK1bu7hBpdhiSiXnJLDZ9NDtpa5RPPWyW9k6mPR9WDVJ2CCJC8EEbRkC6eNygModTvJ7z1C2bfx7snaSKADHVG",
  "key37": "4YCkEqAapvH9XzjkYwRvyDcm9Azib5JeWbftSaYcBrfbgw7ky3Buv64Dy6d7SEL2qei91JCTENw6Y9CJ3F6KeZ1K",
  "key38": "NoiPjhTaWqVfzvMsee36Jewv1Fs4xbfYUyKWdSUTuAyqsn2kQnzcHdca5FGV3d4PSaYkCR7jDcHkJ1pQS3JLBan",
  "key39": "4SzqFkomm1TcQvLY7u6fNTxHN7F618xWVSDT1Keixbnjc7zF3HGQdN5w73Fr4JrbmSg74E7vS5UQXnsf3H4EHW2t",
  "key40": "2PJQ5GmRkU3TL9sSWsr21j23noKDgti3xu7cxQiL5wrGzd27z1av5GTHoPG6MabjG2YfYRRyLHgqTFWfcNVmnuo3",
  "key41": "3fetNp1icUTnKupt3DPu1XufzgB23YvqkqRoXkSF7fApWsheVv35KpNFAYUGcwj6CKH2MuUNFmCJyrh5Z3H2kDjE",
  "key42": "2ymU8yTHqXeDtDXy1Braiyc7StVDXQYEEYzEZJzj9KF1LS3igkGxTvRh2m8BzcALDzjT6nsJfEPmuZUDAd7kjX89"
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
