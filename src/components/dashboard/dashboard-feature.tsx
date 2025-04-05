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
    "4beMX3Z2bvkLydagyi7Z45wqTRDHichNujQ6jFXU5Htfb9tAGb7WVw7CLbLthgi5n5Fa5je7ZdiniqbwPaSS3XQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HYuTY8Xcc796tGVt6wdEonbVdtB4cD5u9WcjzRTaFNYREMQy4NUsy6JDNSZnPgPuPGXc9j3tEhPCHQ15SUH9egW",
  "key1": "4afjc7YpvcCBUtmPwYLMGZQiqj7VJhCqnVnwrG72nuvYJF34LgdyQakUJ1bMGgkpLTLYB3AoVipKvcHvox6QACXH",
  "key2": "4s8PYm1s7vu9sAy3x7Zxtq31v3obEAd7RW1rLT8jEXUBjgkKNKUfKoU2DrG6GE5aTdNWot2mjoCkdVg417RCJo85",
  "key3": "2xFqN7XkqPHXNXL2y2XR5U3i8M271DZcdrCXkBsD2JQYEJ3emwcxAphPLAoc9axsJcseqyat3hm6nMa9WgTb7w5Q",
  "key4": "3vLPtxzgsJUqoLJnJhNLiS7o7ZoSVqjJ2Ftrqacv1ZrAzGDbXucJdhE98VvoBLrQc5AVyJikgWptJV9fTTfRK4Jk",
  "key5": "3iCDmqe1Dcp2Mo8ATZrWteHFZHfqvkbQC8DTvruoPHuVMuHbdhtiwvy3huP6kZi9km4GXFtTQc3DJw4NehV4n1Ge",
  "key6": "4MGSp8Zg94hvyw4W4Qidfi18HD8PSo4rGUzwytYa96kmsP4mSAunuLJNLk158Ujv6XGRJNmTrp2BuaqkCDaaV5Lo",
  "key7": "3SNqFbM3yFnjDbVsZLgkXuW1EJW7CUX6k3UgTvmba4jbVWTjZBip7rD6qfsMMmeVSTDXBpzBWoZgpRMYpwsnnsN8",
  "key8": "3L9644cQExGBayTgfupnZZr5bJxwzxZUSvBEwzt9Wn7wMRqqBQzZP2fqGQaBG86YzcFPQi4moFZsEfYjYJvKbLXR",
  "key9": "49FxrnUdBeEbZh2CEEdQEaAqFyDiSg2cL6pN2gNehMgDjbXYstqgmzm4JcAh3rjZNN4wa5BLxtbgqhLLCd1L2P1j",
  "key10": "5YChK4tBU6LkgDwm7V1BmtmaKDYqBdE2vTWEexhVJwC8M62smvqHirbk5romrjF2R7shd97RMP9z1zJns4tHDxxg",
  "key11": "fhucGooEhtMSdnFbRhmZDQTkfvCpquUnjiT9pCAsMnAzGib7T2qAu3bR3uMbNsXvq8U1uuh9Y2kJpi3RFcx7f6a",
  "key12": "56u6avAuFvh51tXQ2y6UEWcwbJ4p9xA497ciMHHKscp6ybaBAzujN5eh8KsaUD5dS84fv9hNdKAeotYHT2HmSZnY",
  "key13": "4geNKKHhKQERo1JpXhukSXUoHJrHSNDUwxExb3heo1x9GQj15d2mGiXDTtUHSBYfWAoTUj8NVjLdwrKSKEtBN86h",
  "key14": "4ZYcRAzeBkkm7ZLV68L8AitJUPrE2bfC2UA2XYqqu9h5wBFPQBXsWEdf8GGxcjCDzjqaEPqBXkqmYGMo8MAafmUx",
  "key15": "3ucJchqHZcyV7LzazjpnUbvkQBtpC7cHNq6NnjTFuapcr1NNeJbRKXRG3PSjANCF2QF19WiETJkoAJHLjA7EzHBj",
  "key16": "34HhqV2bhbPcDvnSTSpJ3x1Z2sNRWZR927QxPMJhFArWb8oPf3yafcNhoWNSboAX55S9fiHRSB4BmZek4LcoL1ks",
  "key17": "5RrESotc4xd1pi4ysDwUm7NETm1DRBEMvkiubDxjJgFixsBADmuzduMyyCyvc8D56SsdwLayecFtEuh7Adrzt2CB",
  "key18": "3UNUjByAMNc6ZUvw7qq97jyehFQ8HL247tvumKC5r13Q9xkk6BJXvZJe8jLEySR8Y6KgnKWNMsAzpqG6VpTAike2",
  "key19": "2Bg1ztL8Xh7yuzA59zcbvrbMAhMcdGJ5se71Efj18376KaKF4ugKesMk867TCQnNn6BS4WVbshbzbo3sjWNMrdXm",
  "key20": "E5qEdzLr1XbxVXnozjz7FJw9pnYL4VYPqu3vUqJttzhUuAr1d1hoCbtTGVjHgJEDdbTBAnDNARG4zbL8htqwqXP",
  "key21": "4f4nYHNC7EihpBkDqd6f5hD9r3Jgckkk8CQXw6U2BDP62c4ug2hzuuL8JvT3nFkotNbVLUhfiuCVafLpvdJ6ogND",
  "key22": "4uyJSnxupWraumZ411XfUsasczwGVxjz1nbfJtG3WKQUvSL5jEmXCpYYrjqA23fJYFkviFYKpXMFfUv6dsAMg9k4",
  "key23": "4YjqNMhPicVu4zAHvVSAX15W3dUbs6mtidCaXVX3fVHD7o6mYoxuVK4igKL5cnkjei5Z9K8ndReSxGPA5E1VJPHg",
  "key24": "BPfSxJHnFfNFsibGihdyuC1PxrnozBZgnv3sGimDEoCpDwxM7aPb6hsuxN4VDs6Wz7hHs4nJ8TdRs4aehsrCoxb",
  "key25": "2FfaTbELB7CqrERsmyMTGWp7grzMiskJheMgawDKVm61H4aF9s8MGZCeLtu43YmCikg1XSe9PiYYXSTfbUeSTKcD",
  "key26": "5jndN513TrHtKU5pwpaMvNG4m4AixeQVSSxQ3hXXtGJdChXkmw7DYBmzPvRoVnaQBmYU7h8vtgRVG4y6woVhqG8Q",
  "key27": "2TPP7FPkSLGVuXZH1XfNSUevjoZt1MTfuAeHswUMGqM9JsKZXQt64JRGxWzd6zHb75GFLiPTaawiLseKzdaoA1p2",
  "key28": "3545hDFRZmXQxZpLr3ucS3qCJnZLQLMTzCZ8zWF115i2ymyr8H3WYKZz5hbhnYhh58smFwrVed6EDDqnPFTGtFVT",
  "key29": "25DN9xCAPAfVRtTNWSfRks6EyE2WJb8NwA73U9nHgFiATB21RN1nTwnDxET1rPA8gxpMQ3RhfhYQCCKLMmHWKFeY",
  "key30": "5nK6qYcA6USJyLRu7grKfkYvsjuNCRoEnqDEaCqF23SHv1GTbxQsNfDbMVxamT5J9Lx2hWXCRttjJXoQaJzfhVZT",
  "key31": "2uKbSYZNxSCsURiVgZ3PAnekx783fNqiq3X6J1QfCxXTedD52zNfH3sjHjTX7KbcVskeRFc4E8jRc4zaiyoHrEHU",
  "key32": "b4B1bLU2RPbsd8qf32WAiHcdBFvyxgLDuboZ8Je3ZgHPjc9ukNYZGwwzhzg7mTFxoyCKRmfx87hgKBVhPd8GVRg",
  "key33": "YwaNFHz21euT241xcEtpoHe5uzCkFLmEY5KYkPnSvEeF7EAxv7e5iHhQPRZDp9dJbo8eeEnxcFHURWk317dhFmt",
  "key34": "4LCzA5THRQeyt1kUgfvcFQVQHzJvhBVexGJ7TEei9xofCeQ8buKYEM152E69LYkQ19UbEtvv4UwrFzsBmmYXudKq",
  "key35": "4VBuC7ZuMMkfGebMbDDxqB2oDhmzP2YPQ8xi8Yo8vWVBLmpVHEC2BJCge1nL7wLs76nFc9ufPEx987ckQafAoMyr",
  "key36": "4Ja32EyvHe5UksRYRFo6CRUMfjbrqvBDkxTieuB9xt1xaJ7fAETYxTgxVEoqVB4Rojmw43iu77k5DJm9Hjwm5MMv",
  "key37": "2vMJhXWbh4GwVentL4YmsykUvD93fAT8UL8apueedDx5Hv1nC488HzrYeRFGKK7NEYn4bjFacmSXS9QiUzffZxCV",
  "key38": "4UZq31ARUV3rpPHuMcoc7MYQvix6jk7RsNWnkDPuSZtGM5W25EGyohLhadCu5xszXVZ9mYefDWF6oBZZkfo8MUjo",
  "key39": "34gPJ7XfnY3nP9VVrwbv19U25kp6p5RwBGCeWexXHRbhg53ZfJXvEHXCWH23mMH4Rfhb699x4U6cMaEeNYNTs6zY",
  "key40": "29Fca6Uy3eutPhUUSjaR5vJGcwAyBys8cMuFtW5fr987BcHaRi5y8i3JYt6ZKSUKbyELqJ2AQ6dnAfWCx1134rbU",
  "key41": "4dveMsQsZyXeKzNSuG5irzcaTQaMRWdS77qh8CBrDDe7ctWuzBEVH59yCUsg9aXeXzRqHujEuztnQKfKMoV6ekL1",
  "key42": "4Bm1UqwNFEELmyGuU68pe39j5cdJoMrpg88rkTqo7D4AhtTHXunoLvZBiMGKRzLPBbijn83uH9CbEMz9ZT7cpH33",
  "key43": "2oDFJ7wLnyvmg8pmbw3udSkFBJurKEjNdTSjPpbWyGiRYVk4M8aADcMizxxSmxKBbv2jYqAJ58t4VhuUJqvxqvc7",
  "key44": "5iMmKWbrU5v146UHtP9nrNhgcVY6Nt42YwACTqFwxTwm7rEN9TS9dWQPqz9Z8acD2j27t9C1fXyAhqaEnzSAXArD"
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
