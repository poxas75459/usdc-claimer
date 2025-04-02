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
    "wDuc9xw9mMLQM7XmAT28iwizxanaLpHcFUhexax6ST4To4qd9qRb1edHPki9ZEwkdCmCTnWMR3baZCDSpzNtrUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58fuiuR6dxJg197xqNaSZ6YAYdaJLJi4h4B7ngfPMrqfpWSzZdGUBVvxAUQidUvADBViWmbx8qFQbiQHbh3TrB3C",
  "key1": "36QaWymDCks5SnehCYbfXZ2TdZHvCGpvTa1a7BRAefrP2mzVFJNjE1j8KwMN8LsLQWotG3qxrFVd9sucHETzn8o4",
  "key2": "2kAtbiuQG9K8bxK3WTjdwNJ5DJb9v8wHfsUwdrSQJqhmAHBAkKc5h9Q2Hce6yUCB3DpJjdcM9ap3EP6v3cdLYXvj",
  "key3": "5zhPN7VuY98zSqT2NzxFQsTiBDekc7R9aj1Z8V4wiyZkbR9mi5vVrAPKv1WycZzTqQF4SUENnNKQU89F5Awmzd5W",
  "key4": "4ALK3hZGR7pEnHSLrKtraPqA6Ck9CQidba1k8DqjSsNANU8LvafmyWWJgefDujg3jG44Fc3Dr7eQnzJrUjLmPzuk",
  "key5": "3wTBxyLWvNeojcXniHMa5GifEfAbYVRajD2Mg63YdrjkjJ8hQyPueEUcSq5mv1Li9Zy5LaSJ7osuJXia47JdSMYQ",
  "key6": "eCqkc32iD4YHEHPPDNGEmr8j1JNKT9ZwZwKMw43upwWLsLa7E466ej9BYURxCp9QxJzHL3dBpnw5CyYrvkW98H4",
  "key7": "hdzuJ2WAsb1oKQ4XfCDfcnjoNjuFvMPbCor5HzfN47Uuy3J1JfotgESrprFJyyjhgypqRLLjvNyJTvfPWNFxk2Z",
  "key8": "43soNQxuKZL4hTxBNq3n4NGNzMXVRrKfBTewTAqZA98QixwtfsxkQUQvn7dRe91dTyMb41veox27wq4YA2eHGw6E",
  "key9": "Xe3mGkTJYgvDbUX7qcCd5ReMVVbAGBzoFY1rtSaimRo1kQv5dd2fiGDXv5A3Jt4op2HLQcSy3KnvQuKieeRNuPy",
  "key10": "66rtWkhUPfme9dT9tzueK3NnEhGJY6ehHHTrCLDYdqXj8YBkkBjTyo9zmacUgQLGeT27KvNTqwvZ9dPDHvEHcooS",
  "key11": "yvQwDxFupq8jGtScrJW8nU4PjTFpTbgAj8GBiQiSTqrUgEUHcRvioJ2qo2ipdJBX1icZdjeCW1CPP6Qs8S4JuXS",
  "key12": "3YNXmHGKhcpj9xFwbAvzsaMuw14R9KFDvwn4zkFFLjLZqGK3woxEHnNswajzq3CHPPZ7EQ8JaNWXssT9ZyMTcNWd",
  "key13": "5wLWtGFdh1FzLiEeAH2RayJUga67BgT9EpKTmndmkZEtbyp11ZX4KQ3PrTt33QseBQuyf1Z1hhAnLpToo6zrP33d",
  "key14": "2fGgnej3HFpiZiQxRSgymN5dRQPdyyJCf9Zy4nEcQ15iKM1tQqtbq6pNzFtVgUqHxu4Ryb5Xo7XXMchdem1ZyURV",
  "key15": "5azUb1EnWwwmqeEPRRCRVksnptJMVYmDbS3Cfhab31QNtmszQD3RxBXBM9CYrjphw9LU1QzUjkpMX4ZvpW62Rhtg",
  "key16": "5GC2pCsNL6wEJkiixJkjsM8ms7xyS5Geh1iZ2LCVRKAh1EUHjikek4K247cSNt9SQHTt345XGL37hEXY1wNX9dD6",
  "key17": "B1Ec7Uso7kBZdyfcmGZhjsvnLRsUH46ojEYPNygjKsuWu9afZwwMLcAZBWfa9zhV8MjvQALn1YdwntFc6ALkZHh",
  "key18": "38rb9zfg3fkiGEjnRUWDQfkN2D17Zff2Cu63fWePTgZrU9ozr8jnjm7JQz58JRC6Rs1NQR8VGW2CtvduBCJJC32p",
  "key19": "5UhYKNEpmsKi65qvTqnp18tWjSjP5o2WC8434L9cEZwbxDrAQ9DHwQRizKdWt6PNofg415X6DYxrytXRUBwZ7vto",
  "key20": "4cXJ7WFK6UZPbVU5RBL9zc3wkimmDkXLCZodgokxnJJ7ovJLJRjL75uZuG5zfUE83z3Vt2Wv7cYP2GiAiCjo3mnP",
  "key21": "4mfDhAzBkWSs3t2zKxc3VUmibT6SxW4YcE4h71QUHFiXzaNRpRqLSnxWyDGcdC5yjDTEDQvK14GVJiRQx8xR83uk",
  "key22": "3rxYzjPU2Xx4oMkFq62LNq7Hc8gqs5gc7EdDW26qdokeSvm5WcD5pcPxvVsLrz6tttSkVudSmBzK55UQFDWESxf6",
  "key23": "4Ao8QQfuYnHP5g5k81a5kAZL6TCeewxpZGR6DwSpSfKTa2q1oktVuSohMndrqR68hnbPNCie4yEgm5tC75v28zCE",
  "key24": "4RWRqPtSY7CGRYwiP19o56ChR6C5PAacQvEMSVSiKaLJKFGnMv7P2ADL4Ln9bJ3iEoL4DNWtgM8hPgPDcyx8Ppbc",
  "key25": "34PF5J6gZcu8LwGejayzSqF54eUid7g1ZxXYDv99NEjDcKbHYo85tz7GxaHcxVfUetSYiXm1M25bW9ARasJrcYGC",
  "key26": "3rLKLZcrH42cTrkEJzNYygT5uZpzACqXEo1BYC2pSK56rbNKTPJ5nBUCBPeKox91rBQPF1vqNW1tgGtXg8WvDXYC",
  "key27": "SYycwPQgUbt6tSQjvLncXteKTntNqsvr69tjQxDfCxsNQi41k4HUi6JxT91HW6Wj24PQnbhwPWPRyfckzPkAeTv",
  "key28": "3hdvLpBT1YJEMAZHFuPibkqhkAMdD1DkhPbPcey2nFrifq2zLLyXkqBznEPRADDBLv9mN6E6cUWWZyqnFbomVE3v",
  "key29": "nXkZunsr6jJr8UzxF2wVhf3Tf9kq5XKuLsU4UmRhvqk4CaYSYndqNCW6QJpHeXR5FHYtKmAvaateFAkPK1psBEu",
  "key30": "2Yzvm6BgjyQnrKgouWM7u9isngxTqDnMSTUiWZzHYdoNdR8o32F1sq9DxdoR1Yd53a2ReEeRi3VwFE7SgBjs8mAd",
  "key31": "4SLnZ1DUHHhyrjiAKAmgep43igdUwfuWcUgPqEGkCUCS2seZbZFKGK2W6tsK9c7DRUainJGdoVZhiMsfdDWkrXDL",
  "key32": "2WkEirJ2QM7zJQo5JeL5K7U8Uu8zQxhFRE6VQPo8h5BRELhMNeNXh3a1iR3dkXk23CbgDB1nJc9qcAGoyAewpU26",
  "key33": "2CQ3EY5DBUE9kEQGC2pf6iuWRHNtoDhVk4gsCAToCnWcMmKG2wtXKRjoP3ZHjjRouKAjdA7oYB9CDpUo5d7HaX6M",
  "key34": "4Em5bJyDHtNySbCjmc9CjsR77nYuuanpVNV4gsVBebAGcfSySUs31ngJCjy5tU9JpVrD1j3ktNzV4f9LWM4xBdxL",
  "key35": "22BuWESjjT5RjeHQxqEy9LrfFVER29n63xBrnQZRPWxwD5FFrRiTUzNuMRs7Gz69EWv6Zbr9EybRgGZafXd9sN3E",
  "key36": "4pcBnRw6TG727f3uUnmsWwxNHRgAbSV7E1pNNr4Ch6ebsfJp45emxeKDCfjJKzWwPZxWJQYhJjdbC4GiJ6sx7NwC",
  "key37": "kwrFuF3kHbYKS1XvrkBgy2LiHngBZ98pUQ7Ld8vJ87rNtemnBjRbPr8FugPTrmwAxYbYFNmF72RxP9ReVCXKiYV",
  "key38": "5L84LCBLjGXxoH5SVn7mtYb1kLsc8BZuxoKsFHL3XcSrDNc6sUB5G69nL6gUnR2L3mewTDhfW6AbeyjBbUbpFi6A",
  "key39": "rhVPtZYMwDmwm9pgDYnFGUvmfTnppcQL28kSZg2rZXyyL5Kr3j4VtuCUiq8BaurLyVKFMk1wAuGaoY8UjBbSPTx"
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
