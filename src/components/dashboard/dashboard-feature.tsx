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
    "1Vo76jbZR9uzaM1BKmWvzAGPQzV4Du3WAZM5Yt7UjKaxkYo6rdif3vF6Arvv6UQhowK1WYTACcPmznZPsJ42dgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sYUDnMqsKn7hioXippTsJ4HgihMobv35VJT9XwHXCKhgGC1xVQoxGWBc9yHjmkoPyUbyq8bqhuGE1DzZ8DcgHk9",
  "key1": "2fa6q9NXAUE8ceYUpoiN4MM9rowmpTF6q3F8PjNZUUFn4EYxDJMsVJDkr32nt9fK4gAppuT7sHiFreL56P7g7YXf",
  "key2": "5VQhqvNPVoWrNN6NzESR1tQKBmUet1FkZBYBagML2hJxQktSSC3qF9WQf2S56SMqh6QpSjLNfdbFtLmnApNNE6c8",
  "key3": "4JNFM4aMdoMycQSVeKYJpAu1cfkNFBs3ZJXdvgdaVKLG3zPJPExEDPn4V7ovAUdMna2n675P2ayecvxmhqsRs75o",
  "key4": "5kV3XCdhFGbAcizhRnSbMsBiNsGAttvZyptojfSMdv8ThBWSKJkTZDx9dRRLNW48xki2FS59Uu8HVvk11BiCVwEo",
  "key5": "44UybR3BtXvdoUDRhgN3okezb6onjehXgNKqRQ6ucyjumrGLkZcfykuHPSekSHZ5erDjLx2m7hsWE4BcSUQrA6Gw",
  "key6": "32X4Z7H2tjGay11XhezXHk43bF6wzujy1JiGfGEj82geHzy7KivKiPZCUGmgXWefZxgQUK7X5hCT5XPsnEFQt3NT",
  "key7": "khyZmDYYa4b2WC7YearNCRRcnQ2XnY2eeK6mVqUR7bgPh3KJ75yxDqHvMPVbcsPKESb25LiyLd5P5Fn6C5TNX1R",
  "key8": "5DKuGu8bC2trUNdDYXE8aeGHqRB6yiQeQdxPSzGkY7DBWAby12qSDeVZE61iBCDHSgFkY2K7inn33hNEB88itE6t",
  "key9": "3AgqPKeELCyaC9ckjM4HmJbNq24FkAsE28HVHptVdn2r46rjN3bc3mff5oVdA72snvKNwzCbgBR5T4uyQ6HLwhrc",
  "key10": "4fkiPH4eeg339rAK4MtpDEseHk6eoZJuyGbXo7X3d2qX7DSA7fdLVeSQUuS8j1TShn9amf7uLvSvUkBftfdDvoyx",
  "key11": "547FLTRx8zcCJSXY1fC1i3QBj99yG1nYDiKjqKKbSx16TzGiFFa4ufbUQz5PkdfKEQnzt6SDG7aqjjZsrDAS6ftV",
  "key12": "wRxPD3Z9sdACgbCGuZAiGst7NhZj1VsqsuYFjzXKWyBxH2ibmKCmpb55U1uumdwA8SUmwi25QiLtvBNoYTGvzA4",
  "key13": "5MiVv9JcqELwB32zWgdQaCGwcASzG4yT9KK7CLtDTPfjgUGTNKqF2StygKN2uMWp1XZ7RRF1Nu635psTWJdoE58r",
  "key14": "3hJvG6Q8fu13FEY7xr4eM9XBfD7sLzTXB34nVhXeG1HerGoBz2QBpkC9EWMXmeA7BAQJq26RPY58MeucvVDFcde",
  "key15": "MaVTcoQMUhNLN2P1PSaueqLRYQDvWn1UmBhodZz1ByhSS5kZGBisdU8e8rFMrZ4KDQKPh9QdWd5Aazj3Z36s9vE",
  "key16": "CkatxaPEUJoVYrcB3UAb3CjZVm3UHN3JXz8p4Nq3Ge7gAEdooZfHpcuMu9FJfgiVF3EPmSPe5L5pRhZ5zLB3asN",
  "key17": "4BkBHJhtC7Pd3Pa5Mqb2BpgQZSvJFUdANMKMjBMsSX3r8dp4ZZyyUkpDx3oaJxiiDd3Gyg9zzQt5xZGUzZv3uo7u",
  "key18": "4nWhe2unFiXUCAemmzppeCxsPf5RUA7wY3S5S4hYaLGLnqp1bE1JRiY5i6YNYt3JyUw22rKb5212SGV8WpnZcAzg",
  "key19": "3bc6gTpvXKDQg3aMHjrGkSqY9HX1VeZAMPET7p6MjB9jkZwJpygjd3zLQzm3AfAFXNzWukMDsxHMMMUcbf6nRuvX",
  "key20": "5DvJks788MEctJDz3p3zkR1Na1EfsFWP6KSxez2gx3VnzNKaLooGsY93zeD4mbJCXmwDmoUFiZnLK8uaG5pudonA",
  "key21": "2Wv84pnCAnUjigawFE26sAcekSfFa3ktBztSm9q8B9a7WKdpB637Q24Qd2bGnD9ppFGyzPHAg8qJpTrkiPXfqH2n",
  "key22": "3woficfkWFPF6ezRr73rLGNg4LNuR8TCV4SV2hHqYjfiYBAKFdHbFM7JY2FgaiZ5GMuoKynhhxkDjvkHuDZUNkyh",
  "key23": "3TTYWR1QosZRP9kkWmxeXeFtGFhFK39qdMSgGzC6Hndi2fPUNnPWPPRKcr9BP7wgF5xrg9NyUYvhP1GXF4fH7qVP",
  "key24": "4Q8G16wGD5Y8Fzuh4tnXiyKqGshajqxnfv6MtSyLnXL6Kp8kp1FrBPmjAU5dnF7hHkSFPdUSv8WESsuJozJDoYcS",
  "key25": "5QJ9B3ZpSvBbGwqMQEbJ6GLv7CZ15gY3j66LmLPD3rNGgPHLeGKYPZsMXBsDddKBqmBFARsB2U6SesYqGki2JJL5",
  "key26": "4qyLG4iA2UsbN5kxKBwk9EXf5vp1a7foTVVHPhCCX236Q9Bvqxx5yy5zUrXqTiXJn2X472NpVftQeCCZMR3bqxM8",
  "key27": "3cYbCjRKRVkrTX3kC8XT4i5YEd9fvQfCmUXqry72jEFgNCmXMhNQERM3yWDM2Grfife164cW4zPdv78YZk81hRrd",
  "key28": "54VFnEdGZZEq2LJE2hzPFKHCSyigXcxynZBUzv5Tvg9zqWpCoKgyEXUJAXkb1JuMJBGmayUAp1B4khKxQ5Xs3hJV",
  "key29": "4Vfvrpi3sHuEdiPFN7FVvxpHV3WZXtzjGQPtDCmNQARVvMeyzaCuCaThwYm8V4WtXbDb1iqaCa96UwzTFcPhNUk3",
  "key30": "2w4w9Wuapd676TVZKaSR2gctdGoHakpFfjKKNVjNfHFuEZpjGbqe8CKuikp1mQRk6yiT3vB2gW7qPujjPksSXYyW",
  "key31": "3SoREq3miZLyxwXFZEyYJe4GbqJu9kGAfrAwfuz1t5QbaFMBpge7pxcCaZ7pgm6YZGehHJtjTzgnzZjaSf6M7yoH",
  "key32": "39YHTckie6vimmzVU4iTtFbwp8jKNzsboV9Qmq2qZp2DFq983cC19umohkNcXhGfnsbtt6VZGaFZEA1QZVZBJd9j",
  "key33": "2RUb2mUoP7uuck6yERxSBvuz8XNHB7EisRoNe956VARQ573AHupn82WGC84cZUg6oih5Qiw2kRpJr6TJiDPZ7Amv",
  "key34": "3ZFxXJsfAzE9eQTniTKe6wizREmyXpPKat9dssXAc6vQzE67LVyoHetj9C37dCjQe26vie7fGHH9FBMJ3GppF3e7",
  "key35": "2RidkVpeNUywcMw5XyHWgoZ6fASZkmBEUwXGr5hoMvKk6xc58c3t1QKnLNug2dQBB5MiNZuVqZKofAT3YNi5Lpyq",
  "key36": "vsgNEroPkEZK95XKtWnwutv5uz8G9LQz95WwnvrdNJS3StTj6a8vL9vrGwwwNxqW9cm9HdDkkCKp9xEhwaGNgp6",
  "key37": "62bDFAveiGYRm8GqaP12T1NrmQFN1YeWSs2w94kK4HvJ7KUJkrLVf1Ta7Q7mHUfKFwecMFCs1moFmk1ehd2je7w9",
  "key38": "3LH7Rn8FDeUmQCr7YESnv85pD83Jn2s3BaV15VPPBicFaS9Ejbw68YJNQEWKTT34XyEdUk4x3kiYneVH7SVQwtz1",
  "key39": "3et91Qnt4Zka6c9CBen2EgRsgvwULLwjpKRoiHLABKLY9KBPczesmr4UHke1fxUyV6Wm6Jx6uSvhDeXzuN3ApkWZ",
  "key40": "5uf1Jvb98KCvky5tALduoP5bMf5Y5ieFVewsa8R8Th6a3nzN1hADKhsVJFh9gp5B1ocpBB8cNfmtN8v4F9WD5GdF",
  "key41": "4bRoZUchn9MJsP8esgW7V7hxVW3QdUpXUFqirvAMjCuC4SNZMZM4xL1HXB3uJK4s9H9ZKK2FegwsNTGQ5HyWtv8F",
  "key42": "dHtcdDs6tnyikPK8mD3t2LxggRUiu1dTGngfL49nUrotYApy23M8avmZwpfFzbAmNpaRL4DiYQ6esUXavhVpYEs",
  "key43": "4j6zkk1Re3NEGVDQ5QEmHE9GF9wJT9U8286NSMpYqxAQmnWVAnMVAD4EFn6iCJVZry1CgpdxnDu3Ubnv6FKfJhVP",
  "key44": "BC5DFGzkAnWu15nb6MwXaw4f1hayPT253BtMiTm6hLGij9xx1g3DxWbGxgdaDtGthwzQ7HR5U5PYV2Xobatd4xY",
  "key45": "2JocswanTRJibMqc6ED6B7g5DDXNmBkjjwZKf3MeEs3PENpmnFmQeso4zAoDMtdWgLcUbKwMeChZBVtfbwnyauD1"
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
