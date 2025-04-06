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
    "4ETttyqP5XHuEPi67f8GhnkFfUxVYJEKKzu1qEx4ZRy5tKSaXXQmM3ZXVUvhsGE7sZn9PvYF2SJ1jPzTbag4EGxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D6e4Mrh3MwofTNdSuqvM69p9nRp6KdcdXA3p1YSzJwXiwRsPJEf5TQm1gQv6ScE6YEJhxETjxa1TXLWbTG7vcGa",
  "key1": "4qozfHT86R6qKibn97sTDkH8NEA8QD2r6WE27qe1gbQyyL7R7ACcNGcCMb19WVpE7osywZ2BKdjzbMCzeFE37rNb",
  "key2": "2L96YcddFgnuwppHV48GyinNbgZjSjU8aaP9Z7VJsphCKuJGGGtFMgxVreQjPmSeSWBBxdLp2HdDS7RYjRJKYbU9",
  "key3": "t3AvrAMEgpUPu7Ngr1C8hGoqCgp6fG6fvHfydt17Dv6TpjsCCYbAgbyhuJDa1qwazniW5XkMZNXmcQTxUXD3LC8",
  "key4": "PS75H7WDLsUC8rzRJpPoPye918uxGU3L6LbWij52GQ3FjqMCKxL6Vc2jX8B2XzNKaUcsfASZipYbsnwGifEhoPb",
  "key5": "45sfduiyuT53WNhkoHGD5TJ1n9ke3nsMPheQnHgEpnNdDZJukoYinhwaCpMzYFWrFRhBehUeXW6qc8yDLGJr5Yk1",
  "key6": "YzGkMcQPZXfwPv9Hxfdz52eFKY82g2Za5dFtRiMuQ7vJc3qoUXxiwa8ndBqB1owM2wu4jSzn48wgN3ucFE1jdgU",
  "key7": "5Axk7cnpQeJUgy3zHLPmcQet1kHmPjiAn5NcGMGbte8nsDWKszXxGE682XAmgWV5iHSCWhrc2r8qg7LLo9eEeaK",
  "key8": "5W5iKZ5aNPUbw1wrnQcuDjsx7tWX4BpWLg3ESTBvZiNp9BhaV2MfYDs1UhhCSQYeLTFC1Kk4fPAomStNF3gh8Xv5",
  "key9": "37yPWuiQDGi75EnjkXAPQq9ivNLwwvG587tViUDuNGGgYw1a32jd3CrAy734iD2hwrJKRiTMiyaBWZa6qFcQ2xRN",
  "key10": "31KaZzLzCmggMzYug7QQtYxA97hdF5owAcZSYe6L1eCvcTCLaMqt4LGPxQfDf2DgkLryaj9sXAbunkf45htVTWTr",
  "key11": "5pavFpfvkjrDJqL6eW3ngphd47UC8PSTTMHW5M6Lws5dhc1LEsSJwGNghdqzsFGETUGAMfqRcNaJKiZMVqwFZ86D",
  "key12": "ZFAwDCoUDiTCLtHYuu4ggaYd7qy9K7xgmuyVsEVqnQJ8xDZmTgWpGJ9H3WMcPJefDVoFU9UvxfGgTH9fQo6RcaU",
  "key13": "cCoTkfrHP1S2LeLz1Qu4zGHB2WUT494A19SHsCsYLTh13wyVTCRxd4aRM6298P1FmN8y2UK1f2rByGsaZEHghxQ",
  "key14": "jufZyJffpbEirUV1xGL43TxfnmRAV4i4SkBGE19cU7aSuCAVYFehPRRZcHxdhE848EZ4VsncRT6dgYaLZXzC935",
  "key15": "4gV5VRg67BiLLTLmYLinb4QNHvoYybDdxKT5377Qz5HqodQjc2LwVpwf7vp3CnVm9fs6PPXqSrCdCHxat1Uqr3rG",
  "key16": "ykzf85FowV6Gg9jAps3aiLcFfRQmUX2edtE1S4QGpb7hdvmEWwnt2HhzVXVtb2ppHaGGR7RyNyou4p5G2nssqMN",
  "key17": "28Ne6CR1qM72QKE8CA8z2YDXUTrQJq5ARKQ4LLuDNf5gnJU2h7sMfcm3sWysL2CkdfUH16cBDTo59hmffZa7HGeq",
  "key18": "3MpwYVgsa4Lm1EDkGVkT7LStxZRh4rMJckDeQqXMPGh9f3xHvRDxnpLhm5sq1j3LwPvQRqgqrADyLg6vdLwa1kss",
  "key19": "4yHZM8BmgbahmeX5KscQs6QRxYZ7vH7HvGSCLuUsiUFoZVyUeNXjZ54ojHWTRRwwxjfWXdb4fQx6D7PYk1NbSq54",
  "key20": "UEddaFK4hPk6okNXFuukvcPbgKpc2Vs5ZRoV4dW7XCnYpjJpbA1xeHWuBX6wCvsGKzWQBrkKxxf6SvxwYFpbXgP",
  "key21": "65JY9g3QqG55zFvWLnEk5j9eVipeZ1tni3vp4jX6nSPmGF6uXzQvi89en27orXfjPT34mEX6gHsk4qjoTmjn8HP4",
  "key22": "8Pazk1e19bZ2Bbfq4hjseM5utd8cJtKYo4QkMD3kvWegV6xWh5JMy9K53EEYfHbuMvRFdVysoyqT4N5DdsfBc3w",
  "key23": "4TfpHSKq8Qam2QqtnZQGDMJ9p2RAW2cRBdd7eY8xMyJdiumBtXQZ1oc9tunhqohSe4FJyxnTb9U7J2zW7UJHTeFz",
  "key24": "5aD3Xhysc9neyuvu2xipYWhvz1ZQrfpmWTiajskU5mS8SEyDWrTMpfaYkayxmkG4kkeLax2PQqtv5ikH23jN51mU",
  "key25": "8fRam4911AYvvXwQBbv2b7vdhgxShnSwMQjgSganeHjZWz1Mi17aRneN7hA2R4HRGAA5fLeX7i5BabHcy9vbrtD",
  "key26": "Jf3gcUhgD1CrpjHqp6QgwzgkMBBcH1pwPqbj7KFeSthk8eZgfDtqafpfwxn5jzAHuczLJD6xMngx2JnKQwg5WXe",
  "key27": "SCi7Z2E7Zg4C1dc4r1SK3e13LzqhZJatSUNEurLPkRu7GLNGLejEXMwStQeMYrbAELwzVKpudaZeBzuepqepMCQ",
  "key28": "3JN76zmPcGFPVWc2JTMCQFinsFop5ZAuYCweYg4MT3coJ3Zi6YnwNKDZjcyN9L9WmGKeyQCuKhwtC7pa7pPB3Non",
  "key29": "gJgfQeE3wB5oaVSAryqDGLnHbhGxPZGCVscxvy47o9qQgsgrjCkCbj4njSPcac19VZi1gsgpz9QuL7CCh4cL9EM",
  "key30": "GhYsSfc4JTiAARnQRNxVgCthnH9ne9XdyTMLF44qemXHCyBRaay8mvVQ1rBvUSCDpDhkbY5GUoTJikiWSMAzRKr",
  "key31": "4k4N2ya9gpNqisuZrBJHNFit3iGca6wpjAsxCwFbwbsouYyzgkC9J6UffQRpgNArz7enuuXbMBwDh3P8GFJMvxtt",
  "key32": "3EHAUKCvS3YGaw75iv7xYDkJdF15tjktgiZ7nRG5AFgqV55Ry2tq6BdY2Wa8XFWJ4JvUe7muaHYQectsTW8ebSwP",
  "key33": "3aRNsuknh6kDgQWDG5prmoKEiDd6VVmNSR2pecjoW3n9urUaNGm7csGhoBZCorjyhz69JMwRpcWxkefpoPApDQTx",
  "key34": "XjfB5s2gcWEE3VHd1FzUZrYVXKpSHf5Un1B2MFXFoT1aC7M5DZu9rD493wgexwaGeF8t3YWUVov7SnyHecW6k3j",
  "key35": "pbpfAWAEcRo6zyNbKcE45BfR4bCYXKdxShG5hSotpTAM4Kv8seRLVcPka6pEyfb3VZqdHTiSxkxuvB7xYzUX9Rf",
  "key36": "41HQeNTEEhVo66ULAJcGxBb3QRfAXWPSWxtpKg2tBAq5rCbZgNkjLFUeqRqChYJXFwcpJtvEF8ET27ipH4S3of5u",
  "key37": "2a3ckEWrhR8WuYhnCZisrBcmQoa9VQyc7XLdEfjNTrGuP68So4SzLvGXGZbHLo2T95A6z4NzYHAASisgEx2Q8nL6",
  "key38": "2jijeGpDk7dBzCnhkmRjDJEHNXEav3UX6oU3bhQGMnjCtRiSfnQtqpNq6AmBxqZjk3BW4Uaz6X8qd78JTHzoSkJQ",
  "key39": "4wDoCNNxES5BLCDupBZF9j84LkhtvFW356aL2DUZALvM1VNdUqTD1hjGTRLTGwUpcpxTVfuXcPxkUCR94hnsJH2C"
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
