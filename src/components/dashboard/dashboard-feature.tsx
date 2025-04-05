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
    "MSpaCkNRkRs7UeSHk6u6WeTK1hirJKFGDLsYNTWL5vGvxjhRxyJZ1C39RhBeNq2ztkrVFyQ6gs3Zh4DkPEWigse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uG1Y9YbDLAmkZzP4Enytih12Udgy4cQkUrzZPhRTckmYfvEkoJUcd6pJuT7rMKX67B1HbcJUYu3zvuwquEvVkLF",
  "key1": "3yxaDuk2ny8CYJDsKGPZ5DofoGMuNXAccbPA3vxFZcjsAK3Gs4ABcVhJ7L5Zj3EHh8b7urcXGwMrtB5fWih9813Z",
  "key2": "2cSn1ETC3uGcCgWfTGEzyfQe8FZwst2fpaXQ3k16v5K8pgniuU182Bb6pVR3tZffDetjESeeo5XC6Fzc655fzcwt",
  "key3": "T9nvDXothWiDZfmnuTvG2Kgypbc5spGzbuBAntutoi7g2E8bTDpLKTmRA3TC53WET4iom7PrDqzEcU61ewjxBT4",
  "key4": "5JrsdX1zKyhrsetBiEvKR8sduXwGRewS6DUb5y2iJFwnrCJkcEotKeYLPEf3A6sTWxULcJr1WBeSZA5ohcKDy3s3",
  "key5": "RsdHFok5EC4Bv37QicZUceVwbTU8X9gk1p4hokHvwxwbo7Cup5SFUArMTQS2JfnmZoo4RzbV7u6HfpkgYcSTKjT",
  "key6": "7BbPfRcfqayd8H5EH9LdswaUMX7i5xWgov6hD7tuDsgJ84GtEvDuchjL5yb7Q24wT6K9s69qw8wBwTqAMzs43oJ",
  "key7": "5WFnv7X5VW73AwVuEscrhQQEWAnzKYYTArD8yStHmrZsyKadakqAbUtXED4uSWPRku1zsY1hDFN7U7LZyBwy8Z5S",
  "key8": "5CvahMHSwwtAbJLAJS2oVxP4mWaiPuKGG8A3M2E9Wm219XNTmQ5kLA9aT9KKcjcCmd2TB6pjPG8Xu7PBC6Sorti2",
  "key9": "2wmzjS5CK9pXtxRDbR2oLvKrSs9tqvqmg5niHeua5KwgrK3W7rrwfHdFZVeMmjY89E9wtF5o1Yj2Knq6uNfiAfcu",
  "key10": "2X5KGVCRqYh9YWGWXFqhy5VWgJEJfouz2wmZfreZ1PuRYyPvATgYkQnnAtW7buNLpuqzT6Pkz7iprejkucjuVBwY",
  "key11": "3bcppHyj2csMDkP5ZwpCvp9hPz6wEBt6u9DddGzrwuYuAbSpcT5SuDQjBmqm5EM9AnNZwXg4XFrEiL9h4gUeTsvt",
  "key12": "4nSfHcyBDDnaRcGE7uKUZ6zCnnhbNfoVeKc58k4G3FMAxpfjns5eL9d3uaWJcuqHhhJaLPwg3p1KVwpAC4vPdwyR",
  "key13": "5fYk5jhgfWjpQZQYJAN7JDzLNSyCnCPsJenaTm9JqrSy2VNCrRQt6A4krZZgaWCqYaA8MhzZtH4RcABj4BX6WsZ2",
  "key14": "5JnZhEhCGn2vcNPU5xub5Ks3hH2y8P3TRct9VRxL76rZZC81YJHhjt4fD6Q2FyEJkQLwBjmsVCir4FhvAj3XWXSB",
  "key15": "ZLjGkT7CJxjPZS7K9XNXckGzmSCD9RnKLsTDqvZMpcQttGXanojwH4cRBqwijF2HJ1DSyLD4drAePxQeGrbnzg4",
  "key16": "JAxDKjh7frEPNH7vA7kAxnMi8pwMeCHvisYBVhLUZrL74moRJkmNK6R19P98aKaW3BoLmEfTco7Y2k8XTuoVRfk",
  "key17": "627k7CaunmjMksN234QcqB2MAZuosunKnTSjoin6i8yvNBXNgpV9ekEGpBAdpZkwEWrFXTzD2wd81pCuzGexCKDH",
  "key18": "639PdpFFvBYAZxEPpjWkfCaa2TaUaeeUULyVVPPqFJ9uPcQ9wD6mEV8Lt5gPtEXXnfN1nuZgEzxwFB85va85ZqYs",
  "key19": "5bCYA9pTfx4XEvL6EBBR4XkVdYofXPYYwRvKpoiGMwdhtjqKLB7jEBd4656yq1K6KRzQT5ev1oafVnnuBqnHP1fZ",
  "key20": "576McnWwGpnGJ9qDPW1KckX4Zx6EtmpD12vb49nY3bUtecn3y9v11gUmQwNWTDBJWtE5mRLdN3zChQAcXJuo4AFV",
  "key21": "2T2njRiAD9pJ1L2xdidm5jpTsjEaANvjtiACLPj8RyFVJSvDZuj5kN2Dw3NuXoY78oxLvivXaDgZ5xvAmy5MyzMp",
  "key22": "2cKDQED4skJNPAQpVyt6VRCm9bKAyeUWDSKvdL5Cwd5Uk5iDJZvzanVYQ2bTMFXU6GAuKHfKnKw7KH6mQpNdcHrg",
  "key23": "4hANPEVqaCmUSRMXj9vDWmXqwBPnMCoAqWQ2XNHjJDZv47i4p5JMCbZUYkYyVNic7zHVThHmT3EsevxwzBRtyEZT",
  "key24": "3X6fnRzxjE84idgXnv4gbPr47Wu3kfJeQnXt7LPnKD83hY8HKv5G7sQEzbWz5cLFsdijWp91ayRosUABEqcevrpP",
  "key25": "4naGd4tYXJQFRqVAWcyEwmRt47nh5ZV9bDHgm8oKzCnNUKDcTgxfsztyEMiwgeKxL475nN9NJsVBSb7fuuAn5oMp",
  "key26": "3YEFSdYfzQpDuZgvwXGuPJV7nE6wZW4z5MDX41jeWPYcLTekAGmBqQBSUbBGkkqHuQ5bXkbFbJLWqA91zRNbWdbz",
  "key27": "cByEBQdnk3MVUiDAHbkCTqBosERinddRVRzmT9jjGG3UvsdqTfL8jhArVVTBVJn8h66WFaywbP2XVWTeJpnrV8V",
  "key28": "4UEmW9jxbHRCyuxu9tc6vdg8VJPtqecZaJXo8Khoc5Qv1dACbXYYJD5eq72MyTngr5hZecPyDYk6rrMtSEDakYYj",
  "key29": "3kJun11ARDNExcDQj6tNxgN8CR184XE55CDdaYWqsDPGuEr8nrn3CgoULbkkRv3CkEqSahbYdzeZqyGoNg8P5xg9",
  "key30": "38vRZhL3krXTLPQBZPmfDEVkGwxHq81KemURj37bCXYadyTysbeyBAyD7jiV3Y2PY4dZvFCCthkXvex7VKtheQoj",
  "key31": "4sWzNe98CSJiji4GFdqYcd376gsxemVrVqqxAEAxUsmmQAUqEPkHDoU9u1dqZ2729vwSSwwWw9nQNnRfPrKYz8kk",
  "key32": "5TpHyRfBZuZnDr5KM46AutK9TAh9M3mUnJsJoyRMd8X7ZdVDR5pvDb5pAPbdqZZAseAkrnZBq9Y87C9b2dEtQtTD",
  "key33": "5wgZL6ozDKZ1zjyXYNURvfyqvKjk7ojQhmxrtx45CTUtokW75RvfgvdG7ggUzyUu7ayo9c7pLKwJGrKxyEnwBJpq",
  "key34": "5kvVeQAqBrMhsjhQmHN9oNbmDBNR7jnfYHPFcyVr5nuYzRBYEXQNHhc6S14E6b1iPzGj5EGC93Mt2QHzMKf6q9nn",
  "key35": "3HoCsNhmajZ23DsBNK7WrkmLGnTNBvzePzJWFEykF6QTr8hLNUi26vGTB4FhhFcbSTYcGyc5WdzpzZnY8j2dL2kd",
  "key36": "5oMXoj6CRzZJrsoJNC1bysNJXvtdqyB5gho9zSdrCoUYqaY2Srqr55DAvSu63jw6G7Z55j3nkVdhxkRjgsHMtPVq",
  "key37": "3cKfxHLNc1rpshNGAhzF1ZCnRCVrwsPcAkobRSMua4pcjgzRKoqEKhPk2auwM1QJMZRoTpMuheeEdUtvVkTp7oBM",
  "key38": "FFY3DNy5RPgLohFNLV9R877VnjtjCTF1XkfTJAeaW6E9a1mnjkbH4RndfZNj2XZe1J9YA5S9QM9nRMEAVxQfhQo",
  "key39": "2gUbWuZ9J12KQ5iYGQGkmHD9koiUTY4m7zKcEuZJJs8TuoSvkLuLXg8sk12EX9vwFhdxEBmELwYEHtLKtnQ8wHTy",
  "key40": "4E7Hii1NM4eNbXo9WExsVzsM6XxuSm9RxuE5KJdNtS33Eb5t8AuV3SiYsiFnRHzh4vZT1WzPBB8qbmvtn61tEB72",
  "key41": "46fhwJB8NdrRnnvg2PPNnEbMXpiXa3GUFF4Q7GEganWgTkBVL71WvinaK2YmwntkT3wF2t8gqm8PDBUqKLAYBLuk",
  "key42": "22XqmTmRkY1oXZXGz85FdiiKSw8ST3HnwP3SZNCz2YP5Cr951L18WoPY8v7eiRaz5hcLYj52QGLQf7pNDZ2DS2fp",
  "key43": "sfJA76w66GPAswNVRtmeJQgrUatcb2yJAWPwiiYGBrRp23dTEcSQYNCirNMsjLiktSP1DXu4rPQ93ezBxRxZ34T"
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
