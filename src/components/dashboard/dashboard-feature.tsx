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
    "5W8EUtrUg9iUZU8rZropmEkM6rpdRubejFs7iAWdfy1f84aE3j1shgXipG3Q5yjTTeaR4RYnpYgoAqcoeeZruDnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w6WYL3JvzgwjhV8dDzyX6HstHAu6AzYButkC7YUmFCfFHMWRrwxZAmC6Cb7FRT8SrqcLtJevvndyDPXuuXKJWHW",
  "key1": "39iKW31cGcQk7ea5ACn8ucm92wtR2Zw9apRhzhqPsBmJYPH9iVywr9ac4FB5AQ3dZd7PM1W26dgcszFW7QXR5QRS",
  "key2": "3uwKBp3sU7upyeeu6KXyu7FsowjHHSaQf6Bi3jtCBdBXkGPr9NXYNSrRTM943e6urRnhDswUNQnhiAJheTP88BbP",
  "key3": "35SXtTi74WZPTcZXf67PgZ623EmuXKA7GXwZDbb3RwmHf2bAH1qQeuNnkoWabCho2UeLrfXQWgrVJdaaWDZsoqi9",
  "key4": "5ooosqewnQdGCRAQGi6c7gmCoL4qquzM7N5nLowVDx1CqmPgcnhqsqgomEiXiFrRbLDdXjioSWdyNtntGrqTKWE7",
  "key5": "5ZFbEbAQ4XgWyB31duLm1Z32RkFvph8x5Nj6dABFgCFJL35EY93jpY1SqrDkuDuPc9ZrqEhjTkz8hUCgNXPjTrTM",
  "key6": "C3FzdX6LnAc3u76F56Y3eAuRDnu2wbSUoVhP6sp5uwueNTPbAEbEoju8kD7kcfiUTvt85MEU1bisM86zstwnp3r",
  "key7": "4MRRtrygdVLDsdVdtcBipXW1oiq6T1heuB8s2sZTDGb57NDyK6gFQfWW4Dc1JXbq2y6M7od4gTBBzaBNYWQRk9QZ",
  "key8": "2mvmHFaf3mWYjk4RLjmtP94ad1Foc4jz5nDg9Eag73vN1ASLhK5CkzbuSBjgJixFo18oAyz5AvosiQjkSy6Lg6mg",
  "key9": "ttBQ66sKJ9RzZMwDe2wrvQjU9dvbkdR3gVZNjpq96yyXND7mUPaqqmnLUjh8rox2QZcg5kAJxEniKt4itwA1Ybm",
  "key10": "669UZZE7Fmf2o7dbmgvyeqYyAagtxmPvv4Go7WfrH6M9xCAbAGu1EqqhHu4yadkAT2H12AzZhS8cQVtXqaMmiA75",
  "key11": "5jJnNsKqsC13C5TWjursGgHmTCEEGzSRN7iqWo2SiuMSukmoBsuGCXm8TLjv8t54htGqwHPuStZcSBmMMR7uyDEQ",
  "key12": "3YxbiZhp5dsK914hXBXoTMvRDHcAGzKmvXRq5SoTkoY8o17tgkhrGMhfcZq1amzsXnuaEnYySsfFynFjCAZu3d9F",
  "key13": "5DUJCVfL3sNsR7RzB7dLiEpbPmpLhEDeoVDKF7seTLdTbGCNvCn9GfRRqFwmcoe9BpzGz7n9EZvzspp2grixUU98",
  "key14": "wkXtcG5HRAc4p9akSFH3spyjzP3uRZ2ami1xzEXFDnJLFXhpfkkSnhYPYq1vNXX1vQkXVj5NxsmEcSbHVFbWEp9",
  "key15": "3ZMbbFWsTxUjVTcEVH9Sd35YnHm1wsSTPBvaTpqwxsrj6aPvkYp2kTrGiUwStnooUN4mSzLRGmMM4mt8KndRfHFD",
  "key16": "4iAt6xkYqV1TXvfNiFm7r1YZzmAXFpqWke9BGgQdaPAfCckDsHq2D4RAugibibfxh3ZjSG9t1y83DUN6p4ejEmnt",
  "key17": "gBTVxcDfRtki1cuvhnfVATz3bpN6A3gNEuENARHj9gNaEagwowzohzm5AaZkfxfwAzAmEXBXVnUscQMZVuQ9f7q",
  "key18": "35N1YKjAh3udDo3BQ5DJcc7gwJZZsVan842eWnPYfxDNhaYuiDaHJrzrNBrwvG5WdnxjqknTacxUZ53KoVcnTxrJ",
  "key19": "3modzr6dLRpoxvQxK93L6grnzSYg7x58QBjWaMtSZWTjrg8xGn5yh7aQ41vezkXHNZUiqMREZJcYX1VJxt9eyKLv",
  "key20": "29HHpvPEXDN7QLUZ8mPvRUEnczU76tz4V8JkbDEWP2BAb9rJtBQhpjn7jYXkf4N2BMoS3eWBrDSLUcRtCz5Ak7bC",
  "key21": "3bq1ngbLsRb3L1t5eQg3MiRNHUzbtiaLWc28vyiMUnJAYVywpo1jjejHbUgcVbYVjjM2sTRDnjzwf5XJgDrVcPzG",
  "key22": "2h7uMU65BzcHxJckF76PbjABGjG3Y45xDq6bRD1oCKftomqGD4BjKYb7ma6Yx8j75ef1bn9MC7d5aUzHEtPkwjVh",
  "key23": "44qghziCc8j3oSWhxoVpTqaaaGSmKAzxF9ZLn9k7DwShhkpwLF2Htww34WAiu19K8wA3pCGMtaTT3PSyRzk2GoJF",
  "key24": "5GKDUz919xS753RNm6sjN5qDKzg79LP1uQqeRi8T8VwabHyymD7WhyQZJURFKhnCyiVyYGF4UFasHQsJdbzTKAGB",
  "key25": "5BKMitABE2JBgd42Y9omxwwrVdzQmLetxkEuAX8rsrDd3XGA2qgGRXXG43rKr8F6JoxYzWBL3YTQ8KrDjLY2a5G8",
  "key26": "2aoJwsjxsCxCPeLA2G2YmeVuBY5GcQdavXbUjevVfZMeLh1kqNgknKFcRium2Y5gVyepZRudA721ojs8oxULYawQ",
  "key27": "3QkYVvy7npvDFtfDn5cRV4osJjhApeDJTUymJozp4rx1TMeuCbX8MXoDF2MAcMJkkDXq2Pc21ZvV37ZLUZ9Mswny",
  "key28": "2Yq6VcmopcG6AuASteWRDUyKNTWTt4AQiryP5khEkUKo2f9uHYq1nwbedKYioqRr3dkre11VHcWJUc5Rp81jBLsr",
  "key29": "31yLZtLFoB7iW1ogKvMM7oHMErE4ysWGhruvJqJh7qBEMWSUGSancwzmJGX3HLPQzumpsKT7RsCe1zSk4gHPRq3h",
  "key30": "2kZv3hZUaQD6NtLN693Gqb3tiK1x2KRtCmu5ADbLmh2eGXH2rPNaMEHvqyUpRbU6UuHfnNaBoZkKC79wpoCFvYHK",
  "key31": "nZH1Z683qNjEkPpwkAo8iAmSGAPkeTyig3EQMZGhQC2XKRVFSKGYMqkaNdUHrK9GSrxpqpFkrU8H8SL3Gb5kC3r",
  "key32": "58BzFgSFEZskWX4aNb2ziPr1ChkBRzmdMNNLPaL1usjVTzGEh5twY8TBEWo7p4VHEqEGQJogwLUX9Y3rDBmgh7Xk",
  "key33": "2EhirWkT4xzEk9L6qaaGB7tnBtHFKF7X7526TUUfUHSvsM7C8QYCvWShYyuavqpwGjPhrXq1vaEJq8wwSv3GYnGP",
  "key34": "wyWrtWm1tkgRAQdFmQRyps7KyKv6ieeQqLZTVHBrXQRqJCwkXUPN7iM8tBY1PoGipm6jfsS3CM6YKKYvbgB6ndC",
  "key35": "3ws3mZG4gHtLMp5grg75XWB9tLpMjNGWQ6DVtPh2yVRghZqDHfpujQa1tfbKsQQuPU4hUrugLvjVAaUcRtSgDpFv",
  "key36": "gmSzDq7eBG34Nh77rdFqhvxxhJM4ndHNGMFYn96tfvZwvtxo2e5jxFysa2U8m5jt4erPqFDfsPkE4xJ7hn7FSE2",
  "key37": "4BCeceSFXJCguzHvjcHoL1ZEHna4eH7asZmiKRBV7morY39GgJDRy8cqSmtvkhNh7WxqSVhMoF938ea9pDGcBMLS",
  "key38": "3Q9NuuFZof77tzdXfwCCqPsabKHnpZzcsUfsVGsX2Pxd3iPW1toaGpfPt1txmu7kNuQPFUKR72ibEozVQvhZ3QRn",
  "key39": "5CqtZgybnRELmME6qmByzXWB9tavsYiBUErUheDHtL5uksSAZggkNL8nPwczHwTkV2CvhsDfYhuwNRmyzsA2NjTV",
  "key40": "2ZjNkjAjAMesapMCWwHFcaKPkPA3ux3DX9naMuqrm42qwuKaaXDA7krMAjCo9aLDBdkYjdaAA59DorZA4dvtJBaL",
  "key41": "58mgn7Bp29Zsr4VV91hdWAKrZDmf6eqLRd5A2tsjFvFGwEbuYkzsLtDoW5E4yAVcUFCbQfkQpJPBE33dCaGH73eS",
  "key42": "2nQs3Aqn1w2GMVc3E97EqAqHsEg44nGowEhisVxtuiUwxqvNfCwiXYYWzPHrGCo9Cx8rkcdrW5hDiYq6a9vqfSaC",
  "key43": "2bWigABubXRpRZq7VZJ7Xou4nmKXHYSs27V4y4S2mnUCTCcnzShdAD6361jnNnWpZGtc2fUTyazTKgpL7ZAtZD1L",
  "key44": "2b85x43MGuVB4vd94zcKmsebeGEUVDv9B8ue7yE8d8PDPyyu4Nvx6BPNuP64TynCH9cXGwHD7dVa4bUSP73t82L7",
  "key45": "5ss6ArsEyeaV8s5svqjP4bVz1eeEBt4STAYXVUTKHGHNUNx8MpoNbLe1qhN1yN4EkXVzCWZtYff4n3YvYtqn9hj",
  "key46": "5ryQwWL7Eg9A3S1dd5MxfX3CihrGgERr1fSkBEt6Fk6MBvzdhYVYrbwVytSZRJNuU2JEFzCemS4L5pqjg2n439gA",
  "key47": "61mWrTiNXjEzNRcHpKQywCXsuDNzGpsnBfA71koaAiCovLxRUU9hxFdN8gFvkdRCCUDN6v5NFW1XJoAzosq88z9q"
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
