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
    "27UjCkrCmDPujcZczT28jRnjWGovdCKNbANfdwBpUWY7M66pVxYoFKcfhEHD5K7Fmow3ULHXo8p51C2KeR4NYim6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qikPcb2dCS7NSETLUHDGVSwsk8YVtYC3ih1vj51XPgivXpS5Y3fTWyoQW2BFUoGkFur8gBGeuM8G6bWuiS163wr",
  "key1": "29c9qx3CxQwZ3pYf8SihK9f3JoxG6e2WvjSMdjDpZFjoKGDvq5zouaDfnYfd9rBQVi5ehzvaHw2oB3TKEEECD3s9",
  "key2": "57YvHr5KB3xktJjM17U9JCUUULdJXwv6wRRo5YHw4xHDk9nNT4BVk4hbVG6Y7Jo9v1vYgCEinNdmoigN1rPgmtNA",
  "key3": "5fgXwPpjUMdHHzQBiaHN11L4VsdEENLvyDYeEnUCtu3t5TG6Vg16xhFaJubEFBSjqAnoYLxJfCzw58epJMKMBPC7",
  "key4": "4sb1PS3WKSkcvHPLc6uRXgQbsC3PZs6qD4uELQV2WRWqmTbAne6S5HzDqAwtbY7vntfpP2GvAYNrNgnK7fvf1ofR",
  "key5": "4hB3CEb8c6zrQHMVp3kSDyw62cohcGrNboAjLP5WZQs1zpjNKh7ZeJmKtTNCfNBBQq5gFomx7HchAwF4PJra23Zp",
  "key6": "54CRrgu7rbc6J1RRLWMN8YuumS7tFuCJwcw7RaqHVQH9v2Dhe9zGdP3HzNajyxvNZ4LKPoRsxAXAhZxZFiAhsPry",
  "key7": "4jtrx6viqa6qdxpCnx5ivDnGaAJbyh8y3zhcvVrdqMK7NYGDfGmKSp2BqhJtk4am8xkHfRSTQWMSZ1JSNoqvVfDt",
  "key8": "5r5Mir7JZQK5fdWKTsCuCbdcQXuysEkMayeVeHpetHCNcAh6QhQistLVPKTb7FMNP8K1Yu5k7nVUK4FQJZ43M5TC",
  "key9": "33PnWT8SF6wBnDNKL6X2dbG7BRRAqN9jcBdnGcV7p81jEQEYf2uxRz9GJ9g8KRNthzJYqkk3XAAVVzemBVnzoXY4",
  "key10": "3yris7Nidn5yNi3LJGhFVTmvwbXq5EDqpqhkabN9PZycoKp8BgkdCJxSLtQaWwzYM6Y6m37dxp8vDm72VsjisgGb",
  "key11": "HjZim8yUbLpt2MvjPTiKTj1SLLoJBFCGMuUbjqdUnwPH9MyJNCd1yhVeTsDS2cC4RKrBzVx8RAXLL8Gb4CwjgHZ",
  "key12": "w7AU2X1SG9CFFZtyavCxW6x7khCAxLpyeAgszCA6f2DM3KPBtFmhETHSoAXpcAt2QyVDzYmoHRyZ2rSBvBLYUmH",
  "key13": "3zB5U3DgyLrqazfMfdCMshVbq2S1ymAD4yo8axGU2649qi4zweZ37GS4KcYPr4MiptugUce32taM3a7sksK1EEGr",
  "key14": "2ivKFcM73EUhgmUcQsYNuGypcSnyoBtQXC4MbDr1QtsvgqsCNPfeh7LgdRQkzuT1qjd9uEBQBixfGMdAVn6WpVQM",
  "key15": "5pZKdKuxuVCoXjr7PGAuH8Zjd89k9ypBNRhKDArPTwM7zjkmfvAywr3Kq4AEWxHYcyDmhDNNbFNTav5W5jbBni67",
  "key16": "5Meh7gyLJQxrkmeWFbRCm1KtWvoj2FkCiNY9a3H7BfFNqtbJq1ZdRTL2UdrvkDnsa2C9aCWn9qwq2xRGNsdf7Dcq",
  "key17": "4upfvuyZj3bwLsjeW13K82jk9XLHQLgPxAiniXxJUK2poCgthhKDdTxGePXLkJ6nbu8W6sk1Zjm1kidQRt385BC3",
  "key18": "2ejXYJ4Deb8x71JubhhJ3BVYsCDFkA8wt48rQiqH8eLXVhEdRezb3xTRBw6QF1u2MthfnGFymxCnCDh4aBcpDGok",
  "key19": "21LfgnMjFLSdreRexnVAE3SpaHUpVZ8ZNLTZno5nDfqYbh3RLPTfUpJRR43NypyLb6Wqg3gJfidnSYQXDcgqxVEn",
  "key20": "N5cRAjcTQAiaj5zcb6TtCP8CrpNLxcJfJojpjnpjZTVq1zQKgvP62BemkeNcSH97s249c1GZYKhUEoWHF659RN3",
  "key21": "TbuHcpeCnhRQDnKBr7LPiCMtnEKpxzD4G5uwTzUhsa8xsntSrsCrja9FX2a629kHRPmUZEZxDhc9VyUsRRiTiEq",
  "key22": "3XBqqoY6TZ6SyKNx5tHHzsp4MYzXsMnAjqchyqULmVns2NYJi3ch5iGvGcHFczD9ezHDrBkj2M7SuqfLdFhiHXNT",
  "key23": "2GBo7sxbhA7EUKsUrxT1pmjzD1aDsWtmdQN3xsdCE4r9AZHDvcXxuBfP8ZwLLg7L5HPza3rznSNWeRkkxkY6YQMU",
  "key24": "2qoHcv8hisYKrrGCZozkNLvaKYDsQDTnZNkcP9mdVLqPL8XrPFxVnxjhsNgcve8NeqKBtmMyap37Nm4sxuZViCaz",
  "key25": "oyucvXbSDr2rDcYGFSaGtU2KP4i9KzdTPSBmjM9jh4uj9er17cQ7fLMSkVRF9o2zMSpPyBttuV8NRov7cox7s3x",
  "key26": "4SXSLVoTKJ7ogNY9XZpJGBFdcbsoXATMpYbUqMni4aMdT8JvyFMiHkh5FZmThz6zApenERfGwApQ9WWgLUCsZRHL",
  "key27": "21B8aczCzKD6VdmRT43KFBcxCXAUZehmKBanAToQfahC2oVmuhcncaNWugwuXoqG6czWY5oMm8kpfdEWeUb6DNvk",
  "key28": "3XjFR3WUjEDxe1VhAQbhLYNbTPkFbHRswcCYFgUeecK91seecFnNLN6Zck48vWWPE5q3H13ToDJauXxF8E3TyKtL",
  "key29": "M7xRv2VwNBFiDfuf6aJgHyirbvfmzkqjwMkpP1hpsEBCfFtijoVNC3Ez3XWBwgs1ZktEdfWpz68KYrLe9Js2L9S",
  "key30": "i2ncfi1XR81Jqibw63PN3zhELifzgpPDcRxTPRhLgaek32zZW8bWEgAuCWGXZtJngNJkCU3Aw6PhVWN4A2EPeyT",
  "key31": "WgAWqKRx1mpCMUsvZwumdvS4BWDm2S9DD3QQEzesvhbT2iT8uAvx6ryMcDgqV9B2WLXHfqvELLNHpc4pbtjg645",
  "key32": "2bSqsQ2qyUFPLUk5bcXazEeYvKx132qs4q9qHnuxXXQstCfdKuV5NjmLo5vWuDsYT9LUbrkrQgC4KkKyUiKXEGYc",
  "key33": "4DJMHFrVSjAKZxntigu78p1JKFQ89euRJ6Yu6qriMneLsGpFnHdRvwxSRh4SZYhgrScKtbx9C7xQPjGWPnMt5ee6",
  "key34": "CTQBHmvuifmvDMsNozhtAJptvv8VfsdRANjn1HtNCpszSNZ2npqoMjtg5KCPnTNYGgF1ZchqSmwpwmVSfv1nxoW",
  "key35": "LbuXcds4SB9W9pGeL41dUJRSerU14d4LtSk29UtoyMbDMtFuMLSwVZrzaQuexW59QVabZB9izsjxjqzsLKRS1dd",
  "key36": "64F9Lu7j4o9hWyWS2Z9Uija3QHMNJcHaHnEDxrCgdVUNqYQCLz4T6KDyEN1jNNiEFRoPYukzNr3tfvASCeNo2X8P",
  "key37": "4XMVUEHB8yRbzzwYr9Kan45pEokZeEek7Vpky1wQKT8Q1ftuU5657vjQ3cjr6smRhtvQeftRVJyrVmtTkAxhgZmd",
  "key38": "qzS6UbdFfLyqQEMafLGCqFQAa54k6p7NQ95EXYimDTJtKjY73anMYbMva4pkZ1rMyfCDByvZBtnTqhsBJaCque5",
  "key39": "3GUwss4gSPttvPWG965Qcu7AFnKeNDXWEJddbPfq7GfzL7m4kEbqTPfSzTwhwbP9Ypw5z7Nzy6PNmJGqQwMnB8vP",
  "key40": "bLvy1McpkkQbEcfpHNcZsi62hYg5xrCH2kZw2sWgazoGBQMGsYFo5tey6d2yESsorScjo4PJqwHYuePDWEX65Q3",
  "key41": "3n2mviHPpriek3jxdeWiV3R7oqv4ZqWdPWfscFb9VzK5fkbBm8xdnoL6Mjd8Q86r8EeQXzt2gtxRzKW92gMQuTmd",
  "key42": "2bkfNqKjMwjzDeftnUB3wdE4G1KudN9CpSx35rbaL5vbRTxapuVgryEVGGS64FBN6W3YxJiKzoRkewMF1K7wmqKy",
  "key43": "5XHyVJRUG1mPCphpYR7d4YSEXiTUUM5hL2duu745S7Qoptwzug5iM2PPc7fuDMaikRA12aqvfdyrsqcCh2fxZBmg",
  "key44": "31MDexjvg1E5vKN5f1n75ncWVooRFx21jm6hmadYgetQu4E8xxEc29z7XsTnBjzMfeuusd995fwNv9END6kP7UMR",
  "key45": "2rW8HQgd2YBDYBFbPFgCweuPHpmvPjfZLe8FDwJGgAr4dE623hemTVWfrFY5b6PUK4syBAujmsyB4cx4gsvtCjiR",
  "key46": "43JtSPk4hfpvwWeWW2K9XRQDkVn5qBvK8gNiSDRkUasUJthtxMMt85vXAagoWJNBcxyaa6PfCQT7CJVGy7NdVBdN",
  "key47": "4aeMtbTpPDcrZrtJLcsgGmTzECmkoscLqnFnXCyLMxBSeW2uSLRkNty6j1r68cWBFU7z9GHBzJPYhJMseSgDNwjv",
  "key48": "3FQuSi5SqJLF5MEFJLqKzDpzJd56rDCsY3Yc5wVs413ARoBYULiq7JaKgz65X7dgv7hucGpWbjMWu12DEoFa3LVf"
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
