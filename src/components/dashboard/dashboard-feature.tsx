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
    "4rpZa5WGnVAs8jmLsacPXEYLbMrNSvDBL7k2y6urQ75Byi6F1wpEf7YX5rdVZdXv1KtNiRezSAG4ogCHbLRnnUw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WUGhAZbnryJFHrZxac7ioUJvWHVPd7rm1dLr95GG6z99xtcwLNhyuR5s1azfa2L1crcasfV81iVZrypPyvPZ56E",
  "key1": "bAqQU63pCbAQ1BuhQEegRgzTF5AkZJf62auxfsM8PYTT7XXvVqTNjEvFcMmETsiQchRFvBF61qSFUvVCQEXsX2X",
  "key2": "3EhECU8Tc831hRdb5jZNqjbnHJbUK1UkV8me8MzhJxtxg6bT8dHkXK176Z2BMdP5cjWwH6iYWBt6CQuXmfouwxGQ",
  "key3": "4ys24HmcrZVVujhtyV5CFeMnggeW1GP1qbnPi9fSTmR9fcPum3Lm6WjWmpkXZqKQY11z39KrhwaxvLsoMtuAMWUJ",
  "key4": "2shEvL5zMaTHf87WBvDdgqytkjkp8PCY5gK22ov9y6foe2UBXviDoxYo4rWWqnhQjNoi5wjwbxLSaHD4NYRAxfwz",
  "key5": "4J5Wk6JS8yqCminEy117CqxR3897yZVUzJ2p51akExy7XFaYimEvzM3wHFfv9iLcoaWBpNFKmyMAHgZ1EcyvQDXC",
  "key6": "jX9rqxrbDvqme9vuKytZCS1N3JSg41XoAciFFvRg3dBSzpRYMsKwJKeCvq5HYtak6Gspy9cwZChXF93UkncvqdR",
  "key7": "5GbYp7U2W8CfH4MsP8Xw6vq1N93BseTdBjKdpQqySSPFZq3pcc5TYUUoAHrGYdwPra31QAPdCVe7JuWoZKX4FpLT",
  "key8": "4JcC8iwRBhpZEH1miQkugmRbV3R787xuuxa5pdam31HdUKyWUsCnHnMDN2D5MYAn3wAVupFANZpooX9do51qSqVe",
  "key9": "2bueZXehLpixsBMMTMVre9FpGcWuCz7R6T7juHD23m4g1DJZW5zoRZaKDPqHMkP9Z4jqAM3qFKsf22hx17ZjAvh4",
  "key10": "PftNTKbGFoemsQoLpNY9Yj2a4C9kPpi45ie24tE8Nb9U36UP8CexDDPxDAU9d8pa2cFyHofp18spvYeKQfFNK4E",
  "key11": "5tH7mwLGqbxauuLzEJujXDK99gh4ixSYJyJCgYQgcs2cDwfYTKHfcQY686SuuX1ExHnC76H1D9PjhgehyoYiwQo",
  "key12": "WhqdadMZJzGXgwcoweQWyR3hMQ7juRRg5JKSXL6QzqRtq5G2cUZNBZdPo3EwtpSftBjnNiHmLmPWEkK3JV49a3a",
  "key13": "2uN3GuGJvWiqVbgCEZj9dbh6u4hY6B94K4481mWpzUiPd63j97GyGcjKGeQawgSrLXkXAs7a3MtGZ5TZPAdfHV7n",
  "key14": "sBEy9K2wXuqyQUXEZxEdew1jnkeZf6L2CPKhZPwqQmtSfY2ZbHtdUSqKfM6PJMR7D66eRYRtb4e6aSSo7katjsA",
  "key15": "2A1Fb1sZNcMM9uLXYLdzLzB8R2t5WKGsN71KnFBmYptdyz2yLGo6U1a96nLFfDDTSdfikCxUdv5awU8jysG26v41",
  "key16": "3LnHciH918bYEjhkAkRv4xT3Da44oUcAq8SKr51V88w7MvF1esftQxpvAsaK1YSU2oJddgXPgppFg4AdkKoHJfHF",
  "key17": "4SRvEBbKHrfjWFo1Ce3q5oqnzuQ6iQBWqYBUoK92VcohLTdk3Tr2X1FqhpQK47CZ9UZpV3HpPTV2AvDeKaEFu8KX",
  "key18": "3yxcgS1CcY7SgpQTS7Bv5aMh7BvgrWBbQygHZFrrmaQM6tNdudBt2yVa5zbJ6EwfSL9mNJ2E8yD1cWZvgpQ5gi9S",
  "key19": "3rRJF7QDctvucScQJU8TnC1swVLtfwa5fHfMytRv3frhogj4LJ5iduwu41xESnPhHZdKrAhrceqATz7L4chjTgMG",
  "key20": "5z9V8RT8E3hM4gAhAG9MMEZk9aDFMqdkP7vXoCTwTNuySSvMP7LfcHe4VVTFgmWobn592VRL39542JEhkgPyJQZq",
  "key21": "5gEje14qwpQPpskiJqFkEm63hzL1urcD9TFZ3cHF78byGSH1REZsiKTjU7dMqZGHKuaMBrkj3hrJF6rcR7P9iVih",
  "key22": "4rv5W8rdmCoEocLAnKPLhsxVbDD9w78hkXgCbF9Fwjr6xpZz9hghUZHTihtQEMA8AH4ryikSSci3fTDyWVmkt3RE",
  "key23": "2Ls5octEfWrPmm1JnpgTEZNKGMGZYpLkx6LfiXGpu5A86fNqTQHXywduCCvYn7twRxYMvFZM1wECGas2K5fnpcm2",
  "key24": "2siVMCgnufniH6Q1Go4bFVycYEhLgv3Qqwpxwgb6bTnnvhVTH14riVXHdAMts8Zo3HaB9yLoQAqTA6uDbJPBTqqu",
  "key25": "41a656jhy8UhV7UUHzFXwYdasEGE42F9W32jfn7QgVsoQpB5BAhuT9PioS4i9RS1JtLtKuNcwBcwW9UtDzQBqM5o",
  "key26": "28gheiQKsb1yspQBC339ttMDWYCAiiL9KFjSLCAnwqabUxaj9PPu1WKBVuzLeaevsLacjU5GR1P74DyDnaNbpKkf"
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
