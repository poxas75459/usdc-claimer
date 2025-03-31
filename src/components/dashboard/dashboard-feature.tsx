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
    "2XBFycuHXWodU15cmy1VXfJh8CGTr6AHHCY8avjk236s1jf9pptqTi67BshZupJV7QTb9qcBdN9pT6pwLh4tpQ7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BkqhU7vJu35NNZfaSWSTxViGeYvUm4FZpBrhtnfMYm3E1Z91rR7R1AjZPhZ7tkRkjsHE8Uj6xdRMto1BcJD7z2",
  "key1": "55iipEgH7kyhZLFWEAJDBhYGB8i82N8exXoYHAAJQs9qqeiCs3tqA2gRQfHrQ2mtwz3UyvdqSV7BDvxstdzVCKCM",
  "key2": "25Smz5MN37skYAWTD2EihNiBWpgju4JNkKi4kZcS54eKCh9bdvJvo3pxcnjMGB83Uj3XyigEjTDHd9oTmckN8cNC",
  "key3": "4PVXop5vM6TFMqep8aVTxWM23L9SHBx6QnY9kqJuErPzrFtfSLtsaHbCvz77o55N8kxtVswcWLRpNFzYuj6ozN2B",
  "key4": "4w8yTrUvvM3qWskfmJhLt7MnFajWH9YVSJtFQeVUtbCK63fH2EA7PgxjZ1bFfnrhsfTvZQVrCJ9ch5rtZ7V5Hds9",
  "key5": "3sDKeXNFrQGjEXLjpsjLxTfSULxCY8dtbvJNuqYf3ZtbvPp5PQmpFzZHCfiHu88tGZHBvfUEtGCfNfVJrAcYYZbt",
  "key6": "4gMJCcKdvCLMXhWz88b3UBhKtvnVrNcacBCDbnCR7wpFnRoAfUCYA7dVeyeFk2WXRcz6uq1pLUvtsPLRaAfxG1k1",
  "key7": "WRbBHBDH4X73vqCSHeZDd9rsf83JqK5Ps6twVK9PWDoL7AzTGrKoFCAReMEyUQg9CY9ioETgvhgo5y8dCq4jVpH",
  "key8": "4YUPAHNhH51oXzVdLE6hn2udiV4tVkLzg5eNVhkaNty1JDNa7tD3ZS4fDcq7iCTib3T2ni4xVQDy2a2zM3cAxt7d",
  "key9": "32yKAvNdcM4gyBUXHPw1MX5Zvbuu4D2cBypzf2Nw7jH6iU1z3RqFF2HphAU6SebAt4PvWbg6U7gUwnyTgKuWDCZ8",
  "key10": "5i5LDXxJhASPMtntqW93XwE7ZTuKTEA3BLBEGnMNS1MkHn5b1SY8zSiWQxqpSg4nzv7zrcP2XY3iv9YAjEwTLdhM",
  "key11": "3FGExfh19ssGpS5PjpPoGo612ERdFuGNY11xzZC1geVLkvzmPYCYCk4wNZitkvmfZEdNHboHDPhjMgs8Caqo9HvU",
  "key12": "5vN6d9fn5YMo3uvauGEDTTvaqiZ4FmERyq2gUJdk2cbisZHqvrGh8aQG8X7kEE2YLyni7PN3AGtBKMUxZvXN3u9t",
  "key13": "2zYi39sfALURFQiVrTTNEd1DpJs56jACCDCFJAAkPUZetHs6wdVNX2bVmQ4YDogTXQZw7G9fP9jexzd6qVuMFd9X",
  "key14": "5PcANbgkXVGtJb4ydeR7PbpaoM73vmiutmFUe5xvdHPrrxYzcV9n8Lsys1L4g8TnoXznfbb5uGxWtGRihuF25eGQ",
  "key15": "59RZZYMFfSkekfnNrasmyruaS8ThgXd25P5iycfTHkLJLfb8um1LZtZGdeeAZzTzv88s3oZQQDrKMFcKLR7duUwj",
  "key16": "2UHXCzGrDULBMgYyzyQ6rKnXqgKgZd94sDdejgPNYFPinS9vdqUAXqKDprXbMajVzCKKwQ2Dze2izeEmskjWFZmy",
  "key17": "3LUrvd5E2Ke3D7LaR2mkfw1jb8bRszMnQWbx8v74zbkBVyejJMUSfuaS6oDCZeNNQavLyVbfBz9XzCyW88gESbwE",
  "key18": "3Bchu6cJRWv4Je2gM3WCd6gPtKCxzXgdEvjArg4NdUdZ3KK9ZqPPUQ7pX3KdkcQeequpvU5FeCCL6YahRd9DorB5",
  "key19": "b1JnppBrsz4YBPEDLG52xef2GFGEw6xhV5YjQ5FmfjXFhvHDfCCT7X99MXaV651aNVAWPQva4nYFYghdsZXrVGm",
  "key20": "5XJuEbp5R9GLSLKm8VEk1uq5FpWwPw8NpUbrkvnsppvFoShbgkarPTsHJZ3YkAxdzDaN4ZQu7PtxsCEAgPCQFtHM",
  "key21": "4aP5qaLhDn7FZkR9e94mj6uzjV77VPHyKKixot5y8F84GrAe2GX7KuKPJEchGkHLgW8ENT7GBvdQ6kyd6Ji1Vg1u",
  "key22": "5iRRFH9aTPHK3MHEHuuk4N9zLwv9mSE3ek4mUCYedrWTYzTvVrJVaGLbgfv2qqRTNsh7jQk42yyZMzuB3EWAupQy",
  "key23": "4RUrgWKe9KgTaUFmn4XYNgPGx253UGAsTm5aSHPPZb3mDn8b5fPfHZR95PZTckdLHYHddtBSP1mNjE379qaSLBiT",
  "key24": "6611kijPYahkLKS5U8kjhWWXdrjGewqFd4HS37Hx8Ls8JMsMzTYSPCFWqXijSZ7pFSidud4uzQC31xkXaRofBetQ",
  "key25": "3wLd2ZtxWw42vWU1LaQXRZCPbW8z4pDBCcEKSmujJQiLbvNucpTMFtiCJEDtq8ujQ9QvtTd3uxkE6kMzM4UyxyV6",
  "key26": "cmfQnWumUAs9HrqrMoYRys6tfGzxyj3gyyCcJ19TBfi1Dto5LKCP3CyDTvsipyhtPTejHXTSJh5GP74opMG2iYe",
  "key27": "2UhdM7zxRXXtC9HPVxMcYpxc3DvMS3GUqn5TqNVA7PWwcxdyy9ktkXP9pGD9wszpjVNgcpQq5Hw3xdxDxJCkKDfb",
  "key28": "2fU9NAJY2Q2HTGa1pUfNpVaHrw89JfvAR6jReiBLtNfEVnE5xSBdNfq8o7YHCUxBngEmxkz39RnmwufyzEKjzwgh",
  "key29": "4nqBZm3n4SKG7UmBR11TLeAL1f8bte1eEQ9A3dwPVsGjN8cD4mwNbfL1aWTeUm8ehcooc2VcB9jZaPsGRGecjL8W",
  "key30": "5ECB1PsviS8daBC9o7bbCaDn3FRSGxR2fFM3u61pKRbRDhJdPgFMzGaAaRJYaDeZyrMWLion6jyVxiEeJj6rhvjT",
  "key31": "5nGtQZA5yGfCJxyhGjixoZeWfJicvZQF1S7MyAx3myDhvJsjzybLJa2dSVRdedRTYejTqv6eKUC2QWNHSfFRX9eg",
  "key32": "qG5gvYHjGWLjcnoxJGzkiwQqWQBC3W7u5iDx7T7chwfDH52aUn55bxmRxoGUwTkJAAvswE6aUai7LesmJZw3Drq",
  "key33": "511dcvaD5gU82Uj2j7pEEsFLreGKZN3xd4UGLySZJK5zkUQ2Z87EidjNkRbT39oPBXi5WgP2ucYSM21z8S8jqEhx",
  "key34": "2UiY2zgDKEhJN4mX9TqK3gbtRwxJ6pXCmJWbMR18FpjEdair7guEKUf2LKWhnepjBCPdJPgYgp4TzvVJtgcWBgsB"
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
