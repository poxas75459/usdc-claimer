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
    "4BgXYASH1vpmDAjPskwAAmebLoHqBF27HyW34fGyCAKhHKWr5x71r4HckMaiCR7wPBaVYUg8z78Cp7uj9G2CSENt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "waCovzvP3tooqfJVXghs3DL3vQTKZTnRr7tWmDnB8xNdG3tA1E2Kh5GaTaV7F3n2e6Mn3VZL2dodC4zf89qUV7q",
  "key1": "ugRuNnnbXyigP1PfNSyLssFv7fzkTx1qZ5p5vfy6V8qkLgYBebxw54AX235zDB149vniNQ7LzETuxucpmEAKPkc",
  "key2": "5uxPHdFfms7vwy7iAjNwsENym1vwniCEpDCfoaX8NDykz2ooGyH3UTFMW9M56sZoL2oWaRi2rgoK5mQaMSKa5CfP",
  "key3": "UVytZfr7xPXWBxkR2qRBBD8sEHkJ4z6XCHA4xjhcqXr2KSqbmPFrXinC2ARCp9J94LbwfCd94BRhFHg3V6h95Vw",
  "key4": "5aBfstSWejYu7gTcKrDjnKLXWnecT28NL5B5h2n8stEyWyJMxsL6qroDX3dawa6Jdh1GPUoMtG6GQMZqAPdVV1LJ",
  "key5": "FAN7Zq4jr4ph3NGrqzJdQy22zLPkaWu5HdrHKJTsUvtQ5i8uiyATTZVuCt3SnhpgThYnu2ucveywtB1W1RmEiqc",
  "key6": "5dcrbUen4BiFVtuRGCXq51QSiBJ3EuaZF6oBWpftkiRcrU5N9ZmjZpZ7YJz5MAJRskifC134rnmaHu2o4VTd5YUS",
  "key7": "4ATAMDzN6eVnEdQQBtP3YWNPckRNVLnN9F5ZLRDgC172Xa5XXqxJyXmteHdMfUfrpEMT2iXMBeJznnZQZSnrcgZ8",
  "key8": "2mXkKnir1ad4wD6icEWSpTBh2oXaaxoVMLP29eq7LkvsLrtRxek48gnhck3preASLQYFbT1C2yvCG2o9pZx3wbXf",
  "key9": "4TjW1vpXNnXeAebCVRPMAMMtkGHbkQAdorqPGjURYv2JVTyhHRNY81opxLr2oTTgkmzkuVS4nxcGrWz84HmXEZTP",
  "key10": "489WBGxTzy7hiwr4VrKCw7DqGPDgdeaKAMYUPExAvYum49DHUhWwQFsbxQtHJPPpjopMYX6wTtfupxgx2Gc4viug",
  "key11": "27xxsJZjZAwghRbRH7NAooCGF6T8DmScf5q3CHznmivy3hHU6gA6vxwDog25rT9K2XRpUwqVqZhYeGdevYdcLNN6",
  "key12": "3KgK5XqKZXgN2zaq5Wr5XrwWF2xQ2Kq9N4dhJ6VoycTPMeHc2TrDennVKaFnphpEba15F8evn5gwc1wDji6uaVFn",
  "key13": "5uwoyiDDMs9evtrHQ4UZTDwABUmjaS1oUjZbUbnvHR4XFGMbRmoCgoQ4mEvZajwC9SJ1G4d4HEdeuFiYHw3aMNwh",
  "key14": "5pke8fe62axvzJrDcYNfhtx7mUYJnaEZGcSrNBC9Rp58KZ9znxLi3AmFj47aW4WTD8v2TwrgWzSrHTxYvEa3bKAF",
  "key15": "5TME7ZTVKcfNmRX4W5wgQ7eRv6S3YyV4RYLT8QA8qfET4u3qVWgvsPnHsuVzHQhjULNBUX7RZxx9u2JCC5UrFXG5",
  "key16": "2bkkRrx7qXLYQ5u6F1HmJ5h6NE9WLA5Hx6T31BvS5eGs8SYurgytXV1rnogBpZDa96PqfmHXZ6dAZoSBLmV1AtFk",
  "key17": "4UZDGijfS9Gc2b2f5G892ofUJARMWDQLKCtVbBBLJitgZxr5g7jw1agyGSewccYs9x2dyqNdzytfLGRrskrzUxaZ",
  "key18": "4Tjg9riFRkEkHU1iKfHvYb6xshvAQGU7xWwQC88FLv1fT16fR63wNYdpqYU9iMqptNUNB66JbghPw9FoDtRifkXu",
  "key19": "3ZCk8VNpuv55fzX5cF4bgyhXXJEC19DjsYAuH9JYy56xj7XH8yC3zMCDyNRrGJhGiRrLbQ6idnJe8htRJmJuV9fD",
  "key20": "2WTRGrMMzWZrhMiUAgW1tcQAioFdH13kcwe91SeCLUKhDKF5L18rvzz4XKWZQEGw1ghnvGNXLTByisBLSqfuTZV",
  "key21": "5KUgk2K2RuLtsD27bFg5TS7YUrRtMTPPQtqdbJrDAjLjLeyiP12ZVesUN2ZpGAxzKfq1Yzh7jizesJZYM9tTWNBV",
  "key22": "5jmsDkANcRjJqcmeJgssbDYXV9Eh9mLXNezf7jPvwggaC8ZMd9dcs7mZNM3xYRjUKwK1G11P41dkYC4xgbrLmdtd",
  "key23": "2ro8kZ9cdVFhSdsgAeyE1jKZ4g2VHfvJeWxpm7CAKDwXAWt1UZWcMyzjW2kF3CNp5r8vgUQikxbus1dzKSwQu66T",
  "key24": "mTaTZXxpUkkQdXK2MryJNgNDPvHeHs1ZdBGUzoLAQFBkAxXqVYHD6WaXUmdFhKY9wj8fTVB13jZHF3mVYvmqewT",
  "key25": "4b7no7KKCTVV1GqeyLTswdUJCfRSHAjRXKRQEkoP1GHJUBDg8UmfTo5nswwAuALWfwo2ohZjTFsQx5haZ5PMCNkR",
  "key26": "RcitbFDVMXGcUZGMEcXHKg5xMWiNgFhEHjYJMjV2o7STacGwBWqdH5Ezm1bhBLvdo2x5QbFTU6REyoSjFSDSL7W",
  "key27": "zbHnzDnZinhvwmpmJ4NPuUQXkrS4js993mfP8EEhuouEgEHSn6R7CZDPxqxQ11Tg6pzYzerjY7RAbXcrUrdgq7N",
  "key28": "2Ht79wqmftpPa32LqVRiJaf9fa6WX5wgkCybL8jXaefcKkGVMvcZR7LYBKcXizdjWqv81c4HuvXpcyALCdtb4EQb",
  "key29": "4T9YGfmVopHhQjVPBJPCHKmd5qDo9X6aFMFk4Ca44X2Qib1FQgQKsB9rf4Jt857sFzwA4Q2tCGbF27jwMHaijnvc",
  "key30": "397UY6WuDAgcw8LXzXtcEtdCMxckwEP92MQATLKpM74Qczt4igWGw1esRBp3Y1Jq4kgyQx96KE66Nh2iJRz4Rn6D",
  "key31": "3kwPMaSKozBCgj57Vw4tQeasxKtU6sT7ebPXdmndC3bT6UgX9j74GEuQxdUUNrt6kqAvGPEPy1ByZZv4F5eijAgK",
  "key32": "27f2BkjsQYLNWfWbGquhikc9GPBEDZJufrZVCsstx1xDa2P15FU4ANT5NoYQXEmXqWW4M9jSzzK7xE59VrLxZwsv",
  "key33": "5QRiPaY9jfZRU9McgxjowKrkRYt8BFzpPsVMiwSKQunQKMub8BmFzp5ZvKPQybtabvtLJ8JP289GiC5VXeYqAM5b",
  "key34": "4cHcgvy4rDpADzaYec21aexMuMUUZDud8y5JXk96zc6RemjJUabVau8PhvUYnQuZx2NzhqwUt6XAUTvPcjiL4fAZ",
  "key35": "4xd5U7JsRkMrfbnAaCQPQY1QJ2SSQqxzmf7WHduVvKb2BTPK5DtP2iRJow7f1WwParM686cmfapHR3jDJzSyDFuJ",
  "key36": "7QqHWKgHrnX4D2jmaeEpB7ST6MwgB4WC29ga6v7rWURxiS5ysh1JPR6jfJttfGb8hZ5kdDqwNKNHGhKe9A1549U",
  "key37": "7C7WM9jsX2NKG4Kob7rFQb17SXzntW5fx8S1PTaTKE5m2QPhhyWpevxJqt5nFum2e73MAADxjsSexbCUYKdHMX5"
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
