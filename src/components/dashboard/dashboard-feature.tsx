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
    "o9UeMAkKQLMudQfwR5782mSimChAtPbKgiYan269PynBxeFvsQ4hpg9GNe5GrEVRBBduvShWHpqoZZwMi9eiHAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cgJVYydhZyWmxwurMZNRSZQv5bZsnfCUBMjrcU5CEzDYD7qdvBcqRb9aCbmH2Tinwke37ET1nsNXouduxxyvT1T",
  "key1": "4KeqfdeVXgkWSinKa8qb8UjrSjnXXcuJhEdePiP4uyUd1tmLfeBKf5bNBuhub4gBFcgpJw6YFyxCPTWwn8H2SQrL",
  "key2": "4436fZCNURPw5kBgyfWxzPgjgwC57Pj8mDnYwrp1rMGLZMMojE2uMwYoEfKZDrsE8zMoGdkrVzbC3TCPZjNtM2ex",
  "key3": "5Gd6NCWDbD2YqgRZC4fuedw5UsZf5NjtPMY1NKNzMCNKxTfWfL8Kg7JXk1YufgUpLcRszBNyJGPqNjffgnCK6yzE",
  "key4": "3AaJj6W6gkgRykV67fUcQefBwyM5in8RqBfwsEJR4pgA1PcR8sVauo8FWyG2fuuLPNU4mGRQbvdMCYFnLjArQG48",
  "key5": "3gogcvkzA8yhwLFxpmrQQUVvtywEdX8B8nzD1RgD4fcVWt4f6VbFboXLAYYtnsoiKGUALJEhZEdqLZDnzSfLB7rE",
  "key6": "4ev3buU1BB24cZ9WEhe6hGzR2UdT6qHfq2xVXEsjXwoEGmUTDjwfHjFj4Zncq3zbhVp9uPsGA5tGRXXUnf8Z1ZYT",
  "key7": "XeygNs8XcffoHc7a7Qb93tPqfN156EdQ4iNGHNQRi7nru2GRTbauNd5yjG91haJ6wzPxdUS3bzRZ9cU5xMQXCN5",
  "key8": "P4LLkKXqKQRK4ytJNsiUrVRvjucfgNSuzwcBdRzkXVpijYW2mnvLHxFGx5RPCng1XmkDhJoLYMT2q8xa2QWv47P",
  "key9": "5ui5DaXEHcLLYnum492s5J5rSGJRUcPohVEFYBngX68aM2M4yJiPseDWCrfJKLcPnFbBPicw44FrzW1VrzkMLbw6",
  "key10": "5KXMELMAabZEbwZmqjNYdnZc1kApyxTg38mbWsmgRPth3h5aYREMy8WGsMQujxdvZ9gnB2Bbs2yHHm5HmKqigLAg",
  "key11": "3djYFo7NF8fiSwTptL9jyHN48ThrkEpzg1EMoVCP1UeobNRYcsGwCpmtsfwiMkt3eGHZQMa9hMhn7E2w6tP8SFeJ",
  "key12": "4hUf9ETjGuwkw5Svufx5ToqiHdtstD9AKe6ZiEDSof19TQHj9CdZ5mSG5Mn3AsV98qytGunvKonBwbmE3kndNXYD",
  "key13": "3gnmqDUBhuHxn6PzaWVX5N2ujVTdQkvRFyY5n2xBZyqSqb3nV9y73tuUjXy7ux3d2XCkD1jCwmxunDzjsRZp1Wnp",
  "key14": "25ijoajN6WpBpu8bvvHvDMcyzz3tNg8WihdDaGvWzeMY4QwASz7f8RWuF7tH5hXu44ae8CPBotnQsipBLrpy6n4h",
  "key15": "3ZKu2siBkwmtaXFnrQACTy28jxK1Hpjyro7zpoJwGSFvySAfJz8bn1ps1ZVBTTsT6Dg5JdtdYdKtvC4FYnp9CwfR",
  "key16": "3UQzNXnaMqp1xSyTXuxJ7h7PyebFXifmAAUU9JyktKWunqFfpPJcjJbuhfoR7LNC42nwbMmEWMGYRh6mGfy7BEY3",
  "key17": "5Fenbq6YqNWc1PLKqc9Q3LVaTtyLMxCXC9v6ZYis48X3Xh7bmArYXgyqqitwsPuntxZuJbnZX2iauqDAWKVmMSWc",
  "key18": "3y2r4mS14VSAuUi6C4xaDQiZ7ZAWP2kP9LUQRMsEumAHH1i9T8RK9DotWAH4kjMuNhNinqn5QUAyv8uauxwz1buF",
  "key19": "2FZrCCV44rDMybh1S5zrN3J8qY5UpSjXP8yBcoH3n7Pk2jq2yTmzuAT9wety1MZiCxyKbH2VDEtggjA1gYnUKxnk",
  "key20": "2aTVBcVQw8zCb1Zt41f3HtZZRZVyD5JsnGczg8aF6MYPvB4AbFBNxztoq3qtJmXiC36BbyYf5QbkscHkYKZWDJuj",
  "key21": "5ju1ferW4hNm2Dewevu1fu2N8nVtVTm1FwNGNHQcy9K6PRxG5WaNrtG4nCyKWE8XexErYYKTXDgWg2XKzYTxsNoa",
  "key22": "2Bct8wLxrr6c1jEJL3KrPf5XMmf8xVdEBkxuV3f2VvJaC8qUsCkhNCqg9mKc4umgg4SgXDKqRTQBz6KjBhRPUqHj",
  "key23": "33B4bfR58HQqKvvHMW4cSNPFWHNTsrxsYeMD49dazD8VL9s3gYWzLcnD8LV18fZX3ge3NrUvFa1Hztk4DsZ6qPTF",
  "key24": "3PMJe6j6rfW572QLptxKFuSCtmAwV2UhsAFiiGHWCLE9kgXxbxn4vQvQYKoY8CaeDPnhgaqAKew2kLujBvrwqZZw",
  "key25": "4sHaLE1iDEpiVHa1h3M3rdfY4nYPA8yeWzn4FttjqoDa1AiEm8rnM1qsnpdjoYv9933Pc4WkgeHcV1i96ccGrhjX",
  "key26": "3N1iBT2ZaxyiVZwur4QJo8mK6NVGoBTdHuAS9nKevXwujYKVhahFCXLR2JgjxstXswB5nk4vS2RjHycZFdDXspiK",
  "key27": "3XcNZbpeR5h7eSW4LtmLBWZ3imZFTnHHNRHQCEWP4C94N47ueggxSy825KWrKZSXvzcXMAKPSSueTcUnXjAvh5Z7",
  "key28": "5xbG9mftr1NaRaHvYJ9r8xAPRf4ih9ZpZR9JxdChViqR9MN6sMK1GwNghJe5ym87yeigiaD12h1RAMFid3XK22eG",
  "key29": "4BJAUbrvWghWTkeTHy8x6LH9vAAKW2tTddKqeLv3ukpPPrjBvbTbHUVqE1CnVd8hMTQ1ZQZMQGDum3kj57nTWUTH",
  "key30": "4upawCuzq4S3YyJDpmZR2qnpXayJiEiEvcb6wA6RtQT34BQG2AZFAzhKwtbn33twcb4ohsj511ypTqtVLTbuVoq9",
  "key31": "41kFu7DynWACCH5mKMNzPjt8HfNyep3JgebTAdytTA4dG9VxjMK6TL9NeLWjQiGEutCYCoCGLmWqVPBjEeTdAWWR",
  "key32": "5zPfProUqL6EYKTtsDsX7YMmLp4mVXiLqHBqsyF69R2NspTuds27aPHP15byyaQQCP5RAYQdCp67WHAHBtqKG88m",
  "key33": "5uaJoLbugKFuK3iwnVWRPB3U6McinzMFc3KE6P21i9Js2GRiibJ5u6kiyrjy6wAMoniKoNrujTZ3L8rpf32UWG6y",
  "key34": "2FkECzFGTGoVmk75kKMKGvGiYH5oV7qqdKYGQJMYNeHiUmifF4avjvgJvwGhgrDZsQutvcCeUMf43hVfLTbNC7FP",
  "key35": "sPH3VyQNC4GXbzA7RW2i6AzZktPbjHJ7HXr3AWLELvBH7shz3nKucYhc3YVkALKz8wEUaVj53UhzuQ6n3bSU7gb",
  "key36": "2cu4Nc7Fx1xhfYA1cko8eeCJmR5spiAcpisgQKiFWK2HqNmUz2gAhMW3CvvU2CRokMdPqmfQMm4rDrQk3mvAhgis",
  "key37": "5CdzyeXUoX8RMMjKSx6PoeBchvtbTGKAW2H3G5nau5hq5UXdNmQLAthZmqSFLeGULxCcREKdYEmPv9jhH7PkzXEw",
  "key38": "2sbEEV91TZhGLwgJLV1sJJZQ4yqLxjMhdGBH3XMPHa861qgt2sS3C84XFowaEwwGLApPgSHP4HRk6xwyXKgSA7j6",
  "key39": "23DH8BDohY9ToUNVkx6rKETiw2MKYjeqAQVoSR8szd78EiuUHG6CiJou3d68sxTeAaYfvJUYzzFwt9SUpmGPBLUm",
  "key40": "6K6wbtHqMXSa5DwBo1FewHMNCwr8tiAkeTPq1hNFdqLmrueq6FDavp9DTpYuFBBL3AkeH4wNzE76dfPmohBrY4B",
  "key41": "3jf6uaK3MYNanKk2h5g77LrxUcaCquY8DAQzNZcwiu4swTg9fPewL6rEskw2M3bJFRmsVLEyRQkfGJzz4TccmiCv",
  "key42": "BMbxMQYirX1U321FQbqG4u7USQ6YpKG2pRAzfMNK5ajWZcrBu3rXDSVL4BtXAbqLPbR1UNo67ugzudGjDJ4JRSe"
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
