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
    "3fYQFwUApqvifohshHFQsUXg1feQs32WjxMo49zy1p8tqGbtA9mPqj2zKBFUZf66Ph94g4Rq6VZAXN4Coh3Gpnrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vG9vD8FsQ8QcXenv3j9xZiPCeWxJtfLeLn9dtiUpcMntXYHMDU6vfdXFGQc2ZNHAuzukwAXXa8KLHBP5vtK1MGU",
  "key1": "3jq9G2eSgdt9bvfDsTcTF6fPoDMdM6iciUVwxJrGha4UeUztG9bjxY7FK7VLBKJCuxLNNAouzKNJWhF7zvNcLzjN",
  "key2": "PoQAxP1zvEiqayR5837kFNh6iBjMRSyrUE1NsgNSMzxWyBhzkubc4WTQARdQjhM7XKpyYmDzeWHRzDZwdjGJivT",
  "key3": "2rumLjB3rjPFgxRQfPDBcfdTegRFe9EpbCo1T4z6exXEb2Vm9txyt9gsWdYbVrZoPaQV3GtAG9MmMS7wbogM7xhz",
  "key4": "4hPbCkcLmPvY7y4LyhTTiADiAFkQSGcZtBCp1wnQfHuioKsuUBZTseBr2asjZqSrm19cinvXbfdYuy4fPSXqKb8J",
  "key5": "2ULhKo5j5tXvwutSz1GZZmjmrJpgLprGNGFfwGzN3oC9goXS5DjRAqW8GP6gjxEdj79MDw6UWZNRK5nJJWiz5Z8u",
  "key6": "WGt3HoYG9Lssoz1sZP1DisHMSZsw8rBYTiWAmwVst1tb35o4t4g6ouK72PzPWRM7FK8YBAQgTUGGRtKrT7ggwKq",
  "key7": "39W5Mhrhn6crkCdV91sG8qtXdb1GjCCUX7vqsj9Y6DanwFUuVrZt8iENxbW7vNrnZkBPaqW4Qz5Aaxi3vPyqvwYJ",
  "key8": "4CYg5ChxgfqqNSXZEz2RFyfhRNDsGckp5DXKEGN6gApv4QuQ7CsX4oPmWWaFKJeHxMvipndmWo3iWGb4GVxdMa9r",
  "key9": "4SfQwJ8swJ75ZHGWAkjURRs1wUYEdvA1s2GCVWnhBtTssC64xqsaLTTuMWDNbiUY7aXCTMeo3w8MsrfqpY3HTmzq",
  "key10": "3PyY4Pkm84UyYRLhZu9MtUeMLLxmJBgnL1gzU2TkfwU7NzwTUrPRDAJWXG7Zyj9ZCvcL7BZXatX7WqvZYSrKDv8q",
  "key11": "225Z3tb4HfZodscULuo3AssKs5Rf3TnYKpe4u1kzLbU3M1mmzFbVFTdVbayX7uZ9UgMnWP3dmRCKiE56PWthtrar",
  "key12": "4M9u8LJ8tAkpgmfJVTKmVfDzMpGMB6gJrJBMccYzyYp8apxjRJTyYy2QoFi787kGFGHR1GmhMgCUdzdx1eUNvBpP",
  "key13": "4ED2uxq41duUhJz9L2deHCsZUDw1mcomxJe6X4viEZFwGyz818qRvFivnBqTXMHXTLytTJEUsaX6jV47LiJ3uh8p",
  "key14": "4ZaWjaN9rSPmtQsFCwD87NMWu7i36a3BgnoQ7MkWjgCnxmkuTt2ZGebMxKgGeF5F9iRSA8gKrYsN9HDAGETqiQxp",
  "key15": "cNEioxpR72Tcx48r9x1Q16AKRpKxdsyWcFCkknxtDXmAaieugkLFMdPi3NQbWECPVPkEqx6KEkwraKVtWpTzarS",
  "key16": "29uBX3zuyDEDq9RomXPueDifG6tpADh3hrbscmvg8sUQD1gpuotM9DN9csiBSgJaQ12LvzJZjfjURi61TvYCFCGN",
  "key17": "5wdM6PoYhxTHiJLWcTevGb51oSo4UauzoQxtbX8z5UTuyUkHFPShnn7HVLy7hXtytXtxav7Y3wUfFkz23ZRuargW",
  "key18": "Xy7DDkWHMzzzUoW6bp79gVFd3rVhtCp3KqprccEKL2TvPjkxsEKYukQUfrgTBYrPMfNrsCa3R67S3whkL1k4HJD",
  "key19": "3q9sKqrRMteZ69B7niyWJDUohAst9ndCt7h795WpZnY7yFJ6a59rgsBSkjvyotbvbfXqPHw9AgrKxuSzq6e4Vc6d",
  "key20": "3bbwXZejzGiKYN3hSAQnvBAcVvkbJv135uPiYUufcLV7kVLybinAUfU2ypE7RL3rhXCPHDrY6CiGnz4QPevBVhSv",
  "key21": "yNgYNVHHFju5QM4i4Ct2yfg7uJ8rYGiAbcVquRiZuE8jf8EG8ZryH5URy55FDntKCDUh5kdqkSxuigmBM22q7Bc",
  "key22": "nUGrNt9iAXV87FjAogen4GPzC9r5mUw19V1JUw9WFpUHeK1MeM6MKZYpR9ctBjNo7EeEEthvLzAtM2THysQ4RdN",
  "key23": "4naN1RFtftEeLkbyk6aALwpiucvxwQAjbo932eL9gaJnnqsoU6zE3ZrN7bUqVyj19xXH8HXanPditXjPpcERY7Py",
  "key24": "3Wi8NaKnwkRzsEKXkxEEz7oe3K6aLk6GE655amUU9iNmQcyULk7fJQ169oEKDPx86zbbExpgHr1QpuYjvirrMtsL",
  "key25": "5aZTKsv21ThTn6yDNEvGzQuDTvvvcLyiYFkFnoyiMiBpvY9JobbAF4A1U9od79GwVYwvZU2VqNhAWg2RkW6VsVZv",
  "key26": "39XtCFuKm79PHp1RAboHMKiJBDEpERGDY7znAFgXaH19TKCMa4kmvvVryjHGEJraa1yGQ3heBFCMsbAzqYKPXDJr",
  "key27": "5MTqtfryQvm5LMi9ZoQWZdEBVDywWt1y8JxT6AMxgNg5fERtzX12YKKGUQ2qFrWY7WVrtQhsE7ogLqWoALouvZPT",
  "key28": "4sEcQZVhH1Va2c91PudT9qDRKuBaW5GVqprXjjNwY69LSWDnQgEyxxpxtNB5jWPGtQF5aXcHLFVhdrPzzP7rpQV9",
  "key29": "58aVu2jL4JCoxTXN8VKXUbYJ3ry1y4pN8q1Mu5G7PSTpqv85NRzW9BfZMHX2bSRJY9AKU7ET2x3jBh1sYJjA4mJu",
  "key30": "HM9YkVBrMa3xqVMgCJvVL8N7WeeSh6wX5GPwBJz2qmRTunSEP8avSGD5SQFnVtKPoxHaagkiZiJviWNnwQz9PKP",
  "key31": "4wEhERkgvLCM5nsLc5f84NvNDrGPe6kpp4ueL1TzqhZXBSULyFvkVswnfgmzLDVD7uAymynRt3TGqYaLSUXdUbTV",
  "key32": "WBfzmP7sWbkVtoh75QZ2zAQ6V8JwbFEK7q4kmFfGMwEto5DPsKFn8gqdzPVYFHJGvky6UDZsKpoWoWFX9jFssCp",
  "key33": "nafKBL1pYBingNxmnAqFX7dJb7knPpYiSAR7cfRN8RYw2no4MwXFxgsGrtsBzJ2Lw5U9YeMtFHA6bHC26rHhFFs",
  "key34": "2FMFyuZXCRpVUCncJQ6GjhuV2QjtRqcWDJDohwZU3B9BGghcq2NyLgcn23cWyiXfdTHVKJJKbyn5t43pDXawxtbV",
  "key35": "3PwUyca68eV3pEZA6Eyh6rNqQU4EHdxoWKSVquHq5RMMuEFCuAJL1wTZQJMhRrXZ7fuDEdb5dpRiJdmbFo8Cf4xh",
  "key36": "2H2fHmCa7mDGzKzy7nuWc796w3Ed6nC7MZ94DQYhoEb8woKwwkQDVCLqxWuDkwCRidfY7gy8hNQeLnBZfz5jr8T5",
  "key37": "2KCsw1hNVchdoYVMz5UnTN9wVDyMaw5cPvcw5dqXRFVqcuAy63VChAHBdFmGm3x95Bs4woz6MPPNuscnJ4ofyBiT",
  "key38": "61w5vuDJoaofdUiVQbKfuoGJvPkprEXrEPst1K5f4oQBHpKvWzXwWeZqD4FJeJbJgF6HxdfUhaAzLwKxyh9GjumX",
  "key39": "27tALbi1mb9V7QiYdGTjDefDS9CENx2DvhJ4KdLfyBjcEhF9JWQsKR3NkdCxbMdmp7wfYk22NDi9rzoMgnnPJnPa",
  "key40": "aQ23hhnvznji76iRbfFkynFp4aZQrA7Tx2UXGozeDwzbjwudPBdaWbNBMWhKxL33kMtqtAQNxfNmhtS9BUxuxLh",
  "key41": "26ytsrXWjd1yGux9ojNbCJGnejRK2wEc9AihT35rxGV9DCmY5aKLJenZrFBTPUT3uRWf4Dt1H2buwpMxvBohNX6g",
  "key42": "4sTDiKoGGiRhixkNNmgorGkdb2DeQCHEec3MV2nYUqm5U2vB91RCd2br68huC8HVECxgN2niGZ4eDBdd3VoSK8y4",
  "key43": "4on9QcgsU1AmE6jZAygavTWdUTa9xLyoS2irMtcccxSKHHSFZ8qnMgpWFeNSK7VKFodLPMF1yz2Zdamk4Q1wpLxg",
  "key44": "4ekNqCtGzik4miUMtHxPufDuj4WAJQjF6VbQ6aRvh2kVUSQ7AY6CQw2iZF7nMtTuv4HuYnVW8pNxnyGx2sqQFTdy",
  "key45": "4tJKzH68vBBjm2NsSewhNwN3i19CqhRVuViWyGwtZSNUiB2Q1JDnLtrnrQPJK24qxuM8ZnCYmeYnWDfUjfST2Lsj",
  "key46": "32fbPKNDT2W4ZkbC3BVfwD72morzHPmgVtpH8LpUXDEtvK48sJkP4kim6gaP64VFV5a5VnFhWayC2Q4MLgbW7YnY",
  "key47": "4rvLyBSozW1jKfxmwntwqDompKsA44RGGticZYFTjtA7jT2jovn5LD3Q5t1UMcUCBCsCSep3UYRiSd8uxRdrbuZr",
  "key48": "PCUm96F5pyAoqemrzXiP8c3vgTYT9GYMUCKxXzEAMGpdtjzfKGXiKjuPWYUpKwuRb67Wd4n5SGYBM38baKDpNVq"
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
