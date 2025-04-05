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
    "2wxNFJTraDkEhs6kV5ib7sMv7t6VPDUzuMfS2LoLfVQ7R2Kxo4J9nmT56eR6wY5Ttx6YtLMU7PKd3WNxDs6sDkUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48K7cGXGcqxLkxixUxXhdHsx2t4q6nySukZNLnRxQLBzqBnCj6ZzofbvqShnKCmoUwwnf3MyJ5niFKuSz2waEYtV",
  "key1": "jwFJ2u318ocTmev9qSM4vFpwCtNKZDH36SwLDA3kSA5PnNS7fuSF3mWfzByVAcmpaCJDMDuC1BEaHbJeLHHn3VZ",
  "key2": "3f6aJVnMCTsVFkSZDr4Y6tWwqxh7tKckWkotaUrvVcT3YrugUKApQRqJE59nEJTQT6uaGQum2sGSn1w9R1WtK7ac",
  "key3": "2XoUcn3APyG5xJ3CBFyKRFtF1JKoPCHcN4cxz5uiXF6vE7CJBatucPpLSxR98Yu2bZVtKU7tiCyicXd6Esv6JpEY",
  "key4": "2jjnoNAQyhiZwVRQFPpAKwnuqYzGZgmZ8HgKzRt7gEiMmncUPUBTyaDgGEvQRjcDcYiH3fL3MeDtYssgNYqejKkY",
  "key5": "5bMqmTgDZmrFMhgVYm395UhRGA3QabcLnYummL4y5664NSUbmnvW53v4hPWGViHne4HqqWPLB9MmASGxq4NU9NnW",
  "key6": "3KFxnekn2ovFqAyhtvc3axVkVk4NZJWHUaibBEvnTXLziYd7sdQ4aiFyQkiHBMKVduwbWqZcdmVeZfYK3S2fchR",
  "key7": "3z2yVRP5U3HefWbiZNWeJdQL3CMyxUbjCRer5aTXaEuYdLun4siBkUaua7pshVSs8L98R1DPBMhnso6BSKd4wv7K",
  "key8": "kqUiYHhy2SnoiKa4NBSSWCNZA6oqD6kwiwVJXRsuJ3BVCyWDLY2jk5xZH2DrwBf2bRAdPTADf1gqs96JTYH1M8d",
  "key9": "3eNs4Smdyek8QdYhDQyuVLEYKMUzRzDpA6obcmyqVBN3PfhaBRjSKEmYFV1DXp7WnpqdfxAw8xHeJX7qNQzKWoyZ",
  "key10": "3QT93ts4DUS1vQfpoftypMR5aCpHEoBUgiUwEAUKqCMSL3KsnqJNmqnjL8FFAd9WG1jT48zWZ6NLkxVcd9RsMvPt",
  "key11": "2oz1SK6QTRvsow6YnDkLojVMFbLgjd4fdAhfyDPaLUmjtu43zzohcmG4pJqEBo4vyLGt64dNLMVw9U22gQrnQsYa",
  "key12": "66diz7Ud82qqcRW3E7WAskn5j5Jjk9hJqpy4ojNWN4zDEwqseTvXmWMayig4ApC9hCxBUrKAHoH6J8gWuJ554F9z",
  "key13": "5KBUH8d8dUCUCiep3WB1kArB4CM7pif2ar9QthCN4sqNbS2KmciuCYwpk8RGW9E7R1RzCn1Lh5YrddzVZBnWCN3N",
  "key14": "g9FS6PsEFUS3pQKWSWqydp6K7PQfzYWpXoLzFpYvL3tKhU3jvaWiQCvF1mK6sWvYq4PNcYXJHvyGbcYZ9cCUiVv",
  "key15": "5g8sQyMDFjSMSGDz1W1ZGBxm3QiLUUzV4WNsw1DEuro3oDjS9WCuavdT2PWkf7Z5Q4pVRkRTEUiyK23FnZzXTkfH",
  "key16": "5mSCQfcvqBms5xp2hPDoTNofa6mWiHKD3BiAQcoYdgtkNZh6VQwy7DEZnRQ9ivGr9iBc25tVS7H5MBcSyXQyqAag",
  "key17": "5gNU3gggMoNooXFyKcELNQnuCiKxqv8VSUxKVzNWy7cdChZFPc24Z7PysuCpMncRT5oDiRkuJyAb1nXwt3uKufT6",
  "key18": "haohzAbzS81qxtAiNj1cqNKrZbrH4UgsnCaVny43bk9598rVDSZTAL1hu36RwsdT1hnFkNcCEvLmUTeKo9fK2Qy",
  "key19": "2JQvGN9NWZUKvzZCLxmZLVQbrKbZHrDRudCfFFTBA6LDcAp2vjHUww2awzkoGXYwbu4fVER3S1sHgkvjUKoon8uN",
  "key20": "2yjbgWRqrRS1VMev2yCfB41p5VZCiKKGFPnvihN5FrBJmdsmiZrDsE1srYNtBxNFdBqJ4DBxzqZCHZyt4sjtoGBr",
  "key21": "PZW8kt3zzadKk4RZUu4JN1k4DQXaM7btZcTQPuZi8tSTHtd6qpjQJUHx6HEmDJ6C1ihyMFfvuACpg1iZrGKFK3a",
  "key22": "4NhLdCt6RFNoLibaGNEmttPaxQsLtWRhi2bmeEwbBCj3Rr6wEpDhPyJ6ycKLYnk9y36mUJwEAzj74L8yqWGwfwpA",
  "key23": "22n4fLVSjkTtBbVpQC1i8vDzVE45pXFNGoLDr3xMGrVhWMBbDMBwAkmV6kPvNLVfbUeGiYeu8TW1QTG69r4M4Sjq",
  "key24": "qsD3L5yVYa56m7Mmg9jEMR3Mz8UAaW7bxdgSrm1wFRdx4w7V9hzBh5gge9Jp8NPfTUbUzoyiMKev7sUoLJHsrRq",
  "key25": "3A5d9SVdHK8eQuzGJuKJjLPebTznLwhGBQj6nXvoENT2tBqaPAuFptpXAZKHEhZFmJ9Ch7S4va3tQRyquLqNG2ht",
  "key26": "3v8oKhqTg1uNxyYwSETgpehaiV44ZxkLGa9BstxGRCmzTJ5ooJxVUGAucdNYkKM1y2sHUkUTpQxQQUwcckY7cNyw",
  "key27": "2B3RQDqAkBoc4aJSGDV5eAJiPCeFe8YhRaBH3qBNiAS4q2q1t5B4yUzjD17GffqPyxCJ7A8qHNV4YPGR6yWDBTd",
  "key28": "QxDcMRfbViNmmzmUiRAW7BZZqwA1QtbeXcXsge4jVGNFXLnRtfJZGFMbAjAmrD5h5xizifL9n6qwZDbpwvg3iCB",
  "key29": "wrnPwyGEKNcG6bsPsapXY1cd8mBC6MG46t7fozF2XSv3bPLZ6XibaU65KtuuJJYZDdMSETZPgb95j2JBXyYsMMD",
  "key30": "3gnxhcyxiwv18Qb5x2ARLuc9BHnGwJNHVpjMvh224hNdCE8n5JQosLSRFMLX9V8MpLU1qYuFpJXnJozpcxo7oUCg",
  "key31": "4FZjtrvHRTaXwABzpUExU4Ky8dmeG7RdgKMDcLKxSGkmzDQgRmoKS7tC2udCB8CR8GyKENP6aR8fskUrUcmScvRU"
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
