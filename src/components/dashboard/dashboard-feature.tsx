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
    "3rLTUiFVbXXQviWf5Liie9897ziMo6udxGY2pTMqZXVAWT5sGrmfpVufp4enWsPT489gKuzvLBEmmiuHiPnYjB4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U4WCuYvj7N322DKPWZG743JqhiBBJym9wZ1fB1Ff9dmBBMZK1rkC5XNgRRwvU9fVQAa1bJBhgwJ3H7dDFQaoGuZ",
  "key1": "4pJ57x8TFKV8AYmz5eHx4gXtfYSaRuFWJpwts2X9xYW4wEL7WQgP1FSRXnFDMLjvqPe3f1yQrrr77T3yewNBjVx9",
  "key2": "4u9eGnWAA7U3udN3H1uh67fJTf5nUBLXTSYKaNJZvArJg3kLNdRAjbZUcr38uPWKaF7nE3z1Ni79Gxv2Wwsr52DF",
  "key3": "mK6ypmdPXap5LWfkKESgfXHBQKng4rSQ6ZbyNow6YWqCzXyU2yXKNRd28jnpPa7UynTe4MKGMvJh5FwoTAJAok6",
  "key4": "2Jve9QpphueE94rpgGwmXJocQdEqhy4XjpUFkwS9pMjkPvpaKt8dCnjKdXUkQwKHVyxKQx6hyrrFTg7tV6nLLPq6",
  "key5": "4CaHZS6nnZcgY4JmU3EFJfegp8H4iVMheXT2AxWqDnMGw7uEqT421XRL8rW956zPsrs2zFgaZUQ5mtLoRGffMKdi",
  "key6": "365o5SqAzLoyktzN9mXNhpF5MiLSgtXowDPZZqz1aqmvL4dmRGTUVGjy2TPvNMrxYceFzctySy9fe8WYvXDUWhPn",
  "key7": "4AKUFia9AEFGFDS6k79YC7SWZY5DmZpwdbTThaXUbcnEmC1fCHAHV6v5rTBEcopVtim7331Zai9tWEb7MfXvb9hm",
  "key8": "2w3os8j31oD2LFqbBxcgsDkNjegaFS6k9HJ4BQwUv1nEKuMsLWNUbZPz6M8eoGdH71kvRpAFJqSZuCTpdCJwfN2c",
  "key9": "4tigNSYnQwztWn9wFf2qwNT3vBgmzmhvCtejx766mP3J7xbrA8T9RjeaE34GZZ5g3yH3SDGYCs6tSoUNBTGgQDyH",
  "key10": "5aefJ7FvwirHPEwEA1J199zLhtbdDkPm8FMkXswTf6ga71wMbfarvmU3a4ShkCu4uBpbwNLXG62ax7W4o8nzpPZw",
  "key11": "4gLZt2bVuSNNxwWcJbExZqQ1HxPvd1xFqdFjLp6U3FqU1LbYMBAYdyANKgykVY4CWWGbjqVjcqPNxC9jTyJrMkL7",
  "key12": "2y79sD69DSazjpMNKWQSWMXXUuoMqnnPeA644C9RHpoREwE9x5nbFUCksDxbugbzmNRSDPYsXYx1QgpiwoZ2wncA",
  "key13": "76sXtyiZ3f3P1hTPCbUMubhSwP4RT4ckFdsBQSQpGyLSxPEFyu5yoAU7VTY5J71RxUYksAWUCYYxXfCenL1auPh",
  "key14": "598JtVKkZx77vxMBjHqt1qLdb8CKnyhKUHRUyeQ3jmK2RUfyZotQJvTGUPRZu2f2JxkWqA35b5EJoLoUrt9gqbF2",
  "key15": "5VX2BjqsAEo3Cc4RGhAMfNxkUp6C9FTQuBZwqQ4fTRN7bGyTnULit62GS83BFeZyNepEQGqA7XunLXmXsJdMGB97",
  "key16": "313TpE63aay94DRL6RCwXhZwCku4gsBPC4zrKQbMJZzcvhJLWYhkRqnZ1iPhnknZRpVppqZ6kMmgzznhMvi1arEN",
  "key17": "3tHEim2LvupCq1LiSFGKtV7WpvhHadwsaPNA4bGzAqHLexq8RwQn7DHbvdr9cQ8iunBuZoxeaeixZwa3earQw9Ps",
  "key18": "5A9xysA8N3dAGG12v5VFjSYfWAbxbgwAzHTHFfCM6MZnqadSqV2sn4657WrKEeotArGfBRZLEvv7TzJhVxXfUDko",
  "key19": "4cqEvKbWjjyESNUe6ruLKEjHTxetaXMntpjdpGN63eJ5EXBjxdxizy6uNzqZtFVyh99EWq9E7YRZTFrTgZVTrJxX",
  "key20": "2gaoMRYzLykC6d41xpyfpv92SkBLQ65L9gYBdUidXFkMMRWug2UBD7RLsJ4LLyVU8k9MRBVh61ZxX81i8SV4gGa6",
  "key21": "5Q5SuXEikHQSrE8gi1k7eeLUazzxacYtRC7MfpJfdGzMRWKRAbg5n7f8xiYt7fajhSUponJAEHpFdDAdm9qw3NH9",
  "key22": "5RqcfRVjgiNfEPMH3E5V2iEk7FdkSYEoz1Lw6h3Rd5rc8gzH7uHrg9QjeTSX5KBcJYzkLnVvKdaCES7kXEMnfmXU",
  "key23": "3RieqhosdFH5MPqCuVPFP61b4r5LYx7VjSLiDc2rQ64yS6mMyo8YK9hgcELvv5yTcwmYQbSFsNKxLHW49H6vWQ1U",
  "key24": "1WJk3dpY6r5MP1qNt7ShFFGEpYBLg5AKaG7iyTaW3QhFHcdjG8gs14yBkQAUnTyrQk9D41Q4FjN2VP4zUwMWuxb",
  "key25": "2yQgiQ2YpNpjaAGKibu7pFSMdVqhvESvqxi19XYgUjy9hrcoTwS9dF9LkEE6btZ16ZXRKNZuVvAPBNyqKJU4EmMn",
  "key26": "53P86KKp1y5Hgz4pApwhia1LYP9fhph41bfWocAiHpQsVUQMxAwwNevMvFpLxtShXLiBoQpgwzddDsbQLV1kNjaG",
  "key27": "29dS3tBJhrsLf8ZohczAJx48bRQhCfC2gpxm8RfTqWjSGWCNztNctPJBWjfvXTSTrQ8jr5cWHP2PXfugwQm8rAxc",
  "key28": "2xA94uGesSXYyyuN4j3693QPvtKwc9LydbCT17kTJG476R6KjX9sKpFhnCH58cZXHNLMhkS438pD2e8qZxN5pbi7",
  "key29": "5RUKSqWaakBXGMf4xQxMhDcmTVqogQVYbRnaNScsrpoViHoZxcv9LNP4tPP5xcvAvurzCB3cwJ12JQFVGKVbZj4c",
  "key30": "QvdL55tL62Vg1vft6ojSkLrWY9mUK594FwHQW8EXiebpMox1fjjUYY1VGRVbTud48XRZo3HiHWedaFhkJZom6WY",
  "key31": "5hZvfZYuSAGKAxoYYZzqfQXMpEMYjtoAfH91xLeA1unoiL3DmkPXnivZLjuzXMo1Qz1bk78bVnyVVpzRHwagCZrf",
  "key32": "4ooZ4xDM5ECeWD2WBu4JiY7dkNJndm7ZCy3TcurxdMTw8FYuSTFZWiB4J3UZ51VwxwjwFb78GLDopu2KfVjCu8N5",
  "key33": "3qG1Foa9XfC5fTGUdxviaaUzVJdaJhqg8rq6qbFLpQBfpH3MFBn46BDu3tJmKFV69h9LMJ8sokD4ospvn4M6vEWx",
  "key34": "54TMaTEku1WGvhTzuY8XUF6GaJdLCAQUQncgDvVgsFoxuZoHh8Xb6pC8hRzxr3ZYbN246pHyEgaHTKThmyhpSfKK",
  "key35": "HhQVHo9fbdsYDxJ4QPAyFKXhTaNRQyZSVdk2KCvRK4i87CgAzi8kxWZT3tcjPTept7YGHWikGNrQNurJLnVGok6",
  "key36": "5QjDVQ5Dvq7BshAv4VvuKR6PHqtf4B7qvhbQ5RZ2LsjitidVJnNN6c1syEk3NS26omgcrAvxyhnxbWBnaxXFvoQv",
  "key37": "uwkRMLjKXTkzcCqswTaumhVptEpg1r2AhD9eRTgQCrG9ho9JPuoihwBmjz6kHwXuZ4bASK1ExMifDuix9ZmRu4i",
  "key38": "25BuLSaB4Ra5xDFFV5EgdgqDATpo7eyrSQeHRaCCmE9FUix5syiWD4qSCYXPY29Qr8fBCDRLMbL953FGSMCRJdt1",
  "key39": "dTdGj8Ty8NoakkaNB9FKCuDvd4K7xDuGqspYhXe3Qge3uVJULAaXgJesrAU5N8HXFqUyKJkji9dexb4SuiVSRAT",
  "key40": "4Paby5ciPHDSgvPuzECrGNA9fi16bqygzWhZv5F2YJDpRfV4YNwWVCKAZk5RTPzpAueRBFwvoGhwGZLFHhmcvgwq",
  "key41": "24a6m2KtaKNQ4J19zys62sANPzpD3fK1fJQbfERatDxdwRFCRzWT7qCZbUrtABiAUhnvSAVDV4kFo7HHsXYtSMy3",
  "key42": "2im6wQtdmZwG1DW98VZnkbyyxe7T99c8yN5Uhg8iVVNP8G1MAqPrcYrvqTY7KD3p2WfcfvqCi1HN2u5z1jkfmzEt",
  "key43": "5FW596kRwgouGhhkDeNrNF2ySBNN9vdbTLZGoLjU8ESEXrvJYr4hETRUeYbjcp2bNVLQVu7nv1x3Ln1oycoiWNGb",
  "key44": "mKCtwZQyhQMKtvhw8x1k4c5eJureBLnEHLHdgUL186ko3RmW8Eg6X2wTTCSuQ9uJh7r2T4Ku4DSb5iJ76219V39"
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
