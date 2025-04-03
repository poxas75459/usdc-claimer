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
    "5jNacdXZKrvFCVhBbt5qq41m5Nb3jX7RTVubVpZe2gxLa4vdCr6yGfdczjUoxGDRUE5MHbGLHnD1zUkXdewoZ26G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CuMMhV8sVh5RThyax7t5yhM2xtmrt6JYSJbk1juLAo14RjSpa63TrEQaQFJSvFpjbjdGuEXZvF9vRzGcrrcBukV",
  "key1": "NzraQQjVRdQtr6x6D9aMfWSMB9dW3DQcYgnCTVYMGhmLDABWSASKCoiw3YpCGmwcxgLeibtXGNPfJ4cCw1pq9mB",
  "key2": "21SZFb6LZhoYBBSpHBNEDjgA56FpppxUwXCaFsdJbGSvu4niwBuWqehU1rBSRTbUm83AvBbnDf2zsWSgCJ7czyMS",
  "key3": "35z9K5nFd6nW8rGmKLVBosZCv468x45HC8jfG6D8mwxRDQ9CRR1nAhtatN6HrDS5v94vm9HftbenvZ3z9qZyMcUN",
  "key4": "4xJ7PoSDSpu7SbRTGo6baA9eSbaUyqF7v4PBMvCSVVxsHbuQLgNnYu6Krj2LXVUZ5k5TNHj3AHQ2zTxgsu77AMJP",
  "key5": "46pmvjS1FJxxBkZ1qJe134Tumg7kRKZCCw8GRsjPZkHRhUd4xChdde7BMqJunCmzYYeqpnqcWUT8By41EH6by4c9",
  "key6": "37jdhUAoAuWqFQrCFVmv1jW3NSUCL8dn2dFzpFpUQMGjCB5BXmNZFLYAvbbQTSEqor5AqpAJwEwqpBsXEADM2pYA",
  "key7": "66z6pzcC2qkno2nudYCpbFu5Yr7GdNHYqSAdmZbJszi8Xz7YjU4tgqJ3eF3nSVrLMC5qN5dMgBUB23txkB6pfU7M",
  "key8": "2JVANuZBHbCaXjRjqAb4YZZe97fLwkroTZpbbv9Npp8cPxDeidsqpRRqXFm1BMZhEKQXBWcLidELwFYa4e6eyUkm",
  "key9": "487pGB9ChjnYhBKZHffVBueYvsybafnsjgm9RwUwgdJaM1oUNSHwAKJCvV7SY2Wf12VLaefTDrg113XxRHwfcjsc",
  "key10": "qKNUGmfLLthLFLunVKZzZ7z5wrmDy1Sfq5mu6vgcMCjeSKBF2qNBgoCKsnmjyeNX1NJZZSQGqYQVZhkihHjxwhP",
  "key11": "UGC7M33867XJYHhdLCfUhXShE5knLztwvauoCcMzbj7d8pA51z1Ne7QTRfR33jmY6aRAN4bnFt1eG2xf3weHjZi",
  "key12": "51hViTeGtmjkf5vxxmRfhrumf7PXEsQhcR8jevnBDaXu7KhrZPkSHU9iydEkHZuhxaUwiKRp5isFjyPJiVpbCCLP",
  "key13": "3NTLmBJaJwm6XKcZaUd9v9aznPRto7XZEQ5FFkBgNtVP3sZQWEMLefAQ5nAs3NETXsizuQT38B6Gxx8AKfcYh6Ej",
  "key14": "2pNemaJJWc6xPRbfBVm8UMMoq9q6rxwRU3Ve9QZj8xAEpkGA1e9hbQQtU58cvWvkKYegs3pU8D2bDfNRYjBAwdM3",
  "key15": "Eatz6KLgs6Ruor95yUXaAPXYW6PV8hvBuydcqqDJBPnCvQGKhQnmvtKp8aspyPxQW2EqTbf3wu1XveqwFbmGihZ",
  "key16": "66iKUcwUweyXNXrmo2UUW7b5pyTEA65zLb6n7QV2dgPTcuxMt6GLiCQ7p2dh1ndUWfdjyB4VVUFk3RaFfxRR7iz6",
  "key17": "3JNvkCD4Fajipg76NFWALJfKdtSnC3C679H9n6sngoMUkBFVaVFsVJm2ZguWUpuRYekHTWBEfiziUn4sVmpJqRiE",
  "key18": "621Ru824fV1ge5C8aaLJ1zDihzxfcNAJBgfSNqj7xsG7bgYGtHfidYrtueXscoocHRnxQhY7xwR25nunnwWgrkms",
  "key19": "3n6zQMxVjRzjvJDpHHhvbBANe7rx9Bd3BX6KGkUdGwKfSPCpYd8JwshDbjjKHbrFTQJc3oG82gU8kQxVqsbQEfpf",
  "key20": "3x7bsU42pEUr2bSSymcL2NKo35Rn26ssoo6e1ssS35zwH3TK5oE72DCEucRqBEAbjgQUeMEZ9LXkQZKbXKg4awRt",
  "key21": "5SLc4WsHucdL9jQfTs2AKabeae4XfGmGF8ritm8xixwRdnbexam32u4qUkJXGhvSSRELRFaE1rVEBTtxnfcFTcba",
  "key22": "4yuPXRQbsgfJzSrSVYg9pStzynB8PtaPd3HwzgX58xUZ9TrXHiYVygS3HqAwmro2Pbi48i6UYtu8wCtizoj7tYNB",
  "key23": "opnjLnVSTGqJLMh2X4ovrjcsgGbAB27e46VFBdg6FzToRuCW83jzr4iy2EeJFC1MxgqHwSiFPaSGDipDZQgFcNn",
  "key24": "2umDosSg8fYKS7mP3dDsMkieN1gGrMBE3hexep158FrRbEgQ7uN1Y4fdYVWzMd4rLLKhtC9aiGFxiqfy4HMpDEnk",
  "key25": "5zEaEKWMhKK1udiXSRNmdUWeVVwrthySE6sUne7RywoHD7jJGZs6kDARMnKKfJsN1CaVwuwaaqY9ST8EXg7iPxh6",
  "key26": "622be4usovShxHffukShA2PBoxGWSbAfUuyn5W7hAUNkxyjCftp232csYmt3jqt7nyVs4dUmvhgzDKZVBZJ4wW9J",
  "key27": "2R5jYAdz97PrKbzEvuput7t6sVTLwyJk4woPBuA6aYA5Djk1zTJWKrgcxnrcYYrBjg8zL7z7WaxAgqi17nPMPkrC",
  "key28": "e5KQKXiF4LEP4SRq5d1iU5yh3AgkbobQZqhWNk4rnEUFWnX6bkY31WgqKD1ZGfzftPLYf6qsUd38WXffmZzVdMZ",
  "key29": "643cpXgyJC1wsW5Mq33UZVinnvU22uHLjQsn6FmgMgz8E2w3n9rebu2wFH65iVrXrhHmwG9xUUkaf2wF1THdYUz7",
  "key30": "4vSCgeUD3QMBrryELPrGc9RMoEzjivjBTkq98YjGWW627tfam3GvzbxyxMpyxwNS17aV48647hG6i8GgM23AxsoU",
  "key31": "3iXDAfcizSU5QfCYGj2mqvjDYV5Tzo5VA2eAvgxQZSdU4ypMXwv2vix9NLtE6wDrVtTaKzsb4eQfdqZCtoQJsWeA",
  "key32": "Mzhe8G56bv3xJY2Xcx3NnWjeQe51rEnt4HThkK8xWqmVYocvaen4thCZ2dyQS1Ech7YgWgsJmkJD9q1BrhJBkHL",
  "key33": "5e2QHDUgfS4LHHPXFicMv6ZtKZZpRAyLikTVymCgTz7j8P9j2y6239ovNVWUz3LZLSeh2hciKn74t7ZUQ8YAd7Xp",
  "key34": "4zszoDuw5JYksNEhFUgmgrpEWBzZ5HVyoJzG7TznZjNvtcvD3w36wyGhCfM4jGGZqXqevuswHcBqvfUDYENWgPFG",
  "key35": "2FWTVJuYrMEQrcu64qgYbLTdeWVUr1tszW2w9ciVxpPxhdzcQu4Y6EFt8NpF28Z34U6vgUWyGokgidQTwcRtPAYe",
  "key36": "GqNPXPBoAhnNaQpEn9RewuEJQvGMnJ3sWKw6nCMhX4PxKKb2Te7hcGaSWRPCjHy8jLKqjdtrNzZFzr8vQKEB5LB",
  "key37": "4hTC1JQPivSZHnMoYxQGHpvkiMYHPqFizzypG3WQ3KfmTF2eYvG4wLzfAVLXFiuxE5RL5ZGnVuQMBR1FAhmmxQ9w",
  "key38": "5pgxPrNq7umWEBpomGuMXtDjH4ciAtmvmQB2CYMabenufGBEt4VDwzryHr7qVMhN7n471MKPXs4DDqNtdfUXDkef",
  "key39": "4JNHRubHvFihvnVxN2F6N2pkisgHBqkco5tqmQjuZEjSVdKTWwUFLVktf8gLB6FULHVLiwxJJwZwUYFEUKhPf3ew",
  "key40": "3pzxL1UdUPDpmBRX9V6KBhQzHH1BRfXokm6VYmHYSKzfFVhjmGfxRN9rnfRmyiWFLbGoCBzq1DJXk7LtryZNKAna",
  "key41": "4kfKcW9zgxZ3dpxMAQk2pApTWTpu1MsPvrEACqrn6cV4vK1xavMUa8yAh1w4yyoUtRw5KdpQ97cTVSQdCUT3A3zi",
  "key42": "4mwt1H8MRcP99VXedg8ggAEYsrhLnjinx9wJ9iYpCbs3dF6uKfVg8tRVY39WpCFN7Vq6oRo5EkqXE5QzrfWuiL6J",
  "key43": "3yTdk9iowrW1ogcLjae3YBfwfutHUmSzMBQPLAgctbsxF78wdicDd2NpffziDTKmyRhobSH5h4mV7ux23qEjPgC8",
  "key44": "2T42fPiZiCGihKGhYaYqJBFeANDJX4KgS5v58dHKwGUQvweEVr935s9TnkuNUZh4NuEy88hZip17sWUdbuZcdM5D",
  "key45": "3tP7fLWGUCD3ZQsfeRV23DPQr2YAQDUWmauTTRjVFrjPLjxtpv6MFbeJ6n5fKYhHsJhWvgjrhLJ5YeN5cJQDWPi8",
  "key46": "3xx4mUPevzXLV5pSkkAz2urcny3eLmfWieiBVuSiczPnfmBeF6DuDLGtjQgaZsGYzNvA5JqBYGXGXzpDkA8rEQ5J"
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
