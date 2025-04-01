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
    "2jETBAPeUTGYoRAfdfv5NWAGUVvf5Tv2mZAS3ET3tTHkN3jTSMKerJCRqNnMQCZNy6SGoGF67ej2E8DdiBeA13UY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "364ZRmaZHJZLS8SzNKWmUUR3ff6RBYCYoxy7Qbo5ASAb7iFxLWcSwcdmsZ7CzYfcQFwNZYybaYYYSpVSn3V4rJCT",
  "key1": "28nP3QDcAn3MfrTM8ux65dLC1Ve2DS7cXtwFxBBHpqyyHGtZNU15HYnRhVuwJMjcc6KaQTpe92tvU7WxXXL6sZ8N",
  "key2": "2ncMd1y3sKvmRwsSkrPpYUzv6YZpZ5HxKghzhXmdXX7tZMVmx5mnZFgD8QVNCWJcdLk2GmTP888BP8hw5xJAt4Kw",
  "key3": "ETzk7RicgeLVVue5otRTrxUNwAfhBRmMvuHM4U6ahBB7FXHq77M14mhnqY8sCq4P87TtaG24tv5FZfWj24JPUXx",
  "key4": "5x8uBuMT2qkWrYGrie7kEv1ZszCgNBXh9wNw1iCRKCfYQpjuAPEn2DLXaS5nnBToWJE7vvy4URk3r27VLor1aeLY",
  "key5": "25JrV1afjtE4R85qS4T31tVwjEgVG13cTaZ43Q6vTcoSsGqnRyQNSnbbqDRtGLEiHay9W96NCi6dPZvkFuNSLEKT",
  "key6": "3JC8o9sPbu99b2mbBwNKaQbdYgDZqMKGmZbEqd6ozTayH3MMjxrxnCNQxePMpVwrFHtTUCcR3oNCZqQfHK72uSA9",
  "key7": "3TkoZEX9YvK2P1cXdGVVRN5VTUjJx8L7s5c6BvFMixqE2xTNeihjMW4ZfaKsNNdbdZ5vncEvYiDtUAjWWvGWXxR4",
  "key8": "28Zrm858VAMcabex1w3w2gPu24LLFSPTfK1DDqKDA8xBJzC2umtfH8iDuheiYbyQxyVpyHkyzfUd4id98Pgxfj2X",
  "key9": "RoNR3bMwao89pi3muhR5fqf56juSHsJVbnumDTUhY6yLVkek4dsQoirS687QzPhap3qNJjJmoh6v24jiK1FRzFW",
  "key10": "yWMD5EJYmQxpcpRyV1N7xX42RSx55De82msWkBHGRmqLrUeW7JkWVXhu6HfXGkV5dzFGHCtbaJwioxcFaFkAqaY",
  "key11": "B7LBBL5BcAFTUohwETQhvu4wjmGHbbJ7JRCohQ9uFPZutjNK7sNj2Tj9UiwfEggbh5caEGBY4zrXkV1GcyBWRRS",
  "key12": "5quursQndhnwp4m9GqQR67gpCaSh8mFJQVLcwKkUu9eZsWMvfo1WGH7VF8d4Mdrvfz1yoTSkkytReZwguLbBszcV",
  "key13": "w1Yzv9WZTYQUPQkUqi7NxTnptWtnWJ8vLy58PRvHACYQR3xRwhBexAJvFRxyVzk5U4UWcKMfXswVUUq68enbvQD",
  "key14": "vRbmu9bMhQHPnqrnfRHSgoLnSJfjyY9yeNMfknwnp8z7T2fM5jqDxtCrZ8gwJft7dje7yei5mNaoUvN5jZXH25Z",
  "key15": "9FBjgAN84qPC7NJ5uMnBS7zBtaaCCsN47AmfS68MvV4onQESu7m4uUNQr9ipNgebAfgPqo45MKPuT7r7XitQtXb",
  "key16": "121hLPQqmZ9nUT3F7M4gRQFPwqn3kh3EukJVXW83bKAxSFvBzY7f18Qwk2JHQ4miL2EJgTR3AxMxJyBepsnkwQ3H",
  "key17": "3Hb2zBGW1j9e2uQj86KCQShHCvp46RpCm7BbGdB6BjZAvi4xmUhpwzNvWBKVE976dgz4fLF1YJEzqc7Firh5c92Z",
  "key18": "2taAvw4ESVyknEsDtU8hFvzaYQXHipdfAJxjUvv4H3nSmA2wLFMKNn9GVK7JbQAGhxCNpX3CqT7Gq7ZyrJAxW9fH",
  "key19": "4TJkdAdUqqwgJdByrYJKxBkrYpAo7mKCwz3P8QcFxmiQ4XLLdzeYyt3hb8dZCBVkupkkqGUFco2sS2i9NvNphAwh",
  "key20": "3J5puBqFjKW3UVviGXautyZYmk6tvbEeAdu6BEAPgTFAmqTQurzddzFLRCR1kxfj8aZTXi2R4e6zUkZdnQJb32RP",
  "key21": "6ZGFL2z355Q6eYRqyfFeGatSBWQSLoUoXxDKVDrJjJx1wsZWmZTxCZu4wVD69mWJXGJyjzyNyHeRpqzhYJxtPqQ",
  "key22": "ugLKG2MsvoR8Kq1oo94YYAUTwhBDozV3tiNn6HrYUCy1nEcEiZ1U1UDw2HSmCkkNoMi5mUM3gvcM9GPh2fMHEA5",
  "key23": "4okgptZMXNNBQb4vfoqzzP1gQr1Zq87H9TMCr3uHud4FwQG634HTp3Jg2hDBKSmpKkvbZkNYL1b6xxUo8vw2Mpbi",
  "key24": "2ZxDrK8TEUuSFc175XbKi5YYaAnsVbTBMbZzoiQtaBXZfJq9PpCCxnqc3gbRPb9f9g1SBeJE3JYZWhLHRCJ9g1sS",
  "key25": "3VuYVU6a8mcMBogv2mjMsSGruqFAAQjM19M6SskCtryFjgkWYwQXjZKP4zJPrXuxPiUQyW3YLj4dDNw4P1qxy1RW",
  "key26": "A58n6ACogMJp162D91noauj3Jth5Z5S9qhbdMJZXQJyhgym1n8vLfwcBFacWdeqJ2gmEx5V3SmWxP9L84No95ej",
  "key27": "2yunZqJZ7mXM5ojLwdZbTbHGsBhFb9DzKxLRxfFzSXMFMxGTKdDwWdCTj84HQ5C7kjbkWagBUvniM65baaBwpgeu",
  "key28": "48TavEYJTRTc55BC57RmtM2vGQwNZLs68Ho23cUim6Bie5a2zcY2EFsWEPbAryzYr9vgK1h1FfveXM2g5EpHBYm5",
  "key29": "43SVfnzwMkP3qLXaDzNxBVgJSZah5zf6GFwXzWVJEnQwcxfHfgpiaXN9RnyXxutMBRBmmJXcj4K2EWPybThbJmyb",
  "key30": "5UptY4Ti4xeET83hUG7aM4NXARMKNcy6ej6vtYBphgJg6scY5KRdibB8ign1tDmZuiWBhdVJD7e38GBUEBpXSyNf",
  "key31": "56LbEjzu7mPtww7izJc2k8pta7yZE3PptqKUdutqb49EjoADUrHSN3NzHRdfsv9iFLCQ8ThPBoHovSRQ9vHihVxi",
  "key32": "3Nnq8je62jQzw98yhnFjixEqS73br28Uf9nB8KcgHyyxt1Tnp7RAQGX6nFQB237ntE2rzjpgGq4hhxaQvJMGcHMX",
  "key33": "4hQdEnZA79drh68jK9xcJxMwrZzuLDY44Xtx7UdwmrmZbbxNmtw7TkDfSjoDzhjZREyxp55DcHhDLNq11EJ6k6m9",
  "key34": "2feXiHkz81BZLgi7zTi53Mjr2nL1yKU5vGGKjHL7LJetUvJvyDPtwEB33vqZock8FumnuLz16HnLYRAjMUTTnK2F",
  "key35": "FHZu5f49fv2GPQMFfNvyLonZAQ51KU8Je2z5o7UhFrW24siRPxTPiu1DDDmZP53QYkA3Vdbm2PU9ZrbvzYMYEv6",
  "key36": "3j2JtYYvs5a3922GPo5PCGCprudhH51Y3UvAi2719E9Ddjv8LctGMzt7AiZPb9P1dpqMqSeS4LNCE5CXtTUdYrjY",
  "key37": "Zi5atA9GncevPG1hHBBf2dUq5VczJrV8zqWRXiQeFvPvVkDeYsRmaU112cgBUBRDDWFUmRgTVNnnN9gnm8bC4xM",
  "key38": "3TbGNpZruMajjTaqcD4WeeMRf8d8U9XU1T3KEVv2vRgMyDWdvQHUcm2ivZopbd5cpU5zTSSt2QxJEp8E3PNoWpBh",
  "key39": "4VSynvwPFzcYNMLQAHpx4u7ohWCo3EUoAUzZigWz5K6cSnXdzxyC7MovD6k2Nhk9CnkZUFLSUZ1YjwJvmpCsb2eP",
  "key40": "2zMCsQAebLdVkbbFECKF8Msw1fAS2zE67F6EipSYSz4nWVeeccoyGTMc85q3X91JwXSP3ctK9hByfKg4smXAcNXV",
  "key41": "AE8vfCD8qsXLvJhTxBt8i51sxrBmzsPPNGqVVBEePdUY2DuqNzaBk8bY3juKakLRW98gNuzv5Qax7Z7SxE4Zfvh",
  "key42": "rjRzBpDCpPwQSku9RMBTGw5y7jpYnqsSp4rZbBuBbcZ66twG9HCRwWkukTwwjoJkwG4sCjESz4dGNJ9RfPwyBdV",
  "key43": "oQL4JU5BvH47Manrkw9mAaoKEsprjiprMH4z2GUGAX9ZVe5HhTk1UY2DLJZhQp6JU1raAB9sRUwxQzD3KTPpsME",
  "key44": "4s5xmoGaKFLuegAVYsbSKCwspTSji9PeqKuW6GD4Dr2TxEkDKLwyFwigv6bT8XCmxrx7Bpw6Ze6quKkRpEZTV9a7",
  "key45": "3Znm2EB5q17vCt55W4Lp8MUpJxgwsP78YoDNoxszkaymfwUsTPHA7ZxdQX9eYGwLyXib9gcSiVhiQnRVeXoyHQhg",
  "key46": "3dadzMdDjb7YyNqiuJdR7CE96MgmFNmyAg2AMoetMG7vyaoVHVxvpp2yELRMW3KYFEBnKKFp2dbtPvC8GQV3LALK"
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
