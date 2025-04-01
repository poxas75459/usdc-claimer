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
    "3v834hXyAtLoRnqoqBa9sdB9HY6kTBT1ifdhyFBLK6nNwGNVs8oLfDtkbPNb4q6yytgUichkRx4igjAvqVaJWBZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P5pFoh35SUmGsM984vjP3w5FJEZXi6fgM1ufcnUGJQv3mnhH2nh7WAC6JKepSq3TxAvNfeHTDKzkuEy8D6BjhJf",
  "key1": "ybgmDrshJqBtbHGGFXxVd9qxFwUwk2gWb1UZq1hdhcvRhsHy73E97LChGbtMG7mvasoekg7cL8ygNjX9Hx1Wsfp",
  "key2": "5F4H97sKM1nAG1vgpYwDKMGheiUe8nxJGi2ChC146HHNSXftfVgkdAjWFXJho2Vjw7i4pJKpNqSNPbQNCEyLiX1y",
  "key3": "2F6DGPU5qNsUAAFqhXeuuVrdrjXAQgQkREK6PVBWjTEb1ynu88sstUhdEMRp1j7TAY9V27Xo7Xv2brpbjVjFBTJo",
  "key4": "5m5vdxfyQkpWsovFpvjHBUJuppMkxkupgspgdg4uWeqxk7YV4u2tEdAD3At8wWCv2w49SofzJkgu7LgzxRZdVtsD",
  "key5": "45B8E1Lddw1PoWXi13rGjZ9EciL3vBNfzwrXCVUjWkwTsvFPAp1yZfnaq3xE6jQddks2qGWxMZb3NUT48Px6xK7Y",
  "key6": "4kJqRbM2ut5aNLMt3MPvdqLpojtufQUP88hUeCYFn8pNZkeBH7MGofjz8uG93RjbMsqZzqLJtu7aTb4isELzGMY",
  "key7": "nWNa76uMErhWvN1NATwJxSzUzweLSLryads6PRYu936mXwDA3vh29gxQydVj8kQVxLXXCWk2WtJdcD2eiBuMVmz",
  "key8": "5u9G93h9dvg6TLtyX9V2C4GJ4ceUFhfXgM8KqoYr4bMyVgUmva7H8P1M9ZoQK1GUK3sTwDwXSKLExHjpsQPZn3Xb",
  "key9": "26XsFojdsqGztEsgDy3TztVGa5PwgPaJB2JPLqkHbwbTtyQwBcghWrLhbGd9XnpnkQx84m2zKqyLjKWvDxyJbJxb",
  "key10": "7p3fUXvphiCMjHW2fqUQxbjkuBmBdPuRWXHd3GySU914qbMkDt7Q4kS4ZDzvYtWoA8DYqRXs74ztm2MVzM5ExPT",
  "key11": "otzH8ApGnqQWPz91QFuejzAWSD1nwmFd3KA6hpHL5WepJ34Z6bkBMLiwQet9VD3LrdSqCoDYo5gZ9UYc8eMM3wH",
  "key12": "2mHSJ8P9UGUe2jWXGnR5GH9GRUN47zq6gn1PS434vet93PHptZ53RsrMcY3LuEnNUwDzayFMotrbgtFix28yBSpR",
  "key13": "4BBcgXSgcTHa9zsffFZL1xj1RhAj3k9E3otECCQrErMNXU78Esj6wLxSWtzFUc1gQ3Q9yQm56aZgLQEFkEPwMFFH",
  "key14": "4CaVpybLEsHbKCQg84s3X1oPbFwmnmS4JfRLcYBRj9yfQ4BzxkR6juE51HpsGQFHBVgp4bf2YZss1qK3ZYXWwcaA",
  "key15": "5fXAVC3fcmfEiVyL2t7G2eoR7bz82TLfuTKnBFFR66VxX5tcFv9X5q1vWhYJFBTwWZ5kRjPBkPBDYHifWw4uQD31",
  "key16": "5dxLe6V3riXZYD1UJanQ7eRb1sDwJ75ULkpHeELP7mABmMR3ayUjoMa8FoP3zg4u89dRP44KxXRWx18Bq7EWdzx1",
  "key17": "5L43mkdjZd5NaJvG4vZwwN6QBZag8LNWYt7gkGYbQe36Q6E2XvjB7eiSRrc9yXVM2Ywpsombe7jkVYHf98vynmxB",
  "key18": "2qH5bFHJMLRhZFyGkWn4UZqmktGnjV1V4H6gQjkeBLQqGq4Yv3UgxAKupDDTmyTjmTwy8Sctf6BSyKr5uZ6eKrKn",
  "key19": "3GsEwjai1JJ9aTbruP2xZMcwBnwffS1mZcwQ1iZJBfP6uUu5oQApRVUqGcViHwDJ8QSYvjcvkbdf64RWbZ93tcYN",
  "key20": "3bHV1b8uxXd8SpNpEsbFm2Z2tqAR1aESTvP9jcb6mLeMGbx6QFyP3bkENFyUWsaes5hxL2sonuNz5pDFtTxpv436",
  "key21": "KufYGPCokYsob9WQXZ147JPpKDTb82NSRtReCGsFRDwvYG3jUj39xoxhLzSjA9eVnXCzsiRWPnU8aSUV3eGPbXi",
  "key22": "3im7AFgBt1H9Js3xiHLgY6NdvXwHWra3r8oSNYx6KS56PivcSNiGnh7hrDpsGwpNveqwDG1vkQEnQFxsYzP8dKbo",
  "key23": "4xAqjhDPsR4ZZZzF5xaLuB4kCFvjo4TeZFGSSwwAMXzUQJQKLeVwTJ1XDkMUvbZTmHpXmgzGVrbVPiDDqUXQjBo6",
  "key24": "2pzC9drEqZNDap6BTbnhDSm1YY6GzZ62ci7PTxxUjBGAjkz6uqJ1f6nXwvwkugoVzQSMYRQVxvngDVyq3GjQ8ru3",
  "key25": "5Ym5GormJ5bPQuW4xrbqnTnYnyUZYcBgtrU5ZRGmcsYYCtVAQ8YFKAUHuaRdA2gLHTo1yUjNnhuTY13WWKFZwVaM",
  "key26": "1cqekjT2zMH1nyoN6RTfiqoha5Ln2N98fXrR7d1KdPJKxTxgvmiLP6tLb5kAvGDDBdDakswWehJTFQu4ZnzjzqS",
  "key27": "2F5VGBFiLMYEzNtkWH6MoQcuq2mRt6Z7t3Jf6joVoRMMsANE1D7pNxeThz9NsUcPLKLcYp2HNDmTanHoveDW3YuM",
  "key28": "59ATLtvTehqHhQ1orghg57E1keJyKcDDCMiX9RdEu3oVuurqcr19E93Wn6TFfCp55NbBS46gZHkk4VnsV78oqjmk",
  "key29": "34p8PeHGFnWcDH9bTiTWqkcox9Yi1Yi3jAXo46CyRSknfHDzwXoLyie2JaaoFDnoFrqp4VDnFoBtT6Vyc4wQiELu",
  "key30": "5MARkEsWSM6qhcJj9SwzMsTd2x4Lrso8W7fEpe8H9u4jRUjE21breQHynRpSYW3uNwp1h54VxZztEZukVer2Rz8J",
  "key31": "4axancfmwwmwgLcbH3Q1fB3tKUZtWY2yGBnE6KD7vmq7VTFt8MEnhg7t6XCZShD5bGi5phCZ29fGjy9WPMdv7WHS",
  "key32": "5dnMEoAvsjjq1cnhkQcBj7KAiRh5eZCnYbkGamVi73DDa7RzaJHUYZtFd53JK5ktbqFaFBu4HmWkHmGJnsUHGE5k",
  "key33": "3Aw81GtqkDBsuxBJk8Depza58y3qufZgHwrJyqFhCKVqpunvHB9DwhZ1p5js1WqV82NFTeyTAAxfMfd7xyG2EtYm",
  "key34": "tfCqqpsdmchA24jtTy5YWhXqLG3XzQRfpQAyzNaRG9w9NkWbNtMzd5r8di5SwFVMoYRB9vjtYsAAB3NqoEt3Fvt",
  "key35": "3ZD9JertYeS4PFPGR5kpAYPSxQCxaj3bg6V3Z1ydF9LDHnFo1YjCztgxsKD1aCV1JvCJ2iWjjo31J7TQGwT8Cm4N",
  "key36": "2iumpfbBfMXRwFCZFnsQyLnY4cobKe9bV1RJn8Mutau9hDtgmxx2CybM6nFH8uoYW5vyquNpQHC7ZGS2t2gzVzPA",
  "key37": "3ipNFkiGDFANC7Fx9Pg4gUAgbQUEA7gfWjep4Aex72TG1tKwFBg4YsPbkqZDjFV8CDB5k38KRtycem7oatsxm8L9",
  "key38": "2TGofa5RefGzEkk3cZctxBQeHQCQRhqp6bj1Znmtx3e5TqsF3Q7f7xY2fHgLwDrfdbpiwUN2NXf8cwVXHAzGqF2j",
  "key39": "29KvasHJZwWriXydBUv11fkFwakiPJL6i6L7Fh8CpLUJKCuMT6U9ztUxrZTeEzDpDN4mvMgPaaAwautdzrnzipdb",
  "key40": "3tA6v27N7sjFvLR7sbfrXFiwcrWBMeFGoPT4WaCPMWeP37EvfFUGgQmTUUNehmDj49ikx6JPeKncWu4n5AXG2gKN",
  "key41": "4VeRsRfXBuHTG2MTyPH2wpsrCRgTAkCoQsCeDv47uvRfFWobTWJjkR8T52xeCVacsoUFiAHpwZFE1MWRvav4UMvR",
  "key42": "4PwfhMBPGzXrGFCnv4riUWMGoEyxhZHePt7BHgkrd3itN9HJFNispxH8P1EwRFduraPPRp65XjnunPhxfMXmC2gt"
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
