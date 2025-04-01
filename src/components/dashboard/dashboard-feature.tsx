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
    "5XSQG8qGpSvkTPutxRtQ6YCTfh45S3L1FYTdbJgjNhD1yvvTzrxjJrEeGgBeKnbiyAmLr61RJ2GGn1hrwSJHXqQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rYqTzy4jimpoUwWQ6gCQVPkHXFH9EUoCg3WytAxNuSmX1dRxKaBkwjo2zyecfazX9UimDfUY58j8xkWYqv7dRDr",
  "key1": "37YKW5fDhdBoChvAeUnbJk57Y4Lxt8GWDJ6CgiNhuCSuqpMZJpepBQn2SPhMdArNSKK9EVa5MKsbHLNBNsyS4top",
  "key2": "22ktsUXgPRj4D8PGSLoLGth6M7pnNsd7koqP25PWNKwsc2AksL5Gz962ZM6s3WmuSZvTyuNKQt93jrDZao64GkiG",
  "key3": "mwLmE8Evu8qgwCGK6i2EtAtNNGcDpRvWdwYJdnDXFypQSrCrb9aLFn1GncdRPCEXaKYfe2GyPkqnwJuTAB1GU9M",
  "key4": "4UUWzGxra29qRGdDGLmBiY9T3KLBDs18Z8shxLw2FZKK6Sa5vqnQGdQWv18TuoNnjr7vWc9ZG8otaV46EYJapisd",
  "key5": "2teHY2m6yW3EbNpnfCXQkCEgRk9uPJc5GzCC6MFNy6PHWkhGRNQ7ws7FmL9t6mzoU2r9hdjRZVmZK9dSaYRfyQeF",
  "key6": "5p8zSqhMAqtkkVnyDyANsEbNpk1RpnPM6xW9dfyMthqEZ1gx6stSA8yh6obN8GKBNWUSFmsW1m4PbfHoiUtCFisg",
  "key7": "3znHxHguJnagJUHGmGmZPuKmxA9dSTp9M54rVeyy97CymYLJuqPBqrsAG5eQdM7MFKv5VKi4yVUd1rLvbxbKmPXi",
  "key8": "27uQeRby1HEG8k9ymSVTecHmGpVDVdAkVJo2zerzDgZZ3svw8BbRnVxevJzzQJJLAPdsw1qQ8NXYxgzB2ixKKpFo",
  "key9": "5t8GDpZTG8EFU19CSsTsiaMYNMG9bkM57icpWrYSNaRRSLrHxBB8WF4ZPxcsCQAuAqsDyYALJuMQYMhwGJZmzEo1",
  "key10": "3uSMrrUoJ9p9pdpgEZEaWTedfk7YCWxVMUBEz8wAsGqYhGSsjUFzVoeeBTdMFAdQ6BZVAyFxN38ZMjtbUiQcs2Eu",
  "key11": "5bMcPiLnc6t342mkZ6j4e6LMaHQevh4LUGojN2CFPK84H7fjn5UF2zYyAgWYMK4XxpMYxqAYJci6x4v7P68sFJoX",
  "key12": "38fJxHzx6sMzkEBbnM245SNFtFcSDiaGmKpP2Jgs3DFxygo4ViD4LmHdmcFrCj9rizgpbvSBXLWLqXV5P8pnf8SY",
  "key13": "4r65gYuRggq9oBgd3TD47FZG3KNsBe7PTrhWMAKQyCPmZNXhaFkTeMaZ9qYW7SAhCFmWpBf1UFQDwioQETwQrtZE",
  "key14": "4Lc4FBSoxM36Wu9JPYRccTN4DJAFMXwceZ9v5FT27cEYCYUszaev1JzT1dHhVmwU3gE4DNQnbLfcfVgDDBDvCu36",
  "key15": "21y36JWFpNjAiczivXQcPSBuhwGBGm8cVQbaz2W7iQbdPHAfTHsaafEDrV6HchYHFQVREgHp2kJLKrxpo88xnBoq",
  "key16": "21ZpSzQwTjGgNVXQAznpLNnwKmSYDXnun6JLiuSTEdPfod8gRDowyb5oDgSafRWCaRS6rnQwwgzasi6viXNexE6k",
  "key17": "2vG5QLX9pTpeLEY7jFVhT5Cc84FaCFKdkRrYNqSLePcmgj5ekUXUt8KnVBYJwkMNZJzwe6NMMSD4TnLU4MA99uNN",
  "key18": "3WaT1fFRnjjt17JGXp3YBjZMWZZz6aRjRLbYTAQ7jZ3cwQ5fWPqhG3eVLvbcQTZZ5ePmZDe5X9GcSpQCRJz61gwg",
  "key19": "56zFLhAu1CqzrBaVjJ48o2n9fjwHGkVkwbE8qPSAcCPx2XBCGpC7Qesc2ftiNJeKKXbyM11n3M6pSjmqxkEqEveq",
  "key20": "rMrypHDRrRSvv11trLPBZzhrRrBQpdYtoFS9verrxTeTSm5g5XgESjd6KSBUfBrPBjZWC4xYskzbEcih47hYz8F",
  "key21": "2CViFNXJfxFaaXyNwBKAPs8avubk7ej71DmKFgJ96J99witwmiEeTcwh2tqezmsftXK4R44iSuuYLeRFVGsBbKRe",
  "key22": "e3eupmRDNwmuaZW6meJg9iaKVUeDDDDMVgYW6tqqLPG89Aonw8eA8bueajzTQv6JCqrEUcHLfPiR653o6aoTKkA",
  "key23": "4UU882qRbWSdECxCfkh5PrcWAcEe4NTjbjdHoy66CoF5zRknu8eLNXkBai5CU5t6Vk3UrWgPgF6EJuyedvXcM6Bp",
  "key24": "5dbxjZAWoT5BDBpiirFCax9Xv4v6DYhE6CCcavbMxJ4K4gW7HTfNCGWTvH9AByG3jmjJDk4Ayu52g7ji5ZQXpCkZ",
  "key25": "BrowmHQxdXPqgdDdeZzPuAFA75bQeggArQTfZRtPVrh9CB7Q4mvWiwyrneq1mDXLhTrS7VnJC1uvVkoEDL6Ur6h",
  "key26": "2NMipPnhLmTCKWzNZNRW1C37MavhmmJxP8u21Ym5DHaYbqfsyx4B8RqzCaPsDfp3kBK6pYcT6viUMaXjpBgvXr6k",
  "key27": "3r7AZvXeJBrD23rYzAab1Zx4ji7SYKoJeiPKNCaiVviJkeTAFtmVf8eYvmS4Hw56DzfS394TMPptwrH2fnmVZoK4",
  "key28": "5F15ajqDchjhabt2B3tsSW2nwG78hBmmEqqac4GGWcuJTsGGxSTy1UT7tXZjTbdWhfe1hFUaRcaicSaYQwL2T9XT",
  "key29": "5TVUzxxgneHrwGPv8Aouh3QcQe9bte7cKCJQDDxMLwBWLK79B3ChZFPHbAeQhuxBNccxgZ6TsTzzo1p9YAuxB619",
  "key30": "3zPRYc93UneEzsKXK694yAczv7gAfaFTym3bFezSb1PDDLxaKNiE6RJEode4kf8YBPPzvUrJZTtac1ftNavKqpat",
  "key31": "D6KFJLLCSPhQzDuaAbaQyAYYahBM95Z9qi8vGM2qgLrMsgSi3s8w4iMqQjYhmroxkN26dPdTZddZAZ4xXzajqE8",
  "key32": "2ru2wNYRsibGAQAEyDnMTtLHqqEeJEiRQPGwHHhAGjVZoT2ZoauR3Rjx7CXAXqhNv8CA7e8uypEMix7YKk2F96C7",
  "key33": "2y5qzpmZrWyY7NqqycNK3ycr6dmDyvYhmP1o5GpCFq5BVZ5CeaSNduYGEokhLXtgreRSxTcRUFn4sRxHJ2Yq2FXv",
  "key34": "4xx5u4uBbo3tNCQqAuZMHdXjQ2t4YDCGsmg7xyppZCbyeCdSZ5ZTrxSH7HyVcQExtH4jKGnymDvYApjdZUL8uZuP",
  "key35": "3rHs6rsikmwjDgDm5HSew6piHMRuzyivkLbvHpoCMnimpU4ectX4PkgAi1s1r9tEhY3TBgPCURzC336f71mFMYCc",
  "key36": "2cqtSbbUWUsNUSwAtpFtNo6wXySE6GsWqx95apQFMon6KRfXgYwjNd5a1XZ6DrjeV8BstThR25cqww4Max1cqVit",
  "key37": "RmeV2dDCjnFuHEabMAFnCUCA9dhwtpmcEGaf1pxTjgzoqEPvjxsoz7C5SornaDbKAZhT8Kcr3Rzs77KbRHZsL8Y",
  "key38": "QrqNzNk37CJ69rsGKoqSEtSn8HaN5VZRQUxGjnXvWURjHbSpEgdnDinBhXqMgAJxgBmVU4pLhkA7NjqvdW4H8XQ",
  "key39": "2yPjDRGKRskyXkvxVMj33AztYEHfjUpV8cWjnV5WyYraDxTvt7vnXuZAauqL4otcLLt7aoPC66JLq1h7ChrLQTQ6",
  "key40": "LGr95rMXNznGZgNZXwcqxwrJDwzccYfcqEE8q2UjA7YVDbbVH2QeqqmKMWrtEbKXKkcjfwHf9QFRW8QZ6vnQ7yY",
  "key41": "nb7rpnPsFQWWifSJfERbsWTSBu5Ku76aYcbzoCP2e7vYixU3wCCNfxyrt4YKRPVqRgKeSoWuLnD5m4FU8tWnrgM",
  "key42": "3mTXFE2FwTc5RD9nV7KjcUPN6N1wfDAnuSagmjygWsn5gVswgcdVTijrNKySFpd5HAGKziBNPSXxZ7bVUzrMZBQP",
  "key43": "5pjKqPnTcUDpeKvSFjzQiAaDQfRsZ4fnvEhmdjjnAHes6Hz5fmA1C68mLKnkkCRhTzCNipR2GGp3Hxs9beSd59Ae",
  "key44": "4kgcwaDWoEpUXtgn5UYFqdc7eNzxi34wVXU2V1xjozdwyYBLLzXcVNcBVf3dXAKG6qvJk2WsqTwbTFXbaV3TcJSp"
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
