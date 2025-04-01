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
    "2uHzjBzuxPLtom5ZzGpLgdWef5FHEZqsNbaV2Ws6iDMtNaS7ndik7env1YVoN23UjPjmCzfyvueLzjSLY2gSoxbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RLuvxPxPBZMHVudEuZYK4YE5L1cNBFbbs8heJsNp464zkQkBq5jKtJ8hRM4A49bUx4VoKf4coYkt188hue1Jgky",
  "key1": "5zrzS3d3B4uLW2kVMqqkiBBtEVrocmf4BJLCgz6twaFDdP1irdeswhJMe2vKzdDHqSy3itiwgcH1DYRNTZ8ZRzrq",
  "key2": "22i84dcey6nsdLvCZP1Umzvm6UaDJSyR5wvk37xnzv2jUKVYfDDJJqp7WrzstHyWrNXwG4XxyTf3oMkYMp3J9Lx5",
  "key3": "3FJgj8pitq2FuGoM74ndA5iRDsKw1XNNak5LcEV3Ah6AvX9e4LNRB24qqEYDdTNSmff3KEEugeeB8m4V4eqWjgs7",
  "key4": "5k2BuDpnnYBYm4uDfGVWXKmzTpUGwzA38hG5Dn3WXcJiSFYcPbGRVvWYmf8oXFwyETUMNyZPQA2TQ2xE2UnGrik4",
  "key5": "4bKaqjixHmBGeeSk7s4g9yBy9U3QSxZ5Wj2FEM3RC3JsMFD5KwGvxkVC1mt47aHWK1W4YtgQug1mfh1vpAaJDA9E",
  "key6": "32sndJvzpK7gKRVZYWyjX2uVyu64fgWjTgaEHBVi2wfKjMKDhe4QMUu4kuiMzinmEPMWWk8gmEgcdFWpuwUHhCrP",
  "key7": "2F6HhFGs3MrdqUqxaHmzH3mgucmi8dcSw3DRvPdu13RpkecTXZV3vjJeHna1WembhRnCwMuNHmzRv7rph7Nuz3qJ",
  "key8": "2C5WhKadCX9mv6RjT2QxZ521XcVAM4qjdd5VEePbuiSNhGVasoJyAMdFbfnVhdJFx3jLNvHiupu4Ahq8SDQbvRV8",
  "key9": "4htic99svFzwd9i7d2Mh5NSLYNNQefL8mBKUiZLfbwWFiS7zc9HXmWRKpn8B3jkSqjiSYbwa6WmaGTAp4CmQUNY9",
  "key10": "3mz2Sc7ujyeZFTcGEJjsZsbKgmiu4TgsEqm4FXRYLFgZRknrpVrdHjKG1K5B9WsJYgyPSBFGTdLQSKa6cfauBQk1",
  "key11": "5izwdCVDsy6eWCydjZx5MSCQ6CxEvUAuA6y2wsf2KvXxvTF1UX2b5tCFowM1UpSEgjGEMtWhnTrcN86vmzeR1TnG",
  "key12": "4URqaAwjp1UQ2WcEkhNPPL7F3EqUoyNWpCCaiTs1zFFUh8YKyLg7wYHzRoQGfANHjzTg27fYwoSdhq2TQtfnqxMw",
  "key13": "nCGui9bNJHu1gYBEVWUys6pjX6akCZXA5aiQmy6V8oTe4mjnNnJWp9M9XNFu6g7NqxMVTNLiLbNbHcRkorvDJfN",
  "key14": "3D5WKeAxJJ8cQimSUZitENpgGXjPFn2eoA2MAq1Z8bYYPKADWynNX17pMt389GpTLfe8mbxZvH2S6H5qHfZQuV9r",
  "key15": "2AUhynF2LHuwaLcv8v5dpsrh689YWPx2aS1LnU61pVjsjURFyxsZwj2wQCoAY27d5gzu7mgXKWikMxQbNUEbUyDf",
  "key16": "3xG4cjEeLYhzQSvRyQExosYLaY8mHDjQPLZgibg1uDfHU8H2h9zxJV3z2mYgq667GQomJ7ckzh82xS1Xk8DkVkt8",
  "key17": "5JW8LNMfeBSmh3SuMr1q6pjsAft2g1pF8w6JC4ixszYtSLQBmrHUyoSuQWwDXPGsvMZmhmYkjzWnwSN2ZFuTG7hW",
  "key18": "4MviVkMD2w43rAHAT9KNFu96dY4puABwtSmdAvNSGYzSCfmVYBqXm9M5jkuXBXob1NhxWzLTTCwEb2iG2hMtkoeY",
  "key19": "3h5Y8SFCrB82tVh8UzVn3aH5FcxFXfbiuV1XLKpN5u6VHego2BdDc7PaP2kn8W9XjL1de4xvmdDr6E1wr5jKKtjL",
  "key20": "5FFHrxFmEorYZjqAyLV3tmLCj8fNhhvD9fbdqL4ev9QsN6A7iwyyUEDio2xsU8acUB2c6KykTSzpwXLXBjhbsphM",
  "key21": "2u7nEsdKqJnQUUSgYSP6Hd1LjfiohuGFk2JJt4JRFF4yDioHcrHfoUD76UiqmNJK3ezEPknhEhwL9b8MW81tHrXv",
  "key22": "2tCSxq6eofn1vBChNhBbackPMA7sVftJg7HfEVUFiV4DAfrkRteWf2TLqaHzs36Nfn9W5qqEUsSLHQP2RonBxFTX",
  "key23": "5DTGCxkDn3wD6bQse8YYT4t6sjo3DNdyYv5accLKf1tKksBeJtccoU5Jx5bgkhRBWCmdAR88zusNZSgAS59iXptS",
  "key24": "4BtKEWdX4rvdH7PWxh32atMWYD5nfhuPXtydwVXYjdR9yuT9zyCRdnTH5z6bxwCNh7XnqBU6MiZNKKN1v4U9kS3p",
  "key25": "5Z6NaJsmH8Dtunc9Ya328AFAgXensBaELUFk2HyQ5fFtuBogQKmmrQ6tRU4fPNgpUovmGDFt3qpTGhjGgiJ8F3cT",
  "key26": "4PGzY2XLp8yi95vczkiCwxo4HHm1hADXGoKJFcGH17fKfxF4VemneuGEVZ8SUWc3tu1x1ND9t6k3wf76QNEevtnd",
  "key27": "35ANQtTpu452u14bsAf51mcW2KT8PyaPjKQy2qnm5SUeNrS9mMzjVqZSvkQHPgdkkAi8BaSDPPz2rewxAmdr3hA2",
  "key28": "HLnqkiiuyXdNgUxE48N2UAqonPZnFwZ4mGQHmJoSYeY438Dh2VgU1RRKxHQ3A1mDmcEiusFgAUbZGze5NPDg3Hh",
  "key29": "2NLBTj1JZFSYuyuNvrj9PcvJBNSQnbqETDEBUMRH8qFh8zHPqYcfdrXQRkc4dtgBWTrsxpoKcR6SGpuG4s5X2A1H",
  "key30": "3rSD9xduzh7zc1uMd4QcGMQdo4PXAzeD58FJpvh7rDitY5YAznLwd421dbriX52gr5uR9c7UCasvfRFSeVEaApou",
  "key31": "3FFDaZ1bWdycjcD2XRePbFrR4KWdDGitT1H2pg6o3r4FXoZ9Gm2qHDeJYtXjyQg2Y1eMmGVPD1vrXDLrgHkG5osd",
  "key32": "mBcgAcdQmxpBvWEmNz4udvbanZC5ivBdhsQsQBwn4mmFnWai7D8Gxh34PiLNPZptUttrQpFPq1xSLWLX5mhRh3q",
  "key33": "T5qBSprB5LWP3tAKCeom4FqAWiWdNfUuAALcHo7oh4YKeYVbuZGKdAgjY7EA9DLDzfH7x8g1hpAqKPMtsuuVFrR",
  "key34": "46dyVmcfiSyG9bN8Jre3vH23hQbJE1h4P4w7RdhWn2imwuquYZdU1JB1jba8tD1KioWoE7Mn2fYfdWSSu8yZfwy4",
  "key35": "7Xm8TnbZ6oEA9fDQcc2MnGtq4qTCbnPo81GSJF9KRDkdaT1W1qSCLwCwpBwa1PQwAwbPMN7pjmfdxTgdD7Hvkcy",
  "key36": "5E4ZZbKAC18y8j2KVpZQAzJFdtxccAEmPrWzp4noqs1YUyLENzaxe5pH7hanMHc2oxb2k9m8FgrYYZEdB9wbbdv5",
  "key37": "2SGpJCCTUZDifswWBFL4sDnHbN3z5S2hTXNjiVhusUWfvsRnRZ6BYxVvNASLcDrdcbAqufapLvorcwFAeVkZjwbx"
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
