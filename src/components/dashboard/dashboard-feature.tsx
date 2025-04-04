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
    "3fScrfbihXJxxWrn82sffU4RyBtCZFSL7rLYU4y13Bc7ydJneniNM4yfLujV3TKTWBDBefbjqz8iTJSLZqw5yuhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dCR1YnpgLu5cfrd6i35zkWcJDyFXgVsKjXrvJtY28CLjN6ByhsAbAoFnj9zkyCqUoVNtyXf3X9F87UdSJSVC9hB",
  "key1": "5JdCv3HAxoKKArxHrg2NvUg2Y2ie68fK95MFJTEQw2hBng4WLESq8sRrNF7T2cuhcmbgcD6eXxSqUodpSD8Zmeqw",
  "key2": "2p8wmWaeDQqgzZsPm1t9v2RxoFd4Lrxdr6WrBFHLeC5K9GY8NwrNWfGvSvzHn9N9peRkxtxVQfwv3CBCu2Z4ECJH",
  "key3": "5nMADA42zNTXCgqtE2JWyZ6LTsgVCv1WnKf7zKDH6L41XmcuPmR1UXBew1ozGVZbroqN3cPrXbgUeRHRbmm9DXoD",
  "key4": "562XqQvfGmEDxNskTr69fioxJVgCt7uP5Xjk4iKwVZeGLaKPCLnaSwgKmiqF7rNRSCKVKLUF5rWckMoqioj6MNMz",
  "key5": "4Anvg9G1rRGg7UqJfowNZt4g3Q1aHGbrzgHAsrio5DdqoQQgJEiteq9v7BhGf79uTuWffy5KHdCZuP57dbHfNtna",
  "key6": "2TbnE2VFD5E2rx68JHTqNkaZjycnL7Zxdi7rWHga1SbXSkMpL2LG7VtuWHbqAdnTK2WHAQ3KK3LzWqTHhU3H7TLV",
  "key7": "4WgfiRhj21Xnm9saWd6fa5fXuXf8iX8yVceodHsKFEhWAoUFMpRnSxRAncHiHyaPGT8HVTeYDLWXzmpM1TgEjNaT",
  "key8": "JmGg4q1GXdABrTxBzNbdR3iQ9y7xqWq6TeSxgGLH3VoZ8EAmEJunmtDZW18Gc7pwuhUgZnwUAhttxfDBUnDHHrS",
  "key9": "5DvXuGj3ZUcpxopckEgw5mH7E463xmGcdJDThao6FNRvqMy9ttHpB79VU3cWxnpNC8QPzYSaoMXjsG8VCce9U1BQ",
  "key10": "xbSd2eZEZoEPLE4owcizoowyhh55MGLqZaDQdyG1xPr9wNK46NFp2DPLya577RBzwpqHVQnNVy6kCxiRAyUWFUJ",
  "key11": "2pKnt2Hfpv77mHc2F6q2DVj2FDPCv9qeiLAKrMSqPpNqShhB11F5ZL2wwNK2ZwVoVBm4fBrv82A4mLaxJSzjjCix",
  "key12": "34LC9QuZ9Y4AsxDcM25eD1c2ZKRRhJbyGywQti1d6D7FyaUFC2Nq1XRMeJSdW6avLxB9gvjSfmWQnQRmi3nmBimh",
  "key13": "7yZaANQmQsHCvzijjvq9PSj4dEEPnMsJUKkEnCi9p5d95VnyiNN4rTH9VUQzgw4igaZPX7qFXRnZLfRtL4QrifP",
  "key14": "44RwK6Rygt9r1DLEwHEGyf4o2JHq1E4vxpxeJZGLqs1LP8pLXRq31uXZykzxZqWAkkVd9A4TTWz3NTwKMBqZt6B8",
  "key15": "2qqK5SZXrbAFeXrkTB2s1CUP8RSRSGsRPqfsNjN6ZVupAhKJwxwNxsbfheD4SFJtvUNM1hihLzagpyrs4YQqaW1D",
  "key16": "4x1GcitJEDFtq6YYW7UZ6Jriozcarq6RGM8wJQZRTXVM6g3en6nt6PwdXnp86WwoTE5tBPjDb1z4m99WABRSggHE",
  "key17": "cssS3hokDmn6tqm812JLAfs5QogTfJQwcHs1754iYFc4uHrEqjJGbriwSU4NiC7BUDntrDguXzdJzGHthN6Y1oV",
  "key18": "3PVgUbjNCinoZkB8bS8aMo39sPRzAKSuNDp8uJ7o2K6bbyxDARWc64Zsh7RUoKMobCzGGy1RdkvoSra8zd26m1LU",
  "key19": "5KNmMLu5EeUVyLwaG2c9RTaQJCXZ6XWtixsuQWjUEVfLeGebz7sQ5ULu4GGSADWPobGoAiNVtoSPeXFrp3nmJhfB",
  "key20": "3rcHmNURnQmhH3ZokLiFA4RzjLeSV8yvuQC2u9jBWNW6gi8nxEUo43mA1LG5V36JR3g6erNkKECHkSSnLxDjuFtE",
  "key21": "2SU28wS7VJfEy3VWw274f1oxVaBE67x42XvVnMe6n9jgw6Pazt7Yya3HNvKP1eqcmvpvAgtPtauwvdPafbCC3Jyh",
  "key22": "59SvD9ii96cXiRS4HRv1d9zYFX2aBQhGrZdpbxJDpDxA3Jy8uWZGcQfNqCBEkQkpyikCrJucsyeK8MDLeo2fB7os",
  "key23": "j3gZypGCEF2hopTuFxaoVGA54qGgXq7KEhT9yV4pT98LJFBXhijBHPwHrj1p8SLDHBJpuSER6Z1pubRzN9jA7eM",
  "key24": "2KEvGLMGUGC7imXaErZ4te6Lx69EoYaSPE9ifY2qyCFcdJpX9dFRA4FcoWP1bXxiZ9kbaEgt2ZiZEyimpnYVTZXX",
  "key25": "2CULg2TULu9D7MMtRPukszNBMt9kPWpLnvLyW63rauUXXnYnNKm4sZMGPzbrocJsHi8bo5u94UNoZXEnRRADmw8A",
  "key26": "2vtYYVykuWVpDSEnoBvPXKJfMehw9dpeFETxASshEDXTDPgkSUW2bKihrVqYmuh9VD9RPTR1gviTEMvnWNwVoJ9o",
  "key27": "5AGRKjitahum9ei5u18UJRQobBRPo4VtsEH3GQUc5q5JsoSLYw8kvrP4cd896cn2F4TwwqV8ohKdoKWdoL7RXn45",
  "key28": "2Bi4UxnVXtn8XPSofWGycgQRpC48czpdVe2um3AaCeKkHQvnP7Yv31NNFu6NhAR3CqnMPBA1bZAPxRrJXi4J5SBY",
  "key29": "2XNnNTQnijA2xEmM96seNSRPrpQrnomi9jescNXhB1NXAosnK3vxrXNtbAE96CZprmDjL5WjTU7UnRYiY1acnmxS",
  "key30": "65bzKFBknkUFRiaunABm9P83v1NH7ZMLffwLkccw9iEY2dsN5b9kXYgnSAjQYNp2gjxFojc1uWyhffs4T4PmQa27",
  "key31": "4Nre1tpdBrVPpAb9sPvdamEdfXpJbLPSnCQZqqA1pmkQundZ5ffwvncmnGwQ5xbmNMTkAj9uX8AP4DjPtYH2Km5j",
  "key32": "5Ynvjpjxmhx7Zjgu1mkbzoihDNjJ17RLrMgbsTacJ6czYRibWfreRW7EYMsk6KLvDnhpsv8mMBeUiuCnoJ3uTCAL",
  "key33": "29bZEJEJdUcmbxDXrHNpnmrsJPUTnKHTxSLdjXtF7BhQkD4JsUCGUQ1W9W1uYEPPtqn9L41CVffZkGCvWACQQhnT",
  "key34": "Lq5HxGXzvSjPCpdCNvJtMksN47xZzYEFf8UfBAs1WDy5tD8XQFofSwMWrfPQgGgU2kfGAjBbZeziBsdSB3svgPD"
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
