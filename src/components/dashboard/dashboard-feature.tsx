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
    "aXuHNW9i3mnZ66sRmp4vVZaCoFSephGKVem8BsmtMrAj2BTJsRtSq7umYedByM9Z1Pz7H6XxC9d21EZJMMiCisY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tq1qvJCPxumkBD7q9LkXvG6bGuGnSQcVWMwik9t3sGLTrpozSJxFHiLdNFb84Scm3UwJcgDira634j5nQFw2fgT",
  "key1": "gbefmN3QAKKzP8393TcVa5KqyaW7KR6Fx4boXctB4ZpmR4AxZH3BwwbdeXm1C5iSWT8co1vvjZhUEsGXa2B9rV7",
  "key2": "35aDJjd4Pp4pK2tT8SBFwp9B6UAhMDdJWkwrHWuoJpBV2tw4gC3iFdAo1PUGYmev3FLGN5eHLBGE2rYmRTZqgMxv",
  "key3": "ayEWa1AZAHCTL7YLWjzVTYMXnSeYU6MTjj6Bk3EtjBxMfAko1uFtG7BGBQEz4u2ztBZLVdiuKsvvsAikVRXfkvx",
  "key4": "39xo2hDqifsKfKKu5kkHhqJcB9ifxp2GqwbWYBFZv2bwC4v8K5mYR5vqYxv3UZxToRgx8rn8t5VwJYnyL54aK9uk",
  "key5": "5bdrmZMUe21PVjyhDn99HyYc4FUBcYxHHfaNDQVmzoQ7FKrPfa9FwQbgUNpvMoM77u6gB59eqmdRFf3wAVd1QZi3",
  "key6": "2uj9L9NmbRwnimSC3ZSMTwvxFdtZjZ2eaqLEALQpwAktQYP9yNqzYid8DBiHU9DanNVUgD6WR16JH1JnrGEZENpt",
  "key7": "55H9XFjyqWuKvBS1r4KCq7qgWNqV3cibbwCNM5eAaua6g5bVDhbJL95PxbH65z6cPxRSrsVdQ5wc5sgUCVqAeHoT",
  "key8": "2qyr4nGVrJhcsdEgGHqvur7KwGWVTmzyQKyLMHLojciPCVUGYbqRhZyBkiZwUnKK8Q8M8GnabXPCGb3NqXjznVfg",
  "key9": "49jvb41R9quHLogibse8pqGV34yxzhj356SUbabdxJ9VgRrYWg2MMmuJ8BZaoaiHpet7Y9N68z5JMa3WftxVwyHg",
  "key10": "2zPkwV7QK7V2z9Wo1tqgLeSJJhTT5dheAR6w7pMBeqkLSeEk8GDL59pZctxuPGYoqVxhJip9H76CVMcbvS6N2DRu",
  "key11": "VoiVGro3Vh5QEqac7NFVXKfWPCVJXAqSN83pXyiXryqhtFSMwzJdZJDpKRLte763iPM52ebsJqkJbqoU3uY4SMa",
  "key12": "3SfLX66c1eSKdnBVjrhMtojofkx5GWwUyz2pbTjiWQvHNT41RKBLgspH2vPLMBS1FUaFt2sYgX9NAWp63SrD7HW9",
  "key13": "4AX4UcJbeXgw9gikBkpaZeDdGcw4TVXWpg2rp5LJCS2bhmXbFkZZYWwhLB4qHSuKB3Ffb9LNd8EEKEsSK8GvjHiK",
  "key14": "49emFDJgww4pXEybVWzwjZUYNiXNi5Li552kXC55hAmsAduSG3svgrp2W1AaTidu7mkfWCS1N4bDZdWfphexMHrj",
  "key15": "3pe3Gw8KvZDksh8BnPUNceMkkSFUY9RLzh4S125RdY4bcqEYShH9uDewgYxZBch1iyyz4fpYoFJA8LQRLYiAmxTm",
  "key16": "5GaWgrp8XPRDVsys6wCmf4KQ4vUYqVhXRMVA7ofV7yMreMojgAK7ADyJFQn1GvjvsdytZ7otAkN66y8Dz8GUvaqN",
  "key17": "4MQ5cjBKH3kZH4jeArxLrCddJqADVAzZhG3JfFAHoM23zeP3eeUKKLXjsvQvKMjKxRSz2WfBqK2LyMYfzbTiEbQN",
  "key18": "3Q48sAN2BJLuhSC82naEc9jvMTuW8a3e4jAtdc8YewgiLSJWEsRqbqVKt4xKnnqEw64p2SL5hMg9X4RgY9C2nrdd",
  "key19": "3GvWvZ2wtRDHBi9R1MEzvVL3BbebSas65zArL1TPjF3d7g7LnjKcuuRSfpqtLT94P52VJFPEFRYiidci4RRqeANq",
  "key20": "4jp6QxmCWigVimFZZw8vsDBoaEqG7CDNygCSFoLbVeJM94BBb9TvS8yiWpHjupJdc4TApnoS6Aj4cC4KnrdiXAVk",
  "key21": "4T6EPL6i8LmDPHQWx27G7YtaLaM4wbUcb3mkYb53mug163c7NSR4kp9GBgmqPEADDjpW6Ektwz5BQqc46zCroQW8",
  "key22": "ni9NwtF7fcTgkpfG3BcGCYmpRn6EUZWzfVAyQ44baeZzUsTeCiCGiMvuk4jaZ4qXhpNXVMDLG57FzDketXw7pLU",
  "key23": "5oEtKknXGYmcaEdzV6Ue1crNfcdki9drMpu9KRMYYUUfSjnNfJwcdkEyz9iQFh4SY3BUr3pVMJkV9f9u6QzjmGcA",
  "key24": "5RvjJWrWez95F99vSwnjYaEiChkTFVVZxgZTGhd4pUe2dQYWyhXsRN9EmRQbjoku4ACYT1zW9mskTH3DVB5iVFC7",
  "key25": "22QH29z2Fpp74rfwjpQbk1JYREVXZ1RQBWgj8YNYGQe1wk3qEvHnscFAAoR8GxCqsjHFndzKGc57fQZHh4ZCUPnb",
  "key26": "5K9Z1JDG3EwAVSTttrbwXVNQfs5Ao9b3NMgyDyTDPDuutdWiLwLf9j1W4xW2CZbi9xXCSi2AzBCNHFtGRh3FQzo4",
  "key27": "4J5Vg3m2ktQg1khrhHDcLmkMyxLDPPaF9SDuFv18Q3bfzwkx4vVhqEKDm5EKQQYEPhLQYh887uagCHdCX5zs7XGV",
  "key28": "3bVT8XsvPmppw6ZGsyPPcu6QKVwZW3ew6tFbSU63BcDnTdv6pGrpaEzRoeE1qTFYQsCQGXuVmztYtubgYq9hwmcM",
  "key29": "4dCALfbPHBprbS9cZdGV9grjKgbEP9fNjSbUEegmCeUR6dnzJjuUby95PgAiJcpF5YE3Xz3CzuexsrYPPWT9GMkT",
  "key30": "q47doS3KQBuiuQji3Qt7n1yA6xw3heiokN5isPepU8DuDZzLB6TW4XinkWEsAHNugAR2C728LDqMHSggXHnkAQ4",
  "key31": "3BjrkCkeB81ye2TChvBjTEtdLys9WCLx5N9LteamCV7UtbYckEmJN5BG7AbKAcFWa6LCWFphDwF5YtmM7XcDGcHp"
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
