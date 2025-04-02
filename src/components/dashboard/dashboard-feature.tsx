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
    "5h3gZEcWRRD3hYAXu4XdjjWBTnSmPL1XDdfdqfekyN9jfEtmixRySfpoCywopL9AK3yHdvkoMqB6EYZdLbTbmYGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ffPUGAzYDzSpdEzUwWJxo4wx2ezJTzB87eC6HtFiCXznFJ4y5gSnXXEJZGJZyVMYHatH1RqfJSvQ4g7a9aM5s6X",
  "key1": "4EC3tmdZc2uVFyxknYbipYoKS8MbfHmSSePc9Ezmc3naphoWtZUzdoMS8BEAogYHRb6otxVsEKfwjS9CGh86LrSs",
  "key2": "3WPjyZPwaroEQ9oVSRh7MmWzt1yaH7HHHUNuYm4SCTobbfPHz6NsUtLHrbn1emp2CMDqBPvDfGfrvHD6nXbaZ6UC",
  "key3": "5TZN7NTD4JjLzRtrdGvqnVx9nPMd16pot7z669U8P1xom6x5AGevaK5xMrDY12J6PZNJUeMqA8MbzZmaZEDEJSDZ",
  "key4": "2Sw8sipf7bjpnvQxG1RXmAUQq21hA2EHZVrNt9pNDNiCBB5YJnnB1yQ7gkvDqDPhLA45PhQVNHRehY9poVm5LgyV",
  "key5": "3mefqWUYmGi64zXy7StQUzAaQB5kv71WCu7n7xvXZyQwPHvnkyYRr5kcePAYgbWUjZLeByGhbZkqGEUcbMa27TH",
  "key6": "2XwwgNMw6iBw2qnGpp7aWgk6PJX3sMwE5EyakzX14DWGYekifajhjYUp9ab64JwiaZi3pTUZHxrSpPtNFiW8BSBL",
  "key7": "NPXVe7XcRvnkEtmxjdXSTxmXeKWmXbKVudxBymrrswsgscZ8de38Uxddk3oK2xPApznZt17BmPcjTQpFH15NkyK",
  "key8": "5bhAptk5AiyA9jJ1g8MvNe8xrjRrs4c8Z5HZhsQi3dvgQsvTW9Eojn9w1UAi3T95fDTvo5zPr5yz17ap3ikedYPi",
  "key9": "45JoXBEdbDLCGhgCqLyzvCDAM6YtECidF2a3w1H4EaGvb4whm2L5yYQFvtaViXpRYWc6z8Sk3JYXNhmENCcdyCda",
  "key10": "3XYBGEtCfTemfrUeLFRGgoXUKfNMEB9JzCNg7QNu7YR3igpQmwrteSXxmGaSALE1qN3Yr3nZ7v9N9w7sTVTCTLjP",
  "key11": "EN7kcb42JU8i4NXTwNTmUpoY4EFymJBvU5AAinGZrwH3VYLu6u2kEcxYKGjygQpsjPVm2NEMJNobRwCZedraMQm",
  "key12": "5BNhC1dnxMJcTrnJRVsFhpKQDrppHATMqmbA34Z9GgEgqicndH6pJGKs4yCpfNYd3buC6Tq44jR1JEo7CNQsMpyL",
  "key13": "4is3nTJXsULCEpnev5ms3SJa37g5u6fvTot4Gxp7rnRa8sz8A1dazJAkRPeiyBHK6bMwJXDgp6an9Qm2U3sAE8of",
  "key14": "47WEhQXKra7P3L5es5vcecFjhHNZMSRpSY3JU8mGpziLRMGGRKARfTVh3yTow1RjPt7NAz5evx1tyEAxvyUyG4ag",
  "key15": "5aZVNYcYUyrasUL8DZ7bsfSs587poJz6GG8xfRhdCDU51nAP4ZWnEjJoz47Dy5QHoWDA2WxaTnCf7WLyC7SPf79L",
  "key16": "3frkoGRjBSB6myoLomLBP54iyVM9xJKqWyYbPZ83wSiV2vUUer75ZxP92wq7KUBfLZ3Td1LEw8bjGTPgwJbX84Ni",
  "key17": "23jbgmZ4HTV1oCnDNKbCJfregDLoSMvH9REM3kKhjrXua9AAoYcMdXJDByGztS53gFfCcmFva3WVHtottynsqUEX",
  "key18": "WjQpEokzkyboaKNFpg5dMhxeZVsGkt2FupsQrWeewPqmRwcRGJMCHUCCgigk9Gj1kM4f728eA97XJjUQerpixzG",
  "key19": "5tX7TZZg76oPN4RzZQtAYqnx6Vgcd5Qs8ZmUEuqg4PtMz3AeeSiaMStp2SQWeH7jSuCnTB79GhZgAkw3Ygeag68m",
  "key20": "5jucKZaAXEFX2i7JTxvciPW4hBQSzYW5igzL8zffvwM9HUWbmRCa9KLiHTxFxm6FXJGjy7Uzy2AopyQw3a1wkXcD",
  "key21": "5p1hhsxCFp7XXxAQxPpMYnLtMnsxrwtu56uePK8e67h7eruencuYLQLtFhqbxGRaYWbS8vxCi1P7dJ7j6n1BfoZ1",
  "key22": "2UJvRe4GyX4UiPUmEdUtLe1dgtUExrWoZGFmruqukjYfvgkkW3SoECd4YdyPr7ewtiSUHNL4n43EnUmPfCrYVy1H",
  "key23": "4CcWDvuUcAytmzk5mUo7WnhoFZVUK7ZYgg3y18xwm1aVc5sRdFoLYmuXvnp2UYsNyWrWFGFAMYghUAKV95Vbxww",
  "key24": "5jxfjkVvjD4hfq3y938TEfDPpja2SbYkTUXmYR6eMhhRwPVQ7mK2nmbBRVkXn4yTH1VBayCTrLxmXQjjFGA9jEBQ",
  "key25": "31xeeqgZVDvy8iCJNUgW22KuAi6H7sBdUPFo4M2FykxA7pbPDHQZoiLfcNeXd5oJqYQB3Ds86SqaJcGcHmbdw1EC",
  "key26": "5Z651EmNHdAx392t3mSKVTJWATH974EBd83cWLyQo7JyiUDoUTzAUXkyzhuWjinmhSLhkG2ioQGCUwRxHeGXGVc2",
  "key27": "23wBWUoqjakWriLR6m5s2oKeHsGkfyzrEkfPJ9xA5BJiARLubRZU8BWskRJegUU9z4QzJSoSKZ9ip2EWDrqoKXXv",
  "key28": "64YHn8diiTgahiqrCHzJjpdAKuDo1eAycFDVGB4X3us7EfCVf3QWQtwJMbXTntpXpUpiRBD6bkCM9D4xVPd2d17V",
  "key29": "z8SvBXTprDmAk3iehtFHzun3R8EppHmNrMdwskLByaYRPeXDsErPA6reoRmrN2irG33DNeqeomX9t8pBGmRPSAK",
  "key30": "2C97SfLnWDUbZbZswWakR88bQ1yTGyJJyFQsCpntywtJ6F2BcKsUyVMKnFuvK7X1uYRv85UaPQUgQZ4twfjtuTQ9",
  "key31": "5viDsE5vt9Gpg8Gt557HtYfRFWNPjiDq2QoWL9bd5SNRZsdjwi24Vpr4VPT7AdnnCpLn5rFVrw482SZcF8RpYY4C",
  "key32": "45KhABEhQAMUq8U8vw5S7Qf2gydC94zJRup2Qr1wGUFaJfkhorwTiQarsviSozwpVGSN1ZkzNpDWf4qFWqGhRv3",
  "key33": "56CX9MtfMXyaHk852r7NfmnaqG912Jd985aamnFUoCQHNteMSp9yNGPCK7T8oURN8iFpP66edrRG7hy2hHyTJiVe",
  "key34": "5ax7Cv5BEgWBukHX5LgtSodCyUXo6wgyHyvn8u1E6qoXVGH9bqmGKN926pNC7vsY7cGFfZpP4BK8PuZPrgTYT9ii",
  "key35": "76WnUMrjKX7yeuBfy2Kq5bg72E7gJgpdSCLTHifTSHaeFM362BYGBWsGq9ZtTigHwpYno6QhpLp6cr6DmQHKVfA",
  "key36": "2REKFTEdgwVkHFHwryVUQBeSxrGDCNVfadVei5q4ptbUX2hmGV9o5nBZwot2LbWXjRP8qPYJyrv5XuJ8CC5tLr3Q",
  "key37": "3iZKyxWJD2YcUkXhP4choFaTf4CX91DfpW7foDkG5CT27AyAkFVmktpT3SSbaqLJneBz8tLNLakvEtm5Uk9zBxcP"
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
