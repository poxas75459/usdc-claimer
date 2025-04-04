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
    "3njCScAezu4Uus6Bf4vSdNxUcSNkte3iD3Ah46WTcTHKtLfGPFEb3cAt29afY4NoVMFbwJEJvyyEJbYEkkTNERz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KT6PfSxNs17YiCCpjJ5qcs88LgB6Y5VpQgvmUjMi5t3AeL2BwXxVWJ5B92Q3BRDJxHpgQMJWdknnxjfn3sjCNX2",
  "key1": "424Dfc586d7PdCBm9otFMtwuPc8U4NdP16etnBQuhWszzbZWkfrTeMJXg22MNFn6fBHoY7uoSYvxoozUrGtTRTD2",
  "key2": "5WcA5MY1ur2DhcXNoEWRzFpTMZXAp5YqkT92dBqgcxvdwABxChkyugVtKPb1tND2kRjn8d1mYXE6uetsvizZ5jZp",
  "key3": "5jugp2tmK62V7WfRu2yVYsxCAjLjctZtC7caA8jWzXfXNdNVUXrSY43hnvkAJ2yuPMmEotudoRUUMTrddNL2tyXw",
  "key4": "4vhT7bQg9thBNe2pXAPqx7q6EUj3AGfVrDzeU5wukXHKh7Kc6S3oEwU3j33hEmbCxaRPXEYyP6apRm73YqP8dCcc",
  "key5": "4UjNRQvuqU2GnWUei6M5TMtGzWfpjRmqHSRMjNofoq6nAQAEshgxeqyapurTca5q6AnuttM2vesFZV2g2gYU7pK8",
  "key6": "j1yDh5cPj86FHxRPKe13NCrK2YnTZ6VC8pUaLn2L14pPJFTZbF6zS7uKKzs7BN2ypE9cw6ZgqztGfHsHRyyMSJj",
  "key7": "2YayGZYXgE1krn9s47EkuZzUkxgbiVuvwzweyVKBdqbxxhC2vyP6R4x6LS7RPYRKD3Z2hB55QK9ViSqXLJz1ZVaz",
  "key8": "5G1rHVsw519TTVeobmk3mtHzAMFmrdTDfvmVcGgVrx2ycvzcB5wMxbKr86PNgxJ19pPdbYzrXYwAnWgTyU1N6CvW",
  "key9": "7jF7Q2gtNgBtb5kCKB8Wm3XYTFu1vK1BMEAi7sPgKknFhp2BmsgViQpcjFQf6aB9N59idqEnj3V2LK6RYnRZBnT",
  "key10": "56Jg5gRnGkqaZLRMjiHkix4sn7Hu6uGBPCnvLsZoEsoQeUruKA7vef5F1CxM5MVWHPJAhqcAGDwoqq8fj75dkPRK",
  "key11": "5fBkecD5SkAMwPidfomgexy283ZUEMCYDiain2tvyLVjbjL4QhzkJZppSKyRQnG8nLCoq1X9asjXSM9DULvMCfa6",
  "key12": "4r3981VvoUUAoHm2WfsvuixehXe1zY62FZFxUrMQqeFFH342mAcBiqYjnZabXZcneTmTQvNcLFXB2J58CoCQbvBA",
  "key13": "46Nc3gvybYPGQ4Y6qdnjUPH6aFPEbVZtfW2McSrWGXiBqLZs7YBTz5DWvvFRrwoiK83dtgBT5m2A8rXNbq97PUHq",
  "key14": "5J6hfJGN1xs3yHwc5HutPhxs3BrRspfssxorbrhtNkJ6g8ShxAPBV4dUNwxdRbqpRMvySqUijk9cjxHy8WMCbfr3",
  "key15": "ZueVypQUnBAzxWMuB9trGEzY6hJwXP2YKj8VUZQjjJmAx4NQmfriq4CK2j2s3JqC5X6CE7bFQBwuAx6AEkeVbQw",
  "key16": "5RFSHDi9otqHiv6VE2mNkRFAhsTZivemUVmpu1wRywTorX5M9z2Q9T1HAXED8YT2RF8A8FbXJQcdHpZ55QwUPKnW",
  "key17": "PbzkgPmxnJSVjh7wHSqn54YvztnTrgUGVd6v3YQ5B6nf1mHaFvBTRVzmPYoApww5sc34e66cznxjBmVrCV8oY15",
  "key18": "5WbjtafyEEr3cMfMjCDuuC796DGpwZ4yMAaAZPpUWrv2rrJkrLfZVp6SUqL1kEL8mpvHEyNmY5ZPisiceEMySyGL",
  "key19": "4xcugWbNrVUQVsZGCuH78JsDAo15wkhAEMiofZCHBEtAehbj9WJ2zvvv2nJ4DtntWM8UFJauSsmpBECuvs9sSaJM",
  "key20": "3hiFosj5A3jNtjvYEUuEv5QBb5K1iggFJ3ZXV1ggnUtKfNYLbCaMCq9VewiZvbaZSta1dCnM97CFsw6Mr9MNab53",
  "key21": "5QALotMvjkf9kGMBhjaQx7QneHtFMGnco1TuYkRFphPaJewbG5yUgK1awa24JJcNQuyEDG3h8AvSdnMzAXgyCpfG",
  "key22": "67mhgSxjYH5z1ZH7RDeRrVchk4L1Zq1CD4SMwHZxjzfPhPkZu4i6k99wGPQTaemf1i9zWwHNnFoFHZuDksEcadxs",
  "key23": "3U8HUfiHJDZHtU9hDc4Lsgo1Qs58j5ufvKtkrpMGhGR8SzZt6Rhiyv84gvBdYW9K52kNdc6PywzDiT1sDVFR5ZPF",
  "key24": "5zFxzwKmCAi4BpoPwEHpxgtCjea9Rrw1AWigs9VzuiJQXPyxfD6LKE6sCsFfQrc3uGsaMgQ4GDRAPHK4Uodoa5Qn",
  "key25": "457AcGUXYEUh1kbEGTtYUhvoLpVFitZcU7QABhV8qd35kpnSXNhgMQDXXa4aFG3xSgiNAiSCRmsR1BAzpoaEQaug"
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
