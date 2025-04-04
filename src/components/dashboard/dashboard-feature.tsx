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
    "4tkQgUAmmthdBk4NhdxEah19ZjZV8MP39h8kmGoJgkt6668zfPTj3m8ezQL2LdHbisA3URxy1PY6rwnSqJ3UdZxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WHtQEkPefpFcT1dV6zAf2VgMmxGdUsK13FYz4WpDmbY2E3cYVnCTLCuVD2VRXJGWjk11XwU48pALpQkHK6C9h7C",
  "key1": "4DQBkutD57V4J58ynceBskw4dgmREQEGDTvW8fxViFc6ujTBY7nRYBK3aQpTjjwRiurQ57d7EsQnsPMkrZ8CUw8N",
  "key2": "21k3ZcYp2557ND73zzK13jzAUSYm3RoUKocBPdVDKb6gCBpZzD49XQAWrJLEsAZTSSULvCTrnPoSskX5KHoCBhPm",
  "key3": "3Ee8pPRPgKsPnxkwPLY7hFQy4wAPbzDEUJaTkwuZPgRLTpJ19B2BTSmxH6piGAfD2voQ6e3DXGRNLhTQAmiRwVJw",
  "key4": "3rHg7Ejp8Gz6JJHKR1WxoUpCTjfJi5ivBwsPPxRb5CsUAqBHNKVEscid7kX2Xpi8aWN1ZLYFFsEMbLTmjUe5oBeT",
  "key5": "5A1wXD3LUEwn5XMYNEFs7QkMnTkiEp8QcPxnLWQu3W6W7CvBRCsgk2p3FvmpyMWD8diemv1WP1BqToEzE1MudSmJ",
  "key6": "5QujWyXbPvgtKnnWo6atqQRuABj74ssg9cEihytXm6TPA75W1EQAwXaioDWpGAksXwz5DNkron7TSVFEQbnbAxM1",
  "key7": "4cUR5LxzMG8mD9M2RVzW4LVjhZ1Aiumkq63sngdAhfw64G2YUHVWf6qJbe1wWJ1SaZsmQNqZtYDBTrMKL3ZaY3UN",
  "key8": "2srk4EEaKQCKzpMBGPXP183r6aiwG99TBWsqNy4KEceLotrCZrMYstkxZGqHN9vFEU6VSYZuDmoKn7FSkoPSdcus",
  "key9": "6JQsgJytVpM1oq51GoaMaVMxPUjh81gKYoPthfvmXRwfvAFLSAK4UhiTHMv4qJzrCDNNWZWLmgfTCnKj53CJAh5",
  "key10": "5dvG59Q6BhLtqJG7FquDvWUjwWUpA8jduYJbQLWWbo7g65QEfx49tnfEvaxkaoQjqX8WpoLgVeNEtNTPPFWdPbUy",
  "key11": "2eQowSfrZPg3pnDLZupDUxv3ijXvMhmEoGfvdPbeBQa6AY7TVHjBwUoS6pAj2UfuqZ6naRMCyqKPFXoem85VimVK",
  "key12": "4Sv1qbEux9CwS9ZnC6aV75NbHX9nEkQP2HrWUhhPZjQpBV6V9K1ntrYXoRwRUm3sYgKH2D9Et3AEGvFDyjJeLHvD",
  "key13": "2Lehvz44bKzv8jGkYvuaA8mCiprSX8XGUqYMCLsC4o7iyPP4rwyHLn2Ppbid7i1aPxycUL7RDCGWcabVhfxovdNt",
  "key14": "3bP7sQVLtBQx6pJV9BrAHvMB3x5iwfL53VQtkhTbXmGoJX36adBjrN3vVfS3VnG55st8QqRW1cNV2XmSVqnxMbvM",
  "key15": "2RcnwwhWb5YLWiTwS7z4znGNhk6p3RQsP3Jf5RjK827QC51pP3Wv3K9EUQh77GHH4bkwMmXTTJ1usvrScDHj3YDZ",
  "key16": "5WHgEBviu9VBUdMLXF7XDb368VTZUJe3bKiiuGEgbb6XxxPPPFTM3cnovUgnVw4DkLwPSrT5YCfx1nCV64fcatE5",
  "key17": "5tbFXss72rB9iMVagnyAStCeedp3NDkPLKpc6ovVFc5zWEUZsDLRHdxr4NXvmheXCcynxAqFhmjH8vLZ1We7jwAF",
  "key18": "7smxazNvh6J3qrzbP2wCjynxHzcWT1v2q2dvEo73JuQdVgSTycNfJubVBCYz4BNJTusoSYTcPvEKALzStrvNwTo",
  "key19": "Y5w6Bcxod8EXRwWGTp6eP1BCWT8qYN5KnWRoWtMrWR6gpy3cL74LK7hdPgwdWqrBxoV5NjzEuWbjpXoycmhE9zG",
  "key20": "5LGNXDEbe8qN1qzohUjxatxK1ZKTMMnWoMzisnpeDRe7XDZp8KFZaLCrHkRUNaz1eVCQXCtnRakY9NvcFNFwGpCr",
  "key21": "QVRYw3hDJ98Gqrf9qMsFD8yFJ1axE3VgY1jegEkLE1AQuc2ktDVBLBfgpn8JYwrLwwstH52LumB72vJqhs9E9Xb",
  "key22": "2YMJYugUxk3PkdVgiZkAZRLQ41esJuBeTcS8XYgiHyRrxW4V8CNxDaJ4Xz9Ju9EERW3ovh5o5Lp9q8eJkJT8K8xk",
  "key23": "2rNojtC3vhanD5BTPWtSYsU3uW2sFwtoBUbDc3wySxvKjvwkqvW4jYVmVwLHHk3PYmhThWKKy9aLW7CfE16TbLHs",
  "key24": "jnaQMNEy5mfs39NPSFgVr6e1C93xWGYsaftM33f8NoYTtaFQL9QKrUWGTawPD1Kmb4d1L7RbsXmnjdftBVrqLjk",
  "key25": "77KBtWhpbRyM6KqEzePPtVKM4qRZJffbspvo5dWa7zsjP6S3qRkn7WhSnWEwUH9kYZps85cDuXmxn9Dqw73rfb8",
  "key26": "48w25KCC8zRgKqfB4oUJvpq96chKu6PKmickLS9MVzjjUMuyuXXwzmEQB5YoU11bn2TWsHpkwKvL3BoKHJ6m6yeH",
  "key27": "gMeFbwTYceWfdHhqYPdDEHWxtWBfJWDjKaHqP6HTRc9JNsFzueqMhePag3HU2iF2h3CMHrAKMZcCsUDQpJvmvjP",
  "key28": "5GfKvHnjG2t688dCfe9Pwa1PVnvCDn6QQBK9f2NU1V8sG5SKftqwq4mwiSMVwFBDAEgKo1e7sKt2CiFU94Tpbba1",
  "key29": "2v8K83BmkGQ4N6aFZhUYrk6rmELcioHkGvFBSpRcBt8giBwGrVgKk29W7iVPAgkR5nYtV1deB84Na8zqxDJYKJwf",
  "key30": "5CNZD9PCrAJP1mxAjj4N62R1iyCCiCDaLELDUzwVUCxtpCs6MZiWakwZmBEJ2cAyydnza8cR3uWzvyzYiUdhDi5e",
  "key31": "2njYxSwjTcNCgR14bpMVrNMuQNVo3Ajf5G1QPmnGcPt62wRwHP8Fw19U9zafhHkJZvLBwkeFyo7W5r7y9qtw1LwS",
  "key32": "3yWHv5reeQP5F9XDgiC1nYpuVa9uUsM5RHZis7K1raMqTa2iyhgKB67WrMqvHcArccTzGkuRaWeijKepgkWkosZ5",
  "key33": "UGg1gGmxtphDcQ7kuZNgYf2HNgykBMaPp8kax7Guobkk9FsH2WvmfhqPeqFL8HMiQVdbrBnvvKpJxedwL9BRjqK",
  "key34": "327P5k8rtzmN4sLf8gyat6ktYCbpL6zk6J4tEuEKhDsssYfBLaGxRFHXZUcBBbhhwR5mnyyNt5Hd5VhCcQPSsVwJ",
  "key35": "5o1vPXAuWRcKnHCiJKqe4NrfVAgjAhXACxAJaY5nE8GS1H9ZrD5UhsiSVn1bseGCTA64s3zxJYkycxZ4GnYGTkSw",
  "key36": "5TmHnU9DzVw3j7Nbu9cguSVe9y7EfYgmopWBQ2CBqStF8CuTUDKmxz9fUgtTKXU983c3H71sgrMWSsJSgpfyxCbZ",
  "key37": "27CSEH57y5MKFKuoDBaEPaVAqFgxrbLy2Sz8m3eZ4dESdMULtd74eGxVVmT1T6jtiDAV5GABUVDPZUzj3YfYGeZ9",
  "key38": "3zsYn8bcEkxejTUJmnWWD8JqgLcY9CMDWtQiRDP3qzdhEQjLDr5ayEWBrqhe2KU1XYPvWDXWXUCuNnFDZtd61ExY",
  "key39": "63gW7Mo2rwdsNm89wMzvGfTW1xdSBaNQzPATRxtbEZ2cq7pPwZhKQUuqun1QfizDT4Ro7Ru9m8Lf4uPR9x6y5hKo",
  "key40": "4J6Xobeu6XPBtehCQmejX79n3m7NptRmvG3iKgbDvYRATBXBdgXiKLMTmHcEUYk13evagTRfUDQdKJeFMUtVzi1y",
  "key41": "2bh3CbJbDEweHzTwJkqiTgaStbqXLzXBd5K1eNyb3UBvbVkyV7KVS6UHLZVV2wFhhzXzmQW1FEkEyytxbEq64oUq"
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
