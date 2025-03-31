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
    "3JQX1QjANFSGGqeLsU8vv1CvheHM5QBkb1a2DXCLVyMRGsEVUS9bDMUfoLVfq3k2G8HruuU721GjX6TfZBa7dmcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CNPwapeqeknFXtLqRU9idpVetunkZZqQuGGqN23bfqe55RD5xYiWrEikULC6PUZrZyJVwBEJHxiN2eiZLNm2eX8",
  "key1": "4pEhqCH4WMAjMD655SzjUvN4NbYcVJrKNKo8naj1dwUemAPYMZ359nudyrJRM3sKWYwuHTasargPgmUkRjBvNWw5",
  "key2": "5RSUWiTE9bVKxiYKHGK1ta1dKa91XSejoqudBt1UGo6gHbaMNjKHTNMSam7Xh3td2QaNhmP4pNPiM3826NhNDCKe",
  "key3": "2Vn2mBMqcHYEDP8hmWo87GjmNswSLSEr2eHxgLuJoWJUara9e7MDB4PqZ5u9PxsbmuRwxpPdwSctetUCiWWWysiz",
  "key4": "33z7sv78ARFeP2BUXpaGAN8EscojPCWLxLcP9FtR296b28fP6Jf1fF2dfp1KKDAKfP5mi5MQAk3uoMXiLcfcLaBE",
  "key5": "9rLnpYXaxXgiu349D6TAEhjfkvvLX1s6Y4DrnbH5o6fT2eHaEhjfCFqCCYaa47smj79jSenBtyw31fETgENDBnV",
  "key6": "4NYccW8nqFYos69LMpo6irhu96oUoMBz36mbz3DzZXCZpQ8bjpi6qyaKNGuaNYohy2XzMZqqaya4v3JybUSrBsfv",
  "key7": "21JR6Dd5miyWAVNNEAcjcXj1XMnPMmhnxGpBRSDViQM5ZZTCxz73R6fD3zWikfPd2AN3rpwqHXPhmEBucS9xew9Y",
  "key8": "MVN6hYoZVuFsvxu3RWBVwXKf7kYjQJPs5e2nX6ShxzECnjevwQs8i3t5Vp6GvCXUBr5S9hdQ3XBLFQbzUZyMexa",
  "key9": "XrqEwTZrTU9Ue9pga72tY78EKEFBXvUejmgp5scwPFs7c2yz98DDo4BHZ5VFV63STTKyj9DmPX2244g79xBE12Q",
  "key10": "3BBV5pGYZseRBVaLtLH2wdGDwTgiwJJhyYG8pqZzXpkeBWMo95BG7i1s4YYk9huXhkVvaYMinSBKjx4J6upnVGww",
  "key11": "5UayukYGgzSgZizQJVdf7hXjoUkWbwRfJrAQaUZS7z8hME17B7KHsqoR1JckCQBStGsr7zjCVSXnDfxY6FUpJgB",
  "key12": "L8PycBgWUAczqwuLxuoyfteQR3E7Adv1r1TkcmntXPXdtaTVFs8x5txrHiTZeqTe712GwJP1mouJVa5M8g5qsxG",
  "key13": "2A9XjkKbotj9gCxZev1MvyV1dHDuS2jCY7WSp4RCAD7KSSW4vxGJbWLLj9LFDTPrvWu8ZqwwrBU31gQx5hYM3qXr",
  "key14": "AEXPwc8tbyuakTVCgY94mb3f7jVTajP7PQS6fC57KJaG3svC1icam3vbtfSqERKM6LZsYtTZeUwMUeRyPwcYZAk",
  "key15": "K5NbfG8riuLt1tppuG4DCFy5WhTXpnQiseLxQzw9FP9Qd1VdsMgX9imPeAkBkpFCqc1Wj5p1mWBf78RYHZvesm7",
  "key16": "3rRB3fCS2CPChHuq2ipiqzzSVFT54mtN3xK4CYofMK3aFXavRaxntGXPEdJkiDuAF2ctg5kECDRs37oRwiCNBSKY",
  "key17": "21pDNcJWE9MysjSSGRfsECFdP2JcnbANqLbGuyht9gcNShd2eq1aoFwKgzc4UUdTnm7PqvJBbEhvkmekUTpz5Z54",
  "key18": "3HW4AThXKtgPywyEn5f1efMkBWYvACgqstgNJsqQSy5DgEQg36DQUCy7ETTEKPkVZJKhDo1nafBeWL6xdktEAyTQ",
  "key19": "au6tFzR4w8VE4fmGhyRXjjmA44j8FsaqWCfhtJdxe8jREqkrpy2mpM1h46ovGzqiZ6u9NcRiWkYKBSiZUymoLLA",
  "key20": "4ZrWaqN4XuQqaqZ81ByAfR4KT1YHYxTg3wDYnNvqAqxTt1LFum89U7RdqfjGtB6JAvqRTF6LYE4m3xJNtf8EKoSp",
  "key21": "sQ8Mup4P7KfLBdqJWYdDLvcXQm533QpHR7g8yw9MNCbS9RWYgik2CnYRUGZ9ZGGxu4h271kvaeYTW2vcsBMnmXr",
  "key22": "4Jcb4V1dQCmorLNh6pCS7MSozpnpdy6u2yYbc7kJMzRt6G5tPVgKJbgZNd1moTTzzDnBthCzi4SQmr8vdDignJUP",
  "key23": "H3Ndo3bJzXyc9xdSCqyqooGVBuDJjLSqfbENyRRfQLGKjKUywwYdWdYWc8xno59pWgcB6F9ju8b1Co392AmucMX",
  "key24": "5CenmAHNL18VUYnVLYCLGyBFCX2hxLzn1EhovEL1MzGDP6sVxd7Rj2tW2TMndNuYUp2UaHqwH2zLiAYbiZc1K5tc",
  "key25": "4Pse2nEfUSTJT3a2oes8FZETFmFGRP9hjVsUbRhB47mWvVX1eFM9jZiUSsfw1mhnfYPRnruaLikpkseMWvuRVm8w",
  "key26": "2R6gC2JgmCaqUfq9xEXidDbiQaJzcnhzyxRtyAJscpAaoTHPKJZEZWBVHcW3XgSKCBHuqQkjf4ybZzeD7SnGw2iy",
  "key27": "5Cdiyt2f8N2obpKSRFqhcpzxbZCdzBHYWXEePmxKLPvUgB4T3zbYxTFMxb4QL6FiMjaAvcVLdTg3KWbZUHiN5ndE",
  "key28": "2ateB8vvYFdbniFWpMDJoHD95QKpqXFmcrjWw1jaaXJJkf9RykGCRsB4GbbsKeJNByZ1EQ166bmYAotY8g83P4nc",
  "key29": "4wD49qEgpEartfkQJk2F1mLDA9sF77RYr96WvDJAnV5tfjAz8P6zeTdCWbajxGNm6xqqtubrz2nuWjCWTzZUYSex",
  "key30": "5MhGuCHixGzXDp7vzYmLbHXXunkC8NB5esLZLrNSoByrouJNAT7UiKJ6gtnrbBUQh1TNfnKz2RwKhkuYTjqdaRJk",
  "key31": "fL8A9uzSuB8aU4fFMqsBivtzNefDPR45ecuAZ1acgyCp3ML6ZRffZ5s19hYT94aBjrESWXYVvpnuSksj44Rk7yJ",
  "key32": "48xbyZpTyChYKW8h1pzsuGmCX47VY2qgGEmqaPEb6FKA4sRUandw1v5UXVTnYH5TZqmN4zqJatvzHJp1QvLaFLRk",
  "key33": "3LVyyDV3oaCfspiEf9pKBy1ipTe7dhhWCUR123cKYRFniMGVVg6RRuJ6rgnAebVih8sfzcka4tYFxzTjRMHc2pHz",
  "key34": "62HZzP5gzQCe5t1pTsbdvJG7HTPnRag3NNkezCjkmSxjfgHGWtCBJhPUHTTzucF1k4bojujQrYWD4FtJCrY5MQ1g",
  "key35": "P92M97wEjT1WpzWvELMemuS1UQ7im4Y5XvhxQT3UVDXLqsXzPkZQADkBFzQheAxRWz9jMELHX5mHf9V6mnZEyS1",
  "key36": "2JPpSwsN8Px5cgdp4fHd6TRwJuUfyYTDWtyo1zmLbN8LSsFJCxuBSRMn8c7NxHZqyisbjgmeaxfqtEBe5h5Fn2vo",
  "key37": "Ctn3PJuQpzabC2xBu2AKeJK25dgUtrHgpp3eeavSPDQmrjREmg6WpDurfGGEXDJhB6vWSJHCBHhXWWgKDzjAqfy",
  "key38": "5wdfsjfgeyEH8FaWjLXPrUfDueawMpSjFUaKnEHquLJF6gbaHgUeg3qHgFiYgTC5LVMQiDHkiwnbNTmzezSa4KYJ",
  "key39": "EyViJT7MrQcMmz9bbuthdcyea2vQXj3XGXmDmXk18kQCvfHaKsu6hn61tD8wBSz9cT64unCFi2ZztPJKDGSnpAs"
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
