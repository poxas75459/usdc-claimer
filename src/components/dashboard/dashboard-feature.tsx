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
    "5S9abfbE2VteiuYLQxmoFXrzfgmipirbSR4fT2AvgMKEgbdMcr2PiBmr4SiAXZv8A3jKffsigXLpxSgbrC3U6MJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qk7tXDtGXCJu2RHpHGrsm22im3UpzwV6z1urfwSJdSv6YAiruNkkdLzXUJ6C3LCKVWGAGRm7ZpgBgi35LrCnpUg",
  "key1": "hBynJEUH44YT1ZJ2UcDXDSMcbugZNNVRzCzATpVCRkGtQYqfnMqQ4pENKiTbg2PSxDgUfGTmvSXB1cxF2eXnxFv",
  "key2": "4hg8T1EL2f33vvcj2zmewG1SAVeLZR9NXDePCyj1paJpZQmrKGzAVA2ZaYJ3Kjb76rKorgj7TmtwtHJd1S4wRbwv",
  "key3": "3u4BenNB3ughFMfBStYDzEx3U1MTy9HXDKciVEAbsLo6Nko2xMDBjQaQKdye4sCLB6K9P9PEt4CAbfDV8H1S2LoJ",
  "key4": "46jqnjPaauenCsr8mD3iSZMR9PeddRMgBTx3iJePeSG2X8GK9Moza3E2aYxHaVgNFFDtYyhctwhnbPRb3yxZLD8Q",
  "key5": "2e55EqCN7RfM6y1qLkmgZF94Dwi8HRUjYoTBvuhUBqkQGiywZSVAhCJrfPvoLG7TFNM6XVr9w2YXKar2d1emEUGf",
  "key6": "35B8TgmpY8kYhsAJBzSNH12rV6nLxzvvJDNcx9GwTqcHB83d6DNZnq2aFc8pgwhNDZFvg3owsZtov1i3L6JNH4o7",
  "key7": "SmpiozbugbxWqqE2U9Dqy2JGDLu5j9otsc736zj3GveEuPjqqdh4WjAugYozhMAVWBERUBsEPUVZ4kFdNkSsycu",
  "key8": "43L29uoPjjjEZ8Hzkj3zfHT7fP7dKwsBRfsf2BcJUiiWbaF2teB2DrX5pY2mNTMfGZ59KLNcD8CQTrZcEY2CVFFL",
  "key9": "3Mc2DpLi65YbyNUDaEEZszJNwjxPHPQsEwj9rGTzG5tKPEF6WoArjwDxX4D7jkpZVFfyP4aurdcumTiqxid3BaA6",
  "key10": "bosExr8D5hzKgvRA1GKZMw7vgrmEGoVoBRZqjKnjtxHXDgiUbeeipSmckenRAAXzTAfEyXvrHmYsj7sFDwXPzLf",
  "key11": "4hBpGKUqGhk9WfqTdm9PTX1SXo2tNNr222G1iwLy4mh5m9nohavnaV8CzbX4VQyacBRfMXzfv62HczSqvTtctuUM",
  "key12": "562st7Kz1UNceby1kKG8GwBySYA1d1KUPiegsag1jo7nikh1depJVGRnv3sgwBhqCrnpbEvQYNs5AT6d5EmQnoTG",
  "key13": "5hGmHGdxKT9iWMqMS1fWpdA68vWWrexTvkMRcggJyMYq9yyBtdcshXUsWapXJvZSHXMiXKHUjuaRjK44ywpN4DZ6",
  "key14": "3MDCtoWRSE8mY7T4hyW8h3hzj63Xuak8CuaaoRGpMfFcQwovQ5WhReYpwDBWx4MUYXsKCJN7Pf3Dr2XgkVTcrhNK",
  "key15": "3pSfutEF4WaiwNK37hv4Z7tXQDqvwNVs1waF27Ctcpm9uCSwyfdULg4D3wcqYcCPt4wpCwzBB2zUteCinBNzPDuZ",
  "key16": "2nwpQpGw7SsmJhkbanK1pt8TusjTwtNfn6kKyERS7WWwZz9hJvyKr4bLJizuD27T1akjEpy555WpopjBVjxbxWd8",
  "key17": "4rER4ZNNv1K2vcThpRsQ8fkio9q4i1ZfR19uHkrJGKMm8VswQ5bpUnRyDMk31ZPLBuwsjinWHy8MGKkxHo1NuJeh",
  "key18": "3arXa7zmszsjZadtZPcAcASrhorhQPoLmD2AgtGc4BCEw5Vx7B3KNqeicTF2BULwPA138V52b9AxQ2vcBb2U3bVX",
  "key19": "2t7hAa6ADbyVsJBy3Vy4dkPurG22vp4b1XZUn4aTYVWRe6BTe7TTvX48XWTZXZtZKLMWYFbB7LE8dbw8vN1nNE3v",
  "key20": "23RcEegvb8VECKndn7nWx85Ekr7787DBqVfRXLUAgYocq7BbX9ySVX5YTL4zGKP6ZEMm8VDrtna1P52q2vL1ESgp",
  "key21": "3w9uVVUGQw2rn3CGqNFu1FANgZyphTfD8ptxGWgkusBQC2qXM9i9xqCLvxEz4xT5k23x2buPwafwUiCQPTcEVgtT",
  "key22": "3Bka8cp45snrFFWFc8bNHHe6yx4voBSwPPGhtdVVHmdohZDgHHrGbx6wBQvcPVdx2cQtLWMnhWWp6UdqbkmuwVEW",
  "key23": "4WKMsBH84U3K5v14w1zBmkxQjZzJvjpqFvnJKhjHjB9e6JaCce4urDcPTeLQv77tQdKrnaFjsFsFMooYHgGB6peT",
  "key24": "65KasjKXyQFDeSCxFKTEajehDThLcYdccC7mDmiRafUJkN7TwbecaPB1AKnJz6jaAgEFJZ7hJ77b3RnqX6CqXn3S",
  "key25": "4um8KZY5dZZ8YQCXnTgUdUvfvaGLZQys9iYrvaaD7aQQm6BF65pKwT8hxBsy6ZacVERyrMzqsVKPSnFRqRbBhgjw",
  "key26": "CSbsbhetGrNb2GFgs9xYnm9M9yFEjkS5nznkBJuegZt2ubvJxTP1Jhc8pUo3Sk2ZDab3p4LLvbJBWNVgLBUpkWn",
  "key27": "4H2N1VL7b2dmArtBwThwTEXFEDyerGgWrNhtoMdWtgyVq6iC58cYpi8fUm4EcrYDb6WoFEKdrQGpwJBSp78ioBN8",
  "key28": "4CU9VK1NXkvaW3rQ7vXaWwj6nxinUWWDUfnm9XSQGLshUEiepE1toqJykngSEPB8hCLQyGF1N96DdQrVgufJ2ejt",
  "key29": "2x9RomLVnZ85c9inuGBUwnQN3W5W4ctPuHLnhLUSunAt33L22Jar2AS2Fjyizhy6aT3roQETnEnyL5mmhGQhJnP8",
  "key30": "4F4LmwXmvvy5NZKeAA8mTGAwiNxHASq2KWTeFbCrjbobqQ7H8gtTFtmyqqK3sHb7uqEWorUJUHmQEd8RA9GLjHcy",
  "key31": "5D25Ax9XrbMnUVvPAvkBDA6W5k6hkyHcesQ51ndu2AA9zRyWc52YhSVF4U2p8CWoHRuPxEufEoXp4fgh6bjsELNP",
  "key32": "dvwGJpadGaxNcSu1vb3YYbHDqq7VhzrDpQTkzkJrEUtLkHAVNqRArDetsbJFJzV8kKt7HD5vDs3csHDrRGH6gdw",
  "key33": "2n8JviQptD7DnJpCT2XJ8ggy3uDCbNKfptzziLPWXjCWYJh8bYS3fkTmLPPRmJKwcfmLpgCBkhfB6z3sdjH2Sf4a",
  "key34": "g8dKW1ZdAsMcXUJ6CoyEfJoyqBThHF182ZUT3g99Srzp2U4JWCCkbjWimzztA6w584npY2VPWHS3Gu6WCwoBykB",
  "key35": "3LGktff3iHHR3Q3atnNtA7vCqYNyvVPtubi18FUctce2F2Ld5w7ij8rSGa68oTwZR4on7AxinZ6i4wf1yMtPiWvv",
  "key36": "m1qV8J2tnfqGW62GxYMVytz6qrDsUZ26KLnYLuarj8RMnWSdm4gf1NfizzDupNwp2UGeRY5mkaLFPXgXR27QcbB",
  "key37": "4r3G2hStKPjieaJQgbTp3te2MxBuvEXKF6VpNn5xHg71SSSw5CJJN6qVYTAKb3hwNXyCg1y2kPSL3erUhfJrBHyu"
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
