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
    "2wYzS681XtvpPyn3nurjJCMVbYoxYj7eCea6Ass2pJghsHK3h2i5ZSjkQTHWG7f6jRRFq4BRHC32HuZrL5HyYt7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uy2zhCgdNzXR1C9vtUiDz4zmaxRerL5jrBher7EdaGR5Fj155iJCeV7TE86ipHHAmGgAe6gjsoCURrvHJDHwSE",
  "key1": "55wFbebgYEsNDXVv5FjKcmYsSQ2DxVSE1y36bPhX1xBMer6DHtBFxiFAhCy1X6a6qJAYicAKjbrqsTNkSVcfeqqC",
  "key2": "hVi2F5LoiQJffCkKxmDqPFGoq5TjcQJyLv7DJBfgc3UZ6PvbWDTx2d4dHxxbqM77Mt2yxj9C875sRUffreo6Tir",
  "key3": "3dm7N5ydmEEZQmNPEaNo2a7vgf3mww7BNeaotWzhJaVYLjmvibKyzv4Ya3fv4FeccTrszuiifhfZLyXDS4uoQb8X",
  "key4": "3HYFsLVMMk4TEZpU6i5dykWorR9QmkBsuNtydbGrEGiLh7MweaG4gSdtfjND5ANeJvisuXT4i7ZS78wbrGutxi7a",
  "key5": "3cKLmP2RSppYmzeNjRFcdHbxFjTdY73QQfGUJ4p1xW8BfnmBMaZVEFGhXSETf9cpU3puoGKo5dJTNQ1FCoSr8cMA",
  "key6": "5zbumhePegzidnFzhC4CMxPt1qj5MjQk8j7PFu54nQXPjzU5CYKJHoMhkB3UsjByiRYy7xnQeAy2u2uQRQdbcrrW",
  "key7": "4XMYF2LT5NjaJQ2J9AxSPZ5twtj1G4foEuFbgVSNQWjqv2EkqWBPoiEGazJ48h8XE4kfwsAwa4Ffdky1h3fYDf8Y",
  "key8": "zy4Q3rDRyH2hQ9y2o8bmsXpG1PdmfuZrXh212JMKeBUinwz66bHG5Vb6eKmYtzHZhxJsVUPw5XX7kaNUQEEk3y5",
  "key9": "5jzv3g7CPatuDJ6PfVL1WyoNihzAafArHNuMnBAgWT66REPfYU22YCfqyJpjwZvJQSNg4SAabQCJE2TRv5edfN8A",
  "key10": "2UXH7hPEM5pxYkL8ymFiDvPXcZc2MyPrweN1R4XjRkYS1e65YBEqRjuUmkiuT4BC1x8skpP9dpbANofcXZkgPj9L",
  "key11": "tQzBchKWW8ELM66s8KkZyMRUCQBzwMb1s8bojrt2YsAcn5JED3phw6jrREtjBFAGWQMRmHZW3eDne8rUCd454Rq",
  "key12": "bUHMPkLmFgwJzUSozLxtnTB8eH1gbNpHhSwEi9spZG1py7vRns2TbjF6gYanxNdUpu3Ew5gkhqXHXxxAULoKZct",
  "key13": "4VvgJRFpYoLTkiNbTVZLiGsPJf6FEc6dAaAarx8GiSMSms5yfD3xPwJX5gVGDfEHitCo7c1kW5tr8BxiFS4QQHVX",
  "key14": "4NNR4ckgZToekhqjdnWEo22JTG2ULqBZrqW7oSft6pDdomXBNevkizqg1GEuJTiMGonHfHf9Wc4i7hUqe4rRrwnX",
  "key15": "4zZRiVopTenuuGWKwTr8tFX9TR1TRPqeuvN6gQWSZ8m96R2eAZhwgYJy2m86tA4bGNr4mh19Gwu7Z88SaDHfyByu",
  "key16": "o7wozAHEkMh6wHrHN4bgFz8hJ73e3ZCzdfevhYfLbg8x86K9LKVoXdd32WmDURsqaFNyme2b4WUCTAX488KSE6t",
  "key17": "4Ha6GArtPwgXmnfLRwUWK87wT2HHzELxPDvV5vRj449T344KFUiPV1MRg9zx5vLyXumi7WyAeHV4Qmyqcm3BX8Qu",
  "key18": "3nAk9ohLYLJir9wzonZPgYrZr7ruBBLnUvsk5pWwKQceWfW8feBqEWj1pMutAZP6jpEQ4L9X88qE9x43J7KZwyW9",
  "key19": "3SWP9vW1gGXJdYA9zNgXYyRNFscmgN6QAYCmEiE5LTrbgao8TAzTZ1sRDUALSSgjuJNnTQPxLeMcuSK8rmm7M7NF",
  "key20": "Zt9BuDq3rguNAAQuujmDNnvbgHo8ovZm1gzgGbwM8QEKz2ZMJ4smMJEm4ZVf2WAww8GYbyhNFcbzj8KqnHq9SFz",
  "key21": "2LY5EKsU1uU9VUVWnmYEXCLoJwSmS1SYJjEHPXpQfBKDPUea7k1QUSnBKbqyUNXFRwSpdabiKqvTWzZNvrUrvz2g",
  "key22": "3mTQ1hR33FzvkjN3YD8ntx3JEpwoX2Z3Xboqh4sDqh8JvuQ7Ldpmbvx9zswtZNHwNrktPsce3fBnudYc7XtMqes1",
  "key23": "3hzxjKD7VVaQ6anvs1zusxLLQsbsr1J2o122CX7QuTKXdnKBefYpk2kj85ZcNgitvffH7fF3m8K5gseZqe4tVX5t",
  "key24": "vgsfbTkb2f76ai5PCdu7y1Jwjd3gtYTX82MkhZrMTLgrMGSEagoGY8qEMYQNRNdkY1MxKne89gxGkUqjDMu1tL7",
  "key25": "5BV3c8x47qw7SaNDpKMbU5FmTPD8GKhoV9nMfeTSkpPNoVykvPhbqxfi1XBixagKFfMrE89xddXRvbwtswXrChEx",
  "key26": "26jTBwdvaswm4gyKx7E2YFh8EmkUkDXDPEeqQnSWuh15Z7erPrwrjoryaw2AShCKjMTt8KeUMu46CAQ3BccP5Kmg",
  "key27": "4EQafVhRCsGcbGGrXzzpFfECmnQiPfntqSMWaHz1ByPjX3FRiaDD1AcxwudYZN1nwYACoccvHjvvC8qyym8Ufm8B",
  "key28": "ZuniednkX5Gf9AbWTFU1gTcyy3XPWg7CLUzAQvAjcbU7Mshei8DdehEsNrbm6va79gaogDKm4SvZC3oiWVrVPpQ",
  "key29": "yTdCPEMkFMHpButnJdjyqCz4Dajcn8HfWmucgjuaUDB1X7ULNcwiM3FjjKaVzA8MDedvBBzhPFMzReNLXmk3Vmd",
  "key30": "5G54bcu8kLwJSaCAMJD9zxbktvUfn6UJgFYZnS6LfDtipxy3U5varBPc7BbMe2SxMtrWQtW89FhmWXWL8Cke6aBJ",
  "key31": "5axkSxZjEcHRYdScSEUEcAn5qAUyoJodDX8sPZojZgu4qZuQyt7w55hzQgzqhbinH4FsCyvWtyzFMk2tWRNCQqCD",
  "key32": "4kfvRWL96vjEmbNxLp9W8DLhwdUunPcKKffgkMHgGyuEQzKQZBonhAjmpdUiT2zWj2qUXhqGaCMxPSwfNnzndf1F",
  "key33": "4RG7F9cyv7DLZLAmWBusXM7ddfGgoMijtm4jtHeX22DBK4CE4npnpowynRmci3HVLT2SUmCSSweaUm91W1PB8jDk",
  "key34": "2xWMMqqbwDDMcBWhiJyYACWayhvoeETi7xb8Bg61JtZGVU74ptVoE9uXqMecXChvjfbTrLPNJdFVZJ63QnhAR6gX",
  "key35": "2xRgKyj1neMvND3aMfxBmt9dobMAmuRjccaDekvC9zQZHLrXpU5jk5xAB1zXv4WfGNhLbY1TQeSTdfHoVVrZc1nB",
  "key36": "3Zt4rJdDd2Bqv4Jb7gNcXrS5A6h6qniQXmuzuzNrAnHqUxZur1DmwUcAbnnUf7a3AWeU5EBSzwcXREAdh2Fu1Qpa",
  "key37": "4faU3nMPDGfSpti8qgoaMwLRFYrNbsLhuoWYuLNf5XW9P6tEky3zk9Dd5Pe6iUVWHktV2QmjNNiWHBQqbrmaHziE",
  "key38": "3vdYwSmkJvMB4vdPP91gDc4XPg3JZ2X4CvdJ4Nvvszo3CiTm5zKMAZFdu9DW6RFcJNDy5A5eKjG8mzQnVdU5YtmN",
  "key39": "WPpqi82fgocDC9YJT3PB1Dr965RWtpJCY8rF6JXTp6bCz9QqN7C8NkqNvtWL9BRQNtrWWjjnwoUA7ba6Now1JyV",
  "key40": "644z9qhXhmVhTfgV4o6YStLrywS3q94k6R6T7U7hwYYEjXUnUSrN3wGw7rsKTxMqZHgrJoF55Pd47ckzDJbEsn5s",
  "key41": "3RYqvNnzmwMjJZHc4wtz9Sfs8q3sReP5uVY59VNxDG8d7z7BLJAP6zDsjfme8G8t9Du8VvmWCEaCKhUnageA5v16",
  "key42": "2FMzApZrcyS6PhR5HtW7GUAG1gXEhKvymznNF36CYnFJy9UMPxHQxyMXdrKFPWKhvc96qxDchPBiANuZwvGkbfcP",
  "key43": "3ngy8VSAfq7jHjp1VD7nkQ8rxyvdCHpkeG5TSLBiUHGLxaTdJanPcZesvAJMFiaTrjdjYHer9VCHM7iTSDHceX5A",
  "key44": "36jjssHzG3aswzrMKrVkmtAHvVHTTm3VWsL7oh5ut7FtsEHvwDM79u1nVzw5NJX9QyaHw3UzU4jDPQTQbXuRZBhM",
  "key45": "CrfiSDbLwGUFM9KRXPCWNF3LKMfR95jf5V8oTLRoUKQ55JCapv1Ssk7PZCSJNmmcceWBNdFsF4eUDdN9EKPs6ph",
  "key46": "52eTuPM1K6uvzwekf8AQrK5oTX6ms2oeV8ATpD6QHHFjcMNychHuVDUvGegVXzkGcEKrFJCwPqB9WEBx2CesaYXe"
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
