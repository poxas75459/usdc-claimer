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
    "4BA7F7JUsy8TyMrXwHYeVTrx9pfBAXqm4QXCu77KPgeX5XG1m2yLB7M43hFUH1K6MweRtESWsPF15xBV9qzyvQeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yUQfdNrh4GVZr6sA8fDiNC2rgPpre6KC5rBcdH3HbY7NU8HnHJDP3hWmQthV9XupQRsfrRzKKGTSeGDbrsyVzfu",
  "key1": "2abqmoMNbHgPtGiXwU3UXDUvBjnrGyQo6UWfgBeBTZfz2rqMxKRaiSbj1BBmFbhAnK4m9XkUhSNL4ps643Sa6gxv",
  "key2": "5PGrLaWNSmArUM7vZxFFqFAHLgnF2Kg7mdAaGGGRifD4fv91zhSib8uHvuFZKc8rQ6Wd3UsKrFR2ynTSM4L2MRz4",
  "key3": "3SYdjCTSD98RWstGTNyzWH9kKqAhB9kLRMwMNLFCd3DfRGPGLEFrUmJe5AZKq4CATCUR6dAmZDL2CySMn3rPnAWj",
  "key4": "54CjhdeTA3gJ3c6s54o7ce3wHCy7ipTMNXxmviSx4erCCNAz5Ys8o3APXZ7iRkN5YV6sCH4NQb9LQhMzuLjqZjhc",
  "key5": "2DUsDpk75UwkELG5iVSBnoqsJAr4x81i8xiRVNvUzkKaEN728xyvGnn5yELuFQVWaYYEQhfGZ87pw77huW6xNvGu",
  "key6": "gxrerPThifJo7Mq5bAE7VmNJJcLAkFA8xZ4N4r9yXvazRJTwNHSxHaY965ERtXVzXdE2j71AvZvNAUxduVci3rj",
  "key7": "4rR6YNggg7QuaSNzMLATw6aVoxQzX8CEdXF4bMDWBLJ2H43doWpMDpJLdxTYv6LWA9GiN8x82FPAR8hJm25fjgLP",
  "key8": "N53W8orPJHHrDdBL75bBD3suJTJq4yJb7sdS5KSfkF372P8PyGaFmpPkoEs9yVaJAyDdoz3iwqbWApUYSGJ6TbP",
  "key9": "3Y978GZLxjmXdEtR2QyCrHJnjqb1LM7Tv18uvKPquP9X1NVmXVS3qptckf9qRtcfRQUhcxv53MHgWfNEinV24ANt",
  "key10": "3P1vCNLjoe8FDbms7Wr7gHY6ZhopL6x9Q2DYWLtq5S5gYbNMWNrHeSh6F6hYgFmZGuyXMyJJaPqkk4wFV2E69hKT",
  "key11": "4NndMDNd7DDNCxbVN6EHY5Nvh7FNX1B9SmajTYmGPz6REdL6jBUvE141ZGsCywJQfSM1dYhaQUhHtZ7FaZUn75Tx",
  "key12": "3vbTqqnMiKPan9X8YkshynSSvm2Nc7kvUnN3TZwgzBa8f7u6qpDSJtkaW6eJ3XuGFa6YjYNccy7dCWkTwQkgcQax",
  "key13": "AEUKbXpYzSh4gES3CZrS8NQngudbxS8w1i7JgHPeSWoWA1bxXnTUwDRfuEz2bn6CFsB6fN4mcWCd417iZcreDbt",
  "key14": "2qAo2XV893G9aZJXfp2aHJVAP5zSqZVn7Ec6S2wCMcngBjyziaBNnNZcsP9CCuTGxT4sjzcbg8Y2Uh49XepnyELf",
  "key15": "4J6cRVv4PQjYhUjMjwne7hQVMQ538kJLiUJz2Pr8Ym3YBVUQDKWweZCtjCURRSHwPdp46zT3FuZmVYyzqfcjFgMa",
  "key16": "ubBEbYVJAYnvQsGLyFs6yyBhNgcHyYTCQ2natjvZrPLAT3rmdEbr2tUQW4egLUfuRKhbM1Sax8H6csjCBe7YMRN",
  "key17": "4sdo992ou2sbRECDv6KLCQcQssb7DUToNtDWGsXX3KH6RUifmrK1JbAGsG6NEkHmEk1eHXwAmSrcSqMKnDyowuVP",
  "key18": "4FywobcVXixtZ3CDsDSwE4jHub6imAvRqCYCqDJaCtv2vaL3g58jxWgajVRLn4CwBmwemMa1JFmyucEYQS6JxZYB",
  "key19": "U8eRhtGGoomcFPq7Tb1FeF7hp2R5AA66gvf9iEgNPCka4G3oca176PvDkb4RGqGZ5gFRYSapsz36xxhtGqqApue",
  "key20": "2fjKVSLRae2CM7L67dot5rAcuCbbYYDh3PvD3cfhZ7HtgFZZPiWMZH1MpFJwec4PmL6BP3Zx3woxwor5gisiSKDL",
  "key21": "51ByrUYgxyfBwTmYkTe2p5aRR5a7MFvoBn5QDQ5xjp5zfKQ8UfLCwmsuq6Wpmpfz87NEwcLg1JBa4RBHReNGmwJJ",
  "key22": "2qD1QFpkYcF9AXPux7VfpKHdGLAk4rCWeCifBvG5fytamnMwKZEJ8XBSe58xv254a2EtPGAuj3LEH6jwyVM7zDV1",
  "key23": "5rB3tK7f9w4atVPY6QQ2wPPFHjrPSrksq7zZwQr2FqMkHhsvbuByZY16ta5D6z6sg2sCbsFdZCSdLQ1kGzLvLw1v",
  "key24": "FqfWDECwoXyWBPEKL5kEFvaVnp4ngSX6ZAyGNqG9r9mc8BvaFXsQiXD47qyLfNQVNNk6nXK3WkFSLVFY4jawpz1",
  "key25": "3cP72DB1tYhn2GDuNA7azU1JVie7TynUoykBpCuG3YZZLYdfffyVJKW2jr2xvzcmj8C68QUFTAnvCGxjAiH9p6GB",
  "key26": "MfCDyPACXtPyNxQnPfm7LscAoQGeXdgenvKiP2LuYqZNuWU1PLpFX77UHmyE1keaQWLZRXAFw63v9JJZwBBDCBG"
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
