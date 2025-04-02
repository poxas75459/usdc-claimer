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
    "4Q3wwXEcybHNzvCy3UouC9AVpJoyKBnWsEmUDXyC5iE1U9cccLM1NmW94JWBFCkDRWFJzTHSUf2m3mGZmGbyfFYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25tcfRJFkExJjD5e2BsxUnDYVZYXHxwjf1S3QucruVLRnThxCo4xYyzy7W8TQJEdBJdDdiQMmwPGW6PXAqtAcR58",
  "key1": "67HBKtWQGEoChu4b2Zt7JoDn9HMFkJPMBN7Vs8BM1T13Gs2oHjsSWh2YEPvXzmq1yQwAB7ZNBSuZMgwifmeyF8Dm",
  "key2": "4hBzJDpJuGeKCRxngVkswptMKJiC74bZ9nBGaynDvfFyPj9j7nVhtnvCbuvgFCYXxL7PnuQRsP6Fk6eqaJ5xzz3g",
  "key3": "66yRRiG6i2tRQUhMkYQ12iCNuafxZDWaGwa9GnQmM6LJLNaxtF11hYSnDg3FCMqhAvMDsyD1kw17tM3aXqxw4tPz",
  "key4": "2URjumsYcRbkk4L8UD9depvzVvaa2uGsk5L5AnWLMa1s89rASUr25iXxzaqcpwNj8PynNwCXT8zno6ixcDBd7jHD",
  "key5": "5N36A8ava7QkfZgXVjtWNT8JLYNRW7fhfrTFyRdoAmReDXya4fTotbQkaCum6w7MREwE2vRVb37r83v7q8QhcMrm",
  "key6": "3LRgBsuWMRuDGJxQMJvvkT4pGsJhxr2iR1Bn15XskP4SyaqLdRdbQAXRQCKHY5zSAQnENhHGfJMMFfMgNZQ4337V",
  "key7": "5BQsgkBGGwyEdZwecrmM8eB49GCTucnjAfULz1gtvrxqoAqCNirfkbsWYRVTvW6Gc5HYvfMt5vDH8x95SDZeW17q",
  "key8": "yHwDgafwu6tx7MNMnY6fk8njPQCmAWPoAa7ndxQmGuMwJ1Ay8ApGEFEpqeDq6qDcyGt9bX7qSbs8EyHzcd9NppB",
  "key9": "2Ei16nkVLXsYVt2xRXoJdFpA1iCf88SzaKurPV5ovghN9Uh4VcDkVhdaPEZH6ygeXQXvWa9r5NdRjp7PjUiDqgA7",
  "key10": "2jPTBFLvRU228e1SVGUKyVL6TgDZqnpPAfv4TJwvQsTFw6KhjVj6521aB3w343pzuxNjKLJuwGDvxpctVvxvKEck",
  "key11": "2uY5d7SaLkNnL52faE2c4WQfMdgBoUxbpszV2xEMJPD4tBXBmvZ3E1WJbShoUg3LJPSshYzYPNMRtnCHc95QAimW",
  "key12": "2eKMxouj59iZ128HFQpt2dfcXAX4TdfFVsTk7eAioTWvfPF5mUwmLVtxHsyC2ARtj3rjeKRzQEwPA9mzrCbv2MwE",
  "key13": "2tuo1XzPzqoQ7VHw9N3JPptBn8GYMZV4v4ab2h8y7E49hyrfEBM9BRmP8tnTWTwR84xVD1H9S2SJ6Qjn8R17fuRG",
  "key14": "tpLWejTPLBXGx6XZy6gM4SkJB12LkB7B5n5SGQeckczyFQVkdUNFCVxfbiDPPViGVozAdgNVShhcUEn5Sy2ooBi",
  "key15": "4vXAgL4H7fujFa6hNCdNaL5fuDLTcB42dWCx7bKZKsyLmuBhMHYPPALi7bheYp4k2zPop6MUUjdjgW4Mw1znt4Ux",
  "key16": "3rRZ1hvcbwLecFcW3Q9sgVhTJdmyvGgfDpYvsP9gFU3u3c4BD9NMHojmmAWFrSs87Q3XpQJqcqaodvH8DspyFkAf",
  "key17": "5bgk3mFj3oeEpXthKdrz47we6Mh4EgWeiCg6hVxmqEp2VPD5oFWFrvpg1Q1k9sCRct64iw72Brf2chwG2YGW2kA",
  "key18": "4Y9BY9Jcovz3fTiaMhCobKDpr9xEQCgpdctPXG4NEPvFDYbaLZ7eN3HfWKTrhn6C6RF461DWCKD7KkjAdd6NHqwe",
  "key19": "282PRjmVBLc2P93nfMygsKPUFeZVbLh5GqwsYkRZ2HtnNQpBjPqRpoEnzTU9wHyh2vzNxwDYDRK45vx8r2vcZZgT",
  "key20": "3vuPWZDNQ7P8ixytFo2MeEHDGt2oU6RitGnzVwdbtUUFNYiHaUtJduU84U3q9smu9YKDwqX3FwvpY1FqbCQiPuee",
  "key21": "4kRhHohUNem4g9y2ThdnuJ5zUN79w47T75UtBuPKSYA5c9BSHEm7s7sMQkQrvxATUSxrgUnsh3rJg6GSu7gqU7ZD",
  "key22": "63fTPwfYd1sr9zAZJC4mKvDHxq8TpHkQKH7wXQjNmQu2sqskzNQP34VyZRpia8ad6ZVei5WLYDmVbEMaaZBgqGVd",
  "key23": "3dAu8PXxpdVLFKgNbS8RYV7YxmpKCJnE34zYU3M2oiSRx1MYWFSTCsDSQJxkHyehXC8TgBj4Hn9x6ZqpmQVL6APg",
  "key24": "4wL8MJNH75U4i9s5GxKHSJprjT5o8kexX1uuhmbkE9885E8ksuiCF34cQ324YisJYNU4fCdzBkt9bHyXEJZJhsqX",
  "key25": "5p694bnskkVeczWDswMa1weecfVDYufpnRyeQcFknwCHbXrv5hFKDmYn2VLTT25LDHaHcvT4ZM3P3eCwSY5y7F2N"
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
