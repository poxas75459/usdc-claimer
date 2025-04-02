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
    "3virh6XVyXgGRs2nEqwz5LSJi78Xki92TAkUfmfuyheZ1AMauegU647u8sCTaSh22avEbpN1sMrm1bPBnyA7HQ6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ypx8xsvfkT6Ks1ZbKvyC4RKmktC8MRsRGVopcxFe5YbFabESeCcNJdwB26HcyDUEtv1yUEtjHQUcuHFUWcqokaM",
  "key1": "n6qbckaXpwB6o82biEZSkZjNE1mBgJBXxHW4qU1ZSM5V4fkbnQX3DJhwAZWPzDqyPc8dG8zZhLfCiWDkmLWGNEZ",
  "key2": "5m5cyJwfXey3uexWB2tjMNjGYvwYkBkCuHX8pirfMBftZ9e228c7yFuu94d1AMd6rCXeENoJN9aYGCSkvoC9HL4o",
  "key3": "3s7JRhXKCCWYTWdH7fR9vFg7vxgmtLHMFskievDBQ7okNfaoYRHiY1es4XMQ3HnhZ1H76J5yArPiAsbdxUPdjDvV",
  "key4": "33tXqM8g2kAXMP6CgKUD5buzH1rqiUxgUYztWJu9YwuEQmdHoJbwHwhuihDwLu71XBYbqpnnwTLGR4GKBLQbbikz",
  "key5": "2gkGcEX3fncEDF8F2tbjN9MgouiwinDwnYGX7UDXHeKi8xwcTgNXJRZ2j8gozcze2ygp7uY6ZzEVwEiCCgtgHTnH",
  "key6": "4UK3veSX7Jat7EU5X6DuEQbd5wQmZ9vi9KnxjSaXxP962kamokrVjaP6mewvuCseobrwNJdMhxFJXJfiefJBdNr",
  "key7": "2Xr7Vew1JKGv1ctn6XqEQUkrFyiexZGBiq55sctnSdnCWExpZYk14YnjoGCmRaY8w1jR8XmpfNLjqGWp9n6LhBoK",
  "key8": "Fhye9tkhRPKj64TMDUVXWK7T5BDiEZrdaSoRiuSwB1LNfaU9aHLPB8pnFNRJeVfZ3B1zR2aRmZrUiebi5wwrKsT",
  "key9": "3v77RuAJa7f15eGGzDRDK8CMLbpWyuymkUbPtzx15fmV2ZAb4KvnaKWgYhqwndweoE75G7v2YuiXCpNWSbgn8a41",
  "key10": "62pRDuXgMZ5LSTw8ScffgrtuQsowiJZwGqYzpM7UPRiQBSwfnC9m7msx7BzmpCQHg7CH2ioHfEoatDzeGc6R9Mex",
  "key11": "4WTxHk51YkHVXsspQQHBDETmyRwsMevnv9NPtQjyUakJj541PqCRshzKvEUf2j7oZ58Tyks9wtWtEEavtVAxTw3i",
  "key12": "2MDSeYwaiUBe8YFWnowJt3mfSkv8iD2TPaEyMtnSruuc3p7EB8WxjDFRL6knPhjYUwnBFEeyDEUzbzoRMuMZNULE",
  "key13": "2qfCnA9X4D9kpSJU2HfBMjCT5DXjkNAeRPsjnMSVN9E35Uzv7h9DCQavkhCvQArjCK89VvQvyiVJ12BFUumBiHJR",
  "key14": "3cyo7qbTsAsGNRfCj5YqeRbrvNJKPCUGSm7bpQqQx6dbBExgN7eq88m3FRLFdpmtwxNnwENYWH4EJRqJjmbWfHNH",
  "key15": "9W3uqyy9R6wxEHZM4ZWywWt7VDUynvACj4AvFyDxCVCbyZMYXD4jJbvKgohnVVZm5gNiaV8R7Sjiv6iTyvrDg2U",
  "key16": "F2MXVkLCiZAXNTZgwd2AdN2w9cBqjFUgL99u4cu7nHxdLp8Ek6MXFiLc55FAuMfhBzvX59bpmzq99LG29XCy2fo",
  "key17": "2N6MJj19k9EmjTLYeA5XqFNBaoTk9SvkhpewaJXYDyDDvztmbkkuJgfyNVXeyVj3nGbMJK4h4KEoJtKJ7fj9gdWi",
  "key18": "6J8vTdX21g32bMce4QKnez8r39vm2GMB6HAGrerph3DLTdVFDvRPTCcfj36r8fNqYEXBdYZuNq7qrgz35WRxpjt",
  "key19": "2q1zZM5yFAhYHnzKz4XzLw9sjanqDWu9asgCKYu3LsR1xWfRQLL9s7KtMnNFSH5JGinTp7SbTVncDB3ZGYT25hzt",
  "key20": "3pqAh2NNcyZWJpVdHhzD5Yq1jvEDSj5MkQBqLvcW2qig2KCHNCXL8Hfpt9iNCMERGZ5So8Ka43w3qvWh1pp9gmK3",
  "key21": "5PLBh8fm3uevyhbXme5W8u4sXMypduEpdeZA2WpZpnQdNr9zeSSnn7zkom9Dei6SpPLBHvAHiuoFyAdzqGd8oKNr",
  "key22": "zNRCfVqXj8d91EDqSqRVDwYUHm11oHbdrg2YbdUG8UbtLYinynWAY91hFFQcyV8Zv4babKQMnuwCvXMoDRxvQoS",
  "key23": "4YV19WzRr8N9ufQuPeHC3wySSz6NJEpsEjPYqMihJaKzQUgHXvNJTuiKEb6g9PZWW676oXhK4WofVJUSg1T6RGnM",
  "key24": "3zqpcP9cWAgG1E4nU7YGKPLRDouzSZ7X8iAfkM6Qqv8DsKZeYiL5zoHsY3tyRQPsvwmejm9pPH9ys9BB3hezyEbG",
  "key25": "2fPTen9NSXCQoF3Qx36uFo5TWg6CY9XD557A5F9B1NmMhqyPktVrrSKTUPufNdLx57dQXfAsb5h44FBYdbJbev5e",
  "key26": "5UhLDFKM44s3vYPZFVKw4pVSPoQGrNpash8dJCgBopQDD4kW5X8dTuLcSc65SKyerPX25TtsTfu1c6RREohchwrz",
  "key27": "2FHJDQe6zHK4BgBcVdQ8X8BQZas5HWFV5LJ5veW3s4HRjxVN2yoCPk4RPg8ysMk2pfWa2wGF1rcUxTgFWXBR8q5b",
  "key28": "2Dz6ADRGkGYqkvian2r9WRZfsuaH6RLCjUKQvXi4mWyoowTbk9hzFLXirfVnuhiCKgxwFHV5qW2KD3qgjxzjDb1S",
  "key29": "QiLDdMoB4RUiX675nxXeS999koobDLKjPuR2p69R19Vw63r2Qj5fJeahd134GZ3gSNwpBfyit3hxuBZF1LTWbBj",
  "key30": "3DKMY4x2XJVydW3RaCJxbBdMPcskvcyphEP9FEgqMqhp9NMCT6B5j9b35fD85pQNwHHEbqNfULHAEwm4b6R6jMp",
  "key31": "4PPfAhRm7HjWBbvijway73tuKQ3ki83kkqWxSnHSjaxFCJeuWhifkVjboKoi3zgQGyA6iE3XhybFvEtyqw5KMXgJ",
  "key32": "39WqGSWHEGJSDdCEznTsqtPweEfoBquwZ763TzBhQCcekyY64SQhFZVFiFTcpgJVrKh5pC8SXkYUy7wPR5L3xYcn",
  "key33": "46F9bVhTCmQGJZz3EhDb9asg4ivTQ56yHVexP8YxLRsPsGA5tv2TypGDtSUCQWGjMxebbbmHGJGxnEWx1SWZuLa2",
  "key34": "mxUriYNDtR6iKQDUJadwwD6K4Qxrh3u56txUEVTLpJN9FnrmV88rkEPksNtkTxpymvYHEGQHRMLiL56YTQaDtJh",
  "key35": "3gvn5WBrsUUvzkq67EGRTtNn4WWpYY6rdFjzwXzgDrb4cdbP4YhdCmjmEofBJpkA7aTy1zky64xtV3PZgS7UGGRc",
  "key36": "4tFUZJAD3w6Fdu8TuCPzRsJGEtpwNM686gS4iEuFYzvc8rBK1HwsQCLEqWnDrXaKMT6QyhJ3arb1k2XiMs8VL2nY",
  "key37": "GJNx8Q6vfZdWiH1dTTGKWB2626dfgDSuQPMjdG3J7wLWnmDJeb8myu2jGbhQPJQHWKDUvK4LMmq3Rb5skqGtFcu",
  "key38": "sZrW716h9hoXojpTV1bASXWK59ZLeU7ywWYGZrCpCt5MoYHrRDW8yRmmxrRBLpvKFo6z3NF2QGvv1ye3gnBZTmy",
  "key39": "3hJqNXB4wDCR7j88z9vk61rDt6975Z6dVB8aa4Ln8TotUvXTzXWzu8vRZWKLJJo6vJL5WdRVwq1G8Dpn648DsZVZ",
  "key40": "3h6DojbRyz1P2CjvF1cYHFMcUX9UbEaKB7DNWo69BxbugkjmAsvqeDYbxk16Qg8oB2JyBqKuVq8Zh2JBE4KNEhMg"
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
