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
    "3X2cMbrsn4pJThPRzQQ8mJoL3zgnaW5iS39WfQngpC1fokcgGg4uxMse5ydFQV2KXU6F6fdTm94xoS8kJsx3sHNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z32fLjkHjHoPtAZ9Z4xq8js41xTLsRwPbQCPp4GCVQs4gs5YshGzAnHWA8FKq3GFjQdYP1Y19ijUyKwFmDRE39L",
  "key1": "3rAtgRicFYfpeFPvsEUADyjdiqoFMhD7aG8i1ZKCXKHMdeASCHKiSM2A8s2pVBd4L2rbg5TJu6kCnxE61WX4Pp13",
  "key2": "3xQojzMjtKc51M3NXAzgAP5gQzaUAZeeJo7DWZfYqd79nqxsXo3mDUB3D3tDBrB57fJXifWghvi1aMSza7KzUff7",
  "key3": "2kD94MM132gKjkjKZgLyui2V54ZAWuw5Ury6SMTqqaZJNtE1NVA7xseQF8YzkwDgQngtW2f6VHr2da1QLzVfXX4B",
  "key4": "2XU469xGmQXnravK3tZSbttgDtM9boxHHVSgaAECqU7xmog8f2nLPxAzbrUH8WQuhwxHHqnFKwkuPYaVer1EeKcN",
  "key5": "DFe3WCVwTqyU6YG7UQu8XfoawBfrdn6oLHRA15NKwvZ5swL2HGZX69C8yrGMw2Mg2oqr7rpUAzYh4EFRMgkpvBr",
  "key6": "3CcXRx1xhhSXLgxWBtHKBLEQkvm3UJHn3eVDCmRyEk2bUHaojreXqJ6f26qzqUYxNumAfLhLndhgHFhNBXyTNhtg",
  "key7": "4yxRwBEyM4rv55xxxZg2ZBSTh2DH8JaiRP9j53efsFAy9AfDnvkKVMDTcv39eB9vrWGWPxab3yoHxZ7kfcCXzNp2",
  "key8": "CzEw3JQF35PtiTe7RX4mZLbeKqJt5XCxi2yRKc3Co9tx4yvAcr6X1gKpNfNtvPXFQ3P7rLcZ6ZHTRKfjhA1w2qK",
  "key9": "3Nk6Hc73eSEtHgQzyoiE3V9GRYztY2ymfDcvfRY6hTf67KTXoWJiNyjaA92z2ht3sV912NsFLpz3nJfEDkY9g4aT",
  "key10": "5xhhE68vMRj5YJrJ98t9Yi4wvtXLNuh4bBbrDPQJm5RaUp6PQ5KNj4kbx7TyoD7pE7HJUx5Qfy4yoWJaVaSXsWX2",
  "key11": "Ey4XrEssucVtQeFHxUm2naFuskEZD9X46Xga5rybVZBqrcE1Qz9rAtXYMj9SKWjKC8j5PTcciN1x4dBnRkE9Qoy",
  "key12": "29Mcw8K3QNz2rN3fWtm9gH7kZ4eeVopfrBUUsmSohy3hAhLgJS5W7Sw4uPgGXTvACnMqYS4cNmW19pSUFnDMLjJj",
  "key13": "2Vhof6qUSbeLQVWc4p5YXXs5bwg5qb64AyGCxzhrSuZcotbLS1pnrfBiaNPN7eCx1TQybvbPcLSrATK99wnaaQFJ",
  "key14": "2rFDgLrktggSKdT4mLTR2KfCDmnScnuoShmTKVYAEVieYxPSCGRP7nUR6bjdEUHx5FdnSw2wGpe6GYt7PTD3Q4wJ",
  "key15": "xsVKjm226SL3332yXbYbpg4CYJxEfP1hksAnfxJqA9XmyhAY4q4tHUj7t6RefoVAtLgWP4Ar87kAT7rTQQHLb1W",
  "key16": "5eLdwSR7HtqRhFRFfG8ydLj4MLY2huiNSCoK187coVpMtUW8ac7Jzvy9zDcgaQEUa89Gx2HHAnKbpaT88rzDHwTa",
  "key17": "GKT4j6PZKGMErjT66NYnkCSjjYcr4pRqxPFYJbdXv6HS2vRSZyHQQZC6tkqENHEGRGwbkwf8thZ9aQnhBK3LLme",
  "key18": "2NFvrewKgL48bFmX2XhoDmr9CqR2z9Wjd7TNxkgFKtb1fKeE8tr45JLnxXXdVkkSipNTLsMWhaBUYRLJoasQdVch",
  "key19": "5Ceid5AHMBzp75EotVFrVxmTzEKtYZvBr1tbNts4rUTv4JTFqve5K8LSXWxpAwTNPTWhEya3LWALU3mLTTWqskGc",
  "key20": "3RgPQ8uguEKnairczJvHPXV2zhRkmE7bPmDiFoEmKwxos8C55BJKAu2ohkxZHS3iSoFJp6qGGwRSpFzqxje1Y618",
  "key21": "3DwkP6p9zFLPorage5XLwtUQwKU654p8yiQu2ejaUrSnZjxBHv5xubfjtavZJx8nHMdrPtJCzgegx1aDwJcJ2JnP",
  "key22": "58erPozRebjUuHWrW2jBBKJ8RWTcvHjqrnE3PR3A7faJsTN9G2nSUp22XJZgXN4SdKGc5U3w7dPSkDdHHzfzGLvV",
  "key23": "41E5mCJ8xTQrR7G13EEjvSVLZdajDC6vqspPbpieYbsFLqyxYP4Y3skDMZFJgnkpjY2mwEbCfT6t6PSwt6VvqHXh",
  "key24": "4Qzo352ACU6QcULPJ4UgRxZQtv9VAmorcE1zQStyUJUdFR3fdK5H1ZjfEJoyMAke75Sq9h9uB9wJG1Jqh3jH2Zdy",
  "key25": "2WPzfTkuNnYZNNrAsRVwaC5ZtBnFwA1r5ijDYDCTWcxZUzawvG9iGvKZ1N6mBPNTJPCnJL9xEmMBWEhngefRmJ8X",
  "key26": "2gUUjqTGvQFJDBea6v3UgHW7SB5SadmU4aa1Gbd19c3YoF8SCr1FsQPAziVuYoQAbCe38TkkRfJHT3oAK3DiBEP8",
  "key27": "3YZyk5e76EkcDj9pYn955R3vHhTwYdHf9FEcQX5ppG2ipjYGTU91K8iirLuXEQCrgHBevxfX1PTNKfp2jgQsPiyW",
  "key28": "2oH33fTRSJvuUfMoZPFJiKFq53gNja72PQJxr4PfVb53N1GuewnaV9YKu5D7WWKVVcX1DTY49BFVvwDvuMNYbTtU",
  "key29": "eJJNtQizEWRnHg6SUh2HncB8NQhfZFBo9SbwFtZ87VNWME8HzUsf1ZZhmFWiqsKGjoRErUadbbDFTHL6vKSWHP5",
  "key30": "5WuSyKwe5AS6Rq5J3EwEiKYrq52vtNv3fmEFXekqFhYUD9hQkK1Pa9BVAmptUkYTgf9oXGVGMHtVZR7RxApuVtQJ",
  "key31": "4YTsYJ5UxvNJVPJ7o1J7ETWm8wqc2GwTXEmykziFmvYkUqbbiCeyT8oxBp88A8WQS9PydhxDKVoqydnoiHagkF3n",
  "key32": "N653xiLwo9pcmyHfnaTpVWReQxs8Pe1We7GcRytS9F9YGEcherRRTVychV6rSdhuEPpHAGUuhByucmAnEstvNsW",
  "key33": "3uWkyXEUApp499m2vipUWDGdKDUm9kxcYD7uwmT39ANLjU6XcgZU2BVkSeKYXpxbrUgPWDWEB7wL8jKLmkpHkybX"
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
