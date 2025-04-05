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
    "Z31ckkAxgEuR1qxfD1vqt9DDGnYiVpCr8hngPp5LCtbaf7QuEUXu9oQb14srbrEu9GpehFSKqjzLMZt1c4vrHVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eyULWkXrTzXzcHbwVsDJDNiUyvMFV5mRVipNfqt2NfzZENJo9Zbwq21k5jyeq2ZESBLh7wz6JvgiuKdt16UPtVn",
  "key1": "53nGghQDKQgPEZjvidPNpANWuS6fB6RCLGgqenmDCKJXScgm11wcTdBQs8PBBrCRVCPkCiNBgLh1GMSt37Z8GEYQ",
  "key2": "5Xis2Z4N8dKY5vFeQ1HBVuFSwSMQQjQJBbKmwC72WfM4UTELfCmKbJ6gk6gixQFhxySW5vcdnPqoJYS7Z2ALUdfD",
  "key3": "3yVtAXbFjYEM1hXUCRbPn8WcCteRbGEUsNU7pZcpgzRBc3G193ywWARoSXiPuqKHDVn42tMB5t9EPCUad4JAiLJ9",
  "key4": "4V5HvRvwM5TRgQFXHfg4aoFc9cZAwe88FoyrLA7x8SQdKan435ysYB7D1Q9KMgHVhW2Bx7ymCgQLrCxkogp2ndpW",
  "key5": "2EyAWMFcPmF3sz4gWiihnCUgZ7zMhrJPjSjGHqerttiFJiziDV532PAs8YXt7QgtsXPi2Zfa1Q8cBGbDGLrwQy9K",
  "key6": "287p8UnHy5WYQHhfXR8QbbtqVdMfMXz1rpGf3UbLprY54sK8RgEmTaMdBGqATWLSagdErb1TbDzRhmZ4MJXz5NNu",
  "key7": "5DzQrG3Qe2pVZoUHf5gxeK78hm67K33uyVwWrUAd3qReV3srYzmq7jM8j6GzxQSDNPrfKLWX7wsEZPYweq2wv2mN",
  "key8": "3r1LrDpZ1U5tNkVvwjRXdiagDX9uSmR8u1iVHY87xLSZLdiQFvbAjYTPFWpKvjKNxc9Yk6XGuaBPZ7hUTB52n8jy",
  "key9": "v6f3LPJwG1hZnGBvwQuYKA7yQb5rs9shKYF3CgvvPwUR6EfDgCBVmm1s4DJYFKy1NKSVwg7JJ1nK2MuDqRxi1Yr",
  "key10": "5Hv3uz97gfPDcMWs4r4YB85Ecebv5TzC4wFqEYi43wAUtLwVL6uNYiqGKSvEbRrXckQ4stRa4FkgnzZ59MYMZR8C",
  "key11": "3KYvpB8JaShf8HjnDM4ZURgHHKGRZAtm9iNhyE3H6Re77yuoqLPb7ybveH6e7mmD1a1A6vX5rjyVzpoSY4qz6v75",
  "key12": "4AzhNDr8CajBmMH83Rh1s25ZPy3crvKnCeNmrmhv2kifUboKshmpHCpwMkGURExqQiUjRnxR2Fkbm5Noshq7Mank",
  "key13": "23BgT4SKn9WXMQ1mj9EWEgwUZGh4JHj7WGGu5yKJDD9xyBg7eGz2e5VEVTt5h7oErMXPwt9STqaXviBMjmY7eAJE",
  "key14": "21TUXheFfTzsCkCiALW6pdtuF32f4tLbF62WuxVNSJqhE9bYigu3c9fD3Sx8nVhgGXDQnAH4eGqhk2ECAcTYmf7W",
  "key15": "5QGfkGwxekP7yen3MBUfKvewbkMbUXfb936eyvo1wiHkq5mpEhQsSSDNzSexJ855gLLUweN7nbP2q2XqwD9AuRGW",
  "key16": "4RjeBR9K7Q6JvtnfyrP4ChaPiuVkvTMoWBNgjfpfXSD3Mt8YtpmVQHTnj81BaSMqJR4eJmdYXWZ72jE2Am1ZKC3V",
  "key17": "4aU6m9yaMQhgzBoc7QFmJpjmfVJJsGMdqteqEhsXubHF6RtRaxG5ZEUjJCnK3mnLJyr7qdBNZKWMEt23bkUxBebi",
  "key18": "3Uu4cHYw6ojfLtkBFwn8Wfyb6xicUPKnf4uK5nyZxiw7JH3it7hC991CZbmLGmALdStbSxm4HL3NprRUtJiLchyi",
  "key19": "5E7BoLiLYGPFhsfXmG7WnYjz7mPhDJRhN7S1hwNSrQXXZBh6W2yDGx4Muo8G53qqvSWkAJn29qvQtvgFoDN1yemL",
  "key20": "3AgDsK3tiJigEoaYGRc8qpwSWosuBa25bbs5KuYRPzY9kSrz84kLQWurrp2PeSZT1rAH8w8F9M2WXMsQ344WCzPY",
  "key21": "2PuGWCMLKEoZLdmM4hUcmPd5niw3312am64rQtww3UU44aNCKiFfLzs4HToKmZ2CnbSep8NFaTg3cMEYb3T7GmT5",
  "key22": "5H9Zv2yq1AUF57Sz8JaJnfS37j5gHCzWRrsaWYLUsfZvvMqhZgXdXxonMuhgf1kddbVwNCxg4Kz1h5LDEnCbP3qw",
  "key23": "BAEZtqGQ3TwdDfhaKQYTKdiQX9CaU5T5pZWhNcXvhu3vgxJVH3omDGa6RHkNPxtehsAMcU83qMSHTj9mKbXjxSt",
  "key24": "5bFm4hfxzcieLBACusos2nwdroj2XZRmuCPEjutR79BAvVQp83i2ujE6BJk5zLKzPJ13ova7FEb5HmgLUuZ3ewG1",
  "key25": "47r7hjsHjqqViWAxufrGVMDSrSv7WRWfsrYFDGERP1Fx9JYkZcErhRaQCtkFDncSectksABQ41Dj5qSfxXrHpFDq",
  "key26": "oMmhquKdKCu7SHYX9vqFammd2pXPQJw1vR2ACRo5ebbyske3evYEenKjqgTeXTcNqgK4iE8TmQaM2SJj6heTLWV",
  "key27": "4z5ZDzN4F3SZ7Ezn1Su1L7uJNHzjDkyp7mrQkDMfofdKraJbmbRshoVReMKJt4J8Rf6snHAPD9WQG567Q9ZoLECo",
  "key28": "5LEBytBHJkTVt5p4or4PyTU9aLMMypfvDYjPvCtirNphKvjv4fjbGhow4dAJqEtB6wTo8rTgjHkvPkmMem7BXXmq",
  "key29": "KtRK5LUwdg8yYnPSYMqWDJdDG6MMH5uNRJtp3sbbiRNvTMWkcNNBFeUMeLH529tvM6wboUZ2UzDuwR4ySjPzJNc",
  "key30": "HCpXk9Ucz3igH8Asd9wtxKe91CX8rtz6cWwD3Yvev96hotVdNyaPbs5BDRHfCR2E7KzjND1CxvV2cm5kwFT3fB8",
  "key31": "2TBHa633cqFQsxvmFBqpUykwp17VJC5Kn7N1WZJ7kwPuKhQeLpDj1jZnxDwciFT6BEzyCZ8utomnBfjZ3ozELmHK",
  "key32": "4qcrZTJTPCaUdopRq6RMJq9wE416giWsgf8mivJmNeCZHKfm7QCUyGUkRKn4rHm8dTh5kXTgvqRs39nCYcT9J8EF",
  "key33": "4ucVbpoD7hrLRx2L881RvBYZ7eL5mEnakQMXJS12r2RUr3vj1RB81oFrQhdR47M7PaQcE52cHbzxsq7q3mm5FoUn",
  "key34": "SSQiDnL4xRVFqQtQEZb41TGAmDmqgkEvgAcbFkDFJtsup9oLz5y8566Ki7JisJE5nwXnLoGbCb1ezcdYM8HAsc1",
  "key35": "2Yo3K1GvznUqB5R7UcZ8QdkCg4sqbHWbsevgnhLH6zQ5hiYqQm539rQXrZsTmxjTNRsjw5H7bKBzTEkuEVqhjGp2",
  "key36": "5mRHEfFwp6oi3PqkiCZXZdNdQ9rZ2GFX5KfXcbc1xQT1eR7N3vg8wHJYU2McxQo2aUMH7mtk9zeWjYRWenYLcTmF",
  "key37": "2tqQ3CtW4Knmt2bo3aoWoNTK11Fx3eNrHq3o1Rpi8SXtXpfa81FwZ4DfB9FwTmZiiKk1bVbCJFvrHxG1SzJwBRe1",
  "key38": "5QMwsu844o4Ed8ZzWGjQJUwUF1P77Ji5tf4KzDR1aACPUybovDjUcGNpTQvQoPk95o5CYBzh85FBZHDqYbe7mLjn",
  "key39": "kUb8DFMYSe7Gr3thfVEt5QvApdDHviC5dNjuEK39HqsMCKN2tiV6PH4ARuHu4SHjJHtRzTD9niS3PHn4jV9GD94",
  "key40": "5F76kDBM5iwqqoV6YQGtsDQpre6gYC3Tw49wHFy1HSJHoYz3gqBLmdHeg1dJ5EjpctC7gFCeH4obppSWpL2jS7Rq",
  "key41": "cPUzbL8y6rwj3V2d1gR9uxBuMtDJjYiXb7Q2zXtAWeR8GwFGhFYhQs2Kbv4AgK73rQPEZvxPfX3iAqu2mJ9khgF",
  "key42": "2AHRhwkXpR8Gwp3ZXH1GiwTVdXSCpFFKqQEby9dFdSJ4ppThjSndXexJV5JsRNUcH6tGgcHJnYnnU6W3yEh8nUUP",
  "key43": "Fzio4DRSRkpuTQGs9LKQ8NFeoEexmegbhdSt11sbS8jroi77BdDfGtxRv9FcwkrdKz8DyVG9itY8LNA8qcpHeJs",
  "key44": "49gKxJfz3gmevRnM7P6NHLucNrTDTB45NrAkLwv4x4GDFEZAdmLjcc1MRw2gM83R7z9C39SjW3aEMfnjsjyvHyqB",
  "key45": "4yQJ6V4BTy9cBCZbKTkmqCX3LuopWSqojLVmSLurBJKfGzTSoX8E9W4b5AWrmbLcnFuCQJpigGXei9Gn6S3BJF3o",
  "key46": "eC2e1aPWSE3udsqzsbZiUfVNKWTUTgB3jSZw3f36wqjf6R6UsnAs3XtXcnmnNs2hYHkurP6JhWxo6czHyh3PutL",
  "key47": "3oc8nh7Cfh2vxEUT8cVTQnTgH6Ka29B4hnV11D866hDEb5vVLWC5u1EEE7BJt9nYgo9wLSkzUNAZUjczqfHj5Nqz",
  "key48": "5cgABAfRQPE3eKhh6rsxyJrWHnSWXFeE4f7gptuK4t1NbqsBnSUsf6fgp5bVn7rqsw7rZf9gASLxxdNLtGgq8wWg"
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
