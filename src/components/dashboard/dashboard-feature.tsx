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
    "3yTUDq6t2iLALjiXxxu2h5LPLZtJaFcxJGFPT8uQ4fQWFrUUiyTqsf3wq6Nq2nG6CfZRSAcrydk61LP9X1DNsuJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DKKkEGHkKqEpSNwrA2aALnmfpQ3e2isTdKDy3bfFkUZPbLwC9hB9p71gtHyMTv9hnBx8EdG5zivG4NuxXj6aRoT",
  "key1": "57xBCohBSnkwJ2z3WDX9xHZ3rRu8FKsi4CFtRBPkweSwbS7gUpmuTwWnZWmeFqVLXyCtbz9mG2F62beGvrwL91VB",
  "key2": "54Bxvu2XSE9kuyhRWwTi7UsvJeYMNfg1nzwMpkcqBNggt7HWHBd5Jx4QxiyY8x4NLxqDtc4hoedwQPDGiEw3ukZa",
  "key3": "3F5yVwC6v1uf3wgUAHF93V143C3fWqWgyLUXhYpHGWF6VR5o2iKhrAdpoXeEKBagBGBrfdhPVfSoGUEeBxpAtvE9",
  "key4": "5oBV9irbDqtMN4yeXfqb3avokQC6C3caYQVxTBQHGRH2G94L3nGydQAmZ7uhSjiMjeEiWxQDfYMAKXUAvBBLnh4C",
  "key5": "4yZm4AWh6wiRJGhEwwKVNC9Et2XdBuPTSUEm3PFHgq1nEALUDEakuNfDEyL6pUui1NHzCWMNBLDiPFzt6hjj1vQH",
  "key6": "5JGTTKFtftdgPM9bA6LPQtf5hw729DkqZcVyqYwTcSNX8YyauzDzQJvryytUVUK8HPxBhfgeLjs6HM8oBBD2fHF4",
  "key7": "2kYuudbxp1E79P9VKp8khsYcFStUk7o5DhXTGN7g66cqo4SNLdao9enBcnsaNwi9gXMqpQC9Bg2xxb8G88pHyakK",
  "key8": "42tPCpkyWCrbKquotyjshKFVicerTRniKteSHAwsr7y7uPNnfGbLe3Px4cHD4y1c69fVgs5UYmoa74nW3JpZvNrF",
  "key9": "3Bwu7oryPmLZuMdMKyJ9LRaHbyaNTg2yMNVkZ1KuX9wjj1i7odtrcSjbbtYjW68bYjrkHFqo5b914foNsG5jQpT1",
  "key10": "4DuiG2tW2dVuQ1z6bqYxi2ykaRq7CSR5ZvC2jXpPHEfGWaomhuNTxXiJF2RQ31717SoFTwb6t6daBafAqw4noQoX",
  "key11": "3hixmonuQX3oFFnUVF5BSY7y1tMjBnxaDyRxUYAE4etQzQFANw7J96DSN9UZN8YKwTB67muBXhaRou5PxSPPCGjd",
  "key12": "49c7TzfqfYaz3yW3ZP5VnnqfNVjf35hDDKecRgDxkh8XTK1Mx7KaCAf7jebvVwboJ58r5fs3aY58yEFEMixSm4AD",
  "key13": "55uame8zK6qax3CpoVFFkJ1PdYNQPcekpyz4PBBtHxoPZXR1hpCgpm8JQ5jFXYoJCQCptqktF12ow97BuxchZH95",
  "key14": "2aK9oUiLNUjeMaroZKS4vmGU52eWnp7mncJM4s2oinKis99gEgtHfKTLdLp43gHSr8UKPK2DzCDq6MmxJ2Fv8EHY",
  "key15": "w5mmnASKUVBZsrHntWGjfgSnKrX4WySxvGbSbFZsufXatXEbVWwcFSqpvH1cS2oKWZh9SYyC3AtaUVzJmbUoJTR",
  "key16": "2WxHfg4KTk5LPBxo2uk9xK7HUW8HnPKiELS8J1E5W6YYkcVMGt9yhnkb6sbGxhPJK55ZdbWN2CvdzT9huvEicUwj",
  "key17": "5ucyLmZrxBJQJTEC1Cwt6dgAaRS3ufqvdpdWDb1FCja86A4GozJS2EpEFKJ4MGfsmkDdAYXnvH6v6S2jxZqqFbjd",
  "key18": "44VZxxMjV5bmXN5GzqTB73ssaUEw2RojzmmCp1ASfdUsXocddArh6744ivtjEdZy88Y4kVZrmyZ8GC29wYCzHNDB",
  "key19": "44PWMLNqWRGw5g9CkUPrwfgw4ZXXupmNsVzS9EQFzj9F7icHPTQMSxePTW688MasZkZbjuczyqddANwExsSHttJp",
  "key20": "39GbzQwfa5qXNjrnpkL77PkbPuWaJZUiFvjz3FDn6GD6gnTvBJWUs5RHb46zX4gxcES5eajB9SmfPUBh6WSQWEUA",
  "key21": "dxi2yD5wWq3YMvaNGKL8EDirraV5qZnLvBzJ2nCtfeMfv18zWqqtCQxzmj2BaSugPsvNvwnaRve5r7hjaXuTsYy",
  "key22": "2B2BdWpFW4UzKN6n69XQafJ5hUgeFVuVneSBU5LVtFr4H5f2zi76GaX8vVLpuASrsDqMURvAGHB9VGSaBnqUBXVh",
  "key23": "2NvrD2PcXmqq59dyzsafonrXa2nAktyVLfHYpfWtSvjNmzEZS1GdnxR1jiATFee3DPBfBL1WqpEXLTuLxPkn5p4n",
  "key24": "26vT6dFMN92UX1QFL9nPMdoJJe5VLwvcBLATGiyPd58csXpVAG5aseLL5Lm3996hxUaMYCYgrefjqAnUCvUJio5p",
  "key25": "46y6YMmHh6pZCe5fKn7xAswj7k5u7JLxij9GHWbUDA1tp4ii51yvEQuoRUUKJG3wgFgRH7hEp8iCBjSRLYe4zKwh",
  "key26": "2bQNgg9HZXQHXAFFHW5h8TAUp3kcddCXp7woULHSFsSFUJa6gac4d3DemeAyoK9oHrHPYZRjX5xRbR3GY6Var5N",
  "key27": "5j8Y1Jv7ZQWSAQeSA7ssgPj8HvJdX61CS7h4EUJVroAJs9k6bC5W4WwzyFd1aQbFTJXaFDzzonPm85QJz4Gas2RA",
  "key28": "JaNyEjAdDKxXp1TutxqSF4zBTPJhB8X7G1exFfgh4TAEPe8Q2nQx8Uz2mJccMPcxkDYpMViB9tNnx9ntSBjqyXn",
  "key29": "4fk2AhU7atD5DGf1yBN4h11mJiCfvC6sUPFvSQAzD46zksnXciA2BecghL69FJ1K7xmToq3nX4ZaoALnFKGUrKvb",
  "key30": "49Tmj8cJVZt4LLRqLYjPnMmh8PtdHs6RWcBLEFyavQcRqh6xay98JuFqjHLD273CvaeH74TwnW1MUES9nrJW6SyL",
  "key31": "yPeNCDV8VWQQ25VDTqjncYVRKWnPGfrQm7n7mq7S3zXP5kFbp5aGQX6Kr3Nz8vfcgU8NSbf38H4o48Qt2dozXRN",
  "key32": "5idpBXsyUWnH5XsGdGeXzdR95NG1H3QfHsSffEhttfvb6cPn34dVGvqm1WWskMGXB9AJg9AdFpqrQHkDFZscPVxb"
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
