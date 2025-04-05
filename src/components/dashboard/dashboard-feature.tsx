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
    "5XyobX4uZysrpKWuHqkGMcc32zJMJfcDGN5UKAcwGPE15HUvFVLPfPaeWQ3agiYVuGKVggdRMnLNnfb2tz8789As"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RCBRmPTuvKL3WXmeCEnUgkSEWhL4bGL6goURgVuZ81fgNNmVeji5rvhP7esAWPZ9zdSP9koArUGwRW9oWucoYxy",
  "key1": "4TJJhKowD19hmwiZtcoqaJvrGQBVoTyyF4nDq238jQFAyK1C9wuqztUKLUqVytLZtTNsTtP8EvKAkvS8KtTJ3fxr",
  "key2": "3YkHWYoXYk4rah7HWJhcCRcb7Dyi5PhJUwrKKftuMiVT4g6beMpLKwzx4SN8XXkPqni6HQFP1cVXaFmHYPrMpZFc",
  "key3": "4WKKqQkBQZJLB1b36kGtK7s9GbnkPYVeErrsq1MqRsPp2HUXq1SGDXU3tUkjk8D81Wpgc8o8JNsX9SjeqpogVqTH",
  "key4": "3pYNpmZwpnXEKS3Ky5g2pTsfACFa17pjsxnjcGVQkE3TqynUSuDUMPZ2gXgXvqXtPhCJfzL8sY7ZqM3zskKMQQgP",
  "key5": "4RAwRJre6vU57yVrXH9Dou4bJCmuF7Bfc2kQUGrLdiqUBjsPycXxXgk4s2WMr3WM7c5enuhDsRsur1MkJ5tb9nh4",
  "key6": "nQ6pKYdCmCSYwzmrubRZU1HhUVsua7XZwbfhktDbN8hjH9Z6Nqh5BjEHt2VqZKgN2mD4zAYP3wpMFjng6LprDcs",
  "key7": "3i7LCRhoRAszVxGtMAWK8HoWReSTgqMNCvnmHh9o8sCm5UUBJt8Ko6QCNWVM3cVyckoU2Rq9gzwWyMPNx4LHShFW",
  "key8": "2fzCRmn1KmZugkB7gx5WMMjjvEx8HCVWz1KmciHeoD2nQmXpFUrW2ZoGwrFp7DvPocf5m8mbjdjzbw3WNoy8wR2g",
  "key9": "4armFhxxf7iZBbbXrBAViEKgr71zBm67Yfi5igLBqJdGVLqWnZXGCzEQC5wNPSSvjWjHmsRMBge7gSsxqNqCnpxB",
  "key10": "3Va9cDo3XzXfSU4UEDCemxaDvUPEkLbiAy3R6SFhcKhoU7XpqqKQ5VeWAjMX7tyCs2cRknhUwJ4ZS3M7fY9XkBcM",
  "key11": "34tKATHwjAvKBrU7zAuhXQKtBLXt6MomDBYH62CXW6roU92s7nps6xCQdiuX8eyxcdrafDqkDacKwi8ps7FpvdhQ",
  "key12": "2GhuTVC41F6GMR3E3VqiEdmdxsnSh7uHdThav5XE7J39zKm1pzUkwrsSrSmo6nHMZMja7Ypxj21FTJ6xGj18mdAA",
  "key13": "3GBjRNoV7tpMhkZLh2ijEZQNCfUpzNmkphVVAw9vcahKGTwWrzzvKehMT148tpPW57xJufyUx9UPemgxC833hZnY",
  "key14": "5pQciCdww23Jzcyq34a7hVSGcQs1L1zNzDgWQMcJLL7tsgLx2Unx86Bt4pFryAutAbTkgRhaLUaL3bJM2Jd1vfc6",
  "key15": "38mKoNKcwJ4cM8s5rsvbGaRZgxtBspKsQCrH9d44EPhNUuQH2c54F8VQ7nxedJ4sd4sj3eozQw4sn7Lr89rhhnfH",
  "key16": "2vPN9AUJpvLNXwn6JVBpf5az645JnLe36y2FDziNn5BTMqXwsjAD29XSUvJG8wFkpRtFLMRyTvBtRg1LyG79NU8D",
  "key17": "5NyiGK7GDeyCxAs6kGZA99AkhT4grFYZsfwjPgTRpJu59bRPDixN4FCvDHH4ri33dprUH31w6qyvkLcCXLjMHwKw",
  "key18": "9H1A3YLLPvAc1QrtF3fNYNw1mhdVh66yu1Q6PLSSdggDFeB526FMjMrgKyjymQtE8DQxsDTDKxnmFWkunoYj2Jw",
  "key19": "2GziAiJ8gJU47PDeDGP5pNwU1K3q9FtaMadx6cVPsqDh2rBMrayTAwMLms81H2yG5CBvnqyPGDMcSfmw88mEcZrQ",
  "key20": "2ecLL4imqCoQyQWAaXuybJMTXzGp5KCcTnUs8aJb7iVoZjosPTyoA6SZfD6kBA48Z5LjuKMAueEzvceocAYqsagr",
  "key21": "2ymEZ7SmbZfsMjhrgdyBXKr2x9BnnZu7oJd56vTTQdHmDC5fUYj4y6smgbF6y9TW87n2voj45hs5A7uTnb7orE1f",
  "key22": "5oLExggkWitTVqtx2KjmR82RSYkf5ubsBuam9CdreDHhPxBQW4mo9Mwc6SU9wbEe6EJGjLpPWW1r1NdYE5V3Myu5",
  "key23": "6hzY61mAEh68x1nvW95LhojVKRDD36wy3vKT17JnfLny8yg4tRrbt4m2FSZ81Bpa2qbCcfVnFUqmAJpqVVyBXeo",
  "key24": "5Qwmn2eYnxiWMEVUCzKo7iURG4LMQAXff7HbvrxvYPXvBwe7fo9R1UVpUp33MvSxU6KvoRD3WxT1PwdGDJG8TEWL",
  "key25": "mPW82SiZKZQwuVPqNfz2V2c7Jd8LcDBHzk9cnU2kcJam6p3DwQbd8cJv8FkhALDj9w9ZrcQTW5JTumQ1cSzGzmW",
  "key26": "3j8UPnbkJurdbEMHrsxErakuqJT6tAbyDT4zGBbaDt5pxsc7VGD1DGCVxLuCu3ikUDw4a4bXsZzqHwhCRJFfRKU8",
  "key27": "4REwDxQxbFymgpgU3tQfGBfzQtazwm3hTcuumcyQ9qDeQocxcqCyrXJJj1XwjcXotkqzi7NGbq8tLoBATaEbPWB7",
  "key28": "4pC1kWxjWUZTRE7utUwud1itT6fGwK4GowVe9JYUKhSQd9cfnnnxmPniYecFhWjsvnKnHew7dFtED6yWygVDrzkq",
  "key29": "2mXdp17vdUdzeqDHAvTfgK3jMvf1Nq4LV1KswAR2fbfSGdrFvi2qRmR3aPtijgccuFsXgaG1Jz8atGvXxE6ED93r",
  "key30": "paY9TnqifTLR8wnUMoSCtyVMuzb4LnQTsA8zFVqk7AmGrPgCRWF3Pcg5q2Fz3fUWGtR1WMmV1Z7rZ3hA5yUG695",
  "key31": "24SNPtfChov9gYWKvq6zWQ4J6xSazcG98NnKmtHSbtKHFyw3zaN1GDaBZWNf1yRmmkLJvbH4V9HBfXDqDkaGZQTx",
  "key32": "4wNnSknTfxJdB5oGff6D4sY12fWGyVyucdUknoNvTXkmpTPyTqEKJzAu3qoL9hUVLeN3Jz5GXP9chmMeXPMEoNMk",
  "key33": "4Q9tmnTyD91AKMB5VyQ1VEKyVJFwQm4YSoawEo1fUkFQvzQvUYnHyhCFQ2vtYwMD4dQh7MYokbdZFAnfXkLUoLt3",
  "key34": "3bsbY3nrLxo2FCrKvf86em2nTteQbQqBZJ6CSZBXo4RBEvf7Uz42SLE7xEA9YVpJrWe2CuMPc7E9UZoHVxdfyJkE",
  "key35": "2a6xsVbjDEamJydbgyShnD9infLm1wqzwojR4TLEjXLMNjjA2LSZZpRV7X8xp2wWXR3TnrE51AeUoTf4zmxFNKCc",
  "key36": "WBLQCDZCvq9HbRzjcc9Wavg4nrhavdvqFJusLTCRaQ1QxAikmPNveYnfbwmFqRjXC3o15sD8GVokLSkuibZ3aZe",
  "key37": "5ZYisKj7honkrP7YDmoRxtRzuUu9RtNQfvQPy6fmFfiuD3guNeDvdC3Qjkz3mb5BDsRZX6ZJ9Sgr8vN6RtNZwYu6",
  "key38": "4fWH3ruKK9SyxAwPph3BTYYaeFnka8M47KqdyVAcAVvqzFwJE37CbrfDJmLq63ZJHHvYuaMKFV6W5kf6CNTGFPHG",
  "key39": "38KWEgZbAphZFHEuZwYzARhE7xtcCgAKR4ucKWddt2GsMFoikMDUejpgchP3X4tRfoHmiaBwHfouBCZrAcXbiYg1",
  "key40": "5LUy3P7ohqysrPP7qD3LSXXtsK8i8vkoYKLPhLLxV3eyfJ8XUMCtXEeeeXRqTydkbvK32d4NubnHG6HnD2hepoSC",
  "key41": "4q8Ha86kEWFHwco5rV1oQrqjBChS9TLxSTCCwEmUS2EnetFE1P52NccRD9ehyvqygqxpMbwPPicrJ7tAuWVqaZRh",
  "key42": "3PDKr2gqhFQUqbPY2GR3d38YmYSJ62ExZj2V124ziTMmzzYXfkjAN9Zvc7joVB3rRkNYFtzUvPsdjs9UXCfvbr18",
  "key43": "3rmcZtp6m7MiuzpN6Byhpd1wUWJX2keLZBM36hwyH3vW4ZnFJvUGa2RVmmTzJML123VMxg5f54Sa723UNb2FH3ib",
  "key44": "4xHu1EZZB2PnQSpNUUpLmTiU24ut3kTb8eGJVhjkyN7KrtSecytUT2nite47ktoZ1PqHZNWcPxT3yEGEAr6cqkVr"
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
