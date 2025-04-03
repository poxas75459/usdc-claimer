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
    "4F8A3nrHRFxoQJ6Uv7Fhnra42M5oztNPntzNJkBMR6Y1qqYoKR63GQq3Vy2ySswsMpbRGymn3uTDrA73WVNQdWAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y8rYF7gJU8wbwtjZ7JCQHiT5tvG7BNbv6A1X5Hu4JX89wY17btHXLrq5gZTVC9c2KCrnG5WXvMUHzYqHco8S5aE",
  "key1": "2xncwHoQJ6VK6pDCHsufn5fkPE3fWZYurd2vMFg4YXJ8smSV8JGyPok4Un8kLtgqEi9b253TSh8jpEfxSSpeYCYj",
  "key2": "3V3weVRz1sGExdSss95hoEQn4nJLSmsuuQdT7esEedULTQk1X7WjWawBiPhjdQ1sVptrxFPcb5aMVHrmMbDrq4cN",
  "key3": "2ZFAVGnKRUkjA4jjQSN1UY8sqU7fG2qumRCA91vvwK4VimHdvSLyK8VBdczJtzrJ4TumFPBNjh75tx8VqNr3C2L1",
  "key4": "DyvXpyszutv2FuJ6g5dE2dMx1DTEvM1XSkGXtTqAvsuabQoRrMVBDi7Rgr1H3LCn9PzxmQxnCM9if83KiLx5fj6",
  "key5": "5hvgery2qNU8PHkcLouAewTGtj6oDcNe3NdaEbSDGa9ggWQhhV3xRv8JQ3i6rc8ja2a3BRgbUgsS2dVhd34DR9Yr",
  "key6": "3jiM7fmx8BowB3SQhrc5NCewsDbx2xPdiHjY2o8Ef8tKSxipjBSmDmqEDYYw1noqq1beQ7RD9oWwqoMekrdBbETb",
  "key7": "3nxQgWMJchxKZNXUXwTscbntHYHDaFGBYAmkuSSWDnV7CzifiXN9f3xCvcVsyhNVmXAy627sJVmJf3DRusUJffHq",
  "key8": "4vxc14exHuT6Smmsvm9uHW9HnYaJL7Cr1tdcuDxCeD9XQhsy4YkKhAvp8VDoMR13rui3rA1xKbn7r8jZygoLJeZR",
  "key9": "5SzniKNPjb2KSrHVPKsEr7ZDjGJo1oCHfHRp49CrW2PpMkBSsxPHXygW9MJhPtqaNbohiaLaSStUpSGQHBsRjb5Y",
  "key10": "VucFBLLjrD4kKbN5bPLQBtJbH2zUMZ33BQpHsBVpEabJUSUftJpz21fjvgiRv6nYrb1XjH72Q8UC3yqauYYRa4V",
  "key11": "5qZnAJC4Wo4AkPexy2djUCVogt1oEUDJynYgbi2737kkHCrCTzEXnjkonPVUYewDoWrov6MkxfYPZyRWtvBL7vw7",
  "key12": "2kHH4Kqosux4nZqoiFuFZrb8CvJPtcBTaxQF3YU3SGH6oGhid43ee95ohVNn5GsDWsapM8KyGT7naKMZQK7MTz1F",
  "key13": "5gApQuPfQrgae21AUbVzX1HQbvKq26mN6pdA3qZ8zH8Qos2emUnyE7m1uHNr4kx1bsgSunzvjroEvNgSDUgPXeuF",
  "key14": "25SiD4FzxkJxeX3Cv9sMBcS9dzE4wDEdvuXZNvQV6o25vGubxAPM2qaMAoq3H1p8uw9jWvhAktcMcY515ewJgcwk",
  "key15": "3Q8QM9L3367do1H2d8MQngRZWF6BE9ZKsRzP4FcYpsmyjYx27cFpsDYUSURP13mZoaJDA1zBUvbehzk5aijUPyWT",
  "key16": "3GxCGWGXW31tjtfGrMikMLExwS1GRDwQZEu7uB2WwFRWvBqXt8uWQp92CzjUpStuUDcTbTKHXR7DD7GX8FnBTmo8",
  "key17": "3ApNWNGmMv674iJCEML1H9rKHCixmoscYFao7imSefMw85cYbtxoyHjayx7Bunsq2NZERav8VQXi35jAyJKztS9Z",
  "key18": "NfK4Wvk6jJUCSCYm879X7VNQQ5f1aBi5GFTipmks8R2iqt9gqWGvWZMXWAPCD1iu2Vs537RiBfZRYEhZwD9iqLS",
  "key19": "3FLcKwGtshR7UzY1A1onPtQe2nxXGcBZNAwS9PUxcdhLV7Q5dKWga3eE7mniUpRrHeuQ8SzMGVEvJJ9jkD4L4qEk",
  "key20": "4Fw5jF3ceHSGBdun76MMRUAAiT4fS6EKPSmhhwGa2vdZSmU2fspdNNEPm9Lu4UEUt4dSmspt13QZokrADCU6zGFK",
  "key21": "5EVdT8Mi7E1KJWQ1Ru2C56yyaCWJm7d8D1Hqnu1EfLRKSecMutb7k6C1yQ4yqG6W2LorejCKRwgwxGSSuGZmY6XD",
  "key22": "57vqMsowxfGpYHvWTSKs6YpwWMG5uGrR5STb7M8aL7dv6B58F6pveNwTqScuj3YbU7pftifa1uYrXAMpLtFkgUpc",
  "key23": "2RnCG4kwBvWGRQ7SaqBagyyJqj1w81JXnVR4b43GNuwdSb8U49z7EivLK7tv6s6MMG1ELpMHay8j2inTxhMdb1aG",
  "key24": "5wZ7gMH2KnMXAuPWGLPaSB8XstDhmnuLjSni8YMfJoLpzMT2qYLTsc4iW7TW6GGxcr4RaeH94GvddY3i71JbU5Zw",
  "key25": "4aWwSUWPVxvtGBtkJQgtk61NG9ZucFnGv7a2ubHwCg3swan1oRqywnJoRrncJzsD8w6cfvLwQWrfXR5A2jKF8GAk",
  "key26": "5VYhgJfS1Vc9sBYbWjcVH6VAXzYPfQgR8WF99khrdFsjD7YqwW6yhVi6geRY5QMAa1fM7XJSCX1ZfbiRg1LGZQku",
  "key27": "3nby4CRgw5hvM8eohq1eDUzbyzJaSrQjxN5K3gAgCtwthyym3XCeVUcanjHjHwKEzjfEjNHvZHZFVHuSiMVKgbQv",
  "key28": "4R8c39rZmWFuWE3CMH5c2mTFMHRtNQgbf6K1FasTSCPYg1McV9zTbB9E1PhPsq8txfEM6JCGCdLQdVHrWhKSfqdk",
  "key29": "3DrjKkrZvjYygTTBFuGsVYZYzGUiBtTDJpKiUPSzuRfbzXWmmL2tbqRzT8VC2SjKeZFH6WtKBxc9chNrEZvfie2n",
  "key30": "KY1xiWjhPaEpZU64exePU683kGYqdV86wgnJoKz3cYEbD9HsxTkmams85QL9qSfNnMiEtSz8Egc7rZ7bMWoWqPq",
  "key31": "54fcp8AsWWNZcYzT6T6qNVRSrmu2Mg78om1wiQa98jzL1eyvMwkvTHbWPwwQYMhDQyR9iEtYWpqV8rscCM5nuftx",
  "key32": "3jFnyLFvSk7WRtsznoK7d5YNLRuBPRQJz8x3EKWifFZ26tV6HCfJWKA62RRPxp1byp2FqPFPFdkmiQyYZN4EB6n3",
  "key33": "5dMg6HGRAfjfz1QcUgqBfzrfGjkNTpMFCmeVwfcUpzLc7hM4FXBEKJNqraHaUNLDew42KdPCxdZWuj5bjXxYHVdX",
  "key34": "3YXZkHBVTsocBxHpfrVD3iFWJhkYm7u3pkNe9qoaRkqPizw9bFkbfh2C9g5wpJMguQJh6A1j4TQbHkMXqy38BD1E",
  "key35": "31hryjoKT7xBDBmkd2bcnra1UyAEYf4UBJRg85CefFDmpC4oe86rUrj28f4qhGsEG3heVAKTzcomaA9Gagzw1Jan",
  "key36": "1hvKFybVxikX8uh6yXodwxsZiSJea9dVrWafvGqcxi1AUh43qATVREt5A5tSJZzHmjsrYUS6L3R67zVa4qMcUJ2",
  "key37": "5DiLegoKsVNFSfN1PregTGm2AWVGqcGox4BrffKsmiPhy1dZaBa9f5iRMQvN83do1TaXDeHGdHpgmLPNyiTdLTzv",
  "key38": "2539ELoXrTvrK67dKGfFs6pZZBjr3RaUL7YtLPticfPZXAcLkzwofBN6dg2du4o25DPCxkbZmV6dmQf7Zr1DrnhP",
  "key39": "4W6bGwvUFFkkds5XF2X7g7vA7D8p84fWjcAAVtUvip7qXhPezmnGoFvwTHbAcxVJa5GVcw8nrm4EBUJPGcL4gZsE",
  "key40": "3E3FZEFUxTYyExq2phGGCUMS8VPrxvm59fLwZbgauaZN5rMqhRa5AsgWppo9EWp6xeULA6mgMR4PKNm91vijHNVB",
  "key41": "5kiqnvv2mnHn9sVFhbSyTP8eVbWs2RRLpQz9NyiciWDmZpXSmrhqtw3HqjZaDs5anHCDe49Vh66cXPLUpy7QLya2",
  "key42": "2qpMGkzsfVLQLBegLb6b4Lb8WQKTr6NVZLPSYX2p4C39mKEyFcN1PLXZ4LTmwnVyS1ZqGUq2gjKn5K5wEYj3ULgP"
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
