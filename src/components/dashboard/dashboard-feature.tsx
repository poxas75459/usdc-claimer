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
    "Wgs6rmLisTxTkxKwBxhbVMAsdoNDegWTPjHbPTjJnvxFiXwBG6DspDqw4fSwvrS3gULQHAAi7JrnHM1YE91a5kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jW7ArVkfwhxup1QsqYigDhHGvd1ezCemvnoQqTNiVHPUxjoGvRyZhCemfbXACASdDhigqApmA3Pq4Q67cwnHH1c",
  "key1": "2kSvTxcgdz99Gd4pG89z3a1hQTx5UShHJsWuSSVcQn1YdAesnysqhMxaXGwBfQ9jfvM3B3vdhho11KtfcfXieoVs",
  "key2": "fvtwo9fYbmVWmXBY5kvkFdtf4hMMj8DUUCT7nCmMsYGGnoLJ6EwAU8PBpXpvCWXcs5nuLHWBvRNjTCeDzANko1J",
  "key3": "4AGGj6E68mbNc3kBPjVMwSuXza2opNjiAnTBZtjk2Q7vpz4ZZkdBv8mwLhYEWPaf8xKbZ5tZNfiwdcyRH6Ru5M9D",
  "key4": "3Bscr7TbarPcmKtpB5tQ7jdDJVdzH4k2vtSwwFq4dinEp11UPQXy96BgyygveWxHfhqyhDxwxQyKaGuP1uJErMJ7",
  "key5": "44hpxrXLXrVgMgiGmFsKPJxvggifSVkRPszMBCtmj9WCdbDV4N67j83oDtf589FhyPREsGSmQPeAvBZ2LUY5UDYG",
  "key6": "3wUsqrbSHXafwjJZSvX31QhpH9XJU8voDbqx6Sf86CewxnhZyH9SNYpjWnUUbg2oMujyFPAsKdoLErNjCyxHs4Vf",
  "key7": "2DTLt9Np887VSLpqeJD297Kc2pnshVzoG9hfBTHGiU1B51hXGD3kaAWKkpR3BGR3WZA4eimtRwwVnSix81hAvpaD",
  "key8": "2wnfPQAoVWPND9vTqcwwbKdjPmEZzKaJ1wFeJVhZ9gtbTQ2Wz3xZYTNkpA2LGKkZagHW4cAKreDJoDRf21YbPUD2",
  "key9": "D9iBpZQi4WxLBEg6wNt72hPL97dk1SKiwYvGZPsgjcRtxhU1ZFSYFSwdr4mxAFajVYgSy9Ctsdd75cT1KmYAGLx",
  "key10": "5ifNkQRCmp6WC2x7BfQsJENyLfy5a2HobpQzpfFSG4HeN9QUBcDp2mfEFqfz1yA3pi1boZGUCfwAgqstbQQheNf5",
  "key11": "2HL575rVtAHvNpUPZHYesg71WQACdhg28z4wkuMfB6PL2CijhJvPZ9eGQenMd8Sr2irx32fq4T3DuhsTgUsBxA5J",
  "key12": "4WTT5YvY2goy9rPytk3WxrRBeFzQ1BewTpivSm9AkohAQdZW9QWnuMrDZcY1xXNj4ZoS7NgEeh9XhAkm5sNYnrAQ",
  "key13": "3oZE332S5gexxrJfLFcZqYxx8rnF18Q36w9WD2SDai2ELvS3McFzVAmqqN1HneaYKDG8gBMskcCEKu4fMsbPyo2o",
  "key14": "5kMwH6KPVC73wPkMAsDjp4cvqnoXU5PmZKEdvhn5zKCUsZehgonrsgnuPUFDvAF531PRqE6Tp3DrfwH4iE4yUDGg",
  "key15": "vq1DoeARJo7HMPrz8jSKVEdKFrv4iGHmStEeTDDXSCwEYcb3ohMoUuUjD5qmoyZEXeqfGWzo8PegS61b67BhpQU",
  "key16": "56xd8P9nPBqeCLTetVpzzDTMwdmAkmGorKoncFQFHJ8skgAnkf5jyEVXZPFoovkR59N7NjWnMZJtXEZGmXiChEs4",
  "key17": "46wfxrHBMtMEYjvqSy3ToVj1vfcr9Fnc9CreVZoBgLLMB7bNXNB5c7DBXzeFbxUtanAbZTxzjVURSfpDBRmrSDBr",
  "key18": "4Zt5H4ezZNvsdqkL5QvWFJnAXQ7nksy6PZF8n7MfXKBAFo6NHw5CV4LDS8VMHHCnENwCK3G6oJrjiixddX8ajQ33",
  "key19": "ghw82tX3Nrm9pJCheHgWARNm3kReWugJS7ZHovh1MvbMfGirk6RPuns8yngFovUyDM1MYcMigVmjJfpaNsvR38D",
  "key20": "47nr4kDbzRQbzsymsM6r1cQ2MvYRrEsgGKbP1FjyCsmbRXBeJ2sXXf7q8Kbwv3i3VnDda3uG58mSMYxmAwphCB3Q",
  "key21": "DKqDSf4bjbB6enoddVwUhQW3EaxPAmFaXjKJ3iPLqwj823i2anK7vzVYtK8JLi8fZg2p8MBpAZftn4JZpqvwgpq",
  "key22": "48wMfZjpTBwqm9nukwBbaEPoXyPRxFzMz3ZNznWg7CRx57xduGTq4dwdtcDPWsdXiSnQvcmCqVtiszEJ5yLzGKD9",
  "key23": "2fGxKR62HmqDUGa3dzqWpFFvwcYo8apmg7QdmkK97JHq4YEFVnSZvggwwuRWeyfphVZ76BpSkV8wB11gZz4hZ437",
  "key24": "2VN2Bob6Zju1sJzzu9oYd7UFbbcW378zXT5GfDRrmnzsVLvQC4TenFSSdXrY59o4mdrjftkVw6m2Hjdws5CSwQUW",
  "key25": "3QRZUkx3JCY2rfig956aBNKUuvkT3mFHf4fJ4N3A6K157THrWkwoskAWYGuPssYYD64PYTCQ49zuC9PzNpQwbNqC",
  "key26": "2dzKft3UD31BAp78vtgSVMUqdd8eEaP99VPLqhcu2NbQqcWhWejrzYfqifcF2UYbndvs7GjQPH3aM16a36aiykij",
  "key27": "4eBPS7gXGEhFoiCXYe1fGEb15sQhn35BfRx937dZGNryAiX3ye5VosNt1ttMMmEx9YHbgAXJSJqyuA73g7gXaiVs",
  "key28": "67BjQsJZRJqMUR32fGEbEBbDZNXf4kQibd5esc5pmUaruLpYoCWxLZ1kHfSabQBBrCbKKEFGyQn4kpRs7YmsEPXU",
  "key29": "4JJnMdG1aQasMyYysYjDP6rxoyRXteUyg9iczaFfM4iRkFjZwpxkHkMr5usa78QaVJu7NKjDxQHBq2ZyTMfxL5EN",
  "key30": "zjJrJDDuas3dpYNUbMvu9BvVruqNuNj9314jhhwGjsgeVpF1CSKSn8Zt1yfkbeNgsAB5BfJa33m23CdNLskxoBS",
  "key31": "5uYQWXkdwgE7VcPgZo932zNZ3N3drQgFnAzQwztnu1t8vWLdKv14JsU37A7iYhDV4DoGuaY92M3NuPmwVATZ8Bqg",
  "key32": "2yQxUrR1i21BS7KHSsGhdon6Nyme5uLShjw8iddJDAp47DQqxNFSeB69y7ZzDoSM91mEhpgrFuFEdCFBM7zK98kh",
  "key33": "5dBTrjvUcEb7C9xC2LUFowj3aWUcEqCydK5nGMb8BQka5xs5DGNWGPEw7csCjiTTtSHjT7TqUvqsa6e6vF1p6hFB",
  "key34": "2an8aJdviC5XJKygswxfGF1biyLDf3QFj3wxNcwmev5cBatK1oedvTA1ZxRVgAgdNXExLEwiUz55XT18XvWnLXjA",
  "key35": "5m2B14sec9yRwZx7UaYy1qJStMbKDRF5wdR6bLivXRrn3ovRG2hn355HgodYpWGdz6NcWK5JxYQ2DgtrsWprQjLS",
  "key36": "27hW8kEft6B89EVspHU8GLDKF9Vacaz6xcDCbfGYAv9Spic8g7dm3QT4MNS99G78mQ5p4VjtrmRu4dcqw1gKftzL",
  "key37": "2BicpbAxyyygYaYhEnZ3ZU6HCfzxaLc3jRLTzxH4pPsLv4yd2LMr19MEmJpHiNE6xmvAPfd1P5gbC9AAkt6biK9Y",
  "key38": "5vp1nYViR3UtGV1N3CiCevGBjBnHQTfGYZwrTic75K3qZpPnvUTYaTvcgppdJ1fbkLaAAzWWyyQm4gbAEArkFe1u",
  "key39": "3pW3YaTRKdnFgm1DNMsh7wLwDBAXWrN3MVnPyTNV8X4dcg6HGYWbzbycq7Grj7XRKAKVBXpgs6bGVfQvLpXnMXmt"
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
