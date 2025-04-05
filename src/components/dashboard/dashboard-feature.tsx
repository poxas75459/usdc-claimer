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
    "3U61du9GqVTkXPb6QHBiCbdjV4sRgQx5NR7X7nqYqmAieynYb3HVBpENWskLKca6CZ44T5VoxuYuDJmrKSpFzWMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FcmTvnVCrNDrZ7EUoi6bgSQvFak8CXF4CrV76GGNivHaefaekPb6GsqgXuRm6itf1sy4V56o3iBB5xw1YvTyskv",
  "key1": "38nvrVJn68EFyMFTnhPp8JqHk1hsG9CYE4s7yNnyczyk16m3KhJTHgNuRBYLAJsCWjmovw9TfqyxLQo123TgaKpZ",
  "key2": "3ZnirysnTJ75KWnaxM7vxZDQynZbf2GQKbCMSJ9ZePTuYhyB3W39TkGpM9nX3oXL5bTFNko4Q8ZjX5bY79XaG32a",
  "key3": "2mmAfP7yoU93LjcGb1AunkQxXJowZpAZR89uQmKr9ksNvxb7MoYsTPZ5oAYbGzXiZHAu2JU4PmVhtzNjHzwzP4Ru",
  "key4": "3zDr5oQxhpEcFcrH2x4nfuDAMUYW9eBFgjUjxoVL4kh1atyNV9hMqeBmoeqmCSifeQSQ2oPuKWCWf7j5zceoY1wU",
  "key5": "4gA3CYpN6UeSiyCL9HPijLg4PLAR4j8DMWbojDbqrXdBrQm8oobxewBf2PVprZnSEpdgCNZzNqrpY3Y454GGrhmm",
  "key6": "QXH25b79WijLxok48LJsdKVDB6KRPC1TSio7YnS8uLLkYqDegoqpa38Ai22PqzxUJpEwtZBxJ6gyCkpjM3K9Un1",
  "key7": "3HCt1dVD1SgVLmgu2WMj37Jgn8MTi9z2MgZ9m3RxHJyAcewFfihK1VaTe9FcWv3iHa2RrUpcsxs8vDoVgbsMYfTK",
  "key8": "2i5DR1GGs6MxrKDZWhMPUu49i2p6vR4Kdstmwms7HyTG6rmo2CuFFwvoHCXbGSEx3zXMjLPBueKXJJBQTDRS6i8L",
  "key9": "2bT9xdtgU5ojsfYTmW5v5vAHYoBvy2Z2yvS8JDt1LSbptSKftzjbLHYhC59h6fjaMsB8z44drUGBgiFuqUwzhe35",
  "key10": "4MkRn4QkDzoJ8ELBDQnSSaU4j7fj9qKXgohH7bvSTdLPeJdRdpqN5KaTkb54QzyvZHGFuscJHm8xgRGXLxrtfNcX",
  "key11": "4Kf9GxVohnw4uhGDyREt5VRV46ia43syfXDJJ8hxVT7t9xsiPFckiYN55pZE7KF1cG8TQKcUUYTSEJfoeDNnzRim",
  "key12": "3ajfH5yseQM8u8tLCBWGsqw6LTAzdWk4oBW5dRMJNcJpXBVvxRyjnGS4NUEzT3PLEjw8SdY6ckcX53xssa5PsXb6",
  "key13": "2kbfrkugqqXiyizHb1vk1UqVvmVwNBf83JTkkShPEFSFWW8EEhtQFq7zwW9ri6924GD2f8uSAVQ2Ycf2LABn9Jm4",
  "key14": "4J4nV2PVfQPZid47kPz9vytmJrGpS7DSqoDrjkbm2JtkcYcyg4QFqyn8TBUXbSBEP3mcTnJ3giTP5FdmXJEemVuJ",
  "key15": "3qbYkg7DfExw3ynXM6jRtuVipunxJhz4TiibPn16RrDMvQe9LKxQamKaptMiRn26fANj5zA6L61b9aK5WTZ2ViWj",
  "key16": "28zgh8gya4Ds4FptrtM7qHgTuGJHkKNxVvWy6R4NiKc4YP4KJLf256ZFzMh2PwBpXcHKCzhtrnB4ofug2icMC2UR",
  "key17": "29LGgGb7z9Fkfa5AWTSK4wBtMMJPnRyEaWtiA3ve8MKpqQfq3oQnq6iMooght6xoPQREDr5HMosoedNvVBXbGJF4",
  "key18": "5BKPDb1kN57Z92h3z3QSMkZmeGBLs1biAeZPFcJPvgGuxUMAVVhbnJuPmCA5VKnoMNUjFeyraQeYUTjK93xMwxRy",
  "key19": "2CGJqQXMD7WZpWN4kcXaTgRVgkx8ZurrGgL2W7RxLSVuCmeVv2E722EkHZu9rjYXgY372A9yia1J1w5ufuUYnYpH",
  "key20": "c1AmHuix1oUgUGxjJNoajXbdCa7agJVTb8GrJSze1ACo2VMK3sHtmnQF1evzD3kdNbi8n3JbtY7THtCKMesvbVS",
  "key21": "1xZwjku2GMMm7YQT5VMfK8kniQGrrDvnueJgsjD7kB7Ym9484pbrHghCyDunW3Y1tGXf3KXdWUsyu9KuHpFoeTM",
  "key22": "4wQEdfTVDMkjE6FDDAyKsoYKuhES6DUruY2umEHnAu1o4XgfMaPRAuafLuLfYFwZprCczv6LrN3nDCGRsevS2ZqX",
  "key23": "yMrzkuBMkNrf6fb2iC4df6ZE2yA5PsguTaLNVAEsNwGkpqshJLUEuMhU6ZnJDeumCDys8dBJycLZ4mmbcaDCUpD",
  "key24": "2SaRVjy1Vy51HoQDFNioKpGw97VYmrkt8GEPjwNDY16wJEuPppn82262Y5tFg42wwmXZSJoFi2tUnZvhFcoBAYgc",
  "key25": "2hEva9ZE5KAUmqh8bTsEFJyGVrLc4YLDrAwr49hcgNpWDbxXPnmwF1rUznBjSgjyUKSjEVKCQxiwpreoBLFXBSHN",
  "key26": "g3USqoiHaxZeas4GaY827TjmiLa9rkyeGQdeeLBJNV1k5gcooqLwMKfkFqfpAt3MG2eHX2YUSjYhrXJdaxJsDnH",
  "key27": "3GyATeAKgSfk7hLHvK8XqHNTQocsv6mFwYokB1MHqtTcMeuSfu69tCbvGRcpkpWaggkqsLkix7xurhQqLLJZmJvK",
  "key28": "2JN36fMhpszegQ5V6d5QdgGRHHLCBdtK2JwkEf5vqwW88aeXpEABMhwpuoBhzRE2hvpeCGpkBfmtXx9qVr3RPLmq",
  "key29": "QYhhRSDx6bZGMifgunZXGdbmNG8Nz8EoT2ihGM52J9SJHHopZK2zbucEvbKGhqSBKs6bGsQb8seWpMhrkzYSbb1",
  "key30": "6rvAn7feUVT4RqCucpxdh7jKjWYeC4oRYQWegS7pXBfxKJBU7UK7nAVKDEnsAKMZUXdb8JPkRU5PY6LqmTqSPuF",
  "key31": "9hwJWGTqj5ZqiJiSwFPgxJDmX34gFMSdqjM4rrjqUzD8kQodHmvSJGX4YZKvmRKYcFsBaV5BrtMeQWhukHa6r69",
  "key32": "4n25oeysCPxPrujANhKgUuwQW7rtYSmJeEAsXRxv5f8dnXnAoFJXA5Cy3MBGTfXBPeig9Lz1zJPM3P3KWajrHJwY",
  "key33": "f8F6eDuqTeAqAgc8uSG69g3MRrdc7q5UZRRHX1mUjaLYHey4CVdNuxYFkzupGfG1apnMsDeSbwnHdi55vsgh7wu",
  "key34": "2ZSVmiQ4rFELcAhQYKbTywwy9UJWsNmMmgF9idAqjw53faRV2o6VkcQfu5xhq6Pzc7i4hbqFCEWm3v6SvX6h7h4r",
  "key35": "4XtEq6sHPTJbjyxnpSExhpg6Ypab1gv3CHSTmCXsCRTAV28QZbKoXBEyGdbU1UMcUJKyT93rWnPnoFBdhFwkiR1s",
  "key36": "2wDkUxJjRYUmSJVkqimfGrkVG6xwSvkeHwmcAKHSz3HiaupRmK7VsaCdUxQWBV8KAR4GHEyUE6nNnxXrjVfgzwWM",
  "key37": "2Bea5LgNZ9JWMRFXpTnsonDNBMtukffewTQzupHLFsJwwdqfFNpQhsBmP2bohqpheLaHuxVRBTx2jeX5iW7yDMuu",
  "key38": "4kMoRKGXF9kRDByFHrZPgbxJJsm2qETnLpxfKphyJtN9W21FUxXmcTvHVxTgwCsAuZqsQFbcVubrKVcNXdNUxRVD"
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
