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
    "GcBB7AeiH93sk7mNYd2LmQkm1PYeJdjFpmg7xW5R53R9f2WbAcVHAsezFsrNTPvZ8Zb5KHTnGWXUySZhQ5sAkeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KENB5311WYGfGiyRLuMofZ3FN7rTjefoAPi2xrKJHQGuiw8BpYY5biMJ6vxW8uhaA5PGArEkEhiYZahxBa87PQB",
  "key1": "2BjLqB5dmCW7D1x4nDUPcXqSWvAck3LBbLqPPcFTXtbc31cQpKbtEjDTX3qx6Btdo8de81wSCJvAWZQBiEP52fKg",
  "key2": "4249XCaUJPf9LdMxqaTNb6xt7o8uECFH6tmMvQMhF47jfYRxyUTmJm3VQ1duMALgx5xfkSoXr6S75WeM74zUaJuy",
  "key3": "2cb43wyfudUAkfdpAARqaXiP92GXSNvNHbnFVLU6xvKqFNCsbmRxYaSVNdEih2gbwD55zUo7Am18qBYuoBtUXwUz",
  "key4": "2drbawXem4z5NP5TG453mx7Z4nhCFcKguoQ3vemMJo9YKzybf9pBLfb16Gj9ygEYzdUjpgjuV6gnwqYtf5hN3VWt",
  "key5": "57bFUvopXbie9CsKVNP6UfmAnjV7i4NHiHnTxShD2fMJfxZ42qMz6ukeywrWoLNTBGG9sGD3Lu3LQBfMSn57WNqM",
  "key6": "2Cdnc1E1UbcCc1fp3fExed9PZP4bpsaurNiaf2814A1RSgg6XbqcdQ5C6a1JxAxrbVDU6C9Z5wKzrVCtiAuyCL7f",
  "key7": "2dRwM6N7cRJbxQRTYK4VWHnbaNTVfRb7P1HQrmMnEuJkrDjqZ2AfZrDh7ZXC3ex9sfLb81XCzcdw7hZ8npXoMrii",
  "key8": "m2s4Zf4n8NBukPsYYqqt3eb7w3WdAAv3syZeurDd2aJZFHc2Anu8g3UCbxtbBQsvms83iEMbrgVVDot7LVRPPVb",
  "key9": "3SNsrernsBBi72UNfppFCfHwEahhikWrVbA5ZokPh6kiHV5ckHLTASPjZvwirs14xW8inbZ3AnbfJGjpXZFBj5KQ",
  "key10": "GZsQh4zSW1D9biv8TU7qnjfBt8qUoAGKMBS5gwwpSV8VRAjdXEuDWzoVJqpzkRrXXAs7yUuEvpu2h4WRWiqGMrU",
  "key11": "3tg7yHHj81hHtUZtFDD1Y4V8LnRvfqqyBF3Avs6rUrTRBeXiLz9cCUj7cCHmtPTAJvuad3uLP48cfZ4x7654YQrk",
  "key12": "4PyPr3YperwWW8bEM5A3L2gfLD5yJUMTwbonJygPcy79yDK4pFG4PDw6t2QBMUeJRiQKVco8cu7W6L7MiMPRCrNW",
  "key13": "3ecnSwKvJHW9gZP9JHtp4K97NgiXkrNMFviAfgJqGC1XaQJQgEBwyH392Sf5dRhoMXn4PAdT1bm7dqg9W1bD8Y8L",
  "key14": "2mUyAQ5iLr3VpUnSMUhhxPdkrgRDmSn77dyrUcg4iqujKpHtTCbAs5NG3hsJsxV9f9DvGgk1Qv9mtr7mmoi3KCyf",
  "key15": "52UTfS2Y6tXndLrsgCxLVByZXAMFiSzHut9LmbFHM3iuhZjLk946LQhQht678AM2w3DmgCFjNUKcowY2fpY5vdaF",
  "key16": "X8VmkUD3mYCxeros21v3wRY8CubShKMudo7xAqrp5Ju8kFaMavnmcUhAHYuGgTLry5839gxQQHZDQREJi97td3e",
  "key17": "34fSBSeeUbtcwc4PcAsJeYtHEKWxfocSZffWB39CzZDXimipGoAYYJMSQhMzPUkVwfd3f3KpQYdectyLgv8LAHU",
  "key18": "2uMfxt97XWjap6Lqkq89pbWVegWogENA4xnKo19dzSBVRjyTmzQnU1y7ktRL6JgHKUoVynsR1ZBT4RMmo1JFCTig",
  "key19": "4GATH5CArduhpXcbo6oJqXGuv7XXvao58jyofkLiXhrc3PZtJHhdBUNuitAkPtZFD6gdvHB3Bdkp5worKd54Go16",
  "key20": "3snq1nQiqBqLLtJ82scP97nGTgrqNiNDaRPrThPsKaZTEmp7nQHM2aM5iVEDwKw6aDM9phma9wcPEHnHXwDWw49K",
  "key21": "5yYfVLydDr4cQXkShmpCirneYfLNqrg89Hd2wSMxSDRBLS8Z9rjtKZqNm3eb5RrFM4WHcfR6Xodgan7ggXGK9uBF",
  "key22": "5qNCauNA9uJgzc2wzQ4DHKYYKqgc1JM43sgKDnxBBbaTEMrRELArn87zLQE1bfpREqCrBcAAR3jFM1MSwtiFT4n7",
  "key23": "5Qy4oXWhogoBHPjWoDasgrCwcMFELFMm2L81E3D3PjZtGBE9wZ9bQVqiCs6v4WWAFGQJLMHrEXmJs1dr21hvyTj9",
  "key24": "VeGSJ1wF6FPW3k6WYBG8mZNdFLGWmDcaKRCYFPk7MbFq52Ju8VZpHngjrwf92pRCBR3L1RUXvXpXtuqbCsGfX25",
  "key25": "5xiBo32L6qLSBCWbJ8ZdiiKbcNtRXukUBxtTzJFntHo9GhY3VDaNiUcLVhpdaroMcfxFRKfxW3K2ud2Hv5dSaZCh",
  "key26": "2NhQk29jQF4kRMvmkyH7F7zKZDZqybjw8BK3AN438hi1gLfBQq5pDj3S1AYnWoiFfH7jjXaeBVUYDrEK73mHSCp7",
  "key27": "5Fdq9Lmi2Cm4qUT6SrFseXT1DcRwxApqb23ZJkLYzv7rLyrNyjjhwV7UugBxyQUkz5zVC7yPwtgJ7S5JUs8zuH8A",
  "key28": "5ZZfNSseSpYapxsB6E5FMuLNu3tHgPswhZHn3ZdhTctwNnvzPwcJsES9mChTJaodTsZ1B2WV633pLkt4h3SX37XM",
  "key29": "4Us3xQU2x7zC2gEd6wdXeFfxYu87HHdqKpReK86RxFJ7jdstmtJvyGSGXeEYAVAbyCxdftwZ1y3rqbof6ux4CFek",
  "key30": "2BuXUu35YQy2q5aBima81ACvM5RWvc9HFXYdQFqnoWGeT9oQcsYP9HAjH8gXj1J9coUnBZUoFMSPVJofxxivWqR8",
  "key31": "4xizQuimDjo5tpAXchGGktjaXr37R79rcGZdyuFERLuqYuUQwfaiBhXkSfXNL9MUHVQtfrkDLP6SN9wEnFvCcz9r",
  "key32": "Cudy8Ejzrwc5H2YzJ9sLXB6agKkpB74Uf9KrgJLjrgip4SpM8AG2Rfd6HcYWf7yjAhYvbK1g7bY6WbghJGgwUbJ",
  "key33": "5DoGtqhZJ37H9gRAbwDc47DjJaWCJb1Y6uEWyQNFCnR54eDpdrpbEJYCKQGLEBVzQB1VhE5JS3MgCQXGBMzKFzvr",
  "key34": "4xZCBWm5YMVJaaBrwpPMfK8wft9yLXo78AhWWCVdCUm3hVAXNWQKrNGmQzEpvN13f6bwG1sCUTZTBWSdB1rUimRu"
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
