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
    "4WvdVVb5vov5brLA3dnMHRsJrN6sjKVspaqrJ61Vb9HfrJff7T6PypnzTBUAkQXJ2n9QtRb2sGqRb5vy8gmo7HWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "16uHNqoQ7LUjCZYCbHoYQPez3MfTVwrC8a77crN5ZHzEuaQo8ptNWGxbDr7kbA5e5edkPVHYuW9aayBbg4W69Gg",
  "key1": "VRRo5Q2cXtRqKPENfH1LMdaCwA6rgxH61J8Ud9kou8bCgAS5ufLDmtLjqPKMpsfgVqoSLwm2tA1JeJYTouRv85K",
  "key2": "4UGDrsfCdTrYwEmKvG2fg6pAQL7QvsvSEC3WygKw3gzXBiUGBiJ4RDDDyqe1dTQ9XXR5MZfh8eY1qDCr9UqMJeEm",
  "key3": "rLTbzpTMFkaa9X5NEim5JhQy4SUZv2EP2U8tnDJQ4TRg9TzbGuJb8Kfzh1NU4DYnNMzvydhLXedyC9vKnw1VvHR",
  "key4": "4Rae4Mwu1SEpmfjdX4SP6NzdDa1UviFXuw3DuCJ4iPgkxTwKqH5eo3WUR83xWvtCw5awMckzC4YmReGt4tkvGNy4",
  "key5": "4eY5tbYp4ZLkP1NsikBEU8NrJM5GADyUSGxnxXF5xiQAnRXoaBTMhBaTLKguV7DCqa2A48ZVvSaHBqdQM5aQZLqJ",
  "key6": "5bXohQGH8AuVU2BU2fuR9YiptEwwyjj3o5k7qMMg8fpBsJNzExop1vp6L1nB6yQHRrfJ1vXk3gSw6YuYezmBGTpb",
  "key7": "etm82hvUQFcfqL2eCB1L8Y7pUYaoweUVeUyTRk2r42sANFeiarw4p3poGiF5wm1Bc6zBaktF8U8NM7dw9TRyhke",
  "key8": "5KBvxfYpHprW42roSicNaTyVF6KcC6zH5mhn169jf73jTm8T4J7kk7dtsZ5cyWdwbbLa2LnAKEuJv31QskQgHfXf",
  "key9": "38L35ZTzN9C2MEFmvujztTWbNwZP4RAf5KfGsWJoPYJq9Z2ssBsuLeGpJBw4XWBMZm1t4nmGHtLr23yC5fVkupjZ",
  "key10": "C3kzE6MptFPmU2h1zYQwmrGqxGxEcAQDTBWJpYZ8PtXzWHCEHgvRyU7F2xXhd9Zf8Dapbav7LcqggabNYzPDwqS",
  "key11": "5n1wVZ1CrvHrLE65cvi5Km3YJjCJLtc5Gac8VkzMdag9HfK3xTJhjUsEwiUF5c7RxXLtkinqW1X3mp84QYxyaapS",
  "key12": "GpnNbRLkVMqUqXonw8X1AmFdi3KYwmndV5hXPqu4njEmKFoQ4fZrKtABxKRRMMtk1M4aTuFL5fHAmqahory2qLW",
  "key13": "2PzyC9sS4X97purpBxJWmYcwnqdG8sfZDZYgX6zkJ1zbQ6AqtHFLUij8CG8f4GtNd5fa41WVdhRMiaFY1vVWifKd",
  "key14": "4B1hxDDQKMaiueVEqn5CHyNinT3pGuJEXjJzUx5fVhH6KxJ7b3PwTLfisnAdDtg327sARHDAtCdSKaTH34aRkb2N",
  "key15": "5NkA6ScWQmUEFyaCB6A9LuPqn5G6JkXwBcQ7DtiSSMHfcaiQNs6nBCFXxS3TskFpntqTkgL936ekuxLe53fTTByJ",
  "key16": "2xanVCGiUMXDuY9tU9fRshZ5YtzdzWLjufDphbRcqPLE53AxvHGa31ZjsVTedKNYw21iLoHyezkwL22SLJgZN9b8",
  "key17": "64EPgKVrbWSb8kt9SgMF5616NWTvnudh9f9fcUtUR4Xnas2ohw7PxvvzMg1Pc9TqeREEFEbC2tLM2xvpYMtRpcvU",
  "key18": "3JuxvoT93WYHif6xzdzzBXiYk7XBKPmnyXvtYnkgtqHaUXhFPCiytCaqFy5RPfY1M2y1n2so7QzWbJANgyzDN1nj",
  "key19": "2WMHkAd3H4uFiYFFT5hqc5YDBYWbJiQhUHAtHsbhcShLXc67vE8VgK2ZTK8w5WjddKqQ4zQCoV5tMia8tMakebad",
  "key20": "3CNN6ZdaXYbu5a4pe6Tn9cWjzSdNDFQBmQWuRyD2fxdU7WsCkyQ8TmT5jUNLbG4fd5s1dR4CS4sqRgR9Tb2kA3oX",
  "key21": "nUi9Fc1KgNpW6e9ZLDb76zKbAy1AjZp6D7223refcH1C2WywSA7r2ZNwPPk3qmXw9JhDJRuHHRcLmsrbhz1QcW4",
  "key22": "4ibom6AgH7E85yoeoFiTkMKzjED71dFFTKatAPwzpZXK54BNfiWdTn1kNQy32TN8g6gscuv5ty6QQuq7sVDDHLDk",
  "key23": "33LGA9WiL9acJd1tpJXg4qdWKRQdHYjuuSUZnJucGveEkbCJyRhmTfTCK6nSzsYqN3FCGcRcqzvPU9U3a24WAq8x",
  "key24": "te4PW62RbzJZje6CxL23UrThgjxZSYFiij5CtW1MJEszRS44jPdXrecg9JmPRVXdwdiTmC6nPVssfrkeadfVEpP",
  "key25": "j46erzuKC3EFuHCo8D9veBQpnJPQGagsWS2StX7aGHsKxzmfjuoi1HSgP5HZd1yFdPDqgAxoPJ4NEZFWNaSK3t5",
  "key26": "3uxs5o9dNaGQcTgjLGts8sLMXG5Bopwgtj7FpNXVVbgRxrEqUxyUmQWV8VrS5tgF5YPxrdridEgzhANBHXtMFDhK",
  "key27": "3MNcuzLAoGGMbH7rMsihbrJcvZ8s4GQRSnh32SRsJo8waHvCUq9xHMRKfFAXz29ZD7tqhhnzuDXH4dYbyCdd3Emo",
  "key28": "2MCodgfEjq49CR81P4c32q2cE4xiFhncuMbMj8JtWdXYdJCqd7g6u7Xjrmzki6zjK4DwTRTHQW2qqXTNXkZPLQ9a",
  "key29": "5XW68cuH6Z2zJe5SWPVi2SB59UHY2bPYZZn3AJ4P66opqqgCAT4dKbo6F3AK38Nc23BsbnNv4G9vahYWCfTFuBEV",
  "key30": "4aMVisUspALG8s86Qzoc3fpmQHF4EDp5NftauQBFFx4bNCYmQELQJ5SMQs8ZcQ2B6XAJZ1Q8CA8SY6sitJz1FqH9",
  "key31": "66f7cdwthy2ko6jn15uvh5TLqeF9PhrYjfvw13G7udTTHKiQz6GwQMx6es732FWsHVb7kgyVaKokSp8HviWFbEqW",
  "key32": "3vasocSDEQAU4M12hDaMFLVwqCBLSndy37VvVFuaM2Cb4GTqTCds77Amph2n7PArQMrxXZEgsAc95KwwzuQhmCMP",
  "key33": "4ipGU5QjvHpCk7p3bVAytHzFfFwpUeWpJ9z2rb19yXES9TcYdhpUp91ouMdCMzU79buUGZTKPe56sH7ogaTKCFKH",
  "key34": "4YYLGkiwzJBNeTRU3mKYuXVuHF95QmN6UTDXEhqviJ3tJRzkyAAkaNDiYGfun5t7HHc5AJcDJ2YWFiwuPmyNX6mQ",
  "key35": "c52qtjLbcBWKaePPP3Z7DWfJiSpph1GjNQ5aLYNyr2S1htWeHq4ySADTt5mxiSgZx6kyWQasFWHiJk98WuPUaZ5",
  "key36": "3L86Lf2LrEb9jV6Vb9CwTH8TbDuuhKybc5mixCTr7KGRbRGyJUScBVub2XL4xCSixjhjC4LdchUcgu2vFwRBHAPL",
  "key37": "3NrZ24supSoPwaQ9Dxm1KUt5TCjtpEuuPm2dAmr2fpG5RVpKxiJQzovdCPE7qFW3rd2hVuEhbPPYHbyZqWkyuiTv",
  "key38": "3LcXZsWwgbXKm2VbUmnAxWGMtM53ekrVNuyqaLZUYdw4LihYEbRah8GEvYiHNxbWsNkdp9VjFLXmwrpujTX4rtdT"
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
