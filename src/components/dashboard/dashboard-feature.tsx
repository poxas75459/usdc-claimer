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
    "7ive79raS1mRHVTwNFjr1g81oMQM33DtZyE6dMnQgsRgk9af6zeCZkK6gx9ggmSWLTseNC9oZmRr4D68Sb7nFFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cVhoQ6gQsrpsfTiPNicUPSuYe3cKxvuq4tUiLpH85okZDyF9nnJCnxyC22vhnVL6zSQFiebUvXEn1cyHq8MyVXP",
  "key1": "46DFqyh2YW4YFShzpQzZJFt7sE7kVRTUmLAMHNvMdQtkF3uFuuvXSrRxqVDULRhe3mNFq5zSnCWbp54B81khtkGn",
  "key2": "54oVXjRhUNrCSfmsJGm5s4nFYgHnehbg22WdTMPMpNVCE1tBK89TttSppucKrnKVWm2qgAVeW7nraHgf32dW1ZFw",
  "key3": "3LHHLWNVvzNqZMSzEUnJ7KxuXp7UMr1McD5oXQ2ccYwUg2dHTGhNuZ6mZ9FLbN1QbGsEejZbYreu9Kf1kZHuW5zb",
  "key4": "5VTxS9AwkJYAXu6MZgrih1JBM4sbZ6Z4f1WoQJcXcKHtvCB4jYeJSsroJUf2SLzfF3QH8oACRcisG4FqyoqJeYQ9",
  "key5": "2Up1VJ7A4MyWxBscvfBcHpdYxnVJfNFNEFbYp7XJxjkcuZQCiHjMNZpBDbSRsQoWzTdS2Rt9SkeWVS33RCurGiN5",
  "key6": "4nUyuqsLU1QzonZvPbY3JCFR8y2yaaaBmDy7uhvWeAzgtz3H4TjfuGYbc6722oq1zcfePrHxp5bzF3RMFFF8qZ3p",
  "key7": "uiMSHnHBR6UAZvk31bBRxwKS2cjmbQ8pvcyKvsARrEncq1VP6YcMSQgoAT4ubMW2mA4ZabRGs2o1tTzCB5mWaW8",
  "key8": "5Pyf6UH1W7k3xdDpughfee1xGiGTza43nGRmaaiWEh6XUJVUXZxTZAGvjnBfXwCBNbyebvMwmk7VB7aimwnWxSMx",
  "key9": "PbfCNnG5Zx6cBz4p8iDLR8kHAXjiedwhougyAf4aPi7d5TiEou679Pm3BfPwQcyg6ebeFYRrRPsuztdFotJfXQp",
  "key10": "5993pyvgiscMsuKHCeDLmkwrryjpi2X9G2mddzPpXYgjC6K7nKrH81eF26ws1kmJntcc97BZBAo7Uk4rmxewNWxS",
  "key11": "3Q9ENgmHNcj1HacMXpMqbaWbwYYf7goZAoZpXJuazaqUDxQ8kVHzbRPV2XS2bq7pgjmhNJEr1Yauk8xHWY8AFfuo",
  "key12": "3f6Pye9mF2FUiM1F3Yj4eKNwiLgxXY8wsnf5NVXUVrPQ3F28SbkmGawHo5v3nX2yy3KqbaemP7dht5Rd5i1aMWBH",
  "key13": "4yn5wh22R22JybJwK9HU1Tc6d6wm2yKeehqfJSAX9D5TkMJKwXSNKtnWTUWtn2hFJuD8vqoBdWAB65RZQJAthceD",
  "key14": "3HXhMxYbwJaH3cshkff58WZH1TvjpfQtJDEZTeb2acv1qwTyCaUwUaRTamCuTKX7mKugwRiRvtLkTGGFLiRvJ5Z7",
  "key15": "3rbTccWZEGTeD6mARPVAKQAJpaLKuS3M7FMGfmJATkQ4npK9aURAvWYoLv8mzyTBAnqN7XhXFGEnmxKb6xuQBTCU",
  "key16": "4jBBR8omsJViJG7wYoPqLjx1m7Z3E8qxk4Rs2KXJH5BmX1mUaCK62s6A7jPUnAxm6gEfU3ucGp3kCzULSqmoqvRD",
  "key17": "2vVgQzkgYSPmgTpTFQ2k6mWfifBLojshx7FvwQtwDhHxz6HTSiUDzNGY2LWYkUQeWuXUZGzPZYaaC2wqU1SwM9M2",
  "key18": "2ZMwMQqqPNCvHMJKwPBkv5K5QR3T8wC4Zwn3TEq22uF3QH9BcafihM4boF56kHE2RrywPGHmvMGqxy7sXWX5pYVX",
  "key19": "3u4G4PCQRm9X4gbQjedAAbL8aevihp61SUJrmarDhhFVWwwPgkS8qnmd8atoYhgC29iocUXvhK1BkbAsP1hhFtsG",
  "key20": "5z59CRwbhjG2kTmpMUmdSqENu2L9hNg8D3XJ7L9e4GSzMwYD6qN4HVYsWbAmhDSgqsDvm1YPXTzHbbBYkNexdnzg",
  "key21": "5ffUJuvyXPeZ9LsASv7Nbiqgq73MCsQgwwXgsjpM1SSuaTJ7gW2UM3EXeBtdJ7HWiYw7iWhRoYnx2AXR1JnqhJo3",
  "key22": "MpuunxU69yk5DB2Ui1dPfUpvYo9NGY7dLrx5BfwojypxbuPmqQ8C8CwpruvbxGzAQQf9abRGQDoNLTj4HfDLRAd",
  "key23": "3MH1KCj8A1hAwnYmoZo3FUTw41rjncSRG9JyiV7ukYR9yxHmZ3wYCtABDtE12rLmDvqd7rDPXRbvcmQWsKnNLUg7",
  "key24": "4a2s55kokzPETS44bCphvXqPZwAgwP9wQivxjz7yZTHHbPXXXMFU4dpwAgs9TpnRXBCvredbe8qQsTxy6BBPznQ6",
  "key25": "56MsRgr2jH9WLfcfyPZ74n5PFACT4LEqQgCrKmqddNg1LRoUAVHUf4zsQZRgqATShwWPv3eEuVp3utgJUDQuVnUw"
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
