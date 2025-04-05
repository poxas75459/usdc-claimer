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
    "NzzSbQqSw95SyZkNXCvT7pykVEJUt4KS1iV297TDwbDojDjM1wcWPkS7ePu1YaykWnV4dUptgJ8Y5W9RenHAejx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zbvdXZRjgyxgiScGYjoV1jPSxhiPr8RhEdj5R2NxTFJVuSc7JQkmoiticiTkAVJkSUSWz4gQVzF54dBvjPPeZ5G",
  "key1": "2xsmgJa4bZiLRqFjj3vxCXqTvVHW2NvCFRhAGFvcvW1gNEGJQ6q49nhXeegksquR3k1u4S36mhfLE9t1ErCM3Td",
  "key2": "3BWvsHninW9zkRfPDMxyuyNpSr9W1xc3avi1Zy9jvNx4mhwBRLrvU3ULSuntVsGnhA1ohrg9GacGvXAvSFA74t8D",
  "key3": "39Khem4MwkUB8URcvdcZ49Wk63ozKPd4ThY7prhKM2okoHppWn3D3ewVhNUimxmDWYwEYwMmZ1caVtUSLKQbREzC",
  "key4": "4BNrpnp6qNcG1dvdZQ1ngfc9FaRm4HCqL5KTpvA6RCK6kRzynakUQdVwBaQYfM2T43coXV8g1V7GJ5EW6NMm39Jg",
  "key5": "2QeMwpm7nv5JR7cSf8nxuVUBixPo8siBjuAY9uEVsN1pRH2ffV9DQtZiHA4keYBHPPdyGkexaLA4QTEKhMrb926P",
  "key6": "4gKsUB86fjvYD6dSDNKD9XTymKKofBJ7GF3UBfQAS5hqutUhuFb8pmCPz6F6qacizeJboUn3WmgabyGGH2G8PR4S",
  "key7": "3zK9LmZVB9XvuUqHDKqfxe5qLXPGiGhU36ty699TnSEW9CNzLxWiA7nRDf27HVaBz79jD68DBm2592wmYLf8prv3",
  "key8": "4fEXArqaABFyPE14DyxCFwk5PvoPEiQVWuNQZ7bMNarmzyZzvHJRMg4yFNZMPwUmxMndiJpqNWWQWWt2FezBN7Z3",
  "key9": "2jzTJNTbPG9hY88A5TpGcpiWtpsD7ktNfVEpEs3YceocXY8M22aqXhT89qbPyhGNRW9mUsiWfB1DJ8i9N7zYiNHD",
  "key10": "2faJX1hAo69d2ug3dLpTd9Sbgjg6N8ECTeJruy2LgHjCC31rQqhfWaL62UiNGynRbo3VgPDLM53vf7mAxTvXu6j5",
  "key11": "2bG4W59DPReL3c9MB1WPRe1eD7Q2wkUuhpusqtC2TtrF4SuoZFqnCbSCcEz9KQvZzKUJ2vBpYdsAUAEVdVr6FeqP",
  "key12": "3SnHcMFxqpaSt4hh4LJkiU3AmWUXAM3RHLHHvh4NU2GceJuHWFWk1wx9AHfsWjsAeH4ReRgfWrn3S1zGsS4TgW2t",
  "key13": "3kL89m2VSXSupa2SgwrCYnfcGC8hoYYfW8xXYg743j6M1f7hbDb15KffUXGAT5X5m8g2kN7E8SBYPSYGLAzp19bU",
  "key14": "3ErfiDtFAYfUYPGPrCrMZo8XRYX29DP9xvto3io7AaXw6s1dokUvPkHLUwZwYyq5BWwwppmKJGB3aC3yV5qZVjmY",
  "key15": "5pGB1ghBRhSmMVdaS4FSSq7K518Lo9ozmVvGg1jBW4aAuWJfZeSuQXVho3eGbRG5AQ5oWmeLNDTj4f7LkBfqnUEF",
  "key16": "LUSiDaVatRbq8QCJHYwgj5t9UWAU9pTKomhh476kvbRDqEiiKxfAf476BnJtPfEthymij2s4BQN1Py6cAKHXVQ7",
  "key17": "je51k7jR28iQFXjawhwsaE4UehkGkx2Ue3RQzNGE2LhVjpzQJYNqjcTpfRngcPSCfeNpUSBNgC27BJhURVWkngm",
  "key18": "ZQicpzU6p83UQkhWTSCSFM67Ha3328TPKVDYV3sK2WxmT9qtKJWUrtzLbBdtZpyjqt4oYyyafhNXtPN4oWegCG8",
  "key19": "ATYK1Y7Xue5z97RUL58XECeEBAd1b8G3nVstJMtjw4PHXeH1D1uwpyLiFMvMBueqP6rytCpjFjpk8xMuZpmgE4V",
  "key20": "5KyjpAtxRD64iAvY9rnGbYcY9xhtp5o6gabNKVwE7p5aNzv3xPvkxg1kVZfvKtfKQqwCoc9KLUSxiDwR69KSDpF",
  "key21": "2d5Byg9rQMJ8LcdcX2xxBvZZE3y1NV1CEpViKtfzuiN6somvVAXciNsAjohAkcTps7R9MGpuXhPNf9qi7yMFN5c6",
  "key22": "2qR5Y4NNKycbEkAsvZ8gzcNPpq9aMCF3Qt1eUqkSqCG1T9MXcTm9tujgc2qzocVabKDXsXaDCeA4LgDvEtkiidQ5",
  "key23": "4DejEurDmxLBYKK8Jx2VmPF3YT6AZvgDnyXLdpa6f1dr1S97pz5sajp7cVtGe6qrWa8SAHivHdqzK8BuddyN8bcJ",
  "key24": "4buuz8nyzndjKtCNGqR3DMue41Fv1PVphfGefoNoy2BAVmyWM8j14gDR8xJGMtsLv8sen5fNEWiHPekNj8XD4Skk",
  "key25": "275nF6c1juLkVbAsnfVZWkfBmKd62wMEUy8TcdepR5MwEUv6JSyQbNmyFi1RKZrLAUiANsTU8ujAuh2xNY9ELHea",
  "key26": "3Mu7DoCQ83dHjCVbABg4jNyQZASY3aCcRpBQhbTxzyaDoKGwrVg8v7zp7HAhn5HSP58YhYqksobx9y6EXfyHsgPz",
  "key27": "4wW5dRKgjAJEip3y9xh4YbDNegTW5ioY1hsbw7jdyFbsWEe3HGoeniruWD6Y19w9j2Q1jQbCrGXwQowHZ5r6tX9e",
  "key28": "4L8a6t1tNbjHn3okAotSzBKKxxYduvpLuHT27s9ujryTigaZcHxZE4cns7D63nSZJETPwaqvBERZmzCJdUSb4BTf",
  "key29": "4P8hZuyL2nr2K16mV2rMm5GXvG2nQBpL7x13tZDALQcHe1SfKDVehLMyxRAQyzYpePpwMzvanTFS724tXJuEUJhq",
  "key30": "3DUHiYsLMCUQRN3jJmunHpoiVHyZQP7pnznZbYjLBLSoQNYYpxbRvq5ZY3zNSv1AZr4BoiwY682uNe8RznUhdif6",
  "key31": "3ki569y8683DpLznTWdL5miULGjctmkL5ALiSiAWZcr6XhJZMo4qpVbkzFJq7tjR57ksYUVjWGLj45o71qXLdZtU",
  "key32": "39GCPq5Pa3G7QWN3SxA8C3FonaiLgYLfLmae5JB4P9Crq5Wq1u98TER4pUjx9JoAmAGA2gWscRDFvuz7iyzapfPu"
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
