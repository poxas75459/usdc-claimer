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
    "224SaQJpQxhWwQnLixhn8wU3fEo6idxQdZar7vP6ACegRatRF3YeuueWa2EMhzmwSDir2XpUqKXjCCBEbCKJ4iZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5znZL1LtW6HGVWJTPb6NMF7KA5AwpSUMpPzdZzAsJAZi8DRGbvys9zXazLtYDnG6a3U4d2YDjfoC2FP832fnRZvQ",
  "key1": "2niquyC6DdH2otmNfbqNkmL73zkkg8MBihMCY7sb8oAZXCex8HwJKYg4h4TSSDJ6cCcPJMX2JQ2cK4X4FfttE7UB",
  "key2": "3nMRRAAHyPZG3KhZ2eDg8gUr1s1Cs9syfs6QZQJWyo5hYSEp1br6JgMF4pWXZ1MXJreRWN88QQWt7JjgewkBx91p",
  "key3": "367vNSqj7yLhipTkQpcL6NYoHTXs3Xvb4UuSoZw7kWQAWwi7ckWw5GmztGjgbxFiNo6T8oQe6NmkekdQ2udtXMHK",
  "key4": "64ftvaxYpThKS4wVzWaFF28DBdACvCRzYPRTcnFrMN2AJH384UNPX5hyCXg1neL4RReBZRzQvmsaFnXWnYCDqSi2",
  "key5": "2GJ9sYSUKnhHrXsKqwovMZCNFB9gw4TvvyyjyiXVVwJo25nR8YQH1q42RTmMH24YzRmjwbugcAeaYfYNhhq7GgHf",
  "key6": "3b4ZZtRy35Fob1wEV8LS8MYKkWYU1tVY2inb2qkSy9pMWH2VuNcBxvGoTUdgjsNCUBdnVAvV56CMjPkxKk88hgqK",
  "key7": "44jLt7VenG4aWgFYCPgLnkEVaspKxsYJ9VGipydYRs83QigjTzxCohfmF4DLy1nTX8X9SGkGqEhFnBRRSbRiwvZV",
  "key8": "2F8ckiAZduzeBhaZCveMtyM3Z9LeuCi4AW8s9YGsDBbJCGkBDxszyXNMu2H3Jt89zEAcyKE81paScRAyAp56ejMj",
  "key9": "4cdnGJP49ciE1TorYJduyFzjWD5aKGq1wtbbeYxsfHva7ByRkr4CrDP3BXnvQckjSboQtRztf33k9STSmt6QDHtg",
  "key10": "2QKFXxwqkJoYpieebsEx7QhWnU5DJLFjiU6whYpUx7vtbEm5LSvhYJhZrYQG8i6cVRMozScyx1Q5AefAYg9KbxX2",
  "key11": "5suqdBDPus4KXWjB5VmJ3BcX2La2iPWctTMcnmrnBjA9P1WCaGkYnSczzgb3hPtXA32m1BAQ1AJP24XwvWkBzdCG",
  "key12": "22bYvWaMgZC9vartC543ri3yX2KWexBGMcWmpWEkdnVZ9JRT2mEtyFKzV4dJ37HNgigfBt9wHZWTTMhN4qAMCBev",
  "key13": "3AYbRPxu8EqVjw44cP8TsMTsahCFLhkv7quhNLf8sTMNcKt3gp369xEfSHEKCaHXceGFQxPAFnzokfpSuARNu1Ge",
  "key14": "5aHRL1y6sNJjUcg4hfPU2DZSmujMpibywU1CZkYLzmCfzXFwvmA6zNUbwsqQ77YXXN4F1G7xCM3FaAFCLge4jjTt",
  "key15": "2DFN1V3zFAuKcGjRtBzE15JKuCk2E1rqzCBBWDndLE6xgbdJFFWCTJVemwQ7WEexL2tUfzjEB2ZKHkxi8rJmvzpr",
  "key16": "4n2qku4WGp52pd9txbCGbHfJSckAug4WS8AbwEddyz9SPV7iW1maZHzK1nkJJvreeH7DF14j7oSHEtBtSgsigS1a",
  "key17": "5ZTd6tHZsojxxEkVuvewkr9vp7HJU5iYkBX5oAsHW9suujHpsrmf9ANVYTt763zN3bhDmALp1CovMDeqLp4XjSG3",
  "key18": "2tignNTg4c2HHa11CCHwT1uj8nRoqbdTW2ddSG5J9LVUVgbkeorhvDMNgWBgHYHKu4fkrHm5JSpPsoqXxMjneKAu",
  "key19": "5auYFhnbu8HUe1icFfADdx1k4Vo4KXGgi1BsBnGvDdTk1ksDGsXPfkJ2Kc1JzuSGVEMfTTf1S6T3QcnUKdR8T1W9",
  "key20": "3kmDe6iknA36vD7VaHYfMevUg7gBCkKJdrTrdykQSmswuceXJ12wEMzVb2PDg7rq6dWs5xtDepgYrUv1irAWs2n",
  "key21": "2zVRgTauvpLhTLxPkmkqLdfbkqbNNEeGdt44dF6F9XSW2uRNKehsV2UadWSVDA55NrdJJJmAgDbNiYkE5UWtaK5X",
  "key22": "QbF4q64a9eMUyvvyiskuTTUnWkHG9tEsmYKJjVL5wjYGTseJp6y4ZgGHqYXWZTijWnZHpWsK1rsBLzs4UKmi7VT",
  "key23": "4jy5rWBzkbPNRL8TYayjsSzNBjkEhEWUMEvSFCBoHgeq3oamSGq59CJYDxd4eMbR9vJgfAmMvn9qQrqN647V8rpj",
  "key24": "3t7SYv1YkqH9g9ZfJXTjaBP3wJMKMHV4P5cwUYtJKgvBvF9ZpndocwQFVkjQd8NvdSK8iTsg6P21J9sRWBXckbMQ",
  "key25": "cni6jdL4ZAtnkxjqHke9uLMXmtDZttNUgzQ2CN26jxgUSeRzVR1hjS8YDPWnwWgknocMV7HVuKtuVhJ3Qr2uTX1",
  "key26": "2jCxcvUCFPVQd1bAkrhRQ9XdVdHKsgVEUJ8DwYUGoJYQtqxgfEcNa1T6RvYzd1sz3nwVWJ3PupNGxFVZa1rHhK8n",
  "key27": "41hD2wAXbfuSg2ZZmopYey4cu3X79KHSGJWsLsLFw8QN7MDdJUZBimjnPw687VV6SdA1cZ98V2HEs9vV63G5merG",
  "key28": "2TJntGXvXrs7AaSn1N3JdXcUcgKqwoGMUNVtqFuAjMZBc32bggSgwYrYtg9W15saJG3XB2EBQL3ftmPUsQbEXX93",
  "key29": "5iwuGLkBx9HH8XPC12edkJt6iNxBhTJQAHjLu6PzyThhoGv1uodRTimK9gnzBRfcs2uAYTZ1JB6pyujkCYwAWgXu",
  "key30": "wX8vAAjG4qe7ePH8v9RWUhGMHSNcEp4XaWrgpqXjAEEtob2iJX91VBVVGxyp5pL1cg6SHSx3Cgm6wj2jzvJeihy",
  "key31": "2fQu7aquMzGN96p9BBxhjBzSewDt46fcuxR8wVEfXg1hHTyEjCCjxBVo4ir98EY4tp9ArxFZZo5DK19pzuSWaizi",
  "key32": "2FjbGkkzYUXrHkZJL4zJdkNvDX8dNyEp3W4Edv1vK8gUzMQgWLLkVYkbJxzkZ7MkMEQWhSQ3LZWbkv29UBKsnNZZ",
  "key33": "fRwgNSZ2JhYLnPjV9CgAY1JmNuzi8fC6n7PmRcnFXXEyvmj3xgh7hz2HaaYt467eRifEGgr5i8EVt4JSmMLszZh",
  "key34": "4HYBNkbgfCJryHmWWAFv47QL3JwF83FGUnfz1cgjmhFgcZZ4CWYzkbwrRJDgNp7x5AnN4WLcV466cMEqVS1RYjCj",
  "key35": "43kdFwd1souLrp9WLmU83LoH1iu54fHSty61bXg7eD9KGZfU3SLGdNu7KNgM8WLM9kRQQe26fDwMd87NYWtdhmjY",
  "key36": "RjJ2ioRb9K5dHyAyJ8ToaDGjfdzXyguDAvLUf4GY7fh1YN6oBN9KRmQ5Xi6wZ4cxvhgrZwbjEcJ7ti877M7XT5D",
  "key37": "5ttE5BMELKvBzcHvXDYrotASorpMB5xm6ZssrujxxTgT9qga2xBXa7uf4JJ9F1QjicAELtwnpQqxgTv2f4T61vYR",
  "key38": "Rir25egPUB6C1q5zXNv3HnsSxi3ADxvmoM4YPbTGdz7CBzYUNPa6ZgSDucVT4v37xCvNfbHHMn3CfnpoXE8A2xY",
  "key39": "3UqiPUgTmF2p3T2xwWrrcTR3MkgEUbJKE4u9BeJ4HKTjxrCULv94Hk8uArdQpiPgapxHYdQg26cQLo6LHdoL6hwr",
  "key40": "to3h3SXHJdQ3Db29LbAVeC8qWipT3cQr5YeLxKCT6j9fhAA1LwgM9hwakVazPr7HhN6jWtptw83S7NqkgMNyU6d",
  "key41": "4Wz63r9cP11n2NMbhD5keTC6baQC1BFT6BgmaQLZ8vA6QbrWKCxqBL6TGFMoRCn1SpAe2Y2N5FB2z5UXCNDAMo8b",
  "key42": "315rpvTssZNeQWiuAbULHAJyYHeVGt5BGdUHzcMMofNcnrpfVmhd2sXu95jkmDx31vEHdKohhkBWs8RQod9Txse",
  "key43": "2hcK36Yq9ua6siixn6pzFsgJCLxR7SwguFCJRNw1NABr9WyByNtN8wBkBu4Ph8Aq14WfGqHsuAMYSMapMpXkU1KF",
  "key44": "2ySBiZKBD1xnPhFZL5zpcSRdcsTc22te31ECqbTYNtHNrNLvdDEHANjUSHpF15Q1xJJdu96pAZC7tr3GPZ9mqwdj",
  "key45": "4XJFXd8dhwD3gVCUTimzbL4JPDTrWRiJPaXrTCKNSznrNbdYXHviK7HH5Niivk5M86x88krds3v1Qx3SytRA4RcH",
  "key46": "5cP4S1YX6cKjC3iWQodsEUMG4qMX1doausYQkqaBHSfGamKNhHS7qfcT9HZ5MJW8CgxKa16iNXMGicUVG667PsDw",
  "key47": "2Fby42iPdMSsKWvgYqEu4Pbs5dha4BhEmZqpAk9uUr8SFrnBfiirMYYPNZfJhWDpDu1qGjcVmKiSMjMFZGVntSc5",
  "key48": "544SFh8tfdbiQx6stGjDVQT7d6yg9TCJBrAZzeuoGQZkEnADamox9Z23QdcpCbv75yZMQqfQQqvyvAG2oNviopUs"
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
