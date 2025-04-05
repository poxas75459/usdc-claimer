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
    "26cBdGuY7VvWXSVmaFV4wfsjnhhkEgNvux1U7ZwXo56ZZSV7QmVSEmGxUYiavZ1xjXWz28d8StyNWCz9YSHFZ93k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ViCgwU9VidSsYxWLP8iE9u1pXpfzUUDZ4KtBDF3yZG8KCMa5hJP4ktjuab9JnbGXbi8RnBRrkJ3m4LGCiCZSS1",
  "key1": "KepvDoSruPHD5FKXmw5E2uVaciSqoj4PTNhYMdUtfGLY9DMXtyKPLe4gadvWB1mgAgPHEQxko2GeQhXoLorfa4c",
  "key2": "2ZeTkEA9RF3cgfhNpCf74W1oyT71TqV2c1m4Zp8ZKfaqQZQ8wUDgFxcrZ8BigmTk1qjwVXqNU66TETeEEct2bEk6",
  "key3": "3BDwnKbUrLEe4eseEkaw4ow8bdqMsuQGExUo4nkeWjuv8W3NHg9S9Hx8pptuByNZLSRE6MAuyZCLrBmUt8pzBhdH",
  "key4": "4mFKZ5S1xkbz4frmYKK7ffSLrrAiv6QpMJExz7PcsafdZDETSW91z3ivGgRmr41AGWPrJ1PdiBtENicpYKZRogVV",
  "key5": "5PbE6TWxEtHQY6eEAxWGdCY2BejGxPZLKLq2GFtcA8yP3DdvLFqi27CwiyDaQykE5aPWG35fCLeYAFWoKjjVoHf5",
  "key6": "2ZBYce6AcKi9zEAnD7i3ioERi6U3TtYG5AMCoyZNuA6VTnKtKz2aVStzowSBCUrtDA1N4tcgLWK4V2U4qzngVcfA",
  "key7": "32QLPbPYxsYSwHJEygCB8xoTrsHDau5iS6Hs9iCkFw15xYKN24srxjzDb9b2pwWdKwEqz9CpULd5b6YiypKVgBgy",
  "key8": "4cz8fQr9fonBweHfUAyXxGuQAPsWPi8fn4Ctwvm9B2LkLvAc4y1AcqsDEWAeTt12kvbp4c5aM7AAuttEk3CQinYv",
  "key9": "mdWRue9gRiUuhsLvNtxQp8qhmdDQ4Ty4ABGTJ9N6wY8oBLKheD1UMpurLqng1w9mmtBF34ZJFdcd8MndVmckiZB",
  "key10": "6fTU6ZDdYfn9JPECSQbrxTvfBeHKsjebmw14BruVnrhtVce9pfimJM65kKt5ffZP3R1r5oFDKFNCF9abA8VuM5S",
  "key11": "qDbRnTdUWG7vpKeMLP8wVgq15b2EoKh2shvX9Z1W3ccJG6C67LJfaQisCucVEt23SAjXVzBvXCfzjGjH4CnUn4P",
  "key12": "5LLcoBxnod3ruozvEziYST2AqbZ6jjwonn6rdYuqNnBJrZxdP79bdUutdM9QNskgDBBVkiEHAZb1MypApuVWNDqa",
  "key13": "2xT56VUzgtphGwbSQA9G9RqfDgFfuWB65WiDjGfdFfv6SBTMZbXqbNaA7XbG1Do6KLz5gwQtAzyXL7Xt4iGFNFiC",
  "key14": "2rsZkActcHBtDU5ezuJu8AhUqsutXShYpaqwJFHdBwnkPEyhKUH6n6Q4GorwU4RfMkws7g1kVqX8cpBHUxxcgCgv",
  "key15": "2MeNzS52ZTgzaJCuZ9dTKmweFfXDpb61ww6mvx9Kqi8cMLKA6hPKVV8uLKKUFgfsaopYRnFVzwidkijq1hb8CKnj",
  "key16": "2VfcfnFdyBFwGRfZQgivLBM7oYLqJRfqGn3quFFN2KKprJycWbV2zGJXUGFDGEt8yaHkgpH6B5ethStWmuyad62r",
  "key17": "STaf5r6c9KquxJphQTmZ3nJe9aJLU2wbN8kAJos1vEALG2Gp4Kvmwk8utQjTccWBWsQvyLLzhqpWZdwY7Eha2BX",
  "key18": "Jbneo5oLpFiTHogotEt16HvUp8oE5ahQ9ko77zCeYyVrGAR6ykQymAaVGXp7oCteWDJYABw6B86WZBuatkdd47G",
  "key19": "4rhgw4JF7kHN2ShaZEKDhL49G375QGwkaWGqrasicyzm7BGQ4DJ78o8R5G7Ajkp6hF2x7viXn3w2k3TGCtoZNGpJ",
  "key20": "3zQiMWUwsMkYtMhjKKF5j39LiXHthSK7qpx7ZXZQ9RPMgbGjHmPWhU1qihY29Fp2LCUhexTkXfPdvSbjyn6Pc5rp",
  "key21": "5B3GHKj7r41V6CePouQkr7FbjRVsUenDTdB6rFTYiR4qHiSZYNFD4qcGgpT9GCk3Td7h4GHSwNMAjLaEtDmZhD7a",
  "key22": "4dGkCFTczRzDkhMkRxKBGiaSkYmrSCP5Vu6sHp1k3647ZDgwhp5Acd6boQRuwnFt45TZy2Miw24SSQqrzF47G5Kr",
  "key23": "4fvSSFzzr77qAWFab7bdoVeMmMcZexpS1PxhK8ML4XkwfjeJeR8VasZUFJEDsNh252dUJvYRbxUGzcDKcuFJWGHh",
  "key24": "4gf1KJsq3mmueYCsKAYonLGmQr6z1CNpx68y8WivhCd8tsUyepRx5kMX83kGaqmgSxMPdaMKj9pgsowR8evQLK4n",
  "key25": "23udrLdLMA9kPeJUcoFSDmFte3b6z2Caa5UqtLPCGTGfwMgMAMfzeR5fMW5rzerDTqKocUk9pht5hhJsCpEVeUd6",
  "key26": "4z6AcFMHoJADH3zwWNEpvbqfzDXosJdQxoiaBoK4NbwEtbjUXo35CDba8o2nWWjaeXv8upkmNDKKZsPiPdTSuHta",
  "key27": "DqZo1wzANVbA3Z92NJxe8tKChAmkJ4qtpKLiMkmQTzyegcdNgdU2QBXUufchnKxFaaLJXvoFvRGkDjArT7xBgo3",
  "key28": "4uHLMKTiKNuPgy4dBbRZagugAZzCgBdgkh5C3gAM4UJq6yz73jN56L4dHFWaG8Nw41gWW9R2hwiLpmkaYqXyDQx8",
  "key29": "2W166kyoVyZ7BwJFmw2YeJV16MXstjPRy4x2GvMYhZZ6GXMMAiq5vmtmbcEXo7DSb3zENsVzAFCskuBTE4DUvXqn",
  "key30": "38zLKiQgEH7grJZF6kYkxwPQvc7zesqQUWQ5rfZ1Eps8PvQcHLGAqgcv595nEoRi7hdkUdpgnyGcehWeEgtz4Vmm",
  "key31": "2njSKRkFVesTb45mKxCWneT4SPTB3rVtQuiKHpnebuKc5CFN78hvR3uV7hjE96W7cBz5UKescZnhG7Hmh8yuFTb6",
  "key32": "2qYwmWWR3CnJzngLn8JhZkvBuBy6NVDoRpmco7cJZDABoipn7euWWe5hKb44BWFvrj47QHZ7WYu9XYj26FvDaHmK"
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
