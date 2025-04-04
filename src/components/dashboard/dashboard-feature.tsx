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
    "571AS8KfkmimBZAzA6dQ39thZKRb3bdivyLNGeE2Ve7UDQt2RiCupJMUeL9G3CoiNYnEaUjdv9EvQ9rwczjprcPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D3gchBbYzVsu9GyaJsUHVogYo6w6W4AAmxeCT7dqEdjTJGP3MqBJzW8R68K8xAEmuvH9pTuoZC12Y4WWULBTyw3",
  "key1": "2g7P3RtJce2KZypi487hE9wv2KhAULjFBSmiAEWiWrFUbHq4QxSYeryYLLr7UDtnpxvd1uuoVoHJK78tqj8KFzKS",
  "key2": "3NTc7nsN2cvoeboowx83ingAtBDQUfvUo6KUhPwohgR2JpY5wZagzwLs7woTsgueC1yGi7ykF4gdQdQygnKRmrGu",
  "key3": "5E8pW1t7zm7SxmrGMfBEYZ9JY9e3pn2w8LAk9EeDoLWrcmMhgXxJvfATrW4DWgWDhiKjJm4iH812vF8HcD8UfowT",
  "key4": "bAZJjk2r72gZag4Fq741Dq4jLFXSKnKLqtPQwgXRFq6JW2sYMz4yjJV5bnCBGyqksmKELENSgEjkKCH63mmEN7y",
  "key5": "64Gbit4fLELXotuw7Ecq7RRQVbJy4SCVRG2WXeMnyidjCVreMJyLV7bBAfQpYJsviNUhsTsbzg4xVmDtcztU4Eyy",
  "key6": "rc9sLUifhbsB1B5UYgwnWvVyEHJeYXYRUabjXVAhM2UFQLj63RwYgQRTSkSEyBcNYFFy6T7QjUPpFBHByuyqHPc",
  "key7": "2gmLNFC6gvL1WGxr82aVWorcbmtdrfp9j1iM6qoamCKDV1tXYB2ncrWijxKCBgrod2xYM7xN5qTKcQi6c2g9cGym",
  "key8": "jPMLq7Hn91uecLYBGzR4xfLBj2kqrc95c3tMdWQbfnfGyFJzd8dKSxogywXp7iTuxtrT5PBmsZripPcpNAgijx1",
  "key9": "3x2NWmoPSJzCNAois3DkRsYJKUzwH78Dqtb7HMgSHPo8e2RwAKon9tW4bjR3TEBBPhgZrVN51f1JMoPbus2aWpYY",
  "key10": "5gxgqtNoHiXJRzHQ7px9gWmoXtFVmQh6FRZe4ba4HjcYmPnBZDrxztMamN9uSKYkexoyMfywSPXsJ1pPXV9sVCMe",
  "key11": "2bwtvDWZDkw66zHbq832xQ3zAirQQCcp8Ms97U3WgGnF5hHcycqfCyoUViJSyMZZWnkxw2i5pFQAVCyzL4b1d3zm",
  "key12": "3NWR5C9Gb3HRQAkYRTpwdKeeoHTBXyHRrgG7izV96qhBBx4TbuVVb4KGxLnNH9akHeEN7qbLDJw7wpqEDSCm61om",
  "key13": "Bf3T5g85LAVqz37TRiKPvxEhzEjTakLMabpoU9FEKy1YR7LM3s26DwN2reBDfLxRg36nBfZB1LHpJBn4VFebPjs",
  "key14": "4MHTSzo4xUQrgkbF8tiZBKGgxxobx72UTW8gf4prqB7NKh1fySpZfjRq1oaKXv1sBtuMqM4JMe9fvPScXcq1xfxq",
  "key15": "onqDLQBXmQxZAqDSgaAaxAbq2XXdCw9FM2BiySC9eWGK5KmWMMVwRp79izKXmYm5jep5XqUWntCTnnmFFmyk1mZ",
  "key16": "xZWrXsuvnVrGMTDZMSvscHRqxEvvLN3oir7R14UqmXP2UFP17aXs837o2xhvX5iu1qKHbJVxdyNC5AC9J6WCJd4",
  "key17": "29ufgxCQQdfp3Zx2HgMiPZfFizXgDPqNMHffZpMfWJP9pDZcDZxLtkRMn34FVZxJNy9wHokeY2tn4FrCE7SP19Hk",
  "key18": "nRvCdrp4BFzVXEJaoy1dXZDLiJZMWJQ1CcksZGSFUGSQ9WtEqYsYKni8d5VmUQ6CSaqAEACGsRDaUdDGpsxtvrZ",
  "key19": "jKJPnzCbWgjGrDRjLyQMZ9c4vF59Hk1F6EuoSPd9KuvF1PSk4upFr81f21otuehu5B78F24qPUTtYoqjVcvAyMe",
  "key20": "5mzTkzhCUCscYJHtyE4mjcMojceP7RrdXKbRW5nXzrZA7e3o3f5ijnHMqNWrQcxiWJVQgY8Vs7e7xZF6U4DQH4Bb",
  "key21": "3FhS8dwasxwCXbTD4ZF2PKZUCKWqFm18Cz9vRGS4UqTGfpEgKoVY39HpNzAYwvgsShAVBP6znxEt7c1pyq1j88cT",
  "key22": "55ndPA9GCRLGJuBk6WTyhUvWCKLp5STwNq75bQ3FDpQ2VDSQnWNvccUKkenFH64DZNQpQJCGd59XK8vv4FPeiLnb",
  "key23": "23fE68huChd4usaJjKsyXLcGMaHP2Jt2GSVEuNgqSV6e9CUb9RbUjk29UCi2bb8wA89N6EsdudBehY3ufiDTAWRo",
  "key24": "hzEWceid4jG3wVJ27N74uo1ZW8iT8CZ812LSXoNbMeQfsRy6N8qQsWq9bLrAGjL9fhXij2oHL7gUn63cPJN7P9w"
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
