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
    "4sokA6jkFsZhuMYy2Edpoikg4cwaLTDrd6uaVGjndNn6bp7vkUnaFrPp5fosQx17XBbjqGak3JCdc2fDLA3wUcbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29G55FP7dh9Pokc3qjAr2dUeTmV9NeY8tZfPYP2jzns6bzwFKqkBTz6ZKc4jT8xa5dxtqo2N7V4rYqwjinZMn8N6",
  "key1": "5x4CsRdjLpnF3TyPjdhUXqyrYwfBnqWJ1Laf3yvtGt2jhuFeJpruiEK7tK1Vt7FyRWcR7NEhVbtZVa8ud6vyqtsB",
  "key2": "2PGxQZfEFSYEHqoFWmFxJjjaNXYV2A2QEvh15mtWoEd1zeDXSbkfvfyqx3gCmPn1R6osLAMtnoCVrNmd2EY6VZnc",
  "key3": "4NbFAoMPrLbX8NgwvpB6pVSLZ7sQi828UEV1s7S9iPPrdAjrwz67jKXLzJ6CoKKuoGNTmGBnpeFGvDhU9c9RWFaw",
  "key4": "5RdefmYpLtGcVMgQN23f5exAt8shA7Eds4f1hkCk73gHXLfnwER1hhdPkmDNqxXrPdipthXtDGdgnnvuHKbQPG8Y",
  "key5": "coHao7e31zUwFibFqgQoTEs9kXGghej1Zby6jfktGS9uv7MALaSU5WjmKpyicibYSMj8VjDaEDQrDScg26bujUz",
  "key6": "3ds36Z5yz7vELAogvs8PcUdhokj4CZtNHdDta5SK68DDd8joCpJ47GHmNYoTD4ZcmYUUURqQsjdXN46h7LojLao5",
  "key7": "wiBjEsxJ7CnJ7AQLunCtua7wD8nQjFCsCe1JAJXt2tuBH5bdKnH2ct8kDNGu23LBCkb5vyqTqvGGipKPDhrnHtE",
  "key8": "3FX1FYVQdWpngWEz3qwc3Lkv4FR9YgQKuHqqHQHiVqVSZtUdErLD6y8m23DDSxCC7Kf1u6URUrvY3sUzhgRiKquT",
  "key9": "5srxk2gwwSmCqTnjbo1oouA29c6PqQgAjLtupFjpcm5x7TMAa3ow6bYCDFLtsE5cdvPnZWjLW1D44i1PfUDbSuer",
  "key10": "AEi6V5cA6mF8quwRu7hFm5reLNXZVVPurwDPLbAu732koa76CJHq4hDutnVSZSipeVAyasb4hHsiwPqHwt9cDHG",
  "key11": "4dxxihgzT34Tz7aWUFsKHBQJXMNeRFyX8Fkuz8Zv8um3kHk4FEHWr9nEeoGHTtak27TJ73ZN9CgKNLK7bv9hEt2N",
  "key12": "wLvnq5dT1mDjEmi2KmcT8X3fttnoGG6NsMeFz46HTmAjXkUGCWx4i3LtMGdNEe5Vpr9PR7GpS6ChL7GyVhiuTBR",
  "key13": "4nKcRjedvRzf6dCnEJFdM8gMY8oNMBBbLHefJKNPzVquyGnkYTPHL1V4861vfw8pEGupw99e9ddVtQmM2n5aGpYg",
  "key14": "4dHrZ6vC7mHudyAPUJMz8kqX5PkAhGSD7V3QoH3JyozHewHxXF9VYMcV4fNSBkXKm1PufowX8sbvk4P7scNDP8M9",
  "key15": "5GVXsnRZCfXAZ7vKxY8fgsuY3bPdmymU6hAfvyEAJjPS9pHBDy6RruokFj9jk516rHaNbxZp9eSsu3nqRLbKEX53",
  "key16": "2sTtcz89MVGEMnVqWa3eFBVoJQDvg8MLLGRYKr8AKVNZoSu2WxX2PatS6Qw4HM6U13Ds6eNhNmiTDcnoLYNDqKp3",
  "key17": "4YJWEQXbdePEq8dsTf9ckhj7BUwj78PN2uKurFSPDq25DQDUQ2Wr8U5Xa64jWQXq3o9qiv5cxKkrqR3RvAPkBff8",
  "key18": "QFaEiJde1Yr4nb9rDKyUvx62PA6din4VJf5izezvtetK9HJL9vvB9hKDV6E8qJL7bLRfbhbfHEaevqaXRSXrFrf",
  "key19": "2ecBH4x23taFX2u8mh1Vo6kdydTeEf78CpcoZ29De4RUzxeu5juf9YzNDpA4PWU7nhkuivaT1weiqRkPfMiufWXx",
  "key20": "3nMPKtWjNLtw3EmAJ7hTxAsiWxtjMqMbMbZn5zZyrXxNfTEfHe8dhqL6gTAZG3Dn3reXFh7Vyjvx6mh1y5m5t6vZ",
  "key21": "2jPHMncGtbkSgYUhCFZMi933mzVUYZcPdYNEaPRBeawNmUSo9eTPNP2JhriWybD8kjgh4epkXQVMLAoZk8eU57JT",
  "key22": "5A1JTNpyidRawoQATY7Q24w7gW7PVg6QJNUFTZTtX1aTXPHkmorEvAt4EraQoB4gfcBH55BDUU7ZSwFyZxBBZCyT",
  "key23": "3zmX43SJuLUn3EA5PKyaUajhkZVu31d3fV4xjMbkxfdgVKxtbrghywF32UfkKS1VhTuzv89c4FuiDBRTWpbJBNHi",
  "key24": "dPMBgDXKuhhaA1ci8SeJjBp49i5s2LYzDyZKMe8sgsaaRdZULn49r2mpXVDSordKGwiyCLoYy58QccK4QTv1DE9",
  "key25": "3uy7BXVkzpvwVQPJnKNHCsmFV5a5NHhjxt5SVQuojgSaYPMFuteFwP4bwRMzj8eVUwERGHPVLCx3gVaFjGwepdQd",
  "key26": "2gbDqhmPPJnNJD2A4ieG4nYQdrpqrHwpzJdUkJVHgdwoneesQDGVKKZow4CPyP9tm3BttSBRGvpcEJm2c7JGDutm",
  "key27": "5ZSNhM3QmqZETfxrw7QJYqogBH9CTC8CzAokRSRgHQHG2jGMzzCBzs3Mvw9yUR1doQpLSUuL2QwjExjXweCndKN2",
  "key28": "2vozzc9zuRBKuH4LES6WMhRQRVxTF7LbBsZwn9pkvJ5SjDjhb4ZLw8Scj5H9a3yr5FQzKAHaYf1BmWoWa7nqnHZ1",
  "key29": "46XLHmMBG74hHe6CtjNnjchoB4WwTrdJfqaekKv3t7L9kDsH1XSXjcevBq8aNRSawgY1SDTeXZkTFVTB4mq5FUse",
  "key30": "43BvnVZdSJ7gvss9rrCt7jC8MNq5HVfcvQZXVc8a8X3fo4Uz4g7Sv8zcx57YGAX4eh8CgMVPUDqtgmUQXSVVSSHo",
  "key31": "5hVGLYvjqCHKHwXJ4ymDQXLLTRst8P5GK6k5UiHmBbtwYXFvGdnKfQiaxuX1JrXfWNnhe6wc1Hf6mBrYXbYEmU1z",
  "key32": "2rvE5nfsfZd855V2Bho5GA9wkn2gPpAvksC18jVMeqpMw8kcsX7nbKjWHzjqzx7xNhxwSg2sfg7kQQ5tjm955dnA",
  "key33": "FDzonXzLtn4f55sYWvgvzHTozP3NZdSFo2go8Ac7r1v8aJKdQ5s1UCCVduueKeyPDYXUrqmTjoHWfmkvKN3sNHS",
  "key34": "2U3Jx8d39V2n8KGTqYC8oJ7A7MwHX6rxkdb1M5pZZpYSdRvJZw6LnZtbvWLmKJQinVtqrWarqXXhijfqjbsb35jN",
  "key35": "5554UCETx5ebLbZfFHSAdAL1hGnE44y7DvBxGajpybSY2hSWzYrHtTfak7teYKzKvwaZGicVMW8BBn8mLw984Yj5",
  "key36": "5ypc3vzCCjbgYEPyWMkJ9tPi28kR7ukxSUnTj36w33voWHA6u4aDLpXgys9Xx2tKijfsW3yScb8maVjETj2Me5xc",
  "key37": "JHiNCGBWpkECQQPW7DijNGhLWE4YhZdxCHwgRJwF5NKWYfZau68jAcTULUK7NYPo61rfEi39xEN9gThJ9TyhBgM",
  "key38": "63kMBFYQQMjJYTf5GZRujTs7EqU6sAkpJBctGDiMb6Z4xFrfFcaxbxxETWjZUEBRLs3CUmk93HPiUPd7cjERAJ99",
  "key39": "54jcQUC1BGVgMVQDg1pQKMarFuJPPSTybsYUJamPAJVXrYGqavg9kGc2eHHpxzM3YhduTvKE7FmCUqzyxFdonbTV",
  "key40": "2yZvXxnJSvLtiJCBqGNXfrnTkeDMZTZ6RE3vZJVvtZ8HCcRBRPpJReKXhmQV2hdkvmCXZGp5s6c8NoLZwn7Xi6Ky",
  "key41": "4aawQHidkPynMD3ia5CQJqMrCT7wijm64DL2c6gVBF2RsHXWyXKxrhJ72nfjWyt1cHxLbpadFSRDBjQSoDW1j8o",
  "key42": "5rK7NwDMqdsx5StYtUYibd1rS1rRgKbbdxTkBnLsj29SZ7pzJkoHNEgudhD89EfadKxG8Y5JH2u3got3zdJFq2hD",
  "key43": "4QQGD66zMa9zA1kVuj7gaTUh4fFynRzdVoZusfAMAnJtTt2c6UCStEGZLQxGNi7N7L4Lz2PYgSAKYQBrDPbKWNgr",
  "key44": "bEoBxUK9uH7B7VUfV4htX2UNJQqhrxvMERwfTzVLqaseDkNh4Zg6nv9aq9rqnLBChmEi5YrDZg42gSZg1SRG3cW",
  "key45": "4rKRpz2bjt3oecq7pjffbdMupfH7ivxAYVbLHjsf8NaPWi23Tg4BuVmo4DUPVV2BdELePUpfpmpzNFWkJ8Xfxbrx",
  "key46": "sPD8zNYFnwBRZ5MBn7ChTS1PJWN8kkLbBt6zxqjB9RrAqWPzAckd4oPj55eNS9876kmiE4J44xNEM93pDkNzyZY"
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
