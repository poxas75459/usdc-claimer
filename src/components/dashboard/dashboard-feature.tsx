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
    "2SfZ378YGgRq3Fb9J6hFcLEJpZRCicdTFp6C5UPHys6VuYdZbtTW5ewbG394XfkkPjsRpwAuqMxQ9ubVZtyYQSof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iMthFETfCnG2evFyY1riKRApYU2PxfTLAJYGrkBZMXGXV7kzKX2ur9bzymQot1Lam2PcEsxendJGdvm5n7jVxq6",
  "key1": "Are2fW5NpvCtR62cbCeQZduYJb6JCk7RQmwUgNgfJmqThP1Xuqu29vACe9kvK3bmAaKVWye6urmeMo36U7toPoN",
  "key2": "4WXGxySjdmQ2hPChonXjqfS5XGB1PWcV7HexpBZtZyXbkSxXRJ4rY5VsgUZ5EWjCstc57xmaXVPi85pRu8nyDe1M",
  "key3": "5C8aXTfHum4MX3D1dZTDANTJxekisyjDAHxGsY9YFyfMrnVANFFy3wWMeRVoohyh15VFKyhPrKg3wKnpemHoYTrj",
  "key4": "vk6gNJXQhxNyAWcigHT5oPFTNu7oQBhfmdRh87LoKqZEwsxzsG7QZLmn7uKpGsanc9TZr1odf2XKurak2MVi5JE",
  "key5": "5H1yQucTMDMRm6dNPxkcQ28iAYZKmpZsoFZ3jrqdxKQwFVVAk2Jrgf1WUnJJTqN4EN954CcZfps7dkqK3oKJgwNV",
  "key6": "3BiaG2uvvpsUrqWqVxW4rmTmT9a9dDSbb3rNyEGimvabZxxzJLvaWgE9WqDottgFaC7RES2uAwUTfxWJTYNHMQn2",
  "key7": "56pe2T27NcSUumpr8UGGtRv54jAd3Rxv38prKCqKPVhVLCeobQUbjiBXaodev1A87B8D3PcrFKEUA9HGxyGkpggd",
  "key8": "ccAiEELig6EByffpRwgNVnrV88zXRK14xhbFx9PuQdVieTG3Nd4y9mhztNsdDpQQxSbCFE4wgLwFa9pERk5LFMS",
  "key9": "5QNXAnnjuJdASKuV4X7RVF6yDMXSRcn5omMTEFdXdqLPvM5KrnCU44DhotcLFvmQrQiaNtyg7WRGhb6mzqw4VzA1",
  "key10": "2JueJNy6P9KAS9sm4VszpdGTQKRiJzKiL2Dd8CTaW3VciPxXPuFoCMgB5xvXZJgEBG86fwi8VkdVHMgg6niywJdp",
  "key11": "2K6G1r2Xo4MmiCN9yF37tHV3DPG8DFHn4d3FjbGJKFZydbphBuJcCTNM86rZpgdvJ1z1DVAyG4oJYFbg9nPYHj9W",
  "key12": "5C54oVZcEzVYzrxLSX9Ln5orLfrM3VWSaP5TvXk1yUScLBTGNXMP3wkbi2rVjQyH9cXNKLKcBWtJSrZXR7MhWqph",
  "key13": "4bLoGiKLcRM8K5dCMfNj5ZhyXVs1xhMnya7dP7CcTgN8d9doHUk6NY93re1n5k6e5SWY8CqXrEWYgdPjFpv6YXL5",
  "key14": "4RSCxzC68HjXJEzDhwFusNmL4BjoqhsgTZNBWruJpXeKXUzEaj4vRxDsuW75ZKWnqe9TS9bdrGFPeuttDvns3em2",
  "key15": "z1NS4uoAoTukhs162GNUf7W9gHtEYocvNNCBxwRErjWr9UatcT2j8kq7vtFyUzxFCDgY4w4VJrJgdvy6Q79T3dy",
  "key16": "45xHjyqMEPWJfQo57N8KdAJ9nUMg2u9k6fJ9yEMXpJQkppeNEZXpksr4PJsgZjVvJEFMALPDJ235LzWJy9P69geg",
  "key17": "2HuioTr68cBbhKfD82ZNYM7iE85bcrMpAaBrbs4qh4KqspqxH6xykY8pKUaXmLyimdmcChJzttr9WPmeG5GfwGzc",
  "key18": "4jDb5S3BJCjnj54CHhPZctwYsEhq8gikPgRamDodHaM82CVHjEzda3D5kAn211a3NXJuPL79431o9snBUCHdBTDt",
  "key19": "5Sdwvnnzb2hJwzk15fRuwGSsWvcSRn76bYHcjsrF2977ik13WdkzFyiwtbygsYELHmdqufzDkCBv1nrYPi34U4yF",
  "key20": "QCRkyMpDikTG9VHEtS76XERc692ZYFtHEPP2ResgCPmQYNVKrK4dquyDKwGg5egPwHkg8MEBmidbgkvAwCtccpZ",
  "key21": "2rAx4nKVAceJwRFniM7nZLrYRpsszZPm6PPwGVtsGXVNZFrbzkr5f2rexvjuHcrLW34JaE2AA1itwRKHFDEH6ix8",
  "key22": "4dkuhyeZ6t4qhrFiiKTBcf8V8eqAx7Z1wai9G9Xh66EnnG4qP3ifinqLWFSdQw7SvhpKkr3AJ45Ya8NwuUNbRN3k",
  "key23": "dGhk2CjH5oAinvCCrFCKuQDQYhwehXKda5KrhkMmf9sHqMtzAoi9it3htyN9mw83AEuVLYD33xxb9VvudNB55ns",
  "key24": "3PJaHxEAt6EL5oYrS5jTTFTCfSfSrtW6JaDDSKseya5tczcg5sWacus9hZXihvET6XY1aucrxzb3knBjWEYm4Z3N",
  "key25": "3v4ptXExj2P8jLtFRaD754H92pP2JFyYCcDgvdneRFJoHzWK6N2m8fANh3ga1uZnqtFX6MeaBdriHDReBtMgg1QZ",
  "key26": "3Gq1ASfNPWyGEypbFzrb2axvsBuaL4SG2UTkne4dGTm6zByA7NRStLBUBzTD4FucXdJrtnXKghmQe48dBp9r8v5a",
  "key27": "3MsyTL6qR8qtPwewzJVwjdqf3oYob9kCcGAcZeowSy3E3LpoAqeGrPky4hNCm5rgMzZz7JVNG5ZUKJocJwiFUmjb",
  "key28": "bw3BeXChRL5P7Fx8QyzEnSHAEroB89ifLaEE9EiZhVA4JtkkhssgHu7Mxia89JhGNpoy5H1EnWucUdtFaChd9G1",
  "key29": "4Nfv5i1p4b175sb1b1EKiodqHSW6LKoCtc63jNQGnxzwqBeiSFGxwkJcZtMUZ5MLvuqs63PVdeu6HjmX8GbPKVGv",
  "key30": "3MoU982nwmbzT4LX3z1AxmxsGaMQD1LXyTvjjeriGMJnQSU6kdvmM1R9TcXrUFdswG823eEv2RMZgM443K3LA3bb",
  "key31": "3fd8XkfJ3SfipgK7BYxRqnZRWCRxLudGaKotabrW7maRdnXnxEJ7XQ91wT9S2n43EVU3ugTuKabhBm14irXzb5Eu",
  "key32": "Kot5bhAxf8rd1Vs1934EkiFSLsxvvR3Jo9vayNzvnNYndSmNtib7kDHzKP1QDohyMQpZFzqSwkuL89QTFo1Pw55",
  "key33": "5cRQs7mkMEPuxNd3ECAFuvY14tJTLYBWi6Q6n1UqtTceg1Eo8f5vhk8Aco1GoQPvuAr5dtstoM188CxXzmzWSLbK",
  "key34": "4uFbasDsZ2cgvRn3gmCV6uWnxpBhxmDWqB4SLA4rVDS9Pyy6pqoQvDBGxVtijFwH2rSZX6EhK8ZFKgWiwnFteXMq",
  "key35": "31FhLW9wdLSFroAGCTaziLzkK7RdURK99FYRUdvwJEparC7rmPQsk9C5AKCbfEg8EpFytjuuZaGensk9aRxLEZv3",
  "key36": "2wCJCv7u6WC3QciV8yfdVgCeUSPSN2BRRG6FW6i3r8WRJ9ZHUsX9Yta5xeXHi6sx4mw5eHinwn4tbyyUWtMsw3uM",
  "key37": "4qqnfdtqtypU9B78pq9gsrJ9YNh1rZ8n8PFmRziU1NFDSo7wVsEqLiqNspYnXiEJPDBu63AD6GtG5mmjhy7h98te",
  "key38": "5JmzzkWxUcnHseWJi71E2g24y1qFKpKCk4Z6hqD8adyXsp82EdHiUfXfPnpnDqF6ppwCu2LmF5P4r9HD4M1yUuqM",
  "key39": "3uKLiUuDWGP8DT8QViK9XcR1Y4xuqg8biXzzbGnrnhmbfCpv81WPi9fBM8yUA1n6UyT6rsZA24nDvCv7JetcKoLX",
  "key40": "QFKXKZun3m49ZHPswZRxQr1sUDcWrQG3cWGbCWgmtrDkmmVeJWAxuDjKYAPyPsjBi9MGmwVxbJXYSmGft4Tg9Yp",
  "key41": "5L9kfeGTC7Y9NYrA9YoGtUd9J4LJmSNWaig8Z8byQtpUkqUxHnBxuCktiZTHDepepERR8LzToFsfkfgHKdyGWE3n",
  "key42": "M7PXd1TKSLAJZg3hiz7d22GgkwszEcQ8HnKcyRhNquE3fUq6tME7Fn2TGjzPWnq2wEc8yPqRQUn4TwYmktowaFK"
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
