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
    "3nrST7NyZPpmn2VTZUGQ2hUDBhrUgpPTPB55p94YRwJPKfw6bjATGXHkapEBPMQUvbZp2ZoTawwSYEDp9Vd9HJwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cHz494E2T1SVreegQyEuVB9f4w6cLPiH5eBdSdpVwog9sUy8p9hJVNme2S42XP6NuLRGYjT6BQQRYYxZ6rrchSL",
  "key1": "b4zUXEmZsWsUnvmL6SiKNupPMxPa8uH4Nrgu4riZjM3Uvch2BFFLLnAvNGxfUTrqPXkboM3rit5f1vM2MN6G3b8",
  "key2": "4T7yDNodF7bCN5DsThoeZdJ4npSs7M6rqrNkdUmreYJveC6Xtr5SuRGkLb2Ms3ZsCp2W9M3Yhqq7yDu4LPdrJSKV",
  "key3": "2cL9434KPn3A7eujovFApHfTKeFU7kNSgKRpoV8KkFpwvQog4wxYts7uP2f7riMcvsgrDDC6G9M59LYJPUpZu8aq",
  "key4": "5GKUX4kmfe3Ntwvi6FepGmzW5vzFVFBYHbzYZhb9smYA1FwqkBzVXf8DTrcXDBfEjDQwzAqCwZbuNJbyFPGWB8SD",
  "key5": "4P5auMtStv9qKfevrgDd7TxAPg8uRwKAa2BZnyotd4Nf6AbZ36akJ1qrZWEj8ryrXUZ8TCVd4zFC4BL8fnzYBaDW",
  "key6": "5Wdaa6axNWqFdiFgBFf4UiLVt5i7MhVTGocFHmDATbvnzqxwCNM5LkhkYtEio55VSQmzX5Myp28kotja3Vi6VwhR",
  "key7": "2bPB5kCqSxWh9TE4Sd5kkhrNTFGAFZWfiz6KqS3nTJ5YHPLk3hRpUC9mnA6LwGzxv77MVXUoewpEfeJeoumW9ity",
  "key8": "36gFvwHU1xThsoeGdck8L1Z4c4HwwRXg24D7NLZtScDvFCyiQynvcJePPnRwNbbiod8CVALpMhEJrvqtVwwK3vKV",
  "key9": "42jXSbXcHLvGqTE1cXbNpfHnfgcvaz1hqmXdfWFnoyUUXL3k9od3bUPwkhMe7F5VVaZGXHBuHxmReZL997wUxjzL",
  "key10": "owPQ7z76CsxGC1iNCy8ZfuvoZqN1GhKgL8iA5iHiqkefw6TtLHYHzFbbi166VMWJLKSw9u1G7tsr8ugx3N5BiD3",
  "key11": "35eejE6cE5Xvi9nVSFfBWnknUHLoGvAiWTQAangZ6z9ASfH8s8kb21SibSeSZ1KueDzShBKGisxcn5GCWLX1ni4c",
  "key12": "4hfNjxHqdHJeoKSCcSWy8NsY5c4fitLk54hVBqDfUkK41dLwGymJPKxMHdz9jtfVpGAB161GiuKWQ1ESKr8aCVG7",
  "key13": "3uCEuFBeepQjtbxgFZUkyHjN7XyMtp6CUcoL66W2h1YaKadebNirZQPCUvVRW98PNKAuzkNsT1TdxdfrNKWavNUf",
  "key14": "4uCYiyvirvhf1U4QpUycKKzY3ErGiSc77jkWXViywLawQ4fJv9fCxZZnGL1B9NU5b1g4NZPJz8dXV8NqryWNmZDv",
  "key15": "59d5UHqtB62tWMdAqFK3McYzwTZFBCGM5fK1rbSTdRWfrRdVXaZuwK7mLTNknLzeVJdtritBM9GqFYfst7uKk4An",
  "key16": "26QsMMs3gr6AC4U8LMiVVqseBA5gMWXAr2fqRgPgf7cbWTRFSoV6LsJjBR7HLf6pYBnp94jBHQoJgE8Y1YHbfpXN",
  "key17": "3NceD14cJR4ZH32e4ojeqLCEYD8y33nHxGSuioRtVKzcrwK4Zk98TpLLfeuUrmEy4UY39PnZfeefQC6ezdc42D1o",
  "key18": "5RBPAEhkPPptgsR6Zj8ozz7KNxDw2hPFhd9b8HWqKhu6WQ3d1iEDpoEcE4mktBjP9n36bKUe9TGwcfwkBiZezHuf",
  "key19": "2WgTNgb3xdY1WWHNq2NseD45jaLt5i4NdnHhCMsgwfzwxq4SMfDG6QMu89KpxbtYouZeEwVtEkCrwkXvPJ5LWcy7",
  "key20": "4LGoLrr8iJ7RkeQbbHnKv3kWVSd1CQw3KQKmdccGpmMuAFtHwY8HVQHDxaoxWVKhCGYcnVrP2vMqodmQ1n7DZ8Sv",
  "key21": "2Pfm3kdknerYbx7qyB2rSKkvumkmzFJtizwzrabPLDjnxkHwfQefR4GGcbMTFzL6HLCmzDRfqfaGLUoDGRg3r2CL",
  "key22": "62rfXJxK81snhQB2CfQ4K2RnYVXMdx1KkbuiUC7PNBwLpd2PJna4xX5FC4d1pdpRagA7LJ491GQTLpc8o3DdqBez",
  "key23": "3YsR8vXCmz5WWFgtPVVUmwEXf4t3nffhFeodo5FR8ANqNTDEAKgPQ2WDUGjb7vNmqJchtAJBAegNPMfiH8omrjSv",
  "key24": "3ZGdBFRFu1MyBiYXEeu9do4ze6HmZ5w2ivgekMDmfJqc2RxhaQwAYSdWEmBmC5a8WrAAoeFkANJegLzrBEAhUBQM",
  "key25": "4Yx6cejfGisz63rHnvMyyR8qCXaeVRFiAPb8baTfuzjdh6ksXErypdWh1AJ7viLLrQw96VZmRgRJdRUZRuNGzShu",
  "key26": "355jWxyqiCAoxAwVWEnE7AZcSYQx4wwY5FVHhGVRaGDBjziT3RazkAhG6oLM7AWJd7PCeazHRoQLaW4bUqyijX2n",
  "key27": "4ymFwPy2y9toA6XNe3FZ69kPofDHdV8uSzeF2HtKDwYzzeqvz75D9Qb9yUojm1MjVLv4oM2AEGuBSyi7fk9M4ULC",
  "key28": "5UES685hn2Rx7fykFhLAMRiUZZqzxDRPHBr5wZi4rqCotp5n5x9XXb9JQGn9DpYdVinAm5fMPSUXsHf7ua6NE4UA",
  "key29": "48k8SnSkjAQukXLTqyWnxo15ZikTEbk3PCrAu3EohhSqKoYFKARK3wVkknJmTu1r1UXnLRzYipD9HJ1QVJWjZpBf",
  "key30": "4TGRxbXbrrHrnsdJCcRyh2RToiiyhxvRVmQW632jiT7bwYe8L3dRs8QwT1M84Vwpb6UNFYMbv77P42M5ohBowPtG",
  "key31": "3R78A8hLgiQCi6ozZ2sUA3PN2Sh6jcAT8fRseiHvQdH2AVRPrMq2VaLnangPoxZJnCdVbqkhEagNJi2q3WLYvHGm",
  "key32": "4kJdgzR3Uo4bZbNGxomGFP7nKtXKdHDeJVxS6m1dccYyS6JRzq9omA4MXUnuXBEgy7J6XTCtxFKnFjSKhwYBvqF5",
  "key33": "4ABbb3j3Z9WkaQ5Rc7ijEixqgRina7HsVUMRqBcmePZsjLKtGKaUXFtLBcW45ayspd47dVMDw4gCfMFhEBqMLXjQ"
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
