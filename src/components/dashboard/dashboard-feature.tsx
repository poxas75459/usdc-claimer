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
    "VmjhZMfpaXcBxBCyR4ouDbCqgQzQhr3xZdZiUCznNZuUoCFjRA3mGAiyFww4ChSmi7S4u9Ndya6uCcs1cyvfN5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cahY12Up3vXqs727Jw3gkjfyEskqbiuGbzLCbGM1oDtkENiTE9V4jxBNjWUH7WbodjVTggqwT6k4NK96pSP5H75",
  "key1": "2R6ZWaWDUzqPQJSZu2Bm87EnTtn72oanQaYsHLNzrft9KpViuVYKMUHh1mLRJ8Ag1mYnRm5DFzxY2oSpsDhWavZL",
  "key2": "c1bYwzcqjofkqRLmuDjnrJcMk8te6buhcWAcoEcVzTXUCyuM3mHaYVFEhQsdaTod4H8dr75VGouuYyz8EiwbNrs",
  "key3": "2ptvFjFT99pvLkBkwyDJ3N6paF4qG83e26ibvcetqJXs7bv5WaXRkD7p5tEdMqAcDnFG6MaBxXVWqW1LarSC2Bf7",
  "key4": "KVPRYxAzSUFSuRv6iLquCxSd9MDdDUDoRHFmn8ZPvzoUMKPz5rLSad1dwJmj53WZ6Dhv8pJvwLHGA922Wtntqqs",
  "key5": "2VXnxT8sJXzXsgDkx7YoiCu3hHnKhCLt2o1pQMFz3GrjHNjJHQ5PVffGysYHGdgNovd7o45B8sMq3nswZRZDXkhn",
  "key6": "4SyBgW7NZYo5i3ft3cfGm45stngezq9vd9iVNW62WFtbBEbdt3NXmpsTcR7YmNbit4anH1VLT4WPNyGs2hGY9xVn",
  "key7": "2SDiiinDM5RNcN3Tnum9JqezzZj5kL349iwtiTPey6rbgZAb2xKCEgYPdTrLCAuub1kszMVJaMMDhcK4U4raufEz",
  "key8": "2cjTkQG7NaohTqKQzgZzLTdqiY5tfxpfvokFPvZCJuQCx8xJY5ZWbdp4G7DQLqxnMqSdndgk7WyQdPakQHdBdSQb",
  "key9": "5p5hNPfDQASKwnB2x3DvFc8584k42wWW7SXH6hKFQVzNTR9WE2Amk1Uo7AwQKdS2BuZdCVmSCM26VhHoR5hRJvfU",
  "key10": "3CrTZYA9NM41UJgVQrCc3AyukREQL8EPckWJKi4M7cnkgJhdpKzA2bPJAfuXKEHwJa78o2Us44Xy8RonDSFQkwRM",
  "key11": "GLKLkSTopsuxAs1Hh2Dj5JQ5oVBJ8Qyr1NkCTneQZiBCj4EdD8V8dSno3cfHiRehpqyRMQbveVDMEb3bJzPr4o1",
  "key12": "37T3yx3DFhKMv35t1wYc7udHkGBLZxnJABCYZbqiaiFRKTuixXwBR1RZdfLERK87jMLEnHDvY3LVVtqeQFzALnKY",
  "key13": "inYq5qMvKg6P3rqzYZHbKZxBofkWHhHTfMcJXvV3tuSo3ZfetXLKpDHCQiugqFu8ywJsnRZgVPXYnQ9j8XFvg5U",
  "key14": "4Z43mhC3tuRfHL8QiTWHpBqzGNcTeCEESVk5n9S8a8BJENgvRUBJEfzzkxaQ4aTe3NGdjuiMV7w4AnSiN8nAta4j",
  "key15": "53zeEirXyvoUNjiLgxbPvjgUeTKALV7FpX9Nu95v1u72ho9tbSq4tvGgS7z3mnixeVdN4NZ4EZVhgojy1NFL3bbm",
  "key16": "47YZoyhWPMAKpxZM7dq9vsXu5mazBTEdS7gPMks2QRhdxae3hZLRXoRaqQJuq46jkBo7Db4M486ocR2LHctrVYkH",
  "key17": "6bGA3bNBZmBHd7bkLf8bQ4bAgvpEr84Vd9bNvtXfquP7JvnSt1BTfdZGAnfY2UieBGTMZ75YfU2RBuP6EVPQafw",
  "key18": "3hmVxpNesAK9GQ3Jqaq1UpN3kPGMarZZG7tdkq7TzyuU4RdwGYkQYnMvWRFaWz6ieNxRcZZqNBrVSz2ESicTASss",
  "key19": "2gWcU2cfhicyvRFzytCy3tPKxgrAFCJaBK1UJvdGVbLiMRvrYUZczg2qQRDoftpmHavBQJCit1R4gpcpQkbGTnyV",
  "key20": "5UBYR667VgcGqXjHYLBTWitvuyJ91HDXT3tAqKKP4agnXgNwzTonCMVrr3gjUD47VsPWVy1zZn5ZJBQdQ5Bjz3Zu",
  "key21": "kV8pqd7Kc98uACtvd77hte3CydrYsbW8WvwK3yAEc4AsxcYp5fcTmPvAkbGPd4uxNMiPjcY8qmTxUpB5119ZiP8",
  "key22": "4wbjimVtewhPW8m4sYRwNSWqC618u22Kc1dRxCdqipZyPbMd4u52vVsKRXgbpzZYpxTnvXsm4gAkZoy3ZSULqHka",
  "key23": "3u2M6XNQM5wW7s55jcDiUtbWy5stcfExStb2RYHV1ywm6kKH7CrbhtiJSe11mkLF7jw6wAy45UxfCsokfMaZMM6j",
  "key24": "tCzV5wtDXwEVPwczYBEpvAHcNw6aVzw9qcKC4DjLgriBjCaKaz9FgqikCiETS6r1qp5hGG5S9ztiSQsistejvwt",
  "key25": "2PBRXr8ha7FmySBJoDPG3po5KNAfvGHut1w1Eien9sgPkBuvQ2uWjNVYtupPzPurTdMm64xLaP41mgAGTXRuB7hc",
  "key26": "38jA7Cgetx9FDCTJiiYZTn5GeBNx6RKwsWQ9sLrzaTPj8zrQcXU9dhdjhbxSKoX7DAzczQHJ6YvvV4PYdf9q4SwX",
  "key27": "5XVUYAFyjNvaQ6Y5gTCGshrMV7LVFXWtiteo9pcMRjgDrXfpbCybdoq6MXxHd1gyuThJwb3HV55FkrDiGeMZoDmW",
  "key28": "2GF5bbhE2irFwVdG4Ekt2EwXqBfw9jPnuC6L6Va1eMsPVQGA6Nv7oJ5RzpovWJheTog5PniuMrPSMfpYXF8Svm3S",
  "key29": "5b8L65GStNW7Gkb1z1W3dp9xwBBaHmpA7dmuxtqxLLLNBfWz8MyzhNyKE99hMt43EkiiYLgXz2f1b9SxPJpG3Azv",
  "key30": "2qvLtnWfVDr4z7kDyF6PqU2gHBxehccidGPxei2MH66Pd8r28sahc4ehYWSUZMjPjwsGCmNTwBrGZn1no8ZoH4mQ",
  "key31": "3fxW45RkRXsFVfNnhTWGR2EVGNf1ixdnNMcf2eKa4j8DCp7U2QGDgffyBhpMWXB1CVAy6Ebxyqj2z25UzGnBVkPd",
  "key32": "2DJZfP8RzScDffhjVvw6CsPBFnRUTjS6x4oLB7VnNZSiCQy6Y276eivA6SNzYNpTEm52T7dW5aR4rRUy7UGdYPSA",
  "key33": "2X8N4kB9E1G5gyMin8UTg31QPuS3rZ6jDq9x5G28szwro51w6osynyXLwHP9E7YXL1ycxE92qupzoRnG5uLMoyHS",
  "key34": "48sBcuYAv89zG2u4rofj1H5BSqebYEnWdj4ifXmP9DvBweF5VBxscLmh44effc29jBCjFQss5VNJKDETVk5D2mVN",
  "key35": "3V6DTp8XQYuhM2Ph7fJFqJNLzxKxNxvhSB2CLkTgwYBGnBteLugwdgjH61NbgRdZYXgRTiKyCepXd7t4D9mGcg91",
  "key36": "3HTFAcXLTPbN2ijo2jLkXqURapbHkpXdvR973VkPhHWCksrp9ppMwJs8Yi9LFQfZe1wrRnvxBph6UFwubCEisESL",
  "key37": "5oPc8dCMN6Zg98oxzAy9cLFeMcgQAhxStDijsAgQsDUv5tmmXoSumTRqXmXsdCWkrm1ssG24dDorfJXh5JRWVL4x",
  "key38": "5u2H8xtJMddrRq6CWAyWc1GZ1XvuRUbQvdz1oCAAwuQgjqdDGzLCuLMKoKmwiV4fchHFQVS2impEyrdsF4LxZ1LB",
  "key39": "3fqmfeXK6URGZm9Bxhg1tgdpupUpMu1d8FiNU5rxf1ZNgnHSGu22sLfgcMUhYRrbDeS5bY6p8PBZahBtmSnwBUdv",
  "key40": "HF5qo2LLs33kGJnezKR3bCDD6CrFXRgipMNRuiDbfBWh1au3KnDSQsqUY4mCZ8HiVS4C379UToJp6pDqnrtDE5H",
  "key41": "3PLsM3ZdvifcrNmozirWwrrZoTrcWH4nXjeqGA2smJXEGCAEHimstXxynZL85DZekFYLUFS38StXVxfP27L4eGMN",
  "key42": "5QhfjaKwFTLrGj8otMdeEx3EEiGjZ8AY4XmXxF64yq8YRKSP6WBg8wZUsDGXkSgR4zP8D6YttFaSH9GAUsEiofVP",
  "key43": "3tJKQ3sWWiYVd3UmrtKpTTQvJYmY2D66sba6FLy2NyS8u9Efp6gJYj7GUrkvduXHJYZY178RTeHkZspzAMf6Lx4k",
  "key44": "273h2jdKmyVwMWqxhjWYcUZcmgZQZXwuvHHtY8SFpnYZRk24qKqDt8xf45Vb57VPyjHr2hnppuBQ5bZwU5Y5HDcs",
  "key45": "tHacKUWeMfMsea7cVoudUurr1VLehjMCzNrbpmvEainhYsCNQkfeA2HxGxM2t7FXVjPbbd5PBNWFXUNG3mPCy4y",
  "key46": "5atBJ8RFCE3NMUp6wAsD8uiSAegxcLnbL73nQDkK6ueRFSLF2aKR6fiJhyAfkaXHNhhifimSG8v4BvAaXYjddoBQ"
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
