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
    "3KZy8pfYfgyCN7bzbvD7CVmFpbkXWhH5DkQjMQm3PVtaTniQry2C15ysYVYo4bvkxKcmu8zSoeh9pwG4xj4nogXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HFRP2VapFBQ7A71JYXRVB4QtqGNkmCASLRn8D5Gb9NXmPfHXYxpkizJ2opBKVfrQJZxTMGwDVhsUMrFAanGpzrq",
  "key1": "3Ggb3etzGowWBVTdKPkYbi9gANhTRnoudLiGQJzrqk9YKvaQCPGivf8GKikUxdjU1kRvyFwaJ5faoxPwtDvQVTnx",
  "key2": "64UoEu7MouncQJqnLeeWWmMbGhSkk3s6cZzbv7yQNc3e7EP3B29Y8uLZYzn4f4jGWDCnMcurUZhUL66yiZVX9Y3X",
  "key3": "3jaaaqaazvJq95XP6YLL9tbs66Z1AMsZ69kwiPSHBGm8mMBrCV4bQeayrG8Kc4RA95cSy3Yig5UC3YXpziN4FetA",
  "key4": "3fPU633YBG1CH3774WKbSxo1nXLTfgJMYVLdQhpc9JzJRTip74tGxNGUFroqF8ntPM2D1G5rgH7Swmntwp4GoRjN",
  "key5": "47imD9dnDfi5pG8S5n7gYmoKCXheMR7wuxj1yWH2pYLeYJvyNdGzp53oVUjXyihr2uCDECYg7PzvmRhP7VksebfR",
  "key6": "3h3TKXb1An5ncVUx7FXgcfuTmKSBhVEHAtPb9j9cQXkqZ3zoT84ixxKXbARGtnB3Eg4eYT8gpqjeshhMrSaZ99rQ",
  "key7": "2cNYoHy4JVmvv3ZzzBCJBfedJUisvXSXHBGEXxs4ASHE4xTrtoz4py8KckbwD6dEDFPjfcsc3XVo3epggbAMueWK",
  "key8": "3P2cdAbyLoMKejozrxafYUfkKjkjFsdcCC3fpxgvyR77ao55wzRxdDWFwwFXSuFoUk6xPfLdfT6caqkRzTEEKv1D",
  "key9": "4SSM5BEmfeSnyz2X3LDh9PWo5h7NcfvXHpe928LVQHV2YMqubexoc8vGfZgrySckT9eTY64NmuTURuZ64WxXeLgP",
  "key10": "2fXe2FZiXVG1Y2MzhpPGs1gRohnfRW1wZzWA6WnJJ8MFfAVPjtLXbmDRdRRN1AHTVLhitRoQqHFRUBwZN3LiCaN7",
  "key11": "41deG7gFwGobWCaRoGfugQS946V241Uika5Z2LTphoyiMV6D9Rju4bR6XKJe65eyQb6f7MXLuSgNFggcbtrnBAzZ",
  "key12": "jbM2C43E35Qa1HrYvisAu4RCLfgk8Q2FQJjCGkpjJNZCPUPTt39uFHGc4fenssCaCSw99EkcWBi3N9stR1zC9wk",
  "key13": "sM4FgrPfrmtcUrJ8M3zENmFFPihT1zCe7k8TbnJpYrUYC1pDb7SkXHQEEeVrYV9m6PoQ9u5kuBf8TyXVqHUQ4tp",
  "key14": "59MnxW65kBU6hyN3skAKzev6qGiX9cKETzctu2QEXTBbjyZkhsMXveso1TXegNZUXHxRd4WAxhobdNNFsyTvVkbz",
  "key15": "2xdfBrfgcJF4UjckuPFGWfcqdSpdJhYCfpiYK1uLgMsNyzMwqiDFNu5ZJNJ7ds7hjoHt1qnaGrCvH7QdqhfYqAFx",
  "key16": "4Bks7YY9XnnRNqfoGq7y4t7WJtJ6sjhA4MFJnpuYPzA17W9dfSGpRb3ALHLYZjyzwdWyMyAgWLhrdE1eyj4vBfDw",
  "key17": "vgbrweH9qSwPPMdeubZjhck2hoQinXK6xKtjAbZWJmKQ2ULzqKRjygoge6sjVWTmCLk4b8DvV7FiezBdgyVcK4q",
  "key18": "5tExLWENACca7ovgnmqBiyHbmmfjxoUwJHjZSbSoXUPsXo9iavQTSqCfKc4mDVHEf2gXEiREQgyQjGKuuDzTZtw7",
  "key19": "3PJ8Yk9YWvKUDtipPLjXarBjQnmbc63JN1TnoNqX4YpF68mkbvwTpnfkFuTrM2HJg6sVBUsjKe2ujMMctDQ2bHox",
  "key20": "5wAL95UHVV1t7WJqgQLVhWTWRJ5CQoagKsgM3kPAFKpJVEhiVjg9aN4vqXGHgG9eA3uGKZrfmccsh5BFhLFRCj7q",
  "key21": "3QnFGRN8iKX7FyffeHDZozoCbUKsnXmTUoVR89iAoXjCBm7pauDZPJH29Gmkvb2GZpXmnjRTKW9UiauadyH7f2HH",
  "key22": "4AKNAjQNfPHunhvCft3H3TXGdKJsfmcpY6oCrzcYZAyc84jXf21d569EDpM95ocdiUPsiZSrh8u9rckEbhSTsmyb",
  "key23": "5zW4j5trrsom4fBMXcLnvUEiyyo2RnKs9cdspdmj9VNKJcQTFbyDyBkypyh58FLhJSQpqM8CsafATxaJviKixmLH",
  "key24": "5v4nMwRkdy8RbZPcuL7KwKiECHM8UxVpu1tuGXvCgt6BjBs1jFynEz7dNijHMq3kWhCgwsKqsRtX4YB5B2fYeAhi",
  "key25": "3Ms1NQzsHRswhtVTCGJ8jL9wAzbx93Y3MTqQ2CwYxwJL6enesnm6RJPEEWPgZzePaKZEiJZ7iDfHwiUnufZKvMbQ",
  "key26": "bWcmMXFWc3Fk9H59NDxo59JCHUApkiZVz1J4zgo8UJ55o9oXn9L3R12Jpck9cb1WAypZJDkXAiQmWE6R43hErZG",
  "key27": "3EzdLqQ3LygoQHmgU8xuajvyDpCaajcbvoaAnSfwY9dgPVTwTm4go6rjS1v6XB3J6sEkt61fJ2kMYnph3ny7KkmF",
  "key28": "2zYFBJEsPxxvedPgE9rundJcNTCJJbHXWvhUHoyfXn6Awced8wm4RyBN7endr8j3odtY4y2uexvDWpfuHvxZmYou",
  "key29": "3jh4VCLpFukqaZY1w1j5gGavyYLD9oNuamUXYGxePzzeCr6khKLNjdT6ErTDxYyqEAS4dF1po5nDCoGSo9fQRvYU",
  "key30": "574CXRr7qiHLQvbQAX5ZhKPo8S9e8R4TiiT97EmgFjHYmWTmN6yv5ofgiBz624kZrVQfdFqhTTzxBY53HGwTm7mp",
  "key31": "4CBiRF41X43nvbHr4mc76yiGYUSpoQFSAQack5KRRy7jE9xzdTc8DZHSdB4NNPDeDqNFuAspkVtVvkX7Sxm1AKBQ",
  "key32": "ffFXhUggYR7CQwpLff2CmxN1snMPaRkVf7aZWCchNLuFXCQxH9ZvEWssAUcUFnLwndiHip96XuFs8e2HaXpVq12",
  "key33": "4XZvvabLVK5DWRyWcL2VxN6XGwihWTa3fep1yW9AydHpfi9GwAZJrRShR6qqzskNLGcpqBbBLVTCa2MbUjG9j1yB"
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
