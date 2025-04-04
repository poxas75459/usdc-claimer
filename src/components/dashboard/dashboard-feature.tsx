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
    "5MZTPMFBsitwGdk2tAoKZnKczGRewCfQVSqeqPYbZ9yfhe45taxkW872iedbpypJ3tPvETgg1Nx3m4MtPBwpQZCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cSKxMALWaCdr9JdXvGuJQGXkphHf1bV9MPxhseD6QWzWyUyhRM6SYmzcGyDRNoMayoCzSx68bdPvoEZzFLGw6nK",
  "key1": "EnbSSmGtCuqvhD913sY17JNervAMsbPC2aMzCVjaCMEjxsHGND2DhF7mn3NKVVrT613FsbfWd9ZdAr5JzfKuuwq",
  "key2": "4Tbo3hGn83yGSB6oaH1boPnDwknBmUQQrvLn7Bo4b39u5Xdqmnf8qNGTw4DNWjVnEE1uHxiCacSxg4FKaj4aynYr",
  "key3": "5tTM5g5XTsZVZRaNXVEp97HkdmCGHCYLGeiNpPhisE9VnD7LW3suMiHnCTisKs7YBXhHYDE8NeVCVjTDwxuRXpgD",
  "key4": "59bud4fZPd9DfcxqY3teJtHVgiEXD3WBS6d2E1A6CtDukZAW2VZANbRMmn9tzQNLUNDuXiCFsM5gAiTGWGUpVizZ",
  "key5": "3sXkQQwB8XbygyzhGcabdkvVcqSDwUT2VL8dvXnNcjP7BLUEPVW3PqCrQ3p7Ar3WhaovHvp4FfAcHNEACYLyh5xZ",
  "key6": "24vKkuj1Qcv14j8tnq2NYXNYH5gyRvfPkaDSsBfpfYRK5fbqD43tsQJL8M55MrPHrnRtYffokrnamCPHXTHk8MBv",
  "key7": "2DgZopHXKfK2Vm6LX1WKV7XN9kFowmvzeXsyuwspuf8DHfkDdisFSypv76g46TynW8YbXpbnCACoihFFKwXxDSiB",
  "key8": "4ybSx1uTzS8Kx674MfyKw7QXA43RWGAtFAKg1uKsB64AL3kxBMdfzfWsts7WmxMLQYaVhuPSYoa9V7YGgTW4vX3G",
  "key9": "2n9tJynzWVWzL6wUGFmh4V1eyjzvkmxPaxugRz6taZh8WCyXdmLTEGXuArAdbWUFrLbpZ9FPfNi6U4pWgtVExkpX",
  "key10": "3vhgPSBjXJCZqBda8Vv2V9zcmtbzK5rFG8D2ndLJHxvhGfwzXgp73QB9qdWiodS618UCWA61Td5qLqEyw5mkc6QS",
  "key11": "3f3yGEavWbZ85C4vGjcz9fU6YZNHie2xmeWnKkzm9bBoNhx3S61P9opijRMbmTmKnC6humqqdqeC9372qMcuo99G",
  "key12": "42fWYmGKYzZ59HEkNRs7Rv6fZTMoLXXr1gfpPLXtMWc6rcPTBPmakLP5rSSWB3vKBZd8c94VkqRxPUnAJJQDRspm",
  "key13": "458TfkbcRuUJefvL3hdr5XJCbCTLEQu68NGfjBnS8aSgVLjmxkAoBDoXHaifpsYg6RHRLvZt6RsYKm7yjCQ5aGBf",
  "key14": "5fsVpdcSFazjVTF297jAFho2dLH64KK1NCK9ubTW5UoahQ3sfLGT153k4C74jyiJcUQaYBG3Ap2pQk7J7PWoSCBT",
  "key15": "33jqv5VMj4zJVUDTjjMg42zKc61QHSxixGTjyUeJAuaMMGivsSM7VyCZqPNVRtWWnchXmyXSDzHNJNHbbLTJjgmo",
  "key16": "3pCHYDQNccTCxZsY9XDn85kQGGkrnCtHBEqro9t2y5VKA9Knxgs29xc8UXqztjFALh71EtGeUY6hvVRA1HN3p8yZ",
  "key17": "EiDLeY93jXoN9w9p9MsCCCN3uPXqT2919wQXGMKhJSHiK3cWNiQp23bN5NnjkVHWKUte2iuiz4Rbde6ZDEPH7RH",
  "key18": "44t6GWPzCSU7swx92yGwhWfkDUebd6p4r4NUz6McH85iKrmbRRoCvQJKqP5i3hX6u4jcr7vVEx16Za1VqR6GMxLT",
  "key19": "2B6bagSBoiyxTEMGWkBpTS72SK8A2oCRzAUabfh5qnxHmgJZLcbQEFZotAtpzKC9JW79k18WNDtZNGzRvJNqicxp",
  "key20": "5Nk8bA1mJbP8BQooEh4BFHr2fcp1bsytcWiS9VjMQYD4NmRdVyt2Tk4WHvAWWHtJn53RLNbtZFSLDDyVC3SejxTH",
  "key21": "3UPCgDf3fHFuHGEN5Z4icg25Wh5NwbHBhtiGfHecXMFHHWKWzKEPpopFiwGY1sCSMaz9FL9bjUBLUhHf129dxVse",
  "key22": "4TsqzthgWgkPVh5m3gdosrjPomhKduaq9PksCxYtjj6RsREwoaJRnCL3T4kY4wPTg7kBphVqweQtKoCShgWao7PF",
  "key23": "3EUnauViQ3pQmwoj41f44w8oms9xgPQQFxeX68KaNGHXjBKvhThjz6V8CQ5SLppBstWwjpcYJfwneTB9xo5jtnTn",
  "key24": "21Z6jFzyhYTD2tt95sVhEBw3aDuzfkxq93Ppd2gXiQgjUwqshmf2csYTEGKuPFtG1uxVXdK7AiDDYi5TZTdqKsP5",
  "key25": "278m9v7gejJHYjz5LXYnipU6kuNtv81ZmYNL97fT5bA3azCENfHGG7TUfDWvdYsaywrqN6JDrkGtCeqwxQVUA5Mp",
  "key26": "BYtpKWGyKjxuMokyqRb2F4shNutmhYTbgJ7F8998DMZ3gaturYKsmESDp9djXH3jrKumByRy3XEkoVXfLDRasWf",
  "key27": "24ZnyE4SWQ1EtBE9e6pr8pQapK5219hFPxU2FgpmrssGmcbWKGbNcSxMiijBpZu3WggRouhzvshBS25GYTMYKRcQ",
  "key28": "3gNVoiewC5NaHSRJecKUzmjq14ggUX7Tvvvs4s4X3fAHTLfxA1sCvDARUA6Q2Jd4ZHMFHmCMpFhQ9Y7fsR21sY8J",
  "key29": "2ayTCh4EPte5yJgSPWDhKRG7KnqMqinGJ4gQWvkEyWPhmUEpn6yDDq9FxN4AiV3zDzPX3btnp8pBgCCAUhpFYHpW",
  "key30": "FdBWfEEyadebk9x1geywGw3DPAZ99j8jwDhy7tczmDk6r1X7uN6ysZjQUHqLe2Zrqh47Mpf3SxgrYRXd4aF3bTY",
  "key31": "4s8vwsk3t1p4oH7qFFYSDpQw1QP4Rm4WVcvwohGHCVxP4v8Hrej2N54Zjt7bxeqitSR6u5YkTctTJZ4EQgQu613E",
  "key32": "5gX9hdvXV65DUCJfRxghG837Lb4L5aMnyPago4QMCRVL2b5SeJSH8YLUA1na1voWHTjYG1yGDpLs3GcnAbnfUjpS",
  "key33": "54AkZJ1dXuUwF262oiJ818wTJhu8jThz49YSmjNzhNgcoieKG5RTyUTzK1LfjDtVK5tZhw2vXBXkuZ19M7bgVnLG",
  "key34": "3FdQSExqBvBQbkaPDLrRX9WwuK9Uhx9J1Bg7F4qfzWsing9erCG376K95B8PV3oyZSw9ZjLyCvp4tWhM1xxbP9Y8",
  "key35": "2iMiipAx5NWLRVFNhmQ3WmDi656c2qG1ybB4GxEaYdQT97EygwT39ARJYxfWhd6Xs7ZqLjdnVw7GKnC3GnNN7V3H",
  "key36": "XYSNuSkY2MYvXdmUc27Gm7KFJ8zpYAaUe78ERyEgvxKDsGW3WFv4qycaFiR5vqE3oA4ZGAbqzKf9EYfHDW7w4Q3",
  "key37": "2TkjjZKwrpuKfk6LWkbosaa6AFnsnit4BVxYFZhPurbGsYbLMSyjC4A5SZtzKF1mqB2JbvnC89SX8cQ2DF6kQiwF",
  "key38": "4iFS2Zx9Fo5nfbYWHzWeDcq93qXNcezxKEvZgq4CKKhFo2MsjsqD2uirrmc2mgJYxdsB5Qv3PGJtzkiQszth72Pr",
  "key39": "3Zzi7Sn9T7H7m767yusEnJbuwrNrnytq5K4r3GqWMihWrajcBc9f1rDW9zRM5AtN6KJWouqvVD6nn1gnVShS6dVD",
  "key40": "5arFWWTR38crJ2iHJaEGkGBsdBUppBzFPq1gPGpQvBFFAgbKtbVsyVJKSLsYo3BhaieMtghP7GSaGkHv5cvVjVxb",
  "key41": "4xm3uikNrCQsFTnaH6oePK2QruBBKnSGBesCBXbURZ9xtvaTxC9k1gt8Kc1HPd3PgmVr8W9CbrTMUBBX2EnVyu2J"
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
