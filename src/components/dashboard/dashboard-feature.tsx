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
    "2usHUp6cMDdTHTy8QHDGEjujWw88jkxmVrGDc95FnRiyx2fh7dhcQ8ZCKXL2sux5UirCUxs3akkKXmjhor4BtqoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R9XL8q7N7HfUkkM1jp2AA1zdLxJ7ryVSGE11vbx96r6UtErTK5SJU6ARxaveRY1hBQemsxeNCBx4mHBGyowdXG1",
  "key1": "2Gb63XyJeQxsgh1KMWLahBqLaNrQanVmkxsoj5FnXwHiN42a7Vwu7hNEzkEmMDAoqyuX7MLu8AnwX7x1aSeZJ9o4",
  "key2": "sSmvm7TXDfnfZnvY79syD3TLAfNWV8a3RfufoeYrs6Nn7f5LMfoUTcdTSDzSEq9xQGdzuoH4tY5e4RbqfHAWeYw",
  "key3": "2JoNbyEuHgirsN9eK6udT8KiavLZ89KsvGGoDizDEJxDSex1G6y1sqXpaYSSUSuTNZtwUiL2ZtqjKALYk9hYUHdu",
  "key4": "6djCnMYxJFVtXEjM2z7DTJWBipsfetJ25og1xopxV19oTeGdczfAao8pGREyxuk5er6okpVvLTA111J4ZbmBhPS",
  "key5": "1QeLeoH2ZD6KN45n3ZZbRab7N89Tg1HJYSGZnmZHe7qSeJRz7QCeMxB1mN81JpESAYTCbtorKs22fc7NZYisAza",
  "key6": "4LDef4rExnNzAFHm7fcfssB9VDY9xSUZv7515qq2YnatLc5wsQg8EBAybcVbw8LV3LQVfuPP57YPh1AUAX3Dafzj",
  "key7": "5yheodYqMBLPhmrs2x6Jp5KfMennX7H6zcGz1a7v62baYtcSh3AGUaqzZ8bzDtmvoexxn9krwKR5yMfUY8vyy6h4",
  "key8": "5hADs9K6jUqAzxKqt2EromFe8pp7Wkq4padB8sWm8Wwzb24mjz72ZsdzQH9yoWyDuv8GrL93RFKTMYWpaM7XRVmx",
  "key9": "49JfdAPNdJ6a5G2888hmTo796KPNH15YETKeoMAAbhXisquQyakpo86MUmm3p8ufDcGn9zhHdvMrRnW1NjQQdXh4",
  "key10": "5GhNzFyjUZ38HxnmwM32KUDEvkouSW2Dxni9UmwwfZbW9NBg9QNkrtASsiSP3Z9xUMunL36M3PS5umcPHJcvZtb1",
  "key11": "qzPyjWm5rnX72ipmH5m6gJuHmZ5uhSMqV7X1ZQVjaSG1512yFFrR5i7ugTcKywghkwrtRs52Ev4by6U2zTd6QRy",
  "key12": "61Pr6P4gbUTRDz2Y6bakSd3QQCgApGAq6NhmArqKcRah4vDqUEVchupZaDq5YNGtUHD7nqA22FTWKfXp54U7oEMN",
  "key13": "5TQrYpVLW5xKozz5ckmJpzcUUXfs3nHfD7pJspSQ5LjdetUFkCQe5HvW3MHuA5XegX5moJgPiNWRpnxyHDw1pokD",
  "key14": "5Lcy2puqE2yqTgNJ4K2dAKZqRsYcVoWoNf5LFdVL2HAUmV69h9babgNxBxuKCg5hna5T6x4x9EU8RJTSbMRrpCtq",
  "key15": "P8RBYQ2VGbZwTpVZbwBLYscebBhDuqCPUAU9ZHWETSEwhQACmwDhhs7KaTYX6XApRd8s747kWLBjXyyPm1PoTov",
  "key16": "5qqNM3Hscnr62KmoH16z3zfyupKaNXacRmYQvMvXZQq7RSDg3EWvmR4AYew8rvvMMnktNsEJMeYFReW6xeKFYK76",
  "key17": "5EdEuwzY99jhJ3DtuT4eeYZkjEdqyKity9mS3eid71VYzJM68ZJUK8rUpKLUrJAGJjBqiMrVCwF3rGrZFJ63YUrx",
  "key18": "5KaKD38To69WYj7ogkeLnibs8UQezMNmoWh7MNVJc7CbtpuWCJuSnwkL4vwgmfNzS3ozoYHcCSB2zQVEnkNPSePT",
  "key19": "39Vr643JZWYoummZseePgm6c2aV1Gx8ZYWmrrTbrpwLxzhaWwGWG2Ukv4qZcgE2pfoAHYdC4xqctzYm664UeADfP",
  "key20": "5ajutQZUCczBqjPhGrJnYFimRcw18vpwW7MBVj9ABsArXoYyNhhf6aPVTUeq32iYSRNj75oM6p7nY1zqUgb5i2YH",
  "key21": "3VNA68f1zcdDrjc9qr2TLxBuqDoXuW1up27ajVGdYQBchqqzZi2DqGV2jfzLcvfLh2LsUq9A2jTop6eXMvJiFoUa",
  "key22": "62As7oULrFEhsBFoRiFqBTFcdw223SN7NVP6H5WxLaquyMTPHjfb8vRv9v7nEDJhXryjvgPnPMrTo88KzYq7DkoD",
  "key23": "57upprX613ZpWZ47L8q7BNMBgVGC2dC3dL4KTBd3vPbV8wVt9txXWsZxhPQMAMr2zMhNSGNkUKVFs2Fq8Df7Ueyq",
  "key24": "5fDCanBf5UzKNBcKg2B9j4N3GmzgLmDj8UhscLZ2NNcN8Re6F2QZ5fPjHoZjwhU6m1X959dZDNZxpegVaVDpCaDw",
  "key25": "292xzsmJjRvKMEFwnudjE6rfDjPxHo3NgyhZLY8vmEmPaiTriAVY53bUXF57WJMFjkZttTQrmAzGk3teUcG8nHuQ",
  "key26": "3bURQ4zmhaKEgeYzHJB6qPup3jMfUuowagjRGsCzGsdC7QNCQrZwt3d9dq7i6YrdLq8pjaLHzsHSzWcsRx3N7tMi",
  "key27": "4t2ErZE8kiy9MY7yCXdMBBThzDfhWSjMZM7hN2aveDYBFeeFkf8hToWZ4cvdkNZSXPQQBgVrhXREZReJeXcXMpEv",
  "key28": "cE8rRa481JqdhGRh7ZyfNKNFQzUDXpZSq5i1QgdbfEk7GjXXGnFBtM4bmTAodJKzqE7JRTJTar2LmKw4HhAiejU",
  "key29": "Rxp4tudjrGdgScXhanBCwoKUBUMPZKhaEiMTqZopx1L4FytjQRmyFASgogPE2uz1ujEQjw7v8TTjL2D2n15TJWJ",
  "key30": "2p44hWJucUGEeyuFLbgGJkapUFw7Rqvu5uDurxmDU3oBEH3FcsUiz26vLVrVp2snAmHMuLNAGU4tne2doU7tx2sG",
  "key31": "4X9q6vCpprz12RR2pnPFnt3upR394pJQZwjs5UGowFi7zggjJiDrjyEYaJ5A1xw3CQHx7Ptjb8rTchjqUnJrfdLt"
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
