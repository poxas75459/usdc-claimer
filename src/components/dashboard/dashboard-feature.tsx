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
    "AU4oXtMMPssAvX9tTGdBvrbY8tDVWvsuMBpZ2DDd2dtYjCL1UCzAqCTa78xG1ZaoMswfrgJJegv4cR3G5CpU1PL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sUoqFM3ztaNymaGKwWWMqACh7J1ULRpTTM72AhoB4Ehhc859fHn3B6rStiWUZ7FA1tDM4myMqV9GmpQTVk9h2Qe",
  "key1": "4isyLXjiHgAeFuzCKmVJddv8xkYpKU6X1Lg8tm3TuTR7DuFkqZ8DiSY4h942fQ6BZsUyRQvQCfV4g6R658rNwoQh",
  "key2": "4FDhjW4mcAxWJugwoqZdiQi92e9qgSDorgpntpXJRMgknQyHoynZjyBFpd74N35KJMDy4A15wx8A18vVi4KPmmEo",
  "key3": "5hVzwW8wSHVYy3x1d3XkBcXpGrHJh9xPyNxMyn3xbk21h18aT9Ymt1S9vTRCWwVyhyjzmEHSuVrPiUQsas9MBYCA",
  "key4": "3TTnV3vTnBVYXvzeH7ZohHojT785RP84WsB9nLfzDMiswJGMBFJpKCRNNXAQJLHixBYiYHp92Jk9ePHsoP4pui4d",
  "key5": "DUaKsFc38AnK1ir8UZupZP6CFCVYf7BanQZDRiiX7VreedgDHsvJbMdoEyGfARgS9XnBLdXE1XSTNaxiqfQqTgF",
  "key6": "2DgYgZso2yYQJUho4y1q99vNuQgASho3wZiA38FA7km6cE8E2o5g7iiRXxqbAZZhudvxAs9iqCE1qK1KHAETT231",
  "key7": "3uD58bvHh3QYfCtUwfT9K9kxS4u1rUwFpHF7kQ7tNTRAzmZcBnF68aqRFp6PgkZzjbhWbtvY7Jq9QkHEceXuCzg2",
  "key8": "3TcUkTZR1Qe5aBuRtq8sKRCTHVDwVBJ1Mw5xrQnyyTfdTSXidveLBPv7hS9QT2bj3fHrdVqtzpTKqAcHquVgVMxS",
  "key9": "3aWGX1hfXQg1cCCZJTnn2FLhzsKgbDTwXh9Jsm22Q3rb7ANVeqQLJNGmxVxkTV4pxniyEXyYq26gzguY3ryJGhtP",
  "key10": "5K1Rqdx1vb3n5d11hmLxTtGogY2FxrcGWghMhrtG3jSfGMHiTDiLEeQwmwBmmzCAwa6LxxNH6CzzMpA2Dn5LnobZ",
  "key11": "2dxjtNKRpwzPcRro3SkQJsKVHW9NaTWjDJJvXxxB65C4S96iBaUdGdHK7XkQv6AseHaF284FsjPC4LyAFh5RQLZY",
  "key12": "5uSJvrRcDTEce3Cx8Rui9vBMHwKbwVGkqtGVfbj1wLKjUfv1Db4LTk9wqR3QVa4nnGSD3uzQ4KnGuJDY88pGAAT4",
  "key13": "4xfjwErSdVeHmwNYBwWdKn9cdHrMnvU49WwtqGLyqJ2TQFcpiVRW3mxh4DZi71KozfS6K1ieriEK3cJrWKKH7BH",
  "key14": "2tw6PevxzpwcK8y6EG2GrTxSoHmjbhLZ2uFNV2izTCEjStucg8b1X5gWPkmLCBjpH7ESXzxYpPWnsS1fXmM9GM89",
  "key15": "4De1MLjbvFAWtNQECfarC1L735T2W1T95AQM6HzffifFxA7FGqRKMmra72EyUs2Xp2AThBewukK4bvNWdndPGCns",
  "key16": "JQeDFk2ukBEUc2fKobzJvKAeUhNB9PaHXLnmyB853T7NjXwxxr9VfB5Yb91wSr2ofZbzNuvtR1oJaaJFfqKEueP",
  "key17": "x9aRSvU5ZZKuBVUxybyBSDKdHx4wnUWauD6HB5kX8dcNs34L6UyQGXkyPcisdFpwRrCm4A2XHAKAAEKxKeERvFu",
  "key18": "3Qd1bDW56iAgyeyFFd6QziFCCrneHbPbF7PiL1VWRc9qNoeiLLL99d1VFFsF5vvQaNHsJt7Mbqfzvhp95SbHH9u",
  "key19": "4ZFbPm8JYiQSJzapFDLzXuauukgM5DYaXAmbyZnbrtJoQ9tqwk9FnzuiuwJpYnYLnRur3SKevVsXyxLam8pAiQr8",
  "key20": "2svMe46GorRUZmE8inMYv4dc6tRp2xDPbxN8wvHKJvDUaCuG9ZS6iFBVz34qafNP4pYRyUEkEdkku1zMpCxkeUDB",
  "key21": "4cGu5NpDeWLU2oHFTTBGCBiEKK17btfNFbvUVKi5KjwaNbHHWRKHNpSkJNnhf2QumfNvgoB11TD7PD3sBenbZuN5",
  "key22": "2qWMtY4svYVVTH326XFHSAaho7mNR5A2Kio6z9ezgiPfX8dcjpn3p5Vr7tfQLu7P5dqwPnsTn8MmUFnzUj4cTsXG",
  "key23": "4cicFHpa1GCUTFgPjLJPgzPCckjcjuBVLeSWrf1nUBDMrPpJQPM219EmXGRMvCEpgZ2BHM2ybmaFRB195C4VqEpT",
  "key24": "2XmysjrCqN2vttVNGSv3Air5WEYsvkR7KWdxcDqYWaQA3HDLAP25At52kKfWxapo7gJHin83Eqv3sM2RyAFhwTgz",
  "key25": "5uAyCATSHmtYSsu9wq9FT6vxvBKUw5hhibuHq8APDTQeUzuotFfgZQ6NRke6nJ563TZxz9qfeupmTCwmShmgyHtR",
  "key26": "4YXDt33WKH9F2AvyJckp67FLHkcMpAzxPE9NznMpKAJtEVSjvPQsZu25QwoCCuXjHvdLmmVNgQDt68fUbxhckSsh",
  "key27": "Avga1SPpNYot4T8bZ45HA1YGD6JZrEGpNMvJw9iXVFPD8XySMoeJMy4i8NCWcjeXb6imYaATQ79U3q1v6yEC2TG",
  "key28": "5iQBoGgKg29CphMmghc2UCRkcMaH5tH9u5qBAjWEfbmUFCyQBX3iMqNM5nviTU1LVgEWNtymgyicGC3gg8acjDu9",
  "key29": "2UeLXUnKUtZs58SbX9NKQCJ6RKEQBVdyvjoC4Bc4gXwiFEjMHAgQhuLr39LhAGcE3xgHQsiJD8kdkviydGonwZK6",
  "key30": "3kSZMg6WApDC5GGQc5T5Z6QfygEcJnbBfkErjhJbnaHmhbrRQQEARP19rtVyomRAKipbruSvV9QYPShUhMYDqxvN",
  "key31": "5BZchb8Z5ikDVpyf8CA4y7pnjddBTqfz4CYZEVvZbSj3UnJZV8K3B5U47DwekMrrTgJgikaCv2h8JjAhhgbSqVdb",
  "key32": "2oxgCa9roLgJ9oUer3nUYuBfAM6ohsaeptxXzfmzxmsBgvbu5wLd214oLH4uaj8XT6RwSzRvVYubv3eFq2o3hCZB",
  "key33": "3nX9V8p8Xbr6898odk2UcZXb5ouznfDEpqmnWUumJ3UiHRyqZQC54CBd7XjZvwN9RhZp8bt6ffqrmS6AYtkpN1NW",
  "key34": "kHRsUY8mFXXr9AVBBnCQRmBcn4BDJFkY58ew1cEhZDEYQEtpjNzMi9H32KcBkMmF26buEcH1mAkVDEPnBAU498x",
  "key35": "2cttd8UjbBBiYQ6x7o73vBbpZXACX9eUiyxN5VGnY9qCZahNwHzF9SVrEsLwNyddjkC4vkSniq1zHCCSXLcoQju4"
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
