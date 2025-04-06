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
    "5HsAuAvNCC9NjmvttjsAcRPV4JGaxsUDNkaiTGyZwPnhg8ZTv9rcNHfHQKK4J4cDt1C8gPLANR2iVsfxJ4vtg9FW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33jbeuwprLqgrdqMiPGiCcPEWRxwHvty6W2U1MYR8CduC4yq6QPDW9bk1kQNpL9DMNMuuTYxR6vPBLs2RdD212cU",
  "key1": "524WBeuFBX5bw19ELPyFJvJVWt5JeGVGVTUKpUFCLS8XmKJqCF4jSqDzmM8zTEC4e9zoLPVNMT6SzPD2fq9fdQ5d",
  "key2": "55jTsXtYHVQGdixwehUkv5n6xsz8675qXU7mUN2PTkcx52uY712UYcdYAupCdsiNAkE6MsgyBVNAQhNpZaDrRPfC",
  "key3": "5ev272TNtnAFMkGT2Fi7wCUwZGd6PiHoRV5xsUNFB9nzHucPbKzYB3T5Y8Hi3MVHUUpS1mx99zYKfyDgoTUqieV1",
  "key4": "2BtW3eQpGdmEYHgDa9VYcKCNPbeXqfhcPrRjTsb6MdGDuj6Kms6RsCPAUJcqeLxQSXEFpSV7HQm7Q7WcxFHybWKv",
  "key5": "2Zs6Kczg5YYszU1PBSV7KjkEoaV9emtfnRR7ypFns9hQ7pDu21ZwdF4GFMcSi1JdQiZ8jq5ZWEVDzMy5zujdeCjZ",
  "key6": "4UjMdbZEmeinMF4ZuFXBjUhHSN34DDeihvqWL4i1bX741nPeW2UWxBGpjiFS7pWmgpMXZGvoASvpScq7onLbZSC4",
  "key7": "2Kds3EUosqqwRfdypwJmGswo3e2WgPR5nQgdXYmFoQaPGg17i6CCuYJ61uMkNrq3XDJVU7mkHnNQhV1EkaBaEmxc",
  "key8": "5MWFjpJnCK5KG2ucyPiXxGV9dzLcNNvBNnBvLieNu73YZ6mUmfaMPfZnGbwjpwb5oXsutgVFhXewrMqHn9xuzE8z",
  "key9": "4x3nD7527adjh6a9r5TP1uUBvqHnFEwJMkXNGEJrjrtWT3crqWqhkD1LihnJB2oDe41WWcU5cY41K2dwFpMnN1R4",
  "key10": "2w2mzPevVvraBPdfLyRPRpSdVsS4gb4DFJGkF9ewfViEpphDNbZFWKbMy5hEsj3dDuZkxeSaXaCve3rG1gx2y5km",
  "key11": "Es1q2ainoQQx2a6AFDC2ShYv58k93mzBo3Q2SmEPcxupsTThp4hpU4RwVHFLq9bhJbuMUiby4M9u8nWwLhBzSBX",
  "key12": "2mUbFU4jPym3TbuaPz2v7KimpsJ1GcMhkwwcZztBhbHLFGrchTiiYTkG8nEg9vk5Aj2xVRzMnndssC8KyuZtDrTJ",
  "key13": "7jW5wur7v8do6dUU4J2WDg13WzFB7XWCWZrzxzbLgVdeAF2fkiCxu4oXte46mDJUpJ8KiHCpeDGUAuLi7F47Nsr",
  "key14": "4gBG4n4LdbrB6ujo2xXUa8oRTmXAB1qBjksByQguk59cUtbccDtddNWoHFBakLMC9pqibquCc9zT8LfkVoGeMh2x",
  "key15": "2HHLfikQWzN8L6nGAyJuQtG35aKDVY23krQRizH7dtQ346d2GZF84AuMVxHP665HR86c1Bisp4eFjsz1ZsDDfS4v",
  "key16": "5uRqjRjmJGGXwGEXhsxQYvjhMSbZEgFbkk884o7fvVSEC8vggCNdH1CCP5gMX2QrECgpohCLBahDFgenu5Njxub5",
  "key17": "43z1VWtFgsfJfA9cpZMPqx1dUjee4SGR8fbZ3FdEYsQ3hjN6bTLkUT94WMmtFeT6moKN5BFivsdcXYNWLTeBWqRy",
  "key18": "3BmYSCKG4zft3F3vF8PvT1qsykF6Ka1orr1RZCZWH7bYuRADKzDX5RW1mkyzPeFgyJxiGtLy6j6eFxtojFDKaKUq",
  "key19": "2DBmvBKsCLiMu3uz6a5hoTaEfXziCzvxtPjTt2bb7u67XEeDdb3PUjffwaVGAgogZTwjbVdRr7NwEwmcWtZaxtKu",
  "key20": "5Hwxn7h4iugwzXF67SU7G6KoQt1QHqcjA5ZmVxFu3SNkcYkXy4BsUTAcE9k4xPmJ38sQRmEMMzHXLiydzhspbVYS",
  "key21": "5yGjQgdnHtRCMu5GDaa83GbzUS5pp6Xg3pPy62yW4WFpCSBY1iAReALDhtHMoUhKVxQxSZ836y7NHucL7zt2zPuz",
  "key22": "3PaMfXUPhcEhf5FSe1JwvM4RiUtDpSZBAvmnzgvGUvrxbE2FwCSHaYBkYRpvjoWCpJz5HfRTccZNJCj2pn279eE7",
  "key23": "51c1wCZA6DpztA9pmPY7bCc1BQ6WqvxedwCNoeJFt3Df9KV4ToR25gWwdi9nGeW72w3PQq5LgsRX3kSejyBayiwE",
  "key24": "4A1crqyG9cLSGZXMLkWzmxmPnq1pXJF4NgPFHm2fw6FvfDUXFS38aMJBJiAZdG5Kw2Vp2yv6tQgamzQ2zSovYGNa",
  "key25": "Vcnigv6JWvrn4dqPhMdUMjxTHVKLxNABLREtG4X44khL5P2ai518nppKu93KDCfeU3MjsdAocyyEvdAJdx7CMSC",
  "key26": "2JtoEdwvJmsKye3JgVZKJzVP6TLZv4nARAVGrkbUGs4oaF6uShPenTSKd8LRQaS4wSpQfWVsU9WjZ8fQL4rQxgeR",
  "key27": "neK4VLD56AjwjVrd69z9L4a4MTBHsAJf7HqeqUsu98uySi5U6hnQbGaH92bcCcxd5Nbi595WvGPxbZcB18hhaLZ",
  "key28": "qsRNym9rwxzjSXJ5UwKe7nE637nCTDLHEdvx8q1sCJDNvWMgU3LKv1jiSish1Db6zdRwuDpZUNNYaqpauxpXVbx",
  "key29": "4Gd9PuQGDMWcYWdChBEH74VqCXCehLYv1VPnSEogt7gmQjHeL2TeScxfKWFdMhNFF9wW6Dc511SYTJ6So23a6s3q",
  "key30": "4vdHg9X6Q5m7xjthQ5qFPRvjVuMzPkt4nj6XTcD42EEaRjsQVTjfrcm614GtiCQDZcGMU5Z5YtaTcgrAEBY254Rj",
  "key31": "2MdzqkWpE7gyo7Ww22q7zJ3TN1xM3vPfsNytpnrbHtCbPVtzk9n6oSPuzToDQV5sQH97vNBZQJMBfrjdvQMeifHQ",
  "key32": "3dZniF9VYRqP4m5oaZ2efULwdjkMaVJdAj1yuq7LeK1NC2GbKCrzNoG1sJ7EZt79qkozBrqPUFnaPv5hvga6YS5p",
  "key33": "3wiUNZtmKdiPos8PfTmcx6AnAEgFJsz9CuHWQCus7jiaR52vzzA4EXAPe2v4q5s9LQxTdxqyqUQ79zzNiB8GYZMP",
  "key34": "oa95CHZXkYv18gbZmHM5iMbxvq9fErXa7TqQwuH1NE1Wdzi1PFWRir7Nct6CcVbsHNn9UfEu9hW9dt1CmgpcDCr",
  "key35": "ZBiXUJzTEY3AL2EFM7RynjmiHf3GM4eTKpHJj19eozJp15KwrzCNJMu1chwBsLc2sPC4iF5iig4649UNu4Fdpju",
  "key36": "5hYEVnCBF3MxE5TWoj78CSQrzchtHaCgZtZx1S3pcvFsBGzGTpoyJ99NnMBj3jv19rLNo53YnJPAGgMWDkMG2iRL",
  "key37": "41qV5haF1aATHuk9BjHHHu7bDbsoo93WvzzN7MZheTZLTL5d9r882AP7otuRPBXYMeM4tb2k5STJ2fipTdsgfLec",
  "key38": "2JZi69WbwFCzKE1PvyirApQfXkLzLGvYGfCDsfhuMFAtRa9587sjryTEonpMpuccBeSwwaJWewQotijWt3ofQgjg",
  "key39": "4DuwXQL7Gkv9kMP3SXhxdjB9jkJMBnAY1cN9zKfinnerq43So1JXk41EfqqrHAG4fb6sYsNEHnLdwuJWV4GqF1es",
  "key40": "41G22ML4LYVR7r3jk8FLkiNk7yi28igC5sss5uQPythEJGRQEsE5EC5WZTDTX9mHonCnJgYFWiZCYR8mQkGakG3i",
  "key41": "5MPcEgFvxAqVWZ9dcbjUfNNZGEuzzur6wFwYdvRoo3wuJb3MnsgbJG2zvy9LHvTproMwruge42XqZFBjtW8SyBgB",
  "key42": "48W4xrJ4QB7mHarKY55Grsipifq9L3MJBhc3Ndyr4HXXoGWvHBdNYzAxAdiYaSF5h4DXS1zbqVc6R9NkSJhXfG9y",
  "key43": "43ZUWfvbhevcGP7BZWEvE9EDKGoZeP53UgqZuzL113LZsXRFYY9P9FoPzo1zuWvmTdDtjBLgQnbGTV7dNGCviUjG",
  "key44": "4YDi9ziwwr4EXdNMJpToNnFd7qxiUq6yf8JY6tNDpHVbxkrWq2mbXsYnW1MDqC3qQytQnnAju55cRPJnhfrXokbi",
  "key45": "5C2Y6fW1Z1mzvTApJ1wm1ARjtYrVGVK2A4GnnuWB9UbEpXr2iwKd1KcdVZnBDNFb1FMZkh751uWDzbKHQYkkrNTU",
  "key46": "41mLe2LiNkEupMxonJBWdYpzfKbzRAcGYGCBYmh2uWXbrXiwSAeegnugs1UFas1i87epPuCu488qTGxH4gAugTsa",
  "key47": "3zBU69L3YK771XbrahB9gmgsaNbJN3YNNV8j2yTcioNKUEWQyELuKeaPDn2HoKkBmezB9oVn6uyj2Yek5aKDgf3"
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
