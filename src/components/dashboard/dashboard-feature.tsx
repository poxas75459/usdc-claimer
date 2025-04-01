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
    "2x7g4Zbdq4kcdTnFp59jmCNyUE3256avGo2PeY3vYL12WZvq5YEpJytnNbrH94Xkkinw3mor24KmVQRxxdZm28HA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54zHmyxM87Ds7Vbxf4Kb6hYQXyYuzXGZ6BcaJq3x56DFQVdWhk6vLJKFzZgNF7KjdyWrBYr81cy3Zx8wjuFjd8Mi",
  "key1": "4x9vWjYk87F8qeBjyub3YaETm2qS7znkNG3JxGudwhjacFWtDB57NaupAzpcBgQTv88tYFpqkuHyy3y2rNwJWV9f",
  "key2": "3hDNDmtmmZyj1U6aeFhPdYKVq9AjtRWfbpjm9JXj5aADLQGWZhtcwhCNzGohziD93LqivrkfCAQw1rFcaZqkZCXt",
  "key3": "andgXCdUPYZkStGgW1V6av4tzGKqg77mDNNj4EHYDkH5a7gEZm2oUx6zgab3Hfxaok2ebeLY7SfCFUEJUA2YCfy",
  "key4": "hrZY5e72mTjXjtEJWHZ1rqf26K9jXgndRJ9UCcYUGZaG6wJ1f4gRwVMttnMFF2RogQ5YaVMTpJRf4XVWH3jjjwv",
  "key5": "5Xx1asirur54GmwtekDyqLrjDYUJAMKApmLU5Eqdz8P6Wf4q2yygghTPrFrmGoyVneKcencr1NJZauSxP7zxnxsF",
  "key6": "43NbvaZxeqFJL31ewqncNjmNkDYL3nFgRYCAzVyy3TfKFGGyaDBBzmAmwVMM14tJ3i1tvumKzxqYQpzgLis5wZkX",
  "key7": "4uQdZa6qXgLbswHfd5pqUAqh2DfywrKwRH9u52JyPq9PHAkiGqcjoWpkidMaCaVAtbdhp6rNuTnZTeAKjk3w6fEo",
  "key8": "4eTsQyYu4aFUGzfx6wo9RAhCsxuB8HRA4p1ezz8oZRu4phLi5MhysxnehwqCfXkNo3ouE5oAjVA3ng8qGQ3VcAAA",
  "key9": "4nex1JdexujZc796QsRmzdexXQzgK7NRNKbDMwtf8RX1iPftS1NBC7HcL15iWGKbFN6E4xiaivjv2QxencgeBt59",
  "key10": "v6fch2CJjjXRqzDSSFEaDkF1nKC7L9DPCuXCntNqkdLrJCKrjdkXdaGzfJPZJZKptvDoSbXLqCWBTCTCVJ6rLrs",
  "key11": "2UhabNvGcj6tYGn9TLF5u3H6Rk4eVU9yd7Facc7BnkDkRQmeyTYmsxKS3aLhd2REKmRBw2AMyiBw3kom7jaTQUox",
  "key12": "3rSWYQmPL5h6TaRUah556HtfvGW6BkEpKgRPix7Xsxz5JERmUpoiqkerdTDrhoSYv4ByFBUa1kix8XrGw5wgwFr4",
  "key13": "4jXsSAeTifgDK6ZoA71pLhxvqveAWsAVEYedDiffgujj1xi947iF6prQPH4SCgVWKHjTAoXj4FuE9M6RMpVay2ze",
  "key14": "4YehcTyxocagGDVcPGn3g14BRL4x93H4kRaZSt92WdKAW8737xVKY8yqZyrtkz7Topu6A9KDahvSQWH2mQpSh2S6",
  "key15": "2uGe9SPE4fhPfLiFVBcP1tfuqxKKr4gyow8S6imzrbSoGGWwqxcZQ6rHnGCQhR23LF5mLxhEU7vg57JMqCpNWYJE",
  "key16": "2hebv1wbTbSDYekjvsSNV6sa2j1KuTvxYQSkyy1jJ1BYy4PnfNbfYgiFucTHEq9nEAzWwykQfEvz3KmghgDoJKeo",
  "key17": "KjcuYEXetjQzsoES1xFdq1Y3FZQw8tw3ud7uerfq62EmT3fGzLmdNdg2ndaC8siE5o7PNrvykznL2dh8Nfc6LeH",
  "key18": "3HMJUwjR1o17JFEXig6JXNhT2TMmeXup5xDCrghBNEVrUyGw7RZBtpQ7SBxibcSHRNXGrnB4VDGj8gCR8yzo7PrU",
  "key19": "MMoJ5Wwaq1fwaTcjDj7W8UM7RAvxbx6UmQ3mNcfDJr83Duz6wosmnqsjHpBbmgf42pBajZ3zzPP5JRmGJXLeDQN",
  "key20": "51qvFDMDM6jARmSsVRVYqBqRs5FrL3sDRsFf8CYzkDqXspvYgAG47HzNc3U2Jr3Tr5UyW3T55JRfKh4SpDeoCuc7",
  "key21": "4ka9nh581v1EzLguRgLfxCQCz4zGTwz6nPcem5cH4cx7jXL5CRnzKQhCi2qFDt6h2atyKMvvS7vkHH9TcCNEah5a",
  "key22": "M9Bhn6rJ1hCeAnbtRjxB1AP93roEMUStXz1fx5FBfMJAUGZHAT7vuMhTAnSFLcV9nGQiTXmwn1ZtjMiCZsoU7tE",
  "key23": "3kbLHPUFwGRTfgWTfLy6aAemdDJ41VKCVBLqBquTNLTS5ZepeoWfjcCU5JNz3t8J4aVscPmEig7QbUMumx8PqZa",
  "key24": "NauVGeHAki9DcgjvZGVFg3JxTQaNe2msMT5Riy96o6gokFGktBDNqk2oy1YrifPg1BkwMDtnQJJkkcFn8RqijL7",
  "key25": "MPxB5EXB6rpKuEMgNNiJzkkfsAfqhoCUAWgJELKM7CGCCib7iDXnK6xEqb3nBjfbGCurbknmxQYibkM2SfjWQ4A",
  "key26": "3NGwizaxXkuDVW139YGjiLHvAXzzxGB9H57Xhdpp81NC95upQpLFm3xvUHuz3KorE8juYxt2hVs9EZecVgkBwMaN",
  "key27": "hYJDpCzp6y77VadH6jeVg8vypaaZwnCTnHduc4q2B7CqEbNfyJEcH7y1K48WhfibZcDdCApqyMeKxZDutBL175Y",
  "key28": "5QddyRNtHUnkJ9FBvy27i7E6rL26bMjVKcvpVyJ5HwUzuecFcpv3NMAPr4FEK55QyM8myz8GGTgR49Z74JowFJsh",
  "key29": "EXJjpHm8CvQHfqMbpVrtAeo5mYXT3wCurzTyN1UVw2bPTdRk8gnFVPGqU3Lwh6cxaZ2LLYCbwCmx5osgLvPoKoQ",
  "key30": "4xNYzdTtHc3uaHHsn9ARaywKiQhaHpWXBqwxxfpp5LF8GDedjxdByEQnQjDZELUbqudFWRBBCqXNfEFJQxJP2cM7",
  "key31": "3XmbmrtX5XPArX3KByFJ9oBN9pRYZ3oF9SesTAbZgxNa7PXFTBxD574H9UEvMgiPUeTzydpqv98rAwGLQLHCjQA",
  "key32": "3WJQ5jeHtizmYNJygVurNW82UbUjRJBAfqDqjzeL4Gbre4DHHs5GncJmoTXumfCbjctVdoCV2FtZxKCybe6aQK1x",
  "key33": "2QYym42VoVfjyRgBpnxXjTcgT8Asy6NfDpPhxat2G5hHZMNtu2hSo3M8LNaZ2jNQzzmfJEkB2We2d1dtCTyGqGth",
  "key34": "5s978bAfSgAKRGrR6Q5k7SFXG7oPhcU5tZHXmgiZhPJTWKmyAk3ufXsDrjgSt1tHauRSnzY5zU4HNdwUAiYYj7bb",
  "key35": "2rKSYcVi7hnPKRutoKFsMTkHVpSRVmJag36TVQiQF4vPdkZEJgVn26mfDU8R1VwzUuSv4PmDtgcx8hgdYFy27tY"
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
