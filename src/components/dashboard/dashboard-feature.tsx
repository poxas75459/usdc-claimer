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
    "DvN2WLPo1fBx2TiYqY4PfQPAZgViPhDLARLtkw3fNCqqDnaoN1DkCR9Nft1URGuvt88ZdZiAY3yXmpxzXjGM6CW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G5xXqq4oPM43sUPmmyushS6NeRTQ7jf9W3j4KvpyS9ByLJg8erXoa7XbAE7LxiGTsb3xDbv4KnBrbguLNEA71nm",
  "key1": "3sQxv9rqcE46uJ2F4nseTrgAf3KPjiPCDK5mQe91DRPm2TtLbhm1kX2ZCZNhBmfUWgxbTR9MsLKzkd8CRLEC7zXG",
  "key2": "5r7cyfJb5W71XYdpUo3D8CGioY43PGX4LeDStgihLNqK8KZx6b668NHFfL6PHjCmFXYLH7nYDEnfSyUD5txh9AxB",
  "key3": "3EVji18rW3Cn1pgSD8KCH1T1ZFK6zKTjPSZJpW4K5mQaxXGbQ1P45KNSJyTuP2g5jkPP5px2XL2ocdLXS3Uag4k9",
  "key4": "2YAiJKT7sYVcnoGn3cSRQ7ZgyHbUuzd3My98VETk8pgToNmJdY87tAzbHdvUnnWsnar7ooCgS8u3XaiFjt4ko5w5",
  "key5": "63uk73DGU8G4QcFYqJNnYceD88CGFrx6HkdKuTFf5DRryMPdDoWrMBHqfZEdxBrKfduShYEcECk4QD9nuVhworsQ",
  "key6": "4C7RW5WYAGAeUA3zCLp45wZVfuyDVdxjkbUo4tWWTSa1xtBWxKJAaGHhtUX8RkXGJ5axRUpZi3Mf8T2XQF2r3ujG",
  "key7": "5VjqRMk1bzy8dFWiskJhR6VsYSB7KyGTxoLHuAksSepzSMfqpXphmThAuLCjWaawDACFVKauuBfw59qKoEvmprvc",
  "key8": "tsyp61x72UTJSoZ4bkBDXLoCjpuUnZu8TFtWzepRq3rVDDdhgjiTm539AFo8ziE9vVHNGyFPXPmk6zhkL2FkFCE",
  "key9": "2V2MqXwypX776gmwjiJEmbxGbLcFqy1eUFmws73BP3EeoN9x96GkkwybLXLqv9AJyhC7pXuQ9tBibUTdg8n4H8QL",
  "key10": "5WNYGHurUtgiJhVHH2akR29gXZSPRCuERJB9YYnq7Gsj29iH6Q7hD8huF2uP7zp7LzTfTCyjdGSG76dLsJRW2cHz",
  "key11": "3qXx4YLhPwZygigYrWDzsBKk3FFCsoS515AeD58sF6LpVPXHgkbRRoUEdPaajguARrC4ssdN4gfWPJxw1dFVpffz",
  "key12": "49AroUeFW4MUQHVygMFTbXeefphU4a35w8bPgNFbnjYUgoPdkfgJ3c41Z6zijM2QkhQF67FgGUx277rzFCdzYvbL",
  "key13": "AAKcPaBRpybSz1M9t5tVcmxwfpZVaF7fzqDfBGcuhSgBPi6DLotB79AmC4hEajVdtWHkG4fJ3eisEyNS5bgponF",
  "key14": "3dRicx4z1tFjDi94F87ivnixtgtgovQz7HndwVmDQuCSszZJnydce2q4FSEhEEn2R8PwLj8s4bJKABeMrYXAiC4k",
  "key15": "BRToUi534GqUnxCZDkB1X8uSddDR7R3Brd9oxrgQEYWQqwwg143BWGGFYBXiyzPNhHhXYt1mtgNiqTxnNV5y9vg",
  "key16": "5YRMVB9XVW6n9wDJycyYT1AioowQ4jzQXk6tQvR9Vr526Zi1zCLBCCkgfteRfEDjmKBG1sBMkX75qaEQWEEnezKF",
  "key17": "5mMfJyZi1zi3JY8G6smQYtjwU3n9uVRrGKKTuVsMQAMtxdDf5ZS9DeXDT5pEkcdVTPqz1Scw431Xpx1HPVSB1vb",
  "key18": "2dpZfHxHnqLnVvHsFP7sH662dCs8fAdKWdUiK1zswLfN5Wa9dWtBjXG9PxdB7c8ZU6Y5E3Y7oQzT1kTbiccd5NUh",
  "key19": "5GjFjPpk97FyVPQ3mfuUVL3yevzDAvdLS6ukT3kg6vL6XBjgN2jAZcUBbuNNnA1TyEQbFf4XCwoc8LSoHqsnRqsZ",
  "key20": "2NNH6sXYuyCa23v4Ag8hNr8M3L8QUz5q8kTTHurVoQZAUwVAzCs5sXcxaQpas8XBRQPaYzwvT8Y4zHKAv6Ao6M9s",
  "key21": "4c1vS3irMiTroTHXyw5FX6Tk2BwC2DyiVB97MUskSkqxuQfMvHRqoeRJdg69P84UFS4h6cibmdmxwQBETrfEteKw",
  "key22": "3U9SVG11HXwQtnreAoarbUHZiwJekpDpo3gTz2KErewPKV8CXdrmK34KofSMSepGQSxHRpDEajcEsnoahirjkjSR",
  "key23": "5AnJEW45uDM5MpKSzNtKcDLYakeugmWXZogS84Qa9LeDmE9g9kBP2geYfXxwJyP781DGY4aYUAb1aWqLLQxQ7qdB",
  "key24": "u22RfkyuCo1LA9QR8EmfQac1zMQQYNBZZZQgZH2G2BoxtXj7LCPevTHRhia7AmXqeDWx5xVxZyA4fTbXZHrWYXD",
  "key25": "2tWbxuEMv2BoRpBJXcFagJTvZfNdXhz4dz7hbqYrQMYZyQXZivLptWqr3V7Cc4AocHCrNZWqjbLSStY76JcUJKMh",
  "key26": "4tdT6QHAEGMPaHqTApTBuYDZFjwHoZFyjz6CsAFqGA5KnQa6uKwcofh5PeE72eAHURSQDSMxHAJgMxshMEcV73PV",
  "key27": "3jw8EBJ6wWwkt9kDyGVeWRmY2im3wv86b5GBVvcdKZpkmD87g77prVtFXVMQDeuprA2BpdGBNZJ4JKQjuixsdXve",
  "key28": "3ci27Zx9YSsgPY1Kd8DBa2vneyFCQmTNhSAus1NdnZcxktBfzUBZsq7EV9JBV2ckNXrb714Ybtdu3qqvCfhtiiXH",
  "key29": "3rwGLQUpkz4f2m59zrTTDX885hUhFkTejSj4esyFJJsrC3mKnVZ9UgNfuh2DX4qv2N2My5uATCr8Kc15LEGQyG48",
  "key30": "3zB6fkWtPvAG2rCEB3mfg5DfEkk4QyhdZgXE9cjLbJv4VfPVN6BAJRk1cGNCPauea6so3u1ENaPyTfidEpq5aW5k",
  "key31": "5Nz37UFG2nhYSxfruMFgRKHMwVSkYwc8udP88YWydBmpuBr8C3ZmwStphmd7Fiz9tFxSGtRqv5uLC6gVZSvJzrvj",
  "key32": "4GPUrJZj3MBYURCk1PAmkdk45JW4sJnLNWbN4CZVXB1TMkF4GyRf5pJkDxJrH6cfuErjkd87Tx99td5mUDuC5VXu",
  "key33": "2u7tGKc1diGT4qGGDNwz95GRrcjSPnvhmqcNv657kUZkThExGeLRLumtrcjrxo6iexTUyNGp7S8tqvZJsN4mGvKd",
  "key34": "sVYsMfM5xGn3GhZZpnGyjjCBmGq65UZj9WfURcr9jKvUF7zhJsCoKCyQvdNvFWSBNjmzxvQ5fCk6uAqJEQqMm8i",
  "key35": "1242YXJF3KBq1VNYuwGjG4jHvDoiQtMo9TxnvrQqTorGi8aoyHUX3sdajsuLCPqXyvL5xxNuZdqJUcodjRgkuvoY",
  "key36": "KjgnUSSW5yLujxtWJ1DBV3Z8Nwkkz75EXA5HR4kkvvhSkPGuYxwNUgVFCH7f2e9YBRoQYYjXbSo6fo1Sww97b32"
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
