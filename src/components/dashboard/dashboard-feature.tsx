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
    "3c95fFk2HqHmpwvVbNULhZYnZx4xFcRKH9UEv8nX4iETpKBVNs7NvWNTsJGd3sQRePAtxFrErkyMBHzaZQGr1oau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wZe6dTnZ4CEW3M7Foi4MLXuYxhM3GchnFCSSBgUxS4uqwYBg2AWz49fRDFeZWtwYL8RrMyLvmK1DUKUphZAQHmo",
  "key1": "5KTSXUtAVVx3QLRGt76ia82p26xuvTopxPb5dyUz5ooZoq3jvspJKvFAGcu6VVwAqTAvcun9sUN2TCTMcToNe1PL",
  "key2": "GwMRmobeU9uNsa6cfvcKWaEQ4bLdbDRonhgugu2qjmeq9ujpSYwrAUvB12QDLzKrGMGoNXUKN2smcGM7TnsytqL",
  "key3": "4dUSXU4YnRsCHHSpdgPMP9AeRBFdkvHD8fnBGsdcYY31BjqAADXQ5cTyMRjn8hmVnmwtZ1oRkJNFm6CWWxHxPGZV",
  "key4": "5PRY2YjS8BLDMdzLHxDX3amDckbupq5kzpvMp2esJ9jGvKtSNkg8zcUt4J2Mf2mAr7z5D148F8Z7fvEL5Y1exycw",
  "key5": "5KxkdU1Qm3kmz8iQMe4t763BNSQMR9nkpTXh62Zp4MDEWQmL3FTw5YEfDCJbu6qXpGw4tntjzPYeph2VuTpWxLEt",
  "key6": "5dJJmKMe3nK7oYE2LvkFFPJTycwnCh3hiK5kKNUvR6DFMmko5YGHA9Np5LYjtARvpSJTwmBtTsH8UfHvqxE66hxn",
  "key7": "4ExhcShnDs5pm3LXxGtBnzyueXXWde64df7wKSJz9tQcW4JFzkUjTJpUkHSnXAccturb2s6B1XexfjwDstjgKNv2",
  "key8": "37e99LGfgmCwt7xmKBf3YX9bqQQYUKSHACocix15HtDH7MR2YhFimgYD5CKC9vbGRSwDUpsLoYuggjyQ61Ygu7nL",
  "key9": "hVstD6m4toTeGyDAfAPm9rzQWWCqambovQ5hfDxH3f8njKwzs6hjbzQ7pKEeBtXUYM7CbznXbcT4jQW1nSfSEuf",
  "key10": "5yaLaPXvyJo1edxPZMVRLMKpQw2hnSqNGWesdJFejVgcZAcNzMXraehMJGt8VJnTgtpFmYwMuythapTP535mdR1j",
  "key11": "d9r69zeAzgkVFvLTqbQbxcgzw9YLtxVknFnATqofBPZsPKRqiDWGYmTT3Z2NUfkkMkLqYo6AQKY3SbK4AUMaSJK",
  "key12": "2v22zrpHUESKpKH9iQBVVtN8XVoHahc7m7caVxB42uZRZ5HhhniBS2gZ5o929nEVWxxfw74GX4XY8uf2HDNC1smE",
  "key13": "63PpuUVZ1BwLzCytRYczPny19kq1yJcHK2rsh6eGxtK3wncg6xmpTHF1NiWs4K3vemV6BzktbnEjYHHoidLmRTX3",
  "key14": "3MLHBRQcfGJWBPn3XLp89kXw4mk1RSqgrtoppnkDhVp9jc8jBhr37mHvDiUYuxYTEFfwr6ufJK13BBvcLJRHjDfV",
  "key15": "37ZAH4RMESxf3QyxSBMxE7p8gsjDrYwkQuL2veNEU4qooJBmvRgUrGZL5y28VPbVDTXe7jbg5rBx9opmmh5No79d",
  "key16": "4j4ynDjjSVfqeGhG3ocwcKWzUJDjbgeCJczaC4pkZd13F3kBXi7bmMrnzVAtETncuDLzqEFWqLKD1w67tSeTVo2C",
  "key17": "HJVtspam8nUGZJqK6ZuNCZTY1snvqfnpUiUvBCiU5hdMGP3ebHg6iEmJH1YEERDj1chHPrARRdEYurZvximwyo5",
  "key18": "2LY4fNctbPyraoPCj1jBo3prRK9LpjCLDkK1NbWYyonpfFjSq5HkYQJ2WEbrxrxkjv2ovTiQTt7AaFCqg46Gdbsy",
  "key19": "2HkwqbcRzS87Cs75z1Bj7aehngoGkxwD87S85PiwBHAnMTwn1cTBsAimDmZXTsqrowsAGxgyMBh49oUg7ZTYCM2W",
  "key20": "AfybodrZs43JvKU5kqMfwybDfJk5QTUngYoUgoisL7eThGdP6iWj8PrwTz5Nwhf3RxUfeoTvEgf8szWz8FDPZwo",
  "key21": "xsADdZT1F9oVPfepZWx19h1wCVqK48EQnRM5jLXoT6WKySpg2omwQKCmY6k1WrxmFRgKCdWFj28RpmX9FUyoqts",
  "key22": "24n8Rhd4nCNdU5kgz8XvrudcMPj3CHxRgKhYJmnj1H6qZtEq88C1ePUhGyBPLEptCreJijymTGXqHmP9ipM6gBTq",
  "key23": "5ADJKVecNJ8RkB2xVdqdWC1qjKXx5ahYrtLYGcKXEcJTa4VCHQd9xp247fkRAkQESoD8mGVHzUgwMkHDRZbgGQwz",
  "key24": "4oJM1bW7bka8qwjrM6DyEi7PyoTxuD85yD4Kdc4GCfScRifqY4K4QKmTR9bbx4s1FB1K5tzFGF8WvdvGveUnfKUS",
  "key25": "5FhsbX2Fx6BhZzo56sUWQe5e14KLaqqvYQSfEFLCSteFeHGR3mvBwTgQcQDTvTxDkLhLhVRo5mquzjAQ4mkt9ghg",
  "key26": "5VmQxgGDHdaQurm7DkoDb1U1tf5kHM3Gt6JafKBbyfkgp1QJ5y82VjTJVHdYzDk8JrPW2XcQjmH6YCofumf4A7v2",
  "key27": "4egKyxP7bKgP9RPkNYvXJx5BGzp2ncNf41pK53sUJ6ukPSUPvE66TzKaFc5QbEe9qj7Nv9SHA39UqUJi21Mh8atu",
  "key28": "5nnMkRo4mrKaaTfiR8fCv4gkJDSPs14tSXGLyvqXA9Ngd2AfKkF5oEA3bSV9zPLKZ5iorQfh11QFkBjwrYDFMH6K",
  "key29": "3Fbu5LVi1v1PUYAqHxDRjmkH8SKNMYfgWUiZ4oKp7c9HHp8pVX7sQLSgfB53oJpv92BRtFe4jxkuCmdd8Jeymv1f",
  "key30": "25yRYib1Ftev3nw8adz6ydKmkvMD84gXgQg4HnQ6h2q8VrXsWsxJFdGkWpRuMZMbYsvmmsbGGaaYSEbNYdPQJx4Y",
  "key31": "46ABKrLVesAxfAtEhTm3eXYJiydJghQTD5JykF7KqdYGD4o6L1gnpQ1hV6EZQUjuioFgJ1sHu2RxYwKPxfzudhqz",
  "key32": "AbEddu3D7XEArMMjKhmXxqW1QnNZ2NS7X5B6LqFScnpqe4LnLik2dLy59SH57bM6Foh72NJRcVNTZ52JtbzNgHj",
  "key33": "3iHias5QSnSKjnDDkDT2gqqKVqjbJCZs1roKJ6z9ziEFDCFkaHWfRbZb49je4Xym47Quyf6MCjC19zis1mXH4Kqw",
  "key34": "58hp1eMkGAcsX5gjQCUpcKeTGoJvaLG9qAdUwDQGMagRbftec3dKzFExVyCiBKLYmR9ZG2swnEpgpUs3DdjYB6Dy",
  "key35": "LtchAEnyJL5KYa7iKwdQ5GyuTawysK5QnBd4X34PbMtAHRRkyQekmT5ZbcETeyvY51nPfdQSdh6SD4C5eU9KADo"
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
