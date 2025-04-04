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
    "YCYmLk9NFSjk2jxhFGLtjj6eVfdyDw6qvD2Y9cn5XNfbDFQyCyyBLPamKZAiCFC1EBdzbT3SRWAYHxmR3qtQesN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t8LX44wEKhMKb3wi9eUMXw8UtmHoaRzmRrSEuiiw5JP6F34EbKNJYb5Ff2tGuKVWn612GVw2dmFjS8ashCphFU7",
  "key1": "wT73WJBPYMXq1Af97mcRnSpEDMPN76Zqhe4ujxEQiv3E8XbUaXAAcipgjTSnWyppX6z8opNptpLWFzkt9vMH69k",
  "key2": "kdrA8JaQjV13mmP9gGmuJUFNTW28mobUvGXUVAXfb2xryuA2mWKxmYcfaTW64E6khrbwCQ46H2FdYzNEpc1Z3hn",
  "key3": "5w3nh7ipm9yXvriVjMdedn38cBcHwXrXfYKxKFZJe6G7UTVKxjnc6gR4WjYJGumDz89GiiGA13muUhJNcw6JkCrM",
  "key4": "64va4ERD5J3VggFbbi4TxNwVteKka1CESooVtTiv1xV57cHUe8t3z1mYhYk1gH4kycabibADzLSxsH9aQ938GSWe",
  "key5": "4wZh7ZER8szBwEJmQ8GFcRx8uhEzJwihsQCUr1iBYTiAyuKBoMzwyRUi8eiyJo6FDLAkdGRmRhYaNxTG3ZApDHZJ",
  "key6": "5G8DGMZpw3oM46zXSa4sjjC3QMCXmEz6tTQLRGkFXBKNjyNJjxrsva9SefXaY1ngu95Rg9vp6VWt6SPjFsho2tP1",
  "key7": "3ADwkxfbNcoVVzuAdDoyzT4iSsm5QLTZNhZX4Uv5vkpfE1HSR6bbK47D7nGwFYvmDUSEgggx2gFHGGRN5g1SwF8x",
  "key8": "Y54nqUCcFVQC1M51zvsS7bHpv2YpXktkwDERfgLLehvTicCP1Gn7wrkWjw1G14hKC4B3nT7J5Qxt2RUDbps3VMm",
  "key9": "2sQaY3s3aXa26Pbd767KtKCm8EfZvKcRhKKaF3kguLJcMmDHMiaDz4ohUMh2n49fEreSuwPQYremYoriszUSicFx",
  "key10": "2vdK7Q7qpfCGrXQsUrbTFMLRexftbcqVxEZYD6GsTxmStBA2TWy76yRHZVKKjGfdc23U2oHBCyM7mNT2x6AFgFus",
  "key11": "FjcM5nASMyLGVdYZrG7ErKah4PUVBHsWWGNKgz6TV45h3yxULVPdVfnTPyiLT3UVGRf7Y8XrTMKgn3jQRYsVSxy",
  "key12": "2ZTvUxQ3U75kfTc68x4kozwHZB5sNRGLGpjRx8RddboCCm2baCFDZAUbiGB834u2jQtuiT5tqb5bTt7sxAmiLRmF",
  "key13": "3j6ovzT88rVH9qj2VB2rJ1rrE2PKuTSbrYeTSDGigproQWZMKeiq8WQtyteUE71a7HZDMZB7xvPqnmskYe7Umkpz",
  "key14": "4AEwQbD7bim86ZskPnkmyQWtDN5CWofZ3wXQ5k6TGaj5SaBAbVenmTp2ESW3UhfH6yVbH2zYvqDGT4WMZxefNsV3",
  "key15": "4zS2mEiy4ji3Rd3CWXVsAZ87GXBrPMKSWvWU9Cnv4SonDHNEYvwYs9ZVj6TNGu1eboWJs1jZhMTGiHWbRQkVHn9K",
  "key16": "2ZAJajmFpGRFUyF4EorNR998YMJYyAbb8Z3EndrzNiCKzDn4HGLG8seRA3dN8Td74chZfvARUs9g8RSwAwMnXk1b",
  "key17": "5FeToRwHemBkws8UvCVeUAJdDUXXP8xgkQfUCLatw57W8dxcqL6yhXuPRecrw5BbnQaSyVvM77d6Ais3auMm94dS",
  "key18": "5SpHLLK6Ze9p1YVsJbHprVNBwVM9xPUiog7mawH5ycKJ34hwSGbYknLrVhfZRuGF6A57GgF1WRQ1gnSh6fcSv2gE",
  "key19": "4VugToxRSKnZY4Afb9vrRHzFyskokvPhx4HTivHuLWauHYSCJHfnt4UPSoN2Mmh87yRZAkis2VdxG9e6raRempp1",
  "key20": "5zkUVBKpeQZTcG9wymDqF4mwAAy1vEKYFcuuuFBbkKortJYbkBaiUDEJiLmBve496os6Cge16k6azKidYpvvsXbD",
  "key21": "5fAkwcXPYSHa9Hau98aoyTSSSutm2TboNbPGD5BYFoS7Mudwp1C3azn2Ykcw1q8AjD251hGVZWmuQpiYNXQYv9uw",
  "key22": "iXECvgMhpb7gaeDKU9hBqDN45QxUb2zeVmPuGimW1WyMcU6oi3a4WFPt52NRHowFQC69HmdPkRaHGAZJ1xDubSf",
  "key23": "65HYi7yfi53YiAJppAELmJtaKULVpTEdAZdGRmvmeHaArLEYEnhwoMNH15pTynnaoZjCE5L7QDaeWpRy36ukWV3c",
  "key24": "TJBXw9ENWg3HaXRsbQ2CTsw7y17g4hJj7YkgP9bKAvcZseq91yRY4eZDHvepjvUrPoGstMmWgnT3ZFvW1p4C9Xt",
  "key25": "4vSGoLvWJVRrF78DJQdvERuVCA9sCvyRNM6mReGVPDvzRG6iwr7caa367zYnrqf8V2KePn5hfqLMaQiYzPGVhQE",
  "key26": "xPvzxirxNdNUV8G9gJ167piSZkbnPDzZjCFKjM5vUFuHnC8MQHDtMedw4HqKz9W93JyGsT7NeACgZwo8H1yZjEd",
  "key27": "4SKcWL8jratdXFDS6b1HGZ2ZkNGgHycdSGEMtLKCfCnPc2VxtJS2KyC6WDuha3BYeTxNSiF76Kxk5SCXVynYB4We",
  "key28": "5tDf4AkPzeC33LayfZPM4AapX9W2kymqUBFSeaWt1yoANhhRNjVNyBvERR5ZnGuXC2Gvx9rGDrYy813Mo7gDdJLs",
  "key29": "4xAgrqkZGSYmXcDziAkvPY1s5cfwBhRLGQUAUiuwtqDNkdC2dfPP45jpR2RNyVZ2BBKeV8NcXd3srmMWwpYTPP26",
  "key30": "2SLfAYKdy3SdpWZcJwpttWDkfRwrWEpZkHuqhaFoM5mYfuMeWqtxtEk9V9DYtf3x6ANKnvhpsikLgpW4LU5nHk6C",
  "key31": "4fsMGQoymdUSdxH45nNcjxeqU6NV8huroQiumyAcRbqCJMc741eLr4dn5cgJTHgGLZ3CLVSfMEYzEXEeSVbMCrhd"
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
