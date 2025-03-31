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
    "4AKXvn4sBWPatC8hSTrKboRErzAY9DvhBmkKCNpcT7VU5aYU6g2PLRJrjzedZgijbBZ5B6hg8GsoZo5jewAVG6ym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sQcnjsa9z2Jj8E3xDi2r8xCtq4BFj4zqom7HNjP7qArRZ89QdH1NXZjDJJMQ3nDAzL6qFggLe6HxtHstU7ZP343",
  "key1": "mbcWRFvgyqLJ2TfzSCcGi69WmaSsHUTWUvGjLXronfhfbFYZQwLKcLBD8nP3uSvDZrLCvWheG63BwBQmgXKxfG1",
  "key2": "3TgPaGfeztmR1hLCNjjnqrCYr5jBM85aPMJq9a1VcZzg99PFJW5hAJqtnUisG7pPfg1yXigSKBDypbqwCqwdHbqP",
  "key3": "4KTVs2kvLsCuMWncJ5CChvzFv9kdgTc3SsMfSqgDDgQPq16ibW8Th8pABQuKjU8gTv9DQ19xmMfWiZf4nZVea4fS",
  "key4": "2AF2rLt4SvmcT48f93rB5HoQ8kgxQXT25J2K3sTzcEj3qzVC5dddZj9D4v5KkMNFw9JTDKGS9is39U4iEBeFs4UJ",
  "key5": "2EKy9bAxYiC4jEfuYKWV2pZ8dpirn94T7NGEicj4feAEKczthZVG6mCWauM7XP1NLt7Dbqwqo3TU4vKgq6satwVQ",
  "key6": "26uy5G2urBgWc24Hyxsy59wpxwoz369haRJeKfnkaWP9uFSJtc5QV1UYjyP9TgHoES4YUme2reHPDV5f1o5mVCoc",
  "key7": "4LVzP4CGjEqEyjGoj8fHgTrX6LS8bXB753gP8fKdeuEy7unuaZff6AQZyfLYeBCNWgR8e4CoS7Rt4hY9MyBxSpCP",
  "key8": "3TqXGHvJhPePZaiEaVENjfRN3U8z7LqrjDNRttgLoJsC3MEXkA2E4onTopaA6y8NjG2nEXfMCWrHbLvPYbVJJgE2",
  "key9": "2CTt87idhP3EVvQGTYsrkVKijNBtbeDwitvWCdc1Zs1nK1mnaNegRMn6ZuUDVsT44sQ7FRxxaKKrHy6XwYM3BmvW",
  "key10": "4EFpAYwywbSMdukU4mgKLg7yKBBk6ycjY6kYNnxffftB5UVGxbQgnMuBFvjnJ77duN9Rz8TAAGZLczzvC2b2jruk",
  "key11": "5PnAGn4wsBonaivpFiShmkgrJpXk2RQpKaTYNY55tfd5dCD4SPmMrcceDnmx5gbptGeu6DSXaCkTofsCxPQfofHd",
  "key12": "3jJz84tfctVUZWoscnNUTMkqUiThvqaEsxG3jcbyzv8zkGXENRw2WF7izpLogWfiYMUQGcD1Lmd16V55rZEuPevN",
  "key13": "4i8z57gPF746Kfmtz2HFPMXUGB6bne5FVbqQgf4HhvPKoMDK6RewucXjxicNXbq2LfW3Bciv2uK9hYz8igTHA2ST",
  "key14": "36JJ6mygd1GPBXHLCHN3Cma3JDbNVSDGXSsb77jCrTsx9siaw98UFxuUFKxcKnzith9CoEtS7cPWFUPqUU8RJShg",
  "key15": "navENYtBRMxLLZj5YC9dGDw9XaznU4NBvV12wev5aJvRg5XA27w5FDqV9L4hcThLV5LpHfYPVequ25xvH3Riqhb",
  "key16": "zybHm1xwm49XssyqRYhaMcuCjTgmDxQpXm14DH9oFZP3x89e7Kfk48JSxJJXsmePDU3iUE6Pw7Zy8pJQTX6dhAD",
  "key17": "3BqgsfBgANJ8RuuxXk6W5Gk8vAeysoUCc3tZED7fPEbZ8RCLhmgNuMpRd4J9MEshkRFUmSr7HnmoJu361eTg7z3B",
  "key18": "2bAn1f6DLSA8m2t5TXDZaKzqe1ZMaEvS9qVGhki31b7xXznLPFH3zbybavhSJYCHSFTzkE6WAyuKLLFnEcXLmxtW",
  "key19": "4uX38AgwFs9sTq8Lvjzc4fg3d7doVFYuqjTHWmysHpnVYLE21dgGApSZEDgpeTnXfLTWgNpUb9PAsqYZcpaSvUjf",
  "key20": "xt3xz8b4xh722CH9QxUQnCGCX28CAhYbdarKqyh4kWLnsWedwHezDndz1Hcrb6S2KcTtTEomgyPuihWCEhtKAJC",
  "key21": "2GLEANsXQqFoHDnredLmpxdt4XFMDjvSyGSpQPAp4iya3Ee5y6ZFanJ6M71zjFJMntWCTckrErWWgry122i5oMPf",
  "key22": "4EMoVtrvsfz9cFixWwo1G9swt8ii4us2BNT3oBTL2Co1qgtCf2VANndXMTYJmY5F5DCdBHVmEYASMS239Vp2U9e8",
  "key23": "5d81aiqgfNVxZQKq85CfjBuajLGkTpYk4vaZYCT6Lr8f2itUd8rrrpNBX8JHrk45A6WpiR7veg9ugTCqWVytyJ6N",
  "key24": "3espz2NtPNvY1hbcXdzFs1QBwJm3di7UFSpH82tkZUdsKP5rqnrHL2LLphfp55jg53qBecXSZfeHarcotk36fqBp",
  "key25": "534cCDsgs4E3UDdnw1AyqQL6cVfHrQpSXECJ6GqArg15uqvCBGbbSf2zR6CZWNQfGg2odmJ28qo95BNZgYrkwQ2f",
  "key26": "2dcTPpHzBatLPrjzU7Kf9TGMwniE1C1tHjerEcSZSYuq9ge4W5aus8dGHd5c8NPGjC45Sr8B8MeLEdUKbUtCVf6P",
  "key27": "32xUVkyKak6oAadwhtXMVtGsQeDkYw3nkxFkV3uZKhcwDFFFVZU2b8ijBrtk9xbppJQkqUdhbYfa2pPhMUaxnRuk",
  "key28": "58PSLZDJdVETvhc4WJR4q66m1m1kHyEVm832AhCWkpFikmUVVXMJv15WwNyNyYjAa5zjmvbsn1TF8jUUwFFxk9xi",
  "key29": "4PS3RYsssDz4naGCnHMRmxSYWRtikv4cMqaHQZBM84UBoNPew2xrXVLPbV9Wz3GRsis3vgFvvaj245Cbi45B7Rz3",
  "key30": "vbynhm7nG9QHLmzr9c12J6tMKkAN9NyZiCgSErRMWtuC5QtdEYq2PV3DnfR7Zc18oaEg7ad4gUf3Y6FvfgumEKN",
  "key31": "43HT5DDQFUXfMoeHaWAX97x8HqW4JY8qWrsbUYBtBZHsUisSJbyc9F3RZvYeV28KM8htwdzyBc86wMRexo5soDzo",
  "key32": "4u3GNCkpQgNJ6REm2iemEWNH11gBnHc1eYKa349rnrB7hBAizHLTjci89J5uKuwY8Lx2tdDUoZNbJKndJE6CB1xY",
  "key33": "45dmib4FfyT4WfZT9TD1oUx4cbhzevjpWiDWa4JXFDLLC8KnzGu4ZQWNepcqiyZbzr9XmsMbeu9be8q11YpCebCV",
  "key34": "5Ke9LV51xy7jJFnLXLUtsfPUEf1JisBXqP4mbyWCGG6p1gLPporNmuRcGFp8KCk2yWaP1icDMQHM8YM1BKsNCBv4",
  "key35": "5biaht3vdjsp3FFtR39khW9P8PtrzPypebw5JGRKoa6KPKsQ7puWGZkpVoqJ8tyDsagRYVcq9rFmcwPAig2NAdVN"
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
