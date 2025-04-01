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
    "2iGRvLXpZDrgVLkTf3knZWvfmDZbJE6dwYZkaFxBSkCCLXVTrCmDkzaXSzcBkZcirZ7sCiB5VoJhx9z5mx9RLpmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xfzf6T8ee7TWVSyUpQwF6va1KvEQqfToCwYwGaqzWsbaV4B9sMqPHWujf3yVtWVbp1szHWvAG1MXwqiWiRxa9Kw",
  "key1": "5iYy7iDjootaYNH1nXa5KmCb6hJKzAWzizrh4khsAj2mPXqJ3NctGB7dicY4Ye74oafJHzjgifyitShsxs99JAaa",
  "key2": "4kSc3yrQNrAjj5SGNyzfS9JfWjXATLaMwT89xQazQcyMJJYkRDaVWtyMdirbdvMtoni1AmivrWqEjq2Y7k43vNKn",
  "key3": "4LpJVd3C5wDNzp7p16zbeBJgZ19SuPDpMYMjHST7SrLBgSikw8dvexJmrzVTS799WBnVEskRfpLtGWd4obCX3NY4",
  "key4": "QEU3keoBDzmj5i3GRKyFXxjwcEEGSzcgbcGZtamdeGMbH69LtVvkEDuUvgcY73T3nnB4FpZ6Fr7qBBPKSZ4KtFo",
  "key5": "2kbPiK6WCbhSQPkbAKUth2vfKJZtz4GVWyfmkxjQv4rVCKw5EiEhF13VhhSKwqBrgxcADkmmzyFgWdaM8u5gNB6",
  "key6": "4ZevRHZBWkvNKWNYcVEaTfiYaYPe484dMzJJf56HcxBBe2BkBECHT4ta88viRhi4d5K2zywRstRzJkzseTvPvvDh",
  "key7": "62K8JMnZwU2BPbJJaYXZ8hXRbKLEHYjmguDrYUzuYLKa8xwqawmTdSVCJCREsq1cXgEzYXdG7ZajZWJfRknFT9Wn",
  "key8": "2Vs1rZBAQ1VXtRbT6Th489Xpf8zTHzPtnojGtwYYWns4BqMXHnm6ejeETYzGBJSh9P1oVA7xS7yvyqWW1aGrpm6f",
  "key9": "2qXZ8zy262hXcbHdQfbV9uG85BLfzyvnTXqbZomuv5TUpV3iMEK5SgAaRCthNKciW8C86jjpEbzL5dQ3JJV5R1MG",
  "key10": "2U65cuNS5dhVD4MjuZFbdSfyyxP3pFkJgFxVJMdrrMNVFAweChXP8aa4SeFBxeHsTdgn4v2DJSncHCFixJbYqaUd",
  "key11": "4VCh2k5hCnGMPZ7NhMBxRZiX5vn6kYsdxSYjXdhRo9GrqzVgaMx4kPfnbCxm9qDVn4YYyVEXkCCbBGLQpUAJ5Rqr",
  "key12": "3PsNoQy9odjcZL1jN4kDqvoAW2RWwy73WL61WSP5J2ApAGgpRcmknGmrrPB8yWkXe6ytfAfMNQoL1p5CL4H43tT8",
  "key13": "2WMQ9putJgk1qmvtQy5yfsU8ZaADUC3iUcJW5TM7sZGzYU2BVKCpq7SPvi5DprnnZpNibipr5u2dceLoqupj3iXL",
  "key14": "3U6fPUSXb34kvy8Yjkg7d1fmKrRcdXTBPsfDWpuhqcQk7xhtvxMX9zwq2mQ9wBzLTwLb1UxzorGAn51qq8Jzp1BD",
  "key15": "3eUB3J5c1j8y75ySBrDMubTZTXJv8y9GA9LiGHL4Mh2XAEkPFufiobNCzchMcjoDNGnMbtftL2j4fD4LncBdB9Mi",
  "key16": "4nnqwXixWMPJRcVxqdGihxrprCZtCy3VKkMxzJg9Vp2TNTfzGjhZYyqzidspjBXKmauAuvCNp6oUXjzFim7hu7SY",
  "key17": "4Vbz7A6GrLygFv3kaNbPukpcwCaNTYxdA9BQyAvu5sKFHsn7aJGGgY7dFf5MBMT92kdKnUjAEGS929uTk7Q5eYqq",
  "key18": "4eLvmsKF85eCD4saGwsdzjHp6NooaEuCC14nqVLyPZaeM8aLU9WMsSyoHWogGYDb2uzmzbrniqdfot3bFrqhcSHL",
  "key19": "43xKXT5cUQFiVECwRKdALHc6WS3j1mpHFkFMhq9i8iBJiGeDtNCcFBGD1h7hrd1HqSyskNkN4wpJDjPEDPVnAoo6",
  "key20": "5Cy9pLkdLE8LVctStv5op4NTx2WC6VR5yJp1tssManDBGMSiuJpywgwEknQSkWyCe4k1Y23dueECbvB9sTMzMnCD",
  "key21": "62nBnrZ7dZWLpswbdjKBZ1e5qcFh9DWAYgJ93FdqpAB8wywg2EXFALuRsyUZSSUdsyyykk53bfpJZy2H61U2j2yU",
  "key22": "3M8S4YFZWLrm6VKhfGss9pWpYvb2iK4t34GJAUUECgki6CiqYmBPFs5Ff1gtyxVLpWNyc2KpvSqz5RFkzAiRPQmS",
  "key23": "xqxd6RmspWe7XjFuopfnnW9CkhT4pykzxPWHJKPxWSwFTf1LEQDwAhhRG3w2Mq7B5wCxTzzRRKtKE3YUNCTsNHr",
  "key24": "4Jb4vDKqYbMMRCTqR6zN8FjNWzfiNtxctBPmrnQfhkrsxaUysNDZwsjm5Ye9qMUZVSVnbcSNniSbHiJmRD96xwr7",
  "key25": "2B5Wnr6ppTJdd719gPqdp4WLcFc9wso1kob5BmUfx8dJVmTFWudNosshfBKy87wKs9qGhYbA5uiawQawn5rT4VSQ",
  "key26": "2y2JcvsF8fzPD5Ppi2DGRmFwJUC1jkBKfvni2MGucHiBE9RHhBnGQ2rzPoiA9h1QRaJQvCA9dfDDsCxGnHV4oB2h",
  "key27": "21WmywajhewLcua5m44GWmmwgavNS1r8UYGykEZvwtfFdMEYgMekTqr1RsPeK6nM5NAPNvwPX8GdsFjfEnNu2pHE",
  "key28": "3x7jHnQecDFULcDBpqe86ZnMz1GSGiYXDjumVWDi8Xy42S3hZfDKFPFhHxDPqfNATJcSFKwE8kzis2DaxQJnWqpM",
  "key29": "2evLCr5yiqDd5Rxdr1rCrNJ9MaC8Sk2FaTYVHT3xMeYXfBtwLCYrZN8dCUzFdjTtp8Xt2twMNkN77XSzMAPjWh5Q",
  "key30": "nPGFesTE4SahyRGDtgEbNA5QVYgUDc1qwQPPnRgDNJPYmup1DCkcbFdixYoun7MfxQeNhhe9oXiJRh8aDWPorZm",
  "key31": "2efmhajnNvx33HzthDzdN1hnz8PjkvpSPmnu9URT5JNhdvtq88wunLhKTQKEB2tBrN2RPx5tfUX88nahsef2VLBD",
  "key32": "5eCemD7p7fDCqwJ3M4CxDN8CCPhQ4eeuissUakQamAJaLTH7GbrxJtwU7onrztgKyK87tQnYssQx7iP5ohLTCs1Z",
  "key33": "4R359LN2W5yMuP9KBKXW16RnYeGjJbDP9gU2hQFNSeFd2nzEEDAS1hKWxNLesuULzEgKe7CqYPA65qzQQci6TKy7",
  "key34": "51omjyFMZ2gHiH16kmSwv9gc55MdSpCMi9fV7wDJ7VHbeQNd4j73ksNBhRkxsuQNhCxcfCj5gieRzgLtTuGRtogF",
  "key35": "4pd8DczNnbmT25mx61gys6VzeFQ391QHY6hhJBnZFckjDSfVg2BsvqSBZecNSHQvyzfdYBhXPCvXfZfxSFBduJF9",
  "key36": "5unUkXFqAdEZ8srZfkbBJYzfjntBcNFTHnzviMPKnRTKtQR6BsmyuAQbAErMRFjU2YoauCtcTju4TTbZMFKyoLKp",
  "key37": "5AyZCw5KvGZzHtLdEUwe6GsW8zLWzpHdtkjw3XrZmbbxXXu2Tvyj5RzjyLt5xjbLASn5L5nx52heYmrYD7P4whGJ",
  "key38": "4aAKWghpo7biqXpGUAKLneqUXSb12UgjdFnC7Z5Qu5wnovA8ksLjS6jkVhx7PPEh4oFcXfGe6gvAi9GphHAT1uXL",
  "key39": "2o93RAJ4YDKca38hTPAyLZcz1gzMmgvNP6eD8zQbPYB2nAeirVsRu4XxcSfSALUnDbcPyVPaLnzZ1HcfMs7U1DNi",
  "key40": "3JEEcL1nT96Pj1XTLScUPzfQkraJT1NuyeMdNjBoCzwFZ4JKuDmDrj1jT17BHj3PSsyPtSCvRYgpssKSwnMnyxsv"
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
