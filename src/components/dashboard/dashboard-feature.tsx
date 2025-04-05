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
    "4fNrJuNDJjhRVmUgayQQED1iKge5SPL6Qifvrvcgc9L9qWQ9RBSoz2YovL7yLpP14aadjwJ1b7nDbGtsuDbsgTiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iszrryePc6JawhtvbRe1hLb4yLSbcLzaaQNvc8CQTzfaifc8iwmEfFGcLLeQD4UxgBChBkukTKodXvVPWUDmxz8",
  "key1": "SEsYwpPtLWGe3Ap4GNjK5pkPwJ41dF32q2XB1srHkfaubrmoMRkY3YH283puU4WMVA4DXH266WUC9FMewAmKxPT",
  "key2": "2FfsnuBfeZX1FnFjKUMVx6J3jWA9SUdGhSWVADYiAsXreUJrGFuzSg25iPQZ6SS3DJLGoZvtKpAASxN11u5T7SBA",
  "key3": "BB5GfDivg4d5bDj1ccJFprnAmjgsZ83JdSC8EQZsLYSDv2zZdjLNtnRsZWRS79KsF2XYEJD7Df57fjRs5smo2tK",
  "key4": "4j6eK8X4YVyp2G4TvjXd7airCpyYWcKQ84dgUPzKscL31Kca9PA5ruA7UkyKsdr6RMu4EzzQstAwRnA7TWPFW3Wk",
  "key5": "2PcT7a9y65kYP4ebjzvQnt4cCQp2SoUMbniZY1f43rq7bTVbBg7bw6fTPsUcgoqVoiDJaA1cQXAfVgcPWZAupWNe",
  "key6": "26Nj2p9Zufh4EAsvokQm1xBh53xtgvNg9oBtsjihTUoswB8HYEwJFq9S3xvG1DLvGmgTYZQEPom8zAZDKeKNhFnd",
  "key7": "66eK1ceoTMwgcJgeP7vYQwrBaWWC8CPjHRQ7QPEMcN3XYpJqPQgmC9HexrqwYBdksw7r6XVpruv95P9SYnUroDFo",
  "key8": "4EkHGkMqDDY8XSBReg3n4ccx5q89LjnV6u2Ts6eZAjZMDLnPyQBqHXJ6BVE4dM5PZfmwR7vnDoijULyX7PxAF9xJ",
  "key9": "2scF8JkJx7jsyE78CN19X3y6DvH2jFJFz1mrvFzae6hKdsq8PRvnVYC9wxsodBG1ywzRkAD3k2n8TCKtKFHyohnt",
  "key10": "4rRQzREzbwwAUUrnxpni92zQydWW86DHtJkGRh31hVFbCUMNNz46eRspvT71kMbN9QxDckuExUxRncAxbG4NGW4x",
  "key11": "5C7W4TyMdBN8C5GvNeYWBhG5FidQg6T7iomNFA9WtMZp2cPpBZatS9WfQftUXzPb7h21tggnQGmXHstUCd1owEsf",
  "key12": "5mUzuti2VfwZkFxStzCLaQLUZJgbTJ5MAPke4Pxuxywr44wpBjbLpZ153Y8AAJ5UWtnzyJnbdBJQughRcWabwqA8",
  "key13": "2iq8eUac1AXnsftExTVt4Fkn6MNd2DCdyysqSz2oB9ho2hiDsEmnwG2jmXZrPxW8y6v6X6SabzERqP8jHQSEMp2n",
  "key14": "4o8EwmHB5bJcPi47thuptkeUBx4zZjr18GqqPvdMh2F1HXobDH3vQj5N4kkWjDd57tLhKGUMWynyxKxdyQrVNpKz",
  "key15": "9iEpBrWQtk6tkrnxJYU79kPBbjKe32YZei48V3g6699C73ihuVgLsKC6ibNPStLAEu2PS1d4khmX3x4GjGpHCnj",
  "key16": "4sMfCBQ8YUKB3ixePrVVvjBNRM3S7PoeQnAA3Y8hxeemHc3rJ2hLnkt8rGEgphxJc6D46zgGPDuPKEA5bhL6Eso",
  "key17": "29iuZuRFLLkD4597frYo3FtUSS3w562z1vY5cjNYy7S9MsvLr8BxthTk3ES3rUEMuRBKnD1noCW452t6Zq8JEmGr",
  "key18": "3uB9n5rQEg2iYK5ftDLbpoF25NggJYM6ww6TFCsyewD7bPAwKYhDxwbixRfAu9vgHkT2eYKA8UYchfs6vqbJFQzY",
  "key19": "UZp8rPiArG95exvvZSgyE79NT7YUmALp4EyXRUAHg59CAhbQs7jzipo6towXZYf7iMjfgUkgL5uG8kKE2JDYfNv",
  "key20": "21uGiewqiLe2HMLySfiJcvvp2QoLmgvo5zzTb2syM4MadFeuBuKSNEhVQGm8xPFFrvqwAb1ySKj4uHzRHJFoGAwU",
  "key21": "4Pb9GQeF7WkU4V8G7Cqs7dBzX647GgkxjyRY334sAD4k8o8rWZEHYHZHssX9uGNKV5wjMbgKizTdmir4kpPbM3hJ",
  "key22": "3QFTi7Tg8ALRf5EqtF3wzMSH9nizNuBy243pHNMQCzbkxTcBwFmKRabVcdWERHJ9HUUbGfJLfCQiFfJrancq1f8a",
  "key23": "4JgMW4is2aZCyz3kWFrzYi9UHaEjeaNA87tsPzagSmS39XXdiDLUt2KNx4qwJa3WCAgerosYidJnMxraGbycruGU",
  "key24": "3dWdDHYnMvJUFohHTtT9EgcE9oyebVdXzHp6DicabqP7y723V1XzEuZYjvJWHXFDGin3KZ6cD7NjUHdvhqqSthLR",
  "key25": "2FvdQnzbo5r77NN6V2f15xvHJXLrHqwViNSyNEdtZGdv31Ts1FGP47ThgsPL6keeSxJRj9VoT598FLuNtNhmjF8e",
  "key26": "zPhmZEsfCN88j3WJjH49N4GjopiaF43MNUpDr5P3G7CshqKkYuML45fnutu8c9tED8dzhCLmd9vQptnUCUCgJoi",
  "key27": "3rpjbgHYrDSjRgXMXGg3UnxT6ijEuYdazAt81LVyaR6xgdXr3ez9wto1pGxW5ibP1BwXNgnvMrmyBBnqPcSVKsUv",
  "key28": "4zBMsYQXvVRJD8o83RNCKTEUHRagU4qADs1xuxWgCc77J6jP24QAZssPb8oRV94NbvHEYgut54F2VZPVjHMFZJNL",
  "key29": "Pxkg7e36MP3vdGuCr3egeCD1g9Any58JHeQMMYLiqwpEF2cWc5cdfGEUXpCsWri23he7RJWSsVoEpL1K8GaCSFT",
  "key30": "FaZbw2qiPEHq7T6VfMjoFTejZdw9oY3Gehtno2N7dUnMstz7GwNnF2o5Cor8cYbLMLms2MmzmQdBRBmhBG2nsTJ",
  "key31": "5uaoYrRWBPbRJLWA45zL1sFfXWQ3kGBAYJc3Ea5EiMWV3ggrLdfnJfUpRb3J7apbK9nQzertBZJ3GnNwTrpSXPZp",
  "key32": "5Dc8Qqc8XnAsQW7AinrAhme5TQW6wcpnoFwqPS3AoDcz71bkArdEjYtcwSN4ixVLBejBPAK6yqPWzvUehKL6kWPp",
  "key33": "3KjG2iVjbnDwQ9dgN6ucvduJWYtGyiGwKwkbCiSyte6rioVvc4AP7GRKvpS9fFVEumbC7wNFkYyb2CfFmvapnGpj",
  "key34": "5rxA7xSFtwr4yPnd523es9TTbM7WmrpujHj6Bpwo8pAAhJPWwcyJ5bqCAM71hKHFaxCxQUZm7GR7RLu3UDxb1vPZ",
  "key35": "52uvgKatHTuPNFQaKnsUJe9kBfhnwnVA3anYLHLKMEn8KtF6wbwkGWpepT3VCCNDA99wUTKVgUSVbxfmAga88s5r",
  "key36": "5trsJ3GBwxB3tpe4Andorr2wWp7Cbqmu2fapWGXBcLzhVgHhhqqQ4gFugz7JK4MaZwHM62EQVDgHHJK8QV7Xz9Yp"
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
