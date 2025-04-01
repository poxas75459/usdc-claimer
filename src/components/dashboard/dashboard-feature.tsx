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
    "HUt97QW6epdPWjjtgTXyVWKWUb2PgwfNyjniXPw6Y5h2tFfrwFi84HeBPzgqfEovgvQGapjEi8v9xfqq4eZDZJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cDh2pvLvKAPRqvgQkhGvyV83BcAf3xNwPPg4BDb6WrRbzD446Vz2PDp1P3u5U1Y1ozH215MvNGJii228UUpuQVk",
  "key1": "3PX4wQoB5eWVud5Sz2pumBqftT8yDbj9RN26QnKE2w5Hvb6YCNvQnNZcmHMpkC1UnqKSAWoPHV2cH9ohseHCyMTB",
  "key2": "41yjVJgd7Wz9XhqtWjBG43Qgv7QauUTBQXL4gDWVknCXyGxUsMvYg9VkySDAKrJEazBdgnqE5KRpsdhNCeUxh6L4",
  "key3": "3mdn693Yrg7mJTE4obNmHVzfr14CX1iW41xUzSQnAdGrwaKV5EBfDd4CeZRH3EZA1CXNTfc8D41Hj2qSvruYczn9",
  "key4": "4uZSuhojgZ7fT3KHEPSSgtVWzmHKYT3SFnnmsGhqs7ErvPB67bXWHSHNZmZgSSGujtThsytFAKbY6AR5mMcAp2H7",
  "key5": "5c46iFbKjvHFcgd7dMbxgMX6cL9Fwbr5exVw4vHrTNddTqQEHnLR7SqG9w8T6WoShNVwzW7bU62EgkXZTi6qdGY2",
  "key6": "6vMhw7bZW74uwNSRL7Bh4hZfm6gBQ8iYNCyYJGPjD7J3UU8swQwNp3fnXZjZTuFpGzX8Tyndzxd3i8CXjQRjLRn",
  "key7": "EbRVHxe8e1G6mRVKeiEwEpQqAxFhnAS4ogHUiYTNiuJsXdVPpbmc2e5Drttgwah4mYjaDMh5nkgjwUp6K6WcW6T",
  "key8": "5w7hzNraxRkAfMhZHbBLUAhZxHrUHyN9A53Bnwv3fQs3aNYHUER6BfwSRA2zoTtDB4iEXNL3Wkq7cjk1t4DKCqWY",
  "key9": "2exKHS8gXoBVpCxu6toEbpcR7NUUeYSNuxPM5932ecyzpeN8fu8mz2SjYgX3H3SJe7u43cHE6HVq8XybNTQZtZgA",
  "key10": "3mmxafC7VTk63nkBfGSqjU9JQeh5Jh2VNR5wf1EdojdJu4foDaEQofKqKCrQxqQHaWYWCr8S1oEtSUnbrNxn6m4i",
  "key11": "5a3PydgjYy8xNU3eq6dTniJkrEtz1yk9m3xpwzGc63cVLPbLaSuUmsCJapBXUxGvKu6FeqykSnn1kYei2DQkxw76",
  "key12": "41rMukXvbdwmnaqPvkAXgdfF7LyUQRc3yh5TEnYFPpfW2ojvTkiVMLt1wi3ZVq4htFe2zCZWVhkJuttUtSqZUM1f",
  "key13": "26cwUghEEkbzDYHGT7F87UEha39S9LiPHYgq48BdR3BCpopuUPR9FtrSRaF7GnmwkGw9ET6suWF4sdQFGFbQK5WK",
  "key14": "3e7wi5X2UUQ8VJQUqYheojJWw2YRQuXk5LSGbNskoTSHJ9vT1pz8Mni9SznpckPKGg95N7WKJPqrQbvWjribroxL",
  "key15": "34z6ZVvNp6PLoLrZPxMar6oE7YzuYFQBEeKp9ZAuUbVJehhC17WhrUXj1Wj96RHjDgnsnR4BznmY3cJjim3VdkkC",
  "key16": "53EMcLS7CN8GqvMN1ybBoD2yY4jdn6ec31cWncVRRAHapG8hCofi3p3usm3mhr3smXguxP7MHM3b8DXdUQeqS8LM",
  "key17": "5vst1uCsL8KkLApNsdLf4yysEJ3zaBioEY3hjBCoQAoFtMTXXXCzdyekLgsinzHytqu7H5AobKRN7bXtbKPTwnYe",
  "key18": "3joLW2aXfgUV4aHJsk8w3gZvU7AwWNzQAKgSDMYCESEtQXdjLRw2UGyVxgapDy8UgBztMVG967WZMwp9CN3RKfnM",
  "key19": "33ezwAXHtahU65GQUq5q8enLu3CWcRtUBwshi1oRVPqQcGPJBRc1XkGsV4CaNZ8hhpAQfDK8aBuGiTbmGGEh2s98",
  "key20": "2ViQPUJRHBo2N9RnvkmUsL6XDnsY4wjrcimjfgTYvwXKZhPQnAxk3P9CiL7QBF15wGzu3XmjHLVbu2JNH5Q52Jm4",
  "key21": "3gGpMxvG5GqFbn6dgxxDpmLEbmxudJrWeFSvdUq2D5yBt5QmNGYHmUSdYLYxhopSPPmDXSp2GaeVhwLnSbiCH3b7",
  "key22": "2xDG8tjXvdoPBoSxDw9L7nbtxgzBuUckmSoXnqxpvx6mEVmnpLNjpSt8YLc6F8rMUYTFKkjDafYcwnqY8PdQ3oAR",
  "key23": "5yFKs4sjxrUdf8CQqFRudMQQfFvfnSzDdUobSfEZgDwjuyG4qyvAF5yC1mX9i3YiuyuTkhGkGYP6zbeYWa9KRmVa",
  "key24": "5Wi1ELjXvhdaiUJQAqrmQVU2NeDAuxemuY7eTcGgXBA5dEPEGmz8oQ7KkFe3whSGDXbq953Xzaro6E3zfo2BZsab",
  "key25": "4rj9iV1UjPagvBwRaq3G5Ya9sAmup47S1F4sbZcu2nJd1mtka6cMdLsQXPfZ68TJpp3qgqFRi6xGxHyoHDBKRdNH",
  "key26": "jWJSmNpRvmuEMeAvLrkoEGVhgmYWHS1YtQPK5icJ1z9gCgTE1Jr78aZmurXRWRRffD9PsJmAXmff1SoqKmCEk6K",
  "key27": "5ygRsLnNTbCxtLEVCd7btioGUT1XMshTyxSQT6HHVALitbmNWjapWEDxtQp7JnD79GiHDHx7o1518yR4aPcttu7Y",
  "key28": "2HXvjJDfeHZ5TJfB1GiCqN7zpqZHF2zTFzKosaBZPvHZ7dgMAWfg3qvc6YZNtjdHHQZ5eBcvStN86aQhKekui8eK",
  "key29": "2vjrL3reYn4ZWSwUmRwscNf6jvyc2UEx1yWxoBQrbHkueLsJxbdK8iRFM1xUzFoUZQYPTxvBQt7WWn8JqeAaNX8m",
  "key30": "MFcGLo87vzbk3MEmpu6F7oHpuYa5toqWHPmftwMg9domobAQi3oRS2QTZ1nJ92iVrNfWXXP4V8fHJ9yRfW6WVMz",
  "key31": "3A8nsLyDaEENCzSfALHFBFVsfCmWXXbmhJSvS1RtRn9FtjGZdKQpvTtR9sNs3CiJnHSMny1W9RmNrH22tsCbJRb2",
  "key32": "23x5UtV4Rs47CNGefK7Ta73gnby6EuAa4bxr7F9Xadmpxg9qFeqBjK6QJRAB1UsPTgFVE6BA6BAn7W3c9JJMsA9k",
  "key33": "5YRowXZY3fnCA1mmj4kiTdXbqCizNggRug6opF2WhZR8NwC9a3F9nZakZiHBLYZ993DijaiMmp9zLENYAHXj2UEi",
  "key34": "5htU4edE4xAEcNrXBc1psyXyMQBcAodKzhwNpzZQn3Qzu6KgYJPLwchENHpEEAoBd8a7gKp9x1CxNQvyyFhsuZjy",
  "key35": "2Eiz5mropRf1kcJcSUDxE7SJePwvm4R9vxAjuHu5DiPiBcEgnf5DGWsZ5TaSe3hipjcRAc88WqHJPcX2NtvWpYGn",
  "key36": "2GP7zBMHuxKkttN9MHHdWaBRajTCEeB8gBXvAiAXgusoNhTNYYpzP8YNVdSQu1Fh2wWZHwwzwh93JTr7EJHM6SaD",
  "key37": "3znKAm2aDKYYZq2tWMf2toEc8iKxB4tEzK6rBd4nBVUHfFhpH4wm2KdiUaNP8FSQuLTkv8HKWEGs8H3ye828zXT6",
  "key38": "PQLc2iDFdo6kMZ5UzedaTFFLzSuywmVEFNPm9eycTk3s9boQJ7MVrLEwJZvMG15VJnJt99tgsXphHema6WqZskA",
  "key39": "3ezPwvwwwhRTNtUyZomxpv7AwBqps2H4uNHCsnA7huGBp3vb96oHnRHkaLHxmbSVZd5UfqzVXRaq6jsZSkJi9pvo",
  "key40": "3K885PQ5ArFQBaL6QW5Zfzh7XbCsfzN3E6rewaLUvW6ES9ApZvyprdbPn65evgidtiG4T5A7U4sc8CHoM2Tr8ogT",
  "key41": "rRcDNKvA2AsJxL7wR3Lqbg2tbcjeYzu2BaWEQhSA59oqZuTZDmtPyhScWdoJZJYqaBGG86X4pfd4WV9TbGxwafP",
  "key42": "3h8nKdx1VrqNfn6SVSstFgRmViDgE8ETt7yA3LzWRmAFpk72GjJjJ1zAkGheiUx5hZPMbseupu8XBqZRWgxPdRBE",
  "key43": "2h3HHEWzeuYdGi9rtRgpKdihbHwehR9wSvo61qbagWCeuGxxHejmpHQCKVGJZnovzFi7oQvChURR363umLZuGU32",
  "key44": "23qBSsFqqxAfg1siPm8qBwUgYNnUgaHewiE9XT95JoFMx4Y6m7YEeXeGzeQa4uKEFLZTr6QvbGAif32ZX6TmgA3E",
  "key45": "4X5BVmEnQEMgrtHGWrEmVF2PqKvZimnqEwaSkoUSS9Xhsfjw9MNDVzQ1MkqSv1W8CgiTe9yEYqovgRKLoqJsqMxu",
  "key46": "2J8rv58EaiqoVZXfVp1tcSnWKH6L8c15eD2PkoCGwZgFKUdEMAARfg2WQyVJxFJziTasPZuxw3WpKNpqV1g4xySi",
  "key47": "63wsMXtJKkbQXs5QanFpZW7kXoySJmo8GGDWhqSxUFhJrmQakAk1kaH13WXotwR1ZkZYMedJLvvWcShFgvJf2o5Z"
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
