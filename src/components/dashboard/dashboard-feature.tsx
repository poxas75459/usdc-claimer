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
    "2p5x3eWhei7KvUr1ZDuSgj3h1w4UHNw6Rkf4FeDeVG4tvxDmH9559rnETDTHn5ZSUTXKUrY2NHC1SetBc2Ysc4fD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FkcozvLCpr1EhEkrZsUcu8VyFsLJbnDJXaT2VfxPXKUj19mCvUdzu7WPRSCpKfNKzWw5LBuUFwzLhndFK3JkDS4",
  "key1": "4ryACYV9bdmv3Kk7YMnzUapZGJYQWouUTKNLunTWkMfxSa28sYWQdrEejKBbGaaaz5JKTP5WfGmzfXxj7cw1gdU5",
  "key2": "5NtX4P5Racovm3FpZ4qYBraq24AugMrREjibfSf9CPS8do5BHexRUmecW6fv4PqdU4cgBpyhSujaPEZBNMY4qMnK",
  "key3": "23EHGuBzBbGZrwa82L5iikFMkxJB2nUdvUZwYxRJxQkktX5Dp7LfGV3vquCipQtfdJ1A9b7TxZXirzu3MCuYnonX",
  "key4": "5E7t1JpNjUscUijewf9y6YE7vYFrCNgJLopXJdqAPzX6EZZY2puCwGvgoXFRb8nG8tKuyHib7Zw9EdZvPdqNrVZK",
  "key5": "2xCgamDydyJm6pHtXLagK9tLyzhuV4SLAKz16zMfkwbApyjhMKu6cTxjpT9Tyc4Qc4WW4fxFD9KpKBEq7BNHMaM2",
  "key6": "3c768gViVgN5ZANrJ3nC8XidoEWfnhdwEbXn98EgURAL2NZEZ17gCy9tCVaJVegGAevxN6wMU2sjz1ErskSPuV5m",
  "key7": "2JyWRW5YR7kTbh7WgP7CfFdYMbsTx5hRtjyAS6QBCrJWBYhAny5G856Mn2TNpwBtNdE7wzXfD2zGSe32jfg2RJGd",
  "key8": "2KADKd6wum2un73HAwSXXYysk6MwzcvJi4ptjBPeqVrLDTsFs1eH8HDn9H9cQ1FQULYBVjqQvprjPD7qbPnXAnQJ",
  "key9": "3p9xFN5sVXmNBsNETYitGxd2bHaN1Vgdn18QE7vcXLBvtiS7J2Ge2wBRrZT5W2TZgeubzrEvn3wuUpq98PVabkuF",
  "key10": "4fazwwTdH33c1CLuiKUQ2q4HJvqyijTr1dL2TfgahjbyHSdcYt5Xgw61ZzJ8dW2ghTCrkCb1kUY2iS3iC3nq3rdu",
  "key11": "2rGd3V6JN5sgHYPRmHvRLrppD21oZc6oSm8U3NNWd6ghSFbQ6suS9TJtoj4RP2NjU8wQuszFQyDkZ181wmjunD49",
  "key12": "2kH8Uu8qkU91BSCuDxQYSTuhvuhveVEzMsVWYS6p9um6rNzgY3ZwytrpBwgkZiuMkYuSLGXG4AxvuQjg5YZAD32w",
  "key13": "L6VFsdGfPJ2mzmin11dQfCK1V3Yi1jWe6YXwZGtb34XehA5qg5ZoZMPrn86m1oS85XiCTJnNwkAwPzHMrPFtW9b",
  "key14": "5sezxVKdx9TtUoLHcWnSktgQ8iBhG4oiU8PoogfDNh2W2kpae6yTAu8key1g8FhFGMUgm9Vq58uzoNc4ipKC7ADV",
  "key15": "2fT17kD1hNi8KNVNaxxhuoT4szjKVmcrPZTan4DCtfcvbKWJ5Hg31iH3cUGhwzoLbzceFJCHp1UQqmZFfMeCpM49",
  "key16": "3FoHUbJGXVYxaAiYbE9pvvSEx9h7moxUccRVWbEgYBkbzJuXtcTJysPhs91eBKVf5P5Kdxs8oxy6z2bzjzwaxkRE",
  "key17": "3AJJDzdEi5erREpt89j46tu1RfRxUxGJEMWszrDE5xouEEnAUXhVf5NcRonLhQKvZBUWTnEtJRaNUyMptkLkfwBa",
  "key18": "2dHP5Mgx2gyXziidM8SZwemk799BdXWjsojjXtvtcT1EZkTF4mHnvvp9jxHTE8ZRUMsszmKwTYwkhK8hSKxZkEHd",
  "key19": "2SE6cRRPXEnACAntfRnCBWNf51DvKg7PAfRRyYbiZhEuDBDaMF8r7jjuiYKA6dTjBXVtFedZo4cUJYMd2tscaP19",
  "key20": "2bvHDCj9kLc1QmcScS1JR4V7KMgvwBzSkGKcTXfueMLNHjv754VLjfEKYWzXtYjcheM8bwU5ScpinEERT5qN3ugZ",
  "key21": "5DBA4fGjfvxmstRYJDcyYRM1egJRqxScdgaPhAVQo4Gtd1azytSQJFpdFp99rfkMStNL4qoBvBAKuGZwd297V15b",
  "key22": "31jV5XrTAXLcmjvvjdh6QeYYg7QGyA32WEQRbx5Kh6Eddu3pcStPaxaVQX7qkX6wgcmf78mRMMhXtPSBEXVJQXq6",
  "key23": "4xaKczpsg6sgBcmNsFYRJj7uJUeuQXRnfotHDRzn8Z2KfZpqq6PUUYYjLqyoRQVGHZ6ESyY5feN4zuG7GnNVTwXf",
  "key24": "51JkgXE3N2GMwLP8mMHV8MYfsHj1AiQXRdT5eu8LcK252M1XqNxhwTkDtnAQXuH9mizkpuD4iBdb3CqJaSsR4N2U",
  "key25": "2k1kUAGdssWixnnd5sHxARzxrZs5iiwgPeF4WsrA6qydQs8zXC7AzGgL33Nvn9coFJFeFXBvrNuoEXMPgYNgFqy2",
  "key26": "9T9jWge4Qy9BtyK55bjG3wkt4P7oAx6TNDrFoFkcoUEtUx8EWaogzUXEKeFbQjHvAiAptcjnfcfvEU2gRhPMgdv",
  "key27": "5S3WisbzEKMqWNdSE9HLE9atyzp1FhzLzT6bfeCWUGStvdAWDgnVUEVEDb5SK7rrmVfQaRT53F5ZV5tSmW8P6Vrs",
  "key28": "2g75gfVxwsddj3E5Jb44PvbEj9FQfWKjNsukm6h5Jt72LN8FufyqZM7zYrKotA52rs8gNbKcejmmYkEW8w7zVGHM",
  "key29": "tKuk2raNvmD84exMKdANQ2LXaK9hvyMfDqQZZDkwmHUYWRScdtLAxFMYtH9gaSiQLLKykTSqbTqz6pX6Ksw2Nia"
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
