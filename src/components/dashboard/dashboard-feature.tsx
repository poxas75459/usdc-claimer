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
    "4tHEBv3vPsf25x6AbRpWwy7qMtsYwzAwFHwKFQkLGNDVbM8APq4dmXkbrsTbj8udX3EzHSB3f9bM97UgpnFhfRpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dVHTqwB2JHGQJnQVQtpVoEG4Ldffvw5zSSN6zQyDjDSnHRJZqsKsrLEucgS52FhGUhNDXHqi2gDJjY27xbbogDA",
  "key1": "rrxQ7D2SEVuQWn9DbhSRXbiNukjMfJAC9eX2vaTw3kTri4cK8dhEPrJsv1fMCdo6R81NKYhkPr2ZMHhveeFMEvD",
  "key2": "2fmCwEvjxvWxYZg3Qvz9XQsRvXTfcYrws2bqTzxD1YuCibFwHaWDAz2fYE4EN32KX2opAKUSKMyJCC8kGqMLsbdn",
  "key3": "5Xz8ZTHA1KVtZcb3VLsRLpGfcChj2zdT5TL6m3vZPR38LvEqdJgUNbUTWEauozXZwsugm4d8bnSfDsiLcMsedigq",
  "key4": "213YcXWeDGMAKD5d9VXXj5VvpWsXdfb2kHgZ12gu427cG6D1mc4vpN9ZpJceihZV48Jho8eSH7o32UTJLrjw9yGf",
  "key5": "2Xh38LmF6CEGkdKvEAJgiCNfutoFiMU6SE9nEr9H2K39EHcyYXSKpcZYp1NMspG5DZYcHvQ3SFRew2kbSQpuMiCC",
  "key6": "4NehZ3VDyWfpTnJ6RJHjRcDTSfbF234cRDf1dGXx3AMKPih4Pv2YDaPuW6z25DSWz6DYns5bUuHf8KuXDzdPom1H",
  "key7": "28w4kckXv1TAucsx7yuJPnkBhYGa54DoRhTU1hYvWLjzhM6SxBhhKPbVHYUU62fqAjrP4n5j4Yh5L215ePamK96p",
  "key8": "4VKkJtBthMeip6dg4TnqWea1W3YCn8NaLaqWQnniv1M2x2b86gtcPBQnRHyCqgQ6FiXKkkeqtMcSwPfkqFvG7J8k",
  "key9": "rbqWfaWbqGccncPpEDXW2Uin4mibjyCwSQGfy2VHoS2VkCSuBteJhpAWdqiL4hScRutF28CrxKZcAUJh4UD7Zaj",
  "key10": "Hie1foaKi13ZZaDDgyKKsqnHrhZMrmnaLpePkN1tfdrUfSu2w4kJtkL6ZmQWWRTU7sMn5T53FfvpeTYUPdWXNWz",
  "key11": "4XaaLkhm2PuijnhABMetiN2VsroxU6RJBYuN8TJxepV8bAwggKSMg5nZYCjrrb1X3quzSwt2cfPqzZbmfZfwiEKW",
  "key12": "53JfRDSNYQ7nACT5Pp6C1vvDmL5K4Cyn5WuQ92mEfKSsdE26GHXTCUdVVBn8ZL8NhQUUZH6tafHmwx6XYhLWhE2h",
  "key13": "2RbSBRuFBuW8abLrNfE8Wr6CMvUxps1qa2Tw9CE3mzhRgkqoyUYHAh52pAdH3EgcjvHBBUa3i7AS8Z1oHJH2xQ78",
  "key14": "WfUWMvoMtMUMoLCWBMxBbPfTQw8EXMsqRyVzzYVJvhBSfyKVwCE1uUzyREr2ih9jzMCLWogZpZC3B3vq8QCixdz",
  "key15": "2ozTWn1gMLBVq49qc1TbK5kmn6QjXQ2XJVtPKacy5PrmFe2PMLR9DKv7jbQkfREQwk3UUFsRRLGfBknA6jcgikJQ",
  "key16": "JPdjjugwg4r65ejh76Be3MNVawza8KxLptwuSyHQBx2F4EWcnHTY4ipjLJRSQL6GLRz74tzuWNe1sQ4x2qQvqwQ",
  "key17": "3JNNRFB8G9tP9eZV44tvRsyLFkK4L4u1dtnGm2gCxnfA8G5n5c6FePgWUGcwZWGwni2KRefcubmnE8op47oTm89E",
  "key18": "64a9JYseNJrWUofZtmvPCYtJ3UjVjpJpu1YFw1xTFdhvb3BorPnY7XZr8Kcp5AZLp7yK3bk9sBJXxWCfdz81EgXX",
  "key19": "32hrBJFrV7u1AzpXPb1waKhT7r9LvRBXmXpHG71UjQB5wpxHq9RyW8gTPrqjxNfSha9iNtjDV9w889bbHBH1rHfS",
  "key20": "3XrX7od4uvuKBeFc2TxqwaWiYzMCKJ31g6StSmHNxYGGM1BFNJSPwuRswyHPbxaVkD8QT929r6fSnrrSrzsuQzWK",
  "key21": "3enp9eC6j8gbKiFT5NDVNPcNseqJU9sMPgkC2TnKXyvHu2z3QCWF6XtiimLTrzBq5oDB18xDoGcP57muAZXEdtZh",
  "key22": "3JzdFoGcnadtv6SaNJuZPwTSqgqqyuRCinDAwHH9oAADSd7xVyj2U51X5kioiHJk9TxJqp5kNufMjpvPW6MSDQ8s",
  "key23": "22QDDBUGm7av8Kv2cvcWyUGxn2hH5odvEPDidYJVwFUMyFmHLMJcbtj5sNQgVMXEiaDtX9UTH3wKNLVakaZj7uMK",
  "key24": "2SqNGKMRrkg1jfPLntTR6ZPbNz4p5m4GtcSLRVtKttzazd3H8mBvBbEALBaYbAWMCdbq8vkNZTXrmzDpvAwakEmD",
  "key25": "4EYYq63uzDTzAeDsF4XX2CB4RMpMkHEp4R7G1qxSufgmecuQxskXNDsokR45gebbQoebXvX8bFufephR7zWw6fKX",
  "key26": "4ZGyKau9xeERMeuj2mZYi2VL8Ubj3ry6wXmEBK2GfDUQhJohje71zhdAWnedrnZJd3DEu6ZhpB8syp3tDTZKuFAo",
  "key27": "8p8rdGn6PDHC39QfsrWCpKZsj7gzEBY8LzCN5zNEhao89pt7Ln93g32bxb5TMa8NXzx45Bqw1sBC8btpvU2bYug",
  "key28": "wauo6Y3mvVkVXRYyv5tafsLxcbzpDaxJ5wGMTpV3KRnqiGTPMNwMHh3WcmsjNiGb8mcEeVNz418L6rHmo7yAgGn",
  "key29": "jzxfGmEETpvqf1pY2BuYQEXZC5UZCsTnwFGvbXX6jakEnCjsBydFqJBXRvDejhKvqeCeB2PDLCepgURguycEupR",
  "key30": "KnKh12egALu2vbPJMyFZdCA9B8peNingRGeXxF6UfaYrouL5Tuma5rFo763cNCaxARvuTXsEKYAVEbn5SexK7Ci",
  "key31": "4A45E2AngJcDN76XeWehWsGMtKBPMwL4dzbMFx8sEwUXb47ejH9Te252vmd79R1vXATMHufBHWE2ckbMsH2Pfom5"
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
