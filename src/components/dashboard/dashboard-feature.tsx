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
    "BJ91A3hLT2eRnCpEpNxNcDuUQHyP7SQSVdNGW14Nb5wvmHLHYZ3GRrfpbh4ENg8zPH3QN4rGW2QaVmsDATWQGDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49VuNftqhs9sAQD7pTE7ZzZPEjBb63GGS5yduLqrowt7YdNaERawuV5UsTp12yG7XV2wUnhisukV4WSJkSLsJgpn",
  "key1": "4XcXir8nVfv7UTrX2xbrwXSoqfmMmX5L4HEYt3CLfsRErKk4MqB5yhuNf7RpNCmcFVPwj3cFjLquaTCLfkjNZRLh",
  "key2": "2QHAsT1CRSmd1nSXrDKWHNaPhfEayo1UpMu4xiBL7K48pKvJfSfWhUfWJYMr49jrwmDPcfCPYw8gUgJMjPLRtfTF",
  "key3": "5M5HeRb72fNtSUoaAoi9WvRfjPdPi9i3wFRgMnazDMNJZmztZQG43LMemjVb1jbdUPVp17cBzq9KQvYe8E4nZruv",
  "key4": "2sxKP7DyEXHcMHcfYbqFBXujHSawjCocPjPjxqhzxtMarVLWUvbdJ48bTzV8nxr2jiWCBbs11CMiavgR7DqGFb8k",
  "key5": "4ofhZN7t9uDBepisrSqDGKQ8iANrnqfufFx151bJCmwZacTgsWkBjyx7p3YfFEN4zh4qC7ca63TvG76T7e69ckN7",
  "key6": "35TuwNY4yFNN7kDHmek2JPmbfHAQsrR9CMXs4U6rJJjf49a6hQ5MDwNSF7Q7f5BUyE28HpqoXhPVTncQPZjZwD8k",
  "key7": "2bT4XxLRLHA5HVS6mBtnHGMbQnNwkNQxAW5yUdPnms4zkmpuU9zWCeQcomJ2AB94P13gze3qFhUmNZEpsZyc5vue",
  "key8": "4s4KMkyEM6F18RuK9KAu2EsbC8uM4QRqSfrdtnBdvLigWg4G9JK5uAV8QGSNmGvBU8poHBE1h4vYSKLs9oQ5QuVe",
  "key9": "2qYJVuLGnZRpR7RDw2f8o77njY54v4yMb4peARCK5QGYZxw1K8h3emQb1FcnxhpoET5WgJ73QPE4gsyY6JxHCTU3",
  "key10": "5dhvEPynSHR2y98LEW6bXs3q4kV1S9CME6QFxYGCWDVca9p7adBhU2s8f8x3GPWGnPcMFM8VeaHS9cQViSgtrqFW",
  "key11": "4TaeVBQpB5b17NYPKDAwzgbmyjmWsvskws9ujZAxD26cCsF7Hvk7GqCpGwmn5fy6PtiXgLqiVRHpY33DgssuKWrb",
  "key12": "48bP4R3HoG4uAsdLFgh3axnCRfVWKqdt5knTRkaYGzQrXMXDhijNmfgjLz2XDbSdn1TtZQGA6pqg5ic4UXQ48t3K",
  "key13": "3cxNxCdpv5k3twGaMFDGUqQ1g6XZWnnZ7GEQFxGnf6qb9GpcaLN7wi4aaf4nHNGw1RuKBGpWqX5YmvrUCnrQqNg1",
  "key14": "txXWaWarY6o6GxQZFzAWcEGaJshzuQagTXt4FRZAZtf86uEUvQ1JfuMK2hKHyrQUfCSbqYmisK6bqQySEG8wgZo",
  "key15": "22hxguRrTqVcgaEwB4jwpFDsVvbAaWSoE3X6RXGqVjijK1zeKwN7xxwYL3b8B1vxuJD5AnTUudeuVYYH8EgGh9PN",
  "key16": "5y9EQGyPqtqgVUCVohJKPQddRXKLdvKKKoYPApWVGMG93bofjTMFfLzGsyKCazTofg6NJJ94oRBC2gffZcXwAsFL",
  "key17": "2x6qGd6PRpxgxpMSM2kjg3DBw5mjhZQ45ZJbmSwhMULveiejujhxa2FMzMFd6iSqCFuFFpvChrxJR5oDxVkoXrw5",
  "key18": "ndf5vE3ZbfktVYEEwZ5Ury69wPhogGybLfEoijisFnqWG7gbBP4rE1QsifrQMnpxswfakPpJHpjzop4ePPepGx9",
  "key19": "2Vrk946fNwwMurQf24RxpXHLhr34NKnBhYbiNK5bbsceiKWDLyZhLFBGrx3MjjvULJ46akEdXAZUbuxGFrYKikku",
  "key20": "3mhwEApyWmf3uuvsdEya4UduGwanx9qEM7S1t68LD2r56B24FYb687T9QA12W2WmngwkDpFjML7RUFZcpmn7uPZE",
  "key21": "3MsksRXnLX3GLhusgmEetTHQPLQ3HAEgS6e7jBv9pqxSkvBfN3zjJbPtbqDd4fgDQYEmncw69g7PMBnBvEWeEW2y",
  "key22": "52Wu5RhtcVLJM7i7F8QCdCVhaePnFCyXhifYqVsmu9A31SSCJYix5RhcRxgUPMDK5ix2NexYftE1hiBvEvAeXTRD",
  "key23": "4TFrxgFWvqdLcvPnK9GbTWhvQvaYnSK4xTGLgQybcEZfXM7m14JBDmAXp1vKU1WHoFsdMzo7Fske2tEvJx9Z7fFv",
  "key24": "5EyWuTdmsHUVT8uNYCzhzxJRE9jvqqecYUxRvxFvakvXS7mup1F4pefmiuFkuLNfrsfKZhktznYdh53oqVDNySZ1",
  "key25": "5moHFdXRCjSGerj2QBJsZEegkNp1EmyNP41Z9H1dxDypD6D9hvn4TxXx8cTUU4wezhmpDurC64soDBKvLHMpkjrR",
  "key26": "3gCBYbebdf9UL4E8dMcQ7GdVybLFHSfuLPGJcov4JbiFkCcznojFSdvcW5VRVYcZuoHQmhuK2WN4ZAqJzaiUTLKn",
  "key27": "4ChrLtWif7oRijzmRpSE2iVXa11MJiaHdsQ9naiCC73tssDAFpX8UgGupSPNGhpE2ZdGUHibuEbMhzxGApjajj7F",
  "key28": "2fbfrqsjQEnRoiC9TXmngSWbRU1XfCH5Qiyyfq19g2Fq6z69xwkXeWSt8W9pdhMZn64fBcF9K1SgUA63EB1Hqvpe",
  "key29": "3BNkRfd1YWiDvW66gDo9KU3KEczXSHHQQySVcaPgPswSrhjDos3DMtUrQny8H1TiVpJ8mQNqrqtBcbhjfFQhsgct",
  "key30": "eFY8PpycVgYbpEJr2scvuMrAoygjH9h99jKrnJPhyUracCfnKAnXwxMS1d22hebC8zJViGbzHEWc21RR1J4rZVS",
  "key31": "31jpUtbU1NviGDmdPURBhcLKH7azwSj84Xn9S7BP4MGBvDSmnM6oPZhKYjE2AdTiDv1Dnd1Lj7ztEFqNFP53kFkS",
  "key32": "52Q2Amq1aWx1WD7zCRQnfMk7pnXrnFWoMtyMKtSeyXWzY2cujMhk9fTzCikuwhoCGnU6XsLVvymj2Sm64F5KCDrr",
  "key33": "5UcpDqa2UQX83diE41Jst8Y26KLYK6t9WbR55ne64MWzXsFFmmGJqpkUPciqAThWYe2CDbaBwCMCTrPLThjhqRKh",
  "key34": "AFr8G8emZ8GcNnzWnpeb991VKmsHMaXL8sof43LRTYM4pQBSM4NBLLeJBFRFdvgJAPLTnjBFDj1QF7MkGB32AdC",
  "key35": "2fmkffDsqYKd9k4wD2SAusEHMrfyZhK86ZxXw7bW2hPKMwRgytKQ8eKfbexta25KCjVbHgnSmzrAbqvqbHPnY11F",
  "key36": "4uD7SWQ8LGbiThLFytwwUe137zV9V5CJT1tp6Ss6CwLFdS3McLEzhe5g1SEJkY2mbPM6ohVwHyfPQaSr528fVco2",
  "key37": "3Nkc7bfdnSVJikn5h7sRfryNTzxVVvpQSkukDUGmYay6F4H3znw9FJv73NBoEMJYRsN34H44wcpMGXCYTcBQJL4Q",
  "key38": "5L3KqAHfJmUTEQkpHAaHeGqs3iYrtVAMaXTB3T1KjwFjRGd4mYHYCKaCRa9WpJfjfdiLfsJe4p9vvipVQypcGNpk",
  "key39": "27F1nxNgVekVFT35i2nCXUYmDb1ppnyUk7vZsbiWoPs3rFaK26bH9UuoqanaTgkj8cdeVzvKeDAQf8yQ2S1ymwa1",
  "key40": "34PRJ5HnaNoxWPcWv6M3EDCCur6sR59WUaNPhsWBr2LFeqn8zQGbDFwhRjMpGon6i6h9SpQzfWo97PCeLQw1tPA3",
  "key41": "2QayhN1ifThHySnuhf29TLRgBNm461xGDpeNRD2wZXrSRFHcceZ4vUF231tFxoVnp5Rh5F61zFWL8QwzsdTLZkG7",
  "key42": "jq99LdPppKqxJRFVqkfMWuC6LbqNcZQX5WgDsr7L4mpYAnEF1Nr7xyX9sQU9YRcnfsaJupNjkBr2D98GXWnHC2L",
  "key43": "3zu4Ltons97hMdHxmZrXbJdQgdNYp56wuNeQWncVcTnXiDaF2T5rNLBwuwS2bZ2tMoAnVuqWYoVRPca2DL5ZUMhu",
  "key44": "3WQVitsXtAD8MzGoaJk323uX3KjqvqGZG3oRo3P8Zwa5rVpDCNAmP211VfcHmC3Td2T9Ed8fM1jGGbjD9mX6e6tJ",
  "key45": "4ZMBKJuJ8W3NHVRYqFpjpGrujEKTXpA9C615MRTChPUbpaw3RfggRzHXNHkewrNxGddE6UQNkJSrsSjyNdvxR4zQ",
  "key46": "48rZ2urPDaqeRBcCdLb7XCQCRxxzXWnx1tvx2W4B95h2bwtjb5MzNeV9JcjMeJbjuFwy6dqXu8XhLsnLsiEffrZu",
  "key47": "5iyNqWggg1gvzbfF2hXPpTPAFfDkRHwR3cPv9KQzJ7QC7MSqHXZsX5gi1HN9juXK4Jh94NkywC3BTfdw7gFC2Nw",
  "key48": "2bGAgeKjNhxYa5W6Ezj7ayQFJbMB1MXTBVMp9Az7jEWwQ1XvovMPun7UbTBH6chp4dnocwtBxjDgg5TUWfbWHU5k"
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
