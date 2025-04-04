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
    "4B7k2tiy5qbyJwPieu53KMHvRX8ytj1nLciUfkJt5m7qdNkPwaT9xkby8X9AZYhRxzfeiYg99Gf53xHVmtm4UDEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mRQA1NaRdPncgCHAga7YbYDi6gaR6AZTsY6erTyofYYB7rekFqPg8Q2MYRBvqVX8nt1ti5ZZmbmKFpqxNqRg3DN",
  "key1": "3cd5pJT41YvEbZUcbxQujbqWSAyf1YqrAeBmEiQ3Tug6KXv9yAWuqMKqqD9AUmxVFAcYjooNJ945m2LwMGGfoC5m",
  "key2": "2TPLWCtzaQW9WijMWcXvE2wXxqxCUy1VxTDuDGT8CBjeWr3BNMedurqA7XHDtq4t4SAYhngub7EyvMy3eKod41Pb",
  "key3": "5Wo12zQ5Un58pUu4ah8CdeWS17WnbTbrXXE6MEaDDMXT944engw11ojCpytEPAc8iZ6cTEKth3a5inn1efebEw1s",
  "key4": "2q755xYeuvob8txR83v24QtmGSDmq1NGNmU3irmzFhGtx3KwMmmeKgSfEQW3N9AkqpGQA35Fwkuger8NFJ8w25Rh",
  "key5": "3BqTc5qFnhDSuCnewcQ65zDjb3UpD8RU3dUrHkhgBMSyKmbjJiKRJjXT4LhRewPpGiy1qKdmtMf6NKDS5tYpmE5t",
  "key6": "2Z7dRatpHM8iUNkiwMyM5C8GFdFpyu5PvJUiet5QyKes3HcBGH1WJpetrwP5Csf1EMQjZDqwryYQo1Hg653NNGrd",
  "key7": "2in5Ha6MDjN6N6Wk3Wx63YVXe8JgfeZQsUc6b6LmyMro7taCEGd8goNrYRf8hn4GmL7Jm4LG5NyMcmH3a74468YS",
  "key8": "3gRvNt1R8gG2we4nGhtQmxsdjX4scwChViX7dphzsCyELQEcBU1CnrS9SjmSvcyknXRRwEVwFzwjwvFc8xqxUQL3",
  "key9": "5Fx5GPC7PRDMmNd5cMQP21oLEZiPoKjE5GjRq532YzWx2ZobEE2dcKiZHzyu2q13rsEMj8RtWCeG8RJzi4Xjej2G",
  "key10": "3Q9jvP6S5bSXMQvTAqHv2yKedj4LYVTM1S1ZcWX8aYq9hnCZzUdNAb2GyD91hZqJpoBH3kA2Jkmp2UB5Tzxc7Aof",
  "key11": "2zgMgS3GmrbJC6m1jakSCS4sm3KP5E8ZdVzPxRWdQYo4yNJaSDcXUAyTbPivR8QSxHGezT2LuCCXqxjqWPsr1rDL",
  "key12": "3hmP2pw6D9Hq9e5zTp6KN55VbLJS7yegLUYmvBZgM2wssAVi9f6oSUcS7vk4jaf6XcCumWGkvXDSzAnACRtumTia",
  "key13": "3RwoWoTqmsxAzg3k778iiM4x8NrNyW8pzY8TmUhMd58xTWKD3iczMj9cxKX46itMRhduKpxgcLkY7rds2kfaCGZ1",
  "key14": "4xCKpMPQryCAPyc19GeNjhDa7XHfQBQnfcpY4kw9sgDfYnzXYXTLo53KxNCsXgULpRqdyBPpausagGnktJetaDv3",
  "key15": "3WnAW6pUnEA68N388eWfEV27fqZoW8KXxZNJfyvBaZ3AuSk2vVwjcaZjb7N8pPsDQ1iVQS7qLBhsTdhofNMYYoRC",
  "key16": "62R2PvfWSxZA4f5Zrv1S9GfxZXcSR8dj41yNBQpz5V6TozCKGfbUEsFDUuKFYJQWeHGAgNFHiZz2ukniNAm24QAg",
  "key17": "2cH7pVUMtFvttjTgVfHKKztWVLTUydCNz9UoireTjFXRbqf3RYVqYcNcZD6YVg6XbpeMG4tHd6jdfLGv6DJXTae",
  "key18": "4xMoxdZpq8q4SWm6ncfjE6rb9SvHY75RRz6q1TBy1XFEghTVqnXV4L9zasNiuFinLCr7ioQ8mYmAsa4r7yAfrNMb",
  "key19": "4ni3q47eDh2dv9Mw1r8m8tUKgTMaXHszNwG7e1ETmewfoBV6MmN7dnGV2GXYhLd8AR1H8aW9qqokF4a4JjR8Tb8s",
  "key20": "5Gm6aBaxQszBHHbgkWYxjuPeT9hQ7d4Md78uUQ9JYX3XAUiT469GV8b5mnFDxVHedTmTfH6aQumhaCR3qifAyCTt",
  "key21": "f3bf7z1E2HFYbj3TDE8DGawXCTzndA92LykLYmnEaHSgwLCaXMY2wHG5kUUxzPkF5okyoSz72xTVdK45Vs1n455",
  "key22": "2b1sNp3qdTyczgpBoDkcM6tChJHQrNTy6joK2Sz4EXiP6TqZen2rk8MriaDtkVbYDb3vCMvmuf5WVAnSJikQ9Pii",
  "key23": "3tH9VWhyhtsRiVVPThGAeRPb97QT1pK4ccEFwV4QE3Rmh4iptghetjxm8qMrEELx5jNA3sFG2XwMQT1V12Mudec4",
  "key24": "2P3PqGNL8EK3gzu6WCc74b3W5KePJPhfqqjvo2rQ8VTJ3Tc4Wmwg5nz1c73C5BJqV1a63xaNipUfqyv5AvmGBQD5",
  "key25": "2nftRbq5i4A4ZsrWJsZdJJ3QbiimiFN2D1uFydGMTrt3TZWyD4jevb7idfkwu1SFgRgHfvrNRDuj7TgkxzXCc3rq",
  "key26": "3UCZovFaQE4QCqafNyBu1KxrkrvxxSUXCpyDxSLKMyDpnLM9SMip4pW1dDFfb7dPQJ3HTpwBEtcDwZpvweSLUgie",
  "key27": "5Zc4tyFrAbRmcXwccvrXnMFQpYL5YanaYDVTZ9DKkYsmDTNPdcwegFvTGPuZcrXZzDDpGYEY7ZrW55wYQ5Mx8gH9",
  "key28": "3fno5svu4uLQdEBR43ZffpTaLWJkdv6BNdGjbgLXx7V6A2jQVFhUMH6xPSTQ6JjMZwq823YKb1sBJkCy5CWgiLn6",
  "key29": "2DGi1v1Dq8rh3bXDzDvrXsftDVDmoiAgf1qybrqqFSoe65WxP5CfGLN56i8MNg7G8vgZ5ukRcCVaMY2vxYkPx5sJ",
  "key30": "7mxVUQzp6a1QHTXx9Ut8nnRaqVo7PXLZhS3Rpqp6V5kXyBN1ZvuXA3C6LK7mP41daUkbKY1vYPvsb8BVVQ449gr"
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
