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
    "5xUcQj7tqFob5iWcz3YLJTxcU9GKeCsW4N6td8rvktwrJqFXZzZVkNcL35VSv1Zp9EYuuZuRfuq67YZg2FgTAJNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WWrDPpye5W3FFbpTyR153TuXeKLHpYFdCq2RVeQKYhJZRrZRHREmaoP99EgTBxWbTYjwaUdH6vf6Y87eGuT5EwA",
  "key1": "3npGehNRYa5CtmTasrAPouWL4ZwfsdUEYHK1tFPgQKz7DqaHq5WWqGsFHNSgoZ32LnFQhRd33WWtwMNB6FRPwdUT",
  "key2": "We2sUFHNmiojyMHHzeBrxmhAc2DdVSM8456aPxmwjHM8WrEdWms9FukM7nPGRzvWPvFsTGK3L6RPnTcnB9HAKuY",
  "key3": "4zDyhgei4acN7W9ZWmrNLP16XP74H42Dc9fZG3APYRauRuqQcdp7JVxV4df4u2USBgWWvxtqo4yjQG2YLDkmxR2k",
  "key4": "ZQnWFvsWKP68G85eKWDLNkZyZwAAvY1HiM8mAF6H8gsPohvhn4yewUPmg2XNcaUtEzpA2gpktizSvEBK43YZS68",
  "key5": "5KRUnPpJvwZSXXP2tV4m5pJKpKmy22hBX6FUNfLGUGPR3tumKao5dygf3VVLMgYK75DvASf9gWhkSWzfn8zSUNET",
  "key6": "3tCbiLR7SjqSAE6AiDsgGEtyXGjSEVZpVDWKMDUa2Z55uGTm9fnnAWFCJodCPYB5UMAUNkQD8Yiijkao7a7ECXa1",
  "key7": "5ZMyUkcm1wUgXgoxLiW7yMYpNn9MvDZS3nZk4vKcveWxJi5X5UGDgXFvg9vLwrnjp7chHRxfD7EdEhYn3NtozpMS",
  "key8": "5RTd5qykJwqKwnkCs44EiauzKoLDNiNbrjQMUzUEx7aXRPdBcor7dYSs9Rdaq55hS9MzvyrAX5Rpt6BLMp4RYNub",
  "key9": "2iypLjbs7fbhhcDBroX2kjWyhJMyMt1cxqYmKN3KekjsY5nG4cs3QQMCWUy6Ms44oUCEbdnA3wT2Cji24Kv1mWAK",
  "key10": "3y5BJqnhEE5hnFrazUmsvMQ9argNztVu6h4wVLDdmDgD2BMKGDBzJWCXHnyx4e8eboBXkfp5XSLBDamyDDgvmLgJ",
  "key11": "4xQ8mbYkKAETZqPHQGp3ndFACH7YAL7EZ7PcoL9go5CAJ7ZLkkkJZcQc4VS59VKYRahEJBYyhRQ9pynkzob2wME5",
  "key12": "3TwXwREXmHuBrg9j6YjxHuKs5mvPfVo4tqU3JAJe7yg37phkYLrgFUS7hvoDkA9boSMgjM1jfSTpgXemeBKujVyS",
  "key13": "tKCsUArXHPqMsDhHUnZ6xn8uBHytVqw3njJZh4aRoDfV5U6vsM48dttaXZz1xW4whxtNwrfJgGJb7T2iqDjRAQX",
  "key14": "4o6c2Mp1g4p69LETK3SwkdVxCkYJ9ALP1ybATRJxqf8ciCA5ibaWt7TaT48LMoXpgMHx7yPPopWBZvC9UwULvcoX",
  "key15": "414Ca6opRCkKhqfCJFp6Ydw7FtH7htHQnpdKWkuoYteLBi4YXzzzfFXJaEiYviWJ7oDjafd4V6L46DLqpGpxHE31",
  "key16": "5Eyiz1HVHshekFmmDrUyEDsRnbkj2cFYMP9TEyNGmRDeEoqsazq2vYCHrA5NwyNuZxYCSsWR3b5Ls79Mg2NNbojM",
  "key17": "5wCJXtdzbTJCHtAPkSusxGHibHH32ZmjtDocUuP27Snvhq4bw3m5SCBL7UBsQeDGnAUdEP55bd6ARVaB7mrQMsAa",
  "key18": "5rjA22cqdLeWTbDV7ahghKch1ZdARveZNbEdd25u9jhQmrPkZfE1pyq8GUWwGeN3L1q1VsuT7EbYLA6afLXHZfSh",
  "key19": "3PzYWP7ckqpP9EoHwXCBtpYRsMWY3bFxkrvTC7cPAbNN8ZF4iff851s5d437zdstv2tGEiDaYaT8a1wbmeR1hi1q",
  "key20": "3P2DRvg3XAGQLyJVGEpgmD4CzhEx1jUw8rmUxcYwbxwdwqF9y6JGZeXDcQnUpdhy52LL3ejo65NczLvWjahFyVsH",
  "key21": "4Wm7MmhbJsEKb2x62YBVM4jNsN7ZZYKMvG5LMbxPJVoCHABLjxDGcvRk61CuQSHfSt9cVeE8SHBj3yegJT4k8vtG",
  "key22": "3dAg7QPJvS8hTTd7zTYiyEE84z1QZq5hTC8SehfVrQePJ9E2jFzV3qZpChPLRKfFUhri1EFFLuuAYZG9rfQSozW1",
  "key23": "5c99tx3XErzNwDqNga6hehNxnAKqrsyXUHTeqYGYMwx7N9MK2DF4t7rJUsydSMoYTCzEtv2e3tULJrrPSEiexpCn",
  "key24": "4GjQmPRcKHcCxrbALQQKWq7tCkqGPX4dAjNNVKVXRyKj9Pv9fxq2eUxM7DbtxnV9nk2HCyT4i7Q2oXMHieKnKmsz",
  "key25": "2pVAcAVhRnhq252ob7uVr2wMjX4WbwaotxCrQ5hJFN66XVq7JZN58DwVhyBVP2hM389T5xEPLeffJooRjBR3NTti",
  "key26": "5G8jsGxehNRyYfwcmBkoA3BXHrGmbEWMqyNrfzSYk1E1VWxFsf29PX93uNkXykTwchpvzJs5DU4sgnZ71DGos2kf",
  "key27": "4cGxbNfCDYKYiXcXDVqqxCVRh7cKVS6y5cmGn6W3ZeFoma5zi43bzXo6zELBCGfwcbYAFnCyVEGxNa6diZjjGbLy"
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
