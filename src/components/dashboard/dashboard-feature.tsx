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
    "3GiePV8QTMC1VkbPK7edbJjnjjCBB1m95i1HbeT4LfjdDPoK6PTva32jWBnovcJWpELWVDxjcRmEK1EzV6EJf2a6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HapwoBrgvFTbkMfwzUYTyDK3Bc7ZYRLjLhN7Us6NCsSXH2cF4PD29hXsMUCTh9UHh2JrJyFhdE6e3g4E6wT4cST",
  "key1": "3mnKJkCNE4t2CsKeFxgFp93uJBm3t7zAukmth57zXGNgfJMJkcMQESmUCKx2DxXQDWugUzxsAgoxHNByHidZrXLZ",
  "key2": "45DtqmyTmdkB8BJL69UbUJUDP3juFayivsmctMbCdZbCCGauFUmQYcFqDxEpKdVB5pYAwi5xdBVZJU3aWAUjwjgN",
  "key3": "QCZY3Tj4ozZXzqHHfixf1XBWi5jRFkXcFNiw9uLhzJzvQo5b6e2kn2r6UyE1nTo68Q2a61KeeKns61UqstX17to",
  "key4": "5LtAZtH6W6myYisHK16ahkZvBC6SkBsdf7yQPUQALjQUR4XSVWJ1siJd9gFQeoDHhUDCxHvJRuE9NNFz7vh7xr2u",
  "key5": "32Ubm3ZEfLkbMDtTMs3tZjLMwoNtyYHnwSTwjACoAemeRdR2Br3SLaX9y21gXgHkFM8zDDS9bXjHvnX4R4kQ9oJu",
  "key6": "28ATqyi69wiorfDhM5FDdVerGbj9y7qQTow4pnHWi7MWbjqMDdZvKe3Rh7XtsrVrjGnUKjmmzSVfKS72r3YsZSNy",
  "key7": "MhE7ipwwKv8hBXkrfySZVvzxBuMq5qKxqDfTfm3zoPM4teJ34aWmT3KBXSkf1QwHgscT4He3TT48WPQvDq3hqn6",
  "key8": "4Lws2KxUNVD8t4LXNpvWdHg5K5nVmTCzZ7Zd8YPMDMm6HPYL1aPNeK1Bmn9TgdEwZzsec5tyP9VgMyc9KykCXvPt",
  "key9": "5WTZfE9Ebs8HJYKXme5fqs5znebJtmBQvicjWhic8QTykmCAgqDvc5eM41D1N15vHsCjRZJgQGkCPz5o3xiugLPx",
  "key10": "4kLuD6akVoFXfKonAQu7m6AkB4u8bmTPFWQdDBecspWhnr9gk6xATREAabVQLJjoJahJKuTRQSNXsNdvg6DwGBNZ",
  "key11": "56pT6fbyW9o2BtptHhQapNvDmnGjdy5x7KviDWERJS9EVmaQx1AHa8ECQ15mBskpXhHfe9FZLDsGzWy4ASm1tgLg",
  "key12": "25tY12kgHwGxtRKg7LXkgoC1zGEtBKgW9474WZYa6wh2tVvBd9oh1pGorsC8D7bMCHwrEvokmgJF4pmZKx6QePiP",
  "key13": "XS8gQuqm355jGq1dGr8qwKy1wHHcgypxGGs8WHLo9KyDJvfbFLahM3baLH1coLcTVzjurjfZDW4R9taMUnUcBGT",
  "key14": "3rCzJoLVvtxdiJD1WJqNofcHMinJn5ws6nXQRqV7ZHx3EtCJohVmS4gbGxSV3EPus3kLF8yPFL3Q7rtqRiCBUimM",
  "key15": "4R72xEpyK3mGhKkBjm9Lw46StiFD6xs6cGrSBgqQvspkuFrSN7ZmZDRTgpJK1E9BS1SceeGYWvZwu9NaMvroVomX",
  "key16": "3VDCU9BXaP2U5oBmusjGTVe1dmVQmSndFfnBB1VwH4ch5BSAUsCqeQxoELC6QyXMP3TQh3Pokr25amjwyTbnQod8",
  "key17": "qTXdo99Vbdd1gbMFPKy2XYqTHgDj8WioFDsVvaKmaPmquuecGz9NgvNdFNWguetmUhZYAcRKiALS17MoWn4TnPo",
  "key18": "3PhW34ULdQqwGXYrFa5ftHZ5KFmxRP4yGsSUoCy8XHAC6pMZUCb3vew4azxAv1j5XpTo9wCSWcK9aQdMQnTnZmeq",
  "key19": "5XEbTm55yUhzrTQUrSmWYjYbxzoiR4uJGzHk3jucpbokhVYqbYD25HZXnJza1RXtmKYeGH6yjdCnk3pmHMY8G46Z",
  "key20": "33CMDqJyVW9eGLJYePEf7N3424n1E9fFVNHw4hTP51EYefb3UGyR3UqBR9CtuyKVPPDMzpnUF86W1EGpWmcyebqf",
  "key21": "4dpaZcdeieZxTDUwToA4aZNgBMv6hnnmcQz9kwgWrMWs4qgZtX4i5tqFT6M7XUcinMVh8JCKpPRmmKKzAMgfySup",
  "key22": "5KjGJTSYyka3qfUtMHk1EbtrJ84uNwnH4d6GcokC2MFegfLxuQJkwVeDmTadbraF8sTNTn2KqnAw4R3yagJ49N3L",
  "key23": "5inRLFXRbT3Sx8AqLU9CJ61kwRY12ANKLnCWfbeFYAY5otczMmN3X4xNTrW5SCXoQk1HXJ2sUQb4PEiQrvTe155V",
  "key24": "qJccTRPTHr1hk7EyE7koscoF6BBiXUqmcHMe3YC12dTM3RnHdNcwPK6cpCxDiznEsJMkmbHRjug9goMdRr5yk7j",
  "key25": "5eCwtCDrMYcDpYRs84gqG3ZmQeTZvPHpGKyjRzL6SYSJbviQcSHSUzDobHmKiDXsyu8bBNvLSMU31FPm1YLjQzny",
  "key26": "5bpYMLuuYyrXAedvtEcG39cZDhfKbVuVuKSydFGf1GY1xULa8ttNyfSusyG4ghozHswDnh5N2oAnoXd2611njeyH",
  "key27": "2NJhaKiqyPWnymssh6LiPr6BzZ9drxQ1wsvvafaD52dgiELkHreeiuYhYqKhozFVwb63YiohFTKzkUL1FNQ4MHCb",
  "key28": "2bsDDN8ghgPbKyubMmnLewd1R7mLM1PuQ8K3GJA98pwSCjvDG3bo6S2xq8E1HSuoRgKgauke1ZkzuDfWD9fzvgk8",
  "key29": "3t6aAx5QeHj1ncU9fzcag3MMeVDWFtnPFRLSewUUwm1ypFgSHAct99eNsJsjtvQqVoTNKUU442y7aFDhtdD3eJLR",
  "key30": "3UWxTLswcEVj1DrM8URkyhuhRziB3cq7URbm3o2P5nv2cp1TUDzHUT2fkhk6BVhce7BmXjHp33ZHtc2iBzEZ1kih",
  "key31": "NUqfcjPx72Lawq3MDuWapKrqpt4Y5uYdFPfU6wM8WwFJeVdJFzvkgTbqqUdDUjorp8xwZsehwN5j1gASB7vM9Mz",
  "key32": "657DThoQ8NtXLt3smZdMjguExtpZkKx7s1nmG459Yiv2nqoj4Du2x9LMzwTyyv3SLf4khaU9D5cGkb6hjr8WzvQ4",
  "key33": "3MNC3ZTR8vb7w4mNpv32Nwtbtz2TjpJekgNkJEU4KxjoBwrc4TXgxb1kPB2VMRCngyUhBq4QvuMti55teuG2xXBR",
  "key34": "4VnJgS9FAGYQbAdGDVnuD6FvwemENFjHCuFgidW9xUrFdeMNyc36eKHZFoZm9dVMRw79SpdncD81EVmNhKEgw8p2",
  "key35": "2SGaggpFNTAmURZBfWwnBLTF1dKn3rU6WSA3MeQWurcq1yNFG6eR2yBRLbMDUboYunFZjb5ZQzJWw5YVN1sJGfXN",
  "key36": "62EYurwjsAHywn8hWp83QoK55QTUXnFNoiD9QCw7D2Ewqho25YyDfqd5miigDRaPE6Bq7ba3xUL6C3z3eXb6HvtN",
  "key37": "9jKSdLnWsFaqJsbAFfeqc3aw8XFGGn3J5Nfo2mNMfHypBK6LN511VYoy4uUr5tziVUmqbWG61HNnQFgJNyrq43L",
  "key38": "4oSFKYC5hcSuSvSWoN19jpzucbGwM4avLqoKjmvwQNmMyxkCogEsF83ESPYzs8mTutAoaFmPFvtyB3Qq14xrqTnC",
  "key39": "pnKY6XQsFTJLmPKuTYk6DrZTRGeAimzE1aEjsufNgFjkEYHwDKeb5iXyxCdp3tUgSX17XmWZmQGDNhyaappBT4H",
  "key40": "3sKuyJDZtgBwPuFdocegEENjTaN1HojN9chCgLjepTdfTvcDimQPgegXGfruKfv4ArANAcXjXkb5QzF4NEJsxV4",
  "key41": "2SZADj67NFKWqNKF9yNCD4XtLBbWC5qjzYD4SJfKMF1RJsKjbCERZcDLDvVGA1Jyau4WDebhU5FX4YRA22SftTrt",
  "key42": "2rdnZjFHrqHRLuHeeLNMzVoKFSS9xrjHL2Q4L6YP4TuBDM93ncCXVRzaEL5wvYtJM77yoXkoSn64tp5jupaBAkfj",
  "key43": "5ksw7qNMFRmBBvRLUcu3h4SrXdKGmHgbLKRi4h72RaLRJR6MWSWAMKNrRUZFCQzpJvoFyeSUoyqrj58at5sJXodp",
  "key44": "4tZpPzAitMhuX2QuddPYrP184qyBDcqUAHBgcMsKP1hyVZjdzp1iHenJGRxvdo5vn2DuHk413gQUrkfv9XH8NdL",
  "key45": "4v8xgPv7wTKYLFUvymUhTQhfg5cfr5D81QuESwe175yD6ngMLAH6iDEct59y2MPWojrHauRRtV5xJDwNJc7PGdXk",
  "key46": "5C6j9izzxyQANmGW4vDLFsVmqSTHwwASgPaFaM7Qrbr3FJQwkj78XCf9hKELSYYb6i986aRZZefX5qdNZJTr4ET5",
  "key47": "5xAU3jXEkm5mBuCv29yi7C3zFn1fHhAR8YsyJQSWCFpxCaFbNztjQsjstr4gA1NyMxPoHCSuGbi6LQ3A1WEzcFUC",
  "key48": "58QUrXZ6XJtNhxs2WpgaY6CyqjKayanWKgCskbhvnGnKQAqxvY1gVn4vtUnqahPAZmL93DYvqkfQL33bq7g8JBxk"
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
