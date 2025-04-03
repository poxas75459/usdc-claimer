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
    "3G7J1Z3beDLbXTD8GpjbCHtC2Aby2FCBf4ZqCf4i6A2KtyhM3rXN1qrVsNgw5KcdQNkm9JUqyadWDSxWGS9gi99H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ywo2TZHvpNPBBBpvfBWcRd9qSbS2M2NLVe3nNCsffVeemHT2Rkypigw653gtw2f91T7vc2sDusEv6cqwWsXxSB5",
  "key1": "3pE4AiVxsMKoFnYWfkTx1z5x4rZUcqpCUR9K3uiPz1uBbvuTMNuFuLP4WQisTTBKYiu3qaUrac4Skqba6aBd8U8G",
  "key2": "tweyiGYfzcJPcJvQY7Ze9Uu16LxS8oUdGck1H4XeNrbLrwZzHfY7tSrS5YdKL1uCjiZeM5qHU3ebWLEyUCUZ4j4",
  "key3": "fw1o6GpSP5MRZzm6LBWPUPsQpzFjd6hDnpHMVnRj9xcyCTRdXh6EEKNb2JmMM2ne1wbGRfZ1xB4DDcaMazggbxV",
  "key4": "vyqKuEpuBKZyYNyrPgBqT4R91f6zzChk9cZCZmjS2Zj6AsuCr7L9VMz3Xgv2kX3eZgHd3YRCzZkgtGN5ZZfqYg3",
  "key5": "3h7BbqLad7ztWisVvr9yax5kHQDW4XE6xhoQ9EewNt8s2dXdrdFBVkAJYbJCC7K8BzB5RmnGGfZwycNfHSkmmbyM",
  "key6": "47Hrz9jFm5Xod5A76P5rGcpdf4JYviBY3ncop43DRVaGH6269EHnAc1jydXQkBPR9UE7r2QtPop5r8GqAXffysbu",
  "key7": "4LL7s2hxfqKGykPpT1fyXe448q8wjfdYTDuU5SKNuTWbbnuJ3dVKMdbRJEpA1jdYogVB6yxT58P4wRV3u4aoGWWT",
  "key8": "3sbb67caKKVpeDBwxeUdxUzZm8gDRjLoyB9Gt2Q2QkALUJXK2tnBQbGHbeXbZwdXfRtC2sRpf5hhRnjzep6uVqxn",
  "key9": "3nCUnKYjxVKt6sK1pvt384wa9z1MHx2Uiv1ucpEckYkZjNDRG3osWtEN4W4HhNvThuCCp7TYbpYjs4BBmDjDJn1y",
  "key10": "4HXeYDb4viq9WpMZvc4hyFkqgnt8PLqwwuJ5boBhkt1a5smWmDuabB95h2KYtdE1mnto9DnfwJ7FjghFAe6etCus",
  "key11": "4t3NAUhF4ERcoE173jgxQKLK1qvEmagPwJWx9drnyErSJqkzYG32g5ik68MbagxMrWDL2nbHwaZMA1LNbLq25rCG",
  "key12": "3XWRaKqefHZCUPFziMgEnXn7QsoFFcPRdya2bojqNfz6QxhMFhQsVjXA8iu3KmEnCVo6LQefdzh9iU14gSQtsKTz",
  "key13": "59dMeg5tiwzUJHCEQ7HvELgRC5wQfYL5oG5ZiYTF9ZiZugfeisDBQicC1mumMXinJbSP4kQiF8GrcW6RMvfsvAYg",
  "key14": "3G4cBy6wYHxvMpr7PMG96VqG23bGuXFYSDt27PJkKF6ZgTVHx1bYE9zoCiS3ypGDJtACqo5GrhGagZtVLsofwMX4",
  "key15": "59XY2yPF39GpoNeCDSzzKijHZBzTEhWBGZbjyyQQBUUVJFyY5TSKC6P8v7h4r3afyndLi1jB7TyaZiPKgunJBcA7",
  "key16": "2AefkZ9m5NaH64CTXN4CDf3jdig1dfssfqUaCTNPadZtALa99gov5A2Adetza9k6uKVGdWrjJ9qYeULJwJScgmG4",
  "key17": "4m92xhBNbXdVUtLob9RrGpwnpWqU1REhoksbZshsebCqJuvjAMcCyzn3roEk2VAGz2Ghepr4FfDo7bERkBpeesDA",
  "key18": "5eNUvWT8U1qYBpRJ8vE6SeGjZhKXnZzgZbAxhie889Uexfoc9pWjfo497mEQnXgteLLPS8kWDoBaf4em9uAP79MP",
  "key19": "4nsZL7H3Y3A7NirvYkGyMKKvRP8am7cdUrncEXDW8XPGvNbd7ZW4Zn26p46A5c9pZEAHoCLxmYETy8kaNdHAkbTg",
  "key20": "ir6woM1aRti3CbxjhARXYDieEsirdkHs9yV8QD2tdBMbexeXxM8ZAykoFGHdypw3krqsN77dGKTtxma41QiP7LV",
  "key21": "3hE7zqF1UjCmV14hoN1Nt6gH27SQX6NGDCnaXP8tY24vVsetUTSATxuuYB4fWb7LTuFi7sCDVvtScKTytEpST7ji",
  "key22": "2bGag4xNxjYCqdLjf8QiYZ9N4LdWBoDzuVYhhV26hNc5GTUG2iUStSb2NjBPSRbASSn9C7bDKejdkJETvZJxjckH",
  "key23": "SzWFJiEh7zuwmRkfY3EAcSrcCE7Ts4oVzjtgvtYB3v5EgcQ6HeH2xc4yWp9jSAtgNU3q7ZcnccnzrhEdor69uXP",
  "key24": "5BoJ3Sgc7jqgQ1nqFdFtHYE5k85QvtFJcrhehukVjBT24Pj1S7jnk2YMvortgLU6jvLdk2Pr3UERStqpUdvDWZLY",
  "key25": "58xrbAPj8woS7fcrjBMzN9DzUa5iGqCpoJPkkKDHxh6ziNidymrvyuKLxHMpWi34bLYv6nXquB3BtKEMfX8Y8DCy",
  "key26": "5w5P52VJireqN45tQD4PXgx9t22Rp374vHjDUjx1vemQiRnuV5fhCo97fWeE5Y5CVUBo9Btmrq28qGQShMFGircS",
  "key27": "61gGci72iRHmiv6oVydq3wVix9bzDm3x66Kta8XoRi8L76fdmFDaNGw3iQS1xjco3Y51TiyDho6vq5p1RNy8kLMP",
  "key28": "2UrHfQqMKGSHY8gFZzSiuqMo3NroGAm75oDySLRsc6qFkQ6fTsm1gb9vafF9YVBtKBrqhjUGeNEe3LYV2dBRqMCh",
  "key29": "5cCVMHSZYMrdphupUwvQ5D1nchTVPhuzFnRNYp8Lr8eRjgbPBGcRGRPTzt4j5vpDxNVXNktgmLxnnXqsTRf5HNhL",
  "key30": "4VMHum2iAqB6aY7ha7DbsPj7jLw6nWTdPcPeXS7orudhXL5yGYqRwtf2QKyhsa1ZhEdNGJQv42ZBPcxDhBTX7wZv",
  "key31": "3PBK6j1RaJhnybHkzgMXTitCavSrqC5ER2Kq94xNtfSTwEfkWRiivgbr3UYU2HTKjFf6UD22GwDpEWu6DKhRvh9i",
  "key32": "M6zD3e2VzKcEFNH7itChuaYC1b5Ev4rrAs4ZjRuat1sW2T55pRUQNo1XngSr9AChbhqi9kEE6TTTPnMiXp1EBXp",
  "key33": "4TSyzQ44Hnijoq73rRTHxSz8a9jvDjPQHobaHFmBrNnLcuKjs4pUJpZp69oSABp3cxx7fF9Md1zWHPQKrT9pBLTm",
  "key34": "w9d3LM5p4t6MTD91YaXUbkaeip2PmhNpB7iusmjS7jwAhBnHSPXLjKCm8Bi7eDDfL5g1qj81xFi6rnGFwcWmT5H",
  "key35": "4567sfd2PAjC5NxaXbKdvYMvkrHpFAGRnfVKPt8M6EwKmXCRY8vuiEgvv9SEaAc275mQb1JrppKN5efE237RV3h6",
  "key36": "34N7vkakgtDoTYDPBpsfMHrZr9p3kj2Z8hf4LDwrg3t2KFN3T5oCX3BeKk9Xi6eGpgY2FUs1VqKxBWsMYSFwk5Jr"
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
