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
    "4zTnDY6friqWzWU8BBhH2FkybDrBXwZiKcK85QHjiAYNg3fa59LDSvwXGf25WuaPQCSM4Aces5H1cJPWZjNVLBy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AeJofdmrMrvLPBg4Ytc4bE59ob5f5zfGkKeWzSFKVBSN1VyaWneTsXHKRZGEoeFqjNMdGJZkhtew4MH7spYub1J",
  "key1": "avbxVYw8WCFRaWpSHHUCda2izEZwGmw1RF3GZFEHkM9DfJd6nxCkyNY4sEyQmWApUccWx5PagTxUVNF46Bwknke",
  "key2": "4z4CSqs9zKtHztTtARtEHzePPQ4XUvqoP5tdmpChEdZjtHBGYznSPcRHgYpJcXbACddz9pVB5NYcpXdfES8Pfm4y",
  "key3": "53qMCeYaBMu7zkuQKpV1ovwcUYcg7cSRZdDTgtKHtrLkdd54PPaR6iuZaSeiycCVPimKFJ7TpM7rhfLPG8kGD2p",
  "key4": "4ETKQwATHvZtMpCyNhuvDtjyzGyD1Vt3KEcanei4cjekJRHDRoEDoNBA1sj62KDbjc98P377yN36hQ3WmBApkFsN",
  "key5": "4vsyhvB2EPeo4J8iJHEVPs41kUgYP1KhjsFcARLNMoWqLoNWSd47QwEhB32UHmpt6fVnD8HsPXwnQxxNXKwMVmu4",
  "key6": "6VP757hLkXJjXCSFqx6NubvBfMwg7LzanEj89qxGQDayrqp9RdXndviYzAcHaauhPtaa599aopWn6oPRfKTBaxJ",
  "key7": "2GTLA8eAU7pRRG5ruBSqhfayQVCzLkzssLNQqApPXmUNpn4AC56Pfq4Ha3NC1W9M6UeXg53YiGNsZbJeZp9iSwnb",
  "key8": "3AjpNxyJBTZnfS5MQekue237AXXHkdY3D1Kr77XmHBqQKnGB7rrms7nXEhpkgBqzyqnK9quyFoYg5wsDKudCWG3p",
  "key9": "2QYpuX1JJr1SwdrRU46kPWmteuFpNJ36QHWr8NH5Qj7oD8tu4UXfoHiTMAjAKeLabHYzfAEy8LvMGKjMWr5TTCPW",
  "key10": "3qHDqN91bQcvop1QxC5weGPM1Ws4UMhvVaa5dR2qKuutHomB4XQDbxLsn3hp76X8SRrHpiXjPfzNuN1TynVzFd1D",
  "key11": "rqGGqJXTz6TGBxgeaQbWXGqkuznz2SjBAxzBoS7T4g1BBtGzmFADWDw5jnnhpXLcntXQNw3CFzZeLHCGHZDxa3g",
  "key12": "4q842a25rwtzxrdFs2Jfd8HkQDMn3t6Y9xip4BBZ2uebS8VS7EfvutnYqSPqNQBcFncf8q23oA43HJ2jJeM49Y3Y",
  "key13": "3veD7FFDDNdM5CTw2aHHwBR7v5M1fRTRFBY3ropWmZqZQQxfyn6AzLGnGHAfZz4L9LWF8jXT4dmtcVLL9FhHaAj8",
  "key14": "4BHPtMBxHj99CNtYkKETVsJDev3ah3b5tAZfEiVfhxD15mzxpJYZzQAtUNABoxKDZBuEmtHvSUHRQeubaEzWB4FU",
  "key15": "Rkym3hS47N1mXooEK2xWFdtHLTu7HPhqhpFM5j7KvohnRU9f93wRTgWx9Qqo1hE6A1Ep9XNWrVb6xrNr2N1NrZw",
  "key16": "faHAyPxTedLk9eZfnSzmihuWNoivkWr65noiqZzviJBagaV3wTq5aU66Z8R3vZQpGQsK4WxezrPNngMwBWjPgBE",
  "key17": "DQY1nkWCTqnQS5Co3pbPpgfkx4aSL2kDg97QFN4JTY4aZtkFa3H8K4BGwNJ7XMfnw4vArAekkn1xJniwahCXTbe",
  "key18": "2jhP78dUCcrg7QPw6WEjRYsH75y9zBj7mSWzLna3qh3p91v9CGRUjddhkCMweivcy34vQQqJPqxMU6URW81MEid8",
  "key19": "2Fr3FBKRCno7kBu4UKjRjattsXW8YHNzzXDp3fVccJK757XYBRaNAD7C7ATvXZWSrMmxtLskzmYdtqiysKAeErHH",
  "key20": "4Fd9gmBFPC6aVKFvTexe2Zp3Ld76pR9rR8HL9PyMPTj9mFpUxipa6L6C4kNXDiqc2Lmw3UzpNFEnwktspomYS72k",
  "key21": "5u9LdiAhZCZWsFdtjfokV7gcQYCgz2CtDSSYgBiAo4B8bc9R5TnJExCNvLCwvyGKgJXhwnbqFnC3XEtCBihRhY3Y",
  "key22": "4o7ScyEjB2pwnGdnWYJnsfHRJ1u6zYZf56ncq8QS5HrCyF51pceXimQhLr6hdgF639YUT4tQaojek8E36qB1ngA5",
  "key23": "4M6J6dhnKXEkXR8dfomgq2783p8ZSPqwfQwUg2kyCM99qD4epXQjKPCTGeP4fZ4Tkz76necJXdBoMYbV8spFRoMq",
  "key24": "3QNuPxEBkbKdNNYVVum8GL6wUJwoaMiHs8Zcd5Nhm5FbiSQfdDZu8K4AiLfjsPpEMmaD5vg2BNBzGwnTS9KyawS3",
  "key25": "54yQR92Go7VEABg2h2pSvHXY7Z45EXxmzcXnBXZ4G6vCCC1rr4HGApxtsgGgVpC1xRXSWUBcFJ5kBJJpcJSYsr9f",
  "key26": "sA2nQYPNNktW1nVyRX43HbBDciVCgHXJ9b34DaKoKcxLbRKNzPZesBPjThCZtRsW4teTvF2BgToCs4KfjpvgX2W",
  "key27": "2coLqGXf1Uo8jKVFbq4iRdqDsmQLrgP3kAgp8j3HT6AjFrxKdMQYnQu2CuKbDCFsjezK6jjewBjSVUHZcJs4Sqqa",
  "key28": "4qep7WLwT1aJ96r7Z7RJjGwSW3ERCjBgVwQmiEyCcUoRWwWitttMEgZ1eFmqo5i9UU8eJMtFBLU8vXG1DEz9nQPN",
  "key29": "2GSgVnUtMiJa43iD8fvbTZ5NPHDxd55UGotTtWMzQ7SikGGFkyNYEcNFKaGFAviHX6ZFi5eAm64mmL4doZU1kdbw",
  "key30": "u5cpjLbQ4qLnD4DzRwcRKJGR3BaKEtJxbhXcP8K1v1Vh3rzbX2rmn6gmafZU4UrmiUTiLnvJCpBxwUUQTZ5aThH",
  "key31": "5SPEg3aZhDvNyAfDaQDZac36b5zUtTikkhtrTZxvoxKitLyeu6jGviTkWEY9MKeyFvdrW4qC9487PGLzsyUQRwG5",
  "key32": "5nPmyuF4iJjDxghZJBoy9jNvm8jMAtXUK7qy55FdtitZ3Ve4XQTBQ35BBK26TfMdtb9EWzT4nAuhUHW9gaC5n55K",
  "key33": "Rb5mUFctNHv3bK1BEgZQAHKhdVrDYAAUkFjBwvkSW8F3pfnX1HhqGh1bz26VJaaRAN9LjVzNBcPrAcqYKPMPdQd",
  "key34": "FvgvZ9VAbGZmXiPkJjSADAL3h4mZF7LBSRm9D7WLKYkhBw5LRa4GZQbubHpDY1uGEoCNaY77NrbVFNNK5bY9MqN",
  "key35": "3aJYZXcXxNLPk6zBGPyREHxDrVcDM34S6JVM9RrLyBrQ5v3ADFt1ds73wtg6uNf2K31675fJSYBuoHnSs2F56Yuh",
  "key36": "e1xRXu7rzmxmkTd7a5o8bc1mZ4gmvsbgUz5NyreweYbhYa6XeipLZkqxRVkxmL3XpKUU3vmiyY3ibgBENqtK7d1",
  "key37": "ZpcR2wui83A3EJriRY52LkoHg8BPfpcPWYWb3cpSMvTAuZDj4J9z8JNu82j6VgzmU1xcWFMH1CrPoi1tHJeVLKj",
  "key38": "7A5Fz4in4PCRLQMtjpJXdmN4qLe5JPJrKSfoYFEVRT7LQ336n5uQRS5UDkL8LwUYxhKGrpfrmjhXaHKEcingmC1",
  "key39": "5cQ6y31wbH2rQX9fvcXUZpWbgkwTrSRfZRYT2Zud3n3L4Ts4iQ8r61Rm8ByCzWTnVrQLs4J5L98mTEefU99bRkX1",
  "key40": "2xbYu8ZxSdkYVkmFvqtCSyu9DAn7zvamkvtKyGMCSx38E1FEbQQJ8rR1hNUfxkXP5Yt76EP2zENXfxMES7td7sH3",
  "key41": "t1wGxRqhhMn1nV69vzowdVVhT1P3Lb23R15d46yYvymjPbLctpogFWJpmMzotAywwSUDKnDmr3wnHJCUtANEGUE",
  "key42": "4XKFbvFSuzHNrkaDY9BiKAxXym7VEa6bHZFFk1XeNDdXWjxZGmySyCE7iM3eJLRzKYUbtDDQWkUnmtG5tDLFPE1M",
  "key43": "5VvcBvMXfL7RMSv1hYUKzvCKM9dAdS7FDPaxX7dM8UFhG9rc5VJnHnHg8WsAe5q4bgR5ykn8ZqEC57XneDTDeQa8",
  "key44": "4FEY9LNiWn8CfWeG6A78wiUF2snBJ5cobtYPo1WeQeeuysgumYVvDf12tTMueonjaqfC1Cd8yk5jrAac5AwhNRYL"
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
