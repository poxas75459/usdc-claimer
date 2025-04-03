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
    "5QQAkApgmUjg9Jv74pau2dBXLE1fEPE8XAADRu5EFc4YX86aHYN7DSciESM3BBQzaLAkZrRBLpoJFuPnYqo4Rubj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vXDDu4grbdwB1LZkmsbgm4t1s7QA1tRjceLp9mhtY5fcsbBTQdFMuTTUf6V1RbJiUTSK2sLspf7nxczUYPb8BDQ",
  "key1": "3MpmWJCJH3HMSjn6hkjNeaJnNyqJXnyLsPdHCez8tFVU9PjWY6ukKwDPxYyHNSUaJmKHobP3Sr1vMXYxAVua2CuT",
  "key2": "339N4NVYoHM4knk9DtDTQYK8Fty3tUYo5zMrC3T2FD8jzusHUanhhHibkfvEsceQoaH7WdiKrSSaiDb4tTj2PvNE",
  "key3": "5EM77aVdFuRJdL1P8U29J3rRB8dLLtyRxMg52evP99S1QHDKXGioU3okjQSYmAZN2hxKy1By63hbas4FBg8GJ6ja",
  "key4": "3VCR3NzMiwBNnoP2VmQ5gkKqukcFKGQWGCxuXQy5prfragQpFoW9eE5YNGndvKQAz2PwddTcHHgihrJs4X1qmH94",
  "key5": "H5qepFDFaqxDVzgr2JJgYMRXvH8arAK7HajTpSD1NmePQXGvC93uwRGcwaQkYiCwwy7bxgCDUpnhu2CgttKm4Wb",
  "key6": "4zatqroKVnJagfGLc21hRgEKwuHdukgLnzBUzbgRUBd5Eo5y9E6rip6xQHTwu76kjjDEEMrz95dSyDH7yNTJoUU2",
  "key7": "5NS7fvXCR1FpQn55NUjhkxYMaNVga7srDQ1v3emWJ1uKrPD7YVvMKZQggUZuUSWfHtdje1CPmZJbPLCBgVNNJ6dF",
  "key8": "4AVaqkAveVo3F9SxdafoeQL2hdagG7Hi5paH2VWPkd9mmHeCM6gSii8WmhUHFyejBL1MTe66maaKgv8fZMsUhjzh",
  "key9": "2KzAxGHBaDJtZoUzDQSk24sHt7zxDN1SQutVxxTS5yoRcZSEBkvGYJ4B5r2obbQWj4LgQNAZiQtFKJeJmtqK7sgk",
  "key10": "2TiQfiMZWhWQnUTpQxqNnhkWV1Yq14Lpz5EXKbVb5okHQs55SD8HyyyHbFxirhEpmLaVDcEXao8mAvMyazM5hMDk",
  "key11": "5tfFj1wSQzVrtxJgGXiLMoNJPNQ8ZwMgCEDUQZhRKMCDbuQeVCdXYKjJVCJXgs4N7TsBjidrWrYJP8JEgHi5ysBj",
  "key12": "5LpcGnvNnNntBj3Yh6knSNTYhc8UkfcUABZNn1D29V17Pi2ckaCByNQkQrzkBPs33Dr3s8qwxBhKBwrTqyq6bdk5",
  "key13": "3HB7auCV8pXXTWF273uuJKebgTmEk3VwojuSaNp4g1WyBm8pdxRMKv7Qb4dwW2SAguzMCAYVexy1Ju5Fo9AeewJq",
  "key14": "4BUz9DXfDZBZ97prN23LZA3vEpfJGRjBeaWHuxhZNvfyzwBBJkn9HfG6drtvPbcszHRExxu6ao7BqrLnxBTmTYqN",
  "key15": "4iSCCQKm1gXWRfdAkmtAgdqpVBsv8GBEkdhy8yEAhBCd2dySc7zSDUJujyaWrhKmE6NvvNZA9FjYJHcW1gNZnVrA",
  "key16": "mQkuXjDFnJq6KdAy5ime44sfaxtRcTbaL6TomA8GVYg7UyfuWXHb5dkv34u8rkxtNv2RjdYGc1Hzv13TF6ZjxpZ",
  "key17": "4XRcm8P8xSxtQrJ7uBLE6nSK2KeYee7Mcu3LzUJiMLELSinmNDh1kmTi7MSpQe8SHSUWspm4jBADt9BZ7N7xZ4fk",
  "key18": "2DsG5PyYFgHKQasen7DCu2HGAyYQbBmUXs866jB4VG563otBDiWmPWa3qKc1sxNiLReWnRUT3RdEFkUREiS9Na56",
  "key19": "27gvtQErC11yTMgsEm5GWjPj4KHj2X9xPsXG4HfVFc5J9wjvQ8zU2nfae3xbnKgZe7JMuSRRtW4EJZFxpANMdpNs",
  "key20": "4EXjxhLV6Cg9y2YLs9PQVGxfZww1zSVc1N2AshggJcQNyhMeuReXt1vcUfGBj4EZ2rNd8wPoSiAHGSbTr3XknXDn",
  "key21": "25PYF9rqa5uY5QpD46Pfh5nqTEF74hn21cKgs5LRS9AAq9nMzrrFZmGFNXoEYgqd4TR5WBTGavcUzvspLeNBanbT",
  "key22": "66ifkq83F76qozuJFySNN7ScQ8mqSrrLDnQ5EbRZg9hieBW9kUZ5Tt2XGHSdgX2i3PMTbgyxe98QCACutbbqQ63M",
  "key23": "5rji1EZft5ygWxDGgSXhRvAdUx4Nb6A2cWiS5H5hU7rcXxVqdykHJGQrMzBr8UWohCazgffvRidfudiDnm2fySyt",
  "key24": "3ev2bu6cBBYbY3MNC92zVLigzFGZew6t6xQVcK2iRZgWAnp27BNxUUxMmUczN1kyyTkH4Ra7PnPq3w6vrAKXFNzZ",
  "key25": "5E6cTbSK6o12DxqSUX8khtSCkP4p8y1bymRL6s5VnVChVVi93E4YZ43NSdKssJtMgGA6bSFfU6eC24hp4Ru9YvJe",
  "key26": "JffYcv5pxwmUE5N3P5qkyeorugFyDNpGcEqKJSv2F8aXhKq8a8nipZs2shXFAKSrdoqUD4f8sK5ZsDVVN5psMo1",
  "key27": "4n4W5yQ4DFygkFcwvFdpfiZFYmsTEUgEfWmpeavEiJsNSfnwJTmHLwhjWeLdJBjucFYsJoPD15sxj3QR4bKzN4Tn",
  "key28": "4uRcD5zKxYXNGVZ7ZHBS4C4gqBgASGroxcudMs5HjsEfAsznnC3ESqMmwrVHk3kDiW5cdASTds8Va6ysxJppx9w3",
  "key29": "fcpbzQx7RRrmWrtpYziRMmCKcSizv9uRUATNDnmeqfQDxdgqeBdrdAvQm4mCLFwuSpRZC56VWxG8EAhqRH9guA3",
  "key30": "2zoH4owHwXFpGKNq8Gq2Z5Xr78tj6AhjnnpMj2RQWD77SEbFQHBcBZFptduiqo2ChdmfbtY1CRtRZgLtEzd7bnM6",
  "key31": "5VJVJDQx32NLV4tgm2aZCyJJTxy1K8xnYjCELNe9mPSq5VB4ucJE5TjNydCLiftfH3kfqY2bBY41PmiTB85VBN8b",
  "key32": "2454k7Z4rMJFuXi26ETuxJSm1uruGhPjckVB68bxvCR9Bi9GLppXc38RzRRYDJRTx4PanPomNaN7MmdGKWPeVtMa",
  "key33": "a1ny39PQZxjHF4UTe3o1Cur5Wnv2AkqHBnwhF8pogX8aGAoXDFFXswCqNeuvS7VcrGX6VkpCbkVHD9gCy19mxgK",
  "key34": "4RzdbwdKzaayVCKqYq8wdSFVUjW87UYVwHQmh1LEirW81xtjouYuPZNaFgbkxYPeYgw38WyPvM1aMMoNbZi55UK5"
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
