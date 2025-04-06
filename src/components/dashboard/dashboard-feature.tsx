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
    "4k7tMofdDdWdMDu7x56Xnm1QFXhWxwu247MhhtHCw5EoTmz9T2tvggVSmuwKabsHFLDc96XQ7EqAiJ7UACJSmCpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gWfdHTi5JCqCA1dDzXfB23h5QoKgVFSuMgDiKfBurHTAyZke2fEmEdHXYyxh2LQ7nVBxFwv5oBHCrWVfByER1Nh",
  "key1": "Ljwr5FiUqc5y4zbPZKyH6zkAyRk6iVYzwbReksEdcR4BGM4fSxBYsrq3CaAEyrG5K2iQT3btEx7DGX3RDDEHbf1",
  "key2": "2p1sWLnVQ4VHdu7vJ9SDYaunLqG5fg1XwR8U4henx2dDSmWXFMR2ChBMgX6HV5cU8cRDQ42AmJ7PQz3ixeLhC2x8",
  "key3": "4DnqdWWW3qYUd23oE6XbeaaGEUC2ngvJUayHV1RamPWcw85SBbSyNnFqrcYPdMCivehnEVPzPMjSqJ8K39iKtFjm",
  "key4": "2JGu4y3wktn81JH6K3PH3f4d9kBWGTuvzu6YuX7fT122tLWcXeUU4781Xg1W12Qh5xNi5uoAX5CKSfQnSpswmkiT",
  "key5": "XW2mmUcp33y7NLNca4rWf2TDmD1X4aARoyVYyr3afGqRgRFtsRfiZvbj8nAv9AewBWsmedZvSTPaCY6pgXRGmXJ",
  "key6": "2WRsyjCdTtHnW3c6wELnvt3zi2GSS1beoeonCYcNs7R2Nnt8W37opJ64w3cm19L3hBdB7Hz1oF7Bb3YSFEh25Th9",
  "key7": "5jE7Y21fkQ58CTQAVmRU4MPH31M8j6AJfwdR3yMUFCPxNDeuTdMZ7Rb1jsmtQaubrgyxgd42rGCyTGzT965Bx5DL",
  "key8": "3p464dtLDV8EVSfLcwSWidcoP1MbLinEPhL7hxQ5qHaeftJbWQ9fBPD4HuHgtkcJYCWuPdd1tKQrZVtyiFizELbe",
  "key9": "5MB6CYSf9dyKkJmr1G8iMsHTpLaFXTwYswf539ge9Xk77mJ1zkydiWjKLhMBi4jAVQuxNUe5yFKT2MmLfAEdTEEd",
  "key10": "52kz9eDCq4Pdj35qupDB6qdNj2PpCE2wEAmX4QDVbZb3JGAvvHvvCVo842EkjimYtxtJwHWhtzfW9EXpcmsvyCL3",
  "key11": "5r9PVpVTU7UeoafgVatTNCGKXyYyoVDV7ZHaymaAoPwceZdHRBq44vzSTYSYscZw4rChQXt4sEFWNug5aMpJKwiY",
  "key12": "5XinGNojvYoFJj9SnkoeztDvjH6dms2aZ4cQgzNpWWEM2yrRA9PZsVn6RAHx2eVXi9pCMBawKyeM8giofpmrJV31",
  "key13": "5SUBcLqK4AUHdueSKs75xLYKi74bwpwzdov8sqqMvN6u8XVvrrDCDRBpEnThU72iUwiBjWzMKgnRA4raFbugNmsX",
  "key14": "2XUWUT5UfKkTM861ea1MMXK1FNuyjnMk9EqSskjUQczxdb9RkT8Es1s7mxSEBhEL3k4ynjAfxaDcFLgFqrK67sgB",
  "key15": "2h1CqQRyG2kK2TFaHwA7rLrLB73aKrmFUa1Six39fEe7Aw8tBgYC9wM8KiP9jDsd48Zn1swnhVoV91hRwDFyfSqG",
  "key16": "3FKaNUbkqprKnQDuhiwp5QAsFV6CjvFr2nbtBEK5n9a7D6yJS84CfVikXbtMtfEoqGtAzh9nBUV8dDHbwMYV2Liz",
  "key17": "5JcjT8kZzh2mrcLLehHin1in1vCBLxBnmANWojmaM2hWrUJRZckrLJvAWyaFTm7bzacSTHYipNxFJQ3ZEJ5kBDYX",
  "key18": "2ND42pGqBvBiPEvVNpBESMWmkK2hp9Jpzitx44r6JEt6JwrtaSDabbbt1UijbLEqN4gSHiiveWu41Twy3mTQRD9c",
  "key19": "2BrcL2zjCsmxLeZtjS2ehy4qR4JK2kY8N2iRGXaVYwLvVfcWrbV4eLjacDSq3JRUMwte9DbjvUBaRJD3WmGDB9N9",
  "key20": "z5CFCuL7WwS2qNvBPb1m4UhoA3n1wZt5W42WAbMnGxs9bWLmJqJy4C4AxoAcZXVJBY1TR4LDUQCFR46CzpN2zdL",
  "key21": "4h3RZBavBrwfevtbuPagQm6khBi7ZNPvZJcjhjrascGZrEQ4P1jcFH9KVfoXyMytAVBq4ymUR8xJQY8kpmMyCXyE",
  "key22": "5XHLydmdpnRQ2nkTUTtWqUu6aM75NyavPVgSdSUzvgZj27KsiuteDiie6a8RmA6HQnzVsmvpUFkMRCUT6ZjAkqKf",
  "key23": "4466Wcd3tmvHgdEQkHqafPQGZ9RqFYdK3oqaLXPL73keapdhf1fMcVtdPV2haay7FmADDpNw1KKY5Qz8SaUWmFzy",
  "key24": "2yhTnXGhb4QhyBnToE3fMZNZiHnKKtxJ5SYYZJYVqYhpsZCEqZdreBbkcaW7XLUJU9HhFodQwxpDq6Ua1sVymUos",
  "key25": "3D4ZWncwsDZ9XVyPnihapAUHBuvXwRf9iUrynX169Yvjv6t2AMA93QcaymKYzfY1one8yWnRoDZawYfZXsDNgTTa",
  "key26": "459KcLJeLCoq1whwjXkERXzyHScQ8cmZJN7dUnqnhDC9DirQ7kfoTU6C7MEDGV1haXfHCE6X45HXeJyck4391GNw",
  "key27": "4kfCXiXLT7HvxUcbLQ1qtKfXd1qnmaZRtiAniVpu3zJH6eioVN73fNLwozJzT2QSbE8e5Mvr3vFQt6vimKX9yLDF",
  "key28": "3x5ZXaZQrAyGAAASfscygnhhNhZUs6qYxGdTnt6U8U5sQNwaZJRqB4CoLZmpFt3Ur25GrwNweqcU8ndPxKnTNM6c",
  "key29": "25PSfG89VVnwqpVW9tSZNq6UzQgfgyVSwHNpmwvAWyKmD8UbuH5HbAcPJw7iALMYT8D7NTqoDAXtG6vqwa2Euf2E"
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
