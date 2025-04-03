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
    "1fAko4BHdXcdznV3FBRfeMReq7jkEHA1pMJZsNfjabh3tfQDnmFuuDjkw2CYWj7M8LjZgNewE9zornyHJhgac1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pkBNPgTXiJK4iz1GSRvDtx2AxDfrfrqhkXQaG463VAzwUjrUH5NExWk3Hbm2LFZJsHTavZ9XHm2LRtrAiqk9ofB",
  "key1": "5J8KNWKW3QtKFPHuoYqY6k7HcSGDExgSksQ8nxXsh6LVzrbuJqaiHH7TQyd92x8XmUPXj1n29iZgvJ9TtdCowrXb",
  "key2": "rYqeEnx3jnjErMSaw8JhxTmk8u4kFNR8YQdczMjRqaadJrqUTTUiZKJf5qZtHGoht4jL6oWYnV349WByay1WjzD",
  "key3": "2JquiXZuA53HnrwPHrJ2aRg1NxaNxir6xBf42XbHkXjU1vCjBkoPqYCmAYVGkYJDhUK2MFxU2HGEfLQLqUYFNGRJ",
  "key4": "2vMUh8t9mQiD7jPCTfsSKtbgTNZgTfv2NkoYiwuztgtBvcs8mS3FdE8TGAHYjxc2D91L29BKx2Lynsk7WXXQduT9",
  "key5": "2EqZYDQy5cZP899VQiTdbocQAxqvNHKw1qyPqEunu2uE1ghvPnvs21VhN4qaKWcMW5aeRSqMP59Dr2jBTZDwYHfN",
  "key6": "36b2JsDsm8sys3fiA541H1rw3hDjhi8S6w3BQCuB5saqgoyqQ9s1sCHgZ54YddoowPKxPhMJ38Bb5XhxLov6v7tV",
  "key7": "2tCz327AfLWDhD65W5LiVZNK8StY3fnDfo1g3Ay1fw4vVxRHbuNJMRsfYgFvqZmQJUz9fYSKNNFjHcghQKMFfvcX",
  "key8": "2c5hPYQiGVVHLBNSX1LZuVyfwKA7RLqQ3bNobgn5gMsi1UH58o9oTzcCiBXQsKo7VcV6DMQArzSVKcdz27oPFQVN",
  "key9": "46bqgz8QqSrqeXRkEdzE6cwqv9MpY9HekG4wAtrEqB1weR7b4gHjhSiejE2qhGcpKeqLGhC97VPcE4pKPe4R8HMC",
  "key10": "2s6E68SbQtiCbmFYq8fzNVgtCXZoRz1fKdz7XWe4DE2MMxaYoDeChc4rXm1SV4fMwTtJi4nWkq1BL31JsLwpq4k9",
  "key11": "3WYx5z9GHk8bdVaxU6EcAG8bmBeUCmyCvyqQwxjDFT1dYbGNUebeukm3Q8wcQVUu9kpHSnLrqVJzXe5PDMGYB2fd",
  "key12": "3pqAdMF3v15R28tsbVXtsoy5GzckEJVevz8Pi6JGURZR8bK6XZbBEwwSXgCwV88czTkTPpRPc2uveJyRyRSVtXmm",
  "key13": "4FREJ7CxuCryv6G193qkiCyWMuKBi5Qo3k4evHbBG9d3X93gi9KB4avdULpn1731WhbbZZr8z22Wk6qvU8bWAM3f",
  "key14": "4D7d5NXWtgCFGzeEYcoVNTbRGHAce574AgfTDm8W6tdLMXVPebruqa6pF2tFNxwzg6mYmwH6dgNrTUQKvS3iTmKp",
  "key15": "3M8rYJAG3gpGCu2vgBSH61bnZ9eKn1DSqdNvySkBPsnqqcuzvtzhPWvq6VR73EnB1NBFf5MsLYgbE4fKLrQSN2aj",
  "key16": "35ZP8JiChm5VJsDM3x1NAjV4gscAW4xsYrYyaYh4XvqYtjQN624wamkZpDeNACSwaxMEQaYm1SaD54Z4oGfk678w",
  "key17": "3qBNPdyLGXqucVDLmfbScj5QeAw81PcBoSbvqaPNdoqdEbTP22vaMY4XmAbKkfFne1RfiYb2hMVkMcPziKSha1Uq",
  "key18": "3d3r9uu355Jt2LxoxqWo11fPVHYP2q99LoFVHNtfgiLrBDBzVSQ2fMTaHvJZ7a2eGenQPx7ztgNGKy3eFPrqgfZH",
  "key19": "4ooG58ZbXv1LH5HsCTffPEJK1vVravqXjAfai1aT6QrwdUrMWnWt71sXb9UnKBPYj1chqV2YbXws1bBiLUoZcQyy",
  "key20": "22uAVCahjQkbHXwaKpH2KGr1xQdynFnL8A2YJbFAXdvZBXWuPutb1cR8BhUjgix5fX7Vui2LG214Nnet5GKpx7UZ",
  "key21": "4CZpTBPoNU2Qk5RqVNWEhWxCwTsxqUnD2tBEgA9WPTMruogAyFSY6CJAHsq46KG7bpqCxYPnQWYsjAeAVCyz31g5",
  "key22": "517SkEKQTveSisiVNEPV8sRLYCtL76MaUXrTRTzgTe2N6H6g9JRhR12aPGj5meGRcxWNm9gNpM8G4a7c8T3mJ3KB",
  "key23": "4eAcFS824PZLLoorKdNPLjXDMRsQa1xfNFmGcrb2LUaK4phcrZeh6oESEPJZSUaYkP8898NCkgYrAeDk8rtDqCCd",
  "key24": "3KeAXCzpVCoLVFFJ6sPWKNrnjcfS4ZY1ntUgVYyPJ2nRfBiMUwtax1eXPhhUXfP5DezB791wjhvqE19HDi7kGcVk",
  "key25": "5nAWGpdGmgAPhyavNPaiH6Xx2GcqEUDhZv16dSY17MaCcj6NQYjG6wQVzT46FzZxmYtovHXH2xxR1HeGZs8ND6Lg",
  "key26": "5ZWwZpm16Cu899AybG1nEsPnGtuWxvrfxrSZBEPtsgKgG8CHRUGQ9g1XXq215SznEyXZadCkRsQkpNJdprQQtRsA",
  "key27": "3Paa1bH6TEHF9E3arnmXxCZXWGzvLFetcXsGRKZjguS89Ricb5g3UATtR51zoeCiUMjJnSLzkpHtTct7Q5PYXFH3",
  "key28": "3v5gPa9qrEKfBgkrNgWTuhZbjvyiAgTJyD23E2dfXmUdta7uK97kpcGdwqPt6BpoMGVbbGwMiS5ifYxJJYAmznWV",
  "key29": "3DCRBV6wNbgMzJxzeEsTdzV7gJehm2oHwZN6Aw1SzaXgJ6N82ruktpNMtp7ReQwaiZmS14r4veGbBjHD2BmX4gWD",
  "key30": "28Cw1tpQJTAsqBu9JdWPE5B8c2EiWGLBvuuHnkW4XS466hASZ9ty88Cn3nxsYPBUpufQQwsspSjyAJyHYRQzRaEy",
  "key31": "FGFdhmBgpavBgXo2Xja7BYhe2TZwvzi9Gwstv8d6BKedCParuXDcYkuD9t64f1ouMEmuMyZb7bCzdiPxwv7hDkM",
  "key32": "31fUFgtEgmfb24bVeB7Qdmui4dHywPzN7VAx4HW7dS2Fz1qTDUaRiNZFDe5hqp9to6eVCmrZY79x3xMUAeHuJVsd",
  "key33": "5GFbpoNzYyEUPScVj39tv3dA7h4Y4EwHWt85bxA66XSvLHgcUQdvLsG1Pmu8UXkWinfJLq6bfi6NXBJa9yNm75zk",
  "key34": "4offTTz6JUUQYF7iW9tg6tVXQSYMQVBs7rtxkQWi73Bf9fLb6mETUvoUpHCSQmwE83Tx3rtXJtXwwmMYpBro7chT"
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
