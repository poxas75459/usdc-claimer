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
    "gKKbPsPuidWWSffsr3apsBoSWgfZgd29PsjXUrKY2fkcygdivnEAEASfFLMcmFKwp5gXJAGNE6xKvJz7dfVbhcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gHGeJGGx15isxbEvZi3SoHPJW9BaXxgVqt9GsPtQ1Gg5BYfpAfnu6vEkyaXT72yGbfpYDY7YJ92iFGzqWbPJWqJ",
  "key1": "4nxEjLeRSMLktTdwjmiQxfzw8Lfb6CeEY2HL8meBULXa4MiEwQ2JAgMdpxyifMfF1cUwSc7QScen3qFRjpyahHrM",
  "key2": "4UrDkAeUHvDR4Swd58pi1vfym4oVguQiyqqR3DZFLW7j76SCaAyZwrN8EZGpB2UMvyc1MT6rD5sQxjMoU4v5kz4e",
  "key3": "5KewEKe9SxRiN4jtMokUCb5WHtzn8L9kxj5Xtadjc2PPqvw1yTK33TLcXCxbW2AAiYk2T7GRzdQwEcgmfM26pHdn",
  "key4": "3axGyzQd2qCqspQfaQeH3Amg1FPK2NjTqGxGqZQkxLuDVDomPD4oHKdGiAivpVnzti69XCfFxnGhRkjWiUrpxYqf",
  "key5": "5bgemW7eMDcv72y1DpWD6eHe8zNkFHkKH1P4QSYRqsgdPMFjLQAjXughDN5m6v8qwoghj5UZU4YxoUAh6nK84EE1",
  "key6": "5ohaH21xER7XWapYm1ZgpXjt4ffUoi4tneKLFYSYHmsEzCzsHmS1f7oZUFx4mzfyDg8vs15WkdWvvYvf7oKhjTB4",
  "key7": "LSnDQ76ygAb16wnMqW3X42w78nmj36MS2SZaAKqX9NUntLe3dfgskW6ht6iTmCiRRcPNchbCybyYoDS5vbKmq1T",
  "key8": "5XQp3j4PPh5gNMKBwFsSfHJF38sfnkSCniFPRu5N5TsBPNevaYFHQPEZq5jV2BbSMjY4T8zVBeioctfWhTCU8PW7",
  "key9": "548EChwkr24ipe5FL6j9sHGTxTzLUqScmuqA26w8q3Ei9tjUijb3XgCVodZ8h623hKW859zv4Tx52vQW9pDyjG39",
  "key10": "3AF356WA9rwdG9QY1VJPWwiVr23gCdTvh15YzHa1yLCZc9tKfzeZPwdkBgRbDrgvrxLui9NkRNxGKKAnMBbDA1qy",
  "key11": "6AmkAH4DCrWE1TKFNmBq1Dptw1TyWjRadkEmHinH5d85hU3qR2HeAFnDXjNxNEGLmdkcJhQJzBsuq7xzbrebyrT",
  "key12": "KPDEnuDgruQDsgdyn6XETv6eTc199UYFs4zoNLq4CEpvZNxf3QugepnwTVb1dnK6ecp8RtFp1Gx6MpD47rUFxKY",
  "key13": "4EC7psTdkW55vUStYq4rLGWGVG61haChLVJrF1SvkENZVmt6uBSmJWwUsSPNKLnKpFY3JUToDbabWgaRfjqyoqmT",
  "key14": "6PRBgSSnnKeSMygEMHbC7hJqUPMfpkAhrqgQBkfSGzmrLyT4xYJR7R1GirCoZhDJGZYQDdsJPjC3qmaWAeoh2Fy",
  "key15": "B4Qxn1W9UCzioC4KKgHVXc4FRWvs2N7DTcvpumXP8RxddDxj4H4MzFjTRJGFEd38b8pCBZcEafqUvugLAtmnpk3",
  "key16": "c4SNk31aux1eGgYTLnerUN9CPCrmiXmHvZhcTEwyjHXfWh1b4ZAAriZTbJRdBzeasXuWCsBhLPW1CXJyJq5thKK",
  "key17": "2TDT9QCErJjK2g4QfgpXnBnXceWF2v86Qis9iFqDiDnC553G6o7C2v7GFHvY2iAbZDViYSPhMfvdmKMyrFDUjdkh",
  "key18": "P492gpcqeaZTXUAF5p1LKEFSdwe82EdsqSakz1hT1EJyHtVcLKk4vPrcUuCigkV2ddfhcQm3oHTaWUPycAZdWdp",
  "key19": "5rQCx5wj8P7MQ1RKPyjxLtLVxU6Yq99Gge2nSZwbFWLQoQN9QjTrvXAd6ouWHzv5X2yJNYJHzxQCjkbLWpA2GJKz",
  "key20": "5FUjFrankNr4o5uAhCmDpccTZiNwR5wvxysA9A19ecRS5ihKijuUioe8NMjSw3SyeP7GqjKhzTp4TcjNwduCDwQY",
  "key21": "4YBavi8JM1JtAPVoXaEfXm2xe5suhDh9cztfmssFvpb94hXavLC99kkLjDJdrpNPpV1PKwqw6cfPFzfy5c5CJZD6",
  "key22": "3Q7Dxa2PoevxNQneM78H3rY1B8LD3Z2Q7pDKjSU48yQhvn2x1A9RdHvjk7rn34wJPNRBQxePBZiSLJzqZmxtanZa",
  "key23": "43S7qXFwTYSdaftwTn1hGwA5oEPN6c9V611oJPg6CbXuXzBADNRfmZo5bD8YL9ujFko82aZ8h9bR97k2h23UmKnZ",
  "key24": "3WqAAoRaJJ1uxdcxiVDBCExKGpKtmPnvf7XvfT5ALjnAmJaQkrbJvVPXsr6w5zstKCay56MVkBuNAyQJHotaGtWr",
  "key25": "5y9qaoj43w5p4WXHmrHSnrmV4ePbx6KdeW5qdqoDSydPNLQdKxfgKCk9McjAknBEQoZrgwrY5SxnoSZcyM8TENMJ",
  "key26": "2eu6YarqAd4hUL41mndMe8TPsgUiwAayNu7ZYaYEjfystXYH5SmS6MKudNypwA4r495bt8k9yfKSiTQHB3gb44vB",
  "key27": "5mMPgvsRLAZmcmyvNh4JVDwPCKgWjQtruuacu61YtWzgakjpwVigdLLNgYS7qwfgdjCQ5KSuQgEBrGMQvYmSRWLY",
  "key28": "GtBZDsAw8YYvbZxCGztuF4kAwx4P58kZA8zoY29EQZa8AFz5Wkjj6khpQH4hrSZF1FczAfs3DGgKNJMSCn2V2TU",
  "key29": "3qPzp6rN2X6pni4VSpWvwdb3ReKcpoVotJxXVtmWU627KeLg19FprZsKAKF7j1Vs8eymoWioD7Yna498KVSYxBnE",
  "key30": "2jDFAXskBNsUDrQNytX9Y5J6YbX5ah3pBFkdweLZwXTkfVrosN7zSbpf1pEL9NsyanLrfpq6aNDC6gY64yQf7Edk",
  "key31": "66tgq1DxDvrEnqB5zFYiUJHrb8AKEn6QBgoB8Z5KxRSxaNVqTHGAH4xx9bCMQ6kYoK6RFji1eXBQPPZgKkSFGY5y",
  "key32": "5v5V5326tK4txoYg3Fa5fLCD6AHbYPYAuLEFpFE4PyyCCirEdRWnmrLhyoCpS1MR9KquHaCMSxkPSAjYfqLGdVBG",
  "key33": "3agVZsEQwBV3k5KCDsMGqY2MZTFsJUTJukrBhW3NSar2EmhoetTc4W2aDjFWNxBRyti5BmHiusX7i1dRD51wkWjq",
  "key34": "5q9NjwHXdMtwHgqT7UJyx4fafKJZnJJrXWGgooczaSSG5VvjeekHEzyQB7nFen2SqzATPnE1eerbPZCecAeF3w6u",
  "key35": "2WQHhg2dR9YPURqc3YBG9Rs9GgTPA3e97Rz7YSriwhjmH52JHbWEPdjHLdH9GZw6pLsrLjGLYXcHP83Bh7DmhdUy",
  "key36": "5znZRqd6pGK11Ugi6NQMzxt3twkTuBoazNRd1xYNNkwwtxigqz4sya6n6RMXAe58HHtYLYSwwN8RTTcbahYCJc21"
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
