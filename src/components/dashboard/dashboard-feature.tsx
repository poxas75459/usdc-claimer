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
    "5GjkGk8VveAayviTfB8KStLMZxFMQ3PgULgLrag5bs4RrNqiobYq8fra8MNDk5dBokBZtxEMUcLk57xzT7uPeRsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yZ8QpBoKMC3gcRwVGyH6VGWjh4oRATwso9U5R71Zbf3SnLGvCxaRrFoT67DvZnZKzFBfNK5vmfcTJByESkz82cb",
  "key1": "5ot3TnyD7AF63tkCpkhyLu9TddQCrc5U4LfQ2CpFJHhFdJXz8h4eAC2zuZcdrMc6jd7yD7W58cPrEjBYt5dgT1r3",
  "key2": "3jSfSADzcwZmimPEf4BHakvs8MM36xFkAE5WGtUFuYYWyrrGqSdsvHnrWi5WNkYwEsu7AqGWdHe5ZSVVfYD6U5uX",
  "key3": "fPGT8xgLFA1YpMGfKNBheKXao1eqYnKQE3YjoCozv7VEaAjD1761x6bTAcUpJC3J8dwPbK3QodMCzv5zAf4LzS3",
  "key4": "5P7Xxz4HQsvPzvLYUx8oNVRtfL7L6SuDoNjhCewDUFXfiTNBMtXmZEtow71tqfQg5m7d7v2zNvBvzCuc2ym8zKMY",
  "key5": "4QszmYLh1rKrtYvA14WKGybbpR6hFpeLxKdiz3Dq4yX5uBYhZkxPW1zgVEkgoV6UEKtHR93t8CECTQxiCwFWdY8v",
  "key6": "g2WEGvw3ynBABKru1DUue4fnDYR18tFiLiiZhnmJazMnJKLF3mi7emvucpmrp8qfRLgVLraZeaD1WRKuBna9KLV",
  "key7": "2YSaGszZXTJKXsznSbAgHfyhhQRSD2VXzBfWpkE9UnFCKQawu65qcQY5wHgMRaJY7mPEWSFHvakeqqE7mVqU6hs7",
  "key8": "2nQYHqTA6mXudKA1cqjm6KVBnnRUkY6tbDaTSwe3TQjRMBnzfpeFN8WpVjJ8ruG1xvuHXdK3Uckr7hbrW5VqLWMu",
  "key9": "38JbyoYJXz1N7w6Jw5CkG4rw64Cp6ZrJgsiUgHVbpRoUk5rHbgxFbTxcScpNFGChkAFQ3myEc7UPmkjktEHEb3v9",
  "key10": "2Whq2rv6uS3nTGHqUowua2fVtPiav7EWkew4cJBg5WnYh5ot6dJaR6nmTQf1BXNpzm9Tf69aU9ju8BcRzzPVEyEe",
  "key11": "2S9UEgMoZ1yyt71Bsc9ykmLhWChMaSxEv6gNqaXScFaP6wno2HqjFFdqLXfPRiwr8EBbU9Ui5wgmkah4PryHSpHP",
  "key12": "5fmTe3VNY6DEvBYDze4scfuKioz789jLwmu3fZTHMwsrpyaHbTRyS4WWTpsMemauYNievFChT4CHfqzxK4vC1W5H",
  "key13": "5d3X9XSyUg8nZbMEiZC2dYobfZ8bSVAagC8tF7o4wS924Z9bodonvR63udtHCBtJ8FSQjtvqUaP5TG6pZtrFMHwV",
  "key14": "4My4DDnZqE6LDCXWFVCtXLRmaPhDb7hK5oLW9PykyfqYUve5r3KvmzvWMDyLP7xXhSqfM2VzpGQH58p98arN25P5",
  "key15": "3MWzRmY6sVdabiARDjwaRy9uHNPYaVweBxkZRapo5UzKoeKDktJYMoGSMpBe4hAVsYZELaPSBEzog8FjzciE1zRK",
  "key16": "2xYe8bu4HfRnjwGnHoJugfaD2dHHmyDvUrxnyFbaM4jw9U4UuUDvaRki8LHNfjxFFt6zX6r5XhHCRN5Ai9NYznjg",
  "key17": "5Pzzj6FsDg4NtU7C3Y5CZqLXAubSmpyjjeGLCAUjxTNR5JDJqzZXsB7UjDCK9CVJgKsor6WHicjR3KeyDKTYsyQu",
  "key18": "5k4HE6V1j5LVc6dY4kCQFQdeM6zPFzAHK4YTJ1SvTm9yVxa7X77Bv7SLcLPX16RRbDK43uArdjwdyjNBd8H4AcBw",
  "key19": "4fg3AgP4WshZkrw6Smm5z2XCX9ntXVSttTF8pW4ft8re52Sa1yjn8Lir69t6Bt3wxsCD65kwEJWPNQsiNU2ZXipX",
  "key20": "2N1nKZEjMFRWx3Gq1T3pLirs6DvaP8wjqbFJgb4UqfWCDkeesK7WiFD7vJA8whkv4y2RVQgXmUHQPc22afWmeWRy",
  "key21": "25ECfqDbYsGScp2bBqoevaodR2gMmEHjMou32ACTFgBhLTTgaLwz1xaBJAytzHurkuosC16ZSZQ1ackg1qYL2Eqb",
  "key22": "2GiMeBN34WdJzYVhNCH4WfqPNwWVRB1kkqAm3EZbizYvZPXifZsgxhFCijTas7EY4ZQWiD2y5kU7r9er3F5aQiN4",
  "key23": "2FFeNk26oGuz7Fq1xiqP8wQFQ2oRz98sbxV6BFyqHrf7xU5iMUPtgjU5MoNdYwfmMbCexAr93Dr2v15z1udDzZWV",
  "key24": "2PHZupv1SA1yuCF4pREY4h7Yijh6T6PX5rTec5iepSVaW1r56gCgXU8GqDeHKbqRgXNeuLXkDgnfPdN9HURMBHJg",
  "key25": "2wazcusMLVhtePfvG5DYsuXeZ5szLA3GbpAYxdV3DY33TAE3BMhyEPawG4gWiD1ciu4GjSBNZib77ydyorxex9Wx",
  "key26": "2BGmMB9bHniMz5iyY7hrTCieVr25WwtQcdHujSPUYWwcmzgSh5i8rGW1UYZ9vGqUZB3y5aMQT3QQVoJZLHvKbcLq",
  "key27": "4ypMdRL9sNJFQx6j5h8gPbonbbQXh7kFdsWZqvze78RpNNX1naEy5tqm7WhARcFoxk7nMGRTDNZLwgCepRqYmdsA",
  "key28": "2fFFKCuBTeDatX14BAsxzrD9Vs5aRkRtZywhm2PW27qT5RiKhBwUPQsguYTbrBZ5owWXs5JvuuV2iXm2w6y5SwUh",
  "key29": "3W6LvHWj8sG5KCjR9VVdTEgJMwQPLM9jes29tjF4nV6b2FCRmT9LZLkxSQTxTYQGGquGsk2u393VBWAS8UgYsz9n",
  "key30": "3nfsxBUkGAc9NKd1a9oKdLcsg36R1RgyuKGX3NgzoxW8kbwZJQ8MYdBSQpfgxJKmePpwTYHYL5dzPVmX8QVSzcEJ",
  "key31": "5wVsR7aeMFzWt4otVZ5ejPa9VY8aMbdpWnMj17Zd3Ro9WG6FuEXtkUcJ7BKSuA11c3FMyT4qLStett1Q9NPbr4rf",
  "key32": "4MZQmo3wNnFmuxaM9pDb9pdQ5Xx9wXvx9AxZrq6GjCX1B55EccvnEVX6Azj9L8TGkrxjj4agGj8UTjizmiu13QjF",
  "key33": "4jxg9N3H5dPDUxm21r4XUKhbW5ZHHQVhGbkcitYzKjNun8MSJWnRMoxGYiUjn4pEWPeHqb4rDMbcYJtwv2sLPkMQ",
  "key34": "ivbS1oc7XortEeZs4L61DcQjimHBXoRcWs2Hw5vSBtHSH6pXN1qTjaH2PvCksSo6Gi9EQCsTAn9wXc5wcioHXtL",
  "key35": "JPs1BxMbQWk528DDg9tTfzVZrZEj9s7S9aHrDiAARn9pDqCxmc8vM4jMi37LAMCCMuwkvSbkXZAL5HuRVR9RSji",
  "key36": "5KTtDM1EkDrAyY5CiWDkptA6Eo3w6DDttUK47FBb18kFdbpuo2TKkP4RxMsysZ8rKrGJGzaDqTBMwDAMJNbqftpv",
  "key37": "3BK8uWdKVG4CgRPv6qyweCYqC7CuVKHqY4h8yD7pSaBX6LUSGU8vecH654fxyJeBxXSSJppxiSRnTkGj89PK7fn1",
  "key38": "Qzrn1etxmbQNMgCYjyKtLba4Jnj6n7NQMh9vQauJuTLeWiMovKt4g959nCRAMVhyMiXrNqcrZ7vRRWykxt5N2n3",
  "key39": "4xMYvji3keyLHxeNxECjLADjkYW2XVpH6nYPNEHMEomU88dcfbngP7KR3F4JfBfjfqsJZNH1f9C7NCw1NJk79kzu",
  "key40": "2dcVdacvZPLYtgUCLL9pXVHr2bVfLUGohqFRGKrxVK78EPwFz59FQoBwaBm5UJ72p9SHwXQWqMGrVPwmA3byfDQf",
  "key41": "5mqrz743ppZiaeHCTR599kM1hUEnVGPdDVvvTv2i4KPG1as8J4YuzRtr5iGwKBgzPiG8JY5YZCvEXcT6QqWGD6zY"
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
