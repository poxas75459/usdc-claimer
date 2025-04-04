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
    "wp8kQ4cAqCRGf9dtwJBHFBWvZ8gnVAHGnjZbBDSWVJiWtCB7QHoJ9SEXAd7J8wACxUXk6SS42XhLxZD8uzv4Gcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WL9rAKpwQ4EHNU3953Dh9NNMGX9sYjRpYJBpPFkgv4fKkuK8dJ8R2kMgCYL8mAsnh6dWGSWsBpVmpDTQnaA739T",
  "key1": "55RLj414s8agw9HhtRoUUkjHPuMf12EqWivm3WD3fXWLtNo8H6ifXq1qS2SK6fid2JzazJLsbhRfgwbgxjmupfEo",
  "key2": "WmLuVRb4WJFGmomi2VgiZ3eJPb7cc6ouwe6w5LGmThhq8194DQGfSPTd6Uv5m7axee488Ajrbim8ZuBRnrJseoL",
  "key3": "5akr9GXEeLWkqoGicUsqGmwG6X8RVBGVYEXtBjAUY9GXrH6hvj6EorzPfiapsd7JmbGQijrHAqNo9oWvuC17SAW4",
  "key4": "2KqPfmZ6SxaagY328hvdYxg8cdBxMXiKsYad3SMkH18XYjBKwbooWkfWC1SKqSwassG9WTuSFeKRbwCuSdikFquQ",
  "key5": "5hHWr8Hhpgftt6xvfwRsn5oppordSVctuKZFZ8iS7xRg8A7pmzus4xsaUj8u917AmRyk5ijvSynmghSnayWEqxKz",
  "key6": "2ZUZsZz9AJb7Wbc22fjgUEUo6VVZeQtmgegWaapQnUJBZm1rqjrcFYpNsyBUcZ6q45aEzb6xRXRvj7sRSd9omTCW",
  "key7": "3dgqbe3LQw6C8aRg3TWmDXWRcFdFCFKp3AKHQJrf2wkzGvJ6TyNaC1YtdDubxdDUihpkcEEXkwgCZ3xWbj1Qm3j3",
  "key8": "5Aov94vNscyDx12XEAMcmKyWA1uSrjxy1rWi6mWUVyjmkb3aSZ7tuHsUgej6EH5xhWzsCM3AhQg8W9Yd26uU6XfJ",
  "key9": "39kmUuuWpRgWPw3YvWGDtJVrgBvEzsaUJJadcbtEkbTvc9mnoptZtbXUuZsw4LkzXfe6zuy4GXXAwdHdAWULY2Fb",
  "key10": "3tSGa1ponevjy1ac7mUednLN6WyncgxUmf3Rs9XqvUqHNchx6jkH194XKgnLTZKpstAAi1gJYzjzzh34JghnTB3H",
  "key11": "3WLVoxt7C9PjDdbtepwAZrtJg9h65vnfk69VNBoLtF3suDsgJyWZM92TmYHNPTHXjxrnkwoCYY2m26tVyn5eeM74",
  "key12": "qGLYPibijrJmoVQunD5fu3g2V9G3y4nSJygYEyM38msxZpVFpfbWz59UggZmG5W7zW7Mmnxy2DVnLNNAkjNZAdS",
  "key13": "4HVFTvUf1NferR9EYqJfNFge7kQ6Z5ZfknbyHVTJ9ECSmpkVg8iSdwwxYe4PXy9FNPHJ9unKFG833QntAMUNDDE3",
  "key14": "3x5kLt34KFMDvrzBnqmpLvv4b3tXa6yNjLeYF9LtDQgRSExnBnVpXbq9MyZLs6iMWwRr6mwesAe6FPoXzcJN1tkf",
  "key15": "5XickvhYDEd149nbruLTviTSvWP4F5hGUxMSqd7imkV8YG8YcTXesXe41h4AqpgyBCqZXzNsgQJi6tnMvErJBubx",
  "key16": "5gaFUdh4kzkj2JJhuejWECji4zWCgG76iuKA1bys4hRdkwpRTHS4Syh72jKvW6bFG6Hpfj5a5iDoyaMhEcsbxvKx",
  "key17": "3x5ej2pVD2gUXfdzXkdLQauj4ayZWe4rdtTCK1xKzYMME5hSBDKRak847GLzeqkD9ARTRKGBeB3jYQBoAJarnYHJ",
  "key18": "4mA721SNiJD47TJYbKGNoAg1DHvAZePujPGsBEduBRrSZp4SjMwgABXSe7g2mnMAxkShR1aG274P7cfNkEnaBLLR",
  "key19": "3j6yqw7nC8UEvDgBogdDanSVKddYJym5B5gB2NnuyUkqyoxLj3Wxh5WNiYLggc4TvHkWWxZZRm6YMqxiC9NGwmga",
  "key20": "5gXbc1ZFuamRsKmzaxJYUDimN8wGFZFenREcgXKMCweG76C5UW2PAxwYt2wVpcAufs1eYUUsVr9CSkVGR46a97Ch",
  "key21": "2MLsKqo6gkghgXWcYM2Ly1YciDbqo4PC976YFWGHwssnoRwUK843pWdoZP8xvitBTYEVZz5GyNx3Bqvph425jcBp",
  "key22": "4fibqmeLEsuL99CNw6HNpcRWmsZtFYCHWVdWbahPYpS9X3YXZSo9FWVGDrSoBy9EgDzsjUTKbzvhvYt2Vi6a7jrN",
  "key23": "5hfSocivWooDm3SBSkTDNQdYbhNrkx6xX6WyQRFuFqjLHRWXSyeLwUkNTnnAvQL1f4HXFaZMa5AmGcyztcrWZ5J2",
  "key24": "3DJxjDhjMeqS5axsgtvrLCuJmvSMhjP1H6T6YgiXBWABVdzekEo85ppQCni7ow1i8Z5KiJ5YZATHJGa8fVscw863",
  "key25": "4dQaAkqcKCJ4BEq6UKRa7zbEy4CR5buTSCVM4hbq4STyPKS1puh5GS8kPSaZUE18DoKXdHWsyZGd1Nzq9jDLX4kQ",
  "key26": "5LszFR8ezoffYFtXfHhLXNSYDBpDH2Dp1P8zv8yaadKS2ddr5wNiYigtC614yHbrFAFWDdLQLmnSERs7X2gTEu1y",
  "key27": "44GbKP3KwYMsAdHoaDrXVVYxDdrT8SSS4md8uE31Sr5BDmfb5xEwLvtN3WapNjg6ZcqbZvcr9CeiK5U4RpZZvL2j",
  "key28": "2BsVFbxKQ3EJ4ZeJ9Agt3Xf2cKpPx5iR4oT9PogMm2cDLZRGSm8h3sme5bRMtThWueWFokoW8MYrZxDY5Es9X7KL",
  "key29": "2km5KzMee2M3A1UE9gwSx7R7ADGs2V4RvRqMMrdAZiLjna2qvFqXLewEsjv9L4r27B6dKgCYTPosgLa9b9fPgTBS",
  "key30": "5Ci5bWw8qYrdAjGbJWALcMYQqpGXscJ8yZZtVmJWruG62VRWfWfBNa2XR6RDRLiCmWkYPtDyrd6htg9pYR3CKH5P",
  "key31": "33pa5Zyi9N34HDTUUiPqWDCjwFKPqJMxvtc4PRYPbDZEqatqxBUhj4xh4tW5cP3P4rq8iDUxvb6qruX9dW7UvvA2",
  "key32": "VFY8VVUD3ACsAtewDSe4WUPQMSKhbwNqxudJJkbT8LjXq36ubqabsc9duPi1gHArwwAzKLT7SHaa6w2tjpZ4xnJ",
  "key33": "5cHka8VtE84CspKNDawnFdp5wwhYATJUHJjfiJ1d2bk4FjVuMHYFUKQf7DbSd4nXJ3NGND1PTX9xJMt2rUyAyvBo",
  "key34": "2WUCpmhspqTFtQqv6sK4yruRHdK7aiJcJJKoRc2ggEPBtvQKZ7uYojUM9921n2YVCkhiGmyeHbkPiKJFotJQLPDg",
  "key35": "4QjcawU8np447Xxos6ghoecgNrsXpXc7wK59jbfucjN5Xc7fQELmoGxy9FJa1BTcsJ8v3jnNC2xjujfNetJErAwY",
  "key36": "3Ua84JTtQiFDAk39xk1Zw5pxxZHSSdtzz17utraW4DB4bo2kENGCLm9VNWo51usV5q5Zg65Lwfn7KmF9dqBuvvN",
  "key37": "5kDJ2GxnKysmZmCpW89mBzCfoFAmi8gbcGy9UgRATrtr8PifqAcxDp6vi5TWSVwusrUzNZuWEE2EoHHUuNjf4ki2",
  "key38": "5fjRtd1qXrdK5oHJZ5hJJt7SmKdTFohi1CqnboQ4e5uispvHh9wGVC6zu5V5aoXExTv3BqPMESwnpdFQaQvS7ZJF",
  "key39": "3vogRtwgFMWqmKvTR7hv9Qq5dZWxYxG6rCai6YpDj5fhAtoWGyVh7bHEtRAuiPYbojpLAoCMiKd54ze44BfnMcN1"
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
