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
    "3LFVvJAgppwzysz2vNAsMNZR2iwa2BiN4p7zXkF5dcPamHeEzZJB7NkZaFTRRvodztdDtVc1VfowzWdjV5irZAqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JAu2EVfm9kk62Pp7jDax8pRb3VDpQCkwcAKLXuTaPYaTH1iHgUsoRxXcVZuzYKxkJVpdw9yYv7tSw4WzrSYxEbU",
  "key1": "5LDVnKSx9WH9HbBZGqPEwvFHGrken3eX1RTF5MMAC15XpdZNX5stAHnJ8pJhGF2NpEk84szmA6FaLaPFqA864rRa",
  "key2": "5kB6cuwouvwLTSPMRLZKuuW2pEXngd7YPAaEXRx79Un3pCrzVvdooWdRAW7wUNZLRJto6xtrjxKrH2Vb3XjBeJEQ",
  "key3": "61njhY8QDheckDLiBSpncWhm6CaMg8bHm3y8VSnNUaGyXoPuMZwDbA7ZwRmYSAyDJobc8QGTZvdEj2a8GK9uJqEm",
  "key4": "49ierFiJpPYwb8Ku4jDwJDKYhMdGzJvp21prPegr34MJqJnYs4hSb2QmTE5edGUdGn5ZM3WeagsmnAKjbnhuAduz",
  "key5": "hBsdNmjCaLMRh5ZtBms2ei9ksFveGDzSVjefH2F2szomCjARpdqEVtYVs9Cp4FjAj7qj2gepzombRh1KbpV2Bag",
  "key6": "5Swdy4sZpu94fBq3tJxs2xw99VSE5e1xRVNsmowbqYQPGL8pMWjTm7vCmKPbnQhwn4qXUKUb6GmDPB72fK1rJH4L",
  "key7": "DhB4ihyJ9hEKMXCNEpMybYq6HVLP2hxJiHYmFhhPYcgur7xa7LXCRifVBYZxb9sStbPxrE4bP1v5KUTwtVHqiKc",
  "key8": "hpxRqeW5MSZzq2TCNkdrEmXysCYSqbqWwxdBgrrn5KBjfSSpJUesCn1gHnevQo96b91Nn9VB7hVwzUy34gzoJEj",
  "key9": "3RYKk7f5P3i4rUfRJzNgPxuWVqUFZtMM5dTYK5r4hsA9mbUybv6tEAbmdwXHafXZjdhgnpcCdaUpPBqqVPRABUff",
  "key10": "32pfHwLRtQpQ1cuCBrz9QbXNghAgaYcPWRYLNZ8BSENYmR133HekXhheK31GD5ATiD1rRd666voKDdoWGEPifHkz",
  "key11": "4tg35WhY9K2ADt9eui7w7V8qq83APnNyAER5GdxPmZ2eoy6AbKZYERdKt1HVirHWc7MBPsF4wV6mGvxfCdfVqzgj",
  "key12": "YTpFaoUePJQHC5xAgXc9t3YjAxq95KiEVtxajS9qBYdWK6aQi5FBW3o4GVu4pgacML9HZ7DRd1nJJ3EmF9rove3",
  "key13": "244GWJbHs1k18XtERMZqbRgxtMa847H1phAiPDSwpi86tNRw6BTXhA8pBzuNcBEB5fcyMGRVpSzZ7HWPKFirEvvZ",
  "key14": "5tLLLpezhEsvNoDHX4LrLab9VrbK1x8eZrM16SVkSPVzJZ4RL9GKAhjBjv6oijKVwPnNM9jQiudvXBYVZHLDjUt4",
  "key15": "5ZMxCzsAjspkmq5RdbwHLv2VscNfRGSzDLKqwvpoGdbQPwAn9iHepG7kf1BGZXX17E2AfPK9kGG3WLVSeMaZCAvV",
  "key16": "5REiQXjC7x1GvWCCNogta73bhKjDtZXeaEoMBwNVygoiv3iSWxypKgsA99ov3qEUxBBxCEqNM6ZLnKFEFpToSCYK",
  "key17": "64GEHBYNWcNZQA9si7aXTwMPVTP1taACzaRomXCBsacqzhka7723A1GtkU488Qanco8zxq4aQAbBBKg17ePQPHUK",
  "key18": "4qcqdmeBUj3uDWvkhwQvVyLRFNgiUJJHMPjQV9PEjdgirb6UfrmeKX4VzjcguVF9UABCeHBcwbhd8zzs2vHVFbcq",
  "key19": "5NxCvubxvzsryd4YrmZtq5fV8hLswhdMQShnVsFRMX3ukDYsWYUDRdFHSZ1sKuC7RuFR19AEVidqdAGgZbbFBe8G",
  "key20": "49p7hgjAhkwUvMeBXVUbpB412uXosxYbSJ5CKcUuUDdNJudR6bRMFLQrbZJtE5Hc68vbt2doVPtRq2urRYnbY4pa",
  "key21": "vUG3UkgqkgFt4M95wovDAVsxgL16avkCwqymBMTWNVJaYwkZsKXz6UmAvGkyjh6mWeEXfYng1fNpG5Mt2cNq3rJ",
  "key22": "vetfpSLrgf6SRVgNFG41c85PA7Y7Qno34r31fkRbV2XBNJ1fhpHM6Yvc9zaTmaPvR9XmVcVfkUxuw7EfsTVMPqS",
  "key23": "5YyUh3tZUvWGakwVjXSgzezDryC9LjUdGaA4nMDNwHgSrnVPpoGn8Vmda548h42AcSBZnDyX8bA5P6YjA1Um65jC",
  "key24": "ieamFp51BniKHdUG62TAi38LKpWMAJ9sT8fYz1APTXTyVFiLrx64N9o9nuM88C6YWeKCYA45yLL78VAKCYVjka2",
  "key25": "NqRtWxTXpMUiDbcsQKRUmHZPVfrqqa271yaHGuUGVKsro8iARoeSER7S4CrJCvs74VgFH5HenJbugVuoCf33ib6",
  "key26": "529Cy1WsWim88Be6AiPnPWHbzaWDvuZ2CEV5MibcwKtDu6MUoaq9LDpfZjRCS42Qx6AWZp9p7kzqTxSQLnKduFeu",
  "key27": "2JHoxh86yWnJm6nLUGRpE6gSjeSQ35aXTNYdRLGLvjYkHBd1usTGvAfnrMSoB82wE76C6esS712xo9yj8eL3j3Fi",
  "key28": "2TL5TpSr2K6gi6zzKqixZQgvVntmb5fwKYC5TCEDsHDgdwgF1Pzs7pj4kchDpwCMBdLUPuyrzWgtjE2mx2a9UZbv",
  "key29": "4rcEzW23wokz3zSz7Ca87hmLw1zDqGpvssDGntPvLso5qzbv1UK7NXpyP3A5Pjw13k8NAXXYeNmutnVnhpZErAzP",
  "key30": "3bnGNUkmHMsYDKAtc39Cwz93uxxt7itU9Ggo6fJGiPazJSVq3EM1cRf48eL3DN2YK8g2gHW2kE26GakP31EyhH1q",
  "key31": "5rs1NHbewHPNqk4pZsiw9JAwwR4KTNASAQyC7oquqVi1dQvqQ1DMi6Qizx2yLFpCRofzWGXzBcDTGUYDoQYskyYu",
  "key32": "5pRJkc3EenyhTJQrhbtjsphSy912KJKYcGrvVdbMMPsvMhojeJvVrPZcc73pPffd89DbxGRUPJ3DWZjEmqpBNat3",
  "key33": "3bcj1WVJXo5exC5R3Q9K2AeUZoRKvbJ77THZY51AUt8RfdMAp3EjV8dxNPxUK1qM9wxsy83uBPQWan7xXqCJJDKF",
  "key34": "5sGZa3FPQdMfkg4gDXiBDEYi47WJJ779bPMag1k4BTNCYfFk5PpmpabGfUr1ddJ9coZb8Ut5hkPgFuHSxcjbtS4x",
  "key35": "NsghRg8KJD1rahaMHCjLPS44bkyEpc9St9eT44crkDYX73K6fLu6pidBNxPyGBQQ12kjQp1RgicUxHZ9DwQRaYM",
  "key36": "3mPTt2F2TWhfHLy7HZEeJ9Vu4r4dUVL35FsShLfp7Ujzkr3jt4UNTGoUtuV7tpZ2qGRoVa7Rb1zdnmsHUa1xM8rj",
  "key37": "615Ddt8r7GotpLMsugUkYkXMUGZhoVLQ6S44vsbgkoGryxJRJrFKnw5DqTGzynU8h9KeXTExAa2FHZ7rmYuWq2o7"
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
