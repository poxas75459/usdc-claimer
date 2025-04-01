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
    "24Qb7hhSYSmpLerwTtFZRvuPnxv72ua6obNYTLueUZJujZGNVJTPjjZkshYqoyAq1jBUzUrpXLwptyw6t9ukVpaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mZMtQG18rT4RnLGRVz6ZddgkjWfmqBhTohVoNLGvEddafDjUxPGJW3Dv6gnp6JK8GPS6iYH5LYgtSHUsK1xCikA",
  "key1": "xGRsEzvJnbGiUQxguNDPW8r9v7fo4epmqTJTE6yLSZZxpQb52KMVTmAsGi2BY1zReDm7i58rKGfoxqsmPEZnsJd",
  "key2": "3S41SQHULqfEpAZGEkwL35dcoQNp4qzzXW8MPrdzUcF7GVaHQN3AiyPpWp9kpt6jg34XBAUkHW232zt71Mdab45c",
  "key3": "ZzXtX8Q4ToiaatPLEQ12Lzi9zZkAFBrCgzfn9zvPpBcfesiN5tSxwUHjmtqfonaweHNjsvEDejrbEeGV1zgzvsc",
  "key4": "3t1VnZwRTJP1C7Y79yYPkzKGYCfAyDHDg8xBzrtHct21WSvrkrxWBSHHj4HV8GgFkHHoecK8g8yuh6jdmVqMKonX",
  "key5": "4e2rBwGNcWjcEGAAHQrBDkfFznGEad7ghYQBBu7yWBtoiytGs3ogPf9XtkPJ6nbZjp3t12VHAGw5yUBLmNv1Fg2q",
  "key6": "2xBvFnofd9k58Jx7k3vAEVuvHZ9bf2JctLPwQcuLQrL16e7iDUkzDnGeRa8bVzJ9MGn27LdgNeHosePqnFxb5Gch",
  "key7": "4HSLJ2cWjqWGexs8X36NFF1wcsRTN94gmTaxwoEqkoRY8BPJGLEsTtCBpXYNDdp2XDm5YdkAEu2rtQryv6vLiV3Z",
  "key8": "2Xszf9QpzHYZ3oYz4MRKcVsffSt9Te1reSQmeZ7j84uCasiLPc74sGSv8atLiNuz3KvT2GXKbEAAKeusX8VtoHFQ",
  "key9": "FRaMSKdhfwvv5Mmo5eMEbKtYkht2VMbCpBUrWkPi79dH3pqSvsQ9gxsxExTjXHTgy3Uu1JwD12yKVd8xf8M7yy8",
  "key10": "v4EcVrjcESEftR3dcogwbJwTe1vjnpAwAgXd3xXX8dQR3q1xC29hTnS4DdzD2hsNsbtqCwYWsbTiWfReHFtv8vS",
  "key11": "dzLbnrm4u6x8MBa68Hgzgn8af3kP2unscxuj5qKzfjZPUTKieW9kvSwv3dVs89AmBGf5VDTvcvew7RhuFqRq5o7",
  "key12": "5e9GyWJy5ZjzGNxGTn6GRebcuXH7VbzmAtGxwj71mqC61VuwL5ZtAqQYVENQRBEAPBG9AEUrHhWFswPH4ZyGKFcM",
  "key13": "5eYVyUEMZqtKKmjXnDTdSiBCPbHu4u5SffS5Vm5P1ZnLVU367woA6MyLQCXYV5UEu3LLJNrS5cyJ1VanC13duYy3",
  "key14": "2oCEJX4Ed1m2Uvk6rYTDBpUhKb6qXcDrBnMwUZkmJ6Sb4URFw7aeipPrW1jXRGaivsMgA9istmScY1WkAR6NaK7m",
  "key15": "2YFt9BgNyqjAz9WustxPTc4U8cbmrPCq5XvqoevHLqeQRC7vvR1gJMxqM5kWCrSJzJkHSDJ9Kba9bT4QX7rbq72a",
  "key16": "5aC4CRG7KtGQVW4AP8SSHgegvmWMPzP738mQPa7XmViQ1zqDe2qgw67vd7phZiEFBLdima5kwWfgey9hwpGro9Xe",
  "key17": "2p4SfayU8QztS93Ubp92sGVSKwozVscGv35kZXWv8nbLN6qKPw9J837feWT3uDsJTtmq76YDxs7SGawMvVatzq4b",
  "key18": "25AJBfHskenNNmpxi3nsJo9UmLYYjiT7RPvN72ysj52aYy3dTjXEAyFgV3SBMGZM2bxmhHQfNLsYQXzTuUPiGDiA",
  "key19": "3eGd1nv54hXBJc7gSdxKEeog6EyVSM8gjugbVGX78uxfDMRBmxARwQqtVY58tFbkuL6uVRaNCFJQZUWGtmPDu1g9",
  "key20": "F2mDhthGmWoz3EvfZ6EXTRGMJwaTHsqvLQxtfTW3w1Uvoce2ho252j86WyYPXgnJNdnoGDxp6PTtNupqLcenUX2",
  "key21": "43hDGwQGhryEqqt76kZegc1vNHfcFjWvV8m1NS1czhRFSKNQwSSM3jPybMbrroSM7N4Az4wmskJFGmHWB4PfNzZ4",
  "key22": "5KzgoqEoHTmGhEkFsg9Hus2CZM8W1oq2LDGaWdAWvLu6CHyxgm1Tjp65xMv5pkz8mfX2jijJjCVAomq8ZXjHtoux",
  "key23": "pdAk1e7pCDqvSihrzsPT9HVMJPurfzDuiZDho8BEAbBpbnCFaPK92dF9B7FgMacbCyoGprjaEnBPBHVkwNeW9Gc",
  "key24": "5Bceb4tH9CSjyeCsxQSwv5h6wDwZpTv7Zgnb2N4ffNRqvWpUhur7242pTQc56iBZqdTeCrz5tkCVGreUe7faRcEg",
  "key25": "1Wg9a7BZ7FMtzieU8FedZZDVhXuWfiCS7BxpGg5Se8pXr3ySezoeJaaxPTKZazeYcB7wiFcdED9gbRopbXFJny2",
  "key26": "e8XsPjmePfn5TSGkRnCQwPhHggtqyPp5ALD9rdfHKZ3r3PAASPPDHpqZHtMb9TS9GvuKjJokLiZVXo7sAZoDPJp",
  "key27": "4ArBE9dwU4Undt2LS8vKxVXxCzvxr8TjW5nfXj283NQeKtdigH3oyeDyYZtkTttVpDJy8sf6fPMa228p3AFJjYHe",
  "key28": "5rh9cjm9ptPBMyetC6m1sYtYNMf1M8GEVGBhTDdQDA7PvRFeEEF8d2Z8b33d5JkWcfDT9EEGqmLoQsZVUgB4vZCu",
  "key29": "iSjo989ZxwT7qyYBjcqZoEoaqMFeXXVG4WzBxDA2Jak4uvCpmZYECb94ZneMd9LoqP2xYigHWkFtZhqE4VrW7kK",
  "key30": "4uLhkb1pB5UNfoGHxrG413PpJFuPP6vArknG7GkTw5izD9cfbo2YUW7DAisLYxoVCBaUzYJYpJyuhazBbo8a8n4d",
  "key31": "3QunxZDNR54ZLoveSiDdxxvrJhdvYkhg2sxjamtA6d773B9nzDy1eSsPtzad4vZ1QkNEEq9PUgcveJ9H5f9P98gx",
  "key32": "5WxMtb1vFsDBNJ5ngLvgaHkovNmJvoaTsnP8CXzNbzgxvagXWqKsQbntGCyiJTYcgHqne97CPGKFEQf1A7GgbfeR",
  "key33": "51NpJ7r5uPjuKtefDeFssr3V4HDsuvmv9SEm5k2afPQDxZXAs4dstxWvMfyGKMCW41zGuQUk8ktsmZyDKRMaTxBz",
  "key34": "3JhZtgpvtV45ot3WnwX5vVRVmnVfva7h869ASHHFVWpXNkXx5grVuvBTxHwpLgLEbxqdKRwZh6TEwms3zQnvAuMB",
  "key35": "4ppADAJae1EdfMC7V5MNb6NoAy1NM1Ff1qDYjUW3eN9nZ7z8WEXsdEujEzD6XRhKnVXu7aupkRVGp35orLE6pXDg"
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
