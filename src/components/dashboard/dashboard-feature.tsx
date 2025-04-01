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
    "2kV3arusUbkRTfm42yicZbbitJiDGRamBri2ixwbd3wokhE3QUYUPK3gJkZwZdyEG7LLZCwe15QPiiCJUPp53FZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LeKoY1z8bEbD5ZrDSKTMfCBvagiKDJvYCz9wvFJeohyUbUewyL2Qa9QXzMs38ctwZsWntUnzBeJ6eHuWWwwogzu",
  "key1": "51D1QWsbf28iLiBosFhe9DTtiFHaMixWAS6avxMStxw7399yReBRZKa7f1ra7CU71vz6QgttQPiddbZmztiVHir4",
  "key2": "4Mvvcag396WbPVpnEMpqk2q7YNMfxtF5jd1hUPTsxcRBDe6NtTeC8wUytfamK8s2uoHedCyFBzWsFr1Tmy6oS4Hj",
  "key3": "2ga3X7yQXEbf4UEtNweaZqW3U1zbxa2gNxxy68d9vsWken1Sp8TcroCqf3saZoXVaVf65JosJAM5zPjqcUxYMeys",
  "key4": "5eRzr9mVrmjU9gULLPstzQSgJUhUWuAqj4oLAeutm1S2zL8AvCAGx1zKvKJLegnmrErkcxDfzjQEUSadwKSSAsjo",
  "key5": "5EkHJ7j6CqDiKmxH3sTQ7RL6seG6o7QPdLMJfsY72Mvfq2eKHrtaWg2KGiYbdNKHQbHw4SfD2iBuVnduDBecVUXo",
  "key6": "58kaV8MtPdSsRWypfZ2ppbFo29JbR8a7U9qqJMohd8y8whE9vmPpctqzQXxiJzB5yD5SiFfba1myZ8xbMvs6LMXt",
  "key7": "3F1w9g9VTjY5sAnfN7uLzS9yLYud8riEcKXUPGyy2fM5RmDMohwxBJNMscUvSeW2ayxPEUvfEuvFKNZC3S4Yx3i1",
  "key8": "Z9pyUCT9LdDY6rLJT2VnmBMF1ZdeRyZ1wrpyik2NBAYHhQs3fVVLz9ZDSkMAecET4fJc3e3VZYzfM2U6R5A912Y",
  "key9": "YeFT9VJsYbN6Zzi7XoPd8Jbts4A7DYkagTgf51GW4ebNJDhnWBBYBCpsvYXcsUDfmqra4yozckhW3NahJyYc9ce",
  "key10": "p87bmwJwBs8j1zACZFcURPTc4328tmj6dp89ChRHY6bmnVYUBgbBPrLbbiGW66W6wRxKniRj85njVTNFtFSTFeo",
  "key11": "gp6izXhJ2ELgGxfoW3d8bAhEsJmMqknEwLa144HSikjRC8EwXpG7nP5JnnDZu6cgjZ4aQ6XhyBJf3dXqQNy9eSx",
  "key12": "3aqNTVgUn9o4L5QBSN9eLj89K3RXgHcSFU1WFkavTMuvUBgY8bAHsBgrCiV4FYikkmWd4hQzucMZi1Qo6zfYp3cg",
  "key13": "4XNGfkKkV5e4TfkJE8eptTZ4kTMQ1kiZtErkMVdckH42VVtBzwvbJbhbjKfTNuP8ty9Mi4HVsvVj5dmsKRonkGdx",
  "key14": "5npZ1rmooXgsuPCu4GDhtMFD1TMPEC1TKH2M5vYAzqCNkoHuKvtmd39xwCMTThbFxRy1riZupRHUCHLLk83unyao",
  "key15": "CjLkf3LnhWS7KhATDfNm5F2M1NpYPrLoRqfMbfzHMELD794MQjFTGyqX8Zn3cdjReqAYwsmBsV6LpwzsRPZTVzY",
  "key16": "4JdtQ9p8QsPrdPypDsh1pBrFFEddD6ePFu2sFz52XwqoXtZ4tLkyeah4nxSinH8sgo9SD5XqbboCnuycxdCtLNV2",
  "key17": "4jgBcxA63eXHCdPXrfG4hojCiB8BzfrCF9mLs4H6TGVY7Zi3wFFSKDWEyLjhFmzLjJNsCLPvKpDZoz3bxR7vh3qc",
  "key18": "3SgEjEzirbVL92twxj5Mquo5hiN3vWof2fYH9masaAACrF8JpdEHG3fj7GRpWrpuB3E7yY991SeB84eBei9S1pGd",
  "key19": "5ycLZsWFBjyGfNr1RL4xbT5WejJZc3ev6rYtZDg7Xe5Mq7ZCNaZih6JYYYcVj65ymvsX5XYQtfqQLWeazs9ENZgK",
  "key20": "5nDNL2aRF42MhVa9Xxax9C41Qvvgcm3TZrGRVb7uxYsAAMUoepda669scczrxXGfYEWy5VREhCCch6aJtndAs8aY",
  "key21": "cdmX9hRzcbK9x7fC4fCn32riHgLWxygkfmLdDQ5fu5hQGXUprYdChbTqQxWLVbTc9H5eSmjoz7qxG4dZkGhPeBn",
  "key22": "4CSsRA9UN14io6LJNiK2HpQR7VkRZXmagnK8wJSi2VdFe7KgBCyq9eT7XaV7xwPUSzF23iZAUsL5oPFNaXmveMDJ",
  "key23": "4jUn7WPWae2g5ZVtKm8S7hGjCWT6sbGSwqRdwctzAUa99FyLUzhRWdhVgSbeDLq6LW421gBK5PPP5cUZ1nKs34PQ",
  "key24": "4ynJZm269Hq4ch9J1hps1axc91hAdXDvvyHBtMJbPGX8E8hzdUgbDsXdq8vN2NihkuYgcK1qJe3UrBFe2n1tEMJo",
  "key25": "65ezm4rxJXMVzUzLAweFaeym9hNvDHgmmycrjmbmgHNH5g4R2GiQHiam6xJMingB3PQTeabqmuZ1fknhJRgqHnE2",
  "key26": "4aTPfa2Jp3gRM5m59YkYZXHruPDjyAPtDuLU1rSzCCY8jKfdo9dWrgJRMkodhiCeb2FRaLEj9BwYf3SNya6XoutV",
  "key27": "DdtsiAURTnhJTQrFc4mBkAKLCDTYVLpy35eQEj3LJjy15NEN3WaPpczHuEFMqKT7RtigiekReaqz5V4iSWVZVNN"
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
