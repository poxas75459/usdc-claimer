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
    "V1tCJfCfi2xqgjdakDjnbtSJFj3koT7rTCxEj1oEMYKgDGdA4W7tgE5HQYpkcEJSQoW6XpKBepEL8YDdnoiyKyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Li5ymJAQivWszNtZMd2tGMe5m1gfor3z9SmMvw5BupDNwMkuUQrQ4f5VXnPWeC12EqD1XNjTRjc1eaLts1KeqNG",
  "key1": "2NZqoZNxYJbA27EXpLG33iaZuQDort3uBScQ5FoYSwnjWKFWMunbd4nZ81uci3pkKNGLntyFXudpdwJLqmMMKK3k",
  "key2": "mq73cJJtraJDPkeYSURPYs1wrifcuvTKoiSfjuv1TZ6SA8wQVUP9eu1sz3As6UjY4WRjusaweFLTPqVfskZBHTn",
  "key3": "23nYQzdmT95xAd5MGs8H4GrGUUnzDYR1DMCqGqmUk9idTvHUeXUxVwvTbpoN17PyTJnEqB5y2zkBLJvZ2nfzidcc",
  "key4": "qgJcMygGaDwZv8zRn2GyLicsTEzja3jZ7iRD9X1XYfJEzXKTmueSYXgjrokUriucz5GRy3mfSDwpZ5qBZFse5H7",
  "key5": "4BMUW7YNK3HfKsjs7FNDys8KXjxrvpFCmUoCNesZJ4XCMKRhuhQtjE33EWF4XpHVWveQrPNQfxKLxLy2YZYZpZ6i",
  "key6": "2d38uLyMDRJpWHp9dDHdYyYSSE535dJJNd9dCfK3p7VVTxG5GHY6nv9o4VxqN7PijmikALojKtFGawfEXEHFKzh4",
  "key7": "2452izCWieiyVc2iEU4DeH7V8Xqoku76CbBvzmP8dTe1RcCxNScXoy776A9imZngwc9Rv1eBhVsNjRMtYsDL1FcK",
  "key8": "2pXNDzhaSWfJRBgeyYH3E4uJqd4gsCzYNrk2gMGNcMiVp4HdJGKVHJq195GBqbQ51JR1hu5PrUjvzPUZgniRZgU8",
  "key9": "5WGRT4kFWqgFJ9VyETGU8B87gMe6fvNCVdtYKtikN5VfumSk59BSJfaKHUpGCVEixf1zBHqzfkpkmhGm3NXvRSM9",
  "key10": "5XXue4MUN969p1BNA9RCJNvrowV6oXv5FNuk6rHg5Dgj2C7uZsjhfFUtkLdEUha9pPQyFDHNHiZiu4irh6iNeEo4",
  "key11": "39b1M8krWeEgV9HYjTeLXBcmcSp57wUE4QJnHcsjFhJW2ytPiHrmfW3WxeZVR66oD595rEohXPb88Ryyby5Uaugk",
  "key12": "kJkf9VpcDjzWeoCa8AubnBUNmpJeJ4XLsBubzH6ycQwG5SivvXRBWz3xhgF71rjtstz1na4akVdEYfp1fYnJ7pR",
  "key13": "3ok38VvdsQvw4Ny9qKe2q8aB5EiDxsyPS1jqLZZuCPeonkcdk1VjmFDPCeAAXuqYruXTfNJ3eXr6ZghiyTjUdHJC",
  "key14": "5qTAnWNGR1B27osJHd2egNDSMx8BZBs2GqqMTKsRPby64PSisQ15CXjrSqCMBuBo1SmkxZUWWYd9kXQJnDA6JC6j",
  "key15": "3TVHxyJrFj3NpkPbGgwrKcX9chw7gNv9Tt4feeWn6B3U7CffXt2qekQs6bUPpqLu78g2w8j2MvyNaHXkZiUbyiBh",
  "key16": "35vadq3yVghtUmy5AVwJC6HCwH5dbKfcNU66mnLRggD3ZQw4kAPRXeXdeMu9gsWJ4q35DkaCs9xsdAexQH11aJAe",
  "key17": "AxkSrwqMvm46JVMd1czxxqvFNEkGWh72cGtihF41G17eSCp4DmBhAuQwVGf5749HSXQMPHUnUk59MAHsHevAVHV",
  "key18": "2mzxk9ZLZu85Hj3Eao4Mk2W8F8qnjJhaWLozAggyARbarzi1JhubKWK5FDNogqAneLJG21vGtyE8Wf2cGCGvgsBY",
  "key19": "23MJhuxwuPhc7Eo35tZ7EWYocSpWXREjggNJNPuxfvnNegAjQ4kZWT9QG5CuMtvJmrueKddmwZtjrgwDUumXJ75u",
  "key20": "5FZArgqR8PatwJbwjFR9Ayy8367Ai5RcA7fPZjrbKdftVnyYTCRvBCdQqxXhhsnztne9T7gviu4jBRQwcicVbzKY",
  "key21": "5GNtKLUALowpDbu9yNuN5yRCQXHSUZtN3P8GFyDPPupZL1fCXBUr14w6VkKyMnRXv78J1zP8DEBDiPNt2YKnknVE",
  "key22": "3Y6P6n8QG98NAqNxr95XV2L2P6SV8akS1u7DkNQ5wMkfAk3Qj1H9y1iyUBAq31RCDhzWZAp4QkNabGbHDmQpFVM4",
  "key23": "3oxWvc4LnU62ACBzy8hsqmQ14n9P8rKA5qV8hQp2cPXjqm2w3JRyw9X3HQn8fHxEAN5MKBMHdh6YB4kE3xA4C6wh",
  "key24": "4R2U17GuFxYT2LpHCAcMLZEr8nBFGz95652Hs6XsLykPWs2bsTyYBgxaNsAiTLFDnnf4dhCPk2Ff7pSdQtrqDxZs",
  "key25": "65YA1Vd4mosLCv2Y4yuRbXcHqJzMMTtuKjmeAQw6vkQr4o8huurEBwBYePs7hXU6uzhRciUz9c7HZjBTUcj1nX2U",
  "key26": "4ysZbv6EYSzDnfxV9qXiraL3WMZRFi2cgoV2PECwTKa9GdX1peTvGV8qU4YfMEB3Fb5h4nj3WkDePReLUwgW4xui",
  "key27": "3A9LzWi7BPKUeYb2hga6afLiFM7sDTDoscGGDXD57zhjFbdpWcGCGLoagnBwRj7zZjqhEZPmp481BTMaET2zHgAw",
  "key28": "9Be2Mf1H92nL9wD2CL6cMhPLPjzHGa7mrvs1KHQYfENntx8zhaKXKqyfd8xa4ENahuAHvUjwL57M8zofgxyP6s1",
  "key29": "3AwjWJaaD2QxGeuvEby7YgvUPKF9FHWLmvdwzaLhNP5S3QTsu7wK9oH5uj2jyomxbmeueVJ5PnACzZBQYQ1eMVER",
  "key30": "39F4J4nqWMDP2gLRaFmto6dcxnv7rBETjPNfRqiqKvBUrjhL4B4621TM9nBAytA23PiKd9mYHon8eDHZ7yC1Ruqu",
  "key31": "5Eo6hwcn8Cd3GtZBPbYzzpdg7Z7ALH5FQtQaUS76bfhfepyiB98hHyvDKtwaChaZ2o3vy7rfTMJK2BBXDzB1mnm7",
  "key32": "2t4Mw9gp77k76moSKLwKRA4cGiERR8qm3YT4nHbWPiq8egTUr2t2S66bhdebQ9pwj8vHHG9PMK22smec53v7AAHN",
  "key33": "5J2arP63U75gwmp2Y9XHaeESx1CojSNFzKi2iyEP3L6mAH5JJZa17AW3hSw4HoLeMadoaJJszTeZGNBpBpuw4egB",
  "key34": "LLH94qCthJBNpPaAVFV8AT9eNi6Vt5uvT4jjd5Z2UwBWxK8gnruk28yJt2DxtR8borAtayLR3JU6fEQbLtAbLhp",
  "key35": "3crTk7cEewYchEZcVUPcwXvgddtGCqW4rWscC5K6L4jZx2YGc8ZSdY33dS2SMjThq9w1zWSwiTzz38A6LRb3TSRr",
  "key36": "55nCAuiN71jyJGAMeipmDZKmS1hsDBzhXZKFuTC6hfPhR88xG1Emqcyo6wy61NsFPcaptd7CxbFgVSGnS9xW1FD6"
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
