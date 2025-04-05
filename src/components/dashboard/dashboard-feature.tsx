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
    "4hiQxsEwjk8CsBWjjdQYjDtbG82XuXNCEDpkyGjDhsx7mVTJDY6FnAtcw2z52Wugdn2LfFwNsV9ETZXHqNKzL9Mr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TK13avztFFf7d8sc9bVdMD33ooRPcByZCWtScg8Y97z3f9MC4VVkzhHy3gBQ5tNAcqkPRTCssHKQfUV8tbJV6CS",
  "key1": "4BKz2cvhEGsJrS3xP6HkmqjF25kY4EVj5VAeQrd8wVRoPHZorbEShLAVGCFwcqu7WARruWyJm8FraqewjneA9Npc",
  "key2": "2p5rN9FpCm3QrYFoaB1oTFdAWRxz5wyPDrhxmNk94JTdDfqwqXJhJyzP83zDNghnppHeWyzLo3UgM4bfAE3r6uoE",
  "key3": "3t8uQUUDmHucBgifVq2uQ7wNWJUPWEX3QV74sh8TU8GuQ1T7Y4f2rnsFJtxK85QdAUpReE4HP1Coz8G9eNTk2JNc",
  "key4": "QrnCA6n1iddSQb3E6JGKyP7awVGs9JE3Meqvmhu6SycZLSjSDtCP5XewJtBw6KBQuAwEi2UcpQVCRsaJDsTD3rB",
  "key5": "4x2pB5d9AhwZbSQSqY3UH7TJKLo7aMuVeX1nN7D3ctTkEfDGcQYWD4ifbpZnXkuJnbqEZdcyA5okhEP7XARU1qKK",
  "key6": "PxHfcFt6KeJz5yTFtcrnPMqXzk4SeJFGkZjs7EJpZknSkoXH2jKjzB9aaJGwNvBDgrorXns719To24zkvvtSsNT",
  "key7": "REcQvQmJwnVw7py8fabj25bTdNzzHbS1fMRPujG9PANRG3CvwTUryfCCp85ocrCKChSAhSMjsH9cu9gK9QaAyUT",
  "key8": "3LrcgGfqd9YStpbWM5Fg9X8o1vhwpXybNSM5fEdnCCGJHfeFkjA1TWaz7MtaF5Y94xm8LfdxVY5DdyoAw1knHQpn",
  "key9": "5nDXKSSgcUoVU1BGDrDWVvwSgZmBy6v3jFh9nEGZF3YhhZi67KYtcCokGEGrQxxfyVr34CkHxVq9UFwuqFuyWoxr",
  "key10": "Laocb2vcmgQQG4z5iVKWbfiCMATCD3KxUqWsCb3SgtqSaChibzfYnyR2n5TT8rydHKD5XB6gTcohetVn15FvsDM",
  "key11": "65u9NMtMLS5Ad9VTn6BwMsDRhkvTENkQK61SchUotcBU1eEzNKB43FQohYBW6h8sSsf2zTakhuKYo9JZ6RV7daoR",
  "key12": "4ggQrriNweWw6bVn92KkWoP7WRiD7GESPVSDEFcRvAM4B1zhee97c1d1KwpbcDrzFWraXozWfMSbx3Vedgy48oXP",
  "key13": "39BHefGEYZ7VyXuMyhrv2pYLwqdSd1WAGQNZLRzfqMfqSgcgMRsuNEY3pFGTBktpduSfQk6pULS9wFBf8ncTNab4",
  "key14": "4tZbL8XutZg5Usn8acon59uRosVvmAfQ8QZgomB3UVT93zQ8Xat4Gk5GiVR8qFPvcyNFRpEE88wF3HkQyDDeWatS",
  "key15": "4NmQNxBAQYQBCZzvTErJjm2KJnUa7vqzKLpJsRtA7jKUjVDsDrM8AC6YYeEzjn4E6GkLzvne2JSSXpvaVsWBGocB",
  "key16": "5HUhKSYJH4d3vmabZokeTjNfs6Tr6iZhaQbQJ2MatX52dNYHMMrYuc55WZxG8kGP4jnK4q7LQKhNoFBmNw92e5W1",
  "key17": "2PqyaXACv5wuBdNGiUn2UWWgbpvonKaegkEhsmbedHc85Hjz3zgyAAaHrjDgMxa6MFgF8wkReHVZxaPS2LcjrQNh",
  "key18": "b9kCSVpjgZVPB4b28WsmJVdT7i4R3soLKYhp4BYxsEwWbms3jQU8pyEuXz5Cx3xAo64gvahrzdFU8JN18v5Sh7d",
  "key19": "624mzKhtvmmfhhq5ddYriMYjCt98SbtVmqhysACcL4ic928N2z9XbDKP9FWXABz9adeiWdhiACoCKNxiAduxKt1i",
  "key20": "2sG4T9RJzsSTL5KV5MzWFE6NENnouP53KraQdwzE6fCKkmMgxZiSfWWegPruKcKUNvecV274hUBdzrxEvgTT2Tor",
  "key21": "34AHiYv4tP5CUkFWLxRs8GuyWWzvqBDk8Tdh9ZtC9KuBhwz2G8dqomqkcGV1t2jNokK5bKt8ETpDQqAqgsVVNBmB",
  "key22": "4FTuQMZxzxUXfMRvGETwfugWL8RtXCpx8erv7nCTxcrvZQY36URdAMZmwGp1nVbSTfsbEEAQN2PY3QrnUvajrtQK",
  "key23": "3kTxa1Vybx7bZrYPfaC7rukLrtZJd58FmxjsRzpCYSaUvrNfS3qGZXm8kky1YtE6EjdWXyttxKiT7ify6oz5taAw",
  "key24": "5EX8KNM99Cs5TAnxN281cLC2UoJQ7DQS7k2FNxkFPaV8K4UyDbRsZwgntPTuYRYcKbGUWxG6EzYiYmbma93eGwJB",
  "key25": "37AoRd4N2QGExsaw6pwNtsiusdmzcP8TMKNnH6XVwxye1duf3oketqfwdEj8vSZpqSdmnH1fSznbFtz4qdE38v8k",
  "key26": "5KsNpVjmjDCuiuCjMvGUjE4LuKANV7hRVp3U3ijCaeuwURz7nFPVViAFLW3i2XCmSRdE7ysbStZtqLV48346bxq7",
  "key27": "2rCWj5MZ4uePPpTm9tC8GqckXWg1h6FZ31gUK9r9YTzXdVCQ4cG5xM9YxGfoX1UEg5uStq1Mss9LD1cZCdgzczqJ",
  "key28": "3DX7ucqwH2vMKVH44RqQkuGkPERp3ChmPjbUDQ3uizGpE41YkKxAukChhaGoPdEuzENJWaK1DyKXecqyoV8v7Ko5",
  "key29": "3UQYDyRs4GeBzyoAkXUqKCnTpvXeqDqBc2N4Gafw4ZCTTeZyErDnayZtBSG8Z7Zegh9x9dMZ2b9bzKMwy9uChGMk",
  "key30": "3sQj4u7ZYfRmGNauwrDhPFKiBs3ayYDvSgimxeDjR6wTFs6rYVLjpRAJK2cjHHk48QGEjCDcBQHNzgq2JBvAYfQP",
  "key31": "2oVCLYBxbbBaJunbMZKhytCgxEJD3d3qjV7Zc7GxjipE6zWp4SLJ8fffmL68LznDmrAqdZuK8uv8mjm5bmLTrbQb"
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
