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
    "5V1THR7bkP9jm5zdQZuLHDABohzCsdfm9bQurLqxXGgmpv2KcZRHx7b3HW3WVt38PPSNhMuGTyZMAheCUZRb1ikA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CayPq7sGbtf5vt4cPTkmUXSTcynGtVoizDqdFjMkudZAtJdDXRnz4RZshzQRxduqmhvcGT1Ua9guNia2GMBmLdG",
  "key1": "3Z6GBmmJVWVHEXxBR2CV2KpALWvat2bX3mjgDSt6wRcW3Nu82RbAFEEXVb4AB3YsJ7MYGm8wAoMajSzQSzDnh5BK",
  "key2": "5qHcUvPeGyGpainVk54ad2J24kEVHpDwBnNsSUwF2mK8N15mxCHyxf39ro5PKz26eaFNdCNotPKNSRo9vbe4wFh5",
  "key3": "4SgeRch4vTtprXJ4prGBB6c2X9uxzKMFkY55un8mXGUVJcdi3UvMXWbHFeV4zbJS8tw6vAWbnykrDtBaVjDrFZKQ",
  "key4": "3rJjWqro1qFSaqWHhMJ4NLZFd4dZwLeEHHvRmjEPgZLLrgKEb8GYgXL56wmuqkQPbkBerQF5TSyTvFUdjJjBVsSw",
  "key5": "4xRtpcX9t9SmYXPhLnosjWCb68Vfz3XKPu8p3SNyGE1j3xTpGtMgoEPpcS2fepAi4AjxBZ4PgB7FitaeSojFiMjk",
  "key6": "3DXJ3VmUEeBEMXQoyKD1BNNT22md39W8zGnSbQ3jai6YazL5VaFDPP8YtZwPE7jE9s9UZbGa8YUivGaimeXfguno",
  "key7": "31LYuifkawP7VGvM4mwh5xsoBtvagDN2FMJavP8M6N6aEREBwNqw3jqcvHCBHoMGVCbWy2FtnvCJ27w4guFEaNZ5",
  "key8": "5MdcxFnm7M89gduPR44Sud9GHwmnsGHHfYQ13o8wk5LdTPuwPMQgDfu1ZFswFb53u3imG4wVjJ6Pay9m7WW43Qkd",
  "key9": "4s75yjqunVGkDVVSWzaa8pRtaYW8aEoDhDfTB6UeHGmV1iqFtYay7PQj96rft7CydsqiqmhF65UxAHfNNCvYwHi3",
  "key10": "5XEsXM4AoydJtBBuJm5ZteAbakAZZfRDVPyaezTEgnvkyXEa9ZxYNSw5xKJYHRUCMq5vhcfnrzFWiQnA2JqhxEwe",
  "key11": "64iFUh6oZf5vCtQB5t3qXeJ8NMyoAzJsxTvxtKgrJ4jvJg9kwBADF1i5iNPN7vtFkHWVh9BPyAUU7mYy8oGLRzLh",
  "key12": "5SxM5NS1vxtTWFeFxPy5MJpbm35ZwSgutGqgQViUkanwqZbjS8cU1Ybw6cjsxVJynx7bkCA87DrTcQ9ScF4LLaWv",
  "key13": "4fCU6EReDGkrSpvMswcg8dCJvRXgTLVsenCaJYPRqitbTh49zCMqgxw9eoEJUeMVagALuxLSk6N8khWAStgS1vcy",
  "key14": "y69qTWaYgroRXzrFMK9rEiAp8Zhid7j6TFNHat1MP1L3CuJhELj4weW871ywWjESdRSkPsU24QjV6K1at13XVYf",
  "key15": "2sF3bfF6vFJL6ZFnFydniepZE7z4GkiN2N1UBAS5w5P9vJtqjtmzmXcHMCGQXU7cJ7WpCnSCC3zBR4mvMWxzWa5B",
  "key16": "4bAd8YxYj1iPpCk8fS4Va4vka99PcUrM8pzhvvrDvNy7WqqPw6998LWarxevMazK8scqVaUrfSwWKNWc5Qu5AB2z",
  "key17": "5f6MGBMcHr8KRqd1ienro9C76ZQi8wvehMPJNnwaFgVhCARuWerQskuZCCLTmHPYExiyQWdkR5zjkaXVn5wTQhRq",
  "key18": "Ub9ZaZL1RB696usYKFSZVUUgoQrjGFsS9wpQXmEAPP2eKUAWwsSsEy6AWyBGRfUz9uVpjVyMatHZJfv2mjZeLXU",
  "key19": "5eMQKFJGxjtmTn67er4viyxPfY85QyQBBm3xKd31G8NMprpkzdFenzraCpVYqtKXKS1NKSXjwSzagWfEzBe5z6bT",
  "key20": "4ZToh7wrMsFRBS1vWzMdJpg4MREUfjvzNS784xqPL4mBYNc2rZ43hXi3zfSaJsmnPCW3uMUPQwqE6w5voJj3yybx",
  "key21": "4DqmJiYm4xQNHPrkGRxLWjJzz7YtiJiG7q5YmbojDHcKfUTF2YkfEeDJXPb4pr2bYWhnQLk4ze1CvydcWhBKszkE",
  "key22": "4u4zD1fv1wXZVMNNcJncVRQceynoYv54DWbm6zi73vVBTo1hSayMMbKA6rpEpYPgv1HyMySX7vMs6whiQCDbB9Z4",
  "key23": "5VHKtePvRBX9exZGp3Gtw6GoDyEwoiH5Av5HSbiexsSoJ86dPoeNt3wjPyR5PmGSkXtxu993krCuBHAg4jgukgch",
  "key24": "33k9ejXq4Rw3FWdYfAR8fA7hivJwW13YMTPQ7YWmwjsXoTWNAhZqs57btBLfjGzSQueu7ZyddmjQ1F1dbuWzAn29",
  "key25": "5uYte48xvNmMQzbYPMJPJWz8zgkFZvQxBjByVaDhEq2k2jpD6as3mu3X7xFrt1N7F4qgu1HgYX2YkqA5iPu7eur",
  "key26": "2VQZYqUgzLDZ9sNozLAKAvXLnpDhp9J7QUY44tzpToMV94ne123Z1iF6sURk4HCRST4pvxGahLVWFN2QLCWxQheZ",
  "key27": "4PeEXGpvmuudq2nTvEAGRKJhpfbKQ5Doj3z8tqFYbBmfYaoMLTp2zjSPxJar3cCEuLX2WdrdBiJVeh622CZbvaVi",
  "key28": "4KYrGSkbd2WtntzcqCPsfJ9FbxoX2dFGAzzUoKS6uuTiB4rUMszAQ2rvjazyBcVhqs3R1q66v2cwaq9KTgEbwtNh",
  "key29": "2GfGx8ra1ozyXpZVYr2vAQNWmmCniDs24jiat5eHXa7wc8Z8go7KX2fPQxhrbSUXaRpT6Z1iyP2MXaxKuJLb91cj",
  "key30": "4P97LThiZvpADtgWeaSTQY6m2QTn37jCqDx66P3XEwCaC5BaHxjmetyawfcorEPQ74XdTWRRfeieDx6cXv8dqbix",
  "key31": "39hPzjHqALeALUzXXMYGPRNYRUAWc7L7umkQjAXq7ZdK3hnd7Ps2TWidPXGREBzFAVbGrPED2RYbuVEFwj4bWz1g",
  "key32": "27fgZmPqycHZqVfWokVby6Fr9832gF7b8xJrCtHisovk3MoD27mhQBnZBLSEaKVUAT7QtPsriRCvb8emGGn9juYu",
  "key33": "JwP7PSwhXoX3gREuABUc5XRCQaQEqeew9JB7sUbSMcXiLZ3v4FZ23ba8KH7d8vaPAeygfpaDaJCzV28pEm1oYut",
  "key34": "mEBc85QH3bnC8akEMTMHoe6RgtBMis9twKLgiRtSZjHYgs6xzpWwKJjnjvtDHUQrGLQgBVo5HFXayL8HAsHFLWH"
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
