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
    "5sEtWjmVQBMnL3swSFfFJ2yJkusD6wD71yzc3dnyHXfHkzXwjrRkZPeypJxvrhqHxD1FtBxE93z6LA2XyPhimUcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p828pU2jLtNcUoBnDzesQjrovS62LxKHtZfeDaGjK3rWHjY9nogTLWLamEPFCEtFT5i6g9j9hiAMWUPaNd4upmC",
  "key1": "62FhSqzjN7ZjxZheMPHcWTscy1JwuwPjUBmi1fxY6a4JRGZtchvS436yb3b4AMxLWuqzJYy8573s9A8Pa4hB57W7",
  "key2": "49YGQxmDGeqxurezLGeipH3Sm1e99WZ8YsAsEfmjfjMXr5myReMRwvSSfTQmVFFBCjf9XhZDTe9Q8sEmpiMBzrib",
  "key3": "4mF5M6ryhzVB5mte9J2vTsmnZXxcg8NL4VCofLws7DzR8GV3yEi6Ut5c32L5R3D9gvdw8Meq3fjYfJsSBDuicyXf",
  "key4": "3y9ZdesksfK6Dk2rrG5DnxKXXxFvJq8jJXdvBLZBCyMiZEQAKrumHE7iyHZgJQaTPY1pAVYjqyDoGHG7CmoqEJKj",
  "key5": "2QAWuEYnJFw2jTjnhMkUbTfAsZZjwFnG2cxjCnbjuWtFn1dPCfTk3azfm73TvR1MQ4KWjFQwVUZ522z1SfJhazM3",
  "key6": "4hSdSVKQrSsgUxBGLXbk5fFkV4NSZV6mPCt7TY5aoSJZp8DE3x8Yjr6as8gN9EUAcWDkZxuKk2fGZMw6LzLWSNFk",
  "key7": "vBhzUrVZ1QnDaHPdT7T7XKgKBztGnai2f8Ssoa6skzS2yDcPjvBD2haxzMm712fkqMMPKSRAWgpmDf6isdGHZKm",
  "key8": "26v6pAb5tsjBCGqTGj9QVL3C2bekQUyfL8ZPRdDSxXLGAtkQp4y1aZJF5re2y33wnw6YNhZspfNpHAQvm4DMqJRm",
  "key9": "4mFfpJDhT5BetLoPydbcVfbCRVd9MhfBb3TygJ9Hv8YXri2U8oR8zfVfukJ5VhWcJwuQSGtLPdEsV9YVy39dyHpP",
  "key10": "3m3qaDUkbGNod3KEZG1omNBMyAKqxvbMKLtWSKkq6ExaxoBSEaGe6Tk5tGMBpa6hMrLuD7Q2b99HWr7YgCmxSvoQ",
  "key11": "ZaPxax32KAHHCGYKWi33ng83aHZb2KE5aHjY59xT3q7wfhh9dC8BkTBXWC5cSg5bVG3v3Kv1yjD36N8Z7qNov8i",
  "key12": "3b5aPQyph4DV4JZwQMmx1oEtkoyte59yhrnR8DWh625yampioHwwi22faSoEJfNYApasf9sw9yF4MustJKAa5pay",
  "key13": "4nt2hjbxpheLHHHfHYmBTi1Xsx6nGicqkv5fWnvmftkCHRpu8VjFaz3pGfk9HbAdW1DbFSaNB3yHkdYviffPL2Eu",
  "key14": "55nDfp1vqPwrqQtQkVM4CkMnjciYELgTweEz3ZaQ2wD9fanGaZZR6U74ZQkrZmkgo1QPfnFJdxhTfqv6P3NgKMcN",
  "key15": "5crYbogQ3n7hWxb7aQSGbj9a9BEUMbYzTqwiA6HLkMp65aDY9JaVWa8KCvuvLiDBHm5dRZ8iuGzrSt7pD84qZjp1",
  "key16": "59gGGcTgibcig1yTYnZ8UDv2b1ScsR9tvUVnMvBLYc7g6uZNpsgC8jpokf2iBkeZt4dEkxqL4vZxKkL2xpnHeujw",
  "key17": "4TMoHmamkCJvcm3AMqCMfm45hZRmbmW3WiNA4Q56yPJ1LoaLmwvZjabEShSH24DTJRpbhUCqvJXCaJmhcKngsC1X",
  "key18": "5Q9DYoJrvapxf1vhYgmSVEXCPsDWNAiQfuXkS8eExynBpSs5pWHXhJ6anAV5vDdY1Z11QdDQiFBuKHKFDVdJYHoC",
  "key19": "3iaxxaCPK7tUCJQ8jvN2NvgmR8VomXiiVjY2QxxqT5bMfGsvQaK6J9efvoTH2Un9GC5kkGuFmLgtNHi8k3ACvrxj",
  "key20": "5RrGSXmtTBA4ti1s4imxZCnRkovAPcqdAc5LMwAJVShoJkL19Q4jjjPcyzbXjSNJfJfC8sFikLUCpA1qoMdzmGgr",
  "key21": "4Dt9UbBJaWXUNo5VuaRo1uR46fvJnSBYcrvgjBZjPTkqmYJPmjYifAfdawrcDT5joJVSPJTpnhpYwb3fNEKRBRB4",
  "key22": "MtgpEJpyqewx4ff5RB615XgwAjLAc5we6csxKDw5ibm6J2TXS5G1cDbSrnoABQcekPPiQrm2KH3i2qHbi4qcYpd",
  "key23": "2xZHoHySsdypMYfyC22WKLn7hxofbBjxngjL6bKwX9FBJ2tyzvbFTsaSpJidBYzLe9KqfZ2VLQaEA2KdMQDbW3JP",
  "key24": "27cbG7nXnheVAL5yTXEG1uJCW2TDEwkgmJ6qojdnVjiPEmFCy8j9HXCRyxvdq7XCEgQuNtU2K5BcZZ3fWynLcHCj",
  "key25": "3tVky7agHrSYp7YUYwFsnZjpQgDhggTHkbz6Us37F6Vs3BQ5QqjeFsaV9ToT8BcU9tAtdNCe4kvfAmqGMu4S5TUd",
  "key26": "3Q95mbvFZdy6CR9Rzf6QhY95SM3uv9Nww47XyAYYycoYdYpRiCVMCmGfkBYwjKqVVX9me5GAbYBgC85W5xcseMvC",
  "key27": "BYQgLKLQkBaFcyKEagr3bud5xN7qrnzSA5vCFA6zdmFPModDiUMtRcgWyeVwqipw2APjek5rkHaKMnUxTBiRmq2",
  "key28": "2jBWwCriqanJCKE6VnYC3iytHsPwvy4g3xza4tZ7xf2EHxghMejSH9MCA3bXtGsNrWE1c3ikQmgkYPnk48CAm2NS",
  "key29": "5zLXwGsxHJWGwRxHktKJPnMGNndzpRivBU4Yn5k6M6edGZ9Fov5fJrfymb8UShrC2pUGLJp4bvWWypk829ierEnM",
  "key30": "3ZvhFd68KDq3CwVNKbxseCrfsHLzrFjfEeAQZKApc11tBJcJ55EzRMjHemhtMybhZYCSGqw8Qe9YnZeW6b2yLPNL",
  "key31": "5UDbinyrXYM3yCkxW4tXY1hzspuKwNJyLShSf3cPzzeNB8fcr24gmoPNTmuD15XiQwU6efvirTdrKUvhgYNmvE1h",
  "key32": "P1qS6d89yhc5sfvjgq1jCTkZY8odfoxLbFW8GT8Qe62jqSmwhCzDrks2X7safq2kxp6cjBoFkjBHq2T6MJ44L77",
  "key33": "388AD8Mb11YHYnuuJ9U4DV2vpZeVvHSYcLqPtBJMpwpuN4upzD9PAEBeSQwuvVkny12GmTY7sgUWhJWaZoovGRkb",
  "key34": "3ngYjgeeLNVdKkryc6oJByppE29BYVycPoUaUsxbMTQ3DrYQ6Ubv4j7fxDqQrCJdsaajSK48XczMThDC4Wyw89nK",
  "key35": "3TCpD8vUmGptghdM68NuowuYBZAKwFXPP3ydtED3UwJxg5j3qyuQ6oTqfT9VpVJU14vcXPAmLB636D26Pn7WYNEn",
  "key36": "5qCHKUct1LrscSn72oB1E3cZTKfnTDtj5AikFsBzEMXiTUpDctARKTcGax1hjHfVXwJZwMfnD14vMWNEpzZtZPcS",
  "key37": "3JSqdqjpToWF8uSjLDNmseUDGEcdmzeTnry4JFcpx8UX5L1kGxFuxb3Ac8ZFtutLY1obfSHUNhiQiXQCeGCNXXF2",
  "key38": "4fMgwyJXkW86c8HE8QYaYMSHoo22sYv6unt4pUTxdYd9SUKo7tuoS16idVScxa55vMYCQvmxC2cW9MZKovCRUoBi",
  "key39": "hnhLKt2zQu5mqhFC2ig86mNmMijfdwvyfgvGcUusMMmDatCbNq5XGMV1BBLrgft1wNFqjNcXFvFfFY5nji96bj5",
  "key40": "3zQzeS5QX14y5vgkocX3h8w64j1XgwuahcmU5R4xEcmiCVVutFhMh1oTJXw77v8kbLhdTAizFpbHm24FGrQRif1h",
  "key41": "4zgProP4qVQthM5KWGFJujBd7k8L3195oxUYjztsRd2yQ8F6PBqhzoMvyxpp16e2v2rbi521F9BGtX76ovAZTn8q",
  "key42": "39d7guwbSoFvyNLzwC8X9B4BtoercW5R1cnzg8SAxPDrCDonmkMUiMd7WvhgZE7AYHiqC5BAbieLofcSzb55EpUe",
  "key43": "4Fp2yQ5q9LaeiaDuGG9NnukKcdUkXUBDxS134rQE1WR7W843SACphYuHrdYFc2HTEjck7cGNPXtaEmP9TSH5kwMM",
  "key44": "5CxctE44y9cboRnnPjdjuNhiuQKn1Vabsd5MPB9PDC1Wy7Yqh6xebQgMW2H1AtBttPrkusXxEybqj1ajbBGxZRNU",
  "key45": "43VZfghuebdUmzmtHmEMY6yj8kSFoCKDRPWA8xuTJ7EQJ5BscVpBpyPhhWdUrQ6iinA1EdUGiQq7sBJCVdUCbvMW",
  "key46": "2TSYLpT7aZAdYCQDQ7qZvuSCwQv9tnvtXBd2qPjq9z8VhsYA572rnXXnT7WyebJUnp5FLBrRHi7ZviMw79drp1Q9",
  "key47": "5VA6T2HK9Xaze4rRRxjLidjo7mrnh354h1sfor5XfkFfpXfrhWoCRvhNcWgteudFY7haUUFoMPCVyWUjrHhSm1zb",
  "key48": "36oxnyqx3CZGyJoDUed4FDcFwXSwMjeXAufEgeApJFmPsp72REk4jhuBDxyYoitU1ansQZdNKnut881cLRc8StXk"
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
