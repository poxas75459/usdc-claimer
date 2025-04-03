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
    "5vJumbBjMCfpzRQuVAibpbR5rN8Em9vJQNejS2CbT8BjAyGD7NvswikQRz7qTzBb2gVhse6n6Tj67jdFgxWZonxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sAx7UaxqEfdtNoLDZKpJniPqx9RNU5TporaiJGEGp8srZuamuZV23wSVzanp8osd8uiWTtgTJKYtAhT4gf2ymZV",
  "key1": "35pHmDoeBGAdc4EkDYNkoyw1hgxXzMpP3w2suFGAAAr8ApPhV46ku7jRnkdXirz9amJ93nhn5ffcGtQvkHiWK3vd",
  "key2": "5TbRqfzW2fVvdx8H3bhk5Qae9FbKSgPL57pMWxeV7auc2SBskA8MkKahie4NsMdNEbvpKUNJyjKW6LnSdPSjfyj",
  "key3": "iVpBAQ4ia8Mi16fwSxbrDkdo6smbDNseVcxP2wKnvr8rAQoehPAbAPWagmCA9CS7bMxGptNnnXrxZof7fYnwDZy",
  "key4": "4hJKRnXxjaoxLbAQNUyqy2e6edoMo2zWevsiY8PB5anU7FfADSs7tYdqxVgfinYQ9jKBDL28BNWR4jL4RLgsHVX",
  "key5": "3qLyQQoveEZobXhiSgMR944YKkLnqR3PeMQ7sKAG66fqtfUUTqYhpYUH613MUpUhmBpTiGAEHCmhzunubtzTCZHU",
  "key6": "52a5vNSboxkSvyfq1e4muNhDAqHgR2PMePeNsMoGwAdAK1z5rCVVoFc9k2mxnKApwxtweVVFbFBZY4tHgCdYKtko",
  "key7": "4xb8d1uRRPSyXbWJzJduXKz4KUd51YAJ8whKCCD5Joi9BXvkAZdLZHg9VQEaYJbpiLWj6ShqTx6ooVR5d8PScLsE",
  "key8": "3AVWARBD9219FQhjdrzbsfYGoQmqHQ88hsjLkcf5fv2DrXsi6sYK8dPHxHv28UXxRi1AuPdKR6CzZiuBjjmUE2VQ",
  "key9": "4d8S3r3jajxmEKRijY4hxaXaukCMR1kSBgfHL2VxfwMAycehTqe8BGMmxczQKFvDFT6fFtmoHJCmh73SczH9DcMV",
  "key10": "4VuKh7nxD2x1v9TSWE8ocLPVQXHeJMGvrxp8xjipyDfdrwXn6j7M3AvsiP5eCzPEVRrwiEBDuEqXKU22JKM6LhEf",
  "key11": "u1nwfWG638127eA4xZMBMAsinS79hARwp1EgccaRmUV1CK3GZhhnFz4pyNixg5isRtTP4Wia5VKkMEe6Q9baRB1",
  "key12": "2NqZcHRMFMED7GKdYNGWY7hXHUmXHP4JTRs3AwkLaGpS7RhJz1jPbALk2anLwbJ9hZ42jakBJxtWXmzSJXAnTssp",
  "key13": "4wapdUa7GMwpVMkh2uK7czucrAKHwKKvBU54Bn7XD2Epf3FWKUpBbki1JqpP8pAg2vFdjA9arYNzUzarGXvTaHio",
  "key14": "2eoPDysNCZ37AMjsvenDS2e3QtpBeWC4LoYWezWsjvQhmBjwVbQtueS33YNi7AZXD2E5KmtSPBq7rb8gaptuYkD4",
  "key15": "B4pr1tfDWy4FzUnrsAy7wtUhbuT9gcYFvJicXWB89gT8zocQ4J7anV2GmowMPTJExPGYq2evuSpQyAnkDoZweNR",
  "key16": "25ig3R43wNXtMZmBXvkUkAYdEtVi1HnSG3NyrzDTPHFsFBkzAcwzYmbPQGiH1JfepyiTJ6XB6L2RTKa3YFk2F2Zw",
  "key17": "4DBvjUjpdZz5syDZyLAHaJRH1H5gYYspsnSYR6pz7cU69wExg6fzM8vc2k68Yo4YRnuarJGn677ZYmdKASSwAcke",
  "key18": "2uqodALSYVjnHXa6UVre7MADmWLXN3dsJQiEL6p1B9ce8yVxY55z9zWJAgVk3pFh8dCp8CUX1qmCQD8jCJsCA6c2",
  "key19": "4utFQEukWecgC1MxK5PtWR1FvGwk2wZfkV525vJbEqyLsT4KmmhKFAfrZxVMEBTQGSP1qstUMkFswHWf7CT5URqm",
  "key20": "3a2J3P9XXcz6zyK5swBU7rmJ2RDx1B7agMzaGSk5CYXdTJYUd826PCvvEFvLmM9P9wNoUWGTgUHrvK5FuVzckSrq",
  "key21": "2V3sQnEDmaJFiFcyJ3qsCF4wd8nZF2j1PHJ8J2qieiHWhuc83a35ccBzCCRQLNe2AMPcNggXqXkRPL5VzXKFvfTE",
  "key22": "614iN452agKWpV3DmDUFDev9zNFW4X8PRJsqxzdwdFe4fUxDWNYr8mvwe8FVayLcKvJPHGyMY8os9im5T4oHEyvq",
  "key23": "386VwhenyZnTcMxcNkjVbv4aji9GV9tzavUiAgH21EQeNXp49UgbqActn7GeX73KFN1E96YDShXfP9fFHRtVGtNN",
  "key24": "JwXsqBLmbfEPE6vUV19BxNjvhLd3KZE1u5LFSDgsLw9zDitZ8B9N6JpdoZcUpugBbqy4qUsuqXyd7bvJBtNr6qL",
  "key25": "5nYQCvDd6PPgEPszyCw8U26HsdPt7thJHrMceu4Sk8QRzdtTipz47rqXSYafw3KZNC76LhjnKSZ4jWUzFR72aAyV",
  "key26": "5aE9131e2Fke5jeyvyenWjaTVFUBYAbsiaRHz1zpfzNR3XKgQiPWB3pkQ1ezBX3p5i4KmdWtDfdT9mYW6JfJkgp3",
  "key27": "4Nu6VGN7LDqPMfFxfvhhpZrAvhAh2rE719q2CDwahrwf96N9tcHtURC9xpDUgsw1deo3FmGTcyoL9ogDYqTZncT8",
  "key28": "56cN4UReevfpi2dqphc5GejT9QjYy9dyJadtxwd1Gfbqj63GfSn4UrVS2ckBxoPaF1jdGAHZ2VP4BT92Sdoh8nFT",
  "key29": "3zTrtFDmAiryE3pHVAQti6cs5FyLceDQKanwNYNqcuPSJeyvoBHaGnadLLsK6kfPCzwQkjcmuyjzsokTwDqDXHsR",
  "key30": "38Rn55pmEwJEyGSrEKYEWAvvWMQYpMk1s691vqsNivDZuDT11HygxTFjmrbE8GJiGdjaxYkjCNJNZgPLuosiZGSE",
  "key31": "2GVty6NPLXFHJ6U6e7JuWCF5VhHYRurizArepzUgmttPcLsiat55qoCBkehLnvYHU1unDSLJpZ6JFi5sDYSrGEE9",
  "key32": "4QnhDejNebuJ9wJ7phN3eVJzoX2kp5bPH25PbeDZz5JEK6Z7QSNt4L4VATnzYnv5PDXvgeSYVhYgDhHs2jefYBzy",
  "key33": "3doYNpzGf6Df9teUEqNSygFkVfWh7k3PqyU4ERnxbUGf6oe5rxvQAZYgHtfNKhi7XUddi9mLQcFRCVjdKZPdeMVD",
  "key34": "3NSkveedQ8zLGXJGPcsb8Yw45MtJKpCWW4aEmJcFfZPKqs9vb6vY6u47Qecwxy5UwYpM7kmiJALu2tfXYw7XqAaV",
  "key35": "aY5trHMhGUKffVxNX3X4Ao9zGNN7y12PVFDSP4jWRiM8kZ7FsgA4B5Y33WTdB5LZevZKgtNa1khSDeuXGGexAP9",
  "key36": "5xo8baoJ7FQxnfArv65oyUJSDLpqZqxTL65ESiVkzZKeT6Y4CMqzfuudBjKmXkzP3Zr4j7PNLAYTsLu3s19W9L72",
  "key37": "2kPsaGQAwU8Xg9dg1d84Y6Y815UG1K7Sx8FPojL98WtaYSoV1CSXiYFJ1K5TzEQY6WW67YTnaR6anGMBMZ4gnM2a",
  "key38": "2j82e14yoveNyFsuZsAPq1eR5y9Pch5ESt7w2NpNZiT5pJoYya9vyfBoKShMs67nLTkuFuAJd53BT3xnYSdgexo",
  "key39": "5611CE8pYdYyeGKZAHdieAmCP1LeX9WojM3sbkzFaZ8kDdndGWTATgGD2UfHuWTCb7UNDPZz8BcyxZw99iiRJVnJ",
  "key40": "3TPXb4gK5gc7RKXbZWCj79z3QGd6LhZC9dJjqPArQKmHV9k9FyfNuzu66aVCtdAZZRobHQGrrhgjcbV9U2HtFFmv",
  "key41": "2a1zW9iWqzwZ3xdizBWg9SA7aafhyRFKCgv8nCV9cYX5j6FgEm7wvvsY6FF5f631ZUrNfWwxsmQyAvY5Wx7YGPeK",
  "key42": "2vt9hJS9GR83toaP2P8D2jSmfUkLnVLnLPohugTJ3HZAD5o1opDQY466eNS7UiPq43eg6HAwiNeYTx4c4vEPd1q8",
  "key43": "3qyKgBUyMnPKkRXs14tLTqfixxEELLVFcqoKd9tKbUUDsuDsYY5gWeGdFrz898h96D1u15QSh8GucRFghW7CepVo",
  "key44": "65Z81JscBfidCeJNdjd6DrPBgfCGBerNZuxG69BhRxjk4p11yqX1V833KxK6nmsFjTN6gfM1RfDDbsDBpketaJeD",
  "key45": "67PJNYa55mtEj74VcRzJWpqTmgfgJp3G56EjwDrbW4VbuswqYPKJRnAbE5C1DRa1TX4ZoJgnAZRrNuh97pCeEcMd",
  "key46": "53Dk3AucrKWABT2GitGwz3qLQWTBxboJgUjSeo9SX31DmD4aSBNQWQS92W23ZZYFYbdtxBJknAB9naBJCiGChz4g",
  "key47": "4UqHiog3oFaJk7pp3HuRcK4r8ALdBq1WRcwgSY97eD4Ko5mRCEXFukfJvkdTRiW5hmYj5K3Xf3gT3ZpSBEec64JF",
  "key48": "62ddKhtzm4tekTMRYsYhQyTkjHGmDy72xobWrbLnwGTdQnAwkEm4EvLxEgMXnYSqzAGzY9323g3MDff92HQvyUGN",
  "key49": "BtxRcJN6PAQBdV7QAiXtPem7ApFbyguYxvchsfFh3VMK79hV4b7q1qAFMiwJuKVX6i38WLW7mdhNE94yqUrZ4k2"
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
