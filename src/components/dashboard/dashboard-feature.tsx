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
    "2tB4JM19bDqXA35rP5VuD5vd1Nj222cGFU2oaGHBmPkqwS1xr8VWpqnEsACqVU6QVT36c7v36zT2Yv1ASR5P4q2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BexjioA4kCxtjC9MYAfD8izQ1Rn3fhDCa9LCdMwWt97nZ6B16Aw1hgNJ8z2o2MBobC26jJPhp1wkMzyXpUpqu9H",
  "key1": "3dwxYL2w6DFuEghjJj8zQABXW5sEhjvsqLNj1muqkiDbAoFATESGqbJ6LWcd23xiLQBtNJMAE19TLRZB18Df35aB",
  "key2": "5gLdCbEGeQQu1pcpcWY41kmwFwwyzLR1h98h4wdKRmiZFoXkde48SyxRrfQWKcMSDEdECu8PZzu6AAW9T17HpHyD",
  "key3": "GHmzeFiALXAYKFCwifVxuttige1C5X5AnCrx3U7F61WihUoLH73cW8kzWqFKPXdpa9kVeivqgqPXeCbYSMiZ4w7",
  "key4": "D71buwWQt7mSAufFZX7aigm9SoDjRYtxBKfyPaUiKsitSvfuXmx7xB3kyE3LM1KEvmeqcPTQUCPWR2LTgY1orYk",
  "key5": "2fR16ag3926Yjocs2jLrwNYSfqcRGQcnbjnCqp4NqoCU4YBk4CQNeD5ZKpGTKqqpyHCTK7LnGwhKtwk5H6w46No8",
  "key6": "2sNt278uRgG3ssEAYZQzPNizHvkZjzYD6jRa3uuRW8LasLatRZUwPFcbJUjYNfqs73dHfJWVUGKHxHMtHBmYFK3y",
  "key7": "41zdjsMQeKLGt4hRUVe39Tqqr57YDKYKaBQK3uGnA3MMX7BCSpXs13Hzw34QVmAA1Rsd1NNoY8yRGYDZWBJPiAPu",
  "key8": "4LUBnaGgyNFuuEcKvd3Q9498z41yHKeKwUapG2h1CPEPzEMdkupjug3uJWWJWpqUk3MeGX2bNveZ7fciCJ9CyDTu",
  "key9": "65Yn7opUssyqJiBgDGWbCJjcf3whqLxo6xC4JW4TeHTGnf4tmFJyQBhrCjbKQurQBMTcux85Qi5kgfJWeNSK8odg",
  "key10": "4NhCukJwHnZ7yzbfjq8MnSxwQ8jFiYnxNabZMaiw9vjdVDVW2dk25zEziaPHkEVfpF8yaDazvnmTpRXkV2DswzgE",
  "key11": "2F9zsNvtfjwRrQGeT1UK9VHEmKftauj1iz1sz3Eq6i5CtHXYtvFwhHxEPD4e3hxhiu865L1Q4RTFudQBpXeeVeQE",
  "key12": "gJ6hX4nMNQoP1pg2Du3CKAKhTXNg1pCrkgJ6jiF7DxPPABepMBfApJL537xsMaXgcPiawNhRyMmESY5sdytrM8X",
  "key13": "2G8y9omUFvs5UZKyZDGuA6cKAzBBQ5XM1ALsZt3jAQrLH1haLZiBTb1XbuydSGxKmBYXMSY2RoPFqvXwGusuuRac",
  "key14": "2vFWa3mTyP8wSBVzM7VeoU4XbCvEsnDKaR8paJ8uQXUtx6htPUePAVJJo8dMbnitNnSoJk7ZPcT5BKbARwFboENz",
  "key15": "LDZ9smiTk2iaruCKYxrK5QtHYwKKQkiMCCcHBVCqd9USi5hRnJXmDh7Lkpw2AxaneZdATtN4KxWC4LYZXLgPHDb",
  "key16": "5TCGqdQyRSuSD8jXmzQa9nGrSDFiPVA25GCKJJ4j12oRwiqzVKfygPfmWkjLj2mxRNZA3hTDTgdEWAmVU8Tk4fK3",
  "key17": "3BpBrhdXjFnUCA4Tv2rbFjGL5JsZoxCNVGHj2zpoVYdkWjyWgTgXWtDCaxAHtneapqEtQe9w4PQPStafWzTjGJka",
  "key18": "qq4vbHyDmsdeAfAMrNdS4xU1bXwfBS3AKiAkXscZUmRfsyJFV5cap9JfNpqA5u16CyzQvZj1QzHS1a54U1a4cRz",
  "key19": "4s2C5TCAiykLBazDEjHXaypYVo8VLTbtPo5sXWNYPfJoD847KXSLuDSgNNWyB1mejcZHpmkMuWwHh3tBYiH1v3X4",
  "key20": "66fc1xVQ7C31T5vWb2NynZYsWnNs5fdKAkS5D1x8mkLWDDPEAXprajQE5YHRMdjokSidprDTRwH87UjRYZAbf23e",
  "key21": "2UY8nSTdM14d6c4tPDRd3u7fRbnvR57h9nnMe8tQQ3aAHXyMqm5k4VKyNWW5TwpqGSMz4ZXK2gm38SEKxLQbAYdR",
  "key22": "4aWHpaMBRSfxua9LrJkUw82rkAYy1iCSgnwAiqe9nRgBjvCPunKR3NZ6U6Bpc7NcqWB8KRzvymdSeu98SvYV6bSf",
  "key23": "628sWs8tahJdSrLjFHCBv1zieH7Fg6WtFb7Nw7hAJcuVmJVksBgcbbsm57DR7ExMqo7YSofWeTB9t5K5WiLW5BaE",
  "key24": "514W9PDKGGgLftgEuPE38UKj3UEwVJgCby3woUbm1tEzL612nK7i8ARmtpMhzBNbDF9u8qmt58km4Zn1P5ps8thC",
  "key25": "APw4UjVYy979sH5NCuHYPHx4d3Wf63sxTvKMiqAZwXZU2GzemdJRwmsAm663Wyugh7XQTdtbzWKSzoBoU6CQY23",
  "key26": "3tgkuRLoeV2woF1sTZRN8LkdLVjs9woi1eLSnX86qdm1pz2T5wetkavLxEFzDNPkSgTokiRRt4UpfrT6acyjabf9",
  "key27": "59tDSaFxTextc9rcAeTXyz29vbXaTb56Y5PS93AfVP9GuRBRqWierxj72wW4DRWtkXKNBPqmJor81taB3ZTeFJEz",
  "key28": "2YWogCbPE4vjxyJUr733Db9FqRJkB1BVQ491Jzxn9dyaKw5otYG5vbcRBn91hAjq42ujxJtGKaT74BsKSsuVBnV7",
  "key29": "5Km9qqWMY8CufgfhxpwXDETofBYA78tEAFfHjS55XVmoA4nqrSPpmYrC7c3sDbTMxoFAPovQtp4Byg4qfh1yNcoG",
  "key30": "3zpfeY1HzupsTiNg5NGKVfA7uD1RubHJ7XuSUvpCjWnDYcLv2s7L7cKfU2DNEDXwhm2Y73otn1f9cdEtrjHGvoeR",
  "key31": "4TXFgDsKqFaaVT9TySTEodbN7788ocspBAZTARfW2gfbCLNuRBT5fJpUdxotb6mRnU2h1uQdnwEizUbJDn4JXS4H",
  "key32": "3UTi8ic7Y1oiFQkMrw2M9jJLP6StjF3cvdhCVxTzyTTYL2z67QhGHNBsqS6HEjQCUGYDDw1xYmJ8mKwdjmSnQNBV",
  "key33": "3bPiWJNLfQmSk9QKRbRENr6GNnQvdpNXahN2T9kBZ2pQCwK97BuQJzYkGyA5SZ93EkarCJPmFH3kiPFBn7gF8VNN",
  "key34": "5sUbE9yCgNYgYuxQttWECWjtRTo3J77HQ45hxiPDLStk9Z4npaFpm6NfDxnai1acsCPdFACdXffVA7pgrHydm4DQ",
  "key35": "5BeJAZnnkGDdUQU8rdgiVk4C9iu6Uwwt3xk1aRpu9uQNQLWCpGeUTcYPKmg4aTU3SdTuSZ6Je3xFJ9EuB2cYpwk7",
  "key36": "3c4uMamipXsfSZqmKH767y6iAQG5qkTqcvUTQh1NVs6Pw8rTj6YL9c6XSgu8o8tdi69JeujEQp21cta4pNAbJTJs",
  "key37": "4NG1ggvUMvdFcuS4kLcqrofNEADsgRHA29rmYkahRBqxBrLMuBGi4X92585cqwpncshhrSVfW7SJAhLwtKywAuFf",
  "key38": "5B7cgAS8PRT9g446YVGc6UgJHqWAHamX5Fuk8SxUuVCVi5GZ2Bua2j8YYjbnBkRwmjM8ex553Fxq3Y7J3meMbkQR",
  "key39": "3Lu65BQkJTAwiiLiN2tztKmRqejtUpMU9hVZsbcChaFjoRW7G6JHdYgyYfnFsqgUhzgNCCVR3ayAD8EQkgETDSDz",
  "key40": "3ipky9Q71XhXx1kVWEyXSNmA5izWSkDFTFyoFjkfgBNHJQtTc4Tj8QVV1jtBQsgXtXzJVkhkdXJvZfpdZHgSf8wc",
  "key41": "4UWuNQT8yHoZZG2zSSRXT7qFTvaCD9KQpc4mFAK5TfF5XT3FKhL5GkYn48WWRdWL2o1jzDBzp8n7UWJba8UZ9z86",
  "key42": "5HDACVkjBSFBSyGq9Sbfa7MoGQ1sRpBmxeiRopjnUMMxzEv2keDkofRpaUNetzTC7gCbmST7gRQC91nCNj5VkzSG",
  "key43": "3AZgrwQoy1ZyUd2ajPqRD2vSZBR44p7JZcwzBWX2DfEP6UX1vC9ZvjtLqhk1mu7GY8Uc7fwWjUmhmf9fXqY5uZEb",
  "key44": "J8uTeCAstRhtGwWQvEZFS5kX7UCa3u991ihKmMKbSmhewiH3bULKhtuGxzfxe71yB3Vocj4Z9gq3zVLJQUF7jt9",
  "key45": "3bk8D8ty5YCEbL6jV53E1Jr8vmCZwBWXeJjTzZep9HjXsN7tkH2AFzgxCPwsvYkHP5fZehG7vi6iUHk1wSBqcMYa"
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
