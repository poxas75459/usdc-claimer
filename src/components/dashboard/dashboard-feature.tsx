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
    "2iVq1S8AYgbmp4mo1MNPeW2pnh6Pi45xPG8RSYUfGifWJ6PhrTnzuoBgGxMQCkFvzpT81FTz23e3Df4NsZt7iSAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RUUx3NUP64gDkRKxFmdsjbxoewpviU1gzgSczyXbBCUZudeUyZFVtJLDg22fmT8Pg7eHtmUc8HxTPZWZn46KohB",
  "key1": "2XE4sFGznEqG6moEaHWLRiD6NbVFHyM3v6MivimE2jJHzjPerC5viSmK7Cumm4ChBCC9B5fBXNy1kzDSSyFFc18n",
  "key2": "2cGm9Vr1Kf6yjk4txKUo5n2LX2PnSxaVUHwkJfAu8dKt5hC8p7fetymt7wf4SkFfqPAMEKkQJ5vEtntfmjn1QaPK",
  "key3": "2rKDFfog1mM8k9CSacMhqFU5aLBiWKfcGvTndqSCHNP9KnwjxXBXsMnhA3g3EFS4Znoo42hJTzr7C1AH5XGqUK6S",
  "key4": "2TfPYS9cHpQ7fbtpcen3NkWAvGPNA4C5HiRUJkcPq3GWujziHv8vmqQHKS5CMXTJmF7JPppwh9F3fQnPsiriLeN9",
  "key5": "5uxZVHxSof1AezBZ95aTM9tMnt9D1ibPtcZRHsyijSZZJtLRT1eCL41RXJvyNbbXqfgUpvki84ZybRWAB7SHQAgh",
  "key6": "AGCHtbbNQyMrqoZrafN4t89c42pQnjfWb3buXorHzmUbgnDynRGbVmZjERosXbdLbgg6vdsy5Ad9MBwTbKnEuJZ",
  "key7": "mMJYwTDBLu25ouLywhveP46N1wdg9KEXExTrJi1hLYQeURAADuyqz94xR5nAQyLG8b56YZHKvGsPLuYVivzraLF",
  "key8": "4x1A5KmjcwFiX9ALHuaj8qUvFfVbDJGjVcqQhFwqxH9uM9B4aVb8EPo8iJrhppa7KoU3KfjzCHBF5TynjLL1ykhR",
  "key9": "4wFE9SPbcrFmPCcw7fX68geMRudyyr3PwD5FXAnqe3CVRNFYd23KY8GiTtPGQwNfoaPgXpxZYMFaLp2KXg3nkb4Z",
  "key10": "2ziiMGjWbZ1nEG57QqnVgcsXUtHxFMeJPwA7MkyRr3CasHotTdmKvyeZBdckK8x4cjE8jjZ5pERZSrFxRBvT96pz",
  "key11": "3cW52qgbTWsa9JjRKjMnCFfY2XJxmdtAqG9sQtrT49QZLQeEMXxCX8LoDVTeaWGnPxKaE4QbGBJJPj7AZnorwC5m",
  "key12": "3Nog7hsBnvPMEGT3AbT16VoagPCZGLRiPZtnWDQGtatLZkgKyjScNpsAqk7FUakGEKejMqK1GA8cCTw6x5GbpyY7",
  "key13": "2BpeUNDhH8EdSuzh2zweQ2xqWjszwT7JEFnQcDHwteGoFeK3ospH7Q3yoGLT4edHN4ezmCCN1SpsGoKZ1wAMupgY",
  "key14": "25Tti1j8xe1p57FQcxBzkTco4FwQLToHoD69Ui7QggxEVYzkU813psVQydQgHq2SSJDPVCDsQscDkDfqqakM3jKo",
  "key15": "2hSnEbWhaDFwAQaop2Ah9oV1epuMRMcNgP9LFKgoXGckPcz1dTTcEKCmWhUQuTd5SSE1mmBUR7K1nTYu3qzQghia",
  "key16": "3vJk9tzux8qAihfcykgbsPQBPLVFU2qKr85HgFHVoA3C1F3trexE3BCuaAAQY13ysvbbgnzujQjbn3XSx8xVQku1",
  "key17": "5ahyPBYjQYMqPaisfGAnfkmNxgVrojTBabkuCuUx8EmaSZyopjp3eFHDMTgFqQPqRwKkJUdqueZbZwb1ca79QJAh",
  "key18": "5gT6cMdEc9wggQMP22BWarZjVEKGm23keEWiZaPWPtqnhPRopfZJrNrsBew41bHBhW8LbDyoModhZwxi1NtQ8ds6",
  "key19": "4YgQXWvFsfp9k8ptrdKs5tnGAqugaWtzWa55tKkfp1MunHGuoRxXaj5jqMgEoQEbPpP3GuYkbruk2oNCS52A8Dav",
  "key20": "2YK4iQpJ5hY4JEc1xC5ZDaQALbBMbn96p8YREvwDjtVv8FS8gWyiN8busCAQ28wtbYyje1DqBVU2Tik2sAoeB2ZQ",
  "key21": "gxrB3czjCxWuxHX6fAXv1EXrmN8p4E4CJuVF81yTAqC4QMTn2PmikP1P4ThWGi2SGbWpDrZxagr9wX17VCjwKF8",
  "key22": "4mM418UuuhHv28QTwnKLkmHjWHawM2yt7qf8D8jZG5bfqMyZh8xkz3fcgvc8tuAshcibJfE2F88e89jWgiKpXvW1",
  "key23": "5g5j56einrTu17bfuLk5GeWCP2bbx1pB4gzxe35CfoNYw9TCau2QD6DyTTqjxsbbwWFaT292xebRL6qDt6hCLVZR",
  "key24": "5KWsher4hUWa7gwrzhy6c3M7i9H68MHHVh6qeS4JKBVZUXP4tmMciTVHYufFCrZFguMyUsfgWijjudLFnuGdF8NF",
  "key25": "2B57vLGYRNHta8996P1P9U7WAbrhE3wMufg6QXCeE8s47zN77RwLCJ297MC5vMPVf63ct1VHmNQUdsHncbsZg7dt",
  "key26": "3fZDpeJCGGEguWG5WLkUQHd6HhyzGFXiUbY2jbHsEa3esTUN6fXRmN2PSWZiN43TdP6tospVeBVJPKEX8vehiBx1",
  "key27": "4TfNEMqRhs2YDNLtFJoXqDdKAwAbfffndKXVm431FJcfQWK7YvYrfzbz8kxMjuhRNuuC3NbEf31d4yXrJ6ty4wsL",
  "key28": "3tnE6TizyxQNqERiL11Wney86U2PZrCxW9L5PJA24CeCwi4HUFWvUfkVrAtPmjB4Q5YeVMThms6j8o5Wcp6e2vX3",
  "key29": "6knuGZsnhznE2yE9v1rfdYZ2UN1xfdw1ncB2MdMPvAgBktCcFBtdGxnCJrExEr73UiWX238pxZehte8omNX92gg",
  "key30": "59dSNbPD6w1kDtzh29xgAurX6zaWSvxwhVKVAmUW8VPZLNaM32b3o2DZQPtkz7DEpEBbPTxqNHFfec41vgZhMiTB",
  "key31": "4R9SvZzCUsktBVgpUfMyHu4FdPhJHwcsPcYSDvU3GzfMMrcTWN2eGBetR91MKTPkXSeHK2UW3LE1zphnxnm1UXji",
  "key32": "WZarhEk6FJwfwaSZ2ss7cKgaumAhjSsfR5MkephgQruwXpYCGT4G3EzTX42tYPRVSv3zEPVYMz1N81ZjCCpBjfw",
  "key33": "4Y4kYZ21gpyVkJQgDRAp9yXfNRthaM41cYYWfk3tUHs2fSwiEv4Y297NSYBovAggcUHwdiH7dtyULNXjBCvQg9R8",
  "key34": "nK9L6SQmxER8bHqM9vTrZdDFZL56ynxdWw6gZLfd9Tc3NnZB2o5db12taQtrj4yW4Hc2nMH2ZuJb9W8tEMoG4Tj",
  "key35": "qfX2g5cUMZCZiDwGohCjWqrVUcchkSYckupJn7QsnrmPTGaJSv59DkSss9yx3b2pA4ZwN1pRLXmcU51RMBXxK6i",
  "key36": "4ayCfS6eLQZ9qzecKnTfpDieZwtwu2vAC1Qqri247rniAiAAKDs9Z7dpmiT6WqSwQcwq46SBZZNtTLyKe22pTgUC",
  "key37": "21nGXUvuuTibhLAqWEhqTEWde9tMfKyV2rRwTsCMpePNdE69fMBwtcQD5mNVp1c2iiYkLLvUu5AqbdRYBEFoswXh"
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
