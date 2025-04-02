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
    "5kcCeSNutcdHqWqE2SJcv73aA7PP38HSy98c2fboiLyhMoYwugRmLEefKZhCFFxW2pR8oUMoTUe9qw4FUUx2sLyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fbwacAYzLiM57kwrWsMxshub1HZPBDeNaLuGs2VkmK7GLZP5NiMnNsNgg7MbHGSWBKAXAgLGhojnAwqG4jE4aHt",
  "key1": "3AyPCQv4Kqu6TFcj5MaT8zdoV1Uky1v6ScMGAiEuFU4pS2vFXeXPZDvhbVtb5f3spTEXzMQMifY7YbDPxg6a7Mp",
  "key2": "4RDZNLxsCK4KHFYCeJkCKJ5euJfar1R9HJB8Nue1vK3p1JdgyTHRCgN9Y2zuYBtmxaS119Wo4a7p5WJAYyjXWkZ9",
  "key3": "2Z2YBjYBXK97o1Pdd5j2jUw6wQGFkij3NnXqtzZptLU1hb91EGXu4sgMa62Q1EW54PFhz3UMgRvkmhxwuQMERgF9",
  "key4": "4oqa5erftbByjJhLAMxK84HYbUL6mFg9zBTPSVodnS9b6xpRdAiDaQNvAbzbAneAJVewzWAPAnAyYVuRDBPF54QH",
  "key5": "3TKW7ZQr1CLrPqnGnBY2RdzzHYNxHyDMEFjL7yGzeNKMpGwnquYBuWoGoQL8WrA6hnvD9bpQMX1Zj5YH8v8RExmv",
  "key6": "5TJdHzSwYofoYXfcVtag4CTXvcZyQGM4asRwddE2PBd3bX9SwKZBPyoLshpieRd9zQiw5GCjppde5V1wZM43p5Fm",
  "key7": "41SV7WtbAcFn3wVx4ChZMfaucR4Qqwap5dn2CroWsRPhQQE1YQ3ZaL3tHYp5W5cSfnUhbuQv8zRU64W1AjaX8Q5T",
  "key8": "rXxQbSBuzLFphAVmz6475ckwLqHwp2GsgrfZHrpHkQFKwGw7gTLJE5oYP5e6oDtT2F3Ugzi7QdmfSudcBQqLw7k",
  "key9": "52Dq97rVAZB5WaPnrm9xrukL9adRAph1g4duwTkz5TX9J81cBK1rMFvwCQEHsKQfkVw5m6cMPgYCFra3VVtTqFTT",
  "key10": "5M73MF9ajbq18fz5MQWN7pfuTPPwHV3LpxRbt1CNN2j6f8cjKFDhWwWKnq5pQCNWBbP2N4ppNtJ64C84LUqSka5J",
  "key11": "5Vr2cY9Gt1zfnYcXswjxs1G1aQGXNxUMhACtehpTg3PMJhrMxALbEcPywjGYarakJwixdesMrJyU5gNhUrpuKck",
  "key12": "3cutp7koA66oKCBHsQ9RJdsVov8u5tSgnb6h9E87mgrN25m23fc7UhPZmkVzE5bjG38CKh1zJHAAZZ6ZFYJ4N1K3",
  "key13": "LTdk295azjTZHEKSHhUtwwphRWM7w9UuFFR6iLMi5d3UcPfU9ieHe7GNXW1kLLGqTnQmGuXrVY1rQdydKTg2ps1",
  "key14": "2jspQtKHLikpxg7rhm465pDpvXwAUy3HAkJPn9hTo4MJN2Qgm6mPgySkW7ptqgVHMuzym1WBBmxtMCseGKmXVyy3",
  "key15": "5x8GZ36NUPkLTgtB88pDTKyPA7yCNQL84pPWVKnnKDMZsLn7Wwsrvqm4yxbrKdnMAYuqTNKD4UdMhReSWdiLLKq8",
  "key16": "LFkkvYseiPbveh4ENG5jXgEw68v4DJNRiibQxQWf2ag668SbFWmoW7y6vBMNo6TaRZSGb64aYaDsHnX2pHp8cyx",
  "key17": "XhA6WzoY468E1BQKjs2DgmGbD7uK3UxmUqDRoaLv1GqkNkY5GGuXeBgdAiNntotGqhrMUxC6iHv395aq4FBL4v4",
  "key18": "2cHVRh4T5FaBGUqATBwzMfAHbcgUSKn3hJQ9QB2R4u4Ccq8oBoQS2JUxJTLGijVAn3jFZYEKrKN9phtGqBRWxBEm",
  "key19": "rvTit9oo6mUgfGqnq1zKxzTWEResZ3qv7Vm368d2aoQuPP7S8XNGdzE1h6HF939agYXFcSLHcxzAySUTuMnjQNb",
  "key20": "4KaPbS1UQMcxeMPkvTPpy1qQRVQHmCyjSw6q1CQkhUriUqdK36kgzfGvdfaZeVZxLCJoLoLMoU8w8D4ycE9VckEE",
  "key21": "5xe96am9prZbDJXnXbbchqgFqELhhUDahB8exdgRYSvyH9rn437fw8zSK9xDtq1foaoR2WbqomqLsQVPfSnxD2Mh",
  "key22": "3M3WQdSMYpANLSsh1cgzh4EqGTwBToiCEoFJvHnX5tEk1tkCn6kjBtVBTCf629VCd9QKpBFhfe7bo2ikgmXURTZb",
  "key23": "4yuWp1mfJracPbsD4ymd3mLbTooAPzPdPNzWUqV398rLMCLp1db5GZ7nd3B3hQrP3sDTXdy5uLKJHu4qufkqTQZv",
  "key24": "2AGh8Mu3a4AT4Tb86VmL7k4zaWAcG7Dc3tiM1c83kVFdiQLK9LGcHpCmA9oEB84gxXzCVfrWSVuwXAkZtD2qsQjv",
  "key25": "3h1CPrQcTx4sP2FkS9ZvApMVxNMBhD6W5NT6NHTPLtN3y3oWnPZkdFrenT9XxDBX2HsgekJtyToBnKuGFJZ4t7dC",
  "key26": "2yCbcx65BAk52TjSqCPuLQ73tmRBNesAhHWGg5ZZUqYbfYJX5tdortFT9C9NnaKX8GivHcArHrLwxb4FUrQr68zp",
  "key27": "UwZnyPUunUUQ4sSiK2bmpshyYFfeEMmYBQoNdzPjsXNETfvJgVLAgYxJepUkuxK3X2vTK1fsZ9sMHnEreddYWwf",
  "key28": "25uiw77BwDT2PtpBrrCFUCHhUJmoJrJ2i3oyDyP2jp9GL6AVjhkxPmFNphcv9mxEFebmxiDW1pYr9zwmmpJY7bpZ",
  "key29": "4h49y5bFAxhkHLfb285NCArCvqjz7TLKDQqxcq2bhxnPga6JkBcz1QodYigEYQnZkd19DLvc3N7Gn6U7BKJLUSgc",
  "key30": "3HXZEWxsvB2CZjQxcEctAWCRQ5CfdavpLVazRKYD2P4XN96EZEzFP7cgWdPi6FpQk7TVgJxJnW6sTk59EsMWd3qf",
  "key31": "3woWnPW3bh4uEiBovHryRnnMCeTNWBc68ihdG3ChKcQAX2imnRLX5GNuvHB5AxRSyUcXsnBkE32dCnrhHrzKzAX",
  "key32": "PDnb9pSJfR795ZmGz1LK7gG2qZSZavXapr7V68f7aMSNiPWhtcMPC9sA462onr711vxk7Mv3sDVBFoLwkyzMvdP",
  "key33": "a91Voi2d1PPChY91xtPZoEcaWy9QNtEDDbPUb65uFpyXxZy91uVFx4vk9BBBy1hCZegDFBxjKd51n6NmuPoiW4i",
  "key34": "3KaXtpfuwGd8so7z2YkLRQyqtnpbu3oppLMG46UBrPMvQp6ySZGUZLLuFjgW4S68GPzWRGf3yY8q7gSKJj4DgE3E",
  "key35": "3hB49s2rkGp71gC6mccL6F95N7YBwcCodZTySE9PomwmKbWikMDVvc4V5MSbX449YiwR96S5m28FghDyFGzPtSmQ",
  "key36": "DcwCc6tspkBMSC4ZWmUfwpL7Rk5Vfdn3XbqPrmfh1bTgNPt8pQEBck7SrEn9aqaN71zAUsFVbepfycM2s7hHAEm",
  "key37": "35Po2vp6oWS2ETgN9v3xTJYbY6JvJF5EKwLFt8zXKPKm6qgut9qdcWcaLRhgsp1GRrYGhPsGe2tXw8JN7peVPG4c",
  "key38": "2FG9YaAd1uM6tfhSpY4xfExkCEVhkkY45jtcoKUYViCRg9gFAU9VQrpj2SVnuG6n9cnDHdJysr8VvBjhdWtBcrbQ",
  "key39": "2w19BpvsKPVUp8vxAaq9sQoYC5tAo7TtrAVU7zYvdreUTircjB6yGtNrkYEbDJUsAsseDrFCMVwqHVTcPrutK84o",
  "key40": "2YGwUVCufuKniX8rqGKx39o7JTz2JWzcRFas2aE5ya8DKqynhjFMyspN5Vap1MfR9h1FP8F4jrrvZD552qyFMgPh",
  "key41": "5MxYW7BRGqaQFFS1vEbQmcSwxusZJBJVc3SGoRUtngmEm5H5YUsQZdn5CGi3EWBtGczjEvgcMUauzr6ExvyGMQDR",
  "key42": "5scv5FM6yFjngFfksj7MqYDRztWe38g2XvAUrYrHiBsAhfMK5x6WW147r9P5F3pywo55itRLXa5aUHAtzTgc3iZW",
  "key43": "2N5rtZ292rpFGUgV4NNP1bpEmviiqiLTAJsZByRzkztJKeA9v6RZvXKFgzpXsQNssEe6bXqU5g7BP9Km6Sz1ujjY",
  "key44": "4mV6vvaCD9BGc3MhCwzeRct3xYpeFg1wdN3JGexP7wnfCVaWr2jr2kjDr1CwyLH1mMsQbaAzgjgA5cSfD9MgcEhw"
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
