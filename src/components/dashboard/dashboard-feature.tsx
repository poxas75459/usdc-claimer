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
    "tyf8wtuRuPwCGgQtnicc27YAXLnSX7s4uf31BNAg9gkAfJptCuXkqvFtxHCiL1vbz6cSqTcNuhHAwk1VFeEACuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "364iP7xVarMVU7rS6MVNjLk6Xu6jxhaqHHup1zxSRtpz8v4CRuZ8koCv4xXJXuyR4Fw3sFqpnMMhqcCRpNPCzxjM",
  "key1": "3XY6onKJdyJKohYexEP12KCwBC2KmEideQPySqQc7eFrE6k2Mxx19GWQrUywVJ8JtYxqmBXY97RwLkRdZ61W9Wrf",
  "key2": "ecEHzb7MoyjthkbNs7nTjY77DYFBFAAw8LZ8gwm6NVum98Upt9nccYy6NeT84vUiWZzfzMXRsLh38TBcCdqGswg",
  "key3": "3rDMPxGPvzvTsXkFCfMvXSEmS3fNsDNDL6CE7v42fyLrmySSMPQywnLJd3777f2Fa8ato8tMePjAQB9vBawFKoSP",
  "key4": "hSWGJmeEfPLpDZbqyV6gFaP5VhSgdar9ddrkpqkqEHVJdwKBpXDAhr4xc1MheKeHRebiixiT98gtn75E4tJUBD8",
  "key5": "4fApVGbFWduZ4DusmDFJE8iFLDimJZVjo8hkicyGtTm5jeTTxZdoy7mTziFwjDBiR8ehhhASEWhJmp8om6ANCVEB",
  "key6": "3upY5UpRgZe7wXwu1ivHtqf33HbVdWZobhba32qF9YeKats2PdU2Fv1gLSj67e2RCtGK7Vjx5exQRUKBnZv6JD1V",
  "key7": "4Nwb1ZVpKitKHeFYATYRGxwYSgFmp2Gbc53u5Lp5Y8feM2tUpiYfeynTmuHV3kfnknBXJGEBdWgqjr8i1JwBWnZo",
  "key8": "2wWEubZcJsGVX5fN9LfnUSdeUJZCTL9KYqjrA4PFKxiie7uBqK8cB4EzaYWUUo9hHdaUaNmRszTxvPiKw4Ep6dMY",
  "key9": "2fd25eXDGaLBCkQdD3PGVGv4ZL62kmL8qV89uWSH7EMXubMAAa75hSavB5qvtRiHBkmMRyYHgoLDBpLLCjVyGMD9",
  "key10": "4JRnj8P6sbCQ4cbTJ3mybaPTBHp3DGNzTVu3UbyGfHqAQkYtvdRjKp85K4Z2yhT2q9MZd8BZUjoLj7ZBxvEqzTfQ",
  "key11": "2QC58i3ncYyu89upjwE2SLUrduPnscWJUPJj722kpbmfUQdrNDNv3bSZfxL9p3juhVgdxE5VE4qfSBi9TK81uSmY",
  "key12": "3V2Xw8NX8a2Ur1jTYCTDT8eAuHnjV4R7Lj4w25L6WP97tRoiwA56jv1cyFqVCrCbMXhiJA9Q5FNoft3CEZFB6Czz",
  "key13": "5NXF5M7SRv2dRJ4LNRT5n7fsV31geXEu5hjqNNdPCnFtZ22CW8zpmFjHWKbRnRe3E253KLzZ3mH3y22pNPL3eG3R",
  "key14": "tEEuajFraiDshuzVV9Fy97SGqnKegZKc8xJrj7oBrfga7RhuKHQNwv6PMGoB2EWEYaZBjDaUkzGhCHQHPkmLtfV",
  "key15": "4173q8uxoWt34jDSHh4UyfCdy7m76iGfMxHQ9ajJD1AACt3jGLS6yJhh2MwLmvBxaxHs4EF3UBNKDPRFTW59qVfN",
  "key16": "3dkSaP7CMJS6EeF5scmgVaHLMsdr84CCLC2cpcMzF5biLgzL787wJS9UxWXyJi5KCcvsztPfwrpabFZ1kxbjLpC2",
  "key17": "ehyo7PeDb6RcNqBvHJeCeNBFghzrs8TTCq1BPPDCQvoPVWLEMn1Mk5KbLydQ5HF66axDiHtK5UfUnZCFPb6vV94",
  "key18": "2QfSdvz6MDrLXVLna4rDB9KVzLVDk4J6ak4PeXG4GqGk2B97qbkz5QsfRRGRip8UTdEAyx53nzh3fXAJtE4kBcJz",
  "key19": "26rGBmmpgvhddeadxxV7KXFGSGz3BbEmayGeH2Prgtt3J6zG6hvaVw6ktQUm5LKHUAywN8cx31PF6CjPQgaWPTGy",
  "key20": "2c7282gtTcSzSnWLiGaFEs2pFHqfCUucULFHcKxtAUFxfwqiJJSLKsSV4okAE8ftaoKU9J1gkVRJSCTr9By6tv8B",
  "key21": "4nekDcafFRPKgggCqsEYqJzVxVFQJNhi6Rneeez64dzN7PeGhSN5brUboauezkZRiZwBnVFAjn5GtiPyiGWqgL2s",
  "key22": "5kGu38jcn7jqvLBFuNHiU8h3NPUR9T2UmBSPdyRwNDt9VmhRvoRiSq8KT3dsG4NMVJMWJZ4xmfMdW71kva8t8GT1",
  "key23": "RPxGJsmFmM8qn5xzZkVokxWsf7Fxfrf8qetD6GRt14ocie3b81bSL5egMPPy9absagaPNcyyD7iCf4UAiqHFCvx",
  "key24": "3skX9vTzXsVupLfkMgAdZBynTKqRsVk64TyoF6kcWAArtQKVcXTp7QmYcn4XxiH3BMCnpTWfaiBGzH1diSv48WmF",
  "key25": "2PDCdish6Q3K1q3XR5PLgnv73RMegZnXKhAv9gQZ8fW2tjfhBCp5pbDQs8iZsFsXvJWcRUFJocQGLsMi5axsJom2"
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
