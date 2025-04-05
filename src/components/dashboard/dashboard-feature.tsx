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
    "34VgF1q6azRNKPs7Ld2ShviMg6tWDpSGH7SfC2uL3u57457ZtqxJXhztPt6jXmtmz2fLfhfGF83vCXMhruobzx9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hkfHPW53FPHVBAk7epzfc9Umi4F1sP86Y9oRu6AnFD1C3ySVSE8m1ZxeLwKeiVvDL7oHbDRtBoXd2KawRvNWpLV",
  "key1": "2q4qgRBZET8shZBswHg3upHg3FMZN1Sues2Mg1FPyKdRB5cXqvYstPJpt66E56SazgkpWW3ScuTHogvL73N3ir3D",
  "key2": "2YRDbsYWfan5iqZB8zjoiK5RssHvhL1HwW9jLoCdvvcsod1ZaiFZ8Aj21cnLFgZywDYA6ZMs7xEA6L4DhiN6KdNd",
  "key3": "4gR2J9NH8hXj74kTUWB64kufTX1CAKGKQxJtc8QaeqNpJJS2xb8vrQTMxTAAmJHz64WwpTpKXtpF9wB4H7gQjrES",
  "key4": "5yH8Wzt8SStSsm5iUG42iMN8ni2fRCq11Ht9crtiZzQ2Hjy1qvTTw7XzwDEiCPgGHiQbPaZQtPPVcTQCJqHyB7QZ",
  "key5": "4yFUF81mdY3kPcq3y6fMkkTMGvNy4wZrvaMofVrkqmomGhYxUPxGxdGcaM2ZyMEwfJdfuPKQvQW1riHRKSQ1qbZk",
  "key6": "3xADizFSAQeNRcewifaGy5vEodGi2CvyeXhNAbvQZqCE4ixgRzzkiWk5j7nMnUQ9aEcFy2ps9FwDQLgmCBch2dvE",
  "key7": "4mGg1gUhU3ZnGcrBewKrP46xPnh2pNRVwuqA7TSVx1DPFSe7ydbq2Noz5G6LkvZCt5AU15op7vT8LWz3qFXtkHsb",
  "key8": "2itY2wN1WieKBJEudCckMJPtqmSfx93WYsdm6hHfWS5zNhnZfrzVpRbTMbn7og7bqGjwxApFFCT45vKzTa6W5JKq",
  "key9": "2p9ggSZmDyJv3ULnWiwFkp8kysdtXHQZKR1ZqQ1kMmnFJH26m86RrPrMsP8DSJTZu35Rex35Z33bewCi9CBAgzJu",
  "key10": "5YTGBwkT2U4wz9zt6stxYsHNgjaDPnfurRLi4xcY6Y4ZoYUcGipKK1VhJmmb2V45NuxWetsCZg3ULT1eKZ5WNnw3",
  "key11": "54bERmyWp8ehe3x27oeYfpz7uafjqXJhFcVdRQrva32EnbHfxABeXKBBTFEpDcu8S4T8azVjujEVuwFu5rbTsYmC",
  "key12": "123fis5UC7L9VZDbikCBPZcR9sgtjnYt7Bm8Pj6X7c17ianFSovYytFEVrUtKQSWDaLHSP4VYfLn57TcxdmRmWxV",
  "key13": "3oykV529kr5XLtLVyq6uHQMfyENXyCbgEb7nzqjFV1nsZwkset6uykCfN79aZoAmbhB6qWti3KnC4vFkWPSHae4t",
  "key14": "5GjTRC2wGM1p3wpDNY4H9GhsXboL8kDqvohRBTEKSgV4RNbUf1t5QUht2LAMSPaPeBTAYktCZTtYSZVYfawf31N6",
  "key15": "2WhUBvYepG5LsJ2o99iPdEySr293R6y6WLgRevv5auG1mCPP7JiKhi2sqnEEXYiyJoAbnCmg4u8zchN4C9gNwyCc",
  "key16": "3s9kYRHdmjK1tFGxhj1EMcVq1CuYowFyHUHqaQuUKHJhTYkcARJdx1MrLbmiXYNzgnMFQTugKVcQXXdD5Yu4f2RT",
  "key17": "3eGo4zYsZ3Tzt1Cce64VxZuwk97kBGGH3cJyzUDHeGph4J8NJGpgbQysz85hVuEzeqppTEo7RLASHpSYaPoHKRxM",
  "key18": "2nKZjai2J3qb3wrsp9xVjAximZKYou9VBDSW4sHGDaC88Yo14zBdo4BNC6jM3gKEzWPmii2Vb4x7jjKhgP5Gt7ng",
  "key19": "4kuh9GwtgoK3UiAHQhKL9jezhhCkLPqc6QymnrqgTS6cuhCq35T72AvXFiDCH6xvg7ERv52iANHZQUYYz98ACrMu",
  "key20": "4hd1MpcM2hhhaogxbstkPzZ5gEMJFBwvE5cYDqR11idMdnZ5nunmbDcy8SxYEKesQcsoEMfsTkNMcWW55AFsU5Jm",
  "key21": "55KynUnvTwBiBMEWX6WU11RzHUBwJnr3NFQasZtErsRUdNhurntLidPsdAfCiUW22a4ruH1ki5BXc88wwqDesEEZ",
  "key22": "618jVMz4F27mUFApPkn4mKpgYb56FLhUuiEZWhe2j1FHAoxapufJRyVQNsYXTiR2pziQ2J3gimMo6Nw7ytYXLFSN",
  "key23": "3mECximxyeTrvgSwdQ3ahj5PCSe4o5xXMy7ZVmoKeaVLXJPGGd3mxvwPuM8WwJxXEcBrPXYhQnAb3ZDcrEXEKYbA",
  "key24": "46a6a6sSKDhw6sAWPTcLnRHAprmvqHTK1aBx1BjE7dQYcmPtdxDeQmbkCgKPGqZph72RceUszF3XCNqVgZA94v86",
  "key25": "3YTnFxsjJdchUGDZ7gRpf9LkfcKeiQTmQuMSgyiUSLgMPoZcsk69VAtyZMQ7WXgbHRcUQwscqRKmoZJdwrW7TSby",
  "key26": "63a9aW1aPJD2Wc475myyHzMJ2DWVLnDdyPcZ8TcRCTk3z8Ad55xpLtJauHzYnhtbzCLDkBzxFfUdeJ9Wgs5zbbnG",
  "key27": "5C2roWL9AwafxoCiHDtpQdvPattV1hhB1vivggYL3uCekx9vugWPfN3hZ3wT8W4FYvUcp8j4CCiaZ6jmqtFFy7sg",
  "key28": "61RstfvCk3Cp3UCwA8cuVvRCBEeT7mS241wTubvhtmekgxjeQXTKwWpoRBoLzybS1YPDX9DVbnaXUX52g5hS9aCR",
  "key29": "2NUVJR2q9fwXZLNZKWUF9xbfDWHNNa9AhvPkk8Ugue8nz6LyMKjFo9XaSe5jmfopTx9GnzT5eBC2VW6k12QcF1G3",
  "key30": "4NaQzeLDBCVgZWxHum1dnxBmYK6n4vRuQsAnABXxXMpJcb2hDiUvCxJuem5pejhvBw1gT5ZVc31QSsV4waDbDcth",
  "key31": "373Zirjf2qz9vLgWPDMtWhNrBSnsr147rF2rsuuSRyghYzoAFU5StB7Cubjx7qXDU3Mg2GszLi8zK7KVLoiFpfgJ",
  "key32": "3GFoA259FknQkRRLQzhfvgeUk5KCapsiXfJndxtzB7vAeCRY6d9oa2RZUcEgre3Z7Xt1MRjkqj1WYdrw7kB8Riaa",
  "key33": "5B7cJftuAgpaSAVT5MEVbgyN3zwcYJ5FJQRtofySstKNgKA6hfWNRP7zLqPjSZ5G2nTwHi9GYSNEk15RsUksqu8u",
  "key34": "3jxCJ6Ge2WM5n5GzAPQ3YvrSkTjAuyXNySoEzb9YgQAgJrzBzC3Tii9J8Ttsc1eWS3J9JbmB4AZsP73abM7zvJ7U",
  "key35": "3QLyuKVmv9sdCNXxzh22qaKAFj3Crs9RC32vwpQXikfupzzqP9uvUtwzsC12xfnrnfn9qrZCR12CaXqrVs1QiDsH",
  "key36": "5hPpbLQ9ShYb8QQ8x4tBosV7WzfJ2iwfLS6kq8QSzkDBhm5RpguHoQqztjUzMoLPWBtYQPnuzNCjrevTySqEQAiH",
  "key37": "2et1HfSgZbj3xBAEvcrs3LugHex1pSUDPWwBCtkGvt6AfGpswxTse25LJfApwagdCSc47CZkZMxMFtvZM1CbSzEG"
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
