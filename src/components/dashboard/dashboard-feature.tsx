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
    "vNdAmXwtQoFgbLYFPtLiuQbZWHWJRwTWkKnXeA2fzLJzQnrQsUbaqh7UQ5oGgc8LBtznJpgqjyeKAxKNTBhN2S5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eMvG59L6BvCLLyj1UG5oAkPEt4TSuWoMMWB7UgTEDrjnt7gLbjNKz6q38ptyyB7XHgLZm6VeRgySiAWw4E9pDLG",
  "key1": "5EdQZ8iESbMPAMC5zwCk2k7ydZyZEeSdGVkcFidU12B7BJUVx8Zu6rYASrcgrJUxGGzQXtdcriSnHTMMzM7647Ss",
  "key2": "ZGndqK6Qt6aeCiWa6z7XUnu7tz2W3SyrZtdd8gg2NnGAZYgKyqf5nFsHrQxGxT7vRDGWUK1UeVKibtu3ZFb9Z9V",
  "key3": "5kArYfwsX5eKQCF2SNysXtpHd4cp4nCgYBi3hAhgZV93sdLFAJzB2iXTCC6bZFTA3Haxvv2mY84yrrMoumDATXyd",
  "key4": "3owLBCDj8pc2bW98kg19UKFZ45DFAG8QFUHaxfbzihd1KpQCQ4ogPBNkrZ6hqzfWcjBq6ok1YUmmbNXYm47JqExi",
  "key5": "47Xuk14BoA4bCgDjv6218XkWibmgDNKWqkCFKhLBn5QW99unvuCzrxtQ3FDu5DMnxUxxVkwC5CkcSSYu5Wm9L61D",
  "key6": "5bkof6tYnmy5BpKnRc4pyVEVW5tSyCBgJJ6ti77UCKv7wLrw2J9r8qAKJ1guvZ76LPWtWGLYwq3PzNKSd5LKUFR",
  "key7": "Rr4LERNEr4r5o7j4ofXH1CYZfduV9yGJZC3NwsL5mznc4Wy3eEzb4nXnz8m8YrmGcJcGdGYEuaqicRrZZWyXyaH",
  "key8": "5EDXHsCYzpYSTozL7w4Lv5SrNt8XLK6TgoA36MjmptqDfnT9oRjNVVvMecp94cCF33r7pva5ErTWkxAPaY7Bjx6J",
  "key9": "2E6n2NuM42WiTLm7ps4oAX29FjnYAADniwxs46VqVQLV6gHsiHuQXpfmqqznX9Qqte6qRQijEckuzyFTVWR7HKWW",
  "key10": "5xg12zwzxwmZBspWZs6XEoR15wxpHxSrE8hVbcS5fX2DbzabAFXcswuXK2SrpVZYJDCfr89QMELhxAwheTv3WLbG",
  "key11": "2W9NW1WUhax5Rs1JYTzJ149HRn2MRMtkw1Ai8dxMSM7QcFaSXD541LS2vk2SM9FrjAEAV2aQDmwgEEZwt8FQaECn",
  "key12": "r8zjKGNsrW4AT7JBwuu3CRV36DS9Jem2eSuFsxX5gLkwGJ2kYm4xXdvnWrnPNgoocqTPyPhDCqYTNiP8SELPaMQ",
  "key13": "46nN8PES8iUaAoXgzAEY81GdCpkzjXABbbgSH6UT2koFhRbcswwigGRpmdqBs4HPxZeUUYbf8hDWHpi4wAAazSzd",
  "key14": "ghWqW9xpPPFGRzjhEresF9of6bcbBR86SS4ourGPeCWemcnYczRWvZ33gVPg5Jf2APAhdt8xJQrgrxsw5itA7Xq",
  "key15": "4tU2pmDnTENJz8HipG8nFgSDZD6nJTSKaL1ui88pqGwsWfSjRrjiKwZnzeWQ2oKqYCbqRzZ1Rc4Lw5keZd3ZrSUf",
  "key16": "3z5Pg2AvnEPZSw9nX6nL1TPJ4q2kZ2v29fqCTRe9zvPDjqBu45ck2LccZRpHZKSffHZGjLUBNKi52RvuJTXVBUSv",
  "key17": "48LrNm64PpVc6Z4is1abKFmixakCwU1EJXWTG4qjB14TVSmQJwQNsarVKK3CHqEK781QKfskiyHwojY8YYXeHvGD",
  "key18": "xgqxcYAAYR2YZiHAR2acsxHtGeMhYQNMem3D3q4VoTeNrxwvuqJam3owCPWKumehbtHtZLNZvmVEdaqBL8cQT8g",
  "key19": "2sryh3UaFKte7MuAjFUMTBPkNYCzwgKA7zRv77BQ4Tuot6AXi4AN4gjqtkVzttvMouJsi9gjZhzavTVpUd4ew3So",
  "key20": "4oY68BFiEj8xnAKbdRH4968FMsJvq26yaxjri2exNmufBxjNZY1QccFLWmA2BUeqQwvabjKt5A1WSpKZqJuaqJxD",
  "key21": "3UK5agbqzJ1NjcLk3sFmfkckPzDCj69twr2mdcgbiQvQdgKoegHsSgZZnjfE5CjH1v4DDnSK6bV9Qm38RbSMVuwk",
  "key22": "GoU3xk3ePDZ6qY37xUEJUCik2tDFSzs87jra7hVDQLyrTZE1Kh4oHj4Qa1pQGE3ThEfGdUAnLAjTSqx4Vn2NPqn",
  "key23": "3DGJiF4r6itW1B8YgerprwAEx1rit2t9cdC6zRSZvuro33THkh45hZZ3MQWNuvk4membyGmWhwzyCqSrMRwXtjD8",
  "key24": "56uvK19DT5HBDt4cH8y2j1DTagZWivwTjZBT88GCQmJQze9reHTMrdmW4opV57Kc26DHe2A3LLMo5WJrmKo8xv8K",
  "key25": "3iRt86bzQn2MZFUvqVwhHZ1e5Lnn556o6JgGpVvuxRoqu6PDpNftNM1a4YjqLJi2dYhJGxpdyxfA36Tc8gitL3j8",
  "key26": "5AQVsHV3rVvnsyJP2hj6Ea6vhqBubUcGiLnji6fqp7Md56gPcWPG7WBqzkUdGpkJVYo1bPW1MAXVjqLiRwNWPyw3",
  "key27": "5TdjnetBi1joBZfZJcFmY8XkRmDUFmYcm8dVRzbbGmAjLKVgzXiUXpbc4eDXLE7W7yn9rHeQu1pYF2PLajVizwm6",
  "key28": "2thedDPehuAtxRXvh1UsLGw8qKiTVpthTCbEZo5sxMqUQh8riTAEyffYUyorkjxj5YnT6tze8mS1NFDHYdKmveur",
  "key29": "3x19H8yNHpHYYDn1p4nSpL3E4Lgry3ZXcweGaw3M614HHJj3LX77nPdFdzzumvxWXwfi1LrVaSFRxRU27F7VRRQa",
  "key30": "64daFimX82MKxhKp5RYWndhgqj6mvvidCvzKRCVfRkfrjPLX71CzhRHb82o4K4tkNGCeonf4F52oVoKPgrWwNEJ9"
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
