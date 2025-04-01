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
    "3Ck9bkTq5mmiSRbEYefkaZ7EQLpU8iY9cCw7C4vDsEUKHc9RFb3bJzdXGhfQ3TZfEyZtiYhP7NTpAhEuKe2EEBxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45nZbqB4D1Gz5b5LNDkpyif4V8QXakr4Re95AdNeZPbQ98mn7hr6vwLK5ycq1Uj4QWmkhxKtFnsey6dUkFfFiWRg",
  "key1": "3cuAFCUPKcwiJt5nLZiRazGYqpvX68rEFgWHRALzM9a2K4LFDs7mK3pWjqKjg1wGimXuy3deTD5Tdw5tULs3wsgT",
  "key2": "N1Hw1jGaKZbAcc9QHGXZNd5e4nhDBvarpppYasuM9emjzw3U46LeZ3GhqytYHM5uWk5GGKzA6zwP3dzKwdYfdgU",
  "key3": "2PFVPSQEGqyhXwvCiD2idU9rYtH1fnpQe9z5zy9hsUVvqBpixrUREgF4rAyDjsNdTPwRmGuXqPtmT8deMW1Rxk29",
  "key4": "3Jbx972E6f7wrRtvZEQ3VehaMygSvfJjbCyJ1WxrwSP5odKG3Smt1UmS3F6bsvdbo9Cr6qJjmdtRNaT2qmkSvwLw",
  "key5": "4CrfSiyVSJy8vo2sUVAkMG7sR57pNgwuLDEgA4eA4jJFWnzFm6JvqrbAKyVVPnhrSEDUoSNMfZdVdRDLihnG4yFP",
  "key6": "tEtggAFCXcukARjzfKVaiABZuGbjoyo2ztDiRAV5ixF1mC95Ew4wxhFKg7bR174XrdUyuWycdL5i1FBqRxEL4TW",
  "key7": "4CFXaG7ZE7tDFrN6QpFWNPcpwZdbjAUN1L6B6ERGZ1c1YC6wpTgximsNUDdCBGN5bW6MoCiD3oJ9bRfsvcwvEFoX",
  "key8": "3cyYygc5sRNLnLgcAqQ3eMw7aJygALkw8QgZ9ZTdiAcLKnLgoMyCRP726rxgWQooBwTAziCj2C1BBK6PoCTX965t",
  "key9": "4FYkxRKA3BWDE3KuZNBQVDoUDgVhxbz2tBLWkktnomniq1tQSaWrDeCKqPfnP1xWXv66mZfWWUEBt9ajY4jaRTms",
  "key10": "2L4eoojiA1DvYBEoh3bB8Hk9qXejyZEDX3tRPyTDxergawAVcGMcgyiDE3C82H6VCp8CkNEYHXAcsaMuT1iqBiKg",
  "key11": "4QxqS9JMxsoBhgK9zU9cgH4k5oWuWNoZVJnGwg7PtRxezNQu8rkZ4XndpPVXMNZ1dAo7ij9HixYT7znHsc29fmbL",
  "key12": "5GmVNyLbp3KoAZi7pYHEJ5NeSNy7w5Hp8ddBizGy1q1WqvhCzhCcMoJak2sQdMCEbe4ZZMGzSCjghVAKRcpoZAj",
  "key13": "qnm3PpftbRUUrcAJYq1rW9K5u4QK5TKPa5Ajoi93pUjR137sPrDharWt4pn4KXdNLBNLj8oMABmnvnKBmvUX1hH",
  "key14": "27P75qWZzLjGz29T2ReJzoQcAS1wL1YvywNo8vqWut7dwSboLzKEyZ2hFkexQJ6ZpL81V6jWAfAFZVYsrjYAGhFg",
  "key15": "38sBEaSamRGaGeq4znGMVCe7BrMqY7pad5PBCXE8kz6TXyAwFMYuQhffsaEjA3AmveUsDxyP7ui1tUbkor7sxR5J",
  "key16": "2ApnhRoUVGJdsnrhTGpVCVz3fQTBnQmoQTmh3CNWrzfWZCuKRPD3ihi7cV3PjZYxmKesTZsbJ9vEb5y6U8FBWqqp",
  "key17": "52H2CLT4tSr4u32TarKraH5rjRJ5qZDnkvJe3AhEpRn3FtfxWTf5tjG28pRfnsttw2eEdNfm7EkCgxgrW288KWM6",
  "key18": "4MYEkq17syqRPJQ6S1r9FGL8bBuxxuqPmMzTKfgEmAm9HVgqi3EfLxufHQHcCzJyvHem7qdSTerwJoZXdQzyfUjh",
  "key19": "3VPMhzZUWD9RVPB43ug7iW3uNDXThL32gWjopCgibSD8r7YWWzepTpAo5WeZiXJdne1gMyTRvumUgUcQZnpdCC6J",
  "key20": "3BozuRT51W96ySddKgs5x1tmv17BG7gdnJMJ53XNq4Md2GeedFuEseVrarzzsCdE6nycVbjtu9Rbjh7WnWPakCWL",
  "key21": "7AikkzPyJRezoGhykBAJUbc6t2ahcGrbHoyKr3ZY219rQW2U1EGFWeVfr6ZEy91CyETbnVPxAT5mLLdGyvV2Upz",
  "key22": "5aNvpq43cuVXb7jwLW6nLTJSC4sJBmLQz6epP77gvVUtcgYDVm9fGFzSE2TUKsxUQ4BZq2jRtGNrnx8dVQ2SMhhD",
  "key23": "4hiMyHYHMB2K61ZVuFeEHSueqyVQBwcLBfvtPbh4mPprpPW1qqRJBW3B5FJ1jSVmVuUdqNMqHh7tnqMmMBSVPNxR",
  "key24": "52eutDafXdBwDGYuyysspR2QKbJoCBx4Um1hoU8VD4QLBYkBiWqmoyPuAchwdxrFNVQq2esM6vkbLEoBbL8MaCko",
  "key25": "qqKXWDessqHcaSaSgbAvepRGFgNL66enkhWCmvAzgnhVPQ5Pp7rkoHHY59SZocopkRuwcUVoraG1stx73U4eGj9",
  "key26": "5LxG2SQBvBu7PdtZxQuXveJuPoaQqhutdRzSMMNgXGkpMbEsdzUtgYtkeyHwc6sfutsQRSc5MaW3QBfZ1L92GvDE",
  "key27": "xazt4DQEfDX3AsKhdPnuL6HyLyYM4x8L3TCiKdE9tTCmTmQwAWU7QDD5EEzHkX1hZEg17oXYWWoebPReQGUCgdU",
  "key28": "5mEK8XjNrxXP2JzsZLbmXgrX1N9FBwHpXoKVm2FRWDo9D6EMpoLGdiM2t5MDnS38qE9YVF6NoAdf97gwoNZ749i7",
  "key29": "487Tyc9PuqHk6okga9Ct1oG9wqTM7V6qKC6MTtBKKpt4UDoH2yiUX3RPNDoc99nf53iDrEvJPvP4u3fHR9VKggRb",
  "key30": "5aqpXTWZqBZYrP6ouoQGMYLahTge1h7UC6M7cDx16xpAuFmiyGf5Rf4VSRqqFYa2umvuaAaxQftbDekcsCrswjXR",
  "key31": "5fo6on1iDiZwpXvttpDBiGGsRniyqusH1WxXyDsSDgT7VP2hVNmqLfHfZi9aM1HRkYzUaGWxCJc1iRF24NPNQNnC",
  "key32": "hmxjBGEYcMSqpumTAdFzLqRLgwPTkeCQ4rmEu8q49oFiAbyfDRtijrVg1Ctq1nvw7XmBaVs87ZkVVFgo3c6uGYm",
  "key33": "4jAqb48dJk11U2VqrAUNvBvFWyjFsLEFYiq6FpuvR2wDzB81QXTWdkmtJJm8vcwTWDa3D2EF4BYg2kDcYcG9B5Tu"
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
