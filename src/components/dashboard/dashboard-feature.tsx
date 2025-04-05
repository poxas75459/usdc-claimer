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
    "5jujkU1qK9WYQviRC4o6oPHnBi9NbYJBUb7YdaTtm3WVqHxRjzz6eFmmVm8AkH4ncVGAGPBZaD3bP5g7V7kNS8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PwqNzgzZKBYdpPXnHcW1jWfMYuAUrnYbk6AQuTMc6EtRBXHUkrv92HXbYJsyfaKZecPaKNZCjxEa3KFWHju2xBs",
  "key1": "4kfnD784kgXb8FSbZULaL7WyZ6hdQKTF6kfn2CaZBYe3MjEnga8X5MLz14FXifHEYiBAGKtofjJbUrnKLYxSqT4j",
  "key2": "4k5RM1LFFG8rNXTXxmJGKaKPi3Y9GZoHUq4wKzKYwek5TVBKUvxaWz9rCgNCVhzVod7KX6U8A45vLn98M2UbPmDq",
  "key3": "3Gz1ZBm71SEqLV4mTkC1E2TBHTJevLXzrwRVYHFqabJmeQhUXtsPdWCxpvE3CKNXKDaUk5VyBVbRH2XZrNhD8B4f",
  "key4": "4CTnDz4fZLfzU5kADa6VgebPCDBeveHcsBSV2AvcdcnKdSmPQ1hxyFF9pUGmuChqLkLsW3MTY7YmoqXKhhRmyJxk",
  "key5": "2X8NPNzxWpsPaPbC9FE6ig8w9nqGe9sn7KiUYfD6GnbNUNYkLdmkDPBftcBUiChhcLrB6fZKuLA64EyXifoL8t8C",
  "key6": "2V4JgnCSAZJwHxUZ7jQNQSLjuBwe2tg5HmKk4GTfdzE8q4rNyTbVgjKPJoPaeEbTYemd9Xo3VEYvAFDaLADQszjw",
  "key7": "529jPVeh6pW3rsWimsVqvijn7X7S5FjTDpK5jzAed1pP3dwPryHzNSyZY5pCruKzdMYgXCXczcj4UJBerTfCjZW9",
  "key8": "3zi89V7ZLJMi7yUsed8JzqZjJRrjodowYpvXS2mDURNkSN1u5pZkcPYU1rSPPaXy4xNye6dXxBbViLs9HJ9NunyZ",
  "key9": "2nRvCFAdZnnxPUtnWqRUy7vhCCFx52qvJTYTyrgBdrzNH3hxkQ3u2x5wfJ6GKjnPqjQzCTVWJrPQySpAHLDPFarQ",
  "key10": "GWBidmRwbkuC69k4M4Fd6PBrDNAmZ1aD5WNp8fzPwCv8fCcj2B6A8pGxWdgZbQUnj8k7zNVewooeGy7kktb9zNN",
  "key11": "5sbCzE7ZuqU59qXaHcDw7y5s9bQ9AMrA2NMUrf68SFYjJev7yihwLXgacQmMhhLKmfS1zdzihm1fwjn8JGWNkeUi",
  "key12": "63RkcwK33VeJUH1wBaMpa8rnaGAq7zWRsniUW9y9HkPhbDNvSJybrcvaMrMVXwePipWzTU9Y3Jzh6xKyM3ReXPct",
  "key13": "2wqQkMkf5HCckMwovEqdPfQyx9aNdssbMsgEGEHAJ9JNB1JcUQC5XSM4fC114JEu5ai64NjahqHDhWbt3gYjKpQK",
  "key14": "2WfCXM7s5Evjzs7JQWn2e4f9fGfADyX3BS6GQXFbnUSSEQGFFvDCB6emZLgDEBeLEXoPcoWAnXijFEd3pxvBswuo",
  "key15": "VqJSC91i9dWqQsoYEsc7aFKNhkKiVGYnkaamYh8osGrDZ3yacKbWGxQbbj32wU9E3TM61NxUvXwkBPrDt3ghvCH",
  "key16": "3q5GDt7bGMET546mXX6RWJjhWWos7fmQUVcUMYrcXHWLZ3i4yQJpXDDwozQj72x9TXAYPDZvqgUPDRSCYJrTxozG",
  "key17": "2RSskdLNdRv21kfrTuRDwfQEjpZ9YroHbNH3WxnMhHTj3Vb94umjJVufLRpnPtNeYRn5uQMHYBT7XNE3dUfmstYx",
  "key18": "62vV3kBs1ZwQgXSvhUEkHHc4c6H41c2qGNUYztBKkFSjJoPFpjUYybD1aqt58wiLbHVv5gSBnU8NFuYhxChZDc5a",
  "key19": "3yBFzqpyMKt2zLR7nwxkZ6zuJGsNeNvzRcATEzqphxsTHH6tqEftS9GfNbtgExUK4pqcQ4os4bmdxkdrxYz3Y1ou",
  "key20": "5eppB6g79JT6is7fXcPZq24VD7eGdEAE9qnXmricor9Bi4V1LPUCQnhX4yYapkd4eovM67dSqwsnmicvDiBhakJM",
  "key21": "4EaFgk6QDBGu6qiomszRG2K6M8iq7APSEEPjn9dmgPiV3eRPzzsPsTxqUUJ99wcJg87RkhXU6GX6ptBzZTW9r5kS",
  "key22": "5gj5PL1VvJV9dDGuyRzT4af3eiA7eDyp4bF1dsMitCTAMJA2TNQMfvNbEMsWJoSApoMsHkeGvRmKRGvSkxUUvvt4",
  "key23": "24Ryq9FeMAPrcM8a84evo4TMUqxvsxT5xQa8SZBDLwCKDSJ8ixVpni1XBGZgtwqXv8PD52wSSLQcpBeSnJURRE9q",
  "key24": "dYV53k8g2bMRFNCY9SrRR5ZCbH2736Rh8mkgLuYWfnfLueq47kEKxuDP9dNpWKdM3NVHCyNZtXQe3SYt2P99bMJ",
  "key25": "4humdPixZVQvTKtZfxPeHYUcGAEMVMXwSmS3H848cwWEfRhrDyFHVbotKZ9ABt9vSsCvritk77KjTcBA3uGdxkmp",
  "key26": "33Yj6dkK1HaFK22D87t4WENhVKSBZKxwSBqEQbzTtf1hj3Zu66UCfYDiuWxfyZnzydomkKhWX3TECYvqcxtb4MkH",
  "key27": "64AmA2pGookX52hB2cHmD2KUALkPartkmK6KTP3fdckLwMKB1BKJM9kCowZxcpeb265MWHUkt2DTQiDYKwLyEbM7",
  "key28": "2d93DRM5ScKj82Btfmodr5hUZH5uPrrFkBGVKaLjU17S8AdyJq3CF1sheR7LJRAfWEvFAioyn7W7VtRVi6z8ETX4",
  "key29": "3GvNTTJwBo8wqGsAQNu2WwMHcGtPLJu6dxRZAW6fuiyu4AZsog3sw5Qh61zo6HsxwpUhvxbFTjQ8EoQeuJvpBEE9",
  "key30": "2WBxs7zEAKAjLZE5pqCNMXpoKcERDFCkrhJngUWdxzvX89tnhCdZ8Smu4PJAkH4tkaEu3DKDmtxqBLQujXjVfu1t",
  "key31": "37SSi5LPWgnXHJdpgppB7LLfq3kGd2jfwWiNsQQseQfNsrSg1LQDxd8KHciiJ2MGkBJ6Ebtetj33Z2Nyw4EBkc7y",
  "key32": "3372gcNJQspvgi8PChnshx5JD5z5tGSHXhsjgHFJqruNMidrQC41fwsUBtV4c7djMBhcGijhNG5wru8aGLCZSMgi",
  "key33": "4cxyb1pKGtghgVVqUP4hebRusYS922zYm9LoNHLC3w23E3dXrzbCQ63T8JA1AAbpU9Cp6gPccRZyWidCHLCZ86uG"
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
