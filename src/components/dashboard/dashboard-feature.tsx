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
    "2YfynEADpQY8Fb31AGRmeictzLfgDJBSTeBNnjgznh5i1zCC8UdqNxUsSuZV9vYnVfFsZzuPDexz4GziJdzHHnAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "imPU86SKnX1hNqoveH184Q8PsGZzjodd2HK5AS1G7bpr9wWKBWqsTEHKZJhxJtKeUs26gqMcDszyb5TM7F3Nt4Y",
  "key1": "tAJWkm1aEW99sDE73ttdHtMohD82kFqs5WnAngQUEYxhXoxMSrkFUDwx1turgD44UK836cBNksQr35KLQHng2jc",
  "key2": "4QyeG4qFHZxuo1CKDHgf51pUNnqviuzDTXYP7k62tyMewgJyEnquQxUayLyfqnv6Vik4JuYJr1wBMSy9A4Fz43Dw",
  "key3": "2vm9f33MBFZSNYs98ZyYf4JknebVduuPgXbH5Rv3g2zPRnueHQFqvb162tmLKFU6EAVP8gd3ZHiA6tXGpbzWwsit",
  "key4": "2dv7c6r7EjcTwBd6MzJDQbNPHtrhUwwhiyNpz3hdoCZouVszHZ6FiMkzwqq7evT5YxNM6myP8GUhJNe8GhAFrGL2",
  "key5": "LiDDEBvyHmkjvhqjKtZBypvZ1d2yUEDLVNqPJivd8an2af9mPvhwqh84BWxJzhf4GxUgNUH8LKyJe6AFbPWET4b",
  "key6": "EuN7uKAypgzm9BGRSW4RQJp3zDmyUJRrfUDR1ynm5Ae9BHpuGX9kJ2dBuMGUjiHZsH813LrHLFCaAp5jo5bZfqy",
  "key7": "5N1ASGpLLnFWwQAQnWEiGZtcCPrvvTUC7XhS37LyEAvPYfVHVc9d2RJghK6YRFNXKCr6bfzW1j4qDNLKmAhnpMac",
  "key8": "4kBgokag7zmHjqs6Ys6CMGxRkdzwpgGGxC8MFis6u7Zi7iENrYLT1nRagyQd4P45cn4jkzN4mHBzZidYmx9ttfz",
  "key9": "wVXQ3cGB4bCFpEYVe8VfJdansD6wHCaXF9ecJxGrNcemxid54ZGU1PASKjUF7Wvy4jU1KEVowfLSZpyYp7GSCab",
  "key10": "4TntfgNvKSehm69xwxkahM19vyxUQ5c51FftXnKf7M6jdDB8opj7ru9oiFDFUjK2NYpVdo5WPu4meG6ThmGMQpwv",
  "key11": "64pWBR3RV9A1sdU7XrEbXYeAxjCUs9ro3WcnzfWnZbxQqEtkow5eQRQtvGHHwZP5GLucpF3FNcDL9mjQFPrkLHtW",
  "key12": "58x8cs6hDw41RB2fGLVXc79CxfDHxZFfurfGk33nEaoRxNQrmZk5CM1kbXjCXRX41ZzXpE424veQp4PzYwiq1AFs",
  "key13": "3SMzsMd1fix6jtJLzHz9FQfgYt5BtLZe18u8m76G4iaaEaU33226DUPcsfACRgik7L7zxmCFPyTSgwZ1qHRx6uR7",
  "key14": "4nzayWmSZk5KKJUiyKu8e7zH4XHSXnAsUJHhAxrbHKS7SDaz9wXNLZN1T23SieDkbYpx4BVHCuaPh8dDhoSMGfNS",
  "key15": "WCjHg4T8e3iBZSEgYxRk7pxvXXHz7dAXEYi5K4z4kefY4YtU9k1JpdLiQT7RLfJeMQEvTxWFMu8YSBVrzDhzdTP",
  "key16": "2cb4ywqc43m7S3VjtbfxhZMWnHpmkp1qD5NP6mbG4uuJMX3nyjFv1LzA9Aq2AKQgbZCeYz8AmZJjU3hvWaWEq3E",
  "key17": "2Ek6T1sfYYp2xXe7X8PQuRdDHigBsKWQsSKqpsQxFHgCeotgWqp9ZZarBmQsRQpnGT4sadgJ7SmVnfBDevCnomP9",
  "key18": "F2FGSwiPxRitCi3SqaMeQubTUxQTuwTLdNqXB7DK6VW7Cuw97QwWs1YtjL3NfRLFQQFCyYMewhTsb92BkgFdZWc",
  "key19": "36Bhb5iaNfFYEpszxbSMSsRKasqPoDRSXL4nvjRirJgKBvSUEQYsHiGzkCcevoyB5Yy6Cury7exb8sL4YsKowmDa",
  "key20": "41Xe5Yas3RTJCWKVU4J6R61x4X1Vwiz8ogTCnZAVZcUxaGU8sNazwGMbReZ2SEzWEwPMser9cUHPaXAgJt3iKDSE",
  "key21": "364Ug5oYJ8xWBEAJ7RiaHtom1sduaA78jLksdrtyXoTGU9PJ9StYAQHLKQec8ymiZj4F5NFEwcuE87vEPXZRXbzk",
  "key22": "3tQQS7TBZY3upLVzcPBe6Q1UnpEjwiNvxJTuwZR4ABb84Yupvrv9hTgnYvCRcrusRHt2HWB4J9FuunMCgD7aHJhj",
  "key23": "59sYG7RNYtvA1S1ZMMC3QhdwXRrrRkTPmqfkeNT8Ei37v3YPwajU9RUVSh4JdsUiHBS7w1EdeefKReEjKzrGWMdP",
  "key24": "2eWgeYWYy8xzdSMsKnVmqHwwSQPSjd79bEGwzUnREi3nfvDXeJnyN3Lac2dbXfRLsax2TD8SmVXKhahfTTBTN66u",
  "key25": "4hmxj3cSTp2spXJREiWbKJMq22CsnLeZM6XEwZS9sUmWxQCPDroZ7C1qNSAeiXRhTv8V89AuESL96uFf2Yptmnm6",
  "key26": "qRxGBKHc9a5k9nHdx9enCJDUMq9jMte4yktS9jzERbvH32kUvREwUqhfX71ncYmRo5kYaD7WEYWFWkt5nvHAG3P",
  "key27": "2Uvcuu7QRCe91zamALpuTifCWutTn72BJHPmW44iHhGBLxqWUJ9PRXRAzj59sxk2xorJ18qAnuMkcQbzt7PW7177",
  "key28": "8fPn6M7TLzF9JanJydgCyHNLVmHCTtjoyfLPqeGyzpSEmFQWhUcsJ2taypLr8pxetJYRSnyJfzNdzwXEqhP8pCK"
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
