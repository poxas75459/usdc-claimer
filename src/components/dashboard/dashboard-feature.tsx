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
    "4rBLgtLbWnhATxz27xgEzwVkUvKxDkVqHujTohYy6fPuzXNEsbwMDfeUXVuHf42F49ZDVcnefS4oi6NYZ7pS1gJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sv5yaXi1s33K4nxaXVhiWQGfrPg9ydxw3Df56CwLaz86TCZPzsf4HUzLtmRLNSXgkJDhb3RopM2FTmc57b77kc9",
  "key1": "5ePsJPUKd2oEiB4ZRAVYYnBEE993Qfy6YjyS5bVdughr3dkBxNDPFTZvAXiAPQQCq1Ud2xXvQefvWa2tHRFZR4qj",
  "key2": "peEmhaFUy3usoS9KdULdqefmnCCk4srbMjrzty8eYs1zZkNa7UizznEN7TN3G4GPLCWVhJeT2kiLxqWoJk3MVx7",
  "key3": "5citmCS6ExKcPfQ5m1XX9DJ7wwzBKM9JDVRJgZ7AaVszurq53hPGw8it2bf5Gza7GQZq1mGsayxA6KjkDQBiYpBs",
  "key4": "3Tot2Nnmz6tahUABt4Qq8aTwpvC3nEHRiB9AxCxmP9igkGCqoDNC99se1xshjFrnvWKewAsbi53aCKCeUBP89w3n",
  "key5": "57gGWYuQ8MFLyC3iLNdgFGmpCxbskYUdUP2ohvee3QF3yfhrAf8UnqhjLij6tufAwj3sA6WSxabzEg49AM9CGo9z",
  "key6": "3EvzyW9WuYZFifgBCysE326mYTTtWxr6U652bpK3nkmLs8ZdoCSuC88dXBT572K5vCTV3s7TcfvznHfBmUDXsnmE",
  "key7": "mbqQXqjXSX12fpA6ocXo1fL7Qc8hiZBj4BYoKXtjVKsmUKkgwLjbSJKmoFjedsa7vC2gUgwwVvYF9adUKA3K72C",
  "key8": "3QSVsfAsGpPqe2a4PrmMyuzuGNLcK7eki49Xwgaqkgvbp6zxKMF65Dxu7goMmzWuyXCakKDZgbmVZuf56gaowBuD",
  "key9": "HAri1gerAxH5gdrTWghUwG3zrQNyaz1UaJoFxzpgFWn5X91WS7ACitSjKzPxpmyNWEM65aLrtF1AyCE8ei2JFjb",
  "key10": "dpj3iTvtBwecht5L3fagAw9p85XUfqY1EMaJFxXpsm3PkegJaVpM6UkLgEiJrYyjL9qsWB4hQhQh2JuB4jBYYpk",
  "key11": "2a68NX89Kj1ab3J2BaFPL12vEaNjR57SKDtEtyYPhqaD64WfnzfSEr69DRzT8sE4HjYjLkEvBqgfbcSN7i3UbZ2X",
  "key12": "3iYQiYfaBrMpkhmUgSv87G1sgVyfjqPaKVkXxcCMSYJ1piQk8BYtpc7tzDEK8TJSpbjAyDVzhnepfn19dWGy8bGg",
  "key13": "5ew96psA7eWftuqrgC6qCZiXcsYw1Pjx9prSf8aYeSf9eqBfHxecp23sjQDpd7fXZPQRmiVf13sscyh5DmhrkDtN",
  "key14": "6786G9aKR5u6ymHEHFFUdvaPwmxnsm23MNsQJ5dj7eCDeaFqWHsYHKHAa264wv7M6KpskLgamKcvuHC7XS13qwVn",
  "key15": "3vVcjawXa91AD37URnpLveLq1QHGfZwHHAwvWdCWMp5EY7F9Ri3YvCcX2kkwaJuEaJENhNfWwLjnuvBtUE4RMLrc",
  "key16": "3azqxuLz764KvE1iixFKeJEgXo2agiHgfBuKBUMT1CYaquhjmJPopGfqqpUATD8JgjV8T4T9HkzmUFzSPn9wpySB",
  "key17": "5FBenBG56PaDReDr1dKodM1wXMnTdfGkMnnypdMG3ETpP3Qtp2KyM9JWEVC5GaHHG1SWyCyjESEkMog9mDn5FR7T",
  "key18": "3UzUCcyyapxAA8YoufQRxuDK4ExxfZsmqxs3yvVZmFhDPLhPzzSyGTezcszkCgiK7utkcTrTtGsCmvm5T6gGc8Ty",
  "key19": "5fV6WB9NmJG7fscCN9GGi9gBv69Deh2EWVhyeXqBahTc6CmJoTK9Rdtp5s4XTh16FiSMe9L2aSuP4y4moKL5AbB",
  "key20": "41pU1ztDPTQ3VcVi2fWaxeJ4uhEjd3xZ5kHpX2UyRsn5Y8466Pibn21hzwi5Zmr9J3wUgb7xGmr119jcCFjbFLzY",
  "key21": "sVKgTKUHYn8wRVacLtcPHDv4Vb5HSGxLiDPeZcnYpYVSfhZqXtc6cBtMBvxf9CG46YgD4QF6LGaytRouZ4cVjH8",
  "key22": "4QGGTQs2AqsL6H2Uq2Wp7k3phrL8RtCELdicNrayVFNeDNPbewhtDC1AQAiLvJgQz43HL4uq98VdSBUFa3U3q5yS",
  "key23": "3ihPsvLdtSKhbyBfyH3ThgYa8usrFPNdB2aDwSMAnSi3dQbm4SgnmufzocfhMtEKumUTP9ZpkkaQnhw2aGXJYrRU",
  "key24": "TeU7UdBpRqQDyoh2WCGXc4jRWzgGRHnMaXRPHHmdnNKsPFibY37iNWkfvycjLUKLpjDYmVhQpAgXNWvWzJiPTzr",
  "key25": "442AqiZhDa8uX5bu71jWrVzcRVb4rWuHFBMhQaM5vgq5z8os3ohdh5ZaU1Gcz56g5jzwQFbStjaJazyrNoQPHQD3",
  "key26": "2277VvgMKDPgsD9Knsqtcb2ex9dm17M5UeSo6UfmGtiH6LtHjdVUVBhPzFZ3qMxGvsqCVeBnGG6MMfD4M48wxeUt",
  "key27": "5hp5JNveja6T6DJN6MeCz4CN75RS6uStqh1jAHtUvXPzAmBYz1V8WkVWjxHmxSnEV16G1k5xQRzXeKtYYhMRW2Sr",
  "key28": "5GUsAQqoCRvh47Yk6JGjjEDSD7ZsYrrMpYzAHdhBfBUFKbByAXJ5d1a2EjJyKPCfD1w9HZFdKNdCHoGFv3fzx6oW",
  "key29": "5sBp48NGXpk6s1p7zJnhD2rsDpvxreSkkMA9bxMTo7SegRb9Z68DVqoxLMsgqeEXtdZCAEm39QmfwkH8Bv7PSAa9",
  "key30": "2HdTSWc6JCtYt2G2BdQDjXYfVGPXcbGywgX9GeAEYZMMWx6XeKmDPYAhoLdadC3jn55S87PXwYNmJfNbxhJ5tr5j",
  "key31": "4hYZAQDkfsdL77i4zLAsVjecyzsBFWeXfCZFRAa1Z7nz9YpsXLb66nqTZtADMN1zaaFaG3sL9UqTp7n8DetFwJb5",
  "key32": "3UDGStRr7hAVEFWhWjYwbxJc9SCtCdMnBPAxqDpfXa1sScYguDSnS24mkdqx7UbZhRpReVJX51XXmLmRQKu5FLSE",
  "key33": "5HTTgjFoiaYtiQQcqPLeUrBJbKZ9exozykMbXuDPqCpVSoQP54pLP5Uii6Fsau33wjnMZJW9795JKJLfbmuhhWDy",
  "key34": "eTcx1VUkNTwomN11sdWKiQVuS4963xKqh4kejdbr6Gwk9C5cKLRDchRj85qidwqV5haq9U2zmBf6jz3zk9p8xw7",
  "key35": "37DZhz6Az5akp4DCUWYctNPEQ5sBcKm3Wxp3ZbWKYaWWm7EPVgmL6AHXLE3eBKk7jkEMGnLtn1zWscXaoM6tvBeM",
  "key36": "3eAYrFZ3D13K5nxzekMDn6etx3Xm34nbuLtLBcgHxrQy1qZJqEt8BSiZHCU7qVoUJMmm7HsW58FCX1jB9aRXmV1c",
  "key37": "4u4rWqGUasGQXeBZ3G9PrYcJGTK7sbXF6wXrPhzaPDYnimeJ8PZoGUn7mXhXSs3YiHpRZb344Q56avx8bLQatEuT",
  "key38": "3D1kBvZ74LNa25hzRA7EFQgurmonhqGqn3cDVYoNSgPHsivM2K1jz1bR9KCt9aZojammKwdWBAuqEubWjkWj9mcb",
  "key39": "yhmCnHP9o9iK1FFzsdfcKEQ1XkAo8GEsd77gMAXH7fxb4vNspo8HJpVUfqmJ5dvGJAddwz5iY24paFxNAM7uykG",
  "key40": "KzMNoJX1FrbAjvEnq1mGrPYA7x4eqwCF8eeAoaqERuah1dzvLVu9fkVGcwHYZgtpLgHtCdL5uDXFJ6Cm5w7c7GH",
  "key41": "2GBGJ8HCVGugA6wkoDWkwy9RUqHmjt6QaUv3PzXsJQ4PZebQzje7Get5caN4uGYNiFduFz4MypU3YdF4HAdYMRfw",
  "key42": "5QvJfmxR24vkGJ98WNPKt7Bi2E8xbqzU6WUSPgmb6FXbNEmYaDcbzo125ofR1kuChGtktWTpMeb5EasbnFeMFMPm",
  "key43": "4FURmXgH6fHSSr7rhprfTb3okF3mVAGFC79sLg5tKV1GeiQzyb9htgKX7QJFreerjt5FF1y9jKf6nctMwS8UzFk6",
  "key44": "3JdHGAc1Uu7noKh5kNTcNwRmdfb9EKjTBPStDVL3FTPthGbfbFMxZoREy23iok8JjANMNRAivmYmXux3x2dpeVbL",
  "key45": "Herazm2Ph23UFpTdvSPAX17uWkgyHq5cMz3XB8Ao1Pg34DrxgPWXqQZyA7M4TuZNTrTavrAcPrqStBh7Lbf5Mqq",
  "key46": "5PyhfjKSLVwfdKQVa2NQrBXcKqk1mzQUzvjnmMkQA3Y9RWrrxth5cfn1ou3UWRTB4AHbpjyc71BB6ndqFLQKbAiM",
  "key47": "58fhrhMzfoEnW7G6kptv9djWASFB3NxDkajcBxETP2wX5S2kVbsNTJT5iHZZ6y22KK4C98oiCouUhbJmB8uZNWNe",
  "key48": "25jVsqbgokzoujRhbepmPCc2WP5e4B8pzxRZmdWtfRGQeuqLokbCvsTcdLP9TfF31BVcGa7MbUHg3ZJuGNk4NPu9"
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
