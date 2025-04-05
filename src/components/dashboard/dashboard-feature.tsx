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
    "2nnzPyFmiZ5Ps5Hu7UhUq8MCRHYxguciEd6MCXgbDFwNyjYMWTgKHaLw2sNTMx3t2qN7Z4W2WqoJNsPwQFMHgz92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sna21sFR7byd7H9VTpkSrGrgatw2Yrk13BU2Y4HWQiDmnKpeUVQuoPk3KyCAqL7Gt4iVEWkeWJcfCoDUbSj8g6E",
  "key1": "4ZnpKmUSpjDxN5LoeCrTEiRF62HzpAhMCAM8wJT9ka8DyqRqQ4UDuMgSUd9YVGSMA7RvWA98EVTGMBDbUmuQhcwD",
  "key2": "Y3bvsJojWntMkTzaZ2bB1u6UPhEsXqNS1fi6XFURvREnvn5cv2biwR4GXfeLKwGMCSbcSUbSo9VamAbB1RsDHj9",
  "key3": "3NbindTwu8mTaNP6E7BAx4LybbGaUAhxqATMbZxPcT9Rh19DiPqH1Yb8CYCj1JZ4kEvCQqbhziVKpJZ1xHdU9Jk5",
  "key4": "5R21vQxDP8KNJEPsiewsm3q9EMYGkgzrarmwp3xjNYPAEzEwKGs8snrVCNheSuBouzNbWrUWnPXsZHDVEroQu2p",
  "key5": "2MkEviuHu2v3ErJXxWzALGpHhEmjJdPr2TkJh2CxvqobgM4ccszU8RUnF2sVJUapxXurjb5GjYMmwYYhKngKy8CF",
  "key6": "4WNJJPSSX9zb3LWDQnDDkArDEdBCtTje6u1YzChTUBXXy2TyB5iZctimyXqyuqmTXghqmzxxAfJZCJggzvcRnFBR",
  "key7": "5mTz9EUTU2PfKPzEuyWw5udGeHWjHLrkqUryXoSviQEaDH61dZkdFAbcbniDnTAeMLzrKYCR8dQAYQMJUyueUD5W",
  "key8": "5VH5zLQRbfwVPuc8hXB8LzsybAV26uagUaJAtgFXdAX6dmAVUu28Ee4vruSmKAhgPWCxQ8maXsgZyu8wAELvSqM5",
  "key9": "3Y7iDU3JXckQWzkzK48PvGEBRinYfe6Ztw4QHT9c75LgqVFFXnRSSP9gKUSrq6Ko4n8BjRHRXxHM4tuko3F9eYoA",
  "key10": "5z6twXJk5HFo6xJXaqKtW7yiJqNP22LfB3g2i1TiRRYgajdbGba9JXvg44xCPiswhwARbqiEBBqso3P3WCpVbYfH",
  "key11": "3VBGPek5b6ogTJ98wo5vuWWn5BmgjuarcMYh5d62V9FhbKKC8iUVq6HTPhcUeVUf9M6aKbfw8zCD34Ek9PKoiet9",
  "key12": "5K1byWdmcLbtmCX9DKtDNwezGok3UMkVMPGZqFbb6u72CfULJGWDr2CwRvW8mPsGFUyEje2HUhQSQoTwmKfQPPop",
  "key13": "3B3wN7aWubNoX8i7aEjYkbdHXkcSBxiuJoUvm9Zw4nvdpRmj2HTnyprP5bgt8FKX9AYyqGLtPiaFZt8E2eRvJvmY",
  "key14": "NV2zpFvBH7n12LoMxtTRPTWoRqHfA7RWaSEqd2DRHhfyGg7zhk86PBJzRbDFpRP9gkSuHknHb4myEfELA1MkWXv",
  "key15": "65FiPNPygmKjMtTNwL8Hw4M8PNRhKzDbk6nBV4LH2mstE1TQLisoxw5EXJsJQrWhnhNzFwLSNiu5Sd3hgzHKrUrt",
  "key16": "4ovHP9J4kJZ8ddoarTbETxPDzgxQ5K4xegd6Q7daPcu7siN8qt3pxhJiRJTCrGy36YdFHriLvh8ypA4zRDxokzdn",
  "key17": "YF4NbEcnDDscbeaHmExeWdfqLscZ5kZjA7GSNWRZ7NUBiHXeuXwU3uaYg48uRoN2LzPXNAbuHQCihUkETtoKDyp",
  "key18": "5jA8E1fGY2i5uCi4Skhucqy5mB2NWLDm7X8YDg2tvSp1JwBQ864DgYQjRhRy85pkJiwUYT3cVeDZWs3mYbx4GzEU",
  "key19": "4RhyPBjuFLhdhWYnnjtoKzR8Xn51bGxucDDK4UoL8NKCEYeTc6A9Vg3Fo86Gn6DhfzyU2n84X3XbEGoodPGdxrJM",
  "key20": "4CPP1pVHDy1gqTqUXAhaM8A2zaBZdTkPBaD99pQTibkdGREK8Pvko8Pfi1AXjt97htEDFtwLm6iV7uLFjcWF1amB",
  "key21": "5tVjkpd57jFzpAF8RSBLEptZ8sXP7szQ8SXC3szVpfywe4Bp11Kw8BckNqq87qofujnHgK3vQnnuKvkoJuB3YgXS",
  "key22": "5jhL6QDGxHRrFtMix4V1ppcYj3uYsVvhPwbQ7PvfDXCfLre4Y48cy2oscYpzcnJGRiCscLi31EjdtotVdZsBDNxc",
  "key23": "4RHbdTog5xnP13LKw47Q9pvDA3U68AiQdGdePaxeffwua24WVpUm8ADdqkkmdkdspzYHnjntoJFXbW8ELu3pkEmW",
  "key24": "532mAbmzAbQ8SyMyBcoE5zsLjLNX7B6CUpHLKHrGt55fjd9q2xHnueK9AW2951GS44McC5czqGPUnYRdLVyo4ntb",
  "key25": "t8dfBEZNRTmzd7afCZTFidCQxKfrbr6zv5awFxiBjavtCnZMyB7HuVUyzpoSdKt17bFGDSrcFN8PLJCoFcj6hNa",
  "key26": "3tQJZkjFTUNYgstaETXYSQSWqMefsMLosqUk19HtszYAMteXiiNAV4bcjiAv5YNKdFXk2EyZ24ivhLv7xycqgN7",
  "key27": "f5uJ4roDuC4HzNUmPvg9PLdWpqz7y3KtrWShiTJg3RbV9CHWxicNYEtg3TKU1Ju5Q7D8kUyGYeTLxCxDoo9L2mY",
  "key28": "3xWLXPq13hrx4z5YjKRF43oNm491tCgWsWgW6qFf8Ht8LSSMZFNuCXtw9N4YwJSDnujBLfzy4As1omjcwFWgzfCF",
  "key29": "5FMDrRRKu5LTLTftgVmKKH9fw95jjW2hXXAaUArbn7Rp34Jd4yMXXXCyAvd1ZmWpSvHLj5zrhXPjNNAwrEtHwKoJ",
  "key30": "4wvWxmppFSDogAhdLoYvQM3MxnRTtquzyzp6xn9YXQXqHDWZrrb8TXk1TofjAJk33wjpHUPHbUBTnEFytuyvRgP7",
  "key31": "5vb5oduZg4gqkNsaaRMkHWm3C9J5as4ZFna8okZCp5DUdMdPJpStLWdJ2GnszBzU6XHtMRjAP9RzWMLXLotYTq3S",
  "key32": "2t8oQ3ktqqHMjz9MXZvcYmb6N56v3cePbLcwrV4frHtutyPdWxL72VW3FD86c2wGXMaZoQpc1CndWRqKAeybJHWi",
  "key33": "3PgjZZUn7RmDz8e9nCY1HGwirL1Z9f5siG43H3Myvu1f79BU3DgG8TdGqEVnKb4mRwAsh6DBhLJ14QGgL2mAdtMd",
  "key34": "35d8sLER5CfDPDpSdVttBdGoDn3vZREPvRnKC4YmPdRGjN2qiMow5tVNUmE4XGfvGLvkHG3cAJN7Uc5fJ1sJc8Dq",
  "key35": "2vV1FFSW7FwkLALrGF2DfX1h9gXM2J9n6iNDGF2ZdCQ64uyDYcP39mSK77F9kSyshp83jYjQcxrcG8tBArkLWp8g",
  "key36": "4X2GztrbPDECMCoFqpJh7BDiEQ43PL6QPGo6dSauEYUEUokntwGLmkq2tNdndQo1S7vEXPEswrsny9aGfhRRhji6",
  "key37": "2GtvtZ5z8FK7r6igUAAHopmzAgebLuUKNq4mpgB8iRgDahbuPbppMEDiTPZZ1ht81LvSTXc3dxhPdGeWaPjfKUt2",
  "key38": "5DYecdq5CdJPSTJKAr9Z9NToffinqfEa8yEGwQ3hpHBeTdmLaZbXvS94UDEkP2NyiaD3ZHpURzgrZkEhPRA18FYw",
  "key39": "21QgbaFZSRN3ZE4F4HhQyG6u2Y4SUdwBnFwqjFtku2321CuC44KFAe6hZGxaKCrgu3upZ3zYW7PrNjwfAkWDbUNK",
  "key40": "eMPWBmoW8peYmHLSdSyD2ppUFvu9zays7MRfByJNNepG4TRLQD4MaEo7PAiQHrXTQSB7F6zZEttuqouPTUdu1kC",
  "key41": "3UYqcqT4knJW7LcqSFL2jvuK63GarTb9YELLLT6XY7CayGcrRCUSXAGioGjKMpHABGYvSAWDKj4vq9LZe13KtDHh",
  "key42": "672VZEfmyJeggi5oWfjjvhWayMZmu9d3hrUZurixPVrp5QHrXj1BprVsvCx1p4BLJ5A44teJMQ2t8UMRkvGCWwtm"
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
