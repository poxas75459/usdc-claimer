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
    "2YCagw2sp6M9FTPSmQJqscSHiHrrFT7Hnqv8cG2EPSvBXqZ4W1d2nmT1rjGHiaQQdFxYvR6cAb2u17RAePbtzM3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u8144HYFX3hc4aziCbxuFk7ZZNQRsNB8xF6EqssGspyQtb9rtnKBnp8arNouerp6R4UDaKU8iRsL8V9iAmFpWkS",
  "key1": "3YkRph97vqpDUrpCtmqLPhNBenC3igKAvNYmUqXpSrNeVcxE3kLYuF46WzkquWwRqMQR755NxyR9a7TMjxJ27FYd",
  "key2": "5MaD7g61Zq3EG2VhvAzaCy5QSRmsoyV9qk6nf5XW3gQCzHjVJraGpCVuf89EyNtxZqJUA3q6deXqCbvVwCSYqVjk",
  "key3": "5umi1EoeE7RWVtr6LQrDcnk2KhS85ZmtSkh8gDdpS7nbPKzQ2V3QAe6t8Uaf7ikQEuEoLQXsSHsr6o8zUYwBfuTf",
  "key4": "3Po4UYn9Doa7f66mKcssipS6J6TTZQzZTBKBpVdYch3RdXhnMP6tTwbfHM4jwFDap2ZnEPtbZmAwt4hgFfLEAkZC",
  "key5": "KYXuo9kPPKxpybHM4sctumnA54B5w37ui8TsCiAzbF5X85MSTNAu11c8nWqcWgk8MexssCdfExDuNzVQsF9XTs4",
  "key6": "yHgdGTmcSRafpBe6hyNyxB9SCuF7At8LZdmKFVJdgYWke8n1UKU5Y9QufArPstfrpdpmFNDvLeGNuiG2b5qB6o2",
  "key7": "5Y4RAmR8iHUnghdHxLFYhCfvRQtSMkPvdFxFGd3RrfBtVWojeMVQHD6gFp8ouqPrgMZDmBQDF3K7PZRKiisAhzKi",
  "key8": "5c29bU62m6UPiit8U3FAe1G1GiubCaXBPqSDc9syNaSPLVWP1EpcPPypE8PU5NdKyrvg1wRS3UtgQVvY1ARZLLSe",
  "key9": "5xH4J8engDUV6VHYu1ns2JZZWxNPeattVEAEhLswinRQDSixqBDYrH4TwuxKHTTRFnroJZYL8CVfmigyDtvWDWgR",
  "key10": "4HbELGLf4hK91bhiRgeAr9NgjkjtUXTpug5xkuRFVCPA3BKa8htgMaVHWJMBrvXQiPjLvHntSqx5Wqgcxrd4f5RV",
  "key11": "4RUyxLFgFoiEqpZVNB9fnk92TBaoxt7nG6sLuAtkougRdPDyKjK6Qfb9dWw21mFxeSEaqXfpvW6kGHNaMD5xKeew",
  "key12": "517foc1YsxXfwWRL7p67KnrSrmbfgGqYKxpHMs3AG9kaL2EGY5k5JaH5cHmQ4VDxP2nMYKQKCog46xB1jSSG2uLN",
  "key13": "4kPigqzvgZgToPcczb4x6dAeGN56PjoeyXFAwW2oo3cQnhKTh8LMh6QjjG8hUMTDWc779xS3BYkeFE6ZvkVHk6iZ",
  "key14": "2WmZbeThCw5L2i71sdzrQTDQxkbe24VbRXmeQaAhm5DRyFMpoCrfTwFEMZ1DcXD6DGhmvuguFif9HCMoyvF1qXCf",
  "key15": "47KavTN8DC2pPSTzkJMTX4MGZeFFvqxtmZkfzDBcgafx7tS28qUscQDX5h285iCWh16TVxDgjEiPLA3BiSCcMmwA",
  "key16": "kgNLNp2Wk9dDEdv6GPLeRWBnsdYTWNYmPeYymK1XTwJUpZ99SvQ2NT8bHE5KmjyP7CXxJQc39SCrZpTpi7n5yfV",
  "key17": "o3efrdxVr5Hj3Mnph3KQbG18zUuzkKwTSpqib2rsBsG8eUe5T4osTqohfQJFUGj1R9nkxvibkjBHFYExpWmkD8L",
  "key18": "5CLuWjAJMwVYReETUYe4hJx5eUKSmKrrsu5Y1ZzbXAZEQtvmadas2H7bgs2748pP2dfz5SyNUUPdvVf7zFJNqE8C",
  "key19": "GyRyoskutpjZbAft1sfjFuKS6t67k8SWyEpVQrXE3v3GsZH5GHUoFu1Q4AzreAyBHVNc6FZoCsXbEhBRvFak7Yz",
  "key20": "KLfHZdWvYvoaKsZyFDw2q9R3hD7yjSBecWc1tNgNE8oiKosaoypXcWcNLQyEiAktbTR33JehPrzMADcrrv76gF2",
  "key21": "3x4ENSym5yzVH9dJiptttihRT7dx5uAE5ZgZXZwL1FHPMDXatLy8AMxF1NnxwQutUpyCPxU2LcvpQrbfejPxTuey",
  "key22": "PLtk4MRFCUXuBu7ps5mQXE2cCVsqFyE874QYUSsas4e2rAQ7DZz7HRraqPHQutCo46tgSUx3qk9VPArbvwwB74e",
  "key23": "2NVbgmTDEDYfBoDwTEJ8Y9mVfwJ9S3bagMzGE5v7UFWve6REZrjrSRsi4pc1aoy4rUrec1d9m7KovdSPCqDVNTbd",
  "key24": "4Psb9inEeXBTdANpQLSy8TVj7WBaxwVmXVHeDUJH1FmgGz76kQgy65kAgwu8o3FCTKGL5oSxc1tx5NmYjHpokke3",
  "key25": "4hEmPPpbXpjgfvSKEyxtqBy71tzjF7NTKWL5TFGAfpVi8GmK3B5kymrQM64ykGTYfJqwv5WPYZLDPvdjGfGP6s7A",
  "key26": "2ZU2N8E2X9h1ABKeiegVr8uShiZupufyXL26hjopeunUQ3Nx9RQFoxy12jfn38dNwwEJ1Eojpsap56GsR9E8xJZr",
  "key27": "5V2eK89KbZWxRbbBYGoRUuvpDVreviYXBB1utD7puaGP2CrVT5LGs1bznVupFKZTWcU7kYK5P64iRpDL683ckJ4t",
  "key28": "XkCoecdLMZX5P5NSZuD4PxZRbCPKusrDSP5oac1W26FgxXXcQG8pGkNVXvLAC6ySzURfi4rgm82jtm4GT4PcP63",
  "key29": "3rdK9gg4aeijtnhS1nAG1XR9PoEcMbms3x1kF2qmdept8ydGJVPgUHnyUd1zyu5jmZ2ya4u89iT1TNtcqFB2XMTz",
  "key30": "3zRpLzVJ37J22djYZgEMQRyCXM2zaH3jhfKeZERR6TmV16XvScajbfAjCQdpb9j3hcMohhDiPfnu4LXSvv4ZnJRR",
  "key31": "LWLmbczDdxGKGb9vssDGdpo5odNbeMgvgTCm74QKLVRmieq3dZzKdToxv7xdMhG9Aq8tccjgr1h6ahwpk5mWdXH",
  "key32": "2YUUixpKSJLWaLkM3SYhG7PSRBcYcQLE1GK5RLTNsBFoJdZVGEzngC4tToAsJ6EpWZDpH2XNQpJRiQJqxkT7RFTE"
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
