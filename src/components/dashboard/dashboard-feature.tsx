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
    "2qs2kdN4FKBTtRfznEVe4xbhVFkLAydLp8cxaK3NseDKvTENqZ1TcB6pUTtH4dwp3GRqGkEAcwavEzA2493sjyTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j9eBTZRTcTAtPuZCyo6WawrTcx5Xuc6puGmcCBj9i7q5ZhSrYMd6gRarfyA9SDiENqfAUzdmnwgnW7GWzLG6kBg",
  "key1": "46F14Mmzuouh7yRtY2vzWQY6sw9D2VfFLX5kQkHKVKsWjJu7ZMyeNXiftawQDgYooi8HQhkK5bVEHJhMumathSZg",
  "key2": "3y2C2yDuqvppmpW82UqmDAT9WuhC1HRLFk6m2kypgf9TXoFx6AXrmsjS5NeGk78Nx5cUtTPtsugZvphFNTgPDDCv",
  "key3": "25p6SMUrcA2BPHuBCiH2sKXFfFFMRZrmNTLfy7qkSfbbEV8QbVBb6V6n9UE3VrxPrTU5Xte5zeF3kfiP43n3u3xc",
  "key4": "4ujd2RwXvgpkH2Qob2FfNoaP6BmHurhJgVXeJc9LwynRtxGB7eKmnC8LVMWXHxi4JJj4KNMpCsjeTupw1ymUEgrP",
  "key5": "4F75fBbPmt5kfQ4hhVyjQJQ7ZH4srUCGcB59Mvue4oQoaQqLYyqZUd4kx9yRKo2E8rGEgXNJuskP8vZ4TPnmvbxj",
  "key6": "5TQqujMYrreAKcBtWnJkJG6KCiDtv3rhw7Lp73bNGwn9j83DC2Z3Ud4UkbbQTiFK1WkMoirJ1r23Ndyn5yFpxCuE",
  "key7": "4NwHKJyHrfEP1qhUtfqGc5vm258aupFUUzFnFAj6L6UzFGxtTjXC9Eko38BPL7E5esaQW6iJrHYU7RTDJasGBwFt",
  "key8": "4VGduQu4gfsL5g14nF6VVHkdtipxfXY7M5MBQdPBeCabgjfvjwkXJxAjKNM15jT1NFqqfrhccfZvUg8WxfLpVnBM",
  "key9": "66xTUfXcUM8wP9cHptPSYKTLuTX3zAUpDgkkxZXwDiKvXM3FKp7W1YDPc7faJBKpDqiReUNsG9HXq1LK7aym9cc7",
  "key10": "3yuWm4QcgDC3khJqPgP84ivXAePfEnBoExVnKCnbNpUMQrVXBErbaKdqXXa5iPGH1MpL8jV8DV11mgRAFcVtHL3C",
  "key11": "2VV9YchwKCGYafaYgNEKa9imTdM1LAiHadHrKG983sSDa42u3hYCv1hjWEVNb9ws3LBQNPNfmCYSiNcuphpZxXoq",
  "key12": "4fXUY6sUmYDvxcasyzAhLiH5czSR2TUmGz4PRY8gVxg719Qt4evkQ9o4jy3UFhzLvwC748Sd7Xt7TBGYLcSjQqx3",
  "key13": "5npeWg85sFTD6TN75XFz1Dr4xnPbUKqGFhox6JugnhjgJHJ2Xt9od9Z6yoDov6ta71ZQAG4qMi8uxPa17dECSuP8",
  "key14": "4bPDsgUzHwyg2MHZ5VU4LVDKatRWrNNyBX2PdaAi4m44szvwDp76NCwQQBj15ZuvuGMgx2A6f9BSsQvKdVFYEF3x",
  "key15": "35YG7DaMrpDjq8GJErK6NWTBpqkNejnENuFguK4Jbi7upRwRz8P2zTJJDEa76YSXcLcwSaZ8fvDrHmfgm8hhTdtx",
  "key16": "64E4zCb2fhf7DGkUjQMj2ceqP6tYauTAQgiFAT9Sc6dDXtThrBBbkZfZY2yrnNYVF5czHV3sZERMhzp3KhcAwD4E",
  "key17": "zPkUTTrHDdEoQJMBZgvenWd4Dgy59M5LvSerM8yzg96Ef9dY844P1vnzsUnAGyb5pWuB5NZNekriMuGphA48QSY",
  "key18": "5Nha6k8GiLQ575mTiBGCTEhhAobdhFUk1tNte7EpsEth3HtYbkDFyHgNhMhMwCqRfGtyU5MY7JifBjdH4SxqMjcN",
  "key19": "3mDSU2HdHPNqYG2FCaWPz6kDDhjRUgVshsMnLP3d9HA59swhZtdz3jY7BCNcxopw3uqsaGwLGkTrQhHvj34QMdi1",
  "key20": "2syASH4Y8MgKivT3jEmLFFgHRi5Yegfzv81MzxUvr44fjv4r2hDDphuMhzE9zyz2SDbdtYzF8aDyedWGMX74UnzE",
  "key21": "5atLmwmpJvNCJZQHibRmsBv6Zgzk7Daky4MeuzY5abXPxfqHLXqmMnXtSb1DcXWSMo7qdnzkUBFjFxGvUhLeEVLC",
  "key22": "hNkE1iG1wMiRRS7rmg1oBRsGBHNwHtjCrmrpdir2tZdX8GxiKTpKkNqhPDhubA9pNQ4H6M1pRCY7h45EZtF2mXh",
  "key23": "533gCJiQQZfVv4gFX75xHggXf8QPcygFb7BWCPBjdA2CpicvvnUJVDQHNTTRazBignZu4ixRCiEzB5iJjEyWvxer",
  "key24": "55id3gWCKvxGXNngS7sHLL41pUwsCkauAhhxY3GTghQciZzcNRPqMkbBg9RcMMiUfdFQn7yo5VEwutFSBToF4qN7",
  "key25": "278zrrdbFkVDbp9z77qEP1fjeK1PN8jNVLPbmjei7TXxw5RVsCKMC2pn56CwXLiF2J1RAepKDMTp7fq71Da7xaan",
  "key26": "2LizaXsjTfgHS8PoPRUB3iyKtxLgjJTngYxwk1wKdZghvTySEkaPcYiyGc7sSYZe9ej4VC5iqHxk1nTVuoJNqwhz",
  "key27": "3QUUza99Exq5AEgJ52A4R5MUjVwommc47nbyzZLCATMqR2VR9sngDkXD178A7AYiG3eGAXaBZiVMJ1jYN6rbFjE1",
  "key28": "2i6yeEQUXLkfPqHtVZwvn13xHfGKEC9fC7BtuBjw5H9nRC23oVXuyZBfXAQFYxPB3pddaV26Pk7tiTrgCBxk9Xws",
  "key29": "3h3npFYn4qyKiAa75FLRZ5sjiMa6T2JnEcwTGqHUUheRag7g2ewS5cNe6AtS4dZSxAfCSW4sJGNrMJw8neA1Ph45",
  "key30": "4Am1xSZ65KxWbEGLHZbQs4n8QURe2qTVZ67rUWUfpMqvu97sCoAAHdjngKCGvBhkHhPqdgiyUVSWPjyyv9PCr3q9",
  "key31": "4UGRUMawLzGJfZcPhCmgmpoi982hoNTLrPkGMznvpHDmxZnbFuPSSbngiPWhgWmLEcGaLPG62tLRZmVBo7ndaeR1",
  "key32": "4o5TujuqpYUQjrUR2GFrz9KzzU15xN1EQKp1aFqVjbRVxuGgrorQ6QdUv8GvgifXmSZE13p8khaAvzJgk1gHo4ym",
  "key33": "3FAwsoHrhg819Y4mYYt32pNs1jNV7FcKLxUJLmhkyrhR5mKKH8udSBqstq4o2NsoMEfqhXqMYvYGdhUnQcXnn2NM",
  "key34": "4EEMFboAx2mytkmSLumcHz2b8Tk29AXDEqCDfvW7CvGWiv3PLZYMaRDcbs3v1vzyCUD7EU2hRkArS4SNr1KoQFuB",
  "key35": "4Z1CKZFF7KJcb6SW22Nt8Vudkoa8QivmKYZ2Q4oWdD6XzGUiKdfRRjPvVJGNkUAGvX6cQWoSmQqPsxaSWaFDg6Kr",
  "key36": "5wqGPC54u2hzrj1SNhXRPtuPRuGh2wAyiVvHinWQkWzyGqLwwuB7Vvd88dvpNm91ABSFoARV33jaruYRoiZ4PbB",
  "key37": "2pvU57c1wGvLJJmExQvaqbFeACe8GH4Ld3L5TDGwpYQ1kAktW3nbR1TZGFpUsaBYpTcsE4Ty3sDNSNFbZJtC63PU",
  "key38": "571WJyYV7nKHQui6NBLKughuke62iH5iZiDqmZ1DGCQrpsW5voHvJYm7jm4hhhg4KfbxypuMTMYYfGSFanQzCCq2",
  "key39": "1VH5CByRZPzqPozzrvGZEHsaXcDRX1RBEzGP4eWaGkGNWpDqNVBMi6rw369UyCZdeRS66WRUHJqkb5eNurZzhpT",
  "key40": "2zFzJbrDQisPjX6Ez6tSwakyud8z5MA2kdZajx1zV6ZBL6riCpJqDNAC83v2wtEZ9gj78wm5QauHnquY2rGkA2th",
  "key41": "4KMwCP5HhotB1E3kr7mNbJquXTsKbgxCbpJ2yZ784wjDLbR9c5TTJxxVQzjx7uJScMyuANnqHJmrRCyykBgyvWMD",
  "key42": "xMwJG7uFwWndeD7eqaX5mrE8FVyebLuFnF1es23MjvFAPENaGBYrCBMywiastG1H8FSqMMbfeW1mw4ntXJjiDNe"
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
