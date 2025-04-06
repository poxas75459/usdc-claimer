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
    "TfRDHurET4hviUxvw3r3aD3g2aUqgZxKi3tac5hFd53gBD6mHRQi3chup61hxKVnDeLvyn9pxVGxWrvDU31oarD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jjPfo4uzr15S9Tg4Uyro9tknJ86DLHdJoyq8cz7FbcuM5yFtgZ7BCSdqSrBiJmrTTBqowXMV2KXLpNuQJpPKDz5",
  "key1": "3cyhVhDusQ7d9yKNPvp7dth1H3fFSAQbNZGZkweed4hgxEGY2Qe92CgREfsPr3eKsJ4z4xbFYrXigFonAZZ8cPHj",
  "key2": "2ng5doSDA3NGS4nVQydzmPL68RserXD8fBsPxbZLwgYkwtYwdW2t4cuAH1RWKVJtqDWEEJdEAP8BHp6ojXoKhV2n",
  "key3": "4FLje3pniW3iw4Don5Pr6G1nvo6TJtwkgYBMwDkAw9DoW3bcEgHbXqqeyRkQ467wKDTaMmTw35dSVWzd7THoNkE8",
  "key4": "ctHXjRqqWY7PGUP2yVZNwMzii9wpRUEV6hWN8AdF4UWhGDDCCExPWPGFpatbEUuEzsD2EwRcJRqDdEC4heJW1yX",
  "key5": "3q5sBAPcv4zuqhGuUYUPcZV6Gfxf9kA2yp7gz5WM9qzx9pDgveGgymCXWYmSxT7CiJ71RAY2NvnNrfu7K2oUjjay",
  "key6": "9zwVrztA8AoE8yvZfRGK8VwEma1SMpGPvjJRGZrJPvtEfg86KgN2nSRmNBSPXn69yhBTYsWRSh1fhjzZQHANxj3",
  "key7": "4EaiDFSH7wg9R6WsUVrzgRXF3fK43TxA6RTe4ZViwYyWASxe4U3zTpP6xDG1S8V92A5vjvRJfRL7h4aG9Mnd7LqX",
  "key8": "Tn4W8QYrfBRnQXLTg1qzXTsN8PtusQpcur7gk7BhpJuS3TxXQpbtrekUFExNxYygyG3efRtNBrq97G92idBUMgB",
  "key9": "3YrHghdPx4oV94LKCAtk2pbh3Rf1TJGCELMbaKqfaKawXfSdQenJCya8uH7ASKg721KHHvJePJDLrozyHEv24Kwy",
  "key10": "5wvsMo9gvjMET3R8YvQtxvmkzTaP1xpm3nwzdjUBMadyFFtdoiDsDoEFhJ8AhCXnfgWNSZqhzuMjqUqRCjFFsfVZ",
  "key11": "47882vPqnB5A6dzdiBfxhezWzKcR5arK3v4YtrJ9FaHULPckSJhhSe28xqchxsr4x3ZoqaQdkGXbZAN8xbBstdws",
  "key12": "Fg9jXoo7YRTe4C81EpwvF9RuWTKVPrivzpqxQdPL8aCbTkyngi6QGeCWDTed1AUQ8d63nfUyvqjwYZw4e8ofF3B",
  "key13": "mm6NQWxTREHiFHDW9ZWpfuXYLpBHwSzMFSPsbSReicsHMatviKsc1x6WQw2zH2Ktv5tMEqy2FggfHgGssrQ2Cxf",
  "key14": "4jDcvigc3o2agUk9xXBqjx1aVRLmtBxATJMzCNBbB9Ba8fbKgETYCDFC5nWLPnQwHCohsF3o8W5wVCHFgvaCgqbL",
  "key15": "4QuQgwY1vxj2ziYwtv7hxgpgFBjB55KS2rhe6sTYpopLmiapyXo1knsze88nuT7NN3qLkDyk7A8JjZcmnCxdJ2Us",
  "key16": "3gVWFEj2W9hpDVkmGLynuM1jP2oK1xaaegZ4Myf2VqxJS3kmkt3VwRw1Fgf4XWkRyGzFm63tpmHouvGta5esPNxv",
  "key17": "3wnbiH2E8isyhYwKPdJz3auQDVqZrR858wzJCMPjCu94Jrd7A7qB4Bw2MRVftKcLXDSDknFdzcwPXUSyrM3wT285",
  "key18": "5UXJJc593CLKJyuknkji5A6AJX9he1FoKr9NtmzycotvkRTmjmoZbe9NwEQDaoxpUSYoonVCcJNyaXEHr83rSbTN",
  "key19": "3mzFKot2SX1ZR4cidt5MVMUTtFafwoWWgj9Xoqwsete5bjRTqVmaB5XVccdmppUGAdXs5Mcsi8CMqvLTNB4zXZDd",
  "key20": "5cHZRUjxfpvAbu1bN5zwQBwhibSFtx7vNNuacSZXSz5Eky86awK3P5rp8AzhPDoX9qxtpzygFxoYLgoj871q8hGN",
  "key21": "22rgbK1dmAU8xPhWbamMmBq4yGGCsHhCSipSwbycjaYzCouXuFYtHD6FRU3SqDKBvzbYSYid1DmUMYTnRFzgWss7",
  "key22": "LXjtP3QjWZgg7q7X54TFL7qhCAqNGQawKCxwwsofmfPaF7V5DgMrczMn4dMi69eTfYycpmaZRL5Jd9yKMKJfwZq",
  "key23": "5LNnsAewWmz7D3ESkY4W5Vr5KvSBCqES56GfHism5UfkRpNVDpscqmZoSGq85PSGTaCoZuP59ik9QaXYGcgqFFgy",
  "key24": "5mCynsVLMJocjjK7Py3DFDFgdNZGpzVTL9D75xrShHvrLqn1EA5Tc2bggdYaTbj8o5Z9jPGwUgMQDKYj1wJ3Kaww",
  "key25": "4LTtD4SQ9CTuYaak7HVis5h58Kws3nRCFs45TTJPtd8XL2GhsjXz41TsPxKyeZdU6Yb2iNi7D4ZNHNMZrUpTPGSS",
  "key26": "3RveAXESYkeryG2MTcPvWBfDNfzfFRVTe2Zo14VjhhRViHNirzyYw45ntKZXsNoFmKEMUiXoNBbZdX52oiYetUBb",
  "key27": "5ygbuuZpyxMyU9NyGQM4Qrk5Q3YMBX6nCZ7EoEink7MweWC88TrGAo9iWcrNfYvAFCVL1UtS1zdNwYyLbiSvxdQ2",
  "key28": "8JEG91nokgh5eaKahuWmvEd9ZrNZ4k1d4ZxkQF9ot3MDuZMQ46Pm2AKn2QrQ9jPWbs9sSxY4tZq4JroN4nbuA8g",
  "key29": "WT1JNjhhBxUtNmG1Suip3H1fQuY4JZjHYczHwKk445Sd97HWCfueLPuFxm81PwiddbB9aBWR7nMUJNoirgcWm9v",
  "key30": "2cC5mjZATTq71NupkfkDrBNnvuf7S7Vgqo82TgdYGr4L5vuiYVFbFgZHDD7C7pKtxvKZ6vFVUoBbzCyYoBFg1gpf",
  "key31": "4JWY4RQN3PHjANmYwi26kjGbWb8ooyoSKB13uWFXWcvDjqr2RfrENujofURneukrnKqRwA48ri5DES4QUfHb27XD",
  "key32": "3E8dypRu5RWQRvbB6hCDqYMEmkAbhmT6a9hhZQZSGCkGsECZ8777WEDYYiZTaJFG8yUsNGWwN82gLkaRuKrfBvhJ",
  "key33": "4ezCt3HcJpMBuhZfqpxaVQPNqm8nygpZoDzPH3hjTJKjaxKTVkT4wNYJJcqmSRwMrRWiVe8VYqNnYfYaGVEPVNC1",
  "key34": "4Ni23h3z2hd7xsD3mVd7UcJ4KGeondrHzRNDCKv5VbLJtMn13WMtQK1Y7eG66QtEiazekNew2AP7paXnMy8SELKU",
  "key35": "2p29F2sZ8d2WDxcGeYacan2Fp3N9vo69P5HbXxzY97u1LWoQSZ6VBhUiSa5xiuERLB733UwRkkvjpv4NHU3WTMMC",
  "key36": "29PLAzTjBFNeo49z7abNUrf25rGFpHNQB5F3XySyYgFioWo15whAehbvdejBXQchyiaNq5hkRyNkSPnPNZ6xZg1s",
  "key37": "5CBipgio23JVuzmV3hWh3oPCKqs3FssQYxhwDGawvBaUPmXp9KxK3gR5AC5fvRzQq3TrhE3t9UotuWA9nmLJePuJ",
  "key38": "28jXrQDjU2WD2JUSBnMTPGCjcoUVEgGnco8cF5yhGWteNJSk1UHAwJuJeFr3gqiZKV7UvZtrRXpMKq8p5pGGKWV6",
  "key39": "33vHL9vBWxC6gfrg8U6g2aMFf5VPDwsNGjbq1W4mbCtvSHZHrfscAbrqWubVnCSZ3WvuaQDf4cx4zgmcrAbKgnst",
  "key40": "3rzJqf17GDh6xLkhbF9UUjx8UZui1NKwWUYKtQxG81nTdhQH7jfgPBPQqKVG6BUotU7iNpXFFp77Ndsdrdx3KYRS",
  "key41": "22sUhKjFdpqg5CtiWSNGdQseWvf2D93uHvoZSGAFZKPw3d3tcAWL33qRSBYwDQTCxe1ekufAg65i8sGttxsgAX9r",
  "key42": "63TPAzShtbmcNoDSP7pwTtmEE6MiTU3tGp5DSwnV5ivAFmY24t6huYxGG69eQ6shdLQ5o7dyUMW3KwShExkpYi64",
  "key43": "4R61WSbfTsHSTPKXbQ1n2BkXbn8k3axHuL76zF2bvGLYZnki859EMbGZ87pT7hteFTnoL5KQsZzGCjRNLXJt5w3U",
  "key44": "6jSz8QsksAQCE6Nmq5Utqr59UTrFLPaYvKRyVVABdFYfwkWR9YqdeCkpSiprofqGVWdjsUVGxznFcEsb3sPkRH3"
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
