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
    "BHNh7FzekiZ6n1bjY7Wh8HDjd1HzzZTLUYGZpDh7PZ7SheVxYaK43hTNHbxfbfxB52UKE9kKbDLAtXyG5MS5VHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nVtxjsCMAAnNH6aX9jzg5L5Qnfciob4kdMMc16vTVr6eoZWSdwbxwwhzdAzfYUygae8AiRaKhB32c62V7KxLTKJ",
  "key1": "W921QF5b9P52MGq7wUiYRJtbAA5uNA1nGndfuNxXfwaDaWTUQG9mxxMqfVqUNfgmTsKFM7iipAZiQ48cNZwjHte",
  "key2": "2dRsDe27AdrVB5y9R8fvCEoLtdn2CfFXdtHb6V7o4Cn6BEM8jrXfhzu7y3HLKsBgn5S74fiN1KthDPNhDgsStwUs",
  "key3": "4wk7rDZEP6n4NzRJsw8BsR5NVHyNtV9C5y4xRkqhYu8Y4VqrovtwgTyqdKLnFUk8pkZmaESfnmDVP619dvgc1foF",
  "key4": "gs1qPPBd5Bz1HDV2whKkNVXNeQ3QkfwdfbzhQPNy11MP1MQ2VKn3VfmAfFwqPiz8NXFNAVRNrHQicSofwGnb3c9",
  "key5": "qYVgYWC3gNkYBf6qC55yZCrpiY9FP88PHjLyAiv3n355jpieYX6aVS5ntqoKrZKFLZyaGf48CFPiT2cDaLut9QJ",
  "key6": "2wCXsDcqJuCd2qSByxq18khUqZAwULynY6XDuqAJ6Ab8L65UTiGNuRnbnXvzKoHoht6vTueihPo3tfDRQUjxJ7HE",
  "key7": "jKDxRZtMaVrgVaQjG5VGn2QkA6W72PLA4bkKCkc9hxUPhL32i78cJLfTAgHX1WMqaprmMaaksMuAxxmR5t7uKS5",
  "key8": "4Y5HVhULUKrWxVH5BN2FvvTp9R9hdaWdfWfagxzrxinhuzmEbG7JdZCV99mrDpjcTUR3SbfDTRGDBZMsBz3E3Pc7",
  "key9": "3FAsVvnT4cGK2v32J2bKz8DR9TesKsxkhKQQw8nRtZL42R8UFSqXjJDEaPfRVgJUrrvFAXu5eGhqF6k4uRcUZRW6",
  "key10": "4AcntemFMQCgpuNeU2x44zQ8F2r2Ab52SPXvszfRMW52qWejN6BDSKjn5qhe4Y6HtR7XsMwnaBAj6PqAnCS1tFXb",
  "key11": "6AXDyS3p4pymDahiXGU2QUvTyBd5TwGUBghonTX2gg1EWA3fpkKUDUq98YxtracfafKta75WpTidXQRsEeYKMgm",
  "key12": "5HDPMcrEpBBwsfeUqGKLJSuB7KEYgbaRwwd7Awhi2XLPu5Gp9PrVYuj4ExZoxDcjvcdHGRBY8bf32ghZ4qHMMepj",
  "key13": "PhnqHVSUzDNrBHm8dvrCKaX15kV7jSpm8BGp2ZGyDJWXXtJ24k3PXNvKtmXjgjmcBGiGdAhP5b1ytPE7QgQbT4r",
  "key14": "5skFtVcaTnqQX4HKiDvXKsi5qewf3aNynj5TvNPU1E2Mt4FrMKW1YxAF3HFfKmddNNRAVXR1o6Bp8Zz2Bcweo2E2",
  "key15": "5Bd2m2sW1hYVRukuHBhQZ95A3mwC9oSoYSvK7QAkBcKqq1mhJJ6XpQwT3wXJjKwmKgtmXL5X8PVj9RsQEP8CehrT",
  "key16": "P1JYckQfGfKXsC8SiRgZbPbU7KypeL43XEgXSG5FDFFYf6iWk2VXscDbGR31TNjmKY3wt9Kqhzecy36fTiiRfQj",
  "key17": "btG83n3BSowTzkue9t58HaKvKGcwVvBNCFiDKe1KFsGKhN8Hx5ACMUCXci4srW36QN6qjtV8uM4ZW26xyP4kGKG",
  "key18": "2UAjgBRfccKZqvK9FoVrewsKjqrqdwb3PNcEHB8dLVmog64kKZXkMWMRLP1nHJ77vSBbq4miDrGRp1iAR1kpqajG",
  "key19": "ibvboReta5iutH9swVqrjrc2XQczbqYaXNLzMYZibxtGMk4cuwgUrE7fxdvm1y6qDAXn8sQ3w3fcRG4EAjU7YLT",
  "key20": "5zCMk1b343kABGjTCENtxLcuVthNNnpma5nLgd4NCbVjbYiBZK3z8SxqDKVdrSAyQoSUGFgn9Z2vbN3FQqvZnDPr",
  "key21": "67b3Ecbg8MJ4pgkHGdBtZtk1Qgs44aSvZw68LruzB9WZpuhquFEfcyvpEdeNS2QhirpYfU6upwkgDvERNSSAwhHq",
  "key22": "2JaHQZiSy558aYjnSrW91vFGKMnDenwv1L1DLCjGudenshAzQzLqHLjjbnVxYmSjzqRENhYVSB38VbvhxALot1wG",
  "key23": "4S5mJtxbsiH3NQcQbncFZj1ktSNJAdYwXdp2Hph55mLtUBR2dpSSkvjFQc7R1CL71eLYw622MhE4fW8FmoSAKemT",
  "key24": "zNocDUavabThG94JVHKiwtRuJbqEMnV1Y2FJPxuzdubVdzLJgjDAef2sbz9StUozNun5uWZ2WCbWb1xGttoVENs",
  "key25": "4BiJXRkZ1UbMUE465tMfU9ByLpffgeCpLFiBhjKD9qgahnqo7fvdmsdBjE1qk2xwdUz93MtTUTCJi6oGnhvQ5qZH",
  "key26": "3ETGDeSMZzE9Q8YkBMe5fp642Cd84MKQ5R8kJ1w9KtJsgyhQzpZgvrBvYbY6kfpbjwxi6ZnUQQXnF1UWComrkUTZ",
  "key27": "bXLuS3xxoUp5MiHnK8tmpvtStJFoPDLncrBxfdnfPGX1o5n3Y8uh8dVuxAQrL97D2rL4jbmAUgZN5C81uRrC4eW",
  "key28": "52Y2rhRbeGoFeHW5nennMufX86YBJUwkBtms8N9MTq4Ycdj9tQTfhP8Cm36jfkpQFdHj847XkyLZJdFafDDRDcQo",
  "key29": "feon4ofXHHknMqPqKhsSXC6ut9MQVKm5Nn4UV8L9RfbNVy6YBqDd2UkPvPiS8EYaj5nJogNABM1ww4vGBBuaJNS",
  "key30": "2pUPjshyW4wzZAUTTT9txf97nCuGtd3p86aSFhBK3jfmTihExQR64QTppKBpeWVvHkRbgGSuyrprJ5awT9ryQwfY",
  "key31": "66D73hzXXbKpnKJHvRqfgLzKs6PFx1XGLi8q4QhsqziyZas8Kt68i1RFhuRKfeH9QdVC6vtCMsaT6orsatJCmKLg",
  "key32": "VXWnrMXUSiMPKYqcTxqQxRY9FF2QFuqtiT85f3tLQJEn2MB96VpfBUvmGBLuzmUXv9aeaSQrxVUUxaFHhenjsUK"
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
