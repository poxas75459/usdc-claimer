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
    "2yQ6RLMnW958yvX9qCo1RNbByuww6XaFFoPa8yRcCFBXKihA2TSYDTJqTu7AFsvTCF3FpRQUHmXYRkspKnPxZj9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "345sVVRHodfBywuCmmrPLxDzC2s3Py3JkKsESg6nM3N9GJ26Qt5zVTwz4c4jyvpuxmy5nZgbi2hDZoZtkdQMxd7g",
  "key1": "3nLKYUAfapJZF3MuH8FqKNVedGms9LH8EhW5qzEGVppccV26bCbmSarbKTkYMhkErwGePTsCN2qHrGJeHhHhDx4K",
  "key2": "4AAg67ahVtMfNnT1k3Gz3zBjUASc31jCkd1M372VzHY9oVzk8WAhqWdH7niYgrxbECYm2T8Yp9SpYkYCxwPeE8AB",
  "key3": "4kVJsWuNLP2wfdzkFL7WaG6PxcAKGeFh9sE8Avip5qgqj9FobvcRWaeeGZcFetKsjmk89ApeNMVz8XG1jaLSdhpG",
  "key4": "Hnobr8Htdm9hqtJJnZKSXM9NpPoZsxvLZPBLua21kSh6fc88z4ouS3QbtYUGYGBRsDoo8qjEEb2ojfQC9r7fpnK",
  "key5": "4Gkx6EmT2qK1HJufp57pbRCEHyYbpv4ZYHpbKkM86sjeDS5SKBcPufUK9TKT1CrTCmLJcJx4j9xisvZnFgLo5w9z",
  "key6": "4Kaxd6ZESRPeti12Pqn9sJB3iwmcii5k93Yy7BDBqfR4QznYmDnUMbDiQkL8ogQMxgKc2GWpw8k61CnBSYdY7b5p",
  "key7": "38bywbRCHbWQ7naweuYjXMETF2ojo6nMwHg2o6dk6QdHm34TF5E3cYjzLhNSdTvy3CGdMawCYiz144xXUnmLRu3w",
  "key8": "3vJWxqeHgV5Y5mPMsw5Tp4PbyzGtPU3YqysQrDGDLdAzWRgjCou5vF1tBqaBo5iSTQjMY9jya9jUAnVDyBqQ7TxX",
  "key9": "2fdL4zzd3bfKo7UAFAVKXDYpMKvDwxXHG35BZubCZAUk8r8ZeqmMPPg56pcK6qSrkh6UPvbGH737Pos2qSELSB6z",
  "key10": "VtV5DHK2wJLB7Xv5gu5DBQgNq2CM4zoFUYodXw5ThYtfZCGXwK2ezBPBJuFw5HqDWLY2rtrEn1cpfKmKLd1Cgaz",
  "key11": "23XBFNqQRboxBsPm83sxi1FtNspNZYsEnpGqjwoJRyAhnMq1HSTGYwg2pTUmMFseH94jGSDbBJeN6uFM8NsRyTcS",
  "key12": "4fQYpTMY3z97shHMhEx28pqUTGpGecNHfY37QXSghQ3wFnWgLnt57pasfuH1AqpgtAjjZj2NdjG5JyLVXJV93BdG",
  "key13": "3iMZqWDDUurzyWYkJqzCacLfvgteWUPKpxKTQ2Q684NdKzGpwSCcg8svK4jRi7iniV4JHLzn2WXcAtm21wdcFFnZ",
  "key14": "qgFoaLaAKGvqQHsGPSUHDPiTc56McxLfVZGvJVgHMu5b4CVSrcjRdmnhTZ1fhR1SXqdKPi4wJgyTPaZZnx3CaFT",
  "key15": "Dv5SBn8BNJ5qVgHuqRnXxDiT9jNCNMxwQoWmzNJjLPSBMpvEwQKehENxwsPNF5W6aS315YcDg5RhWEpvNx19kiv",
  "key16": "4SbZ7fyaNnuRUZdxNyqM35ZmUDFFhogENyayTA99pCcakZP7BCqF5EAUQAWqkscdAPFxT72aAEPB8och9ruMooK5",
  "key17": "3Cp1PJDvQQfHQtUPUVPUmt8gXrUgnjoUcjqaJ5SYVrARGXD6BZJumoZHGJdjHCvK33bgqBMVtZ6zvRpkog35VsuG",
  "key18": "2xADY25cTf1hbsftF95oBKzWdKYz8a3t6HAEeuNsbAS1ZjZqeyZwHa6Subv2HyXaTmB33XWMb4mWUy3oVRKvWRs5",
  "key19": "3oQr9LVUrYuvvb36kN5yaQ8qxKAFjcHf7o17pirTRpcvEqZs9Ldgom2j6AdFkdB48iEsHrfPdfyLxPWXfG3QWeWk",
  "key20": "3wNpfT5avmSZJPujxAT5h35Um2p7YW1DaGXPb6ySPtkEq4nmR3gjyTkhFrwG9EwtKWFoARH4a8k4dGw54xMA9ghU",
  "key21": "vFGm3saopakBsy8D5WTkPhnPFdXBWRfDVaomLjEem3EWqiDhjNqygvCNUPJuVDkxp6A8QfP4ViDdAF4ngb4m8cU",
  "key22": "5V5qPZq8PdxZaaGe3LiEthqc7R8Lzg27D1ycR2KGs7TnWZVGbKe18y1yDuRxwTSRfVSgxSgLhMcSmSwQQPju7fCd",
  "key23": "337XTjTF9JLaTVNN38qBktSreE4gg7namh7s9VwbqEzvYJ6n1XURThqoHCrt6RhRFrpdcS4j8PnM3kmoEtcs12CZ",
  "key24": "29WyEoARqihNTYVzK6GrfU8VpgwCZqkwKRdCrpT5iuPFV69FPQqwdPfJ9ZqhGhy4aaztmKRsFbJYVQLfQiLqC2Sv",
  "key25": "3vcsbDN5mLZVm4zAgd9zL5W8pEtjfbtFBeM2x2rcJHTDh35jpxLC9a9MRruty8jCoG8uzUqzXwzoz1YTu2UbBi6x",
  "key26": "xLWtzLADM2A2MzGKiWsFE1yyoHoD9PDfsoWGmt5gHov6cNfuEgUk2chWpL6H6EAUYacLUT9wPFPif9Mqvvj8YYr",
  "key27": "2pfn8RSTEkVGt4SKGwwHxHzW2Mj9dMajpR3J7RcQtHMJeFYvSnDPUjqadKEKMjxYXrsec9TU7jdkZCN9YNnrLATB",
  "key28": "D4WRtmrBmsEPR1uQWByGnThXQmtAHmETaxT4Y5d5DJjeLKP9v2wC23cb9mSDFUQ5XwGvNmgMSghvVNN98wrHusH",
  "key29": "6dWn3eQi8zFvs9btQFqcXKonQw2PEiiJoBQ8qM2rYtzjcmnLQ7xLmUoodkVWqdZQzrJy8NKJi1u4miYU4vfZqQ9",
  "key30": "dv6UYBJF8Ph3a29W5Hxn8SStX8G5MR6nzbLYHC6NYTFauK8DsCr4wWkcMoSCvNPRVFLq3Dxxieex8MXgcKkqwzv"
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
