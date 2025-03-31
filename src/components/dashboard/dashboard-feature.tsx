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
    "2Uvb1unnxYCSNmDFi5iMxihbQkjbwghq72ioSZmx52i1m2t9XGLzZVW9npQScm8SNP8qXhaLrNYsbvGfRoW4ouHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ycHFCrzA2s5sW7z1Cxmbp6yGX98hpxWAVzWomWG6b6gJ7Sh762audSQrrCaFk9NYrCeG8bsEfCmz3qmMdZJQZM",
  "key1": "3GcAh4vWEu3uuJ561rHzKmXRMkZvuRQdTcCopoT3z2jvKEKY12Ghp1VhHoVFzDYrSb63s9vbrUnpycVfm2CSKsFS",
  "key2": "uZpHb6h4wRoGHHmcmviKGmDi13iF75kr9SQxX56N22K6e3GrwGDkmnGiZznDYEGyGPGNpa2UqmwWkDTXCTCGFAS",
  "key3": "5Dtc4rE4bq4i5sZ5P5gXg13qBLajRTBYPipRwYQvrUwy79WSJcJkvm9veFcxLg5NYho496eM3FBmoDthGPxRovTj",
  "key4": "3Ks57UZUCHia3KYB5GbMtGwDp5NGZyrdhDf6e4hbahBnA4F3vWttT3XeDaYhezB9BhfbXPnGjTjiFTHMQS15sdV1",
  "key5": "2pzrhSxwdavPEzYdiuKUH4mkpZC3s9g8T9jtLVfRT7oytUn3fpFxd3jyc3iPYJ4qSmjYdwvctr8yMt6Ej7JQuQZn",
  "key6": "5G6tW6LDNXbAYgCXkP7g61oYvmpoPqsunV2ahZPx8izXjxGreYw4DHPQhMa2kQ7MzVF34jr37ZaPVVumX9c2wD6E",
  "key7": "2yTaukXBzg2pbExgfzkZv4vxKGiaciWJYWPRHs26ntVVsGuodphSqXqKYov99uXPTi3WDUSkrGZrLiKyAC6kFzGN",
  "key8": "2MFWAoqAvhNY4VeuxPgDnEDDeVFATm1tWH6yqrWSuUFvwwz4ULN1156Jmj5FdWcLwt4xL5eNEwN9nbyvWPfNeeh",
  "key9": "4WwFxvGmVDqp2QHcBbrCDNhFfFNAwhmpB8krm5zkxtdEJ4DVT2Tdxru4HY9HNrJcTaAzN2AZ7yotF6Cz6Fpu9wd",
  "key10": "fxvst44Lvrfwegscuvtyj3qvXGcJXdrTFtraJ7H7ASEzk3EpnsQciSrwHj56AcpCA3UFq1Bbuc3KEDudptKiDL2",
  "key11": "2oAQY8yCECFo9JkV2jBNMaE9QJ5aR5xhkZEJTdSJLax8qfM7zLSJKSXDSBFq76WosesAAhBNrH6UFRydM3dhw2xE",
  "key12": "3bg8hD5DeQZZmuQ8MKgxRbxZ38AmUE1fS38Q1y45rw2CTKNP4N6c6ramrAX1tL5xB3UXt9pkT9wu3HXeD3NorPm3",
  "key13": "3w6YJ1VZ1nxDQXWJiavAHNFSofpS4eRqsjhKWw5VcU6mXQEJeuDC2UUpvnAB4KncYmcN8P5AU5FRvswi4nGDKgDU",
  "key14": "21om1wZ4GN3RjVXx1o5yBvMbPzeSe3F9zgXaZThh8UEg4LDE8X4H4idjyCSpAngqFtUmpq8w3cMfWUr9hQcV52th",
  "key15": "45WDMsKNMEShnjcu8R1UDf9AUkes9JhUfDAbd2GjGH8FSACXUSfhFvfjnBMyeoYM7e314Hj3Du2w4rTrpEMYUpug",
  "key16": "fTEMZxmvL3pVzpy4w61QXH19f8uF9pG8JdrGcQuYpAZKDV5hyXVmMiratsskByT9cRkmGsj9Pgaj7YBuH2BeRF4",
  "key17": "4aFN49gad3pqpX46aHe46oZJ5yYYZ6kgcsGyaZy3CbhHEq6x1oLdgBbAr3PbZpBiRk8Fcvixk7P61V5XDBSi4NkU",
  "key18": "3AdfJY6eC3TfBtd6pxwr5QPX8nsrcwiKtnoHG1adLaquTMwdVo6kRz97dYp169b6vb5RhYn1BrL8QAahAmAGAmhJ",
  "key19": "3ZuzzfBZKFqZrme3yUxSBxDauXm1Bo3oHHU3PHnoNefK4ghexb78h22pnfDy8PYQ1V3CUSMvtj8PrJmMczm9xdZj",
  "key20": "5xWkrWzNHY8sV5BNgMUc7M2ma6sZdBGXdaYxnYT2fXn7HBALZguWAJ8XTWLoee3hUWaUiNJ5oXVxfycdWbV31twb",
  "key21": "5Scm9qrPDpL2CDV5FuLA4vUhuiWgzMoacRWrqDK4P1FaZm4ts4ADUcVqBAYDYJX75GktJ1WWhEZRpVpzfbKBAAmQ",
  "key22": "4e3caNPbpNsQNMmTvmNKkghjyoEevqnJR7HFvZrPgDb4PRPBQviJyWKDE21yeJC3doXX2GVjVP8HTfMd5Nx8EJtz",
  "key23": "3zAtEjtWga2jkZ4p2qqNa1RxpSQaJnYJemugeUjoX6m1tngGvRo4RMVfsj4S5yXKyJn5xUK8ZYGhcUpe2evTk6oL",
  "key24": "3qkRNQ29EGKsgxU6tnAXywMsJaZR4VXptfnzTzF1iJEVFFryjqwvmatVnvVHkj84AVXQnwivLYzpzoXEJmseg2gJ",
  "key25": "4dehz3oQmhkTyZgbymPQ4AXXsYprBCgTwAY5a2Rdje7fiPV9E2N4CGopYBSVo65d4Z99HfkFPAJzF9uXwFdRR5Ev",
  "key26": "zEszaPfVihberRW3Haah7R8W9J67a8r1bjnkYPEDwS3WbbQLtFHNsEEFwZ8pf6fA8R1ED99a7Z2MJyjPoFmypp4",
  "key27": "5iAFoa9Q43w7WRZBnDcMgUpbn2cb5ekXG2yZNY3azfHyqGf5vzs1KKF2SuUsMr8eQPiaVrmdhG559HCxRijWCu3E",
  "key28": "4raWLs9XJNvTB2JKJmP9RRXkaEAA24fQFTw9FziWYtyFKaWNAQ77MGFEV3Cmpwb2JRhY7v5z8v5RWdoFXY9v6XB2",
  "key29": "4RV8tstY4J7GbUMPi3pxRk82hCd6tQEYWXegSjW7WFuxkDGFpK3YZTBSECPmj4MKZ6JALo3Cniqkh1SKq2cEs3kN",
  "key30": "5WyQBGSY8KrpydRouvNZ9BCR32rqTDj72xFsqEqgMRVLT3JcFHtuHdXhYBAWUmXZw4ow1fxMVsbyTXzBuVEbvQAp",
  "key31": "G17TNYQrtq9nvF9gFnzLs1JzcDkzRmauKUsH851RKqtwKPSKoTtZMm188V8KWCMLnyH48KX2qviLuYUcRKKXgNe",
  "key32": "3JQDE3doAPBUm9uo52zCfyuXKQd9h1aPYsVFsaMRR1TSr5sKZipQej6QLT82pxsH9RSXYgiFssg2Sx5Wpk7Xhz8E",
  "key33": "4gx58xXnwXUvwJTTUhFtT1tViTFD8XzLoEYfEuTZUhEX6t9G9YrAnhhCnvhWZcm2uUzoaqZo35vfXqZBLdQHi437"
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
