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
    "4vQGLMGBufMcJgorJhx7TUp8BKkrs3cSi7u9i8pxexGwAVhfnAzWupCyLaNVYUWuYYy4iuEjcRMzfDDgcof17vK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a3XM4Y1zEjp1EFAmk4hmBaHzcoxJEWBdkerqC2hdcsdWaeUuifbrC2DcvZZ2WonSMrCnqXJchhxUxzzm1K99szq",
  "key1": "v44tJKCHKRGhMBn7Bi6xx2urHg2QpSLDZnQNiunATM4pTJi8tefK4Aui2X5nNygwFchnhADUU2PWkE4TKKD4SpL",
  "key2": "4N5YkKPnB4BcX9MRm1Hw6QpESXgscrQfmeGcLr4FWXKLJFNALXWJr8BXogNtnKgWriwxxyNt1NePp4oRq2Yw8udW",
  "key3": "21hiZ1QrAEKyJTav7wApVJf9DKvikWpa4UxL5jQT8gPp6ZJ4DVT21wGcnnKmgQXgPyMMBQ6dQtSdhMWzE6f9Qwya",
  "key4": "5uvjGSNjTJSdtK6s3cd2P71Jh97EnGXRvevm5dpc4RjREc8mVBPRADDm51ik7M77cyoR3x36f1UhmwkitDwtdSLj",
  "key5": "2fLAoFL3W92xkSc3NnQQTsafUbp2WmNbJfU8zJfw4XdhXv4d6HzvMmL2BdLjeD2YayipfncBRJaQZckwynrqkvK7",
  "key6": "33Q7sH2b54R2J54a8Q7y85QAgpMDkN6WPkDJJWzWTkdmMNnPPyJJXFhAvPyLfWPdbqkN2cYsBUfdDmPaEzmH92yD",
  "key7": "pco2XYajUDqu9VkTcvbukdwyDnAHKRDMUM72r2L63ppJXgjFJyuXKmq45j4zmByUPgrHVmnQcPDFNsB6LrtkVrs",
  "key8": "4bjMNcjTduWatfkixY5J8FMP8KaiyGDpFWsTJkcjV136BRUd4UNkdn1mLo4VzmwwUwQWWi4GTzJ94hTbffWQHtJZ",
  "key9": "29aXYA5ee7rvLTPeKmr1XyXTeD2KU4LWZawBxcZY64ssZs8QjQhcCnMXXSTyi31QyN5vSTDuHcKqKHKqFxvH4ZXk",
  "key10": "3gz74oxGqtQFVHwe6bvLFFUoa1ow9hYdodW7ZBY7bEiyE24CDwmNwXwKnRShFubeS4fduHtMphY8bgxpSJLjKCbQ",
  "key11": "4TQzHhCWAe8tCKu8qVHum72JkHME2yLr6Y3kQ2mHztToaqfmxgACKF7RY9pjBTir7KJc4yN5VD76DxBvZMcZqQZx",
  "key12": "3Xon4gNR9GDPzK9H2Djg6kRTwWw17jVxmy4nfesg9dPfLdcCF6ss2aym7WqvknWM1ZTsGVQAiAhP6XoG5HYuGNb4",
  "key13": "2jG8UuCvFq2Bc4ZDeu1GmQpG2C7FCNnzVQ5Ytc67rrTrGC4JD1hoBskLobUu2H9wFiieWzQfgWuaZYnfFxVNhvb5",
  "key14": "67LtQ7i2DbEWcASnkgXy5Zb59w5hWSye9zfX785rSSSWMSbww2Ds6mcUqLif5AmdFaoZKRohwBq5S4P9YHg8ZeZ1",
  "key15": "33CCaCreMXYqesj2dP7UUzfqa3KDW14hJggdgga5PMc2z6qDpsdWupMhZWCwoyG2bCEDwsjatxgsNeZ3dd88YACx",
  "key16": "o6Teiv15ctq6HJNTdMaBQqMA3UzCh7PBA77dnEU6VEgZxLUabrknv66VoPqqzNyT2mJ5UMwouGSq81ECpB9R9Bd",
  "key17": "4nv875ehRJ487P9fzHV1RDX8g4bcqAGmRvskSp4KhG6YHpaeveWJBYwhyaGcKfisRo4hwwDZgiLEbHMUoeReJ87r",
  "key18": "48RyzqPhnRogdtcBsD192NEAQk4heW8vRecnrEsnV6b5756N2DVYAxGtLgA6tQunFM82Q5SGYKHE7iHS2cCWZsWE",
  "key19": "4hukrh5PaYKhGDzZNBWLTRrqxKgu8VATrntQW4JkxYrPcPVJnANKayRWi5ioh3zx7TJiEFCDCP4UvE5XNVJFr19B",
  "key20": "5hJCjomWj7RFSfjXBiUmiB6ezMk9f2btGkMiuRPT1AXMiDvZodRYoqXEsbDEyYQ2rKf2BmxnByn37idQTk5gqg3F",
  "key21": "4oXCndn4tk4C5vR5JDC5SojTzwA615XP2Xfe1p8TodMsWZidpcrvkKhagSNjciWm41WDqu7eSJxCV97v7siZndRE",
  "key22": "uRW5LL2j4dJxtjDU83KPQuunTbCYyqTPM7k6xpufH5vRi8gtm3MbZ1WZmpmRCeXpVrLrY5KozvZtni2gm46YejJ",
  "key23": "4SEGseEdQ4481SgtgipZFUYQ4Zc3kxa14pavJjkyksek1XwGVybdDyePHprE95gKbaxkcZzQL2uadozRJwFdyxse",
  "key24": "2tnrqNFRn8upavDzJCkoVPSCGimFzDUGNCHbNdU16jL7yNRYVpWXL85f6ZyhDuxqNbXzi4krrXmLriAMDAVG3gH9",
  "key25": "2ZNLwa5W3UYEjHmq8cYMJy3Lxm8LGqELEGLsiPtcWb4Uyn49dxDQi8MTf3XwFu1SupJcrtmMPdgCs97FXFNX2uPw",
  "key26": "45VHEdq3pBJp61uf5ooHrzBGUeQP9H1FH2hh3EZK8j2dza4FDnFDiiY4iPwzjGWysGHio2WKTHmAgbprtJ3vCueK",
  "key27": "2r4D1P47KprBLMCvDfqMi4LWWxvUBjVdRHM5F8FQJDQXt3cmtVPqhHYi71QchBo1WhnV9jRhntsAzgrmEpDmTjf",
  "key28": "5ptSXD4hY41fMh3d2rZvLxhZR66XDGAuYk1gbgGGAutMf53PmwBD1cgcMhzoXMy4uwhGsAm1g9CCmsbNwAm3kgn8",
  "key29": "3TzdqMjqjJYevibq886AyNMFTumgJ9R2JBhhyHpWS8Hh1BSoA6Prbx8VU37w3yqrF6Q3qJUfC1RpucPqEmPR8P4c",
  "key30": "4g4oRF1t8VCLRs9cZghNZHb3vUHAYM5WnrKHy6cdRYhNDPe4VXSintX3sMtFoMqzHPCH34QFN2JE6cQJJJTM5Wpk",
  "key31": "2qyiZZ9949BZuFEzxpgvssEcd2RBvQYVD5KAYPmrZ75KWs5v4VEjbSpXhRnYsDtUizVCbi2szk9VGNXnp87Syvee",
  "key32": "kSna55P4DVAz5WkZ7t59MHqKPMhuFDzhAD3xj3XnnpFUbeL63L9rkrtDYzXqzmW6HboWS8Y8rd4FV9GSaupLzES",
  "key33": "5p5w3xdCnJvDFnpGJUHcbfb1xRy6UqTvwcBejq6F741sxBLiPjPNzcVYQomugY3rxZN32Abeck8QciqsCnXXbBzk",
  "key34": "2FcCUaWaMYTKrmdVKB3ZZGQktjMso41xxH43FrDGQavwPPB3sza1dwCpHNeCGJ48w1NLq2pW4SLBvxCGv9ZACcUp",
  "key35": "5THwM6x9EB2iuWLp5yrMN9KLLM7h7VLc4ttLJTWHGmbsjjVYxGYrjk9dXSJirA3skoJExE8oiZHpb8NG5mL3kNLQ",
  "key36": "tsiNFE67Vzs2FEmhg5q5EaWHQwy97mSt4ia5cF2yVcM2hjQ1FA3fpfd2NewYMbDtiVsLcxNHHg2DYxtFDcnB78L",
  "key37": "bY6WcoTGd3VBUbh3ekkhYBYiYnxeCZYpDQCNsFHFT3NrvpXFt7b68sX771ngZzge1co2XQsyZQ2BuuHVWS18kw2",
  "key38": "4wbGviqkmjrWJZw4wPpDAtnc5Z8UbCXaaD8y6MTQpiHuFQN7FsDJhAV5VGJUSrWXCWWkRFKh4k8te81epT8wvzBH",
  "key39": "BDkW2qAH9u44fXHFztEKKKiQhWEies4Z2Xoxb7P1E1mPVYHMmAXh8MUv82DJRnUwRiEoffCb7dGV2m6pMqLebnh"
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
