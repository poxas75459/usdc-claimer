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
    "5zQnPhge5Jhczycz5BhxYq9VtHBWTmWqq7wJKWpGpurUcrfssjbtzKE1fGzLxd9bfspDgU8kXRjqYdw4sWfYojhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZmPrW9DfmmQaoRCkL7QrZ2zzbrNpHTcTPtGnRA8xjH3cJtmKrN4stzTntSPsmm9LLPtRxZMd6Z9FmrQMcCYyBym",
  "key1": "nhFaxH48d4n1Bvdbuz1cQYM7DxLZ4BHQNoH51r7LhZhE6LrnVpCA8iQtLHPbwm5ujUNmmRFEwvdJRJgWeMU8oGc",
  "key2": "4PRN6cJYYfNueDy59nLBSMgNcuSW54NvrZYVyHuLTZMcG6dodiXmy4pbBdUrv4g981cukQSrf8w2zS3tij2sEYoF",
  "key3": "3nRCHCGXVH5LaAi6WtzvAkwGU28rzDSjLtsvHy8JqwyF9qw4eqxUYaeLYSy78BCf9QRb5ZFJw9K3kedFUzX1iAC8",
  "key4": "54PDovbcWM9LryKbKKaY3J1Cb4JvtjnciKBuxnuAp2mqmNZ2KLihptvLJS8cTa7Smbm4Nm6b3MhSFBynAAC2t1W",
  "key5": "4ZCyB5JQ7BPnxcqyRswHVAnouLeeg1Qy79bqShehCoJ8RLz8dCrmYnzqQ1Aghj5dy6kWPh5KmmiGmBFci2a6E5Qa",
  "key6": "4F5vZvkVyYm9uUzNxEmSsZigXXBwbH11QgkZbcKTtG9FGqKGbk66d4HsszE8hA2kVwN9Ld1MwzH5iyFP6pDU1Ped",
  "key7": "3mKC5KuKGxvfVq5r7LbdFyZsJDvwNn6qY3zACyrwwJMt7CqCTY1iDPkABCxePhvJHKwdDC15KCMBqe2fpf6t6heR",
  "key8": "nSHyTYLwFzqBpb6m6nYHGo7tYTrvYcWZcG4X3MdZDqGYfFVaHZkfwmuWVp2p6tcaoaQcj8Xd4HXq9Kv3cZW2YPa",
  "key9": "5LGNY6hHhh64oFVwDS5u1x6zC2SEFPdjEQRBjefxh1LHWkHwAZjJrJanQHCSW9omBoaxVhmVM9TwGwELtCp5uTnZ",
  "key10": "2aUGZJmcZCdhqqyCFYuYHyAGBE6Bp4JHz9MGnG4uhpR2115cGymfZogFuPQcrfDhq5t3HLnLYZSd7AX2pvcd6ahm",
  "key11": "52ttkgCtBNUe3W9g9dzrA6XXH1FXPHriYcFmRa8jma67aHU2bY5dURzctqCcbwfxzdyKfzgjeUKwZFGYJPSanCSZ",
  "key12": "4DoEcfGjXsqcWFAqEREZmHshJcZ9Z8bzQ5r24zmZu9kBLutFNTM2JjZg5ktKxxg9DjDdoGxmqg5r5oMxcJeMnJHd",
  "key13": "2QypngZfexCk74DSPDoDDsg8C5c93LPxMxYKKQmSyqryk9FeQgzifeWrAbi91svFahZGfnJj8a6xKdaCfCWkQczq",
  "key14": "2pK7ZTe1A6TWKmp3RMcS5K65MikPTpqWTnAkWit2PCRjsksrwpwgzyxR9YPi51orKRBCJoShSHGszon29AnqScoh",
  "key15": "5m2zMUJwd2giLv8ZjczK6aKT74j6VrcX2uP3pEJpcQJw9JbhkR8Zf2Ao5scxNWr44bDozmqy86xbEVGgQAhuo2aY",
  "key16": "36fZWBxJCi4H1EwQWUt2s7YAGtPrBrsUCKZJjmQVLFaWuscvvj5G6XxnTWZsUGK78raDkMopL9uWgyMn9LF3RfMx",
  "key17": "5i8YAMiKHitTJKVjVr6EDxf1nQbs2vW4ag65Q8PLCe9QazYKXMf9RZTZHrjHSKmKyp8nNnUnUtSxuC51iGyB38NY",
  "key18": "5CfVJHy9x2J7BfhJGtJRUMLC17ttmiQXpb4CKcnuR5WMmkShMZVSpbYjBDg2gFPk7SpUc3m6Xj42oZzDm4UsN8L5",
  "key19": "3RePvWa8BtBxKQBzUty1xT8U8DxcMq1j1bgRfnxDTQ8UUUXQ1tYVckSqY1k7n1irGD5rC4qSYC2axuxY8XRRcLXb",
  "key20": "4mpvxfhc2kHRqcV9D6e9XG69ZCXQ2pgJrbMxf2VJCCnGBEGfJuJdHZ8PaZ6Q2Tdxfu1ND3z5UMeC9ejmRgeajkvF",
  "key21": "2gNP6iUjQAX4xczPeAoKCfyEVjtmjmLfkb6o4DX2E6sHeETzjroptzCt8chnxE75tuLfpLPDqo1XSa4mej67deNL",
  "key22": "5tL2Y7fFiYtY6r9QTGLdNrkm5nrphtxZP1qqgojQUgcTY1bxKYHoqN1W9qt3upTifSKmjPzL5ZbBiE9gwzVor8bo",
  "key23": "Bu5tPj7vkkM1D9QzUf2RqQ8etGuxGo9dLRjCmFgqroSHUooPzvaUynWB7Lnop8vgC6fkCA12GHWJSkFCR8BygJ4",
  "key24": "3T9pHC7w5AZC55kxNmzra54xUEnNGgXUvfhv7BYemra9A4dYpNizRJ2uY5tNxwFVpUc8wNAQijHYXiBNwZ8Fvr5M",
  "key25": "5de6LEv2uGG1iRVbafsWfDqbdEJRQgjism86jZZw5SriKBBZz9p5fJ3yEFVWfy3cXHmRquN3nbvSAJ2SZbM8kghU",
  "key26": "4NjHGpaA7aZCzWQ1EBAHVooE8SYfTCMmr8MkhSKpVBoojbkh18v6smQxbj4V3FTNkGGkTc5LZbWoHBeYFo2LArtr",
  "key27": "5uqog4G7oeWCdeLikRU1UtLW3Mvwp95jSaBZKSo6WMzdgjS4KRGD4tRCVhX5rFFKtz345BJVpvtw8hmcpBKiFdxh",
  "key28": "3rzd3tUxn3efVL664eH1LFRixQdgf6jc467jXfc2dxoBqYC9Mke7GrkXvStaujXyuQu9PWDchw9um5rtBs15B6yB",
  "key29": "EfJjzmLbF6vKZGUrae2dHNkQnN6h1ppeBcxzZEkkaZJ7GWWVcmZEyY5Ku8Vti76yyPnACKVAeWGbjWDzEEzHhMz"
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
