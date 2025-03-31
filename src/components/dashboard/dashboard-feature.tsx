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
    "5GJEppBKWsSu2r4AsCpP7foozJdDVgAScQg37ruGSau4X6m4gJGz9HLcgFWwJLR2PJ2YoEcfPDru6mvHMLT2UQDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qRkZTN1MsLmL8qjzVAzcTf51RSDz33ZXb32v2KVde1QbUBQbCm25zpxzzNMBsaJaqow4N9cNExCtmVAsTGKvtqc",
  "key1": "4m9FqvrmCwjFBU16j8jLkq9mQxsRLtNFBQqzsQbhAFmiGRhb7KMaSZFpafc3xRV2hCL7LWCb58txRejv4qhDcqEa",
  "key2": "5Dpq94GmEJhqjKHVfWZeQpTcYbifxxdiCFRLbiSa4B33RaD9eHmWKEs99sytprpLVDfu8MpsjuPKxGAMpa5V5hop",
  "key3": "37nCrXUrx72cRfoPBKSMVebhqcVfsekXXDfA2ccw5JxBcsXudw92zL9JhSxiAe8CBdp8nBdK3GUTQYYL1gSHDnv6",
  "key4": "65nPq2v7uF8iPPqpCF4k2MVjqj75r7bRGf46bjjH9LzyprGRWmDFnUAdzQ9yjfCNq2e5bepfKKTZgaZkY9GEugD6",
  "key5": "4fRGgdSZ3R41thFR21dP1X4iWWfbxa5LdiaicdN1s93B6CFDJG9vP3pmsTk8ghhr3yCDYePaFsJzC1sj4NUAa5py",
  "key6": "57pnnAyvbUKZE6c2zxGfSxYkLVG9nEkkhGvyT8vt2xrxrtViKzW1KQHKZLf71ZEYfhAGt8SNHy9YTfL4GvbWSJj2",
  "key7": "AGBqy32nFpns15CknFv4VQa7nWzY7TuJw1m9yfMFEGNsb284voPKLEEdpoyn7CHU6ZDDuk32HzF3hTYsEK1FSVq",
  "key8": "2sSrZwx8RiN35wRtUCCiXzUbxPYqDvT4e43hMWrBfhKrADQUM89JacRCGDriRp86HvLZmPLV6v7c5UHzBk5j8J44",
  "key9": "25dHtKweACDFZKh1qK72RFuE22rL2iuN3p5bEV6pEohoPMzHchfxBd1fQ2W1nF4vc1zvWVMUG5UciKLmr4omYGtK",
  "key10": "2mHZ8jdqJtymgc7u9wJ1YwPvExcfM4cnp3W9QL6tLmevYHmLYabqbSFkAoXF2BcjYrSV392s3rfoosx6uySbcrvF",
  "key11": "65aBf4e4oMy42dUG6ioSxfSEePDJAs55ErNVMqZZ63qtZwnub1J8boVfjfxn9Fr9U78MuMQ52qpBpDRPAm3uToLv",
  "key12": "9KJaKkXUQ8kDGrLZ4D1ubRR4D3yg4cujjYi2jS1CbeR3e84iUPkHPkwcQCskeNpt2ToxZPR7XfAxG9vnsPEbDH1",
  "key13": "3zUeyf1D6zTCaHviH7nYj9wnbKA8FAvMLicnkrCTuyNAw2pCV2ymSSk9kvr7CaUiXuQNq9WMgRcHyVPES7K5U8n1",
  "key14": "5X6z7nur3K8q51im3EExJVyfQ91i5DuN6YpG7MatizcihJnANEjSc5AvtMpz3DzjD2yTW6fHT1hDQ8wEVEGLjkw5",
  "key15": "278Nk1JTtDAesXZEj5VDJFqKGASE1ChnfeHs6yPRtijhTBH1csLVmuLzGoopnFSKBDBd1hYYk1tZQopbYdLuvATM",
  "key16": "4Cbg6PNEdWDnFMd93T2gVtqLS3CXXxT15JU4HpAxpRVMBeujUPxJBwiWx687QpqZd4wdWQyberrk4tNi9L7F61BL",
  "key17": "3YravAYtkrpJ4tkEhKEXUrmFdd21DabrEcPB8sfSS5yLX8wRPkkkWPguXodG8UJpQ8kbJJaSkQvTtabPU7TYizPM",
  "key18": "5nxbf9BToj5CQZbRbf36Q5AgGcvRRN5PmnneEGAx1nPaWLMBhNhRrDDiTui1J5CmgzqctdtvqnugmtQ3FAgNa6AY",
  "key19": "2WGcrczkVHsqCGWbC9sUdrzo2ZZwkXc8LV5Q5Vv1n3Mxh8Uaer7A5m4GGpurtj1ofvhBB6pBDcN3QKcGxcaAqRQo",
  "key20": "4nJcC3Q6ZjM5iv23APfa6pH5pF3Jj7Jx32YYcLVBmtXVMRGViQKhuEJZfwgmXFjXjVyGLDEscTCZ2CpyCcQqnoDi",
  "key21": "2FdBRkKMLoDvvBAToegziMSUSYpLUSdjHbvpvVQRDqfrYasVBauCF3fYpAA8cpZe4HWJswTumyuzT5K6v9qxUG1d",
  "key22": "5gHeAxfX7E3bCBkNCyASAXS69SyxtbSWNeK3CRQEK5GFVK2QKBddmrhJxPCLrL5rWS46Av9h8Jf8wHm5gWdP2mxH",
  "key23": "49vUf1bD8NTNnCgsAaDpLr9URm9EuXUyxjnWMhs24A42nLcdcYTcNKd16v7YHm5548MugUHbRk5cb25FRaTjN8Xo",
  "key24": "2PwrLg7LSf6ipUB4ppo78e7zAR5tZq5LFU3qpt29a7Y1hSCZDthx7uppU8iazGv6mtmaFQP8ZicyaSj6fbUPLFsk",
  "key25": "XJRAWvpy5EiowAFyYetvEeRsGvLBLXBYtezDJYFTMZRK8GGx89Ls81BW5SczqDPocU9G3Emcv5BDTZW6Nje4xqe",
  "key26": "3isqeDQY72iR2btKEg8pn1XDJzaXNf2M5ZmQz1Qp66p9hNrwLW4eTazfiDM5wPkDmTuDG5S1GfySujxtkCvaW86r",
  "key27": "3JSNz74rKR4bjvh4Qs2iNBQD3RF18SRqGsMFrmwKmqdGvJq5FVm5iJJfSa2gMFBU7DwyKjutui5B5P7Jnd74oAd6",
  "key28": "4eECNUCXqRAiVscxmcTD2WrT9NFrHLEDJfXECQW4TUV39RQJaLKzMy2wLwZ7hPV7yorKp9wZcauRKmn1mBpNyLej",
  "key29": "4XnGgkPXHhjEpmCvBSGDDhz2ki7tttNMzHxPcoRo21G2dC14kU6gRFUBxBfqkiMN35QEmwXJXjmxPnZ2Aq4MKKL3",
  "key30": "AqkLPsFmvtPSNCijcZgnkVy6KkpSntSXwiNpoKRGeUnWBPLeBKQLre9SaozPfuDc3HvpmFy9fFSnWYeFZj9ousE",
  "key31": "QsjAabskkkJsmcdZNvZhn9fTwnkcuqdEDHtM53BeL9avKVUeves9b9gXdNH6eqmGawUUaeh3HXWAtpe3owG79GE",
  "key32": "2MHtTkhDr33xWKTZ1cSc4tdXxgNfuiHQHxLUWoeckxvdL94irGCopuqfWvztSTacuw8Tuhry9JZB8Wz4KFwHNoh4",
  "key33": "3KCjMh9LW9ZZmfxEpG8tBBb2cEQyUj3rxTVJutDPWrKM333vN3HGc9F6sfzVSK7nMV53JdVjxvqpQv1XZ8LEqPWF",
  "key34": "2sXv2LoQUuJc4ko22rD15ygGxpc4ybAcPF3Npme49npim4sqPg82XkVAiLEPCvcurS9nPBYiamHKNA82VgRScU24",
  "key35": "49ZWwYp2qztGA4UbEmWDD9JoXdS4oAXcHMHaCf6JcLu95aGZXUTwsgRVxna6spT2cyndzVsKXi1ip6Doc7CQPK3v"
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
