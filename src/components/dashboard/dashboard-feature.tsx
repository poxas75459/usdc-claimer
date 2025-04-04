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
    "tQFVmDEX3Kp3pD5jDXYzLCthCJcxWBJ2o1DJipFqdXEL8Fig7CGhx2zwQsxjAkidNzSaBTFTv9LMyzHHpmZXyvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47gyC6RJLXPxhF7xEF66a2tiLHvJcxahkTcxALhb9752uaCJ4eLHWLXQB88ynEqALNEvDDFtxoTeekFViHnqzxy5",
  "key1": "4wyrYBqGTQ2ksfgg3k28XQwwRSb8XwZNnP8B2sxjPjS6wqfd1jytbDiQEgDLZsFGUKUyY8CZmLqFm2SkpY8FbQqQ",
  "key2": "3CXHR79FD8MWkUsNf4hsF44jDVqH2WEjzKiGTocx9vgJXxD7nsbE9ppDRyF1a5M9TLdAMSmwePogEvdYMP5YAaFZ",
  "key3": "3GbkHHCx3rAk4oAx5BA7K6xARgAcDYcX6mZVXNoEWQStqC9KT1SsEmmeECvrSuknUyCH11cWUfzYZ2bA77Qsxos8",
  "key4": "LTWPuceM5ZNGP5VEwTB72AAd1Uyu3GU3bA7dHpWudsRjd9f3SoKQW2NkFLdtZWVdgPvKvfmdVT9xnxjeSJFSbAH",
  "key5": "599vnv3xBopTMdsxLGiga2hWvx9MqaD5CSciKizdJBBWhKUZRY4ji6G13SmoxA14f5RgpxuaFtfGtVwteJi7R4dY",
  "key6": "4NfdbZbRAhLAmyLeVowg5gbGu3uqpBUXFLZSEpHEtLATGUWigrQQpdgPLwE2p4bKkwBZFTMMT6qdva3HfPPfehZf",
  "key7": "5bXtoWBMgoCNXJokLoicToqDwwyoSyPua8azEwr3gknpS1n6sxaCMqUUw6QDm5nuCCCbY11jErZdVcSjccF6BNRp",
  "key8": "4BahkExqoX7M6drCRkXQZmpDCh5PWTXjm84ZGsEqkt4kWVq7tXWdyfKKHt9uWofoXTdEoDJWcRvH1LdvvdhQfmFw",
  "key9": "4c9J3VoBvdWF4dzzxAEs7gmNtvSKRjCEDJLGeHfeWS9qyoqrHKurPNo5LdMGHAi1aGQiMVJGmuNsmcLK9bpgcXeC",
  "key10": "24sC8vBCB1UvdnaR2LxzchkVV9yTyBjSAtoAZAFqtznwLaYowHV9GguYAmjJLT2msbJSwVNHJy3BkiJbg5L3dSTd",
  "key11": "BKopDc6FaNwc8UC2YWtDdz7ZrSxfxyKszQjbAi3Zs4TJZkK5Ms6uGMehszn3sFmJ22GZNb4QSkxVFvgZ9t4MuS5",
  "key12": "26T5q3okmv3rKnEMYw2ETfAyAXY8qjbrcJZLA2fnNEXp7reYPViWcrznSTjsVwAdxyujZQQxw4xUXkRygJTnftj8",
  "key13": "5hgwQCYPRt5745qfMgAg58oDUDyJigJ7mLTR78871x7drphZJupmxNffUfQmo4vSjDZRT2vcLHhaazWzfEGeabWv",
  "key14": "3tN4NGMMwS32N3iEcM5GQkCzytzAz2v4CJayQ1vR6GXoiBrqmtaRntum586Ev65fhJeYvqcfdbeGMHXw8yHayXNU",
  "key15": "47AbSf4fgNK2iCDksp4YR4LT75yYnbXHoE54qnwEPGHUMyvT6ucwCLv5YsaDfc2v7zsnGGPb9pSezp7oWKHi6jV8",
  "key16": "65SvB7D7sBTAXTB3pS9WZ9ZWBNuULub2pPHstGys5r35SZkjEbZHAbKW8RFRZewTrVbnFbnTJwiVkyG8b7ceGR3D",
  "key17": "UCQjsYbLhAbHiPEVmVK2paWCay6GYfHXHmkdvKpxHhyBQ5t6Je1dwcWMNcnD8F3NHdRqEscnhP2ywuDmPxwBeRK",
  "key18": "5d8zH8mDBc38aHzWRxVUCxWzzKt1K16ateLQKnzG7JkW29b7XC2SzVD6vEo88fEjxs4mmJQDiykWTDcjfUfbPJ5N",
  "key19": "2JcUBNjwWxS4p7VJ12zVuczB4UL3LVj6Y1mJyZ8bJy147gUo5DGGoCdL3oqacxdWKrQyZgQczucy8caUPToaGS1P",
  "key20": "77p2dk9K93CgJvoq1turd398axsf9SFFwTxp69SDUfaw6fDdbEH3SeyxcD9NzK6rnP8tKbCVrchT5hoxHqASqv8",
  "key21": "5ANdtNEHg3pko47KHAzYxmkxc7HkbrkDLYDWjm45mHL7rbLaVcZWTmR1adfZqaEwigtAFooAQz7iyUtNnMcCZxWk",
  "key22": "4jaxi9xkfKLjpqRNjcW11muAZ5Ciia1gb5HAHVC2LTtGiThkjEZpip6GCN88mviqmzyR4X1v5UGqzC2QiGBgoYhY",
  "key23": "4V2G6YRRNMX2grXSgTo2mWdY5TVYk3e2WinVJfZzdsizmB3FUPv5fCfLsaRxwBsMHLcQA24tCCEjnVvK3rPYx4dc",
  "key24": "3RcXYb2Xkz3Mmt1cim4iUG1RintmnTdEcodhEu9UvVyrvxgwiqvkx5cNAh5bFenUBN3mWC7XJVmyJPjGjx5qMpaT",
  "key25": "65BjvbC83DFTnqTwMF9XHYWFMSAzH9mvYjwJMyXTQTFp6MiqWSJNJrzUsw6uLaUMLxwJ6KxagZes8xRzPBkhmGQR",
  "key26": "25YxnN75JPgWoku9QQkcb5WtwQXCjgFuhrvTMR6k814M1AtCWnPBJmuDs7AWxrNekwPRpV18Z9X5TFgdPhqKsgrp",
  "key27": "GuwhiYKBtm1ukSeSbbpgZjQ5sxKemwQtCzw7LtUK6JCG3kYP8fz5JjG2i8h5EcqRqBDB5po7jyrA6kkTGEAuEzi",
  "key28": "4dFBzPNo7NrwFfAoxbwzo7m1RwBALVY63TsKBjPp8hKBYjfJPy5KvSTP79UGFS4KYoYiv8AEkZGNnz2wUsnaK6gB",
  "key29": "4LGF7ATvFo43y6V9r5Rn7hQ5VJHBaue1P9mrGSAbn8NK2mbjMPZMCY9JhsDSkQFYy1boCSWPHCTK5mPyvzgv4ezo",
  "key30": "3HGUyrMLo7Ks77NHXdHQcJWw4Np2if1YFrykAhrY4oBTKyyuQMPyuMkisp3EveYJ5TG76KmjoxNECpQyhWKA2oSy",
  "key31": "244ZeRpBS17c4rUbzgYJYeA5ToPraB9VELRWueefKWN1WtaSyYSV1YePhQ8Wcze8BeNyMbdbux1mCjP3sogoJSrQ",
  "key32": "4HuDbzKBNcubTcmbAyUEsNsnXs4KgXj2dpCdvD1B9VHeUEouJUeHDo46b5FX3J7UjQMZ9MqM4jQnzagpiiqJA3Mx",
  "key33": "NDLmDP4KnNz9t6A9PsEpYJ7D76arCdeHF9Dx9BhbeJVo7YjcepPfpzpXWhkDRr2ufWXAbZVKbFuwt5HuG9yuJ97",
  "key34": "33uJHacJCNL9UUnRx7K2TcVjjogAruQEi12mzGuhtovUrFsi1vrMhSnptQmMNCk8TWs97yK8CTn25dpLGh4aiJKR",
  "key35": "3B2s1KpeuNCvfhB6LTvPCzyLqjbTTPtw75gFeKMDih8oe16CUzuwPFzystvAy6cb8JpjPykuK9zeEsARuRegZ3D4",
  "key36": "2aa4evPNesphSx7JB7RaSXrNZ3wR7amNc2Mmevnr4Da7QQkjkP27Did8VvVZTrRgEnxJow1QyirzBbrgSzytwH1Z",
  "key37": "3tDaHCvXLHFR1BCJapTm5rMvzxyHLWd1ZrbowsP6jb2L95x4nAuiLzskFhrmhJbGqAKLxVY3KgEVCy2fVFjWLQUg",
  "key38": "2ti4vnqkRBUwnenXdcpiYCaZgneh8798EjnUDWvoEZcYS9BmvNpg16iTBgXzPF7E6fawSpEG3XVQQwMnKwHXCHCL",
  "key39": "25aNy77bg1Whb1MEvinfvdRMp52h1634SZV2nkVchRk6PCPkFMWmFAeGV7GFzMssddKf55c7bDRn2pMUin4VZKhx",
  "key40": "2asJjebF5AQfSscpXejVmty4RFb9eGpcpybRpoZXxUR56CkGL11B1FK5Aj1bv9zby4KB4seRQqNSzP7xVF9T5UJr",
  "key41": "BEin5PUxrVzF8BHK2r7QgT5jxMrTN4H8cazevAknCPcpR8FzE9Pi4j9KL8K1w2BZCJ4XGXv7Nfw7wze3i3avUbu",
  "key42": "3oyuMcvzg5HkFqyueJmFjS3s85Xk3rJTHGUshbjN3zzd4jdN3ZjnwDRrVXbz2E1jgKjnZCMz2wH2SxKgBDFm25vV",
  "key43": "4AH936Rs1yix4QeWpi5V1ghoeyi1pXkFeAPa5vGC2pKiVrpkmAs4PDg1yVjxCwS2Qdx1aZ1JwTJ9Bf46QTSc3AxL",
  "key44": "4T2Sx41EDVoN2AbrnpmcHTkzeX3gsCj4gYyNymLh8BxgfMK4ZDZr5Y88VzBVHZaao3XwX4ugPDd4nnXB1RB22T6g",
  "key45": "3cZBYyQ5knN4WsaqBK1PTFsc8Gxdu7PAyL558CEZL6e35NUpLRkYtKav2dgA2k54nzABqMqqXxZgfp6SrUUDF99w",
  "key46": "2yx4Wt2iTftyHsHTKrSKdzcEtdpSQcXqNkX8nZm1uP86r36Ue1oW6pXYE1pLFWjoqU1KL4eTitZan8kH9MkWyrGw"
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
