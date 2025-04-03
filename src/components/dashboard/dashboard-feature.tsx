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
    "3wMRLamJn5ReXYmhEBUyXArVxkH6g7JHe1Vr59RB5d6JfNSXRW2PjkFHgXhbmnRB8ZdB2a7nzd8gHfKcshnF2E8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CEfhG14ur4HZ5ZyHh3LVK5omGFhYBi8JoAHNmGuWKnqZjXxhnUx7LtGo3ANaCBA67qkTaB4bfzEUmfq7GiV466v",
  "key1": "2buynWpYcVkADcqKs54qb6sPA8CtWBzuWcPC3PjkBJkqEBzV26ytRQto3whffqhWPdqjYCw3VGDcDZUxtFs7QJb5",
  "key2": "4amW9EmBvUWjGffYYHNLUte4ssZPbaqFPi9ie4LrfHd7S3ZdRU77pyLwtyrf55SwxsEn2EMyu37yzJGT5rQVDZrd",
  "key3": "2ANbSeQmBMaXVVSR3MpPvjWW5i3i21Nc5qnbeWYkkPmsbPdqEPkY6oEVw66qoSduywXenDSKZQA5CQyU5WpaB1av",
  "key4": "5FnYzRT34T2cdZeAD6VhB7L3Me8dRCHWv1sqwqMe8HUsZUYTxkDFDPm85LgsZH7WsaX2KKT4r9UnAR9yqK4oYhke",
  "key5": "4Rb8WHxpZUdBo3wk12Q6xmL34fxjwZ5e7WQQmmBabbCpUxPVWsBGkEHxiGVJQoWkZFVeVx6LDiHXZ4epmVfsRYAA",
  "key6": "3kN6x2zdKJbwrpB1VhaU6bQykg7ou2tPkrEh2LXHXg8qyR8yZFXG4ZKttz8uYASdqdAovhMdVXHsrj3YeFL56YTX",
  "key7": "55ckw7X41VUMBukP7BoYeah9UQxDhhxytWmuLqqrhmQbtxkycYtNAMS29L2ZRoTBzZZbsrYLCriWki2bnJbGrPaH",
  "key8": "2M1AeYygaAcV89fY4ozozzVakk9V624r9zrNo2K7SSb7hiA5ru1wT2CUGaMT8svwQH6CMpVovZ8LswUoTBTw5sz3",
  "key9": "27MubQqP45bTUDx17KQuvg3Gup5VDxAq55BgYFDtZBvXxMX2kncUyMGD7LS1cDyURgQadLpgzCWyELkhjFTDj8o1",
  "key10": "4zS8FfEfUZij5xi5ZkcpgA8f7hiQfBT4YArnwF2e3S7dw1JMnhPb8aTwnBpEwZpXh7JwjKJNBV1pfH6RCEqiCWx5",
  "key11": "5oyRLQAabZqTcYnVpkfMYPm6zXeyzc771NUDf2JfASZcJ5PZXj9o8NmkjwspwNUx46sNyAkKyjQKA9jm65Vvr1U",
  "key12": "3xsjnjGLxMHFMN4d696eBuq6HdjXP4XcrwFsiYs7RgMCBXMAtr5P25a21n99mq555y75sTvM3CB6FuJfDZXGLAaS",
  "key13": "5SNALZMbA1TX8fnXFMNvokUfw3f8oyyxTvdP3LLN8xivakaFecJKjUJNYDpgNqzVbXDyMcT6B4D5VjkLov1sC56N",
  "key14": "3dgGZibPeiN4pcZQNvb9Dv3Cnxob2G3fGA8XZ1g6ZNZSCgJC3qTd9vwN4CwkbiNdh3hTA4CfPziarjed9gQ8soG1",
  "key15": "45nQYmf3soS9CW84rnkJdhFusFZxEGTwu6ULeAFRLy224ri3kBYeb8rGX32DZzejBWFkWcQejwQG34VdFaDUsG9H",
  "key16": "4Wi3B75EoefmLmUj8XN6kUadbLe97Ga9JaouwafRtgRaRt1Lobdy13ugATxLBWBTiN5Zb39UKnA7on5aUpurZZNV",
  "key17": "2rXkftyjXyxtPDE1uS2NvCJ4KcpibaFLYFhoTCt8op5X9QRSDYKMGQhq2oawEhE6h79R7G3xfL9RB91sqSmGFLTS",
  "key18": "2cjQUG6F7MmeVM6pDzvmZA6CGC8RgKiYfwUwMfK3qT2jMeuYz8dw7YoiXR2VNz6fxKoBDwgoYodxDB24MDSAAiSG",
  "key19": "29p3yaPRiX74nT43C22BoVbixeoGsGyLUMtM4QSCKgMgyMB7voyQehd7pXrrnMSLWtgbpm2wq1FDbFd96BK51bjo",
  "key20": "4w7J1EAQYG4R3gJLHM2ZSpr1MUDBymeo65EvuwZbasQTEmus2NrfT8pZrHpoJmJTGzGdMwNC413BDnFr1fHL8Aia",
  "key21": "2R96hDd4pKAgnobtwSUyKHtKv1wrjbrGXqBoR6wom2P7Jc4mzHuaLdZipKpT9iQgyMABMsEVXM6XdKMe9ZgdKW8X",
  "key22": "2x5ipdVpnhbhe2ShjjZRodH3xk9gM4jkqT8bKw8Qmu2PLdbdTikxqGSveDgSPk2UEL4VR3g4fixDyEb4hvaw3NwM",
  "key23": "513hn1KFSET8SbwKyfcHzhNw8kESqMfZFomakpNkJSj7v5YX36Sba7PPFXfn586obik4QpHhRFctPgaAP9PFAian",
  "key24": "mRy34qmnenUehUfdbqS1hJDath3usWiSMaKSh1jggYjEfunQRnUTY5BN5Srbqt6B44Te56a9gWCWwcHgRsPv26M",
  "key25": "4YzZhFRCgrS6yHtzjnhxmoukvmDVB3g3aWjM6UNvWWUzfRK8ftTJS6N2Xwx4nG5kBZ25CzaU7sFQiWY7J3PWGCQv",
  "key26": "4MzEaWheZjj5pnc532MFDdSjbgLzzgcQb3ARAus72Pcyvd2orvVpor1vUJf8tPvovSiaWZ4LXMydHWQChHXdXmWb",
  "key27": "4pjF5paHMn1rYZGFd1bXJ8Fa9XV9475EHdtNBqKFFdG2ki5T6BcDYqvqLUEjq3FzPrhZyvKoVea52cguLsArPYmy",
  "key28": "2RFuJnr5ofWuiD229MhA9nzj5M5DhdpCsLUyQgoQCqfrV6aRmzmkUYqPMKMerHgzRX4HJbonhfqet7GssXQ8DHNe",
  "key29": "rxHHRqrvGTuqAsQM22j6neV3Kn8ihsUAtEsMoyV6McSG3u6cjrBxGRce5kFVWCDupYdiVNyfonfwFypufojmK42",
  "key30": "4vQviQ3BE8Kc3J4MgZspRkRPfahnwvn7ZnuCM76LxHiwYVWiJg9wwNHAfX1BJY9R6Ygu9RWcdqzihYZRKPsvGTiA",
  "key31": "5VLt9NZDpbYMCusStU2d4ibmAZaatCwPkmqXj2s4LYwGz3TfRDWryRY1djMfN9rNbAtxH6hsn7f9AwZ2RS7ps7hp",
  "key32": "5GNZJGoYpNdgnWtB39YvKCVEzDqd84ss85LtU9313JKfMr2cdizE2cqycF5TgYBudXLugbrKs5GeRsitqkiVSt7Z"
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
