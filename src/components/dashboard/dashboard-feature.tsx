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
    "2u5DcLDZ564atUQSHWBx148EG6w3QHgpzuvj8voHH2rHy4KU4eeXRbDERz2vC6mkdQ2wEHWKYhXHb1nfXxo7Hxvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mSPBprZiFaJZHumm7f1GYBGRT7gujE82iXL5jUaFGRTp6F1JYDg6i1bxzhBUfd6ieDjCLbuVqJx1xTzAGJHa6EW",
  "key1": "2BE13uefDKPR522Y6ToDXRytU9K7qs7233pJEiQb1Qp9gHz5qynk2hBy9pfEBr7vibyHGJrFUJkEEqSGXjGjcGpe",
  "key2": "4KwUJYjqFiDT6XwJTm6gWxYZdk5asQXfgTPKePxB2bZLJeGVWcpf1fJA9Q13vLKbkwZKLF5TxAHEXRiwYND1gQhj",
  "key3": "21sbST7QK65p68mZXLHcVatmKnPxDb5mpQyAQhMz23qMrD5q14cMcTFQ4kQmkjXewxUejwAebJqy6QJC8MCtRRM7",
  "key4": "5r6s596jh5YS4NQu6RFMNocUp4WNb9X3U1pYZnrFtFcHKnaRA3nggJvdVTjLhLWXrbvZVSaSBt9QRWWSCJveS2uX",
  "key5": "2AhDwFyiYADdwwd2PGDjHoyTNna2oVXZaU31YpoppDzVTLBZiHW916ZC7JR15CTvGFFEHCiyKnMnbYGqnYTPDpie",
  "key6": "5PXYNG1wWPUqU7LEM57aweKNUQrGZWuu9Pe8CCdLpsZ7wEhSZPG7LYm2j9MYwuSWU8zefN95s5UKgcfELqe3ssff",
  "key7": "44seJqTJ9fi7UpStUiHV9odMNXvJHZjiNLuKL3EvQWeBapbLSh1hcViW3vhvuotN7fWgUyfLaTukis3sqYQ9iSq",
  "key8": "5NkKwp7vgfc5LLssnjMLhjEzquXuHZNR7bjL3Jv4uQDeMbBWThy8Jwt5gn1ashnhxrVFyfYRUra5Q3wM68Vryg3y",
  "key9": "W9HsUBNgzvTKfyd599XRFcqyTFi59vSHuXkVu9973if8JTj8LvrqpsDm9zT3ejGyRH1Yntgy9kmAK9Ry7b1oqNP",
  "key10": "41SragqxsQat12qmnTBPoR5vV7C1TZaMaqRwPVdZC5zfkPVusgqtv7yUGg3j3dmRW5V68zR7tpU562sktvitDjby",
  "key11": "2pT4TtvUksWvtqvYYoKC2wAPsTemGmkVaQMcYTmjdeu9wjeVqQ3ajcS2itbmCRFRQEjYuaneCmPXLTR6X2iGoM3n",
  "key12": "63a44RWZq7nNSSdKoh8Xc1kGXs39PP4GfyBFMGLz1sXDvm4M5xM2H4jh4dLuu9Ebsgp1Tdd18JrUAz4b7bNQ124m",
  "key13": "NyYLbdgxn9MXgLNwp1XhaHYx7eHhomDoyLwzUkPt31KGHNvTNuA3ahAHVnkuxf8nDXsRVDgh5CNDJd7eGkvvnNH",
  "key14": "3y4aYSgzgrWzPjSjzJwZEeKepYkjmsMxf7wC3mLUsxjzh2s7MxxGTrF4PqPX51jvCwm3wF9v2ys8TJ2FJW4P8wKs",
  "key15": "4fnKD5sk7TPBxWpWvWTyVdfk7dxppc1cpXeqxyuyzvKNnU6LWzeBvmN3vZzhdDEQEYrXaQgxzenSdufP1bg47K92",
  "key16": "NipfByJVLtGfjEVy2yEd37eKxqyqLrbu7wD69ngLtxzRGDKtiXWQSGi41LLZFKttLHkYpS6QY34iaeie3DjyzfH",
  "key17": "5vHSrKqmJWwqBdvrNuYaGgeWsDoqikfpLqG86DhMjhgNs9GWiKZzoiQr1KNRgmSs3vunXpom5kJJC2KmXugePWN2",
  "key18": "24o6BFJd4MzyXALVXGw8YNK5rgftz3xbE7PYKU53aT3ccG86o5Eh39GLX8VGDHH8qmaJQmSL7VQYGSYprgKZraEi",
  "key19": "4e37YynV2vAEQHAeRB2F7RRcRyRp6nnCdf2auJor4UEaLEBudzHhYrjD7fCfyorWhUJfeFiYtQoegzc7j8rP6vVX",
  "key20": "AGFJ3U8Cm8Najk7sYwo9AZrdUbLvbgHjLPaJfXjZ6GLKjAURBoEKot8taLDhEzUZA2vqi5sBNQt5U8zYT7r94Kf",
  "key21": "3xmLcGRjUCKSJkoB2TX4jz4MDPBa9BZGH8FnMZgDeQV7zWbfM68JsV6ZXjNEACrgWbaazL4oK9T8nokiPdKCpcip",
  "key22": "4zHY2xWGpEKYQUft4Wb2eMaHhcGjDftm9xWRoM4i93GhqCgtfGDJkVdNpGCmhtWqH7exYYHx4QVnxRw8Cdv8Yuk7",
  "key23": "231v79Ne35dMMs6egEdQg9xkYRUrp8rUzk7R44ejp4BmkduHygkyzm5CQgpfWYKumhTDqSPD2SU9hhhjSngk1Xe7",
  "key24": "2FFDESy6qGDN7Px5DS6kCNDCsDFzxmFUPFPRSNYdsXLZJHb42R75m3akcsBaGheynkDwJWerFMqRt88hWWBgFbKc",
  "key25": "jdqgWzWocoWe1dXNmDapedn3y2Na1SBhaJFrvqHyEeXeVK1GLbQvquXByJFeHJMFffH4uBMe22jBWZEh8DfpXW3",
  "key26": "jD4U65Q75j9wwdXKgMYxubJhDNqfVNVbAssDX55aWuPpDD8L75qdVWksMxfSsw7Rnvpf95CLHHkooRPEnkXucsn",
  "key27": "4CDApSQYhbm93zP3eEUG1yBRHfaGaMNowxk3hEDDjsVBPas3fpdHjpTSZyUYfVQx6bUExDDhooy41d2s5FPrYcwk",
  "key28": "h7dDLDg8VwWPCMFrd3TrALB5RJAZB1h2szmKkQTzKREBGnfhbvXBfcEynecEyzerRCC3nNpj2L8y2c4Suk7RB1s",
  "key29": "3j9guDcoouZLrLedN4fHciYtuzNA6mExYsWgxg2fcaXhE85y3zn7pVHrwYpvhpuSKAAuW4aNvjghRXnkwbLyRsPN",
  "key30": "2feRdhofvV2Xg7Lw53dgNPcCqLUfjTox7u62YD2KHwZuR4nskRxciaNCjWh4oi9ZMNVRBnuvmRYXZ4Vn5cX1T8Tu",
  "key31": "3G2ZAf576wLNJoMqpTf8aSuSQVt4uoxSXCveMWv8r3Yg4mKNhoVkAAFre9Yzues29ZENDmtTXoKLR52ZCfaWRv2c",
  "key32": "2V2NmUtgeMzuJJCgBsU2iCKhXCKy8aQDvWAhnWVjxmekQ3mio3bwWH2h8Lt3fWW3VVtzH2jFxxQGjsC9dDgnThDw",
  "key33": "3hKHzpsgF27uMuSPnfo2csvbkSdKWMojixuGWifFQLQZA4S2kuEXLWdZQS3QyGWm6jejXEkC2jxv98KS19dHutyS",
  "key34": "3GnUG2V4bSPCkGieeug3MkrpwycPoztTqLeEbgpMpeMvZNC6fqgAeXTh9yKKpc6WJfo2qgJWcLsYSkm2BzNUJZhy",
  "key35": "5gH433nJZKP45h3MpZvxh6Ka11pXnavSnPHsb8Vjfq9SDL8NhbxNrghczHZhYunXss9mMpTfazM6TB8c1wBeTRe7",
  "key36": "4xsixXPKKnwZxuaMvCL2CZi3XanVjGkbue4gfJfgSdGchScNqYHfKcvYfpmbKQgDh56c71HaTF7RWZ6BNw8s2M9M",
  "key37": "5wjG567TAGbZMjDACkYKaMTeQPeq8FhcmFNP93W4hDZMBv2fyhSCs4CSGKoFCAQtggdxxYpzmfS2xS2zX8XrbxWf",
  "key38": "41SSj9RaFnHQm2Pp8UH4oJ4ZpyKR3K7SsFJbWfH7VQT7SrLk9ZGtKwqZ4ofGPrB9fQR3GCpwHo5MpKSA3LfhLz8C",
  "key39": "pVwdVajJncxfLL6V3xXQdycXmdb8ko4PKfHSEZpv5MyRqzF71ss6BybHJXrZbGmegUKgpiECYSmaffhhzKnrFGE",
  "key40": "3BkYv4iEghXkVtYS2ZxEQMnnAU3Y9sbvrzuKj3szwr5SYKQ2Uyv3KFv1MsZwgZ5f3qFHdYDktPqbMfUz6fvYL7A1",
  "key41": "4APWjwqD6chdkeojyhBNTYaiQreTaiXiANCLHoEKRpyrN4tfeeFyh2LMnZAFP2mpfZZCGfw4hQDmHVeRN8T8i6c"
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
