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
    "2f5RQKVu4q9K4Aiyi94wimarCnMBFuv6dtmE6PAqSVTJ7BqVFU1MZw7ynZLaBCih78f6kDnjHXsx9aTmxp8wTuuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kG1rrTBpJaXMRTycdYb1mh3aMnZnbmS1wzyrwU7cazWW92cfx1MMJGEYmNBbBDB9SSSEC67Q3jDkGXBUWdJNQXp",
  "key1": "2weBfbpvC6wAGggYASkuNXdSn6MqKUv55GGTaSHxsea68UDVZ9uBFBXMtHDSZzbNRjo66V3arxwUsg86ejTbGE5c",
  "key2": "2iuf3L451Q6ajxyLdf4uanJyW8439KerXDNV9L2UhFHZVH63BVnAHYdBJK1vztrLo29ntaRqnrzmF5TjDodXiDSP",
  "key3": "3ZdTVXxXQmddQdfcpqu5ETATbqxVqupmVxXtTKHMFAb3fHRNGaZSywmTu7wHjoqnxRoHsVNmoBgkr8QiXv1KL7nd",
  "key4": "rY37Po9ry9PT2SCC28Y8KuqBqHMrdHcACcCXJiD3XeKAmPMWaEXaxJNheYBZTtnAoskTDxzKYsHdWiQ2bKmHszr",
  "key5": "5R77o9jYhaV4ETRUW98pjoj4induuPJVqNYiWVoPAceu7Q1zeVfu64rQdwCtKYJqVtWorRg4VeYK519SFneWWPi5",
  "key6": "2StVuHnPYy2bT1rnmSLDzQDFt3DLiEdmLGwcuZCJyqwWkm8trcnfNcfPXab2FiFe27CeDWabWcXibeQ5eJFYfcL8",
  "key7": "5DoJDWvMUUjqEc9SpSvLCN8CXc82siFh79XCMF7LVEAgooqFCJnFu4mhRYxG5WKr4uGVJ2L8rYcfRvBCEG6bQWFg",
  "key8": "4CH11PPDM8yidQpnRqVmWu6eNBzPraBSDazMTrx8JwNUKnrtfqAUmJ4Sj9b5PCBvbvB1W1kYeSJbS7uQZQ3G1kEs",
  "key9": "2MCfDUNge4pE2y5JtgQJDkdLErre23eFhssxcPyd52FA34poFBnXjZe2MWPjcq5xMU5wTFRHV4YoSdvzraNzzsKN",
  "key10": "2tphZYB55AdT8kTMptfujC5XyNhYjCVLx26Zh7F1VVoZML2MupTqB4MuUMpw7MrqqUoLU7yygdyrwRyhLfC1fBcr",
  "key11": "5QkGbHwC1FeBxeFTVD8xqcuvcFCcKTHax8Nbs18XUjhvmR3PBduFFuUimUnmQcCPQLXUZq8sBSpqzsbZUnBmeWDp",
  "key12": "5mjL4hVsJyYYvc5fdUSb6z5CJPim3BKzrLMvfrsW32Azd5Gb2sy72MQiibMaA2NPcTPso9P6uC22WemxSoGcsaG4",
  "key13": "dAsH8SRguyLh54GDuKgg8MwcCnHztwR7iqobGQjcQ21YZ3dAc5amTkmQFjBg5R5FRtnbrZ8cdoT7aY7VgWtCn6r",
  "key14": "5JUsMThfT2nBsKZgUJYAQdd1dDDbr3tvkAYqCMWVNCDsbbWNAiaJGVqMAGjUixBQMt9yvhhsTJkxMGL4Hp1qaJZu",
  "key15": "67HYpxS2P1XBzLywy4VjCaX4kzWeH5KbFFYmrbh3i8vV9B5AXeAhSv5Ad9YbDPtycB1PwZ8Ki8s2DVFaCLZQYK4g",
  "key16": "dvWtB48dU7Z1456cbp4EvpR7EZHk2YxjpyBpZnDSFVzcZ4XtvTXJ843FjC86VzfLS2KrTC8JqYRRxRW8S7BU6vQ",
  "key17": "q5kfNT5azyu8NUjzEJdmxfsAsWHh19hkB2cy6VPh9kgB4ngeoU2ZDn7idNKwi2LoyjsxAdfUprT7ScYTJNce8Ur",
  "key18": "5zyzhnGjwPSg8aER8vpBHqZqk6yWou6AfuwSffaiugdhmdLjWV5iRA6kwfdFLThvX7rUeheHsmVLuZQ2owUiqWJy",
  "key19": "nrarqJSNsg3dCr4RK6JDiX7ehY3HEx8VeCeBrnRwQ3FhXZcvczYfrKDGSYG4Cwzo31tRKUKMAGWcUNu8miSLtTE",
  "key20": "67NVbBFBrNSUzcXSHmNF1FbdjAxVF8eLmcEWjp3j5rj7mRRU6E5iEDyx2iZpkFMZ6bAE5QQF9gdud6ZQkdKjDndV",
  "key21": "2bYKs5HuRKhxWWCew2uYkokkfpHuEkoyY1FvtKLjq2LyjURV6zAj5YUaaDfhLhC918kPYyWuNsGBWSsNeBYFov1T",
  "key22": "jV4bzFENzBg1ipPPYvAXT94NG9bULb5VaWEht45Gru2MwCxFjSRFH3QvCey5PTBXFPDwN7sore896hydzZotGXF",
  "key23": "5oBqUnMWePhSSSPh5YEWXX9hhUdBrQGNTLupMAQtdXrZdBPQyBhUyaEjdqpHf1EokBn2DSQVMTdcdHrshsod6PeB",
  "key24": "4prijqasvTaA2bj3SF52pxnk1hJWWtdhKzHRzZPaNA3TQdX5iDesnKBtXpaRuHnN7xuZBfk9rkPNarnbtBQWXWQk",
  "key25": "2nUfcD7XgHZ6XPBr8i1y32rmfwSskejp1Xgepq6HeLscyhtPf7PVt7xCsbtbBqw7Y8pc46CZtUcoeDbJZghwX1nL",
  "key26": "3PtrRnaizvP7te8qoAFx3ZNvXZa1cp7PE2K57pATqqS2idkxhJT8SLiurxdHQUiLDBcS7Fc1ZoJptMrWUGDzRVyT",
  "key27": "21je5hLHqUMRgTGRvx9wYJpN5Hmf5ZSnfQUvYpknYd6RAmLqYn2yWzFHyztsoLZ6Ln4RZGW9EHCeJUiK6i86ynaU",
  "key28": "5Vy7kHDBXnoBWJfhfJ1oUW3dqnATAThKymuYvtbPC9co4ygsCB6FWrq4E1p59rwucqt2MyjaiVi4zS9cvgezeTrb",
  "key29": "2QmXc7D1iZje442cUMYadKRAT5GTLoVGMcee3JJSZhohCFN1WRutvTipqbwQCw2A14tdiPEQeJq9Bvub2qaPXRUJ",
  "key30": "LqoWujPdoEDe85a9oVc1QxP74kfVfEAiUNq4NJbGY3xP3eAJPamoVB8xboWUdMAjBVk9v9YPSWNzyeNeNztLyuH",
  "key31": "29fsEZDTuyXYyczNkxGT6scwWD8opZ7GriJyitdzdRbt8A8j3tps9nuZoGBd1XRVd9pP9jJ3P5Fq7cKjvbCBHQjR",
  "key32": "1Xd33pQ8xYDxLzB6ipRtUcNmU8fjcL8vc7M5DFmznc5SgoFr2tHhQefxhLmHssfj1dtQ2B3ovSLYAhshR9kJKLn",
  "key33": "5JVaK88ecRb5jTaCPLfJt97J3tdY8PRuWoyCuup9FnRUH8BFwXaTFT7dQoBga5uZkLBu7iu6hvm7Zw15CCfuHCLm",
  "key34": "4LjaN4mN9cuQpJ6989U5haWmFhSH8CecRqvFvM7hH4L51CVHce21H7ksUv55w3eDwkE6qkuc8gcQJv3S2ybES7r8",
  "key35": "KfE7FQxuTkzbtuQgoPAad7t72yBYxraXR2wBYc9C3qZt3qqi75QBGb2P9CvfNnzA5XzuVRxEPEsgnAgvhV6EYcM",
  "key36": "5nwAfqS6Kt4g1NcodXE7Y1XFNpRAQeDxnWjeEfqqbD6j6rYJejsZ3hk4QLWSiMTymEsaVxtQQmfXfhDfs1xMUjup",
  "key37": "3EZcv7ojURq9zmNWdqEgu6Nmsg4AoadwEgtxvpxDoUyoR6uagt1Gob55KkkTL15QUhjucTjUEon3RHd8FZbC93m1",
  "key38": "2FcMpYMS9AGeM9t4SwX1m9hWv8wRhYvZKoYH8VMJRsRhpwaP9rCM8HJhqHtm57hrVhJbxM5eJJ86p363VHTq3fGd",
  "key39": "3osmqMJy4TjFcBdn2262Mxj4AmVwnFuquZrLoTps8ii6JQ9eUPi1cdZMgtJUVmvHNnXZwE2ppsLooYZLNqhiEM4w",
  "key40": "2hMBoQf5PgVrQe64D9kiDVauFbgdWPWfmNprvoMm9egJfwhk4REnqyobr6pTrhsjW4hH8eThXSkhJxfeE6a6C4NF",
  "key41": "dtkkMH2nnZE8VtFgrMNKzNNtf8QVkpz8EfDmSXsYoyheRn4GSfSRqVghGCr7abcvWoTsknZAGqbfubYiMdRGPCM",
  "key42": "5gbecV8vfCjDov36syrdSCzpTxPR4xEAZdMPGPpnjzR144eqJSLEMDjdMfdEYUpfm48cEHPQhW96Y3qZJRxNpWou",
  "key43": "3yKtEn9Lk5RJiV3Vo1Nui3HyYfqNwDAhFxgtESaRttHEL3BXmi1fCDofYMLJ3uxRLC9Lk5i2wDxm2q1dNh79DeoK",
  "key44": "3xbfTN1HhKALhRRvByoLMYDWzTqG4w74wQo8FTiD5LbeyNffaVjvagRvALLmRvVjKg4o1q1STW3gP1xryQeFPjRF"
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
