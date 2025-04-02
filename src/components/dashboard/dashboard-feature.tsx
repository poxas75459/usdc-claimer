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
    "2NkRjrgKDid9nS9GpxPdxn5MDgzin5hNJajr7thYi9rTd3PmjkgXkC9SvZrb7WMMRvFi55cgsH3YSyro15cKYFfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42N7d7xf8P3naM3JCFNBvU7MRqc2L3qTLLaUamnyQU9DygUSuwVTLKGSR6u4LEyMuct1dsAhgoTaGW4YMHBmin9A",
  "key1": "3FKU47QB2wscdTnAU5Fbhz2kqXMrShZ3sU7RDLschHCUX7SAVUiLZgmrYQH2CWFKA6rK7Q6Kxi2eav6PTgjbgyZr",
  "key2": "ZGgrShSSUTKnKYrND59qyEPU1zzi8bYVuUAWMYh5djeEeSvZrTPbZKg6Uw68kY5ZqUEjySt5hfWnidN4YUbxqcT",
  "key3": "45EKaW4HAs7xTC7WtBPzfpc4Qto7jyPWzXAvwW6dXepRhib7Ky7JMV6J32Py9aq7va65ZotrqT2aKvSLV4Wgd7Xk",
  "key4": "2SjQYHepK6tcwGDT4oNLbbDS5LLS31CsXisoke4JtWfQif5drm88zptgESnTLhmJktka8nvr33BjsNdGpdXxzTou",
  "key5": "4aT9ve68Riobb96fP5CM9LbaxzTbfXr3mComz5w68WZ4FoLTAp81ko24pbbMrVsGCXh6Q6h6J7jD7YywuJbKE4BN",
  "key6": "3VcrwoJj9toA28eyGKsBpybEV462y2E8DzKrjRJmoHeB5hsJ21GNj2csCqpjjNWiLgRAhwG72cxrYffGnFXCjaLS",
  "key7": "5acTyyYY55naHB7UaEH5MgZrPAdYxhqCsU57DkAWXm9xfw3JUHbeXZztQwfjNVicZzK6f2PohURYurvghosS2SB",
  "key8": "hvZofuGiSxwaxApfAgQ3nsxiktHkd49QfKrrvXUhsmdQjVnB2kXdxmE8ht75Vw1Yg767EA8GhXmRQcnCiUx4hdb",
  "key9": "3K9oJDAaGhjgaPx3E5PENC4TTAoEEB8SnwSmaQSuA1imRiNQ5gHKMSLXcFMZtMepZq4S1cyG2Z9PrmnboX4Pt3wH",
  "key10": "4LdDFGWErNCc2oEJvsGgY5jCR5A6wmH3WeCPX5J4mj14B7gYfa6pzgNwoCwcG3bcVpEuoqvK7g1hg35fsDsfJi9D",
  "key11": "2GqvTTYspzHdpRbuNvF4Ea5FdiJSKSD9u2BFzzyEsQBVZqd9P7nVyrn3oSfy2QLt6WCEhy398kyEufCE5LTkuUf6",
  "key12": "4ZhWWqfj1iwwuJ67JmNe2VSkJd9hVUmRiNoTWMumYf4yy1GX9S7pp5zGJoeUz3RjXdCB5o8eUSfssS1B725jg8Qk",
  "key13": "3n7RRx542FxpZHx7R8X9E2V19hjcx4WUZnAXw2aqCuZpwWKbFiF54W1XqyD5zTvQFuwvu8dpqmWCukKmTdUWcqKb",
  "key14": "4HKPMtRg6YKLFmgVJCPACoZY4yAc2cuQBmpUm4NRKuG9HbSYcNgLdxS81Q6vqbXCyUfzyFeptQehA4ophhNkfGiP",
  "key15": "3ALX8fM1zA77BRkyVbb4VC4q7SDUaB1SjkKCac8W8mpWGmqtnrey5KRtqchX4Q1JWXxr4BnSVibuSucY9MJsfJcX",
  "key16": "2jYQjXKWnf2fvPCGmnzHahjAJp5KZ9nqL8Sw1U8bS62NZK7hgt9Z3Lyn9hRDKGa2f6Ab5ccYr9wxLwHLQvdj5sTn",
  "key17": "3zyPrhSk5dah2SCXBxJPcvqhnzZJCL6t2CuHg6jGa2rh2Dw4qVhdpK7FwYYW1xqFQ8q8rTTUSYgGvKzjgmHMG5Cq",
  "key18": "34osfLjbqhMPSN4KnVp7Lcjzita9DKZ2rw21aMAD1Ncgm7UFkzSd9LN1xkd4NYzyjBN1SrgGt44L92DEVBv7yvxE",
  "key19": "29wXRBEFCaT1gv16d2eNiZULe9pmV4R8M24eQqwm7FUk5uZkqawRD8jAkDtyLnZTxE5HqRRmFxNU1ccdDnT9z3Us",
  "key20": "SpxBeymQ9kFzaR9uVhAjPF9jTRVyLaSxQTVzjQPhdFS8hftRYn26X8KZk8BjJYY4BwZUtRS1vhPRMkWrZybaSDE",
  "key21": "N3zvmsFW8cFLRnW3r9dNQYY73nKw39HBq93bvdWE7C7E3PJUrb4VrVJUQgjQDv4j5j8bTVg4NMtUbTpDw5VXB72",
  "key22": "ak4bTCjU2pYPJsuD1Hdg428HuWt97ZtYE74DY3GKab32cUTzin1GkFpwXQFEc7LNe7WCHgxF4aiToApBYpj2C77",
  "key23": "2PBvnaqy8qCwPW9tWLANogCWdeRTXYShUMhVwdMJKu5T7Co1T9Dk9jZ7p4WFN5VWt3bs5tFMZjTrCmi37WTAaFJ8",
  "key24": "66CndZqFzbbw3f24sNtprx1VTqmc29319nqzLzpJ27itM6wmp5dQMDhTbut86yy54bb3i5VM7ewqobL7nf8nTmBR",
  "key25": "54ZQi3x39YGaLaguBDVgNBKfrFiaQSZUYdaNyEsgt3EYRvPk6hhEB4ZU4B8RDBY9wf2P93iERA3MJz8iRJRwan5A",
  "key26": "3gmchRuCRrQAFyGndsoqxJqWNcS3DehZMiP6PKuBzxkgQQRpkKe6qjYHyoUARMk9KVdnXgcTsA2ujHQXaWXCBf1a",
  "key27": "cyoWNMaRZb164PvxJoLaEZoySuKiDHHvQbULc8RvwMwzEoSuFvusa7YBGNRp1inqDcHxDZwwiYUzg4qScGSSnmV",
  "key28": "51jMuPw3qduQAFiJm1zCaVhGovZN8dNs4CHHq9srwcVzaENcM7hK2vE6oDpU7oeGTzNpf3b5BhooufQbsjCfho3N",
  "key29": "4pR2sbTkX6CjF9JrgNCeBzNufY5EzUx6XiuqejZRqLYcr2VErqFWdfFy4mrHyt5qKCHuWumnycAV1imvaFbddZVC",
  "key30": "2XSxoLBUnkpGRw9sQ2zGHXs1D6HEDmCVuSHGvtcUdwNMUfmTScuiYiPedC8TTALL7ExRrNsWsZahdCg9sSybTy9K",
  "key31": "4N9a18EQVSEjD77ep22rEDLh8ZLCxU9EMLn5SLT3attEyKky3aDGXQu28mRSK68QLjVWHgU3jZZTf288usiqUpXN",
  "key32": "2byifbeC2wvuWZR8TfsrSf58mVNEyV1cJeWoFrQrwehDabD7BPa2W79oy4yBaPpcVDfgzz6iXe7Gq9NKSGLxNVzw",
  "key33": "TWS6mmJVkcsrUJP7pUhQh324FjB4ogs8iuxV5Jp82x5GHcapZ3Ded6K4P4L5Vfz7bGe6hxSQhoQtQrnUNCVKofr",
  "key34": "33wXd7ZQvxMjpDK4Vj1Kx4kAdA68YueyysgacHGq4cp6rpQFV8wiZ4FbfSVvtyNh96MFH1et9Q1P2XUJphBseNpi",
  "key35": "129NGVE3xqmVRvUdjFx1okM33LqCn3RzTeKpooht8TeEyuRJGvFmoHSwpXVusBy4fbQBtpJ7cLK4UydabprUL4By",
  "key36": "NjP5L5pJKZa9xGtK5UcAFzCjacqVxa48zEHQexZsfCbtFUpnNdDaHamikUUVXViX8g3WE3uy8e3b969U5JgYPSk",
  "key37": "5RfzJnNtvnhFUrm1ifVgBrBdVnBdhf7nSjZ4vfqYeW2KpovCYnJurdZoixqaiVykXRfK5T4Lmb9x8DCHputLXsSA",
  "key38": "3FmttkhdBaac8vkL5juZ1cdtRPGnxZaZU6KG3EP4hwa2CN7z2mEogUDe9a4Ypbkd5JYxD58qaLQ8tjxPx5XUCrm",
  "key39": "3NLvieDQcE1oscAeu93neNdhEorzbkWTtjfyUEeBoVAYMmQb2mRpu2AuCkWQThXTQucK97c6wkU4w5fW98jwAo9C",
  "key40": "39j96KnMTgq8fw9JtPwXewP94Dp7Ki64K7vHFqsjTKKEjNZABGF4PKW6fkpAqWfkx7XuZqfoAFkPD49XFGVXEpfk",
  "key41": "4dUYnju8UxPpKLTs2gaAh5djwVz39QJhgBZwwtWgaGYYdNQGkccxq7ieXYVpjqLXwbNAoBf2ZcKJs6JuGZoFuFz8",
  "key42": "QwP7mKVkCqWCEbGuxr9LzqzmkMY39DwM9XqEFnPTjdTMyngMWZPD28D5hgZUwGxgbfYoMmYJmfiTWSNXezXshiU",
  "key43": "5yPtKgMpfnzaM9kn5gFLDbJxA5PfXvdRD1oCtvdGJDw9Yi2AL4EM7zsoYJYnbj4dRHntXEJkuV8CL8mfRFZu1v2r",
  "key44": "bMKAP8fQx312Fy5psbFCP8d29ospBJTFDVNjFdKsmbmL5ZuyokHtmo6No65q9CHB7uwgXkFaNgoPmmcsQ7gAZkL"
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
