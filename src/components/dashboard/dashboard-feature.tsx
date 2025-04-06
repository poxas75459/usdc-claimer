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
    "2yijrnJFasMyTjssPDkkxRnCQksz7My9UFDTcQ6gFrGV8nPg25Ms2PDr3iQtwPULwsaG7rhzmWzoHNFBTQnpakXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KiYvFeuzUjWJwojSiDmbMqKFbFSrxgeUb2RAckheSb8StqfP95oPaigX2UDDRqdMkxpJDqpnYEvLiuY8SHVTTnR",
  "key1": "EymDTTYvCjCt1c9rcqbeTTMZzQdaAMxDiRNTD9ggiEGRLybYzn3iPYQfaYw9jMLUEsr7C58FRfjRMyu8FzP7gFH",
  "key2": "2C4n3TfXEFPM3T6VYEnTc69yuZV9gGdiLmsRZhAkqJq3vBQtWZe56BFAWqH3KB4qxagQqi4LoEsmcDe63barQRF7",
  "key3": "2JHsgFfQf1nPjUsj2ye3skYphRNJjiLLMVTh9L9nKdLQPsdbax7Xh9ccn75jXois5Q61XyZAQ2NDzoj7fxPwiMfh",
  "key4": "61hESEadf54JHhqsnxc3BR2hLCJpKnB2NkeqK7fxKyJCNjKDvCg1mpYTWeXFdsU7C7EEpmttFfoFLtcVAVxKt6sL",
  "key5": "WmbyfakW1nKerhutn4zNhEL7VBGNQmC8APnmaRJYpvxcp5fo2xBMEiMhG6wzF3edtT1WCM5vPjbCAkoVRe66Gep",
  "key6": "5CvVzrTDeJqs5fGzfGPLPNiQGgZ3oRFV4vGueiqzEpRyk22vwaRVUJQ9WiD6pis3tGAkaKJvQUmEwdxGAJkqzP7i",
  "key7": "2uMqGCo22myVnAcvUVv4ED1QCvFoXVGuaknTjDBgcLWFUQ1d5FM37mF4NwdL9pK3HFEBJpsXc9kp1FyPMngZGMh5",
  "key8": "amyg8c5PJw45gN8pJxXfnGXrSYCzCFwzoQ19vwh1GsDC7mjSrXds2SaEA3RKhnmqPRtUoQtuwmjDphAyXfifS5m",
  "key9": "4E4hBB2T98CitChP2YiimHfPTvt8fLH9SnT8x6hSSH7HqmFXmLxvv3nXTj6f33dKYnnhiNTzCbmNxNdW2tYJrzwf",
  "key10": "4N3Dv6SRQWAjvNSEXEEXJgyzwr7ffXS2NHa56Z1ap9fwszfyMw39XL62Syv1n49kT4cXuuEkLxmePYeLbMDyqfqD",
  "key11": "3eUFpb5Mi2TAA9EWJXXQ2y8mbh3YZ2g8K3Sd23hsDcSBM8mxGJToB1dtAGSnFXyZM8xrFQYcVU7qPLZpNBbKehpD",
  "key12": "5fhiZStCNSSwDayT8A5uGSzHKSDMsEUJij62SR4jvZt1UBk4mgyYHVRryP8kZLTNRQZmPumtynX7btLCpw6gKJs3",
  "key13": "3TSBLiJKuQ9Y2oYfCAE4JAzgmRwFbQ6Qb8fgibTJ8yab7J9N2pAn2htnDcfzPKw8WhygJtu9Gi5YAAiaDZ9ZqjMk",
  "key14": "5hFVKxPnf5Aq5pA1oJMjT2L75agGe4jX7R9CwftvYFJiu3v3WEoznffQmL7WZZBdtT1mCGeny3tW8sxQEF9zEvTW",
  "key15": "3tYGgd2DRXxQusiP735zTNLDTQ1KyEWCP18jiWgA4JJ51r4Mr2fYyf5L3xCduZntN5rpaZDcmhH9JkqGHC7zA7eE",
  "key16": "5VCt9Z6KZygaEpu5UagQX3hNk3Y37oDR3Rk9wq4KQDa8E2efWSj6xwL24st1BLHtJyRmNzix5MqSSHdMegoqnwtG",
  "key17": "61tC7fs8S4uosFJ7PEBUc6zWWJFej6EoYocxSgfSnYcNGaD5Po8UKxVS69oay7QDidRX5ksHujnnRB1hx1fRwQT6",
  "key18": "5CXUhP8jbyMwQaJsd5xsLR7ZW2MBmjPBSDZbEfuhbDNqEYJCmFh8UCn97kcLXMfuXVKrxMG91PxNdt8G8qZNMQXo",
  "key19": "JRSrHUJy3m7Ud6WQXSDS74EqksEG3o3zKXZ1gYwkEb1oVz3n5aEDFhttwGpGEQLjxH4Lk8Pk5VgyMiKbiMZz7PV",
  "key20": "4yQCRcBgX4Fiq2mhBCeTqKk1J7Ww1XFhw3pSQHa9e51TGSijs2Bdvj8VnYhsoKteagnzqsEZ4MojNtHLUf1GepDs",
  "key21": "2AhQEPFb8d76B5sjJUA1xmAGxAD815nocWZSkUECcg1jbKXdgx8Eai8We8vWTMXugvjoaxCwmXLYsMpAtDuiQken",
  "key22": "551VKFTbAz9Z9aU48W8z7TbfriYuUwiacg1RVdwVjqmwp8kRheQCDU4oK2Wjo4Z9kdDEG4xnyrsffLh9umJPpznf",
  "key23": "f7TUdjNTnsDxaTrKAPmXv1RaFhfb5H7i6UxNXKL9pnQ4Rc1wCWF1Z72hRdW1GkWUHBmVgFD6paD7xwsxmQtUWeB",
  "key24": "4NghmiVPxbsyVk9Hx7pwaYEiKZ2b8dbiEQgwNEYvigxYJBRfSoXx2BM8MU3ntmVV3asYuZGjmweTCzwG5wyKRzrW",
  "key25": "2xcqTw4i1YK9EbDnBZXEng8cS5KZN1jDWP86FTNLVsUwto4yuPrQQNCSC33FKbQKTE3bCDsfbry1WW83ngDT4g8k",
  "key26": "4VMH7UxAmfJnE6t4W7gS1A6xyWzUcbDUdSt9HScLB68sB3tPjRj9M9TnQJLr86LaHLSRV7qqrSqx2oiL6oJQ2iyZ",
  "key27": "4tKbBhyUNMxUiEeZ2uZr8gfLuYQ54bJB7ymQoNDbEGridKr9M59A9ZJcUS9f9ne1ESpTiBbuqbMNECyWNMN9qBn5",
  "key28": "24DNjbcyptRGQ6KsBPigfdxqRwb6kxXR1pA4o9Ldx2qwpT6SHs9ysCrUYrFfrXpHdZmJhBmiZB25eMTZJTxQUjjK",
  "key29": "2SDkUXsXAKtjYy8hCor6ZQt5gDwey9s58ZWnay4kcEFmCDQZLjDTtmAVjwEBCtGm8Qt7C2Y5DnGiJSZQ6Grh3MgZ",
  "key30": "4kwgDRXjyNBMT747Bv8XvVXMiu8Go5v5CJnVFpKUAPmPp6jvnufcPZJ8jcDTXWK5Sp4MwvRH6AJ9fbMvawyuTHdJ",
  "key31": "4gNCgqT8FGGoPLD2yMpJGSGP5y49YKbABc3SK7ruaSXnXZj3u3skBRAEav4iC71aM21GwSanh2yTzF8oCRVDEYz8",
  "key32": "3BMHBgzQnxboGdbbovvTSxVLspSwYE4X9hSwLq36NLzzDs6WCtgjGtem1wJWdNZQSNFvbj4V4qamsqV2FdcaVJfp",
  "key33": "3ahyWw6fBJwxRrG24efspGMngpskrDuK5QyQVdZoVuufEsVz8ZwtsyeDXR3ZgUQt69jszeufK2V7LVu3ZS95axSF",
  "key34": "42P7jNFhCH9QKaeQXTiF1jZFGLoGKArXUn28ChyQHSoyJDVJJUdWsgy36DaFHA1GDcfJFs28q7NfTzsg8oSMuELz",
  "key35": "5dACryBqCz2TLHUtsYEWixhBiJgHNuVmN26iDGumoSrioN5SwB2pzud4pVNZQdqS5CZCnNq2R9qRSzhBUxFM5a82",
  "key36": "61Arav9uT6rKFjaBL9m6YmpJa34VYxFpvU8ArcnyHjk2eMRhTUSVRRjTnCJvZiRWa6UFkWecjPishyJGxHnFwiqt",
  "key37": "2DzNNRnsVhykw2CGj5zijsFLQj3bdt3FSWTZCdTW8ZzYLpC3LdGa6RTv6DvtKwKHFwPZcqpybMkMB9nreD9jnzoE",
  "key38": "5FL3jucTwMvyTFfmL8dUSGJjGYVnZN3cy7fm6tYcrXb3PgsfRRCh2hS1oMaWuxYXKzUJe3Xjo4RJ2LZHKHK5RG2D",
  "key39": "4ifo2JUR3ZbAfZE2pbeeLgzmoDiUsoUrmuUneiShQMfUUBVsRJqaa2GZq7srfbA4vMMBXYBXHuicMWF68hvb46eX",
  "key40": "Ay2J31q9Xdua2pH9fwZ5hLMMyyjYfqEtkr5DF3LXKE7DQ38SZ9mf9N7UsYdx57ZJCog22nrzK1fk5C7yxU3nPuf",
  "key41": "fLCk1fj6eXfUMo5TZdMSEpTttG1cT3EJqdjwSGWKFuUpXpAbDb4KyQ3GTjgUui7UrYGSv2DC885DiQKxQhLf9PB",
  "key42": "5JncF8LmrXsVhhbxWCWjGJotZUDHua2i4FFQ879UDzQLqzQPYhDS9WLNKAUgm1XTdJ6vBynMUMtFdHPw3MJmcbMM",
  "key43": "3gvqgUPVV4EaRaTELb4NRHEpKtSaPbDYup6zfAhNkcqnrQU58aXiVgaDDp6rWEMYL8WNtJEntxXXdtzVfP9q46iS",
  "key44": "4L3CtWo1ZZRGfXbvgTvUuEQfSitVHfBrqECsvjNFMkAnnp5cSGZevhZwQ4KSfBofSgimwjTQphs6WEmpi68Gkj1g",
  "key45": "32FP41QGRSy2HrTzYUBPTPnMeE9xfg3LBr7MwkP1VRbt89Gom2NaRWCREmyYPXC1hA9GXauj3jJgEiuKvfAAFSex",
  "key46": "5KMrePm6j8nhKiRUNhNrKP5VAAVhG1oLjVMF2yjMx8zQVHZstAyuECiJwsQnAW2X7ACAY3fdG3P7Hwsp3GYkNBGy",
  "key47": "5XTt7kcvgXZjR5jVZFmooRU5LMFPpbXAsUQia5yt42Zf27RoVKDr7KbcGvsbc3VyefG6PWF7dzBiRNtqNrBCXsFF",
  "key48": "JgMBzoqDEZEsmW2K28EVBnivzKuBzKnKUyYqXqN7fEb24YRUPdXqUVrJ9nFYTuN724MydGbiN6nbZnBoqMqobrf"
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
