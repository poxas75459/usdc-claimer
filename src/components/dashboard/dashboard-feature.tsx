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
    "asau93Vx3D4fGqUPBFRb4pzwCjLJMQGnN41kektXqvYTcWMLF7h4thnS9QmJJ5gNFEnBXWYWctnSAeGdB9EAJWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NjF5BVze8gTjubZfxPs4QQBVC82TJXJhYDs6iJFaJhnnJgbFzzuKqFxKJMKx8HenJc2ub2HNx8RG1fpvk9mYGRm",
  "key1": "5wQyZnZz2Kq8KkbfkQawUmuzq4WA6RYY8Gkuown8hoNCJtF4Cft5wedjchFzyGiV9KT1gF2iXhvcFwe2xorP2y4D",
  "key2": "4mMoKS65Ks76K9pb3L9njxTU5AgzY9jbov9sTn22RxJqVwXusqoxPxHGVCsZMMCRKS6pDjWf8jTBkcruc6LQpznh",
  "key3": "38A8BxJNa248UmPpmpjgoVmAocNeHg8FxfUquxCJMqTHrVEBrqfgvcLq5mmRuRsi1aBWB6tnDEqFdgViNhYvpf1T",
  "key4": "33KuZdsu9s3v9M3d1NasQNA1PRHBmd5z6Nj7oSPSMA91oGgXgbw32s9QrS5kiFTmKGWSWXNSd5dJEJYB6hCvpQhf",
  "key5": "FeDYaKu3vQfZD313NFdAR1qPoRxsoYLJfk95XyJg7fhr4kLV2DeBquFFC9QYHjfHPfCERoDdkdcwQ46YzNi8o28",
  "key6": "4vN2CTVkrJv3kagEvhpEPGGTchEp1X4NyqqMjKdVaqCy1UpKRGcyrCC61z1Z84e4E7EiALyCbwoXeGM6kpGaxpdX",
  "key7": "2DWnfzjYLPnfeygyE357rFzHLcVTgJfPjPtD9bL5CAEHThXC826ejjwYaTAwciN6WDLk3FTTHXMxS2ehK56DBSMC",
  "key8": "5txLZg11Va9xvvT2cGjci3dQHrKiB8PX96aTC9ymYhPfrUMG8vwAUBmVKdL8C2y76NSR5j7BWWRbUnmNcQw4M7GH",
  "key9": "3M5AxPzUJeqvYD7ETV8FnQvXZvagLm2f8ag91oC2xY5Xze3vzGNzhPW1bPZi1tNXiTwsqVtMiUgbBgVbe2Qn9vV6",
  "key10": "3LcXydt3LdcSo8KJcpb5VvEoUeNx2xYiSN3By6C2W2RXMdcY2L5Ui4vKGj9xvjb8kM2y315GLF4Rfd3nPDQZqzrb",
  "key11": "1ijcEztbxUi3V2fVRFDwdizJHCckLaCfyWcdaVXqAL2qsUUAP9KH62ww9hMGrR5ae6hv2jBgdw86PNHxiDVsVNi",
  "key12": "4T9BisW5PHxjyWqWgp4VdgtXZTKA4HdBN88eSYuZCJCKtfAAjeMEuXD9oEACoWFJfbxpD9DpqHu5RUfhwyKghyqo",
  "key13": "oYDBWjKS2UGWgEP52ZTHTm92j4M1ZEpvDhAKQm9ixNwoUQekeZ7cExLjK5X3mDBNtLaDzfomHXVjJyuswCbgrQ5",
  "key14": "4Vvj6ZQ1CdQtbnvKLFcNnN4Du5Vb93zfqGXNu1oeQELmaPYEDrPfP4z6LS86UzsYq6mJvZ3HYmpZ4m4HWobExWwR",
  "key15": "5qEWXKcFrmy1bZqi8iDEBGkb9erxY5hH83mUiLw5bT5XF6eH9wei4aNbu9bYNSAJq8FnZ7S8xA2yduU631AFvXNJ",
  "key16": "5YFs3rXi3jku5ZNTRjsAKVyJX9MGmMGX535sYk2SSP6iEC7mPoZ3TTKuxNqaCKnYNCWjFZiU9EAczePMZBBHCi1R",
  "key17": "3B8H55nYgknLgzDAMiWkESFMfR64xgbj1LiwKrshqsCeuDGU5xVnfJWkYpCCz6CE67qM6CPfEQYQuKdQ2HW5AccU",
  "key18": "5hf8yvFjwTWezxkmTz17HEwtYbZ19oPYH3zUx9LQtQhypPVs3zEk8rwt8cAsM8LfG4pcVY5YuxeuQQxVP2EYt6Ah",
  "key19": "3HMPdVa9ucuuCmDeizK73Cxk34mVTGFM1YGgWBcncwnbefiCY4hait4x61BMkz5E2XGSjLem1oQaWVWBCJMLNvg5",
  "key20": "XhJhLAy2KN98GW5iW2fjmMRtkhUZsG2WtsBtxZTgNdx1AYE8hg26pS4ZjrBSQSzjxQrjagnAiogTXsugKQ5yfQP",
  "key21": "3wQFy52WyvAeEdpQZLhupLWd8qx1LeXNEfuJrhq2Ag5FfaPDg6b7CzJ2UfD6pZxyiujcgLCDMBN2CbAXEgSk7C37",
  "key22": "3nimSCdpc1TqZrAm6yjZU8dg5HYUjbYgrFN1BVjCAzsxrAAGZbM5Jn3AstYzoxwukGfr5KDEywvCwFZAgtfWQ2NV",
  "key23": "3Cgpgn9Le5P5V7jHyvbfAWqvF4wLihT7QNCERb3mfMgypSUA7JgcnmiHCSdDPmKREknxajK4AiscSafZbZcd9kg4",
  "key24": "5ox7qBijb17e917WLYyXj6WqkaF1Sgv47MqgxBAQwWs4MsC9GhPspwCn3N4PnyNgwienhFPny4HtXE3WEtCpUCTx",
  "key25": "45a4oAVPyeFUuQsoqiDMQRbsmnPETrLXjmtJcUNwd7otqhFUgtd2spyptGSTensRPLKCWr4XAxDE67wMJnQLVCRD",
  "key26": "FnKcorQJzhrR6Dj8ygWt7tTnW4oKpzkdK5Jgz6xaDhYw6JrwK3fyAgYgYm4wHKCaPfcQ8fWAzyZTVakLCFvCkjV",
  "key27": "Q7g9HCPcsn3okdnLRHFb6CT3QeRKFEnf9RqJC2ceBGuDqC5WdPTm3XMkvQjQds9pZqywZEcHYLw6S4LL3fCud9M",
  "key28": "31xvYnq4afKXPqLMp71GYJYPLopqYYEP8bxcvj4yWm9CZBBh5M5KQZo5aSnGynVjXtFNRMsXFW4GHAj33m9wrbXE",
  "key29": "5ydCstfrewLjrisxg7ngQ7cEYjVa5rSxazqPPtDMesta4xwkfZ35CWqBwCQMMK8AXPG7ScRghu4aEybga6iPFqEs"
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
