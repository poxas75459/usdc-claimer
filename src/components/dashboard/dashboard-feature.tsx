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
    "5ErtmHCLv1yFecJtqBYV8a5mNoXdJAGCcGx4PZhe1hVueprpCmBx2LtnQEa4nRCTvuCsEMzAdtNytmAbTye6Kqbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66DoK1o9qY5bjyuNFuFUTbqVF95XTDXU2pt4JmGvk2SiJY5fqDmLrzUHuN6YXJ6DVridE2mwK8FpFP1bwfjiGpXH",
  "key1": "5obiTG9Lf3kAk1kJM4FkVyTsi283a2KmNFsc1BnLGPoTM6MeGQNstrNTxshmmfLKXusytiwCt9e54FZhqZz1tF8D",
  "key2": "3Dxt9ZiGAwNokzsPRA9qhFJWUXCwMgTfhzSge2YmPNXtdMw86jsoP9L8xTPxiGr5yeK21eWo5unJJzZ88APwgUcW",
  "key3": "8btwnoSNf4uHKyjt4TpwYwHLunGRFVNxXPTJSQqbjqrwk92S4P9qJtjFsSpD3C6CKUsQv5wdvYuk1ZABfX4Z3RV",
  "key4": "25kgNomQdUo1PSa2tpU292UhPqjsihMHFhEJncMpW9zKWaVa6du77yVstg7nbuAcghji8GFB6gxgD8xnCJFfUJzV",
  "key5": "4APczB3JTSAhWatZJysVEznTuncQVDPG5E7ZKfGmBbLmfjS5MRoa5gUEa7iTaPZj5V3JG7jenPG3ocwfvUK6mpLR",
  "key6": "2ZBJUrRt9eyLZyEQT4Uhof8Jn2qmvQT86nTRGz3FxmZp9g4CnawT5UUfe8B2kL7yZrYJn7FiMwnQeub37kTFAFMF",
  "key7": "4gUiw24srBHWGEqw9ecSS5DmEJu13jsVYE3kkVdgQPaC9nYD21aE9qKcyur9qSX3pe4pBqkKitacybEdmvttnHGe",
  "key8": "yAKTrkttVg7EXWWceqiRz6FzhhhZG7XUynj2JmG4ZtpKnmWtqARA7q2g1tzaSdnFksMETkdq2C3yJqBYSy7sbJD",
  "key9": "3RFSeLkh4YbxUkNDfusx9QbRVZ8rdFUasAWSWoaPn3reLoH5UvyEYbzMT1zd9zbuY9Tc5sFY3nnUq7UkSNcadwBQ",
  "key10": "5DNkHNkKGYC1JmAbZaZQTvC9dtbNfqzi6V1chxqEQnQUD11qBpR53rLFfJbT2hzL6FYVnHkLNkQ1MrfL7jgvy6tU",
  "key11": "qFXCN3FrY1CXvVBMCSohHnaxYb22Rvc1H7WtQ4LS2kNXrMiBKqnph4WRHRs5uDYpRtmBFR6bifkDSHYqpmXEpEG",
  "key12": "2GRVE77WiJkesf3ja2hXibR3Ly2BdRhreGPSZY8G6kLewhhH8WV66nhhUyvF8VoeE1ZApk2XxpoP6tR54md3fepa",
  "key13": "4qeAgs8hHSb7e7sTgwVLbVG3Rnxt7Z5knfjidt4NwhQu4N6EevcYqkvKfPf7WXf8DQY9D1Y9aFiS7T6RrFM91ZSv",
  "key14": "4uhXfsLUqvuS7nxLq9hcpUxX3R6dTA4atn3cUjSLei4K7BFPf2fRshhwCu662nopw6tj6zBCstGQuZAVcfomz7uo",
  "key15": "4DPSqsxXGhZgdKp52J7mozLH1oAYVBWyRRHysANkHDoufqFV285nvFVmasiwKM85mBBMb3qpaiHbWDfuowLDMBBn",
  "key16": "R6qbkLRQXDzkj5fvvxsYUaP39qSb1Sqsv6VXqY276swPdYf8ejenWwR6VtWx7KCoT3HKrVMWmQSZatBL3U4yj3F",
  "key17": "8r11E6t5nwwLQLgcVD45yEXb1fs88wc624Tibhw2wuwfJgn3xBVBarMRY9UKEccfYeMeGLybfH4h84Tm4Ywbmv6",
  "key18": "35J9ytaJPkbh5KE75upFXbYfPrsFicFsWVnGmXVCLY5C3vxg32RnG9paEUEiHDYxia4vXBKH8E1hpZ5P3GVaHehz",
  "key19": "2WCDbmPYZr3thkNdod12CVy936dEWWV2bNoPsj56LT61AC4dBKrZ5Li5YVV7KN9yGc1KKQ337ipGZNSB8U3dHen8",
  "key20": "31ubD21mRWihF9E2bP1N1iUDiFJeQ7Ri9Xdbsya4AkfprJSyvzNz1HPuNAcSZ4EiSA4SZts8UxXRdPzuSHeveM9k",
  "key21": "fu98zHh8fPH9HMge9kZCumUuLxwtee9uDcdE2zDLL8Lm5DEM1GH5AiNMJQNF1jqQfZZcVNs6Wzo4UaVKocFpCbQ",
  "key22": "2YvYowWiqRvc6gbMf7GMrL3sUhjF7crTseFMC6ypitJZwnVHwHMt5EpwDHq1YUdWhUFQuEnQApCzrE7ys8gsdyiY",
  "key23": "4BrcLTTjLP1hhBa7bgt33ckc31CJKZdNT4nKwJKZSZk9XDiVP2xQvdSjSY2ZJdKUPYHJPGQPt6AFd82Vbsb6Wbs2",
  "key24": "5PBE7Qyp2ZJFYjEP55CBqYJVvzRL2Q8M3MsfmX1kMYW7oRgdpdQVbfZBkVWr3sfDjQbscjERnGpg6jrQZwBii53Z"
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
