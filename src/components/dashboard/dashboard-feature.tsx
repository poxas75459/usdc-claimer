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
    "5ymhLB1ELhkfKPEsytYBwBnVWL2XWpm48jY7qSFAopsdaQ1Spxz6JzquMYk8yHhoZtChKU94QXUXy1sKC2YYUPSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EzdXEkPteHeRKnbJHC6s4bh9d2rTHLukeq8LjLNiQzw4RAkHy68c1YekrRcihCCwE51SmKTvk3kRm7uA3bhtzx6",
  "key1": "36xHRbmd3dRfhop7whRN7vC63W8qUqPsxpEvxUtAWXHbYmkrTZbQc9TpsDRASxZqTyqHzpnBDeSmob4iCo96Rwin",
  "key2": "3fGVWHqqcVYLLXSnFsKHL6YKwSUdTvgreN3QBsiAqiSUhRbagCQXpzSt1NdeLuyLUbokoxTvNmaipc5VqVDfnLGz",
  "key3": "2ZVEQQM1neG1nv4DqYHkjcqsnCfG2NMKdZgAEiiNPDUNkdZUQ2gEyg5q6M9qLCpgDrP6diumHvHmH3iNqHX2KhvD",
  "key4": "2j9fgNSUPtseSzeokB4kzPvYq9aCwBRMH4rfd6u7B5VUz45wzEBVXmgUBvfxnViJBQLWFH9eMDE7RHG9M9LSAjiF",
  "key5": "2JbXxrwns5caghdmbzM7jcHn9Qg5zdcPgE2HhBzQzYxnJ6fvhUoczZG6ZJ1nxotdoQ3G5emRWCXjuYsAY7NNPgs2",
  "key6": "2e5Cryfa6rnZ7SdDkpdP44paGakKA7jKcaydd8e2GtTYpDY4nY1ge3AYQH37ZyFMCasHxqQktDEGNuVSGsPT8aqb",
  "key7": "ZWrPukicyPsKFNMG5VstTJZgVR9tB1E8mfMJqr3uKMd5J2rS9Pm2wEQQ3rzRj4BrXtmLWyyE6t1rTREBy955oHj",
  "key8": "5QZ6w79h742gCzB56RyVpguGDxgdu9jQBNi81kyWPJ4fRd2ttvSL25hf8pG2jSjRTPfbfzYQYpEjPavqoQYshZMT",
  "key9": "4UAmkXCQHXhspa19PuMjVAkFrWNSJEEiYUczzYhtqgDUhfN7z7Y7s5HdCkK1ZJUbvtWWWp4TE8UinCQoEhWvjw7D",
  "key10": "2ybygno8UuUE6ft1v9jBqwC1n8fQu8edxWJtcsKXHePcsp1eeadKi5Ba2hizkrE7ZwyBUPeBHQQ63YkRppn2pZrY",
  "key11": "4461EbN7pWZPW8tVX1LcQDYMgtgJyTfb5X8JC4tf6d2aYpt2uvZLvgf9buk47Tr2sGYFgwEi3UekX7bJKRVpUzBU",
  "key12": "342o71DcmBNvWpGzAfXfggNKpqXXxLhuNTWbs1wjKHdYBfACVQhfWWGyc3Kwkofwe6uyt3bPwcrWSs4Zc88dVii5",
  "key13": "2M6rjgJMU6Q6pSEZNW2sWEiCFqH438resuD81zJbAfiSGPs15WkPcTChtvQWvYmXtRX2jsPSN5LeWrSTRCCe3vHP",
  "key14": "5vVAib7qPRagvH13NuXuD5c5WggogNkfqrg29TnqqzNKVEuUeBYuix7B7TyT6AY2bSwt15K2sXS6fFuL9jMWuzuV",
  "key15": "481m4j7nb7aXCsNvZSuEou9kX8kSDSojDjiZtykDxU4hdXEtcxLnXLEBYgBnc6qMF67Bf5MPU1N4jDcFZwKdHmP3",
  "key16": "wCf1gaPnP6i755jUT8BooqGYm2isnKzQ5PBTcV2s1p3WZmcEhpno5w3dYyag734uCuo6k4uvxLJujSWM9a8X6UK",
  "key17": "4xXBBSeXVeMeXxREaRoKjaKr7NzLtj1TGmBSCuEMfroi1LJgEBWNMo4tds38aPQD8TbAfwDJrwzF6kVcZckXf8is",
  "key18": "3uCMceJFnXhy69HRZA7G65ypjBzgjBVMtYSqvv1LacBy6f6k3RzRVjYy7Uja5Cos9qBwjGYdVtJiT7T2GLJswxgd",
  "key19": "pivBK42wnz3dDyTquxfrHigisGkLzK3jxuaNH16N2m2NiusSyijkrCaafsFT1F4pX8Leyt1iCPF7Xt5RiqU17RG",
  "key20": "2dz9UsSfC2GkW8QL3qzkyPn7ReE5F2BXsbBLqGzG2dKgv92NhdMHdmuv4vEjau9JvCgrpuGncd5bDukG3QQcAc7q",
  "key21": "5kuAuaHtZocn22FHtTCRXjBwJ4rQGaYqFoAq1bHBPw4C4mDCJ7SpCuZLThKXtihbpHXE3R3EFkbXEwxKbeVBzQdX",
  "key22": "2Q2MWDEvY5pUX7oerA9z5bAVukKKEHbSrxeRhXwNACSpicUXcnPLdcpPUmdEZcTLmgnRvVHuXd9hwDwAeTNFdafv",
  "key23": "5wMy22EoJxL2eNQ2Kw5H3RESiQ6yvkE5xdyARo5qMAugiYrEWet2q9s8ndLQ2GZDWQ8w4wCTiEjyZEvAcH5FQLTM",
  "key24": "3kxbJ5QeL93GKjydSj13LC9FcYwDWsKf62i73xbW3dvbo68mb5y5zZA8hxq1qt15H4zL2Urb8zUuLktQg9vmAvc4",
  "key25": "44tUzL3toX5pwRHURZx6YxSFUNGx7K5q8pwyWvUSLJztXRcYY48bbt4ZfkEnSg3j4SyEPJDA5qWDdteEChLg8FnR",
  "key26": "294p5S7FpkRhBrSvMKnUGyEe1pcEdC3rsVExWPFgCJddifywTzVu7m5Tu6U2we5BZMpUCuiHMADhDvBsb1rqi5Nh",
  "key27": "ZRSwPYpqgRzqP4Lo21ia12LzHgyMmV84kAEeBERxJGJdTgy86UketdPPvTwdu8hMKPy97aAztCkoTBjgPjkck1J",
  "key28": "635pCUnqU8gMaqDBvJ71VMjtnqJ7CwEreJNmpvum3ATNUVfgRYVFJX1uao1u5TV9yfG5SBfqsvPcAgE7MUA5SAAF",
  "key29": "3uPLwCBxDvfv9Dm7E4GY4SbHQ5zEd3zx9a7edkzAn5UH8PuB9tZgbkoRKqpCyhBVjBRXUjJ3cYj6Pcineuv7YWyi",
  "key30": "5MZz7wHo2jqrZ65abzDMxXsPvdnSoVKi6fHMhemYoqigWTEmwNwqyc7pea5DoWoaZtajkUFqE7cPNLScRB3d97UH",
  "key31": "32EJLzCsh8JxXNUg6CeiqBRhSWSXhRFWxbm9ZmFKu2vjQZZ5QNio4HAPmML5KxHZyJ29n8tjRZ87GicGJxjW5V8h",
  "key32": "2EZC7hMbAtJm4jXTPTEfZqkFykWFeaUNK8GvTMANiFBME7K3DRbj5fFxXhjVx3bk1MFoxoGaLty4g1Z9TeYptQGJ",
  "key33": "2AGgTVaa2p4XzhWaRoPxzyrvg2NJGtMMUZD1dKjJJRrYWu9fd4RtS9BdbRC4FZysrBr42TCQPeMx1wb8h97npUMA",
  "key34": "4iax6etUrFzV4m4z6KZAcQETBcchGZBmsPrMFngA3hyx3u36EP5ufkFx9JMPw1f9Nnuk78fiDKcVi8jjoBV5bQ3e",
  "key35": "2HyVg3yukd9Kuue9UbPErjUHaEEzX27x3igSLqPPbFBeEY9tqY177hBR1Lt1Yg8dqEHSUcNkrDrvAr7UGjLKWyMV",
  "key36": "1Shh1Qybf6V9F78Nr4BkSX9YF3Xp1mRwTPULLXndzq2UiibEpXqBMYghgGZwMAPzD8o5UtLxYMRTk2J9VNuj1Av",
  "key37": "5x2FxfuCXA4w34uMGs5SgPSkmwC1WexVnbxzL6jcbDF9rT1pJBrPpZ8JbeDqjUYTNiSeCmq59NTy1o8D3otBFQbb",
  "key38": "3FivBvhmiKy4M7Mjd23guiFKn3fTtdNNyaZHnxskWSPeTwyrjFASPTY877p9so6C4udXUR9z6pyUZ2316joLFf6G",
  "key39": "gmARuaGYRnCD9BjBrZaJwTUCKY3SAUxBzpnayoSY3RbqUeURsbiPgq6rfAABxkLiEBUpoA9A44bQ1yfEatqAffd",
  "key40": "3XWF1kvD9ZMFDPrYNoicKmeyjaEmD6cZmsLb9FrxhS6wHS2f6xnyuoptU4Y3n1Zni5dbR2HLNkVTJG7MgEyR4ca6",
  "key41": "57AMfZfs91DBgF8YZWQhEVNFY15RVju8grF2oUehSd8YbtEhPKrGwZWiJATHNjZbofY995njJN7MiFeXHf3HFhmW",
  "key42": "rEymepJYb1UZh7mSBSjJmvacMdtBqDYjYfNZM5kaFBCnehwT2TswahjQQJtjyj3DMhGR9znE9nZSgsqdLuGScUj"
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
