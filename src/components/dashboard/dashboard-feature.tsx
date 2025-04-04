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
    "3zHNSSn9xN1QSG5GPAUxeH6zJpDzgeFLedhio3CuwrjGwTj343PeDBCYgdHPmtrXUeTMZ2hJpz9Hcq1QGYSFVK5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i4959LwnoMuzX2mYpMkrC16vRLVdE8Xm6yGhkBeXRgbWK4SBH8PdBrnf413NeTqWbvekUk2wLVAXKa4uQRrzYnS",
  "key1": "5rFLTiJbx5nmD35gQ8utXYNsBcNifqwQHkLmRXbYJvMBbVHqrajXMWJTLqeVSymEJRdZEAV85CigWW74M67Xceeq",
  "key2": "3sFHAeRwysNKnNDGkRtqYyy23RJj9bdsesvs79wK2sfTp3pFHYpefiBpZnkLUtvdFtVvTCBAJzCDwhtpAd1EEP3i",
  "key3": "DcTKqLiw6fBsUSJaRPa9hRytMPjZtRsgVQXcPa4bsx6pvmZn3ni3XP9UUHPAZSSAkKPfXpnm5w8vEVBK9TZgw7w",
  "key4": "3zoKTzutAnWpBd5b1yaCxAKYKGVbZoGkoEfQepJ7iHRTu9eAZ9kb4xrpXUo9k8sXFjiCM98vy4z8ugGFizNLouXM",
  "key5": "2juEDQtUD5Jf9rHEqsq1NKNtdGeQvhiY7pCDhFDJx5cRZBKzjb4UjALVqqUXQYMnPeYrJTEayxRwkpP8sL35Tcrq",
  "key6": "5Bm2YhC78vB84WbT7qM5U2uHB1ur3rwBRMFv2fAU3mhowQpVrP2Ne4M7XoDU2PVxgSvQWa7EAajhzmC3gEWLpatG",
  "key7": "2Cygs1ShpxnGQtQsZ49JZpdrpyVgTUPPNc47fNHdcX7t8jwDvMv2y4A3bFAaY4rNEt3Nbgg97ruZkricawA5aBEW",
  "key8": "4TXGqudJ7CLcGpWi9vohNdrX91qFfu4pWPNEqK8KPn2878MQzwbAPipYF2fRScqW6sc2iarh38MTxa4Wnw6LbGEQ",
  "key9": "3JrWg2aZS7vgAmBzH9WCiyuB28vDEf61gqXJoxtrZjXFSpcy1QTrBd2JUWK3unb5UJCmKZdNfvrxSX9DYBSqb55y",
  "key10": "5xBST7v1XGKtpvBK1e89ow9XBwYmLXTma24VjUYkDQojMRfkd7yDxvw2TKB4xkR4vTA4nG87asffamAJvbb2P38g",
  "key11": "2B27g89Kwc4KYobTCpwgTHW6uXpHodEXpqVvidd9fh2zTgopmUKfqMsQfuKyskdj6TkHZZUjtFo9beFcP4byWKHz",
  "key12": "24cEDrpodvvdccMrB5sTrmLtcbz5zxw675TNQbqt4nfZccK8V4nLVRgKtbgUU8Vt8Hsv3YXTPojrofrxCuLyS49i",
  "key13": "64pUT2J2m5X9Dhw1h2NTVMjXnNTBHQM9eMbGF1zKTXNW7bRfsNusRjwcBYRw8ULnmrKH9f86x7AZFDcNBuCE5cF7",
  "key14": "4ak1i7VjvejSk3ZnUmnGCTx7e9dSy1wwu8TzHMuQZjm8wC7AidzxUan1a1yRFjvqcTgxfJwV51APt2q4H4YWzo3A",
  "key15": "zKdSPHzzPbhVtuJcz7Zme3yYRoULrQoUXJ8w11MGLB62Kn56oTtbWwfPpn49HNgt1Quu1uBTsauV492Lw2UEQr9",
  "key16": "5jYD9jM1ScKbo2DfWGXehoUnYzjrzTKd9qUgDvo2UGhzhvuRKRmf3W6WJ3L9BwLcg7PEAG4hUGhX7uQ6nSWqToQo",
  "key17": "2hSmEpdxWfNNDvCSMBsbVCSgB1zN2xqdr1WxsyX7QdBS9ZUgshphAYkXeoyrfeXAG5zwDfyKvuP3WqaNsj4Zavna",
  "key18": "34CUgHD2wpHwSbvoewdoXMZ1EtJMmrrFo6hbNsi5ccbTG5TPg29iCYMb2vsgmysguvk4DjP21V14zd2JxQhZCU4R",
  "key19": "5p8KVBizfzvQ9Zj3xUQbMFW7etW2P7DcEH3MLWgPR72vQhpkvFKc93in5kixuvvGekVWEX2wP8TtCEmjSGvaBBeL",
  "key20": "32CbFcpYgj3NNn3odXvjHrNSWzGxY3XXLa2ZmxJAFVvcPKTNG3gWwW3kA8Upit35fbTiPPvpo5S9YnLibYT1hUkg",
  "key21": "3RBARGcUKndgDhjvGD1kAkpkG1vdm25SKLUowxfiCCgYmQ8XiUyzyqTGvrKpyc9VH7a9myDF3XhJbknc7L7qaLpN",
  "key22": "3TqiehtpUiUgMs4bJ5eMSdTJGcfXZnSeuTk8UpVVCYnK5M3Q4CDmwbzoKFZdnj3dNsyBsvyBnLiktg7zifjG7Wwz",
  "key23": "4N4pN3UEcdTcDSv8vypoKZr3oaPMeqCCWSxCz9UNTeozJRMcJ6RMrogF4XHVrCJijTtHw7sU1omox8VrwEXd7Buu",
  "key24": "5HFNPd3nSCrChx741dxJ5GZVJwDxYy3hCFiEe7dpLNDCUo7pWdGsuXqKxbLJE7ob6DU4gbRiSPtQZbTuJWDQ7xYe",
  "key25": "5WyYakR2CfL3Tj4cqYBt5UmnzbkRh6nzrR58HMkwy8i2WveHN9qRsebeVGtrhPfHxUYMdUaHnvF2DXcA67T3qaYp",
  "key26": "yjwbAgCdJHiCqXzw5wwCJTeKYQubR9VxFguFA5gFRY32BTFZ4L8GTA4iRY36ghr4ubVuZKV39vaaEpJfohmx8Tw",
  "key27": "52cuJ9wsc1vcpWcbXLL5XrQepi3PE9SUBTF61cs7qhh2fGFJcqj5AULU6zPqci2UxHaV634MzQvbXENBdz5JA67J",
  "key28": "2cVRni8oh3LGCqSYKTkysDTyAsfgyMJHdTEwKRvVaChsynTNkfqMoTM93SMo58iLJvLi8QJ3g9CVszAPt6PavsWr"
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
