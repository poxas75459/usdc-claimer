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
    "4D3wG7ZpevKn6iNw383RxtQ8uG4RChvHk6Hj8ARrHnJ9YvqC6cB2cFJAJ89tJMLsyxAMWZZQjrVUNtYenxxKysR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PcNBj1tihTXx6A44ztWTTvd2jai6rKbdx8awrhgWfeBQGbgtzwi5B4GHWm7bt6JdQJeBbZuJSPwWkL5pJoZAonQ",
  "key1": "3jhzaeuDTRjTfMYXjrjPqanGgkbi1DWdtSCAeFNrp3SpJTFGMsSEGPmUxBJ3PfUrfxkM3HQQJ5am7DMAp8xmq2HL",
  "key2": "4xCTWcXuBLQAh19vbkY4DwNyR1hdMKpfSBB977aAbAKay32aA6baw8XdtrTbWZYEUZci6u8fbnwjXCrUSnD78NN1",
  "key3": "41jSp6apfnJiQNYaiJcRy4SFqeSYj5yTz1b2Y5Rja6JRS6uczr2R1jLGNz5KdKxjTu9yg1MxQoHD7a1c4V3P9daS",
  "key4": "4ChFNWF5UpaJSHoh9hJnoxCX7CMpHEUgLXmxaKP9PCi8HKKQxNuQwo9ky85dYJ3YRKhyJFZHeNjyJ7iAWrqhGcSh",
  "key5": "5zDnG8XfFU2BSKN5FmpgiTC8t1WowLzZ6LN5RJzTxpbzxAQNfK2AnuQkxpwVJaEs1GTAw4KnzJrQ1sw6ghbgZuwY",
  "key6": "58p7WyYvTqvCAZoaFPfnShfVafW1EgRKYrRkZugr4arb81feVdfitrouoyvtJrtmTHXDRymg5cP1SSbxQzjwg5PJ",
  "key7": "2zfWXu8FES7tpsBs2LCtC8mMLmFKF2U8yEhLb24MKKffgbX7WYPSUXWak5yDuR1S1Vqjqip9o4UYVrE7QJPsCpsp",
  "key8": "5YNPvisjA3M3kN78ieHqSWk6LhZJAeKe8fvifmUbEi7zR6f6PMyY1YhZjXg758ZyoKBp19q9eCisvprQuziBiyW2",
  "key9": "4fCdEVdUe6u4xtknLkLjDZqCkcrPe4PcAdm4YUCx3ZKpBzU5DEdTcJfhpTy35cvrW77cYTjuLyxjEAVbXficgF3P",
  "key10": "3So4zLCysbdbaYtxFWP9bLrzmH6vPQLgtV5uMsNBgGuHE54bQeGWyieuzMgkzDh8jUDtKercRmQNPwU5xpB4GUVg",
  "key11": "4rWvKadwjPVeD8B5zBLJridsG9PgJnMRUY2ayfYc453iS8zD6yCZjCHTquhsSLzyXRMi5n7sVjb8dxS4RXYxe6fp",
  "key12": "dMb6pSheY9m94tKW8KG2Xxi5tfGLTFikjXoVZVqhkdNqyEc5xniQZ6zMespsX6rSD9HbjB38vkTgodUJuPhaLA4",
  "key13": "4mmddvy9SXQzc5oLb1Xyugnfvme7vTYt1apzZt8EaZqrGsc4LFQr7oBR8URhd4MZrLPoua9MvbYu7B1d1x1iprvy",
  "key14": "5oFuTaPUw2KmKtTZgxZ2LwV1SgUwcuCzEYcW56KhDJnUWbKxKdtVJbviEGCXV5yQZEVUPRVgr83Wt44bGemE3wzp",
  "key15": "3dc2K2zuAYSifPcHwXqBMfbaNv8i3AbdSxec15xzT51Fh7BQtQpEWKojmGEZnBpdXRGB2cWHc5ETRMQckFC2GdJ7",
  "key16": "4gpmVmRo5hEZn1ut3hLMRGRnZP3PNLRhLT6AGPvy9hG6B75mGs9yDdxc6bUj3kFeWtKAoVWKwTMkKXKzUKyxrcoX",
  "key17": "3teZa23esPUoGgzo1iwDCmipxKivnjuTXt8BCDEiLx7Z6mmJJqe9YKPTsEKEwybBBrkB1WixHycapndF3KJD54vU",
  "key18": "4BHGYUyQjYzd86n5K5VYC35txDRZna8CNbKSEZXCpmPuSnbsztudT2oB3mUAYhxc4whhnuSkw3FMzJ21CNFvPVC5",
  "key19": "ip9nky4sNkduhP5wKNJcW53UfRcjjbzD6rHhXFCC7ECp6uZPJfFWVohDCqSyLoNBbHQdXNGXJ9SoUb9H3LB3FqJ",
  "key20": "3rmZ4LFruiDZBEe2nrBoPmhn1A6J4RimZaCHjuvxkyZFMni9cSHfSSdMFmc2ecQ1jVjXALzsyvAcu2krUF9h4Eha",
  "key21": "32nsTWozN3JForABN3pnZeW5atnFGTxdagWBXYjtCHyUdzo8aybFEcfDZY5LGJUfAnvmJgvae7nxGy6Gy8sMac5d",
  "key22": "2FjUEGuHQDtCqq7wBfG5u7n35qaJjXwzcojotsuBJaJMXhwh2yZhMPjA6AZthKat6feLpmi3HQ6bLGSkDS9PptVT",
  "key23": "51gNVxuQNRgYy7PBFdS5DizXYo3Y15UrUm3N4jfHuSuNpZkrwzPGjCoTY5N4ZMCTMmmiRnWogA9vAqf9tn7wFRKJ",
  "key24": "4sLnL17SNNGjC4kZ6b2KsjpsUGcRVgVqm5wLoXYebfKe2q7Ve9tAH6tW4E7Y8GCMVa6bQrBRvcmyNtmKK5ShZzso",
  "key25": "1o6bANyvwHqR2ycPaTbquZyU1MqTpzCG3covbdB1Yv9kDiyARAWVzoXWvj2757ZRudRwgNbZm7UkyVCLT9i5ikZ",
  "key26": "3DXoQL5rYNbvBpxWDrEdvUQEn8QG6kUaAxRFKpkmW4F3dc2UZf4aMKNqmyaP2PmczBrH6Hhr2Adi1oq9GnJaiHr5",
  "key27": "TgEsXeDA1xojEpDRJq2g5DkqgbhSCUReQY1AYEBFt6hiEs9oeKhqj5KYKsKn4BVdor7EeeuKSeeMtbuW5vbPAEH",
  "key28": "vXgn4V1KNndRk43QvRCVwC6Tzg74eBRcwvaTrKnzk8CiVwbHTKi2fqSweKXbFssM1DK8CizdH6KYphp5ro2CZTu",
  "key29": "5UHYeD6zSSxwEoSCeQHeUxvPYuXdSCyKgNRqpzFfuQxu7MnoRAY1eHQks48Gc48CpTRbcawNZ5uJjLvmhq7ZYjFG",
  "key30": "3HRKbKibfCdakdSZBkBVhmwUuHXZpoCixiiUi4wNAorWr78iLMACpCWKwByvuAyu2fXG4c6QPMW8QU1GwVPGSufZ",
  "key31": "nPf3vUidD6Gh5ffF7yE4pShGhdAJDkYWxfYgFECoCw5tnZsfB62dAbhDkzxhv9Gq1eFb7ooBj2tLGNgU2p5jrgq",
  "key32": "Yq82Lv952yyZyshhg2PcT8eLmNtfnzRX3x2RXUkSij2txZfYBPfQtEbW21omvFQ8w5ew4JSKZ9gPt6bL8wtMGKm"
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
