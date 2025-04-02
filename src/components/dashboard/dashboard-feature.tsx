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
    "ybG3E8DXdpxPdAkDRe4qZaur6L8QJNVSaLyMM5sfjFCuMhETfYyrgJWW7tJqQnkYTDWsW23c3aoURcm6UrPSq35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ezCVZWpd3jk6KmXc6WrHCU68aEkJsuB8M5wpk2H1yZHk6hoPsdFkrMv3jc22JSFEPkr1nn8dSMLbeV7veaCr7Px",
  "key1": "28TG9GRSRPpiCRL1dyfiVwjGam5qVc9VfrVLdJ3Foa136bUu3HaF8o25R2YLTTcx6veWnHyMkPC7t4TL1Qd77kGr",
  "key2": "44JXAtCeEtV4dEJcJEGmCzJ7H6ZKBqnWYMn4asCdTwTmyx4oFmdW9kkRhEg2CJ3Yn7Le1DLe1DskG9Nph6aNGdVZ",
  "key3": "4fEDLnMyAYFLBeUqiefnSgLY5xYueDQ3cATFpxf1i56kFSHMUbXL9Csr5chXm2MjeELhbJMtKX3RFnnBZXFLB7oC",
  "key4": "5BEJSMF7n9JfY6NGAzUNd7Dx21Zwbtca2whfJBpwDSH8CiLGoL5LwPmZymMhiZDW3BNWJsJgsoU71qDURckw3pbS",
  "key5": "2GfqXHWKygmmKQ93Ngz7KA5vd2sjNdhUc6nnhq9oKtk5UmHJdrMGJ24tNsNNH1io5wGGYmipq5zdrzBft5PEnoH5",
  "key6": "5SQxwJz5UhDe4X5TN7CcLtqSWDXp1XD8AWdm3jyCcWFmEpv2QA6yhxNXsz952mR45d4nbChmPNkKZHSZimBcVudQ",
  "key7": "46rUZtdSwKLhUinYVwdHWCkQgkrh4WuPMbaYWw7H3rKPg63KtBxwPBps3fkMerdnucmtp65QTf1j8JoKHjS5hGjY",
  "key8": "4dCRGY2z5LWrnZSCAgFz9rDFRY7eh7ZPvyVWck2EvPnpDkEMJV4v7c3iJteJVMKL9gYru74ZWdvNGs8SwJmDGNZ7",
  "key9": "3k8Xga7vvSDhqnuJCn4kDV31RrYqYsXUZvJVCUyeAqrLEf7716H7gNehRE38j4F3HfsHcYgkgzYtzump1V95jF2D",
  "key10": "GLJnQuKBbVKF33AeY7sZUPBtTFr9dcdyT9sTzV5tSLtb3HeBsyv8B1hYVYchZjuswyNJxpDT6T8FusiHb4FzYM1",
  "key11": "HzkLwPEYzXVvsMrA5koQwhrodqYgWrk86N8qLzYdYZJQwHqAXV1nV4pap6WGPaeJKHywKhRzQvqNze6G8Jso3ta",
  "key12": "21esd4PaojVLVwULoMLsPJwKxf97fe7fWmyQJ5x7wwisruZoFRNDNpAdd2kDyphk7zSesuydWJeuoutYfymsZVXt",
  "key13": "4UHAbojwSNZSaf6qcMqfBnnrXqWcBLLy697nrkqU6TCsVGjX7jLJ8Jc11tWS6f2tEMg1K3yZGSTp3x4qvHCBLim2",
  "key14": "3AgSDh7HDgf3AwAFHP4b6S57cJAmrzY85G5RHRq3LJfy6KjNLnChmJzE9FzMmgf81JPY3HCH3mZN6Wi1LUw8wecB",
  "key15": "5BWwqgCfck7EjmXwygKiXeH9cSV3i1SUYMvzCv951VwU7nGLsLmhbVsWbYyXyJwU5mwQbbU2nqQKkyzi9iSF2hvf",
  "key16": "3Q5eYJHLsZEi5TUgDxT4184Bkb69KEXH7qmLZQbkqWGTBJnDSK31iQ6Xy8JNofQz1mHX4pzJZQPaKo9QBJDZ8m8m",
  "key17": "5r7HrUenV2XZagr8bLRZZ3MqWDXKNJEnKF2X16JnS7hhPthyMEhcmWqbhzb8iEU8wg3zH3mfTq1D8Q65aqn6GhRU",
  "key18": "5tf4jh86YxdTcH5pZhADGxdtBvL6HHyGF3TpMWgUaMs3fKnwvSfeAJAWDVbjmWokvNHhDtaJznmPK2gJiHzEfKUT",
  "key19": "5p7vHKXD8bsGWAnXDPe1yNysiCWtCXcwRsaQHA9EfGE9oe33jiSAkpFhGKq39EotYfeRPA8UkLDVQw8dHT4QSxWi",
  "key20": "3JPur1VWRaMQuhNFqYU2ip2uMzisEbqVwKFposYTtuK8fE1eGz5yASmv5pCzqkewuYzBr8RRJXQNCKLNvETp4WpZ",
  "key21": "5wHHpw5wmkTs1hDiWSn1Dfr97HiawoWz6omRxLNiV66EkYQUhryVPzAE6fDhUnegU5zuF88zz5Hh8Ncqxt9Tnddb",
  "key22": "3QQ9rvhf34wKYuSwnwfo3K2yRyFdKqD4ecDhnDENtLSJwydh4TtM6FvppHKnhSrKpZ6tiSZZjwDpDtwuoDdjKnYm",
  "key23": "2NsphDcBPpFsZvpXF7JaigdTi3rJ6TiJGBsdcA2uxoP1rCmcPrKh4F1p3xYx3G54nYLLu4m7Gj9RRzUMQYK43Kuj",
  "key24": "4zy9xjZqCthgeFoCEgiTxUGpnUS53w766vKDicSZ7qkT5FgZWyxnrHJyGW7KNr3BDJzECRYFCp4rKNYBn3BB2Q7q",
  "key25": "5mpGfG4ybEfuvdLTvzrbag1JJynTiLfZC5hQhtZBfM2vEXTXdq3DbL86ruDLghpaGwSNDkSXVZyVpYdNk7hqK382",
  "key26": "4VMhBk3iZPeFY3VrvU4g6tmz9hB53NGNqdD8zzcLx7kNnbSQCR8rseDkJT5sRGSKbc3fJXJQ5ESFSN5KWm1drFD6",
  "key27": "2aZzcwhLUeXBoXq1bVEfQpLHNeVjk9E4gcWfJAZwAPjxEKRvv33xRFJK8H8fbmZ6h4GtGUWHXBMGc8fNq1PHQCrw",
  "key28": "2NNiAVqmPtiLaAf2tPFMAdKqNS8MwTVycLiaggpL221a4H6QQJZcXvLgFbsLi9w2z5StJzicLFnqrXHGAacMRMEu",
  "key29": "5GiSCWzPG3TLzLZemhenvDhmT6B4JEGnsjGwJ1viDQycWTkYuN5iwhsa8FKZm39nVUu47aNDxbm8eBsni6Sk9Eko",
  "key30": "5aCUxpNiAd3FKCpcPhffatsU3Uej8Lhy4kmLbqgUpRbdf7zGo61naHYyLgjJ878vw5F54hL4Qd2t4rXUrqHBTCHy",
  "key31": "2rFbcwMsa9WQeLob31sCZkbrx2CkUzqN4xwhxCKJsgTRz1eZ62CwqGWu2XU5WaXJYkFQXf7SsPianVeigQcZ1qUd",
  "key32": "W7B9bjrKEqf6RLCRp78ZL7xoTLXKDYuMbuNibrxYXYCtjbQW1fqCGUuAt3ARg6Fn9muirDggBzBAJQoJvNa6wey",
  "key33": "3o4VQJ5vSuK5QbYqCuWtx281DUHkm2YUVd4B8CBdsimPVGChraqCm9sDeiNwJemmvtsSM6gKg36kUzjEjFnJAdzZ",
  "key34": "5nsX58fiLU9DTVUHZDTcuQZykZ7yDHGh1aH71fzS7K5Bjq6Vzy3ovKAH9hYraQm25NguryAvyAx4VQYrdvPu6R6b",
  "key35": "3gR39XdciQm1xU6ryoDvmquDKKzzkR7S2zVtPTz7sisjcwMLZHuEWbZJKTCPBbWWfo7tQCupXJLEJTCow5iBh8YC",
  "key36": "5xAZvFUqJtvj7Z1n16Rf5rmsU4anfS7r8cRxRLS36U2dpYk8U9NgUJSwbhFfjytrYpaQDAM9tmEXWjBVyre5YGTY",
  "key37": "2VmwBycBmyFmbXL4xznTv3pC9yY3MwSvKasjV6uxdLkXSaQ9dVaX2e6U9JujA53AxRM2cKFCe4LqRiuPpQEFHeLz",
  "key38": "4DiceoRapZNBwZGmFJWdGMk9F3NnmnLnTfFhLnbdqEJ7ofErSspQooUAmR6MmqGdVRtn3cPHMH7vP2trk7tNuVEk",
  "key39": "VTEF1GTDPHm7WsWRNdLrqhjZihziNfhTvpUBi92qoAZyVuUges5B8coR1rfGZQDR4wtzR5jqTY4TQ72VtnurNf8",
  "key40": "YMyHHvnUgGfrZjfMXnZ3MgSeDyVME5BLSPVuXQHwB2GyegdEqUPwX7duwACEpm1FmkCXsynyXZeLtnDer1h5Gf7",
  "key41": "5LxEzDxTXu1gd96Mb42MwqgKPUNgnz9nx6n41FHApRbCxWfqNANZkuGmQ97vUtQD2YuSmYeijyBktwUGjzQAYq2d",
  "key42": "3ySPKdCyXwksV2vdzhxGg2xXKNjawgLdavgQBfYZgkNRMSKvodBw3KMkb93Suk3uUmreR9ZXDEx3woGNdMuwCQhk",
  "key43": "3ibkEaXStWVGutBW1ShMUbiVGNfKTw8u1D28DNtBBga22Hn3jmNv5MhXZTpzNMBo6DcwSP459idPRepjoS8QGVWx",
  "key44": "53fsYuUNMD72cUHXhEbSbpRfQ9d2vTBSqCYEQ1Lx5B3fHkwNS8vxw5WNB2kYaymEkCWTqUsenU672gBXdC6zJMMK",
  "key45": "4NjnsLLaUgraRRm5FpfDiRsMidC2P1TQjz19qW9izEbvL6EY6eior9mNqLJ96u3VzF72jUDm5kcN5C5yZVGUPL6z"
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
