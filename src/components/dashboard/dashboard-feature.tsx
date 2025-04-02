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
    "3pf6bm7ekvZvyh4FSU9xt61wqshXVDRDSd7ZUDVDRNjvjU286gkWCkrVh2V6aBxxRfMUopxQhUFNfRKo41QX6o4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64pAcC1R8qNMQHZ5sitFHUjcnLFc4BLETS7yoQQ8cgepE4KxHFxebpf4UEmVD3ceVZiUdYaPFB1iWanFwZqLSMBj",
  "key1": "4eSi1Fi2C6mf67QHnztLaZc5CW5zyd9RnfZ5Ey4WT4bDVxbpy8HsyVLXdy2T1yYDodfy4sH8grB9M3GBdikELFHD",
  "key2": "4BZzxKRWHt3NmNVBJ8tJN51qBebuCaKnnxHZx12NtYBLUfjRN59L5cC2qBp2xWiwQ5N277fjjmVLy2FU9kshjD9D",
  "key3": "4W3ci3CZgDPUxDbY1cwjwkdfe2Enc2LgDUozDnQV9vqoEDS3UaupS4ay16vMbXhneeCtDWe5pXj95RZUbMHopX9V",
  "key4": "5yMsJjxEypmLQ7YNiAWPr43WUr3epe88wtNcmYdLZUg273sx2Pd33bJEgsXnd6wFWeQr6116ZzTvM52933VgEkG2",
  "key5": "hYCogj7Lu9JzosdJX4SqHz1UK75jpPGqtESzNLWFuRjXUYDiKKVNJWtHLLKmU5m12JAFSj7LmuqaHeGmoxehUTo",
  "key6": "3ZKTrSJzoU6Vkpt4guNKBiJ2Q2AeoftgW6YoURVDoJfSBS34vs7ayaURKFYeKVKccWumAronjioxaC86HLgavg21",
  "key7": "2fWq6UGHLGfLo9dtduHKWqMwV9g46F83G2UAajP99vLbxYYWqtm3Um8q9c6BkaeyuE7tTTjXaN85mry33gXubbw1",
  "key8": "5yX1Aw4r7dnNUsK9mAcvs8uEsH1rADLWbbgCPLYEREmh6ZLn5LKqmYJqHxE2hS8STE4Avy4oJF1Ma1unFUznzXGF",
  "key9": "48snQwm56MFX9EYJxfeKZoY8b4A4ieSKMqpdxmFXPrKgjhZbiETSQpzpZByEmjKFdAibkv5X3SXDpJHL4ERGVY4v",
  "key10": "54YaGJSef7za681C5PmhbZ7po4uJ7CtE3QxYQ6ofXbnydsU4hVJRoM45hcTdZ57QDbCHAVGDRQEdLMKhLK28si6T",
  "key11": "3wWwMPqeL3hXuK2UCkzJWJG3g4LGzd6FYtCC82c2rwArYCFiFR6J1ZQyWN7pm5HUxySwjZdQKCMNmjfvJA1oWYRm",
  "key12": "QWjMukLCbyS9STJNjbG6CpKUw8PAHEAcoiu8NMfaFCmXvXcgd8JYC4MgJMHzVamDrxrf392Q9wW2nW8SCF4UAzN",
  "key13": "n7bzmYXFBZqdAH9pBgGBYRDcwrFPukYYw8ZXBnBg8AhRnUKgbjkcyL9U8aBSAY1XGGw7iMv24XXpMKcVCqNtRRw",
  "key14": "2dyW7GLEzqoTkdckm3Jb34w37zkfBP2bMjud2RsoQDZrfg93AdUBRD4jwaiyiUEGWnT7W2zLWzucEF5fb1KVfizQ",
  "key15": "3vXk89uwnFEaMidkjFjg2HXGfYcSfgK6PjRhpTNouA95urkLqPGuUAJmKk8vQeYunPKyUqm8RRS8YM1WYhRULod3",
  "key16": "4u6AX9Tn7THz1XsPmZM4qRX2gUoyZQ9u5Hg2TfcRE5bNCfdbg4CZ9WzzcbEgfYnUCVkH67PUbEJKiNZwEYKm6GGx",
  "key17": "27PAtHfr5L6K9pNyw76C5vCAunRnpDqrLg1VEo3xgk6q3nwFGHW94PENETMuZBgRg8d1hXsMJaT3JRdHpJ983BEa",
  "key18": "5mJs1froVtXCzMaHrNXqm79No1Vn7b4XxAVjZQQKwK1qaNqBK75T8uBJtJM7powEuZxjM9xskfZpKBMrvWC5VEmZ",
  "key19": "2VAQncJsXFD1UPpi12v9PKuTqwjtkWW45mNqHdPtgGeae784m3VHNNqQ4sKhZvn198TEZhnX1ZLrKSaayDr5iaAQ",
  "key20": "2VGFVwAZ3YMNHgqvtuDNbCqcnu9NqDGT6iUXtqLgKCo88WJ3FXc18dYHYshVLk6r1VyoX3YfSyycba4pQDbPvRNx",
  "key21": "GWoSbXSz4ULVHg5aoxPZghABXLG2dRJ8J8UdJZgpETWujLt2HpzwHuU4FLzVE3gTPkfdP4GHkgNJxFSv6LenqFW",
  "key22": "VzVhyG5kXtKKs6kt82VBBsE56ZrJtwrM7KwzXrHJEmguQiAMHSYUni1xqgnJPo3paEGySoP2qUy6cGTBQTVggrf",
  "key23": "29vpi8DnGhprZ9JkpWrvmQv8nbkJpYpCQ63YujhLPDYgYGeYNMKUbpx2RdjT81f5xeVgRovWqVFwSXCy1U2fYcv1",
  "key24": "4gdAYh8tHbftDHJc7ahSrtrQtG1RN5KhA4iXWGuVXizFzTeTqbUgRwryppJJUWWJ7YodrSx6k69LuxmutmEEUxet",
  "key25": "4in1zi8nrtcs7m9RdcVjo2V97vaaeswek3rnZcnU9H8mtydywpmZd2EBBBebASQzmvCP3ZFo8wD875ixvwcdt1B3",
  "key26": "2aKUBCeH6bLBMiwhEi7KYcijbdDVTxGrjbsW142218pCumbQ4ww3ZiWzyCNfh46csLJbaWq5ArYRTFKN7BEqBPHg",
  "key27": "2k1aHipXnK3eWrR4ubjnJXtsdY3i1bWdxaN3RBHnHF5cB9HYeSJyWCkoWAZYUpJNGQwaxPuDgRRbHpjTreXfXGBR",
  "key28": "21Jm31HPmZhbLUCFjSLgqQxHRSb47YBJ9Z84Cj1BF1xN2NSuftNFvdWhi2PvTqMDYVHM8Bb7ggFc2PZJBKkCiDoL",
  "key29": "39Cg7eBKArUb49E8T212hJjqroWjcexegZ7Kr3oq7Koj8ja5uR9ZSChBbLvKc5T5tHsreGxMkhbJWCMznQVQPK6f",
  "key30": "5LwYamxvVCWJ4HQXq6qPwtjtYNeFhznJujyktDN1mCRZ5Dm3vZGP5SsHGdGU5gu6agDJ31bruWaEvrnQ8jUjA1yA",
  "key31": "3KPvKzR1tZFyqoDSLXsrbcubMfh17iDzKcJJUkQEgpebqLXT4LGgrE6Ym18wFAbGKDaB6YNdDcbHMmNbCF3Pboh8",
  "key32": "3hExyZMYU9UQ4QEtRdCAqrc1MtcfxNp8BZpzuh15fFeujFRDJnJVaYGRaCut9nXkGNhF2gnbxR2tdRmX5nx2KCBb",
  "key33": "3BuRTxPEWNBbppqThWHUdsYrMp895VayAzkGhAAPpX5Z3BBC5b4rY9iYGv28CaA5e8Ryni8UkLkbzALJW6uLkuga",
  "key34": "kkGhEHbV1ckDBFPkZ683e7h7rst4c2RAy4scRyCLWpPPgiZxnQwZcxhoF8NoQGKX1aAmYjLXaVPXzGyqGDuAxtt",
  "key35": "2uqV4hQ9jLsEJHbBPmEc4QTvWxe2CuWoFHxeGWGSX489iD6ef1MCGu1rvQgu79e2byAdppceZ2ii2GKWJN2DLLRu",
  "key36": "3ZHDNc1N37D5qJQc6HSXz7AvdUPjSDcvXG5NDpZYG5hvUpxpP5JLF5eoZGZfsTVBvjrc7QJSfMYgJwRLMg9vvLez",
  "key37": "2BoUEKCDzhfjNvLuHDF223DqCQ7ePyC6aJjDtWPiHxKNZKeFEpnsCy6wGg34aA2Tb4tUfnJQu3bRNQWCgorXHQBP",
  "key38": "YqwL6TXXyeS1tecCgmHEGyphwBMJK5EiUkpJecnoKd6gmsDdfSr4nXVZ8bSRG6fpdCpUdoiu4C6EAeXfuwrTZi6",
  "key39": "2qwWczAaszj6bW1k5d2VzEmXRRKViM1E5GsGkPoHFP2RpDJB6e3uu9aUtUgN6a1egNcqvdETet1iJTY4oibmRQA4",
  "key40": "5VDS33nP5n1CUvWXce34Dx4eH9NL5d3mdyz4sunniWKRBrwntbwHN4MesBRZguHsacAaaWq2GwTSts5a4scGFkiP",
  "key41": "2nYG61dvPKckKpez7Aosjd9jAmmKVtiGE6KSiC7XNaaPPWu1k5LNTvUdQ3VQzqYWUQjh3CvJG6b2ch5nR6HjEsr",
  "key42": "5e8KnZzZC3RzZKcAqJCr6tA11Dx4dzQXpKSXJdWEEtSBhtLvHQAGyKPJyk4bCrjhUB6tAHiAKG25zi7kqBd4WR9h",
  "key43": "2a3evskLh6HRha7uFtjBfPQgZDQxuCjNtw8WXFpn3CNP2vf2dk48c11UJypLtDHK2eGKtGkhVqxVwtyFtAsuJmtG",
  "key44": "4Hsr3iSs8LmU8QkwEaLcrKReh4w2hnNo9k6j3CnwxW4Yyz96fwt4LqtchseSu113UnLJ8FqrLvjtZo4Doonsdzwo",
  "key45": "5TQx2FdFCnUeHTRDgDFbrrMRvKWG3csEL6DTX7aycnfmxNxLrgcJqgKHPiDh88t5Bh1LjVeeZs1r8hi3QBoRKEx2",
  "key46": "5XdcRKXMbxFqtZfdmhGARmQ4xQXzBX2fw7189t1XcQLJu2tJm6Fzh8CRntraydPcbVW7D7P5c1A5x2AQweAkYeRV"
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
