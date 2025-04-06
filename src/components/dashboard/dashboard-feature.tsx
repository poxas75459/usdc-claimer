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
    "4bfp3c15g1P3NULDqaxaN1W1B59vvjRU6drBHz8qYjseK4MV9TshZmuV2aj4mfeB1HLVonKaGmpMrB7bU6jHTeia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ex23JDcjBwSpRKwjwCXoX4CPRBRkKRpuLPNvWcBUsR8Jd1ZX2tpa9u2C299H8fwbErNT5mf2uWMc2XqSsHi2V4T",
  "key1": "5CDUd5mAo8VsTJs2RFGZ5YWeQecD5QY83tBykrRR8n5frEaceKDfrvgv8CtbToyXyGwYHhefPMaLVdajEau9JS13",
  "key2": "5ciseNYC7QFDhNCpHnSMuagKEsuTKvBQGnJwEQvhkPQZJJApc5sNpvZsYBqbRCB9AJs8yu2mPhRW3a3HmP13dwyK",
  "key3": "5tYwgSkhri2KsjmcyEPWzJWjBGE1GaGqieFZNoyAiopiJBUHf55oHbQhvR2HCN3RsubM1NP21ipzZWdH9F27ZGUJ",
  "key4": "C49ujRiV3zmbvi7EPGG35jdsjKXCFWapt6bL774SE8HLzmo3urY1pj5ini2FRAc5rg9japHXJnaQCV94Ue1Ragz",
  "key5": "RXozLhkDBbHoQFxQJj519aMsjRQX76bJXqzqRasDcC38DiVVbMehuMf1uv2BuyWReLpWR9K7ob9c429NVkg4Jsf",
  "key6": "3XFpBncaqSDEPtVwwTY2svW6TZKQA46FNygMGrFJXRusEQ5fv4cGwX8Rw1mPhgrNfiZQEqi5fuhtsDhfeEzH2uyR",
  "key7": "657sfLonPcYk3T7PY6Q3JgGhtMpMncnjm9fEN6ksuhMygjAynQsy1NU7F7dPW1G15MAA6uQACiD7upAssokEXwZv",
  "key8": "5Fg3uM6MEfvva2cqAQz4z9F7FuWda9i1A7apWLjBSWGybyKJua5gSYQ55RYP6pe3sVU5wGBUWjvEKBrnLcRfLsYR",
  "key9": "5h5bu9yu4bP2QmezTFhZ84XCVNx29xE9zuNE2jWqqkUV9h1n6JxYFzetwjXz8RdnmgnV2BX7ZeQ1BTzCesPkV1tM",
  "key10": "3Dkh9dwnE9UGNzx3aQ1V37pMQtgd1jGRBPVmaCiuq2j26Aam5r4WQz8FHFmeUxP38n9TJdMAD54X4oetbkWrhYnG",
  "key11": "5rRqMi71Wx6sYwri9RuSREkErtpU9Y4GS44j8Rj27wwWSxnVB3YNfGU7f9oQeMN2DTy2nBfNwynLb76gwDMUjrQp",
  "key12": "49LyUsCibSZ2111eP8AVqf9rMe7LTiz4pt7zBMAFvgEHKqi5wBi4PJwacYRaeVB9T3ZkmYvJrw9qEiXPCpdJFWQu",
  "key13": "3dfnSkzkS6jDE49ssvRx9dupbhWm3zKNZevdWUQM94okZpfLz87ACAF54PDwQ16vigErNBSwvDDooxFkJcDCxmhK",
  "key14": "3C3YJoZqq8wD6AXo93M3UNePgcRoLNFdhHH5hmpAG9XkYD3DhNBgSJLvPGgFQ1Lim1aCVTcsewJdQLv4kj7s9csX",
  "key15": "49Q6ZWZmoNYeC6VKeerghZzfPkxTyvu2cvi4mVmW56Zt6xqRLzrcWbDcemXqYYbGLqEXwNPC1TXzETasb72xywLu",
  "key16": "58JipQLkCgE2tCk9hQqNGHzECQAow8f8berD15aZS5Ma8EC2QkQbkrojSjcvfFndWZT5HK1NxNeGouXogpAoKC4g",
  "key17": "BH6ra8Soso63NoVxngu6CAdqJLQTNTb5BdMvFshn3zqqJJBEbTBczbhXydonACfzqz3MEvLB2XhZ1erv9q1oy18",
  "key18": "4zcLVQTyYnMMe1bbPPZirGdQfZhkHRPj7qVpHdmHHV3wQ6VfKfEBY9o5s85x6mZr2PnjRHTpz2dcfjVNjSafT3Cd",
  "key19": "67ewxgpEgdDgatigLeXoxdXLnqfh6Y4JcC73Uumo5PLXmegUR3LYpBcWoiTxQKrjjHiTfehew2axo57skn8bREpi",
  "key20": "5jGTZGWUBhPuXXiwS6vmrF6rmFJ4MTgYkWF2iTVrmyJ9YyxTAeoZ1ycGHeeUYLQByf355jBpmZyZfNRvUz8PBGWD",
  "key21": "2xoJScKQEF43GqtqaTBW9zBcv31a9AaW5XCuumDndeaoefN1GHajM2t2q4WTP4dfYqGEfV1nDbEgn42MBne9AeRh",
  "key22": "3HqKjRKxz19XTsvG9Y59FVDEdkninBgzpAjuVcfCCaTywYq92C2Yx384dzuezGTzS3gUMC4L97bNoFHexCfP6kQ3",
  "key23": "QPYjR6eHUzEyPhXo2HhKbebX5qD2RqY88bYYLXSQDqifq2tkoCqoXQUHnLjurxqQcyqVipj2hneYuhKW593VDWc",
  "key24": "38MvseW71prry2nWvqnwyGHcCacr1wRti1NzfhBfdpkJiqrM8XnaM3E3LGcDAYxxgscYGyZhCSbsRn29R7u38PxN",
  "key25": "25iS2mQYeybzpEx78QPYMxDq5AFYzgyNMWcjiBUEp5uvMWtfcEjwnFLh9zLH8iA4NgkSCE5Xyugs1AmU4UU7fCJm",
  "key26": "2ozvhAZETkuGTGn22ptwUvJasCyzraSR1cFQnhxKQjNyXupmZeduPBswxk96LEW1HENGGVqn96MDLfLELEpe8rV3",
  "key27": "2Etwor8Q8yULQB5X6UXRBGXD36XYhR3FfSKx9S885zKZxg1e1T9uWXApZ4SAf6CUdVuaVprvVP7Zzjt9PHbCdHGG",
  "key28": "56f1CXj7sPRe2dS6dWTa9ajZdNLcTAv8cwC5bq4Mt18Zrqp9gbriUiQDjviZw3ZZdAaEpn4yGkEyRdZBY6zXxN1j",
  "key29": "4EL9Trkz7W33Z2xLRF6a4PJ8bg8afDFcRawSrPKFG31C7377BAanjwg9srX4WaRDaHdmX7fXwWrMnqYsWSQYQfXK",
  "key30": "3Ax7VDjuDfEcuc6Bxm2WAM49w2xMkaus3uQ9oxqc9qW5QeunZyU5aY9DRU74b5QP3RY3Purx7RuXaTcBBnHivNCf",
  "key31": "JtvcAab5iagRD8vuULLRvgSXYse9poXmLHB4ztue57rp9tviBg9S1S4Fyqt48xYE3Z5Bio7DS856t2NDepVzV6X",
  "key32": "3t3mQu1cVe4Q912E1o9URSw5GEjdoHKZcn6XqMn84gAkwHZeRRGdxvj3UcvGFyD7L28oXYytVyLntk7be3MHCMHo",
  "key33": "DRB35qvPfCq6G9mC2qE5R6rdYjoa8hfhrdHdLqkJYU6FJGdTCQNcBhCfFtt1LyzaJnqHyuSLJHqPYNViiZw3hz5",
  "key34": "3huCQDGzB7dbt6qwp7KwGrKdR1jBxLyojagiT24eNfm3PHqFAHekpwzXmuQosV6L6v7XJWURxfyjsyoBZ3HUPHxZ"
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
