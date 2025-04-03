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
    "5EqAsJYRAHQj1bf7L8BEPmFG59b4WzUPVjr81ys3dtRT3FzZg7T4tKHxfQiTuSxuBUnq66MRdswNhQrF4mYhVdwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35u6RvsBAvShftbt3eeXGiAQiL8vmG4d7vTjQqKJFZ2iuGJQo9syu5HTWYPVAUAXLEkDTAkrxxrAActKxdB6RZ7C",
  "key1": "sBQEmWYVeNCNDZZeCLmtJEWwLPESo1hKNyQBeatVyVDbVfm7e9KNhcsNZPrrgqgG3gcc86ehTzqJUFxkD1547Sn",
  "key2": "3My9PFfLvWswZQWV5pcS1uY6akovGE558GqhrDEDPUQh8JrYmBooFauXoa13J5R8N3t7dSNHHjRQuyDuciDnLpy9",
  "key3": "2ccrQJ5gznWWG2G39hqdeC8DiNxUVPmoWv7REB58cinVwwueNFb7KbJfMHfFquedcRngxfNeQ2FnJBgUf1h2C1EF",
  "key4": "5HtuuTGr4WZNPyKn2myACYkzPwprNESmSy8MFfahXgZkbpqfEShMCSWEGkgq7Pg7rXGrvo7CsFjRn7k5dNXevSPF",
  "key5": "n2gfAaesWNvxPQ7a2YC6zRZpx6xtstCKqADKo7RYJJvCYrYWmeaihUHDgEeK5UZwcL2GhdG7SEUshRiGDZVbo6i",
  "key6": "Bg5oDEeq3QatZsrnoS9Kq5fB51mgVBXr4gSJ5x761hUqwUTc29hKvs2614wDCfgQ8x5zU177ELAzewYMSz2Yuqs",
  "key7": "3PM3Rb1ReQbR2zk7UKwLdkiTWEGuXfywfyYpbdwQTp4xggvJMuqThjTXsm8TXzZPkPKT1524P5nHaeWw9VizKWPm",
  "key8": "4Wz8euWiVu8mL793jjSqGdRuN6xrfKswXu2tBE3mLnHZWwd7u19vccGYoUhX36idWMVYTZ65JMiQUxmui3k11XTm",
  "key9": "2PgaZtZHpcw4H1oryiTj3HJqWGqUx4raRbb9cLoK54r56BwsoaPjMX6rxqeQAf5pZbgRFTGBdkaTnzV6wFBskrJx",
  "key10": "3w5nX2fX6rEvDEUAjFmcU5xcPF1vXJ8tT5E55nZjwswGMYWrWYjuaJH7ZZTMAfL51tCd68FDuUVtv2F5GeoLz1z8",
  "key11": "m3tEWZns6eE8YRaTrqkGrRaHAtJUKWJrrod43RcsuZXFapTPHebGAmi8pnb56P222Xk4792bwJNZnp9WwCXDSHM",
  "key12": "3ryd2of4SVbm9pJb1bmGSG1QjaGf5QDodbgzdVnBYR8KFdr1yg8iwD6knkj19sKhHAX2xWTR2ZPw9W9DtGVifkq6",
  "key13": "59q5GthTk2dsrHDShXq4KzaX1b9SLvGkLwkvQYwY76KPhEYebjnS11vsFbjDYT8RVUcvHjE6BHvbmi9P3p1PBgSa",
  "key14": "jZ8aTwHdEthK2KUE4JTHyJUYmMqi4MUHk1Wxy24Bc1g14GAmcYVKZ8AwrRU1mAN6Cgy8hxnXHHh72QFdToSNZFm",
  "key15": "5sRsCGzdrfQniGMLDfMALmejL4WbZc4JUGNAHqdgwgxyH2D8MHFB8bbP1W4tzrGYxLE161jtoWYjbf2qmJjRHnen",
  "key16": "5f2xNYvaxgajNRcgboibhqRAmQnjSejEmd5A27iEbL7omCKFGX6sdP2ycBnLqTfp94VmLs4X5qLrZg47yoZySjzr",
  "key17": "4vfUUVJAnUS6nhHxnfssm3V6QyhvYMqCkW2SCcRjZfubMb3Q6SDn1WBUvhVtG6vSeekyirFcSwniZqnqc2RxgW7v",
  "key18": "48bXMW1R6jyn7cAdqV2nFhicZjBe3sBQwsV8eqxi3C9WReXadbL8kEDbxuskcAdNTsfREbZETyQQpEzrAc37cGKW",
  "key19": "5CvYBENqaDcQXoYdyJs6tXdCjPZi9SiHvxeM4vJutjefGriqPvk4fu1wLrfjeJFemrbuzxQdKC8BvLo7zHW8Rz8n",
  "key20": "26bbzfS6ForLphVmb9cEp72AYdjHJBz1RoBvQk6sd9CEiGDR8Hor8W6dWa45mjGxoSnmosbcNhASBhWLRzvaABK5",
  "key21": "5qxcmkb789srnBd72mzi3RjJuzRMcUq43bsvwa5DzkEhR237Ebqke3SZYkjcKv6syF1mRtFHgMy2t8w7C1Fp2usc",
  "key22": "39ArJgcWSz5tpYbKDNgbUHH95QhFUWvi5ZH8XFbt9md23oHBoFMKtx8nGizSMQ72zRM3B39HAA8HJ6TdfPEDsYJ3",
  "key23": "2gsvvmgFTjkzMYZWwgCf7Spf98kAP2e56wrJQvVd6pBPgn93UDz2JyhczyhiWHEHvmD7XfwLhe5yLEyXSPWYDNN8",
  "key24": "2WfSsWEqsbdjWSLbak4mMcbz4ARQsF8g4MwWYYm5rrp4kxBY9b9rbKufznsNdx8h8qxkfozcFhpoUeWX9LmySmsR",
  "key25": "5LgnZDSTNjRw91mzRRZBcSMbwGxEZ6N594msr4qRqZi6U1P7UkHFeohVF7duHPUWYKrxny6uACsX9hKSgj2G314v",
  "key26": "2EZKP4K99pCHypQ2A9HW9rDacf33Mtu59y7do5AGSZ55asYya8DsvX6MG49wnv32UMqPEV9aTLrJaz8GyW2p2Jzv",
  "key27": "4nJGwmiZ21o1924AXGDGjq6QX3FEQ1GMwMSBr9F2t9v9b543r6yvKHv4qWTm796Aqbom6gBfSS4RKBEeCtwmi3pK",
  "key28": "5j6giyajDToRKznDmDjb8mXyhSeneTUA3DZnJQuS3m4CEY7cHM5NaKMYn7Eskonfekn8kpwSjmNMcxGuEJvdLt3K",
  "key29": "4eeUcJx1NoopRxs73BKqbcYoXGmA5TzbCtSa6o9jF9meGv3fTMM7BquugXzYnrHmAonprr9Y2h9ZKWbv3awQcCZj",
  "key30": "5tBmwpKUCvZQTZaTAFXfThPSHCD51hjzZJr1vK2njRAMeFqqr4hrJE73bkot4QYR6EUjeRaxXGKyAwUfqXMNhZdC",
  "key31": "5QPvbgjZRZixjxAFCNq54re1MD14J5Eyf2R6txSLG7UoVJGXedNLX9fhzqRV6txWEBK42dVgRbPMDwZbgCiBNNGP"
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
