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
    "44PtCqurz2uTSWEq6JfFTdVg6fcwvEnJiVWrACsxcKfdnKp8hw9XR8QKAZFv9j6ZMZjfTDdpHmPvbYpr3oPTDtmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31fPyy9prcGANWbDCMngxR4iUTKjRWwkKLjnzp2SGVep4FMiWLvSfk35nbvoXEo6FDepn4MNohgmDNbTy8FeDTrG",
  "key1": "5CHK7qpuF4W8qbpdCjMCDAQ2f8R18urBPy4wgN2c4tcmiZKsWqNKSWAmZbscZDtPZP7cqJr6Vcj6fw3bJqKpx5VH",
  "key2": "5T1ae4kPaTZgEgWWQMH2csyL2EcQqBNbGhwmWmzeotuf8u1Vouxn9eWqbS2gM53vsaPTCPDavGUVyd43wLLLZAJU",
  "key3": "4nnPw6ovHEKGnjogS6eoC36Q9ePkvCzatBABz4G7jHeRkguRQddpboJisPifRVTzmEtBukNFU6RXx51fdkxwmyP4",
  "key4": "62FdvnMjCQghGmeFLfTR5QUcHEVxzTs9mHMJnnvqMingAfD7EFWwvaRxZtPejfH5DGYAqGvZP9hdBan4623wRnFr",
  "key5": "5ejd9nnWRdBMLVFA2A9mxeB1miuXRKBZTz1ooBnfBpTTBadZ2R7ADmq5qb2hH8tviriyyiyvNbuisfpipHyUbqvQ",
  "key6": "2FJuviPuZedJnBteJDWrbNGHvPMbCZjSfGfrtPcYjAky6b3hzwMpsTEt6M3d8jWwHw1gvuQYVp3a7HF7CZDkyxmd",
  "key7": "5VfrvDMBTCp2opNm3kpKKVgYC3rVMuJcj7ztrZoQUiNaZ2XzF1ADKyDUEyEEZrB2PAGXYq8n54gyFypheuxw8PAr",
  "key8": "9Mdvb1Chob3o6fkJW4q54wu64g1GkvSbHYexFTpJi4MLwLUp8GW5sgZrMQjcMg2T6tfX58rC1yVPPbW8Hug5d7s",
  "key9": "5FTwwgcTmzZXo4HCFvgZgKtBJtfXjRMiSrQMvdCiN9KNVHx2ruGbqJRwN5DqQQDoRa7kYi9gjG62KQzU2LrVMSNW",
  "key10": "5YqjZHStNeDMQEbn39XtKUhTieCnEAwm2atxcgmhPZDTgy8XZfehE9PQKcGx1cVoXjVjSpzvDzqRNhHLXMnCXxWP",
  "key11": "4ktdCFzyzPrmo8VSeGbHu6pp5Xgx71TMotVXkXjy5YNR6z9xnoN261vHJEzTJrDQNULRdUPX4BcmUd73ypeHwEfa",
  "key12": "3vGibEBoc5QGv3awNVuQT1TUqpkHQ2vLtM6UaCtTFwSxtNjGq3VR4TnH65WkKuzvVF4zrBjzR3GfN6D5e2cuKzjJ",
  "key13": "5gQvk7HXDWWpEJfPom87Wco55KMHncV99pYJ8p3c8TtxKDQq1hka9193YEaKYcU3RfPbRz64nt5ekajFMYEnogg2",
  "key14": "5mLNeqk4y7ctu4JQBSW5fn95hdjZGARJLymrUW397iWKPHa5bfg61pbbvEMuYRxVZsGnp4RBFAwnvtpCVxRaAsuv",
  "key15": "3PqR75jWaEJ1jbPeF8ATrzNSAxM6EVczx3Tv6oK2Xextox4dDzXtFJJSGw4F6AuPvs55TB4aBBRnSC8CxM5rFCcg",
  "key16": "4XJzaU3qgPFv5WkVFFUzaNjEvJBnRmmQb7CV6nM128tXxSCo7VMCYP2cpz233MfGzoUa7DZRD99j9TVHMgnEWJXY",
  "key17": "2SzvGPRYJpPSALE2nzPHnJfhmcErQATxFBgFJLnAWBWRJhDfnNXaJ4ApjiDy9raAe5yTddLsCLnH1TPCNbypwjt2",
  "key18": "64UK3JB9uokcfg8oAytmr9UgNBxMUseaHvA8PrjuirCMH9qs6Aq6HXA8UgPNYnRTuSfBjg2NQ7CxtJ4wGcqDRdsM",
  "key19": "4YooGrDXzVznN4Sb1sTSX7f8zYgpVQpmdNdFUZ4LRQqPhws4sP9p1gdRqkMbRtGHHcFLWsFhgXdUzHXGburakNQE",
  "key20": "2rzZVknM4PJPZLRoizQy7bpaVQBBFdiRHGQvDx74AK4zVkswcDpU3D4hxHxonyHosWBqjt1H8yJfMr3DtLzbDBR9",
  "key21": "2Ma6TjXBzh9pBQzUWjFTB2hsEA8mRqYmdy4S1yimedcgqMVZg4UbowqMj3yesg55isEp3nhWEYe2mmp7nudh9CCi",
  "key22": "25AGepEcXsaioFK9GBohg5qWU51ToMqQj5wjA21wPbxB9TQyMRPiW98G66bUv5gLnCqNCzRSoL4Rp1rbf8p69ayY",
  "key23": "3abgdLE6VdrcuvEt4QvWJivRySJqzGigjVVLiYno51zuA8bUYFuMhH4Y5TgPmyvTNDcP3mJ2XmYTzbidCXjgR142",
  "key24": "3CFj4EXHLLnjfzpkdLXBvn8YtvjsVub6gASfryYr8LcbxLGZYUGw9yJDArJPFkMG1AcEaQzg1UgwxBhHQAajfSuS",
  "key25": "35X7qBtrCG1rS7Ea3t3yFMPLvzaDngC9y9MUkZnvUNkn498mPuNJsAp5ima4DWY6hYphgJwgCU52S2MmcXoSLRzC",
  "key26": "4rACyGMVASvgJuHdU2tFGrUQ54e5ftDGvoJhe88VVkB3zNNZUa1G6MQqAccmhPVAZZCshMTPK2yor6xFqtzFypjq",
  "key27": "4RqfahzupZ2hewuZ9M2rsmXM6R8N6UmadXQ4HFW9Hp5Zvb1iG2EZJhT6Zh7CV4AZ5CbFkf3pACzE7pJ5vFzhRV2N",
  "key28": "3BTyL41ErPzyC2fv55bEXLZwMCC7SxWbMj6jwSdgM1DDsFkbNy8WLTQBQRacDMKsz1sR8EvPhvHz5vUojWW379Gd",
  "key29": "5NHtJFt8uoogrdtNUXcBpL1xbHE79wTmLzd3VCsyZxYQV4iC1PTRWk7euhssS96Zb1UigXZ2PaULekfabaDSRuv5",
  "key30": "3CC8xuvtJbNfLWy4iUg4N1qGYo1CxxLLJcxDohJ1pknnByiMo52phxLWGrMC6Av2L1WNRWDNnGtY3bs8ajc1hFgs",
  "key31": "4p7b9V3QDyXAtKwNGrCHeCjkLZJ3cxzx4MnMziZYymDGGJ7bCzQ3dFVCDdKK959U3CTzqkjZ3CorxLa7rg4qRNNQ",
  "key32": "5F3W6D6CtNHwpjViEB3gxAMGhJWCmLrcXWjS36HDhzwreZA5bGJNpMPHk3rS3MmqViewud3jLnXnuaxRi8TuPeX",
  "key33": "foyfCvB5HGDHhYTQkXc82Zx2xiGzjkuNJ5WHWaPEavYMFDxEBAZ8h1SizA4bWqm9cq8kGujV1huGW49eUzX348S",
  "key34": "2jgVue8KPa4YkhXwCRBAVAHCcUtk2QJKVHsPPURBq98xuvQSkhSgBjkUPjZshoLqUqWAixfRQiN6NSsKKDjVSczy",
  "key35": "jzANuWNs4o4qdT2ure7tfyWGEGdXSshEQS3yxRmXh9dsVwULvZCfz4os8DPePxZ3b3ksdCCrh4GzSXKU7RARuzp",
  "key36": "5JWfwo4JLK2AVjsYctxARE7g1eFjL5MCCvgYLsVYyFL6E8ghxTpoZA6gJ2mj4pXLxNNBCa6YgJxPcPJtGeB63weu",
  "key37": "2ZnSwthXFP694J4Q8EYKHjDfsrmgSmSR6i2WjZLiwsCwKfannDeFaNuWf2jDAv6U9d18WZ6XKBqAegTLkjcHiPhm",
  "key38": "5Mv3xZDzayRuh1YczArJBvHuPSehyvPjypkMbprBr6TsmLc9PHUtCDbAWZ2wmtB5XHkEgeGnbyU9vGiPWRE29X5M",
  "key39": "4vQnnbFZ2u7ZjRmaUkkHi3U7JRHruBtyvJL2A9XiK7Th4bqKjUTHxifppi9kAy2ibmUQBdMaC86pJXaKMX9jJwUA",
  "key40": "5UC9Bb1nbyXwx1euncYowYyasJhPeC2iwRFhdc8thjqQ42sCVsQRkhq4vfR1xDSe7Eahsa4QxpATTdtjFWi9BUsy",
  "key41": "3DHJi49LTb8kJ6RSB8FTfPPfycKnkseMxHu611c5NfoGr5eHheCMAMTvKZhL4mmVs6vSw6XUN9Vufik5EdagPB3Y",
  "key42": "3ss3VUU68LLxVmiMXtdFcLKm2QnVTbvoiJv8C6jHi9ptw2pT6zvLdNLVSxbeDyq3x4Srni7tf4UpAdE14wAhz9Vp",
  "key43": "5aY737o1Sx681DPNmLBJjT4ktvuKaUThRDyHJzNVD99pNPPPjcETADnR6uWA7HFj2YhDo5nht5FvXNZxMyTS23V3",
  "key44": "29jYpRHwmcc1Jzr8CPzDSZ6j1HeQdgvJUgPcSszyAHA2Lwc8anDtVrpYAZXiKi4qTR5PYApaTKbbbuMvizo8irQB"
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
