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
    "4GiKgd6CxSqmX8A9tVm7UGgmVtVRPDAMH9buFVVLRD7uz7koJpvy7t8MVEuvK4wxAyQDaBS9f3yFVmwYCsPtjctV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wQodALDgUFa7TooqyWaGXkgquF3L5PwseSqSzXjneTQdZ15hyEHGHHhvZr2gXt6vp5hPkciMEn756Prc3Wmuxw5",
  "key1": "3Z3ZwtH8qe7vR87rJXuNda3mnhehuABNph2P5aJUmjMruAhwRpujaDy4DZtmviSJsykjoHoyFnaChAUFztpNvvLr",
  "key2": "2BnM8LJLdvLic9at6XtLTVEAdB6JLXqhWAMNrnhyMGux3CY9y6UBZukfhxNNaETg6DUcEFbwHFQHUESS6ba6yjyV",
  "key3": "645xYsWLAUXznN8pRfyxGeRkvRPUfrxsY4u1MiM5Ypy1KwUThk6gcxKNJ7mXBC5b86yEgNNjor4Rzzc5mMLM4shK",
  "key4": "3H5wnxpXU9CCvm6XnHkRCzxWcvMW9xzu31whErsjDXtQePzQwm1bC65sCn5YQgKRJHciwZtLMfnt6b7GCcjUgbbi",
  "key5": "4GzaEjGC7FpoahDk3QWvsbbYHiVqCSeXs1MSCC3V9RmJLit4jrwXcfbmm29VZ6HtGDVgyPLhM7YMdmopFNttddso",
  "key6": "3N8eLZCF1BPcGesEyC5eDHVGpCEx9KiM4iGg2Dpg3TXFEC5qPKgVznakXAMrbZtiuvMSrxHZrRgL5JEf5r78co4s",
  "key7": "66VZKXchBMQYLEnQN8tVMpysvyyfSCS4bqAVR9ijqgakDPrDNXmrvaJFAmSiD8QneAM4R2XjCmCe9jdKBG2HSPxY",
  "key8": "2op3QZsV1Dtuz5qcV3nkyNLshkEHf5XBvKfivGyXrCCSnfi1kdU7CAfAqMckN9rjhwcqjsp9gYZA6BXgn61vqdrp",
  "key9": "57LDujorJiXV8bLqUZF2fi8JjpoZpMa4C3Z1o5qDU5cKEL1aD1a2yWnLLj78smi6gHXSdX6XXq1C78m7g2JXq2s7",
  "key10": "49ZudBzbUTfcZ5xAUc1TquSXjhi9oE52JU5Rd3yqziSKnvX9NE1uPPVFiURk1WpQeoh6tQueorhd6bYnx72bJDX",
  "key11": "5rYkNVaXQxc8ytM3Ypxjqi3BsLDrbXX5V2zeNmPtfJwrvb6n8AMTh6k1unNDtyw4k8WrcebQj5i6vwWEuRoSKQjW",
  "key12": "8Bt7JjPnQVPAfAvfQCr5pmWznr7Kfdfh9fho5hqtpQdFZ8U8e6gifuD4g9goFBbeLC1bNtkpnANWSRPsyx7DeXe",
  "key13": "24YpjK97Mgd5uNSfuzFN4nttZ6D7V8FSvyyQB3m9vjc7iaSR3UqqxbB5s54aa5Yfq7QK5ExWaFPEbRAKgaKCih6g",
  "key14": "3AotmUZnuXas8XUmuhqcMAmEfzeDMX3xckpKVek8f6D1H1BNf6ejqgpfbTbA9ZgLBtqmGBiB125kHyfGsnoo1CWc",
  "key15": "ynYS2n626TDJtS5aUZEbNuNwMsMDdgfHuJauJrHaAzzC9DNikesFhh4seiPS8F2oRjjfYcEPDctVNW3BFQzpjLN",
  "key16": "2UP36f5Tn5iMrKB5XnJrEj4FNyZv1KToShXi6ntsV9zha28NkDsDt1tiZKQqfi6GwXWMUGprT71sg5ZVpBijn6K6",
  "key17": "3tsNXFkiWQH9egws7v6X1GQ1zdewpYR6mkSUxLq1XkYqnHKU1TSatYUe17GMDKAxLJY8uojpaCQWNCQPygYcb3nc",
  "key18": "3xF6Znh1mSvS2YKTH7notwprVjYPapqex6cjVY4NPZRwV9sjnLKb6dbWGYhx9tAsdArshVXwb4ikpnCzFQeAby3K",
  "key19": "4prJRvkCjcSC4G8jQsQk8cfLqgAx5UHuu3JaLuBCwP8iUP3Ao2KecxWz8jzYPwKBYQwEMRA2HJjA6bhMdvfMVP8U",
  "key20": "62jezdSpw1Dez5nVeRxbypSfoTyknEGzb1hJBdCF7C7y15j1Y81A4mPWaipkTj6fNrNQEmXNBfiPFADaUELr92pj",
  "key21": "sgNhYUU7mSWeTNvA9qa3r1jyQ6JRXT2w44XujRVJcpxFU3JuPgvzjTmQrvqyvTKz4LB1XsS64hzhqCPk6dyPFy1",
  "key22": "7fREUZcPP4pgRMW1jmcExTtH9vjix1e92B5zyqfE38CpGYgTEovUWJcUZH2nwNm2b4bEaLpZTzAZKKMMnw82m2S",
  "key23": "3CVgeKb3gQQG6bHD6LAyxQPuUcjgbhzewKAA7pvWDco2wJYj19ZW3vYvMauVs1e6qrfMonH7dqATMqsfgwow2rFs",
  "key24": "2rjM4eosiHpPxMJc72q1ovspt8wNY86G69DtpQ6YfE5bahhZsoFVRz9ATPy4fMnfmmja6CwPKSdzxEfkfPNQpLCt",
  "key25": "21qH1UMvYNzumgXV66QCEizAawY2WecgPDbkfQ6jRtyHeoRZUjMAcWaChYv8XBRu1YGy2zHfzvp1m87sMwN8dga3",
  "key26": "3HuJPJEQUMmqdzTSUw9R4SwSVNSy6Wj1LASGrMvQg4aCTrq68T7M19dQW7Zmm5EVRMtP1oYCRixvTEnj2nHTv8yU",
  "key27": "2QizhxTWkRNssEhE23FqcXobnb2p3erc187HpzBQtv2gAYbSyLq16NmFpeusY1BbHZpD9fT4MUFgbgkUgsYEih8f",
  "key28": "4SLRs8ZNg376nvBFMA8P1LkonuzSkUgLwJqQBuFSdEJZFXaGQWQRvoMVSn9ZjpQ7TqWV4LyWHEBRA8Nh6i4UtP1m",
  "key29": "23XNXf2px5j5WtYxHXqAhbjGzuQd2ahe2EnatVarp11usjxwczmck3fQUifkVxS2FaNNWbw9EM9Zpx3xoSEeafqp",
  "key30": "VKMDAvJYpC6HftRqTTaWVNsRyAqg51xmiuXMLPaNtKDiGVXQJDRVxERibDRAMnEz28dSb2ndzYHuxB9QH7FFGMg",
  "key31": "4erZahMDNpdv9yoJQUa3bpdrK2gKmKDywwjCsjv3nmdhxpn5MX1hFMaXEQsupSrKWUynKyaA9PZehLWXaFUMZwgh",
  "key32": "4LvqRdX28cc98Ps3SKA4XWpchRfT9oGHMr6ZWxPax9Q7CN9eqbrLmHmR3b4ajYkjrd38iL5qP5fUjJWGLbb2dzwo",
  "key33": "43ByLGWRH2UHa1waGGwechv8wmQ4vDarSXdRywAdtqdcikkzNJ3Yj18BrehBxj3TCALJDoM43Uk5PkRKL76Kt2sD",
  "key34": "3D17Z3eEXjfPZWztZyZANarpUbQssaUCkxgpPZDA7rs9j5bjZ53cviftoHfRXpSCeuzhQSZTaUxsri4SA1wwHMPm",
  "key35": "4xsTyEFqiJJ7dn7uBW2r8NCXtko9LpHvH6tWmZG9XaW1SSnR8mY6Rb7xpDwfkyxm5ymP2Y9oiVDAjcFcHtv4dMTU",
  "key36": "3ocztxfm9BfBiqPBP3JqRmWroehrwLHDwZMf1USecRd2yVU9kLJH5fDRPvT7WeUo4QmRUjiC2gK97twLDA84g64T",
  "key37": "5qKdUXcXAft3re89jPmMRHgJPDKjVeHhsdpdoPBmo7pNBHMgFnneU5zLaaNR9sm53RtB3RK7w8EbuJAaW3nf5Tzy"
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
