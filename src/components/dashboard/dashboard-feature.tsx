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
    "3ACuCiJCuRaxZywCfckuFd6WjSdTqCe1BkVZD6kGybyMFGWJM1kVRNjsK7TnkkrXYULCQCqMYiER3syqBprdHFb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JonGcAg1j32aR3RsJxUjWNajoPwAj5fGZ5h4Df6zBD4gAhqgLwsF2H6huVzwt3Ekzn7VpYWoAa6Domb2iH5swbn",
  "key1": "4EpHqnoSzQy4ywbq1DK96BerByfGEx1GR862wszjNxCfegRVQdFZsMWjpCUbFUo3xRLwRMgiE4z88Q8r9RpdNdof",
  "key2": "Hj3VnyKYQg2KeU3tCPMeWfUTYkZs2UsTdz1gzHcoPGSFoSfXjtJZnTCx1vQpAnJ6CpwV1rSverK1JcXc84ZymVb",
  "key3": "46SKuPf81bJRaLwx8Ct3G93pGoHiY9VwP7ZjcGaMLdkWzFiXDoYptYwFNuKNvysh3LNHFxKnaFoeiyJNyLmGouvA",
  "key4": "2fdWmjz2yQgRXU31hjrxNcL5qA8NDu2DixbuitpP4FCYcPNMz2rTWTzADowj5Fg2w55EqiEMAuMHWXBUEvZnhBzf",
  "key5": "2UznFmWVRhEkx4jL5KSz3uo1VhPHVLhhWbYFEqQizK9tAG83bSwSPTAjZiVWsEmQrJnMMrY6QgNFW3idKapsoLXZ",
  "key6": "4hu4QEHe6tAuAdDMdKj7vyx2kd6SpMSjQhJgWBHJAVwgPcn74BUnv98oEDEHAiEJGeDD8dgvMFAd1CpdzXwoWNAe",
  "key7": "4fjmFkVQWcNkJ4WEMbqQm8s8GjztBFmrMdggixyCT69Q9oVTX1r7nRsCXWENmZYcmdrkzQUynE6BYU4SkganaPKm",
  "key8": "VouF2egr1aq5gRvvgETF39yArQw631LyEtyWs3CdGtBSa7nHbrt5sAiDutYH3WvJ8i1e6xTaw9H7b6UxN3GY4js",
  "key9": "niWLupuvdsMnidge9YSSVawoJ2mi9Xq4WFCtg2BKsdTxL9Dz3xoUBEqYT5XiuMaP5ertGzrGoGYbnCenstMtKdQ",
  "key10": "5zS24yJZc5p1YuBc3VHLB1jL5k8MrrfLrvJmJLctBkkURcVXHzV4tPLxQVrRiE57atEZ7fBwhA78DmGxuXaAWxb5",
  "key11": "2QCRDLEWCcqtCrt25LqBgPhqPEqtwmErpy2WNio1D999fok7n4nKJqTv68x32yycgYjrMFocMx7218fdyrFbr6rq",
  "key12": "t75GwPfYVXDFKrW5j7j59HpQhjcfDg5NrgUMNjZmDL6fZQWinKJR1mFZY93qM6ZFsY3waYzRbz6MV51UVBLGc1r",
  "key13": "54bs9EkoizN51Vz6Vb7x1s1BnMaC8kC1xTVxZBjsBFkYbzRuEG9sZHFy9gvsoYrSCwM3kwJSM8P11EMA82HQFLy6",
  "key14": "4E7wNdnoZ5ydUykAgxfXCwkNmnda4L5uukNSMbso1xZ1tavVkumGsdApxPdMSf2kQKKW4MjJCJdYaC8JUjyZeQ8",
  "key15": "3E9cTZ2zgf9dXgkHrmH7c57n24qMUVNr4XE4oeLGKfC7FMDSjzDzpnNzs6Pgm5LQcYMzn5ffcTFz2A932njgaDDP",
  "key16": "5GbfrF51vAqH6azXQhxEWJw5s2h5bsjNRaKt2sSoV8NLCeXRrsFVad8Yui2ddF45EiovhGKyLnPaNxCHB5Z3Aohv",
  "key17": "2LV6WidbsbAxbZLdQrTsv7NoNZ71pRGi6dVabeRn4NobhKkz4WnzToK5BDtMUcVz6mihGjCftevv1UvQGofgWTBV",
  "key18": "35QPK1c4uDYSj7Yoc4GpEWXni1j5McVt1v9mcMZhraSoXENqtgEzzK6EcUgDiDkfvb2qTwrqguwsSBjdaDVftHcF",
  "key19": "TnMrRuZ3dNq2YLrnFJ5YtYSdU6AbYqbRXwqRFgZBRWB6fuUa4m3deC6tNb2aojUMiyD2jttBbC2vhxGb2aiWY1e",
  "key20": "uP57ND3swQQXvzfXyWnd73Ant7C6CgEJD6xBL4HPBFsAUh9D2jFQyRsHXsdcqK6LYkvPjmxx8LAy2gy1LA5nQUN",
  "key21": "2UyvDXdwS2sp39xmugrCsjJWBQGPqmL8EbUtCbxq6U7iizhxtYbF6XoWtK7tS4YULhXYf7E7VYpvywzVNRuo188W",
  "key22": "54Wktxx94x1V2ixKWGS9NhxN2hRNh11whuF4weaheatqQHwJwU6hpwcP1drqLypeQz3LrpKUxYnkQvzZ3HeEMjao",
  "key23": "KN8WnhpPeDQ7RUJKPR9KpHyrM3HsE9NdJFrphQDoVLkaJVmAGTM5B358h13ZtfvnYEXvwi4pyUUyxGzC9opAkha",
  "key24": "2DuwSFxFbMnmVaRKrR9iYnFQ9cWahVESv6gAL77buLSJ5UaQm4vHsEgYK6EZipJYjWKUGjW9F4BXDtcbWLwMyoWS",
  "key25": "5Urv94giN3Xrr1KRDsqMTFRmqfmTrr5sdLr4K89QZ6PeAc39zvXDf93yRFWh18CggJyeaej6FuvLCPYdp8a5QnG9",
  "key26": "45oyf2hyMBLDQNthdT8uVn2FHLzg9JE3tbm4mpgVPmNwWgu3v2kHmVf4TctRxz999XyET6v1X2kGzyQTv7swLwyK",
  "key27": "66Ax4Poho5fX79eJQpKb4szRrs6BNcofTha88y845ucSTFpGDTDNCKHiCfZCtrCaFtF3LhypNupRzRwuyQQu5REK",
  "key28": "51hNp8MxhyAFUhvUu2WY3iFnbYejaRaSPD8rbvUr9ciQJnm7DQEuEDrMxnz7cBanF6X224A8ADU5D5apZ845fFjz",
  "key29": "Rivvbe371ugx3WGKfzis69aLjEMsUTT2aDn58TA2xUBWbJ7A5YfvikBmpaxBzutveaVYpGfNZ5oMrZPvk5S4U5A",
  "key30": "Sww3wdicHKA6CFz2Xk2J7L9weUbAc6RZUgQ1d3HNuHHQiP43hSmpU91sJhsQYYA2AHS6YLNfX7mSu4HBB2oTctA",
  "key31": "2XgVBwJzh1Hk1gxAJLZMnZTRjF3ieEBeyRjfad8tpqYe18ntkLwFCmLDxC14Qy3sEnxvTrP4z9meqSACZVDtrKdh",
  "key32": "3ste6Pr1QcX1tPgK19ot8cbw5ZFqSUQ6Bd84RH3Rb3jMjKm6sH3QMS5ioYZ95fiKeXHVUcPfzHuMXciBVnTb1L4E",
  "key33": "5zRac9AC6iJv8JcX24GGWAigEE5PxovyG38o4CUfKqT1JQSYy5x1zkWQssoa3LQkGzSnkopF7JaUpKFK8vdHh3aP",
  "key34": "3vcHaUVjds3ScwpfWFaTL5aW5qqtwfnEfQKSAByW8SQMzLhENes23P87qMWvu2ceyi8AiFBSEgJKCXSQv7NbT45G",
  "key35": "3Sx7L812eLKeFE6LdU6hBhFBW7g7vCGq1wA1xDLqVsDYq1pqNoc4D1BZefErBshcLozh1t9RhXvi7RWJitoP6GRm",
  "key36": "3R63BDYF5QMC2DSQ9jGVeP6sza28xqxdSvFfPK4ruAWtQRMwHG8DUjNy2TXBvWazDCzhCzSrMiE9pHout9gGDcd5",
  "key37": "57EXTgQoDPyCuQ9TCoyWLPtzPEkFKUfH2ePGqY9kFdJt1AqB5em4JuSxusjSit5wgZPP1QEXprYzY7t6DV29Jpkg",
  "key38": "2uov2qVhZDocL8VuchMrTZY4ocAjGp5iiQ6q6QWxHUV3skEYXidaNMpm93ZnAF4Q56pDvh8ZExDTLQcGY4dj3giE",
  "key39": "2NuuGbUGZBZCnnJ6VEmjnMS2JsVSSUe44XCjb7ND7hQwJfsdo93MPrUPLtVPntrERcGAdf9hV8nTuY3qSWnzkF2a",
  "key40": "rWGe98picxmn9C6af8CEN82dTCfMEjn9xE4KFFedcZzG5tKvwwvNXt7ScfcD94QEqXnJcdthmrgHDWpuMAHbieR",
  "key41": "4QFt9yGRhTPWuK1mYGRkd2ZjFp7baQJbFDMfreT8kP4gqtk6vmDwPTKqhEa5GkyYktx1wpqDgkzNicvnjanjRTPM",
  "key42": "jdSQcBSVrahGhA7HUuoRPchbT8i9KCWtgb1DLZNW4mENwZfx39ZuaVUGjVGq5fEV3AJL5nqAdLQTztzH42SR8cb",
  "key43": "5VzyTXZ75T8NFaoygKhBVEuXxTqwnLnQGtj82F4MAyiAFe54e9MtkiM6V7FKgxTMvRGsbuWLBpJ5GMA7XuyWqXrj",
  "key44": "3fSx2tcAPM91HiFUGmdLkmopAfkjtSUrQC248e3wnZTZuvpvwHQ7Hn6kFJTBMgDwKt4LbpJTmFbuAfmyJcnaMeR3",
  "key45": "3PCjYJb1MAZNFQYfmJyrsEYDf11XZrJwwU5w2HDhu444Jj87bscUDyUYyedpfhu36F2eHRboquFWN1K6NLyFFxTp",
  "key46": "5ZM96gV88FKkdahAEnKwv8PC6iNxqbqANiGMdW1CtP4DkoqbR22vPNTqFrhALGGG6gRLkFjWRN3phMXvLjcSiKnt",
  "key47": "3Y9SxNkkL7ay9F8GxnJyMucSK2cHRwj5cvh2btak3pDjwzP56deswtVdy77oFMg5rUxv6MGyZ5oNrRK8P9UW9Ngh"
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
