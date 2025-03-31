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
    "2mEh4EEqP51Z19uHa2YCvncJ8HUE4J3tQmtDk6Ybz6dKuZPFXCbwHMpsz2LUqwyne4BHDrfww7DRw4EUt3ntCyeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42qjDpDN3kxjy8ZjEaW8LLRbe8RMnzyssTDunKZtYS5DW7To7anuBP6QVP23T3pNKaKZRTgKToES1YeLdjs2e7Ly",
  "key1": "5TXW7cPM76EduyeyH6HKrpX9MG2Z68n9hpX6AGJSNcdqCobWzzUoSeX6Wspd2eWEgfLUi46GZtxhybrgN6PiGrXC",
  "key2": "3wiHhvHDwQE2V1838kYcoq3zYKynAjf1hiHALp7KMDZzoToCd51UN6mUxsyYUL9LWUy9QUkUGV2rGvb33z2qC1nJ",
  "key3": "4RxtPuFuVVu9cDLEiHMa9b8Ne1LkdAFtaQKNPwy18eV3eyqjhprpsXLHSQk9ZQn1JShX8qGfewnvpEvCYzN9Mqv2",
  "key4": "5zEcbdwr5TsPFJuqLBFa6VLdZ86soN2ZTobEXcie42PLLWqp9cEWMQ1ZtGiKpW8JGUsf5WcbeLDLx6Zz93rPX98o",
  "key5": "28D2ZfWCE4CfKY3GbpT1X3Yq1erLds29kuR612rHBVzv44eKssVKA1TbmanUKVosiTCsiQ121CijbDRyNgkBKcoR",
  "key6": "2WMmSwTgY7Tcc4vy4R8eEAN9mWpyCpg8vkq2sLknThNURoJbUeiFNQBqBHBUaMiNBxXRrFuc4oHKKun1cby6VUcc",
  "key7": "SP5g5xGehWs9krxYQVHmWPM1S3GwJ9iKN4vJ6aZZj2fGzFcyHdd1q6T4j65tRkSytHiTMaEPwQQvwC2vrKvrKUn",
  "key8": "4iB3nCERyLrs3zUY2EKcJfkCh1b7ocYL7vTMDUvtSbuEVcqj9PhGnAawQFhmxZSLvc8XfQNo5L538W1xkdrNSyTH",
  "key9": "5VZ4WyZye99LAxPkcKe4bXKRLW5QY6BB9PDvcFg6ByujeZyVudppGwJvTtqLGjepvDB9tZKtCeebv3PiddtnciF",
  "key10": "3HDEiBSfpmR22mC1ePVto99MMp54kBECht3d9akxCvcGwipc87FwqrwhdDVYZndnzeWvLYr564kEuxwFh18xzTtk",
  "key11": "2xzzWaneX3Zc1SbdaViBuZfWw5LL6qjNTuFduTG6UHm6A7b8hfkbzvxT9TbLEdkJk7JWrJBjEvhGfSHpuZdptRmy",
  "key12": "8uTk5MNTnAwMLqwnUT7UQCATR5iULaRNmTV8RWZF2GK5Zaoc5yuRFx8sP1Zhn47R9r2Uv1wMLKBPhXcbQRgMgVS",
  "key13": "3qstkNyWfurbrXnd1k7auQgcLEVYxQnWpp88W6LyrVYYqMA1F7s7j8u1VpH2a7UJXSBUZxwq6ZBMTunimHtNBf6i",
  "key14": "31DAZvbvLLFdoAGTqN4DyEKL93iGWeNKBJuqPvvm39qYQFAhjduEoYgVbcrLTLuQ2n7yep6U77EGadsTdXudZduJ",
  "key15": "3NpcsSqC5x6L7Fu1XvjnxiNqq8uB8i8NpZQCFnHRiVcdSU7TmiUEz4QYFHZRoBzoEuU6oV2uL2avHVS7znBXVYbh",
  "key16": "8DrEkhXD3ysP3xLcaw6pt6Kx3aokyEn1UzTqLgNE7kocv7Kg3ZTX2PVEx7G597JUoXKSssduqmSSbDdr55JtL22",
  "key17": "391m6pLpbid3PP5Qkd4nq1XwZduMTHw6BYxiq8u48TZMdwdTWLiv9yoDXxiyw4dwPbUimcmrdYpxtbsNTRKa8pMG",
  "key18": "41G5c4rF3mLy9pnmdC4cQGJDeiuR2XNLYGTypgbz9H8MDNkVDv8vjzeWHQa8F7r6G5WFFoCNqHHCYZPoHQNGtGhk",
  "key19": "2aDWd7JcZNR2QQFJwyLmKJ49b1bDJp7s9yDuBrs6GwSGY4MQvaJE7HPjyGYojd9yj8akcwCeynqkrTmRda4iK6pk",
  "key20": "u6FmAvrhDcfv72TYiQLWckGR929afoBTyYJX3v4wjBxiQEJieN26U279i8BQQWBpv1HbbVAWTo2pmRRe9ZgamF7",
  "key21": "ezY2Ltp3wuYH8VBmudSsSNLuPJPZ9hyALMyNqvSxEvQKYXRw5YZnGm6dUPXWQywmW5xpSVD5vQggwCEJnRhAMro",
  "key22": "27DZ6pe6bU5eTBCxHWwz7RwiPbfg7WKotZ7hSPF6Cc1UE13CAwwsqpX3qLsK7Em9TPLXowgcjHb3JKsL3YapphU1",
  "key23": "2zRrRq29U9nuJn8RAYntXY75GrDmMXPbNWZFeSqcjNz9mNUF5fryxU5K51sysEWPhN6w3SBtKBxP4vSjkhLHibt",
  "key24": "2oY7tAYTYnzeVmFdk8gDYJM3UYo6PatRpkgP9vqkG9VXeDGm54vW7boh3EupyB5CSRB1VNhHPjghNUngnyK9PRWo",
  "key25": "2asWqXfHTn6wATmBxRRxUBvfd7K5sJd6GdoqkpRpsnRtAMfHEUFa6TXwkMDdapSwrmtR2HsZaTfxYJ3oMJCNZysd",
  "key26": "3hXHaQVNXp3bLnq3k6khAh5Xb8V3s31BsJPF18ybphUhsNTKitxJbty96TgW5fSu3FuHjsfQTps7zanPafFVtccY",
  "key27": "3ST53ZgcQuES6SEimEUT3hbC6umrCK12QuyreJU5U2R7h6hgQUwSku6wcCzdkzA5gKaS7gGEHn1KBPjqrgn5FJit",
  "key28": "258R2kWGvVXHVP57JY3nXM9RTMnwBoYWrKAuGkiQZ1DVmrop6j8ipAr2MsdhgWDwrQ83C576g8u2ye2v5wxAksyZ",
  "key29": "36KMqG6WJxdJgBYkW3nyRcEmFUKYReHq7iiLxgyjUdbzfkZkAFosAsmpqBYFEyz5wspXEr3duKmpmZGsc4oio1Wu",
  "key30": "2F1oSyEEuUZRuFXHj8KBAKFSZuNcyrrJM694UYHnR1aw4rXCyraLKxNhuF9ps3uwrxPYxarkMPDoiaFc47r5srXw",
  "key31": "2qVEyQsoAbGtTo1bWvnyYNuZfq8zEkFRgp81XD769Mmj2yzQRNHcnEvEUiCeQ9dqLigKaZaS1G6dZWMpFaupgTPS",
  "key32": "4qsK7jwNMqMBf57kGAgCL4WnKrfFuYv4B8NbBk6wKAYNv88Pw2TjmYqwMiWtha6uuNsv3C1HLErJ3PukuYHvk3Jr",
  "key33": "5nPfMnPj6hMNiifEWY6DUrbyPKFVYE39Yq1QUk1zxVGy6928au7axhJoFC96hKvMgYymWSB3CHbMz4AGUWNTUSM7",
  "key34": "W8RJEjrA7k2V5x5rhEAorPCa8xQFp1Hhn6JahpEi6EvXTZb6YGTUVKTpsQLxWt5QEMb1yaHo3e8ZhHgUbMDApvX",
  "key35": "3zDWnB8viCh44FunvySvdmvH2JHWVzJUmQesQaypZTjoZWMy5RkfQMWhB51sPoUvyNAYrQZCHxRkU6BBEviBaKdj",
  "key36": "WuKJcCQcsJzPrtf1Gy9WTW64Wg33fXR5e5BxJq9kRHJSf9mVS87qXrTvV1qwvxk5nsmao6RF41YdSxCsE6VohEE",
  "key37": "2oYAXeqGLkNgUF7qsh9McP8s3WDRW8XVjM1f5GWbMHxTVBGyP1fw1Ga1KkjqGwMQMz6qTmYNfFx71b48fnaxj64c",
  "key38": "2f264Y7FJfbukdrAT7rUWp8c5vz7Gnz575zzxkimspFEJLLvvmWrcZbpc7hdTQiWqRqXyMYQrGjqTNKX5yPXaBE5",
  "key39": "4f8wvBBzHvTR6XTEG4e3v5bV4XJt8mFx1W7sgSzBTQhvXzhkKHQfT3YvQH5e8UbWj4sUpWV99yfqsVY9yQEDndde",
  "key40": "5X6sf8BJm2PB3MJkqvB9FQD71AUnAvxXXeEgr3QdBGDhgCHQsenqZsiDZD2iAzkGUhTacwewVut9nA7A6JPg6AtP",
  "key41": "2QZ57GyTLkzhQVgmv1K8ojEwnU2ZhZEpaUTZSLu4AcrfE4Z5biYiFup9XVygVXXGDyD7N3ptSahP9hP26NX4Ccsj"
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
