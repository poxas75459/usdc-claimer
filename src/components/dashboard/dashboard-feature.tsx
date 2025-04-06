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
    "Ey1eXQf1PHasSPo9z45qMZ1ZnF4hroVoUzicsJHwF6yWy6BbwFsEL7VUhpNJmYGaBhFSVjZHetCWT296T84E8JH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MJG3Pc2TBFwdF8h832HNQx9CrpbEnYx4pfB6EKx9Tjwk8FNF1jwnuAxjB4t3uXpnyyPpNeBugDmtjJugU3w6CiE",
  "key1": "55Urs6SnCA7gZLzjRGHttwBMFRwr1ousns5HbqXYFU4DqYVpKFrtyX3Sb2v1QETrXMgLgJk87fhU43xeW3PsFedK",
  "key2": "5x7RXp9JaapJy5aXvq5ugTDJLrUnBpjRfYPPxHymUg1fgLfiPHkMnoM9NxyZyVrqZorNFf7iXC8nfxVzAWU6xnC3",
  "key3": "5eQqN3gKSjMpvX4Vo5abrgG1hKXSkEeRwdsQZp9vYfK7mXYEDHm5x96UdHbtJw6o41VSNCkjsYSE7CtdEiKvp4mY",
  "key4": "4pmSLErXGBaDGTHgwVNGzgkmKz4sBBG4HAsEeP7hidYVMNwa74TppTq5N5okBcN6kExc6QD5rCVWGLYcbRBhdg4a",
  "key5": "55LePqo31JGSsdgh76bGiqFyrVCxobGvG396WUaibHy8mpbfBDSt7iWBeZQVDf1Kih4MCmvvQvfkbVipBK6uAPuk",
  "key6": "qGqoRQonkWHpEgGTsngRjsR9RaXuFYpinE9MSHZW7VrLNZ9EZMPkVohaLBqCdYCRK5TtY7LLnzt8155qYbzNx4T",
  "key7": "Mc4RJVnrhfoUrH1acA6kAeV1YdLcKrrYY94hsVEb1KkYHYUPy37AuULiMXj39FizGqPhA2TzaeTcqJ4KojfEo2F",
  "key8": "MNXRH1fKhQ2abnkkyLsL9xXsTPpsB6emzDNrPxuG8mJLoCCWv3CYTnZbNR31foN8x9VzREmuKXRNB26Jfx1zGN4",
  "key9": "2yeRzgUiRpKzNjpsRreuFXTizUfsMCD2QAzeQJB6JqxcpY7iyU7vMPt14o4qvYhR61c9vHrwPySN9doxZiCmdK9U",
  "key10": "4HPuMyHLDzSCAdW5DmDQS6Z9FhpJnMgdFouPtHPm4H7PTEV9SjDiSLDWpVdhctXXpALbrYBFkxrwEHmRFvFXDLz5",
  "key11": "kUnGenBQ1LsAdf3FjCp38ubx86mJLHQbcStqQUTim7WP96S6EKYR2VLB9CPgmKkqHRpKBdQPB15ZQT2WSg8C98z",
  "key12": "3R2Wv7DaQzHQFL3BND288EymsusHw3qN3dBrVnjkkJR218CgNoDSZAC1EAFXepeHycmBC5tiYGrD6paKXY1gdARy",
  "key13": "3jviEVYUyH5vqtQsAA71pGKbTySciYjpX9xxzrH67vn8ef68Xo5uCpiZga5fUHknAhzoVkr6FvADxSWLR6zJWLMd",
  "key14": "3i2xJxWpYo42c5s1JGu8xBpeVzqPDCVkLnStkgmeLGp96L5t27dRYDNfL8gomBsBaGSt24P82qJ2AZYLyKZCHixr",
  "key15": "4Wjne1LYaCVBV2HKCZ4wVkL3V8KQm8P3wyiS6cfJR33qdmwNzoyAsV5RdjXcg6a5LkFiQDqDXTpDYkmQcbz7vp9V",
  "key16": "3KuW6AfRQjZbF5UosigF9RQyDUsep8LawMZeZtvEwT4K9h7AX8hC3DKHjRuYqXF8HaVbWZvzL67yzAo6iKvg7Ugo",
  "key17": "3K3ZpB4eziBqnzSn3HYZrbcHJkkNYS9AYrNkrB7h8L7sA564U8GtMXjTLpoNkzbbQJhsh9c9fFg216VaD7u4u4m8",
  "key18": "51JmU66eAQ7pMxr4GFCjW1qsUb9UzuzzMghPUozxSvF7vu2hhvZmgtQShENVyB2uGRLxmhWUaxCcn3HvpLRiRmk7",
  "key19": "3VPdd3dQLYQL7k1mwMop9dUqPKNkB4yVPZaF2oMa9FpYj25Et44RUAZvw9gYaafKq95WswTpcNqSf6ACw3urCP8J",
  "key20": "5HsLSN8m9rp3uUbcJADBSzn1HiTHJC66oZpa9zeQj1cfXjbBHFzBgR3VondugddgorF4GiDXm9Wzw7pqFqGdQkgq",
  "key21": "2eGaiHMZsBdVFqksecUMkcnrDFUrVDabugKEMfYq6abYetRmGSbS2vyfxFxMMAjyftUy2NHfCMRjBRzHSbR1hjew",
  "key22": "w2vLAJg18u2njdKA4zP5ven28Z6KT1r3dNVekjM95Use7Gc579FqmuCQPAPmtCM7e5RHGgvANhMV45eWcFQJePJ",
  "key23": "3w7Ev1b86LM5SS8HdMAFPXdYwRZhz6tckqh1Ge2bbEXsXiVuQpzKTE3TC7Bo6BWh4cQm3ULBE3Zu4md4LQ1zc9n",
  "key24": "56KwxXMY1XMhqEXoewHpq1861UP1yvjgmaPXyFMiHaDrVA88Gyarzm8dk5getGXfFcWUVgGgSY1wcBAHKuWLwvQn",
  "key25": "2Qvm5PnM8ZDQQRkxQRCvSyZpQPRJoTjWkuZf6SLGcszp2CpL5fT4XY89AYQRnY9PLZjH7dktgD4SDnTHXbkNHCKL",
  "key26": "FDSC9axM5eLrQYamtWNmhsqhfsAYHt68oaK1Hjnj6BCruYQuwJqE5mVbUxE9kEedqsZcVbNRV1J5afzMmsQwk9X",
  "key27": "3nLKFGUGeQKdeEbkZazofRPS6sFNZvUcv5aRHpjoH4G7vwFa7q1cLCYYxNZUyiMJBgJBbF8NhWpiNmMnWagD97nW",
  "key28": "2PsF1vSNKvovSPXcQNWVwHM6TAjgH4wdEqKrz7gPCCcrv3tLnU2deoRwhMTc3xcK51QbqiF2ZqWKPqFoVjR3zxzC",
  "key29": "3FBCFN6fathRr3vqDz9u63CxvEqkAjYSDSMuCQHzBzGxkkBGo49dvwXWHziv7ybBzDX1APpoHRKCn6tcagZm1gDE",
  "key30": "gvvMZcxLhRcStRZgjUBP9gofUusuizLGHJXs1nF817gdxygcppwo3hmdjYXUonCAzyiHSbSwCtcqgtSC1hxkXi3",
  "key31": "44VZ4zyoGjy6d6c6mSrQNyujVimc4fzrFpF1jXBRp7gQeFzrkK5qfdYYmYMfQVaEmfkW8jRGJBKsxBQRppwYTVkp",
  "key32": "3zcaN3qL1vDHhJQevaDX2KT6HegJjxvfM75zpRdqDffTD1wyh5C1MFAH2c8s3uwxBuePLbCujqgjntrHYFcCHH6S",
  "key33": "foWW4EoTf87ZxjASy3kFkzcv1tyo9a2wMnfyKS34rMS8LDcSWCsy4MMvNGvHdQ2NNkTdw3e5Xxzz1cvctMi66s9",
  "key34": "5irbP33J4T3sw5uBLH6HXij15DmFW5EoBbxp4MYuj3BMJVPAVZrNFJ9Dfys2Vnb8Wg2D2fhFkfhDoCUDSs7B3iFZ",
  "key35": "4UELzrCpt53UeNYkHzVYE56daWiEizwhgH1rvsnJo4E8ykADN5DKkBdrTWFAohtkyK93t2Tkdhy2VDsNny1fo3jk",
  "key36": "2YoGEz7a2p3D1ZrpoWzWycKcLUccB2roUwCVTrLWPttitFV2E2bojKMN69qoX5tbm1LLGzhxgR7jN7GcAguvabtD",
  "key37": "5D6NRbG8QZpJ6y8rE2cExNY1xkcswfq7oygcszpHqRh79VEWZhsHFVeLsDazA4d1xAqb16eJEwryeigrSqd3EBVJ",
  "key38": "2jNMJ5c4rzLRQVV6Z9ifEJjq6MyahzscC2GmAoo3LTkp1atLbPiqte23Tawz8nzH9P36eEJmSiegAUaumV3uMRF8",
  "key39": "4bi7MbFJM6o4oWvT2gGCH7u7FBSGdcu6d9Tbjx9Knvhp472VB3jjrfxqeNLsH7yEN62tkFd44UTADymBC8pTaQZc",
  "key40": "2a7WrwKiWSCKaWzZkg5xz1tRjnnmzZ7QMjFhvjprSsosH63wfCedAG7ycyLjwy26RxoxAvNqE3j9T44pHhe3gA8m",
  "key41": "Cde6brZ1tHe75wLfCqvcv5yJYRo5JJWhY6GpAbWY5rGfixS6yiiJ5mZJTmvBMjSGvSdmChEJR2h2hhxRYmqP4L9",
  "key42": "3motpCKoBsEZSzAp3taw6WzUV4AT6WdQBySKbink8GALqp3ELzkjVV4ewzYxbD3gzRGjPMWMxcsfuqE3DiQcqU1v",
  "key43": "rCHrNCbS41SJTwCejwkkS5DmcGFhRcNeoo72Kvkv8mzxp8gmcBbatf7SA5C6HGeFQJ3fcoEr9Etw4J4o8WQhGky",
  "key44": "2VXhpDP4SXiHsYFAZ7rqCWUTLBVP4VHYgRWZ7R3oY1XFxXqtx1CqrDa1aegZcM6eExYwpLkrhjRacsNHGaYAcNY2",
  "key45": "KHeTUAdZV2Dn6bTqQcqvpD1vLRMocvwx8diLScMHrUS7qdTovRGtJwQ2iYxohLMZXxY8zkrSEsX39PKXBbAfkDG",
  "key46": "38kpG8ogzsXz8ukkQxoc1eqyVi99kNkzS9dCfNe4fNtkqbeaczhA9XtyXgdD7c5938Azx3m5vtizrMVx3zBb7dwG",
  "key47": "29PscXtdyTABj84kJuhQiVCAuVfTbtSis5o1vYBidMkSyG4ZKXJRKMBubdL5pru6sKeXgyXujBZweia2KWSiLgEx",
  "key48": "5f6XySJxiorGyW6vXy6JJywU6FjWgXLEVp67rDSD2ddbaCFE9NuySWi7t31F9n1o76ZVykXtAWEoTskSatCY2t3y"
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
