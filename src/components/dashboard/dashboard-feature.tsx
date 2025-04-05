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
    "4vynQe5guSAc5Zx97dH9nUwogrXFEvTLqQNtk2ENCRdrqAssWoqTKH23ADUL5DWNVqGDXDJY9iHMQz9tNFXYyVir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zBPp9WSQgFGGizE3PaboDAzohwnoZ7SsSp55TBa9U8zp9hTDE8dDdHeGJW6v8hwSo242tgLfDEnQYM26DaY2VjU",
  "key1": "38chwvWqfhrG8djALjzy2y3sjDkRva5FRTEeWbxJ3Yofmr2MCozNDczmcPAccSGc1TUiMtSYVWbb252JJQehbp7N",
  "key2": "2uE71oGfWv5iieDeVuazzed5BPHvng3WgaQfCRf3PBeoVHhnLBkA5YxiM5M2hSHEcm3ncb4QQdqMrg3JKjVJfn1t",
  "key3": "2fmjmoeHthegMCSUq4LMCPAdpTJSYaZkyfYCYNdrTatC1Z6Yh5fpVz1wHuFLZDJJNfnzthdaQNpAVTak29kBnugG",
  "key4": "3ZzjXzXirN2fQ6bUqUJUffWhPVUvCGSAuxvPHbe2pcj1XGX1eTx93aLQFq2Kk1VS721MpyDmS44Q67hMutQgJNCg",
  "key5": "3QWzdUc2Ey12dv32ftHHDtqBuH1EyBbrC4RMKe3rwU8KB2aFbvQ7Z4gGqcsV7bnDZxLtTThBpiJbDzymyY3qeZDF",
  "key6": "4jGG2bDMzvFWRLYdK4nKHEhZ1mQrVZvS4zA2wEPj4HX1yjM7btc7nh6CXsF3YGMwbWq6JFS1KLruMkCbEKpPPV1z",
  "key7": "2KNJc5um1dziwhADLbCwunsLxZ5aLVtEWmCZJe5PUiZWxYVEKYrhzF42XkcxdZNb3cvAPuNud7refbctBgPCwuRm",
  "key8": "5qos4Gjq3HSMeDg1QvfVGpsLqt7qLkBVe5n6eSyoNoH99DqRABVcBhmLEtgUJZxA5m8sMJfPu6kXLj5zqsJLHSvo",
  "key9": "thgDEdyqBpe3NqKtx4d5fd2vHhF3xFrDSgP4A4ZVd53QG9vAxdEbEb6RCR45ahASBF9ThW16VZnRPULZzY8qpSh",
  "key10": "4WTz7Rs3gEzEv9efziVukcmFFqVSgcxTcwN78ARYpTRvxRUjbUEbyyxxDu4sjbUEdzHdAB1e9GssLiS1Ar2SwpqT",
  "key11": "5fFbidoTXa2BrjEqkuF8ovrJ2vLqyHkbBnPZjNigFg65NMLGd2Nwx8G9n4hSzaBoBAfYxYcixjq1fUyGX4yJrM2z",
  "key12": "4Meh4c7U5j7GGvf3rimrjSKggpgcKMNfmoEVY8YZVRDdkYgLodipVqbpjMuDvHW1r4pA661GvHTv5R9QgUCiFWAC",
  "key13": "aQ9z2fYPLieDi9fJFtwT24UDcyksvZ4zJ19TFYaasL4GU5xueRiSJSwGToVLdmih4dLrNuMiKXSDbuUGNCAZCFe",
  "key14": "62yTxVYfVyfart7VtTBFzmUSwUiga5q4WBQoSY3efaMBastyWRLAyWDwiCZpPdZivcoaP3uRYSLFvSpdx2ZyzXNR",
  "key15": "2PkhcZu9WuXrYVGnAZkti9gyaTfsmSxtGSd2pErPoksTpm4FTSxMbYcAsJ8xtcdrn3EXg8JtDaTW1t3RNgZuFPez",
  "key16": "5PbvgeuMkxXEEyyhRn1HCfNTw1sWum2yBCmMoYxPZ1RaSfcHedpAi2eoWyuiHMnEhrvC68U1z6sbhmghkwozVKkY",
  "key17": "5gTMfQtG4JC5YHZFHzjuK6BfQacDcN6LMEWucEGj9suy8k5Kiac3xTPnURutsbzskawVUY1sEuZC8XtyuYPGUBUs",
  "key18": "SYMQhmraYk2aEypSoJEvwMgwsJn8CYPsNP7BkoxbDVozTdwsVGQ1EGFwTRSkwaNmqsU3nv7Dkmdd5RevzpAEiRc",
  "key19": "64FopL33caFp4zDhQoBpqMSFcahbZhpKCsE54X79wVoaLEsGLCsem9QQ5HEqfV7yyz1hZRiMwUJH9D675RY7Twpk",
  "key20": "P7a78VeSQ1YtEaJnhTkvsRNkQwVnrKS7fXgDWSqFhxT9gVxC3vkwhB9b35tKPdtym7J1PpGN7UgKFND4rDZ2HBa",
  "key21": "4v4J9fxC95gs4uSrg8Ty7rYy4D7pFYgYSdaT2trVH6FCDGXdJH7SkLM2E2jX6hjy8zp9npU7jUEeBZ3LJpcqQa89",
  "key22": "5Wf9NSWzS13uq2ngD1vmNMwAnqD8G5xN55mgZRT8xy8uBbWoHRAeHQbe78xrqcsFHHmEC1BuGQ2hDKW3psmYb7vF",
  "key23": "hYksYuHqvFabJiiTqmpauugaj8vxyR3Hao4SHtVtRqCvnSkT4au83eyfiqGUmJvu8UBB5AjTH5EVeTi6aeznQBZ",
  "key24": "5AvEQJ8V9H7STdpzEMAX9yiXTpFZch6HXmWhhc4zJJQNgNbFmVHAKAUUnyHphqZD9PdqFMWkJHYfY1ajaE1HDv8a",
  "key25": "4mLnzrV59AjwkscZXQKRf6u3Bjz4VRMneENaZe4o6dorW7vmuxd8tmiexnaCLoXYwFPHveLKETCjq5rmF8njDRcD",
  "key26": "5QuXgAJoVpxKySDE5gr6E2tLApxvLayXRh9U4kfjDVMFjWexKFkyLqPzL6T7M47T7nzQwRytZV7tuawsPhtgjXt1",
  "key27": "41BLjwo6ocPo2D1TZmMiWM7nto8yLn19n9CNVvH5iEh38HxKY3KTtgbbKHXHLRLGckgX8RtJE7bC69RZ8386jauw",
  "key28": "2cx2Mq2pAP2BVzc56uiN7JMQE6tAMhw2RTKyS2C7FZftHCNrUczqKQTBLv7Qzner6JHE8aLNx23t3U9EhVGW5dK6",
  "key29": "3hWyShhntxCt1icCsunD1TSVGkykDh2fxM4eDaKPf5mCxgqiov8vJRSuGC3zhgQ6rbSiyyHSJrMCqCNt3c426zXk",
  "key30": "3zCCrACSExGAs2TtLfRC3Lnxr5RMGVg1Y61TJNTwRQLw28fVfpRPGeNTJf2TJ3wsizdLczBuRo9PnUiRhPawHyXy",
  "key31": "34W5vs3uhZVSN5PwBUkePr7RZGLsgiLx3AwcYXhJxauHGD55Mny5dB2jYKZQ5AkDPa1Gr1AAyieiyJyqK1hyjgGM",
  "key32": "4bqVSCEWL7CJhiB1Ui5CmrVa4Ak6nH5z2a5VECUqVV2e9Mam6LpidNm29RXrFko2tHeBjsPkbDTuHXJiqhYYxJvk",
  "key33": "GW6KUsUQQMb8xzvPRQHo41c3PYNUPWQeGdJie5aGVWMagKA15wJJDH3scFw823cr91NTnq2KrLYiBNuyDTSrArb",
  "key34": "WnjAZkPLnKjPZzw6QapNdJ6FRQfjShwBnBnH8XY32twtbkvRqYbFcGiHv4wuEwupeQwhpVyZi1X1ZdcAU9Zsrb3",
  "key35": "2rPEZpw7xEzfEqRFy2dq5XH7MghSnntgPWGt5zhTRt5mJK5s6sxtTdYj8WLMvoyktf7SnXBJJCG1Y1owXcJEkk1c",
  "key36": "56aUYjRNJdp1kRG5T1FZjd7WEAp1nHuvq4c7BbVdPdDvNZqAmwveRaW95yWaxqGEvTACT9fX6oob4KShwpkU4gdF",
  "key37": "5w29ZwD2dcYdJ7rEeccJo67RsudVxAAvnK1QgwWqNcBQ5tVmv57UZssX5mYzVqppN8LTKj2MqTqN8Mzz4Y5EPb2r",
  "key38": "5XJVXQonHAAcpqppVGYL5FXV9u4tevXWuqdjMZB6SvBzEo7baecGc3yGzjnUt5j7J9Cx1rv7twPmGu61WnahRqd3",
  "key39": "4inktcmcHUzypSh3d3dT2XhQR3RDE8To1tbhMtL1WLENZ6ofWcBdRc6CXc2HBGDQSKoq3Q3gQAumFBVFrrkRvZ2L",
  "key40": "5ZxWLWqfCosTxjzmiyLeSGCLpQbk9RQUVL4LsMHQMuXWPggx4F2NivdCTsJGyvKdPNPGmMQ2mMpAiaTddmfhN3od",
  "key41": "Ef8hstbmNMUs87KACvCTKJo9hjzzQ3PCVBA5eGzvrr694tPKfSgzhnhxRjduoMb3FPWbb7TESGXaocd2DH5hhAZ",
  "key42": "2rG3cAN1GtFpbjEZrdBJTS1YptLm3NHEwpx8ztgav8PhvVQGyjWcjCDBDwBhBAUhR5PqjDd1UY4kHbbbPgKcFSxc",
  "key43": "3AEfrfqSKExitu6Bp8re4yHWu6YNwDeUSm7dUuGKwv3Ns645pbKVuBDp3J5W2ZzGH4jcMu3yKoRraZ9irBKpjWbA",
  "key44": "4Zji8F4sDWvvdBrGM75f52i6sVMB9SJXR8EjC8ZwNBxB6js9DP8T6XHWs6PCxdAXiTEbHhPjyuvB5rpdJk4C4L6U",
  "key45": "661UJUvazeTo26Dd3FDRGFnGeU3cUnyYcqiqn22ftfEZF7smy4jwXrsnpNhX9gFavh9TN1bMgR3FUiimSE55RijF",
  "key46": "2xgEAiEXdQuaCyU2RydHh9PWPr1jqzYqvxKNCkPY5Fi5BM6q4W2c5YNekGCAKbRMiC4LmW8Qxipc1KTaxTtyESKe",
  "key47": "46HtQxc5dprgkbdRR5nRncWzUq8CrVLHemfHgesnukXhusVQU1EpS2JX654P3m6hdntGJpWhv198hUDJ6wmaaiYZ",
  "key48": "5kB4EZXjoWQX7memZM7j2fez7hC8jPCFYAQ5y4eTzEBCUSeWnzMH5nTCdd8HkkRb6UZMWh7ow7uMfQtgsN9jpDR7",
  "key49": "EUwTz6Ya3wZv5KF55pVamPW6Fa1h2vtJJQzsbxbdcadr1ajYZzYBfpxNEs9h4LMjcRCmmL1Wys7XQoaoZ8hpSA1"
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
