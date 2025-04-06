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
    "36F8Rvr2SWjPuE956xQuAfmpTPd8m2iLYBqQ97DEfkXY8jL3x41y5fHEsbSgGQoMNhz3sMSRJdoHy3is877HsWVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TbRN5taAHQazJFoDPNeDn3fvP8PFiduuux6YG2uBq6aVeTQFixVkVwkQ1fee576TciZhP6GAiTx5ZZ4eWBZTuoH",
  "key1": "VNrZVrGyHFStZyVhyRWyxXCzQQjqTZ2YiLDmFaMepv3FpwstwNiKSnEcNyvSvsis5cRsWCpE7UH5FwebjtB6Qq7",
  "key2": "5AaSyZFNCsWK2jJknxwjpLEqgow7s7q8LSWXyYgCrEZRNNMqVFtu4QX6uQ3WJ87cMQqzQEbJ5ootN2HA9DBefS5a",
  "key3": "44RMgj7VQ3wVs3FQUsbXgPUH5WT5zXx99wJAxjJApVR13zJbkVRGw46uLP2XqUYqRJ5HcefncEbyTEMxByzWi8tR",
  "key4": "2AZAScGSke6geKwDZKu5tcGFC4fr5QTywkrbRprxx8pitAMNy2vcFoThH7GNXGpmghsTd2gHHrVtQB25hZjqDVsx",
  "key5": "3dwCeWRmVZRvTuKmf1gduhsYD3aFRzcV8SpJaGqC4jVZvV2dxy9meRuZ7tRv53mgtyWG895CdWzzXusYocgKBJJj",
  "key6": "2y8EC8iQ7X4Rv5zNFFJ5VdpjGi54C6ZRnkMN8chgpRcNDsk2WqNv9kdiRwbT8twCXteK6SUWPcK6SCCXgcQxTnHi",
  "key7": "3tuTF6QqxZvKq4f3hyfDstZLs29uCVeiur7GCVFyMn9E3vkeXfwjj4KRwnLTbfnNKBygdfnqQRpVY8NUvR4FUuAz",
  "key8": "2iS2kAfU1tXbYjyfXvAvUqn173kZrCxb1y5UnP9k5abNmJcY8pNAgXbPfd78MPgpwNNhtdQQWoU9XatdHqHqdd3g",
  "key9": "4Fz8dWfiHcNvaMFX7ZHcwF8cJukRGczW1joVAz4mXB2KNmnQgkyytQYJDFkJ6ZKApVjf9crRJMagX2XY2MDAgXGB",
  "key10": "4TzUY14dQgguGotmrpE1bGBHugXCwuBS1wanN9nSXPx4EWhmYkbkD949TePdjdfn4pW77VaZtxUPUsuzqrZXV6cH",
  "key11": "3ZCrChaHHN6jan2swQGkeBS9iwYQBS1TP1ex1eiiefidGD1LUCTbtVBHYBocpasdiCEtRxU6i7yMDJ5k9uakMFHw",
  "key12": "2sHioboBNjQXGYCzHvVSakZb7XTz4nFwiaWpdeVcrUWLbF9XuLzUaY9uJZyLnxUCgcrA6XKTV7NTxSpnkbwvB2iL",
  "key13": "5RtEaXHQJZ1gK9AMHyFXcarvJbnWupabyaJs7Y8p1EGLmUKKruRZyKF35CUWybw2SUixiP43JRxbpbVibPSXkaYG",
  "key14": "aaStPAXBEb8ZmXB2yJWg3oiZp2GizcxmKNKEufHYHnm4MKPKNUskpFyo9btjpenRzunpk99kcVndVHBWs98LEpL",
  "key15": "4cFe75bvt5Bazff4MDv82XkLJJ7oSNceN8YtaXwPGBupUYSZjfco6uXqBgPWJRwfbQQ9YqMUfC9c8wcTvtCg13VJ",
  "key16": "QT7YwSePbmX9YTchV4JHHqosFvJWFP24Z4wm32FbK2ucyGwbo5AnNB7DfZGQsbqUFbYQquurnBVsQuEoPPXGQUu",
  "key17": "2Rbv3gqCQLPe28x4T6baeaBwph11ryLaSLemozgbUrDMPCP9CZJj8tHEFqDgeBLzLFjH2pDvRtYoMcHPrZ2WVsQ8",
  "key18": "kZsXNJWecLiAYdaxs2sYXzvbEs4A3deDZT5wS5fVWrDng7ocduUquRYdmmw7aPr3ghejL5y4pLjVeWzudzVENv4",
  "key19": "3LM9mCAmyVM3XCByBk9mRbTPJteVJUr2FnDxpcpkxTTpSCbxzPm51Sb6NTszrRBuSr3pCLTqWEQaQB37dD6n3yfG",
  "key20": "qV4Xb8RZGKZ65syEEaVuiG1nLwecQvXQXqCWAiRZg5oDwSLUiAke1Kmta3B6EBp6MzyJc6x4bBQtsnVVPMe7D2i",
  "key21": "1i4WaGtYGQcNjX5QKNDQQugwdAyzCeJfNrP7dH1X13nKWitTAvgMUXmD1TApRo1nvqTVLhAJAnMUkow34RLgNF1",
  "key22": "hwRVyF3zXc833EFuDRHrrM3tpqTrGm9LAWn9bimS5AWvcpaSUXX76qvRegp58PvK8nRMbStrhNa5Dgq6yT7q85K",
  "key23": "5Mv4eHAzpDJJT6WdJNVJvFhE5XFkdHHHQQhw63T527DQsCBXKvarVS13pFmaEKGfShSQSKeckTCn2p8tsQoSE7cz",
  "key24": "244YHthKgGCe39sqjHhWqi9zFyRHZAQhvkTUuryNkm8kSkLMgNRT3uzU4LNNLykQYKNJgemkCV3VzmE49BvJ1fM8",
  "key25": "53Ju1Eg83ahxNsCcB11zrGwwADnQvp9uEnqUnjV3ZSL7rNpKQmsxJwQZ8b5YjsNF7UzrA1F4sdTvMZUi8NB8iyws",
  "key26": "2Rd3EtE2fmQH7a5akgocLneAAM6wie8G5b6W6ByhocqvL21CgdLHpZCrgGCV1UstrwcF7F7Gme18n1m1jkoHDiAY",
  "key27": "3YzPkPYq9jTccnbN2gnBGqLjyaFvsxsNGgeKCXd5RmgoWeqWTEweqyQXXYWogoNw8hfp6wX3aqrZNxCoDmHfXZsb",
  "key28": "S6ayVdTHT8GPmrQjwv7J47cW86gR6EkupXpY44bhmmpjF5yqTQBYqDvuFLyw6qyFyJx5H1koorcWEjPXgtV38tj",
  "key29": "5uUnn5jAmMsDWFdU2gMGwXHgEUhFRG1uXrhWbrSe9kUbiFuQPqD2pjV6H49kdA7nh7tpgE2JjLZpZeH9D94Xpb6t",
  "key30": "4FzXM6hSWxXFY6wPLyeNt8w8CtvNk5hdjwvQRMZqKjz4QWzHjcqeszmfAcoR8HfmwxiMyrXekeRKKm7sWiEzgmT5",
  "key31": "5e5S3N6q9sD5SJejU5xJ3ZSbCTvjYrSPTyVLnogoQYVr76CjtWo87rDXcALqR1q7rfD4Jao2bo7h3oi4qpqyHpY2",
  "key32": "3js3BN6tKouMcg3MXGpDZadgyaLXyyEcEi9VoqWPXc2tAmZDVs3b89aaPQcUGo8Z8fLM7QLAVoMSQghN3Qrt3E5",
  "key33": "3b3nnsXCecHL6MJ2pURj5zGcCmi9tiYVUZ5PPrutsmNyb5NaQc8fMpsTePZff43gm5HugNtMer3St5UHUZqZLmp7",
  "key34": "5KK3gnJNjC3zhrw7BEMmkBYd3qoxrcvyfv6Uko95aWZVk1F3GPbH812asNX556QFEbq3oUjoMC9NcqjdEULqtZCK"
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
