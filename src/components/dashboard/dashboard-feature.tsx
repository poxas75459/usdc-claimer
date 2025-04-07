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
    "4ttfw6ELjw5Tn8Cbc8AfXh7gRzbbVX7xeiHpF5p2BUxizzaj2j4Aj5arYWG8fEfEFxZpWdisNZdYzD1ZFKyBexYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61QsAxd7DdBxf8QAf5cyMHT4nHwhSvuYj1e2aq942TGrHn6HyU5b6NnBYD1SLyVUfrG1nokPXkQ2gQYHV84J62JQ",
  "key1": "667YAhYPJTWc8SvBgq52bdr4iGfTxDGJE185SuikJyP942Pkp1tyXQxMyQXwCa4WvrquaAzgw5wvcKHs55EDCEtn",
  "key2": "5iuqqi7dcDQxvFU2NJEkmtr8d6Kphq7pjEL4MNZA19tkVufC1PLkYx9GMhyVPZkLnnt1NSX9egKXGZicQi5NnSEe",
  "key3": "4Rw3t2YSHDkEBpgLst5FfedLb8Ke6pQGLbhLh2YW2ZtW7DFhfPmXyEjKha8qgf31qQzVL1KdwtrBdk2ikgkCwfW2",
  "key4": "2UJk5LGnzuVZtawp8zVHGJTepHBy2NUVSe6XkNQVwru2FZVMwozS7bCVMVtMcsuDovx7DMU6J6AmdwJZkxBoEcjV",
  "key5": "39cM4uWLffCU393h84yrBUkwvEw9o2im4am7PxeQrEh68NgP61p3qENTkSau6puw9BYuY18Ggd4r5MpVwdpzXDf7",
  "key6": "7QSyyaEQnXVtCopZAd6wyDrPtJ1qhZJNAWzmrdEWTPExcsApYZ6eCwnAmiWN6s2qKdiHNzaAXTfayCCs4yNVzjZ",
  "key7": "Uw1ZxAfRde4K6AxY1RqkJyWeGvgSX8AoyiwpKeeUcsBqdmhbzSz4NYe98FdzSGfECx7kGy7ggHkQbq54zjAgWtV",
  "key8": "33eEvwVMQvWKZEoUJMAeNUTTEYX4V7yuv52RHAEmvSk5d8mTN7fdx3qssHewYmFhJ1uzxvDdj7Ld5Bo5oaJJQUua",
  "key9": "3znXrtRGSPWwYwe7tEWR3Kobxsfgt8rUUUDkbF46SwZ7crBuBGctTW43shHWdMwsoDcEDyoTQ6jY22qyjmJ3N7KK",
  "key10": "2cjcYXgYxiekDftyLiJgbayehtiDx3VyxacnK67rAbrQoWoyQkvRLwX8sc4kzkUvD74Y1rpV9eEthT2QGL3HHdAL",
  "key11": "4WAMvTKBWiR2fRLnSpLyPgX5TbpC3gzvgJK7FYJ99RD1JMCdT4hKpdHyYxEemzTcEFh7u4yn1UY9CnU2r66UwQHn",
  "key12": "66c7pV9zX5sCjv7rgHQABmLESrGRELQWoqQ6GFYwufWqyMfwt2mPveW8DJ3nMsEPt6hLN74T6nfkEwifig1PaMfw",
  "key13": "ZSTG8CZakg1JA8UkjqDVuH71FLVSEAW2H8xKLV3q7EpZDcuoze4pyMAFNSctfwHt73xGjrerF1x8csCsVFr1gxr",
  "key14": "P5WxHhtpccJf9jx81swQc5Wn8WrtP2ZbU4b1Ky7yixbjhVaph4CCtzUuXSSM8XfmxuRBi8ucCTVEFbW3x5afeYA",
  "key15": "akc4vP2jwu7yScErkeiHg388LgHUYVCwjZaeytNCJ3hps8CZsPKr1ruac2o7hSkizn8WLY3HRpcZPoZaHFy3YXe",
  "key16": "5NWEQH5cXY9FRzEVcpuTnb6cUZAvXZPPG4pBR35MFJYsFXhnRBMFidPtpBmNSQBKLwZb7HdkWyvEFmyRNBboqYzh",
  "key17": "sSc1dZ73VqTmoyUWRR9db6dXWX2Ze2RNkrSJHk5AwP1QXbrWbiTha2UeDy4AYpiiJEWg8rYpUwgR8vM8U8cGRuA",
  "key18": "4u8JMoi6CZ31Kix5DKJGu3KPJoP3CvC8TDtPx2uvXsSPKjA6SFEp2apumEeV5KkVMqug2xiTr8Cxu2anShCnWxxz",
  "key19": "2BJ5nYehm1NPxU6qWESXuA34YEyWQ78sCDisXAvBjE4aLseYvx4JsrWGj4BTMWvrnC7Pp9JQif5eNZGptPNqxHND",
  "key20": "3feAK6UshLcpj2dvJxw8y58jcohZ1ksgDxAtYzyJi2qDQqiVipZo6hwBi8bX5yZrfZ9yadMknGN5S1wicPQy4Pxo",
  "key21": "TDFxyXCyCxA6VR9uarRmTVGc9aP6dGmC5UAM55TV89393g5BeHHKgjd1uCViz6hJXX6fKaMUFEfP6GexZWTzQKm",
  "key22": "5WtqU9kRy1QRzn5jUV1YWd9zjsR6MDxgv6554LBsqJoEk8zxk48vPZnLFygBes1XB5wRTk6mKbTQ7BcMEESgZjiY",
  "key23": "5XnweJfz8yQ4koSYwgEnJhLQQpNDhniDZmCNtHGnFc9j6uXHL7rH5S1ngVEZARM32oJHz2LBqcT9Mohd4pQRU2Ru",
  "key24": "3VBEZt56HzV7J6fQATxLaETESjXuay4HAuDgCgx3SMtrmRWFngwk19HXi9Gxsu8YeX5ZfYC2Wqh8NDoRCvoGq1VP",
  "key25": "5t7uvK9N23oeEHP8BaE93vpS6KoWsvRoNbiZxfjhXs4KNomVFk3kx1GAudGB28eHPQ2tNczure2u2GYzLdTkKkuy",
  "key26": "L37ZCpMGD2hnnReCVFr5sSvw34v5UUDCwWrxUEt8Q3odnmEm8KhK1g9DGNv8TnZtpqgD2rRUVVkNJmwitQWer8v",
  "key27": "N9PaghdADcYoaHAS1xbFnst9EJ72zFt6azfdrYfZuVXqtbNUwotY45d2p76MsDJ2L61FCVZgCG9CP63SVCQXm4r",
  "key28": "5un2H39DDZE27CA1tDMwS3UpmzynZ23yxiUgg1S7uxbB9e4ezkDjFHjpYfTuTe81r9cfrgQ9oXrgTg5ZXmSnX4dU",
  "key29": "xNzWrpMaMbYgnVKdybiowiXitKt2C2SKqjrQGsuCXz2sA1uS3CH14v4XSrhZDxyWCjNr5xxxSZYhg2ueYMrpT52",
  "key30": "3qpr9anXqc3taUTZMuBoV7nzExccbxB6en7XHYFXLkmuckT6FcJmmmvaj9ugbBhApMr6myzUx9vEE5u7CdFfJMEf",
  "key31": "2DbjmdDZFkBkdWZLWYTmnEpGKSqVUGMN6g6B1czPUor5GHnAztjHdGcBgjgASzGw5mER5TwjDVCV8RKQ41zcKSE8",
  "key32": "2tpmRSPUxuNaxDgC6L2fRHrmAZTZmT39yhPGsbK5h9x5UMYCo9HxNPh6L8mTV8CmQA1xPpBb897HrYbUWniG7Msc",
  "key33": "3jYHmsxFUcfZcEk1evizCqTmKxFuSVGpYXXYSnAyCrQ1uv7Dmdzh1jszvED9TXS3v1XXCjXsVv8rdicQxtmNkyrt",
  "key34": "4LtUj2KSENQeHPmkE6mhcZL2RS4JdurvA7puk9yPAi7LSZXNxiUmeKwb8EdhmNo1pECoa62ZAWHGnY2W3RUkZiz2",
  "key35": "47yBDzFkuQDMvxCW4vQjWgc3aize2ZT9btKc6iXB8GChVuHVf2BW5AMTw5LrhWYtKEeEBUcgXfMzphYsfND6RXP5",
  "key36": "37vYYqMFxbydck76NZ33SBaLG6Lr6Cy3nomu5P5s7WQ6g6PiHNsZ64EG1h2iwK3nVkRuh4SfHNRGV8z5EdE7cwBZ",
  "key37": "5gBE6yxdoPGFA7wf8Cmwf6zTU4iGhoaSm5Bb93d1gbeMiQ6xaKpHaZTNdQW9SheqSs8tuu2GumAqXZfeAxYsuBnT",
  "key38": "4vbNqzhfqVYE9XHtxH9idVBHG87utzkhHU84zfP5zDMK6BvbMRazENErCvNSdCz6HKb9Ju8arN49hunLDA8371J",
  "key39": "3QPcAqDXnPToDtfRmSkJh3isa97jLXr3s3Yykxkbd3YbBLNxFRZyeymGtoCMaZuvyUj5ADxVzomAqe2uJhudSy13",
  "key40": "3C1xCCAM1y34Ce4ujNr6RdsMTWk7kLT9bhJa7M6jRe6G74uA2prGkchMT3kaHREKPkXtpsRrU6Ncm7XBxrBftH8i",
  "key41": "rt8uiwrM2MoRdfErCZ1W9QrtgVfMBFaRWpJRFJJ2SqyduC7zwYyAqY3TvT1mMtXyUdSSFJkNPZpHsaULQgXzmHb",
  "key42": "4ASbnYmtLUdaBeho7qwEZGEWQ9zVyfYqDtVJDVQJm32SGW6UyZscxXBEGqfV8cYBhyA8KXghBTX8jhzYGYfE3Whp",
  "key43": "CtnznnECjGcrxBxfFWH49CXwNaXbkyGS1UPekB5voDmiz6wxTUEFxYwEHWdfeVhYBLSAJmUh95E3WyDNpXDSDF3",
  "key44": "3vEYKzZ2FwBzJ8qcsY1xqLg7txo48pKy9RgNsUsjCUaFZAkZNYuUi43eLHezx5bDEh45MpmMN7HHuPkqeXPKwp4i",
  "key45": "2MWxFj6ZsKgRYLQjiswkYL7wp9mJXSJQWQCdhAnPDRifrshXDMegFZCti96KFWbi41rasLduRnSM74B23chRzZqw",
  "key46": "4RBf9Cq5e3jYTyhdhGxuyL5CN3oSn9WiJ4AhtJ9VxDAT2BhmYwktZLZD7n1SLE6YYrVTZjJofRrwYH3Yek226cNH",
  "key47": "4JXUGMitVeucygJu4p8zb5JcXHVMmXUzTpsPUZUyN2EzYR7EzBMqyBkAvCjaHYbjfQw9cENngXFK3b5NrbmMi1MR",
  "key48": "4DWp424pWYqaVJ4q32MSPztjMPEaUqvHEUG7ZMmBpwSuvs5hCFrDwMTSYw4WgCDbtnGhhhPETtbCUsXubJKhFej9",
  "key49": "5s369WVs8zznKyhRnVEcrf8gz8aq77QbnVbn1isvtXGRUrPhUmb8ZeeHrcAbDraDXj1EtM4dk54MU2yQehwkUGPX"
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
