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
    "4bG9sshhcch7WEHAwCHBCQTQgt9U7b62Lw7HvFKJqhMX8nd2DNWsKfH3U2SWHZa6faAz713WJnmHmJC1t24pKWHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TuzsHy69VMkCngVz5XtpzSztpuNP9zKpug4FtM38ryo5gVEDyJ7NHdTPYGPo1mEMiQVzZkRKXhj3G1WPSwuCjUm",
  "key1": "2pstpCdTZ2snSE2rPuPA3Dy1QhbYvS88dUWoVQPXxEm2P6N6v3bqnGcnPsaYn3nGEjwetnHAZNnFdxRAM9eKLdEq",
  "key2": "YjrnbinAv9ebuvNxBkdhPYgvkJprde28AhLeHDAbHHmNgUmh3LQpPDhGaFzuDeySK28jvS465w36gsRHtLw5hTB",
  "key3": "5FgSqUYjMmuTucVC6vu6Gp527wKoLjbEZw4YgtaLUj9himb4KeY8X4g6vhjWUZNY6usr18hG7X7oWY2XFBwrhPZq",
  "key4": "zXJnYXL1Dus7dnv61FFAz9LaXzFuatgYaUMogRPyVEwwypfeekW7Xzb9zV1kk2iScuudN51jRRK3BnwnVB6mkfV",
  "key5": "56tZSjcDEzdjKjDzua8R1u5bX8AL1i3QLL2tPss4iXr1ap7DcHYVWM4jhZi46PRWVfwPPyBnzcVPmUrG89ebrZod",
  "key6": "3L4pAVEfALvb5wqHbVBiCU6tAzCLL4iDAc8vGbNoYQT5fdmHP4L4dH4rNbvaXAV7H6QJgfGzPJkki3kTodeoJNnd",
  "key7": "4QKN7mGDvz7ArT9jcyDzJYz8VpjKSDXmDgZNep1gqbJMyPGxfdr9Q8tGTpsUDha8KrRqJGkPzfVgk8mrHYRkhxLW",
  "key8": "4v5TkhVyH2Mv86uiLVTLAHUBSc78yUPpEckrMnuAPUoTcK9px8Pn945VXeZzjCCeUgaevu6BuD6D2wfJi5aqksVV",
  "key9": "8Czx2WZhKW3w2p3tup5j2wBmv3atUWWjMW4bnet9KyLR7cVTnvvJcHACan6xpAuRqspKGweyZ4JdUXCdhxTumoW",
  "key10": "x76S4791m1DicGdqK2sRPjCJLQXiDCf5EhVrbJXBb6WehygWywzgvn3M3o2x6PJF6kp3cKBatBBxydv6owYYaLP",
  "key11": "4FSRbkvogbZD8SZL8M3vzqXowdRKmDy6bLjNRFMChTJZs98pnWknS79Sy3aLnY8YiEBT4LrvXUan5FsUjtbe3oGf",
  "key12": "3tCcjAzkpTyvqHCdZMqaen8PqYR6FnWKww2oXtSV8Q1oAcYnTpaf3hG6Ari1LYzATDgmd3Y7xA29RHRxuoeZ1ixG",
  "key13": "3aX211wrRpuEtCuLYkaw1WddSfnD4FaaYEAVfEN6qGyyXjCQpQgjYZK6c93idVgCMLdAQpDuvoZDhUhS3E1v1ZAC",
  "key14": "5tqCcZJ8P1NZ7tBoVTDcH7XyMiSzcaJMHXuz4og68YxtqUTMLCNxCQMYGBzwL3yHqRtFmXSyMfQ8iGiDt9TGW99c",
  "key15": "3BhVhEszLyer8ELnS7ZVJaBZmmWQwLUKLELkbfZAdnrqg5rPm5ck9U7pNQCmYhhJQHPDAaRRewtaM6eYwyC2TFEy",
  "key16": "57hwRCQPhCaPbkaRrSEmUmXZxS9UcLP65fkrjnJYJ6LeuxMDYcV8tosnLBtfXixSoLHXJ1QqiJLccVuaVxWTWkP6",
  "key17": "hxDvttxLbSMAyX4SJ3APm5u1vhofwMxoKDinXEgjxFuw39k7H2bbSCo7WB9Qhfh5pn2GAYvkuibqdPJcFwxQMaH",
  "key18": "2dLwHfiZqrywDZaBXBGzdhRhSthvUToUbtvjk3HkZD3sMQqMdX5EDNEKFPAMSb8bS9uZC5LoNVx9iZZFbS1ALD9c",
  "key19": "5nAVdcXKDzrsgt7Y2J47j5kRenD7SRZh2dDbh6a3Zr8NM2CHbcW9FCnywCSUvjmo7ELRATgYRonmqqAdANTbFdCj",
  "key20": "fJHLgSoqfvRrnA3F2vHJwyny9FVqjWyZCGTVQzTtkr6vAASHGYmqStGZHBopMg5HmgyBCFc7ubEPjyW16yduVMX",
  "key21": "492w9Xr6AxoNG5DnHKic5kqcsQ6SwuKNN87qRTNUv2ULyBER2tYZqtokKh4qqDKb4DPYYr61Fwg4Ci1sFca1StKt",
  "key22": "5quCbRgmGksG61Y8cYW1HwuxdHXTHhHjc7tJBygvC63B5gLY4Q7x79pR8ReA5TRd9jjRDYsscciF4WcQNpfEZwWT",
  "key23": "217VTKYsiAGTyto2j1nxxgQRPpVmArVmsynvoEj4XayDfjWh4iLDdSBw95wg7HtFHqDWAGykRtfrmDwXURTuXysF",
  "key24": "5goUh9HexdtYZuKPEwsfLYEbyhTZNve7vGbocVESxBRYxj12HBduVYpRvGgg1iKniwnz6jJJfLA5NFezfJPugQNX",
  "key25": "mQK6W6aeBVFiofUkWyqe3bSnkSXrTfC9uoMzDL3BYXGMT6s7wjvjKqPz9z7ZpsMdy5c3t7GN2bkaH51qjTG2Nw5",
  "key26": "5NvCiXv2999fnRxgPfbXu425PyT38XTJ55uvYnU5fJ13eRVnFerCrEkAnFCGaNv17xAQebxN6EotYnqd6JYYKFh9",
  "key27": "3XoLt8jkpJc7UmU3hEjVrxnWEoFnvhrKPouK99ojZA68fWdmJaHGhsuVWL7jCv1bMXk54DrEDU35U8WkyetKf7vR",
  "key28": "5aqfmnbP2T7xWvokpvKzUMcgZH1755Pi29J3dsx8aPkA4Sw8hozyRnpZwEcQoKibT3oCGw2nysgaZA6JdGCwHbjV",
  "key29": "4nhRw7FSowg3bV6Lw3rEcctBKXpicN2uT3quaHUL7dguznJx7zdkHUSkVNhj1hBgXWM99AMLbacP7MYhYF4ZsRgM",
  "key30": "2AamD5pVGns9B2n2hz5N62rx4LJ885N5X14zxFMtwVYZ9W61Hnz3i4ZArXsEb6KoBkroQgF7JFQQ6YQjhmnSxn2i",
  "key31": "JgEmM2NzuC4uXWV1VVNELxGs5xduXXpFERzcoujxNERZzwiDK8BcEPzcuriTtXjY9FHL6EzzBargqsKuzf58LLT",
  "key32": "2ZiDiwkkvUmCRd8syh73DiZ6eEXJPC8FF7gdG5UMKaL8YnS4HRscHbaR9f2XkBYytXbpmw8DKGh7fxs7LyCb1hU2",
  "key33": "5B53HazjKhpRuotifCkW4qX2iGxSK1Y9SyEgwFyM3bFejQsXjiXX2dzUJzv2B1gUHqxg5eDxVdXvB3dhUkhSo8Uk",
  "key34": "xZYRwhE9QsTgyyTWdykmeYB1UeGaeAXYSKRZWn7B9pmezZbMNKhSi4kzBMK54shrMwVaz9J2c3k98M3dTzdX4UW",
  "key35": "3ec24o7JqWdtSktJ3hh64jsrc3mJdf7cXX5jLQUswNKEq653mut7bVokJavTQRCFZP1SFDAHGBHNWQTuLSUWezFi",
  "key36": "2MDRzs7sdx2GuAnDmvhmxiuV3spebruMGAhUHReLnathhtccd8KDWXNe7eYRxB19iBvFFnEE7uRuqwcQZDrJqK6U",
  "key37": "2uuBA9of7Tj4mqTGUoBUoiRRdV1SpCUhtiR3HN8bo55cVkXayWYAvfLAkMZLgDKJ3V63aa9RSX8EjAeCNHp47sh5",
  "key38": "4UF4zkiw75P6yk9VPrUtoFnFXce8n9C4JkuWNbrsUSH75LDMai4bWTv64wd2oQXmgXnzBGbiYBDnxULRTGeMhkmW",
  "key39": "cSi5B1dDrnZSg1hVqNk2a2Dj2ELL7hZ8Ty9jwcvyaPG6byz9S3UBzUYbEvYB9yM7GPuh3JBKrzv2eQDPweu1KpV",
  "key40": "2MrtHNkWC8vqwppos6AiGL3KmuSnXgkNV4Vu8eRBzY78gY1ciTM1DnnSE8Wocbs7wzKdx5ePpBCDbb9ULAWRPHVU",
  "key41": "3X3LPoy85VzbtLnFQ2qmqudf3HRUYaxFaVPJUD1tFrjPpoidYQz3GAZG8NLYM84XyyfKL92x9yP5aMv1N84WgNSA",
  "key42": "3FXPNdayUd3u3FX2z45xt15wty4nWe71UoFEGAhWSDmpjnoH1hy6zWzyLvTXMwydEW8JGq3kE9RK5gp5eK3BS26n",
  "key43": "27QeUU84t2pQetBjkAEVgtfRKduVoUDRWHNQjB93WVo1wA5tC55Ka5EfxhAMLMfDHPoP2nN299CXa7thuCJLuDiF"
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
