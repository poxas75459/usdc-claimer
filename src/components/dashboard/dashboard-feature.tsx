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
    "4kdCuVB54w4P76tYyooMneDX9gY9Z9DPonG9jCks7YydtR1dakM5qRsUdkaUioACEaprF8wyPoxeABPm5zKvLoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iESfuzwVF8x7rX9ecvaEUFRezYmwKTmnt6tyPhyNEFcKiUKuBQvnRo8JZZ4be2JQdjqm8pB2PNegigkRf3x8jAu",
  "key1": "4vKKHVzBpvVDR3WDkxw9H93GW1xU7f5wz5XBM4TpD8neUzoNt8DASNCvNHEUNc784urCt4d7mhKhrScojkuTxEGE",
  "key2": "2ubsX4niArMSUHys6SiifYethEfNhycT4ZjySGtQEp9JCUod23PzprMDJczN9B2Ces3XLGFgzNjc7iYUdFru1J4N",
  "key3": "9LgnNyCa1NqXdZ5kMgrKb7jZXY7d9ggkxrSPVZHJQ5jY9QTyfqhiJZa7qRNhTzURUuTEHve41nqwB91wH4iUdsC",
  "key4": "wufAuKunmYvq29dETtd7rZ2azoSvKoApmMqPyaN6XdzwRjdd7D1s7FW9kQD91dgpwHe442HWBZz4egGhdYtQfB6",
  "key5": "5PVtk3M1oDHkacbEdBWAxDfwTJKZcFNWtrRoH4h7x4Xp8qLeTmM6f8r564PQgd5Q5GAqyC6MupT7xEKxWaayaVYx",
  "key6": "5sDHjk5BCuvS38PBNvQ653gHFRWSkbpBptYZ3CbrQG2ySmGFvjZ53RRc1U1k2rZfAvyHA2e6Nb3QVTfJggb9aFzL",
  "key7": "2xBZQJ6NPGB64bSxLiMUXpnBecZhVzPuzqCSDfcoWkUN6CU5xCSAzr5E8yrfWt8J7VGWC7qJCR9ByVz921SScVoF",
  "key8": "TPgvAuzvWeqinCvFTz4HRDeXNqw1JDHRHQF56yMzu757gTmt2NfiuzewsddS55sNB87HnUYu9UipxHiDvxYqoBP",
  "key9": "3mjMFSbJo2gS5EDKTHDo2mJRce5X6zTCZxfi662MgTHo459UaYZeqjtynhtxBdZyQnNRKiRQi4FRZyfCXcyffnmr",
  "key10": "53nysv1UQGpi15kLh5gNLyKt3MLWMCereSMeVSZKfNEBDN58W5gMQ7ggiGcYFf8YD5JeeWECJCNkuUUyf8nJvAUq",
  "key11": "2rJk4jRWyq96MPUx4EjLVNxM1JPLQA7xsxXMrWUYRqM8a3jQRvv4jnVP7qdKGNtJEKgQXxUQerjgrTqFmJQCT1zD",
  "key12": "2h5HSRk4W5qHdXKi4hoiioekev6pyVkb3Kok2pa2w1cQzFmdpDfFtjmq9kYeLWwYWpHf22pD7indX3bqAKXgmamo",
  "key13": "33p57zZ3NqbhzqXMKi3LfTyxJVQZ8xpsvutJgzhfe5TBbYRPDqmYpqpTTVb6MSc4xQvGbwhfXGUS59yAyBCzUCh5",
  "key14": "26hrYxUdHaCxkbACpNftV9SdS5mwJfbKTk7ZMfTNioknG4fk4G5yYZJRatFHYHPmq4zFv14zXWmeXZQXKzH3ZfSf",
  "key15": "5S4JQmAQuu4nRGKXTiCt3DaFRgbv21p2HcirYkUbiG7hu48r75tsFxJcc2GXwBBqqc1kVhsm8VSWDtvCRVnzy5cK",
  "key16": "52uhtkrRznxwkpjQ5VgS2qHV2UcqT5tznpRDeosAuwKjSbPV97aqiaQB6rnjNFZKU65QwZbKtTDG1fiRWBwoAuST",
  "key17": "2oKibpeh43C7aH92DjmTosPag3eo8fSQQJWJUiV5EPR7mSesHnGsuHt82u3WVXbz84kDvYkRBQVAX888naH9wXRm",
  "key18": "57PQpM99cZC9MDUELoQ9j5dkRuKf3hamRXDFnbu6qE4UtJ3FUtECPCPq3Xh1gVy32hJ8vFqMKDmaVZuS2fUqAhti",
  "key19": "5jDwD9ZQ4Nd8mSbyK659dVLDKw1jddg4pwNZRgeYXKD6rQGtYXhG2zP2jsvA2bfoqwJS43yM8ziB7qadLiJBdMrx",
  "key20": "3DdU5Vad9pV94BbWgDrrUbMM4At5gp6Vrn7n5iaysuC9LWUa4bfHMPSSkb5kYNHucZ7rcXpj7yst8m1MWUuC5Abj",
  "key21": "5M1nfJHugBR3evTqcVqQf2kmDHw62wim6hDef35gPFLqKE7Cx11ZgmnZHRFaB3qbdh4tfxzhwkf9QgJ223jCFPmN",
  "key22": "3ihUFX4eJ9Ux7Wa1EtkeUcRx5atdMHRhSPbSNqfdAC8J59FwVZKz4ZAj6DhqdesZRxBo3Q2n21QmTdEZkKuHts3H",
  "key23": "2P7668q9RGsuuKiaW4YgdUjMcPKcKyp9m9LuhgaVkUX5hYDjkHgggXqxf2U9d8uhGtKNmvvNCXRk1K5pVYotkmZE",
  "key24": "2kthw1wP6u5iqXUFReTLWeN4re1Ynci5uYmQ9gJ7gnavhQXeDQnRqStjM25kiP4FghsVQ1hzzGJyu18e7imFpNiB",
  "key25": "5ZJkuVRQxaqZ1erinewC1FtqcwU4if1wnq2tZ2CRZk7QEnZKVunkKYjmjPrWFfM7tyytddEE1n51W2QPe7BXH846",
  "key26": "dsEqk5YiQ71mKHwGyAP4pKuj2wy8xJ6QdJMdBE1xGChSTeEtCRmaMGQqeustCyjfdVgndhJD6B9Ea3eH6zCg2kj",
  "key27": "5zL2sfgqtG8Y918dqTdRGdkmBbxNMTkGBmw81XNgvE8LVUUP6uG3kWoeEnzjomUiNd3Ay4hSjfksh2MvjYemPuD7",
  "key28": "5S6GpySg9q4B7YFMZ2Pp4HG3D7fztjMNqRkNSkQePudCdhEnRXYga4Ye4c1hdpJBAZPEtkeBhRD8BDARojGJGzmy",
  "key29": "63qsdXihhc5MV7eyFfjQ4jGLWxWAN7Nub77NY8FMeRmvj733JaWgP1V5ryGAiFrkghbB6dupvc3aLcp8LUfPmyLg",
  "key30": "Uf1g9W88Yv487FkN7dAwz94mGtTAW4hHZSupeeUaymDcUvsurKiemEcfuBvhGiCZoSacRUbKEpyQFXvtKCSUcLx",
  "key31": "3ogy8SnRUWPpfDvRXw4pHujF6wjy3KGSb9Kd1QTHQ5wQTL57qpLsNjiiGXSCWt131eKvt4WUfEjwkWRdXNgJwJzF",
  "key32": "4Fm4gJdMAS19YZzuPnhvXHAygBNimydeMveHpv7ARt614FEiVinBf5kvqM1qPSK6wTzNa2T8vFM7j3sCkDcFKCwp",
  "key33": "5bpMewS6aJKtP8Rg7hcNbwc7eybvLQkEEXjvfrmjAnTUW6NUZ6oXi8ruiUFy2Xso4yxYCdvR3C3TPWcLuBmac4Bm",
  "key34": "5Yt56h9S7a6BuagFadxPzUAc8TUMwccMxRPqNXUDytjh5pceaYcDt2aFknfVBktB1NL52hvJjNmP31KBFdjfXuVA",
  "key35": "2rvyN2S9y8yiz3ytLNZAXxwYXyDVLjyMhgpehLnjRCTFP95AeMiMM1PgRAVDk2ddEsaHY7kX2wYjziQZxYxxL25R",
  "key36": "49eKkY524n3yReyusM5ZcojVtbzq8tWZT5GUNko51wLbCBBPT6gsSkWLcNJj6LVuiqTQMy2uZ63eW3t4v7xnaTyq",
  "key37": "4P1a4jd3wnkjfotjpH4w35FmZe2BXxxtrbmMKHz4fTSbugk7gXhrz6VM5jjLHEshtonft1NLMx43UHjotG3nsM5R",
  "key38": "tEcptjdBhJeYHKeaKQNkGdnL3taocyG9hUzq3gGh32QGgnUAcjVzac9HV7jsjfAFiooRnS6rq2dRVcsGEEf6XNd",
  "key39": "2HJTLsvmhmn8rqBg73DAWzJqiFvcXJyPE2nUnpY84gt4BRuZuEUDCCCFvW12mYNwwS3DRJMQ2ExV5xLAZHEf9uoW",
  "key40": "3PdScyYt4wDhULFN3xdJj9bzjBSTjEYCv39QgwVv2Fcou5Zr1kzCz2SikYoqg1AurRbgP1nvK1fuV7goGzNWqWiQ",
  "key41": "4gbp4R3ASQgN8gqJW4GHWpsz75Yxxh6KgsEpJzxW4x7fua1gN7FfrchU78D4wCXQrnUxcfmFJe3NVjnxoKUEPaff",
  "key42": "52f9jbWVfpn3bEqhHSnoLnr4SX6ofFo4vowLVE9HdjhMiSgxiMjZSg2ezomYyvA8jB9uexgHLVaAgi31BDbHLfNd",
  "key43": "4RLQ9iPcHkqSDFmRY6g5WD3jZbgeHAzsipJKDiW6G9VZ38wJZKTkRTtCy84FRqpCh4jYngsgCPGE9BDSLi8nezvb",
  "key44": "4MDV2TtVaMcEpsU6MYx4oXGn5ajMfXanxVWTPkuE3Lq1AUrPKiQCbUUTnrRCXx7Z1xDYZocjaMZsHQkYdksCd3W6",
  "key45": "3cZG1TfZPfVfq43Mw7nP4RnrjifMPnpt8gniCc1frwdbMoyiT7HUnkCtcnXcMTC1udLFBufxbchWqbhnxYeGjZVd",
  "key46": "rRiNctGVFx5F8cVqXYrBB19DBF18jqZU4hU65bADPh9vd1FCU1ngyH2RdrAM4NAJWWeQUxE9LsH5zFog2X9orJd",
  "key47": "3T1sFCAHPamaPbJ3BGwb4FHyahnvdcRZvdukh2Amd5hL7cEkkMrfwdLtKpJjHBugxGZPpkLWT2c7HKuZ5ws724jb"
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
