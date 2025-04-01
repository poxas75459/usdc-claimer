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
    "fUZX1x935yA8HEdn9pXoDuYhizzZScdk788Y96rPHggLmRG3R9jt6hK4xLTq2J1H9rwoZzppeHpGo1aVN1gRCJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DtaACY9EhLqj8CkiW91TB5yRSKvfoiDGm9rAhQYBwcSkZ6keb45n1iYeQnBevUyME4aLFLva9ZHmvYR8DRikCBT",
  "key1": "45KMs4jGdP8kBt2X4BeRdDtRgXzZnfKHvPWZjdQeWYU1pgSG7QNend3obdJSrA64cZzJSdFZJLTV28AvGHjXG6Md",
  "key2": "3sr7NLLZ64A8MdeoHWtAo4CjV3dsjhUKkACx9paHRyGLczMs8d6TsLst1inrMabfhcqXRFQXEj3buiCUUSmri2Tv",
  "key3": "25VgPHVw2FZ3bpcw591dUZ2o6ARwCcaVUYofQxwA91bnpnx4xuhMwFQCPHND49ggD2fDWFd3kenoAKJAs9jkHDJD",
  "key4": "32zFHo2qN8mBSdxiYj32GkkLhYBBNrH4mubqY7ybx2AnYPvgiot5LfV2HfxwdJ4s5M957N7zfRG8BLRRonvYQgVN",
  "key5": "na3FZS7tchLaDGsh6QACGiVhvwWFePCUfDdvardjPsWQPZqet5UoTLChbP1S5GNYCLLCdLCRgehUiXSEDCuTbQB",
  "key6": "3xwvDsD7mcp16xX7MfTbxMVE6fqMe943gkTkaDwc9GEKz93AmQVYj2F7agnoUYEbdMC72UujiM8Aac9mEcwH5Lph",
  "key7": "S36NSWD58grvhmYQo4DuQzuPAADXpcqNGZD82yVcMDPqJyuLgxHjNtitHG3sfNwevdAgMZpvj6GcJb2N3KXTgyp",
  "key8": "31gGLJSq4HL17bcb28QL9j4h7R7EJ4FkVCjWEnPuoBwxkjLCRcKfgdweahLrfk5KeTkq5pe9fo3mJGa6hCfHuAGE",
  "key9": "BmFnfuHt9hQPV2u116N8A6G92mxuxHUspkuFM562QB67ALuQN86EudZYoCrLTfdep2UDHgdLBX9Baur6ojNiu6p",
  "key10": "38xJJuACeH9Q1E9jpScxL8Q3739M9LBKd2gV6esZQ6iJfgR3t2tHuvy6CSVcUMZAvzS3crqVjmn5JtWUWFHtbDFy",
  "key11": "x2KFVFQ7VQdhGufnDsKwzdU5hPGRYyYMyn9E8Ye67Ej3x7KTRt9BPuYCMkJGrzc3QDabfJK3Q62ZWudWH582XR5",
  "key12": "3y6HctQmcASXhWwMF4xLMiya5vb7ruv1w8oKZ9PVNp4rcJRrPBjWkequZCA2bVq8SniT2Cb623hBpfi2GvjsswEZ",
  "key13": "3thVYAjbzV1JzJfAuJCaXEJj7NusApfyJckFzPUpioMQeFjwSc5ZB3QLgBuAmEfKa1HHD9qqYqNRu2iAquJKWVpa",
  "key14": "JHtJe3GFA42XToeJMnWqBmaxrorukGJ1GhXuF37zopb583sPfMZX1K1nTNTHLeAUS898WT52hgnCD1XB8SJMJdM",
  "key15": "5NUjP5fD2sNqRXU9uFNyD1rvq63sKTUC1ky3DRWEbFNuogsg7uNYAvfh2PfkKeoFksJ3wZY44j7Ho2RQv4Kd5SBn",
  "key16": "3NdRdZmzhkfbLbCf73FERKQiT9YD7nkcNoc3c1NjvipkGKFeHkGaWUc1SUArEDjYVo5YAoD7gV6TYn7fsP9KT3Uv",
  "key17": "3Nq9HchHwek5Ds14c6rNaeeUkVHrEqhb4pSHFgQkqdJCcnak24YE3x31EYjnXeZaMD6axqFNPD9TcidEXx4frJmy",
  "key18": "rSbiJyPuzJPmBmbkA9N21RBUZ1VHQshVxBNngcfEH3ggNU1JJy2beQyoZEAsKh61gAQkGMUkBMno6Aht6nsD6MA",
  "key19": "3GXrzrU3yGaAqjQ2DtLnKoycnEVa9dGeLhyodf8NiaRSKyAQaWu3dqjzBVhVRrCsTurWDWaErNCjNdp2RDKomqxi",
  "key20": "258piKZGVvjdo8RgSr9HA5u3kTg9yzKVuT11ZBn7WDi93huBaxhWqwy1DD3rcB24TunAvyCtGhjGdyi4qg9oXjiG",
  "key21": "fMBgJtAJEDEPwm96ygMYdfNRw2rvcFRTpXiiTAp7DVjkPUi4ZkymxrtubjhATecusq2PaRXJp2C17C6LkKaB7Wh",
  "key22": "BGVu3NMYJsb4WVUqcoMYBneAMQzyyEfWMQcJUTagKfqqiUw7fzs6hbKdnQufwNugdNeJ5BraUtpD8TnYineyBvP",
  "key23": "2fMnTzRKBPJNzcSCR9aLpFKdrxwvBaar2XMtqbZQNaGSNs6XwijReaw8SVNCYF7t97U6YvRqM7Gj52sgr5eLLWkp",
  "key24": "4h8Q2v4fe7xZC8XvLQbmNnDM8sjJzJPM97aqjGE26VGfxPKKgXKWyGiPJNKuvaSpvYQ7A7zTQ6J7wUyvpjuj6DE3",
  "key25": "KAPoauWfHRJdTFoQii7HLeuNaG6qt5JFQ66Xkxb4oscskr1jK59E9KVYo3F4xrhJ2kBexLXY5a6BPreMCgVwFVA",
  "key26": "2bSkoaXtf81iFGV4Ugx6Cs4fwdY8LktFw8nhXZ7JgqEXWs3HFzoPPRAHnHN7sDvMjnzgUmzeiRCDAebgqLwL7Tke",
  "key27": "4w3n6uj94dbtcPwt9QmQFcBY5vxADK7F4jDbi8FwwVoAYEAZarKYx4sUY2rXAb2kbHgLeTxPM5C4acovM5UyQgc4",
  "key28": "2Lhrv7uea4jTANsJGiY8BQsW6YGnV13gkvwjevTGfzUPTQNCzjdz6AERx8n3u45fzZqAw3n42xStQCbRXDBA1Vbg",
  "key29": "3qwu8MvMMQSHVHBhuf89kuNZiAf2Y8HF6BMJWwJuCsLKudoLZX45w3R3DQbgDNWyNbf6o5MfRfEKdbH8mDkmEjKS",
  "key30": "4bYCMeRaxCjVtVKkMFGZRcHFu1PNqe368gjmxtku4d6XXn4d7ZwByz683f3Xbp3UChJpQnfYvoagoQYwFMNmsT9t",
  "key31": "5aBxPi9BjRJnx4YXGoNBzqnt42z3DB5WKqZuEPUAyqQtQscMUt2UzZZkiPrBatu25BWtMbmYEEQHm98ryNcxRATG",
  "key32": "24vzLbci7mKrmumpGCaJGgjvjKRZGa8qJjdTJngRDFyJgoikfR6Re8E8Lqfzd5QkwaGVgLDq4h4xjA4qZWxxuA3M",
  "key33": "TRDFBgnfqqUUxNDzJpRhz1u7gn3nzU382na63Z3nQEUDpbsp3r2RecnAK3mzVc6wAxTbieUncLx3r2iKw5rofvt",
  "key34": "2EPp5DRzjbLibbRt91rWyFzvTfQQKk3cVeW5dyMWo4K5XifamVbsZqmCrQXDEH7PMhR5CNngk1AdSc7rHGKqjyrC",
  "key35": "5UuSKLR15Xq9MSZ71iSCcMXidGBjpchbTxeANd1BnCDTBq5TN1rncu8xLc4cu1kYRri9X1MU2aJm7JQ2TSH1CXHg",
  "key36": "2qTQYKa1cWgVPgpAbuFTVfaSrY1yufobWr1ta1kWzjWfBTdavvAQFdww3bK8rasjigDpMCDu39Mh1dnsmwjrmEsV"
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
