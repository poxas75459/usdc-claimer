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
    "5Vf5q4Ko6S9WEJT4j5p4XACTtfR2KFNwrWf158tuJdYaeUuHpPtmrNAmiAb9udtQXraoNuq3SZPJ912EhfXphKrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LgayTw8cAkiQtuy97qpCPNzovPjy9SZpJmx7L8qMayJtvEuURP8YajchztimPCc63TzfwvPwFZULH45b7iyi56Y",
  "key1": "3ZFw4uGKjRk3AT4wKydxz5uvRTbq5fyqDsuZNufT5vH8qok5BAEV4fb5DcSNG9sdh4U4mkcjZVkAujxPAa9gQ7WM",
  "key2": "3sq98u4EduWaWnuWiCQCNTH8DMXSqiDB2QmGsqmphSes73Ecgune9UQXLKPzf34267QM8bBrA8hUhEQVutK2a6mk",
  "key3": "3p3jnKp1ty1goKf3uaJLNtqCcUFgVFTjfWxJTD5DYnSX6WTQbG1g2wR8zKCLBLcMCFKXeQf8zTV3SXEACDoAUAV5",
  "key4": "7A4AnxUw5ejNNGus4B6XJC9teGL6DaP9Jps8KJ8GE4CK5rsf2jVN9TASBCv1PFai4nY9RWZ3bQhbNnH787tqKj7",
  "key5": "4seBrxePE5xsDUwYHYutAcxsWb9crQ6ofnj9AMXuwmeG1tXiYaQzYw1giEJvJev3z2s3wf5UZA1ZJ9cbnzLrg7C3",
  "key6": "22cqsqwLK72aQQJS7P4UTHqouwU6hWWrtCQkSXsEdFbB3c9zUG7paQnUvV29A5jgoA5T3xmRdgAUuXfdHrqnGpjN",
  "key7": "4tx9cAZokiJuBU3z6Mbi4c9x3cg38BwCz1qMCerMvyTdpymNghirrzmuXMMaHFX7hvyqWsNuceauqXgzvfUbAKK9",
  "key8": "3MqJCVywBWZcqeqzTBXitMJCUT7JiPM71z76bvifXkwJRTbY95bZJ4DWYyHCo2LknGRFYotwYYY1FmCJs4QTTJU2",
  "key9": "4bWyN6fozP8UETsPCQSkovwmhQziAMbcdSfaVNt91V4h1r2YBQpXnbm9LmBQyFm1REyfCuW5MpkNHUZoG4RcfLZP",
  "key10": "4hPdRaum2BV1uUFxEwFpJ4XapzEkgNVF2WnRMpjDd8GtWDM7EaMGx7u9y1wv4EFMSGnzURev1eo2tnzxq8jcGAKH",
  "key11": "5RKsDSFL3TQH2Ua1tb4kEKvLjcZF5JMRNpRGZT3JnTWgggy5vjs9Bc4bA3RodjS7MNdLFNm98Fedbz5kMJfW9MkH",
  "key12": "5uDcjR3inPGZSF1f9Jccu9wVsgJZzEr7ii6V6wxbJ8Ckgio8jMyLG7UijCwBifPZsyR8Ppr2yvSGyMScqpk8jms8",
  "key13": "4xGKXPHoRAaix1VmVypZbp3jr8oPJg2c9PtZbgErEScv3a3af9QN5GhP1w1oop2zv7qpD4SJkBE7Fka6wdLxHrse",
  "key14": "3G5vT68zEFqtCUFuspcKbyCEYPTWJReCuQtqKLzFCZ9CEzNrBvY656aqJQDnvm2rFJxN6GZeneA5Jby5xDS9cyHK",
  "key15": "5wX74dwqAcjswaNvMYVQEyrV5DedxEyHTJvAUrkB5CVVLJf9QzNb8HqotPnk8wyqeakwViC1QzkoLDT3LSBTebxT",
  "key16": "RDyPoUowEYCMLLV57dgUii3uoMXuMMnod1wDwwMKo6fX4QpXfjYySoZdtzKCkyMq3EmeeEuG5LrVbLMzHLJiuUz",
  "key17": "38RWVVsZ2CJ9wBGtLS9aog3rphy3DwuLmpVRvAa9jkAA2mKYfr5Ptk9QffCMuRTs6V6wE8AEZY2AU2Vgas4shRMR",
  "key18": "3n4LfFMS5Zxt5WNUKLi6UZjjLza7MBdYj3MQ9QS7CajgT8iT2bxsd7oFH5ZbivdVpc9x4qbaT6Fpm7tPmb4SiBgG",
  "key19": "3vTMKKE9fzZ7wSgw9w23Xsfk3LzdAfERuC7rk6DS5WLexF9vuU2jpHCkbmDvHnuhcSeVkWt7ZwTJgZxjP8NdSEHD",
  "key20": "oJXPjPBHy4b5pyTzhkbRrXbN3Ndm3UKPh66HRC91mkntEWwUw428AFk4K4VrtGptiZCQxcymz6iRWUwveCmote7",
  "key21": "3Bp22zmMJqEjXBxpwDvqD65pRPwKm3vvFBboYcXUSiR71sXwmWc1Zzgcy2r9GVeo6r1ZbdHvWTdnp4xu7vi8kZvJ",
  "key22": "2C314coK83fqBjvTz4m97Z65gwZsFQ1cf2Wmk2jotZvMVm7y2t1NXf95WNyM9XUA6MoYDjdEarnFUSg7zJiP7CqG",
  "key23": "47Kzw4hjcYgDbK5W64KdPFW7JniBX2akLe7eYFpbHK4iMiAo8hEJNynjV1RYjNPKnuTVi5nHNF468kzSSr2pb51w",
  "key24": "5dfHtYXxu2DLyWsfsiJreJWR4AQNQ2vfvWJFirhosYCnudum9aZNJ39cKcoPZvUBMAGvBcDFor3HgFuRs3BtARCb",
  "key25": "2yaLS1hwdhjTRcA8upeshpSG9rwbaDaCwaQeDzVBFPjqhuCXASjxyxQqB4rVe7G13ioBC3oRckbS3SmS5bmJfRip",
  "key26": "3ydBZ77C2bHMBsgX4XjDsMEUYVGBkvS61pLFb8oP1GRPxSJ1vR3q7DXaVs8p3A9BUMXWKjYfvJ9gcY2YcL2osbn4",
  "key27": "vfabH4c3Di7TQpdMGRo1FYruRBF4S6Ujsf3WJegymVc9fYuAkYyQoxbzp97FFpC17pGKBgGYCRS6zpdEmsVTiVA",
  "key28": "5dGssHcfuq6yXAko6DXN6qgRzoLSyuspVgDFLt27N6RnqQmHWnz4PzdhHCacfk4LpinFkcYfRatiPVRfbuUPSXoY",
  "key29": "byJNXS8u5ccpkTf6Sfwup5DoYTGUZzKcxw3SWW3VvNu3ZmG5oFiMjT71QuEQ5gBjK3fgzEmQta18TE3g6g7tDt3"
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
