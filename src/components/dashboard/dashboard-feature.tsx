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
    "2a7VLm58Sm9NqRaw3CYzNhYtGUNCpLmqL8eLeNa2n3hDhDVrPNbDTwPzSMsPup9JjGRKX2seEmAohDLLBKJsay5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VXAwZUw6PaUYpwHFvkEk5ERvdxfuwL3FyUwQj13Ze4834cH26PexdXpZDmxV8F4Xg5Jb4Jntn57oRf5mREdDGn6",
  "key1": "33K8k1jC7oHktu8TX4rqDtzjTiU7Vh42jK8eWKUyMtfVnz7FcgfJ2AQXpBZC9uNV2aQjPSrFbjocwuAGwWK7nfw7",
  "key2": "55mWiL9VVHVtdjaEzdsPJGPq6mPsj9xyW5bufQorCTE9mzN3Ls8vecLnKNP9pFQiR8fy9R6FrQdrochHZbYcY47w",
  "key3": "2Gv28vMzv28uvfR1WztNkjnv6ddgHcsxzuia4RmwegoqoFUmSDz7jenPAdsctuCWwfJSkvyGACLtyZZxr7iWsRf",
  "key4": "2RDgwZbcDCAFotREv1JzkEGTUNb7FEeT8wV19VS5cbcn7EjGdbLNdkD1o4UUvTwCiMUPvPFu56joviYYW12b7ouk",
  "key5": "4tnUYHfvXBBLiLBgvRqoDQYBuNc1zE5UrMTaKSkN96BeFq9zvK8TJwSMnbDMGhyFmfZsFpCMY1xLvUF2ELjHuGsy",
  "key6": "4prKa6swn3modG1MDWddrMgPE8TFiHLNaU9UrSTebKE58K8tWDG7QWk3UJ3bo8GQyA9dE6y1xCGJvJgxCgeey24G",
  "key7": "4Bq2EqyoAgRWofcyYHTyae7neYhijJ2YUjhsJYNN4CkJaSk9ET5ZmEuvoLXBw9wpyPPzT611rWahUKEyjaz6F26y",
  "key8": "5C3YheogV9hKz5pMWWSsNBuQCPTBYHfxxrNvz81wyGBucu1YPjzzLpYwucWHJmZqmkgHGdBjK3i4cAmvmz8JRQoh",
  "key9": "2m5Cw1zTt69HaZMTfVFGyWVSb3SpLrZf8mmHnk3zXpWgTPfrF1noLRfUbei2PQqf7fXWSeT5oEXzvMQE1U2nTG3r",
  "key10": "2nLk6odg4C4WgeqBDyp8HkEQ3NkeP8F3qdVBSBKSWFw226p368VMJJbFXgnCfomEUuu98L6Hbxgn1dy8UJACtosS",
  "key11": "9wKsvLir9efr2aCdXQ7ydFsbBCGmd8ab61pz77y6eEjPsBpWBhaMcnBVuHYnBGFHiuiRJkdDYRdLhdgJZFupPc4",
  "key12": "5EmgZb76PiZRcw6Xqp543KisFfuYYtrHmohdwMJwXaqjzAq6HM8robmdDNshtYmnUKJFj2p6LB2HYvrDU1VjYSxG",
  "key13": "y7C7D7cyR7r8x89mevVEzcuJs6ntdbgqCRqidBAB6ebqnmuvToeXQL1HZY9dMK8PCUMWrCP89v7LsP9nDcTWi14",
  "key14": "2sBGE3RXhoEdj11v3eUW3qwTbqSj8ENrUnSXSajHhdDodNqEXnDXmgggKNMw5mh99TAQbgXvj3AxLLWe3DDqVXdM",
  "key15": "3bb6Qjb4Wv6htfZPju8XChJcK75DxvZshuJ8skwrLvWSxJ13ZQZLnVhXhdKdMQXhkBUywEPe6eg4fHcbqFyVHDYu",
  "key16": "3WDGgSDXRiDexEG16y5jEH5TVVfPvvHRrDDae1i8TA7sQkR5zRtZCUN2dhKzHbLR4fRtRHREkJ9vP9pJSAocDosT",
  "key17": "4zrMnngK3M9V1bGJmRqHw3d8M33TBF4G8wDpC5qjKAKEfgMd69n2L71mZsuoiQoj3mtRz5xYKfdPeFoC9SAWXsfq",
  "key18": "X1hxnnPHXK8ZKbTe1j76DR5HbbZb7fjnLisnNgteLXtRnW9bdKGjGt3nVREYNwF6q41paiz2EJRXn5JAiTJjHzg",
  "key19": "2T41UR17QzB3QfWHErLd6tYSuqdswBSUSmqWZdMRXLzzdTFpGEbk9NviPCkKkmdvFKpGLAhwkXQKYA4Lftmj6SLW",
  "key20": "3Fu492QyxfiGN2A8wyXrGKcB1p5fvMZdtKhDeRbJcDu7iBYZ5ybhjXftrpQdbcnv5cMoDTfDgpUjj1ZRPGJBLNkz",
  "key21": "2JGc9RtKWcu1otGfbUBoKei6exDcWCV3qZSgTYrKwAP6UmY86ewq9rFE7ud6vErA7Hrw486Dswc7di3fHocpHUTi",
  "key22": "5kmhckx8CXAYvLvf7vVzYEThb1oJYe2yCNP6AYjeU6C1Y1dkUBWVWnAUkfKJrcSsjGTy7hCJEvWBuLeM4U9KpBu4",
  "key23": "bQGX85a2JwBt8s66gnBUzFaznSGjjk9rFSuwRJQVDWyqzHtjAazzT6b44AYaoueakiAMqjH6JN9mbzoMujM6Aig",
  "key24": "3ZYGutaDAf1Sjwq7YijctXe6KuossYoinUv6S2Dgzj3uPfeGtBeWNEybJANTwgJqa3YWEvnsiMpLwcx62MFPZj6b",
  "key25": "4NcKT92tUv3oyuG8uYgvnPwvJ12aoAHTAcSNFic3jNuVE1GTiwcqUTBiCtethFgvM6X2fhJx46m2UCgb4nMHFAXg",
  "key26": "jGs4d84wBfGN8WTnwzR6wndu7b7yRWvRYopgxYTWXG1PD2yZPtTYVTLt7Qm7z8poikHmwM1KWUgoxVGf5ibDakU",
  "key27": "4gkpJqNr8q8GXHLp5aekgkMEsm3Nx4aSbLKQU1fbjeAHeLtsWBD8jezgG3FPAxoMXQBSLKnwt2bU4m5uhJf73qKc",
  "key28": "5B7bC8Jcck9bboa4hbH3ZQUMZRpXSQXoTEPecx68tQGhKEoFr2rmiNEbEu3QNcksrE6vJxSyqe2BPownKdXF4BLQ",
  "key29": "2YQumRRi5Y7u1Q246cC6yynCyrX1pfbM21wSauzuaVTFgBvT1E4s1CBczfeAY8peoGgtKfiJq3j7j7BQchpZzUSN"
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
