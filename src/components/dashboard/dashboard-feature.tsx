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
    "2p1Rbso5QpnhruBD4f1W7j2i6FFr4oiTeSSNdt4jwbza8yXcHZNzgDUsSzxSVFBNYGnD5ChahqRfJnCDqgJrbmhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Auw128RbygWDkpZwdMyZPTLNpBRxoyNtCLLywF5FZnSa1yyuuAof5ckt3S2qJgLWnT16CBJyBANz4SEHCqG1iLT",
  "key1": "5PboSwJjr3BLDEHUyr6s9xoZ27hKfnwB55s3Yo3hXMY5Jv3X1gDZumTntkHXVv3dkPFtUyweCDgD6Gds2GBbodwZ",
  "key2": "64iUxikzk1939CM8LRvL5sUC4Y24KXpED86cANrB37tmyjBErC1VF32MMGs3U6HnkueicBgoc2uoZBEViDFzGqP8",
  "key3": "efZvu7yELHxc7D4SfN7djT2yrhabYv5SwTvAP5rcmR5uMhrsCqLQ94NkD8fhxM7WGPh7xs3kocY5L718pmSQctX",
  "key4": "5vbitwgDHjKjUbAz2acmDnJN5ibCMMdLUPRWvh9dqMoJnG6zGzU752E4vdu4Vkc3PD8HrrPJVK88AmUwro4wTYbZ",
  "key5": "5VjvxUse9yUStYoUHHG87D9zeyAHoKpoPEfLbExhHcgyJbipRiHNgMLPhkfrha3mmT6arEVVqjdSfnosjCYveFZ1",
  "key6": "4V2PovHudEriFxHBWsdVgvpFdj49QjMAw9V35LtB1rHaG1n3KxjjF2PpjZeREcH8WFJxz3ia6BRVcwRezEY66ZX4",
  "key7": "Q5KJpYrTrQLnCWGh6gVaNBfhoZjmQHFtwJC5w4DeMQypAsuNxqMirMSD5n9bKePMGFS17CriqLQeLYa6QBmCcpk",
  "key8": "4Z4K8Q38gMKgDfsVfUu93WQYW5Y66JpagZgePPzmzgr4aYti9taeeLft4tPemYUNMzrhSLyPwnuco942VJUp1Poc",
  "key9": "4ZCgR2i5q6m7FdRG8baKdjyBm2WpgYGs2MmUJa4jw3a8odsJn5MUXP5zzPVknGGQqYboSb3XCCUxoHyPr5E3Aq4X",
  "key10": "3MMp65U4CcBDx4FHwpeCGLJgFrLKPtnvcTcPUWX1MDmoyA7uDVG3uG9w6Ke7so9TmDZckY1mDnkanMTVtwQEai8p",
  "key11": "23BnDsHwzYruLdq6BeQyc1KZpnbEkM8DcFaavphJNt7s1xHbfD4qqDnXZ2zQg9wnbP6vhVNcS7M64gymd9Mjyrsb",
  "key12": "61bZ8nFr9DpwdnRpgSLiTYSsvgyGinPyEHwn9vofinpjrbxc2p3TkwvMtQSHfrAXFnUdKe5tsHLtCuBVhNUb6A3t",
  "key13": "4Gpdwn2QkCGpT5yTfR3gRUAm7B96TQvZ97uA2XFqK2VLMogkfM1g6CAudHfuvA6FTnA9MDLLY8by84K5An69JHbi",
  "key14": "2cuKww9S4faTthDfueNFDB9YBKep3TDGTkjzSnnKNC1tVENbNgftabmzzwpt5F1JMkz1w8LjP4UNdT4B9QaKhm8s",
  "key15": "2qKELYpxjdMpEmpvLMk5RaYHDeskLHTXK5M7eBQ2qHpKGKmELka2dLM5h7GmUim8RMqf2EeeoYEtLxZm3u5vL2BZ",
  "key16": "5ebGWYfwTGAQf5aEvchsw6c1epCpWCrqy7t8k2X6S5LQXsMYTjVafFiVa9FkLTJbrz42jLsokqu3EyCT3TELFaDF",
  "key17": "3WkmZuP98Tr9CdSnPbGR6D7Wnib8aWsCvkatabABNAgtCH9ij97tRPPjvWAj9Yj2DTUxZR5rE5pixxxyYZPBB7Re",
  "key18": "21dUatKEKYPikJsmbbG2CGrqC3x6KTkWikEmWrjxDL1LwFHm41hQ3Wcy9aZy5Q2htf7ZFTyx5sbuXfqJ1eEYTdKb",
  "key19": "2LxBFtGkQ4QHZgxtcQ9AoftVJMVvJND9Pht8hwSaM78bqgFG2aM8i8hG4EvmK6HFkJPjowbHtjDCrhjAtKkZGbrs",
  "key20": "45LF671MpBUBGyiKP4o9k2YyB6z5UZgrVxCcbuRusUA6SU1aTBPZNRPxhnwMcUJfQmqB7tHKTsQau7LG5FvVzhHC",
  "key21": "4jUw7UTZWHTmxCvNtEU2fcZV6nBUwP8APkPz9FK3H9VM2tFf5ar3YToNvoDcCTzLG17dhMtUNA54YYZXuDVbcedB",
  "key22": "2krhiXH8mxufeMgEMR5rkfhaSzb88wzeU2gyQhGrjsEXLZyQQCQZwNhRya8g1cdgbp7bQ94jJkGs3gEkMQW9U5f4",
  "key23": "2V23KzbnsfeZFsd3oxmUbDcLHSopTt76rKfneLa4L7EV1wgSGWkfoTL8RUiYT3pbeBAtJGDwZiei82ojwLzVTXCt",
  "key24": "5ig5HLVTxYWAjJZ2pS3uVVx1Loe36rAe9Cv5zJDueqcxktFPm5J4XipTNf49qTe36FwrXYPmC2VUhWj1ACyjP8Tv",
  "key25": "2LqEzkYE5NjYrqTdktkiAoSVvxGjwC8eFB4z6NmMwQNsMqYF1ZCTq1fphbS4BYgcEqsPCbX2S7vqfYDiVRcF3L8J",
  "key26": "2ph9iKQ3R9L5ur1VRDhK34dewQUx2Twvi4cH4pV4PASrWzpa1MKBj1VX7DH9espaVFfozVLz3CaDmi3igWJjGDMQ",
  "key27": "3bEGGFMVBva4uANiqkiFRp1pMFEuQLrJ3s1wG58EHRpEpHQ8f7y1cMuMiE1Dpp3Q6pBjexxV7kBXSQz2AWnoxZPa",
  "key28": "3RDHXzRRXZV4b9MtPQrBWwuYBDHn27GGfTek5KgUZ3mZybwF6J4o9pJkbBkgVutXHA9omhP8EMvBjicLyKk22hZL",
  "key29": "2HNGfrqKBC5Nkopi8nYNa71W7Td3fn1zvEtjU39ix4nvBzwG6tCn7jTLedgRj3VGS7nJGyHFfWnyt7sM5gVszK8P",
  "key30": "Gv33KxfuXakwE68VMgjwKbdLgD1jgVfoqkFhc1VRABWdhiQFwKbAGGpm4JwuxLAZGN2vD1uWvdVy9DT3kL9vGbe",
  "key31": "5vDsyXPo9BFcdXzxdsbvXy8qTdGY134drnrxKvjovaiVPPpVYimenvz9hjwAhd51w1bcDLpCMZXuugzPJsWNcqV7",
  "key32": "4wmxLLGmvQ8ZbtrriBS1J7fuS7zRhY8yYtgK4mRAKZ41YXcHGy62ZpPsc3fRpaQ7ztFWTfNjCfFhntvrVeUT4wkr",
  "key33": "2ZVeKAYmRmZ7Zi1cYh9zW62HiAEjdpncEaAFYTqpvcCDecvM2gAsNciEHf83cyAFxRGxBWnYLTZ2rQcFLBRNHvLL",
  "key34": "U1MTigwdaPzjjo5sDt8rV7oXEsVPRKYeC4ATyE3QLQ2ugcA5N7ra5Q3SgRURaXrDiRUNx8iHvbk5xuw8goRs1zk",
  "key35": "3L6d96RrNThSqAAF6itcAYGYeJTLtHEzmLdZHCTuapSn8HiAdhVNjDiEybtDXDpN7wLSbKEYQPAtyR5XSsRWV68N",
  "key36": "4giCenosA9Tetz7WPirDDULmzDQhnWkeFJrsvyLivXrGv6dd2w3MGWLQJvRF6KRyxbsx4qF1br1WcCh5zDZDEemW",
  "key37": "2wJYg9MAipLkg67dZMPpPgK53eer1QA9iwFoqnPiHDiAAaqY2BbCv8dECGcsiAgSvUYR6UFTjSFm2D5E6zEss3Zx",
  "key38": "1WdA53wB6vjikvnFpvHk4eZmXd4KNd2HNqQYSbWiLhmFrd8HJEfGYNKoKwioTtxiANbw43WJSjr9UHeUoo8EoHd",
  "key39": "BCMWf39FNKAP9jrNmqtRrPXdQZZCd1x2sD42XGfoQRnAko3emH6MbE8rQoKPsucVnGP9PSLcYd1kqPxU3NqcXg4",
  "key40": "S2PSc58rEGjfc8kRdkkMNnByKLTshM6C9FTpfETfVgmjeMWg5S96TjowJpRtX5PkXLBUbgfmuBPa4gxwKBhPPMf",
  "key41": "2U7H57mW3HuaXUp8RCfp4wAvwc88NmPrqf4CcL9pem51ChfadkjwAf7oe8YzKRjYic5YuD2BvNU5ewsFBeJn2T2D",
  "key42": "5uA9w7tZVuKuPspuBPdggGDoFY4Mfy34QdjNrEiviusqcwYsECveK9xZ7Y3Xq5jQbWQi7tDYfENjcyY1KNVmYAgb"
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
