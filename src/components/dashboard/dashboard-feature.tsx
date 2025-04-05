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
    "3mgAKPw64QgR5hgEDnMcHqaNnE3jbCqwBaHtqounymAjeBa1iZkPfrqWywHuDyYUnmrjHB2ETEKJC5xsh2E9Vv2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wikRpgQ3DcvqvvW6Dq5gdbEjZ8AMCdAiUoGnhJGh2u8VV7UW84uJeAHPFuFwZSP6gumNwuH3sAaW4knbD6GhxkQ",
  "key1": "2sYwXYxkdNedrWfDww32c28pKgDiSXapmF5ohiRrFQpJ3fxks2C8pp5v5vB9hqbzrt1uzTnBFLGie8uLACTgURQ2",
  "key2": "31xkZzM4ZY8fwgaZFLgfqCZShgB8g7m2Tvu6daW867PUXuzsku3o3RF316wkRLaDXU5H5apdGxCDtrFzurTNTzxm",
  "key3": "3RcnDdm2EaaLXdSnLdWueuk5VFNo8RGAwsEYpQz5QvohWdcXWk3QzE6kFNPDMVX3BHbq8J2gwpQi1QqDPmJnc74m",
  "key4": "4mzRrg7dJ7nRCvg3FzmJqyiM2vp9CHu8HyhwNyW8EzcG8t5zjQxPLRY4BEHkSvNDua8bmPRxSqCqX6a2w4pC5xBk",
  "key5": "4W691bwwie5YUB7AKM6JHFu57JyKyVR4GwaFmLo5AEsiKCuURjXxZ7dz8nqCYNdFrJqBYBkrRNTohVZa33cHjjY5",
  "key6": "5euQtfg5N4feeDw6SeYUEmvQcBdJRpGHN7WVd8GSm72ik7M2GNAyVMoGETovYmGrycFwhWyQXy1vRoVLpsMh4bW2",
  "key7": "BAEu12dH34952QDmJb8fNbUza4MVUekWvuDi9t9KUDeFbLbYD2vKP1VfvYG69ssWeELyxcug82MvFGrecPcFKmm",
  "key8": "3SQS7WDE2jrPHPjyEk4ZBxRehD2yX4sEaaYaFtHXVfxLHBo4txQFjzVttWJ1KnwyYwP4yv33qhR9AgKJRy4fRDGs",
  "key9": "5wMWceJtYezjUpHohoqfZsEVP4up1mL1LpoB5J1AYwna9MbiqZvVruwMtPQ51CDLy7bXkdZ61vRAo1SHcPoEKyBf",
  "key10": "39NQqeNacJS1PwWtMd7UfKcP8GzGm51VkCQCiNL2WADvne3SDS2ZK3wThv84Q7cmN6FvQNWZCJrVK1G9DaD55xXb",
  "key11": "2xP6f1VxiJ5AzQYwzD9EMC5Td6SytAyLfjhPNCYUPhtUuC5EAhfgWgwbSoFFU43LjEdULs2K1ngjhLmApjquu9H7",
  "key12": "5T5SKPwWXh2sds3JUxNZv8Wbh991pEYfBhjUcorSRXWEqcFBU9Zoz9w96heABeWE7nXKSRD79UdmtHyiyfpG94sF",
  "key13": "5QMdp6Y4frgzpnpW1gFBLoAXuspEdsmzirKyZZtvYvp5KEsJi1ujjWt6dPUgbMp54rrkKvzz4QYNnMHabpXjwiHC",
  "key14": "5vSL2yYRXhtox5yRwKBF8bET9famcYBmi3B1sRS5t5ttVfVue77nGURyDCr4QCYmVAZgbEdv2ZGcmdsWp9j5wUN1",
  "key15": "5k2dYZPZDRGkRKo1ANfUuK23zN1494FthQUqPgmZTjEe9UadRCa4eVJeJHRvpfs2cEUppYCuzNQE6iDa3DXkDt7d",
  "key16": "2mY41U3FhZ99rckx4AiCRDMCgucV8h3iKJ9y88mMmkS2ixfkboDyevdxSkTRCUBqQFc9GYLqpRxjcgiafKdsaNj",
  "key17": "65bJnQmuakdZSSDKnLNmuewsDXbghn5p1jtvzXDdv61y8gAm88fPS2vfwjBha1bFryC2eRUvMsmpqXwSQd13CNNb",
  "key18": "3Rh2PoYzHUDeq2s6WdzCSuJCzEYFVn43uKz7gdvXABdqdVwghAHECy44aScSu4L4Cg892DezfiEK5yYYEg3xw3nd",
  "key19": "M93b2UDh5Cjzcc4wfWLLXnAQoA9pFjw4bRURLNgdSETV8G4d2rQg88VtxrD9UiwkRqq4Cbsbj5Eg4gbhGaf416G",
  "key20": "4AVyb8v9D7gXcFJPt9AS3S6pamMVcJEDQbiYfmszCeiFgRC21RW8iUKRXfSVT1W356MBxKGKScR8kVovv8BuLiS7",
  "key21": "2hvpjCcxDyWuCgaEyFALZ7SZDLxfc8PtkXamcKTVkhqGHnQXB7qWGAeL1iTmrtdh6a4HrC5VwWLkmjVE8xQarKm7",
  "key22": "5v6JVmd5PDZqxaP3pxJf6XSBb8P3ErvdGbLdk4riXotX5Zu3CeC4xJg1u4xK2fboRugdXrddszxSxPyh1Maf8PMe",
  "key23": "4UUao6bZ5fRV5Bk8X6GfMRAEV2UuXN2B3HNDmbt7jtSERxEF8py1kegrDUBGNuDXL46zFaYY5A4SACXWhvWcH7D8",
  "key24": "swQsWrV2NqupLBXQFnAiM1QDgwzW4ASwaP1cFfwEatMEECWsiJwnLQcowuYMoRBZaEyPNkq8fis4sDCwC1q8o5j",
  "key25": "2yY3pwP4w1H6We7cWAhhuZXCEki7SrMRSkC93ciK7URkE9VuH72bPtTTM5MRoqpPMz1eAFU6kh7JtwLNk4E87tic",
  "key26": "5JzPUXoi1jEVJtvZjapT9iiYFMAgBbx94X5yke5FUy72HtnVsEbj7UYREJKYwTo12BkCLY7UfV6D8UYSLVp74zeh",
  "key27": "5Z1iqm5c3fdmDr65t1inbih69Mb3imjyRg42eKgRpegfHYdxGW8csRwYSuDwAMXgPeu7uAZpgP8HHgb67gaNpp8X",
  "key28": "2ELkBm6YaeXB84S1bhFB21GNvKgJhfPvgRheWUXxNY7y91fJdXvXnrJ8YZ7X31GTXzZFcCsHdd5QsFJsXMDYbyeH"
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
