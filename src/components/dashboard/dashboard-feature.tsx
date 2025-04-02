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
    "4Kp5oSriCh6Qo1ExwK8RWoqbzFh4ymEMwaB4MFu1NA1YAHaTqLZgwbS46okgSMgL8qy6PJa34BpdkoymrRp8qMDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qaa3qCzUieCkbdHUrS8KpsNNH49NGaJ3YeSRkzU4f2zzX7Afe255gBU3YEbhhpTNWUwUvuwcuPn4f7hCfks9qjJ",
  "key1": "5df3MVaeUhsiFGpqe2jvGeKhqm8yPqsx7c7mC1ryQHNKyM2TTjvNi8X2ARFKVpg9s3ePFCvZKjE7Q6DjE2CTmabd",
  "key2": "2QPxDs2KfVWSAMb3jkdjuXMt2GtaypP5Rk4ATY2UPwRs8h1Yu4233ezfHCBoU1wU4r5w9GW1yUkTU8Abzr4fJNMe",
  "key3": "4HpdxbyWVH64rB4MM4nC4D2m3hKnii84WK4BPwVzZuzdGM3eLvyvZUWtjvmGAcfhvYTyuGUxCJTGfH9EayyFr1tB",
  "key4": "4c7TNtDcQ8QbrC4FeR8ooQgwchxfMurEdmy6NYHG6b26LogE9fFKAgJaXFfXmLNquUhW5HZYw66AtXqhrMpYssvB",
  "key5": "35PPQNhWGnQAYbqupWutm9ouBDRoqsU2fCLzVpLpfdcq7WYip3EpWufeS6gwzanRSLNN2ECFiJ2wa7UcrjmXC6zy",
  "key6": "2ocJt95RzYEfgcoss3d6ys1ncUEtBo9JHZgD5Xtn7aixgCcSxFbAuCwkWARg3dhjyDTysbDBWNVFRW7wsAcSfLrN",
  "key7": "3rt5Uj1xT3j6FePfZnhuDZ3Shv2mhJNBbX4tojwc1F1jJ27M7PMWoTRRW4AiW4n9h3znaEUgwzNKbCZdWcE2r8XF",
  "key8": "3RTX4KDUa6SUJGVStS8bBmXg5daqRWuEjmr2cNBjuUEaFyCwVDjXosYeePABU1e2a4bRPZH5NaU7LcRwEAXuEvUM",
  "key9": "3N3hx1aCasoPsuGFQi6GEf9H176B4uZWMyGN1FKTFhGHzg6xhs1zW4PqzxkbJQVcfgaE6Pc4KDd7SfGss4sWwhjA",
  "key10": "3hyCrLFY4aJMJYUL9LkHNbN4EJz9iGq7Hi4Ac1qkf85SZGXcVG2ZJkWoJz1qeSaeandbubNnU5KLiq2SptPQRi8h",
  "key11": "tHqunrkPkQUioJZLzDnLy8QayN9Zi32xB4piCo77nSd1z43MqU1LRNRvUJEZ7fa3RjZJRN9SMJwzVk1NBRXW9nT",
  "key12": "4dc3qBgzzmQdWqPc1zU7UWaedCSA4y8Qa3TH9DfbCTpV3PTewCXQXw2RcgP7UViDU8DR6PUGNwHHemmyDK31VsfZ",
  "key13": "66xS2tFAp5NAWD4sq9u1EMyCoLqyRdQMYxDJpxkqeQybBtXV2L44XYmUkvBgXx6Zu24hQQbHANEH4jymmm2Etv14",
  "key14": "nPPrnqqeaodBXUWfWvn2avf4g2wPS7c9YANy9sUeUf8bFWyZd1D8seqfBQ4csd8wzsQir61bJ6M5bvmJLBPo5yQ",
  "key15": "5ctPsoTjDUvTy3QN1HgjrwCqKQpXMT8tRub5gegyCfVQ49qM57UDcPhq93nZU62ueMxs7ixsDuUGvfa8m5r6yk6u",
  "key16": "3FU7sebggnYZYiDt5HntwnQTzYY6E7ZfWuUJyCkSaaVJ1hGywMCuQg7XovtFdMg1dkCkroaywMz5RociiyVQxCnK",
  "key17": "TtM5z8nDZyTBxVzSZ8b2cA9bqF7R522CyooxUjq9KbJvSVbGRWzTcmwYGnJ7kvrLL7Q9ktwq8UZRrEmaJRaMHPg",
  "key18": "4a7wEBkhM6CzEZ1r3aPZVE2t1k8yiZNrVVqdFanR3iPEhjNpDHdyzbL5KaybxdZdeRykGQktKTCupiFX5UfkBmDo",
  "key19": "2HnfEUibH6VqrbkJworUgkUk46yLQzXsK87m8e11EfmBRgJQyoZRfkqFWmMcCUsJ1UH942v3nWiRLgb42LmgPUPv",
  "key20": "5qD2kKt5fKjxCGkMKbnun1cQyS92CyzV1SPExPonTtpa1WS4eFpJdj7HSfyLB9gMVdVtLmPbLH1uagvMzWeSRQsM",
  "key21": "4CiNmPyRsGLJobr2ci2PyCGvk4XJUSmm5Ju7kmqPXCVYR2UJYBjb2V1JWKuvnihTuMtL8WHHf8Gjrra6KqEzngZL",
  "key22": "5KH6sRX3uiCFsm9YaGJ65r5q7pgFTsZNfVmANVGpj2FTtRbmFT2VPKPzpHPxgwM1pEP5h6xqfD5YbQtm6FXqufAW",
  "key23": "t2S6xKEV4HZe3D6MJqezBALYcxYke1DuHjKH3o9jA8DQjQA1rAtnx3qgNFmSnpNhF3UE875jzJyWDDSFNg1TZRS",
  "key24": "4eBRGhebv8Yr8qdV8xkED6MsqsLHWihcnknPL3vrASXxdtnzMveV7KZigfuRvCfpqRhSVDrNevpKbPGbUTa1ugxN",
  "key25": "5bcFUry8XejyB7sK5EFZhrtToHDjx6gQsFi32F1Cj5NQLND6Lp3cCJvr41jqRMUaeySvGnT8JJhsSdh6v9eiKc8H",
  "key26": "VYLqBSbgTEgAcZtcQiEP3p9yQKDRLtUxhey9zdiutj3J2PvRKFtX3BefGYhUf2f5ZgVy1RmbT2y89oZkecQC2nX",
  "key27": "5Hfww6P5EiDeiRchsaFgyqCvkE8kV6KCBThZ7cJCkSFXk1xuKuuFzEMS6xvranBEob6cRKjvVZKKmJfKyV4SwanZ",
  "key28": "52j2b9eTJipobJ2YisFtAU3n9og2Y2D35D29yo97mhvf18j8cwPuWauvyyFcpMuRxH2FBKoqYRUGp3A64o5tFWQ8",
  "key29": "3eAEvjxcQZkWQ46cJR68i8xYWLg82StYJh59yXoXVEucMWB2dhqy1ri7RtYEaY9z5ho9xNPFu2WPaHW3EiJsDmkn",
  "key30": "Qu2HN919MnB5ogfDmY9uUp9UFWDeXJSb54vAGhSxpJvmb2phzXZkkMkrBgt9yc3ZWUraPWHeoyTTPuGnmhqRjoP",
  "key31": "aiKDKS9Khno9ttBQGZdw6Yss3286ZSpxL2zkm9njR2Nz47BR93J5BqM3bk1LWrtQP5FbAb1CFdq8d8qbHfb4TQw",
  "key32": "27pMSFzdVzyyWSruQYV4LtsWKFuYSqiRneymPz436WNAwB1hmgKgUZbEUyazVjzSUX6PNpMNph1wEQLn7AvpSFoS",
  "key33": "A4zh86vZ83KoBXmr6BbMSzxE4Ka4wiGPVvSSx51o8mrK7GBUyGf9Hmz1DYmAzTrhJ37X5ZRS5U4GoH6of2W1KJt"
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
