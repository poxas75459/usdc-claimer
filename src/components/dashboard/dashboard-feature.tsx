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
    "4zuFSw59Jn8zbAqH4ssgShC29qim347ifRzqFk6HGhdqRteCPRJgTZvMRESGkL1nAifeEDhDybtBvok5Sssnp4ZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DcqVja4NMifqVKLGH4TW7gDATiBoQqqqgSkQsa3QdXx75UZqKA7ekiHvQJE4zSGyJpSkvvmZSYEASHsg8VNQ3wA",
  "key1": "5kpabN9A85EcuxD3q1EXz33tBdEH7mdXzdLdcGFcDhHYfFNs4qLSdZ16RRafo9zxGU351DU8ab8CPv4zguVjRHDE",
  "key2": "4F4UoL3CsQ2hS7EJu6PouZuRKt7LfuBxb6YrFfdScX9kwringKSKic7gPdUPz739Up2GZa4ucuQUb4qwq7SV2FpE",
  "key3": "3YoUvfGvLF3eQMZSjq4RUjFhsTjVbRepcx81yJFU1ouivgjC5EJTcRLmcEnkaJsx16zhuqKtdTkMFz2JGWE8pjLa",
  "key4": "5DtNXUfU8c8ogoQ5nh29pwwD3sJFLag82CNY5ko92ufFPWoCJRtNiaQDMtAnHyMtLGG9rAV3nD8Acciw39RsXFY1",
  "key5": "hVccLNd7cwGx7mo7SL9r5ZVsD16TA9E3AzEezBsVWYBQGmp6MZcekgH4FdGEGAj7JZmwXKNpiyqEanFNwZEvNFM",
  "key6": "YRUSK3shoTqwQt25Gv9pDKKnnKZswJzs7P9thEeHubjB1sGhT6XqrAYWvjp6ZuVP4uixmtAYM3ZFqucU5WHFrQj",
  "key7": "3xuDoTFZXGTumfK2KPfTL1GVUmfmusKNL7kuinWPFdQPj3CeM8SN6Rek6ZRSGZeeM7YvQoRgJP6jeuQBf3NhbZqJ",
  "key8": "4vF2Mx7CKnC1S5SDtcCFewTfT1hE2btjef4eD1eaiFoiABD4EQtDi4RB5vnVtT5F1NNXQxWjJtbYwDFKBDQEhRf5",
  "key9": "a5fFPbqVeRsrCjeewhKScUoKwYWxABtQgdRCX4rPogWqSvtsT6dmSP9ZM7CtvVPattCW8JKejjfCHbcXhGXxzYG",
  "key10": "4VEwfdFG4mNP7Sdf22Nrd2q7DuKKLRYyt7YWVbBZEbvMeG2EdAYhhg7HJLuHut517tpfMHuB279mLGCPWfRb5jhL",
  "key11": "3RSABKP5YyvyFqpLGRiRJoAs2sNgdDPa3bpmbFLvPwzUg71uDWT1mtPULndGMTQgMP6jgoJbY2LipYdJ7Pc5bVgD",
  "key12": "hyKHxT6r8onQTtb92SMfPDBxc4J9Ppe8NFQmAADVePSWmPQXKoFw21qDbZuy4nfoeyCM257GdfwxBaKn8Tvf6dS",
  "key13": "5KETUfyYDLk2trtgAUKYUXrqUfMs4ugkWp2Dr9ponkYc5ZbnDiwiGzvgNag4K8XC2nzDUuGoMeyU9hLhwiaFTDQb",
  "key14": "37PDoCWNVacrx1Z7AYLBwa9tw4ovyWrMUSFhYqKAE66imHg44eAip1payyjf85Sa1JAi58V1opdo3FhGEevDJQVM",
  "key15": "icbJmiye3CSajJHnGR1ygWmTkhKFeTHg9CQiAGAzgXXYaH8FV4MfQeowpctntMTHurHENtAorz6tbTxeUWA5BLP",
  "key16": "3MA2Wtx7B2uRGvhajR5Tk6pXAADUBik8enfrQTZ3fQDUY1efJNaAJpLZ4RRGBUEW2m93qUPWkv64DGbbqyzHQNvJ",
  "key17": "5vckmgPrfPuSKoEtf4GQPCfdege9LpQw6sD72xH4evyeUBc7aJVRijnVSQM8yuPaTcMMwPaKRYCGi7DZ5xwsDfUm",
  "key18": "67fN93BANdRaA9P98fQoc43f9n8RmrH6rfCFLD8ytcat6vFixkF3AMAaN1LFNiAn3KE2Phjv94TH94yNrPymT2nq",
  "key19": "6fvaFYsCgyCot1omiCH56tuPHiKtgvTf9uPipw5fxbGsWhYVZqNKLndjWwL3Vf952oSWATvWyfRZ482TsNar5vN",
  "key20": "33MyvzaGNPvzDc5Kh6Co6q8K1NbJB1JJfCmwSuPEkuXFFkXvhyPiuxToG1JvbP3pWRkiXJ7gwywccyuCu9XJEv2A",
  "key21": "5tsJ5PRQsfEon7BzdiFkxwo8PghhqnDZjNsDAuarTfPkFJeBk8Sy4n4rPkRpRBYAHLKyMus1GiFemdU1uB8NMam3",
  "key22": "4d6Jzx2ZCMcANB3rUHPr7p6tSEJniaEUHkzXwQoYS5kV3ZWiLhtwoG8nqvTJ3nmzms1hion5gW9iFDtzhF5Gp95k",
  "key23": "28bG7XxtzFzgKkF4wCadYmdNTswg32aA5WBCzg49Cyorckdvn5zkEB6RYWYfzdEPiGEABigyVGhjtBweqAPCYiTs",
  "key24": "2qtsYKkKrCBPLg4CV8ScBYs9XJdzia4V1sEDfvNnygjpJ2JEZyDFP9NZdebkgLijX2zpvVaHQM5j6HHFxcGiioSS",
  "key25": "4Q9KNShZWtv3BQ3N15ttAmb7cMZoPxnSxzngkmfw8TwUNhrY7gdAZ4CPqc9rVv57Gm4XXFzbMj9AggKopG45cdRi",
  "key26": "2rmVocV3n2sT68Jz3ZNp4DjEp5M2KJ6spMuUirf7aGXb2AMRNRJHkXCU7CBej6xyM8VzarGNHJcbztjpJwQjttyA",
  "key27": "9amNbKZBAJcdDwbKDYVqXwNKzFRJWwCrQaRa6YC4WkbBkJVoYDi7rKUUBsT5qxkxULkCWk24UGEiV5enAy6sFz6",
  "key28": "4ky2JUAQZDn4ERdsUr4z79B2UiVXP1jyU7dzNp5fphmq3wY6RU8EnqxRRg47pSxFfmvYgzQFBh4Ui8qjUkt5Kr6t",
  "key29": "djfLYdZfQZuHyZoV3Nzzo9zUJbL6Y3FKLwhxAZCZuZjwCjhazfMzUg3trNgehc4d7bXZ8qh6xsZ4dHXBbfLxVgJ",
  "key30": "5thqyfNuVhGXTDK8sxxXPBTSdLvjToR6hi5Tnz3fWHPVUkXWiauzgYr95UZDgXySDtpTfa1z7v3WmYmfCNAqDxek",
  "key31": "3P34KLhE434fRTBmqrLHgAiQ8AMwz2HwyeUAQQrBhnmJtnWXw7VLTz2f9V27dsTmbYiff8x43SjmzNjqMUSHt2Hf",
  "key32": "5A39UhqyoCgQaYaBSfVaRbWsYRHVFeY5ZaQYoTtSquSoVgMisjf63tXkydPDW2sm1nYiE4BJ6hYnJmySxeScqQat",
  "key33": "C1Lt8j3mHkoskfzr1zsHG6ZsReMVToLxb8Yz3nygHHDtHpdx81GTaxC4junrZXFcKZd7i7oiKtBgUvSRSZkPtjV",
  "key34": "4xLH1SSv3Zza1t6FcosKJesRWfQ6xCKXkbYVPzBFfsCarZ6LUHmySBEFAJV1n2QG6T72NVcfhDFoWVDqvShYAfcW",
  "key35": "5iaagWHLaudjHrA953Q17L4JRsdk76bhnDHTFjhPZUopTC5ko83WEfmMHsLGfDenpTyjHRJNvmYRdZMu1b8ys3Tm",
  "key36": "129EeqKBtZGRJk51AdMAL2XyqGa9XsXDASJ2SB2y7Y1RYUAeD573WwVtjK1g5PNDg7cBBw6R4Xy6FxJSesD1C586",
  "key37": "28uZT1A1nfDV7vJjCNVWxwhTKjWqAZbQ8yW4o3ke5dC8ktXxa6Caxwsfu9A4LsUweCmwmcRt3sYrtg7efULiPW3G",
  "key38": "D8ABmZZh6tdgTKj9g1TQtAdirucGR7rFpLAD6qhD1tQxWgY3EAxJBssU7qd4q1y7JzV5eKFCn6zNsb4VWvXppcU",
  "key39": "5cw5cnbZSxsfU8DfdVvU8egCr3is3kzu2gJaqxdLAhDhbNqPoNuNTZewMaQyJniF6PyUAJvVs9qJonQ9DbeEVa2R",
  "key40": "5hKwT3eeHr8KZNjBueYtNNUNtoqkaRjQZgdv7CXzSKde1YPcMSMrvApQ8fEMLq2qsbthWc1gT6XsM5ATnrZYgGYm"
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
