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
    "6RUmALt3kSeHVM7rB4T9yY2h5JY1QGUNPhRaZzUgfvJgiw3gdxMZEgRZPdrp99sYQrscsHrkxUyscHeXDetJXaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ePEw1EXjxjm3NW3rc8qCg63VvAVfQ5TrG3Ld9wy6DUnXi6NdPmawP7u1kLVuR3bsf292shbeB24V3YqEdqfFnvU",
  "key1": "j8ph6DLc8uuMq7xgC9t1HgXwQaxroBRbPhKNnoSPg5C3jyRbhgUfNxKyPsi1vgbbR3i41vrHmEjxzynxBuXiUZh",
  "key2": "3WDjngvPwHx8TrvKCTxW4e38BXawRA4U4ZGEzjRWoFMzwVRbzgTcJKLJf1WhfTQrgAyBJY62iqjYWnt7KHZfcHv8",
  "key3": "s5hZa1YKjC9gPt72CJuTxp45zLMru9yQstWMrt2XNzLxkkHY6PvuF7VaDnfZv9aPjN1YoDgE2gUduogkCUVTQXz",
  "key4": "4o9Ngnif4wmXFsNuQ9fLZE9HK76Pyp8vzoduPEBL8YFA5dnj7HGctWFVi5xWCL5LfWMJBgBsnSGAfN5E7BcHqWNe",
  "key5": "3zVRsrx34QrbGd6XN634YGLRkBh3zE7USGBmf5y1cXYVK1QXWrpLkXMDk4daL8HQArEwfeVamZ4rn7WYPgSo7Ucv",
  "key6": "2CgM5SPKn5cRbuXest6nvBkqZDzfRwrEXc794pBqRaLf1Gzbt2SVPVbQ239L74pNGWP3V212i8nqmW8nuFpY3uzh",
  "key7": "xM6aus3Uy2PrCacTAzuXgQ3RmSRHr8jTGiiibeDPQZQuR289WtLqFRZ8xxnq3LjDSVLZnNUt8bukwXzVCuoc11C",
  "key8": "53oG6tUnJyQ78uCafkmN3UuXQKvkuoy4SYJySfXTjoYx2vZatE6AjrRYvzV1uTutNGWYCocNPPbacdnsNNhS7hbX",
  "key9": "2B6vuF674Ye8XrroqG9EyvjyRFXMhrsFaWWfEr7Rk9R3kQDmjSCZnRj33NKqP8Wgvrc1VKxtyRyAcncnJcZzmYVv",
  "key10": "2vrufvFfySqPtH2BZYwyyuJpC9d24FsJo3XPDT8oRTFWFozD9eF7zCTFzNvBp5ioF7E5UGtu8Sxuc5mNbDj41dFi",
  "key11": "ftKK1BNKEApzAAU5mYvszpbxXsXLrvkVNKmCZzcxSBjEL3izxKa3BqDG2SQkgmDTtCzWhvNy3rZipSdpzuMcSzv",
  "key12": "5XsVZgLgQzJ1A3nh5kbRxWZGcLKQ6pNHLEKCuKwJoavJVFW9GTj82LVi8R5QcdE9zgq7Sd8tNEmm4fpWYfU8231j",
  "key13": "3wv842PSqaXqWPuZxa7TMx2dGwfKRn1tVKNR79CEEa86AZYihew3qyaQvBFXoDZ7qcUBtXATucrGnuAsASxDqWcs",
  "key14": "2ghYVghHoQynwJG97TejTACN15etEdmMHyrUq72aVjqo5dTM6f2rgyjV7LqpiFAtZYQSFivkKiWx761GxDE2Wc5E",
  "key15": "2Dm2JN1gngsmScaH1Xo8iSYyRfBg4C4LzoPSyevahUgmDKJazPzNRfbS6od25ULZ3bjsq4nTbjbTWozHeQ8o9spd",
  "key16": "8rNFYQjYpCBPP9A7YZHKWuhH2o4oAb5yWmUT1RaQbiVgNtbRaZzgGeSUQFUWcGqquWVLCQP5faTa33XzqmMEscc",
  "key17": "5g3vPPuUoevVyevLyGCiRkYwUQYsLYGUAx7rUqrbKVRUp3LwuGeUjQvemSHCj7JF48J7ao3QPawBLsPtfSvEDqv5",
  "key18": "3w4ULoBBDpKmARh8neFPYeCmEAfrtcco9X4fEhzH4b9vE4ddgX4ebCakQ4tKS9juUWAknKYc5wMdXEp6XNHjxKya",
  "key19": "j42fsoj4W2BE9XksBJaAj4LDG3QdgLFUCQeQK6LWLGDWjJ4yCAXX994UYXN7pFV2Ztqx8qxsxYSksGXTUYSVdwr",
  "key20": "2UMLRjssVnWsPg4NYfkZ6VRwJKHDMCgZCcx4btPAd4daVcz2U5NuSnGmZEhrHtkLTRQtM8ZS6pjgcx1RJWSyvueo",
  "key21": "5CbVbUzyvGveg2FbRQcFyVwrP1kz57dyLqpfUBhoXpDupqNMH2optca2PVaxNGuvFLGVuCETVYCghJmyGXs68Lzk",
  "key22": "33UviZAQkLHHuVhb7HswB9vqLadYo1JBo2nmLeB3eUmtff3zLhz28nHohosS2i84uqZe4reDPB734SSrfpsMDUWj",
  "key23": "PdvVwmGLGeZTuMjbZsXSWqf7YWG2efgxhJ2SZNG71virDdrA9NssyyGeqbW884eYTmtU1iViCz2weJ79t6dRDdp",
  "key24": "48cqwMYvEygcAixfm2JjdBfGxiY3FKKJ75Ybbj6CSCAuoL8gQ2yHt19RrqfeiLHMe1XASzP6sCxaFetT4FZzD5eY",
  "key25": "2qF2kCJc1ndaRpms5ESrpwmTJKzEaYiE86hKtvE2RQMJA3romNs5zTxokVaYTFEeuzFWd7rECojWiiDmcWaTyJ6q",
  "key26": "47G2nDjrktQ8SgafteCwr3W6oQCTMpMRawE4Q7VCNCmYBUvpgyDSZZwh3VjEKEDZv4ktvZxxcVUDxEFtbNjkigcW",
  "key27": "2MJjRm2NTyhwD1R4sywTYyS9Csa347puLn5JS7MXpErcXG81AWZPx7GPbJi5iMetXZMCkaNBDN68iFUbYkkzz3eW",
  "key28": "2pgx4HoKVQBFCZSV5UZBhD21UpDa25jE2FfdxhB7gjZz7jebMPL2Y66FxNkMvkAyTsZHxPdvcKiNJxr98AXaKJf",
  "key29": "3mTaX19UArqeRnq39WP4XtRgcqDRJ35rv1iwDJngiyVLRHiGb3gzaDBHb7zLRBpbDK9DzRX88ida5NfqyxHESZ9U",
  "key30": "tu5mvng5Bbbn76H1KtTZCfzLjPPMcQ41QkeoJjY7VQYZcJCMtPn4nQ6KzDPv8ibb7LNiMuA71A3oDARfe5QermJ",
  "key31": "2j6gRjkKYARQQ1eZAUxtVnYX1HrX2mgMZFbYT8YmYpDvC5AQ8cgMwsjeCLLxSaMSevYK7NDVrm4PFcHBzs2cg9AM",
  "key32": "4Qv7sKKxNGHWGvo4mXdtS4BAvF7RNho74JULQvs7Sk96A9pUMztQQbWXGrpRmMetiqhrFQP7b9mGyQBzj5kqNKDU"
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
