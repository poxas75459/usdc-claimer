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
    "271crXe1FSjxxG9TQhUhZ8uiLrxQGYcZdD1uM8idHvxk3yrDyMuTH2Nbw1KwdAcJpNPVXajzVzwJAzbcM3uGxhKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GYCq9NSGDYfFTpvfJiRZPQXM9tAhabxEkqtWFAQvZpmmixNM61GFWtVLEJm8RLtJKq9pMUdiHRbahvSMtDjGpw6",
  "key1": "4Uvt8X2v3csaJMhYBExaULpAn2Cos2r5NWygkwdsiyRP4odWAPFU5MFXWjRn3fnHKyfXyvTUuwLXrEyau5Emcj3m",
  "key2": "5NTPkPGKhYpeJYSAutWHhaDzM9DT17j2jP1h2vdnuixjnuVF4CogCR9MYs4zMDbSzMYHHb8Qx4kv5b3KLUsfrbvE",
  "key3": "4aK4saP6thprcdZ8mGz1etM1y5sBS9fFttcMN76GwB8rppqYtYbxXTaumjrjRJjp5ycrwhGttmdVEzrzgjZFTSZF",
  "key4": "2yqnnAk51siLi4RUeZp2pDrQ4EV7EGwokufng45aXwr2xR2q7x3UPZo2hvxMtN84gAYmV5YDZ2GWCr5d4c19nTw5",
  "key5": "PiCctt4ARypQnfMvkg1z93hNiapEdqFjBC2eQEv2oznWsaddT8Uwne1LZR9n8FhPtooxTB7g5rtdY9bGKELKRqq",
  "key6": "56P1Wz4B9ixQRpbhgfSrTiXKsw6ibYdjyDVbnpgisLSP67u2BijiFNoA5RtVLR1VFomMFDjE2YXv7ejhgXL9UTPL",
  "key7": "4BZhcKWoMegFVtjP68sAcvxAjAEVKL7jtEP5wq6wgLfYwmpk3PaDNeRGyWRp79YHDkYEJnVGk6EQv8KGfuSY3mPp",
  "key8": "3M1XtPHNRa8GmPiYkddQNAmwVX1hw61KFjeZbzdr14mae2QHBWzWTsbfgWKeGaSh9FyLorf28f9E5GmSEMgJAszv",
  "key9": "31jmGjS7Kg3PDg4RzfbMHU5XinhE9Knt4HPT7EnhrVdd1MzC1SAiSmYEAQciNL7CaEPWy5PYm44koc4ZcfREt71y",
  "key10": "qu4ycmzmwBmBcpnvHcrGneV87FDYUEXDh6yWCp2F45ZJekpnk8jMnMouESsaCSJjdee7289hgLNvwjQMqXzbyxX",
  "key11": "yxFuA1bS6qmLdiGfQns85NZxozCvRD2NpyQ8ZUYaMNXFJWvxuCZ9RJs5QRjXtxUD5ZQ4xqNW1TerEzZXicJ2tGu",
  "key12": "3YC9z6xTh89myZ4fVrWLfZpZQqE27BoLDNh18qJmdvXgjanMDDQcivwYp9LZLs3T37qJ3Lfz3j9Y1GDEn4wkahrc",
  "key13": "4vDH7fSUBfhVbYvC4e7xihSgEs26afhPhMtzrLHyaza2Cfm68Rtt6B1Ya37sY6NJ87DAebwAaQDTx4A1J2xpqqgV",
  "key14": "471499GLw5mt2GzD4v4VsWRd91ZNVLzRyUDF2JmC7r3xhSuKjpd88fUjGwkkw14FzsvR6jwUJxtVjFYwiK8c7Du1",
  "key15": "32UttrNMbpbwk1SEq4e4R66mGZA9DWQyuvMmyzzpL1sM2rm9wTzouq9BKtavbTwCmPttppnYmdKNAmXbt2FvgCvL",
  "key16": "4SBMnfv3eXCmMkacLE4pCgSfaDJH2FUv5J7e5eeEyENoSP5TXQRjgdfKWVjE1M5PUNX3b3MGQtVKfCagQWfJ4LC2",
  "key17": "xsRDfNpgSNX8A5BRpzPvPhJJopPqM3VzhWErymsAUsdXKchNL9kxnsNaHM4DWVh9qEWDuHaTT3vutcEtY6vryFu",
  "key18": "36YY5q21Lt2JPbaijbrhSpCCe5Veo1DxdE2GB4c8ksFsgXYrNQB5XovKfvf4B1GicCYdX8sgaPMw4AUDx47fPMbw",
  "key19": "5iKsdBn5KULaaFmTUEu2fEo6K4mwB6pib3Yh9shPMSs2kLCBAH2LznqoA4R4CkctdityXWs7ELe3oki8dtbNMMj7",
  "key20": "wFPWkae6v2SoCZVB1pUfTEug4YS1zZ43jtmeYgKppwe4h4vTadfZUBL59V8YF2BZiibBao6UKSKSqdebQenMX8Z",
  "key21": "yEFLLfQqzT5dKdRwQncQPjzhSxMze5ohGs6XnAk8ocuyigz4SMLPB4AwrN3t97UxuQtXE4x4VMjewKGpWRgFMWk",
  "key22": "z8LRMzdDhB9g2eniECC8jUA1A6bWU54Ncxmf2qKhB2awVpkrpYoAHPtAXo9tKusja8uQrsf6KngGQzZfKbtzJS1",
  "key23": "cciTj6WeWsQ7A8fYsotWCf8oF7BSB5vUCaxWLiymjTmr2L2vosp9hjX7gskiePrECsD6hqeuYdrB87FKZ3JtpRv",
  "key24": "5HkKYqGABmG3VBkf17ecpWNfPsiPVc1q3emKyZNFztQKmuzWbwLATa6LkgaP3hc9MYvdSujcPqvusW7wKyH4p3sr",
  "key25": "2dcYAiYzK121WnNBZXXP78k1pZkhMKpZHPFnLeQgRfGQYqdNj2zf6kwEDSEiGwqSoKynzyZQApSjRYwyEeQKwrxE",
  "key26": "4Gcn3a6irLBC5oZ2zZnwTmWGjBhEuJeNRwFnJRqHb9uY8zAx82S4n6zN4pkcfdqP7MUs5DqCdhJpiyF8hQ1xfjRZ",
  "key27": "3M74B2xx92yubm94MQJKhfZe6WMFohpDYSqxTARcnT2LnJpCE3afEbvcaLf9zHtYbMv3jaQzm6PJQdXsvxhW2cLy",
  "key28": "43wAGS4QwkHxAbF41hcRgeAHbHQmrqxjDAM4roDs5cLBWK2jQ8ViPs4jkRFJxsfyp7183Ne3vvjwHj9595adYazQ",
  "key29": "5Y1v7n8cNmZ6QfMsrDRAWbJtgwST3mX2xRoLVzWg7HSMap1a59BGDsDxi8nQgxuKuPZvHzxttoGFb3DTXgz5SDME",
  "key30": "3uUGa17bJANZK5KDvC9Nr7Na4XPdh1kUQy2nkV3cVckvtT39MvtdCApXcGZ9iQbgkHbnFCGSeS94GGpKFyaQGTPE"
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
