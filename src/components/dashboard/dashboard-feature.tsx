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
    "4irDEpEGpsHcE6n9idX7BVc4nLigDV2Lt4H53bBU2JPpjSha3b8g87vyNcei6aV3PG2uD7wEh7XaRUP2iBN9irLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UQAN2pJnzTu7Augi6fjv7RDHjs49VULoLKvLkT76K3yXJHGy3RbqqufWezfxNowPoMaiNzjjjVMaaPJKnrUUDqm",
  "key1": "2EhUrk5A1GrpmpzzuvHh66o9YYMmCfroh97RHrKkSgdmd453LfTpPLojHaBf53e2fBpXR8H9iQVAfMQYcUkri65N",
  "key2": "45vLGXoeA8iW8Wn82G29574qnRbh79ckwDMMuR48RxksfR8xFVS4wgh2ZyRqHy1s4aV5ahAGZh8AZ24DuRAxJTiH",
  "key3": "4fP7QugzY4h8HTNGbpZogNXMYod3ZJ3hMGFqTpyvyCrgMewFoqA3wet3jcocfcSoN8oY1K5hofg9GjNmzYQELTki",
  "key4": "2FDsvCbttp8FrtDL8pV77XZWhpgKX5mmubGNqLrWRn3MJq8K9cirsjns1xr9qKBdLm5Cvw6juZMsfuoUkwcL5F6d",
  "key5": "2kF9CDohpDDjhsHVJbhoZaxXPPooUfmQBdTzt1jEhkmRYPnAHgNaf1ckFAXLhW9msRAn8rwEJZafBnRsUn8t3kiU",
  "key6": "2eEbxv2ryT5x1VRLjD6dEHPsxAQs4XJ3VgJzTUML9QRKvT2a5QWfzVUizbhWrj4axxNErjaUqMquC9QfL1iTqDyU",
  "key7": "3U3ZA9CardthVLsyc3oMhmZeWzGH2FpqAWkGvrmxhBPrKmmtoRBUnp55h2zo4wNjMYUJv9GXLdESDfPdgk5x62CG",
  "key8": "5wCFz6zjbaE89meQjKJp1dE4tgb7fD8u5Jk3bNCByxKTYnQZRKKEGeHVnePxW8hwtTtGPmwZKxBs1hT23tweR5ss",
  "key9": "5S72qj7UnNf8Qs2eosxrXP6URfDxLdqRidZ4VKkkmuXDqruVLhG8miiMUCxSUgeDkzYNJr1R1CkcjTazWQxDDDoJ",
  "key10": "3usFkW7UPyFbfdPwYmzgnW6E9N558HK3kYrTu27kALYGH5mpQyZP9qqK7YpC9KN6EFJWGSCYXsv6BE7nn4H3jXCZ",
  "key11": "5uMRgGbjTfHSMndTNtXs6Vep3vdmAZotTJZng5VWNWFN9odsmjyCn16dL6bGpfqYG9iDU6hbw7PtXNhX7BY7zjK5",
  "key12": "2ZqVxJkJ1SfbVUUqiA6mChUWYMisnAdqQZen3MCLjDYkPGxM4rADfMhqrk9NFm6Qgg4hKPZgFHQYt8TvF3mLMLbf",
  "key13": "5k1geQoByxqwgoQWDaNbZXzAtfHovkjCdgZTYUFbmy6bVeps5ZThpE8C135ahgZqXbapLWtpgauVntre8Ja1yn45",
  "key14": "TfSAG1bkzRPCRJbP4jBbzjjXm1AxqZbWrThDXMqRKqKuToJgg9L82Ah8isMytWDqDWZgAf9hXtsw5pVKUGk6P7P",
  "key15": "4jZwYpzPuAPCJfadX3VkMQzgWRcqL2oLqGMs6faE5oQBV8CgbC1FakH4tcfCwW3h8M3k2N7Jwxb3AfXHHrSCE2Vs",
  "key16": "3Ymd9crdNpMHqQcEcw8PDAgikoLc71aWMd4JsEJT2cHAG9coL923MUjpU8Goe9vmWCmsTkSF7bpFZS3zFNcTk83c",
  "key17": "4XM7AHe7fiajWCq7WDkCrLNuqHfUCeh7r5suqQZgeD127zyweYusQZb4XYo7S84ttSXkrwxgF5gvMTdeMkvEPVPs",
  "key18": "2Ckf3NecsBKszvt3PqRPdyLguyzYDdB5q7fxKd5odxWUbaqKK4L5jR1cL5vJfS1nDGr3swL17YDMy1ro4huzskBW",
  "key19": "cf3nghUgytgRDugjYsR5Jb1Lki2WjvG8JtFJQy6jqgXBdCGScuqjPRGuLPxyTQCtdRWtvwLPfaffMJYManGExKX",
  "key20": "tAtKHQjSR7SBAps9fMq2YFr6hbANV2s4AkGNDhTAue7DE7huWiNmAjjcJDqRTAHMTtz1hwDZMSD2DPvurGRcc1i",
  "key21": "4pt4s7XjJHrP3FSNK6fo5BWE9FjTp2boKMUrGxEgAYYvJx8wCFkx92kv6YixKzQwNzzWBvYrGAJdsdWzbjrCcLVo",
  "key22": "3wcPLJBcoAGW67vp6Dh5oPR5jBax8jAkD5xeJWETUU8enpLghCG7iadEZHZPmFkgKJjMYsSekquuh1uRcnVQi4be",
  "key23": "3yWm1kUiUJutpKdHDgDp7kBfznahLJtbejU6hogzvA3piWqKz3eehzRETkahbhdKbLhy6c2BdXoskbzs95jGHKUU",
  "key24": "21oqqbdDg3TdMNEdcWpZHWYpGsP6yStWzJrr5TTnpZtsAZ16toKR85GNyaGWenLq8CANis7jqH9QPP7afQ2i6hun",
  "key25": "3ZMEf7V9dqs9JbBSCZZrCvz1WEzfVanwRtn2KmoQFjWEwHUgVqKswnFRYsx6FceQ7CppnjoNey5cYw6jBUoDaaZz",
  "key26": "2bQRb8qyE1P5xEHt3YLD7sD9AXQVVsn4jzXMg92K4VSVXrmvhBgxnXLuZVo3WtzoKzNzfzJ1JdiG94eL2xFpyxnD",
  "key27": "4uZHM3ucPyC1JQxSt3hcNZx6xhNDZ9ooTi4ww5cEyEv2PircQmc5wJNDva4sMKKRqJ2hg4EARUYvGsiCEKidYbVS",
  "key28": "4EXqQZZMEvm9SXoCZsXh7fm9rvtZ2xpyvj6XUWZMCY8JqikKN3zD4ihAcv29yVqHynLyGUmWhKZLQxpkJ2q4ynMu",
  "key29": "563s6cJBVcgCmYxKfoRF3Dt6K9Q2EkadaUraKKJfEv8QZSFC1tPajANxBS2cXefMLciNL6SHEt7kLCyYxoVU8Ei8",
  "key30": "4GAvS5pzG7g66RFWdvZkW5cZoTZjjU1ux61ZJwm53ogGRTbt22RHzqrYCVaLQzSfv195e3xV41gEVoEJxdTtZxLE",
  "key31": "2zj9A9jtXT84YkWroJvwrqpU9NcFbKpiriL2GtGzCgw1scrPqkE3rJH3Y2VityjSfVVxRU2VV84XKZRUq6oV1MUj",
  "key32": "43GvFTGBpAXu4pKnWQx1VAbvALCiBunPuwnHuKw99Cuif3pZVdKZKsKEsqtJbBUAuT2Yrdi19fAGAMskF5JzdvMJ",
  "key33": "5y1RhxX5wjb9DVPAfjH9tZ6y9YmUKUoEZSf31KNY9z9MZc4ZhN8pjcwJ3NEhapm7kr6eDHGk1rspKdNC4nGfCwN5",
  "key34": "vAZV4gmESnwZc76MNKwWiNwbN3Ttr7BytWmWAD7B15W9mbezExg2ropSNnm9jmv4DYmqV5dZAhCKS4EYM9wLGcN",
  "key35": "4ZiGUe8N6ipbzXgnt5ypNX8NYU357SAdg3VxTHxbGVqz7jgze8dgorppveHKuSSdasxpWSD45LcMrV2oReLS8xCe",
  "key36": "4XZfpwcXETdNZYFJ4ZmqYXPZxK61aUAxwL77GFik7RpJSvsHs2Kt7gTo1NWtAqgf5tpMxyeC929a4CdUk2NH3n9V",
  "key37": "TFn2giBKk5bruFgzNpgcxhbSLkkVJXUYN3PeH8axLf4ziBuXUvcvZhPv9EoS74CyinY5euog8XETmZfueySgMRK",
  "key38": "3KzT27RH1KiemVDMZPVMZdDfNonQmDQRXTC6V1fhwinpEM54DyPP1a1yxV1oQEN6jPPeHn3T1SZShUqjW1qLRj1w",
  "key39": "ggJckZ9J7qtjKp62tADzr4NCwpi7KUCHrDd7tmUvaGuutuNYLtzSs1fWwAbPsvRtpYehQWXf6BSP4Y7EKijHrUe",
  "key40": "3EcxY6UsoLEoK4m7R8Uxgtemc2AzZtkQFRWh7QQ1WL6b2qhVqoBPgP1RdhFukhgpPWpDYtdVkUehVgQZtU8D1QcD",
  "key41": "4j1RXr35XZfGRw3wszWg6EMtWkUbsH8oMpL3f9uavwf2bcpY6dxHA22iBpTuUVHTaSC9viJi5Kn3nDFcFkeigRiN",
  "key42": "fVyBfk2odhAYCMBRxAE92waR3Sj6ZBNaiMM4b6XkprEZtvb2UcDAFc6M7r7xGmuZxxothm1BM1vU4n5DWhdr1kR",
  "key43": "UrcrWfvXgHWrGD3mhZjNSpXN8dqRFj2m2Ahq58AoZQSTojPYNzqR9t1QhhsZysWBKkpHbpi6fBYgHSF6UB8sCyF",
  "key44": "2JXyxE22dXFyKDxNRYLyDvUAqLgEC7s3dxbTYBmjJNMXfYLBiciz1XgagFC881C1H5fh5n3CLF7Up3kquGkULbJs",
  "key45": "3dTimhmpPmm2suFp65V9CVoxC2RxKgVmnEbtL46D9uBR7XYZz37AHDZBB6k3hfpHQ9TSZtAmQmRR8tZgw16vw7zT",
  "key46": "5BEGyFFMwSrGpFwc2RXgg81iwiB294isor2C3ERamM5fctdV6kEzJUEWafHogfiCVEU1YQ92Et7jvQBJNNB9G491",
  "key47": "61o5dTnTAFivRXeT7pMYE399RNKY8123FDtZUNTinMKsLmXSziZZqKxs8muq1nnDXVCygBx7esttHU7366iPjxpn",
  "key48": "46tdXWhBkWyPRGGSrpY5Tg234x8QnLcHMQNXfrFUnxPXNmaDbWj64erdxvtZiouWY42m1rDprteTTHBL9VyVfwGc"
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
