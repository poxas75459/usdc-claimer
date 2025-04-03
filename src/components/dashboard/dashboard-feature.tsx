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
    "66wJSMqpuPpriMaqv3ZL2cSVKC4xvih2aSZDRaKpgH1ZTs9V8E1AJnNmDFMNh2tiB6Pux4qx5e3HEpyq5HyPrJ2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gozDUAY9YshiEWFJkBqk5khuDvFevg7wz8BRXCwLKQ7FcB1iJX5eYFg8tQ2JXjosGuzW7pKS7dwRKKPH3v9GBsg",
  "key1": "tCFu5irH1bFdvouq6ZmfoA3XNPpGj8JS8TMT6dSHqYvDU3u6H5rhNjpHLEP4oqCz3whKCKVicX8u68mTwYAbvtK",
  "key2": "31eMKtTQDoeWX9sstPHCDtSumozfNDW758EuRi2qJEEmxsCUqN4vKNNYygYMqmZf9ukFm5tq7UmNVyJ8DY5bCJ73",
  "key3": "5tKCz2zHPdThqzMTEWKM85FkqBGhbpxfrr785MnHTwHp8yoQmmGPXatcNHYCaYZCXVPvbgqUdESDZQY6823o6qRy",
  "key4": "YMgCf4ndxCEz7ccAHiscDo4eyCsobwAYjrdeGFpUiqKugb6cimcXk56BxuFhcKJ1oyFJ1wsYYQ6Cx2XAaH3hVYR",
  "key5": "2h78barJULMyRsDgu2EvAMbLZDEQFbAMvMgLhRxy6XRfxhM8PSPQ8HRDYvA2QnXpzAZYrG4n9CyB8AUMezALdbNH",
  "key6": "4hXnGtpTn6wfJtv91vcUvdgmXQmZ8bu4mSiGQSvxQNnSujQpxPdtzC7Kd7eesgob1wCSEkFruncUqBdYQ3DGhMDn",
  "key7": "NVK1FC5Qxk6pM1ZihjkEzoSbCgvjB9PLhvrtBPL4g5fSW1FNUMWPxFvHWMBA1gK2bbpNDbYKJs8mB1ux9yhg83w",
  "key8": "64Yuf6SjjTq1phbHQq8rUZhi2FN6J4uLZVVgqhDqmWdsULXWjFuSguLvYF8t3gwBcZgKT5c69PKkkNUZA6Wa3pBV",
  "key9": "5MZWRhi5H3dqWBCib2FoWDaT2jbvYJUqg4LyASSEsV12H8qkFcVyQjHdrME5EW3Tw3y8QRXewHr92g6nP31ncVRY",
  "key10": "4QuEnqskc8z99aqxAgYyzdLftQCPtDdqLfVR9o2BSxTHUXf6u2XEpkSBuiBdHBbUfg4ezq2We5KxJagbaAtiBExN",
  "key11": "2KHEJjjNGNryvt5NQmKHhLhosB98TKvMoc53NsgHrWM2Ghmuc1uMhsXwatqZdy64PydBJLry96uV29vAdjMG8mBp",
  "key12": "3HEw73AshqV6XfcisuTxE3yoY3xJcDDQDDzrec5BFXE4KEkHawGE7zbKUtmEhY5YzD93ERzpJ2FGb2r5DPBCEjSc",
  "key13": "2aqYG5Q6DPoEtFkBX9dCT6Xj3Nu5YmsBJzkK3CJ1gLAFGGYSYZeRxN8HeX4ZuJAULpo2fyfwpYoPRj468oxce29G",
  "key14": "47kauUpfDW8Hxbdbug4K2Xvx7dPFy9H87x4D6b8iQdsZEvfC1fG3AKNm3VaUuh5oQaU7NnnWDQAbuzcxRWkNtnF1",
  "key15": "beDGkgGGxK2u5zp8EPjFCzHs447JMdUuXb7QE6Tko4Ve9P2rRBQiWBWFEuZQJpVmQeMA6wkcQNPEBQT9eNVqCaT",
  "key16": "5BUpyqXtZBG2cAVoHzMPzQSBYCKXMa8wqrvpVFHfqGnNQkVSqaRNuVNWPMdcZsQ9jyw7xDGihXTTk8ij3DnoKVhq",
  "key17": "yLsnQvtqtNKowsGHLa8gazPDs7nUc9obrFKfoQnQCMFSEKswsFjTLWBiKhghwQaiDXrEjv2hmFPAaAkxF2v3aQC",
  "key18": "2PVsSSt2axodz3tu5Ue8xXigP7jtyQ5tqahgAxcp7CmjoyoGmizPadT1Fmr3AYxNa2uE77iL81PuiUP2ezJXD7g4",
  "key19": "4mnnCzDqiJpfJBFbidyidKZNCQNaJQExqfK3Vpz7vrYdnBBz8R3YQr2Nv5Cc1eUtNgzhJvvVqJGR9aJnVieBzVDs",
  "key20": "5EeB1WDXcB4XPXJ81gavLq8UNnH66j8WJjTDLT8B5bS7TE4vdNkMxU8g3TFbS9V49roMzXDzutGbibkru8WtXJfK",
  "key21": "5ChTxEwFdobjBs9ddNCRvK6i9mRG6hqGi9yTwroWJShPKJbL5Vmh2gwFdMXaZeFHg9vyp1k3MdaTbciPs67vxzq1",
  "key22": "5nb8Vd9vQEkFjPQ4PiKfzaBRYXXpTKWj67mxLFTEGu3iHsrosbiXePwTog8EEdFyzyPZpvWru7Vmi9vhAZUSyorv",
  "key23": "4X6ZiG55ek4EQV7vmM2zvu4T36DxCBZhzMgzZjqqPG2xQV6xEr7kmGdZsDBE8fUyEA837APiYwsqdhC2axcrjhx",
  "key24": "2qsEWYyQgJLqENMbb6PTuFZJVUqEAXLwW9poNp13MnQqMQe49yX48aSfJiZkqXcSBZuRakEE9kyGWb3fa4UCYjMh",
  "key25": "3p8r5rcoEi77Yv9ry3UsmQjoJ6NgVRH5Pt6reGXZakFUzt7xgZGbRsJYwgVixy6WSa2svhmC6s1mmJ1fxZ4eLBPk",
  "key26": "57Bsfc8c7Yb1ymnvjrNfskPpDnJRzHvQ5tuuceLVRXVoMQqYLu9riv68PFgdggiBS5Q1tBd1T7Pj8JeFzLKh1hwm",
  "key27": "4svB7HMu5jx6TktGVdHfMvK2b3YMzPKrVzGnbgqAJ6bi19rwewCDu2EhqxjGZ1jVxoMK51h8spm1q6L2ESwEd9nq",
  "key28": "2oiTpKGLqze9Syq1xQ3YGVRJrFgdFrisbTsGMNPaNo1fMAeNGqGTEDLFAGkGqBGtf378XHKv4FpH5i73YSso28Ac",
  "key29": "Msz4HpWzMKWciHqad8xy8GeHaBgh6dLjp7WGStAaW3CyQ5iEy8dLNx3LiqSr5kB92BqPjnCLJYWePLTrWn5puuD",
  "key30": "df844XLxbYWiLV5uNnK2sQnMyMXKKeGwdqtnKf2EnpAdqThPpxB9KvHm3x87sa8QgLXJztj5XscejsfXewYY2Nu",
  "key31": "i8Ydj3kNA1hfdKT4cAAoR6yNubiEDdjyXufoStAdc1nJmxm9Arzp2B1K7AE75WrwgVny7aBYa9KAmLp7P4teu4F",
  "key32": "9Hadn91VqWUZWxEGemXLLG9pgWK3s1pT64LVWmQwDaJXP3GjzgGmivFP7tK6xA5HmVfK8WJaU5TUmsHQFQWsHao",
  "key33": "5hZLgwYMK2pCx9wM7y7C2MS9PDX7jdCQTePKh394uFjSoNypnFdZwyifTC7K2Cv1cFzUqLrnnf13fVFsfGWHgPs4",
  "key34": "3vUs9UvLK9JtT7KuBMse1Ed3PkqYoXXei43k567Gqg6eANTiTB55UZ4egmKTJpa4vEfyeFxWq5SMe8qDvBR5Y88H",
  "key35": "3atSLgAt1PVSiDjd2kEE6UsSpZed11GxBdUWygLNuAyCfpSeL5sHkhHq34LCA6u8BShjsh34JqwrVXoBxGKyeWVc",
  "key36": "3qryn2jY6We6RzVLXQPzrG8ERVvJLf7CEgxiKGuTLexCsaPPAbz6AQG5C18Enpf2NMJ6waHF8DxdjMxTLBQJVCFx",
  "key37": "2G1954CZ5qy3wps2qQ1mQHznkmvW6SUDiUsQxe3Zfw45HwDyXxUTzkZHyCRewAAUi3vQz12rju4RtrLYBz3oKZmU",
  "key38": "2TsPjk5aqJDn6K5wUdiWdUFTb8cVsRemmKhvF2smYZLtjkEQNSCtoqNSjvyaiSm7rEJUwmoaJ1kqntaiqW8civXt",
  "key39": "ghyRWBjG5afMmCwCs67wvxMg4J1wSQWSzA4AULvBNEcTk1H18kmRhzM2T5gNoSnxgWRg7hWspBznyZdYNhcSEWH",
  "key40": "4Qr3iTp1CmsPh6rCWbqaNqVkHm5uC4iFzu5eKnMJLdunrEJS2DSqAwe17qkdQ38nkmpofqsdf3qSVH3r7ra4z4VY",
  "key41": "xhFEZSnjaLq4LPqRrSxbCttM1EGM2Wydroj6DFcDfwSpLmEuWb293oiZwyCHJvZTPaL1mKtDMdh2Qv3EAs5h2CY",
  "key42": "57kM9fRpBjyafyeVTN59ckeihohXHqteACWARD6it582vtV1hyqdzbhof66Vfn3sUzXyiYyG6p5EToZUZjsUTmup",
  "key43": "AF3QRAFWQyqkkKJxrgnnSNj82pgVohTh9vCbqiZxqKcT63kN2cFJGzrUbGJdpg4RibDBbdyXDZTPyaFZT6SgsKz",
  "key44": "4hXSbQ9j4qevANpyFRBFWRfRPWxJkCXSBoSct1j822KeA19C3an2xbVXwxB76sYv12fjjEruzNj6oQ3tfRQWxSrC",
  "key45": "qwLKfeVRZjT4uZwHQy95Lui8KPB44VEzxuureideghagrjcbxPw8cFMLaSmZoY4mCKmUqxNBC9QUEbnnWkkDoen",
  "key46": "5WFew2pMSX9ehmQe6Rm7oQmxTyTpn2JMrn4KVAswik6FSwV7oCupYHKN55jTzMHCR4zkEgFHkqj1qdcbdwcJ4GSt",
  "key47": "5VPGzX42Qi8QpFXzRzvKPQHh5b9uscH8eDQq8CzWYSHhNtc4tCkMgk2gjLihTrMaU3NFnYzvoiuo325HhcYXhyBK",
  "key48": "28Uq9nb58CVgYpX3kzgDAcMkq1yeEX22MDkNchDfbqW4qU9tHHYm9pZMnRc4YZbKxKVfvs4y3UfVBgHbHhH66C6n"
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
