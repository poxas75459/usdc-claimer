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
    "2osqznW1S336mqVLJ8oUYFD7gwuh7jQFahnSYDFeUJT2YU8ZWqER9CUuZmPUcdvaBRvqJP77QqGAwCMYeWn56U1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37TAfpzt4ASB8p3fDvGqEGoNLiTus7xhRgXxMJC6xP5U6zjWWf1Et6dZ67tSu3WT6TSVR1E8RsYv81yw7D3npn6H",
  "key1": "58uiJhmh65MKtNBhyeg9XHjf9FVpiQkJetYoLZKHTjGKiohnp3eCwEEgWw6kAdcSavRcCYCSctgE8trTTaGKPepj",
  "key2": "4kjNk4drAiEFRZoQijaJRKkhTFC4nmWp6SteMLRveupXLRCBg7d1vbets8zcAXqY9eASAwDPWetqkL4a4RaqH9k1",
  "key3": "3qYLv8DPMxdL52ZqDriZpEpXST6sCSnYWZSMHAa8mp84appexYb1EDptwc37SMyA1Gffvbmq3vYUMcddwLs76oBY",
  "key4": "3VtQqDvmgEe4ZKx46JP2kskC3ufLa82SCXGKw3KY4FcVDz9dV3Q6oCaSg89QyYqnJ77xQAbeKs48jRj3Ba751qcd",
  "key5": "5CWQBDMgvFBdpd48UU7HXW2rCiLu2u1iBv28tTAxEaq49u1FyzvbHqMxgkx6CCfZ5fN8gZ6PrgCCUxe6KkkRm7cs",
  "key6": "2MATqnrRHKGHa5E4NeDLUp5Y7J2JMVhCGf4MQEGLJweiN4yHb7r6oStGbEN8XZaiFQ6iY1TFZuHQq9oftb3EAijP",
  "key7": "zxteWUgghh5MYf5swbrSjm9ahF9XS8Nrp1ddRopeekLjwv4nYRWaUeDeA683DfLDuSUnyBAhAeRdvWzmK4hw5f8",
  "key8": "3uvDcUs5rvaKhHF4VLFmCv3sHxuQFezZTxgMUHtcuJ4UQLdDVbTNCt6p5AT5EUTPACwPjoApEJdkufV9vftJXaPH",
  "key9": "2BBw9tJKirD32qe4LzExpAQVAbK8iu7kozyoNLcP8a8qcxAXaGgsJdLnRccfYZppcBEkMwxXeYbuD8zPoAYAJ75u",
  "key10": "4cT2mwR5Qn5odnXR4bRgoyQe6aBBZEbbFsvQuGi32ZDDcGyMju9EbAgKGa9zdzLswLD2aiXsfCv3yfyFzNw4V6QY",
  "key11": "4N2v4tuPcUJzu3xv7sKbzmKcmQwbjze7285iDUUTR69B4s7GedVVcgUpNYGtZ8soZzaP4wmQKqrjT2AuNCYtPpMS",
  "key12": "49uv8u6z4j9XJwgX9sPCcSJdWELgpWGFzK8sjMTFWHikWv25gitqYmeySSC8mMNThXrxyPf62Ppg214h4fmmRXHr",
  "key13": "36u6MVRDii95s3QwFyYCZt4BxrbAyJu3JkDF6hTvJCtTHmQw49LoBXPqevQqG59hpKGTHRfdYp5J7sAN2i56cV3o",
  "key14": "VqJuvYaGvuVrYLMWnmtRvEnXn3C6Cf8H8PHtyJY5mEurUeSzE5bcuVkvnzR5DggDZxUP3g4bL9SRR4s6XGixi4Q",
  "key15": "EB5VRZdSqsS6pRhJB3RaV5gVb1Aq4qmB4vwQMYmsvsoggF9jdSmE3XFGEC6m2XTjDuiJrnXPgLdfzzqxEZ5F61X",
  "key16": "21r9SAc5H8qU2eH2MRPTobUcEjMVRA94ZEv6gyh7zMKzhjK9a3AKqPfff7PGLMm9j3BvvpMJjfnEDF3Yw3BzLthA",
  "key17": "5QJPtvCsNPgT52xvGVCtYoqJgexYFX5WhtFoh5fS6k8Q5s6hm64ZgQkHChxjHLh9yAFtJKmJyJJbgo6ZSkL6Ak7S",
  "key18": "2Hzy6yrZmVdpdtbT9sbdahy5aHuoz2UAdSQ8DJe2Lki7R2rBRDBXGvdiWALwLvMKTADuKdCvuqNhPzASMbLRcTi5",
  "key19": "4RmdC7fPXbBkmNk7JF6W7h95c9HuaxMRnKtMncAUfEJMtwUR6FFHgWPBzPzDGYhjdpcJceyL7ushD3RAmQapZWcU",
  "key20": "4EZ14RcpTG1Mk4PSXdazDBuMkXSYV3EHgZqhewwbiyXPkAJwVBt8CRszbUPLtwNR7DydrKPAoYiUTC65BXSemU9z",
  "key21": "2sfjcRqYjLZfomHVkd8BGFeyF15k2C6qto9pyufLxL99zMqjE1AJwbGmEW6n3XyGKafyFuMdLDb8jY97fgtVfFoF",
  "key22": "4TWGcpapUUfE6R4uZ2ywUzffJBDuXyPREZmqSx38Y3hStypFTsSagvU5P9yJcm5CZTsckzPRNf5E8A2PQGG1wNNS",
  "key23": "1c362z8nVeuvDSM9EMWxnh28Vx82z5DAw6rJQW7jVpU3jGWF5TQCkvfZdGD4tMKAheJz6VSQEH5ZpW49a7TH9NC",
  "key24": "2HY33CngRAEsV8Dr71yrAhSXrMikobQxxhDK8p1wfQRV4qaUaXB6ZV9sgh42naaEwEbsmeDZ7aR5HKbfM8JY4qBd",
  "key25": "2BEYSCeanwNb82PhMromZocVrvq3iqyHKN36i8asyhtbVi71Ve6K3b8P66k3vQ4RRGT5rBXnr6ALvq6QovYBXKPo",
  "key26": "64PKdoNjbHxgc2biA43feMcqGAfNvBWshvJRYD5jaGwKoBhgcMrveuv5nsVtki1qEmD7XwG6Mjcp29nu4W2uJFRF",
  "key27": "8mUPj9sPJ2NmrbG5emmrdCo17DJjKWJLzaUx6CrGdFzp4sVrK3VdLahGfLyUpvfs9PsjACnQNK6Bp7XavQt5o4z",
  "key28": "4Mk7H2xpzKX1dMC7pvKv33pzLgHo8h8BvEJBBqCD4pbNiynw7TwhhCEDujbCKfvY94v1BrbsRjzQ2QrDLqCqKcHk",
  "key29": "4TzYf3VYtazYEnVEB2dabyRAFabokoVt7pVUSAr6Sxknc1zLoRjLreVLXcdTNvDFaYroYZS5u3b5i3uq2wHbnvzt",
  "key30": "5C4UcjiZP9SEZo4nKGyMxmjP69d52tkVKQq2a3v3hMZm3FukFwU7NYjAXnVMNR6SkZ1usswrq4FnPupujmMaTzcS",
  "key31": "43cSKJLh6GLsEXfS5SUK4EDnwfbRQ3vbSBtxCaGCTjXWtF2j4k9cWYvQQhiBRSb4tETsggbuJfRsBShXtCuVZLXV",
  "key32": "2SLULYKtKUowedEt9qbe4s3PjsU2Z4KuN4iAufpVXivhf3ZNB39QWiUdfY8bgUxVTh6y3TtB3i9ogkgqVw5h5TKc",
  "key33": "3w9hq6b5rMj4sib6RffBnnW88W8x8fRyTUSAhKAVyZL5ogLy2axJ6khKoom1WCqNciAx3ucX1SABWmadnkXFYKQ5",
  "key34": "sELcnQ9aFF3fUaABhbf85n9QP1LWcJSqXVgy3ycCeS2ByPJmACYMH9ngTktwZXraB9rxBURSFtjubuvYqw1gJzo",
  "key35": "3h9FkDGgVnQkm3fdRJV7zN8UiN4Q7rRwLrTwqWmUH4jbtdVA748Nuub7V8K4pYYGKTUzvTfb7axKMh3cm99CSA8f",
  "key36": "xMc7csk1tynvvHwA6gvpf3Mf6WEgPbsbSEUAEiBx8rPWhWjTYLPn9fPqA3ZWS8G5DSpE2GY82zpjmrMtKqynMft",
  "key37": "5e9brzfbr9bghU7cqzS24eyu5SfZDhpz5biTxYULgnQWwqhhsYwxM8fA8X7NiM2URnHZioy4yGaBrpLs3M6zds7Z",
  "key38": "4cDPrW7AC1AAi3zMMb7Z7NZiamWnfonjQgXkDifKF3M7CGWXU7FNYMxvxS4W3ZMypEsysUusNuKPdVEJzdAHKyfX",
  "key39": "47sY5Q6HzpZgeUqNJWU4nMBk3nDQotaLcEBEMZczMKbUqirximNghHgsU5X949HaCG2YvotMrRVBqis1VaBjrkP5",
  "key40": "b3Acz5EZ1LnrGHxA25nnXfx17KmM4CP7EvEoSR3A15cgeGsQamd1GggAVs6cFkWbhDw96G6FM2SbGLq9VhZkdQn",
  "key41": "58Hm3dATRXf3sUW1PUVDqfPcdjPp4UVRdHpyu7P342ckcfbd49h6EdLvNjBcnMZnJ4DwERHLCo6JCP89Z1mqsXVL",
  "key42": "5ejTfMFKycodQroV6pSosyjx69HJXxa2KH3nhWj7iiBMkHSkEte1syxbdtwZZfeDvxj3ESbPJT4Sv1GnmwaeVJQ3",
  "key43": "523MCL55c3jWuwUqNoHXQ5yUwbt6hQkqKWv3tpKjGtvPWifG9PfYRhb53oQfSwa457ZoVLKc4bziJb1uXsxgX3p7",
  "key44": "5VUPX9o9R5L5BXF1rArVAq8eac56CCwZ99GnjoxxWMdyufNxxPi3uT53MtaaZte5yEGC95xn8VCiEdRiXwE9hj7b",
  "key45": "5TWDccB9Ag5XUMDL9oLiDsxaJUnw64NyiYLtf3eQcTWKPD4BgLBXY3UvjHJfLAVx59YDED3BhUyYDRtyER3JCUfj",
  "key46": "i9MrCw1vgW3eHf5bxqWiPrC4KckqWHdU7FW2iSUesoKSHpDUZ9PknVDBnhqZB7JmxhmihPrLdvrdVS5C9pcsteP",
  "key47": "5Xk9yjNCPmGJL2NATqQSV9RZBN8fszS1DziKfFyQH8JSs66EkqsBv1ti1PQGQ116H7Ucg1UPdon4E3ka3ocuqru9",
  "key48": "44mUYgALLMKXKtkanoZ1DSz3CesRk7u6tX4TWyfzkJ7EHqkaoER3WzQDPcYyqxfsyyGTSVQ7YeVDMXgTycBjRwDH",
  "key49": "E9apnBSXj3RqrkzrhW1dkRt7eLLeYpo2QxdeBgHdZvCsQC1Mdp95mYRLuieds9BDzqDss1ax6qRgG9gCJFfuHzw"
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
