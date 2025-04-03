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
    "4GuDNmwyNKGC23YzBw93C4Guf8oFrvPi2S2x8rGauaACXy3ADh4rDsZehkTMGFLmnan2sKDRXgznWs23UJL7Bywj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GB6zhftvHDTdN8HUK6cJEuWwnz3XmZQ5Z7khZ8uikoX3nvKhtnY6n5PHEvzrmMVMgTGHyxwYAtgTLRu3Go9D636",
  "key1": "2rJzeUvb9o1Lg8Z6JMBC1zCJzhHQBkpVbivcKmS678v7pSzspPXivVxXnTCaTbhAry1nLbq8KykyTktgoQ9KUBFT",
  "key2": "5aXVq9gRuL9EYRMUHwkLJN1ntYeVRnNSTZ9iZiyzt5tUPKzytUfPviJb5dV6Uxueu9Umf42oyFgGB6p9cRTdUY1w",
  "key3": "2qbeftp6DUy6fCbXrtbcUuPVaVKmhGQ3BTpgqaek4hb7bEMKDE6vb7G4e2JExxEC3mqwc7FS9XKCADsny2FWk7o4",
  "key4": "2fZUbU6ZRYa9V7v4kZ6iQ1iadpirZqteTwTzWn1epYwtqBWpcQNjsMkNCvpmTE6hD51Tz3KRSCj6tgnQuYTkp42H",
  "key5": "5UHq2jFQkzQXwucxFXUtUurfi7dbYDSjfk2gXWnBBq8DQ6A8Xi3oQSWuSwAMLsyU4Eqam99uzNdJUGxuCBggSffw",
  "key6": "66e3j8V5LNg9S3vv7efmP7RqjgMSpij1ZB5q4nyzPkYgiKHqTLFDWox1XHEhRP6uyczbCMbwJtVaYZjYp4XvQrzk",
  "key7": "ezhw1zPQfGRmwKkTdeHBsUUhCR3qTpznFAjFZnufgoVkbE9vR7Y3kJJVPv1FcYvvpy2W2AbV1DdwygN2Y7H3E21",
  "key8": "5AdzSvEqQCtfMxDfuXwCQ8k5GS9jeBDgpfkZQg2zUEh8YmBVxxdYpf7riDvfKYudVR7iuxYpRE66JyBMfNEtEZS9",
  "key9": "3cLkwHZ6QKVtXBQe2ezYQnkqW9wFmYqXEpSMjR4dnCvavanbL2dxvEJjLUi2QVw8Ft1JzXbz6cvJ7AWmuq8fGFc9",
  "key10": "3GLnXHKSgQuGaqQwje1HSogqrgk7iFkz7NibaYhCPb9kDmThv2gdQRn4mbkYGJiQTz1r4Gj5MGCxm9iPDsUEP8TV",
  "key11": "3NpwhhUs81Jus4kUeSGnYrFJvmbsMMx9ecZYYz5LDYyTEsUo4nTeXRM2R25QPP6cBb5nUKrkAkqkkozeXFUVAYvY",
  "key12": "5u7hjJ6WShXFDNj4CJarkcYrCdkQ2N78DZEN3h37o5rwVrBdpRh4d4wNxU43ytLHaEeighLPfqPnpf9JvX2Y4Cxk",
  "key13": "4FiHc8Q52iF3curcw33PxMbSZgEax5W7jwfiYmXM6Q8Ly5AqxAfwAiH4K14et2oPTsxwFXeUqgo1fGi5FEhyMRkA",
  "key14": "45M4D16PUZrLzVgJyg8soKh9VXo5wM7iQPi85UWVr4RzQGhfBiriiqSyK8FfVzV1fK4grnXwpkpMjLGxavwz5SWy",
  "key15": "2YKFFTMtSauXBWXrH7GRr4EHiAcUyXMUS4o5RuLkRvNE8HBbiCBcBiPXTdnvEsc9vJXJC15kmsnKXXFauzufpS8y",
  "key16": "3wNRm15ADKWWAg1rUsNxZWGrkXyZPs1oCqbrL2TJ2gney7aN3Qo2FtK3nGraVzk9LxPSQKSXTXXYtdykdpRsyhx8",
  "key17": "4cLicQbJazWrqpF35rXvfbNpgF2RYfApNBBXUKE9fPNoiimHFbwYwhn2MemdpwmBd6Xf1ij4tBVvpLwE9bzKYYyf",
  "key18": "4CGNfzSrzSingBtwRCDVyoLPVwMokxeiT5H9MdgXXD27wQ3YinaUho4FnjK9weZZSgLtYRVWevRwqVcTQYmK85j8",
  "key19": "nmmZkmzWXVBAdUdz6TQQTFtQ3sCgQBPWVshYBSaWeieusynMBJvndTkSrVGrPsqUhC5hbqgSBbaZumt6c4frdtu",
  "key20": "5NkkVZBtPeXpAAu4tpLd3uujTjiACJYCoY4TFvNi38HxPgXWRLyaDGURCPLN8hJVCoGjrGWtNjZQS2D4QSEGGLkB",
  "key21": "4Z3dSjHDUSN6ZxCXThgVUYPeribjCDkCvc7Edvicrm9LicJSZ99JxijJYEXvsCNhdJnXf74PLR5TXr4tpoQUwEoC",
  "key22": "e9uBLPDMQruprLrV7JMwMd61ttor5CK1WHWZUJPoQx2j69cd7WSYiTN34TTNBY8B2txqpJ5jP6txGMXAeg2Fy6q",
  "key23": "kaMmakHNpyZFCxS9fbwPU7mRkPCf5a2Cam6LVM9nC7VDXCFWDsFRqYjSQt97i8LnCSgHTMGQVQV6zhp3vyvvp6h",
  "key24": "2gGJ1u6WyotpsktK8eJvk8zjHQjVf2egcMstLuidskVtGzqCWDpyT8osziWYGiym34ULm4dp1kZsiQXe9oLahUs9",
  "key25": "ZTP3MaQUxjztWdzy8aoizR1KJJJYH2jFrVGABRKHEYBfXjadiyDKECzdBJDdq7AMDg227kPcvLsRqHUPYPPKABV",
  "key26": "3moQqvkhzrcEzteJK39BkKd5XhUVsMM786FtewrFEi1mm4u8hnmaxiJTEKCzM5XL5p9u3QuEhFyNnv45ykiWdKvf"
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
