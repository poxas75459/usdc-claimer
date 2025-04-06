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
    "3Mc7m6US2eRfcKeHS3MvobGGgmR9Vp3ncegwmTr7aAKjjrGDwWvdsW68MZo4ZTfuntjaXJuoNnLqhioy1PoYJsNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ne4xc3KiBsiuwf5k5RSmeKSZh2UaRuR3KrCg2gZZXn8SiBTbSLSzoBwUQBKnFGUVaoaEYjCaf9jYjfv86Q7iH1c",
  "key1": "2pZ4ucssS3Qgz5bhiPX8QrQefjghD8RHPC32LSqit2xSuRg2yGD6PbTHwhYKBpfDupLYwZ3rBeB7DYR81zEhjhbn",
  "key2": "3XEUjJjegHrH5vGAy9A1xzAvcXaC1bs6JZ8rkJkuLhZaCqjNCrEDCsCN1fTaa7VGrcLnREwTwDk8Tdfew6RUrMEP",
  "key3": "3GpAV41783fFu2wXS79TKddHxuQsRPfnkhh8YrZg34ouUvyTuGVJkYN5AkZGvwxCwHZEJggQFdRUodmkfGh8BaZY",
  "key4": "33fauCDwLL4xo9bvANETxkRUYJDqC4kpnp3kejZbVRngZR9aKUY5xpxdrAJuNccuhBQYMiAGQbATvDshYdkgXhDv",
  "key5": "G8vxFqGwjw3wr45gJSVYg2Tto4jbNdFCs4GkYTG8NUQdAork5iNAAVN5wAZAY1Po81iWfQFttCR4SCf9rVEH1LG",
  "key6": "5avpsybrPEugLN8e7Huvm9VfMzWpLX6otY5k6LTBwAKDi4m57iYKcyT3w73tMEZYb2wmT93xtNqiKyTYFVJdNBie",
  "key7": "3eY39RiEvGYhJzPh1T66e8Xk33JNbKWWRH1cPG37anZ1DFUuPGVhdQ7zPPcUG2A5zE8nbGDSPpBTRdMqxpRLkzyn",
  "key8": "fFhBBpBVtmT7ri4tsFdo7jo8Xv7fuJAz1iut93KgbfHtoYmWLNMM7FxoQTUT3TYgGC4PTYB1K9eJunHXbDfrJLR",
  "key9": "2kXcb7HpHy2LahXXdjwYR95GD9BCUyLsb7y29AfVExWzN2ZFvByFEQFtzkoVmECnY1gsN179SphsKTPDG93EiGC3",
  "key10": "67Z9Qh3w83j5px2sGtV9WNiVYuERXXGw3r1gohizrYKaJzN4rFSiSNA7fTtDWkdbiQAKJ9hTeTBDeShiarNZTeY4",
  "key11": "2a8TBWtseXLs62asQyMbieSizJrfTbQWA9CT6PAe84uuZo5E3KNdx7XoRUZWNrXrd2B65NRWQvpCDEZzzp4hjQTE",
  "key12": "oueya41LQTgKsNTFBFfbs9zqsaBXorVW8J4G5EscZ4a29bJ5aEbgYkdoAnDik6wsN27aQH6sGp2AbAoAmwSbjwu",
  "key13": "4YYE23uanhBUhub5iqrqtKYAEBvE7vBUpQvBozwzu7EDq2ofEujPMYb7NgE9VkKakYt6GYkDwvWp7WMDwcKJaPK1",
  "key14": "44X34VFycaMEkA5CUq2ZhyDWcaeUe1wC2DuwH4gNvS17aARmEkD5Utf35nCYRnKLvu8VqG6jxDa2BagMoCc7qHWj",
  "key15": "kb5scA8G8aMFpXKCUz4HX7CUWnYyKe3qGtgA7bjT1VRNhnfGwNnCKAkzMHHSmstUBMV1ujPbLaEoKdMvKDDeNyr",
  "key16": "JWviQH17UEC7Gfu8w2as2bX3VFRQCVeftdgWqryFMQiBecQ9bRoozPUZC5PULaMmzDheLtZMjJE6KzDFCpoKKmF",
  "key17": "3LpWnTKxUCzg928jxfQQNAxakdVLDQLFBBix9vKXRaD2nmxFgzgEwtvGNQ6GNaqAAhWGtAEbBbLHSVjhe3xUNxMV",
  "key18": "3wXQSGsCpczM8QTBk9MKrKME8duAHthfVv8PZX6sAvw1s8ww33obz2kibSU6uwML6Bok26ocPuTh86c5fZmhiNsE",
  "key19": "3sTNv6KA9uh1BBSp1gRCa6s4LDUxJd3TVkveJNsuDjbXsdHVzNRY2W9BKHNWFE2HYq23gLVdYroDiAbmT5VGUwri",
  "key20": "2zTrSbvqRfDEJLezdDppvF9DSKeqYSYRgBZzf9j9DaFUd38hLz7d89Kqa12fid8LzJNmpCSABq7uGDv4WkRhWZWm",
  "key21": "3gsNwYxqtxSpXX8pwXy6JH5CQHtbAJccHWTPq4tKBsxna3ffbAg31TxG7vDjUcUc4tand7cU5AkLz8UrFPtVP9Ls",
  "key22": "dk31UNMfWHq8FNttbDu5BKQtxsgxcatNbitRzo9sqTcfSu4h17EomK8s7reQGYf1K9oaGYYqd3Uyrs6zJ3bkxA3",
  "key23": "2UQKmnoqHwYdoLdfAwMpxWT69jNPQi89XpLf1vKk3n76zqPqaGugSGBkqu3dHcXqNb3Xk8A5CSaJegcTTskoYZqp",
  "key24": "4ycQDb4x8fVBeXm3RXq5enDQA9rWd956ReRwH3FRTPzMcqYjmsVsKZXzxHDDxzgQK1sK8nYLwT4ss1J85tL6frSx",
  "key25": "aUBXazLsWmgT9uktm7efUBYkSZmCR6Za6mKPiXzyUuBsBxEPQv7hEoitmW3E9533QptQWjZP9DFMHsCfUNLkxmf",
  "key26": "2RxxnkLKKDXgXWwbB2K1eXvXf9QpGVjZ5xdhTv7YVmk8Zdy94LwJXuBUiHBFi1RnSUxXc2xC7eANPmm4qDdGyRnL",
  "key27": "3o94K9CbDCCW2fJX5fEM3QezKWMgHgALC7g5dfXLstyYJ19GsyVnrUcigJ6MGrW7nh34aTFbdf2Udfk3hhNS6woW",
  "key28": "5MYLzNypinLBTz5odBGo43LyH1e6uE8HDteYntq3HtqDhQpqApFh82DnnYP1LVVsHNvau4dkXY1HrNJ3L4X5zYB8",
  "key29": "4fBHQNnxLYuihLNiRQawuGfKuUdxjwibbrQqt2DfmCE8SySmYX5aZWNBCTeWHuR8gdpTWfiEfqRZadocnjGL2YXZ",
  "key30": "tDE5uJTL7aEQds4kkXqhFZeN2DjKiXgRxMVHjjeWtke5pxeBxQQkyKtx6yNftjwjAxsfNTmb5Woodh35We8pKuy",
  "key31": "5QHkJsWsKZUDRSdPuJCxyp2DJdEX1TrcFf6xjLRd1u6sTeqiAL5G5ZJ1QYCyubPFWSaWF493g8MwAghW5vg3Vyym"
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
