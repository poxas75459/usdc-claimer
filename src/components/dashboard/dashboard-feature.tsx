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
    "5mkETyqsrBcH2QxGU7YR8cDZ1bT7sMCtH1irUKhgP6koL4PWP11JVmYfmLkPdQTaaYx79MFP5oxUhAXjPQzm6MTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26cDsSH84QVVVeJhgL8CwzoALxjBRBmjuv8e7H4jKNKSXNEi8EhUDahyHVQhrDVpBbaKnFLTgbwFDxL9gsNAgLiT",
  "key1": "g4wVTC7DagN7RoExE72nGDuBg1xAiwZ9VpqZom4FX2r6TREXFBcB4xG3NpsogAu1n8vfHWcAq5wFh8xyi65MCFx",
  "key2": "5mpu2KCLZGEAkjyMvs4A2joWH45Mww7zGktFztiKfZ4gAsPKaiMhZP9kZjusoEcWTmDLeXGuTCvc9vot9iXs4XEu",
  "key3": "kU9jAaqVxWRFif8u9pqvk1UrEUb166tzDMXPpBCXWpxKmWHUVHtjuPbFMKaJNoLNtByC4qcStq3Cux8HWNzEc6f",
  "key4": "2MityLmw2mSZ6XqrNXyKxRxtGQJfPP3xpco2mDDGV4omu5BNcHZS2CTCbSNSUKJw8QbJ8RBw3UgGLP2eCoqaJKTh",
  "key5": "3e5GqjoUFvKxNEs6Ujm2xHGGahi4ZCgXAuo6pC1YcchVRJS5DewoGnyQQd9orunDrYwzm21x34AixLuya1sfxtQk",
  "key6": "2Db877PrYXwaD2qXX1v5UVWK5HQ4cqdG4ATuwpH5G2Xv2AJ3qTb24LE2sowjURtSWoMK6TiXminYTHgghu7ys9Gp",
  "key7": "5yuzu7QjX1ufW4eUZvt9gmJdnc31YdmF5Azr469MiRuJaZ8reHT4TGY68qsGdYdSSmb6HrqVc3EyopvQVWVrQTBQ",
  "key8": "5ndJNXzWkyZ3uYUPAXqMGndCYYN2crXyZ9fuLXfbYKuJfazCusSWVrxh3RamjbsgqnPBQJANq1ZDSQHcvQK4Mn61",
  "key9": "62JGqQ9nNxRrXD9QTrgjNug6zj9gPHLLqi6PNa6NqCoYHav9apAEjvbhcaMSdPNcYSA1HyFSW55Cu7yLnpCi9PuX",
  "key10": "2WdLGDDjUZQQQcNpfQ4uefcNwgUgXHegiwYrHoLthSwgESFdiKmNv1qAUZkHf9qDpQ5isKpviVqPqzJikK3jSird",
  "key11": "4rDYj2JTfjpCPKcrXS6Dh7ZM2jAY8escETpdohWNuTCNKNctvt7hMtxyLFJk9xDoRCm83VamuXMrxfA4tV6dfDxd",
  "key12": "oRpRpiND4KxVMsuXY6rEXKEDZgfTXb7zEMEMTbx7BQRo4BL3US26GPZYdwBovSLLWSDLa7C5nqJveyZ2J7FJwqo",
  "key13": "2zS9A6G18qVKUfVvJz5h7zwHhuij7KzgJex8gS1rwXQzGwf5gfXRnZr6YnB5jvYehb2hMJ8Tau4acTcwsSceJvTm",
  "key14": "2Xd2Amr2z2r5fVJ3B2LwvgJUAA9LzDzodvFyQPnaX4QgXRdP5Mm8vRCWGj3gFhG1vuAgD1oaxTo4Nx4xyYQtfPaV",
  "key15": "23MaPg7B5hu8vBa4hDucj1KWhTWk7wgTJaf9pzNVumVkYGp85MAVVLJ29cd6nhCh6o77EBxKMC2kgcVTCMJVt6nb",
  "key16": "aKZ4pDGwPdKNRMtPEyDGmJdeNWo1JR3cbXU11wiz8eYadUYgXfuUYWMS7GCWFnD1Rh8f2kMaVDw2gPHYKCNxjo1",
  "key17": "2yas3kXj1U5MbZnRWeD59JpWZUPXaF3hQQvcWEPw2Ggdf1brwYPnZQ1RGb8Kv4LnNh7JxJqi4pLV8MrTerZpSoFz",
  "key18": "4N5Toxj71BUrd7akZsBL4sG8bRsNQR9vBEBviiW62YhuiNN1pXqWeK1vF8i6rbx2c1eeTpaWHaXod4HzWEMzZT1f",
  "key19": "4odD19R9iN7E18QfGnGPAvRjVBoYHnirwLdh33EmCLVDroehBbmdLfqztPhx3JyNpcwuihMehwkvE7U5728H67wj",
  "key20": "3S92jfXaVQUijEgHHY8KKodBem6Jy3mRxU3V5xHASnEVJqCLHRqHrddW9WzjxksNkkjH9NgHDijGCQu1rZvhMcuR",
  "key21": "SDgQXSFw1nYdVkQgKYit4jhttoPTCDkfYgZXz5AX5pNzWXpy564HH6FpPUQ4wPoEVYsGAT5FEjXJSQQ9hg79WA3",
  "key22": "61sHEqgyHLsnuN6vn762ep38e7ATWMcekB6EJBn468xRF4qrUHWmt3zDrAM5NWp4hGBEYyPCRby5H2g9sEYfHy29",
  "key23": "3erqfUab1rywNf7FKicDYXyFncErPag5o3v6U3GzYW6hdK7EVL2iqDrYS3FVoizrtSrsFo9o2inanEihzjg7Jom8",
  "key24": "5UMvJyWMZRqKJF7oH2Hgt2qoWPn5zHSPzd3F8kvd8QsnxGhRfjVDvfkCMzWLM85pAfBPQqFPRfpc6VFz2f12ax2v"
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
