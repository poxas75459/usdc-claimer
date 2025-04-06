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
    "4VNhB3eH6g3X3GQqjmq92EoW7Qc7xVMqkikB6aUVSwK3qJDyiLvHXstQ1VEXNkYdaPrRtG2fXDt5gEECom2LfHtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bGzSEpYRCyLCgMoiYb4dx1Di6atb2Jo1Fb3bRjAvGYnC5cjG1FNfLbJ5hpryhDsgBYt4uoHRzQCyjrEE5SsBcTR",
  "key1": "4hGApBv2pC4PXuF6MJarfunEj7tq5WyLEw5SVEpN3AHbpz3tpXvScQmUTbvmF5xNcE2K1fWDt8jNy8LmWNesUBtX",
  "key2": "VEhSWBYr8WjKMkqR156W3BnWFtwEGY2HjCyC1wUaf5jbXgG3aG3Lxpfww7X7CuiQg15mByAppYNW6zTrGQgQ8ea",
  "key3": "2hM9yFYqHQC2KJwqdWQzxdhDnwc2dnovpR1ZgAXQGg1ci8knn1apzGVJ7qobMsvDab1L8RGYPRaPxZ357oqWdF7E",
  "key4": "364vPJqhGaBm5nshqoTEbXPwXZWyPA9KKeivr7EpmTh2ub53bHQYy9RZ1btuXe93n63zy39TRFZ8RDVLTDP4uT5H",
  "key5": "3HGitb1v1U3EB6LtFLGRRdNsre2KacK7jarqSqgTCKBKwQkQ26c3qbj3uaikbDUk8zF2Fomd75J8L7X5jzN4d4cW",
  "key6": "3y4bTjY2Q7Lz9UUvC2R7oXwHUzonoJypaoW3KMw3M4cZkhMk1kBCAvLi7SUN38ie4r4byjkWWZwQw3H8KXAsr5am",
  "key7": "31rUn3WbLMvagUiZB5YkN2N8bB6eVdtM1DNEmkKdwoBzjdoePwV44Bp8Mf1Hc8mDs4Y29oeLk42dKT1d7b2DRAM",
  "key8": "3rPm6Uyg6f36wm21NoXGHx5KLZ9X2vk1RFNVcD9HPLr4v65RAevJvoxDRFwxdqzEYyeyeJ2b4PSVuHSCafqCdaaC",
  "key9": "46cV6iRZkQBsq7Tw2ZFT7DzCqoMmAokVdMPZUkJChaWSn6NDtYKrFgYLGy6eynqDg2DssPXmwfQ78XadGSRQnVnJ",
  "key10": "jvLfD7WHY8vJjfc58hbWUN4aRH9Nqwm9Pu4Bm3VzxwhrrdEF5RKyaAg754C98JDFP4FPcqQTQEpoXLxzCRG2CKb",
  "key11": "3Rw65ofX35TXNy6k5WouiBCPGQeynSNdrNaEgnzGU2Xt75VjUNQWJATbbAxHY9sw7eorxa8fUmXjg9mhaGfgTuFH",
  "key12": "5wwbj3FkLA1c2GWu7rTTaGftNp63Js4qB59iQjjZy8aaYxpaN6PJ4f19kJvrzwrwSoq3Uvqy448jJKwDyvftWiFg",
  "key13": "5rx9ANxhQbWg8yREtcrGvUenZVunZsVox1yNLpGrmYEQHpuULvMfH8eLzM9b6ASigpVf2pHUbFLLcB2wxrAEGeJn",
  "key14": "42shfquYjUfhpvPb5msvdkdDZjN9uNDcMxUvAy94RHcecP9W9wyiZ1g9PUkNhoRXYCLHqMbBWncrQprqwKfKpa52",
  "key15": "2aMnn4WyMTrcEGny3TWQdFNXzZXcGCzrHggwmL45MHQFt3qW4VnbBEdxNE3L8W2uCGbufPE6GXDSwgUrKpzbo7Ac",
  "key16": "XaLq6VpMywCZURgeRvqSquq3Z8t4PNhHkz4gFcfZBen9ktBaNqhXXWYdWXSNWQaZ9V8sKFUEQgnmS7FKR5qSjCN",
  "key17": "3VPxJBuXCxSSWHcxrMqa94u1Tzm4VaZeFBwBU73Ckdhrn3CFMJEPj3NFLU58Z5Hq3ugknLnhfnETP9SbPGa2TsTf",
  "key18": "2PsLiZkC64GBiKu5h3YhC6rpnQnVZajg6KtzCRd1nfyEJ6n7zz8Dqa1srWmLsFXvzLpH48CWvuKhCBMq6TWPfEN5",
  "key19": "527eXvAxZdn2CqkGwvv5RM4pNLa5jkug5qaNH2QaBBJ73RhG8WB44L7BEBrnHpXfMmGLrWGBEJfXohpx9NRj2L2Y",
  "key20": "26viGdM7fvGkqzN29bK9ZteMKHkekdLKjP3vpsWTmNUVN33Mx84cdvedf21DkY2wjUnWRNj4HuFHgsKKF3zM2Nb7",
  "key21": "3U7nvN1BrXvX1TDxLEcNvnzZNs5yVwHCjjmsRjXBznVj6kYTxkDm1PcGAEAMjagf5oqJLeJf3xgtVAzxvSkXpu3T",
  "key22": "3BmkyGHA237GkVLcUm3rNh59njdgn6g9N7r2uBEP7ibe88VnuGXiU5Bkpx58sGJG8PZyC16fztS9BpSTxLqg7cwH",
  "key23": "2ejBfCvkZJbdHrrVHVivUDzE1oWNcMssn7cPHmZWdZhguNS1YxazSb6pRka73YoUPpwdjaajZk1tFpnWC3TaxsYm",
  "key24": "44HAKwJM7QZVktXAebW1qwuNaZAUf3uywYFrvwWYBkv5W6fMMfCo2y3VsK2c59UkHqNrFWkDebAeo18shQRzgM7q",
  "key25": "4WqvYtZSCEVcGLhynoqjmbZASE1x9NjE4MWzr9R7oJGrSoctiDDRCLxMGw7TuVj99FDdJ7M24iFrFBwcnVcAHgz7",
  "key26": "vvrmGAsCEWyvNUreYKkZJYBhiGHezxV1HYZW7zDUX3ZXegokkJqp3nDmHdr2kFRmXdXZWxy58x26aD3pq5seMa9",
  "key27": "NiWGeWs7bdrbox2Ga4u5epxxVBhAkGY4eLAhdLLsgbVE1pgQtQtzuGpJYPvJYfT3Sqmr3r4ZqtS83HbdUgW2yQt",
  "key28": "3j6o25uwj4Z429piZv7vu5HyGG9YD8doxpRgMRx9iqMwBCnmKp6zqHQ4H8hw3iwsfmRzUJTkcvTeUJj8pxyED78t",
  "key29": "2GWCP9qf6g4Txq8tHTRC27SS61soxJrh4e7f5patRftwbmubVvvwpurYGELDSXrZhx4W5GYbdqiR54YsC816YHZp",
  "key30": "39fmTj8jf1i3gVCCmYirVx3dXvoNhQguZw4Zm5Y1FbRRznB3ec77NBuzb1yKDPnTAVMn45shTTBx6y59o4NoH1XV",
  "key31": "3S7Zgne1Mt4P96boWct5NfdWpq8uMbGJvkAFnTjLh6tWwBcXxRQWqGV5wrfT1aeNftqJcg7sqhsnRNRtrZ7UL2N3",
  "key32": "4RPt2XNjUFKVVdgebkdS5kQPpYNGu6eQR7C19Gn1cqxA7DXBnjw5XY3bqwcoVmRVWApbpBrUeJbZqzcA7ze6ytfA",
  "key33": "isHWCy7ggXZ4k7Q5EidN7CLCSaPrKTT46xqiyk5DA88iABkHQcLbwfoBewqBYuPpnmzDjnAn9ExzZkKs2fZDEYe",
  "key34": "CTeJriqdCHstmmGxTBxhtwtsLUsFDh8MDXYbKsMsrqDBTMPRqQyfCw6bh7cvk4UeH3BAPgh2ExhH1qhcc9p2S9t",
  "key35": "2hEfdta286jn64CR2HNiyLhbaT1actS58zDWpF1rYwzmTSFzDuT8MHVkBvMfGB2L7zedUiFSEFXz1YHVq47eCJet"
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
