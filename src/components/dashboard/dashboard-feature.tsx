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
    "271pPcTiBPoGE6bNYarXoRpV23zFJYWJWuiuiXKjJYo1fqV1YvccsejBjW7HMqFMRgKNZ66fiZRHeeQtciqeCbkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v2Ekc5PTceMr5q6WjDqcVAVWeCzWST76Fy3Bvp1wbJNVYp9Bw682E2ehi2XK8AtSPU3WTrKCnDJq2mKNfwEWSDN",
  "key1": "55ANgMxz54KCCYBjuKWc6decxDrRpKeCttN1Dtj5bD9GvBxdAEWkYHoeUqTvJJHPC9YiwG55VXwyEtZXrg8V5QWJ",
  "key2": "C9ZKvfVj5cK2r74xAtXAWGkFvSsbkcJuMMAr7hC4H6Y5KpmTVf9oMDmRmEQ4UWDkyQkbqdgLacL2FDzFUpgoKYY",
  "key3": "2mGwBQMbcyqenxK4e9fV4V2BN1CYgra5rsYDgdEv3DNkQdTjqZT7fHsxFm2txJSVZr12bTfJL5j3eE6zVc5wcXzx",
  "key4": "4SQVbfNbv7wCEnUmCRJcbdjhVMLGvrUA7gjs5xk6ydMz5gr1eg5fAC5moCYfu1vyrdqqVYQ1dqH1kPBUkn9mgaFJ",
  "key5": "4xxFCbooAfbRgKeHCfGcrTYCkMaZVgGfC4iAvJf8sX7CLHMj1pJwtwzVbYASLPnU7TNeJacS3HaRphN4kKPW8t66",
  "key6": "5bM1sPRtX6frjz7SjhVPiCk6CWWysyESd5YHhpAB7XpyfmZ9kQo9mGWSdwtEbA87rKjcXGN8EQKbtSHN98uffmFG",
  "key7": "2FaUmPjZBsVnsZNiAmoa2X4Er1WPYwD1aUA2wjZ9uhLhqZHLG7HBMu5qjMv7PJPKobGhhkdCjMQe73bQDroMWRxx",
  "key8": "5QG7XaAMSc5JJL2NpxSbYRutkVBt3qfcUgDWZ67ZLyhhUKmN35Pik4PfvnYdmYUUdiAuGP5GPdUMeMPC3rPseMkX",
  "key9": "578fmGT1Q4cx16tjPHvSmEffwcxohjoQ6RcwLoHVQdr3EornEpza2pdiggrLfmoj5HpxjF7msBBpJz4DhymZa2B5",
  "key10": "5CA1VzKtXbnugnvbSBw7UqrGwxqoqnMmExdVV7xbwyiSwCrHgbqBVZSVE6gk32PoNoLpiZZSTnUJentPhTTsJzyJ",
  "key11": "5WGNT288TLD4f6Hai499vS4RoK7Vt7HFurp8i6oUyGC62bYGZkLKVPtryzZyG24XUmhxSoFVuKZNyFdUFyJETdhv",
  "key12": "5SM5RBvBEWPqkyxcMKi4EhciGGgVe3rGCeHnMdXkhCFTy6G1kCkoxqRarHNsPMzvMRNTjAx6GnJbJer13JRY8nN2",
  "key13": "4yiZcEb8nVpkqfjFHQpe6txa1XHrVoixAKPmwQGZxjyU9PdpiKbS2xDNY6N8aWumFoizmUb99ycUWihs2ca7QkA9",
  "key14": "46AggF1kXWtDNVxQRJDXrkPZpUhYYBGWsLuEmX1p1iodNk9SN1wH5MnB2kicfbryuiKkbU8VZXNcaaEjTFk2eVc2",
  "key15": "4JguSbyuWYZ8beMfAmT57d1hbSwq62X6RVbH3WuFfHaZgof5YRV4V64TxrZXotPgbj91P4y5g7N9E1qSpaR2Uwt9",
  "key16": "jL6Sn22NsjmBefjB5Va1nuXvPmhxDzUAAJRCyCg9YEmTdgYGiRdBYWegtVmRbMNDTPYLXtjBi7SyPgNP9pECuvr",
  "key17": "4PHpMCGYC1YRzm4xYM9X7HkJYP5XoWUymLmCn2bdWph1FQ6typdNsgXxDspvqCkXufHAa3TDDC9kMu92FoJzXc2B",
  "key18": "25QaW9qZ3Cs3sUJDi6aVKVXNzH28YgxDv44cXLcKiF2nssvZxvNej8wPqPgjWsiEzXmNF9gYNqGBbYsJGrzKc1au",
  "key19": "vCPGiR9nPkeruygGvGBmBvkWF4mxmz63uXqSdWK96yo3suwQJySCay6tE1BsQREbzCJWnxePHJaNubzKNCsQLzs",
  "key20": "zhRJbFd8wBB1MZQbuuazDbPNNByv8sJageBMdrQ96rbrrjbr16Jqd8JJxveHi8aRY1ZSuEFSy8UEe93zrZHYeYo",
  "key21": "56Y6qv86Wyp3BLdDT3SqgGVvtWn4cG9PRx5ZWnwgtLqSGdKYqppLSxn1J7X2EdRjGDtQEA9ovDw6B7Xod6aiMTYk",
  "key22": "5DvAVECM5emTBhqJVFvULrMrZMUuboEs7cyex93X31tMKVzh2RAhnRPDnxhp5rawpyxjyW1N8P78w1okZ7o9hBZ5",
  "key23": "5xc12P5J77DXPBHy6NmtRSiZC39HhdKp8mmtdvVRY77vJELH8j6KnPdbZaDueyVA8EDmzY59z5ZPWGPXmBF59dYg",
  "key24": "37VmKGcFqiTRsuQU1TmE7j4Sk2TR5eXWCEd6YK8zKeEGX2AG7PrmfjWq1EFHCzUB75DW1SQz2M7are22Y3jahgNM",
  "key25": "5yWwRaRT1exoBuTcQxiUFRbdpfRHGfC2gKskz4thdH4opPZjwmmSEtwijdUqXeWxz9WfXv5RWs34TGDfXq6Hynyp",
  "key26": "xYgtXoh4ABWzL4y445FykuvCZ5AfxGzct6aafsGATWbZAWbB2sbsct8LxbeahXpYUuj1PApBqvqiKsjHUjm1qrD",
  "key27": "3XZecJHH8MhzJFG7fKbkPgfyR2mFRgaFqW4FSbdjRcTFKdfRDFCHu5CxUVhGRK7WkcgfLbFHZAQqQrNbZ4RKgXbN",
  "key28": "5aPBfEcKUMw2RdmDzWjh1YvszSsCxxxNvLVjewNijXiAESTiRPQNTBPR5Kv3SxgKggmstJxFnArfa7etP5tE6TRQ",
  "key29": "3cwXuCMpvrV3YE8Lysfg1F8eCcgqSjfqSGbPr3Mb9UioiEW3GCaY8WoYRrpUgRDXigaGnS3Kcuqu95QJXXNpW8v8",
  "key30": "AYnuPhZoJAqyuC2S6rgLR5cdF3ftkQVtCqdH1Do4iCgeFSot8rmz4jorQPpkpoEChNJBCtrQ3MwZgc7zcvcvE1T",
  "key31": "5sNjLxtDAziSdE1gzj3LG5EWM55K3NSoCN1SRwzGmURYfz6UhzLcdG3xjHfWQbaNsyf17LNeBHuNxUuLM4d4XB3B",
  "key32": "5YUe9eUxiWsEWxa7gR68Yuqyuj6Hi9PKBZFBBv2LWA4ShG4Wyk2XdqXuoCAukMdX7tH1KS1q3qRwZKUCsyHiV2JB",
  "key33": "2uEM3BKH1wE2YHbkL9RbWzNnbB5WSq4ZtqU3A9KH7T5Je8mEc1diyKPEBspSJmYh1XkPnVyQCXt1sTnFgo8kJQHi",
  "key34": "5QzoCwHgEfCZNPaWUqS8qS5R9UEhpKRaWJumfhzpCsqc6CPtxwxGGRjvSBMWnAdHpbyZ9Xor5CLjSMwvWfJPnuf4",
  "key35": "3hPfk2nf4bJoHAUEabSbyS2YGjfJrU4QdewQn9c5AEBtWwGX3RCQKUzp9fD1XmFrSaRybVgpFwbGepJqW2rtHKpN",
  "key36": "4bMQRxCvn7oqPfodq25fAebHe5KPbHnRmfx7aiE1Zc4vqYLDrdCmpC8pgUMN9oJRmNfcn8TkhhnrU1JHWtCibGVH",
  "key37": "ihAQFBcNVcb5SNwK22F6EHQLUXizcDLVb2qy1sTyj88Lo3PQiHazKqnTy9ghSUfjGPxaF4d2QHbjJsqYL9rBRcr",
  "key38": "3HXdrGboXHq2qewjY7fUQGPtPQJbzBS4DvLMNwXx8wgMpVd8Z7tYskpW5nqCjexteJ7nB5Ch9pyaHRZdN7MJtapA",
  "key39": "5y89UrpiBXFttVykrUcejuxAg5nYduFkPfUbiRuaLM16c6xRTsqw9gFAZ2uUy9y15f8bBo4ANsCv3Gsum8N5pUWV",
  "key40": "4jPupW7hsbnPxhdn3cNhGeXuy7jx72PibtnV5AGeQvLHMTqaPVy6tqfbL9kc4Qen5Luy5sfm4mZ3Sf5SsUVqwyDt",
  "key41": "4CVynB5EynsoZCVDZfAAwGjRMwjDygzKJyRkCv6Xj6S5ZYYBMdBN2FcfM8sWP79StQG3qB5CrGUkPixX1XiK3pu",
  "key42": "4ehxX9UEJqrvNHwbfrmMZ1TkquYqyRjMtz1Zpi6hdVktM96CbRGVPyfdjJsan5RvGfL2FAHq59KdYBYa4LkJXbkY",
  "key43": "2ttB7SsURLiPPhK4yhTiCYSX7Dqs1TjYYrdSFQZ6W6UTCp5o9hm5xfEw35F2GSxsH8MTgi62CtqDAAkxhse6Cgxv",
  "key44": "4hebW9P3vPzRU6q6PWcJuqq1sgAyfeBqAFDMo9EPY6aJd54XVibeQGJJrFsBzGEWVyWtMumfjspeLPcLcChe7BS4",
  "key45": "5QdoQyK946ZBKEh9twMonwMZNKM2Y77kLWQTWqncE6LBLekXZXPf3H2ADzk6mX8tALCRuMn3CqiFNoanMgajYQ1"
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
