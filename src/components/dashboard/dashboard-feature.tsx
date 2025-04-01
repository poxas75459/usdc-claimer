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
    "3Vp2efDWfj6Xb3sDvANjKr4gTqNCiFFbubsxcfxsNXUDqEFViinRN2doqmLvwit6W3bYELFp6QgopgSnkkM5vkvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rf5m4iynXAyG9bBfMRRU5eDeZjYahHeSVQVtUJrdiPV7KyQhP84V9co5yw5PUQi71PMmAZziu561ybRUJzZfpKz",
  "key1": "2gVFJzsoJUMoXCfHhX8Jp8GVbz45JYGmLNLHZTxr79At9NXBQ6Uh3iMJLvdx5dNDj6mkP8bzCXcDb9F7NkMWDX28",
  "key2": "5VgjU4kFwXQ9REVPw7JEoCZBQx8UE3mwCBoLUsjdNkpWAfz5cHE6nGjwuum4XXuS5tpsvoq9xbhqcSUMtc14Bb8f",
  "key3": "4pZGszHLbNV4cKozy8m2n2jPvwTpfzuf6g8w1MndLPpe8qBnMDPWPfGco9hGgtNmRYHQLXp57BgVbHM6bvemQ7g9",
  "key4": "3rHCs4DSCaLQg4pLfi5SPVEBur6hvfeMe6J3yuAxMtcv7DrRzeZ1a5RFjDChpw3BtsAVceJmtWxc6ApWSTHATq7x",
  "key5": "45WKmre1yeFGXNNGL84ZYsh1ie4Ju8icdtV6AtdT2BZt8CNENZqEyAh2MR4sGMkmxX9uncWB8r8awgwJonKmLrGN",
  "key6": "65z9ohZ1iGZni6BTErpm53jev55BcZ6y7uzXAoePQkErEtyp6PmpsJtMwKzbYq1FF2rKXhmrdu6sWxZkHxDcN1Nh",
  "key7": "3qK4XSM6nY5sSUHABfpLxq8tRDRTEUk9gZrfv7w8qb1wttmLvXjo5XeGRgiFDrZEQz25dVpMZUb3jZtjfQmoxKQZ",
  "key8": "5rNCxr86bbd3hFCtPekRUo5eXxYpXyuxt8eQucngdu7b3rcfRPzhiFojsXsAvftsrtFvF8zgbxF3GsCLPWsRQk3S",
  "key9": "4aXjtcLfk38x5nTKXPowXG9DLhwCCSRgqhWuMp16gmcaby2zWi3amAZJihtoZUhFbfoFA9ioiogsF3GZeZ9H3cLa",
  "key10": "4CdPxhs3me8ioqLXoXgd2Vsj2XeitRioL3eGD9JTK1gHwgfAUkTzAQ7TSyuDUsa2Kk7iiszNinARmAdCGo6pakbU",
  "key11": "4AYe5DcKQaEVkhjfnv4hHiN5HxYJnfyfymCqVeLStnjxq4cjMhJNn8n8JCTvBvPbbreQaFcKR9rgnzcQ2wrSQCoW",
  "key12": "M88t3AJCsDYWmefX29t5N22Hyz1WikkHa9Gw5YtFdwNywg8C4i9QF1YELPgq4i396xrBAAwbiHFqVwitB58f3dz",
  "key13": "3R8op38Yidcm3CZSkooQ5APs43mD8WK1DfCu1qgZZoi2ezPBHsik5jMPUkg4Hq7NyHbx1fbMq2pxgEnvunmNo45h",
  "key14": "4UTV28VPJczFUsrFLwMfGQEJM7vbtQPWfbYo1cPdhgMYitb9sEzuLL3sFGhjsXo1SijvD4z6Htx3RjBNGFPGQsid",
  "key15": "GFNX6ceg7RQ1dJpcPw1SUj8GJ4hoyYrgPn8VxzA9P5SgZgfSoxYeCNdx9jqijibFGbBEDcBAjQmPuKSA6Tjs71Z",
  "key16": "2vqDbfnJnobELgYSdK1N8APfQmxLfhBKchxWhkeEnNxamhG8t5LFCo6Nvuf37V9GteiVCMgad92BS5VFQXpGhaqd",
  "key17": "3SCMFaxCESYmQn14uveppGLCsUqP5QrF35TQ1YErPfqfFzNJezfENfFdRZfjRNivzopjDggniDzs9d2Mexfcf9jV",
  "key18": "36YreDbakCNEXNAortXyjdPQkLdKDfEeZUFNQXFVis82Vhp3hqvVkaVHCWpEjsV8USM5UFuuKJUoQAW61BeSrKZ8",
  "key19": "4c7eXvRKUbsL3Lo5LoXpMfed4p1hMAL34urvKYznKidYszJ6qQXyLHPxmCsBaSUZ4u4HrKdCJ9qPwWoQkgyDHK6V",
  "key20": "2aKi5s8pkms4PBpRn7gPr5enj1dp7R5LbdauuVkzKgFMAiWdS2pZYHLjxUPeVqrac5WziVdsLWePPZzLvDYjejHH",
  "key21": "4RCXV7Webegu9TTKLH5tBzZJ8eBTQp2DaTcDQcdoUseeVk7yjLMD58AEk84KFmG3syejAzvHWpLFRkBDF5Wzm5MP",
  "key22": "2dxR8SjUneRQVdRwfsRDS9TfbDAXL9uh9ddnzyvQ9GmZV2Tss3LSC47j4xKS4Ktc9t22STe5Cv1G8Tk5t4KhGSxg",
  "key23": "5dqvzwiE8cqo57SZGN6BCHZXxTZigbkPVY2z6Yv58Fe9BksMdPLbdK5yQXYLJNBs5NgKYT4TpzT5VFxKVcUdQjuE",
  "key24": "59sSvQABTqzTCm8ucUZoE2TS9GfDHrFcVBZmQ4SfoxeshdE86ACFwLtbV5dhHPUcU4Wsjb27EPpZTinwXWjHsFVL",
  "key25": "2RYScd8tHTEbHYMMdXCgk9pwQ2vuQAmdsZCYNpXvAvtwp7c1X9xmz5NfQFNQQ5GbXJJsKPppr9HqAj3GgCfLheuB",
  "key26": "5ZW81RUPXXBR5imdmbpTc4maqLhGTp4VepYGdB3XgNbDgDCQSt5mm3ppT7GQQ78J227mwbx8tsFKP6NFSbQ1eJMF",
  "key27": "3iQi19aiwvnfpuKMw5RGzsBcFdu4zRL1asyis8ke4hGYj2Jv8HELv2M8ercBrVfU2BqDNHaiVKyp4xVzkYTt1qKf",
  "key28": "4ncnLAL8mggjnBgseaFmWMYmViUhneQZ4VoKoYJ3d8DireuzWqXDmhcBmssABjYPn3hDCWxNqmDU8wUhx9oL1754",
  "key29": "Bzqu8xvZnsvpq1ME3Erigd8u9utdTBWrSsxWNwKt1vD4mUZNCP2qLkjqLbY7yoin9HgsyG7pcRA9aJ5v8uf7RSZ",
  "key30": "2En8Wz9SvhXtYjVD2YQz5x9bX58h2gdDpVM8Eqp1J4iRyyuQ13KDHH5xX37bGW1phnqCoYrJMsasfE2WCFiFFzYw",
  "key31": "mrUuccVAnKxJx931FSZgTYF1TCeLaRJNWLJsmF1jWqybmsFWUoDZTtee66dh2DzSUFNKA5ppuN8tSJxxjQxZou7",
  "key32": "osoq98cSwHkCu1yb2LsH1uatHLkxmw9WrGHRZt7thtXxnFmRC2KnoFpyuRdLcaZKQYC4k1DsYvfj8dG3oMHTj8W",
  "key33": "5G4MuKtCwadPBdF4Qj5U5qYFX3SgFhVxxQu1nPYG7Lq4ahnE9iBV4Enpme93RiohMj5T8uo8eEacw9YZFfiFyYSr",
  "key34": "tXHvLoSUrFZutE3J1ELi7vZjADgVARGKZqgqU3cyrCEUhwz4mcLFN4pJwvdrh5z8GsfsMfJJRRRABCkJwVMxjCU",
  "key35": "22UDZEZsWGknFBUXX4E64PxcQBSzFA6MsZvdUfrQ6MQiGue8wQGomFdpXBGfs274sadCvojTpZWPsb84Hf4eTYHc",
  "key36": "GqPFBk7nDKzHBqmqZAj3owyiHCCxMxVf9HGE3U7uNmhJFZTkdHoFr7JnNPSKrJPU6zWAdsqRMm2NmFMdnv2rHJ8",
  "key37": "eqibesYGtiaZBHzxyKXpULJveLHWWDMC3uKEXKvxbJq2KrsDSkYWK3oGVtLCGsTHeMytA9fXCJ6g18u3QXCjkm3",
  "key38": "5eJ7bezpjBMVV9Kkymny16xXDM2Nw5TmDoSk5xRTtw2hFiD55AMTEw9AsrLRetorSytGjf36AP5tc4EzdfQQyavQ",
  "key39": "23yfYdJ4Wb86EhAoXwXhJX6MZfRWAHi1vSD1eZPTPJbvvFpQBeu8pyZUduNoDTroX6XL814DfdFgE68PDBgbq5mT",
  "key40": "f4ezqJ8FUgXuDZ2zdh3hPMUQhhNGGaTFCmRna5jt3Us4yDNxV4vgAkMbTXu1UKf3Nu7Bjwp5mZm2wTf2pocug2n",
  "key41": "57jycMkarFBJaCuJT61Qhx51rPz8GRAnHodMHD3L5WD7posMZjxJCk4MxZee4pq3196GhtjMHb1t75m5srhnigJr",
  "key42": "3Kr3ooSMfRFnJENVm5LZd5GeELGpArf12x3PrNRBRHBu2KQWtGwRVWAGVMN12nC2JjdMa5oW7GEdUi1n7ATdxQyT",
  "key43": "5CKdVuvFoea8E3PF5ZYgqpWg85ptfvDwMb3GpME8RfxRsCvy5vQuf6WJydga7PaSfT9xcaF66G3NDegfWWNcc1f"
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
