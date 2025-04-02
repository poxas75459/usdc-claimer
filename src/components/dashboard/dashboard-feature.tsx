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
    "4HXsx1r2r2C6jR5SimjP9e3vrDf4sbJLhUJncqWHeuqWADgewpvxkFon4LcaLMkunCqVcnnHZWGQKxkGYFoDPZJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eL7sqRMTrx3EBY62f7f9SrZQgL13NFForQvsJ2DBDDeSXwDWuVm1Tn3uio7BAzL8je28Vx95HC3KxNEqaSbMwZG",
  "key1": "jjJsoudAjrY8CHSxnn8QwUNVrx7vfuGRNMkQqtttNyd8Xj88iNa46PTHmt4JEzbuY6nCq3gtHMDXyQucxfyqK3M",
  "key2": "3qtFaUyb9NCdNaZc1t1bATau332ctiDUAVkA5dQkzrotai1Zd36y6CfJpNifXczbG5NvbxucTGRjZNzsWF23NvrD",
  "key3": "LvU5DiSwLPv8CGKFqp8cu1p4QiEAUTi7b9dSZmLVchfbCCwhzgS5PhtB7DT11gQW9Frvx15N8mvYw7CQJ1Vri6N",
  "key4": "56gM17WJZfGXS4egfnuigrUH4F2PoAXmS9qK2Y7FWWdStaVnWbFaSCV3W4osV9mWpVy2pAsrhMFYUubU1xgKptWK",
  "key5": "39vgTxRZ7FFdYkb4KnHRWmgc6gzU4riyT9HAxkT8LRWQEfATTUgfSS1BJ6yC2HCVvvDz5YrAmJSWido69pkisL6T",
  "key6": "3gJ1oGuTHE8M9rEwD8bV5vVWSZby3BuuNZR4ewBviVj41syysr41kjBkjGMie96KMFtHeETbZBHi55WqssdpNjSq",
  "key7": "3qAoCe1CQaf5KMEE95s2MsYnQgevNWpiKRTK1FprbfVruGQPYAuBqpFk7XamXDgCUK62dyv41ccDNa1ARW1KFn69",
  "key8": "urUckYLP8ihXehSWj3BVLdMpyLqKpT2XBYmMX8rEjP5NbtiKCRmtU7Nh8HffZwPNeLLTmv64s5mXUoMsWaUeb7a",
  "key9": "5UihFrhcGBLAi9xLPWeoUAC3xpACn1ooUadpfnn72QQDn7ut6FwpUFHVbZfLMFAEped5E548qRTaNhLwTuHdRCT9",
  "key10": "4wTHnXW6PDyPGC519rKazft5mbp5HhfLQLHKmYBqPve4TysJkuwW4VLM3obm9C1HEZiC6v5v5gMhJgkdyw8ioy1U",
  "key11": "LqvexYWKM22wZT6Y3UeaqFtK9wCzkkc5XtEeXyjPA5qpHUGmgfDHxDjPKFbH4F2TvJHhX7CFGzSQpRwomyigk4w",
  "key12": "5Uo9FUYDu1ra4SE5qucXjzer1g5tpH4xNwrz5g3JVqUDmqqFYhhtHvuXGPav2U32UPjXbSJTa5UtwEj561nePFbb",
  "key13": "YqActPh1NP6cacCwW7JRFbvm3bdwfXR88CBWb7XcopCLzWYHYCP81ALDiLfhpXcoF34fzmofSZyEiqdEbZBDoLi",
  "key14": "2veyfrYkRNTuCF6wBKMRKa5icB2KSDvxZFG5RfSKYjiKNcxJUic9LL3EjmjWnidoosrsSDbvNXSfbnmY1521S8Fz",
  "key15": "259ULM1S51jd1NtUYdrJrchc66vuJXcA9k41aLKcVBgZfEa2b2SHcPBBxvuX26WRhkceF3XZqzLyeNkQ4uKy4oDv",
  "key16": "FZafgadnR9MkfERpLBEXcMNp278cTeGh5Z9yv2FePT19adt9WagbrSRPA7fRehrpkg7SLnk4z3FUBW6abDgfNvW",
  "key17": "QcCno58nF7WD9sgFjo9gmQ11rTsDMWniWZ1T2mRR1fTu5UqEJQP7xnYe4u5QivMNvroUfbjGwVRo9hiruSCzEzR",
  "key18": "664JUmbmcvK76QkVYfwLtbki3QdeQuzzakdGGbegRGUVTNyTvDSSxNAdKhfw9yspZUj5n5wLfn1B3kuXFWawiRZh",
  "key19": "55mshNdk2LyBfhdVAEnQZ2nLHik9AgjSiv65pcayAkhuC27zV1AjoAxfkHUFnZJFzfXDuXkyk4SXdtqodM4EUHP7",
  "key20": "3ETTXu2JbFRDA33gScFqVKpbc64CUCJZ7pC4YBQidAqWLG3CNr6D9niJ26bh2m6u51pcuqUcCEYTyZDkhCvo3dbK",
  "key21": "N3U1X8L5awwQV89d3x2DjUjXMegPz19KCWdPexbQYy6iUhPwr9dyiK3PPjXWSJuwXcsq2AEnTV2kAFsqNK6KLDc",
  "key22": "392b2hqFcvLxqa61JrZ5FsRjU6pt8q3EJc4o1zMmh32NAohpjFmxJt7RZQjLhPMkU5n9HqUXfVNnSyQed4FLfLXt",
  "key23": "TnW9X8s28Su4CUnV16RKCLUs5m3y8fcZZc8yKCBWnCUJ3SKAkLRRyPiXTnKGwQoMki5gMM4RB7fcEL6HxA4iS1Q",
  "key24": "4bgSX5nDh91MfTuZQqtcW638Qz4rMcZ7qzMkKFPLqV2fJru4Xe1o2Z5TVHuV73JDq88xHq5AKqCQrY3eCLfekCUY",
  "key25": "4HRuAbpxehGx4R6FHoXLuaotUKEunzUmbRbhTixiQ9ionzX4wwFZf3nQRTABuGYHJetF8oJjdfo3aDfXx5z91uUw",
  "key26": "2mxRiokF8TmLVPqUqbJTm2WZyURCNdXWFB6r2Htj3UJBBiYJTAxfJdfz3Gno5vwcuvjjE33pppjAy393up7Wfb9P",
  "key27": "5U4SCvLJ3SD6K95NgdhtLKY3eFXBBpz5zSwBRoA9pNYA2GPaowdHztUx53Z78jNzPAhgY1EkwrBFxL7uank7GQTp",
  "key28": "5tcpcSU2F8G94mXQBBn8oCQRUaTWXW1QxJS6wWnrwAwzP8YoD2iWv9AM4pgTwr4RXK1rcMDbxz8P7Ha95x5iTn1Z",
  "key29": "3tdj15VjfRBNUdHueuAKWQmzanXihDhNfh8Q9jZ8m4XMiCzzVtyzS95JuGXeiospRjvxSkf8fFrqTmZc1tdQjdKi",
  "key30": "2h94u8nUoupND4XRKvyHi5MM7eVZHFanBgqLN5wGCNByVUXaFMtvAkuviwyMxXCJ1WBL9uZz8tGcCAVHS3KqXTcT",
  "key31": "2j4Mog6usGTyRpjj2kzMe59Tb5mVkJwimKsL4SGiTHB1ZbD74od4wNRVhHJ5nEF9VYFoCFzG1Yv4ukJzAB9g1vyZ",
  "key32": "2sUEQiHr1sb2SvE4biyMt2fMKobjEvMvVTSVRRvpkpR1VZDwqUiFc252ZerFJy5HasT1mCeY2QSMLfgcjQgN4Cg3",
  "key33": "4jzFh54wRsuLZWXjKvNSYctYkwPWZcW8XNikuGfzqo5tgDK8sJoNKWGmfGkp4Rnk3JL3JUb95LdLBbjd9PUDQJ5o",
  "key34": "5pRkYemKLLzcFmN7Ao9SrH8PzgBBMxCLgMxXPufEfzWRNUa4vsHhikycTa2TGLynLBy85wv3GGNG136zVFm5NzgS",
  "key35": "5FdFPyqEaz7u6r7iaZ99Abojh6mLTpHZW9eJ4wPTf1twAox7eyuJcAX7LnzFWKHgCrG4W2eWaH1GKTW6th1hx1bn",
  "key36": "sZg8coTggFAkEzSrCbTLTqq8DagksB1GFdkzzS51zxmtN56zqKZAA1FC4fyc1DzAsFAncxxE3g1xKv4W5sTvtBz",
  "key37": "4eSP5sBqyoBem39PvUcKs2j3v8VzCrrmWZSsigL7xtJSZT11JnCdNw5rpJcTi6BikqxCKMcZULFs9Ne1s4d3tHWf",
  "key38": "2NQx3hw39t2zQKVkP4b3RLCzcutszRjCZhFQgP99WK8HiJx5sedG1X5K4HPfbr85RYVQATgpRrCdhe2rRu4HHuYo",
  "key39": "5ZwjXEVR6U42hzfceyJmLYsqjUynXb7E1d3FDM3HWXrvB6JPTXhYDMm9RqVxn6Uekvc1GDpjT4rtbn6cncxcwWB9",
  "key40": "gQZi8CYGugVNqkzKt2vowp56tFHkQqFTYXJU87wqQc6FWAZKpuuocJDzDbwX412qQhQf9Mv4PtqR9QFFnXp2XPY",
  "key41": "2VPsFYKcUj2iUxuzni599zS3pmtEmWRKeZ69SbQ2GPz5w3xTFAebm1hESb879WKfSs4HhzWGo9pPgAgLQNMscA5Y",
  "key42": "53jb2Ma9tVTMX7yEsvzA4tNUvtudtYmVsMV5SzebMCQ9JAEqNzTGsjyNwt7ViRja2vksdpnNbXigyXrWP7B351TT",
  "key43": "2iqBkHo7827AGFpCY5aWSJB7GikvXd759AokuzsVGuVFhqVwxKUhqtXYVTXApvZf1abZyoR5HdCA1abjdL3hC3G7",
  "key44": "2BtBu6gVFoUwHgUGGJqQej7rri63hf5GZthrSpeeGpmPoCjTNjJZSWtaNttzkxjAA65JdeSxeurp2eSZZfqLEE5F",
  "key45": "3ns121VfGwKUYvfs8tEpBo72S7iY88773Ro1sMNHXZZb63WJXwAw9qMAmg8HeTdkhckkN6b5VsLrbZGJEM3Xp5Qz",
  "key46": "37mN3yWrAXgKkT6xcpqE5jkMqxfMjj343NTTzUAQFqge9x5oJ7tnS441Cuh8gzZ7kHsBa4FLcdm6k4q6k7roDn3w"
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
