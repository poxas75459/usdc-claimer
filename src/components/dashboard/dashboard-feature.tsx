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
    "Vo4mVzDyeuHEmvdKiW1oHsHC2mJm2MzToCW51f8E5mfhXaiL4nybmhMbQcsdgeqJ9hCtVeeeS4Qzzdx6TESx7mo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ndzp3Ut5gbaYGwqcNwie7wBZyeP29HbWRaxV5nhFPwceGcttrgHcgKka2Cu9dKokhSpk699nYFuESpqjWbpYsJV",
  "key1": "65rnoW8hXaZWbxvemC33UUyGfa1dJcz6HWeBCeEbt54DMMfCRgSce4VGhtwu5w9jWJjM6Vo1PkPq8ZyHRQHKQy4T",
  "key2": "4MyvRSwFpDsQTMRvprH4y3PSmWAQBtaxkwfw1Skf6v5uznFSkmL8CiSPYdThYVEyneoCVnNuKCfBDhdUcwihu3qg",
  "key3": "4khtBWWFKMiTgZj86Cf2ipkTh4BRSMj5epqzEGQZQPJvxjTgD9ZE8AY6sgjS13N9RJ4UXfXavUJwdfYAGKVBLPtx",
  "key4": "uHQxyi8f4TP1sHA4jfu3omPAJCZv5uDU49oJBrocVo4eZ9ixXcQ4rp5dqbiLFsY2J6gKsbdyXUz3dH8ssT4zENF",
  "key5": "2hHxMjaY1A9vLmwdy2Wno3ufxfGG4MFytqPckwTcrZs2cYcqcYNT25WvQT6RGr6h6niu9TPFASox79P7whTkQaLj",
  "key6": "GyVmNzHXQFEz3XApqUuPLiZDcRyUy7iek8xUAZuEDnCo1sg7FpfV11u4ZXWo3W1LRaVT4QwoS1MDbofBZBCa3tU",
  "key7": "391nNKDCwmtLX1dcgtSWWXrGA6VrD8s99nNwjF8jx3zRsBLLuxQX4CEUWuP1CKNEqzNMwjNc67ENx9JdiG1JYk9Y",
  "key8": "3q4Y6KPMhW2TGKC3VW4io4H1iR6jiZqfXHVbGjGsaKwpCSYS8USpxo4CedvVHakJJCKHT39KctiQfnowasNLxLYW",
  "key9": "4o3UXPM8u434vYRaVF46CopyaZGV8JurEhDnBArao8KYQubHDWFeKqjLkRBfxgE6e3zcrEjGs4JBXnnnKEmyeUiG",
  "key10": "54WmGCg37VfV1zoNbJzMCEVKHoPxaTgrmLPCribgUHHE11gBFYwv1DyZsFxtEmX5PY9JqUB3dDDRZABCZJscudhY",
  "key11": "3fcCtuBuhVHPXeyqCyiBtVpPaHSPZm26watCCJXG8X4XXZeqkC8aQamyChrkH4PVt4ZQ8dhkUeeSkaS8Tf1pPQSs",
  "key12": "3LAT8LmbDPuAD58smaDwRVWMr5viaFGeB6XdGsK4ozysN9XFkxz6wCrpH13e3Y1haB8UnmTCAj9oghxRvECb3Vh8",
  "key13": "2CYscRoXpA4aDzp7PWefPAUz9aUYtKvRq6LtGyaSwLD22s1kUiGVkzzQEi6it6yMCrGUtZKJk2WCRFTFYS9FMeHj",
  "key14": "2e6pq1A7aXwKKaVfQ7sC3nQWDJUtE34a1wZNaJ1fVCp2FKXWNApDoGXKV8GjLCYHE9gr96NbShpDGrYm7gZTxVyt",
  "key15": "35X8bqPt4KoPQgcHfoZZT26BvLVeBngzQuMQRCZMs4NUULgw7xXHcTZ6spTmYH28dvETqHXeGufDE6qQcKKSbDNm",
  "key16": "wUp1zHomqqmQUqdir4b6okFuxjGEMnL7hQ6XLhyUsEPRFZgj6Sep8wVgcW8ievaD2xX3ZZhUp48iEVYiZ424hu8",
  "key17": "4kwYbsURSrBkMSuEc7N4Lfyz61gAs9aZEmjjTRxSsc3FvEuX3wabmPjeLRpMJvJ7nGH4R7yTLrRkWyzCBGspyDjZ",
  "key18": "38LmaKrnMixT1Dvac6HokisBYV5FWZFKj8pomCDGRi8jAUjmLYghDN7Zoe5KTuryQgSUvDiKkr5aiCsuUFoFdHqb",
  "key19": "3wksV7cVSSLa7fmcfqEiEs2eoQcXMHapZAN44YjZRPzEnZeUxUcT11GC26zAYNrTp25TmfEMdkeNcRbb2owdB54o",
  "key20": "5axYJ1Pc2taEvUqsVFvzQwaRhkEy87yRkhXbpfB6aADdLph39QPQGvWxU4uCKCtgy9wim3JyLdUBPRNFhVKf1jHq",
  "key21": "bbXQV884w4axBNwyrns7QuZcM6Z1r2mbAxooFZg54cjWgromz2XVsPLkEYQMCrjRmyXf3D4D9SV89S3dG3o4heN",
  "key22": "78eSCg8v7MLX3XhxdWr1h7PqVtBRATV5vjYuHdEhYEjfEFacuBRwN6pg34Ns5ujTvSRs6nQ7iqxcfdP9RnRGPvV",
  "key23": "3aRGxJt6SpoV6ghCRjWWuDvfktYhMy9tHBkmouZ6wXsPFU2n2JHAuyQyUztQpR7k5Wc9PJFH8XnYQwjPNLKy4H4j",
  "key24": "9iRqkKvPdzQ7DMob4U5JMMeJPZx6o1iz4BnBm4RcF266yjcYv13HdJmjbBj4qKecn7pi8iwxGrTvsu7VaaksZES",
  "key25": "3YneMVrZG5rhzVWGQHbCzGpQeAAo4RU8qBmJzYF39NcadxvP3QbQjEecJ3jHZCFTXA7wuPrswSx4xKsMgxaWu5Vo",
  "key26": "2XcEXbwvHStaHcQauV9p1TE4yUpWUSxjNb6aibtMsCSbJ8qpLmiYU8MXFVAvNippNxsNAMU3bf1ciVUVkdsDSit3",
  "key27": "4BWkFDrb88Rdym333HqLFJbMVoWszWx3Y27S8xAPkoS1Y4rpw1qCAB5P7KN1zaNbx6i49nfcZt7MRr3csGjMWjnE",
  "key28": "XPWj1919DaYYEd8dhMexNmts85QbZbLndPuoTWdHDHgU5HgVigjRQHhHezDHeouFURY7cbjQfP9i6yHyTtLtmto",
  "key29": "tamWyWB3WeXc836zfN38wf8TTvqjzgYmAs3UfxfTjvneSF79TvqpWrqoBaHH6pWmviEdWHvKfVr2UaAKGE2iWxk",
  "key30": "3DdnnMtvs1FgA1AKWduxkk3gCufvdgAC95ajFAdDpZBa39uUU36LMZhDmTn94EsSDuGGb8GNtt44Wkc4Jok88hSu",
  "key31": "45V7i1GEfix6UTwYKkiXBEwxiHqE2wPHdwvhxPXvpUej1DFTZBTy6NXLYHzq2rJrj9QSEKR7CHAJYc3taHButiwc"
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
