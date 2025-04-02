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
    "2SnQxwX5RuHSysQ61Y4qP4XFm3J7w1sQh9Hdto1qsXmju3iTBehT1bxnKBiVHNeicBkR8Y7uGznBVct4moBZRYgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NEuGWPudhq5Deoc75uSwZeGUovqiCyeQmxagJWgdxRumHCBir59SSYZ1AEfQ6UZqQoEm7znqJsU4QGNSdpZ2wJL",
  "key1": "2kf5edXgK2tL7nrMyFMYnpVmtRQSngkwkjHAdzZZFbnRRbHQe28Ufu6VwhmAUb8gNdwGvLEKH7EbDXz2cmwkuZfv",
  "key2": "oqB6m26qFE1PkekHajfzh1bGYKjycsqvMnXjNsZiEUTGwFSv6VMCp3hYyAGzpEhTnBjKRM6JU1aDQZ28pDfDM7h",
  "key3": "2socMiA6ZJrVbDLiqWBnTJ8ytif5ve1ehRMR4w94pDKpPMsGaX4A3i345bvjRwxfkHdUpqLKujH9raHPEZ2eW5wX",
  "key4": "X5UPdqxEmtT4AnHrFNQ942BeecfM8xHmTmECCirqwySMcetCjSD1sFhb13Ng917HNuoWT6YhKjGVXWT4e6eHvLP",
  "key5": "1MPvRW7d1vUfEWy6khWUTUtL6sM7X67Bf7s51NkWyP8P1eeXRb3EEvrfiYvanjufNgwZKL9FJK7yTj1cqW52Eqn",
  "key6": "4c3kws3eYe4PFXTKh4hPi2zcv5CHZFFParvnJzSaHL54GpgMoBpabghgYZj9n4Yo64FSjjrCfuFX7N5dKtRyUyjA",
  "key7": "4aGMPPArnA5TXrnDfpiDdSgApN77A84CbhPrK7KPonXXVqJrcu3v3oRzKZkSZHaCm8GCESPbbkMQdzKHNudrRKKL",
  "key8": "4S6EQJCmr4KASkdB5hXWoopYyWQnbC4wiCdLKspAdqLgEunAq6iku9NDJ6u71BN6EGVcNxwV86NReqjSKNPqbYSQ",
  "key9": "cUJ1pVb6byV9puH7LkBVTdcb2vuGqsxqwmZgLNM4TT4ZsdA7Krbf3AnqtKBVfy9NqePTSHX1eGrXBtwbFdtxwhD",
  "key10": "5LnLtFKFZmnNb9Yy3qvYeGVHGPE2DktAsH3i7fYrRA9RoUmS3NNDcigEJtDy9CDMrF3VS62JiLpk7uuYqMEt597w",
  "key11": "2t9PBg7AacqsUWEEkbPHjRghP6Aiy8Ehesi651VoNNyyscD4wsNaxhfaxRe9vNBYxH5Dtbbb6eFDvfdSd7qsTA4d",
  "key12": "EwckG1a3EVRd2DUhEsWjGmTiZ6RTsXsyGCWTkxGHFmaED7vktWeqvPnYNc32YjoRJkAP6Nq8jAqmjfcxvTSXxQH",
  "key13": "3Q73SocfX3jkffBQXLfVGLWnrsP1Th3hJtwbFopTqCmz984TSZFqD7pwTKKkinDC89MFgq3pCv34KKfBRgKLW5ms",
  "key14": "jZUdPFTyP7nDmYrbfw1Vnf7nxGURToRZPDgWay5m79VYmhsLrPbcP8f7wXcsPU4oKNBaCu4NJ4PF9RVdgGcBmA2",
  "key15": "3c93Lt9suFJmxPajzCCK7LrnotT2YCn77YVjsrh6g8EVcohNPsZRNKiRrGdCYeHFh5889ZB6xpajQPk2K5YM6oKD",
  "key16": "29Mf38qmKs6QjHkUWNueLoRL2eN3M8RKuHHxTdcw2Y8iM1FMMq1YGmqniFRxEusvggHQe4uMVWvcBjqqXNrvzNcW",
  "key17": "NrdhjFqVgnbGfd3vBhNBijiq4mUCC5aHmFuRTQUVZCV7Bn6h8UyhxqSQwhs9h1uf6VpojTk5SeKmYasvp5AoJTV",
  "key18": "5AhdYAPkuK89vr7HrdD3ZNdZ2GfLwm3LQusiuR31n4qJsUbXaNYjmrJZpJhPPJJCjNAu9dqHArD7o2jZ5nmq8q73",
  "key19": "5xfEG2jetecGZbhMi6sFpvnuiBCuLDjSSGU3hsiQwR2gv2WeKC3Auy4vhRx4TiRZUXV1BNiTstD6r2NHzyzEFX6L",
  "key20": "66jc5U6XUxgVsMT59oxQoCmPS2t9TKn7AWvbwchfGPtGYAtMmjSJztj7xioAhnoXDBRJr5H9yHGjDcyQ9VkeR5er",
  "key21": "DaeM5EzfJr6ig2mFEwG92BkuMufrCWXJBsBg5afqfVkBkjR6VcBxhj7kPYq46ZzRBANMPW3UMYFoLzUSWCb4Wsx",
  "key22": "3J33oRQtTMUhErDyUpsoGzbceD4C19mEENdUmRc5oYxe9N5HZstPKWrGgKtMyqxTfKWyX3arAaHcCSj3wzYftkz8",
  "key23": "S1qekX7bjR2Qaf3CpvCTRgvcrQR85U6WHawnDfHYzTHnMqWAz5JM4tx9nwu6Fxc2F13rPSk5DTDztV3kUFQJyBc",
  "key24": "gNh4BpSHQjEXPZawNsFAQdHJNdi7TpCQNF4a96yLuXxWHwUAptC1b9B5EiBsASjfbPevfTemvUN1zfBVq5vhF2Q",
  "key25": "UaTt3dTajJFPCo61bNKkbv5WjQaFYWKiXjBwMM22hSbHKhmBgnRQRBhZ8mo3Yp4JwnNSRYumDQXifikpHZYmbtq",
  "key26": "oP9CDrhYxgDyu3yUG5LfzfWsUchZFDV1kzTGstrwmRGWQvxMhy39mzHxhzqK2TqtJ91wrFDcVNHdiSA4VHY9bnv",
  "key27": "2oLwUPTLb4HwYEPpVBfz9xd3NCTAYcm1Fp4nFPSV5WKgtUBFHMktutvwaWx3Q3X77yJF9UwfZrbVU6vpwxxo5cmd",
  "key28": "5fcnMBxTJ2CVhpXEgMBTa5sEnY3uaUygFVDA6bPVLxhovB1dizgRxcYc4An7u7Wdtv1aYKhdNksMuUkMVKVABjUx",
  "key29": "2xbbWwjURJr98Gpau89DSrkAVEKJRkiTnzz9f98YH7vyJKzB31XwTXec69qJUmiH8izwP8W7nvpVfhArDPbuwyGE",
  "key30": "w1bifCobVfrDTfGjirt8H1s1PemeLHRG2vKMpmeEjZmaUqG7BERewHN28gLZc1FHtcmaGthREfwvrCnX8Va1bZ5",
  "key31": "5VLWFSftuqLet2bVhKzNxU5tkZbPRp7zg45f3TUBwY32jdh1ndYrqgTKhj2d4Sxh1uFmghDoyHDN8G8oC9AVQtKo",
  "key32": "2DA5dUeLmE5rKMHy3mcQeHbF9sZsFmY7jaYJcDvQ27CAdtu5AjNtytNvgX68eXA2tUuqRjaZ46Uw7vT4VrXGgukm",
  "key33": "32wbBXy6RXxcWxpJfmKbZVuRigeFVKymBZBofByiExuqFyze4zZdsNRwYEHEEGFVFxps2xyY5zhVPdDCE6XE9Pcf",
  "key34": "2dneaXpyPqB2fZeuH8nwCULy5g4mEaCxfMu4bnQXDhrPQHei4bDTucJK94ebkjRb8xXUL5s13ksB1LXTznAWUi66",
  "key35": "2mrhyRMhwR6DfMewASPFJahi1phMtSuynyxp4u7vHTd34fr9EeCStkWpfiqcDnXMGTjMxBCZqucm5G54gq2uq5oF",
  "key36": "32CbQsdqEhDb3zfxLeBxqMkaJWrc4Nd7yeQfQLJUq3FbwPeJePcKMvHD4tZbDVKg2wxkEwwLXYiw1gE296LLFtEv"
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
