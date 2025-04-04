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
    "2v9RXMViERX4WLV4x8KHVBQcTYRkj439MiQpfFedb6z7ytXndKHPP2pptXVcVQbNjTkQRMzrGRP3Xwwj8UN79qSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HTYACDY3DqGzpJHscFJz4Ue1PdWfN9oMnbXoZ6zBHUpWTUsjos9RZgDnmKxxc77NamGwhW2pgQCvixYQVuvdjU3",
  "key1": "5Ru3c7LWE8vXA93d18feFVCdAurZAbQJ6jFFpqy1Rweg5dtM1fNy7mvhsaxu9idShebwGhLVPGkUegTbpposFyMU",
  "key2": "5TPR9FpcRyups5VQveBaYYPGDbb4CFPixDS5YYKqdAnGhFr2qNV72tQD9crXkLvbkGZfetTaPfPiRhVmgAqVDbwe",
  "key3": "5gXQkqwxwS3wtYNFp64Mk5Q9Gxw5Rg6sG4DRayNS8WzE5E7sagVwDK5xyFNREDZHh25fHNXg3ca1WSWiqTRhJqyd",
  "key4": "CKC9bdTcMK9RqQ4ucuwXTHQoSw4ruhmM2599zxH7Zf3S5ggRm2373qDCD9PCbJRhYKbNLqnL4v4eXJChpQYZqSV",
  "key5": "3btCy3RfnrR4xaZVfNe9yRvDHZSCPoB9FJuVpsQFBaY48WrjSTZLFuZuK6zejKiqNVe4iideNrYt7VsjiNasv3ub",
  "key6": "EGhZ2eCTCZMTbY95kknN3hycgZ3xKayKJnNywdmwhQfnmDSpWggQnhcNYi2EKEczNgnB7q9b7STJDAD7M6pqpMy",
  "key7": "5DKDebNZwkv4F5F7WJ5mk39jCVXSPFdnZZ7csHqBHDQV96puWRZmPUX54SzMJ76gKAia495sfiZMgVShkgLQmsGa",
  "key8": "5VhUJTh4J6fys7R86xSEuTSzEGnFWjAG8R6YNBgZmTF7CJ1GTwd6CFsZf3MLPpnYiek6y7YJD53b5JzjmRXjL3uE",
  "key9": "2sHx2p76zxpS7HpcNwxiVrqB9Hvw3JP6MeNQN6dZUnLfEsEorsQZUZDjz9Y97ka3qHZhdx3urZW6MQPrUreQvqnC",
  "key10": "m1nq3xF172L1Sv4k5rKw51Do9EU7HoCEG27opBG8VVZHvVUzKo129tjnEAz7d3UKqkPAPcUYqCHwLoEctZL5MCU",
  "key11": "64nSZcv9V7cSfefPSURuwgwfXrwLc91pBqUURx2b6kFXs1xefHLnhwaKMq4XR8iAryoCNSJ6Rp2V1RjE6EJWen6D",
  "key12": "4o7Ej7U9EJHnmNuuZmo78Ct3bz1n462me1kcuKewa624SKFsTPztjbLmSwqd912P5Jpb6ED5A4neWbxW1af9Pcsc",
  "key13": "5f2CoZjonb2wdcZx8vjXUwNSYaajCgKLriTaTHPgKWWX1t3Ez3PPTfCTEJSym6yBGarsiKFSYMujGGD9r1CsQUMW",
  "key14": "3LL1e4FeqBh1TrGWGcSiRsMQXvQnmG1CbdytbzBaqvZ5FHcBhTHuhHp2kJgc3KReTKB525VigvUyehhLe9YrCZb6",
  "key15": "2Gj4ieN2vC3kw36zamDwWuu6fiAEjFEmKtZsxvQNKU1bQa34cvaKGaNmAvhG9fYQL1TxHMb1BijEjhjY7gA5FMwg",
  "key16": "3rit5DPds9vBc2VpzwitSyrb55wf755ox4hUwAH8CvW8e22T2qFiCGgnCG36oFYQXoZAwr5WezmCtj2qRi63Uxwb",
  "key17": "3VTMYdDw9KKc3jGWzZi856YxFWbvdg3ndbJ5frxas1ftcFakhV15hVA3KGWzcZxqjnd5sgdHvae2xKqMFdfyL3Yy",
  "key18": "61uSB7bKN46rshoggtxmkk5iuqeGFkD3DC7n9QChCifkr3uq8ySrEBKCfXS3APzRjE5hiZbupCDVqgujDtFdkSWp",
  "key19": "ZV5MsGdDaansSELRUk7gJXRqNY5GC1K5hcMKRnSjGzCnj6uBqjKHfPcxmwV9ZvErWfgbmg1KAiKNCEAqrrNqdNX",
  "key20": "2jopjP9zHbqLmH5LKi363mUpvfKu8CS3ZC8VrK1KGmsCHQtLXiPLkh41RPUUGzK6fZDcKvY5xd58r3bJMNzehywd",
  "key21": "7Eaj2ecJwk97m122A1agFAoBfkPrKyAbC7XcK4MFGCd4WwtWqq3Eh8bP58jNesfo5oPWcSKMAiB9Jp6tP4ptCw1",
  "key22": "4ChePXJwwU9vRKJJoeZDpQijJHgksyiQXLPH16JMgYUkaUZxxhLTFGgmc3yPTjiGACWA3wNxLnQS56HjqVRDVgCz",
  "key23": "moPFKSgeGNaA8HJW2BBFRpqJjb4DfkTDyQsmwpWfjoABywjvxYXZzvyqtozZR16cQ6NQmXstMGPYzyRd3shkHmv",
  "key24": "4f3nNAWSsvecLr3KT1PiR5PUQy4WYieC7sieCi6giH8bwHruuwCEGWMS95P265nNDC3pameNqXpqWZ6qu4Ka5trp",
  "key25": "57fznyqQfzWszcNyKCVE2curQT9gKMCbh1bRCAavK8M5ECtZGdqw2fFCRm5BFGEHvojbzmCmvPYxzELjUkPruJxW",
  "key26": "3aU2VLKDFMAMUtQ9arJWm4p5Chsb8tgT7BMZiBkd4DykPgEtzjyogWR3uRpVxAe6qpbXDjxDqfNowDVi8ogUYfpf",
  "key27": "2dS1188prkdYmHhK7oF4Chugyb5nGyekLJuU54ffVidnahwpUTpmav1QJb4GZgoQBvYRzE64LD98J4rGAk6FtgWX",
  "key28": "5ECRnJXxRdCCHRHmnSpr9Qm5mBFjUCAYfrPwxfmvs1r8vHkQbRrryuHgyH3TpM8bWPTyNjAaVUkzhwo8c7CAACe1",
  "key29": "63croqntgbTGEJ1NAtyKk3RxBtoj4i9CJTd9tFT7mQEtyPBJi6oJRdP29m4es5v5zqwoQy4a8mE1RJLh1e7Qes7g",
  "key30": "4aZAh6RhZESKNRcxKRk16s3f64Eu7eKAGbmP1LUKfqrAFqsXRHKBFhpb9u42iyrT2zfK5ZECcXJhraNn5S79aAqq",
  "key31": "24HkHyNH5xJN3Br5bwgWL82oMQqKRkUbPyYAJgh1VRZMkAyd1rLNEowLXE7TeVDFzUWsnhENmqxzPTbeRjdG2FwZ",
  "key32": "4measyEYyXWzHNkwRY6tksVkM7h6eeki5DRvdPNcmyid53KwA7G9wmmYFmLnqJSLPWin9UbjR3XJns6zrLWJEeyP",
  "key33": "4wSMcwF4dLaSjvEXFdQ7YL7bNf1TNM2pnWBoJRJfB41sJUBLK1yzTN9Qy8NgezRcWKpLAEhwB3c694njzepea1RK",
  "key34": "29YNrkVgHDrciVgDjErXpGCk2pdfeYpPtYr7R78tQu5V78H6UerzTGGceTp4Mz74Sa5F5zhWaLgCaQrawQjMtDx8",
  "key35": "5ukKowCE2XJdNhx6UNT6zfwFzAffYFdrPZqcQAPoSCZH31PtAMdLXcCvVodi9pwFUrtNxoQ5r3DJ6KqVdxN8j95W",
  "key36": "3hNjwwPFhaDg2LzY1uJso1isprzNbtvG2kZt62QeMViTnukfPtCQh9vAARCbmDNEt6L1SRsvdRN79q39hMJPFYdr",
  "key37": "5nU9Jr1vEiYmmJYi5P4yGEPHLsLQd4sPJnP6kB5cP9DX1hE84PcCbbMze7guTNLbtKiRJHQ25jYcEZt8Moa8tMdD",
  "key38": "4sNrYd3mvrTvMiqzn1X5MgUdDdCed3ZZSKevFddh9esskxCsqp2wDc58RpzEggqcBPdrzGcC6c98VP2u9renAX55",
  "key39": "3sHxvZcULkVNup9DsiePUijtAZ2TxQAYQPLzZTcWQtYAriMRvwCzEXLTRugqgHJ6AGnW9sKc4GjTo5rSkdQ1zUPB",
  "key40": "4hy4QAz3o97ksHKyNwj4LoTmxmkEzMWCpXVPZwubbFXtsw39Lvcbp3tASUQk2s3XL5dsoFVB9fnpgHGKvveEKgw8",
  "key41": "9vq9KnpHLSdMfH4fLwrcU174v9hQ9bgh16hNAg4aesxphgJxxVCdSBpWfvEXSQWMhvdoETVgH2ZrKwcMWRJSzzC",
  "key42": "3oC4gYkSaR2yUoUMUYvb1pxb97rqUgYFBrSHRQY9sjmc5aYHGpxeoqCWcUHvZSo3LuB5pQT1vRXm6CoWiTt3kWcA",
  "key43": "5zssqdGQWvCDpJnKp5QcwJnrU524QTBm1eW3LyPrwM2jHtne4bm4VaMXZa6fBA6m1E4zLDqN94Lhv1igbnz22xWz",
  "key44": "3NNVzmswrEVnKEWU5cbcwV4EJr1bE43J26tQizJTdFkHnRMhyrLzSA3D6DqMw9BLjjw81jaizqHh1y91LxeJ1hNV",
  "key45": "41JeKhEprE74CUXu6rDggvnrnCSxT3oqQXdQHN8tnBD8EizvMC9fvbDkJkodSTQRfEzhy9HoFPnSaE1YmPK7e9Ff"
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
