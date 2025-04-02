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
    "qVULNjxNAmhF8nvWSxDbzP9q2UcD4DRDkYB6Fs1HPHMCu6AzvnymLdMs4UPCVQVV3CP4b4vVFrDEoCcR97PwMU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FoCpgiswGpHYNxYghnzCcprA76CBFmwX9ZXg6UjKJvN3a4jC2A47pLKEVG91DW7RpN4qRv8J2wYwUnNC2HUQyi6",
  "key1": "3xT6K2E8jaabNa8BRRLnZUuU3mNJxjuv8SEhZSCMTzsfY1L3a2yGFPHaEvBmbnsybx38tYfWRcYZczE8WpPNk1it",
  "key2": "5zdVCfQMfyBCmCHUe9xTfY7hDtFeECU2yaT9cpDSNVt4VdZVAX4hFXz2csCbUcmxZci6oXB69p8HZGUtLMhZ5e4s",
  "key3": "4miXx1dvfsgh3u2FLGnikrv5mrkWz2vT8cykMBkiWpn2GBKPKabKzeRuMn4zzN7M9z59UTxXKQDtDbwd8ntwVZTV",
  "key4": "yUWkgx5TdJwF9qKYJdNM8V6d76zbdKE3kggXchG3wT7zFTgtBXWb4nnf6Y4X43ua3iLLBqLYB77yF9yh3iX43u5",
  "key5": "625qCzYLxZVNHzMkPR5Hnxp8RAXkNX24JnapA3Bvd9wjy7sSrGSN4WoQZV4oSrm6mbGWvxKDxAeTW6tqv8sRVYjq",
  "key6": "46MUWPscu9jxFNSw6SVcMXVvnDXWhP8yhSoLT8CbVMy4XCVS4xiSoKfD121RAkuvrRGo8RTfmjHRBs5jMC9ev5B4",
  "key7": "32FYzGCcCEi4dwhNLCrRjDHYZnWVZM8ESHEwC9y8rR7FcSqKEYWTsgm8vKWJ5qTAybYKWtiUc63ormiTiwW3yej9",
  "key8": "5VPqxHPjxC75cREez9LjfAfai1uV4pVvLhiT3vKaSpg5asSmQcANRYJqxougMHErANy3rzoCbKbJGEn9SK5qNuoP",
  "key9": "2GPt6TanW6HgUJksEDPYQbU94hxptCzHQjkHyUh2et5wxxQBReKVuAPMoFY43Ed1fvxBKWGHuWpTGw1x1sgVtB2r",
  "key10": "3WYuyn9eKYp5dVZXhAyfTwiFMNNfuQ9t248fHwg6RW9vzGgNcp9smACLmh8K5bbTycCJmnbzxVJwcBisZA7LtEEc",
  "key11": "2wRavS3ZcgRuV5GZwuLNE7gyKPDnZNSxMgMvXYc5KYzVqgkV9nLird7tyURd5jjJ6V6rwMWMiFL1KrcZdyLnjhPF",
  "key12": "55siqYe5WCH2jiNtnt44NtGagMAtM8ucG8SKdiNtA2KwBx3HPuVJXGiUcbzTRfcxgU6qEbV2iewJv8SeJcnS53yU",
  "key13": "5z2SVa3GjUsVWEGws9ArSR1yayGPh2x3jibuftbvmD4PE861oqMLLN3YKkB2n2turuoMyts21bfz34wqCZgrntr9",
  "key14": "3gRXR2w8vRSXTavM4Svpf5QFdJd8GTdGUsKA2g6SgxU3Rh7T9ETch6xpyXvdviTSpFmSsuSGhn7RdCnrjsTpC5px",
  "key15": "2RVD8kwJReX1KVqRrFCHo7FyqTzVaXq5PgLp6EfyZLEFxSSAR8j24iKU5gKdDKjNreHr4Lr2Hzf2b6XawDwpNXTA",
  "key16": "5hYrnMtX7xZQBcd4V6FWrk1Pap3YzsGgDepGeremWY91qbTFf5Ba1kvhtMVomxFCewZyN4xNdQnYzZkE5EVqB7cK",
  "key17": "byAczkSxMBeZfgGhKaLogiD16rRMCRQSig1EP4YNS8N9PTL31765AvtkAXvYFupBcHHDvd5HZHNNUDJQSXQhqY4",
  "key18": "vKJGKv2ogzTBoHTZn9PLof7tu6kw4ZVXKpV16JDgDDqVJBrTrJkEzq7pGmyw3oaS7jL7G8ZDFZUrC9GFo35aGBh",
  "key19": "QC8vJhuMDXSU86U7tqZJ1R5gXQwJiwHQMATBPT9jiZvy5N6v9akFPkYWFmotJhEfuRNMeQnpXRDoFieQFu6H7BN",
  "key20": "33MazA5ntsk2eCwFTU5j5c6fpiKwsqw7BAg7puTfbFkHVHc3BiYNui3whN9QxT1p3uhpn81A8oD9Ezje3eiKD64H",
  "key21": "5NLa4XZC6SshNNGjNoRgtonwZy9ABjnCbuRNj49c4icPhkw7rGL3DNB12r1cB3svcmXzggE5iHEgrUAykk88hg6B",
  "key22": "3K7N44oKu6d9QAkV9AeEau7npC7C7suVniZVHmViGz9UjgkwEjRf1AD5XG5vnMPvVC5iwdQn3sA5DgySws63L5Qk",
  "key23": "48U6r2gk33dCMx88i51e6rzRXv8gKZ4AeL687jhR4g6d17YZ3EnQD2WwiBoN9jeq1VuxfGAaHbzgWzBXUGcQNuq9",
  "key24": "3zSYpQFFC7sHXYdQfbhYMMNVTgP5MzUZxN8xMou4Qa8b2ZXYRzjfcrBgK8qhCEXeeY13TK6aNCABqBhJH2XutM9m",
  "key25": "3XAMMnrZDB659JSAfria3D6tA4oqUZtz8VnM3dShPdguKcbHXWqcLKn4LWw4kXxr3pPHsBvE4cFhNhDuaAMKFpo4",
  "key26": "sEsdnMkCkcpv5PygToU2jSnL5mhgBh9BratTsw9d1thJ4DwRTKuXXdpe4nAHafQXuJ1ha6yW5R2Dz1YcBumFEyZ",
  "key27": "2sHC2ikFxfi21PbhBLYSEYvpVfkrhL4eKnzbwZCDRgNdBwgympnHLqgXgCqm8cVWpvhTzy8mzpeVNV3MF38127NS",
  "key28": "foSpiQtAzusHMy8qLNErYn1Z3phxW9aA1mECM59aDzpjKwJa5EQSqnHi2oVtUfNyBW6UFbVTAiUPys5K32AxhHw",
  "key29": "67QHK9FZqkU9C7F3ePVnhYhExufWePgRLkWtiNM9o8U8nGKRKnYaWtmpsGM1EkLtCabRKJ4RAmVi5BcgQVjJ1ZS4",
  "key30": "4Vjcwcmb1V25EQqmdjAFuBmcr6vNbGrMFYA3LWc1WW12QD6MbWN7pqvt8GGyj9X2f54sChMdr1niLBrT5zNyyxLu",
  "key31": "5FeNDATh1MEYcXuLUnBoDkvAFtZ7dwa98EexDvqeDpWePcNYyMDxk81kYfzitDDyED5DRLCY2AEoZh6tXKyTruj5",
  "key32": "5i2E9bWWRHAsgRNgpHiHS7mahqoAvhYtS3GdXPWjj3wpFstDjrfNKcYhjdbe6A7WN2GDGm7nYg26pZQhgnjmqADn",
  "key33": "nRw8ggG5Yd6eKNSJeDf75zDWFpHYXFNA6Hpb3EAefpnTEBAd4HKTUPpVXxCinay8TgDj2urTthkG6ToDSWztR9t",
  "key34": "5DtqdDLAeB2MwwfngxKcfw5moSJxsaGfqNuyMho4K7vkqDE7jJdgHPEC81izBm5wunp8ccwaXP858d5w7dLo1xqo",
  "key35": "4SJATmvj2SbyU7PybgPu6RqhZLu1DCmfQyKrREekArghoH5CyLRadEUBmFDLx584VUjGczjYmj1r7fQDe96nMMYj",
  "key36": "2Lf6csb7eRhggm2SRM2erCUuK9hGR3X9wT6BgRewD5HHtxD2fdpMnBUFzmxbDHSzaNSbA5hqxhYb5g52YZ3QuBEq",
  "key37": "4qYmroDZbPRPpzWcrZJCM9Fz4GsnfWpWYS7P4iASgYUH6XWycKa3oPWAihZLD18sfXk8q1jAJHUbE7YgFM9fWiqJ",
  "key38": "3vUaAiUFjsGaoE3vyCmT24c8d77amH4qgLYNZSraTjjBsBG8NCV8DtkDB3oEbckAxKGYZjuZ1MJFMhjVdNGToDqA",
  "key39": "4d7Q1Noe2TsDx4FcSSxswBogN2tbWdzcJCQe2R8rpUpoqas1Br7aQJn6XXNHwRMG7PbbwNGkkniu12AJ7HyGGFxK"
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
