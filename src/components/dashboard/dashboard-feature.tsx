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
    "4BBzLM6aSzX9vJ3rjaHUU9sVvzp4f57WovaY2jz882CSCNzsgZaWfWfeuwTXt3RKSgA7sEVoR2hd2VLKfMiB1AFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JuU1N4CM3XJydT8ye7FJuzHgru9UjjsCsxEmAwEtfB87BBDCtTJHcwgbgUrA5VTCuyyMwTtRvNHFGiaid8fL9Le",
  "key1": "4NgRrrs16eD4ELMF2GtSGe6GY2iXw8qjoZ4wNtJHyFSFkQxu6nyiNtNiKnkXy1ai61KYxKhcjR9rth1TrSBvewAW",
  "key2": "2mxudZ7F2j5FnyAtDknm5GjkdwfxLhZWi6TiSUNPkexLsoA37y83uuks7LQ7DbMrYtTYBU3aucVvhHb6Kw9iVBhH",
  "key3": "DD6UssszSAepRdBqTMm3muDoDY5pWk5BKybXfQwkFfeib2vktLAj8Dak7zsHvQs2Fiew5hZP6o7vMFMKes9FdSx",
  "key4": "RxSWxDP1eJRRCeET3j2GChTwRfYQkJLYd9Qa96nY1DH3jNAuvDrBD4djEAtocWKeupYfYxHh2LtP8iPfzJGAjyG",
  "key5": "5JXB2noUfeb47BKhGqieQZySi7HAmwbaN7awgeXttGBnqfbsEB4jdC2C6n2vAZUaHeGNWcCNYLip6Djk2VwtX1sS",
  "key6": "iAZhHzrEigDnYxkNNXXpVTnnqBUXaqXByLKJmkWThsY9up8S7VEei2CQeweNizcJL4st3WjEgyhNLqSZ5nxjpTE",
  "key7": "2otGTBcgBVuzZqEMhiknG7Enyqy9xZyoTfmNW8UqJ8qn3nfYkwHNTQ2RiVHwqoCQW9Ks4zpK56jaX7aWJZzuamK6",
  "key8": "5sq8TFqr1nwAxtWhKiW7tKHMeQFjSpKcryFbYv2NGGwkYFx7Crwb13jqvz34G1pv1DMcEb9xbZTbxNw21imi3FKT",
  "key9": "3tdiDorqPeZw8qeEneSSvTf2611mgQCGjrSaGYwjC462nAGo2vzaAH4GTTxg5riTpDTbuBrkicZBWH35RtH6LDS4",
  "key10": "2mhcQtMbQixtbnWNUBkytvh4Sphgv757KggnyZpJCySRRQzNmcn5XeZvLt8vXrVwGAjEtLcf4EMSwuSm1zgFYYof",
  "key11": "5cZu37Nk1WR9f28pfHCCafYanjAPyYMua1cF46VRUretwnikzqBorUao88JxZf2NTFCrM3A7kQB5qLNqduxy2oFU",
  "key12": "5P5hfZe1S5VNqV5cEjxDqTzWibAoSVEEHPrXSuQsXRS2KYBxMyzyvbj3pHbEVG3Wyj65du5PuLb1Xz9gw78CxghG",
  "key13": "5bjrCAfFUgTYu2LBDJyxsLms5YcHzNysaFZ7NG35e7wpeyFEb4WfJRkde9jwLHcZwTKHzz9euz2GKbjbzBFwjgt9",
  "key14": "3NhgGUYnQoGvn2DbbnJgReYwB6paJSx1Fa8ybscJ1XQM2RxLmUZuDBgUMRZSLFmzHA5ZgqyhJZLF19LKY7FMRpxD",
  "key15": "2JXa7S8yR89Sissyt3BSDNzSnGroJovXfN8FqUabJEDNRjgiKyR2xeHxFmmEScA7n5p184FchaM3TDfxiasaGvBY",
  "key16": "46b5j7jMuaGR5bQzhYyhkjDJED6WndssxrTeyPsJDoPgnTg76Su9gxSNXt7KckbGvNKYj6Z4HJ2u9C9cErwDkwfV",
  "key17": "5wc8xyZAYdkWev8pKT7LmhdvUJgvWn8DrRSvS1w57vrvqo7b5Pf8pJJsTwUMNLEXLUg6esVPbmLmVrZfk1NvQ9SZ",
  "key18": "3v3nhWFL5qVkd9DHvsprud5ADuQjtBqjUzwmwRosi5uFxpt5xcWCToVZmCSzT8UtHrNDKfmw7UYaMYpd8fnh5eUF",
  "key19": "5HBRkpP6SHzDfSiUEGDzhMSgtAcdwsJkEAor51Bf8kSg4Wy2DZxXmscdUFzdC4di6wybiNEeY8yMLKABtGxQrpMC",
  "key20": "sTP26oXrMyui32VtfEwCzfQCG5cdviRrQ2bLEimQA9U6n1ezq4cg7ZZAEt27uzPgJUSfjK7jkbHL55yB9FQDuc9",
  "key21": "3v4yizc2nryiWrjBpFuqchcVNgpMn2ERs3z6Mtg1pyVGDQQ4PoaJq4tZfzoECB8qTfW2uGzjdwuAS3ty6j8ndD8E",
  "key22": "3xKtdJYrVBZnsKq4gvunSALCXKQDLDrE13vk8WcBpFHMju3LULNnaRAGM7nXQ2ez7PZedz7dGVrrDwDvbTsJhPCV",
  "key23": "3bdA59gqurRRGdNyy7Nbd927ccGCmmr4MCBbjUud8wR9xNboirRsVHKwFmxSLfNootAecSFGi3WxTPDrSzYew2x9",
  "key24": "3phTK4L4s7P44w4FD3Dpw6zP6Y7QmKgSJrkT9oXL8TCB7XEgefA2xMLSaK7hjB3TodkmaTieTsTLfgtLcuv9Q9Vh",
  "key25": "5vv7VDeMofyNWPg2v3HTnsczg5nVkg7tXhTQ9GaeKfvNnQn6MwLmDMWfv6ZmHrxsT8pZh49e1veoUz5pdDo3TB7Q",
  "key26": "5SCL4w2Gtsh15WPhEjHSbvVRTdPsDWaa3ZKx1qEvPN1XPeHJRwGRMPMZgPNdZLPoD27RUwFFcfY7zPs7euBVznXT",
  "key27": "gwt7LDqPUE1dp4RTVbWEMCrDaDrJwALNGq5868kAji8YjY1WygH6Wz5kXzM8xhACahA2Qksj23iBjsfqGR2rigS",
  "key28": "4kEjgeZwAakRNrsYJCXBaoahycqfXbMBKA3TH8jZdHhtqvgn6h5iBqAxzAGdQZPA6xHHTb55nPWPxDEWHSc8jLBG",
  "key29": "2W7aCWuKCof84Dmv6W9PJyGoE2pMoVB47dkXJ6FiehxKzXicZ3evUhXPq1wBCL2JEVGUT4c1LPb3p6AJEZHb6EVK"
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
