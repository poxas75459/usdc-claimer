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
    "bRnMPvhV2xCSZuZ3MitpDyLU3abzBdu7HYZK9GuEWkJYWPPWpwMpjPbEqfQfGfNAj9dCiFBchG9Cgb1kTMGARqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45mA7EWty99ZAi2w28R2zsWSUeXmSHQ6Aq6vDgF9UVbjZwXmD4ZuRnSG7ahQyFDNNGJKfUjB53xmYoangKfQiXpX",
  "key1": "64NrWH7WCdXckhLfhfknuVDQaWwWqS8kCcoanEgf7wkz7hMoZw334P6cugPHLMCCSqiAZyDNkEtuoD2GRdtki4fH",
  "key2": "sfQgwqBQQozpfac2MFcgu1bPVqWs7NKS6D8d8hQntqu8qEzVETeCah43B8c2DpY8NHzfp1ydSKPEtbnAHgpg3mD",
  "key3": "2E1h2Uc46bbEbQTTdyPWUHUQjMCxqHAHmDr1VghvfUFWUb2YgCEUEhALhQeieRLBSkTDwozXNDk27aViQQrtFyHu",
  "key4": "4knTa1qnHmensjsshHFZKQVpRi4RRkku4RB8ANforVCsGmBCzVmTH9Xbu5tU7H4WHeVYyPDqhm3gmRpnpuDdG6d6",
  "key5": "5wfikucMGU1d7XwS6DbqjTRz7qtN6mC17H1PzgAkGUFbKF5XTTBZEYk7Z5oZt7XKqVx5GNsTC259ba359bi4AbG6",
  "key6": "nf5m7ojD236Y3XBiGrWGj4678UhxymVkV4f8uW8T5yqAGp52TPmeCktk9B9tYPJi7VVSPQftJsUUfpaah72Ho2w",
  "key7": "5TZRKFvXSCGy4NjjvR1QPW5J8qLkWK9V7Ld2CA3syCjbu3tUAhUsr95SXYQD2sXfjPvcR2LNDsWhiVs2dReGkCxS",
  "key8": "4iiKbCuaZv41CYH1KLxMECNAHhM8Udae8FY5owvUpvKFyteYjTEjFdJCEw8ELLLyMRWr6xey49mHU8NA5BS5Zhez",
  "key9": "63XFAeYHMZ2gTHgpcDdZef5VhV7gikNk7ZftAkdEFj2XVQ8JjexR7KY2fNZec7WSov3DGCnLBvQSVNtXozuq9jkm",
  "key10": "4KRf7bfitcN7YjX8HDGhtZe4eVY5JY8Mr1fdM4QyQz7kJfFDJA7ey6kbA1jb2SrU33fVbMVKHyNM9ypBaxovSDhL",
  "key11": "X5iSmU9WB2bEMdBZSVVT9emgJSVrVDbSTVGCQwKwCyjRA9zA22999boQRGs8MY6GBQmQdh4Y7okcxnu6cmvcYMP",
  "key12": "3Gp2uBVXgHydtWBJ5nA4RTassmfSUFBDo7ktxMYT5YBrgMm7WPD4ztf8RMBEzBB2Xt4KcfDdgo1MMywN25y2g1RZ",
  "key13": "BZJiQT922j2WkvYiWxVXj1Wn1USge7QGMDEN5j1yLWYc9V2QkJ2VnAN6YU3gh7aVJ29r6XD8z18ZqH1iERTH1vt",
  "key14": "mBD4LNCrNf9vLTGBwJDDfC5zA5fFga82HTtfWhG8RCFBUGgjMRWFGMqaBJmb39Kow5zEGcnw88UNPFs3NSxzUkP",
  "key15": "365ejbM9cTqKdg3pHzDx638TzS89i87JQT2TbTwNkU3HARWa3Cix4kRHLJXd6GzMgFNBmutevvWXomT1c4SGK5Pi",
  "key16": "qxjfwumxn5YSV6tyUSzz4APzumqmMazsq5rSzNavxNcCsVgMCembfFYcmhs9EJJeekumKHijnRMYhr8bQgFBdF4",
  "key17": "2uSnribtv6pt3eHYpRqJwFdS499rg5L6ggHR4YjotTwJH7Jt9zjYTCqKtyysGk3TvwGqanSqKoTs75JYcnYGCm99",
  "key18": "567pCGZZgqhdyG8Yy8hrDfzHRkb2uom3WrGMg5Bp2We6TUiW6ApWGH8K4Au56JdTecuEuBrSGiDwDmQRcMwEHFTo",
  "key19": "4U1dDJYj9NgBw5nrb1NSLHorXs3sUdiWXVtt1omyuv1kfmCj6QEGSWS5ZeC1j3wfeor1U5JDNsZk7WugS47XTVMT",
  "key20": "3t8PGnQoupzh2idLQNhMbEBiokKvSs63jrgkBogAQw6mYHnuA9X4rUr8d8EGUUF6mjkzcwEh2wNGJEBVNYXd6Tmq",
  "key21": "3Q11NPehM4zQGLGhgNBYkkaehFVZLHFp8qvuWhJZw13GM6Wv1vFWAfLDkFjA9WRxgX7X6j6df5d1oMvT1vACu3vV",
  "key22": "4DbU55xGLB37A5PFcjgqH9us6qsKcaXj483ZzMvUqfSEGXSAreWPNBoiiD6h79xMYXPwVGHJ9cwJmMNv16xWh3i3",
  "key23": "2LqzD6UnbGvBzJ3sVmRgsZJQdmgS1CnWa6sTC3Rdo9osFJBAn5SUtLECTzGm7zGFDq9TfYtXx7NAefdQTgiuPzTo",
  "key24": "4f7oNLkQBehTiTU5RirJbAASka3qZKiscDpjChLdkxtub5BJZHHvpx2BKfyWSGUBgWrXHqTtYV553cn4SFp4t1R5",
  "key25": "4FbvfiR5cpkw4nhLaxuhGKJbAhryCxyhNvBKRSABQQQtQnPU5HnQHE7p1rwMcL8KDaJUi2T4s5ms8HtwA3aaKDea",
  "key26": "5Nc8YERRbAN7Tnm6KurrLefHTPZibP9d4k3Wd8BctboUsL6aHtmGp4eFkJhTN2CApLjkF9r5QtqE9ZxWgbVKze3c",
  "key27": "3RG1rDvQcHW3kWzM7UMNhTLXcq8fooP3g1PhkvHZPvGbyMtqPEyBFJsuXkmNeQPsxx38jCX2aiw2BqiVKdsJsDt3",
  "key28": "2QJMUzkEKD3GgSGpSkdN7QHsT6Y24zZwrbp2hfDn6y7rJx6GnXvwD3axUhBEsSraUjLmWh1QoSH9HunPkyAhSGrF",
  "key29": "XmBoPSFgaG3DxgHWKj39KUgXDNVesoSLLb3gxCoueCGZov6BXFGBDxZwtL51zbPTeydVXQpqzKNvbeRXBbm2s9e",
  "key30": "4aUNQTZLFsF9PrEfpxtRhjyUJBeDTWQMF65DM8vUQZ9sEM8t99HbCp9UR4YcJmNLaGCZterKE7q7eA2z2A6xbTro",
  "key31": "3GDEUHBjBGBk3qozfnM3rRzyr73xDRSZBGDSeR2Jv6bDRoYh7aoHT3KBAdyGZKrQDqTHyZjXiodVirzfBG3v4Su2",
  "key32": "4ZGeXb2b3ToBAE2ECGm4sbgynr2hswS46fHYUjdxLprP9yPaYvfnJEPL5BJqcaEy3p4wvxvXSeGSaMEvRFs72i49",
  "key33": "489pDcbrbZwqt3rPj7eZkzAXnkaZ8xVtaJSKeW62xxUeFBsdomYfdFUAb9SiR9Aj2GxGcL1k71ZnAZ8dKU9GACBp",
  "key34": "2N9CziFpLBh6jWSio2oMQCbjFVj2qcQJgm8HGb3KFT9AZKTuf1oFP9iuD83ejgkpzoANRbmesjUA79Dr2Jdh9fBz",
  "key35": "BP8Sd7TvZ9iKVhFztdUAietCs91cYAJrjG9bgBobEMRwbWHuxV6qaFF38SPs5XoSgWDZbQAtpkG24ke3bqJa5v7",
  "key36": "GNvzDoYwQhp3ySaNVfPavMLuBSRtZpPQWmRZyTJo3kNW5Mz4VXoSEtUMmMAyN8tuxXW4mPcmuUKq8cGAsrdr3JB",
  "key37": "GbyYn35fXjcjWckSuMVLU7LDwknYhtJQn5qMThcZEyaseipQnSiy4wmesVyetcfUGxhoJfPiePfnQnjFvkNm5Nx",
  "key38": "4GGpz43LUvdzjtQzQN9RukpyXTq1TPD3Rxxuvcs3kc6FEtMruzaHHa9GKJ8s93EdA42qiPYeGfduZpNaLAxMSEQz",
  "key39": "2VTfQeLpXe1tgA65wzMfzhawcTNu5e7iZZcZDxJb9GJPssWE77BGUua2Ldsh5KwETN3ghwAaLHtvEjz1R2FXPuRa",
  "key40": "57BwtjCBfaeTYGcvribiKgrueAvF5V475f6yQ3WebQPsP3GhYijZW7dp36cEvrApLNPgNX7omZJvWdBcSA7UM69R",
  "key41": "5PAVQYqM3ynxiBbpd1hGAC29mankacGWfWeCTK5W842iXkzqw7Y221uHs5FTV41xvaqh48npq6uvV6qSZvRCYeUr",
  "key42": "ase2imSdrPME3ocdvpbnrDH73b1EFcLbUh4EbQYKmGPTEGwoyNkQeAw3U6fQERdUCd289pDcQ8nULDK2drgafzb"
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
