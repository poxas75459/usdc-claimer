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
    "5iV9X6gudVggtNYhuth5m9CbqkGt6tGrgNwEjspzoFQZvKRhw8pZRN78YUaW4x9FxqHLqEbdwaPQdBfKs6hwBeZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z51oZ6X1ECeRcYUEYMaAWmNeJ8MJDbXHhQaqjoWPxQPqTEaGFxHMgRQHvB5wx6snUdNbkbUMpepa8VC6mDxt5Tp",
  "key1": "35XHu3v6P3hr3WFGkQufWGcViad3eFyayHgGgZK4VwWSBA2qE49ffr1pV9ErVMGJabiYLfjsHmuudM4JtQKNcXPc",
  "key2": "3yYJdaUSu3RKgV5Go94TqUDfiXRYDbtR2SJ7TUiPSDxbCEWEqKQyKn4tTruToTKwwEfmxkZ9qrv5EKZgmSaKB5qd",
  "key3": "4S4eVzYBARx1vRaJYwuuPAjtehxFCTjgLy598AyTHZMEAQtK47f1UfBWYKXoJP8KgkygEvPmVJf2BUscQKppFDDD",
  "key4": "4juLizvgT2d2Cu21uNyUCzodN6CGDnWC128ReQ55ZyNwY5rX7G3gXiYo7omd6B4o81xzaPGRQTk86W9ducriJEzU",
  "key5": "3b5iqAzRvrds5dtrRzCqEgTdNo53dvdmJ2M8dxDdinBTcSfs5yPU9WpMBb5SQZuzWTHC9bfS3AvJxbTyqUPsu6v9",
  "key6": "MrMLScGjRyvAGqDnFsQk5894C8RbkxgbUvhh6ovhRZniPv3ZDuwJUk3hMhKShZUQDFggVQ44B4UHRqmkfTvzS4G",
  "key7": "38s9AddrGuAMy45n7RtVi7dndmhWx89cf5Fj4WZBTwrEX2ywE15PLwUd6Qjm78GkCxTvsTUeLDoKBF68jJp37RZt",
  "key8": "5AK88H9ziiH9TPyPGxoFVNYAr6jPZomuWgoBvL7crS7C8PXYaFxdpZTGwAhyePH8Vt7pw3ogW1soPbUxfpAZvUgN",
  "key9": "54XB2J5mW4Pp5kWJX9esd8mNzrh7Xx6D8vKWNhWWdn11EYoEANoFUiRrZwQgtLJX4uu8BMDXn7FpuowdRgogMchH",
  "key10": "34gX9pFL7SLJ53EQcWSz1SbHJDHjGS9wMmp3Y4e8zHu2SdyDFdiCqaHGBq3yEDUaXnppUn9JjxMNuREx5ZWKzr56",
  "key11": "G3mrc2o92K5rCyHKDX2zSJRDaW9VuZeCqDLiUyvGeyQFEZQT6DGWBD1bPwBi1joUc51rpyDA4y1WuzzLJeDhCSa",
  "key12": "U78Ku6LN6QCAYEGd9QRK7r27TFRSGx4bSbckqsKsHpjdGjSXnVe4HS4pYTXpsci7adMY9fn7YhZQkC6azSEBprK",
  "key13": "64RYtGP8U4RGuxhNb7z26MXa6jfxk1uiGVcTaYokWDVXzmSb6gRif6QRq56komkVy3XsuqmuHCQiwbvtueo1Bomu",
  "key14": "5RAVQvYUFNrfKkX3dx59TwhAnXTVqEcqcEdmsWyH68D2Le6CgV67KncXn6H2Q8BdtjFT7vTVnWyV1rGuCRZ96SWJ",
  "key15": "5o1UKvrX4z8qfVSYGtvyKYxytMoKRjkxEo2p4PH5yfCYah5FoHCi8FiZmE3ymDZjABYhVy9xVrF7t4eE2LjCc3A",
  "key16": "5JuzJRyMDMaZuPApPc5CAQmoVvQzk2637FrxuiaWRnBuXyisae9PPLRxc7V1R8ksi4oHNygYR15x1iP3ZK3gayt5",
  "key17": "3tJMx7ktYG6ieZ79fprpPLA2M29bLfBCBX1iQrTqUJX6yUks2XKufUB1r92nqKGFJWkhFVVzkGpdfnjv8pBAa4Sh",
  "key18": "5tZHZK17BpGeHX65Rrd2f3UZFEgEdnts9NSF4UV1FZh3uXhuzFpysX19aMCwyDoh8DhCRC6rQ2xdvFn95wURPXnJ",
  "key19": "YipEn2EUyKdDrojPoHCoxq7AuttMS69iYD8xFGY3iHj7hpj9u4B6f6imVKaGbwkDmUyUk3hU5unqBZDxCgfnT5U",
  "key20": "2HWCKp6pKE1HFL6ELHxbvpPuLjQhbBXtFy5SMmVxdXWtGwziwZUx1zb9a2fnYZyrh6Ed1AVKJ8bUvrApNnEbPEiP",
  "key21": "3tq6YA7GVNFLCUfWHPPmTXswvpgp9ZFtdkm8i9DJRYuWfNzzZpT3Tw2XovaCqWEhBprKwKyntmF7QNWJ73nGK4Pg",
  "key22": "5Tyd8EB1Jqu6HscVT9kVd3mhxaKSZniEwpQtFUTFXVKYxAd1RWG9p1Sef5jqBbQt8Kq9EqBBPayqcXazm1h1fzgq",
  "key23": "2WmNZMQA3FLWTNt2VY6mPS7Zg9RhdD7v5Z66LevTnLumLMPcwRYtzGZFPvZtGREhsqTiQHfyvzrRbppTvhM1eEP2",
  "key24": "4wxrscE6hffn7aZMc7dpw5dDBFcx8JdJHhYQb1gcrkW28a5Njd4PAnba4aqarUczBo6AVDgQuWy1bRxEoZaASXsb",
  "key25": "3yJPsdPhQ21unEjqgcc93Jf7EN5xScQoFAiw3neCTj7HHWGAqEKf6KTj1ZfBsvZReEp14VJoJhiT9UU3Gz4Lrpnq",
  "key26": "34J6nixoSs1nuLYRq9yQy6BBRNCX3bZpdeDbt7UHZoybdTMMhVuYa8gWsHdZCr1AFKwmNZx7y3Ji87Drwg59qc6y",
  "key27": "4KrmBURcTLrw5dv7nzr15f8wweRSSq7yZqLuX4LBmrvYKB5XTLs4VuVJw2SxqnFDWEdPyg8TW814QNFb5AhApsU1",
  "key28": "zS9MBaq5D5HGKFGaoNL25Vkp7fyFueZXSwcSrttQoUMh9KDDF61wUwUMeTqNi1ywcs4zs9B5YRLLfVVgrxxvL7u",
  "key29": "4NkXGLkxdyLnTXmoHKf1X6xq7RXetsYd7iL1CFrtQDyagT7qn1K7FtSuhGPtLfNSqFcSLCrWNm5Sw8ANQvnLs2mp",
  "key30": "2dfnH4vcr7uKp2jLBmseZjDBqNHmRkj9b7TX32sXSWegaqDq58q4qKZryusVPqWfBGV9qF8AvqGRcKEpxSXmyhYs",
  "key31": "4vkg9aRKFCLzBhsdekBCKfFYT46NH6fhSz5gfrPmdiW9afSfuEz5d9EsNR5DZ7PxpFsAQ8SkrAa5B2Bz1EvKuBCD",
  "key32": "5WqhuKhaXuxJzrKvRKLcjcALB3fTYjbTvCVj1hpDt9uUj7UPC9CwC2fd1eLkhX8ce68qT1BRB9Gd5NMruAHE73qf",
  "key33": "64KvE9bPXzbeEMenYbdTmZrE4kw4Tskc9SHDpH19txucQBH2ob6BnAQykkhZpLyeV4CtjRiDdex79FU3B2bmWd5N"
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
