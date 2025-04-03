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
    "3mGPbb15PFMP2NzDWpdSBxLcqqFZggEaeoy8tCNEWpQThDEtgiUGefo2ncRY2ttCmAgH1x8jux2migJwaX5r7JTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qmLf4GDbdYwCiGT6JpUX8xxxE7capRacvAmXpZVn4TK4AzE23AKFuuf24zHU1he9WVKTQgCDKhuLF8etPcvTasT",
  "key1": "DWHpVxMgebuJp8et7fsDR4GyfeM1H26XDqcioe6AMUKWSxfzayQCLk9oYgTsLokEajrzGmaDyofg3MKkoAGP3XJ",
  "key2": "RQmAEZtpmM9sDXpsAdrzfnAHTXredzh8nXUWXLZaXEcC4oEFxgkTTgsuGbzmQPmXiofWCxdD1woFN4giB35QPzg",
  "key3": "UbbGuZwtvPMCv4XZPVDjC17XiyAYtqCVi55RzatL5YsxbvP3bTBYCfrDtMmHYPs6KXAtz6oZsz4tRDjEZfLYaeq",
  "key4": "iVNHwxRjxJ1cV9ujxfjhE5BydccL52kpTucVDEAYghed9B7HZSrVN3RnDsmL3EZiC4VaUHaTtmcoGQgoZVZY46s",
  "key5": "32u28H8jCp26s4ovPfqwDmAKKT5f3K4sRSXHyeu5zR3YjApJHoM3iAaxb2kyzTxbbBZE4ocWKgrmjYYBSneur8W9",
  "key6": "Axp9xFj8xqxNyWey9eHU46HPZoQHA36jTJnJY8JWYScGMnxjucRPPxAmuq94kaB4Xb55bTVWNony4fu7jevs5US",
  "key7": "5vgKEfFtmmvTtv7YruK9MGPsMtWoYwVGVnonzSKii5DLuXQNYdAyu3KN6jqLcNNmFUidTKstwCewK9v45JhyiiNp",
  "key8": "4HXkxudynTmnKCZQz64RAKNTVeEz3oC5L3asLiVXiPzKL1SiPn4jNDnraiLuWMwANb8wiaebAydVS19HARFodebh",
  "key9": "5WHGoYjuNPzQxAHPfgeLy9L7p2iWfcQTntqgjyPzvsoxDVAR5wAqDBExAxh3M79hKrz3mhf3RnR1qkW6sv5NYJKJ",
  "key10": "3NTMGz7vGkKgCKgLD8myszRu6m2xAYobGvYb6tVReG1LTQwrwmA7KvJ2zamPCzwDiDDNmnnNUtutY3ZJTpmZMMhy",
  "key11": "T3JmUvnJYRvPb9QdvufNTkjWG66rRdarYdChi3uJMUD1eeAodS53AVkBWkWrdt2WdQDYwBAmjGXDrYURuwrq4PA",
  "key12": "2rskDTgo86qtA2RXNvyZdSxNCFxd2ogc8MeDsSijZRtnKQPi73srzbQp28mcT5ijvtG7xRfTRnWxD7zV4cbQS3QA",
  "key13": "3rmFN9bGc8XurPD9hRSfWB23mcDR4t5XKUty1damtRzhbCkZCEF2LPCGaMmwmSBxwixw8U9rHfaL9xB7ivR4qkqW",
  "key14": "31Qwoj3Zz8u1GJ4mavEcdsjajUrRUM47NKjRWHscKU2f6JKwEwDcu9JBM9zeFiwSqH8KmM6DCTSrLp2ovVoZLRJ",
  "key15": "4jdoWMquyPjFZb54QRT6FA4jeGhDNgTNn131S2pXS96cnt3GmXt64JhnJYrD7vzs812Cd84yba54uisPWa68CRgJ",
  "key16": "5hT4uip3ey9uKdaBSu29nGEK5qFCtEKCzjrLBsyPcnQuPaAfbEBRFSWWvTuqGcV7wgShWrVctfmv4nUvtF1wBUNh",
  "key17": "2dpA7BagcpCeccHwdzitNcCWbsV3NdJMFG6VPaCjG6Dq9kByxot95mr9mkWEaknobwsZYhg5USzyN1f91MzM9czF",
  "key18": "kVBSezAwK6pgoMaPr8fS8kLv3zfRksSxbg1oXPEYySrGEsZSUoxNwqdT8Ay78peB1NxgXwNQR85ytbzzzp2kYdX",
  "key19": "4i4nAYQ7Pvbmx8r4g6uf5J5tx6E1dAyQsQgWfVijoKgp6wf6TtBvVEULaeNS4QXKzkVocLc4DMNRzw7x15ptB3G6",
  "key20": "TvZH1WdAg6yU1z8MuMy9uMytGSL2gn5QS2pmiRWp5h6vJ746h48oMjY1Fuzu7Nrix2MU1u6aobvcJXKVdL4Qj55",
  "key21": "46Hg2mwhbumN365KZnmZ4n4AbcbMjQBsyWrLrNVKFenrSmASCg4GxQLiCySusrWNANq7pJUt9m4o1hX9GZ5uxfdt",
  "key22": "E4CgpA88vvwkScQXbdzA4P45hmBf94o5BqaacCpyUh5hi6dF5fLf9Bgto2b4JsUTTiD7sALfnKhB6t1a4uP4mbw",
  "key23": "VkewFnNwC8cuXTEXHJ99Gkp4Tmh8BHhzG9RK1LEeW4eyMgnJsJHWeUeyniKGjk61ZLUMhrh3FwxBgTV8RwUZ6og",
  "key24": "3HJR7UE1oKBtECBYrKXnMCFzGVW8Rq6CwAGoRKH5u6qFL1muio3Grsb2QGxX6RFBCD1rUYUNTT7gkpJxdct8M51Q",
  "key25": "61coPNjW5XdSp6Yh29swd6yeSrUtTa4aHEZueW5Yx6HxpwkBZpUaQ7ZGtq2A6nh3tT4hGiv9htzNJd2NVkzt3hBz",
  "key26": "2PXH28MxywpziSFg3nDVgB6SqVGN1n4biGsajrG8hXTfPagASyz1hDbu6oqVepvkRBGthNPvRkaUtYjFxqjwXt8B",
  "key27": "2TaoeVBqJbihQ5aSBZWXjoZsFmHdhyDFsNCGgQacSuERThDnF31vKKavidGQHB2wwn7TSkmTmDX3PtUMFgYsJWPH",
  "key28": "5Drx7r2W8UtWLziM6MPqremUbFVFtwRayQ7srEVFvZ7X8md4is8kwvt3dkkx8Uzm2eGt3iid4hV9MQcqaFeE9HBn",
  "key29": "435UgUZk99SLMd8t59hrGf5gzibNcvWt4z8Y5jG65EF1vphKAY9ShhSNQ3biXKMxdSAP8ZL1ZSWrKabGbqW2Vo2D",
  "key30": "3GUp4TV4BLRVKbdfQjJC7SjYx7V6eagYhsgckBm7MS26yz2mWFA5DCNFMddca7nZNzdmRU2zYAsZ9eg3L6F3Ncw6",
  "key31": "Srv6otsSGbPyZ1FYs7xcxqeNsEPNRg3TTwFnu18iRpKUgPmaqd9d58T1bcvesLyXXtexPnegk4Es5GRTJ7ZNVkq",
  "key32": "3AWLDJ1XoH8GxZBPisGcHLNdvJbw2yA9iDcszw3SJgtvM8h1ZpGYLkynnvr5n1t1mb5roMcWb4NdqNRAfwGaNep9",
  "key33": "2NAnKuopeJnw8Aj694GiLYoc71zA7sfLso8QYfZTeTfZQ8cVZyksC8L7mt56YzgLv3a9gDz9ARGwdud5XQzfEcVV",
  "key34": "2Pm27wJ2iG3GsN4J5oPrA1twg2iKTFtAYwPo6zQHRSEbWSoG54cVBv315fheW5vtF43FGPg61DCV4PkT8Yd8Np8W",
  "key35": "2WMugSWTxPLuHRgps86eoQqwpsa3KzwR7zKCcEzHRuFu1WFfpb7b2zEWz67XmuqE8MHRLkqPsBUELmNA6txonBC7",
  "key36": "24DLkzLrcUY3GkToyyvMeaQ3P1Pw9ZuCTqroSvTjnp9Auzs9YC1j8sJwYeA5oWDMN1rcoqZBqLqU6eZXxm9cW1TL",
  "key37": "3ZXkEtXLPZXCdN8sRESqmsg8JKTmJUT42W4wFeNB6M4xbcwpuCaoSHFFHLoBwVvi2Pnes5dysFrUEPRzeNEDL2jS",
  "key38": "4DCgzDZa2uCgkAEDWiS8rok9T1Kon2i4hEeQgUKNawGcvCWatDQr7uaZ6932NTrCUvuZx6zDGdVPxqDevwskBC77",
  "key39": "RL1gGfXcjGto8GKUfaQeoBwoiAtzHJg8vPP2b7qyqXKLLgtvnYwjM4W2N4fiaXYeKjxpyUXv4to9a4YKWGZAR3E",
  "key40": "22QrWSunSzRpk5jWwaE2D4HhfrrHUm4QffJswC9LAt345aNRzoDY22riYGwm3sjBuLkruFuwoH9p97rHmKTSo994",
  "key41": "5mfW3WiTFYEcpJdRFbiintde9dGR3QNKAWMiPP8ioT7wEtGkZDXEEeJBPB6ziWxzCeeisZwD3HFk9um2So5aXpRW",
  "key42": "fA1ywF3GpjkFCQpCHqsFesZRriPABx9DZF3xiVqeDTpjKWW38tLxQNz15a2YTuxitpqCK43Z7DtsiKyCvZH4iRn",
  "key43": "5cDMhZPQtvgnFCZLiQxF5umjLLXXpW4ZFQpbbjDzBAEmQzBhYNReYAK8REpTYWsmQdWGrtihLDFwvF89accZZjV3",
  "key44": "C2TNviQfvXrwGD8j7UoGAGZMLD6zJiQ36i59sRoWZ7mdqgLaxN4Ew7NyJ5agYecgBfJYm8XzA9gFX1X8m8UB3mb",
  "key45": "4HZG9rhY4E7mYb87JiQo7U2MB7iDFWhKPGfdd3963tX7KhBhNk6Fu9tua4UkUCx2FXdJokcDhGt1Dg6KfhGJeL9p",
  "key46": "4WA2pSunZPQQuQkow78UndyrfBFtqWN3owMn7vDbnAHGbweJjqRJNT281yMVwUv68kAXnuo8aizW4jqiNvmGPPaZ",
  "key47": "3CURwp3sv8RnAYvtjAHS75mNcuMiZX1eZZ6qChBo8d8AMxPRPHYwCRCmqu6X6BeK3et91jD9gh3TXVBMc3tAwBLC"
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
