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
    "2vDYu7vcrY4PwLQp3dQCjUuRJQT3o4uhY8Yd2Pa8zxWKZ9JMrF7ig5CSjQcDG7n6J8eF6e4qjZUj64XiC9xKjNSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wtq3WcR3F7MDkte9w5ivEUEFUgW5GoHWhV75RbEtaRs53UPWkxL3adYK2B9CWhz4zHHNrHuX6NZUDMX7Aq4GqAr",
  "key1": "4KTLk52XP8nX1a4eanw1mPTnScky9uxv7dFTdzqn7aG2NnfeJPZvoQ2tzzHG7tuLqnQZXCXNA97SpNsu9hNYoTWm",
  "key2": "24CAnf46Wzk9UcYt7VDXqkeuqXs54ZdeVroK3LnQVYLH5MN4s7cswfJx8mMVerPhogx6SonCgaEpvELh89GksBnt",
  "key3": "3bEpPwpCJuAyi6ryeGnp4BiBJZXEj58dqLjvi1mHCsWjJuQtbsyiWbPbMKsK2F4QQ7v2fRPiv7QKUVwivvGKmQqV",
  "key4": "5JzvLuCLDKo8iSzymBPGsxoKWonxtfea9JFxvaB7ahbQ63nnZ4nZmZPWX7i8fHHUXjC4PMj4ASi7Mpz5d7S7Ce32",
  "key5": "64oQmH6yXGyVnU4RyL5qdjahrd9bqWNjSpb7Psr1sd8B2bMLT5uTKHCZaybjGVqPk9gCxCnuSW7fY83ey5aNwAAD",
  "key6": "3NHmDx6edpsNy1BVNcYaPmDJx9sE41mKnzwSA4xDnV7xj24LxKKiBarg4gmtA7tru6jFN7dK9yitbSSnMu3T4hwF",
  "key7": "2UrFkAP5rSFbDmWwtKq2kj1vr3yZSz8imXmL44BXUDaxZsk4UXQyHvjsYH1mikX8X2cvf1e16b2hUR8H6xHaoxkM",
  "key8": "2NJnJHW5vcPCryanSccGCAq66iUzkcFQ3zTqW8yPJUUwxnJANwaXuttWxTGkGTF8c3DNNkgq1sf46vBCLj3DJzJi",
  "key9": "5hUdNTviSV2zes2DtY8GbHR5FUsqLGCaCbSt7oNS6BqWsT9mhEZei2pNEGgMnKSCnZv55uynwDzUMiJ27RQEb1Uq",
  "key10": "5qAwmQGewDgYLo6r7LuwGxri2AZUyNWiqxzRQn7NAytG6748HmLhAKVsEtpmzSDq3cxwa6dhRbskp79KHYvYTQwY",
  "key11": "5Mfo5TXj6kdJDRipZnCPM1B9RUZvnm3JuS349HNx3Q1rVsQhDYuzJ2HdTeRfvuzu2sMEK4qf7vWZrkgeABHq5Hxg",
  "key12": "35jLyEBGJcNFLvUZ818ia85EvHcszy9w6n24m8ofNAVAoH18jdA496H4fxYRGZU813YC1nQnS4tYLdHmrDMLn6xz",
  "key13": "2yug1JDXPeofT6aSrA2wvFBifPXqGtLUNm7eCwwWDVaFHKfQUZ8it7cRDp1DxX1KGeA9ZKe1Bn9MPreMJDqLXqa",
  "key14": "9eyFpKRrcUYoGtBMPvmV65zf4efhGoUsji2vshdnGmcLswAU4VfePMBu7VxYMDbPWnQmQuVFv98CP81cTeZ1YND",
  "key15": "3UGFgCJUA1B7QBmU69A7DhMSE7xCVfAXr6mtikZ6dq82btutVVmuPa7gf7Es4nhWmVpWDqpwPTEY5ZvskfP8ifiP",
  "key16": "2gMWm1xJvJkbQkTRLDBMg4WW7EaDGK3Eig7moAw3CdoMMs9g2hQyeLjyuDZEQ9DHcbLdaMZ7QZhM6jmCChpb5Sp1",
  "key17": "22Uiwx87LMyvkBC2QHqxUqYcGcTkWo5kMoABBakopZqztjzPxCAwFTpmqg3Aiw4wWdLYR4AvHtdKVzcWMPhrBAR1",
  "key18": "56x9tpTeNhyd87x6KHCi6fuPQFTGD5HSagSmYo1Bum9hLFtUfpQDAUTjhBsuVbxtdULEC9ATzTGpTG5KCT6Eufxy",
  "key19": "FFgskqzrFr53i53PbhUJc3nbttC2cezC7ztUeUPTB8c72BBe78EaLGJvnm2JaEdeoGPW65ohkH11fFEcowwyUzV",
  "key20": "5V6LEb8xx5Mz3QAn1njKwVuT6L7RHJemcjKiELMQ4gze5oxpSLdmHjTgbe6N8QHCoCELNd83J6TT4nzYzmSE9WWu",
  "key21": "3w45QXY27XPDyxW6iBYzQWQomfDNXpwtJCLhozg5Z576RMsa3AJgDmtJKQpHiTTQNxLtdjxYakeqmgfvbvkTDk5j",
  "key22": "2bWZ3Xfy1k3WKbaSF4EmC1AKESr8jTbHpvUNumsCDCvUwZSa9mzfhTt1FjSCKx3jUmBeNPtAYg94sFGjZt2KP5HS",
  "key23": "ubDnzxMy4yMLaFZ5ocoNrh7g79JH3CRuMHqavAGZ1WsHqazFpXbCbhBgf98XhCbZTFSV5nt4FQ55NthVf5DUGtf",
  "key24": "3faDJooEhHWzjrnwonxjhTafXGPMMt2U3XHWV4oPpHnQsZKGoL8sqgxD9UAVAmzLpcfV3Sb2sckBHZP2vFxFBtGM",
  "key25": "NxR5WzbabRugGB4DKLpxYikDpDHX9hVDPb9EEgypDPv8vVWh3FcKpB62UDzRaS71UmYZUKm55Pq8NK4LUwjZG3h",
  "key26": "4rQdi3wDbVBKk8K2erhtQKzicVxG5NQKKVJWuqgGzFQ7YyxxPCYugnr5dNTtBXGPjZyAVzEizyHpzvC8CinmDZsg",
  "key27": "EuyqQrc3q17H6HnoCCnbkmkWRtknFvH1tA3G9jBdQtVHaWjWVoi3e3t41WEwCsMRbCUefZts4e4QqomLGNK8oLq",
  "key28": "2Tcuev56sDnYZditxLJG5CToY3rSqvpun7PKyZH2M2nfpoRM6mxPnVGKwG9gYn5bhxUrpZzKE7e7gAqW73BsfGuy",
  "key29": "21Na6P5HbZWJpo5pkTfVeLBGpxQqupN4fKojPZaVfgLejBLYVLzCRNgurNV7Ays7MBTYSJ5EUmL79hkAT5Em27bF",
  "key30": "4EiVmVka96BXHYSchhjP94W7Jyk5mqBmpGVdCDty4U7irBeur55rrDA2gyoFB4NiEaoYPEaKbBpDJWfHF7JHs2UX",
  "key31": "2GLJbihvnwtx5A5oZ9U8ev5zrVjdanM3oqpX6ywoeKjPSYdYpCe9w5NDqFNzXWBx2JQnmJVMvHL5YCCuGJQRVdya",
  "key32": "4LgJUwjejdXzrKZjYqz5f3ofrMjBcWb5usS7hMoSn11GGxHvtaDdiEjXNmnsBsWZXcAaPKiT4wJrhW4XpHA5xrsX",
  "key33": "pm3EXuJfWCPbE6MxLC1GWPV3bUgQNa6eEPrT9vRpLVTE8H6EHakLo1qW6hQCbrcdgQTNRNCLAjFYQ8wukYwrfgX",
  "key34": "5f8PZdUH9GDfwe1urn9KHKSNV22Hf97GQjCe63jkXqvxJZmr9TNBLdbmuRuXNt8gWgL5TqYGWYPxa3fV3RiJ6Mtz",
  "key35": "3TmomY9TV4YvbdTkyFW9RN68R31KZi65bZuQtyNWFkPdMT6p4mAt3Y5rmpNUA74jrRYNvyMjdbGskMtWxN4bdUhU",
  "key36": "HRfvKRHBcn8qNQBNP8v1ZgiSmEXvRxURbV7mvaeTXekLRvbsZAeqUMY6ioTczXvrTsDmspqrxfFRmtM9SMyRn8m",
  "key37": "2FfsbZaFshGhqgR64YuYknrPM41KiqDLm2nzCxYrqxYukRbrtCthVz7rdeBmBppcJSELMK47frNbMbTYA4n9dDqe",
  "key38": "GBnJJ54CtAJdchDMSqKviawTRDowyjtK9ANTsdiwRJBxKPyC7xjDTkHZ4pwQzoBhrL5SYo1dY1EXezo5mfpq33K",
  "key39": "22ZYFa2jbMTD6m44sM2Rp8PFcMyiYD77Ry88ZKnM6g6iSJtpqLNRKKKtagfoBoNtzSXPXFuyfis35TTVG3WQBJx9",
  "key40": "grAzHyXfKBxsj3CuZmY2W33DMEufAgAvNQdUUtHpP9fYm3Zu9NcitipY6hRH6WNHwz9kqUSkRkiz2EppP88Bg9c",
  "key41": "L8ykkbKzjLZL2peyppETBbo6JMyfCQcqNWrmWGdd4q23PyQcu9K8PiRVcMScqTimwYL6iQcTdCzLxaLBKyHHoHf",
  "key42": "4cVMPWn55szonRSjKmPnvi53o9bwygUit9jT4bc2zbccGwmjit8djaWtB9j23ZLLEM6sKnXxnAc5usH4ACi6H13L",
  "key43": "Tx7pkiQKcs7jXurB44CAzUHYPHib5dTFyFHHz6uqaM9jGU5FRQ1sP2StbAQTEVohPxGc75tzi1RDemoSkpMDLHb",
  "key44": "RdzeGHYSmwAQJGd9m4LNKpDmKAvwfvdW2xJ6vZPKbF16UKTvPeC3yAmEWEgRPRvuESH7bGzQzxmxXJXWz9YVPKY",
  "key45": "4UKzbtF9j53LBs3FDyU56tJChnBzSBLYBQgMVm7wVRWTsyoUU5pegQPULQ4ZQfxkeVJ6buahaoKddX4KznPVwvvt",
  "key46": "4JYyYgWfzDqdaDx2La8oRy4kmBDZKpoQDypakCBwHCe7ygdnYGAwX7Pp7roioLHkCn29msXgnQAEdKhyAfoEGU71",
  "key47": "5QphKZqcg18Y8KKf6jfh5S2BXqdZyaqBHRFYFhjE36WHPAjpWg5rthejD8RmAsE881tmM3dq6LoPc9DERtzap88W"
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
