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
    "3opkgwQgsimkBiptHp8JwpyjZ4SbWvE7YRUEbrds5ZK32VnL6c2jBQpRq2imzoJczT6m7uY6Gvz5Lqdm7GZWXf9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YHmkyxnercTmH6mJp7dmm4PdmC1CpubrWh2arU25WiXgQ7LUnoWeE2VxWXzwfduVmWKdKHeKjfdwmtnipZbKs3n",
  "key1": "h29NhKzdtBGFizzHySAoRwcCjW8ZpsXEv8qatsAJLiusjNMRnsNqttZbdm1jszDx8WxVC4JKFPv2sDrit9XS5i7",
  "key2": "5HdncFLTKe5bQnAxsU4GsoFVCk4neezGpkrwUMGcZcbDuFjeBss3JdkUxp6ErJHdQSAHTSSbPnJBYbpd7NVTpX7D",
  "key3": "592T4eUNYCka4giHqxGN1dNJ6jrL1y72D7rmMUYH7UebvraKucpA1azieH3CG4k9X3RWsgGZNSRnEjpf1XZ72nrQ",
  "key4": "4EzQRemAtygoLFy56kEtgxtEreDd6QwUVLhy9JPUnaafDYGcD5K2h8D4hhTMnrNk2JEa4E773WeUvjzUsEn3Wk5x",
  "key5": "5CjZfjgwbpZS83iucRhrGUAWc55irz5bBXWvgwinoaMQpqGa1e2RiAyFWf2BXHZvKEb8vJ9f4CyzbVWvaTruWLjX",
  "key6": "3FDHksGkxAoEwNivtnQuBKWEiQdRAfbSHqRAv2sAmitiwC62y3sY28nkpPbpHgSAKrYe6X4R8Y6B4LZgeSxipdPn",
  "key7": "2bew7x5kmoBxQsf8c97t2Vpp9sdTfH2BSe2BdFcwkDAFnPKQqfo1vjpSCEvkUc6iYWt7yD7iUmhpAj4ND35JJ48s",
  "key8": "4HFjbejYVhedu1GKmY3hA9tEBvHy8gLv32wapL6FN4qxARKWJY7PMrcXJ7wpetWUd3AaQ294T2CQ5gBiTt4vKcAn",
  "key9": "2xLfk1MAwcaWHRFMJVoTXBgmGBssYkdmE9hKbZX7GeSZp2t9RVx9rCmq4vth2ui2JxvTaCSUmFRwfnmjfdneFqy3",
  "key10": "5Ac2QF4mvit3U9VfWaSBdaGvKYJwU1Ms7PGqUhmSfZNc74CmtHP2TMyq3nFVXtciXyFn6YsXKCJ78CSJaWreh8Xu",
  "key11": "21v9TegDKvBALywR43cpoHbVd1uDbYfAAXtEBduGFgQybKoPoMMP8JnStwPuHoeLnuE2GSzNhWygqpHc87YoZnde",
  "key12": "9AHceVVYTmbZwa1AwoJDbyUaa7ZHdi3tuUVtPxdJrjbuTqoFYS4Jmb7E3wzaL5qCrmzQYJZAkV372dSwYL7gXqg",
  "key13": "4wkzBcK62XjSf2Wr5HEhQdwAYn15THpJ7v6tNC5LSRBuKTmzUGmMLsYf4tfG1WShWxFe2dWjrxgbPDk7xYG7LQdZ",
  "key14": "JyFs8TZF3GJECRhgSgQwYw7bhEn9mFxstGQRf5GsoyvUgLuNQPpXzw2vuHrLZcy62GqHwJcxL5JeELYtXxsREQF",
  "key15": "rmt6cfLYJPZzotKbGTbhFjnnnuVCEJsoPLPfDb6qLdW9z3f8MDcdbnotomxrbcrWkE5cp2DEd95cT4eWQNZ6FEA",
  "key16": "3C6zYJk3YBDDiDWFt9xsZJyHniZvJbsQk3mu7qFW89ut1A2dEq98egQZKKHydfqC6gLtFTiz43eXefyxEfacaeiJ",
  "key17": "VaUV5qVsjTvDooDnkofsq5G7J55epyjfhSzNTeFPUF2ZLDxhep4zbyFPUgtzqsYZY6yYm8NTtrTadZNu7JnKsuq",
  "key18": "B7A9M1f49t8q969MSnXTG9greuVsboWVCxcGCUocbjcW4jSD3bNBQL66U7hQtwLzBLwy6ibAngmqz8KUbtsjoKL",
  "key19": "qJf7VDpqyHAgCov81jfgf5A94csqzbMZQR5kj41mLRSkae7cQ42CFDSKDcztPgA87UiMcP1mJAsJ2jQDHVuxgtG",
  "key20": "26dhNobpD4NdYBaeVQb8rM4kmSnQkVu4drgbDrLEYvnjjpMXbCUmCPsLeqUP7GK4sRfGwRfdT6JfSV49vDuzh8Bu",
  "key21": "3LJQuSyf2nDDY23AL1BaL5vJiAjuoKDgE7AAY8PwfCmVmQ8614nXfkHiw4zbskhqSp34gb5H2orpKm3TJK9Qro2n",
  "key22": "5yedAXbbYsns8N9a1CHWNp6dA5MocuoRnYZL32Gbawx6xa1M23FJLDFFhgywLzVqF81i5YKbB435WF1ZtM1rBLNA",
  "key23": "5WEYANDMDs2YcUuXE21iG6t7SanJ6H1Nqn9DSaNezjXhFu3ReeEgR31bKKGVAj5GpFojQeccYCU4ipha91HEuWTc",
  "key24": "2xqa5rWSDuttRooWdqaCoTYbWGfP7a7BnCGsEmtM78qeD85iYZY3s6Xd2GS5wYpT9SkMaH3zAYzV81Tob7PmTSba",
  "key25": "4Lj2dLNAEV5rbE56QyxhvxokeKvx2ifWaXDS1NasNMnkBNagbpGsUT1bbx4xULx4uovt7cvpHgdRvPanWyb2vMb6",
  "key26": "4Amn3fUUmCJJU44HUyHSkTz8dAVGPpxnA16bNf1WJ5qggLSW4RtUEnQooN8vEGNSZGvbmQW5LV6VpAfr7q1f5owe",
  "key27": "4ohGofQztFfyQ2ViNsLftByCm8TqQukrjTuSH7oCXFtA3feqv1MCSFnBTqnmmdQoi3nbTNYez4Z8doLxJgvdRovg",
  "key28": "KgAsQMcgdeEkf8oxZWUMepaXLRgGn1zKWmrm82GeBZHhNCSBsphq9FpnUAmg3KJpbRSYmnanGQmCnB3wUFLQdpW",
  "key29": "3FVfW8wfmnkTCCEjBmrWgBCDG6mFXEt9tXL3cNtQSV796CU3WjmYRYGsqhYeVeA7R9qxZr8UgqxzZ6vhjrDRQ8u1",
  "key30": "Gu6o1LaYjKSN155FEkPCmTuso7m9aUGRaG8sEYy3VHvznPNsxyNyPqHEcPCmK8i4bs8nUFpMbRPBcQRMPgLPatH"
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
