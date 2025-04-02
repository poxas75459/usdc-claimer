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
    "3rsmKkeA8gHXoHrS73z1v2zPDPyPN9BADmhcYPBHZcwdZPZwRuWGqq5JSjzDfSnpQs29U7WP6p3dKFTQBV2MLGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jVgCLmvbyTWRnLcoW47rN5TAFAuArE2xFz3LfKazdCrsXpu8nyba7RHpWaT2XY22YqV9DCps1VyUWu2Nv8DMCg9",
  "key1": "3Fw5RoJZhT72SZbcmn7J1XpCqxh76ACBMc4fwhcBh8Tx243YavEwBz7zoWuhsEfXFbnzxsU8ezv5GAh9T2NLeJGN",
  "key2": "29e6AWSXXR9BvDKox3t9ZupaDLAtB3y5jQQaeLPowg13o71ENi9TkVDrdVSj5pQr6FrHoNQzH1kFNQMFq2GwykLt",
  "key3": "5j6f1pEihWabrt1BegXg48GRpXvFjqvqGMeQHkpWg39GNuG8CpEti4bxxqeDc8vVQrvAf7dnUvU7wH7pCqA8bb2s",
  "key4": "3fpPKiSabfev7LJ4gHfun55rQdtNnHN9UR9zt9WnRrngfBtdxmqFWSPjC3Zbm14QozkDJnMy71qB4XdcBB8TqbHU",
  "key5": "2bzYwD1YfgAu3wYi1m5oLEi8GGPxezMDTPV4jcw9Vw3Ni7krWcz8fgBS7FeQ365M6LYzKhJUjJxooi77yfXMK3rr",
  "key6": "4fcK6W3cW4ySwx3JnGgK7srz94amX7BEi4k19AjNme6EXiHjxcVWbcJz5DgFRVDFNr9ebqkbt2tbzG1xGaayA5pe",
  "key7": "buvESACEjjRhXuGBh3ivKevQktzPs4MDx5LuVZWh8M2uctGhNSpN5xkWj2ow1qzrYqLGZv32t4f4jQtN4QT77am",
  "key8": "4Zu4wZXQVPGKH1M3Wjxcm5hCxzRJPC4UwJ68Cs7MpdHjBbDhakjyjRNE9Yy7Ng1Wp5CFuMQaZN7YWhdX3cBpdbM3",
  "key9": "2zkU4fLvuyYdwdRY9xmaLkVQaRvDVQ9c9cozwEsJJwtM7FPHfCfG23rVdLwapMp6x6mr2boz5mepAPEJzPonu3xR",
  "key10": "3doZJKkZaAc6YEv9dTtLdXsFqEVkjPo9SEjw7kdC6DXVKcWegvZiWJ9BVoiHH7r76ENvD8bDphJqinafos8UkjSG",
  "key11": "4EEvJ8msCbWLPmYn45PrYBeSMGAr1Zok1TnQhrBKLvWwpDLGVTtfCRLKoCtuCz7seNL5UBXx6emLBGNkAbzRmK3M",
  "key12": "4ZUsPrZNXZEFfU62vpqursv2p5zF9itFN7Cun4wkzoVUDh4GBHt6bXxgAYMCNrhNne53JxKsgkMv88uAe746KfFm",
  "key13": "4sguKHbsspwDx6sZaSvCR9rnBKdkeRjcpXct6JxBFznsif5GAvyAK5An2bs7wBkib2SWZycU23Z8EtFwL1YdGzDt",
  "key14": "2kh1NteJPAyJqnyHvKJen1g2YUC4KzXnDo1FNU1nNq4PmtDmGcKz2UaAiioVJb1ruUU4a7f5mYGuRSX1DcdtGgQM",
  "key15": "Mf13gHq5RJXD7GrhS4dTvWp4PjqYFZy1S6m43hcvDMVUhuCq38zjxGk7QXaCmYwDLh3sBg3xTx11Aj3Xe9UjZ7x",
  "key16": "3Rd9LwZdjsiPHWgNuNNSAGDrg5xVow6nFbG5p7cpb6aAWkmQnw58TTw2XQbXbqNKfDmXAptuH4ZvRjVphoorGZSX",
  "key17": "2AfBfodGxXhqMYZspG3aH8FUQUJjba2rFuPAYK9bYdkJSDgVodumfn9yxHUTyjpuXH3Ks4Sz1uctSknD8Qy8Jq74",
  "key18": "r23qU5p9pjcDWSzPkrN75pvzhtZco7eZvs2uN51a28QFqdCfdPUkfaSwJjJJWZZ6BTJKZabb19JXzmpcD76EgXC",
  "key19": "3cUFwGy6fn1XfxrGvRHUvUBGUxrCUC3LFZG37wbFMYUa26ukzX52ob1TjokXuJfM8WgvdSJdThiDw4QsqpvcxfvX",
  "key20": "2o7o65mFuWKjKFA8Js4rfdeCuHauCK3nJmqqmyTDYyuemn5sEZTEg5Z7BGJZXBf4uWMdgRRLV3QF1LSbMDLASTXF",
  "key21": "2SnH2gBnVbBBDbZkiunLrvso5yz4ZTGF8JUoZpHJcPBnwJ5RE8sxtxe2FHQvgSCLxR2Y5g76qxCbpeR6bkt1Zg1t",
  "key22": "2TwixV2Gj5LGXHrehTSVoESoZzT9LrGUr6zbmrPLxdis6PYnTvvjJrLynsVnyTLE7pfKVKLKhhkKwKSQ55k2aE9s",
  "key23": "4crtrR3XtF5Shn5LZXYDm6qphEZ6gvhiAd9ojenE2C7FmwhzTX2eaEKidQKAkaYyTquG5QWj7QoJmwEHizRHvokd",
  "key24": "5fH1sAyaAczPDbYAfZ6eJ9cL9VAS9MoWwNSnnmcxTXTxW9GK41G4qrnWF3FWKsNjpeAWaJkXwJN34ntpLWDvWAFj",
  "key25": "3zryn6CZ4yKfeahZ8fkpnoHJ3YAZdi6gPrytenSkaCxCiaDPUeAtmzNVTJCmKYK1ro3Vi2MJcj7P334TTmBVgdHF",
  "key26": "4YEDhfnZeemu9fQV6EvwrhQcJLTQgcS9E2w2z9cAM7skkETojCs6Uy5MeshLruvxi9HjJKaSx5Jj8rkiCdtxBnMr",
  "key27": "23Vqf5K2MLx2LWdgBnknnMP2DeKGc6oA8vWcukm2LtazeVrzwZ67FkwhtQHNbDCNXq2Je5qGGH1BjnG6piprgeZn",
  "key28": "3ag2TLcYpJSiYLRqqjoQuWZgmDT2QtJhBWGae8GhuyqZoktA8TCKAe2Eio5jcukhbRCbcUqNtSLLHTmtvT4QT8rg",
  "key29": "2e8C8DEQ3pgsWjcY8cXp6tnCehxJfyW8DS4pKmBvb5bZWtnxJYXNDT8bAmMVsowZtrxFQEGmkXyYcserw9v1XvBs",
  "key30": "4wSffH85Epk9s29obbWyVoQLEaBe9S3UpL9PTQm98hVF7yL9KKeXj9Kyig76AHqj1oURd43Jp1y6eYazaAH2xzxr",
  "key31": "4QhBmtCYbw1zZYb6FEWPFTnzTzqq6pS4g3fVoGpTuc5Va1E1XBikTvBmFX68roTkwLTR5UM1BjRcfeFPAH2qA972",
  "key32": "3nj83kCmSGNyQjPYRfZyuMLdGSyYMJv9DafXHQA6c9UrTjsvqnH4L4GQsUrWJG9BxMguFVQMAoa2H3zCJg5JVa53"
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
