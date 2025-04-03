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
    "3dge652cATqgsU9diSyn3BtQKLaWe9B5bg2eFKanzaDdnrjyMQXs6xBTm6aHMfaeyFt1UBEjymJ22Cs2GozLtMSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24jfbts1w6JnFwWdCvVewd8ww77x9w4tVxi9HFjpUfBXCeivdgRQ9afxxo2VcjY9dM48nhVX7A3ho3FkzdJNVLJQ",
  "key1": "uX4UA2RV7373L9hSpD4u66AXr5jNhs1rHzMu4ztMBbWghHTScb1koNohzvTLjdh1Sg3untbPQ27NwPPTmu7736w",
  "key2": "4WLH3sUMBVnKC8fpuHJ4D1WrHBYAihyJzNKgJJv5vtKLbGcwHn8FmNmPndm5WyniTYtJa5HLeGESHKDDujH2oE6h",
  "key3": "swAU4ARwRbykpJCLup8kvuDR2dnE55Tc9UWECyL8pK9DmNJi6rKF7J1bMYVUmUHn9JqLw2kC23VKx5ezeS5wNsX",
  "key4": "2G6dxBZXWH7XuwsvuY9AT7acYDVBnie7hSGhUR6jtX8mYLaq6FUzYhEhCqa8WhJtNyQxPSgrbvwDtxtsNyHcvMnB",
  "key5": "2pn2JDrGwpqZpEzV5vcSrRfNaUjdeU534brDZ9g4psK18BZ7GXxhN3xYjGwF11iwzDutveWfFYqgigXB4FCHhcNk",
  "key6": "5hjoyWCmtEdQkCHhh8x4MmWUzNMaLFhbLsPdgRnCq2rz2FAszdo7Me5pTDLNjhrd3vqVeZbj7276LBF1XzZazM7g",
  "key7": "ZeE1mKq8m27FY4Xv1gXddGNhDYAgPEYQNGtJMXoH7XPMNKJNmY65dcotBjR4URBuzCthUq62J6LPpUc68eE1EpV",
  "key8": "5iQdDkSeW4W7h3u9B8zjajFes4vxt6n95qfQGDTXAj8Ej2fEDZsdMyaRBsz1aXj1srswJBNyftJvqaHkDM5ETvgW",
  "key9": "3c5FcrMQzXzpp27MHTX5fzTbsBEMPJHJ6akWBw2xhSjEh8KMuEWSSuchGU3y5JJ8arMULGfeJ5bMqztdDCjCu8h2",
  "key10": "9ZwimrSiffvQcwn63wWLkw3764tGfSbAS1aGh6gMsmsVrf4FxdhjrSjWsNXegA6mwvgkNUYaqzbrzqwNNFuSx8e",
  "key11": "4ixxBpFQckCLcFKJwHohQFYJiQFDUDwHVg3BXZN7bMjdpwApL3ECVJMFdJGVMPeZXzfPvy1bqS87G1xeRf56nWYN",
  "key12": "211aap7JuxgDuxLkzvTjVy3F6TagVxPRLZAP3ABbXiRxkywnVJixT37brmK5gxjTkrPooXMhyNSXGvBiaQW4GKTG",
  "key13": "4Qp6gLdhhHApord38x3AQ13gYAELUGEq6DcTzdnou1xXr8wijvqxuYwqTeEXRE4ADniDpMBFzSANk7rQorLRD61T",
  "key14": "4aiwv6BkMZEWf6jLAcvzQEGNvnm2fvxfvCeXJYKCbn4gCDbmbaTLstueNyRKpXvmRNMyuj67acTwdNwkS1HuWDkG",
  "key15": "4Pq4LdExFjwMHiwshVmJuvby7YF7vjTD8pZXpFPvArjc8bGZnbxtYS13uTCgZgXcQT7ykNZ31ciUU1ofK25ZPVmu",
  "key16": "4yoxmLRxPEUzSN7vibzuUoVwNMD4Q6Na2pXbqPTZuYX3fxCMxBYCKhPRnnCgEKCZRQi7yo4MjAQwj3s6wVuxfora",
  "key17": "34onLEb3qoaZ8wmEneUp4fLRQVsz4KST8QRupVmqFm6C1ZwmVqRYEghD5wwiThXdAv3KXwPeNvFxP9uLid1o5Fbi",
  "key18": "4KqnB2RsTHHvL4vy7TYtMVU7QLfokCcrhy2Ldkr9jjSpT4ZTkgKVmuoWY2Vnv5v5zdvxNV1854cwd6x4sab1AGuv",
  "key19": "4DCogcQnfpj6jSnFUiqErofYqtaik1j88oMeraZf5kaTMgc39c776Ly8Qvie5dfP4LRN19MWYtv8EE1ZS6fvdTPq",
  "key20": "5W7taAiCuDFvePrsdE7jT8nyD7vuprqtQ95CFvxztRwR9i4818NM1MpyAN2TRg1eQwPq6kyCcR5pty6DsJn4HPR8",
  "key21": "1APZhreUDDh8uGir7q1LLYuXjPYV5gZ68FHA4gVGX4GxmegVrDagmaPJrkbn5CPaZacsMuoEFpHd54BeBLpbiMm",
  "key22": "4Z1x7N8yftRhNzDbHt2uf76nuWfZZLoCP5v62jQeq66qCzoeMP9srLRv5MMosvhMdt1qYZatLi1SiakfDYTwayYQ",
  "key23": "2pHSo84h2n1q9yKUH8Zp1CcgE59SmQ7JknABxihraFVtJ9EYRCAJaEGdL25ePwJoMzXNpTzf7ZSdQZU6PVx77hGk",
  "key24": "5cYfPN7rXKQtTuvgeV8zVygUakXAH2CJvUdGFd3yfBfust7b4TJVXzRgoAttbcUjSkhs1nJBp1buRk7rLWu3Bi7Z",
  "key25": "K6tPKV8kK15vfAVuntwnM6h87EzBzXAQBgntfTR15B3vCZttXLajCwyoczKGgcA54Jo4rxGo3NpS2qsx27FUQqY",
  "key26": "q2iZpBoE4ZY8AAFfjVLkNUg8RG5Dx2ULj2hgpDrhGEGcwuJ64q8JuygKcG2YHSe8P7W63qGgCr3HihyFXfxj36e",
  "key27": "2aqPm52iSk7a3srAi2cKtYGCoFZurDAQrVKLieQfAsxvnJLNt9sMwBLh3qurqXRvdStgxjTGC4Xm7tXhJDjqPqqL",
  "key28": "rFEJ22HJREHC5yYXdoVwktz2qXpaWpnDRWwXL6cLSvkH8y8Mzy1gUTssMY5W5ALus1kKwCFx7ktEMKmCtzq8HXS",
  "key29": "2F8eHNcDPeW8xNvXTqB7drHK225n6VZWj2jsHWuYfpq3grnNaATfkfDyFYmBdgj47h7CTkPgUe2EHENc8aYGtYhJ",
  "key30": "4CqQkS1p18cPNQ67DxhZt7w7qyHtKod39NvMsMnikg2jEUS6JZH2FXgK6EBFmbMyZ5UczfSggMoJxMY3f1F6QUAT",
  "key31": "FvriiyhgZsk8bMJnwv6u1by118hyJWFfoUfpAznZumGojwjBTUkmuMq4hGwe91mA5TySwWSpqfXzcAjMjnwTw6a",
  "key32": "4c7xSfu8PwAjSFW5j78xDPjSAQD6MqnF1L9ojpKbP7Z6uvzF4zNxVPMJ9ZygYCzgQukvU3Xa28GXn5C56PH5xzXY",
  "key33": "2hqFfkYTWixxbNPd2osaWtXcTsxg3UNfjHeMLnVJY2gCLo2PZordiR3UKLoTFFsvypYV57NpHnfegriecRD65ytr",
  "key34": "YiVrRVc4pdwEJFFVXQmaZ5UBBvf4n9gPk7kcxxc9TPWVb1uXGBdMvvbbKGiGmjhoUrXzycM9vnvtn2G2pxsPiuS",
  "key35": "55rj2hWYux4KZeMch4CWJ4UjEoP8m5Rr7YdoSLuoAoTMahHMqVxnpo6BVjoS1GBhn7cTBr28KnFfYzxPHMKxYW6V",
  "key36": "4pGfDamdScfiDtTSizV7n72GHJuKgW6WysGafTjitn3sMroNmu6xRtDBcCqqAryXNASXfPjGbEs9EumHQCmjLdES",
  "key37": "4rfeMnd1sR2tKWqUPuDAT9NTub8yKeaXpf2rD6VWN85xuQQD5iCwemDp4D8tA51NaPNzYxRjpZKPvM6ZuDHv6A9J",
  "key38": "2pzTfkiGvbBkqnFuyiUuRmHbhNuZKwF2FTNAm8JoiPzLJLHAUPxNUeTbQLQsMFKEStiyb3vByzwYz6Hst5y3h4US",
  "key39": "41PUH6Kbt2GgxYZasM2uF8LLXojRF5pRHsQxWYWTF3nLk2bsud1LYpcaVz4xYFqDA8rZAcNh4K8c4DZ9tibFu9r8"
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
