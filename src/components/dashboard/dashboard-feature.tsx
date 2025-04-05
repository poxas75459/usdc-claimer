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
    "3o35ZfMZL3YqEJBAnMvbu7uZh7AdAGFXnrUKureQzAvJA35hp6Rkh8eJaVo2HGr8d6ZmSrVQfY3Ge8iPziKTkbTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41p3mP4UAwXfSX8GBfP8RWArxBJu2jCtX2FYNBPbjfKzqCtqL4bzWFGbdaeyxHrbqAtCQSdAXRCUCGKGf6Gb82dc",
  "key1": "4JnJM15PPPCFTx7sU9mQNZMQ4tgzWfThpJGbMPL5fN4SHvikVziEFRi1qBuxkbAdynZXoX5DZbFCHJCvf7YqJo9V",
  "key2": "3we6pcH7f125EKWZSUytSemBkyksJcu2mghqEuqpCYqigsxfnWUBqMdY2hi5rcCnRS8VPvPkFAVaHDeaL3MfWJxm",
  "key3": "F6tSp9TUfWLt9H2Yp3dvX54Zdx1eoppr5eCc8JCj1omZKcd1q5FogL97VZZBceixDUq2SKAHxoaGY9k3L7Eqxyo",
  "key4": "2kK13g5jtnqqTgRdDkbfB3WwPy5c4ByAFCuQ5K2G4S9Ycy6vwewQZgbMMi7gYSHtswMw2gzzeh8zySqRD19Lb2H8",
  "key5": "tUMJSaJMRimjuGP9CNFAveKB2Z1joN9mHv4TBM4ikzR3V7Vox3dAoVsbhnBwSW23bH4mULQ1dLsfZb5jgP3xP1Z",
  "key6": "rSrbEEEaxMxVuYisjqKfjg4uVEZ1bBZWCaRwQ6eYymwYsd9p5Ldoq88d2TRvAHFT1Qy6wiSf1pMZmvVhdaQNdc9",
  "key7": "5FsitwB2a4xk64m9vYBmENCE7iu8KwjZHQFMTZ4k6VwLDAGfZMp5AVpBE3NxuJmekYNkkSYdFdmeo6vYiqjxnV5j",
  "key8": "2jprtGEPbKJmqMRc8BE6dSEb1xbFAHQk5AzZERsXaXgXveMPMmTavgEF3sYnn5m2ZKFGfeur236GBttsfUXNGVYT",
  "key9": "5u6CYMtVcoiuYwYjYbKPUiWhj93fs2NzUJkh8BrY9JH1YeWNAwj481vCRMYmhpnAYWRTgNadjuGnxWrsjkUtsFNf",
  "key10": "21FMk1xa7S9VYAzcLw3xGULGYXfkQa7dbRgxrFp4yXetpMoRuu2jS39iJNq73nZnWktXPo1ZZhxrXXdf5zamWpi4",
  "key11": "51bscQJcbS7VYR9kCa1KsyVUcW6kWQMW3SDL8aMGrQDLXT5LaAJPK8ANrsXckAnKNZAQ2WuXxXGo2vGoKTTWUPJC",
  "key12": "2VsaZaow35vRN8nEqm1AQWCFuPfQPfyRGccKFQtfchX76ZbNmgu5amNQGfxjLcKiGGBgkhzrCnHi4ze1kCFHNKNb",
  "key13": "4bPHjgH56SKGV3FFYi7pDcmoXYAGoV2FLBDvEkqosnCnmAwySV9XFYGVxRtZVoLHZhsL9Tt7gfVieiiuxMsxH88y",
  "key14": "5bAywuseKZcbqXKMYCWwuJum8aq9M5CF7u2dyUfLV576eTucLnQwBVWN3ZEJ3pZNNMBSwp5xw9L5aHMFjKtikUEh",
  "key15": "5ciaxzbM1kZpW5sZUvxUBDe19d155BNEPumxbVV2jMraVYp4TW9hbPvEg1Tn1RGdwsiTLFYYu428G28XFEFLr7bp",
  "key16": "qnpVWjcWX6bpuKurvoKDCBPncGYHVfXERMPvyF7C4NkFLMRg8FhGpZYZSh75kvstLxksAFDPDDmbgxJZUAtsu9a",
  "key17": "23o1mb5R2gpGbo8SMuxaG368rkx9MZj2eb6kP7gRKhwG1VRAprCLUsE4CXnMskCQRnFx8WCNDmoKAzGuFjQTnFZ7",
  "key18": "3L2v1Pa1q2ptKei9NxrWDh3BQLmLB8S6fRRu8QoTNdvMNZq9yHWt7Q9suPmv1cA93vpS6ztqTArpqheev2Ao3Mkw",
  "key19": "5ZgRaQWpicY2zcShNf4pRYrbFYvGwbz5ZowUwv2pZkLBtTeFfqjiGRVrJ9aRS36rFrurrzuWjzYdHfdYwEYYKd1n",
  "key20": "kfXvstNX14Ni5j8B4fYZkygec2WVgs1o39qBimtgTSSgRLfAvkEVQJHnkMMRzh5nGARVmisJQupGCdZCzfUxiAN",
  "key21": "b2UWzppFdswepnjD1PPaNsC7CJobrLmHrmcqHMKkY2BkxxXj7c6gWmr21sa4CQkeSAA6wCRgkbdJUrcdw32xLaH",
  "key22": "3TqpceuVagGnaN9ZEELcRNS2kJczvBpVNTe3joPJCU1p4FgEfzkm1Rt86HAeCNWQo2G2ipgAdnpDGCz7vcPRyQmo",
  "key23": "3SToyMqWXt1qUbYQ5sb6Q5Yr6Xh2DCpUyHAFL1EeLPqHXAhpa5A1dsKUK6nWKeWLYowyRiArnBRjfgiFNLr2LqYy",
  "key24": "5yFxtYoXVd7CUSikdvSzRGF3bkjF8X2mMK4D7fbDiCKBsaxCFKS4ZAoniGxELiDLgPM3GD7HfSMDPD8HYNTLYd2a",
  "key25": "2hvmrUaHgLTTVNnPen8XXnQZQkLmhw7D8FLYF2EFWcdwMizz9X7WXMPkKJXn1AsmCp3Jx8jSSh559ECU2QqjsMcG",
  "key26": "2uThSnTLMuuJeLPk1ybe1MzTC1pfgXXLDhpHCn8fA9LkajfmXL5wRpABce93HvZ7RaL39dqzSV3AZQvL9Kq2pJjY",
  "key27": "5WCUQY6FGwQmebpPyLSLcNkPBkm2TTQqXPEno9RZE2gryUxSsndseeTQhZaGTBuJQXupCL76EAS1cMi8UV9sczEG",
  "key28": "3bUvEifiPZkkH4Xz8WaaAhnzL48gNmEkwDoUU85i3h9SqF8MBYH4q4F8FXD9k5ojvv1V1LrpuCAXZxdMBU3rqpfZ",
  "key29": "5pVagzchcDCcqXXvUPrYQGt36HPMK8h24QfNPqEnUZ71K2SoELDL86rZLVtepgeofS2hkHiLW5dKNua4chvcT5M"
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
