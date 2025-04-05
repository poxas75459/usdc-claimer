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
    "3qb4peRqoDkppVJMjWTdgGn7j9z33ajDsbi6Har7k9o1iKG9Xw8jGENKim4CrFPjh9T4MUgmNQvSfE438VYRomUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AYuc9c51hkiAUDZP6kUxkHnCZFiREeF8YHsjfGbsreYrkSBwDPvPdj6SnaZmCtDHjG6a9nNAFHg9VF4P83qp3KW",
  "key1": "nH6vvTBuYXM8sLuqSCRGKHwjmrTwKnLn6mduqg8SoBcMH3ZmAztnVgtpf3qC3jsMpUsQd5jWU2Kttu2EU67UNie",
  "key2": "5i9yRLnoPkHZZmxtWWKEJuhEGWGfx2MSWzHvuzkJEYoL9FK6PsoTjNgNSqRMrAWKhhEEqhzyYKybc8kaCXLW8v8h",
  "key3": "4aPscR5jVTVwtUqpAPCQ8a7Rqh2oJXYHnw5frDvNtbrWdktv9d8bJA6AcvUJQnGmhmedJRLxBsGXAqu2oofYwcee",
  "key4": "3vc7qNoVL95CdzSFeUVvsV43LtHikUJ6UrB4YAffErFDPfrmdKa5NK3nF3mez4J9nENHdoYfm7XGPyx49hibBPRa",
  "key5": "NZtAxDoxbteChEBjpsh2ahrHBpdmPSjJAwDkvimhGaGqPNrau1D2pqA6qecRLgpPa4k7WG5aqikrdAPcMxvkMcx",
  "key6": "2CEWshgBTzY2NegueDR3f4YWD3xSm8bzGMrCQpHCJEbLPb1wF65WQhHhgbExNwgMs5G8D1RmhjNJWesMN4MS8Brv",
  "key7": "3pS2nhRjX3gn6LaANAbw1bheJhi6XqwWmzTxZ7DqbzDSz7DrtKgHrEzUtRUo8vg7Pt6QjXkrHvrocFZkB9Tit8DA",
  "key8": "67fz3GyoZ9G5xmorrJX1QzjuG1xbA4Xqwp4cFpBzjviFmPj9RczKFBccW2oy6LMYGGtMc1iXwpEoQQWwmtCW1qcV",
  "key9": "2cZMDDLJkDYy1LVWdwpHJ4V53vU5VoZMVsorq4q6JHnzdJU6EwbpyY61St2NtR3nB7m3xYtKzaCWjFDL964LjgGu",
  "key10": "3D4s6mJDujgqwjQpivkrrxsjNJGovKkLvth12D7X7Yu2gUvKXSH68pX2hZYq1d8urWGu9cAfWgEPYuUVJFcGvWZf",
  "key11": "D5acMmyLbT8pt7cES6mbWVDTJKUdt5NTvD5MNWdGePbcTMoksopkuv1ixU6hFHrBeAcAAbFsB8jRdcDSq7eKem2",
  "key12": "2s2Pn3VXMTNaKfS2zJ5MVcPUNEcEEQTJh222WLFVK7rvCr2Wpk5pvrFk6XNzMB5SXSaDsYqbBumek1oNxPaVXVxF",
  "key13": "5b9n2DBnV1KcfhzKowu2Po2DBgjzj61opPdTTiuJyCQjkKZjMFqA1P1Kg4Drst1SsBdrLHg4ALxzUFgwZs2W3nxP",
  "key14": "2JD5MxZuBbn566wqzirWtzYL6oozYFcmYmKbKQQFfY9CyWzPwwgMCyCxsjRJyuujyWCHapaQG3BfUpgcL3a52cDz",
  "key15": "auMtesgkuV4SKs7ZqMzTxABq5Vf2xbdGVQpCesy5UgbYyZNrpThk1T4Dps7GXgADMvwpjCmPZNBQV2fJTem9qqs",
  "key16": "4XtDsMz3uNqPrLEKbsCvEFTgGHxa5kTfiVMUmQobSc7d8yHvEE7KqXRB5pV7uu2o1KsoA7WeHBsaJsPQDw3HBe7G",
  "key17": "45bh27kkowpSoHJ1psjTevvCjdzosetPcqbWrfeeGJ1kVq5xKUjdSJLgNYbR5uUqJ5JJRR8PV1nHxxWNHrLjHXVA",
  "key18": "2XUYMuFEZ2g74EENVWQqcHVGQbTBmTFMVU5DXKdzAFt4XUB3be5GHftJGxR74eujyPZokLdk1BCxBy11nwurnUiZ",
  "key19": "2RkGnjtcdpxpp5fXwqA4kmt1wC4YAiEXvZKMsY4L2DnGqAE33Zo52kq4aibHeMCiyqPFHEwkhQ5bGHbVae1ormT5",
  "key20": "4sxvb2xky32KYWadeUpMXksfcatyam5Tj5vdCxBCLyqsL1b8tp3svjFvuLHi8NLVyjKRVhF7GXUv2RW1gb8Zh4FA",
  "key21": "2p9PKgpoLsZqtWij4LMGMz73bfGNHk6ZvV19edsQXbLerUr7CM2ev8isXuSWBXXsXrTkNUUuUwkZwdY2YdHXCzZD",
  "key22": "3ANSx5H2KDrSfVk46Enau4snWtHifxTR5tVa9S3VfiRe6hmXpVws4XgHQ2feu6LU9SSejr2Ksh5Uuu1YEgEf9NdF",
  "key23": "2CXWD8whF6Dhbmy1wBqchSEsm7ozEvFD4mBZiq3zJ3WWMBVHBb9r9gTJsrY5VFU9nXegyZK68o1pxBHdvzeB6XRr",
  "key24": "4fTFX8LEL4CFaXrr8yR6qF3fzkygT62JLz4E7WBVcnKjpdqci546zHYpWvyf9nAevYBAxUdCJ47QUPMjjbzVDQ5X",
  "key25": "53gL2mMpPqfKQACjyNMjf28muxqJwsSLihC9s1SdNs2EtDyCzsGwSYwbUPYpzJAgk2r9XYQwSfcc61GzNq6Aow9T",
  "key26": "58ic91s3MiPLcTRPXWgYASAmX1tD69ud1RELEAVwN2HHcyQq6Uos7toxfQDDbhX5ho9nbJENjUR9t6ZC2ZLhKqVJ",
  "key27": "5pSd3PxHcS9Dos3PMg4GtxcqyMr3o8hYXoYfq58e8ekuvY9KUQRXvKkeSYrXMJgnFAjDgFMWJRf1hECefZ9rd12Y",
  "key28": "3jaDHKt2WQDsLD9LHAoPKGDH7qnEGMkRB7MHXg2t2RRFHhsy8d6fxzxKXZPPP9x7ga2nBVNfUSdcWCWXuTSg8kMB",
  "key29": "2S9LsZpPtUNdZx7o2vWrkRQnvvtVQzvWNmut4w53agi9syzKimcMacRzsKgXUtPa2LA3yDnFf3gpBe8eBZXxAGMz",
  "key30": "4msX6DcBwfQADo3tTdu6pm4rNpZfDiA88RsoemfeZUreWFS6VPrGLqgPQUuq5v48yhCKQKJ4A6ihQZNsUWq6DX82",
  "key31": "3m5mw6qXYnSsGmnmgD56iXn7i6Y1Q3sdNU9kHJMXZ3X1VfXkXFVLMargFDSER7ME8nvtVheK6G4FfAGsGK9hvyxY"
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
