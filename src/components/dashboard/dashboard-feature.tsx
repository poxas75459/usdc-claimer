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
    "i1WDgwZWdGnk5LFBJT2Nz1SvjQ66YSqpN2UfWzaB58g8Uzr7FNfiJjZefmgGz1s2EyXUgG3dRjFHPZs6Ggvv6Vv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37PksCA7WQaeuxhuxNNYgiy6ZgTX35s428cBixA8h5VCeyUhqjmtWR4HwJoPuXz6A3DpRgBckBVKgJdBGSkkhq4P",
  "key1": "3xtdft8qGFLJz6B4NbVJmMYT5RcxRYQLKfbV3nohLmzfCEUfXHxPbQLUCTPF1xyQsRJDRTwAepzVzSorhuJQPV51",
  "key2": "2NyUs69Fy9184faq83D1z6RMpPCCVqH7sk8fnqr1wr3XuXUpxxqk68VhBVvuD1yoKtBHACGkuk52bhTvrBMJ4Kec",
  "key3": "YxZAyaoGpv9xssxCMjo5etfCtuSBmkt4pBFGsZiH3VnmpUave8ZxZLPqCYc2TTCJZ2MwtPr2mFQtXYTZXehKQfj",
  "key4": "5N7nq2eEjJKSQKrsedn9aGyrXztnp1A62sPSUiB9bvaaXLwnkPuXTxU8xcLq4qKFHRFar77nuBjoNUPzL5qaQ2bE",
  "key5": "2TEKbCJ9h1WWscjLyQ64nf5tdpvvSXcW6gxEcKFqP2Z4ktr2X8LU4xj7V4rojQJ4djWvuNLu2GprWt5dVhJaMzFk",
  "key6": "eoPFEAtdkeevzMgLhHqSFJWdTVhSFfnPCEoQsLHQyfcMECq5N81UXAtiXSJdm1zcozdD8PJgqSQ4w8bhSfq8wwn",
  "key7": "5aoy9GCBwZrqeRLaCNkBjkx6SsAf1352Cr5h5KFiAxD6tyvs1gcSpLZnsGuV8nkovTBax5zYsJ17TVUznZ3AnwWQ",
  "key8": "35mEMFfixuGJsbi9EdmpUbBPLD5gjg5bFiEv8RugnrmZERTvMZyAqDt6xCVMYPDnjWUTohzJtYVUYQNGrukXijuN",
  "key9": "fZ7ymmaJafTqZeUQ9YbrZGy1FPtN3vvqXHdLiXP3gRvhQKuR5rvo38pFqFcDseYSFCw4DLaRLZopGPaJ75vykyy",
  "key10": "2CZWxjNLJWXmphBTMr7GckJZLSRMx4gz38M2RisMQVE5ygqLTRez8x2DANYCDuYkmKkwDWVzNEQftyUF2g2zdpMG",
  "key11": "32Hz9EeiMmuKtnaizT2vAk46iapKBnvG9GeyYohDuJbxLg2Vwu2bPUSFXgqzJEZBjqg65JQapXr59Qbung5WjN9e",
  "key12": "A9yfJHXCJyZZr1XXB6syBgCw5ZCiQhuUQrXNReVA8treuksr12TkAEnYzhzTZSXcmLhPQ9hBKC8m8iE6RBQR4Yd",
  "key13": "Y1Pa8cyc7FAH3nsBmPa76zoJgFYHikoMqFdCtTwpWwb4PrCuosyZXcJfa4pKMuZqkXuXeYuFkVCuz99ELYr9saB",
  "key14": "yzBq4sNbYNR93x1Nv6RMLc1iqZLQDMin23z1scjhiaXuZfFPpCrfBvy4nUm13ja9Hqs57up4jrr2844KumZgo64",
  "key15": "TUpFyAtSFYSzHsEubUuKCw3RS9SajYYUDefDcw5qroQsRDr8SvKhWafpq6RZewZ16p3jPHGkYQCNDFUrtSNZsdY",
  "key16": "3DEMxXRSMcZh4SiPXhxMF6VXV7gqgK7UCBULUraW2Xb9tBEW8FuyTou15NVFYU2TjDozMYbQcinT8KxYAUnhBDh9",
  "key17": "5Kw6b9gFLZbZGmbzW7kqDUaWp1sfjXyobj2pr61SEApA1qtqtRc1D2Y1BxWQMKVL7xkup3h6H3nWcrGWhfvFNogg",
  "key18": "4hMei8ix2qj4qZB6HfyBAcXmmWTBiaj6M4rT5xpjjzDHfR7M7bChgf259NTaSLB9PqUQAaeSicbA73ZBonXR2B6J",
  "key19": "67NgvRvpUWntbWNS1LqPpMzJrEFKz3USc3SXiyfdVd8cYjEN1DHRkRw8FXdkWD355F7Ds5Q67woCw3sMWMLxvXFr",
  "key20": "3PbVafCRZKuMmCxKMwwwU5LjdztRGgssCLNADQZcdR83yQSfuvXVZLDFVotyZARgaogfb54wwMiRFcLjgRwUAmuv",
  "key21": "35CKnDS5aE67tNkXbr9GYuGLbjRt6CWq9vMBbwxumq2rRGxubB8KKiLankJ1kSUH9bjcSM1Fk97HBpN22uYdF5jY",
  "key22": "2iSCcR8beafm3hzDZoo4WwJkFxUuDKB8L4HrqWiyg29rUKfLJczGYmmMsuuVufyxya1keHuibkgzQXuDn9ZCZCoG",
  "key23": "5kzTKkSqCGYBbdBS89tQFt77ThNohpE5f71oxDD5RJbp3XT3MENLV4DyeXDsmLpep6VjTx8XZnqKTfP24ZRcpgoR",
  "key24": "3MutmNCY8ReAcZQ7nK7zQBvK1AR4iZPVpNW8fTgrWaW7W6YmkFX15WVJKukR4QoHhvtHK2QEn88vx74txRbUVCoa",
  "key25": "29UdHtNYnsQksubkUYD3jCTX3KShH91NNCGv2zFFz8vpLKZ3DaFxj2A9gLyCiFVce6Sft6gvgDmDJCyXCq9andoJ",
  "key26": "4y1Hv7anz3tF7TDhWXNt2fuQ2DHgj5BBZwZEEEqy8qLNFq6G4DDMfdfrvUi4mFfb5eUj5SKAPb7dgFEYamJyhGqw",
  "key27": "YkGrmdaUp6o9jpTGt53Tk2QszLNCZKoCgFr5XhBVK366XZduiArR3QxgYr6CoZr1rxJ7EEJvQXLXmToREJWwTcE",
  "key28": "3ihJdP8yDxdskpGFiz8cfY29Y6zmDAqgHzA6j1LcntFvMYs8qUNVHWHSsReMFpdSuy7pBQzB626PyFdCoP4rjQD4",
  "key29": "25Erzy18UjV1XKNhvYKM2Rx8GTGaGu6HieD62LSorZdoX4qQXXzm2y4qjXzrLRXdjNTujMRNBxEraYupPt2oXPfW"
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
