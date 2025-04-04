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
    "nqqbgKun7NTau2V3X9Tt3mLSChEgthJiZacMDAoTwwjfDxUYSechk8s9jqMSADUtiK9R6hxnCkbf31LygcRwv3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22gYkm7FrecEqEU5RkMyjAjRs8ia3UWMoiNB4M2m9nXBertpkha9KZtYm3WS5qe8vmSLqP4aejFumA79qBhTaDCn",
  "key1": "TG4CBZsrcMA65KkyUrD5VsEQK1cGCJ6nefqd4gsAKAYuQnRvrEHaVdNFvpidHnYVSwvVzeozMyjuxt1ysgikZ7i",
  "key2": "Fe6TdeXpgUMT2wcRQ2cDa2FRuEQFC7joTYPyF5Z7VtphkFb2fXxeJkpCWs1g27JHAB9fMTx46UQtG2tb4XpkfaH",
  "key3": "5bopQUV1i7TDXzvDpHtZkvV5mkVQ8pkjfSQrESC4zmTSREjGcVrxXJ7GXy1Era7xBXdqPZQaDxBmQfdCd65Rhco4",
  "key4": "4kbjPMXqzanAjd1bGU1mzwr4Vm1qS6rGwuM95oKQ7xNpmSyw1dKL6cuYD8SsxMVE2NisFZCzrc7Fcv88XdGZcnC",
  "key5": "WBPhsoMcB2XzwLBNMHxvshLFPTy9CbK3Cd311vb7ZFTUEMwazMMtNbr8qniRGBuzoZe2ADLDSRaiHCKvundKwns",
  "key6": "RCh51WQmpVgxs1pRA41oxK3QTMWQMHWDTnBKdyaZ59HKjTuPDzxxD5wAwRAvY9Vn8SJgD2ups6my2AYnhH999SD",
  "key7": "3Kk2wNmocf4HG23TRDrNbezUE5HRNX73pYbgVzN6QzUo5rfz6QoejuYFXE1DVGmhGQVxgzQZ7xZ3yLDcLbYDjZYq",
  "key8": "3FaGuoyKGtDyCKmi3QFbbX1StPvtKqoCn56TfcVGrNVVhSGooY3qRvDRs21aMgCQfTBkaBSZQUTdrQHc8bT6ZC2a",
  "key9": "64e6kukyYEy1zn8mzGLtKXZ2U8SpqVXMgxiP8gyymmQpxbnuHfLToi9sJfqijJwswZPy9YnVtA6KrzHrHgDF67Ug",
  "key10": "4gFyPTS1y7ugtErkPSwMqkJwK63jfhzzE9Yaozs3gxwUKMwiW3QUTZy2TKdC46hLxMxDmbVWVfZkf7Z8ZVgBPZUX",
  "key11": "2XB6hB5m5LbBVbwQdaaFUUy5KyvomxCLA6794aPMvSoEnJArxEoWg42JzdHXP274EyX2Uz1dgyXBhnT1Yy4ZEfZq",
  "key12": "66bxTJLZmNoKjxMAsZPuqsh9VZHXZ3JeKUF1ikWpBzVkCo4jNXePVWJjrhBnGBRH5WH8xPmhnRYHH8vn4M9Ensm9",
  "key13": "5iwY5uX8iVVG1Ab3XMzK86ozrMG6RgirqaqF2YYXAx4oK367mBNHMu4KKp3a8c32qXs7DaQnxbe53X6rYnWN14WF",
  "key14": "hvAqM5xBj7frpVz1xQEtH2AUmAJJuVMJyEABzhLmfP46K7cjjUbL6VwEE9shPHnRSmtLpkdQ82pxHkq6Xd1avbM",
  "key15": "2cYcbEexWE5UWTANgbQLhpRENTWDXfJYyBeBUgBz6jJSaMXGSYyYhwdK4JBhqzPQCN7w6MaDarYuG3iSUBUGf5P7",
  "key16": "5JnLs7RLWS4gyDUjtDiT41HKRsTQhWfB1x9GpCSjP75sKNjngLFW14Urs77BWVuMx7wfxsSpojCcKh4anbCdKLRQ",
  "key17": "zKSeG3zUYqW7Nut2XXC6MXXABnE85F1kXgWLLo7jAZqHsqZeRrzCjpNePx6cUQDomr4NMLRYBdSgJXhMgYj5My7",
  "key18": "4Y2sREZP4KmqqfsjJFvtz71rbWsRCj4Rzd3rA8SRZ1PrYvmati8JX8UAjPRk56fqg4BqKo7fxKbm3CJeNFKd8jte",
  "key19": "FL1bgvguxJnsrjbq2itcCxiXCKupseHmVurKRTUQF7ySFLqA9hYvH4KhoH7qvaq9KkMA4ggwKWyE4F5LssNvxnd",
  "key20": "V8ggCFkPnVnfuXJ9jQJM8Tm1bxVxpCZQMHv7VxZtL1HvkYmecPPNhVhiGpyBwhJiPtrceAm8LqmQptwoPmD3G6P",
  "key21": "qpq5m7pHpgWymFrniptN9hcxjUTEy6iS6moofMdCPfwXwjmi9xmAfPmoLqBbPWRBtP2izJcmTZaK6MMuEPBVfz7",
  "key22": "f28HhnKM3UJXG5v9viVeADpuNxeNS8ohENBP37RJGEzWUirUjeF6qHXsURg1BrE5R4mG5SmjZKtiLtDp5yejEdt",
  "key23": "Vu8e5JBSGij7GxmCu1JtHA38X3TUhgJujh3Ntq7p2SMSxyKXRX3JJ9hXh1CrGimGSuU8xUAAmqz2tuLwFrEtxEy",
  "key24": "5rfbpi3T9U9pW5k6Qa5qmNxovwAm5UHCGJC6WGWw5KcVxidsNZA49WHLBvwgajirZpKyixyD7vcF7PNPxRTKVTTN",
  "key25": "zwJFcBSDe5NaZNc9uAsxdiwpfVH1LuKFf2bZdW6FK5BWb6EHVBTbfmbg2AP4NeHJ2Q2wbnvK9g1ECMX41Gv47o8",
  "key26": "5SUSTLJhYiko58hcfG1Nd8zrm7twnMFXayWFpyAv4d81SCumazyCRo9BXZ5ZBKwRmo1WqYRte8U5wEzzepw3nLgR",
  "key27": "3fdsLscDN1aXmghTCUj191TBfYdhKjWmiADYzDASTBr9mYfN3UmfcygGjf9jWyHeYgEBmUiDN4nhkyQqYcQsBWgT",
  "key28": "272r6imknvCgDjNbxthSNywWEpiuji1ajxhedQGgWkuek3Eb6FSXukRtUVctT1WXLqatHhXRSEzwSEUvJhrfCYwm",
  "key29": "82zS9VNVA2e4vPbnYt4qrH325YM14m1j2cMa3DBWyB7ue2su4SFhMKq3P4ReTXgCSy2iXBSQdcfQx2qXejk5CeJ",
  "key30": "3MufU4n2dbVCDXJikhjT2e6rVNd4Mqreu9u7o133kqG2Qdrv5TrRt4fukytj11iGhCBFhD3LnPzEQPHbdqhA4Eqt",
  "key31": "3MCWNcQ3FX5rtkrhZTBjLSiCHfyptQJRg9iQKQVX5PbgAnHtfb44ADDtDVYzJhnW5YoQjRx1HDJH6KUNe9vynpPG",
  "key32": "5t2zzzNkZL1k7M5rr99uEL7zbLHbaTc7ZfuctU1bt41ArM7PDCqBgYLaorJyho7hc3xK376c6ZsVvXpgeijdJqEi",
  "key33": "4aecMsTQ4ES6S4eu5NgtE5hzhaMV4AwMSE7BFuB9RKeDLLnVYjV5F8LX7yXJi9ifM8Njqk7KPxtyKsEhny6vuCBh",
  "key34": "4vpe7bgoPi1L6XVxeeVMdM4qjWgNtyzh4EYUmqTLubTg8rXEa7pTiQihyrSz2nnEHZ2woK8PhV7C6mgofBfdkzSM"
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
