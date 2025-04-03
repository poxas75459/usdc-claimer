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
    "5kJQa44XsD21kP9MnWdeDdTm5Yd7TWtjfS2MVjtw5qctJNoxnYBHiyZeEL9QCEyxF1GK2nQBxHeYGT16U8nx4MZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42TBQjQCPnPGNGNn1JR6XVjvmuTaDV62yWF4CshSkfw5W7gqxfEGsj1k8kqXsWCzvmQ72gV7chKrcSKmAwhKr6Hm",
  "key1": "1C8s9AqQDqfGszPQmG3r8EFFxvgqSjQWA6cECgNhc2m8GKRhXcuewpA11k2FsZQRuwMj3uXrnhueYMBGc8s6ehc",
  "key2": "3HDVTqbzpmXCuwk2otwaWdfpq6SZSPysNESy75DjrodvRVs43SFipu1qtvXmxKkLLeYYJgkv9UK34HSiBENWJRTD",
  "key3": "3jeS3vxVHtsm8ksW2RqXgg3p1YpcxVPhm6biunwm1ByHeJZzM54TjhUCRs8fL8rwdQTSrFp2GuwqvGCDYCqr1Pfy",
  "key4": "3Rx1gLLQy4uVCPxTmU4uQ88NPGBTyyshJffKfPrJsXdYpt2MJEUv7o3L39yn4gFy2pbfd2d5qk5xhawnkbPDf4qQ",
  "key5": "3MTmMuUVKKXhJJTnCQD1h2c6Je8K2Bg3SFCLMyUHRkVkWLBrarZoWvRdGGpiiGJW2gQttwKQ6wQwaMBNRHW1RFBR",
  "key6": "37Y9EBhq5GJmyNEhRfofBrxJkqudtfNXyKg8rrHshSPDT72jm1a2C62rbJgGCwrx7zR7QxzTYofKWzJzD9nBQggt",
  "key7": "gcCYPYubMYVV26nJyDE8zn4om5qUoXvcqP1y9CBA5F87XfVRpTWKtAnqwvVraPyvbe5oV598aa27Z3xApf17k52",
  "key8": "34gbDjnBrwby9XC5jKhtaM4fcwmjp8BqWkwimghmgJWJsnQjC6r1KS32k6iLxrx4pjVHUAkPVME7FB1nW7bmQmqV",
  "key9": "3utUdVtiLLDWKH8b4sRNCGgZDzKAR9Jthm44cCE2sqBvJZDNatd92WnZcTecsqtqBaTsRB1Q9AJcymzK12gJBpmB",
  "key10": "51CenYHgnpamT3vW1BeAKjDK9oxYv6tm1ZeDyjG2bds7Dyv4xtnp6ne87UTxa81a2TPhjJJwUJ1hJ6Mt1drLDck8",
  "key11": "5WH8CA2Yi2N4ZWXMDjCgMSHzpjLVGyy4FHEGMv3D263dHA6jyiYKDumMvZSG3dW3LJp7pr8hrwHM8g22emfvEeT1",
  "key12": "5haUECHBW7eNjEcGSBACWX15sTtgc5D7LYSta4TvMSE1hU3eqarnPAKrmwNSrNkNj5uAcSUuorVW5uarfDDDFr9H",
  "key13": "38Ddk6xKxi11Qc9741rGpVYAHwrwcfhTtUmS7m8tX843GnZeRBMV4VWDNJEDBNuh34TQwS1EPB79eikPPc9Mejrm",
  "key14": "2LMXBVHtuRjepYRjosTbzrgSs7THB9VZMkbniDxiWMD3KGDtEwCdEov88T1YTvawkxq8PpCUbZaFvfBs65wNuszP",
  "key15": "4dsrcuEyazJnQL3p17jKYhuxfC4RiuDYSg62Fp3EbnfwRfwDNboFpVDv4h5f5rmMLdjJpNyvCSMWaFkKnmFJo3UG",
  "key16": "5dnkricWMPm4RcHn2wVAkxdCRVD34mkzbG9uGEwKuMEZBKy7EDqzprVfBHPBnC8SoQZ543cS81L5MpgoHtAksY5h",
  "key17": "5c8e7tbNPLGFJ6rrkq2jduoov3BsfuWnbqXLPYXzn1jvN34F42SaxnP5ETacZd7BY3zjjNH9sDAkJbxmZJRynGmZ",
  "key18": "4CNSmPeQpRcQMYC9qMLmt7bjk8wWaKnNTAXwC5Cpte6dPrDDAvbasGWCspdSqf2uiUeQLMS7e2sAK9y46Tj6Rfo3",
  "key19": "5igQvdy7TvKVSYBt4X3BvMcQeu5QVHs1CU5PeUQRw9PtJfMuwYdmsNE1qGQA6533Jo9DNfYNZWa12jLte8HQnPaU",
  "key20": "25sUp1wyQAYX43jA58bQqW5Dq32QZEFDTmzu9PoYEEfEEDBR7J1zkVoV484fqbUPPChhsqoDBBDbuTkh7n9mJYjV",
  "key21": "2o8DzMZUxzxnnrXNGoPcm5CxQu2YPBNnVhxjMwjQ3xK544LbvWuJe5mtP2FpFGYWUPRD5rifh12oRVZrWXaWWopk",
  "key22": "4ku4rNhrF8Z38gXXmGUpoAPMeYgPgfAybqhsdFca2Few14paifW2pUYGcATGm4X4aaWAGqM2mUmJrgKQmSLmRSkK",
  "key23": "5PmQH6on6L8rSEQtgtqjeW9NuzHJFDqiV6ShJdA1rnMk5m4A4j5mDqzCtiSpjxKnAxviqFgCPph9nqLwHFRgAjK2",
  "key24": "3uPNyA4on2RMhwpWG97KfoLauYVuSSunduT8mGkubFD5JgvFzU3qRpPshaKx19xtqEDgqjkFHWWpHxiHN8G1QVZQ",
  "key25": "2omp2Ho2gyjKva8d6iCRFWatSv58jPovqZ72GQVtQSiuL9vgzMbTdJKPUQ5Ah1JMtrnHgdxETrmoGojdq195R3zf",
  "key26": "4LKmSzFd7cHDcfXcuF9oyJr7GgMLFwhTqc28SGY6p59Mi7cTvwnyopiLpM33HhuRjBjBKmJfdzoxNVHGyBLJQvqC",
  "key27": "fsGpbbtXhpxoHVbP59Scq78YLa73LevVKF15sCc69G5z8i3bGi5mJYCPM1CoQCgE1eJP5nTDzuEyXUvxSddPxBg",
  "key28": "2hBUm1hSCaFj6yQXhjdxrhdCNsfd1CKF1j178SJSb5hKtsexJNSJSsK3W9ktGBb36sokvT5i8z3XYWb5A9caKS29",
  "key29": "2dSNCfnFF7y32WoCzEQPGxmif4UrxquKCvAgtuj7niMHx4dxg7xKtNaV3mrdeEkToiBKSsXAqYuaRaQd8ZKJai4V",
  "key30": "4be21t9C4pVnwfRXX7X9afbW1xxUvzmZp1ashX6hK7S2kk2FrAJabb8hvfXkuNATvPXZpVRCAeqYZxDNtLLHs4Je"
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
