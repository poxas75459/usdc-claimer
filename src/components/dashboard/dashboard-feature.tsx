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
    "3T4S7qH9s6y8M9NPFenYU5yi1hckMe3pHrQsgaeMEWn4SuEGgY61iyypCDBpEUd8yzzqzWUHkVPFzHN6cXtNVYjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KqfcaEswC8x4mk97By2hSqFVssZSDT23kxnH4qsNTRxsZiuhyGDPez7Lju3bxRjET1yHx9Twv5d8VDjbZajV1Ea",
  "key1": "5E8vWS12RNPdsDTzgZovUwPgDaPK4hdp8TvYdZWBhcFJAV3fLtSKyDQHEkTtRBGbKukvgUF1x6DSi8BSHcN3QtH6",
  "key2": "fPTLFwDaFSVhsA27FUfZtJNY4Cpv2ahkSEHggMAnQqB5zkB9B6ZkezTkc3Nm28ZsVsypLxoyuzYzJCP6eSVXDpT",
  "key3": "335fp7e29xZjE8bJqUFNa2bGhzqB4w56NqfZ4zh1G1ugVYBKVs8rCUtaiZEDW5u4orcTFwRoLo1KkFvVehSByunK",
  "key4": "2E7WfVTWjQm6cu53oGL3RpFAPTTZynrA2HhenJzWQiuNjKUxwMj5viHAxrk7pejgsQ5p5K5m75WdZE8KK3jguiWX",
  "key5": "3Xxfh3JV3pTCbP4uQpeULoNnxkxJ2gH746561XTC79hxPcvdRHvtfhMXtRC6q3uHQ6vWNawiXnSN5VZPLwZhLs6X",
  "key6": "TqmDTnDSpPPqwuC5tgrEeeiu3adNeYHVCRahH3D5c2M7NaVmHVDTxf9ffZ3go8MpVDjG2Zcshdn3sb91AYbT4f3",
  "key7": "3RbHkX3WbkLCdLCjknZobZrWZMCU8dZ3dsjAmzLgpbMG6K8qC46a7chyyiHg1R8j5MxtJi78evXPrLdaBH9YRHtM",
  "key8": "41zoqB1Sfptnphu66Mfz3uUiCBx7UXY9STzWCMbBfhBxQPSwBRUD9FFe6ctQZAQMVpbWYLA7PizS5Yof44RuWCmz",
  "key9": "4yH967pAHZxwBBa7ppcgAvw37MnsABnMYfB45PFytEPm5ysSr8cJPvx4E1hiD8bvrKpFx69VnrW9oVDXewRmyFgz",
  "key10": "3gqdEzbZML5dVUBZs8NJHHjkoDmXE2nQhAnY2pgLq7tWwFgoKbsVHHgvMaDQjLa67ikKNDWBrDTDD3TB2EMLEKuX",
  "key11": "3RdHbmArbUNWTfSGQgz5dx8ArSKBhSrsDs6s1eXnihL4M8sdz2EnAD6Fd7rj9RQykRePgR4QBzJ4ShrsUycfaPG6",
  "key12": "Fp3dgxcGdB3ofWZHtCY2er6oRrUq2PTjVTaRVpG7THJTsushqHSon7aNuMWkNJfzovcXRigD5C4gkiiGH4ySXTB",
  "key13": "2nBezkX6fatjL2vyyXKiCbZzCeWyWA6RpRf6m8tsVo4Gw6JmHNnB1TnrvcraY7SVuEeU4BtZHLSvupKHrgCtcAyJ",
  "key14": "4L4B8p9sVE4pW3UHQmHN9rn6MAEnXUUBSUcohScBH7vs4SGRxrCd5NYzrVVRCX1gxVaJHdWv48tio5iTub3B2LS2",
  "key15": "2SE8JErBeRZBPNB94epcFYjXLJbk8SC7R45gE7sX7iAeWKf1Ww83gsKMZHN8S4PaWbhnREZCpWPe6uWcZkhpPxbw",
  "key16": "5nMjWpXAKGX6yaeDJtV9afbYYAX9efJTNZJwsaDnoJV3pPX363SbVrjMpcfEBx167PhGYFYCSZkq3eUJaWGpQBTN",
  "key17": "XjwLVdndFZHn5bREz2hhkjwhJSvvfetcqrcmuXX8CkP7cWwnKmri77mL86HAAcEFJ5Xq59cuxDR1LUbD2aa9meX",
  "key18": "3pgoWZSLQC6YqZmZ7NrwmXz2gt4CSWngDagQXiHR92bzj5hdNQhymiYQLBCz7Lz4V5UDRqf5xtxbTwuLPRfvRus5",
  "key19": "EVX1GrLZ9TMtszc3zucZcSAFmad34EDVtDGbPN1t1PzQ84eF6vGmXAgHnsyKcXGxvRQqaYuej25DTciNUEMusUU",
  "key20": "4PKWeQNEpf71tn8EJa9zWt1UpLjsxjKHZGvJmfwKihk8ZtvCzzdowttaCU6kFi4i7HEk6GB17kwUWVNuVotrkGr9",
  "key21": "3szLPZQbkyza5eCYEbRBNY5pbtHm6cahvFteqRMAK2ZFAicV6ri95TCUSTx4YtVX5oBqpkbpM8HriMB2HzY3TnmW",
  "key22": "3H6HXBEKNkx2mtyB7gN97m2re68qfAiVT6iW9E1nL1DWUutRD8aCZvN8hUqeuZ4EaDT8xk4BJ6rxL5JTkYfBNM16",
  "key23": "5BwVBf3UbCmTPQXYBHjF5NDrMaygfPemgwq9FW6NKDD8BMz3LTm1X2MuzKBNGMhoWvPU9DamjJEWB1mbHZX2ef7Y",
  "key24": "2rxCePU3xCATwTEaHa69Nu7MMGoh46CfBn7Zq5ihMiQBe1nv3fXMiKyY4mb692Pu9JHr9vpsWPViFPpCrj3pUJeZ",
  "key25": "LZL9WdM3DhbUSWW7pb6P44A5ExsyVJGNq3kXz814pVZXFWAyZvKejNJJuRLAwRWRAhVE1rFz2SAgpjfuqM9GZ5U",
  "key26": "5dMVj9bxkJur1VKzLPXML95nsJk5GKr1Qw5r3Cdvn633LTR3s1AF3XWktrsWhxLbZcMQwGq4sVGarJX1aShbutxP",
  "key27": "3Zr9W9x3n89RoxFMc5BaWb2ZaqJuU64ucVNqZBjP87tFsvRLigdqbFagALJRQGuxkdQj9qhiihYxkcxq4bVkfGPc",
  "key28": "4h9f6vR8eM9TwdYTTBGDEyaQjQJHnM3hiV2SzkygnnoJeuoG94KxZ34rs4sCYyuuZ7K6tE1CD9Xu59iUtfxbNq7c",
  "key29": "66G9f7EGaDSkxfADqAdQh3aZ4GuNtxpajRBW53cFrrsRcTrS3hY5DoJcMXAZZK34nGT6EsV6reAv67UEp3qk5M5P",
  "key30": "2ahUQ5cVwMH6QcTUnYTAHTzD8hYzchiHEnKjWr2MtvJg58cf1YHRYBfpZPQEq39iTjCqdSyevbaCTY2YQgPSMpx6",
  "key31": "2TcBUCspZuzB1qMwJuN9rWLNXt7ZG7woDFVX8GXUcMCQgwjt7vxvyx13TgNg9ExwSGCDx68y7pfDhxZunzPk5ZcF",
  "key32": "54fdLfoarVECbWrQJsxezeQ8qqjECCovAppeEZoEKJCeKUvFT5aNiAtV8wDo3dX1SdKcPnNUrfubJyUTVfVrR9vU",
  "key33": "4tSMFVf7TucXD9U41xLsd4q763RZbBostdcmERwzniT5pXe8tbm4uuNL6GdPfQbchUSvQEXgikkb5NTTcq2o79qm",
  "key34": "2NiAcp1Vj4oRdKwtSKkf7KXg4jCH5P2PgHQEAnxhZhhKB6scYDstiBYYCokd1C8Ehp4vrnoZagFSuFHC1ub4NEVf",
  "key35": "4C8S3HUnRthLSZkQ5vizZvDLMxwYttjsWPca58czRPMBYZZDGSbSAbxzKfrwL4Kf59pRtZxFDRbp8vDrtDe8tAPm",
  "key36": "2hGLocwJ6W2ngiwF3xU21n3qPrsHrL7o5xUC7qXojqotmreAoMVzbAqf84ZBb3einkGxzn6xrrS8Vrw5AodaY6x8",
  "key37": "4LFWVuT8VF5rzbiHB5GnBDEcXyijNKNKNgEESBpa2YELAktHrNXQKurQJ9c5m9oo7oj34zAT9fJydbZb9zGf3vwZ",
  "key38": "5oJLBfqmsvP99WMNGSdgZRETPuNUJq27Ac1WFPk8VkGDpLfz5oereRWmxi6usqYt3ts7Km3rqFP5vR5qLEkbhz6B",
  "key39": "3KRF4js1KDyy8FroNdvM86Xdi27eYuvkouzthSqDJ4YYqa6q4AqVWfnV9cg3Fcwg4nqzepD3asxjoHgLBLVDJp2D"
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
