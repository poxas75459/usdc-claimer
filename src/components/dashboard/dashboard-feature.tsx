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
    "5Gqdbx1nbYzYyynPcfs8aqgzXdzMfJ8PFCKCxaZbVmXsEHGQJdNUpetP75e2Xmkz9XeWvRe9HADvqvZhRx3hkLA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rFx9nBzXPMojr78ZXFZgHtNkHQNzfRPMqqwy2TVcSQUZz15M5wg8wnb4wF7NcUwUXainXGpRXdXDd5PSXPCTUPN",
  "key1": "GCjhmEzBDsyTYRbBa4qoAwd1hj6auCiaJyW8itohwtPu3TT76scH29PfEykKftERQMzayMHZJZbiKaBtdzYngsi",
  "key2": "3hascinbgLK8twqvRnL6MNbh43786iYXf2FYx5MzYUCtFQBBuUw83LGFeMRxkihwAN97nUYRKGaciTLXDsZJCNhs",
  "key3": "5vRC3AyAjwSGc4YxDu5fCa4L4AjMiYSn1pNz8necoVAsjKsErdtjyGtJ7X8UPzigtd6pgzNP3jJ9ASYzDVUNNdcd",
  "key4": "2jeKAHdbecBbaqKvoZ35GK2R41HgokN8jxti24E2Tvjs9kCYP2WGhfyvhtNdNaxQxJrCcd3jp7c6THv7qZLrkmkY",
  "key5": "3oC883eRDAYyKeywyD3jAMYadHvMvSFoa2XtA7KeEpYEAKHMNb9Ga2YdKRrGRM7M15WFbJ5zfhN1CbLM7RUnj4FF",
  "key6": "AB1gRuvv2Lx99wnGAu4dNX8MoTUZUKphRfz1j5HBzQ6U6Pz67CL4MxHsHLbBgjdqDNLCRPifki7dsS9ETE9Qq9r",
  "key7": "2KPX8x7FPWisPEgi9H8WPZQxA95fx86ESScEuQ8f8vP5eczG8BULns6AoerbUWMzJtGYZiTebHLrZTcmPeVP6fr5",
  "key8": "5iputn7brHDrod2HsDi21n3AuCf8aQaiTvDKmygqPjMvetMXJMePDL7D3QAYW5H8kbqs95Xm1KqHuxhu6X4iceR1",
  "key9": "1gp1RdRaFipwBWGwZKRs7DMB94FU6CLu4QgAcE7a4jspTNyxTQtLLXvNiWuc3eYhw1dF7PNow6xxLAm7gjY9J2i",
  "key10": "5YkD9MpzRxyddkXNVcTNBHgTT7uFbeEUrP5C7k4vJkFwZ7KcvDrt4ZRXvJvFKEmE2aQ91zHqYzAuv2ffsiF5GcMJ",
  "key11": "2821gPZcEEj6NpuN2z32aGWzRjbnJFhPAcC9jCAYmwSsr8J984y61SDc2aSM9UGyqqiXSvvjCXMkFDujmNXm9YwY",
  "key12": "3o6pn3LH2V39Qsna1uBgsMHuSdBvPJkG6LzATwzeSbYTwh7CTsB9Hsrvcqru8jatWwL8MKLW4PQXPkujpMitBLXN",
  "key13": "2iaUmr9HuAWPbyn2JMD954rQ44mWqRUnh1tAoV5jMYPfQokaGv9srXDknzb5uVmqaaMnaZMSifobjoBCaVJpNFqw",
  "key14": "2TWUrf6h3opEC6JfwXAR1uTUHsEShAHVjqnceN4RJjPGeNXcYuE1MmL91aqD2hd1zxqSpYBdAq1x5v1VRvXW1orU",
  "key15": "5muprWUK1HwnyZWGgiBicaSiLZpZYZDFtnAMm7GdGgByxMVyA3xt2qtMkXqEWBvvK3ickyaJAjP6QV7qqPGuPGyL",
  "key16": "3Frsi34k9x37si3F4CQ2fT7khR7Shw7S6EzGmhCzyAu7CtzFYPXtgTki8X4vgXzYZkVKdKt9VL4uyL3uwWWR9yf9",
  "key17": "2Ctf7W1FpQhz9Tcn69Qx9kbXdSfyrnVUjQx7HgjcM6sXhtHeHhimzHQGVyqvomUp427HbZhTeYEVFchHis4DZz8J",
  "key18": "4bi5jXFYFfMcsZ9sZpZXKSQYzwqoSvqVQa1P6z6XvY7DaySwCZED6Pc2RLFvXNGa3TwvNZtZFjZAeh1iN57BfKGM",
  "key19": "21aytnHAkFZwgKTHKMyz8SHy61iKpuxiN3cQsYwzruJf5WjcgTMrL5nmZ1kWr2kcm8WrDwjM4StgxEDWobQJ5GBB",
  "key20": "5oiMQmpVUuzQw7bX24j7KbZgkR9FdFnWnVN6tydMQpBHifkswCrnZc7GM7KkGV6PUv1qKrasBaLYLQJ9wXCGsTxn",
  "key21": "2pbk1fxfDvhKkTtVqy94SyqF4r7NQi2ceFwSY4PRURStAmjbegAqhph4ymY4F5HpBw4fxaQop3AmqqkiKCdx6KDr",
  "key22": "3yQbyrs2Ky4VXrEeZkUFaCZCt1cYrX9eUYdyi3GMzip2FHzZhMEi94t4KfFNgoNF3AdoQE2VVEM1WFVVPwPhEVJh",
  "key23": "2sdwwfXx61SxU2LMyohRQWZVLPrHWoHXtNfpHZFfk4NK9HLa6AubWBQmXS7or2JnN1b19Wa8Dx8NGZ9FMR3Qfdqx",
  "key24": "4bjpLUdQaekBGS4w1Qa9GsabFiwFkzm2rjbRCNhnBcYeKZbb8JQ6e5mbGv4didxE1M8Xjfu3FJxrLu1NGs8y6ByM",
  "key25": "4V1NjFefpKFAgCmyUUtnuoRphTF7g7tkzTMDDtAykmcZALF3yHvyBXfE1hkxDE1DtKuWPK3SQEKWDp6Qz36syUPV",
  "key26": "23fzfXSJoytMPttATi3SZcJTe4KFwzpYZ59iPmetYayrwRP1xV41fLw7UoKn9tUMMw6ApqzCz8zjr6Gx67mVbnQA",
  "key27": "Ec9LZ49Ug2VaxX7vaRo1QEo9YxAoifQxzBkK4HRZa47tgWzRpbCgnAa9j5BNCi97FWke5Wh77QMxLoE2bRXbm3Y",
  "key28": "7Utqo6sAVF3yhAaaj2UHXfDQPLQH54ghyium8X4DiacGf6iiX3uxZdVsoCUg5GcEqw5qfCYXZVWCQG29R2jnzvY",
  "key29": "3sjGDtgWwF9trABaj6KCXH4GvBWANPWykCnk6QiZwUQeYfmMq8Bt9nzbbi2NgoGr9BhZT2VqpVsBWoUbWBNfVXaU",
  "key30": "cVVxg8YgPXnWt44vRJMGMdtJNEqXje2qPn4MGRDfLcnyNWbygNXBUja4EQ5uDfnq7EbPd7KfbCAt1w5HEJ9L2PR",
  "key31": "9pk5taX75AReJeDCjU6QC3gzxHzEm5mGqQ5Ws3DD6iyDScHmgHvyR4kBjGdzUFzYEmdUCtouJV7sVjZVVTUWZTH",
  "key32": "bCsmX2dWcTzxRndVczouietYH2FbkUdtBfYQuaNjWTaW1eqbHfsUpVNtZ6aMBQhcq65k4UiRkZfeZrypcd8uDwc",
  "key33": "5godb8j7Z7E6TJHrxn7FeWEwzwRPuo8ckpn1qDyxWDtSEbTJkfXb8vyR7RJzQt5fMH7YbPFXajQbjNDBid6nmRid"
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
