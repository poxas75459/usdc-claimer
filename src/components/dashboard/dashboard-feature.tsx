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
    "3UciiD1qAHpUtfxaa61C4mokUJnK2eqbDqycSKqFGDaUvAK4CqNHbq8ViLzFr6DuAr2oSeS1pRnci18TURWUaPWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CsSNe7RyRZJwbZnz1JkeY3kFYnfQ83YdBKS3tKJ9V8EaEXvKtwsVfjNS7nzovFhxvM1fDkvA57U6Na8Tk69dhbG",
  "key1": "2BpSCQNVbTGRwkFjP8FuJjiQ3em1bybwYVogD1Z3BxnK5dhqWwNnsQ1Yp8qMRW5zCF7qpDvQPp5GHq9oAaqfrdxa",
  "key2": "5GBgKuGY7iUJchsx189yGB7r9zf5HqD2dQkQP2AVuJYTQVxMpjA3VFNWxdzCJvyECu8BRtBrz1adVXBuDvzmc8Fp",
  "key3": "5tB6evBeXQ9RwY131rQhkRWjBmToXBcqtAsYmkJvhyhLhZ2bbkGqszqREFaxuN599SGhmJ7waQPzBeFr3SCxPA3o",
  "key4": "ffd8ZiAB7CbPDGUXx9VVo2RE8iy6YTeTCa9BXZ2Qg6NbM6VJ8RoPcv7M2wbnt3ExJGkwc81HTcC8AF2WNAXFpi5",
  "key5": "2VnFGD8GzuRyUBp3FALsR88fu1UeMxdPrCYVYnLNsB3YruW6FyxjNDi2JiNqQt1NrEMxGxZ83s6zhNyKmWojJfPZ",
  "key6": "2rafEUsoJ2L2aNE5Dje1nzvVdDrUqMRkGKwxmsjQCpYga6gevLe9mUBgUbL6vAH9yA82Gymv8msMxBw6zEf4quAR",
  "key7": "3T723pWBaXDCy2LixjAnfXMMn59fNw46W3zQkgNStZpYrn2nvQqcPqnj45usT6X4waTFPGEhi2UWKfzn7fkya5Zb",
  "key8": "3stpFYoMWiMCCx5T74P49T5KS7DUtgietDGujkDhaqNgPzR7e3rWjSbELNXRMkJogTpgHfSCTfKDrc1dRBKhr6ew",
  "key9": "3fxbtyB7JPGR9uN4NRcz6w7dbFLww3UQjQurDLRz3ybE28gad5BoLPsbunn1wQBopZTWq7vAxz3LcmSRgtaVDFHS",
  "key10": "3k3hMxDgMvxcCotgNuyGo9whQZKw9jGLPhB9AF7YhRUNHjX7S7QBgvRgSDsrXYHWBTAUYn5zF6JLSkJ4VzxA7qeG",
  "key11": "5rSx3c5SE874hmCExRfQN9vC1hJY9oT9fJ46n88z3uNjR9UUE2k7ZBdTxGqT6U8wbHHk7ohNx2oC7kNunHhMCBMn",
  "key12": "2MUAjwQ8wY9cQ6aiG81TntUrUS8TNfAJij8ZD7wWNn3pXfTXbuv4SwwQoPh6jL8vAbSet9humQfqPATWmx12EDTN",
  "key13": "36f4hYKtvKx7f1sHGJBRSGozo4GaE9MBm3W6MXt74o3GSJfsBUufrQrvf1ThWqg7bWVdBfea4ehHd1Mk52LLxupn",
  "key14": "52wvFo5szNCdBrYbegUdLZoa1CJKo91VdnaenhnR3Tbf9QquohxouFPD7tityinVfBJe6e4UxGTxEY2jgxaWUK1U",
  "key15": "qQLpo8CKWTd9xUi7ctVfi3Azxe3pYaonRa7TjfTD7LTbcQnE5DT56YY8RLj1vanQ9tMhP61mdVMexcrV4XYnM3U",
  "key16": "56AaqGDgxrGQahWr6XXQBopXG3311aewcGzKGoPrj5QVDUg1SGZT59VPVR5QqsXDNqZMhV4CL2aPB1Xmnhz9PrfZ",
  "key17": "4Dy5e2cWtqDZCQhubtibvUq7KuR5dAUmvfqD6C9PvieUMq2JN5LvcpcumGRQEL773o9iUwf2ZUa9kTE1zsc7uvAo",
  "key18": "2JEYXu2TC4GTikg6Z22coFYRPZhw1sToGC7AExPWFEsxyQg9FDg5pDchrvjRqogTsr4SaHxsmE3HCxrJfK9sUvau",
  "key19": "3DHcqyupGnbcfWP9oA8aw2sv3axzf3eVFvmMfgEoCLg2SEreMcf8aKnm5Q8Z2grqSpqviFSEyF7xcYaFKZBa9dWS",
  "key20": "3MCZHmRQTg24Mgw9HHHUyfic9YC64hAVypH7nEbowfS2hFc9CAM7PHib4zTvPoDNd7uhMPbMZ2dQ4KpZ5mdiLqj3",
  "key21": "4DYLjnxjdoPcV1gtVALBGDukwPxsWtEEY8xFmvpP1zk29VQd874uLyhgH5RrjxiuHFrm8d3jxHd78YxnHgeU1Bks",
  "key22": "4Q9LGwHpJENvXJYkMNQUTxJnd8NqRqajhjo95gnwXKUxwbwTCJgA4ds1obqSm7YYf4euyj5y6Hiv9yhQKXZ1qXyo",
  "key23": "4kurkrpa37ZMbyiHM2mg1jpSS98aTorDKJBmNT92KehAiSUyUcde2aUqcVLXwVfx3M3x6RvtZCesMypYsRyrQ46L",
  "key24": "51g7EdejoUD8Cuv1LVYB4tkvDtB8WxRAxReYFh67KUPCrZPRWaNo3zYsfrh7muyjeyC7uf5HezUVxu3jxHKAatmb",
  "key25": "3h7saZmQg2M8jBgsWXxZwrWp6fGuCM4zsamrDBXqmANPQabQFmp3n6bk59FwFWNMMhi7uAozuRvmKrVMfBTTmiNy",
  "key26": "2FBiNJQr4NL3ApiepvdhyoG3AwYk7jfhC8Yn9KmiqK3EcEou5sg51bPya6AAj5MhFPWxSYr2dX4v23KNQ8Z9YNTB"
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
