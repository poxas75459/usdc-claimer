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
    "2wh5GATGf6p1bfJvvNXwwiceTTrfkPJHrxPmpz6hDW4Yz9koRsY4RS478WXTJ8sBxYBFqT6UjFgmRMzyAYSnefgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J4QjGLvxCyVAB8VrgiRQ79dbSZjqYLfRyDZGxMsbRyRnx65YMxZi7cHVvWW2eZ8RNuze657CcVZmQgCoF7Rviye",
  "key1": "4FKE1tL7SxU5EewXMQ1A5z88tBhaGFbmAD6icDJpUendJsPEnGCcDTWVYrV5mVSBi5qAhxyujnjP714y3hs26qzR",
  "key2": "2oAi9hLBTMeFK1rFNMGGVdLSvWzTRk3b3DxzowYthA54hoNiBqB4iNB873Jpoz6MuK1MuR4AKQ6rjN8zWaVHVUDL",
  "key3": "5ssMnsQsWS8hwgN2dLXahBhtSh6fhcfaqMvkqesMHyqUfawDYwbzV4UoqeApDd18s6tNUiiucPNBfCeE8STUjwzk",
  "key4": "67dAJdoaaT9VZwCoK4XRJ5CqC6Qf3P1mXkTExx46ouqi2vdHU7tSUyxqZ4b4tF4gd797YYzfKTXE8CTR3KVvZvAY",
  "key5": "4obYtoBxzYa2SrNxqxRM8B3LR4YByHDTttBsHLyaNzjgbqYKDuPkUh9S7agsBMcBkyJG59um5ybWsoMvKW98xBZt",
  "key6": "2AdnZtdYdagirBupgWhAFt46J6Kt24vXXyAgTbDNDUcfyKKZFZnRtnpokRsGeynvdJC2apy6icioAW2B97isUR1P",
  "key7": "4XBtF9AQ8TFxpjxWKB8NdLM1s5eBHiVKuKjdy4wUeHrge6d4VBEZj3bj1n4xcYzqBq3bkswTTVhe9kENY9CGhWKp",
  "key8": "4ydLShQFWWi3935n3cbof6tqcqDqkWYXGQSxfGhvB58KVo2cYWNmbsxffcnqG2H6jgBBLm1AJyCfUscpZEYkMUMX",
  "key9": "3Mxr3pb5NY2mHTvRoNBcNY83rwXbC8GpADUj2kAu9yvc44W3vbLzRtnGpcsUDda2JgmAmJ4su15k8ucZE9yTsWBq",
  "key10": "4ewKUQWmu38nom7b2FKD5Ufo1Y6oGHvM1BLc6w8nPP6oSa6JLC7URNhTwe4RQNNFCJyZBT4dHTYSpdrNtLAgTUAk",
  "key11": "4XAYKfqvZExbdpmCMEFYSJwiXvwSy5XfBjHHjfkD9bhFcRUVq31vbFELsK1VEe1YYpYdEEjQ1ARRynjSh9d84vVD",
  "key12": "5JrHxrHVwkKUB1zXqhNX17V22Tq2Mz7jtqh7cV7XqoH9As7Jj7km47fR1obnseCZCe6gDtkCUs3orqsTtaN8Kgy3",
  "key13": "gZ8fkaebcg5ALCS275JW6vAS7jE47Sk9wuwwJF8RyCTY73LiMeqhfRs6EMWns9jYApqghUw2vcDwjqbwaBk43YU",
  "key14": "4hq5yaeRThUJaCF6BhVDSj4DS1ppTm9goFJJ1qYKmg93MMCJ3h4q1HrZPE94RyVdVYgVBeBLAxgVAgd2usPw1sVD",
  "key15": "EKiGpsPCH9bZJairN3K8q9xmesaDhVfs94bHqRzPeuqkbQPV3xMHjJY7Qym8VcXyaoF8UCCEh8R7qg867UfMmqy",
  "key16": "3grhbs5qUEAP1eNC7VHEAeEmtaPEsLkasXWp9RYNsmMYDRG5zKr26V3a63BWvUQ1Dv6ycfL858ao5k5x3egC3kfx",
  "key17": "4GQ9bzc2zRRCoS6GqsommADWDsqko6BmqzAh6BrP7bJyGozKeJoL9H9uDjd4CpLD7Pi1AHumFVuT2i7NNrmw7rSQ",
  "key18": "6vmAM91KEod7tWCy1cDJqSEzoDDTDVCnVgYr6NAggFqfcxj6cPC7deFQvRzbERAWn7zDaU5ff64RDuknaJJt8ak",
  "key19": "KDaAZddM9CVtzhAtMfacFp3rVLdxVUvg96AVxU2qZdyTFem4qRRYhQgheDwWsKn8qsHesbQr41rzrF9y2v9omHt",
  "key20": "3f7R5asYer86RGxdxnE8QbCWEjsJLT5nCZijUKCKF5TM8LzkJsUQkVRuNN8vFXpxqpRkZyf5KQHEUSATzH9ntGRf",
  "key21": "679HFVxBhtBSv6Ln74fczu857FdrbeTLm2Wf2B1xJbQiTgRiGvmNfYsMhd8kYco4ooqQX9JcXDwsYV6GLTJZtbzt",
  "key22": "4CVCTyJVgwQcTPXQUoZsJ6w52taPsmdTZJhaLBByrpw5DNzRKUoFSVUw64N9M1obuY8ot7L3x1SnJXpUB5dFeBXz",
  "key23": "5xs2JLkshBNrEtHbWNbYuk8GnYK5i9mHjGiNzwg1zRXLdhzroL8mTQuMiQoYRVQoct6pGy3wb7VLAiEs9e4vhmiK",
  "key24": "2Akigr6RZbJkdxGvdRpWMMEDQhLhLY2NSWapDPeVAgBk4fvjnvScRjJN1CMKXS3QiRZTirgxyYrMPb9M59WmX1sz",
  "key25": "J62LWWDrLU4JfFaY6UJyX6xsafV8s2uTrxNgisWR261HmmYXT7X9XFyvuanYD7PoFL6aotzMrPMbKt7f96WEH5j",
  "key26": "55tBkBpzENf6iBQ4ZhTpp8XBnvavfY9MtMrX3fS3MCHeHHUFh3t72u7eR9EtKn2M4PV1Pb7QPXLMtAMTxQ7tXRQB",
  "key27": "4Lq4JHE5pcwRRfQpbsEPpgQDhGY6jgFhJKBTYLFeiGqXQmXC9XC88PT2bN65XXdgW5GKF5QripMF4x5WMH93EiW4",
  "key28": "Ggg8ZiFoxLwBt5WptkNa3uAhqSXVRP6SWrNHnb5VUj7wgWUQ4MpvBXo9jQP4nDbpdcfAkxpXvz412Krcdtp2uPy",
  "key29": "4vRqvG2ua5RwpFUpaS3CroMGZKWJa5YYqvFzUmftd1a5Jrq8ebYKFbS6EvZqabTpi2UyNqQhg9mFEGhxibDu5d6s",
  "key30": "5NHUjjAxphfXZ9i62bd2LomoaCYSkmqpfPj4KbWADqwGzoHfeBj1SRxxBi2gYbFeAsAtYAaByWUQRLw4KLtwwWBk",
  "key31": "WkqQ567w7BwbHwJSAk53rTV8zwWCDiviuHu8Tj5qe9um2a6mmrBV5yXG725MoYXUwrdJ1yUjcbKs6ivuUviEGAd",
  "key32": "5CiKLjoUxgaHKgJbqdnNqEjJbdoT7SMPa7rn4CX9ijxBu6KowFEjXk14iKMrXKgEte3PaYFnKKjBi25VUFauNXAf",
  "key33": "5Zu6qFsGy2uaH2Fz7ym2CEwJz7bXSzcAe5ZqY7us94biQoAUpBz9o2evshRRsCzZF8PkyFGXFpnBLQrmfCB93Kjs",
  "key34": "5EbSACuA9FuVuXJvvRYnGmBMHi31zU8HDBd4RFknerX9hGgtqWoBJmYYYSYJr6eF1Hbaq71JmXyKVS5H38fmkwxk",
  "key35": "3Ln7DFeQWSVismSCtxWRHdSB2xXhrKZQFLnsszxAur4U7NhQ5Gz8p6GPia2t1rPYevEdTbnqWYsQQfxQXCAKX4Qn",
  "key36": "AFbgWtK836oxsnTa6pJFrN36ozf7ysDKr9Z5YxNLDT9BWn54tYc6Sp3YmW6RhAQ82wGjJ8xPn8m8VYjrofGtcxZ",
  "key37": "4MjubgDUp1HgQHso97h44Rr9rN7ta7ioQpHCW2Y3AaLdNNnSJdpu15HP2Bmvfn3FMpK6qd3kevqh9gJe7oXuX2AV",
  "key38": "5N3oCmwfV47CywNFcHVYHZd6kMvP6cimTSMRvQTttexSvL5KriPzq1G6Zduze8hqEXjjMC357d3SFwBrVcs29NnD"
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
