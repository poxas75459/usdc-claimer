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
    "53GKD3x6ZpdadJbYGNEnvSAg3gq2R1tTBi1sf9DKJ2phsGbcmbFFtxF2EFAZNMSqTtvG9DaHNtZKMmAAbdit5C7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ly4B9tGa94NhoqciVyLZiGH7U9v7sUFEbzjBYktrduySNSZVTMtv5dEYz1qYJudZGtW4ZQ6cGBvwt1a66E7VuTs",
  "key1": "2zAJN6MJQGSFMk6yzUYj8jDoXyZBAMc6SBam7Xu6rwzTogKnJFu2zDUcyrvbpUUSFYydwNKbELCwfQSu5w5PoiNU",
  "key2": "4r7SKXhxeRwtdwhudXa6SqcbPMDmtXnX1HKaLzLkyW2cfpsYWB6Moa1mZMWp6HN3uHLMa9m7DgRMhYM2tunzkvpe",
  "key3": "2F6XSYHY4kYbBMJ6wRJpyNzQV8RDsymQVMbbLDkzGdm7Xfufi6naKfmRRn2hykHLbyYpQ6p4DBxtwL3DxX6fDrvj",
  "key4": "44oVrSfBtMCygCRZoPqyYD7iqmGATnQeMUMDE54rG3n6uBNK2vm8TeswnfbTmnnxoTefdfBbjWntpYa7jS8UTnDX",
  "key5": "3VjcFDHm2i8F2prVQJiZnR3fe7nvoyRccigFFuUacgcVBboKGqY29WVqe2kiJqaFhH8VvbLpjyub9RvUyVKUgKu9",
  "key6": "3TDdYcVbFLcDTWn2Nt9wiQ38ieh5SqVxoEWZB81M3k7HqWAcFVYamSaW67YCVKVpUCSnJt85XoYqz31jm5buvKTE",
  "key7": "5PDMvVbSDaZXYPUpKtekAjMjUXzK7QNBvmDCqJ5UG8YZNyJsh7xD2Q9kogUqouRJ9kUpvyqCiPQaZdpqDpQ3EUsD",
  "key8": "5xPqpyMuZAC6yRBeAqCjMRbKsmkmXg8bbnk28XcF5PLqqhgXK4Pbf5yZFc1AQq2skBBBevvHZWVZTECjoNHZw24v",
  "key9": "5CyPpNY9SJGJqRWYxXXsaTUndqzK8D1ve4JuTM53teKinJhB4KzxokR2HExhDkNkWqUFVrCqsMcNGwpjByX6Rx6x",
  "key10": "ExfVwbamdiDniRa4Nff3WWZdxdDSKgsXQN2pTrZqdEJxeywMoAfzkPYKUbsRCPAVEL2kLzKkUcEWkRtV59KGDkt",
  "key11": "3hLKSZdFvSFrGU75GrZtATj9LBELcr6E7V3ahmHk3mzS1m6uRVXBLnqYzKepr5ZJrR6XBwEaGHBXWeXVZa8oeJTd",
  "key12": "4qyn6ynkEDuVqNV3UayhRsKcNf4sJgYUgSogTxsUknVBZhoZjJ5qkSJehPyvQ96mrTby5HDcTuAmdfQC22LWq8RD",
  "key13": "45itQY8iV8AseCsDiKqXKTyZAqdU1qTZpp681Z32LszRY9AdGJHTJbfbwEDVCifCKpkATovv8hfQKBwom6Bxz97q",
  "key14": "2b9ewcLXpxe7aeE24kkPdEtGJsEPbUw4QpSv4zp5vVUwQ5XGQ4LVoycXCdLqMz866zfmDvVqXMxm5SdDPvztMbDg",
  "key15": "2TjnFSAFQ6YrGVBZK9BZccP5D2trrdH3ii3PdEc2t6hWvby5NBjRYrMDPiomk7yNSL1ofYUv3Lfm4thuZ7Y17Rcr",
  "key16": "2h1WXojUtqKUmnSLmwEH9VAcw4HVajpCV6LHcLAv12RMJBXH9tTUsUdJi48Kn1V6bHDqRVVEnzKoW6oj3poC2gko",
  "key17": "4hguL3uFByNt6i5YJTUjKbn7ZRJN8gc4QquP6hHVZ71DF9XgaaFxBjA5U2fzhDbcanpXajTGeBGnnpKdr8uhq7F3",
  "key18": "468DrYYubsmBMbyEhTofxAVC1Ed8CjpxYwvnHd52H4U9atKwHcf2WcqnA4E6orM3xN36QVyuyvrJx2mapqpZ5BmN",
  "key19": "3FSNraEZWgx6oFiJHa8YR8Wd6NXo3tdQjmBryYeZRMTiL17Snf1GtuAq1oNY9XDMeVPMpxKBMkRTHGspWRxU7bwd",
  "key20": "rZfoMKQn8E8AKtjJu4wLw8GGrDj9rUoaVRKHSowvHzvavD3zfvLF9YRhJQJ3iRQf6LaNemxAXntde9GsCAcFu7K",
  "key21": "3zCGhHYSud93FDc7HnEKkwvuBSFSiaNjUuCJwpMcPnM75uK4LE8gncjyhU4eLDj1qgoZzminpjymE8B53ZkvAt31",
  "key22": "4FBJzJAq2NaWJnfkrx87hcDeqcAgRRexg5Eh8CvgKJceZ7zXZcLcKjVt2Un73bqPz3ievzH71iVcmRTbXUTyF8HR",
  "key23": "4RnNHGJoVkmsmJmFuJjEunGeJeFiBeowde9Jfs3tzxcxFagCpvgStHCCk7DZ5TpZC7c3aKt7Z45BGkRx47NvK2Ch",
  "key24": "5y6Lc18XgPGvWsuw4Xra2CXhtYCfZZypcFjKz1kuon7EGvcAbkA4dTik4pxJTxW1QqRaCBvsdWJPeGMYexKzEq8L",
  "key25": "2yBydiCK6uMVDWDJJzPvQ1cfmmKhVmP1c5eryuw4LESaKE8sqFSroANXrxt3JRuBcHhckWC28Xta8SWf3hCkwcNu",
  "key26": "2EexCoXKqbTRdSEpk9u8qUoA8BCevs27d2ytkxRTPm4jTzn5u3YCV6nkKJ93ozMPuv8W5E3PmYdfJxXEeypZvcug",
  "key27": "3mr63k2G4kvMfGG5YLcTxVfjKWtrk9jX6KKCUdn781V9on8VA1N7UNooN8XU24xFt7uJ21P74bdQAyxkauVnYypc",
  "key28": "2CxUr94tbRLgE7m8FDCsxp6iSh4S9Ab1Vkhi2xkTikxQKqAgc1z2vpWNGkhd9Nh3VGmGF8EsicCNw8Km7b6dKjF9",
  "key29": "56Psu7ewvv1NjB8pK2Q5LP4YusJ7HykF8agPtNqxrJ644pXGfKbA42jmNXk8ohdnwmtrqC4vM9EbAzmdVmXkDHUz",
  "key30": "5NLfNwShsvxGU8TXVNhAAYgjTC2HnHxtwTyMehCmQzB2ob4sXiEoiHLjeTzja9ehtjY8PCas2ebQzqw6ANfudvS3",
  "key31": "PVJMNWc2wYeFc5MCHmjXFZJgBwknxAqUhQftE4A6d1NYiVrsYMkie1jqDboehaW4Wyo3JZVe4Uiq3FobopTqTBp",
  "key32": "MBZz8xWhWJRtnpYA6Jd9TVQFGLH34gkPPr5aa2mk9mZM47xAQ4odQcKd6dcaU7tKkVmbafy9cLCtrB4nwjZeugq"
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
