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
    "3t4xJqUVRDkbBDb7ZHb4dHo71bhGMUrKgLzCBG2T5bJJNcvhp2r5JUgJhDDX2jRAa2qvefr4886ouNFUm53WHyr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d3zHQQfrAhu2ZbrytSuSDbLihg1wQLgiuPqvr5of1BHkYtG1irjCiEAVWTZ5c4QvLKaVqSH17wbfcCxvFJTjVTN",
  "key1": "HRaFhX8Gdgrmm1aJtLhYt6wLmohWVHsKypLafu1qGoZLhmtvSrM8zUpWCqojRKMmuTnRrQDgGR2uKo1K1VLSyXn",
  "key2": "4LyrAPsCMvcs2z1r7SwJdCSnuQyQZmG1iCVbjSchaVrx6QBunExCHHTWE8BN5HdZ1uJm3Bq54bnfm26WmAD89d7s",
  "key3": "5cvhHHwQVNUeV1BWLmfsdhwjtAc9AHfMfgSpwtcQRb6gPLJuEWUFhi8YKx21stNyexGYVWLHaojsGBAPxR1NQ6wb",
  "key4": "4rTV6kAfEiu8YtiGodBPnqR5GQcThCicYkUqH1wDzZzunoVdN85NFGwqmUoypt19nGNhr4S7sYoaaBnK4sP3nmg5",
  "key5": "5NXfHdVrE6mg27dJKcLLZyVwpKTtxwv6yM8SV4wStSHCen1D5s7zYLcuLJjKJpdZmMRJbJmQyBsR3wgsitfQV4fM",
  "key6": "4t7DpUjViDiq3XAq4Q4wqYDzzfsVrMQrfyVM8rJ7LQx7nrX7iVHo6rrmQhU1zbnuKKxpvS63inDECnYr5oRovZnD",
  "key7": "3wXxeRiWf5SVtW2AVLJdybPbcmSXsiNsTi6erkA4v5nMPvbZuEaqpCu2rwwAcaQWUm7j8FJWrFndiLXSc4BVAj4L",
  "key8": "358bnTcKRo3qcuqXbtJWy1QCKhpaLNF5p9Zb768e2Tnr4cjSuCfx2VR1kbQsdZAvswBVsiGJJ993G1XjirWDuXUU",
  "key9": "2wwzAgfwWDN3LCKH4h6yiUdth5NDP7871VH9MWsnaPMduhe78hCsSeQ8XT1mx5RcEg9TJ6VMqCKgRebmVMP6ZFe8",
  "key10": "4jd9vtMevK3B5qQ8UiiwTxW6oVkPMjbT2yv7nYxjzXKpZdx8Tq5zVdMRNHHJVeqG3WYK64uy2UvgKNjsvRPT1swp",
  "key11": "5jazxuAZo9hCsgDWP2bSFWxWQMkQZZmsDSKTXhGuXXRKqNtMDvuXcmY9Fp8Tb4WSapvrsyniWjSMtLGXyhAUi2Hj",
  "key12": "4FZjUmUkVnb8GrDNWoPCgJYCEauUg6Vo46u4v69yE2v8YCoCMS3mHpqqpyKigo3TG1BkUBaA4dFAwKknvGqnaJVK",
  "key13": "4eNmxS4pNWe7eU2ExhHStSBmMVAGbkbpZ1j4e2sNZW4E5jo4ADuHDt34JeX6Dvnzi2AB2FSNnKGkb96YZ8JZv55f",
  "key14": "5Fb6UCm9NiuoCS1M37tSDLLrNmKa9VQ8eVRqYsdynt2eZGZrpMDcVEbZFzgWsnRMmSPoNYoe3UfQAG7KLpj41QZv",
  "key15": "4okUkeqVB8DRejffTNfZ7j2iS4qXpJa7HYJnFSqzreH1LxwUdyT9KxbenW6G6esuEsYbxqMoHJuNjX1hnXMerz4c",
  "key16": "Z5do62Q17YtkqD43h3Qrd6Uphpj25kHXDSoGUpJUKF44oGNMyTh6dwRagqA7yurDiexcfMQKrGAYm8VuS7fvUFs",
  "key17": "4X37MdmanbewarndsLjxiLao5P7P6skmyAsTGqhATRbMnZhBgoX5gAQ47SXfKTPjCVGhJQBuLWd7GLq9RYYDJs7i",
  "key18": "b7Erj6eWvDLRej92EAFrEaTxP4VNPZe1g8yZC1U5v6rv9MWMtxSPsFAt8bTseRxY1y2m7sWgNiGRZvsDFs8nwRa",
  "key19": "ZmHaAibkDUxW5iwzNNRw1dBgWNpkMB8Y7A8z2RuRzRrxzcKwtjjCVJMvRyCybaFVRbEJyEsJckBoANQGEaFhfRG",
  "key20": "4BfVWcM3BvbS8ajXXR4zrnVWEBf8W9HWH7KkwKdSAbVDyfTCbfqr6RM3xeK1fqGQQd5cuB7Vibh36281Pr4jeUqY",
  "key21": "sZDDUW9g1oE5bJD1gY6RoBcsWQFdEjpPZW1zGrNa68X3iMP42bewce5VFC2feGvQ9RNxbcGo7zre58dzG5kEqBy",
  "key22": "22z2YgAWAusFRDLZaZfcACimzV9ooPhvyixhCWtfHRDrmEPPvVFT7gZioCZAFjKPGtHRmtY6iNyNRrXKG1CQR3Dt",
  "key23": "2rVVL1sepnLfmnpGgoUBm1Y3jvJYjN2b6ZQTpotM7Phjce1KespQvLDfgSd3K2j9UXVbStcqGqaK92BEMPWENBaM",
  "key24": "5Sued75XtbQartiCSVieWuhT2VYwGYSdHG7UVHCbwZ4hqWULY5ByjRYMEGurhRq99Q5qnfwc5pxYF4NCdEDZcXNt",
  "key25": "dhgazE4Q7VjtVGMaKFmDXF1vVm7Ujt9uo1iTB1Lstyvhzjn7zQDYS3JtCLuxHHLE6cPU9CBzxUHNbvtm9nVWA44",
  "key26": "62iT5VLpuu274dD2dvRr5JHJEZ4pb134EL1Qy1KPmxe6uuC6o91ukwEfRzvG2hopNnqYxw1m25QTMgYoHaYjXXGW",
  "key27": "2UaMJHupiL5nU78GeNXA1i2zay1U6tnW6oJFwP48yf5weAbgaCxgkKDZcsfSjGMrpeTx81RCZCxGib8RctMEKm33",
  "key28": "5s8d2HtH8PXg9fjkr4M5ukxLc4GSiNSUqVM9ckB666QRht77wJaQXkFkwFSzTwpm8mBLWB7oYLSyAujBDZyNhiC",
  "key29": "5uurbP7fbngn7PKETZfZS7Kv8RvZCAPH4bwc7gZbxG5psL9C8LWqgmnS7T97f6AXuVGncwQLWLHFFPUbeZMwkcVK",
  "key30": "3d5mW37Cf5VLvGvoxa4jhpMJckrLTpUCR1pqfgprkYzAdTDp2UVyKR42eHu72xKK53wMRLA2E4gubsiKLRkHbgeh",
  "key31": "4kmWUVTzf945GaMMDY2VLN5geMZzd6UG2RdTWys2cwh3oFwAVDaBaVckDmyTtzmwQvCyGVMyXEeu3m2PNwzjq9NP",
  "key32": "5bjWK59TcTdo5VBP3M3ssqoWWCCZDpFVBUwsc7XXkNafQuZY3GYuqznRLg6Q6FJTSK6XccqoQKgCyia4KYYA3Yiv",
  "key33": "3PjnjCkTpJzGsCAY6VaBgGqaNk9PJoVrUBvfH5FWF7X81v6tWQED1ALaLCR2Zx5ZwC3trMrd1XGu35qdpF5KVJn6",
  "key34": "567oh6GhraXZNrU2dDmJ3uedKxAZPceaGsSWeKmT11RNEy9wm964HiW2aorUvxHEjXpdMMBebaouzHGk8tUW2vWM",
  "key35": "54nkyiuPqnniGRebfKcVMKXL9vkF8dBKkXfZBqEQPVFNYFeaR7qqjLRNAnH4y6nLpx95KWvk8E31XvyFeCV4V18W",
  "key36": "4dvJP7Sov93tW8C7XBt9Hz5xLM3ZdKpT5MY3PRCcZ3pqHn6WtbS75NnkMec6NZARAWEX915jq6uPNtZKVUNTLxQQ",
  "key37": "4bkkpVg1vT6nhbsRP9E7Dg28AFPbERTf6bNNPsijzXRiciRESQp9jfuqRdFufdMog7WjR4cU9smQ55pHmKuKQF1B",
  "key38": "5qQLDrxeHPaoQ7cyNg1VCD9oC5hTbnMozgHAXFrmteu1fgdtapULVYbtSJmMjeDrjsnWu4A4grCc3FKurQzwm8LG",
  "key39": "5GbeH2f1aCXqKkJKV6JCTX6JdDfQmdLxujD68jZZ6TBoKw86qMzWP5HezjeRpeejWCNmDiHvWRnWCfWdDFTFtaW2",
  "key40": "5i27teqvTqr26MpmRKSuvTfCcEDw9yvAUduXGi69j8kM16k8LLmM5w9GC6t29Fi5cTdqgZk1r7sAAnDg6UKDeJWJ",
  "key41": "4nU1MKrf6csTtxWMt42vmGbaMn9ZSKL68xgb9JNVC9FbtmSM1khkRxQ14Ek2Y5G1RRqdTnfBZFP9mcrExgLweZZv",
  "key42": "NzMZwPRCYbd11UR8nJtBinxYGjk5sY8uFD9GgFPQby1oknnsb1mRy19dV4KeEwvspBeoYLTSYfdXBUgY415bFKM"
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
