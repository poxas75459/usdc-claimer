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
    "5Z2Zyoaofx8E53BobHTtzYaWX646BC9C1TPVtkjL2NVb3dSbewjQEPjw2Zgo7iTiAgaaK5be7St3RLxZbsPPoCV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eyLWCM1c2XfyunqP8Wbs8bAhz4kyetPttUfVQspCRTQ6P8RDavZEmKgFzk4yGVdyWqLup2T4FVPiNYRyfCDYbVH",
  "key1": "3QyjxjurC76foCyDHWD1GxbX17HYXHvr8s3EkbMnGYkCM2W4YgAYtZnpu6snC6Ft7iBMfgrBuYfAaqWLCerRwfb9",
  "key2": "5gLwBnM7SwkratKUmKn4QCyjM3WKEvEVe9kvvhhuJ7pGmBB5LgGCSvQXEoaVikigZ3PGTrD9fVxygJ28znxfAjau",
  "key3": "X3JYg3p3SQiQYpo3WobJeyG5PM543octA1HQtmG2k2qroBENX2UrQuq4mY1Pe5K1KzxP4EEPhatZ9hbxReRWByj",
  "key4": "5RTNwbJRwcMXk6AasskvL8akPgu7bYwScqn8rPdWGjNYyu3TEv76Am5iSKAQskWZ3AxgHA7eSSxreXWx2yWsu1wB",
  "key5": "AYeKpULNBTyiRR3QWS1BJbCoEAVTdYRWbFGRpnC5Mb4fEMPaCSgyPBhQtXGSPso4TktTHnxU1Evk2Nq3LDQ1ANt",
  "key6": "4BQhviTKLF44iaSvy36THvZ86986GmyGFRSR9KWe9Y6rhMGnfPKsFkFCyy1T6pm6j17cXbbrtTQKGDJW5v4Rjv5U",
  "key7": "3qFkSRBMajsGunvXJdzrkA1evREujtr4jj6LvJuXXVHaRsKtAHg4u1PqjxgimDXBWyx7uKzyiYUsURhQtusxhVGQ",
  "key8": "3aNDXuwgeoqtuwrJjgau8PhmhhrDKSwKhw6ef7QZeQK8x9xU8rd8hBDzQSyG9jiK5FePMtzYarj6Fg71PnpqMFku",
  "key9": "5wGRVuMmB8i6HQnSu8kkwtSchFB79cB5TNXibwkGMLFmxoetZPLFnbRRqqNQq45CTmAsKQ29EUtCWhCvEFVBLN3r",
  "key10": "3ccNbNMfQbt9PEkAh3UBUwJHCwLzEAFAA3MkMGJXsyXWwWUVz3xdka2Y9c6nziKEEtL8X4358sUCShoazwiMxuFV",
  "key11": "36WFywPBhdeznktqo1YfPHrGEGwd6CJ4jXi1i5YMPtLWUtoScS4PZ6QyuvkzHB79bMa5sHMUzDtvbEhoHHsqAcQq",
  "key12": "3P7f5VK2giiQep5qHhpggbMk4DA3LKzMPRsv5py91GSmRBssZD7AH641bbv9D6givxzkZ5g3BpUHCAYkZ6DyL2c7",
  "key13": "4PqRwn8HWry9e4Hi3onX9wv54z6cmTUeaSggQPXLCDLGfrY1sAtYVEQ6FGTLmV3oK6Gnmp4QDJNZY5WWWBmsXYrN",
  "key14": "48UQXHKchzwtujfP5hoKkZpCTuvrxCKjQhe5ThvvraYcUcuqzWU21dewfh4KdsyR5ipuBtMNR9qjV824gU1yKGTC",
  "key15": "619HNtiqA2kXcdMV44idoGM8Gi1obqPza1J6qWqWgA6FbJhzB1ecyrMuXV2jmANJmJfEtxjStfTAQRatT17zKpo2",
  "key16": "5E9HwpDse7d98r7jugWtHfdt14qwAWcRg5qJBBMdYpccb3YNHmSLR3qDZCR9vEadPuDyJVbGHEt4cUHLTJvnwins",
  "key17": "3B4Dcp34ZhfteZqTX85eC78htJQ7cK1VVBRJ1yCTHBnMFCyEFyHViUcY3hHMFBnewqPx12GPpFH1z6BJofrQ4D3K",
  "key18": "2N6uysipBPkCZhVkUi8NtbpWUCkJhUboH7bmVvGXXv35GT78JqiN35HSKtXF1rumUGuEs1dygV6NekWmiizKYyHV",
  "key19": "3MKw1u5rWRgEbP2TXSRQ7ghUDMCAXfZvTXfd14a2PmLa3b3VqHtMf1bLLdohfmKB8a6xn66T14xgDTtpfm5MXvdS",
  "key20": "tCNZFEwyLFUivDzZ5FmpsMmHcG1Q9QnAvnA5iKjh8Ljca5g98wcB2xmGc14bXxo5L2bKez9e2FqCyQcMwrke3Eb",
  "key21": "4mjri5aasYhgHpcqgigaMRQ1u9Y89qmHEEi61j31apnTSrYPxt2WFQEyFwY4q8sVMebQ3wfThpqzMVSSwbsp5x8b",
  "key22": "faFuDiqYYHS2o57CH7eRzvNRMWQvkaPeb6UYiKmxu1VWGCYGuAw8mfNg2Z8Ss88TZx4Y6QPUvF2jp2jTMgsmC2B",
  "key23": "2gyuz9SzkGUYmBPLqiD8ezJEmGZaTRhnUHjrMF5KYHUSFxPHTjM7rZgD39viTpvsusoBbGGsqAJVL9JuA7PG3894",
  "key24": "5GWnh7HbccxTPUHvrKtLuizXDeSeazVA9M1Np391FtWQcVHEL4pXrUnoP6q2DmqnAJZGRpNXHGYgFL8TstVYrobA",
  "key25": "65Dk3FtGhvd9PhZgmig9rwKoXcQ7gRUwusjQDbmP1MmLtg1b53YNJuKhWuZoE7vqgrSS9djmtGi2GJsn9cYV9d2A"
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
