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
    "3Ri1BejnUzohRj7dE3tHm3gKve5ZRAyoV9enJ92dGXB55FZuU1BaaA9x8zTuMgLmLS6hA8PwEd7V1gSi1JmGJVyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54yvmh9kpxaPBqWfRHP3a6zpnqBsr7u3tTFALL3w58vTT9K1WcLhArbG9YThesvBEvkbwFw3xvMmFyLeW524S8ZB",
  "key1": "45pELfHaMhcvbmLemSRn9c3KseALMzpR6D5pcbEaFoK5HV6TowYXbh8G488y3DapamPGyyGucUMJHwFG3i39JAfj",
  "key2": "4eJQMTD8zkvRjED7tL6qhyy8muTP6m784zdPBCnUZwftJk3AVeXy5BgsUcNCgkt8bHWsjKfJPVLqxBsNvbtziJqy",
  "key3": "9y598RwcJLNFyXwJ3aP5K5pEbkSWZutzAhQsY7yiHmZxSZoP9N2M38oPuvP869bcputzH9C2vyJhLvGmiGGmZrd",
  "key4": "4pjGeLBWQHvVysmFhR3atDPq9pG5GrFCKCdds6BACx6fWxaadsQhWZXSgiWRw6z7HZsyrrMCQGkcewbK1DFErZQs",
  "key5": "65fcghBzXXihqg6bqcHBwBged3wF598K4RVujEvj2R7dRysVupFpvFNyEeJfBSRzJLc4N1EFmN9qFEtVzEqnYExw",
  "key6": "HymMF3H4ABQHsmNoqaTKnmFK1uDHPgM9K12co8Q1zf86yFzwQmQxpU1uuPuFxXa3PbbSkLAhSnQpppdMZeREwtN",
  "key7": "2qeCue4aMGL9Tc1RBm5YLMSkJhzAcrxwrZENMD9LFUkbcMXf3E8o8kDBg3ESiXs67RCK3SsRxvoHhUSvQbW4uWeB",
  "key8": "joSDuF21zScYQiBH6MmCcCjhDFU2xmRiGCHYQJbpotJ8TzFayxQX3yXyysAubTdTJuzTTo6hrXmToA4mjt26oMS",
  "key9": "5b71nDqk4LFR1DoAdH5ULu2Km6b7dJzPnty3Pka5X3H1W3z64CRtqu3p4TYQahk8UZWkMRAWS1hwzkZU4DwWhvme",
  "key10": "2VW1aSzhCxR8KEiQiyad7PmX4436nuagz4Ez4P1BKyq3yrJ3CfCo7c9jJpaRaqdjKzX6TLU1niT139zVJZ8phh1z",
  "key11": "5NatKys2Nwb8CKQcZx5423ukUZYDnujcFFzAftm569o9PWXBFWzMwQ5YchgCbpwaHu95Q3qc7TPUzqLAoiCzCxKY",
  "key12": "5nMB4hSPi86WBVSGejHyWTFpEJcVDTW7EK1a42bQG1QeUt6FggMPDSnwSFCC7sZMXPPG91K2GNcHyxF7pk8i9DPG",
  "key13": "WPTn5rSUNbAzPN2WyBnjPbLxburGStLoRiT52MmoqQdn5BMFQKQgteK9zbRHLrmWitRP8FRJ2xyWRhaEcamcgfL",
  "key14": "2Zr8eLvgNkvQGr3FdQFSCa4EgiSHwmyhBPCi5Tez1z172LmBhijCLo4ns5kWhwsjhdcwcxEUgtzttLJNxhBwZxR4",
  "key15": "YzFFdgWWy8eZgejfkRncJjesB7CvzyESowQTPhFaCQQGzntTtZ1Ny1E7UkddHVs9gQk8KChp3cg8ttcfBj1zKSy",
  "key16": "4odh8AcwNBPF3gVeUM9CkJxeCQ5Z33tSfPr4pgbVDwVhG1bj2nSMVBwR8vZJ1oM2tLAnsR4M9wUCfz1iDf8VYmy2",
  "key17": "2VRBvjbq6eVeNYSSFCArUSUspCQjwPMTSAuWc7NAj8JJ4unRZychwm46Te7DmniXCNCfp7yjtkmnn14wNYywLFA2",
  "key18": "4wALva5JBF33kH4gky8Q7t6m4guVhmZATez3xZy5HEFYxdKx8i7hBvS9HHHAAY25T9myDWoZJiAkignfytLEtAjT",
  "key19": "64zqVJ4PLCHxQFY9LpS3riUiQKJxTgjJjtGQrZrtDXqeUVH1i37VL4jkMLxY4L8ApUWjgpEHv2yGpXzS7cCVprT5",
  "key20": "5UsKbyT4SFfRsZHg8a93rS1vqSQ1G6P8WVqx3uKzx3DD32Woy44M3NiaK2iDsy2J4KLKMqk7qyi22qTnYdd25YSr",
  "key21": "55ApiUfTdC81mmRYeaXEm4eQVUxvSrSVJ4efgRfLXE8PfL3GGm1ifMNqLpn1tWs8P7SH8JjL9LAvhMXm2dKSK6WJ",
  "key22": "64CuSqkxvkXQadMkdxks9ZfizGXyAa3XH65xhvEg4Wauzh2K9uyvc3WygxsKTvAogzbb4agqdFQ9TMSAYFDAXGMY",
  "key23": "2cUTCSdqcUeuzJSYtPQtcZ5MYW81UnzAYvX4ahSyEbJ4gBGWdfJ5fxFzHMZPLEVthDNN9Pv1fKBwmffit2BBGGHN",
  "key24": "3yWHQQMNHdYi6siguAw17gHWyU6HAmfBtYcDSkMWeHjRjJ9aMtupShk6FfZQaTwdf4pLCcE8V3AWz4iGubv3AA4M",
  "key25": "36ReT81MTsMebF2tjCVD6g1B9pPMMechwLnPiDYjg2ZrPsnBMWyRwBR2mLDtVc1z4YnAqwNN2rmnX4F1qJjBDUsn",
  "key26": "4ykSNMpNGkfYiCokPgrzUfwywKuECB4NnvY25Z9Ltw5UjMBTfRpb8si8kCCBszC3xj2qJ8nBSvL8bepb2kC3HK69",
  "key27": "WzHafGQW94eBDBn5TKMn2rMG32q1i4xNQKCb6cv2ds3nC7hdPonfTtuqVKMhhw3moiLPnTLWDsB5Rj8XvwAB9dt",
  "key28": "4RAK8roDNRCa4PzhRV7kUV3TFEGz2X43VDneDuoARK3DTqBSsmsB2Ub45WEja8g88LbgmfGw4noJ3y589wEvi4xu",
  "key29": "3zCCQA5RjVqBrBumzLbk2HKNL46pa5tnhDJ5FU98mXuQBRkvKYNzQf5GL41AoRQfYp5tfVHWxaxgtxdG6WMiAaj7",
  "key30": "3xzmd1DvND1GyrMEJHaGA1jYCabiuZvVzRvGw1Equr98qcUFz6JzzKxRVKuEfwdcMHNV148M1CyGmxFomorA2CHS",
  "key31": "9NVbY2dNRUZJUnXPwga9fBCbz5ebzaVfuqr71YDn8pCcq8JeSjoNDhuDqaqPfQ2t9VEtw6ZoEFpoYeqWJ3iSCZZ",
  "key32": "F1seUX42CGhhMHXDWEcm4wuhDbrT82YKxWDDrdvkpELmhYJ26o6q38tpNBy3Q28Huobbk1qszPxggW1bwWUbrRd",
  "key33": "ntmsHEPk3ATQVcndsP6eVjkWpUy61FpnancZ1oW8FRSoeMghoCqYcZL39aD2Ch84bwSywYXjtm1AXw2UMgDXw3Q",
  "key34": "5V6uYBbNp5wdo3SHK3pMBdWhWzom45rhBxzqNBfAL9a26cstGNy8yyoK3DevtHN8fwYHvjqKSxLf38nuexYFmLuz",
  "key35": "5Dt6fUJ2g4LeXiYVzJBsbSuZSTUeXWhV4LXJ9BfMLfjCzvyU5Y1HzcLpLdSpDGmFt6idugxyiKhHDQMXkzNg1EUP",
  "key36": "3fhGkK1RyEdS1rakUEmaQWcm88RKR8S3g8KXzpbTuSY5FWwaUEVEriPvJzuigJcq18Ww4HTpWg7aE3R36urH4msP",
  "key37": "2mi1bRFmvj6eJeAZ3R1tZgLpYN2fkkDqAxHtUfXPP41H4oRsjWrY994WqotTL5UM93RSKF1JPZUwNFPwYZJY46Uq",
  "key38": "2vc99JvDA6PDd1Wx4bDArwATQ2RsqwNz9R1LjGokJg1A1n59qkkiA1RtgFduRYqcmqnSk5iA8T7eoxbKd2VM4TY1",
  "key39": "4VtC47nKkRNZXWN224yVYkY9t47exaz9JyMS84ogTbHKqo9Jbb3Zh6Mqf4nm99ePPRacBkLCSPeRWvuUBNhwoZpD",
  "key40": "3GCwkxZJftXXCswCG6WnidcUa9aWiYLxLLsGUc1zKK188YStikAEsb9fpnyMx4aV2nzWwkdKVjDyA8DqmFbzFCrW",
  "key41": "ZiVWfVYWXW6iUqoXWHagx3r7GpD3F6UZWq34tKDiT6q7uJvQTM1AYsguDrv9eAqwcZwcmCACGuJY6jL1EQ41fkU",
  "key42": "USAPDVCh32ZXLUD4QhThpGfciNZ9g4AyNNkvLWt4FYXar5KyZSC8J3Q6mUgoVTW6PE7wcU1hmWv1rGckgpa3Guh",
  "key43": "4FgfzUoLqCvcDsc4E68dNLStsLQShHgtVQtCGCJNV3fcAU5Y2RsWRBHvrVUjadDnHecEtnztpC9iveReYiuojQEe",
  "key44": "46umuMvNDqBrkZqon2a1yfKE2bZhzERo2HgJ2D6MWKuGg4gqrdhsCvdx5hxcKsRRehujWtyPiHUKnfUeCArqUpJr"
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
