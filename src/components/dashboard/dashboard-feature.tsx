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
    "2jcUuLnnzg4kDFLpSuW8ewH8xjozaFATMCv6RgE3Ng4Ro45nvjjGxTMsNb1QjsHmL22fE7mL7JZiDMN5etyiLbeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JhTFxWCgJKwt2wwBfwtVPzzTSucUiJ6dgT24MZ3z5Uvrq91HAjWF1PFUzsJRoxEznGJCyPAiexBKZH3u6MtcDAr",
  "key1": "3Akr3EKGXy7PL4HSKnv7ZM1XWQN6Gjysfd3fBaY3hqMhFbesPH8vq8ryjJVgPb37Tj428q7TBgEt335tTkE7io5s",
  "key2": "3q7pYMjotGGTq1khydCNu5m3sN1NKVDym6yMEF3PdP4YEwsnJ1i3zagWrs5zcacSAZmCX5AxRNt9nuDJjwqPnyTz",
  "key3": "4uc2dxRZSjjXgme5mQaV9HGCmBcXkrA6sGCWzeT8GDWSwkdQfXEd2ipRMj451zUa26MRRxiXeKNQb4nNB9pkR6vu",
  "key4": "3drSYB2QLDa9ziG91hvwC7ATZFotdV7cF2zJoAkMPzPCvogQj9YWU1JgCxuAPD3qHLrsG7jTT4qFdnWYzhhZvhPF",
  "key5": "2RbcPAnEHXD2zq6yzAh9ETHr8LUnzEQC4hmdNon8VFGb21BzM7aHuQYr9FgG8g5aBwxmEd8qxQEWdfqvRagJGEGV",
  "key6": "2BPzuYvB57jrqzYGV3N1qjiG48v8yvmeP2N2ND1djPynCMsHphjo9BbMokfFafhbKhtW2upN6Zi8QWLY78F2uudv",
  "key7": "2N4LUd5cVrpw8cu9b2tPciWzqXDqZ6BsaLdDd2A7nXMCsYpttsXSXz2D1FnUNTHcKBXz1TttrHMEQN6EHA339wRi",
  "key8": "382p91ZrBfrQt47DxtAmfy1npEJSweRuvdqVxuWBiFYPfTuimSvT29eNTmVzGGtpKoeXk9SjbvPsQZ3ScdCHraL2",
  "key9": "2oA9Buf186TgT3t6x6cUUeHxDKSA1isfXfZDjppaVYhiR66roH1PXJuGG1snRN8EgHHHCkUAwY7TVD12nwFQFLXP",
  "key10": "2pVgw5GmZ4sddXzVDCnkTboL2uPqqwgGJ2eqUR38tzEYuUwaN1iqmYwXjzA1oiEtW9PeNs2SNnvTRRqWXBWLiM1P",
  "key11": "3PwHcHA9KsdcRhAzi9MNUCtrjjAUtKD1w7z8FCq3WwFZsnkNR9jfLFk1rXHZba4JxXHPQdo8eP4torfq9hwmxus9",
  "key12": "p8gQn1fqZ726rc4kitasoYYKv5NSZWQ3ZjwWdmzToH8zAfSbL3BFLr7KsxB3Zx3XzGVdKZnb9tU54cYEDtnYRgT",
  "key13": "3eYJCCSUnFPxMNPNVzCJdk91iwQSafJFiwvmXLHuqYeGopTGn8p5WhAdaM7yMWCGyTxqDKZa7kysfFMy6DmoNYf8",
  "key14": "4RrdtJm53WuWQUAYQeKJwZsC4kAQzBT2vH4rt4LxsMD2EpDbbc7hFfirGqvsPu3tSeEzZL9VjsCKcL2QgjZZUyZo",
  "key15": "35MQCUdXC1HvW9xPastndJsXH5LMDXgLQLctwD4EUKKVyqa8RLcumzaNaTGL3XuEf1r7wsHTJJgL9BTmSC8uEUaW",
  "key16": "5c9BVt5cUx589t2DVRU5wkLzJQi3dHQr5Au3ncUb1ZvmNHvy3jWtifDYp5o73swkRXsyZH12trtNKhmrkU1wUsSF",
  "key17": "2miBJbCgZzVcrbBbGnY1nhBjJEJexpE29YUeF3A7mjzGnzxukf6jv5UTrPKhogLex6dGeTMWVWpmZLVGB1extcR7",
  "key18": "3g8Vu2rgcBRJXcumZcKgzWT9mFSptwAyAZFMNcBgnNcqE6RgsEXtXrEs7AxkCRGttvc2xyTZg2HAcjvtQr7XEvR3",
  "key19": "QneeXqrgF5vFPy7oqGU296VDJ4oiH5hAGVjHEeWXZX9d3yUsW4wT7wZ1niBj3pf4okii8zraSNXcsocCDuNsiEo",
  "key20": "38rbkwoocT3f8uKeAHGot4TYHX2J9SPudQYKuNBonFgicCwEb9sqv5d8mrmMhSrrFVj8GCdQ7xw2emKcUDGe5fQb",
  "key21": "624qUgJVTAUUtAgeS2z37BUgvUT56xrt6VHRh5qxfQv3gxYT1SL2t5LFCgn4AVxrgBa5zWvsjhEFPvSzR3qSbVFP",
  "key22": "cRR63AMn1AM81g3MCEuoVhgsVDBvWKSLxjTajb4m8nZsAPbxpTDRVQbr29os2bWYBkpX7QDYkiADembWM3FHmVA",
  "key23": "4KA4KnfWao712ziULV3ooV563buTTdFXkPBTuDtsp9H9wLqi8fKVDB2DC9cSMJVhNwyY5sMFin6C3ix9vT9AGJxK",
  "key24": "337V8TwftyA3NWhpAnRmQTomdnmG3Ges6CrNXwkRnKLHttQS7UuyuT9FTSK7ghtfL6QNPDpvuVPZv4d7wvWdLEaL",
  "key25": "26FPJMGko7t4HFVWUn5Rf47C3ZFF8ebm1inciYEJ5ZJT9L7aCA79B7PCFwYLEWw2EEvPyQwf7Aypei2qn1bFqiAZ",
  "key26": "36LbAfZQ11G5742TKLxo3cgUvHf2J3c1RXHfCX7YmK3fU1NWRX1Du63b2CF8h16cbXu7AhuzBWx87oXS7giNww91",
  "key27": "3DhBRaepQdiDhfjvXLimit6YCvyucLH9RaPN1ptZc2YjGU7GLFn1w9oLCinydpQvMoUxTwWQHUT9jVGBpdo2umVS",
  "key28": "2c59qZkvcH9wtUjeZ65oEoGGQQZ4beX2GAHaALhw2zQaZ6U8q79ctkmy5F3if4tQbZUip5Fi8QUSrjWBUMsSFBmk",
  "key29": "Htbi335Xp1m3BPgXszMPYY8uYPw4EmwUTkdTgXoQhiJK2ukkAwdf3g5H98tKwLEC13jrLiA1N1v8eUMgr3MuCkv",
  "key30": "4PSxGL5hhsrnsPEmhLyambpt8eVxomp6HUBi4iFL18yF25knyY3qehdLrgH2Fbxp14qQmbyu9Frqk1oGSg4tddhC",
  "key31": "2S9pbjdzBXS7mB8xV2FAiHeZVtBmVQE7VVbVxboKzBe88vaG9J61kcSkZakE3GJq6cyxj1S4jVY9rHUc2czxALhx",
  "key32": "4ewsF3v6e11p4cVDoXo1FjxTjtwNj2fv4taTCNxz4EAfQie2a2J6vZ2N6cfNoXGiatt6w9GbsU1KuuZ7csLkgDXe",
  "key33": "5JWZs9XrJAXeYDuH3GrWZj8XcEVVM4w2oRquXv7qywxu1ySPh6y8G4deXavjB2VxKZwWvCvz66DQMYpBv62kjDbJ",
  "key34": "2WgrbVbQDPzfgYS5DDosKP6a55V7XWghrgZrqbfJJDKeThFUJQ3bd2Egf8N9aiwdE3pbjahD4R78PpodHFPFFaxT",
  "key35": "2B1KKnfBf9GfdJQTM5viiov3YJkXPoyvhLkmniHZ3WQ1ukHFSfaFZcfTW5dGUkivHaKmUErRSDtHT13YVSjEkqgH",
  "key36": "5o1qpZCQ535BDwPFCofB5FasHqzp4ne641Z2boouohWcLV8wNNGLGgpokCDpWr8jJ1ocydbH84DMs38GzbRzkWBQ",
  "key37": "43y1QJWasCH5w6NJmTzEV7mt3ny9fYv8cX3Ft15TVLsZ58CdMhHBkk1a5kZBibJEuu1jJLwWpaWW3Au9ZN14wvRv",
  "key38": "gEwzgvC7LGjHDnhcpk7kJBDbXN3YWRfEHsjxtEoYJHm95LANRyMg4MiXPML4hsWxoq9atk8ihAy6uGddq26rr17",
  "key39": "7kMEyLqMaxKsQuHEzWaSdhXTm5v7ViFkib2hPgwMiNKBbFQDD3EVq8RAb7s6VmYHmYxQPa7RdDQAk4gNA88DM86"
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
