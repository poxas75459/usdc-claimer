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
    "5c1b7vakU5eiGSmWaunSQTkr7f1kLaAtFJ8W2fAcbWA3cvnQaWxh5NQkhkisvNTykLvQsEzjsd2kbqD6bjiGZQwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ayiUMvqWMUaGh8iWUMxuTnYhMtrP1rPcZiCmgRwUemXdcxth2FHkz3Z87z5kW65pyRdCe6Qv7txHt6EeUQBv9uG",
  "key1": "onvZgU8gCaaENycKv5MNgf3NmzwHZS8xdHVYrPjTVzLn9Kf9YrjGHHjZ1hJShJzTTK2AyoQ8h8Jt1LKjMgBzcY1",
  "key2": "gRtarYriedXpmm2hv5L87UfuwEqGTwcCVEFTQiFCsd1V6AH6HA9AKyPt9RkMCLXa3J1RLmdDg75oF7pDoG2HVUg",
  "key3": "4DqUhp8ZxXJbnDaeprbaStBaXZrZFx2kcx5rHKVTrWn69NS81t4jjJ6wAmJNDqQUkA981fgVz95kmPv5CyzA6qbu",
  "key4": "3NgCBLp8NYTf5zdMBLeKm1EosDFqUEVNswU8R8b2tzXR2bcmTaet17mZ1PXTeDLmHhZwJWhxjAR2uEPFRffqPHjL",
  "key5": "5zTFDbwSeoNyPAdV67ZuWoHxjApfDB3EwFkiqs3Wb7Qm63HuWAM9FzpBXJDvBZaNnX4niG65MA53oXPJ9GAPkbrs",
  "key6": "2Qd7geHihWU7XrEjoz36kFDNKK1yUEuVM2gQn5k1qXFpgeqR2hq8bdQp7v2tJBA3hfKnX67kde8yNDVGHuHL6ZVj",
  "key7": "YKGkNuRXUX5Qp4X5EuvfmZskgDym65pctQzq8cxQdGZufyyRFejPKyCjZNLWseWV5bxyVKygcHjaWD5SnFBV71N",
  "key8": "65giE9bB4fBC7wabGf1riV8cANrtits552nbZFXetvqfJGMgozEymApFHsQP7ifWyJVUjwAcYpvtDevYDcbNMrVP",
  "key9": "5R8haStYLgzXdzEmGorauAGfqzMMeek54cDxU7vHtiPdEDxFJyWyFNRvNNycwUSaKCKP1BhugHspcLL2jtASY5oK",
  "key10": "3wS6TEWdL3ugQvn6qYyMVnvAYRawEJrQXHAsBa9tQiV2r5sUVTsfjAsa2NmNveeq3kLbEdXZDTXJrRxT5GJaemF3",
  "key11": "2yEdByx2L3YMq6R4cZMKA4yKzu1tG8uHNQqhvr4Lw47at7RdUNjkkp3jqdWtT7BjWSyfXCNzrstjm6YQw7cfZPK1",
  "key12": "2vTLC3sUS38M6GZW2haPX8gHNXQemFUFzkesGXznL1t9WxXS91oQgURUpPzk8Ktx1MWX5RrrnNDMa4mxBi3CYnBX",
  "key13": "5CgSbXce9phL4SUxvUuBdgmrquDQ5kw9Ybp3mmTgjzxTtYqJ6UJS79EiQqVn7ky6z3zhEMp4TtBH7WQrFbFXb8K1",
  "key14": "3Ct46rmpG5DBeFo6mYKkWhbKuSV7fWK9YwvgiHMkPLEeATWQGoQkedu3sa66QxmMKJ6SUVWcMLccoPTRh2eZyzbh",
  "key15": "bAGS7JWqJKv5U1Kn91kjZDV9LCDn1KYSbR3H6uVt4DY3Ktazz2U8scSR9vXYoMhztoEmCnfHxdpfYTay9X5BzCX",
  "key16": "5Db71wHQS71AvpXX8bpYRcvXRSHVkTYerW7wDahWc6RoMsw75AAvBPSdpKthxJNxYP4NxC2unhowzYmJK4m5wnbk",
  "key17": "4fwSvzFZ9bK2ERrg49NgcFu9Th1dz5F8NKNWggWrUdLqNrNGLnqt6KpdBbbkNrGpxDMFsDky294Ti2QjBRQZV1oW",
  "key18": "4aETkBpyMswSRPpEypGE1vvXgHkPmbnPKrDBTQCEJmCdohXVdTz1vKhNh8PYY1HoqDSt9hRiiJXxXYhj5u4QSNM1",
  "key19": "2gaoTML7aMKQU1oipyZ2Crs8KKQaydjdbjjNk3pxdykF6qjtv8XLsY8oaDT3Y5HjL3z9k31LkHWAxjpUgAHVhWss",
  "key20": "5Zp9vaK6Kzr9KWKgRYedxLnXrBYuKZpf81MN4YkdyfzjPoBMEZjjY6M2Hb3P5fxE2gbW4q2czebsydvfmHQp4jvH",
  "key21": "3Vu5yYD1VaP1Kff9yCFKYCV3XvzAXVArPQAEMx7TPUyMAgubFgXweLVR7hvvPSMnjcKZc6j2aUWXAhXmdYhYUZVg",
  "key22": "2vd4mA2dXpcD8FUcTAmD1ANGLa6vaazhtTDFBBXPmUD3A5WCCNSn3kbNLdu4PNbJzDWAaMRV6MBHkoEjvwKCyBYk",
  "key23": "3vGVtsNh3RVB4tcCRtj6P4QBQqL18V6UCasSgLZpCXKZUaNntwKhfGAjP18sXNBKtzNRiHu37Pq1Wdhg1VEFrXYZ",
  "key24": "DfXCU7GagkedANNwDvVS3ahysmkrxiJqJVMDCj6y7vMewK46FVUvVS9sZfa8CVWf1UiRjoVDNBFG3HJ8gMxgUFh",
  "key25": "5J926yX7sQoAxDrGBsTCA3W73oYSdGUmtmVpe9ZpjF3sFtBW9Rte7PjCfaYsT68GWdQwnNR8qTTrYZmb2XiXo5CL"
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
