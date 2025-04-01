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
    "baQPf4mHZAr5mxC9Z3fTPcg3bYG89kAvs3VGupCvNdqK2PtMiYihh7ytTvP9Hrxrne9yk6Ej1bxjBdfD8F82BRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ukae3jDC3Yu7xJjN6BUrDmTypAqtePCmFwjqvNk6gia9npKWFNxWLzfe23FqexNVkrsL3TSLKctWELBNE6hdMcv",
  "key1": "29VAbLJas4Ay9p1sNqpY4qkExLkhKHPXQTkg7r47XjZo879kzqUvqxWMMxkKEW85Ne88qrvFn5YQturTeV5zB6kE",
  "key2": "4W643MxxFxT5w4nFvopwNNyxLqqaNVFBUGjzGwU8cTHxo3oCcvFeTfKsdSNsmnQ3S6q4vGEixbY5EtLrsnjQWuKz",
  "key3": "3KjbDrF4f8EUv8P5BeDv5q9wsq47yRvkLPzR4RXXSt9DWwzUfVZb5bgQqhZizHR1bnmLqMXMf7WHJiYMicoxE2AV",
  "key4": "5EHcNd8gKGucFZByrGUpcpxTbRpYhTh5vqdwRhs6hyPE7ErWLKfXNxo9tuC7DoFtSGCJUtJnSuWsf3oEirx2SBjb",
  "key5": "21qDi1WBe2fLu9oGrkkLTaTiRMTyGqtaYbbWEMkSxcVUPnHYLsoFi2q9TCnhjsMaMGbDNhWohjhYk7j9pHdfsqm5",
  "key6": "3mSnmbZUHZ5WsyC9WPE8srE39fNjAmanP66KFXCMh5j4RzYRWmFPCep1n1ehKpwB17gANs4y6hi6U7t8uoYFPDpf",
  "key7": "3KEvvQeZfovJDJSrJk296ascmqwqGxemMZKGnvpbJp1sAmNDqwJGNJHhf7a6kBXh4qMXusJ3AeFkt1fAinvCk9Xf",
  "key8": "FUhtzJSMV4sgfHHMfPwpntcaAbGJjvHSAwsF4gz1B7ghzzd3B4oAtcGoB69dmb8mcKUpKWxdhZU6a8WbdFSmS1h",
  "key9": "uVr4A8ZKkmrtABRXnZsJmdHHju21vbEgMZKr4qJA46Jao7kZVoSJEm33hHUxkHQoysuuBKe2RU3YEkLjQX8uZko",
  "key10": "VMX4dn58hjPaq1bpTpiDBiBDHW4w3ZD2oSTLK21K9KJn6CeTLn6hRTX99S2VtbuSkUW3h96eeQT3mdXTVwk4TZv",
  "key11": "JVWpy8QTWrUibhoWq9AqzgYSrJpKsSUWHjEnJfbvxCt5frajHfVe95AeEYJjZNgWsFCUdT6j6K4X7vwPicjwtwp",
  "key12": "51hwzF8cFJmbjheRSq1qQ7faKTLKRZpV8sVzSp1qGmNbYS48V8akR8AmVFvKC65TJu5JW1w66cxmAq1grbiazzYC",
  "key13": "2HnHyH2mzmyvJFfWT6suFnN9uZmFfgRzbsBW8eAoukoEwdJHBfSxg1L8HXQ5kV4gqn2o1niFKtxByYk47J6UT3ka",
  "key14": "3h6Mr89t2XYY61MSCetGj9UvmkKcPW522N8B1BPSZfSwVBEr4JcvxtqAJER9ssDh3DxZ1imVTNKC6pWqVDEro9AL",
  "key15": "2ZfARFkep2q6KF8B5qQ3JbMrc2SLNPnHcS7Dt6ozKmxr5Bum6BW79MDMgnKxcnJx5e1jZgvQDqAMF4vTs47D1MGM",
  "key16": "dTRjifHmaCma797CRyQn6XojVM6364KTYwz6zHBDZ1ZCb26kdVhSHYjgSjSdtaSW4PwUdd4npK78Lh1f7JooYXr",
  "key17": "dP4VS9BtTwVHAQC46tdSUbDR8UyDrMsnmnt72qX3mtZuY76Lj1oBAm2FSzsVFwcCZVrRp1FKQkNrY4NQjv8ydJw",
  "key18": "6334szQL9nrjkMbiG8eAb9yD1hFhWsDCpJKov7mjDK7CgjCur47X2LsfQredfEUE8vSEMPukJiUXMm9FbQDYecHi",
  "key19": "4ytBs4UxDHMHB7NYWV4QGVtVEb7BCtMx4CVthczFX49gmNJg8cZZYvr9KkP7j4kmhMR7g775MyczKYEyN7Tr32uX",
  "key20": "59s4TbeWsNbT8He8w8Ct5n5Rb1u8rw77sU595r84J87nCg6wZ9dkjwpHRftV38QjEDaP4per8KG8Qt6NF629TR3G",
  "key21": "3n9sDsLGWVDcUCSB4bPo2wWE5CyUhE79XztFJnEgmdUUG5augphLoU6no1zw3mNcHnr6mHgjkWhRPXuY4uTtH3N9",
  "key22": "4smriAip3yA9mKF9g9eSY9f38RUrP1ycnP7foxqrmDkJ22qkK93rBdTQ9NCadT7EDP9R8YiXzyrMhTjFaQCNHGDa",
  "key23": "FTdGsT42iUYsUqhWuwMh27nTWAqEazocX2viJXKnbnPYFFeSqNVCuMBxDgz8MqwB7FEmpfAVfK84o2pZ1RN437d",
  "key24": "K7EFKbGcqoqoiyg9Z6hXuedYeSrhG39mSagca8CkwvUHDKv5DKsUSYWk94dt1eEANaubyqecn1t9eMoJCohxTZs",
  "key25": "3447QycjDTkJNPukUTSYYUrPX6WRtsDTEUmRV3GBUnBFCVgo86TPLoDrumHhwJtc6pPd3vPemYRS1X6uwPhnBDvf",
  "key26": "DnCTgvtn2BAJNtC4SBUyw629xn8hxoLjvWcKmR7wYoAfEN2V1FyRxJ5bKsQeHUpejf2YWbYM8rgJU17zPPxsrLF",
  "key27": "5b5XSnAUB96Nv4Ehyo2WJGcFswivEXe9RSf1vPwGJUEpDF4TSJLggWoJpZHXLbLzUtfuAaSP4jEfSSdqczRauJoa",
  "key28": "3s2ftVujXzS6bKouosaEYXTnXv1tpSaWkRfkeDzwb5UzRWbP1wKUSGuDHq7XnA3E7aV2KeEHhVdrRZHx6eX8hMrH",
  "key29": "2USumu3TR9Aztj8dMTN7DenePcvF9omsJzooe7z2sXNS8YAsZanJuaiXTdoyjEBVuizMALxrRbjMoqhBU7crZzCK",
  "key30": "2cyq9EArAxSXjeZ7MMH4kUmbvxpH2mBUZ8rrWJS1PmCAR2DqrmwmuSSvPZNbhnBMUWMquF87PbgzF1RzefG5UGgZ",
  "key31": "5JQ2m4V3KGQnKGR6xyoZ2se1e7n4sYvG45m9SmdSBP3dAB4QyeBNmSA7aqUTYTzwzZJNr27q6yCauaSN1g7VZnzV",
  "key32": "5SzpcFK9PNqmDPKsqT3pHoDT6d5TvsM8qej2nqH3Pnv1JB51DV1bB5MvaGiyzPseMRnDRQfFAeSn85hHk9U7scyv",
  "key33": "3eccoYfB38Ax7CAyphCpLFeupfTkNMA76pAhpceASuEVvjFqzYBuG4iTNSzotgw3FVXwyadiB4mbFYdUDXKUxJkq",
  "key34": "22NP6XbNfkV9gQXkyw57F8MUaM77QRfZUBQDcjVtDFT4VKUk7aLLZ2HBBKqnRTR38xQzMcYVYvNgBP4kY7S8UyYx",
  "key35": "4TZAYcMCb9cuyTRQMBxEyjUeJwvsSaSM8XgfPphFiGjrBb8ZeS8v1JASCXp4KBtSty26hMmregArkbzXRyphJhHf",
  "key36": "2b66Bj8gjqiF991yHStib2x3VowEm6aoBg1uLVwrbXqJ8es8rFpetbjCj7jJn2TWiQjKTHPTbfZYtx9H8AyprVLv",
  "key37": "5wVmqUG5aTpqmrS5HR4QuCTCcK98WSjijx2brdw1wCui4V1hMxaGKKDAkvcyp47fschhMZbLJS69PCbPPZmdsC38",
  "key38": "3iuHXp3zByhbaHaTd82A44RTQgf1RQVoifwv3jTh5iPsonMSLhc8T8nE81PQFqh3f8Y5J2sNgTm77mEk8ETtB1Wq",
  "key39": "3hTtqZCtFWFEqjiuLaF9Es6Qb5j2WFR6LSuBeKmC2pcnPT4w4uxnw6u3jfu2zJgixR2cpx7NPEtG5khvjH84PDmg",
  "key40": "MLhLe6b5NjqXVdLUyGUyzn9gNhxVR5wbZ2DGoGbQuRCixuB4korfZFQpwzWNQuBt3akKUzbR9GT1rKpqoSSAbAr",
  "key41": "66YKmTTRhNYC268QsosCLCiS64s6XUwSEaU72zfkNfD8Wmr86KwJnQrNc4JHovHEku1Rx6AaDuZ4sAo1f4XTszjc",
  "key42": "2YAN1ozwRbjb1BgQCM3Qhd8b5CPeiksRVUUFGLXR7ySh2dCdgshG1iV7ZJjZma5zE2HYqrt5T5Vn4Xbbw2t5ULhJ",
  "key43": "3KEJWfHw2brQrJuNsAKbh5wWuLAMy5AvNoY4WhwGwEyb6nMmZ8qmeD1tcdorT8hmS7DNxDHEYxTDQPezLNFzxhoT"
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
