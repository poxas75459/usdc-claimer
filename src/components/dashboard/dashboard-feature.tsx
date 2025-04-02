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
    "49uDK1idN6Bd5tMYiiTyusMF5F6KowDPxmaUpYaBNrFmfKBE6dDG3Vb1dnBfcRkJXvPwuSBFkXqjGp5TE9J1gNWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66mosTyPz2vNP8K5YyykVCRLeukqtsD9xSXe2ie2DJmw3GED5dAGHUifTFXizS5FrLuZy6dmiKxHvjgAHmTZg1Re",
  "key1": "5tDgsnPqECZwXDqxKqgM7hdSsqv4u6HtxFgUPFrS9H3W9uk4PZ1bWRD18jpaYN7y5EewuN7DsdVYh6MWaWWdNQVi",
  "key2": "4JH6LvRnvHGKZspWsBNCT9iJ1JJLdgi9DNtFn8UKzFvj84R75gxuPwAfyUBnaTwAFiu8mJYxrVoHhvhNAv8HkQR7",
  "key3": "4qm5Ai8QxkQEQuwVSGgkDqUQDfWZyiZCn1gU7vbK25Mx91X19ECrm1hWtes553U2KxBYruayfjfEnw9C5ahREkzD",
  "key4": "3DHX5UAh3fAxim9Nn3KSk1aAaY73pRYbGrxXu1qqeiVmFAePyweqG3fCtDRbTiQfLbCcFZVzUvN2kcYArf5RdQc8",
  "key5": "4TqTHU9pQnCfh6ytJ9S3k3r6QYALZpkjpGbYy2a5g6HWGEtyqu5N8Nb2Wp91VB2kRZ8wCDfpAWFJnBdeh4MzsrCm",
  "key6": "WDBUbKPDqhLFsxftee7L8aAHsMMqHKfaxLoeczGHVDRvS2wgLjGaUgfLRzU3fQTpe2eobsTpdctLsVarEm513Cj",
  "key7": "2zXdkvcFxABpvWgzdfSEoRit1ptTgchdTkot5stjmaYZstgoeWbwRHgYGJtHXTdueyQBE8F4SPumpMcewgusv25K",
  "key8": "3h65iM3X2LipHTeNkrEnqHerQi4PNdB4HZ7zkbfcgpiNng9DtK3XBLjz3P7jBNsfcvDm9XQLoNX2mLH45iWdVs7Y",
  "key9": "56yHkTCj4KCwUVWtFyTm9gmYPHRUGe7fswnmLVX81tGMoMNsbj1uCqDbSujedjfb1NdSTfAfemY5d82ve5sg45Jq",
  "key10": "5JQyYEYCJCUydUWHTdbYtL5AatX63YjxfLJVx56Nf8p9iZLpXUfH24HrBEGGM2nsTFZt45qr49pHbu9X4oDo8jpi",
  "key11": "4yiZEBuN1Nvuew1MVM2PSRnGk4BJdjsNm6gEC9WUtmXSkmXr85F26YQ2gV3fegjmbzT7K52VDD8L2XWXENtX1jmL",
  "key12": "4pDmCQgopTWCYmXNBEforykEwXGbc7UPybxmhXwtv5TyLRds5huRJhq7LditVrR2GkCGfv5hTy4S5NGzLs5euwp8",
  "key13": "3UHvw8AhbeWSEicF8ZzrFHBgBk6TwxUi5WCCgtpVYhd8nBFbi9UB82gCKgGRkd5vrieCsNvvhdCS3oZfx7JP95f6",
  "key14": "3yJ1XR5Vvn3ervY3H7hfQje8DL7rsUW7SbWoSF3Z8wqVCyYg4q5dYUNCiw9krrcTSs8a2FL7oBT6pCdBSPrQ38KD",
  "key15": "t9rjyVujCmtdkbrvf1NK8DPZCrwmzzUk3DJ8BKEEdULRSPK1wckCBDAu3EDg3NeNJ5D1jmrTe83qSvTK6cadXFx",
  "key16": "2Nf4BhRaRfcoDtTWV5zn9rzogYchXnBYgR388ge9B9XJPviXcWbDn4T7TKexDDdtG13SsaAEfkT1GkNvBiZYYPyb",
  "key17": "4nuFSmquSGGhCTeVhebbYonDc5L74GFrYReDRnfDTwDei15VRkRMtdvJcTF53NwrWmsPNHxK6dy8WTCNmzZ3vQQM",
  "key18": "6YuV8VVXEu2mz6ncKV8UAMXkyDNcmVjb32yD4np7knLijTxVxeXBwz5iYPkNtR3VrBD5vSR98yArr8JGgKKGHm9",
  "key19": "5ZYqmZshSNb3yBD4x4k3dQS9u8k5srkCuNC4smwZJNiGx6A1dubTMt9WJvNDzMiM5ixrKqsRoGavpLuFrfEBiVi",
  "key20": "57LfLKHJ2GNkKTBVpuPodQY4SjFqnjJrdHcPHoUcWzoeP33NpRk9gFKZHM7dr1rLenisEUBVYfUT8kLU5qkLAeQ5",
  "key21": "VA8hkEwpMTaV7oZywqgEi2QkXkF7A92fRdjvtxmQbPpT7Qokp6kFW5wfNrUQaP2zh46RuiAG4ezYdi19UX3w2YR",
  "key22": "3BRTGQRzpGreQ8otcgL9gyceC8Joo9kLtWqWVe2fMTMuiTk5hUXteMDfGxdkSMFMH63uN4u6fPvy6WriARrfdUrD",
  "key23": "3fZ13Z3tevdvPYL1WWSbkcSK9pAsJu1AYMxty3MEUB3Poa7iUP5wnARw4kphSieB6dCc45PN2jLDwTzty1ZAFhut",
  "key24": "3PvvCgLstF3LVZsG22BB54WfzqQvLhaAX5SaQZnSDmm2ZusrwvEbD56mvDZ6X8j2kVikhdtXGZJNFPDDR1vfrSv6",
  "key25": "5HVYVyXZUXCe8kzBZ2vBSWTk7b8WVpZPhwQowGc8XenrAHkyXXmcye56t7SCeyyharH3wyqRwTFDLruxGDUmqBDL",
  "key26": "2uTnZGXw8ncTCD5E8jyevogBi2yQBCJ3vnrRtgXL44Y3wyAi57twdekK9j8WyPyNjcGYAZqFFVNECU8Z7axvxVfy",
  "key27": "5AZTzCVfb3YTLERsYC8vFmYMpdykgAZicbWS68bbtLpRAhbwYQK9ec7wZmLot5s1uU4BCCwYqmCKa6zeKajqfwjr",
  "key28": "5b2rwmK8udutWZrZB1M2iWAveoa2Hru5RYikZSz4eiFpjQJiXZAkUvgfMwJN51Qi81wfodMVaXp2UWR5giZTxaBD",
  "key29": "3rfQSjaWqsHWVWyWHmKzT7vAa88jhC9msf3H3MngQ1dBMbq9Xw3GsWFCTCB4XwW6mzZLrbEwqaxbZAsJG8gz6rJ2",
  "key30": "3zChW3Ww4P3BCbL9XhH9fLUTJZ2DqzkFtoEvZZ9AQMNGxxTWWgk6vfc3WZjQE8PAdpzvCosFCq588LfWLeubFQLy",
  "key31": "5wo83SpmfnS4rEENTQQtZR6JpFDdtAdSBbDHC99ZHEjEdjp2WCzN1Md6J2ZHrJ392xmgb67ieKf33Jy7KLAd49TW",
  "key32": "2EMc3YwZSPqaPm3p3tCgKX36bPb4NhrGKtSEn5MkL7FmewRcd4T4zqtuwLJEzKrhptSuE2TPDkZGbasYKPv9KQ7E",
  "key33": "5q9kK1oLX5PJnWhmavvFQio4fX6MHixortmQUdFbt8S9C9KKrFVKqUxdatTi5h42WGmkp3vVmBrfcdDyzXh4c3N",
  "key34": "wZp8tSdJAvtaGb2PU15sREKRJauD97iiYTNKtG4pwA9zRCQu2KF4QmmuXK6jVXYrYcCMZzcr1mZs52jLSBAWzZT",
  "key35": "4xQv22ZRiUi5g849MeU7Wv1qAnAfYWxT55bW3fb5KwKVbfYob4TeEj1SJGTspLoMPw11yPucLw8QwyR3w52xt38E",
  "key36": "22Nse9sNFxEvaG84FWDK5joCCjA54rErCfFqzCUr8qEixdge6iSdDT9dgSxXhzCxywG4xFBSMeVfXxEMj9TTKTeJ",
  "key37": "VNs5bY2Fz8jhtYoi5uQnZH35jyUAi1DUs3vhYRsGvVxoF9AhUzkSHCVvCiee9hCbwgAAUa4zPsWJgx53haPP6VF",
  "key38": "3Cb4eKpih6gKMqZYYTQh8wr3vEjn7HQYGc7nw8ZW96CgeYfPZg87Tr7PGpnakUrZDWJ4R82EaKYcbLBm1Wo7DagJ"
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
