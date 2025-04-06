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
    "43DcMKrUaWrouDeSFMxvZYtuCWh219ngNE8dD2Bwzq6rtTv7Fc2H53k9cteLAa31w5MAbADgGhKUN4X4kQsmTWcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XRQ7kvPPaRiQ3f9vUkTsCJA5npB8qyAcPw17snLai3UJK9oQAjmWNb3fNYXwULBJFqEpamWEeRhZJMm2tQKDZVA",
  "key1": "2VPtoitsK639SLbVKmKH61hEj5KxAGnoxjVi2UEXB8KBCw4hChesJ6ZewbrGVbBrUMLPjbbo1V3BYUCGfduFFapb",
  "key2": "3Ug1V4HDCRuyzDbn9GSFKHFgrSJ6saykYdwg5btexyXgP9P1v9cTvDsGz8pEpKRWvZTmABHCndE4qYWZSvfjpTWf",
  "key3": "58z6rynEjzZGRkj3RPYCuYpgdNkC2bCRwEA9s4w1iSZdg4i8L9TGBmXkPM7KKU4qeyS6i1A1Vz4CoUpQBHmFn2Mf",
  "key4": "5GH9GAqdc1kpzXVdrCyDmG9Agm7cC1srw1SwpCd4gpzP1UBQP8RvrvcyM7MKysr6eHfp68a1Cz1EgQ9m24UrHtdo",
  "key5": "4fhwivzgYmqBfMv1USSUFHNad1P8HNUPJfvWPpGeRtW7Zi9Zinv44W1HAqy3VHtSFbbFMVd5n2MrjWe23mrFuauo",
  "key6": "5HFiMrLxqtEXHGygawKHZf6TmmHwY3nUGuaX68YvWdEbPVwY5vktuhVhGUyLuEMz4t9tHG8QjMMuG5Dvv9LnhyQA",
  "key7": "DjcYhYFPbTtAjp24bDiJQczsYZwS3rMryiLrv15N8XKEFrHeCtrABGaFvYffXVVoVdWWx5AN4Sejuk1xLoZrRD6",
  "key8": "2Amqez2rLEwkU9L6RJGePiZVsYJGTF23v53TvwDDkNm8JEP8fYEjMDxrg69W5JnmzHP6UZZNhLzhRwyHrfnybhFo",
  "key9": "2epvJ1n2zViA2MstC2xNYf7a79cTWpWjrv97MGun52Xx38JXgqjua1rF8QLvsfPvxGj54UW8ViowqbVE3C81KJub",
  "key10": "3rFjRxLsFNzcb7rvtkhDW1vJ39rpKh591ngVpZzBfxqGNF8w2ujeAMRzHknpqd67ZJcYFa8KAnFFMhdpVjRprAD8",
  "key11": "4K47vyZV1bLkvbxcBcKHox7HrmhrppspAHt4J3HV1bvr6iK7GeaCTkz8gyh46UQaXw74nr555QveKz6YTyKXsmaT",
  "key12": "46kZFUeTtveHAA61wPeVmuhEk8r2CR9NKURSxeu48jDLzZXfQJBorZnr184fiv1MUvKFCEzobmfiZf6qbf9mzo7F",
  "key13": "2DkWJpPqeoaVAQaShFcVA2L7Ba8Puj9gADthTfwf2NYbsRo6AexFKtkFpEJnDTHmyTLvLQu8eNd95siBXe7BBa1p",
  "key14": "48cEQPu1fyBXNRpxnzX6pEfGB48WfJdsTs3AmqqWwBc8xGMc8ZMZMzNJWg21GiXgHqx4XjCp3rQtamkUTdPKAC7o",
  "key15": "4qR3PScthuEfnGRr28LKMkG3HAtEi2tVoyKKDPSD1oiPPtyobU9EpZq4s63UEaK5DTQJQesui7karyp8HDXxNiRp",
  "key16": "2i6sCqUsPhvesg9Wr4TF9QeNRF2BYhyy3wWwm5jimrM3YREEZrXbGDdV62XFMVZMxcAdu94AFgMdZPv6W8cyzfJD",
  "key17": "64JZZJYp2WwMwd4SxfowxDdM1VXeCt6SM2QBweyvTcpLC7pi9WA6cnyCzm8TZvG4kUraXqxX95qcxVfhvYPUkRyk",
  "key18": "4BSnMyruZiKVeEBgEtGQLk73vdfM9goqekk4pX63Y6biiuncjP4TdiwZtJ74s4zLkoMMpTRc2nwykVqyHth3oC9A",
  "key19": "66wgCTjZKiuKngQXFv5FnEJ1KGWDg2M5qUEBFBoftrtW9UTDUCBb7ifUzHJc2pRRcii3uqdYy3YQMRENC4ZYEBBG",
  "key20": "21F7XmpvgaPgn3DfCV7EmHfSxfqtJs3aujntDmKgzB5R548djEFjrwKEabkGoaDeQao86FWzYSy6MEdqHdHmwM1N",
  "key21": "25ReVAaiAwt8cQoK21CEV71h9PyXedmwz72idhMpuBVANM9Pe63XYPU2tsrYyd1FRsLrBwawGsrXXxx212nXiWbs",
  "key22": "474C9HLiBWgCaMZZXNsQGS937H3p82cLNzGcJWJyeMGQig7yVducxFpgFB21kMr4jkSL7AG4MMEmUaNmeZhJXbeE",
  "key23": "2BGEt6PGqW6RspCCdyFPF9ZRU3z4yc5XmpQLMXrkbtFdoodbNVKKYjZiBiRAT6xTem2XUC7omdZGvhf1MySdDg4t",
  "key24": "5FKbAW9mjUHoetYdhqEEuLf1KkTYEDomz5vAVSeYFiXvT3rC3YvotU3yKXoDRQq69eVArByXtijjZM3rohdEbr7m",
  "key25": "4r74YpDE1r9a79Xva8d4HueF48k9qmM32LJLSXqBphixTAY5KUkZRJ5udvssC2c94PEpGBCwNJEqBPkxYchE1TBk",
  "key26": "3BRE5ftDuRUmsqdGVwhEPzw6tiGnCUi4priJmGWfExmTF39sGqXa44T8ccvj4eEDWYYfV8aXfbFg6g8ySDdGeJZD",
  "key27": "QgXD9w4vAKFzYG6wwfGtZUbFn8CErPmjDND8Mny5MJsC7qHi82rmrrr4S9zxE2ZMqXfefhA4RpxeCa1AHszgHS5",
  "key28": "eJ3UavbMydCkddNGW6EptcC4uSQSfo3NERLujpqauEwMrHJ2sKLDs4JmbsjjVi29GkmthG3BhRja1x5svZm7315",
  "key29": "kcQBe5sBXEiE8bn4EMzXXVthug448ed4iv48HhbRniBBzSgSgDcdwEX7zAedgwhobfhBfLwS7YkiCGNxrcQe5hi",
  "key30": "pngHbE4UnuH2pPjZPS2FdSLbC6LLhDyJonkwvL3AQmDetzu5925cSbAaMPByxAzghGQ8PzhxYiUDEN6HBmdmEDQ",
  "key31": "5B8ggypK9dkxp4KASHVjwjGeh5eEas6c8mTLU21Wbpqxyj2KLYaVeMYAz3wj24Uhj9aoz6fheyMPGbHaZ4iqxvh2",
  "key32": "UshrXaaAigsiixsRheawvWE4kmst9Brd57kfstaHGRvBMFytziQKcUtF2LYFZmew1xSsAoaoqiJPWrNUnAcP6bS",
  "key33": "3s7kGaTvNwXyHsXsDRa3Wsa8sooew6T4qrZjV84duwg5ompJc4NXFmwCET7VosW5wfVv7mACCo1BXZpH2m3yNdoA",
  "key34": "3YwocHzk45cxruUc9sF6HX7Xg1rB8MbsnZQqjQGpYLWcY8VnJi4JEyF7MyNU51TVcXkaDzcRyWDSc4qGtQeQCBzx",
  "key35": "ijWktRimLJUo5L7KgfZtHwmecjt58h84oMY32cCAdH3ma5t7hXs92JwAioUr2q5VojUyYYV61KawHKEpLheF4Vr",
  "key36": "5xcUWkqLhA1PhH7ZYRAuvKgvFRh6fdXq8fgnaSFkSE6MouWYcsiMrC61oRMU8kc9f1VpZ5nkkAEPAMDF7XscPeux",
  "key37": "XT84E4JJ7zTc8TSGux4aR5vXrTdPyGDfMEiYGCJ32CVijTAKnEt1bK1wSVDvKUAXNenp37hNJzWoaH4CmAhfw7p",
  "key38": "2oY4MxAygGLAwVv2Y9w682taTnHsqfnLw5tX7HxX16B9SBSdMAkeiwErwPeVXmM8y2bmspxPBNCVN9hdJcz3Qwk7",
  "key39": "nPC2ob9gEZiAVg8gCnnNGZ5L61ocVuYyKWCFJkEUGn4NBGupYLKuYhxtX1SKrwxgaC1kFpkEGnRECqYU8ruivF1",
  "key40": "2j3vSvLYQwPkcyFVc6nAGUgeBmfY85UfkDSPG9h56usHAS3YYtTW78tHKJceNV3bxk2jWRNGTaMxSpEPr3AipQXX",
  "key41": "5WU5fHTEHtwGVK94uDBqZ4sY1GyesSoZ5ur6z8pwDHZrH9V6LLej8HQewEkjsoUhGjxNR8G3xCgG66AiGr3DNHcv"
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
