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
    "dhM7pondJbbtg83DDoFp1agfTeFarRHj3oXEhH2gHzpskjpsycfogQWRHR3BqZiCuMMnN1gCkLZeeyLSXnKamGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2chgirEdZFjGzss9rZD4zCbZN2CpUTCqqcusbx6FDwguDzSNZvmgdAun3FFUeH6z66cL77kP14xfWoLxBqxE86vh",
  "key1": "2xgCAGsrNH2ZCbhS2iT7Myw5Zg4L5u3rQfP4gbccd9KQmAD3PDrUbrAkddu9UCHR8airMibcsEZ7vFQd4uQEu5qS",
  "key2": "478ih7e1p9TvimvVhqEUkbmXW9MKmAEjrce21CxSsWmw3h1jFCchaqBN649YLZA6xbRZS5cmJWuvhQAHWBifDjsa",
  "key3": "5pPibSybmrwDFVFG6EHVfK1zo7hvWTba3wNu3SJ67fxjkTQteobxJmHWVN9a37mh1T1y2yvHCaR85HWeW7EaGtTz",
  "key4": "4JbYjvJy94gUh8vBPoJ1ukLdxH9vZEjwJ6HFP4XZRMixeUQsBMJt15w32LFd2Nia7hT6ic6vwKHu7vp1v23pNjW8",
  "key5": "2TDRw4MM8XdBT2vE9zhTuSF3zwHqKQTwt1QGeGFSf1VeU2p7xjxbwJQeFN6y1LWCKgtEQdGh3Rrqn5sAw8EAeD51",
  "key6": "246xwXDbXgJCtqYBn7noE6DdVadD8GCBDRLMbe7huvcTeNXDMcPAVaEJXJint8NqbbH5GHWWpYN3GNhEaYDMGXEQ",
  "key7": "57cnbjEVRRz8FfA9xd9myLDbZbxmuotXvY9NYKes4gRoPUcw75b5o6UrV4FSLqQAHHYvL2sauji5iimKW5ELZVUD",
  "key8": "RASkPxSumTZrg7y6LVCB3rX6au28vwf95YnRwi9JVvCgddrmDL3AHvvWJFYzs2UjBKxH6vqBkwJkGQnhNrW4ukJ",
  "key9": "5B8mDo2F4dkQRjtrmiFMzk2n52Di36YmDzX8C4wADQDXWy4htET634QBSWAtuFqWrHeyPWq4Wq2ukBsucZCpj6rk",
  "key10": "61Uba78RYdrvUgN9fMBZKiQ1t8F98ZDt5VRT1Nr82f4GbEM55xBaC5jfBawkfsRTQqhK8XAJ7ycL5UJ1tWRQTCVn",
  "key11": "3bynL7pNpNXfbHVghHmiX9q2MWnfpNDmJev1sHZqbszzVixQpXhFpfNwUs2LYbkUVqJdx9Lq5e1PAArqggXapyu",
  "key12": "49L21A443VuCZ2W1VoeE1ADxBAFgqurv4yr8GVzCRCvBxocbGULFU3GMprSToTfVr1FU4iHSojxsJHqZhdL2shMd",
  "key13": "3KUv1nmrfsh6rhkpYVAeFemNN41NGnhFteSsiEbKfvbZeDogsYsFW8Bsf85BFfTZJ8U4tPqDLje9U9VdsGD6cg68",
  "key14": "2t9hvn65CW9gzAchePQ4n4MPK8tGtjEjcUAbxd2h313RD4xfsBfGpqpai4vP4M1J2eLD8jV54YJWB7QNBtJcvFL4",
  "key15": "3HCDBXE69aiQCBFgE4N3PaqBKsNCyqW5AATzSDvQHWXVq82rMKmjRHy7TzWTJ9392j1DVTdCL6ZFeGFDebZuDPfP",
  "key16": "4t79BffpfDED81K7X2Fxxp3PWtH7zVMrFD31uFmSnzUJrUeq83uh8K2UFUNq3Ld524t87EqLsrHcjM8Mp7AE7xyF",
  "key17": "3NSBKevwfrjsmV7HVH9hE21XkpeQC35mfskxdwdkCWHLNanitFM4usHgXoyP2iDppgeSwFkyESuLMwdTiazF6J47",
  "key18": "443QxRPEySff7axEf3RpTHWYmFRf4EerJ2tTuZujxBoRdKQzYjZoKhKLSsgr6tws135uPyQhmpQPuU3MU6mdhEzy",
  "key19": "QfACMY6ozXKNdSC4uacUhM3mdD74JPsk7Dym3jGsxUM1FeoxMQB4o39MoLpKra8vf82uRtfZwo512ibzknwg8Yk",
  "key20": "Fp9etf8zM9BoUKwK99KDokFYScqGJ3XRvzLnb9JjidfE6PnuSKfupuZt6V4FBBdunhHVgpFrmMHegbodkr8pxwo",
  "key21": "5zLF94bjce2zZPjNZFSMX2dWLX5iEukhDSnLXLQ7E2iYBjoD2nZwtPAqSQbD9Tvpm4HRDvMKivGi9W2LJRCKvskK",
  "key22": "3a5Q3kSTpuUVWcx1eE9pdMNEbXN7xNuv3epQ7hG7ozADxDLpnNv2Njax87csCwDuBHLMw2gkZPYidFm9RTqZWEzY",
  "key23": "qWHdTbpCPrwQX5BJ6QfkPAFT1kzK96M7wDmDrW6BbPg3gra9xnGmkV6zrxMSY5TGHfqBnwJsGy64RFZyVNKZbAb",
  "key24": "fmHum4Z9sCfnCJuREvSwJn3fRwEfqBV7vy9KSbHFHDG5byi9TEh4pAfcYoy4qetFPxN6wJd3rdsp6TfYkBCsAn6",
  "key25": "5bvP2qCcNJPEokrnrV8QKkzQj9MeYYrmXFBvNdpcoPqK6c7UN9wk3VV91ctukAa9DfHcSZQCSxVkpX2fVe3hzusU",
  "key26": "engmJNrWoZNE4YYpiw31wCoiK8x411aq64GY9U6awgexW3jZ5oZ5JMkonGrY4o55WqdgXkgCQgXfMxTaAKTokB3",
  "key27": "526UuhsQwHbhPD2f58YGXo2JtBjfkoX1Qbb5i2Kzc4jFidgasA8gc6sHH4Xv2mvAQP8bgVhFAgWD9SJGEyGadLD2",
  "key28": "3ixqvWf1oUQdRNHk67TmfsGkiuHgiLgpF5Eo4urLBUUpWPRXKd7MQ9o6HoVrdM8MCx5cC4BzLHF4EbcGxxNsAwza",
  "key29": "Jy1VdKbMrVgUc9fSFd7Yak6pNhdaoMVLWjJX4uY7vyVrVEjv3xcV5dRUhnDgQzaBRQeA87XSGB6hr7fi5zGQAG4",
  "key30": "2XaTJy9pUZUwMb4JLkb4K3PFxQGyskDahG8nKNtfEdCakvyLZ5xctee9p5iBeLVEFsvGFF9qazG2QiTqKqJs1N81",
  "key31": "4XygXBgthbrMR6RvtxmFm8UyQWoBiTCSmuZGszjHm6n4UF8guxRmZNxGAhY7Xy7SP1VTfbw8cmdZFKQWJemsRpxi",
  "key32": "5oWx5MrsLzMjfWGJXoq65YnQgfnBpkdoYwMbjjcJP2jduC4HtyutPi7bn5D8WMsEa85ZzWMdsuAxER2T87Rbv4b",
  "key33": "4gYqzmHdQeYmCPXWQdyGDoWUEFASmuArsZt6fjHo7ZJa78zg1mhbp1VNf414tB3uf4tiuFi3RArh7LzVV4DSwaro",
  "key34": "4ggzwdMCEfKRAdmEyazL8nLf3TovGuNuR2m3c2Pd2gNEtMjAAuMHi8aTqcAAZnsQQSysw97Fwok51atjm9HckHXX"
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
