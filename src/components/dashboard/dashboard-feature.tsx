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
    "33UgCqw7zMvTLHKuik7y4oe647WtaP9DbQUf7MgVCyGswKqcGHXBCq8cX6L8zod4G6isSN5YK4trq7rHj9stdseo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45ebNpm33D21SigXfRGnPQZDzuKocqirz3Qdqk1af134Cv6rAbL9nqsn3AqKxkQM495niMDbojn8wrVMLHF7yv8w",
  "key1": "2ssbXr1HeohwK1ekRbqQpaDFMBQEh7y1R3ZEwrkFpn4ijpiTn27qsZ7NUu6DAo6Yppo63khnajQZ8uWTNDoYp4AC",
  "key2": "35UTYumQPSm5AY5eLQySXci4EnqdJ8PYTp8PGPPCDo3hNYRCCWkQY2z36xS88dQNyocVyQGpXjUD6fZETd6fjhv7",
  "key3": "2LbaCjVjEw33DMX5g6L3gZhavkj8fFuq5zprvBwWDhXpqmQqjztR6QRMfyw7vPT97jJw6NUitRZTWEGs6JejVYDq",
  "key4": "AR1UayBiViSjcHnRUD1CB9H4C2dPGmd8WYsqn3Zz3qaxW51cP3jsgBetqgTizGQQvzRVXeJon4EytmVE5bpemzw",
  "key5": "2wrf1iBwiq9N75aybAKQBfD1FXn9cubepfopTXMbFYJ4LYQECJAu4Wov639k1RJiPUqCpqb6Xb5Tc4zYqwYuoxve",
  "key6": "48kwVqNNcAXeWJVRxdGMYgodQxWYsJkxvcP6JfDAmFNXqHawHuGtNKBFaXJoF5TpeKJs8zSW5e7Y4f5Jy39Mdqh1",
  "key7": "65QqdRf78c2dqsziYzNZQi8qXGw6YMhnPqfteVFRzG347g5HQLkzBkqG7RFD67Xhj3aJ1kkuLB6Q5EuJVn2DpuHK",
  "key8": "2AAbuAfjS3CwiCQ3QstBN8y5cGTt6adNBviL5icEBgPtyhPsVuKo1RAC1PY3XZ1bZMuyGnHVLGaSWG3wnUBDuL5J",
  "key9": "61cLfyNWx7YgpqG425JizMGuDYVBvfHCRMcrVFYuNLZS6e9HKfPn9NTsxk2H4DHcFFgcG8LknMwRmKM9d8dQ6bMa",
  "key10": "2D5QXsSGrLUJYG2sR8T8oHiE58orgbwHxQuCpSdCgE465YWTuEYcKHz2GCFP1g6b2pxWQHDKiHqft2cuAXm1kGKK",
  "key11": "3xymV3yXDDc8x2MFCEz9FfugTCTxfFKed2nd5F2sZmoA8Dr3md6EkgBXA5WjnwerUzC7vEfU3vWWuiUiJNb1ExS7",
  "key12": "4wcc9s2izoaByPSBcozdwRRVwbHQ2ayqfjpmv7ujBgiRGB1LiBQge4sVSTFqVS1zZQ6dRKCpCTYeGH3CAkGDGXKQ",
  "key13": "4Uu5k4TZbMt2fVPWQFa5SBM3QaC7zxN6T4KzxoAxAjMS8UNQKtBLYe2tNBfRa4zfbw8M7WanWdQ1ZgKJjrJSTX1y",
  "key14": "3AApTJhcScr5xQnFFwu6m89UoCtGgjoMNgBV7SZpVbgbkQw1ozA2vg1hjJGkMyjawFiiquXYtSEcJLLDRj51qCGV",
  "key15": "4NX93Zgw1F1NqN3U8mrz27nC2E63GcQJC4UDbBNF2oQvGGV4Yia3mcPBxJAtnn5U2LBHPfQxpBSCBsQEX9fE9mKE",
  "key16": "5ZuZzoaywHoRwCGZwUxGoFeVZ2upXCv1zCmsKu1Zt2kBabmhRdhT1M7WizCkbBcVmUoQh3ArJENBVUctDEDfpAeS",
  "key17": "KwyAcaburJHoRP9Dq76JHisbKpCXDxLswm5ahGBmzyYPCmXH2dhDmGaxgQpFP8p5LajBmCpxZe1sg67yY43yxBM",
  "key18": "64wHzywVsNqc5yURzfSMgFcFq6EHFtbWio7CcgX2eeLvGKfBHRRD5PRib2dF342R9FVwjc3ht8mZJ2rjFyjbMnoR",
  "key19": "358EpN2WEuGHecqZ8thGBeR4dTRQjPVzRoeN2uJAWrLDVqtPwTGdZfR8a5C6KSYJSBeA3P9tnYVsSRUsUTQ2BdJW",
  "key20": "MDgUA948uA8SZ6LTKPRVSF6NRm3DDjDH24ikveB3UaguEenmZ4we56bmVZBZKoEEooTF2nLryrd2DmY8gvyqyCb",
  "key21": "fg3xo299bLdvxNeJkWwgiJr3VtzaejjsqcKsxbjqw5FgdvGoWkwCv4ghaA7cotnUiD2wzh3QxG7HLScMBQ6Xh5c",
  "key22": "3tRQUKFz7jWffrhbJFEhxvZxZP6K7SWASrLbQDek8SnunyCeqYH9R3xueyk2AHSYyaJgMhcPResMF8ihK9qTM2FJ",
  "key23": "5o43RuwHnpQjDhBP6ZTSYobF2P9CGSzCMJ8ZkAWixhRZVqGwZnuajX7UkdHHdpc3u452amB8FtRwAGQsveZj72aZ",
  "key24": "4D5sL86F8nmBLJfX3VgVHnXBuKfkQsgw9zqic7gef4WLpbuysTXZ2z77fSCqdEwTzgeTs6DKNNihgv5aAy6TgQhf",
  "key25": "HkKmGDSEKfJni6PiWyUSwnNebc7VuVNBQ5yd44jJ6NgKrKiAL9dP8kg8fMkAtbx95tWSojo7f14id4LW29JnxRq",
  "key26": "2qDPuJAucpz7afY4Gqs49JUSXLn1UPonKYDE72vbp2V2MzVhMJKg2vsbzv4xfqnaPmCgEZJDQqeUHhbmb8uUGcTU",
  "key27": "3TnqKzUEpWW17kPcYimmCMzhtwW3LfjitaSoVZ4bKENNwaJrVK19ZA4xRVMVLpi3NXVkuYgbWsP9yaEqS6KW9xgE",
  "key28": "bqVhkFxP7GdyLdhGe4xytgsaq5hBJTxzn2Ef3Bw2SHV8SwWymPeNcD8SjbMq5nGWKA1wG6aq75ErErzxoei5GWB",
  "key29": "5ZTtbr958ARouj8WK63hiWAcCwsPwBWyzkexymzxUksuXuspM16K7MP3ZssLyYDuskovNdBqCEHcX6T6ZXSFY2rn",
  "key30": "3bnboujexVWwFQQ977Drp5kSsFLXGCLMxUEKioJfkbXMTGbsNPcmPSzwqLb3eeW6jvcDMwTcQcLb46xSA1QNmcWq",
  "key31": "5pHTNN7FyEeWZ64BbauXmZztS53i7DmFHTpEaQoVZVZdSoV1to9d9UFosnDdbcgQve531xDBkhpWu3SNRmcXLsFz",
  "key32": "3UJE3F7Rtzx72hTb8KHhRAKNv9oJLkFoiq3SAXM26ZKSe8wKuHMR2CMUre1p3hYJE8Nx3J2NkC8K9xvtfP9pioJW",
  "key33": "39gRszSTCaXfQiKWrMnkZBdHyUxssagrNiNT6x7kjTuBSNbMxZv1NCMyL1TCpHNTeAQ2U2mG2iCmzHE8tngZuKX7",
  "key34": "3yrm8RSpiKFGLfupjU4LW1Ejasu5V1BCeoG1myxP4oumK51amuvZMorN1onobWNBoMtWSQtSMyUZ4XWJ5TY35KXY",
  "key35": "2kTLwwtVixcoJK6DhqtBVTz6NxS2XaA7K1iFmxbo3WePiwxjDW8U9BH4UrqFdzVRpJWEEtHKSy5aa9NCm8GHRVcz",
  "key36": "5ycV8Zb1ZsgghFt7n6u7MovCudN7EaATtcyjqNLy4rBNi7sCCQRB7Yx3j3G9fSTe4tmuZMDjgQVytDkcx3F6kcN2",
  "key37": "45fMfv6qPtLpJDqzYWjhrBSa18L2EN3a8BwbafjeQjYcaWv3EFm9wrRs7Gw5nsHwhQCy5wskLjDZp7aaksHxkFqk",
  "key38": "5x2pUHgPvtf1QRpBc44hPaoyYGHStNbUMo3zxx1Ms61xDSP866V7hFCX5at5XMRFZPM529hA6hUBDGYbQiTaEqZ5",
  "key39": "443ZFNwUZNxCuCkwWuht3M6yDarYjirmb18FrkpC7CKcMns15HcNCfzGp31UJm6r4Fn5ZeWKDav3YQMHpDdQUNoZ",
  "key40": "678ocscuUFxRVGNrF6W7aqdVnyXJ2oZZYXumBQNzRrm7psPea6KsCy7G3iosrbBxs1ZXTArxNpDkpRxrRHQSL1Uy"
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
