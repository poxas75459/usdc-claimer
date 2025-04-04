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
    "2NQHyGgHeGJYPExSEtbx8qpYvnuR5CoR6RBHjWUHSucKpiMjmeMshuQDzFG2aA1dBAmfDQ7G5Fjiof9Tsivbv8ow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35eUy6QG4sPwEGmuXKpZmAqEEmBpdhdykP75gJgiS9CY7JfKX7JMvuAS3DYYxuSFxpxpvTyqcb7JNPV7rrkfyHzE",
  "key1": "2DntD3gnaWrFtTVYQzbxqKqy9k5ZwhPPm5vVuUacmAsSN3zszCLLdUNceNgcSv8YqY1D8yeTffoi76iLy5QQkFB5",
  "key2": "4GHRrbMza5VLbse1Aysd2H9NA13qkffHtnbkFi5uHBkULwuN1bXEWYM7jMvzyfyQwcc5Ei1ZLC8yQqihGo1x9gEj",
  "key3": "4AnbGgZfvLFJUGGzLgszFCizcrWbjETJgtp8Lmh37upyioj5JoFGDYQV5R5WmUCxpaFK1LSQmJysJSd3wcyQvFzc",
  "key4": "TBhKanmkZEdCt8Puax7cmB8wYiBDfHiucnveTuLh6uJwBojB3fdMpqgKUPViRyhKsCnFRCfYamvNFTkixVVfY8d",
  "key5": "3wfjvw49b1n2EbPyXVn1uEH6iPfpg5kZavvaADrSUtq9VvHyCPUpCWv4NzUsZpfNyWUMqtDZm7KHvT4JMsepLtxM",
  "key6": "4S3xPSgzBGxR3han8hk4Ss5eXTsTCBcSscoL9mP4weECHV7YLxJEvvkKCQcZ58nGPWgyui1jqgpm4HUGtADwfkJj",
  "key7": "5RHbVedqaJaKdE5gVCV266is3V2FQkpEbWwtTcMAZwSztcrtjTymsrVt4yNhj6RTiDPpc9CUGFehxhf2K3p7bbwT",
  "key8": "3H7q9d4CYM8eL41rQjD182baGWZ8kbMPcXLqWCCRg33AmDfYKHZFjAQfoSxke2NJtckZXdK9gwHGufTVxDo4L9vQ",
  "key9": "4XHkTzy4V7KqP7rxukiAqtVG14mvUJoZ6uawEH281zZ9iLF43vcQtdvFeFu1PPCoM9VU4cEcYpbDEcYtbRRsHNKm",
  "key10": "4ndRNnMWuLahVaZ3GQD68YarA2GWQAxtGgrEVmjDoykQdaMpquWsmNPMXbwRB1FGKYHacWP4AkVU2CMxuoBHjz28",
  "key11": "4YeCNRTdrgWTiQwr6TLBQdbFbHbQQVYkrak9iZ1mQA4EFNBLSkkxnoqHNf9PVJCQerKyvxHFwokTRHQyntXSfRsF",
  "key12": "54rAf7CAvyU3m5Vcnu97gANTRasedcZ8aiksBzVMmo5jruwBp4heL6c7oMSpoXgBxeJqBktcwkH28fVqPgTDt5Hu",
  "key13": "74i21Z5B4Fi7c95skALnADQDAmgk28yi3XJVvc4yKnU4E7nHvTGUxJhk6XNeKUQQ7j1yqwVCFe7cyrQZTkwmsC1",
  "key14": "2dLSezZc868rfKQjgAneEPUHewko37o5gYXFThJwc6WoqZ2ddbcuLyrErBfQADENzvgz3xi7LQY6frsxutRd1SDA",
  "key15": "VC5V1i2z5nz7a45JQfDsPAiWS9AVhHbJFwRuBgZhTMho6QZxjQDqQtrCJSCyq3YfDSUzvvjwz4KG1otzntJM85g",
  "key16": "63U5MwTa8CSBUPfcp2TKPAzM2BEsS9fZRbwVk5zex19JU6s3SeSmsxhwmVWDguvZqPoHNKFHEDwNirKNsBwK5scB",
  "key17": "3sQnyV3CmXBwmDENMaAUaU6K2Qt4LoDGjGAxkeosjMetVQcQPHh2mzf9K8QJvfVPnFc41HzCBYabRP6dCRwAJntd",
  "key18": "CQYZSzNYzXAzAWbwM12g1MUYTCT4fBeD8GcPepvshHkuhGwyQLC13ZAEvh11BWhWh84foRQF9osLybNCZnm7s49",
  "key19": "2hdWuBHjJrbAJXBf9tZsMSvUEPxr4FyMZ8UbXrL2A3JUCwNFp6JDD2K8Xu4TH61kvsPHdxwW8aUph2AdFCqZ15ei",
  "key20": "4o4c25qsxnEfXyBVjbvZJQgFVvyG32nVfhcWCA8P81r8kcB6ir8cEsjLH68GHPNoLgYenqsHPf3MwyawCz29EFdY",
  "key21": "WzfZcVjM6qySzEipe838QBC4pA6mAiV5hEHuoVwEMyXifzpgcdgndJZ5bcQ7yCtXdeuVbC7FswHL8CpzK1kfo8C",
  "key22": "4Et3GhriSm9oSweL4TSDveV17mN8VTTWMeVFTmau97TwLZc1tzGg4NJpXaUvy68WzkxwFdMYjmjhRonU9hy4A7PJ",
  "key23": "3MWEnJyPMjnhWJ1VpdA1G3aZ5wrZTgF3j3r9g3d6s3RubH2M45p8wjBGYq7WVy9LpKnEsbfMjqgXKH4wERuS9e9F",
  "key24": "4cWYhuPJaWBmbTb9tiVj7GvvxQhT9aMDCxCdsCQx4kerPWPHAZnatfy5Fqs5HhLnpD54uQshRsvSU9seyJLWgEJU",
  "key25": "58oGQPyeiiziQ4fQYE3ejpzYvFm5QhjkdxpAUwNbrsNuRGjAdPCkP25gSFG5j19TV9RTeT29NV9VazSQz7zxsBww",
  "key26": "2YD9HY7NVoZ8yMGBMXgjLsbLBbjxnZ9drHrhd2jCGHPVtHb9MQVtyGtQWXNqbPQasB2PpAouXuHPbizSxLw34BNU",
  "key27": "3DPeuKPzNgMhHq9A24JmXAhsD5LeYmyzAJzAMdcAzFeVy86wjsWHjNnfDwTdcEBbsaCXrWEGexSqZqou1wcnkmPf",
  "key28": "2T56kC7dD3iAnJkZcVgvedF4Z16C2WUGPQ4rAbWuMVq8RfzehVfEdm59M9MwY3AWYUu3xfeD2AG7DTGCRvAyn6ds",
  "key29": "395Bs8JDt7c3tnQSR5rLMcu5epZkczMeJeS7oWs9ivnQbn3qTntKk3razrrkF9msb9Z5ip8HALrcrEKoptNfWfUM",
  "key30": "2DivVNFNCox2H5Fx41yZjKitb1bbpehuLLEVdKqMXMk6NtfCzHPX7gGhqhJVQWn5G4pDag5Fqy5nV2wCLbJBQVR",
  "key31": "5pWG2V6BPoWcDsV1cRqfkGLzpFbtHXNTZW2UXznXFBMSVYjPZo3ptMfFmhQTMJ16bVTaugdHUerVdSu89QZ7VQCi",
  "key32": "3ZgTWQHUJoJAwYMAC8fP2AZx7BgVnpFj5HuRH8cbecbywM9Zo8CS8aB274Cjm579dXEWoZLVvFWgr66CGvUf33nj",
  "key33": "Vsr7dgv8RVRBSu1SV1egWKDbRHHathTAFhjAkRqNVkqBcqUBpuUwLo7UmwJq3Er1fMi3HZJSs3oU1vftuXntmQR",
  "key34": "246sJK92285iB1pt3MWkWNhQpaLcYDGjTQPeWNtPFQdEXvvTptgNK9e9VnvxFiFudx5WCZX4HBpbSYD2uUG6VLgv",
  "key35": "2CBKBXezfCUgfUkjewGN9Bgt3DagyJv6efHZdUJ86VW9X2pUBCoduhib8EEeQYYaJT9NtCB53prPLNpUjqTwWzw1",
  "key36": "2SRU3MsTjZQVpdXKr5usEh18PGCHQPP9WuPqG5F2SjSfBQLuPguneou8ac45Cd4qdSY8bCerZqpntEraZb7ZbHB4",
  "key37": "2Q1pXdbiyJgJNwYMFdksRfTP2iMPtRpwwx6DJ6iBXAFsDB6HiVqY8MAvxH1AqcBe1Bgfbi8rq19fM96r4DXrRWNx",
  "key38": "i7es5qjYFpwPU151cPLoQvPXF9Q3wkJpCvdPyTLKndkBgLY5wqNH2mNNHPdz11ZHL6sNcRH12kWNefwD51gwD2M",
  "key39": "3yrMjUyWgpZdQAgn98Lp2jx9qr5rmkGRwFReFaiS4VmN91hkjmBL4KyZ4HRwyLuxXhytmbw3aqTgzKWVknCqATg8",
  "key40": "5Vb1jwRRMVQvzBqd8CU1SP4Yq33CsUeCYVpqcMRfo5DTrp8y7rwkpWk8KWEjhutkKnTiRoYjVVP2ssQwDMuwQ6iX",
  "key41": "Ka4RzBdxWMFTK8S3oVwgNuMpPLuM4FLovkXxpGmuokzoiALA3YikyPWJysfXHQg1PQwTyc9HLx7sYH2F9sMsPmX",
  "key42": "4pGAZWrg3xXatPcSmTmK3NZdyAApDvJEHUut3bFvnFUwD4znRY9C3fQ5GuhJ2X4FA9AaY6xfLzZstYc8g314FS3U",
  "key43": "2Te75usC5TcQfqzoVKWaYDF34vQxAhx3AYTh2tWye7izqcDyXJ9YHYJ54NyrvLziwMt29RTBwXPuoayUr7CemCKD",
  "key44": "fyWbxnwC1B3MpSyuwgVb4yhwvSVkyNnujXXu92LxXf97EGrmUxomd3yH1kBH9cE2GQFFK2Huw3efMYCpwD7rUVZ",
  "key45": "4r9RebYtr9arXUdb9cRa4nrmWqzpdo8Z6psAA1E2QQugokzPBT6f2aDKbrmYTsrscr4oF3cXeDAzNeERHNGjCKvQ",
  "key46": "4rfRBjKQZ89AtuCmurM7voYG95VuViqcvMDerGv8FAnkRiDND12BdYfiGU6EzmWfo3rs16ZFhdADJcFFTqoNif9W",
  "key47": "5jUWSTdVWou94AS7699nqu93kPpZkZhsKoyHXPP4NMwA6wwx6BhLH3n5AeJ2UrK37jnXGXtiG9UVHVH51oRouF45",
  "key48": "4X4g2q6qtmidgTmL1SPX2ut8SfiWsHkeUTyfdg7nWnXfK7cT4eCBWJFxsHhXPqcag6UxJK4C6x1pvFwcyAJkPQ7Y",
  "key49": "64SJJibY2csDvLbSRjCCniwBHy78mSWSTRCFZ4JtRaeHjA7yqVqqhvCKHnar9JZsfVfw1w8MWh6QsHeLHXxekJEG"
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
