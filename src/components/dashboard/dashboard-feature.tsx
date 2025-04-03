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
    "2NaM67ZwJFCtFyiMrVRFeQSoSQPfJtyV5wTTKiHzFF2XDqGhwVN2WCs8c2L8AuEPeAZJkncqqUKRca9dzoiWb4b4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RpZqCHSChBsXSofGZMV9FqS4MPxsgrXgrh1bPxpchu8GNm7e96YearugcFWmGNRbFm3eGpn8uHfafZWKQ9ZtNKn",
  "key1": "EyUPxWCjoEet2KjsaiqwRjt7oXvcgaoGoHzihxbhAGx8TXtbRyNfAQeMSsCV4KFrujKZHsk6ACcMDhBhMKLtRQ7",
  "key2": "5j8i5iHS5RQsVgfaR69UA9eVr9di5MDBYY3JYKad532GGAzkn16Sy79sUzaXCnzRbm5iPrNnEfiony9JMPgFcK1S",
  "key3": "615347yDf3sgG3E37FcP6rRRu9GCSYzNc5HKRWYVmgwT1Jrdaa8HtJPnnhigsMwkUNdNYNAHPj5zC5UDBitn7wts",
  "key4": "2abHQWtP7rEo8zpwECMTw64xDKK45f9TtA7DX6rDJPkDJutgqusTvyHCv8BU2QRXNmSEu5mbv5AZDTXaavsWpdjy",
  "key5": "2h6SVQi3FhZfx29r4t5EZvZTPGFpNmWgh3Tzpyqh3a3TLKkyNg4hfGCZm9nF8swb3mpSWtEPUzhUezUpVWDKTRgF",
  "key6": "4R48Z6iae3qjaBGfFoUdVjwpN6JRnY1riJTL3iZkGsfJv6BhceAzGru4EU74h1iKi8nU61Cjc7JA3kD6ZfSakd1b",
  "key7": "2DFEez2s9FBNwX7EBMxu78wXzpZTBBGSSZdhrUfWbByFkHhJpVBZogZbRNQicpxTuVYAyRJwcRgkhGADnprv2SfV",
  "key8": "3g1aqf72fYRhefU4MhYZGdUXNAepz7pmzERfnLTpHyzzPtbKG72yA6ewyYYupGQAsxJr4xut8ZJzuD8ZXrhSo1m9",
  "key9": "4XNGbtdoswE983QDtn195PAtQUK8dPfACQ5YHGcetwiz2wBdShCfU1vCQD5Cx86gC428WXyuA2rW7ByC5uBXEeMf",
  "key10": "2oJAzL8ehr34syMWjNFrXKxNPbR7HcyhCBSDCZmvFMPANuV8qk4eoSUaTNbXvotWDCaMAEMrNtHqdPG6AnrwXjvG",
  "key11": "4ZZBPJHaW5aRBMRQhLGmQkhAVxkv1TYi1jNgpKqC5d9ZUA5YudDidgvTTujwkZMAPZ7EvXUK5X9BHVnnMtJ9mxN1",
  "key12": "5NuSWERmN5BYu1qQJDgX7kSJWYckD6g2iDzxuV1ze7Cv6xw5v9VtUsbP75oQHJz2Roh39crX22By93n8GzVzfDCY",
  "key13": "3oHpxb8Kaz6eeYQAPfPosWvLa6qzNetqLVQMM5QUPXf6JFsJnNVNupxN59S2V44eBqcyyBwZreRumauKGzb6W4ba",
  "key14": "ApoJXGqN9s3jPaKTsvCcxUdgKgWWu7YgfQi1Yqke24mmAy7Qg9kiD1bwv2VZN4daPrR3xDbU9CasagrU2NtD5h7",
  "key15": "4mnkufVWEqD2RHDHbCPTkpomG9c4o5GVADgc95cKnvJWxA5z8TXBZy6rqoM15rMzPvHB3bABZpiV73uBYhu6x5wf",
  "key16": "5Fc9TQqNavZFa21V6esyZFUUkpdV7ZJmNC4hQ7peTxd2pz4XzBBtczKvwyfrKw5jhE2BViNxFQ4CC4CyJbzxBcke",
  "key17": "5e9Xxf3RZcahou4s5CUQiQTVWnLiqmF1SzqnR4BNTC5BH6C3mL3X9x8Cy9mpyf8zciP9WRjwwY7p7inBnCqTbVk6",
  "key18": "gbEYCiJxZMdA4e6c5D3pDVvYrSp3cawfSkfbcCiPU5GGJhR3tuG5zaqZ7X6vhrJfhyxGoPBksKitBAFethUbmzW",
  "key19": "2cQ1RPGFXrAeJQK9Mv2i72AUgBP3yrN3JJv4WtdLDLzAtSKa1y8bcek31bjJsegHZxS3XRr45YN5GnGUG9gmbeAc",
  "key20": "W1sRr5STxbn7UUSXZzXgyGpqe3EFf5oPkM3ksGK42NXMGiqKdYS8NoWMiTaLoDjTZmFt5soe5GRzij7Fu5VPuxC",
  "key21": "2vqFxcN2KCJoc7ktfNsZnPGWtedsfmNa8H7fJXr6yBM722mT5wnumoHCUL4ySCCNZU9BgyyuJgk6KPzJeXtnbG9v",
  "key22": "2dAT4V9aqxk4HzdAZg5cPUHoYixkSTieACSCWAXL8TCq7eKy9JbicvobxXDHuBkFR2qxeteDrLUmEoXv9R54q5xp",
  "key23": "YgAL71gSGAEMt23ipQGbGYq6W3NmUksYhT8SpnjdsJfCVxRrhoyUQGRRySWxWbga5DUNrdrxN8BRZmi8qinnheU",
  "key24": "3nMgaSigq1xk1xG647nD4V83rZ1t4DiudLYFG8QQy4a8iGdFSoPhayBA6rrDfSDberKAEon55cyzd67upV57fGAb",
  "key25": "54CKVMycmUX93WigqsguYSHUUv82AMcttNi972buTYqRSdEViXzVhAR2k8kQgEaqya6iKJU7ZNnmannxMNEShuz8",
  "key26": "5VREfDwYsez9B6MRoSK6zMTTmzPjEqpsquiJKEb8SBJEgFtRYmQcx274uYQjb4jdB4ebuAEANZwNQqe7aC56hkow",
  "key27": "3mMspvX1dj6Gn4m4XD7MXrNZABm2ZtwU6KdQgvkZwJ2HPynsKL4ufGwLHqKeXHLCWqDHzLetgHvPJwVhvrhgM2dW",
  "key28": "2LTD7AnXUHpm4J66G67sAEK4WUZ8damCNJ9Zhi7reB9q8XBgD2TxWz7exhaxWAhDoUry14b5W41hNUgfd7UmBNxF",
  "key29": "3EsAAnFmu4uXGvwT8pU4E7DjdZhpvd8oghmqYAouqD8Emp74fcwbKnL5BTyDzwdU22K7vqh4iUYjpsBuJ73u7YvX",
  "key30": "5MdZTTYYSWwKsmsjhoVHEm9hCFk4FFuhU3fCzFhzqpduhs6uzb4QVtzhquwC6gNfXZxcjcYA19yr1xSCvhdDFV2U",
  "key31": "53pzu6YDQexb7cH1WEoPRryzFbp5Tim97CtPZ2G27BR3wDznH63Woo7Bjx29M3g3M8ccTnV21WjrPV7fPv57YfwW",
  "key32": "39qReNv1gG2XvQFdYE2JKQdDmCMMN3Gacph5BrMwESP4viEKbyWZdum3UJsZ5pbTp9wAH6GRcBdSCE3UgynmqARQ",
  "key33": "8Tvnn8BsHzKahDkDLs96mGVups2oKrcKfGVS6GM5cd7iXgXLEu9Kf8PWpBRR92nGQbmXZ1dfnmUrb8cbhJoX4QY",
  "key34": "3PtBgixNGgRvnCt4U9Z9DwM7tLHqKwwuBGD6yiMDZMmx9eHFU72G3W5tEy57T54fnGJ5PFr3gNZsVJnYGJ23Zp5S",
  "key35": "5AwRS6Da4Bq4Txt4bxos9MWEMs9PDgofYZSYHdMSwCtNYSMeE47Q4btVtKqnnhGxPH53PbsWD4yB53ZG1Ewx8em3",
  "key36": "u8vg2Kcn3SBWVkHQ7fDvd217kDCZTGUmUiGePAbUEhNCAMisC9Xgx7UynaqYokT5V8JXU2eRcxiK643EvLDeg7h",
  "key37": "3EPjoDrYpoKVPW4VPwZwakLx6cH1DXLUYYne76kQa3DZvSxbW7JMJhStX1CzYmoaitmWG3c1Wi62gBRyEDqpz8ZS",
  "key38": "55SaKRAwXXP3wvyNzzHJkhwv8LRAa4KFDKNzxHNK1ugniroo366xsPt6u8RvseMMw8yo9QkMEm6e1eSDKagXV4DW",
  "key39": "5tbATUJbnbnrivvT3vVyZQaxKw8iyg15NWb34ECXgcHJDpELvBWQ3xpapeg1ar1s4b5fiPKFq8He888q3TTijBmh",
  "key40": "24o92vYnetCzzh7EMdpZYQGVP7oPonCF1pDbscPGeyAyFqetTPukJdkXxEgLVD5VdjvHoEBTpD2qJhhjj8dfj5zR",
  "key41": "2RFU9BUmt5Wvykm5AD1dM3VFiY7Mw9V9s4vp9oaoAnSwEGtHM2ayFxMtnV5udBCQUhhrhRHuPKtQQhPYLx3uqvha",
  "key42": "25BqVuPXVLVUGBHV7ZVcVbmkqZffQE3F5uF2vGCBtzGAT2NShc36CPU2mX7PGW4CGnS6EfmbLJUfepFg3j74YBWP",
  "key43": "RMVwsbM4P9rTCeLoYGxS16xRZoiDFuiN4K4vVtFNcZgHVyTA3vsPM2a1EuEfckKmv8kpKjoKW4VZN8ni4PtStkX",
  "key44": "43D7p9KMHNDPWhuDeUepr57rL3zA9DGgVmshd5btBR8Kf5viGnNJyiNg9adqEwKbZLAhUvcwDTQVqBLSvkY611WM",
  "key45": "dniGx9dYxYVCKruP8x2fwZ9Hqkfq54dt3aUfmZMtcg5dbpNZpe7CiV5bYHeu9yDg4X99177w7dgsBc6ME3a9Bj6",
  "key46": "21inbVj3AEfWaib6kQorEUVovtmPi5oFjjBBdsTC6gwAmWMPqrJ6TcP4CF5755f83xdpskqqoCb7w3cCXkXpaPjP",
  "key47": "5xG4c1DZVrXRgS4NVbCidFiJftt6EGK916e4iAWiSVUUniwYEvSbBHjVNyqvQDSRECcK5E1nHu8FUMn6yse2v8TY",
  "key48": "2BWSGZ3agvFXGWmutRcr7d1r4YYTKSSKkBTuZGKw4KU3eemf5wdj83JWJnc1eZ7rbALhCaxAgCuDuo7nsxS6K2kD"
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
