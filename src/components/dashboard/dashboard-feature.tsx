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
    "4d5mafHPHobfLaWyyQLdT1FpMVABddjg58V6Zfu1BzdEoVUcrKQPi43amu1FTnSkcaWhPmBbnTGPfcvhbTBXYA1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57pdVFbrRhzHkTpVTJ7pGqRw1FeAsRERcCKBunT8GJG1xydGDbKaE52CyMWHY4KpqftPjdHVepcGtrHUTMzFgeZF",
  "key1": "3Z9GF4ih6Cgv4H51nyMLZjbbi32XLA4f6NgNUDK2jmAve6KUgXDv12CZ38zz8pumrSpfQ7a5BSmjQ4mwfuCkKi25",
  "key2": "4k1zaxgTQQrKTruR3wfRNcXCrRaVwuapkcktcxNHvz46dTBjoNmhaNQ1RbDbaR6mrA2iJqMF4KAWLcZV2MnaXgjn",
  "key3": "3A3JcLysfewpwpHqKKfug1JXserf1nLccVJLN4UJemd6AomCc4sG4ZiQQEzwHbuSRNri93Jt4h1rR1kC8Qj4bqrr",
  "key4": "2zVTrjVgyBU6P7oFaFpZ7jXUb8yiQWiYtEjx2BANmHPSRe8NU9YLQYfrHFuTJDrWTKqbufcd9CUN1B3cvU5doyP1",
  "key5": "eucKbZY6ngibZ3Luf78KDZKK8M9UJQWWncqdztRegAPZv5o98gVTdof41uEmiasftBNSkdH8aWjsXvFbimYbmwH",
  "key6": "9HNqW2d4oqCHvKp7F1Xa6sRDwv1kzBFQ3uZVD9JDSm3iMscXYCx6PKXpq4BxWJeqWi8YCbagnj6F4ADmnZ8Hfz5",
  "key7": "4TxcnBjQBHsoDdvZAuYrBkgMkhPirCdNDe1CJv1zuT8UierhnTexcrU8grjgSQihwh4zXM4tzDZNWYvd1ePCKu2V",
  "key8": "4w8DmEFXfSmFTjHuM2mDuEsZ7LUFdsC6szfkE9TxFLh3RnwgAWBQx6Y2obcBrfZanQm2uh2nTHshjsM55qazVTdU",
  "key9": "38VbtrJuDPuPy2g5iqTJE2MgBXMtTdLecchqt92AA5nTGQzW3a31yqSSNfJB1jFCACQfpvrG8GBZ26BwobJQwWCW",
  "key10": "2zEzSzCf5pq1kWB8Yend9X5WQn4concB1CSfzoQPnbqwJKYMAaETD2H17C8mW5VpxgR7JfNctaZDAFTP2SJZg9vn",
  "key11": "3TUE5bySxMfhtkG77oiwVprbffG55Zh6i3QxNusfs2DxANvygskAF14x5qyNwnT3e9oMx87jJvcK1vHUGddC8jCf",
  "key12": "4XUAovMAeVKEFkuyWziuzHj5GLwrjGu4EFyAQiXVPFmjKKk4NbkX8mUuBLw9Lec9QeSH7uhSurg1a27g8YAT9JTB",
  "key13": "5q3seqErgNvVWhXmUkSzXD6zQ26P3TYtgV2YM4g92zziFxf2aJcS62uzwJsqvwznxzJ8LQp7Rago9FwCSCJvkJfp",
  "key14": "5t7RUXwXxw1vissgXTxuo9B5j91p6BNic5oqUuPLviV5MhGCqo32d6gCCeZWUJu1eKPQwjcoZbYG275NXeMniURs",
  "key15": "5MUZereyoMPBFbqSqgG1BRGuFwt6tYCRZFPk6iZR891Nb2vhfbXUVHhNVKwXP3fc1JEDNcn8n1WUqANGH1NSb388",
  "key16": "5ouxEBHUnYZRuX9XExU1kMxYH2rUB9sjhphjEXsnpM15QoHU25bPfJ5PNFWXkbpa1VNkA8WrF22aMt4t1X7L5bny",
  "key17": "2GzJHr1mYbFB1bsiXPvANmhDDuFGwaiqzsbWPisrca2zapg5jGnAaKooHrjP9RuREzNfEPstpqns1JyucACm3Dub",
  "key18": "4vo7YYTwyLDxdGezn5bnbo3FHo45KLpiXbD9No8aNpaaejD415P8KfiND16vawg1CcfhrtQHc3GWujHRA2qW7roR",
  "key19": "3TnAgPKJRbrtQuAWiPkmdr6nDH3Vd3iKJ26itZuXzZnqyMnm1oQ79zNF82Hao32iEqduMEDsoArdQk1TRDXGecZa",
  "key20": "sccMQyu68HDFHJZdkUZwcoqt1SGHJFmSVBFPhFX2CCkcFk3Bu13W1xcZk3cLdJRiCwbUVAW1dwDL2oMcUcATJ6j",
  "key21": "2uscZ675VLDezb8B3YBCjz43zwe65nd7Nm4uFXAGRHZR12R5zk1u3wmCM3yw9wB2bjiuP752sqdWRRgFmE9wiAa1",
  "key22": "5NhLxynrJYSNDbhmcFy4V1i4uqebvFUEsihDNC3HUV5mstTx6nPKZGRd3BxShb8eAmMVzHSpD49X6DXEKJwXLG52",
  "key23": "5bJVPmnaFP7Y93UjkrvnhZSZ9iq5nhLHRzWU1yXdck5jPATcPVbeaBj4aJ89SRb5x57C6FjDz5qbAiEuptEEKUAy",
  "key24": "65ZCXUAZDAfZuSQX6CuhUxd6NiBmWu6siDdoXBZ7Hw4eBGryBqSPboGn3nJjXqnSREViz8zZhwJNbF4Hs4P6EVgP",
  "key25": "3hdPTSC5JSyYiZf6wHJqdDLEnKo1Pu2d63n5aCJmLvpghUKWLeLsXYgVShAcrYvMCQ4K1MrAbi3QwVBK5UA7nn1g",
  "key26": "4HVJ8Cx8TBbRpV2x8bLq6HMr1FETgMFT2cW1owc5hynqNLy5fN8a4ZeGRrF7KDEKDTeiq69a3SAQErRRuVRkpS67",
  "key27": "3UfqEceDTGxaCmwNr6nnj2ahGmq7XmXuTLZcnUpWnXVAN1Z59s7ZgFv9GFF1nNKtvaR2TZhU8N3K8mztTrDiRxvj",
  "key28": "GYKHHriYEtyUxKrYaBhRYAwsk4y7AAKVMHGPzGuWJDoMCZPX8uxhd6yAXS6txocPcB4HCTqvqxJuctzhP3A3iSG",
  "key29": "3oVck1ysijo4hh5eqbAh7oKA2CFHtVmThDYLoYebn66Vsza8GEhE2PTrjJfCFwZggPL8V31Wtd4WEdDYBMWXtJDU",
  "key30": "2nvowjnBSStj94Lo74XJq4yWCYjGijrqgv4kG2eEVPe1Lukuw81Bonnd8azyrTQyQDNeYPy6X8yU5LKrutvTKKcQ",
  "key31": "2sxjWvSsmTm9LDt5yZn4sd4xMTRAkTiwWfQa5aHbMtqv3oGVqRGyzp74UCR2qn5tiKQ7kvese4xn9pAvh4Qub3dc",
  "key32": "5ER9p1UbPDjrHazXifnuwnpNNLy1qSRPn6YhjisnyyKXD9X9fV2CEFXCagZaegnXHvjACYVjEWgKVjt5TbJjK8hH",
  "key33": "4DmFu5FUCoZk6WZzq9gQCXALZsV7dvHuGFQnEHexAWmTuQhZKUoXn5VpFN3Xsy4wBG5XXHnU5faPxqgKYitkRN9G",
  "key34": "vvTux4JKNP9o6YrUdn2r7CdkQYdFaKB2Fyvq86YPSqUZKgSggUtqEg3FEocKH5iSvzLGFjMN6XcC12UMEyawmAx",
  "key35": "3ZsAcpU2AWykpw1Vu25hUGpDcHZ5kuAhepyG6vMHqhWryZFXVni9AVxmAv5twjUbUrcXN8wHfu2Ux21a1FseXJET",
  "key36": "3H55e6yMqsRFXD7Jx1oYrLMQRgfoJPCUjeGG46Sp6SAqqSNUX7kYisEbG4uiSTRLDuHr4cQWiJQz33q984ZJydSJ"
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
