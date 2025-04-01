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
    "yymJreJbbEe5gn22SXXn4AbLSNyuoaYkiCRJ2W5e1xpwB1BteSmLZXkRZHp2uvXMaxBhtcqxCjWyRUVj1jWtJBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jekcwJE3JNzJL9wWoLUhA9rWN4qNAq61qC79SwVBJL1s2eddGjRnBaSyYkCqLSs551kKrMDDrJ6qHfTrHkXUNmk",
  "key1": "32jQLR9jWNiA54cSDwpY5ebaGxNLwB7xD3XqdHJtntHhyNmfnw39ACuUAijZdd4yT4ae4z9TFwfNE89Gu3qkzkoE",
  "key2": "3YczEwGjDMUKdgzVLe1dAQQEJ7jKDqAjgVpgSJD5Af2o94CFgJokug6gQomgNaFdpedjbvp41WxmL7Q9Q5stDY57",
  "key3": "DqPdCQ5dGuPgEnMmMgA3E62S1Ki5tkBEofMdM1BuCPQttnfSkzfBUTSz75VKwL3dPpHBLBD2LG3BP3S1YAU5WGE",
  "key4": "5KrCAMnUf7V6WXFpPEP4jaMggY6UDoBxDJc5vpvLhP3QUtz4edzjYPvENVjoDC4Yc2UzZPnwoLyaXNdCRbf1oQkR",
  "key5": "4vCA7BiDUHNjRU8Fkzq5AF4YXaCEd673n2kGiApW6K8utzkS2FsaXF9pPg79z5XQRsrC1DTDPNqEwJuNQHAm2afZ",
  "key6": "5Xzcn8VRUK5XVhtT7KdiWmnfLw73pkL2xrPzJ414tLe1UpaaLzVYPDDRvz2U5rRN6nmnGr5U8DKNixnGhkVuf59b",
  "key7": "63AxwTKw6APR6ueSKzHU3HwvJfoPhEcLZx5Gn9hqtvqUR8RxU2QTfGFqp2M9Rxoz2RxDQXz99dikyDck1gvKc6ZT",
  "key8": "BXVUXM8f1nUbCVnVrz1mxzfWnGLQ2BqPWeVTvBX4NhPRq2b2t1UGMpZEuAaRCc6tzHUwqsKRBuxjdZ7zjx6zXuA",
  "key9": "eSAAHj98U9xicZnyLH8RYpADsmxeXwCam6kic66gxAJUvmLgwB8oA95L3PbjBs7oSp8AaAT1H7a3BCWUsrAMTWd",
  "key10": "PqBEDJQnAojrkp4LSmHFWLA56CUfrQwP5U2cYXxH6xDjN23tzUJ9dMXK8f7dJgNx8GPvjQ5EBPj5bk6YZZAGzp6",
  "key11": "8ma3LSeXwbEuUXjFLrEHKEkCZgwoQ7saDi5A3i9yRN5kSnqjCh7eS1o1my2TRpVYWpTaUuTBmTbiE3YFcZaUZjd",
  "key12": "2oyLqiM45ccJVQavhnTMfzCDZ9Cz7aWmcQwLUdJjWxC7PKvM5bTagoAtJgEfJMiVKJM8cqMA4WkhzEq9Qk4wX5DZ",
  "key13": "2WULnhEaRQ2yk8yYgMRe9mZLYALuMy4M9CychFFhPKge98ERetdzDVXs8HpGPFa9oCxyyTdnjVxBwHbLFkLFyGhq",
  "key14": "4xsoBb9o33An5kkZndFvvhSA6Qo7p9LbTqotaNXSs7HjBvF138pRgjaREWsw7RxJUcdFinBMeJPF1XGnZ9h7rXEm",
  "key15": "5ivHo5qjnE749WjBdowoQzeVrAh3jPNMCP9VKv4Fcaeo8CLqyNSfSLruT5ESy1GbgP859KjZq48z9WpNj78Miovo",
  "key16": "864Gx1eR9nfQc3thuoEGNiFMKrWYUCfWCtKqjcpGVG547YZfEV8fpLEgs7XFhtrJTxXpkqNgYg72G84SBiYkH3d",
  "key17": "5oL1FR2b6dJ5347Fx1C79MH6yLuvxaxWXHBeUbQbCBW2hqeBSBe2KYQXeJMpVZAwNR3ZekN1tmkHESxnaCgPST7J",
  "key18": "5FJ5JSxeMdchP2xrP6r1PVNvo9pY4rtkE6bERbBtxZYQJgkwTD7DmC8BGuAZihw2kdwz5xonHJcw2PW9Pf98bs9i",
  "key19": "2nprmaddjM5F4tAy1C1rnGxMBqXG2wn7ptEr1AXkQ4VoA9Y2LHZmrQcb8pX8EeTnMpdaG1tJymHNXW3QVcnpa5ou",
  "key20": "24GJrr9JVSS9zvh99QzG319F1vViCH1AF3F5U8bsZenzKtW61VMoBsbzGUaPW9s3RnVnEvw7hz9v65NdzaMPN844",
  "key21": "3H4w6oayxU2eFSr9j8tn4HYYxLfuqCKvWNKnfP3vhfEzCVG644Rgan2u1M39afMmgvaceYBLUEhSeBWe2MpQuPZh",
  "key22": "3Ao6gm5vk8S3hN5B5sRUHovP34Q3Zh5CrfvoBCcBrm5htzFokLLXee7YhWEZd4A8CCeiU64TW5awVwqmRsMG2Ysw",
  "key23": "3dA9RyMohgvZxuBkdq3Wg4Zk1GLrsWhaL6iA7j5G5Cw7QfR9oFJ8pNrqPTZjc5ny17rb7Coj9GLPJ7mHjQTDpU8k",
  "key24": "5TuFoDSVwLPdh1AafeXhdQm8UKmuirxN4Hy1ppw3cMXa6sRMzyvZPdRizRPx6LDaCaUnvrLTkyVaSyS2A1NUH5NM",
  "key25": "7d9LgLb5wMCCqF9x7MaJTjGeRpEUqy647PbBGNq3jpVknYWfdejcGrRAjtjHQUVQSbqp4efA5DREtJBYSNoqf4x",
  "key26": "3V5bSekRSBPumM4s4TUYfeMQM7qqBw3JqncmXMhsiRx4QbQmR8xi3G216CeHvrz4RASLuCh2NcBVGSdenqhBptHi",
  "key27": "4pujeZWVr7seycoT1oUSbCDRCsPEoEYxG31ZPmcJeYNHXhRwDru9aXurhhXYET2v5Hnq7irrEzpkT6R5VBevD3H8",
  "key28": "3B6fk4ZUxG5nB5MyS9Kj6kiyWLpqUnq1qmAfPVgK6wJ1ggUP3YVSkUF7AJhb2XiLW4ysfz6LaGziJvakmvSVDXR5",
  "key29": "363BigTTT4XbDWpFEk6Kc6iFsY5zkMmy2q9bDmz3Ue6eJGPFsoCiLU5fgAcjvaLEfT2YG86uXtf93kw4GrCtUYCh",
  "key30": "ooCYHiMxvymJWzRB3gKDBqxRKo6nECufXpwqav7ht9t8Vfq3uL4TyS52BH65ibu2ZeAK1azxmKKoLsmo3aLiivz",
  "key31": "5bvt7SEX2eBZxuEnyyL3fUS93eytNzSTGgBGDyVAa5gEjjbJ1CBk2puvK1qk11gjMBu526s3DbaeujdC8g8ApDyG",
  "key32": "5SucECnMx4CmAxA3p2UX1mHBri7LitGXoBPrfP23GPFxmAGwdCy2TM7uwZ3VcGTnhhuAyR3EugHfsmGkpiY7ZCTW",
  "key33": "2L96RhdsNosuF5XX943zXddLfsWNULDqLJr4oxQcn4Cjfy862y1W1gpSPtLdN2B99XSLdK7cq5YKbwZtpqCRtvQQ",
  "key34": "4T6hWizbsw5tPoM93F8yQMZ2f44P8RExk8JD73vuwrMNrkErBR7ucG4nooRmDtd3nVjjuJE6QF4civzjnjvVr5WF",
  "key35": "5tF5tR3Dgr2a9R5PU4f3H3bhppjvgmETY5ddRuMNWzqRQQewLHxcJ4VBvWTpmE2Qp3sXy5mWe2CEe37XXXA8QAgQ",
  "key36": "65JZAtSaKRnmNjwXbsiCxzczs7Juf9fqwAU1p7sTf2aHqaK5ruPg6QLzeo8a3Ld5hfbKAVx23Ku5MuDaZfMPcz7W",
  "key37": "3zmf3FqNGQC5mCrMEXZjKERUebnqAgZ1FGJzKetVYA2Sr1vusF3o8pJPzWvRRB4Sjn4LsdLtgrkZ6TtaJj7D78ZE",
  "key38": "46d6xyBeKud5QyFAXoPiXm2Y5XZyBdGSSWQWFC5xKTG3V7Wz5vB8uv1HA195ox8Bo4r5BcjzrHRPV9Z7fYRmi8HR",
  "key39": "5y2ziVVLvyNNi6UhZ4oGDc1zzRwAkfERpbT8bSbU5SdoEEhx1vmFhRRwixD8Kk8YmqTgCxKZrAKNGVKVRsGTeCxh",
  "key40": "35wrE12Z5KGKU3T5Ft7nBxfq6WSRamWinzjJV7BwCA2sNe4HSKwhp9FqcRhfuGipeKevdfVEZTY2W8NLNebDHtAf",
  "key41": "4sj5oP6fAzK3LNqX1w6sN79JmP5ButLYSfEUZpFovVvaF35ExNme6SSPUZPthsyauuhpU3h8gKb5JCT3znyXhFEo",
  "key42": "5xp1L37L239GbLWiFB7MBnW1vosm3B2B8v2th56KNaKvauG6FReswar8po8RUVEs81LmbBWzGtAeZk9bRutpdfW2",
  "key43": "57rJuAmZXWPpXzUYK826YBA4HoNktbR9ygNw5YzYtHPjGXbEUhFWth8YuPRw1mi2rhyDPvFpBgtg4PpX2S45Wiox",
  "key44": "K2RrrW3jYwSpUSNkKzxFxbCcWk1J2RC3ZqAzvXUmCMWNk5m3api4qrBGbBB3MCLhWyrSgj95PhsaL1xSiDaeWTD",
  "key45": "5uVvWa9Qu8nBSjW9BFBXTjsNZ4JTqQAfAqNp7qMzx1GsgJfvnrnXh1AuRyQUxHxuJgzS4kfw4XA2vyPmsWmBUFDP"
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
