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
    "5Zzq3g1wd7K5983AiUVBSJEXAXxBCdCbb7crArKdXkZaCriKWPTxEUoDVSgrWUyQ36QAknLdM48nZfevEeDUwTEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BU8sBfsTNuYHZ6yWryeVMopvb7M5iCwh3Jg5Ukjrkp8Lctkwp9nZ6Fmz4LqxhuDvuPz1czg9ojhkQdRXiiU5EaN",
  "key1": "sC4t9m5zbmt8Xv4BqitqSMsCxtTGnbVXz2efZXGyDwftK5TEtPfyq3HQM9wFFfntfwBpyvsWNrV8B8VJs9dg7xp",
  "key2": "3dY2zXNCic8EM9qocZU5iiZ9EvBrwuwX5bELsSfzfZKdwd3ySu6NBp8TWii9yQPpm3aKLqC2S9XFNMnaV3nNJvjx",
  "key3": "2uBJDrre8b3hHrLR5kUQ9WrbAHAhWAiS2fk1DxZBpKVKLqkx4oCRnh6Zq98bQHfWtUjHnVjrWTRMig6DaWM4gVCK",
  "key4": "3iUg4k7z4ZE2j6cXu69Da391LwiEPtg9fLJ3VdLcaQMtiph8YL4fbBSSrZDBqEqmRoJUM7w8NKUwVYxq3vUMWkS7",
  "key5": "4g4KLwzx794XrgHV9dSmq1JwxoLbEa1bfGGTgoFrddjzcU9MRb5rTNt4u8eoaLre5UtVBCDUt6HPuZqPXJ5UAHcb",
  "key6": "3sjYWpkx3jmToGAL1mzU9oHbVXCB6JFtqMshk3DKBEC366mbqwXMKyd9PFALFWYaGwsdtoxidnJTYEjLiuhm3tyi",
  "key7": "sVSu7FDwZaGrFNtyZxFjLkoTwocC2GbvJhHUcgru1M42qCe5pFDZkStoHCQiLfawHk15SxyjpcX5ynLcNCYYqzy",
  "key8": "57bC6tmofNYH3wDZWt1MeK2Q9LVrjp9MQu7o6t3vP4BjXFrCmj9BshC6pZkSpVJ1usXqASK4nZSznhGAFiPuNVsS",
  "key9": "3kD9fWU2UKqrH3fd4Gwb5yLaHe5FCdzNEawRJdZ9w72GvPmnSRnAWEVMZtrk7Hkzf4PdpeDsWQGeDgm9umHsq3hf",
  "key10": "2rxqQ9uDz1dJSE27LxV4NJstY79x7dcXM589Qf3MFZWhnwuD8ZqxcgdvZXdmfEDnFcsKQXNimzpccJbRTuDQjDow",
  "key11": "5KLd5aSoAZ1AK7ToPxqrzSjfomyCbDEyanxBGQwmh7J4oPPpESpe3zGUVpVckRXy5Ljjtx3Xumv8mbsr8uNyhS4M",
  "key12": "5Uz7gA28RSWVzD1s5cPTRSMBciFfMA3tUCstpYX9JB4Q1xwL28ZJR3WaGctNrtjY4DCyYB5aCNhqfJzXYBnUhnJU",
  "key13": "4tFWxY89NF6NTGwqQ6zPrdHw5GoQzTK9W3j9cpqewXqeGXzjk9YHQJwy5LNv3BzQdEv5pVwPPHHAhbwzNznWxfJk",
  "key14": "2i9VjBdZbmTCTfMy7bNeBcWs38Pgm589ex8A3qST5pQ7EyCyUzQfv6ZP593ekrrPBC2W5KFQAzUn31Z5A4X2VdRL",
  "key15": "2kaNb3Qm1mcKiaR7YqV8DCkHFshthQDj8ubHSrqUWt3DJRaCUxPzkd3CY4YADuA5KjLy4waEwr3ad9myWFubzVFy",
  "key16": "gebey5erJoRKcJVYqG99mbZs12f4eUjYxmspaRrHMAf4RGwRka3kypBrgC1m2b7d1NPNkwL21csByE7ZQeBZvgU",
  "key17": "3659bZMHb2WJ6F4gvpTchw3EKeryyVpwgL1qSEnfNTtzJEo7thMadEkcjFhgnHUXMuGaGFRRaK7vsMDqyboyEFyK",
  "key18": "2Jc9XqsGfw6YLsgm2eh19529wNHvAGuybi7PGgCJ5h9mtcfv21vrHw9VU8h4dFYtf5oBodFm7R6mTNZd16WHYfX",
  "key19": "nnWF7na1KcbWiPA4j1ikFMvoaoDt5y8ggDWdi8mBrZT9XpygKoMSukcrPQTD19cbZni4NqUyvpcDQCCzUYtPnuE",
  "key20": "b5iEkVspL8KD12aCXBQpLaXzAMtpPbUgMeYTUU6qSN5izHuXBZUTP9Y63b5bz8Ndtpg6xAGVs5HVjMpTUYVhEs5",
  "key21": "2qiPozASpd49KoaMn3TMJRGNFBo4iS168fAJQbQYjGSJh6baTRG1soVLyPawnRSw5tChvprS94LHEmRkw7k1UVsq",
  "key22": "2mSZeY2ySLWF4fTY6dmyYdrtsboUSUV5MEgD6Gz7LiHrYrBYrtR3by2L1Rh2ezBoizfh4we3dJEnFhd3VVBSgdmh",
  "key23": "2QPJkQczmx14mSnJZFeqj5mKnG1Fs7G6PkRJb9wmoD4BCxYoUZjqNmxbWkfAE7V9ggVDgkkvYGJMhNm2HQusghgS",
  "key24": "3iotPb6oyow7P5ggtGwWQnqeJmjdRVzqNPSDSz5umPxa1ySpgW8stpak8MnL8gA39EkhwbVVP8QZgNXuHMoVxMhQ",
  "key25": "2sg2QgGuMznGQzvixbEzQu6Xe12YDPinCR1TderiHro3XJUoXGKskc1JKMkc3T6uMqz8mK2pvEbhMi9qqDcy5pnq",
  "key26": "2uEpBjuxQDd4r9SNQAthMu3HiaCgq7LGinS8sjaxCg2XecVUUmpvv6ZuphF3kYa77cieBW5Tc8mtWh4jrQP1WBRu",
  "key27": "2vo8FS6wcGjEer4fNtWyb8ry89vanpN6zzQhoWDkp6LvJHxgz4awX5FPwAfpQjV2gmuxVaNhXQZXcgs3xGgJMdt4",
  "key28": "48vrrCyJ76zKt83e5dN9hJ6aLTt1s9KatvE8bAbtfpEQzREysD8jH6LLn9XXqWA3FZ3vGJ9J49G6S3N7F9yNHtJs",
  "key29": "48qBqZggqXAcQ6TCK3xgoHSWESB5JC2Sq9pyDn2S7PWnYS88sPhZKeopeLtvQHzD9yNy1X9acboR6yrTs4kc8Wfv",
  "key30": "4hPzqZHc21uPXA4b3G5XLVzFYVNya25eJS7dA7ATSfE9mkCYUFKy6DhDphpduYtYwMpzE1ibw7xjRJpRP21PvwDK",
  "key31": "22PjD3uYZxnwTqeHQsk6BbNnk384RT4PLieJ5ukJ3utQEMaQyPzcXD3CD2vV2tu8vo8URrThiUfyayUtLGkX5TWp",
  "key32": "62FTaLWfCPd2NTrsm2ZMcKQ2JoJfHWTUGbaFFXWHkTMMduLG7Nyy81kkuRKQvJaNuBqNKE1o6pJLtjCxSnaC7Nn5",
  "key33": "4Fc8riuMJcn3aiVn9YqQ5hRwyJwdbvJ3sP2JS2DTeWBeNhQcX93NA9Mxt27XcJPhHQuVg1nkKgRWmtgV2Ka3TuwT",
  "key34": "rXpEUW9CbA212jCq52eiD7j1gBFNmsrCHkkNdGK6rsxCcVo9igFgwiM8k6b9bmjge47yPcaSJptvf7NZUheWuiV",
  "key35": "RW6XB37wdXeMd2izCUxPjYCKe8Aqb6AG5HLHDM92o88sBzdkR72os4eRJCTefx31oQveQEGZFUjKJdJNiqsAaxM",
  "key36": "2UenLLX2etngubkiNvKTvVbEDSBX21Bnzj384YWxJGU93Stxj6GSymFqVpEsnYj6NBojWSrPYu1Pzqm3uy4XPhya",
  "key37": "4cDKbRBxLzn1QKDcP5yL2DUBdKvuyXEZtw4DCizeTFsBmCyVAs2sMXzYjxQeFqA6Cppfv3mayGz21j6yBDfRBZ9V",
  "key38": "4PeeLJBxSBjGkDdF5picNsf29FbBMfYP7FRDpyST7BX425LChAMUvjojhuzLnpBuNwLKT2U8hKvw7s1PpAMqMFYG"
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
