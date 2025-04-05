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
    "3GdV7PsjSCpauVvexhRE3vBwnTsFUaNA9eK2Qsqy5jp22zZ8TvVWRSC7XrYBEuBx5bRHGzhzwghsaKJ88PHrj9xk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46CHtdX1EnJSP4R2fficBEKcAY7tWyMUFSEwsrHaGjWFJ6kWui9ESf7uG2RGVpUwBkE5EQaNzwXQhCjXxNPn2Yfq",
  "key1": "5MPQbbdFg2dqGwTCEGc7aCaXqbfDmZETJ53chfLPAWnPGScpdMtpAsFtXS3YLwvQit377iCsgQjDKVQP5sDtACGE",
  "key2": "5hE2dFxqQTHyzpF2MQnJp7fA9wLHDimjG9Y8oEg7eCotvuYmjPn5mRQnB7tFrnGDvPhwbDWNwtaP7ry4tdjPJTT6",
  "key3": "4Ha1iD5vhvTyTvDKYg1diyu8imo6rJt4V6e9UKa3fuAwihidb4Tmag7xXfP4WFj3eWCey94oBRWfRCwyCZ4kjRLS",
  "key4": "AKhUrFH1ycWCLrfJdeCTargkoVj1Sxsn5ncdYRpdi5CHKA2DqW1FxveKYSKebBoiPtt4h81nkFX6vPVAjqcZXYH",
  "key5": "2HtyPbigp7X1HQccJiSqEMnZDTu1TkbfTWcRJsE37C2rfXhxjrtgZvXfCaJSMPZExM4Q1XvfwGZNv8SLPRoq4VYh",
  "key6": "91grroHBG3nTKJG5pDUh1YmVJ2YqE8KkCcvL1KzB5auyfjZoxgc3hJ2JMCEMHMkVR1dRkgzUjC9Acgn91qyoym3",
  "key7": "2rTs54QcYDhQa3U9BJZGxwXMxHVxtt2broPiGMuLxesoNfKhhHFcuxATRSTn3SbQm6iZMoUx6fhoxvMzNmBWGuw7",
  "key8": "66PEb6GXqacP65xiNHEfvEHJfaXfQ1CRVdEUczwzezt3kqN6R5Se21H5yVnR1J7M4e5zwrcsCMdcKXY2jDZBKwmd",
  "key9": "2ohpdE6k581A1eVHdJkscymmkPy6HLWcUrboWtEAfTfyHQR7AuxaDC7PUY19aDcHQQhPx4p9CnFLkgsoGC9E2P6o",
  "key10": "4d3zboxTeqS4NMU39WeX3H2W8uZP5mrA6rbgJhDKNeSdE28vVZyxDQTwJK7MHbqp7J3KyQtGzQsdd8fwDatMv1bc",
  "key11": "4mckKGjn6aGxxcU58UBRgZVgUMPV7a48f1tuoftU2D4xmLyfWu3KjQCiM9ShnnoHV1qsarS7JhAvxvrCi2XCeLKL",
  "key12": "5DrWyHCfcMvPm8pq4Z8btT7QCvQGPzmY9hY59n2K5KP4Q1WLex5WBYB8fGe7GHjtGKN9eF2UNbdP9oKwxApTeWK2",
  "key13": "5m5Sd5zVFAp2kY2afLMkbaoR1kDuYK5ShWf1XgVsVSFhibLwKt1AwsaixAL9L6xmai9vx3GFEjVvs6KCMex4HU8Q",
  "key14": "2SVyU5c1s3D37a2qXMzp4sLME1BfPxU964uu84vAatVmNQd1LJ91M5V1gff9t8X6wo9ERmMjPcMA5VzV3qFBLS2",
  "key15": "127Jx3bXECcDzcWfyE42HGukAw2MnCj4wzFfmUbnyXbeAdPuzKF3hksjdqrtYGo3SX85qaYC6Z46B8nvmWoyPvfH",
  "key16": "5P8BdotYy7CNbtXUwGth9bZyxmUjsCFmNa4TBwyK3XZFxSDRpSTxB2wXkBDm2ggK4c16kMxPKLQTFQtKA5Noma2V",
  "key17": "44AbaqSkosCZd5SyYjjnM798emMHhp8KMf8Us1pHqzRK8WidjXo7CgAS8JWgDZhmYDeiRAiauskAd4oWchZ2ELoG",
  "key18": "36MH8puZ3nMsdj2yhfFHzSpKtmL3X9pnQi38LaKV7FgVpoRaBmtsevDinqWD3tkDL1bT4Lua7qcjyzmjXd14GpLN",
  "key19": "5bZPzPpy37cv6oCTCrVShcfDbZkn8fZHB5GEKFQ5TG1Lp7nP719GK53ampi1DqsVFVGaMDDPEM16zqrhWbzLDwrT",
  "key20": "3UA64K6BiH6EryhiaFpX6cfVAftavr3WmrFKgkYzmRCLGZXwwS4AU9b7Wo5kLbCHfKLtuMRwTeKHbN4RPyfQGySk",
  "key21": "4mrtFZ15sKu53VWHdkP9hcga93UsanHe8T4SybWEAQ4v6zTd9mVVqqJYo6jVXbGSmAFWPtotwyHTNQ8eKkVnWiz9",
  "key22": "2nZaZvF4tZg31utKhkMf9839Lrhym61p8U5EU7Wxc9xakABfj4jFRbwup9TV6nS1GB2Seg32h39yD8nGRzBaYuDW",
  "key23": "3mf6xB5uDLegCTPAsrqQuoDppNXeJLkea994G3HGUz84kazsxeqNXYQZHX6HmmrpJzri3NbLqDp5eBmzRXEXXgYo",
  "key24": "4rW182HD1YJ5pkvscUH23BumwSykuoYxftM7vho9kVYZJ6CxbqLXxWSaENcZjq5cfCeQxMfL4DQ2qMEKmw9ZVEhd",
  "key25": "2bvbQbeRsMwfnUXVacRzZJrWcUPKfCxJ8iAaWkS2aB4HVoSEBbW8RCbDtzjfFw1ybUqVRQferGuWKtVkXi1jhNiN",
  "key26": "2v3nVoDHcgf8qz43y4kwQdRZZGVvPm7rk81aurZKzKXbxLaq1rRX4dnVptTBCMEeHmL2TLiiv5iA32ZiKY7s757m",
  "key27": "2DfcvyL9pyt4oSFZA9ym97a6yj7LeMhnumC9GJAKtxzRgSDtiwEffoxhP7tWeDP7qEjwCBZkFPoRiDqq6UwJ2jPq",
  "key28": "5sSYUUWJQc9JqNMbQqN2pQroBT3Czma3WuN1BPmvYfJUAixJPEgrvsWUCxyBpu7D1sWamTrMKSn1ZbHKWYCX3MTf",
  "key29": "4DKoDAGJUvrSpgy856qYY9qcysUrNhEE7WJw5jtm5x5rbEvKcnjWfWikmhnDDbRxgFLJhxrBBtUS2vJqdfktRvho",
  "key30": "ugZzV89cdbchy9qAzvToKDdEW9YZfokZEpjzkBsUfmGzUhZpRhoqd2o8WktURUmbsbfowsZViMaJXsEX41RdTeY",
  "key31": "2u5W4Zz5WTnpzna11RW4KUwH8HomMGKXyydehQ6mw74iRcavaWXkQaxSJtL1aABJ5SXBtux1kyimp9wbfU4tygRx",
  "key32": "U3aqb5HnEsJ6vKfU7iuCVjnfH99yREwdMdndmQC6ttwne3wjpRv5W1sAbd6LTTKnnp5HWLpfhazXhq39o4pvWND",
  "key33": "5sEveCTvvH4PeSK5Zygf43swXwZp17ZAtuUCsmpX55j2pjA9qwTAYhBUHixsv6ncphccSHULWxad2Udh2G2PktVV",
  "key34": "3XM9EsmcnLYWMUC9musCuxuywgxCw6kMFDkGgoEtiaLkhuQQ8aQuSvQNUQdSAYcjExgv676fHnekh3muaJotZbBy",
  "key35": "oXBpGAbT7Tiy8zAPNrN58KG1vY7mNo8nJBodysJZwEhmFfVM181BqxLgHcQgHg6bG3zX5L2HNjm8e2Cwg8U75V3",
  "key36": "5eYmn8YikLvrcbfsfLZijUkaJN8KvW8RsD4A254GZvS2B9vwrGo8DFJRXdxcvi8JQYwzuuYFKosexZH6M5NMqsMn",
  "key37": "53AYe9rnYmUUMN8X8qVc6fPqy6Cfh2sPEt9sC7q6Pq3CJzZyHnZiXgPuXs47QTtjCqy714VDkAaBXmJeZHHRhnR3"
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
