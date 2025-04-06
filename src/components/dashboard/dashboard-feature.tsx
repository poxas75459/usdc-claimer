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
    "5ekpFva8CdzfbvhuNvetG3z53zCFPMNcGngMpJoPrPZwD93sndiUQ9T3Hbu5FmHg8nS5pCcqdndAmgb4TQmhbPgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5otDJnPDNSYjUB1dMqjzXbFaRZ3D5vvyi6j1PncMbEeVpeC24aPPPreX8EAAfCas7Aq3iWCm4MPigFSzKMfJ72mn",
  "key1": "2y6N78W1YCSZQezbHRC11fmGr3Egsx2YLMbBWccfw1gytGsKnsSjen1J41VrHEitTMQpgz1dAekodEA2adCeudPk",
  "key2": "5KrGregHVB11QvAZbsNpuqY3h5EmNPe8dfrbj2e9VmTHGNLduxDRKbPtidtcaHuT8UMKF6YraPASkLYPNTWKDFRY",
  "key3": "56PKZwqFZM8qQEGcqaiTCeqTUSYhTAaoWcY9M413zvafE2ckwVBcoV4V7LEH5dwcujBtZrFRCmd8JM2bACD9cdvw",
  "key4": "4VcZoHCC5FirzxRj8QqLw3SmmbowbgtePCoUF2Fc78Cdf32ro4asVaw2F66wuzFgv9AA3kXvUpTRGVSR6mH2B2MH",
  "key5": "x8HaabujRdnsuX5y9rpnoaw9BGTuNenQaXN52QyE8oWr3Bw4ZhsSQC25TEEiiis11PDKiGfQW832wLRioCfzcSz",
  "key6": "37YqHdM2dECtcxh9G7mqAtAB5svfLPwW9jNqEffoysz1YGpCJqz85hrf242USguE6V48FwrfgkucepF9FT1ijmBU",
  "key7": "22Y7N8PutkqkH1QXfQdQMryV5cEXYw3pH2UHqqsGqt1eQwfeyfxWwJuKGFKUFwfPzXqYQr3JAM9TfuJp4eJ5HhHk",
  "key8": "2heVmVcW3nicaYyb1SuQg6nCQ8kejgvenE9ofSymvHGtmJHLUDPHFxqP3tjWvyYTz3NWHsZZPLBTYW8gtEPW6C89",
  "key9": "2Gk4bj1kUiTvsyuJXytZLLRc5bFvPj6UJjZpffueKcuM1m8zs3p8B1eMP4gXizjpj3KPQtM2DRd7miUuj5VmuGhm",
  "key10": "4QKPFUsPM5qeJd4ZaDZfC929CpFrpEcPGy7vzqNvTdJf4GoBbtLAenskt92rGBtUFp8mvns1EgcfNHof5xLZyHGu",
  "key11": "3tE5KkXaapwSVG566ujhyheoCX8jK68RQkqchc5DSM8MaMwXYCEb7v1sMfPMqKR1nR6Bw9YiZVtABMQvbnXFfE9U",
  "key12": "3vf4fhT7hyu1buhv7P8PoiFWg98XWrjAnerYuFYBzVSBk2zKid4LssxxqZ9HPzG6M3Dx6UbNzHpFVgV2yZgD9qbS",
  "key13": "4JkduDCfTo8sEfJfZqq5pD9acLhMjFoYqcWLAog7Zi5WQQJKJoN6AGvJpBoQ9wsEdekMWhusiLE8gepJ2XGLV2YP",
  "key14": "4Bf6LyxF7QVZVg71S889bgCXA9iWPoGD1EL7emREnFSwdY6d4T3ri6hgjVouQkyWn3RoXvvSaBjtmD5C5DbnHmky",
  "key15": "4Ta1HVDDuyG3rYHj8kUFSvP8hxdoeWh1n3XCBmgBn79G3QoHa8RATVec8YWzQUmFnDQJY3hYWuusFbH74qJLgvNk",
  "key16": "2nkqAV7fqfPYpdGJYoHxX1B1jx8knHcLHtw3xed5kcvdFFhh2mXpJuBswxznmzTy52jKrMxQk7oCXNH7fXeGPCLQ",
  "key17": "4XSU99WPM3e3P9XvG8u2N5KHhicM6rdggJAHMkPvTmuW8TS9k3mXn54z75BpEfyZMKRR59G6gbFyQcNTqXnSonnK",
  "key18": "2zp8jHBMt6p9UBiEut2ttNvsMJAcHs5qBbT9RmJwu44C7mAiGe5jGv2VfdRCB1nAtboizFTxJ2iRrmSTD9jomH5L",
  "key19": "3hmMBm3417Qmszob6bSdyDgPCrwNjuoq5b3ZAPzAQZRox565UsVJAFNFwj2X7uvjkJJ7xuczZQhF5XQcY4kY8pUD",
  "key20": "7LjG1Qi4eMZ9itZBBJ17aWLUpkF3fozWaMTbv3qkCXoJbzHkVHmoeHHK8m1GLM6jkYd3aSG2D3V8hhoaS3QC9Zj",
  "key21": "57cJ6iEyZL1rdep37aBCpMUS1fUx4upZiHG6btTDruVpy7QygHDAb2MJHdCVqwMjuT5MEvABrcxa4zWfXaiYieEN",
  "key22": "5LLcZZKfy5Hwb56ucRMGhzMSFEwbanvUrMjFPjzRTMHjeqhDczye7iAvgWWVBWNccXoQBS7Gk5ukiggWKk2WUBEz",
  "key23": "3qrvDXWjZaWqhAHoj7eW1NVRCGmY9UxAgNBfu9frWpLMa67pCaggskEv5AGrkEkp5qv1iCjfEyaGdEhznUPVFRDc",
  "key24": "pEqZErMFoZNEmabQzr9qLajd4pVxo1G8FVJaL2VX6X3nZg8i6hHn9Cdpg5cfaupWJG2i6H77BpvMB3921crKmsc",
  "key25": "3BybLCKAmt8RpUjNBFLSTSuPvb8aJKdpMyiHn1D7srnS6Ao1yyyvHQhs5wtZHgs1KXTBZJNxXzdB1xgPfhuBTh7",
  "key26": "5YCk4B7u1b3rGWToHxzovTKcCgcZUTmFh7MqGNSzNJQqWfkYgGpG5MqxfwAJ3BC1F2pS5qGSwxE91cyKgSRFRrj5",
  "key27": "25kNFCjaZXTsKgbcsPugZjUQRoJ6dTnymEoCGK9n415cyzjEYdsTaePjTRDmkaHgwiySZZab3ENFZvoBgBfnSKSk",
  "key28": "5ZX3P3MBeFdwQsYcUEF7NBq2aLRaqcbvVxLjaAqJ1PXyinw5jwWr44CrWZJNisFYazVdcaKjUWe48mpjs1VXPGwC",
  "key29": "4WuLYQDC58PoxjUVJg7u3xHNDWbmex8EBVcUhZfZq5GQVegpTSjgJXQ2hPe56CtzSEmfgzuRX6Ra1hN5T3JVkm3Q",
  "key30": "3aBvYeizRAGA5gG4eJtYMw91kTUqHvEWQMo4Ny9u3q8jaovQGMEHj6EVR8UixbUo39SDKyHJk1SDsLAsEm8ixVSa",
  "key31": "3p6SNDWysK2BKwa4hDLHKMtyz67ChVR4JeJpnZQEtz9ZAcH924h8GNgTC57LTvNpTVDb9x5xUBCU7WwSrrXV5TuU",
  "key32": "zYGbFYApkrMq7QCnsyphVsJj5nxhBaZThUh4jSVmW4nZxk3FBZaZm3eE2EYb8KHx8TiYu55GjSa2toqNLEVG9kz",
  "key33": "3ewwwKegM7pe3UTzsykAjMpVV95V7MJp5yD9Fo6yKGTBcQdEsSQKrmgx4kv69iXNX7desd5nnGTgxwzi2PZ92kmN",
  "key34": "25AFTd6zw2nG3BVrak11ugzCHWSkRc1bwF4SqnDSNzM3GapC2whwk2PYG3tEtJC6MHoHpoqSxoGbzp4yJAaDV9VQ",
  "key35": "3kLSE6KSiWYut592JiHK86F5QbfdU1Jw7f2w5ST7Fd11pXpmpLJAZxwZ4MxXadXzB6zZJVo1avRnsyERcDmbf8rd",
  "key36": "2ZWaGDqZWN7P5X68sqKiMui8qekvxz4EbruUuFgKyPpMe9oC7tyPpT1i9GLfFfdw7UkdDrfmS6Qba7Z1oZkRTwRg",
  "key37": "4A6cREix8acLuteaD2UvDXzULk8LzdNA6yenPu4xix4kpnGCrVhbucLtoaPkCHSpSwwHHiZdVSftePnTJNYtPopH",
  "key38": "3bo4JCbyFkTaRYUAi1odkjS8pvqv5N8RuAnSuv4vFASmo6657cNi9mMKQHZ8CjeHZRxhmLGsDTtvMzvXBso6NdLR",
  "key39": "667AZUsgz5KrkRfrQMDjxS6K2zqRrha9wzV25Czuw1N4vxNymk93Rv1riq4C4ZaoG58Gf26M1z5Jp5ThMeJNBQAG",
  "key40": "4Dig16yk2iUENBwLwfyRppdcAkBHK7wdbDptKv9dH5wVJ6iuUTi5RNfy3Uxp2DvJPiNoJQh5yqK3L71cyBuRh7ar",
  "key41": "4pqaJoDNAgE2RLuH6y4rYucN3UeAANY1GWD18CGRg16XbvAVsPvvSdk3WDK6zgqX2ScU94nnUYHVbSVDjWT6W8LQ",
  "key42": "U5RGckUbSSfbmEDUJQg7GhBoJJnMHcB4zveJCnwYcADDoXiGr1dum7gk5UWLeJfFTTKbC8d2gTRocNvzx5M14n4",
  "key43": "61XjpnQzo36Db2khxmFfyssw5TcDVTC5Z72RXNucaQzjsY7x6RKnFPbb4frNFDabj91SHvnYJtQqrpgo2PHxW8UH",
  "key44": "266WmNqoc8fvxBYcxGsKMGY7ftFpMpUYjr4HWkLYdJe9GAkHb5yFVfWf76EUzDp7GZTj538Yh7bchY4Rr4dCRBUc",
  "key45": "5VQmfMuvmrfRghLJ9QFcS4Ksabaei7RmuFNHiStxqEBPkTuKJvURb9EBJ4qwdKFagYpBgTDhctMUuiFzV8W3xzZy",
  "key46": "3mUP2A9NMh44gWEPUihwKNYPnH83R4QMBymdFxrvmFC5N6mkiwr9akN5HrY5a4tWYyGscccyC1qdd97nLhaUHout",
  "key47": "Zx5LMyfiXMtPnZStircHcnRfw5zkKmNhbMytzkYTYDSeP1qTCEkMhx6emfEyrTBAgfkdBaNjMKbeEaS8NapvDpx",
  "key48": "2VTqG2qR5CzSvKSrnhc1rLsKgWT74j6muPtoJQ7Ty9UgHQYh4W13UmNcCSYbV1CDSV7pLMPdncNVv6HPBJhYbseD",
  "key49": "5t2tXtMiJ1qnRcqMN1vkWV1x4Pf82ouWhxDh8eyxZ29Tf9YhS5gMvwuFWv3jSkitpsDEep7r5CTX1z7YbBSJzVUJ"
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
