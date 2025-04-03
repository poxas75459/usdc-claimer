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
    "41pQUSSHNFkJ7wHzp4jGygDEmxZ1NoabU3UjLpyF4kCb7XYZk2Zon4rxp55kNwCUELdU21CcwH6tazN7ivxCwy9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KWaP4ZVUmhXpibfkQxWtVbQDGGS2PYWJAfhCwjEbLbDVMgUqFhFh49ZmDiefSrATzNBsjiLroMWrA9ZUKfRGgcz",
  "key1": "LUESaczf33pViZ7RumEojebdcY7STVYNyg76RP8dWCqtzywhqtiJjPiW3m2yvJj8SQnb4VCMFtT6GZ2TmKqd2dY",
  "key2": "4wyTfjPoAaiMPq3gNrispmACFrV8rXXsVuEtxAf4kQjTXpe1eDri8hEXbmanHubaWdta7SRGwcuYNRWK3A8mtBEc",
  "key3": "39d3xttoAGoXCScBoPCdm6KppKujwUWfYFrpuMgk2jDzinySJ9KZZwwKk4EsLVV8W5fXz7z2qCz7TtxuymbGcFGH",
  "key4": "2F8utES7udm9EJQu8LHzt5AofHTk4QnxY8LxmmPZ5e7UhaVXaDvEJqrzsdcSSQ7GhJbwr5z1W3p6FGHKnZ1Tmque",
  "key5": "WA9XVmJHcwjtXQrKyqp7iqF4NopfmCa2NTiwPnEkkNgxwK4eQxjxvhjXKv5LSszAt6P66DpgWdKcHH6bY1C4K3U",
  "key6": "2xhzUULovLxi6aRoDRWVp7b851qWJsmsRfA3pjP8DtLMS6nhdTXncmeFMwnonpA45a2Jt27icTL9a8mvTaUucxXE",
  "key7": "382Twmvug7MVtcUJ96RR3DqsZ6oS7pjS4NoZHn9p9fMJhodqZm39MXYkko1VQiKuNFqUuXA2n6hrDBPUNRNNDqP8",
  "key8": "5tuBH4aQvpQ43LrGLGES59XoSRyL61HDHwyvExaMcjBopSGmN42ZfBu3bbbAnxWdZyxkZw4iXmPo3NW56spKZGDw",
  "key9": "4fe2YEEdM77jc5XrtbPVGCBQUAByJKsxXSCY9aTYrc9XEv3PYxLirURUyy4x6Nv9VxKTaSRD5CLXVEnpwxu83EKL",
  "key10": "5ae5j1ZomYt94uJ4o6uH8BZGADedJXaLKu1FV6t3rmDqLSspcrvgW8hshhmBBFyc8CNKezUesffmZWRJk4bw5mpN",
  "key11": "2BpNWB53DV1yCQfUkXEKQzGEb1PmJ7k713kvhM9pwEGJWgDmDKvw9UoUAh8kjnbSV7f52AFsLVadd94fjnWo9K47",
  "key12": "XrAzMTzUbX3Q3erJVLPTGv9Z3R1s7ZNDPVHFarmsF7m78rJt6HSExM789rsZ2bnYUCKCREcbokHZEptZ1vkmFsk",
  "key13": "4QSZCvBeDi1qK7FA76xENGcC4y25BmUb7FRLve69exu63naR8h5VxDjz1W9FJW9qGSyx6VGncjRwRk68i8HDCLTF",
  "key14": "2EJDAJ5hEPm626x17gEGWo3QqJZguT5QhFAMhxhSR9pnCgjYD3De5xbm9ndoyWsCYq1DVERTdYjwqUgLgcTi2htr",
  "key15": "4BEmQdzJzvkt85S5TKH5bPSk72cDBcSaWfARvKPV9gFPpnQt9QxHnskMjFnvd7whwG3szDvzBvKwRmESo31HX262",
  "key16": "2odcdu65RHs1DB8omL78PZQ5kWtJyRSSWSj8Mh71Ab8fWBFPPMSohufwkrYiMe4aXQpHGnqDRKJDTPUWUQJ5AEQg",
  "key17": "2PWLMhC7brjrSivfXSTQVWaAT5K7Eo4aMnDT5nnfJfUyUVZTeqFwc5xn6iwDZayD8HwU71A5SmwSJ3zLtd7GdUJJ",
  "key18": "KgqeRMh6WyEpTJjPtJvSfZEPvkuVMsRaxeGF4gRLaeoKfTePamLHKn9ygmbnQWqJwEdtA7h5RkVKrRYz6SkVBh4",
  "key19": "4qnaMkkijcZqjfJfArmRr7ib7uxigs3JY182hZHw9CCjkbz26YZFCYvpco7hbsrnjW9SDHF82Bi9uCQeWQAwykZ3",
  "key20": "3H9nXbxQk8tzpSg6LQAUWE6AQwjE2NkSsPJdV8sfSvd4K57JLqfxuTx7T826UjUCbzgLVgJ9WEB4pqfekBWwkWzB",
  "key21": "2rZcHNh3BJMFwriKzqXPs1hBb8dvYkfrRuhCQxVTo7VitAEnP3e49fAonGjBwZ16GeRjXDAxpRxEKEoEfCSW986e",
  "key22": "27d7u3q7agCE668nXSxchWP3ZowdgsPhbk7h7WjBGQ6fjxoU75cVNKmmpu95bAquXJgDCCfrS3wJzmFDtzPfRCai",
  "key23": "2pBEVpUZrJbRjL2aK5aQ1nVmAapuEuNqAF2hAxTKFMK7UMvRTujRdrnMqp3L9B14Lnx2i2w3VEGvdtGzCjKuEBGc",
  "key24": "2LEEGKK5Ly2RE4m7hYHkpEPDPk2iAfuYFtXmfquHf1Q43whGMquqewnXNfViLHbgh2FDHVyoY5QzWy3qocXmgEDb",
  "key25": "55nW1dWZSK7F7dhX4yZRdQciAH9u8EKqfYQFYCiegz2CphLoBHkYkwokcn8LeE2JYbJGKcvXQBSuN5Xvy6mcyzWq",
  "key26": "2ba4fkPKCgCYD9j8ykRMaxpF3PPuM2ZEybViXyrc29dtcvJXUE3vYX9ci4WQT8FkprWfEq4N2CFTAPGxeMwLkfWf",
  "key27": "4bWqrNZRkmyzNKzFFjwFvJ2uRXstw7uM6L7HqSQXCJyCLwVtEi5PiVvyg1DfdwahZ5PhjdhfG2DopNFikq1jNN73",
  "key28": "SR4E19hY8z4mNDBeTTb46CsF7TQ9k7y6jFW3xXckVuvEcsXgsNRtqc3nJLryMB5UKXnacDMwEPqfTu3LkFJXZCG"
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
