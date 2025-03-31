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
    "29b39BestfKtJUW9QHbE5pnA4PBP5zoHZg1fz9YngAL8oxCRL5FojBGuDbwrfwByTbRPduKTVCbkxvEVaAxQejSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aG96zoRap5UT5tSnsQhk84sxmYjUk1rYrFznGnXFRUrj2GRpxVLpc6vJf9S1UXEpjA7qCyJvJ1vh8cWWGEcpA96",
  "key1": "3SY2iARtt3Ts8D5utWjTN8A5UyAKNiLkN2BmA9go7e7b4oXMY9etTCeDazbtCcvNZWeSVNPBTyyZDrfSwAoRBvJJ",
  "key2": "5QLweEXPgETTJRY6xabfZV3yBDiSyFTKM3qkWR9wU8a16rHShka974WnH1kkfhWA8hf3aZ3EE1qZXc5YW8ikxGEJ",
  "key3": "56Tu3RCiEFbeEhfW3jPpvbJDW1XhXQKcR8Koz1yujXfiCdy6DY5FQZ1Kkk4SfaxQf3DSeQYntjCNXGbkHMPZ5To9",
  "key4": "3Z8xHxCRb6yvm37ikTKLgBKy6FY5V6oQrQrqR6y3Vw9ZLeixW2HDje5tsVuR9xd3EthMrs7eH1xBqHComJ6vwhAZ",
  "key5": "4JiadYU1tGWMa8NnHmAAHRA7KFs7KB7rzWx2TcnxZ2ae5s7ef5c5fKqQXZ6mZ221cEViT6oAsfuFfYjJ9h2695i7",
  "key6": "2RdunWz4viZT3Ys2h2u6iM9BgYTYhgaHFa2YxGPnQHNzZrFAFjUK2vXSo1F2JzRFXBaeyqkiNBx8iYAZWyi3rU8a",
  "key7": "Qa1Fef94JHEBwbE3A54Lfw3dkQi3en1WG29Vjo78WDzsVy6QEqBB2GeheVMqTLugJ9tgdP24d9XAq6fYh81BqX3",
  "key8": "36Pun1D4WkYPDPqnZJC2BigMDjFaVnyty6hHEbZu9yTYo2GmjDvYkFzBfH2Q19V3aVxwCgSowFRL966mRvjxYoTi",
  "key9": "615fc8QJxSt574TiBkn7hBaS2CVu2xY5NnnHCpRRSaayjcGX6kjywMFZJoLbCStniJpU9fdVdDrKntrRrfUFnRY4",
  "key10": "31XX5AdjZ71VkrWqexpp9NMYwqh3KqWrJxxCJQb8fm2WAw246ZdKxZPuJQn6wTuYAjJhmnsmv9jdUyWMz9BaqBqa",
  "key11": "48uMTTu2QheGv4b9tZzGdq4JPokH1vu6GWC733pz2dh2A1WVYZT99N2XVWycvTc4ZVngcPqBHcmGKs6A3ERJe74F",
  "key12": "aeoSaB6o9wxcgPqND17eAmqxQgU4nHUteKAtk1445LJTRYpBteYGbfFeM9uBhJhhdGu1empAeNnToe8TBDwVBoE",
  "key13": "3xUTNZQ4JUXHRCZGTZEytiWPgFjCzBFuiCNpVkNCeW9xgY24B1syGgHRJpSvqaYFEMv3dvt9DzXnmp9nTVWyeCHo",
  "key14": "65Su2D5KCwML7Hd5VYTsbfiGu1XM59cMdzFSaWooLsWUNBavDhfvuaHGLL17iMVZmjj6jmGxPDDqpsCRYHC6Sv1a",
  "key15": "3acCaoarFP5bxKhTk9FVechdDVd167MUkoyeRxVEfyrXwzbKtDBmKS1RgHun6eoeqgW2ogAeE2s72Xy3nwuFqxaE",
  "key16": "486VwnsPR7VjXPKa1eWS4VN5Vegd41o85ppMgcsvYJ7uDU5WT7NtFeAExyxGaMrKSF2MJm1nBLjUWtDEKPBzymvw",
  "key17": "5o7SiDEJ8D61aGwMgg23qQt1yayCgDAubfxyG4sEUwfZUiCLbzcAzM6wkX71defrzdenum15ZMQqafrQVQusGtxn",
  "key18": "4WADrdZgrGPgu1GRNNj4P62EPubRE8c2whK3qNZSocsESP6JDdHyTKyzVZFiAGGxPAyPgYPYZB2nximorL1NzZm7",
  "key19": "5APpgf1MvkjDUQnTYW3en838GCjSvqRiXvdnUghqypoym5pPUB9htPPvjhrbDvtawkmwzoW7QC98PRqMFZdC5kXZ",
  "key20": "2w6m6ZHj1b2dGugQZJPf9ZKtw33tfThhivUV5BJqGi8iBzHq9tKXq123U6tf44MYYATeVA8mKWtj1N14GuDDDN68",
  "key21": "5yDQiNbTNqw5i6nnEnMpjsawpY7W3xj2tBkS9hcDQ7eaC5wDJiu8o4n5nDmkBPocwWnNkRNi99xk4fAAXfdEurwm",
  "key22": "3RQ5Ca4ocgJBZdQRUxxLeD9EWbRmMe5DCnwrp8rcHcnrCCguvTXiFv8cRnWq2U9PWZwmagN7VFvXCGPkvbBr3uYB",
  "key23": "bCLEbhEa65hT8dXvg6eg63JToMGYyupXdrM4TsjcZSJCkCS7NT4gPfi6Md8CA3mERTR1FG8wqwd7ueKXpWxZa6X",
  "key24": "54MrXYmdSgAHboGFjoCfs154WRi81kHZ3cLk71vyLvo4kwqH6C6S1VsnpNecqKdcRgXXaH5G3JkWZ7Cr935ZrsW4",
  "key25": "3i8mH1oVRckA2Hu6tbiiTjSBV56vMxfY9npyxrmLEpKjGJ9g317otnLEQLizRUi6p55mnt7EvN3WmdFCSy7Z1z8U",
  "key26": "2kyh9yL6nKL9ueA6oG82M8AHdLpNE5erbiVYRF6furZFwQS8ujmeZjQ7gjXHh29J3cX4mVXcnEdBFoG7sKS5Gu59",
  "key27": "4udydBnWrpchSh3uDxgkjG8mgqd6f4u1jfk5ZLpgjRDLzaFAqsMEmLVrXd6uCUEd8cDwb8gAmCJBdmH4K7vjTF8D",
  "key28": "C3T6V1WmogMPN9L5GKjimzHuYChQfk9rey7hBqdGCtRRPQ6TTiA6omrnzgLDRjZJpH9xDVFmenQtvmemd54pNwr"
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
