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
    "1tHxqWthhAJAU7QyWjFYfa7BsPT5HrwA8iN6MK3KUYcfiL3WjwhTqMV7Dn3cexsLYuep13gEvcviHciaEXw71Ws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DB7cQNxP2Qh9FFKdXKBCB3M8mPXnZdwAoDYwWBrLuEPQxRQmy8GfbBbEefwUHuJqLi781AxADx7w5KaLDDV817A",
  "key1": "4pLsKfLcc4keHH16QQkvdgkd7y9njbo9GNLgJXZJYuNgoaDpz7rmHX94JTEDPUbceDqTzEYx91qtJYKP16s6P5xk",
  "key2": "3ieo6hJBsH9j46dhyNWdV4EX2mM7G8dFiKggPxVkwDqEdTrGtTWg3wEdsRXLU7Gs48CUP1mopbhzHe4eSBLCByP1",
  "key3": "fwaWfA7uducPy2c9DpPwwNXq2d2qzYL7nLvsQmux9fYewEEqKZdgDPKnfur4R656Fjqizt4f6i8gKuVMS9deSQS",
  "key4": "3XWXJezJRHVsNt2nN7s7b4NdkKczKpYBVtzYuq6xGgSfmmVgg7jCGurwDfekDv1fTi1fL6RwP2WxZAZETTHenNHZ",
  "key5": "5Gk8jRD2qwRZ53tX2QCS4kEEnHqhbqcCWFDS5dyC46G1XKRbBWKuai4B92gG6DE36wvqE4UnYGeBxCC2G2aCBd5s",
  "key6": "3Nrkpgk8LhGn1bgrY9PU8CjUdE1KDJ2onn7KYrJfoum97aseC9QwSd42AqfZ2fauFcoyKoYTcTbb8tuBeZ5Bbmw1",
  "key7": "5h3FdftMVD96ieDVdJ5XsJ5eStNLEP4xa5jRnf4AYRzBSfANH6bzFLHgWhs2cidqUhWZhvbnVjQSh4Bq9PK8cXNv",
  "key8": "9L8oYG7nPfE3ufa4s1EerJ5AAVAWv1baRQqdhxwuXJQvkCRRpiB6TiHZ15ywMEUhM1DWKdGtLcfXmzguXeMu2N8",
  "key9": "M7FAGRq6DrUR9x1vdE7j54FYegjv3xu9GLd25xG6kxPNzbNmChxwFiMHTgAsSr9noUTvf9UagjDZqCT7Y9s15c4",
  "key10": "5YCDdfPZpgBLijeUPRtJPZaf6o1nWmhDmqwgCPUBpkN3RoFRfAhgkUwMn3AAD6wzLqgEMHtVfvSDcXbvDoHahYxc",
  "key11": "SD14DFfXVWj3XE8xY4kGJRqZ9XcHDJ7qbRVTjX7FN2tyNVxMY85cNUriihq88MGr9gPAngUGmLzV99Z33p4sn36",
  "key12": "3cthHc62bhduRAmpNNZVuqsW4h4VKCFwQvtUPPWLv5kqUiiM6ig3WmNLF756hyi9ShZKdgGSYvC9L7Kxq6QEsoY5",
  "key13": "3Cu7oXJLmbi6v4eFPpziUZnV2GDvhXbn7msVM4ZPJrE6HUAVUVM7qfjxFSt25jriRjPH6uNSWNy3MbYXZxwGhw2t",
  "key14": "26LcpPz1ChJBaJhLunnaZyZK63oPheDQViMkcqfyTXxATPyikpLmhKhHVh2GBRBveeWmErtJMpsatDZkF3MN4waM",
  "key15": "3RpUbZh5up87Hq7bJdvwZfjutrjcaivoBj9osfY9U4F9CvpaGctHPQKBX9pNT3XJQTHVcLjarr3fcP1FyYuAD3E5",
  "key16": "3k2yTBajbYawvuE2cqQ86giFmrhrQWySus7uy2m8v6fTS7C6pof4yYhvAyFSorBb5N8DRfF1VrsG9zhug5BY3Q2G",
  "key17": "49oRNHi9AyiKBzKFx9ia37Zo3mj8opus77ch2eHbiAaSonQ8yBZVComHiEePCW6d3kcaDhSC4gRmSqmqwYggKcRG",
  "key18": "4dw5toAVEimbJa7KmbHt6Zi24BB1w1ny2bFZzYib8qjVhfbD2onb2iZN99LG4dn35FvCmnzv8mPx9dVHuvGPBS8q",
  "key19": "5DfKyA6dH7f9m6QtZAhWkyeQcRf9GPj1KCJSvj4eo3tKvA44WpeuQN8H6p747F68kCJbRKLwvwt6edGuBeKzovtR",
  "key20": "34nBqBmG6b1md2cgiiRc5vrTVW4jPHizD4NsQEGy5VgMHPM8azfDJJfyRpPXMrkJkWPh3qpXoVAXvrhPRtLxVNBh",
  "key21": "4A6LGUENMqi7dB6ZXvRnpDgF2fdrgoJCyAm7E9Bqp6BzvcjuiL6bZwsRxJvmpApLGppf1Q8Ydca7nwpyAMkVdWQp",
  "key22": "4TmiFaAUcPssRCWyiJm8b27QW938Mi9SV4WawTdF7rNFqQn3yRZfLds9xBW1r8MdG1zdY25TWZJPMjK63xgrKsrR",
  "key23": "3NfBqmp9c7s6fHU8Qt1SboDVTdnQQpNDQGGZ1cXukJvfWkPePVSPj19RH1n7p9ZDc8GoAFYr9csxKLt9hnhTy6go",
  "key24": "4P4xvuUit5wfGxVzjd3FfdutQEGnHkoXSW4G3th1XDC9GmqCvoSE3EmtFjv9f6Q8XxNQwKtunre6zeZGGBeJ8BuG",
  "key25": "441H3WkKGDpgvwzsAqMDC98pZfNxb99Kd16NxwU5gCFLnJKv8Uo69cu3wRGahHKiN3Ff8z4pbd8RHLKKSW7FgKNj",
  "key26": "2g6rsp6kSHmjpjFTP85VweHGXVagqiBRb5QmRLB2H3DhH8Zf9wRe1E46mRFVA2cTkrEVcjqynfG1khL37moZaZN6",
  "key27": "2k1g4FW2u7iLd6S4LhdEdcGb52m29oJupZ5TiGpHLeLAtGxnWGqZNL2pdGwktuexkHZtKkSGkPPa6BRd7PEyu8tv",
  "key28": "2nuwUKJ39Cz6sKFrCSpbZ8Mep4XiJ8qHLxs5hT2nchq5zmY1y6vZfBtzDaCTkMVNyuDi1PrCDGGkuKb4uho2vi5V",
  "key29": "4sLTRdubMLw7H1k5U29ay31bNsaaFupcDC6L6SZPJumkZt25qUpMcA3oHFzmPUcouFKrtQpdWYa9w6BAFpSHZ2jg",
  "key30": "2cwmxnBdrh71WzvSMQk1feAtRvcNxwbJj1j49CEwBUVCL7wjABtoR47ZhdqYeqg2QRGBkUMBCV2FxZAWK4ZwPNXJ",
  "key31": "QZwaNp1zLUzsd6w9PfRafMw9f6cqsRzLDj7J56JhRdkt4nu48ZWTKxC2PY2afi15boGnb8zDdrgagiGEkBr3tSK",
  "key32": "5z3mnJRqKDExh2o3mag3cjVde5ZVrm7DGzf222SgT1ML4GaSgdJ82MBGjGUisS9t9Cv9xoMxDL9nKVePyNFUs3Y1",
  "key33": "37M7WZH9qVpQx3nU9SWuJSDDhZ3p5dFxxU679rsoTXgE7TTzprnzV95y3HUPs66kEn8Mm16KUWMEAY3cA4WN2HfF",
  "key34": "35czEktnyJQHxv8YfPDDrsRTMaAtP6XPV4rpVzr1dDCejWJfMAYtMNJSwJzLKDrXqJA1NDqJodw1rCr7ho13vo8n",
  "key35": "5uzpaVrMavQBxvFFemMxMXCaFNwLfPZJyTv6oiZ5UHLHrX8wifbJcpKimRLQH7zYgt5KoggPSBPHgJ8sUvBhf4Sv",
  "key36": "66zzE691fvSBjjSA9VrPfZdQCManfAxjxNSfEBGxiWw7bEu1Qej4iiL8SMGSAmBbNqGZw4Lu88PHBBWA6iWgw4UC",
  "key37": "3fMvsQ2i6U4NuT1GQEP72UjA2ieAiVFvUgCK8PUoRnFo9XPXDCiMeLxxpJhivZwTCVCzdN2ptu9eKrkCSASRfNkU"
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
