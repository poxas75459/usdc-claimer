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
    "3HghyFoUFAG6vqFMqjwBWELckgPVjdNb9sM2ZkKYMcyGd2EyW8tAQPDYrf8qtYdDECeMaDwFXG7G8tZE6rUifyZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tfk1x2UBZ5U7itELGx7Csnqfyry3oRckY2nZsUjM76ZHJJVXyTazppbPLZryeCid8SZ8aDpdruszymFMoMVm1eS",
  "key1": "2gqzA2MZtsGqRFnmWt9j2u2Xw7YPWJcRc26z6cmUCPRReSaW8uoRotYYqGyhbtG9zJEMPSq8io2HPs4dZUMRAkB9",
  "key2": "5ksDztBWEuwV8JQ7XUJ2NMgHYgAVr148MH2VfezimBZHXWk75eR7gmrrqqjWdzKsFTsx69R1HWHwvxrTeJoXEZHf",
  "key3": "f91HPx24z7irktVrr156raqAHWuHdeDsFohmkwQbyFAR6UDxhshd7ftreoU4rMmviHwfBdR5BToEnK3HH19PkDS",
  "key4": "5Dim9kguhzsTdn6z7jFD5yY1o33SpN28gC163CL1HfmBHyyQoSJwy1RjPv64GQ77nvEsmzNbE861BAEKbLboFB2a",
  "key5": "65mt6BTo7P97p6dmJD81TRh7gsppKP9c8nu9hr4gE8kJ7NFEpigg2VSFRswnrykvPz861aF5ijQmDaAgoqtosPo7",
  "key6": "454kADEWDFQWupvbd58Rrcy1WXimpY5WJEHnxYgkriknKe2tWiaGMyrmZoKo6JJFztSinPNg616qZyKuwsUTfsxX",
  "key7": "4pG2kkdV44TQ5C7veiYXCBhLQvo499xU6PNTh62JwZyRivPXhNZMMtTDJFhjerr8VZPbNhCo85WVVvZUhYZ7gVma",
  "key8": "3UpX7ytEgouawsD87MGoshxb3gZ41qwUaDroaYtqs3vQnQntHuqeG6rMnLptVLvvSv2VqRtNpcbEySv6NXMdKmmX",
  "key9": "5m8WtmsWQiCJMMMZj5XFgWiSRCecQ5BMawNXbwTaSCE6xRTeMbq8H5j1Ppn2EWG1E3TuyHmivntg32ArxoQFTSD4",
  "key10": "qZuB5hPargJaVZpUQqFSZ54YZ5Q7tVK9AnwipnSbise6Z2khyvHFCSn3K8PEntSsm3k5NPs346yDCt1sVkL7xp2",
  "key11": "kxtg9WSR6A1Faap1yk2Hw8AWDja1uApHFpRaGYoScuCfVX477MjMdFnxxoymBZJYTN6RveNUAULRXBVPC8YMbfx",
  "key12": "5GB3yjcQfSscbUsFwnCsd489PHd4qQ1qPZhXVdkL1TaodEjc11ZGWRnNL7AU8hzQUS4RHQQumTCFuF4wD2kFYPmx",
  "key13": "2NKtQWYy5KxgGmzkg9tModBwTNG85eakAbPBaW2rVYacxRVuD3A9UJkrziV6ZjMQNrqQYteW1W7Xnp9NXE6zh5B8",
  "key14": "XmebxmJW3FL9ngMT6TBCuXXtnh13fR11brFFdeFAAXEgYojCgc9ddXJrqn7AnSsSZYwuHfPGyUcnyfFdXu3oWWS",
  "key15": "5abCbShD8cM3tVS8G7CcifdBzRmAxrVvfw7nA77kHtmMX6EnQrRupXQgbRTfxH4tDgakn7FA4zpt8p9rSkmXa16Y",
  "key16": "3Nj4xU2svqY5tqFmKoifDw6Lvm5FNP3Eb1t5r2RiU6ubybtcmBorq2ZB3gvBYwhG4GMhHHJLuei4Krwg1GGpEAoJ",
  "key17": "4gLHM8rT8DTL3B9LG4inXWRhjwC3AbMAfmeJxqCA6yvQNmQYSKNNVuH3pgPQrRJEeuWUYfd4oZM6znMnFwLKjmPZ",
  "key18": "4nHsmaLSQhLdqQQFk1GHrYAQ3Uo4RV2x4ahTd7Y3faHdh2Yw6JTz8VXm8jsXhy2WiHVWAiEAXdtYQsDruWEPFxMT",
  "key19": "ycrZjETnwrjsJxFms6uFqA7rCR4Q2EnSaFyrQ35BvkUvF4gdSgsjMCPxvxuSSkVecizZBS6q1VLD4Xufo4Cezdf",
  "key20": "Vv5EThU3WwTcnk7JMGc4ifucr1UAVQEiMkbN9J6Si9aoaKsxb9y5TPxLqtiLehZygvvbFsQFGxqLezvbVyYo5Yj",
  "key21": "2KrVDqPNvzrm46DghHQtjSRw3QfmT9mi7Cz2A12pF8NB4XsrP4iNtJJ8dyuSPW7411kkiL5YvsPjhK9UJBnEARB9",
  "key22": "4fzjjJtHFkQJGizwSgNQDnTUtDaUs7MAHQX1ZRDti1EcnS7B41cCFvWyiRbA9T1L6WMLXZf5ftV1YbJT3c477a1s",
  "key23": "5AyPpidUEZLmbMKWmT2fosocNqSw5i3qjBoUoU35sQ6zfo6G6QyxQGPqJhZK3o8t6Fj1KeyWWtnFf4zAJjNEoeRA",
  "key24": "5YHZLFKWVeVcwUVYJuPzHWVN9dH6jmKE9TsYpE1RDi8SAzZghKt6f4xHg1zK1XTT6ifrpZCHfAMXnxBKcQ5sBnit",
  "key25": "3jb7RZnZoJ7B4BerhDXV9bMo6XvWm9qA8Pu6iWSMXcR3QwjraD7g9SbUt1irxtc8KoncbfPUTUzSMzkSA7mvL7fM",
  "key26": "3AyYGFTDEq3xkj4kHcBrnJsBdEYvqQWZDLyUV6m8Ss9C5Ldv2gb73D9QmyY84QS1erFYm3tAukDxrwu6kGHLRbpe",
  "key27": "2eaomm6VxoNnQSmykRdhJkMaaiMsfvsyjUQWvWP7XdvPFwzmWJhqLrKQmmrR8dd15sckVFviPQhMGGXTMjZFHwzi",
  "key28": "3i5kjoNndSwLdLq99DzD21nSyRVnYvB1bG7A2giuuNZnkWjKVnDgQvAi7qF6tb9ESdbjUcTtzvAfnY2G8Ghrj3Du",
  "key29": "t2vbjK6w3DWtG8qysRFhsZsNgvn9PrkyVtBMgYAb6bWs7mhCXthicKh5FZCnLYQM3fFsFLiuEAnmR8hTujGiE3U",
  "key30": "2fUJgQrLtnDTtBHuHC4wU34FStHfzZnxJigJ4n8kkFUnTKpquEz714S3SsVNuQMRotx3oXDPfxr6jWQCyV6xFUxv",
  "key31": "3Si94AF5HSvqx1Ezg7ckSSRi1V2sxcve9tdzTRqeY2mkjW7PK4tQa5U4hj7G8mTS7PsgUoWPiPXcRPMXF6Hj4CBU",
  "key32": "4XEQYFPFiYLsFFgCocaVpK1FF91jiHuTi7xWoftCvjNoymiFaY3NhECVVKpHpnGtzrU8gZMy1MSa14TmEQnhrDu2",
  "key33": "2yoXiB9ePtGghEPKkDyFVzwvtfhF6oRBEjFRT8LCPU4RcWkMwEcWpdFew2StCNTMveVSTj7qF9RPbHec7UDfGwhQ",
  "key34": "3TgWS4Xxeptw5QJN35B79NSTibzqWnpgHnV7bNqSkHSEaidmrvwArVaecAj27XKqjUYWgiGCELJcoerKUxzttu9g",
  "key35": "4B43Ecdabp7CsYzGMJ8HBrynKToHEHsyAyo1xQRdvtW1AALjvQm8yr5xnn7dmY6A1kYk5i7CnS3kEGWco3sdTChr",
  "key36": "2LQgZfz5x1VSg1sSs18vx1AY8NUguWqyiv47W9Fc8vnyQ13Q4b7sPkDosvFE2hmHdoJz62vFoAaM4V5ZrwH5RppU",
  "key37": "2JPukdUgS6bd6hQgJA55itCP5K44p4y4s9MqSDviPmFNNZX8t4fg9w9zb36GH289Vm86Moth9c6Jmd6rqnSHn2LS",
  "key38": "2ZV4EvRAmTkEBxuxQ5wtvKyCsVaMMQzhXDMcQ9RyC1oGJPMTxxE15immbFVgc2vtgMjQQXfgV2hPKSBWX26KknQG",
  "key39": "2Wj6rXcoDqKUddzviKHuayzxA6dNLkQAq3Rk8nUxLzy5yxGw1PMkAhrrYdMTMpSKyYPxGSJYcQJuhsnXwZHqnCGE",
  "key40": "2KfgCK5hUHFWa597HeEiXutc9dNeUFitpTHq4VtaF85HwwrA6SRxErsNzk7kf8XEC6CH9wBdHY1aMCG1iRpVXQjK",
  "key41": "5bsast2ENhJwMpm3X41t1CEnScdZBmrptundGUb1UpDfQmmAhdnXXf4DFq3iQeRYw5nCBN4XF5zh6AeGEEzGbyse",
  "key42": "knXo2qoJhhqxgfaDjfQJKa52wWBKgrzPdto8PwZVkk7aSonJwCfkVbFi65e6eQYGyAhAUZfEM1FwFvFTnHn3qyq",
  "key43": "2KAuBceQpZf4CW86Dgu1RQohdgKmTfuwQTHQPf3bV344m5m1UjfoXpAsAomeCmaSSVbW1M7LnzV8aTjw6fDB1h8e",
  "key44": "3hMFQqeZuo2yLnvxokJaF8xyzELR9VL6DES2YTQ7f44Fh2SDnExxnbf5yQoTfU8dRyzaP5gvWBuKQr2WnZsg5FTb",
  "key45": "5mJnxU3uz8MJzWJj5gTAHSWXQX2hJvGmbDrQfrmyNA1VJkxMUXbGuCWf3JDHgwyA2k2twsBttCFv42itMXdpM9eX"
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
