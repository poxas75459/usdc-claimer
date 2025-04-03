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
    "5tjyFpiUsZ1FHBGZwjUbephDHL9B7oMTqoRQx7Nt4W9fePhjDBMmdfMDVMYvVjrRFeLyrMPTQ5J5Prbj9quLDhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23ozdmn2A3Gfw5v6nmgdyUecwCyABsoFGmeN7gvyCBWkwaa1y6Sjfq2TFzZkeapW9tGNFdshAX9jMYfKgVEdhBF7",
  "key1": "BqcHwfQuQVo9xVJy8ogNQMSqiaXykf3sHVrrdyw661mwpTAbirFFh9GMTxVAzeviifzDWQh1tw4LdSQxWRBBxrR",
  "key2": "25EHSsYyeG1XS33Z9hzVYmi3KDzHTwMHtaQyLgxX9PHK2pZbzaEChpAceZuE4kMaXPptmBohibt2PLe2SyA8U7k5",
  "key3": "B6LnX3piQJMBirmEDJgifcLuRQq7pKJc6dtnNXeb2jip57fMetPwFkoq1nrGHnLBWnFPpDufU1bH63xJzJ4gJSe",
  "key4": "28D7iBLkYnJQ3XQrVzNQGm6acPTZG6YTfUc8UNsiZmJqL95sQcVnCToTG1kopmaEvD5qNoMTTbtT5wq2fYVNFs31",
  "key5": "cuRQWbSw94JPYLmiN9p3mc9ptyLmnPAD9Zto6azQVDw8HiZXcZKcgX5f6g44Jnz6WvjpTozDcGDR3jU8dd9u2JW",
  "key6": "67HZTjZFkcrWuaBv3vyMtRgy5RzSSzbm2atqjv94CvRW53sGhrr4WL2saZQKFmX3n76NHG2h7M9Lbt8EwPsnoD6G",
  "key7": "2R2jttFDsP5RSVF8qYTLdMaqoXQW28Zvd6dbo7jKi3C4iX2pGnQ1obvYEftEqGaMxZJpeY2LCMB8366dpjFDg1J1",
  "key8": "2yMfHj3KVXBG3pX5QiWDZMDgvyqMaMvrN8Bvw8tqLyCoHxE6nCGVBQhUPtFX1jR2iAfsmE2PVqmK1BcnknRBCPBF",
  "key9": "659HBiod1ZYfTS2JZnZdxVSLE1cNHmCxK9T8L7kvFnEmAbfFKbb5f4YjnGUFUpnrggj9V8Zb3qojMoVAJYnj4GJ3",
  "key10": "5WhrcEy5Jd4ES4dGSgy57bB35orAfxHr9mCACJNQgZDjj6TExJGtmSYRWhQKVSAj7LSmAWL3ZEHro8qKYnHpAY4",
  "key11": "6podxodWG7S5Ark49kL9GqyLiSLAaiXhYFSkBtecjCFNiqGNh3o6HLMP1NdLNpSAdi19MA5Gsi6H7UdSzH9MGCB",
  "key12": "26yTECZ9BZm1VFdkJeEth3FjHUVsW1rJgKCnW8AK69QXNH4oExi8dd18m7BxgCgxtLFqs82a9SebuLTmmgKzGLz4",
  "key13": "gpz2XURAPPxsx2QNtoCDNht5nRLNuQV3Z5PA1xRP3a6h5LGZKy6GNsx6v9oAaTMDLXFEhRaQy1qf8rYyavVrdMb",
  "key14": "3MAX9EhAt2tpBNsD9LruXQinQFoj8uudBdebZRuEDqpJP2TKQRutRTZ3EVXMjBfMzj53o2D2v21FMUJQEqm1Y6Gz",
  "key15": "4992BCiqJjbE2pux8C9YZuGujEzeXDKR6sbYdSQXyGJBSJiYNXx8xanD7G4FadAGXi3bvTCCxgEBr2mfhYuDraUm",
  "key16": "53kRDqss68YbmFogcC5RdfpMhmYzbHon7fJoAnjGQpZkfkqYTyxCZRkweEj7uQyVd8aypk3xS87kJ1xGv7q3HQ9E",
  "key17": "2WKKc7GgNV95Vr1JSwXQEsmLYokzeMpBQVzv7Vx3gZgcL1HfiAF8pCRjkKTEjMj5RejXY5ZeEK8adVnfqTwDvBrf",
  "key18": "4ZriF5xTBNNGG2vKsLZKvBD8eNzqwaXB88wdZsvFgC6UbGkKpfzGhh7dHA4PMyoVKsdc4TZNV5xHvCxBiQLfQona",
  "key19": "21LMCs1fxRte252EFNQoK9cF3V6W5CxiW8vCidFin3Eep8XxhZufVobgKCpBaFDPwNjDpShCaPvEESPfwrWWSbWS",
  "key20": "67rmeWXP8MBfSsQnKQ2unBkqtg6VRwd3uTZAim7nV1XBdhnmEbpJd38BQx4uUnpGhw6CSp5kxYWKZgHfPzETMEXP",
  "key21": "2VDmy6oDxT22iUNm1WwXFR97BUGEvEKiVhZ2hwiGA7u868xMgyxT3Vmk8Xbf7GGQ9MA7vZwKAGDqw7oY1wkPeat8",
  "key22": "4KK39S32nMP9euuckTpry9ocghU7M2yut8TkC7w486man2gNFYjPsTvU6jn9wSq1dJo45JRVrFCES2P2yVkunHZA",
  "key23": "3qE2hKW3HAmhhEXXxgDZxQXyCAv1SAWs9kgyCMQQzaB5btXzHA1HfqeJ75sFPhmEorRPyAzpriJNf7LoVRHKZnud",
  "key24": "2xGsEXMSmjBUEMWJFbpjGrMEwTpwBEaWPWhYS1PPXDLLbCThN4ivQgx3k34U8CeN1sJEWJqivGuSRtetA3wA6pkk",
  "key25": "35aW4kYwzSZeaDQxGGyCF4yMXxDRyJPqetVZTdcH98aYrzg6Z7FXfA9bS5YSwCypjWRTUcoQH8saV3Ugdkou8AbN",
  "key26": "YwGYQcqrkBveN4WrcvqvZfWQhowCWRsaJcTwtiPTG4Xg2AqB4cw3yfuGegy9hH6k5cSgsMAFdQZyiuCYhTBSc7f",
  "key27": "4WRKDVThK2isHjUuWE2TReyWkGDXDFQZNMr3aFmedtoRbCkPVtHJKUqTozhoxbiEgzDcKZkVmWsDj4bDCYiGbG4M",
  "key28": "pK9dRXb9pTqAFw2MZ8jjEGGx9Wdgq3QyWVCMQ7CAeb2eCMKtuKTj6LhCPeHR5N4g9CkEAnkykP7zdq81JswuDkp",
  "key29": "aadJrTLEbsmsiBWvbbegyRQWBXTfXisLBRNMkVEAfy8DqE6QKGhsE9ytDBoZJqAP17mfnZjRhkSAX9vsaSdwoMW",
  "key30": "2eThJLF9Xd9iQYHSzzbEMKRf6rj1aBLjZNfpnGYAAf1ngAbFwqnF9f7dNo6AZ7snYCdmUQmAA52N7CyZGkuUm8mV",
  "key31": "2hguToqzbk7YeN1kZNNosD1uije7ZyM2shSKs1fFZiLzEjbx6b7ckfC1GFRgjHQArjzzznrD35yR1vxSHdu9FRLE",
  "key32": "givRUSDyEhuvp7vD3JaGRQw5u4y4RNLmiXeAKesUZnFTpFR9Nd2Q8KHRZm75XmCAf8EUG6RuKz1ksqc3GRtPHw2",
  "key33": "2uhJJRJzdqmP4APNdMgBdtcB9ka5xibodtTH56Z3xLTJdijvEJg5iq6PjXkzxoh3sPewfzszsv8PaFZqPRUnPST2",
  "key34": "LrgEUMFq13sowJrrAFoeEKDGm6wU2fLDzvviF3nrB8sAUpnEgMeZZAGZCgwPoGuX1vUr9xouZhtzeHZMq3avaC1",
  "key35": "2LQvXjD48rGm2937VzFRutKT6DrPj7RBNcmuMLneu81PPrLAzHQo9neByiigoXPUS1pyCuaXtAm1McTYzKaMa4BA",
  "key36": "2betTKoFgjRDS6LLzT54eQtuRkR7EzyofdZhRU2JzM4KD2Cjinh2SP5H5DsRqGU7diB1e7yUmdsztJLAhJpcmMTD",
  "key37": "3hZ5faTYCdqQMvbCzJLZqVi5MpPaYvFbx3CE51sCv8mboTkAsovsUEBowQKa6tvoLwzh1g5Gi8E2qpahnhKdckus",
  "key38": "2PLQr5XHpfC3vReMrHunLqguv8RUH9t1F7N8vvQUvSQpx2qXSSqgh4HVhpuJSGHH2Fx4SgDT5Fbc17d9Xun3h4m6"
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
