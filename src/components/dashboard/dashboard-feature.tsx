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
    "4tEsKt8DjFDJgXTPFgaj22RKbhRtxpMTeSTF1kX5dqeoHiHSE9W273Rmrzq4DzBzsUQ8mRmoUHXq5VD6VB6wFBjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DDefH7mDHd9iVWvAp4JhoCN2EQE8HGhck5WD4jUxHeTofd3GiUQH4DMeW81qwt3zpewcX4RZE5S3AJ456GEQBpG",
  "key1": "5aCB3uEj4ffE9zpLLr2teMKznhKcJenLmZFBFuW3LEZtZUitRbc6ynmaLyGbLZ7mHFYDavarJuaXN3EiuC9RAtRh",
  "key2": "5vwNDSEg9n7H9ggXx3yjdfgn7kuqvk4GEHJ8L73XuNE6K2KcZQwTcGtBJsqMornKKK7qE7RyoBhettZ5b5M9srA2",
  "key3": "5D4XwjpRYPTgSPJkLrpfnr1WY4UpqWavhgNDpfytcbGhdAgbaWR8m5S3kpBJ2jb1YdHGvfFYx2pHkxRtgnEMb2Vg",
  "key4": "1UXFnypoud73EafSsp5781JDrrhpcfKWxjpXJs7Ezjb1XWMEVQ5Bj7Ng25aPSBL6HJy4JVzKeM2mc2we75zCFJS",
  "key5": "QycLs8Qu7TfwRsdK4EgsSEN26gcnmPMjVpqDYQx3iZzNdmNV9T1H91PyJptq59oxti1SWUH1SxfgCJHc2KxqmUd",
  "key6": "528kiBNdCfmbfENXtDsiWEeaZD9CCCkSMmtMVX5jcNBf11agyhp7zqxYt7xWTsgad2YvFmEkdtrqEMThYtefx8a5",
  "key7": "2GukdJy4sNJy5j6sn8PNheCFow3pE5yG8mYJ7ZRDco6R6LDLqRqZk5RcvYUnbHenMRmKibXpwyhnVKSG42JAXRTw",
  "key8": "4ftwuZeBhVFTFk44htGMJA45S51AzHpWUFT3Ec3gYeYT1gEZzPebpVsSakxn5ngcQKgRjUXePoCoE6HrPFZJbDta",
  "key9": "532SCJzv2kMjqeqEdX8yq67vHJAEqzsVKW7f9BheXa7VV2jRzxFqLu3iByQ6BRaT285GRxfKZ6mPg3ZTp8D9piyi",
  "key10": "65Gkc9LeXyKgwxYggsaztuKdYsvtZpKmTxjR1pe75CYcBCECugs2xGYBXeEr9ZHa7thGTgFMSyacjXvFUU36SNax",
  "key11": "4WzFotS1TJ3MMS4nvRiVucpTLVkMsHYjTMRYQeUNatxQqVS6pp8fvRbYKQuiAYo5qDE3opMKUkczTrq8n99yjuBd",
  "key12": "44BLcvPwuwrmTs4Naq4NGk8WwPTLNWp3r8mBAFNadDM4TgmXrXiU3y8UEc8EvH3WjeqqtYR9dgYs3yEFXZT2reX2",
  "key13": "3xdWmj1yKHwz628jUrNaKHhWDNDgBjg7L2fgsEbxYhatzPss7mn5oTS6nWNsmbdj1rEEvNEp9iWccJXnGSwB9RRc",
  "key14": "5BeZuqEPFFWdGcVJyHy4t7iZQw9rMRQXGWM7kFyut5d74b1JUFTS84267Bcgs26YN9vcRkPfxfjCbR1K2pAsuad8",
  "key15": "3KuwEvDQwTroELgEuTj6tjt624MpmyHhh7LDEB6WU4hSPLFtz7g2iwzjJkWajmsa89m3QdqoXsxKuczS7GnzLkh9",
  "key16": "2SapeSaT854tPYzUpWjk62tDZoD754Y9CBC5FMYmrrs7BmVKdq9DWZYjoUmW9Vqe9U1iVzDVPRDf9qMdGtVCj2Y2",
  "key17": "1RbvnvyRKrPSPEAopueA5X2QoKnNyGKijg1mrfsNWu3pi7rsR5jGeNn77Cmnb61jHzf3KxpJUrE9wHfCJ23J3ro",
  "key18": "58C2EQqkYY9tDNfsPV9y22VRuVNiZiTCQrzeKhSetkKGfxW3eMGQzDCS5BN9GsLHMkNFZ5hgrLW3FAFtW7D9TfBa",
  "key19": "3ZvzLvyQWX9dX96rWoXj5gYtuTheQiFa7CeLqmVgWJJRnwa9CEGFkC6ghBwfoSsVSe4rmvCoD4BsjAXXAY9T2Brs",
  "key20": "2xPZhcjhQLusk79bi5K2GVf8XkCdbBWVawwa7xKixqhvSEvUAfW57quH8it5KSKuLNo8vBwW7Xha8sFaWTKnTVNB",
  "key21": "5b4KrEC9JkRDd3usQujAcdaGW8jc94V3txrUUUJocYVnivSNs7pVhWgWCheQvTqEKQn6yQ67gUScLkz6V5g3NrBx",
  "key22": "4xZjP7NRhR39ZoDXpmtdTt3toWwAJZ3zvvT5xAChfnmMwMP6eAxwjMJnhavSNm2n3hScVbYnNXjQXLbjQeDY6j2",
  "key23": "26ttZckDLB6Hyv74fNjgkuiJkutn38yUkGHCKHWsuoTqLb19jKramQrxynvTuSDfbCmxQSuM2aUxvHTqN9GJwTRi",
  "key24": "24mP7hAgrnvGbaBZSsqtHdNRg69ytHLAaqsLnmrWCvVjyNh8WXXLeiwGjnR1i9hLLnHQunAissCAZaXoDYBxVBFp",
  "key25": "2WEwBxaX182JYHgKWCCQMFUMwqwLnvaMJzrkpVXLz9ZiGzRDo6pKBCmauSGmnRsnGFcZx13vNXFNP45sBPpRzhoF",
  "key26": "5HJYn4e17hrMiNDfHhEbpmBfBEgK3jeGfY1G2zx6SjSPGiC6WDNTCAg17Xa5xL1ErKPHBfW5CUDdyVZzEY9AHLSx",
  "key27": "45ZTrYbTzWzS6kY5xYswS4Ke9XFo6ELNpSJ63gD8W4ainnN7GTZTA2E1Jetq18Ng54SvResrtqiis4deHfyqPqvK",
  "key28": "2p5hmu8KUhbumwn6V1xgDgWFptTUSiLe8ax7i76xrdVF9TNu3EZHvMuQxKABwBAjkQNtjNZaWnWgaQAgKRBypmfY",
  "key29": "YVtHJuYrgwF8nr1AJTNdziF2DAKfpWZD6x6PiBbJKWfzggFRtK1hDiEpSrqjPCU2kEN2SbU6Jn5HUjHwHbWbck9",
  "key30": "4R57e9pZJ9Hi3VriBrEgRZzBT7eydakfLGikg2WqpFUyxgfJexp7TT74JXu8vhazRy8rJFrsK8aZJrmsgRmQFc5",
  "key31": "5oL76zTpoQoG6dfrSdLv531kmgLk25HTMvJarGWwzG1HkyGG91tPKdKLDD2hkpzMQWKNQ7eXYtx1qZiqbNLVzkie",
  "key32": "Dx5DzQc4GkFBkekgPd8fnMi8NrSgrnyjRqVBre3wfwwTEFWKk2GbMRrVfam5Pfg1zoZ4T5125c8ygRT6puLmcvs",
  "key33": "tdxTtnGrJ1THjyPoZ3J6SE1GK9U3CHXKJ1jx1fHQDBHEWnUTw4Lo52EsJoMwyUYeJQCJvrnkPMyXvkpM7cFfEgZ",
  "key34": "3rBWoYXV3GUKCy8jtqdVJ1vmdjguoMQUyHy1XVVXiEhVUy5Lx2Y7PDPbAcEnBCpJV7eDR3LGgYvbrD23uE8jzxzX",
  "key35": "2oY8fhTcVdWeLsVuPqMrQ4CzGLLm2S5rs4gWv8tY4RnEuwbWTGJ7E1t6F6oMRLFHHatXNrmi8BFohccwvdB5W78G",
  "key36": "3ngxoVNGHW8P4skkXQXXmDT3jw9CwabK3J9aAR8L3arEEghP4C3gjtKueYwskSZN9QAZ4Y4dZU4UwPrtvMNHwP8F",
  "key37": "4iQFmp4eBgVwU3UKHFbXronJqTWNgTuV9xk6AQkysMv8eng5C7r2njBKfaQL7eU9KZVde2su1gGiPApvCL93wBP"
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
