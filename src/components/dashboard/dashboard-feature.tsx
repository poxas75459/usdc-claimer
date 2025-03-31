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
    "4DC2HWx9hdM9X3EHUPDFqS1ngmxRsiCgawXmjrgSpvAYqJWbhm3v1fmsi7V7osgMbZiu2o3RUnNwWEeN9b6KMtgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cj6D5ZVhWDzYhc9srkr8xgM2MCZdo4NcajD4seiwDxrJLdsKbvzu4VxnB3DvfMdRTyhqp9SF44BWj2yYjYrjkdk",
  "key1": "2Re91wo6uZ3igwKVHH7X8G8ehahuDbockRrHZaWGcfv5MFDuXqEJxAabnc4iU27xgu9o3nc9zQ4JB66gHUHPSedU",
  "key2": "4B5LuzsEuBiQWvpZrR4MrWUStLteD4NWoDACMgxKHQePnfde25eZ37FZuHkxUQto5vdxRwQG9zfMBjnuxHzATp95",
  "key3": "PDY3EkvByPaDRCMfzeUgaPTJZX8N2bfkCftetkzFWJRCvHxpSrxUnkLGdnR9YxvHX3FVcMXXhxHjVP4WJRcKDkw",
  "key4": "3QMXyNqoT1bYzMigxbvVMjos2oF1qikkTPe3k29Tvg26u26uTqFsS7qq4DGMWifFHHnr631F7gsZ9uYHpsBzKqSn",
  "key5": "3ZNh9qQ1oJRJZcoSzMt4FCFZR1zFjJ6errxVuhhSYn4kL9gYkPKB13CmJYcAhbpEj3vKbMFkGXYBqywZ2EC7Kwgw",
  "key6": "5yU3r164e72u1HyiVk4AcbfJLWM7Yd2Yzay6tGm5FQ7uKhsEwfwZEtgeGKaHiENpScwtGV1dtzqFZuCXY31U1usY",
  "key7": "4fo34ftEGSDrYyZebbW8tNkeUF9NXkqW633YejHEZf8wbaQ5atWM2USMkpJT4KJtKVNKTZ557gN4Vuh9mF5ekoEw",
  "key8": "WCqjpth1ZiXQQCdSH6k5uoTLfJ6FjusHn8YWyuYWoMMVKaVZPiNoGzwuHmkvCoGU8fRuaUvwrKv4WbamEKZKyLU",
  "key9": "3uhPhPEJV3g3WCkWuwqdmscFpjPYh869u2uMUhPHp2cquNR5J8Zmrbu1pAJQRtKdSQGxxmzB5sJCQkPcYyFvUkKX",
  "key10": "54DvJb1ioda5McBiJ1wmYRbrkys2uWLFtdrXurM89faJtiCk7uiAj6CGMLUSrbLS95MAGSBFUCFr1rX4PJR249Z3",
  "key11": "5boo74kwhWkyemx128bGFKJZFYm8TradJuGmPbL3DyqwCPJVTCBg2ZNs4VCCHxH9rp2ykV5QTnJDoxqvBJ8bGS4F",
  "key12": "ahCihFZ4qvFRUWSMkL5jxhuh6s1CKhgmY9cwEmjsjSrynTKSayEAGnootZd2N6rrB39rhdrWNjRQQnrdUas6Cuf",
  "key13": "2uJ1UHY1ZMNSRzrRHQKdeEBfVpPCHgx4tANotUfDnmqkKJaKu6ahM2qn4boWgTkukTnNeoaer9XcH699MFpU1rEa",
  "key14": "66NesVrnyrxnWv9WSBc2UPxwwKZtvoRXLSNi8ZtJb7y5yyVG6N6wXSAjtMR8cASshstLC7ZMWG6K2MoLkief3o2S",
  "key15": "3GdySzj6XALgCj4z4hogdkB88ABkHYpcVNNgEzfs7d3b39Lt1ZRnmqb1p6qRr4RsQfAh8JDvd2b8Bnq1aDLzL63F",
  "key16": "Z7UWUqUcAAuQrYt2jSMSmmdHwH511Y73etn7vnr4usUy8ZtrRR7vG5pVUAoSibeHXdMG1xJiAb8tKzvvT3jN6Bm",
  "key17": "2X3pafsUjvjwAm3GZu8JqgFKVCNGLmhHevmb2Kno46hJfsMQQ7ureU6FNbD6vhcwfiUs1GwbNDQt6DKv8U6oGeDp",
  "key18": "3Kf3qvTmW4WGwNttBcGSSCpHJMxAYQmBWS3SJRMJho4QoqQkpVQnYcS4z6dzGBEYFqRRP1tn9McSSYqibpxrzNFP",
  "key19": "3SC68ozsYhTVx4xsYaEimj3SZxcx2wZ2vs9PKXRA1SoeEqzQcdfGPzUcz8H9DEFCE59J7KJv2gXsi7nXaw7d4TS3",
  "key20": "37PzcCq6jJs5244aBGQJJsTMG7wVb1CAxDdw55W1Nopvm1p6Tk99Wva9zaXx5SRBTCUgxuhcNgeYk1uukEnu68pW",
  "key21": "4pGU4KKTo6ynnpsJiQNtMYh4aNJ5GogeaaKk8ANdp7AAPSmqKw3RRtmSKdjnGPFej8pfUMzkA9W9TLdMjyRUtN54",
  "key22": "4NSBYDisC4yUuueh3pwmi2Vt6sRUhJcVGwMxXahrrFsrkQHqzPK8De9gHMbHLQwksFnbgm98F2LA8c4QyGgVZDtE",
  "key23": "pmFcuKrWFFAz2wR2TR2DECbha6eER5dPjPH2eKBrdy87sV9KB87pNYCuCAav8CdMWfnTRjUjzfyd6V96caAnuoS",
  "key24": "2XppDa8uXnGDjWfi2ncgVb4Sz46RvN2co9qgv11htXtHHqhJJzRsLq1HRri2JH2PGAJ4WzkNdFeUUurnUEocr4HV",
  "key25": "21A8mdgNqMyjGdybkmEX9TQWxcUnMEc6qYNz3vRzvoDnHoZgD3jz29tHt1xF2f32Xx7XStAW9u9dv6mX8xX2pMaz",
  "key26": "4NoG6utkiyY7MPqVzzx38WGs7GYUzSMBYDU6sjwLbdkkKxaFzmpom7R9F2zMRNcJvRRMsHGsRAbpMDgvh8iwMrxN",
  "key27": "JSUTqzVJ3Pt6hCCSQaTX4DteiHD2LVCNUGrjCY6iRXh1SHDnfDd2SFd5fcDzGvrtGpmQNzcXNJaafQ1f7crznNX",
  "key28": "fjz4zrHQY3zRiVvJBCUMM6roDGZS3VK7d5iAiQxMPca67rJsGUygxauCTGFCFA22D9jCZZFV5TMJFBgbWfUuHRb",
  "key29": "64nJbPL9F6UXiuyBxKN4bh3PDuDGuo4GPyBdKDV2xyuTePFtbJ4cQFT73pdKajNwva4RwZtvcUShZ2sTTBM5GXHe",
  "key30": "3DcZRz2pocvA8XsNRiE2Ub9KpGx699fexNqu2QUM7n1G1ekYJj9VjUxDvkjeEjRNUyVeakuQAMQDSJAqPpkcWMo7",
  "key31": "4mohkPpJNaheJ341x1G86auri1r7Lv6fQCy35qSnx9mqF1Tv3yjvL62MM5eACPiBfTM5uh5ihugVySAYwzJYD43j",
  "key32": "5tPGontPVP7S9QQrhy7mZHjFgC7zt29cYRsRMPtEvjQZXZe5BXH6bKLZxqdJqitieBsNADNPNLnckvSvZ2JPpqkR",
  "key33": "4LDw83mNdrnkBpm7nenGuBvy4tDCz4FMXnriMLgb73esuDrKfEkFw8kaL6AhXCj7kQ9oHJH1NMZfatvvAQ5XidXu",
  "key34": "bY1joirTCu28EooSMTDmDKKQqm6i91ZEruZscwB2FxmvogioVAGmCkUZ2nhPZYPWC36Cq15pcw6k3NRjpMBStyA",
  "key35": "2xzoLGyuxiLHBdAgVxP3d2QAkiCwVs7pNArtwxLbVbh4pDuFUWjgwADUMJkUJWKpPhiv4KzR8CWJnQq6tyJENmeU",
  "key36": "vFEiiow53BL2gHPdhCPCgGjh5XigdpDyzRaGoQdV5fBsFf4pdZSinLzwRUvZjnWTEMwAtcqwaB7pJPEtQH8qqfu",
  "key37": "5EURMVf3cNdwvyT3u3og3zyNgobdgTs3YGmySChFchfxK5nEGYWQ6xNxntB1csGZtc1xVdt99Pa2NrrdjSYp8uAu",
  "key38": "EM6uAUL2oC8AuSoU3KVS48PqnS2q7f9FE87fQoUS5zfmJVfLgWVHm2iqJ4Lfw1upisxmy1tojSnvGKtpRvxM8Tz",
  "key39": "4gdrRjqUGfbAxdL6XH9Pe6ypkPKgct81gTqF1rKRBGd2iq5BfXxsqw9Q2uEoi1vpJtHf9fQP7gS2xPSLxC7WCiBg"
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
