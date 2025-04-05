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
    "6XCRDqskPYaPjHaYg2sYmKEqG4n67SqxqnmXRCFSRijPv9tijsPksAKWxsCiWp8hWbKzEL6xJwWcUJ6P6cUVC5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vNzNVER6CVkNW6W8w1W768K7uTkm6pSSP8bFhkZqsUxn7so3QWggyHDb8YVozPiVdyohVUj7Fs6AGUb7ehX22U8",
  "key1": "4QJfooRvFRWpEskiRMsjFzU4rooYiF3ZH5q3JJBBo1sGiTCi57Y4YNYyoUJqgGmXdwoddYrVtJhcHerBCGHtZ3yg",
  "key2": "562EqJMBxYMjHzFCiFLjb29aPdzoyesXmfiw9xdWF5xaYivTUY7yt78NrKW9i53DucWoPUUKkeDpr9hqKSwMXcKv",
  "key3": "5pqdMTpFj1C6yMzHSWojA7GVbeRsrjUHF5YSBc5k8S523A1czr4vjX6sfUv3pAWuNrnZ3dJALtw8cHL6zKcS6c5F",
  "key4": "3HmAgDKYi5jckcWZ547V7Rmf5rAWVLiXrW5ziz4ZXYqcwqALFsTF2NC2vyDxacxAgD1KhzbWQi8BQBQcvW9sosWQ",
  "key5": "5MTiGXzr96d3ALDYsALeHDa4cxhYkugtmbFHh9nCrHCH4G95nTjdi7jFgmw9HsomJZ7dptLi4uJRY6xLn2Jn3THM",
  "key6": "59sgoGVyRo4VreY4tqFYytpAV9pjNyfa9GrFU2BY6QqdyfHFx54VVWBcfMV46xuGyR6pd1T1gQuRG2f8pisec8zM",
  "key7": "58rT6BwihuMsTCM8Ng172Gia6Ldm17JDGpvCB6N13JVDcTbnHZUS3EvqJssyPAxRds5xX3hPHCF98eRejQk9Liwi",
  "key8": "3rtHq3sUHrJk7gmLmuYYhwHrSqW1jUtfTLMepaNZLCJ1NXSNJ8o9rXosWTAHiVmpawufkKU5dFvzaJqMENFtvgYr",
  "key9": "24WSdZZRgNWmfrdr6GVpppM49o5nVnYGfhjk9gCUxfcX2bZm5tcizPH9SwtnuuSE4ua9s5np61vCi7ggaHjujuoy",
  "key10": "34b9hqPprQA41svr4vRsKgEYDsGqPGxfjvWRB4aqz9LMdL3pqrwhnvrzc541R1DqEhN9cizqVh1auuEc8LpkEhqN",
  "key11": "5jHVPCeDz8hX1MhUShAtd9hzPfyHTt2oGaaKf38sBMVf2uMUvSQHLbmJyCKBqGBro3weti32MLv63J7aTZLBPRcV",
  "key12": "5qybVT9xyLmqA8mgGBcF1Vqgevbx1ij3vXmU8Pmudrptw9e9S1337YauMqMJjTmt4TJfQQRzKhJ1FcfEmbh7xfMx",
  "key13": "523oRYaqxBoVvh9vguwKQm9CZSSx29H7qMYcWmfEcB9jtR6mwqtKN4WvrfZKsB9gmnLFnimXSzAXr7Qrnxm2TxkA",
  "key14": "4E3i4Zeu3BntNwrZqni97joNMKL7r9ybxzBd8eQcqv6BfaYFDMxX2fPHW1FgL4Hmo4E7kzJbPA9x4hBPpUotmwWf",
  "key15": "21YhjxGMHrzgYxipzegFviMnexcJnyx4n6u6VshGaJph73dNjnXiG5ojKHD8BpYx96m4iVgLjfM5wyfMhhW4F42u",
  "key16": "4s5ddcYLQciAs6xJARXfTCX9KMDPbgwMy6z8UrJM6xwN3nkPg9hhnDFFphV9H2GGwqMpdR5kPpKDMWQTT1cs7Krh",
  "key17": "2NxAHerRcjyDRCHpYFQKDdWnxSZYYew65skWt8zeT7ib2mTPkYoZSdS2EJ5BkRZgMVWZL9xVG5a8BZjhpox561eg",
  "key18": "pLHuJ8cQ2EPmwvW1i1z6qh38L3fmByb8WxSb98BQEeAkRDVmKjG5nL6X9Sgwmq3auxjnQ5RdR3gSHAE9FWE3Tgc",
  "key19": "52uVbVuNQSrBSSChQF1YpUPk3HSxQt6m3vKuAnSoMwkzZ45WHiC3eQVSkM8RRj2R1N5yPvMJFHjzHwrirrSFhF5o",
  "key20": "2VKAUyuzpLj2ip17kH4K41QaBA8BVERGCDmhan9KxrMBqj5fVLrDbuhd8WCQTUijS1J5ENZW5QzeTWKgbnEAnn68",
  "key21": "jqMDDjVCpggmcTqGqiBGtL67QBMZxnrTkz2EtKegLfJkCbe61gEHJB1ctr3y23M9qJ8TxXpXhpz6Ht37LC5BYpX",
  "key22": "2T4eif1b7h1CtgUt32uzRdekHWbEv9rwf3D1ywFn5ScVMLpofVVhWQskPnWZ7RdbLHV7ecwj8rMYzYExmj4WUhse",
  "key23": "2WBKUvMS3wnWqiFK7Ye9EAzXByJjUVM1hy1GwJA1kWoP5jDULk1Le1Mdu2vGVuLm5iZGvVxSwfZYRPZwuJeCmKPN",
  "key24": "366dCWZoPJiHrRAJuoFYfxn33szPcjDzT6sqQ8oAFLo2CShyYAFHUitjFBLNrt6czr5f7s3DcueyaXTggxXVy2mv",
  "key25": "5tiK9DEKRp4k2avAFh3DYwoAVWHdJbxaRpf3kZdHMKEC98EiGamdyTqQbB3DdAu1TNn8ge2rNuTBKj196jUnRiy9",
  "key26": "3LobYJM3iZ5REsCsokU1QeX4yNqwoSfzmsJVpXhwEsUaFJmSBb1fLkrDTEMJjwYrTDzW26wVhTyuKen3RMwyqfK7",
  "key27": "3yLPEQxCPL6ZuN3w4vRgnJS8J6VpsTcRu3c94PaT9cPXtEPrtuHK46fLaa44JgQHseyWoBmMGaASHsAYncLBSQy6",
  "key28": "5C9HWXPwmmnvDbEr2pyggWWeFSVVYoTBuL8sopG9sMTrz5mxtftFqsvJxwcqJnYJNusNrG878WwEYrpvkpoLTJYn",
  "key29": "2MNTesJwNA1uda1h54ACSgxkt3P41XXVNA637JsKvcLBk6PeGTdYEBXAKrGkpCnvzUXcepDVKds3GhyN7PWP8Nio",
  "key30": "tnj45PXfiYoRCpB9VvA8rgy9BFVSMrnauMXc2sTaPH4L4kesPyyWBGPipSVAaKzUYQyh9gvnmf3ExaaQkD82Q7n",
  "key31": "4znMD7DnkzgDo5xHMwKQUHiRM34g3VvwVBfCFzJbBN2mTyVpCDMLfcdimyb6tHwtdeBRnFPWoqGHXPP1VykZxwNL",
  "key32": "5jnLpSSA19cL3xjvdbXLupa2LqyaUXEuJLSnFwbMVEFB7qnFE7dzzriGPGHL8GULycAEx6W5UJ5VYL9d3SJ8d1Uw",
  "key33": "4ZEpeHkPVo3e9Z8UkXxphBrnLTuYPb7Nhvjj1kSWxhDVtw8Ygasuz4XhPTn4SbCWGBWyZDPp61ZDCNFYkZJ1nsBP",
  "key34": "2PwWUu1pumbr81g9TzCrP9FfL3Su4dSQBwWV97JTTEy4HVXgFayVrAhLPPwZDWdB2t4bxJqMUDanamKm5U8JdfQa",
  "key35": "3bVg7McBHyBQQpt8tdWt3NsCtwofapqBmDtwf2XcBBPb1ATJKyVXCs4qFtLVoKpEvuEChVCakRQdWZwgpBEZTVWh",
  "key36": "pVVxadiXJPaqoH7s21jPP2howrrAkydRsvEomVGBtf7C4TwwmVLWFVw4FGJj8aD73pNUo1QjYZQ3ci3ExF5fDEm",
  "key37": "3fiQBrhyjRK4HYp1ZCkKSgKb3yoShsDN98T4NFDCJNTRE5iKdDiiw7zFCBEFsEagUkdAdTkZ2jph5p9h7MVdRUMW",
  "key38": "3ywgBMJ9CVeQXgmDSEft9SdQNgbYwXZpfV8LRyjFbJ1RwbYSRdFGCbSju7auBCqvER6oA3CSLDkwwPSDepd4PJJy",
  "key39": "53YZzAp11bEh4SXrwZuVnyvFTPPcesowbRcZ4GJ25rubxicEHTXaCbva2DFV6q4Exdre5y2RoJWgfSPA6p4z8sT6",
  "key40": "4JUGgymYgk42Hj7bo2eiEPgW4UH2xAzKEVgJwDwJ8UZkKdWT224ovR9iZewBLgLCp4DcLAGR2VePadrdBZbNeswA",
  "key41": "2bWRBRXeuF6X4Tv8nJe2MTgc7tYYC4WLU3VYEPL3ZD6Sqxz4qNqYUfg6mbadB8ujmuA6XaZCzUox17N8P2BRgFdR",
  "key42": "66q7DDmBEwGAEPSrKxcFRnvpzAAK5qWxKXXLTQsCtaHSs2ZCh7JJRzk3GnE7Ki99WuGPcW2NdPh95yPYJsLBrvSc"
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
