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
    "2y1vNk7WweHznoqRQd98TJ3VTgYveWz4Ehq7ZoAbQ9syna3xqpQPjMdp1426RGTU5KtHsH25bvwiM6wLMT4FqSBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uy9X4jRGjBQmvykqv1xFhrndw7h6wTvS6FuToy2G1mRRaZEERZzonkkvDycrgXXHuEcXdfJ4jLyjcYCQBXiuA9y",
  "key1": "3tyvKfPFPY3k4u3vokcsgfRju4ZTEBoesGTRnkPPUk2RRhArRi6Asq8g9JQyA1Y4qKjBJkUmfo19BSbX4rDMrbuj",
  "key2": "46Nc1EgFeAJ1QekC6H2EqHU4xLjQf4APuaRRrnEipGmw5G2sf8HrzHbgFHq5HzvsXhKAepJ6Vb7YyiywDqChSy4E",
  "key3": "4sYXUAs6jnXdDMaRVTn2K1rnq3CJ8VBtQjNjyW7ianKJf8Eg9d1UKM1C115mStjZpciZDo2QF3anV9ZZfNnULuQf",
  "key4": "Be7bS8LKREnx1SUwcoAHyPwTJCFnpb2SpRiswfR1BYaj4ghv5F8gEJ2RuptFoQW8UyXScbxkY2RsJquT7H33Moo",
  "key5": "39uDpB3CpRXC49TseV6NRsX2iD8pcYgELVvFHLsM5ZR4JFFnHm4Et65BE6zWFFiKJwqtQgVKf2Ug8wbX4cduixpX",
  "key6": "3VzjvroQPAQpJCDgua8cbPZwUM77kzMUw95tzGQc83LspKVbD9EJZrit48Yjg7Wq6y9ZhiFdjfv9ptuBygKZ9mdX",
  "key7": "2bQmUd6g1Dj23DSxD534agvKgtToXVHaTzoLhGTZEp34vrhFFYWrG6s7dffKghoz5dd37hqskDNgibVoLECNRmHQ",
  "key8": "5JKy3qomxaTTkCR4m2e5jfVQSiZLnvshe4i6UHovqvYEswHR2iegkZKvZSi4VJSTd4yNH8fmm75SHg8fAoa4HUjo",
  "key9": "5iDFw7Z226eVtWZpCFKDu5Dza9abvhtAgdDRxxobxnjSFcK64CG2RxtvFP4zR2vA5KsXd6iNpH9sHQiKUKJCe2Sm",
  "key10": "3Vj2uxhoKf6ZSDTdCY5wUwSFWVdyqqiQHtXCzThDHqGuFEWa4CyJGUFsGqUJMoKhe6Ee4rCQUc4guhbfPwU49wYJ",
  "key11": "5v8F9QWcLHtene4ULWfzxiHpF6zoMSw5auwsBPNzPisDULzCP6qdMfUfDN3jxYER7eZcyBxq6kbLF3SsxfFBLSFH",
  "key12": "2KUrfNeGWyZpV4We9dP1oLgxGgFHhKu6Xc2sK3trRAzSvyAbU2p2cPYjr2Q5ocqEe9FvRWyzN9Yp5WckyiMJYUs",
  "key13": "5wWW1zAXuQdo1CxpAu5ofDPQaXdidqo5pfcLjkbkYPR5nrAreYiwb9SUnG75yCuu74rH8MggoGMR6p47Mq1pNrL4",
  "key14": "4w8RBSud2GGE5LpseVK2atpyNigwfUyqt5n8tg2dRC23XcUrEkAML2zHtJaUTYwwKHJCvHdWTz6kxorQcTDNZ4xp",
  "key15": "4L19R9ZxwTVjAozuUTeT8csbrTWVksFy68oUrETafnC62ErJHwC1g8FfJA18zFbGPFyZXMgyrXiY8BBUsS7hBkTe",
  "key16": "4UoFWu7U2g3FoTqr43NHD5CQwSr5sMN6z2jjFLnPMMvjx7UYPPLZQ3Wktq1hSLwJkZejdq5aBo6x7GuHHGmkxNM5",
  "key17": "4mJXyDgwqkhN9YT9FyTFAuFZrejuT795egXscRAhdxDA58u5811hMikBsDPsaNep4SpxiRcV1RntFsHNgGmxivmi",
  "key18": "pN9WJM5jVVzgZwtFVsuMj5YEuGJRBs6pvXaqNWyZyPHAe8JAVPGpFCqiZPuAJATWTL32Rn4qY9DSqWJiPRvTqh7",
  "key19": "271rsBaY52oftXvz3KWeFpqJ8ZYMJRyMhj3x55GM45j2pFTHGqVnx84UdNvaWxe67fS6Nb4VhSwaSXTVSqMbk98R",
  "key20": "59N2jw1cpbikmYcpdp1rQUrKMeyryNnSjDzPivMRaeYVSp6PYqW97GZFjN3FNdkcGfywxB6Vmn6RuoPQLdcTHmYS",
  "key21": "4MtqPg6evxGhdKwsddnBkvS4DWi6sMnbKuAB7Xpbu8NopWrucfHHcun75x397oXR2MF4fK2KscAuoZHKxffATihq",
  "key22": "mLncQjtMdSH96nUYZZTBn3SzLVXGiKUX5CLhiPJikZsfUth5tzy1K7qkY2p6cTrg7PNVfZTg2e2VFcvkkMv7Ci2",
  "key23": "JdEfaAPjM9wzdif7AEXqab5rDFou6zgPHAV8QTnwBYNBWEA4QeUAKCMUryWBpK2zLoEBb1z4Y4RRDYL8GX7y77G",
  "key24": "58zPebG9svq1LSCtNhPsgaog8yvQT6dcMXnvFAgERu6sFSnhyN4ipK6ChGAy7D2Xqa2CnbpAYTxDj9JanCmaUUJe",
  "key25": "2VfcPRkSJpFCZcceSuhckuUpKhGv6ehbLuCwKKfjesNfE2ub7bdNEzEwDHe3wwkSRU8PAWd3KX3BG1SrN8y1yP5u",
  "key26": "5enDz8kTbSd1vNQkeJ8GFRVe4dgHea9vY9ZNYwLfs7Y77XbjogyouoMY5nxiBcnS6C6uRGrAxTeDhx5XoVGjivxY",
  "key27": "2i1ZQ64BqYH1k4HvWHfDg6a6wDPgUMYfxoi7fRFiNaBQEcebTTrn7FzuBqvdhWWB7RjdDwqTbHt6CB9aJujC9Nmj",
  "key28": "3tUNU1Qxi1dJ7KamTeQrLCwnfDDFWwEJW2JpnX3SFyZF5DRRf32rpxhRikqTXgp9iTHoyhE8P5QQrbaF3NkNFFBA",
  "key29": "26TnFEoQkiLf6J3goK5Q1P81LfEyFXfqVMmRmzKZBnwcFFVygwqkJd7ELhd8a1CgyTAy2X2YErzYysEKNTk3AyPd",
  "key30": "291rnYQY87PXnU1eSr9uUiZmC84CFLQdkGEmZqdG9FaSFwsjELpA6BBDp8uLdfMag88hkJULqknb3F7suVsUxaPq",
  "key31": "2xeT4obM6Xga5TPmfqfcoV2UWo5S2gauNRpnorS48ZArnHWzmx2RM4MEaofvARSwEVHpqG6a5RKXY7WuCkuXdb75",
  "key32": "2JnYdxC37AQihdrR12uaWa5hrGrchFVYVACt7RcRK2q97nJ8T4wA6MzuQJBwb5p8nYnTxxbjeVBUSFffEo18VPVi",
  "key33": "4RZDy8zB47rhV8XssNydRoUGd8MFH8mTSErMZZBssjVUmPeXKYPD8S9ZmMzTq6jyPRXqUDBKZSgBYEDrkHHiFc1o",
  "key34": "4p8ZKHvZ2JUWBona4ekC1ARMw1DxzDexFVg1Wxy5g4YC1SzwxgJ5SWYZnkq8FK2KubxcV6L3s63Q4fmpzRPCwSP",
  "key35": "3SAYuFiJGh2pQQR2CQh88pGGQ4EHuwh5L4Moi63puuXJjG3sqpJ8F1GCMh4EPAsgAmWxpvjRG44Hbx8K5sHXtcNk",
  "key36": "3ZahCW5Y46xDFY6zP9q9GrcGsf2fhtrTdNUSjmPNYWC5mYWieaNCdNotQpSCzWwgAxpq5svXAoa5qN2TVWpQwkwS",
  "key37": "iEspu5CZ4Gpo3eDiBGkHFATeDkPSrA1evjib4b2yBqhXoWmLWD19cqzuGKz8DUJNYRUo5rCAg4mivZ28m6EFtP5",
  "key38": "5XNMdpsZcudxKPsNKB4bPPdj3zy2Tmg9r37Jtw6HABWqcRLF9aiqfh72zeERNzbSBZ1zds2oM35Brb2kmebnRSg5",
  "key39": "2uoABvJH4Cj993JfCpaWjwkkxZY3wKUczEW7mvA5pdqsPET7EsFRE6YAo36CM3S6d1Jd8VuVZsixJm5V8rUaHckH",
  "key40": "5wc7pQL66ur1wgj5khvQXrBi2tTsEFvSLZLzRDEK19jCXPTeUnAfF5c3tJwK6E45e5emaFUQscssRLg3qu5WiS8z",
  "key41": "3LPtupbzDH4L3Dqvay1H51v1tmE1sJKEYGsvzRnbAXohYmjQtLCWB9Pums44xGp7vurzkEPdXtG8E6dmiRCji8U9",
  "key42": "65w4hQFLUyxcvo8LLYCuREkS3ayCL52XSvQzALbn6Uj6yZwM8fSWy5A7DAR7idPYr4xugdfi1ju1aEwdU7WpCMgk",
  "key43": "4B43YM1fvjZSESRkFizjjpcsdFUVPCc6peSfb9w3THB9VUNi65ELYeUDV8etjrCofjNcxyA9P7DyeBVnjrMKrin7",
  "key44": "31xYFZx4zq5igtbzTLt3fBhtP84wJsvKLuFnieTVZhqdN57baHfBkR4jHNYXVqkF1r4mCg67UBhmfq8GF5Cx67Co",
  "key45": "3Ldo5dhmY3pR1MBdHwrTQ22B6h1ffhTgSrS2wfRGtdZwQeEbu4drfm8ecoxKLvyi3zRjf2yzGqn1d8XwkYJSzMXB",
  "key46": "bM2LNPTpVH18dZ44eYKEc9AhY1SMsH7kqdBopRk3fdLhgeWGhmAQnybFpFzG7nHTcDy1dDnnMSoWngJc6skXgdE",
  "key47": "4faysfDmwkr5P6NdSsRiaoinqa3Eum3yDK6Hu7CZP4QzeUTR6Fe8rAmFtsGpvNk4cpS6LW9fqWRTEVhMVQws81ko",
  "key48": "2ykazY67RamYdrZ2BsWncwzebVPcZtCakGvhqdFUZwvB5DTdP6yUiozJjniMeBXJM9WBEraccDrJu9k3gcCYm1DC",
  "key49": "47eQrMdCKztFvL6jCAJEnj8TBmRBcbfQzhHpYWYq7nB5fEodisJC1EW3toxL439PeGPMe3G9jhiX3Ujn3MJMDHgD"
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
