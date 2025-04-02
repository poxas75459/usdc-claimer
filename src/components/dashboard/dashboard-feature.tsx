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
    "54zTCd411GtucyvaJp9n57oBZ2yT2dgTL6XVxZowhcoAQnycJexErH86GVVjSqoVwAs7hC5y74iHnPrYmKHDrthC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rbGojNYmTirAQ1J1CNwABt9DPUP3p7tE5Bj4hcRj3U3qBVvN8cRfn7X46HB4JhsHFDq7viQn3T4YeZ3Yn8krdBU",
  "key1": "3VR8qHo3kJySF8DkeyTBMmSe2x5fEogjuq5f55mkFEdyfQa35k9TU9MHS3tBuwahshJtGdPFdn7RxVRQZjQKrUkV",
  "key2": "4vYEfQfyAjDp7uKThW8gGntG1khrHRaECfyDicy3CkzdkEcvoqJV93BuJ2bt71bya3wy21f84abSzynMTbM2kdLX",
  "key3": "ap8niMsX7gDtVDJ6oGfB9ADtLru5URcM4RQ883UVKWWk42xMHgs33vC7rsutJcpTBdvYCGdhxCSUoRCUxGWXuTV",
  "key4": "3v6GhVgU5vRRKhtP31rjx5uFJZrCxmTVCWJx3oac15UHThenwXUcyR2kieGBXMdyCjw5oXoJQvGTvuNuAvZywkLS",
  "key5": "2yE5HibPEazvvhrAUhXwhDqTNABD9BKGemZcvjvK7BVNUipTCrfJcR9m9F26YsGCCHdJSbqxuVwtVUHkr6h4Rzdo",
  "key6": "4CBMQRxpjeEy6tBrxHM5wugRmqAmDXX79kHt9kMpykAJYygWGyhEYQkqLG3Yc6N5xqZJbsqHwZ8b4QmziCdrNTkH",
  "key7": "24JYtRKVoMnJY2QJKcwqw5mucix7SdZJ2jzgXwNwBhhmBD2GrK87VLTXPmZ3daTraiGSjjRQPJV6kHF1KdSTjZa6",
  "key8": "2rYtAu6ZdQnPyQzocjWZPDuPrJUUkrS2qB2aTdDW7yB4HJL6o5QWnhpRv2omqzYw8WRdtowFCULauQ8p3MrGpjEx",
  "key9": "4dADte98GMfwSZPyvsayZp9KRpDDmRBDWktYdVG8v5aQqpEsSeTXEKQaDc9Sm6pBoMbGLfYtXHj39nbpvLZnwPQx",
  "key10": "4dZ6GxH7gvLhpavfngWBzztATMDBKH9KrPVkMUJYSSVeymgzqC48uAv8482tXd3GN1SXeB9kHVwPc9cj7Z1aLar3",
  "key11": "2SFgEnkDukP4P5NNYmc1fHJDUXZpbVajr1P5iEYPkE3ywHaS71dkef9qX3rNLnwo5EiUez4buzFxrTqhUJfcCb1C",
  "key12": "5dLTmC1FTbQtD4ZGmgsPkJkKs3xJAxdgw2orMFu9R4doMDJgcn1sExK3itQT9GnxPW1rNDTL1Ui2ALNHBjMoUY4",
  "key13": "66CcgDo9eHpxckJ2S98EzfoT32g6Lob2byKY4QoZPnbJrdWyiva3JeEquAsbR25Jaz7PLZ7KzLW86RiPVp7Ek5yH",
  "key14": "4yV3jcxbqq8sJE5HJPseaYHQNwym9aHDfNWTXcDvjiGfhvKNra2HjMjygaj6EJW27cyGhUuWFFeHcqz9GMrtVCJB",
  "key15": "4mYUJvVZ8f7mqWqoQYj5CzmPdEWmFWHnz2axRxe7XmyiPz8YwCQF51zeyP2WwLKiXXgyRYgHwa1vMZF2tVcH24Kj",
  "key16": "LdNz3C2V1mLiCqrSX1EmgRajSNjUDW7Ne88kWMZSbGeMXoAa1rnWUKieLoqZ71o86VG6zbXrqgm6uGJgzz4edR5",
  "key17": "3hoTspvAznB51kunkcJYUd5QkzBtpogk36K9FF281suSRS6ACzcU4FmUTnBwry2z8mgsAbY7YwUF6dQ93mU33haS",
  "key18": "5v4vqRfeZb433vGJ4nminKM8L4LWtD2GdGYY31B4zVtfp4JXDhPHYW3BnJ9NrYT3Agi7ywjLTTKsRAzmL7xTy7sz",
  "key19": "uZh2fjaucL3bzZAaTivkcQh7VaRbXpDS4QhTsEpDAt25UhPXVRR3Cdcaqr4XhgaW39JwuxfahNDj7JQ1neuFw2D",
  "key20": "4QwbHLfF3bVnJJw21hFHH5V8Zco8Yk5bugt9zKGoC1LaEXbVSQaZRyU1TcYeeVt8F76ZXgY5G1GtKeE5UJr9mbrF",
  "key21": "4LmPsRPeC5xzhJqWdHLzP1b3miqLPw4YDF3bAE4RcL3XF58wJcDQ4RCf5fBTqKUmoj5BjExDd6ArKVKbc5sfbAFG",
  "key22": "PyihrhgT8xb74M1ApsTWEHYvPZjG1V4Ba9tLxA4kxerwrrZH16eu5g6YuoD4YxVfVQiM83skWyyxa1xuuw3wUUD",
  "key23": "3ccvdWYg2sC7ZWbZcfK3DQeVJHwiSsaaweGZaA4DACCV3rqfJh1khaw8K3anTxWVqLb9FNGNoHjPPsqLeQumhPu9",
  "key24": "5R5mKpFFQN9M81bE3rohTvPLcYLTS5hDYQhDvrSwEqeX7BvYGNbnJio7dVaJSQ8ggToXBmtTDpd4fAT2No3rvbW6",
  "key25": "4ymfTVkbL5niKT5iCCw6Gqy77uVtmWXoBs6RAXVqUYY4Lr3gb3rMTZuLJj5eUFkKjV4kGNtooh4fgopTfHuEQmiB",
  "key26": "3nEsmJopxhziuxQZNrVCpVzHQRzcksm5FA9qCPWyY9UaPsmiWcu3aUKKhLjsPGexzLUcUbNN7MYkPj8E2envCPc9"
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
