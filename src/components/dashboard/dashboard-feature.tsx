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
    "5g41TnCiVtirhdgs5KobnwibkLnvDTAY2eXNnvH87unShLoxg4DDGQFtBUcwwydPub59fn9N8TjMhszZhRkhFPHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2urCqcoSaJx3Q3io2ckC2hCwz1s9fDU1KeZ8wZQateAft6n6PhtzLuUMcwfseDJZJoYQU4TeFa6XBDYjqyHC3ELY",
  "key1": "vw5dDAiFDmZN1mSpcUPWXBeesR9BFM5cTMJRXQPFkKyhnW3tPoNL5wEduNb7YjtpkjxZYDdhfgs6TMxrfazrXvp",
  "key2": "25KcPC6weRq7RPbRYQRay6XRA5M6bmDrMBT8wbBuU3vQ4f8bLpxjFcqoSfoeq6VwEfouNQhaUSCPySfDUSbvHAbX",
  "key3": "25sp628bheqBqvcJQaFYV8HY31Zug4Kg4JXg37aj2zM17q5Go8HD6Qj3pNzTLS7i4CBZ3QD7pGBTFoVGeXMCwH8i",
  "key4": "3J8puyT7Z99Voe7Bhx9PPpfF1EY1Bu3VFy4rE3SuyyKs4YWR5ZWx4y3Fg38u4auE9rEyQSirJBjdSwApjzGGN1g",
  "key5": "4v7yqQQJsEeou7T3HsvLf7AjzbE15goF9cBGcLzUGWWDRu3Ahf8bH9g6J7ZqtTs6t2jm4UFk3hBSegB393jks7fz",
  "key6": "4Dj5usC37hBFkG5V3shNTEwUjonMsRnmEKwU9YoqRki5FeHX2tMWfHwhG6RmEE7TuUYFdiLMSHQdmg3abz2YWeEd",
  "key7": "5XCBKW7L8wEV6U9NWyZsSDLETPv4zpJi6msz6u8RXa6N68qS9V7SncdMdrPGc4uKyqJor4Dao1aoW425kbXAxacZ",
  "key8": "3S2Cwhjv3nbg5pmgW8AJdK4hcrSkk4yW1eLd63b6NEQFpWU9J5RZybYEjtEBufcbrt3R9PHWi926jvGN1Wb2yJAt",
  "key9": "4NhB5ZcdyU8so1DK6DHy1C98R3g4vPYJmVoA2s6FV96DariDtStvto3sb2mXBVxvzEd5nFSbVtyqw5r4QQ1UjEVx",
  "key10": "2CmhfHs5PXA1fH37wZuvmf6KQgvkDmccJtica97HKjcfD9oBEgmk77eUR1kcvYXtc5ZBvogzd1RGmhbf11s73aAy",
  "key11": "fCSDRXj6puQWG5xPTvzHhBgrb7rxRCmusHNXjhHnrJCNPfJ8rjWXRnjM7pR42rgoFnScAxJYY3LCfQHUnkq8jfD",
  "key12": "92PTKRaEtqVGHDgB5nxST4JisLhjp6YFnSxWaBqzNVHNPm1SAqcUZpgWvBRBbPzpH8tRimMa4c6wCkvGASR6VeL",
  "key13": "5L7fjsPjaGyrZfhfxYqCwv8KrmguCwdmTxVyaVAFzVG7dvvKrsWtvHnfd6zTdFAiG5pQAU99u3uxGkwvhYJ1HTTR",
  "key14": "3xQb3trmYwWW9b4svPZy6owBs3tMGC8noQHbPow65LLxYzMkz8ebG74tZ7kBptCcaMAwbthESeSzshvfKR4ZpnLA",
  "key15": "41bpdh7Dp2V2Zpz9v5c9HWYo2T6fJWhJcarw2Jhya7ZJyw5t6jrr2KWRsm2xVEC734EBSDU1HaQREK2tW5J4U9r7",
  "key16": "37si1tbW2ZkXDgbLjR9VybK53veM29cqjPq4gDmYkwsZyE54cAP6TntkjadYmsD1SZKeQECmCk4QZFjVT5L9vJEj",
  "key17": "j8KzD6CED3tujhDbcNskbx1uCqP72L25xwfjWMdCG6m3pukuC2CwHEGojGMQGxRcnwMEvkuKi1WSYczzkMSFr4d",
  "key18": "5eoPfWvYJFZxVgJBTefe2prhEXb8xMpffDeWUWNvYVTUvyu47jpTgiPhq9n1XZ1v93dKqGaVYSUoRR9dPKBnswDP",
  "key19": "5ZjTgqzfuyUKjDfwN1vy6WQvsjgN6Lsro9pyweCAc36fANA3jxYmQP5d5wwGJHaeMrrfdyGs9FaxfzCPqzw82f5E",
  "key20": "3ScLFWtA5GN4PEPp2g8uFmjzV1zUeaEmsdCqx9qdLvgnJuTPromxVtLm7TtF5ztuCbWFiNbzHqqaPhC9GV7agzso",
  "key21": "tah89RD8UH5JQDygdUyVSostmSSkW6EQJ6CboRdrfNYagF5Gi9rHCoPPHF1BKSCAedbbdnatMoig7cCVuDozPPd",
  "key22": "3YsGubeDHyvfY3RhhVqQDK1vneoE1A5ZGGhMrxBWHSdmQMm8arkEuw4r7sH3fBxmZFNEfQVeHFwgVWy1RoR2trvA",
  "key23": "2feqdfDybTRpHhY9UV8xsXKXXmGmyDtss6EP9WRQov8M8YKc8ZT63F2CdFbzCjdQadGLUr5nFhWLzF1ZYVhwzaJe",
  "key24": "26vqPzQZB7uj2U3pNd1ScGZFdrKmkeomAFHV5DFXtnV2CZBeor3MQYTawJ6wSkyd8UHcoZdsqkxJcVFpboKCTUMx",
  "key25": "rE3tGrH7QerhtHGyqrSWAKns24G8Kog55C8UGF1fzpVs2CTbVhFLZn5iCk16ThRifTHkZNk8YLNanHaLkMkHBkd",
  "key26": "s55QjLSkQpMWHm79fGx27CL7VqLm1uJnjC4upG59guRRroSPx3GLxy9QWbG4RQnbBvw6ZLL2NL2J3boJNEKKB5B",
  "key27": "5U8EWXqPFLVMSypzwN2Mrp4hNGMxeXsoXQG63HaDqRuFzRSKNttA6fLh3Bmgfx11k1ovVy2o3grjiFny8g9PTL8e",
  "key28": "ymaWUgyXaxLXRYX7ARjbsNVX5S2MUSLHtdio9rQ6N26r5vsHvVCfpQFkUWvS88ZVjBRBCyDgLeMrLhAbk23uzCG",
  "key29": "4tU5wcUT68g8HAbyWD27TmCVykUAVpeDA7EqbdpYfWVKb91erHmQTqbqCP28xvrrF1LWGTwXjfvpGkY4AtRRGXpm",
  "key30": "4F9CjH5Aj3My5KjTJE4fwsjgyFV5R43AYw8iiz7Y9kLFh8Y9jtYZS7DSE4frnjthtye2SEMWbW4rqLzBcTVSDbwC",
  "key31": "3PAydNjtpGkKEjQfAax4W2shtCXzzdZA3UZ6m4tVAGkrsqgKAc3upY6SpjTnpPF7NZFZ65hbsmJvgLBBdj4gGYx8",
  "key32": "B3FjjDMMR9xuQUwebRdr2vBTKQoHf15xQkWFZFQdVpLi89NKjcUpVKYKwS7avj8p62hz2TGeAv2wPzJ3KjN86DE",
  "key33": "2STkrb4Y9scyvhZArVFPxP3Liv7Pg7AMMkorn8dw9QdVEAt83kTRapYTFQ8tDCXQREQRoU2HcM4Y26HRKxLA5TiG",
  "key34": "5vxewfazWthW9b2XcLrq2vNmKp2QFwLEDrkm3pVBok1zAts2aJNeCwRqtLiPpDfCD9us8UpCWLe9HnXYRMoTcVp4",
  "key35": "EpxJZTWHU4NAG2WUzbgXrFJRUw8iwYbn99TKLeWjNPFFUAAPVVYZ1gRRSfRy9YKQqhEHgiFgn9AKyYcwifC1cTb",
  "key36": "4ZdqrPbAgmr4jtZSfHexfzGG2kxs2h3PjCeivo4zrmhkjqbtRFJ5Wd8zBa9y6fDus7dpLCU6K2RRcZU2dzcMWHSN",
  "key37": "5e1DMwnrf8H7kEnTpaC7wtBthJ1fx3LGRkQS5jKhe8Gn2ZPBXJG34iU5VTRWttXjDWmYqNGBGF8M2vjDhAvZRDxP",
  "key38": "5DN5FyxfqRB5Aoo54Lqgq1oDQh2zzjEhrBYeAQFii42aDPvy5G6fLyzt6WKi6brtJe1QaRow7YXpprhbKrBs1ytV",
  "key39": "2Gx2gdbpmAaPSFeW1kPZhxH7PJgZWJSFcPVeYmb4kivPrnHhjEdBruDX5aAu75Ug4tYv99YXASZdTQNTF2aosxC7",
  "key40": "3f5DWCRcwwUB3Qkd37Yjb9GFCyL5Ly1cMimG1mKEAXHmqF2XCoiGVYBEzj8K7c3MWseF1pcyzqywWRyTtD5fxEMo"
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
