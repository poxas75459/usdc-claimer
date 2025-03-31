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
    "4E4JmFE1Cb688rn6okkPUZZ4ingJxTBF9o5mtY5N4eUT3UcaBfJnrAmpm8WQsitqEeBNKEnSgWxCfLBL2yT3YqGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EEVMRRYh6Q5Fg8XJnZhXpSCWWahgPf3Utk8TBzWW3C3NoC9WAEWkv3wdV5R9WAknB4raM4XM8k5uSXngeYgy8T5",
  "key1": "63KhGCkTmWsCyf2utLS84pnaCk5efk6fyRnSmMFHqj8wWu8nmXGv9U6RWJiNERMabxA9Gq9sX6yZXCaBxeazEpCf",
  "key2": "3EUP4JZZ8WUWxkkVt7B9YTKxHCiTyJULy67KtEwKoRFduhts6u6R7QrLoBd1xh3x98xyGvxvvsPWi5ykDJ3nRqjh",
  "key3": "378Y6xG6uT18LLGXPSLJ6RzdNwtouC3pt5Z4MrDGK84oz78kTxLc3H7KjvbcN9F3mR6MmNfVPLKZHAyG4KrLH1RJ",
  "key4": "36zvqNcUAhFHHz1CxpsyvJzrKFxHTJuRewSE4yDYWhLWrtNihQuXqH28KP38Lqrf6Ww1KzHQJcBy6Kk7QczPwrCn",
  "key5": "4TzBDWdDhnYDKTizPkAyPzuWL5u4zpeJvBG9hR619mtti28TNk6rwZEbScdjo8U4NhDm2toufow46vP2eoMo2Hja",
  "key6": "dMqnbgTN64axPy6eFRCKANC4qPFKv29j1dyfKvoVf7aPthm1jnimksuDREcCLFKiqZPTXvWKPSFN6MJkY2RVYuE",
  "key7": "c62oyE2A6PRTQDVqcFKmURfkeb4eoj7wSchebEhPntPLEPDZnYwLzT7HMqhrRCuZ9FkEjj3LDBCChZRU8umkNe9",
  "key8": "ECgH1d3LCJuB1MqY7VHic87ggk92diJWs4LqR4LgDVNZ6qCeVydgkiwjs64AXAawHSgzVHmDuk51dRomsccg8yJ",
  "key9": "VKdqbERREWzwzfnnM8vae8reBBNVGJZHZ1ktqc4wcJRN17cPPHbAWsdWFCrAjWr5DJx8dcabortDGzutzxc4zAT",
  "key10": "WKdSpwJzWSx5ATbxAZG3BveLgCaQSH5oVTTwtoG1qeNHHRvyeC8mpLuMNG5JGcGJvxCwvyKDqF4GXzF2rMXSFaH",
  "key11": "64jyx31X1dP2ot92wcHqewY4st5HXbnGj4Mg4NwooeoW7TPHPboLeQMxD25Q4nK1g1k1fa4HnUkBHth4ny4aTaE2",
  "key12": "5Kero8XzwkTmH4UsfwoVneLSXwkG4pCP2D5SLjMVKxh5sntqbZvrBkyJjT9scFcFqwQ5HZcyNKt339mgMGDjJsLR",
  "key13": "ktXMHoYgf2AJHXYdaTwk5xiAYUH1M3ic2ne4CdgamgdMFxGR2n22bjNapmoDsuurwTjNZF5zAnmRwZtT7Qzpucx",
  "key14": "u6TinJf8tBP5evWaEHr94h3HqkUJjrG2uwbmpPirNqRqH81VrpRCeMS5WuVRe3DebjMpSWHupaehbAyX4X6gDdL",
  "key15": "34AB5p83dGQuNQoryoDarBeym2ZTod2erhHF7tA2p1QXgv18mG6QvgLTkGX7xs1sVe1DC2Nn2vy811zkCYknJs2Y",
  "key16": "x3Z87fnBrXP3VDT2EWuT5kUmBxSy8YU9Fc1VXiABnm4RNi2PirD1Eh2N9sBHFADLuwL11kmKQnSNoX9ZahUzW8K",
  "key17": "2x9pKrtwU3RTE2mLv3mV4jrpG8Wd1q7cLqQhA4S3G2zrADdQCpFyWNPXK35mrFX9uuMAec7NwbAUUQ9FmQMYZH6K",
  "key18": "3YTRa4DRGrC7zhPKmWUpRYx6KbQD178mP7GPeR4ba5CPjPKrzZ7QzYfuMqwTuNkyjiWftEfHSWoVr3yFyxFT4zUw",
  "key19": "5ZRqu7ttUPybD7xhCpJH1QQUg6Dsaoni68NYoFfBNNLze4WGmCNPPat4d8EeYAeYGUiRvgq5ueTSktxQr4inEpTC",
  "key20": "67Qwgr1dcHPR4pdrtZ15b1mEVJBGcQQMLxwf9j1wuxkzUF1FzY6NBh2N1TfExBv6d9BW5dNW3qfqLZb3pyiDnFQL",
  "key21": "2meRoiJk9BkSRBfASdAewHrjVESiAbLbst6Mw3ZT6Ytm7geBVPDfhCPezc1uK5tCt5SBkV4CVnJS87Mubh2rd8tR",
  "key22": "5fLdQNrHTGEVE6vJ3S434CwmQccgM8yFpDG1bJrVpXGQczYbM5pbpNLKaRvcq321aAupA1JpR42Pe1kxwRQdeG4g",
  "key23": "3usWiXumzPMePrzpWeN6M8mwvhGHoMBn54dCf2dxmoMEt1EKeR9GN1eNok9mdqaka4oiqLpGnNjxSJA2xs8vduaD",
  "key24": "4KyCtwKGKz4ZH5SJ5uB2FiWCQDCAQGkpkgdjqi5rE5omf9JT6DWHmud18Eyv7HHfsovVRmPvi6atDTjgFYWT2d6r",
  "key25": "66QFVLaEGiN5xJn1L1D67wGNobsEpvHdj3FwJHH4AERvABvQ8BuwBy9JmcvofQCGByAENcoN8vjhQeA9bZemteKX",
  "key26": "PPLsShu5YTVTLCe4ToVDJTQU4CpMXfV565zFPeSN9DQiMhpiPp7junHqDoYMDdbVQ6taiZ8zd2u8jGCmxeBfEXu",
  "key27": "rTZ5TmU44zcRbAcw1RngJ1RPF8qfLGY3riNYxgnKcuPwh2mM246HsJedsFSBkVLsXLUJi3MHMUpGS9fuMwdsgWq",
  "key28": "2VHQXLWPhmiEMBXwVq1kKD3JDa5o8NZnQiSPqC7nHrSRE8L67oB9PMQkvGKeopsaqebXBYGEWvhnNYXuoN8LuGkk",
  "key29": "5Hu3AM4xtbDrA9pXUizgzzgAJhSZSAHqDKr39LWo56wf87xsjDB56vZJ1iF7GFzb9ooAXgWdnYnGLBFurtWkQKDS",
  "key30": "3gY8J9QAx64DFvDUNQZA9QqHq7hzqbG3yzt3ehWN7tyn2vmP73yF83YUSp14RemwoHwLEA6YychrHf51tJJLg2vh",
  "key31": "5rGVsJjuNS5CuyFMoNeLNAfG3PKSnuoUmDsVuJRDcy9rYaLkLo3kwAGH2HZiVRFQHHoSLsQxsCP6h6GzAcfRKxGF",
  "key32": "35g1P2WMqdexYGmCK8QAD1aLWQGjqDkT2BPwgmWqarSRXcGQZR7sEfrT2KK5A2ocXKpje6VssH5Z1DDHU1x2TNPr",
  "key33": "WhZHq5C3KXEag5noBpsuwvp1GDJ21kFE9UMyAQnYgyz1rXJDp5rKaJRF5BJpZe6L4yFZH5fSETXviurmtSWFyQu",
  "key34": "8V8xj33yjCC8rBVAPzKztSJgi49QE28BfcDjC6huDRxqX53PxsvQfphnBEknwsbUd9hycQBjY6GSnYhmWJL7xyQ",
  "key35": "4TKgMz65DTHqyTM5RzQp2o8NoPWfGvzt4WHrTN7o6AFFBiRLUhBaQTRsM1KB6QXpHTukgYvWWkrQXtDnZEtK6sEY",
  "key36": "2HUsax7KJgx7Eq35khC75xrCRyYNdiiM2Kto2sX2SyQTaztEbNkcm4ak25bB2qieHZWmGxTArwzcjRAfWtnHcN4J",
  "key37": "UeKKPufARcpJM4qsYQcVq7pdtk7AJwbeuQtqfRit43CT5UgA2fGiFerHYKqwPN8sEwC3yCAG2zqyadqPKvbVcwn",
  "key38": "YWvoyRu6tfFbffgQ8mcz4y3Krc9aWMNxtkYsm1fpxaL6Gcfh6ZayxzoAqj3ZF3KHxj3jkoKC9GNzaoLwzGrqSpx"
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
