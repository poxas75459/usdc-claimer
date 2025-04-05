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
    "2VL6SZqP8pkHqAdsAjQxQCbARZiFrjwN3iky14JjdzXENiZ5ZhaookVGXf5gvkvjiUcPoQLHcreHhWuu8ZnTe2Jm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dYSiPd5kTneP4ftCZFt1D8mHuXhFsd45Qv73uJA7M3Sq224QjAaMKGv35KwBr7Q9S95QR1QyWAkNnpJMDefCP8i",
  "key1": "3KMGfLtjGUGm5dyfg6TsRsHJJptNeNXd6Lm2trWgauuwVnxqUfxhQccjvqTFzrtowsnu6MtLBhRgQkmnmg7ta11E",
  "key2": "3oG5GM4zvPyb96u2ZUDGZqyyNo1Wjr3naH66YTbKQ3RVfvFDQSSx1QEXpBqXmFLoZzon9nW8VVBfQANGFSFradFC",
  "key3": "4oVCLw5tVPRcYKdRUkkta4GgUHnaSKA7GKBqbKCAwE19HtSLRFnodkPECtHHgi1tQtPc2BKHRzeXMBcAFcTZTXLb",
  "key4": "oWVUAu8J4mC99eTC6hd73ny4vnYwDTmWjo7GA75nfkUEUTJQ2c4GHfBYFb6zw1JtE6JmeKHRQgmmETRs1xcmfgT",
  "key5": "46iwffka32ishoaD8eSTRmpmHbDdc61xDEvQqnM4UXiffxRxnCr5KY28BEdLuupLjJND9mpSWqLqA3FuZ37T6Hye",
  "key6": "NY3dJUBTHWEEjAGgkGd6SagtRXz6CHMA2SPSnJA8QemFLvUiBJSMx8C7Kz1bbfX7SafspzmgHMeTcdGYMhEdSwa",
  "key7": "4e8aneAKmWHwVz2q1Zi4yRpJn6pPbkqwFkeFxAvruGXBhruX7Taqp8fH7JxfywsVQcfqSaogQqcjNZzg8BHZBKgS",
  "key8": "5nE9n4R63bRZKKCLQv9mwsN4hBXcL96E9j8r8wvTtVRtjh8BfFDYbAvhV4td2dhscJDAR42FKipGkJJPVakf21Wp",
  "key9": "2qLmCKLPjBRW2SHC5DZXzcy9o4hkFYCMnCQgoBQPHyQdsLoY7CEjn6zHz9SigSuKnmj7nuxt9Eq7vLGWHutj4PVQ",
  "key10": "4uSv461CSXtgbaSCcSPvoA69wZjAnQJZP1wvxRNXQK3invVf4LksiGkk1K9CqgUNSZg1k7oSCTN8mRW7jr5C78Ds",
  "key11": "3ASmvpgTWc7jwLsja3AD8532BBFWu1qAfyyjocHDSnWV1db5vhm9G8Xut9ZpSHtLS8mNS69vMHtCiVjT4mWuF5tV",
  "key12": "5rubbm9o5kpRtuD3rBhFnjp8qvdJe25XcVoW7HAjYRvPuWtbSAYvJ28oiZ2y4xf8KdEkFtzwGohD5CU7BpYbtx5T",
  "key13": "5cfGhdAfYMHbMLykMZ2TvyzX5XyYWd2PYobr5yhWYq3BDq5MENCnM3m4DUaGqymJdpagEXK2KTGAqjjEHRiXSDZX",
  "key14": "17zj4UnRm9ue8AYs7C3X3wpYahVf58n6WrPM2MrNBGWnt4HjdGuRYAs8RSvUjej9y9k18TsKkvhMevsacGCbgR4",
  "key15": "2pY21qp1Xk6Btp8k3xcqYi2ZzRYgTyV5QGUpMsYoFkuPcpnGVvDmNGG8vBAW4BMQSpBbaDjDd4F6fqhq4HbrFJMx",
  "key16": "3vLRVueMDoPLFbcRRAWPQAt1pjG6kWP5aio3ixG7oQFpB75giLeJexRAvFvqphtUN2xkW6TcJGyZt3gWBQyGg51j",
  "key17": "3awD7kFdv5WnyJQSa4ktCnXoYuNPtG5FDprk1j6Zw4eEjxdrnCvM62FFbLVWFTu8PRrZ4h5CDJdcehxwfhkdgyGn",
  "key18": "2YbtZx8CnxuQ7Ug9kWF3f7dSLognxt7PY325bup3FRTbqczgy17DwkbXJJRvaaZoBCvjVTiTMCYHMXs7DXnfdf2s",
  "key19": "RRnTaXT6AF5AbSKR6gQ9jfy5DFxWo4tU3NU4Uwzu6AgxGkBXPeTRJREQuTHP9xE9YsfNUJK3KtWpehcAa1y6Uca",
  "key20": "59x9UFvRTscMBpgU92K3XniH5H27eRwmbexodRa52LzWXoiyzHCKDWMmG7bdA47EAXoU5bqXAprwid3XHD7X7bka",
  "key21": "32Zh2hVi8WNx7WCFHBgpsT6vwMQvyz6j4PkNdmZnE1VYnPQjGbAFdQpM7qTb8shDSpoq6wEe9P2iFDAiuUTVygrz",
  "key22": "2sBqZBcUXSPZuycbMac9dHDLHswjxuqVQKqeMNJ2QnLeAHPYhMTLMxPTiRkEBtsQ5zZFyy4kAZQa8UJMaeGR9aED",
  "key23": "54UABCwcf3rCRgsmutvtWkhhyn3iWuZLkPXHhe4xEN7xpF36EDfp7YwGFZeJDju8GAxWBeuXupwxkjpC7bptr1Lp",
  "key24": "2gSrkciU2kiTY4AjkVt6C1HPkDPxy5zYBU6SZKP7LPpTXTiWd5gGw6mWM179k5grvrUCTxVrAbzgrLfUBGPLs3Et",
  "key25": "5gjjw3isAywXDXYTZkcyN7hgV3mYEUM1LKb69w11eYSVudWjrTrypiA48YWdnmnetpEfprimVU3s6dGjwuDZQjiz"
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
