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
    "5NqxtW6mxF1bieCNaCyJGPYbGmXWR4XSeBKV65XpCYx3YMVhigdpfuZMaZKjvtUCiw4ebd111mbw6jggWjp2NXpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63jf3GZFocYjsCyy1Dm9VP5dwGhySuKgRby7mBQfeu7DdmhmwtxngzjcUThdaCNQFjsYYzQWPCbiJPA3px6iUcZw",
  "key1": "JiYjanwXkkcB34j8WMhuLFE41UuzsiKmJh1MLxWacs18MFCvDpC6uB5r5YFmPztD9EDYXap8kxmbgzGAERLVWew",
  "key2": "5UVM3u5gA3gCUYTgq86kSbf4rQsa5C3dfZtzVWEJFdWkzGYRnnsLQNKBnec316AoYND8Moy9ZR1sQnk5AJwaxrpS",
  "key3": "4rk4bcN3xcShnNiZLS4kFryUdYJuLY51UenTd5QC4CEhpYqTyr1HYA8rLora96wyZsB9vY7qn5YxJVEixeNJtYvB",
  "key4": "594HzGDnHFpXah8bAgZJMRb9qBpaoGyGB2Pvf97UfHXCeh4UmP6t74aNNDCU7N3EDj9CcFwNeKu6znsbGsepaai8",
  "key5": "4E9mRazyoVhwgUMMgjh75AaztPM7gWGaPhq6vFkp7cGcxUdpRXcvPMQnh8PuQSvDbk89RFocHQgauNg4aNykrowR",
  "key6": "3NLjuDDYXhaTv1WTWhbebqK9W47iEWXTHWj6ogAHzWpdUDcwsGgDQk8sjVV4GVRp7mi7aJp8LyqxwUgMr4qXSJEh",
  "key7": "5tB7bA7BoNn2fZ9jz7JGMWZ1kgWJR73JZpLQCuXEi8GnBkWEjiu9hiFjPZiFTJECmKAcAxvKyJmyXm335jiL1xCZ",
  "key8": "5nDmEdgQdrzuv8a1PttUztwDnP7cwbSEc4EspiNyrMWiEs4asRij6nD9xKRRUmSS51UbLFQ81gTwzAoXcTyixXjX",
  "key9": "3o727rose6BgwJyycrFZ8hPd5AZEEmKw6pXCqDxUsvNqN569FC2K6vsRJPEU4XQXdgGcqZvwHtbXYpyZCeuaJnzs",
  "key10": "5LJ1WoRZvt87TUyhYzgzgciMbYdgyVMc2hKnCp57dQfE61aSiZY52zoVpyuow1C3cspwkgoH1n2MUKpWMi4MT5vt",
  "key11": "5ZC9sG5atGVfrKJfFPVFu4PKP8AdDycsTTwB6JmyRwRdeRQFUKAoiJPjG6UM8sKvVo3KtHWVEECtHBWnEzPzhwQK",
  "key12": "21YADWoenAonaP8wgcoWjSmy44gPdRyXPLRA1U7ZkLnvLPraF4G8MHTJBNwJtfj1FfM2akcW3Vpm6DTtKqMnBmcN",
  "key13": "5QrA5YoRStRptHKobnF98cdVf9Bw1t1eHUr5w85tm2yf8xx8uYLz5LimBFxiNX4gksYq6VdJJiQY2qaVLDPstGu7",
  "key14": "3Zfme49ZDPWNptAR62rVM96o991Ka2iH1Z3nngmJ2Y9mB3LwJLNMeazAMNQTfL3udpeidNgPJvs26J87EWT4JUGN",
  "key15": "3CeDjerkQHQZDKxHwGAWennrtM9vPYYdTstpDibQxM3wZUvs2stj8cireZmfyUJEbq8pQC8uZ8JfSkjMpRFmy5Le",
  "key16": "3MEAgYZqYv8Kb74Eh2DBJPJNA5qGZWb3xkhehx6TJCsu9g62egcWPgSCoGKSKrVkpvy7Wai6DyMJwPRXAjMtaBnb",
  "key17": "4DF5WURce59FcxtARjFVVX7sw5J587ZJAm1Zq1xDgJHXRVLrFUAeeRsGcBTBXiJce4tu9kPL2MwWcJrzPC1uLh5c",
  "key18": "5tcdW6B3Kf3KKcCTgFfzZF2UHNVnqTRgu5hXa2HvnQ9aDLu7J9wYpF4bb5usGqriihzYN5jVk8ywXvBcQFvYZtR5",
  "key19": "3LuT7N1dDETEJfv7vWLyxbq4PE2rYRbxdUg69vaf4rzRgAdtgbindcvtmN9uSHhkLSVRLVdA8dHDQk5Y4Uzz7Qnc",
  "key20": "34aRUNsyRSnFSBTYeWm3tLJVLgNXWFDk7qa7tqLmSYjJ57RuybC8MFGUvpNLwnhGX2vC7pUJSDzvgkhn4AwKrTb4",
  "key21": "2vUayt9czs6ffEkcJrmY6pTq6crgXAaoyMjqcbuenv3rTDFRjXhmZMtND83pzRgcBGWW6ojqAz2xccVHBZCuPqg1",
  "key22": "5nyKBa5DkTCEYww4LjtJKfiJPFepJ87P92CkFT554m1dkuSvHcsyhymC4CErbxTP6WQsLVEWGLxuVW4wcvbmoAnV",
  "key23": "5wpmmgEywwTktjzMTCdPrPcMxPAzeyU8B26v8WsGifRkASndez2d2BdWvAffm9hLkXKsV3AXzbPX7oCgKpo3gQRQ",
  "key24": "2xQp1iWDu2yEuVxELMwaQoUWvS532KMHF6i4V8i2w8pEfQJWCYCGU8f7dcBtjHhrEDsmZ1G2XH37qgNYkkitwbS5",
  "key25": "27Xitya3B6p4MR77rRi7kiwWSUazMisbzj2q4Q89TUo2JjNSLJSL4T3TS5RyaHWkv9BwY6oFNCCrzZ6AMqhtnkUQ",
  "key26": "2ZMWbrGU1kZtp3Ne5sKo31z8VxjwvCK761j1tXAiUu8TSKikrfNEpdBaFrtbc5hzQaRFYrzwhyz2YpGhNR4e92gB",
  "key27": "5HYdfa6w2VR4nnMCxdfNzS7hjwWYTEu5zMy3gFAmLdCwza58VLDVXHgabaSYVbYjAkbz2dZhhLUR5ZFa2AD6KUsJ",
  "key28": "475KP4fEqh4JwAivfaFmCB3pbRoxaq2NKMTEUf1nfQFozNWoS8P7BcjbQq6LsEdeciD4dDAxp4KqygdaCwdJbpAW",
  "key29": "51sk2VUZwL1Dqki7L8QgykGuhuJ9QkeG5WwuUGuB7vvZPbuZ5UV7RHuLFqzGTV3siP6cQVDdaRE5iNtMS193kuYg",
  "key30": "YWnMN7hhNfHrkKt95PifQNDfGLGLnV6ZTtz3tZRy38avuCCnFYDAznPGxC72okqNG9rx8KpVQ1tHsZ5GtYDht5x",
  "key31": "4Y6Z4GnAKtPbhB8NVJrxsGCtTrwFcPmRSb7iNzZvp8VadTe1CXMEQDSCPgawgsACwY5ShaPdawnhszNuvx6xYMiy",
  "key32": "22LUALzZmhE3JNKZ6frB2xybF3ih59v12Yq6Ad9cRjLQfxN8UnfoQKszKJWJxqkw8KEU5uqjsAFWTJy9qvgL4NLq",
  "key33": "4ZQpHACmY31gPobMQorKZ7gnp571ZHNRKvnqGWfpGeFSK8H7SvMYitbxfJ4bKswSEk2vajikgFGGHPEzAC9pFPvc",
  "key34": "5vwY867fBMC3MJiKtAXJeTRdGgbiNky17kn4P485JniwbtTqsT7CjTjkMrwPHLDeMMWceMDsMm3kgvDTJw2WSqjh",
  "key35": "4Lx3MkrVtVqHGRRjPmRxeddTb2AasUyMonTYSVeRkx4ZWYpXXrkB62XjBTTBAJ1pufcZ9V9meFL4BdP7nUoDGY2o",
  "key36": "35xiChVwDTXVmEyiwcGXGtN7N8kraiorfrbvSGyr3f9pmBPFzzryY1MNizZJmihA2cwmvF756oJn8iqmYGhMQTtJ",
  "key37": "29tAiRUW4DWo6mbtxqCuWdLzWLA4u5PR5wYNSco9qR2qur8q7nB7UdZCNTnb2BiQdRTuEHXfkpc4icmcbHcUwNqo"
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
