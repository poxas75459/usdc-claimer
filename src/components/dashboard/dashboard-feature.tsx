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
    "2NzcLWCc68odnfysC6nUhpKjyBuMK7zizsn6soPVMtKu21MV2APEuYkQ3YBk2cGbFLZwW4BKo7HP3oPeAg2dDmJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xgRZVkRpKQQiR2xMtT4b9hbCxsftztn2JF8fMUP7n6okNXf7UxcqeyA79b3f8VKecWvyRPUYM7V3tfknUwWZk3e",
  "key1": "5anFBtWXhx48gdUry946Bk7Ln6U2Ysgw7WrjeGYjrKtSVPfQvdsuXQcaa1xZPuBRMZfUYJFEEeFyK6TK329Wvs1S",
  "key2": "2GmcvrHgz2AKfvz4k7NDjMkjTPG5gKLnzhkgbiiTSCG85eCsDBtvmapZkTM9JiTXZEnWcvhDVgTTxEDLWC8CQxZH",
  "key3": "gFPrsQtEGk9npCKspm4ixY4SaNKkDEEA9TW3rgrbuUrvz2DHjXFrEvNavPULDSxXz5enRQmGjrQ4B8ZG9DoBBRJ",
  "key4": "538NTdVLNPGAUdxQeyh2ptB8NZbtBkz2arNJCzx3fyER4jCtgTAv82Vm2mUdHy778oEAGn328bgVdezBqANf5qPs",
  "key5": "P6naYkVzQjxbh8BhSXd2HqdPtLjov2SE5e2wjrKp17K544HwHMTSTeqiZQZVEBvVDtasRL4z9S2Y3KsN4Px9i95",
  "key6": "nTdARXkjUmKLvsJgfBfZzTykbD4JDWB5qZY2NzyDgEExYsrEWuQ4Wvgqad7M6UBizqHdvmnzSZNuBxuXCBqmrXd",
  "key7": "522njJrjsUgDPHzGXteoHFDtJmT1up3bsWZz8tkGs1Btw9x3jn6h6NFUShtPaszwHFEZrakwFYjXDRZBRV6sbJFW",
  "key8": "KnFRAZ79PRGzGTJZwaRMXgnPDJSXJAk7G9PLy2dT5rzv395EJhiCAVg8dwmWhUCxnwX1WSpb8k6tDUKQYhV32fB",
  "key9": "321LRSAAcWU1wv8XMjaGqXw68zyvWPRpjdEZazULMbsM8uns78EBRk7vNt8QouSCuLooWyXmmEd9vhHWPFs8t9gi",
  "key10": "2FwiuswxEcE3v6C3p4geaGdnwrzZPpRHgjegY58B5PJckuYtpqCNEfu9HWnMsJ5BL56wmKGpGLTFPwHGfr9SNWnA",
  "key11": "21y6ojUKtzyBwz9ySwBRYE95SYfAeLuVKeKCjpA1bn4SrALZeXKgUpJ4uxCNoggz734hfSmGtdDWArFqGdTR55J5",
  "key12": "487kqHDToPL4rG6TwyToTTVW15KeYX7W9kzFreA5Ue6V4Xk54eEYf9dmuto2SUBHvJYyiXDkNydMjybSXwpzm6xY",
  "key13": "4bsPjvQEPM4rZAQKRabSYHsTVYfS9gw8inhefQa3FepBH5PtZRaSGyTu7w1CkJCfcX6HdQPcBqhXo5YAFdfRTAX4",
  "key14": "44gz35wmjSVTB4uiBDBVcBpLywiQYzTiDKiceG6PnkYetiHCaxDUTZ1qZ4i7bgaZk8LvENSN7iXuie7V2A63tgj2",
  "key15": "5S5UPwQhGLwiNEJsHJJqDHLHj4j5FqgBhEMuShSXLDJY2CmhWLJmcoGRsGzaQpp5NrYehhtCW36GwPvxJ956XMi8",
  "key16": "2j7Hst4ekwBjNbhDhxx9B1KEoXnUi9CweJP2xRL9wqgjhF4gt62vQyerGkELVpkbKfhTnvJzVC8D9TLXb2puerXE",
  "key17": "4QbZFj7so3ikzSiD6HdhfuwsVQcd4vovTzzkt9vLYR5gQtUDr1qGVkzm3cJrwRMpQNV7KjiKmvAeW6gcjwFbqUKv",
  "key18": "2eEd5F22XhnUG1iKNubFaMvafRr1g2NAUZnKLh3uftGeVoFVRzpHHwLRSjSLDmxrZKZnPG9FC65moUaHAjqpcBQ2",
  "key19": "5XF2Y4Lp7MJ3EXjsuutdhnG9z9BrzDThwR1Y3vJav1KfgPsuYLhGdHZzoVGTeC8ksq85ikMdU8kmwBXS6B45iTe4",
  "key20": "TnR6thDhm3zRYLDttkfz34gVsEj15tMS2bVTR4tb1RBjzP19moPBqBpckhBsjbAiiMAEmQ9BxREME4cCexmNxa8",
  "key21": "2yQRA9c1dX7Jgde2HeZp8hwhbPdRMZJRsagLtMcMHcVxGzBCwDdX3MK9maPPXPqonqu4KkMCmksaNEmyefxGfVrt",
  "key22": "DiRVwFjVhSBoTANkduBRzeT8hFQfqHKVSAZKawtg8fY87ZzUDUPhDqMGTiCemYjxVWtiaFcAmga4Y2UJcA9AhL4",
  "key23": "4uAqfm6w3YfaAWG9P21aVKnSFqD1a628SfaHaZZ6Nxz9Rij7ypqDx8YFZmjmwEuf73Ua2HoZxxjPnfBNKvBfRSzA",
  "key24": "4t8sTvTDW54FztrdoAGq7oDnfGyq4v7SyxN1qzGFWPFcELQb73AL9Uo99YLdBJk75afNq5oLNRDdXhvX7AfFmj4V",
  "key25": "4FBCHamGUhFxAphQwavDW2UaGVnsPuvoudXyxDRjpyumwgLanSp99VED4ER4bkKUcuyMTRBwPU6bDHjLw6Pm6S5T",
  "key26": "429aUY4dZhzFDPbN54hyQ9GhaA9pW9PGJSbufHtuVE96k2FQ5xXW4R36NdH2FhviiEdVMkpABBH1o9jx8XwFV59v",
  "key27": "WcZmUBGLfVi5Mr4tFC72CwNxTaaqPsc8JKYBEtKy8aueJz2TRY8kp2wPeAzRAPXBAiov6vHtPmbDba3xrywUeXz",
  "key28": "3d4MneaRQTLJ4b8R9YcTth5Awg5CuhE8p8seJfm2tWdgypDkSiv39pwRBYfdSeNBPgBWRrZGHJM56qxYS4XzL5h2",
  "key29": "5pr6PrLxPUeWk1wRA4cTaDt83K6sHqBtKD2KDp6bc3rhVabcAJc3fz76yDZDwb9oFZSafV4db8uLc6s8egwjWoj2",
  "key30": "VhfHHNrwUzsPQh8cWwsRHVF7UMF1pknA96BGKEnoqn4Vtam9usBTn1EoyGXsbodn8i6Lph8dex7BqbyQYZCuYqw",
  "key31": "5sHjRtMqVFGPBmDoUBfGt6ch9K8hNWxVUajZMjhvZ8FN5qCZeEoigkx9YupRzSWWkJxWQ3UhYcgYWovvLF8C36ty",
  "key32": "5n72RVdtb6WSZmnS6nMx8TGLG57wkiHwpUZ3A5BKs3Vn5CWYzcidZkgAKLtQhrw7DYws6qU72qcaMT2NKKTZ7oTU",
  "key33": "5n73jnL13CYKjppkarWVKEWtj1w9MHXSFLeP7kJvBJqC8Ft3ppMfKRRZsX2rDnDe3Gt3YHGNetj1UyprSQcHfL7p",
  "key34": "3FCAJ2z4fFnHcFJzvVDFt4c9eY5aduowpnVnhgdLTqcRJeKeWn3paKDFPof4euAvjuh6hLSpVEm3eAgJkVLuADXQ",
  "key35": "3CFnnxeeWnsMDA7WXnTjSqMWeysz9Py8yx4nE5kZBZXcSUxB9PkgVvvibNTfU42P3DfnVDMYaK44Fzh3JvF1iGde",
  "key36": "3Pxw6ABou3XcsWotQiGjzmjwGSY5sejc7GTR9z79khff2azC32U1zRgnRESfDP7oUwh2FhhAbDSdhde5YdLTvo9f",
  "key37": "5rCjrNVAC2uxK8GqQxcmXcYXb3bUr7E1FkQsYbuTHtc86G8pixx9eE4q6tCDgxGSqVUCr8nTrHJdCq1aSMrNSdAW",
  "key38": "3UJ6JG2EKa6868G5QzM4EDyJQiUoJZEoXL9fp5Hzej3wcK3itzH7p7xmSsnUDkLX9Gbki9aL1fEgQiCEh1v5DSQY",
  "key39": "25yrKJyF99znEhewfxQfRC3bWqLmh8gS4SgwVk1qNC6uhYLnRsWbnXZnKgJPNwdigVVi5Z5Sf6uT4zt4KdLUng1n",
  "key40": "2H6xYXJYb7AD7iDxBQaByW3XzDoehfhcQ2yBEdaTcHskjTYY5P58f6xJDH2GXruXm7rEmdzXPEyuQb8RLUcHp9Kk",
  "key41": "4crAnExsbjhzVEXLk7WiZkdKGXkebxyMSXyuA6ywuZPT4qnnb6pibfoFDGs4JE6BxJLaiP61Wqhos31Jyucsk6s7",
  "key42": "5pxvSTtynp2jJAXCWnnPDXWjmejLcPdGbEnCXnQXuQDTN9xo2Y6DvMYQaxUBAPJnV8Hd1ZRvWssB2d9WwW3yKdqZ",
  "key43": "4KzQoHuYAHc8ApEPjRzaZB6qUadf9VQvdwChSqsAraF7nKATaquk8A9FHhWJddeVMELDsMwV2sxBvtgfAUnbq7yD",
  "key44": "4TP4eznv12CwxrNwMMwFnBZAJVE3nLCvJm3WgMxCWS2n1rRtnsKWKASsqvahJM95xXFHe1B9Vk8RP91WNdLqn8HS",
  "key45": "eu4XKK266jaCXa8wJAF3gTJ4bEmGeaTS9sWKCvWMFnEg4kGpA6uVu25sLhxVtZ8wZtpZvEkXYETzSUCrf1Qjwsa"
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
