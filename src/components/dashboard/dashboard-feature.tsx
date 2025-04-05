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
    "3nqfbNoofRTj4MVuBie7m5BVhmReJnaXYTfhGY7GfDNXTeMe4gssWWofdgKr32MAg4YeS1CgpVh4WrL89Gc1bUJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TXESuevgnHrGY9p6wLLJgJ2D6wyCCucT2zoQJD9B21kEjs5iQvS7qx61H5BXJtbSFfmnrwqA83LRavmJzUea6YE",
  "key1": "54Vn5XEcTqvFD64rPupAjdBszfgx6mYJSeQyhK1KApeosJHXtxsGtSeDZSihF1SP3U3m9KpZAX7ckSeHjQf4gHgW",
  "key2": "AF5ThX4KGH7ZcxbcMu8gm3bUDtKxJnjNHxk6cweUgAsEdg5fVjYr3NPrNsK3f9ztKy6SxswSNLegEWsxZN9DWdG",
  "key3": "5mPrRF4MN52y6aWPkypuYs7LUjnohos6kjuuDmot7FsZdB2raEQUTFjkB8ZcG6idXWksdoDzNnyeNSvQBSSKiXja",
  "key4": "56q4G2kFzeAbfB831Phi5BPhMZsCNKFwaXZ3Ayi1ENZsDmZeN2RxXW18iTRuMDiGQvzNBHJwYCPSznGpBHvTZoTD",
  "key5": "66Hv3T23ZiUb6rmVCfJPES31Dme5As7SVqrqoRk2HY7a4Eq7srxYV7q91aRhtmdan4Eb5EpyF7ewTsG9yQsJYDQ7",
  "key6": "3u7muAk4iV354a7MauDusFsEgdQ2zetSXAzyj1taa2EXofoZmj688HeqQzjZG9Zmw5rcECyZKPJPdAY4sXenZA67",
  "key7": "hN6mU1xzp6x9K6Yb9EdekyM6ZRdtA9GYfKCK9AD8GYEaeUSHJYVQSbC4X5R942WrCzNv7R51dnHMfi47RLaDuh8",
  "key8": "53PxXh6sPm2XM8GxDYQekfKUkuEnahx7nyqkoer9LYyeLdVsmWAKyv8e5tjPCcaJhQe2jFPFeSuG7jg9cVEqYDLp",
  "key9": "5ZawxMecsx23F5Dw42nCC22KHiE5QMW9mJiRCuzeqoXuGC6cyVCBg2kejZPTNqkJggr7VZq5q1fp45kV3taMqome",
  "key10": "27GuBnFLHRqZc3ZjDYYU2SRTcKRQ2fkFBfy6QPQf8d9dWtRYoeYYwgQRwo5dgbn79zKtvY4YbdMLkvYPiCV3SJwg",
  "key11": "5DjSmzBMbioV273rjQeCDML6K36qCvqXvwyzP6nwbi2MHVxu2yEhDX9A41GnqFG2yAD38bQGmNhYzkX7mXoMz9vK",
  "key12": "5NCQzu1t6WxyKSsLbdzenBKYwC6x5WeYoCKooFhEFsZJrPvyQbSo6WsSDSRbt9Ff8gjgfafhj4wmnaf8wzQMbWNk",
  "key13": "5WwL9QzPBm6rdDT5AnbikwTEKJATcbKVThLCo9Rxz8kFSVJxpmBSfw644fDNh9jSLr3Fizh2YkKAzGTEgk4kN1mr",
  "key14": "4yTGJVoGh6kMTB8RxgZ5JFdQRVLKYfcAobbvAQRu9uS6ypuNM3yVeYcVdHKhzixEZMpquWJbVLA2GqHdqS7jUZEX",
  "key15": "2Jpts9Zyxrc1ihbsEtXyyeWidMnfW6jcKSFs44ezeRaeLmYqcxF6te3mX311K6VaGApZZk5bjRr1TeA7za26qtQc",
  "key16": "3nEhgX8tuJ9cwv8dPsBVi3jQ7td8kZNdAZqhXzLueeMhP5geazzhWMTrf25ntNLbW92Rm1gnRgXkFnzK5sUYpGpn",
  "key17": "4r6cesvHgfgt1LdjVBPvbPK5TW4tqW7nxGejY3KuEYZ39jjA8JkjbhAxXBL31SdTqNHmD1oe1j4UTwmh6BoR6UCT",
  "key18": "3s7p7EjfvSYAxjk5SupWuojs5VF9Nf1gjvaDvZ1wXekm7JEJFXzgX7hcwUPxjAWJyqYuMisWCwGUBjws1vXF7M9y",
  "key19": "3CrcYRkzMS4LdLzCkTy4TfpkpfaPp6BNSUWx9BWgJPa3m968LmUAb1rBMKDTkQhLRv8pWbN1JgMM5XtodgLhbcoN",
  "key20": "592nvTVtvnowPfJq73mesqD3tuCvxY2u793uaUHwuC8zGEYHxJgQ6faZY951RsmyKCFmageE2CHGSWeKyywyu7n5",
  "key21": "65681h9GS9ZvA6pxzjQzjJ4MZTooJQGE8pZogAtEzvF55sgfqRffG3M16DhTJPQG55XypMvnUVSZJC5cARQ7kJ3X",
  "key22": "31vMvdHaLJ9fxQuZhGNP1VtpFxBV8hujpv65CoDy1bGoUnpDJg89Ft7mVm2QGgvnn1ACrQpdt1VbWYrktV7wccGP",
  "key23": "3wvVXnASNgcBrcStRCLtSsoKTJYcHoyK6MbDhCG1TS3s2Dr2atSwmzkVqALn1pKKiMG4uKPqUsELGN1qxxuxhqWS",
  "key24": "HbeAG5xbzm2cJd2hqt6K4y2e2STRUMg7kgcf14EHwcw6JuPv6KPNEfjH5vk8pn5q9Y78uBanjdQHYVW7YB63daV",
  "key25": "5Mhp57qK7GSSgYuNW2ocfv8MVKwRapyqyqLWB8JkevrFmTLuD7jhMPZB2SWzs9A5i3GkPG1ushcSs98GRcRWSicG",
  "key26": "2SZH72cuvLe3Rp4BCrZJ5gjSfQLgazLVS5tRF4cDzZbzW8ziTnByPtKcfVLbZ1NZvKKERuTpPXD4t8Ndadh2WGpf",
  "key27": "5KcXW8j8M2HxoHLPPH9t6aZS1JEdQQx1mR1gNN74LnEZGDpDkJKX4XjLRjgRUM8y9DHBXKzPoj4P1HzRq548awez",
  "key28": "bpyPpZACfNh5wSWSPXB4mHMGkKKVpf29ZaCUNCyvSvUkXznShTGyo6uSkbwgyuUG2JuKBmYTq9sTMjgNKb42W2p",
  "key29": "5ZQtSe18GNaLzMTniP7R8fA1ybUCgMUivXLQDjTsxGnjoRaZEP3nGCU5wa2DqAABvbq4iHX68D6897TuCfZXxrdM",
  "key30": "nBVAFEseYgBoWE1q6tdPM1qK19z4fYUov3BG7BrZ3LRPj59yTKab39hrqS2sTRAcJu9Pzs8vRFNwKcGLHM3aTvw",
  "key31": "4migQwLZfpdvJYzBKDHD824zrN8grAFfrsc4i4J6UTHEB7VbkKxgPKPDL8xdVYrCQXME3jdVTjx83w4XZBVNBzDB",
  "key32": "3c8fnHnEeSUg6ujCF29KAawTGF5CKvDskPXVADxA4EqJz4BAoWCfkN4mdDRGXLkzTAgLK2JCnJjZv6KztU54YidC",
  "key33": "2DV2tNKRFiK4jNg2Vij2K4WRmANk3RgMcqSbuGgyHqcpWZ27HNRBcgDLjaKuLb2g2iZotPVfU68NaZWupdQw7nDr",
  "key34": "JEHNtKXdo75rpM3RB9LhdjaqgKfuYxmnQ5N19rXH348Z8rcEjBeLmGqhG6DDkYFqTLL14qYHXfsmhwb41SASMRh",
  "key35": "4UZaywdwHZBAXmphmusCHie8R2fNEUtRT99K6VZZuwdrPhQmM4zZ3T39VJsyK8EFnDfMbVHeXCAXRkAskgxsuRse",
  "key36": "4S3jnXfKADQPVaZ9ReJX6kyDCNoXEm2kneAKQZZYUpwaM9eR2YvC7MN3uRnFFAiy7rgjsgb7dU72Xx2A2TJYSaBe",
  "key37": "2p92gg6YCoKRvHZJMs1YnkHRguzHNepnFAKXfJd81uRtgmxeKc9v4VXkVD5uyCKoAvR21VKbBdwet44dyDPxURkh"
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
