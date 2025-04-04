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
    "4sG4sEKhALKvwiri9VptGCg8E6D8CMdpyMg7Vs9TfzJHbvCjSUKNsVMfkDwkcUamnzcwDXNT7NSygjr1SsuJjSua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5afPLafF9BEBhhbeTagvdQqNTFaLPbhcVXcwXdDX11M3a6r5gTAm9LGsjMK9eQTLhzHwVFh1gEArQPzhaQWhNmru",
  "key1": "2EcVW8iBarHEY9ex8rTKoYafPefbzX2QMzs68BLkmjPDJvRTw3Jb3o4s4s9a4dTW1yGfXS41R54nTrkdt9M1ffiv",
  "key2": "3B61mkrJhGKnUoTMztY2tipn26XFcab8HtjMKmiNRQupKEsLFJ7PqRSp6eVyHSy4tLpZ6dfTnpZT2W13i1d6uGBq",
  "key3": "28QrkFy7yFM2VyLQCpoHmocwXQdWxoWiSsVD1qyTc9zB8DMf3iF7c1iPVMajD1YaVSjo17VUTBGUSZEcN33JLTLk",
  "key4": "2nKLwdWW9WjXLhUHrEQTzZPTrfj8iu67UeUSj5B13fCKAQDSJjBMznXV21Sr6c59WGRjwRwGqGtMzJG1xzjwL4Hk",
  "key5": "4qoF8Dr1Ltr77qmMZnw8wKtrHxPh5T3a24Yw6hw5aRTw6BmyF2nkZLMPTB2U7fDha89GaAVUeaQ6oBQeG3T5ZuwU",
  "key6": "4qf2X4c9ea98jYGYofpCsfBSiEcoypZPXC1ooQEVAg68k34CEZN3XjwyMKhfCHthebYZJYiBAUBF1Ggp655iG8fw",
  "key7": "5gHnU8VMdM43mQMbbbZgTXcjfNAA63JSThgBgcJNr9t4Ks2fjvcfke4ZE1CEA1hnHZbcSuSVY42HDF4s1uPGdThN",
  "key8": "4QfHZHkedouqdpepK4kJHj3xFquJeHDBSjhShswr8LZmdKCqG1yxkzWBsfZFXw2jWJ7eoQqARppS989kmiMFQDgt",
  "key9": "3diuQpPRCUfcq4tTuLmUqALSot3iG7HwHNcvxV53hSSr8ykEYeWvwWRGKQHYWqmehZfQzeqJH4F7xuCvYBGLsy6Z",
  "key10": "a2bdXF9NsyKqvhTLcYaDBgzq31f1rzDNefYd8cNLmhoceJctAegFBmcpYd1yzhdznLmApuSDtfSjinzVYTxKqbb",
  "key11": "39QGcQUemV4HnTFUJ98EMAX1LCathTTZiQdMh2rWnxmRzSSykoWdRFy8aKEtpbo5CSE9u7fwxRhdg8cXGLRWivKp",
  "key12": "3rGpKLJy4JoSr2y4qj1f7VP9LSiLneQFKyzQGpfs95rtfxCS61BkPh5kJfadGcmHabSxV49KkzSHsTYwACkVJ33Y",
  "key13": "64AUP7LNxu4Zyze4MCRR1kwoHfrh672esy7SAKtSgKD2jys6GhiUKe4D6wGMGXDtjVnhJL6U2yC8nwbfRbBtjXP7",
  "key14": "3fR8rh1o91kqpaNFhtwc9jgc4kLuc45kV28RaZ8SK81W4W4KKN24hriT4XaryHPnVFGQCwbeMm6VvSaRUSyCwXAP",
  "key15": "3a6eLjy9T3JUiXnfVABQ8Yx3ypeNjBYL5A8J5TdqJoHAAhS6kA1EPJmdZsoyNsynXQoipvYNucxzCYqHH4qMFJGt",
  "key16": "5PmvFtJTtD6XqEk6YoxmcDc1Fz5mVDUiHHcrPrUHaXUKnC7Rvx7nRKcZHV7yJ1UNYWtw5qs7T6pdyimCjzetKVYm",
  "key17": "3yAJ2GDi26mHMWXf4puZkFoR5Gkzw4VGyDAJ7SDgAHjwdHHZuPbow499vscTKQYPmFWfKXZJmgafDUmmFn5dbe8j",
  "key18": "2KNbeDKSQ4BS7Yc3ecaeJ4gsgv7X2Z1qz2r2gdi8ZLbEjrWNGy1tCobpy8hpcX441sY2ShE7jrjmVEqmf5nKXfjf",
  "key19": "44LggH6SCxpmDf8sNRNL4ZYWVW5SMUo9pcQ7yihw8diEck8c3gL8Driyvcvbq2rdNPJTE3coUaAhLr1EzFUneie2",
  "key20": "21wSwTWXWbNwkks3GrXLaGNAf3687CCLZmZ2pE4mhC2TjFGQZW8RyQKERoziTsJDxFkbH3B78XyCSfaaP84Aha2s",
  "key21": "3GfeibmFYPZz4bKZKYY7vtHtYDgErgSR9Uk37wFkHJyMq1udnPs6yQWCWPNC9tS5vx1PnmjGm4aS3d9gKsus4PcF",
  "key22": "5WXQVumTy5nhuNasP3eFkQWZa5sfjwHRpnPpFASierHtAzANyLC75AkjYs2jHQ39xVZNFuCW8jBhtH1q1LVCVLEm",
  "key23": "4PFKDykXBAu8ucaDGJASSXN9G4fwozBuUzqs6NZJLGno85ZesvdRs8dCa8quQeRxfi5gCqs7L27qnKUJ8UHbPuSH",
  "key24": "4avfqcaLrFD7Q6j5w7AWX35YdM2eRN4wdZXDUQiEQxac7GozEGdkEmSbeeHXFnKGgpJ2B7BnnAW6vnPWNCJMqGob",
  "key25": "oKZtiKVWsAMawqLhmSPWJbBveCnqoDLhWiUHurzkwunCrs7gRxRqhiCAHbonaeBQJNfUZuyg3QPm8ZdPJy8B1JV",
  "key26": "5sB3q34DSpEu67XkVwpgz826c7SJKbbfgVzS43CzhUwm1cwzCqBazNFYpYZSeZWXXdoE2RF1N5soTvK4D94n17WA",
  "key27": "mihH9nmUqc86W2sa8qqLnfugWf9eU7qyN1eVc13coCUjJky4gRFexacKG3skuV99xo8meCrAnnCE5yiCj6UKuYt",
  "key28": "9ytExs2tVS5XFXrFSUHFBvUP9sKhBhDfno7joKpGDDh1Lqs84A2XQw5qdsGn6AQbdBg2pcwyUQjcfzqsY3jUkWR",
  "key29": "2xGJdvhcEf9PhCDzmjFzKviNABGL7rSG4fyu2dfMbVfjBN5tncGcQx9TMtsi8LbS8e1igE13nJX5RwRuFEdwcvum",
  "key30": "4t1t6zvWNjTRPsJv5tB75Ebr7ewXaSZpLVnDFvtrLDahzC3VQxf9R7j6VSRptGyAf7B2vJs1B2FNKjKmPAd2UsrE",
  "key31": "4Rv9CSULqaZEoHJTHLXcZAZV7HeaU81tRfnV7ddL8Y6tKnhPRSbfRfWFMdwrwFDdMp8MRUYLi1fbXKMpNEZJH9c2",
  "key32": "4NMNDgDpLNW6nfCVRGTiP3dmjPxn3oVivt8zVrHeDeLARqwS5bc8kk2Pbch57e9eM4anLvSWZP1wFLU9Z2dt8mhd",
  "key33": "5t5xtZpnBomaTWWw4fWfTdwTpS7SzjWPVFK3DEB7v2EusnXyPvBoXJyuZY1zWwgbuSKerVNGh3WRGiSgfaNJTM1E",
  "key34": "3juQBrAgUEF2BPY35byEbPisj2rcneomoM98Du8xwG8jtLDk57VFkQMXbpbBRQgSMcrpqs2o3ERDRpRiu9MC3TR5",
  "key35": "27Yq4ZSsc5qnCKFq7FutzZUcrhBYi4164EbUDuat3GDDdgNHLC8DiKAjuRCHWhmQKF5NGyzhHHiPEvMkzuHisVH7",
  "key36": "4nMy932QeNEStgF3NtnMU36LdRTa9G629Gkh2oN6ZxN48tRJDT6jWW2uNezkZqPj13YyS6egsDw2v65pvEPHEx1q",
  "key37": "4zTouSpLRFQ8ndGRLEbouQn5ir84Pr1Hvqq8JDQQ3jf5pHDCSDfXDGC9ctyRh7zBVjmXr6Wkz97wr8YFPLygXWB6",
  "key38": "29HKiq2zdbnVpV84EqLwTzAvkVnAFRU6Y9uEiRzJu9B8UgLvkbHCpJPJ5B8fQxXZU9tmdxWMjCZpXYUuGFX1cvTr",
  "key39": "5R69pjxMZJCaBm5XsFkYmeYS6s3TLzuomHsh5fFQbMmi6xZwgsvX96Koj5PHVru2BpGPm4ksaFgRraSgeWaHEFgY",
  "key40": "3BtmtnkvkKxVN91QKbrsEJ2e2RjjAdGh3ACp8rYjCxhPuryt23Wa9eokgt1oykMDGrDgdM1DYYTwpSvo7L9XiirG",
  "key41": "HFp27qe2SEoQkdJfPiGssZyE8diDeQZwHXnquV5Fb4sQ1rjAm8T1ByZhydquiNkhfq3Kxpb61CLR6651cDJ4HkH",
  "key42": "24NiMvBnuYmzEfY85mLHidjfsnTcysGjXoGvkXHUYj8bjBWM1CFPdfkJqm5vM4qNRdfq5VyQvCeebvuTB27ZXxsK",
  "key43": "2W9Vvs7YvQFwUiLtyowwjSV3u9qCrUKy61PtyA2BRWLrLDxXgPpcfASmj15f8rVLyLvxH5HW1Sgt8hY2Mdbrxfxx",
  "key44": "BWBRZdfXZyEbBenEDbkLcGJWSKiSjY2Adab39oMURFsqFLKRiqX9KLUaxdqEz3wfbiYwCQjJMnraHgB731DpMiJ",
  "key45": "3T2doBtrRxUtUhbPFqGuqMiMtiCZVzE1s6aZaoxT2fazzGsCCuKzKL9d8LSz5h4LXJKJAiAzezjnyRvFiHcomAqH",
  "key46": "kVi32HtJ6CXxyZ7BmzcLwULMptM1bFAPAs8AsyH4hJNVyayBbw1RaD4WrEvpR75ZqAD9CwHEZALQSRdyoNCcBxo",
  "key47": "2vrcahVgBvH1NTEfMTGu2rsyCVfghTiqnjsPdmq8T9mfs1zr7jwd6rEiHcspCWY4cYYo6pAqKaKzU3cZs1vZ6UdQ",
  "key48": "4SpKHrfu1ztVtVgyr6kfa87d9cRETfbKhse6VFf5zXTaAuh4h3UhmgZwQTXazKBW26TZhJG3tvEQVPmPU2MAcw4a"
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
