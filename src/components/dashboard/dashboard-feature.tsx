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
    "36BqP7rUY1NZ4FWeRnifdtz7uNtERLZmBtQzuaSDVNyNrRiJTZMkK559r7gS9bh9Jmxw1poYNazicRUzraVAJNsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uQ6njneDbfFdZBarBSBogTgFvrWpb9gatr5xifLYBsj8uKj3KpoqvobrD41z1KBQ1kbcyALrkaqLh4HYG3wLA4r",
  "key1": "4SL9qWbtZA3VeVETS4bLWqTUgzgVHkLZfmjkfWrJGfeSi32i7H6zQDazjpjycbqXDRAfWpN27bxpewJt7TrjiT9v",
  "key2": "4PKX86MDtwD5jdJQLo64JWPnUasSrNBkHfL4Du9NdA1vnHFra58aG6ddMG9FJaoHJCrQy7TRPMSZBdTHnQfP3UjH",
  "key3": "2PqjhonuQDv7swmd58RffoQHVCmUttQHfmtTV5X8aq5jQjN251DRi682i95zqBoRrw5h5iY1pL5QDg5TsDbDpH3",
  "key4": "5SA5MmZbqmMc8BkehsXsYBjQW5LvzDVVeV5rmgXXSmSiWAtwZnbH9HwBDrG6arPE99d7A6Z9eWoHKh957DxyBT6",
  "key5": "5zkqUMjwkzKax4jDTiw2z4SgM1666MmF5q3ueZje7cLMohf1u8bAXx6dzodJoZtFaNK9ZZDyhW2bSqtnGYWY3o2E",
  "key6": "3ZdEvkLQgSg9GdT3Aj8VaN5keE43cKHeaWCDkoRb4es2PNeswJ2zKhZBz8TGraRsaHdsSXDksYArwswfQGkik5Mq",
  "key7": "3uCh9D2b2Bu8e6LcKP2iiaGQaNzPCt5z4XiyURdAiHJnVkd7ue96Y8r7LaJdDyafyngtkN3ATMWBj8yUxd8noyGF",
  "key8": "62mor5sqe8ckP1QZsCKFpRFW8GuTQ9SPNeAXf8oreBgbEDzYXCuTcMbswyoLPf8uaqS6xqLyP4KSFoQDQRvRLEkC",
  "key9": "4tCytFCHKdABMXJnzRpRWnGGq8bn4W8MEwEDKPAWvRTkyMK6tbNbpVEk7Vv3cdM3ofJxhRCtpRSMhs8dhZocRbZS",
  "key10": "QhQnKJvPX6f2QUm3WjX3hoN6EdsQuZzKbAz62ib5nnMra9jiKog7MF37kQfjT3yab58Aqw95LahsUMsk3cZqDSc",
  "key11": "2eNoA8zVMQix2kXw9ZBAtCeR2Fv5tnbSoYbT4hNXKAqrPsAqnZLtrpdt7GXT8aXVCGCoiStKPChZhdw45WurnepD",
  "key12": "2TVQ2hDLrT1NkqeKGw6QQEr9aLoA5icxEUcfJo8Q72p9ZAmcNDEPztJ8RzpZNPEz7sSVTycq4gLUL2PoJCCZ4xd8",
  "key13": "2ow3rPPngSYSfScP8sTGK9qHJz5YXW7i91SMQJignLF5B3129Lmsb7iVyzy8YR71jK8f6zXH6xoQ4QPwJhbTrXZC",
  "key14": "2fD53tnWrCGPZG554zMAgxb4w2WkdcoUX8iLGTbSTvao82i5jWvFUkmv8sxQdZm6KY3VnDEPBZSjHN8SUwM2GkE8",
  "key15": "3NQNx41d5Yht7tYP7y9LKydx3tUTPdD5CQXwudF3eSMdnQeUdDHBtGPuhDXQANfjYusKsV1hDVEcj6DPWcATZoxp",
  "key16": "5VnWpVKWfV2bJkDRyLH3Epqa7BkJ3T7fHXxFRS2HY5XzEMuzn9uTe9hpiSVA4xrk2oNQMAbKMP8VvuCohdf8KZ9x",
  "key17": "5eGK15CensSfQbg85iB6ewNFH67FDccsDzZEAj9vg5DGaMYmEgqbbT53TUbzGAyhJta7DiWSjyAPz1AqLmApsqC2",
  "key18": "3huqcfKHmdfje6Nai8mD9Rtp3EFqSZA3NXzkPrP2xqnAez8fTgL72ibbvdH9DDe8h5WRQbpPRJQfASP2std1YhS4",
  "key19": "2JsTHHjRUUcQpxBdorkbQwbTYEhvgVfyLsCFKpHrTSHZ3TAu7aXrKkB46f9GujtCHtEmFX8zhPwUUHUB3JpxQNV4",
  "key20": "Swfky6XmbErp1DfJ2wTcq3QVA5zY7myLd9pGxt4efNfkQifSfhFnH1Eh7hG2QkiqNWNnYuYsZ4jxWSnS7Ct9ic1",
  "key21": "ytCZXBBxP8nNwmwx44AZGGCQKvQEBY1E8pdAuuMtQy7EbewJEucBL3UkbZ6TLsyg25QCoPx1ZRUrntfjKfxGrzQ",
  "key22": "5bwcBUbuzDu7wkkgZBFbUKSAu6p98mNjjVjGz7Z413fn3bRjgeqtSJJ9DUTYppbUS4gD3iFWraaMHU2pSMLfvP2i",
  "key23": "4c4T9JnGuJjutbp76Bhk2TJQ3WespG3uVCARHaKj7THMKWdAGp8hpcahQGrBXqd5EWzG7QZezsLDGexPPkaNA99w",
  "key24": "5QDjyPzNR84qgwtgLiSXwvnH2V7yjLGQWQRoc51K1QFpcW8RUmiqmeNUsZYa5Y7cz9CCuWmQorf4woXS6EdGaQYk",
  "key25": "3BnDyuw52kHJhgmDGpQQwzEMWFQDFH69LfDc214wUfshXBqS815rDZ4heZiffyG4cmDc4D5Z8Y3LpPu1d5fESA6p",
  "key26": "4jihA2ugrPpQa8h5FucWsXsM6dyDwNKbmHgxSqh19Suf3RQdmmBxQANmVRyhdPMngQL2ZCXJEMMxc15QVnZKuqx9",
  "key27": "2DFg6B2y2dATRWfHPPowdo8FDEw578nZgZX2ucxbmSa59B99Z6JU8NyeGHuw9mBLkrp4eBWR9aGVK9HS9SBgGw3Y",
  "key28": "2CpkMLN7GW65CgEwKSWwm9RvdVLnKbNGJujVK4CHV7zLArHxfF8HGeyi4Vshgs2vZkb7XYgEpgdP2xHQoKFqRXxM",
  "key29": "4MvwD2C7C3S18emFn69K5GZCbw5329ddHTBQYxWhfkppdoXnt2pYKUvDviV8oP7PxqvMJK8mUrfaS3mqfEmUJ3MV",
  "key30": "4a8UPND8Zh4d814DRprEH2xjJGcyoE4Yp3jDYNvmbv9ep6L7RVC3mpYiwGTaSjn1Y8bHqpDM9DF4UCKL4FEbLQeN",
  "key31": "8zaX68EVAHAqC5BYnLtpNG6TWzzeDtVzAH6tyTnfpWztyNEuMYA652MUjwe88GQLiDkvwrU6GitsmahJy42Hq6w",
  "key32": "2k6du3gT4HptLxg97vZW7g5VUyNjTPRxi6b6Da4dCqQt3pV5avM8zHebwomtGaF5BtMDmACub4V9su3HUuno2Xue",
  "key33": "4AdKUhr2gXTXCH17pmcfGEtQoPybaFpL2NqqSWFnUQvWs7nEdRNKT2wqDKvBJQmSSsCNqaMxiX55uG2EfWpgGVRi",
  "key34": "2NV6MJbVxHv9vq1BBne1dwzRWKPnMJkNA4HggNXEBo27D67MKnjA9iNRSWSy6Kp7gckQsU6eUJX22es4iSknQB3Y",
  "key35": "2PCgxm4gn4yjJkMYY2wLpEb44HuW5PrGAYTPzq1iEBZhiuGrNL1cqucB7Hc3FPSDoe2Wdaw9rvmFyJ3BXMfTeAaY",
  "key36": "Q4tfKc6WXpYNY3P49G6hJjpVC7wsNYUM34niirg3X6jF8jzcQAPBrph6yAxsNcqhbw6edXDp6SuDkpCGLaribNv",
  "key37": "ZJsowEhZqy2RgRR1BTVTRdsQDwX5knVWj2gUnpL2J4tQXV6ote1SKzHNczgLWVz6thgKmBjfLLDGfCgWdDgj1aC",
  "key38": "3WnKRx5yR1geDrm8yQRTNBSJpUeGuChytZLr7CZCRZm8WxofRq6mQEN3VApffBcmrLvaxvQaax4WLGsmeuCQM26T",
  "key39": "GkBYVWoNMbZ7m571JKyvzY8FKcfQ3dB6RoVpJuGySseCXVEVmTtFWBTF2Z78QYKRmASG2QL48VyqzpjMqJiJDV9",
  "key40": "5hp6JKU7ticmWnaqPiwPKYKN21Tk8wywUoFSHqwoP63U7WkHqG1bzn1rmQ1pCyHTYgZJFkpGkQhrW7GCtA2m8xzo",
  "key41": "3bzBK5iXjjDGVTHZNns8jV5brds2TRBvojsygKiBidxA4KAavAA4nzWUMv2CivgmS7poL88XwXQpbuLkY42KTpt9"
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
