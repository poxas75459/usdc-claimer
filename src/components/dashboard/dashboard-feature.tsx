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
    "2SaN5WvCkJuni7D8SbH91VBTu5Btef1T4566idN7fR4TtXeUiNCQK6Wa9EjjjG9nU7NHnQzrdaAHmNm1KEWCcNZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yH8Ygvk89vbYVWmRsELLaXWPxhbwX6VxqmMuPKeTh9gLdTMx4U3rwFCgzhuLA57sF5JiDvR3gxqAbvTVrs14s1D",
  "key1": "4momzpkWA4jRa9AwD6wyTiGDMVj7YLungvN4usNSb4REQikFGLKpBHeBdFcfugTKDXdtYsAmk7mWPuACg4jGSHgE",
  "key2": "52TwqE7pip1RQVaxJPvayPqcgNbeRvEJkeqxbLGciigquMuSPPr31KBHoUuK112MYaUh81uXNSRicKbp9MomrNX2",
  "key3": "3dtcA1TgbuexdazWUDuGkkMjZZA6kauhX8HF5GQbP87A8Svqbko4SaMSstNSHx5TnHE3ywNPicDDbLmHafghyBFf",
  "key4": "5BerXtT24BcTXh6Rm2AedmVpFgKU1SL9PoRGJeWcF9SYCjgUZMCA6tNCScj2gqHUzxLFJVSy7bo5eKdEy15pHMfJ",
  "key5": "H387UafgXdtn2ASZUvu625VzHPTJ9NzTsZTuqpGgYCFxpr7wFEAhMnZLjt2G2DHfraoWDZg9WRrZ5opqzPGzNCS",
  "key6": "2bcrbiREf7mf9bgdVfUMqKJGFzi4bqqpTnSFzcRGDzyVKDpEqZGkeTLEC4KNcrw6YPJDPNzD3mWJP4tJNy62H75u",
  "key7": "4wKu4NBmn54M9HTqZukdVyUo7rrxXhPW83N6PT664zGgzx6fYgmT9MhvR2QA3h4jfD19NJk7qj8jkFGNgnr9DNor",
  "key8": "5FsX6bn8PMd8EGQp6Xom5oFZXkmaDia8Acixt18YDC72jqJWSVgmu2gvu4RvjFEQvPTeF2YzyTuEKGmyHY4eQXMw",
  "key9": "4CwM3HW8aFiBDSdED1Ua5qioDG6RkFMPVxWVvpaGaxFtQDYbaPYXRzTDtndqxuhMNJy5pY2GfWvXQsQiyTiHL36b",
  "key10": "aPVyYT37hVqpxoug9LBDigFdsJimrV1PdhTkE8L98713TA3QwM3dojxygf51PzSeADFaPXDSb3jhgkLegNzf5b3",
  "key11": "2Kv8359Pg3EaZGC6D5iVBmk2tjxYtyGPHwSFzWJJjRJmgqzoZUpjRpyV1QTgiektWpPmeWeg4JzkSvtHpgtfbdwY",
  "key12": "5QC9t4Cu5ukHRzNw84jaeCccGsHwm6oTGorT2Exy767fDMiQ58GHPjwFdrP9zdgYYcPW8uBukdNXrXdPZDdpUtW5",
  "key13": "43TDKKf4gwBVqEmNg37aPKmopNUjUto62yrtp1cj6NhbR22AdVJJZ8bYeM7NgcHdiRgmtXxFL9fpUUKC5dpZuMBC",
  "key14": "27K6qVZkZ4azdijmAgEd18UvZVhHLxPtHB38vcLQqkGX4AhzMR8H7AfzACCxjhHKoS1xnvdPmAjNpJZTgJHkJCKp",
  "key15": "4mgZ6EdwvQBQVCTLaQhb64fhCZq3jiunmddVvhKciUcZWBcZeiDEBEfSc6W4tFUJ7AnLecTNoqeFUp9iNKToPjr8",
  "key16": "oFvH6Z6VghMURhTw9aygiK1AQCKMNwB2ZianRgHP7qCQ7Q9a4FFQ3mds9Qqs5YXAqP3hDciYYwV3V9588xQfc57",
  "key17": "5EoawPZDbDxsQug8e51tvC3hJXgR5CoBNwGisnYHTz6ZR3MRjJoZ5u95QSC3FLK4nT4jXVtHMUxWENtLfGNG4iZP",
  "key18": "24pEaXCgKJ2pozxGxjy88zjy5LBdkon3dH8muN8fyKU1Pkpmd8Aq1CW58kTjB8rCTTwwcEuphku8JD4x9HbQBX55",
  "key19": "cxa8HLREZSeV8yEsYDJtrdYDF7nkkvoWuctbFt1VV5zHjir5tNi9krtYyi8ypv8zjz5MJPjqJuubk4DH7DGjTRr",
  "key20": "5heuVdfBupmW5JrxCVSUVmU6nbb1QeiybHv66EiseAEpVctxi8sj6oLe4nyC8g38JMqE4ivAZvSF17sgZmbSpbtb",
  "key21": "3HLGnNSrJUf2NacW5mrmdHYJkXt9CU4jhusoRdnHre9qzvbTambPufomKy4LsuVJc4YiAgqbbwo4c2rpy4eZJsyN",
  "key22": "3Ec8wD8TSvGke5phkZb4FeorGNGE1eV7hYJosLmEuUJ6pVV6cSWDP21MFhfACD6gCsCcJ6MpXfaxdJN9dKQujwq9",
  "key23": "32f5wyXaL9TtqvyKwYKx1VaYUtnNcRhQwsszMTfQNYsTavUjgFSwwUoWd82VeW1iPJtWuXEBX7LBxJACT1y1RhDp",
  "key24": "3uxJcW5agAeeScumugbsit2kD9MHFm6kVvDAxkNtNdNJYLcVWS7xHGY6wLCHkcRrA1za9k2zGknZyTbXYNeTLbeD",
  "key25": "JzLjQwfqs8grCqUC8z33Utt48KMEtadEjrYWQvyYqnMbFfTZD27GssbM7a9ACj9CMrF9p7BKDNrb4EdZvEgjQht",
  "key26": "2mgaBNDbVfgTz9tBenTTVHwCNJeNhvzkJpsana8YoYpDZWi7741jB9yqNKqrGM8CM46yNa91Ejxjr49ZYjp8TU1f",
  "key27": "39dmbieiYmfgNkjYR7Dms3WGBn1p5kVCx57FXFc7aTg3Tby4rjZshkNzduwmoBPCafXDZZvqzqwJzCgr9UnDLg2t",
  "key28": "3E9fjpctDYELjSreHhEvNLJcFtSEirkzngKmPh6uFvqLEHBFE7q7x6P7ejpViD8HHkc9unXMWa8rDehFAA6tKVTs",
  "key29": "63dvazHs7xSq2h4ZBsyxp1JDbJeFhZofiSPNSnDsF8hx9e4LjAKnsx5bzvZmJxaFp336HiV7844p3DR2MXeBDTpM",
  "key30": "2FAkprLmM3CjiWHQH7jTexqzXyhZGZxdCXV93J8YvWRqW2EFKh5ePay6cezb2Ves1EN2m6oas2dmgTJuMdtRjwQb",
  "key31": "5AN4GBWFebjR65TXURhjPic9QS8xMPi8kKvHbbFAN8vsV726tARqQPgcJVfUCBqeUSFQGW7RTzNGmqbWWnsejq98",
  "key32": "3KFwrxsE5Jg2Ji4SmZ2m46gcyF44AX247EVpfNJ9bXcm96YA22ier31SaHdCLCaEvWx4tqCSK4Uz3aLcbojHmhTp",
  "key33": "4Ty56BxR9fgVFxkqH4ArgoW56KGjoaf4CQXdoAqtCJZvHsXDoKLSPneycmRzbtWJpB9YCVYyxx6x2xeRyNVdLEFu",
  "key34": "5eEFCUK6WNZnMPtcmfRj7CfVSCbSVFxPAnbSRi5hPwsaWXkfR4FEEZ1A7AH7YKoPxd16bYeWA9ia9ytBxxGgeagn",
  "key35": "2ykT9GY5QcVb9BnRF61JQ3KPdYtQexsdSNLfobsY4BJMLT51Q4P9HGECdqji3ezAZhhgtPfYq9aqUL5mqJmJW6qH",
  "key36": "4eCUwkfSq473nAT1FccD9gfqYUM9TvptXfNcubxBdk3szrBbFTmdX61D2n491FsekKXJSjXDdvMySLXQX9jEXCSb",
  "key37": "4D7SruCcNqceefbQEJ8AknW64N2sA42JgwYnpDEMkj2Hxp3n55dcZn1LBUBFSj1NmSW9w45wWMpAzrv1M95W3YhR",
  "key38": "3ZQXxqMLH9X7StrQ41NoxYbZCmdRffckeLg5U3shvbe9RkYhz9Gtzi5BsUn7uNjmnBg9HSPFmsVdrhG76yYtEQWK",
  "key39": "5Fa4QfpQWyYrtDVWqnKh5ctCT6B5SyP7CSQDBr3PasdYmkjBQaQcyfLiJEHtoSJhTEtb9x9MA7e7Jsm2QKxXVbmm",
  "key40": "4dqtNDVkFZ2erGPxVPUB9wiF6RWMDSj3YHGpBakroDc12UckPFbcM67f5Y3VTKvVQPvWjQfcZFSzG2UqEf11fgam",
  "key41": "3tFVZrY936vocNT96yEnvHDsb2VbmDqX9n4Y18Q4YrEY8hs95o8LzqfSCjiZf3xFYn3emvyqBFUCRXMhfKf9mf63"
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
