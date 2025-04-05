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
    "2xHFzYqfkfJpPeQLet8rf4HX8xRucCEyhS6daLhR3LNmiiCi132aWjchRgaxrHMdspzbbtYE6S6yXDJKxRY8Nemc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N1TawN8M2YeaC3vGDzycBkTmxosqzjGiSwM12DNUe4jNtxHNb6xziXKGbX9XwRGvWhDdo8dtR78xhvqGJpGXvnR",
  "key1": "5mpriZKK7GM2XSNC2HNVo66XRJRaWTNNkECrjvemXyXpQCEdyKCv44DpsyUYhiUVHfdgbwzVJZdLp9BukzP2s97r",
  "key2": "3KqGN1tHxgbS6Db3HTu4u29Szx6mCP2J2M2ftUMjVvDFvkQvzVVXAkxBq7h9ScgYuLcsyA6wB4fXGs56DTRLWT1p",
  "key3": "ytgY7jJNwU4PFtvQNjuWX3vzo47rJNhaZvGaCUsVn13npFhGBh7NeRMG5xjWpccHEH8W7gpCzmXLuHTJ9cWQdty",
  "key4": "2zRtuaJkUPeLwmxhwaqjHSw4gsoszFWDo4HjGeFRrpnBd9cqMNFTUCpEVMEJ9t9shEJWeLohtpnqQrpJHa9oP5kP",
  "key5": "43ZTxjJd91eXuZq3mpoZwk9sfCSj34rvnvZB3a2B4nnJxdGCyqUb1KiBiCFPVpHyu8PYgSK8WBtTh6HQ2csyF6Ra",
  "key6": "uzKnWAgkHrB59uUJS4uHUrGJVHBcYg22VE1ZXkxNZsNUCAot6gKpg1uBGmooBb5HmUzteksBfsRj7x5CqD9MMrK",
  "key7": "MRNmYmEJfjkzGepmhDtkVuiDcUyEmfG1VtqR1PutU4yGaKvjxs1soXdWjWM3FShHkt24oQNEFWKycdkYZaDxbXh",
  "key8": "U7WbubCQV585fHqafZvULeoqzHK1ve9CWCJJBTtPu5hpnmriQJ7sc6F3wD1kjs2q98RT5X9kTGuYGMWLPksdVoh",
  "key9": "5Z3T6cjCSob9ywWzMbsDjMKPkkm7ZrC2FbfjEqU8pp5DWDSMc74NHAADsQ1LpUY2GJ7D2o8P8v6oUo5BKs1Tm8DH",
  "key10": "pTAGr37zAKEr8sqJi4XDwVhDJ4GMWtB5BGCk75jrj4Evb9ZDxpa9oc467LdS7hHvRSth8LeGJXD4A9gSKpbjNk7",
  "key11": "2565ihoeEHW3kWiPPkWxGGF9dtLJ74Ae3getbVx8UbP2BkjoFceqqJjBT2nYpkLqAUppVEL3mVRWFSavYwVoZzvD",
  "key12": "GjctEjKFbEwde2a6FLpy8MMVG9rh8XpUykVGMd3WGhvWnGrvhjaJKu1q1jqcEEGWtZtG749b2dX2tD9F1pq2oa5",
  "key13": "cLuZFF3qxjNBSM43gnH3LqvenFtRvApfvjVurCtyQZgCivqJooBz6ww42WdFm4f1TvhAt1UWxUmAVpbwmHRLPKV",
  "key14": "2DJdaUWX4reEsLoWThTuc6cbX98ySKqzBfGjShhAgewpvj9C5JiuWdFSWRp9YmkeFcKDXDVnyyFBKJqMstHw8mQ3",
  "key15": "fxa29rJmfuoLJ4SEFaVDCU4mGcUZpbBPcWtH7bezY74tpqSCVecTumrMWvPZxiK1f3z7uGBGbYkDRYuEecSbrDu",
  "key16": "2Lr8b6SctkAP4bkrpXdPwbrejyJ84i2WgWUmeYAettCR1fAXAybKdWnp2fiFE8cmHVWFWV4hw73QwcFuiCWDjHz",
  "key17": "5UxoQmn1qpC16B4TN2kQDZg9o9MNofTZP3TzBRnJ9EqQVHb8hMXns7iNuHomFfxnYRJV75Ct3YCCXitKgTHWfYR4",
  "key18": "5PvXvrhiosT5XjzaSsxF6NfSiLdC5B3iwzxeLZRb93888m7jqf1z7iawBEB9cKFGjMm7Byvgkt3yCD5DtH2jiMXJ",
  "key19": "2czaCcbosUB7Wbi31hzXSmnEE7Q361xptNzSz3BjkfSCmQkEK6jA9Ycz8wFAUb1CrXi3WvUTmUrw8dan3eqfMfhn",
  "key20": "3Z9TzQFyrT8ahR3cpDeETPWokprefwgmYGMrRw3vEpHHQ3DF2Da6zj3GjKfnC8J14CEgu5CXaqyMtCqBKT7jhpeN",
  "key21": "2PLPXwWCV8mYJwsxLjVgp4WKu4PLbtFXTHbbjY4g9j8C456KbRv6sPi5ME1DRkjhX1h74XSZWJAH6h1b2WTXA5aC",
  "key22": "4UL7PmNFzpLpJY58eUdUhMWKKbvGxYX7fRMqnKcVfezTJsEQs8kvY5FXQyknbQu9FEfSiDCWDuMmRxVnTUffbirc",
  "key23": "3qbVT34oDuCpYAGUKS8wDN5MdRpFz8SgaC5EcEf13xdaZ5KTxH1A5mFSGVNkfLxm6Qd9E4qy24VneE6ZpzkKMgTH",
  "key24": "sVeLCTaFc7sJmAdSVPD9wdHdXq5ngswJCcsaCP5LKYXVpwB2Bby4DEk4ZVfevrsCaMpgJTYMj2JSDkkh4mQL8sX",
  "key25": "4KtCzfXdDBCNXeDjTGGKKFF3Z86X855qoVLQkyD9aLwZhKYWxYrqekH12cdX977F92N3bZ3iisk9EWJEqZVZ579b",
  "key26": "2N68dVJoiDu8aUmFukuUbZsRPLijL3RXnRgNpgec6mYKNoVqoDieLLCYp74bSpMCXjyP4NpjVSCNBnY7hw573Fhd",
  "key27": "wkaxJzWn4dU2jsjxPjoCz4rP9ft81qCiwT381EnnLpQNtjgqH1ckBufkzh9WMHzg1we5TSTdWt3iPyseyCLTML4",
  "key28": "5Vtyx6MKeMxwqJZWauHoYL68SJF2xmz36QmSBEjcgJBLTbLDNtCwT39Q2dqj6CqSLmzfkQTCvUqQbfJPFPRwSNuY",
  "key29": "358N1rceA6ae2cHGdeThVVBs4bBLtLAUg2UtUwjFCAYskZSLapT7undtUrAmzQZ2kNu8bWakGHEZriEKCxPrsFTu",
  "key30": "98yxpLGwxw2eGZzA6rRDA3xDDrbUDT5BfKtQMXRaaLPLiiKTfgTo7PY6hSQyHKBcQtSsbzby8T1Pk8jLKKMTNMB",
  "key31": "5gutvfohY5s4mKKjt1gZncMLZVq2tqQQqAs64cFCmuDEQYT9XEMm7P1JJY88jWghEEVCoTDhhjqKTWfKuGNEMcNt",
  "key32": "3oBs9koiYVKUjRKhVz8sBc1CctdCHRcDPcP4WNynGqHre1QfDoy6TP2Eps62782GZoPEKLJFVhbLGoJfSp3znuUZ",
  "key33": "5SZLmcNQxdFc35oKNBHshQizz5KYLBt3qM23ZqXnAELtTGmdW684fEnweVkgzQG27kenLj45VCXEuJzFCBVMjcvK",
  "key34": "3ytfzms34jA143qXTbGLBvuRAWhLR9YPjYc6rkL3hxxFkss6d6aTzggVc1JV4gysaD3ngendbj11k5uADfXTBKwv",
  "key35": "5BsrFB28o8vGWxTCRfhhYq7Dsb7F22iTsX6eb8p7db37umkxxZmmgTZ4XDBBGvMxN6Zr6NKQcmxHz9t69JRVpDZQ",
  "key36": "3qHnF4kY3jsguYyCcV5uup5GroYi9xEjZnRuVDfLaTB2kdyNdnbVyzbta2cM9Yv1Lsy4Ua56qJQrwSEXrGS5DEMt",
  "key37": "3tx3vrtGLpbTAV2pdf6KbpB1GZ361XRuoS2z56F29TpUwr1KcuVAK1AJZ24fzPPD3D9hU8nVS5ry2bpzemW3E2he",
  "key38": "4mik64XRL8GNqV9XUb4kyzp4dKZrHF99qk7EMesE4vuDmNuyakjXCB1LqFL85E5AVGK68gA5JKg3vPn1e9RogA9e",
  "key39": "4kdH6fgPxUS2AK7gh2N7Z6ds4DuLhpPWqx2pQpRz4QeSDf9yNfDFWKrkuC9iEQuwjMUcCGjg5brovEUQoXVjkCjo",
  "key40": "23vpM1MgPD24Vn5PKQcdcjLkxkBaM6BugEgqwJWDHHA7EKPm2uEMZFEisvZcyPX2TSX3advpvMep4kXL5ufVUrNp",
  "key41": "Z5jegBJZPwM8K4pYMxZR3DL1CWZkxtqGy88w1YBL1B9WCznZ84aPsLnv5eBH7wF9DVDiMcdz8TxMwPKvvzeXuEK",
  "key42": "1d7XAKyB9cHzja6sd3Hjtt6VxYXnt6RoYAYxepLzkvsBZfsphPSqWsia1Aaqnuzz4bgQDUq44QUy62Uam9qCn3q",
  "key43": "3Ry64j7DUmA2swi6eoBe3bVoRsk8WPsVWPiXQYtQvWxL4aySasJqVHswe86vduPX5q6c9hkPge8TMxeMM41G61FL",
  "key44": "3gMNZAHPfLyjzLazMsGnT4U3jKqbThga2XgZhNpiCQjJNgRz5cWthU6AmRskttgrVkpAPmHNfeUcgsMgC1co5R12"
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
