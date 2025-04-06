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
    "3UDt9ne1HT5JzJJFA3Xh6iuBvaaFCwRiLviCdTd9dFA8R8xVX2Fo1kZSdyp4RA1i3AjpFJ44Yr5AoEHnanZseMby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37C7ukuYBbavWQbiyqMiyVkbSqEXJsVSCTC5xBptAkrq4883MrQBoQnQMMjR9fHzHAPkr8Dxo9jVTD3Ruu6esuoL",
  "key1": "5wNT8zJje6beYpKurEUQCKVpZESU5pgWJEGwoR8jBtFNwyppP61yQhDWpG7ds3gLqMPtLiiRveAhNxYPC2c6t7Wt",
  "key2": "4LSUrbfd4ieWYrY5sPmtoYVaMto1VSM6fgMiLCNsvRMqETWXRaZPRsXth9v7YfDrsuTUQNh65SWRnRhs9kiQTFh7",
  "key3": "2mikh31SPWga7WVtWdMdcnajPCbFdpJvutppfcARQgCvesDycJ7k5ZdzTWmyrgaf8o7UWhihd9wDyPTi7S1qc9Vv",
  "key4": "4kJReLSedSiz1Pmz4nt3PjvtGJaKf5hUWWEZhPcUmdtBcnMCJ3MgG17Cw1SLwCXCUSmRhisLiAYifwLz57kL1rZL",
  "key5": "5bmehBvBE7tL1DACGjoXDK5UttzPUfX4bhXf7DuhnCfGecFKY9bmvQhQsy8kKH7ghutUHzVjFBwPo6NmGEXN1gxg",
  "key6": "4MX1kdq7DPiAbg4LgpsordwWfDSAZdVrSkzmMEUN6y2WPe6KGpmu49sRwiPqYLBbrKUp3TYjid8RWiTmveFLC82q",
  "key7": "cC6gHoinGkwabnUBiCZaLCCGJPacFZYiTch9zqh8wGiwBG9PyR2ko5EL4vj7Xb5U1JM68AUzSLZx3PNntcoqkcR",
  "key8": "4bmJeFhKzPwmk3NJKknwoX7BvuBKUgE2pjdRizyGo8mXLYGFdwnDNHhdp7FeWLTbNAsxFES9kmMyQGW2ej8tJKdk",
  "key9": "5KbaR3F8BGR5px8iPc9DX5VEKnvMiSA15R9UXtsTyS1Jpacyj591RgfPyvN7cqU6KjJEw7oDe7YWtQTo1eG6HCYH",
  "key10": "42a75HjY8i4qXKTQCaToUfVz1ufyYxv9kzJT5x72kskrrW9711rSvHdf675AoGXmp4BTAECmwa9LU46h3yL7rcum",
  "key11": "22vv821fXyZqrccN5VUsHWuaudtVDKtVWjKQLGjQHcD5gZ12SqRwRhKUDeycV4s3fUBZQLMfPQsnCyGMzuBeCfxp",
  "key12": "4QM6AQuDoxB6VTCw4yciA13xjLcrhzJUaJiKruzZTo1nX66hYpF8vMLNV6hm4booKQwM5mnN3nc7zS8EYL93bAjs",
  "key13": "wP14WBz45iAvoGt4ur6knpXURt9qXeT8t1gLh7bemmeWpXygSFvxxhjo8bvEZPQyXZiyq7taQKc4D25UqTboNaW",
  "key14": "MTZ3ZaV52ExprWV6TvgPab1twE29nRwFCuKjniHDhbzCKbHK4BDDPAkLJBVkAe6G6DdSQKYboeLBaoJ4YR8VVfh",
  "key15": "3sBHFvdFaXsQ7rMMK649wrXQUqw1qkfZHMVHMrXR275HdxzHdRiSJPCqvdLDPbWDJ7r8sxznkwKWsCMBKqwqrk2w",
  "key16": "5xdrfmZupLuDYdQji4zETx6C75ev2hb47RyGderSiQ83EztMGeC5A2xDijvMd9MaWCfN4d67M1RcXwM5QkXZz6yD",
  "key17": "4qL92rBgDsg3gkZs4pz1Lt3vqaVKVU9qFnMmeJZFqcqnWdt22SuewNdyWFyQprvfH1cPPyeevsavMm2GWhQvKEgV",
  "key18": "5MuEXHpVFNnS7ikb8SQd2AFdVruMiWJHxWxdu9hPG81jFQDTG13vdWcYMsULbW93myX3DZiSWWh2He31jAQZuAnB",
  "key19": "QYXN2fxW66LTuJRe1SU3gzEeTgNZnHD63UqLEN76xnj2Rssas6ssaaPtL3U4BsN56YWACqz91Gyrr7YCauRSYsu",
  "key20": "3LHFVXtZAWzEcKBs8aM7h54BwcZX9mHioAycxamKtZWcmEvXB9jNPRz8tvY3gCETbWGmvog4YakNVk2mpu271a3z",
  "key21": "4K7EQY51kur2yGEp5ArSrcr19XK6W6Zqupa42JHLDD6QZ41WCizcMn5WNp9oQ1HycMUELgv5Jk9EG2Vgnr4idHvD",
  "key22": "3kTt1q121RLcDhwvR1qr7WW6rJrM1pUs2dcHM2DkTiVyA8DukmQGHcyYEswsT6ErhXynx21J3UzchzcdxrL6BRqM",
  "key23": "2FM1p2WqejBzPRV9TTbRAHZmrRSj8EhwJWp5o4cDZcvdbZrhujtH7sSX4bwpdYn3fLduVDt8EftBz58NN5pFrCVA",
  "key24": "cTU6bajZjcRy3CiPFV3nZEE4MoTMbVQQ797hyt4gfLz41K5g8jDFafvRLhj6JW1ENyA5QdttcuKxECbDZiee7qS",
  "key25": "4kJfMwkJw6ao2M1QdFZr1xpGswZ94cUniAagtpmqpSzEu6snnvNbdpJp41LBAVBcCq8BY757aMYTLLupiAuDuvi5",
  "key26": "2iDTSFwUrsfLq6nmYXKApixEUq5XBm4uwz2aDVupq4pLdLYg4bkWL3zDrJfaPKiXY7dvbjogkzfr76f69GTiNbZM",
  "key27": "5eYpSb1YxEiRotj6xqd4JMCEqh84jbcygN8GQpMbAVFr6nqQ1Cs1RZvkQUeVnL96GQvGf1Zt3nQjxQEb1Ku4r9Rw",
  "key28": "HJALZgJmMA7zjftGB2DkrfC33Zp5H9ctGURLJme6AwWywydU3nK8jKHc5EoMTUNoBu6kiPobAMTfavN8wiszMKp"
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
