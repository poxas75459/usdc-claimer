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
    "hTnE3STuUqTfzhuKpfu89Gwu9CVhz7NWr8R9ujyL895wZLgJbxWBMe5LcrCFqp11SuNCVULWnyTmCN981Ymquxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qDaVrLZy8on6owBVytAABSGXfFq5Xn4qz5gfVgwrFnazK3f6mSsp7nRczpwCdY54DzP3f438iAjTdSBU9nJx1kX",
  "key1": "459Q6AWmhV8qvCcMyvDd8FjRhKcMJCRmxzhZJPAj8Q9LSTWormUvDQ84Fj5Ynoym9EhYeXSihhwzAgkH1XHvEiJm",
  "key2": "38AnYFEbFkk9CWJV61fGKfAnFNpWRYhHUvtdzhJnhjzRPmdFs5FHQKxZmjQR9gj8dVKpaw6BubNiu4JofjbxzjeU",
  "key3": "41LCHrPvPyhZ1mMng2Uv1Nwn9dEvbbUnnViLK5Jw5eBt1bBeRpZosv44X4XKDnEY6foRfzeyqKr2XU1pHJz4Gtp",
  "key4": "4YeDgPq3LGQaV4vpv91hvu9dtb8t6tzE46kJj1fA4ZFhSm2RFKd33gZGdVSxXiWTxvrhwyy4nbu6xfMB6Bjm2La9",
  "key5": "3v98Y5cVNLWR5mn3DdD3EBm1RhLyP3TiEmhp6VwNsAQMNVeVhuBFFVFLRNWMZCs9nVDFTUqKaUkTXz5Z5o2pv7fk",
  "key6": "3QU2MWpoWRM2qpQX72hG3tdVyyopz8dJiPdxrFs9ewY1Pcwr35Vj4ycs1Tapsh8HEizAPv58htv2NC6Q4aTTU86W",
  "key7": "2twhSF1r8deikVHmujPrwFNKRHN25uv53NvwbU4jUDAJHdxRsUFEHHfv75m26Q86tmpmeLn5h6ijadN8Q1NYMBx6",
  "key8": "fvMqbDTBRwRBhgWhabRBoGQHbrVHBzgXxXcnHdyaZPSJHZ5UjmtVsR9auTLUMXx9uqnbJDGSyS1ukWoJHDrGkzZ",
  "key9": "3ZtJipjH9HACViCee2YaQ1aTDD18RABkFB8ZpcFWJ7qq14bSDB5taJhtq8C4Ycb6HNr1sUknZvukQuqUWpHbD6dX",
  "key10": "35FeH6mW4BdLNAx9x13HzRMAgL78wKs68pqaiSa9MWhD8QMXFgQWGkHyYQsCvaHxU6itBQBEnxzztLczCnpSKVyq",
  "key11": "ofD4AzHzdGJx17axog1rmcbiMiNkTEzmAT2DgVCJhxM2bUz3V5v6LAU6XuSv8RZihizqaVLiJmEsRU5AXVq6U8L",
  "key12": "NauPVDAGF3mHGbDfL9RxSuY9tvoDGUYAjq43WPLZuHofKbjypmwnk1dnRrt5hKEZk5cZT98Rx8hZAmxTBEQJNeC",
  "key13": "5gdEFxoUC26UNiGiHR9Twhu9maGQDvvohytEehsZoCen8wtBBvJCFzkGV9pqQBxfZTyWyP1LkZJ3ZgyRQk2JP54t",
  "key14": "5yFDPSyD3zBKAESPoPrx8oEyxfd63Wb4fJihvbYcUVghVGLzbfTGFPnFNcPMEdCGzUoP8128oPpH78EsjjPxKkKp",
  "key15": "zvhJXHa3WRqYrW5gB8UNi5h2DxETLZJSzALmDULAco6dyg7sutaTvqxFHGcHzVuYJhhDfbx4om5uSUcCVRgPUtb",
  "key16": "3wMhsoWev1YbNGUKuZvbQoYBP52UMxMBW25Qp8DYhfh7wL9xMM1ZE8t8vYJBC1xfbE3oBUgGxyVQxbbkxvtN9K1x",
  "key17": "4e8YocSe7MeHw2zcFH8Mx82fPBew9B2F6fV1asgPXNKGKWfkPua9EcGVy9TUmLxt3hWWm3wF7ygT53K1nz8kdnaF",
  "key18": "ZhA3Yku2keVwgmydJtjYpCn2Re7ym5PP9uJkcYSmg3euTCLMAfz6F1GZJY565jvHECHk9kRWEHhgNk5kgLt8YhR",
  "key19": "2b1YX6pwZLtZ9LiM8teTzbukh2z1ubapaCtQ6apKBcQwPFx4sFfj5E6WoEfGWBSV5A7UcaVSdzc6Y2fKzGtfwXy8",
  "key20": "KSY7yFyPACCFoqRdB8Z75TfLzvW3yt1Hz7mg99p1s2Mg1K9MzvLwdeGx6D1MmpGdmkTgVMvTU9hTtmUqDoqP5Xj",
  "key21": "3VAtgt5j1bjByQFF3SrLJ4ZbzT13yf7fFQT3qCT52xZcU7vA6R2iHqKoqvDJCzkBfsBHdj7Xhh6U2rTTtL8NFnuy",
  "key22": "rFKjKx2VBd8BzsML5yUmKBHVV97tB1U35nT6Wtf7dQ4jiP1S5swBi6aA98AXeQYV3tLfvyDDLfKUBe22XNrPZmJ",
  "key23": "2mnFPYpbAW22NjKCKqJ9sh6azKT5yAvHaHrEFUyDaH6hqmWEYBopcDai4yAPkoEYyC9Luf8T9VqtoXM5hFLQ5ejK",
  "key24": "2LzhE3tNkgTvpc23mL1rGcCmMVgXWE6G417THn8va6uRwm6DRTeTXP8W6XQRaz35G1pKeHqpQaFzYQznrjdEaeRH",
  "key25": "5sS4mtaAP1c3eeZw93gSyDNWwFDvpTU5pRVx6dFo49GBL5dqsH3xkr5GYrQynRdRL51SFKPNRMm1aqcRntfmirXx",
  "key26": "2tEHfiiaDpvTfa77B8c9oyDtSqCTo44nBuTrGjfq7P6sQWDpmV39Y2aNWkcvvDbsgMV1xWjaKMA7r6nTFE32Wkn7",
  "key27": "5fPwGzL3PYW7PCYEx2jtGyJv1x7oEKekUawJxfVzMaLdjhhm249Rb5f2xzW7mHuzokdxp9qwdauQqXEHUQ7fGBnw",
  "key28": "3JuxPAAjdGDDV8f7KNTkELTEyBrXkN1Dzd2zg46Bb5yUuecBFqazUT3K6Z9ZqJvk76a1K7f9vnhysutSUM4k6Vif",
  "key29": "5aEVpyNKmB8SX9VVMAMcDLiLMLHQDysXedjsmXNVQoa8qLcVVT8wEGC1gzEpY79sHxuRjvAx5W8e9YChzG9FKmCx",
  "key30": "4R2ZRZLFpuqPac2PsjSKFDkSVBhTTVjrDWNCk3SpjwjYeGXQ2XUbTTB5JkV5mCwpAieQKdc9j5hS2CT8Vk2ma88Z",
  "key31": "FVU9RAiQnz5M9Mc3LLXag7AAX83jJvFnGbww9tkFnKGVz16yfjHpvSUKJ6WDSHt7NuBqGSCEnPeASFDtA9zzb6E",
  "key32": "5dft5jRHKM6MD2qMfr5iu2E7AzaCpTFbYjuTau6CmTcJRuoyc5fRZUXvPGYDq8UAHyD3aWsvo7bbcJcNUYjCa169",
  "key33": "61LKHbsnRfzTVJot6Lb5u7GJKBVHiGmEageMg9UJ59Mrh9vjbpYby86CKMyVSzxB264Zrs2PeQYpcQxKU68yU49y",
  "key34": "2cJiAebeVcU7qbEapHoBoJn3PHNDiCheGzHurhVroxrscZHe63YSfBdaAeN7SNcuUMUSCEzBA5Hsv2Dsc3yLEEpx",
  "key35": "4Xg4kRt4wUknbF7VnKKFFX4A5xwfvP3WetEfenRfU5xE6vnjK8VAxgfT3ummbnQ8nCRCWkUzgcbXA9j2UamAB6a5",
  "key36": "3Cx28M8Du5DXDGXTpRxtu7Pd9jTKTFQXwhCtaTmXhoS2uXiFGu3scBqz4YSYwJ6ppK9An2Nte65pB3tzrKL3DS9b",
  "key37": "NMz36nr3K7saTLeBdXzatzFa8DYGk8mVrHb7p9bJ6uCKfsZGEbaL3oxeaBGBEbSAHqEUZrZcJfZbGuzsbfvmZSf",
  "key38": "5FWq3EiVnG99XJCwEwzEFBrpQC22rDji8RsWxEgCE9Zii6YfySFUNheA3CeMz6NNPrrBxaXmy5AFnAcCxa1DjUoZ",
  "key39": "5pt2y7EzEJ8tfdhzMp366BKW7KqhTx7QPainYurv1A6bNkBY77ZCCb7fRammgMr8zZ1C7kkagwJkTvkJ2RfvgsVk",
  "key40": "5Had58eUtyLC9QNFLniwjzb8i4Nf1vpBQwtgsJWH5Vk2cCcMVcvpvcpibkgEXTXFjEWPiHNYuHGFiL1MBNp53Bzj",
  "key41": "HsRBHqmRiwCA15ZA8Wcd14CWmxVB163qBoC9r8wedSn3WgWVhy4F69GdAr8jvgkoCeS6TY86j839QTM3dRr6jh2",
  "key42": "3qMpH8eQvvkeMqq9FexKxEA2YNd7G4qJ6bE6JCXrzcCE6TjHjwfzAEpgUcRRBG3LfVHNFPP1hAiLVe6Ck4tB3xZ2"
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
