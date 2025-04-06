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
    "2Tca3pNWFsVGZvjjecQ1YkUSipUKGiAzHE15NNophka6Czs1J69i7uFLbEVEbXTYiGrz2ayUHZenTq94zLZgymkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27JPNmg52xF3fgSoBwEfGQgnj6XMPHa4djYCA8uPJPNBirMHDQ94MhW8HkKxyhYCLhmRhUwc7mUi4FNANhm9oXpa",
  "key1": "4BeKM6Kpmpsssea3vpFUUYSsX7Xq13FQkiGWzNPzuH5WJTSvjrJAMLKnxJWMNLMNQjTpUUsvmdA8gx2aWkDDjN3",
  "key2": "5JnJCLfzPeEHjzSxvZF6ZL6nVvWvxYKvLLCr4Gxp2RbNpFHiskzgL4H6uzRVZTNYwF8MSy1s7jvCYtT1vBxgiaK3",
  "key3": "o1z1oS3KTQMyEBFfBdX34RJ64hmnhmYrRXftTWDbptushxV9Y3T6MtYZ93DPRFUNjSmwWDh5H8YTBmik3eZwEZ8",
  "key4": "8YEQneVSYb8MQBr8H5QXwwos7izm9NFAJMFcria7F8rnYwhKHKGWdYJy2KKpuxKYhXc4E3ZJxDnmg79cfeby7Sd",
  "key5": "XcJgjCF4VLfn6AZUNobgK2CBs5uimR73Y4bCmUXqceY61mA3yHPtTqfu6SG9LWfAxKEiNS1dEYPz26pB1of7e89",
  "key6": "5sbcT1qCEVkThLKHMEi3JLyKdTrPkwVnEQSeYBgxCMCGEa8zTy48JS4QgiMRcifPa3r9ZbTEQxJ5FPFy8un2buz",
  "key7": "2yFPVgz8P4VHZFLGY2xvbv3UH8NMksN96qfFaS1XWdzYWVtXQQA1Lv1J2DjJL9QNS84xVeuqhefi8dGyXQt6P6Ua",
  "key8": "ArRMevGQj1A7C5NzJJRJvWcg3Ti7HtFopfgq4JpNy9K5qh2J4A1bXrigXv2qvwcovLzYQW1f8Cc5DDPFDvBJzAU",
  "key9": "gNcTGypWGupkHBeuUd1QNAY7Sp6Veph23SqtkP71XXT1qMi6x5HSu6fa9jCTFioAmA4KBrprCHNDx63rhvBKk8q",
  "key10": "3kaUZvE4FXZR6u916vDNca3Pddmf3W6hSfy6kSy2tgnrdiGoaDGCw8o3RYEnYX9dg5k5SYEdn5nqZv1X8JxuNhMr",
  "key11": "4pnq89ZnuSckATUavdinHrtZx2AtXzEWS3bnBeCJ1Nz3GvcgzZwEm1Bvpos6fe6uHhV9W5bsC365eiwVfaCDnop9",
  "key12": "m6yQ2CmpFqksFW1oaxEGZTBoHTnzQis1GpscMKHsXRwQBRtXMoELbe4FV3B5WkePHqqSQSujGka3Jmbsdin4MAA",
  "key13": "11As8x74hjHT4ZoLLHvEtMmv3gjzT33Ybsp2fCW62aimTfJaq7BZmB9XNtmYdTPD1ze58cG71VfA4YhYefpiKp3",
  "key14": "4fZJ3Nhh6srT6n3DcUc41JTK5QUWcTSbJWsN7WU8X8fb2xTas6NEsdrscUEPyTesGn4rGKRwfpbYJqTGBArErD5j",
  "key15": "4ksX4Sx81hJ6rN72kAPZnXqAJ3uMLi54DebjXuLU1aAK35LEchjWLvYTS2VgEUf8n1WLjjBCBkze1kuP9wNHSwnR",
  "key16": "3hGstCNJsWX9UpuK4A12Bg5KSHMbj34ZHoMJys4qZuAfvovEyWB4GvZYnTFgzjw2f7GnYLZqm2hcWLjcCupxr2o5",
  "key17": "4mizsrGBrJvQEK8pMJ4rKAGHzZdNWSjqJGM187TFJmZCNSpcPogSGLyuYPpMd8YRQTLn578haxVvFE2bVDW7PKyn",
  "key18": "2SK1zu78Qadjpv6cBbLNbVdesZjaddY4Jys7Wo6Pij1CU1Jr6vTNrRFXFoQFHLmuZj4wGT8XfzjVYSY1RrWhkRij",
  "key19": "3YpFvhNnTB1MUUc6xXZSwU5Bua7CAy7UBmPSTMsrCcg6Q7rjoR2yGSxsXNSEF3JZ2MWRpjaPmDyVk6VynVJbTdie",
  "key20": "2CvRx6kzh3Dp4GvzdV4dKTLaWZqby991zzzGWKtWMdzDNBKWPWx8f37JdNu2FRdDkSqiPN6iHxGEukAxfYnzLJQG",
  "key21": "SFfC3HyR7VCCDN5JWAgTijFUZeazeRcvsQigsRFt9wjtTQuB9G2DViFHybkuD6paHXwLpABrT4pxRRFnxZaSrdd",
  "key22": "4dPbLqjP6ZiunWCZoPCXmewKwEKFrXs7JJGQdpT3A899m8iSBDKNTfAFPo3GNBEK5q9a78w4k3tHPRudJdCQNzzV",
  "key23": "2CT4zvvj7WQHgtHnEpZjnkVZ7pe3TAeq49RtrQRkWrAAPZXRBHUXPGh7yLVhmRE5jRwjRKbQA5N4dcifuTnWXFnV",
  "key24": "5nYTBLM76hAQv1iLGErkdbPMD5Uo2HzdxpaR26EfZ1MUEZbkctEUoGQmPptCKDNF1NQnVqbZZ2N5efj1QFXKdgYc",
  "key25": "35GsHjN7Lcj2HFrnKQbVdbsYmLj8hoRfkm4GouatfS1KpqJjitBUA2riCzi6t8wm87neeqVdWxj73h6DTvbWPjbf",
  "key26": "NHxHbKBrkuJeRzg7fBo7PDPdQcXKqCaCDqSLnaWu5PhD1DYjfSjNUoy94zg8dHfGbY8iM263q5q2NHLohUGF9ux",
  "key27": "42zLxifSKCBG2xPVyhtCyaP7oUXh8apLeKkzo44jyUbJKAkuehW2CShzM4gQvgHWSRuZH7Y8a5rQe61uGVZVhUsi",
  "key28": "4BmxXJCZhzK3eCmGLFdxLA7DJ8284Xw9SujXs3UW3of9eEj3fAPyHdssGo85RvziR8yJGi8Z59hDcwSNJ1DFG673",
  "key29": "4uq5TTDHQ3ZYqcR7XKPZkdYC9eaYUV54o68qPdDYgpTmgKZxa8bHfGomXZErg1CV1wa1VJna6hi8nj72i5VwUJoW",
  "key30": "61EGLfes8S9U5LVWiMEEshwU3DQi8p4zCLemg1HJQyiUgbeHGP6Et4jpqkcQyYBgYLXYcEBUSxAPXQRSYAb2gs61",
  "key31": "2kkYEcRbFg7S3XDzJ9DReVtYqDaHPdT6i8UVuxdbW9NrKpTDudujxtD6PWpcKZx6BwkPQoirpmqtJxLSyxjFKrTp",
  "key32": "S3s7DY8AC75E9w4KA3T4h4CBzPtaGdBzP4a99JfXuLSX4uwWWrRvvYB51YjQ2nPTAerg1tiWQhEwNtS2c9XPvSp",
  "key33": "5J4WLNTH6sqXc39QWZ1ky2i9hpWwc2b1LWZgWRxgh5EcbDQG6T1WfWzodLAn9CroF5R8uhdtRsTBn9YLfAFbyhP4",
  "key34": "4BJ6HfCsAaQCg6uU6YuFTb6tcC7mvHzXwcvAGzN4hapSw6azpZ5XypqWgnws6fMDGnehxdeRWu8Lfnpsedaxj4Qa"
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
