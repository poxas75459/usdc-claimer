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
    "4jXwmyRdUmw7LBcruRx42K51xJyCSkjXAvhCao13jhREgNKbxTdRG1KwHFQcvfcBbcaQXtY24EcL5pYSV2aaqo6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x3s2SEVJtEg4YT1YMjEtyQvxMoVSrabAQCYoAxyuZnedXn9bUyyKCmzpmvvf7RNi6FrSw3765ZnK4o4cpKGQ6Gu",
  "key1": "78RU3Zq5E9HeTh3e7XpGG1g7wSAKQ4k42HVaShB3DxBxB28XRykYbHhqyh5nwQjDNonm9Eee9zuN5dUBvbLb4DV",
  "key2": "37TXP5PPahH3HSi1haAofvkZiZy9SrXvDupF4CcghwcbarpYb63ECYXkHsBT8eSguu2TFjaPnSK9pybfJs96qygB",
  "key3": "3QbCLxq4uVj4RC8CAjC1nAQyZemd4magZpHX1d6s8Cb75JHqMEh3sxYnSem2QEK4fwAHXDGz5XGAv57GFrncyDDf",
  "key4": "38qRTGuNLW3y7x3CNWxMhPzn1pEXH6pNeiPxAVEHsveh9tJY4MHUDqj59zFeNUe21WLYE7f7g6ZKwCKvDQps8dui",
  "key5": "5bvd2bQE7WXAC2tbW1MpgZDPLujxZcY9KEn6mVFUBY4A2JwnjWPu15B6MrMC332W25ebhPM9iNpDHLKZwFT1dKcp",
  "key6": "4nwoEXRSMJsgpvpcVCW67ovXCnNnWee4gKnYGkTKqrY4qHz7DdWeFxpnsC8U8s46DLnxacsAQjpTkZLqmqWRRjmV",
  "key7": "ngL6YeDbz1cdqCiWjENA3KzkUgmaXWJLA2uGTqMdg4XHBnFCA69L7hu93W4eU6Ycc35GbWnkPCGHqguMtQFUckU",
  "key8": "3PfX2mokZZ83MVnY2pYnEVif6cktKjNq7zt5URCxPu5AxEsbQAKjbzuzHauzayc3DJtf8LdqWxxpSyYEEynQPKU2",
  "key9": "2n7iph6wv95Eyydz2sTur9z7o1By9c4ZaTnmSoKYG9ou1eLHDew8vkAb1AtWS13oiLjQeUL8QZDsT2QJo2m6eRaS",
  "key10": "4FJWcVDmLacTkPZgjQbMKE4nNB5PEkNhKnqicLJdfPQnWGek4cjkjUyD2U2zjcAnUCdWiV8sWDHD4Ari1LgKxSgq",
  "key11": "5fHphGwBCWpzLGUG7JkxXjZDrjeFr9F3iXTdxkq2eR7kPp6qFXm5MV9dQ54uPLwnWwP2sxFztrqTryQtP3TuKyiY",
  "key12": "2VyGtuwgBVawnLyh7Lyf3ypPegPKAZeWFaZybwTnNCLLK3MJxYoEVM9LUhf3YtW4HqdzJ6ga1sqyaJdvA5Ef8PTu",
  "key13": "3z8fRsnng1kzByrN8ct1zkgp71WzW9JVkntj4ThdyG1xVJkU3LFESkUXNmbXgJhvsvvQaxfcZmeej1vTQvj4VMBx",
  "key14": "Bvfqehw7fDhenjkHuXvTr9ezr3kdJrUZ57JC9uQUcumKJmWEDaNNFiAu9D34HJSDe5NvVQj1g68MqTQXyvEYUZd",
  "key15": "4eEZ5CK73dRvNAMwYX8nJkBvKp4Hb3E9X79Baef847TN6pbvJXSM727ujaziRabtz6REL4x4yUi5bBpd239sifLM",
  "key16": "5wuttKqNKTC18bCQtUcQAfRm3LGgLpi2412kfaPuMCGhJYXhM2s72bc3cgrirukjUC67jCPJGA86pzC6VanbUPHU",
  "key17": "4PgdCiHkdL7doWHSuz2r5dddVJ6DrRBHHvbNWm6XRBFGxvVe2msS65LbsPC7pkhASrjdytTpm6zbLykUHp47H3Bz",
  "key18": "3WNSwHx3cvdh1eu1iQbGHvr82DSkpHsanGygNbnsq5h6SL4ZF7CfEq8wAvKhiRqKGKJ8zr3i513XFWCAWKpFGXfR",
  "key19": "4tEo1srh8e6nAG8rbC8oTriTqTXh8AdQx2rjoi9JgvfgGvNVfnhCX1PhdfUfsgKsE6rHGQENuzZMRBbsGunu6rP7",
  "key20": "3GJbLVZbQPLe8G4X5ZTneHMJM3YcaUmgeHgWM7D3nia1CfxKT7h4BuuFhaRew8m1LozrcQt38p6AKTe5CLz1oxdp",
  "key21": "4WTRosoo619cpjmnbj9TK88T2dEiTgTwGhnT9PkcDqawsvFthxWguwVRksbRim7XvVrYMLSoCvTJJHovtQbXmChK",
  "key22": "HZQatRPEQXmEKQrZkydjUdH18LESNo3p7M8BnJ1WVhdw8KkFALf8YSfWpqpFeAd7foZ3PsiNzajBrGK42n55BZs",
  "key23": "3aBek46qgF9Vvu6yXEi3PgbGtsPessobKAgUL7Po2ReLi3vLsB6jd6SjCbWrujEcBLRYRREND5Ezg6hPamo9nwaf",
  "key24": "3C2rEcd8uL3Yyg9ngpjic5id7qx7ftEjfAnjYzEyVxp8qsuX9CdwXYzbJg4T34PTvsPhtAnAPgyQZ4hTGuLv6hEs",
  "key25": "4jx9B4FtnANSKtp4MQxTfLvf7ewsUAbkjkMvop8Fhj9UMjsLuiXsW6pRqqktmMXK9w139Ac2ZS4oNwZfsLNYVBr1",
  "key26": "4hY4FSZQJmQa11VzxdagPs849hTcamDgX71S1vabazg4zAn2UBHyKnsH2q4DTTRiCV3bXjLxLTQKH6jSBcUHKcQ5",
  "key27": "64DuumDwWsuzpVhXr9EmNsgmN63vuniDSYQXcpZuLY5VbdSwEmXXyiXyjCMCwUuXjTAZhuXfoYLDniSE7SXEvs5G",
  "key28": "2mv8yMbkGkt6FtuWNTKmRcdjEXormGVRXXRBUE6DmfwSFGr3gjrJjdxZeiqAGtHFtcfVTVUbH72zkXXByi9dzwRX",
  "key29": "2tX19ppdgDYWtxE9VPanQhHURaXqG4XUDTFwwb4SeNBuyjUH9GuLY2PmdyvyEgQyvB4M4iMAaddKp8RGf3HVtggR",
  "key30": "3KkovoMSS3CbvWXkYnTQFfRBomS29RFq735Z8Ey9NdKDEwaZsLqMXSjGZRU3xj4mkzTHB6GEkm24Wj7NPHfi125a",
  "key31": "56jWdsT78Uw82sDxPkZoJfLbUnBpUcnxPAWQBQ9Yzk2qVdabh2PUpGHAZYxP13dDmX9uZMQZ7S2ADjHKfVzNQLHj",
  "key32": "WUJBZzv64EK5yu6imGG5wnQRMUxnEZ2D42ZomJMLZN1urVRetLcSAHLFPxmWDKDA7ESxrPtuAHNDSTnX4M1prUM",
  "key33": "2MbxkNKMPEu32Etf4RpgT3uZVU62VeBZbWWnrNgwqnusMkxWv9Gb7kAzqnBhtcoMcTbppG8MFTQZFXMgZq4spjVr",
  "key34": "5XvnRDqTEStewF8cx1eR2UCT9wBkuHtNoRZsqQ8Cr6m5mVnVuSquth2WqBCXQJZCxGKsWhx3aSkRnVXbkjT1upye",
  "key35": "3mg2gBubc8fXTmzXLT2xXNo1pDouvuUJyWxSZfEweLg6eGgj1u6TMKnrRZSrFuWTdmFP8wb5cWifke5cF8A2fSnk",
  "key36": "28Q12iA7p397mdspt9nUdBo6MtWDbLizzSoBdHyneca9wPK9fE5NEAjdKBELcVZZpFvu5FAnQpsdDNQioWHvsH3F",
  "key37": "5iRNvuKEBRNc3A6Uf91bXbEwGNVcMqRRDdfS58xoasBFymS6ptp4ccAuMaVCnzfg5zxwm56XtxhjkoD3Eoab3Pj",
  "key38": "6UCXt89BYsowkyPYERdC8xDz4BsWbrhy4SviabLH2qLs9KZ8W32NP46m7hh56ZBSR2YbY2vusLm61YqHS7xQMUX",
  "key39": "5rwtQtuFvZHpH2uurBSV2oQELv7NanpxfTjz5f4Jgz5sabFabBVCNeJkyC81Ka4oSiFp2hi8JNqUX5DFRs1eZ5QJ",
  "key40": "2bAnRrt9H6eCkHFAn2uZYY3oig3GS63pk98QXBSYJJnXCpV5aAU4C5tyBugNRStqfs4CGf4KTNHbhhDz8x8RwuLQ",
  "key41": "3nfDY2a8kdAtxyA1yMWXF2WhHmGp6VHCQn9ou1SqZJ5BKsRVZ5Wun7ic2vmsT75Y7NLQd71aJoq6YCcwRYDLnWzk",
  "key42": "5PGuQkxy6ZLyUJeVBCEH81kMctZVvSMxd4KYTzUX5Vyt73utJz4deKesfNmetHqipRZQR6ZYua7ZjDLQ9UpRiDRL",
  "key43": "4VSK942FCxWCGE1bpE5TqpwBuN2PhxYoJGJg8Sb67tr5p7pWQ8PFXXvePi6uXPDDLVENYhHakvGaqdczekEiyXJa"
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
