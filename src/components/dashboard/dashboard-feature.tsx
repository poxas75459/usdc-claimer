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
    "AQaUmj9q9juz9jzifXKfm9GJ3HArJXRU4dU4Q8uGWMdk5xBoLN4AxvCckLivdjar3fhcpVNLb5BnsPGDi1znjRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uG3hKUbtLTtgVMMAW9uqeCQeYK49W2s9a4iAP2qEekdHtqddW8nJdd6wxdqnb5MFkArNa9yNySuWeUhme66qfuX",
  "key1": "5147XJp5o4S3wbwA3deCr5iLLEcUr4iyXsscRK5spD6YWqfPPUGoFwrXWiF73WnUL8pQJ4QW49SAzDVbgjzvpxvd",
  "key2": "2zpRNjq5cji9HeJfxRqDUiioy9HjRfJswPjXsQ5mcNmC8Jj5EDLP6WVHFZYEMgKPWyXLGZ1w9YNV52znBfqJWydN",
  "key3": "45qXtvgKvdoWksYLnU4tKoDqoghvVyofEu8aB9eLeKtJecXhc5cmbAVC1LEtgkaN9wZfEVkyzwo2GR3chytCGmwt",
  "key4": "5fFHwXmjwD4RopRmMXWJZAckGrPTcg5TrPUGFBDGGYgTuAdE8LMBhc5te7bxDCca5S9SpKLVeJJqs97jCF2XnHgt",
  "key5": "2G5oDN1qXgakPGEQAfj6hUxWmQcH88nqDFM424w9VtejTv9iZHucebdGZuPoU3GVu8TMiU6SixeDg6ZjmHn9QQZ",
  "key6": "pXe8caiBHxojJyrM8969pqtXQGUsAd9GYenKSjCRtXn3UtZAw45xsbbXjgrGVivtNvUgJRQ5mVfNXL8tK5VV21z",
  "key7": "4eZXfCbBYyJhw4CCLtTmXpsb53trn2uMe2zL1pbvfaN81F2QZ3Eou9F3KzEHxsGfmKWqQnmAtPPu3LvyfyYK4NVy",
  "key8": "4KVW2MoCKvuDRe9cYD3aAQr4pbeX97cLS3YkdghkQfKHJygLo4SVKLLKK8yV8Rzj8ZjYvN8ZyHV4kSC2tHt4gVNZ",
  "key9": "4Gbxs6RHRRVFuvcGct3gGzSbpizMbspanicewMUcQe3P6ehn5vc1N7kVodqUC1Ru2zzaudUfp4bPgNRjyeGxTped",
  "key10": "4Je4TQuZnn8eUWzTToTx6vd8M3kA8RNvFf1FGdu4hAjyGL1BQA5s6qmYZZa99R5aerRvLJAwbNQfszVyX8e86Wh5",
  "key11": "2P3X1pCrAzCPjzqViqEkKNSsF8ye9t7Dbts1Fc2Mw7ix1YofJ162cW16pJ6CnoeqCVpGZhZpCeNzWGjpi1Hc62u4",
  "key12": "4HXeE4mKZD9SEokEaPWyigLEjkr3uh9WHiz9KpASPpE4MtDmy6kLpvBE9dnw4qZU7Y9rB65MhooSVVShoeLcQKEL",
  "key13": "2QiqW6CQoGdZ7BSWLSUfMTCF6p8E1cCe2tuWztJnT3zmdrnBWXwkCtJeZiLGkskbVX9J5r6TA6UPmWNoc9P6vEFY",
  "key14": "xuAdvrJCUM2L8hUXSJZ97LN5iMkzoBzS4q6xcoWveTiiDFZkPoSX54hfzxiwqBS2cJ3pFAyaZHaN4X7PRq3D6Ka",
  "key15": "2VzaiNdi6zPWbrSC7iXYWAiaJ2g2NkFf2uAveAMNg4BnFPaW7Aag81qQmZNp6jgoGnbkjPHdv1RmCEUYmrrzSP44",
  "key16": "2GzDtYu6tNHm95XKm51aYU8kWS4jUWnvji6FsqdsxPAmZ3fX92UJFAWJhciEHMe1oJ1AiStVDD8sfjyYBAMxHtWZ",
  "key17": "4Vtw5cgJxPb3hdFnie3iHpYE2x7b5DsAEsKapbCiRsfqjubq96H3zL2GE2JD6F7B58ArSdx1Bj1tQUQsKAivXBqD",
  "key18": "3B3GZSh5aL7wTgoRrNSfgjmzgMcyVQRxwaCNPr9dJBwCeJwzKJ1QJ7qHnikUR9EsCN65N4tccNUco8uhzkPzY7xt",
  "key19": "3eiy3NHnBmp6L11o79fDApZwR1JeRyoe4Rosbk32iGpD5Ts63NHqM66m8hPtmq5hqnfGzQAgBkM4y5BYTYRMBiuw",
  "key20": "2NBNydaiu7xFmVsvqyCYh8adUQkXvufxc6wA4Jdaka66gB86mKaPC2sbSU4ja7y1A4cVVEkuic7pRegyXmXSfVFK",
  "key21": "2Xjqxj3H7VnxGNTB56uUt3YJ48o6cKk5T1MHWrYGa2MP2B6ZtPj99Hw44Yz32zMGZx39x1joYBFPG6StSmHVtwFS",
  "key22": "2WQo2zggDWueDGuCZ1oAaFtFw1juWXKaT5Fx2tzf4M1g8bY1KQniGHoo1aQv1QKUAUCdHdvGtCDKYgKaz8gq9Pbe",
  "key23": "3osqjAqdyXesx2rWTwxeRA3z45Ci18GwTxfkKk4bRmy68nKYufayRyDGiggaNC8FQhV3yyyy6NiH3LYuFqqfMin3",
  "key24": "uWtTkq9ffh5pcJShHMeQVfuC5NRspa35X33kEaVpF5GM97yAh7YbtgK7KdL58E87pBzyS3DTdnhenVTBscvDHh3",
  "key25": "3rdDgYPFWGWmn3eBS2jNTYZCSdM4ztJAdnyemWtjHvKNWs9evmBAefhWBgw46EpphtkTyiBMiQj6bKjC36Pq1d4p",
  "key26": "3VWfwuPwkYWo34eZyznESRwdbLJHbMkZqnrraWCfs6LPJWuxf6QSyxb8Dr41aQKQmrzYxKQwzbPG9xeA4ea5rjoP",
  "key27": "RjXh89Kix3nkHA22t7m5ah98ZBYTj7tFT3LcXjaSbsrS8EcwW16boFKV7erqQWSmUAtzLR2fhazUkzBF3yUVYfL",
  "key28": "rd6rUpao6eyQ4fZxJkgt3gaTa4YCxVmnizyuyRJr6UL94eeA6mK7XWBcR8JY7gWeMBQ3hNDvu5xkoNN7wZGZhTF",
  "key29": "3aqLvWSvrbGydqzjmv7PzSkYx62jo6kuy7224QfvdLmK71uNuNtjC9qm7jTxMbPpEw3kg8YydLNBn5T9rwfz2CjB",
  "key30": "5Jbm3RKRTcbv7RoRjcgFtZPbJHX5waitQJW9Y1L4NUMrpK8cJHh9z6iTp5nzCDMmEQcEP3Y9sn61axbYu2goGDwB",
  "key31": "4pMgUE35cpBm6zULXRpy4fS4svkSbxRvTNETWHiiYyHFzqEKHPQHUMZbbHPuSgAz1Q9JC9hdjnEcDURi8Si7D7na",
  "key32": "28fXKW8rs2rkgy2kJF8jXmF1cH5D4zNf1LcvLrbcj1nZaohkrLUcNND3zh1RYErTU3QLb5FUCenGmZi7E9pWJ4ds",
  "key33": "3W8e2AN6PM8f8pPKvJcPAF6LvW4t755JCUcZVpgyD3vdG2kSp7cFUwVRxcsqXdGmoMoKHgUk2UV6wuQUGkqjWJJP",
  "key34": "2S9LoxjejNxrW2UsJZkxjBEfyBmXqu8E7q3uSeLzoxPQWHWQ9392NgHsc9jAMG4XJ673w3BZ9agXWLWDbJfvzJSK",
  "key35": "3hnxD3ES19TabC6Kpf4PeKtidrvvM9UEpPZmbADvAbU9pKozPLLeesVHBVTU6P2JY4TaJVk4oy85NfMwDrsmqR9C",
  "key36": "FSmhQDSnXpc4v5nkm55VpHmZove597Nm7aUFGhuZrzp7E5MKgFj2AHxdgnCBZGEenAP3EGvtXEVAVxyTfgw5rRn",
  "key37": "3peS8r2MGgNakrKTLXb6vz8GAEdAsVKdE1P449d2xG8Jdmt6pBz9kogM2Ph6dQPZC2veNwuJN4L8S6EXXWs7kxxv",
  "key38": "3qayhgFaYtt3KMUFfParcUmRQGAZDLjAg6mJGNM36JbFmhrGRbRnNKNqDq56TDQRfh5ebNmMZFCGJCPjadaH8qhU"
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
