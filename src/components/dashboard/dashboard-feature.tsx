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
    "3H6RwF4FtgfFbbj67e5yhrjoawZ6hwg8nuzuHbCBUHJNiZZ7Lv8ceBEh91C9RygsPbMiS6hZJyBUEqxMCPpXevaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mhnstoAvHvfEMez6cyKBamsbrg42XzuRioYQtU6XzgLVJ181CDjrAtG5WJmv37kY26DvEoHVHekC7USegsLcpZb",
  "key1": "2fvToBajadKSo5ezrgYBE2t4S138iQSQzxhvzeVLKMq2CYA9MVXNEphT3sXpxV3XiG4dveqoMp9bTpFmEU36WZsJ",
  "key2": "rztfUXqn1Fj4JzXLN8TDcGma6JqTEPFqeHZiFZ9rzosxv1MxgMx1mWzgZTJ2sMAwtxeXDn6GU3cUcZUh38kTpqR",
  "key3": "2TS92eLDhk7E8S7xmKYEdNgU1pR7a62AWNj2ezgRrDx2Gdj7unXWj6N4WGfGDkPC9XaJ3ooLw2mgEj29PdADpjj9",
  "key4": "47c3VH1UWob9v5aPP354ikYn8mV1ge3YBsBVkM9SvAyuHnCnWpyNdRJDG6rVMHYo8F5Tc7NfpCwNd8NBzawaufaX",
  "key5": "4mZEYtxxHS2pNktrPWmLr19nMeGWp7ak8oGWho1LNuRbmbp8prVMkHtRK5hZhQcMH8q9fbGFcsKRytytXMY7xmSo",
  "key6": "pHSm2JFwbzhKz1afL6uCiCwRXnkyM8vJTWB37JTVyVbawd86AASBxCF6T76XCqqRt54YAnVrkNAiyVgXYPMnLbW",
  "key7": "36d1r5xZ8pRRpfjR8a3ZYayXZGLvxkUy9C858h2XgJrfV5czTCLBoeg1Poamems3WSA9Y1RX2vtMTpzRBdEDHKaS",
  "key8": "4J7thsV6nCrwwBeTWSi7couF89Gpa13roPdNugX5HRgbEW7ea8VJLAcFNY2DASRSYdfs6fbJDPTf2z8S6CEDVbC1",
  "key9": "68wjSM1ATQNjiARzNdqGGSgdgftEB6QtkQve8a7yhrNjPohLSZJEwM8urEcwjWmCKsKstT7PdAxuYm4VMTJw6HT",
  "key10": "2yqKMru1cxGeKFEpaUxmZx8YrLptsdiRxgyTPTgkVPEUpwS27dmC2YEkwALmDWJk2zqmrdPKQZ34TAHmQ6khJ3Zn",
  "key11": "52xzeMyH9uqpsChxQX9LuVpk6wb6ZWrcu26tzRGGMr8NFuw1Dw2jYMdJL9yqYYJcDdmSpeWxN2UVTqCt8HhfVZqi",
  "key12": "3YMPGzE6TXTFPGj7p3pTy6BhodP1S7DevNXqw7JeNJ3TaeZ2qLJ72qUZuQGqcRLCCDX1bvrHyYMCXt1TDaLTCE9U",
  "key13": "PevzJdbfJ8WKWJ5iUGFucpFNRDdnKbrdbJn8ibxg4DfL6Ub5SnsbEUNDENCsqYmGeQUU3gw6U8Ux5raTZN7SfVu",
  "key14": "atZjBQg6kbLZtEWUZQvpHNEcW7BKfQfNQPDNGzPxDC6Cw1Jzdeko4feBaPZBhjmyk8wCxGrwcxBJTub1eB2Em4N",
  "key15": "GoqVHHWVZvb6Q5joZ5ihdUpnHBoSqRdEusxnsemmg8SH8tNKShA3NuD3FKT7ksPxn5r34Pi4cYVWLs37PWU79VM",
  "key16": "5VoC6dLcfKrGgLPLGaEDRrX8o7re7dQs5mfsyW3EHBN7FTXvkB8VjsiKfWSd7CyS7erdZw4XE5NDvKmyskqFgrYH",
  "key17": "3kwqmKwrjqiCesfCTfC15JYRW9JgGNzJnSpaXNNpijQN6dFVWyHQQexrAJoj4EBADuH8V3ChSNPbhXxbLZ93wjb",
  "key18": "5oFdYzgupySb1ovL75NzCjjz8a7JLHEAw2wywPMbj2EXJPGahrbeQssjpTgjVjG4FVRknFjTbARJJf9aBtGnwqGT",
  "key19": "2M5h3oq3gZfkxVTTL9YU61bxFq2ehcTB9JXwm58T6Ec6tu9HVjS1uc9qHkFxAfbjAe6hitP6mSBayo35Mu29bM2s",
  "key20": "2AvB5buHywEJ5yLaFxhM4CvgMinfbuMvgFcf4uD4Mh75behsQcp8XFvpx9UKyW4hN6KypfF1XLvnDpm69wcV234m",
  "key21": "53gGmp9NAqtE7VXXYmU3EX9L2CKhtP3wbHMLJ2J7KPZHbWXnb2koEunxavLJHYJEXZJZZopc68uxvUzr6xsZZGCE",
  "key22": "5aRVSCy4p8dpo54CXs5xZaiwrAGuihrDU1AM8dhmxPjctbYiiwWGPQh7Sq31JgB18DwPLsSgmyP24ZTeQweWE7Yi",
  "key23": "4gPvVGvuGUaavqDYT1n5m3CPhbWuntAL59qCKETpc3sRBmCoMMgtdyxqeTTkkfvKhRbZ44LGyApKy5opPBcRpZq4",
  "key24": "2peWLuiYgsTtZtsgBFgdj7sJozFQTrBuvFHY1JeKT9QwNE1KUdGshQ6TWVQngtvFZKnn75EvbHh6vCtHMmuxFKTG",
  "key25": "G5jpcy2eA86TZYE1BfjThdEpabYh9USSG9sQu6Ma2Qu7sUuJ5caVPK2o6QPeov7RTX5tJgS26UTc3TDNxznyBw6",
  "key26": "2Z73Xk3PtwvUoeknbouGwBfgQS29cj7H8rcZNLaPynv6NJKtFZieRCWnbYjLpBPRFAQJDJXp7bUyhkJd84QQXyc6",
  "key27": "pqpddyWzDAbjifBJgkiqQz3Wu622knwUmFiPWMpSVrGzURr9PxDy7oqekRu5F3wtNtfjG4WhKuVfzzRWsbyGn3y",
  "key28": "Hd71Vnk7bX9Bh2qHSbxHV1JKL1WE9dQLRD8RDkH5BZZP6TPShD5amqJ2Bgb2ykS2EXL6EyLnUsfNs6thJE7BBUy",
  "key29": "SjYA94mgqLHBkmeEsPUm9JDzRwzRXYN9Ln9gpnjNhE9qq2WSDwDGQuoTZJ7quz6xxGSQUb47np82kuLLnPWB3Fn",
  "key30": "5zagrTXShvv2icGBN5zwvjRwA4Dipz2kVkTcwjXWgWqjAHZKsKFGV5g2U3L13yoYPzYhwN7HPg23Y62R76K9hwfy",
  "key31": "3ridQuHQWn8Kq6nK7aTthxEFSXap9J625dLVhLSLuT7fUe7NNQLT2oygcuC4KZXM4GrYSF6otygQyc9eYLyt78Q2",
  "key32": "3BfqwMpit8Mq1nRPNv6k1JthhJPAPj7F2dRxKUQvoUc3jCmnDrvWimzYTwj6EXo8ctYGBnG8jqJcEkiRD4t69Qgr"
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
