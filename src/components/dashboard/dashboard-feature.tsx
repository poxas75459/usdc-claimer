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
    "2BPVqNHEJvP84Lmh7gtZSCk1MP68uGqbyDDxV21s1d1z1Kxf6uChg5JMqkw9RDdkHwHjV4v1Ne7DFmV2Ydz4d96p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ihGf7eBZwAvyuxLksMaemEwnma5JMsr16tLHN49TSGGSJknWfkU1iH1ia7UxgUHmc7RSsY3Ki8MYunbWiTJ9ygy",
  "key1": "5TMtQZuhCyXhsVWh7ExWVgfufdfRnHw4U5Tg2wcfHahJEQxJcDECYe7PRgY8Ai4rqDBKnVWyz563nZRkR7iRRNuC",
  "key2": "5yS4gT7wJ8RZzMRgRvbrqoRPT3VyNGj3mdRnP68zEeQ99A6f3tF5aAyKNssvCG7ZRq9bXhzhQZCh4sZvbPC4V7Kf",
  "key3": "4o1Ye5W5tdoJ8LgrnYWeTxEHKF7oo4UmAnzGsHaWNoM2XiubZnKEuDhKoVLoGtxG8gKcoTZJQWJB2X1B1dvPcuEA",
  "key4": "4oJWwcPuYCEWsZES2tHCNQHMRwFpWYGCsp31LT6NvzEAFtL7PR4XmBzgJUHhdQy7riZQAMbpzzZzt7Dd4rMFVuaH",
  "key5": "FsALmKVE4KCYQbZbj6dgsfoJgVkdJm7LBi5PoBpcALDY22rVG92axoHUQZLKFs6CkSRgqHw9HYQ6aZe88djwkzE",
  "key6": "5cDVgwkSGmBbe69zyEXTAT7kMKgpx7Rax1oZWBiYyzCwZRmj5Nd9eSKZXcUKBhJN7FUCLkkdngkoDS5iFMr6nhbc",
  "key7": "3qnRe9iJVcWnmUKosBtrK79cEjzJdLJ3whzakUU8SpNn1orEi6DicVNX3kK45qgDVFJZpYCLJNi3wTwRHuX4aqT5",
  "key8": "4aYS48zwonGKYEUPcEfLFRoRQZVBH6g12jNkjxEGynBeXKub6PVLjmpqZ69FmQb5nDvMRA6uhn9ZGm98NyZA86Qu",
  "key9": "5t9ozVxvaTxNhvt5ykUjsyuNZGfyJ5U36x4aWHRejqFjix6n1mDaRZJCDuCiFY81FGaKvtdTVDWtYj5FUEaV4PN6",
  "key10": "2cDXJcbZTjdtjVvRYpGF2VB25KE1X8HSH7t7NNnSATkH2dvMzP69C2MXBoL8Vf8m7TjHA1R2f3QptT3YUfGVGzfg",
  "key11": "53i8jA8CKRuKddfBXWeeCjdmGJhcCgeh9n5uD7zZgyPQeDUF2gwrRMp9q21dFWRhBZC8HzYdHRGqPbnQqX36U8j9",
  "key12": "4LzTtr81nUuZq5buhWMS326xA9nZuVWpzf3GQVedLDzRsW8UirPKqwLjrmHQDg8Vyb1CkdUfGqau66RiETThefSL",
  "key13": "4o2N77s43orSEWMNbwj9DSDYdmDAyz5tRfLBFvoMe4B3KYSCNAaub6WUjSXyeerAgAQfoLjwpXyShdP3hoRBF811",
  "key14": "5oNpjVqHjLKCMuqnxmp9kMFJgAYUt8aWnfp2sknsSDPGN5hJA1MJfMXnsk8SL5HrXopDm94S4zpZXT5Z27dsjsR7",
  "key15": "4tjX2z5jY77nAuzgJCKh2n6x1vS4RfGLMiDywCV2aK9VJNacNN3MM1hF9XXoam8Pz8Rnb9PrnNDrg51DvitwXgWM",
  "key16": "WD8pSoEnvcZejb2H5tnRGdVMM1Rd8dVDNXeEPmyfF3o6SuYneCZCBD2Q6SMoHUFpy1hP8tgRYfW2T9JRJeQ9cHJ",
  "key17": "2psaewZcfSjhUZGL1fmkKhQUQU4392AEb8eAhLeT5Dm9sjiqdxN7vQXhAkQNS7x1w4w3K2z3XL1WVxeEJmeZ28CY",
  "key18": "3GQuw4fSDzRjGtRAmL9AAsC5A3Zii7S57DfvmDUAVq1VPooxKJ7XpgUyqRLDJfRUPTZrLatRwmn4G5ZsfC1MvgWW",
  "key19": "4WDA5GFBEm5PNTxvniy3H8xALwzRAgwkLZLMLcrJynZwzNNfsMqKo14vrYjzS5tpHknvJTzRxE9gGzstMG7K4UTo",
  "key20": "58ZDr9Vr7819jdyf8RmRQS6jXVdamhw4qEeSHxfMdXAYD553PVwrFCH5DrinM8hFRNL2q8JCsK5xFkcCmUQX7tMn",
  "key21": "3SGViGdLSWvzehWzhZ1me7eyAzcg6nHiaJMNtbBSn1joUwTfMatqLiB4q4d6BKSYp97K56gYDeG6gBwgRVshNdfi",
  "key22": "2LWn9nrTR3CM8yCEN3KjXud1nf7SzEoN3MZ4LvLKXGgQTPztuMLRoYoHpZyPJgasjtPCVgWz6PowEgt1K9xSRtvH",
  "key23": "4QoiyJ4iUQZejakzPyZAikUyfjTB6e4cqASVbs7fVqvZhjJk1N4WWudoqBeS4RFptprozNmLu8nmUEwxXAe67YwW",
  "key24": "4tThPEDt5FZkZ9KTkvME6VweC13W8gDHHDXCPSCcjD5gxDvYZaL4c6enyhfpt1S1fdpjNpUxVd6X6x5qiUYxfzHM",
  "key25": "4qnvCiMvWCbH5EeGTuNzeRc94hx8iMwjCHEthTyHRxZWxjf6Ui32JoK32s2k9RNdKbyfjyHz35evUFGRMo9qCukF",
  "key26": "5PQrY71xet9YLzaz8zQmH5BgTV3YHjFtKKcCQLHKLZ1dhrxtQCcy2pzrVQDABkQq8gYHXmexHKBk945ftqiMuEwN"
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
