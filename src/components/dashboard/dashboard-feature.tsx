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
    "25xpQtUJ972KEWPhBFkt5YzziYUTLwqCmfBDwfHw6MxZihjvUxK9ekkaDLY82C6qWhnpvzZj3WVhkhbJNGMBHfNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YboytLHq9KEbV5d9QxhKoacpjXfLK9krwsFjhqvUXcp6deUEowSCZzDYDwV5SdC459cC6P3FnTpmKLc1emWWSHt",
  "key1": "2W683MAdetZZRKpCHYrSBoB8FrLhct4rqE2RqEsu9QfBMd8qBRiEh3xeJhiRrwsMq3GqfdKKwod8oNUPZR52h8WV",
  "key2": "24FG1iVhCjQVPzrC3UnJHwftKbHeQqgPKgaQoq3KPsXxjheY2TycaojzXz7dEpwey182qxyLWTUrEbqTVVZXqzBf",
  "key3": "2rQmrNiTcnNcZmpgzGjs5mUSdC81ABhMFKnYH2MKLgboUDvqegfHcr5WrbRPMWnsJ49wxoNHoFiD1Q3cBT9BFy1f",
  "key4": "2P5x7rZApPfMbzMQVevi1WTggdvEUSmyidBJ7eSUkDwz67xj6UsYc5Aw6PKxs8C9udrSiro2Kii7D9zXgzQPyVMj",
  "key5": "2Q6GXXJARiQLDXKrkEjkApsKoos3U6UMitfyF3DNv2Z9woeYf5SnBsjxvZRu9Y18YiRMmNQLdsFR4P69BqGmFw4E",
  "key6": "2fw17YkFD7XedEtH9tuJTicvh9SebMwGX3dwkYubhLuJ93MVpZ5PFBXZqyU1b3gDSQxZ6x8f4vNsUijvPhfuSR4i",
  "key7": "NmasLd3BW49iDGPLusHkKY6AyNMbwCg9mYZjwvtDaNdYR4f7DZMesQbefAkeyL9DLPAQA4bSyozYheXDuTfdXKy",
  "key8": "3RaAEdnTFsGFGZFmrnbmjc7jEQV3TkPh6E27smNShnKihySnyKkPYfDQabNpJ1RQUYJsKg8HQefChhSJd7zDKAsm",
  "key9": "41aPo5cRY5Vf9npoDJ11Y8dT6JxABwcjduCiU2kA6LHvt6LZoE8exjWNyhUcqjisSUn8pTWvqcF48kCewojPkTEa",
  "key10": "2JQYajg4KiUWDLr6CWWVBH8v7dgMKuFZRtAvAyZgsTNU6K8qeajbKe4jmTJdD323bxd4Fv7RQb1riucrGkBRJzQv",
  "key11": "Lp1oxCrPPES34cuwRqsNeVut2WFix37hbcofQ9JZssqm7jp4xRt4p5imKeV5VkgJJQEWCZBk4oyiKHoFBYGnvWA",
  "key12": "3pEDtsdjGNtvo84gtbBDJJHjKvVJE9eiTgi1kT44noU4Dd57LufUChk4PfDfKPnSTSgrHLN9dmueHRLon3HXPYuA",
  "key13": "knS1Ma4cpfQpcMP1RKsAXsd4dAhDqfsUauFGci24qWbEtSngtHxjXjHoawgmhx7TN9qyYg3JiqEmSh2paxt9PuY",
  "key14": "5nM9uPp4kcTsh2vVtGKs9vusU4sM3Te7vbCofTdEMY8UvHn7g6zJ6Zr4JScVvHgb2MXbzYmLYuyiWCZHWKcXo5RL",
  "key15": "4hqUeDz7CFkfkdTyDfuBkAEbENfs6y5NzL6tbe5YjcKitTXTfoXaX4Rkwyd4PFCXFGopFjPEmTr47DezKaTPrWDU",
  "key16": "4RAw19EzWMFNxK93pCMCjX7sTeLvymAzdgZ2zSyMkN1DZngPLs4SvzZ7NMawXC6jPAQPirebwsYSyHTNtBQ6V2PP",
  "key17": "4rZS1GvDJpdvnCoTGqJMjtvohZU9U9WwhR3JCymkKKjHbqmxF5ucA5Hvb3JxmPFKGn7gjKzLkH9cM94sTWSQVjBo",
  "key18": "43AC28KNMqrKNJn8cdngZEYst2B3RFiEQyNqR3zPJcUPC84At9z4QptamQJSTaUqPGSM8ejCDFXusQcWFouFkCii",
  "key19": "3LbkeNArsciHs8kiq4W6iLgpDXZFvikTP5Km3myJxvBpcKZJYaeGfRA5XT4HsfGme8xgYqdJNKDctRwewPgqJ316",
  "key20": "2kSw34aTPPL71EddX3wcE53PkAc24gykAmgsYxrYqt5G8S6ZgkyqWJU89TnxmH7S9McQw962qBFPV9UR4rKc78uj",
  "key21": "4DfoK4p4bBF8xRtwGDtuyURTw5AbmGudUQqieQkwxdvC1GyCFuSH2fhGzdbxMLMpMrc9FuqeD5yvJ5J6FcXPAT1H",
  "key22": "3ApRTkHEhXy3kAf4AP7b3zxtLunLsWB6iUaSdYuws1WWaZoTtg523rzyK9DABcjtYLQYA1Ygk2S9dtCig9zKn4cP",
  "key23": "5VRAEGDdHYk8K7PtGWTNCLBMt7meuTbAq4QnQK1mAbB6GQFEU3fQb93AEZWhzX2odRfu7Rz44dhdGo25enxRTkfg",
  "key24": "22PAxnwJxXsucX76EyE2yTfeYK2x4cBpXu4gFJWcXqWh6zuBWjknn52x41WEw1SBCQ1hfqhFKfHgTYD3Neg6vtAf",
  "key25": "4WyV96MiRwMsnraV7Qpg2myayfzEpP3fbe5XtzFHFf8WXn8ZfmMpB3zTxTiug43RyizfD5UYVsukLa2UC7dviCD5",
  "key26": "3o8kVr7DeTzs7SRZnaX59ucnWzWjFzjSEpn6K2tb61CQbK6inAqdNJtrumSH7QhonSoAi4aP2YmgYWh2N3cABooc",
  "key27": "2bqMvexPXnzaMsyVqTQQENQ5JSHhrvtvARGGLYLfMWrVwjoevKgMgHJPvjfq1wJajkw5FnWu1MMFSHHJmTUqYC31",
  "key28": "3anSYGbVQwBDV1JCZ4nHm59KFdsLSUZxMmWS47Vvjf91aJv2CYEHJ14eS9MKycEg5cGRER6b4qxqJhggDH91hghr",
  "key29": "48wrbrxGjph34v35gpv214DvGvvYrxps2XJEnHmvVy6izgjzwa2aYsKBtS5Dr2phbaFR2rpKx4sg7hAoP8QKPZ9d",
  "key30": "3CdeBGj496eZJSup6yKWHto67P92z8dAbJHBmB7Lo7Tb3cFaU3DyVuPBj2gfzG7qWHKJajTKQQsMxpxHnS16DiF2",
  "key31": "5GM65t4fyrvCPRhLD4s7V7gRj2z84dXWAmFtFYs6DsbLEyYq9gvjpKW2335LUCB4oqsX5zPjYmYd8ffJG3b1wXB",
  "key32": "EkH3aWBnh8uCV7k7fkjyzDFsqJDTRSPvUKGicaojrF6CcSr53Rn3MuaBzsFyiZab7jxgCoZHHG8ferFY7GFXr9K",
  "key33": "3McnH2FeNv2toYhoaPyBFvjZL2pZyJnp7MaYLUVEXrGhEoppY6F5pfxV9zKatHdQEbWiJ6egneiAkC5aMVZjmSYS",
  "key34": "GGwnCQM7wZrafRJhHBR8RmNdbEkE3rzpRBLToQywPbwN2bxPjmVzyB1nw1TwqGgY8RUxsGE7ijhHLTm2acNmiS4",
  "key35": "4Lo5eTD4QnBxGjQYLAkhrKTxjyDwqTgAvEzxFhFGhz2r6FFSWiCZWY5GvmbkRJPtd41D8MQc3J8AwbkDbhdzcaN3",
  "key36": "42dmW1xpzjWfnvNYH6dYvGK3gVAWp6Rk7H1eASS33rYwQSKw5wZ2FHN51HSd9VDseiYhiL5JM5Y8azgrWFXypL5D",
  "key37": "27Af2pPMumLSX86tPb7J5DGytAgkud1SV2Y6aLwKuDvq6V7BAgWLc37L2NP57FVrBUqeWcJkMMjqGMMWnwTSwVVX",
  "key38": "2yte8shFGEg4XyxWTxN26CmwRrj3wNGiuokdJVpT5tevcZ88S4RAjHMcmY8WRRT8fv8QKX2PzwEzGFuMwmyM9Tsv"
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
