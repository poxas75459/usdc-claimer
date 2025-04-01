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
    "5QtqmnEvWechszgc3aa6CWsdwJW6X9H53oZy8Lg7kwAweDws2cwhjXCYPC3NTgv5XUNaE1soceDzjtFSKEBpgD7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d7gPJ6BNxJyDdBdyDThHgfHVEfKwjxz2EV8z829RTHZTrewQuAP3wMAbUJKzQmhp5k7UT8gk6YPsRNhfgXoBJAv",
  "key1": "4WxNyXAmarw8NjNhD63YUNnk78XYSnPxgzw8aMMgUmgmekXoXLTfGd8XmBDC1dPcbHei5eRYTMhyrxkhU8APRcXT",
  "key2": "2x3vKwjWAdkbpv4cpJRuBd1DNSfE5keHVuqwBGPsGFAW2Ngh1tyGV4S3qQPJbfdZM1usKR2mLUyC19Ya6v1k4SuS",
  "key3": "2yyz2h9NuHq5PbdsfnZaUhBjnd2jTY5c6HjWfcv6RDJ4teNUWAL7Mv7KPUioC9c3BAWw4yhQDAscsenkv4px4Dwx",
  "key4": "25wSRLaj4VJHBwJ9sns2HUiN5guan2apRzSCrQZi7zuLfxZPQpMVMjjvW4BwKK34mHSmni6nRyr1FdkcQ5z5emU2",
  "key5": "4nf3Va3bPQcUajs1itd8S9wG7barpySv6m9StxBCAXpqNduVebiX3sBjJtBVWGdvPCNVPHsFdHQMw2WtdYWmYPAq",
  "key6": "32iupYncB397BaUgThzF5V9fEKQTMzsH1gnDfQ5Sm6zes9n3D33Pg8YmfHqtVqcfMGqubLzh3L5fZMMCMqDJCSn",
  "key7": "3D1HBv23bV2eMYfMcCEhwqp3JapFyHJtFMNLua22uhsRBMKLwxqZYuLvcRc3gMBxmLUAvZs3yDMcfaGzynTf73vH",
  "key8": "3at3NS9k5mJF98hwBYLBiQwzdwVuDQPxoc5H5wC7UZdf4iittCFxxQ2CZRV9zCxeX5ofp65gXeuxySWpcHFy1Gok",
  "key9": "33TGfa4rARSyYrC34wE2uBy5coCjBbWBqDJqJefdYKuxKY4a9h5KsLtcrbnSZKVfFXP964jjXeSqRnyXMEHC2Gv7",
  "key10": "2FdvTpbzB7V6JD7jbG3p6Pa999oUmmNJGR1LVN5aknpj78bRpeiY2hSiJQPxM5caRiHJznqgSi6NuBNnXDZbNRR1",
  "key11": "5BFKiGBASCW7MVPHSqh2eWZchWjzqzKsi4FjJxU8V37ejJy11cMk6HYh3HhQLhp2anZ2h4BLsrG4zypoVB9b9qr9",
  "key12": "5AqfiDDa3BLuPEFeTDgf3f8tWx7zZo4peSrqqrwawKVE6xtdJ1y9m2BtTWFrNST4QUi3A2MBZvxfiQbqUXigTekX",
  "key13": "5NQASvHC4PYDqewpjDpjqWRddVRVmxkVcgwCD9s7CuYw7HYrLB5xY57x979LxXGp5suvK8dyPPsSPGbkocYu8iN9",
  "key14": "67eTAmJ3ijyYjh2B5JRWZNd38Hjfaqtqvat6i1QE7jJ9zLTr9hoJxhRRX2hy87SBt3GWbdsCPVYBRPVwvkAsgM3C",
  "key15": "4pVYSUYz1UDKJGeHETCVPFNMmzUwJPCVFFQdnotmrSoMmUPu9u8wpnja6JT1FvXiGPj8RQq7NQxFT8V17wRWJJkn",
  "key16": "3GjZ156cqu6XjUHcMzxVNfdZg2VUJDoJb7Q36YEKGusX9493ECRRiVxd7TeTsYuky6zPagQMb9zyzFKrikTUVBZ9",
  "key17": "5u6uZuUvfEgQHzHVmQHAjPb4nHej7q5wyL5FX7J7Y7p33NTZoqUck2pBKHCcBwxzXJ7AgKL9KgesmbTGjdrjwfdb",
  "key18": "3im2LML6Ez4EyYWW3BD91qU9fwrZpHhEAABfRP8SqmMKDW2MoGW1jTNvr5Y9Cm2ZDUM3GXbZFUWHiYh4Uk7xNGHJ",
  "key19": "62pQqWEd2kUNt1UBXGbmFAHyoboLWC9hKNHzeBeT1NjXnQX1ue5a38xwq9KRmYQzEmrxjhgu2Djzi4uRo3fXebX7",
  "key20": "5dy5Uuy32FexvDwyj9P9RCrQCzxRuHdku3wtDdGiSBLwbzFrsaxEQWBLLsLNh86xtAENe8LZp71XgBo6waA7t8sY",
  "key21": "65vH55v1Kg5Fo5j3eWEkz9H1p9ZMvyKjE7XQcUokJoty8mCvKrL3pCkpANoUuks25J1Gxnw7onEc47uMdKsq7a7R",
  "key22": "4RWUKHTWo9g9Hjj3MJccv39jKSyJ172knSBoj8mkhVDbxKkWKXnc8Y7bkdeadHjeoVDWm59PdsXk6T61JSMvDkha",
  "key23": "34sj5b1y6ujLTwsMehqX32pk3itAoHmRcY4UjfDFezfneAacmg7dCL7Fn3iVb2Z1Kukdh87fkoo9QXaMm5A8q8jh",
  "key24": "9Ew9E9jZqCbhoAAcSZQP4hzQJJ2bARq3c7d79zFidz3DDau2FNcRZsMUAfw6Ye1RMfQ9pX5JEqM4EswDLPXkHjQ",
  "key25": "42J3ayft4HRkdTXG8SPExuof7ximvCjFSZFdn52F7HV3QRsXsdVU2sdx7GAadhzWC5osLEZzMUyhuRoJe6LaBB6H",
  "key26": "5cN49QRZyKGddr7ygTvaBG23jfFQpUJCBN91N9gZJQkXFagASsmSNpcmHRsdVerWHf8WjYhwZ225xek8pWSjdcJB",
  "key27": "5dMpEnR7CD6PCKJN3Sh4ViisCGpxfPFPEZ8F51am2xFWbdhmjughsmmo5wecxmD5EfYDx8n55XbUxpPkWNiFtj1A",
  "key28": "3FcEdzGttuMVzvvPjuYaHAmg2GuThr4oWNncoKAYWbzsupwjZxyaJPatSUEMDUpEHESDJ1DZMvt46ns41o9BFcFL",
  "key29": "g7otkgajqAKU1LZ19S1UVeqjnCKmPxPqaCHu6naBmDifwXZeZHhvuEBnRrKFD3JHC5Bzo3ox6Rec1cqBbEEErgF",
  "key30": "4QB1Pc5a8smfMvkmaoWZdkiEvThDinM3NmwzZypBYyneMHCAV5uZnRiAUAw7eTiGBbvio47aEBcrcLo2YoSWzTyc",
  "key31": "2ZqxqqbeBVK6uckTePSTDwp78N8VsHCdiDwcnG5PVUjorJ5WbBun7ewhsxt2Bg8xpuJtPNKaaANpq22VqRiorfPm",
  "key32": "4XkLpLhhGSvGTAUHFqp7uXjN8WuhbDwuw4d3v7RXTwQfRGjJu7fdWraGgk5MboBfbGUN12CRDPewJt9uXfTuHv39",
  "key33": "V1D9154pzsDdnAFXaPRAVaXQgbBKpGz938wAYw6KeM7vL1cRcmLTVJziqgfucUN2ZmoqpqxaG9aFSXQhSijLLrM",
  "key34": "3LWBr1bqSxNCgQsVRG9WyzSxWsBf2DPixF1AVeAY7hKQx5vvzVefLjQHwzbyGR1pvwzbZu7vP1VU2Q4DkArbi3hB",
  "key35": "3M6MWtXd7EGAhZEgPqRtUMgrTJ4h9C76gPSi91FJnTAgxp8ixmkt3BKpaseeif3xiKFaSmttQsD3nENFi4X6ne7q",
  "key36": "4WSS2HMKbQSpXiCyFbMtHirnSzJipeJG5fvC7R2fHPnTmWEEJsq2BpXrjGk9uCKYc2DL2epPZsyym4ARrX68n9zj",
  "key37": "4o5cbJafTyuosA6WQFTdZL8Tik1TQKp5pRxjo3Rbn6gA6WbdTJj7hTGjpkKc4tZxzYeAG1p4xdh5tgXytMZ6tsXM",
  "key38": "24DZcd9gyqUqWgWqawFapm5hQhPgz9jvodxnbeKBoy1udkqJkwaor2bvJ5sBbHaGoVeXvRmuTQkHAPCwekbzNY1F"
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
