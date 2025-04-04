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
    "3UrunLKArzdPLcvAovN8X1wMUha8ibAUmcbzA1nVKokutA1qdHdSgZxYhUNMi3d8kWD4Fo7w3TqKPMgw4ZrYGzoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cn717je72oRJz1bezet8pAfxzrhw6HKUkgmznu4VpS8BeRJGqabXBbiJZrjchRij7Hym26xCNj948nWfukXbY3t",
  "key1": "63B5KAAWL8KoQUeun56uPBozhtZVMs7QD4gHUwQdvehaCugRJ2KPko9poUi5AZF5wfV1mdYh3rHrLG7c3ojWrdab",
  "key2": "4Cx5yEuYSmLDdY6GV6wFnEDEGm6baRwK2HNTgtzaYp4o9U9c2DRtih595m1opfTWPSN2LQVBUUc9uTdafMcYiJox",
  "key3": "r6pu7NqB1WdK4XuJyAuRyXoeXkm1fezE7FU5K4wsGnkMHGnejSSssXv8Zu5LJzS48z82uwNSYcJh9KRQrk2VURa",
  "key4": "3CAtnj8fBvLByaqAVQjmKgo2LVGT5xozWjBRA2zbu33dvEzw2FFz4Nb5wNFsDKxpVUx4XHdPuqKgpwcGMG1dE8vD",
  "key5": "5vz4sRJRP4vD9YLNMsEkmePWRTZ9Dz2CMH15jGuMdcoJrk12grjSk9eJXHzx7gC9csUgHhTiUX4S1GKgMLEENd7m",
  "key6": "5yhU7sK6L25d8h3g4BPAUwJzYLP5UwqzZBqB54DFG2ZH342RU5G5Uuskrej6oe8YmJW5U6ZedEQAHPsr89vELUCy",
  "key7": "3p7fEQM4QwYf4CtMaP6k2mvG4mdvjhUM579jr6NidQ7oXBhuUqND9rDvqvdygGPRPe3DsKHh5DgAJ4R5Mb6vTi7d",
  "key8": "4rLZHfjpqvb2BEzjPuaZY2JSroHK7CKt9G5o7sd7nt9VHQ27vx8pznUhYcV7yC6TouTpHXxLkr4yCRGCpssxRcxE",
  "key9": "37wVDaZCbUUewAGi6aYanYyxKzXrCgJE7HHTpGDAxFknZedt9ABrewPcm1Qu6PctNggTZV5wWReh8ub9ahn2cCkB",
  "key10": "2bKYdxeLSDdDqZukkfszSrU8ED9LeXTb3j13toRssJpE2y7SUmWjBWsVWph9US18DvipkgyJzp7qrpkpgukKpeJT",
  "key11": "4P4Hrera8RMPVSny469zGtCFHMuYAumfjystMQbGcg6sEYPxhf4nVXyjY6b4XwiaAFakKoxuWQ848XvrxrzJHwTB",
  "key12": "VZAFMhgjEFPxf1R3h3uSW98smm9TCiVakdCWdrUVQaN4WbpsCXFkbWrVxAZDEEV71pstXMrbN7XkmTx7xkhyF2V",
  "key13": "3cPgeU3NnSPByvdGachMRezrjmHmw5vk54XJT5X8T64BdfFFH9T9xZAgXLepm9DcZvCh6rSUiSoLUbKaRx44DEbV",
  "key14": "3XaCboPxn6ZmZ1hjxzUaSJTPLasUPHiS2jrQc7MEcUuvNL57MSAcmd1ixbxXJLv9pRR3fTwXiGQXDYtXFizM78vP",
  "key15": "eJXE7no6y3psEMUJ7EFZEy4Gsys71ty57aeB4tQ5f257Dc16kv9Nv3rCXsNLz3j9XGqhwSQRmhSgL4PRrrnch3C",
  "key16": "5gCw2bCuLWCykasiretYhmLTMA524qN964sED4wt35wCozDLB8fcjyb4vDEdcMLtfUGnXyfDcpuh7qcg4ouzfpY",
  "key17": "4NtHMPwHpAKDLh3sJAWp2Sgmq3F1d8uvSm4mzTGGYDXPrXgGr52FeL7mvBysf4rr5bTD9G9p1WWTo1n3CcGwES8L",
  "key18": "o7z9gb2w3VPCjJnDpx19RqT8HkPr5vsoqLHx8Vk59YHH5aeqywBKzskihXECS7ShDSwp97MhKwx9nrYqFaJA3Sd",
  "key19": "av2ATvMpk47ULFNqM2uWjLa34o5TokdGKouHd8169A4DKPLkFDfR7MM9NNryV9LcYBd6rrqqpc6fRBz9zJLrNNq",
  "key20": "3wEqWhSQrYr5BY8AfpkzvUwLi1634hwBFKq2A69CGg7UHEdUJekkjKbjneG5Jw5c84oKw43xj2u6XtPFUj7hnsM5",
  "key21": "4LkdGru2FhTQFA4y1527kWnW5t6CfEtuGfcaRd2q4bWmF2EaVdUKtvfNQL6Xuitzz8nZKssevZrzZTHcGLBe71Zd",
  "key22": "4tuHQ8LBFFDnmnVzoWKQfYEaCvjjL9wZwBEiiQtd9VzQZXn8ntttRXL6SBe6R2GiS3ZnA8oDY1j5PzSPfNifmXMb",
  "key23": "2wUBwRaYXXnBdfXyi3PGHM5wAKdy1VmiXEfoh53LKTvR9MEb9jtpY8ew9pLByxnqEfoZqinVVQX8Z3v3st74f4Qu",
  "key24": "3yQuwQjKCBo5KBAfetAt7dPs9xwcJPMTVs7Qsz4AzgRsNYALLkKfG7Zt6tGY5PjHesRasQALzwuaTayJDQdVx9Am",
  "key25": "35Nxm4Ecfmb4HRCbvr4oNxdwkro8vwaWZqpVnjt9zPNnaHVc9Y9bLueTEgnNrYm3eAhuJFvXosvtLTNhp9X4UQTw",
  "key26": "37zSZYHE7pJSveuJsBjGozgqNgVKGzgRS4zdfjQE3nN8zqZLpv5M72BbYRPQwdQ9cCD9WEtVVwGVSQ2UACp7A8Af",
  "key27": "3TupiGVRwUhf7vAermXfNheP3iHhP4NoWx2mu4EyzkPzKiLLb7A87TDvMY1vagx2weAzHmjP7bt794AWzfAZMUA2",
  "key28": "4U1kDPy1ZWgj3aWJfn3ynebY2d6DnXCz5eP5wFYUdKaZLCEmKeDmXFwifminuPe6Es1yQtZJyxxmFsDDZ3Fp3yzC",
  "key29": "DQHzPJrE7FgmV5RVhSWecqjeeyiZvfE547a4S1yVLQajG8FD9ybeRTE4a5tzBMeAxB7Sh49UxDGM5bJqryKPuNq",
  "key30": "dzv6ws5FG9s1mKa6nQT4vz1484bheghCy47MPKQLKyYSEeFgF5WPAW6rAipAzjQjTYFxfcM5zcutUC7MWtBnVXK",
  "key31": "4Wpajgz3SwyZ5jKqw1NdN3R4LWQcGFF6zYEbTqjCduFiGnKtzwzvSk8e8ezhzsYjepUpZwZsf3cynZTEhBtJPCF2",
  "key32": "4wntEBBmwnCjGxMtq39hxpM5cwtLqsaSA8bucZWRqGDjKu3d91dUpUuv3KAhKpL3RV2UNszriJ8UTUZT2R4NWBNq",
  "key33": "3rjyYsTBm1VnPHomG15ebABoR67mpZ7RP58gybuU5AE2FfkuZkJtZf2xjWVuPMNTW2oPHvN3QZnbcjDxHVJaB7S6",
  "key34": "36yTiwVqibCa5gdaLiWkFjkkXzqqZMPNxF78Lph9QQ5JDumuSAooXC32C9wtBESAATT2JTkv8z2YpAvNgcLh7t51",
  "key35": "2ihMQiWSHPiFiE6zhKbLePWHsKJyjxspt5fwbZVj5WEpFWiFs64CG1BUxCkReZ5bFkkPbdNbN3EUv765qAgzaTk",
  "key36": "58GZnTTgpD4VhgwHGnqjdk8SG4nr3wW8wC7F7BqkJiPsgCBGzJcY25nk93K1y1cKBwWKxYLs2oipW1P91dZC4dox",
  "key37": "4MqHdPKaRn28wXt4qB9eeZDyNgATbXLH6AktRpv9Fug2bsCnRcDkEZTBH9ngZ5owPerJAup6Pw7rspkCx5vhMJNG",
  "key38": "4w4mMdunzCif429j5xnM6ptUM1E3xputtaJAJUYxKu4BLMYa2fEQVh7fK9g4um6WLsxVfSgGhcBLVwzn4YhojgUp",
  "key39": "5QMCLMjLE11jo6evziNpzMMFiLRunmqz2sg2ThNvbAD1VqUG1BYDJQGkTATxK4esegUJse9Ax4doq5sn9fRzUPFg"
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
