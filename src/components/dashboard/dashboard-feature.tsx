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
    "62fBY1XVC1YU9vTKbYJJXarjghZR6e4j5MzQbQw9qNBfUyLPrnph8rXsfjoytuugZZBh8qFLRJt5rYXXQZz9Poaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oNBAyKW5e2bQZTiv4cb2GMGgD4QXXFNBRgexxwtJgL2PigHCanJKBM3XrA1SGBxAYbvidjAe3L7od6i9wfx98QN",
  "key1": "2RR6kiRtpkepFnrn3h3ZfJU7ZxtBqgYCMsEowvJVgUaDc5N52j6Ba52nfppeFkJWMgYnQHRm8euvdMgyspVgfmfz",
  "key2": "5Kx46Fdir2A6N5FgEoSJCE8ccK5nSqikJjYcgRS1iNd7s1VWVfgD9jAPpSdqmZAb8cWk1hqYzoLwYXhcZkGihj5R",
  "key3": "AzbjbXMBcDdthHQnEc3BXPyHNv9LnWU9QnRd3HJXyakABKXnVqz3NAjTTFrUNQn3G7Q7HwCJWvaawaMEa4Zv1Xa",
  "key4": "3XompocrsBrAQ1D8d6NzmEtLT9mStJEbaN6RXeFzgX13WnBK1LvT9j5Wmku2Nd9yN7eFfNt6aB3ePAY57Wq1pmiJ",
  "key5": "22zPYVJeY6t52cgbtjxMcg7eZSeYvy7mcD3zqeqTHZX137JgBQRbKYc6aspTU8NxVKmTknrt8qcSL1Js9Ax6maUC",
  "key6": "2miiCiELM4h4Uc2cE4xBwWf81f156h8d2UuqwTQCZH67GBG55AXC7N1c6VF6sJqqf4P19jEPN2Fkj8TGsQ4t1a1V",
  "key7": "SvjrEYzVrbWxU56G3JwaemV9orkmbgWAhm1u2ZBLbtbjjRWMN3GP4hvBtxenjiV87oEzvH3355C3fnyFs1imcsS",
  "key8": "iCK9hVFUeyVC58q2qR7oi5qD7GHnR9NhPov3k2RxNjrhoov1nStVH8R4r4ULgRgZYHCqP2rMAFAbdaapdeHBnXz",
  "key9": "4P8zitDX7KGxNjCtkMvC7Y4VMJA9jrSd7PaLzsSNWiW2gYC3RvRcKhHxTJni87e7Gk4L3XohttLdYNCrGcjoqKPH",
  "key10": "2dajMk6Dzy7TovE1xzR4isjABi7k2Pwn8LcJtuki3UypTMhjcJqR7azJPH4UAoBW6i7tdN1KsENg56MXLJ65yCJo",
  "key11": "4WecYFTHCv6qHQg65pSPnaQ6UaKoSUqRfxSJZLqtsfKhLUJTd3bG6eHu4eeMUQL6HUrexXAnTsLXqNsgudWSLUtb",
  "key12": "4BY2kAargfCTAEWQXqRGYzvcNhUd5SDoryYGi4mdSukMV9UKN7TYCTHQSFhyj2TiTWPWBwZ9TQH1Sxw7TAnoET6v",
  "key13": "4MRXScJeb4WGHD1PpuzdejvS1Yc3BNkn43JDcbpWXyEUgvUFkpDbCXFYVzAjuufEhZkjSeBuMr743gDnQVdvHGSd",
  "key14": "5gGzadi3w5aYjh7arAgUJDgrPPi21cJkUq2mwQMumbuHEVRCiwbyczP9S443ZZLiR1kArwVemGRfvdx9cz8r217E",
  "key15": "5nfh9pH4NMthyfpCqSuoya8wkVRCqGiQuPefELNvvwC6eC7MJx5grh3HYmcoS4dcGXGpKRX3FYhdykmuoP94PYxx",
  "key16": "22SK3GJVsrfZ9RkQagWUfwxxM8XUsFLsSxxPoY3kV6RuY98yk2QPTq6V8QKPnMvWu8DCFpVTEqPgjpYL5QceCpwN",
  "key17": "54orBR9e5gwMicdDxzuKWP748u9xaG5gnsUtDx2cKoYY2S9JEGeBwxjqC6oXisJfePmhajbSaBi5KaqWgHFgx5Bt",
  "key18": "5cp5bq4U5A932w3fD6kB9LJ4P7mAy2stKWGRgazVJV7cP3cQERNCLFsTZDHtvsHTptoYETnvLHsqVd4iWjqMnS7U",
  "key19": "3VJ1dmowu4jLazvAHGHTJP6oLJTamX4k3Ugbi4VBe7LfqczsMWs3d8PMQjx9XAMEN6CfMR66MFRHzF1HU1Czjjty",
  "key20": "46HCaFMk7YtUJz7bRof62ec86G9BpbzhNj2J4gxCC1noZRj4zcXcZhaoif3R359uxgYdQyH64e2kXRnSsh5Z4kAr",
  "key21": "3gSQE4qhoJv1wEUGgkZLa75HN6X1FLcRNd41PNffe1RtdxVGHeWVUiqHc4ht4QAsRW2NotmY4HgzdxhcWHYhBkm5",
  "key22": "2ZuiPbaEHArmBYCEERpfQdb3pjMMThDnV6kWCr6AuuMDPegYkbeqU74SB4MdL5BqU8eoiSNxAvCBs1eU4VJugsGw",
  "key23": "5VkPfbGPCfXPALpGJjEVqQeBvsuMFZWngUPphgvkfnHRgeXYCmqAvxvPVANyZKFBGmRtr7RkhtDNvVSrMsMY4C9J",
  "key24": "5eARSdcoVrXseZHDfZTbjENAv1MGNVUSChfrxKBAb1EKnZbnmeuEKXLk97siGdcP6jCzn2ZZSWvJzzpT3S11NERH",
  "key25": "hqrSFLnfHqCLAs9LaP6fqyMyuSW2Xqznwo1EuTtHF1UQCF2Mcy9M3i9NNWye92E98omuX2e5b9Ah5oZtiofbWfe",
  "key26": "3AEisgizoagWrTfH9ANNkrAPYYGaARGWHhinRFeYFk3kw6vb5nw2NHPkNzoJUYwWt8mAdQNzJcrP4tcfAv7fZfhq",
  "key27": "3EDHviwWPQDsjAnpnfMNFx9q4igKJ4SwuA5ho3EhmKv3nJkdZjFJvErZYbAmcshoaMaawfk25o86VkuE5G7otfcE",
  "key28": "gGvCbJC8mSej9KmHfQJ3h1wEJMz5vfmjb7iSgPPS75qyuViQu9uVKrjNg6MG2RN3VKKuA7FkU8LD1dm3yL7gGze",
  "key29": "4moVbG46iUbkAPLBq8yfPw8jFuBbEjVfGFLo9xjy5e3XpPS6UEfvFFWjNgAw8Z4pMkckMDwBbfTQRzH2URRXHw7N",
  "key30": "31otA4gfWwrrZVtVETSXkBA7Ebsk37qw1AsARPuXhBR4FCS3J27PCxDhxGYScSqmh6ypyhCRoUfMRnSvrsmPcQ9f",
  "key31": "4KnU4E1UL8GDXrtKgBuE9jJGQktZDbd1ES4Eix6SJhXeM98CzQVHiG9S9A3vfC97ETP3xfnuGGkEcYfufYighsV6",
  "key32": "gMd25Zs8qYV9YB4AWwguMCP7dP65JtidzaSUHC8ZBWKs64wiS6mvX6hcXsTEzBLHg4zWaDYKkta5rLVrmUnYocf",
  "key33": "5C2cjLd2yv6FPuSi8MzjTvd6V1AvKv6PdScsjXAHMUCQURX9ArCGZGxCWuTx5mwaHXrRgGcSjiZiZSXrYy7d9Fg7",
  "key34": "5LDAjecwje2ogtjE2ty5887xKxBufwmc52Aiptnatdr1Q2kTpADdPfvM7nmg8k5tBzh4397bhEoV5FTxgoRZq3Bz",
  "key35": "31hr36krdATtBoDqBeVY2jnrSK8W3o4kFLsL4Qxm4RRHQnoi5kXKDGHPGgG3LbYCepi2yWogoha9N341UQFB3oUr",
  "key36": "2CNFc61SiPN2XPV9SCfybznHi4cVt5yySchM8bR3Ya7VHrRvyfWKRxBjdPwPJjuDertjxSrLibuujSC82MH7H64n",
  "key37": "3dRn7mcswP3FdfA2fe286S1S7GTbhC6bMBYFZZEFjc4GLiWVcdjKTE8fLJpQPAk8XMYXtazFsM2F4hwXwNUW23JA",
  "key38": "4GVF9DR5iwyRekH4L4v3wgD734oRPyHW8FEPguBTd7rLwAH2EYEfbHo51WczQmunYipXq8JZ7F3ZN9VWHVd1hQuV",
  "key39": "4Xix9DBJJidLmus7acVwZMwki3Jqvks2KEqoWbzwqiLGG7bSiZnFxLTRwZrTv8kiwYwBWiC4khk2fhH3P9bT3vsk",
  "key40": "3rN8BCXZ4fj7RANkQ3K4GaGKpNEGQs7TZabRneYpbCza61vT6jzdkmt2ggSxZGGScNL5dRKUSw76oPDgUzyxGqVS",
  "key41": "2XWEUvRMgEWpygWaBVDGq6vipR5WD6MmbsnxXPt4cW69PSUcG76T54uuQkWqjQbd6DvRqdeDbHxt759H2zKwGAvp",
  "key42": "5gNQuBbVDYVCSnuCsZPTBiEPBxegLng2ybykFHFj7yuqJ5vqBjVzNVPzpLC7C3QjoXdhRWuTDcGvZ11spcwHYcGn",
  "key43": "3wbmu6yY2aB6GswdAPh4GUbKWyZyjqbc89iwXi1YiVFqX1fqYnxD9qUYkpvDy5uWW63bDGnGzdeAeUNosgFRw2qv",
  "key44": "57CQJsHWqo8FjpcS8aTm1rJoFddHEWpUfJdwpR4PcDQT1f5N2NubK3us4NhAPtDz2c5RKSiS6wNU9oGzzvg6xq8K",
  "key45": "38GcCkyLsrQTBMFdKJuoSXaMypLTUmX947ZjpXVkcwUngt48G9sU738YXU9CSgYSZ8fWjcqZvCPdJNKTWqDkS8eH",
  "key46": "4GqXK7GSSXNKLz9mNUHUiyBAdmsXxZX2Ru5ZuGnDciprFNSxkyqyeqUb5sQSdpDaWBV79gb3jnGQLBfruAV9JgnA",
  "key47": "4qXjz62WVUTZDDrPFyT7hu1A7ocBopno4VGk7SBDq2pZonJY954rVWyRjavPwZCnJiTk4opX5S9xtcLoMSc3yUCQ"
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
