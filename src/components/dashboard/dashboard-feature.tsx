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
    "3Ck1cJ1RSJqQ1k4wsc8ufLD7RbRAugaTu8JZ94exbgopa6Bdc4MRH7QK9NUqxRmmqMC7Q3Y9q6u4tFAp8iP5GLct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ia4d8tQjzDzB68twVoDMpzMGQFsH1QbddADZDqLQ6AvvCF1D8qtBEibfGufqQVgvQF9YSwZjZ6ynekjmQRGCMBf",
  "key1": "3PJvJgZUxkjBWhrCd2y6LCEHEpEUR8RcbPXCR4TCS23wc6K3bGTrVCPqD2THPJRnRzEPSfLyy7DHULE4YjU8H5uB",
  "key2": "37jtzq72Mk9YHaJpviCK8x6ZNTWW8sUz8QHQuyrPZKPDmQt8QZ3Jz21sZNLDZ3sMGx1SXnsuQLPoZMv78nbcn8Qi",
  "key3": "5uY6dnQ3m9cXzbzsgbrH67VqCwgT3kTghiedafhA4j96skXfpSEFtjU7wNf9pPTZJKpZphSmSZD6aDZ9vWwaLghG",
  "key4": "4LFfbyWNDK7tUUMuZyNth4etwNKyfbR71bosUUB5cxvv71JFHZWvnyRaCxx84ZymPRSZ2MtHhw9pKBMGyooLDCkA",
  "key5": "4Sca1GzGaG6AgXUHfwJQpVphFXgKDAdc2LhTdNbXG5XNkdXQnxh9j8EkzxPKxUp2KHLnwjT8eb2FPqD5NGyeKzQZ",
  "key6": "5RLJDZ8AsiE4fDiV9CuJ1EGC6sTvCu3wTaiX1xs9JwnjUGJcPa2GhKGuwA4KqYeLu2eR5Ea4fDVwrtbnWM8BQsXT",
  "key7": "5o27ysT3wtqfp6XfZJ8aEQTfpdmyEsQwnJrUozq27p6i21gZLnCppNfMd2y92pfhS4JWk2AvTWS6hnptTcQQw8sW",
  "key8": "5Ffb6wtrrxhW93UHZof6M5Fh5TtV93rBGaHAYHoJsqPJZuqmFtJy74ufrtpLCzuJbWSV3mbg4iUAbxzDCmtHhVDW",
  "key9": "sEkp5nkzYXQgaWYCgXgFjtkkA58hZJSUiCD6PF53PmjvnTij8oHFUxGbJdPRPY8qJMaxYHRCqjxpCAow5FJPdJS",
  "key10": "2svKFE2ZuQhB114sfHcHYvgkijeYH6nTMwTfjVsbWNzhTPAcr4FhyvhCmUg4f6ApSXC1buD6qnUVYuPuzM7nbw8N",
  "key11": "2de8LzdiXmzcL1EbPVgqygfb9nAxPhZkwjFFnytRvzrmTVUmNZTQ7foj84jZt6z5fcBYPoqPWNQE5cH8pA1uSewi",
  "key12": "2ne64CriE7ifeAqGxESiegmTi1YhhwtcfEWtx5bn2PndPeFamhzYDLLUXG9pj1qRkiSw54Hhi4QFyBgwBZXYD9Ep",
  "key13": "3Z5BbqfgzSXtcLD9ppaR1DVt4w2B2sPyoKEzNPeZPBGe3bNsQsVAcG7cCnmMSqNTYVdxvYgoGmwe44qq9D7XxRr1",
  "key14": "4P9zDwGtzPniLbEg8N6DzuHGgRTDtkp62AXi95EY9vJUHs6P1zWPKJsRMp2WNVL4mL2VXy68bUN5noDzZjHJ8Wom",
  "key15": "SSXRmp4HmHQNLXhWNX48gnss3kKVvwDcDPVWXViyLXxgf6ijUA2UXGSnMy1XxjNv4ecZBZZxThqYjxhsdKynT74",
  "key16": "2yn28aYub87ZRsAieWkL3mg3xaGyBpxoSwJTu3UfA4wopcbXrSC135J4n7CRVmzsfvdQnpLyvutUsToc3s6boAdL",
  "key17": "4ja9PAotiTqV8BfS5r63KJAESGfNm1CZjzMDotJdyRK931Hp2CJ2ZD6iZh9bS9F9tDNt3DDPtRBWcFPFQryBnsqP",
  "key18": "4tz9gkNtMsibQ8Gu8Hzo556fDfgMLjAAh9uyJoqvxskahCDs43LxkQwmV9vjuqrVr7uNhNsgTJvKVgoR6CgoeUTa",
  "key19": "2pUJYCboXX33o6dZ8z5ZFiZRaCzEvgC1XcrHeGjHAYG9eZ4JUk4VYoy7Scb7viZWX8sGo64jdfZST1BJb27YqMHc",
  "key20": "57VwX8hf2D6wARW6jxKcEbnBo7VyVRdbk1bax2nCx73WBmz5yBBhNZvJM8jSsjpXYvFm3reQhoM8McH1SrxmP8fE",
  "key21": "4peVcEZEL4Gwc85VEt56wbjT4DB6cxogeYc7WTP7wgoYBG9NeptSpDVbC9nwvz3mo1JzbxE5xZeirnSbuPe579RW",
  "key22": "c3RCtjk39SGQZPmtu8TwxXUFDZH47R44cevHFV1tX9dP7NAjfFNTE7YJ65EwEacUUCsgCovQF2Ky12m6ajsiLxV",
  "key23": "2yonXzkfCKVQ9xEyv8rjuxBWs2dVscXFcgP4qBKAEoP7XaSfYU4sL5Yoft5iZZvq1TByrhagsvdH13Pn3u4AEetD",
  "key24": "4FNJxHTzP66KZ7tGWXAmfnugRn5qU7YXknF1zhF6bNJgR2UCrFcptC3LgDxuZCrUa3aGeBZLtrEFtDv9QSXsYsiK",
  "key25": "5ngrMDvmCVLrEp36C8YpMn9rsUpKFUzoKf4ywW9NouqGJgh4Vx8okUq586DSgXedt1gK2mqz5Qo25dGDg8saWPSt",
  "key26": "6sJpJALsSPgxntfa4xNsNHn2TdsrhnxRA1vpNqKfZYMkT6oyUTK6YPBjwQ4XKUHkCCBDTB7CxQ2KkqA6H5ZjK6x",
  "key27": "644XzeMhFbsQxtt2CDakhLRvL7e7dVzpy3CErvDFDrcWRfR9PzFgjHs9kmBWGRsQsYTNhrewcU5nB3XZJV3Qu5Uz",
  "key28": "4ekWW6AkpRPmBJ2LPJz8jaeEFRfERbJPARmNVuwry8CqgoSV1an6Xq6uUAeDQmGUvo7v8p1CDZcepeiu1jYcAaWN"
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
