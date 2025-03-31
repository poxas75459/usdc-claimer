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
    "v77MtfNNxjW4TfxqW1f71wVqEBVQ2cTJidbai3GVWZjY4BfMi9outizGZ2BkQbEz5v1TehumEzDCRhAckDrNGS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44VPMFjHGzLtqiwtsfJkzhNjUQuS6Mq6sNBM9AuXrFQqnBHXsX7tmGnUhJtczYCnj3FkExVWRwZH23fMsRerMWps",
  "key1": "4duWqHsQpRNXVpsb9rvJFtrv2qSaKxEVBcUDyxFDL5pSM3mhQt1BRbJBYChQpBKHpjTGGzWQB1bjUU4sF5XSzr7x",
  "key2": "9K697rabxHXipFyLrKLrGDUQuSnDuVzjmsTrE91XJmL7MqZyhgNvYHWRZJwLpZtGgkRhbz1dj16yvfxUShbX6c6",
  "key3": "yqHkSjNNVFqaEbHCqBA6DM2xuxfPXdwm4yudhgi2seHV9kKGjArNMjFqnC7QszcvaeVUX4qZAwnHjEiRA8BVLvu",
  "key4": "5Kkd2CJLtBx6Qbno9HfXyJCEUFM38KZWcpd4yN1YAULzUMr88mSMYKdyZeCjeBGAp89kTjN7d25zJw1zb2mSRTH1",
  "key5": "61F4isXFHBNwfpqG6bBeHYpgBwpifSaCsoH2KZKTM3DnyfhFmLZWwnKad8VXrJCeV7pxwjH6kbfCyuY7N23nd7dF",
  "key6": "t22SbqGarpBvQNo4vtWcNbLGLb9C9a7rTPFgDsNeUdoVaLAqUpKgeoWpqLDZpLErm4KzWA6ZxGyjumNQZuthUXv",
  "key7": "39iqxY28dF5J7vQbBwq6X26VWFwzvLG5YiibR84GxeC3xEqWB8adm27UnEEPjb4YgaDECQR5gKAHvLjZK4KoEY4o",
  "key8": "4RWAuGKfHaAqn4k7ywMWtbzmAqAuxUupxZVVGXdMXpEECGxiSDaEW8UtVMG5j4Y7DLD7H9A7KKsofRgssgUqWCBb",
  "key9": "2qxyqTzy9nBgeMrXDJPMjqTjhPgvef4S9SB1TWdoRDqP7sjH5fp6BiKZQ6xY1TvoRdCnbAPSxg9j6a6p1i1tTcvE",
  "key10": "e7zfx2x34E47Qg41Rx91H5kjRzRim6iRuKbW5aWJ1ZSWAQ7prhVytr3PcCDHu9Qpj7WGS8BdkBhBhhRXseAHWhL",
  "key11": "4J8DpMHuiMfDU5xVqkj7WxmL4fFipuuoDAJwSxyUZzqQBkmmevc2QX6Wyy3cZgpb2oXB57peETFNc1upswm8HHjq",
  "key12": "65DKBZFX25kpp4RhABiAfpH6yNZjEobo4dqZ7hThzKVyBSyQbJ2sDdF1kY8VKFdA3qLG1ip1TkKf1uFYvbocL37K",
  "key13": "5YuDSjkkUWa8HWQ1rYvyFDRfyQiqjDzSAg8xFoCuqVzYqL6qLa5Q4p3qjSbiUR3scEgyzq9vbHyRDi1BsXAsAPiY",
  "key14": "3ehSy45tWL2GjT5L2Rbw6sTSaAvYGnAoYz8SW743q8JgMcLd1YP7uKn2JrW8WRss3B9jAToTamZqGoBAzDm6MKEY",
  "key15": "2YM32TLgt3bba5WcG4uPt3RwPB2iVkiz2Ad9pvs2hWw9BwwDG9VstWmhNdhSxr3mX8hZSwLqWAn2N7tuHy4q9gYN",
  "key16": "2Z5fU6moBT58E6j6pUBjaJgBXrGRfaKmnyvJAHXBYrwWLe136iUGUGAd2ePhAMcZq3o6L1orQk9MWa6QhRSZ2mUM",
  "key17": "djLkgN1EbYbH5zN1kUN3HLiqNjuHmEgEmkjrAQRiQxnNuP9oLjf1KZgrFWZjKW2ecAGSHPM6vPvf3fZuoRTks6j",
  "key18": "5bvKReVQcLwUBBjK8GzN8YY1REe2XRY6nFApU1nEd58X112HuxWBbBT8GkQR3JRHWPgzWjGFoEgUBwgM6pHr4xgn",
  "key19": "iWtpktUQzmHpGfNDYLm7Q7ksEcThnmcc1FuQ8k8rjVPggetMJLhQQyAbDHpkNjjHjk8C8g4Gpa7qPwmv8nj1Qs2",
  "key20": "44PidkWNFzGLby6RiQFpbawxQPy9yyhjy25rccQZmKabBfefcTquzKpUvfhW1MaFw1XGz43HWCTjEK6skCD7v7DX",
  "key21": "29UnTzLghWAgCK1FEs44hgYvyYNEsUQHW6Roj3zfavBwgb1pUtrB3dPhY7p47bfhokmWt85YY8isCxPsm9wwo7rh",
  "key22": "4RT7m7aTJ2kYKk3v5baa7MLdugZBDZxzqzwKwGLRWwuB93pHeBPCcNCB1hnUckYcrYCPPfBZTiCc6XdY68ndJBJy",
  "key23": "3yiTwd6FHUbFg16EHLKaUuYb2mseS139sWkGvTq8xiR5DHNUvGrWCMMqQ9ZzXWMwSkn5yBkTvK4VxSjhrrFi3LLT",
  "key24": "5gV9gEfNLFw23niZ8dPkcdyUFrafHQRy2nQgoV4N6jKXoWgNbiidX4s479ZbG12SRz7ztyaoLQ1CzLxdDgXGj4na",
  "key25": "9EVnQkQVL619go4xXXGtmxWfddTSSZv78wKKrSMZbCBtMdYnd3Rfpf5iteU3siUeophe38KnyH73cRhgVkATQGY",
  "key26": "2pDwXzz7tZAF7agcPkQCAjFD2mPcwp855Dgw8gnuV6FVUR3hxTveSZWEW9Ktn4X9mgjhd5sgoyGYSkQvYygCBsFa",
  "key27": "Fi7YC67MUrWCjUbUJEsFcTyiv32kQviL5eufHm4kn7CUf7RYKQfmuXDWiGQ645QAz7mXxVfPc4AE5CgVJicYzju",
  "key28": "5A4c84ExuRw5KacjJa15rT42bTJJKeZbey8aCqfky1rmsn687uKzZfYM3pppqYDJGE18GNKWmtmzFxJTnj54oEcU",
  "key29": "4YDwH7fq2cFCFEG8JEK7XBpDA5zSQLALFDGPVH5ZeeJRVeZu2AmQb1PQ8eQHgtorYj4iCB558jq7vxBsRRW82WGm",
  "key30": "GWeSsX3VMDbSXYd2XvAG7wCLh5m9UWcUd91B9dpbMPVaRaGr5bHYV7ZjzfWi1QiN3Mcw71ikPvCRiNmM3vGctuN",
  "key31": "4Jf6x4phZMuBnhe4JpEUPXdgRACrbumT6UqrANgxVLEfUPLtSt1xeBgLfoHk4iyhcvoGswQouMB67EphmsXtJ9EP",
  "key32": "39aVEHZuN8LEPyy7mkqiGvn1EpXKDY93hspdCN1a2EREmf9QNK2Ww8MKHnYDTiHNLGNs3WVzWgspeueeDesE52XA",
  "key33": "3UvVQ91ypvU2Lo124y8EW2aWyy3m4q2H5fpJLgRUwfVTpv6Mkp9Agau49TXPhYg8aYv37h6aZZZceWATBzUo4PKc",
  "key34": "2h1rx3bNNsrKz8qjoPrS73V6WDvTxctXJpEsdRtmPpADseUBAaLpiaH4nZeh9edG62kaExnQjjcHHPzfUawkiF7j",
  "key35": "4ucCAxSrGFj1tB1gJ5RSgrzEssTteaLYd4QWrY6ypeCc48jKRi9nwbGR42JwWPPwHtcB8u7KXc1neYFBKHwRTL2Y",
  "key36": "fVujpkyQMQafztdfKogMK92z3ncDdVduqYq9sLpAxvJ8cPZUpe6PbCX5K5yrxpwzM56CNrFrT7dMNLAKvNQp2Rb",
  "key37": "4ATVACSPQfGXeCwWvCGHWG34kqMUQYe3B5AmooPTNK7jn9mFRYGJTHkSutJfXKX1LzRsR4vUYDsgaLNHuasPNiiQ",
  "key38": "25HS5kxXxn3Q9nQrzcJQQRakEMmm7zfmRD7xi6RkVoUqX5NqdgPRSsBaUVF6yiu44qtiZgZ3xxYjkpjkJxsh8pEN",
  "key39": "iW2gM3bEV4aCkH7AMvZ2vxABAtP3HMyMHaMkAqK75NsUMiP4e8ZcN828y1uB9kPS7XD64Uxc79bGNkdM3NjMfiS",
  "key40": "jGfBdHY9U2hdqpHTjnpYhu6wzmHYBGNKkdjTnPmCwQChTrwfcmwTFCKRz3cgDKfySVHMcWg7ic6bJbhTh9CUmtT",
  "key41": "44koLzQhKH6NVkNAbU5q1Keb8JSKBh1EHckYkKueWe6X2VDfppFxoA6sNSVNh8tubb64GPXcWAmPEyYqNVzhUf1D",
  "key42": "yCyr9wjxCkYrTas8SQxsxTBvTmuugcJQ6bjFqq5DnJvFKHxsVs6GmpPaBh3hFfhsqQvNpzC9FiS75mLuwk93Kwq",
  "key43": "3EDRnRVcQjyxUFohCxnFU6HVKem2WcguJTxTpMvX6P3rziweNRfqvi59kEgTcmVRvj5ydGWSxvCEiyjVddGp3TGF",
  "key44": "5vudqVyuJaFZD2Zyjh3UxvtkLrQgeECoDBr88JTHDAoYtmxesTg42N4aFfzuXLhARNwuKjsJBVLHUcN84xTBURMo",
  "key45": "FcUerS1aMvttKsV6RSCdxaNWA2BcHvVerqE44qpBUc8RT9GYyXqFYmxcQd5392PTu2BNgLy1UsSqiHRPedEqspD",
  "key46": "2AF8nBomZS4hftqJ48NWUPB59ExrwduLcREXttPN4YqoTfVepamL9Dai3upRLdiubBNU5eaE9QqjTiayN3z556mG"
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
