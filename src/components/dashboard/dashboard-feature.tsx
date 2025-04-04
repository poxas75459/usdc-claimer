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
    "3vFkAdwLhzfwnK9aZPum4fepbPfu7hmpszJnD6ZmCn8hE6mRyhmKcSG1RKgw4K4pCeTQZ84RizPmbRvGxJLUqf9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z95iCmFmFMc52yv54Z36DmXZ5ACdEfKpBKBbLGyCvJAFgTXKC4d6gGNewPTCxPjGaCajS53CKyj6GKQE8LARvm6",
  "key1": "46WJZTp1oK1NRseJNox8RhKPAdhEk9Q5sGUrXPrFbcaq4Yorex3WwrqvVubvykBrYjsY6h2sbo8CWCXzMw1TU6Yw",
  "key2": "2Ghh5LaW8oiDvQ4PjgUWQCfwrnKLR814Nftc9ARbFSj6pc1uWL6r55y3hABPA4v3PondDpHsN7nAuSWLn4RENr8B",
  "key3": "3HLqu78PMv6BHaMMy7jtVaA6gdRyUprKvTvAQb4UKE43zcgSFuTc7uxSFHKpPnAs7BGVh4mfd1invRmcToAaoNds",
  "key4": "8CjXddiG5m4E5xpKxgtgUgsTLMhiqyYCDKSdbA8ECdmcaZUM1jWQmqYC4UhHdGWF7VeANVcjBRsvsVRpFdURNgs",
  "key5": "3WpuASg32M3yhf3F9c2PKfM6FiVwNEQr3Zww7Fm4be2MQ6jYY3bmXH65JsE8Wjm8FetZPzShrHDjoL8FMd8DdjDB",
  "key6": "59XQrQTdk6v7e1ryjPwPN8vynL3icwZM63hsJPmVCrMKm85xuJvyc49oKaWvn9irp4RxVHpTDf7P7QVoGTk4XbR3",
  "key7": "4cFidXXEyTtvu57888UV4d13u2msnAVSr9RfTcdVes3aNDtZTxncBtB9B9Na52ZPt294u1rzWVEvxFaZR85L4xem",
  "key8": "yZmBCTFJJxMjXpXnZ2VfQ9mXXoHJmWGA1JUGsbMdnRraHfnDSXGsvaVv9TjAxJtcrXiL5VUcZADExFky2f7m4B8",
  "key9": "5J3g1gSAUCSs5YjRHkvMzftbLM3dCywHw7huz31h64wbZZ3ZTDZEuJV172phMqWTJ6uFHBnYvvRxTtWDT79HMNvZ",
  "key10": "jvahfugEvJB3zXhUzTq8KGjUWfCvst9A6W8hz6uqVauNfn3T6n5NDJftzyexcDysH8gQLC4d2rAdTiN6HbhKiZC",
  "key11": "v6nCagTqWJWpwTyKbMTa4Ks8JeoyrRyVxupmZ9gZ6TzNoAVqs85LzetBuGLpiwe5CCi1vP6hYdzRwWuJygLRHrN",
  "key12": "26pwQsoC4G11qD1RB7qLMDSwXB4Lqu3cMiwVHmCsf1VQ26zQb5qm25aX9buTsQh7QunYn2U6tXA3cTNsSGPNyRVv",
  "key13": "5YA5EDdfM9jK8fTpPkfb4wLTd33KbLuu57GzBW486zgfRB9kLAHdpY9Pkf4irkDsCgpMqToKD3GFxvd8Qcbd5tCq",
  "key14": "4xX4gep89skC1XYzeVFNrbcwazJNg4YSozvSbMjgfMeRhffFLFjvRAhRLooPbbCjZFG2SsVcxTjLNsY1BUDUZQVo",
  "key15": "3ppqn25ohtaU4Dr4apdgtZd7SpSaTHpg6hgmv3ii36ovoFgg8qLnPWrNPhj1N9V8TobJD3y99bbkv7CbrWxzDZnL",
  "key16": "2pL2voVEuvodiZpkm6gcxh8ng1yqDKdkjAh5tWwVokjbXMBMM6NanS5Kk9sWKqVRySf4DLfxLDSeFJPcrsXAkYTM",
  "key17": "TFQ6W6MD2MPgEy7UzAT4ySBq3YUgokbazBuScuMpiqiSTNcw91786fvhKzqTjzrjMx1yfJwazwcdC5BexUGBtP9",
  "key18": "2dnkbTzndje63cygG25CN7GzxCiSTyPAL6Q96mA3oVnEqagQdsuBT6k8yMGksu5tv5ShZaqadPt4pxwc7kY8MfUP",
  "key19": "NshLzXTuERdBaJ2Dtq4cr5U3QorFKa35CmW97pBPLTpGXiYs2TFJvBD7VJiqVkEmHXrLHf6ahL2donZqNkKSUno",
  "key20": "4nwPTp36fBGKw5sNajqQBXdw51ZJjAJd3WEFBBKznTEXJCYLJrK4L7W8FEShLfqibCCGZS2W5fod4rVgFcHnnm4F",
  "key21": "2w6ZnxbEmBTeZBHSWpLwrpB3MmWfZpeNEDR8j96kMFNCK7wp2zWoXFLUtkRvEjRaM6PZrG8cUWEkD62W5vBKVGen",
  "key22": "5qtkGjpUuFrknJBJHtvGA3z25LC7YvFuTFndtn6QdqWmm5HDD8AU126MUzrR6AG5GFCL3xNGXtiEomLxJ192dm3L",
  "key23": "4RCNVFXaNxgm1AqMGUAguozVyAhqeZbgY2VyRPKYfYExbR6PCLAyKqdj9G3L5bCnYS7s4r6whzXShkJVxvjbo4bC",
  "key24": "xbChWjrw3N4LKHWEpn5bqB87TN9cmpp64vW5Dubkh9G6DVu7U8YJYnssL5F3NmE1i5ZrYFrunNEQjXThQBPxfJd",
  "key25": "5VdWsmVMHvGWrneK8qUkK128PqBsqVWxeEp4wWc8kdNCtiQsHxGkjeCZbxzJmnpcEhe16WqDosrKpLej5akC7EC",
  "key26": "rVEWkrpZgBH977dRTko7CFqoSA7JnBxWF4ZHcZPpK5cBoxC6d8BybEtmm4A6CkTR4Z8kRM9Fmbzhhy8FSoQw1fu",
  "key27": "3fRRviu9GmRpyZYGx1qAaayAf9bcm1UzbynZibjbKLRvmJZgFEDE5ExTsCmVh7U2ea3CyDh9oCrcWmsdJLSnLg8k",
  "key28": "4UJsixNPd3tDQFj8ZxzvwVnr3nq8C7JRWtFfgkGRa676PxjoMc8sUWrBrUweReo6a8ithQFNWAxDuXZPwEGPshbF",
  "key29": "3bJxbH4wt3botvxMD6h66s7pmCo3yHW4XWFrcVvvwsbLSCRuhFUDxppwADLiJYSLE3EvCNNZe1VUiww8GxWzLR5H",
  "key30": "288JWo22ohFFvUUomcC1WTLhSS7zkqtfQ1WSA9sFCEpmzaYxC5cnM5eBbQLbKs1JnhEqJD1ED4XtDMn4hmPzSfkS",
  "key31": "3siccpz5KY54EJbaPSoZtN4tnUruWttKizD7NJwmhCYPZbP5g4mUFRL3xhgGbXL5go8SpVT2N2EqpFWZmgU5HihF",
  "key32": "KXWZNHz8aQdjMxz7FkxacxKGUTkybZbH1TLhMtqaoeyEC9mbbjKcjM8Fc3CuiUJ3Wx47geCFwBLNSRZmZr3K7RV",
  "key33": "2JqesxjgQwTiYEKfMJdhnVYJWuMm8vedBAayH4RPFMhigo9NAjncG5Qx7hnzEsGbq5BjzGniXyg24A6PKDeYsH57",
  "key34": "2avibb1rrXVpx5RCgbTLgj6BM618YVycMpcJSVXAXWvKhXUbTJwcG8PYjU1dUVvzpEtYmyH8Sffyjaty9Tp1LNNn"
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
