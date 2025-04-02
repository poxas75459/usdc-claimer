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
    "bLsv2tYB9SNM86WqsREJbqdYpfxuvpEc7HuDxQxQf9ktcvxXoEyntSTf6tujwFRukrMbKhFwixec54opqi4mUok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zGaoTSLG9U2ik4dL6JbKmPoNug2Qrd3HFSZifZZgJpNkwz4ahPdNUw2QAdCK8rCRg2z7Luo1QAFDyx4zS8RkqUQ",
  "key1": "39SamniEhf2VJptpgeuwECws4c3B8ZtjhS9kmSkAY8m81hiny3sAzzv4ek4KPZzJKA3T4mUGab5jr7cKM1YzC6SY",
  "key2": "3QjL8ZMPY49J9xiePrhn1UxVWbUhJXV7tzbXBW5p2jxcsFmCy2NyjurAZpk7WTVEDKHcoY3mfjjezsYsJkyvT66q",
  "key3": "4hqEWznxCzjLR5q2GwZ4YWMkpW4Sqp6T2FmoatsCkTpEgSCdYTxWMgEJWEr8ZHx6bZajuSeqXVK18T9TjbBgnGk1",
  "key4": "2kCHTViqic8CMmip1v8jBBwX7v3AZCv1t1fK5e1VXYUGMgvwiqmbWo2Q2eGtAaZsZyzxVjUjtXuJFR8eSaRb9Lqz",
  "key5": "5cVz2mUhi5u7Bq7BbMPufY6AmdcMMc1vNZ1Kv36fzrqkahTRJYgnJQCy8ABJ72ePFA5fubKSPCS2ZCAPKhHJKoMW",
  "key6": "5oefD6kF6naUwPMaaZ7EMRdN8tdwdpM3FfjbHV5AzNVP6VGACcmY86huE1xKJfRXJAJYQC78Ytn2W7wnGD37F82p",
  "key7": "Yu19Ery8jFQFbqutfNqF8CAkbPevVFSF5qFytRBc3yYjPkRYCPMj8Nyw1hQ3U3eqFqmJKy9f4Jkqp1mxwdUjMkz",
  "key8": "3woXMSkxVjeH9FeEAxKHpXa7aHfxxAVZCXwhKRt9XNnMZoVFMoshNPDWrq4R1gsk4qw2JACiJiBLPbrDYETtnQPR",
  "key9": "2HsBXarDzKgznA1ia2Uf7aYiF7LCsWQPW26mvtJ3XNzLZKLR6JG4Hkrx9d3Xk44aPMCpC89hM2zJJLrTodiSQL55",
  "key10": "4CxbXLhmWSndDtvNdAdYUcyMxSZUyPQZUr146pchkqSA7wHAfkG8pKsFzAidZV1xsptT2rdppYHeGSAXk5YrY1o6",
  "key11": "32xYEH94FYGk8gAmChDhYaLSkoEYWssz1Ctp5ENRVqwyC5iahLEiSLsNRRLmsgUFppSPZ1RuHtHQPCvQ4Vg5HwH1",
  "key12": "4NtwxxPLzxRjaJt1VYXMd8oBvHzX7qddTXvqWrg56328GT7ZPqr7Pijz2Hk6sFeUQWfJ4U7F4ZTTEVfHcqNhG1mJ",
  "key13": "HpqUFtPsPjp1ZJLGEwrS8YU3hoMpCtm45xo2TdYn25A2Z4z6NBNHsSaxSBT5kjF9kLFDJqeDyLY8LLSuH4RuYei",
  "key14": "45tX2PdAqcGGPu9HHxCUctqCaKrdX4R4Bbt7JaCUbMh1D2ewdokyPDPwPCFsnmJFFtX99FFwfgNZffstCEbGBTA9",
  "key15": "3ZPa7UwRiUPuSHEKtRYahSBtNx82ztCEE31WrE9KTs7ZKmmGHVnWuj3DpMSe5AD38Bx7ReMXpwb81LKwoqrHj7dh",
  "key16": "5V8Cf3JWpYacz1KA9Fu8RSQN4G1osZR9c2pvCmGqjum6jRF6PE2Y1D66Uz9iED5nRGomh7frbYKG1Vf2Cgf3BLUW",
  "key17": "ihD7dPzLTgEGzPe33kTRDBrEGf6fEjnEjnfscBVcxinALK8HnRvxWMDvs6Hbgv4oqRySBqfUUAacKZ5jwu4mZjB",
  "key18": "2FSfKHvfcqTRqQbt4eE53emfvbd9oaR2JgKy7S2EzNFuVrLXYZQ71Wu8rQtim3ry2LzKg4LNFs2iNqoLk2NF1SF9",
  "key19": "5LQ6exy96JuQd1mtpheHiXzRitgKogeEKAjBBJ4rKEr2bMC76CLKJb2ykVcXgoTEP2VX4RxSAyYWUGCr6qCvpkvd",
  "key20": "4GNKdZZTRyY6xsuKXQBuYunRvXysnCMNUbKxm11RTDeH45jXuHsTQ2TvFSEbmcP8CMaDSMgZCRBVocv1Xzpvdv5d",
  "key21": "55AaEuFpfbjRRnTNmxBfpYpN7iGsQtv1v1ViYsY4qWv5sA1Hb88Pja5RxzDyHPYAxQuBX8pCWSoLbVQ2VYwf3sNV",
  "key22": "q391DipyZtWqdAqhWghhDq6mx2985G6gGbPFTCP9ZrvSwbihUorBeHW53D18TbNRzxZUa2uQLYy6yHHBchvYge8",
  "key23": "p8sBUtCvfT72F1aSwC7rB8oJ8p8uHyHktDs13MCq229R6tTLMZ76CzgxLXBkvPEwFWKVB9FGt4sACqxB4gUMeWa",
  "key24": "5dAsg6NzHLfW7zhry7EEbhsQCfj3ZvBsovHtwvx8JkaN2cu78vthKY3iyhmsVRgKaEFJ5ymZZFY19CYVZJ3FviYx",
  "key25": "yaS8KFEczyNtSU1xDr77wqC7tJVsuzANipp8mmXreb1zMr5eqFbra2QDyxKjmg9TAtQ4j4mZuyGFmNihyZNtKfF",
  "key26": "51fe6CZuKJMJG35rX8iyzvT5ZtvXjaxsLLHDK2MeipvSFqLf1vMeXfZyocNGkCzrv2LUda8aJTMysDMMnzxc4MaD",
  "key27": "4fPYepycNEtcGdTGGCG3bJC1Nv4nWGpqBLpRCkRKMZr96Fub1iuE7Zyps5GcM6YyXmixW3kesnEoJtZ7r9CRw1rD",
  "key28": "aKcSxwwARzno68GjjyvNQwwBTeqPBZMHGtpfqnQJJcd8nayma6YqPy8yosrzsic7PduFrzdNFYXFWXqwxwbr5Gq",
  "key29": "3TKBcRuNzbVM1ts5JJ7qWjvpViyaqvLKPak5Nky52Xer4ckGreVQGpFW7R9DGR5dudop9PUYfZG6V1hKFEUfzxGh",
  "key30": "4vFvUYL5wA5CwkRjWVd5BRmFNqoZPxasJqmMFHAe4qNzEAndnsGPSAwaA44sC6VbNBhghiJMJv8nsnFLcYGVVkSu",
  "key31": "3zqqaEgXdtP1KrY6R53S4KZxBV3GJ1kp4FDuXFET6Lpz4Pn4kFuqWQjespuhVA7MYT9FTghYbwPoY4jYH7uicooe",
  "key32": "3mCmby4jTqeG1ZJfWtgUVGRrE7XdFSbTiPB81qQA1wWWKVt4BpNNQ5KJVLMmVFaoexjn2ax4iiEtRZnDZL7dhKUs",
  "key33": "RPt7bW6zjuCMjSjCLY1wqR3qxtoh65R18xAc8SMtUT4nkDnY5k8BGx8n9U8PX8HisZEtdSJZ2Qpe9Lr2aivq9jG",
  "key34": "2igmHfVqhtxuTqcwVf9sfszdZdP8qibXzCePoqg7VPudhLfkCQGYTAYz97JLMo5pXoWp5HRWrGYppzLMqVKS4ua6",
  "key35": "qKuhDdZw2tqw4U3iZPuz7EJRApazGAhAhGrfSqng3DztYmHhsNv1KNdBbPCUMRndaTUcRMkT38TGiwDcGdg5BaM",
  "key36": "5haU22v8Xm1Aw94CRnQTCJuJv4thq19iRXTL84GpK9CHwE5h3pdAETHnYKQgP9b2PWCgaMx31FtkfdHCpnfgk6xJ",
  "key37": "4Rxb986Q6x3iHuAASX9ZtZBxs76iLZqh5ugQeHXYrUiN87pLMFjhExx7crigv5St2MzwskNXDTLLF8CKBNrRB3kZ",
  "key38": "4oRk4uoH6KW9aWYecjiSV5yduy1EAFgwsRzhss95CnbakR9AeKHtpjSjS6K3CFfNPoWjoXdq9GrPU3x7ZsUjwezW",
  "key39": "5MnLFH88JPKtHSZm23PkPAFPJY7xBzWcn2W5fMoKD3hohRHfs2ZdcJdupYjd5aThUuYauZkq7bXnzn25d7udv5RP",
  "key40": "2rAXgvUqkwdQLkdgULgJmma7MXZiAc3tPCAkz3DuARL1o5JEkUgEJvHeEvP3rQsRPMCF3v9DpT9yU1oXKzp3FC5a",
  "key41": "2ZPPUQ2YMu9nYUF4eNrwiVfwjTyf9VYkZasaCKjKEEv9Jdkz8hmcTdbRdy4qcW2fZN6MPuesbcBDAXLpfsqCKxVr",
  "key42": "jPVDTQtDtz26Bnk3JRjxyV3zUoSNS4hAMnEetzJ5yLvyeu9R1uuZDovugsnAJEDj3Sbru5cGgyamqyCbeRs6NeM"
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
