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
    "4YuMocMtigAUCzPurkjeq9sjMStPdLez5Kjq4CPfPXYgc52ZX37szKgePLi2gyTjEX3cca1t8KwAmwWhf1kwrpeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WsMiarUDdFPtusXsR3nFARcQCooRzNraJ2yJE7yBAbrGkZuLtutkyHh9cavjMvQcYjQopYqjauG5yT2Dzg1fopu",
  "key1": "4g4BufEiC36QUmxKxrSwaLCsdzv8x7cQEBUdSv7r3caju5s61QrTLhrr6FNA2iC4WQ78MqX4wzrHx5948nJj26Kp",
  "key2": "4TmzzBvGLpi3eKPmeWK1mu3AH45ekPM75fHV16B7CXXJJYTAjKKjeeuqSr3tidpmQmrnRzTP1Ag8qMRSZyyaAh4N",
  "key3": "64N5YUD5751Jd1AsLR3Wc4PbBjbh43hx5SAHH8WtrcLom1vrzjhyvmDnZ9JjKoeN8aof8MtpPRCm6XqyF4muEti8",
  "key4": "9qWpyet64CGhSLvsejKTuZ7N1mRH3h9YNpR5Bp1r2R5GF4UCG3AeFWCDdNHjagVHcbCRPTViVFvRaipvJx7ULRn",
  "key5": "2BD5jYxRXukS17mreB9bCNCUZvq1b3YiFVGj5Kcpcw5QvnKQ13nKrGL9sp2MPtebn2yqRdaHUmdKZCXMHd17FiSF",
  "key6": "2ZcowPcocwUXzESHuSHg2PRK5CUpo73zjnev7qXgmX2UTockbJ76ehHuGP5u7yJ498rXm6j8CmUTiidThLkf1Fnk",
  "key7": "5nyqXsPq1jimzvjZqP2iqqKA4mg2v3ZkMkJ946U5wEaHaKQiHFKPixkzwwQJHF25BGXup1Uy5uba1Guaeh5w2jmz",
  "key8": "3JDHjR6xSBzfZwg4B46QeNmq15X79ASJiVXG6wzFHdp57vYNfyTJMZ6bSYhypp79JSmAEbMrxD6teGFUKDVZ6FfU",
  "key9": "5TH29qNvLU3adk3wMj8KH4TY3Psw7fbVafQyY9wLMmzi8mcJuwsw6q7aWB4mzT6qiwnidz84iK2ExT1AnbfKRpSt",
  "key10": "3DVyAXQQ5UFt2EKi7CEQBZScbGBWjjtVVChpFh7ysqcCdnVTX3hHCsj8ipRXWLhGo75gyfnk14FHJvHpkQcUoevK",
  "key11": "5VHqDMqriXTeUm9M5BEDQfrCWX4CRQmkbuv8qusVtJ7WnpsMgmVoirDw5FyPEmb7rEcu4dV5egWftZdGwENRWCuX",
  "key12": "3crutU11QWmHd1w6g9CgBrijA6bsrQoCGfnVF79kZoKGjE8Dd2XGtMKX8Em8hMDN6SaXgse27wUUC9se4wD54yCg",
  "key13": "2ufsEz3oph5Z9Jk4pbEfhhPqoBtWHm18gKiSipkCTx3L1txjz8odj2eG88g7NWvW4S93uk3WzCfpaF2f3UXDKMGz",
  "key14": "2HPxFBePwU6tEWRv4ESwiAQX5rqPoWTGyziJM66e4a2dP8fDBwdVuArTpkyw7KkQrSqs4f7b22HxPyaEiYtRtyuS",
  "key15": "4Am28WLo9DLT7FYmfbujkJ6Ubd2FfXjWZTVtnP71roLk5uJ2dwiRQpS6kC3CmDJ6syJKNUA7TsEjYTdLpM5BXiu8",
  "key16": "4DK9vtLtbHoJx3UpMRwsZqhyU8UzAFEunRZ4ZtkFbwCKnUom3DwfF1GkAvw13owCHVs7yX84e1zSQ5PVqrjddQvE",
  "key17": "52fqfdmvr3px9fHBFcHRBo3ESDiryV445MUsc6cBNXBTqtMPNrC4cdPPZcpsqk6yA8V79K1iuPvKkB46erDEF6TK",
  "key18": "2PDWGjoNZbEBsLaneygzFZdzeMcXcCTYgcyse49knHKdPQS2NMbqdqJSebcdHEu3Xarw8J7iSfc3PdJuKdLSsZmN",
  "key19": "N5qFJpkDFKdSexGc5vTY3ZjtR1dRfkV6FhscRwJZnzvf1MExaLbVpup4cpYgxC3ESL7ee7Dj7YbbczmxbbiLb6D",
  "key20": "54LLzBhRubB1bex6g4XfN7ajhmBHKXpQXX1279NaPXmPLr7Q272ZdH2ssfbWryoQb3X8dTNWryouNLQkB21cL7C",
  "key21": "5DURZ4arygTbqg6wQ8E9u6zYouH9qPFPDQseEVNS9a35Yv9gUbvqPueDRLR6CuZbeqDYrnfu3382ocWZ34hBWghL",
  "key22": "2AirGpg5eLGxdF6SZV6sdGPPMVJ4pnkunJbZrS457xHH7Rt4iHGFcSNeLVfVXiDrGFj48FpdGMAbmBuwCV7HEozD",
  "key23": "5ZAAA4w1kpeoKkhHp4gtftHr1WK2vdoe6sy5j6iKRo5toyNcDfbmjrCnS2VHdov7ATPR6WnHHNhrGwU7cYkiQ7bk",
  "key24": "4jzXakyhdZXPuXZbH3TnFSZRZeKHxKtsr9PTXDag8GvEKiPhxVCP9GodqWcbiXPj2rtbquDk9mG9M2goFyMGM5qS",
  "key25": "63zcd4BJXtkDfZCxNEfrTBSEY3LQgXobCuuXKicMnYNjZuRYWdqZ2aaHMYidLpDa5rv2hf8XyR8YmbjFCbipwTUb",
  "key26": "24HtxGCt28vaK3LEK2T1tEyGXNpJYBQNSKgSb6iRh3xAkhyMwBpHx9Zu9ZUQ5GJueh4VtnfX892LAsXpJZUytn3b",
  "key27": "3JF6nhMk4TpiU5TaDDiJ2pyRAsLyX6UVeJ2i1dsJC9VdnVRCvqvaQpA3kJFc3QTfx1u4WgjNF6MvLWncP9hvy1A6",
  "key28": "3t5VyxRHBfRuxetTyK9t4HnAy9XpNnA3Efv7q15Ai8p7UYjAiBtcEnyyK9RmqdgZmejnU218B3wL4qggn4h4jN1b",
  "key29": "2Hu25ew2Rk86gWoUTnAiuH2zXu7yViBQNJhWYxBMiXA1jxxdm9YfB5FMSnoHyjtnu7t63pbykrTH3SisAiJUVVpK",
  "key30": "5rgnpMeJ3fBxhx5QraeGHqNWouS7ivP1hjNjVob4BxwwEESHX4FbQFzjAFDeQL4i1Eceh3YccnDAXyVULvaEWtg1",
  "key31": "4n6ubJJmHHTdJox2v4b7qqecNLmUwTqhSKvNid9a7JnGCnvgahsYLYNJUbDNZfKnkvJFA8S9YoqFW5ETmz42kqek",
  "key32": "39texbXiKb6trGVK6JbaVgZwaeMVktM9ZdWToJZ55wpYvWhufN8Xnop12nyX94oGMiNFdV2AW5FWBtgkaNvsZdHT",
  "key33": "42VduVS4oz12m8cmjqV87chPyCqWGNs7qSnEf2Aqwrwv3zUkD2jrxAEx42BVGYDcDcV6z4QXhuw2NZPEJwaqbGtz",
  "key34": "5m9yYuVv1b7cPZnCDQFxaj5BW364JooSiF4qk8kQgve7wWWRadUKBLu26X9Ar4npTYMJHjB7R7BjUW2oQ2wZd9Bb",
  "key35": "2wrQ8uWvrcWrRzns4VPtkbe7c7D6xN7K6E6aAzAHdbSP9jAbM2hn8tQMcZRCukiawU1gp3DHfGYXAewJaLTipFbD",
  "key36": "46r1kwy4SKfNDRvnKdJY3Smymp5Dxw134iZC8RY4wcqzACZnndvopZYJrxhjziin6hxQAB3c7C9MBZkHfKq8DxSJ",
  "key37": "PKHB8kuuYonKTRt5TLVoCj89wntjmqjb7FJkR1Mu57ww9Eu9zFSKMxepR2zLkPSqbZ2i4CqwPpbT6i1t2eVx5LM",
  "key38": "4HBYaCgtYVWT1QNGa3dZqg5jAmNtxuhcQ2H2pb3Xc7ctsKoz4NFdye7W1WfPGbfJWrts9GLzJYnaLUsFGQiqfK2w",
  "key39": "WjSqtjjVP7ViCDZfapxqv8FNc8D15y6tkenCFVinouF1bTXXSXHfWAniQz9DTqvf5rs7xCERPzJ2bKxGLq9ec6d"
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
