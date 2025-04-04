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
    "4ZQt7EzKBEG2mo5qeM1TJBoH6EKfKowzR546TydLjxooS1jxyDXDohD5BaobCieySBhBoJzSNoKXJrmu9E7DqM7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m6TVqvHDuYRa9UicQ3TT9sCph5AL69z3nzbGG3SS5jLhRJHLmHW4CV6D8cHfvgMndqEt7VGKpnjY1k9SmGbM33c",
  "key1": "3SjRdUUP26pqHsXK2NPuqyZ2CziqqaX4jNJd9gGPJTu7DyArRbbSF23Ug8Ph8d2yTN3XerJUhWg8HZEzoTc15mks",
  "key2": "4jFcfFssqvPCkGwLboCuJXpAzTCVG85zxEiN54VnGe7F88GtSW77QwJcfos2s6EDikqgPWwEcw6KTnEefLiG2U5p",
  "key3": "qxDwGJD2GopJNSxb1hBQd8TLJEAAmXMA7u46DzLdiP53EjzbHP1cRTwrRqhv51Tt8tr6jW2UrxDFSkGD8nFvoJw",
  "key4": "z72ecYD8WS5JP9VdeJ9s51p9cQXVCkYETxB4jWCLDjCUryRrvVhem6YCcjzYG6c2LCr9KJpk6ssY1tYQ5VyyDNz",
  "key5": "4zL6HFfDdExGEHr56ywExHDi6u96BCpndU6uNncd2UvH2HouzG9NeKQgry6Y4rHeNP4owqKApyVjmZYLtYngbdRb",
  "key6": "3D1gS5owo2nzUjeYxY58Md6q6xAxW7R2f1KCPPMHsxQW9wFvsZgW4BL4Fpg4zfGTY314qphLUBLH9nv2aKU9Vuef",
  "key7": "3PYSW8wAUyS4gwajZj5EPBAfeMw8WDLPUupsnTeXiGf93SJCSqGqPTM5MyxFLNsiU4th8yC7uN2SBX5N4Tme9z25",
  "key8": "28xJQ3iqHvTf3xBHNXhxDqJ5qj63RRu8DnB2Wips3XpHHPS8ChszRPUnSgAmMapbYvjeLhn78qyaaTZtpcMZjQgB",
  "key9": "34AgPA3298AZU48iKnfrbb4zYGmLiWBPoHiwWXP57h8DDfzG3266oKP61m8yDL3SbLxpWZBgcUTQnD1sVBaXiuWG",
  "key10": "46XhtrBrVoLRStp9Eax8ZcPhuVY55RxHAbykUsvT3V5ARppV5oECCdBAgYbxqJjLb9QLPL9nhjXPz9hNm3YSTPHk",
  "key11": "2bvoyofb3fHgTfMM1BCooMDgM4JBZ1ssS9VH7umrVXNaGpEpXax3NCgrYVbLGgXFN9LWepZqMu8GhAKoBycV9aEH",
  "key12": "3PQr7FJW35vRGvyFyTtzChPUJi32YGaJCurrub68xvncJNcNDgDNGVmjHkSnWaV32QmxhA71uLs3BfB7E4LML7pN",
  "key13": "4Up6miArvLzxTDjq8WMrq9unHHB41PgGGBZduZKty1zKbkVbZByuEGdwqyzs8XtF1UFD63Toornwyt2eNaQu8hwa",
  "key14": "5AwSMiFSLsDLLL7tGqKPkQ3gVkNRZf46tyegj2axFn4N6mC2o5WW2rkikxCymV7LrLVjicJPonJcbUuxVBHZ43kX",
  "key15": "5aRpdjpgQmsmWGskyQnZHFtHzEgGJNDVhWvdfUYLbJVevM7G1ruTRehCkZQY3nPBUT5RadevLAuuZZ7GedyYKFSH",
  "key16": "396CDfk9htfu24vnM2krayzZGgg117DTkDPTHE2d6MJ4vu8P58b1Q58s2mZ4L5ugqjGsMqJfWY2YZwpB9jLymEPC",
  "key17": "5VK4CdXs4jmgU4aGLYU4WoqcSsThkfx2xL27jggnsXjLgVDmyurzJGnw6H82UwEJhpT1vYJb81AnmYZw6FyBstBE",
  "key18": "35TSEViX8fABTNm2k8EameizkovmTgMLbsNcoLCKYX4XYXbHivk4EZScKfTjchLMchHi21C95kuA8Hmwov9rdzUZ",
  "key19": "2zF76RZ1qcsWwwmTmzntp4DPu8NtMXao3aFiyftyrKjLQxmziku8GuNWjVN3p1HETcvn2oKzbhJL3Xn5h9eZNfFY",
  "key20": "41eS3XYeCnTqqDnDkSUHQANaM85YrsmHEHNnRjXd5naVZC6V8gifEfx4YCmUhWH49YbTYBNPaDTRxdm3MGgLXSgf",
  "key21": "2vA1D8tE6a3okHpywVdBEQ1GsMQJKPeJGsT7dyEWdhQZd5rq9PnHijryFM3efTRGyJmRdjC9m8Z9mmYQN9h9Kbea",
  "key22": "57YQCPw6mziKy3Wkp8H4AnHzynbH2t1UwGuzU4BwFTXf7qNzkbsxfEVyKGktg1x9RxG5R7PbMUGfg34GCerbuv2H",
  "key23": "31gyCuw42ZJi3D8qDcsdhqUqsxzuuXRVuPwMr4rh8pgkCfy7ZQPoND7JxC23R3RqwyjQCCE8fYMVsamWHUiPFCqx",
  "key24": "52t2sXDsgePiMAhd7kKC78KqtjJAHLRJdmfa6Jkbto4M4o3QMDKKgTdDstrqzABvpzdycRjJsmKFBPhBUUCiyYEG",
  "key25": "5PrVaQnKMY6po6AHQcBRcvTyJoz8R4Pw8dAxG6NuhpUPM4AsSSAq322CXL649P37Zh6rAebSdF7daw4FLwjWnkeF",
  "key26": "5KSCoPxrZb5Qx9wsRLbFPdN5U7CHbDW2G2RJv76oGDr3q7LsTmLkLBKbYGNC2b2unFgf6L3ur643owJofXw2w6JL",
  "key27": "bii3ymvBsJxRJu6sJfNkB7kZFzqX7rcU9MiFDFNYTBsx9p3iNUHMDbhjTsiUuUYP2EeSWCQtw7WGaBnpHh1cBA1",
  "key28": "54gVVXSvti54GfM3M7XpkS7iSmYJXmedaTbxsfQ7NsD51rjwmw1yStBFJ7Bq6AczwnuGG3JCaEtbt26oUAm1Vnzf",
  "key29": "5H6wbnsopSyZrs2pAJjrqjp32HsUbA3fwHeNntVn6NZYt1bDvfET1t9GjXM4WCxL8nSWjYYAb7jyHiG2GDka54Sz",
  "key30": "3B3pidA2Ck2uMticXeZQL4zspgYsw28sxQox7PMBikJ2rhgnCw12V3ZdzE6jqNu2mtYJgn21416mJDAM4DFmBYVA",
  "key31": "2eRKBrHFcBKDUT9c66sjbYTVJw856M6BTZR5AfT7Cwj9cJGqks2L9YD58xFenVGtfNi5nRhcGb1VyF2Fre6DJ2hr",
  "key32": "3YyHEduQ6mainUT91hghVZQp9HxxY93qWuM55SihsGqLSY58N5aW5aQjHDyiW6u9hKXAqZw56YkPj3Gjr56xKh2C",
  "key33": "5uDGFa5WFUiqt4Ru4aQpV5rL8sVL8j7SkW7CWoyrxunb8XJgSC98kgDuGQ972zfe4SPgdKPqTczxZG1fgvPJ5NiT",
  "key34": "5GrB2yiPTLTYADQXAWkMQH1e4HDxKR71SYdx8d1vxoeYxkxee3XkiCSu5m9Fg1PkjupALcG6BoMFyRgTpA1B3whd",
  "key35": "2BnPtnRdG1jqxKgZrYnnca3RZNmEDxUJxs7xwUZfHBRMGvjYm1erJyMsYMaGcYW3KzX9VBBkCE24zKS2temL9A7X",
  "key36": "2EJv7tC1e3xn3dq54EX1ZZHX1r2DjEHCqH1g5LYbF7Z1yPs9eMNfEEC44q4oHPd2eV7gpUPNaD5nbcM1yU2yn4G9",
  "key37": "5CH7gjRtLHrGuKjfR1RoaFfDjRjH9MCJsaUb1mmVdWoQJiWKYtaBYktwLn1zRsVvSbLTbx9KhdWb5G3b36iuqVTY",
  "key38": "5yKp6kP1RXnkWFMVtfSFMeEQscaN1m1kmkmdAfxebaHeBaTPdGEBC9GxPAHrBi2e64kWvqsEE114xHPw8vkDsMHd",
  "key39": "2RhH3Tkz8q1gMbMYhDk2Rw9YWsDeExcoze8Vso4Gxrow5UAtkR6gGrimpbbcHmVhtUXTFof8ZTgaxnTn4ZmSYhRZ",
  "key40": "3dPKsXkavMbJ3AVWLhye3p5SpMHGa7q9FnpKbDX7YiRKxPgWc3pBPrmAkpZjze3KGGCHoszkutk6vYwHQpovDE6K",
  "key41": "2n9YRo3b2xrpGn8H7SE3kZ7o5KcahnPLK63MtP8brEjsG8xxiPB5kKwMxRQREpk3niDZA2xZHPish7TBSxUs2t8A",
  "key42": "27hqa6upidxErJfot1pJymxPk5nzPdnXkZeKCQ5TkduNCF8THbNVKCbZLnvojVFGCfoZ9J1BmmbaEgSPNn44qELk",
  "key43": "2kpQV9Tq86n1Xaq9f7sC5qyGYCXMQHSGqXh9fBY2QE8qNkbuhP7NAgJkmVMHUYjkbXXJWJGSbTP2Frppy1MG9PCh",
  "key44": "4zCiLQXfvxtqSssXp8LRdDJ68PG8DMkkJwVJumdaKjeP16nE4CrgSnAiB18mSjcJSv4KBtkpxAiDYQz5fvW6DaqM",
  "key45": "5VudpWoJ1RezZdmT33jKEkMSe82awtLhPRr7t5dQZEE3uxtrpRm3FnNcQ493tDZiP9o5SUXrvBU8ZyRQCwZGjneB",
  "key46": "MxWhUp64RxqdDvrMLatU8AYPKHC6q4mQGvv1utUVdDQtmw5sywBPRu3Qf1t8WVUfRvRt2Sf4BbwAiK5BDcxNsET"
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
