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
    "MFZ7jFgQ7tVn4p5h5ykvySusrSv6epXkQGWpD4b94PreUbkwocDtiYejTVkegrB6EmnBSnHSMMvhNuxhyTJ4Ftm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gmymo5AyCsP8fph7Ug89sh8RE9AYBA5zkx3UyvKSQLo97qWDVmY5iAoHsAHMQLwqkgYewxA14nBxM7vg51xSbxa",
  "key1": "4siAZzJwGa3igANcdx9t8ZnAh1QLrAJyfqm4VTdzsEWfDD1Lw7yfRREpbKwm7nthxXZLPMTq8hm8J4ycYyLE6jju",
  "key2": "4S6xoRaLLbKKK77MaXi5nd6dUzpK3YWqfQ2AUr3Y316uzunxj1DZiuAHeES5fCmDA68VQs5bdHoBBcFzV1Wg6P7Q",
  "key3": "dDbDFBSoge3CaGSToFjoJ8PvJ6ecx7iQRAuQpnLfYNkd6RkkokR5BzEDThMDERrsophHjkR8jSqQkNQzZB1YhAp",
  "key4": "25KiWTbQ52jnYotE6ypKkiKCzbfUL8PLECDDzyXdXMUno87R774rNK7KKsn94TSyATseYJfSKm89Kf5ShGGLmBrn",
  "key5": "pSaVvvv7WzG4MLfjEDCMyqbpViaJpgR46djGFeixg1YMcBKtgSEEi2JwGmHbGZz7kmTDQ4hMMLKQoLvATHWg5L2",
  "key6": "5puzmd1DUaK4sQ3x1Pq4pyApVBngHkHbVzPKtoYxTYi4ByVQRAFtXdVf1jJopbQsZGBT5WBPsMLdY2CYpYmD2SV1",
  "key7": "3QSbguTxScA5EKDevkAEn9PoMWk5vTCuv4BfNZY3yx45HQa2GrGbWE6ZwZ1n4qeyHQSp97n9eZjXkpjTf4NVoa6f",
  "key8": "37nQX3X3UyKyLAdWgnrQWUZ8gvUv7AGp3jdoz4MAVcqHfrMoLwzc7gfprrviXHfubBnG4T3rKsBm9rV6Eu2bJBPs",
  "key9": "2Zr7uMtJkwaJUksJKiXRhZXnWBzgQ468shKTJFDqtNwWnt1GXCbVHcck2RXVh1poEfq91H9fLz3gLyH6RVtwnZCp",
  "key10": "5z5aT5nKyBFv93DtUkd9EcFAZpfjBArqbDMYweXXWSwNn47uhJWh7wCbFBVzwBzEHnhTHDA4Nqov3GrnodVdMbFS",
  "key11": "55qMoKBafrQJ7VfV4QH4krBS8XKfbNuMMyU6Kkr61jVyur1KYdT25Dz9j23gc3p7ieezLsJqj7ypBhngJehY6Es8",
  "key12": "3AQ3zNQcJVYpfeS2X5mXx5k52pSYV1uQSjzWS5wfuxutXwHt7fwimXzNJKxinuKgg8i6x1vom6GmkRsPR4ZTBqKr",
  "key13": "MBpodSCUvUwcsXh87zfQ9XvJ9LWKsiTM41inY6EbrAUNrCDa84WsCgoPG1qjKWAv29nJPFaf9UV791wYHTfHEoB",
  "key14": "5NwoswG4oEGtsYivWGm9DGTUriBRrHvqBFwCKyiaWgysa3Wf9XNi9g3nSvnngGTTXDewAL71WVinEBD1TrmNDYfT",
  "key15": "3D5B3jUNVajUhRjKjPL7woKc54HfxyzW4siaj3fn4hnzvYwb1VsPkBrfDoCyVnhKyJs43LYocLuPDCfTqLfwax3d",
  "key16": "2hCnp9oE2Z4rEzNXRE1J8cX8ajjfVjNGSyRd8wPSuPtCDVCFhpSMCDLCnfJ58MCuVorrcBk2LXB67rvgwtmiKyPH",
  "key17": "pHc7UWfNaZacETiw8FcqAHsnzstKZYmTWTSmwp2Hk5gHStAcyFHb1k9z1T5LQ2nU7uwFnSogQ8HPiybPWNwbrZb",
  "key18": "5LB3w85qivNRjWrqo7Pt5cpJTpjmPwJivyBqqzG4UA17F54GevY2LmhCGFYDzdZQ9DYoYYXLbcDFRSqZLo8RDEsD",
  "key19": "47P2P9rrqQZNdX9TkcoGuwBusejDBDGeYR36kT29ZUegdJ19SDKrQxjKjyV47R44gkVm6mTp8TJvJWXhSLeHXdTb",
  "key20": "3UrhdmnGkAKGKrFiMpNzsxS6PyL4KKN4cWqYjWVmHiixV4bQGoiGif7WJhKHLbjEWdBLgKJmESuHCZBZnFEuXf4y",
  "key21": "d7LtyVfD26jQEimG4vmGexUj4xfpTyBKawbrPsFPzWDVC8DqxtP3KsnpgPyPgP9uUMCDejMTtfqhuUYDZDyqEoJ",
  "key22": "xRraz6oFmE45cnzSVvfdnpeKYNf5B7KAACqZxbKqzzxzDwX9NZh9UGb1wU5wFs6PjZ62Rm83x9juek5oAWMF6yT",
  "key23": "5H7PgJEcVkRUa1LjknDNh5VvmErXDThMJ1Ac4yBPa8B571V52DG17aZLSGyto3zdfqrYb1wbPZY5M8Ne5cxVYUXy",
  "key24": "3GYDTfnwrDWArV6bYUtgWfkiUzG2vFXjQpnnLinSukfHvAJmZYX54Tm3mq4vWYJ5z6VeEgCdE2odxdwVrYw4yjG9",
  "key25": "NuWSfiZXPFk7TnGa9B1YHPfXAGo1rBAcTC7yQ86rJDPGjvVHhrUeKChoAEEkHJnzntCGiZnJeSnN2QAPRh4dMEF",
  "key26": "4tW6PPkZob7NQgoRN3W5eoPUtNYEvtWtX7KEtV6F7yW4Kx9AWQUZoMp1EXdnndA7e6hg1sCzpF2i5BevnpgPBqS3",
  "key27": "2cqdC1MUxDMxXYdqnGTZLPfybgMVPcsgA9medGSMVShaSAmYWjASGabzT5epqhdJiNbS7mRYxsB5F5CVf2mghfe9",
  "key28": "ooePn7WAq9rSvu6ZoEbnMrbGPmxAQ25rbqEMzG2NY5fGqj3MYmi4pRyGr5E3mcakSAo1D7SAGKsBtbm1dCtQB8m",
  "key29": "JbP7nBC4XqRLfBTMNB6T9krxUJQ8mXAeNFENBHN9johSwnKTaKjXMmniePFB3ycVzU1YUTEFLQcg6UwtPmwMh8z",
  "key30": "4Dpym1qp8Vbbix4Ho6cMAikSSHnGWuPviPUzWcav2TLUcXbKC4UfLTkGaovLZg2zKhHv7YLZykVeaVJxTZFgNMwv",
  "key31": "5U5TpftVRVHAwpqy9HrU4SVjyqLLLheuvgf55pTDbUZmR8E85QKpD7jHWTWzyZYezvxJNve3fxKh7LBbNRuHpzyC",
  "key32": "5CueTydsqeXZX6Xv8YzwPBtUWEGqcfneTYqbYHx1FnpkNzJmhWeqSrphP3HnqES1T9ZYUhcsBMMYhMsRbVKiJVto"
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
