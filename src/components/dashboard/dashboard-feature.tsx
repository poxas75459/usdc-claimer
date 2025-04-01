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
    "5LrqqEEcZdrE19fvvaLpk9VcdzUCfzFQCsi7dDsEjqg3SK4k2Fr38xHbJ2L4pGjYLz3vZdMFqdm8DkAU4SjP5kFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EMdn4uv5emo7ZZ2xcQr2iDHmfRhP7WpiVKUejmGX6BYCKwHA5fGfZYaABzSTjewjVm8335ESjc6qCxBX8qjWNzF",
  "key1": "47pkiKd6QD6LyDUcTN6k9Fiaphk5zTDYteDeC32yGb7Q8WbPCyLiSh8ab1DkDPt4UNHJWNB7HEN5h7tcLsTY1PwX",
  "key2": "Xpv7mmT5LVL6ZCehmPKKuvgXDXYmU3r1RbPJt2y4KdcpE1pHGsGHEPvjYZ18tHSUdyvYtZr4wLp8yU3bukQ2ea8",
  "key3": "4HSqUx4CHSe6K96r89Dc7p1wZKen6JWWZ4jCyFjeffyRPBs1UuW5on2jDBmnWx24xCJazeTw3hWRU3GHo7Fb9gB5",
  "key4": "2scq8hnrfPHVB4G4bGBZZa8ewSs3pxEMtoFWU182prVMTpHFbJTYxTxeW3ReyYvg6o1iwPwvHjpgwuezD59Bh51v",
  "key5": "49CMtKpJY3xHMYSxJusPnorFMtfgQB7PGArYnrEXZqRWqCphrkEmXiivSFFdPN9D7QtrkPvkUkFv6jHn8A3z2XGR",
  "key6": "4kCPWG9Qi5ULg5keaUdndj5pU3kwM8h3N9nc5nXfHREf1wu2Z8F5yXjUjbHxrwg1jYZ9bNEn5NA25MmX3YV6fSHQ",
  "key7": "3Phc65iKqAZRC9XTNq9zpp8mwiKrzsmbN8y7PKx2QB25FhXsYAGMcHRv8VA2fCyfvJHf8ud1dAQtXtBNzWjP1a9u",
  "key8": "wV93RX7YBryezRn64DHRcuHfn6Wu3pL6fRdaiL7puc5nNDUBKpWSKgSYaFApWjLyJGTbTdoydZ1zodnVPoQPPx3",
  "key9": "36qV14uhaNJeKAnxCz4HLsHeHXMRcAygPWBP9z5pv9YgrTiTWq1yrr1t46P4jKHrbCL1j2op737sgVnGdYG126yd",
  "key10": "5tVuLT3r2wfHzrknmbCXNSyLgEXGmZ4K97ugMSyeFEXNgdy6YJngnb31XRfx7zwYegTRL2UzBTFJDzLUES7hSCFB",
  "key11": "5EnyuRDMG679hCWfQYSAbbMAheuA2qLKSuK1TKNmg3QKE6gZuoy8DTBYUaxHfKjpsqQ8LMJ84oPUBDSHiM8nFrwa",
  "key12": "3dUgdcfoHszKCuC6q5ZbVKupdBXiPYca5BnKB5fcPWRV9r1orukVdyow93B81NP8rYo2grRWjzvwrXTbRY4sHCmR",
  "key13": "bTrh6pKFJdJmpWLRBZuvZD1eCHmTmBZE6ZRL6JkFVnuAXJVNhZm8DiaJDyafXvvALVbrYXVu8jzwmxaJJ1Ax5iN",
  "key14": "3eFie9eXdDYcBEZVRLd8HTbgbSJ9ZZ4kmwzvRrsBUMEtAxcea2xY2J7kAFCV7shnJXjxi5pNeBdHR4cZos1e2esr",
  "key15": "FAUb5KLPhf7LDGhWpZkRnxQBr8vDfNWc8sMJfWUoJmpcymrbTqkYWdc5pf5E2FDD6zMGATJG6DJkHdeN1NmvEUC",
  "key16": "3GDC1dQ9r4DjxUfkzMYEmbpvTkDoSJ24mrgisanAKqh6Nu1tfkuPHwfHMEkP8N2moPjZP8Eb5JsAxwNAQifVJ3im",
  "key17": "h2DLdhcDbj3hdPgSZbkTLtX4aFZoMWbq9r5yPfzVNfXViCGveXxtCCERpR9JXo7MaVMfanxnoYWcncG5NWAnrUi",
  "key18": "4i76r6LAF6qcqNpBd34VyoeFsVTdiEbCEEZgyHGvTymGwnnLPz4kcVfCHN2G6FF68iB6aUaEUE8XHCEse8Ms5fVf",
  "key19": "476jb243ZLbRtWG63VV3HeM6UYFMFFBr5ZNvmG3kVN25znmzgcHF1xyG2AS6rKcBpVAkvJVeX67ecSSvHnSZWosa",
  "key20": "5dkzffx6B2j962vNDL6qiNiGM2HcbDjK719WfsNtzCjLnneb5pNsCPGCaHxCtg8m2gDurLncHpCE4asB1F4sRSUk",
  "key21": "3ZPZYPZieCjkqYdiEbv6mCzjqH4axbaVKkdgYjn17QxS8SrUDgaSuDNKu4qHhWh8zVpV6PyLBaeGLfp9YGD4obJo",
  "key22": "3eUeqoPeRaaLQXx6ToeEg32GxtK2vHkaxs2LrCUPiSConANbcQS2jit5wNRzc3Q1yATd8SVDWrJaYXNceiurYDSm",
  "key23": "2y2rDPfCKFr4uMzGWXg3doBYCrnSFszPYPHBbgzMPBik1ewymwCQrGncJYojWq7kQMw79QEHcrySwTf7vMUhSC2v",
  "key24": "5NTwxGR7i86tvaWNjWP3LWWFkNstfpmtdGCT4Rvz3KzsFZJTPy4J8XnrPDjKRpC4WiRZTSn6zttLT5JUhQcNdkiG",
  "key25": "4VK3b4bRQBZkPotE7puAUU7qB9f1Lh1cX3TpbxSsxUQ516gWrUkzVAdLfxzfiymyo93pavWbixXPS3yvLkXHz66w",
  "key26": "67Un8ddhngDsYH7UwNcdYMotDjgmTsFVrjrrdZZxwBokrRe4iQMToE2mpqtXKh7GDFzF9gwPwMMySUcEQhnLgq56",
  "key27": "5Fgy3KiCKinZ3UVDNEDr1D3W1ErEV7duYPxAjszS4QEbMkKaAYRfRGVA35DH6Rj8ZkVs4LzxeWjNvXEPTze7PB6c",
  "key28": "3YdhJLLPcJbqEN6DGKcSDvRwPXfgLtMTYGRw9agBCbir35RPU8kgC6qYR2GEXrVzkpfj2ourfb2PscnDstqLkfUX",
  "key29": "3vUxZo8NoAVRc43sZM9vdRHUpYpe7bvJLNRzNg5AD2ZjiabE36DzUQw5g2Fy2ie8UHLrHLfig9WJCoyLkUCMerLi",
  "key30": "VpvYCf7LHWg9dFymvqecocPtJkHFXzuZqtp3vFvtxdFgjaWCpkGtwHQeXi2kDzastwfWUgcBYM1dWJgTP5cHvLo",
  "key31": "57BEuZg3zdJWrrWvrn69ZqEWmfjYiUm4TuACuxduQYatNJJRmKDegdaLvU1cMVvVCENPd1Jb2kbfiFesAkjkrrC6",
  "key32": "brN6DusK1M4XWwp5UtcrRhMW4PF7x6a9CHW61j8jyFbRiRb6rPQ7rYRWU68YAuo3exTCZQ4kJVoKeZRQUvhhMMq",
  "key33": "4bx7fJotSLi7QwkvSetMMg5k7iKAo76SDnB4ccP1iQQm8pBDPPN2zUfun2Wk4SSzztF1j98v4pqHZQfze7j9LoC1",
  "key34": "5yd1A16mepqq9obXBY1RnWGR9bEcjBScvJZTHwKvgysi1CMz86983mkNMemFZdtYMFHZn2XegZmSRL1fWKp4wgE2",
  "key35": "5J5DSSeq7qMaFbbK2pKi7KbMDM2HQXcM2hvfXSMwdW2R6yhvGU4TfmGXb4RXZ6fJi3ydnsdycKrtnyChW6FjJcGH",
  "key36": "2unaG6gU3aYhhJwkDHLNHrYmWKEigoaT9rcCaWovMCx1oX7tbHcYNWztdZ4YiGGLyYmhMKen6BgsPDCZopibpdMy",
  "key37": "5vmz2PAkrvnMtLyjQM6UjBXCyzmg7MnjQ9YR2oiyYtnFD3MkmXzZkXgzWtrJuQcTYitiUEMoopoavWjLHRMvh81w",
  "key38": "2Eo5M6nRPbds9chGr1M4FemdR824FeCNnNhLPWCGXbaZ1td61XEiuxZ9TfUHhTTUnQHktTiNE2MBGoP7kMS4GZKp",
  "key39": "5b615V4P56P8JiseDNPYnavxztqF5TstoS6CBKf6Hse2UPDHBvhkRFR67x5dG22vc6uytZxmffk88ADZpsaYopWC"
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
