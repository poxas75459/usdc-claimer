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
    "5gTFsUuj3nHoquHCNxZPqFTazrB8ZXJhA6iMob73VoC4QhwcPBw8CJdaAuN23U8hPUuRZ6r7yD519dJzwyiGtopf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "phmex9ACj4BSdcyaNFGoQ1NJQMTxEQVYVBttheGBFwwTkJ4LcDqYUhprab9PyExQNU2hSsAgp8SCcmEomH9A8v7",
  "key1": "2heuPoCaAmp52dyXFeMtE4P5zvyzvgPQJQ2wMjjCspLaMYT2nJsSXKwB6fPp17cVr8ViKPJ3vdMFgju5NzdAVY6w",
  "key2": "3xMkhvaYP7rUiQCYnd2FuYsaXqassKY1D9zxbKcvxzkzDSzKUfgWhoHix8AeiJvQMHxR1KkyeVpB1gYNMqJwnUvD",
  "key3": "3ZuzJWubJfcsCZKWeYJYxK5P1tHE42uyTMfinG3P4sMPL5oc21dNngJ6rGoiru8WnyzXLJBBaGWTgNMdWVb9DhYQ",
  "key4": "2bnQvA9mKfxVA31kLd8DfoymNfu6wdFJc9Ea6VZJSD9ejnZp4EiL9nxWXsDQBehui6RgsgB6ZDy6BX8MndgNXxJB",
  "key5": "4zXwd6SsgQWKKk1vmabeePDnn1dZrPpJkJ7joHWsQmgbW3z2kFi51psW3BxQ6yFxGNHsUa3ZrsY7AF1eAnpeyMiv",
  "key6": "2nTgEYn8ECzrF9Pt3iRGTPgNr1zURDuyye3rVvpwHuzi8zH3T56roSncoAw9Pzt1q2Jd2A13DXcsJuujN6i574PC",
  "key7": "2gm3mfbUrmGfpmYUvBz6LLyzZzieAFUFxuR99N865FxpUBYNrxZXRC7LiuvJY1yyYx1MFAm88kBJUsR7aETeNptn",
  "key8": "38GnNQgVXxRfh3YmcWEgMWjZgfNAvvQAShNCgG8dE8wudgRfsMiQWfEqQGxu6JhiB88tbTGE8xpEFQRiVM7csi5k",
  "key9": "4FzETLuBH4sWzBZ1gSXixk8podAC7qYs1NC8t7W2WpLYEN18tNomGGs855rm9RJ6Y3gUBDrCJowHr9eYD7sGaZK5",
  "key10": "sDLzCZTzKCZdFGmXoirUzUKbPeDPwMtNFQjXohxkmAZUxSxr9VReMuPpaA6pvUFnPCov8qHfxYdaX6VvBWJaheD",
  "key11": "5CpnsVg9aZqSxrqnNZrL6RnQfi6of2YYnFbr1RZkpNXy2xrJ6TAUQak1T3jNQ6wjvtc5W67cdgVyg117R17mWki1",
  "key12": "2U6TLaJBBiu9pRZ27YBoCijDXcpYaR6zUTrpAjTuuUg1z43jMHnsZ34DFuqB585jPQWpeyNzvJicuXHgjp7tWz4q",
  "key13": "ZeeGV3MThuyDuzkYaGBBBtXVXyngYG6frkXus1reNTZGK7LEZy9n3xqLR5cNMZMeRrUev9u4GBUG2wDajpcRB9D",
  "key14": "4C4nic8XX5EGkE9JMVj6mS6ds4CGCPz7qdzpawvRaHQRxiPxeKTMC4XX1GvU6weAhxXVep7iFGyvbqmY8f8ADjnN",
  "key15": "M3VRYVVeKMUYivhTUWEUPQ9jTEdN5XtucYyim9vaxq2a2nDXy4YMz1nHCzabA2phFBCTAHQvP2FDdKoutbwZZ2Q",
  "key16": "4TgfM93xY6zYeUWmZQjyE9S9HySEFSVrfbVMmn8jkmiyc1s2z9ifavJehQB3YnVV8Wy9GNSrWkTpDSFhCi5okrjN",
  "key17": "q5uHLMJ8ah1ezvJCiErNsu8naQCobjJfDGnhHroe2WwRsg7CWyhmF5RczqkkJeHncuNmRUgYjeQ3kR8DY1PGkA1",
  "key18": "5vAEqjaGEaiiRYrz3JSsVWd9AYHZt7MKAK6kfkUFrgZwupuuXNNjLQxVpaz9vjP3gQW7X8QFHjczQscpNxHTXvkJ",
  "key19": "3LDHmcdsUt7qTkA7iRsZibUkFcUSXK6K9zW6TctamNF1E37aFuSGoVMwjHjuDAuce51zXAFua8nGNSt66AyEs5Ek",
  "key20": "4sHhjTq86xSwUoX3SRiJBjNPTP8AWVR6oXkUoF63GuP9AduaYkz53Fuh2ixr73M2cfz2XuScYFMhmDHxuP2mBV7w",
  "key21": "XxF5HcmudEnAUQfeqpuC868MWF6dtvKSUCzfwYE9U1SZjeqJ82wFGb6eagbfQ6o7AgoiDHPZ68vUy7Ty23k4qZi",
  "key22": "4mvmAGJe2m5LBG75Bz38ciyZj6f5Qdt2wMwvL8ZVZotN7CjaTbo6rumwv5XuAcTULAtdqJTmsC9VnktJgDhQHqTR",
  "key23": "63dccQyJaDfq8LjwBrdbfg9wGSAM1SrmcUoU3u1gyQPLkjfaPYdTe93dQrsJPtVXefou9maFKo3fBMvejfnfFb8j",
  "key24": "5TkPAU9P7So1S2zpoxYd8mrZU6shobGiNDHn5rF2KojTwMAS5bJghGXrdfeic8J35mso7gPGCFMob29fuZtw9ojR",
  "key25": "5bawhCFSo6FeAZypxmsrMsX2C4ymPsMbCbacp1xKywo42vVTCbRYxUAeCgMYKKFZk4wvhsysdWFLjwRDxbBmJmjT",
  "key26": "4LKbELhULsNpdYguVZZ5FmGVRD2A6fmn3HRgUKMA3ggbJgMjnhJuvbpGJoBuKB7HjN7xcCPJSKix3cnvchkFNnB9",
  "key27": "4wEpDFxMDt7ujKf48XR3DnSBqkkENn2ZPyiFT3JV6HyVmu86p1NfoaB3kB7vVXbjYx8rWMa7uFvgEYCeTBUm7NH1",
  "key28": "672hjmFNzMbGUDcCbdYQTyeUbuTVL5SBVF53yaCPgopNEf3PDZpnxAjxvr8qeCsWX7KwpRA465MDW9zcMPLPDG3v",
  "key29": "2dD2XQ31yscvthpKReoizdD7HYokYdGEkiggjJaRFzgL1RdFAumAdMgqGe3PUQVwZeHcqxhwNVP24TMs12J12Wae",
  "key30": "5E9GdzbAku97QUzufvuzPHymqqJGJfwyg3TrxmxxgKUF5pCe5nSSPj1Arm2YG41bbMANSkgbfsjjjMQdKn3r17xX",
  "key31": "6BxmiqJGGetYSLRCHLue5Xnm6UuPHDsxxhtS6trQpeJHWz9f94iymhcDF8sQuc2KuCK8rTvgC2TTfAagTbFikuB",
  "key32": "3MfdbGKiU37N8J9FsY335Kmrot6QeA1sWTNjXpoykaMB7yTiJViWnrsTUZG2u7fvHWR3hzD1ujLQigAeHowBw9cy",
  "key33": "3XAEUmB81aZis9NEKXQC2Cf35wHGPfpLeSd7vHYZBXPWMZQ42qzR1QGTf78sKmCPfjgmjd5w1TW2YB2BpZqrKXob",
  "key34": "2mA83sR713X859f8F3qMBzQbVtfTjALMbttfbxz4hW3NTJGpZVsnoNPoWQrZSvHZuxLRwCuYruXdDBT8ozhsJT3H",
  "key35": "5EaPpfheybKjbaLmsyqSYUVjaCVy4sffCrr1G25SeqwNyttoeZ6mPAEvPJXiqusYRTwykMYomXiYptUZFJGSjdD1",
  "key36": "nzXfFrRxo2wtHUUEexc211iVkqsxHG1ftEGeSodiZC66cZARMJH1XSfNmkPpA66rDySAd5eKMFkDSHLPFKaP4Zg",
  "key37": "3HdxRXyfoCbc2VL82iuBmWkj7dHrpez5yUn7g2HYPmUzFyJ62ZBAcJYqDa6bGY4CF7Z6iZXFooXU8DB75MgZDctu",
  "key38": "5ZoJs7rzAMJpYr3NiZQburrgviiYjq8jzeSD2SHwaA7VtYAVhKkSMPgeBLAskL6j62i2KeJcPSGfSpoEGhe4LWaf",
  "key39": "4mHrg2U8gGCWcGZV2xHywuvBK9BwpjzpqaFeZAtxX4YmVgzQWy4tuKe6vY66XJQYS6d8iUB4e6XyaxvNgfRG27DR",
  "key40": "4Wc6R8cAfEw2ipR56nPgBm88B47b9b25PX7dQSiFXTJ5ZBtwhoqhcxsm3ndnFTpPRaEJbveVHdRixBcMqtnqSkgD"
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
