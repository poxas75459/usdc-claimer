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
    "4RC4DV9C2butZBkP1NNu5vLQHPaaWEHZi3GB9Q7xtP1cixEDQqhoQ4XYA5oGrsqsQ26yUgugWyr7h1aHi98Qn85p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h8Gqk3Ykv7sYvKLkBw44X9jJa2dr55gpnFz9KMtZUaqiVH4tnnzVBEjA9UCr3cjYzkXjodfL3fRaMEoi7vPF3Xs",
  "key1": "4MP2Ld4bJ34KhBy8yquCkaThns41yHRGVvPEBTSp5fTmDG78MBGbS2BdA996vbpp9tP9i5CmtqHiXmmY3hJ6Nk1R",
  "key2": "uP98RJxYBZcLpUennjNfmyyFtNtdGQ9kWRyEtq2VDfN52hBhstsbijpZmmCgNaXKLYDtmjdbfV8sHWFtDKMVy6o",
  "key3": "5p8uNbz7pR5wJ5kSQmow7X9SDDj54Bv9ST8vMRs1NM16EFrqXJKYAjEKWb37jyCsh9nNnTrVm2NyTG15AxdyvMXj",
  "key4": "qs7Kb4fek86H1u6J4KVXAzRSV8X84E8EM4AnNh12rLJS1cQvSSBKzNkFRvc3TaiJvVNQ537GZE9oCkbMejWdTKX",
  "key5": "Hcd193viHtgkYzQNcwmQjQ4w1ZEhza7k5TYFZNMRCoEVifmiqV1fwjo3nNDT6fdTzqiY3yTomzNZfJh1Hd8jgmb",
  "key6": "33Z29gkquJDUSDPvyfKQjzD5QkSqmNeRj6y4QeVu2e5HyxyqWwbeeUa6iZfdEXMPfaytVpLezdsvRmpGvaFRAY8f",
  "key7": "3a4zfgsntzzqf6YUv7ESJQwJFNhknr8Hr6LGtUTmhzQpBpMnc6s22xbNKTJwj9p9LE43tSz3AowQyLaFjTwrmtt4",
  "key8": "4atvruzdkuRkrsj8KEDB2exyn5nYu2CQh3pD3jh113uDPCJ4mAqVY3ynF8kWBfcHpTTsRdy6LUTFLP9wBH6BWaWh",
  "key9": "5dUDqhKvD9QHRiVqRUYs85323dxrdRBJHMvbVwNKTLMSzrDaBY2AFhFNHfRvCkk2BYFFMbWFYDtXeb4VENYvrmrd",
  "key10": "3Y4ijYvxoqZi3GJxYn635opum9j9VmHHcrdHkjDEh1Sv9sJTuLdbE2CBoQbPhMsY8zbTxUWVSherZtLZ6qG2tb2m",
  "key11": "2GPenPyY7YkPbR6q69Eg4wnGevnJbfY1tFpCTL2HYAUf9cu2boUPfWM41iqxKHs6Zfy3a9wvKmdBqsZrm3k2ARFr",
  "key12": "4SyuTacNTxjXxGJn8XXtzNBJxD8mbWhiNbeDn3RrDJCSMz9YHHifVCbUHSdjLD7ab9UyLEKT6bo3y1gfuDfD3B7V",
  "key13": "5JnCemnkpCv3UsDSF46XscLvFmjaSwpMP3Erp7cf6FpXrsc5brKfKtFk5n3kzdQk9714yNn4YeaWRiyfj1Basbtg",
  "key14": "3jdQr2MjEZYJnDd7RRrsAHZvoTysKrowBQGbd9yuYKqfSMb1qGbSdSbmvMUcnXWuekYNC29owrACg7Uf9BpEHHSw",
  "key15": "5bZ8DkzeVzcprY8DBxJCqFQNy621cqA53qWfCNzS8Zp5gwDQ98SkrD4DYAu6gZUCKUiy2dy6mvkpjG7NAiuZJm4c",
  "key16": "6N8fbpjmTMavHxNUQvK5PKdXtpQsw6KTALuhtizT96CS8mcDsEbSnYe3GLKQ9UyCfqn78DAZU5wt1xUq82YvXPJ",
  "key17": "2S2Byfjq1ChLRLSUUQKchCYyWFeyZgykcMRj9dtgSFo4jWQ2YmcExUj8t3q6GGEHrDFH7rpjCTdnaxNXZY7HU5hs",
  "key18": "4ae32g2kYiMY5PHPBaBVydY9togd3Whs5Fj2Hb4DKyi2ErSx584d2o42mkRDdx4F9fhMUN3BTxjFFPZ9iYvmmTfQ",
  "key19": "52pa7hxRtRjupBi3QP8t4B9UfwTXPaLYndn3NZwGiPzTtq6Dhwxn4pXkjnNoUdUKYYbepPXsUvdhRU7PKFw28QUe",
  "key20": "qa6GCctBNve5NUGeZx1aiq3giUKdSHsuZopE1mFXhFSkzPbksu2c5bDBEk9GYeKMYfgoqd4QfZByVhh2ufNUeJD",
  "key21": "4TG9qVR341cQNaQBu6NpiPH41riXz7ni1Kx54vwtmDCxfi4LoTsvK843G1Tpjsva5SEJXucAMWRL4WmFbTMPB82m",
  "key22": "3RwwzBsVHUg6JSLpg1QGMF7fdzmqjh9tkkUzUpZqiL1uRGJ6FuP1eTRBtqBQokCW2uJnVesbchNA8WiWwFZWsHKx",
  "key23": "2U76cgTQnLMQqyTCBin8nxJJBfradoAYa9gxSrSTou8A8wf8RRd7pasAbY8boJrCeaoqxsoDbQV2ayTWop4aTDnj",
  "key24": "5YoDVJFRj7awgCGumE9SXWoBnFNyoCVv4fUwZQxscBSmYkA4BeKpTG6eFrWU7i9Mk3FrBAmW55UjQaqroiNB3K2z",
  "key25": "2RsUFs7cv8ZmWiv3taPrKcgRGRyu3x23ZvWtKmpu44YtC824n1SwVheugd3SxZRJDxpRCQW5U621adtSHxEXruaU",
  "key26": "4UQUp7VQVHDhM7DPyWvdhjEqjBqzrEbuf1JeF7mgh3K5ojfRyV6fXYsTzbcHJQRKvwfgsZ1KYH4G3DHY9zffjys6",
  "key27": "4YXrCtLLqDsY25Q7sVayGdycpY1UtRNg8dS8QejFyUFDSdaaWL7NhyESJqbT6HCcmT8fJ89eNrCk81PrvHXjoeQr",
  "key28": "4EXq61YG1gmxNMBxEv7j8U9dka4Mf1mSY9swAZpnvUtUzivC49h2Myj3doak1EBJsLD1MyWNkvziGRZBU5bjWLMG",
  "key29": "4PnuVBbM7T42rcSaYxMxVnbZ1S6c6555AJQbSckr6357VUaZpTH3QZveFSWgzqLZWcv9WnHtezp24ZBJBSY7bDxe",
  "key30": "3s2JnGXnSUwRxiCE7BKr6fKzeW7YCfxHdR6YKVwKqWKLAwW9UbR5eZCXeDWVHsKK8VQRsnyEhgLzPHioyz3ftKE1",
  "key31": "5Reazmdxivo4vGk9LUjawjiMDkraokYyMBh8MkGQKPMUCoRyAjYFwgcDZtMJ2bkQdypLxHUCJps2sMYtUHqDrYns",
  "key32": "2b4BaWjdSUKbqR3yQWrhSxwAWaURotu2n2op3wFyF63hkvQ1hAEWvQv2rUGXvMzzVvpbBT4grd3Sj4C3FEPXAuLZ",
  "key33": "4UarmCenyi8C6xD3gfhTwMMHGE4qVSxoJ7SQZAsTe8L8i43YjeJJ3dKQc9Y5j1pLpsK5bHU26PYM7UAoEJpUodc2",
  "key34": "3VMd67VDZVQ9Zzw1RqikdHn6zoJuewo66rGD1iiRo5nr2H78DhqAAgp6tkmXRcVqwqf18cDa5BPV1sVWWrrpeVSz",
  "key35": "3ep13izLdR8S48tiLc3gAxqYqVqJu68ozpu19TuLHVAZH6Z3U4xQJtkBcYoJjHtavmwNcDE3KN7ap8PDSTTvRGom",
  "key36": "3mu19xv8Nh9tshwWUYGP9HGjbFEPYr21Dhxs5iLpaHkxXSsrBE7mgUX5fmNTnwmET2fDMmjpLRziRyiuX9s5py9W",
  "key37": "3uSZjY9VuLCuvppY1i7xaDjZiMuz8RXcAW2AAYjHMyvKDbnHma9uKDUv2o7Qx8hqjd3Wu3tmQpWVqwHVRFnqD9Xt"
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
