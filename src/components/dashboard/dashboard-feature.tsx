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
    "4uF7YSGNMixKh2RgjxP5XLDvMPzsxwmb4dn8bkdGr9WvEMPxCRpFGDHTynbEQP62okeYqksjr2Xiw3TNNHrvUncP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65HJGD4PfpprcK4KEppSys7RcULbWsdZP2QwSHAaXtADKznBPJSisi6Qm2N9rx2YQEjYuneB2o7kTpYos9SPhHeK",
  "key1": "jrLFRP4XZ7PZHbxC9sTEZfiCgRdJRyyUfBKnPh49LTbiLq46RyLGd5ug3dXKQqLSmrYcDoDUbcMedrCbsZ2Z2nq",
  "key2": "442TfM4mtZ92h6WRbiAVXKpGvJetYCouSMJv4a5fme16m4MHh9ZneVQdNBX8rJyPCubiv4pRr1Dwu77GHbMXdYFR",
  "key3": "3ctdjqwxA29Nqxw5sGyzNZxFs6UVupo13DumPcUKwTbpatUbybq87ZRwzN8TH8RyDXpeGBtszEFKFNxbcEvG7yv9",
  "key4": "jXzLuRKJTogxTbefQreRJPHS2RHF5Ukhep1kt2MKZxvxoFUJL6nKCZXrbwXjBvutCCtZMUkg2j4SX7fd2Gumcvk",
  "key5": "4pi9YAH5Kh7eG3GkEKAmcDfH9Pm3WNGbeucd9QiTjhZWWZTKXZjFSLy7Vh6PEAG8yEE57DSdYbxzw5636pnRSar1",
  "key6": "4s7Ba3uQinA132umurPTyR53Mhn9GEdbHGumGaY7TcYiBAVaviVqY6kokrFvoS29dipeeF8Np6YvzPFe5a1hRRpn",
  "key7": "49DpV4CyGu3chxoMxD1bomN4zujrDmxFyVE5JaHNcMXQw2o36QQa6NF14KUUHo4Y97CbhS7xnAsiSBLeWTMjoZP1",
  "key8": "2G85kQ92osNwXqSRtfV9PGsyb9TdkBtspkijGULcdGf9r9qLDU5hBki2VFq89RdDGwa7MYi5aP66BYCjZ8FCBBF2",
  "key9": "2x97PE81xBfRzGiRDdKyXDTyxxMviSqNhZVwCiuppoHbX6uCPrZcypfvB5CPtQZGXkLxF3vPYUmrpaekC1etcm3R",
  "key10": "2FEmDytWwf6UwtW6tYNXsF115UbeHWtfEgvAHpa4UJbm64Vqpi2ydMyHhSpgB4qKjCwJSEncjuY6ytwYA8wpohGe",
  "key11": "npee46h1yPhBYi3wFodc3XzaxAMn1ZhYwNfSky6eG66hgcKk9rP17debGuSnnvCm7rC7HkYxiQ57TeMhnxujRht",
  "key12": "5CJj4QsZjxCxXb1CFqcn5dcsQKx8K1vmh91rHEbhTF4PiUA9CyiCm7mGjgFz5NA24mBh4tV6rEihPwTwm5nfVTF",
  "key13": "4yTtj8TW397YziZFEMUHBbcoaG86Jy3RTipGPxqLoLwTesdey6s9kBZyaBBuA8gXD1qGti2To8ijJjwZ4RQjP4P7",
  "key14": "5gys4DsrChT9soXj7eRLd325AYZmfGGGVAmstqTm2sqXQ62gLdbeCYXqeMK73Se61Cuh6kEkiosRmEZQHoUraf3R",
  "key15": "2p2BR3uqrfgNKAgET1Se554qiSun2TrePKAVtPSkxushzs8DSnbGVBwcHGDdiqbm6rvomhDLmHhvMgYSLDAQU1wd",
  "key16": "inLhNDu1XLbFBHk7tFdsoqzeNALRqWzGx34ZBdc2tRPE4AZQ9dwKgPiMdUUuwPJDs4MRF7FkXfYPZdH8QtXfyh9",
  "key17": "5wWKoorrk58nANuYhKu2puqdAU8jJzKf9jEnJBp7kXC47LTrKHQw7siKuDuSHwkqRNMbL5tQsq3dpyhcRRdbc9oc",
  "key18": "2ACEVSaFxYtJP4vfUj8dwvw9BoxECazKhrFtKKMrXvtNc2DUzxi1km25atCz3z2Q5xTVka4vM2FvXdDiHruXqda6",
  "key19": "2XWQdbPZtRrA8AYK3MoYCP5kkhqtKrV1UTn5uxP6nQnnBZvjAgW9VZLNG6GZU2cR79B2bk6uD2TwhK1RWvxoBYnh",
  "key20": "r5sZGudxZXMZZX7LzwFXife7UrdecHBAYRXXTYkz87PZF2QnM2jjEXF1GPizDfYy7dF9CReFgmhvKnZECFZQKAX",
  "key21": "2FcmBFdruwV5Grk269ddD3gKCG8sNA7EdeksffU4TooLESF8u6bUjafBAACoy3MiXta1tMd6JC97eRQg8nrKiUJK",
  "key22": "GEqUZCx5DDa2P9sheDGhMTttxDUK79iwGkHzxFeF16coBYQPBed6QsRvVfKzkan8RtHWun4G3vQnjB7M5PecvPN",
  "key23": "3X5vZ84CxVoKZXTDXZRZNtRvcXTAenharRiSxNrLcoZz4K6yKeVQkLtN3L19YNjR68dY3zb6V5crfauKKF5XCqYm",
  "key24": "4D1Yu96s3fKykiEPbHB9fSK7C4usjEjSDX9pBwyvKJHws4U7GGXMwkyo5SgAhJoUeHhTVxWrJr8ta5TUmbAaKvy9",
  "key25": "625KGucrprnNkAjgKQnteYWAQRETHGHcchebBxJ3u3YRbP1WdievbGdeop8mGuXMPbiUb1ocKKYuSehs9sCaUdQj",
  "key26": "4L8aVZUMfLn4ZNvpPPiV84Rs56gmGt5MD3BqFrF1ZuYz8xXKRup6YFRxPQaKkR3u5tKc1tnuZjBjNEM4bKPNDKKK",
  "key27": "2mau4eUoATHn9CZs3beC27s5LLA9kRQtb3NvXETEiQeC6idBPrAjUYiV3Dt9QvzY1f8oUWcRTP5ywNSHnSjdpuA6",
  "key28": "4KUHXxQ4FimkgH6QUHvsvjynuHSXdUrGaY9Eve17Vu7xEX8RfFA3KzwaRZxyrtPRmDbqbhGXs6hSwtgHS374RrWy",
  "key29": "AQUvsB9yMYAqcuQjhU4hqdHR4mTqDAeduworH4qPsaeyBDNz3jzcqABd3wBSDxXZTr4RNMFV5qsb3byXsJ6158F",
  "key30": "4wHAiRYz68fDqc47cqZJav5eoQRuymhZLhHC2aV18VQfXZpTgHRYnW2zoBSnCjp7fYezhixy2QzyzNujc4L3tbz8",
  "key31": "st9k635YjpVQDjox1X6LvE5t8Bdk4T8dPVmKqysua3eEx8JksMbUGHsDHpqGPk5M9DZk29DZ9xK8mJns2z8nqNg",
  "key32": "2T9eKdJWeNoYho1mBssGmRKjFRyvV2rdJUJhM5o2mWjQiGojR3hFYCmyHwv9Zi4zTeWzhUWbtFtYCNaLmW6MkLJ9",
  "key33": "4bLXz2EFdWdvbLqJbZ7i9Ra2tBKXpaQEsgyxT3PtrH7Lntf8DzB7gPPAuZWL5n9h6Xy2vqw4ot44bvM6Qt1Uv55z",
  "key34": "gXJwUGUzERNjm3Qe1kan548qCKqsz6ZPcDkVCfB3Br8pxykm39Rzc8ZSdCV1DJsrqivptr4H6F3FEb7jVveyd8r",
  "key35": "3UwVpnLXpgqFhfkAHThrFrPQFWzGTBVakxpD2VXKcRhXjUcbW2yHK5dx99tCmgJZ1AwKm2t4aAAqaLo8yqsSyVPE",
  "key36": "ALXc3FQPyGf5gcoMVrRGRBnKbUyoEYgTJ5AJ14DEXLwKY6thnANPFikGyThubguEQy65yxQLXWahFZRURaVP11o",
  "key37": "3LX9x1iBvAAJJnfAtUexMAMtDhe15hYFKRvPrweoqS36Bo4amQoyRAbaeCTV5kdYJZD66BaugGukJxkQ8PFvCGFq",
  "key38": "4ddPKcr5jHT19jzMH4po82x3nzADV2g8dy1iUuh7HY5Sr7x3nfVE8n93obp61jZAopKKqzjbVSDxPVp6ULp42XLW",
  "key39": "3C5zdkGhEd2mtXvwEYeWPKs9bAnAFJQWDxyYHLsBUGZmLrvdHSyLXytkvy7PPKrzGmYktyXuWKRPfsR7W7uiFFAT",
  "key40": "2hKNeAT2bHn1ZtVe7NwrBSdrB8yTX2wsdKwo7ttPMGYX6hhhY92PAxgQmQFwYYTDuA1VViRtuSsLnn4GwaZ7JFtw",
  "key41": "NhuarFUYzQixw6R3HDhvHdvj66WgTA9VPyNictsL6oLpFeQZhhM17y3r3YLWruJFJrVKx82zUPfXb6euQnaRKYd"
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
