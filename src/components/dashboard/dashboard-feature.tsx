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
    "57BB8JFzv2REnxkJrDuvC8HcyTeYCv7PVht98k1iU32CWe2jCBDuKNh3A18K8dCuMSFGLUQDVXMNyHjAe7Lvs1v2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8XmexcCeGYgfZSwwYK2MA2MKvYEj69syQvHuAKVFVo265hDLMFPFfpz64iY4dLNq3Qo4WgnvuB7Src1sFbWr2xr",
  "key1": "4T7F6vNQY9paEBg1w4CT2ju6ixR2icUonY6Pf6o43Zy6kF53aaU7cY3UZyEETvyErsizmAYzUFR6KDx5uyBD3vyb",
  "key2": "4R5nTzAHsiZBhDGUCzZtvv9zK6LxRDLiP7tPwbyxduYE6b9kknRvWueGHFe4hoX5UeeKHznyvS6CpQDoLc9Hh95F",
  "key3": "4TXsNmBxf7Q75JWd7Mth9DYdCNfVGG4rfp3kcxvFCy5VxCREfzKjwaHmLAznPh6JGYLRNtrKo6xEHKCFK2uNv6y4",
  "key4": "g6e8bR7AHHRHVfwc5ZTL1kU6E7ovfpT5YoGdtefo663h7kpibRMjyn1ooJENanSsVH3AdiX3wpNVqvLV3b5ghBR",
  "key5": "2WXnCN8mRzz7PjjS4c2P31k1LxmdNiTSFgk5TxbUV9thSiNGvb9WhjprTcS93ksB9axTPbWuJ9eTGmXaiD4tDn1g",
  "key6": "63pq6XaWDa4DuUVESzGCoGimdkVm2KQ5F5yqJPqXkxzmUz5Ssi8op9pPJP3MYVNYHWg5WFWHfbAmyvjoJnwmnzRo",
  "key7": "j83fFfYPYxt8uyJ3sSGhXDfCVwtRQNhAe9p8JE19P7qbxyHtCvWVYSkYm5i8usQbhi3cN8XSwPRdX81DZkvBAQW",
  "key8": "3yuadpogboTrDTdKeuW5G6Ps9RLCHepzJceu3akYWetn3XMdP8SmvMs7MqAdAsQPDrGjjKRcgiSWbh7CTwEpzTb2",
  "key9": "4KA6KMSbJssmg7NjJHUCqSjp13wdi2pXGsCoUsBifibSf4msFQ5sonANVyx7CpCUedC3BYzDYVtzU8c2yPFNB6bT",
  "key10": "uSxVCi7ZsSzVmMhDzDDKFbdCvHBFievZviVadfGoRQNE4xDwwXvbRb11QzwH2E1kZ6zGGnmMg31P7Dbger8DFKJ",
  "key11": "21EPsLBtr8xcYNMVUh4KADezpyU71eG5hnxyS1ujpNSh2VhCirQMCsXqjZzbpxkuALenyEJCWMHbmHXLNMbpGPmD",
  "key12": "63LBszN6oZ8cDPkbARSX76fbTj3XoZ35fpPTWJBDYH4rVSR3Bx3CpagDyqm8TnjjPDzhmfki5adViqjRs4NpWpDQ",
  "key13": "5EWpsfT4xAgkve26jn9fMDx8aVWTxmneDk6mKp1ddRVZwa9VRvKtTwdmcX4PJ1UNbdzbaLw18JgQerfHVqAEXa99",
  "key14": "5XAYFKc9VCWjVnj7h1EQ9c4Yqtyk7MKPTM4yPZjuTFdZV9ztakSZaMmk9y5XJRg6WpiwpqiyxwF53KsMAngib6nx",
  "key15": "4ohtPPZUomimsFaecKyTugZbFAp824DLHSggueM7MfTVrAWRaZ4WrGjctao4L9bM8sohRwFwBwTuHRpXJcdmVAqq",
  "key16": "2msJQkDdSptGuoqtgkuYXk1wmXFADB95J3JfBzCtrz5HXD9vvhZv1MdN8q3oNNRr8P1TUwLFr9oME7tWkRhFrbUz",
  "key17": "3uBwM2er7BUHVyzvsVrydMz8Yy6tSd6WBha4N1tVDdWdoa49emnKcJh2g2r1m4Qjnrq3vmqCnPj4z998Lj1G6aNg",
  "key18": "2jaC2QNjMjkjeVzQfGirybF79icoZKPBgUyc9ttebDmGg5Ae2QUxC2j3s9MdpXLDfJBRRsj8SNUmGwffGx2CKgET",
  "key19": "4Rgc8w7P7nVubYTnyXqU6WykdeptKC8gohLgLFvUCo2KFhvwrKD7WH1peJw79Uts7MJ6cwMYq2cL45eFqy7awX9U",
  "key20": "4y1Lm4wgzrCW6vyvGSYqsvz14EfHWSKKG83UgiG945Bkm61mVwNgvZdZcZTZwRCVUVsKf5A15GK6GCfUEV1smJUM",
  "key21": "54QE1vJLK9SDzPqA3MXKPriTHTZBNJD78bAwZE648sJHdpnnaz5YipFuXS531c2Dnm7TQVZTAaNDybVKfjsGcZKV",
  "key22": "2jEcqtng9p3f9zu8ajfBu4MkRXFdAWcQCd2FYEqRHrwtixKxd2H883jPUEekX2KuBD7gM7SBMbRsCQjEmEYKhSqm",
  "key23": "4LSzXzYtSE3YtqR29EoayttgCP6nCHvHMAKcX8DEACGzqeKWjaw94XYMsXHzHdPwWgbitrAaevHcGScQM4rTWMVA",
  "key24": "2zN1QUVRjhUZUQuSpc1DeamvtdrLMoUHRByJtedMSEM3mSW12wZHNA2UMfXdnqcoTFYj7PuhunsbYPzFB8zq8cE9",
  "key25": "31aKZXZcEe1TkpAUqQFj6TEtFGUEsmDVZzFjmM9Xo9pPa5ihaxFnxero4XKmw6xqvgZTr4wCGdCK3XpDBRgucBNP",
  "key26": "5e3kFubok4LdCneHVHuoCcbri9HKRyaDbvom7AQpR1NYQf1UgfpKV5zB8Z2KhzidFBjYAjcehjmnuDVHvgpaC2R2",
  "key27": "3sHGrn6xoUChW4ino3dEUAW9W5c7FnGnQgS4tjgFQXijGgSwPDCbk1KHVMpMF63EcQPvUXNAF4CvUkfANQPbdopq",
  "key28": "5V8Cf2YQhtcUuLvvabNr8puwk7Kk1CsbiMV7MF1Gu1HMLufAvejyQQCCT5F6rjSfpKxRZv8TMwtJTSTbXaQdecZY",
  "key29": "268uTgfWdCgu6AnKBx9CNTQ7oNJzLVztbGTN7nxnENCYcDSBYP2siHMD77WrnvRs9HWtCDxksFVShdPHJ6Vm2CT6",
  "key30": "XFZ5w1iVxQvL6hmm8MdkU4SqEkB4nsTeTvEiXt8XmcnbmXzhTDYXxfDsFyJBBqduDomiVTkvpad88Lkc99pfuXE",
  "key31": "2UDdLrtwid5b2QdCDdUJ1q3ss8Z51EXKSvqCSV5W81xDxyFM7pXkrhTC6HiskgLpZzpycnzWx3EEa9aCXste7Uw3",
  "key32": "EgnKtyrSEqZiYaCZbbnNJmq8uLX2aGc4vvGGRjdzSaysfNwTr8Lk7cR5gDYWori5XcjJYkP1e8LbrWtY4yZL5vh",
  "key33": "3rR5A2c8XvSKYdkpmNAX4gpHsL6xncXL4PLGvwskhSGhvbsyCZV1aoNS3N9RhPVybhRArCf5ntk8dvTbrDHtaWiE",
  "key34": "4ZYZ9VE8CSDHrVBw33YBU5cSLB5JjN59TG4bFXyTSppeC2JmgfaYUw5dQUfsq8c1dq3mcbPhQmYeoWSiVtRgFZE3",
  "key35": "3XeNFGVQxb2sd1rchCLyK7TaVZ72H7UMhtjmKKFdLoYCnb7aCY8trKosYvAsDuh7KmZ4WZx4HeyL6JQzmivLYxwS",
  "key36": "2aCySpNJypAoiAjeuHU6nemESpaTb5Feh3baALCdztiGqkSSSYr7FGEzSVQCWGU6geou3jVPgXdsAu4soptV5D6Q",
  "key37": "3bA9nVQnRDJWKKcpkg5MSj26waZLjDBt67kCgtZAETz9eSsM2KFCU8wQqyrRaPMjVCLSh1S2c1eRap89Lp8TXhx1",
  "key38": "bN8WiQBG63pzrgdmgjDAmGcHJY1L2V9YMMNB5wTh4SpsJT859EK8kqZTCCM1m5JKXurXHdoBB7SKjcU83XvUqe1",
  "key39": "3n9poxkpmTGW5j4XHZzyBxxrrwL2GkUQ7pXtnwvhFUoQKj1pg6L1Cg9H225d9ei9tGCBSmcbJddv1dFSzQeDgvHa",
  "key40": "5UvupWeiJkT9beZLQpJNJ97EkcQYXCavfJENZVPVmWUaiUmJf72HX9aSfawaah8fDG4g3h25u5E2hQr5MMnFrnDr",
  "key41": "2swyGQURJDPP1ccvSDdWPQYMApefWufBQTwfPDkXzBRVZ3DhZsWnGfvAGGVJ5c7ovxjohJdUgCKSihhYPhfhZXWx",
  "key42": "gKc761bVtKe4KMtP1Bspk5XuZsXrZ2g3WmcjJ3H8ZZy5KdNgmwxxpEu65FtDTrLnS2dRtpy27Q1Ss4yMWxDcNjg",
  "key43": "5x8ytJU4ZtAw1oAWXdikc7M9LMqsPsftE3tq5U5qSzpLF8NZjsjiPHb7msUnMJ7qFSb7ivTiWKbQExeJTXcJ8buX",
  "key44": "3nBMtzMyQrDdDJd5rRbbU6x9J9dC9i1DsT81MZCvYzCH9v8M4hrC7NM5TuTFftSeGirDZacPDCC22d471T7QfTsV",
  "key45": "pVHaC2Rq2XRCgH6tmH3gazJrQEfMNB3PdCWW6a4TCx8THjGxDnWdE1cVFcJNb1A47KcsYdubo3mzdYYx1Ee3rRY",
  "key46": "3xeR2HX8p7dJn5m732KbLsFb4bhbJY14CZpZrKzD9nTTUi5YuMmmfsHWkKwTHuTLh1eovsUsa9XN1vWg7jXYHSwZ"
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
