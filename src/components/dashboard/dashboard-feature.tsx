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
    "2kk5wyvNcgCR33eGmQ34gzDjs39yoFM6PyXiK8NLz9Cm8DbDzfKKFWtiKSXq7kgLHpHVq3UtffT7ZUJenWy6G74p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o8vdBCqoZgojnLfvBqYkqSg5rC2c6yTJdSn1Gd2FBNLb7pvzKxwjo96pnZmCNuJpntqcU1J93UQL9zQvTBkKs2K",
  "key1": "38gPTM4gTaKYnHdDjb8F8vTR3ZAouRhAfLqxN7hR1KWJs4qKMXCzku57Q3S6HrWx5wki9n2hBG4TCz4bwft6CJdj",
  "key2": "3AxP7EFNNoniNQ7D2haxCq1tjW8uWTY18htspe2YTzQt8hrxgrtj1tw9hhoWJcPDthS9zX4QbKozx6XJ2wxJyEiz",
  "key3": "37ntx8NCzMzHCn2oVW4Gje9odhmujYhcGseMDUb6AbxDyywVn5xzcQUnaSMrnC1f9QNXu1Dc5p3CrNCCENCtuJRX",
  "key4": "2jYux5sbtCTHCRKYpjN92yHbsinB4WkLs2yb94Hd7fcsqeVfGnjuPQU3crmuajwGRaUE4cS6Sf31hhTfza3fDcHH",
  "key5": "5dmyNvMCqNFsQUnhBiRaeKqbUHxPQVUK2U9JzbWUrrCPUr4RCETgo6xazj5rUWULRktTEk9Vr77tEkVz1qVbNhzy",
  "key6": "3r1VVFtEwqTYmmKLRvon3SCKwFDPa6Mg1HHPWPknpurqvN7WiLdwwYBwmr1UW95VuAap86qtMAPcV6i6StPhnwMt",
  "key7": "2MrryvME1jCuEUv15UXoeFg1BoKu4XZUJ171oMzhipRz9aPdmXYenNZD6Z9d9gXPEvbsTyGvUuQzSucDbr8qfTJZ",
  "key8": "2ULsGQQbDVBd1vWZgzaDPXhWWNaczB9DhLqB2XadQsoZFaBLTYsJzZgWGT22PUJRAvUbfV1mx8LNG6ehLJK3HY3s",
  "key9": "BXH42ms7dJwAELjN91qSfHwVNbHJj5U7WqHkKa1x8qeSEZc4MtRWJmZBe8gTs5wNEVVHUEhZj4NXLx6ZknsLaBy",
  "key10": "5RmZcsfKrD6V3Bgj8yxxKYThBwwWR6ZYYTZdqzGGDuTSwgpFWcygBknqeVUzydT3jpXkEG4SZoNeHDSnDTcpKpss",
  "key11": "VEoiYi3NPT2Pi8uDb1LbLvHfafxpq4vdC1EPNNCmDJk5gBCGy4j8Meuwk2CBRWMvPkS3q88fg7tcmWqn38yWND7",
  "key12": "4u8YkduNdVWNF54632BoKzCtEdLw2zFc6D4frXVzWEaM4RWx5S3bFvw1GpZ5DMqJNicanmsAZodwGJDCp3avK6L6",
  "key13": "RbS4JaPAXpWHPbYW7xzyA1aLedNCtFiN2ESsoqp3EovkwHpZUWdpSS21WMcXQR2Vk679XQV6mNg7fZSJcHkhMnH",
  "key14": "4Nz7mniLR4NdyHvwSHYfBEZbXRW53HapBxYm6cRBwY2iRJw4gmxjTfu7XDpuyhn2aCu6YyvZUQMLhqg3Jz4Grt4S",
  "key15": "5yPgAsnpNAMBxVA65F3dQgGYCsPAhPRJvXAmTMcczj6taaAa7eSR3c1gz1JJRtPLRwc3HsM3T4wcSTavHAt6b3eR",
  "key16": "5JzBqJB92YW2r2nkk7Uw4itCS2Z1yLGWx3Uhs6PnGv7wnGinFEWVL5CeZJbpBEgKNKog6z59auLNtSUwuheJvDZd",
  "key17": "5NVMPJuMv1vHticSgEsQ2yWLKQiT6GnRaPGq58Cyr28utUmYMxubqJaqssQwdYmVkhSeG6M9naSjoc9Hj4eTMi41",
  "key18": "3VAXdfN1L61B875PykkUkUTz4Jr6bGaznsy7PeSVDY7EGhR12X1eDjfjj7s5FFbpmGtoBJch7ea4SPxQUenNgr5S",
  "key19": "3RQhruMjqbidUAUGpN6251o8ca3pwYSTNx94k4bfjWubVzNRqFnFgtc86k2Ju5gMZGgfESbdP1CLBHKZ6JeQ7VMV",
  "key20": "4ix5ws3EHeqzZmo7bww9iqq8ZoRHQDmZRwpgJ8LT7JwwNP5Udgr3VLxzXGxVGVK2MvgTp7pLwHx5XBDRyLU7Wefp",
  "key21": "3L3XdpEuHU4BVPGJRhNgigSYutc1NxsUiozAV4jS2MChjrZBsdyjvmJrr4z17RPWwzW3csMpSWsShnK6Y9zEjtw9",
  "key22": "2X9Smsr4dHrVr1ZreTfzHwmBnZjip9Vj5nSWxkCTZM2e4h8hUUfgQgVFfhjrEbRQmnqYk4pKoz5RcsoKexpBVJKW",
  "key23": "mDn5XsBkZUwuZXHX5D84yiCgMGHJjV82sPpW5ZRuFTG3ouBWbHaEia7Coj21fxLw1P9QUPK7yaTMPWV9r3q2FMk",
  "key24": "5EKagW8EjWUbxp4KAbcosGYNTpAiL71gBsq7o3JtJegEMdh7Ck8b2kJxHw86qC6SoHHFqgtT27PKroVGYbypXoMF",
  "key25": "436hjTQqjEeUt9h1ugyAxc6rV42PoXifbP44zGcUF3srzPFqALzwC97zon7wkQPbUh5z981wYqLkAgPrdkwyCRgi",
  "key26": "4rUxxGPq7Ge6W8WDAkjRBvtb29qtHVbrANkawMfLFjzZrGmCCvwY9bEDoNvEQLAShbX4TyQ328qCRZe9qiasjeA7",
  "key27": "32tNXZp6vMDpd5MfmP6KDTjZMypUBZ41MSZtb8tHXsppHygmHT71JjbnKxydNoULgnzV9We5JBoowMz5Rf7qYbun",
  "key28": "2DVu5QvZCrmq4tcdWuj8bVhTedLFcyyD3TKQtuZxuKAnp3mJfRSNttXzYDYG1k2bzXJBjzPFEwszs1T4r4UJ9rRb",
  "key29": "UAv6axZtr9V2We8AGcmuyzit16GT99D8D4xCJwCVSxYyXE9JjRwxjFEgfmTHKuUMZyoYr7FTiqWeMBzUdP9yZFo",
  "key30": "4vi8grnfErLDQQhYj6xBmZoSzjGR4NynZmvEtGnfYpzTk76ntjE7hHyRLHKb88UDEmDZpKDZSBK9wjgGaysXHFQG",
  "key31": "47ppnEP6tEiy8LNuahynufB9Q8PLUH3YB8yvGE4AsPcQ8dKBm6rQ4ahGh7wuDG3bU6fJ66e5rXbDGHwG43zgGJAh",
  "key32": "58oBXpsrq2xwaUoUJid2XXJRKNJ3iGgoPyKmnHCSJhMy9XneRwEnqhBGHn58hjHZihk71AQvSjLf2qiu3yXtE9HX",
  "key33": "5jZDV6nnpQRCt2fjPMFmVwWks9T76bBzHYDAPJqXo4VeXq1nLtCNrvvtb8jtjh1ReZnMMsCT5k1LWSwsNqt2eAHh",
  "key34": "5iyv4ZB9DnRA2a1R1Y7otP279gLAXnF4GeANN3obHhWJ5M2o3u8AsmDqEWhDmAW2MLWG6LCqr8e4F1hs16zg11A1",
  "key35": "67VwrWGsQiJoiU2Y7EZ96eQNMHu1kd8G7arJY2x5K1Wt9wLWtUyzGU5ymQ7rBey1BdJ26uzfYXgSfeZQHZwrFKWb",
  "key36": "WuxTVqBcb7sfdqC8vU9KXz32CASzWo6xcpKdAEp6h3QAVgVYiZRsJeCsZkJUKKaHA9UHXBvkzoLZ8kWxGPGVCnn",
  "key37": "2djvnXLgN3bGHZuNmzgUYca75ABRrd4QqEXtpra71Up9LzgvwkkSngbnGbuhv4a6ekNJrNfkMx6wiXnjAc8FLgED",
  "key38": "4MJsqFxx12q4183x2AHbu6Ad8tVSvpdvkVkRR5rNJDJVQQJZMSxREhH8LcRNcLUw3DSbcr5HuxiYA28WxLqHufD2",
  "key39": "kuxwsb2ocTRvnXMsjCrH4NcpcGcTpi5kHHjeo8Fr13kQTZZAgzTpyph6X2NQurA1pAhmmEXApdKniTYgwdAVniY",
  "key40": "4HuzMc9eqPPbF1f1PpfePSquAR3szZCjv9oZY82Uwuqq3BqyKgwasb9qwYSJpi2raXa2cNLw2xVrv5WjiTYRUuvd",
  "key41": "2hYC1oY7siVYwV8ucnpUPutVYWezDKQokvxbGfFfGecapBx7fKZKESUBCffGYeEJTxPsoF4sPpEjFSv97c9F1M4D"
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
