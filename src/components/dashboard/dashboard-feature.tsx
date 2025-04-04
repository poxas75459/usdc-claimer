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
    "3p92NSYyucvJJry1nHVMDKrqqVprL62mmmDDFvqRnbugf9yTz2ZMafDtAmLPb1var9PS5JTtBwXTAvq6995JugQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s3XbhQBM1EVjY4umj7WYDg4UDMt9qJUadQQeS1QMUH37pKWJEgL2YkmqtQzdiabVSBQmJdG4dBpDYEvAozAoquS",
  "key1": "5uSUY78r4bwbcqh36DuYPQiz94puMD8QLPocVvuv4HiAdg6JuyZ2hE2JUSzUkMkZqJEycNdRWsE3NoHyybeUihGU",
  "key2": "3anQWEAu7gSEfAFUwjAQ9mgvmrDzus4zVFT5LZ7UsefBRUnPfQC8qqhLwKq4jRAC8iAugyarVtetBkKyuq7Px9qo",
  "key3": "4jPghhfhmZK22wyPT8L3m1gBfPkEvQB8SEySvYBgJs5CjeGBLz7AiVzRcBecqeqFCYBh2Xp4Vkyz4VH9NQyWFEDS",
  "key4": "2jj2KzeQzqR9QfEr35NRdF6NzstNuv3UYg5iAhvghKFCMniaYGabpxT1U9vyEDETnQzHRk7RCS3dQkGYwsKpFRFb",
  "key5": "4LUNrHxsAoZ2mENWGBzNjXDJyR9PW2ih48e9dJw68zearvR3s3VuEmsiYQd5khMK24Zankt1ABg2n4n6CMcetWnT",
  "key6": "3g7RcUibQFi33gCeJyp3RGZcWRbNPUQoWM6ekHQeEKQTdRPgRwsoX1TWRUCXSBARafS41AxkrqUyxTJv2R7oHMz2",
  "key7": "2LrqArMg1ZmXK8hsstdjFwqq1KrYZrtusjBox24yFgzshJhERMKFawTgaD6M1nSbigQ8JqmANcJxHgXiz2rhw3yv",
  "key8": "YW1WAaNNcgwNyXh8aUzEZro8vK4NPfZqaERRyW62Vdoic8ta9mg3jzDyfMHMMfNJE4ngVSHsMBV4L2VBPYCiPTN",
  "key9": "2Gio1ifiutapLrTKuqiEZpnpF45ggXB1CJ1xABBo4EMAmQa96ASekXWHxCSwsXXZvVCVNBtYv4sFCfTYs3M2rfB5",
  "key10": "4BQsveT61yjykZWP2N26x5i8ya9bZSLcPSsf6GhdL1ktFbK7aKTXbUDMBFocvW1RDBZua6ZrqyjjetDgWzm7eMLj",
  "key11": "5JpSs6tccfF67sb5UWoyAR9iiN7X22KbsftZ3nnuncHUtcApkCPaWyMu6ADjPji2kGheQsyJBUVyFx2MKw4nKLbU",
  "key12": "2y5Vsa5bLCK9wcp9TfihPSTwNaXrSZJZAiN5ejSTTWj8d2taKN1krTYovAtmXcsj54JRkMT5RoWjqEqnZBxAmbW6",
  "key13": "2ndyaq9ZSA4QcVryYCDSMfkLwZtvpZ8pqAHtyxi6XHNYrqJYLE4V8yqkZ1UCEsHgHdJyxXH5R7tPE11WGX7hpLBr",
  "key14": "2NvQPctHADhMk7BfijRREnyr1sJqFP7u8iu5abSuVQXjDK7EuXZ6YmhKJN9MbQhRdKXmJAcWk59fcXq2q7SYxzGg",
  "key15": "3tnCG8iKcns349GGGVnhRK62VdwcXtD259a1zn25QMVuBSmBoZPvttrhpctXkwrYV8RdDZnCMTMCDo1unfiZ2awU",
  "key16": "4xLPFnw65S595CCGbYb9nwRWm853o2FxB9vUFsBELNzqcQf6Tn4gPqQ7swRb4rAnr2Xsq2zisGjAUDavhraZ2TNo",
  "key17": "4KtJ3XX6V76VQbdYJoeyvRn6xnmKCUjGCToEaenVzBRrxGRR4wXbP4kBQ8zQVgypN8TkftiXHCp27WHDcuGK3ptY",
  "key18": "rXNeZ7N3GW9pRtysA6JRSsvJZ7bZhzFcBFtoQXJRnffQ876USMACtEM35TXaPAka1c1kQxgrD23uWvTEDkb1bB8",
  "key19": "5Lus7A3rF8L4C6qdSd66EcHbeCBfULh9vFeEWTCyNmFsvSeVBo4aE1cV8wU2L38RJLtnKDuXhLpaP6oKeZwGXXpH",
  "key20": "3QwsBhNdmfYcdZo23uLrMptGiZug6GeeajMsZJ2mcgpRPme2H2ymnH7QRxh4VRXRf7LKFY5DBd2J1mHtca2hBZxL",
  "key21": "5Um9NAiT7Y8ydPtJGdVHVGjHg8QXG4Ny4fyQMoiUMdQpHLWo34mE5zairja64UBHZTz15yrxAywn627PhqGjfNJm",
  "key22": "4m3LFd7LYRXPJNCyqb6QbYmeLwhWweZuLhLVbcU4cqAMTfA8qyj7AYZoEGzeTc9puG1oCEapowGADwL3wTepLPam",
  "key23": "aHKg1jcwpUdw6PKKD4k6JtR5ss5T64dTcH9xvffmczTrBj575BVycUGPpyX1pDcYYJY23eTVPkjQcc2YycMykLY",
  "key24": "yBXeXH54eWDNkYfis6zjLQQ978DMgHXP6RFPCMdDoUY86ytEHGrcXnbMYY8CoBy2EgmoVKtxErsr7K7Hu9foGdG",
  "key25": "4SwicduenS2fdPBviJtS8riiGmJX7G6sjie6spSFXps62ZYiKnxbrc1vUEscfxJrBkDYgjparWyf5tkBVKuSWGYW",
  "key26": "3759BPJyypokM1tQBBUJib89YQcByiQVa3E69o3McYpoX2PHz4uwxi3nxEhKXDP1uipqrPED5UH271k1dNkCz11N",
  "key27": "WcVduziTP6k6pKPVgCwAeTGa9xTq4vFkx8jhr7WgpghySgoFGvH95nhEUKeHx3mU9VAJkGwvci57ryz5QmZE3eY",
  "key28": "2wyh1YTrHLtbegGtX21wk9UxcezfNJFH8o5nMPjgHgLwCAkN9ZQQQMPfg6a522C4Ngo22ymPPcE63mPrJJRQJ39V",
  "key29": "3BSwdhd2ug4cfJPgUKryZC9pkCWMgeDCg3WNS4aUo7LxBxxjqFJJV18fmG2pFfY5yopstw59ENqBKRwHiNYLA3Hr",
  "key30": "4VoauJvzmeY4tNSciDYK12QhSSvknGwYgqMVLncNxToY1GRuMnBCFawWGSjBaD8Rwcd5tswh3t8HXzovNgdffEsr",
  "key31": "3vESzfYLXt3a8nHJTzxZa4PkeArmkwQvfTjzCVeWxzfsQYv4MCGeHHCeJrWVBq5TnZMotDruM2jDVoKYYVTzYhiD",
  "key32": "24VZTSzq5XbSJFSq5o5sqMd298wbRFom79w7CN3u4m4xYWLMDY2mvMuZ5xec4hGAsT3UszzdPbtyGu6s9A25UpY7",
  "key33": "24iSwMMi2ByWaohSGPKTjniEUcwawXbC3pKnHJfcvpUtBygbWZ6mEvhFbdk8Z8PBgFWsZqWYXdwgW8oQRjDmKWwc",
  "key34": "37YPteKRpG86nW45JQGS9tLL8ES9c1fKG69JY8kMqp1S3cFY2kM4nHzSpmXnzoi6uCwf7VtnGCLxzzV9TArws6XE",
  "key35": "2Jvj4FZzbu9hCECjHnBk1AkMBPPv3tA1VGz5qu9bkeWz1tdJRhKNDEonAxDW2ZAcvLzMTSTYsUmnGxSWHSiHGcfZ",
  "key36": "3B8Y6FpPGhaaM656iR35eHm1ZXdEjQJdu2edwKygbobasvGmuCfzopW7ReiEXnmNjQhpubyEna1vSdUDxs7wQNSS",
  "key37": "4br2iJseZFfW52MDCjfvJuh2b5y6PA2rKxDsqvdek7xpjAQPogBjt23D2sgysS3yuzNwhXKJZp1MgunCaVdDhd7q",
  "key38": "4LRtWh8qE14S8NLTKirwPeb5P2oxKkwAgu6byUC3e6wV61DR2foDeAttnGHoR7Mt8gwnPcen1pLyH1eY1FHUhmNo",
  "key39": "5QgUctwoLxKuUegWuLg75drRg2CSidYBgCNkiF8JEQUHVXPAqboutiTAbQnTpqJfK4fRW76n7Vc5vfG9DdfxUEUS"
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
