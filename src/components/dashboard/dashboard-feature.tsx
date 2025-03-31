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
    "2GZaCfQ3wjZdYeV4HEDM62tnJsn4m3x5RPTPjCLG3xGFt2qGBxj7Xndc2SrJekSDRaymivBXz21utBMs4Waw6f1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JHRk3zeY2UdS4xnpp5XannfMSUx1R6KfFkP1VYsJyfKfgGgu7PtFgmA4pNQN2Xw1tEVgLeWX9Lvi3ecZT4kSGpp",
  "key1": "3iWUTp72Dc4LB26G6te2jPbxc4kAMobtmzjcFcY8NfW8fCLQ7thohU8XaRAVMq718fXZLodG9auJYEtufFcNRtT6",
  "key2": "Z59kammoi9WDZsrBuw84dbQP11Svf2sqsPWPDpAZ2DoNBTEuo3LcCRrnarr2xRrJ8aZeM3UdHA4dJKPLsqKA3sJ",
  "key3": "mFxnqz5G5gVRRbCZpNN1AXYg77SXWuYtf8JvHDw2jk7EkaZzNiVRRvR7M2kWihD1QtmGqtfLoPxH94w7xD1hFrq",
  "key4": "2aEThs7wBpY7YNahakTSHH6xXZhW5j2gAyjqEwnstNMXFCYjF7TAJ1ZHPAwiw7JUyW2fFR44awhayaGRpPfBFDhR",
  "key5": "54BCZYyMX79TTw2aMSqdxjb6wX8ETeTAANqXJ4U7hYZoXJqSEjzMH84rjkrEZDstPVW6tfgHd62zj4umiM6fpVeK",
  "key6": "4aBybPZMrgECXCTUKWWBbEZrMqfG3YeUYdLdXxpZFFamLKb84fhB7kwKDdYo2VQvVhYKx9oVYUyFF9Bfk75mnorc",
  "key7": "5xngaKNqA3hWa7Xs8qX69SR9TjGs5YViVQRJ146jBzEhuQA2wJdBBZnBD5gzSCkMWcJkXd1D4sECEUTJY65nLVcf",
  "key8": "pxzRdCpeGdJFJPetBd8v69rDBPRW35DcoxZyctNMp9spymaz8Gh1hFnvvrnbCVsqyzdzmCKiNgtE8KT8EZESL2W",
  "key9": "5Ktx78tzpHCGKoa8mMmc4mApDtsUjQLcmJf5RuF82LVNGw3hT7CTDAHiifTxzVVpavjoFvZATfA8BNWR3rZQw6Rv",
  "key10": "3pTjGJXCtzeA6z8cTTw4g8MNZ9ZEgyWckjnNDrrWZYbjPJuhC2uv2AxDNVLRxJac8Hiu8oApRLQs1CNEBdmvNkEC",
  "key11": "5Qvp4Jbn5xcMUzsx5oiD1xT33oRujtXgs8EyUEgss9B8MSix2NB5erwGCUmTLJXgCCSw86NKmQumwWYRdamcuUXp",
  "key12": "2V5CYrTa21641KkjpEe38AFtiJqYqgSh5C2MF6QDwHntfiL7xSSzFkb8BjnaRtM1aC1ASfwNrXfuDNqQsKHZ5PJg",
  "key13": "62nfidpghaCS6pbLhg4beDRoBNEYeU9PbyDczTt4yj7HZukkECuJwiyt7whsYthUNKsogexnGdK7wNHH9YmaXjCu",
  "key14": "5CsWZxRJJCatqT2aKYRPu8aVLSLfwW8nQmJFiRKcJg7d4tvK84V2ik2nLLWdfPd7vzNkPh4VQ7uFCa9Uu9mDrkf8",
  "key15": "3vHRGdnfKGhBpwiPdumDaowCvegr7Da8NQMmiELZQFVjZpt2F83dCLgKfQ4UEfwyKRwtP7xvTTdW3JxMQcLTX2oC",
  "key16": "A8t4iRPzt1gSWP4NrjwNtpwjjNRgBk3hjH9nkRYc2hDiQVyz9mtUstHuJwDZ2Mi7eKCXsDJB7uPdgHFM97wSBDp",
  "key17": "2Qb98XCPPFh2uJfhJbzxC5FX4za7iLPL1spHJrchZdcNNZF31WykVpicdE6jroi3n8bn65gjefq6795zxvYdxczM",
  "key18": "58HboDisqtQwYoQAFHYwiKgUgviLaRVVLgbh81LVah8pwKzGrJNN6WVf1ixshz7mhG2wVSk4S8FnCUjoSVwdcngm",
  "key19": "2PGtx1kbuECzHfTfh6brPVFvNCTknixuA9EQPXvrbNhuhZT2u7Qf7y82M8Q1nurMvo1LqxGdj1e2zS1XVFLe61Qb",
  "key20": "48UQfvF6TYZFo5kbaTZGgr9hyR71TtgrkJ4iqekgXvFeeUJWRkZFhpPTHyNHeUTe7zRH3vF1oV4xTeBeKPwXJGs6",
  "key21": "VL7GZvRTc9FcbVzGnuM6Wb4yrjn9sn45kBcXRdVyKp2DnFeeJbebNzbjZS4X5yeQ3gvCCkQGoaej8Sxrh4KB6rQ",
  "key22": "A58yhYAFpDxzyFAjQyEyDtbcTy5oDjyHtDhod8vusWADB2pvKGy45JdCtcgWqWU86sAY5DKz8Ze817TWw49T8Nf",
  "key23": "3a21zQs3FUhYmwFuBfPpfvaPgTdubx1UEgDyeALvs6K9kLG9S9cG1ZpohTU6U86YJ8gBcryDSJC6UKBKwY5VfpgL",
  "key24": "5WbVgpcMymejSc2Cz8DbcpGxTBMjHKGgLhxLQghLP6ZrCPaZ87PCCpCwYhHEwDYnVBcJfFbS9APEW9pBbXvc5SNe",
  "key25": "4Gn5QSxsWcd8ynS5NHFCB9kBQG9ab5X6sWDU6kxwwcp4ygABbR9gNmj4hmVQU6StGaz3EhT7fthVFA1Jaj3Y4Y9g",
  "key26": "63EUkwDBtGWpcnnXxKLDQcrYYVoAB9BcShHiGGZZyZazGS9kGzW8NXoJUFu5oYhuiiqy2g634PTheZTfbvLEnWwC",
  "key27": "5Fg4v8JzWmDAwxbEg5nhb3wLTGHW1DE9TKs45cWG7NEsrDsRt63YqRgtdSYSifAGHjFsE75nZVvRbgKMcwygGeCP",
  "key28": "2Ss1zNuJK2HGCCtzS6na6a7ZTsVuoqxiuwX66nwPGhEYd1KN1qVKQkmpRLVU4qzZw5VWfq4S6i68GyWJ6jGtPEgW",
  "key29": "447vPLoAnPHeLQufvUNRZErds8UGShBor6yhSXyasL8WB42XG1bogm2bBGcGnQaR1mTPLoZPbecDdLTLcVEPFfTV"
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
