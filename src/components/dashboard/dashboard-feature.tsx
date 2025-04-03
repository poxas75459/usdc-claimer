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
    "666phZubQ3jDsGUpxVAg1yGc46HQNDoLawwRcuberDymeNWZDy7iJB8FnsMeEhFLWTPgV2Kvu7DaMf4gyuwSF9A6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "APYyVAScgfuSU32UtyaG8rE8VibHYKwv9hBsrxv4ZpP7jg25DkEFGqQo3tYhVYt6prUD7tnq3aKeryFmiewkF8V",
  "key1": "2fWSFDSP8n6R5YxGck8Sy3pYGUuYFNEtZvLYeUMjfJhomoQEbxthsHBQCvkEoazBYgh2XwxnDTopcBvsbhYQx7NL",
  "key2": "JFLN19LrYCwmDgeUaghxErjHfQmXvd6hamAts6nrah5drfab9QHtViDZK4i3wrhumjmt2k82HSrK73vnApkDt2b",
  "key3": "4S2njBQeFTra5ThzQK9TAFirDA1B3chUZ7L7L3pWZY5dfouPupXrJW7RTVYZkhmYjd5ZTpYHFJGg95Ne4tDTz81g",
  "key4": "3dCaL7YrHsxZ6muSo4sdGAuq5oSG8odTbYuX5ZB78UMP9LGRCg6fgW9tGJZp53UHy4kZnuGTJ8kuQPxQas7iffL6",
  "key5": "2S4mRoa2nCx3GGooazH94663kzzKLnjPK3DQMS9XfD6zvAwqXBzLSWMH261LGXcAV84nTiU2e43Seb9y8xCcE398",
  "key6": "5eoRV2cKs1M6eR3FJJTNY2wZ4rYjZ2BrPgPGw3rXiNDdEqDFjZAWjNJB6NVF1QiH4DsqHTSZwtggp2EgDwynyNRN",
  "key7": "4ndqFCX599edor1mX6xRjQv8iisc45Bok62EdpSb7e6PNvgv3dM839s6Z3bzJbR5vaiu9HT1agsFVeFYWZNRhUd8",
  "key8": "5mbULNKB9LTg171CVBnJjDffHVD3o9bC4rUBrgftSqgSyooJQjCVHzZF4TCSHix1ak6BMKS6kF3N4xGc8tD1oGna",
  "key9": "4UYHfRWeaaZJ6GdMQeWQrQEpue4B1qi2pQxaagNHDrrd1a5ZczXNxeFJ4qK3iwTGt3y86t9cfNaFHtkErDrvq92f",
  "key10": "48QagZjiMjVKfbj1CC6gBPgy3mP4TbkKtFcdstZJk9cEviMrVHJ9PF4TVV6gmRYK1nW7EbCg6rUcFSTmmJaCidHo",
  "key11": "2wV6WhDxjrefu8oiHhWGJoctiyvvV2zvRs7PPhk6ACFgA4J5XxHeyRzGMG7SyPkAHfZJUdovsQpZU7K4g2QyUrRC",
  "key12": "5c4K9mfwFWoLiV2wSmxEcC1eo6KS5J9w12bM7SFCVsUTgjrTmDNpUeZjGjj1bfj5Kd4UN3xr9Mnh6HGYtVvzAJSY",
  "key13": "24VxLUVjTpq5gFJRbcyVc2gBUYBm1R1snVQqTK6SKrXm2tkQ6ThDwRNPgHVvCi34KDaP6opNc11LFd7dfXC4nMct",
  "key14": "3pfSNDMGTaHgWtNTeWeA7Z4o2gfs11KUxcJ8n2S19BPfpDV9Vas8arCumWE9Fv6KQqVYwnxNcav9U7RT3fJai4KC",
  "key15": "4jcP97RB1DqiNPejb2UDMCvPBSucucNYQqeHezye9ZqDPtrxWoZcDerkPircQWMns2GhfhhwyYQGNhAEUwZo9e5D",
  "key16": "2fGqBVGMytewe5tfohwSjhWwPdyzrSh2znHe2KCESb37pa1w9iBp6ZxFXMRoyWZFnp7tjb5d8HErKcrvKSaWwFBL",
  "key17": "Xfkwph7ZkvuiW8ZEcd4H1B16K4hn9dp18SLodtSawVQ5foG4XxawF9Z3fWjeZFtzve4hhbkfMh9cWtxjpAituuU",
  "key18": "4vC9uGvqenHZbCgm5ZiCqKC1tSRkwo4XV5v1AMTdKGjMAEYkvJf2SezCBcrz8kUdCPubAVNoEiNAm12WygfgwNNB",
  "key19": "5QeJW3oLKpRUtVj5hWHoHDoHEv4iTUH5dwhTtZWMjoLpJFzDR9SVXaAdns9eaEyJ7dh5xQRdxeXBzbSYyqMMgyA2",
  "key20": "q3HM8WhY36prrAJDeCaG5oCJF5o1zL29NP9DZWW8YfTMimCBBtbJ8KRdkDxJ8j5YuP2emg8FDGon7ohqb6dKNWT",
  "key21": "3Msj5cKhVxayhxne33qmv7e2ULQGz9B1vZMTVhDmNUcgEQuPXyXVSrGwsGnYBwFeMxmTuAZsgdhuzK72yCVhrApN",
  "key22": "4jRzyoChQcKHiq6mz5tW1QmRf7pmV4qkpt7W25FpCYe6UwppJufeHjdSZfaaCgycn83BUC2rK6aaQLwM57LovNS1",
  "key23": "vGo8UH7mJghXZpyvW7TRcyUt2k76vmDzdkLKhSqjGjQzfyJ9qmdVgtaQV1jMN53Vx1QkkA2yJP9hcXTseuiqVH3",
  "key24": "2AQZoadYPR6pSbktJw1pXxNksQcxkeHTHcBHCPovXPmkJMQT4my7uT1ibSxR2mRgM7FviPeP4nsftZRjMiAtJeDE",
  "key25": "a6jUhURUovMutf4MUujB2xMJSA8oCGsez1pFHspMctJmKhE7rTV88jyF4UHAdyQP3dwWgWWsmRQyw3qnC8ZF2Xp",
  "key26": "2NU3VLYHKqBQKyQCL3GWTpQSvwVk96dd3LNfXn4NCSEVeLNSaGpTu2fpEJUrGDsGZVzbKwypHypMUkDfRgwNUMaj",
  "key27": "EyVsQ27SRiqKxSomGMLQUMkq9H94J8NwKFKdUHWitMbNz7sK8pDftKJ3Jcd7MhN9omjVY7sSVZ7s4Qe9tqnnRRq",
  "key28": "26woq9sdZYpZ6jHBNhgojwTsrcPWPZ64AtFJy2chnLZAYUKFg3zg4epoQVdY1XoPFuG23zDwE9s8njHrn1Qeygap",
  "key29": "TmMaXaPagh3KJkg9aopcsZZp1awwExg7VJNePSNZ5wRR1L4jJ3YiBKSH2uTNQfP8o5SiVZe2Ln4TnyqtWGnowR4",
  "key30": "5LcWEnz2bAvYaCmcGEZCYhVGJjKRkbJeFTYKqV7vEvwCy6B4w1T8apoCd74H99KavVQn1HDc2ZaHHpttXQXyyhNC"
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
