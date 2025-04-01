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
    "2LWVrmDmRrz1e4UhkTrGUF6c2xcT5u6RfnddYwBkaJchMR9HvoUt2bSZzyi3Ln3aeaahSaAsBLzyDgwUiMQMofwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tkHQHX1aU1pHLu8ZwgWrMEzUZptaoTNrvy9y2kuFjTC3zWDuHNe5eS7FaVwPXCkqfeYx9gdqwvcHfB11nt3BW5Z",
  "key1": "47gniRA48E3amuHiudr1u2xeN49H711fr2dep4YagXHhh4iRNNPgZeMSox4VrojHJ9Pehp1cT21V9d5muwjXBrhP",
  "key2": "5YwjATqa36Wd13DyiRJkEMSoKTovwuqCBuMmzbGaK44ocMzXHxjBqFiDA2FN9ST2UfTCMGdpjhWPdJaTLhJJrx5m",
  "key3": "4xEgkDgzcGPoFw1xShiWJTS7ZzpB7cha4qWBhKrisPe2asbVtdYvdV2awzf9deDK3c8C9BGn8dNSnMTZNXznFVdo",
  "key4": "3jpXwgLt31ydaN1AgAsTbSxNjWYDKrMf9vW5xrX4qTvgh8M4gP3RvhtTN4VHS22QrmwedX2aML3Hpx2braeo3nYE",
  "key5": "ZQTuLT46zsBw7b2w36xw6RRvfAU3KyfNTPw1x5iayR8S4TkBWxhsKLsmBo9fRy6EaP55bKHK73qMWQEjuyE3wid",
  "key6": "4J21Vsat7STaAh5eo8aEGHSMbJ673R89j6hQbmajGmf5dbGTKiZ5cMc6JEpuDYJnnNbBDk5Qr4NQyQqMarAdPCGq",
  "key7": "2GWPkrc8r1sPoSAhZRyb3CexRpTAFQG88zQ7beYg39pxsfRAu931Z4DtMTXxM9WNVay6eudDWG29UBs9H4yLFmqJ",
  "key8": "3zYEZLZk9HuoipM1JAWctoUnbLYYLynKKANSyCLea4qYfRGptaCU6bLweJGoFLmKMeaWTVVRiUvUhpBpxJgrcocD",
  "key9": "3mxmGzkZSKGVdtaohuUMcwKznsMc3ja4H1gbjrEtfHLVbMaKTwnBNCSLsbHyYgjWYfviroYhxqDB4eaGuL4dLUM3",
  "key10": "3zCJM9HnZ7CMfHTfucqfrGZUirLuz52WGRaNS5nPkMEyjP5RDHP8ubtHsJTan91P5pfnZJcuBnJpB2sJ83DNU1pQ",
  "key11": "5PwM7bxe325o4Y9qqR3Q4ZbHc6dS63Njum8rESQ47aQKjfpkj8UFndzErSECqnGRopJgoxys9yDqALV2rssMxbV5",
  "key12": "477jksYQWTgygpN2YZpuMBC82Z5MWtSDtKByMw51eqRxm1UGXg2fhYR5B7WvrX96yJnKQENbnUb7GmzooJBJwzxa",
  "key13": "vzwjVvG2t6Ka1eqGBnS49uk2iZXcgb5vrintxv6fLq86jRRX5dDCJD76yhjw49seM2Q7YTMkD6LnJb31nLFAkVu",
  "key14": "33ggUcKfaKTgdNSbfEPjSdsEuzUfBZbvtpyf1rDZSmqvHDWUF5M7MvD3DET2UcdZ66Xrg58eashtimF6u8LMyLNv",
  "key15": "4cye7j9BLWR6zfG35govYgQTSJLCGq3yUpEg7e89ZaNR76WsmTSxs3yN6UDdifqDWfebYWidLDAbkm4G8VhdPRG5",
  "key16": "2JjJ7a58Z2ksejGEAYYL5mDaihVYDz584mwSaHasvrPk8aSnd5GLQbC4yF9FEbHawbD7NGBLcnC4CZcEfXqAaruc",
  "key17": "5e1N1jVzW42MJALvDq9Vkgmsxbyje7jgruT6CTz1XnUa2DpB4mjg5QKXTZNw8Ji9824EJ6yLNq9zXeEmbwjLtktT",
  "key18": "LUZ9rjQaYoHcTKAK3WVmVAj2Qf31mPx754hW5CuC9DBqJMyc9F6RYV98nvoSuRtTFeXQboLC74KMsq7ZWYpQJCE",
  "key19": "3Mk7PUxfrBWNufL1LdSrAufF5x6UivZHQkce5QukSsTnrgvHH6SGBUrcMdYg8ZLTbixnua6D37oXyUcWeDicj6LT",
  "key20": "58NxTtwNbDo2QktpPFYycAfq838CWkiMUw1wzAcmoVgyoUmjpoTYVz7hDjJ9joxYm4Tb9pFeyCfWLghAeiGNEiXN",
  "key21": "5HXKQMDw4JDs9uHAJAJj2YqeDngU7CGJfXsamfpb1YxK6GKKZX6JduKTDbG8abJrR3pWfKwK9fUP4QzAQ3P19SYc",
  "key22": "5dpzecPzswM5kBVdTNb9AZp7kM1b71Uq1AyaGq4qVxo93nFLCvJuRx4vKdxyUCnHkeHiinyQxPszsrBx8E8GnKMg",
  "key23": "47jRi5UgPECiMzqs7KorJ8x21Lpb4izBzF7YkpaXjXPBFvmoXL78c6Jp6uy9kmowHm4A8pnQfnEbTDR9PawdJJeC",
  "key24": "3naDvnbJUFPFPXctmmSFXDmnoYpeA9uFRrP1cy6XnBtP8otNeeDAvQWHYnfeRyaASHv1bgUPxHV8YBLmaQXUMMkH",
  "key25": "QFXCAHvqP4ifu4o252bV8wATi79AhSUMHjFmBSRG7m2XYKeRYaYphrZdYZYHNUDUSbotwHe5gfeZk11UwZry1Ur",
  "key26": "51XT1RqbhSmpA82TzU97WHmE6RScox1qsau8Qb4g3aC22ZztoyQ4mEMVgDU2vBSqXGeaxWyt11FbYTS7LbRNYWQN",
  "key27": "27Rt5ARGicTRd3SFWKAmXADKbTy775mzCMJMRDPFu693uD8uDpXHJzSVdsEsLRtQahXxy8JoZB8NoAmyvCGmSPFK",
  "key28": "2Lmx8yGKHvoWeAjPmqhsCaNSqLyeNmY8tXGHAY5gAFtz6SHusALkDepfQ34SJ4ipm9haum8fhSUcyYMCYAzjYKb7",
  "key29": "5Z1CxpSkGfhxchBTEN6HzszunGhfYABze7gd6D6f31w9pTNmxbcnmW4gQMqUw4BA7Ei1kTGAJw4oCwQkcq5g9658",
  "key30": "3g67PDxc2t4b794UAr9QexponsqDhi5bxAN6XDsg2KWwuvXm7AwVfU8DKa6eSBHqfsFPhTZJ4rV5w5MmuJR8vhqa",
  "key31": "HPgMfwUH5RahP6Pj1GqDJsBriWoKiYwvRXTHNs871CKJ1F8rM6qq1BL7tfxgu64kptr9qfoVa5x9zmoueMC9iSd",
  "key32": "4SJda35uVo23NCX3SYcfPGa22B9Pjuz1tgDQyj2AdUmY7ARHH7G4PsyRPUTrXixMkBv8FXoWtitr6K5LzcLffA36",
  "key33": "5zM5evvRBTGXQ7QNz627cr3CP5vPYweYWvT2uSAw6DBC6SMp7dGF7DGBT1wWyMh7fG2gtu3RiaxLFuhyrVi6R3Ne",
  "key34": "5SZzLpjGUD5baJsiNSUAm7Ga9B6Kpf1C2nQqTcU9eVSHXgxgUfH9TurAZpU1VA4AMbVpbtd4XbP3qdpXoR48f5gZ",
  "key35": "3Kpt8FCA6cJPdc3ifHkjixx4p3sfyMvYYUaAUZaaSMTH4UgcMi5NN2tbeCVpprggzSEXghqnoU3rjc5gZSaitfyA",
  "key36": "5HM6tyHrZzG3giA6th19tEFUJgwkSjsadPiEXPE7B38oKqkp9NqhpUsUT467Q3AvMdYkUmMEhNgP8adCPWZeopy5",
  "key37": "52MbieFXbu56wgiAqCtiAYwgirRMFamVQKQEx3wLoNeRRqgFd8WitBhQLLTMnMy1xbMuXcQkemBL4Ve9CectDirR",
  "key38": "5Hkfq6s3LUiXNV32Wb6bhaNsCTUY6uds6Zqk5rbQ69QdVvEY5ci5eRAXpvdhy4uPgFaZ9rkixcnVAKYYkaLfLyZs",
  "key39": "2BCw3gQYH1Dk2ZGySAE8WgZutiAYBA5vmEYbk7kEY6xKMhNSJDcXKUuM3aEEsJXtVduB2rnz8m9zzGQSNwxDvTfo",
  "key40": "5fDTXAWaoVwDrjM2ro27aPPM9P4B2pGRXJ6BY3GwZoNgQYhBEZyCJ1t7uzPuGkHmhnSXtt4BYQuiHhw24uX4Dd71",
  "key41": "4fzWXzekDFXmVb528sNpSEGf4DAhYWFSZHLXbDAgjg6nKPyaWxq5Ur6ub1MZkFP1WVB1mimF68DEM5DWXrqm9mc7",
  "key42": "FcG6z4YzwvfCTswQ6wTibZEApVEmrzUbgnHEm6cHC8h1QGFjvVNa3Jths3XVSG8qKtQzBJZcAghhog15Z7hspSw",
  "key43": "T2XToZEyjeku7rdUj4Za4LSbBevYcMVjEhHzvchg8zF2pfYZPKBqsuYHWhM94d6f3Tv5NC4XYsaZwKMEKnW5UDw",
  "key44": "51Xy1Bv25QR4mGtVrHdG2m6bNcey7EaBvdFgtST4rUVPRbV3aNqA6P3VpfnA6yQy44SP1HYJhLnRup5c5RU4htf3"
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
