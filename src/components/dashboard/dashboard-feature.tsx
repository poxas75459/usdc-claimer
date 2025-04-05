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
    "4eRG16FrqzS43JEtSXuGHeumwDfSor8dkKzENeUXwL1s751hf9XLqBSfQYPqapMGzDHYbTwmALyXjQoEY4F8iwUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A3tywjVr6kyX5hQgmXfLQw4TF8dcBkZpnRb6BPjdEppb75UpvfDXpevabDNyjz4FBxYZeb6qw5po4Wk8GtmA34e",
  "key1": "3txMexf3Qr5KQ75Zra147oYNDTAr6bNgVuLsVgZDcdYAjhwfoBJsa4ZVwEhFfb63XamUnVYAz8qv99Fn6mxd6XqU",
  "key2": "4wWHxCoort3wimtAHFjVc5HzgQ8b1G68hbPrL8ZsFz7L9vGsnDxaHkXGjtgrEtDoLLVMu6YF3kZqGcsekzni5piR",
  "key3": "34VuQ6dWtQxbjfExfnRVvshG1fEZMJ15oiBZeuxbguWEUWmpsYhrEaGWr7UYJcw2tZ8GAEpggnikXXAKqfGacBNU",
  "key4": "5WSyiEEM4SGtxt2zQiTDpe6pSSEQXxQCZAxZz9uDRTdSGcuhrUS3QPVJcGZnD27Bc5LpasX89cCgoUGXRvf655ZN",
  "key5": "3XRjVJ61v1dWAutKYoc9FihwoENrT2UCsP8t2y4kFyFYTWnDB6YFHgGQhjiZkfRzmP5u3PauwfTXKQUZxc1kP18r",
  "key6": "5KWVGyg1mP48dghMuCCCoHTqP8jejogGnhgeWywHgtuubCpfrDtKCNgDc85CjDtjBRVLxVSMcc83UxqtBAU3scRH",
  "key7": "27CpedFNba6tfiy7SAvLC7rxfMTJ8ieLA43nbE68J7bHoB9CaB9aNm8UKVeitREk2aG6begod6iwwXHM1rxaLWpD",
  "key8": "qvKxvWms5TJWzo6fb3E4kybA87PHZPSFdYDPaKnaXVgoR8ZvF5tosR1g9cPtKj2P1THoX9NnbVnM5DdzFJgofg9",
  "key9": "55Qx5fAiWxP27ZzfgJvYVu5HnY2Mm1GQvEEdG69gA9MBFaBd4sWeyQ7BoqhbJNFNv2G2uEzT2TU98C1c42VnNbDD",
  "key10": "2EVgvjZjB3LNbpMkDwFrL3C9NDeJrkgizeJcstCWFZhhre82cmcXXGj1xBHXnC2HKpeT3J1bBgh4CvpzFtnNhJkx",
  "key11": "5VweBaoe7Za4CTmL8ZfXHwbbCG1SyE8UsuNU4DkRRVjnYARVCdDCvZXtdDW1q2PaRWR8tiqSskmLQRP1wN8HtArR",
  "key12": "Bpd9fB7PmkERvhGvjX6mhyH6zgDukt9bvvcFyCoF4CxXADyCCNMUVZhp2798wqP5jq9fc9ALSLHvSqpY5WwYNP4",
  "key13": "4LcGUNXpyGmX1ehFRuZWYhYuUU2LNsJA4pVfADVsPZbD75yhtMm3SSJXpocY5VVMK9SZCF16RPt4xT23eoNyLnQJ",
  "key14": "3UcCd1KY5jKUyy6UGZ13pLssMa1443HTC5Hw4B5EZ29fSKbFB4k7DS923ki4aCcFfkyt6zETpTe6fPa7mZA1HvW1",
  "key15": "2eVPrS3iyZR3BRJLAvKsYKafnE5tcsoykdeG3FmKyQX7gR9w2UbHUYxbdSeXtG4CEm2YofrFAXaCJ5f6y9X2pBvu",
  "key16": "4aXy6Gw2BMg6KfY9n6ZmMH92ueu6T4SxrF1EHpXGEkf1fDadVf7esEBtCuhnh25C9fWFgxUrDEMcUvBSLVFMRjef",
  "key17": "5ocYh2SNzMfwVB2tvvMdE9eoMBTBftFCfKKhYXhhc3TPR5CWs5zhb4kP8JwFNXYVzk36crozS7H6apQcnU4ya7w",
  "key18": "2J3w4suRaNq7nWFeKuL4F6XCALyQpsuMSchk4c5SidWWwuUCmwM2GE9nyroT65rbQbAKt1FeXAwiDRzrY1ofMhVu",
  "key19": "KWea5CWpbVjqutUmKmHKEEikMdg8zD2b1DD9ZLRKY7C8WyEP8RYjQaUfViXeS7JH5qKdW8oKX2MdK7SkY7poVK6",
  "key20": "fYAN99w52AdGhMSVRq61Yq91fthAxfrATzAvi5uGZv769vSEobSK6zCGuJhkQj5uubaWTNGb7JVYwEVzKtA2LEh",
  "key21": "22WQorLURnyPY2C8GNkNycvEU5MQeBNnjx3oBXD73LwoJPwmecTziLA2npjb6SarjrcgQUMCQvQ25FwdXYwzqwqN",
  "key22": "4Bub3vF7aDnesZTx6DYthGkfaVB9Zoa9nwivjgdGD4DZz3M6aGXeVcgD7wQcV63vwikqcukTTKwnQpKoaLJRkiDS",
  "key23": "37LSTck943NPECkhFRzjyWCYP7DeWznzwSaDumxREhobqju5mKXz33jxThqDyUNDJxPGdEamaRG91afEfkxBcW9v",
  "key24": "47qXzF3yv43aKfnQhiRftiUMJnANBrc1X6s7PNMxDsESpfFYSyg9y2MawS6tTZNHokXRJ3kXF5UZYjNgKbgtZcf5",
  "key25": "qqQCTzLRsJWkTGJgw7uEodWk8aBLTc8cgin9yCmrDcGyx6b62qVa7PRfcTi186kRdBfQKJbGBW8joUSyY6Euc9q",
  "key26": "4p98Z5jRyd5tT3Npt1j5J9KSujyZkQmRn7sBrJgg1jz1yijmmTkJ7kkXSo8yUe5JrbqVfjhiXPyVum71tzHbpGk6",
  "key27": "4YA1Z8B6EjwEVCMXxGz5EjohDAXZiXDLsEQia2LrQKuyjpkXWXQPWqPAcN6yDJBazC8mBcDc2DM42GDSWV8M46yf",
  "key28": "5MZEGcPVe4dNmjCDcM3AjxY4jK3iuWsXsbAuCZoDougn98mFjDG1DQFuTQe6YtPC1MqDF3wZeVnWYFprH16yQ4CP",
  "key29": "ndLHUHJptJCJcQ1igdo3yFFA9ur8bz2yxMDYwdikBMjqTSmHFES3qc5baXAwcrJHqYrwQZRB4rW3LLZzsV2Hbux",
  "key30": "2AhgT1n3ky9HbAtCEH85AzjAfrdRyLXvu5XxdNPDdGZoFSCSijbuRAZwBd9gjYz1fJD6CqfdTwnL4wqwd7gzLYt9"
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
