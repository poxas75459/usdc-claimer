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
    "2YGaJHY3UeLdASzidsJVqU3XjfztyYo3vcKXmoc6ccDshfbmV4QEsXpWZLf9qN9dAtskgfk7VnzYds9LEQvsPt3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UR6R4Ut8XtkuPgKCCa253KbG43MFrsa3i6Rb1GrBVT6enpPJTyHkPr41GSKngkjVHPL7LN1c3mSFL6gCwnd5h8Y",
  "key1": "5mnQJ7VhKdrVjk6zcF2abo246npPoUcEW7TyXNiBaQZT3Zxw5344cptorJVNYEtKxVaTuHkKGfVh7qSqqA55iN4D",
  "key2": "2DU2YnQGaZpkftWqwLhejachzgob6ojwMBXCvYMpj2Pv77B8S38fuenLZjycDDGKZ7qu4VM9ScQ4ZvMP1sSbp71z",
  "key3": "4AP4H1daBQ4HzU7bN4TzDnmkM2USM9zqFRXEtqvxMk2e4KTwusD2RsUbt7pQ8z6rouUjt6diUx6Ru4MppWGdqtH7",
  "key4": "iSLfJcjKQvtCgPuRNjyHApQppwaQ2Aq4pEhrrTMJmdV6aoHqV5npdXTGjMiehVJf42oV72RYWCcZ1mNXhJDcM5N",
  "key5": "5SZKw4nznp6L6gKyYnp4jZZDn9914Kh61dNagwCaFzqsJX1A2YJYFkRP3659hqD7rkcJTPfmkwA4AuixZx92QgEz",
  "key6": "2K5YwPseo5ccVng9UQfFEoEnK47udbwhf3d9MzZZEArzZm4Noo2diJoav5PzfWcPdWZZGDXXms6PweFXhzmtkvmh",
  "key7": "613pkP2ohQTpxyRbD2kRzcpPcAD1ArzB1iyPfSk6yed2QXSKrZP119xMkDtzFWaoR5ykrpC1Lf82bA6hS1KXe9EN",
  "key8": "5QVn29KMDeoAZx3xSVJk7LMeuiSVMDFShmBnaN6edgwhcAB4axVrr5sdGf8WgFdtaz2axTmDKGzMY6aUrkeisWDz",
  "key9": "TfymqrLAfjsBtYV5gz2Mx55uuDyVWTsNpfFExJZBtpWhsUcHXGR3x94YWe9Q7HzkS22QKZFcGJpG81HPnbiFAGd",
  "key10": "nLAu3rmbMhmAkU6SDb3rZ1UogYn8a8XxZgQJzQQ7aTj85MNuTqoRNnMjNSW5tqZwqhRpN21kWoymZTqPP7GwVPm",
  "key11": "3A1TaabhmPdj8GH2p8mA46bRT9FeDafV5yDYiDBQVjyoxgRkJGdzoRHAjGKTpaR2AZkq3yumQvqSHggCZragQop",
  "key12": "47ckP87bvrqvfgUppj4Tn2yuXgrdAQQiBZzERKnqu52PjNRnXswn6um95p1zw9j5YwbqgJtLQDzuSqXgDoNAU3xx",
  "key13": "5B5sjzGeDzJ33gnWgkej987X76k7jeapPJrxLydDvAiJU1wVaM5mjr21D2Qn98ME5etHkAKC2HAr6hpyoUCZMoW3",
  "key14": "4QtE3cNJHh8hk1b5v1adUZjn8fhhf4SLPgrRbZQGt51kqJUCzxWkhy24tbDGaYWW8FoThjUujtz5mybnCMvrKdBk",
  "key15": "2mBiNWDcjwDrjDuuZZacVMiYrKTXtfKk3jtj16XQaKJ77tj1DNK7bfMnCZaGUGe8Sjdzm1g3hPGKYdggqtLmVJmz",
  "key16": "5qAZrUanWjJuNYTyScQv2K4SpDy26UKtR6sneTexjwvbHYfREuwnZ1YDuaV5NsberiUY67cmLsfJ54ZQHQqGvRQT",
  "key17": "4oyt2s4eQ9p8p9C48m3tBwqWpATGLsrrve3t8gj2NE3NnrfCqx2oBYXaR2aZbz4RSwd2GDRGkHuptnhxzprud6y",
  "key18": "qN89JEReui7csWwE2sSdSvAWPq1vrp6NCkPBavrKYNBGuRVnMc8YydVUUXec61qQCHa8Qu3UgHGrR9eqfB41kG4",
  "key19": "ea962hY6ThmUwkGrgAXuuAsHBGwfNKhnVH3NBFMqMriGCSRyT4WfnMY4AdukqDHpoMAtu9Zdoqepv5XtXCXn2Vt",
  "key20": "5BHQkXHzo2htLRJA6PycRWgJH6jCy5inNmv3eh5bdBVy2eC3LaMUrUNKCGXmru8zc3vXJ7F6uRFX2M41TvEcgDzK",
  "key21": "4gVGAat8bf2WNVgc5U2bnZAku1st1VbrB3EZcw2Nd7GMtRSh1gFZqzEhEnBfquktSGFNT7zvwyD9s2UXBbfxnduk",
  "key22": "254Pfp2f3HMaA2UdFDbgTiWG29kThq2Y679TSF6e2Ms3AnSj9Lw5bdmuB34RJ9m36WFCjivLMZWwSVrAHvFLDEAP",
  "key23": "3sBty8NF6jhyQgS5PicrvYcWwgdXSud6VkBwxSq8VhmtXi73XeDCwxWU4vKYB1tfJGN5EFpdPhnLwmsEMTtSf6sn",
  "key24": "gdxwufrBXQGFibcFkz35MmuKC1X4pq4yfXPka5fwpjVeGcjRcn8B4MeUyanBzTzePqbiyods8ZZBXtysdEEeqzx",
  "key25": "3tFThycThpoT1paFPWzkk6o9224jBewaS1seKqfM2TJvBaeCeTe5MGsRpDJXsDXvihgAPSo8pQ1v2EznUjXu98M9",
  "key26": "o8PFjFhcatjZaP6sPNhJ5285xArkRJpUmY8vkBwVHtaQUa5jvTrUsBmDLNs8fAGmEFwr7BSt1LBQ7c2rmwGbnFs",
  "key27": "5AjbzoSNXj7xS1kDd4ejpJQqNh7yNNUXgodRitF2KZZT5M35sr6Axd3B67gTUax6mfTyNteLQkBHoV7UfMc2W3sL",
  "key28": "KycYk8Z7JHQfAkDPWBQgZDt2q6GrG7QoWtRczXddNDhf1uHPjKshxy4XD76Zv6Kb9Vzgj9neA1kPm6PFqH3DwPk",
  "key29": "4NK2LDqg6Qttvp3rVpZceHfVaUWE3ukeQ7NG7iQ3pT9GtHcAhPAzfGQSoeCiTAuYsdaMTAbs7cRBGhY9V9DSXfiN",
  "key30": "SkUE2tN3TyHRsxDLvdLRvG8vwpsXRDTsTxBMkyFhwJGw3oYDehDtkmFgYPkXA5mSGGsuBtYvfPDvFtLZ8u8tWBX",
  "key31": "3GHxSxnJDHZCe9S6tZw2nD8VJGpezsQs4wDqZbxzcVvhhJdVDnDhKquFyUZNJZSjoWRd6oeGzEkciA7ojHwArNM6",
  "key32": "3u4Q6EtdGvh6p238Z5pCcTzJhnEYt9MfzAX5k9PGhw3UVzqCexBVQmX68MnG21k17Jws5LiE8EJPxnxANMqWgvZW",
  "key33": "3UNksWWRjvFqRUHtXCcebyrvdzyyZ5Vq5YMxiJcQcfxTihTK2adMjhYg9XyxdYa66x1ickGWhpBYQDGE7wqUs7Un",
  "key34": "5m4uaP1dFeFXB9fmcs7vT8MzpfYEKZk8gfLCgmMbYc5hiMxoAm5pLufgeXPR9caBDCV1TKuxnm7zqpVYW4padNsx",
  "key35": "3TYTtJFGyyBiGzeFKkUdAPGYovc9zUhTDLXB9GwCAcNikP6rfVoofujeY3cdGyBRUiL7Jzxhd4ESdRXDuixqx3aq",
  "key36": "2jbMc1k3FyVvG6ViHm4uVPQTNDv12eW5giuR7kvdARwBQs5eEYXCjcqPMS2eT4vrXJjQuWNSy8Yv3nQVhmnb1X5Y",
  "key37": "2AiBvp1LFKYSBEmrysWcTiKu82f5o41WbgneyAHssULAenD89sMFJF95j2a3PFZzXjzN7btEPsMeH2FxCMJGmtev",
  "key38": "4ySVc1x3v2MG9VbuBMnetNtYqUAZFF4frq4ERdkWqKmtFZ89tyqSsAcir8S2ozQMkw1Cci1r44aGjubisRrX7Gam",
  "key39": "5LTpSauwtJrt9uDAzqHaH5pkJ1tbK3AX81v4KLoAxaCuvxXfm9C1R4HdQ11qRpvaDPmFZzVk8Jy3uH2UCz168Byz",
  "key40": "2yACTaJ9pdDMvuJc3cFT9cYgyTtiUguXXNNMm41hjeEfrxcvgq8duWUkKjqoi8F8YUnC4woGkLzd2RbwH3hFuvXt",
  "key41": "5tNWgC8uZxRzfyCZN1heWtMdezLes559ozSXaNcJTJYsTdKCYQPpMWJEiLmwWdSaxwcMLBWiKgn3pJPNwn4GGPpP",
  "key42": "4GP9L8F1aR3h67K3nKR4u5kvcUCJsLdnMqv2QVpPkdvXEy4mtqpr8eW2MPRMrWtDhvHYibANjv367kbthyCQkYog",
  "key43": "45yMmSADnEptWuDL1STBpVWfpDF1ud249m1QKTLb3ZaVWbHuf3cgSHpEzuDcQrVP7Po12tzXytibv9pS6bxWSnnM",
  "key44": "4JFdT7gwLg8TmGHqR2zMHc9suLFiRHTnd5UbrvNo5U3GHZRVktmbbuKwy7hojSRFTaBVwUDeZ2MEfbA2Knf2sPMz",
  "key45": "2LwTfwN6G2KRQBxyqyE862conuPpoxJzBxLvcf4h9uVt7q1dL5gyh8NuKnRKGXKpbc9ArNByacfG851QebkDdCHJ",
  "key46": "5TekwpHvmL6zGJsZtmAabkMLzTVRwTaJCZHw7GYUNA7eoGX9r3zdugWZkiMHdAqPRNuq4QE1sfXf3mNyXaXrdfAz",
  "key47": "Y5Wv4raFfoYQVLxc4QAi43pT4yF3HPwnhDpw25ZLuo4SHyc3aPxCyym7hoNDe5YHt7TxrkMbVch2y8Tieu15sT1",
  "key48": "B97xYDFymtS4oTZYGL4y6JsFoXLRfG8rYFv49mP9rJ33PTWPxyXydmo5byNZQXZNHZExbhE1TbFX85qRv8mhrsY"
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
