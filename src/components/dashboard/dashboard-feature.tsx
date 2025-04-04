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
    "irsZKYEbrSqFViMnFiAwaek41H2sFAHT92N7o3w2ymuv2WxpNraDqGvad7z8jAMxMGqNC83jGYVQqq2u5JVZqiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67CCx1nP4YRQdWcPwPYR6jm585apq8jB8vdB2XtAirWiHS92dAxApWxASPrsATPx8DFBb4sjwjDLvFjdK6Pm1jks",
  "key1": "Qh1VHjhRrT5171fi6WhG4zk499d9F7wLXgwX1n6pAzVz3MKzXtj3cm7MPUneX6pjz1FGvPfpej24kC27GozTZsX",
  "key2": "3SvkTmYiR4BXznwYSrwvFpuzXzPdZkPKWg8BC81Chmzzb6jzFnrLRAFHpM4FPaEE7oWbeBvSjXEjqVVVnDSLDWro",
  "key3": "xCw4kxozx7ukCKCom3BGdqTkKYN9dkJ2H4G6haDdhMuGS97oBy56EctEvfzMzTMjiU4TZmJChYzrpfHvQUNQF4Z",
  "key4": "5T9Tx8VEiBYX8NruWDTR2Wpv6SqdK8xnd6iWVLzDRnv9pPmcHbdSv5VUT5cNLJQSSH4FbkwT8VTq7zVLrhb8DB3m",
  "key5": "5vxAfLM1mmCm76dnRVT9QqqY8FHjJW6zLffvcfiMxQwED1Skrpj8JwJg9yKGwjG9rAKGVW2hoUgL4KfNtTaNdahf",
  "key6": "2RmjckWZPFzNF9427JwRmirMG1Az8mJeqxdqnXaLo94QTiznxDFHHiz21GUmdNLc2StneoZgYCqZJL7uQTxoi11b",
  "key7": "2iVH6WnSDbdxXYUdfHmYuzHnfxZhV2RSQMuCPozry36bq3bXNip764oqXwoBNZxF4nz7oj8KH2aXjGFJgtP9JTVn",
  "key8": "4GuvNYGbeMLvkSbCjBrqJt14egRxbPQE3xXXmiAn7wxNS4gr7D2tQhbbLmZtf793jafSYy27ELkYQ4jZA4Y6T7YW",
  "key9": "67XNXLFdLtnrvvFBuYhazsAubpfYqEgT4BbyJqBf8tUdLTXZtDSwZsoZ2iXgAZHFbL6QMMv7xYyHfyPpJUTu3xhW",
  "key10": "3hXcBAYwooBxxA1VyHZBjK84ymwvt4rawmbo3te3vGXEeyktpkVYtk4qkGFgoUbLV1G6V6VFSAVN8vrNu5jonz2b",
  "key11": "4nj7e6gWeMDpypPVeN6oMtmKbLVAq6zhwFchCuFYbDCMq1djw2NbF5o9wmmfQWRrBpBRgfZkfGSRryp7sekAvnH3",
  "key12": "62bgPaJHUW8F2Yx7JraqdKGeTNcKFz7qWH9CsbgNS678HPYghZAsPr21hTunVefQ2KjwYfxwxctP3DXgKMZFPKG8",
  "key13": "2nh3cTQsdgbqFcsU1e18tTa99WJfJEwZacWFSWLDJbbWJBprfi4276ZEED67bp37ysbeRqfxHocNFTfo65K2yJDk",
  "key14": "2NnsswQCeKnV1GQWrAVko2LYkfzHuPrB9BzKBXcbuz8Zzn15GTJt4WBgn1wqKQ8SkVRfYiWsESpfc64zMnwQEajD",
  "key15": "U1sUaqUCxWBfnLKzYRSmwJKpuUCxDMFxbaNJaFmZ1rJ4hqKe37VkXukNSoDDacz1aPz4V7f5xVvmnRm3ZaXbiWR",
  "key16": "2PoUWmtFSNSFjWZ7LMWhKeTmrLtmuKBCc4NxjgNRcij77S7VJKf97neeZPkg6qeGNoS1VXJTRtL1MJo6eop9TuwB",
  "key17": "5miqcUBueruYTT6emTgGsSMLMUdTv8hmBL19JXZggHxeRYyKCwoS9MDGtnLTbHntzhyTdjDJPx61y5x7b1fjpUAi",
  "key18": "3W4TvDaofDsfAdFfb4TvCAQTxkb1gPYxYfsyy4x8aT3zLeQcB5ikorToThLGXkqYYmFLHHinh9nQvMneBeybimoi",
  "key19": "5zEtHuKzPR2w1vot53jJgfzA1yyqKG3rPNah8Yuq94zaLfjGvnKFQkvoBsNu34mGHtra8VWH6JSbdnhnZqRu6Qvt",
  "key20": "4vG4DheVkKcmfdsSKRVUz4yq7edWQ1jh1NPuAQ2sxDnyheS5vtNWM7dE7AjPQQnPN4Kgf1s9AaBHMLogC2UxB9rC",
  "key21": "28tY4V1G1vkmo97vtwELvJNw91mLCn6SZvCAbi9ePGjJsskSZT6GPDh8bTYaMkUZLswQoKx48bFGUHEUejGc3wpr",
  "key22": "5MUQqzGbymjMcgmkqoGPwGRsyQc6pQUPr6xAAGtpPPVbRsGuBuqk1ENZb5ipMXsvz82VB82dbJtCT7n2m7z6S19b",
  "key23": "uTRUaFNxeJ4o1jhGvtSArNHUkCfMHnkrLPAdaXwFKHyToEqnB35hC3qnbvMwfkHrdmfg8tyHdFdUtoot3jbLnWZ",
  "key24": "2e97aPuwmCniUNhniGua2NMtJtuPmPAKSBKEYCx4SSJvTMstCQpZqWqemDXPbCdzW7wkM9ewBcPU6rNwpLzgFMzm",
  "key25": "2Wqspt2UBP3fBrJhN4dpjozdj84k8VLfdhJTwjiULjR8VPMpNMm3k1ejaAw9j1jzKYRQ3dZiBzDok9YFuoVVjmLM",
  "key26": "t4TEKEKc2JRbFrBdmxb5s8qeMT7uUU6YDfTqaUq2xiNKqmfaRMTE4NjRE3HGxGz5x4Seas9f8skyc1BzCW8uqmy",
  "key27": "Gyz8DemqGzTakAqzfqaNdheNeQDwXaqSqZaozQNKxsQSgsHpaszHAase8AcfkqpkGY6ZM7qDbqXZFFnZw3CiQvU",
  "key28": "5AWLiLfH3heYWNiTiHyUcA8EiFCreRK5Xrc9puRKgqrLNag6CVodax4NrfeV9KveWPfhda3XQxpk66cGXpNGjmoK",
  "key29": "39JvgyMJLtijgCnvRCh7nmqte9BPrs4GhTgqCQ92vt98ihRM3Ee3TcUaUAgDukxdjapK4sqinWhGiiDG9De1HRCH",
  "key30": "5vX3MQALxQXJZpgrNCuu3K1yGjiJ3tDPhHgqReMshpGEfa9KrEctbUecVgRsDMdyBezQKjkTQMzwtkzy4VquMyVK",
  "key31": "4zk7oRGhSHCuzinn8jRRUBQV33VXDBVfoL7rVCPE2tSC5t4eoXSZswCPpPuJ94nSoeFg7uuhNtj8mUL3v7YJBq6j",
  "key32": "4cJnUeNjo4xKePZ6kisvqytdqWsr62n7n2UdVbPeJYGGbNrkN3e2phQrcYQtG8iC8xuHha6BCTcd4MggxfjhGjng",
  "key33": "66U8NXTXZDPVvhPjPvMZo4iYWdfLLa9mznzbD2q8R2pMn3aKjwwwSUpnUK19ntCmAsNfcejt9NT1pcimvkVVn1Qz",
  "key34": "YiPXGUwT58PhBGPDWEebWGqU9pfFUKzhkNL5Q2D31fb8RQrnoG65npGY8boePSBDbpZrUYt3oCp6niVr6fXtx9T"
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
