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
    "3TvKpaJPCtDvwTWeeqNsbSidUZyvkUJm2fUnLAPPgebYTXjw25PLVhHvV56J38iymdJ2TQG4Kj3GTtXvz8Qpw1Jr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "86LxBe2URcrxzA2Yh1n2ZSxZboJjGLr8AHSrfcasw2yERjzBqstouZk96YVQDCLkNpgBfecxuVXguShduCdE74f",
  "key1": "4GvuummFoXNnSrpZF2ATAj433vwmBZvgYhLAKb7UyD3hGWGwcunPQSy5kgnrGNCMurZGLcmJN4rC5r6UCoGyfsbm",
  "key2": "47VF2nNc8CApH3PeZCYsUVHnnF3MsWTzfTi2TLg5NKBqeoC6bLFXq6jo3cQtkWRiaC6YjBvoskzqapzuGrWNXv2x",
  "key3": "3rJutUydvJ7UrwYJ6tWuLX6uuQ5oH53hQbmMQXVym7xt3eoJMLAsPpFXzE5iy2E5US3PFVTbkNn3ggoqQ2Q7Cpi6",
  "key4": "3JcjRfPaaufL9e3oUVMrqMnXe1Li45MdZKMuGtNc8wYJQqpuv8eiZgSUeBhLK4bUFzxvqspDfreTuBcPEBVzb4a3",
  "key5": "5y5vq8pH13vSmkCBeEW1MGGggRwm1DaadVpJCWgKpsVnXYvDyaT8dxnzurvfJPfyz8n1n2HZVkJad6LQDokby7w2",
  "key6": "4w89CrUTU2ohWJazMAx6i53sBHuspYsKtVsWJCbXpi1GCxuqG7uXSFRsfzCUjwKhyWTnRLVfncBpzY7dKvRKnJ7V",
  "key7": "51d3NQWMJCbbhqJb6tGCPQdXgH6o73jxkNnDtqG6jeG9NgtPk1p5eEWc55dzHawkTUxYTm1SqyUTYbQLGWGnHcqK",
  "key8": "2V9nMCWCQDtff8cLWDk9XxaqeuejNS3RsBYjfaYnQAo1RQ3L5MxhCsyW8aqGLmxwxbArkZpMLoaFHjWEHAJscBdG",
  "key9": "3bTisnAWXCUgPj6ai7Nx5wU5nmASBeRDc733jCabHGV2XXgrEuCN8HjBGiFyH4rNrSmEU67TksDiVVwzrkikc3hr",
  "key10": "5AXcHUeBVw12xzeicgTh7DbLgLRYaeriJ6X8ACZNWKptfzUG52Ax2hLHVCBjvpbJgRRSBobRBkmAR5TfE6ZMSQ9v",
  "key11": "31m4MN6pbFKhGj65JZkXH5Fz8wv1Xm5KkDGvc9YuSnBEDzseken1A7njxBvgbt3DM9XNCo1K4PiKV7s1Qkmd13SB",
  "key12": "2AW85RkWhpDxLTWDbGQBFCdjARQsJKsztdg4TcaBPMM6FRd8y2RfQiZbyDTextEpNvuSyR5eUKdDQxmyyRvJX8rU",
  "key13": "5F4zB7R6GCWtuCEPMYELJDxiYN14uAjdFJygsiyazGewWW75JVPnMq6RFf5KssXmsR1e7G9cFSQiKush8yEf6RCe",
  "key14": "52yrkGXwKwwgwWAvUSghZVQXN2eXRx3JdjESYsGLvkYx24FpWVuDfK9r4Uay17fZTxUwizrLuJpsRL4QLJa3tCkN",
  "key15": "5YqRYZM2544eVmSxaqS2VH3HeV6QBzxqeanTwsKKKWwEqA1GKtQJY7YpVHwZ1oHGumzwaHoKA8kyjKE3PBz8t532",
  "key16": "3rBHFNAAVrS66UnoTNY5bWiGpwkhxHHBrPQmVMXGRN7mbkPnqxCUbU7wNr1cDM3t36pEsYX6gD55XQoXLhpFn9GM",
  "key17": "3PMQo4MiJLVRoU4sMUhBcmfVrAAaVovXqNWDPsrXXr2egBUYXw9UUwMWcEG5MNUYaeMBR3oYgyc8xeW5tSmU7THW",
  "key18": "64oiqL3uEAmc7bmb2oZWvm72wj2zhg6gjkqoHJfoRZweYyK49j1uVyFqu7htEkARVxZ1zEgYNCVjVHWUjPMX1qeY",
  "key19": "47vc8fNnb8TmofqaD5k87gFjMrSTb8J7zajWRhyL95Jaq5qHiQG3KCUzR63ThriNkAtUKvQ8Dw6hE8BFPKpiMwb8",
  "key20": "5rWzMRSVAcW8zUmxSc4Pm6iDyjm3e79aWeqSZ6yFTvyxeVvKUdTaQxB6U6hGoMfJbhFn2oHT8R6c98hKr2pvM849",
  "key21": "4MvrJYgZ9EeJ5coPsxwk6tWcKGVi4fhPX3UkgVEPZM1QUt1GFSHmF19UhpbFk7b4AzoNbcm4dWZFHbJPu3fiJBxN",
  "key22": "jqfKPYxeLQoZac3xQuLcvtNToDDbEXDGsJR5YUag2y462CVBLZenV3Ya8wPsHaBoSn4HEqAETFxemujpGv15Q8P",
  "key23": "4HwYuVoJhoxKudcuw874Jm5339ZpczFvDbH1GMCDzL4uGLxK4PVHbUvgtgE1rHcZhPHqBkzJsmXP84kebDB2GRtZ",
  "key24": "5vbFTP4UEDpucAjP1DSWrRLr71pcnwzPimZA7xurWwfCNEUBjDqeKD5eMpDFKmM9JSkGjTBB9i16L76qW2cGSTcN",
  "key25": "2y3Aobmibfba4AFUBWzPDkZzXgoBfRbSqkYh5axR1ocozfV8rm8mvT2AjsNHwTBxdoStwDaAtrRiW8HCRm7SrVAt",
  "key26": "3Dj6amtsKpRYGqpBVMkupjhFe4R31gGZT8b9Aat6ZhQ3FqYtPHeR6dy1hUp9wE6wUPWEss588uT6Ntv3fp6b5xvi",
  "key27": "3NqbteZEGpeuvVYffhPuFk42GTgZk3SzDtPNn5TgoZusV253gMDDM7cMgpB39Y2bD2ztjhEvafxteSzNTTcij51Q",
  "key28": "4k9AmkSYMj973obE6VUwqNTgoeZeU3YEnNaqGUtW83gwuEMFmZb3pctnzKkcvQf1KCTLdFKdfT23MfSmzcF6DpNw",
  "key29": "4hP6n6f7dAQPu4VQRAMseFjUTPtpJqHtfkdYqDWLK3CDx2UBMPBPgFGoMEzNx8pYLcJDC9HmBYiMTwNRHATLXs8Z",
  "key30": "5WyqfSsYQAv6gnvR3XXbaHGwM2Kw6D5XEs2tF8VQGMVnVSsJEz7Ck4crypt26LZ93dkzE5mrDsQHJPGpX3cv8quK",
  "key31": "CwcUUnjbfYDSteX6NFe9XZUdKmM6GHJYHvtgztMpokUcMraHpHrfCGJwCkZRGe6A1UiZNPvbQgT54db7Ef6duNo",
  "key32": "2T6S3pSGDs6oAQ5nR9rbXioNe8XwUTpCtq7jN9cSSKpzCd4adpnyYu5ptNHi9Qj2M1cHFrjBoPKQXhaWar5DGdTV",
  "key33": "xUcwDnsHhEqzYAeDrAs3D4t1mF8aUPtLcKGyDD6AztmayHoufYbVkmYR3jcmX6NFTyGPq7enjSvSoXemk4XcJaA",
  "key34": "64vHexwaTwGo8QqQUaSApEPXFFkHm2NAXRn4uDLEi9ymTzmo8fgGBznfqjZ379Z5CkxkLZpB3rJNiqrRYkLoHeVN",
  "key35": "22kq9Ya2Px9FVHjHyyvdwYGjsHtprkYv5o1M9VmYEqhj4D9nBJdNexJjqcjBvWSbnZXVsYCXN1zpHJeYAnbkGUMz",
  "key36": "LLYftT3Z9nuesDrJQ8YLnVzxcEDZQDwVT8HWv9s5vSMjo5Nv1YKoCR4uidNhYNAy4xeZZSZnqWVkjwJMN1M7wEw",
  "key37": "2sXJeB5UyJiXqRX92abHv725A3kZ78B47iXEEgFhZuDKBSRSmEPKxQD7r2UNuBKnTiirfixWQGEjnq6mNRjqeupf",
  "key38": "4HMH9Z4aQXbCzsbqdEUi2XjEVq63c4hmTiyM5GpTd4jov3XXG2gsjghZNQZj5CL9gmbRt4E8qc7jiUAWS5Btvtos",
  "key39": "3myvu6ZsYSLd16DYAqKwD2Vko3kbtMoFmAiLv9BSnFC6DWjQRjuuuEFUiF81ff9gLnaskubjZBhUyWYVjQ5nS6Yq",
  "key40": "H8C4atu9QhTf3EKegSnCFYfrEfbCi621jMt28akdLstC7S6v7S31dpgvqr8ebmeAQa3dyduhB2i3FrX7x5N8Jii",
  "key41": "CTfNWyZpJtfekr2EdshZA62ZC5soTVw1rmrHVkXEDP212wR5H8ACjkL6Pr3H3AydiyCo6Dybw7Y9e867Ln3umR2",
  "key42": "TFamE5NFZXuBygk4hZiSh46MPncdyxCVL5NJ4CNYhF1YpfNAMmCjN44z77dzhtp72gNr2Jon5AsKt9RpVRuwq2A"
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
