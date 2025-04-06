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
    "3MpiKuab6FzJGe3qmcEgNP3GzaxN4uRXUG3UpSRKY2Qu99KFc17haYx4pKQFE5L7korLGknZVnPuKKFCvPJLMEar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1qgfRrYBHyjmCNGY9f4jHr3nFM2Fwpvc4EKhbCZq97CuoBMdbTpUMEdAq1GZuiCgWJKygESy9YC8NgAaGERNWaM",
  "key1": "4toyfVUaFVLwpmmEsfUtN1w2VLzenbp7hVcbYskyWa2XRrH2xEuW9R3KxJHFj8ufgr13qqzxareFJi7nJkZXC7rM",
  "key2": "2Y23ECkJSknbuZdmL69EhvwqjStJYeS6TkUwdWb4QYGczqSkimj4S7YrM9L2DmrGXGsebQBCPPuqC8sVgndcnMko",
  "key3": "5NDcXhB364W5iF4JohnHVgvRPDm3v4NQB9YHgc678We5DyZL91izVNzYrHUA5HKfL1eB6sbhsD6pNdzdyzpnvXhe",
  "key4": "2tQSSazZkaffewbJgam6nHPn136aY3AfeFNuw5sN5GvMJx62wEoSgNaJMmxcU4KbdABJigGvGtjhTuH4tLA7QSzx",
  "key5": "AsZQqBgm23EveFCzxJrPdjGQWwUquH7CtiSiLvE3CNQPZ7jTXvUiaJAymcu9ZoV2mC42hAvrfaeDuWbs4j7Ksrw",
  "key6": "4uQVP8yqnJJJ1E3jXL5YRS9P3JdMCAjKt68eGg9EKz2XGGgRzCQ8YQNzmr4rJEig7UxDJ53MkPqdBG1tQU2PC5rq",
  "key7": "2ThKaaj4f6EU3k9EHCYWrKCSAmQzzoAN4V5Mo29pwyjN1FcVeUWbNHR2ioidoac8JpycyTjxHuqjEE8AFwdRp5yw",
  "key8": "2p8MgWs5tBU5KZbAMWbCvMHrdx9QPY2btiiCGWWCCDMRFPCJr3XwiazskqjEiEK6Erd2bNvGqhLDVKrZT9bhg273",
  "key9": "1arvoSunFRhvq3CsXTW3jGEyFuChhNMK3NzZeBg4oEs3uo9Cqgw2C1pNu3ZtuJYiEf44GnFn6rrMBZSHRHRdxUb",
  "key10": "5vb7w32EVyBQw8yJpAT1qXEcyqBLsiGiDjjjC5UdDQNZBSGCXxYiYMvzkTQxTnMhCLwiidPWuwrHaYtARPHhQjbq",
  "key11": "xrM87SPHhEZVCZ4k8kSpK6r1ghfn3seSJXkUqpWJmhHf6gqnQv99Wts7HCGRJsrJzqK2oCtspzsdxb2UxiLhphz",
  "key12": "2XHy2S3YczUGc5H21LF9CmVwCnWHYxVpwfhWmoLZi81PyQ9HNu1B5kHoEt6Dcpwd97nu28Zxtqin74cNfH1chGRu",
  "key13": "4JAtJKK4C5pzSK2DdhqhDpGYxhkxiV8isPyV5sguyp3LXKnHaLPsZaChjS6cE31ricoNj21hDk2Xu28E5J5d5vtE",
  "key14": "RoCq7xcJVBZSv44zB1fhkZpcFQEB6LSDLabsBTX81Sta2SgE9puYWFizatW6VezX9Wc2Szfqd9Grbod5SdRzzbv",
  "key15": "2kHMNnfj4PMJ11EDZqMoznaLrTPAyd1cnq2KcWeooVtCqyU6hRjEkzpK6P3TfLhmGm9WseZeuWQWsfh3cDNZYYRC",
  "key16": "2kPZtnCoLZoagHxftEdjzyHW1yR2EvNTY7FiAsNuQEDUAQrXQmGjyUHh1K7gMMY1bd8eZns46FgzPxHmCoTbUaTc",
  "key17": "T4S7ZdBrhj1GXuYEcdsVNvbWztrL8c3asS8Rtq4ueWmhnb7vSbsU4DBwuj43ZYvu9ffHZdPbLrb9ZpuRVTAaXsB",
  "key18": "3t67ACuU2jhh3bgPbTtBaRFH2f5TNyYpfTykRYkGCkGPrTBpvYuSWxkdVB69mzk1pxDZ9enyn6FP8YwZT8FsyeGz",
  "key19": "3ZbHhHG9EdbDyFjBTaurCqgCu5nSfyoQWTvvTiRuruYKA7jHeNwpEcueJw3nnydaRBVqHAAeVEWmmb7u3icseYRp",
  "key20": "4RcgdGUvuAPJz9UPxmi4gj4GFJAWUuCwF4jTYQMA6C1pdgkqy3DziAKNBtp2oXoEdVwYDiKN61ucm3SYcsTwgh3c",
  "key21": "3kh87Upnb8kZ6CFBnVH4SonNeGWsvqpQr47PhFv2DS2hgucbSaKDwQzkUsj8U8QMKMNCXiaGD7DHq6QAcwUGuW7d",
  "key22": "44vyNLsuynnUHozrFQBQE2fXa2h6wmXyEbfYSMVRjBMTfBLDnJYXRngX8LBQk4FbicvvEfijDDhy8oodLxh98f7f",
  "key23": "4rVZfFekZz2QfA3U6vGsb4rfGW1Gb7HuzzQhCUbWn5m4zX3GPx72urBxRNP6ySV7u3GRFd1LMNjAKsTTFHhQU2fr",
  "key24": "2gZJZoos49qWjZnNgnQKpFTyUbupFG4y2ERmekCeXBnrDJcYZBhvVapwAYzDezEXSujddXyDtrJLgDbSegY2ekmW",
  "key25": "4mgMMiMi4LkNy64MCpQecPUBCt7LPMVHQBjoV6TBmaN8sVJ6XUccDmiw5iZ7yQp2Q9TwGvBjcTEwaHPxc9uG2Rzz",
  "key26": "2wXZwQSC6MfYZCWyJGtXB9T25ARffLp7J62ebphZvUag4dyZV6orTSet6WnTgbGpofc39dpCDkMG3cyQvS3a8AVc",
  "key27": "46h5jj5RGM1K3C1s6TNvKMucqep71M8jp5Bo7ERSZW111qm2hZxXkRaHFbTxyJG2TuAfXS6fpmVeUHNuez5MRsoN",
  "key28": "64Z5T2YkbQWbJJowh5SFyj2AUXU8znkfrYCttHhi8NMr7t4qrcoWwFLsWHQGz7e1pwRfPqweqPbULHseizdvA8CA",
  "key29": "2A9cTB3eEnwrYkexpzCceepiLt97AJQRZWVgqa2bMn8V3TeWTF19mSKiDNbwr8QWJpqPmxc94SiyyFpP7tY9kK5c",
  "key30": "4KMCDCpEyM1Mv83AevRCLYfp9aRdMp7XGthgwY6spLBp3hDhbGnfkT7tg3NDcfgDdj97KgGVbpZWa43YK7dSBbG2",
  "key31": "5MmcZpacFpoRJTtU9CvP3USw1sXfQ5hFg8cYhGM7gcgFY8f4TBWhz6rv2YYDgE5PfL3BDHzeE9J1b5hEViQYutYx",
  "key32": "2htsaf6UHsPavgLtiQy1HSxiMCtSwpVuECwH2Ld4ULxXScywjsUd276BicTF9W8VaU8Hhwuv1uyRE1LoFH4yA9KZ",
  "key33": "3Db45GNhwXHyPiwQGqHqko59MN1Ej5ATsbkMGVoNrTQDTdsQssCspHZHMySWDeEsAiKqwnJUXjxoz3h28etW4W4k",
  "key34": "22r7SxcNE59MERdPeCXPAmH5W8bVWPqoHdkURKBKDxS6PH18jF48sn8jcEqfKyCxwRvijFWxK9SNfMMMinBNmXfx",
  "key35": "45qR1C98MWtkVhpBKDHPPXibns2vTAp3CD5Wvpo8jSojecwmsa7y18XPEt13ozgBNy1xxDcg4DUWkgrmEHwHgjKD",
  "key36": "4k7bvZkuzhnhMBFqQifBmMrZp1MQpHCNBu2aoH5cEpQxprZpYiFdtk59BXdHFFUhs8dxWSRrycTvqdZakHiEnMGj",
  "key37": "4KTCLEwqLu77Dnot4bxjjQP5ScXkseU8j1LZ4CBCQPtzN5mznm5kNHRHqSbhmkCvmZLe771n4oVvYiUt2EmW1TRy",
  "key38": "52ssvXtj1chPQ6UCzKgLxHkNmTyVDxZ4bEdPaqBMdTMoCuDs6m1diWgFCuAwe9okMocEQfEjc7Ezvkfuq1gvdGSP",
  "key39": "4tDcFLhXYFQ6tBHbqVBSkpAG7gXDtVo4KepsgAkfnYY5gWgBmix7mF3YREj7xtJmoNhzGaYh1Zkj2bxEMnn8DSbW",
  "key40": "5dW9b6RWoCUfMV1QoNueHj4p5NzCu6zFtW6dfJ2Vu3K5jPVhrpi3sbZFsNx6V5JMu5uj2CzgFu2mdaavwGSaUuow",
  "key41": "3K94qoW8SBZHGEhxRYpjeA7azNM6bhA5hLVQTg9qTJCnVowDPBuexoRRoTjpgecNMcqANu4B5F26VyfNGcV1fRkd",
  "key42": "2bWRPDZgQ3TB26xYUftuJWc8BCnVwtCrUPDstZ37ffqyLCyaffE2nDNWKzPgMGGW7QKTgWrcxiEn74ViEWVvbauw",
  "key43": "3JbpcJi4mNGRziHWfwXd8ewiSSPWqPJMB8iURQ4vUp7UMXhAyYpu6EveFJhD4bHNTrxycfn3tEJS6XvPCwvtD7nM",
  "key44": "xJjt5iesyFZHsJTA9GEzQvFPzy45aNCx9VBBR9KtitQ74KoB4uPryBwUzjroHutUrDScouhzPXzJfBPjP8vWK2X",
  "key45": "C8RzfxhrJ9Shf1evDMJQhuW643GNFp41ixgYNsQwtyvsvrrzmexm5MvvGVieMN4HHps262z8ouwkrAZZ3zRGo93"
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
