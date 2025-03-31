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
    "TkEVc3ZHY7x1srak2GC41B1Z3vBBMKcyXBYuyh8aSfz6DiaWCv8UDgaT7HumortGrFEvdkCJ7mfbHvTGjyKnqSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oGwkniwx6X2Z62QrzWqXiWsDFxMHA3CV3mAMKEv8ihN4ktMM1qRmf4NbSNH7A7YvKogBnxbzPaGyoi4EdVizgks",
  "key1": "29mbxkCQGpEqWAehMveuQiUb24WU8Lpoxn5QbScJr3bm11u6VA2BG7Vr3gJ3nRtJi1YSdgrFfAGQ9gSVUEJBbvYN",
  "key2": "5viAhztqycPVZEDc1aoV5CFs5o74VZtK4uCNL7fqHC1DKjMxQMzwM2Bx2QcgwUiuVpWYfkfjujKhixDLK6JzVyTY",
  "key3": "v576W31CZ6TFBFM6oLV8oMbvXeh5CymDajWdbq2ShS3JmYuSBPe238PZykP2x3GLrVeSURQsMg4jTuxEfxtkA3j",
  "key4": "2mUhbfj1m9f7BFudH2avVM4FbZjN5ox1ALRHUdRSHzJmvLpVF9yFkhBbuE1TbYkCtcYBnZDsEA61zbnA1pwCZpQF",
  "key5": "EnqYHruDN3r1GKp3CzpgwtMBGMjxDsCdUXbwTgT4XjcLMe1qkunsweSYDk6fQMND4A6TGqcAFw8SPUzzcvrgpH1",
  "key6": "3BUcUoHoUXAEYgZ7gH7Wxh4Zdz8yFMFn2XSNvcsq2ZkFgxmjm4sMa5758dy9PRHxk9YhskxzQs1t2eS7qCaDhz9X",
  "key7": "42m4CsDLvg5dzZ2CuNEAP9eKVCnEiFWTVtbP1grDnWUv6KbLno6zXvgjKVpAmMiRPMoyEXChMQA48ZmK1uVjTQRD",
  "key8": "2L1WrSm6ak1X6e6Kj7DCxUz7J6bRts5TJwoF61wGvngxGrN1nxMQhuNAcZqmSx8KCpR7Cpw5pxfKr9t16YKQQogn",
  "key9": "iUtpUD6epRBcbWf52xBpoW7Cg2HbWNGJBVxydRMeDCcwsBivxV7R518G233bbJF5HBPQ1Qhpivfz5AhDZP9ktWc",
  "key10": "5EhVihtSjbSvx6xVTyABYyipLAnTBCKt6TcowoFakNzmSYppuagGYESLofdMNfAUKQuLxWGjkiEKAFNHcVwtnhbo",
  "key11": "7p6i7CJh346HN4mHTQBAyFvPtZZdtX8s1yBjpk4WLqqbqDJjKmdg643BDEXtioRkHhxwNxCVSX4BnnLXpvXfc8x",
  "key12": "56KppgdNE6Fyubef7J4utGmrqEhYFoosVhCn1PXMKnMEYEW7ZL6EWh4hSWYjvWNXvhcVT5QY8MHSWKQ2cFsmnFef",
  "key13": "ERZxNGmvWdmErrwdjGSnUBXPoPS9WvmZCtAyvNBXpeL7K715EiAVP49UN4K25iLWcbbZufnjrTA9wTjzRzbZ6nA",
  "key14": "UjYzNehq5t2iPxhxLjP3GMouRFp7RD1hfBd2bd4KtfoDnDtwVeZRMA9PytcoEBMrDqFWAtiAYgRxFwaEv88Dkm8",
  "key15": "3jzQW6eCf43rF8WhQsG5TUECmdvFjnAJ2fyWtgMwhkXJJ5Zg3SBixmFqVbFaFmz4DP5CUhUugTPSRDTvqDsSCVu7",
  "key16": "2B28SkMrwDePuGdneNmM1kCc5Q3stdx8X5X4znmZGhX4Xq8enw1a4qx1JrreHysjWkQyWgAHW54Ec7TmBe1onVak",
  "key17": "4mHeZS6CsisKm8eFANA3NeV7dLcBkoQY845UFH3NG3as3DZcgRm17mrSqWsR5QQTp4VA7ZJ2UPrwA2mqSXeYQhpg",
  "key18": "2YcDMvjv7eKsPygBuq9eqHjAQJTNatNUiFt2azUWNHBcKG6ae38vNrJh5mE1mzYczXanEYBhhrH6vHsxLubo2DGU",
  "key19": "5B6xSQogQj8J1JHLcYL2hwWLvtY4SosKphiVdQaFkY9wb87XgtHxz7V8aW2ccDsiHqqa4UEKtpRvqDkDt2JpCyVN",
  "key20": "5q3cWd8UAqx1V6bGMXi1zxhsAdMZ5iMYWsQUWtAiL1tzAAEjrTTQj2WPdEyncQ8wJciEdmn8yHQJCA6CDm7PkziR",
  "key21": "Z6DndjQ1ewme2Ujdo7Up1XkDz1GJP9w5Zd9NqT6MkYYaZ6WQ91NDuQCFzgvcJSJW3id91Nqi2ekebg7NZysy3JD",
  "key22": "43mPUFmNXLb7PnP2Jnd71NGG1bJ4eAfW38ogLhe62BkLkngUJMrrBUj4kjmWBWn3Ndo3MM9F6d1zNnUrDPhBjvHj",
  "key23": "32eqMSS8ZSf7iMwtPtF8RjmNchZhaeMGjBMMn71rfj2JBqmCDcZki6M32dMm1DfcyjBaGwvNUZQrYkC3mmWVw3dr",
  "key24": "CtY5bEWU889qUxzjjtbyqBKv63ss6H8oEKdWyfftZVxbJ6vRagvYYN3zER5tPrVEnoWLXE3PnwtKvvojP6e8kVL",
  "key25": "3NfvdCQLKJ4QXTDyfzLf5p9XDs5QECX4SSuXy45wqDExip3iscomRymsiMk6JYjoyvRiGMHWYsTTPSgNv1MXHHCt",
  "key26": "4or4AFiVjv3Cmw1PJP2cBjFFrpKuGszUjSYnjxHeeAp4e2GU2RQdor58yMwQbtmFQMXZNNhSssq9a7ywWqsKS43e",
  "key27": "3YXEeW6dT7ySgu66cnauZ47Hp7Z6hCPRErzvV8PHqqJjspfiTBQDTf5KZ3kx9UteYj9xHGeBNzDiKDA9f5tDeLhw",
  "key28": "PaSSh37heUHZ1t3SAhrYgArdito2kZT4XuiLyxuzpUc6J21a6BTLtwtb9y8SJcFXnaHgoGeJfGhvs7AsJZqswLk",
  "key29": "2uhmao3U1fgzJC76W1YyTwrt5yqcfAG3chQfff7fzGfy5Fw5LCgVUwViRZ891dEhsAr1DV7L6r2gsL2mKdyEaMag"
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
