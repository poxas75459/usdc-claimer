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
    "sSrrKDSzDnLXCDsPwjydHMdXyVvt9U5P7wxNmg9qQEJWCEoaW32t2a2XHTuHC39uUpaLUNWWu4Qt62bsXdDpZ1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wPbyPndZiGLzm1s5grQh2FajRH1GUEqRsvb8c2fTw7YTh6o7Vw2a7Te1hDbrLkKpGHpeQxastCAYAwKQaKLBAtv",
  "key1": "uTuwpsgbnUm9yBAadpfVkKgghVZa5gv8czKxsRNG3SPB3yNcN8v5zSFSnjZwG3QSyiJhtd39DMMoyhKWJvoVQoG",
  "key2": "23NP6auUw2avowbxRAhy7Wv1JqAtS1WzK4rUpR4J9EJM9bdceBxBDaYWhMs7FbssS2R41U3SA4D4d8wDgJ5kB7YU",
  "key3": "5gzfEzZw1dydNfLHtYWgP4pGXNHnzjgs1keTSueNcETExVrSGJSqGnAeDVegerBvXSoWnfzCd1QUQZ6kHK5fcooG",
  "key4": "5G2Uu5W6Pj6sB6n7edqLuZexV1xGdWaKTBMR1SAvFwfJFVf8vUc29NTdtsdb7cvZ2awRRwJUNwMAZ3mWtgu8vc26",
  "key5": "4whhfq1rFe9ZGq1hsFLFUAxtXTzsF1wHYEqoX9d6XHxwPZ6vRmVbgLhcmWnZssCFShE19QXfftQX1xQb63ppRdvn",
  "key6": "2MLd2K458oGJKKPD47xTSJonC2YgEaLwktBt9qdbJiPhhMpV76x3Ln2ckWyp56j64rVpydj86aUXpTcLL1QEqBFS",
  "key7": "4X9foDVXcNVC6cywjeUAZVdzrWmavo8vVtN95q87Gt2caXJcuu5UvY1MuxQvopyPXvMHKXYdiHkwTzmM4jK8qtNu",
  "key8": "nMq9Ufoj8SVwNc9NqZH8qgaaSQnutUQWfEKXhC56hrQ5zwwtsK1LQcpxRXj3AyqhxfS1RfTjXB7Ek1TsVJjYGFq",
  "key9": "Ee96vr2gD5QcnWWxfQk5SMW7qiKpiAjoKwRbMBwQcQFK9Umhif799UeBaH6sAscmLWpgCU86acAxeMGhXpCDPaf",
  "key10": "2y1k4DHrqobvbtqNjyZyMTwoZNKxziF4WwAYBW3o5KiESY17PvfJYuZN5dQG7Zf8H7YS8oCxKZHRvc9jFBYGooZx",
  "key11": "2xnj54tNxjgn2dFz5g5FQNAuQkbTASayDx9uVSZ3jete5SxQRzmxEKuVTSkZHfSHYXTNpzQQXEADrdWmd9DtHpw3",
  "key12": "4ZDXkayQGNYwGgxBUPngqhMo3VHsDkacRNxAPYfQSbFqGN8tZVkY86VzhYXfUVpewk88wJPTMgbwPBH3aYmtY2gw",
  "key13": "3bammoxXjf1FChndZdpDMMRpvnN18nN3UxY63gPYBF8zbkT3HK9ZjzfrqkZ21aV9DPRvzwCQK9DtD8AXzbLUeB7t",
  "key14": "3W2qDsc5JAcdR58ppgfb66aDYTAUCZhAnqafNNa45B236YYdZoG13d7EnjeVn6apz68mtyEgfAdwy6BiDCygTHxi",
  "key15": "5X73EaEbhgkyX5zLxqpNJxpnYkbvHCEz97s8fNkA6RhHCTYtRTv1ZtN3R9WBSVWnv6T5znZdYHAMNMMwQPwyN5Zq",
  "key16": "ogK7Br2SYwDrYwwsdgUocPXZa1EeSfqyB9MPsWXdVDtYE7KhsAErpLQ1muuonzaZ8g7KUsw28fYeovZgES9hS7X",
  "key17": "3kPBPJjMt5nkiqgkAWk4oVvi28C5kKGp3zdCTFRMjQmSFFV4zS2y3C8iJSGQPGMF1wCbSgktBsApUi2ySEeqWpuL",
  "key18": "AvnJTdUB87FLhpSk5t6TscVdMSvtqikyjqHZnGHNmF1S8GZ7GuuCDG9Yiw1TThpjX5zjvcohakdg4tkvxoXcFuj",
  "key19": "RndST1nn1qc4jiHcU9YDAJhTfGtXbFUkgWwp2T8WTL48iqYBxQsVX9vrB6kzAASXmArXasvZWBPtNYxL8iaDmnn",
  "key20": "B4kxfEtL4Rhr7S6jfta23KvH6vaoD6u9WDBaxFkbDw1zKk9eiYT2UcrQSMqmTWF4fiQsp9cUKSkkan4AkS4RcUL",
  "key21": "3zKTNfFKckrpwEpHYKxVSyQDFkfqt5oSw8abhRq9ojMZ78hQXrfHbYaU8CAwE8ZzGzMGXgeUf4eHJoU6N4UZsPHG",
  "key22": "5BqGU69DM2cNVuF3vXvC8rBJL2SkaA4xWfKBq12KHKyzD1USz19NR7AFtyH6Gqgu8EV3PqUUgy4vj9JKvgUPmVhk",
  "key23": "2ddcjNGWk6wAxotiWkxnS4F1kkfz3Xfe3We5Uax6kMkTCjTDDsrnnYnbxtMxorVf65Cm3BoD4HxiA11VhA3tQayp",
  "key24": "3A3TBgy6BwLgkZ6qmk5taT1jqTzVsS1JzWVM65MxvKYEfxeP78MNLbZpomRfeSUTG69cqwMxivGpHCkvKA6P1xgh",
  "key25": "qk1sibLBHrjSGtbqz3Zgs7AqBZrsgyz1fLLV7s39n34ZdnByBRVEVcvHV7kinNSk1EcTJEqw5aJzwVn2CVTwnrP",
  "key26": "5R7WdbN9b3iv8Fi6yRVNdticC66ywfHvfAq8BUp8qk2qArAgyK1YFMit9eRkmUMCd8viP3PQFdKqx5KRQe3FiY8C",
  "key27": "23jNTxhAJ2pcYkANjDHS9PCJ6H5kREJP8K4AL9sHEGtHcNUeGqs9zxaECWK37sFM3zLdzBqVHxaDy6ReNDT8hTS3",
  "key28": "3ZdajaV25Xy5eroCwAyNcWhjMGU2yMbWc9Q7kL8pDtjXs9PDrcDpGjdZJRHGGYAgxoFBVm5CiFYqfvMHFw6Qde1f",
  "key29": "65vq1MNf4WuqGdcRkqLESRG1B1DyGQgQSb847uMF4DY4TAoxTHWEWw7XwzMzB4kep8worxZsH4HDWcmSVLMAHVsY",
  "key30": "2QWAP2LyS8bFrhfzcQJWFJmCPp5DXso3xE6uFj7x33vrgDMTuSA7U3AUWDYtbHeUa55FSSMMpMEFEF8WBiyrMJaf",
  "key31": "4AKgajT2MCg2jm6A6CRxTL4mZHEzfJ5aTe6GrSg8pc6jo8u386Kc6NyhJq5MUs1c7TpH3SgQp9GknYtoiZ4t348Z",
  "key32": "RFAoV8eL1dteiVbZAz6FefUG169ZLHjou7mEiqiZS3ZHR9QKmocTWguKs1gw1SnJQ7Sf9G3bk6koi6WuCEg1SDQ",
  "key33": "5fq39cAWKa1JJchAs7G8hGXuhFWuTQvCNa67dLcSMYnfEaHt2dazbEHgJhSRvMBretyAoeoTtMFCR4nEwuakfxF7",
  "key34": "5aV9ruFxTDhFzRwYWJCXCfbpywZ64HQ63D2Yf4aXHBUpeqmjpsNmrghCZpeZt1dY2rCpz5p8PkEvJV49o6cPPiDD",
  "key35": "5FsyjTJpPE7DdHHa5NBAfzQz2B6MJSdTM69pYZTrkNDvApydFjoeUz76L2WtcTufSHqyS9NS5rjaGQNmVdrMRkjw",
  "key36": "M5CPkAE5Pr22draJKE7ZMHSuD11K2eLbRennEpdQVhGmePyTsG59LbigWuiDVQKSfyEToxfasHdobxvkKcwy4Qh",
  "key37": "3yfRZouUf5aReWcwNhF1eSLF147zLyQTs6yfrDu8n5J36QesbZu7zoKKeLsQL5ATrKn34yRccsQ65paZdtGTimRd",
  "key38": "47bh22TEZxftmCkEFimGkH2jK91J73DCy7aR3WyPnyjLNA8jQbSR43VrFmwA3qiPZPSYHgDmXMCwFNkqFEnhvQR7",
  "key39": "5jVPYsyxtwsxuR29Jtq7EXctBgpFQEVyG4PhA7Xyps7HydvGyJ4JnZLD4ip5TQ623m3dUSCzpaJ2nrybzQet8AaZ",
  "key40": "Pi96aUijP4SyeXobe9Zoe9HWL1ZotDD8uzgfoVEog31u5VtJc92D1HBC8W7zUXi1p9DUq85LUAkpPbK9xqXCE6p"
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
