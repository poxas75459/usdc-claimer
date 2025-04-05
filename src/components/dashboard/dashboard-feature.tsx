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
    "3v4Hz5etXZfQxHnEAWwnF6TZKqvpseRE6LGsBU9u4F4n2xNtZ5NBiy5dkrHtZVb3Buz6ejfymMhNTnRfbvRRP19U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LTjy6BWDMx9M8FhLbJTWJT6N9dX2ywSBRD2iAgeFrUvoXoTzW39jxwod973FCUPoqrnnof5d9J3BoDDXsogzxyh",
  "key1": "4bebTgidNKNmuT7Z7nKkt7iAooF14GRFPH2mEzKMMEgUaHTaFom6Aphk8EyN45KrVQ7ymeprYiBXMyWwniuz8rwU",
  "key2": "5BXud7Uu4s8ygU5D61UJVJwu5HmdCwBVEvTTbEp7ZdQUy5Exj21gT366sX3JrTcBRzePTby7Qpars63d15rQsVAX",
  "key3": "5rfj3oj7Jcq2raorZpVVHLpYqQKyWHbb1rnt9vA3g2RWDX3sqwF4tX5KXkpEYE3P3SS669uiaP1jj4QXtTRD69aU",
  "key4": "3rq63Xc6HW5UKNpcPB3WcoC2XhBy3KGUCDXqN1EvSAhKq6KQmTTKRKj9Q8GeLepcx1caXPTx9sAj92XsY23b5J84",
  "key5": "NLoaS8NVRHxt58x2hD3X9WVtvR9fub1E9n7PtULMEQaTj9ewEA6MByxN2mdx5dDeje4V1Sk8bSn1R4DxEhf6RiN",
  "key6": "511sU35YbVhmJg5GZniz5qrdVTjjqdDbGiXV1vP8kjBUi1LUqj3CYc1WS2eYAScnX9QMBDKdsWhMfMzUqvkW9PBu",
  "key7": "7TVgvPghXnBctA8HGHvNSyNXrqh5q9afCENnZHARH4z33n7BGezWT4Y5uVMuo3QNWJMuRLoWFUabsWqJSG7oC4x",
  "key8": "zt8fxi9kEPaqab3dbv8Xrr12oskm11cXohr7h5JdBAsYRMCMfiRyw6Y1QP9Xty2t2F4cQCj43tQajXEmV65QMfb",
  "key9": "3DNZkrUaoPcDqchSKWTcMCvdxp1hie2pyPGrk5JPSjYTVUuhs9x9mnUHduc98xLA41mp6yjiWVAg5Nsgsm8DD2sX",
  "key10": "37ZcqiydzoP7N675yGLf4xe94DbLoEZz29HRWUcxNwFuCsmDUhyc4WfYcGYhV8YT297JfdxgiieEh7hnVtxgi7bP",
  "key11": "PBE3XwXDZkUBH7YbaPfTcsiakcqZY1kPsdJf5Ed2CGJzrYM8egLzzzKkTqP26LW6XmfzF44CT2upbwkCV5FdFbo",
  "key12": "5HQ2en426obwpC1WyapTvgwGbMksyCY5xnGaKRxbiFZ2hMkWiX1gVaXHZxiQ9LWmkCJX9s3JyEdtS3VKS1bmm51F",
  "key13": "5uPn6TAbJXv8sTgt7vqRTYdunVSmKuXt9ViRwWzxavfrCkWuy89WgUWxccjnKXRJKfLWVTDmLrmQebVLv7LkKTTz",
  "key14": "4pYrsDsec42MMayFtBZMHbeuww3YojYkwi4Qk8MwqtN7syBznKAJFAokbvbUMPShvPP6NNvXJnHMuKciaMuoeJKf",
  "key15": "3tWyfhzykuDhREDjesuJCwdwKtiaC3mkVuzzyFSd5ZPCDiEhTNYZtdcyrfZ1AbCj7KmBmBoSaZo3ZgDXT2qYeFpn",
  "key16": "22JfBtnha4XyQppGn1FBvtwwQuc6HEePU82FkADRmb9XcUmz2aUdWShLqfrgBhHL65D1BeYNoM9RdWeBayBCczr8",
  "key17": "RB93N4dmExA3jEybfgSJEjpDUyVfzuCq4re26yqDYonYLtijn8MBLY6QkpWzqvPa1yhiY6G5AoD8H6S7k7vDn8N",
  "key18": "3qW9jBqx7qBr4NpSXF64Ah66ufXc2fWzFpo7Boyp2Kk8RammiZpwc6Znr6J6f4mbghBYfmgyAzHTGwp6aPZoWC89",
  "key19": "5qyYStVgR9xfEjWRHRoBGN6qemfWpRGdaFXQNQi871EB39gRdm47vmbnsxgeuSzJCxdwx6jH7rbU8MaU14JshC6B",
  "key20": "3qeTxP9Jp6sLBCuCP9PfaRYCeCWbM659fF64aPzR8Xfxy8vhXy1gLh6DZBP2SetTpVYumJntF13S94PSetPnPexY",
  "key21": "23cDJYtVUtU5Zj3CqNrggbpjvwBNZE3W8dcYNcRncqw9sgNWgoYoGrAJr3WAtvSSQvesNTc7GbvermJfTNNpxNxJ",
  "key22": "5FVqZRGmNVjTSTDRjrNyJ3cRqpradc2bwKjoTftxyZ8PmGbqDK7AvQPdhAWJ312siTSUrwUr6NmhWcHAY7yne2bd",
  "key23": "34dvxktXCAhvkEvFFaZNRafhtHcxmZzQypQerhr9dZyHx99YmCPvS2gpwdSodm79haRJxdPBQaRxt5BJ2SzZTE4V",
  "key24": "25LXUUmRCCqLC78X5H3ygGmdveT7YnegR8cMR2bbQHecrkDKJ2eE4fs11x4MHWq8PjxPqfFKjkUe4pkhhQM8vA3E",
  "key25": "2pfvjzcCJpXE92iSxdoUEENUGdMdu9MwDFiTFuQ3A2kAoPQvsdS9JzyiDZahdGc4ncpesa3UoLQAQ1ZZBPgr4UwB",
  "key26": "y8jh4GGFDEuC8SMU9aKPDqQzbCWvqjySNxxBfz4UN3kjkmu6Cw3nVKornbJji4kwbs6e9ETJ73EB9BWE8K5m42j",
  "key27": "4UTHtT93qxNoYxLQVoWdGnx2vpwpXEhJ2fu3Y92gAznjw4oDw7v7fHJoL2Gy98ETcvmFC9sdkZG3iZe6iDF9FKoY"
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
