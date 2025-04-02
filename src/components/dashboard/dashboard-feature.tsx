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
    "3jKKkL9mEnk5PkWwCQGjDd6xSKbGLLtPsXqdwYrHAfFPh5QW2ahtatH81ZFGHEsQf8yrhtRhy44CmznoTm8Juo83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48QD7AhotFMHVbKF6NxBXEyDsZhDwo9jUsTrLedoFcWTnZeJcVe8SGSi1U8sbjUk79fWeTpJz727LJYNnsDewbP",
  "key1": "21E12g6aAWRKXq9qn9TwNZ64mVojSuKa71kpJKsWqKSQ6T97q6ATjS9dpMaKPqNhMb8GGCyxVjBJ2iziGhDNENcJ",
  "key2": "2JckbX9MjE2o7dNWy1bduWY9PNMQ68ksssDLgKPbptPDD5qwW2j65UeF8JbLh5dNhcHa4Wn3QagRsGMWT7H6vCUg",
  "key3": "2Hkx7HxfJFFtZhT7bymfUZd5353zYs9zERAzagYkWrAhNtWGTeLWk6z7B6vXasP5Ap2oJBmHzpnj3NPMPKs6Zgqi",
  "key4": "4QvZsNEuiF3iBNY85F87nsxgwE8PeSmuxqmKFUh482c1LvTKtxaDHJDs6kM3TeucexLsfN527erHiCjK4dyD7LY7",
  "key5": "58nBbCEorHGaED5YdDG7MLfKRAG7bXKYkyvGhFwu1FmGewoofjN18tLSTPfgVrjivaf3FLm6fqRwdorjDJnBE17a",
  "key6": "5SK9nPfRsu8oJVTKcpfzxgYuyNaenCSbq8u9ijkQwcbDDrraYBkdQCCJ8X4TQo2pYs6s5Q58ypEk1YcLhaHx8Su5",
  "key7": "4SPGiopVDQF6BsMQPKxP7xHrfNGAGJ3gEUgKiMwDPPhY3XST8AtJqqMyNYz6wtur7ft9qMTmhp6F3jLn3EKPKL7g",
  "key8": "u92cVh6m6jAy69TBUhzWcDq3L4FtoLPXzuQkjk5gvN9KDuWMjYEVUiqatpgvihng8EGJG4JxLH4HyWx8uMmuVjT",
  "key9": "3xviUTSDYzfLyB3JKKjAhv5PYHsVACYuqQw1BgtUMaMgBePVSDLuSzmiMXYwFc3Ey74hco3BxXBK5HHHpaagWnnX",
  "key10": "58UkpnJ7wGuW2fTHo2oDkiAEQW4zyAqKgKs5tZrP4VzBG5BKRm8uxqyDFYufwMrxQ48bi5HM381NhD9ejAEBWXFY",
  "key11": "Ca4nb8kFDu3Sn6D3eA72cSqqUbzd8uhwSLnET4Cayp54cWAkeqXcSzZ49EUjBjvN3kfsU6zXb8BLSyUXyopsSBv",
  "key12": "2Hk6fUmmBqDDxuJQkgNzhrdEansFMdpV8ejzRNpCBZ7EwuQa7fuMe19iHQJ3nxe3bTKGZPBDnnBtYggREeuqmRZJ",
  "key13": "4i5aNEBNmVRBVsu6pfUeYtHkhd5WVBJEXLzJxi15G7uwRAPmyKzSJpiq1E97xGqJEQp68U6RXV3AQUQoudxuLC1s",
  "key14": "2HaLizzL2XfD8cJfjSMKsUFvkLnv6gUGVESDAXkAKgRPKCzjqTfpa2QcKTN8pBS2gJPQpPzxmdaBtBFXDcEGjyAA",
  "key15": "3yKpk3ivZQVPZ6yob41jm6UdVkoJtbJb292EXmwFDMVHvwKnZjnWRqFyrqwuqcjrZxVdo1EZYdKaD528ySUPXW7U",
  "key16": "5KdkDJF1T73XYJ3yxAT9TziEJ1FbzEdLXx2iBhfCrzVcop9Km1r4HPd1Skjg3qXBw9sdcEnXBEj8WEdhUQjHTYRN",
  "key17": "33CdGhVWg796oe864hb6CBXiXTqUe8Tv9zKcmxyk4BJhAVuciSdeuPdZMacvQxq5j9s268b62otpqu2uZNWTMFtY",
  "key18": "3bckHcP8B68CWCWm5fjCBBFJ6Lo31QortjT91zLyGvm1LNzKPgp3uFpqVB1cFKy2253gEAwL9m6sYBFGet5d9d53",
  "key19": "5kv136ryVS7vmfF1L2fVY2GFmHYeMP5EpYyxmqC4B3DyadoxSZLKAKAYwCEzwEeTSf7hXAFjekt2CWLFZjShMP6p",
  "key20": "3WQprSz3cxou1RLBU3QuLn5KqdtiDwBhujoh8TxDM9cY4CCoGbUResQEaAYa3bfkhrbNB1M8SrynQ2RbfN6sjRX7",
  "key21": "6kpRXaYipSr6JZB4pK5M6v4u9K4cbcJCCsUTSJg7SszkguwGBXgx3nSSDS5QQ1RpgZSMAC7CMQP7stLvHMe2bMB",
  "key22": "3GB8hrXETG3DYKuHpuhCEH4qSbDJbnyUfHTEmWZw7j1bM7bfQH8Yn3g3aq937bZDe9YyBVtyiXbJboZNhFLmw2Gf",
  "key23": "5Z4YmekKo199KmaeZJ2pdBrzxq7x6SW4BGMVu9WtEJHmLfy2S82TEyFEzjqXT7Fnn1S2SBmHdzWuBHW9uMDse3uk",
  "key24": "3D8N2TnAAZQ1JXBAaWpnfodrLtn5B9wHPKeM2JVejoEmkk6aAbYHyEmaoN41mUadbWimGkRirofQoTDWFDrvzdih",
  "key25": "3yT7JpuP7tCEknEs7nSrvCasoowY8AL2CpXW8WdsU9xWT659ohfV2VKoi2VbVkc8aPSLWpiMbh4SRvGWX3q26Mfv",
  "key26": "4WGSTmTy5fHS1LTwg78KirEHQRZfs7Kz2Nfn2QoSEUUXqnFLDUtC6RxJkF23iRzUjGnt2yAw8wHi5nzpgiBRJjEn",
  "key27": "5cuU7SKjFwMgiejUtQEYbNpKmasUqhg4CW4cX9UJooJhgDLz1BjZL3a3NFmsoR6QQJhGZfBew7hChz1VMg6zqB7B",
  "key28": "pZh9QZegVTfSkkiLjYRwgHNoL6BHQu26fcfqaPwD691MD6kP7tXznv4JJoHbGKChvh4CX5zdiELAheckAKaLMcB",
  "key29": "5K5vvqmVBdBYUGyAaR5K15jNFUh6k5qh5WUFoZSfqFHh271q4Vctciocsm1Q5MCvtYLQXSSh4ov5AMeNhjJpZLBH",
  "key30": "DoiY5x2ENWzfehdz8on3Tr9SoxfS2YnezwDiqyg4CYApggv51Zk5sicGEAtmzAXuv9UTFNjk5DLVTHPPUPokBJ4",
  "key31": "3rrXceJjhCKrGbrTbHDkwD3odCZrR69ghom3o4cFa3epK52M2Y3uZsvH8onqX2c7eVnkTzw7YC2dE52tj3JNsnE7",
  "key32": "4oVoqCf5EDHBuFuXojAgnqfceW4r3BsVvNSR7HHY7rK86PzENDTDXBUjVJwmTgeknSbjGvrh483yrELYbiwifcu3",
  "key33": "5nieacKmMs7E47FGLJ7p3fCCjwQifbq9ZguerAeCxdZEFDo5D4MMurrRQGP3QuG3FZqwoRm9J4XmS3GjCfjCiwue",
  "key34": "4FDY8EXRzJQR9t4hw2rLrCAMGshXSFSDRrhtUNs84HzbdVB1gaFcqWPzdj2SHeWKno55JpTCD6rECh8MbPP2Fgxc",
  "key35": "3hzKTMenuvbogNHxtizrB1DN9hx3fAbj9xESGfsn2t5YkxqJ7t9zkPL7FLgXT1sd54USDPGJZtMV2UNCTXBCtmvx",
  "key36": "feVieiYk4LKAVXk727BGRt5EXrL2wdgQfMyXPELatfPynQCjLS4Hx7v1ot4P78uxQ9SJEZcJx9Rzc3YvMtLuNBV",
  "key37": "3W6yMoDpsHcZGrpSqjGNokeVn7YvR2tNc6jUxUrMJ6wXU65BZHP7RJU7mjwyRkgVWdXLrN6DoUtwv3jdUykJwzbr",
  "key38": "23dLpt76ffoNbY8rNG1WBUxNCqnWEv42tjHKWkshZgNyUTXJKkSXjQfpZiRgsJMCyzueibWBTsdTErT3FArYofos",
  "key39": "5WvBmoab1KExQfVdKbhA6VGufagtU33KdoKdTYGfm4kCv4UKmBEJQM3bRyn2qHR2xfwXEoFo3VDdtdVvsVer18a8",
  "key40": "4VmBE3qhYxfGe72K7VxuL3Fb7zd2J6MTnwWR5KTK7Em724ptCP2zA43NhGDxSBTE1ghdY6jTx1yDS3JZcBkfptzz",
  "key41": "66CG3ydAK97Sp2zQsrEBqwAsbo4abBmJSGEC9ptzVTGiAyUY51qcQ2YQWyqncJDqeZfAXVyq7FfT2fov11Q1AeaT",
  "key42": "4k9DmUcbw2hwPT6ttU8yzoNPvGHHXfnzC6Dq4m2bdMUHp9cezQLHZKbb4bYBoAGXnfAXRyzQDMzu7NqUYncsb9Hm",
  "key43": "5EV4GgGgkG3WH1eivNeustWYLvb1uBpvxuM5LVco2uq1bjSu8WmQBjd9rnNRCMUvzjMhMvYjHeFW8QVpBbWn2htH",
  "key44": "5f1ZXG9MJZMZ6tSXhikvvA7q8MBi6ApLiDnN8jcUqUiKMcLEBDkmZmWEZb55G7SXbQpc6sK8b1bGm9SefdUzYw52",
  "key45": "45966YremeqJ6s4sNBLFfQeKPSqutoiSGoXXhVq9pUjACf7Sd1HEQ418A5x47bEJouWmK2gco55V1cxMGPxFZkbD",
  "key46": "3w1HP3YN9WMAXnLoimzg635ttQUfa734E1BrL3qa8xfPVVw4GbuJrfNYZag5y9wErqX9fppxpEH9xvnCvmRds8xE",
  "key47": "3Cd6UGYVS3gUiExpUSPkfnDSzACudxq42e9kd3GiHaqdo5VLvehZcPiJwqb3jehmgms9degP1QL9fN168Fh5bqhp",
  "key48": "4rKcUeeohwk3BLs5UZkf8CyU5pLA3QYf88X3dS119NRgJzY1LRJmHX1XacmHc4hEBh1GwgTzsipRCFqnDDTDq8Q9"
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
