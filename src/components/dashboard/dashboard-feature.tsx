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
    "55NiXWMoaLU8Pr2XpdQAceowCrqXZyzA3Vx5UqeYxhuzP4rHfSZE6cHpzBDz83Q1DNKkBwjA5yZwUhj6mBJfjHX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vHbgji8L7RNKTiPBBSCZFQL7jdL7tnxu2baeHMpj5BMrTq15DSgP9fjUyAfiHvZGUUCoBufb2kdTgFwptR153kd",
  "key1": "2fXhnqdy9kHjtjuvQiJ9tktsU8vKiBkXW1QJ7t5xowXHjBPpPr7cFptzSJE8E6npsXLyi3Xk2FMBenu3g2JfjDyy",
  "key2": "3D7upfX8RSvFzf5n1gnwUsAXA4Q9JJhogevT7tJo7ZG9M3gZFkBdU7yAfQs5r9NKKf6Nqyzxf9SqPekTNTTUHfLn",
  "key3": "5eTSoNA9nAxnnRTpbvr2mFLVuDnvcisgDsJeRupccemzPhcYZQ3d9e5HpCxpszM3VpjVksqQZ1DhLnWLQp9cT1ho",
  "key4": "4nxcJaubVAjHtUcSX9LLouRgEWNPAdoyTnA8xU2BLuA65yvrjy8fRAfJbkgTGKCrFGtRjYfDZfq1SAJpGSpxUj1H",
  "key5": "5iWQ5Dy3ZCjaLxpPtzbWowruL5L7N45C7GwF9GxRZdm1dDg4HgXLtpDZJvyYdf7p3fyujeRexQjvAfBxSFHHeuut",
  "key6": "3pGm6z8yACoF78LDiS8uFYPU5Pq9ZF5BPZAkhC1CGQwu9uqf4VtPdMwm5eNxXEhWKnvSqgE2b4Yxt3J4sFd92sch",
  "key7": "2ZsRHVNCg3zVnh5DRb7yQiWSk24ELszypbGvwFcNzC6Kc83oN6APfpe3r8DJ2KxQA7mD686ZesN1SPDySLkStUdp",
  "key8": "2hnztTv66ni9y2ivVgV3MEiTTrgZtLru2CM3namkNTj5i5Q1apPJbEqVxD8mvbQcdb4SEnCxWJuDZcwpcSiW226p",
  "key9": "5HLQb1YFFquYCQsixNm15ytXV7EQPeUPHyWUwnjg1ZdmXm1vA66zf5AyKMb5fKRFPNweJf9FtCgjvhRBVay95WQH",
  "key10": "4DkdWXtviqQVMoRzi4dZYMTBHRRm3z7kLroEzkpRxVx16csw47Npfs7ykbSfKZ4pfXuk4F33sNKBzi31ok9vuVi7",
  "key11": "4qkuzp839j74ZHmFY57JHeJcuGvCmT7FH8iC2GzX8ZKahRDgS655suYzWaY64uUfEeBYxTMa3LJ8JJZYmEeJbTqp",
  "key12": "2kkxd9XmaVQDVEUvK4XgUWwmS97n2hsLU3a6vRgkNNYEfpADYvzw1hHTxmAsLoo5expu9hPQ6RYitioExZT4AhME",
  "key13": "2dmL73XbNyZZsA5TsPcuvriwgcxArx9fcbhp6mxco61mQaghfWKMaM1DVV7iEBsbe4WUK8MkN5GMuTHE3vpfA9k5",
  "key14": "3MKG8hBRj72Loi1NQD2kv6f5mMU5zc9DfHLf5vc6xVUqNMBiYJ8Dwuv3rawW9wqEpSp1X2rpdSUs79Tmje3rUDKL",
  "key15": "5TFcTe7oEU7nqYvSoBJJ7qvxFonvw5K2ckdmWbNZcezrgqvZ4NkUJDhwas16KXqehgZFh943pv1paAyGwLDQtxU3",
  "key16": "5dhHxc2KaySUMLzNXQv7Q3cinsD1M3V37ccCWWrQJAV9wtLifpfLk6T7MuhEcrB3zStLKXSSSoBJETx1hLShmkHN",
  "key17": "5cLyPUoHKtxhtLgESzRkPykZLxMCggfcdxhD3APGpkCjYk1wSesTr7orEFx8Tbu44GKoD5t5doXqSYAB92NQFnCE",
  "key18": "2zCSjQycYYhZzf2EGc6NFCPSrWTwUcFqistNi4cCoeKZUczUV7ZWmAKH4Mm9NG28XMqfLefd5FoDwyCc39w8AfRB",
  "key19": "2zz21mKaMVDvQmYi7Kkc2UvLCdqSZoECz81uRQ1BJL78gWPCFLayj2WB6uNdEXaNun663uwgTjFzYjZnWPy2DRNB",
  "key20": "2GSgfuEFzjYPCtCYNv1Rue7ohtzS1nY8XEHTgJE1fEucDD7d1j5nkK1ViHQRPio3qHxbthKYNikABSHzxgGmNaK3",
  "key21": "2egVsRumwVbbXPwKqdmDyjfwALDgE2qEB4YkH5hhCxQ6EmzByPYQvRJNpM9cLGhGxKoWdApPjWUXVCfBeo3ymT5A",
  "key22": "324E37GphoRNQr2h1zzyZBpvWGyAX8NRjdVmc3PmDS7T9FifbcAxNuMwaUNRXudPhJwDQimzt6sZz7YMHUJuaart",
  "key23": "4ZWP86PKaaADRXz8nr2Pw36Mg7NjJdBmYTFnV1MB6NkkukonjhPfJBeqfZNbdcx5ktRVb8oAPsaZ7Qj9Aq51VVg4",
  "key24": "4y2mj4Ey3y5fw1swiqB6EA4paRircoTTfSsjgdMLTEdspHFmjeX5vza8h7dCyna3s7RjuagQUeMG31aUZXNkcH9k",
  "key25": "48NJEvFk2Yay5WTG1ZrupUvq2ku8aFrCxQpbXoj5AL62ciUJKfYnLFshX36dd8QVr3SNsAgpMou45BFPkzJRUCop",
  "key26": "1un14V4SXr47qkfWkEJC49uJ4xBZV4MrVrx8MNVED2ncMfQUo3qtxafPnTYbavZvEckud27mJ5QMX9TtuvoFW6B",
  "key27": "dJu3sVF7vKjjSSKEtsjZCzUY6Hwssed4qrgjZ5g6ADhWxFuSAsq45mhSPuKi5DH1FinpSXuFAZV5rdUjWMH931L",
  "key28": "3ubzRtcnfFH42R7exheLHtZKsPcEzqrgjdPogNnaGqbSCdoGe1unHgbAYbqYuRPc3pCvyFpXsenoLByE4FMEvjb",
  "key29": "8FPrX6oD4bSWrfa9ipd9TSnBx3hhBgUJnyAXiueAjfkHeitwUysKFDDhQ3Fsi8eBASCg8VjUGQe6Guapt6wStHe",
  "key30": "5KjdSSjNSuMj5hDh4BHU1PpQS6GyYW9cXHDcrq2sBwzeNNoM6jN2te7CqhD4jzSVzJ3a5goDJuaDE24pV4upBi7A",
  "key31": "rn6jFXn16aZvDCdCKJX1iLrvkuN5t6C9rFnt4YsEF36WMohZpb3kBHdChmPQtPGTwcCwSuJPNs5JxjNhkDuc52H",
  "key32": "2pe7wf1yzJR7hhJGWHjWgRHrPJf91wNaQdL5cruYpSavy746YzEGSdAPCmhMTGDXR6Wz8ovaBJSC64ZVVB5vdayd",
  "key33": "5in9bWCPzYogeoydtm7Y7fJeyVCHznowEP4mqvCLHmJiK5H2WZmQw6ANXzkFcuqxVZ8wLhPqkExiKN2EQjRezv2y",
  "key34": "4jc5bCppxVsgcaSqesxkR3WmJbp2owF6v8o9P9FCwy5U4BeZLR9JuHxPaUDhVkbxeGx6U9x3adCk13F3PU6kgb6z",
  "key35": "4xBvEPxCaa4TLrJrbS5WMRzWnD6Uda872xyDcdFQ7ogaA3eqCEz4Nb2Vq8RRN9c2pQAUKRgKzyXA9CMcN7CnMPjn",
  "key36": "53Jjpt9sGZHST2h9iBReKip1zFW3zFYyWxJxiPEuvvNgEYgtcs2G35PQyDfufZiJdqwAfDEihMT5zFUZBsf29wbX",
  "key37": "B6V9VUVVR6z4br7mraQuXH84TC7brg87sjsqJCSWy8CUVqf7F1BL9eH2PKEZ9y3XAzPJ9PVdCWmGJv6iCEVWKek"
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
