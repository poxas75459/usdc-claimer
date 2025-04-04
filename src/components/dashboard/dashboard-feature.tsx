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
    "bDgooELY2iQcgdruy6EjpWGk22apcp4Hc4YEJ9HekskUDh6813FyYtwZyqPMX8hpTDFWmGD1NkfuDC5SmjKK47G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6aAYHcBdebTB5jFHqjaZHfDXf3J4JC3RL8NeQP4X5e79iZDCkZXyYLP1gjuVghZxJYSYkcn8NFAJST3bhk3LknL",
  "key1": "4AGpExVRC4LMZHSt1KMygsVs7VBPwzVqJ4mbGN3bBB3K8ZjPfpN83SBLeaRGg2sVJUUfaF7CqyMyBriAmz4cEp2w",
  "key2": "4irKr4rj7Rek6pyP7XTVV45JW8eJyjRjr9i7gyo1PjU9uD2n2H5nUPhXM1M5W3gCHJcitcTJr3omELts7RfxLqh5",
  "key3": "38vyCY4M37cHfcqoCcZyAFDwdKL8iKPMVGEPa6FjFLgPCqi95u5UmP4KXk4nTRjPUDjDh3LPtQ4DuaSew9EZCWkC",
  "key4": "2mJopP1E8RQVAQy2KWHaFaZwqNPZXenV2AKdDDV4Z3QY2qg6WGAwGt4g8USA6gcfG9XWp77JosFAKjfJuVEZcY5D",
  "key5": "4UnMAFtoWkhmXUdPyK3v13kqi7y1KeayzVwHYyGL2p9fkCj3kLKE2Yy1j1sB7tPhYCsuv3GxNCX45oUW5dY24SBD",
  "key6": "2Qcwsk9iENSYLPjeALVs5LAA7MZCjMSedbHH8oP1bQVsohkvgqe212JdNEFNKJDysNTXJ4aMerYuWcCxcS9Q3eeW",
  "key7": "26feqw715nWEsbAa1LmfLXw3TPWoFSWrMJjj8sfsunhSAd3YwMsB1NJNvGspkUm6JpNc7BGqK9r6mrY6UXNtFGNC",
  "key8": "eSPm71ucQk3h2wYYeGVjf3Be31U8HqREFGf5Em3tg1UPv2JpEBAafp86xhAnPWtDB5ApULRM6RQX7qWzYbd9tyP",
  "key9": "5U8jT7Hw68CodghjcqAn3uxDEFcMHtmW8hJKmqMGixYoVDrKpAuSyTTMrAViT7sNG9BzbTEXTf6sg9RKqUUHgMHG",
  "key10": "3RsRSdWBtK673tmbVYaBNd5qaijUGHEVcTuxZvkqHNCQJUnfwdZSqEjk9DqbP7B4EbXXNxCyCez5Qtn6C1wkgZu1",
  "key11": "2Yq6hccGTgh2WpY4jT9fBEpCzho2UsBGRLLj6hSVHQcw8RyPVJPLS66xZQ1beuPFDKeNd9nmUucvaYzhu2MG7x4b",
  "key12": "5GF5cHNt7gKuhi8eT5B5sDShT1qsqBPq2eZ8uosrzR9J1oru1gBFpLrVByfBi2Skz5iTi3S2sxTWikKWZLj71KFb",
  "key13": "5BLpwNVQFysf1qL6rzaSyucQ4zBoeGdCZTGNH9s5hKDKaRoqHhFSdBLEdoJUK1MfjKT5p8oEpgr21hLQFW9AgBW2",
  "key14": "4QryvhtYaMZosKTukRRkbpnuX5UJa27LiMuNAbobV9mpSJcUwFNZyU5tgUinvVHVn72s3qaQmEDFFcqaym181Frk",
  "key15": "5sgysjqYuULEugzWQhbZaHzenFJN2kYkJhmxn6Pz9hyPqdMn6Kf9nMuHkNavXcAqsTiigA9EK1TP3Vcamy4yzKCW",
  "key16": "5umMuQxW5eCe3n3dKoCizR7uoZnj5o47TwTm5bqWsmT1hXCc7evHZLVSeS5siPF2fnswdmWCtCEqovNPj1KkzCoi",
  "key17": "7XtFy5bSyiDyELFZuD3wkesyHLHLMnEw2pSAmpkJVhFymKJME7twrZtvp9Zm941mBZ5b4oC7pNDBFS1mmJKvzgm",
  "key18": "2TJxUBa6P988ZJ7qeNZSE6SNyQgdpBqJeezv6KzWUmex1HsabZQj8QY3qV8SS7PTDfBAybW1uHvdefbNBgWowrdd",
  "key19": "46RtsHxxB4qpJahgj1sju3n7cXRZYRzeCsz8j4Cf5nUvxQqXA8yUNDUEQHmCbhuabcUR4TC58FoZY7cQu8wBZNQt",
  "key20": "2U8ahXxF2rpafc4BcDV9DbcS1fXYfG6B3vGeCDzbxaVyeajRcH6NcAm8ebq5mnez32ta5a3NJZAuuEM6QHvZEPiK",
  "key21": "2sTcLkq7M28zGfiX4EmTnGpc8UrY5ojRMhsNrrzVE7ds4t3NXDrSwrpBBpnv3cLQYGooyFU63d8BKjSJ9HwJfabz",
  "key22": "3ku6zLunT1AGj2qH4NuPodCHqtDkefzUjxXmfTWesnqTjKssqbw3fqzMydj4BouS2UXMdrx3TK95nGafrAn4vgbh",
  "key23": "jv8Sn3ADEuyXNe8HJTxi6QNiaVsCpuvgqVE1UHKgdh9bvg7eCk1FwNho6CbY8TWK8z6bL82wFYXrWTiWW7yqfAS",
  "key24": "4r3vojvrsxWWyvd7wsLuK8ud79u6GmB9HoMkr6wnuqqMjF7GTDVrhMFrWmKMpy53kZpa3qHCs72e4tH2YDccgRbJ",
  "key25": "5qw7Nh2ghLQvkMUdT72DPwQtsvDHLKMGtSDq3qiBWmb8ciM2wt5BPKmUg9qJuJyEHN4DKStGc2CPkLZG7NcjmPKS",
  "key26": "5bN7XGv6f9Hr2YZdbtfCcEqp92CS77vCeQ9rXht2VKoDXRgkiwjxhbXSgZCJPGMNMhiDrsq4eGx8vJWFjpvpq449",
  "key27": "FqL8mjdAzypyG9BNKu5MCZ9cFEksg8sxgnMLcirjvUHns4UnSVqLm6KU9QE4MYwqoRprXEyRivCEAdU9hf1dAqg",
  "key28": "NJjwP8rmbxp79BHWWLWo2wB4LhsbUo5k3vgsgkqsZ2Uh6d1yKyMMzZtptahdatB9z6oCAV9DTnMYU8H3ynTA3zw",
  "key29": "cSTgxjXvpoxDXG7WtwXkdbn4LJgtdT5bMgZGM4A1zZCmkd1hocgnLM2MReX6Ni4tkvHTdGA7wZ4vaStUwrdL3b9",
  "key30": "56uohHvujB5UMuboyYPUBSGHgj5HRFPvydmeJfhLayBmk6LoeuzZD1KHGoMAsBWeiAJAR9pyYWH4Heby2H9uUTw3",
  "key31": "3MRnE5NLscU15GXTCmYH6C7WgSF1XbM23oD3uJo2qMGAqLKsFZi9TYNvKqFex4YwEYw7JPS3xyusYC1HYYFwmQdM",
  "key32": "BJUaZG9n8f82oDgvHSCNAEcSKLHu6twA8o42dn268aQaPvzxS7pP1vYKZhxuEebJieDbNgzzNrpLgeXrA3UuaFm",
  "key33": "4iePE33E6geFCkdzuJAPg6eZZGidhoPvh6qJA2oDCo7MfUKPcyAnqXLQd26FdunoH21xJuVE58wjzqVLBdAyhiPJ",
  "key34": "22NJiD9CeNJ2cNqPLXX5crAp2YW8hC82kJqiWKA9TTqypRfQPw1LA4NegtffttzmL3KCoiNVqoAz5vrAoyPE6mHm",
  "key35": "Utfyp9Zir1XyFjZ5CR6RksQnVipsQBw2LgnWkymRz4iTQF2SdC55ERHdT4ck8CFZ3NMQUzKVTMbb8emBpRsmsWD",
  "key36": "5EUQ5fqUoVff17nAvUTe6sgeS3wyThWc3xp9XQVbuQwqNabAyQg5p3v2jfqWmVxryaDXPDVGVTw4XCP9VFAHmLEY",
  "key37": "5vJToNJpQ4zSs55gBRRoXtmY6facHPrbNmWpktv636vkqem8UPjzrR5DJfcZfCZAVL4xrcfoxF4xm7uZZNVh8g75",
  "key38": "4vawQTbvgE7rYH4e52K3SemYSnik7yiz2HJG65mzgeodUWPA5iwk6aNvRumf9ZGQvAZorauvUeLbAx4JrdhMb9zL",
  "key39": "3yCqVG1jWmrwQyS4PWEafonA9qxYitkgMrqeyimn8Y753H91sSqHHp9Ux2yoPTz6XBX6yKy1bJLBu9fdpbZBUyYE",
  "key40": "2dSh2cuAnmeax54Gbg1jLnfpM7sE5G5dLZmcvAo1EB8AkbtruKvBtfP4kiiJPBikTKBdoGRNqzvW7PWEBxX1CyC3",
  "key41": "5n4oFBsew7L2PiE4rN9P6hFbKHedbujEjTUuurCBZ2HTHU3vc9hdcvYpzR418XwxdE8we864x5eKySsmNJXtTTML",
  "key42": "3bLuJJVeqwDo2ZscDx12PQmbSVuuBCEFQzWJ4FrvEfw1eWZapfcG1ygKyXxU5J2sfidG7FcoxT4zHh5c8Q8hVVi8",
  "key43": "39PPrQ9L6PjEqhZBTU9yfPbeoYexRfn3rttugdqBcjSpB7ZrUzC3dNAN7KGTuJdcmMhfskppB3cVUtL5GV4ao41y",
  "key44": "4D2vjULpV6fv2QKZkh11fWcNDve4pjpcft53BZAc7XQYiPGXaGYSJFUC3D2hvQqRVSP3kLfj3okZQcNndCP1d5L4",
  "key45": "4hTMj7TZfcYpNWsnaeudmdHkBCJV3JUzw56q6Vg8C4kS1967zHbyZU5FL79U8uTKYqdEjk6chBEpCVUaYuxt4N87",
  "key46": "2LY7uV5qTyoNN8RxbWuVcfxAoYvFdfJsiASfRhhKp4Yiitcu3UvsfwGVzpfSN1YSyZwfTk3kNb44xcQXy7MxEu7f"
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
