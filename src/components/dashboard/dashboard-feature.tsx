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
    "2vXkjb5uQZuFeVfUfeenG1KzdZALLbMgfx4Z26gVCtdZs4z6MFaRCpykL9iKiLHRRUbW2tqu3bYcpNHGo7UiFS7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37LffuzJiPyhRpGd3i7k53ukaD9FBW8ecvqSYrDLFajCM2i9XM1ePAHY3CWRKvXFYcphfW62yBHmNxH2B2EQaJyw",
  "key1": "5YuZpVRCaS2racMF2mEQMAC2rruZNrWmqKJfUutUNB8K3z2HZv66p3DtDTsfFVLB8wKZpDukMjmsXYs9CchafoBn",
  "key2": "3Yw76mJNKkLx9b6fzqmdpiFLpATZHE52W4pH4Xc3YKYhjf87PRsW9y3HUsyCBASbXyzFX6qdMQT37b9hqSRmTuF9",
  "key3": "3eNwhJJFsNob65LWJEaCKehBjVJhVZwHXVMofPZs9qiYdR7tGbmwPsvNNGF7ayKFVT8yNV2dbZc6XxqB9NqLBAZj",
  "key4": "3T82iNFamVLkhuVjgRCCWhd6vXvVRGHRQLB7BQgeq8woBLBXXCvA4NEgqv2ZyqhSH6BnyuqKfYJ7FohRXXw2U53e",
  "key5": "3631yRXWrXiJG46TchTEgvi8S5ARWDFVj86UQQ9ntysyyyfKQ9YmzAW2E926aCNjjH4sh9tC3BicpFQDuG4cE8AN",
  "key6": "2WMBQTtJmNbCHXZ9wTDyFavWVFZ1inCo1dUMaAbeKvjgvRHsqspW1uWtFRF97wsUMW7Rw9x14xWeuFqkdo1NAaQn",
  "key7": "4pAW6PAo55d54tCEPUNG5LBr3m9RGXApt5Hk1HGXzcfu3ejN9KFkxNFu2pFf7nCSL2fWypgMmkQSpuksYptKcEXx",
  "key8": "2AcZbXFFycem5nh4WWZs9D9tGxJaRpT331sUUYKEbXcMiCcUXKVUp9Srd1e4iphf7PqQsGPYQH8N9Pir997ZxSjg",
  "key9": "45iBgjSPViPLWoiBzDH5kuCRmHoCT4QAJsMkCU3jsk75TMB3kAD75kvsXoSNWeQbXZh422sFohdT7J7tNJDqkAnS",
  "key10": "4auuaVxqtcsbqT6B4ktSx3ryYEwiPTMQvDRj5cQ4gXJNGVtuCZKZK51iuMEMN7zCoHXyGgiHAZmctiVriGydMYNB",
  "key11": "2uxtJyUfoRT8mqEDzk7t41pobePmYWLs8Yr1iC5HnPaT2S4hiDQS9DK2vNBzy2bN4ghxD5FMxKeCFpBg1Ngtxxi2",
  "key12": "2ZxESMT1jHDuemUpK8cgG8P3f7z96qGBMigaFXJGrYBpD13MPiro6vAdFsbwYxUfRstCvcSnJrE5SZWSCA7TnKfx",
  "key13": "56Bi1V2vVfVbmv8mCcEp2v9U2xJHodfwKHN9dcZyyaE3s3v9hUWEXpHPNZUHKdsgqAYckD4BydKNdV2Mu9fmaCyz",
  "key14": "4Gw5kC6JHURkdCpqJY7Sy49DHWAcy3KvVdrTo9FQGESnNRuJUc5TMXZFWpG9dDBmtLGZkowx4hJ6whMYKpKsnpMm",
  "key15": "5oYFXeJScXntnh8PWY2SN7eTRo8sVGE9V6mVyTSXNSPggMtV5y2gLVVDLZqiejq1p9UVA9yE6TrYHY6CGtHDaa94",
  "key16": "JQxnqDGhBHMaJXkLNWDJdA5CGZe7kFA4crGnfo7NiAZW7K6Yod44d7Dw2MFW6tYh4212qMEtnfJncRzAviotcXb",
  "key17": "5zkKSHh8B3gPDmsHCYJwwkvpAHHPfnupgcahbBHTA1oqXiVFnvZRxqPVaJmGPj3xkKbG4BpJC8Cg6CQf8cq4dwXb",
  "key18": "2B8Tx6CUBpPSostW5KxeF9btvJHWnMiPQp3mK8eQvcfhnsqdjbqHE3P6FzwKHS9eeKyQTufa9Wq865NJ5FTnUMiY",
  "key19": "ncDbhSdqypLXAsw88caho2iFxvVGLF45UU3BW8a7DRjYGxPUcSV4nfT3b9WWs4SWXLKtX1A5SE6hYSuwhFaoBbv",
  "key20": "3T4m9nnCr73m5M2GzzpPkQD4RiCuFPEjGMH3ZuntkdaPXNwjJ79JaGJGeERyfS1o24CH3tGSCvtrojgMshcMRxMX",
  "key21": "5MfWq2PpGQ3gXxRv7ep6BWZ8oSgHXemfPPcTNhpSsu6DZ46CMQLJp8f2QoLLQ2noub8sFy6eMeZLfq4q2LfoLQsS",
  "key22": "5v1XRjSnWXR9BubGeKphKHWjYhV2B174qMxoDkGBxYr4AygMFZYHwqMxSNFHeVJtWek8PyEJi6HVqKjsGkbNPL3k",
  "key23": "MK7uiCHLBeYBJbV19UV6Z85HigZjyUhGbDNd7uEE5pMV91YGV8QLa29QfCvvFiGE35Yx7aueUrft5yrRYS3oWcG",
  "key24": "2Ng72XcyDMq6UxuGoHueCTvUfqddw42vbEPJoStM6pJh2rGgcFSSUj5Rsm7WjVed7nrAEH5A8UQFPTghvSc23WSj",
  "key25": "3ThHRdMbGcQYGtJaJN1Vmumf2L9QEX1hRGbMfvcBqDwUPZAUXscJvdgvqkC38nCwxpV1NDmcD3SJNKDq7uLzaWkF"
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
