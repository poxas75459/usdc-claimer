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
    "55jN7knfu1XgNrQh52v6MKMP1tAhB35x8KqAXvyVs1vGvFz5L4BrSHbnuV95uf2JDdirh3iJNL6FmSwWtebMBdhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uB9PqfsmQVDPtcY6PaG5Nj3FYTwcfbvF3SGvLRnSRKzWH2xa9tvsEZ28CHEsLbr3Lz4rgVcChCSqQARYDmwT1Vf",
  "key1": "4V3A7zPvZKawrgjd2CqL6NTpNokw8D9EVPZAjDWxD9jJ4xKcnBQmSDxKr65j4E2BhUW4DKdA86KUUMkT8pxeLsFr",
  "key2": "YoF9RRC5Lk2eeE9dGqoLnYQDjbkMxBaK29MFp3BFnicWRGwX7rnBu9NrHWwo1hv1b42RALhcagPdsGNiVMPj5XU",
  "key3": "5zpLmTC7miKkVdcSvsSe3sPYY5UFrKz1UBsoS7VJugUdX9CFtdP7SYtVYsr4MTbiyJiu4yLFvH1psk2sAJgD2ALf",
  "key4": "2zB3bZzg8VtataqNd5mq2PsVyuBrY8x28FkbD3xVYRMvhu5HMyHodNLbgR3RKis34uYeWPNWj45AhzGVpMhA7ng6",
  "key5": "3GMWbApNSkA8nfocQ5fxcdKM7G59Mrx8qiZc25vQVHwGc2F54u1irmEfQ7Prf91Sm63BWRPLw1WmdZE84JFyynXp",
  "key6": "21gVAUNBG1HjzRjg7zvFVT2Ei4z2asnpTzgziG1dLfx9JXo5fXGyX5mYQbjDdVcLCcKmhCSZbeLh3L2PJQynwM1m",
  "key7": "52VAXCyK1Fh1CNUT9FmVRoWYjqNWysnASnomrN47phzzQUWCbZYZw2zLA5RSSyPqHYyFN293owoKcWM9TyEbhA9S",
  "key8": "oPHN2HPczh6x3jFVWtde9ek61rM6yx6o8a4eLiueLViDzTuFzgvtS4bWCo1JRsQKRJGorDkpdkfb5Z2syrJXG6m",
  "key9": "3RpAjWPp3yRw9MyLv7MYUMAPxzbcYwjd5FZvKFvA7pBjTAsgjSgzaXJtHE1UbPWWk2KPeFiohPW78uxXXaRMhrHb",
  "key10": "2uHLVgVL64Pay7ANTdcDJryo4L1tLrxR1vMfZaARYktbLtdLJ25xbbCezNjVZFYvLAk8WKpriEVHEX35LaPVJSR6",
  "key11": "3iPm6ivprT3VLpbAZFz3kr4xRi9TXv99ofphzsFVBoNGSQWcuqpejzrYkGgTiHbU5t4YJw5AcPVqhBhabDj6ppbg",
  "key12": "2x24qjYfdSYUBtWZ7fvCrtwZLfQ7CxsGkzTdG53YznHzD62AfLxCw4fdpJmNQRidah7pn3f7qcGid161QHKF83C7",
  "key13": "5YPWFK75EtwFvYnpweUCnVQhoMsirRuFXXL1FiQ3BWBUwpW7WnaR7hxnma99DF3YN2X8sQCdPMZr3UQFffvdJbN9",
  "key14": "5Du8fbFdE4K4qrFzsRbSHStPHMj2BZ8EYZN6H6M8LpyQKdY8WTvJRCNEVvn8K6BVjbDcfJBpghMecYHvJKpVnLAD",
  "key15": "3MU5ugeeMpprQ5YCih7LCDJdPBqgvoZFGieQ5nySoU3Ms9mqJSre3SWXmCjGZxzDW8QbPF9YYGWeZg7uQtH1jzNm",
  "key16": "2F1ysCoZpznypui8MdmBuazyEE4BtLnmRYKBpwS79jMmHskZaVM8MATA7tkk1hhQzfb9aJ74AVHRjCDaQd9ooSJi",
  "key17": "aVStTQ9hZF7dDSpDduEbo61cQWwEJg11UaJE43GGTfsbsNxyYfFkuvF8E82abHStKDcn6jMi9TPiegXcj5rQ2j6",
  "key18": "2ds112f1De5eb4rdtfV75AbJP63JNBbDq4ZGEvDLcjcfEcE1PRQtaNAWy8Wgfph7Z7K4csXAZTx7Aiwtcccitsrx",
  "key19": "42HCkT6qRJ7NA1BL4zE8mvQvkXhAHtwFXmbaDMps41CzAk3bFa2gUdAnfU1T4cX69axPB8thCUfCnLtC3qvJwjKP",
  "key20": "4PhfoTfpHkMVYrim2o32Xk853zngEpAZTmhZ21n2koAur3iuMM4C6dHvgz2C9bXMJ9yeyAdg8gD6nZK6KwaJxMwD",
  "key21": "4w4UeVfXgTg9AJAorpqHWb9Hfy4ggmGFXaw1EPXUoAnWwGCuNJCogoJ1eSTgVvwKXxAZAvz68EQxmBei88b9TcAR",
  "key22": "T1PMj4N9kxMR68vkzkqmYCWRj5D9kF7FxoavY9NWu4RVdY4gYCmAXv9p96n9HuJapDzWtKuGs9QW7yD8BXXnySR",
  "key23": "vWWvot9WCE6LLeXQhfhcY8nnEyiwUGj73yAevjrxAfpHhjkykYobpvX2hoeMLFtsX3MjUzMBUzBFnezCrQgoPPU",
  "key24": "2t13ZdNbsJc2yy1RaK9Aia2B7rEmyQy34yhyLgDa7oex7TGxZMAaVBSDCFUJAqXoEhneNrcydQXHqNka7XxFNYj2",
  "key25": "2ir2pySW2MnXyP1yKVAZjUBvkxWuLNUECTnniQzgXUYu1M6hjQ8aPQnEqgujf1qCmYhE8QrPQhe4fJA1ZSpFty5T",
  "key26": "4HuRE3uBMpVByYt3WBYgoAL1Q2hoQpia6H3Y9Hcj9LRbVgxBAER2KrBKqZb1pwS7kxGyzn1gV2Gd31cLA1vZ32PY",
  "key27": "4L4JnGuqRbLjmUs5XLrfKjuUNVQMV842urXGPLAFvQzu33W3y9kN6abhDoLtFEHuUhPYP2s9Sjcj3anmGykq6hRK",
  "key28": "TJMbHn2mvYEYauRdXuviWtVEVTKSDyXkTaWAbez99TeWFbZS6afvA94UwFHRXJZHR1URcormvzbE2xFirmd9cQz",
  "key29": "3x4S8WaLk7YvCUz3H6iVQncpUGQ64DDnk5EfLMjrEMg4n127RYixLCW91eqLaoUqDeVLbqBveyp3pcCLYSca9kQF",
  "key30": "3cJL2dn7UtdnJ1pcrLjrX14nAMXRwiPYnf1cSNBaGcWAEjBWpCSVJHxPSpqyKkeyVzsGxncxRRRhjwYRs2rrvFHe",
  "key31": "WUd7MArNRyis1E8aZrvb9XSQe8gR6vku4FyTJWZgGsciVAkpYqU5rnX4YmQadkNTK4P5xWzYi8eTNHCpPZbQ5R8",
  "key32": "UmSLf7zQgj1qRNGsqmg5RzhN1TYPFPr6drE1LCQraCfPCFyP4m5b7GbmbAXquseKiiYBewCjyCw5yiNVPKiB9eR",
  "key33": "5ya9weWmMaxJurDeTXX8VqW5yHyHKFLbaAEoqB7JqQ6HQYJWvPbjRq5QDWprAPKWseHNMtWFb36oTSUPzMo1gBCP",
  "key34": "2pfFx4Miu4Nokw9XELcQZMED2RB2tkehaEM3zBMhxaLHLCsuFPACrRZA35zcyvKW5v1BzDt7crEJKqbqS1a98YfM",
  "key35": "3EmWmYFdSYDrBbBMSmhUbsxVjtC8EHdtAbg6KvApKkNbiYSQmDBjo6gLxLqDsn9dpKXuXHR185vH67w4V5Jb7rKW",
  "key36": "46xG2itknc3GtbsGgezjXsNdt5TAaS31KDZjB3feYj14jRAkuFgWV58YRfTzw59c6DFXSModTUqvHKHa9TnZVPDp",
  "key37": "4M95Fg53Geb2E7bwxGzjK3kVEmC41W7nsVX7YyRseh2mrSHAfXoqvgV4g1VSmNKudmVxnR7pdU3mc5uvRxxjrQYB"
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
