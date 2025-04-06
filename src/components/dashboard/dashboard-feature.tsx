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
    "LjWVpKu6kLsmrJXUbnSuGQrudixdCEpQKvn7txUggTcZuMWorJhuaME9HJy7bVvtnbRTw4grDqLX24yFeLe9hSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WYCuW6xabhcWP8CxzLsPQyx8UNZ892yWVsiPQtDnMDXoMDXbaQZvHf5x7zU9uLubGzQJRXwt9AwbBJMyxfSxTYu",
  "key1": "5pp29aFs3hR9ixmJMpTc6SihNoaTBxZXryJNuNBwbiZDwH2ibR4UXJ8zsSGgr8tte9zKxbxRW7mHnaD5Sb2SwzmU",
  "key2": "5CAVEt1iFJn8RncmxozB6vwpp2RotoYcFnVNRgSYKAjp4MzLWfpXUGiWvAbUnzB2ZKXkrXyyAmq97gVaHq13JGeK",
  "key3": "2MAs4W8aKCatUsPg91kCaWt851RpStSq6haoocjvEx3zrFoHX1rXd5WZR4mRWFWBqViF8Uz5BmyE1hm3yDx9SyeZ",
  "key4": "NX1nPe4THgERgowt4vewY5E8u1wB1nPB9F6gc83cV8zhRUQLZApZ4vMyghGmpBibktrgHA78ov5XgP4gJz3n73V",
  "key5": "4RiEyrpRj96psio93XNZssdv2iZCiaykwdC1mRUJZdigy22WMxDEYfzwgJmFFW16WjtDiuuWHtqnhzHxLbaFQtXW",
  "key6": "W4ihLUV58H8PHCUFSTxdUyG69wn3QYvZaEZSspb6QNiW9YtGMqAM6UP1c1jnjRUnDoJAm9oR9Dv2UZgNcvR4r2T",
  "key7": "Lbq3b6epfWNeQWDwqcuFEpWdamtGTVd1mTYyoTu6fCb5roHq8GQThv67GZnB7k6pMuiThDuLViyHruBjabA3RF1",
  "key8": "gQLu9K8zGKocsNXEtQPCJjG1f21DfyrefH8vpvSfxgfTaiJUxLi82sDUD9qC4HBsJVtpPgB5SACKDsFQot3RgLL",
  "key9": "XDhJStGWdvZx8aMpSdkavym6igQd48WobDjbe2sdowZV4s4qo4a6DJC7a9T8Leq3jUf4AqrkAwHdEsjHXyMB87W",
  "key10": "58bC65uQotysVrYtnkz7Rxh23HWmrQozoqne2RypecX3WyvNjU5Md5Sm1q5PCgU1NxdE6VMUYvR3gigWPn1nKUTB",
  "key11": "2N8vVMKhg2b37mxBd1YGnKY7HjhnHcAof7ekwmj8N3xPJfKm6GU2Goh4VqW5kUE6b8zV5zDFk4MnFkDpBeEBz748",
  "key12": "24osK1JHZZc5yM5zGz8o1qEwd3Krv52G48DJPpMQng7UpMa1ru3w6EKn7YKZbojEUXBEnetvh6BbvHwnGEoe8pL9",
  "key13": "da5FpDf9ku1exNMRsZRjLa5CokrTnSyWDEH4YkCE66bA4AZAdv3rD7ufFYG2zuqqF9efwiXuDkQyiU2Lh944wnR",
  "key14": "3hngvGFLtf7ddscQkdBjk8g3Y6xy8ChbTcEtRbPWyeWPmhQj8eYp8EskGLudyjkBkpXFoAzAcinffsBAsU4bUYqA",
  "key15": "4Nav8KxoXPa6M6dgEwiX89etZUZpeVeGhXJAdBzCnnm4LmHgJ5iQKCRjNZ5PUTE4YA9SvopEtUNVJ4XcdBnQV6Qe",
  "key16": "61dcw6nSowCj8BEqjFSHE59ApsEks4zpnLM9mQrTT4ckm34WJ64pFT2m6GZyYhyxbT3vHsV2BXZjKLeztWv4y8DU",
  "key17": "37Tm41FUKxDuZH7Yi9LWgz8S9dfGLyLQXWNPa1Q7qwbHqFjfsp1m33yuCpH8BnVkNCRAbvvFXFxWaxA68uXwjaS9",
  "key18": "2NCZKCo4Bye4p8ZLjJcmajiiBtgjjyEDS7ah4CcGEbC4vBwZvfgK8mDHNM3eo17XfEhoK6pyScdJhugBJh9bXE2W",
  "key19": "47o9v2m5DxQ8pojgq9YAPRRq9BFBvcN5yMoUEspJmuK7WAGHcVNc88TD6Ea4h48XDGX1doDxJK69qNh4RfnEM17q",
  "key20": "2m22AwoHY1kihV3ue8QRQGcFzuwRkdLuWcFiXs3xrWWqDjEyLGJg3ARsvAbhXNfx3EooyoiLsQSQR5AA3aLLGUH6",
  "key21": "5rqi9p6HBvXNUWfjgU4YpEVmy61VwVHDFAPXe4TY1XG9W9K39Vc1aPQU4Mmv8pRrbBe4STX3xBrLXDfVjVYdhQ5R",
  "key22": "3SFTGtcC5pGeZGggnRkb1KzQy9bjD2Gpw1CwX4b4fLAXN9BFV7X6vxTL5eTwLEJzjW3tuUU9Z6thPChdscjyNuwB",
  "key23": "HENeqCUNYP4p1eMdGhAHfPa6kAp2QLy7S8SgfZQd6iT7mbFDSrPG4NAi9DKttFbeZLpRkabtmVaNUf7Zf4qjAya",
  "key24": "KHn1jb99FLc9hp9pXovQ5uNz6oLm5wZ2ccSgSwJjPZBfu8ZHwgbKjr2hT9gBGGCuRPiiF56My1cxWZcQQe1rr4x",
  "key25": "47sPn8nDzsH5FiFqrjRby3dof21eHuXSsmL37GAqM2PxWmku7r5XUueeREpRzjW7tozRfDwNwCAnQ8tBJowZAYWd",
  "key26": "CCgyW9C6fSBRj5gc2yESkzVgVyWveUX37WJoCh1WaDHwLMf5iV34xEFtWQ2eJ3Tnx8mbSivwstnUjrMJNW7jJc2",
  "key27": "2YjzPoEA8KfvonJEpdWPcU4g1P95Bk2jTbuVh4sLorF9hrqP9F54hcXjNq9Ujm5GsT9P2XdwYjJzTeFsnL5SGppw"
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
