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
    "3nhLYzemnyJM1Zzmo13bEx5VHCTRnZ9JUoHmYMRE2uqiNNKWfs9ZyMGq9AqtUeE3YUxcp5hUpYNtuhdpVZuz1GCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nex2rbpoDdFDJFJAEt5zFFPwmwFm6QLZdpD9roEDVcVaajF5u62RZxWeh6QTQDT6Pu2U77rncy4uc7j7unZKzAP",
  "key1": "tSmocSaNpeD98GbM2goLYfuMpMMFmpj6LNHvJ93Vw46uNfLs4qup1k9W4oC2zNR86GufZjthNx4k716GFXFTXRE",
  "key2": "3FXptFTg4PWvfjxHz1gvf16C5ckVEWVCXfsw39TAYMvJm6D7ooMPTiJyZ9RwGJDPcUEa4yEt1f4Rkfd8meebi71L",
  "key3": "2dUZPnj8EyPAF2gLjkguu1wdZSKwh18ZkuKjKgPnngcTJfWVC8YAG5mzsVZNvrWyQKvMgfHdbdSKxvwrvyQzbaMZ",
  "key4": "24FiMNGsEhhcC4zA8EYBcr5gsQxtNDv6C2SdMNCJZuj82L2iqq5dEcABu5y59EiGa9EbGoVuaKj1QJvQTzUYjqim",
  "key5": "2E6bFY3kiM9gVZLkNGJVtrGNEPBZFR5EATjXgjUiqmQZwNHC4ifcrsGZwtr2dwUMvUEiwmWXf9HNwbMAqomo7tZ5",
  "key6": "4Mynw52Tz3FTJ26rBCXgYb8jmZkB5VgnA9ovU1Y15Fi3WXNdYGeMWSmXVASviDacvRExeA3gZPsdBiRAnnXpbqg2",
  "key7": "1ZSLiuZKBByjnCeeCnoJFtF8fvm7tKKfeJCi5S3ZjJcaXPrT72JCLFgxnKfQKAoEUomJkX3p28FBurwq9VJAeaV",
  "key8": "38uiP8RikRobSe1soNZqceFYZ1gJxd2ZgZ1LELS2v4mZedZgX3zmsRTkpegMgecAaYqXp9NWSTZ2jdVyrRTKjAv9",
  "key9": "hLL2Di6py1sM2Eqj927Jm2ycEBAqWGTWiV6esMo47JYsboXwJMUxz8Z84VFN1bujjjjJE3d37EBcx2yPDFLUgDq",
  "key10": "m8WpB73Y4RWMHmTq2nuggtdXND79Yy6dz9jfnU2gAUnUydYsMbvmBb9zfvcL3S2QvRP8otCaf4h3pD8r43krhy3",
  "key11": "5SQ2aY2uhHC3NCPe6ir6CEvH1LWqZajZiS1U6sxkgymJR9QJMvBjPckRtw1sM1nTyUAsMQPe98DkU1cKZCNNsK4N",
  "key12": "PMtB118jnxHhwSikpi8MakzYEjUqRn3YKS9yPrnJDBVQ35p82aSUZicuWjMthSfmrL9ZRMhj4NHwauvte3wqNH3",
  "key13": "4ecKqt19coq7codJ8rrAQ5rQznWhD2HEHj4jFGh4VFEsghe1r4cEZy6sWSeiB9bsf1s8LjHgJU7dpusCmedGnpms",
  "key14": "3XZf41j7P4WNrxgxsLcudpik3yUwTBTvwVrA8jPDLEfRmsTBtyHpNvusaKnnrNx9GDbQa7XshMQZaFxyEwj3e73m",
  "key15": "cdd7GhMyyXfSh4HAkteFCrwkuX4djKZGpCYHJKL48cdyHb6xREBJywkZCWfadWQ2Diipm5ktbFPYLfgGQbzfXDN",
  "key16": "4GD6zcy72Tpwojc4LPLDRCxFq6inmQ2EoBJM4Xd1HXJ1MLEkQzUjPjLKJtNE2afKcpygWTmprVGCkdkFteC5P3nF",
  "key17": "3wdxmwMKQuEaavN528UjZpcEFvthYjFuLVG82VpXMBcZvVdEjrM7SMqgxjAoAv9ZNTp5JUkp2KLThoYndBpf3bHc",
  "key18": "3KqgQEEQQjo4UcZtFwALzXexAh8hMKSNYDf9ic688qa6BrU5L4PSCxxnXWkewEDggznzATfMWFDGFCEEW71SHaMK",
  "key19": "398mc16YHiuA7ntimHJ4Sj9AfRFk566ffhWzWVAjrUqYVDpXKS3ujQn5cBrxXzDXtnc22TgZvnDCdc6vv6V26z98",
  "key20": "5CwWBMYiWaA3Zf9k5MzUEWAFjsP5HFHMCKPWpkhpvffqnE3Yg6TCSZVY5XhBCNYiAyaUBjYX1riveoVRdXtGaMSu",
  "key21": "2sGyMsemxgRFTdRRGGbr1b9qJoa6nqccAgHvieYj5dGQZYVmvxKY5EX3dbXzex7bX1EWmDPJZacPXsh8kw7q228K",
  "key22": "2UJnw6TBrqworXRS8UdZ2P3Vb13NjBT3D8W5pGDLraRcBxbvpMF1qNJqzVfDZHuuXLL5SSN5qL2Rgu8UvhPdfPsn",
  "key23": "318qY2KkjciiqBQBiGsZA5xfM3EusduA88Y2zQLecqaBrQTzsm8SdpezfFf5h4HJcfwx6Nvs2FuVrHsMenJ9iDj8",
  "key24": "Ytxgy8hggzL635zobp8V2Txnb5gMW4sjEkxP6xAeC3PP9wtwQt2sSDZMtLv1tnzkbohhrBRY95wggi4BSXb5Frz",
  "key25": "43g8ipzm9sfnysx27hnr9PPS7F2g5f3toDX5JZPFT2wU38edNvrFdceES6dRaw7meu1rJoytoTWmWE5VayR5GCnV",
  "key26": "5t44maAiZrDU5HvHtyAL7UUeRTv4TRdFj9WsCraXCFfwcZe7gJFGG86rMGtKKicgRx3uibwqX9F44Y6aAnZr6Whq",
  "key27": "5e9p6d67jnksVdNBJbKbyQXgHKufZBaEvZph6wMpfuErx7uzJ4QDfidbRjo6NBvJh9rDJu5u9yfAZjAa51eymmxd",
  "key28": "q6aGuoL5EU6RCUgLEWdJsd3oZBQJXpZPjoAbCzfqd6uXDsP329pXxGs5seVvczQrCk2uhSG28b4QJCbyShofVQF",
  "key29": "5vPnDamZ6u5LYpw1oKJNPEfJwSdEdNnjANnbwdh1DW39VJXC444NviNxQRWvJbmjDwz1KbCe7CtKBTvXiSssnhrM",
  "key30": "2dDBAZqbZ3eBXamdRk255DE8xZEYqZeMJSiGd9uCyQX1dCbdAFxhjkqSKNf5dYJnPCiYPJXzEq4L5etNUMB3oxuF",
  "key31": "3BmcmPzkvhDmfYcYnh7hgngSQMHxJuCkXNfMQ8ocAGcoDBWCaKPWBDR5gDqpqmrdhm2hoaXWFt5hJCLdvtZkHDqe",
  "key32": "3ioW4YGQE2f9UrP2Xioc4bFyfcYYJts4rHs1X315QeJtKshkkHCNoQSBmebT1kmRBY2nX8RZ2iAQ8gp5CN7T4XAT",
  "key33": "avKq4J2Bf5LS7S6VqhkWgvtwWiLNSGfwtj5nZmTz9z2CNrmJBg4uPJd8YpiiFbaS4xipDLjSatdxazdJvxitesQ",
  "key34": "2E6iwevhz3e3kExACi4ZwXzwaAGvUkGGtQE3hHeZin9DKmvKaun4hvvspgGw9TCuzff8R6kSCFQS6vWMNbQFkrXB",
  "key35": "2CvxnzagbmGJznhYUnNGedVeezxQoVD27brFAjfZvnV9RtgjbAHcQwQXrHKskWCkB7qBsYePV8GiepGzbyyWFCzB",
  "key36": "3sQMkpnXnjxBP1nngXr6wbi6RFZhbRo9JVwLiKX88TE9PMuiMBWRnQZm4x6DNApQfTkFqq3RY4Y7gDYoTTwenfMi",
  "key37": "hQfTyY1jm43UT3EpmJBcJjoj2EXqgz5KJtaVyDvWJwrXuvdmNAyZwvgsALVYCiADA3t5z4kCZQRs23eoby6ecQp",
  "key38": "5tqo54CxV67HCZKLHiBaSuA5HuS1khQCmXcyuArsNNgDGVTV9UB9XVzKebMCjSjkAfruKQFPaZ9BmMxADoRhHyLp",
  "key39": "5f8SBZtN2aR7jUh6m41fCQ8GGKargvBNRreL3kAwrnWJedPcxmbAn8c4mTqg9yCUt4okpb2kqZSRTxqUojHjm65y",
  "key40": "2c3ToTimrHXdJqAQSk5YTzgi7TyqgD6XehPSKVocbi66oX62hfrrKC6GzcmR8rqPGk7pY3jXNrbyU41qLwr2aafC",
  "key41": "29i9dCwUUPD5mGEPFYBtZyyfrERNzjeKNX1SRLhtHUgUJA2AkzMfy5zHqdQrnCRjPYSiAAkbuAVpZyamgwohheH9",
  "key42": "2GN8yzx3TrTrWn4sAnXcRfYim3Pkt8JK4bRDsJA6Kr7yZ8Bvot4ENMm3rH3NjnUdYVXzaihNeQkANeGUJUmYHXXD"
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
