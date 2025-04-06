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
    "3jKNc4cePLzqA8bZqNiPmG7Ax3EE1Pno3SfaXUSPXwuxmk8GRXsYNwEAMYp1i8MhFUkiyV1DuXERbBjVkpp8qEJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LLzTCNPpR3openFemqaXaeMigM8MetXH9P19hwPeewAazEnNubZYnuJjCY7jj9hyXGMJRaPdCUk36pMDDwp6JQ3",
  "key1": "3PLNpSmLjnNuYzZD2E8U1zxwFXzG7e1PbPKzG5HJ4LqzQJzCkDQzWHWu8EuaK6Je5yjchRJXSTAfDHB4AL45HtyF",
  "key2": "heoQ8jqqv3Q1n7Av3p65Ah81rTPhD8TM1jtuiUpuTSf8YCu5iQFJXxsKKY6riHyCdPSeh6n5sJSjvkFuwiPjug2",
  "key3": "2n5mXGTtaxGRXiH7mXcog5LTS596yUt1SzTxQhP7a2EF6sfjwtXmjyVGNx3kemyRJixpSjyBgPJLQ4txo988UJ5g",
  "key4": "3pSxTxn9JiM2mmJ9cLE7C4mNoTzH7gTdeQ5vfQVFfgi3mXRDFahHDK2BbGGwPgPKWkqQ7r9eHUNkixgGAEf4EstK",
  "key5": "3EbZ1F3tgBUT35V84ih2ww4myoEGAm2ymCoqGMe4PKpkYQziata2Rc4YpyqSxWJfV39R98voMhewSKJEfAC8TFZm",
  "key6": "5bVsVkuJ43ovjnngx1AEp3UY8NfWyKQkJ3DqFjnznWeqYnYHRWSGZiU6cxmSdU22GBH1xU87T3cE14U6WsC1gCKg",
  "key7": "5XgRd797XZ9VVwZDt4KBCUhZXdMxUuw5tMWk2UW3cHdSBmVnqdYckdKWKh4SzoKn7TLzWyFrsmXoUar4kyozzp9s",
  "key8": "3uVpwpWECR63dUs8nbgyLc4K65s3xZieUHo8GrLBUdUNf6rSC8zqbi6UAZi1s6h8ZoBxZByuWBsv7dPqWYyH4mWY",
  "key9": "59J7dqCCyJN35SaMPN6VGskxUwCypSdZA4ynUru5RA3WR8bQNF4Hjo7w9r2Bfut5gyPnyiLDG4R8TV58JAR3rXZG",
  "key10": "22FypkjeGfa1jnTUMTBvwcMEJW9e6yUg5cSm5hBbRA7bD2PK46HQFsJ7z4mAJZUb8RAZHkHsNY9UQUpZyNAM9RtW",
  "key11": "3wqXM8ozhub7gqSD6GhxPiCYCF9wT8NPk1eyqZdq3ZxpyFnyrHJRrdGmNzL4em5F2G81V8JDYXodR75nccphZw1n",
  "key12": "oAEQEprw6gS3Vk1fZjaFbFbcp249dQkL3oq8jpRHQpTC58kVP6nYU8JhsYXc46MXgCJDm8XBkk7X8mrdXAHioK5",
  "key13": "Qg6LBYAjxFTBkHTNHNcqMi7PRYk1fUwPXQMeWKv1Y3RD91GgUrMAbJcxFv1J61zA4ADw2ysiXF9z5QukBUmTKmG",
  "key14": "2XeoSsC7eFjS9LP5J8sqQNCwRBorpntfoWJB8uFSPxRwUV4nu4w1DF4MS5Mfrir7JZj7W1qKww9nN28mSjJMVGx4",
  "key15": "3QYzE5p13fHcMKXUbiRqgefETMfC4RcpfK24pExBg2Kp2nifRyhmbJuL9HAML6aPcBR2StJsWDWeT4GMKYTBQ84A",
  "key16": "5ZWdFbaD8GNiAcvzjv2PRhybmfzFqRZncDuuXMKQghwpfQQpouH3UZEQCVj1d1FzS81cKXjs95UACj9KfjDvd1bP",
  "key17": "3PaLvvyxpcxj5QVD9yxFpshApCVYAyqhycoUmvApCJd6JZqDwfWD1WfU3eoB5WFHv7cRB9AXDtgkvHfsjGbwD3WF",
  "key18": "BhpqRwpKFdbk2qVPzZH5ZwBKEe9mUCeoBHTBMsfMJbPQk5MYxnKAa9qFbKb1Safe6iQyzXqHfDd8BuUi43fu5wv",
  "key19": "61FgC56pZkr4dXEoiBdCfhSsaWZWSMa3AVaUxSZ5Ngn3SP45kU63eYn9SCD9n9adFykfyc9E7mR1j233QQJQEHmg",
  "key20": "ancwjZ5Nd8j98erhDH4oEGGbVbedbZtQ1Lo9o5UxHcxPpwWp4e1kjkVMtJ5utYpKLVY95T3S6wjgi8xAYrsFSEB",
  "key21": "2bj1gicmMMSpX2DojjrJGQPLsZfe1DwhEg8WXoRkeePaMsPPT1E5n7EuakdumzYPxcouKS4RFVXuUUTTTWYY4P5z",
  "key22": "3TqBVbacSEXYRgrYrzZ2qg454ia4gvtr6iyDYmyE3PZoZ72gYXD2ExZqjyrM7kKhbjj4zZeqrJB4aAD9SQ5wutEY",
  "key23": "2sxgq9ALxtJytkniNxt3PYmifn4sbQrvfxkHXcg72PQanuwv9d5EvJu7pLonyFQpHYKobMsowk71qMmEmST7LGYj",
  "key24": "3k4JHbNL3fPKQAkh6tCsZaYy3d56rMkY3dvmvQEJ9C2qkopKCsvkA3dcpu6Rt7aHjXqePNeZcot5sbG3EpFxEqkb",
  "key25": "5JvDqNXwbgotLoDz7iicFZx6Bn8CgPTGP3f3ApSx5DsH66wHdsk1Vpp8KAmwrF6DVrgUD36nkKTGh78hb2vHadHv",
  "key26": "5t8tbfSCtYG21H7bXLpsALGk6wK2CkoBx6hu6w28bnwZo2u6wtrFFiKAHi7UJM6sq6ZuW8WYR841ibAggJgKPuC6",
  "key27": "4WBbYJq72pxbNAiigL5h3iTuicygYkMwUj2tZpKM2WZcS67S4d811sSm4upe9BhsFnH9zxPTgPFtfTHhZ8V8Srs5",
  "key28": "56n739ctxapUtVTXrhV4A7yL44QK139sBqLBsTCAZ5S4MUkYn1sPtF5zfJck5vbQuTJdUs6q9Perq4uydNSLt8pG",
  "key29": "4Hj4dZSMzTUwrhpXNbPufkBq1bX4HhrFAqwiwyPwrNN4ExRJKcKUaQbDH7gS1wKUWSJK7Mg4nbF6cay9moUbpv8Z",
  "key30": "2t7AB2EbP1AodJC6SurrQ6G37it9Nicjtk91b8gQQqJB3Ku5TiRcbs3LxtcHyRcnSZXY5RnhSWQoxKfCYfpRverX",
  "key31": "3GDVKco4hHbCwvUeE87jynYBMo2iSPXJ49BnbPT4MZrBRFcqotKZk21b6YvXQg2RQb9Z38mvBcygWvcACyuUXPX4",
  "key32": "o69aDumN48fXqNZJkDmBbfxFs3SgGNhH6SjDmb6md8mLNWWGZfxNGa38bNtFbrcAExd1Pj58GvaCj6JM35z9hBZ",
  "key33": "2yTJfX2uZnHyNKsdPM4TwRgkfrjPE7B3MBdUvMeBgMtvHjzQDfkWonkW61FKiEgCcShZLZnsCyqMm4pfg7MUkbS6",
  "key34": "5cLT3wvps6on4Qct2jvWeiTjbgVABgvHeSGWL1oPiuSczyxAsmDBAzDXyFxZcuVzjk1jjZXAVd9iw2Nw7LmzD8J5",
  "key35": "4NPnRjYzFY59xvypSAWkh2DLu4iKWaWNprfR4CbwaAd8TvYYFM3WmztciPpF3SquedR8ux2jAXVFmKPA74SLx6k",
  "key36": "4UzmNVCBvVzHLffbf3nHLocorpr2gEJjmV2tMDomj7J3XRvYcXSnNDfFdFqeeaXxMzZ6DYAJ57p8K1tumiEUduKy",
  "key37": "4d8727PEipBoqmPFTagZJL6NNm4pyb9V39cCe5BhMeZ7utjxyZ2hipRWLV56pweKuaNsTymN9qBxuScvE1Qdkvvn",
  "key38": "4xJWwkHFyyhY4pGVmhoaS8Hhr6Th7kC3pnr1sfDus5RMTdcSutRU4t9evFFM3Ak3873uQEZsk5NYUDujrGAdbFgK",
  "key39": "3dkE2gGGxL1LAKj4ogyCzRMauNDUq84k6TQ5oihj1LprhsiBj3MRmSGRTYN2f2avGXNN2gV4TMksuFxkFH77aDAR",
  "key40": "3g5onNqCnKZQsDcWLSTJi184KZJcqrZWMiMxF6ttjCrexx5Tktf9r8boMUytHd88JHHj1xYcya533JehQ11kKHyi",
  "key41": "4ccTNGDhQsVbSiLDbdWktdeMVgR6gmNy29qPRNQa21AA5JKWB6mfrUG5kb63NDnFFWemtXhQ9Efch6rLXaBoP2h",
  "key42": "22yzQaDD6MEXK6igvikEFTPVCpxFx6nSD4cffErZAKgCF9r1qkbhv8sGoLEHwx9cwvsQpZiNDYVVxhE6jTCp7nmS",
  "key43": "2JRfTSsryTGhJEdhBEgFRXoV25YpKbxHWnFY1bX1hJfbNawJTHSpqmtbLqMYjfqro1zRR4AnaSYVBb5nVm5c5kaN",
  "key44": "5Di8kP2LB9n8NWsVYieJYfEPnQbxZSXByrs4R3L9J5Vu7ZWmwDNhpoNfmLsrsufSpc5MZ9moQGMsykC4ZmYMbZf2",
  "key45": "29JmCNRLQvSRXsQZFmeXvdXza9HWuGaDPkqGpnPzjzjh7bu5G8H8ugr4AdTdRRsUzsqpXRN9tLSHY2DtxMty4D4F",
  "key46": "2Pd2Ar3BVejVsUVyxhFEG27tkDFLF8yasn1ib1D6qKU8ss5dHs5eUk94Fpzhum1YYYH7uWYmZKsCL9H2UeUkRk9K",
  "key47": "3yfqxdm79YkHcKwqnGZHBRgShZCXwdneLTgM5cRzLDbvHxfzfnrNyqEFxz8LWh6rRn9YYtBh9UFbFrY55LpiPt2X",
  "key48": "2bxAGF7uAfCkv65Sp2qp7oTzkS8tqsadFTSAwGRERRsiPt7evxWGd81zU1ZJDjeWctLKLNTt4dERD7eMc1vnW4F1",
  "key49": "s6HrXuxmfeWbM2YSRLgiAwUmtrSwdQ4xChiMWUVUXM3Tqr8Qq5m8HLive1b2z8eY5gbgdZRvhKLjtSyEWFBsnCM"
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
