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
    "362qbvr1Z9ZA5nxuRqiULrssQiHmGofWHRWgViSaXEMBaYrUGSB1GUCQaae3jQjkBZ9DFcrJV5byCswoyvoyqMN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uNJg4pJdv2Mj3PPxUthaGnvmAfnxUg4tqm5nhj5QcsPDrrN6d15Bv9Apt4jh1WdrhHeXRrFLAhMn6LPxX56iSZ",
  "key1": "gp7swVS2VbnVP5XTG13QVBtzmqRc5aeTT5YV9PQtSQ6vWB2DU5gwaVKpBLZPbzTh5j8it4HMPoiXki5Kj3wm7iB",
  "key2": "3arxLxkhssmH9mUbNP9gWusYBdNdvMECRzC2GX76NA5NTkD6qmDjYWc6e1fLbVVavq6bbRj5wzf7kqTUGbYypEDX",
  "key3": "29DBzNL3PSnJpcxbTnHcAGQJLxLXL7nfhoUsrPJhnmf5v848ySvJcJRLxPa7HLP48TdtFt8yY2bqWxu2m43gChXV",
  "key4": "47bVu9AAqveGNk6UTBhGVT6HWF9g7v7KXjcvdJtGbZynPAQjnVf2doAQckZ4RmJKS5qJ8aRGYoa5Pq9kM22xCNqX",
  "key5": "2cwivAnnLFUGPvRFme5ek7VdEzagYV8o7J4kHHxz4JQ3vbWm9kwcZj3f6h6fiRGuwurJ8cd7k1sBoHLuPhoGR5SV",
  "key6": "39MR3oLabLUXJPMuyMZbrCmu4FSnMDpzRqSdQrfdMtF6357VazSB7e5FaPfySpn1HzEvzx3T4f5p6z8kzWj5faji",
  "key7": "3Jt5poSMDiTd8GbkX6zU9J7rpR8hdkSmGejgz4q5Hx6nKF3evJUMrn1qQLASLbBHgHjiadsiAqiqELjygn96fFi",
  "key8": "2YjL7RENZ1tNAwfRusyqyqXn9XdtffyUmVaoaFhHEaXxbWzH8hj5hmWMG36b7GR4eg9cwf1XEBAyDLezxC3wmvzo",
  "key9": "4RzoVJmRTZpWdrSbESWRPb9Pu1eVzbZFc65DJKTLRQq72R7RmAVUJk5X1dQvAfE7C7dyQGAesJRAVj14V1doPe8D",
  "key10": "T6h4k3QzojS6o6Q34jdzEYpNaxq2n4s3GYa6aXqqugDt9QpHWX8wEucbaGDxKdL6uBHVN36pKtZQnWxGkREv3QV",
  "key11": "5UdNJTfTMzH8WsKD57AwYiCNd92fdqmRis3oJGY5XXjSBKgczYjkFJaU9ZPXK8zhRcTuzTiXJHnxr7Dqng1KuDa4",
  "key12": "53Dc8KLcoajeuFgmTzmCgzHwUzG8mmcQE4XuLGD6TRvzLL6XBsVsmVTTHDGjJr5xcfkuQCXjWKnc1hCW68GpqZhk",
  "key13": "2VbARxapi3GkUa8zHzZV9UtcYWECt8o6wRzmZsuYs2HRdYC1T7dMdKP3Dhh8dXm5Nk1ppHdsHzT31TcSfk85MRdo",
  "key14": "5e4Rs8vFSr9n1EVCc9nfTWgw76rfSrufChCDeixaBcMdEg4zYbGbBvDpHzgpsBxT1DFTQQbDEHp9c4mj8UdLXBGa",
  "key15": "zx3cUuiYdK4safw9sSr5MNa8hmDLbYeF3FEKevvkuu2dBvzSu4VqL2ri8bcPz8bBq54u3ie7VbyWpMNc2KWfv7z",
  "key16": "5xBt85CMKFL61Bsnw1yGNSE2HUwR2U8coGPqobEFTdzMSGQHsdg8aLQB8GQjKhnjHi2y5MRNR7oSLNL2eC6Yni7s",
  "key17": "3zVqZqjuWNU9nbym6dyWTeX8T3sG2f2BKVttZs5tsG4LnrrKj3Uq32epZnkiQ3HSFa8j2CcKgF6MziRxHwnddKWZ",
  "key18": "35frUx3pLBAUYfAx5iY4crCW3XZeJ2cvSA3t9fv8bF6Erss2pzp5TLaFCQAyLwAkPaah1nadPJFhuE4uLdPHJtqo",
  "key19": "5mdvNVb72Gku3fJmYtUR3Bb5cZ3uKm5STLXcA5pKZu32qFM7Qck8jH8BZaiqVnee54DM3mD3hz8pvcdBFtn31hkV",
  "key20": "4FNJXw2rNwWNLQZHBpiQas1fCeM8AnfEyg8FXNN4FdSXXwkgDSNhZjr9gVrLWFJXESkbF7mRUFy4AMZ1oSsWL1Tw",
  "key21": "51DpGp89CWm6AbhSUtpyShB7KKeWn6S5mov66NH6ydwuCY1xeb5jWTE4VgPiFZe27fvQEhkSokZKc5zcNkQxXngt",
  "key22": "2MSQq9LjDfYewSYQJxV2UNCjEWnBVCVZUd5qckvWzhmf61M1gkHPNsFQGA95mERvddS6Wmw61QdB9rokRebcqVdu",
  "key23": "kpyK2NxwSbxfsaVCyFES5iP1AyzD7kRs8kUdUJzrHsWeH6EuSApbnxzdwEEdsXD6kJahkhWxecp4ZhUBrYFRfNV",
  "key24": "4aWj8vYfK7PRV8nHRDzRoqRmwcGN7npKv6VgQrMPNraYcm7JCKeXS6Rs9QUgWQKNPKj9DsAPRucHSLcRiDdShFE",
  "key25": "5g28hd4nuYNM16yjzPxxMLbm1qRhtppvFKpxYyMADazTCM3qvJv6yHwLcx7NpBHzJhaWr6JKHuLcgqqzpowaLNxp",
  "key26": "sT4AiNP8V1tBXnpwn5KxKNDdRSwtcSJxCGJqNuPzoUx2b8SPFpdLKJ8bXX7UEkGHrKBQrmz49P9VUUPcVttiqWV",
  "key27": "4XK13sUUHX8gaumWLHXDYYyyN7oNGm8Cm6f93hSEggDJ19q3ta2CdMjExjHgQ64RYeGL7Uu42sDiUUgRHR4ieW9d",
  "key28": "3RKghoJqqEpoCzsiRC3HRoarxMkSXgi5GzzCLUU1Jh2Vf116mUsKAHvrr8xwAMKXpMBAnpqHDZ6xkkRhxMSoLd2W"
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
