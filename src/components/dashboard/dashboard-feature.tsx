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
    "326CgCkJ1j1q5snwo7wzS7WxxPMYrDwJ2h6k5bkkhFbDqaDa6LZPiD3EEqi6UHedPMj7V9X5rUVr7iiTo2tH3qeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DGtPSafg5zo5Xpz71Tto9cEJLTw2hETwgDDkCVNnQopLPkk1geoDdC3PvFGVoihpYu1jjBNmGdvsiTN4svu2ZQ5",
  "key1": "2ow3MSBv99nCYAMUZW9qwFXpbFeRNDFYLzYBSW9LEEewRxktwmMmfswiTawQw9HuMNDPpTHTakwLaqtSorp4eK7L",
  "key2": "ux9ySMZTHfW6ZZ3wKNXrsqdPpvNycCnBEFnEzhSwWWd5VMeR6nodSYcnKL4m43AyEUAFZ7L3nVn4boczJd1Nwzb",
  "key3": "3PQZHhuRNr9x44PEZTcFb2FnbWTfz4itddnzvYGAhxQ3wufcWE8m5JThguP2TB2EuJAodrkz8X1Cf2ykhbn4RZWB",
  "key4": "MkR9FwDNLdvEjU8KphStVJdBD3ru7jEWor3FfEDGY9oFLAmDVg5CRn2CU7T6Bo7wmqvYuEnHnPWeSuKuHKXgNjb",
  "key5": "dgVdAPhSFnNjKBf8bLez6mUmg7hBPLSXvn5z4mSwuoXb46AtJw3wftXYxAz37Psae7djHJHGBP6DfaDmLPSLY4U",
  "key6": "5vCg8ec86t58Tc23fWEjEGPiARwRvBAYXGjnUYR5MxfRx4pjpTaHHjGgQty6rnWRxoUJf1FdDuVParfifK8JJeUf",
  "key7": "BX9dAqCGJ1Gu3Hs599SiQe34NUMCMMhKWhN7aj2i7vbFfCsZQrbgHKYpbGQnGdeP94sbWB4pmHhQ5uMdgEw6ADV",
  "key8": "5UR2UFTEKUjsXRJJGNk5LaDBcHnG1rsZpPravg2WZVL2mSjYSJWixnvh5FAaoMJgGapVx8NJkbkQYh6M7WmJ6y7M",
  "key9": "LbWyTZF66pYizz5PEoj79Fn1UfZy3LF7tfFZwee4uVgE4G8R9iFZ4Svphwodus7vkC46iZbopRaVXRd9Rcei5AN",
  "key10": "3ibWzS7eJE61wcbRKe1fEefF4BfCVddNBqQaxAnociYkUh57iKxpTN5o9MK98JAMPUTKkFiaNeeyFU3mgyPTzWh7",
  "key11": "7fx4g7zrdUpNBnw2tdtuVYtX3sbd9jXJZfgjr1rNpq6CNFjRnKFSf8j3FAPQ8ZeK2PRyk5VXRNKoUjc3rprxm82",
  "key12": "5HfqC9SCLyvtydzQwp78ZYsPvz2iU9vkq7ob6AZ2iBYgbxcxjRkAwZL7d1iGEbqVpiZEwX5EhbuCcGNuywPmzLB9",
  "key13": "3jAnQVoeRcVrHR3f8it7xLiDYJkKjqz8KKgungh89SNq1LNQ9QCGCKcrt8KDYKrQaqV5YYnGaj6n1Q8fEWt5XXJL",
  "key14": "kuU89CwvrcikVVUkv6s1vbmMrfYD62JGRbNEEFZzQDfuGqBfyAsrBx3ZmXUgm1Csm4auFuLC9KPYJvasPqaRSKA",
  "key15": "22snw62VLm25fUFn5PV17UhDToRkoG5nsVsSLG6ipknn77sQDV7YyC5hyS2CpsaPBp6ZGhtAauugp1HjSe7kf1Cr",
  "key16": "fXu5Je8zassTkuMosXXA2WXTM3Nax152MgKDgxcaGJk4nnA5jSt869KqdCEBdzXjS1a3ciUmGSrAQmoXxSymZS8",
  "key17": "RcyLUwR7RdXkB66eH1oZB6aq3iZiy4YkJT2y7VRjPmAYScS5dANoMhFfgoj4pXTLaqDSmyp2zto9pZbQRSyMUVF",
  "key18": "4M1g8jw3jZNE8Q5sy3EzJ2AXimhtJumYUBg3oYeqyeREMDFJdp91oL47s1gVx7qWL7QLEvRZwAkGi1cr4bozG5P1",
  "key19": "65QcZ6FYzMjkDCRNAAvSoUgcqQjWuZF8xKzigG1JLX7ByvBCzxW4Pz9bj8PH8uP5agfSDDDoXmjkVyVKTiiPdWJD",
  "key20": "4VaParLsRW9rsd3hZt2PcoMo3zs5D2cfqGRVRaLCSTS1VkXcuh2MYeBU1E5EdsxDcUgDzfJMagaTnWa8yrJM4ruL",
  "key21": "2FPjX9mYC6oEFYzgRqGzVoEHGb7u1YerPYR4wu83rhLk4wRsRCbK4mqZqnFPJQnTJ2VbXTFMSVmrsZZBQPc2SxpU",
  "key22": "5cZegv7s9dbnZjnp3zsfCqwae7PS2tcS1E8nKhAhyrddvxPvYHzE17qH5JVcPUW496QH4GnzAx5r6EYvhw9MfRG4",
  "key23": "4wjbfqT6C6S25NN6QzjfJ8jk42EBGwsXYE5dpvsNxwB3cvdAUGWJaaQz1NVknG4QxeZLPBwT4JapDaTsvVPaskue",
  "key24": "2rNfwrfGkrcbpTrzf7f8xojgUSTLR9bKpE5VyiALZtAFQvb8WaEAzEVnUidfaFhxHqJBw1h5okjwx8z59x3izmX4",
  "key25": "89yWgF3bYNBcUnukU3K2aFeYMs7vJsCwEoodJ7VkEBXYu5Zc6YBphmJyVYYjjSURJNTVC6u8isYtQcagcegWgwh",
  "key26": "5DDc6DK6fehxk1FTisydsakFNcNjxoLMZuxeZtfTba5VDdLnNp63hZkZn7xno5vQjSAhcLjmSg6WteZQTqziakK4",
  "key27": "imQ2ZdwmQW6Rbdk7Fdc8Ek1xK4qjteBpk2Huo2MfMBXex1s1zSTEKoZsmzSvREdARm7wFh1sa1MBjsKdCJXBwVL",
  "key28": "yAAQNJ4URv3AQX4Qdj5QkHSNMzTqyJVxcbdH5vievPPBXynMy7hnxTma7SM9QB3Y6iNXCKW8sxsA29FJt3dvZed",
  "key29": "3RpRnBxtPhSHgdE7ELZjQPSFxLMbRMebLhBpZGPdNLzeiqybvPANAyWPM8ZKHyYz4bY1bipcdpUNndg5dt22CSJc",
  "key30": "2W1aNjWjJe9oJRwVdDykBsmiwgCvTbaQdpFh8VJsVkYg5VmQDZCwqBwEfEe9CwKLENcpgKctu4xJSSQkA7wdqFN6",
  "key31": "2EDtAM4Y6TqQY7xg27MsvRGGBZzMUYwKQCXrDeumQnT4KTNVZqc6SWghqdLBqFiMLox8rhw5ChKuSmPbaptLDD3m",
  "key32": "gm2B49ezvkytH5mdYgvvtBCHCAAGqaN7bYH922Zt5iYHvioDt2KZqNSWYKeQ4Tcd5cNgwrU57ztaFbcuF1u3nZf",
  "key33": "D5QY9kjpVhWMWcn25xyJQEf6WdT1vCCMNmuPpVQa2wJus6E1nJMK3D1c5ivkYidrqW98FVPsZEMaXEP3Yq9JyEn",
  "key34": "EK3jE8fgmQCS7Ajzd3tUZ4zrrkDfAJgueSbViExUNxgXZeqqwxhHwJEPgigRfSmVXhNgK8JQhxfhxaWhhtDUvpZ",
  "key35": "22GUL831CyT1Ab6CErj242LsE9q2Dr2ULURCN1xVFncK5FjNX7AaWh5pgJ9A48EY9vGPeEUUJcTwwz8V95cGxTLs",
  "key36": "kpXDJEma5qz9x6BpNKh1MeaJ5JWfxdq8u3Jr3Vp6iPiwrxEe1jQKqirXzsr9yamPqxGpGzovRdZu1HB1Ub7ahwQ",
  "key37": "2HArdnk7Sxt4H8cLUt9xhBFMtKzhZK8UFSet9QrevDmjLS7mdr51Nt8nmDmghvEGXUL8J5CpGaVv9oxk9Bed59LV",
  "key38": "242djeUL7fCqgNztSgZAp7oQHtukhdMqYVdFkM5AWVaU2qk35BdZqRw1F6hoM6w2eUXevZvCnwRcUHRTwGqGQcv6",
  "key39": "5UGFPkM2e3q4D26Fsob7oLW5F6otf7yzyoCqb8B3pSoVJ2awPweR2rUZQDPRMAF6L4HjjyhxYhFUgDB1LMT4x458",
  "key40": "337gsDP2AFtARnhRXEvgHKcQrnC6gz1UuXEh7UrtuqoG8v29oEBDCQmBNg5ryj2s8ga1sFR9HFBWuerexiSSszpk"
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
