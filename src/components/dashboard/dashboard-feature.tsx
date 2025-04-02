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
    "3YY35g4y4eV26wRp7FyhfEchc1Fqb5SkyscYBgT6ptCiQYhxp6RFvqWz9Ascv2HtLbo1nWouQmaVBgHLhvytdPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nD1CCuDsSFmeGq5yTUfGy3azZYTU7wMw6dXfG8UrrbBjPfBuMsbGzuZJyA8jQk8cXoohkp3geTca8kPoR1C4KGW",
  "key1": "45KvUzLuCx4LgxzYs9ZLFoUYKBMeTSKFyVjLiVvJWm9qESrL7jjvx7RnqMsd9TX4y47aDBEWJxLtiXXbfbWX4hLm",
  "key2": "58FqUSRNgV2osMM6PuJac3H8Azo9Qor9YYjJvEpZv98T4rZHH7v3cNBPJVn2cg1CoZo922j2BidQGSwV51Eq9x87",
  "key3": "2PnbnAuCBqrtpDigQbPrUCDTNPTwHbL912D2Umm6hxdjg5FsWbgsssBLTdHDwkmVVNdprJ1bYLX5g1H3Uu9XGpPU",
  "key4": "5fTPzAtJnFYMhBVpKwgn7ue7jtsTg3DGjsVGfK9JHx6uq9W2rQ6WqX3LmTcjzhyT3GGTWuy6mBjj6mQyJtPKa4p8",
  "key5": "eRjWd7zrmYM1GgXC9DUsrMzL8sQhEPVzp4BTmwmJr49ZcgKQ2Ceat6w7bo65Pbobz7NgYydsXAHA8kZ8sPM9Y8F",
  "key6": "3rcZaptHNqXDidh3vDcVZ1cvRWMJcHFkP3Mohh2YtVWR4K69eEorX2LumfWCBfWaLMcp8K5cmw1qX78DYggzLCcd",
  "key7": "3U2RT3qUUkwwevpHtfMhZfcet1PnicSuf2XZnoHa4VR1HfiyVvp6Q2LjVaWU9xjuoFVvAtFBjW39GR8azPxQkE46",
  "key8": "KVWrj35PbVvVeGA5YBrJvr9hZ3DxGywwdrbT3y7XDhMjWBax2Fq4buVgyvJSYykX9wMZ8ad1WnPs62iSL2S6RoR",
  "key9": "5YHgUQ7tAh5FvxDeXkYMq4N2SVXivghVyWKxMnax8NdXHzoV6UTDqZ72urBeN39KFo1g1xb4ebvDPBFBWShLmiba",
  "key10": "48fRfGbiSNXzKTxqxTLSsAnyCEQKVh2UfpymNdh72KkK4ziRNMXbsqaUrvuhLDtxQ2z3pKqvf8zwr3Kx3RWfx8pF",
  "key11": "4P7ZRuEhw9x6EJ8Nis7mdRXhMmLFEZfpU1gxNjYAYXoYFxSgoxJ96BdwVRGaptcfTb16zxMrrB2KFKyBHSwiMh69",
  "key12": "31BBMtL7KGrVWH5R6xLyhLoGFpvuuX4qjNmP3qAp14Ui1E81LuSy7TKc62DJdCKYZt5buFmqezTNJc1s5HJPYgXp",
  "key13": "5uwmSCtwVdZPgfYSKcMcMpZw15UfRLBUZQqfdkt9VJxaZxwYPyJbHAMqEHFr7iMTghCP8C4rkxsGQ26dapSALNk8",
  "key14": "64AZx6hkGbDERXU9nbx1LiJyr4nXWaUha1nMJAoxXcBm8LUu2zE8rrBfVFjGMvnhpdivoMu67sJH4FwjZNZZcD3v",
  "key15": "4GXeSea5S5aFB8JUGi9nnQFipWNcKSmQzKwtQomjTMAJ8tA7712MvFsd27Mok6Ty4JoBxJnyx5MitNAnoPnqENN5",
  "key16": "4JvsAY2GBGzcfehpWsnPUq2nhzz4vEiGhyi8DB8cxqG4ftjf66DDgaF3cM3naBQdfqnmHmcyfSspCCMK58HdaUYs",
  "key17": "45eohCNB4arhB45MFfXqtaz72YVSM4WNujBQwR96ZxzrzBsyWfTSBpr1hpmBLaoUb3tpLgZ9kBgzEiFDDPYcc1DF",
  "key18": "41uukY2eXveJD4mndXRna1Q6MXEJbb3cSr5SAGZpUd7nbUEsf8sd5ogQgJyxNjnCd1m31KYLSYH6TeAfub9oJBd6",
  "key19": "2VL8MyFJ6oMAy1RGHzQWhbetcDbM322WZiDJgu4Wux3k62pXfugFRSHfwZW6rSkQV7R1giUK4AwxuDuBMXuLianU",
  "key20": "2UYv1q28zDrwt3fpvLG7CuZ3KqEdMCT2YvzGDjQD1XjV87mEmHHogqCBPcjAap9t7M5VaoDUhHwK4VAwWa7k49kQ",
  "key21": "5FYiAF9satD7PeK5VcaMD3D1xuBJQUfNL6tTDknVkuN5DKp36kaURCJjgnoGTma5UrkjnKubK2tiJunZhCjPogfA",
  "key22": "2J37cu8xq1XE475QnZcAk5mKcxhjLUGj1saNaLMZmr2gRbir8H5UEmQTBy3DKKrAhnDCSbhoLjCiGvE1xNLB9Ly1",
  "key23": "3om3W8iEVfFrQgQkXEnoPf7rBXppzsjYuQcXYHjDW647va4DR4c9SAcD1pboP7LNbYB4LGkD94FPuJpe3uM9TxKo",
  "key24": "3SttFKYWE1NuJqSoRpY1RYYURE6xdBkiA3BD7DiyZ89LewS4ksqgLhvHTEsGrsyUkg8YW3LVFAQYFNtTWRUM5vCj",
  "key25": "5Hb7A9JBCoGugw4oHMpDbkCx6Z2ScpkXfy6QERvZmeChUBdNJRsJxMhPmLhaN1V1Rhq4L7cv6krHh6DwZ13kX7qT",
  "key26": "3HzK9dAA8s6rKkSWt9qC2vTZLvPz5XH2mbP8yZc8Vgb4LTGS1aSF3DqUwVzNzFSCeWFXbJJefBiCEeh7bPTwJ5vK",
  "key27": "2cp3iifYVvvsMYU6A4ZukdJecbwpK4DDUZU4cdFug4VLi6G1qrwSfvvyVWYV3XmrHbENiHLhSj6KazdXiNUFwHhf",
  "key28": "ss2sbmb1bu2PURwLrkvPH6zBTZvhjv3ikBQD29RBpHTWvzbMsW8GkqP9gYCrhRMQ23jSuTLmqRHfPdSdbbxj5iP",
  "key29": "3dtN3yR1nKsK1dcP2Y3nEBXsTh7LhJRdttGHK7KK3XvX7xxsSyezLxodf95PTT5979vJY3p2pukQVi4VSLTcSMHC",
  "key30": "rEemrqHeWujMWtXTb9AfTGed5jg54DEPZFVKnNusgYnrg7nt8bRV5ZsYaqDtnd53TEX7UZDcB6jWUe1hrGe1GFW",
  "key31": "431wXHwTxVXKRG4A29QZzE2mWTXoAFP2zAwERz8VjQez8aUkqGVwzkGjH2Eqkgm1xqwf9AHqG1twfzvrJNfUXSY2",
  "key32": "3zRxwpFdqCum47nMViEdZ6EoyWoss5ww3tcVeWJxSSLGkfKkAnXcUxBcpeLNcSsC6fo2ZYQBPrgPy4hpCw6JSQN9",
  "key33": "3tsPZzuXm9BpagffEDWD2fToWZ371ZPKZPrZSMH53vYA4Z41myQSr4ApHYMyVjiDsYJGfpEXzTrjD5Y4FH46nVhF",
  "key34": "4vT8DH3Y7GzKojJYndnzsW8KqjnS5Vq1eLM5nEiEx46vivgUrgZEU4YUhDE7gN7yFgSyBP8iM4HsixFyWt7DQD9b",
  "key35": "2FgR5244jvdKaTSKjRh6SD9E9txPgifXkuUcir1tfo55JkNXdq19wFP3eSfJk6jQj4xexPb7sfKwiE3E1PKdsm3B",
  "key36": "4a4NER8syusQgeDVJJnHPA5tjSMpFzjDoRfYhzjHcbeMzmvBQNKCZBTVyAeMiQf43oUpQfxj4X1aeVGwfDjRprfq",
  "key37": "32wAjZ6P9Hen8daUonhYhn3gAC4tAnEmV15c7PuoaHCossthzgfaAu57Pcci8EzQ4eWDkg784AEAsvVAE4mqbf95",
  "key38": "55yJL1KYS45wh16QRZAEexZxeC6eargH1bJTg41jgJCg9CaAKyFrmsGdES8NfDxc8HkmcZi8gcvfNRdyXQPjgHBF",
  "key39": "4xtdV9WNKnfogVedX3F3e7BY5q7ixcwJ24pc3YasuByVsSkxHBaqa7WMb4bJPAS7z4shziQnmMs3Fkjugx7pH3Uc",
  "key40": "5V2fh3dukbDGgrNgjS8crz2mRVz213NK5SJYLfUy99HuKgPSezVNj7oY4x3DgrmC9HcqSZEHPBr2GanNpagybc5z",
  "key41": "5EQAKt4XPMGzAixTXdvvwLyTrn1yD7LqhbmfkRSoFxKtcWheffXCkfkzSL6y8C4fzcf9cRAPB2QAurAJNSzqnNxS",
  "key42": "5nwwQLvsqpBkBDogfXAa3g7WYzeE2UUM9H7qPrz4LGcXjqeDF3TsPTC5k962mHrvM1HAbyEob8hrSGNGodTZ6djC",
  "key43": "3ci2g4cGic1oe4KNjkgP6e3h3wMNrMLGsgRo38V7b5PwVwzUASWfE9fPDfsbWdU7eciLY2RmA4qtxA8pCANgWb6y",
  "key44": "5Rv3JwSA5d5A6uJRBJ42snc5Mmn4kmdWfnegiwXyB5kAkuW4BjSpP4CPSm6oM1jvReaY34StnyTVpcurLefPwYjx"
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
