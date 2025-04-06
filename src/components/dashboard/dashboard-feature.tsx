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
    "2BMWszGPUNLfMv71Z7eSENDCQFfkBwekjE4tz5FN1AqZdM7iDQYijxkER42rrVxh8bBh2CseCpDhr1tBktYtSjgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pUyFznrxkAdnaHGg3PjzrLrj5Dv58zibMHvTjDFwh932AaPfFTeEhQ4qLDzSvRMRc1b6M7dHtGt6XVXh5HFXP9X",
  "key1": "5243zteVhweKBD3h1SxnM9HC63D2525zpYVLEmePCQcCSmALDNqGJpTVuVru2BxWsZVALFSDEhyVMy9sfTxi4Kx4",
  "key2": "5xrMpaNmQu1g4X7xnMWwndRrybN6LQ9t6knefy8m3CFYuPY1QoH5uKrFwqRU22bF1JKqmQ6yRYJdUq2EhXqpKwGe",
  "key3": "4HMjJgjxDj4TAd53dY5svPaAYQbsFhZnn6oQzzKJtiKPzKm5sCybHwUYuqBRDnmDxwvh2CXR8qqDqMGkgpd5jusV",
  "key4": "2bqUsFvasbpEikbohgL2iWy1VQYJJ7nx7SfmfFTTWg3tqux2AJgRGwE3v31Sfg4SZ3PfFFGTq3SNZ1fKRMLJf2vd",
  "key5": "5eLRPVQ4BXU2GE9jEzzonqgh62s6hfGFy4pMjCLN6xeqHYR6ngjq9KpXqCztvdLXLXAADtjWnN2qjMf1XKWQVrmJ",
  "key6": "bQP6QH4W9nkXf2HbAt5DPKXcHbDZUYjLeM8bTxg8RZsWqa6huQ95QdnFxuoEGrXrheikxJ4v1iHrEY3C4MARAf5",
  "key7": "JRnxUMzp6jexEK9yMUwguYQmKqM3EVfuJjrmwdUbx9WgFhHNkmgqnsRhbhB1vMqiv2VfrzMD93kD8PCP4Jm7ZGi",
  "key8": "5qK765rdZiaWyjF3qvzwHW4pBKzmxCwYVCSUsUh3tupbC7gsKUa23YMjJi4Mg1N8Y8Sd9TLRqT25d6yTbYUJWhkY",
  "key9": "5b8JoxHZiggAWhbMUrwkPKRSHA37TnpsFEYyQfTJ2zRArwfTdhBiytphp4QNEHQCNbrDo7iA5WnTrj33e4KqGsFC",
  "key10": "w16fj9EYK8FEQcAZBXXF9Gp4im3uEd91amsb5xG31yUPRgmnhuBW1s4Q8ccqvKuCeEgaaVric2quxTp3BVkuM9G",
  "key11": "2PoWdQjYByitwwnTk1Tsragf8HuD6h38R4PQM2SHPTpT6E1soa5BWEbHr4XDeczBxnAa3iL31eRsuCXegjsLWa3W",
  "key12": "4BMVS8tugAq1AG4mzzvpCqi9mwQN3N4YhCuD3CT8TFiLb4tfNdDxXMMjwhiU2yJAupy949NThN1D5Z83g5J8odfQ",
  "key13": "5KXviN9N1uyEjE4ULj3vXTo3S3tnXKNrvSy5w1QejVhyLRxU2N5rZq64cP7UuBYAwnyximZjhwB6XhoBAMgboABf",
  "key14": "5yjKSf4G7jzKQUPd2KvkxVBW9YsmAE5xC4sXHoQrc1SZXAPQnCbzobLWbxfkQ82waAehZMuXjG2GH2NJQ3BjwSta",
  "key15": "3HzgqGJhPDffz2FV8doJKEh2s69HX5Jytb4rX4BMR18CR1Y8G2FumyYj8t4Wi58AkdeWXVoSoSMTxSBYXdtqrwwC",
  "key16": "GyoeB9eqMqsDdTSCdAYKkqJZRfdg8QSCwvdzXgqCP2nUC1p4Zn42UynnqjtV83KRiTrKf2yZAqF9MQ4VxfezU8v",
  "key17": "4a3r2aMz1XRRN652ZnkKdTnyYhNLt6Amht5uWU46u9NhRpG3Sb4D3p8fPwSmz4T6yA3dZmm7Ficg5wkQXUmuEQad",
  "key18": "4my6x6KCXuxuuTMXJX1DEsKdjeYGTmyb3sPgeXhv61V3X8WZ5QKX5eWc58E9L6HUsAErcL53oRomZF7LX5fWcewq",
  "key19": "4mWaqVDUkLJCrbvTYMspAuTZv86xCX5M6s9S3wmB2b8Lf17wP6hNY3WAgvo7ufHEQaffQZJ2P7jr7fyRRRQJEMLs",
  "key20": "3QsnN3zLV2XcMNm1mRh6rDdCZCkB8hzVXTYfqJ7G95VFUoBuxcQSY7eY1Q6yNHxkH1pzz9sUZk7UdVqR42v2GSRn",
  "key21": "4dzY2ch7qHQ6f7vaanFPkWvJAg9Ss5Erc26AFYzUtvhMb4Pb6rgiBoJZC84PLcspeMHLmBudoxwBNebwnCUostUY",
  "key22": "2FUduypjtkFCMMz8KtkEJfkxUMiPty5THoeQCqA7P9ZCQrDEZA46ueToNgN2gMdah63DnqjKY1g8uFoe3k6sFbeB",
  "key23": "5ZrT6EubvSnu19de8hn3j3GTLYKbz6MiQrzXfQoaCABRS1K4L7b4b9PNSzfcij6BQMfwWfYsvAq99Ct9UBC2f5Dg",
  "key24": "2jpiwTQWLn1eWN1cDr2zMndBPsW89eyYby9CXSwj8keh1VTNGL2wGvHy4yrNkyzofZxykyZbNyPHEaC8J2VidSjR",
  "key25": "4dpexqyBRBhMwBDQXX5Tx1z5FrHxRsZ3Qu5n3DRbM4M7kvvYuS8tXvMvmzcX6Y4TYgBpWKzMYbTxWL4y3vzdgUBb",
  "key26": "2YuTFxojMxZrMGDVepHARsTRb5EyQVuPvKW3NMMkirVuYpUinanjShbx4cAP7oxmT9ZEhe3ZbfESG3R7mSKRixz3",
  "key27": "ejP7E535xwr7YBgmmdM2RGag6EXEPUnL1pLS7iMzys96bGR856vduWSqvAfBoRjTVBfsac9imtzwk4CGRwQxMNc",
  "key28": "2KpiaEUiQTaCprWtTw77vGruHYuwNtUprtu8sGtfP233fRNT9vKQfoJooEywtd2XzuB2xMfRvSKc7344PLgP9W81",
  "key29": "5mFcf1zu9iMg4VBMDkGwkwy3TMA8DUTJ6JJRubdcJBtzonqbDoyWceZWaPNXhum4UNSHMXZumxRC9YV5q1DaSPbk",
  "key30": "5u39LUDTovuhkfeVjvoyG8sPPzwbMAdWh2Nof5kPtiGc4jEYtjgW7xkqjiEn5dhrJXcAZBZ34uoCeFNfFjYx6nDp"
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
