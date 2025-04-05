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
    "5NvCsiMDMsAyqm832Ecvq1RjphKfuGdj6Lgq1vuc4FWUbp9jTbpXrzo2siHow792Qbjiq59wZ6YA8kJW3BB1fcay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UaXSz8uAgLvZV413mpsz4U5UJ4XWNXhhVCVTGJRFwGCPi9Wv1mS2tngRtPavjdqhA9Xm1s55AeEsLtjCRKPSCEC",
  "key1": "529mgWUh3qMmfkR5yTxjnTSbUpd8FaPxe8sw3fhiWZGW2JAQSq5FtiuTApkrFs7Y2XwfW3pZytoRsW88VvbWUmPZ",
  "key2": "o1fymnGD7JoejHwv94SWN1nrFEpiwm1GvwMyw4H7nnjcrFg4n4vWnkH7UEiAXnoyshSygojy523Bjj1UwEG7BEu",
  "key3": "XE2kr5Qz8DgYm1aTNCy9NRKxBFivGGndEVcSBU3wXChLS9zgsYz7NpcjMr1K2Yo21fmd4vX3J9WDrgc2qNrhTHW",
  "key4": "3UHLD6Ajpjw4qTYSQdSdayQXHFBujfqDErwktBBUThB2nu9Zn2fgNoNr6QFcAcyYND5gCPik1cgnTm2AZG8KQCrT",
  "key5": "43fV7aM1Y2aiiDVPbvv53dKvxkdVwSCw8Ng3M7VK8MJVC3VGmHj6paJdFvYVBVr5Yig8eXA5RgsnhSWaRVvZdNDd",
  "key6": "5x1hM2hVjzcjA1VNTEpgD6pvwBKZDUoKYfoFpWyVnHWM2yT9FCeG7jenhwqXe5Fq6YLBSqBK5dSTRCDn2Gox87j7",
  "key7": "yzzFfCMj8QPrYdtDe1cXyrCub1jBDDfo91RRPasBZ89nAaCo2KHXFbSUKoFcrtP4oNsAG4ZeZDneA6Pz2gSbhLe",
  "key8": "TVgs4LVmyFNncE2Z7fS2UXLiCZjRH2BeGHAwWoE4uD5LyAh35tu6e5bGRPWRExcZdDk81EevJH8X63BUEENX3UY",
  "key9": "wh4zt3MA1be6iu2pe53VagqjbJLRSZAMQHTwm9FC8Cwbs4sM93W1P4YMovU8PATgBgcjxudHF5GmiKjBiuRQocP",
  "key10": "iZKahTWVSs7U726qmr8t12GDN1DXxcxUEieJkUNiFFfWcKjntj5GB54LD2pe3q46kCA2MJT5jgui7ReSQwAXU57",
  "key11": "4d4ZL1AqTGserFJ1MB3PvJVK62mgZydfc4jHB2J4zUhkqZJZqMRLox7PAueJ51GFa3pBx3UcBMi1PujhVMRjHei2",
  "key12": "5GtCRzh7hDRChTDKZxzfNREGue6pYY72XRm8jRVqnqaMwR1cYbEQrN8kt14RnGswGvrwHVVRutjnyM21NJbih6Up",
  "key13": "3NmFwKFiiEQf56gDbUwpp73oqR9Lx2g4aRxL2Ljwjw4GoQtQfSEfUYjv9ccvxey2BfSJ1DxdD2FU3HyBrJsWjLKS",
  "key14": "5w5Js8hc54GRspuS3rmHqZmERDCjugPpoJ3HTVWx23ZxWSAxPQnu1L3NKN43HmHotSjGFsdZ8u3Sy4LnxspKBhUo",
  "key15": "5Ctydetdt6irvWS7d1X51SPfiy3jEehGFtpVRUe7EjixykLnTJGYJpgsW9WekTh1ncP9xUxzxXki6WNWpqUXwEQv",
  "key16": "ScWJJGSmbcoqcXr8QKFiwfnVXd6Tzehk75T5yCFEJwpDjHmEfbgpfEiTv2N5xxLnVVycDr6bYYQY1m2BJH153yx",
  "key17": "4xBfSHkDcCUy5U2cBQrFYQ7BShDKmErYhqzTbuqZWYikxXvCCTojbioVikEFSxEsPYrzXn2uMD39jKYGJt1jkrJk",
  "key18": "5SM1bT9BxWJpzTbJJYrzKX56EMP7Qi3F3nQHHVHqKp4gEKCj3cT8GqJWggZaFzmi1ZrJs2WKLxSgHTqfmfpXCNis",
  "key19": "2ZB3FZTBhBTj16pSTQyrzcwehqHEzpBy8UrvBwJQNADj9f3Ss9uJcp847bAhhQkQJbuwX51PyszynygcSDyjhFvE",
  "key20": "ywXNay2YeNkecAWgVT33xCQz8Ae9uPigxnivFr8id6A8ChRiQTQUfvJNFera4RxfeDh1ev9E9hnkyWzoNxNRuDP",
  "key21": "26mogSvY6GcGKcz9DFcbNAd3uLBELrLHCqRnk6ydN8pUqxhvmEt4tyqUumzRvAHKJVEhaVVvhGhzkQoT3wF1quTS",
  "key22": "45p3HbCRaQBne9S6c1FiKxgNsUr3DthrFiQpcMsjVrVwgKpvtaRu7Ady1k9wfCbAxnv2LMbsk6GkApeWfxGnW3vY",
  "key23": "54QNUbH4NXDUTayiDgznEjxUJHUN3C9W1DrW9pYRwonCT8CYDrFq5H85ghgNot1JFh6MoeoCFTdzirBk5yH614Ri",
  "key24": "3JT1AeGGPt7ehHfowLLZyTShNeAmsYFPmeME45AXnYa9Yo2pTjFZMx6ckRh48Th3pnjAg1hDhCdKnQM5DJJ4B7nM",
  "key25": "EptXAxWz2quZyuP6qRaywY6mowCskfHEJFHEFXYxkE7hLW6g3K8yBYS9Np8oJPjzUH5RUx9beDxBk97XbHQb8rq",
  "key26": "5EqCNbA3wxiHVZEtXogeP8Tka28FQ71f57fXCe6zTgLkxNNJRdMZVekTQjMuvX82ScqPCfJxZpLWTgKKre3SKkpo",
  "key27": "37xPHE7spWcGgH6UYhjBnGLZEsQwRfABiXLkVvW2e8pWsuKX39p6wCuRqfS7MeN3kad7EhM4bfSfDzMRXG4mMQCW",
  "key28": "4EyyQEQy5RWAGQccXsggsHFAQwg4CHo1u9BfXrvTxoo8uZGitimW5ni2YXRYGCA42xmFgvHwwKZxUnZaFfNiHgu6"
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
