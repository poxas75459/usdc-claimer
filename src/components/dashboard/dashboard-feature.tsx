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
    "2SCMEwSNe4ve2hjnSTxFtcWNXW7pkFeiB9cFJdrgqp8rtHFKXaFR9rswEDQL4etKQDzB8hFSDUCo5Xzu9cRfuXKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Meu6ARYynCVP2BFtwTWYE7pncBbutZ9YkDzgE6zvEEQdoHqGDYuW7iMjZ89cjFEcfeBbCRpBMKn2ejh9c1FjqU",
  "key1": "4rJVfimodPSRhE1BNYjh9fvJnodJt1N16RM5vBWxFB2D9j1JGcmmWGySepjm9NTFAMPzQwJjLpPMVyVpse2sMEaY",
  "key2": "2qf3ZhfQaRLw5kJS6WY1sfcbPHRxYjJVp6g9Cddyb3hsnn9eeccmacnB5sCs7R35DHwVtddPRuK7F4er2iNoEUiH",
  "key3": "2cDJYWhTzR7tGEvAcbqavZiRt4MWfvQNNJ8Fkdua3pZE82CGcg2T28AuvpvwYhjZhkwjLDzH9247xGUGDt6r2LuG",
  "key4": "2ztjRPtCatgKdPVqrf1WM2dCJt9BTtFyeJbNRKccSVXFCeehf3tgZRo7Tex39xMRHUXV7hXbpeK9SbzXiMVGq8GJ",
  "key5": "4vN5bBuCKY997ggh5Q3TriHtimsPME1G6tuQjGAqDuj1BtfnGdnxVhyoqAU8C3J5huCyGFZ6baaF93puCHAVSVKq",
  "key6": "596mbhEKH4qVrkgJVGz8wh29yKf3WB6e2Lzcbhd1quagXHCX1LAASNkmDoty3LUhhtKvFiS9MSApbWiTLJLBkUFU",
  "key7": "A25Ntppe3TLQZneHCmDCgVKhak5ECoGKjADxvwUWvAMB7MdJ2613ZQbHba39SnDcUyq1rQtcLBx7Q1zdFDrdTvz",
  "key8": "3EvkQvwHQjgrcyERPD3mxhtuFRV6ud8XADvWX4RmjQ43htc8kUkWULeVYfHqPViyvRb6uBEFp2qkF2CZG1xEJzj",
  "key9": "4hSYHnWstd4yLFZE8qtcvUxmU1ZAweadthfMNmFcjuT4QTY3nneppAMSNvWCyjyzVti2qouQ8fv3ksX6DaFpaCZR",
  "key10": "2kRyGSZqrPqHC65XpYpb5BuAr9M1cLBxMSiPpAU9BxXv9BEjAH8gFrTbGrqGpQeMn5LtiQLtWyerQicUVuu11M4S",
  "key11": "3uydc9muAw16WBDQD3meb7yHARXjvHHHS7EFrpQ4nH9pesBJKLEgV2FUNBWze7BFMW9bFSoLXuvNaj9X42WwJ5hj",
  "key12": "25Yxn9dUmQQvbPpgqbSP3KEhb86RzCn17VBHxsVx8U7FoKU9gfytVWct3emymQVb3KD8EKGa134gum211GfgLDu5",
  "key13": "2EYfziSqRZv9gfALbCsqCRcTFRc9haxSgscf2ZA53iwZ5YNMkiqRD98ScQkgu5juc25FE39aA9PvzKamBVyDpewG",
  "key14": "2tfTSMAxUtxs9LURQmq9c3iaSHB3JjEcSjdpeMYnCg9zdYbGU5ea8uL6nK6coYrpHzzPvzdURWaTQfRQKwguLqsb",
  "key15": "MSqKWJLLK4HcmWD69aKywpu3UssnH9bUdmJ4Bb8k2pNPPrFRYeHpvZVtPBYDT9e6dT41cDfDGjZvxmhsP5tBXMJ",
  "key16": "64Lwpf2QGcDEQBkS5hoS5wpFy2xLAZF5K6HWyX9Xtko6L1kBb8hLqztX5EcECkZeg1FmzNNm5o9R94MkJ5EiMJiR",
  "key17": "5W8qa4LqPQSLGtK3UoLqzvAqhGsWvWnfLNRU9j6aHF9GZMxfC6DjPRwfCbYwufEYojUyo3tKBbt6faLSLRepY7Je",
  "key18": "6urjp1WpBX1wRJMoaB5vEm5RGx2X1EXEemqib1kuTDzSoA2wQ95dVR5Hoz5jX2axx5QMN7oRR9Hf85DtwMhfb56",
  "key19": "2vnHSnUESHik8yBtf5pHh7cpqSMrX6D7n4SD41LGZmVz3uU1BYU2LYcWqEVJ6eqMcjPxNwvyv33ioVY34RotUSNM",
  "key20": "cQStrcXCXd2Pne1KpMCQHKRY2EyfMK5kuH3k1mthrYD7bCbM3fjUGWQ6eBaxaNN2w1GzCwSfHyz4Bz7V4ftGG4a",
  "key21": "B6UGxxybNapGsYSPm79HLNqtqvpCqtQtjacrbVXV3hqykSUeupAtk95BbNi7T1aMoP6W5qYNWquk9AkkZ8hAa9c",
  "key22": "4ZWHH8RpPk6oJULas3muaiLESYHmXLvCq6UhSc7EHTJUuwhP6Ts3AT1ZzMsLacse1NYxwJaqHZQNtqjXDHgrGkQM",
  "key23": "3iuURkUZ4SeaPBg12tiiEUELd7S1k1aQA7PP7nUDxu5YWwvcRoi8bcrYTj8NrBdgQwQjVwrH29jNmkiKoz8HjJtZ",
  "key24": "nkJzdB33jWgazqpPkn47vPPhvAhPoFpeK8Cds4utnGS1mFYvWmxkNmWepRdTZ1kez6QMrkfEacsq1V1116CPQVL",
  "key25": "3v1ENLjxmRPz7MAY4EQFJXxRh6RsKSN4bg2GRy4kSdetVpJcKCRLFsPppahURzGWD7sddNaa9bowLeS4jm5McQWS"
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
