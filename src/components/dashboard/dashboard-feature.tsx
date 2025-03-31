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
    "4UUosPApUFbid4b9dX6j2q9cCwqeqQ61rosUynLR3TEN61zoD2FHq6iHn4Hohu317rShXfgXycuwt7nVNY4JQXwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YvCi4BKk4sM45tR5MxsJGkohALuoRP3poDjvEHQKuJcnGjHHzDvyHaWRoGbojZiwRwvhU33bkhfFC4u5TxfXuVv",
  "key1": "57rEWnL5QhwqA7KNWEPr6kM1dbvrgLBqXbvbCoN289P5xDmtsBYnwJJqqv4Pv1ZdSPT38dZUvTEuDukSrfiUMkok",
  "key2": "5hq5uHQqnT8yfe5BBT975SdzcCHXzWXRwZmZjskuzk9M3jhUCm4Wr53M98r9EAVHWMA9LG5F9o4ZLkq9BbHMCWMG",
  "key3": "eJ7fg7yntNy6MC4f3zgGHGKZWYQGkPWkJGH4YzkQF8VSLJxqfwjHSvWB2rG5mwoVq2cErQagyhWvr1hd9roJVRW",
  "key4": "wecAJ9WCsbqzJtEmrbTSxrQQNdo9sQp1e5ZDvu26M9i9iY4BkSzLQjpw5hLodbzpTA2eJ8j6WUz5nepqZ7uuF7L",
  "key5": "2tbSBWzEq58RveX8E4ZE7oUzDKJdHYgw2zePLG6S69J6U8NNJFRfmAdfRSBNHWhHY3ZuPTAAHTCGDscGMsNcFZ4N",
  "key6": "4HLVHghobPDgD3KpnGn7EMm9yviZxzqHGb85GLa87iaSVDpB2hTxwGUTHKBac99fXjXmQ7SqigHaLRUwSCau4XTB",
  "key7": "4TMwjTsK7gJiZonhfhkjNPhik6rgQudBiY5RUCY3cWemPdrX4E7kWTP8Yqzz9kGvFkAN2nDMGn9pMab9wxNTckkk",
  "key8": "3qk5PbZGdGmJyUFBwsqTX9d2vFk6FiZM7v7HPgEvp4n9nQxxrzUD67FMmoeuCS8uyDW4yz8JfmSYPnwyxojB5hK3",
  "key9": "64ozeRTKVDNrcf6MAg4MFc49U9e3fSP2HKfnrHJip6cdfNWaMDXNQCPcJ3GCx7CLDzKfycVMhraPdeu6Lrzdj6gS",
  "key10": "BWbDPc4fFf5FU2DHRsPDz1CUa9KCYCoejjbrTnMDE9gtzs4hUvDAMn19Y2TkvBcvJzizCc9kFhKuFijc4xtUTzh",
  "key11": "aU6dS7RzST7FFDwq6dKYEvSCbxVXrku9dyZQ87HcQcodYEjwSLWTKtuWT6bdaEW3GcWavcb4ugAtpTadGBwDzcF",
  "key12": "4NMXZ4J2mUknDC5ZtEqXmwEDMf3jPBBzH3t5oyP7GrNe5qozF3VCanuD4Kk7dakkjvZ7cA2w6gzXBRwxq9sMX9A4",
  "key13": "2NxSEgwzrY8PkTRAjzK2FRJjGC9hRWvDcLqJwkRbKMsf4Uq7eoYs9MVAS5kzuakySXhPGNjJQoZXAXMJXGaK2cMZ",
  "key14": "3i9ZVDxm2H869b6Q7ZXUWv4wVB35xeSEQ4tLKZDCX3bk8RMhTSQ5vHJtmky9hqjpBDWoum7UUPW9yM1x7oeHoiao",
  "key15": "67WZqdupvonojgmn9Xp5JAHx4AJhbXAjjBt17ieV4DAKkdr4x63pWaJux2kLWkHmLM8hfTjpUMuRZ8yGYT7jtn8H",
  "key16": "57PsDh6TWG5tPgApUT8NmhtpcUPw3cW62F6aKdsvzV8DBc5kvaJgxATF5Ly4R2RpvesYKaphu7NdeQqzDjMzjAY1",
  "key17": "4C3aVFi8roiwFW3ScMUTzyAj5bLNnNg7VCb7hbPMDG294bEqxYw8E6TB1T145NCLyV5zph5ihEUUpV29jySkVGQT",
  "key18": "4iNUGYEXXr5y9jtvbLbYVBMVBcyyVg7FqQgqirEMmJN4f95Jp3ESBEEdRUFmYYgfpGDk3zoAyfFG4hNKXYzmoEGe",
  "key19": "3noY1Gk6A7YH93iFKHCkmVcMRaXNT37cSztpfy1L7Z2sng6dWt17SpzSDJfNKSW4ETwkqi7YugZEENqHNUEEjjFf",
  "key20": "2veRe5Q7c3knJCnUsAsYrGTFyZJYfUJodS1SaNkZrubbLwGzAKjqQa4QAY7VWypYRTUkdKDNZUnRRWRxsRPvykGE",
  "key21": "642H8rwPypXRWkLSrB4djfKaMGGBWNQNxbBBiMoiurDsMGUHcNd3tjQmjkKE7445ZFViryMwgcpAbEWbrmEyLMqs",
  "key22": "5LBJqX4WoMxehwzdy7eYx3sj7972SKKNbgvrSzuCDCgBepuCdiCE1hP8KxF9dNbGUthqY7CH3Xg24T1fHCrruhRN",
  "key23": "2ECTyTgjS6PJYSPoi86FKW7sCLXYZoaYTx6tAmbukSgz1NwReyqcPvHGaSU3yxmxpRabkJ5TmSmsbeGgeiJ5gmCY",
  "key24": "5EDHLiSC1Yfx68XcTkZW55xho22ydbYxGPWFSTXGLSmUX9U6N4niX1BGKr1hc3mBCzpt61CVzeTxRcVqoW6qHCJN",
  "key25": "3SHGGjLXwqGXcuiSMMB2N4rndnzue7Y63amMvw1EzPiXF4TYpNuosdxzVL5vxP1G1bhMD9RZg4RjBT2aK2CZ7tox",
  "key26": "2H9qgdVmd2XnLfJeYTr4cyDWW4f3cXEFzKJvdTE57BukACWL6XFNULZ2j6jWzftox116JL871sbyRk4GZ7U7BJDJ",
  "key27": "2usgMB3FzZURBQQ23wZe4mYzYgJSSnQ4hpDXKfeLBJHPbuGbYofAD24obsRVKSLqRerw94w2t68dpihCF5dcNf9U"
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
