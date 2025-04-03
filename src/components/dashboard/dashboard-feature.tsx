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
    "2vUGtWUQsdWoHNLd9wJV4fhaM86VnL5YJKq4n8kTbgcBLUWzCf83XbXhV5qpa4f53xaZMt5fCP9nYumCbAuPS72X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sidoUCfXtYAHK6YykkAsu6oVFxsdAmgAVV6Ju4AF5KgksRxPoWk6DgyLDXGWoSAJG1w777UMjLXVT6URbRpdRTW",
  "key1": "4tiR2CDo6csxxiRhohKwZF25fnEq18L6rv2AzNpA5m7jGtXdWV1BqPfraYE1YnN8jJL18y8NtdqPAVgt7bo1sKqc",
  "key2": "39Uk1bvBpqfLkExnWrr3f1PJbBzAqhAnNPbgPRvf4rJbS3MXLwr7USF5BMhZeyS3jMw3tLoAe69MjcBNRpqbXvTf",
  "key3": "4hj6toodiFSPoMQ5zhBjdcRZafLN35PSN1p1MkinJ2mBgwVfgF399R8Y6Da3jg2fDaz91fUuLqENh3m5aWsgAcY",
  "key4": "5EeYJtQe4gk8iuHe3Cxf4zmykjEj7LCMBVYGPrA8JDTRXjHP4bUM3ihjqkVaz2ArgcKQ4KT9VsCB7KTCZhjo7B1w",
  "key5": "5AtFC8iRdbwtdpkz23xYJYPW41WR8KCc1nKLghh8DVHDkyXNk3LoCq5nXtjREKfiuwqrVqVV4XUa5Ehg2ZLpH3k7",
  "key6": "32jjbXxit9gC3hDEN3jYY1kfXyvXeuuRdQec3VQm7Vs54zHBSXqfzuHoYiLXT6CMSAKyJuZDtvkBQmXrphLowPUo",
  "key7": "4knFQ7RWRDJ3oYyQTwCAzpBqPQtdTGhmCfCEPJoiy8B5qwh8kTCUQq6kBHMAjsBsXXqWBYUw9DXucBnTbPZLscyX",
  "key8": "5zy66L3RaCisEq2b8dADEMrMyzhZXP4BbN1kB5hNvguCaUm4wrNoRYfyoKzmn3uBN3QKr8MdJt9eWkRsPZvdUsv3",
  "key9": "5xNCJfB1j2bFiDyqtNe1HAPz2PBzdeg5pxnqiYGqKoeFrvn4UmhpE1mar1iyaxq4pgrZWkGGM8CYqjpVJ3o6zaje",
  "key10": "2hkLvkLPqqQwxzQ3x4H4XH9QqiEBGyjWL8iTUKCB4obSdu6yv3svPcaJdXWP6ybiaX76y5Hz6yG2SF72W8ieY7j5",
  "key11": "x2HPRmnTqhFwfTbtCTYBqDyoLdJX22ZFhNR7CaEwj7euT3infcuezbSdCYUzu8wSgSabzjnA4Fsg8Ep6j5LogYL",
  "key12": "R6wTnojrrzTMLMViRP6nCWdqrD2eLYsKY9RWFVkjgVG55347ytRFxPfHja4B25325TaPZqJECi3TyGajcRtWj6v",
  "key13": "i5kFJjihxgmwNVFHo8AoP5xHPHYoGGhJec3S6WjAapuHmbJXYHmFknJD2wEK4RJApfu7TrieUErHEGh4UY2d2S2",
  "key14": "3eANpoGWZNgfiejrorbEByTMZ4yLHpXByVTUQuvdSA8Gk7XZQXKgzdo13pbfjpuAawdU2QtKUytvH95frqFWXx95",
  "key15": "4gyroxbjzYjewHVqantQ8qnDVp2oH8gRof2moBXfRNNSWcbmNifyV7SzSfhNB8Gkw67y1qAvDhmqWdLzEvKPeVNE",
  "key16": "5AszGmjJ7xavYbJgr5ndEqL3Qbv3yaPUJeVcaV7PUFt1rArYiF5ocxaLEg5qZX29wZDA5kfhhFoXSWByaqw8AT2Z",
  "key17": "3yZznyjsgmAgkivb5PXN3k34A5129FUPazTuPNHsN1ZF9ztTfAsLGsFFqJ89PYwkJpBSwEbbNtQ2VpbF3NR2afqw",
  "key18": "22rwSqe9LJ58bpvhCeSzkNQc3nnu92nm7kCkZLv9WSV5xVvnaB39zX1T4KDPNhQHvzcgGhSkaWKp4QJQiArmydo7",
  "key19": "FFov2pzo4KcWfg25S2Ew2tGRJQDG2RsEg7vFA21DGa48WKh2bjeq4uFhWw9Eo2CAatg1FCswB73mESY9r2cWecX",
  "key20": "5P3FNTcwswjB5rEjeqU9Jfm45vv52SJ9Vp4WXbsPkQXVbD9MWBdRLnNqBHoyn9UqZ9smzHAD5E5qLMv2MzR2f1A1",
  "key21": "2nZpaEqzmtqXRf5dpHuM52LPf75eMjwfRBytcBh3xR2rrFSzwMu9ndM2JYwMzQPNxU8hcDGeeg5gCsN71wRsrsg1",
  "key22": "4BrJQSthhki2ckfUbgSdfnXndeb3ydNTz6eHARncAnAg3LxyKEnMvW4FQC4ZBueu3VdpitgWoAQA2VDBeBfXkb9y",
  "key23": "4DP87QUbnj2RZTSj4EAx5VSspwjAiUi7T4n1wUgwaF7brravT4SSgPEX3MDQnCKCkTYHp66A5Ec6uEkZ6xdpS6sd",
  "key24": "22jXtnxUSFYWQTahLLe59QtxvwVPsbrgZEUFCsFJCesopwsHqKRthBVWGGmwd3NBCJikfFpYHzCGZAdNJjpvhxz5",
  "key25": "5rtcE5mDpRmm4Y6PLMDFx7944XoQT5okp5SvigYJNVrMPB1eTi6TTPFBYuRenCLpk89zpNTnvfKXsAjHJnfCmtAT",
  "key26": "5bWK2geyNZ9dJ5gseFZC33Fpwcg6N4hykZpmm5yizohrqYf7VFTu8jtSLZ6pGXQJMG2ermXok1FHWKyFX1ruXNWE",
  "key27": "4TqR7vkzKxzZZGeB5uqzqFPfE3Fg8yp1GAAPPey8FRfFdXVxtJYfWmvuo8jkB57MNKbTwMzymytrnoW58a43NUpd",
  "key28": "5jVpxFfWDJMkpP9XmLqj6fmxcwksm7so1wURG5eDASzv7g75ePiT3Nht3wJS3Vj3qYPo46v5ZawQgWnJQfhcGACG",
  "key29": "Jx1P4g1bSEKodytru1EqtRvrW5NRJBcivVvYbhiUd9TWByn7YvdzuNGyoV2y2JqynsUQqnmP5VQ9vNPvGVq4Q8J",
  "key30": "5SWSF6ud7LEhuUrg1vgPgqnmdLRZjGowUNNTo7y1WNuvSRcPBc7xZwnGa5td5wsPaNj8hTeF19Frk1UtyFuCa2nA",
  "key31": "tfCfoGrbTB3mieKTGc1CebUxBZeJNeywEBKJvjYBP4kZgnsdZNhYapuEDGMFtB7c1gRYiBjtMzkfmbkwB3jbaJa",
  "key32": "LU22u63iLZ8isrH5gxzMMYmD3K3fDx6fzgt6rZWNZdm5A3qHaYemCxB9U5LcjonaLKrLYedtwQBs53pEDSGtCbW",
  "key33": "2qGf6dMemjYZK9uUdTF4RYBLCo2KrXNizJWs6x4cUdurLN78n2BPYSEmqzPVgHYSZt7muY24BM97XBMCiNDkarxX",
  "key34": "5baiuz8VGoK3wfGkhKRHBALjmHgiEtSQvtMyraM9DLk3816VPqNYFbQS1u7QFTAWPumgsR2vkMdxTb7Jt6whzYXK",
  "key35": "2iinM48hq6NYbsL2SkJYXLEsXzRhzKMJS1x9MA5b8pXR4wZrNkokCzeBedtxvD37trdoo9uVpQ4fYGXSTS4ctoBC",
  "key36": "61rstASU6XafT6k2H6iMYa5UtkUeSdJD61QXQRnAU47e5MPLssS6VQAPDMRDWcQqUciv9Uv4E8FSAcq2fmL5L4Qb",
  "key37": "5wrUKQ3k2ddn2DNKFJxhPGUd7vafBkotP3UE8ZWwKSMSgqW5LaarqSxpEuPKgswZb9hkxPrGoFQdyeyhPZC9RsKx",
  "key38": "4f1y9SPJvamT7zFtBoFyc94XHgQPV6FPP4WK5yx1R9gWem4Prm3PkBzN4pJCx5SGoMjT4Ua3damMw21Y8U7pD2qZ",
  "key39": "5Z4ehYW5u8kGTf9H1Tt5vcu9hRE9PEzmcs8zU7gfqeCrSdtVWLoNkts148kLkumnmNv4LSPnB6dbonE73qFdyzBG",
  "key40": "2TjdM5vXsxm5WG6wgxeq4Mr8aYYL77w2cZWdbfQ6w1hfC7Q5VEekft8w4dTm2LXRaXgkjCPuh7B5kGfDJgvidn4k",
  "key41": "5KZPYqUdZKikW8jmEqcAchciXd2SPpSfzSW51Jr8QUDAjhqfZWacBBaTzxNrF4VuLE1GL8xrguLqqoFCGMLWQXFp",
  "key42": "5MpUn4izVmDSQB3itEAPj6drmRs9HWgub6HSwVKx8m8EsoZA6fLHDCB6aLUrFdvSo4Mk8nD4t4yRMYa7xz8mejmS"
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
