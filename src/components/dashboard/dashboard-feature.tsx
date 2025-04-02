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
    "NfxnwCHtxguA5SzTb9aeRYZrR1kyiAJUZiKQWFJSb324Kx4VRfYqzbwLgB2ZV8pgVevoPkyQZXQdREC3GCG9kRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "im3KBDt5eCJxpgnV6p1AWvB2yfTfCyxB5PHqi2bkjHdTwaUAtaMg4pMPvo2Qwm6UYseniLNgwjZknhsriJF4PuK",
  "key1": "3TqQc74CWepFPNsxqy6YBMHZmaPVkYJPaTEK3yxCvYYVHRTP7C73FYVjQpi6w6oiqbTrzDZfaejhRLW7AtvvNJun",
  "key2": "ENaZje6gHUtueZmfZ4ZqV2yzYTrvPSK2u2FbpSfFsAzaWMhMuGm3NEpAC99JkgJystnvPZN1B4GmtW4xpJqPQ9Q",
  "key3": "4KRBqiyLkwNXNJhpwc3D5JVuedrs9C2VTA6oC2Na5Z7Jpk6S3ghyMP2woeYBTG7BVjy4UNtosYpTj49dAEPMD438",
  "key4": "22ZXJ6XAxwh94D19kWVvvhpZLKdsbwZ5212gVcU3fn24SM9m5P3FJrMsLdzvH2gPpKK2QawmZKHhoA7r6gvGfTGW",
  "key5": "3b8eTW9NT9iQGTTwPgWRcqFRQ1ufQ7MD5tgUT3aWgiPsAYKDTaAmhBnCcjcSot5E468Lh7FpDw56qBZiGY99yvgh",
  "key6": "2hzvzJbw2ZdrVBbYqHQAFxoMcPTfzQhFb2fxv2bdMM7NLBaMU3w4AzGP4NUSKq5afUnbwNbhh379keRa2g9zQK15",
  "key7": "64Zufuf4DYjeifBDq3XzSYV2zgybBEHj2nqfhJTs386ueQHc3SrcLCWJ5Q9pdkooYN54saGspt1bkJnE5uYygoNn",
  "key8": "4cfnvb5XGv1t8Lbfa5ST1TWLAxo8sdHrrN4cCtdhEyFLfU4rMBxiJ4xbfsEqzF4wtGLdPjbF4bFK8aZSwNvBpnB",
  "key9": "fGKuqnsanbcrUkDN7u88GAwQibk4TFVjJsq4299gikaJwhtncNc88PqjbKfLR6RyhovjBZXiP5ptmD354xGgW1R",
  "key10": "4Usm1WijWVKf4krc6LogX85pcdfRC2XEcmudXoAKz6tvYrhCALo9F98S3uk4jxwdkXEfoFk2ML8BJwPZYFk4Xt2G",
  "key11": "6qemNu4iqsBJA2UvkgWBD66XuFVBZvMtbtx5Qud9AVxqPtdkhg4GsW5DXWqSauF2BuXycWZxqV2uEeVgsA8AH1m",
  "key12": "2Ax6xY6SEvwsqfdB2cki3k3s18QTz56gD6Bq7iq31osvcGVVtYKHK2FVkKRK7Vd26rDUJR9qfurG9MzxVAxwvFNq",
  "key13": "3d4uL8G5aS5khUB9nwCtygiK5M1PFdXgAyfeGsqTX17r3JSdsxDmDgN8t7RrpBRHzm1RoYjStVGj98ESa4DJXYZW",
  "key14": "62Y1rMdS645jDu87noJNKKUi6WNbVSMUZpHphNXgYU5PmP8yM9XFTJ2k45KVfvhhT3hHZZWwpDhMNDyPfyAKijnD",
  "key15": "5DXAZkdSyVehEuVXAm9mSxmeEefDgMrY6Mw261icVFZfYtd64m4Qd4JodR88YkkuTByTZ3usnX8ZVoCQyEP8FV5x",
  "key16": "4hMfyiNey2dCQZjBGDQ4D1rrnFS5Qi9gf6yZcpjM5DRcWzFDJRNgtmC5fGMkmt8w8hRr4qezfifbhgWrtmE2UZUF",
  "key17": "5MYZN1mNCJc6wgXRCaTSiEPLtXieSVpi3yDnu5rwHieskSgbk2DFDYnCXzPuaonkjhWnoXkFKrSYfpSY7Jp5vJWN",
  "key18": "3md5fXrudX6V1aCCtEMiyWcnuX2DwbKT3kn8PL9rWGVckPiMXC3hmPL7Yr8Q3BQBsJmF2kMJ2iqd1RKyTCcNZp9f",
  "key19": "3CyfzP4mB5za34q567jHCwXgqQecSScQXkzfYezBn8RyhyQFQxN9NkxiU5HM1furCE8go6E58BYbs5pezqvmCprg",
  "key20": "XFmkYWnUvh9jiM5B8cVaTEv7tyyxsFfAQoQizCPq85e2ud5DxstSyi9ZJdnjrkszWGmUSL722QQDmk6tof9ArBt",
  "key21": "2m1DVUSkikUYuiH5gjesVSkt6PJqdfuVy3GjMJ6KTNmnfA1Vf9eFm3b4cKxdYMhBDpVzcW2JRs6B9W2DiMnomTx5",
  "key22": "2zRKJosBu1aHxB2gX9xscEpmUuoUGQYKFWEEa8jjCtmyu8qM7wEiULjSPXMyaSMvuExeLLfSgs1dgMjaWmCNGjNc",
  "key23": "2RcbRsuHhXnPFvy6hSUJpzDRvBcRi2c7BUu8EppFz2Wosn1ruvVGa3fdKUrJ6qGCtu2GRyoDXqmAaMsemaBVgkP6",
  "key24": "djri3Q5fbLZbykrEiR7YKcBhDSQnq9m78AK6TyraKfF25dFxAu2Tpvt6dMUjVvvtQaGrsT9ANsH6GDeqwnn6Yxf",
  "key25": "5D18KUZdb5uoeRsLZB6jZCGBjYuAQMbSsyvj19d87CXDNJ7XgQyeX7VeKkhqY8A7Wz9kZGyxzFXhVaNr1WCWtQQV",
  "key26": "2n7n67EZQjn2efT6xGy16RqgTQL5Sq3vmqBJd8sdGEmJNKREguzff3FF1zg91DuhGCScQvzEYLZmSSCowdHPiTBH",
  "key27": "55sP7fGvuW4Rt9EFzHGNgPUV78jdvgH7iYTR83jMYJt47DfjtgvnXURRrFVZ6rtte4ehGNmgzovGsra7iXw2fRs3",
  "key28": "3vHpDQLQJ3A9d1jiC7kSoWVYa6ciCavAxK6nyryKNowWcAsrXyeRcXHAHwmSDRuT3bH2awmtkKhUVjHWdCWYgYGu"
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
