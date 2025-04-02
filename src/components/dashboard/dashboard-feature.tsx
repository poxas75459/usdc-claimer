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
    "xFtVyRVXdDLbSBU7va7JgwtyNE5QckADfs4jT3XTFPFJTab2eZ83ktKvJ9EabcP8m8SP3SPSuQdBwUNeKdQUgMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ufonw7AkDJr6d7z3X6K1dztMThe17p3NuPs7QJATZQWJrDGLoo7LRVkib2Aa2wwhbEnaPAYQde6L1ZNzxyiypxR",
  "key1": "2HG5zVU3sJcR1HRiGiyJgKfax9SkVG2fVuL7RabvwcPZZjQktH9ykvRsdZBy9Xu1WCH7RUnR5F3W6nYt3s2tbPVo",
  "key2": "4JKe927WUNRPj2cQmGdCqrBfjQFqk8AwyuyrT5T1Mom9MxrnvE6mQ9tdiP6XTXpB6EmJwrpUfSdDG5k2azvMrVQV",
  "key3": "4PwZhiD7T4Seew6TGt7CT1N5jCnTmzArcS952DvRvniAz2ek644j7idDe9NWPKSg5mXTnT3uXbPR6MvzbFo1hqYw",
  "key4": "3wKQZxVUuyrNTCZAA5dqGPGZDSJsXfQpSpk9wLxC4MfJHmbULBatYp12evKKVfEo23Szmt6VC5erK7Y5nVnCgYxg",
  "key5": "4QK1BgjAwTLahRhx57L616hB9T1SfU5wRgj5HoSMy5FSDKY92xsYw55CUY3iXZbtvL46bkceuxHYW63QrQBkdq2J",
  "key6": "3pHph8tQnLef5VoYZP68VkhezvyYvZ5J5g7X1MepAGMr6Xq35KU7xW6WmLPf3KAH6LTAWi7FqkTFBoqtX7vsDAPd",
  "key7": "44bWCu1fX5VYDiE4DFoVbvnKVfz7DH7W7y5aar6sYxf6UASFn8EFeZstTtiwAViAfKTXDkUc6FzSLhNJTWGeNjTT",
  "key8": "39ZSsh5Wij9ZJv7aUNUBkA1nUQC1og7fmXXj7TiNzTSavPb4DSmPsNfYCkbq3ZSqbkqzF4SzULjP3UYCbTMPqHMz",
  "key9": "492mUFi7HFdcujdCNqqrtAGWo3gVpoKr9QTSQWnF1HZJCeKseXTuF8hYPSumJJMsbM8zHuULboHoA5HH6Fw7C8yV",
  "key10": "2kQQ1mN9vvKUE3mWWdJvAdKFbxCFi5wJcvXHp8bgc6pi2k72zXVuR48xXvxVscDb5PfRuprwhYRmULjkgLsRNLwt",
  "key11": "3yLqrpPuCGcjKFvWtZduFWGfkZKASrwXdLJjPAuTG8U5LRf6HHzkvKe1xpjSGvbY1ir1KbL3m6Tx8B35XcTsGUyh",
  "key12": "2vqhaFtmvMwzPangRLYXmC5CswVEsJnVufMfSYtA1MC8yCpaPhBLEU57bRXnoj388ynctduvMDfjzVQo2bRNGFk9",
  "key13": "5BCq4wxGtGSriJxenMjm3FxH5TyV72mZQscEh9K73ACGEJAnQ8V4ZY6LgJL2UpqRmmeVnLG6YbVJQkGSaFHAkcpJ",
  "key14": "4L5xrqPGobf76Nhz2ATUVurZbHjaVNzzM9AYVZ78K64yfk7mcEsLmGCBT9yNdhK68v5VVyCoTvShuuRPWeHYuRvr",
  "key15": "5kqh7rCnCpqq4nDSsAo7YG5anQYSTjdJa1b6LhWyuxFdWUqTTv5CeaC5hzbPdLpvttRpAL8nZNhZPRj7vYC1nygq",
  "key16": "2NNc7JzxZt27cnF5YbbRKKKBrSqWaMVfPuYocYSBcbf1SMyyFkbpZNGH3DguGZuvyChRPp5EzoiVyxziwNPBSbwf",
  "key17": "2Tge4FbdBDpdycHGPFDT4qoqe7CpHUarmaHBj8tdHHoFm3e3kjbexmYC5uk35dyCwXqPAMHyKVxWzbvJ4byvAQeu",
  "key18": "PMVRbqAo1R5SR8tU9evjqm9bqsCv4ZXXN4GkMG9RGrpp3JxQDXuVAYCh4QmfidEdC6uZyYTeVNHBcNwgNpGAxvv",
  "key19": "4YqRC5sMXCvpMASA1hfZMBgDtUWa35StmFEyrr9ugjUT6MAn4M5KYxXd6X4E11as8hg89Da3Lh5JR4URuqKyWpvY",
  "key20": "2B7E4YVBqKSxjAFbGjaBzPDT3pncLcZG54nKmpUmPcQ1b8AdQh5QD1s6tKnJZsLY3eaHp7pee3q7qQwQQv82ERnw",
  "key21": "xYQWGDTXde3d9BjVcBDSzv1su5pprK5LuHERKWrFbZmwK84RW1arAUREAmDSz4Ujk6a5c6bQSCS1qsz7zYVvTqQ",
  "key22": "5tjx7d8GscczNPQTB8fYAt6wCYUBmLr1GfQf1guXsPJ6oNidauRbtVCQcGoeTD6RCDFb8SGUhabjTethfGaexQdp",
  "key23": "45gWv6Y5aTtCsVTo5DNhkDngGvJrq2DzDEiFLSHVRXghkG9y73KbNQKy8JmFUsxS4xvo9CH11KfFLJtDCAh9cFoW",
  "key24": "pLCZkPSSatyyAfesAD3ZPzfUN7xa3a7fu6c5dHUtQTkwgJCFVAU66UZpZUdTxXEcixsz6U6KX7QHSH4z79ptJyq",
  "key25": "3pgGoagHkA61UoZCyUDxM4S3K2nGVyhz87BaNBpgkUpyUJeagwYWMEKMAMVLWqCEStvdYqmdqh91vPubGe2Vtuao",
  "key26": "3WeH3Q6NhXzgcQrLCoVj845CWPFEcozQRHG9by526e4y99snvHNSW1WY6i6BqCUU57AFYEnJFqxEzC7c79JDKpJX",
  "key27": "4Zj2nYigdcwiKRCJGqw6JHt11FaibPZNfSfjKyA3kFEAMweUhpdZT1U3f2uT1HtqWHp2AZtZzCeGaMimtm1s9e3R",
  "key28": "2F7iEqLMYTtV4M2VqN54Ak1tvQF3fx7T5uH6Y3XZLqb5Snkavp1nfVzVzMHxYnobQj3V3vb1LqccZm5cLrYWxVtY",
  "key29": "kiN45v5AHZauZpDJY1M8ydXr4mfRg6oeDGf7YkKyjW2UvHWQxe7n8dxzjhJsgQJ24VbCZP7UejdEevi9RAwBSAF",
  "key30": "4q4dqF72jcMkvryu6Q3XyVQ1YxGxzoqyxn9D7RrdFScMkzvko47Hj3xPh3uQgYejmg2aHG41Fgi9mkNJsDiZNf4A",
  "key31": "277oMarrttiJ38fCRMRgi2HrG83EqH7AFb6XZz3tvzn8yETzZ7ArdrUoGegMyH2Hrr8TmFjo6GQo4VPziJPbE8yg",
  "key32": "5QR4tYSxUcaoikEF9x6Tor2Y9anURviF5QE2DL3rhvpDGtMoxtpPbzddLepFER248bbJjY9tH5p5KZDp3yUo7Frv",
  "key33": "4tH62SneNvXd2vYctgZ76UwKJ5s1tPLCygX7ijhrz9o5ztQzdUGWruBKLiRnbwD9t8hzDCcjxK1rBnJ8s7VfqBYz",
  "key34": "KgSYgZ9cVVS9WxD9k7oFDqAZffqho4vFUYcT6m3Qj6x9cv8U4M69ENnjTBFRDUJm8omvH6Soe9fKfM7wfQnNZdj",
  "key35": "5amskdXYu5Ux9UbPWDeMDBCxoA9gYPjUWdiU31wLXpRhGmxE43mBgmVwo4hAjLwEnchryAD119yPYNXqti9Hs8J6",
  "key36": "41nsAXKmTpzR6TdgdVQFYgz7nQPA5xzCYUXFa6jQ572nVJ7DnEkcdTED4BBxtqaBudPTCoL32JGF78FeT3G7rTZX",
  "key37": "3uERixAEeAeBuHn5Q3J6ricK2SqA1QfvR7NVtRi9oMw297hwANEdWag4YSMdsE5T6L2wFH9UUiBGYGvxj6WajHEN",
  "key38": "4ec1spcYuVWtWCyRfsKMkDv1Js31dAwVhb5hCab6XhgB3V9XQ2inGRg2BVSJR9j14wkBceEh7Qwc7RGwNsLkwV8p",
  "key39": "2qzoUtxmuBQqK6LXWH5nDno76P7M1uaR3GfAuA3Ah7pqe5aDPW7qG8CX6aXPZuzn5LKC3gtkDChBuF1hDkFxrA1H",
  "key40": "9FsWSAokcTpei3nmQENKtLschSFsUSm31CspUqZv2h6MQF2CTNvqYjmGX4pA5YgD9f76mWk9Q9fzk4KMmabTUed",
  "key41": "2KfP4kXq8xtC6PxppbaY5UaNNJjAAJzK4yJMH1629ST4Gohu13JS2RjkxzAc1sCFUkH8tLLWNs7bU3LUBu4AYucz",
  "key42": "2iei4ANzDRF4Ei4AzcZFs9Hr3Rj6eApfPe9jkr2taC4ao87bdBw1LsmrLxpL3CN9oVU44SznbxU9DjHZdznCpCPX",
  "key43": "4c8UWvrwSqq5pAury2DBHoN4F6ZhWLdiPhctndRp1CCtMpByKCtvMoYZLhGJqKqa3BgSBsnfQfjgfDriUd6FsAz5",
  "key44": "5mvWMLgKPrDsVBLhKzmS3n2bLE4AA5YdF6FYWEHzDuh8pHiE4tJkKws4grAsXnYpYLDUL4qYEQxB34mHfHZNhaKc",
  "key45": "5JP6Zdui7B6nok2Gpx919NhGadP8rPD7JC6tw7CEVU9taVc5HdWgcjSCLd8CJs85NnCsstsv4pAH3hYz9Z9WRLJc",
  "key46": "CTLeCtfKhwkfdQB5x2vkKK3oXFHaSLqFQkERuVogLaAeDwTnSFEenN6e8Mjjg2k2EdoM1Uo7Y1KY2Wew224kZLP",
  "key47": "5g7ReWT4TQu7Lk1JrTVZhJPXzE9LTuUeN7vPg2JVGSNvJN5UzYZSax2ZbVxt3BXcxw49gLTuiQpkdw6SHZitA2DM"
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
