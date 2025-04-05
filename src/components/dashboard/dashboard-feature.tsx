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
    "jL5jdZwbWt6B2rEMatvHsZvUsuUJWGNdhBXP4ksMxRGDj8nPrkmfyfYHaa1wv8qwh3beTaMegF4NZdMCcDvTTpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pgADUpEdNBmERLGFfYRJpz2Hre8ga7f8UJvyVoJj7W1ScJquZFmGXgj31be6wKL9wHAQBnNA7p2JV7hd2pBUNtY",
  "key1": "3LkhWM3Uos1ebgsfsJK1ritQ9o16q8tddS3PhLvMPHQq1ARsFTtym1UE3ga5VtGcBS4Fx4zyoUX9soLAZMspGRLo",
  "key2": "5DiYVRvTMGrkqX5AL2XRvwmhqd6oBzxYLxix8WAqm1gB6XPq5UgUov7yFRiFrZPrRjRUAH7MPtup84reCpFeuEaF",
  "key3": "4VVmLx6CVrqeZubnf2qrW8TpEfM3RF6HVzNsfqNv3Qq37fTqbBMFBNkUGf5ZmCbcfFNkavADvUm6DaU8RpxHp2dH",
  "key4": "2JuHYVR469P1aA9uTgZkrSN9CXvDWXqXRfzjFxCtR8AfoXnoDq5aa4WxXfsmDoKyNaXzMrzY3qsuGkqLeympVqot",
  "key5": "2cGFFqqpR443bqnMoMvAiQCz3he2UFC8drTnmd9nhb2cH59REE2Z9t3Ap2XUvBun2Lp6PQ6w2Hzuae2ajBp2eYps",
  "key6": "3Vv7NNEP2yk3x245dZrdciZ7Jw7gH4kZvq47eBVDWsxdN6M5Gh6ABp9MfXZMJaCriEnwXH4UHbsgBchqHRr96K1p",
  "key7": "4gTwxUDPf5cKxV7P5Jd8MEv7TTf6UsFLDRTv4kNnJaqdR4S1y8rwMifSYv2GyNLkgMezB6Uwhvk71LvdfUSbpboa",
  "key8": "2Nj72u6EkEecstoS4w7cyQvH7PvZqJ8sAzJ2RkitGq8KjhJ5MWqVpwb5DQxWao3W4jbPPLLM5dDseMCy6R7waUrW",
  "key9": "GKRiCErje3BD7J2yuZp8dkU5hUi6WTA53wdGDKJyA8KtevCzeDP14XG2q29UQBwCFe9tGFaQM9aR5P6KN3bGdRa",
  "key10": "33VTW9T2PcsaWhnGZ1pFek8C7TmDkB52xmiwT1JTzxR7nj3zSbHkjgvNMLaatpKvLWr1JHTq8aKFkdu7BjzLWYVG",
  "key11": "3xFepJYZTqeX1K71p475Mx8fLzFWwzbQvy8NBYBMFt4KWc2kYhrnLziNrGinpvtfCHa5bCEzvKeUKBFokzmPeTMj",
  "key12": "o5vjD5wYfGW6NRUm733fKoBntxJSAYUxuMdJE1Es1XWcZg9cmxSyGipPabhSk5z9z1fo77hpT6Rmb2TckduQcrB",
  "key13": "X7CGyL89gdQbcog4HBQmkGmyGCdTSVYPDY2iQK981H5dWa7tayLNbqzAYE9WKqWZxfqQAroG5aE8uX1SHbHRqN4",
  "key14": "2BN8wTteBSgFLE3sHSby7kivjfEyGG8kwBb38UsbLo2DtDes9YSCUKevjtdvsarmGbjwHt7nQwLpzeFKQciTGYAq",
  "key15": "4yZBoiw1cSJsmYsYsoTtGos2iTV3usagZcXpUB8ucXz4XBbxfrDJrp5MHAqm3xA6gbYbyTkY26v8es9tNuDhPBfX",
  "key16": "3xtddE58puEpetEwG1eRhkUY9iRhYLdDzUJRHoy9Wgh9u78A5CF4vzFCymeHB6EVbXhShvjLXYwwwrVvQ4xXUW2C",
  "key17": "4CfupvEzuQr5DMn8JPC43u2FTcerbH9xJ9M8p7cUmmRqXSzfjS4nWmFvnemHoUjtnk6RFmuXvzByxsYVyxyHmAig",
  "key18": "37LFxzKRMfaJyhAsN4Ls7fPyM12KfXzxvMDVoj7DKzniXJRA7D7SaSHdd5XUXbhR29qsN9YTUssfxiQdvpREgYQZ",
  "key19": "2Ab7QpEq919BX9etx3fspqVrRpqB57GgTG2Ldyu7uVCCTmNgYaCyHDhwSS249pZtF5vcWYMP26DWj8BifZx2dwPk",
  "key20": "3uzPtAAJEckcePuiPeMQqKsPk48EnzGsGgzDHsdYTcq8eCRKEKLB5RWxqqmcMeT9jntYYUp76faEZdac3RkvB34Q",
  "key21": "5pGSmTfmFbyd8tndk8TkRwcC4WYxJDodsr3qRUkyX4rNMG87u5F8sGNVtVuFRnm9bmhy1N6eXuwxnv78BxKCtn6P",
  "key22": "52Sx8ArFWC43gFoG7LWBcTNqD43TuHYWC7u5TSpUhymfTgvs9yYN2yJzePfRc8Bqrh7scQz4FQ3gWD9kRY2PnM8w",
  "key23": "5ovCjJmXtvntWUi4MJtTPcsxnjUB2A6gHbXpGM4nGjZMnpbX2HVB2LD28ikvPqsUPMPqGBQ8EYtADLGeEzhTYWqw",
  "key24": "dfzsyZeSu2hzeeurxBs1SuLxP8UDuv1iKYL47PAjLpJYGTAqBw4gTD9E5Y7kMRGPfF2KSSjgMXEAdoHo5ftiFtm",
  "key25": "3WvA6zfj3xX6h4LZc9rJ92ntQ8j358paJsnN7z5MAkASfdjpa6g2KA8YKq85wFy8Q2hivEUHw5ZyDNaXrEHXiFAx",
  "key26": "5kPRvN5VWWHdvtyJmi2cmWbCR9zVWPkNJ9AqfwDf7qwv49sZvKATtGZsPzHmXrAGroJ3yWeziWCxtXRR2Nh4QKGQ",
  "key27": "4X1zrauGex5BtBQf9Y3c9XcHkX1AYbd7yV5YzwcUG2yjGrJo43RZW3jaJAMkCihuH3mNNpEtQPeiEepCc1gMvSZy"
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
