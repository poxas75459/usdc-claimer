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
    "5nX9SH5DeoTK2PQCTojCTUN9CDExRS2BSyYsEzDCsh2AE3L9CRY61od4MVB1S3iycU2XEBGP7EANC4SR8a6U8B1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kr1hyuydPqPfK8wchwYTpC85ofSuEAVXpnKdUXuuvGYiMdbD5k1UV3QiLm2HL9t3dCvqCmfYTD6xuA9htLoZA1e",
  "key1": "4jh3reKtfybAh4FQoaD52HLhUVoogu87znebVbr4iQB6Rkbsf9AU3CZssSq1b6oGj1tvCJDaVBJ4mVUY2bsWcUDJ",
  "key2": "3h3jWUxq5AAp8K4hhKXtFRD2rfszBXKRv4bT9FuaEBkXZWj6rTB9VH1bDAEApDkv2brUDxENHjmPM6NghJF8AaUf",
  "key3": "4PpZjCe552XRBVvEDSVUU87Bf9UoMJdooRUSvB8m1hqZkC76vCi5PK4PURAPk2NBUmF8fzw6aUu1ZXUmT35zoJEw",
  "key4": "3TYtEMqJhTtuXhHaimWRLCpVnigD8VzRoBLy4hhhWVyZrAgHQnzB7uJm4oXY9FJ66rprqmTcv55v25ms85Fmwhka",
  "key5": "4P6frzFhgpXnTiyPQ7TRYseE9XM5PaxzjebgNz4k2Dpj2swUwN8q87nic675SQiXowaqyWA5NkcPmaGG3dj88NYU",
  "key6": "3nvihcUaKV7p4M5s7qMCBYHHugEPUfWPTVs8PxY9YTD7wxb57hqRJRNwhF16u2xjR32rxf536eP7PTRBheV6FzXs",
  "key7": "wQMiU7j9q79wQ32shPGiyFV1wSwWRK5eav8RYL4eqtwRAVWvMUMVc7BcV2yE8c4JNjiouHb2obaKCmJyxpxAAfN",
  "key8": "4J9aYhTzdT1KCx4uZCgDWfnKXwEqH1fog2svWu1sggFUxcmX2ZVJwpMQsfKDhzEbHUeXJfKM2u9zYn3nKSzK98yg",
  "key9": "zvwpU3n2rgc87z9iEeMdH1uY7Yawrnz3XsgafBxH5CYPsHWfvuSahWRhjpE9zX37NBT4jXxr1yJHDZyRtTxPchp",
  "key10": "2HYFzQAPZwGBTsrDmkucdgpvTRuQbDm71cjgZd4mJq1CckLrqduSp5epp2UzkvT5ZxTFFdzENc2zSioiAjXMWRHq",
  "key11": "3kXwMwwx7ZWzRb56tnucFn49D2nj5MKhV7rGtvTnNAyvTQNZx4Ar7SiWoPLcuk99Z4Z9Awb6sfYbdezxq2VSxbwb",
  "key12": "hj2pjK41GXfXAgeNDSnRWF7H3UkRqmiKqgwmuUyMVGPXEKX2zHJMTP3xJcaWTNkpL8Etsj6YAbmKBrE26sJPoxM",
  "key13": "5AgRo6zyyuKoNCy7SCNKdjog5r2zUNg298cvwm33qTDe7R96EdHCw2sa5wawDwJQsxzw2zkYR5PPZMrU1WML89b7",
  "key14": "5RYv92wZSb9q8SkeLFntPdFp3LbzKSgurW2hkwwWoCGKc2d1NAZ6G2fZeMs4wMuUaWWrz7L232UZRwHpKkwV7aJn",
  "key15": "FNtA5Q2vpMGCPk1GD3gx84R2pVgahr14aNMm5km75zD36XTrgf4Y11pCedm7mFJh6EkAiS6J2cu2cS5684KffuH",
  "key16": "gHC121F7oNaxYdLeTXBg6mrGr8XcUKhbDUGjLZVLuNdnMKyda8JYVVZB4M1rwnxF2mJXKiWqmgEYbTQows89Hk4",
  "key17": "5PWMKwtSB6KpbPX9F2fnPkqmnYF35AGagZLimreK3gQZ7SzAzhQWNkQfX6FtcsG8yKZVe11hRCrGmAHjh38XGisB",
  "key18": "vLofuo6taPK87PHDBmnjcvsDi5Amc3MaR3aynfhC7TnUHecXkMTY1FA1PUvv4dE38EGS4oipEpG9xoFbLv9v1if",
  "key19": "2W6Vnc8B1Nrrn7zMGajyV63GW7W8FVDsqEBpg3ZA4tzYgKJ7Uvd7CiJxG8c3LPWLGsgcHGnNb3BBioMiPD3tJKXA",
  "key20": "2QzaovDRy3uQKf7A1yPxLutJ38UQ22uaSmPSfLYmSLM77gUXj2K3paHNjcac9cW8a35auiHevmicwrCztQYLFG24",
  "key21": "4yQoTS1ivnVGGMQehGHLTvkhuvzMWzqfCYguvPXUhB239N9ajsoZM2QdU92x5uPSchcYNLSNWLSY9qDktCjT4iM3",
  "key22": "22Getn67xxPuLdirQDycKJXxCkBP7LGWENUX7vTkYVgHDPSixRbjZXh6548w7o68hbJVuGcxUB57VGZ5mucP3AT1",
  "key23": "3f437D1B7nee58EDzsR5hnSchJ2jCdBt9QFCWjDUvC8xgS75NJLZCLaCtszZJ4Q2KV7gqsJZ9UBvMQppzErrLGEK",
  "key24": "3zMRhacYHyF4YE5eLrWMWnBs6xeax9V3PyY7FryTRh2EQrHGuHxrhrhevndiKSwbiW2TxvBA5tHoc9GsxDEn2Ype"
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
