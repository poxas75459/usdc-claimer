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
    "4zQjY6fsmEmd8ge5a2JKeBm8udjyUxBt8Uyy84wEYA2XR2d1JqSm4oz6nAPKUKv7FYgEGJhexMjHXGBSZmLGYZNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SPraGCXc8ZvsKAPbGoRaqePa82Lu74nnmESK9HtEdnDMaVfagFidYa33EsWHky9fTofrXwf2sDP3YCem1txJFtg",
  "key1": "8ZqH4TCYLmfomreNuo1gi94T1Du1FZ5GSbifawwvDupkFcfgbC7oiMCzLXs6BRsKPUT1Q7GwLn5LzVF4KJcvdU4",
  "key2": "Av9rm6eQAsCSymz2916vtKvxnoxS9RHBK2NCxjmTdjgcQ36pTnYsJ2q1Nh54ku28XcPvEA7kSiJQkY99EoKJcUE",
  "key3": "3z2H9mSvB1DfdmzxtBKvbR6GFxqDiTxqgBPhraJyppwd9xrV4Hd4q6GwtnCZcNvacaK3JX7MmYPE2RTh8jySuL4d",
  "key4": "UmawmZZfxoGG6XnKSvpYmiPzYViBFYyWat1r5FWYQUrUPS98F72sF7wD9q7ygyfCtvKsLUTKnc3VQy7j9QMnjdk",
  "key5": "5q5zY2HB3WRBXMwPziPgn4bmbCNneaAy7Nygm73xxGnPD2fZysNoUxrb8NF8VYeREbdxbfCAecTk5ZFqpSwCrVMT",
  "key6": "2zfCxci3r42hkggygqpjwNyve8rfLgr1NAWVjaNZQdKxTwkmiBqi7CvB3WZdrbXv5j5F7EAXYQzjifA8vBbfwQzv",
  "key7": "4Z4Rk4TbUEcTmRQTeqNxE6cUh8z8eRVVK74Aev1RS2d6FCh2Zc7Wzj95ukcWYihQ4N4FG9GY9v3JTQHPYKriTiEm",
  "key8": "5Nt3PjGnMiUaCi63mQ2UFSo1egd8bkhEYt7TUHLrF8kFQEhVQCZRe8pQcMrFSU4rtvaLZTDJ7mVv6qQ2rAKBURLz",
  "key9": "5cpkHDt2MRDF4GN4UNw6k4whjLvfaCkC9vc5SdyNukD7Sak8ciy5cTBZnnn8qu5BLU7C29xpZV7acJXvEoY1qqPt",
  "key10": "3BXmJbbYdPrLSyJmk2cmBhHkXTJKhCnrcBNMdEFMGmqRREqyS9CF6hmt9C6rpvywB5YuXkQGw2VM8LE8SDz7av83",
  "key11": "41hj5M5cvtqnsfHrAXvwzUch5FtkuHF11fZxK8WT56obtHX4S411x51gZkWRc7YgakSQDaJVTuJvB29WCm61X781",
  "key12": "5phnrXijZwXZ2MjPhiGjm8GD2VLvuqzZgVmenX2UwjmSXBUvaC4bBim1521NRbzpFPRJud8ovNT8cpwd2MaTNY5G",
  "key13": "UAP8k1VGeL5xMuCwjnsUf6aMfC5QubbYo7bvnux7L39PmAHoZNLgwLN3NCmXUX8emsRxSV98Nro5sNAscj88Hr1",
  "key14": "3MwuHGBRWiWSter9HcKkuYsWDsKwzExiUja3kq6bVag3YtHHHVxVeoNiy6KcZ6xd4yeJbWVyDfgxS5KqYuJrmY6C",
  "key15": "4sqqKX5dEL3dL8YooPKxoyddCtUeR6gt3ZcAojwV1pe2z1F1HFWZm7e1u9mCYtXWhmmuxQJ443nHgxdmQMGcCFtB",
  "key16": "XcfvRXzZjjy2uT4qRQS51TKTR587AcZ25sDBFnQ9fp8Wu3Ff3ya1EaRsDvapxRS6BF1GM8J8ScHewYSFuG8vRcx",
  "key17": "2MPtQ3V1zLz2J8DvJL2QdKnbjqUiAJPpYgf3VfHy7695F37HHKQKdJgAdQEuMCaY2qp1rJ5xKYPPXXLn671P91q4",
  "key18": "jMQhSYCXkPxUo1RG45ucKktdKnMDJK4uZvq5xD7ezzXYxfhx1PCTFSPuiMtBgo2edrEwBrsyT8D5H2aKYEsRR7q",
  "key19": "5PcoASnB9ZcGXLPKp2mJk8YAP2FJmwWFRrbHmMzFYAqV4p9d15FTBDmpFWSsx9YHScAJs4TLqfdH2D9ivm33RiH8",
  "key20": "2DLoJmLbRvefUxzREAcLfEtPhoN9MAJwqTfvubYK9EaB8yBD1313q38fvUoM86Qgs71GvfB8LBhr5L59nZFNbKc6",
  "key21": "RpXmfoRLFL2QB5z8s3KsLdq3Tk6tk4rLTi7qLeNPpq44msZcNoYb533cxwiVkG9Yo9G8QzcRLM1gjsAvsNStqED",
  "key22": "4DgXgB1RkWyeyEcY52fggKBtjdea2N6vi2catQSWYLpsm4sEQFTMbfkdw3SkBpmWCDGr6qcd4R4r6rZSHkVPibxk",
  "key23": "5mGCXJFA6rLaLv1NLo48MmQ5NonKBieGaiRa3c41c6fcPCpxFW3SCPykntNdtzFAvgnhL5mdVEuqUepaJWBrZL5X",
  "key24": "meSs3ZCEqGQURhZKhKa7bTJxPJAaHSL4ttNc51o2GaDCevJ6HtEZdKjMD4PkUw1xWaC8FEAhTzW7rNgNLqGymk1",
  "key25": "2MqNkzWCmvxiwSSopedXPCDt9sfCPUB4p1en6G7z4hzZ37AgN5kxjLq3nQ5ET2pH2dMjP9XhmXDjHBUumsc95N86",
  "key26": "4qQSgmjyw2KoKA4yKdVAvTZ58KhiPhvjkAJ3NB9cmoJ95QjjQQMZWUuKQMpgzPYakP9fYc2jV1qaL96vca7Gsuf4",
  "key27": "AVek1TWAED7BVm2AJwdxEu4Q7EpTsgkXSnjAjN5PFDFHVXv9VL5pNim91mRQhFwAowBdiU8UEMHpde7Tm9pYCZh",
  "key28": "NnGBHZRQhnUaef4hAc4547Es8zGVJ3zZYd35efeRc5UyYVyVwSSF2LAZrZJugaFd5PNnzdsAiDyMWqxRXmQ79zu",
  "key29": "4s7StuXkFLHE7JyKJ9YXHhx3EgBfsjMSWhroWzzY1PqjSCrtg5eHzuryo36uKWVw7Ra634FgakJmmwb7N9ZyAUVi",
  "key30": "yQximABBr5czq1q4R8XcRzuCKQj374iPa5BJFCFEXCLJkhigJnVWjagE1WUE4eY1bhm2pJWTFVV7rKfEzWQTgo9",
  "key31": "65c91B8aWZyZHAAkudKWZMe91C4cTkXBFESPqVVSS2Wccy1cH4i8y2q1Ghkd43bXAjxE364CNZHXEzDGydnii5ZE"
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
