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
    "5kxVUPYvtmn9S6LsXViKUHU5NW46UPBSL1AivGY7d6WTpCoehTx9ujDFVZ8c9iAk16MEe7PxHhv7y9HEzaWEXBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rGTxVtsxrXrwbZbDzhL19RYM9wgM2FvwK7TQPGWMDzKYZ5wSpCT247AArFkfWdWfnC66qo7wPxtRFvgZbqocWiE",
  "key1": "28ea12baQck9jwTiEyx9aF592Ghsp1vu8gLuPjdup795LeY9ATbcoBz8qrTaExVmcJ4FVzr5g2GYnewRLEnUmVAx",
  "key2": "3mE27CMjmxmMmEbN1QzW9bJ5cDyoYpAczQdpERk9Wa4F6dAmh8cjyqAs7GDK88LLiXtBwf1qFBYWd8vHEYBfYcwG",
  "key3": "4rKPC6SgJtF5JmA4pXxzJEQoB3p7Z2BJ8j9YXv4oyE2g9tCrqkz5CZZyK7sHw72DhrRUhQ8TdvSvJE4dinnWBb5T",
  "key4": "5axrDDnNYo2uY4qdYoNNgnxVxvwBmApxnp2jwoWzbDW3wmmPDJKAHDxcShAvquv2AnYacaLSz8eAdRoxiXRrWATf",
  "key5": "3Qnpv4G4Nk1vvfGJdzaWVze22swkURmCBtqgnRHXrR2fmcfrDLXBsUomTYicUkjJWNZ3s2hZGoyL4Ua9hGfbY1Jg",
  "key6": "AhTkjZcp7HHEQqcjmZmzvkM1YYiBBmmEq1SMVy1bQaNu64GYNgAGpMrRVdubEFApZgP2QN2yyiQaeuPvZ8NhJpE",
  "key7": "5JK9KFCWgn34VjUhWgQTwjMWpnGdXJ3Tm3DGCD8Ws7p26qQh3vurrxKSvGEJP4DQfH9V19WjRBgoV4ReZcLYe5JX",
  "key8": "5fyWCKXdXj1HX9HXTm89zXKtN3oEa3y6wzaQWSendbjqWiUWawzE1dRAQFSSkYueZm6w75CUnG3gaUJz7DfDxQ9t",
  "key9": "2vASB3G7LgCaNj5Z33p74Wb9MPhpEF7sijWQiGq9b1y3MvVQR6fQ5dR5ZuMdbyaG4r1frJfTD4VkzsyTqkq5FM3K",
  "key10": "5QLZDmJ9rCWfVwfgTRDZufWfHoidJDzKZjWjCfQAmBi1Sv1ahZfDZxgEeFHgnRPvcjFCnEJsMcSqqNjpvwvjTQXm",
  "key11": "3vEWSWk9XNDXcghpP2KbERNjUXmJAFGtn6eKp5x8n9Sf4hyzhJx8HPYqS3gnrdn87fy9R5dQHxbHRVHSTYph2bsH",
  "key12": "5pfTjMJXorafNhuzVuowx8HwYXY4ChBda8iLdgd1JoTkj8veeXZB697M9nAaaJC5zJdJjcmy3r9g3mXRedt16imS",
  "key13": "2UTZeNYF6c89uF2rdRYnbcovofVbTeDtHGTHLBaZzabWkcz423D5EgPWf1zSW7twUwXWocYyJ9fRBRKKfwEwx9f6",
  "key14": "4Zi7YyM5ov4JBb2T4Yfyrkqq2N8PdYp7EQXNZ8BVasbpyLt9GFQRij7g9ijLAQs9jXoUhwc6sUcvg4iuBiK1Nn5M",
  "key15": "22ASnCxWnDPYqDvbEEtk3P8d6DK9YBTRbGEhpx97wMBR2tVvEUBDXj1ZWrfF9YMJFCWpTXV93PHY7QYz3CM2Fo86",
  "key16": "5XwBNYnA6N2hviUSVquXRqP6rpq1scfTe3QXqsVMFcZ2mn7HdkVqvuY1qM84e6YQuSUQ6CyzWxSVqnvvuMdDAfYL",
  "key17": "5oeazUcNGydUvm1NFgCRb7Q2YnLM4Wo34VQv7vvKb8zavxGS6Enq37EteFfymccfyM7SYAu4Q1YKziaoTMYSjbuU",
  "key18": "323MAxj3SXJWgNN4269vmHzfJpaFEsH3gPKxdxmbBSJB5sMLZh1H9cDdHszER6wMZdkFZjFPKsWNAjWC8UYesA6J",
  "key19": "3Rr5dAD884yRiXpg95WdH9Q6cjG6mYj2Wpved1x1go6doqYssJZ8HC2VQMAMRZjRNNLEkz8vX7xc9ydWhFwCPS8s",
  "key20": "5Lnv359k3c5pt2y8TZm1jKmN19xBGctW4Gc7FP4GDGPVNz3ihDUR8jZAmeGyPnahxp3qaocVMaBVnruDhQid1vrY",
  "key21": "3TpSEiHffFprWFMhPvNEYNYRBgkQ7Ea8JrgicEYDxib4WKXukL4mBdLrmXKcYaX53jeDE2PpFHNfoU3AyoM4ybs",
  "key22": "vaxLYtrycjRXcLZbf9rGEUGMC3Cp3TiFQrB9SSditd7c4wt5qDzzgJzhnbGeGzrZ8DQYL4yLgHnGuGifAS2JnXZ",
  "key23": "42G2XELcMo3dy5HQ9PAHL5P6P9QEzQTazbWByWhXWCcMt4RKNTA2NojivP6JzkyDabqdC7KSu7yLT1DpyjcWyofd",
  "key24": "278WyVuaxeibyAiPkyGhGD3bMmDwXa9Ai5wi97hATBjW6FFrhYqKk7Dup44wojmRrXBoKtTCaeRiQG95F9oTYLJ4",
  "key25": "3YQwxM1KAynVbUzWBwCYn19PbZ8WTsbZtcodP5RQVeux1fb5oJ2CdgGDac3pe8ymXA9jxdtQURbMPTQDVA6A8hqk",
  "key26": "3ruq2xohZBb16qurYTLf5iUGPThbfSXgpfpnCAsAWemVJ43hpJXT5qPw2qVp2At4T4ZHL5CPjVvnwvS8FqHrFN1E",
  "key27": "bZphgwf6FZMBYxHsUTNJzRffwFo8hv7E6n63wBWbDGCxEpoo8WtkexJCkUsWJTo8zGKUVojTLx7eVvNvXn6xtV3",
  "key28": "5VhzqGSmprhabXtxnm8fEsiYjyPTn6Wf9LMN7vC9nJAP6sqXyrejii1d9PBkjscyJPpAZeKWqY9TybiWrMw7MPG7",
  "key29": "5nYoAiDrfo2ZZ3vzL4BQFSSx1V4xdedi1wTA6zDCtQFcr9WqNbZoKqioDvTvjRMmFdRo2ab5p4SBmnRWy6VhjHx9",
  "key30": "21Uiksjwhz3YYgYy6gkvZu8xSMyakr6qed8fKXW3oiqxyrhrz6tM7VEFX3mhyyMosXFvJmXZCC942dA2HkqqV7fe",
  "key31": "5TMVAJXM1QhMnRCjzgCvMhmjXxTfDm9F44c357sjPur4dD2GvFHveB6SwXGWiVPfYtHjSeLjQwZtrj4kDpmjw3Ft",
  "key32": "29hny85ZTnrCL8xZyjLMWRJRn1Qk2Ad1SAbJdb9WTxGLJdZMVv2vRFPf7P354DvRQCh2v4uhDibd1fZytq9q6ace",
  "key33": "44NMV8aRoiuAnKit1x4JnxhyKnySfsXdSx7yYkqjwscQSeovv91V2veNW9FoAudJHE6GitJYAQM9gDcUCVDSWGsW",
  "key34": "2H81BWugoGTeBDsPjV8c8SL6TdCwq8az3Ruj52Z1xmP6myUiEj255rGaNj2kpFa2AAPCa9f8WFKTitt69Eb6ch98",
  "key35": "S2FxyNSNGM26T3GY5Zb9T4xiAdYpWifRM4qKC57GvJD8VnJJUDFVRaZ2noggFdX5TE8FZuZYtYc4uKNwftk9MLM",
  "key36": "2z6a9MxJ2cE2xsWKoJzJ9tTcPSnSrspXceBwRJrRxu3hgj2gPe2M9Em6VxGiQXL8oFsFekZep4ffnQYub8jZNvVr",
  "key37": "3xg2gP3JUT7FiLEeZFVPwtnaSbxLiMyxsoPJqRVsqt5nzXn5ZRjSvPf17pwXaZ3dS5Liuw2HZhrZ6sPKqexuxUYT",
  "key38": "5mLrKm6KB8wj29ww5qKk4FwY1Ev3oyNdGtWxhprRfK28LBTfF7dSVyjMP11mVyXyT3am3ovRtJFL855yc5um3RKe",
  "key39": "5fsD1AnXRF3Sxh7eZL5QGjnDAjrotAYxRPXNqZffCgcvxL63yqeHzfvAPzVcudGfCyKUPGkwH5oxAfdW128NegGB",
  "key40": "51sUypgmSn5UFvM5J6zrdxqNmDRmzgi5KA5uWU6QR1Z1YdJtRNidxN8C3VAmXJeZAZNp5Hbhw1QtCnMVHz6VfV5t",
  "key41": "2CfcFo1k41kZuZCVGYQvB7kZRvhTeeNBdhGMjVMMsrExUMTP8vH64rwEqRB7XkCGnti7TYbo5XxE8ZTgQQhXg1tR",
  "key42": "4xYd9ZEs4XpqUpWSgUJW2eK3Pn46LZLbSzbPKqExVnsMDJqwz7q554xV6EeGocf6wsYq3hgx7GKcC2chnFPwkfMV",
  "key43": "cscGio7TfCBy2XCKNo3YhcnAkpKaHVZUaxbbsPB8YManDrZcprv3zYmmsErVQ25MWw8Lon6D8gf1xiUYYBqNvLd"
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
