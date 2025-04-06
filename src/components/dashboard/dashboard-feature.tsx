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
    "4UeNL61d483iBrpieALRi6bN3HoxnqgoHKfQg5vYevqZRTDusz689pRruASjHUxwhNbFT73sTeKhqcgVVNvg3Ri2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22SS83jBwp83KHaVcfKXwAo111WhM47viJy8cMnkru5H4Ni9vhmmHmCvMtsfTd3S4Y1gd1mx6k2DUM89j67k9Xbo",
  "key1": "44WEPgMZtKfbCTW5FkDQoxH5cpjqR49D3dK1X9uxWU63Lk9qJTtagHCPmJ5HBJooY64DXYVFqodFn8FjdMNArpMe",
  "key2": "3GEv6NgREHaiuaoWhaQvVJhDmenNwhGNm8ptMyVaMapQTesKmDiPva2vXSGUxDtPbBqCgwJTS8WSusyeLxFDKrL8",
  "key3": "3gY3z1cut4RuCsGrA2YfkofG6X9v7e8nsYAAuVS7dKWvfZ36figDXxWJs4a3RKYxAq9TvaVkZcnxbV48jsBBbH6w",
  "key4": "EGETVZ6uyoQ861DKqrppQkqnmvrZZocuPBhLPSiWTBxuVxQ84X7Uhnhb2HBFDANiidTe4Q4VnDAw5B7uADgWuJo",
  "key5": "3Fq28XM4NmwcUyR1jQWkmNDQNomDumsDEaBfycJyKfNAHgyZtF9KBX2iSF2rD6QovAQYisKFk5ovB8NVRZn5avwA",
  "key6": "GnDkEFemTkDas29odeHP7LzmXgL7RkWw8maKHZ4PUdiaUVWhryaDV9vDabAzvhZuRkHFytgTJg5hy53PsxnTQxV",
  "key7": "gBsc3pz6GzKhBXM39MU61tuC6k4fEbKxsVzE113JRts2WhmssHnUUqVWJVtHWY2BQkjkr6kiAo236Gg1qhKdBKE",
  "key8": "R7CyAJVeSX6LcbcSEAGSUJazkajqmdXWjaxrpLMpKVRcP724xBtGv59XDyWV7ZrBfHfes1g2uQd2HHmYQWwgARE",
  "key9": "5jFqGm7rBAeXZftEnZxCKDMoJfk8yb1XJ5Py5rEjec3H2nEHaB6o5shLbhX8EJ65h7aqxpUV4ycYyUCbgnKng9uV",
  "key10": "4uBiANBiSUocozM9Fdyyur43vcZ1E4KLEXKmKsMjqteqFv9T7hEdGGyL2L3sEdbgcH1yKwa8Qn9EqxvVmQ86vhfZ",
  "key11": "5CJ3APbzDkLbDq1WpnM2o19YDnWS2ZEzvUntyZs4ZS661Rhi1gKXpmGPa2RwserpPpDyBPWcr2XrWP7VxdgtmauJ",
  "key12": "28yhm99TgPZbwHqt8VHmyMLpRuGP1z6fadMPyXtLNSG55TMvG1dGyFR8daNPrL7xbwxLDU78dkCjc6CwieqiBqv4",
  "key13": "5SXEeXmfsKz7kfTGmFETz7UmqZmfD8RNqxxJkBQYSPPBDKMYKQiu8p8JPv344oAk9HQQzAq6EozXcgxo1vLypDMV",
  "key14": "323vND6QzsbmYnNDLVMsfPYMooMRoTnc8C3W8g6oqZeU6BN1e5dtbmydJczvP2CX7aKMUYUp6cR6hL7pToaB24fe",
  "key15": "49Th3mdmr5fVBjBZFZTSEJHhngbCuai1P5qCSdxLr3uA5J8AkHwBJbxDjuEJjDxsDNpS5tLGnpwocofocMN3bshB",
  "key16": "5sa1ApxTgKoA8vRYv4rB5GFfr7DfNV5XA1K9vAmd18UdbVxBh3V8T9W4dG28UXTojpL4FraQec21NXddcrf9LkKd",
  "key17": "2MXBC2Fm36KupeNyVddbmnLyc8nAMfKor2nDJidCqncqJgU8KfG2ZCxUtEtXHucYX2L5jNrozCLBW9Cpiw4JZWDv",
  "key18": "3MPVHVeaq5yDcHTtcHg5Hui3g4B11xSDF7tAhVkz7E4jacq4Sd1KNvHnsMKyvy1XeiXjTQkaqFeZKV5W23WFtriB",
  "key19": "28KMisp9bqhtRuxxwePKVUwweMD5PzmdXVpBc4B9kNbEgHrXi45B4cDuozfsFJb4DNvA8bo9BbquRbD8nQLtPxiU",
  "key20": "4fwcG23w39ZDcZ6NMMeHLbkD9wUDGemaikgueLyxw68LYYnkRuw5epZkP74xENa2u2QBWNpDEWP1NZpX6uBTPXp8",
  "key21": "5o4RFgRH1TuDRPBQGrSt3UkHUe8AZc8UhzG1eh1hCY8DUSK9y4PZibvqJ9THbkbfEuwLwerRST876VUZLNrXNutw",
  "key22": "5F4BmzpTxd768T1AK9P8NHpqM8R65YgCbDfku88GzpFjK3JzCRziJC1nUd6eQ47gvVEJDPJ91N51KiMjueA1Dfox",
  "key23": "tZizS56Wtw9tWazzVmS2w1Wwtpd8JwDd1DfKJuXo8KvgxJbwexbWN3b37Pv3GzYzAM2ZvBZv1oENAYYXaofvyvK",
  "key24": "4thYXGMbFbmEiafwMDNv9JqSp6iW6NQeWSVX2yGq9y85tXZMgZgmD1sUZsyCVBZQh9Gz6jkG5rDnb3QXTMydCXqm",
  "key25": "5rPjAndYqqsYr47iL8P16YNkN5ivMfFBsKJvJkwx48xHtf4DcAFyZpQYbocxeHdqaUheDyWkvDkXVfttVhq1bbEB",
  "key26": "38g3ckN8mXY1L7dotZC8PpGzthqFLsm4dd2wsWXG15QXGr3wqPRnTaKbKxxqvg5LKL4TawjGXVyVR7jypATNKtxh",
  "key27": "4K4ofHPG27WBgyKtDrz5qkRSqCYGubXvNxQUirxziNT2Nb7coULR3w5yiWm7zqXGEYLTacYJuansoDDL7mDk55bo",
  "key28": "2nquCo3JfPXbSjkoWxNZ9attpLnDXKVVj7EZF4ySTrosC9PBocSiaQD1Xe1uDMngwvGi1NX1p1dGR9UXvLRMy679",
  "key29": "4T5vqy8pVq6N3rqzcLuZDVf9hXyaGjUNz3oD3G3DpaseDph8JHiwLvZmR1HbGUxeiwFsmKH5g4HuDEfpmM6Tazx4",
  "key30": "2WvRjEEofU8VfcbBVm7R7m2dMDPvxJKRGECgMvjNkwCrSXqXkKdPHDEX98m3PzGr8bidSU6m933ckEhAqDWbYpxu",
  "key31": "3sjkQt2L5PQjTZDHex1YchQSFxkcS3Ux4G5VjxMMR9MdcSqboeM3MMtv66VUD7Wt7ox4oW1zZBRdk6TCDDdeb17H",
  "key32": "2o74eFwiQDrPqY6pjPUgXFpXUF7xfcaMCMbqmi7KMahrmCUCgRhvvnig7yWd9cXGxEDXUcVLep68A2u7nS2rVbF1",
  "key33": "2Q5FbUWd7YGFgQSJTeefK7sJFBnNJpm1ChDFSZGmnDoUWdy5pYPTfjPaspfBBdsu5uUjKexZxDV6pRw5akRrnUQx",
  "key34": "38vp7YXZS3qgWdZJP7HrqFCHnGjuB9obYZpVDyxik7jYffimncPuP2VZQXaTuxFfaALPGfBE7TwoMQ8BvCMu1sxS",
  "key35": "42nTDQkgrCeDuaXTM22AybxbLD2mYj9KejAeDX3iihsBR67nGsWJLFJtFsauUcixxeXpATTWdp1WDkLuVieH8ynz",
  "key36": "HuXi2TTLujXVe1z5VRHEFjnULsBukZRN6J8cNbmr3HdBoVesBJqvDW4bTYkXRvDVHbkY3J7EvrX1oNQ7ZMUMar3",
  "key37": "2fMrbF1mYyBx7YC6DsEELuwMs7ALX9hR3uByEGVHCyMaLkHofrnMRsuU7hYTc71FMuk5LdyUdxTyTRQvK5AFx7V8",
  "key38": "2tn1WjEdtcXD8hJLyY4xAxjHikjqW1p7epngj5JgWK2UzGUY9mAY2woaq3H9XPYy8rpncVH7Jx5c7tn6w8fgKjsR",
  "key39": "2MHdAxuPskg8RppZ8TXSshsD1LRa3fHMVQWmjahGw9rYrRsUUqxsrreeY8fm6uvmumGzdA7sm66FTvf4ZKmZNurA",
  "key40": "5oiPq3dJwXSMGFfT627aK9EE38fBrtb2QkFxnr82Q6aWKANxM6iv3mW2ycTSrB2GgYo9sD443rP6eevptsmcKAZW",
  "key41": "4j3gA7V3PzHtQY9SyekASNY1EhHszdrvJpuwvnarzmzHgiXUt7xqQHKDXWzAaXpMKfQbULdD7PFB42kHm2j7WGYn",
  "key42": "3m8TEvtApvK593CqCMvJCAC2Q13ndjrtpezWhB7iQ5gUpjeVAQecdwh4yLJDUTuBmh3L7ZiR7mndby3puAm3bhMC",
  "key43": "4NikDwwxngB1BXkGrcE7Xq7fnP2r4Qxawpj9MKvE6C31cNmrppRZ84JL5V2L7SZhjjDp31TsW9ftKhwnXmQfS3Lc",
  "key44": "3sNRn55T5c5xJYpSiNVfuoKfGACuuQp2QTHNwvgqMG35zKxPBd6q1GdL3dpzCvbd1HBggjs2MfmdA8AA78o8KBpU",
  "key45": "2xoMsoWnRHHwLFTwgeuv4aJrW2MfoFW4btsEBcmsSkd8YLAP8ws1kgvbn9D9tyGw8q1ARGLdx5dpbCX5KvHLXh4L",
  "key46": "35CzcHkNk8LAvfY3wLUU9dAVnsmixxz1vJtQiuHVak8GrNxgdpCwXs55wxAouompKikFogatsEW7M8Vj6x7b7QMt",
  "key47": "4gKtVPtdnkG3SeWGjYvv6gqa9peN7owX7WSEmWbd1TLQLPS8X415Z74py1HATAhkmScLtHNWovwJn1f7yXdCZG9Q",
  "key48": "4B4LgjxhDesith4dP15nACcJ9L8RndTnvespm99uSkFyr3pwhxTde34jBofVuQFLnojsE42JeX2PGquFtjHKaCbU",
  "key49": "CcbV4xNE2JQakVtqa8UEWb8Rks2Ko3J5kqfU2Bkg2NETZJWraJNWLrfutZBtMAnd8xrxfE4Dhs9M6fnnM5XtXSi"
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
