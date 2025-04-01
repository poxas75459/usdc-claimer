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
    "36u77a76gdvsdP1QDRHecDofq3ke9SuACjFXjpg4qSTj3sfQRYpjMhhJLpTnXPHbUEpXJDVGSsq5JyaZdrY2bJeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gx44thw3yinPGpdLt6tgN28gQoq4vaWUqnzkgQno6rtM4xmssjvFf4DT3mcBrcKmDNUV3aqR34ebs8t7NA1GL49",
  "key1": "QqppTE5RJJK2LsFqpRg987xBRVvRPQZHP5mGZFj7T8mCrQSsDrF4BnoYrBCbfZxCGMChBjiFYdgcGE6VeLUngHW",
  "key2": "2x2kqopR1o6KPFTDgEc9jZqRegT2WVrujvWmY8rV3vqod6bwdQuf9LVLsFRBjsTc6EgDCEJszZK4UeskG9KxsZ7o",
  "key3": "2cNLnbWdMHE1WMzwhtrbsiTgAzrjXorAHgAXHJnnyLcNJSuGi7dN2HY4W7ZZVpHSEm9cCCsvosGLSBedpiM5aY16",
  "key4": "5LHfMzy6c9EQ2XMDLiHHJcQduHfafrJu8YGMCoaY4yqg12w5XJbE7UBkJfZ68zTeSBnXU4913CuKbSGckaUS8bcg",
  "key5": "55BX6RfxbWKxGwyZfPdzLKtmyYDGNx3ELSAzdw5rrHmAKjCZoFAV3Rs7xakt3fQzpGWnffsJKN38gU2Sdfvqh5hj",
  "key6": "3Bm79yH5FmpsD2nWeDhoBMu6P9BsfJMEHP8txxAwuhJRPy2VXRnBxmZdFerEnPMT2maVyyJN3sWhF3SFbnqsGWUJ",
  "key7": "5yMQRyx778v8iQDsrxe5bPd8J969GeVkBsnHXnYdbHeUgnLhzoBBcS7KoubyLgM1KvGDvG5zJrT4rwHXsrZLnDkA",
  "key8": "4EMHwRx6EzQiKiq3TgTEt5ympFuC7m9vW5PazujJ2WAdwNBkYSbvGyryrL6Wi9gnkmYn2dJ1LjxvzpzAJuPUwfPB",
  "key9": "2Cfj6MTQiFomL7C4iV6NCnYjX7wYYtKd4ocy9h8z3Unx5Fs2bXPsQBSv4LWmL96fsU43E9vXMobsi7DAtcCoAofS",
  "key10": "4KYbh5fPQGaUnLM7hBauTu3WaX5CiyhyYT2DDPMUJcN8fD4bG5muRNntfHJYHKo73mNVLP2QetNceDrhmTPVn85f",
  "key11": "4VNoRWUiW3zEXXe2yTGTdfST7Tgu9x6xmKRnx3KZbcX1DTnzfZGXcLpVMghCTTHrNDXeZwqacoAirJ8DfXWJR6xd",
  "key12": "4hhcmuxTZhUKJyj76yuJCuPBGkU1YNEiJt2VxQBmoxwon4qFotSG3fJ6eiekKbxVJ3VD1SYNmZH2J9xLowfUhS4V",
  "key13": "2o7rGwhJAbafRJRw9iW48E6UVe5gPFqY7BGywh1R4ZV1UksbzV3B8Lg4GTFyL45b2iL3wgoR7NGyATixNZXDv4n",
  "key14": "2shBjD1toEVYEdKfLCGBq4pwh3hisYkHiXCq6cFcZUsqeGjQcFy4gLN1Nf2oPHjYc4NoUSAB1T4Yge4irJicMPxN",
  "key15": "gJJBhutdAEcr3heRjnQMamnPSy79dsuoaJFB2dBhvzTSB6PafJVJT1thwgv4XXKrDiVV6oMDc2xPaBtLwFmz8kT",
  "key16": "3C26TZtDiMPZ5Kzvz6w6533zbnXjSskY8ULb4X87YphRLAYc8yjMMPyoQfx5G6Tj9NqpZQUaanHUn1FaQQjFYdEA",
  "key17": "61VFdq3fC9xpyyNKaPhhCwdSCEiANJZnYLs2XJJeDGZe9ubrTHJyGN8Cbq5katkHJtZFedAq9CuXJmEEZ9JbhCz4",
  "key18": "2aQGWaSXzYorsewUU1coaXDzAQHMnLtnvGBZciUCEj3jbwVFDFCKrAjBuMYgEb4MjKyQCWDm6FRsHtSbLJdu1Uiu",
  "key19": "LXfdXjaLSf4k33a8LqsgXswoobX3uNEkmZk9d1xs63BhW9v7z6YfPKwSodj67MnxSYE5hFi6djyt1JbeWutJXnf",
  "key20": "3jgdiR7LF7YY79UQ4fFboj4PfGYsmPB88FdbigD2R8f8YSj2D9WUBKdawWdNY1VzExJ3Dg85cRzCazswbgaRQSCb",
  "key21": "zkyMURsbvTEo3nZEocKqyQReULJC85NDz3fa51bC3MeAi4zEJp9QRYAj6THH7NjNv7Ey4VrqNiNmmBcCUo59nVM",
  "key22": "5HybuE4FPTDYX1hmBHDt6GooQNCEb4qKW9gyaLML9vzcUTGJdRU4dZiznEQuPrN3CLUw5o8LKGEWFaaYi3kf243P",
  "key23": "236CUGqWMX3Nz2CEUowbQYgz78ENcXnV9zRoEMfgSHYu9eMyA6rccfaBeQqarjh44ePsr3pVEpnawcevjn5ptcjW",
  "key24": "4Mxj9SPVWcV7tZEhaKoCWbjg86a13sXJy6Wy9xU6oG7ZDfWKMKzbcfx9FDxEevyTbKhzrPgLsfbNgY2ppkNDzWth",
  "key25": "5qwmEq39cX8vzB1wJcv42DVYFTXyvVR4nzZNu6qu5cb2tLyifMB4B2a2s9ZpESft67MPx9yZBZaVEUmLUQ5vzcwz",
  "key26": "3iu8wkZCqKJJW5EKe6gKTRwymmGQSwg7J3A2A7KLQhGm1pQg5WLXcknuofx3SEnxUmL9px2Y2JP3w1ZAxx15nrUK",
  "key27": "2jxckyc2P4AbwXDUtbGzYkSNFFUtRXSMENCpyB6JwJxaK5HnRwBDRntuYUoBbiKzw34CrcWuiavrSu4GZiTPrx7g",
  "key28": "4WrzRwMx939Sm16j5YLHa6WYrz747YRfAMEoLZx9D1nxHAgQJ7PMG5b9VixZ1dkoX2FfhxsySjA6dVMy6xvfx6LP",
  "key29": "54mpyYFCA8nCMN6HsLR7r1wy3WrBif1dEu18PXF1hLZZqyw2qjUR99S2rZCxMgKJrqzKqJo3Wz8GMAkjCxPNerfk",
  "key30": "4FfsqBwDKKN3fHQfUFQxWE6u3qFpUEC4QCnN6LYGad6qErm6x7HtVJz8pz2qx7oRxDLoGae9rD3kdCjf66vwZNuu"
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
