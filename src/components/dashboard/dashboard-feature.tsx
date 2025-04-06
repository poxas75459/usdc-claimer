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
    "5GrpvcBViuXKMCzLzo1FDnCu7V8ENoLo92w1xmwgQtjCzo5wu3N6Xx3fXfmdmwmDR4ViWounrbyuuE3BS9Ltbf5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4usYLbQVzthpEXz1mkuJHrCNFJK3XtZNZBwjPS1DqeDFt6bJAHysWVitcGBDybFqcRxudfNsjywwCbW5DiePixXT",
  "key1": "4E7YDJubKnjrz8pS1qC6T3f32gxbhnYnBeUYNhn1Eon5gb29AHK34Mbq8ffybqoyndnBwGBZ8VbyHyAJGFU6Pjeo",
  "key2": "RpfvPuTK1hUnV5X9iKXrXU7YyoE5Z1qwVup1rc2PYknMVejiaswTr6QHZpC8TiFjkvRJStb7zfGQg2jdxyUzGoq",
  "key3": "4pkCiAmLZHVKdnxB7j6VDrHjK8V7E7zwQmGcDjHsGg4gAa1qPJhpfeUhkr914ZxovGDweQkhLAHzBqZ3Fpf9zonb",
  "key4": "Y8NVTmkFeoagV4YhaR2wZwXwq7JCejcFHxmqyyAdNQ5nomByr1tGQvVxeFHjNqJpMVHMdLbrYtupCtRCCycrDsN",
  "key5": "4t3oUACy6nnH9h46LsSEnUd4P9mVjd98mJKcH5hKA5VXo5sDjCaNFUngPRyf3reiNvjCw5oFThFQJtMVbSzEXBU9",
  "key6": "T1uXcpAGVJ4JbvE63dJzw29ugC6tdyTu7Foc1EmN3a6UzLUTyjy1q8qz2b6wKFZe3W2UfD6BMGnnZzxAgt16XNg",
  "key7": "3pGUxsBnBT4jd61FfqpjjXhCKWwQtqzhSEp9QQ7FdwpDjyCPy546n9rsuV7sVdWXPar6a6kD5VugZH7zVxAcSLMm",
  "key8": "2867exS3wZcwreE2QWHR5Ax6WwR3sNj73ZW25eZoQmacSB9aqExi1VS9KCkNcjnoFAttRLp3mSwsrFdxYHE4bnTC",
  "key9": "2UhitpLakBtiJDfyp5uYas1kGS1axzqxQ7nL6ziCwWhTyuu5bV6CKbWAsdjijuV74ScJg6vL5gqmuayk1zMje7F3",
  "key10": "51PTEQUEnywEoHZWbAcFdgmdhyUiMC64ibsgFUJg54t7WBHCfm6RrKuB5SDvMN6WGqEbe8D9nSYs688b7JmBxYbe",
  "key11": "3hGAsdjYY5nNfZs1WGW7svtFtoACm4LSz3gsbGsojDbsSfuvUgoEXw3TZGGL4XVpiAEo3d8oJgETL4X3qEo1CJFB",
  "key12": "5M9Exz1az5QYSJ9L66yMBTToEEsfSUS2Pk54mf36zrSWC31QPDEscZpKhWVKBS5Fx224AS2pq6ooqrDNj46TKoE5",
  "key13": "5Bkor1uUPbJrQfA53TN1gga6JSjt1UWs53imEQW6Y93buib8hh9MhJSoAGJFsE7yYihpL4gi7FNorkrBHDaDMAds",
  "key14": "5BSadiPjcmvmWppLsx8Cf1vJmPENYhZqLkYeLXXnC28bVo2KyWzfomp6H5xSbAve77K9wib4VEyAbT9gLKNynjsP",
  "key15": "97o7WHUMhhCwPo896VATVUN5pqkxMhghUjC9TYAja4CCYq66UH7d5drtwYzxxetYo5md4DzhxMuANt9wbTJeeZi",
  "key16": "62trPgi8azBWRu2JM4T6wnkYKCqg4MLvUjjGL18EPrqXN4c58R13yped4F48yu7t4C9SE9XYhwXpfF9pUTKCtRxX",
  "key17": "3eCe5qKeCHa1d4EESzquaPbVApkeJ61BCUXx9zpsxA2z2qB6HnRWAFhMnoNiAo8qh1YvEPvF9nuTwUrGrgQbFJBp",
  "key18": "jPmQFy5NCkhjVY34j64mR4QdAJeVcYTnb7if4df92ACqUb8jzEo61BGCDRjfCT6veHqMJQfByLoWPCVeREuLaWQ",
  "key19": "4YWZDKWsrEEdnuGX833sa4i6Jcis2CktgmpR82wB82S2Rvh9TDKyanu6NT9PdwibBuWZwtavnTxJAFHjVZrwEyJk",
  "key20": "5UuceMVmJsVKBp5R3g1wZE8uV71mxa2NGb6uarW7RUMgnGVchdctKp5EcoL4RtnYShU16eZZdGHsjEwZiGyp2xPr",
  "key21": "2PXPvVQ2jEuuRpkp5x263Rixiqn7hJ5aXJwrjGFNnVnTx4ZrK4otAosETEvtjXjFPgNxyuUxQArLdYCGPG4CfXER",
  "key22": "3xsTyK6i27tFQtsw9QDHtKdoKUcc69nxLMRnzWnXxXYCcfBdyXKRUmYWYMi4CnFFGJVsibUugWSRBCE9pASijxB1",
  "key23": "63nwJu9oh5xbKfr3hwAuYfpC7JSDdUM49Y7siAw9F8eFWsBtdoBtYgx7fFA3Eix8uSSStirGpW8PmFEo5nwYusn3",
  "key24": "2WkjDSM3UxnZ3xNw4g96n3VTEr71iSxz56bw6fobLyWsyRtZJUj1p12VTu4EWfoPuyhJNjD1FQyhCS6cG5awpPFu",
  "key25": "4zo9yBKQLo5QoLpN2XbaZEDe2Z541bhkQy14NNjcxFjjvWj6SyqfaPyU7eJuMFKDSR33FJimuPJEuEubWzjPrhng",
  "key26": "Fgi2TFAU71Xm8XZugfwxs2guX15dRN1K1hR3waMPcPYK2RkxHbAgVUVdxJ7Hi9JbLV6acLxshwrP3xHC6NCTzme",
  "key27": "4jE1fCpyJpBJ3K69fPPQQend8U2v8CZNEGuAdduTBoasKJGhXHnDzvHLUd2NxsrUkpyJBc9BTXZtJvryd9zipwTZ",
  "key28": "5DwLSd5NbtWHtk8mqLDoYwJZFwZWfM6xHJs1qF3JySnsMRvxZuFS2xb5gfVomcpWfBEiiLckkZ6A3tK2xXsdsxuy",
  "key29": "451YZhwUu9Aadk8BHdfptUFBcec81jjW66jaoYtagp391fdP8ZVQ62xHk3npSRfAYw18YkbficjGC3RE4Zoqwk4J",
  "key30": "4Z22iDHCEBaVJzXHg4gPdKfyuQx6rgYsgr16b19thgLEk65D3FFmdQSXMw3mgTd8qr7Hg5nWEXuquXkntugHqCac",
  "key31": "3TzXkJf7T4MVSH36HsRdBmzXyLnrWNzZghv1J5UGA3m1cqwf12QWFjb959b6ppJBAMjKZ1uVbeneSnwPtgANoCSz",
  "key32": "5d8tUJDLtztVes3bLetWX2atJNfgVJYgCdJEy61HwfpD5BiPLdzuGwm7nCd4xuLv4qriiTMsuBoVKWMNzrZDLS4P",
  "key33": "41wkcG5DVmpyBsoxxmg2duKPSZA1HMpNEhtXq8jfDxvDej59e3Xhno5EW4Vmfhqg2zxWXMiH26anF6F89gE7FAi3",
  "key34": "4vTuvpMRwrtWNKBGzD3prSvLz9cTWK4HMMs8CAB1MjPpy19XiBVuuPVPBWa7BwtQvUiL27kHE8dsddSGogSm7uAm",
  "key35": "5jrYustyEds2UK1kyEoK19QNSJ17pC7QjN7wPNDe614CidegpxTEEgbzmjfsQaEuJVGd1mLjP6eD3y23xGRN2qnR",
  "key36": "5oectuFRL5g7SEiL9G1h3hr4naDfoBBTv11EKBbv5UkzYEBeQx9EtxAuaD4mjsP4EUVzP8P27kWzbV7xdNB1DuLT",
  "key37": "4R98uAS1u7uurxDXBF9fhrEBxgEs4A8GYyzqLCbNMa8Ppjk4uQyU6wdpzKfsD48qebvij4ndq4XYoB2y1WtgZEy7",
  "key38": "3T6aCbv2vTts5R4jeB8bJSRpjtwdmTN9tqcSwag3PgyCQafWLtXHZM6hchoj5D6GzbACXsxYU7wxQApc8XvhCy2a",
  "key39": "4bwJRFPSERYEdMpKbNATTJY5hYMiEv4Rp5HvzULTABZtkwKcHidCrs3RcpetfruK9JsoYbzn3qM9ReRqr13zX5aU",
  "key40": "3FduhjKUUZP34EMorTc9WwPrWiWfza28pTe11tYPztPfAy5kEyP9iF9wDCq311brzdtdhv5725DB7h8oGRWqScoT",
  "key41": "61hWDmWTV6uEFjZbNjUyn7Q8WuJ4bsUP3zrzPe9h4xi5akwPSK8kJ76pgTLdmL5UcAX9iSmGJLQ8NggFBScHsiYu"
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
