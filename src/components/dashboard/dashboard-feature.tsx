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
    "3kv8AZ8VAF9ypZfqRgeNS56u8rkyZkt28TLiy6rSmCpBpv4UAi7Pz28CQ2LXPPEEqQ5vJ7pTwhNP3XDg2uGBkFnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pvJBosmSVNdJUcegXRYscFVCJT8jZKupYT6nCuf1jFTatxSYswpUeUqJUmXiapr7XaFhE9RaSKLuGBBRnxz5Ffg",
  "key1": "5CBtSPg3kSXrt2u5nbh56GtqzSWURAPrVT5jWUeYvq12vEqLNA2hgAFPaAi68YxjmxfduHN5iwVsE2syNG5egThL",
  "key2": "ZCZAYqpddtcH7mr6MRRg15h9GEwjnHx4sYmYhDzXWazn92GNnQxf7D8eBv6tR5uzzGDVruk7L5uaUgeWMsKXkBa",
  "key3": "611tNta9yedK4Tbxjv2htyvah3ju2Her4zDZKHQDyGmkF5cSuP3aoDfT7cZeUgZJ1oy2RiVyiwAXR6siP25ruaj3",
  "key4": "2qaoZZMzfHm2eLtNQcnF2WjVEMBmPErXXxes4qscjtuHDcyjM7f3KqPRVd2GkCs73TMCJ8jnFFWv7ZJqBkwm2hHL",
  "key5": "2cmdXjWf5RJNFDGFizL3aaKpnNoz9SFF22kgasBSZd4MXCJah5Xpnepnh1FEaBU9BQv41LZXNtrfBs2zs9BmUxVA",
  "key6": "2MjHUzfVbz7UZWyqvYDthGezTsVAkVFhjzmcJb7DL2pSSGCrgtXxdZroHWLegwzKDQuEQrgBYxoTvxvqVgbMhoGv",
  "key7": "2epuhYW6cQEDFCZESqMhXtrfULhxL6iH9Avq4ZXCtog3crjr37zmH8wnZ5Ghe5cdRjLsX6S3gpGHdt2BYDuteGJj",
  "key8": "38JgnncVDq1prkBQza6Ppo6EaZUHqBXXaVhinbBBkwZuaJo8CpQxYq2qdsnWNtn31XJLMGutcvEYfzgRNfnMCYAr",
  "key9": "3ACAjJFSNNUd2ZwtoH2JAEhotUqaTtTaDPWnh2MaYbKph7ovYbjuGmx6cieMrPDaUE3hDR4YvvKrpWYj2NoXKqmX",
  "key10": "9t6tTNdAqZTHFiT8bLh9ohW3so9fdH6xQSAG7iFF4oV3z9ic3mJSY1jAf5ARfJgBHbU99B9Utc3tVQVGWJ4mm15",
  "key11": "5RJgDYEa6XyfxjXPAJF23b7USmnUy6JZnByWMoecoQLCsuq4JEL2zNveKEf7F2eM1hZmM4xUgJ9A6fjg154sLHyY",
  "key12": "A6QwmoUzXJTdffXCvMxLZTBSLq8qucJu3e1aCAoivScn2rKD5iN5tsRR3Go9BwVZEP9CFmNSjTvYnXKfykD3YCm",
  "key13": "4ZVHPH9cjAvQYvNZEjhPsNDCYUzjtQNzqks6qpDB12nYNgAeGZDPDqES6sSMr88MacQDtdda55sz2ynCieDeJEss",
  "key14": "5BtsWCTnmz5nWK2Y66CUXwV7mWhLzoXB5FTYn8yAcEyzpeCmAPZaZQyJJooU4Y4Uw5L6i8TfSSxCf2zRXvwWkXKz",
  "key15": "qj3nLT6CpWWtCATovSFusvYTySFPspXtNJN6WoAVupjriewP2T3cRHNNPBDmmtdiTYqcC1W8aPx9MQQFdsii8HD",
  "key16": "5WqCERdzyC29EDDz6EFffB5qVUxwnYLjXGKwtfKBXTDwGuLDeoygWtgChu3fs1cFeznCe4kLwJrQPe9cZbVsNXca",
  "key17": "3CAtjhh9zzS5BEmrSb38w7ruEPveAGh4dxzofEAsGTWXuoMVvp3vsvvZ8xDguipn8DUpDDYQd8Rxm8CCs4fG2HqQ",
  "key18": "3dKTkJ6CdBqgfXYRh2SRWUhspZYoRdnCijEhS2gzWdZwDso1jWuXA21nrr2mSxkDQwUb1eFsodnjJT79Su8J7cGx",
  "key19": "MTd5hJ3LHCvotgJm1z5DJHMtL44vhoGWpLke9AZv43rMAWfddeHwLMyBoeuJj1Da9KyJpiLby8PajKpVooN3d2J",
  "key20": "4bHSgsLcnbkD8x6HettgQDyPRBqR1EyHqDXBdYPbevY2quF3hQotEWCUkoqCw3JT4LZxDFytwVt5A62vn2zJv7AQ",
  "key21": "3EFaJNXQVbwzdZ7T3MNu9vfgUzJLxQ23YYRz1ogARVNjdKKoL7HLXXtXEE3fS6tggnWAme8mtVi5xhXDVpcJimkm",
  "key22": "4x7QA73bdedfekq6tpgN6qHFBRfjaXxqBS5PSqKMoL3PT39KcuN1UiY1zhi5iN6h9FpvQpn2G8iTsXKTrSj4qViq",
  "key23": "4wPqCQKkJReYU2QzjB7TMD6byauTpm94xq8nHtLWEUG8g61STTpvhD1nzvEoG9vbXgevEqVDfeG3dUaZCzF7k6qZ",
  "key24": "2qDFQqdD1foUV1p6jpxUYiEYLcpe3odZ8Zq6hhQ2tkyEZWTxs7wyteqDncjUs7i2f8cBuSSFHU4JUwrZ7SP6iEPK",
  "key25": "ME56RiuAbeiANE3j9Bx3NMu8PGAnUFyRLeyBFsh2JgQPywx2T66TQjzcmVsozhwyo6ts9Lvegy9AHFX8W4BQEur",
  "key26": "4dU2s72Nf5b7q3AuVnNoYnjyFiuYituqqok52nsGKo7GrtDtnUMqt8PX2ZhaoAdViD5ssXCkrBATxLpxmEGiwrt7",
  "key27": "3rTQShm83VSFiL3Cyct65quKbvURnRsTgw1ZAYj49u3gh1nGsChJYHQ6iSZLKZNejT3RWJb3KDJ2oBaJQPziWFvb"
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
