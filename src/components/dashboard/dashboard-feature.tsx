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
    "3eAWaZM24jyUgKEPHiAzpptZJ1ubgmvVEME1Fof1bpzwmCYMFG9VdmxbqHBsJKzY1K3kW3BRdNUWUkCCzsyoaYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sB18sv4XPfSwdRCLDKQX3WFUSsrZokLxVityJujGHou169QE61Z5yFf4tAG8VCiMvD1SLfGAGfZSBdJhigGt4oC",
  "key1": "54Teh6R9vWhUAYKcHkaoRwTyVL2LuXS4mhFxo3HJz4UF7w2j2L8yuXTUhY2fvjJn4VXJaUrooEhus7AdRLQDCYSm",
  "key2": "qoXW73ths8nVNijr797jCxrJaewF6UBpuEE6bJ1ky4sBdQsrvqZqg8VCdPBWCUpkJmpuonNoHHQqmX8VBZULGvz",
  "key3": "3FQVkYKWA8PK14Sh9m3XtC2SxSuVH8ATPw12tHd4wXcnQhz9UYF3TWLAq4kKahz6pRNhx7Ajo4kior5tj6nVMawD",
  "key4": "3Yv3be49SGDZKvFhWVWkgcpPup3CZKsQZmegoNmRSn9RjHgVV797jfwHTEBVg3XMiU4BiE5UDu4d12Lni2wkG3vq",
  "key5": "3sTv8y5GmuenjMvZUj938BvNtT2YVBjzVdXD6AR5GNGjT75jy8QHY4ZPiFFes4wT62v8To1fnRexmTEXWRpSBXEB",
  "key6": "5K2NdjXjGj6jBvMkqhc1deWmA2vcMd6KQa2QsMgrnEvfw9y1GvNckwPnGKzEMEcA1y74coF1pk2w7xgLhMKdkEMT",
  "key7": "65osZkyoCFMqTjsxQdj1Abe8mXcwCUAXh2LidLoR7bnKsxvNcFmEjZo8BjjVmoNhEPfzjmrXqH3dhJDiLJUixo9s",
  "key8": "4sqPYneovWgCxpjcwrX61yy7hNX9Hi84G2duN9b4t7YJRyFHbMhSWenSYnUtnThmvyuWTQ6V6dDYQx8JBWqkYUrz",
  "key9": "3SyEPGzGZkhGnjqAgsSbZUBmP53VQrs6gGiSP6kNv9sefBqXNRjPsAkePodT1iARHqqDwdsxXEbUpXpY1bxGAnd8",
  "key10": "5af1YuQ4RjMHXAx4VELQJs4HyfcQrWWQhZpR5vFibYPRKLiR2qDnrD2aPyxbUWy2MH4FmJm2MZs9KQ5EWNYq98qs",
  "key11": "3CjM7gC44x2L8PA2rmopRoD8XdaQyVKgbqaJrGtSo6w5W1EVep59hrcmiv6PUYbgzM3ehA6xNtLCiubpZ6Cm6xwd",
  "key12": "5KSgKdVXBbEepsiYKbRjmK2BfwGSjRScXFgX1NCHMzthPCAtHKVm3KTNXosVyeFHym5Sr4otUEaCtxfE87c5niwF",
  "key13": "4h3EACWUXsjSHhh2Xqnkni1WX8NLiYAaMAewSSxmdoCsWop5K1rwEUXL1V3BxyVKhbEvAsp6Z5KHEFG34GSEvDZz",
  "key14": "5UcGzy7AdZGGeCSB6c7FKfHK2FZisGVTUxG9PqGQj3Kszz7QToPHs1XVHNshg5m81HYi9qTHLPufFSZZ8S7ugUM",
  "key15": "27Zk71NdAaPN9RdLS5g9ydVRxyf1AN85cWZNwMeghA2qbNJsGhzd1bGL69U9yNLgZobSuNPKEpDWk4nEryQviZey",
  "key16": "2kC5vqde4tSUN1T7Wm7S27UARoevSSe5Bhox7H2aLN1JBHPwioDcjwMdzAcAEdXVttDe8ULwQc2GwZLjnydkFKrH",
  "key17": "NLv6tvpBeihX3T6MkCk8rGWoXuQ5STNgVf9EYT95Cv45DVwaND5zimDvFqdAV8qogcb8s8GNaWMsR5EPQj8KigE",
  "key18": "4vDBZoXUSvdGidb6aWKur3L1aMDTKp352cSBPXCT44gnviNg3YEQwLzzPd7j4NhqCKHFb5wPAD5hxwZA9YaFgpqB",
  "key19": "5unnWoHWF4usuh8oKp9YFe9WV79LXVy6xn7YRhYzR3NDCmpZJRZNVxfpq3aviBBMdUMnrVg7xKvPR3crJrS83q7V",
  "key20": "2dJQ2pbZLUUrhpUWagXuSnf9fuqC2crSHhGeeBo2hjQZXJPW3UnTv8np7Hoc9rvWCwYa5B4S1Yun9wACvpd8V5ZW",
  "key21": "HwseWvwn8WUoM527Tfbmp4MiBXcDHGydQmuxxFKfaospxSiUsxE9UWRKZVMUgG7YFVVaJhikpwqD7tMpiFuCzq4",
  "key22": "4cAM7VSE49e5beWE9mG1QmdGowhtrgsG26Re3kHgxZRFnTaHWKkxhwntHrsUc5sX6K2YNgYvfqwEdyBQ1RnVC7UB",
  "key23": "4zV7Pksq3GZW3GxDF7tsB3dL5wzpnLSUYxeKucdyGDJqUq9G6z3hsqEAcoF38QcFyBT87fCWpezZAriWSYfnFDMv",
  "key24": "3LVGo9Y7d4i8qvkAc7x8MsUo7AvYKYDVGVaJxkgpZBkWKNbyukDbhUfytbMrgYhcBxeoyM85HVMTHzRWAjp56FgZ",
  "key25": "2PJirNkBnxnso7mEjh5TKWsErrfacYzJmiq7MkxhYJFcmk3DdpUiLVC4PiDEopjLRXTk4v6yxohvdLZLpVJF16m",
  "key26": "4ghYp8YGrRYkVESMmCShbQo1z3KTwfFuLvehXCYdHTEHD5niJYQTK3bRazqofzZRxHkUx9oRwNHyB9KBg6GtMv1x",
  "key27": "2Bxp8kpbizdM55CmwNytXvVLmSjBhZ4pQM9vmosSPbqxBJaWDyuj3M26wR11PGSznaG1i5DVdYSRXJqoWbvbaNjf",
  "key28": "4YVdGJMRWzikp7xwECFxRCBXLFiYrReASck95sr1TXwMvBetxs6iWpwbzeSoSBav8JotYjRNyrdNaqeTaUWTcU1w",
  "key29": "QT1kfDzRJpcJkuwSMAB2m4NB94F1sZeJzyoenhp5DnAUfgcRjugiTBnP6v8V9Frf7aoGBCxmMNFYE4zdYbG6zQz",
  "key30": "2wKE7Cba1EL1hMCLussvCXQPsKFyujg2L2yaT9qEcfHRj6vkkZcQGvxCC85ErnnWK1FeqxqSdW85UiB1ovgzhCJG",
  "key31": "4ogckRrraHgSicoxPyLgqnrbrSdsFQ1fUASrKZq2uSnRwbHu5FMQ3HWuiJRwE4aNRaUCD32U9nUaSpNZGbt4sDnu",
  "key32": "5RyU7CDCEjN2Vfnx32FKHqbcXkfeSjJ8AntoEjzeGDZnKdDZMq9tNRfxcdX5NSVa65QrCgGXkZbVMvVnCLyA1zDE"
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
