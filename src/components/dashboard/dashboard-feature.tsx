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
    "5s9fS8dKFJYQ5uJAq5bxNuFqnG3SL81LYJZ7JCRSeAt54vG6Jt4WvQEPty9kReK9ZRWKWHzrDpFvYNJL2pXr8zHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mcgZ9gPdYGNRjZpErTt8YMP6Mdn4TzFH2uJzbtk7qVgYTjwsP6z64RwqFnD5XnZZE7mhgaECv1uQasmpsaUzXMv",
  "key1": "3ADNTqBDpkbmLdELxFxj1TSr27pRMoy6yYL9gHyPdeFo9WEF232ZCBs4aJHVUQErY9qCi9Ejx3B9CGwGfHeUFCT2",
  "key2": "3nEvS6Fwj8hJ1G66tvf7oZECf1ogXwy5f2hqfpKJXXWWzkgusdU8NKFZYaG4tLdJKYGJncQn6kBjWYbcofZs6Xeq",
  "key3": "5hVxEMPCx3DtJ9Fg3uHjjxtEnw1DSMAgY359CoBpHPGBDR8TkCb3ADfgHbHfSgeGdDSXo2YR7BvvkUqJgZYSmHGh",
  "key4": "4RkCvmpeo7RiYHC4JschGsEfhrop5YjJNmSJZXDnThBMPCxQMbfM8pyJ3HbZ4sYLYDSovuAr9PXNkGWQ68SUeL5d",
  "key5": "5innvwtFC7hft2ahMVpLBKYxjzR56Yj8vNUJyo81WdQGXsS8oPWtdXtvrYYmPLrazw2j2Wp94RxaVhNAdrvQKnkM",
  "key6": "2KdH9fBQzc4U5HRqtaTUGALYcVN97q7Ku3vCtZdYDGnoCtGszFtPbQcw1tdNScq38bATDS8yPbrRPMR3QAW3Vrs4",
  "key7": "2hPNvwWbTJKfpidYzomBhwhbarJDiZqr2yJKGgR1ZodTmomewUxMP74wRggjk9y568wz2eUqtThk8J7eFR9w6bf6",
  "key8": "2bPgjTXAuQ6Ty7RDShPrmfndUi6wvgnfc3EZdeaRCtU7RFEix8zcx4CrZCkqUdskxY5sLuY2jCTMZKUnjVvoot9c",
  "key9": "38AYMFgdvuPGNKGKMttdF9P9ms6aep9Ae9QoD84K979vFoP8GKKrjScRmSSZmuEAJ2bjaFMARHRKt4kmWv5SiRsV",
  "key10": "4byh1gdWQaATsZeFwcaGhSQmmfucuhTMqhgmpoFKkatGEL83ERHSU8xBwckYRyBqGuXyZYAmL1YPiuXHeFeWajGr",
  "key11": "Qzwyh7by3voSSSyUFukikhhSgVWpkiCCjLjoo4mY9uu8MRHd3MdAbBSpDQSSbwSHbc7XMdb3PhLVgVtF9cegYd4",
  "key12": "5im9q4rHZAwXrdJffNjRvqwUfhnPWtjgCdqGQgKkj1sVrZrTz1LAqZSLm1UyoWF7kpRcrDohqhkswhNzveo91DhC",
  "key13": "5g14qqVzp6ueTkR4RsGp3zPmiBRZ7HN4oaPDfFuAKwCt8YodwB7477DuuTchpCkGmgw8WpduayD7ci8b3B9H8eiZ",
  "key14": "3ESZwh9pKdYWvEPbq5JeTwzBXSt7rs2z9RPEK3vk6wsPQgQZ8arLTqwzywV4fBYBFNmDVhSGciYg4GaToGatdufS",
  "key15": "uMXW7SD1fQGdPSYDPbrRLTWRnGcDgtsq9b5VoyLhPT4XfisGfeoeWS5XU52iXi5WhuL9Xm1jcCDJY9gizkMbuMw",
  "key16": "tPdyRe3maW3gXjS4k9GuRStavcPgPDLruEU1UcVashRhKpu1CPYNTQHjWWUyEJnqRPyejhC7Mqe8Y6mR7tGWQsU",
  "key17": "kqDeD5n1XpG6vZbHxk1okCaDudK1pYqzerBytUD3VGevaoB3oapfHFUsV14TpzaerCVgn6RvtgNv1ejTr5LU3Xg",
  "key18": "1Nz8Kb4yMTd6iwbQH86Yy2fdVvNrSbbpXkhBaT2HdmXnneFXUpwnX4V24MFiFLp7KV5LA6UyeYNDeMU1zJU2jtn",
  "key19": "WP1m1qmHqe9iLb3mUZgZhi3zuqpzs9MZhzGtHtyPJDPNgbosCXXFmv81MwQD7Ut13achKUUKHMSysKXTxaBmNmG",
  "key20": "67TkHVdKAY61xGvB3BWUaENBVY4YcEzGPXBtToPzhchkKiyqq4hq1q3eKmL8ZxxYKa6G2KWnrkSJKRzdtJcZuoDL",
  "key21": "D69DRbmjRuNDB8z5gYoteyQbAAMYRfaauVjQaRHoA6gxajD1XZKvKgdGeTGGCwbxFHeMZEonQn7BNzdd1wiuWgy",
  "key22": "2ADSuAzEfCRsWaXtwtFGeseDujMTDTQVf2zmNHNZqZygfKAZ8BaQs9MFcvkeV4qMJgfCamwKLtrBGcpKdZ9ALo2p",
  "key23": "dWSGcdNym14CYhY4vKbaVXCpCJYszYCuK1u73TShKLA5EBqvw228MRLHEYY7FRxjqsTzqRErknJdjq8kzsfBNPT",
  "key24": "4CKo9ehq5SSSGo76ox743VPMKvz9WK84e3sLAYp9zXAbV9aHAY7kdEbJ4bZXQruTMJbmY9paBUMqoFneE6QRAsuK",
  "key25": "24Jn9Tw8ubZGioNB34oY2kFtHb9idQ8tniKCVen6shsfZe2ydAHAksjN4h71tuN3MxRdErxSNt3AguHzRZeWv3q2"
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
