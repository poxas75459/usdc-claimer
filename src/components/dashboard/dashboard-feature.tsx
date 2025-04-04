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
    "LGECHAaLYzzZrSc3eLEiDxSCTivx3Yk84nRuWRG9XC964b95bziEjccFea9av1p3mcd5qjtaBk1rzNvU1DjXuA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Snef1Eu6wkYb7HMcBM4EcJT2t1zinSgH7ZAbTWzMWZ2QxHTGzj9Dq2WcyfAooj1FYqYQ2J5T7nGV2jP1CWACw9k",
  "key1": "fWKop7Kp3PJStgYH2AEZR7hKusk4NgnK8VAxwpMvYzmBUpHZnSsPvy5stfeGWeQHMDSqJfuipQ9wXuAF4AiwhnU",
  "key2": "5gxMcmzQ6ye4kjxfQWWsPtRupjWAwzQaSWdZPTKqZ854dQcHwSJg4Yotx19SHpJDTLhzSwquQYVWQrJ42fc8gxxj",
  "key3": "4AWt1A1YG8HXNVR2o6jR7dhHbXDN6MWfZkYFgvjagTMoAFWq7TffUEpboPWsScsvrxpV7d8hdbQvcWvWBZq9fQ9",
  "key4": "5WZvV6jy97VZGyJPbhyYR7rLusTKnKUCH3WWLjiqSFRLuSERz9TeGfjqtHJCNRg4NsVLFGtDxkv2Mc4AiGw4xV2o",
  "key5": "5sMnK7rvFmFkj8jfZL2HEt2UEjJ1x6WKxry1s1t4AvbDisvr8wJuHDtgq2yREn7mqBdojYBSxRAuTb1BcU85YS5K",
  "key6": "2Q4HvYY369ZGJFor2dQcTshNQYtxhw4ZtkhYqfpdevFoeLMRpFRx1S8QhK4Qxigoe8DnxPfjqP8PUEXRkeDVmc5p",
  "key7": "gzfnzk9V6reFg69qvRG9H3y9jdjJA3V52fyraP9VgapukhK6Fa1guaHWAJwNLqbhSz9UCEcu4aNKDa4pvuh78Dv",
  "key8": "3QYBx1JTU2tMfZmvGcVusLNfBD43hHjBGK2deaRPF3Xc52NMsRQFz6BPh1hbhSzKByXYpmrXifDyscruJ12B36CQ",
  "key9": "3rAMwXDBdc9JjhxiJcDusHcwrsZLCGGybrpXZ6KtYookYVaeQAokfvZAef47Zae62V3yKJAr2ScXjjnAipvBAe8w",
  "key10": "5KqxQE2HX1k29bqf2CNc82ccFz5WuU282pZ9mLM1q46yGEHjxDmQjhGzX1PggvWhzcvRuuzcGE2PUjPmcKZS74Ku",
  "key11": "2hykphSfzHKmxJQTgHXH5bV8nNHofR1ce84iiFX2R6XM9btmwBVu5UCxcbx8cgKzdStgS1bZTcxrs6ibCiLcXtXk",
  "key12": "4jdaT3BGHwPQwQBPUVYuuCV2uJNpbbDYvsJbuQ5SVfyn6MARrq6KLovzvaa5wBkbKKTAG4nvra2yVuDkK89m8tfN",
  "key13": "e8BtauaGNcANpaCpFa5rsoaZQwRf3snHWJCjy2fNfqBjD7notXoWNbNVugctQxmMNHii31FNLJNwoyXpELS9fe6",
  "key14": "nak852A4ZkyRnzzjho51vGJUzta8xSUBbRZnqvifFXimfb1FbDyw5S8g5u4KDVsXYChkXm2P7BKJvPrNzGD5oyf",
  "key15": "3y3C7DXYNh1zquyQSHWbkdF9XhsexuTUNBHeJUoDcFs2yiGSgje9rdL4AS3vmRtV6PoHFW77u1yd8r8DHGn41yKj",
  "key16": "mbsJt9Ktb9jgPhFyw55CFd7zhZjZ2udSKuJAFrQkYPbhN3pZ2HTP4nKGsGmNDLZUCczmbAoRAu5DccemR87NQVv",
  "key17": "1QpVtKXL2LRDbL4Mb2ooKTktggeJtrdGCkNguEwqCtPsW8aoWUpnfbM1p8jJAH9gV8E8A3oRqK6NkYLW31j56iK",
  "key18": "61Bw7neiHf65ECdyctxjbHHFLJXpWwBJrHDKbuSKwBEfJFgumF9t8dWtWy5j89XBEzrjifxXrj3zyEmjRL4bVKM6",
  "key19": "5xUMFbkueps4B2rPRfbtUV4yBSXpRgeQqLnTef1guLDMfr41S99Vn7uuhiJatPDsueeLBBTAGX7VHyJgGp6Zx7ru",
  "key20": "2tbruF9b6Go5YVjPHfetqjguHShKtZdDYmsckxJDbuGRaa2r93cWzpnUr8hyiQXVhTCfe9GjiJ4tgPSYHRH929h2",
  "key21": "5WA3TmupmqN6L3iq49EuUgBjpCw4vPmjBvvRGFjqQAytPUL4FsYTzeLKDLTC8YtayPcwc9M1o8Ehmb59UDN3keG2",
  "key22": "4GjD3SofzNDJYXWGyNrM8UoFCf8bdGq5kT2RLKz6v3nN7S1qjRmUjwiSrosW3J3fcyuosgSAFTmjmPAqCSuobfJa",
  "key23": "55Qdt6RUwWQcKHryBA1wR7FDSQaerBnGbzj4XyZ5rH6WaMg87gFPKjWgKXHJpGoShbyG5SwmV5KUC8SKpXzNxVTh",
  "key24": "ejWBfpNQXDoDRVpWC6VLAWBAToQ4aa88SXU2ihDD79eDHUE7CdiPQiw4asFnoK69w1iJ6KT97zusnYRPC6GkcdQ",
  "key25": "51zxi7Raixfkzff5gwh25fpmNQmLArZDKZgF5HV7YVw8YSm1UZFFTaJ5iNaymm83qKfQaNyfqbR8GkXH7nX4Bbp4",
  "key26": "63eEhj4Qjw8ns4hfy98xEYgBsGW46gBxDXK7Qg4T1nkCFvLDpmzPGXhmXXhFL2Gg2NzduZvDgxbcDXusXRj7BeMR",
  "key27": "2J4w1yWwUY6rYRrwPhMqeYfDmjkcpYJ5GWWTKnrapaxkZ1JmAwhdr3HrNjCiN2ZK3n9pYJ6u3Pf49s1S4w6esPT8",
  "key28": "eMUqAXKTZWhaiCSj1Gg8hmsLemEMsewqsbRdC8Rry5Lkp6fjfTvEJWDWgzbfx1HQF8bFuzx6SSfamUwLb91kHtT",
  "key29": "4Wm2Bc7mtgdca1nFt54iJszHHTMsqqkWdmjeU2HdaPqc2KLJavXc7NrBD8ptGuv2XHjuYNfuFhHP6YtsfDqPpoHP",
  "key30": "N91u2Xn6qiUGuSXtQRhxV9fkmPm6oHLe3QhJQsVWPtxCVyQ1ybHXZj6CvbxLVe5WG1x9UGosLf96UaDFB5s76gr",
  "key31": "34dbSkJ1wo2UFhroVGEM3W8m2Tnu1RXhuQ9aTcUqpS5FNPLpWCKwmHRW3kGxr6dwSD9XjgXxSp3fjFjkvHF5aiLm",
  "key32": "3BL8XKjP1ULLD6zoKtoeGZxf7Lk4sPzMbDu35GU92sBnjEnB9juReAAqrY1Tkz6oq7hq8ZTm16AQ6APtCnmCwLdf",
  "key33": "4opjhXVrkfD5QDbiDsFEyi8zDGV3r5HkEyUjWXHKcVJwN4koaGyrje7pHjrjjKPjcFWj8d73a8uvGTWY8KVQwEbo"
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
