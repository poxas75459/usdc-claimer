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
    "2EUMUUUEQWvgexyeQu3zMFgPfVVv84gDY2uTz9F9pjkummSp7FS8ur3sKKND4LxNgEYoFsfNswXYKjGscLbbeH23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T2C33pW4eMMKchEeB3pGd3tK5VYhHyvf39SZ259VGCHDM1XuyGVrQkNmQVYQShyHWmKF5JJ5GuW8BGuQdG5ij3h",
  "key1": "zMH8HPKiV5Z9jPhx2TyZGsP2CmoJV8LMGpuXefEea5M73VTv6jfVfknsLTZwUZ1vBVUmFwXEkyPynga5StX75X2",
  "key2": "5BZDisZAZq8hfMtwffob8yVvNXGApKkVcbkgwrVBZ72zgmaANZafyG2oehWG9z6L7hbSqvD6wriX94w8RRwxNdmr",
  "key3": "4JTEUkGzkpmsV8rWNkGqFN3v2FsVhMB4ztcFvbZn3D33TJe9zcVJRdYgemCsHDMUaEKvFcoRxNutwiwCLtwx2USy",
  "key4": "22jEoK86e5oVXbYU8c6u2y41j3q1hUN61ksXTDtgWaSDGPVTCJYazsJsmaxejhLdoN5QJuG8Karmg6GbkWTrSKL6",
  "key5": "2EMbxALmMwks454Mg9v8VpipRgED7YLbA1ZpwbHBATr7YXhBsKynFZCD7QvS2yXEneWk2Vfko6nGrhvWCv4xT1kq",
  "key6": "3RhcUVNysvTV6Py7Q7CuTpLzPrX5di83pUx7WY4vQSpM1nhY6uW9BzQBV4C1FG6XQYYGsUMPAPa6EQjfAx8XtWVx",
  "key7": "3ZZUFhWKajhL3inm4vksQPsgRaTbFufseqfmHXY6Gvf8RQddc8WcMAH3omhYhoB4xqPkASTkXn66nC8oAhZRvsn3",
  "key8": "25x7QXiJHvq3VAffDrubewqvJrMVY33YjA5JRbxQEEX9raSXWYdpnXY5Tj7qkWDHa9r1aGTvs3PZsvGUrAkhhavJ",
  "key9": "5XFok9jbR9iFei3Ebpr5UGzR9UKFz61rLvgg9h6Spb9CWZkprtfFkKW7VkVhz5CN4qSfnxf1cMG7MDJmgRsEe3NL",
  "key10": "2ZS8rgH4euqNBFSsXiWxjVt29nvRiwW5uU1kS7XnSK69CXEEsop5cSEaRugvQqrHE7kCGFXDaU4RpRT7LmbjRHc9",
  "key11": "362X4o9YmwZLyNyLBCSgfhEUiJPnnPReGgoLwRpFTgTjdMehhPohzL5PH57sJhUzcKtn6EytMqANnLhZfQPmdGB9",
  "key12": "2Z4ArYPhHSkEXBX6NA88e1QRAJdNZQA9Br8UsQkTyosnKtgQsryZiRwEMaSsd3QpkWMWLH2yNjZszVMYyw9hN5h8",
  "key13": "3n7Fwznh8LzenZJKzApMnzA7oxETei8UJeLpkT1DLCNvMeC34DoWi2N5m66mz4wdh4pifhJ7T7hgfg5QJRrP6Uzz",
  "key14": "4GF8iGCJ4CG6txudWWsjpGdMqo65pVRDeuJAaxRCjRZgswdLnjEXypiMi7EVEiwAcK2y8z8qptCnNw6FjSWZExjm",
  "key15": "oueUtnuQwqhhCnLyDoLRmZY7eFVo8TJPAwwFjL4n4dLFmgH6ihsHZCXx4mHtMeeCmNovj87fE9zH7pG7pt3UkRf",
  "key16": "3j3CzKXJSSUf8TZBjX1thJbUas8bzuNcDV4Ccr6evzdTnKRuNaHMzL2nMmCuHitB8YuxD9xzi5EEb2vwYbzwtQ1q",
  "key17": "3DEgwT8DzYk4PjDc3HByCWtq2xhiPFG54ZowGr4d9L5idzCk9mVSYUXuZKBdsqf287YG7hq85Jx8CqP3XhwW68fE",
  "key18": "65xZtGZ6Mbkgx2Q8MK8j18TgyKCRjZBYeW3M1y7gwUb7cnwuJa7UX5qiCbLKtucQ9MhwYtd73Fn6kpNHAA28ewjG",
  "key19": "2nYzRwx8aU3dMi5nDS8VvLcKpsoamrKNmPGen4cWQZ8QFvBL6CTQqtGVZsNsSWSLjxD3PVgQkvT9yqskSaYtidGY",
  "key20": "4Wn8HWLMxZpstoHKjGjBpEFnoKEKiUsd32t7KsN2ECNfqvFLP7vRxAVVBsKt1kzfueKKkBFBrnQraWdmE2mqC2PA",
  "key21": "52Gg2CgMc9nZtEftPpccBTBNXc1gKhEkZXSSnrsQeRyAxG2Ku8Y9NgEeG8zjeLK7bDoHEwYyy7mQrChWhFjFLA9x",
  "key22": "4rkfeWqa47SqoB11CAoLe9VJiXEHtqKYv8WRUSd2sw8YKxBDpDeGTFdaPJ1N1BuXx7LsjggK9Ak8x7JcxP1s4tz8",
  "key23": "5RpAvisbZ4TXB1RT6mesW6otSUw9TMgx7CmuvxDM6V6JLTSfYbkUFV29mTf1VfyJ29KBBjjp6zRoeq5mbVWdR968",
  "key24": "3pts1WKgWxV3BCZF8gqDjNt7hv6FtuQZevpYeZQHPwe7zkpvhFjjVD5bCryznAHY2ANUzQWusuyLZBeE52AiThZ1",
  "key25": "45iaHthKhziCzd57BcBSue9krwdxoH81GrZL42XpXcSZpLpNhpZqmV1LDtbvU85qLs9PyQWH13jiVQXkkfShEQRf",
  "key26": "4xzgoc3thvTFoD2W4Xs6G12WgMEv7kp54KkTpoGhnB24pTvWB7mVC4xxuyFQuMksbSx6aCSJwwVaEXK8Tu7HZ5DY",
  "key27": "2SB5Pi12ChN1U6LXQvmPWif21fnWZ7JbRzhN7Y3Sqm3g32R59XoSWRuYLMz3STtMfm6qrEk9CbtBvqa7yHoJyDZn",
  "key28": "4kaB9dqqYmbRYv66NVyTZCpzj48DVhebyb92QMUDb9rzh3hn86ikVwrisnX3H2DT4zcATL2D9T9cSD12jPCNWikU",
  "key29": "zra68RspA4XK7Jz8LyepCVtBtsCkD8XpM3dG4j77zBmsKPb8TTBcP9UgxgnyF4fekKYBMxaau987FoLtHtMynPk",
  "key30": "39HGHpqHzZwsutCXQ5vd442Fs4NuMf3HqhwcRk5a8kDtwg5PkeF1MgNg8Tq1QGKm2SxwNjBFD1zappr4yMoAfgWi",
  "key31": "5xXqU3AtvX8LKD1ek27BBaDCT5tTxqkrYJCfmPg35Xkkrq19fbcfjz89dJkq3NpbrTiqEbueWx2KskoE4yRkYSwE",
  "key32": "2HBjvSCiC1yKQW1HhUKkuB5teSY5tE4kT9SVKLHbK5mawSibAG1iY3SBnbCya5m8oJ2KYgKf39UaSExHanRn42S",
  "key33": "629oqL9vnb6TxKSRSPhrrfdGQetTtMfT3atGKmMq3Sn7WgfNmsZubiSEQoJD4PNxfZUh8i2ZiKobnf3r3X5KqpKv",
  "key34": "AJjw3eAaEcvhoWREiZRf6EzD2ypiHqtfNT9o3oZwTWextCBnwbM5temf9sBHX6cWYezsbj2dwmk1CxzRCUpGXZU"
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
