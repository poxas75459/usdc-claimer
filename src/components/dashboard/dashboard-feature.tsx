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
    "3uUdgjzLRKjNJzxJScoJ9Zo3yPxXisLLgN5n4FeG1NwP6neWrprYLiApVerf12LMrL1BoNm8jE4pGrYQijHikUQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sw5xZM3VB4QpEVz3rs2pqEkqjzBv7CKLfFpbzuMYLkLCtzKEJSJZVhmVgoJmUg3U8WGyGPzK7gue9pE3zikkzmC",
  "key1": "4HKi97BumYBMYW6hX2LuKtVYBApKDZJeaQogKThSw6ZkLunTzPc7cSkH6sgnZkUsBgd6RKa7iy6FbtYqB184hbqN",
  "key2": "2ffitJfcim1xb9Na6cNYdmznRecPcTHW2KsTZrKG5MVtVLstNvWT7vAv11ypyuBq3FqTSK9wyfn9NuzSdny7mWVj",
  "key3": "4WXBHmhNJQuiTrS6K5ASPbv1yiv1JFhNfNFqVUfCi3DmubVVgkvE1Zi1kJcLf2ZTHbCMTVQxR5umH3K2HkYotVYB",
  "key4": "21r5td4sCcevG5PCYQwyF6124gYUGNa1MbA6wTfLx68emTnNGUptcQScLXZcbQBxpHdzoJUjXafNXRFzhw3SJuar",
  "key5": "Ke98NugzezypSLZ1FhKQCzs5KiYTBJVVWyDd3iJE526YKeJrRYTT45rFWo7YthN7dCqCDWQsULGRiArMhk6yZck",
  "key6": "5D1dyqikxEDj3CjvC1QbfHTZanto9t5GiJn8u6cLv6tpYCxMD5zDhX9uuBXzdyB7Z994Kctbs2iU7MsbqnY1coX4",
  "key7": "5yVoMsNo733H1yLXmLZmrzRRbvu3GGGzhNJ3uquV3YpVwLWXhpChi7FoSxkqKfMypTxQeZqP97ui56DwFkTHEDfu",
  "key8": "L9Zpt7kLwTMcVK92VfqrhZCaA1XxNDHsShrqopJNADa7YBsSStzyZrfdKFXA5iUbL9CVcVutt8c52h7q9PmEqD7",
  "key9": "4a8LpNbWnon2uQmtWsnUpBCvxaF3aVu8dgnyqVibXzLXFf74YSbJFPbV2K4Rm9xGFMz2MLY99F6Z2Xps3rF5QAsM",
  "key10": "kzHL7kWCi3zxeycZhLzGsMmzHgpzVTDjYHsj8XSyBtTieGwP4BSuTNkvqs4DE8VER5bE1oYwcdLTDehaeeHsEjM",
  "key11": "4LcgwKsgkqkP7JV81s9aTGq5AgEHbXvwrkuPfhAnAQeXLhvNWQ6JQBfHYZ53nC18QjtoQjgmAE99jcRv8q31u3Nd",
  "key12": "5tRdFznYvyz6MhfBD6s4i9Kd2JbbSJwDnXvqD1e9YNPbBZRDbVaLDWaYPrWodyd3p1wgaVeCLJjrC1Hfi7Ss7fiM",
  "key13": "D4Xbq96g2XRZSXaK6D7sNJKaarwVvMRSuaJxAeuQmo7jJfsBoWaS4mDwfn53us4SdGp9ae2yq6ig3mTztBP3fwz",
  "key14": "2gJ42fnekJpoUyuKnsozzo5DnVWuSn5nzzhAqwH2yST9umkZmmAzWbpyfaJqWVVR3D9xF2GjdQ1SkA2wYXqMc4yZ",
  "key15": "4rtrXaiqrB88v32ZdfSCTcZ6qKkXmjwps82YsNCcqzNcrGyS61fmMeHeWbvXdoMePLmSmomKRzZenCnk8W1idpSp",
  "key16": "2eXWTmTzfsdkFS8ut7GNs3TqVzRKjZZY7JdQNNkHJ43xTzmYU8eUz2oStGcnf7MEmpw89ymw2SRm71jAT9eRr5hZ",
  "key17": "5P23ndcYEgpuiqr4v7nKFZDyr9P24uWUn5mGRdEhG5GP32iqpajsfPoN1729ETFsUNVr5vgVtZZHCqZhoBvEz315",
  "key18": "3g43bkNRY8yWti4Vk5kBEPBoEmSxfnkf77UgLQ2EfRWxusXtVaXkWf3NTJK6FPh1E56W5eTPjqJ4i2sCyRFEng9G",
  "key19": "4ttcQcr9Xy3w9yN9yFWFhBoCMNLS7hEBLF15CBf29UTy1n6v722uSNPBrRFf1g5W8ZT2By8gGP3VjzYC96RjF8pw",
  "key20": "4pGTJfdXmpNqCrvua4krmrq55Kqop1gex5t4MJ3CBVTsWMGo3gu6PionHL3YynEZ43rqqP7UnGcCsBgT2Lh5vASo",
  "key21": "QfCyev1t16fBX2Nc3B2jrtGnGjPAoj8LjXFoKvVaDZcpxLqs5ogMJwW5HhWzMtKzdY9UjydWiXobqd6i5YMMg3e",
  "key22": "kskmX6E2RwWwKTMcAAjn68Wb4iWWWfvrXn5AYcrieU9LrhuwA4odJVQVZBBWitrXKQbtrZkixjd8xuUCtDBNvjf",
  "key23": "EbDAMqu1cL1zMgM4k9gxQvNcSdJKsTZ9qWv91zUQxo86y2Kqt4KCb8nJJpHp1KQ1SpFX4T4jHGhR54AiSBXdCQE",
  "key24": "3cdpgdxALoW1MRtCFQRwe4gNQKs99xPA7TYQPCMshj1KERgLG6n5iScowoyhVnrxfs9mTC4yEJniLVEnkX5dDCUV",
  "key25": "3nRbxa6oxW7ePQSboeQwdRkYZAUEFhjAdrqziLNcg8modwwPrzTiByeyHZBwUBwsNGWM7mGnkG4NeJy9yvE8nYST",
  "key26": "2XML7RF369R44sVL7iYMsEVAKuBcAW5avBVsijtmDk7DEAsfNKxmKpEi9t1avEAPuRdYrWa5gpnKaM9WaPAkNgij",
  "key27": "2T5GYn4KVVF9k51j2dRswNaThGc3ouiEK4eM4AWCYjadGuNEJveiNY9WuwjacGpMUeAqggd7aCPHujNdwL87J8A",
  "key28": "nsevwkuthidmKH9cxNcR5f8f6giyneFj2uihMzNgacPgUmQx7reqjFWPBxt11uG7yUV8PcQing4afjNsRonobaJ",
  "key29": "5ar55ZEBZPsEs4rx2dm9QvMFUbr5MrWmNjRXhkETmZtcYoVSc8c4jKTSdqd3YcB7tX1iCDTSrHskX7nMRkipNSyo",
  "key30": "3tPfor3ZK4PvNNzpfiTLTuoctg1f59gDgSuwVYzGFNu9GVddmbjmJfciDoMsRSnq12SSd5RgHD4BakXek1qPbtYv",
  "key31": "2EMTGsGgwEcYcGhMf9hRwaocTASPi4PRYiwrBohsCXsqQcAPgygXfCpkBmXXU3UhN9hNgkSNcjn9W2w73c8GVNXy",
  "key32": "3BndpDTsorh9rJ8WRvPCQ4n5Ro9xvcCK4YAWNbjcFj8AyYNBVFRWwEB5tr6YwdnficCqZfcbyxAcW8v9QBrtWYsY",
  "key33": "2UmaPjZe6ztyQM4uciX8CAuAQACD5QB6CAf3bCf4HuYkGQbG7vQFtgXef72dstLfgmYfdqrVyCUAtpPEtek64aDj",
  "key34": "Us3Ua3pAGkZ9YZTMeZpvVxA1ujpq9BufeRcMu1YWZGFwNTbYecwjCf1c8gyS1n4YYETKUbxUbUDEMXZKExhYbpm",
  "key35": "5whH7QjP29WFpLKi5ch88E52Xxrw4eqCTfaXaL51suqDfG5U12ALE4d23Qdtuuje9biEArjjzoG8QPExY6KaQTBQ",
  "key36": "32mBht43Xjp28X24SPdPB19N4RpG6PxdKAaK1zzuFtbEs1JRWfuTLNq5AwjsmYr5YLNNZ8FBN1DEPehJucphfz4o",
  "key37": "pEBi6WjLktXmRmeDBsLpB9TAgg2rLPTGxW6RvUsJHG7oh9FAWj7fHJ3aPtJHmupUggVninQm8PBVKEAwHoze6XQ",
  "key38": "porbXHZZPBYntchmg3ayYVyVrEo8HX9K664iQwAS21dXaCMnY13jHE8Xd4NSDFnxv3JW5zUZSsyySmaz3PzCo86"
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
