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
    "4QVCt7FTEC3twzXGinycMy4EWuLrG17YqQSYjGBDGfx4zD2CRfMgbvRg2KYQqAz3wWSgspWKDVzeVwR2xeiwHWqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oo4GztvRfKr9p8UiKmfYhk55ebJeEn2piNa6p8zfdCHCi7kiBZazJYQ2kXBmj2i5Zf5apNwiFc2uGGygJoLcQzh",
  "key1": "2zPjLuLjSdwaoLHKcGGupeVLWqKHXoWJjGVgpVeMDCjkQYP9q3jgNLzECyoFpzEaDnWBvmkRjWDwJdDw2maQgicT",
  "key2": "3cEpfzePy7JsfgBLAwMpfq5mMqAY8am4YWbEEQ4kJoG9Hj7gbWXzDUWtMqPJPHLBVQRZzDpJfbjwpxMg6eVceE2n",
  "key3": "2veyJC3YfDLk9DsMAdbA6PtbsgwNPifAj1mUtshn6vADSZzKo7VCSyaXh1PangGBiNC8zp3KLWp7SYRhcJnbsTEZ",
  "key4": "5EWL3XKiajo5J184nprSi4kGa9cVzS17ukYsBscLZpDMAoa7E2Xbcg5C7F55vMeKP966pjkNRvEp6dqqDP1qLAi2",
  "key5": "3FKmkh8h1XdJgC82J57R3XBuKsEwMnTwHHVf5VTca4xavE1umgRvGMxQj5CLkXd999qMT5FTxjvyMhYmYV65Xsu9",
  "key6": "53wYrRku4RosjKQrp4nzcz7WuMog7vieG4mBjUSGsF2KVJdCNftei1y5zFXEzJx5ozPJCEj4ombDPrrQ9KgBuP4J",
  "key7": "5f2JnLq9JhJwLhRQpnbkDuvMDCsCbozxDVY7Rnue9eHnqNrSRwQWpvbAJv2ukjkaPuXtTqNij7hRyfbRDZqBrnwA",
  "key8": "PAHhdGcBMCAGAiQ78wz1mtvxPK8Z1pcihYuVNEYHvPDHKhPZsj8aYff9wvkZjC5WyNXQsF8ZtxLJSiDiFUQo7BP",
  "key9": "2anbTekNJY4i4hxtTiFCVhfMs1z8MNfRxTo5zKcWgZe2a1yoRd5QTjKv28rrkHNpETF96AFDRzrDkPKcPetsu95N",
  "key10": "5wd271dVKTxXVpvmoSvcVkRUeqLmgRzHxzuLxxoYRjj5KFcpDajSizBJUq9mz47gHU352B58CfjCUyKW2BL8WsDg",
  "key11": "3LvgPRpwoaatDXiCjZxRCbPjZNGy7QCpcUcGV3mfySxhANQcrCFq8CHMiqvEyg32svLJ27xn7BsRcAWmUPJRQtfH",
  "key12": "4voqvBnoPDHEznRk4c4cbVpU85YJeDqugcWMDAzF8wbw4NC7Uc5UgETSPQGm3Zr4vQjFtxHGrmCkc2tP52MdBnP3",
  "key13": "3BQwUSnNJny2uEwNapcfFnXPVU6cgSYY4ezJ4bDKRzXKxaVRAuaioAR7XaPNvaXoJd9iJdeHgd9VWJWh7qycFCkY",
  "key14": "21tvpygmmyF8Eef3vMgcT8PerBeoFYyWBDFosdMEt8kc7akXp44KQXrYTpaHgDXw1VrXbtoeMEoQz4WCCc82QVz1",
  "key15": "3ngz4sgTEFbgzbwTDM7ADLsETMR3EDPBU9g6gFsZYr6oGgyhftCRkNtohGQgx7iejzLhwVZwjMVgQNDsMwMknqdY",
  "key16": "2335rt4D4AJ7cZ7hNmynhJ87vcHRjtGGGb2mYWcHfry52H3KbAduVtt8nbYxoSjuaq2EpvS2snWQr2zDLcYEk2Mf",
  "key17": "u5JaoB3wZPUYnJoBqxwHqVSVaUosjszjotz6qzUqcovvumvDjuwfK3Bkf9jKdugbw6eM5NTK5y56MmtATMQXmW1",
  "key18": "uiH8ZK7vWHp1qiTTtC78TLMS739Dw5EhwhQNPEQYVA2mTWgKQJfu3tAoqR1ZUEwrT5mEcVBGmJ7H2oxaMUvhxCG",
  "key19": "5c2URbQBpZmcfjBZLZRmKaxBuxfxgiW5r8hiFsB2r94ymC8gQMncL5Pquyn8Kjq4d7FTZm1bDdjTveXbxFBu37H6",
  "key20": "5bSFDkyDmpyCt5v5EU7a9C5EhCTfnvnT8im5KjjhrWQxU1UuxAwKV6gY6Ps1yGAw5JcxRGWq1vWcQ4xkeC9g714V",
  "key21": "4Vco5VtfXtd46t85u5jwM9sjdxjZQusLMyErhqaiPeXPs2wnCoG3ftv8uEVWLJ5KD5xvyYW293aUnK67q4nag7d2",
  "key22": "25GY7tu6fFxcJJGNzTGW9Tun3ryfMYSZMnX8PjMtXmQtVhCoMR4kjdojiTTXhVcDERqrU1EYGy22RAPge3pD6XLH",
  "key23": "53rm1QbQavWXrmqJnJFenrRanGfaxY46UXqwEiaDvW86iKoHSZWJf2kBHQ96X2r95cReSZi3YM9XW4dfa5kXEK6X",
  "key24": "2xCYf6aUXs8eLKYNU6YN9Vd5PF4Q4nC44oYur42qDBS3jtbQp3e6pbZuZGoAdEyiapSXuRSNhs35yDRentJaAzYS",
  "key25": "35sS1VqsDHdzWsL3XHw3rjAahckWuoH7SS4nYtFKptqJsNApKZgWaCDf8WbaGjJrKE4KJrGfroHHGBxJiRyeFEFa",
  "key26": "7D1uLSDWUZq2UgoAmBJp4XuFGRceZ4bQ4qdDi3FLR8VayTrFTf7vmi4vPzUyJ3P7wacivjBJMahZgDMCfpWidX7",
  "key27": "7eSA3M4wpXymK79xG7k3wsoT2JoVJmuurAzhQ4KLc9JAzBHZXK1duU4a1XXHFZFKeVzvDCmaRBAt7nb8Dsh9CBo",
  "key28": "2BhGwfBsDmSgxrefDcnaCUrHJ3y1eB441Zx1Dn5uYWszBdCMcn8BhX9mQBVS19WtBuaQC8duyHZdGordnbsECHbQ",
  "key29": "6HKPuDdct9kAjPjxiEBxRfUQcdNjcYxRWTm6J5jBsSA4jZMwesUvN78dhUKpEJDG4b93JRdZLowQWZzkmmqmheM",
  "key30": "CufDiyJSH352LuDs2QV1pazcmCkpzQRTCSquQbF1qfCkb7hgF6mZuh5omcMddwFCQ2aocAtN7wzPDbo8TW3A6hJ",
  "key31": "329xwLZawnvGMzt8kV8S9nXB81AqWMYsjcUBGrigh1KKHaCqas8tqkwWyE4ToCXz3h99dPbXuuQfXzQF5YC3AqAR",
  "key32": "669Dum71LkSDD9z8mVuShxB8LXcsA9XwGUHwzjh49cncdN8PMUPoS2P9yCRrC1Zpvk6bqu8wUe7Zep9L9rQuFwhc",
  "key33": "2XD7pbnDksbtUypCCftxvPD4xzWvbznWN3vKYad8YQRHk654Fgj86SzyQgtnX9tQv31zzRrfeWtpAtvo9rWULBQb",
  "key34": "2P92kwuBqoSKRhjUkrwhZ46RGJYjipaLw7sUMiiXKdFhtdTQ6wafETqz5XKf6Xb8oiMjxvDkYQnvcMPqGP4T8vC1",
  "key35": "28JmUUCauurikpbWRhG8u7FMsDz4hhNFN7B7eXMCzL7TLqrNnpJXnCcj2MTGV7TSxce9tMPP9WpoYQETu84MxKBU",
  "key36": "3vc4yHSiKi6CeEcsfyLZttPsQJYggSvSUgj6vNQs8DM1yAmzKP1LsYnbZwNfUnEMihKCwsrAL3Z2hJWNkWxdqmog",
  "key37": "3MfuMvoHDrBUasUzqT8H4Xa9dwmXSgA53UYoDHHX5hQmmPzaWZcWttc8XWq6juQ3nsJ6wVKRPwwdsMii5RDpno5S",
  "key38": "xsWhEG1D9appoCNPwMaMxubL6wxYg12bX9MgZd7jRquvVZw8NS3GCYn9wZf1gJ6kx8WeDd6jfE11tShCL5TA3Mk",
  "key39": "3hHGhugihDkXB6kbebL7FPKKVNZ6RC3m33Ateve8PCZuCPVcnvfJ5ocJepkENP5MGNxq8dFfPv4JXpeqNko7k8AG",
  "key40": "5yraj31o3JUu1hPk4CASaRLA9AGWttkenHz31WTRDkbGuft9CS5MxmCP73jFhj9fvhhFJFTGnwvkxGSLuJ54KWF",
  "key41": "4BoeH7zFCUcxnhaoS8ZkYKP6Gxd3jZzacrRi9DK3MRA6zJYLtaaT6JSXd5q1z1F2CtdgxJod5NPwZQ3R3XAfbVbH",
  "key42": "3o8y5L6KKuGhSBmcH4BDXMf4vKDKQ8NB2CgW3ro7NiX1L9nCvR9RQcgar1rXMsiFmL25T9MsRZpSTC3Co8RMPXHu",
  "key43": "enTEpZyebHGPGXrPShM2txwBJXFKwk9JSSRtaS93Xt6aN7apbbkVAq8Vs7qCnHSBvWkV8wsrTNWNxrEf9LE4Jd3",
  "key44": "3X4BGVbYYbqEsXbGbtN8yJwiEj1nkLQTQygztiMT5QqUxfPh44wiWHPxbjGdZnssJRh2K6RrWvZfSFarzzLhgXPP",
  "key45": "3MFHCq9E4pUTHRvyoaD4RQqp4RUyeVku833RAJ8YiF4DgYPJf1NqpZhN3oycMDkNgoHFmKGJB4DpE75NyqMftieh"
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
