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
    "2b43dy9dqT7hEFPwh1LoELJGQNiVtHnUq8xwd3rNmAhSjfF15FiLqEGH3vSPvXpJMx6DctJpjnfFso4zzHZtQG9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b46Qza87cNgQqP7SBCdRVJ7tLgeJcExa2bpot7quLCYRqmRZpr6yRzdkE83ADZTNt17vvaPk5fZzRbxniMxaruP",
  "key1": "2meS9cqimijEN71ygv3GcQQAztgeDRhUgwkxfqVp1eeczXJRR2Kgv94tGaEZpcvEfZjCPD4fgPF8tVwLvQJbLaVQ",
  "key2": "1rngXrzkXESG9gH7NrQLxE4XXjxRxHD36WcTGbpDM9B3TxiNbWeeWuq3epjbnmKmk57XC5ZEUcquc1CHQnQj38f",
  "key3": "2nDgvcvTNeaXME9JxdqwsaLpKDc8PggHUDdvehSAaoRtntcDnfKTuZg3Ehj7AdfyVkk3jWd9CnRWNRF5Hc2qXoBV",
  "key4": "342T726XaF1gxNwQXzTwjgYewVawksGJLreyA3SLQpiSZx2tu3EtVeBvp3nUKBzyPWZSWkYRVmwY3ac3cPUzvNWp",
  "key5": "3PuRhgjspoes9317d6iYbMDzJ3ByZ78CSPsNqhuEoB2MWaXXH9PjtyawCKDBAVkk83sPqkVgdYs9mpmLp9ZPZjqT",
  "key6": "2iBNmPBsWMWovqwe9rEoeUiDxm9cuZvSk3G2FgjG7mhFotRHMZzsuLNSmadneNLAwD8YyLyFieJQVMpbP3NG2qvR",
  "key7": "dEik4JQvr9iwxZcvPCuEDRTM2yeh7iDXwisuL8h42RrwvF3NwjzRq4RHAqy7hwRQKwbs1QHt6iiWso4DbrQ9PZf",
  "key8": "26bicjT9spyL8d3eXZo1a6ow7Shyxa99JsX9Zs45k7CDURctDQvoFRAH2eMQmk1S7afqrnHkSUztbK8PPTpD96qq",
  "key9": "4gJhxGnCp5hLTY18XrUcWE3ccH8T5JUUZX1mHWvxZypRN2TFgjyUg1sb6eEeJGGdUyFFoWQXsp2fDT47SUyN48Yf",
  "key10": "2NGSf1ypvwdx6nzyZbcX8R11bTjWWQ766K4zwxcLktY41UUkcQJPFL7d7hp8qEpbPHfPCPKko8XSCE1APnq9dm39",
  "key11": "u3d2F14PkCZ5mz5559uU3A1BWAdfthuLSuN1b9SiPtH7A2ct5fVzjVjL5jKQQB4TZ72JgysqihNoZBiPG4aje7U",
  "key12": "2u6drJL2niEa3faoceVqZbKjTvgRAu6xcpu6v8iUUEPLYeG9wBdmnJXQf5WD8oUgiZjh9MUPK81jRDM1ua1vSNYa",
  "key13": "4XXAnMJreepDy4ww6DV6TsGx3DE7PP1GwdvLQLsnw4sMhVycXmQmXWMbpQy1aa32dtEcJ2jtJ2rRNWqSbp8MyNfB",
  "key14": "5z1uKnTEt2tkuv9wGzhdVXFJRBhAeoUYc5jofXP9y5bsoeHQrw6R8s2j7ErGpDMYZWbnnjs3qWUWLkRZJKujV4FD",
  "key15": "4Lw8zKdakkxHm55XFsjjfAFCmLbsGTEgBadha27NvDX8TeUojwj7gbofnpbMkbLSjJYDHKQ8NpGyS8DRczKVP5k",
  "key16": "5YjGn9smJEyVbCGB5f5ZshNhPNuNmzctCnSjZ34TEbPNHLqJMDFNZtLzCCDRUgLZmGT9M9dg23KvYoF2LPcAgKmK",
  "key17": "dLinafU11bof1ZosrfEocVjmwKtGzb9oZL1LfC3p4WANqg4r1y1wHuB5FSJSwz7HhqJanw1Q7NVa6xSfDcBKCW9",
  "key18": "4UkAk5wkCFDXZhQbvMmVKCAv4TLunuKY2B9rmkgHYC1Rm3cJX8bYGGwGZNF6nLsYXbLzii25wZArnWqtx54XiMy5",
  "key19": "7uuKyFEKFHNqncAzmQXL7W9NB8tjsxufEEthrMqf7KdyCGqr73watr8FTcEtgBC5v1sFfJU2wNZqossGpJ9RFX5",
  "key20": "pMWvD75RFpXy73t7oTDaqo4EwjHuKperHn7oqcqm2k5bcnA7VjN78mBNrrQsN5aUmpJxy7CuBorG4hxQyhB8oHh",
  "key21": "2M2HmVQkd7VEAuzdSdsZ1qghvAeHdX79Q2wLwcRyNB1J7DRrFWmukW5QTQzXHVLhsNezvnsoxrD6omLg3SmgiqW5",
  "key22": "4iMEy1tEkArLDuMYowZdCz9biqtanYknxEUiJRVHcog3jVS7UyaJhDAz6enGwzHZ6HL9hb3wRBo1Gi1d3SfeCi4V",
  "key23": "4fmpYXjKRuTT8VSVjtCthxxmLCZA8U1GUhzG3YF3tF1mqmFzdwtZ4HsgCEoA8bVX6x7J5s7BpaGpGNFZsgW7VkwC",
  "key24": "56NxV5CsGjd7a8g8oQkLe19tPom2pJVkRGUvD8hgGiGCtFb39JT3VLGs9oLiYKXz5PpJqLkTJN1xfojY6Ggrb3YA",
  "key25": "pNquu21JsCPSJjZ2JYvd2fo7QZNKbstR5Fbm1c7Xu1BTvAU6RKFntvtTMagNpJfA2A3UC7qvCt7mR5S7HFLSpeC",
  "key26": "5AfyNXcyUVGcsv98o7ktCm3nseCRMpzvbENLkkFFB2qrULi8YF6CvyymC4Mv4EsUeHgry4XrkGqSMt7R4YbyUAV2",
  "key27": "54LPuYvHDnYcuEUkwhFwyPUXXLbqezZcFUgj3jPybTFaBTX5DzASixpEVCvP7R6W8sNtSMuivGuqJ7MNJWdguwEk",
  "key28": "5pHDXvvXv8thGbstE73bNtzmR2xiY4PBQcdyMf4LfLCitYJLy4GBhaSEsjM3etTasxH73iwKnSQHVwrmAFhWoe9s",
  "key29": "5aoeJQruwuTzq8MkJDkHyiVeZ3xAh9k5kwFow3GynQsX3UEPXZMh2sbVcpRLVfGLzwJbRPaYp7uXstSRYCEDrgbv",
  "key30": "2FUnpc6oyGGvGUnbW2C3xftFioWaYqyFfcLRgx9ZhExj9R9bq9R6CtzFBLZ6qJCgVsQd8i77yPx1i2qSMrXfjb69",
  "key31": "5nm2Pt165p1fLpwz8VWq1H2dRg29tBpQww5mwfEvXC4oYskoj8LQXhwgTB4RPqvcXUKCq2xsMaBb1T56CSCKkUPv",
  "key32": "3Y2xfEHMD3tUs6ixCQqK1UHwYBcQq4JkqJWfSeV1UFQgKHcCXTfkChm5VWZVyUhE9c3hWW4uPUwBv6azMXtr2UF3",
  "key33": "3XbmG7aSnoNotVhJ1r4eWtHuH3AhioLHuCp1sDUdai9KGgxedBTyP94BgnSXQLbMgUhirJwFQaE9kKHkdcWcjjAj",
  "key34": "4sgs2wXPZ1rj3um2vuHCw8Yyn4VcXUtMfN58bJUgf41fSqf7tfroC9mA8Md789TyiTjvDMhmLp6CpGkxPJzuteyH",
  "key35": "4WBLc7VqrM253A7cbnhxKjVAB4V3ndfs69gEV1UaLgHRw6tiEsd9pMPeTXKiB6AD4xUSTicHtSu52cHNViYTtDBi",
  "key36": "4TPBRqJtWfhERWishAc868FByCD9F7xWB6rP1Zi8xcUWmZSheAxJRLWqdK1A13Y2GLTwvsVNr33MZQk2cnkueLJn",
  "key37": "2aoY76TdoKa9qb8f6q2W5mmXxs76guERM1DxjjJfXbvFYuMpUhrMEYocppcL8PRUynsKSpEnBHyNj68gxiqurwJF",
  "key38": "5tHFxSSYtqBYQ93fYhBcw2N8svV5TzswVhhBv1rnKPib8ukZWD41tsZ4mQuFeqCDo4RpNBoNYA82nGoLcHpLBuU2",
  "key39": "33WXwFfY9WNhxLPQtqjiBaFQMfZ6Xn2P337S98iXitLDbf72P6hxnWCBY6Ak6eoXDXL5AVgjZojGk2snWoJ6uJgn",
  "key40": "4okuJT3xQYhYgiP9dafFoNzHdToZ8RZxVc1UoozptUFCuvLBCsojcSZsmJ2FxZafaYRsMY5vpUVJ2FtUArscuKVh",
  "key41": "4QzXMKez6APiMNFYpKpxJgiCyLu7JH57knV6gjXtUctyCtza2HnTtVUCAhmnAEzBJkay7Sg1rqCGXZYzpP5qG3jb"
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
