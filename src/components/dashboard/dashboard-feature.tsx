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
    "65D8EbpPsq4DjFDSNL4fAEDe7NwVqUwq5NGUymKpHC3Ru1Qf869ujeSWi1ZUFbVbjuLMDokxTcdZFmfZwPyNwzdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o7Lxp8Mm3CJP3Cv7tHvtirR6kG5siMLTE9P43rHVYwzmdLAYP1TNDzDxM84ULcrxH94rcYLZL6yQwpfkaWwXFs3",
  "key1": "3GvCFu3tM4ejD4DYFcyWPsS1WXYLqanSesquJy8DZd9F8KRTUoTCSSzox4ogY7uWLQraBAj5DNcDRRrJxDfdCibw",
  "key2": "5NSjkc1E1AqkRDhT13uESBqbtdxo9SdFjbyJ3zUgNHvSdCjS462w4G3r6ezNGiAdzpJbUejjhovbQAQsFDf9Mamz",
  "key3": "4E9NDsrfNLHjxJUbUX1n6peCAo2qtEZcvdff4riqkFWhg9HFyrgmdGxgcz4hYuXH3SpRTUjMyMdTtfWxnbkZb562",
  "key4": "4mAKU951o3swy49rf8z4LuSxuzSeeNoVJgDgFQ5yNCNxkc6pwwEP7nhhiPvF9KTnNJwSTfi7ByxRtRt9VN3sp9P9",
  "key5": "3CqdNa4BS8w1qBEZS5guksUM3SCESppcY4u5qgLqFqtMdkv3WqJxXiPoH7uh78rca7fGtfeEB7Hgo8W29AMGRQic",
  "key6": "5EuDwZxJrY6hh4p8ruRh5R98j6wZYLMPvVrdLgXYXh4QC15A4k5NcD311Ji1PjxjsPUGp65h28oGHm71TqHw9Tzo",
  "key7": "4dna8BxZnQDGiQHF6WQMsXR4gFTGDaepYZNMCapUJCJav2gKHTLYAac1McYF2q6u1o1VWwzf8P1rncDqLT9had3a",
  "key8": "wGaK6Ma1pKNnBQE3jiL1bammw8u1V3z1hvsyvCY8E2kKUbaUrfPfsX16VEqBdtWGsD5q4FP9zAwnqb5GWbSc164",
  "key9": "2VaNiVag5MA1eykAxuqmJ8redy2AyaAz2zQW2G8CSoXRWyZc1WMyhXqoSjVR8UE6XzBaLFvVSVBz3am7in296gRk",
  "key10": "5qXaUqVMgR2reaQaT1ToisqtCxrpr1TsUCMyitStkh7rs63SLjXTyXcfxxCzCaSvSQKvyJQWC5EBRkszXVdSCTMt",
  "key11": "6BeTJd5E9bukjQBDuWNhNKYNdeYJmw6KkcUUWGQzjzGn14JX5WFfypfmicHRKjwwyAuLxWXdrUhj6w4qhUap3ac",
  "key12": "3g1DdmCBFctkswo3cTtZtLHsMRWkxtKK4djmnEJtDWd47JLJ6v4BNVHnFGKPv9t1t1YGgjnbmB433g9JXNgrbanL",
  "key13": "3STRNcxeyw5soYszHC4nNiHgboA75k84nj9zj1Hiek2qdk1Ewfowx6B1Y1d9v293nJwiBXzCgUcRmby42sjp3TnH",
  "key14": "4jARDj1Fm3LtW4su37MSuCpEqa3oqX8xqxACfqxPgSaR4DV9MDHS9Mro1AGhtpWZT7gK5ZzLy9GB8eFkK8xmZMRK",
  "key15": "2fZnnNY57E2esWdGdkATomDCgfeyTJwJHJSxqTev7db5m3ogPDnNFjv1xzqfQk1mrL6FPigArArJbo5G6BN8aNsk",
  "key16": "4DALUQSNzMMJDfZfHdoWAjNzjo9cF5qZ4rqDA5XkKNWov9RvAnass4P8oKrifvPoGnEcY4NVg8Rv8c89hZxxDVfj",
  "key17": "tHrdKt5vqtBFqymTj7xYQocFFM9xQvinSgi1KehwApAyVFYG2PUKu7W9u6tPpqqHdv1bCJzCBUcQhPgs6fVKEKC",
  "key18": "5E211n4WYymisMVDhY8LVxiRpiTr7pGEnL19P9aRiq2ehjzjdEWUoKzHzmGUwKC9VsiZyJ51GzF9jZkfXmcmM7Qc",
  "key19": "5xGmcWjxWoQpkUgNJ7GxoPUdigJiYB4edfFTAkBmisnM4diU9LTaQnL1YnYmqQkWJcHNgjLzucy3P7rpnAj1cpBE",
  "key20": "5Q1RDNpLtqVska5FqtoYdg542dxV5BNR15BEE2HXSqiKt8bN1FmzThijcnqVJxxfuTCY7scRkj9YWbVXeD9AaC3A",
  "key21": "4szyH3riDcXRCLbH939n6WpmT7gePdrjCNDXu9JFKBhDf6MqeuQx3Er9dU7Y3XvAnis8fAS2KjGjZgmdig7cqitV",
  "key22": "5KHBwENbGDm9vh8QaYHF6Kg8eTTuCEKy9qnbAvqgvLvgoUPtWDdatZ53Ex3RS5xD61g4VdCq6Uv4F3G1P23SvgbS",
  "key23": "2GCwtDFq7PREaAvmkHtC6rZjBPKxxrhyBypJmcFk4gutCmipBFQ6TwMjNKRpsMcp88UQTF96HAZJXo2L72L6hk9m",
  "key24": "5UJpk2ZyQBXU6WUn3HM6wdrnwaoZfm7kwHs4d66mC252wm6As15YVWXbAVKKS9SryK5BPmKux2toKurXcALrrojg",
  "key25": "5kE3v2NQta4wj7E3T31wHBD5yerfAMxEhXtaiEPxjRKtGqwzPFjmvR4c4NmH3YQVSB3sN9hdEMuvc1sMF5ncKRcU",
  "key26": "5KNEGDtkfGV1Hg6qkVSktXcdAzgbnrcYQz2Wuzk1LGT5s1FtoKk8L4NViHE7pkD7rjGKRzti7yKjs6YEkmJpMjo4",
  "key27": "2j4E1Wknc2wEMjB8y67fgDY3Z4w1NqSMwbpJ1pcs2epcDUS7XA71gEgbpseKhwg2axSmMGTNPfUdXA4EUvMH6wG1",
  "key28": "5vjxHsiFSRGuhdsnko5qfiYW3wqv3d6pWfbyGU7j1biZdD3CW2Lr2roJvRKJZkZqnTRZpu7YhLJBzwrBHhAUMUFu",
  "key29": "16ySbJCGXTL1nYqsxFretaozVFosqPXxcJhCEDaRrocszy3vjrSNzYmyHcR1YwNhxDQYc9bnj1Dfu1V83LmNGe7",
  "key30": "37YGs3ah2Cx7avzPfNxsDyVf2jZgwkXksgqr2WHG4kPEAzGQEzqBBm9ErqGVCgqkegasVN8m9Ahf1BGk4VgxTzik",
  "key31": "57LwYrbLeuiPix8L7aNL4gqtyxyEW2b7HEZj3FpV97hmckfxEguaopGBYcH8sNKyvAi7Dr7zZJhPoDXE4Dh6qWNB",
  "key32": "3qCu6Hj8w7mti4gTN8PH2Pb7kDf8g1Y3QkDM81FcXVwJKnLTd1GigCr5hNZPa8sEg9qBvYSEPAiS76UXJkz4oWFJ",
  "key33": "5wEkPqfX89wp22KSpfvYR9eiJaPJjcyXx52zy1SeuCpACfifhfXiAqtXTWEduVX6mZSSV1iygL6tW1zD4k9jCW1F",
  "key34": "5qPd11VcrWqpWwAEXFxWGoKtQ1ebvH26k2d8kBabspmMGrVtDpeGv3HMKzynyvYTzDE7Ye5dhWXknx4mDoXqV2je",
  "key35": "3NL16n2AHdZ7fvSZLL5EJRkYMDprpqnJGMTL3r77bKnYhWaVqVjhm93p1kSHtgpSMaiDFbpgjTMbAdipueH9Z2cR",
  "key36": "56vCHkhtmQB1JriLRRbqXeYBkAkswiJk7UMqPo3XLNd8eWE16Q8UJXiHfMEBi95ykeeZjXTAqT4ewisMeykuytun",
  "key37": "4cogdSUaHC7y7tPEzP8Y9PMitXFT6tURJjP7LUhkc1mtxzmdgAubfjuG8PZLa1HrXgWFLPRXxxqqJZWKFUqBTJ8j",
  "key38": "4fWLJ2fHWeL8Re6EAivuE7s4dnYhkMxfm6VAL3xVaWyTgbJfdu7xt1KGhdSCixQcxUZ6BQ3KqFxUfPhFi5K9xYfk"
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
