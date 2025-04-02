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
    "5sDrn219DswFLZRGMseqsL1jTMzQbAHMGbBLLuutod3DeA6KZvbKXCsNTbssjRjNcpcwCLM2axuJ7nkoFe4hASPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TRHBSnv7b9s1k3m5JCrHgC8jkkMosMhqQyKcMn7eSddGdHNWsEmZv9wEX548mohQ3De5QoAa1Zosgyk3GQUm76Y",
  "key1": "3sn693vDKmGtjJdbiuceFvwcTn8U1nybZFuUKqGftwheLk3hNBKGn1YUzZTRQyLPbCLGf3SZ2T4jFPSkoGVnk2bq",
  "key2": "3LGa6gRtWev4BVja7DeiMW96LCYRb31NPtoQ5vfyqXrobyZcE9FCm29WkHjh5BNc9jBZ9MptMVLVgY6484UQHRLA",
  "key3": "3u2LY45apfEcXhaMJat3JtCyLqx5VRyaESvqfd4MsZoSuRbgNXzCYzWAYh5ALhdUZosKDbFRe5i3YDFfFPsGgC4N",
  "key4": "4txVWDKRSPPXFMpoc5Yjj6tBmESpvJpanmWnYKLRtaAMQFFSw3H2R9CVc9xNGBTQK1QXTJZGGTWAeZXGqcocgjjs",
  "key5": "5zQtYEMvPcscSUCbJDtSH1aJ5GvJWkvA55hiYDLoaTipmtopEAdb7VPX4XgCNYTnyjmnynTbLP1eJjBhkSRz9dXJ",
  "key6": "34iZ6QjMKYxALnyVjyAWY7yBjmY2j8xpqveYmhsqqt9Y2gkcXrUgN7icqc28JEpZgS4rDfAMmcUiLmZvoXhQkecJ",
  "key7": "2M2NDQKj9ZZR3DSMfCZGkyLzfRDSZFfaxdtmVjv4sikhtYYBXoeb43JoDmPLc8y5u2E91tjd4oKE6bTw7gaaSLyi",
  "key8": "5jZ7TaSRStuRKhLGZ8kQYwdY8AVjGg2uWTNPdXQasthAg8Z6WZDs34xWYxrsYo2qxsRrFhRgvejySvzMxTV5oaWp",
  "key9": "6HsnfCjZRMCcCST3kaRSs3wt98VYiswfvZGPaMGm4QXT72PvgGWxxMDWPa7Hbg349CFPK9yscXMq4C73PUKBKTm",
  "key10": "2J4LGLWDPr6GqDkUq8eVXqA9M3gPdak2CXWKJpDdH3XVUrWLFTB1RsY2SmmtSW3p7fLgCTaDnyqKhNSxydyzSDng",
  "key11": "4nkuqxKGqjUsHQiqKt1eHmZyc9R9db638HmRXcBbaYua4kvsaCc3tat9ascWMhr3qq8AE5wZHnv4v5q3LMzK1JqY",
  "key12": "4GsBXqUGkVmxfBbMSFGY2nGnoVfDdxqqRciWwiL1VePZEkP9QziAgrj1RpWVZwkwfwXnHbF6mUHX4Ad2b6oQy7Hj",
  "key13": "3cd3erbYUHSSgkTVCK91KykdJW1cJUgSTekKXArYp8W1qeHAVGECYwSXBHHZvB96JZzTuMH18WTuP3LpLwBTdFqP",
  "key14": "ubbzVNNjRLS6r6AVyGza26JgorD62RQTiJ58ZixSBMwBA6UxanaDSCag5Fz9WLgDzb8ki1GuyvbfBDP3dJQtBHe",
  "key15": "3yT7Hb5eN8zTBjgQRXApg1Pf1m47L61YmJgytb3hJWRujr4HHP25U14rUsywH5EcWJJd7wH52wG1sdtahLcEo1Rn",
  "key16": "2fJusYrgZp4JnX9Qr6WGMQtFnzebD4GX7CHE3VRWrDjSwrxi5kEJp9bppt76SzqRYgUQ28DUysoHEw6BrUC3kMMp",
  "key17": "1YUJA866rZmB2UZWgT4B7PCdYM88SRFUX4qeC2tDozWvCc67Y3LkZHuEESV3PWiUWTqE5wstTB6vYftjGeyckjt",
  "key18": "yagBPCqeVenyDyRv3gdAeDSZZL5S3jgE2ybf2i3odAVt69392xqmG9gpX65astqezRw4V2opkJDUb6RUCGkgw78",
  "key19": "aPg377Ms1NLDP7NgPJAH5jgtVN87HFKfuN7BjJ9TXi6VZe2ptcw9WaCAheUff9ckD8zpWQu6W6Erqv46kdUQPWP",
  "key20": "55YTxVYGQu1xsyTgdrFwvJGW3Crth91vvnFNduXe68BasP1Xu4QsfzqmGuHjLsTqG4kvhzsN6TBxDZ1HKRNYAADj",
  "key21": "29RrCwKXArsSwoohucyQMXDBcYtGzCvwjpiHJp3xx8PW7mB6LP4sCZGVovdTEfm13dgTDTbEJ5vrpGNgDPBgryKS",
  "key22": "4NppPTpwNNR4pGsj66jrVewWKRghoVvUuotXf3pNLtmKAb51ynwaxkMtyFk1G3KMarzVtjacL3UhRwquE7ppp6yN",
  "key23": "3jvNv2rNZd8P3fRYXmoouVuHBEG5kfcXWZ8eci3wuRU79QQvFN3UirvZ7SaLacYBZyc4jpqojiJoz9usMEep9TG6",
  "key24": "21ZykwAYfDxWX39vm7kQRmKbmoBRhwEqDaM1grkbvjVmNzKDwKK3YrfHGnTqMBoqZcqYrsk3dfLZmozUm3kGf8GA",
  "key25": "3zGqzWXjrCTX4Kx1xfgN1LDJpMAC3jgCW49H3V3TN1FcZe8VUvnxxSCEhCQDYXx9fdZ2aQs5U38dRSNsbPTWg4Qq",
  "key26": "3AfwZvpKupvVRs9vGSwSYidSnfRa4c4y5me1A5kZFqyipP2mpDnFZfEfdk8pSd4KPdnoNR3jBucbvH87LsmRjdxg",
  "key27": "4cQgZupiXhkR4at41C5xojAcspa8sfgyWMrYTTLhY1JUAyaj196Tuj92NYdr1RyhoV8pmWmwmsxQEJFCedEnoU88",
  "key28": "3V2kjSWjJ2pWyFjT8hnS5PbnP1AoBJLUeS9cshGQFcBm289miEHHXEBGHqzRcRukLZUvFHFsEmeBpnPPY3pDc1ym",
  "key29": "dNLtrV7Rim4zzvG1Tn5UjmzGwy51Ua2b6mrwhLa23qQcYhSY6h7rtW34UYCvxMsQNMBBupu8hGLprTnVVFHsqEe",
  "key30": "4i71nPaszJrjfkxbVXvpPEUjWkdRUAd263sNET8XLdAYpynMFQkAyam98eLcP8QoGdyeFXyfFXYATreGgw53ogL1",
  "key31": "3vuDqWFBt13vZwx2AyGAvDfve3gyKh41XDJTTeJNtpguXJRsU9NtEQs8Xjxu8BvFuUpAy5sLA5inamb4Ho8Kyiwi",
  "key32": "2eEHQuo42ytzxRs6EdU9HPF7RkRngpZ7LJoaVQBvE2KJN3BK5poSmdPQ1pGgD7NoY7XYJsjqdrKaZ5NpaWQSgELi",
  "key33": "2pCmKB8crsPGXG22HMqbD4xLezt4Jyc7eFhw6AT5Qf9DBD5WwUm5rm4NMVWXS5cGX6cuVEFfN4DpFisePzTmGEHR",
  "key34": "4cnGcZeFRAYhx4CyE2fKq1SsDm3V7YUf7VWo74DpUpNtVVzDD1NRk1CNuuGixAGRc7kmynNkCdfcKvwKx6SaSXPT",
  "key35": "LYMuCvVBqV9yJ1KFkdxykfjg2T7wZzNLYMFHG38mBPa742ffToZM6vvmEs4aE73nT9hFCjL7Jvrd6r336SHy35J",
  "key36": "67XJhQ5yPC54h88TUaVuHaeoeQHJnRRAq9sfn1p85K4SYgX9ppo7WQuZ9AsPsQaBcr9aXnfSXhKTGFHvnFWxBwUF",
  "key37": "ACSqNM6qCXtb6hkKLpEyo1yx7CERLfiQBjQXjdmaecvTtW4yczj2vZREx1My1eBkQSQei2gShiXKYrLpDGVHeV7",
  "key38": "5jqTwEoxsqk5VU22ygPEiuCsiGdH1jisL3vwQ8L8BSrfRN96qXspKE3WqWPvAPTpfmFG5gg9o1RZwmtXDTt6Xu2L",
  "key39": "33rhTm3RFVFZRXn1B3pJ9b8dRcu13xWZv7W6QLWT6dEggxPw443Jd6yTmaUisMxoiPHjb5fLwH87ea5NtbXJ8iit",
  "key40": "63jW1JvZJfTz1ZguAB36qMyqejQMdAkaawghDxmTLzGiqPgRB5XLHsaW8eufK5h7GpLXphVYMNYXQtXmP1ir16yw",
  "key41": "2L4FUjCBRJkxY2LEQePtpqm44pzFm9zp9WqZ3xxn6M4UkQvwufCuFs6AfSr9FtcAEB6iL4389X7weheRrRgEC1GQ",
  "key42": "3ihVAns5bjjuFi8vtz9wt1gXNqKj6yW8xQNmLC8wo2aB83H1s1WQAVpiXcEdb6nGVA1L5wR748SuSqAWECPUfGv1",
  "key43": "5WWcy21kEHsvKczYzaSYSAoK5mS5nSqMjJN4rHTaLuDDL7mpoEAQC8MY1E43RxwFT74Kau7dzDtuPWPcBiAqvyYc"
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
