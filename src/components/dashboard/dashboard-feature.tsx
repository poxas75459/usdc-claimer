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
    "2be7ZAQrR5vVGeuUwM3peHyFD4t9CiMH6zCVuwJb5igSrbo3Q5R7ZVdbGB4SKzspB9KEB7JFY6GmnB69WtKpjwvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UeUEBxeNi746h5sA6vFsaPzMAd9ZonHMkh51X6vCxxZji9FGQXDtk1FAbxRGb7aHVN5JBy9hXNoFAaKNBZhYsKX",
  "key1": "3Ltgz7erdxi4QKr37yK7ZmbNu5osfNNxw5CWSHhnSkZKAyJQjLKwoPoKvfmWfr5dhGb7nmCpYurTyg7YfBfxrJFf",
  "key2": "2vuiPg7Qo6RG52DeYPhik6gn5KBU8iH9mCwCYsdQPGZv2kJdP7X8WCdkexJvZkGctnq8DHQWBZtWLMebizafARdQ",
  "key3": "2c8kPaoJSSgaE5JCC8pFqJigQTXsdxRVwGhJxnSWVCWbBsS58EgK2ee8HGTsmfWKwdycB2cDnp5eJrXe9GetjGAk",
  "key4": "3EhiHN6CB3fvZLTtqWnXM8whzpfCFjQBbcGPcJKARYcLaSaYJfCzRnMFeQyKS4XQkwgZUaMp1x1GNA6VmiFPhHPt",
  "key5": "2z8WWtu7wfQozvA42YYpVFT61H748fYGQHbsoyBBLvG2b7tRA5qnUzEMkEoNDFmfq2bPr7u3S4gPfo5CtzYU5Nbo",
  "key6": "2FEvwupSa2bHbPPNBwjh4Dasck3JkcgaezqqgEfJyQ4rzQvLoiwMN3D97AnQmv8nUnuELQRjW5w8RE4sRKTCphiB",
  "key7": "dTgEfvSKQh5pgYqpfqpiesJGGmCzd5n1zU342MyTetbJByepxTwVGQtaQg46XfxTkMARiE2F86kLKdMB4dq64Se",
  "key8": "24AKQADQWSjL1r3hCQP1RhBLYRvxjXxDrTzZBTNtn71HbSaFbRNPE9q915ckk7Wh4mofbmVYh3aoEnkZEAxGcpbQ",
  "key9": "BBiP8pSLkJXGK8Zmqswyo4Hy1pWMxSUJ8aHZsF3gWLgr7aWu3iKy1Pi7R65U4X79m1DZZBBo2LjuCpPFuUVbKiG",
  "key10": "2YM2vhviqSbRXCkB6fPiehpRo31VM5WbHWynYCggSw8V2qKuPm5jUUDfGYwF27Rf9Bf9rMm88eV7XtfcnoZ5jJpB",
  "key11": "5hRiVR9M9touToubDmkWBjgmZTSM2VMogRqhipR2YLHgcGK1mgWU5TU3sVCTYc8AMtCNuAdG5KLB5d1tfYPxa1Zx",
  "key12": "66AeUPHc3Z8D6aQauRrJru9TiYetbmEMPe1rvU4mJuP9YdNLh8KELXbePwMnCsjLuDJmHQhhA2fpERdMcPkg6rC9",
  "key13": "4N4AA4oQpQNDKM9fcZzn9megpQDrmXrYLnTT91J7Sk2FbUS4Supt2pxxYtVt6rWSebMWSBmgkNrv3hjRiQkQALY",
  "key14": "4c8cmnzbi8C8B8MJcs2oDZkskQMYhLf9NUGtGqxUK2kSWBGZthi3v9bk2snCQBA8TwBb6mKb3fLTsYEQbsVYqU7h",
  "key15": "4er6UJ34XPJFekPw6Hn6y5eKXRGK9yEcznaE47aYyUiyVCCTY22Fj1TzBN426XFy1oi4rwHGRxNU7zmVaVy5uVes",
  "key16": "3ijpRoHn86yStkVtFWyyBQ9vm4ncw4QeUTgXuLZqkSPz8Rx8ppmzdJ7gYRg1iZXkX5yVRNMr3h5UjLkTgvCv5f14",
  "key17": "5WEzBHZRT3Jv22RtPYmBjCpoBKhrLJXa4hpAY86jUcSCMDs7adNgaWAtEk9oR33297DbJWvR99qbtZh1E8EXXhBk",
  "key18": "37owKmvrk3KaX2JRRg64FzeFRHHFaS6zs9ZozZ2gd5itSL6BxNTFg6WuacdhpPZGM7e5JMe7UHLKA6vf8CUpcFbv",
  "key19": "2jU1g6VQywunBY2Ekw8Kuw9GCPydBcnqJAwAP9P8LH9JQSYVssU4E7gYiWvh3U63o4tcyuZQNn8wUyiGBadUVvpz",
  "key20": "4aTcqHdRkzZHrV7TopLRNbWr4Dkko9d9gwG3CC2QGdEYPdFv14Uwzz9uB2gr3gbRsGKisaGQKh8nyJsyVWGnhVRE",
  "key21": "4QJLTKyewDoUHWYRPmpRnXywfg17Bg3RKKR4Em1KYBUMWxZzFkYRA6c8xRCqW95HyC6sEXbkQ93eqkTXpqvynNtx",
  "key22": "37bwFkywSiWkbcMZfyhSZ9tVBRmSvYcFMYSRnMcLcUMBmzGwWEonwbMeA3KmhJZcNc5PUXs1fr2vw9UWwKJe3FDf",
  "key23": "je5oBZDCQ9nu7TTBGyZh4KsDB1gnu3JnvxdLTkunR3y3NreLGNW3jUQissrj3kSSvMfjCsV3bHBi6Nk8oSRgxtm",
  "key24": "5n2oUTLX9oSiKQj31ZYixZB6kB6WU4Rrh1GECkarBdmh3bZofyKQMfXC8TDftzDo1Dtuf3sDnbX5X5Bm44k4opNw",
  "key25": "3nECZjXqKQZAJHadvo2E3M4sBioer4TqLC17ukNdcPv3AJpFRrn2gtmABRfx8wjb7qpqSitfkKoTGHXyHQH9weqL",
  "key26": "3LwGLZWHE7iSe8K3AjLo7f7vcRf8oLKGJXSPZeFmT4sH4ZjDH451LuXRcaiJaAQrSvFqGJU8UsanMhE44z84oV44",
  "key27": "2se4fzCLLgtY8ENbmmaeFhx1U7UBfPrZfQE4NcDqxfRYWCubNxoizQiHPftwA6GMp1qsatQMUNzQ1GJzyohtkHWW",
  "key28": "MExTPksChXwYx5WJU1MG1XRbxnXRzKDSWccskUNpXKgAoQN7KCD8oLz6bv7DhVt8ciuix77jaZrKNQWAGnWtqAq",
  "key29": "5Qs1Q8S7zFvQNPTAn2t1jmi1gNoGWFpkRNvzBPqQjPNaewA3D42ZdZgE2nDgLckgQhmnrnauayED1rGa2Yy2orfk",
  "key30": "3aqpaWivCJTY27nL6ZkUWoLfjHz4srwY7skXAUxXaLWcBt1FGrLLmKRryzpD9XEP1RkdCD6KxZVAwiGm7D9QXPy8",
  "key31": "5HQZSec8hjaKS95evGtP8TgbY95kBqawhLwWCGrA97yERVFChASAhDRcjGtZ3kFNVK2tH741wapuP5aFqJKydSYb",
  "key32": "2BuV5HgF1tvJ2tbzMhMbEax5ZbMYDLa6AufRRJmurSM7AwxHWSAcPWoELJfN8fH7kVM7PaqBGbYp1k3x9tHCYHeL",
  "key33": "4Z7XpLwW8ATKEKvcHDXqg5HBQsJfVtVNd2V6XaEx9eBfwhKTbETpNvruntKUo8DWjymfCNKzMva86zGKeNiGHQTJ",
  "key34": "3bvKxNRQ3csE9iLGNTUE33GAK8z9xjjcpLmQMbUVRTjWna9q19bMMRr8eEyF4h7HxsjvqTMxoQLUBPsTxLo64KqS"
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
