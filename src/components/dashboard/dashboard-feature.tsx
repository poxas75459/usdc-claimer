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
    "36v8sDbSYdPMs4SgH84JyREDgjegWEKUG6BritFuhBy9FnEYhS26PtrCpoWJpD4mrdVeTG9U8S9zywNGLV7eBxGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bCvJQ6LostrkR5UYZWUauNZg7L7vkEVpXG8xTYMotix8wsrn6PVuvs7B7B3HiAm86KGgpst2xniKQ5icQfgAjoM",
  "key1": "Bk5GXjUJYvuVa7aWNKyoKQSS1kzcFbThvcotYH9fdcPzTMQcjLCaAfnMvxTZ9uXQcwB9cfkhrGBb1xHNQY56mwd",
  "key2": "3mNTePYk5G5ozcvfqF2HQkaJbh8aYmMboNGok1xnyc1YABntScLCzeQdFPibvdLCZquBGAFsse4kNUs1UKxZXPcU",
  "key3": "5BFewu5Lz6HLj1nW47NT4uo1cJBcui2uM7ZTatcxNNX2n7a8LM3pZGnuSajCmMn1iZDw5SJw5PeemQwRhcaDEM3o",
  "key4": "3k9BYL4nYovt1wAptXvwwryQ4m9Ex1BgXi8Gg8a1CUSGP6Vq2HLdy7zbajBCm9Rx7fwqncyP9DPy2vrKwfhApucj",
  "key5": "4U4wYm8m9ykt6MQHkXPgM6Zi6kRN3EV934UQLRYb3AUKY7pqhGyWmtwV2kEqnGeCDg7keKaKoXdmM8WXkqUr9B6c",
  "key6": "z2mWVqNCsynTnFrPmXqsGQwBt2EKNCPdKLERLsdn5USHTVfLY46oy8oBa63uHevNo7icS5LTzGN9oALDggWhGV1",
  "key7": "39f73bpbgq8jwYr6fTu9aAyPU2WiJJzzNm3R1T532s9Fj7aHLAhb6sWbsSaC8PV46YkiDwBzJTKYyZ6dShpdCrr1",
  "key8": "wFfJzeokmiD438Baadxxbo6674tbxL1b9RKfGT5p6RRrvKdwBTmNuGPPngjcULWZ5j5W5A9sT58YLfiasT3zekz",
  "key9": "4A4qfNegJZwjZT6VEqLH5kCvtCcyVPko1XiKsU5BABrRjc4Q2qeUfeQcpHAM8u7uUfHepFXLvokiPE1AGgh5fp7u",
  "key10": "2Jdd5eLXKnPEUyESSPQC5u6SQir99guFDqNQ6zPQVsUdyJ8Eyq2JQ3RNL6KXfCmbaJB1k4kTCv4VKfb92zjnQNjC",
  "key11": "2B7wfTm4A4SdmoGzgn3Dqz2wB2yNytFskxtTH6KYDAnkfi1H9TgYAUPwHpqNgT1F2McfNAoQp68nwgPSrA2bX44W",
  "key12": "3ytnf8mykDB9Cx6AKFJV34D7aTmCF6uMWUmgSoXJxCKonG3xVvaiB3XjsnJSCEJF4Mq2JDWZYFawv3fdUAoRooqk",
  "key13": "3XVYxTic4yHDSyzV7axN2qNkKUPrN6KnhNQahHofn33oBzsAVn3vqmabYcBijJzmxSAUeEuCP14qShxXWmVftVTp",
  "key14": "5rtCaLDL8ygJK6pxPwnw32ceCadk2MZ9dPMjS9bQ1P7yDVN9Ygauiayok5WfqrKDfLuGqymAanAXmWjHMPK1iamv",
  "key15": "qrx9hKqTEwa7VH7vNDs4mzHcZgzDvUcekHDK5pYor9QUr7PWpSgavShuD36HsAtWifpB9pVhNzKjAcSrMaMbdq5",
  "key16": "5XNBkTNHuqE7VEHEaLPBDHh1LyvEtZciuraYQhbXAah5EhofruSpfrkKqDpjwE3a4zWyTNsEijrvWudWeSeacjWg",
  "key17": "2aV27gW1AFtqBxpRB4GJavADZHrLBfg1CMoNAuSkoPP2iNVzHhgNnJZmV4Vs2pKa2Xmt9mRwEjKduV1Zi1z5LtXa",
  "key18": "2Ta6kUaZriW7ehojXjNGk3d59xWzD3nqq5FksG59Hc2hZabvqmnu9wDCNXXUB2vh3q5c5Ckn1GFsiDKUoZhafp5j",
  "key19": "2eTZLyWXxsAD8BDgbnY2wGFka81S5VUPDV7L34h15wmeTRxcjwMH395aVuZqKxtWJmcoXCRRhoGHTMj7QGt1puaD",
  "key20": "mE9j7mKyUh1tM2Q9GpYPaoRRS8fM6fj97uTYVXWv3VJcVbv6YuEr8aHci3xePtUxxqyyJTsGjaNZfYUKHaGah9m",
  "key21": "2Y3PTHsFuySy78Ukz228YEM41s23myiqtNp8NxgkkHTDtwfVKNC6z5KYKW8M8URBfF6hvXr53hxZgZnAkBviXTpQ",
  "key22": "2VwvhL7TxGhwuVu7JJsgc5YfRZfRBGKHYxebDi828ux4JK9gTK1SCSBNsrLBiw7SHYjeZ9v9pw6w9cTG6TQGeNap",
  "key23": "3ntG6SFLRCY8JS724pNU4RdbB4KznPk1ZudLfP7uU3kL6xYChKXjh1LGyp69zfBjc3XH3gCrAV815CMUGyirJZnJ",
  "key24": "63uUQBQAeYe7QmcTbhrhxYRRn2F68YjcPpxNSU7KuSVmEfDN2Gc1fT2M3W3s1L48btYfbuz2JYH38gMZgBJ2Mutv",
  "key25": "37AQc4omDFfPeLw4MHUYuoCm3CvLVpPLi3cDz6HrUrDZshFSXPhyM2WnZtN8UEGx4rHjTyQD3oJ66j4HRY4VZmsz",
  "key26": "2Bo54KyB7TZLso2abHrsFJoTdrGCXBkiuaUSZwhQTQRn8Chf8mpenX8WvDz4QRbmHmXDqM5wH6LuiCs5xApLLzEz",
  "key27": "636o3Jkr4BxQPivjULJ7aHBpMxpfZL9w2C9d8yjG3BMNBQaSkf6RysouZoEvVVko83jqmy494UWrGRYrN45RdMSf",
  "key28": "2vfhpD1GRmamdR16USRrNWkTxCCfvkZfXVkVYkw92QVtpG1w5BcXuYSoyCXCYAazdKa3waJqnJMozBM7bNUig7jG",
  "key29": "3SS4dVkbHpoqESG3Q89BTe9tPqAkeP4D7FBpZwkYqqgCGwdgvK3QQCzKFGie4V8wYjCZpf75F6c8g73Yn9aeBd8V",
  "key30": "3GyVLy9LzS2TEjRpHZDU3ZyNgZTGCah4XNV5onCEEYPR13MdKagDHj4c1e81D5pF3FisLuRCijWFo9XHevrSksez",
  "key31": "4DvJMB5jZu8SMFeK93ckfkNdEY6Xnqpnt2zpmbzVnsDUgKUHyDvCVB4VkEXc4HpiFMXWrwmnaXf8LtTRzGigD9Uw",
  "key32": "2ZQqhYcKF2wuchSBbqhFX3WXETfx7daecW5cmgGKZxQejaGr3qH5JTBY7Udt29fHy3kcHiNDRjSUuvuCrDpYSiPG",
  "key33": "4MiJQgATxcF42RHThU1f8TdUaJtGmQ6n5Pg7WrdRvXDfowzfjGKJSg3v6ZvdzWcowkY7bkFd1zGzT9e5XhspxF4N"
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
