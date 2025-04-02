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
    "5KLG4J7ArzjcPrDTxRENyn4AVuCvUkYeVScKBkuQ9XRrQ5s8AMNXCt4vRRNCxKP8Jzngp5BB5BMWXDfpoZ4b3oBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t6vwbKrMQoNTRtswqQJVfG15Jp9CrcBeNLB7M3DvCbjqSUgmBBeXPxkVb522UNKcJcZnsgFuaMugX1ks94jvJ9E",
  "key1": "3aqgs6J3jhkBGtJYxZSrbwdcFbir8zGAiaZ5aT4Ahm52DD834ra3MQey5kEWLAQGC5m47bKAJpffbjduBfbrxpbd",
  "key2": "4fuCRwVXAaDLwZc5rmXnzmLdJHB9GGDwPPGKxjXcmQSDV1oYtJpKWMH5nLdLqGoFxRVx59vw1Py3bmJ2jHjdwbhE",
  "key3": "AkP9Tpaf4rqmTuLMpUNmyUqGFzT6fqGfFeobkX2rmSWVNHZMsJoqhTovFZhGfjfts1p2noy11NWU6HWUFLdBDcs",
  "key4": "bwMVQXE97LuUgU9XF7RTL6frwstzh4PeregQhTc8TfY94YcPUhUFuVqFCFgsnHNPDW565T4af19TmPKA6Ubo7tB",
  "key5": "MwYXN65CXmZLTR28NZwShaNQdCBm97aMfLuLYv1KoszNsqFmyte8PJjP9NZDrvyksfb3mkM7wjFYQArB1rmbwxD",
  "key6": "2XJgtGRAedWdv5ZWA56tHC2r1H2YynSNQmuPnpz3zV9mYNFzzmoRoScuMCSEnrFapbeoqfGV3RpZS1NYTqg62yxz",
  "key7": "3uQhHK7TuqFE4vA3sBj2jT1qCPMQQgzXiKPjhPB9RK6ewfjkhBZD2NArr2UBJMyUbmE8QRtpKXMLNQWESXbv1ZYi",
  "key8": "3fPvbxvndcwiseK99QFxK9MxEftv3VZ1UaQDcnGzznXGDNdBiqe5KNCpguSvtw1RkpfWzFJXKhqgBAZ9vCJBvPrH",
  "key9": "5SUSzJRtnkiS5AvWZQz33SvWbrj1EX8LuFgsv3QT5i1wFBJ6XPYZY5u2D3ErnNjJmp9yuqNLEmYU9cY4958Mz4oV",
  "key10": "3ewuZrYJKGGwcomSdYZuxjyePPdtMygSisMczTNvwrHP1kS6fUMjwCBWJ64eyaK9aTAEmayhnP39oceWvdggEJof",
  "key11": "2q7TL8Q7bzBqc6GHHTzHdkFDS1DJTHxxEVEcPczr4iCeu5Figrx39J4eh4YJpQwWFuRrnxhye1BTqCWLmAisQXz7",
  "key12": "5SKrf6sHPECPqrJcWJnVUUZqQxQyFn5uMLF4PCS5nrDoRo8uQePiAzNB6LTKZ7R5XqGUhMWYpc2MC3xaVVxPWZY1",
  "key13": "4w6sci1h5GYRiUReCj2EhTKyC8Ce7cj3NDCMSJJnVay8J8ZbwJTvDPZGojKvMWmc5h34RfPLFngs8aYebQiKK7hE",
  "key14": "4EoCiKv83WxAQZGGgmxtv31o7gWZhtAsqXvhesocayaQhDXZ48M6eAKK8hiapFgHW1Tg1vt3oTrBU9uAaFeZsA5h",
  "key15": "3n9tW6WYv9peaGHXL7ttnafeK1wkAPufKymV1v5bzNiBkzdwM5cnoA5xFeV27jwY3ndVTn8CU9XX3m7LsXB2PBfu",
  "key16": "MP14KHisiPajuqBJumi1LMHufBpQ9bbVK7Xba6RfRw3ceMCm8UjFegEfcmZWhdiEmrsZRvkFja8x7gUBYT3Sch8",
  "key17": "KyGRa9phvsNSid3AV1C1TQcr5y7psvgKAb8ggy5gUSvNH251eaF5n2L6YRww6kYiWrLez3cnGgEftim9BnXYmc4",
  "key18": "3Ty98JXcS5XEgBGuRLRKhqvtRzCqnB4PxMnQr658AUKrHJ7bDdaKgnMfjErsgc5wQui8f2gkWWo2qj47H2FLE1Ci",
  "key19": "EMYLH8WEhyZxQPJkCbFS5Aze6AZiDHRFkr9WusUrf5u51cnwD9aem3AaVYsGdeAnGF1qEyVaWpRHiqVBVJaUyp9",
  "key20": "HW5XdNoDEpoGqp9WMiqbJ72DaC6nJRfdYg8EKmadD4F3gYqy4oEmTAdva4ZvqgquM8hD2eyr1d3gwha4TKivNuU",
  "key21": "4CBWzLVwCc6Rgg86JVMPuvKqHCfKm5NGgCJmXrD1C86AJNy2M1TjADa2cmXpjYbjGzm4c92T7f9Poj11SRTZaPsi",
  "key22": "4sRxj4c61qWN72NXsWugDACToZT6VsP2frToH7L8vUbDWnNjSnRkByXReLaAJsJJFzhFAqsWxcd4YGPE4bNh2fZa",
  "key23": "3XD15aLcVgj3imbiAByQsANpwTZ85Aak2C8Z4nsJKVB5DsMhiJL94UEEynciJEqZkbkQGSCrNigwSCB8Db3ZMEjx",
  "key24": "5it3Afgm3k3DGA7MVdsxVyniRqTMxG7S5TJtaMjdKq2SY3H2tG3Yassa2ySFxUmM74hDoVfR9RzP4zqiYZN83SoM",
  "key25": "2xgXUxNVFEZfjPLRjDGUadX4Crk7zbRdjxnRhdzHXPJLSfkC5JYUajqM9KQRL8L3je89XXmSs28Ceez4HNzuJMML",
  "key26": "qe9rYduxv2iHobhvBRdc96aTKLebJhxzTevCfXnzYST4e8pCiC13Ng9dsi425AA2p7hZbnfkQSCZhXWSaPMDFQ7",
  "key27": "55fC8F9eXm298td9zHKLZSnp3a944dEyZxy2Tn8DmUiDVFMwQ3LHxvvrjfGvgPrDR1Q71HmgmturbFss1jR55fvr",
  "key28": "5rn5Ngm5MUH9oYiwhBZa6JEgUSRo9kdNJEYf3WEvVvZyizq811LTg39AAuNhgoyTyggHrXiB28KDQ4oE6ojqRumR",
  "key29": "2RmFbrWxvpmcQwVXR2xfFgncyG5uEEXtv6WjHYK8aTtsfSyCFyPycxZCJsSSKU5FH6hEtTxbeBLHAvdTjPKfmxfb",
  "key30": "3rgAgDBcWZTw1UvXZevrtU6vxgt1HH4tEwuxVDLkbFnsyb2hWp9k8o2RGbcsQFcK3TrkwjcgULGUWxguF4Bj9TUQ",
  "key31": "2v2VAiuBpyeFNUTYbjMYeeJtEZgWc1HRUdgrrjRPcrDB17jixVh9PwC5oC9tur3TQm4ErZs8EmBCArfRtKTedWke",
  "key32": "42RZWxpH6tH3A3DzW4Qt36bDKimGFhxoZvnE8sMqri87Wmi9WZZmUrXEnpF16MinReXz66n7Khfx3i8WA8QmzZpW",
  "key33": "4TdNjTbctRifN97njQ163hZkPs75wSDv7rLi8CtvE9NCf91m4hpSh19orxHAUoJS4ohWBU1gWPdQYVxGt6Hw47Gw",
  "key34": "3soKXqEFzaM8fgLc936PzUx8VqRuZ7komtKHkAc5RaVXG2G74LEydLKGBoWoKSEbS6NLXnBdDJjj7oBkWjwLCuk2",
  "key35": "3L3gWyXwCe8ptgm4vcjcnYpACgo5vuzqktYAYT9jELi7NYudh4i2t7qxoekXABK198HeySmHA2SNtHSKR53n8bQ3",
  "key36": "29NmdDBBYnrg8pTUJKN8hPjvjatGtoM8iVBBo4eYFYQurzzUwoM4g92qYKQRSrDmaFHqQNe1JukHSH729MGfKsyQ",
  "key37": "2DMqYtedbCASqjUEXceigYdiVxX99sSKtWPSRoCf33CWvvxTjnSQYQVqeUg8VHVsWESm2bmaVZ1zTEzYbwbiWGVH",
  "key38": "3iSr3351AUFFuLhZHUpdDgXZgqPXewkmg5EVGLxE4u98pCkuWkSRCHTxy6Zkzrus1nWkdypib9gz7h9nAUwNtofv",
  "key39": "2xj81wJDNuptZqxQoUo4iA7U4JZqTEvq8aJq2nkgRy9XE5ktzwUXF4hDgMgsSwpZWgH3SmwK5sFJYHAHaXR5172q",
  "key40": "5W33aFEQemdLpzB5MVCfvL8hddSJTeV198DSC8DLsYJvLxAj3EsYYGq27FXj8pqKKhCWzaUKXur3Tx76ddAy7rpY",
  "key41": "4EjfEUVMSBn4XZWgDJCUqu3MGe9LyRBNEkmrRbes3L8TjdsLP1T14Kbd5RZjJ3oA7vDv8dwqtRa1yjCQCbgCGnHN",
  "key42": "nWgeJejWTkMwf6yYw6DUQgikAqvC84T3TG2sbVqaRBxuXD5VCWM3zqGnJQiRXLgMGenVxRYC8YfkWyUf7zm73Lw",
  "key43": "4zz8BcSfB6X5PZUNatBXpV3YrjoiQifbcJvJ8JiiBd36bSZz2aFxvZbVbbdYEkWd6pe2xv2AGFgERpwmYRiK7fz6",
  "key44": "4bXT3SHEphJPUN1tjg1prvCLGGNnFP9tdF7saScUd8A3WBGmtkCmkjCsn3F6NKbBeoirhxHSjHuXNgSyTPdxNxjp",
  "key45": "3PuYcqB45hJH8soN4W7324GRvzNUbiLR4MDfK9rZtYWikdbKJBttvN2uBdgnNskcPspDLKe5jeJQvGQamiMxFEwj",
  "key46": "2XwHoPKXMHetXzU6ygKQsqCZM9FkJ5CgYiGEfo4x5RE7HwnxfhF3crK3dFQkbaNWrB2gpPtpd3FqQTdUezW61caE",
  "key47": "1gfkrB7h28FS3mJnfqD6JHWRwUbSKQPHrefiHJDpiiPTek3jXhQZE3XTyD6D9XY912xhmj4KZY9QYhwYMLurpmu",
  "key48": "4YJCZU7TMsF1CU9h91BcvuU4Kyi1fyFNeHU7avpGWcHu7AZRgJiVz6g2Zxzwa1sW6vgZx9zBvmC8HK2vsSEwizev",
  "key49": "2cGUdmoS2o2sADW2p9kGr45xc55Q2Ayo8fSLgUTddsrUBqZgdCuzhJ1MWpKenFjaqXmdDPNzHWgGkvNjrtbTjRoN"
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
