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
    "2BZ8rj1ocj92n6jGWYwvif8jZV6oBBTXpyUkcgFFyrJtRtSdJmD8ZbumFdXaYXSkLGbfs3HaGUxTsPg8hiXe5E6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X2Kx53pb3cFdWkb5o1KpV8oGMrYxi7im2A7AsV1aW1xWLeZZ9qHj4godPsD8FPN4wKzb8yxfWyGs4wHMFX9YMY",
  "key1": "67Hc7cGEvYzFAqcqdzZba8vKmp8gxf3RpoLxBDWqtLyqXkWVprDao1fiqZ5rW6shedyb6EvdmNeXoXtH4XPWukDC",
  "key2": "2pBPpw4TuJG52N9CFK1Zf6uTFGcv4FZRtJJPfSjcDhH2oJ2SUiFBU7VjYzowSjiuMKtDeBZcjevVdQfvHBqMsSEQ",
  "key3": "5JEHNhFLwYuFjyTFUdooWmaGM7orJzmsLHHo7Xd5rg4qiH43NvvNGeRg1fwaTbChyZC5DNTYW9jpTdw363rntJhn",
  "key4": "hNpais8hSvpwvaKY7k8Bod1hwpLbRTAR8SS6RKazedJkLRmqKh4dgXb9ZPEVgs5hyz2z1fcQ3pvmvjLFozEbVnq",
  "key5": "5xLZEncKmz2am2k8CYpWdgsJWGijANvTAvXbDUrHfk1G3zQm3e9Ds1dodrWA3afPrHC34zj3RnESgLSqa1CGsGm6",
  "key6": "dfPvymV18twR6shALFWcqTPTA8ngEbvtaDQkTiq4ejrbsgTsJiga7TpKcstbjxN1WRMVEPqeZu6UYocyQ1fyayq",
  "key7": "HnakinCzi1tEU2c8cZzsJEhq4QZCc3pTyvdZ87xMKzSQoRyF1X8Kd62JSVZ6KxA4V5BNak8oWNEkFxmp1QnJnyp",
  "key8": "3QCphf57oUVrtQmVxzbFhnFVD8xZNnt78yqMv6u2Ln8NS3JAvVVHEJyN77FJ8LRYmvdiZFyofEgNWLbCNqWWi32T",
  "key9": "4DFTHmJDZ1zRrzMe8n5F7YShQZ1n7bpzdritaVbQLZGJiim7xFp2J8U8V8mrrmdJ3PUNkWmmvRLMU9ZS8k4MWNQi",
  "key10": "2rYHwgWnyou4WQMWYaqhKmj7pRBG9iSMJ5hHx8DKAnvugn49mRDxxiiQzYPiadHjEYzM2GG4VXx5yS1pmR8GbUTC",
  "key11": "3nvHnoqJkBnkMjUhq9DQNxNPKXsAFV9DKXmb1WtcSstM5sspz29DaxMS3MbgRBWvstpezY76TA2iJ7HTnJyCc6sA",
  "key12": "4tW8yfEkEDN6VSGHMF6h8ccxEWEdisUzmKZwusSPg3JxLFdZmkfWB4aMdmR5BpZbQjGyaiu1erFtnEMU3M9XMmP5",
  "key13": "KGNM2skFWseLntMTwVaUcbyBHotGADzGph7sopivvWttyr5Dxg8m398pRHFMaUEZnv8yTfYtV2o8EH15Uqs7Udg",
  "key14": "63sAMTo51kxtK3E8493sH7nkt17DY2qgWAbh4w6ra8pgBJGZ8GmbF4qSL6YqJPd6fUjoMNtirbRAEu7zMg4X7Xwn",
  "key15": "SS3xFBgUFKvpgEWjwcoj1vLJjoBDjLnXhTNDypTzyVU9cV2cYovnFUzuyYaBk3TfoZrypwJUCS5LkoCmVvLfU2m",
  "key16": "2zhAisd5DkpXynxbkkvuUy4k34r4BzeVVWvRb44HqAPeUbzm5brpDdxLNxd8o2RXh88BXkhzabHpChEv5fDCLLYp",
  "key17": "2EMqw1PnkGU6n4bXWCCASpzLQmgK7JXEpPy8J4jHZwLWhqLjYJbNqVVEU3jNKNgujisQvdahNmh6cYjeB3FdWDPa",
  "key18": "5mxpiNUNXEVdTVvVK5u2vLtT16Aeh6zFM4nya6m1nZcYP8kzuM4ENCvJEPF83fPEMWuaURp37PKVrH2JBaZ5KsH9",
  "key19": "2buhexsrAF6kx1GpujDFNiAUmcPmUsx5U9e8FjmKGFopABzG7p3rmMx9RQBABAJ8Q1fdTBUJLVbpAxRoXX3ShMFn",
  "key20": "3fb4sbKrdquKxobYaqD8TqawJa7P2cjuKy7k2wWHfkWRTihASbFqC2MDp88gyDXwUdjXWAZQpcsAnxSRh7CCCcQn",
  "key21": "26KjxJc143MCLUN6U3CX55yJpyFg82JsR2j89sF1bdL7TmYETfYToeuaSbvjcPkEqPQkqePDuCFiDWHM15aqqVH5",
  "key22": "4mghxZ1omJk6j1vgMuS5xnz5e8wdLf3ML7jrpgjbqkkHuAJKALBAkLqtycoDcUacTDdpLfgUgbNwbyTaHMYiAvQX",
  "key23": "2mifNbUKHy3EkEBiub9g5JnyzcXcvdhw8TF6ozQhvMZy8cXhVCh4CgNDBvnhB5BDy5fw27LDNgmTTfoFDmwxPKti",
  "key24": "RATotydoXG9w6xGuZCGAz5dwo1gZKa69S4u9zJLFZaw73jer4HK4vmLVvWK4bVyo4sbdXSTyJ2GKFufAY28xgE1",
  "key25": "4ykHKtaWPQxfVA5LXyw8F7W7PopbLD31PHvRUetVHKehXPB6LR3ZNQJobbSwSyYrsjCMCzwAWtraSYpTEHXsKqkX",
  "key26": "4mBVBMEQbBVQEpUhgvatF5wuTT3dQQKYTNhUTVU2jMU5CzxZ2YyFKVsUMgbPETXXHdCHxQ9YUzm5Bf7S186AHRaQ",
  "key27": "4NWWKzzcyprjSHh8h2hzXPHe7rQfV7Tdbn1oYWAR2bZwAt3hVwKqtJa7QaYbntXbwPhSwj4DndCMRtjDgjKfGgT5",
  "key28": "4XqhSw2R1sTK7kUmFG1qXqSUgJUywoGvjxsbvX1KoGLic1WCmWTsBiUu2XhKiJ2ouZv9HWCmfDe7Wn4iBJqmYMsv",
  "key29": "4uXgvKfa9MpDYZr73mXLRYmtoLqSe4mRKbyoJfgKtF6DvgoaYfa5J5oBWoaFCgd2NTz3DBhgyJZA8n1RSsx2PyPQ",
  "key30": "5PbpKgRepK3ibxBWZU9oxmeXRQzogcFdySyfeKnRbR7agvwSVP3DkAbzsXBZfxhkjjRuo9LH5EyCFyQDynjuKAHV",
  "key31": "3F7u2tDT8bVnbWrwCq5ePex4uz1HPS9s1h36EWimiT4m4ExeDEuTeu2p8mBrBiZqDGcGamfnmpp1XxegrbsewNRk",
  "key32": "3wsxFc6ou1XNem86V2Y4hAZRpKKCCHiQiZ7rywK5pqiqB96kgfUKx9btDdKKfurUUDba4F9ak2Yx2caX2Ut3XEeC"
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
