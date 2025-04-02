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
    "4b19ZnNeyr3915njc2qyADyHv4JAkHXCw6PpSP8nYieUHoyFr2rcYpUnCmEamRUMy5bs2fshpGy5iZ951pCaSyTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JPS7bZwbYhHiHg6NeubvKQ6NukAo7k13BcojnUZ7KVVTNHgUYivx1EBWLmWhjFp9s5cUgypEkDntWQJEVQEPwfy",
  "key1": "46t6CCAmCFgN97XTND1ucGMGLb9fvmgcAUoUDvMB2Lv71Rp9BkZUoyw1zxW42EBytM5vuHtmeKB4G5ZKcqfpjD3B",
  "key2": "sh2ZMfyxDLF7g8uZk9FyPu1JNCB9PkRrpYmZ4TzEKiofRWQZ5QAkg4vsaG1zaz1jo2pSQkfG5zeaC93Mv9Syagc",
  "key3": "4dDbYCUCXzznjK66ESscmduHGYtQV81CveZNR4UgrrQE7gSpiScgUUCHENNxoU84m1RaYB6z1hbtw9jWhc8MayRw",
  "key4": "4FLfmDtTfBJSvbMtug1g8fNqWYcaakLb5HENMUFrKgHTnkQikP3pnveUGAxkvDJaDccBiBxpQHuCBZPrYvXThHG7",
  "key5": "2TEprh8BdjsWzbdHQnSPg2tL7vfMiBExsjALe4Jj71SiyuuKBY1DQr24xXS9tSRjj1rakGbqsshUr3xRZb3wJtQy",
  "key6": "3mhhGcYThjn9eMJ4NQxnR9wvCo2ZVnaJJLRfXUeKQjL9m6iH8ErhC1VsM6brojP52WPjKaFb7stwXzMDrU5m2DHd",
  "key7": "3b4J8qRVaj5gh6LM11z7r3eFPjJ6vZJC1faHPX6743ZZX8KFLrL4AyFQSbrxwDRDCkAbEvVQXQjM5efHRG4N5V5N",
  "key8": "4eRURKC6nRgzh8G2v6pn4XNuKvZ4Z1z47pNADJnQ5kUhumtzeuFZVhWs6dEJLJMAKbVrJR42qa4MyjKTPaHMZj7R",
  "key9": "3bVyL9Euh2mUtvhGr3jsLYTTg1pLQkTVeF6VQ5fqhFTCNhvtanMXypGumiJhztx3gFXhrhPirNrVCndccGZJGnj4",
  "key10": "sXTQxMrWyzqCm77Pd9bzcwdhmVeKmqKb7KCjeo4WrRTkDUrbAWwbwC8BG9C1T1AgVmGho2Qfdb4F6kTdnmdiWK5",
  "key11": "2Q5fQYv7NduQiFTLz66LzNQLGXDBRmrAAG3otCuJKe8SZEJUvftXfEDsvTVqvts2K3ewUpiem4JUpMKGsMcBwYsN",
  "key12": "2tku41kzhD6GFuESAkMVR1q8YmCr7zGt39WK3wJ3KHk5XTVWoV8ZeWMGT6K5CYxLCHrz795zrAKzF4K8dEmxVJVv",
  "key13": "ZJR65q7CwinkGnesrEhxr5N3vDc1coyVSx3WGGffoxbx8bGEEZo1782DqhnQDpjor7zkWAvmSSEAkenbmmspojD",
  "key14": "29w7kJCwQuR32amxTt4AhW8Va5gwne992TQqisxvgKxAzSphzbXJkX4XzYGheiocv7ZNiYYUGrwnpSq1UDDAoHoR",
  "key15": "LvmNApgCTBCxhiJkQ7o1RE1Xc1UYbqYX8FVtkaqGZnBRT8BpxpiUCGVtq1NL68y5dT4NkXFrUq1AuduuVjcFdu5",
  "key16": "NpZA2AJrURtZf6zWD1u8XXKdS9u34u3vuJ5Lju9E4u5jYmRd46aPYjd8bvXrp2paMRqqivi9FfAqQE9zXeMq1v2",
  "key17": "4B1umhxA3fqQmaWyDe46EN63fSiNMDeymjizuQNuvb2m7KeXPdfAZNQG1tfm6vQFCBi9bQEc3hpLR66Mh3b4zLsr",
  "key18": "DMfMrhvkfHWXyA2XWRsyQyRCZw6c8qJmfH93AzvT9gPjZuKvLNvjP1TvwFTvawkNymy4YQ31sdvBWDYxy4d6qCh",
  "key19": "7U1by1PoJzuUfje6xaCkXAkFWpDsgiYDakKXwRUX7mdL86z1negDDfaPLmVyrC93Uz74cu9jDfY1B1srZHuVzm1",
  "key20": "3p8PAKkk5jXydUqcwzjqiN6CLQjuh61xbRtCqHiSGbnYmhEejPwkWa293HPCLmfQS1n8rXaTNT1mwb328fHXN4VK",
  "key21": "5PQq73cgu89R9axp62Da2rceTLCiuuKUxEUUvEfHnL13SbncpCEAokzFexhcQ8qXDVuG6Kw4V6DNmk88q6mQc8Cc",
  "key22": "dRRKxakLmJxMTMNEC6UVKQFSakE78CGBsHfQEmhenswAxhiR51MrwqDjvMFdJDKHRsdouKsc3cPDwWbdfp522La",
  "key23": "2K7EEesheC5RHiuW7KmHvnBpdM3H7pGhK98vZ7xSpF3kuJJHPywL1zY7hfgsyxUUKHqsViXPtgpgyU4YLxjC2qmf",
  "key24": "4nEoXrQ34HLrXnUB3L5a62Xed48QXLN97t2PqmPmKbg76HcERSYbWm8fV5nCzK28XrA3L1yHoz1gBvG5W8sRoe9T",
  "key25": "5RjvrUze32PDj6SFKvcHzGvuEmVCyND6peCqSpJpQAycqd9FUvCB99iDyg11sk66Ro7jSGEUGiHESyLooNPVMWhy",
  "key26": "52smvGwo1f1qpWWMftMVro3c27MRz8TNpAPEq4Lw5imWwfBXiXrM5ycAtfX8gdfD7mrwZP1px9Pn5FtMERPFmmBv",
  "key27": "4ek2zyHAqTHGcEVUvuzQSK6SrLqCWFy17EvLcgmGRDXm4Hp6z99NBtamxQ3ApvCqMgpbzrjt6wrofFoaHcaWjhuv",
  "key28": "3QhSGaNGYxyMYgVDvw5tauTFLMcMF3Zcr8FLMsfRUX1UoRVrVHKoGMp36Zy2QrUmos5LEYxu9KN9Pkb7Jvz4J8jV",
  "key29": "2cjkTs1My3dWqsb4QhN1u88hwAyKYyj7VN5s4X81S8JwizaevgheYqNMTaPwZtUGadq5x6EfEbEu7yKxbBX5q4Ld",
  "key30": "vzUmB53Mp7Gaxsa3vpvKc5JxpX9v1BZXu7RRcUJx3hEJRDx1irVD7iJGEQsFAtxc5LhY2c4qyQ4PTqV9QNJzrVB",
  "key31": "qVL3Eev9PDar6qr5NoVjQZMS98Fq9vEk1oLwVVKdK6Eg6nXXsPYjdJjCiczK8e4SvQD8Xr6w7dcSqMS33kBKrnC",
  "key32": "2C8LkhSgcPH2EYMGVpFWwwWNPHzY5fgiw6yqE3bD5P1v7fg8ZsJsoBs8iKmq2GphUiaFQaXmzbnFGHSk4ZTmXiHs",
  "key33": "3htE1jEB5eReeAKVbV5vBjXzBPWKnZkFvaHh116xVRb6E4NeHTG7f3xPDKmVpQYMV4x5SnchRakamfo6D2ip1DT4",
  "key34": "3dFvXx8AXuQ72ESBbPqbW86Eg6AjDb9AJCdg1nvzeuNvFcwuqkX639Go1tcVQGtTiXyZvdMpcz7LcUhkbYbY68AD",
  "key35": "5wB3Em3BZkecDKwK8XmWivG52C4SAPbfRZRBkot2De6wB8xTNGsXqMr9vRbGv8dywQvN5fxGZamRr6qBt45kJfq2",
  "key36": "H16iemwL1TBpWadh4C2FTUArGQkXsCV8S5x8rQ3mZEQCMdrjvdvmYPYnbeeyn9iiDTPxEU1Yz2EGf3YbCKYovj3",
  "key37": "63G4QVDV78iXR98ifpxcpzABfx7JqMMKuaicpWTdGJ1nHicpDDhH7zh96crZPKY8LbSSUcJrfhwGZKuqzFv7GudH",
  "key38": "2DEKqWxLvvKh8Z3BQghh7g2h1kwNG5FoW7S77xSRrChMiDycAXsmr5TdYRvUT7iyoY34SYrrq8trmsU67dTnR81D",
  "key39": "57N7wpY7isqR9t9hw1p7w9ua4HKEdbFtMg6fKyE2D9YFV9vF7k1fVyFxth1UU2mkSVFKPvxABgJWH9NRwtF36huw",
  "key40": "2QVKt6tz9N7vCsQHsYb91LNFGDC9rFvCrZH5dnNtWSkK4ZVKiUacDGHxQjpLgMnwbV3BfSfkYgCGtuyGmJFSBcdY",
  "key41": "WevSHyvwtijWGKdeUR6yUeKgwFN6B2PfMzJ2v9qdtQdEhEcMDu5K2ctm9geRM5z7BoE5iNiMQkGBLszhjeoPJJJ",
  "key42": "5W85djiKpNkCub48Xq4rYydwSz5Eh45toXt8WBKnJJK9J7Xhkx9Yhato8YiBHm6CEdCs8MRLF3mJypUYJbawWg2J",
  "key43": "3jMTM1FCEvRGtAzg2U8jopsxZNuXh4bXho4jsRNxvXSYfaGRsRqVdRKVhjc6G4sbgMwcf7FypwYnFTvrhwCeW8Fb",
  "key44": "5U4J5xZXbAThgkMwAHJCMfAC6pDE5pLXWT3Z5rGpS3oxBfRMKJpY66qjZTdLuWf3Bnejf92tSqGNPDLRGhjxy8FC",
  "key45": "WgibJPLGsin3uuHyPz2xvhJPKZ7o9aaztmwjy6S2FP3KeQZswTq3xbqxKs5Ksa73YA5y3cLPMvdW9zJ3sqYqVxj",
  "key46": "4shgDjc4jWfoChtd4cGH5i6qvPCi7wMz8cJZgZeLkpZkPxdkPeS1H7vzrVJ9ZMK1GG6thYdqgn9bEBV4JREn4kGg",
  "key47": "4ooLCgfTmKAG26Fgbz7xcVB45gbAetEWUML3wS5yUVefWBFTnUxjyQpazMLFRyqbqXX7pvTFPqoopjkvKg491dxi",
  "key48": "3i26UFvS9eB2PLGLz7N7MVQxWmFCLCo9CRDBouvLYkvNNVq3Qry9fv4qLN6Rnv3tKnRyQgemP9sTbjVoZP52T6eV"
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
