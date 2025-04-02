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
    "fjZMbMGE83LbhGKV8TwbDqyiZDZzZoQGktqNmaXRg7eHg7Mgbticv6W99uUbA7VBnhDRBQ1WhMHiueZefNjZnfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hQNLpTqN413YkQbKNFB94uRH7B1B4egHDCym2YfgNTUPuZqoSbGDjG34qbUsqNtvUpRMdmodfj33u4P9STYFrjE",
  "key1": "3E9BXC1yeZYeUeXtWuXRaZFhEQYigWtpYEZQXrB7LXWVrkXFKBrrAfUcybySLnrTTVQhkqGtv9F9trnHwRjdBB2e",
  "key2": "4y1tLm8z8tCMFyVwn6y16gdfVSC49xL1Kk8s7x6i8N6qe26gudvKaaxDeuYCm8SEUwLzWChdREtPr3VU2ydK68C5",
  "key3": "3BGLJVeeijNJ9Cu6aR2ym3J8DEAjzpJXn2odqHsnsWt8aFpFk25RTHc7xScLv5yRPHWjegLYD3T2yr3JXXhDi9is",
  "key4": "4ecNytVu4CxT64cVqcP27xHn9ksMdMNzoWKvE7uLUkkgAdUVtD8JYaGFHPTWJZNs3VaXnFpntUsg78oTNzLEJed2",
  "key5": "3yrfNbEdfPJmUaoS7kGakXzKZonsX1z1utQ3Q4k7EusEbDTRUSYDtNrtFfKfmsszneVE6ADpwXM3W1urg8vyNSJw",
  "key6": "TTJF21vRRRcYYLK4AUbBM3YLnSkA2aUKDhErELbdZpM7CsyzQ744RshawwZTJaSxndWZNLzuw63qE2q4sYxDv1Y",
  "key7": "32BHf68qPnCbtqx9XLtc6rSgbup97ddk9frjFPqk8dvBgUQMfUuiZcBdFoJjJooWGQR8rTp8Kii4u2XJfyhmCFjT",
  "key8": "2K1b9m4aNxMDpRdqyWmCi6YEBy9rPDv9yG2zQMRqYPf7ANZuya89ZPefrD7CjnRQJgyzVrFUD7KoooY2ovyDDdy5",
  "key9": "2KDoXi39ZVQcUWdhD7J8ibWvszj8zhxhHm6Tt96vdBvhZtALFFrnJp6MC3SjyhSPhvpAQF4Yukp8pwssviuGFBuo",
  "key10": "xsNqBxJKKsoBvzcayYNg9bzDkWvrvae1CnstfbkUJ3FbmmxFNcjjEctSWbf2awcCjzH4zzdkYrjiyrtpf5DLvdu",
  "key11": "4NvnrXkEAbxRhuD5xtWBGd7FmskD1BepUamej74sZDqHJvjHLTP1PHiBRJbxF9249QRiH19z17hX9TYK2rRuKoAG",
  "key12": "2gNm1M2QtdQpwPyhR7BB7gyFQpUobmAroNJkc9Us33otcvRiaZb2kScibYy7uRqQuMTuvVsRGFYkeKZcyKTpoQsZ",
  "key13": "4sxZk7Rpk1hyEh5XCeBivoniAtCnzXD4CWrteMRcaa8wRvzxKWkUN5zeJVJ5mQLThQntFyPYuHxfMPRo8y2wfFie",
  "key14": "3h4AoN6bfM163WLeB7mCJAm3SadTDcMo96WnhQgc1Uq6xxhx4nuHAsmWjJp7egthrYrGXJzwWKtETttWUf6hNYBy",
  "key15": "3r25PeMrijcvWdPn23PvkNX8f3x6XHkWMgsu2WTBvpyno5FRrXssidGNzfEk4NrteYm4oNDPpukruaThhWeZXsqd",
  "key16": "2msgyyMhUYogLaKfzyfsYfGaSV2uAidXfiYhaUsJZEJxVkAKxowFSr323w5952CtfBDuSWL9hYoVseGPPpzGvnXb",
  "key17": "2d8WLWdcyAmHnBeyFWqNAN8zqRiqQeTFA7LoiYhx9ziQBctv6m3HNENo4pMJhZ4ofCi1W5bjCoeokSs9v7UCCjbU",
  "key18": "4QHCNSjTzydo9BQdnQSFdBSV8dGhR8oyRhgTNJPLYydfnSLUaqE53Zokqn8jhuGTUA1u6priZiPPBUCuEX16Qv7D",
  "key19": "3AUGJXpKEQsHqvfLpijLdfAfe4KNopeNeYz6tAKLGQ7FoR5fmWedcghLC6LVb6EBEkrvikUDiJS5nBNhA1FxWSaK",
  "key20": "4vwKEDu1xg5tiZpPmxCv5BhAQFTk1d2vDmSDD9z1fHDB14TN358gfa83nZHKHvZd94WdiUZxB7SH8SKRXovbRgfW",
  "key21": "iGTWWEZ3VJrtDb349A3ch5WXc96pBmicSpasxN48tfkDQpjimVq2QHgYc7DvMLUpdDbQ64R9HnT5KdnGvsvQN1o",
  "key22": "4p41mhAbDH2S7CHwfbNRJtueevqGNvBAsLbcL7eWpbQsfRRjMQDf6VoHHoEjWGfeJNWp2rniMRWRqoRPE2UaZS3x",
  "key23": "2iWZziwCbh6cY3rx16baSwcz5VSrMyBWdjgCt8332nQ7TKqy2Wt7BHZG6Qv2cASGoZYo2qFo6D5D2UymCwVHhCW9",
  "key24": "26DXBqv8yG7aQ3ttgd9ttyZc4X9fYciGgDrAAhQdwkRmsZUiGNhRPzakL4J8WhFTH8SPz52SXxBvYZk3mSWr9KVq",
  "key25": "2MbRdxGtBxUNq5CozUidBygDSq1V3swMGNz4ujHLtuZHdLT7rCDB3ZccAgaGTr8J8KWz4SQQWRYtVTed5vAzkzs8",
  "key26": "HAZMw79R4mq2qD8bmeR8qS9vheBAFyJKjsVSNBKwbCUnCR7PghhxwxBECMgfpvaiLnxZq1zQvBgiis6TbdbWK2B",
  "key27": "2But2ncZk6FJR7GaxpJARvLeqEQexF77aj7UQurTjyZEmdN4iXjAxD31cBCVyJL7rzwLffcNpYp8wd6sg7wGoGy1",
  "key28": "3h2JY676ANCATMxUBWnpAYrwVx4u7BqGmibjMWGFHgoEm4CQChjhyfZQY9JcXdRpeujdMMXZeXChE1U9bXLS14S",
  "key29": "3sQCwLTJTPuiJ1o7miXtoDUnbmjaofwpxJH3pFN8k3zbpwmXiLYrG1CAwqAHWGRpn5cQPCE2mJEjZLMa2mc1Pzkw",
  "key30": "2U45jw4kKAQgPeVvLVLtNp6nCYtJpzzn13LEGr6nFTFmWFPBBhJWioyWXksGhUyBxyhi3hW6Jd6zqtK3n6C9hQcR",
  "key31": "3PUzAAxo7hd5hefNfKrVUcobwFAiqrzG1xyUJy7kNjmm97JU3BoQ4YKkPxy5QmiyzaLJ9QTCFdTFENSA7zHDuuSi",
  "key32": "4LNHVRuZTfSMfJ7poVtY7Nbni8yVFowWT9zCj8kFFe9PBxKBLbKY4iBcsH8cjd5pmUcfqjWjfZvShDhSXqnxqLpv",
  "key33": "2R1CB4YgmzSLxDo1irRcW9wUXxAHUegrmmRbodWCQ728L86t7QtebyK54ec6kVtwifba4R4ZpANcehm218VuWPUQ",
  "key34": "2QupSRGjuzXgHozLRznGMGoRuTjABBqZdNXnPnEtMtf1dSrQrw2S7PdFYgVowrwCMsUbw1pDujtMkVBPuYX2zcU2",
  "key35": "3mjpmM93Ng785Sb7Rm4WZWiP5XuGFy1pFzodfwEwBLyyuAM3bfayhqYqp8fGpYphv2xsrJFX2e9cp4C3eouuQZGY",
  "key36": "2LV1ASjUXMsgXXGhw1FBU2oTutV9UwY5yf6kWsohctFh1xQohB4WJn8ddbesai1E3Wr3SKm2o6rFngn7AHe6jd18",
  "key37": "PHmppp6EhSfiXymrvsj522TPTqm1bGEH98uEhsiDuABHsLi15vTyHHa8Y6wawhMHPej473vJgRwnewkxd51Hmrm",
  "key38": "2i9P5QBKxv7SmxfpQoCBzYmaws9x4Azd57iDrLpRKSXZbkutLfgmcZE33MXgu8WVeQKRtHF5MNym62BKFQ2k8suT",
  "key39": "33EY3iRoT5nSCSVGwgTLeqBUzUqGC5fDGjZGc9feyFD5ALEaJ2QGZek3oYmad7y2DmRcF1S1ZfdQJpBBJnVSGyTz",
  "key40": "hFoZqYie4QdxGNHJzA4HaXBcAPLsnpVzMQPp9N7yq8kXEFk26dyrUrgwGH6nGKfKVTvqSVf6p4zdrHXaat6EiUg",
  "key41": "2da3wzJJhWMRjHXvHTs2Xuj5oVn6oJLe4RoF7N3SNhzRYfBJQQPzmN4RDiJmj5nyQowqDjpdqkPioAqWvXyGXEYX",
  "key42": "2L9VNPcXzNQrGCtwmkm8kk7XFLhgMcKy8UYqiH1xcLgZRA62u7EHisxA1AQFFfADB9ugSieuhxciczRa45uxvaVB",
  "key43": "dehDd26AftCfx2ciwuAwKMKPsWb1uADsA6285hFRy1wp3eJpQ1qphhVP5mBLGkhYXKUUJPLAnzNhQQ3TueZxwXo",
  "key44": "sorR6pt4vmC3vqQKPQd6LjmNrCaoVUzViqtDEXXuH7DnhuejYJYN84rgxkrEDfehVb2Pb3HhSAgUrFbbDejhU6M",
  "key45": "2TY6rcszyam7mvooq8dqDnAMquPm3zg8Twh6zhGGAc5wD2rgVCYDyopJUKSaeYAxGACT7b54n5TUR5aSov8hKwNy",
  "key46": "44JQmi1o3t6xtR6CHGDtifure4uFzzPbamBqFmMnGYccpr3cNkgpdjxbArbciDKMAmsHtKvVT6PxmGg9AM4JBaHz",
  "key47": "5HdhhaikDnNyEJRaN8gCFuEQN8UT9h9EUjbshJ2xMWypuHkTej1mb2gQG7SbH8HP9X2aKo1d1JGCQhdBZNBDRvZp",
  "key48": "517n6ZREQpSeCzvxS3QZ8YeN3Tvaubxdk17fq5YTyjCdhv6bsFNq3tdRUMVDBG7Kat6fsVJT5bi71Q7e5jCffWSz",
  "key49": "JVBbWbRU4z4NsVSunUyoC6hq73Ui3gG7QxeQiXttwsxQfuj1tiq7mSYHwCyiPquZZ83PynXBvzEf5ThjHgaxAZS"
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
