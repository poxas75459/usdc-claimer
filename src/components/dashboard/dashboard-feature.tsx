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
    "4fQ35BNW7pWNnVk7riXLftJcbxiodFxJPuxEnky5FHED5iqpziDXEHYzYg9WWh1DAfyKmEGSoZyp8j9UrMUefQ1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FYgkdfrwJwPZzmZ5VMkCENtF14NZE7o89TCapvrRWYYApU2cfPnVVqtJWKTMtiS4vsQoqEjzNmoGrjven9ghUSR",
  "key1": "1recPrkyyZR5zXZSy7MZfHuveDRRKBvhkCBu6Evbz24qV6d6og8c6JwRsjcXproi4uqPRg3PFkJ7CJ3TUZnueWF",
  "key2": "3pMTENCFVTF1zzNanfXu915asAVnbF1LUkmvudEKACv36NTUQVJyPaPgzKLDrkrEh3ipy9wovbEbj9Lmpb1jJnoi",
  "key3": "3mYeApjuQpFX9fYt9oZV72KrXTPjS6cVHVpyxijNWwmwhHJeQjPkK2es6fk9sSUioC13TRv1Tp4r9QA8aiqyfwSk",
  "key4": "2H8mowvRvCwtZGxEg9QGTeZLNv4rqKrAoCzzQ1x4998Ug1HHRae7Z2NVoVSdqSnD26LNJBdX9CZJdnpzEcnzAhg6",
  "key5": "39GJd5Bt9tk1nQD4QuUTwJKcBVoxVerA8yrBJweQbiBoE2dJ2GvaJkRvm2KhqLa7XgrDukBYzyDaezRmc6gEVJUq",
  "key6": "2ycPUYSbiJffZjk8U3FcXYzTCbASUeYkE75rUuC8y3Bv3RoFm19BEtqUTLVAZnTKov3478QU8HoPx59UBQXMpQuz",
  "key7": "7vnX6V8HXJsQi5vGP7LmzUNwAEK823XayFcW1Gij5GUDnJ68EZr6QryuYnkZefnn3cAQ6jVESGWgFKVnUfM6v8a",
  "key8": "aiL7ZYmQzRMyTKsh4USYAQ7wTghoJJ2VmgVot6RhKCf8CJZq8TCqgXDSG3eZnfhGb9Fh9HwWQuCQozgqiCphmyp",
  "key9": "wYSQvcPxGcqfv2aV47z6McVaJ5RHzGiyKTGfZzj7Ro4QsXX5r3FyBftkZz7uKTKFQqH35kNWyyn48GtfhmZvdvZ",
  "key10": "5yHSizwYpi1LvgRUehmcM7drwxqEPwMCGT4N5eBpXBuLnjNakggVinYV4zPAR1iqeNiZAW9gAZGMkmxaTrKUj56s",
  "key11": "4dAkR2nMvDbd7aM5FuB1YcFW7fWYSnWyU3FNepvC2ZfmjRrTUTHsdpLuzh8DaLUCzrCd86ULwUi3hrEEFgfZ2JLP",
  "key12": "58KMV48XFFrvN5MU5vG5Z2N8kBiPcR3piMhw1ruNGem1A75m57jw3UPyFDKiRAbz661rCVH1faaEtQxXofSm9SG8",
  "key13": "2T6FUmUkX7b86ZtgUoYDTX8R4VSZAGUf7NFuW4ctTAgt9vpi6HxjJjZbg5TighT7K4Wthaw3D9ruXLy1V5ZwXJip",
  "key14": "4GT6Ro2pXsTAZ8jWTaYdtAz9FZtKZkAAFfofW3WAw4eUJ3dHCPhj2RxgEFbFkKeoyrNMmWBAhqhSJG4KrsM2Xmjf",
  "key15": "mtHQBWxagLgqN2rpjGBYGpBDXK2mgfW3rnrmg574swB5xbidbk1bqCzhwj8Dk1B8oCVizsoSPQoPephwPn94j2p",
  "key16": "4vLg6HMDCzH9wtzC9Rk4MNxe6x4SoRokBhx87y5rAPWMukck6mUoMpYm3HYeEe7erm2kAQnYbGNBV7fN4yJwDBYx",
  "key17": "5AHvMgyAhCbYwKCL97HUV3WQB4ruMromqhoocSXMbKMoQodEbwXH1eSzSPUtXCt6yKvgmUbtPwSRWdvX8g1vK5Ro",
  "key18": "3eu1EF8UHHhP2dqcN87uvtCPrNovk26jD22ibdZng3zSuibUEq6X4w5Fgx9s6xwd83ZV2fwvxgKS6BBjGa7zKjSe",
  "key19": "dq4uyscgvLSFnLH49nwRW2E2nJGHySoRvbEpkfXK5AcPBA4zSQLrWwh7ai2VyZw5NfWxoY5AVLakM1vf9QoHo9D",
  "key20": "2nDhpeYcQsVN6nt6db9vpX994yP6dwb84Mc5XWd3fU7AmW7Yk5AhdmsJmLZQFXzmKDfNRWm5jJEczUK7kJuL78Cd",
  "key21": "4VyuBhihRyZXp9NvDxwhTWfk64xxBUHt6AsbF4Sij6PQepAtC5DY8VGkaUSinvik1tYwQE12MfeE1NcDTiKbfKWe",
  "key22": "YAiWk9gukoje42wEyMD33tTVTnxmn8sJ7Y2ciZyvgGGFiBwUKvE3TnYcrTzztxNtK3GACRmSbtf32Zc8BwvaoCL",
  "key23": "3Xe5exddzC4SXF5no3HNY7rBV2GiLujnZ7vSRZ2McgLCa7GtVYkuookpMZgiCeoGCFyzjnchzkDVo6tr7GEWULiH",
  "key24": "2pmNuVKRneD7WE4kWAkcrSFJzV9hoTqVsnkmL9wZRr22xboczhab1nc1yHuGaBhKoDXPtZrcKU1ChtpUsVwYBSYe",
  "key25": "62UWePtETxztfET2mSNfrj6DYj2zvi7qEy7XtCmbPhHwoSjDf5RBidiQXxdyuyoZpSfocZ9YEK5q64Qso3Dxu9t6",
  "key26": "Wu1GKXtMe1tqAZunZcD51pyDkSKsh78dh9ZkGqdR6AHBBEo5isfbci7CJ7Fe3U3vbKiFj8PWbvGMHnC2AniHxLh",
  "key27": "5irWq6jYoe1LHDTPXkM3TRk3nwhU47xa7owQ5qVyzN7dhoRGsZ4AEVQ4f9dEKxqVFdrH2iXGf2EYjT99WoeFEwCR",
  "key28": "3bKg625zYEqSheayaYNJbomKgwBK1i7YUQiuvzAq9zcH3Zn7G6i1JD1ZT35ES8FuAykUUB6WfoEcrRory2MpQR98",
  "key29": "2nQ72vkEXNrhQpAYSUXHNi8Kxs9giadPD2kVF6RFihavdxdthmqgLqNFLJ3gf66Tnj3AKmVDfD5sbek5qMcZdKY2",
  "key30": "9W8Y9SoLcLMoo7bgBmGrbNLCDarvpjvcg9wivfj1iK9CPTS6yvY5rZTPKKgu21xFeUWRNzdffiDsVCsgoh6hAqQ",
  "key31": "3FAXDv9JvmkZWjckndSdJcBUScvZ9zMRUnRfm6zoyec2VkYihJLiRajExFqzqVyqgqNGDn4feJUkiCL1zsEkj7Mm",
  "key32": "2EJebLEgRBk9VrMjqwHZ5MescMEVVTf47pf6m58ab2sEJSyzz78AxqSo7Zttz5nVA2S5RLYgQxcWRibeQF1dv1vT",
  "key33": "4sVysKBFhjC2uUdoq53x4aijPFTnYqCEtZgrWnnHHYFYyFJY1ty6ke6pWHApakxs587eN2b9Cpnwe22Lp2sPh1z3",
  "key34": "q21wCTQY71UiGVHsNHM7WoQ5ZNDaaerjthdYDmWtsrpUdogJT511bByHmXhJBwhKAAsd5Nv79CryKtv5rkftDqQ",
  "key35": "2ASPy4xHaVg3xaLLaBSXTLgKfhdBx3k1V1kcfvhSkTvk5RZZdZhXiZm5AaBU9NazEZuzk6AD3kD83oCov6wrciyp",
  "key36": "3MfP3sCFRiaPwnYPQJvgN1SQiAWSdV5o5JzVmhzabawWmaQrrK72mnJcS8PGaVAPtwQhoAq4uotsfKUtPpUEP6XN",
  "key37": "16fsWLZE1dERFMsMwLjY7wpUbiRTS3SWkzQp7dYkU9FUjmPw6k5f5Ny7zRsbUiR4Z9x8hHTZ9383N1wjBn2G3B1",
  "key38": "FuCaHeCvTwmQufngw8eQWoRB7nqLvWAo2gks1qtVnMEYU8FfK4ajNHGEfR7S2we8cP3dVhHjm9ofYakAW3eotUh",
  "key39": "2y2c48sxgFfHsTcX7z5GNzsiNgXFjh1fU7kHJVVZB5PsTTBiYFWJo29tphW93JsyEagbkURMWvuxc5hY1DybEK3k",
  "key40": "3tyPYV5QQfhp5SVBHAyypUWzKT1qzYSQ3yK4rPrjUXdZ9CqPThPKaHaozJCHZKyVNAWRzCsQMfXyAo7AhQzWJ9Rm",
  "key41": "2wpR4mZG7Lp4fmQetC34biCvHzAcey3wpJvyhzrsoqqfoCBGVxCVgP7EdjfUxAVJsiPdh3zbtVVNqfbt51bmgYj5",
  "key42": "4QhX5dHGXY2jPmzC9Zdwg7UxcqBzn2j5FomyCA5qqg2ybRThdemiHnQbv5ovMaUZMHXRr9efHcg9CQfmkdA1BYxT",
  "key43": "3oSRFQKmHUoxaUGpGFV3nHQEVLe9AENocU8FusxeiTkUoo9171HKMHvbrVJSgoSHB19NGTvnLfpFuiJFhyMYbCGN"
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
