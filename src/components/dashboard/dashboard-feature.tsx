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
    "GaBiDj8HLT3rV9Wx6a4RTEWiLg8qtWHPsope9i5mnmUnmMzW1fWWqEqWrL2qcK8hg8zNaVbBdXbmzhb3KE8iec7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66giiYQwGHJWLWLqCmfYDhTr4KuVVbi1uFzUA5EtgqfpUoMLgxSDz22TaFtZdPUTTvFTo3UXVDmcGf8qEGy7v4Ph",
  "key1": "5WpdZiaz5W8fmQKbd6srAk7xNdUStyXk6FKgp7tGkTwpHxpkxZJpkpWShzfdkfVTNyz8oE1yNeX8wXxeg9ewDSo6",
  "key2": "4XdNSEgbCmcEw57KXmBjHGrgGQQW4PdzCXBDoycf2F5ecqeXBcoqHPTEFF9ssf7j965ahnqQiGk7JRemPWsqHC3c",
  "key3": "5CnuEubjEFDfAUpDDadrhYjkjJC3wG7doxoRW1RibUXk6nykuzpLLD6aNmDZXDbppY5xGs7XvJx5Kavqdj4MDFpZ",
  "key4": "2XeULJ8zdEnn2VKTsxKX31AZTM6A74nG7N2kvj2fHuzqyHK7kf7EtpE72DRJRVJe8FzhqiPZsDaERDhXErwEkA25",
  "key5": "2V2xnYXKiJQhFrioEBbeyx627GqWVAPKv4MDZABh16jBoVic6YbuF3QbPg4mWi5tnQdojfDYdQE1dTgLJHNv2yN7",
  "key6": "3M34GvsWQoXjaiB62fqa9pdfwZx3SS7G5tsdJqLZpPB8hemqMUbnBehV1L5oZ1fn7N9Km15HBKTPPiYqjxvt1wnV",
  "key7": "5JPYbNRuzTbgA62YAMfCC1nJ8f4qu357grsrh3W96C6Robb5mEXTzBpKwqrtv3WFpeiHgCcKFghceJ16jgHidFYg",
  "key8": "2bcKpsTcjYhmpbGijWSx22h9qKVj2JBqiNAvh8DBiJ9DdXCQde9xFKryq8ZgW5WBDd81ZdWWpkdWZXyvDRmFZG1L",
  "key9": "RQQANwChC6w3rfRcUPQAFhR4LByyx29wFAErDpY86vMK8iaArLAWUXHLTAdb77JawxviUfs8R216WeUZv1wM8gL",
  "key10": "4KvQYobttaLfXivyJNJ8noZpYLk3sHe9QmLsbngeNnxzXB5vC5tJ5pA1UvtzRXLvJZC3A5gYCYKBWNf41baH3BLN",
  "key11": "4RjfqZtjj3x4d2qybRGz3i2VZmA5xGvhSKnaH21Ab8D1bEem64Yt1rZQdJW8L9z9hew2Dwjc2z8ngjWX921PVoX1",
  "key12": "5k4fiSzYbpbXmxUBfZsyfiMUNdS8sqPYdcfStN2QRmP7hDRjtbfGLNhqMiyV57BRZNiDLa1dS2Rt2FQifgxenSC3",
  "key13": "3N7CqCtnYZFLrmbs2V6xVPeq8Lv9VcNeeK56PhcVhbjLJPhCUJeuaubafdQg6CAXfdiyPXr1CmbEN9yAXWoX4m4y",
  "key14": "2ghxYSd2bkZKCd9Tj6D4wigmb9a15C4BpqJJ3fke7j5Ge7jQtGUqPah9aLJ6JzYA4fifkQS5L2TmfzBYs4Uoc3ZT",
  "key15": "5zT6wz8PdhUryn2RJCEP7bSMfox4zKHsaEVxJsqnA4dD1DScR3Kgshwo2WYmwd7tqh7voFbUHB3EAqEy8hKTS4g",
  "key16": "5c76XFRz3vhnhPXj3VPd6jrVAYHemzgtiNnTevhicfTevd1yHhVWYMqKFUKZrDVo8dXPjepuswDUPWcw7XVU8C3T",
  "key17": "FSiV6uxsxaHEa4V3VTMobCjZgPTDQZD5WVcyFi6Kvj33CFM2hUTD67ZT1EKn6ShZjatsMr4sZQVzn3rN7CoVCbu",
  "key18": "3EbSLBRqDHkyYSyfZ1MKwztbS5YpN5jqL5Wbfp8oLZ7BsPvfZwBdNCLgGshN9R9nvRTAQCzTqHgx4NEsWrFKLJHc",
  "key19": "4ZVjaieSWrdKZD6ASkvNpJ6zbtZ2BugDCjigcVUtENo63kav56AE1kjLtXDp5zfHpxpHgRFCqUZ2qGrWRafE9GzJ",
  "key20": "2JjpwrkqHppKH46CgQKGiZWe7sTaHnKNpezNQLCxabkfMF2jSRRZNehnNMkPJQs5PHzD2Qd8MacHutWZM9sqc2Z",
  "key21": "4S7x4d1GdJ2NBeYuubC3p15MPtKU4E8bv21is6gHLGx8J2kRJWFsTkbHtzaKBCDkuZdh7XE6vVu3p1zqPNQUtiGy",
  "key22": "3W8PXnRP5PhzdpM9mSbP3YcApvK3DrrzR6c39ZipMUVNL4FaREhM1MrvwrDohNVfJoHMbuU4sWHHwUWBATgtdd47",
  "key23": "2cYpS9y3Cz7W2tKjMR8GQS345nNXbnbjqRkaG8fdyBZ6PqmUtfyVms1U7NiBicKmJ7NSGxhpf3QqZfLrd8BBww4s",
  "key24": "5Ri2GdmXm4ASn1WEAmwyAF8tjVvAevhWNJTknr2kofBhhaqDy4bHbVaz5UWYTqDzYwdJh9QZK9Pa77pzRaekV4C5",
  "key25": "5X6RMTcyf9Z73DJUMNvKrPwbA46ysPrJo4DZnGtNB3pHmhvKDxksaSZgmpmGtCiifjBoV6MuL5fxbxjNahbHvSeJ",
  "key26": "3egg7L98UZanxb8PX5pmTAp4pKkz1cS1paVsY2toHBYmq3z4o1XJwxyQr38YwYXWk3XvKrKQcBjYWA37oQiVLcPX",
  "key27": "3qvtq554m2xCFjJt5NzHjmfCwYGGRThnqpeXHNodn6s1q6mMxZTdGzNSVovDeRhMX5q4D3Wz6ANCBNt6XSHRLmYN",
  "key28": "81wThUf8eYaGLtqvM5FFo5fbkAcT3yA46gH2gyyYPnDV2Mw9uoTxBTDtKaFtGS9rFBc9YCZXV9cuc5o6cP7uEr1",
  "key29": "3pLVKsosN9gve7NDmcCpXKRNXebSZp2WgzyttpWepPsuNtcp4pYLwiCgyLZutSBUxkd7qvXpmxfWgEbqmpUjPpSi",
  "key30": "4akcBHSWazrU9uN1ju8tCG7CWLHgwPFkvZNy7CuHHjFxFzfWX5pTbuUcvDMc49vr2JtM1f6BtyptmgJ4XUnuM3a6",
  "key31": "1SxWhdwXzt6ztM4KSZooS1yuYvpVM3ZGS8PkkF8GaQz8QShKR6ZF1iE2dx6wxVrjPUVZyyoYcnFqmUMLQBnKyi7",
  "key32": "swS2BdFYhcxbgczoKNLGmS8JEsYDgrahttvtMrdARCDTwRHzJSFJA1L3uWmpYiHS2zi5vykYMkE9yQWsbemMcGH",
  "key33": "5Rj2PuEyhTsokDKBxZgZstug4A87sDFm1QLSSCXt4dHxJTopXVTjNsmmQBXDNJfEiXRVPzfbghGXTBtAV3XVWnqu"
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
