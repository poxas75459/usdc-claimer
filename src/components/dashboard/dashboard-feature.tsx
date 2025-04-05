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
    "3cBxY9ihJNFyVDFxsddW7iCQtjrct1Qj8ByZcQRdwxw9WpujGfBapbANrAVkGpe6iUSuPhPkj8gBfvUh4smrRZX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bvm8UKPHwwhXzMNof5HwnZ89C4zpDDXuZifrUbzXMceJJXQSrnQwzZGAq16KJKjnEKKM8KAHVqxogy85SyH7Vs2",
  "key1": "RuVg3Gj4Dj6nT3rjiGnzfcYGH6H2rWwN4um8ys43zfEfhnb99dofhtsoAThpZV26DhWRXmwMKnJnJnR66ZbFvzo",
  "key2": "64FoHap5sStbAuXf64ZvEa3tyYHS6ptjFtp7MbiCF9AMEQJkKiUvPHsdjwkPKFhY5tkH1wMKbxeoEW2uKWuzTs6G",
  "key3": "3pCjvSJpA2ASSQKeJUWMa4tLcTovjQsBeuHLBrSB1XMajaQobhCwSsem6ad9E39QwUTWbifEaqgaRehBsNSAQdSe",
  "key4": "3yXYTpyLdbqWsJpUC1LFgiTxxJrMrsxs2cz3BsSWRrutgxdmAV8YRrPCCJgkbfziMTffwspMPc7Gg2Kv2otcv9nZ",
  "key5": "5tvfkibyBjd1wQwZpE97z5Ddzhrb5w98J85VnvtgE3ja4E23iULFPBFvVBqmK1GbuXLvFW49RAJ78B48KqPFNisB",
  "key6": "5avtekk6gZFzC3Ver2BH7VkJJu4uCBdS5RAZRGi76zjm3TjiKvxLP14EmJYeq62Xi4pLttzBGsfwLMDAa54CxMhk",
  "key7": "AvQ3BJL3MiQJ9zqTa1ywnJ3G9vxXWaHGLM1ZnvT9gzPyxjfnKNf6aDMBguaiNqqFRBkxad8zvniQejgXfj2nq75",
  "key8": "21NpDK8aZ4ansB6FKoft5g9LKVdkYP1SfJheEdg7Wzwx2nY9L6pcQbchTVRg6PDpd6tDEbtiF3STSmTSmYw1JUFU",
  "key9": "4xddqE4YkziRgtHNoEethoSVqb5d5jVjF33QtD6Bv9TLv7AeBFnbkx7PERtnpc6cwUjngr9W2wHFmc6UDYhF9rgH",
  "key10": "tBSFf6WrWkseNUrYhRUrEvu7vvNVjHiK6fTAT8zawYRcc1A9rMzfEUpHEjsDHVJ5XuEVu24Pts4C1x3sVs3SnN6",
  "key11": "4RExp5PFFhaWcQ4UzQ4zM2VUCUEgoWAbFvM8rGk3o7xZp3p2KTUwED4z8pCwc6HzCqekgdGGPBBbTfjZWaVXQjPK",
  "key12": "24vcYUVgSqNXUfFFhYQB1bAcdbVPSZ6RqudrRRf2DQTcb6vtNUr7saPrLTz2xrL8Eu5fFh7aun7eoBfWNqZgdoUh",
  "key13": "4XAkvYrKsKsQKdVC2uoSgz5viTxbfQAnP3KmxDA2R8R6K6Brv5t46MBeiqXMhrcfzUG824EAGFTLpQpn2Zb23DPW",
  "key14": "4xJP8gqqy8yXoLgqLDBVu3Hpp2cUa759Qbt5ZCDdgYgQgv3xeSCbhTaPnipb1mqXRs66Zo4bQ1HbX2oC8vcL5HUN",
  "key15": "ddMeFYJn5AEh8Pncr4R5S5tRKw4uxweaTxxciJXjsd7U1MfxFtTWLZJQwsHdywE9grjRzFjYdYzRQt3uDYiYsqt",
  "key16": "BDLXqgmDimYxyoahucBVrT1wDXYWkuLnXzdyFe8Wgc6r3goJ725HT2ekLRXSBrvUu7PYcRnCEPxUnV1Sag8aTe7",
  "key17": "Zf6gGMxUV16wNbvn86Co1J1zBNt5ZcqJLRXP8KyVS3eMH38EjZSHUdXo7VG6bAHSSQfbmCAoqSC9mVhDiMEwxo2",
  "key18": "5HKDQGGJPjygomzmT9ucYpwesNeMHm3X7QqV9tTNARvEgVS9YJN49Bao8fzzJpCxqVUXeyT8txt68jynX173k7fH",
  "key19": "3g418HfLG1CUXpZdZ7n7aDzJ8FhPMmKZuFirRWrW3AEVbxggTtZ7vKZBvfEeFvVwYVUQvEENDESqY22oYkXzovAa",
  "key20": "4BrEiPq3XtwjNzSwnvD3zg2BT1JLGXkBJ1iWx4VYrTs9DJDMi5XE6ZVkmPSb9jfTKagzAEZceJ5hLYGQEZE3Kb6y",
  "key21": "4jEUNC1DXh6zzY6XpJpdkVWNQuAPs4ZTR8VU1uNJDhPi2zBDFzq4RRjXuWX9HPrTWXHFZ4iU899c4i7usdjFxqPS",
  "key22": "3nW3YLbQUxYKhX8a4jsW8dytiTKNG1qQcnB9PnhxGZHtp4zdGaQyWMB7GuRXLa2WktyoX39KFHx7irqp7ocprocs",
  "key23": "3nhsm49VVSpS7eJQjBW7sqqPmwwjzK9KaS9xZFrdK94ALZpNFrdvqSqFARV4w2S9v8XQyxgmawzDenqKtHnZsJMP",
  "key24": "uWesjHwbDJJsqUPawJ83yz1aSU4xdn6mzMyWcs3qnPh7ANTTYEHBxQY5SVKXnqAb9YbjMY6jCd2Mazknfv3ZtDg",
  "key25": "3Y4vqirubxiwbEswCpsa9nNBdVda8huVmXWoCFj4LVnmzsy1f4PUcW6jaBU4QbMDnwT49SwtB1FTeGdekFuWBCnU",
  "key26": "4UAojZkiYXhbeohCZBMA7auR1fYz7mKYCDjdf3D87QHS6UQRKH6sGzTy7umm6iEwzUw8b868YnZEnjY8b5aG9TDL",
  "key27": "3CwGNSarPLWHJ6t6d5Yg2mPizAiSkHFUpFwJGeg3NHyYi2r5cptFroMXcBfvmu46KufugLytgsLpoc5H2pMwn2Ve",
  "key28": "4ZeeqhMcHcz2Dc3k2v6qkDyCKeYnji7QtuZMSr1dJRDj8yp3r67YqewjEnm2HgcJ8BcXYehQLCCpKUVFc59mj4m1",
  "key29": "5isRGbXuFbqxNN3McoJDimipKgQoZKT2a3siCD8x1kE46q7LhZGeeRLb6qJofSp8CUKcYuWpVcM6qdBjeYsZdDs",
  "key30": "2gZr9gzPQSkrYzKr2LS63JReXPG4dNAtz6w9VxCC7R5cMzcFXf8rxirV8TfZ74a33sXFU7Uo7amRqtMQrfUT3chS",
  "key31": "p3rYAz9Mc1F7YoQAKWEUif17KFErNt9TPCDsLVEM4ZEeZZUXTYr6cuPtimEpMjJ9wyRDj5VSCd7KT6Lo5DvJFcX",
  "key32": "3xj8zadfcg4y4SDx3S5q5voFB8uTsRFek9iJoiHG1JDKqNWsGwFsZyEaHKv9nrcyywLM8ortHuPpRyWkCpFDBb8r",
  "key33": "tJW3AexvabzJ3ubp44ZzmhsNggLmEtpF5hPUKk4mGSBwsQpmidfiBSziwi5ktCjdGLeDnEFezYqVq4efteHqCpK",
  "key34": "ta1GPPmBzgCxS4nFYs2A1qqhKowp8CkY9TLrbCbHvcfGBUESvHk8RsEPZ7uPWQzSESJn6LXzKRdKFHLmE2VaHdf",
  "key35": "2XnoRtoiLvpTYfEYwnahrXrhcUYxCq5s4jtbQUHj5YFAT7BmxYTXh76nwK4SQKNq46jN9LNwAA5coZZ5JwXRctYg",
  "key36": "2sJKZLZa8J4UV8XJLZLMeqTdPY3BLVHsJzZTRaAjaBDJAFG4H1fvSmh7bHnRbPzY9kowHmPvogbUUQFfAKEiuSwd",
  "key37": "2w4fd8DXc5EFNuaJXcmMfsRkzRoWrzXm39Tapp8DWaLWgQygSCtQxGVSH7xrbcTANrrW1jTuV6oVVNXoPBdc4c5X",
  "key38": "4kv7ummvLALwxVPQkpZcyeeYAyBqKb7zW2eBraLLt1iuLWno2cLJiEADyqA2xeZHNbMmwRaRPtuWL85Q5R9FAasV",
  "key39": "2AEebLgrkgVqWW4icv8P2b21ubEEazTH1K1D9mm2bxRuSfHi7DvpvAgcSzGMZpMrj7r3Q9NuooGvg76eJRRfpFha"
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
