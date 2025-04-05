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
    "443kNaRXdJwFi5fSuVdzYT7v3HajxArFsQwsk19sRxVyY2f21Ha833XHkfSCdYWDurUPmivnjHPuU5TjAmDjygAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q8btN5HyfskpWJjYw2mpVpB7GE59i7Awp7W4hDTyobJbVUEbekTJ3xXiswmTwjQueHfAiohBxbxipkNaDboGaWj",
  "key1": "4J24tjUL29nhRGcDhYRSex3hNF6S8xhikoVvnaocU3BmL3uy8aPZQ2VL1oB9uZHwn8sB9p7Jyn1PQUFF7YLQDMMR",
  "key2": "BKbQ2jr4dvLGeRier6zCGK6dAbJWNWWYfFnJ1z9KEkYJ5Bwe3AZVBtYq5re3yhdVP5yAN7Roy3894jwvUGE125f",
  "key3": "3uH1PisAALW4c8RjX8TYbs7SFGSje59HS2RJRDYC5j3zsN4yHgqsM6TMTfBWq97BQFXxZwrVfWq8XscNPrGWjtxC",
  "key4": "4VfBLCRoVLCVcNfxsSJpCAm4SSvhH3ZXhX7prcJd7W5jWPALaRNhHDKnpewuPu9jCHX7WgKh8pUh2hBP8d1Mk4qq",
  "key5": "3ZzgHRE2bQAf9G3WrzFEqxifPJ2SjwgApEVTjdSBXw6DZrdgqS9ZWy2RjtFMS9jLaYoTbpiGtXp39gtimMzxAFJ3",
  "key6": "5JyYDrmQCp6dZgzeCUQToAtctHK2QvStwPZ3Fjqhzf6iJ9naCg18Z2uWnkvQKPje3ijxdcZh6Dew9MSSfZK2EBAp",
  "key7": "5KPkviWb2CukovPCrMfM4VdE3FD6jda1B7xqUojKLYWcL1hGWdS5Ctq3LmFxSkhQtWRw1okm5FwKNQYjoXKYQsmp",
  "key8": "2wFTi5TpdZ2vFM2mEH1MKEFDxMcbqeogKLNBtJ3fcHKmZVaUFmsb7mYysi5MEHXA9xXXvLDa8Nj1Q6X1m5dogLSC",
  "key9": "5eeBRNdBifHp8ibjLKxyzvHZxGebra4K9Ps134Jf8Caw8mkRreuokkY2hjtqardtJuNb9aJSxFCwGVdSHVejfcpp",
  "key10": "33SMQ8Fe2EdfBGpfFMYLeFczEccKCb33gaETzZVE5CPDpR453vQ4zMXz55nnpUfQqJmqEjX6Avrja3SVafUzhtL7",
  "key11": "2qSE5rMYD4KmrSFLfmdEZSELnzJJTq6QE1sfxBcsw5M2nyXsoeoZKdkiWkNCcsUtEo5tyhQaK7KyJxZjoRy8ytvp",
  "key12": "3hCjUopjDQtuv7swUvA1Vqx4t8KCaq5jG8wHhJFC3GrLc3pN5Z2f6g1yZra7Ced8mForYZPtAMEiWSbrASPDwYUj",
  "key13": "2aXsksTXnMs4HzdE6KF1J44GE6zQpUK9SeMFyXGNGARe7LUr3tPKbyTQLpHEg9nTxP9T94EQC7x4APHUysLcw48D",
  "key14": "TZYvPyMDop3Q6QzmQQxRUAcEZsiLU9EEp6a1Nzp7pD7t1XZLrJJxE7YbnMxKdbTqgCVLTFdjzjEVBf7MgsA2YUP",
  "key15": "3z1LhwmiuG8xedTDRtiEqjbVie6n21tgwgk574eotAShirLVBgrPcBtNKYsy9zN8pwT2WbHhKm1jGjJFTRVCw8mF",
  "key16": "6UYxwECQKXkJ7vFYxcZ1SZyvd4494D9HJ83HXNV795nc9tsGSwA1ZWmWpx3uLmFiZjPNQhBMnKe2mmPgnT8a5bP",
  "key17": "4RBaSpX1UFVfMpcsVh3EchnP5ud42j4HqwSyjn1KvA6EE2A42fbnEwLBamg7SiPmsu1q1eCrD5zEzGS9U6vSnYzH",
  "key18": "5GHWPZcKsgDg65xbX3p4s8EFscntrm9z27FPPeRwJgtp1NUDrx5NyAJjrG91pa7AaJVbKPCBQbr6BEBbZRn3b3ps",
  "key19": "2t1Zr7ayHJgCLUAaNzEwsoT2Np3eZDEegDuKyr667QDcJh3v9LBB7mhVJZCCx4PknvShbfaU3QLdZXQksR4sJkBt",
  "key20": "4ciWp8LVHg7k1jSVbucM1xw6KuA5Cnh8Wh2j9Y4zHPnAFdXLaBjin6F4CT7eosgo3UqNJGK65X8S6icQ958Sdoyf",
  "key21": "3fcE2mkQLToye3KEcLNM4xv73hkcokL1gfPp9cUFsw5iwtzLmVE8hsqwksirHcA49RtWaL53qfoD75njiyWV5Suj",
  "key22": "3SB14zMNUUjSWLxvQn9Qm6Sw6W5CzpYDtWGLCuK713KXq6G3DRSdPBnSZo6Jv41zV75D5aQqX6iaJjCP5nNn4FgA",
  "key23": "2r3nJKrTCTkheE9VjvZgudZBkQDK8BFpirbpBoPzifqSUHZkuNSbG5eCEujM2A43evUj1GJssCQKjFRuJXE1RG19",
  "key24": "59ZkPFApzvTmSxaSBBiQMmigU4ouRDarJb9NojcMDXERno7kUa7jXScE8c26ExLmfBsS16Syhk5iG7om1N1hYty9",
  "key25": "5FKtLAJQuvi6BoPi9iJDtASmuUYgcMwSk2ekGdGPkVQR7pbzP8Y3Czk1acB4KNfvodj1H4D9xDRjszn5mFWNpHum",
  "key26": "5gG4QWgRkV9yD9rJCLSRXkxrAy9G4DwWNAMoWDhxrAtAjonzr2xPkiaeGrT1zrp6namtJf3fHX8c74GeBXPsryry",
  "key27": "57BidxJBECFrLTK5o8WBDpANJtZEZBgtwD1EmqcVqZpZ7Pwkqb4dUhYDABjQyWjFUWG6w7m5TypyuViDx6MFLDPr",
  "key28": "3KY1LShJt8NMTwHx4gJcW4e9VvT2iKb7KC6fPyXPPgxwC58NCBBo8ZruaRy4PdRJGo9b4WezBoJuBLpifbz17GuD",
  "key29": "qcJD9dCDbhq6S9BXKieGy5eF39GU3221jCiibsXB65APaRFSTBhDzMErG8dMNcT7jzLT2eCdqTWhFrbY6AwB16W",
  "key30": "31eXgB5pq12DvP2KVnmS1aspEg6xXxjWGgWZAPA2rTBEBMqA4PaKNtJuoeCWoz7VNGXXkLFA5vDLGBPNFtFFDDpN",
  "key31": "37EsxETk4C1hsRTGWuUg9kYwwKCKEcgaXqNxGsLKhnrJqqXeQpPrFPjUw3iwLP56vw6NBFE7SXLjS6GAeTd99xUh",
  "key32": "zVj2B3VjFrQ7G4Gsb85TgnhpV8vycS1YeLwA2csWhADc4EaKfLyG4EWApTr71kozc66rZnQpxDnzUxy8zLdB9cf",
  "key33": "4DwNX8hiH5yTouTU4EADvMyAS31pKVcfBFfzUgihpUVgzNbWHzwjg1j9iqJVrKB52fusEChY1uvP7a6tDuSLn8ex",
  "key34": "4ufJ3dGKZismn9HtMQcFg4LCvC71i8ZZVzzbMbWifdWF9XiJ35dkSGN777MkLumrYh1AFES3uqeyPC874n6qTTCP",
  "key35": "3WCz4eeSxSuXDVxT8FfLZvojAX8G2bqgRoqDTA5hLXs9UjqTmqJX9YJxYabGfrESEUaEXUXUKXiN7Z9SYSjKZRpC"
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
