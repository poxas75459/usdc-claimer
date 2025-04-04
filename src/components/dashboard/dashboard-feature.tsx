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
    "4WnfYtpXCDYRUgtAADXSE898SP9GZfAXu8ChukbFbpjv1t2EW2AiuDUif3uUW8xK3QmQBMvk66TJRDPAgRM4SbKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cwHVWTN6j8Q69SrhuZD3uRVT4c246XBh3bJV7THEqi3ijcZBFe4yX139awSb4tZW9wL8mdQmVhUFNiThvvkHc3h",
  "key1": "Fri4wk28x6bdPiGhgzPQS2UxBuoKsVeSVcbSufDTdNxmn6HXjorfCQXVqJQxCHE3xpC1fs1W82Yyw8Gt1k4jMmX",
  "key2": "4QeG7fVKueM5d5c6QdkuofFayKQgJeJZDJwnTvM1WCR9b7TtjQ1WQ4Ly8ZRNUed4XE6cb1kJ9HeKQSWLcRvoUARv",
  "key3": "59bFivo3GvdoqMFUV67CCUC7rRQQDuXxDbSaYmDHYVaN5VLDbDNLfAgUQTBnNawVFEZogNs1ny86ibxrCXvGtz91",
  "key4": "23PwYM5GT2TRC7y92ms81Au2DmcR11rr1P2uyGMsifHnLoDNETHmeEsTb5MzKiSXFdAomSPJEkaLqXpj6JnXQmqe",
  "key5": "6532zoLT1Z8dw1WAe92T7unnaqNv5BzWk6zhEfn5d7avCgebnDP9gWf82wFkwmzEnkpxCjpzvVJVQ8BoocCGbbDR",
  "key6": "39F26g8LmYgiQNsN6ofonULVbpj6iJUnfjDLzERUi3XVEahnYsXbbvxg2ZtrcEAu751YhUqKFoVGTruwQSoST6cj",
  "key7": "4vrr6pUywrUP2xRpR1kJBShFkiizZPRe9QQ29Lo6AfxED9QGk6ZXdiLpXcSzXm4dJ5jp63FfCvikuJqG7oxPf88Z",
  "key8": "21kykQjvaq4fqskhZ8KwRRPZrvJemMifUL1LKcACChCkVcoKKQuX1kDrXxbFnpKuLBGeM3DYf3A8XM7xi2EsyoKL",
  "key9": "3fvap59Gr7CoZPbQdederUCGQ6UKzYwnkG2Z7aXiwCRQ3Azw7QBn1846S6kKiGxVssgyG2j2RcxZ25eYtiqN3vM7",
  "key10": "3BxuA3SgfhjgAxUwsfWwuMNNdjYBS3pSAVYpikvnBjXfce4j9nnFSjTCzskxTdZQHxcshkVn973kjRVPrBm2AUD6",
  "key11": "3T5GbrSnRABd5akTXWeYrq8CeXEwge6DchtwwwCbB7YUmg9yEZjL4AJX4DqYHhvDifKHFpyu66GmafVpghepoqnH",
  "key12": "63YpwtisRYX19K5yT7yrKgA39urKwaN1vw1feXxABHNqjP29XDJHiaZNde5aQCpHW9eK9218MWjD6SgX4hp3GiYp",
  "key13": "2yXdL2FFj91LBFwNo2WPWbyv2CVkFVo7ANpWxbwjFEmQ8SRp8FhsUeHXm6j36KaYb2BtCrM3BBQoSzSzfy2B8NZA",
  "key14": "3onxkicssTGf88q39LbuyqwE57fe8xnYQ8kotsHcPcXSTwHtSY42DpcoMgHsf19GW1PomPUajE7iGFX6oxFe5nVa",
  "key15": "2RaC2THby9cQ2vNdCS5YQ5CzZD6JokVGhQ27XNSR4HfRa9oFKV5edcTe8pzSkerw61QeX3jWLnZiARzXQGA45iKF",
  "key16": "4ps4cbeego58UT6b9nkiqwyQdnaGsqdv4XvLQ4LLtKCGmLywhYWcV2b4ZDx2mLuju9YKRcg4pNtBghArUZi7UAzg",
  "key17": "5enxAvkmJv2cTuZwmnb8zGufnn3bFXYmFuCLoUbfzMSdauw5wTCBJMBqEWcc2ybSFWnUy9ug8KKi7yfineAeEUpQ",
  "key18": "3hejK7jvNSfeETP19BDoUhWxN2f4z5CZJCM6CpaNZodST2ySDrkHK7r1ec1fqMe8UAoqGF1Qt8qDy7geCq1WQvfq",
  "key19": "2ccFM6Dgwn35GkohJGWtXCJbj9HB9RqxRPJfPcRN68HQjiRiNoLtiFQoRGg4hiF232crD8bWeF5SkmtMTSG133BG",
  "key20": "4CjFkKa9pFiVriqTatyYkn5L69J8f7DoHsH5nysXykeJrng39q9ELpji8CQECMoFbjeeB48LApTfx89WutSA2yF9",
  "key21": "4qxxk6ZpFszKucYY2pKsJcfAy6mTnMv96AZU136BWVqqTJ6fpVyoidBciSnT7PZUSx1EraeDnr63UeTwQScqrd8N",
  "key22": "4ZmuRuUxR4H5Csr7ADwu8Bp7kqGwi1HmSzP5XnAqMQmvd3cs2f8j3vapoRCViZ8X5B9fsstS3f4VvgavAvtRrSYn",
  "key23": "2WS19bRXh9rAZiPE53gKKkfvPXKpdF9DuMAFrD41LcXAro3Lop2smScYWhfBWg9xNC3cSBFrfGZueRwh4b9anwJ2",
  "key24": "4r4mDwwKophT4uoxqFELjkXm9mtfQ5ZAEcmrPvxHwLZDNB9BwTkE33qgBKgVtZQsWvMqtCMkSxXethjYGeh4UBBh",
  "key25": "v5i3ZuQ8gTCeNwrvTLnVSdfCiSMVS4hJAMLdb8VhWNmELBeWBYMVhssSwj7Ux9LqbyYTT5YqZA8Bc9dTkG2HBip",
  "key26": "2Z8iq2bQXcxi3FyqmC6U2qQh8ZQgARYDTas6cgiwHtmYoSaVj53EHY3KCYfshvn23iaADV61ZURVWjKz8HXUyYRD",
  "key27": "kmDe5GugFS4mXAvHR3r6bkY6JkQvYVsxRfguDn9EVXJeWsu4AySSCFZ88oj4tr1h5BqTWQBcb2vv7uoxuxTc8mu",
  "key28": "5yuMi5qs1JYFAnerx83MiooeYzgFrBNBSf1YAyUMi5fwwn2CgWbHy3v5iweh3Apr5vuPkgLAa9t3k7kApJscAr3y",
  "key29": "3Wsqy1cdoQXmfECnYqfiJE8whZyqKQY61zjEX4CXdKncpja3BUVXTyxCFgtS72TQBtupuWd5EACjbt1Kr3WA5hJU",
  "key30": "67Hg99QGm2K9qd8aWvatcFFynY3uANjkfkvv8w4bUyd2PaEgfSdgichULGrseRLT8wXY6DrEjws5rA6fHJFhkuQR",
  "key31": "4cnRz6EnP4TvgjDfcH2fH8E9xmVLGp9EStmJ2Dd7diPxnHB1JpyFiKfRb3kCVu2ZiHFFSJ74wXzwuCcNHyd5hYh2",
  "key32": "7YsXs8gRPmeJThgsLf1rFtpxRneREGkMRT8pDSngg5rakYXqbiGGAChMQd48zajYmXMt2UU1onP9qBrjssBVQVF",
  "key33": "4pq3Sq6S9unooCzWxyt9S9HXJ1WUoFeDx1D5CjamAUy5RgAwDfP5K3H87UJ5BF7Lu9j2yddVDAjUR1qLxSjoeXKZ",
  "key34": "29jDBK2pGQP3YwTKqEd9P53kfGD8Pwea6BC6oYWgxdcdJb29qqj6KYgoBz2Yz1fSKR7FVhJmp2g9ZrPxGgaW5AbF",
  "key35": "u5NCr5HZQ61SibsQjkyLng6JrFBSWL5dqH1KawA49iDhh4ytuYjzCnY9uRTmjPdrRJPbT61r3G7oegesmAsKeGc",
  "key36": "4uMHFFiTSRWNNGkPywcgSJZh8KVFipxEZd2Npch6fptsEgXqZHCBmxqEev7Jkm85rU3kXoA4BoopqSdRLffh49iq",
  "key37": "3bQsFmELk1UzsEAMhNYGbA9A6JzGUjf8UVVk7ToYiybLvRfa6Ubd9ApH7fW5YuNph28uBeqrRKDvoxFVRT7gS4FW",
  "key38": "2o5kT16LkMDXbaSiEeuz2bjENPCK6QDuz53XXZgTCACZHTqpEyJsrPZhjcuEJzfYUiswFetXskb21WqyxEmxKERJ",
  "key39": "mmTbbHmydugUEKUQY9ZVkBfbBDgLep32KDkRaDpiDA6JApiEQvgyQrLDfiBGdiej3MVV3U2RQATWS4igfYwJPJZ",
  "key40": "vsFcicqMmJi3RB4cMu3AqSqbJ5EqcKCZKNGiY5E1i2tm958W9wvMpjLsMdqEidjK5xKBuXwNEPNkvdt35v8fEQj",
  "key41": "2eGk7hX81A75unsZY2GrW222MhzPqJ9YKKe2UrFAHEM8VXhphbEs345bH3gJ65kFht2zfgkxSMpHDTSGvxjYnwBs",
  "key42": "2ZBd8YPbmtz7VQh1diR4eARV4LWfHJSdHjBo9cM2foTE2rjqYgoi7W2GQr3wH8Va26ESiHBJYJrvm8x6gpZ3W45B",
  "key43": "5UrT6VhBAyP6ZsDMqNm89fZSziwzjbo7m51fJB91dMdzJuvbShwR7hUQEkU3uftd9J8V6ENah2j6BD3wfFdVkxW6",
  "key44": "4s7sssRRLVTgVZ7NRu8t4d9moYEmmd3BbiVAr7y9LfqZFeZbXXrwdtCQJdLDgiUh2HVrvhcfpa8i5go612axK7re"
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
