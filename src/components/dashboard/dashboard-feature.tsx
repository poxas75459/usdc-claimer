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
    "R31d8xKXN9knqj4RqykTyzAoRtr5goCvQK6V1En4d3VdJK8mNv74kXwogCLSrb1xTiMJ6nMKzpdGYxkz2Do3x8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sn8iBkq7aGMcWindH18GKG7C1rmaEMUyQVk1DphSpb2961h7j2rGVAnDzhMP96JP5v2Szp3avn1sneH8hDgtjwq",
  "key1": "3fjxTvHjr7ZvJoeDjwDGwzR51iXy6o1wGYANNe5R33TxfCvZXMufdNdm2swrFS4XMDi2HUzKE9rvLMRAJyCbWq8r",
  "key2": "3tUDhpVcnnmv3WMikaLnj8ycjJiAPeURLe2HuJoEPxSVmXRGy24Qv6jccDAocG6xqEbAX3bv2AAwbsvbYwtLbbqb",
  "key3": "2WSfDVoaRDfs8dxR5YZqjjQ5rGtdGSpnmm1YDvQhbGKzHJaXSVLQmyWTz2TJZdYXFBMwkNGHQh3yFDus6gBjvN8S",
  "key4": "2Xx1ftPpJ1t6fqrtzgntwFNYnJrHuioVLMkLwRvP8QCwsz8fUbmmjgKjFt1da67j6VLkJ8rVWQcGqXr58haUKFJ8",
  "key5": "3HY7YaJmTBAP5xQJ1D2g7ro583DdqkiGGnGYCMCKvXwxVELdBAq8y9LBpJ6TR9Po9DnZdCHqG7yXmR4vDY9Bost8",
  "key6": "5PijcetXBrm3MDCeZ1jMLESCdLeAiKSpcg6XT9dVHPG6J3WSMPRybqmbQFei1dbv1rQWBQWCKTgYYRK15gJ1CRD4",
  "key7": "5RM8R7bKRSPcEo3wxGqcXC2Hb1zTyYVbcDiJ6KSnQWhpQM311Dtz88A8emqMoUuhmkfRRjNoqGbAsLcgj9tA7pua",
  "key8": "e5VLkL5t4SLto3cSF9BkUFN6jJ7gMNbNwnL7wdefvtJwXw53D4vwsw6b96pfcjUBvSDkoJcTPW2D8NTXm2nUyeS",
  "key9": "4GdgyfGnZeUNbB9rASWtgQKsPwm1irbNKzWRVq62KKtobMg1Ttx8LE65RYKdt5xfiPBrw1C6hq1xCM3hHZiz8ePF",
  "key10": "FP4TzQk7dKy95p1Ee3uthPBiAqtop8tQtgmKSGKDWbQWdmHXzqS7BXrVPj14yir7z2FSNbRQcg9Ts66SBe33dqa",
  "key11": "41CGg5gtmfNmgDhZ6staEKMEAvt5qAwmb4n6fiuoYhpiBADNkhNiPdVe5YSRqE1nBQM8wxmmkAixhiRbjA9otYnw",
  "key12": "2ejBAHiU9oQ4WV6eotmmfwktJr2iDcqUK98sgmLxtPtca2r3svDHNQzEruGDetv51Px5qyvcV59nsDMWKMQcUPFG",
  "key13": "3TN5jFNp5UCKPmCwCNmFuB5JiTZNsokZBPbHWt86JTHdB13HXM56VCp6gwfqxu3ehWyDGLPSVi39BEyevhZba4Dd",
  "key14": "4tNDf52bTRn58wtUxBJFbySoD6GzM86UDLkXdccoK16Ko5xNWArA9xgEM5JHNaQPj5mtgiZq8WmZkZ3UL8iTZdAk",
  "key15": "5oXAkmt23u8f3gKgaWm1JB4rQCbXYhi6wodG2xoaCyJKdSySCafxvXf6FjcktQ1tCg2pkoj4pJbAdpXbrA4Bs1Dr",
  "key16": "5Kut4oPLD3Bm1JFxXfeACWRFV4dYud5hcnkMBTyy2rE6CC84uiFeXFCiz8WNJUps4xXUoabwe3diuL7mpauqoc2r",
  "key17": "5yxgv9aH9Ps4C1oBh7YumTJFeH4Yv18a4Jn1waRw7TmXqy9mpZ2fF7jA1iqTn7Dcrb9ZqDqJEQMfK6SWcHkvA1gb",
  "key18": "4SikeyRP6b8m8t1CCD5cz9dzcMRhG8kqNv5mfNSJaT4QXY5FpsbEsRAhtoSFd4Zjpg7MwGanRF3DPdZ56twpuZ3K",
  "key19": "3WMGcLgjpXF87Rwuy8dq2WJvjBVcbByjPxBHSqFWzW4ea1vy6ALn6UKJT2dLPcq76q97L2L4Hp4MEgcvVnKLmYKS",
  "key20": "27NvN3eJFz4ijppoXbWrnx9Swq2f7zb98s7zYQUeu2He6m84JG5EUXSGii6XxnBrxfHtEwEu81N6z5YCT7YMEP2a",
  "key21": "3uHpZiCRkAYP25pqu9nx24nFadH3gfxmsQU4bnP5yigCqUSuoe7QivXWvhoKFGswbT6xvwMAGkkpjmH9aQMK8YSo",
  "key22": "ZGdfR5Rn9zFp2ddZd1Yz1zGkVHPhVfaE19ZPCuSruQQodgkV6mgMShdpMUHiSEDqryaZHC2FsNYQ4UySSqWsiwb",
  "key23": "36AGg9rsXMsumJWjpGCvxLF2PkNWwW1S1jsskm42qHSmsYvtMC6du3R1XX8cjXCiMDJB8id5xkjEmH5WkMQirHVE",
  "key24": "5rGiZutmqRaBwsGx8Evo9qaWPucy2J3D1NqSw9tViYckunQJVa1Ff4sHRR7kytESXSS72csYm4L9ShunHo8vqxHS",
  "key25": "3LYNbdR2FyteGqnapxY1aiHmY5D6RwSs2rQLf8aTYP91QZhFsW2pddAuYe4S93LzVp8KCh2y3HJNXGDA37DsTBTE",
  "key26": "52qydMetCJughoU31bpwUfdNsbzD3gUUT8e9u8AsDcEdGmtBk1SdGswZeon8zwpNxxhnkAnhgX2MLJtLn2YdBpch",
  "key27": "dGmKPbDJwgNcoKpmqBixvqoAnSLPFRmkYMWxvR9oz4Pd4yTnVj2hMBAUA1dNhm2cWeZ7JHZCsdQgQST2Ye5waVV",
  "key28": "26hWpHBSzHUvxqAgoPLseXRWN87saMmBW8qkP3w2sQwD5YXYRVjPuEiGoCQtTqGsWuyuJaAFWv7RfQdxDqy5bSf7",
  "key29": "4jx4vP4WWqWhQ3rQ4Xa9ZCDQUUVV7uKp62SjS6Jd4MjfhQbqGHoQruBgzUmdhGMjZgLe4PDnCsHb5p7J3cgnEoEx",
  "key30": "5SffXvPqcU9Nss7x82yia2EUd3Yq5dazWdy5bDqirtMphW2bUf2tM8d6Y6XXsVTTHNWzQo13eH8J7pbhNC3XHHNs",
  "key31": "rCfdQKf7i6icuUcm52jbaZ53nzUrs4BW4TZDY9tmvhPJag2GwCsax9kZCaH5BvvjesRMo4qbMNUVozAJfCjNyU9",
  "key32": "osKcL3JZqgYR3JZ1mKxEiJQE9AmNUkcSkE87xA69GLKd31BYvP7vwjnrxZAx2ShzVaAvFCEPYN7CF5MihctkymY",
  "key33": "2dTkZM2VNHbYUduapAvSnNgrXHagZvB4qvLSdXsTK9L8qzM4gsjLXCdV6W7Hxkq8CT4nyvkf2eqGVyaMuZKBFr1s"
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
