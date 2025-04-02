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
    "2oGEjmWbQBXtTtz9zD1aE3JbD5a6DSekUEdtF2bC8NL1bz9pK7PE2Eh8x5gBu4kF5H7xnhhVUVabFTuLESrGTopk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gn5mxxumfPCJeb77MXDPNAjATY5Y1aWzPHtZ7wR7czsMKRtikVgeavnJscojGnWNEv314AP8Gy8jUiDRhGcwwAd",
  "key1": "3yKCU6yTHHqWPmeQhhs2fnagLU1NbqJrK1UK59HMpuHo2kGzf4gixUJm7nLAAVdWDSnt3epBpmU8zNqqa38AGJDr",
  "key2": "5L2a8WwAFtzw13SfDFYa1zfD8du56eiNpWKqPPJrFTVwPUBHncN8zqjQw3zMkwgRvPShMXTsBQooTqy83zxHnCQx",
  "key3": "3NeRo2rcgkMgXzYo9usVQRQQ798zcbFmZsf82ZgKK9fi64eH1SCsmLgB2Zf1H9xzroSCTVehUjDVPFMctukUc9gQ",
  "key4": "3q5eMPbKfYtw28dGVjMzeBVAL4cz2QgcbkPoAjUg5NqMmUQHF6FiFY4YQ5AeB7HVksSLbnFKezPZkdhB5pvfq4ig",
  "key5": "43KSWt9R78h38W8vy2qwm71ddxS84tVqmnfEqFsEpiPkHgrGSFmFNfG4pyw5h7NKayzpPpfWPwPqf5o6DedBC8q7",
  "key6": "4QsWL2t3jmWTCEGc6HrnJeH7ojCc2gUwHTAKbdSTvjFJGqALGYr8ee1564PhRUEY5nLPKVokpwqBubCBTkmuBUP8",
  "key7": "4mcFAue6gBEY67JKgGdicVSdyNA5xv16UQ1kc6yWzu7itgyUCYGw9V5pCopxWeahssGKYWrp1RLwbTArNBZV9Pr8",
  "key8": "5EKkWiLZ87e1a88B7CgXWddd6BCCL8Nz2dgY1as9vbwvHXFbu2zLhgKyPec6JQQeLMgUzyDwea1NmaC7R4WNZZkK",
  "key9": "2QuwNrTZULpLmSSt8DvcciUkU3KPLgLacHoyjZb9JVpLaGSvLGqAiNQVrmEECsg3aCDbuUeCfuvr6Ya5MP87g9b9",
  "key10": "yMPDd7r7xnLsyrRdwihWRgWR6NXJcKFJV3UNv7Ar9A67a8ekbxfvf339c2DbJEK9X9KMnNRWn76BgQwPNCECTG3",
  "key11": "2MYvH9CiDvNN7aTftappnay6bqdn17Hq1cNjRxDmd9hQQQzuwVe9C1wGQkxh2MzwzFyPS2a6a8yaTKCsJmn4cgdH",
  "key12": "2P3kLNf2nvEagZNVbqKURZqTxCeLKe7sLjY4oRFJQjsvFoTBsYJsLivYtZc5ihJxfgKGJ3paN9fGVEESXXuHQdvB",
  "key13": "3HaLoWJADXQzACnDbKButy6Cva2n4kXG5YtnLNhecrtyGVtYFWsTkQ4dHwuM24a3TNiz7hpUW6drmcKDAqggK8pg",
  "key14": "2U5w5p6HeHJsz3sRg4qSqZuFDKZYstRzi7BcH8xxBNYze2bZ1yJwvRSYD1FPwW6rED2zHVKdon1pjLKDijMS7gfD",
  "key15": "4DG9Riset2fAxKPswJnBdAbQZZLPuqSnUTSa3Y4Tr9xXT2g6C7xg6NyQHmGJQhaJFkAQT11fnysXJVzcg9y6bEsV",
  "key16": "AXGzt7ZWBQ9S6PvQq3NDkQBd2ozqg4JKrPXT3oGiSNqPXsUWVc2MwEyv818iBKeK2Gbe7jfFq67vXTnzV6phqe2",
  "key17": "RMJ5W8BWTCjScUTXCyqyGkLZLYHCdbnjRkMFrfHcGP9xECRAbzrvV7rF8vpaD7dXSHZbkngbwriq3871vP9tLpD",
  "key18": "4zwwz2XsMd7w185u7T2kCHPoKDdcq28JjFigZj6F3i5bsU5iapKC17pmCQFAv4vD4RgPiRgcv5BSAkQmWrpQGueg",
  "key19": "3oo4iHgDGLpvqrAsF2MNEuyh7mYrMLrc2sbWVgym2tVJRxS2wLEZSiQxwmk5xZMweAhch9duD9rtLHt5Pp4ewKhj",
  "key20": "5C5eyVriXzyvDCjtgA1gyNW4d7ZE3seyTQCtRjxWMPC8JVgiUCM6uxzsZ9AQHHyXfCuWKFc2w54Mw53iYZuEXEHK",
  "key21": "2Tgo1YiJriuEZDiZNJgeA7HF9HZEQZ5LBPpvVdzn5mcHpBZHW9pJAgRCxJ3sy9WHgqNnZ5C4B1SBzmGVoEdXPpGM",
  "key22": "4a9SkwnQHoySuGQmF6deXTmiPgjymCWLA9aToB46E95LjESDGmUeyoH35is2Q9WZKGZTE3jS9NLvCiNHoSJXJ5MH",
  "key23": "4EtVjaUrN3CCSmBwgh6wSezn4Z3Po78UpWS5RN9SAwP1pHQ8YDvvxdei7jios3zxjgJAasTF2ysvQZgiqcDLcvRy",
  "key24": "3ViNHPsxrDNp4hkMQ6rCuPg5SB1iSrvtKg25NDkuy49bgoQxaQPmUTZmnnHLRWdgfK17f8oKnzX7ALCNPo1CZkqW",
  "key25": "2GKADc4KGrKfBZ3aiVmXjZK4tiykF8F3hCDmVqe9sJWTdYfPjUTAiCnrrQCJSVM2a6p7r8HfVDj83KouaptCWwYE",
  "key26": "k91uNU6vmSAS3eAPj18RH8JUJXm4Kst7wSbmDp3U1KKcsY4hpVNJA4NBqvvCi7s2Nr9PqJm6emisLkirwFfxKFX",
  "key27": "3A8xQUtYFjJx5EL1mpQ6z2e2H9w11CPTX6j8dKJ87x4fcnGNDVN2yKZjLbKJbhTqdH89dy3oUrF1pCzcgnAPXa9U",
  "key28": "4MoFgbt6rHWoLo2sXdBB5hr88U2PvxokmPHjJAmVLiGWgXgTv1fcCa8M71acaYiwTtgsetAPkUmfbrmFDzPHFjDy",
  "key29": "3zuCaAfwACzNRTqjjhE9oxTfJNMeNMEhX4CRuSgxVQGNmVw6H373HRpn1LLigddpBnZCv3Sw8RW7f49gUCBVu1Gj",
  "key30": "29JaYuLNgUtg77dXgmfLWDZUsFVmWupkoQpPkxfPTbYX6PDwKXaQ2ZrtGRBkfxbBTijHZYouFgXzvrA7Wog6v6Lf",
  "key31": "5i7AgDqAA8ZNmCqgKzcxWXVBCZb1p3tk4WugXUYoCWsgwjLkuwwCfWu1vPx1KJvDutHUijD9urNhXMStGc3r4min",
  "key32": "3zmxmaAyZfLUCUjs9DNKacjudfeqerpuCHEQdX2URUqYtfM2JbWjRqj6LvNvT2XF7S3ZUpQztooB9Q83AdZNWyWu"
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
