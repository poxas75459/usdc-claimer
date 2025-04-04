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
    "5XmyVerHgpRsnPVPr2Jkn5ZxEsLCmXhu3Fn63qUcKeS5cTQYP1eXcfGMLF546RZSKw81bm7fmRn8esYbcUUzZduq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UbPnHNR4Sq3HMMMUFyhMJQUnAqetDEWekf9WCB33FG8uKjKGBLzV6BiAM3ZPNC5wLaTDtbkMmL5XjCwg5RWjHmz",
  "key1": "4ghmwRQCcdvBQEFNb4a55FT99JFnGjPtgcg14Bh6iZfAi5SZstnAF15rf6SgVumtRqdiWa3zVR2mWmhofHZP3b7U",
  "key2": "2qEfxspHugo35uMBBKbaSaxkgAcKwQVUyxTNVx9SfPCDnQr4AueNeAWqQohqavhcVyuc8jmGGwi1cwfUNZwPswTH",
  "key3": "2wiec7od4n5rY4wjyJkCVzaDtv1smy39bxYognaRu4TXx3Df2sxfrVpLgfhhHwarivF1WedSmpCP7trzKLZgQoWa",
  "key4": "3mDgdMsW4yzRpp5YFVpNemJPHmdAKCR31wgQ8CBQ9moVUU4eYNPZhrDckBW8kpbZmkecAfyNQ1HqDfQJk3VWJw9E",
  "key5": "4nKxiLxEU3t2wqvkV6SxVVA3L6vaWaswEvEvofTfmS6omwp1EGjP5CpbqA5hWFP4KTvzdEGFurps3JMtKH1WsXPA",
  "key6": "35NzGStB1437urZR6aojUTJAak8szrfBKh4PmgiUdS9svkVkSZhxKSMfJhfAD1n4GhXeh7Zzi9HZ2gcMtufPj89N",
  "key7": "5SNexujAa9u2mBWcE4PcvTNP1bLQH4ZzhyfBa8G5B4EuhzrXfVRUjnwicbSEeN8LtiQxiVEampAMvdjsTKZp47T4",
  "key8": "5nAERX2Y5KPoHjCTBW9ftMCJctKVXiwkSjRbhyqa6dBVvjTzM3h6QnuRoJnsLyKXwUhk3JkSigXFnSid5rWHHmFo",
  "key9": "5mgvyz3hZ2sisTpQPRNw9SJpLZAosRSEVpMvSxBaGGyv9Hsnh6dj9xV1vXtvyDBA7t7cdkKM9UhFmboFYeW75UWe",
  "key10": "2BCZKL2j53NuZRf54fdnwbEZ68FnmL2V7L5V8hh2dm6Co1rRWSeXuyfJtmU4sVUk2DJiWxdJpMuYCNvtGA9T5jdp",
  "key11": "57gds2BKfg8BoktUy9Hv8YU19MxBQ8gjDLLdHEnFtR5Kn6utEoHBd7KGumNCLeb1Z8QJ8EaMRTaKGyPvVaPWQy74",
  "key12": "492vMxqANkz5xgQmJWw5zHujGzmzCuGd9BHTLqzW7RcV2XQeYmSgBgW924cUcgCpfP5nhigauSQgTeou6erascSB",
  "key13": "58NoExpisW7YF4z3CVgs7tr7t11ZEZTiqfaApcE9vcPVbsSZMURwj6icvH1HNi2muNEfvhr4HjyqWC5oVubTqgE6",
  "key14": "5KtXmEsbfREckfcZu6DRmVyEtn6NXVWToThQ8ju5iVphzsVYecPYSw7MCc5yf12uhjY7XDsSZ1k4ShgngYGeC3SJ",
  "key15": "6fdmsSuZc1UBPquMNoPmEBmGreXRmA8S8qPAg4xVKb41bvHayu689uvcgpYf2wNxPmKT99Fgzjex8jRBc69c7Ud",
  "key16": "3PpWPQv1Eq5SHMYDnKHp49GqrAAtf5m7276uF8MhhXBy34S3hzp7uUpuRRvDXNTYo3VtKPVY23rmN6aWdVNpZ9DB",
  "key17": "3NYs3FvCEhi2bC8Axck3jzY6HQDCXhknVR2LoFGAgpqVTaeGpAzBA4X5swhC9BBxktWZBwF2c3somPe3GoCwfzv7",
  "key18": "5JKZkkL5AtSTkvhu74TfVXAayGSHHmSCA823vi5RmXPhuku1x2b4MG8CiHena2xcG5ixSXsXMBBMEP5Ao9EfShqQ",
  "key19": "3aS6aTmPBdvHnQU1nvxYtkgmEByyAVfpoMwPoM4XFNL66H8nmZ8w8t8GXBgqYTBpHQURnnKzrVQLEG6TKgV14jRN",
  "key20": "4wyaUUuLocBb4rAz6khgoAgK1c567CynUYtN3HNKwMgWrtYyTu6aVnW5GD92xGZLU4EWhscyenU1jjo7D3yh9aKb",
  "key21": "cSB5uMfJPLZLsaUSM9yHCgzn4YQrBcFHYcdjZREQYiGP3ZEErhEZ2f8gnUtbgKfVJ3kHaaJpB6winv47wZfWMiG",
  "key22": "3LxGKU9fc3aLYV2FSDPTKx6rHxQDcTBtitvsYNhvoSoGuYEvbih5xRx7FqkfuMqEfwvS7s3mNtFQiReeY5FqFJxK",
  "key23": "1S8dFnZCKMgFyfbYfB4g6jGDWmqrhxk7pwJkrhhXwdgGxdGdSxyfRKrmgV3m51bsRuML7PCmMfoVJm2zjNpHKFn",
  "key24": "3AhpKMY7TrZqBRFeSNgNU8xmaLMrrtjQpmMwVwNrTnYqh1pi1V4NSFZnFyevNiVAYuQuZqXqgpbwbXFvYxPHW6zT"
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
