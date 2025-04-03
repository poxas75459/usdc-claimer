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
    "4GYMCkaeG8Y8hQX5bBHmb2LEVHsM6f2w1SDV1Nv24UGEZT9QZwSkLeGnosih3DDb9f3z9Du5rhKvRVaVtkRb2NiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hn4fMM4L2zqaHpUfidUKEKsWkZacBvHkw5Zmn9DouyY36PDHeHagzXs8Tx52ZrAzUS5NzvQ2VFyxAPjAomcPS4i",
  "key1": "jt3x1jh9wZMXBwDoFbYnbbcFrR8y8E1Ly8NHhrqEUUVctfY8AmtJDHRtq94idpzq2KmqV8aV4tmWhDekbxV4SgH",
  "key2": "3GsinVEu1Z1UWTbFQT2xSj21zaCxEVspPVWXKtdtHHWx8tVTXvEB9Jjnuk7NUr2UdB8e2HcQDdBHw3pcBuJW9jSm",
  "key3": "36uoiFxnUpjoUBFLWsVAAAcjr2sjQcapuoCuxTUrkCEna8FeqzV9wk8PYQCionaXBDzffaoEU2mTYirixZKabc4X",
  "key4": "5ChUw4sE85nNwcwFQoE1kRdFKfSrbMQoExBZ6G8Tb5ANrsy3LUPhNXjcoLGdD2HCzMPQYpX3hPHEE7UNbX4Wz5TB",
  "key5": "2ZT9L3fD9QRb9hUwRnTePfV6WPXEgTvMtX5T6hK1P2sBSmepJVXZEPeaFH9F1FCidReyAbjtW3SgREW2hXAJpLRm",
  "key6": "5oPxiDKcz6UjHqWj9nc1eABgt9ffxTUBPDCqaxiXkRG6Qh7SruN1YnABt7UGbYeLgrg3sBbvo3yaRHFKdeVLQ6Jx",
  "key7": "3y37v2rg3PnT4EsPm5MQTX51Gua9Dg6U6Qngkxbsw5Hr6EbV1dqBdfm17dVBPE2jpffEqBAdkaT3R6VKgWSxXU2S",
  "key8": "Dkc4n9ZTG8WSXKQ8egLrJTnxhGU2YMsfQmA5218DZaCn5HzvruZTztBMSJsVtdxx71GsJKSpCDntXmStrzHwpzi",
  "key9": "2HfidAxoonBZ8Xiuxa65g7vJJnXhUTTVRZSGHY7MNsFu4noqjURjC3WpQ5WrVAzFyoPHKUEztb1xpj4Hvkm8edgs",
  "key10": "5DeXBfy9vKDKmjYZKDGDPePaYdXAz2jVQQYRrKookAr3dcBZmPJ6tF2AANo22r2kHbhP5jy83ecowTPCx1jMXVxD",
  "key11": "5DxxZyDPaH5Xi6mhh5atWjqVAcjikMbFyZa4vLcfkuSuRzRP3YdARpuKsPQpb9G1VWzaHX9LjnAA9xXykuV53gvk",
  "key12": "3ebBe34rbrGzsp7fdCp6YbVDPYf3jeNRM4U94F88MphQPHcsHAwTxWW48CBaPWHGFobuyWU5pUD2BaBJxvxsnkZt",
  "key13": "5JmzxFQDt9oKLmSeZgBGHEiRCPydQUQPbF7MmGoEXrWcYyxpUw6XwC86ztBMPegMbG5kyQrAjvkHfuArg8nxjLS2",
  "key14": "5hApKcScDRYse2rDWjMgXUvGjHnMp19qggYxPhgCqQbUw9cmi8JY9SbhZH9fqiQUcPxMG1VWasUhbuKyvEDkuNXe",
  "key15": "y22C8rmHcVBfRaMLFmhbdh7AqztsetN5UnE2vHouGuyGEwLHxaMxTdKjBUJUMz1VafqYLfjjQmYv7CqNkKK5Atd",
  "key16": "5cumutc5cByh2JBKg1sLwypXJ5GN8okB4rUaB8oCDcZqcURE8p51ZFgSZhYmiqTkJ8AgYHKy5mqQwoAfiur5ycCc",
  "key17": "2qvbbUEvr2YbxuHXvBa3tTSNhFvygcTq635D3dCztREe6ydKWumJQLudTH24H331FcFX65DTFMBKqzKgjwBfDTRY",
  "key18": "4tZpY5HZCNF8i1vKzAWxCJf6M3rXNPSJPBn4Ly5UU4VqV89PW8omFZVy8jLJgGJazzdBCb1UqHUGSG7UaCz6tsFL",
  "key19": "eP4qTthq4iJecxRr65MV9zrZFWayHMuz5tThpuJv4ssH48hseJmgWx8UeqJqkCGVRcCvfQ2DueN3CQKCeS3rPsA",
  "key20": "51MhCCrxNpXvjQzXzqReoaGpwu5RP6527nScg8Me75okkKVYsqJsfEoJNqUDJSFmaihBwYZ8ornnZACXKGgGsc9L",
  "key21": "3g9Ru4PXu4hWZUi9P8aDzdT5aEheQhHD6xKZznG9oWeH55peWHMeYQXFBvg3WTDN7bB8oZc3UztjaU8iQ3Bnce1Y",
  "key22": "4UCVfAjuuCaW3bFQ8WCwSLBm9ndMhsQUiHt6WzUpSv9nYzCY9Ei6QrgyEXx8CD15ioUC2e1YCwFgvyy7vTFmytqG",
  "key23": "2abni911j2WTyratjXPsSJbW4kdtXWPY98VYbiW13sA3Hsx7k3LSaRhJq8Kzxtf1VCa5eTtSBG2ua1u54uKhNj13",
  "key24": "4yo72fFgWMKLgFwiivTLrQW5gqEC19pnM2PWni2wBLVdaZnSdrz44Xdh9wq58YKduEaFYp7Sx5U5EcgW74j7LNEg",
  "key25": "2Za5cqcmaTU7ecYRKxxLu9EoFjHkWY2y6btUbZdxLuN2FsqUXBmLqfhVgMEawhKt1HMPwMm7hPbPazERpkosPM87",
  "key26": "4cP6C2bzQ5oZzww7kBahFgD3WWAGYteWXnxNK19JKV9g6fSZTFDB2FPqaJHsCapBsbre1xr5X576JYFGwpjYW9Mf",
  "key27": "5Fx38qZw8bM64k4N9sd4t6S8yFBandpLe5Dt2Byg2Ha1PEripgbCZdpf5ShtHLuMotFVbymd2mRM324iW9Wc4ALj",
  "key28": "JxVbhureApdEPghjL2VTiUbejPsnDLN8kZvA47M4hZ5UuUNuJZG6vLFweJ8xwfsbjkbStSK8rLGBLddjoWrA1b5",
  "key29": "2RFBdpW2Ph6JanYTt7UH68ktrqCmKpY6n1ryojT5Mdnj3heVg6WSJRq8mdm6npchKBe5Ev739KHL6arTou2r5K6U",
  "key30": "4SFn1sPyMc68xDLUuULLoBWaXPU94TYiRHUg2C3eBSFnoC7J7DTTDCp3QHiwZby9BcTf1YtQGrWg4RTw9xncUvaW",
  "key31": "3sEdM2GRUQL6u1FC2vPEQ41RZKfn2SuD4Gt1RuqdJ2iGDKd9dQEA7FdPAi8PyjWm915RzUzmAGZ8w2pMitWG3BsA",
  "key32": "37E9NuY4WbnxffsnHzUBE6T5cL7j8N6bwoSdNWaKZFhnHbk4ntELYJKWGEFpu4rk8wMH9XzfvykXngUffQVsVms",
  "key33": "34bnLH8273gMKqzzagjSxcLjjkS8i17oxCDvGoMa7q63ucrqujwvLpS2yTCorz34kfC4cfSWmPuU9qm9J83mCnjZ",
  "key34": "3ZMzMi5orgiFxWt314izvhCqH533Y2Wow78vVZqtYywTLL3tFR7GYQr79aJotLBaSJSXJWssBbn1Xydjxgnm1RhB",
  "key35": "5Ww1jFx4ExUdowERgQh8DDqpbcYZPNcut5iBbKETgzLAsJdkmuDmdQAuRrxHphRoRkn3SeNjJV497jTFTiHJptv4",
  "key36": "3eG5ewZvvm2p7G6uMueNHdb3e1XP7LJmtSxbBzBLi8MQaMoXi75Yf8kZrgsnLeJWLhQW1fHKd9XSGsEBzoriGs9v",
  "key37": "4vEArMcP5M8ih4TBFufx2VYkE4Fp6FxJ4HuXdmdbyvKHeb7ymqV1S9npJ5EZQazYX7nVaDNEqKMtQqmomFyNo5tf",
  "key38": "2CZeQhmAYH8BwF3FYtfbzswBvWsqLnMoksLRYUpT5RZHX2dCcZmDfaBP1YsCjyWhY95aDkUsooapeMEaurxCXHMB",
  "key39": "48SoH8kkr46YTYhe9nsYzTHV4SBeq9WXny11sZNAmw15FJN9yJQS8nQ8hxRrUtLXf8G6HqofKj3PqUJGH6aDGVjm",
  "key40": "4VSuAK6kwWd8ukj1zcQoDHddQTpx2gNo5VYJXqRULMqkzFHvVJsT9tr6N9q8FAjhRibLE4PQRV916FMUYg5bGxsA"
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
