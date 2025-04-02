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
    "3z8Tja8pWPjTbKFTzVskKCvtEyvMQ7VRWR6sroicSD6TwBfckLMWw7sAM9BVDDemXQRFsSxUWBgasGfBrggHHXtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ShGvjSzGjdQegskG6NxfDkiUWw8hyWHG2BnqXP9m5wNP6LLKfsdegfpZt8j7TzTkPPwqZWXYMXqGmSYq2FGwbum",
  "key1": "37wEnBeCZSukKT6ryVTYvKmHFX5uEtQUm433T5CyvPMJVGXL6eJEsP9sdLziDYnBGSmKTU3dyJtTzJuv7jpktyqb",
  "key2": "2coa2ZCwqjFt2MjBpj83KAiAecfQrFDnHSqZwigoeVYXMtu1HwF1rDCRkoXciVCo2fnAZ8ANW3pk4yPpy3ECrPCV",
  "key3": "3F1nnrPcgysXi3v4GsWgv8erUXW7ChXUcCoMAYHufhCrWXyPiEq1EZCeT56QdCSDLGvdcRxgpCQX7Hc7Bo1nE4vq",
  "key4": "5j58AaqQjqBvs2yGgFxJ1Ce162fMuh1KEkinnBvmWxaTRc8yF5reebx2gq1zSbyfmbd1baG9BaTLN8YjELvTB1iD",
  "key5": "64Yf3eREK4JrApjh8GtWpSM34DyLfye2zvVqeZmjXSBRCrPKAsmGxyfkaqCbYBiCbvTc7uN7euwUcyKTX8w9sk37",
  "key6": "3sqwAwcyVekLvu6e4QS24we9jSurbcMfpmyLEA9SPH29fbYcHS5QSjixwKqadnzdx5psvTxfQoKrPs4btT5z4QE5",
  "key7": "2fauNifVqJ91yguZyvmVWHGS86y6eQPvkskRcrwxXdX4VuBeWMeLbhYuE7oTbjsqiGvXPqDtm9ZwNeSYqJwLEDbn",
  "key8": "FEtNDbKcUNHnLZ6Vthjsv67qsPCab3A5FRbqtoBXr7gUKgWX72JDjVTTSGwCmgHkdzHXqZVzC7nDCZfPRV4aKaN",
  "key9": "45sr3AKkXFdM6VUaMLvSg7XQRgSw48dSvNQM6kSDdBQvjDrAg5RvNdSTKjPbtXf48zizUj3eSM5UGhse6DcLjvu",
  "key10": "2vAqmFxs9qLzKSMhKPgVL7VwSijs41srWz55mRRQrER2by4frsjMsHYJxBGtU3UCosNtMNDBF1wmfsKCksd8Mw4o",
  "key11": "2628aq7Yv3MQxoHtDqxKEG7Ks81DVW3ReQkUR5ELXJYyTRA2W1ps8jpioLW6AfTJaLopBXxFNejQcYGsa46CJ1MJ",
  "key12": "3hCSugTCfRcGP9YP3WpfDFi1bFouVuGUwa8xBwDbQkMcXBmTrrqgJbLZYMdfLkyS9C3qJ7r2MbYCAn29ADGnJuwt",
  "key13": "4xrJLWAWeLvcoJNSy7PBfDg3KTqt5CH2QdEdiTpS4mgiMEujE14Q7PrjJ9NTRVEqVY7EY9JAJbavK3Tn5EF6Y4iN",
  "key14": "4zC2KNMHN598rhnW8JWpLJe2rtZfXXHRbtwUjfpLojvpsxq7tKxVxyq52V6DvUVV6kf9hap4fpnrHGo7koZQsk6a",
  "key15": "5q1gxh1UDYf9WU6M4chPdsAXd1HEbU6JQK64EzQGnERot1BDsvYfkxruybuEg3i7aH9cyaRMA9bXqL4e8VHidP1Z",
  "key16": "5r2sf8ZbkoiqkYerd6Bbt1UWUmUC87xVKFH8x3MafVKGaeBn3ZbyXdhQqwxv57ehfUY7hQdNMEhtRFFrvfSRD6ya",
  "key17": "665yRDBqe3EbFbTUz4pVavoTMkhXsCHDysqhhoLZv8xbfMiSQw8282Y2EYMaE1N7fSoPsXXvfDFmGTbumuWabQQN",
  "key18": "DihXtsFaDZ3tMEYhfWqsEnj1SHwjzrwRN6f7SFzNU3zXV3V2ZyEs3wG7aSm64yTv7PLU4vz8pKTeoT9u4Yeqmn7",
  "key19": "4en1xtn8gi6Wd7LcNTMMdJ4KCWcrVk7fqgNN7zCXp33TQmhL5BDJRiVUPwmoSUAQ3K8TEBiHtJi5Kk4CrkcimaHY",
  "key20": "36DTJqxfHh1qsQEGUkYgzQgqkupjr6smvVEvxX8enA3pYe3wT5kAnbpLMJvpdQZxibytbjA9yuMJtpjckKoBDyTQ",
  "key21": "3P7oLo569t9k4B8x6Zqy6YqaJrtkPF1aRSwDgMbm8whX2JE5LQWn74DQMhZSd8DHsM6jvNEHyCHnXpJpKA8W2p42",
  "key22": "4ZyrWG9rpNCxPPYGA2yAqC6qUSH3ejVNkcYqjyGAX7xaLucH71qvNS2aXSiCvpfhrrrZvc3Xeak49QXe8qcUVCqW",
  "key23": "2bquWPNusehnNjEGfMa3EEATNYeiU1f1YaLmQpDKzz4GTkWH7J271Vcx3Cuu7ehZzsj7xdnhopq7nSeKSCNYdCMs",
  "key24": "Q4Modn79fT6ZkNBFrBFhqTqzXEUQc43TfixBipkj67e73GMj8k8g7e9mvXYsnvCm6hDfwtt4wbawW5NhP8G2sS7",
  "key25": "3Uk378eSpoK24XiTsaLkTZCPrLi7GUcTALPTzEcpt7Q7t373cUmDx2hpdrzjM7FFzA8f8VzdjrRaX5BPYf7j11o1",
  "key26": "33Cv8mygmd5YTcM5oShsH5ozXhVsTiM4cxAvMPwPxV5gVX3GzLr9Zp6Bs7UHm7KQxP461jBaeCqhLnNfpioUSPcj",
  "key27": "4WNkGedbxVKWUjExvxYm94TDEz85oEuU2zHvz3QAupwXvTUAWogtNiSG6PBF4TPMbbTnLYdwbo8mN2DATGBYLPkA",
  "key28": "4dvBhCujv2rqwuUdT4tttZLsdT8iFuEwL5N7guPtiYofKVWcctxVdV3EFQep9g8N1VcwvM9X1LjJgqwAidNegLQS",
  "key29": "5ixVbWjvxkj76gTkQSkUPX8wzH8jaDVVpDBqriyHmNyDfBANEwCEAygJFpNBHNx853nQ2phDQ3y8S4xWwpNrpzcJ",
  "key30": "hthTBYMfCBUhMjGUxt5Twy9qALYZbWbwrT1BitHdfCLzkM6HqiWetKWu5tQKFYhEK6dJTZQcz3guyh5TRWiG1bU",
  "key31": "5GwoCaUfpmKm55uqeEdzK6doyqHP2HbrtQFfvPUMqHyJgVSK2zadEm8VBfG1BSjJeF7AWF6EC6GfHfF326qrgbQC",
  "key32": "4VhiLWfUc6Vx77QUkkrFd6kFfwAWRswQEmVqm8oXcumGNJtaD4iRYeqs52Re643hwHqMNr3T4yJobSMqAKGU5dqQ"
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
