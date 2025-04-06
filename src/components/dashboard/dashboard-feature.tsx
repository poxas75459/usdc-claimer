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
    "4NjkUTpqqWABCQBqrW7UEnSKnghCyh63U8CYsLHpnyr3iDoH95LauzssVT2wdJe6NPRte2Hn58vqq6f9AdBVQ2u9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63HnqUUajY7NRHEXFgXFJYtRdGwqhRSEj2JuoaGbTAPPE7qPcsizVaUXzjkVBwHs1ZMRvrbzXdAN5Ho3xcd2KmFT",
  "key1": "4kges5V9oRaTx12R9RJ8dvsAEgrgV142WTtiE8w4ofhA56d5VditsyHCszHN2UsiAMyJy3CWdhHfTq4z55xQu4td",
  "key2": "5MBcpZRM4UPYTctj2km3DSDxojT3uTsPmejgCBnshfPkxpPXSYDwc6eoBEQopuoc1kqfkaEg8LnpKbeA7P4GgXWL",
  "key3": "6Qty5AgBvNT6EQyXVoZjvbJ3E82SzoAqJM4hrbve6VKKZwhm8b39qGx7NCXMH4RcRR98wSZxk4yVCxvhWEp4fWS",
  "key4": "3ZQ7MpGbuu4a6eQphAHeGbowA6PHeDXoxAHrZToCUcxS9ZjpdZJV5rMnUtMpAinLBv7Nmk3LcjjgMhSBcAAZ7bSv",
  "key5": "5MBasaqkfbZg3UhgtyzkEg4QiwPC9Fbfq9YPivLmipobhuWt7Pw2sMwtexSDddtVATVXuAUBJFUPonJJaAVZQ7nJ",
  "key6": "2gEMbsWg2NQg2zMtrCgGtjPvgUuaQAQe8jLG9iuPxucpEg9wCXXMzXaprNbeULduQcvLYma1SnsJ54LcNJ2fZ3pp",
  "key7": "2uUUq275t5dzNL4pPVYHCCiyXjo1Q1HqVyw3GYzdsopD6d9Dv6RKo9rxETiaYK5txJA2jyyNhcg1954zNZ9C6fx8",
  "key8": "SsxHGCZD8qzj8e7nrzoMhT8xVwd9Bvzyz425J5UPDN6N16kHGiyFhG7ybBiMXEmUoXFfDiP9hSb41qVvxA4QM1j",
  "key9": "2DieNpQ2fmmAnrYSZcMR6rNcVWDybhsfHAgF72bhrkx9D5feYLjWhtBDCkNte7EAq8jnjeMJVCarV4Pgc27eB485",
  "key10": "4ZuiJMp13qqYwvb1nHHeEnCyifEAYn226EoSqfHymV391rxRf2W7zvXSFk5FFLa7ep8Z4civWH34NJwD5eKc9m7n",
  "key11": "2pjGJ5fEUbF4Yqk75KMBZREGykRTMSqttJCXn69yzT6EmU3DuARJTBFhGy2H7DfPf6gFBfoHwQgCbUjiE8LyYyDD",
  "key12": "79283wK6NtsAYguSNMASzMYiehEskv6oMfK95ztXzSuha87ntiwYnNCVQjz4iAHKzJd2JDQrr1M8WwXXsxxaf8s",
  "key13": "5ZKHTbTi7uzNePM2cDtEgwaZGQ6ypgGmVXufFEe9dazz4CsfNALxSRYyCTbkUGGkZHtER2rtDS2QHrMscDzGS5xF",
  "key14": "5pmGRJpsDLNVn5CATPjHJYDgbbKVWCz23EFV8CUk1poASXS5sBZDV7vkfowWu5YfJjSE8tSELJez67XwrEqPa2nY",
  "key15": "Tuz54mi1Rq5j1UAvEFigcwuEUr3tkGBSTxjbT8ipqUyw1rjz39t5N5jPPwxx3sNW79jM5sadPHdh8dEmYreKnky",
  "key16": "4TGeyGjDgmcC1LVdVvg8icpopNykk9wEsbHvG8mUS6gXAQm7DNCopQdqGbgG49JRruts2hRBaz9vtdrATt4YpCej",
  "key17": "2gnSaQ3PRSx7mU18zpuvkYWzh1Ge9cjA3YsSmtDEy4LFNyoFf1X27W2TMjJQAgVMc5yEJxcNf93DxjTjQ1BZvBid",
  "key18": "2r4Sd4TuaFfV9Nf8m9YBC13qBUXTLYXxj6nGKbwkqcCdaBywrkTkyHmy3GXphh4QYpvWyDw9TCVrgxEFzzmLwvLh",
  "key19": "5Z4x783pcb8Xvp9cqT1b1J8BL3GKo1wgdybcP8qnwPLXcMrcWNGfiaimoZXq5chqf4zSHmJos31nQG6LmrjmVSFr",
  "key20": "55XyfWLHJg8wgkkJ6vExRfqbYj97m3LzoAHTA7BaQG3FGu4rtYJ5vD5yttJwh75qokjGwYwAu7SGay5dbct5bT8s",
  "key21": "X2RdbcLXxheciwcDVqcKDoaCqJcWrX3rzwcZsquG9GewBQbrYyGqJA9T2tsZkaTFkRFfCseQWbgNfuhn1jyPLfF",
  "key22": "4vTnVMUqnpbpWheC2JNTQ2iLuWupKj1K8UaXcJjGpNPqvFQqTHK7rcdHPe5MFZBpZ9ShTLFLB6R4t26cUhE66gPc",
  "key23": "HwyXDvicxTtyVChDtW2nPHMHNQKSCVpNohFVJjHsfMme8uqF2kFSgUqRDhoV8f6ynbJwaQhjPnJUt1eHtUpLq2Y",
  "key24": "4uj7s3YUCrQe9gVYd4CjAwXB3bcXLkh9BQaxq8AtkGRbNLqzJ6rL7rLyawAqCWwxAVPs85cUMghzREkE99F6uVtT",
  "key25": "2jgWMWAbxiBjKwu1CZZ9yWqqradryaX5wSpp2zAWLJGuJKMAakdEqJYuFVefEsMVsQZhX4XfEaTtLE7Gg3HebwLm"
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
