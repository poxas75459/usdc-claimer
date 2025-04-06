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
    "3oYzTUwPpkru3bGMdbqnhovC8NS4hpsvQkYYfR9N8W7N1KvEkGow9x7hRHchxJQDrYWnSoQJRjDXDNqpkby93GnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35z7FNyDZAH1QqB5e7Fvt2jEuUuWKGH32aZ3ChfLeFVhh22mp98oNfXu34AKuiQh2qaPK18vJgJYJwUSKUyo8Zw6",
  "key1": "yVyLU7cR2Sz5tYXvE7unxFCer19e8kewWQpsYU4mAL3HhV4QRCWpUpuNZYhLnXvNdyfDkyyeVdJqbqXnKpNhAom",
  "key2": "LJ5bDef6tnqkiaaA2WdPZQBtefMY8M6pGS66Ruo2Ut4pMnrnyh6u4pPyGReSLGJvMmPydtfsqXiNWaqWQtBCsb3",
  "key3": "4V6dBJqjXH7eqy6tcsjLLQtcrPu8ywdHjpvbxYQMxPsDN1XJA1yXwyftfKETyQkH2FKDWawx8WheoqGWDTfC4Wag",
  "key4": "47NZiXygKfVCPe1ZowXrzgSFSPRsMmdyQSYXx7nqSeRRdEushoXxWNbs1TjEoofr91dK1hUdGMFsgn2GNqPm3M6Z",
  "key5": "b4Y6rHgqWeKYtbjJhjWZWdN37xLzDurzFRfTzLjCg672zbEZMbW3dveSCezJBgy3RkoHYsBEC1qtmxYBhapCvxz",
  "key6": "4F52JbCSSmg7w3TRSQwrs9uWpk4RLTeN3HCJRLoZZWr15wdV74h3yTjYnNP8uzcPhKvJLozC9FU8f2AsMMxApYd1",
  "key7": "LBb7dd6kmJThTKsh8Ff8wAzAUbE6jwCjiqcnT9mycJomGhXgvqLdM1iNMUsP4rV4kwDPkqpS3LGNfYnokJBGg4x",
  "key8": "8432oAg6TwupH8gbrjPpUNUWqxErD6NNnrwXmM1dPFspxTZttVHLokuphYCqcX1KueipxRuwkrHRRiSTdXkRLGF",
  "key9": "5VfPG69zbCJ4vKGbvQhwE5XKF8JmaNMnGzhzNmeN4E8VxW6ukVY2VMQme53esLpkQEsXajHNGcsrp1XqbpFCUaVQ",
  "key10": "3hc7hURru7UeVCXgaST2N8uLeucMgoCFp123gbxNL1VWRGSv3DmGjv3Kv6z8qb2Q8ZXC3UCEP59z8YUkXhMWKCdq",
  "key11": "hregw1k95ak3owBWfMnPBXkUGH14YjHsMAHDhxDCQL5sZUyfi9vATQWRidYhQet59QrpYwPqcJSpmgr71nbREXR",
  "key12": "WRsvttAxr3TUP62ucuV148DhyvNTxBKQYhdpzfWtHK8aQZcJbgF5xQLocE8qerATsyRRXL78ou1tmLKzNRsavAn",
  "key13": "4MWk4Cx3zdMRdRV7QCHrcGXbuVZTjHvUEwTw5fna85J4LZtUHyobo7jmrkya5JLHeChxrqNrGABb5u81Nj92AVjW",
  "key14": "jZ8y2KKJQPRjZ7ghPfKSGTXUi62xVi8opukdCFSaX8DXWTLFmM1HKhvznCFZiQMDPxJiYEAp8bVaDs3sUmVjha2",
  "key15": "5BPn3PDHtc4o5Qya8vfhbccEdgwgepRq1EAQvfbSTTirPaxvm7799VdQUM3zcYzQtAVu6AbaYU3G2LDM1Vodfnyr",
  "key16": "6mre3jN5fKAeSpoYc98ATFLgQKBhekLRvo14B1sgW8AbPBo96gertwUq4ZNZYNQc6yX1im2Gbo6ZbUDD2bQYWgQ",
  "key17": "4N2PH9vERRdEtGEPWJPFoztKH4g6UJbFynkizsvXoUrcNfqLBCiMccYyXX2rpvnJopn4KxJG54k3RRETg4G1mr1S",
  "key18": "5dr9B7M63ci2MyKzKGCpmR2q9zvxKDfqsiMUnBngEuXfFEXJYhzzRGPuHm87WG1vNqqdJe86zpJWJrxjJzRU2zmL",
  "key19": "2KjWDmvBtGnRSsmoPVJEid3oqc55joq4u6B8jbM32KnhjPaQS32k7fgsuUiu7rvVexS9txazpRiJ8ENrUBjNMhLg",
  "key20": "4vsywJ3k5NMU8UxbCceSPF1WdT7tVr48mpEmGbE4ngSMxX8Bxg7tXLTDeX7jCxh6KzFZ8PN69WB7iUfBJvNzV7vt",
  "key21": "443cqSiXzXiHL62mi2tJwLvSMEbbW2pfYfNfdKDtkjFJVm3PMwftxgJPWQxanhd5cuXGGSg8qnefsGKCRxBND7G8",
  "key22": "2WR7AXRbux4Yv2XfWE64xjfkhE35CffCpjeRvowUmCiUyafyELUWfL6cgJDJoFigZkMZyTUEmR6SdNYiL8UXSwZ2",
  "key23": "5oxtTaDahjWsu83nD8XNKWfcKrmhL2wzU45xRvH3XtJPSLWJRqoCzz9T1jDPbvBDJqyvBrjtQ8VVpc8r9SK3ogGF",
  "key24": "2j4T6iyA18VTFBwy73QrYzy8MBJFJZUnCAVpSR72tc4L8AFQct2ajVJkFmQVUxHF1vuCNmVoCDyYAs9b9AZs5RJp",
  "key25": "2iKeJqBbpnEoj5yJXgpuXnoAveXJLpoxYx49nt9jX2534EmzVydYh7Q46ik5nJ6RZRuqF4rXNLdhTV7LShnGqKTv",
  "key26": "2L8Q8X2KNeNtmEP5VkMFhtJHgRAD14L4ab3tyBaTskFyR5ZKUzUMQ2a8XtQGAiYLWjgQSEtmdVKLB92E1iwNPrtx",
  "key27": "4w18Uh8LSqY9cJXNF3u7bYpx4oHZSTzZvCH8BrNnkSpPVhHzKxzQmEjNfaruKnXjbaAJdT1vuC9Y9e8Neh9ey1CX",
  "key28": "2CwUc6qTww5SwXqjHzHbnyWLR7o4pnZiTsByPgn3SbCjEhLFXFtnWfAnKvUh8BnyWC4RxcTDna8T47H8bwnVtWtM",
  "key29": "5sEm8dfNniq5exq5v2zgm8SmiGz3GM7kPakFhtYubtxAhmUDzAXYwwPgddZGqyVxfZTNZ8yEMQuN4ZSLLwuftY6v",
  "key30": "2AtWxQwnhEYctrwSxsa92wpH3ZWjhFkDUUQysSzqKhjwA4cAD1sgBvxE2aDRH65YkanahHd4vuunPGNGrmJvFFJ",
  "key31": "4iBDL1tzgzJhF9kaJeyWD9nypnW5bfbNXRghX41f62JuqByQFYJmLhHfiVtt9gaES7XX8rL1c8P37wqarbfLyi7S",
  "key32": "2MqyaBvY1owSzNNRiPn7bosm572LpQTWvMr7MhMjs1QMTGhZwvHRVBbAaoNSiNrW1m3BFLcLPAv4YruPPdSMBA6s",
  "key33": "4AyqRWwvHs7CvqnQMBmMEZCySvSc9ZpHQG6xJKNtw5F4BHQ5xL7RhDNLd7rfUqqaniZcZsqHfiMaxJq96kmdcBba",
  "key34": "5hFmhRnHWs4eQE5j8F7hma6BHCdBnihUFaoeRMGbDKc3X9iHAVJix1mEzyqR9b46Vx2GP1irk5y3VPRQBMSKLt4s"
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
