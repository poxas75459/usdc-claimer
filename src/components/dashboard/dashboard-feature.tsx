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
    "5X9DUN4wgnX5ELTydmND2jNpVUgnqRNVQntnBFQidobc26g93B6RbCmhRS2iKmYTjhJ2nVo8VYwsC7G7Wp1HGzuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UXJ3b75kquo4DHuxjpwtwrz2xHKnCMfYc8LRsevgNyZX2tkEJoPTro5Y5DKXHuXkLzdDz343u5HvxSUatgd3ajp",
  "key1": "yyBtmbyDyTG36kTUphGxPdQhJj1N3iMATCxWsJYsjydJM49t2JY4HdUqmAjvipgZ4CMNzML8nCUGJc3SviV5C8F",
  "key2": "2ACT2ykg1M6VTRm6WX2PzRnp2axmGg99iSHr3vMtgzm8Gj3z2zQj7b6yGMsZGDUK6EJKaXxjZaENmUqZSNSegDMc",
  "key3": "7hdFLwRgpyfbGdCcXLhnzFpEHSYM6ioYc441mymMmptHoEApQMHVzqN37GLPRErKYvYJaY1u4soLrjano6BVPUx",
  "key4": "3mAXBFUjr6NfHdmKuP1PfcgoLqhT8yVxS2sECDML2geWS8TAZXGPEZbEi7zLRA48W8RhrTH9CLTaa6S9K96VQ4Wo",
  "key5": "5fUeCPP393Xe9T3denEh3UMvn2g2r4iCrfPjJrZyV5fiV1UKWvLe48bQp9DPDDLMob5kXUq2wgTAZH5jur323kRt",
  "key6": "3tPc3892qUEtfmsqiLQdfMpWT8LqtXARs2ANw8915z5tbTieXzBTEbSDaPcfExu5Jy45qraj54vt1VWv7juEDjEx",
  "key7": "3QukPUj9GmAjNVwHiEDjRSXuuiigczDKJQdKdusehieXxqzrUqqZEM31ykk4YkY7NXvHqVMJGf6RMLNQQcrzRYio",
  "key8": "4KC2Wv9zL4LsoCFMweCjAhvpwXrzfftzgdPo9X13pirGbUvWPkajUKSQZKecTzAoR3AXJU3DLBYpPtPxHkoXJP7d",
  "key9": "2SUhvacxN8K44ZqVuu6o8KDuGW9GEvMMzrENTftcGViTnpxU56UruZTTfw1wGJvGkcg5S3MeuCxVXAANGMixiABZ",
  "key10": "5rVyoYtemLGFE6yobZiSu6x635YxtYaZvsBCu3sbXCaHb8TNdavXdScY84ggekejbRuS4F1L6cK5NQpCVWL2E3E6",
  "key11": "4UJyLktJDNtPUqJwgZyMWkbWRZdh7TAKu6uHn7XUQAqstXdvGsbiQWXaQNhbxaVqWrBbeKE3uE3nTLUAcGq56NMP",
  "key12": "51few1yAnVctw82JymydY3sXfgBJ28Mcbp3rojFMGoSKGm8mT2j5nXxuRsvoJArBKrHM7MHAfdRiQTxtv4257VPs",
  "key13": "5ZWTLC7ef7N7QfNW6AupBDgyGsWXggd2ruz72N42VnFhdyVEGxfTKWPeo5irzjQw2ao2gVF4Cp33B6mzgou977Xj",
  "key14": "3kztvyiQQDRFUbP4ukNRN5uefJ12LSHmKM8eusikcmE2FfsjNgtue5sR9Peqhi55Z4GYNWXV2nVRkDTcatVo5d2n",
  "key15": "2VzHqKgaGXCFxHbtEoKoQLQmuabEoYFqRgvq2yXHw2UUfdgswW4JtEy1ahLscsPssYSLj4Lg6jbUoHF67PDh55BN",
  "key16": "2AcMcDkyiCYSeaMXro9jL2fmEKU4aAFGgUW3kRZgnSB9phAQ6kXWqmJnTYRF8EbC1krgxY9SgutgSSoY6RSG6MeX",
  "key17": "58uWKWrnfs7KMDek9JPsc8uwDiqVVuC6aR8HpgNLsBSD1YJdVn4MrtY4piYmEsYmcuUoMkhdYDTK8ubjaHeFXF7G",
  "key18": "3z115NQ2JGYD2ETzD5ujQjZkjNQv6dHaYDy22ZXUfABUEmf1QUh2j1P2zKYiNTK8dgg4eKwxVuRiuu543sxGB58J",
  "key19": "3TMrJhS7eCv5pmtja7jckGmTXCtEPoHT4GwWkNXGGDe1b6E2bhys99SYiJ7vonh8QqoKBqpQWFn99qCQqeikWt2k",
  "key20": "3WF4jwxXDNiFDTeox5tx5hLTmwvD9HEwDUgv26UQzgvjGMBHkxQ2v2tQ58nqZTScnzaExQASwy1nahdt7Fpi4aXb",
  "key21": "2AdjRm9LHqbUSU6FBHdFEwU6Zrv52xJdcfFr7p9iRj2jHuUZfcb4XeKuk9Z3tTnMn6wdVWP4spYZrqRGsZDcptZ5",
  "key22": "5FyMrbsGYvjCPCvkG5QGwsPSU1LWuHDzqXjtYubiMCp9grxdbbetyhCa6GgrWpqkTWwmVUcAksoCFGskAtRjfx1h",
  "key23": "2yWu6VbhbhEXyJcjKPjprPjUspidpPbWQuDqE5JSg7gd88QEjYSQaQ2r1dsnahWM18ZE2JpjJwysWwn9ekKb4q4d",
  "key24": "594RNKRBP4Ru17bfkaS8T3JZcAZCt8wGZe8AjmHXyFfgMkJchzqogpsRcX5amThS3yeir6hUy7vknDu5fzA7C65T",
  "key25": "2rabPSzqtE2JB5FKx6hEHdfWAS5kbqRyDnkVjKcnVzr7GRZNGnC8YrVDfzvW62FsC9dhExQ2FR1RTPeX5cnQnL9a",
  "key26": "4Z1Bp3tJWNauZuXdTKSbBZyNZhAGSq4RPuaBU7D67fSwc5rdG67mFaRmCPyDdExiAozr5r1Bgb5PEzqEgWx5T913",
  "key27": "54d9pEM28dcq2THQL1t9Gqk72c4iMgNAAetHrrcqPWbxxxm8vr2HGSjDsyHKmpaRXeVyTqVEkA1foQTR8BeXN1Pu",
  "key28": "4qFixaE9ZtHt4nepQMNxA5JRRwf8s4Ny3pGnm3Er4KPb1ozNBorqfztgeC8Qi1wcqgBN6RNBExrrUQKyNizpKg76",
  "key29": "5Y8dix9yQJsFi3GnQ38GqhhBbVZ2vARcm2t35JxvHKzYWmuTZ8doy5qERrWxRNN5g8F7P24unK5SYNkbBhqoyKsm",
  "key30": "5er9B8no3G9Nx9RPevyzu51fF4zF4GNmm63MKWKTgg5GQpB9ujC3pSJM7dQ1fKN962NH2vJyGP1xycm2zKq4XGJ7",
  "key31": "4EHdJFfFBa24svKMkvaCuomfTSSKwARNg4qTvL16qWYnqmWKwywmQ45Fwi1rdQnjkjEyT4RsPWx5kvsyL4WsxRvt",
  "key32": "65zvHzZ1jU5necUqmEy9xQhKn9MQbnougd3GauQbcq5ZnyTwBvTaZxX5PDWuiMNDA2R8Pqi3he6p1VUPVRQRQwc",
  "key33": "4NAX2ih2aewfefhbErKhpuixrpCtuNJXj3sa8Fu2qCueCmb4VVPohPzEQtoDAk6wrjVWgYUvchHCACu89JHwjLar",
  "key34": "5VxqDFTvR6f9UmnKGH78gLoZxVEnGVmPPXvDhP8MrkMxArMc3eVwMXq8eJfDR1iXfc6qUceqTZ8zdUTFXgF92XES",
  "key35": "49pM277zcBfkdSXEiDF5Fgiim7wMxVowff5vKqkU9VhoT7BtxbEhQQUQn9MkQVwYdvyCn28Nugt8oLnB6CeyUjz"
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
