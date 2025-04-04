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
    "5zpsf8nX3mRME38uNBboruGAAHqbtKsWbaNxd9o5pnxhqJvEhuQT8XaLX6oPVVnCJgMYHFt381AYJk5z2d8KfpRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ewJNyvuePg63vTpELFqr7QKVKWwiaDfRsWZXN1wn7cRpF496UT9KwE1Vk836RgBAm3r4r4Yh6fEnQpjs4TifrNN",
  "key1": "2U8CiiniGoMbnkQwDQmbBiCbAcPx5JNYvpM9vHDKEY1d6de92uKQCpryMrppdoYiq5rK1G5vjHkK7tiwZXX9SAJ8",
  "key2": "5JCcsW3g9cRoo8tdM2bKP3g3v8YNuFaZfmMH3kkLahgS9742nryJJgbdgb5ZTMSNVG89bWt2Fd6u4EUUFvhuyi2T",
  "key3": "3khMdLxt9EvXa5i64KYkH87wXeVQ8MzKsu94SPsmSaHiQFaQPNbs2i6tcHecz1kCewbJVnCio7JcukdZ5tiWbrtu",
  "key4": "2a9afoNKwpAHiAWCJ4UE1axHmZoj2eQnmZERGNwkkhC8wKKNJfuDEfJQ1bMdqCvzVV3j2tZPnhB247bn6cuvcacP",
  "key5": "DGybtzcpJBqNWxQTD8UUPXJuyXV8QEPkjo9ePfHMvu2E3iRUNnC9hfVYTtbsohzZPALQqJMLmr6CxLojR3jW7Sc",
  "key6": "3dYMC5aNhSPMZjBbxjEjKGwbzRFdG2WhjvCVPuh4xkj8eoeiMETJoSyzKyEvgJgEKuLt5hJGnw7BbcS1pVVHzT1Q",
  "key7": "3SKpnRKCDM7pyCgZcdPfy26nk6evv4TUcJxAy2FXJULpFGVakjtxJtpco8Ga3SBiGhugosdJ6r4QwBNN2bByBBXu",
  "key8": "ZbE518gwxxeuhVmHAWboq9efkvJTTFs6LUVXrogCELpWFsrHuZv6U17pH4ir5YqbdqY9Vfw9EH6w5kX51AtUUcc",
  "key9": "3apq6B668mr5jvPzziiKqUAX48pTcJHaAC7sWLzU67eLprgTXesMKNVZCxQ3fHzwmweBbwVR5FP1KWvZt8zpMdtP",
  "key10": "37TqKSeSYpHxhR9nFQ9rb67jhZWbqXtrPRcVB2zcFwJCgXeU5qt1XGtCZyX8KLMLqUtL4PWaeebn5eomBu8ngDEG",
  "key11": "2vquWU1sjE3cFvfa23Xt7K7FZ6DVBPyY67bPPeJ7C2mZmWhyveosf5v8vJ229oeQ5qXaJaBWyq8jadAZn4vR86ao",
  "key12": "2DZVsHDfVRdX1GBVsS66KRQSswT2ZqyJYQECBP5xLQKtHNsPPFYPe5G5e1DrJkAD69mz1BAhg8qbnU2NF1uyKZeq",
  "key13": "4E6rxd7KWJ7eTjmaBiEsCHt2gT1ZbBzGsVZ3hCmtHzNV5wD3EvB5vqi8pYKyRuri3wVjdscNEC6Pb3NFBs5exqDG",
  "key14": "4T7kXUHwhENqmGmrQBpSCX2rFDxjMh295n7XjYNLchXyLRCz1xmjyx8NiWMJQYqGPLTyaGwBh2W5imXi9fq8Wb3H",
  "key15": "23ZwyxjBgEL962gwLy5mqGmAhJ6Ad78dMvbE3WcL4qSiCtLukoAzLnKXzBp1eCu3pjmyiGvrKUcyrLgyfq1wViQo",
  "key16": "2PLSnfUxaBNJR7CXnaeAPDiNStvW932Pwcu1uUddcthcWz8zWQmhdxZGyVuSEi3Cwdp19HSeyjiP1TggJsuFWFZw",
  "key17": "3yQvrrAEFuxZnWB2XRkRbsc3Pgx5KQGD2DtTTygC4TEdhZvv23aRNeZYSf1MWnuux3GXrw6iweS7Ac5oKxAGAoP7",
  "key18": "4LvBPBmnPTh9wgX4RLLRvT9Ra1KLKfyQGGJUvph1GaQqr3NwjXopDS2G1xZZByw7TFDJGaDJW5yB61gZ6kZbbHLt",
  "key19": "VwCLQrbbrNvsJnTob1frqBuMfKptkEZWE4JcFwHmAsBN1cXZQtqmP78D74WwyBUwjNQNCDuTNVcyzBct5BRa5AW",
  "key20": "2k25hAYqxmu7Jtpxj3tvVzRy3N2KVcwY2Akj5q1CnthRY3TZ4HxdJbD4XJZP4Cqg1EjwNyFuZ7wBBaqrMVQtcGJb",
  "key21": "5dagSEwZNd8rhaHMZBAxJrRGaRGsntDss39UD7bDBZXzFna3y5huYe9GdgkobKEz9rGpooksRJPBaW9VcKTdH74z",
  "key22": "4bptVLQtiCDULJiDjZQ9Eyyvisy6MWrFyvZo93njsD6WKyYEch11jea6rG5HifHtRk29n5D5peT7CotP2rAknE5w",
  "key23": "5wLTEjci2NjQEQzySVPijz6UrvP2MspDHgnMLwPBFg8YCig8SLQukjYWfy7VeEqarvN27XeCt7ezb9FhurftfLEB",
  "key24": "3cdmQ99FFfGF6o6qPvdQo5KfkWtFjEHiZTAFi34LgHJhgY1hAvnKNzfiQ1boRJxDKYjxcWdF13LMkPmC8Ak4xcWy",
  "key25": "2DDntN3knAkK47vBTDf7BXvndJoJTsjFd6YeyEc3ZZtjoRM8HoL6D67XVPTViXX9YtPVCxHdahLD1j81HRFusxae",
  "key26": "6g3gD8Zzzp1eJc4k2BJrHyZ4DfCLTxhMuGsP9QfCWsusshAqyiHTRPgQW9qnDSb8kyCWitsEib9LyXAsN6Xg66e",
  "key27": "23ryBMBgfshB3ne2kwzQNtav2FSJrVvWY42JbdF7bU2u7No3sfCjfYnkLzQih8ysyJDa8X9v6pAmG6E2LHUUk1Ja",
  "key28": "4cdHymcpzR3CvkvXoSAsTZbxcTcyrN1Q3vHCP5yBjkZMPfC8UzU8jT73ANHeZa9Sv5jXXjJ268kVYHwKH5NLqtgt",
  "key29": "35TkjRKSxNPUobKKNxCcMtx7kNu7hJwmWjVMWKvmETgxbVwNEyi3wC3hsvyVGkmVwKR2WkLpshvxtqsEUDRrp2pV",
  "key30": "47S1ZXCCoKghq87WX44fwNPs2EZc9A98N5CR7ZGC1GeLW4uAcNKGzyfqMhbB24T2WVkpmSG64UmCvut1fKwJTMSZ",
  "key31": "Ki19B8mgAwA7qhMfvuUbyv4p47MAdehar2CYqxUaRCBLjc8tZyW4fYrBC2htYVPyHLeono3BGeNR1g2YtNTZ7DC",
  "key32": "29EgtjbX21RTxT7mwt8xV4fdhJbWZiFcSkUYxpksvMv9mNCAa2BKnvL4Jnr9xmP5aiBBRAGmLUWq3zaFGeBEgjqb"
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
