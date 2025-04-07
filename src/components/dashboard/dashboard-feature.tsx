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
    "x8hg1bHnxHbRD5D554GL9rBkBGHXnnfhK9Dgp8KnRS3cs9AbR7vki9oUBr4rkxE67fpeNxMFeu6tsfC19QyJQcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67dMtGfBb7Gcv3jb88QS5ghdbnU8eFRFgVoGGhzrzXkiz6x6XyKCdxtrmX56vd1CRjM4bdHytSBF5oehFGzAZmUD",
  "key1": "34Sora824R68qt3kLvqifDTW7LyjK79ooyd1XPqmdkvUdSWJ7TiWGspYueQvoGn12svGbDfV5iiRioLMZGynfC5A",
  "key2": "2N6nYip9jpBPWLwf9nkpzPA9fkswL4fPDAQihF4MhVnBuhBdrdzHbJEdFee5Vf6KPNvrKJU2KeqgZ8fStyMsu6nE",
  "key3": "zHgiM2HU7fF5UfPUeCWKbymC8d8Ajh6NWHgNqkKrGaUSS8UAqQiTSQQzPseJy6vWt8kH7QSZRXG7wdV2jzvHogQ",
  "key4": "5DxFvMvbZww5aS3y74RrRXPpeKTuTsV37M3Jv36veyF7isSKjnf5YvvtKY9ooXFTGcp4b6aXzvNCC5r5UV5bjXbk",
  "key5": "2h9PhumJDRg6N6APgSnBbQQWkMEc7ECm7pvnCpn4qdVQJkHLpGMxQukgBBYLLKLnUZZR5sVQ9LGHiMtxc4WqMy5i",
  "key6": "3rvpG4F5LNaAEEr59w499j3eY7PvmfKBG5scywvakzdzfbweX6tehpGdkvofFLupMda6ScgBV3oh9B8rZJ92jhL5",
  "key7": "jzb6heJTGgmjzNctM5jdU9FAzXeaFSCMbn3N7V5H3bfLrebEu6u8iJtFhZvg1Jxmuby4MVfDoaoNTNyJw9Gd4yL",
  "key8": "5qrNuiuU3NmLWgudnaCKGZqLBqKtqJD8smuRPBiJH1Y1CpLFLaT5VyCpSjJkJLethMDEdu3uZbFSGLAcWLYz5TVB",
  "key9": "3L5Dg3cx4U3UtdYWTJcD7Yj1XkZPeoHm1GeD1g5qTK2MpzsnLDXBttPcKQZYoKgnSNAgXi8q4yBvXeY4tFWq4xpz",
  "key10": "wKe2Z9pJzuuRrF53GAvdq9GnYvtUNwJ68PnAnBgX1QxmtYQEf91cfCcnzgyMfwCjPTeWhjhqqXN4D6d1vZbpSix",
  "key11": "5FvqzcLtd4DGyPXEGwH1J4wGMpL9dYq1R4YXMhoUhbvJb5eKgNrWCago2zLH4KyiwwzNeCUq33Q9VqMc6eJVJ7Pg",
  "key12": "3Eqr7Hf5QCpPpAae3yRJFiqVSs9JM1LFgLcFMdTSftx5h4NbeAHmgyLUY9hKzLAqnxXVNNHx3X7CRzhUmwMcmHHh",
  "key13": "4LqdG8WFTpwsJbyxhstP6Yjb9viUvFtCm8emDf9kTNf4x8zggpYPZz2t6DT8TvBoVS8iMMeS7HvPnJCYyPcnon8U",
  "key14": "5RCP2yPuDhGMARPbf9XeWiE5BYTdLWntC5CBpNh3N2vyLz8v8KP7CdrKxQyE3F2oi32TfbFKNkx8mB1Mutc8QTHj",
  "key15": "2efqNsWcSpnzgWzewAY8ru1kPFWSYhYYgpZX1sLsW1vvP6GdkjtbBMog3b6a1xUtb8utYSG1FoDC112YpUqz6wQ8",
  "key16": "3awmNsuAddQXJVo4QVpnPssZA8ax9t7jHPkgRQfJkdAuhZrvqWoNtujb96PjS8jHL4N6ThdA6ofUxf1KfgdkP4E8",
  "key17": "3AdVaMBgr5xGVpg6sUvNP8hfF2dxxaFHvYyfBviYjQHtJbKqnVq6PH1iUMXHsfFU4ikQM8rV2kwSqkYNXfjdHw8J",
  "key18": "46YnhXeRY6ipGHAEE7bGavrkAQvNCaQNZBYv8HtUqN9SrVqQBTQsKhGpkD72eUeCzGMNNsHa5MCxif7sbGSqeVbe",
  "key19": "4bsinW46qAMmmFRhvPtVJpRomq8nDauxe212K4kg5cnWYLQUaPBi27iEAqU3omKcn5359vJrmDLCwnkEDKkFNVbz",
  "key20": "4U5jQNzhcYMQXXSi1x5Xu5VXjHXvpW1Xc1rH9HZvy8qfhfUHdTij94H2LypGMgkj3WDAegxvHuLT3nxzg5FP4f5E",
  "key21": "42VUoZCNTPAs2L4HLBtGQmPVc5cgMwoXEEwr5vgF5FQxZsWYR9dKgPso1LBmPjt7MTTUosgPADHxn7hh9DTTSba8",
  "key22": "3uVVrojcLYEnu5dudwKgUHJathehwE2hBJ2zcCXM9tGqums8QmBSXf4yU7vnjmCCd3V2FqFNAWGgcgBbNL4z6uzr",
  "key23": "2GGVocdw4bNExHXKNMCNF3artTG3wtu9z2SWp7hfJfEp5DKSyLGFbY8EqzYWLV7iRFc1eEY3JiBFUBSRxwrhzCLQ",
  "key24": "zf1z3f9fuDPRHm8UtXYxzFndJ5rwP2zgQ8MKpar9KMKr8BjC5Z2bXbD9fmsNc3pYLHHYu6rBJnfjCf48MA4RHuQ",
  "key25": "5FyjykVa7NicqB85SKSExVJmGMebK52zzhSN4p9HE6oFnwmZDxg7K2uq1rKuy4BUB4ZfALDR4ev8CipUrSKoxjy6",
  "key26": "62p1dcGyMy9P4GaMzpf4u9QqxuyEtFFEJtnnsSWg6NfATEyWsPEZBLzYiJdUtrWwydt9wzki7Ks6zUtWyUWLJumM",
  "key27": "5gnPk8xH3kXyGzmF86SpbtRqzWJhqyNhfeDPxCyY4MnrFxU5AzJ7wM4wMbo5yETwpzqckLJwVrDTu1zueZB78nDx",
  "key28": "2TKM9CrpwDG7UvdDZzQiwhdV4a7gwPw1BD2JvSCX3CUGyqDyHfDjS2qqHPS93KgWhzQiuedngNQtjweXKsNdHXZC"
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
