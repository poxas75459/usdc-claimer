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
    "zeJ7WMnaYPYKEBk7yqZkX1tN1cjU6vcTWhZuKcmUebSo9QfmjQTKRWpPKxW3yBZEv713aPEDP5LGXWJ3AkLK9bZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S6xEtSmRR9kATHYbHZUTJs73gTGMDSLA5k4nyhdp9R3v4WZYvV1szkqYudbpmb1vXBYfmf8GYZufWaqWuKu1LnC",
  "key1": "5b9H6HPyCH74tF4teagKUWuUDbuqqCy1a68A3ZZfPJxmAZSVNpBvaqxkvgc1KRGfmwUkT6UczpMbvTQtgnFaUErb",
  "key2": "418FQi3nxeUKUH9cdXc4Gws5a4Xn258B8V9WzyHzCBuJPkz71Wvftips8fNzPmsfhE1cMshcsc8bYYcibaHT24CK",
  "key3": "4j3nKJ8ynGnRrQfmMa8Bns2xM1hPA7iYxM1Xj3C1WAmFZHoGVwVyY9GihjrLAo7C8axLFgM47qPLevmxQZ2D8Cbb",
  "key4": "4FBp6kW674xji7iprztzzag7TjSxJBDQQebbJ9wbmMMvm3m3QWzsNRkFCWyCgVb1F4rhCGn8UKzmCkDVroH3ozob",
  "key5": "5R1sJ9e3geFbyDTXJmcNXt4UqxfEEAmc31NpmPQKondBvrcvDJKS4PkgnLFnjAWMHwf7kzpp8VyGJtooNqpqK4uT",
  "key6": "C4a82xqDvjXDDoooNvYnWUGxMCLZwbmRazXqkh5r4bdgZZE5opV3ancjQ36sb5drvEmdGPEoHwg9TBktciqA7e7",
  "key7": "4gBRpeTBkMMB8W9WaxmMTfPewPqHfgtUDZRQGKNfPt7eWcvKs9uHY6jSWL2QDs8pVg9Ny4HFUYtoZqzzdTkducbp",
  "key8": "3tDdKzSwYPZRkEGgpk1thSw4mW66Zx46tVEEqYKcZT7ziSwFer9bk151Co7NZasc2t1iHARuPaYXGmHMMpJdHea4",
  "key9": "5Jpeaemt6F9JSRi9EAgr9rHfWZz4TsvPjBdWpuN8M5gx3LSVgDcvfgKKStnNnmsPXGa4rKts62saMtwuRXGKahiB",
  "key10": "5nEefExY95i7EfwJ731cs9PF77cQXnbE9LBcZfwaGFWN8NiDiyK1Pt5fMQryRoWd1MASCjhP8TaC6mi1nSRSdgA9",
  "key11": "538zzV87iCDYVw9SRVKJNZCVhbWt3vfirYQyHAV3RHBGaDCyz7Xpu8gd8kA138EKbEHeHHBLyoHt4JyYvDpDSQZT",
  "key12": "2CeUvykUSDmxaNrcAzfSEJnJnaZBfzUVpxJS5oz5GZiCuR3upq7exd7fKRDByFS9hDk7prNvT6Rj9jFoS3oePkf1",
  "key13": "5kXtPnqYZQavpgJsGaf72PQ2oBSXVmY7ST9jaj7GbKyAcZ4NLDru2bA4ciWBn7FWMs2RHgGygcNGzB4NAudYZ38R",
  "key14": "3qjtkmina92t44rhh4gC4U5FM7wkMJexRPfbcdwtzq8C4QNtSut73RoaH6BNkwEjWqZL7GxtbFrbDaRkCLXhRh4t",
  "key15": "2hXerLKS8XyPFVj7HuF5Q9B4EUrEwJLHpWXNAeyAFH39WebTc9EC8MFUXnTE7V9SuVmRmqfK3hJwvcrMsU3ahWv5",
  "key16": "3tg66xFEBYQVUSxXhdZxSurjdeDjfpAAZGPrCFWdwfzVaUiKE5w4inbJK3DNt19hQ9SqcohzSw1DdbKRAbBvhNEH",
  "key17": "5BguqaTxsJe7GXW6g3JEsefkWqGJLrBVEFMPDFDDodRjRfaUgSm6ap6FuRs2KYQVJypK2FFN4oeJnGrNsak1fDNP",
  "key18": "5Lm2vhe6K396VJEwdkN82m8i9yv1dDg2oecw1YHFPDRwim1eGAL6DQJLw9qQSEvpMdmR7SLSMQxbW7os8TFGrMUQ",
  "key19": "5BLaxzwiGJgZy4YmoBKMV9baskoKFJjt77rdmXc1iuboF9sF1KsH7p2kdhEdCeV6jcaBrtruqg8ueyqZNaqwgn7T",
  "key20": "3StuWvvD3Hgw5GQTqM2jpdGfLSPfUhSywMRky1b2rkgwA2wPF3qfeJUBbrhLGngjVqBdYq7Zs5iydFEPAsigqnS6",
  "key21": "2K2CoNXjtjJqucNJeBuSUduZv1eqrBbpNDyaSfxzKPeibWA7qsAm4g5VSZ2eCSHousYHZWbwPRiyrdJvbSUyY5D9",
  "key22": "45Y4jiW1YLEaWi7DkqjqCRRfkWXWiFSRW9EUSQinfHtJ3PZApjuL5b9LtYh4sAhsQkFu9xV2g5z3Wq1pGoQsCJTY",
  "key23": "2aoGqSnvjZKxn1jPTyw891MX2Heak7fMx4NFjtjn8GADER6E2qCxFryicKGmmPYFCDXCtzZyKZPyWKwLfTeMVHUJ",
  "key24": "HC3fmZWwXAvzU8MfnTJeDNo3N725eA9qR7GXGCfbSdWZGgNWPKaW2gkHLkSZ3dQq7V6dAXyCMTBhSR6Khg1GcXE",
  "key25": "B8CBWTJm8baTiivUwRcgcSMS4oBKpwxXsLRStSm8SD6Njzz239zGTVnJw4yZY3szT8rFq2VuGJbLMBWeyw8KnP5",
  "key26": "4dYFM2euZGJCk9mS2xXvUkWcmrCZ9Z4XCEjrmFbL6izkYeymaiR5dXNF5JaRLAG8zCAo2ahmSWR9WuDSo8qfESP5",
  "key27": "2U7ZQ74PwbQjm1kZ1MPrnD58fke8yEdYMEFYJg4qeauo4bvsgBSpU2Pokgd9YKLNfssYbuXYeqFUZXfrhAwrRjSG",
  "key28": "gQqMiKSemQQWz5gBPwt9M7cJnmQCA9oNXoHMxR5Zy9D1YTdiiayd111GPPvXcPUpQgB8jnE54c5r2FGxghbpd8v",
  "key29": "WC5FGeGXgAz9oXDS31J1YTLNWJPf3SJEPKTLkUsfRPPydP6paG9kADvkj6Pn9W3vy7T8k7Hrn9ANpmxcG2ZU6qR",
  "key30": "2FYmyJvptLxP48LW8D51JCTQCxY4w5Ft1JiYxzPV22ohFR2fgmBZ8AjAXr9JrhyE9Qi8rXj45VStnMwucjMitBeD",
  "key31": "UQpRFyuUPSrJ5UFKgST92oYVtuUGLjWVtFyg7Rebg87u22rw1LfyejxpmcKsFfWAV8vgky4M9eD44Yg31a7iUVq",
  "key32": "3W4fc8CoHHbMqZcz1VE1UcL334mYBn18yE1XZnyKFGw53kjsS19aay7LnbHetXjZuNdfAowX5Ve7CRikY376h5or",
  "key33": "2SHFxTeLkGY5KD6kEYLYXE3iFi3BZmZLCPhDqt4EDeR8nPjj8fzArpCnKhLWsKhHgiKwgx5GujmdAiftuiAtKKoD",
  "key34": "2CLfifS4izEGcHgWGc14wDwELugSsry5vtsyM6N13J2yCN4pu4hYvrU4xdhowpmXvWQLdbxtfPiFamHzctag3xx",
  "key35": "5Czp9zdgCvc77jzyt4Kvd7gRhu3c9PDZ4V54vf3rm9YwaohMCgPN7dMV7m6UrohYZJPuikFBTGxGJJpFeWyyLDbJ",
  "key36": "ajgzmC84y256tRnfJMc8aBjkcYuYtXMBk4aZQqB4CyBdXN7p2CJ4HghdomMGvaGYonrBABNibobP1UT6i7swPQ5",
  "key37": "5tHurN6KTbJWGY7ea3US93i1Ge74WzJJbtcsM5pY4wwdYuoW5fy9ztsBPyVaPQFXAfbsMiVNCeS1N4n2BZ1Ubh35",
  "key38": "H5G3rZG2N3EyotUp4Jn1BfUQLL98BZUU6hPw5jco2DD86nmwQ9UuX9iVBuBis2c36txkrXx6q7MF9SWAniDMhry",
  "key39": "54XizX5AR4rmNHVd8uhde6tUej9Wv3KTx82SAhFV3MfvQG5TzmbNDENgGxzjarPrRDYxjppBXo2RoTDddqmtV9AU",
  "key40": "xmbpWLmNx5ioSEjaUaqbLomb8SAXb3exeK9QyeuX6ZYnRocRuuB5ZJxz62nKr7sh748NhqaMCUVnGJ5iPRfw9j6"
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
