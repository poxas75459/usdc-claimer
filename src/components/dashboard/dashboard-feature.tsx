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
    "L239PGaJMqZGuTSp6U9qHqTA4CU7TPRK6wPPesZ7iCqfqPoYifyxWUQCr7nb8hfnhk51WcohjACtopt7irWMpGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35CfpzKNTHLspSB2eE2qdVsU9Xdddj89QBDtRKCMb2wobLZVwRnL16ZSHn3tiERyWfppAkfEE7C5AGi3fniCq2XL",
  "key1": "4w94aiyhubMsCUZs8TjXSMWqztJcC1dWFrA1PSnNkCGLHhrFfSo5VMV8KgLps16kXJNPqbW5f6E7RFti31BCDFZH",
  "key2": "yoB5NUVqYH9kxqQdj1oo77woZqFRWeh4gMZiR1qkywog2u1FPUxic4RQYnRTQf2UfbaLaegNq5cye12dhHFZsGb",
  "key3": "48pJ9BMym7o1VDBHC7i2uDk1iRosiLPzCHrFzXEfsmw6VDVBUEBJ2PVdR5u4ZPkTsPS3CjCSYs2bYXHefFxyctqp",
  "key4": "35VBQo51xRxgDFLETPFic6sD3kgQFEhNqD82TnAUUC9jNBvRDMxZ9sgb7jcXwXPrs4Z6wDqjCTRXDiFmRELQG5fX",
  "key5": "4u4D2eFx4gSeWWAMJfkAqUz9GJa8wK4bZcVjRAcKjwepEyEXLHEvrmAbVfPaSZuawokuBJKCyb5t8G2okJWeVPwh",
  "key6": "39EtrmiHxJWQ4Znja7nbncyxw872nS9EXAoT44CMw1vVJELzWzq4iffRJCLQeJRAg4LE43aziSn4CZy7g8wPAAAF",
  "key7": "5qigeE9A4sR891Kqhn23WNjEm3zTToa6SRnD2aB5myVBPUDULdM7WaauuSY3UPzFWVMr5ncQNud3TeodsAGFP7EK",
  "key8": "63Qh5KcRLqCCxtAwJTeaw3Ld6kNrozPFcqc5vFwbtemsCjocX2bn1hr8uG7rsG1fRW5HyP1QR6qUFSAJJHuH6aBT",
  "key9": "67qCr3N24ToWQxhWY7XGGVxGnfvYQ9P2nSbEnPbNos6ssQdCPToxZN1y9ijxUSgcmdNVBtw5JRhqoQGK6r3cHBeS",
  "key10": "5NGPnNKn5dSyAVmag9VFgBUcjPMvjVLDPLL3FQtjcL97VtqwbkSLpFLzqyzw13uYvsn35EpnJXtUAFEnbXRFQPLK",
  "key11": "3UT3SAvhtgkreXi3QEcfHsC4MghHY3e4K6zHGFfLviAeeg86Eg4xcNTgAokusDdesr4CbFZBgsCjc2H9zJpQKK8f",
  "key12": "WySvmRJWYkRbyRfBMpFt3DwqEgqAzHiK2w8up9F6rGZUjSR1jbeeNbfAkTTNd7kYy8MiKQkdV7PDXpTkpLJKPPx",
  "key13": "4jeCPyambuTYW5da3WaCGnEKXrPPn833xDkQQvJEAzP982FucmebexCKG5nDcNgpNUPUGiJDJS8zsbrfARgVEBte",
  "key14": "3JQCqTc4TwupHREqWedW1EKgnZMyQGJKqcwXbxpwUkcnS7U31rfNVsNswowVQ9C9KxKHjPM6hHMHwWMFXF5pHvGi",
  "key15": "5FuBfB78Y5yPU8rHqHtaA1s84cAEb5HcXZzd7RQ4qzGagw5Phzu5QwY1DSmi8CiqcbJ3erkEB7dyMaPuPgtmRn3i",
  "key16": "4U6fEFMrHnpcf6ZucLHo35tzDrKAwx8LZM7qiJ1WL3aXFpqSG4CcA735uyX9nXLy4chbagk2ruqbkinDzKKAQaPP",
  "key17": "458kvczUsJk47wtngE8RNhKGHmVaQqLiE5UoQeLpSgC5prrXtGXoBeG9VbnttdSQJ4Du1V8UP8246eWTe8hbyZPJ",
  "key18": "2nrTXeAKNHpcz6ceZw9pjdsghsLc9FgNjJgRAVf78pW8hm9J1asm34f23o2E4jtBb3cXFvMFF5y1iRnzVE6nnzbb",
  "key19": "2LK39ZMXC7pg9EKphsSJ6pBEvFfgYQK1vpCRkK1aSn9dprrHdhst83emQg5wAWcmV1gV1JM2wJkVeMun9WBL9Y88",
  "key20": "56yHwEfhWfY688HT65ScdgYUS434M5n3KzQcJKcVe9jW3QuRr1TfWBssByqiprC8MPJzTuZTwTwb6eu5RDVjL7oU",
  "key21": "3QaEAKzNUqhbXwmA3zTxzNdisvCZ2p8LGaZQaf4MjyREd9n8jQeh2QFXde6J1q9RstBn9kguH8brC9W6Ho5xgD9P",
  "key22": "53h9stswLuiaSDy8CcaKyP2cqZrtro74vamBS77BVJkp4xy85ewXGDUooRo7zYpgn1uHWWbS7qpYryhaBeUy2TN1",
  "key23": "2JmQjycGtmt2Go9VeW49G78dUvbdbwExLMtvmMZgRxjQrgNkn1pgWEq4ev5TYWQ1Tn5FjtkPieKy2t6cG7Z8GrMn",
  "key24": "4Z2VAvjTaFgqMNJDN6ywbg4EH2HziGGkR78whJjf9BmgHtS9jGK3WXvPfEd4CQrha2yYxUVmZz9vnbDXz34PM6qr",
  "key25": "3WeXG615h9iLUDy1V5rbmAVYZSrRoEBsVLnCZgps8egm6gzrmjYW2KAwkEwgcqpm1SbZP3e1uc9N9UyencTj9wpc",
  "key26": "4S4pki9uGmruCuf7EXwvYRZRrpyrzbNAZ2vTG96FDsNaNxYtpKSmsPLwxEmqAzkZbnnEELZyrCvRfw1ivMHQKXeB",
  "key27": "BPJyfHGGdpMPNfgcWVrUUwj4CKXWTiZ4Zz6h8ExexrfwbiMAYUjp8LBSYg3yHWJoTRkfV6CKgHRNog8kvVjZwki",
  "key28": "5aiVKoGcDJftv3V8vDN7VTzc2yPtqdvgRJ3KJorHHubwChvD37CR1qwteb69PucjtbsjnRGorkLoN4JkfindB9ZV",
  "key29": "rKRdegCnzwp1gU8JCA6Q3EM5uxWDsDKcqgeT1oMGkLYzrxY3CqD8ji9MM2ewWdCEP6hahz2FCrNTwzwYZNE7xuC",
  "key30": "7tFAbZTDrbDUUPQVCtAeaUSuYmMef2jGorffzYfAe7vg8g6zCyxANY2n4N5sGWYAoAG8oMsSNSoRJm5uPV3ffeQ",
  "key31": "3UbdfLkmsPFE28CwBKjS8AXZWSzUjg5dTcga5nCcL3ecJnHHWEUipUZ5ZmuehVQ7noWfFP8NyxGgQpj8DC77AmUa",
  "key32": "51h8C9MvKQRqCyKRhxpmNsS2tJ88owVTiKMsnq7sEFKzTjEZ1soFoitfKFQpmXz8LgWqmQFwpBLtf4y5wXEURt8d",
  "key33": "2D92Jc3misUUGqY2eyeaRorG2eueZxUBCc7y6Adgc7AZvQE1YB4V2bkDYUTwSYBsRnQh7nSg6GGiQSRCchbsv2YT",
  "key34": "816w7etcFMXfGTKvxbhSQxLgLwFNcwq8n5b933SWa39JXE13dVYUWBsUtvek5HWACvjY8Tk5hVhPhPH3Qk6YAB5",
  "key35": "32A8HmtVmdw6t1uyEWyuzujbBqc6mgEugB8AbfaQ1SVSf34PiBYr558gmMEzscHYiFoiLEDQ2q5LRhETNhbnMtws",
  "key36": "53UN95p3defQt1E9vjazZChMoTf9F816gWe2Ee4bZvtALWBdpBXdpsfyZ8z7raebjA2KQSGdXL66A9Y7JQt6BfoH",
  "key37": "32wpS1fC1QTrQgpkJa5itHyn1z6LpHfrzS8RdfEyFzU6UYFzzQ2twj7mydLfhbCT7bEj4AMW4AVa7oXgjquWBhJd"
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
