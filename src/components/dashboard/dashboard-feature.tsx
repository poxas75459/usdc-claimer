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
    "46AupfoDtRnfNQ7EvgxHCTnodKL8c7pxwG4cjw8Bw7mzMgJuDEsW9oTcZU3VEn7k1RcZXbgPVG16YEtFhABAp2cR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bZxEGXiwRV1df9FPZ1uMBjjyoq8Ctk1re8eaE4dJWKYfa8q1bocEuRPE3KLT2pY9pSbYg9qa4Z1nydewqpTcte1",
  "key1": "4rTNpZ7cjsk4TG96oMDavqjCyEWhamwUWH5XcBLQqUqTDJWxqmgcGUEbUAbGhhKxoNGLHm6M433S1awfV6DNBtDa",
  "key2": "3tkkaQHMUWBvNyDQFojkbyFjN2gswU5xqs8gXnwqsUqFDvFtYcKki1SPRuDDte3EQx1tWn4yd7bmttHjcHhyE2qp",
  "key3": "3pKJeveZL9apK43ZKM8ZBrdUyVJrsmKsGbQ3NGUuuqQFLHYxtoFpa8McRmEv7tRKQ3DPULha7QNzYfX82G5casEQ",
  "key4": "4xndN1LUgRGARxdSzmXg8JRv8L2B1R5Y3Bgq11oyJrRnJy4F3ex6TcWANaoLTJZokPTEBMtmfXnsvF6RHaVQqh9e",
  "key5": "5kQvHb8Y3UefxS3DsvLDCY7tLHnqcTKurEgdoX8VoxxR9weNUmRZu3sJvypr7ZPjZcw5HfqMdibaCPA5yxqAqqXb",
  "key6": "366GegxdjNXLtmX4b7jz5Na16nCTsrK4YuaRfxHAo1Wg27BxMX6ddNRhsPh5fAhUfmJAENM4fe1u8VUUZSzejJTk",
  "key7": "4CwFWV4TMLdqgUaGEVQ3wf35TRqwqa2iXMAbnKdR3QUCvaB5hCzoLi4riqnMwd6d1921wzsD6hYQgycGyrV9pqi4",
  "key8": "3ZVzW7dfnJ5ofDGwoCK8ckBbV15EmQN4cRTyzUkByf8WTAb5abpQeiqVYJGRYAmBHgWdaYksDWadCkY5DhwwM84d",
  "key9": "BUT9Ks1sk5ddapVCbSXodHTuTiFtYE8JCDpucTqcUcsqwLwVo59ad5SzDJnJQEUkvTew2vhfBL4ScyC1G6GDDAY",
  "key10": "2mJMK3unHnGYmBX1YzuH9zLg2tmYbdrgaTA2jbvgwvWrPJbz8tkSZpS7aAMwHuFhUhRsDjaUYHELP5bXTdupfbWX",
  "key11": "27udRdxGxdr5W6QzqqVB1LtQjGT3smrZ53cSwWK7Ttz4zwnUqwkN3dYgE2zxXGaL9V7HsqUd3hbPZ2YB5TwSM2K8",
  "key12": "2ib8ggEeNYo8VcuMgtzVLn9EDbnM7uq4kF1tXb3TZ1uBPthfNvRxBhBeSrhaPJh449uK4XpXGRnF8bXbzVzHeSPA",
  "key13": "63zx1vaaKCGDZyaH6UHx7FQAuZBf87VJS7ruHbSPPuzK1gWKbQyxY9D6duHdNVM7UHMj8NgtRP6oiUkiybrYSaMq",
  "key14": "5y6w6EUQzjpNZYaNNVtgh5FQPRFnvYCX5kUeKmjnau4mGHXtz7isEKNx1EKERKNnyEhf3hyoLWd9bQ8aBgthdtYR",
  "key15": "4sJLTRH1moABvxiajAJTB7MrvEsojrBuGEnKrfEqi7mrQiZy3CsKfvM5wCSYPLKWWCeMRu3yz8ReMrubxHEAa2Mc",
  "key16": "5Drkk7PpoBLgAPxRfs3BQG2mYBG7GD9h7hRFNjqjbJDVvgRZkZEJeDGW5uJNHcyVv3uWPbypoY7wU4ijYPUCoqKh",
  "key17": "XemAP2BnHCH3w7gPtkSBq4jZU6i9wk4DUUbKeuccrvu5DjpDVvudX6bo9qPzLgEiFRXdpo8EUnjjNxKdHNwFJU7",
  "key18": "4BxzbWispDpVpaus7UdP9QCCkRbfk2gv4VLdABC1CoL7iXqHJJJvVUuTNRNq7dnUcoyTLy4WHWrEYqUmHeYDzfhQ",
  "key19": "2nYSJGHiPRe213VPJTyefT8Xnkam79ETaPP92sC5iJEG1s3QuzcTUrBPGjD43e5TBrFKvDoHiToWJcJCqh6eajh7",
  "key20": "2z3H3DdSpMUFArajC2WSVKxtbL82ebAXiXiBKxMNvuQxdkwtmMnkP8SSSsZmeLsdL3TzDaULAAMsPCpk5aL9N4Pe",
  "key21": "3yhsxQcHA3PFG6QAwDdBceaPqpjWdJVxDkZjQGPkHpMZZiE1JkYRrGnUec2AW2phPfKmsoZ9kq35CsneMGriKqUm",
  "key22": "2xddFVyW2Vd2EvaRcRDFUP55C9GENbv8328sjVaWu6f5g1RNjPD2ARzXVyFF26xLFZNq6X6eBtmidoscaxbaK3Tr",
  "key23": "ECfKcmtBYBFFAcrfgrGhNKQJkCjuzr3sehSWRPcuNzCamKiBSp4Mm6gT9BNrFHwvZb1FyCpsJSpqcBSGFEkW7N4",
  "key24": "3yQuJ7iATYJFzK1YQnj2CVp7aHihGppSPmuS2JxVzP1Z7igEgXAXG1VwxHDGBAnUjF7MhyQgwWmu9CZLCGb62odu",
  "key25": "s8uztdmQkFnwifn7hiWbioMgNJxdVpnWjskkq7CQSxNDnj14sKCgqhWEKW6gaMUDJj85gnSrcA6XBUP7CtCK8FS",
  "key26": "4ogqcCibGaPBWNvgkFopKoH5Qf76XYMdCM2Rz9XHHqUgxqRdef6CQRsxYvZfoVkAzKYRTMcoBHfqGvRgJEDDpPdc",
  "key27": "5qT5hSFtLYVdj6oqAvJtAmbvLdxprGAjpgpwdhq9ZLu7PyURg3m9F8zAvPPBPzaDdRZo4Kh3KJgiyf9GTN6fTBmm",
  "key28": "5uP4ECumQSwXR16X3o3HkYMRUVmq5KcgE5Zsvfj83nPRLEFD5TRJMNqLznFyC5z1YrYmFp2bMHY8duoBvtAjayK7",
  "key29": "2JBj1gs5SE3gYAPWq1ptP57DQZ13LAzbXa2VGLYJmb51Pd3eBs8MXo1GozAQWu4hE882NVFHjdRTcv3S2oz4UD5Q",
  "key30": "TYWNXPNAH46UYG2efibrEg2WFZ8vrMrAubZMbzTArybRqPkJqQWRivrqappm4c4Yvr9YNHmm8y58VjytdTkRDYs",
  "key31": "5jtkSxP5w5Z5QnE6CMfnBBk79tqVF6bJ81sp1NvxHntzPTr1XrUkf6TBjVCtwKpYwihUxHYXN2NtMgtqXzRJksMz",
  "key32": "5jfDDVurWLZVEMA8pqXzG73Ubpt3Fjyco18jEqzxbi5ReG1YxTVsq9tNseN5JXTfAMFBzM8fQmHbZCqKaiAkXy6B",
  "key33": "5t7kBNiBVjKFtGe9GvNYyyU5VJaZU7h53SDWa3HRWc8a3uPjn8yGpBQ1LhUHKHR3yE8VMU786i4HA6c9esUtn5HY"
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
