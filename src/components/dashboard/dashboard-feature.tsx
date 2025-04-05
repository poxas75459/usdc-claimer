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
    "Hknahm5wvwMGi5AMeCyWWxDsdnMc4MNG4GnwwzdMEyYyZA849hUdHEMD2eubQdp4U9ocemz4Ai4eM21giJ7wXub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q5vDkbMpDuEjSCf77oz39ZDVb4fArEurxNz7hEFhfZNWKrUpNCrwtLFBP57ABjMJ7UEymvxaTYYAsDsKwmyp6dv",
  "key1": "25dTfCkG1AotgYixjbk12QzGDYTER58uTrHf6qDqRFNy6QMencazWvDZYLke9kVxz1D9bmA5r3u2Anm9QC9U5rKB",
  "key2": "22V659CC1SPd2Fs1R6ae3VUTGnMvVobdjsPbfgAhscTiZWsVJXFYBdyEojWhSXVAMtG6QLUmLpXHaDbexFBeWfSR",
  "key3": "2CheyTu1PD2BvP3gw5yUFXRMTbyayQoySY9kEux6oia7tfBjaN3nNQb28hMdLzxHcKdRWRCfoJFExrEQQ6GMYqLx",
  "key4": "5xPDpRGisJedoxNyNCWe52E1cDzSs447L8LPtGCzJg6d1racb9xirFrMwaiiCMHhfzqiZozEfjzvbXmb415iHHT",
  "key5": "2UK9JxNEFVBUUrBHPBc3HeKtFVneTxUZ3qb9fV2WgiQmRh6zkp8giJdpTzrPsDodJvePVsW2zriNUFhdgyBFQqVj",
  "key6": "5cWGVuyPHePCw17JYShB3K8ArKLsqJV1WF4JJGfdU2pYffAF4avjUex2QrD23RRh4JDXgsxP3J2fyY8CSj1Avp4j",
  "key7": "jLPi5KQw6UPCd3GoK9WMhD7YYeqqefQWUs8KnMVwoXcuJjpj7JRjR7qXsEnPFWUNo7DKPZ4DjLri1pHCjAfvsj7",
  "key8": "2VV4ZzdTq4QLURYzUeVB2V8CqrYerj6Nm9N7S7zot77Hi5oD4kNdPiuZU2DGjFyA4sRGzWhfCQr3BJz7HNFvsKt5",
  "key9": "2cnQd91hKGEZ1fHBesBySi3Nkt9g7MYjLLygW4s6zePxpdLmnDnQ3NghqnqyZkKMF8NzSgNTzczYpcuT9URKHD5H",
  "key10": "YZyye4xcZgFMBAja1Q6qVX6cMAoqyngtsbgfRg7NZR4Ffz2fzXM4TQ3jmy82BZnF7zYAsYN2RdbqdtHpWHwhKEf",
  "key11": "2uQJkLbbARKcHtFe3cHxqVmNHVFTKdd1HAA3qtVmPuedjgeBmYu3J3phjr9ecNNwVzCD3pnGu179343iLgdot8h9",
  "key12": "2UxTucve48UYqYo2wgX8YmF7kumGVt54KAexNpcKuMmnT5zTepiBdr2UrbxPeXvtxsEqUEMCmYfieqyzvK4ivtkJ",
  "key13": "4Wf56ijPySsjSy4NFfMjGfKuQKYtJnNqdChHznwzkrhUvi3R1C45X8d34QwBV6Ns2v2fLkGJQd4qiXdYEEtKUhQd",
  "key14": "4f3yqTd9xKA7CSeseRYf37S5rs2rhAqEgNdV16bmjSM3LFi4EeeFkh7CUpHXXiZezz2A8ZZZj97XPzJ1DM5d3Z3R",
  "key15": "4YjAsCygif3UywnSCX5uVCm6asdVwVssbZiJbkiK9rBaRF2vwm7KixM2b1n37kAdj8z3stdiVABCb1HH2Cwrdo2v",
  "key16": "3a9889b4SMAwEpVEbtFyExUT5JEEYSe82UV8N37c92T8yTuFKXmq2Uf2bNyY5GR9iW26U7yvzRBXTMaqzUqLjYC9",
  "key17": "2c7TuxFxLiY6umopWeyWc2QawMRU8D5zpSHhsCQCCom4XG7XhWdLMLY9GJoVHAifN5fwQeuhW2RaSKKoqmfXvWXS",
  "key18": "2U1soztGD1kRTVQ3R4kVxfEHpySS48jVn9xBcEPF8cbfjvMKXokMgPS95WLPDFGfhFGkKGFJCgD7j8PxLXPXQKvE",
  "key19": "3sZBnzrdMQdvqeT4JpJLJMXHf7D5ZvgJvyenxcmhwtM4S5qRzhXCrktau7w7HQGFFU4UQ8LWERiMFGnKRFC1Whzx",
  "key20": "4Yi8RMFVoJ26FS74L4Rptpxd37bKUX3SKkaYj6TQQv9HRYTN9Tu4g4MsZyHz7eX8xwJ8o4Ka9qyHceygr4f9x94B",
  "key21": "QAAMqLjRjjBEGuGZmmv1nS4mewZjyPQ421RUK713VWt6ZqjirvXwE4pt3WmN5NFEC8AcJyp8HvvVLaTqGp1FmW9",
  "key22": "wDjKDNEnrqfS2zgsf4ysCQQciSBT5H9xEicSNakx7A3rtUXXe5fZTxVkfPGjKLGxpaRgD6oBFUhwAVeRze21HUd",
  "key23": "3shpnkHt2aGRTLaS2rW26E3cZN31Qtx8Lr8YFH9ZChHS5qCXqtpJCiAvBdzXiV7dnra5Zkg8sT8oLx2eeRapkWsc",
  "key24": "3SE7nQicQtygDLcWKERuD2kuZgvwTNVN1Q6HeuxFuZNVnevzjVdwSigq1yZQhc39EZGRuP7fgPYeXEgnwmbwzSXp",
  "key25": "5xfmqFhoMe8PNPb1y8gEbkjB4SBbXiZaS9pGp42YnjCYMKoTRnRxByKeY2bbfS7vPHR1Kjdgwic41n9PJZDZKj6X",
  "key26": "3CnpJkK2BkwSMnvzNunvRefbHhB36UPF6fEHPx4AWBDj35BprS67DaMHQvbwhreuyvzksyRXdBJG93xhyADP4CC",
  "key27": "qYThTf2iXPMj27UEoei6T9tp4aoKQdjp6cyvmyFrYjas6oFcBSa4zs3aRyiYhsYarLJVtPe9dt5DyVa9XmBd2qT",
  "key28": "4FaVeweM91dSLtDfCTiWy4Sqcs47RwqiHcqrYLFWccVNSzQyWFXhYeHQ5omNb2drQ4abNecAXD6bNPZFHvs2sFeF",
  "key29": "puqtdcaBQYJa84fNPpeGHybkzyzxqWsuDCaFLtmh7XnJ1e3G769AYRbUgfwYTDrTYYxG7VHyXrTS3ZNP3vYYGCH",
  "key30": "6ZJ8ht4ue6LFvxAxBGTHFRTrbCsEtSWQX43u5USucYPZycHPAMZxTdCrWbZxa1XJNfNkKMQqxvhocvnsEzRqRS9",
  "key31": "4mz1rfUA27gcnc15pQ5XSFAGq8CnRQ84atfPu7eJrCTFhAEvZWKGZGS1KFChofgEU5bWVLzupwVWvZBSui8Fw4mo",
  "key32": "2qzWGy6t2XsB8JPk3wxq2PmY5edABFwtvC5YRbY454AR6RUydXKnop53qRjcb3RbjEj87pMdnSut5YBZze4ffW5S",
  "key33": "4aeDJkobtV51vjzYmfSL4SNujEnnjfZw6KAb4eUwQ3taxTtzLjuYuCS9qugsmpxdRMjjidJbkCd35tToDmqmhbyz",
  "key34": "4cpM7jkPXEuquyKwnMirynGgYcPr3M6FYyMpoQ2uvwYG1sEos9wA4APrNoDYxY7PaGnEbpkDjdyvdFaj3dvDLETg",
  "key35": "3fxm1b4NMNpzeUUqiJF5afP5SfsBYSPt4kt5KmATAWthFAcCh9ffk9UJc8sK8DKxykCypxEpZoGbBKLhZFk2k2TR",
  "key36": "5PtHmfgLY1oMqYxJGiYuCzRpAhsq7S3XpUyFSMrvZCDpgUvzcVF7wD62FQUjmUifzQLEm1jRfCjYRTDxF7KWQYDT",
  "key37": "36TVj92Ygmytzkh5wwTA3WJEpX9Hzc2jEygP8MTcW4mUUAqmumYMRgvNPKsNi16RaQkAUEpu7bEPajSdysHJZH53",
  "key38": "5eGpigsEX6UQrZmnFA7rie4F9671GTn12D1xKGD9r4FHUUg3UjfzqqdqMAgLysUEnBNAaRHchJJJUK6BUus6E8Ef",
  "key39": "43MJnpEHhAzusjQinzFQuJRAeW4S74dpWQmiPrNDL3uyDqY6iDgfX14DuMRZrhUd2irUhdHqCDHpjod2RqoGFvTW",
  "key40": "SkocmAj3NAK3iTdAG3ZrgaaSnvRPAnPeWGMpfw5q7umR5U5N78CbPkmcfsSfHPoM5ghfgkBARoNaF8Qx55bib68",
  "key41": "3HehgujUJY9NwXzsdAp12AQ5ernBLaGauNr9TedhTSfZU28sig7zwvkzFbFim6N2aBWThzmQzJUk7AJ1Fb74j9SN",
  "key42": "31Wmm5opJMhfkLNXoee13W1oUykajmN9ZzgvCAR2pV6JnefnAKJp2EWfBwCAMyHmAEtjv5w2SwiizGaE6Gxo9sP2",
  "key43": "2Bknx4e2enCxQWFUSPQpbcUaWUJtdcLPUxj4B1ni6vQyAU2LgTUtEofYmAiDZASQMJcHeEgTNsrVFgrH1Qohf3RX",
  "key44": "2UkxwVQazYRSWWA63w6zxCKNDWJASTsLByXSbpRJSNHj4Gdv2UUTiDfBHChBpAZfEsDJAb7SSJx9RduHq96jonN7",
  "key45": "5Vka3w2PXGzexBYzfhKZ4bBX9xKjCT21VqCv6CdSwKsVSpvFiEB4TxPse3XjUW29WpzfrpKW43oev2ifhQAezjzG",
  "key46": "3MPagBFQ9SPygLtCaER7Q7qitXUSffBKV3jRmULQH97XnJT8jUsmKw3StDChRmt7LELYrUJAU1NEogtJmADYsfsA",
  "key47": "3TFKQPdxtNdTJxHc1rXYLh1uqmyAkjUaFM1yP4UNPT8Focbdm4hf15bFg7vJZxFMnajS6Giv5Ep9TvzBTq3DS1hq",
  "key48": "23RGdNtRWHy6zYR97UnbEDweVKZTEKJtuvhTLAjXv1kgRtMmZsw1XAo6VCRKwx4Z1ZjsaKN6Sgu15VmJncy6umtT",
  "key49": "2YftroWJRBBJca5Qho5N1dde1brw7NHi8yrHdnN2GRsPVREDgsVfft4sbdifDB7Syez6AiqUwzMZ935uZfXJNtTR"
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
