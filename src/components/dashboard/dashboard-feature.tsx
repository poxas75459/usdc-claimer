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
    "tvnd1Nb6ekZDu4Uo82J4Vs5oK6RmV1f15HHxdxa9HNBF1Fstcv1FRQ6Txd2L1nsTB6ejqmhUAiek8TH63hAFwVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QCfPxWm9gV7EUc1rs8viA2quHFu9KA5XHPfzSMuGswqGZmsrffUJqsJaPxaYtggQxuipgjwckfoBsQLfnh5WJ62",
  "key1": "24iRGnpHhmtsmhvNn7Ly22g2R5XzLAaUUkmU1PfwtkMNa7yDmY2vDVhPwWxNWJhg6DDWssfeKf1hqZWoiEnnwnw9",
  "key2": "5ZxqdNA2KBWUJ9s1iM4YQzei6FpkfDRPpoQUp4ZJNrn5YQdtmE894YuSH6BQaVhVHuSZKu5KSzWXAvUFcdb7hMv8",
  "key3": "4cwJr37BSqowSNjs4irYX1PZbn2v9pFkgc55FcMBRDqod3Pq5g2fAx8rFKZBST459sEyV44JbFjCNp25tCAsrrvm",
  "key4": "58LHmuAqoV7NzfM94mNjbLsKw4SJywbXzmxKufQBRhggoAb4QXevnCqH7WLioaSQs3UpaZZ8pJC5q9htr9GgDFck",
  "key5": "5ExBZmscU6V1ZSirPdjiZqFbG2mD1wyQZaETe2AhEziSUQBcxxoF8b7wXqGppLkWkCCBLHAdcMUGU3jCr593P7dE",
  "key6": "2Rt1iBiX4zVpK9icyn68ZRoamfrPuATTqakJyMj81wsdvijbhs3p61bB5oqRQsopcrPEb2Ea7CQUt3PFN7njtAzK",
  "key7": "tzDDNtcSLvPP6oojugyVX8NPPHTKYBtSvCUPre6aVmXH3ieQD61m6AxyDnZnMu8TdvFa3JLeZoGJmt8fbcBGvKh",
  "key8": "2gHCTddc9QRA3g3EpTHZCzjkrJizcDFEarLLAqMWGkma8Upfav3dXxN1uhAWmBQzuXWiXedr7X2Vp5JURSTv9fNz",
  "key9": "44mXkAfvxKgPwcbZwbzYiDX75aY2mtHamEtwTGEBheCeDW9VWYJToUCANDge19oSqox9HsNyqVnT9WDJAVXvhtzf",
  "key10": "66MHmjnYpy3jJLYjmvvbKoMfBmPd24uC5DQYECbUhBHZ5SumCPGAWKjkWEX2NN4U4NRWpxgV3KwYS5tL1td1FLxN",
  "key11": "2GiLezwu3RUTknssPLWjdWLsd2yf9nrSLAzpQuzdfURCgx6hnXPYZjobbUkFULNDNScNhKVfJGYh16dCv6ggf9v6",
  "key12": "4HXZDbo71nKoCESQ7CuYSdy48SG483xACCGjiopUYdZfeq8FWMMDWRDp9T6TDozeeSKhDGfmmaF6P9FBsANc9AKS",
  "key13": "65qkbGUagJBSM6f92VUnJmwSpTjahU4cMwDF2t87MQ131V4ifBMEfExXinr6SiCyHb9fi7THLA85BCgkvWc45kPw",
  "key14": "5nF5voyoYbR9wqi8xyMoRzyzTVy1LAh49srLXV77AVtCx8NDVifGtTQqoV4THYk9qeuvDbK8jwbo5o5CTVCoRkdr",
  "key15": "5BaYUV1EgestNmaxAsaabs2k8dWP5qSMd4fL2734gDveF7SJbWPH9JwDWJDzaUVNo2bEPS7WHYDMcJ2prNRZz8pq",
  "key16": "2anbXu75DyjV2jxX3kgtmPJZyqLgGC5DVLzvp7XET15LiH2yZBoP9k3mh36ahDVLu43WfDLoCQXSnY6u1ZyhnMfG",
  "key17": "39aU9y72BQTmStA7Gy8L1JfoapJLA7hWn5tdo8kEvShQi24H5HrxrzkB5RZHbCngbpu5fsGMkLRETZj6sEcDn1bV",
  "key18": "29bSPFjZh8nSSc1rzaNiZr9KUfbdE4gsZBrXYDBq3A4b27nM4YDeXA5PHfWwPx2gSizD2Ma7q8wNHK6zVbKeD1TQ",
  "key19": "51ZsxMFKfE89f9DFueZztSgPaZPjAVTsnkFx8LRmV5bRFTXd2Br5RjnBFAnZB51TJVJK4B96UP2yYBQ82VjWBpvD",
  "key20": "5j3anoFgpnxLknXK8XByfkctfQiRNSBqwJLhWvdvKiMTsTrKaJdUasyeeAXrBJJMwKfXgBtH2mgR1Dajk3hmaSpf",
  "key21": "2XBBVwjTPteZAyEFDRaMuskGwuHmvCHuRYFd5jKaqHDifd93DVCWLPJWxXTYovSduAgGCE5YKxNW9qhETebKLtXL",
  "key22": "4thPzF3FRJ3XLVf9TMW3yG7JhQogA9xL4ecUFwDj5fpVGtRkCgRjfA6p7rRr3VvDEDxUsykBondperwFeGirDff3",
  "key23": "44e2YVJvEngcDt3cQoJBKnm3hwYqLXsxm4PnvXhYxTCL7xjQoTdPpuBD473BaTYbpHNFcNppkgReYhMA5KRim8TC",
  "key24": "21hRwVArLEJ6YvPZWugevPbhq5LGZcPUuNnvoP291JzvVn57i5kKb9xEsbyxdsGY4SZ4U3tdxzzUJEE2KcW637ys",
  "key25": "2ptzy7LfRiAADehzrtirea497y1DvAf48KYnH3C8bvAgvwLM3tm7R4fJuBzggKqHvYUCgNi1Kz8EsppNPHpm2cKT",
  "key26": "4PwraHZrzGVAMff7DLccq7gN2Jp7ZB2yc6KMjXVptcrVu7s3wtTs9xFeuos9LVC9yvcUZ1745cVa4atoGeJSeT9C",
  "key27": "27GynVbnGymwbVGcWSeypdDQqdKm5smccuqKp2B7DPZ5CvnvMYqX9ktBzVWWPdPFquYsVN1Zh48cAGCKy2oTtWqT",
  "key28": "tHaV7sXu7PNpCx64sSBgHUeUh9LrZod1khMGJAzx1bb5YBqdsMwHbSTQSW8k8eBHBnkyUiR6HiWkENKRQLgX2vx",
  "key29": "5ZmNAUYkdNxLDte5wyCeKr8rJQqZUtTpthf2w4BdJk28WJbjQXAVEPaGFQHoKCdBaaY4uVxdMXcrAp3i1DPb3WDd",
  "key30": "46tvdbmAN7er59vpT3FfAzRBBhGnbb27WiCi6UXzeQt3qjBU3efEx6kqW5wQ2ZPCBTNKgYR82YVyAjF6Xvdcqwoa",
  "key31": "PLehbPtVW6BBsf2oYYDWGRidHARNm753QVjX2BhBzj8GVLdMbKws9MVgvSUHPcdTeBxwcQRW9hjm3nB5fexv9ok",
  "key32": "56jjo5cH29rb4UxjCG8wB1N7SuXgk922sRm7uVKVuzFVTvkWx5h8M82oAmva4QPfH1nDubWkPwz83yTJCEWQtJ1Y",
  "key33": "4xYqnb6vgY7fR2mBwKNLGmZXPQ9JkqEkBgJpVwJJmDWTRjH5eRMuQqV5EQntafjSy8FXTkPxtYean9oPaymQG4sM"
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
