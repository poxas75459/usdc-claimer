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
    "5zn55QCGWrW2k6er2xCWzBbGsepzaRTdfgcxjVLTcnZsQ6P5ghVKFtYwHvZXMLcfmUTFQiKLv9BWMzDuBSPwQ7yQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QX34SeF2GoQU9PqCNSRpK5Trm79GYzKfK12LKVwNiSKX5At3Lp6JCNjrhtCf2QTzbKGt2msW4sfVHNHr6sv4bZC",
  "key1": "3JGu2GaNrmdfo9Gbv21sygsoxEH3DZMtzr4QJJVUfPdH18ce92V36opfFsvu4qM93vBJPo1zVLtcUQpyzcUFDKxm",
  "key2": "5Um2usLaYwFqPPtedztBSAMFdyxEuVadZ3PjyMfazXo9D9V8P1f92LsMo5iYLGNxiehvDo7SBwouQorb6jmY34L3",
  "key3": "zqieVTJNLtg4etN7D56H6i2JN5Njzun93jbsNReTjNhZYfMNTC7XR5j3TFwd4DJ3Wn1hS6uvkJNLEcDvdVPVBzG",
  "key4": "4Z2Rhz72QupggWTp6DUoKHjvG6F7mp2atGhoaHrGgHGd45Jip3gpvYUzXzQ665F68sBC5avoqum5mSf5Cocwmusk",
  "key5": "jvKLeZxw93z5YRacRQ7YSqatoMfhmAbkr2LnfzPHoLQRzgkkDDNCySCiRkWTYvb1QnENfRLuRJ3sVbXSwk8SQGh",
  "key6": "45Wy2En6LZoz1tZrRHwRLxcMsCSFJBcgq49MbXUqCKMsKnNHkqukbSgXAhvUeBKKEkMZtTRRjLkQPp9pb8Gtecs5",
  "key7": "5xEWghgvj6UugL63eWQjxZ18opyCGVXpF3RKUHoYUvsKCqixnuhbNxEZBbvYWXp27Ydr43GhKrWYJD3WLNYXeLb4",
  "key8": "5JXpaWMx3Biv53HjBZ1a7SskDBD9MUPxeYyAeT4j78NaK1nJpy1sxbsewYNK6YRUUDUpHHcZJjGFrKXMuzmxeFHD",
  "key9": "3wpxed1CN8FaHAEWVZpnu21KkA2MxayGhoR5xVAUECmDpzVpD3VYTfwbJ9jb8QWjkgqU1CHZF9h9aMet2XM4Wxx3",
  "key10": "3zSLbZkHARJtLcxXstY6AH9LbzCCurM4cs21wtU1LxMB611K5dRF5DJS5RoUWgPKdYfoRrxXiivREUzoSxFXf4vW",
  "key11": "4vaD6dsY26SYrS7CSobzaHrVoyVn1bewHVC8bkDUJykGNUYf1FAjyKBJpWzLS37PFT76mvVkS5HBPKA2dainrALS",
  "key12": "vb7oPLHDoLPe3chxDHXY1UsbAua8etjBMEqBJNgMPcURyW7Z6DTK9gJ5F3NkkgLn69bsEsqhp6Ryu615pD97nmC",
  "key13": "4n8513inuqFoz2keQWMFZb3H7rw8ZuxELbGBJPAGsnaaqLHYC7tERgsZwsT9XRbuTz3o1KQBjWHBFkou44iSBpL7",
  "key14": "5MUev7xA8SoE1XSHsYp6xES4GLgGAtDs48r7wNmsBZEifo5dx62vbcsRW3c4UYMf4hkypFFCeZzKRhnBhn7Njfya",
  "key15": "3vxBGH1DDZX74crgYP4og2wwberZCgkzMgGrxEYGR6fiLvo4eDTFACumXyqy9TrYB78pShVjEW1eJq2MiwyvxRcz",
  "key16": "4pytkibK7sv39SP84iNZqtsQnftuF1vepk8hVjsw8EQHheZxdird2RTnj8cMndrx4cf2ztBrVJK5YkkaLt5YXag4",
  "key17": "dRGWhTnsQoxNbWxd5JP7yiSYHLbdFH1oBEVJoGUtQVw67hH8RGW8NDqnNpJeJPo3uTZNXMgTnU8jfYzAj9j7BRh",
  "key18": "PNJDFDg9H1QTdaDHGtKouvSqxKpGM5PPNE871F2NGE2uH6LNdUiE9DwQcSTrZKtoKr6wGkuWgPMZWSjGn3EFo2f",
  "key19": "4U2uuyhQzt2URrWuw8LhGk6kq1GMnq8ymam4wAxa1MQUKeuKByVjSaqLSjmn66fRXGH38r7ejq28bq81kpcQTFec",
  "key20": "58LiCqHeP7uSSgfHDUAhAYfpppRiYbFPvVNTpsbSAQLNEfqHqRXjfMrL4TS9EK3CJuhApuKDgRKf5dsUyzhfxpTj",
  "key21": "pzEXqEzqNQi7g1hskJrjCFJpEMWzzDRB6EPhTiBTKTvCXJZv7VTR2Eqx5BtaAhHDpSv4wJu5m1GTMf5nTQ4Qo21",
  "key22": "uQ5t3PccZsPTAzyUSEQb1h714FsK1cB2Vhq1S89KYUuRFaD2jVCgXEvNCb9gaC4Tc5NsAZRij4i1ZbDhzFMT8H6",
  "key23": "2fw2qu5f2KUGhvDs1ban3X1mrbZoPoWHyTggHZHe9p47roHF3V2qtd1DmNwFbYa9WrUJgWevDRzDHkcRCqegLGCW",
  "key24": "CdtwittgozFiMXpqXkRZoLz2kNdyBtp2S9kJHtBU4VKLwSSvFoK7AjfE6AvakK4NEBGjH2vdmQXY1tuCKyetpVi",
  "key25": "2vZVe38ZQfuJUSWX3xnTD5BTU7YQEiVs6rwTcUdNWHwLHUDVVjpa1XJjK8egeVbh3Bj2xT5Y8N15BkYSCZhoz97a",
  "key26": "3i5BPRsFfH65wX1zrXAp1pqVBHPsRzckghBJZXZq57xuvUpZWnrvnMQ3c9kXm7e9pNk99JMM7iqu553W1g5ZQ3W9",
  "key27": "44jZ77kZPUeKfcJKhSrnNfNWAg5UG7ed5up3Nx2NvRQweZvnZpkwKPTLD5nfbPahiUjJs8uZYuT1udRKz9xZMfyo",
  "key28": "5QHMjFYxowMt27yEuGVKtAf9KpTs58E2qkv4Rx7zHWYfP9TFT8ijLpjgxViNjB1Mr2BurwvFmCGD7k5eQGBko8HB",
  "key29": "2e7RNic4p9kjXvfG6mkoPumdhN1EFeEbavGGq1Fmi42g3FzYawVQ5tATm44m5ghBaZCKu94dfeskJJs3mk6yH9a9",
  "key30": "3xHciLpNNhnEMFEwDZpGnSnTBcDmpAp9FUygG4bAz3bxZtRWMmKA9rhY2dFFEV2P3EKUHSpQKmQBSnLb3CwSXYH",
  "key31": "2dt2t4VtjLurSQDChdCLgv9mEQMYTRq3sF5rPABruRnayV5xPwsT8rjKXSV8mYf5giTSJfqgjn3qat3wPfjwBLgE",
  "key32": "43fj4EqzbMVCUkDfr8F7pYXBUJ4fbegR8pRzeSA5haG2G2gGQ9jnFMw3LgVH4A9oNfKRzXWfr5DrsxpFWHg6Mkz2",
  "key33": "5XU6jrWuDSjkPe9v31pm8qhiUtJoNsFsGMZ9qD4xkcT7nW5XddJMNPonAnEikcSGMnmbv2seBWSMCVmD2D8QCYnp",
  "key34": "2FAu3TZ8zyXTXsM7wi2trB7Aa8Zt6oUcWNeCFBLszhn2zXKPSwtvCvxZGdXpiPbHmNCuAXaTmTZCVwnX6qLKQENZ",
  "key35": "5tYawwfro26ertKoEYrAr5RX5J5T6qyE8CqqzqtMHzg4ZjNf1FyQinsw79QHVcGLfcfr5QmCDsRcDDsnKgrMyhd8",
  "key36": "4pJhyqAbXMcFb4xWWLThTLxRuRDwGk1Cty1xBd77ZgaECa6gknaV9GXmFAnPnTS94EEXvFbYev1qLWagSLE4naAL",
  "key37": "2L5X3hKYqD5fyky9Xw2uF2QaLsmy9aBAgXqR1A5t84v7Y1aiFaGDNLK8t5oCSmNaXUv7vK6UaDF2mTso11dJCU76",
  "key38": "3Fa2nJ3H5gX5NkwaWXjsN2ksBgZSxvg6etdsMt8tt4Z2Mm95fgzPrmqAWzsvhzLt68Xyxo1ahEcAq6zktqRr2gmH",
  "key39": "2NDmidTHsj9JSWVq9sx5Wi7EJU4hefu5ALAmydLd5QQRR6hg9BNVBZJkgX5UaA7rMbyK6jMQwYLS7tNyxpMiTDPF",
  "key40": "4sAUFGa9FAD18ZDeKboCjFAmpNe6jLGrpDssuPfksBTpkYag4NSCQmw73rhGmBCKZWSHcLZkSRqoUVGje6z6fKm9",
  "key41": "afQayTD5b9RfZR6oEbW7gomXPkhym91LV27nSmXM7bEb7knLkock44G3eDSva7BMvSYkLi5UkgEE4pJDV5XqdxB",
  "key42": "5d5kvdaNpQqT2HC69NvLs389Ww3sngZWHUHJAK6ygsHbG5L7oVY4r845Xr47ybsi2fyS8SBM2KZoFPYVUfQ815qD",
  "key43": "5iESLDr3hX6FiinrDAcCWHhnnD71Jowzozh8hN2tEDus2gsDRG9rBKzLoeRxYw88VE7n76EEwFsu9tRRe5kBCjSm",
  "key44": "5pPcsDCKUnecoCJwDN9Du6bpg78smUChnP4H2NMKZm5j6ojbE7gH5YNG3beQKroYGUPdv1yNc3U2WZH4x3JvArun",
  "key45": "5RZqrS34GhHfeWqfzwz3NsMPziKSqhqSnr9rHS3QJwbihZvPSqtGNY8qFNQ4mzmqk8yvhj1vAcRSNSf6g6jcSPD2"
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
