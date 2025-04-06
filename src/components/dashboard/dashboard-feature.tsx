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
    "2vkZD7YYUGhGpNnwdAoAXhfADXDbHvwgEC7hBKa8ncrMj5TJPhoXwtLnwuteEgmNASFiLvT8HH4MaruFMwCKJKqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GzY4oa7BNEdVQcskpPP2WTxfD2yKM7h5BRSwMV65bJXz2J9hq6QPG3K9GqWALHQ2ycjp5d7hMNQ7HpfNkfhowmh",
  "key1": "5bnz6eyNdfABAejnGi9QcyNG2QAdKn9WCPoddCYBz5BEaiDg1RJkxYU6sCKJfWQnNaR53rwsmPmHKgWgkj84Yijd",
  "key2": "PU64W4VPLMY5sEhtCGq4yn1rNS82XaLjRXpPSKBgKNYJpPdNsqxKyBTc3bpZhTpnxJsrHyNF7ZDpKE4WWbCr1mH",
  "key3": "2VXQp45fttqi8UXworZgXSUUshQrPKy4NZdb9Fn2UVrVK7XHH19JvfsReoEeskPkcQeYz16XSuvrEjVCGpVPk6Lk",
  "key4": "2DcKAnFzRVo4batj7zspLHGgvHkCt1bU79xP9xu9nK7XQmp8EDJrSzHMPNEEvPEV4YXJbFeRdNXakER6KdKbQT7n",
  "key5": "5H55wFWdPZpkjqg2qqHZtdpAqBi3XPLEEWzgeArhqqTzN4Pu1yeGWSx2gPFuqVorP1w4C3ZYjKNt2NNv2pjXm5tg",
  "key6": "3ZZH6KvAHf1Jr2dCpHFebb4daE56JrWisjwCZNaakd4xe8jjaJofJe8m6SZcTHbtUvBKNyLJx9DWv9uvdxzrG8gz",
  "key7": "3yyUxL19crGJ6gurAzvcPCGoV6ATWqKAurZxnmeHeryj3vz1ifhWo8b2FJGHbobVQzPXvucqaYWjQqajTpqfzcXt",
  "key8": "bQrisFwym17SMxG2NZSWBnEqC9armQf6JyNuCtd5SbCN3CKiqFR74t2kHia6eriiNdCkCLVYT4ogE1LR1vUWyMc",
  "key9": "2aYH8HfDHCLtr6wXYrBTFHHCSSZRfHCcb2rxRCb7VRxjCUdKtxhkb73bJDWYkXM2PL5aDe9A7XiCTnZ1n8QCgx5i",
  "key10": "2zRyQvu9TLZkS4fvpjfbWqcohTYvuSNrvqmyXGKi7g6Fp592mL5tBSWjeEwz9DhA8CztFueN7jiQC8BuvuzmfaX8",
  "key11": "3nPoZ4rzjerP9khZUxrVwGfERmbparugzB8fbdf54TPjGj5xbNocPpfBFRvsVY5jcphE5n126px4CTywNb6Q9tEc",
  "key12": "4iwr383Ghavc8uwqvuBLm1BFAhSPtaUhVYHJfyZF1chEevuMQhJ8Sx5Z7tQiNuxDY7PtDFSERimCPjApvpcpUXQP",
  "key13": "3qN4u53RthUC5tHqPjMatQoZp272yteeDBWUtoHonQVuD96EfV2wUM4R1pP9gSgvgNjxk2wBCu4zbxW429YNJpu1",
  "key14": "2giSZQqsASyA8ZbKk47e5Kkri1HrVVrteym8iwMZdUfHRjVB8T4b6PHfXBq3UZvANmVnXUet53JZJTyPwYjP6LJR",
  "key15": "4iNqRdY7wqaezbKdAGMzGDqKDWKcav5AEyHug7itB8iKGdrjnVBXDmxKg1hPzwwTDPP5nPKyXt2PURQTL3X6pWJY",
  "key16": "BXcGadtDCTXvQ41vAzFqmiHBAEuUJQwhgERJZSBzosPofJ43Fm7KXpgwF5oVo6H7p7WPffR94mwbgMwFz8tS7GS",
  "key17": "67393mUsu7K4Aasb3opnrhmrmvp7YEvoELRcGsviA2G1rNVXqqkLx6e9PUiHuAhy8FUEa3ZUnPmzCb6fFHMekmBh",
  "key18": "3aRt2Y6op1JAxMqF2YjH9grtJFidp3y9FpQsPLe1fj5TbWohLrnKQq1c33h1Mu17M9nyfCgZK77183KGqnZdg4xy",
  "key19": "34yELthX1UwDEv5t8UZJioVphpUWSMGqtEA4MnLXeReGDEwJsf7TSPbGqnn3qwdxstpZtGMJ7R75cCwFYkYiECo5",
  "key20": "NNjaXXfyXDDxu72JW56bo25ncsfQqQoPuskpr6Q96Ti8muhqokGh6eCCjVY65yJMthWwabqt6rfMqP3LPwuBtUv",
  "key21": "3yR43nXroFQeYYkBAJYAfRrZXViKDNht3qnczTker9VcHnhSnGZzB7U4xZtGCkfq2RAwxb3PuJNXhxZb1D9Gzjt9",
  "key22": "KUDnmq23TTQ9D3CBQGqgcTJCukhKzVu5b5T3a4kfEFXXnR6TLMEkG9xGdXH96T15WLwr8N3juoxhNGboZwPGpor",
  "key23": "5G4Jn2KC739BKUQGGzYPQnETB5D9QHib3z8UT4uWktpeG9y7643ZQLPGvcaXK8fp3Uuu8yC26ouJL9jx4JdcC4CV",
  "key24": "3SPKtBEVURMcbukbBRQ41NaP72eQknjAF8vGc3s1jR63DKSzTvEJmxrJGTqSNkBUSCV4g7rBraRjadU43QPWcjgR",
  "key25": "5u6n5CxGDiWsWBQpmvG9fQJ7UhYAjG24hqmwxCXxGQyze7VdMPsV4fLw1bptPYNUZoiEJzYCCZFvmb9T3439KDrt",
  "key26": "5JrHgpCPHWKiP3c7HmBKWhDfLbxEuQ5r4mqnpL47z1ER2CTVcLzecPw2d7sb4nM7Li6kK2uCpo8jVLiPyTEmA4NF",
  "key27": "i3DWpk4qh3gnvWNFNdTnw49zxHCaUHsT83ZVa1s97jgYAGn43wPu7qtxSk5sh9gzny7YvUhhMFC7zVje7zFCS3R",
  "key28": "2JLDtb1FPqfiNUCJTnoPPCHfLc4pgKCN6DpM7e8zpF3GmeqLTwXFAi8k1YUzkE7HYPcXCKu3ojHvYQajgeRwwNNT",
  "key29": "227uD8QABnqrbWJ3YaHvJCMACGhZtubxfAh7y82cVoTD1sH7acFi1ZMgX9DdfLKyXSTKAn1CGJXRS69XbgBGNFND",
  "key30": "4dmtNEr4jpzWK9KLwkuYfdVU44Wziek9fmKq3kWUQEjsbpSbAg43Eqvo3wJA6P9cMUz2Pv2b6JgBLsGSQspst88X",
  "key31": "h6rmgoXS3a9xo4GcxY8zp8HrzQKJ8XRatUYaR8evRnH9fs9ZQgYW7DtfXDGGoqtawJJcribJY4TL7vyqfZXfRG1",
  "key32": "3cBtu31xFZQWr4RrRgK3i4FMdq3G42K7nAWk8wRh6xTWQGCcdNx7niywhXPsabapQZMeRVXCFUAna8kEPeMgQQXJ",
  "key33": "64wTy2ykpPj9F9yfJpkUjiqFKQ7WCZbs3mLWAgeGZ2MA8y6GobgK85cUBiuZRD1cuCmGLN1gDyDtbc9aSHoNdEgS"
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
