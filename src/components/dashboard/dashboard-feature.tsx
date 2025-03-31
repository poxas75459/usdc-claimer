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
    "Da17CZb8F9mDn4uTvBC6ZriWMQsLWTfVaaeKcZ5rnfhRKArSFkAWyj1v2NB54HfbDse3J2czWHgxa4kGawcCs22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t8GHtD2w859yYg2yohpdDC7wQ7YyGgik4sQpPssaCZ3Px233feiFnr8WPWKFLZXQuyLh7TcmaTt1hxxPLHJutGG",
  "key1": "5ELLz1qREbUodsx3aPAvZPRC21w4Rxv63THNmuvHAYGVP9ezzA2p7m9L97ZL7JaGAaVqHazE4nrRMsBKBJHAuZWy",
  "key2": "5TtPgMTCDyisRJjMxw2JvXWpMU6puKbEs8ifxsTRxMvTGq5qh4vDzrhEKiFjyavp5NdHti3XsjCQc3wT16fV47A9",
  "key3": "3HbABaPTDvCtj2UYRZtiogNSW1wodYUBGGE5SRk5fAd1fdFZdKd7pC17xA6Qa4CBMSBhyLsSpkkYLdw7kA5p85h4",
  "key4": "5epoUwpwMFts3HiC2L5B1P1eokmVyutsQRTJdJGFcCJucsDT2BSjy661C2BqJKzDFYH6LVubmU6hQYSRRaH85rBj",
  "key5": "4nHnCoLxwdb59v48okfGjEvDd8iMZCGppggZ61PA5WNKGEzvZqAsTzAUUpnX7RJmoDJ7bJhEdDhsc9DmY7SNxMD8",
  "key6": "4JeUdQmZ1eWnww1PXyafSDurQNh7FqJYReweDJDCnD1YHtiNEs8wg8Xdbx7WWEUZLhk3VcVaQzkN4AQ9LR8SEzuo",
  "key7": "vk6aBgGhydEPBEbERLMZ5w5Nw3Sck11Xdr2jJCNBWVUKub5qe9CbVegGHu1tAqXe82YwMbEd98cynm6ZEKc7Eft",
  "key8": "4ysT5pLL2Vjf3DRuofcx5nfFiH7z5igW8be2CXfVHm1PYqTfFebqwLwB2dH7ScfM2tP6GNUgHh4MLrSi4haNyn4Y",
  "key9": "219VBXBKeZo9fArGAoaNgipwCt51mo5vf2J37owSruuWAhoHViXAszwqpRS5T3mYjxWjp83rWydsYFRp51msd9mV",
  "key10": "oRgSUrd4uA9rUMmNJaw2pzJKk5ef4KF9oxbmMmk5DRiuciFQtozUuwKwAR5DLYydH3xreUHUFhmwbaBbVNCrRx4",
  "key11": "3umvwVc8iSHvQJdPhW2nj5Z5p9RLE5GcRXeHiNfEPiC4Em89xzW2A8nXDUqKyHxFC3z9fc2jqHrakDdgnVaKbFB7",
  "key12": "3xU3Ezx583c4odgUJDQH2VDhvDTiuuxEs6Fe5SvEffYM6w2AhZTDSmZscCKyW8pW82ZW2gnSnM3ovi2zcE3Ryps3",
  "key13": "qmuVq6CbYL6A7ACq95tPwnmqTbt1pmuBAQWxTKzjiWeBuwKDBgAU4KGEccq44pBoRnezz85t9r6rX4GmCzgGE6M",
  "key14": "5K3eyHYsTgZNg6ztSCyveYCM4drVLL5kQX6jo41Gi2VoiGR8DgUNi8HAGFdkda6eK4wW2Ckap1ygDVn1xTHjDpLg",
  "key15": "5r31Hmehr55SJq1Wj7hy94BX77eDGLKoebjmtRf7iyWyjh8tCMmJ3R4sdjca3MusQha3WNHD5mwHMYmrqj4KBRjF",
  "key16": "5eHcBedRu36bKhdhxyps6RnRoWEJf1i9dNJWDjGc1pPXrfVWC6uADbbvMYMti77sQUUA8MQTG1z37nkjgGfUfSaZ",
  "key17": "2rs4gqnovUoGHC7RPiMSTDxb8gqeLWefConk7K9JxB3HGxBnpb2T7Qcv5jz5g2kBz5iVXCKUTT51CVJFL1YtXb14",
  "key18": "3SKtcbL4NyngnR2vni1xYyZkEtpTEwTigzAwtmnc2xxLV8nn9ZAxSrdnB5AxktxJkboRdpG57AT9JrpnG5bqnNzG",
  "key19": "21RWrP9jkdmjfuqTdCfjjjv8K8mCJNeceHTtoccFD5ndXi2n1pRCAf2gs2hZLPgvFeaaVru79mQUf2jNLhj6jWp9",
  "key20": "2jyxXejtoDTJ4THxYLtsTNr15XKuB4vYUMHtVJ2M3HKBjKVM4JkdzFAXbyr6K7wJZrxLwAiEoALkg6YGsPqUiX6o",
  "key21": "26DjUK1Uap9HWx6ZJoRAzEJt4jUPQxV7iwTmJqpyxGctQteBoURc5YXS3TPrEYBhUyTMVfZX9ykrmcv9UEE8LfB4",
  "key22": "3T2M37KCNubXEewD8sgejT2rP6vCXPKSCV8MaTSAK2EjAuR5Lizm8ipxt2pQHGjKwW7724nBG1saxsVY6Ms1db33",
  "key23": "5uCocG7wqHBe2wYJjmUp25csFmkKrjmqtvsxnQKocYCZNLC2epeQUDzpK7fPyPrawhEeP4cGWgMFJcdorESyiMW2",
  "key24": "5NGjbxeJNAvWQEcD91AzQqQtxVm5jrUQuf5hpDjvT3uhGMjwhWALmGBk2Jm3fbJxHFqgmXYVjTtxQqmMjvaSAhvc",
  "key25": "4VL6q4CMfieUyNNfcu6Ez9UFNzBWvffnj9ajwToJioXAWgfWfpB6Pp9YScQrBnLEad1UDXra56zBsiLxcKVBpQNw",
  "key26": "3Q7ssEpbm4e6TCNYAQD6qYfrvmbcTDDq5rt7GtDLCoK3hwCoaE1MnsQqFdSkbTa9PLguGgh2mc8Evwz9PFGVvgme",
  "key27": "4snvbQh2MkypbyQ5tCYLKoimdi9tP11fyjbFtjxqq5zgwdfDph5HodZn5DWJDuq1oTKESWF2jbhnhUqddpjyG8dU",
  "key28": "2dAKMZkZMc158J7WeKxrRsW94A18SujF65aatTbTbszh6GMtz8tKSsTRNHEvseqLmkYHKG166dDLg7kRVsWxKfxZ",
  "key29": "5mSrpVvA3U3PqBcV6hGhhpTVuyu8DiTJhiHi3wwFBNsWMR22gYXLFXKXHF6LT7xNVKSV3w29U9FFZki4Sb8YQin5",
  "key30": "4wCg3idef2NKEFF6i2VFxt4m9KyizoNLxHhTEaenvn1Nn8YwuDfmvgXoAtN34kyqHoDKbfuQTLvPsvEPDaSZhqgD",
  "key31": "cB9XgmgTFMYNU82YdFzw9oWSqcbV3qdsoZYAo2FnFAZ6PbTiaGBXb5FYRtTZQs1PfmoFAZau3yEWweUBWALnWJL",
  "key32": "2S2LzQogtQFLz2fttVzRhDj1dLXxu7jcmzPHLaWNPpSXR1jSQniabDuhSL4RcHDZn5Zz2paxXLM94p6FLUewFhwM",
  "key33": "3F4cEkqjCECRsusrT516ndu3p7HGYa85JTPLPynm1akw6RYeD58sMP3Tp7npGJBFwvRLxRyhALbeLxbRpbWwpa36",
  "key34": "57579yVrqiZEn4XdyNAQCM9Kwtro5A1EG2qqGAmZ7uBNy2JNic99noYXHcX3rtTwNrVXzNaLEFaGZEsxNQR7xvmS",
  "key35": "4yMdsubuNoDCbSN9Ffcm7pY57Ukxhkgy8t7LhcYu5Sc936yQ3iWHSrD2msJH1qVTzLH3efiLzZjWCKGTVZhtrZg8",
  "key36": "2tnjoPWAE9SAD6pjkPNAseV9pajmSMMEsH3T1Jg5m1BfvQRUaEsKdN9kwNMzD5GGRZbooZabZb18UWaZLE39wupn",
  "key37": "45K3fjn3L8r6ewaQ6k3MrHzzkLUsmtofjrkEznSoLQy5AKPVZYn18G3pmfeDqJa2f1iNikELPHjmkB76BUcFJkra",
  "key38": "4cBCVk3kTwm67XGr2qCUNetUR9LNQ4PXAKTfVjd78hnU9rC7BqvR1Zje1JkHdQHhq22q6gWjp7qgi4SHNCrp633C",
  "key39": "5k7Ypb4jQNhigE34mvLqvfeYUmnSjFZdgs9BwqEPFFqCtycPT2PW8rdPLdfUr6ALepqd54scnDv3FqMmrCcFpdiZ",
  "key40": "5nnNi9w2TR1MJiZhsja8ujDY34RX91Znr3diGjVzmoDdnMbU8Rgg24Po3WhVRQWXkazuvXX5iqdrdVdmvPtfgW3v",
  "key41": "Wx7cmCfUGu8KvccJDCHWmKM2AyMrSiFeQ4miRxweizyGcNmkBmhj3HcpMHg1BTXjVoaVgWud8JhTAScuG19PPot",
  "key42": "eRuwYLFo7wKvrPPUKbw9nPgs7tWdQxQdbWmDuh5rQ2M3teHBc99PfXgmNEFKZ9hi9NkxeeBnHrbPoZbYYss3GPV",
  "key43": "2SNBFe2McAeMQSh3bUZLg86hwnk8remFT9jz2CdpeUAMfXhkaQZGyD8dbB4XfDSzdqo3Jxw6qZnBbZN9Z6rMwEKb",
  "key44": "4aSm6jbPsbf6BTQAZUstQg7odhtxcmSLgoMuYNBnXzdFUtHL6oehH97wohgF7gCQQ44oQjNC3SprRzoSvkinR1zP"
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
