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
    "4qDBzb9xxgF57TAHuVhUxkruQSq7xsgvArnFJ2kCjeQqpTF4kF5SSB8h522SGbMs73GBQohZvWrMcvh1KdVRXSwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QELTv4NDNEvhw544kbSXH1LbX1Ntm1a3CUqHJEjHVt1LhRW2sJuCkCVy59pLTkELaMFcSKjGT6HeKGUxmgJXzJ8",
  "key1": "3TJBTZpREX2b6hNGFDoLSnnN9WndmgUHtRD6Nx6Lhcw7zS2eLRcbyPEDmJchaWnbQgmNjXATXtmr3SsatSxSCb5b",
  "key2": "5v2SijFGYKUMrSDcapNQjPXhT6HZ9CDYFBBttvcTUg81RbphLg4u3S96SRy5GczH4GAoZZJ9R6Ct19wtXufUav8R",
  "key3": "2wkY8bEwuqxfpj6W3bkkkU8A9d7W2sndL2dZxBbDwMEbNqVrMPYuAuuQnHbw2iP5QjjEbxGrPKPfasiYxzT1wngF",
  "key4": "4aVFjfHvysYjedo3tPjRhvbY1HPuWTKDXjTosuJkcaCg6VgQZrsGjMQ5qrJDabvGxxcJ5gBpgJWoGbXdNF7G4Dmk",
  "key5": "T6ZD8K7Pb7QLhHHd3RkJHyfR76HjBbarGSZ5Stvpyw6Fm1t13yqdYZffixZpiTQ1MhnhgdJDRrYczkdCJTJKLUn",
  "key6": "3U3mvbFqWDgS7nAuh7X3TDR6jdixEA9SmFEsycsmapEJY38wBVEFPKD5Rmy82FWFvKpD3yRF49SRwxtP63Xqdxhb",
  "key7": "SMdEZUy9oc4LG5eCAiQabf6evU7aNDgqQbWbBZjUi4fFTLftnkioiGfdXDuApttFvzcUKxu97DLZ4m8vJ15ZL2h",
  "key8": "2A1p9e1DdVDdhTkz68pnwkuSNXMDwEC5XNqZdMKvEeShuqPGacFLx72AFwG6EdVArcPRskjK2pLXxfXfbcti6W5A",
  "key9": "2AJj7FzfpWPt8Bn5urDv1y8M6F8R8GoVJFumYSaaxsn7pYeuQJX3xUfS1jGoiwWihemD9ayHyFSJ4Ygze9KKHZVC",
  "key10": "3bk3QHJ2QzUu7iWaownV1vs2toYFMQmJyT5ran1PXqKyeL6ne1RQyjD6mbYTFe9XN5swCQKSw1WjDgDQh7m2oSiA",
  "key11": "5jQvZK6CADbNPsEyfmuFWRiUgoB12KiabeXpPeNaeQ6SU39TRjWU914riKSnyC7ZA2xmaT224Tzhm5srxXe7KoKm",
  "key12": "4zjjrPYGtiRBsCpAFxTvc2kUJVS7vHCvhtkHa1sy1PqCvgzFQ43d6RtFH15M4fLrMMUKVC3BEVSijuYqE1W4DVsb",
  "key13": "4MyhMEwUip8vC3mLwnJ1VcEFkso3hVsUzH1eayPCbY19SMn9ZP1PHpkj4Awfbz2FKDH68WkAtUPTZrR6jExUvn7",
  "key14": "4sYpcAgnAnpsmVcc35ymaxteDhMHzRWcjFbv7Bzn4FNm8p3rgvAah8BgL9wHNHPhxjuvjLSnZTRvT8CRHEQgexKx",
  "key15": "355SxFR1teDgF9SUGkrxpRr7aju2bpUW87uR6soA7rS8SDf2k51jWKYh3wCibsY1M5uRp58SE7xt4VQXvs5CeSFT",
  "key16": "2d5aKrm31Wxfyd7Mmi499hGbFBmF8DyB9Fufh4GLG6NF69NjoEXmuVDe4ZrMZm4zrmreyDZVnZJ38uq5QYQ78pa1",
  "key17": "4aCuQNJugDpKWvG7vHra6hfNixpfgLCicqStiT6ytz6ntwmyETrwNZDnpS8wWYtMqUdXd5Jxr2HWmEMWRaNFiZRa",
  "key18": "5nrtRqbCqZ6QY9cS6iaZC25xt9bMgWzutjzRn8Tnhi9qJ9xzKarbChmitih42ezKoHg7vdsD4QfxV1W1ZPiqU3r2",
  "key19": "5Lc9LCdUzNwzAMkJmQ5H3v1PkuDeHPpGbsoNMUx9gK4spYEmo6nV5zPenceX6hHm2aoBMPPT2zYqtMy2Yt3e8uZA",
  "key20": "67Yqji6c9y2CYCz4ZYZMVL9hB8w2m2dunCN4uoG6PU9SefBo9yLzLWSPTomxDj8iE2NGUxAQi9da6KDQhjKtGakT",
  "key21": "2qNSAPERjNYegrj6rdzCzSVYjTQ7qNXEAfyKSAa6NDAvRtNuhRN1U5MTd2nprXsQoCK4fZmncx48TGzyS5KNrsM5",
  "key22": "5awD4gSTbY43Eu9aRAfKmMz7NKrAsuUzjEvjdVva3znLy2MfeqvbgHXuou9N2FcuxoaiwAUT2E2kBLPdFbkihQk6",
  "key23": "29cp3fejRe9HAv9vhJmkdjEPUeWJgiRxK2b3iSQsd2YDnX2ZGsHk1s9rGLRC8CjzfEtKkhfpUxhF3RmspcTQLKzD",
  "key24": "2uMNUYFZ4AYdFKVXzrF8TKEoAMvNj3yYQeutKS9fKjZ6Bfxfn3Bu2aFdmi7n8HzC352kZzJGvB2mtNaFKcGpzCZT",
  "key25": "iZEkQK8nJHqnQU1FnbRL7JaNyL4SDrDhtnB1wpkrBYCDUanEFeNKfzK1qbEtxAe8MgH5Y5iYzVHKfUcsLFpAgzq",
  "key26": "5sSLD2MvCjwZor2gaPp5xHtppKZM7JU2NdMf6SSAERr1CK7tAmcUCAMPvez6ChPfpurK7PuS7ttpo5uydpdBDU6K",
  "key27": "3VUVtNtPjLVgdBcVPK1oUXLVPGRWH3xUQsCmttssKRvRneJPGAfsbyBkfeVaLTz2iAZEEdqzcGqqgMxWPSLNAesC",
  "key28": "JV43QtMcDVthDyUjHNBUhxGURZ6tavYjEScfqFewUwBww2LZbRGLht8uFHxg8kaZ264MyubnXgFvzCSx24wFK1t",
  "key29": "3dtmoLrHx5uUJ5PJE8cuSm4ypNjFbbvZDUkDBRqBQQUqFrAMLEPC2HM9qnoRbdofUN97dVJvwxQZGqdb2Q2m6qZd",
  "key30": "3pKRLBBxY2yZr4YdZGasrvfnNGm3NcMzbb1eeaXgNu3i9XKed1VfgpjTkLfuVEkKkDLdGGLHCPGnKPojMtxSsqc9",
  "key31": "2yr6UYbnEAf5S39GMauAnrLnUZ9j1HCsX5EwgtBLgEEhiyoBz4VewsXuDVkbY1jdzA5DGXLD86WvidLn39Zi3U3h",
  "key32": "48y7BFCtn6vP9pWqo2PiAE7TkBbeDFdSmrb38vJW7mE3Q67zo6nLfHHqG31kzULtid3pkNwTNTFNWw8ZhyKdfdca",
  "key33": "tSE2BJBGP9GGFGuygJKJewqDjq63Dm9V2ednhMjspmU5KEVw3xMFe8khfWQfrZUrB53tRvH4QiEenodT6YGRYnP",
  "key34": "35pY99ziU2ghdtkYzv7LgArHTvQW8n5yQHMQD5GwyvoEqEZn5fJpcaU8PjjLzj54Wzo4heyYtHoKQrnBfzXpwu4n",
  "key35": "CzB3TicP64FtGhNGEHELsrRwjUx7QNkj9GFqCRyuT9i4T2WcrzGZJG8eqpXPNW7TCXH8RXmFBRRFBHbKGpYt7eW",
  "key36": "4ytfYKm9at3XG47xcLupCprDcDBcvqaNSCRzr48HpN4DoEFyQgGWMGJaxpHxRvhpvLAdimVEpv7nAC7riSRuisYa"
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
