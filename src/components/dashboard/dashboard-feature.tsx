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
    "NuMiLiEDPSnebfg9r96W3mzbJv3Ph7944MRcHz28Q6ryEpFBKJXQLRWNRxsCUezgLKF65kSnWK9SkzjfuTGZKPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vEmYgD3xBZ2eWpDLzvEwAGEQneHUneCDNvCsybPi5QnEYFKxYj5DCSmXtpMvUYy5s8pwerdkaQqDc32ZuwXYvyT",
  "key1": "24ZrexvPDpm5LtJsHBMM2tVPGFV72ugPsn5wDA7Qo6CJCkGqsrdKk4jPrmtPCe43sFfQQbDkEdMXAQNN4LkVYCc3",
  "key2": "bHF5VMrzCAw9p7BSpdhMTPjnb9mXoSx5iuK94peASpKUMey2WkTQ35czFtbyR6FHmfnUF84Tk7bXYXgy3WKAFG5",
  "key3": "JgFMEAK8uSYSHwC3tf1MwGMJcgWwXEpGwyiwUxbxyLyXKNqYxVT5csxoaLCRhb3b8WUrsWCjdbHpFzKgZuuZQBW",
  "key4": "eeyi9qnxjA9aPbGtnboGrqvvTJ475H2NZ5xhHVbWTNiBajYX8A6gcxmYytcYiHYGLN6N4TCBJciRqGAhQTqcMJV",
  "key5": "3eyUNonQWvRfPSNX66NGAgXpFDSQQHws8ifSWEUgCd3GWWq113qAkcb2dkvdYYxncr3VtUiEFGtYGacKVHwYSndb",
  "key6": "VprABzdmcX3qa6aK72vh5pi6YrV5yUXTiRxf7fAghmp36GBqBu2REnmFmEzNNRdXMcv9Dws6CV2qMMjKuxhZdPk",
  "key7": "3dBgfdLb1oH9eAxta4kwYjKvoSsHonKcDmfZDQDqGJBzrGGPrkXU1ZhReptN4Vda52GtzGMcdvcVWCcxfEP33g8b",
  "key8": "2pkFhhzcvnT6UMfBrFVFvqjLFnDHYuDduKHaTCzDV7g1c7L6aK9MHmHprfwqqMLRrQVd2y9jhuKQMPHCFoEZVuL6",
  "key9": "48s53kWNZYHY3ycXRWbZD6RGjWsH1ftdxvnnkw1WtXFGnWrcpWV2cjDhfFSc1MVyTTyyAKD3Ab5UvcdveqRJRuBQ",
  "key10": "5EcowwGpprGanMb6uX5B7edE33J6ipwVY7G52CeCyGdp7ef7CM5AyBddquGz7Z61D8uMDktnTajD9gMCheKdJcpf",
  "key11": "3XBrs9bJyMTY2fjcm9gLEaA4icjH7Tk1EprVP1BKjm7pUNRt53LJH28RtzQSan7SHzA7SzWN5ysVbT5iP8XUd8Xd",
  "key12": "3fwEfFyBHZohZbV3eEBdb3xXPzdZEeaENm145vVpxVB7BZj8E6wCHemeAo8BQYZRSWt8uxAQzynAacC8X5Ho4H81",
  "key13": "4URvEpPJagbfooQ62ygGb17HxFBcN1m7VsGxsafAPQj8CmWmJk8itrES8peYinGG5iccQ9Dt4UhLT1g88q97ZaoU",
  "key14": "4Bpnj3Ks3w1Dq5YPcghrExgq4tkhfkekmZUDHRuYmzysTqFxiYxqDnRMNvhfp6aDX4zhzbBr5W6CSPwXnRcd9DP3",
  "key15": "39SVQh7d4Z51hFBnkyNnyBaMd3YqzKJoCRHgXgCDcRNskv14SLkyRJJ4dutqPRc3jatUKc3KiCPUTtWGvdpG44aw",
  "key16": "4JWxjirqRrdsJkbtuU8nYaS5c61EcTKdFaYoTkSZYh8x753fmAwP9D37q6hMkAw4M688XgAZhXDxWzyZXNqLf5TX",
  "key17": "2G9zSnMo1Fqt8bN9mALZbCM2DaUy8wczboJ8xUAj4SzD5ZhuCBmjcTHY9vGCjYz3bJ1Jou74pQTF7aez1VAQT5VZ",
  "key18": "3ZA3L6CCDM6AjtvAkPVXwpySFGvrLAmP5Xxy2G6vA92i3w23YCdE3At2WtAKi8pxH5WXjJDj73HMMkpF9U7JeeJx",
  "key19": "3GZdZpVetNUyfbz8SYMPCj3zn8jWzrcmLyzNUJh771hgc3x4T8BWYCa7hE25wJRaJtrV7EJniQbycwfxcNG62HVn",
  "key20": "5JNYRs5xZtK54aPBb44ZrdjDdKTDzQLphjVJvu6ALBqLLC51SjQ8s1zP9wYAeSYAr9JGUCfNkpXv69CYawd3eeUX",
  "key21": "3yGvLPtEETYuyvL9Pm4WzzbNqyeD7fzC5B8npHGb9ae3QsDooaaJDZggHTZihrjQiEXH4QtW4nh3UPrdifysozob",
  "key22": "3XqsyujhfxY9ko61HAg9YKdoLeBchAWQJexPEuop48rn8hHovpZaeoV8UNk5LQ7NR8DMYRzWDN8TWGhguwdXRrdv",
  "key23": "24cr7aZEe6GZ5sXBjoNzt4Hut1PiZ5bUPpSMnBSmGAGMqpcBef3aUgYguQ3npp6aiD77PjRE5qd9KzY2pVYXkMkz",
  "key24": "3HYSH369jn58VZ6bMFddi1LvoDJg3mzXY5BRXnrZBfV2LFcCSdbKcXmRfU9yLKxNdsHJAAMfN7bztx1zQRmnuQYB",
  "key25": "578kejHBMv7u4pzUAcJm5WRANPgEHA7x6nGggqHfbgHt76HHr9EMAjZsrVXWvaVtKKtYE6JxMe8GWy3vuxkXP5LQ",
  "key26": "2CSXiNYS85YCfaTA1ocg59S8Lxf27ukro9DB1g39yYzyqMvse72C1nVd6MdYUYdde76CnU39D7YMUHrTp62UBh4j",
  "key27": "2zgJL8VzT1DQLa2hgKnfrZV2hgj6vLNNemSCqToQb5c6at842vinTqZC3bMD4KQoD9vhWYKJD6rqaAmKfyWYcgzd",
  "key28": "4mHQRJcSyJfKeDVJveNq6yZpcBYDJ3w1Eowqtcz7B3j2owrbe1dMdHMgUFCCWRDN9QiL55S9WnV2V3kqhG3QZ86B",
  "key29": "2oCxck3EnmfQFgF1TZGBQRkkaL9YRURidMRjuiwcfCTnHjWYKPfd3XWng2sDHhEu3JnM8JVJvRJjAEBx487ttHPd",
  "key30": "2jKvvYYi9vXcPjFw659pZin534pqK51QhCb38wcpXuBnZA2qPreWs7SBqhAobnNNUQj5uR4bthxDszf4qz79hCAe"
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
