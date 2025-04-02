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
    "4ow7oWZ9JczGZGApXsyZQSb86g3D9fyCfwpVt2SQLaaJNj9GtP4nAUC1gVhkKER4XzkLM3g4MgfhHeQ1h7KasSdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NfeYZrpjZHk8XgJ6t9mb6e8mEH18wrP5ECPpBdjDfuz9qKqz6G7igkGek2Kaq7ShD4LuSP3iecmzoTSAocUK4VD",
  "key1": "jopRPfxm5EwFnMBnJ2Lk6Ey2KGdR1raub9BnBTpirwXx6oE14u7MpvfyT1YHZ5D3jwzRJyDQ5kmQmYfZ22EhUHB",
  "key2": "oKTEvWSaFGfcbHo42JXcd26v33grzgyXh4AhktzE5841tK7UVHoiiY3dzrDUjUjACyzMgWDsPq25TtpJr22syPV",
  "key3": "64LqBAXqkZWzX4wygTrcUyGEdkYdddjUh4FUiU7PC6F9QdXrQJndioxQbNzH6wdieFL5WDd1WuDjS7v6k666hs7G",
  "key4": "54RakvLvnGcoJcjzWNQJfmzqEYytEneqDTYURWVGgSTQTjSuh6ofZkuv61c9xTXEtB4QTpkkZvEeQ94PWPoG1ey1",
  "key5": "2UnzDfHrVMSP7fRgFgCsuvVbc7V18whxhAe8YhbuHZrChXsTLo9qK3hVq6y53KN7CxMXS2irQpyzn4Z5AAdT97ur",
  "key6": "48WUQrPgREaznTLgu1Jn3qA6qoNKrZz61ZJztd5WqyKWVkp6wJXQQpNSjde48dnPCqTM5wf8V6D2KkajuEg3xCdA",
  "key7": "5X7hDbDdFLhGaVoituZvDFiHrUHegrLcd6iqjvPj7Q1jjD2MfKfW8zunPnqADRNGdGfHd6pPWzv53njn1mtJpCbU",
  "key8": "ztyRyhbzkrxobbNbjhEGJLRkYvFtfnDfM3CuU4nNuhyqxNEmrGahr7SmkXY4ax5T91S4pf8cgr2mTZ8iH82ADfj",
  "key9": "66K4UDNBg3wYULJA69XQP9U9iPeqFgYx7eFWMmwoJkFn4GEafZ51bxPzV7WeEscVqECHm9KPVmrsGa8VcC1L9ZFJ",
  "key10": "HK7zHEUzbWeEJA8ZU3GsYJFyiRabHonL7trfx3n5sxpHBPFWFFfis1LqeAZvqcuM3Mc1iY91xYw54jDa6eAkyNY",
  "key11": "4nqeZ5vdP63nYSkgTY5RbyJb9ZEZ24BtArUjXDVPzxp6JEDtkGcyyZjhszRi9jq497foErZAqa6VkLzbsh3Fa1mz",
  "key12": "4S3t5PzFADguhZmafFq8yJFTmceGwd9he8fiPdMcH55dkTe73yXetJY2GtxRi33sMoXaHiRbne9YhyBHkijXCSmh",
  "key13": "2hdksuo1c9jnedy9bHN6CnC8CygTvb3tHAKY25bPxZpjKjEUEXfvK985CTXaBkNwdfVnB2TZ46vneooKPo2NFhGC",
  "key14": "5hZ9wp42FD6DSSCMFYimvWAa49TP5RsEVspCoVHAdfw2sxUWkxyhXHwkvWjGAjHTEVZTr6mK5xakYh6BLVBqUTjV",
  "key15": "2t6o3C9CpJYAZqE7LiVp51Z6mwwhiXaT77bKssG96L9Sp3WKBa2ZSBpoaaxXhp6uui2ux4XYBW9Sg3DrkcAWURHk",
  "key16": "3p1zNSHQd7Jz3zs3BmDvXRegqoceQdvwJc1KWitFPmZK1a7TZNXEfugVWZLTurExxcKQ3Jd9Nb71G3bcks9Yv6Pe",
  "key17": "5KiHQ6K9sKEkjvTPNCxPDRjwv8Z21StRrPnPdGsqfaq5JwrvCJFEApcKKpoXNqptW5q8JeF1K3zHXM6HKcNT5sfp",
  "key18": "54qjSe4cRuFMShsj5fbDKXK7JdUX6ZnqKWwnDbKMQxkPva39wVWhDUt69Ehgy9pRyXb8JGNxAJozF3S6qova18AZ",
  "key19": "3gsUfjUaQA2acpJJgshc7c9QHErzjRcZ9oG9JXbfaFSCJ8kqUEQQrgkKT9RTbjhp4KJfBqHZU6J6RWDu3WMGbGvC",
  "key20": "5NokskorGmaN96US1PmbE2kwy1DtcKDgPrj3pQA5tVSfhqgdFBYeC5u7oE1Qv7RiFjs7BJiGjadKt1q8cMUN3wVX",
  "key21": "4kGRJwnSxxzRBsLrjQ48RmYQbsxu5sZekjnNkoqwarUwQBE8DcWtg5dTX6XgH3gFmzY5RMi4VrXk1QDNXPfULErN",
  "key22": "37WcPy5pG3npmpG8BHNUJ9a7KrjYkR4rq8kPoT2VipVSK5H6i4FxerXmMxcNYpjGX8pychGYeaHYGRhmJS8WUqEA",
  "key23": "RBad8Zb6AzccrgTRk3tz95PDuqnrNVryciyZUYXG3CzK1CDofU4Qq49qoYHEpjapG8qfr9AJCPBbU63U6MZbXMT",
  "key24": "3FZUBhPCDNzjocLNBPzETG7Wv2bkv1ZefgheUGvwrn9DEpmhoFEjQF5xAxkF6SwcNj7wPNwXDxB6wzv23CuXge4i",
  "key25": "9nTu2JV91uNJgZaCeufVmC6b1s4fbeChsRYT9onTdqvYWU9AYqnuaWygzFFyYj4eM6e27mviLzPfgcEFtBp2ife",
  "key26": "5Gxk6Y4YkH551epHZTNBbyXeqT2ZMATeq4b1LKK8dvYgHeTDbwZYMmuqpvmT9Adu6qp62tdXx3mZgkws4EwUt5pp",
  "key27": "5FezP6gbsLoNEntuiivKrzTc31ccNeA4qddTpY91SC5QU3UGZvPhhZwULJm87t4HauAdoNNHETdYnRo17CXSaygW",
  "key28": "2fSUc14cX2dfxUneRZHvRTDreviYLSm4YxsWNMuprS8MkYyERyzG6ChZwfBDgx24GvbT9HgL5jaCrgghSHefPfVc",
  "key29": "5CwV1xg4UcPXE8jZKzuF45QcnkNkcxh1NYmm9LbMc9UdcnTmskuQuxjGBUpP8y7qGHgrFtNzBtmTKiqLPSrcpFqc",
  "key30": "5GsLdLqZSpzEjt8UPZQXg7jwGa8v8aw3xk11Nc24oVyg9Zpz9dMUBoZi7A3U3vZAnzCKXco3U5izgSJgNBGoLhrH"
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
