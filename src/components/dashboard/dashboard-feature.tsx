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
    "5h6UM3umEV8yF9fqxRP5tNaNVmnE3bJShbAiLCtCEy4q641ubeS58dXQoDg6B9LAbQu9TscTPJHqsTuSNvmxtwso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FE5M5jvm1KweLvE2NhL8PxzJBdBrnjTXSAkGAGwig7E6RnKc7KXkzxkqVGh3ejeAtoodJiZ6cDsAx7mRogqHnZt",
  "key1": "4iTW2VygU4SVcL6Tpp3bAJsmSBNdgDRFysrTu33CGspzCaFPJTz2A7mgDkn4m9raZPVg9RXZAReN8aeVTefQinPW",
  "key2": "5ogSbWt21nDAhd6bcPLDfC9bpNkMPH3dSJptkGSB5rQ5E4axNYbPWiubFN8MbuYibMM6t9DpfmHDFusiqe8jc6Xp",
  "key3": "5yFpGjbjp6BrEbQPtpXxN2GWmbAeUwiwYAjaKXXVfMgukDdfusUCVZVh6agNVrjUxuEZnkeivhPNAhunyDBKbnu5",
  "key4": "5NQhRtFWQxRMM3AbQpnmpwegrZJoqZHS1hRmbNSqxwJnGXCyBXiVGfLuE8UGKkDKp6G8XmcAV5BWwnB3Nks2NHXU",
  "key5": "55oW1XMTRjUQC1CU3BQRTCeeDggGQme4BHmSpqyAawtPyaYiNDFgHa1GvDQma1FuwViJrC1QkgSAngqCZvTH36He",
  "key6": "4ZjgaSp4Hvb4E1AEaNXhShhmRAhJWNFpsHvm9hQL9TLXy1cMg3rTjyYYqbofrX2HNwLZ7xHFPgRD7cDppoTdTyBe",
  "key7": "4WBDYWz212JYYP6zuRS3dMNe6x8eUcR57JV56UtFmAwARGAKvUHTpqu1H2soekv64iDMn5AKXcFNEkxvA7GqA3Ue",
  "key8": "58xoD7MqGZxy6xY2K6b5Ff1kBRZfWJeo8qFKwi3H8n7egnbXSjNAf5DApJJGiuPZkPfPPqYbDU2P42UsB6j1pypF",
  "key9": "3QCgUqEpHZ6zJH1PdK2vQKUAQ4GCm4aEjJiCYSgwAwzMbQvyV8wsFfx5aSuD8Hv7gSXMK6hTCXc4hjmyLwy4t7W3",
  "key10": "tqaqsVQR1D7MDjQoGFv8BcqWqDaV6hSmRqgE65xzGyktrWpsx2NCuCzyC94rA54nmRHKzYQ7hJq6HtMXV4qKhEM",
  "key11": "4MwZMu2nVy9RtMQRnRWtg1xDaKNDDYUqADNdZsJ2rqcZ6autV2wCjNJUgPHQVo8ekSWLvarLrJyT1U4MGxxKgoei",
  "key12": "2mAGLEKtXwmgFpUyp2k7BAJ6NuPjabWHccSKAXK3dTSMiwi9rJnnsJg1BqWHwbssHX1xtfKDdDUNVhZNdvprQJEv",
  "key13": "5JvhnsSfo6c5819uPfLUfWHsqzdwfNSQUBKxnSb7hmdwACQXuJDKEckUYGEBGkB6713nHYzzaTZ474eKBcGEwQxJ",
  "key14": "2ucoM6H76Dmts4z4rS4jDjoptmkUeKL22K2HRhefkR2m52dQ1SGCxbgLFt8zi9RZUgCb91epLoXaeDDNE3otnXcz",
  "key15": "5G5yHer7GRU4AXywc2Jvud8noyp5mpCjyHnYU9tg6NtRnryaQV3sEYp997nK8PNkJhUfk81CizvD92cuww76RdhF",
  "key16": "5BvcrXj9LHvFgMrqrw7jo7fGFJ1NjVmaipKEnJvCRBPKqtbVHihsuBq5WJhX8aGFrvzNj9exhShV9i6cHF4RComv",
  "key17": "38hNy1E4dDT13RddtvdPjFWJbe38MGKukn2nqryCpgtkgd1a79ZKHPUE8659FLeuoYPdVQm23oFjVq893Gdr8tcs",
  "key18": "3YzmCwnhtfVr31k9CvgAtVFA6sBvQdypQaJyLVAhJdyFLRas4VhgUhPpMQFd4B7iaYEEKGEGJYBTYoNyrzzrFcd4",
  "key19": "4FVwXaPhZUXuGcxRA2nVkSV96Ko5oqK5uLYZQxWmo4tya9AhfM2TEdF7miTgvzvdfpsTmM7E9Hbty8mhXgCTNcNE",
  "key20": "4sSvHYE63ZUpownK8nDJb1XDJS5EcCrBzwHVV88jkpbyG1yDeZHA5DUpq1ost8SKbfhKVKe3M6uCQezQpV14yRgc",
  "key21": "3dB1xRK4AL4p8yq1Afzd4LynBdG2z8Se15BedtTtqf2aHVtGY2XjrcdbNn9v8D2zvC4G5kzwzz8i85L8VLArsXyw",
  "key22": "2YkvrvEXoQs191dEsbdvJWqZv7T3U4JSuuGrEkttCegP6axJ5WHnLc5eEdMaMXMkVFQnTVutkQzXZAHLvVVx2BQX",
  "key23": "4VH4f9nmGUwKxbEh8GwskduD2rfHg5MACrhZWHfXLcoQ5Q95iB4cjZv77qfrjBvP6rr4vYVqcJHu78dSryb1skvW",
  "key24": "3hgvofJzu1taeWtbno7FwUDgi8pDhCANLL3F9UNN72T9tiMjtPMZEBCrzPQ4AVNGHMkQjvJ3eMft75kX3mNw4Nm9",
  "key25": "5W42vx46PtK64yYnw2oAY7bsvJvdM2t7SkKDYXtagc1p6xPfnaH8f6eqq4AwWRjRZ7m5n1uks14qbVtipZEg7CjH",
  "key26": "2qAuf4wxxy4PsvL3bYJU46Hi3xhkYf8AQsMkzGVRgaw3Q9FBwooYpMHeCmnjECJmCEUGyYN8Gx2fLt6Q3tukzZXj",
  "key27": "3Fq6cCSTprFETZbABXM7rpdvWcuso3EcignAJKpeXbf2hMnQySjqA5bZBJ5fz4UE85qoCuVxC9tU3dkBxnJM51aJ",
  "key28": "4kU4jZ4QdvwxfUxJxg1c1p6tAt2V6g5eyDeJ5HyRotoDcz8gDZiKbGVzcu8sDupcRa6bJXdBsXugsZ7ea1Yi9727",
  "key29": "36hgSsw4ZQbWagga1rJnh9zB2nhsMJGG8wPCjZ5x4Qz7bLWDsnLD26KsQs4YAzrg3pHppRJoD3Yd6boLESJqtbaJ",
  "key30": "457kMRHEu6X3NyQWuZa4YJ1VcnL8Vu5mXv84oFNDmoq2vojCAH58FBzuniujjS7LQ9ouiyWmVYgLLvpjFUPLNWsb",
  "key31": "2tnEnFs5VnpabGUESMzdkuaeN858xe554YgkY81yzPqp7j2bFT2VJYqy4mY4LTqEJ6Ew5DDnc1T3gPdqhefzQyND",
  "key32": "3o7snYPNN7xpSWfzhxmFBd1fS63EZbGyJdyxhgiPKVPcUcGuc6Kiuu24mAozraQ1DRmhHvqwYUECEDJiZPukxy2F",
  "key33": "3Cc8Yq5ekGdnyk8eXXfZr2t5L5DtfKdaG6ViZFctkCHnQuDfSNgC5Hu1ftPtKEWXLKdJCKFVh8pAEzaw1XSoJzbL",
  "key34": "4nroosTPcTrmpPxsGyLy6hz2D2PxYvhfs3GNhGN9uQtpSq1Y4TWCLfkEujLxo8kdDTeQyFPFFE7jwUTEv3q8ge13",
  "key35": "5MpG1PHr4oVSGoURFKUxaxu7YSEd3v91cwTHVoBaRK6wK4aHZDDdP3iiRU8EU161snMt4HkmN5RjgBHCzqAbVtUy",
  "key36": "kL6CNKRD1Ds42pZavZ1wM7tPQZ2Ubj6xBQkTdZ34LPXxCEAWCCufbk9EzKewRVXNTwfMBNxf9aZDqJEc3sAoW16",
  "key37": "SUgJs7da4uKd31sKiXBV7YkMc5b7sfwmqYuJUUmzjkDgTToy1N2Cwfkt2baR9CVkqB8Yomj8yxw33GqEQQy7FBA",
  "key38": "sCSw814xXSQM1AXxjWCanYAghk6DWeCYKcZxZHFJW8hQbgBpcFe53Lgps19fH5vKnSXNoAfTLHPuKJedV4dnp4J",
  "key39": "2R15FisMGrVysk78qYgcLG2v17WT3aMYMe69Dzqi9VXRVHVYHaa1e9JRExvp67DBRbkHUAXzNozm377vfrh3Jp7e",
  "key40": "5vCMvnwL8czVuz5UTo17Mgm8G3UyNwyWmSdsVsoa4Grey9MoV7fx9pRXL4qtKchCL1ovTXExDoBLUbtK2kLKe2du",
  "key41": "5jCpnsxGswT75F3sMkvSqHc7nxDzniWEhTwXo1uAv4jM6k9g4wGQsi7a5WJdStG2PmDDPjBbst9QnKTYaPbXcVDH"
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
