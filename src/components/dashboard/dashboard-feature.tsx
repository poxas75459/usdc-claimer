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
    "4GTaBSyJZEGxhoRjuL9LuLA3EyAT7LeZWoCueuPXJghUVWuwa9tT1H5KuTDjqXQv7KsmsW3WR6UkjiMXhgQd5b5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31NYEUUKnrgDZZTtMspkFjgRUa9KHyPG9kcrAa24Fpo3fYGxhou6xRmBF9o8MWHG3XFJcVyK1JLETE6Vp6TdoQ2R",
  "key1": "4TtbPT98isJpPHfLetFfTxommxjyXpK4bUbBFBbmEKYP1Trh47kKXSimNwNZWqYkE6aFM4uLmahizY5jmqD84XFR",
  "key2": "aGDPbqhEaM4Cqrr9pdwiSaZ5mLrAyziZbwi8exHefspP2EpB1doMCHh1qfwMeHwHQhxKxrDGFvVjEP3HPnPvpWg",
  "key3": "5i1GMwhkm7A6LgKJmZyk8ojAGRCVU94QvJ9Ap7QniPMD9oWMH6zJ1LPU22xc1S4nq584NnxvvdY81H4MAFPcTYso",
  "key4": "27uArGhdaWmXq7gdUDRCsv6XMy8U3N7hB3PxH4EyLRJuPBLzSynCQTdEALeoNFw937mpLk7tNKFRpZXacMN8gU8Q",
  "key5": "3u1qngo4G73Fwvb5SNwhZErGfpp8VXTjdjXK3T49r7XLDCGVw5eh5WrPbYpccKYcgCtctexPUJYtaV81JNVJ3bc5",
  "key6": "51ZYppmmchqBig5E4PPpZmDVLrqfUNvFhTVcRg3nKXHgd7LcGdLCPrfhLpVS5D5cnBhwNmZfdnsi6R8RiHVeJmtu",
  "key7": "4mLq3M9vrC6c6Lkp1tsi4TUiWknRH1H1ef9RZZjqgq5JLJdxSfS27M4obrVgpDKQq439eDUkPnhominryisByz2x",
  "key8": "4VevxTtVVv3rAomT8n8xpXZjMTnK1RL5YqmsDZusGDurxV1zUoTepFgYrR9b1bhtGq4vsrYSxYthwGuRJn6hjz7Q",
  "key9": "5MAcqS3k3oXA1gqhe79R3XGmb6NJ4zmgpdwZVxALCQw9Ecec5RCJ7jWmXVEAfZYNC7BYQ46poLt6vbpr78sKpAGN",
  "key10": "sxsUEzMUeNLyXQCnnGxgnH82qhomHBHtcnzVxRKc7N9wD2BWJQQsjfqFdZZCJGZwbESbYL22mNUUwdq34EzUQ9D",
  "key11": "25Qfwg1v2FWY2FeEZcfYSq9Q6CW4fRfFCJF1hmbZavqcjfhdHHqcQQzbugBSEunqC6Swown2wUBiG4SfgjhbAYWa",
  "key12": "5CfHtDY1dPvLXMV3uxndau2bU7NZA4KaJoPchPm3BtDDFVk5UESvDDY19UZmv1SduajRrnhzhb4fsj7VCKCiFi1P",
  "key13": "2Z1NYc6tNqJpaLANc4yQQZMetq7oy6RUTCCraM3NMTAsfhLcBGtDqEVMwyBELCg3914NuoDkTnRCSncUQdet9vc6",
  "key14": "2YGjXhs8ePZW8ZraiTZDVJzmgGoAJpBhF5Ld4fC1nuRPrjBa2amwK84Kk6LB5bBGA8AHsGb6xRGaK3tvMMNuHK2V",
  "key15": "4F4ciadCaqLXda16MP2sqkc5uFvhDepu8iVtiwkME2GVVtRx2wvoMLU3mYEVgieWE7CERE3gL6QR4u3ecw3AU82G",
  "key16": "Zh6QpD8P1usw2v9CrsdnjXLRACfi9hppK74iwcsogyo1vfqk7Z71sd9QDHfSLvRFkFQWKk1wDvJDebxFDUKGBfV",
  "key17": "5bXTrTEJjn9rsHdkvqgkR1FTYdhR4sQWXR3ANcLbdMmMeJ3epP3T2Ei2XNeUsmt2AM1NY1uvZPspFBPBKsG1An3E",
  "key18": "5kH7RuYXFCUcZpFTXBtgUEQc2oWWYCf3NHXKdguGLbVsvpMEM1fDDhoo3E4je3XwwrWnxV28uWhWkEVPaNnDQ2dq",
  "key19": "FnJJqP76mtyCgL75dtkrp4VoymJKyZWGmC6abHtNzEmQTXfjH2WLVoRvrhGTWyjryh1QQSaLb63cQNEztFiETfh",
  "key20": "5rJxTqWMpPtXKUbYqcLfXabu5fMycPqAjvpUFnPCb8oiBP6LswCnHwkiAC6HLDQafGFJ34W3oeMZdSh4EGPEBMge",
  "key21": "45WfrvctMx1QKHB6xEfktXDh1gEwGaTRZKgs5PvBt3uyqgzZ2PrNkZZQJQEtBqLSibvzCH4Rm3KJM9CgWAJBFpdh",
  "key22": "2saJvTKNDoCeGsdhrV1m84kMyKtFWXXxPP78FjRhMysZDZALwHBCeuNUXGxeH89KxLLknXHTaWuyc3GMjgFBcKgA",
  "key23": "3jmsWuJaJtsDRabVZ5Ud6PzMwdZuEkCbeaJws42usB1zWBfbXJAP2cK5iefwrAV5RHGoXEKrfhazQDeASeYzApiQ",
  "key24": "5xqE5vTURzoV5fVLbnLLLqJksujuQk5qGeZj9xPLzqECyJ7a6si8JPwCqZuKf2upEfBVvM5LAiBN49K1MSf713Po",
  "key25": "NjcVWLC68BKBggYifUHbLGb5x8qWq6i8uPb5rKMASaXHVZmqH8e57u8HTFZif2s4PhCd5PfDWFxNNToE9jZRqmA"
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
