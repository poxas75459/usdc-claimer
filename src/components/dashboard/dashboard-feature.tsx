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
    "3CHLDqHgPqVwM4oUKZHX2dDyDCh1xgJ8miaLfZ62f9rfubixHP7DR6peFhKParKwB5Ls3NybAGaHmKHqhkj8Ej1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vMLf2BZypgqSn9K8HtPDmjWCAqE9d97qE1ovAQ8D2oTnBxjR1X883LFSdeDQpaN79zq2mXRCnMv2RkTjGK6RLJ2",
  "key1": "4S1catzqHAowsvzFL6uQVunctcd247KgF78H5ah3vaTXSxpZNc3iHaNyvYizWuSQ5DE62v15dPG6uE8siNTiFMt8",
  "key2": "aR75Jnu51qUVkMuEboDtfKz7jhbVxc5n9BzRdGryamTEax8aeccbLuhoadVFQc4Va16RFXMYtL2LB2JXrcqCLqA",
  "key3": "2ekVKgr1a84RvsYWevcLn73B2yiggsiXBB6fagLinJCsVHYttMicz9i3dzLit5ttQ8Zab2MvQRnBBYtg1smAVSTF",
  "key4": "5TNV1L2a6mVU31mPSXxsmt7YbmWMJ3iKz8EEWCKhmBXHGTbWw7GVSuWUKPMYEbbhZWk7ui88NrxNLtGmHyZhmBiw",
  "key5": "3C6vkCwY4NBWRWL3sRBZjzGNTUd978r5bL3Zw9Y5iwUnzzpemsKTtd54Aa7vfj7vQ2Y9Z4rG4PFW7BdVDyrdg8xy",
  "key6": "KzcngPn16ZziQiM3by9LswdZ2cHAQGkFY37xa6DhevUNHZ2kHufGSQjVrRKCsxktK1J3eBwAsZajdpySnNRPZiT",
  "key7": "6JuF49Wher52f36bzA8gbg3ythxw3cNhGzC1NoCjJft4hD17HRbbrC5Md34U84hTAm3ero5BCfrAVyry4nRnFjN",
  "key8": "293fJeVgb3xNY37h1g2nKDoTiMS9EeMTYcjLHTbpDGdqrY3rBu8d9LWdhFbA48N6xiw9itqCAkQG4djMiHrgTytd",
  "key9": "4UUJrgq7C4QjgnixDhHy8uiAkvPNbtcz6fAYirDNPyfkPDmfYY5E8j7n1BJaPAGxhyrUCCynohUquJ4XAREMm6FS",
  "key10": "4PQc6MzLKrvH5tTaEe2VuGa66pQgDu7sizAjvJPKP5UEyyipzN22fB7fxXBbq6T8zvwvJxEgLA2JeuYSPq6eWhQM",
  "key11": "2WPo9PAHrmGfXS7K7wi5R5HkxmoM6mfZev9Nf8BTRu7cgCJ7aiJv7rSLGkebuVqNsTYtkjN3gdftP2Zwtk1YSrWV",
  "key12": "4rrevJXewJhTZQFfa8CHs51tYhidQiwFgSF888AUkiY2gDFPu5FWZrCgQu5b5MYbjUeNp6W3KaWxXf2BWZfxP4Hk",
  "key13": "4Z88MN7nSSQRv5FWxf3iCXQh8FbGTr5WhU3P4PtGU5cv39uqHAquV2BxHgmfhzkh9NAvBE2NhS3QLSFtHwJrmaDb",
  "key14": "3SUW9TN6WMHQR9gp4QRJ7VoHygqjWX3TdwNcifj3NoWobMawRChuJAB8zSiRs1TqNBbE7yuvkGZQC6DZGMhCLSLo",
  "key15": "3xNkzYAdsiig2bnVJzSwmF7EHgLNkqmhjHaR5V6QNbqzvs16Mh8VFxUa8MpkbrsALUzx4cyderVtKCedh62zDnLW",
  "key16": "3BFSVQu4t7TXkYfLRFg8UjeaNAiEcsXZfd2eKietPiRVpdWv6gRYLkZDLoE4dMkEwkXZQ2UnBCkhiKpdD4Hcy5RP",
  "key17": "bbi23BcbU6HdMWKxE7YADVovQ3v8RTtLcmFtHjsvPrLmDprbRA9GT8Fm4sNr6iuEFCvmbUTD7PTDASB8ssgwTxD",
  "key18": "3aNuQwh2HZkLWZnqhwccevYMNKMTQFvsQEFexNGbAZsp2x927tVRYtBYBVKHKhgANCFhV15qob4HksfnLAdavbER",
  "key19": "mvD3RnEboAxXDSrzR5AuwDwRXUETEAk2yatoVhiseQ9sSbAx2GHgXzhBUWqEB5bvaMRsCwPbxRXNjHnyJ255Cjj",
  "key20": "2UYGARoLa3MfFrGCjR1zZ3rgW8n1wMgG8rVhVhw7AdhweSegGDC1aECfkvcAe9Uj3XEnVR9YThFWZGRqNLi7UzyQ",
  "key21": "5ewufNgjpRGnuPZDW3o1e9hPVq7ooLSisKnvyhrnnQ8n8bHxZBsFigV5cCpCuSCDxerEFvT5WPd7QXKyRSNdMh8a",
  "key22": "jRUsBgSkL56A5abcF441FkUqCLx5JpsRqGcQSgLSQ8BSHR4fEDmDtgTgf9pbdDw1vswUH4h6BPHmGrm3GTBoUzs",
  "key23": "4kRXpxfWEpsuQToacGhbV3s6GPQbNag7wzTHo2pwGxpvYLpDUDM1ru6hBFew5ub4JkNn6tcBzT9gS1mGbU4Prh4u",
  "key24": "2qhajvFLDyMwmaTb6K29ygiGwTXFNLF2uumuorjB9PEJ893rgZ9KpqcSHVXMagRtGqtzwRhCTqLwEBWvtqrbUe3o",
  "key25": "2s6iG9ttrodTYLXSP6FFAXS319ZuKxsk3fWzJSp9JSCNQFCrRG169641eWWiGGHCCdE95dtRppuSfmxs5wcRZRd5",
  "key26": "5dmP6Ud7WrY8LJyJ1zHb55XA3TGg1qkPDdPvVhf7Xos76hdMjyLiyfegGXMoAiJ18c6DJrmL6ZE6AyXk8Ayft3Ga",
  "key27": "3esjD5h74fZmYzeYzd3gHd7gtPtyPFF7CMF2czwp9Q66BNWt7tsMTfxzRRN9M7BiCfWZRaydGCh4zi9Tb1dqnVrh",
  "key28": "4JxAjQc1zmzZxzkx11A2YtfvRzfjsQMXbDggz1jeJSpbHfPimBiufpiqzBkUPgJeHFMEvtueVx7n6t3QhdmDtXnF",
  "key29": "4aXKoYE4FhkT3Wur3k1ZL8nzZxCMkkBwTKwPU7N8z4rjpbd4i2FeH2Ar8PXQ6fLhLFkYVuCJKMHd7X6oqSsmJXti",
  "key30": "4x6L6dPZF1Ge7yABUiNVymQ4umeC5jbXSzZMYfUYzzcR4qcot8BeQENMt5kNuxUhDhmAJiCj3V93NpMj8Bf7uPYS",
  "key31": "4kM1kpNABeDry3nV1Ns3x8LPh1oe1WL413hdqZNgucgLw6grxg4khZYcGHpFRPecVyQC7r1wkQ7wmsS7SKYhcB7W",
  "key32": "qcYwh3cRQN2e63cKm7wL1VphNu4gFD4uBp6Zx9BH7UJVy83AuqXdh6pZk1LtdwdTbjyesbK2cwcVPSbUYFkCWnz",
  "key33": "5MhGRtjifsFKFeKiwMkYodaGRucAu1xoRBH4KQGLxejza3EsUmHG8DkqaUevW7F777z9BHAGUKxQgEgzdjYZ4W9Y",
  "key34": "5jFD8YUQy8Rif3CGKUi4tovRjNpWw4nyEQNskp59sd479yaTjmcQC5wDMwFCQ1fmv5LZVPyUB4jXjJqhieaajeRD",
  "key35": "Z9MMsrYWkscunxDjS3jMAc9ZeKu56iPSG7RxryZg7dvr6nz6HmxCKYzkyTnUHCZM49VP3ZwRkkdzezg7Rua21jy",
  "key36": "Gn5pu5Fakx7v3UzyR1WBdAyUWv2KuhjVzNGpyDYsjuhaNsipbZrbpvXpLumprAJF8Mm2Sb8U2pDk7z8XgVFBWv8",
  "key37": "675drgxH8gaTdfhYFCN72BwifZsFiWwxyBz7E8Wbf1sDzV6j77LdbSiuyKoQoVVH8f5VMdEVdp5ZBRVDAXjmZPCc",
  "key38": "TR8ZAN1rFkpzGRdndtJm8iFJYsz2KJGcPS26CmJvgUbFJKWtVnqPqk7sYd7dsFNGNXtjrFzm5pT2YRx42AbkpJB",
  "key39": "4fXFFHgdwEgi3wAHy1cXX9KNJC3eCMMUit5FR9i2S9U9vx5hNBBaDCahh8R9Gr7UtMS1J6x8Pd1HTF4EofbiTLAg"
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
