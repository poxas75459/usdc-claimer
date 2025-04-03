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
    "4ECLr98sjN44VvZyGxqmTkG3f3XiXwGKrGjeQ4H9iDhH2UHA2PDd32w4UWuUKEjiW6CaPvAjYo1fw9G8s2nMWRH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h6rvh1gbbewNfBH2RHWBXe8zaQufCUCjVo2Hz7BVryp9x5z3CwdzrWhCe4qVADpgZJ88i4c9vWb7ASeVwTKcXxA",
  "key1": "5ofmTjLD45JjJc1Y9v6kxKgZST88C2g5jZXx9Ps95cjL2u9BqSJrnkCScFpKgUpQ58fFjCyMT9NiViYUTq4VFGqL",
  "key2": "2MpBDVETYmmrf9VwSSr44sX2hXjyeFvFL1DUH6UrRjgE3m1XqdCgjHxtYpiJdD9gXzUwQZEprF1Jyg5orzJxCkqy",
  "key3": "4bsyddT3k46Wx4Xzs91AAJM3sTrhngkWNnCatYqzmhJieBc5sty2iPy7mUEcQbVrK6LwuYn2jVNaTeuePgezSimX",
  "key4": "4JW1swD5gZsTaUEsT9FF96u4HAWogAHDB1shPEZk82BDWyqtvuKUErUV1AcYJFtMZ3jrc7KtXYpofV4PkmjZvp1o",
  "key5": "2PZhjXFGCLwjmpRqAsXaJ7XCeVqWv7DuaS5fY5obZh1VZZidF737Jjja2g3dTweVAvcB4JxEB2KxCDtvcUjDJDyJ",
  "key6": "4Sxd14A1KN1mSM7HP9E9zE75x66q1MySZZP2UD9BM93TbfBmLrqrw85LfJNcLt9SymSPgBp4UUmyGtMNaPq3WkJK",
  "key7": "28V2aq6bZC4CtaxsZdFdop9AsohXqTu8UAk68H7ThW1aioQEFEBSEaAzyf88UYmhFShFum1JjZPviind9za9VL4v",
  "key8": "41ZKhDmF2V2jLjgoN5EAz3BH4A8USDSooHKS7duwhdmovzAvp8uwESuRfFsxvvCAKEXWL1AXS4hrBj6JM3e4zTzG",
  "key9": "BTCiHTN6cbwXpCiwk8iYUfbJqzUeooSfqX2S5vzZfE6HQFgN6G7Jt2KwmAWKFaEATahksqxBzWFRBMSMhDo3z6o",
  "key10": "4CE62hgZYNYeeYtcahLgvMUW4773v5kzYx2dhzbh1gYpxCyTGQV6FUoFEvbi3iEdSu2g9486C46gjFLJBeiUgJ5b",
  "key11": "55ecCSaaLKWSUR5ddYMFDMr4799Wh5ewqEUCuSSUSTbqC8FQjZgAoBwBm8FY28voR3rMRstqBnFURstoWs43tRnX",
  "key12": "66v46yCDZFyM8zEzbqhWA6cGe5p9u7Vob5qtt9zh3Ey5UFbagYtqd36FPzn8eNZQmz7PSQ6BjuqQVUm52chYpcJW",
  "key13": "3juFPGLqtUGLZfaAikcDFkCVCK7oZTPR5f5NByTPdoJ7LmvhPw3mmTEp9q6ks2RPhiefEApJ3iqiNJmQrSCZqyxM",
  "key14": "nc8SckQr8zjMQHK3Wd1KL7xjMVFeFeZ1jtwC2LsHSFRf2mYexqNhrvyKAobUvMEdkXpJo5wineeo72bbSZK7uWW",
  "key15": "5wRXzPkwqVtcCSUURhTzMdaNXVVZwb185MY39ZkuFrULjSWnhbXjzGgkcxztip2Ydvk4uzg8ZULjWaZ5zgWjGpzg",
  "key16": "5YspBGAtzQmKG4B2zvgYWsgvJocbV4Y25WYoYHgBrCiizhiGB7ggFBPeKnryKKVzamFT4p6w8WDwnET49fpWv2vw",
  "key17": "3grh9vobNbtjhKsrogPxVJd3SZgmn4BVYCUP7kCtMtf72FTNUJJgiKfbxgVHpeYbZVhr14skEPvqSChCtwsBZGoS",
  "key18": "2DRcaJ2SMWhUDXJyiy7nTmeZqQyu5ySK2oPW3SiPNMLDSn75tzGr4gfHRT3TjRtTRd2SFPqCwGS4XimfHZAyAwLz",
  "key19": "4UhjRfKrWS1TvFoVhzG3MhcrhDeyeeePBKFHrLTQTNKDHdCSZxN4sWvMkREdSQBKnzUjehxiZHt7F96YyJK4ahg8",
  "key20": "5MfXwxKRzhf1U7YiLLXJp746aRLsU3Hddoz2UQVqAXe1MdvEexjnu43xBZU6TmJ947XVrtQgHP7njcTioVC6kfdf",
  "key21": "5PM2MfJuDZC82YRyPBZPUxz5dG9VQ8CYBNZryYR1rween4Uxki8iGAHRsapbKygsJLS96sMqY7MXTrw8xkHRp24y",
  "key22": "4HQ5H4msz3KWkfvTTU1HsAp5XjQCx8L7RxoaxZegbiRhdfWsuM85QirpS6LeBWcB43b11j7DdPnErkcDUQJAJAL2",
  "key23": "EVrCGmfxmy43SLKocKAAEwYVpVKpCZPCjN4QxR9V8RXuBeW33wQ4Vk9VrcrHH23czfAKr5kwos1yTk1JuwStdB9",
  "key24": "224JjEJVXvoRv9kdinATYXWcKpvqVn7iL4bkhYPfr6s5ySWF94kA7nQP4b24gvSRHo3sMBQ3MTfDcbnViS1f67qf",
  "key25": "2ZJTBcA4uPkz7hQsdmFP5jVLo7UBA6XsuzMPVMXBhX8dEmMqLSiVZcfc2F5LjrHBjXkjBLbAR9bRa6Fe95QZcmuS",
  "key26": "2Pk1gimXSYqTigRKEcemobCYHCAPoA2RnHXndoZUXm56b7wjouvVwZ4nHhiFNsbzf6kDYzGLZxan1PitHtcw9R2L",
  "key27": "3AFPDnbq22ZDPGiE2VdbzdsEK3bHkPBqJ4oaFnSbjd3H82o8qUpQGgw8G7TuPPEdo8tJ3BdHiQ7nSQm8uf4A6GXo",
  "key28": "5rvX3DuUDDP5kG7Ey9p3Hf2upewoPdrJokCSzfi6Rcqy6Sqg6CoZfNKht3DXknhaXFPUKZcxzTMqttMMVRpd2vBX",
  "key29": "5ZqYpVKQP1VTzioetQocr98kvEMY2XJp8xHsy4iUiQ1nLja9qEPg8R3zAaAzmMvHvmTz2HQ416RX1RyCSDXDywAB"
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
