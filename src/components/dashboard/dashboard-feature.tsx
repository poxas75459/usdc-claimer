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
    "2ipygJg3w8VfiwSjZPzyv1xFE7k5yYP2tXo7urBQBRyH6enR6kATHt2bgLhpXRDpKsqFXq4ZeWK2fYvSVzM5xo3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wmrkLB7qGVN9ET8CCaiXcQUhT7EzF4KuFdxALkjCxp6vNm9E81pXrzK4DK1R6MrNTCZZKKC3JDjtLxwB5LFwUke",
  "key1": "4JhvgzaiiJVWWRYjREgqCnrMFmgYCUDKPStfSWRPiAU2qGFVVXMmHYzSWL2PXxfiqqqc4tVLRnTVgV2wPJxCqF4S",
  "key2": "576nPEfzXqxWdBAS2Wgr8AoNiLq6aatJ5g658Bo11cDqh29vf4ZQ9BJs8TVNwx2UnL5XhZYq95xWgWTnBoyLPf2T",
  "key3": "2n4bK9kd5ePUJCtjkrAw2J2C77H5s32sNNRBCLLyKFYTJC4vWJKnYKvQKaj8zkkAB1xgazD9AmCuykr1r4DZrZDq",
  "key4": "KJfP21pF4X4Gykm1moY6qEmufySUceGQPrcX4xwZtw9nfZxtvhZGfLewsNzqXKgVr5nv3je3SPQQM9J8T7Jkj4p",
  "key5": "38Li3Hkx5MLMENav77z3fiXpYEiy3j9Q9CTp9bvSZSAyZAc1hRaGRmqrncGmERRdubup8AezXR37k8jyNCSMudoJ",
  "key6": "2Wo3MCqceYx51XjHmkPMRW5AAGX9L5Y68Du1UByTBUYLpgTktZEHgb9Go6ahVF3NWWJcRCNFeRVdYwFD28YApCJU",
  "key7": "22raG1UDUzcKCpnbqhSkCxkDg19MfrGQXnXFYG186njB5KpnQGwqrbNSwcJfN4KPULgVaeHnm4YDAXfSMW7DBvZE",
  "key8": "3iUyWFSC5Tp5vs6u6GT6BWc1wZMWnXhJFnrFcJJ6oWK6zwZQ3T3Pn6d7VKguNYG7Qywy6npMNazB91UyRUK7yZAQ",
  "key9": "3JACjUwZvFejR6WAE5Hfd6EkEnK3pFQWaL58oG18qQPbJdeMGFe8Bn7eLuTyWZkW7GHF6fcB9L5w4KPbCaKtYsAQ",
  "key10": "2guK8SAVqKZ4MGyfTaoiQTPHr7BxVbiPinmw5thwrrjTeKg1CZeUC4xU7xwansHxA7CCcfLdUwaQnc7FQg2vvRH7",
  "key11": "5EktuzcpksTnE8poCWdPbV9pN23ZLP6LQSaVMxXYodpoBVBrZxztCZYMQRWat4tu9G5NTuikDtXR3DDDveorPgeE",
  "key12": "57s9n9xt6fr4kf5QsaSWtf1Yt74tXq7ojzmqWWrP9xAmvk2Q7uTQX3472bXmZa9pe7SYJKwKpntDiGz8eWuudtZN",
  "key13": "2FMEMwbVWkLr1UWwQUYhBmK38tn7WmcevYhdz4mCCGTASQua5FmwcMZHmjiPd71dHFeiWYCNZ7Cy8bG6AdcBKSCp",
  "key14": "2ynK2NUrc6AAN7QLzVyugeFVa8eU2sdZrVcLKMT6cLmjLL1i2cFp2ir9TpBZLbqE6m5CSBqeCseXoPwBSQyE9MFZ",
  "key15": "5rPWmw14Zaw4H4fVMmaStjPuZEnnxXLdy6xEc1zWtyAixyUtATHgCCjXK7fx8X73FJ22Lwi8v8Dg7nx5r3wZCArk",
  "key16": "339aKyTk7CMat2ZFuqFcPyJMGJDXaqD2DfApeR4RuT3bwr3n5jUx3ScDeETUChmiwrJwsgZhsmkMEe1Y6BY3toTV",
  "key17": "5qEwWyNoFFS52bgbe4BkRXMq4tbXbMb3b2pG3VMMSSLXpQDcuqdMXRYXkB1dkdT8kQZpXXB32Hmrm7x3Vy8pWNap",
  "key18": "2Y2MMoSj67NGhmLcQtXz2XnE3RV9vbg3vubZJxxgWaJDjJaWg8dVjCPGCVQH2k3GnuK7jyoZD545XDmTzxGmCGiG",
  "key19": "4c4FkCDL5ccGLzEzLMTePGSCkcE4WyUtWmM1TZtNLvmasSDxTY82MGUDBzz9cAP4GhB5wvsr8Dmnx8AVWUKFB3hG",
  "key20": "5vWfiAQRgxzv9dtxJTVNfowigVBMB5pdFwTUMFQNrq3h6QgGZYs8pd9joz1jeRP2bebh9RJnorW9ugVJWufUtRm5",
  "key21": "65nFXaiLDwvbWXFzLyDQQQM18T91eLa67Y7wU9h2NuhozMVfYxLZLrxb5E9KqUeM6XEason3JUYSKd3QURK8TX6p",
  "key22": "31J9ibo2SSi9bPb7yfhATonzEKkqDiHPXStcHf4qg7mPZv2rNGTLvbac23bbr65ZGcwVCYHkay5pksqobTYyxNKN",
  "key23": "ri5hkG4dcqr45LMJfWabYsXSXAvoMra7v5y9WnMrnXfUFoMS8e34PFXKZpGGkdaJd5AS86JfsQYrvzdS8jPua8a",
  "key24": "4dfD7qxP3J77hvDY8EH3WD4uKABrt73NwFTSc78VLpgN6EZMvwuHwo2gzcwR1tFEdz1QR164mGMZewYVM1r3shAk",
  "key25": "5RaJNNtqTerEz97CGH1hQkv4rnoEkrWCUrJhfnAec9KuXvd7JnXaWBLC7iJenNF3eJoGAHKsAvfF8RX4MTSMXb7o",
  "key26": "5JQ9QVwrXWkUjSU59F41HWsiK87DTEwErGEoD8Nfhyoz6eyDQmndcrsira3NLC21BcWSRxBMskH5jmH3oy7RyxLq",
  "key27": "2HV5U6PGvYLF8XPBbgEFJUhzZnwyTiEXhF1MgSf4wLbPDhiNocn2p5hSN2ji3TrwLiRrgc9LGxCPPB6p9kxXxtJJ",
  "key28": "5maCVHLDxJBnTNd8pj8DS7NffFPgpnbdZhBcwZFYYtvir9ZVLa7V8gAt9ehxLbnWBMxXFx2mP8FDRxq24zmWPGxT",
  "key29": "4WWHNU4LyTSQY82iKe418xdH2dqseNB7aMgHFrBR2BBNxmS9yLJcekioSJYBuzZnEiRGT1VcXPNnNxUCDwBcdAUk",
  "key30": "ZnFHNgYuJAe2EhKLmCoXXSgA64yZjFBacznWe9e5qksoGjkwpkFYjSUXHZycrbMBmdJEtFgwAaXiGxTSTnVimLH",
  "key31": "HhfM7KucuUorub7RCmgjwBpXZnGspj4KPxUDRUHJXjZvZhKkuDWPr5raRxbsX2gyj4jrcWLJfZXWypjrVqiGN8b",
  "key32": "5PfJaZmfrTLqpSUbyPyqKGCDbcVqMZkvEoaM8qDdRDuXgm9ttfCYi6JBeGBnc9GVQB3B5eU4YFyVb4ADvJis6MyZ",
  "key33": "5yvfuGF3V6KTqRAy2uEkrXR2kdwrhx77YHfb9BuWHWi5Yoj2x8fe6onkxeLigmg6HeoCE6GaSMYvcJEftF7gAFZa",
  "key34": "4wCEmbmpbZYHV98XP4ghvGbTCU9G3pB5xc7GcPU51ToCGvtkh7EMAbXnXqt9gYVXc14u4kmvTvtNgwTepD28HNXk",
  "key35": "58JCUA12sBAfYykVv9Jy7o7Ku5dumiJHG3qsELoTPJfemqKtzXYwo6sTC3uat2v28nKZPNbRJXc5HCUw3QPFARtv",
  "key36": "ZAruzf1NAgJ18mafv5jA3xw3MdSZ8ed7JQkoyoXHfLp2LXsEpQCmDqqoePxjWoZdoCxW56yCgYL8CTJVGFjvtkq",
  "key37": "2QWbtpFtvNVFBdBs1zr7U7nMmUqNcWq8WLZ8HqvLSSLwpghuhZKcDzx1kq4PjsQaCXTXBq12oGG3wEoGBUF4jVkA",
  "key38": "4WnhWpiJMqdz26ntatP7sVBtPgzWBFy4WiptyHyJ7cJ2PTdWXZFcebi79sR4xP512Y9LQByC9Wwzm5uCJaVWCkE",
  "key39": "eiPoGEyjz67kk26ifTvGUeUeVSHvUKFbPmHbfTgeUsq1HjXKazdg9rMAkdUr3G5x5JuD1iDGFJYWEWB53vmUF3S",
  "key40": "3UrmdxXrJExjwKHJHEDZahTDUqGLiJUU23A48Ev4i4tMU9926cBcWPJ8BQoWKxYPLFmZfYMBAHKyAfM7qyNXEZkb",
  "key41": "4xg1QkQxdWpmBPo4GNESgCa4naafF3sCiGixqnvMNM6WCpadeh8EoMJn1kpZyxqB3pd2vgSpVQAStKScKcaptFQM",
  "key42": "nJffTy6nzjs4vb4gtseJBH1x8Re8ALWq74n4AHFUrVXTuPeeuNYSjYUGPaKjL9vL17HVcQMXRVPWQQJYDnrToi9",
  "key43": "2sxfyPxq4tW6fWyvJXDDHUnestmA2RWe3JDYaVHHvtdAhCCvV9pPzqrzHuoyGNW7moVJXoFbU813uEfxmGG5mXAm"
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
