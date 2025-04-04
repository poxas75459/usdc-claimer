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
    "22a5Cw1AgRSdZCJMcBGz6SxYa3wxRGbmfSwVT54xMK3pUB8U5ktu3cb1KEFeWEm7spe1TA2xrmh4iofgaoq7PNTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Df55nY717xyNgcuX2sqzZ2AzsSTNpuxWKWorZdNCaxsEks5jsZa4rUtVkC6NTJiUejy21DJv4cBxjY9Uh35DLqC",
  "key1": "61AU2GtNtbKtiK2CRxRh7vj6qXg1BnE5LcuH72WCeCPeyvXy8HVLZu86DiXXEscLWwb4pwWASY4YGBbtYGwjeZJL",
  "key2": "eRDrY283Go7pgHjBebTQFVf9ufGdRD66vtwvYccoaw7Tow8Gr9VgDqmVVM7VQnvtSMLGnZhXciYcjYykQpdTQ7a",
  "key3": "38PAZu68DP7RDnQ3MmbkXTuuuSHFaTB32Art5mwemRB7uy53AYxC85y2zk8NPkCJQH63vKmEPs1TFhmVBpbw5Ghf",
  "key4": "4qdaK3tqT2WRwUB9xhAbvTHbqxK5LtCUSY2Reos8vSVxp5WQ5GkFEt2t4oKffzjaD9MfLnQSJtAcyLQvFz5TiQcw",
  "key5": "4k6FtpeobPVxFBjDaRUeUYfmfr6E7xutQNZVmhjgxJiEw4jMZFp1Zs9ggdxQeFQzkXTtmfQP46iy253N9oVugptS",
  "key6": "2zddfScLyXMXTm1ec7g5etvtT1VAwpiFKQMWKvuadMMdJj6ACGN4FzAUJ53hxFT4teenS6WAuttRTJnTXCP25Vui",
  "key7": "2RaDfa6r5XagizNNk6G11zTGLrZRjsTLzUfSmCvejC1M7ZMMSbLktGE5U6xAjB9G8CPULKcJGwXTZxRJC1aFNyWP",
  "key8": "qL7315vuaeCnk9Ja9jK5Gjvd67LsofCz86tvZQjFLKRtcUHpMbr4kXWoCSfJvKqefHXUa7xw8ead8TfVVT4A5uc",
  "key9": "3hLhmJU9zx9F7UCePoPcNsYjRzx9UuZv99MFLFy8cCPrj3wKS46M7i5fBphRaChrFwYN2RWq259LPdTDyghL8Mh4",
  "key10": "45hA5fgYFqbSzkgPdjyS37BWdUXwSWadwjyohs714KErmEpkFj8KTmCKLEKbzLg73qf1CHW4Pupaq7iuJyKej7QJ",
  "key11": "fSqEmohnfrAVvzPJKqyrEqfajwpHUzY9nuSo2yqMqc2NsPSPWPqWkuCS19Vy64W6njhAHouACUgLqEy6fsBQFnx",
  "key12": "FymJaLeg4Qbun6ofUiW4Lssq3SzxVcEPDn5eUGHhpY7RqeyyTqQeHKhzdjdETyATyTj2H7nJ8jAba4QUs7LFLmn",
  "key13": "3wDGwgCmkTuCzhbiyggEPW9CEap4CEXLz6ohtnWf9FnBmG4WtfiSr2yZ6CGjGzDBrokab3CEdoqS4MeFyKvUikzc",
  "key14": "39Tdg2KJMEx5GjfZbwLEoGi3KKRmi4B2g36Z8zvf31koNeSkxNLyPoqNAof5g4AumcUXsQuK5zbBkWHTo2tVBpnX",
  "key15": "67gMGF7F74ASqSftJJZw2GrJtZ9Vm8c8EijjBbWMVePzDtNaRmfnPpyKbfzzQJGMPo2g8vKaYJuhWLoKGHY19fWd",
  "key16": "5xr4fu9ySAcFkpoxXgE6Sj6YFmWP8ptFGSU1ua1EgPgckrmcSigRSW6shoKGeiaJ6BapgPqyeWiV3zawozNTA84z",
  "key17": "YfhhbCtiQ7KFQSJpUwFieDaangz9K1UK9ump39QAsbupDwYVMaXTx7pqcDbZtjkeDRF1itytYQfRLYPu8VCPkLZ",
  "key18": "4y6HTAp8Q4yLWN8mPY3Dq1Gs3mxvpW4DiEqqgZVSUyG7eMQ9zmQEf8F3TATer2Jg1ZmMxJJoUYor2yYfXtn35oYP",
  "key19": "4Qu89wjHaXPY64HCYoDLHDQtJJgtKYvAN2BSQgGiwMuzSpdmToeY3Rahcwj8dzCEuHbeSVo5Dy5PESYobTR1q6Ac",
  "key20": "4CARejdyGdXC11gBcBXLj697AdLfpmUq3kz4ooyPjk82PtmHznnuQBNREGKVV1qaaxxwMaBeCBpXyhggo2Lno9rf",
  "key21": "3iqWJtNT4rCgUL9XQc3MdpUKsNN4WYE9tCcN3iJwk8Nt9P5w1gV5ZGnTEQ3YxUnhD1eir1FJDGAkfurjn892jzVt",
  "key22": "5i2Fak4YYAyaRys9XYQqxDFJ7rpWfUjzEEAHHCL7orRp9nhtbn28EQ3fXNYWScUCZPbA6hQNuJYQ2u9W2UPggeNS",
  "key23": "xMwTtPt1pd5zefX8ZG1Z7M9f4ZGvP5rEFAbk7Dc8iDu8aHDCVxrwQDHDSwiG6wwRG5Yb2a5s4XXDE5WjCdSaVY7",
  "key24": "4An8JEJphQbi2YiNTMGEeohZ6AEdTFw2wKAYiKTPPBPdZsmKCJPUpRSKCHySL8mRS4x3cwJpPZHApuZ62pzwfQ2E",
  "key25": "C7s7oziFf51gmLUPQwLVCmhfTdajy1XhBszyUNrsHMVbmsMU1ZcQP6a9LsVnHZJQSjuNhAi43vqsLQTtDbYRv77",
  "key26": "5r6rRMEpgnSoaRsbnofb5X4MccbSTkaQipXD4jTBJsTDb3QjBvDG5XQ9yUagh7iLKMuzpEkV5J2SQD5m9FWp6uwz",
  "key27": "5rBHLzGakPYskTPRaoiVUdYBGBSvX3RJgfaDmWik42rvBEJ2wUd4yNAvvJS2YbVFWAEiVTob2u6Gk14xQNvHW2y5",
  "key28": "3dmzPjFUhurxPs6UtQz1Ebz7XbLRJ9EfpeizD8PqCoBDNEiBJQKK84jCERJHAWXqv7hAnS3M63K7ak5D92U8ShV9",
  "key29": "2VrNsXeNJT5NpAfpnV5QAV5238guJw7R7fLRFfLRmjVLKbihSwQSqh928GjduKoM4Sn8dWFCnYL7c5X6j13LPkU4",
  "key30": "5iPR1tDVD74Xg47vQUhFR4MwvfbNscJ2d7bRJ3vSzAhxfkuY4RKuzPSRobwCfMLkbU5f7aD6GQ8783e4MRF1D8HM",
  "key31": "c6GRL8HTnzswU1uCrENhaNnMdWBwdMYhyWALiAmQQtdGq9sV55X1LyptQWET1e91cFZRmkiCU9U13t1wRmGQPQG",
  "key32": "5BWXp7UsjJbvd3fFW7sYZuPuVFF3yCdCU56U8mRbLhRigxnVQWWUA2HMxmd2ttw5eUcQdas9EbwPiFprAs8by7T2",
  "key33": "5MUPBHchUCr9FfWnjTj1qmgCmGnJj3TwC9VWM3DiapAGpRCknMAGMNK55bLxsWe2dnsNkKq8qGQe2sGrDid6eJLt",
  "key34": "5U8LkAjk9FkjwcrPvcghgZXjdQmvu5n2XbW4WTtp3XiotV586kkVELgsaS7uXC1k47z5dkBZvyjwtP6ETu5ZY2cs",
  "key35": "55EtinhkxaMzsPZNdj5MWK2d2ccGrR39afhLeDXhn5NEefHu9YXzfgdpAjxWuvRdufYAFgDkKqefyd57VrTcBH78",
  "key36": "3LGTCTJzKWpHVHEvkE2A4yvv3Tw5mHcgSmSR3yaiifZe4iTNazH79bM399dKi5FRvCFQCMjeDwxpiziLhHF1E5Lx",
  "key37": "4sLcE3YPe3cmiHNWobJojnaT8YfPY5MBSGSbRR15aot7LwXGE5ov6Lt5RAx4SagKAzoAYrXkdbuLRsCxDVdrFdhU",
  "key38": "5yAUzWgKfaUzrrTvgachbCDR8UgTxBLGoDwJB9dRHNveqvN6H8352cMT4WpGB73TTtzEZ7zoUDFAdwEAUM4E36my",
  "key39": "58NthM2XbksyNd9mJYDAjkMnvYxYwxsAbsVTV5yc4Y3WHHCZm9JZp2TY5wEcHJ6ZsvLeWwPEjukPqy6ewjW58rSJ",
  "key40": "2d42Xhbn7xWJCEvpet5Z1smb4cL5Z6Cm3JUDDe9xYyvg2of1qNgMAmDsaR3LWa4iExxJ9LabQuCRNe1384aoUPGw",
  "key41": "35HWF5ET1QoAnkBa8qtpwvkh6RT7AoPLNqRRmmHtCW8na35eNwchoQJyDjxHwGUBAWi5isz4KGoN6KePgk87nTPN",
  "key42": "5NBdrwwmP4oEVbRByT4qNDm2HsG1z5HosxCHmdq7Ej7gRgkRqFz9WRjS9jPAd5BWUsyAGMyt7Jtu9aTxeTToDy9w",
  "key43": "4arm5SrNwBWsGMVayM2Tctu2Ss1Wu81i1aWkVBRdwYUXNtq9Rz8nri2tawqD4jwnKdnjwf2nJL64Tv9TKp7xDr4U",
  "key44": "3Diyi9ZrXqU3LupjPadC7fsiko5inM6fPEs5mMiTkKEsVLYffpNvQmvxJXfua1zHHoLtDJtzRB5XhCru7PJZq8d6"
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
