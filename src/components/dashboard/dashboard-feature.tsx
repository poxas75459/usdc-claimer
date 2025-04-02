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
    "5Nh6Dm9dG3D7JEcR8713KXfPhqGoaxUTk13KFJY6equz3LiMjuMiKB5tgXJ38NTJoRjtJYuGDQF8DQxrhV8RChpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W2pD216ioeJMbognJyFg7bqaf8SnAxpxYgRePgXTbuwG86sjALnFxoBKM7iq1hFpxEBeCR7BFZWUoCMkDuLopCo",
  "key1": "5MDsLUj9EpQFWBqtkLhFa1npkwdT5tfC2PjRcuT4hTY7ZJ1tEMMDJeLWQdTVrU17C35SaQ2p9rjvH7Px7vkKJ3dq",
  "key2": "5foZPzbstpLNrtpkW2aUEPJ1Px81PUpeHcYYuN5Ujp6RM1x7nAmyyNFdJynGVQaVSm1SsqygHnaWeY2RuuydGHYn",
  "key3": "5jYyBeZhpSDaFt1NiDsGjh4tgLmL388dd5B87qMvSErH7dMPZZKtP71XGvi5MhALoHwx4aoo3bw7FnwFFRzziX9g",
  "key4": "4hLir8W5qavaJ42A44bZLtuputx5z4PKiAbXWbP3eSQ7tJPsfZhTWed1vxNrmZPBnkJeeqzpuyiuNHb5AswYcEKk",
  "key5": "37KmV9SEpYVdHjTTo85oDLmn1eNWeedXCov1eNgnzefwBPyUthwDPjNKGvBpzjh811TQxw5yd95afzb2sXT8VPX1",
  "key6": "2oXuqUyu3CXS1GSG3KAPeWbMV1Yq5A674quwGYqeyYK1vZ26kfUXNDe67Z28wcykMc1KWpSmh5T4UXHtNa9NKT8E",
  "key7": "5ucmF6UbqXBQTuEZXnh1VfMkZVswL5AKuPHmXyVE4jFqJe4qpmQoXUf7wqt4v8CCELK28YNUY3qErQrL7RaeSyjb",
  "key8": "5hm7TcqPq3epArbntLJ2pcsZar5b5UuvfdfezwZyShSPprmwDM6eTWyoJQgxtPpXv5bU2sqEZu3Ww3N5Fmo2C5eo",
  "key9": "5SzDry6K1jfnQyMBk5w51F2J8jXdnpGUMdYfhHc74thU1rmALWyWjpsewvtGZMspBdSsd5gSEUzpskpCLYeKRpx9",
  "key10": "2fm6VMTd3RTqMBFPyHEBhfQNe3mjhhBaM5dRkpiMJK9v69rv4pbjkeKRq8t5LPS2ikoL1YERsCDwg15W63C7EtWY",
  "key11": "2rTY4sMexo6p4nxmLVwbaavEuAJicuRu2VkBnTPcbJkQnDRrRqCiVyn7Yk6MzVrSc8PQZ6SZfFgy8jMkWYZbpBk3",
  "key12": "4k7fspkbipCozcHQY1MCdx4FHAN53n4aYhKz2cuu4bja59g454oLRBQ1AYHMp8nw8AdmtVzP3KFmnZXFkZGZLcnR",
  "key13": "WvSe9uRfN9XSzvQegafy9KCh2s5KCvWhEEFFCbLiF4gyme45kBDimvamLYwaeuaFFDhCJszA5jpAyF68uD2BHxP",
  "key14": "24DeFAErLUDa4hd2VpegXg4fhgBAa6KzbwkgQw1CNcU2mAquZ5uuzJgRbCefiHSwe6abXkbiidzWrpZghWgb6HSN",
  "key15": "3xvqEPCkxtQcbjPpjLk6rYBPG6N1ntkjDtpspNugZWtw3GeBiuNEhwJZKw6iDYTJLyikWvcyEvXR2dK52DdmTbCM",
  "key16": "bBiV794PRf3TzaXLWH5dqoi69heaSFFWLkUMaYttcVE7YrjiK5TxiZZV3MJh1tq8zbmShn6aTRLG3yVdVFWZ3Hf",
  "key17": "5xYQBThsVoeUpDjGkPk1gbBf5SvAorzVrmyAD1K1t3Ew2YZK9RcN8FYMWzDGCwVKcuWtWfTPcPK2KoHAKmmvQRXk",
  "key18": "yY7ZUkTsnpBrk8gXw9S62YFRn7LB3J5wnpWs56Br7jc9j7HwFoUEn9CmFy1d5LacPe7PYroNnC6MK7np2feacTG",
  "key19": "4xEDNA2ShKvFLuNhQ6WPDJeKHupFHb7eGdBc8bvbtviGrVYoiU1DmpBP9SheMHM2wPoGhT8Ys95fRsWHaMWJMY1E",
  "key20": "5fLksfcmXWzbmoohoMTy5Lr42MSz1vMCRJ13fzzBerQrdLXkLNKzsiPyWJeFdrTwhpj2Y9zWUkqiVwsJsFXTsM4S",
  "key21": "LLbAqS2mB7dM5NNToFMEXVP7q5dd6sHbHGwL7S5d7fY2Qzw4kY2ebjLFiQfURNXymnLHoPGzCjHN1FLUprs5fbW",
  "key22": "4GEMpoASNc8rcHXLZEggq4KoNe1wwe516oCHRHz6pZ4fQpk9rWFNrZTCEkPo1QVWJQfi1aievb2R3PLeiV6zzeM",
  "key23": "5hWK63tbzTgJujn8oPU4wbviaLEihSBjih6oXsxW9hUHAy4X6ZKnhFnfPpgKUvm2fhwNNyxXe3rmhtGmA8KTj6nN",
  "key24": "5gdAg16duXzu7GVzeNBuF4QQG3o4QGkdTPG3XkNLvv1NQHWFd7FW1J9XQKzZgNNVi8CYC3aowhDixZVfXKqJxXt6",
  "key25": "t1ut9uz3U81vLBY2UzicSBpWjmW44PAfWFwpAsPKGnaacazAAmjbyUDspAQdbNMJg53sDj5xHNypg7b5VASAgN6",
  "key26": "FwyC1bCRux5rEYbZrAnDadyVKvCn6anFf3wJMJHaFnWwfcnw9SheCma81HAMTxuM2KczSuPD5DhfreFHqWrYh41",
  "key27": "5stMeQ24N8Jy1oT4BHGn6bbZTXEZSfvp7pr3C3h9uWEvfkLzBA6ZULqttYqpY278SLEdTyzGP4TjGTGF8Aea9hVF",
  "key28": "64Z4QWdrB2FvNKSnfRi7R5Vm6cg2iVrZjyMDkK5yQ4wf1uDNJZT3GA2HwfYzeHE8n6JLwKJrLaCAUPLaSycsU4jL",
  "key29": "5hkrdPnvD6nHxqCHDJWCJQ5sgxrSQ849GuEMHAm527KUqcrSRj2XhW9MYm3tWpSoNyQgZYjM5TNiD4qRVXcHAbdf",
  "key30": "4JDHo5bFPP8TB1FVtM17C2yoN7jutXnmFfJfef7cW4fGwAvHV5NotoczBLqWd7PtzFz3iCS83ZohfJjybzLU5YTn",
  "key31": "2i4DJXyhS7t4NeBAivZRRERPReapXxJi5E8KUGHdSTYF6PsYd6nk2caKKr3Cj5fwrxfKXHRxxaLqZZ9WiYw3t2YA",
  "key32": "4znLNbtwFwsjhDvo6QQsYbEH3YPgEaMMq7jCZ655HBfz8d9mHSyWWATP7m4gDPM5NNVhk74PSnQcEM1riT6tWKjT",
  "key33": "2HmoVpWqPnb9QnL5iJwj6S78v9GPtQTVVixk7BkYCUHG7hRC6of4QpeY9MpaiQtffjo2Xypvam2WamzHtUZnM92h",
  "key34": "2ktTAgFvRxceuUGnUTuisXUbNsZ1Zavc3E6ECgNUMJtkSTBp2MiKTA9MXXrYJ6kSR5U17QhPaQchtjs2HTWEATPz",
  "key35": "3747a35PMHqQexvZVxvBN2mFZQj2GMpgeDZWaLv2t3nR9Cw5Fshtg4qA5DEM1HGxJp2hczejLpKuvL2PmXuST1en",
  "key36": "22EYkAi8kRyU5pi7jrDToSNVKb2vntBcdYBpKQe8nEDMsAXMrhUWBiu6fUfe9pf5ysfeVd8P9qp8u32EyLAucXfa",
  "key37": "4cMNrN4p4gA33mnc72S5WKMZ1iMnouHAF8FGdyzkCJeyrnm2xQrVS5MigAu5n8QQjNGYiV6MN2jhdUrqDmhhc8tR",
  "key38": "5RFqf9UFtn4yS1bFBh1T1ArjgJFPwirtwERDArEXSHWFgmaowHsMXe1qc4FnpFkfF3Doy4nmmgLeFA1U5UT5DtM5",
  "key39": "44rhmTEu3vY9iD23YbGewSBU8fs6LMjPmNrFnMb24vygbWhzU1o769Yp3ppx8wpkWJtJDYeGnmhqQz4KkA7qxCoc",
  "key40": "2HKC1NgYoYU49yPZJAq67jHy6vi2B5daZboerQreopqe7kYdDrkwt1n2ov68s9e1f9deai8UhVeJMrPEsV7e3v7t",
  "key41": "CYqZLm1PDgw6C6gT4knz4Vna7ZPTdus14x3VWTKZBR7NdNAutDkRSFG7TpvPrGhnE5MPbug21sAu2qanZDwRsRz",
  "key42": "3kYavzjgMNZS7YKe6R7GqSYBMVEoPBsdYTVUnsRgzFJgV9BacrkgvTbqksx6wSTWev3L9RQAjff3RVbtqbuLUAyX"
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
