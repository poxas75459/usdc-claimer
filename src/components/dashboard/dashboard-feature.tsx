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
    "5yEBUaaR76qS2sjsqzZp9wJqHmXNC1FChQTQ7qqBs8HRywz8zubJkNRhFnzyxm3gs6r67QMhibexXnbvx9jRaa8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PY5Q1t72UskHzRdqMXp1wNY2zyBKUjzfkgML3pZSsdAS4jhTBbCCTa9y2oL6Jc796f5iBezWgZVm5LoLnJGMQVG",
  "key1": "pJecQdP822msTxkaqsqF6CFtxGyUxS3ka9oWtiF6kyubaMcFAy6pV7Hex8bFXhUzZiuym98NJv2BsuUDmPDvxrV",
  "key2": "3B2wcf22XTsgt383GiGwzTBwke8dtANGcGsPmysKnUiSML8qbCcaPsTcFn4Ep1TYcn1gYrBbr9vpohBkd6Y9Drm3",
  "key3": "4pq3b56JFsDQRbkLR7qMKEvxaPPU51VeNjoJcsPEEqsNvseWbUpUWrNqU5NXuevGEnXFv5Q89RHA2vG6ehZuU58L",
  "key4": "3vABMPD86y1Bn1zcyhKYwgVSaqEpPcrZ4zQe4m3F728ZntCvx3UuYAKXqBf2NZnytB5bYvDQtb4yfuiqGPrg5j9u",
  "key5": "2YVwMNGZcMucseXne2c4nMRMSGb2p7Xqc1W2rKt6gkfszQjhavetvmY7GAiMSFmPQJHkB3j6sSqcMjxE23miyfM5",
  "key6": "5HKMhtN5eM6xjCbXF49ouSFe8eN64JwuD5Jkk1w17R7Qxw8jsR3BFzjHKrLh2Spp3FM9Y1S6xyTFjp55togebecJ",
  "key7": "5mqS5ERyKrxHkiVnEJ1bPTcsYfvd26T8CBdggvRXo6CA7tcNcmDPqBtuMuBqaNbFi47bNFoxz6eRdiPKQeFFfXJ3",
  "key8": "5ARDkQnoseh9vwQCbKbBcNMdWfgn7QTssuVDpMeJNE92rXgDWXCFFo1zrZV8bD2TMrsjnpGrCEiPQM9FGqHjxHVe",
  "key9": "5U2ujVa4oHhKZ6LPvGaT8TTLT6wFZdDZpu8VCWGz8X5gKZkaFsqBnUuA4uYH9qsGXM3dQzodDQCZLnRM3b3XHHAB",
  "key10": "4a6kuEfb8mnT8FAJX79xpWoWBt5g7qaBA8YVELL4x6kGHm5WBbsFcMDSypLvzJ3GBYxquKRrYY22E1yoeSxsfdpJ",
  "key11": "2MANT4yXvQZH7RviLFjQd2sZ9JsAjfZEYLabQaBPHBQTYHkcbymAci633KFzLwUQNxF4nLBxBfAw1WbUCfr8u2oE",
  "key12": "2RPZoYBE2ELdu36foyUayg95udBL5mkesSVSuMpphezDtTSDd9bdYHgmzPMjAQPi7yrbeyQAmxAUHGyfrwpYxQGj",
  "key13": "2rqSXPrjhrXxaS67Uqwai7MAUG4HebQa9PbYP5ZshwhxA25LscNv3uyZrxBDtN8bFacqFQG1Sq5DWTcoi4gWfzDv",
  "key14": "gDWhsxQ6oF1neh1cfhd5R7UsrEyYpprtKmes731K1eQbNvHBF3yau86ADGzfsY38snYySCxTfEVkLbrpCR5e3LL",
  "key15": "3h4qSWXzidcWwPeUJLN5GiV4egB5STDEeo9ezU4qz2a5bcAU2bZB8xe5VKJZE58oh32kigbEM3zXfVssHP4g9BHq",
  "key16": "5r5esFRdjjtSDM1oGzChhLprwhAdLq7o9nzCcJEXsVubYDKE7ZS1FomTifRVHDSjzJ8QwbJEs5eCNcNT7Dhoqa8G",
  "key17": "5DGLk3uFEZmeSqFe4NToJimGQikpHAtpu1Ph4gQqNuWenXMZDvubviF7CHnHR4qFqrgM2bcUDjmdWFdsGzRfdwx1",
  "key18": "4wqSwSk1QYguVnrv4BUQS3dr1WqyJGNZfbw8vGSSVeBb2C3jZ5QgrNQvstuLV4dHLD53tjJY78TDcdj7Zqh1sRN1",
  "key19": "2Yt3RXJNtdNQQE9UrnFcwTSexubRcDhoS75iHj8P7Nu9LkCVLQ2Bah4DpDeJzoJPpTyKbXXvY9becF6raspgDk2E",
  "key20": "25iW2pQEbTHXPy3SLiSGEFZvPpYb4GDpavQj7V13GTFAN6MDn5JyMN3aoLBzUmep44DVVrHWmwNEre2LPbc6bR5y",
  "key21": "5j8UKqG39FgeKDiJfZs4ZuuYsuQgetqktWLsLrNEexdLuLbHfPCfVfiKkEJXknmk4KfNkq1RUcrVd5CKfxYdJUxu",
  "key22": "HzPx4v23fY8zQy6RVewLMnv6i988eedw75Btke2WjGypcqq1dsdkcNr2S2kgscy2hrHi9aJJZjzGTXtMcWH9rXT",
  "key23": "514zCS4wSWiUXNttMk65BypfSEC9QXERfzhitVYBSkRfpYBHYGRKFSz5aAUQZRhynaLgf97Cx52mybes6XGctvJn",
  "key24": "zFNLeRHmjiE7QwY2tGa99sxxArdx7rypCGP5ciwCqLnrZbeBrpvVALmydtenPKD2BLR5MSeuxW2X3JZCuoA3Qei",
  "key25": "eJKpoEi5XMmAo4CN4vF9FRUu2CPMQmcDmyLD8gJsQ8ycNWwmDQUTR9mirMxzcf4vYA5N2ZdHyCpCAy7kDQXuFmQ",
  "key26": "4QzJyfUYZc5DVsnFPt4gRTJHDSaZGtERE35XRBBFqZhx2EjgPuN9bHsnosj6xhYAW8rdhqqa4yVQprMpAFtionZ5",
  "key27": "g9gJbuHsW5yjMYcv1U4MQxKGCe8WrnmKbG6mMPWtAup5K3yzV352S5cTV6vEYqESEUvqo3pkRGSSESV7JLyUtjV",
  "key28": "4xXkTjwd4GJy7JjtTTGN5S2YUH1VRBaCSKpvffqqfC7iiQ4aYucKcJWv5vVGfgGfAwAVfC5H78A42ucKXP4bGP8F",
  "key29": "3JbWy8jbEm9jwePEV4FS3ZKP7KCBSXWcsuT11RR7RfzyWztExsD5qzMtyFGSxhiYxnKr1iZL57t8m6SLzTxEwmvt",
  "key30": "5tRYaPgo92pvmujQgYcpb9KTbrimPLzNshfEub4PPguFrZUMk7j6kUGZquhxFNrvBdb7XaNeU2sqVXhm7T5AJf9m",
  "key31": "4YFhF6Xgwi3E3nNNCJWzoHpgKgkXyALDnXoVqQbvw9cZ6EStuTTpGjymnxSLjkmJFdGGjqM5PubZ56RyXmuU7noZ",
  "key32": "2mHWGc1n1DDw3UFUFsUFE1tNx3itXzAGwvroVos4WYyzsq8ysye2s4eyJHLkoRY84gZ7vUqBpPg6PksDuU88eRQP",
  "key33": "4ESgTkoJjFBuFjFXHUdmAcZU3emrmwXBEt3RHv9ZYHAuq4mxGqK2RSFTgsW5K9Zi2B3x73cvz1yUqKaRL6KBo7Mx",
  "key34": "5raysTRA2o6HGXdYR6XLQpVnEKUuFqwPRof5Fa4zBm8ohnRh2URPMLwHvtRHMgj6pVNqQh6sqKv1SdNzU4h8C1iz",
  "key35": "SA2zBsh35pu6uMQEgn8fTTYjCmfScHtLnWXZB8viqWuzzv1UYebj4gMnU9BXhrvQo1jpAH5ZhGtVaMi6je9iypY",
  "key36": "2A5Sh6372oRvs6d2ipcXr6MPfZaRgzDkGPSTAk8MBDpEPHpBCC9kpZY6bBnp4kHb9jacTU8eAEMFe1hzHUz8VJ5f"
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
