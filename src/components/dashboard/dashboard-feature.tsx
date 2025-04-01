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
    "2kGQNCxgbHQtYnxWWyAs9hveGXVs7g8ZY8aBoGjAYPf9PAHamFMFmUkStFjVMuN21fzR5HikFrgZ5DPFLe1ffd6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mBBnxoUeVJfGVjvhxnMZ8TE2uuuYF7Uzpok5d6m1e7R62Jgb7WtuYmWy76rRzC2pkNaKW9XDq63URK2mUesi3en",
  "key1": "2kua7pBGnBF3zzjQSJ676Dm6xpgrtBEku8YpFoAb6t7sYZWM8aFN9KQM7hDTdvVkrF7y8nUjfZ5zzsiL1xz5zWLY",
  "key2": "2ja16vxy922Hmi75vsKhcnfXX49h9gGa8cH4MNQJhf5NDrbNEdhDeYgw2pon45sxNiJdS8R2FgdWzMNMrnzoxRFb",
  "key3": "4JvArMtXpS5DhLYsGvr2Nz3x4ZDHwhfGj9yCwhuhQJbZyfKEA31aeDwDCTFnNKisnS3KP6njTkP4uhHFtieJZYg2",
  "key4": "2fwNFp9D6DFyUFK1asHQPstbWLaqAYUPKMSUQw4uRH7oYhZa1x5SfUqiJb93LXU24vLHFPNmBiA8ceEJvqYc9Fvz",
  "key5": "3YvxM2YLFrUqo15N9PWzv5TKcv5UbDKMLULF2U7tJPznG2ATiN5ujFBpHLRWBBm4cT9njxsVQ1HhKiYBsRwVCjsa",
  "key6": "3Z2viKpbkxF2zpn8o48V3Gph8TCfgSW5264kSRQhimggK4j4tn9kzfotthYYFRCe8ZmArbckKPAF8W9SeHtD6nUv",
  "key7": "4btSQZCmtRMbHyAve3pSPigZFimQX3k9anhpDMaiJztBM3kotTGM4n3nGCcooNazZjqdKRDxd5iEQyfTkxmCV6Ms",
  "key8": "AEu9zsTCaYGG1TiTWhFcPNGfNXoXsdvPMQuTX7FH8KwhBaVdZqNhPsicMQu3xwkKkfpi5C5MRxswCadWM6FM3V3",
  "key9": "4UL5X6K8yX62JZ37eZoRczrb4XFw9zmK65uZmqfzRY6F2wNkYvxLYL7eXjMsWQDJSSdc3MwNLCpzC6gQW4NTFEAC",
  "key10": "XiTRsRLPaaoXYWG4ntetUGSjoZvLBEeM1xW4iVrSmMyvNA7ciMCdmQ7cqsbR7NfQo9sBGgRpAcdPrgDJwNf8bHE",
  "key11": "2eMpgRpFh6Rqxv7HENxxSq2d3xsuKDAax4e1XNVBc6HkoE2V9uQ1nG7eP3b6AiQbVpgX3UoDicRoVKFg91z7bGDw",
  "key12": "4B8pQQfhpSDfmHotdGs262n4WyTxWNSfHouR9YPiFrzmxmEQrJHMCwnbhji1vWcKvA9TqxqRTWngLviNiJujpUCd",
  "key13": "f1Y5fQSuoGT4iqa2rhB4C4HcGacDhkefbZCy7q6VS5vaDhBiU89WVi3u7YzVhmCZZPhyUKyMkdWtvg8vdRU8Lp8",
  "key14": "3xSkbGLUfbtHxTnepw12pZwKZLdUsGAj37YTYVPDzaf9Yo91XzttEPtgPCToPU9UgsyiAFFd2XRSBHNwenAMoUf",
  "key15": "5cgGeFpHNdHcJCfE3FW5LD6fDKU4xop9RCnCrraLBaDK8YneRr9As3KH8D9EiQEmHqgPLxfWtXHsRBsSGm6XngZm",
  "key16": "53r8ckmNjjF6hEYqSnXG58g13fN4Z8Ryarzqh7EePLXBHQuKs7xPANkWaj9hJKFqWHfF7xKDeTjqXNzkVsBxnafx",
  "key17": "36F4xdpQMFTXbk3ZTQVjeS7S1dFMJvUoBX82ATe9pqLKF74MgWXvFEY9msxihYRkhiTXuPRj1DQFsVd6psW2HxRi",
  "key18": "5JPvc7EPiYrABJz1Qj3YTMTEeZgRAaRNHSNxckJoHYXiMXvJNctrEHXWz4WroKvo6LQ8MgFfVLrs89JPmDsHfJFF",
  "key19": "4rNhgvMqjDGnLRXVcEF2d3BxWgHJSxjW6bWFsGfh9oZmPQQWMk16Yt1M46NDcGrffeib7g91eNTMBvDfrs9HbMK1",
  "key20": "BcmyQRyKKqMEtgGCgpewTeVecfSbfLSmhwPH1QvAxGoa17653QpcMh72yEqtkwMVXj8gTxT3JezimhKJTPhmVD8",
  "key21": "4DfH33CYc3kX4rJqLwPQHpDTwtZbt5bNbXeKxd3uLy6iVjEHd1VckcVvFScUBYy6u2NDG9SqosmhTzPMAR7NXFz9",
  "key22": "3zgwLqXdc3n9BsLXhg5qFKrTLmc3k4b8vmndxZfayxWBhzDea9DgsiNFWzXTJqhCvEgyo54C73k48DyWx6ZXMGPc",
  "key23": "3Gj12GGJc7EL2oLs6uVzsBRy88NQPuciKRwAF2CtQgcotNNwqJAfdLAUTEgAtyTaNtkPBvYKNMJAFJdkBbDkCGE4",
  "key24": "3kYvuHtTo7HCGHyZE647CHbDEv8F3jTwXHstZLq9Jag7J3P75zDCRBJckcck246Uizud2jubZPmDjCkScCQN2MhV",
  "key25": "xCp5MaMfpxcMk4KZxnj6RRXQ9mNPT7Bbm1GHtGQvXmrwdEGRUvWMR88vP7oBPET8YAxCJcpccj8Drbfej9JLQan",
  "key26": "WtVYEts4mFz49y4WxSjjaVmXexegxi9UzF3Qe2M8GHdYk9chyPJcCWMJUZJ1JeSRRR9LTpRoj5ZYyWhDxzgpq51",
  "key27": "mxJKvCsmPV8XyTovGWfdYH3436VrUez2w2aCLTMm8LocoiEobS4KvZrnDXWEkiGtgiRSBbhhpDGnZje2FUtvwvv",
  "key28": "2XuwKzwcRaj7a7p2BwF84R1EBeTY5ug1BJ4aTUJbsi1oJouzWCMLKShxk73Y7L8azwEPuSz65MLPxfP2EyZTJxjH",
  "key29": "4Tf4bpn1qJECcBaA114xj15dokFoCMvWAbXXR97bW1VYmZG9ds4oFdXdXtnsno4qckzrEUWu7fKyinZN2HTnD5og",
  "key30": "2ReRYSvJzo6ifG7yDGjtkdiEVMHh8Dwgm5QBedsz35euaLvJfurQDwA6Pzhbd5XaCHE1WwSmXs12miys5QDFW6EH",
  "key31": "29DDK8dNRxUexfKPfqVkTK78rPFTwLkEZhW92DMZpx3w8XBjxt2ZEBxSBctxNFLsggBZC6o8HVwg7d2wgXZNb2eQ",
  "key32": "3oEZf9k8cXqPhYyoGvKqifHZCym1mXYPftMWEcuQ4EK8BZFVvkutcSMBsTi1pkBx9sXmNanc5cEraFiVZzj2gwbr",
  "key33": "4koeTfPeTPJCsVkd8aZWWDKCsrXu2gBbFryBxdSEeQy5MMPGmuvWgJ8jfSDv3abh4kgQYqag4vG9SptVPkDdoj9z",
  "key34": "4dnVdmHxWziLBkuctiKdXxYMdxxAS6wGdnBQb6AAH1Z91uEHTR8oq1VzWryzv2X6zbrQhdTtaq2BFG6RJxxzHaEf",
  "key35": "4DXrh9RLVL7L2w7TcsvwcMRPD7iPHtRJy7agGFXzMuEHq3nDWrqa211yQPmwaRc9Vwx5V4gj6m33c4T55btFAYd4",
  "key36": "3YjhbDvybf2FgJKb1FcXxvqaA4VbopKa5WgCVbtbz2Kks6F47NB5gV17AvwHrYRfWnPWRLBh9mXF9NY3qGJjBXpH",
  "key37": "32cHFqTgnByXF9ivdpQY5athGvgq57vMc2PRN9tkxvKdXTnFtEft539xL1Uvus9xdyKg5oYcDt5BjHKgTARdTsiQ",
  "key38": "2LpzCfudDN569jUP3ggQr9wdfaqadK87CHW7zAWqRVoUVnG3dDPW4NTE5kdMMs7sGinMp8QPajycu1mjgvx6BH1g",
  "key39": "3vJVAN9nHsTQR6iyaMyzHFPDz7FtmBFbRPqsqbPykBggGZ7YG8WoJLHvc2wqhgTB3SFtWcR7vngNihDgEKnYUjFd",
  "key40": "3ijTmVxBX5ByjF7qx1wJxuKNPBnjUPWq4YQNqAKBXxoZenpH9TScqF8issJjTLQvFqTr8v24aquurZNh6dsZFnYX",
  "key41": "5Qav2kuzZV22HeEp8bMTPBMmUGza3bUbD5YrqoirUUPnh6AQMducaLTYzYrHPmWpRXE35w67Ta2v1TboqmgctgDw",
  "key42": "4e5cdnPXDnLNwBBzvnQhD7ebbzdJTm92HmfFExaVJhWoJX1jdi2X8NttG8fUKg2ardU3wE1ZeSxALzpqBxniUGR5",
  "key43": "5qJgZZMyyLKTJ79N3aG2j5m9EMYbGdnSgyNfbAUW6jXjxzWGeEA16LBP5DoZj2kbCiiFXC8j1zg12sUNSZ6hWhjg",
  "key44": "2zqijRFKdMozQaE7UcuzTQzkEM4LtKaYf7ixy7BcZ5PCKaJvKqEk16XYt2m2qJiU9hw3X4uzqSTyjzuWPw85DomN",
  "key45": "A8PJUYUZ9najZywhxZqDpLn6D4wFCYHmafCjrFVBYaCN5pFs85SXDqCDtLMFGt3Qmcwreaih7p5GoZCMv1nRGa6",
  "key46": "2UyqfWZNEjtydUzGRMoHBQaQG8ePrv2swf1CDzpo1K7rx5HAcHV5mVXByy2g1eXyU8Nut5Gqwry6d9NvVwkLxbcy",
  "key47": "4oBm3cutRpe7jPrAiZQFrYoXrLKGZEL3MAymWhCdRbKbsLK1Asjve7AawEPDnmcGYyJckerE2pwSgnrYCoCocNgF",
  "key48": "34UG1Hv79nREpHGomAU8okd8tPPmBbk5Gg3MDNRc4zwSrWCJrFaF9AMZ5Mw29J1FJk9whzw2kk1JZp6ovY7SAygL",
  "key49": "4EqEwEH1Nnt8CQXjv8RuR1YNjZZ73zg8v7MMbpcoDfaiyPbMAze7s3mtiDvyAsYS9oS7S943nsFxAUFkDFNbtBA"
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
