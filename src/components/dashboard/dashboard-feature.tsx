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
    "4WmD3FvTD5q49rXi6rPp56hZiAj6BigtuHig8KdfXE7mGyBWyXpzmygEThT2cyc5Jnw2wgwWTdMmcUqtKZiCfpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ByFj4xm7LjaSppSus55jQ8FVJm1A7M4wZ1kPvwVaAT6bY3P4CJqCH1Zht8zmfVkCEbS8i4k17ZBmUg8X9XrqbhQ",
  "key1": "2avGaPvZeYTMyiwimWkhjcbx3iwNnRmkzFqLXKgTyKWvkEgk3mPgBiz1MTzSCxe2j1JTj7mBQEhuGt41SL37PtXm",
  "key2": "3Ndiem44xhyyykRR5xSFazwHsgs9LQJWZbWvSnirBkANKDKLemhvGjuSsE5JbSZvKrZKHwgxF6kBKEhtHc3fXtLE",
  "key3": "evgPNNbbk6Dbub74ZAbHSaEuwSsHwk92bNWKJnW5BEdLxM3RTdgjD6o6sbdyqWbJRvawPBsL343W7kxCV77fdpB",
  "key4": "5oMoBiDptNe2mMAJZF8wojVPEmdGxBqiAkbcbzWgdNfi1XhqdL3wKPS8g9VZvqf3szAGC6ajAm43dR2r5P5s7vhH",
  "key5": "4tzuNeuwafyKbmYQgQPTxpu76RTtCJwfkTz18FQZHpGxy4FSfV5v1L4SubV969eCj6eHFsT7iB2sfPrgJk9KkQoz",
  "key6": "5Bz2AarTDFngk83VGxWRfdQ1UizZK8jyw8DgrgLSXP7CG7xCPC7h5aZdoNemScg5mzFDEooDrUCEGxuvdwH4WcYg",
  "key7": "5Z2uHnprGxtJk5kJ9rw8nRzvzbsEuhxUbp9Xmah8NfsKFv6Aj5tyK2uyjoccee5UdaBZfYLHWP3yN14cgAmNxdCX",
  "key8": "4aQn35gDcRb3DaMrQu32ztmHy59RH9XAjm72QVCe6SrimKLSRWo8kLgkWpB8DEwbtho4HNWGXUARdyFxnthTYp9N",
  "key9": "2k23Ym5mh2n11LYH8zgbt34HAXGi4Mrbmemva5Yq1CmqiHcTNAGnrk3766KH8wsgzCJ4ChXggbEBaPfyE5uxsdEQ",
  "key10": "AkTgnSiZEtCDaLHAwx2SAHZBk1bU81bQwkLDJjGc2GoZ4Ta7MYGFRDP8L7LosxfJbV3iee8GbrS2AKiSHUtSS1X",
  "key11": "H2QTDKUbFCZXx77aYAGqRvA27Zm2VqM5fXGdciUir3wfPr2MSxvNWcHsYuEdt4SuxEEyv65R7NbAiPG846oZyVH",
  "key12": "LMuAKVEUDmhorrz87VcCgobBS8kHTu8cYjfkDbXwVbvdEhWbE84KTaGLZfQfcDKMr75siU2WgHFcLfLBeaqT2p6",
  "key13": "42XdP9ApQeFoi1VzVYYt9njcfCVz4oqm5cqmvBjMWW6Thev85UgHncvyAoU8bP4G32EM5ZdZuW5NWwBggQWKqzri",
  "key14": "3yfE6ookm63bdixX3ZomvW8SFFvPFHYnGyuv6kk2Wq5jzeAUUnfa7SD9TA8a91TUiZsM8UCpAQ68u63aR3JdL6it",
  "key15": "4wHe4pgP5p69XMUG4hCSaULgnY56zyPNDd31udgqAmTTyuaJcieTf9UgLsnUJwqrBGn7UAQ6smk2rGPgbxFfCuzU",
  "key16": "4pwmybjjFWJ8nzqG8qizBnDHU6ZDnsugQf42sPPAD7bBLbiqgibZM6EwW1wkdJieKqFveZJzbVKcLgfAiAjARWj7",
  "key17": "RzVJG4Hi1SmDuuWMom26gPBoZYucAPZr91nrLCEtzkDNZc1mCDktLBo2SeD3qb2Qh1M1Sxfjm621pbadxKBsz1G",
  "key18": "ABgZrSEtqDtGcGhhxhwLWxm2bYEcg3PfMh9hbrK11KK8syMAYQqpyAq27ABUqUr7bEspzgxhpNCEtQKQZdXHAj2",
  "key19": "4DZ4HXyBXP6pDizyL3N6LYbpd1jN5nbHJwcxqTPBNrWdHeNWdXiWp49coHpGt4jesH5JXpjeehXtzLpvvceonr5x",
  "key20": "41YrruB7kRzTm2AkEwYhoGrxWgSne9aUC9qwpRFsJt6FoLHnfQvniBMKsoJogPTYs4u6dXJm3uywwEuE7trvPGej",
  "key21": "3e86wmZAcSQZPqcgcPDBaV1Udt8LayKT6wsPAqyAXi5x9nrbnWQ4coT256S6s9R3KNfZmfwfkknYoEX4jSkUCs9n",
  "key22": "rxd47ww7YdNpzwSyu6HPFNZXL414ULhKJQNGPb3FEt9dQKD8AxXsG1fteHaMHdVcs8xnTzxtMCtm9GssmEPNSyM",
  "key23": "6jzmdGKyzt4SeQqC3MvEDCTpkKVGRpiPico9daZmL9yWMGE3Z91c9g9hY3ory51KMYDmWo9DTZn1dpnsycsypW5",
  "key24": "3U7VgoMKTvhVx7RWmqKwWUpHrVpe8GVbR2k5wXVBMpb5xqDs5o6EheY4LJf9EdP4ujprAhBMAGjor29mVFaKLmzc",
  "key25": "ctGHU1vzgYkwp8sFudGqtC9gihbbETQjsBBu1cbBZ7NZV4nQ63gTcXdoU2uL1AQ7JtDuMQT7KhK1jvaUwsEMrhx",
  "key26": "agzB2obk3syH9T4Uf72NXLV4j6zLpPoLi4TpP8Mx7HEc4LnDD3scqJa52dwVkGnPXeWEMSDs4HYU23HZGh67Mxk",
  "key27": "5fP3p1ym4pPRQZVA6nZjrv2y1k3jnunvGrcCh6RB1YCuhK7iwduUQZ1ntt7efzekExdUST9vok8Bo9RQsWhqWUrp",
  "key28": "3hsgwrGTrkzdLPV3YKyB8pY5sBPjTYmMSQR9QCZy4nMsyBuvszoGAssmamYeS57xX6GByo8qAiPP1EBkTAjtCYZX",
  "key29": "9RjUrZHiNRZYkhXqFEgjn817iR6SKbdJPt77xHzczjC98dYATMAJWNeCsdAcAYj5CPGRSzy62Njtak8YU7dix9h",
  "key30": "5SWNWc16YHsjRGYSMfMdGZAcje7bWVfcA1TByZxkDNKR4GEzVVSfRzcZm5XppmKLmtSJVMymV7t849Qd8ShtwmW",
  "key31": "1ZKSSFLRCLbZyiR5DdkojV2owVGK9eCogmS4CR9b1fHFSpv93roiLnUzwhTJDNsyiSoETp9wnxTerRq11JAvUdT",
  "key32": "4Bqotm7vUG2HMLC4vZXKwSHqEMJpDV8BF2wAAvh4utLXsfKWXhSYoabz6vpyi6uc16CDZCZrR2imeyECzEkzdZe2",
  "key33": "5e67UptNvX3X6vg9kQBagPcc6XG4ReSn128fsFTJBSD3zcwZXcr5FPVa3gchkKvShqQGZh4CNX1hrSjuxXCK3XQ3",
  "key34": "3ufhDfLaooa2jDrXYVFUE8aqj56Pgyw5G8nj2FJz8JX7YSsdsQZ4MkDNV1DsUu59eQfhQCU8sNPDsH8zdfZDYdKs",
  "key35": "4fxPoBQA33D9HdXW1MRqphsfY1PgBCFihhxKHNn6Twr4U8Dpd851kTmH27MQ3xg6xcZmN5Nge51vUzX6GRff8r6s",
  "key36": "4ey1yvxEvptZjVqmto8hJMLUtPue9UujJn6PTG7YnP2rm2gKHrmnk7gsLxLXSxTXX8b935oBzsZq9bNfkHYZC5QK",
  "key37": "3uVyFKTQv5t5h2vcJbRN7KAaH6UF6xrFjsdMQwScjsyogkUQTfSWGLrzLp91tq8nAaWDYB7Ptz2diBtt75dMoKS4",
  "key38": "56yjNEpjAB3s7nnfdpXQ5up43wpsFFqysBsVzEcq1uAwyZPD7hidkawAbe2kyGZXiVBNtR8YH9vHQpjk4bSgWJ97"
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
