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
    "4RxgfjNn4ouznAGZV6v8MesjxEGxJJFwHM3sNPUQ6ngQgKFnJf2C35ymnfTh177SyTozMRLkSPMPNZVHVdrFhwUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "THSJqAEje29fdoGtv5DhG88A5Rxk84F5dAD7dy1n718NvMbTndN2bpeMrhE6YRRwXAWQb7HqJcFXZcNJyPGH8k4",
  "key1": "4morPsLSowMUztWRHMeL672Nebp7EXaK8JnpTvHG3yePXevtJGvqXRvsiJSGQ5iEsxqVUxfHMukV8yFEqwzThD5n",
  "key2": "3bC2WS8GDN5Yiv2QTT7X8SvRzhQtgRPqnycbjusWZbP2beD6UESHsUtEuzfXFPEz2Z2ELpgLuqZBKmz7ge8gqFT3",
  "key3": "2LwoDq2F9FxnXJERe2Mm3aogrNg312vsJMUMfPyMF3hL9MngY6ok9c33Fyejq8j5dncxXWftah7MeBe7nMVmvFBG",
  "key4": "sTURtAJiTP1pYZwiYfaCd4kQidGFbi814vwwDW5GMUiVFQmek82xGNUmWnZQDznPJw57Pnn7CikUbo4qF8MLUgP",
  "key5": "5nwyH4PkmFjjPCA76z1jevAQBEpAPM3uCd17z33HtNkKMY2LLEk8mwNyTvqRfJjVZJm2xCEe672xKYND7weajDcu",
  "key6": "ggtBikJW77JYKckKHGGhdKixUftRZr7GEr3jrvND2Ebsupaz4CRRUewFMRL9AqGALEfAsxgMvsLjoL35Jkspx5m",
  "key7": "3sya1QjJaos4E76LtFABG1JGoTdbsTGfi851TqXVovjqAA7w6mXNN5nCG8obf2KzgWgmXDejQQN24w1QjicuAoMZ",
  "key8": "4QphNMg3kHVbLYZCmcgBce5xJxWxN9kBdaQBUZqGPrpRLkbbygfAVJbN5aXEwTCzevkp84Ps3LhUnqxDYYYh3yWq",
  "key9": "DQS3EFiNUDw5rdasEQknfoi52fXu8dGMkrwCURVz9JPt63DseE3PSVjtNkT4bLAXxQjA3EgSDSBkH45rDS711Zv",
  "key10": "5ZMQsLhvVFLTWZDxB9UNmC5A3QHJ5jDzvybRqXXa2cxj6mhXSSZTFYPQeE5rUg6E3qXmxh7b9X6F9xAACau1zyfm",
  "key11": "44XtEyxnZwE9wA7wPHNJZPHD2CZi78ERBYwf8zySvoUumQWrBYoH3LujFqqwXnFZnr12K5wKAoTqeufN25134eYG",
  "key12": "2H1s6KonGSH8e5FM2LmiVMkRrfNgV19HtQYA7dEpJ8H5dK4VtpHQva95KcYTNmqSdEzkvLQ8ETWkzikK3LLbZ9pZ",
  "key13": "DhyA7q6ZezadV96zQncwqmpE4ZiZvpuXizjDbnbbK4TnSM4Pbq43Qao8GugSachoqnLCNmyDZbGSuQ8Xu3zPMa4",
  "key14": "5y7ae5fxWtWyzfB146rc3ZTZdFRuJDhHCXqrL16ctTFPWyxg3pxWYdbKvzMhNLFLHN97FmhcFHSfu8paYRVh8WEV",
  "key15": "51zGWQRMPZaapRgp37E6seYnMpjMxBd87iyCYiMkdpzxyP1sKQemSGZBmrvhCFcAJyuEBMJ8R2KDVm2UYsPzAt5E",
  "key16": "245HxpwFgmSEW7vVEyW1VyPr2xd9ts1rkDahZkEjUZmK8bW5Fp1CR34XBetNp9mrk9Ygiastqm8kCtFxC5FCjEJS",
  "key17": "4aVBgbqyduB1RHBPYAj778pDFDnHQwZCQV8EtrgHLxgy8UwuyEQxoU7bWJ9gnJUpqy4quZUsyhX5n2Nmp8CQ3L65",
  "key18": "ZTppVMKtxWTv8FWfWwWqe8t5Y7NTABMBPnSNtHYPNAEgStS5GmazQKqMoNntUxvsR4HcDKSkVUjL4gDjzkxBm6i",
  "key19": "hmokZDdeqUmj6RHexGvLpqYJmea27JH3ci5noBFU6zXoADfSqZ5Vxn74nXNAqmKUPP43honY9QZbS73SigWNWub",
  "key20": "5iwrQyCMwpcy5iJY9Tuur2LKyEpgSRR47kEZpbXr9MfPJW3ttNLfGgwkhwb8sNUzfz2Eo2qHMhLRGdbWTHeeTuF9",
  "key21": "mmALHxkoEwwp1yZM4jwDsKxQXRgVRwmi7qa8yhBosGC521mecDGf7keQfYaTZUaiDqUJDW1noHv7FLASniGDqMC",
  "key22": "4im4DuhHSoAyKemc9yT8y5KmzewVnsp9emGdS9EqyGTNJ86JrfH38GGAaBKtgnVEHHC6wA5hPLcqD13Fjki1d292",
  "key23": "JN4pMQFKNY9555YDNGmFJjhhkKnvHM7NJprXLMAgozp5Heh2xs4tGdn3jrhSCJivcQLQrQcbcP9Hpn36fh5qHvK",
  "key24": "Qqr5XAisSmMT3QAAnRFPPWcVryC1eb6b1GwpoSPkUo1TcQvsS8S3Bz35mxSbDZuYxMJQpGz4qfymAgqXmLDNFSt",
  "key25": "5hCnx6xnRQVFstCz9hWVGDnyNqDQcBERxhVDwtUMXZ2TxHWsEkhyyo4nokN78zKYMkvHCAehvEvum4LrfWwV8WcL",
  "key26": "5ZCop1cMcNH5T2hwZUproqFt4VNxZu4prLK7ki6waUt8uEe2q4pJY4YNwvMcyWZrwH1L7pQsV1SPzshgNVbRBFPu",
  "key27": "4DxYQnVriyvbm2Dtah6iyUoQDwDRkquEkKpXNHLWFGRtMUHvjcwTL1DiygschtbjgX21sGoMpjLvMPZ9kfgZ91h4",
  "key28": "33zHuY9xkthcVDbJdFkHS4K2RmMcGWSNJPTF6DVDeCi9sykg7GarP9vk8rTyN5p2cRydntzktLQQejWHreqgjqXV",
  "key29": "2zbs2kSdrDQ39px7EiXzwPEUNuYJkuViZuG1X7cGu6hUPFGt6BQ2UGwsNnSFqbYQQZi6TX7hCa3ca3d1GekEtFS2",
  "key30": "5BpPwoosYgBYiDgiFWjfGhTqvip275bz929Chwn31pKAr7qEkXy8mreaiG8k5hYDVJjbBR3n6tR9iU8pisUDFXDf",
  "key31": "qt8VjNweUVJnnu4QAwh93wWFPi3A9BrgyxbeqQ9yct5Gz3Twvm3N6rqqcbSsJQ2CDqjVPpXbSmKP7kQRyKXPNVD",
  "key32": "4QwBQN5thVtAdaYnn8J2DuoWvbWaQpmy8hCBkKtf45oEwheGTanGYEkLKorqADDg9Ej9pJhewZfAAYyAH5gxZTbu"
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
