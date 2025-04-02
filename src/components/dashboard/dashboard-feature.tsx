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
    "44nkEZpv2bRhYoA9EQr4pYjVX42QrLSVDCKYnjGVrx25ayLf6n4bwazNeRzZ2R7Etsvvn8S78W4oLhR7KThDDw3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ifLcqDEZcsZ3LkpUVAhzPTU5LLzJjVZWViRy1syu8eJV7yKgvT2nazEHxxBn971pt6AwiHRHNp83rh6RYj2hMNe",
  "key1": "t6DGY9pjsdzNwvatRYgBsCEF9m8eQop1F7fNiVgwvyov1j1DBUdV9E2aWss6kU1z7AmZ6Lwxqo6qnRHodTkirFR",
  "key2": "4fFqYdSgWbbFcRNvGp3e1fntbSNhE52a2YeGwSmKPxaYVbWvDSZJAU517FTeASXoZ3zukafquUsmq3KwzUrGhnrM",
  "key3": "5xjsukrfz4LB9gFbmE7cKbm7RBHVK2kAU35Hwa9q4jz3HwJ8m3P9d4wNtVcg1Jpne7tqGUTQfPQkgKT7D9qQvJYM",
  "key4": "A7p44WGxG9p2MKTus8DAAhcseJvbov9DkUbVA964igR5qAqNgHJFMLbjCpurqKNKfkfZpNirjm9s1JMXV137L1N",
  "key5": "5UKbtfsEGiDLqsTo9f6fqFwa6EjWpUBTVtTEuq4jdMQLtyLwkoosrWo12ojf4z6FQCdJjzh5XuzzQKkmj7sZcaNY",
  "key6": "3fUnbPT4HKcMxTsanGKbhMPZV7o95CeHvChjx6ECj3rs5AyD3jJZazNnzhzTRNz5SYLTR5QkKuZcjkCXH5yU14st",
  "key7": "3o856kDXyQWFQEV5Wtoq8L4Tsv5HwqoeodR1bboKrNmdwGT8mTQ4JwPVGdoU9bdvKq7sxgY1FLCXpGK7ABievwxZ",
  "key8": "27eXXYXrLCcoLvKGS6iwc5tF71CbZCmoa6frmFzE1CnmUrBNk12gtNPXTXPb53HecDnPHVEiEZeR7VtQHNA5AxAw",
  "key9": "4p9aD1wDZK5XUFrmnquNYHzMiDe3YV3LBrYpaPqg9j54LGANMFxVrr2WEKG6gKUhnarsJ8atWxSP5XRb4xkx4wn3",
  "key10": "31BDGMqUD6HPPh2xgT7VBa8Aw97QWYbThYixWZsfmWNaUyY3VacdUfQajY4w15abUawNMMJvL8AFxdHCuJ7eYwWA",
  "key11": "5NH8zBHB4tFGLvZVVQJWyemXaiAiqogGnbJ4KuDs7SYirEZngCoBSsA7YStAFVSgDU2CL596SoA3Cgve44x746s5",
  "key12": "47QMXv7HcpK4FGb4YkeiFKWpi1j2y91CSoDwYdKp4rerrk5xe4uNZREQ8svSCC9xJqrRiecTfQU2vgtvJZK5Zonb",
  "key13": "2UHgKxfVm3g5SHzN4qFd7zpNHkJqgNNCUp3n8z8deEoCsg8QDvqqbcg9rhuuy7rE87xgSUsgA3DN4bdfVgPiP4Zi",
  "key14": "5yXkGfEHh5gZLS9nBcyYKAttuy78w6PiqCn1HHkGH4MGitMMxEUsAwgyQe3uWEjedUGDUe3s4AV7mMQC8kY794mg",
  "key15": "3aARPjEUBBpa8NfjxN5BVLtuEjRcymyHEDq9QzeDC9GxX3LvRzYraF9QqmTUzPupJF97aKozfBXsjXBo85EPQYoc",
  "key16": "4XZsRE3vae1PL6cetWgm8UwdRCCmTwHBCanZ9gSK1B2Z4NemUEAxW7th1Do5ujWGdSbsGknAL2uu1SnG3Vwqmp7a",
  "key17": "4o31YdJopXBxZCFcGCFNtQvLCHzLEmhimAoRXCExHpuPWrcrjrYwrpw1iVefR6t94c42NP9B9gv2Y2q5U1KAx9e9",
  "key18": "46ggSvNjfvmwmtY7i4aRedtNXmy8wDcNzgY7uqmSZd4cqjr5afgVcVCLYaqUFrmcqCwMSjWDHFGCNeLYVpXrPe8u",
  "key19": "22SXE8P2Lnv5FHapmcA5Mms4apKFuZv9Z47cKGAS8QMWP6656jRHYtm4e2DLAH2UwWuHH5S8LeenhhSmciiRLqXP",
  "key20": "ZW9Bhx9dGDVkVu4T7rR5HUsqyNKLfutbfa3w11akApTDUf7Ss8KJspUPiRwaKt91n55wsEvT1rH7V8E4ujHQkDb",
  "key21": "3PHxGkwsYxevcyPE5BmUNiHNyR4UDgDo25MAbURKc3HXTyDNJpZUqzccd8Zb8DjX6EhrQF7vd3qECBLmSkZAXtFp",
  "key22": "2BCmYU4XEDpmdzZxTzNe82mwf4iahGdfDZUp9VjG95rvDBRT8xopjBNRSbpfHv1G8RAykjkeYNKRu9DtVgy1gtyL",
  "key23": "3roT5aXFV65uF14Fk6ygxHHwKZuxhFh55tec4ZjVLy3uATeLiV475LQCGdbpBAvhGgsae8YNc4Zh9cNio3kqsmq9",
  "key24": "2HmPvRzTq4hjHfpRwgkJx8DB8U1kwTEPHTWTPHxpUdy5CfnaTer2UTeHFMepSsoRsYFLhv7DKZjhSu4xGhkQw8KL",
  "key25": "ARYYV8skLPoXgckf7NnipFGTApywAaASDeZiYbawbJxTNp6sMzjE5WNcoMhzfK5NUNi8VNyTNQQ7vrKNjK6GLZK",
  "key26": "4y3NRHnw5vgjS9jLgqVJ1uBuZNdeH4uSPjycdSwb6TGHsBWap4UcR15dED3TbHq9RoCCWtYt21qFmsmTWNSyJbHi",
  "key27": "4WSaiZHhfBQvAoFrY5nKa76qnu3pnn8jcoCLf2tQj6koEnkB4joF4fWYafs275C6Ko86UbyTXCQ2Vvjrx74kdBsm",
  "key28": "2rYU6YVtUimQ7TS8NLycLGEc48tt6pL9dCjDme3hpvinssgMHH16yBNaHYFYJoqoXQfv2NNJXsnBht5UWVr5DQwx",
  "key29": "3GkXbqrfQ1Cy5fFfvRqGhj9FZRn6ee29CUnDw6z83Ewa3tDSCUEqTUYgjSuUvYR5ySnySMtRjfDw7VccmVAq4j7m",
  "key30": "4PZZJkqtGtnQWe8ACj4ECLW55w6tvDpWYNugBuT4a5zEzngsbbLDJY4DB5fAeorRw1YL5EgVFwmq6wTjf2hzoiy7",
  "key31": "KCGSUYREjzFe1pKdhgCzdBMo8UsegbiJ4mQ1tVi5UcCyDPT3m5a7G6PE9sWNYUZRa8dxogThT27MFUxShNjoowd"
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
