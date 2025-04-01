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
    "49hYUkRFXHCd7d2DDkCaatEzB3NfQBEtdC8F5UYLFFW42bb9TV63yvzSV3RydDoLkkfVyoNUP3wCBvBEQdoSsqsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DY77LwRJVz8mRmUfN2Eayea6FSLud7Vc1uNK8XTbiiB3g3ZYim2ADKq4jXWv15cGxEd1Jh9YwDopfHpsLnFXytB",
  "key1": "5fauJrPUHLjfaaBQJozrqkM6BXRoYQtnyHHCjnWy3n4F7dLhE8Jo3T4uZNA6eeb1DHP1yvFkc1zmAB8kcLJb6sx3",
  "key2": "5dde6MTfa531PrDGnqMWhmCHAwvyqvKXD4QLqYvns3d8jPQofaMwUC1JH9oRJZ4NsYNd8J5bZ6LSyEGnY686izsD",
  "key3": "5E3k48pq5oBCuznPvhDjdMTMS2sUrvF59hCSgk2Ch9n9Sribt5YcEkTrBuwsmm33ZJrZ3DZJZjKzM84cNcTQnUPi",
  "key4": "536RzwXjJtc4LsFDhkA4TgKsYS8nHtBSdZRCharJzpPLgDYazCpHEgkwkVVnNcbqEdWVJQZfECjS81aVAKhY76AD",
  "key5": "3DhNw6Zkw6qy8AwkNEyKF2kY6bSwkCEaRFEg84HoN6gnoXnK5qRqD3PcKsjp24YqLNBKs6Z4Ae7XyMFuhsGsvuEM",
  "key6": "EgVXXUUrBjX3jHuvzWQe1NjSd5S3C6aKWm5jXF4a8UKoBZfVDN22wsVCRcEujSsLrjKdiHdwyTrLEqpZdyJXQkq",
  "key7": "5EroMHXZdnv357iZQP2ecurXadTPTQzpqQfb33Y2CxJxJjLFjqPZLv1MpcpsdaheCUnthKhx23bkrZzMuFUuDDa5",
  "key8": "5MtSi1sHFBPMRWRyiXLJb2NBpSEpv38frgYXTbWTUozJSvr959z362eBtzUCGAu6FCdZWJVYFzQ4UrzpUjbpg1GG",
  "key9": "65yWG9hMhFnuXKjvSwEFvwDddzysZvZxM44x2ypaMQKGr1bUsrWD1DshazzSeBQgeS7graLMvMcsJuAG47xJ9aah",
  "key10": "4RLgNQKzbe1722tSRdipsoiQxAaLdBLdnQa2eUiJjaq8bQYo8dNSGK9sWA25E3sWv3c7p2pfN1ryxT7gPqWkrueG",
  "key11": "3FaqAJkP18PBzvgALNWjnJKeuwPm5mhkPrxDC7s5PKHpavt73AcebQSaVeNqFEjDiRh8E1pRWHUrcFgB63eU3TCD",
  "key12": "jEXsZL83KrsMq5GQn4EsEuLBGHeeWX9DJNUkjuzWd3wWg5Fpb9eFhgHuC1UTuWSnvsTs7zjFb2ZFH5D5roi6K5S",
  "key13": "4d9BR96Zk8xmv6ySN56hgbbV8ymHNdnJBgwv3UMbfwrzh2hGV3g33Jn62XVY7PaiiysWUNnNUYvv7ZiM9dKux91y",
  "key14": "5sakMWmvpeWu87YvikfgmekUNU1Xd8EozDdF3s2LYK5NDfgXC74SzJWNCjcnzQt8LCo7mVhZnZFHarPKgk6V4XFG",
  "key15": "4SGLZHTEZobyhuV1uGUi21JaaemcyiRtuDf8zQxhP2b3dvXpgceXKz1tdUYqjbQWsjKWvRm9wwkVXwSnyxyU9ufZ",
  "key16": "5VZmmgxxfiDdwVSinRZsUfUQyqcV8DqxCNMzEni8oFhMBg3JzZ2VjQurN2X5rWVASapvhrKTW8xZKcJLW3WQCu9C",
  "key17": "yFXQT2xSicSxcKuRWEdLND2371bxY4NYyPBcnHZqR8arTTXc93rNc3qGVLX2ct2dNL99y83JiBkXkR1Y2X9V2DZ",
  "key18": "2HeaQTi9ibDZBooJKkYiTtTQ37RSBrgnPYN79JEipg6TZZH25ao16znSHvp6UfhUyyjtYn4zd8hWRtaY1AKDYhmV",
  "key19": "WuShPV6CrNS5ydCdHc2oZLx9xV3SkDtiLznAX3FQUany1pMvKN5J6fDrXEe2fFRaVYezC6KvPAGdf7bfcSzMU1H",
  "key20": "24bEpGToA4J8FjBJQi7miAm3RC5J2UsN12ad1eKVFdA2XVpDmFBzPXTVRzmFLNZ43FvxGEEFDKU2BUg9ATmHjgiZ",
  "key21": "5DGa1zR3jQZk7SauDLqseVkAjdraqu4dDfrg2ns4AKUztpzNpHDdUFfkv8mQNU4nH6N9o78N51eyrz24ggcdDoPg",
  "key22": "snggMNoMjEKmBwFacoEesS5wauDi2F9eEzNCcYotZcUcGchLT2TZ7btNnmWydGza6g135Cb6i3gcNAUM8h31YM2",
  "key23": "5nPHspGnBLen2aMfBpMsubS89uoJFQwDeCiaXbnmuyUyU3fNDiegE4guCQhgmAFTfTLVaCd1nctRMko6ucxpCmv2",
  "key24": "39ubP7BWh9MSCmFSdoobxPspyGU5epK5hK7dYoVCoMEYWbQGwgBQAiiZXwiGLHB52zqjWanGZa9CU7oHn1PmHpxz",
  "key25": "25uAu1RRWaeXM9EZTQ5ZKSaGMtk93vEP9RQHFNZ7LbHkKVm2mrGNFBRamo1Uv95RNrdCxCpb2Kky818c1JzosnJd",
  "key26": "cqbQJxU2ZGKprKQqNpdemE4ZSqH2fqRShQ1katvsiXs1NTRK9BEt7vy1QaogcM3L1ZjbwwhDQ1vCq5usMutnQun",
  "key27": "4RgKDnK7jBkXQyyLRttRbpcY5vpC18kVhheZ2Pz4ZJV3MrSq5JtYYr5Bgwft278rJmoUQDTBHxy2KQPC6Xn8aeL4",
  "key28": "2bQNMbMzqceBXJ7tjipDB8C8GJBm1k8ArVksTqCmWFkkXEi7jummAYkxFiQ7es9w1bvUdYHYS7StPrRydBSZxNrU",
  "key29": "3vfyv2grhoEcqEKbjTNjhSRCtH29LuowAZvoqWMZzbb8AZmr9rsQCsVeWjRfLv5ogKgMesUgB9DUy3vW3TwAXX6o",
  "key30": "5VdsshW9cDtmhr8vN4Yty7U26yT255ZBD2DkYxorJj1TYmWSuGVa5fNMc6A9DbjwzN2bvfF9QANYagPne1Tk5mEz",
  "key31": "26njuWvhRK5rZqe18zC2wtNSTTPnv4Y2pf69EbT7ZaQBa13Pj9zFUZnoaouS94Xtho8a51yseowZhYHmWwqf52ty",
  "key32": "2uBGCF47MgesvtyujEqnyFAFw94YGUsEzYPR273m5ubWvYtGvQxZkg8q49WfnWCDScdzAA4YeTu4t4NnBAJXzmMK",
  "key33": "561rJtUL6uEvVa8sXwvwRApynHrnckd6M2BTqb3gQwQzfuKBCBgAmBh8kqc61ouN8ShyG9r4MZZ7uB3Qe4mPVUj7",
  "key34": "5NHr8a6KTmwTtWfZvzqMcQ97uE4B313XX4yonayRwQjpJ3kvMELBQJWhN4RhnkgDUC8xFSosEokRPMUiodHBaWqg",
  "key35": "BzEFCjPLnmsDvJKHRUMnnS9s4Ax3iC7JfTzEXokuoeLAeGL6FeETua4C65fQWdjGgxYL4XPUUKSefZL2Y8k3coW",
  "key36": "NDekpsxK9s5JCkVabsXmztLi9GCFhLtEnRhcq9rBA2VgQvgkbmcbHAdVWznXSSQMN7L4BMpZncATCM2mmGbaq8N",
  "key37": "2wzFLaHa4dN9Jm3cGmniJ9YjZJZezxRHHDmAA7SbzVYwHgcPcLAgefMVpf4H3NYiePLVyRvpeG6bBJ43RLdmNLXd",
  "key38": "2xkZXNL7Uz2soWpQoY7Dncuw6a6ZqGdrpZiMhtYp9mvBFts2KwsabR8VQWQdTGFdZ3ERuaSZ2QvxX6q2RX5aTtYc",
  "key39": "ErQnZo8HnFWwASzZLFZirv7pkYihWbe9ZrcWC5ozKZQWknVCyN7qQR59nShcSQdMNPrWuTTcqLtGkTw2odViWz7"
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
