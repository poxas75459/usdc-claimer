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
    "4KtdzAgwxYTGdamd8M8nRFU16Ykhkj7GScSiMtsGPqM5JxWBVFJP8c7BKWUyimQXKSCtM4CDj6S8BMuWdKMJk1BJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DqfrR3KHaiNDFP7AcN6zXbEYNgv4xyk8zMrZzUxaxEY9vUo8GTRqBRcpJXNE3fYrbLKWU2pgBHMVzXK6pfWVxwG",
  "key1": "297xXZz1iAYHXoBcrRkew3ukeTeLDcQwGxW2cqXauJR22XYrju4EwhALzj2QCoDKvaeQMWZ8m2jykghSt9SJwRwg",
  "key2": "2t9PEBWUhhSDS5qcLX3RDKDd9TRwL8KN2UpwKq3tgvpAodhQzu5QmJs9urbZvJmxaydP5QxqSdMA914bGeWrTuwS",
  "key3": "4sPcKnAu14DiLjH5QiiMekH8iNSSMgvu95856htSsXLkCgmfHnpfC5NkMQLSNYYTo9xFqowoj6g7tSZLaasXVqeV",
  "key4": "2Lkfqe8xqse6z5ij9RDuGAEVESQaxZFtzBjZHCiTQLxZjoqLcqXckJDaSHL3vgj1WqPGxoSe2L35CsNJhhi7p22K",
  "key5": "4ywid52gMJaLYMNiV6XLptAXd33KCqaLe3mjs6GkfxWaBiix6SmWjzCCCAwkrLXQBWCMLiynEa9DwXb4SDCdeeLN",
  "key6": "kcfqb5Vj7E5kkUkefHKYwDJpYvVpSpKycHv5u7YpeTMq9oTyYf4CpHDXbroXKaBC68oB1oEnrKmaY1Y9Xsuuig7",
  "key7": "YxKsFxAnV6VP7s8NDy1FdH21a3NsUad4rVgeiUVT2ufniphAP5dVL6y5NexyWxY5zBk49kNbKS7sTnY8cogPcHg",
  "key8": "44JhKjTDQAPM39U4FhRos3AfWt5Y8FVfBp3PDzw9vEtfB8NibC6sofX8LN1G2dWX9tCqKhRiHoUAViJirKCasRS",
  "key9": "ESPc9xSDvGzgXeprYcuqWyCSvVMTZ3PnkxULZWdD2PcN3Yov6CB4Tmn7Dttnw6CCi9tzZMYvGHyT4wV38t8bLPf",
  "key10": "4BUZSzTgTZo6yp99dPvygUiAZMcSWnjt5iLHuN5XkJWfpHXkzxwZenKqqZfqfZaXqGV4A81VDSBZyy5Mx1UwbtvP",
  "key11": "5BaFxcvCVQw7ytugkdzJBYnNotfgoEQ7XWG4jXP5aSqmwnvZyqLbKopsSYxFLkCdixyo3cb1TEB7NiJ5mQeoMWgZ",
  "key12": "4GQaBi2WdbSyaULymAiGD5MaivEKyRHEWni2qR7Sj96AeJbiX7Kj2LJVcfRAQwHf88U6WDqsYxnYPTTfFre77Cwz",
  "key13": "3sLj58TTR4QniQvbktsSt6tPV9utR5W2Kgfo6YNLNefNgy653Zo2T54DRizW2nT9FAKb8jYCwMRpdGrgMKY8nwo6",
  "key14": "HeWnedAZFyk8YGwqCBD6wgLzVgyfugZ6r41y2Wco93WCDGpuKWNT8TjvGgYt1V3YRjuXyRjNKdAJbTfcCNPj8T8",
  "key15": "YHUDMmgTvhPyD9ozcvgqhQY9DnRd9yQteTx9u4K1LQaLRbB2TwLtofT3HUKEcTbQwpYisZgeQqybmfakDEKjv6g",
  "key16": "BG8TTb3GRAsX4V3Rdfzx55jSzBKgmW3URVfcmJVbKNvcXWfkXKNpwCejV9UK4RJLBi3r7S4oYpStrDxwH7wFBHr",
  "key17": "5yvLhV35q94qEycdUp6au72hiRHf9tZwxA8ergy8BS9T8YG81DnG2arTWSW6M6kxSFEPtZkwpVx83t4rh88g1Fjs",
  "key18": "32wiEcWQZyG2siBuUtwPaKkdwEFCB2CMsUCw1PBSvhjZdtJJvpxodpGTTqHDj5zgi5ZEoZCQnx5WstGufFdqsP7u",
  "key19": "4V82tyCQszhUKrExxjYwor2pKPBeF8AfhssTBdQRutz2jb8nPaV9tAdmemUvfwsu5YRYpK4U69fzVdnHimU7ej83",
  "key20": "3mdYbHC31xfKvSn7N1tMLYkGy23RxMF5UPYnRfqfyWkd5ejdh33jxdYW9WWuTWjoQsNnRTorm75vQryi5GjMC5EZ",
  "key21": "36cXiZJRFznbVH9MsPFFqjWsAom97UXNJZf8u9FsTnijzJz4JLyWARZ2evaR1d7hL7rGZRVquvoygrThU5w9ZQeY",
  "key22": "5a574y6ZMGhiMFTRHDPRUorvRuqMLL1veQ7kXMKQxZFbkL1BiMhvdF2UW8xvUqo9HjSUq1fVVBMQnSxGNiC2xz1U",
  "key23": "3xun71sSwGQ8ZGG4bTdn6Apwe7De85NUWgFiuvdohftJuzw84tdyUWMnWgBA5su2Egrf8UpajnRSccdqrsDXBJTb",
  "key24": "PMM1p6HgSYLCDMwz34omHgoJp7b24Dh1RALYzBR4jGekCXUHRzmxBtH5PSAkegRcCvSYDQiRdXPRGQAnsNJ4ojp",
  "key25": "4jYZyvMKNjCDXVYVqEAR1TNyGuJxjQ4xDoefzRjV569izYHuS9dKg8drKeuU1cqx6jHmr786GKyQiYBjfzv8SVvL",
  "key26": "3k2NEypaiut52fWenUFGrXscKtw4oeGiAUDPfPeheDHPQNstDNwhRtFdvn1Ds539ozhzSWHVFUx2Ba3iC2sHN1vf",
  "key27": "49Wf6QCoVvJEvUsFEyNMKzF1EcqVpHtG1VpwdUrb8fDa867jQToFbfzEJqhuXRXbDKLqVu2W6KiwhTBLbrxEo5Pk",
  "key28": "4yZMS2acxVq2AW7H7BxNR9LwGfHQ3Q6rLfHrJvPHdA6DiCTU38qKZ7mzBqhMni8Rpok2jwxJEVsQE7MEB1dYUkut",
  "key29": "5Nf5heVgTfRAh972juwrqzNM66QFebXEciQcjX4eJM46hHkrqg31zhp1244eM25ojqdPX9FFVis838ZH518hTVfM",
  "key30": "3XN1a5zwDwDYBqNtNAfTgqrLr4VkU3B4KehN3abZqBBF2io5mSKWsqi8AArTXMwGLHFJU8EXsE5Q2cRkwMGLvtqp",
  "key31": "39hmsZWth76oqEhQoThAPFw8RjZ1M1eG47x5SoxRnkyAwyYvShu584E46JKEtRL6iVc5sy7sMgKXdCNEeJWwZzc2",
  "key32": "ir8sR36v4KmLibP4Li6cApC2jTopg3fUzLMfVndqiTfFPaMsE7cjrb7r9uxDvXtVPiBhQwu6Hsya2uKTBJafnAq"
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
