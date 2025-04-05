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
    "2zs66FSRqY1JxydZWfSwarYLxXRr3qDsPGbB3qYeafMxYYhhmbCHgDC6KbN1FQZu9jSqwwpLdRqFDbiQM4ZcYacb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gcEV8AWBscFoiqto1tfqMG7ePFcNHcr98aknoB9WKnzyvhAQGkfXrthxFgk8dE4casmXRgf6kBCEJN9RfgPACVQ",
  "key1": "54tdQePLehQZjTiMyNQv347JGAGHh6o1dEVP8MJTB9UogyNMCAye6hxU3Mtvf4DxLwbznCCLr9GsfwWLBP4PHCFV",
  "key2": "5ZDMYmEDwVot6zt362pp8PETYyrtWDrYmPNXNZA9rC4pLxuf8TBAq3qvLtQvVt5qU3fnPEx3cemAwJMFv5K77sVj",
  "key3": "4Hjk9qmz6GKqLMv5kvz1H2MEzXVXU7gRMUivUQjP7SJ3ts5SvRw11GuwJ8ehhgvvDCTi8CrwvdrTyorZB8M1BCK",
  "key4": "2Rxhd8i9gCcZXfsMZVB5oVBGCTqHTUUwSUsDdjT41PPZFDYJ1TzQ1oyqtAHbkqH1wFtDcjokMCkf1xm1KMveK9kQ",
  "key5": "XFf8Bt88fjB7DZuAGE1giKo4dxqBYHyDEBKh2CNHtLtzJTKS2LBrYSrhkujT6RWt87eE8TiZZUsxnELQ42AumHA",
  "key6": "2UfcjHW3kiBmLFPTT1mqPyZYJkE514eCc8TaomANmnHjhtLZfqgQF2MhEeoimrWFAScGgRnE7Rzciey28eYNksBW",
  "key7": "3QhiLUrrsubCuujiiUh7G2i1UiQt5rjHCT5NFUY1M6fajq8vvKD8uTBVE49fLPiwApXPYnGNq9TT8Cphr9sgh8oE",
  "key8": "hmQqrD89QPRsnPKY2xWSvosrUe96tPJnPk5u3N96v7bGvCLCXprqZp9nHHXdTJ8QenHvhYSacKWewSNLxpskkyx",
  "key9": "5EospAC37vYFKRieuMxuvKdYEi3aggLTWPdkaM1TVUimQKmr6Sz8WyARAk5CqcVUifhuBbKPFkz9594CxMScHw76",
  "key10": "3h148Gov9iBFBVoHULkWkeqpcYYsKFCakZsfckPAXqFhNvr7LCDf7gHGfUnETGjRy7E4HQmQTNgEvBhVS1RKmacd",
  "key11": "5stxUffUdFQSqzSjWvN5EBa1vdv7xghRDMMp3p5faHzxgFXYHgaWAEiL24LEGP1C8ThbZWhpYHyvTjFNHS3xDbc8",
  "key12": "78jdUqetpyQ65A9tYwy53dQq1KDvUByn3pc3FXc8ZpmBUt5iCGxroSai9g949jpBTnMf6C1rKPumz9t317FbYqs",
  "key13": "599LvQ9MjZzYDKd2qCu9eU75TecJALLP4kH21mU8xiSwRWiMnFTuYiDQxTc4RksLbzu1SRsrHWu3uwGNKcdAy6ZR",
  "key14": "2BCryFbuyBYGBdXnRmRivuR4CExuciAtrsqgJDLk7UoBCQibx4jsJnUjuHkBfByMvUHX5Y6ZpQjgMDh9VBbvaHUp",
  "key15": "56L6u1dYtJyswQAx55GTx5pCubmmsKVrgE9ERqB6Joad6t2fufj3Lgax861bmzLkSm2xk5Xed8NNHAiiDAfbCikQ",
  "key16": "5AGmELFhYPMA8B1o6E4o7EjLEXvzYqePDYweKHWS4ycYksTmgp99kv5xJBxde6y8ZZJaW6mgqtQtCCcfywXBm6iT",
  "key17": "5ZShCn4eK46kNuSxwAv6zX3hVxy1eTd9Ru32P8TKpqXLmsgQDCYoKfSXoA5hA5CxqPCHXtmFJ7RbA3bmbeYdAqxC",
  "key18": "2LHhzYMW1My7hCoAdaft2JDonxhBdXhxnFB7hwoLwXLnZ4Yc2ShmmuCgEuybTBXy3ogpEiynsPzp6PJqaxSfq6Tv",
  "key19": "5L8o1VmFj9S2H4LNQiJVcjsagBg4AEugA4BCUEf7kWkBkg8XcocLEfWBomyWeWhSMM2wRyxLkm24Jr5Hgh1XZFKi",
  "key20": "a2SwBrzqZbj7SNjL6ZWxTjoqjjKKvNKThY5Mn9QPGPMmbahDKe7kZo7BqEMiFMQKcjEs1pjpe6n2bbb3S5qzqka",
  "key21": "9gG3dSUawu8oiH1gYgAyuH3xd7t5oy2XmTEEQ6xXFn5vNCfZQPHh8wQHCFndUsHUNabRmaaEG7DkUdSyhtyQFZz",
  "key22": "5NFVwX1tfr2K4WCeX8mdDtnj7ysEqN32rm45c5atr3e6rqco8SH7iu6f1ze9srDYNxMfx1iaTiZE73nMm9RA3aoh",
  "key23": "5vWBGaJERQaZkhmDNd1LCTQ3k1z8MpAqvoZy7runyxDDfijtKJb1bR1f2EyWjsVU8wVpn9yqT2Tj1fjp1LDhhCjU",
  "key24": "33JPYTah6FhEYqErYE5pPaigt53kdJES1te3bgNFkBRYjuNqmjwqqfeDhey8W2pBYd6TWMDsrbtUimDX9UVFUH9j"
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
