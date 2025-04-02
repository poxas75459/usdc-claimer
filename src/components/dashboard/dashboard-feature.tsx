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
    "592BjCV6bacq6yL9eanwgMUkVMkeupYaJx44CTVb8RvmNXhEM64hZUNPVv6ViosbfkgZ288hq14FBvX3AbDTHwQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8MCFSYMQD5EV4iXP4nerwLhQWrgATBzwYoxDBGPtg4oCjinH7HWbaWEFoW2CRu8X1G1c36Vk8B5Jd1L9iNrsY37",
  "key1": "2HoQpbUUAyyjTymWqAYGeosJSMNzankpQLLMzCUu43QLkjEqaFG3Q7grBiZM6G6kK2WSD47zTUdxXYQb15fqLcB4",
  "key2": "25HYBnSgzncHguj6EEnvw8tPrFm1gFE5oTGFaRQjc76BVwj4EPJWkrjQJMscHjmapK7qPzX48Y5aJh9DGLweuWow",
  "key3": "37X3ZysEApLL3NTG6dyC7GZUqZv1mGj5Fz5dv9w5HiFThW4ZUL18GT2wLqnyEpDgSJ5NT4gWP1NbXFrruGxUvSzC",
  "key4": "5iZpMiBrSA3NWfTUjUY3QrXk326EeQhBjpbDJ5b5297YtjeyGud2xS3aVnu4MKoKCB9bSf1Qop3ZzereCZ6Y1jD",
  "key5": "5SSeB5i3MAbiPEnmr3T1FBkmUMJ1F59dMYDHdCDfMG9K6aWNNbttajhdnMHUmwmcfQm5BzjQwbdXuVTWqkytMJvn",
  "key6": "57pzeuiivXmVdqAzE641ZG78dPk6xjBdSaRtqyh7r2QqfbPTmockQBfnbGLfrGzPC9qZrtoK6NCawicKqKuD1DVm",
  "key7": "5Abf3NEgiAAyPLcBCL4m5c3D1UWLxcW6BhLE19qtraBvDeR5AmAYFwbghYGhCUwfbeQS4s4qfcf9U7LWPmVNZ12H",
  "key8": "2afp55WemTjhTc3GdFAJxU7CjVGm5etm5FMFE5NrP2m3CrgS8QiuJmuAEh7CRwVkYsdLTLdj6HWuD1wQJ6FwFD4W",
  "key9": "3JrK41Umg58fBn3e3zAM34CydN6f2tzauCPm9WdbVrt84sRRTdVLx8k2rZrBrFntDDhamjgL1T3DMzyyZezSGhez",
  "key10": "3QLs8fYosk5Diu2yVRcGdpZ8jdnwJAerFoi2GDhiwVK7BuxfMojTgxG91ggf82VzxknZYLp3Vc5XpRUCskg5Nraa",
  "key11": "5gSnAZyVrdPGseVdMWAXFRPbqDK7wni96tTEvp9Py6HuwnWyH46hbgKZ9prPLUdWbLSoczT6j5BuJXHD16xrh7MV",
  "key12": "54XBJYwH81vFbSjY8zM467eBLsDX1MNFMF9LrrtYNDaVHpBf2ZJMiL3DGCkem2jMnd2XaS79hP1KtmYywkCbyZt3",
  "key13": "3Dn4krYAbj4YuUx7VpjY5ijHx9Wwx9Jm4bjeMcVWypoYJRghmVQ2Abef44aRLKH8XHN8zg48cmC49BrC6VuDJQeH",
  "key14": "21SNpeDcm3ki2G12hJWCg2uUMk5JGGz9XyQ5toGQpmLQJQE68oPr7W5mqXJ24vm8fKC7Xmt2Dwemr96HdbAbKCyV",
  "key15": "5m2kk1vN6CN3phKnacwmS99hbSDtp7DWUPRVQW5fTkBrASdkfbSfdimsunQzuaij63ztAycqBRt46R2wA6GnprpB",
  "key16": "5Nko7r52t81nfMrmmLcJfz6jFcFi8AuU9NEsn4APf6ccrgsKbkn5onfbFwzvLQgw2kyti6QM2Z1PoNhtP1ngGi2n",
  "key17": "25svgcw85raMEAQxWhft6rioqyWaUL2pTTLoe6rT5xUBmphCqF9Rb2DMhAStLQKarYWRLNhYgZNUdnBGgKjt5fgJ",
  "key18": "3Y7NCBs7EpBzNgVweLVjN6yKxVVEsDh7CuAVBeMmqzRopccysKmPmyHjXerzPVUCMxR2yJAcbCe2XxEkgshVBJTf",
  "key19": "ZqdG8uy8eEtSGjkwpxQDzzvyW9EwVD1m4UjL1WXKG2cR4E4nrPhQPoPEQCxQYEAbUKs2Wwa6iJVP9sqqJqcZBk5",
  "key20": "iSkgp1uxYsvJJV6m6uSfEhr1NNoA3ph8hcoZssh2qL7Jsd1k8Kr6pKB5trQKC3V7X8vfYv2PwqvwQopVA2y2vY4",
  "key21": "3tJqD4yYRSsWWH4KB2maF9b2ePfQVJXV1uq6MrGW8u6Gcwfvnx2sF7JFXPqq3j7whQa9YVAyiaMi89QK7qk3T2UR",
  "key22": "eXmXaxrJZi13zxY3mLTM4pW2HPSjzZoc8LgjqqQPiZPgRhSRUcD8Mqy2uQHudS3CP26AEm2JKQbkpu36pQus7oh",
  "key23": "mz6BjdYwvkZ3W9o45qiYHbd6d1Fy44hHxA6GDMV18uViNyfbcBy8CGAXaKT75H1KqFZATd32Xr7CEzPntuQDgo9",
  "key24": "3W8jGQZz666xFT1Z6EYwRGcdomn1HMJnGfbqvwJgjjn2pNqNhTJUqPcfxRvwHxMbiqWCBezKPfYRbbtK6B62Hw3U",
  "key25": "4bHQ2i2piJiBBJpyZLTkEwL5cLX4TrRdKdhz3rFoJBQgW1padudwKGcb7cJB9qYbcKiKPbwLd1HGECenZkBbXsmD",
  "key26": "5NqkLbd9aninARai4TNBPUtEQHrYa4aMTk3E4c9z86rseVWYYAy8NwDosdH8ah9B8TFefJKiQ4E8XdrN1DHFzk4",
  "key27": "2EAodxpvWMEAnFWj8qFetCBhDe6XCcQyCqQczirxff5W3cE4aUzNRmcrB8PUBgBfTaquJaGwmQA6Ahx7s7BBR7Kd",
  "key28": "2NfSSowqdAL249PeSUD5WSmDFZMUu4pPJmecB9ZQxUbmUm2kuS62vDfvpJZeRQ8KjGXKQN7N7L2dDmhS9C3oA8jt",
  "key29": "2Rwzthr7f81ABx5XzDBbXboc3boSU8EGqBn7qGxt6H38X8wMBb4PQDB7fQbXiXj4VzMtse9WJYhdECH5PaqXz9ux",
  "key30": "2gV5JgTfnhZwPGGMhXkPtmRLymethDV1SbfA6KXCnzpdjVK1ZLbtRPgyZtRQyNNEkY8DF3x2wiq41XJBXhBnzHcX",
  "key31": "b6N1V2nUv5YdbvSn8eNEq8VX18m7MBujrjBHN5Sxn4Ly5QqN1PgmqiXWEYkLqsoELWqTAzcLUPHBCbGTj6pApji",
  "key32": "XcsNuWL2qQV61egjeZjAnYm2rnVh6hmzWxTq3iuVFBPU8xzaedeRDycRF213s6aEFmSvKWfwrHjm2p9TqiUDBYu",
  "key33": "4XC9Pt3VWdLYvyw4P6XvdUNB6BNGd9px6jS17YrqJbUmo9iX3GpgJpigth9CPhwm5HhaLmpaNRzapZ1TfEH4Kfeh",
  "key34": "5Z649jJB43RwVDBEHSM1UhGHy8ET9y5BJSSTPYZMznm6oMar5o4j9fB2PxJid43CfCB6hS4TVKEo3eRMK2k8CgNd"
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
