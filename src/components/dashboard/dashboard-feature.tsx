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
    "2ATGLnjLyjimtjNEE8U8KCK3ng5qmmjwmaW92vKEnzZVBQCCPrHvSmKXF6KzHwNDQvzWHy4RcdAh6hKVwfdSAaer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DeWmD1JXqKJVD82XABPbhvxJ6DJbTx12QZ68vcadZGAqiDFjM4bGF4mX8vTdGoPWyKFgpRiydnxeXiP5jJzfp4b",
  "key1": "531ivuhVoGMseYSc9t5oLPuvxdJ1RA7MB73uqPXGFYmaEZMkRz79GnsaRCnqnvedgHQdPTL3JxZujBh6cthE7QEQ",
  "key2": "3mm7MXAsLxf1QQugxYVbqvQbQBRMY4ofoVSTtM2Y4oM313jHSEt9fKz1gqt93ysvtbECEzBdf2FhgY4Lu1DAPUsG",
  "key3": "4TLNq7orPRCVjXBqKJJH1c6tvbkTd6R3Cxv5aKnAKCEYRWzp6B2RT4kRGoHAKdDw2dqfH734XktPa7Z91GiYeBVu",
  "key4": "614P4ZTsbh6PHLnjezkDBCgUnJ1DAay3pty5L2JmKSezeCQx72jSDpaCzomuCsyZ78UPmi4DJJD5bpmCPDQ86HKk",
  "key5": "tS5c5k6K9V1qM6ssVVANcVfRwCKMHEs87VizU8mYGbU38rhPhLbKLjz82TvSaVuWeguPmcYKwrRk7C6p3uoVR8J",
  "key6": "3BGJQUri8jYbzNtkFReWX6bPMkXuEswVPndMgYZQwrsLE8ceppTJk2K8T7USjGdZwk4CRfXK7f8jtdMZsabxVBLg",
  "key7": "3Nomrh6xpKtsbo5HwXoW1NLmB9wvGrEy9HQXsLhgWKpfLqNtoB3z94RtmkR2A3QLwZLbtVBbXdNEQxQ5rUYFEgvc",
  "key8": "4EWoRacfCT1Tf39ohyA2H9QZX1pF2bAKvKB5DWEn31gbedgLMSoTCzpTCJb28LsbeuLu5YYAFjvFpw5fzoExLHe6",
  "key9": "2xgRupiMt6RK6aidrWf2FGtc3wBfks3zJFgbSsyuuDyA7g6jFko1oTe8E7rWQFJpf3ffQc8tsAFQnz3SU7gHa2zC",
  "key10": "4QAJmKCARDJLbAYX3Dp4mM6rmeFnh5VabZvqQz8pGf6GaS1d3FuZNTRCPHt4oe1TcXmhjpRZg9L46S9XYGh4dNSa",
  "key11": "2ACdxP2aTztGJAP73S5DkfTGyNXajvd2rhwom3si22EyeNXV9PVFAmn229ZwEAAq4nTNPh23qrZVRLNhNiqcfGa2",
  "key12": "5qs8NPNMHXmFjGoejA3iQx8HMNTF3QAowmaTzeQUPZkpWmH8qga95JfZhrvwNGs6akZ6ZZDujv9rSzxy1VMvgN58",
  "key13": "3LMsqGBEN3Zh84A5JQX6fL6tTf9ZVAmM66sXnqH1AZyRHvnN8WQctSeXcKcMTsteMwEiGRwhRwCUBsZ5QX8sVtwE",
  "key14": "5umq1FmMC3FEdAVfoM1KeFUnTnWUNV6Xhhgv2GjnR7XFd7Vs2QuZVm5MSm39Ytw1n2fCbU8MPc48mKPjjoRZxJnA",
  "key15": "34ie5Z9Gr8WWC6eMi9JwEvjuKxtgPiesevdW3tkcAL6EiV6Q2KESyVH6F6RDzyYKkKrGN2SvAQvrVAJrepjtFfir",
  "key16": "4aJ8KWV7BC4jtKtUeAEFa6o7caj4e24C6ssVHt6bmmVToj5ZASqxBbiPKZG8EdntotE1okkee2RnKAAVnecPJZT7",
  "key17": "5c9AqTAKBPqfKKB1AkqCWXNePwoVjJfXgBp1SpdWb4eoQigh1DVBXCYLu1A2N53RocFP2Xt1ktGCTRyfAN3K6f9j",
  "key18": "m2DLJJLVRWoeX6F9Nu5NZSzcuct1DCawA6kNeBowNsmzXuGago486RWBgRgNizqw2WYcBBGneBzdc4ohwSAdogB",
  "key19": "2bc3HLTaBvJoCv1xnUcNUVrFocHjntGLBtqMUAyN3XoApFB3CpGddg1K1AQkzs3GjPD8HyyDhcq9zi3TmbDaF5qR",
  "key20": "4KQ65JkdoRuaYCL9xnyidQnLDbX2r7J8Le8ARjkTN216wwbExFD21J46Rz1Vd64anov2TmbFMtqfPJnPrJcxeDyi",
  "key21": "2vyAurZX1KVS1Gyb9FuuV91GpMK1yCsTW2DUX6AVqJa3yZ1XLFmPQwCXuQzAV8JNf4yr2y1dxkXb6bU2GoTABtBU",
  "key22": "3rqwjndGASgx2jc5rwRCGKgcnsgpmYjJU9fJmVPgBJhtCgy5EdJ8yV1WYZ3jc3GYSiRmELbfbtuV2AWvxJpfMscX",
  "key23": "YGMoeYAJjt9yHiggJA8CzJ2gi6UGntveKx8urBh8bnU3vo1NTPxom1DE7NuD6VN32522uznEM3YbVz4ubpBbWTz",
  "key24": "UY8r2xEFs1xBuhmEzdZBX7Hu3wEt4p3jUusvnX4REBBeFJcYd7uHcfYtinuX8LgQLHzTq6LLcp12vmddePqLqBF",
  "key25": "2hikTb1zctcTaHQTBveh1KRyEZ466zn6pp89ibvP95D4MN9hsYRgkf1ud5bjbKrh2eKJSXHhr6MUhTK33svY4eLo",
  "key26": "3ds6MS13dUk2eqAfLxkiqRSJYwtvcZgiJYVXrzc8TwR38Fijgvb97kpdMbckrtzejV44K9KCk6rRfsmr8FtyKT49",
  "key27": "4SBeP4eQPnCH8ebDXBF2LYxptW1RygQLr2iJ6xPUxpeTtSuTAvrPdDqewydxj7HApfqFRteupS4ErzsxFgKqjmkr",
  "key28": "4CF5eQ6xd3VL1XZ9JcjEH7cVimDcCKT7T4WwP4D1G1Dztx9tCYsJ94mqbkrLszFMo5pUd1LB7W75xzzRqkTMH2p4",
  "key29": "4WoFLNnwHU7ThtCEnx9JtrMT3pRMzYaKjPoARXVbBYapzJEPSAyFpk4Xw1EjKk3ovczqwwj6QjrNCtR5S2LRFgp6"
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
