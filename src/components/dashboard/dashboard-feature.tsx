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
    "2PYtMPSaGZEJgxDKDERz3jp16sQQCGvutdfXc348TJ81MWPdTqVvQkMmU8XUvB3af6adKn7fUbkK6vUBfyCiRTfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JX6ntmowcnKUWsQDtq2qeKKSvVQNhydR272xXvNZPgY4RdvpJsLsSWn6JygAuNCWrbCnBpxixacBbvqCQG1WCcd",
  "key1": "4bjeQwQCBxF7ErGm5T95ffKJoR72oLLtm2C7oMJUcvYP2uK5qi2AcALXg9CY1L4FLbRC5S49M4zkMRaXgbS9Qs9C",
  "key2": "2rMtt8zxFTNjbMepM1JdHwfhLpx1eQ9BVc23rBx6eF519vYQ5GG4FNVUKn4FqoYUXms3vhF9PvkN9w1Q8AShFhwH",
  "key3": "3Sxf3Yzm9dYhSu3hHehrDJcBFyVerzEzS9NGbSqAfi9zCRuZsVkFAXkK3R1DwUWRjw3nuu7VnZEDbBDtgyngj9TD",
  "key4": "4aZvgT2xFuoDXFr2JmSkX4k5yKALxMXeZZakFhQpFPa1Zow8BfKeB6QrqAxt37obnDpRHiTyJDydRvtoqGpZXLc7",
  "key5": "5me8kRn35T42YipQkxyZgQVvdsjkREqeMtozawCBduS1d1Hezw5KdYmNJ3ibapjsDQQEB1cRQc2tnmDn4hiCXRUU",
  "key6": "3AE43ZpETSkFXuXVih8UQZsEp6QfjZ3t5J4xRZPkuyrybPrTiV4i1VLS8VtHVXZnnBbysK26ZpvWiYU89aFij8q4",
  "key7": "GuXNFatuoKfCcykGiQyRs47bJnHNj6aCkEVqr4DG3FiwuguKMWmV5S93Xxka7xjFbczdEvsYWHzJXqMAsY8f8wX",
  "key8": "5hTQb48PdSuAR2Mu69XL59ob464YiotM47d95kKnyoSxFJ2qBth8EZDbNDjXYCmU61dXUoqefk1c7KqyrxvTyqed",
  "key9": "5dFBmbPyCjJvm34GtF7YezH83t3CdVkQtAebqjg5V1wnHxvLNYpYsZ7AAArxYnT4oBvcd2PeS6uq2jQmtUkfNAem",
  "key10": "56xmJCQKiJbWJtk7h2qwVYQc1hKV6iR4UFHYNKtEJn6QicEbFvm2wZiWqp2ZG541QFvCRWk1GhrEPofhgkcwNdnF",
  "key11": "tsHCCWktdKrvBDvyFvyFM4McAjeetJnkS19CfuBY6vu2ivBXhcxiRNf4USgcBPtZo1SGL2Ukn2FmS1a7QNBR1WG",
  "key12": "UQAoC1gR6dh5UHdGzVN6T3dF3LBJCbJ47XUWhwkdSmEqRBq1T7mhFtjUDnjX9H1VTDgzY6FHhGzCB5twB5Fbc8S",
  "key13": "3MbbHmNhGDMwPK8F7uGW6LF83tiKipZD9RXMbEyXyWgFPV5uNDzDmp4ciMTSdDMhWVncAMPvFHYD7QYjvHwv3tfS",
  "key14": "3HuPt53iW1mm94fno6dW5Qr8yyYFzpPAMwTkwAt4g2fqkSmBkkU6TJY16zbBMtCcyTfKeYVvnWtHt3mG7wpYBSZw",
  "key15": "4NNzzvzbkjg4pT4VTkYqeAj4tzowPjetd5quiinNjKdrFMHNU8AVJqf5ifvfiWWK2otJ6fiSQmfh4Hc1Ma23Uun7",
  "key16": "3n7pwNxHsA1j9gNHYPJvjpfXmdeC16QYsSvPJua8UJLGNvQZwRnbCStyPAy8duH7juQStywhu92oJno1pUanmu1Z",
  "key17": "4iNocQ9yaLCj3DVJJfvFPBkjHqi5bfwSWvx5KTHeih5242nhT7B3dEfQAhUDWp6F8NytMAJyaeBy8HEKC9gM48xz",
  "key18": "2KLGfSVCiVpVEw1JZg6WEHMp8QZUyAEzMLDMV3TAbE2GunA2q9q1FNH29PR8bYHrkSaFndUkxD2jfFjCXj7ocBFg",
  "key19": "34b8pAdXuwJ2KTZnVa21zmb3csnRMPMwu3kqnrVt7e1RYHfPjPqxha3kTQxnjxFQNw8zpHVUzXie2S6TQDKyVQuf",
  "key20": "4LdwcHWwjNy64jznGU8fhyms4YtVFVhpkYgs3qhESTzeRoGAdh65xcUDf3yf3r6q7piqwyVoQpe129MGEtZFVXyf",
  "key21": "3DstFYUE9jBLUFEN7X1v3nU1tLrYD412jbUus4JWaHRNwBwaNtUtP4mVsSXQw5xhVAH3HTNSn67Ci3MSsmVHCcXJ",
  "key22": "2a1fJkkK7zo5wdoSE2iw1soh8Y6xTtJfrR91xaa3ZT9iTYq2g9eL2friqksQ8iz1hvUGw4RQZCRWTL9ZvEVGwKug",
  "key23": "2zEctzjPKXR5hitz4yFSsxnKzDFGF7S6YmRUAENi5RAFfo3zvwak6vtNfwX6PXNogAXh1p231NZ6Djq1YYmvkaNZ",
  "key24": "5FxGNzv9GGoNMXTSuwrCXigUKXkBP88TUo3Hpg27Lezbfa5MYA6Pekbn67S7hY54QjxHCjymrNAdWmzzGxbM6ZfY",
  "key25": "5LQu3qtEKZ3VVrqnf9bPYEz8LtYoXrZaVEKhHag4W7cvwhZuxgd3Mniy1L5ofF4Z3Nn3xyvP1xvLjrVU25R1q4eq",
  "key26": "4SjxAurzdTN2UUoujB3awgu6Dzra5HQpVaqkLCyEYMeVrCGzdCVJzbSNbp1MXBWyZnqPciyxDaMCbZ3DvubkaXMP",
  "key27": "5fLPWV8mdz3LzUsabVHEJ53vHB9URtzdLs2KWpw1tWr4VMX41JmTpQ2NB3DyRFBjuAEcd62sez2uaYMsATMJZWbr",
  "key28": "2EH8uWp1NYBH62Ad3U9KbKsP88WqDawo7E5MzocDEzW9ZZ72aZVhNWZzzGC7aBi7AroDUpdn31dYLVm9y15brX52",
  "key29": "5dGfGNZDXEnNp7UGP1gMfUDgLcRfEoXtZZFsXFqpGqHUq9QFks3RVV6Fji7U7rDnhsf2cHyCQG26YB1axMM6E6y9",
  "key30": "3hp3dZ7MPGJ2XqoE3M6s29jFpaGRBPAauSnSWivbcZrHDtZB3Qoc69MJ3xWqreUxFX8s4Uy3HD7dVuTdUGtsdbdW",
  "key31": "5hehtErtJ7oKCLC4kbe4kaCgeWbnFGeqzbcb9brJVdJKHUhpwjqoMBbHVa1ZRsXyZKCfJ7Qx9AADe6D4xcvYphPY",
  "key32": "4RqCq64d8NwfoPUCAAMmoxuitv84xsWT133y9qsqjuf9KUdBHPhWmKD767x5GwJ4h2mYybnAUiZ2M3Z5mz1x23Mh",
  "key33": "zZhGabJQyZVpNgX6FeBxEJdqtWAJcKWmsnGTY55BFUfs5FfspdSkgD9enadavABrwmfkmYZb3khRSKSsQycbXAq",
  "key34": "JX1QtYjktA5eUdEHvcby45Pa3xZDJyKcQoaArP3k246LtZNiQyca5K9hPwBhPmyBJK9gV7ec2pgqhCN8e88x3pN"
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
