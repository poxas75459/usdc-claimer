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
    "42bjFNiGLDVg4RJeZkTHuX1P14GYey3XRY3gsHx3T7M9ss7LQHiGhon7nYd4ydp55d3rkx93nAqteSf6kCoPfJ2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21g7NdkgKb526htUxqQ3hv8Kn8EYDsLeV2MShmvaG9ivMWQhogGqvMiSaJY6aK2fQksL9ijyULc2Z9duWTP1B1B5",
  "key1": "5y5QAb9RuyoMTG6sunbhgux16q5CpgKVLoQAZtMTDDm4ccUi3K3GEercsdCUAxiDX6NhuzXaUVnmFdJG7XQjU5jX",
  "key2": "66To1VAGTt8tpYotXaCCvBZCYmUr5nwJR3Dc7kwVbqH4GehWpb5e4naHFJ6tAQ5jeVmMDLhfxYrzUbJpgxxcB4Zw",
  "key3": "54gha3jakJP8p6HHVVBgX5PYdkqREQXd9rPuyx7Ec8mL7cy3ccobd6fPC7Z2v5z6yxyrgKhGRUdHYqCeWgVg9tK8",
  "key4": "vFLYK4YFMuYLhmKSz7xsCQRoRZuBFiKymQm7H6EmPqqfjWU82vnKMKbQa78Psm7ABfCJJA4Vf9p6AwZ8Y1kYABW",
  "key5": "3dA71iahWVxeruzrhtX7ug9xaVkAT5GSsLcV1CfDsSVJ7RHFuwHsvdJSs9gbRqZhKRX7BkupKqjPRLVAy1kJJ8sc",
  "key6": "5Rj8YCJq5cHQKSVPUXYhgt6WVqQjEbqQVPdqNyvcg839qMbho1iEBPUDbdm4kiJ26rxDZSMMvF1vckQ3S5rHyZP9",
  "key7": "5BfqSdJLMw3QyRhVqvNrq7GW9oBseCGbTn8Qn48jzYVzQBKXazgBeLA1rXpmhSjcQ1XUQEJn7VfgUyt7Nf9AFhBM",
  "key8": "66wYiaG5Eitf6ZSm5ThbgQ5JMRjYWDczqjKVMua9TKVJAwWuqECgejkZzcHjkHWNgf5GRZjtfgBGgCB4Pe53Wbbj",
  "key9": "uwXXBmC9hhozicwWqbwuuMakdrsmbPooT6k1rvRsLiNAkq5H9HpKhRnrchAkZiqHRy65GzYKywUtMNMABLjgc9y",
  "key10": "5iCMv5C8WuxKQZ7zT6Sr3eeWUQtj5sLuruWfMhfBNUvG5pezbv3pT7oTWi4uQ8uKZKM4Hv3DSBZMqSxk7ydDYBvF",
  "key11": "4XhmyxA6yaoQmqdKTMabjTxqGEUJaFTMBw9R3rRCNvijhEyH1mP6xvbeZqfzbZznSrXg21Z4rBjSvf8pw6DZP8n4",
  "key12": "fs8u2DBaHVJKoAHUxwHkD6TTVtytYEfVKw3ujJSUi59NMaSyBTmw2RtCoFJjmsUWpWw3ATo8n5CAMYhyGhnCNHh",
  "key13": "XCa4uxPhBVAjExU1yNShpHi9M2zXoSks2n9hDCs4WS2D9HpYb5FBu8zj7MtDsNC9ZSXGSTAdWVpYvZkKqmjpjfR",
  "key14": "3haoPYmji71P7s4harJVbMYVpkU4J1PzXBMFdyS2i1WXqUF16f5t9bVa5t6J25ionJyVWgyoT3or6papAb4xR72e",
  "key15": "4e6ycBg4SDU7ng6S4LuuYuV1AtKUXcus8eYsurNLuvvPaCUYitKpe7kXHEF52d6cqMgXR7KE6YwVUx5vyvw3dCch",
  "key16": "5LAWWKRSCDT2gY39uM3nk63XiPAV5a6qwzgWVYimYAcEhFpXykAbfRzavo3GXcBqHNK5o46i2L8Gqh12tok3ydGB",
  "key17": "2v62rkWw1sMz7gqmFayQTJx1U7Up7eAiXpFFzNGoyFEoMEofATH4Q9VkcYSGT3yPc6KfNJ59YYpZNY229Jm72bqz",
  "key18": "5KjjEr564PKDYLBVkK8q2LTpDwszqPJuWH3Y6VCf96WptZbYcY3bCKmH9fivBj9vNChQSZbyHp59Z7HDdUx8n8wL",
  "key19": "5UZ7FER5meCjuiaKqNWeMKKPpYYxRvkCqsxzB9pygMQdWQzEKHHPRe4c37o9fzVxYpsNib1UEeBFdAjcgTE7fCMG",
  "key20": "2WVdQT2KMQqp6wfxTCXLRGSrKcdJEAwiExAtFi6Wv8i1Wce8bgujueMCSn4NufwN2pPEyryWQZ1iyA943Rm7okFr",
  "key21": "243Phz4HgER4LB5S7nxq66qxRMfot3Nkuaz48j7FuMhpQMEiizHp17411VQVZEp1ti59W2RKjtDyJ8EQNe8bhB2Z",
  "key22": "5h5G6KYi55FA5ubwhxVfxMub1PwrmyPGUyD6UjUfc6wvMns8MDLXPia88FATz8GUZFbto3qeUVQL5pyyJFrL351k",
  "key23": "2FLRZuY3MqLGzBXo3oqN4wQCeomY4vadau74mXEVpBhmXLzxL4SrN9mr3QhCzXNmtTbpGSVRVYHZMN9HWYF8uvnb",
  "key24": "45ceAt2Fs8zLKafjFz4gCe2mrwS8GA15ssgtX9sQpasWGPYwe6DmEJM4Hq5xLaSZQoBoXm6KEGhNcdEzRPdHmA4i",
  "key25": "4zWPmmHHnudbaMpC1ucKqBx3HzhSXXzXZgnvVqi4ko1h8oF55Qbkkgwkjpes6vBHwMTkJo1DvyzvGjNYYAx8CqaC",
  "key26": "GXBU4p9vyXt2wTLrTzyxQoc6zUZYFXJ9NnMn6u6VkkZUTyWdkxoqAjZgTSpbcvpHZn67CT1TkosoHhPKEwim9bL",
  "key27": "fYarSvtaYi9Pqv1e2imBZKpNXZ1mG99ZPzKXZi1HnWnhTH65ByxP8ucGiommRqFkJkZHFLtZMXWXBtA4qZyhx5S",
  "key28": "fTmM5JUvWGUSaRhfrPKipK8RngqNvKNTxUMSdqPtL5H5diMf3R8T6FNnhStUmKoAQ4FcFhzoXBbb1C7ZLaMJSNh",
  "key29": "4bTqMC9CmmhUfpeTo9nbdfTg63C3ZDuwRCFPAmTTgSsB1rtZWMmJzpyBbJ8ViGkHmYfgFUYmwUWxEFficxFWDgMf",
  "key30": "3Ged8uvYzyUegEwkD174hgLWSDtgcfwSiEaFbG2HEPhYARM3or8qvWVLLViF9gz2tLAC3Kk2azpjPkUiNeAenB9Q",
  "key31": "5vQRLTo3ajaG24TCrfdniSeWXfEQx1hvFDWytsE5u8PRC5xYyXfuSd3vQ3TRj7T8jccLEfUp8e5Hy7rYETq26uQg",
  "key32": "46J7dhkPGb9tguohdFsDDVsgdnN9NSpRx8PGW9VYssVq6hNTe3qgeDrWLuACvJ9XhNUiZ9zpjXU3n447ZMKnfmjS",
  "key33": "2BZfmNRmE2hT5SgLHDKN1hxL75StJezreHgtNHcrJNDqQLV1juLegRQrueXsePYP2FBMCuRbCEwhjgMxF3h8b1mr",
  "key34": "5SBosPDiGNEouLRVcSERV9ZYNv2mACaAcxbbUBd1Y2PB3mkiYgqhZv8DpX7Ey2f4dWoM8rFkpgDxLa8SKxMSCmTB",
  "key35": "4HhQz7k3VAkSA2RK5dkSoK7Qm3KJZXUeHDskmZAiksth3mPPuQi8Z1ePtrJGi1GXQVjMKNLAosZKurtHnfzTSnSz",
  "key36": "4xJyCYJiEKNKRv5TAocv6JNrFBdhwXXNwYvJxNjZX57NEEwR4qcvXiqdatF3EJCTXpJb8SdugJVaVD5j761gQDFT",
  "key37": "2xETYejh6kgXDqfFHKkuYVtcGVAPubBXJs4shrDNqPWH2eChFHsQXAS5f8s4RAtBTmZunBaJEueSRoGCUjBtgkXB",
  "key38": "5zSRYLaEU175sfESsrSStxPps6DTVzXCf7xwyFsgU6NUJFwrpMPnBsLc5PJLvzE14EB6pmowuoTvY6Tw8ApCdA5t",
  "key39": "g6Wjq3q5HbNLPBH9xVBdNEFHVdvGfhnGVqqacNdZ8VNPioU6X2hUpFCoas6Yo5Tszu4LnrMxSL9oBxSVRXX3z6B",
  "key40": "5Y3gdXjJhbdMcSYZNCYgdrLzHHtgYAJXHKHPmcuZTpgHihc41DvXvn47NJowLDxZbNDBF9nZv12eY7LEup7kHCJf",
  "key41": "M1vqzqT4BFQKZ9mNRPVmZ34pq6xdQLTXb9dE5GGsT3cYetGR1x9tsqhhkfpG9U4pjewJR852GkbH7AUp6TZ52hT",
  "key42": "2wtgNs5sodApeMqr2nLDq1PNHjZVdgi52c1dPmJu1itsF1Xc2bRZGj1ZiwrsBBWKLN1W2AjCpDaF6dMN3KFJM5fj",
  "key43": "5Rt25ZkAHDYGB1EyVsQAPbBWGccXEEo1MRJF6QQivqYBpKfFexeUKRvGzDLN3LJKSjjNeg8Sxrfy5x2h9MfNZbyD",
  "key44": "2v33L1MER7NKiM63JNjnum8RMhUYaykyt2fdW88eiVcGzuARmwLhCEwKZjDQHyeZhfLz5C3ezqmMEjH7AWDCHS5N",
  "key45": "3MtgXUQSx8wHrZHku2Vzo9DGLzvhEBBxN6AKXf1HfzeMG4igwLgTHztknd19khC2v3RiTVGW8aVCy82vX7g8nEMk",
  "key46": "3Hbdk5PcpjWHnNSERo98XzYaiBve6SPjtizNM2orMrtNzcSUMj5tYimZ5pSUFRn3Mf7nv1vw39cLBuUdLBjRtTWm",
  "key47": "3dLJsgvGwoTgmgFXxQMiHL37bMnR6XrXvqS1iE3GaBkDRgsGSWcUx6yYZPbhAPyPtgjU9cbNvzmV7tJtve4uwj1H",
  "key48": "5e4rFki2iiDVJ4dtzDUGUyHznaP826SSeXL58Gc4Uw2m8dPHyPhm3zbSRyrgrMNocoa1vHsxb3FXJ9UNzRv5bcWs",
  "key49": "3fYVCQAbw2TfZd8Lfz9PdgYwGxuzoVqZq2otRcp6dd5EzouGo6MBfnFoepnNejEtm7p5xUpnKDfLX48Bw9uJFugK"
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
