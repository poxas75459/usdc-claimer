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
    "3N68J13Gf8KNgib7y2vyKNKiasvHesFHrayHijFNsZCe5ARq9nmHcwQ8GbPZjrPee4aopdEe28MS7TH9M5zxxVTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DoXdXPbbUGJDXsq5M62TMgmQxFsudpJwWxVZpKFnhAdhwLjzxAexXFcjNmpBBbcMTst5iAGpA7pjAF9v5ayqBwh",
  "key1": "3Bs6e822gNpeBENAq1xENt3vcmRMsU6fnjfz1FF7vTsCfxtYFRSZ576NkigTifX1f557i8LL2EZz13z5Q5dNKUuq",
  "key2": "27wwxXM1XpppoBjKNBZ1vSB8GiHK87wXMePEY8yhEJXGBZ9encMXTJDMuSWqMYXc5WzCNFwTvAk9px4MNJdV5m4X",
  "key3": "QB8cS4R9oAzHWWuGQC3wKm1pRzYNpJut4AiWMqSEKu98dF5tuJgxcDPNtSmsGzCnCPc4fzthzKrAio19YvcPL4J",
  "key4": "568jnQVPnn2h42GMWYu5v8jiaGpgvmkCMJrLEx87Hshh2vUmydiuqhUV8HuMsYZnvmauNNnBnABqSiPygJZ5dvnE",
  "key5": "rSeYVpTKCq1Z6379W34PsNw9e6TRJkKq6HNS7QCxaH1DTqJtPgztB6mWZmQUs7FC4e5vhm9RaWurnSGi3VAsXJD",
  "key6": "eCcKkTKB3yzkNeWiTZQTeNEgUGB6Ek3rvxx2YegfAsf1dvTL9ewCxAuaprSB55vH8Se6Miet8qsyuQd3xoXpxGx",
  "key7": "53ZZDPf8jYuq8YLERu33xJeZHgKBywjqfT7XEVKDCZaCBFdEiSV26uDcjidKyFC5scbz3XaEMnxhcJqGzXp5dvqa",
  "key8": "3mA4d2n2nYR5PkJAJgkjDwuq4H5TiANz3rGQZxcu6Qa8UvSx7U4SX22ZuYfMnc7VEGqoRercyvGNRdRgn5gYGfBA",
  "key9": "5gTbq9JJy2fymALY86vwT1QiXiobpGZdX8qweJoDSCi7duK8eAjYoxHNGJFQeKx5286UCDaujjfc3uZ7nYxJXf3A",
  "key10": "5TGPVFFJKq26xxojEmsMLvt4bAWaxRtJgqgWwoxjLNhvzMWZnjZ76SEVe9p7wEbFGq8UrNhZPjh6jtDJR2XpMfRR",
  "key11": "y2hdksoUi8sxpVxV2m7wSzSfvjCj7q3qxzsUzGacA7b6SSkBP7B2XcmiWMhaR3zaXfbRppjmhtdsJMD7zE4cp4A",
  "key12": "2JMiKmdsWUNNVPbDQiUWF1xp8u96EATHGLb3WVnLzBTKwTn3g3Dw3CWm3HpSRreX3bN2QvwVhmRBEXpJ5CTHRmBe",
  "key13": "rGY7dgDgwUtVELEp3CyHZr9Bzd3sCFdRGNwSkvAas46361WhQPmgjFfx4kZcBPRWdqgRntD56Se8U7ujKV2rqah",
  "key14": "24jNEaANreTfdLEigyQmKwswRAAJMRdvF6aZghfvvZwAuJJkPKt75y5sNYfqrrRdTCqKpJwwUfLNphXdKEbrshNh",
  "key15": "5mjdu2hZtua2BiGBVxMxB4Un1XUrfehEj2sZjpSn3q4fukzDwgzjyeUqjPK5k4xZqypkVZvWSATFo9Yroz93bzvM",
  "key16": "2AQL972aJuTNJsi9kXnantoGHxHqxiFS5tcm9egSiEryhcz2NzpPkxRwQ2vk38HqTzvy2kjLfQ869TpQrXezTcGX",
  "key17": "5esm6MovD6JbDxP8XDESjEjVfWRboxYTGq6XNnEn28LucSNLwbGKH55QF2vv6cbPoECoQCkh24Q9VioAnhNzJ7v1",
  "key18": "4f5ohattesDHDspAGu3NLKWQPVrQZx2e2FEWn5e961yPgjuQJq6ueLQgTiL3CWEVjBYUBogPSuw7u9Xn2mQkzxfq",
  "key19": "3TWq6hgLs8UCNeLLE6bSvpLYzTDRwRtVVrqz5UbCpPJdzYydTJs1Ye5NjaaWVvjz9fywKtfmPuBCsLwsKahyrQub",
  "key20": "mvj6B3m1LrjJV9cf3uhLNbUhkZPBBQ5RL5Zd6rLtauCVz6HGz9RYE9qfccwRimHLkoa7rLFMuPFYBDFa5S7a6GU",
  "key21": "4ukCJph948oes3W4QW8ypGohfrjw1WERZBbuSK3ky226jfTniaLr9Ndv2DtVB3ywHaPqfkJypbbyhdEg68LgSBog",
  "key22": "a5FcMC7gKXTaCcSxKs2ztC45cViRb1ojdgfdimZyPdSByqzURs7pHRuCu7G2b6J7xzaCjunD5M2M4mYycz2Jr9g",
  "key23": "SktFMmUmFh75kUjsxMWZu4vngcSrB3csZLY3gB6EksDMAH29FcfB4TR3ZfsHWMJ5LmDZYoQMNQ2sK66Zu2igZuk",
  "key24": "2VmCXwL51fxT3rYx5ofUBGn7EUSG65kCaumroSZEVMG6UhHYutzUYMVJNfiMAqqK7FV6PErMCnZoWxkucqZAvF3L",
  "key25": "31Pv4gJwFKycRav3DjP8Rut6sUSiyjZ4ZexzvNXWYZrf9hD6Hy6Sm2TwPtYKZxNov3dhHDcr4NQuK2EfCSrWKbE",
  "key26": "aZtPFT4NXWZZgKxYUzrdCboSp7aWjL2bd6t4tfn7cadhaWHLhjzJezVS3AuKv7FmKUGPZoS8nJ83sKPAfhpqB6j",
  "key27": "4McECp2FByadxKwwqmjMLgVHehuHkXdEoVUqyQ7je6YJDwhDTpuHcEvNxRZ7Wt3tnycLUT8XmVf7jcX8RiTb73wn",
  "key28": "3iMWaAEYAmdzpvVEv5uu6nmDa16hcYPFcVfb57RZ8rLhZg2fBm9pu5osw9woymiQKtBYcdZSxT1hnL7AF4uVY18j",
  "key29": "4YAPrnDwMJ9eP42y3YcTbfneueuK6UUFVMmCdxUTtUr9g7PpBUvpYpMiVhsUt8HTZHrQk7Ww5qwvf43dgoW8ZHfd",
  "key30": "sK7S7NutPooaAprwho6utWFfHHixYS89LD5xhKEhD5RbD653j3A9hHtZ31wzUd5MpipQQdrPrMuheGeya2hjn8z",
  "key31": "5ww3NMzMG8SrKYCqAjaELj7qeJG87bSgoz5no6aBnv6rRUW5UnYozf78dxMnatqeXqZb5exWWKgmRCsqTnVQTzYW",
  "key32": "3SzAMiuYKuMZET6snwkpRMnBBk8qTVpZiaqCckTNQFdEkAhA6KSePHrrShEq5oAZBLj37tVW2ByJ1gJJHFJupXFG",
  "key33": "28acBrq8LHd8C2V7opS8WLWJRrnSvQzq7kkR7rFdLTBm7ipMWeZf8WLeTveGe9fH6qLzXg5e8mHjhutkcSPFKXbh",
  "key34": "3y5yF9Js4jYoPrZUGhgAMb4toJKXtozf3EYP4ZYVooV2ZjG6iaoeNLUvYHm99T1gpK6d6bd8a57rHNdakbEBBRqb",
  "key35": "39BB51vfu91X898d4M546XDDdF49P2arBk9fVAx4Ei66rvnwCwsSuHHDxVsB7WDBH62L57L9piscFVPpFgwn6HvT",
  "key36": "2BMKnANFBxA5uchrr1FFC5jo7cu4wa7nt7nTYsoP4fGH8g5iKEbKekB76m2QPi4UZ3C3VVCB2TadCvrLYTdHjcsP",
  "key37": "3uq5ESXZESH8rYiZy62KjeZqJ2jGT6PKWHJCyBfVShNHdEiq7tmoQNGRpRu8Mbtz8pBeXobhUS7vPZZPmaQXN13D",
  "key38": "2xfqdqdCMHU4ZVt7W7vWXqckp1StfD7G17REbWAFkKcY5HWGrMHtLLqak2FVx8Wsz68H5rW9ymxysp53tqeBGR8w",
  "key39": "M6ggqLEbP9NzNswYwBtuipLMG3o47D6QmRLLJLhuYLjtMdctZXpQJTAnQeUme9b1xbiJB3o1xGnZorHogm9np3z",
  "key40": "4ayfSvjmnxVC2CucjtcpQsSvqUkdB4nvPskU5RAUpyzKsvjHzpPTEkeghqgpjaTF13zNrZfDDcyqxj1YDHqDgCx8",
  "key41": "4z6s81W1nVeyb9RHuhy3NaBosHe3b44BMyQTJQtnFKx4vtEsE3RcnVHQfxw2SN2V7DjQUvMegYcnJsf1EU7LQcYy",
  "key42": "61wCvvcZsgWaia87cPiV96Xx56nsyjMAguH3xo1B22Ckb7MWSk4m9HA7JRePkyvnXdMXx4CWnvmA1Tg8jBGAPxJn",
  "key43": "43qyCbdJwASEmtJoicX2Z8rTz9nv7P3M4zSdWdW8ot111SPiwL8Y1W4EPEyoyc2JMjsNtvRMZxuVB7obxDBApMvL",
  "key44": "51M8fujqh9rZuL5WbM6X1QUvMEpAAAoKh5F57345rVass1Lhazat3a5P4uRQm9QTqrF8sg3P8hM2fNPbmHsvR8PY",
  "key45": "4tvEnwKoWRS9qBX2yxVL8otiYrSagCZmvGcxNSzKZtXEFx9meDkM8bib1ijE71NJQtq5ybeamopk1pBe6PJm2kh3"
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
