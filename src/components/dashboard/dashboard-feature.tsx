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
    "94ue3ytfMsxSnKf5jAHompcUcLbJK1MTaewcKyGsgKDV5nQhdXQqpP2SA5yciMCoho2CvQkv6pZ9W43YN5oUCLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58wFqyFVqxER1iEqaLnDE86BCr45Xq6B8P9raSSCHJLbY6V7Tc4afR1yczAe5hMk1cooHsCkxXb3iErFfXwzK7Gg",
  "key1": "5CeGu8ouQ698u4DTNyTN1hQ7sBemGHjiVf3YUmPqycV1w6piw6VzA6rTX2bXgdnhgoWnB5eYYNWHeKZ5xijCCZdv",
  "key2": "4r9sDsAPUvqcVsJKbuuMFqAQHtbX5fAXtXGzg6Lu78wKNnpK66uuzHkY3iciKAQ5tKaokCRK3VYXN8qnVXLVxCci",
  "key3": "2psndtpkrw4xz2C3GjrvxRFM9yjQak6gAFHYE26FzsQLF3YrPkMLUAuKKt361C3iTTbHJ9NUG2BHtFavW7Bz6TLi",
  "key4": "5unGRdizdomLgf7QoXfp5uJJyH7wzddgA96E585YUR5dVKK9vRXLdc4b2Z5Dfr17MsUqSUpC5XXnHJAAoUxJKsNp",
  "key5": "2zn1cDXFdtqZjmm1XEhWZrCP4QBnCju6wU6QoG594Q8m6ja3JTbPsDdf2HY6FnDzzWib85oyvz68efFD7wAuQmii",
  "key6": "2fyLpPbCjqX9m73q4UoDx9fRBNtufgXB3vcciDiy5w2pSREkKwrYQtLzPGDHgqMpZmkkfCxQkxtqXnRRUpZxTzeF",
  "key7": "3gA7WRKQQa57nhZT12zN1Vfxix2NENNP13UMpipWxnoaA4maxLveLZDEoLyUyak7hSLUfJBQ74XPAZUxLDkd9jE2",
  "key8": "2ftEopwP3aMbq6G7ehH7oz2GCyn5upuSctEExJyCMcNyTYLfBKz2bpXGbsdB43wpBtgyxvuThZ14ey7cXbXPEYxW",
  "key9": "7feq778wsyyksDxNVi6amc1UgbPgGwfFGZJpFgNX8mkSjuJzhAJ8tav3xXPcvxZvDjFGXMv6f7jXkUpiFuHW3FT",
  "key10": "49THYfyKB68kT1F6m74r1uTnDx5VWfdg3jZk8UNozM51agmBu4qxsnX9Pe8a1WKzm1mDeCPmD3c9ojZ7vBZN9LF5",
  "key11": "5qih8NtsoyKKHE9pkh6WyV6dr5Crxwqj9g7whyz5vJTatqbPeJ7MLW3mdpZEg8zWVnnNQV83cvzhMB4yAxNLqQd8",
  "key12": "4bepjw9t9x6bWWEY66S6ubRMPCQD8LcTwgHKTL6FLVMAz6gkmK2MbYnwTduySHNzhe9EnQkuPihDDH6M3ZST42Gc",
  "key13": "28jJCD2ZUs6HsTBzseHVGdu2YznSBhvELcKKqEy5Mm3qQLL5Y7HMuGd1PuuA6x4KcRRtdKerLLQfMsy8MTkNQWkG",
  "key14": "5rvfML6vbr1YGahYQjgwhjEDPzaDCmKnaEWUoLKSufzpT8fSntWjE5pU9Tgqfo1REKyauywpj9MZmwt8AW6C7LPg",
  "key15": "3Le2WA3fAZyrHte3XNTR6G5QfWxHvurqyEQCKPs3RcJDWPvjRP1jnh2mGguczxFMQbV1iZ6f9DcQ6madHxm8PZMq",
  "key16": "3bJJDbdidnpRTryMdW6wx9Y8797KHJ5dSCgpQCe4wzyAcezBpJtnShTw3uLsvK3p5Z9378EmNfCiETCHCquQ9KEd",
  "key17": "2NB6bUg3rxRGs54MhwqrsEZqU7uXHL49KrPkzzquUF9rEtvAkST8q9dvX1kP8aqEbaF2LY18dkY8DGZWsxwKKbcR",
  "key18": "4gQoVY2KReBvsqHF5ZX1gCzCD9CZ5FDHqMHFwH6TRQFeSFQ6RezNmsxtV1RFJ3PhY5pqQ3xTDTc1p7YECQpAZ9Hs",
  "key19": "3juhd1B26RcpY4LZMWgxXZJ2ebCNX4Cwv9MejEsx5yJwZqhSmok7LZxr7yBgSiYVQzZ2mYUgMsbwFnSoJ2ewHCrp",
  "key20": "4JTjMKpRFRaTcEPWNy5L5qzrUN56CACTSRcwZRXgxYRG4Q1zdJigdX8ZEke6hTT4FF4m5Qmxa88EHzKEaWen3zVq",
  "key21": "3NE2tKZziKsD9tksq57SCWB3Trop3YpgLotnBMssUwoRFXSa5PbJTnn7WgEJjQGjP5vdann5FDQpEhgSqje6FaEc",
  "key22": "5DHMJ52cM6EaHHkN2GpVFGd4Tj3bxtEPgSJ4obtsuDTUC7i1RpJpRsgXhg2tPeziQQpFJGGxeowvxumB49fGoPx6",
  "key23": "23BFvZjeBW63SPS3AywPriNHUN6QvSMdz6RhTnKZk1zcFkhTqggCnhoSoLRWYWstTfBCMSqQiZqYiAttKc1s8xSF",
  "key24": "4uqRi6ahrvsbk7ypvigVuiAN36saZ5xJ4K8HwUpPQDwiciXD6ZxPYxdfHh9QH6ocQrn2uJFSBh7SqVsFjTUkiRkt",
  "key25": "5mtUswT6x1A75kChxcFxzpJmtTkTQZM2AsKRZv66N9BS7F2b1k9En1MCdisZc4FAVeyTSNjmWBHSuqQMDm3bDp6R",
  "key26": "5PrJeH9t6qNyBG5ErVTr9goc3FZedSt7wHUq1JJGoePYJ4b7MWxfuy7us6TBXTgKVZdkdK3Ff3mUjUNQokrkfTwi",
  "key27": "3RLrGaEsLe51b9p4P3Nfc9P8EFhupBmyAT7Z7wy86GvMpcrZgvDjwoT6hKAoFwT14TCSUVDnhTLwpzAd7FnPFBtK",
  "key28": "2QxLKQYk7JmSPFpmNWnCzfK7wT5pfCJeWo5bYp249ny6orKvqS3vk238v8m8tVryqcW1gK8Y6cCSA1N2sc1NioQo",
  "key29": "tLXLGHutaUYuRkVzsvX3qh9WzMJMh7QfyJrsrLtG4kSxdiCgqadNgSLFHSEarMHFzxMb8SPxZ3ppZvDRqLKsdRR",
  "key30": "5XDRq7oDtkCKasZkU1TCPGE7BNFSx1gmbabE3RDfLR5FD8GCs8jVEAsWnLLt2uSJRZN9mEntWbkfE48drevxaS56",
  "key31": "5DbrCqiq5BBoSNhzgMxbh91eN8tgNn7kQ3PgqDsiMwbQe5SGAasVNGSwZK4WXWDaTYgr4rZNZLghuMvkPn56sdTu",
  "key32": "5vUd8JhNwe6EM281aZmR3MwdGYE417b5dGd3UGjk8XnA64anhXXP9wEqUc4yc5pGB5na1WueoEHLfAaZUAi7U39o",
  "key33": "tszEjLXrdVp1wavPZbCtLThh9djB6CDk6jMSWvnywt6iwvfUxqtaoe61BN6WdY8GRwxdda5BpV6goes4TrmCdeV",
  "key34": "3vbbzQqj6L3AyDngBPZiqeNxXokrf9RVcFzUrZAjYUk71mmi1BeWnj1EPaCeMN9hvcvVZeNSGj7jx4zfJJpcxbW7",
  "key35": "3HB8DRNercbJGSz9YFMPj6upuRC8AGwZH2Fc9wD6KkBRCrgwbaDL1KxXE45nquPwuheBX71jEXx8Wa6Eqgtajwpw",
  "key36": "43akQ74cs63h7TQ8JNza6fEQngACNR8MQJBjUZZTj7apyHMfos4Grt1nBkiT4sVm2cTEsVZsvK25fYkcLxtbgbDK",
  "key37": "UbF8QYbuqFhmuGoe18MatRanUv8b5F4rtpLYpcBCxNUuokbvUiLLuMuj468jLi5jXYJzzG8E7w7sHFm4hM1R6Rz",
  "key38": "3K55XAviMWknCwNZVR8gRRSs8UghTpcAGFPwjRi6o34speF1xvB93qkHLK9xnLrgfjV9ByKeL72Z2jn4s5yzzyyZ",
  "key39": "4bGT6Djiw7mWYfQYYQnbF2jn9JoAv6ywezNP4oHtMYPrQAoit71BQ6FLNG3FgYFTtitBu5gevQRieZtZJe1oS8Nt",
  "key40": "2uQo8MuSzo92aHYUchyYjKKyRv2pd5sbfk6mrzVTwfdg4oXPzR3zVQ7Lk8DPQ8t26f8GRrFtDgu3JVG9YNK21Vqz",
  "key41": "mM7t8gKxdQfLTgMhNcbSvBeqGqVLXeNi7WiXW59hhTBoegXYiHNBAxmuytJz119nPQBakmkWD23osMZ9ekJA6oF",
  "key42": "5XhxHLRjQShKDxAePbF13g1xT5Lvr3Dv9Ex92qwcH8c5Kxyo7j9QqQ91eEsaPrfwsbqT8UnybsvYoWATzdBuE91k",
  "key43": "2vNdNgJ18hdVw6w23ZTHecG2j21cdu8RKcimDnMFaXuiUEowJRY712uwVkMf5aAF3dhY3NzCA4gyfXf87iQNvXBR",
  "key44": "eFuMX1WrHYcrbdy1EH2aYNJPJGJKbRus4PGMDBDZPWjifCt8CgtHx5Vsy3jNhKP6sJtztE5pWK1PP5UZt8XgCtg",
  "key45": "2qQnXhvYnmF2eHyitYTRZwL1JH62tsWM8KD6yLTTKd31apWexEYjEnLiKEV2LSSxP8chZzkPiiJe7rQqKQpL84k7",
  "key46": "5VX1wjMxp2BCJu6sgdpe2J7rnsr4e6TAboHq4B5QcFKEdqjs32U2YcBXdYsuxmbyT1DRCPpoJD5fHj7HLziZaDEw",
  "key47": "3XZ4GsB4hAFegHcQtMC4U1fcWhiPeFYUkAPUhpbsSuQ7nc3vvotNUxnRTmxKzLzdAejj69DekWVKqKkPCMTP3STx",
  "key48": "5o44DBijPanKxDrWKQQguZGqB1wRVioobwkMM4z6PZ4WT4app9vi53x9Xu7mcBpjGgQsLnrgzUhoajzpi5scwpyK"
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
