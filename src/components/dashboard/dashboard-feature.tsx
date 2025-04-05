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
    "5jxuKBETWQRSAVVg3qUssbVoSUZZpDjYetXaSamBVUdrHfHwSJGkyrPpN4LCoTq3wWg4aNDSbX76AuLGGzWJZ7JS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y9sEWJcsXLsZ7fP1zJsdANCkh2enALBdxJXFyqHfmHhFYXjfjBiHdzTNS4UCfFe3py9vfdn4EnwYv5KJdrw1yZB",
  "key1": "49Sbg4iiKLoZAhjf4iiYdzfKsQnaw496UekZDWVRaDqhfFmPvaC9EnFpi2u4CURjEN8UBr5Dq2q5vQ2pSS8skFpd",
  "key2": "3AD7pXoY31nzvk5YiDcPUap5Z6kTpoNhwQCeheftdQnr1DXhWW85qB9y66LVddpJXj1RdztYehcevDwfdzme2ViP",
  "key3": "3Cr83zdjkSSu2cKhXSHzkUkoNUCWcCaXrWYygdVhk4jcQXSQEcErqxjDuq1tki37Lym5sp3vZtnLire9DVK67nTY",
  "key4": "GRR7mkcPgVgMzP1dzxEEktJqmxC3nYcKkHaGgv4i6vTo4bSnYLCVrAKVa2bTtPcj5CaEMsvzNkrySj1vjQh2uu1",
  "key5": "34ZXXTFbv7Rcf3AmH4mG3fdeR3XEQKtjighKpHVE1D1ZLpb61CAyjvMbbVxTspV4fx7ZjrnZ8NkDXKbDkGXyYhPA",
  "key6": "5WQYeJYdV6vLEpbtcTmtZbt4jzjuLNSypibmSwkfZ3NC4PSYY7guV88FS5w2nAQX5McESKczUfuAgwuoBYzygcza",
  "key7": "4N4pofXUQ6wFq8rNM12csPwGcZTTqf2LP7iDdah8seVeFAZpFqZJEzNz512Vntp643EhH3G69pg2yNGGHVnVDy6M",
  "key8": "4ctbV3jh8dquMM4dW3kYaW4xAVogTsFFY9z5pJ2fW68XQrRWR6RTnS8t2j3zzrfemkgM6GmuYgBCkfv4qaqmFoNE",
  "key9": "2idZvsR4fZ51ggtt9DQGrR7Mk1osXEmVHJccab3Wzy6EGLXx6A33HqrZXGrxWMxP1fgaNeRvJxrUQsFSGxF8M5eM",
  "key10": "496ywkcDpv6xkXE4XXgPSzUN79rVC9YY9NNChsZABtxJiYfdU4UdPLEsh3krZZR9sZcm4iZLsGFMDUHdGZpNMzWh",
  "key11": "3qZBbkSu15GoZ2Qzjv3k6BVNFUQiqPjhRKy6meiHWZvJ7FiWZsfXatLQLtmrSxwWm5rQK3wjSWWeK89SUfZLeou6",
  "key12": "3eCJJW6jfwFb8CmLsWt1D4b4Ka5nvGN28wGyMQjFXf8M1Ndrv7sp7WyZf9pAs53BaBMPWWtfz5HDurR4ULw1j3iV",
  "key13": "3JxztN1B9hNUxoFBMYXFoi3v4rXWbycJkQJPQ6ss2TKDDKWYtKw8oFdmocfiFY9b5gXB95KaFcF5aJrMrx6myATf",
  "key14": "y4e4k8K77inYkiynx3fGLYibJAjD4HWR7H6jbLCmDE8PrcX6abiYRZ3QKwk7XijNvHwHfWJNRa4Xy1zbgyJ7eWY",
  "key15": "3DEcpwk52i3ouxaXHqA1QzAgZMkmebrhRujwGXksMMTJc1kDyWDu2LF4qt5rLBQt8iEGbunaBUY8K2kwqrmEMuyt",
  "key16": "2i5bjT1fvoSpmKAFGenvcWhjwTdGLYprR9dPMpdSvc6NfHoApyoxRYGQcQnsRoXMGx75rPHfhaeWFQNbFoyZHuVb",
  "key17": "38daR4uQTVXYd6Pqv36toNAjtxrHN2oHqVcGHtiN6EnEVnvBPq9vcfTfwdx24a94ewNq8UVpHdRUPpt59aLvCYg9",
  "key18": "62DHiwr3JcedR9AGHLzWFNZJ1395JFsA4GMjtdKpUi49qkCiP7tkk6L8CcSCm1GvwpbAVWC4juokqBDuRRUbQRnb",
  "key19": "2czHmkow6CnMzj8inRhm87MJxCugXZGViM9HNDnRkE3tP8EGWjqVgHmokcNa17Fyz2Bqavdc2gmBQZg17Ut4iswZ",
  "key20": "2AC6vSSPpb15DCFYU5YMnFpcvwp7R8n5wsayo2YhBrckJg8wNkZdbG8eN8DfSkZNQx5TeRKTst5hhr3yhNHrNK2K",
  "key21": "3stxjG3rhWGTDCiKwbLrkpmESWKuEbUXdy78VNkNejY6hxgHEYoj3G2fXJ6oH49U3oMKjSML4g9MAtxbYWEXHHXo",
  "key22": "4gAFDCgFeqd9iPvnk1rCKX3if8pVxRFAc5cdVLhPUp2dtNQAVtrkyQvkU5PWzNrQEz7WcHT1Gk8qccUMdGDWpXpo",
  "key23": "2qNiniCkoBbfQsKbTt1Xp5nbTW3PoicAQqLwxgXgQcik1CXZPPnpy9wQd7waECpmmbV5m2MzEF1nDoprqf2xmnfd",
  "key24": "5SZh8KiDVvYWEmqid1opQ9S5q8mczn8nmzTcvC1xHL2vCvxWt2bU9GjXNoaRT5J2pdTmRhLB7PonS8PgvGsLZ86b",
  "key25": "2cGArPyhqfzZt5MxH87V24nQyyHsKYbDFnZSQUQgnMPT2cp2nb4wTJpcvB75vs19iAXvJEw9ff3cNSDAy2nsgsM2",
  "key26": "3yd8eQvxttCz64P7FMmeqyKDcsj4rsvXYQuwZjuWMMSnqq3Ktj8SB8mNm66nb51NCxaKhQGrM9G995x5NAwMPrvt",
  "key27": "4RCTEWfPxt9XKuDpXWKZpggF8E8CEeYQ4k2861GhgF9WXGpx522nVws9N2JGRXm2gCLzKz9L6fbSzKNDucLY5q45",
  "key28": "2ca2rua8fmFKFGjTUHQzCCdsm6Yt8vat7fdq78HYmb52FHuVqsURkUU5ZHn18RLcBVGTXFafNkXiA9D4srha4b1G",
  "key29": "3b5YcToZ247RVgBs2Zs3hSF7fhbDBxuYaWfX9YroZXShyKPFHoTJCxDrwU52r7jh6BaYjBM9GGoTP2vDY3YJTcdR",
  "key30": "29zgKLKfTD4cSP6VQVqWmf4MfZV8i7hXMzTRGHhT17pmrG9yWvPQ6uWsE31fpuNya99iLxyuDifri7wNfWa68NQd",
  "key31": "5Vs5TZw9KohYNp5hPnpdCjCGQP6DmNStYk49rdZ2c4HAF2v5Bx11xFYaWyjsgdVFSwMPWd53PuEzTdgP6VMKSeXJ",
  "key32": "5vkZUgT6EzFrHVcMzb4GXKUvTH5C5cc3kdgs8N5HXhhUqxGKUSzDdY2XpKeWL3CEvhFTT6WyfokzBdsUU1t3WyTb",
  "key33": "3ikssr8sac7MBVKjH1b8ZoDRHisU5gVL9akNQTC52wea9o56zz3K4p6ToygXSNvL5GSEFqi3PV6A7oaFZLtHJY84",
  "key34": "3zE5SMGoU4a5gDon6c7nqWmHtovhcp73G9irUTkESQ3BNXnwRcTittSCLPziUKik65TYdDg7zC7o8UKS1n4ZNEQH",
  "key35": "4MJLdPqsmUze7fDY9QTpWNKxkh594EW7HHgqohJYFgFf43Cyqkovdb39yQmimFZbZgbkWNN8pd9DRUG4hsn13T1M",
  "key36": "2YZEwSSmGbhDqdp4KwrLR8LDWzY7nhoCMS6944c3muPnsw967SLATUwuJ9QcHb8KvDeZEhU6d55Y8aMuV2fyXcia",
  "key37": "363r29Es4TPkwsgDRrB5UptjoNRdNCfYGJucCgn4MWnHX1WvU2DvqFLzkPC3gWR77AUYUqEA5gy8ev5eUGiovkSd",
  "key38": "26PQ6yhe55NUr9U8X8jDFBoNjk475DMcn9aToMeXKfUZLvKjSVFAwg6JKkwoBRkhYzHEyS4FWUqa3jRPANMT9scY",
  "key39": "3EHMVgYFwGZgfFztrrZfdQytPhMDuHPXaaaTd1iwqNaNWEWb4m3RPFhCGWjQGTCN5ahYCowD8FkXfiD7VvdDDUL",
  "key40": "4TzCwt1UTk6tCbg3okf5qnRTS1CoKCGC8nab6xw2644gyajJWzyfjRM6WRwimimwy5dPwP2cpuZ2EaU65uswztW5"
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
