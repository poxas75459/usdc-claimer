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
    "5x12pWMD19wC16a4qFSL57aa6btFq822vQh5yCSCZpN4Ludr1QKByEy9PVNmFPeZsYv7iEhrpwkCR1Lfuo6CTPsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48qRn6m1qabYKSHNXGiHSPBuU75Q7cB7L5nuFnUJHgX6KJrTRHwcZcZ1MTCitWQmoaKEoeDepnUPsrmrES8QbCow",
  "key1": "4psrbN5FmHeb5eNoW5F2wwyyMPKcMRMEVsg5w6decGdBq39Ri4XBXFsYqvMHpH7BTnNHnZrzkzK7LnxxuJihwfix",
  "key2": "32hL6GxDYkZsA8RxoxiZSemGrMTSRLHQniA4PD5Ve6dQ2UL4d8zaqyXxggZzX8SPCJAPQVLjD4bkkT6yzHx1shLP",
  "key3": "AwygKWRKf6QUSaZL2e7rKiWXZcfGwN5yoYYFxPseeBecXtoWncTrMWqk2VkGf7TRi3yAEqu4mHsaXXqtcRUXk39",
  "key4": "zz9gERP7eTkZykPENxjH5Dhy7yWXHkaDdJy1Y8vseWmSnimENYXQAafbbfiHTCNXhu9fgMn6m4uSpZPmL7K6mWp",
  "key5": "DxoZFC3xp17TzqhYtijhicwLvmcgJHnoaHqXQaro6FzTDZvtVBoW9uTVcZ56YssdXaXWPURJxipssqrBmxt87Qw",
  "key6": "5cb9qQdMjfXRH7rXR3Z1reZaTxJ2pVbJ2q6WZ3TvubHDqcsPqUbKrtgrDEMRYtLmY5U1uwQNvbZasVcpKmyB7m2a",
  "key7": "hKsJCTceQaPGbELqcm3TjBCYoXPQ7x7bmxPGQgbUGGJyViENd22HQpNQ5LMSYFgtbtvKuu96knwCvfbcytenka9",
  "key8": "43oJGGikQ889cB22NtYT5Dn4RuKSMR5TWN6HiWdRdocvbGJ8cEkQoXm8nB7joYKS4UZAYphR5jSdWo5yrAxGedr2",
  "key9": "5uTq3ZJSjFezqu7LCHKez8nCcYx7aPyxTRnG1a1vwDykBpYVK51vhAU2HxH6irZHTi6R3fkwkwZpz8AikPctEfCr",
  "key10": "4qpeKmYHz2nRi8neAazJjFZ8dU4zMHNRa4ZN8SZz56bfLhBVYPpysn1TJ3nPeUvdyXjxZTowv3SuUQsMjNWErj9C",
  "key11": "4St81iSHRYXipu7nUaG5ACV7igCWsZEfj41GctGfDdKuEUbudzZCzPFxkwnyb9tUCF1ZwuJqjAgK7Dan3zyYRj1x",
  "key12": "2SP2y2mDrrjB3yCF278gUvNrhALyMJAoYvuMHkHmcsnaN9LrRxxrh5K2Eu66FYtByhRdoRTX29gMkMdavc6ZMCsq",
  "key13": "4AD5yk768YqRR3sLvPjWNibTwo7qS4NhPW7kXzwpRCUQtVVkQA2hx8BRFGxLmfosJQiAU86Y3edh3RAqRRXskS6F",
  "key14": "5FG7SG9N76NArUgRHzb2exnPpTqd3LDV2vk2g9YXsooCb9HEmzT5cdRxo6pDzrQLwhCozD6GqG2VujDdNEFjDfeA",
  "key15": "5u6fJRH2YS6vhWDdJnmA6Kycyx2hoYENRFTDVLcJDZQ4QaXnNVkHMzR4yCrcVXyvUcFceBzAvMLxbfKBm8uWXGzU",
  "key16": "5Roqd2yrGuJfzPYHh64QC5HyGDEXdZMJiJM4BFcLgpBFv49H5e19oVjaNh1nWorpxU7JAedcNE1qQqWbDYqKextH",
  "key17": "5zMgWYMEf2roBn6ns3deqdfqkrTzHEXsVAXNUiFvNqMPTLfQQVr5Ys2hQg1oe76PwG1FM9NwLPAqBTmYaRAKV1kL",
  "key18": "5LefWR7rXMiK4wPwE83pJcCU9A2g4BvEL53otxJHjDFs7t2bq1krLN2a1rzQag9SN4KqeN9GmhM1F8pRnMS7VnUi",
  "key19": "4tXkCm9bEpi7wozDTgE5L9nG6m1v2wwc28XNBjSWUzts33tvoaB718VYHZrcU6mc8YJWfkZjF7emfR5Rz59kERUd",
  "key20": "5eN2kVVpzHjf8K2GL3xW1vVdQ7hR2xYk9hiPK3S5LokgdLwRhVd96nFatho4LyJVwd5cANtVkMNSAm5B33NrpgBG",
  "key21": "56yTRXrB2WpcveiC9jBbx4HTqdv5xiMg27aejgTYHWAU9uca2fuEWLRpPzFSvuzFouevBVKUZHMdymMpmCKRWkjq",
  "key22": "jsY55qRp8i8u55jMLxFRsc7jxXVCNdbm2N6DWJnMtLxXidnEzzAEJPJDKGY1iikq86vRZBfzsYf78tmdpVpbtDk",
  "key23": "2Ax5TSkpcTC3NADc8hZmsRuFiJnakWSwtBWjMAXUq83cgS9wkjvRoAFS7CF1YH51ToMPac6UcCrYcFPnPqCzBbfS",
  "key24": "5jPLywaun8sUv8eAfPN4R7zntsGq22BhSBCzastCAXMqnmMzqisVvoSc11NW9DWaFV5jQGML1uzWSkYMfBQqz7EV",
  "key25": "44DE45fDDpHdvumb9BqDQX3nJ4SWrWhbrJmGb4uPY7n2G9u7842C9eAqUUyY75ibehf74PEeUF7neTUXW49mSv1D",
  "key26": "Zxv3Z7xbopky4hNT7E3hwuKqLownrG3fLU2qe9tyTUwGbHN8DDHrZfz6nBerQxFtxgsDrggbNxcWJCLBREpgdXu",
  "key27": "5G8BTh8ERCXiMJ5kbAeE4PzjmA6XPKDU9pH9mR9DR4WLMuFaT8U1NPcU6z85A9cpBJad2vEahwvc4VtG8D8vYqPV",
  "key28": "3hjoACGA8JWG8wSHZZZKFZo6LfJmUSiofccPJ6kJJEsVpFJ7U7wQUDXdrfCV8m12d6zzDJCtjWAkyvqudKZo85i3",
  "key29": "4Lpk9kwrceyr5vJosJZirBwoCt1nvVMBM428b4AXvKhYhN9Z8DKcskguXvJwVZF7vx9qtcB5sbbPNviUC8UJCGS5",
  "key30": "657k4c7DTC4CEPWQdZJ6w5UEkstggBNohFd4gUuKckaoKh5vvPCVPmZ9qKSH1tnGTTDhbvUxKsZ2CEhpHmhkYaqY",
  "key31": "4vFxnNQrsj2GPa266J2UZWJo8FHxnsEivNDqkzvBnhrBBMU87WMTVhwRBCn559zZYzxjnYu1ZQe9R1grtCdoyQW2",
  "key32": "3oNzEJ8F3we7jjgYTLcxcE1WRdXHUR1pu6PM5FyhsRwXs1x1VpmWUNqEMU3Crx7Ebp9hfsvGqDRzRtQWX5DLYDXm",
  "key33": "4BQwNHks566QGkHoGFAuki9YUsxf2JWokxj6eq9jHqnFqNs2Yv9agKwgfNyoHDnQYQu5evnigbPGBaJa1w1eSoGd",
  "key34": "2UP7ybce4UjK1wz3jkShtRQ2eRwcM6HZhF96AqVAUGaB1vuBEzy1woX3SrMGoQXyFHFppAZYLveF3Pp9gpsMsCVQ",
  "key35": "3qvh33V1bsGqdnQ63oEXwGuB8jvUkhp2BJWhKBmjFDPAoNSxUNuHyeoKLBxgWqdWNj4TPFoqNMRLeRYwvVGeSU2A",
  "key36": "3vkos8Wa5YTC4W2aAeDXBRjAVD2a3wcvPVaqYvdTZGTkNQvyE7TxRv4sA3dX2ARi27o2A5iBQg9az1q3iUDmR2T8",
  "key37": "2aeJXS5ap26ZY95qygBnSgMcTeHEwMobGWmirJFGqvDpH8f1hRLvnfXb7s2yNT7HzBhGkGmNuxDN2hhPquDL85fk",
  "key38": "44vGBGXgkpR8sAiVJeP2s9798DMvy3QKNjF3tPj4t96jJLv9X6H7yULT6euWqWjHrBiS4g2FXpN4SJ1RuB6Nhd12",
  "key39": "26HpzVVBM2M1sUPrmwFgssbPqRtFR3dEuig8xV5Vnci5XEq7Vuvhz4HTwZwTwSczNzGG7NBGFJxYqXq4ADTwkiTm",
  "key40": "qfsVg8tePkBV5pZnycvGNi5R9BwHqkutFaeBhYFg78TcG2CGz1YAimNp2C87hnfCoV8MXxRn2mYvKHMsgFdLR86",
  "key41": "4DbacwETEJwEoMi3gRMwf5R5TNcXEYXVAhqcqZiANy2RxeExRsLXWmWApVx5AZVpY6v9UT2wU8odUMW6XjjQbvyt",
  "key42": "3YwqUVMAwn8sib3cRLgSkFZwj4VUBLK1dL5K5zZLFiPTxz7LZJP1RnCS97NperLAFgBWS7Y6Xp45wM3MLZbN3EPu",
  "key43": "5KwDJN1T53Ev3X4DVkutMaXeTT69WjJRYGGrVNFpxrtFejtNp1F4NQ8P6mAWVqz5EfbRBoVKSyGyLZuBvMa25YZ1"
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
