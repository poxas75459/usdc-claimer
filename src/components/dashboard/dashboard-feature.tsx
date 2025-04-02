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
    "272gDChYkhDCX1rL388kbmCUYZ52jR8zNKXekGov4GgwLptSKmtB79EnzdLzk9E422hGmffE1ccpUCBNSWLGxk6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dfBVFsndcyy1uwnJa6b4cmNMiXW3vnPfYvEnrCGEs2kaZFSK1ahYYLzUNh6phQK8ftLNv1KZExfy1UPm9Lb3LZb",
  "key1": "6DewDjXN2qE8xGH4vFMNRbz1QKU2NFcLbYQrne6RCud63nrg6Q6GoL9hFsM9cD2GUd6S3gJaJyL6NuQNRRhS43j",
  "key2": "3bTAU2bFuet4q6mMRx2rXXp7umCJayo2XHWwpgYK79eXiD5zYAmLFeKBGQmfp61ccScC7oRvD7YeaKTQH5SRd8FH",
  "key3": "UZ1NzkNBMPyGkDDxxxGpmySemPsBqLCDoaxnDZBrT3rQJS4se2jF21EYnzsEhVMS61d9iKVpKeX4ayEffAsaikj",
  "key4": "3knFw3qnKubmChjNVsBZ1FkMfo2avmHG83631fjLFHKMDCSr1mdwgUE7ZHsmTgJnFN1j7bQF3VecRMevJczHGbBv",
  "key5": "464NYtsFhWa2BphJQLfje256urVxvvkrVp4NtvaZix9hQ7PGfRhdi7Pf3jo31TSY4YsQfCVHgAGWUe5frt4gKFHq",
  "key6": "3onFdUreyXcW9sfDWAc5YtLD5ZHjAmJVRxAjidVYSfMU86WUhw3k5if6B1yxt3YqTpAZGh9Yjubte2DWGA8sx7BF",
  "key7": "3kW6YcxhmJDaBdpouXhxA1bGjs3vGoxjLAL5RF9Ti1TD9dN1JqrJd7LACi2pZWoydqGmcfg6aTrXXqs5RzpVCvCi",
  "key8": "2nSFDytk2iEPTcLXG8ZdNx6A2vS7hr1N3f6s2K1wvMGKJ8ELuu7F2DJuUPH8DAxzupbK3pdv3q7yAZaVevsgKvM9",
  "key9": "2F9paU8RTzSTeGdY3B7ncXgwNubqonAraAhfZCtJHzQ35hTfZuqZ2u6iwM4baryvrEYrbPaMYEZDLu4SbR7DiCDM",
  "key10": "jErDuoDDUQDvXTA1giiDhEFZuAM1gmpaakdhYJnHRNBKToMY1ve6PguXvi1CRE7Kegw4gvr7CNwsTGR5tE5fdh6",
  "key11": "4UdJnUx2BSkpb7nbGMXGzmKmv5KCXFNgpVu8uK918Z92AVC8ZQH8S3uEhmmnYPtYhsWn6aA1G2pv9euXu1uPFton",
  "key12": "4Mz4QFnRv1orELxxfdq6mwUctbJz4szjo1hZ4mF81yBvgHwHH3pxr24vdR5DcJmmrCcWiRXazR9C2pJg5rNk6QVs",
  "key13": "4Y7uoa97Xaj6bszEu2vtn2s5V5MSun2GRncM6dpVWYVgsJcVeUvEVZdcTuS2dormPAipMjyyyLe5RGnUTwX2zsWA",
  "key14": "4aiWxiNwvDo33SDy1qhHkx9TgUd9aqcFL4aapYhocsQTJm6PFAo9gviAzbsEhrLT4ooCXfR3TviFPt43uGWEyDT3",
  "key15": "2kEPCVUh27k9vwpb9MZBPU1HBDv2DsWsnq391HNY8nUPv5Cx2AJYdaNtBYcnRgK5fZQJEVfqRvrMqAhuU3KTCCr9",
  "key16": "23TxAuiDx9AZHx5iiW1vUJtdtLPz5Dze9cjgzqZHPBtcGhrL3ESxHHnKoGDQge7JJUg2TMAEXyn5vm4PyESQKUxM",
  "key17": "4qzv5x1rRRxWcoezL7FDF91htWi5NdE5Kc1sgp1L2tXuRwnSt8RVVsvVomBzRr1HoqAdoHn7EaNch74WudNaXy8s",
  "key18": "3viqxvaqd8LRkdaSXrjguzrfPfxcJ9K7Z36iHQPkf7jCAf7SoSA7ZnSqvZwVD23QMiCojLt8vzdUSTKMCiccDVEz",
  "key19": "kqkk2E8ZRDH1LAZuRdThC1KfzEJVVnybZK35EFhbXy4bijEB66j1GUrD48tGogz1zU3KDBVzDNxbQksJmLMLPua",
  "key20": "9bSJ6ZLF8esa9DiW1cpRpFixJKrcCvSK5s7wPzjokLfinKJaBDz5Szc7sHf1qvLSZE8ug6ddtgGMEa1CJoH2ANS",
  "key21": "4CDSrNfZer2eQUBYono54SAwYMnooYStEeLJUx3Lvhn6h9cjeAySYLTXffQERWnMfKANF4A69RgLBcX7dMPCof4W",
  "key22": "3e2KjxNxLq8vffD2SXYdwEmUisqHL9yWqWkSPTxLoJdqaSMTYz2uPNTc6kStJJJT5Vbwh8JQmTVWpoHyecvLwq3g",
  "key23": "2QGmjk9Pbc7xzVSLxjGT7zPQYWVDvx1hPqcjSx5qgbmAzfjsBb9otfhCq6MnTiLZGvzm25XhpWE2pWqV8asxF7qZ",
  "key24": "XJ7KVFAVpov9hTPapiFd2Z5aDg5V3QPCTWxbiWHeB5UiiKTC8FMcBNH5dHwXetPVqqNBVu5RQ4pPuwfrX2BNTkK",
  "key25": "64HuovSYLJ1sJWe82DswuxuYEnCrxnzKLqNekQXeujRd5eS6XUR68W31oXoExQnbGNsRAXUWftnQEnochyqUy9DH",
  "key26": "21QBZMuTYASAsyaQUqQDKFNibzSDtSgZjnJ25asVD37dFRsAXLCDz85STp9ZSUowepsSuZNXa4hBYUHe1QLSTtzy",
  "key27": "2eM7yRsLipN55Vcr7QuuDQEzysNoekBGKjxJrAYqY6hHNMFQKBjNeBLXtVJgMKkZ6qZaq3FJEUTvF5Bvcb1f1cLR",
  "key28": "474yDVBRAcJMh3nhUpk2R8UVDjku2pMGjUrFvnQrD4jf2LzqEPdfranorjRzBZBVWYZzB94Dot2E45hRj77fsC4Z",
  "key29": "Boko2pJCwugLyGFiaA7boFkYCcQh7oLcf79YNrwuJHfRqYqz4SW84fBuVYbJmGjs8vKkvQGBvipvDybz2n6sibP",
  "key30": "5Sn9TJZCPsp8ZCWXGcq4NHwExAvwNnGzkQ2V7Qqd55yGVcyJZu3jGUt7BMmuHfzYkyxfaZyqQYbUXHN6aE1e9B88",
  "key31": "34uY7GKfTpEh3PgvG3BGZkXLuaehs737tQ3wzpZNjUsT46LEjN5Qji5LHdxJqCSYQDADuFdE5LAAQ8BtYGBnKhrz",
  "key32": "5GacMUeKw85QXYJbe48UPEhGpbgZsjqJHJyLVuf73FigzyoLo88eLxocCyGFeA9eS3cLc2DSc4Wv8q962R99qCJL",
  "key33": "erBVNVKKdWapzyreb2G3NK3x3krXcbtxWqjirgoTodDcr91jDEv4A3ESM723T5SPPdRR8CiQkmP3dH3dtyKYh3P",
  "key34": "5a7v8ATMNbbwHJK9K2smmi538mxX3RQDyeHdtZ6gxGGP9fKoFP4q5MgNrZ7JV8iS77XnPCGM2u8qhgdiD29hLJJL",
  "key35": "cSZjCXGAY586LNxaqdkmpWbVgs99rBnKzrTGrWuiVeHsUdAm6ZJXHUfyLzuVXd4dFHG2bmuuQVmiEV1r388SwWQ",
  "key36": "R8RrPi6FBrvZvAXvS51PvcApsHzRKJJUPf7Pit5V6WbPMskniTh1RocKyN5fdnCQ9xDWTBv1RnoHuCeGg4YahzN"
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
