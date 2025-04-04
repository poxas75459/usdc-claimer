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
    "5QHmqfefJuMpMyCd4zSJnFeyQgudA3ZjwiXLnM4vKqrNDbqjvH9GgNS64Ytb53YMnN3zu2zJ5EXtHtXF48zDMRKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RrZU1uT4s9pb3qs71idG8vkFibNGSvrKQ2EA5Cf6ygcDCweWzKiaSEiLDcGmxLX4uvmnL1S4mPq82KSXz7VUueF",
  "key1": "2SJBv5HtcmpEe1EcxK5DM67HJ83kcdPw4y6Xt8x8nDgWKe5ogvzoChkZZPRALaH2qtudtgtxYZi3eyQYchrM8RnU",
  "key2": "3NJQD4CNP7j4M1c2qxxdJnccpa6nXzHTfcKZfAgnLpraG3sq6TMdRFPiufUBqRZqNqNMzbhEZm9czfzSGNPVApiw",
  "key3": "4U3LqErEWWADpm2Ehpqay11LEBFYKvScwzR9QmiiMaButiE7nSLfVLRkozRq6dwVpV2xNu4Uz9dSjizpCKt7RCSa",
  "key4": "4QG2aAyHd3KfPQUSbCcDBCZd6BMYDuenxHorqKE7T4e5X9VvGwRGHDeZw5gUZGkkuMQYrzq3LM6fjUwBYqFLeiKw",
  "key5": "52DftTRfWQNWazfc77ymEuLkPryEhsByiR8ZFewYBNGxavCCPEU4KtwFeySb889jAhDcJpFVwxrTz7oc5h5pGGq4",
  "key6": "43jnp6Ugs9j3BcwqrCBGcY3nQDmu6rbZNccEgfijVzi8QARwuKrRDBeDuYQ3VTNNksHhkHwjm6aoy3vUzoWUea3K",
  "key7": "5zR6ce2tt215sWhXAMihFmMhGxKAuRrsaEBAyuim1Tdp6AuiykdvBxjTFxcpTeYFZJkAitdWoD94KDF7ZcW42oum",
  "key8": "5QDhcYaCMUBsDG7PCMvEQ3GZ5h5pzCnW6zumjLckHFvUQtZ2jmTvSxtuoozFdaq9CxAjWSx9mhCntQKZvt4fwqBK",
  "key9": "2Gvef3ffMZ99jxVNMV123GrabVZB1qXEgVDhwLGe1ed7rKuZtNcbfYWFxZukSp4EjDceBUn9cMDkzx3tdSssrkpR",
  "key10": "3K4jLYwUFKQrT7HZZt9kSGDegiBKLAAMKXpbEN2LfponJa1Lh9F5dT4AHxSG7DEdP3FTgYEjuMFYBLD8yFopnhMU",
  "key11": "4HY7jZP7fhLvvVRDaBqcDP963mM8zCJw945EMZqmCqYCzEVSxH2MX5LYZDDkr8wFTbzJc6EMgt1qtaVYTXaotLH",
  "key12": "3kCbcS8sPkRQx8b1BfrHjxcXib3eQ4b2Xwu3Hg9mReYrQpjhfDaqy1VeromrSvRfruR9S4SQ9ZfQmL1C1rAyWu3W",
  "key13": "2wRtcm7YxA4znaCTf2SWx4UXkdxwNWz74uxNiQNNTPLAhprDVob1QT1SmGrXrZxFkHo3pibDiTmrczoepdnMaUWz",
  "key14": "2FTdgfUtSxN1WKu7s58ec4JgiPCUtUWv6TJezUobu4iqKVHMe4Ec6fSVqf1jtxtyW7ERSDiVajajhHV3A9uczvWc",
  "key15": "4vYHS9uUAc9oZRJCwK2aagSDtnmv5rP7bKZXasCPns2vdQVW7uN1WF5jZdCHsPs9rez4FcEJAtoqMbwCew6uJrGB",
  "key16": "41C1i5ubn6KPeV7RaCsWwAN5uosV1bB5g6ksGu2riJn7rFxTmsaKHtT9X3VmhvdhJAKLwf9okwUw87QmNf9SHX53",
  "key17": "2mun5TnXsxjqKj2XVCuY9NH74krcvgbYGXUGaXJd5nnFbcUAQrNUcD1F9xddweVSdWgEAPbekCoAfvQWDEZ4rBjM",
  "key18": "3ppNApfub5ZDrFGyj8EvjHF2X2AjzPjNdiDisACzJTdBSJ7i5iBtxY47on4UPDAKnzzagjqkvqe6g4JZGRupiQY6",
  "key19": "4x4P2xhU7w7zZwyBb9YUdqRSYbG9RjQs8ZcuAZGT7yyVpa2x56jdUyuYKN3ZZnqFVy9CDvVMarMbBCkZj26bBynX",
  "key20": "eCDmBdZn9uf6xHwNAwzLXUKfZaLtaZZkfeBAghFwvN2GvjS9wUAnDod7d7xKHyXyt2W2C4PSQXFK4BMgQrifsTK",
  "key21": "4DJo7kiC1mRXSfjGaEbgiixte5b1i9QAFGiRkzddJQWRQ1T5wUBWH9tJGE8oLgDDmVSu2WNUb5hYiRt3EMHox2Nz",
  "key22": "32NCgmCFQVhadT5HY91Ki2sxdBLg8dcKRwpeoAWqME6MpAJchh5aRKsByPk7tKtzNXtSV9sErQx5q8M2PRiSnNnV",
  "key23": "556w755ZU8Q9fDYzaWjSkTjuXgYtrt8kjzSJKMzMT5AnGUDk4JEnZR372AAGx5DdGr5SCFWSBXZKR6BDAcsWhK7e",
  "key24": "2AdMtY4U1RRj29Yj9og4vv5EurohAKA2iYs6YLFfDEx6qAJnrAeUFrxyK2oxrTNRCKRnBpxzRwwzgYT9MAH5g1qE",
  "key25": "3AVCQ9AAjavg5SFZYSxEXZk28N7owSwjMvo9quNpeQfiLjhhTcUX2m7yqZHRAEajv6VhwBdkmAsZsFd43cu9r8TW",
  "key26": "5NtiYvw1rUwmxrFei4PnMuNJM6oZxk1iSYYg9Epx8bx7UZX5WJfcP7vJ6r6KzSkRFQYzvAjpzQsZHeCLzzxwAokZ",
  "key27": "mjMm8XjkPQ2x7PAAZcqVMh6r8oxBSukCGE4GdMkzRyWkGkP47jRvghRgmkg7GytVK9EJgdkfTq7HV6WRcf41MZZ",
  "key28": "QeDMX9VPmxt8MpzbB9i8KAawKBX1vTokYDsRAaegJZZokvX3pjU2PXY5497zvQUST8XJW2atfexTxNKjPp5higp",
  "key29": "4NmvRzt9FoRvZA4kxDU6vuhnuobFNMnUVJT4n48m3k75Vn6pgRxmwLpp8u9L5xs73VWep9Fm69C3C5AptQd6m8Yz",
  "key30": "4Eti52z9AFXgnZSnxoAuzMRiobB4t5JvjftR1RVeq12WgsUJvohFMmKYGLwSF3SQtRAZ9BfcWYmihgt5Wr9uhydm",
  "key31": "sSeGk7NXCkakETEtqZxKF6nC37g5JVBKec4c2UsiVEF5doPZKWvTxN9mgSpkxXybEqfH7wrLmN1PSuggQERWgdJ",
  "key32": "5DF47innd4vp1DxE3fcVVjricQ6a96YUqRmMGeP9TnKM3xb2Gtb4VLPoKYeqkYyZrS6nfKeqTdvzFEwi83NeyFqP",
  "key33": "3PG1uaBfFT3wEA1T6Hh2Fv1YTGidB11LQLLomGdi7oNzzoX16m14qXXxFzb1EAdydewvybacNcpEgW1w1KP5UZCS",
  "key34": "r3sRQ5ZBLiJZM5p6DCPZoXawnMvigJPF4eh8hQHXqVGxryDLgPcT2nvdHR9tvh3xAgBoDePQCUQAVrtf8wr3HMP",
  "key35": "2yuaJsho1APcSMvBacGoPoFCbZnM8jL2TTqxaHp9dwEi4XdYhvuKHaNDJA43Thhpv7UkhioWzQ9pTduXnmPLkVxG",
  "key36": "5DNEkRg6vENeWue3rTTLBfDuVP31ug5UNpsLpJZ3EPbEhtb3roc7McfvfzCXXv2tdKHTjsYgsTCPjeu1hg8ub73C",
  "key37": "3e3WHqqthuDhj5UEZFzHE5z5VEn1gALHFNXryhZZEiX8NyfHP8ub9N1dvHuPJ8EB6qYAZChUj1LnLMRnvMM3kX9C",
  "key38": "5tjkuRcNxw3oQP73ukwCyTvUaBMAMLNModTpBFVRa71cjcLpu2wf2gScAZ5jw4KQZ1Jeh7cFrhhu73UpDGzQbudk",
  "key39": "4zZMdimiemaSomcmDoxB5fBnZfyHLRh54PUB4myu2EFU4Jm1g96njgfbTdfLjrgSkg5NMFBrDzDZsBmidzkRB8qk",
  "key40": "4eLxrZ6kJ1XmArLDMkdNV6UvvZLXYGjAHd3jo8gqESTeQnkHSdbki1DfscsUuXGRhZz4nR4JC3X3FGsQXGjm2Pac",
  "key41": "46cv4LRpg1bNvWEPv3kn5BAUPpXD4F5TGaRCHpJg9if9DNPqTgxbAHjucu2Y8VrBDYwuFXqJrbKjzDRCFRBoVHXb",
  "key42": "2WBWzdWzjJMk3ubCmFeHRB5Syk9bby4AoaxTz5q9kAx71QGarVzBys6Dnh9xjrctaZ5PeTApMbDuutkbqMFkmghC",
  "key43": "33bKk6x7WViDKx7LzgL4UkkibuFDtHnxmY6xMxdViwpFFdaP9z5GHKQsXPezyvKUzJw2NnyUnrfyDvHLeNDUAD49",
  "key44": "4vphWMRm94ahrrqX2XsD5JngHuPNhAUtynzBsuZhmiUQhih8iSiZmmcTapecNjmFxogYEwqsWXNJxS3pq46Cj4LH",
  "key45": "SQhHCG8tTasuANfaAgqdC45eVVtLzRxPMJUFBcM21MvYXp4rvazZtJjZWE8qp8SgwhJFDtdR8iVnn7HJsWZ8u4L",
  "key46": "5cCZjFN6P8c1j5x3657HtYxaGmYgPAQnKFgCeS6bKCH7GSA6rT4WvFC8fqsbRmU4g4mmKSXC5aAXAB3f8K3JCjgN"
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
