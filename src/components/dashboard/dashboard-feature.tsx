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
    "2XmGaC1172uDLvkffzVYbiUw64m9hko1a4tSFYxVfWXDrTqNxuV7MfhzgGgkf5mr6bZNKBoHTX9TctDPDWmJd1i3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PFQmqek44gHR2uWo6vfhrwtAjgUj7FTKkHSczWrB72v8GFQjJZqjiJgkyuq3TxCRrmR6wCxVNSHvmbbRfGwQr8n",
  "key1": "2u4kxrDyKoXhLbymoPeY63pYxkq4gvVrR35kRcCUM5n7Ktr81him31eR483pW1UC4rDdxijakdf9dLvCdTS9fQK6",
  "key2": "2ehJ1jUwLYSU8K1UhXLfyqypfyioaUnWkizREKcv9Srk5zQxXjYj2Cct1CpRYvWfsaP9HtfG4qm6HQma2XCBzuN",
  "key3": "2hZQMnUY1rVWrJTv9nBzKCuB4KmKa1ZuLnEhK14Pcga9C65vfDTnUHim8qhffF6F1xTtcfsctHFpB9dbP3W42bcW",
  "key4": "ohosK7RhfpTwTfpAF9LEsLApc57jrxCstm4nwN3Wb9z1cCWmD8jTHz2525RFwRaNhmURiXjwpB2dgb9JpdgCTHw",
  "key5": "8eSLvcHz8QdU49PDreNATgwU7e5ZVavdFiGQCKTLJMacHhgFaCwULLg779H2fTFXwr34rGWC7JhwntM6vLaz2yz",
  "key6": "3crUmVEV69Ewq1u6AdMN1yjXn8YXUsUiDtuVrgM57WpEfwEGHTmJc3ZrAjv8k4bLvqdscwPpzuw5tifnjk7WEb7P",
  "key7": "1bpiWG1ofx5h5fNmJ6E6NqhS5dZazTBvvDbwGGkDxri2fTzKBubLSBdYJxJ2Uh3jYtNj4qN3JC7RC7QA9MhHpQ1",
  "key8": "AVEZXcsCRL3WmgdeqsFeMG7W6da1bvdngwYEwt36h2GN7sNQKRXUXrveZB4E8vPF86yTbNidQ2BMnqpqtCHFb4f",
  "key9": "oqUTXjfv1CyveXCvWrB6KnH6WxcxhTGmCXYgn28nHJ4miRTfGXc36pSJuJP57wwn9fYqKHMyn7cYw3aWp5MzH54",
  "key10": "5wWtGNfdvFJunfaZDYbSnkZXnH6J8uU3ub83PZbPPoj5NQWDkfjMS3svqVWXYG5EPjtDGLecbKAbUvwpdoTF5QJq",
  "key11": "5FXPESva5cLZEuqwSZFba93HPAL8RBUzW6iG4J8EPHERGP8Sx8UhL5ME4wGBqgVfMyS1y2oPgZ6CytJkJFa9F56L",
  "key12": "5rpP779gfY8mddB3cksemhxc23P5kPAdB4VKVpaHKGWA8KzkmM184veGebbHRWgzJzwwPAKi1iEm88hLNF9X3aDx",
  "key13": "2xNeSgMLe8gzYLX9mDcvjUgdR8SeUVxdmSrr8QKG9re95xpUH3KBbcga7iEujLhGF9PFUVtQ8w4cUs7xgK8xKfCy",
  "key14": "4iyRpbZQpSVk7UWPy5YaUkFUfLeuZkJr4fXUfR1vUnCtkGzbK4TCqXd8GqvQPyCJoiiR1vM3xYJbv7CecdeWCPbQ",
  "key15": "4HRRUNxUtTY96xLioh9FLq1x9LCp6V9zkbpNrR7pvE3ELE1AmdJ2nCj1z9LqEgyXx54RrXc6bMocUKaVZmNyBVZ9",
  "key16": "4kRed4hi5pPbErBruvCdzaVKXwDzR16hGVJLWS5NvNr1TG5kfdabdbS8G9LHC5VfnaUkNiVQrFyee8Lkjqq5BH4A",
  "key17": "42GV2ZWRRHdiWTEXMgBX8QZT7ewXBkuLi164XhpDMgPcvfFzmdDCFcUjJ6yh3ffci1rbd2LpLsRnn4amthcg39CD",
  "key18": "3opukSMn219hFkNQXQvmQLtpCHtsw1osVphZHm4hqjKF9GXYXzJHnYNZ7sfgq6BB5EUK4utrouZzzvCUG3GAtRtK",
  "key19": "2hHZ3KwfrXG86EgDvsbUirMVjtxYztDXuZQbs3bxEVrJybJ6oo8j9z4dCAWbXdCzdkKGuJNmdQiqH86RKBVuGW5W",
  "key20": "ZEaAsRo5uEwty2zAT4MA3Lf9G8L3PtxhoJ34FgcyNJ3XdtguFsQap8qqapR2vZd44dARHLzue6CFABLXhK8ERFs",
  "key21": "4tRtRhLxWbEtMJJpVKnxyYrUdpRCqbzGaAcfDcU72tPE9vc4cDZsLbysMBQBCevyRJbtzMWBVvBa6zGikGDc5trG",
  "key22": "vmZVGWgzpkM6NeuL6SZuoMWgNgVieeHT9j9kUsVHduCG22LfXoKP88GpTXsHQifg6gabHumEcUK6A8qMApAD55L",
  "key23": "31XttvkvUhaXuX2J6enAD1Ubxks5wBsfwsrmMgyCCG49Er2MYQmakrDtJayG3TFEb9fTz64qvrazGhygHu7prJbp",
  "key24": "564nHBSz1bLozTQgv3LAyKuz4bPkmuzCQHfHURJkGzysLg3yxYsChbvKBZrshNPvnV35b56rnhVWTTUWt66AKw8W",
  "key25": "zN9ovzosKFH3DYBGJn76XLrSxqSRAZL8m9zDQ5YgWS57UNavPa3SpAmEks7wYM2mNPLukckqhNqwW8iRJe134nK",
  "key26": "3aCHeccWBED26VXccgfsGN3Rbj2PNBXZzz9sAjVc7g3yKkwsCYWL6d5dmdaHvfFVKgmmevihhCzQ4SBcHyqwgmoj",
  "key27": "3mLvk789ZiJsaHjwuKjUGf8AYmqngFvDVDqpR72b5LdqA1ZBDPXtFfy3SznUbpcvpux6WGWeSpeeGV2nafr9bbnB",
  "key28": "NQYCsuzGb8QeZN77V3rqxrfd2W1dGQLJJdMLN3t6E3jDGkdntfgDdxYnFk1LporRR2kr88N86u1ECoqgnHw6wFj",
  "key29": "3BVxohy1aWT6Ww9cRwKzHFFc7GwxRcAxtJU1LLU8PvU1sfZvJFSxGCBrrfbBBGwf7MPEBvFmPAU7FJQo3d3MRZFM",
  "key30": "5oMWYhE6pZksMh7YJP5FVWgLHircYyRxoy5ZzLFWnjbn68h3FW35E71AAV5YgC6MK4gmyCUDuM64BQei63SUSCRw"
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
