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
    "3f6ru4oGHAmQA1RMNLcn8kfDBzpm2QsccttWRb6ZKBbiK5DKFBWCZ4Rtkvv7xnkYke1ZrCDyMa2GPugGt4cmU6Y9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UzVf1b9cEcUN9V1AVtAEaQgecMVBYNeNJ6GATgAk8CwQJoe7Xt1b9uxgkoaFQ7i1sghtUFb8MjdQ9GxFVmfRLTR",
  "key1": "4dbnLZJb2JrRxvhEvd8FdPtmbwAssPt5PvnYEy1gQDYSW8k5Z8SQeZMUYmDZvq6JG3KJ8NhpcGaeQ6ruPRnKLYTg",
  "key2": "3nTyacYLwRVe1ek5WuNg8RRzzs44Ze7dQZsAw9wo5MjtN581Y3pUmDHDnKkdVAdUd62EiVK28EGhbgPXr9Xcxwoa",
  "key3": "4vZUvgMBjvb2CALGC3bHAL6CqemY2stMFrFpoQJUapJe5nxBHNobVDXJSxc6jEMghA5T7xriu3XEAEeBi1XNR43d",
  "key4": "3C4vbnNTUvToHNcxp2DeVbAnsuDTMvFEAKMSMrbpzvJpVLYDjBH1Vgiz3kCuhM7G4Me8oGgrp7RCi9dgHSi9Mb3R",
  "key5": "21irP9puRvef72jpULCGzT9Ja8YT9mSS4MbKpTguTNCNfMPDQHtkubUQPg8BADse5odtjkn4Ddaju69SG59Hbd9U",
  "key6": "hb7icxctd2ophjEAg43RpggwZpD1ia55EoGv3Bo5LyNrh4LZsZdp6q7fsfAX8q7S8HT4VzR5yiBe97upNZxdbyw",
  "key7": "3rKXvxeMtWArZDy6AruWDy5pJujT4g8Z2QttYie8R8NEr3TJZSwYhQb1WPNmTHCmG4ydYKfhg6J3ks4nzt1cqfhW",
  "key8": "Lz9F8qv4T3A9P5qABRT4NtiBPcfzJtXMNFMJVLP7EKmWN7jJgnmActpZpim3FRtXhcU164qErgqREUmpYrpUJpd",
  "key9": "2ogcxLzTMBgFGWMn3iHEtjmhffvYvHrgg17sbUaYH6TRovspEszH8bRHxPniWdapQREhqfNKsYe1KtQzPwEntMA3",
  "key10": "2VbbqVDbriCXQApFgrRWWuc9gHyRaTHRHqEXoboEQvWmZwRZLWSnTLsYokTyfEA8KaDBWwQ3agoLENwJjRxUZ8WU",
  "key11": "65QYEBbWQULFJrij91LwTqyg4bKkhgWSsoYkomuPK6xFeuWMXym5TxbP73SGXFd5U5AA6QeVQ36nvbrKJte8urJ5",
  "key12": "39ezudCGeeW4EEFGSxP1Zc4R3U5oBTMnyzR51ZBV1smEdoQHsZkhckspiJ7u3w6v15Cmpq2aohGWxqMdxjxnk2fh",
  "key13": "5kSaCU6KFBN2HES7ibzmhLxjWXtpj5LidmdUMwHAYXL9g8y2CnaR3kPiekzEj5V91DGCXUZdapcwE7yHW6ggEuQN",
  "key14": "5wJobkbdnKw6yHNL1h1EAT5HqVHuLWMiPddGGFPvJa83m2zsqTF6iPwPC9tvPeLC8aUyfEm56LNeQfk85cHtVH8",
  "key15": "4avK7hfRW7S5BLzBPbGTC7YwcK5sjwt3NGFXKBhcCZhKFYUQEuLasv1tewZh2GX3sNGkhYNAYf1sxEzTf3HBArWM",
  "key16": "4cv9P51HPrNCR2VcMTEki6jg7rxo5TvR4CygwCf3Mn2ZU1YY7MfuFrF1pow39dJHPJg4ve3aeEK7oeAfGzBCBgTN",
  "key17": "53718DSCfGRxtoEjK2icRs6ib71zKnJxjgcG4dMHkk8BHvnG2zsNZstYfGRn1mzh56vgKpVbY6Hnzs6GvzSiqVUN",
  "key18": "JLuSs2159znq4jMLMpb42yCXgbpfjLTqg9Ffk1rbmNesvb63UCB8NwN9T3ea3GBbktAMAZUNsviJxufxrYPwdYt",
  "key19": "cM2KPDQ2x17U1WW4nt8hKLp3z144YBFTdzm8z3NUNG2Vy37Frq7ARiqGuqKbnRjHrycRngvhv3CH51v7EvJARsx",
  "key20": "4wk9CbiUcWA6nb2w7bbe7uDFWmu6JBxDsGmE11ZVrEHFxSMZkoCx2JKa7ttyjV1zEYpKrTR1dGPbUjhG1r2Fc2pf",
  "key21": "cXZtRSS4HEzxeYb2B79meXYfQnvSgRh3Nk1oeNh4hsV94Mapr5WVkVXWEt9H2zSk2tptSdYsHurBewbPLoAYKPZ",
  "key22": "Ro2477gSVoSPsK8sTTxdkrT9SUTtfQyFsrZ5GZP63gupXVrFNeahC7F1kTW69bwg5SwLUuoTgUrJpXG9R1yPJfN",
  "key23": "xyDjyjhvQGpsS3f1zd1QAWKxuUYoAdaXbJoj9bh4NLANsgMs9Gm1CnGJfLN5xwHQy22V7AbFHS1UXxi5Kzerixy",
  "key24": "51uK1sBNN5KkkTSHuohp1hmuK1Wpvx1pPQPf224tpiDSJfh1Bb6nppcwetg7eZbABrvFsGmWGfjA1LA4MATQBnUN"
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
