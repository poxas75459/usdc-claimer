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
    "2qLTBKygcS5PGLwdkgttBV5E4fVFDnRKPa4jmD8UZyiRbDBmBDkqFLgyP31wjq5Dtw3UWyfui4RbEspC1fhjLrzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mct4einjpCT1qUiVh4436zfRU6KJiQxjcdvTn2Qp5QbtGCWDejYnFbbaULHH5LjrFfSMfC4hhcJ6SNpK61Kufbx",
  "key1": "5xXU8ruidjZGh7zTpphdAca72th8V3SN48Z8u6jFNT78evefw31Y96qGRsaw8B4ASBBeZmZQnMBWPKL1vqPfk9Bj",
  "key2": "256mCcpJFC91SYdctqdMwMb1Mscd7HcbXA2qkBBXVTuMomRbtbtF6ga3xMmBHg2ML6hh8S5uodLQRARi7x95KJcU",
  "key3": "5tXrw39zLQf5iSgC6bzAThGnpq7a7JA6RJBWKjrL5MGxyDopLLSLipFuM2HH73MkJ34Mi8Y686UnoqN3yyWXQKqT",
  "key4": "4hbyAYuAtjrdin3Sr5VCBomHVYWnVKpd7eNDccC5ZhFftFsY5xHhEZWLVbktqPxazw5jGttAzbTgKvvtrrXTGNpP",
  "key5": "2x3w8rtW7j9SQDQL2cDsUaUn8PjFMYTvQU14B1E1VBgjTvUzxjyLopoSY5fE4PLLsLSLtetxZjiJSdzGhyKK9Ece",
  "key6": "5M6Fjv5FD5J6VC7eJsLmGtqW2wa3wJV5eie4B9BDZtaAkreAZ7bv759UptEnM9irh7tGGFNtoPdczDgwiPrBn4dF",
  "key7": "2vWfsftNPvwHkKp54uT3YpadHLB5YuSVE5R2LXafpiAro136jfjTuKCXh2K6E4FaScR8JqiNWmW42X7TBrexXXhX",
  "key8": "BzZPx7covAYhGREboP4MoSngWqfJv8JUNnStZyMzvwDfhdmuC2BPn1pDhj7PL4bGYDUwufCpKvZSmAxYKAspDGj",
  "key9": "5UsewxvaT4i1SdnLT2ARbAoiybUyA71PxWu8NTfgsMAibVtQHiNqupgkr3fK1fryRwgzBT2mQWRf5NRVQecbYbpZ",
  "key10": "3jCMrQXfFvL5ThYLcZ2HjhGLXu6dUGHScVKMK7D2ob14QKCZ2MFV7bAdS2qQogFwmeX7nkEWKRDWnc59ydog5FCU",
  "key11": "3Yg7f5ARKxtvTzZQtJ8y8ZEXMH2Hw3bBt4riXEQ6HEun6h5kpEQXX8uUN7xBoBxFjKUyvghN3SFmQKFgEH5SnsYr",
  "key12": "QfQMt2Lmg8LoSkTgV3hLA58e7aWgB8ZY9Vsjtepd4kK8kPiXdnTze1HKYM1C8bendK3PJXt4cDQ9k8RzCySmmqn",
  "key13": "4ssW4YcsjNdyWBfqJq1rJxJtjJypHFNqra8vEzpAuTQ4cvNbVsjSMP4oT6uNTeUDJf7raDyXKsTXTQiuJmBBY2vJ",
  "key14": "44LGjXicdgQEP3uME95X2EekY7xnUqDmykomGZckdUMjc9iahEpGAVXKGdUnys92g1p1eSQs1GBvXPJveVxSX8Cn",
  "key15": "2X4GAuwiWxymMJkCNPuiq3fe5LdfoUGkjYzEuACxqRQR64zAf6H8gLXMY3CSQZfm9iEqiXtVr1enifs7htdRTEMv",
  "key16": "4817FEsECe5KHyecPX2ukcr8J8LRq3r2ZVuVxAotn5N637b5vF7V4jeuHxDsMg4ZVZmM7rQtA9ewoHVykLxNunDk",
  "key17": "55XE5e1oPkDGBrtpgfNshcNJ5WUEtZWwLqg46kBkXEpDq5ksyDBW9s3PFRZWLrTeBLGoBdAaT8yseVKMaFNSZkR3",
  "key18": "3XYd8RA7Qs1Uk1kH5zs5yQc3xrK62s6UnGokUn9fkkhr1nPyucH9KBG2y2UgWJ7pLbJyF2DyxmPZtgD6j9JBpr4M",
  "key19": "nhNEoZg3cFDfozTUAYm67iwEWAp3fLtoNiTggGh2tJiRYE6QudG4TQ4ifXvKNA96UiJUqpPvY32KoAnBD76R89Z",
  "key20": "33zQfk2K6C23g7RjcShh7y4VyFmTBSXdm1eae94UmNiip6M3iV4QgidyVNWo4QR459Nq9EEnaotE6wXCavfCfYg6",
  "key21": "57roXobiQbKHbaQSjht18fFr63D9NkHxaAXF12j6fdhAPrvyWe37VAGLF7agnkxdnNCnm87eFrBa4wrQoPzHso2L",
  "key22": "44c7H1fETekBGPGF9S8PXfpDGYgjRnPy6MyPKR3nWEMiTUgixEffrGmeC3nZddDGiTnC2DaZ8J42vShA15NunHSb",
  "key23": "3ouxVUFwHvPuRfzvoY7CFMcSgj13EoPXAtrm7TzGSA3T2kXCTPjKdA5TgNA6VNS7STkBFXntoDP4rvMyk3uNxYb9",
  "key24": "3xhjKmC2uJKJ5iNf1jMRgKwqxeDrKmQEVevt17kTR3c361p2Fz74JFFdWrDXj8dv4TzjgtSueK85jLP92LCCkQpD",
  "key25": "2iz6APbjuVyw6aHSQEcA463GivLTREZVngM8NZYxm7isHHDaEZtCnk5duB6YPnnZNbQzV3kHa5cjHR3ytGxHbtBk",
  "key26": "5Y6iFJjPbrcL8DLSyc1qjsYxxZ9Fx9TMh3h3PR2MPpVVUYJ9cvaZXt69CRmUEtb3tsqrTwxyTQWF7izRyNdiGbbk"
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
