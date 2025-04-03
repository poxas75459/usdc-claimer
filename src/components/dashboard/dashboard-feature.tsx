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
    "3WnRfmhAZ7NEdCs7GjEdG8KKG1WAeaX9H1vZruzqUx11hUs9j73SdNKXQdd1fFVVjW9kyNjPETeEiZn1oaL1jFZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EUY7xzwg7xFFoq6FHyAQ2Aij3RKcbdVAdGUd5b1RR1HtREkBVdr2oiRbQVqSW8HwAsgkJPoEhDSPeHKEAsAE3DE",
  "key1": "T7FGQ86oeBf7rN8sWDE6UxjX6WLAZVABKkoBYyk6ubbjsvU43LfpWm5KtnKaNdQEjKUGXgmV6mDJGgL19E4vFk4",
  "key2": "2BXhj8QQLcR4xkRbhtHRf9pMgnYNs7hMe9PVTNCFYMHFh8oBCAYxrBF3b9dwZX2wCstbyULZ1DHWdEPsenep61MS",
  "key3": "rQQUvTCLH9AHJHwnYms7eGT2xfmevLBmTrYsLwckFSHuszaZrm4euyhPQ5NhekeeXvVUUtd4KL4PT5BjkHgiVYj",
  "key4": "34BnTvcZTcPwbAkb3uVWCWNpmWEbBKTyrFV3njHR2YUkonj5AC7LkE6wLaXey6VEVXVS2AjEn2qRn617J5YgjnRV",
  "key5": "3x6etXCQpdWFoJdUHfPDtNns7iJhaqRJQyJaucKSHimYA1WAjUCvH99VBYE6CsHLWnZ7E8z3hYR7AYG1k1CmPZTC",
  "key6": "2fP56PuZ8QD9YDZhtuKKrrHdyX2HnmKhb64FcdHmKJCZwkTeqm49Zh4UMdnDHQhHxrLYXW3Dvf21as8axkc3fCyp",
  "key7": "63h3qDiEqAGJ1fmJ6HPvP7kj2B9baBg3HV6qFVfeu6yZMFWnbFNovGD49FKzFdmmHhL8P1k4GUxB6GZWvi9QK2rk",
  "key8": "3pkKc6c9HTHtnPe52Z9J1M22Pr2gA6MNunivoy3aVkR6QAx29adnwxZiKAMD9sSt5XskV5PEXdnr7sjPQRoZtCNH",
  "key9": "HzVjPpxR9x4nejrkkU7D2hvZSfSLRgFeEsvsBcRR15aZD8ZX7tF3igj4egJccNnT8w9dX2pwjjatiQxpE6BuP7t",
  "key10": "4G5kE8biLGxQHGxXfNYJS7kwvcdm4HkZ5RARwVJHS936wgtHu6xMRRjhDCukRd1sNNDw5Kn8qnCFNd3oouFRs9Kr",
  "key11": "5NHbxwhnRKj3HYeX4cQWgpBgsVJRrVd5Nm3oJ2nMi8cooETGb4Piqoq3gkMGW6Zfiy9PukUUEJNCjmV6jCqgnUXF",
  "key12": "skDBrGp5rp3P6uD98tiNyW7qnxpYSk2vnrNznmhKrxXrQLeyB9kGVBwzDSKXN8WbaR5iyQRJv7Bue3kPXPfU9oR",
  "key13": "VkqCLvoZme2nStZUEnWhP5aBjLiCjC32jqG5RXFDLk96Hdsgyki265kZfLhPmWznMJ2mdieNJ5rwgyjZ26W4FFr",
  "key14": "5iqGrsWcHhmegGHWBpK5tnSzQtvfMvUhHCasfaktk7J9aqWs7TDuPwVSYEV5UotXbTTXuFkGgGBFqf9i5vSHdzbS",
  "key15": "29fssFhcpZqU6TT4hLT2MK2wDTvDaiSUZfqt1h9RKPfxxMZALUPPd6iu5eWFMaL8JfnvFmx58PizKvzrESm99AQV",
  "key16": "4jbhHxMDsowbVyi99nBVx3KqU9UzqsN4ZS7AAznHiHDxXAGsGyEZKJtYKk5pmztAVSQn2cHsmqenVtkFDvCAeXU3",
  "key17": "2noGJrWjWC9uFdwhfpK1nWxnkz5YsqneEydYqaZiuXXRebN5sJ1vC9MMgpQyKz4aVWQ5MVi9bCgLQh2UTibvZTPN",
  "key18": "2CTydGGKBnu3PKRdamSgLP3TaAo3CrgDZfUU3R6CPd3UtvEHXtbESKsgi2Jvr75JuGvTzvvbc1XBbL1JmS8TrCK1",
  "key19": "58H2dxjfqqmb6U5XkbsCJmkSSCnnEJ8EtVdUsnuMuJGXH1WQJZWs2LPbcuk27ffSfZWNbXYdyCvRWxbGoWWzcod",
  "key20": "2q9TLK3Yy9UAaKhtUisCFkpkRPB9rdsS1uhn9CSQZW6RKFAGbMmTVgSMSgxQZe5u7jPX1JdAuKfJRWAQ5BXGJcCj",
  "key21": "5CSX2QwdoXPqf6yrP2kDZQe5wEsQC49tyodqVYPkT7nMarBm8qM8r1wFLKk1gJazqrg9Za9kHAKzzEUV9YwaC8aC",
  "key22": "3ngtnt7kEwdiZUPsNhBymxGp57rwQQzBLyqoVjY4uzi6XR44sYQe4doz6F6WcMVQveghWGNcjbLa6Xc8qxUjiDHx",
  "key23": "2EM9YEw8gnpxmog5mALKqxB6s6EvFGtqL7gfyqF6LsT5ZWK26P6BsyEv4zwjoKgbsiLPRDvQoaTeRCj4U8UFd2xX",
  "key24": "3SNYWGdjqLJHVwdDGMaBvLy4imMADVMVKtetHzbqnRx6ixMFTuRziJpBYPKvhpEiMoWWKsJJiESNvwTU2krEjup9"
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
