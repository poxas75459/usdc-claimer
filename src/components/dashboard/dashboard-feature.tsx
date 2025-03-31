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
    "jseAHTNAFCcjPKnjU5UnHTYP94gj6Nz4MBhb2YvtKsTuZqYUsCQbZdS16dtTNE297ztcqGRuBz2EtJcZuV7PxHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52R2eXgsBD4tMvgEMMc8VXqEa7aMDRDCb2GxdeRTaeE2XuAN4D5DctW1RRdJa18XxYuHEP39KXtV8xkxPRd3Xqhq",
  "key1": "23w7TaULCLRdXJ7rsLCdzVXNvfpWwdKsT8KdyH657gmYjFb7A7R7S7KmeLQ6ZB8WHahGM3LXhjLoEMqZs13R8CBs",
  "key2": "27nEodjKzWTyThqomNggtLhzi9ZcVe8faW3gzwhzUNJPAjUBb9gPas2YcmrMwJR2opHCS7BnHSLsSKr6U47nV9vW",
  "key3": "2NUmabENXECU2j1Dtb4Ax6R3LgNSk7mAGv1xTQT1QEQBJpGgbmHxscP8LLJJjv4AW1ZwE5nYNKnVzaiXTaZWRs1a",
  "key4": "5dTS7W11nuExv7f88JP8L892FEpznaHMLsJQai8t1cMiCyaEXRfCkh6hPvhu7TBsmgPGkq2GYz7C3VHmLhfF8TQw",
  "key5": "4CMW34XPH4eMjrayAaGDrSmT5brKDs4MvoGXVjA644tT3UyJTyt6r54vnNFqDHYXMCmXfCLv5m9NcXQxLeZdJem",
  "key6": "569SHnt6JwhQHZ2c5x3GmjHXFeguRnuW21AnjSV2W8T4cXQNV2KA8Nx6sTFWnJazagVyZwyzN5p3qfo3k7UUYEBJ",
  "key7": "31iCMdAKNT5afLs9zHDb7RkM1DUG3pxwPkCbG7tQkCXUkLAH9JFgdUNsbdz2kLGEfoFXfVcFkE9yZnu8hzqTeFP7",
  "key8": "4mHVx7bcGpESMm68KH3noCcHQruiYvSLMC2QasoiEf8WH4VGafGuVN2wUsaR34ZR9yPwSH5xzR9kRE6wu9ZH9dLP",
  "key9": "yFUy7MPhayfyexNCuseGZBLux76etWcSaAzXRgPr44RfUiaWURTFdHhjjCZtwnemPt1KeiRedHoMxa5qyr8BwJU",
  "key10": "5TMisdBqh13wwoqx2ytnnVE4mqEcbciVCt2JVnqwvhENsYNJ1AtDvqCCPCoUpyEnHtoz9eMTquaWBH3Tewnobs8c",
  "key11": "3cYfcaiem3nAcP7aYxCzWxEFURDQ7MvKqCj8zSutNXfQkzouDxyHrg73JLD73kxCJ7ShSVi4yHsFFfu1wsKbc2vs",
  "key12": "4e3WXrmEePXuEH7xwEoS4EpnhAneAXiKUsffFKiPso9yDwgAuZCFZ8cJ5j8SFYtEexMwpcQREPmeAc22NXCoXSfu",
  "key13": "4xsLTsd2CAtu3rvHrpguppFRwMTi1L7H6yVrruEXVkiAXJy8rcZ5MKoiWbQQFTZk3jC77RXwaRm5K5TGLLQKzd6E",
  "key14": "4H8t9nPPb3ueiHvZV1ZVjXgNS4sXqZByV4C2ZzND3jqkyhqPWsVuLYDrmiemHQ5JKMwZ4bTnvkMN8b2pFoseL5Nv",
  "key15": "5LqmencWEWpEMmriJkzsRjWdA4iq2hPuRReDuuZYHRLCjBKVensHWkC6ps232n4X6CdhPrtD24Cev2ZZDJ42RxYs",
  "key16": "6wsLP5a2Lr42giR6d3GTVGLKX8HbcWT59AiaiZzpxqdhLniPnf1u77uWRMZPqKWttr89YTsA5XpTceN4W2sMkCu",
  "key17": "5LYTd6csXiVjshNnedfYm5r7WfdmUFRZK8G3EM1LDSZ1uZrcaMqPYT1E2n2fUvqXR5vP79NvvEpvhe8w3NYPfKBy",
  "key18": "4f7s6fU458dyW77Mhy2g78BX2T31KdFRyLv8wFHnyqMAgUTyzHfRfHjS5hrtVQWACoZK3TkCb6EdipLa5fxRgARt",
  "key19": "4PoZiCshewZEwXx3St5gSYyucJ2Ju45AWx5jqVieWt177gYyurnQhftoLGBvHLkdC9XHHtBgZ3UevXHVUQnfMMWm",
  "key20": "3gDstfFMA4qmxJ7q35DoRgzLpPAnU5ETY8WiTS3LDAxQBkSXHNgP5yC4etwH1P5GNhedtemiSbRXy8yaDj8oFDRK",
  "key21": "2qPSSZf3PWaRffD9bUhjsU2UMYi79DBY11M4NEmvtVoQpA8CikVWtM3WqbiMxdkibsHwiArQ8dy2WbspA1Aa5WGC",
  "key22": "5DB727NuydVkrVbrUfu2QopQkiE1qGPSHagDDcxbcH9LnSH1f1zSP6wKFjYMkf7LLk5iTwmd5q55PesiBvtJa2eW",
  "key23": "2p4HmHDjktvgbMES349bhQGzTw6Hp8YSVjuYkjdnnQAQTw6BBW4qUgbsokQ7Zx8pxoRpF3QXs8GJG9dkC7n3tzB6",
  "key24": "2A2TZiaiXf3NKPqMt7eyFGdKwQJCESsAn1JbGbEHYR3AYjqKoNu63oRCjstRERz5HrbMCSDVs4mCFF1Pa6nw8DCD",
  "key25": "53xyh6voz9NRyNc6zCsGDkoJuEcFWMJ6haJHL81yhQ3ncTPY8G4eymb4RJkWZpqLaD2rEqrUacZQz3UDjv3hYGHV",
  "key26": "247P79nduTLiDvQpWvjt61Mb7XYN9Mi8dPHWfRRYFaoYiaedv6BVKX9aDRtgbDRrznPRi11twXYHzHP1b2VCBvHs",
  "key27": "2t4MTQJbVLSK9QGRveJfhgFsMsn7t8EbPfiFZ2DKcLF5ZZzxQHR9pSA7brtRRH5VUVUr5PXGZuGo8jDqPYN53Mdk",
  "key28": "EsjjQP6sCab9ZdNNof71eFtxK9P3RFKnuG15eRzLUw2FKFbTaAiDZipEcChKeS7PsXZVT8uDKd9ptz1pHxG4cLs",
  "key29": "XMtosH9DzzTmKvRBQjZNUA9sYDrmChKqyJvJv28teV1Wy3ZKQmdjYFViFpqbrCsqvYQcJsgjvAkyNnXQYVJ9fE7",
  "key30": "5sRoM4EfURbvZ42wrtZ2eMHqyYWkmdWgykzkNftbUJtqcfSPhEzvDtLBKXPNG5aYpXm48VuYaDZ899iy3Leoo5i"
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
