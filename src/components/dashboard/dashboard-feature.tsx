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
    "4WymCDfuHGNhor2KRehYetN57E7QmRXcZ8q8SYj94tLZ4CULtcGRuYVFytESnssGtSV8Gvsfn8VsWJS4q5mKENgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NUAA4oC58zyHqv6KsZJ2dwuFDXF6iQdwCpuTdSy4TXpYNb7m8gor6ftK4NyCeQidNBV43BeH7B5LR1LHqJZz2gJ",
  "key1": "62QndcNN22jL2JbryeDSymoaG8MKbJ5V9k4ypzFwPqTQAsN4F9J1d5N12juJqKoLnPEyACCLiSvHcsy5HmZH1Ksq",
  "key2": "5NwtBrDgDwrw3JF5FnMZHXVa6g8R6gMWFv8XrrMj5T17LZkccVTr2S9UTH3hi6J5HcBSzdcfXycEF932Cgzbw6MM",
  "key3": "5Xc3gfsdVs9weeUaoQViHAgMacfGHz1aDsLDbKxwx4ybCgAg2m64kCXdqWpGftkg4aojExVSnbhTY8ptCX8f9t1S",
  "key4": "48Rwi9NVikPLsSdfcnRaqZrJik39n7ZES5QF1L5c91occq9CgBLSurKiAnFHyPBd42xrCPXgYcVrKiSoCss7XRKH",
  "key5": "425xsfSRDUgvGApKN7hN7tojbPnDns5vk2Sxmw4HZ6pjDuEc33mfNRnLR1asxN69zcS1ztz6egsi4EeKKih3ndeE",
  "key6": "dcYXQkikjR4tHd9NSKVkiBfE5TF7m1risdjVnkfoVsKEXk6itoc7sFs3fe8nWCGqaWAn3y2EtTWKuPSFguyMn6R",
  "key7": "5yhRarZVSWVCnkB5a8PBRhZ3MzK8cdvK4VU2HoMB8RhxvKb5L3YaqHM8A1mJN5vFvCdZzkywegJnfnZn2tDA6tcN",
  "key8": "3QKujbKnJMBrfYvFCmE8jDy95P9hCqaRPSgttQ1GCvBQi6r58eHACuLVrJpheHUs74ACbRFgmEsNfXhsvwSKPpxN",
  "key9": "29rprvCoVMkuNGuH8yisufFpseR3g7wfvsXS3e5Z2jjcgDVVrCiYuakvdqqnTEQv3Hzp7p6WW6Fdey7RNEBsCL5z",
  "key10": "cgZtv7kY4J41WF9Uh5wwyzG2uGusq3P8SYRrhwJmkFmNoFRtU72dZmBfrNKBNU6uMnsqCcbqD3RzmuQQKR1S3A9",
  "key11": "353VvVtzmXYmaoQrCBqxk4zDmNtRPbSZngzpC8a59u5UsatSTyYosNEFE4L3CFehvQ5qcP1TDLqTFSGxhmzSA8bL",
  "key12": "8cV7kcZDWSSULApqi9DEPGh25nSPvtd3PtoRpJrABzUjpKMfQqXavJnptZhejPxmTD6sRyFoigt4ryY8oL6ffit",
  "key13": "2vMWxk2HsSBPNJH1JCXmuLQdqm73HqJ8bTf656VymSix7jSibwM8iwiJJEP5yS8Z5Cbh71R4cK1Y33JL7yoD3jp8",
  "key14": "r18NRNrMZCJN5oaYovw76haBfH6yYz3HfnbMzUJNqfuZAntBWAeF7iHTMcUirLRM7sUXNr5h4FfvKMZGtdBuZid",
  "key15": "3MwQioT8oKURXJnVzcC7at4YNbufQsChhfAqqvGLaogywnwkaztMFLbiDHgWTBY1xST3jWw1ENkUnRSHwxKPR7YT",
  "key16": "2ZTw5F8FKUoWPtmq5D1sgwjMkgmDVXEqjonrQQpycMTP6LYExLjTgHjcxKfmVgAKguLbyfdBYQNq5KaUA2Ep6K1C",
  "key17": "2zBsjaXPT89aDwVsg4pZKkNBJLZDo6oURbRFVdGCA136iif5aBrKvkRRTrjyZpGKKMGiZvfoPahHpQqUqyJRjX1B",
  "key18": "2CNp8svp3uY6XYd2hw5ewRRt2i2QxKVRbf5QUXk51nTnzapJtYDCqp1CnpC3yQWD8SfSVpRfniREisCtfTZfeQmw",
  "key19": "5D5wCiZVu75HU1VdQxSDFWgtHEYnkiKr8CRtGThak8VXHxNw9pKNt8uiLwvBPApxAjZt5BtRd5YqLGNH7Auqg98G",
  "key20": "4oa7K9yrHabxLbpyAdeoCv2cUuQfenLRKdHjZ5jmR9MPJYSacuSora4SpiHK2ZjMmVXrPGmhSbF1BWeF7Qz148RJ",
  "key21": "2ex8Lsx9B52N6mQRVDWdFUS7vogggzVaN8CqG2rTDYn62Ji373KC5htYCHRj78BUQqNPvRN7MBoHKT4AvgygE6FA",
  "key22": "43KUUfseMqbrRMwHjTpJrZG1hNt9Ldwg5vvrUjyHBeGb78QVCnVZb8wHXQ67NDDBFCkb9PLniX4FZJboq7AaLru2",
  "key23": "34ZPH8dsAFbZ4P3dJQqtfs374K7mUUhSi238EWPsRSSR7Tm28p23o462TNzuwq4x4c5cbuf9jJRxLd7k6pmWPnQL",
  "key24": "4hZvcC2gmfmRMoyLq33M9nYXk9bu2TqvEfS7HKdrmv31RNjmfXq6pAowGcCQ3CTL9JaWRNjRP7rxaScHrBoPvrMu",
  "key25": "2dANuBVageoJBHWgs1aPV6MNHWBrKi93NYJxit6RuoFRrTMzuPFrmDAYnTznGsx71hmTmmu2MUyPVeSHhChenPTM",
  "key26": "5Gd71numvVnn3ytBC6LTAuy4cgHBdQHWfKsoahCrPmS54aWWXQAnS2XENvFUXq14UgoVU8djJtD6rK8Qh3VMUesM",
  "key27": "4Ahtyb5hf6pT3ZkQFQc1FzD74XFd2G5c9et8dMJz4Yh7F7tVPicwAAmucUeKDSAPwcGWcwMercEnkd2U6AhHR5z4",
  "key28": "4hj4wTs1dVttv39o7Ja8qsHrJXkADs3Emh8cS6nPWrvf2J2T2VsAYWWYvofVdzpwn7qQ7MDn9zHkW8ATAAi5KF45",
  "key29": "frB2KCEZETZC6N543xwTBa45etgnyjvgYUba1uYrHYRdjU1t2E6LtfcD3saF4auF2bgzhZtbntNrkVYSCgEX141",
  "key30": "4EkYwPGwX2BrHMnf6NboiAhVWmAw2RHB26aVVMc67fmsGvEKxNnzDs9owwxmYfUij4hgbW3RSA4U4EYLiJVaaVpk",
  "key31": "3rAb8ajbWyabRRs7StWR3MSS9dmPAwR3hqPHp22M2NFrkEWZ4Me6bwpLKQChw1dtFHqA2ZswRSLSeUhU1mG9mknk",
  "key32": "4ckjCCoY8FBk7yYmhpeg6WojWCDQ9rQKzH4gCeGv5ujz38Kbt4mAweS1YhrZMa4X11z3eLJpAscGKspHv3N2VeTm",
  "key33": "3K9YL4LB51UHDU5ZUbMc6ZFESWSJrRG9fYtmsaPYNsQ79DNb4dzVuD1oQxbPT4wX7pnXouPvJM5tzg5aREdWUMea",
  "key34": "4BZdPDZ5q7ZK5hTnVzZZeGFGYyXHBh3uBgUXF6WUYbUSdY4tNGJ2dra9jpPvNiL1Jx81TmtUEJxy29mwXRuRZRjF",
  "key35": "ZU1pPkGZtY4UQCJSSjsHEDpaPe5YBoXEC8Eca8Fgiw3STihfhPQhCESZWevKbBPbphQNPzVXsTp2FWY6kBpbpHA",
  "key36": "4V1mcXonR519QjyB6JRtd6TD5u66moFbB29iarP8KLp8V5LFb8BYKrp2cy9o8XMFH7x5iULgjDxUKMGK51DMkd1L",
  "key37": "2MjmpPrNTpTDMMJMFzDeTe6NPawKstuaVDJwbdG83fKidvH8g4aTkYbMTTcQW96NkEZnXAfsgVHF4T2j9o7MFRrd",
  "key38": "21UNDP8TZbpc4wGWWEMiGgYx75CdcwW46bHFb9cPT8DBDvhmfxaQRsEJXuMtHoWvgGC9YVjEr4ugYSfq53NjbnR6"
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
