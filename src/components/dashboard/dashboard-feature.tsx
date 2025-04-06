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
    "4h13YdGcYi9Ui84iP3LkFYk3a3CQJYcNn9yix2nGS7DUu4EycB11rD1FEU3PsdM3ZbtREj1euYXy3Bhqeyv6wXqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c4ua8WBa1R83SWoDD7QMq36jQXniFpcAcf4m2h1qu61YiQGdogTwZrABjm4TJqCrz33fhZDamrLgKzbQY5QA6xj",
  "key1": "29GESv1oUs2zqZHosT8fyksDihkc8FuE7cVhLiXS9awvzCRgQH7sEwauKGQDpdWV7FP8k4GCFCZsA68nLEj3RxZL",
  "key2": "UpUoGmtFqbMh8k6KrUEn7ejnWQ9JBmCuMd2SRYEj19MEe85jaNVkgXjpv4RDfLRfmUqgM5czcMDm6MjbjnLsmuj",
  "key3": "PJJgXkEf2etat3FvUgPUxJETV9b92FuxTychhM8CqP9UKwJwcFG919omQXpPeigAhtzVsrSjf9mnBhfTLBwUskT",
  "key4": "2u8SKH3npvRMrScAUXYWvRqLtwttVu6cXcD1JSqDsvVorqsS1dPpaADpFCwnkfA4MZroNWZx56rKGnTzY635iM6M",
  "key5": "3qXHzQPaRuMJWntdZ1xG8ea7rM2asRaxBhqsiFdBB1cUP2BXkUg3KAsu6veWdJQA3mGDMTm3Nr9xmRm2yJeVTwWY",
  "key6": "4hKbGCJeiCujbPg4s12t4SQzHEFtAsa15MphUt8EK4Btpg8ubTHUhDprSzzBu5VyEyWsPWYYEtZuMR8N656EmX5a",
  "key7": "4Uz2MReYqyGfefCGCMLWaiVv3etSKUkhWRR6N2nNoCnHUfPxVJczxfx7vG2ashMku2VdmWtMa9nfVYsQX1JJP9sF",
  "key8": "Ywtryppo8MHAWq4bsXxbpQBbywDPbAbKoawf3w9N4PoLWxbxVvkkYhUs8mYq4WT3VEUsoxUxXxn84dgiAEALQR5",
  "key9": "f61deL2M8EP95mcMgw16voqpGP6eC5sHo67SaFgQvXd7b2U7bqhj1GD4CFMp3BekwEeLQXYoxaoTegZTGmkM8nJ",
  "key10": "4t25q7zVNCzbtRcKEZtr8ZS854qsB7zzr5yZxdMWWV2KwPn2GtJ29LgkAJ7vjHoPxiLL93rkQtAMaQdB17wvZJSZ",
  "key11": "2YwT6LEoa7wc1JbUp8QPBpXwt63wLWroqVPe3H95vhRGJVytkpbP3so7kjUJVmKrjxULdNZR89m6ZGbZQgazsi5A",
  "key12": "4BukuNU91QV84TGKjd4s84iGcqatv9vP1LzbfdFW6ZT61rFzzEGVYjMFCqUPrEn5HGWMHgX95Sx4QhN5QnhH3Kxt",
  "key13": "45Yos2nJVquHTfCgYkihtQ5Y3mZ6UzyGcz8jj5evCumemxw6Z4FPUGsH1nyKgSFZP3H8fimaAKQHdr4iprwi5pJv",
  "key14": "jgD7fJErzxAwK1eLTwG89DrwJPzrEQxMeRNUsctfHgnG6YZ7vZdSvRMPgqiL1wzPWYsTuyT4Pww8XTb6vpvCSxa",
  "key15": "EDGc9bzRK7xvLamSnDhDLtDXkaxZhxc2iR4ysqTV4tA87PhxiXPjPrBaCu8FHTcAQTKVntu4pBM7RgvaeziokR2",
  "key16": "Vrs8KGcnaEdFJrk8ynWBWomx7bK7TsqVh5tMdCJuLTfTKnuNg4EaFD5P9y9GWyEDxJATgCMbcwjPKvq3JchaMVQ",
  "key17": "HMizcZFSBr9FXeG3JmvfFfCxDL7kv1nh21p4yho8Xzu4CgZaKmnin5icx3bc5BeW945FzDrveMjWPxLHU7oBq9S",
  "key18": "SVsuAqBoE9f76WWZr7sv2yZK4HKroRjggogBYAfrMTwZi4iEzXgSBYdzDmSUcnpyetMrAX7rmHMXuc4MevKX4KY",
  "key19": "35xVFwFnJ4RWi9eQz5LJvb9N86SwUpcQD55DxqvqTQaj6a3hfJr16R7QcXq98D7YGpC8jVVy5Ve2fJdz5W48ayAK",
  "key20": "4WyBHYmF5VkgAD5cM3yqwfiFZ49b1H2zNpVHJn8q2FbxzSZTdKEFW4gzm68SuHFffWzWEroFaaCSB3VuzmAnrvjX",
  "key21": "23ZdRzVJKrLrwyG24i1SVpu7Ecn6Lp8HqaXpPkoYewnWyQUrwhyP37RV3Pa5eLH71GxBz6XoDQD3ArNZUFACn78G",
  "key22": "3miZ7hWcP8h6yz8dom4fAj65X1UtsJnQWEpekCuDV1dqH9QYY4JRrE3qpe8vXxu33uT9jwNfLLW54ueWrZdQk3v6",
  "key23": "2dKJw3t2h8xoo9KsFv4unZw8e9StWdVp63ZbnYbuUSgYWBm6uq53NcFQAHyazXjUHaUmSzhfhov6mSJGxZJrtfak",
  "key24": "R2rxhRLkA3buXb3jpdRSLPTDXrSMQx23yLdq6Wc1BfZSeECcV7XoFjQYSQr58VJYybgVZioSGuLQm9Cgsxd5XK2",
  "key25": "2dRzLfwL8kUjKpNgx1JDTSdDpKyMTa44vY9U8a6SS1fuA4HdxVgQrdRrKGjZpC1dSoWU2hBNzDYk5QUptLmUY1W7",
  "key26": "Nc4bPQ8Z53jaVS5hFWYFyb3i3CM3KdSkM39kvrFpoSYtaAMpn7to3n2uooBMA1466rDYJskP1kgyukVwqsKDhzr",
  "key27": "59fkcGMBtZg1WeP5zL7r7AVwooBfEhHTK84kC3VZtJsHxJPTnKB2C4sCAzgfNyP4ASphqbapvdCu9KnAYkmhXW72",
  "key28": "5aq8d9Yt9qpt9CpGmYCN4tgaqoRNkGDZAqQet6YALsXFusKJvjik9pc7B7kAuBUTcYUbaTsNzYEmccF2ao9B47PD",
  "key29": "59JjivDZq9Dgio7BX5usxifgiAtiXBZc2iazSuqXhQ85V4RD5dL8TsxEXeSEJFAcbDbQBQnjza7c1tTPgVRyREu2",
  "key30": "3ZXkvGvgTt1mjvq6WAeXTSg7BDQXzBKtY1DS8G2TEQma7q8MHHaG55aeQ8RHNUviu2JpExkCkZxt5JGZY9GeN1kQ",
  "key31": "27CxtMsYdJChX685DNVB5ryd4mfTVmxXwRSSK53XqHmgKAzGfo5As93K8UdUGvCsAoHQx3wwZRZgFThpVv1nvMXH",
  "key32": "3S4yqC5VvabZRZxic1nbcWeF9HqZzHJMdzBfewHn3FgBHhC7ZQAcQn74aCrS3YpKibTeayHzaALLVGh9zfNpHGEu",
  "key33": "4WNxeA9CtPfyasETRShGPbgJq4Vhf7YS5ncYkZ2wkRi82ujMwt72xKdH8VYSKWL91XiFASAVfMinQT4SzQxVaZrv",
  "key34": "GF4qujNGewErqYhCCamAqaYyDnKD8tn4zm3q4k1cwBS2bQeuXVnNEX1fsnJk1NDRHgEnb38FBuQdqfr3KopXZnY",
  "key35": "5KJk6NiSPnvLNgn3zn1wUceZo1bSSqd8UBgeCJzooDytxUJusbzd7agQAxywxzZjfuq9MHJZT8vuj9GaK6PsvpsV",
  "key36": "4U3GEmTXqTtbMGPbTG3VmJgc9rFnPcnkbkJqqmK7YGA8ts73T5GomW3GFoy2j2YYyHdYitmXzEYHvicV5tJXwqJr",
  "key37": "X8cfcateU6ih9DCpGGxhXNCh5Sis8nniWZeMzsBaQUXVtXgDJxNaTL4ZgDqxej95reKV6nyD3PbEsyQYAeFNsnk",
  "key38": "2bJELNXSAVsZGr9sujpLoHQgvtKTJNv4ESm86eJVMQXw92d7qfjuynGg21bMGMB9i4Mq3kkc1vNVj81D8BkBRUZQ",
  "key39": "3PmcqQPbEpVPgx9YZcnep1Aj8pzweC7vJEKNWXjX3A4zFTy8cUhPDmjqmEdGeXxW419Eror1E7A1GYMDtXbcyt5q",
  "key40": "3aEFhAVc5nH5zUBVEFtEHRyN2fv3ZVunh5jX97Pvio27ewqWAiyLQ2MSp8iSNPjYjmkQ6nKmG59cqsx6onDyVdTA",
  "key41": "54nwbaZQvf5um2QZb8WLHWayrmJwRRUcrQ9t6UGHZfuqEY4xLaoSonR5umEhgiWusE7bTQdtS5jT7yeFX2g8USbE"
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
