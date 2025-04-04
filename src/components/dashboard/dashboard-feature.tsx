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
    "5nmkRZoZZ1kHZddAAYDbzLfDtmCPUFXewuHyHwKgz22SBeeivcQz7RY45jMJqdSMvtYYutUDqpH8JBwZRCy3j15w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yAxsNtuommt2ih73rDEUV3mB172FwxYETHcGLL9qoxTY99tY5J3VpN6g2nxH6EzaNmnjsU7bkXF78Nmg3Vjm2GQ",
  "key1": "fSNQpTyg1QB1aoe213bwqo5qGVom5V51udhadGiZkNijLovwZLbSVKASbPX8CRcqGwhLhm6KwFw5iwfFtQRv1EH",
  "key2": "5ajKZvuKV15QfSQfmjG8bNuq8QPw2YbxdM8obtcbf7i3yFcrefpacjGHEgRvMAHvC1Ax8CgzKttwGkhRgaqgnwsS",
  "key3": "5NX6wH3dtdhAziaY6osqSfSvcgzcwgEskoyAKherv48DY8HjrDNiPoJkurphtf6SbN399eUkFfTeWbtjJv5xhpFG",
  "key4": "5hvtj8eV439wyjvpibJxiGYwYXJRPzno9GrfWVrcVoDHrdLLkpQcDgumZv9jJ6PoPYdpecLQYnKzc7XeBucpuBay",
  "key5": "DSiqp4b22Y2uPXdR2QknvPdq6kRz6n7FdHFufa2M112Qrcqqtd4P1kJY9HcJxK5c7QY1TGDE9Q1wjtBS6GmYGSK",
  "key6": "3GvRFVKj5a7nG9pnN8zPsTW5wFBkJ8W3PQbQgXjg7wPaqEHQeTeuZu7V8LKE7cjPsvyNPGu6u6v2wRazhwTFxABh",
  "key7": "4xquTRDd9s72ZuLfj4Pbz9ADfx3BBZuLzhgm5a5oGJ7ZKPjNmouX2cXbTVNCd5BPgR2VtdmBS2Fvb8wr8YL3zZbX",
  "key8": "3ftBWqGHvbcTb8ETNUYHhnkmKBz8AfodTKnpefgbTCpuL5JZhj8ERnvJn2U4QsQih2Jt342Juc6jmw1xuMfLqzgE",
  "key9": "3KoK9p89A4vD1V5CGhH44DtkCYvAma4NdzWLu8EAveWv8umemBPrUuJVQYUm6FjpGJ9p3ipnRjEC28sqpkNeH6tN",
  "key10": "2PjDpDXUeTMNuTza1kLGC4UE3qrF55ej9FZurR8L92QT17H7QpcviMmvWjqU3tv8PmmjscDnsgvk7peVCJpwjJQd",
  "key11": "5NuQ61nC8gDjHXLr3Y6YyKom2tkdeR4xEk8eipUFFZj8NxVQwyjkUFwwKjjGf2UkSvGKBfJSUEBtnpzGTUEYrnAU",
  "key12": "2Lib6Kc35tcuyz8FToaE6vo1ic8xZVNzSYT4AD9x12mhEXyzaYTvCP8Y1Q4FbCko9pcsTt4RJNwHGJBXDGaMkwrQ",
  "key13": "3TTP6yc4nkXpNt8f6ZUVL6SjDnfNP16uDae975s866vaEnSQCu22LLsshkqXcbf6FW5szbsjzG2ZKHZSabb4yBGK",
  "key14": "3hsE556cYcLGgG3rxjKWzq8FsMVNmToCaPVBLWqYgaEBnn2sW1vdAHw3uszfofLW26oFy2Uf8tX4uD3WYWm2jepo",
  "key15": "29M7GEgAxFtgtf8w5hECCQ4PMkz3oj71VkdZ8L4sut8cZJ7WvcQLH3yEgob3DbQJ5bJgpUw5dUu8TB5nTkTpepDR",
  "key16": "5Fdw6Li7e1KzeuSnVws2Rru197QVrFsiAZKF35DPPx7jFxPD5qZiqcT7dtV7phefmP6zCGMBiNDeGMYJoWc3y2UD",
  "key17": "2rLFVCxZ8WEeFGB1kbsDaaJJeo2cxKkpviYgQ5rrBgN7dbdXHnxeLZh3zGnUtYgKdZ8D9aetjXAuyB2CMQMtGCRJ",
  "key18": "3tgtvEvAc1a7zi3NBxc9aBVW5ERrgLYwmjnZRBeWXxVbaP9v2fb1fdwWR7GHAhvPUvuoi71KiEkk65NpjNjNfCmE",
  "key19": "5FsThCvCFfuXSLJU2gsQxpixfiUSBTe2RLi1GeSizk2m9QbuyZ3D5QfWBDr1cnCWfnmJYhamgv4Unmm6MyM4tgqm",
  "key20": "3wJFSJHgM8xBPquv6Ny3guNLNQBN9W5dDktgZXod44TmBuCpjv3GaRVMkG86VcSSULg7DazUwU58y52i35Q5XbVt",
  "key21": "378K3hFzK2AHXBJkrHehoAMtRW4x8Jd3jGhwM7Aa7LoAbmbnZ5oykX5yg7YNQwtVLrcVhFzkFm9JhbBTeBm3DS7X",
  "key22": "3AaeDfpJfeBcDAGZmEBHzhViDcyetcFZWdHCrV3CYwKeM7KJ3DLKKy9PXKk9K6kjG9aB8fF47qQ4cT3wHmvwf9jX",
  "key23": "V8ipWdpSHfCeT5RtfwVy4VKxKuMu3DRPp5yuuyAyGdyRQfVzCFkDTeiHJYrJH8SyVcLfjRurbuKhd1WeWqK5Ck4",
  "key24": "4bijPnoYpL1uwz9hXQevEtrzAbUtbJfsS7E41yrttBfbN1pLzBudpKSg6SKYRLHcMTdcWRnPjWfSUdrTiYKA3Qgj",
  "key25": "2rvkVwRUdmsiSKxtdb5VVqxFt55G9JkyhAfgw5NaRVpTzTfr7zDq9UUErahXNcu2jb2mgnXvha1284WzRTpURQrz",
  "key26": "nE4U1rKs18QoCZ9EYgzATEmYpYYR6Ntr34jGePj6hE5SGiPoYGKhJBYfecMBB81LnhDWEHBo5ChfLx8eAC3C3os",
  "key27": "4zPUJr1uhfDodSJjdHmEHzXwNUZs9fTY4V3fzYoy9wCcP1Pq1TEeFW8ne7rpWE58YCyAYYHkSumhKmvZs5GgwacD",
  "key28": "5KS6ywbBkXSukAM38r7GkcfJEfA9fXuukU8goCrFsWHBBgA8c3SdfPJZakrnLYg3qihJJpkX8GDTYNpeLqnQNKaL"
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
