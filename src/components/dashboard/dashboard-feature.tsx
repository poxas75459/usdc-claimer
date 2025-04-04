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
    "3gw3vYkS31S1ib3WtWfZJGyxiMgDFgsM5EYaUdB6pQtoEaWimk2awTfKgpZ4fJ3W3U8ftU9TqxDQybdXgRqefowj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ndSgziFqidm2ADG6neJAFePP5C4wGLrTmun6iDuqccURJoMQYj4mNgDfqaSMSgdvPR1HAH2KTY6P9JPVQvL9JSx",
  "key1": "bPFK7Yb8qDnUKbUjP4KCdFf9iV3jyNRpNzdQ8z9Gj5KTpEUX52phc5Na223RS4ewrU6AWgmDt1qz9dW44qLnv29",
  "key2": "fu3SvBwiAVfek54pj8KBCCKTFq5zomjjHu4NUbvWhbhs2LrMSBYc2MbkS1ohsJdUojUVK1b2VVQ8GinW2Uw6kCx",
  "key3": "3o7Qx2RtxmFrtixPWHnczoik23fjTskEjNeGd45UTaWckb9WhY5dTN4Z7GjYRY5SQgDFLLjCforV7drkSZSNiRgC",
  "key4": "5aNBK2mSmSrux6MV9rpTNzs4GjirfvFw47WDMqZKUADuuRJFf3kWwBm2Vw7yEKqHBTnNMg7GMsBSWJEhiyVKyiog",
  "key5": "27dummWZc5tCcB3y6UxAssEbHxVunBNpeh79d9oNm4ZCpvtLJn9Mz2dr7tqRe54DLn1ivbkc8Yvhxh4K5JncdQt8",
  "key6": "4JvL7XKdezFpjXJTrdAQfYYYtouMX85NMfB4e9Tvn9MDfDcfmXeS32AtaDZgc3yE19CnDWuTqqLatyQ5R5EWuBfc",
  "key7": "2RsCERPXPZKBDqf2HnQoph2wwR9rxJrkgBGs6rhS65THp6buQRv9EQEwtbYHbhLNNP6pNnN6rhSbMyYTnWY993vk",
  "key8": "3aCmCLuic82KKCMYus645rVi1LJkvC95t8CA1c8i2qTVuB3ZpDkV53uypa8vX9gr1Ny3qQNnZfnwnkfdtSXRdgfE",
  "key9": "4nnifvLtA5QuQiL3nJrFK4pP5dQUFaAnRnZdGhfcc8G2CZuKFxhsjeHGGUQXgodSMLtjebXSdMNvMD14UecPRng9",
  "key10": "4WFDRU5VYL8q93ZYBjGBRuaU2FKPdB3bc2rZREnmkbSQJi13D9FcQNDqWqSthqbf4tN1NowgGpNKbCKAUmT8dTXu",
  "key11": "5yhvP4t1dsQtmxoRq6fXwu3anFvBGLQL62pAZtK9MPyHA3AarB5NSPiv4EKkEwkbhPqkrFxVCscSbA7d6w3AFYVT",
  "key12": "3JvmrNcjYs2U5i6sC6zoJFXY1PtSqrmMtaKnfWTpogVJCbew8jqL1EX5RmPSJ9fX29HEBAZwEvjVcVXC83TqjBXV",
  "key13": "35u2s2JijPzvvWKkM34BXMfZxuFiaxZcSBHatyHiqGf21R85ts3dBbBKGciFGibQUJtB6BQComzEcxoDBmDnJ82z",
  "key14": "4pfj4vtrhHsVUqTtxoCYXurVsJLaYighBnVaroEdn5iZ1vHdtRimTVqzGyXDTroDnTeR4dj72KpubP6MuRyAAHDS",
  "key15": "42Sz8shWugeeFertvpySenS5XvNLe19q726SzoBBtBZhypTQ5bCouAP344GmyiondKyPLgq8zdx8ZhU8gTw1Qm8k",
  "key16": "Da72KqVtuCjFGpwEgsi3c1k9WdwhXLQJwzaj3t8NiLc87YdKYyBDYzAHbSGZoJ6nRkBEVKsFzpizjJc1FhxRiAx",
  "key17": "4KvgNSyotFxVcNgmKVZGzn3tjZFVcSNvosDQ1m33hRK483uEW3zGt723xvC6xBgB4dvuQXwCbKZKAzY3M7QuBmL4",
  "key18": "3w47aW3KU8noUA8FTgfonrU8N8cPWge9GiVxyri26mG5tbvK6Qo1iC6mYUSDdanCQFCgJyBCegjhsaCaUKPz5uT6",
  "key19": "THvZcp3MUfkedK3LDaQeDmKdY8sbYQSafjeWkPKvzgS12r2VMcUr9Cerd3Tb3ZevqpTArWG1bJxouq9fNU1Jjsb",
  "key20": "45s85qLz6vukXQUCuk2nhmjPB5au8EQTim3cwRUGAvQcEHTGVCf75pLu4PNbS18en1v1XibWMzK8m1j34r1jsEDn",
  "key21": "w3N8f3BjQoceLGnqHF8HyvJPKDKkBWhuFCv635Met8kgbmueWK2Eaeadhyf9PLMqLAPwnJEMLJhsJnC3mWCCCop",
  "key22": "5udfgMpCNdqwPKQaMj31ib5XdNvHq5KHESD8c4RvLy4bvTr8u6cpRzYmbooTRZpWN13Ra3K9767uaeGzXJoroyey",
  "key23": "43hYALJTR5MmKeHFAFbe8Y6JviadPuCkJt8AcNwwW4oki2p8Ug7hS3WJjNhYEWY8EY5v5qkVUtyihhQEi9AuQxsN",
  "key24": "PxpNDRJWprBo5j2ZUApkSAT4aZABppv4pAvatj38tFVjHP2egLDWDiN5bnnacpoWrpLSrojJ3eRRBTgSHYRSofh",
  "key25": "5pMpFxCHYXsnbrA7Ax9KYiMs1H8hqRF4oZsUjfA5z611pYFzAYjwyJoKWQQj1XxsyCPxh1DHjb5xKuSpPez71qkv",
  "key26": "45mb9vKP8QDphpJjfjVKbqaefV8khFqYT8U5onJViAPRxJxu6Z4zk9W6RMsiQekn4AuJDtmAQKNQfJtKEHqhMz2v",
  "key27": "41hxmQ7nuHvfjYLLGgJHTbN8xsW1KykMTW8rJUm81sSbotCAcgLeCckPeYar1MqTqdmpeH75fVd4MocjcEpe84TJ",
  "key28": "4UvsA5CNjdmkdqGaxXKvfrLJMbRnWTvGzt9DYw6NXVsFuPnURXUbYtVPU21Q7MYPP3bh78vUcKnAKvRn1hEaTaxb",
  "key29": "5ex1aa1ka9SVT9vgAwhmVuQXZDwgct6gwuTP89sx9sFdd48yQZJp4jGmr2ZxshFx6sxuQcSefgif2w1LokMScCxZ",
  "key30": "4ZNALEbQAwMwLYjGAJQz7gsC5yWhHgCxgfnbe1N1yfwFk1sZaKRkBqDNqS2a5S5dxR12QVk5Lnh7ijMvUTdwHrLf",
  "key31": "NfJm2ffrweSuYttfRRRc1BVqChdJtWfbHX53Z82qZLXtZzSDjWaeQEVi2PkFh9XHTaDg7k634pHxNJPLSEjzz7N",
  "key32": "2qdU8Y1ehSXGAbtYYAGVy9MGRdpP8G73Hy5nca2p46vyYJcvCcKumJRnkeNJHQwJWcuMQ85pwzbYwMJvdeq1iAeb",
  "key33": "2TAaFXeJKhxQSn9wF5qZKrrrJCSb5fG817fFt6kh5XkUKBqzgn7pYaNent8QKE33aqSVKXgEukFMBJNQ7wzbQSNi",
  "key34": "2d8g8h1Vrv4Z36azkULhMiQLXwv28JhfHrxNeuEtYDMBpwr6uhcZ2iHTq2mZ1havj9QRELDM2f15MAfvJHGDdfdm",
  "key35": "34C4Z2VKvSA5nfUJriKFTAbyJCNWirWarqcFvzH7dKFGj1e7EQ29DXN6ngX6Ak682Ba1wPCghHgHTiyV36ErmfqR",
  "key36": "45mqfwWYgZF1HyyDj4XM7KkrFsi8UydQWWQtXENMNdXr7EAHEhtXGGvw1Q8bHZsMA31Aqej74TWszNsaL5zrUwig",
  "key37": "qjHKt5SyD1oUvbErVcUeAykkrn25Rg2ajtxYi6iP1XUfhjvKyCLsShmva9jhp9mVDowJ81DXKqciWnxJZJDW57o",
  "key38": "4ASK8JyP7Bq2p7FjJzUrqoiCCWnR4UfXJvSFT7QP4yJKnzuRKRA3CVJ8YNV5YXskWnikFBTSUEP4ERSdFZfkE7pr",
  "key39": "Rqvjd96xAbM4X6F5TShRsnbW4Y3rgaQgHBLduvDYEsBVMDRSFKnkXPi8vxxK2BaCR7TzLJtUospufxCPAMNdC52",
  "key40": "62Bo66XHmRP7mMJaD9twzUauqfF6MdEY5WaupnN4LaUQoBedqeoL7h7k7cSV7x2TYjemfTa5TwAHDTZjNB1XDXcj"
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
