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
    "343PGkSuqGmSc1RYtT4H6yghPQLN6fmfN2A3htfYr3M6FFZ38kpXH5XFh1zxzt11Z2tqxfSUvYjLoidGV1pYVydo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kB3sDpUKoPmwdaCSTXqsM4eVxyDR3f7Xkmuzcsses64BrgpYPc22Jzf4BquqB2H2idQrZVgAkpoZAzuTqGv2ods",
  "key1": "4GGgE73NzDLuzJQuZA1ACawQJJbifMGKAqHc5e7kx5WgYwn1Aihp5YZyGxY3tApoqwX1NWbSSatKANbYPXBrwdwN",
  "key2": "5JAzW3E7CugEpNiprPutQWFRyoGBBr527Huyp26oXzTfrgPtvLSGDBBp4muyKD5E9muHk8uQ3aq2nB6bywt1iyjo",
  "key3": "5C3teZ363XZRgBpMNx2trbq4NzyYFCn6ZYm1fUespzEJEiqkunyvkgER2GUK4gyii9BoX81uyYgVtEwHzQF2y4CF",
  "key4": "2QCNA47Pr84MPC1dJUtVqNUgb3nieJpH1zJxjLVhe9zGscLzC1mxQhwpio9bpFXBHbKntik42Lz3ozyZCCHRfry9",
  "key5": "2my5YgRwBHpu1KcvdK1tZqJWpVPY6Amq8KLrzHAmZLtejvQXhtv4BbnQTXJ19961Ld2HxWA5XoKBZ4cktSDhTq7v",
  "key6": "3QyFY3YHhdC5ShRU8nn45oPU6kPx5wEAg26j5dbUukNKHwp4hCoUt2UW6Xz4yzryC6YHXAPCpRsyV7HUgXdWSyAy",
  "key7": "28Z1BdRAHNUA6DccgE9qxaUwExL6Gfatu916myLBTDbZZtJZmsD9S6HU26tzeVkmiuzi9Ub1ivD62MaxYwJjxHsg",
  "key8": "Z1TD4ZCdQutVsEP7au6W8ZYnjLEBvsvVzersKmZ1h5iVhKbtdYybirbdf4XvqU9BP8Mw1Q1pBzd6z9aK5reu33C",
  "key9": "3VEoxvqF7RhtL7ZhufwQXPJPqNDdB998c6yyEtVqdZBLNGgty3Ae2i7UecqqaABfYmxinyQsvzW9NGTwvqtaiUx7",
  "key10": "HcbJnXU8Zni2nw6nxE4pgRUXBoMwAXkw8URxy16aE686cVCWH25ob6NWJBWTZZFV39Xb2ZXXeEvYhiF5zwAR47Y",
  "key11": "4yWj1wFoKxy8UMMeU6FXnCuHyQBwiVGVLDaxTz6Jp8iJBmMYGyYLuBujSv8CCh9bP7Aibr6AcBDzFvdztR63xK54",
  "key12": "T17vHMkVGupssybGBD4deU65dyrpKy3GFC2tQeLfRwZAWUYTCHkJstfog7jxqM5YLVoC8J24dNPaLnr4sjpP2bH",
  "key13": "2WSPKziR1HCAdeoHVxa9cjm5mmCMcpymGSYoYxNAD8M7GgWbH5wh3s2yV1yurt6f72v8US8TKEi5sY48fQbBc1dj",
  "key14": "5WK761qs8FkCpLWhbMps92JriaXEGNFBPgMQiJ8owmZ4iXgKFXNdiezUxdkx5Rzr763zs5mVsX5FYYvunAmWqrC7",
  "key15": "v6YpvdeKDzS3fQQV8HYGZeY6UFH1s3dk2Pspn8SpMoQ3MnS4uBx1G4VzNoix8LmyJS2Ud6GtXvgR7Gk3LYsnFKi",
  "key16": "GeCkuPN8X4Ms43eYE7Bneuix43zeMJW1SujAs2Cg8RHmufcZ4dNggxaQqyriXVd8GbKJc9izewXRxqXaW8XeBzz",
  "key17": "3bb1xdYyqQhLiegs1G9wzndLT6AiuijmiBnwoN6vDRX8cwa1pg1B9GqCEydNU9tFhVwQeuyXKJjmeNgfdZT23fhg",
  "key18": "4fbm5WRgkTaBkSYstpcaP38jDmC7QqiVhi2CbXw6R38ZMdaQS3MtB3TPrraxyfEqDyXtSo6xWqrQmSH46VmsocrP",
  "key19": "3W12Zt1BMX3vs7UtskJ4ZytUhEWmnVSNpW7sS9RHBV5yper3SL89Xe4eUkFxSGsiTBQDDF8gjjbx92ttebfBuhGn",
  "key20": "4RjxrmWSNJP7ZfULrVuJACFiFxKgYcKxL2c92HcsgNKEcAMiAqEPGKCi2i8fsNkKSaUp4W82DPw6yXCFArRQFcHs",
  "key21": "2SfgEeB4KWyakLVEM4ENMGLQzxqAWnHV8sd8JW2A3gKDe9pBVbaLoR2pVPQksqaGKCubX8qphpWbeqPaUH7rzGTB",
  "key22": "37DPQsDoGPorHatxNs9XQQjbihB2sQXMNwkCnWVpvLGsy5tB6BqLkm3xr9yrofxRLqXUdjXAgvUQUVkMrsZdd1ta",
  "key23": "4fjFsidfF3PVc8jsFjFAimQYFHRsqqwTwdZCzrB57QnBU6C2yiymUjyVqHYnEhJK22VDkjvZy2W9zvudpygLSRx8",
  "key24": "2hgScYhjaEp1PmDebxUr2HGYQryDLditL8CgTHGjQzjZbziBRGU14RZSzL2PFj7vXvRatKBGoH8RcwHdqTbuDo3w",
  "key25": "5KBCFNbmUz169DWD24JjnaCGRYkf4FWtZtUqMgCAzZzCH1hDNCew4tRqYEUX2nk7r54q7pbQSiXa9HWevpT9r8Av",
  "key26": "52VDRuVfNKRKof4Ep2LehsemDGThwPt6q1EuW7gGVDfb5yChYYLsZLSHweL8KUirFP68mp6dDimTiorwQDitrAmu",
  "key27": "hfMdgeqcCiC9GaD8mioBbBCm8ygQ1ithf2EmmNwsm8QcDu1xwTgXjENg57s2sU3UADwPA1f5QKNd6XChZw4LP5G",
  "key28": "5PSUjUpmMPbLzWT2gNUG9NKsEn6VJVXzdsKmoDqtoSDbk5CyHKwCneQWNys4pkrqcMatS9gVZ7tN4fYJfME56qKP",
  "key29": "29iCPY1rkewsGkAQ1SxqiFpG5TCk9PWuuHMQyF4AmvZZq5skjNLbST6Dd9T3Ff7ezdr9QVEeGBVLExZWfQTdeiqK",
  "key30": "3MFmQtMU2dFaF41ZKREp11CdakuYbFoNoVP2YiWnc7ZkbfPK8AadvKQvVeMHqzfQeq4n3f1AnLFXKsin4M9tVeAz"
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
