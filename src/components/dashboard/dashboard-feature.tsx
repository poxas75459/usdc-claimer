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
    "2hPA28geSfoD1iSHh1kWSUJVEWYFxGNWPoUEuhz55WZWBojufNnXaZSrfGH9FkLCC1qn8ZUDr8pT7zj6fBL8Zo3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EPjLhsEb3ub1V3Wt8MfS7xyhRGQguNZ4cDhHbZ8pJnzUqXwoHE3Ma6LisjdYans7KhwHPe7WeL9kiPqKJFSjxPV",
  "key1": "wdRTR89fAyyP8wnh9pKXFF74DRgRTrPQESwGexkCmUGuuxkoMKVZmMjTgNMpvJG3XZQ75wJqwCnXFujQ9wG6zac",
  "key2": "JKjNRtLAzbq91CoJqEXDbu8Kod45Q1JcKNbKpoTVWnMSZguKe1PU7UXDai5VVNMmZnCgr5R6cmCWA2EALjZafxd",
  "key3": "2NH3P3gKBJiYRaMvQXhh3xLa6Nhi273fvoncj7Y4BxqpLdLMexwNk76wvHerEo441HeHqzMFDrFucGpZbDpDRCYJ",
  "key4": "5X8kHCujqMmY1exUaE42pECa6UQvdt117acXpqffKKrDkD7st5yhGbFQrPn9dREy9jDQZHePTxr9hXnrYtxPWwdK",
  "key5": "2iMwdLQ62oZYiiAUew8M6q8uMDS15wajxDbSq6U4ukAeanFz91LjXSxuJY2YwcqnwiWkSr7K2a3cJmFko2UkwftD",
  "key6": "4NAWQJNA4xCnGcHUP3xc3sUHiiaUMJxFt4fMwDfcJFddD36yqx3JKmcnbY8YTN5do6uiea5hXA6nxo7dQMzS9yUS",
  "key7": "3apyFtgVjz9RrGJSvRNe7WF4wTfpEck5fTypWuSPSoafiFd9ZBFRdGjdseXAuWyr68bcA2W6kHVCUQ5GL8q8oXu1",
  "key8": "5VruPPd64MTZLXyxetH7SkePiHvWtdG5g5R4ptxVPW2vB2cBjNxPnz17PNSd7Wym2ZJzicUYdtEG29a2NrpqFaFF",
  "key9": "66D7wLJ4H5xSh5o6KeC18Uy4ZCBNfyG4jm5KSmXrHbBDgKZ1NTBoukpHSkfb7LMU3jkHozqB7ZKDk9NAyfPdEN3C",
  "key10": "24fnizz8op1krgStVhtWXa35URt8WG4K3rMrrL4gcGuE8qNuYoC5LYcyQaVUUXzuGwnZfGCrj4x14J7D87cgNgwm",
  "key11": "26s2JNjPVo1QgZMNDRvCovi9UD4oPgbTwnvPWZquYHtJMpNbbxp5v7rYfDBm8bERGkhr7pH5BwarPuuApsesHHmp",
  "key12": "3KAvCGw2fJbFrhXhF521NxEgNr5eNiQMKJPBjpc3BQjVq2mcNj1m7627txX63oDifopzcSUz3eUGJXmckrRpBt98",
  "key13": "2MNiMyQPVJ1v8cUQpT8z5aMeMW5UXKJ6ju3HkVATjD7LvosptYQw42G63JyLYpA38Z3X8qfnmxYGLfFc5MeLjVoi",
  "key14": "xFtrC6VsGXwVbtE2yYhtTEZcr1yYNgEWk68P5qZmEWdJfp6PVnwPkXjc8bsoGBDemNgNRDsZzRVEtmow53HDuZ3",
  "key15": "4jxjtEdbv1oyxADpCK3PyMAr913L8tCGDNwCorURhjRdgnJmefc7pGtPzxPPf5HyN5EFQ1LKcoLoYY2tsVpf6Sv4",
  "key16": "5EaVzqSxTJU5vZ6scjPMHMW8fWWddi2tJNZf4PgG2pJYbEZWvELk7YGmZEukZM5M1H1ApPYHPJ7mtjKWJDFZGvGT",
  "key17": "4aWXnuiScyypLXvTBztyqvkysSS5WXofK3PQkP1ntsWhd617nkVN8FJuXTRmKhdimfZaHRCdc8YRsa3sCNAgKrgL",
  "key18": "3iBRifdcgSAwUG1qJcBq29dUR1bW7fNK2fEUB1hxZCzpAmY3YQEbQczmaxRTqRmjZzuYikJUijDpXqipbBBWo1so",
  "key19": "KNK3rhXPB1oiJAuJAXL1nsfTNDjRxSQZP3RAPNcCrJmmCPM3KebY3D81WAwMV9PVEL2zm24ZGqTr7sfBy8qH78B",
  "key20": "4oi1Xgy6ykhaDT9tAfjvX9bvk4UFp8772SDNAk5V97PiVonVwML42Br7BAVihgzhKrKxCLqyc4zkK6N9wdQMuv7M",
  "key21": "3qhGp6AT5D5ScNgFKuZv1DeP7VaTpXJjnRdnQMabXSkxeP3EmazYrqEiZd1zUEB58chgvgMUxmhD7iu8QcgkwVcH",
  "key22": "3o9nCDYjojvW54oDVfAtMqqQFxHeUBdmyXCJMKkytg4oZNFxLEeZnSDLRrz3sw829ZL2h5Jp5bvGb6qWBZ6VECvJ",
  "key23": "315NBAb9Vf4DYoWKwSabpRvLHUPpFbFbhZAzsWA5BHN8epucaZF2FAHeAfzSL8Vqq41T7LoLLTy7m6VYmYDUggvV",
  "key24": "rRiY1jspnZRWog9HTei3mu1kfRVfLhh6Z4KLstyD9gdbp1mF15FfkfaKKNYrfu96wzvjmmnbezBMnecaT72xxEC",
  "key25": "5Vx47AcXfNVbRZioTxgQxbtSjhLnYr7FLta2dwqkuZxvZ4q5x4gnSv6jPBZd3ZKXUJDHzbwLaRJs8x4VCbYp98Td",
  "key26": "3oy5pf6BqYz97tmdFENdoGu5YAjGkSrvAw5hKE3CvhFroeGpiSNLEntQHiihfeC4gwU6jwYWrc68S6BjNix9w4zu",
  "key27": "5YR3j2QCjmD3BegYhpezu9LnznezHNMFNNRhZJucVwWdu9tX7iHptGNm7V3wvzNJv4LrBbgoxXY4bo5y2ygBcEM5",
  "key28": "3AHzFuDd4kn9eXocASoQumL73q7jTA1hBSj1dZzEACo1Cwi5cH41ZaRqwqcAwJB5L6S4NAunPPUiwuA4E3juP42X",
  "key29": "3tP5g6Y3fmoBW1j1kGhJ6fuCriDRe8egsXK9gCaX1nvkg9PNPphaRDSvMHvXcEG4MMR7BbmzsDX2n55jc4xbRHVK"
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
