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
    "59vs7ojoxTiBeHjsJAeUc7tKoqcAmazZH1tip9ASqnZwaFECLFPWZ2aMp8X4NpDzb1W8dhvotVtaLuk2NCGrFH3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rEGXzJsJU2b938gqPEpFcNEivCmU84vtbma3J76ts8sUEt9UUQAR1iLGXBii2K4chZcsi1XZM1toB59P1Vm7vKm",
  "key1": "5HHRqhLVNXFxCvqUPBooh2YFqZUyEiMxGYFnQa5CFNARQczDgu2Mx8Jr1DyjSKZ2grpSFqPgeED6aWkkaUMV37oo",
  "key2": "Serw1tqweuu9FAFCJUAX7EPb7N44cxNaFryHAKVH7hyaJtmQeEdNM4JkKJtGK2sZRWT75SQ5znnud5QvYfuuxrN",
  "key3": "6agY1SxJ2az2C54c27ftL7RfFgkDLaVVd9ZfqcYTLbL8WKMU88NLMGKgSa9jzFx5SR1gcdGu5Mtg4qbTd1j4eKe",
  "key4": "4V8cF1TVWEXEH54pKD3F7p7GpddADLr9o8AqDuRDjJFN5eHJMgnbtHRaNYPz5MHU7ULkDMLW1jXEHo3CUDfvdvaA",
  "key5": "5NMYUTzyN3gSei2v5568JoVz8shDLYYmYGyVqNaWUPqWWZhTAmjgiRvQhM47Gbvhj58WK4iDCuRzLNDiaCtNRzu5",
  "key6": "24pnRRYLKzPTtyNFhpYCSMPGH7cqHbLyfiQtmGo3JMLFndhcnMun4RpsUoz4qkFmcoHeykZfxgutvSRcPPnMd1qs",
  "key7": "3UDbBuUsBUxkbryjiDZKQc1byEb6xdbZ36ztK3YkkPBPRBoGrfwejzDSjGWFysoq714BLujK3xMtiaAtgLeeYyiN",
  "key8": "5nWqtdGw1F9Cm9NRVFWbGWDp5dLYPXaMRFgDyxqzz7wavo8iTMaiMGmujZoxoqE26mhN4hSNTKNimd8HurgJykbN",
  "key9": "2xDcZbm535U6Z82xWbuhVxfDjq8ic94hjRuziCo9KY6E4rjL2uyA1rUz7Qdod6184J55q8ozk3pTubynkCYcKWED",
  "key10": "5gzrBcxcW3PJyZMi1WjUSY5rfaLXubWRmaYNpMKRUqpRhCcZhHCvU4AR74BRD8krkdZUinUVaL8YRdgk9AzUNZ7E",
  "key11": "2qeQRPguUvHxNPR4krWd83a4U1P2VFSXkj3xw2H6MpvW9ZnfU5StJ7bAYyxqSeL7fPKdgP98R6bwu7HMxu4qWBCw",
  "key12": "e6yaHcD2QSJkgUAr8ADyuukZiVUYChUpK5uwcYZUFABmi4NDFxghz1wDVveqx6nJiBsmtDQiDotPwVR3gjbaVWW",
  "key13": "47nDt8VLD7UiAxbdmpjm6L5uAxuDn5MBj1UzCcQ1AYYhnMGNgecSo9AArGs8WdudpEQt855jMrgn8LqMzXWTKJHX",
  "key14": "PGjv3dUTb8zGjBSHWwRta83VyitFsBenuUP1qMxEfYMjh8kqmW9RitKzbYtXqBVPgF6d5GzJZyse54mRaUeKV7G",
  "key15": "wv3L9RXtqGPgKRcwg7QExh9gsJyg76aNRB155VwmF6xtHmmRT5sv1XumHraJn8ne5Sxyb7J7worhXKJmfoxEenc",
  "key16": "qp46CqWWyQ1UddCNxPSqn7p2HeDeXU194rQFzrBaLaNCrvJsvmFzWzz4EQiuxL5ro2FtdgqT3AFURhF4rzcXmVv",
  "key17": "4WdNikYHCnYo6nnozpgQHWQLFosUW3k3Cs1wyPb3k66pMTZyP4zxavNscS87hxs7QxoMkLy4nvdefShqDgTfSERN",
  "key18": "3Pm5BCG3JdAzxhMtd7HcUv9ya9d8k9ZfrX6bXC5ym5RKWxmcJwrbn1UFTmzxf3iBq3N9rYPcjRrRp4DEzt5ZwrNS",
  "key19": "2VwDuGoBzV9ir6YHkYgigexfu2v7rLWWwqsfogXcvdGgwEKUnwHYKuURYTQ4Z71eFcBnKgbH1DiGi58uR2wd3hLg",
  "key20": "3mZKvmt9iqYeHW5mmMy7q7PrqGLLZ7Xmy8FrsNNAnvNmYtBVVwdQwNVZ2Qskv3V893KKGdgiLxW6bxrkWvroxe4V",
  "key21": "axXFgq8YVbvQyW6NQuwidGuqMXjVaoyaqiFqpfQnMFimCMT3dKvJTLG8oQr4HHTTLVhDsx8MyeqkjTwVHEHBk4G",
  "key22": "2baJoQXT4EqdbyvPf1DBYy989cVcDVyRwxRMw9YKAZAhdw4FwZ2k65o8XWDB8YuAH6uS3nHewqqBJz9dmXYggSs1",
  "key23": "4XuYayWwEHhRAS2qd9s1WnWQCzwSgxxUFHxwbfzgq6UPEPegsehzji2uVoN6Z3PDB8co5wqJ3vbKLw4Wag4hYMtN",
  "key24": "4ALT9tX2FNMMKharuZYqRLzCwdQctfdnZ88KQWCAEkiqpBXA4nF7WXYGwhJSjsLv284rEgnRPTpSncWZ49azZBwu",
  "key25": "4VgYTCTmJtoNts94kLeqwdbBDpu47hHYnaJmitDSiiauUgmgatmPA77x5qn4YdvxVF2MMknCWLsvQxMGJwABXVzp"
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
