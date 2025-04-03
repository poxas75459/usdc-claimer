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
    "3JhXHbx3hjtwxu2t2bVo6bVJ1q7xkNcHT9joDc6b4wyL2dxciYTgqmDtDWMcBzdiyHSJfkZic9w68jcxYQVjZ4vJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j4qEFbfZGkuBQSXmP1xGoet4eX36iV9FGoRFH6eM8zXmn21mmtgXPAeeDc1c3ezxeaR9TxDkZScodZeCaGmSziR",
  "key1": "2Yrhie1Yrtp1DnQSreR8L1PZMpAtJGmFYqQwXQGhnPzRsh5YeLmrLE6a1Vy26Xax6Wh22spx8VpeNdYwYDCSQBKe",
  "key2": "4CV5nVj5bwSnJbC2CFfdiirb1Yush98KaPaFFCet2erX4UuvPQpG3tkSBwptNdVG6yHbnvFb2ky1d3Lz5g8TehBa",
  "key3": "VYp8SGnb7QmjQ3hgabWYWjhiaKn166XqwV2ZFt3unucdAqyq7YKCJmn3YEoV1VNQEpdFFiXwZ14qxBqpxR1rTy3",
  "key4": "2EEGJmmUpZMH1gwAyziGqDRWAEwtJsvFVj7DdpnxQ8fzxjxzuctjcC2hcyAaXadzpGWVZ7gV1QthZZm2NpmtW8DH",
  "key5": "4TF5qo3UMUznMm9S132pLo7ZKac1YJmXLATrK6tVCvwZHVA1YCZcYpiAqj64HkJ7xc3pDwwzAGzvHxDUzsVqgicC",
  "key6": "5tJfkS1P5MKXo65Wuo9y9afpAEnKtwoGw8mMFPwxQNC92LVgnBzEV2SSSihfAuEuWE7MGrYTEPjet9dpRvnGzhM4",
  "key7": "RbkPfHLtiKDNeG3Qq2g18xyAa6VY1y5BDSdvsBCrKnsaiXBn4KxJTxrJgTgt22muCE8Va9rMtrTMV7kg71gNX95",
  "key8": "2pDDVZ3rQmizsi7YNpNHVXg4DfDcuCvdA8rd9poVUQZMSV3g5TALnqAxDbacPZ5rQAHUcjBteGmDGCs2kmGJqDvq",
  "key9": "23v7q6tZPryN43PXX78mKbWy9w2nZZ84n7adwdWfdadfh93yaQDB1Lc4aaFJrsXW68biZnFkj9rYvREgJFJkwm9y",
  "key10": "3qUauKyXnm4AhfpFEqfYREiqSX77mW9i6fcj1yh91Z6ccuohQuV6AdqmwWA7GxqizWX9Qm69USyR9uWecw1xjK1T",
  "key11": "5iA5HMQWh5G9WQWVbhGQhihVU6ardSwuQ4MiMgkNMmUyfgmwwYbpSzC19cHtFwVqKwBbuKqEGE1Dn5PTkcuErZTU",
  "key12": "22Acp4FbjGegbw9vgW4mkM3F2RRQAjr5SFiYqCVd9ntT8dMTWxo1miis8sEzmsCRTjEHeroMsRmSoafkuQM5VyYb",
  "key13": "56dyz8UNttJqES4bqTFqmmGExR4CBnoWuh1sLW5T3PEpKFcyZrVxE1psFLhM63f1CX6hdiMHbxJykNgU554V2YdD",
  "key14": "U2GaNSD8perAaHHw8L2Wh6r6or6WkFm2M6hDgKrNdVDhq3ic7DpDXwypS7wfyWU7H89ckuXpcBVRKciS9nR3yZK",
  "key15": "3sJdHQxu6cqzZtTAm2i1xKQ32RiejDhMSbgEkepwJQd7yW5AsParhrD3uruWrGyeSMGtAr5QdCKzYaHp16e5DFyS",
  "key16": "4FeWqLU1AfVK7dnNeH76MVwqWUfdN6S7AmJKYukitdZovUUWmk9GHUbV8nZ94pdRqqgS1RyXGdD6NQo7mPoxPHF4",
  "key17": "247Fnqnws2iJi9NA8fa25jWKnMFb5eXRCSQ24V6SFrkywrjteX98gR2MgFBhATJ2tjeJ8CNswtms8nBqMWgYr5nJ",
  "key18": "tBs4ZQhXuYahM7ynuZfYntraCfkHL8muWJxfiGCYtNKV3gDMzQXN9esJG4Z3JjTd3c5Uh4JDghB3WQvGcEYCjuu",
  "key19": "3CdsdhZsnmFojXbnkuRqcweQFVcUB8NWjTSqq6jqUkv2eLCZDv57VcXopqmCi7DJish9qQ96aa7sMFmKiMCe5tsg",
  "key20": "2dLxPL1WbHgrkx6gz49qmiJfZBEhZRbwUzZMrbZ7DWYbGmN46bs21T7ARAra9Nu6f363G9EoTXwMi9hJ9ghJLGp8",
  "key21": "5whxTJw58v2RA7t3onaKuwPR1XxRnVFmTc1tGJTvxnqWVZVuzsHn2udhm5gpPJLsC5XnPWHAjifg1SPHGuB2df99",
  "key22": "ejDz3BRDmF9t89GoEhMGbB4uYY9TgYH2p9dBV8Fb2Bo5Ai4274AQmXyTr9AcpHSnroUeqafiFA4HuFTeNDWf6Vw",
  "key23": "Qkj7CSNBSsFpS3gCFjfnzLkbAuSpXgTHdKrNYYTcaTFBNrYTv5h7PULhNZ5U4QAnTn16Mja8nHNbsQ2awpabmHH",
  "key24": "37AYWqBmx5cDifL6edkbGzKMTfRbfmBamo3tbLJRcZcvgDQyqA9D5kFYxA4YKFvhieBuVssJqszwZUB5JgSyafFx",
  "key25": "3DNuDbmJQGHRW7R6us4mNaCtZbc1om28R6JrVSiSBPXhKBaA9zYD3HNqHxshgAkfGgT39u1d4bF3pGMba7W2YQdG",
  "key26": "3FW1njGAWWCyiMdVMBePx3RpL2bnKHJGtNnYochwAMFBKDuEve4T9gJqpH8sKWh7reYxBtSmenqMvaTnzhgaFLee",
  "key27": "4KiCcbbX6YthovgzUy3eWnJgZgPnmBpwRL4QLz94CpWKLUjbGqLnRv9pKDjijaJn5YeWA6gyM1rPZ4UzzvCBfw7D",
  "key28": "n5JBdRNY1NMGiA74SyvTnmgFs1LTYU6VyNASMSkvovBYhZZ23tDfCyU6mnmt8BkYSWvHWtwMFvUTu2fudmKHiJw",
  "key29": "5C7sDzDofKKuhHZ6m7gd1XK7WenUMunb6yEWmULnLJL8VqgzqVTAE9zpdy8tnrf2FfusZQxrCbLEyr6CbRzuToa4"
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
