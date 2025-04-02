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
    "2UbDruuBuHLEKVxSk8EzJP5oRYTFq6aaahKGb9iqvZRMLWRPCZdh5Hq1K39Z7jn7HcCenWxSUJcgyiRNWHLhVRGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64AuGuGLQn1arqv97ogKaM5RUggWiqamZkrm9yA8PfW4qD3mG35CSqCojkitw6NKzF7Z1sApbVj6MqVAxvdcD1yZ",
  "key1": "4KeKX7sSLFjLR1rQk26RZxgfuE4zBtekBT479ienFqG4Rwn4CCDpUXB1jpWA2nrWNvAuq5pAE4sQ2AafnPLmA4nm",
  "key2": "5mEbvZf6Jz5eGZP13BrwiMBpz1Yp7gvEanh3HQj3gidfVqfZ7r4GyLrEuBxg3WfvRSqmktABaK85TCMkarAejkK4",
  "key3": "2cpL3k46y9k5ggVwRJU32wRDxUTjwYbikGaDDxXa2UjFo31Hbv62etC12gf3yKWxdTcfpHXmE6w1nR4PjoeLa7fb",
  "key4": "5Mikg9xEfesAm1aLsAXa4y8dRKKpyMiAwQVFvtFn5TsKnfWw2no5UPk5BNMCQZc6h4TrH8m23GDk94Nkc6gCyX7o",
  "key5": "2jgvhx49GNrX8ryhnp9ZDt1gTfeFFe1AKcnsU4BdAdyvMn6PqfFGtiCZ8qPr25YePWrbd9xPb67tqjDbE5BGsEVa",
  "key6": "dW9tUtsTbE7wBZWv8HigouxpxVqbz8Q1yhSV3xWq8XMjrWgmjAWvCUtJ7Lb9UBx1Wb1XvZYYrXUyt3ndPXM5sA6",
  "key7": "3WB5xaG7nfmsp8uMYh8Z9b1efS27YnKUGMZDRSz2nCz9emhqm5L7rC4XtGi4kKxqkVisavX1Abcjkdp1rLeoT5xB",
  "key8": "4GdXLP39D9Fj3booGu13cwjxjCe1ZGc1VYeQcuF8QaFxUvGPCmnK4jwHcBUX34QQpSDJvHUUcoTv1cRk4r3RZ5EE",
  "key9": "3hjCFouH5H2taS3vxYpxzP5Trso8gytM54LHuwPbHVp221xT3ohf9CDzVxca3q98UoihqCQqQup5txM6hHR4Y6NT",
  "key10": "AbySNSw3kNjLzBh1xa6fQH9wHxZCLvvtmsYaCp3XJgkQavYxXi3BvwS6WqNR7pjALEPAXAqDJ3weup6FJxw7ijg",
  "key11": "5zT1uvUfxXSbM2JCTk2BH5akL9qeqWXFbbvX2VsV78ts5HcgB1C3XZg5htpwDgnKrY9rpqxMPjRChdx9hyhiDYVa",
  "key12": "3XvFRibNCfVKkna1dtyZrDvV8KfRLDWyn5qrxvBsNWYTuKyCKzacgDxE2mLChvnMLjdUS91ApYcBwBRUZ2byRv5n",
  "key13": "W9uZKSGD1TfCQqGY5DfuLsAW31mfKy5vQVmfpALHh5FP8N9BSqMok41ttF9SoVz3TzZYEMJaPMth3Rgpg6yRemk",
  "key14": "SXrphwxTitkKALY6hsu2dXV74i54gJJSvGmLK68zAaXFozdYxcAszWeAiaWkyGVnbb36YBMY1B3mExg7nd2Xp8P",
  "key15": "239d84Joz2xxQzxSXVHCcJp9s4Dphr3EFJEwxdqeT3rUd4vpbgstqaziMSS8VoEwqP3TRGs6vNmhriTRkSYxzw4q",
  "key16": "56duH62iuWq5bweDin48S7zy2xDbHNrp2EG4WDjdzLbHLdHiKn7aWzrZZPCR7dnss8UPoWN9HEJ3mQPZH3cCP2RB",
  "key17": "2UhkP1K8GmA2LuvsW2xXSKBB5GJahqt9S5bM6zNax34cY4Tpv2wBswibJCHpeg1DdBjSoEkauS9PePuAn7oAg7oc",
  "key18": "5yo9N9f3rjVrSNtaciNqNYjT6G7w8rcQ1A2UU73F33CyvnDKmsQeBLjRHgasudo9snwiAX9fzFW6JC5pvpDNStEA",
  "key19": "R9y2JJm5iuagbbweNtjP3phQTK4bnX6rdvCrCLtPYLsRHDDrzQA7qwXJ8eG3RmdKfNZ4TRxGYFDRnPpAthBHbJS",
  "key20": "aAGaf4sydr3EaVGS9s8mAb5mcvCAbmFQuMmdCnA3XuXnoVMidFWE4U7R7rm31te6MBakotA7dq6LETbPqXQ9suW",
  "key21": "3oqc3Zy8Mxq7A4UHnFB8rLxCBcurtbxsrh3Rkzti6pbLnJR1pDhQFdvTrw75wChkqY41ebwm1TdbFjrJBDBDCNym",
  "key22": "5zVzVeTtTPaktc98Gi4uJ9hdDje1gXxAE8ADX38pKM2bp2sdJiZ764WhsJNFcCtZN7fxtk6cWBNRUreksxgb3nEP",
  "key23": "4HCgHkA5v5ekDYFqfbNh9GqMfTKJvuPTZZHH8DEo6FUR1sPRV6RwFd5bUzRbD8koj2cvTK5qpABYguBMkassvCPL",
  "key24": "4YDqJHWBWnV3kj1uHwutKwwDxTZxcBphVn4UqzAy1fgghQRPy9Ugjm7gpQqrgMzi6oCty5TguM4oznBFRNMYMEj5",
  "key25": "2v5LVfzg8nfawJ5HwqNuMG3q8u2yMRaiDUxvxyVg36wpEc7816hG3M2UAun4ZHLHoKGF5UWhs3PQUmgUUwgqxqzL",
  "key26": "67GXr7wkTxq1BV7kBtXwx1iGBac7xph5HikRb8YPH4LtVv3FhEkvEA1ft2xNR9vLfziFoYGD5XWPdbxCmnKKRWbe",
  "key27": "knkoj2KQhXU3SDrjwD5nftaRgeosNuY3kk1CWqUJLwezwxYEXazJPdDyV2oZ9gJRqDyrg8Civm4ZqM5pZsLZw8A",
  "key28": "3AYEuPCLNajrWz4rYqvMawguhirB2ntfJ8M5F99seMyjmNcisTqq2TXJ5G2fNtWd8dG3AzyyhU4NpR3c9KoR4cfs",
  "key29": "JJc1Qu47FnXpCZLkEXaaUyq3WdyUuk2hf6aRfFauVkQGGvRyB5SuiK3CmWxXeBaneReR8qzMRn6z5ed9b4FWywN",
  "key30": "5tCtP3uVNtRdzxZ2dmN5dGfNwsdeeCg4BUKxNBHTEFbXvEvuFn9aDdcMAvhMFKDmSgwzv6nxoy32bHsdM8UT1Qqb",
  "key31": "2YuMmWbntvAsQiifhfKAWZg5JZHkx1qcGde5J3AuTJraxgrPUE8uSPCY7He9SbwawFxApxMDZ5cmsJ8rxYr2SKU4",
  "key32": "4QgNxVeDvQxcbv4Gczc7vSAdMENRALkefFeGLEVZ11yG9ZGGtRUHYnuZzzXaiWveH8kigTP3pZqxWJq43CH3QRvk",
  "key33": "5ynTVDNv7w83rYMndGa6wuKA27Uz5Uk7oCCRqQik2xK7vCjFL6XkNA9KJcyoC2g3fECxAjsPBLzQ8wx3piZhYdfh",
  "key34": "2bcSaGiNbucHijzZ2VjQw7Sq97cmTmYt1ca4o4ZBYGqXXuTVxhMnGjeXM4FaUTteJNyiQ623CoSHnqhkFDa5kSfc",
  "key35": "5NtKg8BmzpApW1WSdh7D3MccxWQp8jCbS4te966XrEmTWJ6pK1NptuhAbJxfjBpvoryxHrSb9aJnSX2efNoLxjuJ",
  "key36": "2KZuAVXxGpN1V4PxgXvfvwY28aeCyc8Hnoa1N1zoeAqC6nYXyhMuzY5bv3X4FXyhZ7Hm8kJs2tNAYWzXLQisFci1",
  "key37": "ajLskMnacRiqgmcyeTyq24jfpswHppZdNVcSj2Qo4FAoyLmSpiXY2R7fEp3a2guRYkbgNjoyKhf1ewkwxhnnexv",
  "key38": "47MahedzzPfMQgGZgSHzYgsU4fQLEhqV5frox1R6wPDiGAozEKreefWBHuRmL4wVmE4rqUXEztR71U8ueJj7YW7i",
  "key39": "4GZ9SMqKyzBeVSb4oXjs2iyDtTsVufsgDyLD8aR4TktCDxJXBpMHRn8Tx75vc7TJHbAEV8EdtXVMz6YQsc63aYKJ",
  "key40": "3fQzmgjdT56AE46WfD3yRzjVehvxz5oiLdXQ31QHz2MeD7i7CPreWAnt54qXsAgZr7znsDDRCkgRvP2DunP5eNFq"
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
