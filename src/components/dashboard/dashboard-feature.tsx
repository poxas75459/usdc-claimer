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
    "2F4NcftzZJRkMG9db6x3dsNNLMJ6uQwrRu2LMeXpXafRSxD4KQ2wA3KC6GSsHuB9fNez64Lx8TUCZtJK7sqYJd6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WgffvDAFyCNnEfKgsjeevNDDhYPJbLx8DF5C9DDWJz1iUBGwbvKbbSr7BWJCwPdVTnJRbWAcnBmkhQDoKBUnzs6",
  "key1": "4goxwaj6CoduTZRjzaxZ5Cto1WEmQnrpCP2PFmTYwnioxVqQ3zKAd5edcK8URXKp7SJRMbz62LnyS7Gvea2dYyxG",
  "key2": "2anVN1sc3MF9rpVugFZY2CaWHroF4u1vxsA6Z1rFXoktyHBZkbS69GKfNhgfYcYqjq2oG4z2cTs5QSMAvGnQA7eL",
  "key3": "5ZUNysvVZkrZ6WeXyQJYXDB19o9ZYzzfoR6gVRUQcAjA639nfW5yNzLahMMCK17aDcvXbZFEouuXEgDnot76cidz",
  "key4": "22ajhiLnDmLDqZTnySQTzY4pYhaVDQhTDtTnrSrcnNPmTUfGSwwMbb4GDNcbQ5XiJSt8Xv5jqxqJ6TZsu4PpAuhL",
  "key5": "4EvSjCu4apVpk7RAHvE6X9JXC8Te6JiPCpyAiaxGGW3Z64bFYETcqgVCM3EW27jDph3fjn58CCcnjsBxqYzHcSDg",
  "key6": "2tDpQWAFQBDSyu2WGvwNnPNjxgGYifCedQouWpDv37RefabU9rvh4RRDPab3oX9Z9v5b7PxwZND2zjtoYuNtU5sq",
  "key7": "5vzFCxrKdVhEACQmRiGvbppEDv5RkbuYKCjtBhqCVDBMoppCwHLnBuy5EdwByo1DBt1mZheH9qM36rx3neHg7bD6",
  "key8": "5aLkZPqFY1dLaA9YxtMRLqFJZBa36uFE2hotbspVH93aHXQCLvnYhRaEmroLXwVkzGPM7QE8RWMz7UN82HBhM6o1",
  "key9": "2cyQ2gshQCwLuwbL8QmWDrXqq3oXNkgdcPiign8fwDpbSHDc8PdH6Ndw4vBDcRRhHneiCApdGaDYPkeavmPsJ2oh",
  "key10": "5vjfqemWpFRkevw22HLtfdk7VrzspmGqyo4Ju8V7pfszXsNfKUX3eVmqZgmPNnRjHg4HXja9Xwhzmm7HK6p3BLXz",
  "key11": "37kLqDZcxhrKn2JiGWHGWRo1awjJkY7WD8QAMCajj1NXyoaH8heHujQWnEgZiPK3DxQ6aHSSZoQuxbmsK2S7HrFq",
  "key12": "3Y67s9aV1faz6cXEzUHe7d55v2hJiPMtjtLxi8HY3NV73XSVsgMXNtG75q8nVnE9ytn64qvKVzizrvuMMmw2kcAW",
  "key13": "cqAZKW33ZF5ZPCJ9kdeon818sRznPjXynj5wDrKDJZvVVmWtJtyD31xgKWR9Sn9aDUdgkLpKdu3GZjJENjyHhGt",
  "key14": "C5dVnRFT1dPs1qj1CGhALGnsLyPX1yfWHPWC5cTTE8PfB4zfgcvZ3gkRdAv7F33SZbVALXUXq3iEAv5TB6iMDPf",
  "key15": "5z9pLfYyhUgg2hvtsvzfSrEf8BTdUmg7jdp517BTNDv9Mnz4MgJ6pHdAPbJMiKaAAAfCZMkkJKion1iraLc8sdQu",
  "key16": "34xegUVAMheKQEcYUcoBHp23SJHF3C13NaaVWFsxAqyoM1csFAEdRf29GpR8r86Q2RSCfMQJuDVZtoj8JTo8Fi1q",
  "key17": "AhBhned1B2QdVye73iEfTgoUa2iGAtUrsFZr89LjKBd53hJ1gvF5M46G7dzahq47DDMkJnqembT9jwRCr6eKBG2",
  "key18": "4hyHprS1NxETuXJokEnoh9BHQyT5C1X6VBVHQZdNniVKsqWtXBAQjb9fA1gkdUtnC69FLzNMVSintKsCkm6JUYGQ",
  "key19": "5moSyUEU5AAjoSRwgAsynSYF7sLxJoa14UAQcNSxx1kamPFQ7XEhDxuNhWTynFn3WhQoy8U1WFc4KuCWFJcfRDp6",
  "key20": "2JP81TYTWrRKA3DJL59axqPinvkGonAi65pQYa2Y5PZL3zt5RkukqHSUUqqASa3ycFUEa8Rm54nn6iynYAdWc1zZ",
  "key21": "nUASiDVPaELbWkQ5cdDSswUta84grkEvhZ9dAx8ibyZbfv84azGMNnPBeKeXB6bnHC26oYv5rZZtEEvyPFL3932",
  "key22": "5xf2tPf92j2SCA8LPck9AgSDFZWDeav4VxqeyLd1FDeNh9GnDUXdXHiy3dyz6EtQrHYBNYNw1H3DYUzohMWJHvpp",
  "key23": "4truVcJdZ8WfV6MWSWM8QbmKfHivgwLk11jz57SK9W3qV9AjDAucNTseecGij6kvvgWGLwJdUsu7GbpRpu2bnn8z",
  "key24": "4x4vPf7SrM9ScSgdgC8xhS2NMkTWKKAcy39GF9ngmZASLKdBa1atVMrqf1ggBE9gJ2RAbkWi5dRoX3fYK8CydXzz",
  "key25": "RYEPWab3yR3guU35wqibNgoTQy6aRKzfDGBgoEnHoZn1VbWt1myYmPi5AMi7zUMet9Q936JhTxPyuWrRv8MEu2E",
  "key26": "4rZvyr9tEW7kCuX9MUWyEUjw2k2XeYd1G1wSkNZJYdycHE2ahLb4ASFGYtyKbKH1jaz3GuYrRr4UenhP2mZHDCAY",
  "key27": "338bxTvUiFbkmFR7eiQUny6s7k3KyHEcuBefZYGTrRHjeXS1twpR2jXvJeehu1F8Jvpfq3N6Fe286e1FRrK94wAf",
  "key28": "3QXaWDRKhvhsaUiC7tPTobv3ggSmJTKaEjeP4cVwBA1omkQ1wybE3cRkcxD77AncdhhSs1fzBGnfVYUL8wsb96F9",
  "key29": "2YybvCbXvDHPNckEYC1wErxW2aEoMiEvhEJx8iokx6WN8CSpTxTVupvtqTR33LM9hTBuN7MdyVDGGHsgf8h1mAt7",
  "key30": "5aB7wmrQbQYYozyAixzKL3zBJTPd81JsPtzcrEqmQPWsGNgZ85c6vigfVjENzn1t395TvwMaezFWt4XUNnYe1bqj",
  "key31": "5kANGLALJkoJ8kMZ3pv1kMJatWW64XkKMWcDtnj3jxqu2XiZFz1Xt3TR941Rk4rQEW8c4f4mXyAR3W9B1vqgkLvR",
  "key32": "34nB296MKnjaQrX4PPrzSXWFipFkW4epbdAEQWkPzajXFgbuzt5fKxREwtF5MeZCCmfQJX8sH9CSqjMA2p3dn67g",
  "key33": "3jZ2UY5WQBdRMbBnhFywbtvgjcX7RNponKM7XqGEmvn3WcmoQ3U63K5zZu6hDUyiXG4JMdCdVWDaZou7RnjBYrWB",
  "key34": "b6kN8ohDfFudCvYZ3ctdeJaYX5zCqR3FK7mK2wE7cqGKuHhEHzJ61gkwHKi1yxYjE1XNojDj1ZqzP5REgt7zUjB",
  "key35": "5HCL5sHmqMjDoPtSS5gk1CBsJdQ9eNufAzJiFin7GAzgvxXmghJRzKjjtVexqjAcq4sE9hwqsk3wnVJLLRhGVDon",
  "key36": "xG8T5Z985GgoUHYjFyBLPQyYCgzQsG6rodnXXM35ihjqwpXjsWoPBQ9PfgNmahYRL2wFMb1thCo84g1tpvnFXXx",
  "key37": "64BYrY79qDGgBbvogquaNLqYSyao64A1ioVQRhNRNZkVe6Dm8j56KUxfY7mZq9P8UBqNpUC8swQQXX9LVvcNoUh9",
  "key38": "4yzkTBAzTxKAhCBEQpWM8rQ6D9XZhF8R2Pa7aR53BCtw99uVjTUMKGtxLJhwEQhurTmGb2y2fqQ73gfWr7i725Pt",
  "key39": "2atLMp32ZYoTeEQCLLe33rqwVnatEW75cxhUQe5frd7Ed4H5fKoZTJjgvqrxrzwxPmYWnoivNKJtH1toTz1UwK8"
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
