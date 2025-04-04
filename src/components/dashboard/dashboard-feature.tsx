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
    "53MyiYaG58qKjHdgmTb9R1ryjHmi48i9Jc1UhKEuUz9D5fR8RoQ1XESCKyevV23yettBynm7MUzvPBvN91pn2UuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tRF76jpwTuKNoLSjfFsUfTEramdJQAgSWYdBVCzgKKCtuaySJcBPSAnZAwUgWs5R738MzjJx14myPP7Kx68vYSU",
  "key1": "5Uwg7fYeZCZyU6rgFBnKkF37iscuyYrkRkc9yK9Zq8QQGcoRsLYUS83kCfnxqTfHuGUKtFpWPqKCHQhmR7DuwJ1B",
  "key2": "5jVbvjLTEnVxWp7YvU8P17U1igmFF2AhnSUxv85NKazwYdrKyjApQUFAPigY256LyzHzCpDFUmxfLQXJSAFj1uFU",
  "key3": "52Cqva9H4AQ5R5g9qhDSxWUD9jtpsTmf3JAtV3BrfFhB4QLSu3tM93jNDmXFN1gV32asWevrYgM4o6R4a8edd9Fn",
  "key4": "3a8xZ85t4V5ZLNDyWR7hNqsrUnxwm49SWnrsAeQEaM1XDKDa1FbfCw8ovnpevtgHy9RcqadNrAasVzDqyLXUdabV",
  "key5": "5E98rSveR2LNb3J7JVu2nzZVEWEiYstuBTsFuzXFprdqoKEf1Enpe14UwuuR9NRHnoaZTNH7LJY5qWTcg328DjDT",
  "key6": "2QHVXKXAaYaZB5fJhn6c1XLX5UYAGMqiGNcYPumKqVoNqYcwzr7gSAbPbbPSnuesgCZjtB4QCpWyzvQL1s8BfMwE",
  "key7": "4Vm342xXj1LpjJsMmafbUaehxFANbgRgorotdyDvtFb3UsPgnApBqpZReHWHCZEtraypmkPr1W6zUvoBUtjXcPbJ",
  "key8": "3bijq99EcjhKTRPnncEJoDhm4fDGYmtLcMVEkU89egeGtWB4xLTm45owkFuQcTKxPecSjgRTrSe7DzDxkJy7YuSS",
  "key9": "42HUiQsbcKuE4iDBhVJqbqN8PGoDXCxNfBpPoFRtGno2g8e8dmEQySF6tiAP3NuaK7mPTNFk4j5SJgnmumkQQ9vT",
  "key10": "62oWBAvUHCtAPVoSp2zV8myZeAZ1vxkkmefTh1EVkbCLMDd7yeFURVFSQeeWLPJSW5s7rZYK1LVbnVjuG2xCQQQf",
  "key11": "39bffGrdiQXsspDz2kh5V6GVDL3LDMGwZEa1wXo1DNsxzLfHjAeW7Lxo245Emc5uHcuXU6Mw6mrHVfHxs7muoTDG",
  "key12": "D4nanNQaetFivKeVcELxfevKYtjvCeKuyDLUe3PAWceyLyCFkWfCEnM37gt6PDtsaAXA6hQSXuURnJJswWc9MeY",
  "key13": "2AEGcu98PPoajtRKNeBSYHJoMP8rHJAtyCZy3wuBTau78UeLT7o5UFERApohJ6euc2sFVYWvXvLpoq2egttxZQed",
  "key14": "rgcaPdDMkkNTP1p2DjcVSs3Hbpg3NVcjZK1xmdqpePmg829cqXCKwDpyZBVsKHcj3XykyADBcT4cMnmZaE6o9vA",
  "key15": "5WxARL9aPRQE3XoPg8HQHXmpoEYEEQcbZM3cpYDtfqJZwQaBFVWbxXE3cLoa2a6SGJGrHhdGJ5f3cLxanvCCT29H",
  "key16": "4EWGwzdK6wLLZoTnBHP2qqYNewiTeMjAzNpNUYMYD1zfNbhQ8yqESGpEBxueunD9Wp6thKyPQkBEBz2khdvAoke6",
  "key17": "xwi1NAVtRiFdDhMEpshp2Kdr4qKHUcfEK6vC1rNwH5QSRAX2LAWQLSniQ7brQE3YmVwMmxCVx4Hxx5FN3sih6Cz",
  "key18": "2LRTov9wZHxPqPtStfuLLkbHrZcGGggpsKXUaS9TfqBapke42YAy7JTVe7oKQ92DqH5NzHA8dfcZ9Yj17cjdhLeG",
  "key19": "3XT18ZVR8B4EKrH9eHz5nycg4yczwdoXg6KWsH7QrrrVGThkisqJaPehXmz82obFpWQpu62DpURFgehhreMtEA52",
  "key20": "2wmEHF1LHr6cqHP57g8HdmVZ9ot74rK4Jmztat5QuRgnZfXwpGcE1gRMnR737nTy6qZKtJqe56Wh5g3sdyuVDDjm",
  "key21": "2Q2JfGC9LGy9FgFJ7LFfLDjsctjc517TA2NsApVB9HP86RCMHFjT4E2HMp1qcdb1x1ka5bBvzQuMwzeP55nQ6JAU",
  "key22": "3XsL9aTcDshRAsTzD7qGr6edBGejy5TkTnhvj9DRzMS8UaduAqPrEQr5MzmG6ceac8pkznvEv1sj6cTSdfpjbben",
  "key23": "Vh8sFYNBtHj6aDMbr8kPRag21DCyNAejXqmrCbDjEoNRbyLajDzEYa6QpxMjWgDkZtLrTT4JgWntmWdZvE6u37D",
  "key24": "2CYfGwMeoFirBPUYqj4c9m1modWu1Ao8L8TUDo1qkbvccBt4HNkNZvXmo9W2bevXQH2SEdxLYtFupbjwKPCfk5h4",
  "key25": "66QVj6Rkpy3PJraUJwoa1ussPD1MvpsNxWNUsG21FwsfCXy2zz9d1sfDVEHk8kcUAV5Q1VdvxyNsWSWgjrpgkVff",
  "key26": "4vAx9hfg1wKiFL5QnnXsvjqiNUs1HPgzFd2fTyZ2zipQp8wPAmDtvpRCWV1XBcY1i3sKpBXbp1xC53XMJptKQp5L",
  "key27": "5ogNCvH312vnhZMrq7T1FzA5EDb37ZVSTZx9GL6nGqaJ23t9cWmpM8a7GuCDiaKJgrcj77UA2Tzq2Deadq1W87z7",
  "key28": "53qPiXbqvuAffYa9qoiVRch9S197f2957V4NhTR2Ec2RpSNVGnq5emzmdF26uibNasHe4Mzt7sLYKSd1aJ7iVxzb",
  "key29": "2k2DeU75WwvXw5H4tdZaWAXx6b9d8ZVNFoj434PdjCuCDxdmYxgiZj9vqccrieJqjZtPCD55tur4FRGDX5CWFaeq",
  "key30": "cgfiZqWcrXxiLCVKxTFhc72TA2nq7FHS9SeT8UBWezANCK9WtyGUPcz5VszAS3FNUTkEyWTvPp6rUkQCXK29PAU",
  "key31": "4nxsy1rGR6smDtc46TgbQaHtmY25EG8R5AdjCXAfSUFXeE71MPRCmxiRk4Yz2ZhktkSktYbL3aE3tNag9ubsHUse",
  "key32": "4UjKcsYv2SRw2cLq9rjQurAjxLxauUdEiF9wA6mj6bfFhwvcM7UzBJ6yQJseMp6jUJXvnBYUXvCJPPanMVCiAPEA",
  "key33": "4yRZgqSvK4NMqQV9qJnmGGpuEmH8LjzfhFte9gU7tUT5PuKoiNwsBxXmGaWgTUUz8iLwXuGgA3UtvCsPmTQ6Dzb3",
  "key34": "4jL5aTCzFN5MCkx5VX5ySDwzAzPBP4xYjP8R8r5Hp5oGX9Mdod6riC8xPBWkP9aRMzhGawygsSKXWg32UHmmCcWn",
  "key35": "57X4qFLSvuoBkFfFy6Xnyeims9A1Qc9ih61gHXJVGPAKyyY18ooqj88V51VNWfxxhAQh8wCJD5EWqHro6s3wwPKf",
  "key36": "24eB48yEieykE8UMT2b91q9XNURG1kHBAQtGX3hQ2K6hRHAuA4SeahHLdjL9eCRWHtUKBjmKpCXoFX3rFe8kpFE4",
  "key37": "4iY7GjDiuoUJHTkEYuDDN4Nh2kybnSEeNbTXo72CHLyCAoaDcT48z4nfVTZVG3gVUZ7wuj5AJUg3AkbPoeDrP8Sg"
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
