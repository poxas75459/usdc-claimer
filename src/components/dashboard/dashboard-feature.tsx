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
    "4v8TG2MKxREAP3fqk7PsyV2GNTrxYgzVaWz3X5EoCdwJauhZnTqqsSxoTpn4ZHqqU1zqUeVji2SjV1rNaRcDeBUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wqcaGzAU6NHxEpMLBiT2fj2LbmNBYrckPekWNJeV3CNoCDntmw6CCsbrzcQyMHMqtD2kM9JiTHpywcwdUUpX8ov",
  "key1": "Ty6VU3k9BonTcMzJaXcpHmo6dkrLcGNEL4HiaFVPb6ob9AhsaNnupssQpY4dDE6pRUMkQnMhJ96TELcYrHquLMz",
  "key2": "3vEFH9UJD8W5GhHJCzLnpF3vxtsKVz12Jqm5nRqq6AeWPHKcPYRnPcCRT4h8cb81CdLXe9BReVJxH8JonHChk9uy",
  "key3": "3yjkcQ57DAPFMhJtSHiynfgveMsMBDU2T8LXvpPcRRNndsqHpgrWrtTqentrT3AccMVkyvmpVkxPVWAAfjruzhxb",
  "key4": "4a8nEV3RU3uNLf6ZqLyNxtzNAP2x3nGxnKvnxRjGaQoo2g47V2egdLregVaeUEbdqv5rBu5mCbPfXGE5oACokth1",
  "key5": "3ZAp1t7RB87NWwvxrNGAQDAErdzRB5YS9YLncAtqRZBwXFo9inRhHz7DosYkLpdMHEQ5Py9vcTffExfjYK36m8ae",
  "key6": "322gdS5tQV11Ka4Ygkyo1vZdaQ1VYZkQKotxgPdw6qcLKikbd7XJVnBApJCgFSRSkSY3YFNGruEKqkALTHFi21GX",
  "key7": "5ofYp893niMHtTzJ7PSjMuub4xWXh8KWVKGLeAorXAB3GoB55dfYixCzzXue33J3RPEh1gAQSyHPzYMQuAK418yb",
  "key8": "3aqYdDDBgH3ZsUvGuBZVyvNWkbKSu47rnXptzdkEiYaRGdrw8tQAehvVvziaWGo1izRXLmuQbTBxzv2wNhTKoSkC",
  "key9": "3Xx3ViKwzRARmS17inp2i87yJfRMEaifMTm8xMt8o7uHMMm8wCu7c417UvDmC1m4cokPhhAqxpHMPhqno1TDT9fR",
  "key10": "37ZsaDEv2WnKpygHvTBJVVmZ7yZLvWuiRVTSmcNBw9rwbHaWqA23PJXbhNyaYFJuK2Py1UMz4Za31Ar7ohAjksV",
  "key11": "3r72a4qPi3Unsm7kNqUCs37kmp6qpYk7AZVdg4UZfkjZqZg859eimjfpJHSBa7wUwPL1PPHkyXNx9ERFrk6W2zBV",
  "key12": "2HYPbBKS461knB6sGXZQgR1n1sBb3Uo7efRnNivH3fCStcXfm1MycgyYMP3KjDwfNna1rLqTzbrfSt3pHX52H24A",
  "key13": "2gTPbneBqFoZ9pDECDTgUVmHQ3CUyZzKSyYMxzZa58ZCyY5v7a1JpyAHv9b8x6nvSfQkPCVy4PCTYfULCSbQMzEg",
  "key14": "4SAgyeMczvpRski6UtUMKgpiPov7xuycL2nrEEHw13tbWV5vYmZGhU4N9wpnZ9RHb4kFmMHr8aHxn9nqGpfJAtkU",
  "key15": "46SREWCPVbM2nQ1ie8jc4gh3URj6h17oWabedEosbvww6ABRbBmGBXmZ37ShauouUfgmx4fiqCJXBtQEkFke1nrh",
  "key16": "4TpL8PeMZSSmUcpt69EA6j1YhhLHCTrw2F5JJa3RJRBnkC7PVEUPv9Epv4ZVZ1Y5uK3t2yuaagpAqw6DhF519rJP",
  "key17": "2936BFv6SQjDKEkp3tEDCqau8p93hzBYcjDYDoka9uoQrAP7z2rJzu2bzMmo4jyQK5nKQixydCLmPb9FAVvEyJGe",
  "key18": "9kM3B13vN8EyU34DTR5AWrv9ieo2SQZ5ofwULP85dUrZTZNCbodi6oNsULvCjjMcAD73UxLCk6gDAQL7yD5SH4t",
  "key19": "5NAPcqGNXERqeV8cjphR7LjStVrABTTToGvbcXqyzGtTUGj6T9U11faW9sEzTptctHPSiBDD6Nk79z83ZgM1xTXU",
  "key20": "3maYgjJdn8vUavntpEczSLDrf95A295hAvNTsm7pa24DdEtnoCAw2QbobRZGTiWJSkhABzbbfDhc2G6e1p7HZuM3",
  "key21": "5nzo7FVSCq17L2g29UXfw7TD93xxnX1Lwa1Z23AVzgX5UWKbpyQdL4qL1Yd5hwdfmr4TyHrHw7NTTov6Bqhg5Kxp",
  "key22": "3THdzYyaab6QBoM9Acb5cUY3niQ2HEjDF5xcM6xEgrVJTiGnFtXjebgqXYkz9pbs6NeP5tNkiCDZkHztAd3dTxsB",
  "key23": "SxKfKqjD2ZafoUS9Qk9o1eZV3aRu3KpmXJbufECmTK3UTRq1T5t3KAtMYnPkqQ1sd176eRDBwSPRZzZSy9MKLew",
  "key24": "22J8JohyDNuenrMBFit3pvQM8bG2WUe2wrTLdiaRixNCGHsfEeHJabyRY6f62frqmPuSyioJqeXMuU1WwtUh9qZ6",
  "key25": "34NyvpGb96fdxNZuJVjsuEQoijSTdxe9c46RCVaTFFmkya6dkLBBWP2eKFgzaj75FuzJWUd7nvVc6ZHdhK1Zcuey",
  "key26": "3SKtXiaREf2NBVkbfjtDjbeW2C43nau93LRSWoQvLBYDBAh9w1LLp6Spp3V4fhfmoY4ZkBfexZDphsAU94raT7ek",
  "key27": "4KtAQKpGRJBqvNktb7NZKAtrt9ApeSdzNFnE7F7BU7L5qaZzGvzRm6EaGg8YQJEePA8xZeegYfmvi3RrFPq1iE9g",
  "key28": "5L1EeZUvpVP5rAwGWBg9Rdj6v1U2P8x1WGvvu2GLh77ZiPRyd8Ynj9qef7iiPTjWVErLWp2aYGPD3QyHM7VAhArH",
  "key29": "5uYiWYuyRCmmAx718gfr2vDJz9hNGejQf8UPY3gGF9rzCkBUU9BQR127MaMgx6CEuTMPecNSZw8bqaR9oT9AsL9i",
  "key30": "4gonTnWCSQUpmC2KZXXkVqGNceLYrshDyskH1uiexEDaiSqqRTwWrG5DDgiReo1LDvNtzufr5KBqGredCv5ge63i",
  "key31": "5xNXNJ9ZqQtGgcMo6qcKnsmh57yQYTVveShJsTRE9VE9Gas14LdV3D6w5ArStVD2wfzYm7HEVHmJ43smjBvvB2xT",
  "key32": "24VWEhKJgvSMqGocFGT1fY41s8StMVtfXyWgNHjV8aKab9eyuCYpNhV6wZq3MS3AjCqYUWhA6zY4pourz5GCbabW",
  "key33": "6eLQq42VcBCBP4fv5snQpcYHrdi7UV6deGz9H8R33NYRYaJ2Vv5HvfJwgZ5UsbvcdyHfbg4gBFqEjbDnn5rU2a9",
  "key34": "3fxQ99S8ynGcd53dYrqiLwnoEq252czv3tA1b6erXjwxnKA1hxo8wdgmmj4dn2Kc3LTvDuZAHDFhwEUnWKhfHSiT",
  "key35": "3SsuMxn9nhaGyoaF1K6n8iWFhcaAKjzGopaKBXe2psPPKwWGUzRtDHYsdHYFPbgazeBerpXk2Zc7KcyMAjDdbnCF",
  "key36": "3c91B9AgmAUnHWvoPAyKJs9EsNNsY8Dij4dJLH4r3UR1fPLPN1vJSWLWnro7RQghKWsnkUbR8BeLSfp58LbsrwAh",
  "key37": "4uuoutjYj4TVuRxrsQxs1hj3MxnRmjkyHTLfPtHjtvDA5fNZEA8wGrhop32YwxhJj4d83idkUrTFtA7WsK2xKEe",
  "key38": "5g5KxSbLdsEeY8GxBgWQHXxtkSCjes42FxDf3CgRrJ5gSmTYE4MamGot8fEY5UbkCJSZSvi4DFypVjuw9y3n2f71",
  "key39": "AY8nMmG44PLq4LTpmq9tMhQcaRQBVy7AGTYsEq9yn2D3Kc8TgvL4nFbnBEtZKdRw4LoCKDpGS5DFqiyLfB2wxH3",
  "key40": "MnyAgHas269CasVs1Jve7bdLPw71SHtgF6hr5ASxzriP8wyV3iv5JBCEABwxNGBsDDK2ADDyxiR7WhMc4SkAnn3",
  "key41": "2WWXY6M8sjTix5xFz3ahQVcdDcR76wxujK2iJ8srCTVepkZMdGcJErY5GJCBESDdqSedeicTryf4hZwc4ursB3Vz",
  "key42": "4JpKB44QvcghGUhewXXK7A8zX3FcR8gyn84L4pNtokJbWKHbAfK1YGXwLh4VsZHidgJDNrSBpYdfkdFAnqwUTrG1",
  "key43": "3Kmjpub27JrsTxv2ihvahwEdsp4EyNAMSBnDbyQSgr9EePEpNjBjn8RCWh96d8rZWPLE5HKbA4eM6hFK4VucM6vu",
  "key44": "3xTm7RjjssKNYzfnbL2jrPDuweRHs1BqLUSUyShjB9Kap5QCsB675AyttEfAZMjB3XRkeaWk4xPQxsAdDgsmF24w"
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
