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
    "4WuD4xXDndjPz5P75cLKYCeumZCW2pgKkuMdiu4PzJiicymaHFBWkATw4wrgzyjuE8Ucv7qiFh4FPDnjTgCWoSGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38pL4j9PTWsum1x2Sdz8W5A2Tgpfy6q5EtmHQjH2f7yweRqpWXJCx2YFhFyTwojHoMzXngW8YhM1h8AP61cfCDmX",
  "key1": "VhTP3bc9HDpHSyYRU5o3QmXQXk583j3gm2xH5My5S9jRv7Pmq4MhJbLFUV8VUN7PgF1CeK4vFTTJzrAo46syV55",
  "key2": "R1UzXHYJ5CT8A2cv4QSuE3hvjwCHigdVxyDQYYj3Vc9ZDXCmCjsjY8cGBwkWXHqru5x71ERNDB19ZqSkyj3NMJn",
  "key3": "4AKfTYcDYVxVcTbVwLnwjWMqoL19ZtZnGDJ5cjncVgPraaaggfjFLJNnit3kHD8QdrP8LivgVp7tKSwxYqUw1X77",
  "key4": "5EDfpsZYTMbJTLnjRVi18dVxojvGS1yzyhMCQNgNoPrtoyg6ML7KRr4Mq1tkGDQRtLmd4VEpw9qNqU3GXtUcz3C6",
  "key5": "24h6c96o6hYVh2fSL9jJqZjSFKY9cVR56ZJp6X3pMQxHanQFyxpZjc39DJFzcMvCGRaJyYbcUqxEMPMB6scwHNcq",
  "key6": "2P1TaiPfUTbLEu6qYA8oS5V4GTE4ec3bdMZ5HhQC3Rn1Vo1GwCKcNuT1tHY6Rr2dUBH7Jp7miSEesmD5QiY4jLPm",
  "key7": "3KHULAt6mFyrhUsrNGBCUTpSixLwUXC7pf6s5vW9vG8iRSRjfspL6n6V558EHw8AS7gGW8qFJRQgggvpz9QApWDr",
  "key8": "3CSHsaqBdgyyXDKJXRSVvMrGf7NBqV2261paZjDT9KaoAjHc3YF1f6CvnbYoKnCeATz3aGZshXDNMxp2BQyZZdkp",
  "key9": "31RQfsP7Vwf5HRLpgMMT2mfjsj3GNnsesNnBd8k9TYEUmtToTHpRFhj84inwPYHZo1F4AB4aPrYcPo29AEqquja6",
  "key10": "VvQuEimpZeEsedWo6DEbmzAi1HUEWDwZd7hnfrFSHahSu8e2q8Dws6VWwJ2dUTBQZJ3gzXQkZoh9FosEtbV8rhF",
  "key11": "xJxZeKAHq7kKbDg1HwEqNUTXTnQcjvgFirmm1278qmS6ogNyxCvNCaDpuDKEGnHdvxY6462pzU4fpteWNeepJkC",
  "key12": "3uQxp4A2RV3sxGeTcv21dYPDWb8WCNH8wEkHuTs2JBrLceGS9fzexPstnJ6UgH6HRr9Z45uhhqxYdCxw65zockZo",
  "key13": "3iXuqjEnVBtcAAcmKbYee8MhxcVtcraJTbdZ7yCsDRjJTYVcSusbHY6WAyUfKM2M1qFcEMhG9AL9dkUuxdVaxvBY",
  "key14": "5cKYRxXGYip9oaQAi81iaXYL8S3REprScdVAJS5Wg4QipptVvxFDdCoKA9Lz9jzJLsZvSjVCGU3PNEyp5cCAK7xy",
  "key15": "zX9ADqtqqG6EmzzPcRLhuE2FEc1D9G4pbYmNRGrwr32PgrDaJrysTnasUNhzAJEzbcjo62ZHm89kzGySC2tBkZS",
  "key16": "2KRnZUW4q7X1rhKaXHUuJuC82csRf1KpuvFDXoxcaqp5v2gWszh26wuCovSh226nKZx1hQUtTwaaLW4eFfAuMN9h",
  "key17": "4MHeAkDpungVGtakKgK4urwR28JPxDzUUfP5UrC7jjfET88maiQsmZwytyX7MZRLi721XaETtASGx7tBgW4fkUY4",
  "key18": "5PcXswxudbDGrdFRUNxdcJKv3AV3k2vNu55Sw5GCUabbfC2tXsvhS6Z1iAHF5SMAmVidU7NyjBrTzeP38nCLa9Y9",
  "key19": "4UsTt4iccQrbEpkEkmULBwsEpht3itq41kgg1LU2BEhBbq43iX5PWyLdrqDwV3WtFBND8N77giJSGBsRLFCZBxAy",
  "key20": "28zgy585pcTetmPoqAMSi23FML9vzRRZrT83otNN3FmrGXF91NB9EZ32LrTkG8r8LTDavCpRhi9fweQWJjsEXpNX",
  "key21": "2kLw3xmKQVQruPb8hJJCMccYnqEH2JhAmCuBsHhzCUzTbsjZSP6NAEncYpLVi7oAnjzGywzGgiD7RvhrHtJz18Bf",
  "key22": "4334epN93sxwX51Etckj5E5GkXTpvNeFr8LCR1ghJFig2Dbg8c6gJJaE8Ms5N1zZTbGtvLZmbz7X86NiwfqFWmnH",
  "key23": "CDpEftH7pyekPDGRaVtphyEUptLvMET4xxPMqHvbZsKzqaZfffqWeDpXUHtb7bPyhcbGKwKCdPYHcMx5FKpPan2",
  "key24": "37c852hGS3CoJYyU4HKz6Zb7BwoSRKZqv6LBojrUF2ujFnayCmMv6SabWrFuc1PgKCVM5a2UDPZmKWYYepU5U85g",
  "key25": "2MMVys3FiT7EbJ2qbN1iXSoApLvGAhfb4pLNaGFVHSQF4eN8sfXBccyczCdy9HZLCJLpDpADn6zS9sKf8c8Pa5kM",
  "key26": "6F8V3SRAybbhg6jQLTeJSJATUoGnKG7SvyToEUpTR9XYa842DPdPVJGr7womqbKEGXMygWdFrbkLhCdX1gqLpNn",
  "key27": "2au5PLHGx5xxqqPgrztpiq3nbima2QJHGizxKfzvyqFv1ejrjjxYkCUTRApzdNcBCXjJX7jD2AkMcP8r8gjgPk4Q",
  "key28": "37VN7cmpjYiwrDW9zdQUv5pYKPmPgf3vfdPo6qgX6gXj4M5W9Jop6NffY6AWmR3K9hDZmno4vwJk3KBLa31LXSTM",
  "key29": "4MjhbydJEtbDyQ79LzHe3hZvPXzBFqbb6j6Vc4Hwb5mVw9CnjTuceJXhd12GNWMCrUv7gdZkGgd1EfnQvhUuFnSv",
  "key30": "5bgNxAgUh2KjsZGEPEqy6seNyjBfrCtQ5xupkhqLP1AwsfkZdSjrMBzgQVXFqeaokcZR3pZgzxrewE3i3RDwSBUV",
  "key31": "CVY3ajK5PZ3ubBEhzdoKyZYopeeNC1HMKH1NiitBtzDzBCpepH91bp7WNk3JHQkZn4W1XFapPmsMQhJ9TufqvbL",
  "key32": "4G1YYkVksENYRL7eq6D98T1TzDWcSUbgLzZujosLNGnpPoukPBHkhARnofZ2hHqKZzFEFWnjuiDjwrGHELfYMbJL",
  "key33": "2GmYZKiunFw7GJnaoVYC9enSSDCCGJBfpQMjnTsqrKvruZSQWgMWSZLEbWDiSRaer9SfQZyawSYBro7YekZEYDv9",
  "key34": "3ER4hS7oVd7JQc5wwxGxKhSKTSUGpudWDztoo1Xkv2PM1YzeUbfWBBFprUu2JXxUarZ3AWhMK75fJPh382XMuwJB",
  "key35": "4AxLPb2uLMZdyPbPSzCfarfJ7HZ5Y9CK7xGHpyzkx2dwGsjRqCYpxPVTJPb9PXQ3Qa6NoTZYUFqQB1Mg1bzxgTWp"
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
