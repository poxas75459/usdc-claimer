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
    "5Fp8Hfjg76SdGt8P3prtjR34nG2oHFF7xe48wRJRcxYSQUQ5wjGMARjgdyCJqVMNkStEJLCPnCcXRbc6HnGEAUsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jzZManRGKVCjNVJV9qyGzmNPPy4cU6zRjEMRngrqPyYdoWviqcFd8EUyjFYqpEKm4neThQ9YNSsWwVCNQqPizgY",
  "key1": "394AFHBXMktPDmodg2yYUfuzGkMPhoBMC6Cu1ckaPgGjQG9933ga5PWaCRKmpUfe9cxyQu5jSgLZxJaiMiUvLGds",
  "key2": "36yWgBmHHMAqT5ucZ6hnXpLJeLiZQjYHnXVHeGNnVndbawJivrDG8FwinZbrJSAq5SKBQZoUGtwuAEeCs3r9kCSz",
  "key3": "5LVSTRw7G7PxGcXN7izsGjK1v8SArHxpAXDhtavUNQp43ixPvJW1sNwMic8DXPkgbNZAXh14cw62z3eNiVfo1AaU",
  "key4": "3W9oKtx78DFgiJtzehmqpmfdqt2m5z5Rc5r2EpAiNZ6nSro3sPm5GVuQ5bdQWCkk289iKxT7oBR7r8RCYFRjTYuM",
  "key5": "2WmHstpPd4YEAHr84jZr4tFXkAuQAYFUWaK3fwVnXTGf9H18DRgsvPfpDaX5VQn3Ta7y6wYfhXTS9nFXdm5QXELw",
  "key6": "4K1Rvt4wC9FGUXjvmuvDZEmK9qbXS2pALbuP5ESUcn3ABys8kvTBydPBp6hcW59uZxnTH6DXd5PsjXmG4HXad79w",
  "key7": "2fH5jxDoagGEwR3mPiU6WPBuGsaY4wJipQjYdThY6RT45N81k64W5nQYXawZWHcEHYpHMQNw4rJ8kM5BJXdNKYVQ",
  "key8": "32w77tNhJkfFLQtMpt2iV6btY4ZVCsSKBPbDywMjG6EY5RSJx2dLULs1z5H2kuTDdG9vjYsMhnQLV4GPYA4JooEG",
  "key9": "22ztAw9AKX8UpmWeecFoKxhqtS98BTV23qtMaP6mZY3toXwVAryWstF7qnehiDuLZiVyyNcrHNEh3RDwAFcrp5TG",
  "key10": "4ASBQbcG2rD9meBz47ip98P1WCzTSqG5kNys55Yha4g5eeTrrL8sLuCjfhVc8JhsZZH51aYJMgJueN6g8YdZETP1",
  "key11": "5V9YpjxQ6AvuGcfxvDigxKdNHr7gYca4aw9m2Q9suLTS9EoHxYRHVeFwNF7jNJHYPbRv1dsdyL1UKWPY4j6SiuGJ",
  "key12": "4Mppon87V7Aah4t2T2BNLxxVQ5vr2KU55wLadymRNCG1gxeeLSbH5uKztovL1rsh227B5J8uLtXmNPbHxCFy5byQ",
  "key13": "4vCvxsFRKvUknxTpgDtShBdtxvGMsZAdNG4Lr11LSGrTgSjFeqKsS7nmKcz1JeFGXjGTNoNvodMzneo9pwd7QcbX",
  "key14": "5iF3Rp11yC7aR1s81St7d4VPJEZLmAEDpAXuzbDCo1s5LhmwcdtDv1JWqMStY7b99xNhk8PjrKW4LzWdTdCUGEdF",
  "key15": "5wctDJcVk4QjtnUg8NZs7rSRJ43FTVWekxkm1E66TzMeQhG1QHciszr1iPofwaDEcCx6DPARQYe1UeCrDt9CGmtM",
  "key16": "2KPsESyCRJ35cJrQYFwiahm2qRnMpy3WYWWXx6ba1YiLty13x1H1D58PAFFSgbmAzf9s5CBKbcZ8VSsbPNddUsSH",
  "key17": "2FqbSs5DCivYGZYMwakJwqzgHBdjtSj2pUWeDK8spYhvbjktik2zGf7VcqwywmkRTF635hWcGH9jkDrEjJaC6g7r",
  "key18": "5rvo9vGFQAN9RaVYTSVvm4Ac4tgQRMsWsfwe96dcRzPZBQCy3weVNifBmB1uFFS7g4eg6LrzPMf5ZpDMNCtFXYLe",
  "key19": "bP3JbeQ1eZ7cQohcS792vs3x4mCyz2zgryJKZNApLEUMw6J5pVpBvW6ACQtbZPX4TEu6F6xp661t1Yn9K1cLDuU",
  "key20": "25bJhFjCipqfRQNjzcP5mLeu6zJ4kJYPNv3hUChn6A8Pi4BMaK6htF31VgNAuQYHDAgiMomoHqW9GxL2yuRXS5d8",
  "key21": "5ykADtFWH28NFtYCQeVNUE8jMgRKmwG2jctoG3sv4j2mJc1q8tCFtxcCdxWvZfCbx2p9HEFjy5hMbsCRJGQ5aiXw",
  "key22": "2mJKhcS9P9RMeXZPxdQ8LXMyofzphY6NqzkPKKGuW9FwesYDRHrtzfxagMKjsgbLuBXQxetEUj7ybZA4jac4FDDt",
  "key23": "4kuQ8cQ5wPgJMGLd2ai2szxAgQTPMunsh1gQf8MaQMdR5cMvEYSJmRRkfQU5GMxk2w3XyBxBw71YsUQRAKiuVGZm",
  "key24": "4orrPddQ55s5RgMY7Ub9ZXnMgPgRV6vP7BYXzVRV6qZuQKQ5HXdX4VQhkh4ojE5rhaiifcwZWiWM2HvEwX7A3wqy",
  "key25": "WBPqatfWGkUVbZLQkbWG69mhPMq69J8Z3rUiChs3W1aWwMpHL4KsfE6mvNfzDPFwVrFigtsAzTzUCDQBfGPfTsM",
  "key26": "3Pgb4mj9Jgic4DLHqKPR4RUBheW3n37w27PKtJUye7t6t41KwKAaoUBSiA9ChPW2jwHkaEvrQ26zxQWUEhjg4wAn",
  "key27": "65jLbVLAsPcJSvkPFXebRcH3c9dAzWsxYb1KTKj9QxLpPMwSPJNFrBgfwbsfsrypZdZ7YngRvxUg3K1gipZux23C",
  "key28": "3fz6EdZhSK4mEVXax18GzZn7gLquuFPM83LPuWdATXsWHnyDr5rxktTGhbrFJpWjJckqYmk9NcuwEzE6iPTPN4kr",
  "key29": "2K3dHyNL8i4cUfWbHecC6t5QGDfAzayPmP9PC2iExidNuYPLZSvnDbvY6QKsmwd86X1SaAcw2NpAtX6mYy7e84zk",
  "key30": "9NBYR3MoeWNKbkBcyWJtU4mNBhgYPLohKoWzBuPK1pKnfbwm9Dp7mHiQCe2CYeWbKNPrNBTbYt42Qt8re1fUsbk",
  "key31": "4tykkEyfGCG6i6mv8LuX4WeUfDHPohSEx8QWzmq3Ji7GvR1fSMT2Eo78ysNrqtcTbPigLUr1otE2i1t92bes2joW",
  "key32": "61zYMzEsi9wpEnLDJ9jAPTAHz4xdSU6BxpZUtV7FAtLyVVC6BidBLQtQ94h5dd44J3zxAySNdL4b4T2n5ctaGot1",
  "key33": "42mBYWZHAXHSjYPCgKsJCGYipfkY8VVTPzuJXR473rnQNTtrMNUubqs2vWUP5yzk7tVT5eocKrb5Hd6qCVxswB4L"
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
