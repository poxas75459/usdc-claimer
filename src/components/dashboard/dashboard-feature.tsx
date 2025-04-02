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
    "22SRaCTDzJi7F5qhN7gZzGWtCvtRVx5GUaNXuQTFzchGWPBL5y4HCLmwF8FLLhvfxrMVzma8jK8Rq6ZjjEUwqAQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57959dEG6indHcAYkPm1xMSKC8LPogPByyoAgiXYvwKF8s82adW2k6amt9W9a5y84r3d1ECW3exJQkyxjV1gZufY",
  "key1": "4P2TPzBt7NDpB2bM597sdZYWfLMvXYX424zqYDpnxtF2po4s3JdZscgSkTcgWJB7Xt274xB94Rg3K5zJsEZiNKcz",
  "key2": "2r412wukuwbbeDaDsN8CrYiysfZ4zofB2f7f3cZwmS3NR2fzKasVtqVNchfkCG2EJc2dfViTPcB2knERpaA119c6",
  "key3": "5VVJFBzLSds5mHjHeKFADSuv9bSpsiLeq8cxfcbnU1tsnE3PxUjTbnj5Y7esrUxsUC4jumxZd7hyBfZMkk6Fvh2n",
  "key4": "rZmzWc9fEDxXgvnFx14F5whjXs8uv3uJhJnKibbkVhcgZkp3BRNBYKAEn2jMr7zoghJWkbJ6w3GvKU5iWMZb3RZ",
  "key5": "2vKpGGkEDQsegXPwVwJSz2eKJYCz77i4yF7ao24oEiQgeYqV4dFE1AWM2Vwix72eZm6J2GwLrTuNLJ4Vf7KsGpTS",
  "key6": "26wxvdAR5WjHuwNr7XGdMNze8CS6Yz6i1RrPM8RNbz6GjdiGW5PpjHHyPvwGaxneQuBC32UgpvVa5GJ3Cdd6PeoR",
  "key7": "4eSVohWNTWUG126G9kLpj2fbcnSH6v2WmiRgVVKL6E13WNmu1BdLSdvXDqPJTm6aravCCK1i89KzVnbTgNX7wuEU",
  "key8": "5ymSjH8oqvAYtv2ZTBaz6XPTke9bwTn23xwKkh4LkpkwU3TFWadrhd6oCbSqtHLZ2CRhvgp21pAGoQT8JAipu6UT",
  "key9": "3Rh7nQD7BmLFt8tr6PPB5pCn7YP3KoYSMAL5SYaVR1qPvMHMCMdG73LucwbfTQHH5g8NbqdMqUdV3NZAS56RnAsY",
  "key10": "2xefkfN4CYZdFuQ9tiLZ6ypgC23DStsgfqZqbVcZPBWvzVLnouQVz4XPNgSYXsRpAbS26yxRn9nqB4P2bVdcnwL6",
  "key11": "5zoEWYwJP3FksLcrNqZt6t2iQCLgPdYH69bs5rxjUXpQCtcUixZYh3YkuQKFjJMm9x2ZPcqRv431wxx8nwNWdWuC",
  "key12": "3c4CeZ78U2W6YoWVUwVVUgUhkcbCgyLK1FSUm7LVPHNX5135eer2T9mH5BCRjsSNDrv46ePj9ciXwZAFRA57mArY",
  "key13": "5vcPdK3JP6PoQLrX89FyFxWGSYxTg5Pgb7vyjHyYUvKeiGsK4TdwFGEqiEBRQLAmEeT6LLg4cmBnqtj6U1HZZxCx",
  "key14": "3bgSSa4qMxAYMBTBmc2UooRb3nbsmadqx7KhYV7XdbsvqamjEd1HWY6A8yBex88JD4Uqv2Gt4JdcEGSZqRxtma2d",
  "key15": "5m4eQSEN58RvuopMjeU1fKtrCNXW5cks2z9ZzrDTHCMMCVybSZqDp3rC9ydJ63zpj7eUDNNoXgJLUfGioW7nvuMW",
  "key16": "2opiBcgGRxvN8sYkcfAJrnwKcStKFZxUM9PvB2mMsX2sMgWVqcFCVzNokkZuP7PvPhuCwYhNX2ehCc2DYdqGA1cR",
  "key17": "B5AuCSmHwYKXQwDcDi9j39xQUoFWG5s7AFTu1hNuWehed56EZaFydsXpeLGUYYdoNix5DyHn83cavAbfyqYW1sK",
  "key18": "i4ttYcfrMj6MnR8wWfZbbiT3ZbLSuoJvHJp5PMHoJxjM4aqs6LZA9fQip6NPvkuXoYEY7M4ifrjc4Ahk72kxgLX",
  "key19": "2EW6azd9dge4DygUWdp6gcpLVLGkgdXgDwaHkL375veKHWqmKssYvN29EYkNzwGqHTsdorwpzGXvS2CMAmkDTfMY",
  "key20": "61VH1R39brwV6Rbk4AUhUxPmoCwEF7osAcYGCZbavZA3G5qzKjCGf7TQoAhSW7jJMooJcxK4bnxwQkrqfT19RJnj",
  "key21": "35F62cnVa4LxXNEK7phUttV95E9fJDK9kM2DFwJrLHRgffVNhpRU7cLXSDkrKoqihuYxNyUVXLrtodcefELxWBjF",
  "key22": "4w96AVTFwvxcxFb1KeQjwPNf5jM5xrreNvoA8Dwk9j83nZ15NMjmcLvvwjgXao5SXt6vn6twjasUKnnnUeZN7Afu",
  "key23": "3RUpyvq5gs9CjDPDnKWqLrhZt416iCQBFk15ehmCktL8GHXdMbE5RPo3HRDfeCouZPmrapruu8uyqYe5w1hQLRkL",
  "key24": "2wNRcUK3F56Cgs4n47GVw9WLf7aw9ENYcBSp4WNDMQtG8B1H6CPY43dKr9FCfhaKWjDqAQLxYjgaKezF268qMJq8",
  "key25": "3BEcnqVqPMZyZyGUQVfj1fvptPkutpnLbbKz1kbiA9QeuHprNd5P8DE9gQ1FQygEaA8h7igeEnDGSR9doAMizCMv",
  "key26": "5YVg1i9jnui7PjygxbLSPNp1SikcyitQRZr4FkaGZkBvDUUXQDyEtKW4UirZPJAjEurPTxkNRxGvskCrN1faVjy5",
  "key27": "5fewMmGRapepaFcRYkWP7UPgC2M6bMUgR5TuF974e61CFcjyFnjGANYEyzfrbFYXimhxftieHqQc5QPDs7h3A2gd",
  "key28": "4kmFg9Sthb4QZM5jW8DHijgQhnwabke1ptZrczfrbNKatsQAqxXMgSS2Hct3UmfLhFRSxUxEUrMXQBQ3rbNYCbwj",
  "key29": "MbjqkQzZxET44Apsq2NZiNJqdK1tvPB6MRzEQfCMiN1rNraCzW42QuTZmyhCh9EbXKHLu9KhEvPRbJNXuJaBajf",
  "key30": "2Msx11UU9ty5imMTiYehvfrqx9Q77jxiT4hhxiyhJ8jjMJuHYLJTsE4JPrT3HGpQrFjNRpZRpN1YUYokMqhUwaXF",
  "key31": "9kJvsEFoPeQ5exnc9YpMkMgWmB8ADut2NoVjzoSemWXagEPMtNCB7PFuq4eYmyWAMHKiDHnVE6gNC9EGo95zD5T",
  "key32": "57jnmZ39Kj3Gidiyu2LayNGC8qSxQqxpJztHS78bd9BWhXTmeGJUy1PvLbXv1k9VwA5WE5baRQnKCkE1YAV7dd5D",
  "key33": "39Dxqj9rmou9n7y4n76MDafkrEt1JS4nCtH2LpVkET3gfou134jn4N26yhz19JpQ1jnznj4ECJAwmN7EjuXZx8b",
  "key34": "Vci34t1j8NwzW5ehxJsaQceYqrbStM9e5TgZxf6TRnyghkeE2a95oXCVVRqkERn1WHYo7a9T7QFDtC7n2Wz1JKv",
  "key35": "4SCUiU9ncQqR9UoDKsm5jQR1jGGq835KWtEs1Tw326nJHCxCupoaHf5uZnXjPNvUYtZFv8zxLjQChLhKgGuDzFTz"
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
