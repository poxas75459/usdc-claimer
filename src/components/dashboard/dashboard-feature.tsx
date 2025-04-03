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
    "2pboawuXCeAB4uvdKiXC3ZaXrgQqDHj48ES9fdFujkxKHDc8jw17sZrxdiv383p2fqprdhK4hgs5mjeuguNyGgyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VEHJwo92XffYnRR8GrBGGCujCWUh4uEBPRs7tYUApFZDcr3sPm2eBrMxMWaJXk1TKhhGc7QV4VbsPEmHT52J8j2",
  "key1": "32eVSw4TiD1UKGL7D2EtK4DCFM5sCo3gAMbCdANuKCkHP1Z14AHCnkEYh27pqUFMrHfwaGoEB12MbbyNCzY9oLEr",
  "key2": "5zFsbtCyCMn822Ns3VxYN26K7zcmZNrE7UqHPjcuDZdsTY8fAFfY2zSzfmFhPHr4ruhiBSJAajuWmRMA6nU7B37z",
  "key3": "5yipnBHTKJBMvWmUD7uH9hFEKFCo3x7Z8iDJbziuWmt9ez6iZzMww99hJhRVTiw8igDpPuumuKYrLSUVG5d7TrTu",
  "key4": "4WuodU5QtvQys8YQE1dCw5Zfdvu8ojeZypJVDe8wkjD4UJzbZPrBQovk9j27aUYmJk8WLgq8gk2GcKCPyWmCdJde",
  "key5": "65HCdRxV2nJeY27BJ6jeduSCh65mpb9JZmByUJBeWF9LYRUyx8JdEYSYCmGrAW31pTgiNM5MgYdtwN2JnMAJ8r8Q",
  "key6": "3Ljta3hUG1CUsJquhexyQrzHXfpy7g4NpYZpXpZsMjiPUtFPx6yr8BykS2z3XqiyoFP8fnGNSQk9i8KqwKPJySFE",
  "key7": "K5R63FNced3pjP6oqTBWGr7ftZGF2iXhmjg3ioG65WetbYDZL8jnM2mEmMmJe4fKWgGA8NuYsa729B8aygo47QN",
  "key8": "2fciKWDqq4WCnAz7c9ziHocY7KQ6um1idz6qsNgxuMxERMWy4BXCXwp91oYmhNwFyR9NnKu5rkrkqPN9JBH2PE2n",
  "key9": "632i7dpGpGaFJFapNaRjxYY7sGkxgeNACjiZUGwZ1CkUV6Ykkooba3ArLybsb757yneoPzCWrHrDPCyUB3ZUKEDo",
  "key10": "31iD3YNQqNHuQiWvAd9rD6K5oVYUKwvxnaFFtJrg3wmHkATrJmiMRMB15QgUP7pg3AvStekL6hZfE7nrBxU2VUyk",
  "key11": "3dxvPUM3SQjRPFF5V936ZcTEqje6vPK25RCx7CM3oeStbEo4XBktf9JQof14fvvmZ7WWuwY7Jx8HdiAYu2gBaaj9",
  "key12": "5yck8FE5BKKAfdYng8gjU1rkyFTYtuz5JXCM2Yd4pytQe16fjNLad3btAZQzKR6EVZBaiXpQqtuvLA8TSqTqtsjk",
  "key13": "JiXDcbC7w6KSJGtnegZ7cvVxUPhXgCyqGugH5ebqk5LpDugZ6DHiXabi3YtA3FbJJ1rmnoBgRUTwKZ329QxRfkk",
  "key14": "4bWC7ywofSiu7uCxL8R5ESJTpjZ73gzpdJUrVqjps1c2rrKw5sbyoKdPfMbbVMc8fhSRQFjtKf1U3amtMU1rjNeQ",
  "key15": "3biEwfRhFFKBYmg16QtFTGFVvAUQ9yEVXpDWbC72iTv3aoxGy71nuLhN3koTAfDofwKtvuVKdaJPAAfH3KehR3AX",
  "key16": "2GYJYTy2J4g4JQ7U3fEDoaGzXFRALVBdJk7w3nrhveecTtusDsG9HrjFMZFkis8UWewCWuT1ZqtNMNwMYZ5FCdmW",
  "key17": "3Bnk9ft8TGCcbJyzafD3u89qUu1vWbMY64S7PRSM5zNAvAfcg8EnAaMNrCxJMaNhJCjumvt2B167iDqzKvV6fh6z",
  "key18": "4RsoX2MywFgYUS8VBqeTi4QaZRs5VTfMq2U2JUNwwkM9pX1ZCJjZy5MykGpH2qGetCw48pXjMA5azF39b3tkVLrN",
  "key19": "3efSwNAmTTxPtkqxv34QpZjQUQDeS9egDsxdSc9Z1qJ5JnCqd9hHF3Yv4K5zDjYYxB2Wg5ShRgszU5JCzem3xAbZ",
  "key20": "2WYw2jd5wMEwSJfqEB7rZyHGfaXxds83oLQcPwokkREttptHuUNVwU7TW4NxtbcmCJmEaJ2ZbAMKt5zdfY9hSKwC",
  "key21": "4iTJ8nqTcdCmWuwdJCsoWZZZtJvkqvaXRGCpsZkMEdFCjfNGg2YxfhNvfxPnHP8R2RRX3xeF7y1mCSyJckEqcWgk",
  "key22": "4SbRgoP4REGb13B3XkLEFZwkBuSXbyd5rnwpKgfsRTVDNDhW1uk8MQp9beQhFXJT7cQun42TmyRErED31tAsXQbZ",
  "key23": "mHMf65piMct6CsP4QGGcbBwNxKsjVcpADZqZLXMZTCffMYF7G3vfBjcYmAEZTJevNAw5gMuyC7R8EC4dcXnMZEf",
  "key24": "3JWTojusKCN8gj2WR9GoMigomE1jMkPkUxM8pKBfaWWaTVgE2tNHpjEcME1AEB4zP7ENa7san4URf9kfphuivuww",
  "key25": "5AK6ctPqtsR1DuNyKEuZ2kR2rJ1Jzvrjtfuheza3p1TA2Cm3V1hr55wFNHxxNjfYSHJPvjs7Y6rpNdQp1cjwhjje",
  "key26": "QnDjqtrdhbR8iz1mqiRjizN5xEwn43CJCnXQ1Qf95iassb4HCjqpotmmPHMWJvKW23AAssEYsQHF5V1mMb23GF3",
  "key27": "AB6LkdKY7yuMJVmpP15UedzXhbsUbVpmnGjA8fUh4Y954RSBgsmwvfDpUiyAG5mP456RjVa1mgeeM8PSjXrHiqM",
  "key28": "2FHhXbgesBG4bAPvtAHvq9qgfyQJwRAiByXA2PRwTVhWeLMhZTCe6opuJVM9kma7yuGPfHtwE4F6y5dBcJU1jMDC",
  "key29": "b95pWUKKxYR95uCCVD9KadaiHj99usWk3TGNrP37N6Xk3NYx1XwvcG63z2CYBEKjNYq53aHPFdxTRBCw8tEH8zb",
  "key30": "45mnTewCQ8pKmQknVXTmkt4jJmWT3ABUAhJVtSTfzh8dMMti1umt1ZhqU5NJdQRfCekgrwMbbhPvHmeQNsm8P285",
  "key31": "3RmjdTJrRcw1xuSUNRiYc7pjubwARxpDiYHgM1qcotbbDfmATw3KbskitwuDF9rejh7JWPvZSVkgda9ti7EQje9",
  "key32": "4JekkpPwpeFEEJPgQQwyidPG4vjESCvPcMnXAfPQ3KQ6AaA8Fc55nr8ADQ1sMpUFYqw1cqm2LuyKYSnHR54EDZZZ",
  "key33": "g2bqydNWhhghV1Yynqhdine6iSSU29JtJpSaAbaK6G6wRXuD2bGzzRzBiB9UW4QP4Lkas3HpnkZgK4aaKK8xkVw",
  "key34": "2p8ZD2651A2xVPzcHd3XqQ4bvPL3U1L4fLHW9w9BLApiDJ4AN45crn7LXBv2C74pZBn9rSHi8CGh2hTmk9QiuC4D",
  "key35": "34Nhk4giar2z8FXG1cJBAEL156kvxB9oSN5i9dwDCSouExJfzGzULr8xZjZ1wKWdkb7ALCi3Vi8aL3ptp6yxaUpS",
  "key36": "5oFrdEvAwuLiPJgXL6cZqTer2BS6TKWpimwqGEjjni5iQrd3fab3LUtEHTf1YPTySRxdPwirY2XoHFfKgbRC7VyE",
  "key37": "2z9Wgd1qPdnyP2DCCJX4ovcnzLkMmrTTdLkCrCKm7L9oLucSEMVyYQqpQ19EnPBjoFR89hkFHsXNCXU1gbmbF88c",
  "key38": "2ptuKW2rjvcBFMwWK8tBGSsgFTQNa28Rr3L4D3Rnz1eC5jkaXEsp4kYiH1AHmbqMR7SwVD9rVjD9MiST5zWoVzTb",
  "key39": "5MVnoGzp8Fvs3RpxMkxn7F1tm71j3ZSYyua2nUVwqQdbnbdguVdG61CFPBbTXSjswEYqFoKxtCQvUPKfkWgABVKF",
  "key40": "3cfqw7jyhGrbLi7oDPaxB2m12MaWYK78rwBxNECa4Tre9UKuZvEVrq5HzrHYF8ZB3syvbJ1oLSqjaBH7M4ZjwJRa",
  "key41": "2PyZZzUiw3STZHofYS96eGxfa6mhJbKYd1DBgwxCXjYzL7co4FWGcZSwKeB4M1WcEsbs8NvUPm2xhqEcECyo488u",
  "key42": "3eyrAjH6YLoTDFWJkiA6AZy8czmefmWv1AFXH6U45KKiE4i3Y5Ux3f8hACCQLKPHRTPRod9tnFCPmCjq27UWWqtU",
  "key43": "4TUcWMpvLDb3yFwrKrYiiZDv45jcyJhYPgBpgdV86XeczVbckwZ8QL6VCr7K75rPdDrPzCdMxPGBx2ViYmaDoA7F",
  "key44": "26jNNupYVrGXGGL4GS8i7scPfiCshtZsUVG4nvFSmcwg98UiheeWm9QNHiowhDFHd5SnnUWTNn3s7sKqr9dABxah",
  "key45": "R5UhbeCibNq81Y86pmoANCGpmW6m7kBdEof6KafEDp5b8BxN6J4iegikqYf4jPr97iETYk4QZYVAdogrj12FEkN"
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
