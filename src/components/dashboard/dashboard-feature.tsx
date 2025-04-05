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
    "44b8xSoLZTRfxD7z4XBHingXYQN32UUyxqU7adH7B32P5gRZb4KpGEjLJVCxU3uWzHQjMth5V5AmGgeRi5HmSHsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rccj9RS4npsTfp5tbBcwYStaHjssTV1NYGZ2p6Bn3g6C6S9SzdEzvSNALQnhAJBtGsU5itwbNcqNUFFdq81oJ9L",
  "key1": "5Rvt1hVzw34Rp1ZCzTUpfMzDjtdQEu4DHeRBT8BEHX8cvEU7mmtQVCzfXWff4QFur2NzcFZZGhnQ8j1RfvHjE7Lx",
  "key2": "5d4pkdUkbCPyd5k8ZqvwR5cAX3StowD2AsipzpwWa31rTXcgaJcCt5MMfqc84qyGaf6zD5gzhZ9bbW7iNMJpvWRL",
  "key3": "z9h5bePpzoF4r5MHc9UWwsrNWRp9neEZL6SmbsNDxxCY3nz3s4DELv9i1fUM2EQYBSykEyNQjyW5QNmiCHRrwa9",
  "key4": "45iTTcxGN4uoCUX7prnRPPuhxMGMcmApxDVpxzGyzehi3mBjL1MKDTc6PcHktQ2fsZkmVCtRhLuwQCBTGLQvDXNc",
  "key5": "5VpNRFtGmDSKg1q8R43q3dj4hzG4schywfWQJetsnvCqc46VZrYskGX6h4wAjyXoLRddYA9mPxwQ1GZCQgjnZK8G",
  "key6": "5PzganBY3BE58DTJvwUkZCf6aQ7SL3E5JidfuV8FzouMu7B38kKxD6vcprbmbxMtSRjeTZj1aPHT1GyM7T9p83c5",
  "key7": "2M7ufa1nSJZof9GyPyu8UsZJLD9CVK1ktN7cMLwJCwYpM3pVRMdUFFPYPbvgyPKPSwZNvyANMkju7SAPu9WmLCU8",
  "key8": "RJ1Ve9qSJ2zieMTxaSuUm19oYrDHdRvpYNT4Xr3Emqs6GbuVYrnSGvyrThGMhpKF85SACj9RDwAJc1n2dtJe68G",
  "key9": "dkyzPF64WxCrFj6kn6SwrGWv8kWnpC2AR7PgoE1gG6Qq7qqUwGFiHG8E5mqoBavbdmuWiVJRT2VGF62n7Bw8btN",
  "key10": "3iAnpRjV4QXAmea6NVjBenWiJvrZ7gCaA3pxRoyvHbAPShmQQZpyzJ5DbWuwkQQMz4b6fkDwpRgd64P8sPAn9cPi",
  "key11": "4YpdPqDwAQBP9jCfE72dcFigBdJTcBvv8YJzQKuG5Vw27fAmHQ2k1XMPaXbSCWS59XvWahC1rLndcYwVU3bh1V3y",
  "key12": "2pPFy7BJbJmgnw64y2wmmaHupq3QtUFKm72ry8nHeMsaKFBXRzDvZkroGmuEzHCek92e7HquTHN6H7G9yMbtEfv2",
  "key13": "iw6WMKSXHouuznRVJUXhiQtjc31Jch9EiChKm2AZZZCX4atgpGPzr7u21LMBy4hwAGbifDWm57NifUDHNVk3q9o",
  "key14": "298kggwEkeV6XQkg1DBrkANgy3EAcwi83TK6VibesKEhKKHxvavNNHBezeGcP3ZGC8vXNqQM37QgCeWoTfbpUa4X",
  "key15": "yNQ2QZyyzC8CyW6fGgmZxoYHsbtuq2fxnv7SBLfyVfKi61AwDFjWT5FmSqUGc9a9kJN3qgRW76WEAtfDae6gipz",
  "key16": "5bbya3sirvPKJR9seNeKLsVVu5c9WEU1A3haxCZNd8gBrgB4WQhusPzos5FV38wUWvJsaWEtdtzxfUws9CkTWBmJ",
  "key17": "37V5B2geRBBvAWMr2FShkYKKqLADtP3e6MFXgtGuydX2EbPj4QHw4YGGviYdX6wRAJG66YcS2TtSiZfuMVA8BkiW",
  "key18": "3G29G9v5HKNoLgezqY8kCF4ZBR4kutHxM6rCaHxHzf8ZNok8Rk47LJX8NvyUtTepQfXQEs5Y7kcMKUNuCMjyhLnm",
  "key19": "2HGFTo2oCyeaVJGvpCXR1cdymm62e3prB6wHxoGKidehWC3DqPT96b6Zk58QdUDUgFAg36NRKHs89TfLbSYckCbB",
  "key20": "5pNCqhjMwgmqE4xEMFNtuVP6vTyXH1pERwvWqPMGWztUgThnT46kV1iNYwP1cPXcmrEyPSS9rai3JENzsqXL56ie",
  "key21": "4aakAx6vF1Rgwfpr4t5tKEWGgnXr7HdYzewmgjtzsQkqYKbap1pednBCJ1QmQYyLYvpvKEra94mWS2W463NAC3eF",
  "key22": "5WuErz5fr3P4hnR3PERpyX8aQKkueZsmmiBgfDU8qYAzTZfi1EywrHiHzQ4TF8yqaEtVdgR7KcXh9Py3CDqSkr2H",
  "key23": "5LcSVQwLJJ2peRGAKAPjdK7McxfCMsVMqt82VgbXKajgJPpWLZ6SGG2RassFjgs6iu5QesT7zaxywtMM1VSNi26d",
  "key24": "5YT3xWVt1NTL7EBCExi6nJih4FY5rzgfjv5VRi9B4suhdT9z1N5s3WSfBiK9XW8tPT7XSB6WsysbBYRwVDsbckbV",
  "key25": "3BfeeEoLeTY5azn23AHFkb9XzSKco88PowqU12bBdcGikoEpuPjb51u6rvzJzFpxYHERn4q2kCxeeSJKKegSc4Bz"
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
