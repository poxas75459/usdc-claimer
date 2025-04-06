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
    "2GnBukwxqYuHuWuWJsYxjfonhqhuxfNhf4tdpomW3krqngsS3Dvxhdvaw3UZZyXq3wr1nXLwKdX9NsrtHeoVVYbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1VcYkXtSystHnBxGXQ1rajmEjz3zbeNkVEuEJRjG9Eygq2K1o5PqAb9QsmCJZmeyhBdV2E9QdcEyrhYtjfkKSXn",
  "key1": "5MdJgPhdAch5rPNeYiZW2ZJNrgbM4PCq8aV1nGEKApRoHBdJAFBiRLyDG7o99rezFfsEFwQA6w683mLaKQ444pCe",
  "key2": "egPodUrZbHSD7j8VirJWspJd1AvQgbfgBGRZosTq7bnd4xYPXKoQxQsbseVDvVpe5E4P66xB5Pqk49pYAz7jZEG",
  "key3": "4Nr4S8JecbYmjmjKUU6FTRMtot5T3Wg8kWrduvNVRVTSonH1MFxSov7CNcCMKhbJ4SHk955BGV7gfreSsSuv43hf",
  "key4": "1EFLMEX8H3b9jEfMLF2W4G9Kny2oVaVie861n1jv2iKn3Prf129t2wJ5Z1GorRi3yUdJq73Q5D7en1zPeXg2bJm",
  "key5": "3aAi37HU8NoMwvNwYaNtPkfphRhrkL9pGMeSPqEc4QQQE57YUThCimubhc9DgewxnQdZfYHkmthXpyGw2Gh7Ztdk",
  "key6": "67JLj67smonnnSdsw5GB8R7aqsYuHRHcAut8pYuhtamFJiNeEs4R5TQ7aH3yEV3Yf1YiH16BRf42GdtD6YDvqHfL",
  "key7": "3HMrcv4Mds4xKvD3Ziim75fszxBdko1zfBHgHHyk4uGsPtgDSbiEw32aMJmxgvxDWpDfAqAp3WHhRNMurWcWEAdP",
  "key8": "4Bb9fnYP3aBkytAMcJ3xNd8iNYfrUyGMLha9gpxRnmmbgNZWhmZRuef78f2hhnkLzzbjRyYh9PRrsEc6TpL5KFpH",
  "key9": "JBDXYpWNHgnfzH4GmiQqzbfJmxvYcWESWtXWjnJXazNqGFsBs1uMckjpd9dzTUXLrBFkSJTPwApbzcBr9rP8f5D",
  "key10": "3TZbqEuh3b9ggg6TypyLxGj8qps5FLsU4Yr4PkuRD9wfC6VqR6oRyRDSMgy8tgAQ3cXpB6DADnH54HwogZCmeh2R",
  "key11": "2JBMQZnZEJEqnxpWnFKRQ5j9vfXQRzZ5E3ZjqrTxHt6rvmj1kZiXSEzFa953FPDshdqShigM4HBpaHy6u5NgeFUf",
  "key12": "4QmxsV77fmvtQrRfRMfRcQ5Dnrh4nT3Zx9E1wCzW2oB4pAB1GGpycaSEwxTMU8PAELVtYeFo5FkC1Wg6rjkAQTFa",
  "key13": "4hJaJWEwkptCejXzEVg3MaADhXh4YKZCVKiNPmzB816ofKkwATEUwemopiBXtusanpKX74zXq1nyqyEmp2pSKkDD",
  "key14": "W2dUxgHFgFdbJ5erDCDXmBv8r6B8roPWT1PpprxQUegnJSrqS1gfwqy4EHk551NwLEY6ZemjrR12HmLHspruPNw",
  "key15": "4uWNDP4mkPGESAsuLFxM5YRyjecyaGV2sKqvgeMYLzZecfDn3NbTM91arruALa4AZsKr9JZvYp1pqKw1DM3SWRTZ",
  "key16": "Fdrb6RXMv3v8ZkdYGgpHySjCba91rsStuMFxyUNjeig8gQ8BHqeptFqa8LrTLh7jzdwGw38kD4knLtSj4F9D4bE",
  "key17": "4ZeN5qaaaRtpNaH724E83Pc3dbgW398m5Wt2bQSbo7W9jGt3S4EdRosy7WfN2UuDDmMKt2xaWyX19KecW7xgxpvj",
  "key18": "5fh1UonbUgAVSSnZSrFF1KGvfifacDJq2eWdFjNUCqHZ6f8C86n6FY2SjBemhRLAgkHT6KAZtJ9VYbq7DnLGffev",
  "key19": "3ZaVge9amoD16m2NPEKtZsPgpEgUGC5qDfPjrCgMaJ7gQnVaoh4UEZ7BHj19S462HnJvQA3BUzTpCoCutyHKLkfA",
  "key20": "3MoWPVxHuJhAumURcWUJFMCMRUwnFuhVjwjpvzUmG8RQeYwSnotNi47X6fmrg1KBsT4p9XY3TB1CdDZ6qi9ytsMY",
  "key21": "5Cm3PU4ndQG55FPg9jSWSZd7Wwa9RDLbSBPtqQr4kkdkzHT1BpcpA2TK7md8dfBNV8G8wYvubBVzLNArFtrJWQTa",
  "key22": "3NBxmE9VUnD8u6McCo8PR9Q2hyTQwdxSKKxR4qwRCps4Y5T57jcB34ExwUDUxVG1siBpKC5wKeGRfLQCETAm7Enj",
  "key23": "3VFkhPsrsQfhwSUD6DUUP3VFjMdQyQSmQLmJcsGp3iq5bb1Pbn9DvBPXyJSCfKhCBTMnHoqUMHaj8Y8puiENQrut",
  "key24": "2dpLsfS6kzq5ajeJCownqua4czQh2qBX4uDpUBCFzhwoHeZEkw22V8oBidNsujMChbh9ZgEGyin1PpRw9ueCTnNJ",
  "key25": "4wKmWGXdyRm8d6FZLpsL4URkmRUTXSSLw7DwUFsTxs4rrW8LNHisbH9E4frvgmJ9zPGwkksasRYMM9yzX4QhmasN",
  "key26": "2SFYkzbWreDMitCnPbrkJvN5geroEgXmq63wPfpvD3oukTK8eup5er8H8BEdEqfyYUpn3LnBHwfLa2EywrkHwVJ8",
  "key27": "46fEPQA9JwUtkB7PDcMopmWMPYQfy6cpiNa4afh5hYf2pxToffCNA146E99t7zjeT7LUtXBV4o2jw8TmjDgH7sY6",
  "key28": "4L4MTPi6H9jo5ABR92Nikhn8JRDraFqnfgMK8nLJ3ExDZsLJ5jgLEnc65d2kWDQPuXb81bDNRQ2cUKo4RUVzJtbw",
  "key29": "5K3fWYnxkddgXuCFzCU6uhY49JMBBMRkJE2tMTEoZ7a5DeCu67R7VmKfCQ4Vfb2AoUws5H7QNy34GBp3UVtqZgLQ",
  "key30": "4CznUw1ywCe2edeVRj21pufLNkSpm9ywNsd5TsoACerjw5GrLXbvr5pLfzfw97FJMnFCFRVpYZD71y1PvzkvTcDW",
  "key31": "Sv8Z6r3QrXhHZPXeGMXrfdA29mtsVuRp9rVSgd1qhRgwBQF1m44i7jU2NCrwCDGm5nFAbR7e1KypsEiaPddPxVo",
  "key32": "3AahCgF6yzy14pBb3JDSprfp2hbSqm7v9F4YwYNV5ogbvEYwr82bGRBqAmTGnF7NAcPvTtFdCdDyxUkdbxS2489n",
  "key33": "5wbQpwFQf5EW7sy68gTuvoCuo2gDMBkL2ehEGp4QPjNqUngVCBXcfjHpeHd6QaZT4BvStBvKmCZydgGJafRXAtzf",
  "key34": "2AfnVCjdxodv7xZiB8BkJSaS8ifiur1LcM4UjvTosLWHG3U6iJTweupVz3uMsZh9LoEqNcyjJVEFGXqjRmhVPJ4s",
  "key35": "2rLixPUamYzmpAdhMb3b9YMqdptGJLepTfajNf2YRuG21XfpohCeiRXxYHaLXobawvi1C5kqGp9n7pjg9ofJF7AT"
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
