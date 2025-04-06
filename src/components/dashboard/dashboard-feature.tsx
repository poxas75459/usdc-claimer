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
    "5jY9drV9Zma8Msd6MrbKP2uJ8XWXFGVWZMeqXYhCFrWnyjwywzend9aWJFyP8Jc4vN6oZkBProxr8VAkZtKswviq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1coWETfgGtXQZiJS9CLwS9C8sGjfW2PdT2m9LDsaXfPHcvhqGqHfwVmNFFcvMETgdZQeJdgNkCFBPARNXQWKVK1",
  "key1": "5bnWhaX96zrrU6AHd4z9THAhgPCMr1zKRr4TQ6SgjdY8LpXPexhx6Uaba846uRbAYpSbsC52pnNNVLbD8Ciac1nF",
  "key2": "2phGm41Nn2rD78waYA6o9CiKAvKqtVkbT6ZxoPcBQeuzwBLtzcGwBQAmD3ZwjefQTtRZjErrsi27iMWENbM2UoTm",
  "key3": "5M1iWRbewj2PDKpKbs4yHgPabXGSxTKVLziFLAqq19UDioCHR5VnQZh4T6r7AXZrHExpXfVbXoYiK4J5nsn4mBHi",
  "key4": "38fUwCJQ3Jmcm7JbxXKZV6mae46NxqVFJTZS6yM6Qr2Pam84n73onpBDg6qGKJNbYdbjcbRBmSWWEJvRqwpf65SJ",
  "key5": "2Xzfhn3By6zKqRPADufyyYdixifPRWrLbeNFwwabWMqvuPA3dVkiNxaUsLpG2wWZQFR87najuZ9y5vrSNVuFQ3SW",
  "key6": "4nWyky9kkg9JWwM98sc2xN51yZ7MFckXmuYfBk3Ykr22pZN9Vw8PgA7tKWPhPqNzemYTtecWS3ZRSfRmo7SnwnZZ",
  "key7": "63fFL7rtx4sHjYZ9Swm7ujy95pq44jyVcG2UVpgnPV4n23fFTzhkCVYDcbpLpLEq3i7ZTsq5MYA6kiq6W7iJWEGu",
  "key8": "59gEBmUqcRUJTvQDRPxAbYZoXR7TMKJSP11LGYo8v2dpugKHhnUaHQudMjKqWfmUnNTkzvuZMSiQZpR1X91QJARF",
  "key9": "MxANwbWiUWpQaF7DmunHMSjBGjaBkmQybKGhB7YJbKTdjj3yr6Wi9ZqxRH5C1V6xSpSDZ5r8eFdyiarcitpwuhC",
  "key10": "3BC2M3WBK4dqBRsprJXEHtvvxfTTmp2gCMk79mz2bVfLKtkCvQnYF5XKG7gf3n5fhLnWcs3AamdRqngZciJYZkBp",
  "key11": "2wnEczQ5AghauKctkrcB9yGyrxas7DMny9aXHVSiXbuKoh3DuYVbovFGgzSjMDFb6nBgyywNfg5EptBCnC39Ch5h",
  "key12": "5gWXQwypvHpSmNocjVJpSC44geN9vCHQqbS824dvzF8GHibY26QWjBw8ecSDt3QH3rGZC825gebCAESUCkFvCAQp",
  "key13": "4f29jax7gJu2Tq1QKEPZuH9fLKeaxaiRsv7ryGPZ1WccD7biVccAYuc65bXGMgUJxzTXuSecpYSrS5kPRpmAHjaq",
  "key14": "5BackhD1gkviLAW1oz3jA1YWZAGcs9a2vCmGZZwUtHL9LQPSp2zEoryseCwBhKWU9o4yzxyehAyDYFxyTnAtnNy1",
  "key15": "2u4hTuNTCJkkGr9rFqrT2nhKBgPnMm1h9V3v8Y965f22bRpSgnfXR9KC2UyjvUNT4qAVMEx352duy26iambmXv89",
  "key16": "ZEegjpVAnM4RC5noEgU4uBmQQ3DQpVrmrdoTPcZBR4wS46DDTG3krjrWgpWRzTmEkN6VuSw8yykDNuCBHVpsqLh",
  "key17": "5Qa7F1i3BurD45Xf7sTR6H4fz7hcAtWDJezJYRcstLQDn9xMVXFaY4Bb2KBjFwuR35EFNnMDDPzB9o7mJhCpy67J",
  "key18": "stsrnygZ2auTmczvEmC1B9xPGavS9XHbPSVcse17yBaU2KLS7HtN3yjQBJzazfWcwjduKu9rUYM4wFkrgRdPEDh",
  "key19": "2myCB5BvagHtbKecpsBmi9iZcT4eNRaECS5qQ6fyEdFtrbmiSFHxARoSeNceXNQhbbHQzUcZxq2eqMveXYxNdTqR",
  "key20": "23N671zX2UiRxUB4wVz1G4SQQdRBHNSiQu955qc8be8p4pUeDU8Y8HWnGD3j5gmSseWhkhB3iR3EeaqaTNtL57xR",
  "key21": "mog1ssjscSvRu6tnQHeG5xcPjzYi4FmbbsjA6FmB6dh6LTMi9MoX29z3WW6fGTdjMXZyLBDyQvF6ePNVZLMekSf",
  "key22": "3Cff8fF2YVxVmKXPhYu5xJqVMd18ip4YyjPyDhik4oerU7faqfGTChir4WJwM392N82uiWT24bKpv9wBThfV7fxj",
  "key23": "eLp6jUh78928SftNP8LPph3P4no5xdDBw9JEJiuLhNPwQmgvPPJ6QyUJmr8ZT21dxBLzwA1dcT4aAW5beVjTg5Y",
  "key24": "4FmqxPvwSSyT3FvtZVmKGaLpc5gFQfLBRNyUoBmA1qcLwqUu89YL6P1jM9yiF2fEB5fpzkq7ZGwHdRJp7vrNAZ4L",
  "key25": "5cP8MhmuLncN9D9HcUcKm4jZWKLRiiFpvjjCQU46rJvYSjDdtyX8nAwLMTKoLCjq1NU8Q6TMN1jGSntexiKdwixu",
  "key26": "9w3oZoxyCtURUYQPMApG98vXpi91CaQSgekDbp9EiWqsf4oAQ2ros8nzHqEycKXeFB6N5jHVmyz9T69UfhN9tF5",
  "key27": "2XuoH87YECD9dqh33Wog9Bm4pDfxoy6EqNqzc7XUghwtufF3a1KShe81c2LdmJArGxfDvmMTfUuW7BgEvNWRWffG",
  "key28": "rE5CsgSwfZ5oqvarZaHNWVwKB6x1EdrR6K8Wwdd5T1NimVM9XfeH5Jtg8SZ6v58TVTgSAeEBt2ApnM961Zc2zzG",
  "key29": "5GyGcM2nVFB8vm1jPETxFVG6amzwZuEY9mGPFMTC5rJEKmPpPKcLC5wHCgCfpy7qD9x7mVHH6KL6SRbDD1YxLUWQ",
  "key30": "4MAJu37XcrfJYyios4xybvwyT2qUdD1T8i3HWr5qfWMAQE9MdBQJYTr58WxuFteEC3tGxmUtmykrUjsMwrnrqYYY",
  "key31": "2RwW72Js3ksEqGBdf4doxrK3dfYmKpu71g9edY5o7zt1yzzEuugGGLMfEgYXkHTQA4djcbPwgg9LKKh5ZmSoQ1dE",
  "key32": "4XL4X5wNLikUq27KgSiX1ifTrx7uLEQvUx4HfT4steLsG8dWw3KTYu37BTBp3hHQMinSirVsCUBnSGjQNZSu5sTX",
  "key33": "5h5buWmEeuriWxefwh8xYDtEq5W5Ad1BzPVkhJWyk5Kv6mxtdVK1KPN3sxuhVjYZscJxPVM6PsrMfqUY4HR8LSKh",
  "key34": "4rhLvZdFAxtb8zgj44Zq9PX4hednG42AfDmX7ZtLC1zGeNaDgjwWqW6Ty3jjLJap4cTAQKYdTk2V5JhRJNVLXzeh"
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
