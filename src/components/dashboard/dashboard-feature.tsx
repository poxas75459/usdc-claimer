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
    "u6t1sMACy2h6g4V9dLnXTnwjBCpjU1uGUU7e6rSUtVGwhWuVdma8b5JefHP6BBeti4jU5cNHFwpgncUYu7WyvgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ADF8itUFSM7w3z6p1iHBcZNgEQyauiQKYCTaw7qZufHeGkihsEECvf6VzV1pp9kTEBZU4ERNFq7XLKyESkD7KdV",
  "key1": "65YSf4Qq8hVXNLk5QNUSqfDFeHa1aciX8pfTECnsicoQmXH9L5wobcdsgsbXrSBpa8Xn2ymg6VmnWPLZDqDq5F4b",
  "key2": "5bWQR5rjnRq5XGb5ch3D4xvqmA9LwCg2pJsTfVgdMth7ko5sDpq6xjU95GjJMhWBvBG24BVjNVLPK9sb6n7viMPg",
  "key3": "Mdi7qt6rBn8LJX8mUYfp3BMQsk3Kv4LJuz1BeWxJe5bK6oMBN2fD3qkymEgBcKAxTXcYgvMtPB8EeF9msux1uqB",
  "key4": "4EBq3iVRBCGy4BjcJYGYNgpNvcot2ttVoKpmxu5aTfhuAj1LXLhoTUTuN6vYGtx1CfVEFxWyYcER6MqL5MQMa43w",
  "key5": "3MUghZJxJzVZQwYBEVtC6V2YMFhatUcNCY8qeV77Yzu2KwK7NXg25kb6DKnurX1aCLDPrNRD6LbfTrWMT5E8xFj2",
  "key6": "3TqTiajqrKDGseXM41j2QeUyigwyMfswChn95n7qaXSdKnFhd3jUsNGRk2N4MBQEa2koqRo2NyABbNbr9tU2hwZX",
  "key7": "3cz1zSYdVzDcrjhYp3BciBNZ3dx8D8Jkuof9ywszhhNLrVVrCetqjYb4tHdk7EDHUQA8HEcn1uTMz9srwm37gXG3",
  "key8": "2dfeKjLKjoBr1XqP7JF4tqWdSYPQXoKczE2zC6vbRLecgo2Zi2iy1L2SnBiSRcEGTMKXXhkMVusRyPTkYwDcNRxT",
  "key9": "635AbkjdMBNcKAdU8fUB4Uf8E2BpFw3n2fZm1kRSkQWaRgV1EGBSXPrR2zxKJ2L98FKw5NBNEDKjM3nctbt4cFM8",
  "key10": "2Sbisx8jqfYLSUaC8btfGsvB6WS4Rvj455tNg7Uan1kjiEsBy2XJ8vapTHxtxd25CWt7Li85CDfztW8vPjxiQ6YD",
  "key11": "4aGggJDjZmLrq3ouAxkStUPNzS2w7mZa9BgDfcknDqKC7KBVa7H1SHFSmedViHe59PXhtPMRMLbF8veiDVSQkz2s",
  "key12": "2By3A8sV1PUqzByXYBXJrWZcJnVTDpDF372b1g796K4sv6vb7ncwFiNV4Hy7nLWgE187kcZUc7SosG6UUqBHm7jz",
  "key13": "2PhDMMHsqPGy8sgguVgay1rSgQViwU2zEG3RCnqLcezteEdNzruDjTwNpi6XpN1Cp5ugvowYAeGXH5mf1tUe8UQQ",
  "key14": "4gFRADEJWt9HdaryzpJVvqxC36o3R38B2miuiRnJMPjKRFnTjGyZ2mwTGjxTqiGUYK2VcqSvDYBEpWi2kd8RvDcx",
  "key15": "4LMvVBbzS5akW7rRETsnYvb393EycWrULRasgD5Fz9edMzdq2KJXcuCohQnzEm4hKmnXbDcCmzw13HFwWcD8ZzKh",
  "key16": "4z2BSkyAmNhMY14rNgPx83CRMm8WKzCEBwDdfR9F39x2FuQ1nhjdeo8Nfh3vMeUVFTf7fsa7cuRWkzgBw57hkGxb",
  "key17": "4p75hTRncr76cykncX1FCXDg9ReHPTAz4PgQC78yyGxcmu6mYMbZ6V3en7QWZvVibm6AhgYx79g4JLdL9hnxVrK3",
  "key18": "2c5yhBurKoy7zhoKPGrT88kg9jjqDZJTtwJXds54vNXiUedvvovEtjP1M2YKDjXP7Ck94NeMgsXyM3TrvfWkZVbm",
  "key19": "4qgq9G8YLGmLALBjMXFo61Zb2RU3XJJP5cmsQMs1fvemDrfFo6SGwjjQEqa778BFVCzzsMiQpTDdPnm8BHVSU5yj",
  "key20": "38C6UzR4wrj12D224JnREE3XzUV2PfyDqS7VpZMWBvuahHw8T23WWjq7CW5aZsfi6eXzidPTU3cPUbAmPnznXAq",
  "key21": "3dBQgjTfVjmPUmzqyc5r1pcukyeQ7LSfcQrXWCumHNseYJ68vxUA2zMFPrXnEMqX95Ccc8XSpRwq9x6uL4Sw3bhZ",
  "key22": "4NgpiFpHWYmrPdokPRdy7QQDJyL3AF3Z3PPbv7ny7YHpx472Q711C1bH3kgygoEzikQvT2U3w9bTcHwx6aLo21yU",
  "key23": "4GudZ1SAqktwn9wNnTJ8niQyj6Vo6nX76GKnfA6TNZqYdW4yR3tAKeaHT8cDRXkFkVDF4dCAseuyyVH7iJmgBDms",
  "key24": "3YbwreqaYq1UEX5T22rtT8f1nC94Zto1LvjuJMraWrhxzs5v3gArg3qTPwMBerwZBRZ2yfaEe59XR4R9nz47Rx5v",
  "key25": "4gdzUi3gnUqLKQYmPPgLVQTFx8JcfXSb6ER5JeVFsmZWPzWKhvx2QpP8TPJb5Tf7C79kEKfG58vWauVtWegCrMhn",
  "key26": "2EFpUmfRMgVELFLBEz1Qq4vLLaVCA1oc8kmQuGzqqiMMwg7PbAS5VJvLEs8ykSV7EEJD4LkVMBFfx2SV7bFrr6E7",
  "key27": "Ye6q4iYxz4nMg8mP7fF4NQqEWNP46VfXo22dCJjnYsxTMT1kLFdx4vmFXjZC1LmaRhKdtSdh5Qh6Q2En8tuSt6o",
  "key28": "K6Sk8BDBzeNp55J2r4p6QJPjPfCPXNdf6RDvvPVrg2dg1tdx3eZf9cEUvsTTaUPw1pXviQTHXdBNoKkPwcNFswh",
  "key29": "3CcpbaH5kczeSj9T13Ho5HtcZf9GSqEwv5RRsAsVukKQr7NFoqhLg5YE9pAmr9bxSpD7UmqwzateNhkcZeKYbX7J",
  "key30": "5DBCVRaTtFhQS2L2myv2zsyTre7EBoviiby34YzUuRLTvhjNz3P8uVCsbS4FjgzB1QJcmCnHMWxRviJuMBmZcFpJ",
  "key31": "5bnGN1JHKYzV1pJq8knYtcqRXJTpABkEAHBASj3chwBFhdS6iu7kEaMwksf3kpRhra6gjbLHQy5jyccjtEHKUfDK",
  "key32": "4Ah4VecQrWDx1LLUQn8fn8rEQPz8PrZYNZbYhd5fJkVjRa9q7UfmE1Y7hUsi5g3N11DhP8NAdWMKrTtJuoNPspCQ",
  "key33": "Ay71rVYq6NgPLqPYbQDRAmTLE9X7252dAryqiQCW6UFUU4NpeHhx6K8waUuH4Q7paAR8j7UVeAaJV1rMjvSu3tr",
  "key34": "hv2yzzcw8tZqEf4ATqC5JNDevMyCijqy81kzUYkNBRW6w74qfCESaXTEBNwV6xAZuVy12vyLFMKiMQgSMJsLmU4",
  "key35": "4AQ6D1uyWmEcXA2MrRiUdnWkbPVPonBkRVm2JiHTFTrSK7cvEVbdTSeykEPs2fRWJgev9Dycqj3XSVkjG52HMmT",
  "key36": "tZ6QvJGE3ZPkp25adxH64GDoo63T3hH8ShmXgBLYWinXunNEg2Pu6z4h98GvqAk8qguvUHbws8gmrioGCmaYvjr",
  "key37": "51mcERUTPiM2uFRGMwFwU78VasVUq12vyEtqRprrPAAQj2XtTaQjtHL3dVqDQP5eNTJ4KRETzwxhftCYQh9Nee8E",
  "key38": "3etsD5RPsCTo21atGNyQuc4izqQrm5BxV4SYKstDSzahGbCkHZatCcGthFB1GMuZGjYqAaKQkFQyQzVrevCccV6G",
  "key39": "UD71eRSPBmZ3V6fHhRpL2PRwNXbAJ6izMMXExPxTA6bBWVzoJbtCRtz42REcTsSkJzFM3nbnZ1x28Nha6FowNv2",
  "key40": "2ugxCTz9DHmB8GXFF85exomJkbRtsvWcAHrSGu1tAoaQXWuCPSZx91HqVFm8FY4M3WVgSU6itghXetMzNCsNSRVF",
  "key41": "39FcMmujvcf35cmMKU5189cCiaXZmgoHvarnynRAenAVxF7gLgA7smTuLuBJqcLp8uu5h15ZtmGC1YZRCMyXyQtD",
  "key42": "3Rbe9e69N3kEZmkyEhZdtHzFw2fsjdKtyDWZnDXenjZNMUaLorYrWLgTCZyS26xWNXkN7DNPoTfJfZkTkENUvUS6",
  "key43": "34c2vXwWxb2twQV5wbyTWJiLCXvEu49XoPRKRLoYsEYhC8rpJAuyD3G6o3Sa1tvLJsSxJVW9vWceo6J3FYSejtTZ",
  "key44": "5nMaubLZLarKa4T1MZXjkAJUJWCXf1fztUSV3ztWVysjcGJC7n7ZQFNgsFcrXsD27SMkxKUh6sESPqarhNfhDHoe",
  "key45": "3fmT6A3CxtVpPngnG1hxt5Fc9QXjhyZtj5BZ8nR7rLrq9f2B3tcm63FX9xuzXqRjQKkQiXu4Aa8aVY1HFRzcd5hQ",
  "key46": "5UN6AuzDX3BZWh1Tym6CJa3WUAAh5mXvuUELUtBCArpid4voLsy8BF665kGC1YgyaCicnqtRYYqb9kVyp9B7Dz6G",
  "key47": "5QhtNpAa5Ek9Cifimq95josTLvgM4ChFEETTYYKntT2niSdkXhKqxb312FBq2UsGZmP8YgjdAuMhLmCzRug2Xvyj",
  "key48": "QvMn1fxFoQsXvR9ZT6yvriky5YK7icznbak3vDfcGZjWPwbikwLwNfR62q2f7fYndAXKa3pW8V4PNfTRHk2ujHL"
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
