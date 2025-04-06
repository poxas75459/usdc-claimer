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
    "5jQGfFhZ1KLbLWA41o75vaksVRTpPL5p4qAk71AqGCy3ZyQ9ZZvq51bxrufasYRCPLxQpjA5ez6nYEXGUAQ6YStW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QsEpXJhyhwgMWoRyFRQdDwicuBYPYuXTzrfkLVyVZyb466FjN2EDffqxuScnZCeCFkSudSH9uNXspZGmjgdjvPz",
  "key1": "2WaeyigzigUUW7rSYSXyLGvoJeLNorKb9tS7FaSuPKFuCgby5nC3ddyy4HwUGfpyKyeAqSo7S3vYvcaU2rhpDkKc",
  "key2": "3tQXEZutwLB8doRzs8AaZbXzMfFHp9zDUPxRVrL1guqQkq4DUuL9isctCJMNkZzLSca3oBF9FVQJX1zeDyoSh48C",
  "key3": "3yc3K96wmH3QhhTufwQU8gJANEUgu9L7Cw4R5b97VQ6Bwv2EqrpDTCLLEfezm3tReCBMojzSyWU4k3h2mrDi43Jc",
  "key4": "63C6Rg1VmWXPEh5iNKk7e4TVy4zJ6FdbcrFCZj3xqeL2wwJ9hAwPvifDEEmy1Xrqkb9RfMqvuP4jqE69pCeEpUzB",
  "key5": "Uc95S5pkrfhKYS6m5oMLb5MBXVwPKzQyoDRXzYow8utdb1wZgdFSsirCnrBrLsc9Xbbfk4KTST5Dv2YEcVhk7fV",
  "key6": "5dVSVvwAxf7HJBdXUGGvYiUW2L5mCB6dLe7XL9TKSfBkKfMANfQUU9prYGbsFQf9Sk6HxeCM1qsPRhpYbC26Em4B",
  "key7": "3qCtWGESNxE7f4mbMiFcVESGRvnSMdUh5NSWFQESRPahjcqFKVFrMbfX5UmZJpHy2nCizUv5463MQKP4p1HxdrJr",
  "key8": "3SqVfxX89zbZqrBNQoybzRTpU2FQFvcsrsjvWwPdqWprZd27moCaXxSThx9LJpXXR57X2XYwfde5RGkJ7L4twj9J",
  "key9": "4r9b2qYB4wesUFUNEorAjyz4JgDdvnzrk8CAkqxxVvR5s6HPmnYWCQWBJ7iQLepx5zH4agd3BxL8xKaKVNXq5Hj4",
  "key10": "5j8hLwbNk4By67x64AJ1nP68DAMSgVQq4oAhts4h39NRfru7shSrFrXzZSXVsLYEjJvLCXWVaomFSegD4Sk6CfJz",
  "key11": "344W4h6UKJuF2W3KuLwtBsq5n7UiBzFgWyJZtEADyDXhuBumShcbxvBeGRSxAJfEHHbNKcfvr94rkjJ9P2fHV7Sd",
  "key12": "3nQMyDVbBJRNp6PkTJpA2jogWGSE5n6JvEYo9vS4csx8VqUhzUFkxbzhgLJqqTR4bVvrU51QsQYTKxzGeVMELMTp",
  "key13": "5FLU4uZC5cmC3J8ma7kMqGesRgSzroweEekJwaL319xP5mngZHwupgr9w15L4t8unLJHWaZd8doE4JGb2RhYreKH",
  "key14": "3HQEGjniLnrBgLD99dCxxET31HYgbrkTTrJ1E6XAv7TEmerPhDMLx8CKERX7RrtgZ2zSyBE3h596seyVuXVAK1F3",
  "key15": "4Ja7pVtw7D3ToQmmWhHALxiwiGKPgT69ZNJqCZs4kncFYd3CvaTCQUmM3HbgYNLwN7cPE2AiSQLriF6z195KtUoS",
  "key16": "36ACtZJSMcxS9SAYjHebQe7d8UWLKXVyGJ5KkVrS6212nA4TT36GgR9p54Mtbp6n7vrce5TPHRJd55PEzpuWHH9L",
  "key17": "2idwY6HytbZeNdcRFS6DLzuYM5mwvHsvMyrDaWUenatkfZVyjRajDBMTmdZ1kuSBXxNMxDGtPasaqYAZkPwrYATd",
  "key18": "5435RPeSTZ1t494uSTFotLS6WCMV2CHx8vGmcMvTpTJu2pazcvemky4UDNKSJp2XYLEpuCXKhb3NpKGYRPxLDxcT",
  "key19": "3vSgbes3krbZoiQ4WW4jFNeAooNg8U4PvevcRoSophDbyXaHWWgg7Dp95wCE3ZEtLDjohJ8qx8HE87ci4YkZptAj",
  "key20": "5W5xrRkN8mGRsLZozJqSw6KAVM5CMcXeXSF4svTPae7aHPGYMgyRYjgMYVP6kwmnvztPdr4zh2uENDYPZZ6A6wp7",
  "key21": "4tESpyrsLGjQKcbYULewhK27SoMiZUfYTfPYSZhYXXjY1aPSPkMa8z2SGoZpJuG8J8sGEBmfJpvyuQzVbnqs59e7",
  "key22": "2DmXYgKk9oo4QET87uKZNe9Fv9uitX9QTcdGAJ8wZFHbNRyyqEc75K3PAnV6zWEfeP2KUrHVUW1dBu6CJbsicTZW",
  "key23": "21iFVWsgfhveLDksz6PxCuQW4pgtP99WZLWfJ2m2rUN4MfF216r3VVH82Hjypi6vKAh2xexRXD8zuxoapodFTLQm",
  "key24": "m8CfA2K5BJkGKQ3EWCtah7kfvC8vUGKfvrgx1p51chkvq3XxejQYUo3oGCnf4Ws2XpB43qbok3zmMmE9sFAuLaG",
  "key25": "5ZnoFoPvcjvQ9xteLPPgFghFzFCNdwDs671uSHPk9PLcnY9VcaNmSJWJFuLtY1dQ94U9imtZLrEDHfcZcNWcwZ2P",
  "key26": "2KztZqG8rpN9gXmWXAEsPerXamhqWQmo4GYFSSyhhJneWKf4xYaKPnCbtvkMfSCJdqXBxJutWHT6VP7gqViVNGsJ",
  "key27": "3kz43Lq7c2sgaJnmis1jt6vHDnKpjTLZngAQ2bJEtLDUD7j1mWbBkoguu6srxLyv51JpNW2NLcZJRowRrzMMUUyY",
  "key28": "4pdKZj5oZd88CkCS5cLuSQJxPJydidwWmNztJCbh4ikctJu7cCek74yNNUPzJky1h3pt6CU1DvUTjebNHxMN8xdr"
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
