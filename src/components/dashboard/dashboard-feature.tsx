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
    "2UH9CReH5jmLFT33M8QYVgUza2MFZMDXxgP2yE1tzwwBkQroCgrP1Lthjzz5niiRS98BSCrBNHNRtsQkBkQtJKhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VQME1hPQwB2LKshArDDyz7Z8UmXmduApTm54Jk4e1G6xK5dpvVcvvWRdCoAcqkQtvqdBNqHEikpXRJskZB2XjmV",
  "key1": "H8WmXmS1BeSFodHMaiNjgt5ZnzuKU2ngvwRCAUXbPY8C6PvvQKvCi925eKLmNEbo8uYWJKpLpoCZKPCueJJaNws",
  "key2": "3ixDWhgWC8TMwxZEKmxDDudzkvHD2QZejPLEudCvmc51BB5xS8a52Voqd1a9WkfwA68h8Fo59UGrbxTpje5vDnqC",
  "key3": "468E7j6FjKocHk71rR4WWqpBQBEccVeSXjNPNTCJ5tmQCFSHoWSVd6gwHT7xWYD9K4R9yrGJT62K6T18hWG85aNA",
  "key4": "3vmCUPKfws4vfm3mfE46Tm4t2xCC8VsVfcHefMKWUx7P8YEawkKG4NKmJmHvaoyesGVGe6bRboiEBVQ553uxuaHn",
  "key5": "5Ye4GVeaEhBTDUEvsD81qTvu6Hc82To34u68qzuM3LBz2HHtgLTtic93yUbFay2c3G6vV4gWYEbEm3WiJDtWj4vK",
  "key6": "acem4y9BRogwwaMT6k7np3pqHEzLLCU5UzvjJC9GJZr9QnA6zfysn7ifMNnP9uwmiAYWA8nV9TZd8ZmxwAxaFLf",
  "key7": "4B3ehGk85otzE3qQ4iRAhnrS1RxjMv6vtRSqC9FHXt1QJGZWWhjCmQkcah93E1iGvh5jKc6TNP3WHhLBxR9ncjyw",
  "key8": "4HmxV7C5SCazCpQvRSuNAjFzzmuTcha2B1LjVzKAnRmWK7X1WTa66M175846Ygy7t2AS9HJJy1XKXaEtrsy7R3KF",
  "key9": "QEx7GcPJY4SHcJLHqM5HguLmJfpTT5SnAJha6X5bbJjQfUaqUjob5oXgVzhtvG9PE4ncNnqaiJ2DzBx2Kg1L8io",
  "key10": "2WUB9rmrQHr3121FS3wGYFXfRrEpGAXC65A9A2XjcggkEyUNDW9pe5vnMGub5GTwyN7oR289tP7EujwCkBNt1eRE",
  "key11": "62Qg9nmjfdZrKKhNga6oEPbkp4w3H7JiXGN183yPNtufWBda63C3i2eCcR5KEoRD7CsQW6zaEysMY8DCKeon1fD",
  "key12": "23JXdADepRtrKUUikYAYbsuws2v1krQWWjNjPRLAcQiht1GkK2FccVyteYJzhLDa7c1htNDsg9i74pyJhiNsV95s",
  "key13": "3uzWz3gavDF2hx4HnUULoXK1XnYvX1jREzKvi9d5zBJg8KYTLJAYCECSKvT6qerEHrXUaSUAtKxdZVd967NjhTze",
  "key14": "2u7pv9tSt4hYfADigJJQBzowBWVCcWhZHXNXYyhPPYufeJyanK8e3k5KvrdpxBSynVJXjCc9w3ER832cM8UPQrTK",
  "key15": "5EkWGdwUtCkT1JVAnw3EgfMJkTDSqAG79hjG21DT9AgmaScxvPJQYpwMBVweqJ3a3AijN6ohUtsSg2fHDnG3WnJC",
  "key16": "ZNbCnTb4NqJTv5cnE4LWKyniNYTV3KAPp3rMjyoxonSqhHBo4BPKGYJr1U2a5NNhpDyKhckwJS7xa7utC6ti5qh",
  "key17": "4pmXWHCsL3Af77yW1qzKPks1d4uxrFd23qXwzAum2f3zGsJRXbT4bwDDgwnYVHEfyj5aLPTYByp7tuJRRq4xHnyx",
  "key18": "2yQcj4QmShNCo54yBsGCgD7uZWY5PYwhgDubsXWisKW478Hb77xrs2CTWffYeXdHAET6q5cirWWtJQTtEd3aHsEL",
  "key19": "5QLVMmtrsE1aSQNaadzigSfTENrHZeuAwhXNW43xfBn2jRxBSMYQmBXAR58mFm5VztHgsRSVyLaoLgV6mCc9xjSV",
  "key20": "2YMndJd62ADqTBWZ8iYnd89Cma14VvYZFCAwX5QxWqsadaQV6VYfwnxySfEa1eUuYZVz9yLztYeuETiSefM9kPzu",
  "key21": "5T1wtdQERCF6okbABGd87apNJsnf7RNqY4MepgHX8so11B9uyq6eZX1oJtiZpiXi9YkXRHUXdT7jEKoVKaoNZ6TB",
  "key22": "3yysvLPCVsPuiXKeEsK6yQM2czzXWkp4TPjzBheq5uXvMoEPiRCjP5jeqnsJkLQFjjsSUzEb82wCEsTTtgsR5u9J",
  "key23": "5jCHjdLsWtByAiy4xfVr9RP1W4DmGGX7TuD9PdpXVc1CZCupNsG6Fdq9mdMNULMV6tTBxBi1f7JucQBSEJCi88Ec",
  "key24": "j38aS1LQ3SYSyKyrhSiRteCuY1kDLDjAiAW7YqDHhYTH2wVR3SuUiVQ81XzZycLUY57Lq8r62f4H1XE4WkPwrqt",
  "key25": "3sQALugoVCXBGUDp2wgZeuq5izNESqrrSKTeBTPcqim8oisBfr7tDrSnnLLXz1jzeNkFGT2PLv1kaQecB25WYqFN",
  "key26": "4GHQ18yPBU34RPcFJppSYhFYfr5EjGVSwdVfVgG6Yuxv7NVM1QGfZQ9LCrcygRctVhznT8McAME9ZWBDXXrVA2RU",
  "key27": "jTb2xfrF6cYJaAT11k5z3QDopbMVjFx8zbJgjDcCdFiFhaqWdUZSKD7iZWHbqXYeEEFC7LagdvvnJNBaPavXbgg",
  "key28": "5EuKGRckTnKHxKBDuijMJyNZ7ZYQhsFEu8zENfv5WZ7x7B9SG8jfZM5i3S91JECLyjnF5qqvwwcSkYiLaL14aPSM",
  "key29": "4rMgj1giHtLPoAQ6BvRnb9PmEmvvNi5EiFhpWSmgjPE3gf2QF3UgfGdGU1rswdeqZxRPZYEuuDwCXU8oMQR9Sdx4",
  "key30": "2UEsytYnyUK3wWJKjdiM82rVYujjaTayuGPP4iknugqJVzMHuWbQz64zf4rytnq36L8h2uzd7VE24XoL6S8SqpGQ",
  "key31": "3uYpZmrJNfmaC9gNF1c8zsALQPGTCHEuvDAZ1EymiGgucU5kzbjF7Eoo3n4nuMSuyVJEFLPk4zjQwakgFZd4RMoD",
  "key32": "3SVVuoeecAdjKXdppu1FYfiVU1oNi27PjBomU1Xwjbjbfep63RcNCiz5Fmegthi1BTrmrDmXGJcsbHvQHvcvjLyS",
  "key33": "2LFHjmeggj2Tr8ZtnfYvKnCwCKXcCK9aseawkWN6HgbQoW1vSEVjqQRebvBM4hmKkGvhaS5YDDCdF1TWEEgybyWb",
  "key34": "2u6ecq9MXf7nBX1FMmVyUsm3qTBccgZHBo9dpVNEJLYzFQuZ2bjPv6LTJ9xonMegDpoyvNkAXZi8r5yjg1KVGjL7",
  "key35": "3z9ufrLSa1DAhTvAEjKXy51icLW9djV7FYNifswev62yG87BLYeqdPUjTKDL4ZS1Zpw5Qi6z1xDYQ2SiUNJ2jivS",
  "key36": "42Qo1pTbJkKybP455xUDwoj66MFjCozYDZC3mU11ZsBpvcAutX7kkB5ihHaKuweEBY87UWA49NXFzmt5N2qLKFHu",
  "key37": "2ANYSDQWpwfzspSoo2HVrs3huX7RKFYWxAPdWCZ9HdSeG4HLjWFYiCaRgneboum3XGnzPSZacAau3snzs1a6kWTC",
  "key38": "2nCE2FEyAGUUTCBVYwhFFcwRtv8aWD2dSRXJxMN5iSsb7BDECbCnuB3GefX2nE6hKdTncKwA6KNZWuPFxQiHtXNy",
  "key39": "avt8fULHcQHDb28gZnJYqpdjNdEL2eJg5vaioUYB91qwbuHJDXgXMyi86ifDrL6A7DPCCoCVY1DaMKHukViiMdj",
  "key40": "ZpygVoWrRkynusLNkAAcfygCWUg6zKvKKGG8FFqDYvKb7pj9FC91ebXd14zgttTwbHsgyb3GcBfbsN8cSPZNqHE",
  "key41": "23Y6CBgJL3gGP5kUXHmhw5sXqKyrC6mriiZ2YHrrg8PzitYCp2yB1mDMQrHzWnfBJkMNKB2tapWyCPQJed7fKP3J",
  "key42": "2DPQR5S3fnsiZqTs3LuwczUQ8zQ1DqepM5MUo4jfhavyC7P7dCe5orfM6G3F5AWYDZcxKrzcG5B16qQGBngMZFU3",
  "key43": "4A8duhBPtRsRPQKDiGNh1xf2xADAH8sntN4rkuV62mycKHq8mFdPVPvi7C8JxB2oeKU5GcCMLiPmSJrVJqvcK8oa"
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
