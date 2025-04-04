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
    "3qUZKGATzTSkgFEa66egVYMqZbimLBREDWKVUFk1SniYyeWS6hxqctjHBK4jC2LEMoMxex74wWvVNnwthZ6cTG5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49TUGMf7ydKtcskgAu7SaWgQerfcz8kWwZwqTPZeYpjwWn5vUXRAu9G4MbHFvRx3RzUqyyFzY4LNajUqeUTT2RTa",
  "key1": "2cX9tqkyrSisXXXYMyidXabv1zA5Q1rKuVf36qMGn9hHqppkm5ZmLgwCFkjePbB8E8Z7kLPXvKx4xqJbaBVZapfA",
  "key2": "hhLsUG53oMhPPwJfQQeZaUeZA9oQnkpg1XU5JuvWiFrrv7sdV7gjJSn5RAf79qBMb8jRauPH5RM59Fmys5wrL1f",
  "key3": "3yt4jqozahCKMGdhsTotyt4iuHQx468qPS6TWjr1HPh8X6Hcf1ckS1o4jMTkQRKy5F7JrQocwsnTUXquLU5zZ1F1",
  "key4": "5DrsKURPFnMNd4hqqqpGsxFiNjyZNYLR7iwrva4GcjFs4VD9ZPgbpoUSMHycqcEUJttv7LPS3gYJBo7SScwCSnUV",
  "key5": "55qx2BAcV5nDJxmFoEcKUW5HeG92NShL3dcntpAPWrJmnGABYkHTxrz6KrsLFUwJ7bE1TYyYwqV7RhaNfW2gj3vh",
  "key6": "3KFHDBzp5gDwEZfK9JuqNhzo6HLSti7G7wYxvrgmFoKANxgTG9joz2U1cQmQwVKnWGDA8iXLVRebEaRwe4TDqr65",
  "key7": "5mAvaPSy66e1UtBN6dsxhgjTsdQRNmCxrgUnRoyDNwrMvVgaNenM2iCLRMUsghcsVGky7caB6i5yPw3wpcF1v4Gk",
  "key8": "4h3o4NgKrWNB8i7qFtKRqboqpdcuqwGE5zqqKWQuG11ajJ3rYUeCYW6PQfGq2Xv1tdH367EpdkR6nYnDKc8zQAf2",
  "key9": "454WkJtFiJKypKc7md1jPRNGKdKPKrQApezw5ykEabLy5va4gkmVDGqWotX2pxpZVAHnsGnWAvUG3tKhPjbevsgg",
  "key10": "MyfPwXcARrGTZU9RsXVuxxCvYhx5x2Gt7q9Mr7iiz9Ek5uNVhxypXM9YvaCWB3qBVjZgqAwCB7DSy2JF2g9HZWK",
  "key11": "3hwMm8ew8DMLyc9ggEynep64x3pPyo7NW5js7whM7vBdGW4jMyrcZqXaYRJQZe6dmVWbbnUtfeXkc4G2uKGdmbax",
  "key12": "29bAzrGZ1Mii3kpboDwtcUELi1c9kK7KXc2vYYX9q59rBPqDzBDbhG1wo7u3x6UEvvyBJoPGXiVKKT9xporwsvEG",
  "key13": "GxXGjNyFkB6mm4q1QrQGNusGHr4DkqdyVb5xqRuZUWS8j63BBGxAP8h8wJQGReBq6daPEt8TFjFFbcENjCTjYCy",
  "key14": "vcdNEh14XWeaN9e3euvgtWH54Mh2wk9pcqFyR7QLCjm1Vp3EpwxEFYfyNfaPRaHRHyfRL22Hb3g8iAmYSoUqbrf",
  "key15": "2vnc2JZAvn44ZaJbEhX3kX6JiY2KGJjo4KKLCVEcrrYnQSds4BRiL1J5ax7o6HaJFBBVUEimAFVYBePnzQjeJYjQ",
  "key16": "4ozBZSGWwu8c3Ewei8oNm91DpEbQW59FFTR2rxi5nYN8emLzw8wkbzw8fWVz7SnRUDTtKoAMdB93kYjiuNnwpe1d",
  "key17": "3c9P9y6G9TiYfQaNKDQx9Dh8rmnXdK37KacSDChpUnCYQ3ntX856oRHJv1goZUAGzZmFA14mtjExeqjfVSA8DdCB",
  "key18": "bFopn2hywTvTj3fQjKeiJCDDRZSHBwqLe9XkWm5VCYXMv3inkpQoYpZYec2aFBdqaRfL34YWpQpdYT4UQf2YwPA",
  "key19": "5wDvYHFGAJjvjF3xD8c9TXAY58LxWht4LaGHZy3YHWTbDMvXEgmQv8ntpZKPS8nVmnsPV4GXM6N3gHxiiN2pp78t",
  "key20": "4BxZWrpDsM7eFWHJ5vZg6TAtjve66R8NN1EJZVAsJWDFQ1v3CAuvvaPSNJwTjeXVaQRfhwgeC7yCAtTR8X98hwzk",
  "key21": "2EAEvTto3ZwL8N9kyrPTjKZ6SH5gmsvWd8NekDPZUSeJ1QjHarFsud6EzEUxNqMZoDWvnsA8GTHYDZPdEryANPKt",
  "key22": "5dTtEr9zpw8nTECsuqgX4CxfVX1ap1Jad7PMBqz8GgKcuN4bvBj9bEUCTWBBAxVNXj9AsfJj6dYqfzrZZ3DPJvKB",
  "key23": "8h6fWP7qTNbNPDREQMLZxEHyCtx18swLG1zSVSWAibeVDPLQyeL1XopxTPWFFQbLw6BLfxD7ibMk3urjaJFeykd",
  "key24": "3qg1K6uXUgMGyhinoQcG5czt6UqbJx8vihmZjgcZNBXbAse7QWtfLNcK8LGPi7jvEpEv1vx4sjixw93EjjHkuBRo",
  "key25": "5jKARnzoNKNRdnKbSKUg49C96SfaVLL6ToiRLbqPkj9LMUMo6zVkMeCofi8zvSaQWTPbsgWp9Xh2BstZHmwhmBPR",
  "key26": "3xeAr69broPJY5UevJ7PjCrq4rTPmNpxCwmUi4nALpnv34Zti3H43CwP8jYDQxirYxKsASpcNa9bp4LZdxHFZsrR",
  "key27": "3KXpDsTKWgZ8eaXGjLo8k84ch48HsDtKhRadPgKgDfLNQDv8oxKU18Fz13zuGWiqYX23FTK2VeQBmpKK1UAi7bmE",
  "key28": "51G1gpQkSVcRicAPF8eHnRKmbr9jbMU6BsvPRq7rYCCxxJihCM9sGAXBEvEsjEnYrKeiuz6MYt6zpmtC16P4ScNA",
  "key29": "kZcpWjFaoNMr19g1wYP8VnT5WHFXyA4s1ko36riyBNxjWurhYwEfhnVFVFHRiVLYhN1NyXxxnW2YCdgVE2tsUdd",
  "key30": "2tSCrYvoSmogkjyy5AhAo5ih4L4beVf8gezjNP6cvhC4UaKJsT7bPE8NTbfNQ3DHyKuWNpko1CWrNQEdtRjsXKAm",
  "key31": "p9Tz7dZSG3vRzuTorErgySva49YxRzMjPVfZ4voX2mYoLvJmMnWKFSnULEd4C6ct8QVhbVe6p7R9Z1fUVcZtBpb",
  "key32": "a7Qaqu5HbYHRvkmFnDvzicSZ1qtXqQEPzKUt881VU9q9NfTALBfv4qYs9vZPPtydFfvdMPvfRbhRyjAmfF3pSqy",
  "key33": "2Z1dcgVWd5eGNFfknZu2Z1BksvjaiYLS7bExyznCdWn8QzVH1nX2sf3zeEHUDQBXCPhhX5vkotb2VtE35ejsvxRc",
  "key34": "4ZpwGahxQCyGsdSRCGoSW9GiJ4AB1KRbdVPxSuNQZoGHyKtomncL9tTExmxxDmX2hzMCuXN8tMaqX4R9S6AJ4aPU"
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
