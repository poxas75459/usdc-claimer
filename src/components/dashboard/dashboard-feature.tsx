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
    "3K6obtxpx8ZFUsHT1jA4cndAkRnCM6igSBMPsfH6TZrKwQQKFWRiyxJu4LizMdDyCUeAegguLDRnC4e8JNbVxCkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K5RPYopwzSGDg2ZvHgf994uYpLMVa4YMoK9zqdEJkjMdjciK7T3LFpBkgwJtkn1GjWRAk5RhyHt7iZBSXX2pKZw",
  "key1": "4NQrSmsnjSvmXmfYVxzGGbqQjuutqZaTKEe4z2L1KFY2igGnKPXREcmNqG6TcRmqWsHBPiXnPiw41QDuC5WKjVvn",
  "key2": "559PEJSW6BhwQkAxgxgzE65XLqu9ZJGAvyT5Z4H8MGarf54QKNgzuXcKRhnDGErZN7TPsXx4iJUb1v3GzTAuFJbQ",
  "key3": "5GNNhtA6iuqJ1zZrApC7s5XnQxRwRX3PrGFbPmHNqp3UFDbsYbYn9nHxUeo1zFoasH8KLbB7f9W8eakw6o7LPgo2",
  "key4": "2xuuDDou7JVry6fBLbKs62rwuSp68g4t3iYmGvX5kAwEBC9CXmkwTr4fTJwtr8AegtbMuVkQXRSD6kR7SxBbJ5cj",
  "key5": "4jmKHUprG6v9t8zpXjAh9vx68wtwRAfzMQ1SoHK1v3xPaQjBuiWsPuVkhT6VqxFHnyb662YP8LkS5w3CyE227RZU",
  "key6": "2RofB5K8aHsHLDzkgxBjxm1eSkWRLjMf2TFAv3pzE2uk2RvHfTN4ERcw3Dadm6ZvmejYiB9P8LyUsD8DvzqmeBFf",
  "key7": "5eTwvSC15HAw5ea43RPBosrXYAR83ZSqdt9VfqaUf4PzBNK9UXcyxroVYLveFiQ9amMPXtdED9VKpsYU22f1VnN",
  "key8": "3mVCM5Th4KLMw1DhyEnmMTzUorQ6dL3suDhFqBmbHtix4qqDpPGU8ZHoK4JSzKmMJVZekKPiTPCMjembWsruZtsp",
  "key9": "3k2E19Qqo8BBDsU65wANyUNNgjMTwQMEU1PgP9aBHgwcAU7s13J7e6jtfLcfuvGcUUEtFmTJyB1pQPZ1XxNYwkXk",
  "key10": "2R17XQNYB5TNdCD34LP9t6JLtjMyCbbrAxpgphr3qcHYRnWA5cAWFD71N9qfSPdbYhw1Heep4n7zQsGorWDcQdBr",
  "key11": "5twa1omNhKGSvKaMZkBdyJ9Voys4qnvtyP8sgzGpu8jzwNAncfPQpL86wgfcAvueWGQ8CjnrYZxEomFXZjzif4Ra",
  "key12": "3p4A7rYZBasmUm9rxyxGe1yCVUhhkZQpQ3ooqLR2uwMSKFuSNVHC3KPmHrZ626fWQ6cQG8Q6bBiQcCs2yfuwSgQt",
  "key13": "4NtoGPSux93ZodfGoZGVNiS3tWvbB3iqHD3EJB9ov4UE2DwaYmb8q45gzJ8nehkGnBz9xcCeuYoxG58P8t7wPxST",
  "key14": "2oYfxvATZSiRBKUGEfZHvfPvB5R44R83Hz2v8NYqASWxJUpfCoJpumaKiRxw265nQxwEWys8syg6hkpQsHpfy5EG",
  "key15": "4FAgrukBJAX31LyB8m8cRByL5wDpX3Fupe4r58CXmgm1oQqaXBDcDny77AXfxXT3NAz5McNGLWeU7CJ3bywLqR5V",
  "key16": "3yhEoKSbWpbKWXEb3KzPDY65NU7LekRxhXDLHLcJLyFKzTwt6sjNmp7rVjDxUx656eAv7y7PhTDXkicvRN4vchgc",
  "key17": "3RDS7GBWmdttnHDoNDZC67x7Q9ziwuygQLTWN8TVkKjgVcbya5CkrsrTxMB5esyFJN7u5MbvX4jMTqbKX2t9KxZw",
  "key18": "4DVVnMf2gw6gKh37PxyakH6pUrdzEpApUyhvQGVhSwHd5E2iALmqRDC6wsUjyUkkfc7kWWhkkEdeny3Fvmjah7no",
  "key19": "5iHvWURHK5xVhYNmYKS95dUJWCzc5G2reKYscSmXY491GsgC8h8Q2CQnftDvk9zuJ6L3Dwg5LKPr23JKxQ8UWfRB",
  "key20": "2CQkr2ccue858qbxzGVNmCUW9tM7Jehsn7y1EiYCMJPXx4ikT2tGL2wTkUnK8f9W8oEavJA3u2rfBCJ5Luc5KAhB",
  "key21": "5N7TBiMJk4xkiu4CDXaaqhMog875rHv1sjbvUCSbExP8hZ94BSzmTp87WKBkG6gvctoKQB2XfVouxNq2AYwp7SDc",
  "key22": "3w4hYUvKZQZ2Rp9JfV8Tcis4baNCySxVS7mHEbBJ4MnTSyt4ZfVgbVDG252PtdTnLSxvSWS3JPvAjkve4ezhZ91a",
  "key23": "2RoYwMoMjLxZ8c2zUym2imU8qY7bhhpLkrJ3zf5v5CLdXswRxNXL5JARvaWQau7ArSu5d1oRj6PXFmpadtqYgVZ7",
  "key24": "476GycHU1i6V6GR9WXWA5Q6iHi91Uf9Ch6M8xcbJ4YZpA6QrohqV4eEJMQkosngchm6eCeRN3ubLQ1zkRr6pBQyt",
  "key25": "3UqrEqM8AhN5HKxHnpwyCni7y14bqJGAYnzs5jJATkvNbYM7N7B1gCGHy9fz745xMurPAK5ugB6vjaYuyYtjW9E6",
  "key26": "rBgThkb2y2uEFraJ5MHZFp7WsafSnKLt5ww8MSCHifL1ETMB2PU7zZPiqXdPMd99t9mXJpJftBd6i52yN1KNQtF",
  "key27": "61HHCPVZpQbTDgY5p7rExKC1eoyLsnopzhKfSoEdpb2PgSeW94raittH6uMfpPypfFE3nLbCzDhXqMpNHykfuTzZ",
  "key28": "2diLv6ukzABsmatyhHadREKQxzeDgJLJLD7BBd2teJkQCM9AyfrUvKQcdFz3b9gozW4DZzRBP95hSziuH8AKAZWL",
  "key29": "BhASeUaCb96zfs8xiC9iwvsLpcCgWrUM5SNS1hwVG8P2XbM27yPka7ufC9eDjDKFoxbTZpAjciJychwzyvYuVRE",
  "key30": "5sGqJN7fJ3QnXu2ireytpNy8W1AXdXfR679RNSQ1etG7CUWZYuQnR5e2BSYaUy7CM1vVQimbDCujEzy6tpyXnDKc",
  "key31": "5Xf1DSvNt8jGs6jFeqZszjDaSPoEZC7kzJGhpXiZQHPTn4aRvTfgkGGRZJdgmA2GARGkikYpasqhvs9XQ5HYszTN",
  "key32": "2RCn4ZtgupeZ4iqCzZvZHV2Ny2Fs2cgAuNdFLFMbMn4cdZMT4xUSJqDbSuecAQxmMebm3uX7R1gHib5nGKmes8cs",
  "key33": "5t3tgLp2T6JNK9XiqMPmW1m6dMbztgc1GkA5gxqBf4qdotfRDhv27SAKrdCcv66cToDZtmij9bk8DLftkfXZZKez",
  "key34": "2LyF9A6fTpKWVmq67z6rFUsQxjsGwzTJwDnm5kYNhHWXUsMhUUvaqq2GNFx4BAn1i7KAGZsnSHGiwZ6px1uEBjxc",
  "key35": "26gp5vpqWbfccVHNoPuyXqy35K87Nz4oSqccPVmiLLe99qEuBDoxdiE78tuYRY8VEw11xMeC4xfcFRgANtHXxPJ3",
  "key36": "58VFUtJMctLYYuysQpfD6G5c2PxVxtA2qHLAmzX1tsLcXSGsdwxKtpx1RbJJji86G8NHRfTuQByH97rJgsdN7W5X",
  "key37": "3bBTCdMaEkxWhb4Cw5pGAefN8Eob3YkwYuYgKLPTD4j4rMnUDhMWFRqsPh7VRbrQDRyMb73N9ZPwDzLeYvmvKmpM",
  "key38": "5kFfUzxbTLsQ3D648PcryjQftsyDxH1AGGfzWaexuZpvV3PNoAG38TGAMEeyJAFa9SPx1Sraspbvnc1oEuKzEevq",
  "key39": "3HbXqiAvmcu7J2qiyxcZP4B4tDAMaPthYYHRXDYrgrMiPt9WnTyR4r1uridSn4RqxnXmAHfP7bMdoTgUQ4vNXffR",
  "key40": "3BhaaiLUrd5vieabTkWi4bm4EW2SvyciYgWRoWxdJ3PnXskgakLf5cV1tgBdqcg4Xn5kajPBiR6Cp2qY2WZCLjE",
  "key41": "2DzxopEy68p8KR6UgCNJsPpR81t4cBCbPfBEf3421t7pn6fj14WavLZkXdLkxKiDc3RjrvmBH62f7QhDPmbQBc3X",
  "key42": "5X3YA8utFKMyjdDLdxXVAnTL5m8uWH9rrvECzWCaTiMPXH7fDQ1V45QGNAZxqw1NgBKzyC2dNN6mmRAP61wz5zvq",
  "key43": "2diZconwb5WuarzBEz5vZxRWP2VA56Y2TswZeHDNNiCYoX9g1m9uR68YVcFes4aXvzj57UuPQKMdphGBQcr7hNQG",
  "key44": "4UPFebGPPLFQUyHEMZYqLpHTGci1mSNF6q96frY9ET3m2xBUEgGgGdNPz4ZWk7UcKZHQcCNPDbgC6Gon4VmrfLzX",
  "key45": "3CCvP85oY2seQC48C66KxczYTzyzoMqr2Utg4w31B68ZmNY8E3R5MEDWZx6aMDvc4taprAQS7aw9bqsy5nz79gNa"
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
