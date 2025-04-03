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
    "ZSPhAWR8UVQYPHLR76GpT3LVWr9zpLvruUzrfwT5eira1FXPbs8DoegnR1RbXbCPQL4br4RCNCXQJzHhDqjxVgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JW1jnSZ5Si8nC6MAESsgi89ooA5zyLCzmf7UmMadSqVUy4GBvEK8xRhhdgPZTaPUu1QYCJvTeWHyZDBu6p3abQg",
  "key1": "5obSJosAKaLtm5bUtq7i1dxS1zDUSV4bFubLM427AmVfdmfyANGm77ztCFpGKq7rM1ugjCfDWnDdrdCNyGEVf6op",
  "key2": "PwAj8sFdEzsb4VUXJgx6PESTTEzhoVNuRJt6VnBGaF7gA3H2umBQqMUVgWwE6RgNTUyURPTgkDTNmzjsyZkEbpN",
  "key3": "3hcuJrwicXhZdMjcxfi3Z946VPz5pkrXFhPThKSpAxG4S9jwt59FjuNfgsDNJN4iM9ibgYeTTrAipfnWLkPckBkC",
  "key4": "5g7tCBE97L5n1Yr9aAMpx7g1J5Mz5KU7gmj7z3CMsKApVTWau6yziWnr1CaRaV6XnsbwsKAvBABMsahdfD9xMqnC",
  "key5": "2ARkhn4TwgcPvDkRuiJz9Mb7AbnJqiQPCqMhDyrSUujUo9Xgav8QkvrGEHxkJTWhK2ikg5NmYT64Dt6o9vTAn6h",
  "key6": "2TBdnaJp7XSAoYcRNJoWsSaY6mP9n5cPLHWDGWaWh3geNN1ZXwyRbUxvaW5vQL9bYKpfkZRxH6N55EYZvpRLUwHV",
  "key7": "by3iRCeB4m57PzrFhjS8GZ4VReYyfPEfVjfykrWH8DFaXt98SkRNhjk7H1sSmonspYvrzvJfzj1qSvsZoVhLzid",
  "key8": "5z17k4MTUQ8K5qhhs8Ee5RSZgPczFfmUStmGrZPR8XrU9b4Ff25sUyGWQNosvU3qXzxEH2MP5A6fMsw8UW8miYKN",
  "key9": "2tXpJ5FVViCjiBkphUr8hYHNibUzobHNVY1uWsBSXAdQNM4QXW6Z5pV7scSW5Efqu92Jbi4aTnPUUgbW7L81NMux",
  "key10": "4nADk3iUvrYM2GLUiVw2AzNp3NUsG5z4WqBHDt88AQmbcuu8JfDxSjKvPcwfmaDCVhDMPcFRj2FbNpgvLMAUnUjB",
  "key11": "56iwjWksLeKSE9uHxpdCcXrgfBemfwnmZEkwC1PGbaECAV683q1Z8Lb1bxqaDk4SBEDM1bg9WrxM9SnVa9sKAUgX",
  "key12": "4NDmobFbcmfQ3R2Y61dN98W2uRWRzcN6gW3thXzsDtBEUEBkVH8rgorN3CEQLhh6NiGFHnpHAwWoSMXUxbdU27B6",
  "key13": "5y1iYjYKcVorEfaYyDfSqRKWBNqvfyHZxTS4m4jyv1JYskRscM74Myxi1xKw2fuwWVXtgA9GYSLdpTSLv9aLy2Az",
  "key14": "29FxgwSPEXvuxirUmVXMppBV8Ta69zjbCDn3gEzM9DaH5axQXfNdKnshqfYtPC1Ytne2sozh7LagFGoqmFrCoWdX",
  "key15": "5xPjh9NLAQmA8L59mDZkew1p36hxFEbZuMTRW7d5zBA8DGPDMPm25jhtypmk8JzB1TMeqmnM9LctvR6iA7WkwH9",
  "key16": "5QsEp16NsfToN2sH9rT5BEtrfzA7HPR7772kHqvqXkiTo7f5EYfCSboHWW5smZoNDLCnZVeDtnk6akDC6wnMjrkS",
  "key17": "662cHWC6fvKfrTLUkFZ1u1qAfyQexzbmCpgivW386zuru5MxVQY8rcC3wjjwbD88aufST44f92AcpTofQGQGnUV9",
  "key18": "4MVahQiEa7uTYh4pm8Rp5btdFEquaTV4HnDJoDo7pTkJQ1t2a24zMA2xa4RFDyBSPXJyGcoWPR4DAsq2D1hxCj63",
  "key19": "2fa7E9wAcEc92AVwwme9T4Nsx5Xv5cdYZ8f4DZ2zLqJ84CygQE6DRCVTDukz4Fgers17rmSDsphjdZQMp2EUo44f",
  "key20": "2tpx3MZbzaWT3phxDoco847C73vHmomKwoLP73CR1uVtvC1wM4NgGYWbvMPVsqtsvZfUGbD1fjNDFMDGJvepdvZ7",
  "key21": "en1tGtpsxT4S6tKpFjqgDoHPAsbPKNYNvjYsbrUXZ5G41bwQJMoxEbMTYMDYhfWBj48txRgL7NsSzXjrfRKnW6K",
  "key22": "5ETbRRkrPeFSgXx2NeKB3b11Z2A6gMcJ9VnDLv1w3qFGmFPhme77EiE8YcJpwdv6L7LBRhH8CyPd65jArHhT8sy8",
  "key23": "2hiCmidiTk4RM3AurgvmWMToxfWwrNX1GsMCnPa4t7WKGyvFajnVVmDnirwJPwRdmEJMbPAkPCzPH1eCBxxG4yLA",
  "key24": "4EnuPETcTQbPmWAUEcE7BaKAAUxm53gTvnZdc1JayhvK5NqQ7FaSTFJ7FPfWpcbKr4q1ASvH8MS2bUJ6KqkPfiik",
  "key25": "3HfdoYj9GsegcNWGk5aM6YAShWAWHzH9bLgT8zSgn5Xrrc8nLodAN48Q7KocjYYG1qo56SqZimrezk97JmGr8e7V",
  "key26": "3btWKTxo5PyPFw5synBcwErQBfjEhqQw4sMQf52UEppbBJAN5wQTk2wuqPWTs6L6gvQgXMA636gaJjqUgSnxKHf9",
  "key27": "3KWbdE2jgY4jZzWsREDChmKfnCN4ji3mmZKTxZYafEw7Bc1U82mvE3hbUyse878foNt4BthqooKgLbdtGKRRp9Ks",
  "key28": "22YyNtbGRXL8Pc32TZa1jK7k6LSDw5DB29ndJ6S2ATVgfzSBErSoQkAErm373ZWgxxFWUjAcV8Z1gqfsZuVttz2M"
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
