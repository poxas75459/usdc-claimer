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
    "8UTHCKPYpwpk4jSGUQciLaSNuFgPABKGnpa6YQnvCj7Bhhyb1V85QaE4UUavjGNPWxueb3vmLpG7E5DmTuryCTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X9titanTXf9G54XmUcbFzVGjvRjsRpyKziPhVnPTZtata8McHyBgnkK9241u5jNtcHbzWycwyzynnrNKrrfP1GC",
  "key1": "mbR26QzyQLxHVuw5CyAHUUJjGPb332vmpbhJfJroDRnGnfK6N5fmQadZuhpRyyVFugEJsfks8dmJAaybaXmM4VT",
  "key2": "572Ck8W3wqGJsV7eqC4UUasa4Q1bGirSbHUfotfK7WzYYb4427Tu5zCRtE1NjAvGXo4SVnygsW47QjMZWfYMVZeW",
  "key3": "4NzShEQDQKJWGpm8ir4Y4vsLqQhTfSP2bSeYY3JV8sXhenUqDq71d5rvcc4KRRgKMJHYZLAzXKY6rV5fLHqjLTA6",
  "key4": "22WzPwqUpri2kqcHPhcVQKnQrRnLYyLBjNSwqzAB8WAp7Ya9WGB24J1kxNJbouyHExuZnmvXdGDWE2JoVrBzQ3Qz",
  "key5": "3PnDZvfgHrVLDZja1ngDxCwgJ93noGVP7iWNDMDGghzqCP1NAXp6gYpVqYwN9vJo5aS4wG8jnbqQdon8XRsXfaEn",
  "key6": "54uU7udE7tcMmrgVH5SqYt3zKJgmRYAQPhhD6wcXDwmpRz4uE9bpZGDANBWGroqeR6yNauwgLBWWMYyAA9nX1JFt",
  "key7": "4ASHkD9E6kWejAdP11Jqk9bGVFV3yE1RymCvQukXLBmmBLdDCK3pFxJXLJzvLGPJUEWLESJfxGdczHqZbVptJa7G",
  "key8": "4Ex6TFiCZoPBCW7ivzgV7D7Rv63Z2NuqtjRMC76Nr83ycQzeRz33FAkQ1Qhfnn77GRJwjiK194uaU7suMmBkRbV3",
  "key9": "2bQsmGBSGE1DfZctwFVWfNR9yAGLfRZc7267QqBBKFfELkw8tsERr84Cdgm6ThpC2YyntNHF8Xoa84mEZqXJNY3d",
  "key10": "2T9R656djcFb66QQKp4F2LFpF1ekaKu6qSycifczmutDvNNeaEGXAFRdzSRtwD7qj31XBww9xvg1Xiy7ZUBUmbZS",
  "key11": "4ffKtoYDGopjptrVEN9bpJNy4RKL6hdgaRQyr29AVfjWdEzF6KH3rDY5GVAs9n9XBJ2KdjoGYf1fkbjGyqQTgwUT",
  "key12": "4XKssHbq2nv4h9JM19jeA2DuSvofhgBrYTh6BZnznz89zHju71Ln1wuNfDD5pr5tv89qv9k9GvinEPZcwxAZTeRM",
  "key13": "K3TjxjtJ7ogLfNhYRWKSm1fyd5Z5CTb8vVQdykuFv3mhjryGt3MyFCeqZHyhGyk3YYeuDMsGpfETDVkBqbW9Fro",
  "key14": "4hD65kv1pC1mjnMJoGBMvH6zHJSaUen22ukTCBPwnPHh2SKWkZMKhTqQAjQeLLMrgUav6eQvYLHssx4uKNs7xe62",
  "key15": "2a6jyq1XGMyMUHoHggeeSeR4hte4FjgiAHCJr5yLUXkAio4PLEVb61wjjXkfEUTLrXmVmBZ9xSeen1Ri1etzLGH1",
  "key16": "TefAYqJ6YvUkA74i4bRrQ5sZzCf6VxGucTacgEbhEQ9NLZWXQmgi4YXyTGcoRafDQw8ts37HNj5EyRzV83CVLpx",
  "key17": "44i6dSqMxh2nzySwrw8kXBafwMRGDPQSuWda1MF5uV56gczLYB619VhaUWAskdmbdbhYjgyWRjnKACrmrvWu6Hh",
  "key18": "4wvknrVzYu9Lqrizhf5xk6uJRWuiroQhkwSSx9Ua3aTwD4g18XExfZeLsukFCJTNuZC3Gm2cFt2LytsdjikonMaj",
  "key19": "2kBYqXt7x3eL97KeW32cAJ1F8sHoaATayhzJ6evhWhW5PbWAS5ND2mp7iGE8QcRpYe8gacw7HkLGqGaDsCLXjNr6",
  "key20": "5DreKMghsqh2Ec96xp4VvGzTo7NwUHQTr3CVg5vUNtxvQfXpTTN5Ef5PzjgQ1hYqMeyyLRfKm3V5ALALc4FH94SW",
  "key21": "NcbHFuW2Gq1WAbSaDvN1aCDHa3hA8nMBmFUoZs7g9kNGesVFTaQyi85GPEEgKpfX9K4vDx61SAkaiEyxNtnG7Xo",
  "key22": "ycguQMFHEpJLNf3RStWXZUeKPZaHuJS7yDNdzKCm66DcoSVEkBwLXk8h3C6HtfZjitBuj1Yw4gwTSkNjRNxjRYj",
  "key23": "26YnMjMUoHBwaH5m9HDzNYYwzZdbD4K8YfzkBgmTWFTxFnfXatJjmiPADVSmV6LSsHnJjUYFoAu3eFpaWsii7VbG",
  "key24": "3r7tEtfUsC7pKB6Ztg7MShPf66GnqdMKEwbtYDxZM19Qt4nAKKnn3UgjfxoWb2tmCbVSheccitv96SLekejCjvFv",
  "key25": "33MtCkiPetXQfQDLbJZjdu6JEUuCVkgc3GGPUhWpHbyeBo71uw1ssUjBjCLccRD69RxyktAN7zzt5eSwqBmuDyXg",
  "key26": "2xPazvZk8gUaVEWgQZB2nZVsjpQpDaU3HTxpcmWcoeuPNCtMpwQdRBARQUiZvWsQqWbV6G2dN2jhbCv77kT6dT6E",
  "key27": "3fSo4uq9JY54182qoYx1KckwjoCsbm2qvoeUGR7FHctE2LNXjsUzrqFGLPty2D4taewYPhF3TXGCrBZkw6nvBoDV",
  "key28": "3MGsTocQxm3jseoMr2anmBzJLVQGB1x3cdPbFSZE2os7iiK8rDfRPx1Ns7fwFm8scV4qejCs5Kvc6ypSwENiP2st",
  "key29": "4kLbP92VNVEDUFLpbRtUxKu4idPtS615puYkYDSnHWWfxGDDu39th6NibEiRdsn1kk9RfY14rq1RdmqwQWyS3sHk",
  "key30": "3gAAAqWt7LYwJ6z1ya6NyqKwksEkiL26NHi4GcVdfreu9wAoNAC34oEz3nr5jzUcJSCxFRUAFV8uc6obgypDgvd4",
  "key31": "v9dticZoaJYJ7kC8gye8c9E7CLFSy8e9sQmxQdikjRRSj3zRy1B5CJoHWvCQDVrWnCr9c3T5xceBCLNuJEPWptT",
  "key32": "bdAt45UKioCvLW9AaXxJwFgVGaf4Bbp2gRkaYvBwiJRsujwnhoNftg3DWQ6e4tfZ9so31sLu7tsvac5tZWB8g4C",
  "key33": "3Zjs5N5nPAPzmmr2XWMxoXyxtN7UxUWBwvMeGqv1cvJKWsFGf7i1ujUtegxRZsGX19VkaWYeCMa627ycWf9P2eGJ",
  "key34": "2iBwHWUEJf8rD5BLeDGBvVrjUXhGYRiXgkT1gAPnBqf6ZU691yRcwSpdACza4fUcbwGN1UMxZeXkzdVSKaTnrJzh",
  "key35": "4Ua1oWSEPniEfXG6kUmmmMjVnTwa6N2TyytQ2KeUdCGynABc3hxgCYxpsTKvLwcED3RHh4BAdwr6CjkVUNFWMCoY",
  "key36": "3Ak88knxHPSJ7q69ZYrbWL9ZbY9crMZMnvQArC3k2ArkFXidwxE35XCXYEomB8aTTaypuVv3KCbYNKJSRZyYKF79",
  "key37": "5o4bgokFW3oyp41D1v1oAL7zyKvGeiSwzzKr4CPo7pZczT19HapZzjtGpXYtjDzkkUiYyCSbUbZ5y5b3CfveqhBg"
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
