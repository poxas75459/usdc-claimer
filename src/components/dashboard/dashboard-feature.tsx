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
    "2sj6FVdJ4oVjUgJyWxzbA9KA6mHatqVPw2KdcdVeENzWUv3WJkdJfrbj3Y7QiuivJMbaE7vWNMBSJ7hdqgwjFvrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Ee8RaspP5GNyz9XKzdQ2nYD5e44KSARYAs8MgrYTxSyMfnuZ9xj8Sy1DgzHxenYYosG1pQJgvAZxXxccrYq4so",
  "key1": "4tzFTuAGiVf5FPLCqxotffjocXPsieb8S8VAC1krjiELtKuiXt9QkfZrg7pui2cNezVj1QtkzSdVJ7F2utNAirVh",
  "key2": "5QAwgXA58SFex1m4q4geg7uF3m62RsPPWLwRkfLa1V6oz864Vba4BWovh9KhS4t28iLrzm7DCaWTczvdhWCGmcSE",
  "key3": "3qHtnBpu7KqENGRpxTeztU7fTxP4KMctCkauAViKhvuFrqEaLQkc1VNLCJ5K5i7XBisEdwr7iwvp9SQNny5rpw3m",
  "key4": "4RS9gjHxnu3tXZQi6iDYHCdRKMCCbJtGaYAAdHT3o5CgoSFUYJfG8DSkHFuKCGxxK9d3oiQqDGELGTcnTZe9XwBg",
  "key5": "5L1owjEKeoBsWJYzfUYebqPAJencQZvjkTHuNcC1GryLMi4vfCXPnuxJHLi4aAH9EqXej4rWXYU2NN2bM3sbp58S",
  "key6": "4Gd2AEkuvRvbq9bp7SbhXtGv5ucKXKjQs5yZr74U3d1KmV2SSCE1d8TbanukpSZqxiMLLaW382u4cxUrY4NSZ6MP",
  "key7": "4UMNupfdTqo6XAWxeVq8xzsFarHAHiL3xcZkn95xqEgRoBzxxRSrMywYMxUg5NakmB6GvYCSG3b9N97Ubx1C1EV",
  "key8": "3TL8MLixJ4yX2uWwB2T4R4TSMnceQ1DysLxGjrdBA3a5SscrxU3yy6v7pR9WfAR4u7zVW8f1ZaofSbfUG2xnHbPg",
  "key9": "5JNJZNoGLHVMyLfoJKemUx8B5rACjLsDQc56DPn3o5ieZveAXsPfkxYGG2i8dLLpehuBUXXR2CPjmoCVfS92E1Mm",
  "key10": "vjpYBofbsHynF8PBkGQ9YMS4TyEF9TZkf3GDsksYsXSZCJqPhjF2c2CfY2Sf1LoUEaBpC8shboHJoCxN2FBgXEm",
  "key11": "2KRw6yiYXgP6vi6qQ1dv681jGWykgU2By17FFCqxkuaG4giiTbRihEHbFddUBfzBANGJcW5PZE68HiEEWwcSrGbX",
  "key12": "53Ky3C7Exja6m5QVUFwHdTkNiX99KMkGE7i93VECLWE2sLkw7B15AAcsnQTjqc1u3jNS2oMWXBuBEx1cSSoUZLAL",
  "key13": "4GxT2sGo7tBB6nVg8y3yus2ta2D9mtSriF56jB2xnoFkUwxVGohj5BZ23kXvTcyYHP9j36hdF1ygkF5yn5j8KWag",
  "key14": "4kvfwwBqdW9E42NSSgvNvqGjUhQQbvTuesoyPAm5MRLT2P5Mgry5mRSswT524XEpiun4BD6K9rkNsjAnwZvavUWC",
  "key15": "5XC61EuoXCjSDBM2fanq9hZMMrJ6Fe2WxsJFokvo2nYA9kxLWh6b4Y3emABef9QaHHoRj4s6vCAC7ToT7JJSekhz",
  "key16": "4aE3GqTWR6gqWoEJYQTqQcQgsoB28vXzVzPcGqB8K7b7BbCqSowmTCq7syCMqRQyEahXWrcEvDJq5GnNKViHLeAh",
  "key17": "4S7AvDdtSAeh4GmQPyt5k5ubvuRnH1q9jnLgzGPE2kmKpoMp1WrSthNP5e8FTjesPfQFYvs3PBHR4shpaHLr2Qu1",
  "key18": "5E9exgPhCQK8tHC2w4rA1hpST257X517XD4Jv8AFXdfXc11HVNQCNjEZ161rhUPQdTS45Qr45wcJ4ubNhC2Lf6cQ",
  "key19": "3PDE1L9jRFYZ8DAR5tL9kmdjQUvpXbLvfB2JTnTqkThr8GXzwa4sMvPPgWawmP9H7Akn9oNY5p2fiG5QdAYdB9Ls",
  "key20": "55XfQTMvGL4BU9gtb4NF34fTFUUPdjdFN4i9YFnF1P1obNLXs71nqHVoE1tVXjtkWnr65bRSUBHhx8qtZSTc6Cpw",
  "key21": "RFNFW6gsUzZn2biJy2YfXoZmUJ7AMBrEJXTv5RQNiFP3GMJVgTDzY3t8tbBbyXqBCnSQSntPjhVrCeVdWnEBdNc",
  "key22": "2kcHjA1rU1ieCAJNYhmkQf3cuDYeJY5CSpY8w4z6opn2TRaQ9iLpDepAi9VKQx3MPH9q4cq6SffkT3jrepb2AiAZ",
  "key23": "3RXLRnjZeppNbbpYhrMutAf6jz4qUL7bYZiiriENn5Fwb9MG4pX9HEJHKeDTfCGtWpJzFWDpT3mRuxUfT1PqqkAL",
  "key24": "2DeCsQa6V266AvwpAC5aurJSjeuzfeJH85K5JYpDAoPG7PvtzFifJoritEbu4QkKJXG1pocm8U2dA3hRqQRkSV4T",
  "key25": "66g1uhv4i7TAVGjHsLBQx9xXi6FVMv16kjDPmCJuZHLvsE4XuAMyp1PKFEP87asjuuobjjcrdmsfhGVyptKuTAYx",
  "key26": "daSpkg2HBfcC3B8Fac2BiKXw4rmo4etDTVB1ExLJZjXfR5BsW5UounmUk3y7Y9chuqvRf2UNXs1CSdD4PmN5Kh5",
  "key27": "45ua6ynVNorxgpAY3666V31tQy89SEwaefXqco83iGvTjmeGMJ8MwNBFjp4hZ5gFBxWVCMV8XPoMr5vfMXjTZPoP",
  "key28": "L9ve5peCWP4S9hyN8M4XPRUWnm8CHnUKnohCPGMJcnFUfVn1kC5tZEwRY3H6r779oECwhAybz8RwSQDqBRLrc9J",
  "key29": "4p6tJYj2LCiezafhAG6ApcDvz1FbRQzhmusbmPSCgQXnAkcCaB8pzm47qWyDMNtAZk8x4vGuWGkYiMvmAG4JYh5U",
  "key30": "2aRJHE7mKgPefCprgpz61XuMtMPLUAFU97iSSzD7C6X6d1zh2V8DQqevsv8qjrqvsvLuTLFuDVVBoBnXfFiupMwZ",
  "key31": "4QH6Mv72z4KWLEGQPcxt33m2FWb6oEVNjAGV7vBJULygnCXC77gKnE4hP5CYUmfDknkYNdP5k9uDKU9ayRXBnaTu",
  "key32": "vH9Yvdt253Q1aW73DehdnTnuRgvytdTYwhmvg9GjN6fj7CkrmP4U4DdbqdA3Ff9LrdoZPsQP6YxJXZ9TR1TiQTN",
  "key33": "63yPKPMkq2oGnqXGZrawLtmZWt2qqSTB7yckxdEoA1Nr7vzD6SZiMtvbSW8p1R3dMu6VrZXi9CK42y2Xc2Mn8zzb",
  "key34": "2jWBbKHpYJQW4bJhTW6EZK5CTeFrLrbbkBMCVj16Sv7DFHi355u4tsXmkNkkPiuYRi3zu6zP7qZJiHGWKZ6TYzb8",
  "key35": "33J5ca39ysHruRNkQCVUqngokL59npGmLRKkZrfZG8vSrDvpnkGiYQvHvRXkfqZfQpucbx3TYFt2erkFxjZDYAWL",
  "key36": "2ZUgVyVjG3rLEL3av3pGextQ76SAocdHveiy9Mueto81NdwFLhZLGux6QcWuHJC6yanxbnTYLFGYcDyxr6PuPN77",
  "key37": "4UMYjD5yqg9viYwXTyBx1p7YE2JenAnWWDaEuSrerFWEURg7xWtJ3r8Jq3b49P91D4uZVeLJVhPoqrWLGauwb7cV",
  "key38": "5xVby4du2z6wsSRL6Vb1nYmj3FvYWCBKX1jwswmpmKrTZhWyNZyh42B6qHwQGehWkkWxRZRPCZuqBCW883sPNFBA",
  "key39": "5QLjqu9eRd5FsdZQBsK8ezch7hf55VnnT9qvDE5our6mkRKK8eBGXnuUkqyArE4jzaVmu2bLWi2Kj52xusLBr6t9",
  "key40": "64AEgxoroGKhUHP3Ufm5ni4JCNesU8UpAij9BiyuPzuWAeksPNwB4xRzu3QKVbjAqoqepPawKJjEfCn6wVZjRaDJ",
  "key41": "3aeprKD1cfJ44NW7dyKZKBkT1DZ1ZpDZNBA1LnWgiKRK4qbqiTqNzQaPsmyGu5QLepRpfGRr6ALKgmPU4yEgf6j6",
  "key42": "4ZJeq3Q1AGgHiQuQxMn7TYqXTJYE2wYwoNAyg6mWQrYXCQ1JnaHpZ2va4ifa1G2GCq7PagKJ8yYuGfH7imMRNAM2",
  "key43": "2zbXoTPv9TrwRXdY5sgERh7SzP3BzcnxLm9JATSYtJwJa6DehrPkxd2p3iNxfePrTmeahxnHdLxic4HREWnUV6nW",
  "key44": "QEgnsXYKKLpnF3bJiLg73YK4dyfUAVwjU5mg3BAoWS6Jy13FyJBysJpk2Ei6yvfMDPNowRvgGv3xewxRWRSLmDb",
  "key45": "2keytQScebgrZL7Xzk8rZoFP6aS69qn5RtdsGVSQ8YKxVrvmkwNdrijobvnUHHGph6ZFmqoEWN7oZgELxWPVvE1K",
  "key46": "64sqr8MrekB9xEpYop82N5ww9rxf45E1swmfDVA9Wg8rJ91q24g5vzVFrezM3UfvanXCsQGFTacbWvVFGqr9JTus",
  "key47": "3S6dGVoWEkKnixTeSspEMSzXhoY2HmiFJGB9gbBwKir8oQ4rMhfPi4KaaHRrJehdjhjyr7DZw2UVSZ11WRtHzBV9",
  "key48": "5DYHiUUcDmy1YrUgBxGsQbBPYzNUW8tGxVv5m9A4gWYzG3otFJE5jvRJaKDWBtq9GmKmyZh3QNbGDtKRHahYG7gx",
  "key49": "52pJ4W6FdGrGTQPzfNfc5oQbqoFFQKUGCGXLZqjeS966DTgWHkX5HyeF5ZR1FXXWRrMijQSawhXTrFN9WXwCZZRX"
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
