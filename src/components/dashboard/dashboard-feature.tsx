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
    "5a1rUd9HgRBybwxKYpEw3bxjcXJGo6fjuNdayhKA35Mos7iKtn3ndoWp212jXcXHyArfJ69JyA3QyqDWPXtX8cVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27jTZLVkJWXE4iXGDriQZe8yMbmxpP9bSM6xMUJ6zTPgJ8NYA7KJZMcFrHvaLALm1JXuC3oX4452YrgYknCSE4tV",
  "key1": "5zZ1gqNvFdigygyXEjC7dBs2vaB5Krgrs7gj3BwhdEJZKNmU6gsvxE4mk2uxgCVsMq94tjqh8CBWejQk9oniWwmR",
  "key2": "347huPu3FHt4UVPmJGYKNW1TaVGys6kwceinny5bt6efpFvQcnTkChuPwui9iNUgmc47GjccZPm8G37L9zGe6KC5",
  "key3": "byiQKgCd1DC9JzYkoLqXkXpj8AKADw33jp8unsktNMQJBJheoWqukZVX5akX1z9ZUMqJSwumJVekR1MWE9mvcnH",
  "key4": "4htw5aSo4hxVcsWiftvNA7G7mRzM5ydaAB2y4vtFUeM3sPzEKRnTsabaV2EyTgPm6YkM7wSUPLmQ8EtoPF8AipjK",
  "key5": "38fk1MqEaFqJMZKR3bGQAWvugW5sDEQhzBFt3DVikVEyjNPp8n1cdkSThFqWstoNjAUH8qgEnmbWeQTqqcgYPECa",
  "key6": "56z78yQxJWyP5vLbQZ5ufB6P1N2kTxj6mmw95CpM4PfwjW4HqtSSfi2RDhRe6jhB7MmNyrKM9Rsp4Bi27SkaGjc5",
  "key7": "2efJUUTqXaC27TnUd3TPFegdGhePbK2dXCqtqUkAHsYoDwhs1TioCrwGPxGytCdMuAeNh1eVjS2ofBYxcTkGuFJ9",
  "key8": "2aEc6DyQWjuKryUQQ2YArgvP2rDfz7rGnaDGqrvoKMXgydmYkV5Uaiw938vnyKwwqKucPyybauTDUqTobXQSzC8x",
  "key9": "EWQx9LFusAqACQHBAkUUCKSZtZoA1Z1Jrdy6XGhSnkKd12e3RFJ68yysXymSbVk3GQnSAd3XGGudkKBXAgNhgR9",
  "key10": "5QUbpnddggEiqGN9PQm2MsfzqJiPF3M6pavDU8ZJ9ox63YCSQLE78AhxdRMHjch4BQk4gEKYhXmnxhrFjSnMjvZ3",
  "key11": "3mfh2gVYsKD8a29yyRqpg6DMcCiWqXwvXzw8GrgNDs9DyK8pCKpSm7SSaYnbF3BVA1wRzE6bUaAti1ZweCLccUCP",
  "key12": "4hZYwLJ9kWkiEEF5M7R2hwC9PafpeYXD67xUgbnboApP4MBHq8oywEPh1vVvxySCoVHqkXy1BcfFVKqq43eNwZwA",
  "key13": "UdbxwFXeP2D3hdwnBe6G1RGBiPnKvS823oMHNKhMAod6zNf9TWVJWzjvGLjhm3ZxmcBbmsDbEm8u8at8K9Vkoi2",
  "key14": "4RDdVsTjSuP2Vo4a76TebjJ3ddzvN9wethcVyk43aSdTR5nfXgDd6kNUsjHLhNaRdZvddrwanptsmgKDtxULEztF",
  "key15": "5GyvjceCYJJziq55KF934NjbMHptf4Vwu7sSMCuwbkyvdtXku7YeXe5ZVKSUfwFBwyWSfm4jwfg8u1FtCwVHdPzF",
  "key16": "cmswh1YiRFU8xk1ZfFZyG3JmWQ2n7Kt9zRYKqNsNeHBv19w39ki7jL14dK7ZPUNf1Eob7ZAYuyCBRDZx871V4Gf",
  "key17": "3yWgdMuW8AFpzaU1FupUfCP949DdH774ER8m2PCuCcU3VEARRXwXPZLP2mWdXiUndXSCPD5yDssTR8ELC87jTygj",
  "key18": "WiKLPqx7FaF7HHLKYDKiVf1TiTFAPuuBUR5MrEXV27cfQ6EsG7DTudLHe2mv8iXv71LygBkJ7o4vBREJfiZKGA6",
  "key19": "2AgJDuJziYRxoaE3zYVya49Y87KP4tsn1Qjh4UWLByFcwd4RNYS9wwksPHQxzaxg7Qkao57C5AnZzVnqnm6ApgHX",
  "key20": "3cqnPtg5iMxKQemJWfdd3iZ6DKceapjf4g2gHfehXfzMhiQtBGY5fLBcEbA698Xw1wLV5QGbA18sGxeveA2Lz2Ts",
  "key21": "4JmF5V3ywfKE1vJmUDUf3n79JMrmeYDYF6sdDXwcsdp66aG5WcZmUibUaQg2xz3JtdnE63BvdU9Z9vVAkmVTt8en",
  "key22": "2oPYzcm7bL6KDGQPwvG1pLMxJjBSPgjUn2x6AaAP7UfRTyPFacSDEyvv4gt9mCAG3TpJ7wz15uAifxcqtZBFgeAh",
  "key23": "4s2qn14VRE4iFBxAyBfEavEWwrKWWZR9B68ePemAMhx1SVER6qEr1rYuPAsmEaFyr4qvwZdi5ybcZ8ys9NAnCP22",
  "key24": "5DgpZDD4wsYH9koXnmeAB21kGaxX4R1DLRDdHjXa23iZ7hMUwabJUuumXNSZg61u15pQrdvT8AaGb2qvhpSWGjiD",
  "key25": "4tNfUfLjhLNiu1UocDQxbSLSsrssiLb99YRVGzLR87S1wtk2NNDp3PC7vi3ozWgsDs8kufhrYA2W3NETx8xbuegB",
  "key26": "5Fm2ZsPeSKxxVWd9RpX6GXZyx4CG8Q21ibQDUCiaVZd5oa8oLdpcBM4KT916oVSYa5DnJKvEav218e4xDf7ciRa7",
  "key27": "4GWrDxraa9Xykvy2oTRSk6kpxY9gFiovpQhLtqaX3QUhYi4iE9R2YnWZVs49RiQdEBsCdWHa76uijS3xipCNfTZX",
  "key28": "5mQUmV3C5oXFcwqvNbwA99XWpor1bnjBQiupUthxvWujRNthDcXnFksWgF1ppLQCaKQkBxHqFqqyckg7DaF6wUQ9",
  "key29": "5e2uURrbbmKwfJJF8hqN3s5XBLpPm9vXB7XEHub8kgCMqnng8sfoZGQd5dg56trJBvhqQEmnsTW2etpPYHjSEGSR",
  "key30": "27g4VwEDVV4tCboGaKzjdNAtnD5pUEELTPAG839hgQjoZ5trmVD7gHo9nQpfYmDq2hzvEUurKwDVye5CYWgWYft7",
  "key31": "4Duqn6YyHPotciK7cDePvS4fUgNDGacwDVWKCkeoKQ5KLUgDkG4MBGdfVP38LNY4zN5kcySDwHV11CfHhFzteAa3",
  "key32": "25W64DmEEgfnSMq5LzTgMt88NpZPQiaRoiLwBbnpcNQc5vTkQnJvk5MTMss7RjD4KTMabKdcpDAXrwqyrg66QNfx",
  "key33": "5LLnV7v7wZ7jQcpPvBonseYRjLaPTN3j8sQErw1mZ8i9hUvJn1i1s4CMfmcY4s4yTr2BcFUAYdjrfu3YeEuWza5D",
  "key34": "5DFScU6hK3fAavm6vNdEcKvV2AQpFFDeSojJ5D5wBM9oQrHLZ7UVGyPKqgA9hTgPwkmCQLVyoUQusvPpwSudMkkB",
  "key35": "63D9pCVNJAtjKkNxMipDM8mtzQxJ98PrE9sZozNs4funKPFFzncYUfN1yhcxM3GkyXUVzgcSiWaRXKEvZawgJBFk",
  "key36": "2jxu8dqrX9f4iJGjyQdqcHYPNsckowSZhekXdYFMQb9TW7hr8qwJS3qzwdyPa8ZDL7YZpG7XdHXpimjdf6oYto9D",
  "key37": "5VLi8aXJWttpU7GibGB4GWAJxECDt7EdAwVcJGBzRrADmn5iRXR8sTJ1c7nwtm87w3uS3LV7AKngB48MXViKGNs1",
  "key38": "4XcDwTHzGZgJMgGieYE1gTWNdG8WaPST5rzxfFQXxZMRhk9Agz4VrHkQfMa5rqyjjg1tvtmphsZDdGZvSqoAC72a",
  "key39": "2ED7yLmXFNhUDHjmg77Xq8eSMsbBqRbocx5mbZ2YkLs6iA5LnPxf1ffNecsRVjVn4YHENqA6FQ9LrU3SkY1JogM6",
  "key40": "3aybUtkJTVXwzx5XcNgUzwqjvBQvuVLvpXCyXhUPyEFGYk3Y8ery66xcV62vgQoanbvjw5P2MH3MREQgsY5qok97",
  "key41": "EYrD5XL9Qf86PSqAx36eF3Z4F7x6wDEZXuThBqSLVh1ZhHPeGHRaFphGwXfemptTbyPLoZuGJxUidYhov795pb5",
  "key42": "fT1peVEJELb74EnnhucNEirY79GovesPCT123vcw2qFxVaG1xtmw54a9YDqPMidzwf7y1VV2YWnHVfvGZ81QU29",
  "key43": "5NRjjZe7GgLgKzsFoXua5nC8GGcaQANWLJPYtfdrhyL5ZFa7NxXXiGFSKRNDdbVD3uezZ7QFSvc7o5oRgVW8FSjF",
  "key44": "3Ef9TShgsMxhugErZw57UJiYZfSdMfS4obuGzyeUxg7maQu92PESbChF4sp9EepBMpGrwESojgFQ2eaLPyvPn5vR",
  "key45": "64rkX3Zz8VJ53RsEpDA3qu8H1AZsRvo8bnwPggJjwxPQZ6ZZJ3zqFCKcdue1L17ohj5wmdb1jY2Qd4EiXH5SDXjT",
  "key46": "351xdiUu5Bq7shvPqAj48o1kLU7f5ewiobZJEXapTzZSiqQtnjVWdEK4s2DAFoJ4MAny9VmVwSGtufEH8FaGGEAy",
  "key47": "4D8go3QTF7WmuCG9rUqdUyWs43YfgKZ4A3ZZ7fSLC49WjZmPn7LBaRKQdLYNtxTYPZGUdyMUcVJFPxLoavF8vrYD",
  "key48": "47je5RbiEv6rQAumjzSJYeeQ9wkkFaAP5eeP8RfdvdN9AP2VMKdjynX5RLqnoMaj8NSPJ2PL2xDduzY2FQ4u8DU",
  "key49": "7QdxfSsjwZYf7PoqbQtzvcq1hffdriuB3m1y2NrwV8iD8FSEXFENuv9wrRjKJQeuPw5QmxpB991CEEUBTvr9RFL"
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
