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
    "22yS9rqWttktAYbh9Cq2oRy1bbdokG9qmYuxGEd2AVSfC1YVm9Jn4e7oGjMLucTDBwTXUoWgBm3chFebwFVpGrrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V1X3qoSNUQDzuASP8PxVRWPkpaYuKbCPx1P9K5piPpDLyYSqR49aoPKW1xw6H8SXVoDgc8kofmVLQEyXeQCsSEU",
  "key1": "4JG6yYac2AUdtDCkpuLijKVMon3JoZYf24q4ALXEmojaqKqG22ANbYgZUbkEY5RwwLeXUzQMtmiZpp3W2apVRgKw",
  "key2": "62Z3vKBhHXvAncQy6VB69NC3ydwuQg3ryDH636Nr7Vsa7HovazFZVM5Q8BUU5CQB4VBKxEiKRJd2KpfHgZFr15aR",
  "key3": "4QQbhqNv3kegUXwN649zCc8aPMSzcLSThMNRGPJ17gVo1Kh573RQShRYi2tYqTnXgnBDkgssJY1KQFqzmKVcQoLg",
  "key4": "BMgmQQPVrFuVRTzuxzdhHfzBKpa1PQq3VybC34Z2GSjwb5PTVcpobRWDDtz5KgouwdaZJFmxci1YsVA63CC8oxt",
  "key5": "tZkcwQjedad3EPF8ekhGdSkK7HNKGrvo5LLRQTM9dHibhcFuiVn9kotyBP69UftkZZFZEV6zPPnFuEyVDhq38xh",
  "key6": "4xAbDbcNHhwUG2Ev6299sBC3RzuLEnKnNMYVTXwZ4UWUuzHTPjPhb3ajGcF2eHewFGmST6FJ5FBys9m5Jmjseip3",
  "key7": "58cra6SrnYs7j7sVg7N1Z4cHuZ6kDm1uTtJ35vV8hzbxVvrpUvbrSf6Z46JxKgzydRJsWqHPD2srHc1M6MMgWyjo",
  "key8": "2PejEUmNjkFRsdVse2nE3aqQCq3cTZpsnWgiVVFKvGimd4YeMaSYHcE9RipDsxHyrnMe9aZ5vgLFw8CmxD16itPC",
  "key9": "3m9NMKw5ZSBkUj2xGRtViAzVhVGdjkNtH2bgkKnX88aLwMxB6KpRVYivWP1ye3rApr2DqDszmxn1DcYWnvYsXGmf",
  "key10": "wAxbsQ44r3TQa4Pd5vzcw2TaLNJRY7zP4eqSXzuefxMy4nqGZXtbwnHEue5ZYiQAjR171dxDWgKgDJ82YP7UbYx",
  "key11": "4sqERytwjHM5vBWKx88ff13Q2pXjWP793i3CpzQJwsHUM72RNdvPqXjjbR1CYk9TFacmLAAMWcGHNhWd28STJRh5",
  "key12": "47PNFo8kXXWw5chjZacQMZMTAG3ZMFpU5VqF8RFtTqgsL5vDZZ1mv4ZgAXBxMTqouNVhMVYtAHbR97Umdr6mPKqZ",
  "key13": "47D9aPRfBUHX1nedjLbmGt1sRgQzpewc328MHXtKxrrK1Zgxhwq177MU1q3pCjFtXGFjTm8vNgvYhswU8L8CF7wG",
  "key14": "2ZGUJs1qtwutmzVn1MaQ8Wy6pV3VrxuX2dx1t1REJydXzyyrXvwnKTYe9Fnx6XGeELsVnsGRiyPdair7yymh7gw5",
  "key15": "5gJuqwqJv4Z4iegPVhY6thgdjSraSWvFPhge4U2bNvxKreWpuNqA8h99bzPMACbj1ZeguYnyDjUCSQM9dmX4V9Di",
  "key16": "4VSWnBRuxs7Ta1AnqXShcNRyjY1typG2EJahYR3jb7kd5oiErMMbCUvMGWwY6m8zSxdTtsR1jsLkaPJ3DM8Q5NXB",
  "key17": "5PSZPT1kbmNMq6m6iXEpc1TLp5YLtR6tiBE6gJfMEvusvwWz9XwmwyDxyucX3emeZdaQf9oMpavCYExjZGgudFic",
  "key18": "5qF2naMUZ8oHP4U63MP74aPEpJx3Vfy8zBtumENUJWtMvotzsSLmjJQoyTfpWLSASTTNcZemmEdKUFYTETmbEbRV",
  "key19": "346w1DWci8bgEiQeNzWfXmzsbczcUtSQLVwd35houYmKTtb5LbqXFsU71wyAxiz5EELUUngxpyGedk4MKUV9CLJv",
  "key20": "5c4YH8Dh6wyLKc291CoMfMHXLKXKNPpnk2G2x2JLxUvk2Dsp8XHoE4SBMsVyf1tmpwvAhSCM1HGECsZCqFDJCjNM",
  "key21": "5BcyESuN7ejshh9UsGSord2js1r69Qe3jLVS9RvH15HYWMkLYqdkmJNJ8WAZJrvSY7hyz9vMV5CTuDxs2r487Usf",
  "key22": "2iwt5xUFkJDNgDqSJrENBzaGn3BjJZnDsiLvJTe9iK5UgF5EjByBoBehDy8qe12RbSgGkUAHVG6RLmDuSxGHeBT8",
  "key23": "54yhUBwgYDLL1Jyadp4pgFDbSwBe4H4EFC1qrGAA73fjbeAhdpCkQKkBsoaMdqDwF2fLeFsq8FpWMrKMuJfeJTLc",
  "key24": "4qZfzxZcsiA56NbdJd8w6X8YKj5SpH4M7aMoT9iu95c5vweg3Efn1jTmsUVMee5EU4BANvUK2qpNabUGnSPnXH5",
  "key25": "3CMwBzDFYpV93kTzax64MKB5QBYotmTv8JaM2EXhysq3e5v6p6mN5g7MY7dvjymZ9EvoMzShmEWryf31Ee7NEtL8",
  "key26": "47ojxubirP3brP3ckqVypMXyE3pAioqpmoxY72v5oe7LUzspWaQHE8ozQpxBkbTD6BF3tfPhDHMmwPZ9FHcaDcQX",
  "key27": "59xswY73pARCrhQdVnWvqrQJ1WBUTTpeA1d92dsDirqASUCccBpU7a7vqLR5sAkysAGaymVeV7mQ6mK84PzJeKw1",
  "key28": "3nye6zR21BZqGBcHF6LZDY6S7doJEQkoq14x9rrZsH2qVGfxzPzqg8dhszwJFk2ZxfqDsQTLqPZQ8kDyqfHvFZ1a"
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
