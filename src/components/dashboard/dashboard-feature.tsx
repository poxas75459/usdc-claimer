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
    "4JPpaHw2fGwGJBKzXcG2SYVWT7YpkfiUM3iELSophycbmLV2bouTmL1znCeX41PTXFBFgEYnYGk7BC8n2rtJMjRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wTuv6ezUCRZRrwnPQbnrpueA6xWVbsUMgK7EKpLWZiLKNGW6Ntt8RPrChF6RuxRR87rQFGAQR4JY3RUpMNm4PTU",
  "key1": "59zYryTTGJ5J7JQSgDS6kCATRxFRwddfJnxEdfd9zTDUjg1wUKGZjf9G2p9gAXFuf1yu516nNbpvhZxxyUCDZSWK",
  "key2": "2gdKhrmYU3niiAFYhMyWHvsBiccWg6htVg6xcrK18FJo1CDnxZghQAb8s8JfsxiMadqXHmbLDPeTvXdiVCmrv8Hf",
  "key3": "5SJbrwoMtsBASwVvBZgWU6uAEM9V4B4diwpS6FU2kQg755R3NswVDQdfbWLLH7Xjc233Wfs9edEipBChT6oCXAoC",
  "key4": "2UrEWKsGE3ruZtzubw9iNM4RR5JX47tXS9Y7ZTCho3jcxh61dJEruhvunha8xQFXvV2kTsMBuMBNCF9Rhno6EDAu",
  "key5": "56g2QuqEXUTNUYjQkBHwTRe2dCS7coNFwydJMaL7QjW6crbswH8GW8cQAjwoRFyLss9AAfd5tWsqKqo7gbJmikY",
  "key6": "5pemFRKDGR5xzUEaJSp9zUZgxJxcgj3aFukyBe9TNGUmsqYaeNZ2VzjPD7CfXvpoNVdQtYJbxncnSy4gv2t5xRB8",
  "key7": "4FRudU9Y3ChjXcBCsgN9K9z6RBacV4weGg3eV7SaRcZ79BgrMjSeLSeRNezZ5XW5H7MmMSj5UxPHr9CuhaH1VXLC",
  "key8": "3duKjdFLohUCzYsEhnK4JEnsxA7htTjxHE9gWwdDxypVMj3BNxfZtS7UvxzLNqp5i6EoNqwcYzNu3MdsAK4a7gh6",
  "key9": "2qWrkjEHMiS1a4So8oy2RsaMyXSc9ko7GBBt4xDVyynLP7iJKBw2WD7GBJmVBoQwTodz86aZq39MqKUC3wpqRV9y",
  "key10": "4bt2iCGy9YtfwpmudU3uzVy8o82UVqjRcjP6yQx2jq9JD8NiLxk9aTyx9QR45vkN3Exr5EXCpJHcyGtHpXRLqG4M",
  "key11": "2VXbRoDnFeMyqWkiziAGhFxD9nNKzsb5fHKtsvkRncEnvQTF5ZkcLhFjFc8oGwhnP7nzrkkL7H5xRwHCdgRXdoSq",
  "key12": "5zafgnrC5YiF7T2R7WpCSfdv4D8A86po1yxwTxs492XNXJZKjHGqhbaagcqxWbdrXDgqTCX3tjNwxuQPc6yWuagg",
  "key13": "3vb8CaofrUVCEqkHDB41Nd1Ju1YMzs2FCSKz7agD2D2uxmJdg972UgtPSVC6Doo66STn8Y3FnwjKiEZyFExgut53",
  "key14": "2av6xwCiDiBPJpqeYPuY2v26GBE5X1pPQUQg9ZS8vrC7ZVCJeDGJN7BurLZ3UuwMwaZyWfE5VF4zj1HZznMP3guv",
  "key15": "45PWmWiXQ4W8me6pbrNDyTq4sVsMTSgfZxTjvjv6awTFvosAkLArP5Xn3JDzenXSx4aFJeUVsQZxsvWoAAA3nXaJ",
  "key16": "X22AtjeWVZMaHF7N1j19WiXW2QVu4S5srrf5X6qaBGUZn14z1yJT7foZYVWAd5qnwNQm2Us3WFmsy3V1dzBnzgm",
  "key17": "5SnABQnvCRd7B5BZ8tWsWfq6ZoBn9o8wsj3TwFaupF75Pm6MJCaAgt446dRGL3TPk8wdQ1AUccQ3a6hQyH3kUEge",
  "key18": "5xeVGA2WCGLgzanZJTMmSamfvJ74PN8a9YxEDJZFsRPAc5EgYAfzodxB7J6CMHy4z9Sqy3QpqePjwzJd4KZ1s942",
  "key19": "3cfJUAYS64LDgLWM25jxi5dnKmpH7HWiqGcnJ6G1syA7AefJbxfsT3WeVPsw6WXwbzckcuoUPW6eZwuNaecL7GzW",
  "key20": "4H5sCpNChceQUc4Gpv88DLPhedqDZrnkagPKhHr34u3vBUAY1JmGRnQ9qD2NPzERX22bMD6TV2JD26dWYvubSyws",
  "key21": "21SzwAMtTo7vZgz7W93rZYjAxPobr8BKYYtWaTg51PgoWrurFRhHsHB1qRh7khZC9fcWRkXkjXxvWeKhYjpeddsa",
  "key22": "58KBwsNk6aJ2gcXYGjDWrjkCY72VqKyWH4k14o3XS5ope8bCrmKLRYvJPhamw927SbkPWeaTxAPZVcSSBzNoXGdG",
  "key23": "AHHgxasjA8a41Kjx64hXvryyrcWrRWGrEdHnqbpaW5Eu5nFuUid8v6sHDwXrrHnn58HJDoDfRjJD1HKeCeTaKuR",
  "key24": "3Dif3sDBufEiig3qdUkGLbV74wtjs9KxUWJLGzBDDhuh7KkvJeKcrUvxU1mx6aWMMuRMqDkDZZFtKSsD8Sfukc8k",
  "key25": "52zzumcsEoDxV8ETJ1prVRpxeP2CEvkxxX7mFjfBZPbEdYALYb8wrQcmGMVxE2o4vQraE8wWF7UmjAGpS836qeQB",
  "key26": "tSAM8yeKVgjAg9FvoYeVYyGnJuSM3XEDtAoyhPQupGMfmqboTT7zVcfZoggwiRsU3eUzMUw5nufCtLC1snKCDyh",
  "key27": "4xwaaQqUCjNXZwtk8nHsU3BXtvEedhLRWyR2zjpGGYrxaoMKH1qUugAXYQ8zeyEFQkqMaKchv1Y68fuqdTPQ6M62",
  "key28": "4yHX5vhFiYub77iRDMxRX7Pj76ckARCFHnjQqLAvXjnfr5HPhuHT8gFeW1SSYD1ZVe9T88gL4dRm4P2qRPstUHCb",
  "key29": "5LdDV551LTsqBgrar4sXzbkt5LNd1q2oEzMBUXzmBYB8ST3EDPg8mLUFLy5QsAG5jG2eVivuLAqjvNgLfW9fB3yU",
  "key30": "4xYYywHrSiGrRyyJLHZ41vuM2NtQMcKiiSrq8zP2w9kCMtquYLnyUu9Bf2MBjkZmwD2BcXmbgkzvi9BDkFPqrZJV",
  "key31": "ke8HAybzDedbCbNzsnPrgpV319h8MdShi9FwJrZ9C6froBKzxKbcyG8ec7yT3qwVrrGWMGLVj4EZCXkxFwtfA9q",
  "key32": "4RQuw1nPCmtmfgUZxtvLJ8pQqf8aDGGnwDUmQKVSRi3NvGMXLupB5fmVfAvBHDK9icdEF1i6WymDeSKQMqwQbGeo",
  "key33": "2KndQFZU3iwY9yfmqkAffSq2foj1EoDdEzWV83HEJkyS8DPxGDqyTk2F1WUVRXDQQ57k5uvCF1dsoVBUdMBpUDsr",
  "key34": "4TQabu3qtgXracFEvdwVLP2S5j6vB9qGC4YTCpsyg94VsJw2PnceQ7Bg64XdQEom9M1P37ezDrkh4NFnHxk3jXpX",
  "key35": "5kkjoLLdHHj4eefpNUQCNqLeteCZWNUfa6DRL9BwguTPkRNqVFcDy8bbsxWMTjvPZTzrS9ef8N3gMXKbiRVDzYYD",
  "key36": "NEWaGJZ8PNLz71jVmuYkiNvjJC4KcPbXra837XDgrHdbCgY34bhTudwe8xgy6xDPKgUiojJ7PYuUYLStLSNxm4x",
  "key37": "2CTTSQ2EdbjyJ8BCTeHFyBJgq7f4djJq5hDVBANVkt5j6bZxJYcfbBAZbhepL5YA83MrLJEfdWTeWVbyMCsVXdSJ",
  "key38": "4NwkhCqyAjRxeuvBBfdH6mzJ1jCj4zdYmk9gHR27jewumnhQ8hhNTRddxwHQEvonUxFzSjMoiheCap2VEWhtwioB"
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
