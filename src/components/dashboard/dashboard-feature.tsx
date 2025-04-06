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
    "4jrsub5xgLa5qJ1wexEsgDAWjxRKhtCic3KVKpfWeJxd3UinynBxDv7Qtr5nSy7YSXTxW1jf654bDwK9PSAh19Zy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rw9dxWTFRkjdVfJA6SJ6nu6GcMmjZfwfVsdcJUfRvADQ5nSpagUM9D3qDWcTNRv5vo9mJHc6uQYzeF5cHperqUm",
  "key1": "agaH4EQ6oSpoHBCgB31tzGUmrYsEP5JEpN8JL4LtVpJsDx7FJdjsN2NASkZnYJDZfRXw79my43ch48MWpgEu8iZ",
  "key2": "3YhC9JK8aBr6v9BaRBJ5hJFUYRHVF1YH2PRgi5ajXEg5Eb6k1W1kSX1C7VqzGBak7DiSGV1R5WrUmJzMCbKWoVqa",
  "key3": "FLQAYnd6sLBpwGRY1xGqBkets41eRikrNEif5a1tMPi7HwLmeSkNhmaoczWGSPkUQzFdDouWvTvZYWzSHtd7C28",
  "key4": "3t16BAdVxPZDexmJ12mzXdtkd9SBckP7jDPYv7K8ot3xwYRUy2oy4ZPq4X4cBcbXdW354Ld4bhq1FjQjeGEnfM1a",
  "key5": "46McsWek9XaVoQpYwgEH1jS9W4TYGYTFGNWxZvQmWRix2f4SD4TSwg5gZNEMBwWTPmDTPTPgWUjuid8DFpbbHFG3",
  "key6": "2xgRriTHY53Eo1wPMEet3qXF1kf9GsMMw365STwiRZj4Hx9vnVcuWtg5r1TfkqL5dVKVGvg4ZdDnyA1YpEm4HtMW",
  "key7": "2sCtJ8t3aa9Xh3m46HF86JboVuGFxhzaLmsy4q3LhX5qNAGcWnJahkZZkAMaFCvHANdP1MTEoQABxgHyghHnvPUg",
  "key8": "5hrSoMNJSdxw9J1vYBPd4wVmgGSGkSPEQm8HJK6TXifsEd4jmoRA3X5mJXRFybYTPNDbTJS7xofBcFzgWE6Jijmx",
  "key9": "5u7CMEdosjF4k8LPYidGHuH3nJVPnnxXPLLpY9wL9XTFTU4xubggg16w464zmDs7qmMd4wrjed2QUvxVViNCR3kc",
  "key10": "4u1F4vQkrRsMRjbgb7EysNv63oTUBtD5iztLPgfVqjiZi29CNH4MJmZ7iKessLvMXNJdD11peN4Smb6hsH2MFq1b",
  "key11": "4f657PR6rKvqWzWPenq8BSyfjQ6Cccmv73GKeR5MoqCDeg6hMvQrxwizAvWJwhN4WnDVQSELaDm4wHWzrMUTRSWF",
  "key12": "2et779ZkC6RatUExks7nvGXR2dkPN1UiyEBFcCLNbtRG11y6cKP6hw22r43GE29NcKQZHNoyiJUBGKuNpqPCssAc",
  "key13": "2h8wZjK7HiPWkXYgZjVHUUGXiG8UdtssvcByhxUca6YcG7vdtuZ6AnFLfPXmH1KbvdEDZTDWc4H5ky8hmLYrgDGZ",
  "key14": "5HzGHXUNACeXNKxfuK5egkxZfhyGzURzsPr4HKYYLaV8CushJnt3kVBGLc4gy7EcpyEJCDuJ1zvXfWQSzQitPEgK",
  "key15": "4FaBAKwxvcwi6R21LkDv4tZ2H9xVXrWH1Q6kvTeJXtvQZg6Mg5G1CF3iMAtfbs3jotvPBxiHVdMr4kUqZG6wANbj",
  "key16": "4dHmjPnuT6dxEae3es3t4sUQRratsMAmyRgotsCXKNKwYq7pqVv2xJ1sTwed3hw6uTTHzVD81hDS66ez4JR6ddQV",
  "key17": "brSF66BjRPy3VhTg8EjVs8SUaHcnD4EgByTpvY4U9LSCZfxcdkFroEEvwsuvTLznHGKgw2fFJV8c8VUbB98dS5U",
  "key18": "4LYq8NrdadN1cFVgdasUrNhYKXrReLSyehU9WPJUzu5x1dxuRzMLTu1wAUpwFPUE25C5Tj2c47n1K6WrjsjLDh1N",
  "key19": "5nuJrYHqGMZuWGc4jjjRYN7E3GvPyzFKPGBtL4sFtvUXLuhhTKEp6undaEVTaCjeGfFA9qJyGc89P8QYqbgoqBgw",
  "key20": "4WMp8cb42m6qZkYr1fCmDhrdbkrAWb2izH34dqt5fhzq3kYSPoUfofmAmETGKyPuVJktfvziaHuf1wEdg8txwh3X",
  "key21": "2Kd5u6vEA5HEVBzMBGKj654QdWU16tXbwHJNiL9GhL2G8xfTJ1zXqvq8p6EJRaYpi3bWzVfSSEUfBAq5qqW5WMBL",
  "key22": "4VLUBnXkdkY2UAYoSn2n8qDb76kzBcTsL33N6ao6GzPCoEBpZ4a7EjjeHVpzrnm5Br4G2vqsmJeVRK6GuR8ZkECW",
  "key23": "tQUHbMYXPrnV2PTXvMoJ9xbyTQUxKZFZgz9d8EpARFac6SonqnagBhemV83hKHN7hNmLgGXAasexYrSoLt4xYEE",
  "key24": "3JcLvdehWi3Ha8S7T5Ms5qqjrx4L5Z4PQehqUqVi1qokufCK6CuynHXUGsugG6CrAy5NzgaRd2qyXgSAJLBgDd7p",
  "key25": "3WsHNqDd1oHbEHUj24citNfZ9utpKMJQPZbjYF1yCSEh2QiNC5AhJLzcZ1xWc199JcoJErGuVJevSAmsuGRmHzCX",
  "key26": "2Gg5caWCYLR5KifPkUPLjm2VFcEBfRs5xYhACYNnGTjbUo1mKFjJbvBoT3TUWWgNJVx9h9Fjaya6xFiEWyCT4Css",
  "key27": "4VCJBUvbBK4NQK2VWCgetfdwYcq8fzx3EWnWWdMZ9HoLX3ANjNA1hFhyp71mmD6BpXp5CPYvZY2VBPdEaNq1s4Vz",
  "key28": "53WhfDsPvYPmyUmVnQCjvV2poBVPTkxB3uWQLJ9h9h76SVGEPKyYxudAgWk9Pmb7o78hxwfRCkaUccGDK5Lp6cD6",
  "key29": "41K9Koc1Y1C4qrMpqNxPfGd6kAixMjejzjLiYosA98vXCfaQqK8o5VsYMawcNqX1vQz7uN2BhFrygeDHZ4f2w1zb",
  "key30": "5wM5QdnYbSHS196wJaYzxwyozqc4rDeUG3bCTsSyk8v4F5RBXrBh8MiDHMC59qBFccewzmmAv1eVPX1gSArK5T7T"
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
