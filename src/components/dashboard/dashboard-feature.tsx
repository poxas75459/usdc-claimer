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
    "2cEK44WY6HJKeuAiZkHcAECMjNbYK4kGZRj9tYeARwBCQjYWHpD3hm59R7dj5CQC3E3RX8SUHqDRTmYp2La6owS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ukZ4RYkLkVycU99RkmwTNaSTiXeYhv1fYdu36TC9MnTj6gkSDGvEWeiYQvbyJJ4HMUdNQ73kFdLYrJu2o6gQsTh",
  "key1": "3haL1xsahyGPNpvyXSQPJZpJnvdf9TQEhZsz5m3o3HTojBpKVXBNDqV7GYdDmE5m6DpmVoGWsrFziyTnTFwPgncG",
  "key2": "2BYfgA3MAXKfSLLay8F8deNQij3nWtRwKoebTKrjwAyGXsrgxVBRPmQvaRDNGPYbSms6BoEJLvbPRMdRrFotkYkq",
  "key3": "49pQnKqFPTYVCgCENm1ARGxXf4Zkxaiz5gXRkVrczusErNkEEt5fNChu4qJRP9ePSuTmwUWFstZoK146rMA9xtKF",
  "key4": "2AAscbG4t2xDSkFAYkYLrXrSc986YXVMaRnYP6GBsvw81pTt4kAMP7KtBgzmwNNc293JJSQE121VB4ATycsRWg5e",
  "key5": "AP4KbzxTyYTeSbDx3sE482FUucMVzRfdu5sHcKV7WVhfS2Zrewnt2PJh1dU4pTs3Px6LwTpvLbNbz3zC45WdZZx",
  "key6": "34Wz9orBu6rx2CVEK5jV5WYyY5Ujx9KD9PgZhvwYv8CKGNZqPQ9pipZvBq4tF4Az8DtjvUx726P9nVSBy2Z8iB8m",
  "key7": "55J7sJsE1e4vTnnAjAc9y5PtR4eMqocUUZK3NMbfBke8y3MrV4HoS67euH88nLnWeHmw8UZMSsX1gWgimTJP3227",
  "key8": "3sgpARmYeaaf3g3dj9MG4WHaWQRiBu5FUYrH5CgJiQWoMZ1faH8ChU1XJbHwdaoSx7U19tiAvWBY4nZZQzJW37Yq",
  "key9": "HjnRtVQ1E9t1EpVypyry3MLCVof2ky7EquEagyngm9S4kTxF8PUEPLsb8wwoX8WCR8uqzNFDoB3gfg9Wykkg4zN",
  "key10": "3EgDdRhmAHh8RVtorQjiERGaXXZLxKpafF2eJppeWUCTFJxDdmpZ27YRVqE7mvT9Kzh4febNoTsx7BGyKZm4Hv5m",
  "key11": "3c2VtzHvURMuX8mFzXN2DgMviZQLC8Q7MTLq4VgqwR1bSoorKABqMzmCAteoFF43ajLfXvh8EwaWQ3Q6uaGDJqut",
  "key12": "2KWGUQavVDUXmEW4ijpkXAM7eTLPDvkEQGsKyEhdnSjtZn6cKNUyV2369pNACGB3rJ6FbjaEYrtF2uHdytsx7Pu3",
  "key13": "4EXHEBGYCmttbFD5ezK2sQUnKRgUP12jS83zLjTx12qwT9tT7yYsU1HwXjDUukzCQA8gWAVPzygv52gjjUUQn5gY",
  "key14": "83BYGGw14LbSSDZCqhSuv9XqhC2bv5q9DFEB8EXxidexkRS5czESGYjKKTN9p7MvgEdzq1MUGLdDvn8zip7VWzo",
  "key15": "2atXif7jSixZRvAd93ow1nHUiNFukF4Evk79CidvWYMinFm7etGw5Leh98WTMbLNdMo8LU9LDbEufSL9QbBsKLHs",
  "key16": "3ZySn8255e5BCxupJ4uDZxgWPQ22PcX9zsJ1Hz4CUcTBZMJ5AAnEfCkor5imLU66ueSPHcXrTZ2DHGXo4FQutm44",
  "key17": "2Rw5RW87kUATDCNmiT9fN3pjUYd8bGahNuSE9YmDpadyYbd8Ne78SRsbUDy9CoS4wMSr75B6Y9hTJzs5kKAPnWph",
  "key18": "3qhDHkqB8kHzae6VYEikmzEBEQHarHY5KGAHmW7E64HvjoWMAUJ5dUC1PX3Y2nBytZwD21GvE8gUb8x9Wzz46o92",
  "key19": "aofJrCd3ERetRcgY1nvCBLhEVPPrCWAn2vQJ3y36UVUN4RBTcanmV9TK2DFRFsEk2EHakb99gDxgLTw9RSpCTmQ",
  "key20": "V2gYbyzwY8ZsxHxJ7yGLVWC74VnKQTDNStnKVTjZ8E3C37imt3P5NAeZw39xs7HXnL5z8e6nqEeN9ogiTbtHyA3",
  "key21": "28kLrAUBA76ErxERqaKpd7nGyQsKnK7qQTrNny2SpKKpN7pDvexVjbk5ZTsynU6mJiwKAmCr2a4KGsoKrNEgi7Qi",
  "key22": "4PG8dSeBBrLQq1RPpfYrHiqDv3VhVekPNU3C4epieMsPhQCpWueLSSCMZTMAXZeSNKVh1UFLpwnhF5LFCSAGenzb",
  "key23": "5F4sctgmPCLkwLL8MkLHVZTNHkzkPs7ECejZRXdNXjibyomXG4WWfqPoK97tL6ZseGU9vhcHrnEVR5ecyQYxJfdv",
  "key24": "WLx7LYhPSPYjhvXZUhL8pNph8ndwa4PrAg3wjpZq86KjPY5RCRTDESpdWWJXoB9mC6aWqFbazcmdArgbbxaRJ2a",
  "key25": "5Wk48EVQ9EREGaGBmBzLUP9aQj8V8kG4t9UyawBqYdRpiVQGuWonpUPxcFPYuhz99jvYoMVrcT975kfPVWr6tjVu",
  "key26": "61fvx8zxQWm1Ed521YY6QznrKZGsB96RBQFVFKX866kio1W4bRg59cf2Em7Z6ZAwRU7tsrGVdFbujdmqEUwygHhC",
  "key27": "4fKho1PtdfuG2c7vi1t2b1nqCgULAxvJjMpWSihAQMdn1oBxhBWuPenqvVFL7PpUchoPNCQ8eJNzSqRdd4FwiaFb",
  "key28": "rzJgZGS6b14kTGAPD31U7nytRqAjQN5AbLq2FiYtqZFbLPYH6UpzQPhUrx9zxvRBfV6g1EspKbhmWB9gunWXSx3",
  "key29": "3EBfhxKrtRE4SLWYcza1K7n5VXaUUcijvnQRYK8e8KEgz82HVG3Q4JpRq8a93bczXyvxyH1VimZHfoqPHNpLmjtu",
  "key30": "2ReeS8DpHJWfFbsjSEt1Vk8tdewCThHcztjdE3LGNUPmSLGHk9sTBb2Yt9V8tpvXKujxj278Gw4oGu2J6ecVfKY",
  "key31": "ChBrbzwpq7K3NnAJeauaqcwAPVDTisLnMfKNBQLXGTwsS7Wd6SBeCSfvtQekmZCDQm3T1xm156PVRQmvSDrJbiT"
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
