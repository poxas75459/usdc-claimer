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
    "4UVMTmet79GSz1enoFA2RLiGxi4ARRGu9ktf1UV4ePj9r3Qo5sE2Hhhdc8Wuuh8a1d1qG9jmvsPfnfJKZugTuA3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vEsyJKYiay4aKM64xs95sW949WSpT1GmHw43vhMLnECPM7owZeUuErbie9cfX1rE6rmB23T5PAjsM5Sr6YXb7Rv",
  "key1": "VFsdo5Wi14cYt5NUGVGKSTxDjNh9qb9z9HQjitEdtVq4Y2pC6VwKhSQzjBEcU9pmFuoYHpYyDbqqv4Xkd1k2fcp",
  "key2": "48kuPLc5uvJXkYYFoG7uiJYt1Y8Sypsf383cxbE3rghR6vQxhD3Jh5sXjCw9rUD6YM46fn1jGuju14D61ib4AAuY",
  "key3": "4gs6wnWo7iLccT1SX5Ehq5c72RBBt2DxcBDfhmcnH9BcqTPLSbdLbXDXSwtms3xQvSxJ6LuedAkjVzWLAkFMNQpa",
  "key4": "SpC6QkaEo8sru5PkCViN9QwusNGxdvsHzTSpakfR8ZfuQg9Q6cFq4fCTLLNUZwL2f1DdsZjid6aQN5PjCYmcrUc",
  "key5": "376e2KBQH2pVEkC6AM2Zvqkwqkwk2ehxHKMWRM7RecJxvcCVwY3RHhUZzKxHjfhDPmk3jKg2K3xJfpg9KmxMivAt",
  "key6": "2o5X8UT7YAJTRimYdJAxncE98WthJ9YsgwFK3A51pMfsHHbsEXrGtgzi7ccFDzCHJRriAAuDZG3jMqxbxtusMpjP",
  "key7": "2ArPuJ27Y4sAo97azQrZ8EwAFMV96eKxD9d6yeDYmEpM57Du9pYnMsA6pMx8P1bt2KYqmS4R5HFMSzKTo3LY3UfH",
  "key8": "5PJERdG77kK4mp2yir5Phyn6JzTg4N1aTrtP4KN8kAoyZtE96eppR53VHJfTQYox5x8mpnuCkvzhjAk8ALCjfRFH",
  "key9": "4rtsyegyD35NnBKzRfsHYiXWFPUnRUqtkGAaN2Xmhp1kJyzhUsZnzJNTD9iGuDk9xfugCjZUM74tUwGZHPJSpepB",
  "key10": "G3AeLyUcxgbDpniod5hcx6Vk4EpeF1icGpP6VacBtq8RxUTngreziu3iNdSJJtpofRSC9mXCXZ2iPt2bRbapY45",
  "key11": "3Q1QeBBpKbH9aZ7FGkkFr4jBULS9a6imnzFuB19iYoBA3hptgDoKSUUkikHUaUQcsu1FyQS2UzoKty1gvjA7HmxH",
  "key12": "47rmA174o5Dwi4VjeEFynzBPTsthgybPXJ3eFc8vjKAciBoiwNLDTJSKDrJgfDoPj3gdiZGP1aUUB6eCUrZXEAcv",
  "key13": "qMqSdGFzQNxtpxAq32jQVsMtqawWCnoGWEHksoEXaVuHSd6Vbs7GdDrZruG9zdtFX9ah7Dxo3KH4AcGUAf9QvXW",
  "key14": "4Yoeyg2G4W9gvRuLwdST9DsLVVpgWsW6iCGJkUTQd1Ae5fyRXZoQ2dJkvPSQ78x8UrgomqZ1ewHdQfNqh4PN2Kex",
  "key15": "2efyKDoFvAzKHHgE1mGjSqMdjjeokSxJKVXvHKZqCK2yutprsND5VtnVhMfzYnJdrSHZZadDjTJgyoSuhrq78mKy",
  "key16": "5c6VD57i53iFk4SSp7vRsKbYcAVNg23Y7M8tufaRuaQ4e5zUnWG1x9PmnCHYcxJ2GdYHVc4kfKeeZHsSwEtR6Ac2",
  "key17": "5kvRW8FjkbNjPS1ZSBUYiZQKm715rQzz4bEHnDbECLFj3SFxZYSC97Z2YfCX81Wisn8mV59KfrXK4uq7uaKzHd2k",
  "key18": "3JLsGmPxuCErHbtKAboJn7A4heKCrErwyL2nHbTWzRZB5MCGB1RPVv8upg8Fg6XTWBeJdmdj56i6XXqKV4Fvj35V",
  "key19": "JKpD584i5jzYS4vTPsuM8nh3G1c9pNoWR4bsqCUPxEa15BXHJ31kymUeKPcVRs5uhqH3XEMHnwYpq31DLyXtp1v",
  "key20": "63pd8LmW18SeyMh4b59DG9NqdajGVbtSFSBhKVoc3HZNSQyHhpuZFY6cT6bxCyHns415ombrk6gMJk3Ej7upKPUu",
  "key21": "5Jy7gHcF6SqqDsxZq7UJWostE9pSGdcjhwSnMWRA2eAKn8xcwYXQvxgY5JMn6WRAgjnhEDuShohW3sVtfB4ppsof",
  "key22": "4tsQrwXsanr56fkpBPYXhuwzUFwYQ2hg9FyqKCFgwVbTmPwFoCyjxaCHwsZmhz3XnZTHft14jaJEa1Gac3rAvGb",
  "key23": "D3EUQMMgLE73HEppvz17Gy4tPQ4KKTH9r2HWfcuVVH85S1c1deZ7JfeHDZ9u6bxvbm3318Schsoc3FdjyynKfTt",
  "key24": "3PWjKRoQMs7U2eoLAkSY2cuL6FmzG6t2eFVXFxPVdUqiNxG59gjPuh9QGmkjwyYBmGJ9fC9dxToC8pnmYD8ePtEZ",
  "key25": "3otr83nTPoJvZduZmwBjibC1hxmkjCXgCRmx1esGbZnZhb9nv22S9e4VAMjZSJBYxas5WcrCZmxuGMYrRRAX7u18",
  "key26": "4FQjBGQBitCzDB8mPhu6AV4SQphELyHJ7jpaqJsoRLCStUx8fVT1F3PYQGM4jqG7Hnk6ZyWqxKfa3hQHXY1Z6TVi",
  "key27": "CkHaJzkAM2bKtu3FehgGmegHnFAHSe6wodqnJ4CwUcEXAwZVHmfEsQJ8du1LcfJAnq4f84YLPRAVzjANTnYCLnV",
  "key28": "2oZbEeZT1NKpaeYRV9D9huWsnR1wk9HLduhP5kKq92fAdL8H6g2QQ3EDtKetaJ772uxWB947YNw8hXJwzMg4zNNr",
  "key29": "4xWQSXJXkyc31ix6NsRoCQvrcdBXef7LjjqQ7f2G8wCmdEdNnfE3WLWryPgStbPMedk7j66Y9593bdHjpxMghdF2",
  "key30": "371gj5NMt8vWAAreNJcZrCKoo3sejMYAij24xSnFW7rxoMNZDW5SwEBYsGQfxm9N918FX5mja31KenSTcU5127Kq",
  "key31": "4WLjoo73f4u9JjVMwhdTWb8Ya6XTdzQgds1a9v2d2xd3NsZ6Jkh9uvEdTNGe4BgsGdKmX8auj8gicGzTiBSLkYgV",
  "key32": "2HJ5zjo3Rk4uSjBoJnQL35dM6WpJqpG8Bgmm68Zzv14Sc7wuuz38fTJUYwek6jzUaaAThXqfoZUkuY1Aztr1wtiT",
  "key33": "291uoS67tWtJ5w4QK2YkgemrdMTANoepTA3aC74LQWX1ecUuvcenreu22JUJCs24ZHJsHgGtosAmNKZFCHNCj7hb",
  "key34": "CpzayPdW3YL8Z59UTEKywiPwRrYKtSyZ9duXwne7FhFx9aGWJtSM4tcZJkpqBWKCm3jAdoWWbTo6s7851enMDg5",
  "key35": "4GGjR9VrqSGpEwhf9saronrM5bpzL73v3vmyj3LwrnLnCiX4Ls7ksKMSsFrpLQstXDF3K3Lo19RC6B981nVb9ye",
  "key36": "2UQcEF4VLbyNqpPR5osKUoYQjRTNQdk9iPLRKuPWYrZRz98vck6jsfH8XamQWLhmvapH7oNWfT3b75Qxx2BwgQ9f",
  "key37": "5A6NMwv844gAL6FhGdziksjdWGSJWzeyejByxxk6NyAywpGj8JEGpzd4VD29kgscq2gbQ9jT4L5rTi8LchrxWqwN",
  "key38": "4SsHRD47ofVsQUU8yodwWhAUTW4YzWsNzfacuuoGJSfD1ZQzbQkEC5GepFJDCZoHRKndkcnmtcXvFVhk62aqTxNY",
  "key39": "28XSXpHHxxv1FoNk3wJ5gfJmZzdJmk8XmFq9s7d96Rq7nDs9RAj9hB92V5WAHkZd6Z9Lw5snw7PJ8NMPmEEKifCW",
  "key40": "3eF2xwTpnUtwus1jnZMWp3EW4ReWzyoCFekWWvDKctpupwNtv5FHEnPkTNk2YS3zV3ADUVkhznhoFjVjseK5rkZs",
  "key41": "41ByfUG3AXWYXgWPXgSCTvhv2RbD3TScZVByThhGWpQ71qDXD7iPJGctZMV8TBvSthUc9iHCVA52LD41u7dnFFiV",
  "key42": "wPo3qKj7R8KW6HPZ7PHCGd4nE17z5f3k54qnRjCGHHcBrWSJhiDJjAKcNrUEHcXEE3vTYmpTHPHHYkdqib4sgkq",
  "key43": "2TQXXZzpGp7m7S5iks71wYWG6is24UZY5nqhuFhT2NFqeYbQKLsXfDcaAYkjh8v2xrGQJHLpBBpjLoRRwTJGSZMP",
  "key44": "2P3hGvCac4Z1rgokajVMSsVZwGARfQ5k3ChYfwKCX7t3kaJMr9AuEry4EE58JMjxuiwkhXCtHPJbSKru8FmAKXPa"
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
