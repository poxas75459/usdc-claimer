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
    "nzdKzSpqyrPGx8aLXeZ6ssH4aBh7KLRX2wbkHUwnbP62eResaRZrqDcHiZYT97BHGz2rn62KqQDe1cQo74FULZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mJyE2Camw9v2PiupFsiNp4492J5xwNVJDMS6ydFnmD1792aMv3AGsCGdKh6rjz4WX2R3HG31j8EGYefcm6dVKGY",
  "key1": "3ogb1SKmz3z11ypJEXWBCS6FEYprwbCEP7UVEJAaCdzjBJwxec1SSDEgJ61UDnbXNoFN1sS4Dak3pFzD7kWzHRgY",
  "key2": "3KPCv8VifMFs9pWStc7Cq8hCXAn5SQKj5AVpUFSXt94LukA4R3dpQMnX1kpoPWGUx3udpKPpGc1tVMYs2vWRR8V4",
  "key3": "3PoMu2UrPGSegrTpH1jJaJfmKV8RK9AnmiHxXALx5GwSeRrEvoHvP95mfmMAs65W4fo5LW5yqahWYcsdRJti5ZG8",
  "key4": "3RbLtRw8jf9J6yEnZHzuVVwPNANmQVREkdYzyHKfiYA2SuAsXBzEu7MzYTD6i95xw3o2P14rXY8sG2H8KrAkM6Yr",
  "key5": "5FLpiWWgk9Hu2kRMMBmaczV5LWsPhefHwHwZ9rYP9Cebch3iJBEEZEMbjKcCgdR3AgjMtF3LWveGEEmmnqWdFuRA",
  "key6": "2KnQviZDoDPSKaVTMpXzCHPMX8CnNo5SiGJcjsMQcaR1bKANBmWhnBpZGk9FCknm6hEGyQBhatmThoquuxQDLUfb",
  "key7": "4cVruHZm7y23iyLUjhTUkr4zBZWr9KjeMdBVdpjHaJr1EyzhYTpRFePmui84MsyNdurfxssSP5aYbg7jbNkqqyst",
  "key8": "2fMu2tbQiU9aZmiPLNHvEZ5E7xzuKJfj6r9ro4SzGw1j6gib6e2oAFQPjGMPRd1pkAkTu7sLjReTmM7L7smKfSJL",
  "key9": "66XsUNox5UiMumPmFNnsR9KrexpmyWXvPmyUQvEB5YqicVYMiqur99A8xHST8RMnW4SF7AtxAhW3CgT7bAZe9TYy",
  "key10": "iEFeMVHxyvCcup92jcKiQvNL6rgknDwRUMH3SYmRnDuYm2LDegDwesWQSbRwoGGoopuKYsp67S6HTzjHCbzZmdh",
  "key11": "3JG7qeZf1uDFFnRY2gdtjfg5d5RW9CnWhiTMmfiFvJvkHHiP3T7wwQH6BiVa2ewzmMNHcLsbRtc2B8jEyAAhSibb",
  "key12": "ey3rvJo97SvyYUWwM9zBSZrCTjiT7rcDZdCCEb4XR6umTuKSZvQySxz2gBjxZ7prkDdUT8cwGCropZBQVSy7tcx",
  "key13": "4zznLVZeaF5wxp6mCeShRFLjZntk8eW8STohoPEGxh7bhXhyixnzHMrDGAMZBSV1F7KbqDniibtEGnkmsLq34CLW",
  "key14": "4uCw1jtd4Ta8yF7VxApg7HWqh7MhiS5GQXEECk5ooWrTEnkVLDjPJM9FXjhdkCXmvTTieLqBGWRXh1RxWFFT1PPP",
  "key15": "3yXfbg8sezYZFfAxwbj5kKfmK74NnbKNbvk6cxU3kZfWscJfhABgthMtXbyeuhiHytfaV3f8Gj4vypLHi3aJmu6J",
  "key16": "4SWtXnuuUhWYLrhYE6sotfCdwrwgaQ8zEmYw1M6HsXtrMVJSQCKoDUnxr1gH23xBFMGobbA1NsF1FEZ6pJS4sj11",
  "key17": "5p5FU4PE95gtSgRCwEwCAmCKyx9zBRKgj8c9U5Vo5d8qAednL8MEPejFVwMzP8rpjVg8NgP56Xz7iKTCjqLeybKt",
  "key18": "4Cae3CJfiJqaaDVn7eTdMDTG38NNcmdGkZouNANyPjdDLnY5i1wQ6trSfAWfPQhRmcouW1Ur88aVNkr2kpbYvtCN",
  "key19": "3rBiuQi7yaFDs2qwmnLjQs5hG2aCRhQribKtH2os9hYDfMgcBzn9hjrXFfGtpUenHPfnD1DHm49CXEyk2yvuvEso",
  "key20": "2hEJykW1STzr5hFzGWsSmpULZvvw2wLCskvVKFNMgx5kmHVBxwoWUmDq1YfWtfoH6AGrjA9tDFMrsYmBgCK9ruWU",
  "key21": "3BHCt3dDH2VBB4Ekm53NDJQWYj7ugjz76iHwjG6BK1ie3CQzdVKHeBKNafyx9gXiNkVxpyHzRWGkn5uinCwm7oat",
  "key22": "wPCDXk7LBrsM2rF3ov5q85ExW8R6QEvY51XNNzCpnLCUd4QnUwqy7MjxnJ5DzeFt9wAhP4R9huogs17Q8QTNH2k",
  "key23": "AFFkia4zQtRXrgikpFHy4bga16t4UdXFnukaopNdgUyGmxS2dRUFC64RRBSLV6wfPLiUUTCqFXcDwzvmufMgEbn",
  "key24": "2GGruhxrHSfLcLFzrxdo4fHzw2gDCxZ3YLQ2GvwsxkGSF6bS2k4Cb88yB8u5PMq94hJfbRvd1wvnCnWmbApAAsWD"
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
