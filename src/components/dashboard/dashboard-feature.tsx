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
    "2igqKiUDSG8J4BJ2TTUHX3yZzRYcrVxhw7mB5RgeidxSfAvTPDPJb3rhFvpaLS8t22TDMYpNx9axjSEt7ZuBsxjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2roJgxXgZm32SoM2DAgFZkTMviC3pbffjdJA4kQAn6DLURdP5ZyX5SNQ9txqdn6s1PqxwfSVpYQJy6otZVKzpu5s",
  "key1": "h1dTda3XjhfhBacRdB5b2ooofkt5JT3dEDy9UrUA9EL6JMSFy6powpwKAWkKzmrvHMyFdiBpJCMjXRzy1naLeAb",
  "key2": "5cStjniYR6TZ1EtmB6bXTTASqRDrJQFRX8YNmeRZz3kwTxehCWU79HQttxqSSmpbrSf85PGTiVDNXpGh9fqCPKNw",
  "key3": "XHRYfAh9TLWSQcspNmDTezvDnEkNXWG1ruirNh8j4oe3BRuYC1Fac198qAPQAfk13VT59DGEdCAYppDySqiKyB4",
  "key4": "5y7NQ9gzY7yUuuS9NQcfpYYoV3Mef5En7UwFH1LjBwK6SbcjWH3EqAzz2qpeU388poDHwsPWoDmppuc2kaChmuna",
  "key5": "4mEKUCqTBJ3hMKKudYXe5mHJg2WXiXr4ijnwWgAiBwGzB74Q2DUqKpJhA6HpE6wS5pEaVgnYduwtrgFpC4JXevAR",
  "key6": "47P2dTAj93z4cbqbNNtnCUskED9jTcFmw8oicrWf98ezTk83kzogPBTC6rJ4QdCsn3KyQnqkFwvjgtBvRKTL2SbQ",
  "key7": "2NYZH6N8SqwtT96xtpoeamZJtVMfp5cfS8aHMyiv7a3auLsbWBHz6ivXeh6VisNDWpje4qqY6tn9kNdHeK7BvvKP",
  "key8": "5c4dpVBHXXFs2g3wrJKmF8j3a77QZUTnrq9BRRFtPppXNkaBXKzEhyS3vcm86dBCCAVJoXu4xG3zaDExgNDipdL5",
  "key9": "4nVUBqwH8iLypAcmag66V4MYHDfjCAjZVWTGSJWT7F9vfCh1vh57rpDLzM5yLWGENMbxA27vGQgfuEKY6DgVns4f",
  "key10": "3KA9iWsRpKNk7Y5yksSGz35fa82zFnC56UTBUJ9wFDJQDbnsofeRCwpGazAGy8tyGttQzAssdF4CUn97JomMfK2m",
  "key11": "32e9wGb2xBBpQUt5KqxoJqsDCcvpnfdTrTWdXt7nJsEZ1W3qAQCaY3XLf1QQPcLwk7GLYH3nUEZcdSS9p8MjmeBi",
  "key12": "wR1cutJfTnsSaV89Z4swtRhcAwFu8HYFC7FHdGWGwsntkXgHA5wEJLwbGZTMrKKKAEm7mmTd6vmwkBszw77BRHA",
  "key13": "4YHRTbd5JUte3BhQaYQbzKCutMwrbNu6QHoq1tnoagLPuZJ2uMuFTCb2qrP9zewLaN8EChL6HPRJGxywLX1wo7XZ",
  "key14": "4EYbro4ayFaEMHa7wosZcu8pY1FwEr5X2H3bzgfE5ewK8HkQjK6jXZdttePVYW7Rem1cwCqUMjSZZGc319QBy1nN",
  "key15": "48K23XnEYZ32zVMcz3q49t3WXZCSuFuj2rbtqFjganFk6KWschMyJnRNX6fbRJ739FkZDxJ8g3Pirk4YcfyYMEiN",
  "key16": "5ZwLQp69Zke4jR2yXqVc6sLXAjixr2VfiayESqD7DYX1zc2y2j11G8LKdcuQek8awdkUMZVnxfS5wkWUfKPkvFzD",
  "key17": "3GxeGrxa7Qhn1HF6AaeVdrziSk9Pe8DnpK8EnJcVUniFChncsXfxa3ySrSLpAoYbFqeM3pg8ybTGzLQDCnCKnqVv",
  "key18": "5NxHVBsFDrcxvmoDSxXehWqLXXyu9NgZSWSvAMJ6hJ61XgAnx5K3N4MwWyRaNvR6Mdd8Gc8ZCmhcznhHsAJ9yMKd",
  "key19": "2zp53Q3zBfPkx6fNZ9wfTKbMJLYTAEasvusxaLErveorT6xVjxYU28FhmD6419TtTXBWtBKofpwM6xAbmHFgfHTS",
  "key20": "5cUoU3GuRxUjh1RZ2VpXBnFNGL4JSVxFYnDA4f1BkVAS1hioMqK2PFSSTVivYyc9TwncvQT528j2XPhhUS3SJV6b",
  "key21": "3Qxg4yGtdymff9zT6bXHEkeLvA8L1J1hz3fHvLGHTVXgYPfL7H9Ed9f58KkNqx2jPmR8n1T4VwtmoMh8yoQRSMbV",
  "key22": "4S1KYy7AxGZjRquwRrpvcJtfvWGPri8VmWmNCf1UppidjkXUjVwmD6Yt7g8LSEDXq1k18M1itHSWpGyVzK1Ez11x",
  "key23": "3yCPMNYvy8isKhHAVMaZzwTrkQPEhi6TgxjTeUpTsJ3vDq9VCRyomq3BbS3GRjP5Rkf5Hj8q8qeqrdCwtFLvKQjF",
  "key24": "5VdKhdBhbWxPyubpyyH9sXGWFsSwd62ptPMEYFU2BM5KtbMJmWHuXQQertw2TrQ3euBU1M84hjhJeMjvuRidjRfh",
  "key25": "2CHXFsdt8csX7z27fK9P1LuXWtRWLVHWFkhBUPuaFP3noaUPN7fac4r9JRnKk7FDMAGK5hvuLbUecddYv6vbomYG",
  "key26": "3jm4CmJZijyhyfLLkQaFjHuiVgtCDhER4cR35L8muDCDAw6zeeu2eDYNzJZwpo7U7TiPko8EyHMXwv1NySEAvtGj",
  "key27": "5JuN9Qj5EGi5i4oFzAUf19VqFqh4k2mgnZE5iCrGUUrJkR28ANrt7ShojED5DASd129g7gNSqXBBHi5CgLmcPVzm",
  "key28": "2LpT8DWtekEwPxPNUr2y3bwiFtBAR7DFgaubkJrTYeByPNHU4SBx8GPZx6BgKumBnbkcpVPj9Egm4wRtYBFf8xec",
  "key29": "4rUKAcjpGGdcJXH2Ghh1ZkfzBscy4C44naRiKxCVib2GjNfcK17VenfkW42e7NDcxyMUKJFHgXC36ZCme1LaLmJS",
  "key30": "3tXL4hgzjzJKfwvAA8KQCohXCExhCXQU4e4HMTez3Sis9DGHZ8uts6ysdJGymDWUhu87JApcHiDJTpdhNH23x6h",
  "key31": "5hNVnjGPU99kqoEoVfgPZxTPUkEjPpgpBJgxT5quwgPaWUC9W8AUvRtXUVdyaLLgt4UfWuZYgNQkaaU8sqAHs4iB",
  "key32": "4MJf1sxNDyX9Bgu1HEMMmMrGhCyFAEYFkHm2tLG5NmjLLaj1LmYwqisH9BNKQtaRKQXjKJqxgHkt98sTStDL2eAu",
  "key33": "4VTJi47xV1mg9j7RtXdkSNJ6BB8keKimYpcWexVnYyHsbJ5n4eZGd8i7uS3WSmzHpobAPfK4QydBKgpZ8GpiHGqm",
  "key34": "4ck4dTrA8CxRAmtcA3DbKzkdxFB21HVDjxwS1HYrzjkDKBSNdZYemeAeZKuun9y3d3uReLH7J8zKMyiQiEHWj34h"
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
