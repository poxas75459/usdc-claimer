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
    "55CfFiebE1eGzxwX5yw9kDxoLod6ME79cHTM5eodepyrwDjsTpKmnM8iHiebje11y6hTiyXcxxr8jvWdV2BTDre5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tZKMu2NEa7nqE9TxhvdQcR5j9bKZtFTa8aTU84ppEk1xyLXQzxdvTFRTEqcomr3YAUU8GSNm95WSrkaeRR8GJm7",
  "key1": "4uNy4HDRmX7boh15NHJtx3n661LnHQXkotWqhUjpm8Ga6Wjv6VmApfmSBf1Z3PpdfvVf1ejSpj5vpDYwPhpH6kpw",
  "key2": "3nJY8P6CpiNRVshdauKa15KsqHnseZsBXaZRrkQpPaCkZb5AVa6WZAHuxrSv9WGpAaJ2E9osv6hqLoDSWpCJ6rRn",
  "key3": "4R4Nh9j7pYJmKp8Cbk9pYkBaWSfsUeCpQ89AKgTMCMHYivJKS4KJJ7xCjZHe3BhChbTTkeQBLh5GQzLpZdb5iumt",
  "key4": "5NQpreNPWXT6ep9kRdUpzD8zWBLA92gis9bESdQVycW72bqyd9ehjdX9ZnF3FnU4HoH4P7crzdyjZZRcZEmPJuQj",
  "key5": "4wsxdChiuSwmeHqkH7bAFnKt36cgNham3wmksLNWNpqUVWq1pAdyqsvLfDd6fKbADX1XMx6sqfoGt2LfA8Gu8XPo",
  "key6": "4P3omJv1kNgD5kh8trEx3P3qJV3TCvGtGMqX7PAiK5kJNxVKax8s49fEh6ZPYfojcfpc7LpnQue5VAmrv8iY6hs5",
  "key7": "55fK4KDHKYBN96HuQUcGLqUy3LUh1Bvn5jTTfkaQ8LTZav8Xe195pZuABBgCvZHEW4FrPK6txWdCZsk2xPgySHbd",
  "key8": "4C4T1RWoemLF8zHeBJjLKvRCwCFA3bWGozNdrpXcNtmveqEXZxL9JSwtrVWtEH8fGCHYJ16m6d7reaoxRXs1CQMb",
  "key9": "3Tm4QviMhLs4A3XmGaCeCFSH5BFi2CD45Xno1pgejroUM7qhwP5rJ4McEqZ58FsEvJdkebNaYU4kr4vKKaB1SGza",
  "key10": "5Tw9qxqoijDradh56nRbv5YYqEPSXfvaGUMLbx9Qn8w1bevf6u35AJ5iLLxd5pvKtYp8iG8bPHxYQUYJCRDzY4dE",
  "key11": "3ffFjZC37N7GM7aLUA6uGSJWMeJfMm1h5dFoBmW82G8UCXHKaYjD83zfXQprjLffLUoRxxfTpGtKfgodYyasNyre",
  "key12": "2vr5stKSJpXfWPSppwKWCigSmXTfBFpWjV4XZBZdUw559eyyRcmN5d9KejMH17yz2qFUaKPLbXWjjKTeZqZJ9xvB",
  "key13": "NmUKaV6E7dAMhLpLQETuzaBZGPYBfF5WYbwNHrD6qsQ8U1J6Np253PA7WRDSTH3aSnac8LTi37UGxDCRfwfWh4U",
  "key14": "3EXvRJPL6zoYxkRGBsCTuUJDAfE9EpPRSJvZmP96zLvny283WFw87kKTNuLziMcpQmfjDqTvQMn9tikkZS8m5QLo",
  "key15": "5LPrV3umZ739pXdJNjrQnVm1wjfmRA9mSmxdHFUbPiPXgvofGSGsyHA7NudzKvsf3R1A6E3vV4FrnAGXjsBDeEBR",
  "key16": "5x6tfkbHn786PCRtT8tgmiq1ZFrM1gWEPjqe6y9SxLMPacvM9kPiduVfKk3SkPjYyZskFsTdGAJ7fhj8U2vweaiS",
  "key17": "5eULscww5HBMNprB8QfVVfF6PuA7b8A3uJD7zFSF9Ej854V9xGnYdkLM1KevB4YCaLpp7a9NjjYa3mw7nYSuVXjZ",
  "key18": "37CbzpGzEAsk2mEEbTZmRZAjgeMNxhkMJJLWxp72dgaVEH3gKTeJAXhdgf4XfPgNvMV296pfcbTfig7imWKSfWki",
  "key19": "3cc7L8vJgVsam3amLjZJyWTApSi2hEX4sWiBP8fAxUkXxQDUWeUQhLcbEQphBjsW2be1H9Trc19jm3Cj7J7TXX7b",
  "key20": "3kfpAhLg3y3gKiu7xoiJxXukitvf6N6eAHN9GhBWWodNMXe6NZpSYzB6ntySLfNq2XA99sqNVDCo7knKURDS1BtN",
  "key21": "5mtRAxPj1qwAeb7rMioH6SRWU7KmPVtsRozLY1BFJs5c81D2FsdGXwUkis52L8f3Nzou1CZR9i4KppQuNxA53LtF",
  "key22": "38u8SnTYS6RC7dQacvyjLyuu8CRDxr9WUF65UDHUjVHiA1RdvtRGj7N8uAy7JFQVyuXGixjb8FwaFSfFoEsagxuR",
  "key23": "44LH5mBLAKMUrrj918ehyfopdi3qCGypGboWmER6jiZK4jdvVJEwhAobUgeFYHrHWX376qtKKjMmoEaDz2KTbwrd",
  "key24": "vfR1aGUC6eXirmS1mxRMibQBFK8L6TimW4hma674LvGCoULXMYD33dWCtQVGrXetbgocqjza3rgfZkFh7rVYGqX",
  "key25": "36oCyaiedvWnRa8TFqFTDxYctScHM39AgyfCcCnf3bwdogYLTxeW5xRRq3Wp6omgD8CWHkLum5i41SBqfeYQorc5",
  "key26": "bxnqNHRg3d6jGpRNQ8FNbotEcU1QYV2fHnLhQef48dpBrdFdNaE8v6SWEUpSJtPKURLnFqQs6RNMnTajgNGxhw9",
  "key27": "3u7NfyAB6dESi5KAv3tygJJipgiPGxcExDWmJQFGSDdd6rbvt3nGqGs8NpMuW3k6BFG6QzobcqRzQLH39tv4ecnR",
  "key28": "2Da7nuYPzdyvEvi9chCLEj2NRKJfMeVYMj3LzWXAQFbDMurEhC3mxeimVjfZ5gnxtvJYF4q9gCsynAzWvYiEi8i1",
  "key29": "5V7ZZuEuGs4sx4bmrAAsivukMthb818BuGVmNzne9SMHhnzugB6gBJeb7vzowJXqK9YmscJv8xonvGQDreF5Xn6"
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
