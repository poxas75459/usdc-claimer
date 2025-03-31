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
    "uJHBbpQJBy7Fzjd4ymbJgfabG98BraVzUbHqaErixbtsTwNgwBfA9E77E74pYVLRFFfsbSqZHTsthdnfC1awAoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xtF3vECj6753mt2ZKs7CL63rLd1KUbnigFMvHHKBBey5reyUCGJ5WpRSsz6xSjfcBf77nN72SStTVrc8DxTu13n",
  "key1": "2xecMBzcYQ1DdwSkyjr1gM8WeCEACUbQ8YCxPKhx2HtYVED4qnKdk2z4hv8BpDQoaWgXiojzj361gXzKaJDtFqdm",
  "key2": "UotVWoDaBLsX2yZCxwnrX9GjgQnyEbf1PFJ65E5NiJsugJx3m8mBxsqfobzzjsfysLo4weKpWvFAtHfasaBtE6C",
  "key3": "3CAxykjdc32UvLvK6eTUqeQFmaDuWom7kkfm2npf6nyb8s7CGJ3yS4d5hjkG8T4d64Fr4v2iGuSGjoJ3cDLjWC45",
  "key4": "4WwZCWKMESALgtm5EYfZTV7voMhjXXC5xjgWCkpCMKkZJuVUyjBhFDR1CGkLvMHtP8pZ4oGUPhndZqu6pDjAra9m",
  "key5": "SPAs5BwEoZC6A82efMpUGgbxxiXTxPjCrvqVMhZRHbGtkFxBF22V7MTAZGanqDrxT3pkhXQzixzrfEdFdSnYjt7",
  "key6": "2ziBabWM6DSUip5PxjRi9PtnnGui2HHR13qY87jcGRPpAbdeS3ZtYnWqRBj7TuHU3YCgKbFY25qg7EozwhFVdTsU",
  "key7": "3uNXFncUHGnNVJpwmmQAeSx7hhw2v3u1rDDEaHPmKQ8Tn1M8ovq1LWF7NFj7fdxrZm5VVGrffE5v4UjDRXvhNQh3",
  "key8": "5hDnaHWkyCHPTehYCfHJxUQEP7dMXyECJAUcGBwXuZjYuAyWNom8zi8d42d87jXqSE2QBbYYWyyJnGoqgKMnwCq8",
  "key9": "51DcJviCkiVYvxBHjrk6t5zyGzKLMyM7rTC3HwFS688xnUXE6QyyXPYNBKbH7kcddx1m1dAPNuey4M9e3hvXgSwd",
  "key10": "55cvAZuGZHPBrtrMrqTuhbf7BAGWHVGevkicGimxeBgNKkECV5DF5fUz7BHPYoAgiemiwWA9ZyxEgDS5sbcwH1g2",
  "key11": "4zMWgkmKJVYw1CQDQDcE3M4g5oAoYFuecx29bHj3ehzWmeRm63KgTzCEgmdVhbU4xT48QxS1wmAicZ4hNpoA1C39",
  "key12": "3FDdXcyeBCXCN3U4SUKgAqWwAwJn1PXWcz8ucsDKdr7GzF1yGs5vhUSkkhLFEkYXkBnFRAyBf6evUeLQaxTJBrcj",
  "key13": "36qpn6DjpMpzWev1t3zHK1FaQwDaqnhob8m5vR5DxT1CJQWs7DpawWpZaw7ugBoCNzud7oXzrgYJ17VthXDtwPwG",
  "key14": "2PbQfQTL342LSV3C6gQ85xMaq7E1jUaazRC5qxD6Ga2FouYX2oC5x3iTovT9KrsNonGLEpex2oRsfV7b24jPQbQy",
  "key15": "2VBDNsJ3vHanNaTULdSuWjaG1BcsGiUW8XdsgDKkxSN2kNyvf1KHmsz5SKdQXxozFzszoWE2hkWw1T7ciiPSw7Ux",
  "key16": "2NLjeH3Rwnd4FefyiqW1U62H6HmXPti5QQdK4McM2yjHVQPAwST6opQGxyYSZABE4YTfYghD11qthxhodFLwCji7",
  "key17": "2KHry2GfTMZYAPUU5np1n3EfgE2DSet8fMj1gCyPYK7TBNwxgmE8N3qpG1Y69UihmrgoD3euK2pBR6eJeDgGM39N",
  "key18": "4xdacJjdzB1Q9hMqC1cduDRQtAA73TCStxCMU7czoGcj5g3b1C9Dc1YvM1x3r9WyGdCm9izqEQs5XQC653CRa5Tw",
  "key19": "5Gvrv9v7mMYaSEQWDFDNeSToSXFb69NcpywM5PVwMPeynm3khneSQrbDMEMJuog2q9itcGFh7AdqNx1tMjo64bD5",
  "key20": "37wpBUKqDJ2MoYEF3rwBJFumNBw5b6qSxRdQwAVmkwbricMqpzjmH8aRJGB118LMSwwq9zU466V8ynFgoP5GCT8K",
  "key21": "5AWR6azqy4mcodwTzwVX2Kv1JE5vVzS91KGghHfdyA57BixFg7moUw6zw76wqzfaCXkPLvKCuNMp5btciSzj2mGH",
  "key22": "3LM21mNex3v2Cxf7diBK69aqXzKFtUm38PV2ELcShibY1GGyKMzJdWthXqjn24k8zjmBCsUjqxkSTGkUKqDbtDZo",
  "key23": "bafy5GRn3nQ6U1SfT2tZxHphK8N8B2Nvw6zxQz6ijxiryS8Wk3xcdmwbngxa8cubNE5DHUmA3SJGkDXkHWpRCif",
  "key24": "61FEnHMv8vKkho5DSdn2waAjk3ifPL3r1piCZNWbiAu2HHsez48ZTV38cWmXUPSVvRFowfUCRNGoVQZKA3JmHDGa",
  "key25": "5AAPeYNYLKm8srAkVi5hNzqE8DHxvZ1aWjaC9EKUrLXtsRSso2VWfmfn9LsZCPbyUD4Mf5Ro2zZrdhTq8HzQbx2Y",
  "key26": "3zY83ceL4fvg7hvGRHbEeXQr4rPNmJQwrVEyrGJuFreEpx5TXq4do8A4JJTPK1579NKys4P1ajwBXQobMA74p7fS"
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
