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
    "2p8b214EaB7vRanSSbkGtpu9r7oj39mkUUcc1KymkXTspf1tz8VbSCYfMeCoyPsPLLoGffv3CtTBwq81bCziyT3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ykW2nGSLDrECSdM48JMM74ykHEaJu2f3d6QdLViAESqeNbeLqXKXNbMCJZ3WMfiwYd8ayVEboozkXqVgw79H2LC",
  "key1": "3CtvoP38xf9B2EsrN2N1nYmmvUxFtzuC6norCZpmCYfQVWfPi3TLPxuPt41G8KFB8jm9PgEDhWngGjjGggT5L5sM",
  "key2": "53iGZpWFubeALoJFXi4tXSYCjEQYY9bfq9KbzvwnoTp4LZMH8xGAucrSCN3F2ShhZRXXQpDPDaB65zy6jtC2KJDC",
  "key3": "5VM7HubRu485jhzi2YLzGTGtpCfQh9UKUtK48iUEfuAvccYsWy5NgCHKvprWZUXognQBXTxj2yQsJBxKeHC7tfYP",
  "key4": "5goJGuBuanp26bTaAfMeB9HZHsnHymV2VQLv5RqvmPcCSxc5Q4KwW21g3hPQVwrH6SzDKXUwHNmZREpJkFRnfxby",
  "key5": "4TB7ec9NVoHMguCQkcaWfZzxTGHQLBCGjV1Lx28cjdAWaYwq1xHmQhZRRdxj1DRSvPEGGZdtcRJHwiGid6gbi7TQ",
  "key6": "3wEgqHM5uy58YEW6wUVUmrD9afNASWsiyVLxNGc6pUqYFCXQ857dkVafes7X872JJzxwLMDTtBKmoocdqNwJpG9q",
  "key7": "mRZeGKFQ1ATD72TaJUzm6ZVi1aXzfQTAdYULnEbJo2wkNdoomcb1T2pBk438h233nGUBKJjMPqZgQa6baRhp4be",
  "key8": "4ZHVQ9j142Wyqja7BDRGx8gfZk9Zo89YsyFmwoRDo7AtD9JoaihMXDWK4owDCWiBweWoD4pBHMuAJZnypf2KnzcY",
  "key9": "58BNgALP1a8BqVWPWeNZRgEowWtwW54bMu1Ry1jq7pt6KLGoDD8Cdhfz81uhMonYACrtohUBQcuKnauw7tErvR5Z",
  "key10": "2LapDF4GpL5CS8ipZPcgGaxAsKMjhn1YnUKbKqXGMm79sf4CU6ReRrqobxGprbvFPaMmmnzjYHdqEUtWajLxrwDp",
  "key11": "4MTwhBa4edWHRohd4UqiKm4mwiF9hWtnpFekrc6AKZ7ktVuNY9a8exGMVK9vLPdFERg87uGWMSq6MduqhfpXWBxo",
  "key12": "2UUCE64kVFhpW79FfbuJN59iXTCs5cjTpWjnWmy5M2TAuQfFKpeNcj35T3AXgjRrwWARqx2YUGYQXxLLPco4zkeV",
  "key13": "uJ9oSpSPiC9tN6PLw4xZy3YrwZpkU2yiUPMatQY1b9NfyF5qwGdQPFcyLHEigQrhihPLcxpYNcJRetieXCgANdr",
  "key14": "sGHkv3Paq7MDKpFUhd7qPWws56eUGvv71XtkHK5wHirfWdmAcRi15weSBRkELptag3ohb9rCi59XKzwAocW8E2L",
  "key15": "2DBebQDNsrYzFYLN55PVGbHmTcLgkzsdBbtnHuU9CKzLXcSW98v4YBozVaDgjGxXFzVPCT7BBrmut7o7DNHMkEW2",
  "key16": "4kkh38HCy5zj8Fb65MzEE3Bjb8A9YHYWr8wiu8hASYycciDJzxUJcovL7MBjPWNeEhpuAi4vmeW6w3MQy2Q9MKMo",
  "key17": "173pNmDjqKWPBy21SHwbviNRwA29mJRjk4rBTcrR3Kxjen9YJZZfjBFuTVSQKfgfimQgnvzeH6QnSG92aQKQErW",
  "key18": "HQiD8uiRw2XB4p38kzmQJpRAW9569SS7aedDH46paxJEAeFxYd6dra8tRaaB2YMggkkRxFytRyHAmgjtMcQCrGw",
  "key19": "55PJ6CPHbHZmTa3XDthfoeQkzGdjMef2TdA64mr9aVeiUuj7sNeSTXbHM8x8NaUpxE9rktT9q96Fr71M6bUgHBtg",
  "key20": "8FgT54xz3oJFJStAhAxGb8N77PqfK7bRDptXnwQb8b4xofiBaZRvwXPeEC5f3QwL6fLpc88KTEWX1qLPoku2yHe",
  "key21": "3e6iZGVrfHrhohLX7tzqBU3NhVseULF6XMXUvxtCSKkQekEgHW4SuotA9qvLNEiAgKzaEhJFKdMpyz5tEiEhX9s6",
  "key22": "5f4JHnNjszJ1SmrxA7umuKP3pygP9DNPzyjkUCqAazrPja8S9KgBHHJXCeMBGp6LqUWF5Ngk88tMdG4398ZxhTJP",
  "key23": "5xTCSg3S9sXeuwySWUPKjNeN2ZQjBiyKA8rotju6KvjLKVtN29VzfEez6XJbkfoRB22vmi2HT684o5Q5adT84196",
  "key24": "bNc1G2a2FDMcVrpLYGBizZvGFzUnocEwKLYbh8hcaGR3GS72iiMKLnh7fqt1aeDNyMLGDHebkHVNAX1tJr4YwxL",
  "key25": "66neaSp6Ns3etiisHBUaM4fuNhM9FrNJxki7CBy1JWXgjVHowLunMZ6Wv7W9SCyCX2P8Vq9mdbknRsSp2pmDqrRS",
  "key26": "4YPrmNEnani7BRhqeevnHsifqkwjh5k8cL7Ax22fqeHJ7aYZ8dERuu5JaTA5pJM3a61hXCDvQP36xBdXcJa81Yk7",
  "key27": "3R2tKqgFKcJeh55pWYeGW4PFcpm5WFco4sx21n26FTxSF9dc34cjwvwtD4g6qYRq2reHUrQyFatNS9KA2JKwtZND",
  "key28": "3xUavRSVXfHiLsRWox8hsDQxgsVEN3dZd5uNjDGb35Rz3RaS3nNJZUacdiC5jWQDubNBETzg6uSroUdG2Hj31VHa",
  "key29": "5FzKSB5FS5YhSL5AwTnrBLu4usc68ydu6a3Y4NiD8BgmY7cCsSugub77bg8XbaUSfBTANTz1nxNCKvw8Xc4HE9nS"
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
