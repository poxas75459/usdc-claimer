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
    "2TFqdLa9AxUs7eecEYX9WcYZRWXoHCbwvsbotLZdwfAMv8eSgSNKr8onGHSiGX7qeo2cYx5136ZoUUnykx5a1YLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oL2d6eEKUV8Pnwq3c65EnR98fEUKe5FDdLNrGEG4ctSdgh1p7155NoggLkhM75CMbcC5ndoRtagsH7bnDeFB1xj",
  "key1": "2NYi31XvUvj3qeijs3kAYaUhL2SMGGwKFVzNQU3DcCCUYdEPQqYckEN1GBqVw8HCPqJP6P6tAp9QyXSLEveKMQqA",
  "key2": "5aWYs34z4xWwiGrerv2EYpq8YkY6JUzd8pHunfScpTpBSAFpNUmB6w9Pp5pDxrSZqH6pkWBqRUEBrNbcBVoCV8mU",
  "key3": "Y5fNAFKpwkPDeSg9V3YsU2NQmsJ4fhsxiz7TSGG2iR2PCfoQd2Jpw7dQR3eA8FhwHkiX6MFkD4jqFkBBFgWska4",
  "key4": "3Gw6MR3VQRjRj5PjD1U9SVBvVGT3qoWt6QKCvYA5TNazTrgv2zbfaKSau9rrQzBa8CYYcqJmcPCLN8poHqc92Y4",
  "key5": "5TxU2nb2odZq5WJYjpvztTMHMaLs7Q8VApz2KAWk2VbsbueB24zDkUyxmL2EeBK1aqttnWVhZAwxjXgmaaW4Hu7U",
  "key6": "2CwW5GD5oHHNW4RWFd3yaRjhQAq6LUHBZA3JBAWvmEjbc8sMPWTmn1Fb8YbVYr5kA6pYiSDWZkPnYQmpvpYAdaav",
  "key7": "2sqiYPMtaL9pdWMAGN1VHzsRcFeRTShnDeN4uS2dwPQqUQdnydq8AKS6F68rjMqod9mPt7sv4nano7GRBpZxxzLS",
  "key8": "4Z6UdHhjPLf36fxbJXNRomB2HnSqMATfTWcXVYwWdLWPZ4Lk4oJp7AxdBUR22qrpyQ5w4U8NskWL7J1jnaHNikeN",
  "key9": "3MrdS4ftyNi1BMKwtxrvQm3KZEiVLAE1teune9h4RZ7t3tgPu62K86ATNcHxm5fAVbJAtrdiT5DpNxFMm7uBHTxB",
  "key10": "2KDNH9rEDSzEy8DJJJ1YXGD7wbc874J6g3g6XV53gFzxtUDftuxMpqq7TCCd6wqq5aZJ69YFBWbX6yY2Dkxx3jSr",
  "key11": "5iWARsiNyGWxT5UzGVJMXBZfySLtYouvcYCPE6hdhfhxRq9We7gdgjgvSaSooSPPqHt9jAik9v4AQtwSFLgKFECj",
  "key12": "7THCTrJX6RQ3o7FKtBEjTpen7H5FT3xA54L9Z9NS5ryrP71AYXPeXmSgzCwH4gembxysetFfptsEzu3RG4eAFTZ",
  "key13": "3ZLTGSjP9gV8QRq1J654T2x1MLaBxhd5Nh2BK7Q7mnz9R86TtrPwpeeseEdreupBc6hwQNWjXQNshiaQc8fzAXer",
  "key14": "32bxrgvC2o76WKWGGTQmjQjjnwAjRh2vgeNeMKGHTtQHcwV1ftbFzfNEH3o9jVnuzz9cUJhrckn2n8F7o6bzLRg7",
  "key15": "5BJL6DMU7ysYdLJzpV2jAMHxwf3mBrjpUaFnHTGRjo8bm62GsAFadug36hxRKU5FHo2wuntnbGabTou4VGttv8MW",
  "key16": "4bGRbvnmRZ91BHafntqBQokiq4LPcTMq3A5iymaALCDqZdPcUgdLLB76UmHQcMDXSygK8MNLtm4XAas38jMxe3eV",
  "key17": "4AKhQwQ5Usk8XXeL3H71nujtuHfvQPwEnoNsy55m14oQDJcd2x7U7Bk6DubXcyh7RyP7ZBgSaG7qarxwiTrrfPS",
  "key18": "4rC2GSJGhUggBUUQLiwwuDQNm3vHwYru1E79VyhLk1ePSW2UVdGEje66beZi1XqhbmQMbamBaWdKT5nZHHErXaWX",
  "key19": "5MdHmp2rjbP4eGyTwbovzvtpJHGSsQfoWa7JLBiZz78E9UYG2e8jtM5PTyjw3GooavK7hagLToS4kXaoBzFRv9Pw",
  "key20": "HSzVSSu9Rd8ffVT6HjUKcncMwD8huyvNH72CKBTxMsGMvLPd11cnx4df4ibrHTkvRfMC38Sm571j4d3KfVeNYrx",
  "key21": "4ntpkj9Lh7GJ2o8bhUvzoQw4mCUvq4SpGeotcByaQkDHQnA37aKdmEZasFfoX77tzCHBTVWyvuJSmjJbRiSqb3bR",
  "key22": "62YmXvkAZt2QG8P7PmLkGnt4x4BYZujNzLFLxcCJZCSyVVk8YsFfNi9oXV4Fbum5zNAc5PPUjPpw9V85JfqYKANF",
  "key23": "5w5w5Zy5v32mbW2CjpBv8NmHZpDmzXekP5xZo9fhQmxb4a6TRVDPGx9k3hW2mvx8ra7YT62XthfYjDyBsqt22yb7",
  "key24": "4gsD9NqFf5RNrDJHLMPRvDyRH1S6ydYvFm9vGzhqwWXLM2KzLRjLJVANp1yqoAbEkw4QBdPQNtKD2nGnC5oo4zk4",
  "key25": "35vC4mbg5FrXGaiK4PqQw5Nm6A4W5HrUCjyox3pmGxtaGN257GP4ygWEuY3WP33NmdFGwENhJaaGfzpRdXtqyvwo",
  "key26": "3BgPBc6NBHF9GfbRHr774A83Kwu36yV6gwu1vuVREhNSXaxHjiAmpPvYLpWzZYtfW7FxirfKtspogshxCUdREw6z",
  "key27": "3v4iRaFB7Liegdmi3YNy2EspY4ZEitaXbPZj4xu6RWHH6Ym4QmyRE8m1452ybx4E1xyyxWdB8UG4aBKtmiFRB4M4",
  "key28": "2M9kMj71oWbrM5V618MDyTwZsSMDR8LmhNzYTQptrp1JntC9XP2UPWHge2Be7pkrguEVh6QSvuw8jpQ88BHPNxpJ",
  "key29": "wKEFHGZmTKeD1NwFCgMEyEbC9Kkrv4xGEJcY3Vv5XJry3BALDRjwCiiuaBPg4qgM4SGvNHKxKsTcensSBH5Q5nh",
  "key30": "2kuXMAMtyy7ZU7BQhrdJxm7ejGFpdgF9d6RpoHbaGz2uWffHphCENiRA81YMHA8Nh6UUbtDa8BbVqm1XfeVEbiRw",
  "key31": "dMA6i63TahGPtKKFLU97nH3CFTeKhhAbQezpbY9BPmfi7aePcHLwRHmQ1WoLU4S8Nqc32CasHUFAvqoHPTNd8hW",
  "key32": "4oTmXv2ZHB2LPu6r6WRwSe6aHwRjbpH7jZAFZV8VxbFrMjcPDmUer9WLHjFrnvYX3Rz51cSeFFZdZULTETi4vREE",
  "key33": "5caMHd6SRqaPzk5iYjhzan43nQwkszSRT8oGVnxLwFrWXFCwFzXrnJUmuMW2EfmGyZHai2QMDVASrtGyN6mRDLKD",
  "key34": "4BzxUTLc6f3UXicv7S5JZRsUzAaqnzEms2WuZjRsPhTDbzhHsBpauTQzuZPUURdYeAFed644jqSVTgmeH43fDxwT",
  "key35": "5ejDdASACNLCUCkQ5U5UUufcoqBnStFrRqCry9pZNzqUVSZXxRY76RVstNxBbiBLhFRHM1i8KconqysBqfx3yRb4",
  "key36": "Sbs7pTR37GRgk51otJnqMQhMDngP94LjWFzgVkYyRnLKhBEituB5zwkutyYjKJec5KnUpZd1hmxgPLfLy4MzrbP",
  "key37": "oDhoHrtKUeCCr3dpLSWnmKmM2yp5ynJsrx5TK2F8WeMKs4xAKBAA38AJGJsvXAqnnjoRo6JfZxQ6CmFdAnMQaUo",
  "key38": "KBpyhqmgoTtCQgrnRddAK7vEWKzuA3rvPUPjEHij4j7KoPqA2fSjeThLBWKC1B7ZDmasXJsJt2qMqGoTKSatEBx",
  "key39": "494JaoZjxnDGV68DYTzjvFdikKp3LztrVeNPmkNk2hNM9vke8fxnm1698vtFA4r3Vdo6t5oWGxsZE6dRfPGtSjer",
  "key40": "5gyNrCDeGop3TnhDjSdnr39yQR5AjDeTq3NXHoPZxs1oaua8z5PYX8Bq67mvPfHfmWjKtNtK9QiFXuJFY9L2anUL"
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
