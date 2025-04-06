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
    "3JwnDHiqkcHYsykauPun9DTxhEzBfys6MfddZoqu51Z3AwDkBpUjKjosRJiDrNwZJhzdqv5eiRkT16K3HrmG5yvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e2guwtkRt2LxGMn8mSH4o9RkAKzX7tPtjcVv5JKM6TvcUJYxGqWaFpGLf2SnD6uuyr5b3hpASVEXjMPcMPyvmEM",
  "key1": "263UGDES1mUgnLBpYor89vikC5SRE3Xc3wYsmy8y6teBGRX8xjpt8Uh361Bn84MjdL8K3zjfPXdgs17CgwhBk663",
  "key2": "3rhVi91hqL4WsDCp6UgXhfVsyqW3bkkGCmj67RJTLRQ7Jt7A3RShEcLjau4XBkh7jAe7vnLGXX7RZ2TVYSf8Mt6r",
  "key3": "9JisqrJJyDsCUe6TZVhu4PutxUPuRqFL6WcNoExFN4rNYLd19jyrem3BJkoogNd9K7zcc2Ch7NYUwjakFUK2bSB",
  "key4": "3TBCjeWNyUFnbRfG17ZAKzQWbbLoVVrXqdZbtrzXCpPeqyPsredwjb4xo4eGsJQvMC16cgAKGUQTCw3x5rb7sPZ7",
  "key5": "2P4ftUySznengNQCAPWme6UJ87GWYsy13Br9LFo5m1z13zLdxwfYLZd5sGeTHKcQE2qDMjbL7znNzRShwgBpAdSe",
  "key6": "V7ejXDajFBoV1eTcnbLcNG73SYWe5s1TQspqpmjPF1KBUhbSF52y6b1GtjXYBpVMpUCtNNzMtEc6m1wUg9XLXbP",
  "key7": "E6cBtHBJK12n6wWREcKKge1GCTnLrVy32aHoYxvzxF3bq4Mhab4JaP2xUNq85uMKhwck4CeEXX39FxzRY4yAfeZ",
  "key8": "3jQMPNDDrASJBMUR2ViVSEDUkqbZM5SV262gTEkvJpqBcW53KBjZ5LELjyi9uvY8tmX7WZc3nXtcQG7tqeLAEQDW",
  "key9": "5Ezia5gwRhwY9pif7PM9XP7GQj6GjJTzKifuZSF2AwCujxcFaFL1p1eUbuTinvEjnicPUwADjyGAJKGGGx3ppD2u",
  "key10": "21WAdXg1oVHpkyggeEfmspvY2MmGr9H17DzLKZyDSSJXEEkPJDPVL8oycjg386MvxZHRLEm8Z4Tw7v7QKYTfxXbN",
  "key11": "2YFPoPjzxqoWFxfgcAKM2G2KA5pU4XhawpsCCLgMg5iUGbuQGo6driDc2Y2edwympNdnYLLM2zdkcFrNwsunaSJx",
  "key12": "3D3AsZLEDMUAncFAGz2DxBpJmxhjWhHMmChvcVjCJpvLYb7gypGvVurnVRJJqmxRvJqSjEK8QQ2sztprJ97dDi7b",
  "key13": "44v2xJuvqGvQy6kDSuGH2T7GcfuxHH6az3L6F1Ai1Zmyx5DjsTTiVf7UY7cczUjQ2uQ2CMNSvF2SRYEGBZzSdQ2x",
  "key14": "2oC4B1vSdknfNEW28gQjWBVCpbWUjsSJbxq5ZawzQQvpxJFu4Sa7e7QMiLKu6utua6muUPMi4fCaftLgumUv8bN",
  "key15": "4gyNoYmWiv6gTHfV2WbDcenkxcQ44hv1Bw9ZGJZJNkzSnwcYKw1kS9LbqQnbqSvWcgtoHJvuJiqN3JWKeeR5M1om",
  "key16": "2RsGhJ1Ya88wSWzSAbAPBNRW2nrBpFqo28dWuPBHmPh5qKHJj9sQPGABqqxJDzDd8ZCab5TQ78Leb2Zwxc4PQyKD",
  "key17": "5WPTQSh8eMudSKjz8JMTFp39vJzqPAcAjC5Fg1xbCu8buCxKcgTBF7iWt9zcpYkp9xFj1TWxrGVGkTGdM4LgtF8e",
  "key18": "3iz5i9NUHHZ9GtUgnCexqULekvMwCqBAi7qZm2wZN27DDMFiVjRqVNeJrvVXezkGqiPDUw767q2k1srUDd5ERxqo",
  "key19": "dkw4KSx8cUNeLvn2MtX7zHNcm3QLR4pysQRww8nZ2TQ4Zjo6xPMJg8VYN8uhenUDrb3KaZDNSGmHByMbEHCfFJb",
  "key20": "fXU6HKjLPUc369t9VR9UpEnUnvJacGy3XceyBcoeQuQPDAmcbTsb2PwW4QouyDahydr5tpnf25qicvaCrHkiScw",
  "key21": "5La9n42DXTVNWKvoUuXuAkVdjVjGUrs9f2CQ28QCyM2jkAPfNjXddMcHFnuE4r4qqdL6xC6Ye94YGfWKojJxSbLX",
  "key22": "4Jau6EVo4CYoZRXSiWf1kcJc17NsvnA1ZBMzAwcm7gBXYafFLBS2pihe5Fi2JAmUMZfV9QmdDT2pX2Qw7BjFTVRP",
  "key23": "5EMJYAMNSr14KWQ2n8j6hMhhooybTDqHVY4aTozq6ozYfaBkLgRK5KgsrKaSujhY6XFcco7fixwBELov5VzM1XKu",
  "key24": "2X3NRLNjJgsvd6VqjeWB3AFkPZQzz3dsKbrvK8DYKZ9db587oigdx4R2WLE97kk52DEibW7LBNWGEvYz2tU56Gh9",
  "key25": "5NvKH2uYd37wAMdE2qSU4QU124h29ebqwjUjXC11PmSPNwAcCPdg2rRSwLybP5cq5UPFNbiuBY8uMaAesPZtxR3j",
  "key26": "42Y2Tzhd5A4wuwpawxf72ZA8quYxaVuXom1KEqy1fLhusLAzd9Ev7iEwrETQ9RicuqNyg1DQqHY4BvaTFFfXwj3o",
  "key27": "5KLVptEQQQMaUBGLaM3nbikRjthwvgiMeJbnnxLBD9JnS6bRZZh7LwLCHSyq6i2vX2spkcMYPvq4o1ChH93anNoV",
  "key28": "3DXMtH1SbMABHkzckLm7upKMC7PKJQFUNvkeEvzdzAorXhG4Y5zVr1jeusm6f58xMh9rEQ6sGMPR7uFad1dXTiij",
  "key29": "CWrcoBTz5j8RYh1ZCX6DFSA8An6UQev5Cbfacgj1aUF71HRoZTQwBaU9vMnWBiFQdUaG3JGBSHhbLkANdyDajUq",
  "key30": "uymRhyqhz8W5TGpAfMKEbndBeace4c7qi73fESc4B6DYKQKVHNsi5abvLuxCRftBpzr7L8aGy3GyiaEZsnx4UrT",
  "key31": "4wkzwfP12Usj3eRcPT5r13BcVkUs1hcgn6MvQDso3dKivF1FuLz8tP9huaskGHAqHphojHua12eRVLvhLXC5MSrE",
  "key32": "3T7FNWLctfXoHHjGmkvhLVsDkUV2LSNNUEY843iHobt6YxhAWptCPpAkBq5pN82ZC7aE9sesYex9bfXCW7Veknto",
  "key33": "QZ6dHPbAT6GW3ixSYPvzS1fTNvh6YZ5Mrysgzm615vCYcLrH6p8dCeEpUB8KyBxn9EKff8g6GZnfshkPWhfFq9Q",
  "key34": "3Z6tfgWo6kTeWLGkLp93virMFBVdrKGpYBtwkHAtPTHaTQgpbvVDRgJBpc4NL5bER2exb1gJ3y7QTwcdCQ9bChGB",
  "key35": "3GvsREoivYuu1sE37Kgsud1Pm4r9nK3R8qAZXQk6Pcv93vhBbSzepEYy55iJZxtaLh8AKo7kdNT8hg22TphCvRew",
  "key36": "5JuyAfMActmfPGE7EuLs7oVwRqLLdWgn9ZHTHX45qVautEdVVoVRnbSpNGrY1g7b8Z4PwiVt7zmNVreeGSkcnMqj",
  "key37": "keZHUTdnQUmUyASgm28QeeqbyXU3szLzVDaBgd2RYMtYjG2guJavP8HThTtV7EJ64BfjNFDkK24cvnApfXKNyEZ",
  "key38": "2EqU5z5ioX2ncvGTqHX3BFqZaoCv4xNEg3hu3Eu75QgpbcsbE31AdkSqu2eYRZQYCzqSFS9uHQvQNXjVN6JV9Gjr",
  "key39": "3CAaDVT27SCrmpRHZJeHMqFagjWnprHwmuCT1QRMAwG95fpS24oF2RBsAqGdWiC5xNhnmfbwxnXQQHMZHqqHViqK",
  "key40": "5Nze9NvQFGaXkJykPpS3JfgZuW4tVubmyHHUpkWJ8RAqv74YSR1Sih6VaPWBdgKhZYDunotw5mMg9Ak8ZhR6WScr",
  "key41": "5rr3NBpqvoFVEcDrdGTwUMcYUZzm5RT4cAwb1JhVvADmwrixcD8qxcq82UnAbW9AEBbQRuNGQ5BnG26bENyrvo4Q",
  "key42": "61FpEUF8p4npovSNmGaF4uxHwDJyLQMui1HMAvZxu5YNJvmrwrSyZx1ZjrSYfsa3Qxq9SoxdHHt6Faz2cXttCgCC",
  "key43": "3jf1Z6sv9XC9yhVi6B5zD349yKa3xXxpTcFw9i6rxKZqnSvrrJXLd8W5KAcJ7dRVd8n5KCbURoDpF2GPv1CFS8Te",
  "key44": "Af2H6bJ3s7Qs8aZgKHBLvMGtJz5YAPzAqzEcJAaAUYqaDzE2XQKecH2yv7gkLmjVDZ9GuW3UqXAdVAeJrZYtjj8",
  "key45": "VSRxbnx5jg2tmpcaeA4h2EtTiFu1CtWBmNQyAN7uEKKbLCQ2nTDqKEzTwP1rft5rfHM57pvaQuPEZosgiM52ine",
  "key46": "2jSzeTgmGSPag5tXSEwHgYP7bvWeAsUTAoL5XbfhGrRwW5Ffy9zsncw9bycJ9yK8kZ8sxdCBK6RxezKrbJrUNNJC",
  "key47": "5V5sp1X9iNaqKy1N23UJkKrT4vWAsHMq8Sdu1opYvmXuwQWjKuBGd9ZcTGhq5b7JeqhqgPwjC9SS3FZRpATKb31D"
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
