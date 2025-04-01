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
    "2u6Dddihn2AztkLSocFhNy73E9aJ72JPikDg8mguq3nLZ3iMBWac94smBvSV2sZAy5s7QLKjgeiP7RoyVVriNzoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zw6oqBusBP6CZzvshh2Epb3BuaWgWtWjVpp4fdAL36jshgwTcJRFNu5wCNYHJQcpeFw7DsiKySf9sW6FgwEMGHD",
  "key1": "4n7oMat2KhWHkWC6TPX1PMhUHmAsH2tfyMUcpf15wnKFPhFn7hEuT1BaZPTBznDy9uvoNd2TLz79vN2AWrBqnPSr",
  "key2": "2nNwMNpAKtS6MjgTHrd1AQsqBm6Mj6yjPj11fWEco7Y9jzEiKH7KDp7NgcKkp1BHcmZKWgL1DPjyDx6YhaRQ3jQY",
  "key3": "2KFR4uwm5JNXxayaAf583ALUnwo8ftfpLVE6T9LeHRWwxqYZxZfFD92fsaTHUnBBfkRthqJ2jZH58pUWpTb76bdQ",
  "key4": "tc8BcSx7Uq1L19hpZYmidAK4Pu1SZ5QJBUyqU1qbxAmDSexBvEHv9RTy7pb4LRQFhQJM5xXSXfteqehW56tHLY6",
  "key5": "2LtHy5AR8x58c1mjyva6szHq8jpmNkuT4eAnFruPeZhCUNnvxc6pPNXdyXgzyrRdzWyYcCNcKwWFtrE9hvq3wVsS",
  "key6": "9GJRBB8jZ2tT71JBUDoiBEdL3jSzGoLEsiVy4hJsz9iZuTSWQJVq3Q9fUsaongdjfbzvBmzWgGgyjavPanDmmNn",
  "key7": "2atraE5eMYjBDnNNX8avZWybCwmEQ98NdvazwZsLxarV7BYjqFmhqxoaJp3ca4Xh9uUpJ5oEFdnDtNYDirxQ9VvF",
  "key8": "4rhfCGDDMTzEPAbLsQmD277Pmf8dVkGbotXZ6nkf6yN8NEocFGzJ6jNb88f8y1MuaRcaxiJefhj38UEdT6ZGvUro",
  "key9": "NwFpiUUdX34YsnFfobdTYyFGAVdWxEQkVjbcfixWiXedjB7B9sT27kdrCFS1FQgYZXavRn2DT1rXyL4m38pvgwW",
  "key10": "54tB9SeYoZ8FcfRCsyLEhXZJnCdAEHQ2v96kV4Xrse6M3RcXtSx7ZVxY4xwbx5PvAEYH39185ySrYP45CtorAjgY",
  "key11": "3EVw2Yc39LdTyJ6Rb1Hj3vhWtiHsvy8xUm3GSBwZxexWMNtGVRZ8ht8NT65ZQLss8R5qRPoXQBobtEPpWxheVatg",
  "key12": "5D3B9DW3MuH5sA8SycZhLnqB2sPGtNPVfA1kPX7THShZT1wRzRWfs9Nedorj3VAE9hcYv7mwR59nyJkfrJUcDA6p",
  "key13": "4Kg7n9ZjTM93Y46K9pQbDwXrUnu6ZweoYR1ZpbWSavh6VPrihXgzFVHR9raq2UdKiuvQdV825XL8jNzXjpagEJVL",
  "key14": "53WyQX6YPDbiF5z6i2rx5BZAfshqyGcqxmgQYc2642WLdgXEcYMbQN1PrRfYbobeUmBJUyVvz5oc9218hfmCTvwJ",
  "key15": "3t8uBepkPPtqAwVcjALyXs8ZyjkQ4iN7EJ4yz1cEpfisa6vdqexaKDoKPF2gQ3djM1zcrQrvndySoy4D4aNWGtAE",
  "key16": "8TAULWEjJewdafHdU6FUFzSgpyoVeuZZZU5buJDh552D4P44n76W8BAJHdWMyCcWwsJ6GPGaf3PTSNZsLpuYVqC",
  "key17": "44Wqz5RUy6GY6MZJDFZmypZnm1XErQbonAyCzC2DhDUaDwTE9b8SUoYyoUZVUGzMU86k7js3MFpdUfHkMVxyw7Da",
  "key18": "L7TPqfUJcBizNpcNT9h1Ns9cW7vtEF1oqm3p56sGwjQp1qLvMJ6jZCchzFCXhcwdnNyBVDsUQA2zWLH8SB9ZY6S",
  "key19": "5ZAhVowPgmWTroFf6Y1KDg1UnfsAsfdn6L9BKjRHPose9ftPLtppfGDQ9GhioQtkHuASYJKabj3YPfqm2fV2Gg95",
  "key20": "2z6FrseqiU6nvFtQL9JzKaMaRHe6gqYPkWXaxPtCtTtcux7i1B7scssZMvhhQrgX63bqayqeAMC4GQDva3izrtLi",
  "key21": "3niMMimd3B8tsN3KNLnxLUVgBfrgV2xC2d9viqHjHnJDWhR3ygzdfZRMjBoNDwWKT1KBnvz4ENpaztNWFbkUnqUC",
  "key22": "5zKhEkzJHR5THjy51AmGJUcX3hnLGSxtyjMasuUcNKLNFBmP1hRrd86oCF4Sq2cbibzadxLCmFpSQM2SMBFTTFQv",
  "key23": "36AYYvHyJRXBXPiUxxXNtNHw2ato4NPk6VtMkttdqgwiG6Fc2eNduKGTXQWwpYsBKhg3HuGB9EcYZ1zRzpPFHZ5V",
  "key24": "3gAa2hFiibvsdENB7bpRq3kkMFisHVP9imkG46a48DbUNFCP5D5wwuSsJFt78Kwnee3zPKa2wWeQVMRje87YSpVT",
  "key25": "2KGGAerxR9EfvRbmjTt4c2dVZ55HtCAEoPHZKaoSyrK8Qx8DKcwE24H9R6sbWzENWXewQfDVhkRcXMCUuDsLzwqs",
  "key26": "2jMp7S2v1cyi7fvXKc79xpycpkPYps1BHdf7JafWxUTFX3cN954XVxLxsqP56qi5a8h1gQESEaKRfNq39x4SgF8P",
  "key27": "887TzHZPCmYoPyzTaDnchsc7PvMHMK7QVwNLqqVHFPV5ToRZ4dGymK9sFdk6PPETYTBEBaKfXf9okNddr5MXYJL",
  "key28": "4DFjFz6JqnyHeHEL5k5xRnpVFZztNHRJEFnJxvPy1jF7CJc3ARUyw5X13X7xUqzuctFRyKB6nS7ep4X54r6CMdEB",
  "key29": "5JHu9iCf4AdDH9FYtMaWVUwQk7fbeqQUbQiqnWosT1Z8m6Lx89k3F43HcZKSGCELsmLNsBxZsKzPUdZ2YE6XBJUo",
  "key30": "3oxQ6v4hFywsL4xtx5yaS7pm2Fy4Q9rXmtxW2kLqFtcXPwWEMzt3HtyyrCiX7HWGomNgraqt6nrJ1WFu95sJwKXz",
  "key31": "NhV29ynuSv7f1ikYwxRYo7bMwFUnrUuR2y769Stts4EK7ZrznyUAnDRaUWSo92aZmpG6Jcwxx6Kep7n4McqhzNf",
  "key32": "2tvugeKA6TNcYUAemKtaVzFGCRfySRLjCVx9jTj5mPbT1bDkgNYKoUvF4ju99eHwBtFAB5eQRJcc2wMjfDXFcC6Y",
  "key33": "5hrDbPm5W7okHLAVGqEoDxr8TDGxhP1aAVqyQqaXtvmfddizD5A7eXA1SXs18mcRZ9uPG1DRsc8CJd843YtsP7Cy"
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
