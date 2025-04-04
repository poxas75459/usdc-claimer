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
    "nivkbFbdzVarpGEEu2DDDcDcnCNV7abKP8ttHjKchFz7tnbHaz8V5AA786DKPdTt8hEXYrryLWcouDw1tVrvGZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RwjunMDsr77rXFZRjm7djkBvayCzhMEkYi6Lw6YhoAYi8KCGAcPterWubGf6uZXzB197T1MotbD3p1zK6qfjaDD",
  "key1": "48Lu1a76xmUK9ECk6iSStXZBT7MZCk3TBGcPVFhd1KiPBpHtB4NmezvRUPymb6u25v61NKhPvGD2V5ZSiJSPNFFD",
  "key2": "ytvwdyJbaAwvNHPpxAUECPp8FaYvCk7MYYCFYxcRadSy2jdLXcCMripho8Lso1MC5DZ2LLNkToyTx9TFKy5kWiS",
  "key3": "2DUs6e8UxrT9Lbq5CWQHykAeA8gNu8cbd1WkxzQ65Er1SkbCcAKq1uyNebiub31ABYS8ucY9bXZMNKpyGYVYcWaM",
  "key4": "ZGdr9UZVbuJaM66w7GWjDuMoXBzU85LFY6eZf87NMGd6SPCVbuxi1xMsT2tb9xoLvT8MEvtURLiZRaq65g1GKMb",
  "key5": "4C4Jp2xyGiktTqxjwAyB32vSzZ9yR48z7jsYRFC6s6c1oZSpQ7wUrZ6ep4yKLKeZb8EQsrtUyNQmh5W8LLNQ5qXw",
  "key6": "318KuaJiihiGcu26H7RL56xxbZXhk7AiDh7ozE3xbSj66GmXLAL4gn61hXqR8tjrRxTRer9Z4aeqYhsSn6Y3u9wu",
  "key7": "4aAtPD2a1peqswv63uim6WamJBPL8ac1AkZhduvVuoGCPmFpXwfyoduX5G9zksK7o2a3eKSLECjkbT1KzT7HnAeL",
  "key8": "6638bEfLWkF8hoGrqwwBTyeSbmfj9X77ZzwftuVt3yMWGkL8iw3ZL9KJpy9H3Btpjtd9LeCHbGeU2pCXHmh1Zp9S",
  "key9": "to1RrxDMsr1MF58d6Kk91FM2N2kgsaEzcUVhXVw6acK9KAsB7pgoYuk8yhmvrDdhxH5CudPdj1Tr4JUaLs7baYX",
  "key10": "3jpt3izdda4mNAKfWkMbPxAS1DrJffRa1bFWZSbf74Jg3A6oxz7SakFsxhfabnN5nhw4tsBtA9Bfo1ErqDo8ZB1y",
  "key11": "2abybg8PAiA4qfhMmR6W8qRJF87fBqaa57oZxzY2o9366a2LA7SfFcjYcD6pwjdoYyXtWvYXtT3NMqvtfsfFZQ2L",
  "key12": "3oEXwFcQ9etww2JrKzAGwnbDy3atNeBLuU3GCPQSESdergSZ7fNb5iGtQT8iNSAXXHfyz8Sp9mek3gdohisQwLkF",
  "key13": "5kyFksGkidgyNTV1q4Wevv4CtF9vaXwqYzmRvhSsQJ9h9qbjhm3LxNeAGwE7oUBf1WftHw7aYaiXR5YkEvAAKhRz",
  "key14": "4VpPtJLc6aWDA9NisV12aPeYVqns8bCrCcBF5uLRy4fm2p6ouPS1njzLrkci781kNRvVLgc91SsVhMg7STmumYqH",
  "key15": "2gTqjHyudqApxZmAhWHpKWBvob79jbSdc6dcQ6VKpH1QB4cJKj4jhD3RrjTHNR6AWzXECWEYcvGTVLUa4mZqD2LJ",
  "key16": "14w2hTrjmrTGNk4151CJ3Lgykeyv3d7w2AcT6Af7DeBTA3SYTRpvAV71BdnMQJrvMwzjYzDLE1zCfzuXGqtcwhE",
  "key17": "Com4cBr4Qwmy6347id5Ctc9bFQedHV2MY3nJ7FmsdQk2ueJkUxvirrcGZans34sV7zAobcmEeWVtaNSQH9PRRof",
  "key18": "2FT2Xf1ueHDgJdj16mkoWw9cC6TZ8K9UoPzZ2y4RuNZTbbXUFcmY2aTCJ9nuAbz7GajyiQdEbRDaRbjQ1UogU1BS",
  "key19": "4R6yfeweXjhUX7YEMsaZnjQNoeg2PebBt9QDkzz3MZ3JVviNn1dAQ8y3fWbKa4mkT4NrV5wv2AvD58RTT3AjKxbQ",
  "key20": "3DG8MG51o6z5k7WEH4n5RFEdx26XcaUSJWCScJHK4oiQM7zubyVqGx4gMEE3Fz7ZvJpKfGzpynBb4LH6zeJc2Lev",
  "key21": "3VX5b4rdH4j1FPr9UMZ6xMf8ggaXNC5oRbM4Mr3u59VyVD1fS9r7GMGUAM22hDkrbTVzJcRNKd4xG7eGDkcxCSEP",
  "key22": "3fHM4qmjfnf2WuaDc3V86AZ7GsVmojs4FpVCzUxG6Ame8bArRnBeCT6zmrtGcSQeZE318seb976Q2yc2Upxb2v4i",
  "key23": "4THKV4QmHusSaL59nu9WV1ymxKRZKsWLgwxXCjF8vdhXZBAg7rhmPwNwuPiEEpSxTi8p1ijkeEE16HbK7tqw5uRj",
  "key24": "4YwYNz5bUYAEBehqstjhWBpUL3WPXtzhCeLE3jLA4yMYPv2uNRU2KusMRo4K5xGePsanLJjTySPrW1uXqWQaViKn",
  "key25": "2HAfoaYhWDDRVNmKqYDTUDSBe5MViVpzusyvtwDp33Hii4b49RME8YDiL1JnKcixtisW4iGe1gvkpcDSugvYtgES",
  "key26": "3Jn4qGnievsNW24eQYW4LyF7AhxqxVKi5TQZxVan6G2XfQ2QEq4kojT331HH6yL4nPUXcD1mgmGkReRdQ2Kr1n9q",
  "key27": "4zKK1QdWv4BTYYbrbMAaAgVQDSdmhQT2hFHcoADnsS84LmhZJPQcs1bA7u2XPUQDFwdJa8eT85ibxVSxJSWNztf4",
  "key28": "7FtbKKMMQxgX7oTtN8KVw5PQcapubVrdCfdVpXF9rSPanaLhpw4sDbsCQnDqptsxevgpurX5cDksgwiXCZ3hDsh",
  "key29": "2RRYfCj5F78h5jr4zhuLXuwheDni7oqC4s5dRCWKQYAbNnaot9mDPJ2b5H5y47WMofBdYGabQYvsYgRq7Ti598fg",
  "key30": "EQi4v73RLm6my9vSQNFezj5vNvo1YVy4tBnvTeP3J2oZKpTAUvQtNnihGJDTFMV7GVqzqn9soLULfmQum3eNTqh",
  "key31": "62MbTUPCNVofBXGrc3PLwGZQTUGeQfXN7YtiPYpGzjcjZEiNLoQ4r9hBPRhLQkRVdGqR2WWHF4bRKj1FhwRYme4x",
  "key32": "3P318PQiogNESLFqvpt9auQzUfEMgbCt6yc5mq8FSLdEVz3i645AT3Rcfkwf9DfZR8wSZd9MrmifKyYEjU4DvDDE"
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
