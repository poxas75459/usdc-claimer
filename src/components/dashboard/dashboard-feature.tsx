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
    "3wjK1JrLyzhPjw1eAGxhoJzK72d8PHZ5QbFHGmcn94LRuzfPC7aLZdsxq6EWTJD2dReUrGaQSPKBt9834L1UAHs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ebQr9sLLTvgNCykTphswMQrD3NKZjtq2EFQvzJGYMZRES7iAhRd9BSdbSMfxj7QN6rkq6N6qn4iDW7kNARpGgnp",
  "key1": "4uwWdwJBMQijbS1XLcSMS2CD781Ndy9XcFRodddH2cq69dUW6DRByyWr8rA6dvDZbQ1Hindo1UBNvM6WiPxgv7xe",
  "key2": "5rxpCRQ7YpoKgd9BKRPYnvt3i5fXkEUiDnUG4n52ma88EhsqgtFuqdMBdM7ovoQQGuKgbeHiwjBvPEvfD7ykGvPH",
  "key3": "5L7cqMC2VbfySnwCnkfgwzwXNnbDP61NsFvHyK61zYTvGs3SYWPUDSggcdn9Fx3ufYJEnM6YAveiNTkdNbu7sgVM",
  "key4": "5udWRyLfdWz6YhdztgfCi4C2ywSRLLo2JKgqLR4maq6Eq95z6yQViZjWxGp43S4gbMEQb7boPdtJqY3wtsaHsj5t",
  "key5": "NQLdSZns2xR1PSC5qHPhNRNYveaex3CbQyBECQHV7UBPZ9sPVE1mHvrwXUgG1nuKRes8WuhfJeYoRmMJPt3T2cj",
  "key6": "jjnVtCb9ohqTtY1VjHCzEq18QK1MBgm9XAsjseivxy1LdCK1yCZdMNWcha1gvg5FHGjwE3r2ucEoxukPqFWFowm",
  "key7": "28VBuvdHW1sJ9dkbUGRvQqdQuqmXYkdiiKXRnjAkJ97vteqBM4EAdMCczR9aD4yGyKV9PrQZ7cBreFQ1VFS3Aq2p",
  "key8": "2qqGVTdFhXUU9TvayUBUJDxhcTWQeJpQBNgdR5ymDZ88azcYoYyC2X9VpZKsmCNSgPHe3sXdvAryiGjwn1UXUpaB",
  "key9": "278WA8292WRcvWfJadjHUyS9CcCvmMdFuJXdmFdeFndniBWsTDHFtKewFHm71nSnPzsYVBKGusXjvQ9AzZAFAHKJ",
  "key10": "4MPBqiMrH2PsvhtjN1uGQKT6zCsxPwAAPhc2qGEGbJn31yy2obUHKL9QC5jDT3kH2fWdQtZrnEyxLq83UitjNZDM",
  "key11": "2F9aAC4W4rfGyJhhngfJKL4A8X5mvGee8pNRYF8zThzDHaa6s1JWHFtAjkGW7yVdSRkjxH2Ga8ZkoUptFMP4wD32",
  "key12": "3bSghCFkAdqwULzWQZtEXFVH3pveJgnZGPgSE5coHpD7tm4mn6QMtbqqfcDnsrdh4y7heDYDUcV5pn37qvg1eWHQ",
  "key13": "V6d8a9qP8v5bcLNhKHrhvrXoARkSvGJAFfS1r9zh2jTu9aNL6CDgbnaCc4AmJL4sBauTyb9xrxpxqjQqEPfXRWR",
  "key14": "49zikcsHfnNnMBERQ4hn6mvpJbW3vxS3qE4eQfJdSqDNeeutLTnLx1Zy9U6kZKzG9PYwQDAiwYGYKGZhbDeVidcR",
  "key15": "3XU158TqktobMXH3467xc6VoLTGRLWr9uaCq1HWW2355sBkCTNn9oakWmPzvnWBv3e2LWXB5y4C8UfZmLeq594SZ",
  "key16": "2F3ihjbX6KtHxJR7gzRbQw34ucWU3TfDPLrHKLhuJkjP4q35gpwdr6FFynyantNB7gyRWCXhiSs7bzysxA2Y1FEA",
  "key17": "129FDMcefJcsFc4cerW5NZxE4PAZYrqCVHD5t7hRztRjVUTVJHpDvdtUpAzZRCEYJ1AYYV8kydqFN5Vs6aEM315h",
  "key18": "4yNiCor11B7bQKy1MmkuxKbhasqBtq9TesJcEZPhsc7sgRxLcY4S1FgfybUx6NLh14ZKYbrErHx6zzSKprovDDoo",
  "key19": "2FiZ2dqLSGJ9etUtE3277X2dVfGx4YvVankuyU1hgwhJzyzyYRbgoSia9313qvz7Q41o71LWiX6YhWsdFrCXpLz9",
  "key20": "45WUCq4tiJguPKX1Tq229NTqcUQemjrkLu9NfZmsntNu5uBuv47XW1WYTKXqnDAzZGGEyAc1LQbRw7wSdTgbZRcR",
  "key21": "5hJ97iS9witWFBH15BQ9Z1qh1FoU5ANwukqzBHSfM9wsS3gF4ukxT8155hPnNPAQGNkaJVnNmaARuVDrP4cqB3X9",
  "key22": "B5cdUUGi3rkjJNxLXspzxW6yHZwVdKKwSux4x6Uq8DwAmks1p6KJCKfjhFMSUfKHtnUsqM6RUTxysmyAdzyVb8L",
  "key23": "5W8Cyqnhdkv4ZzAZAkgns4SBEQifgnugMSXunDpEmsuzA52r6xDCmzqELMUCrqfsrC5vMw87SZkauY3uJs78dR4A",
  "key24": "2ABFrqd9atF5hsH1jhKZ16H9swQj2D6eCNFen2h68EYw6mGJzn48Nt6gbQHRFVbCBiwogHXjW8fC9y2y1rSnWqHm",
  "key25": "27Vuau4HtczgFH73opbzUF7uapxfzNA1Chxs7ZX4tEWBepqMdqtWNmUYmCF7fgUUZtfv4uRBaZKU3khL99CK1wVP",
  "key26": "PnbeauANtfosGxgJq34YakUmXHkfq3NhJSGjdeDnRSiXGbJbrrt9jNMnSBhrYTX28K5EMLYg3fnCin5zy1FzdaE",
  "key27": "ycyDHfpvUY2uYTBbcd53YdNYtV8XXiGum87YCX7Ewh6heTVXbag1VEQkNACVseSJLcypUsMARi4HgBwUBy8bJJH",
  "key28": "4eaWamJNAMCgHyHgKvBfaETyP4KTecBcpPDEG7oqBAd7S63bNtMSTF9oFnAC4VpeBAurr7UxkT1xJMaEmcT9SHYe",
  "key29": "4aEt61622ggNhxJuBeUvvs7pcWEt9unqDpb1eSCQJxdZnuognUYyg7YtuxSmCq2wJrPqvwHS8TnHDAkd5uKuJJSw",
  "key30": "jT7MoPFGpZZYphiKF22joVuLQUFEq2NwsLUxFKNCu61gefxkmdQweaRGY2UUCBSupsMhLpQ1YVBa6bqD9DSH428",
  "key31": "3wGwPLc8ihLsKq8Laiu567XSzqHPLRXS2Q7kR2n1Y7ve51MMwhSti5cu2THziwuY8he4bVmHGjKKqfjHpbAKbTBf",
  "key32": "4yFiSp3jQC9HYZhgcWTCMTZRt95vg8uew1L4DXMWe9v2tpasekCiuR73qpmUUD4Z3PFFVECkoM1f3GPFssVpHJDf",
  "key33": "4Xq8RBWJMnyse9qztoEwBmMExwe1kwnLfQ495shUQ4dYfqkdS84WWkV5877HrjkvzoS7f9Fdv1Xw4Snp874ia4eT"
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
