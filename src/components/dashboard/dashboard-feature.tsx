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
    "SJFrFTxAQjBXReuBMNbx24XfTMQbL6UMSgxKARAEuuobru94mVPdUPFAVFfymASbEA2hMVcrjKnw95Newb2wfTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CG4NpN4WJBhQ2n9VygpQjDcHo8vEK2XSDTWererFNXWdUehLmnyBrGB8yCPuJkCsquDAoFVq2gkfRjAzBQAMSEz",
  "key1": "42KDzfiLv2NrF12ugCQ6x4MUpcwLChU7utX1iiggYyewsJitwwBkJoHLPaRBQFuvkVJ3JykpmxSf7rTnFS7K1VXo",
  "key2": "5H77MUf1sMCjyHTLLkSJLji6Aj5hSYjW8Cn6waaGMXNtKDvEZ3V13kx8zVq3HHw3odhqkqM57qMr7uQLq5fRJEEB",
  "key3": "KkG7zpdwfizPT7LVFgZXAXbtSY1uiKet7PkYNd7tHqGLb9fgEEFZ3E3XzSDitEqXzTn3fSP722AGLRTHCZABQ4k",
  "key4": "7iakUsfzExsPnWrXmojiS7S7dni3Rto4QgreqNrTgvZT6FwNqAwv9YBz5fbLALiJt9VR5fDBNqqdnTc9yV4q6hS",
  "key5": "4hvtBYsf3Zzyks7GBxg1nzvE2qJBJBaFxmWpoRnDr9RX2VyTZqfStdtFAiM7D14Ym4P6TnYZ1vTRmGAMZNKb6duJ",
  "key6": "4gJGifo5fDdmifkP6BHYxH2UniG3jipHTdcbCzEHAi2jd7EwuX78EHWYMZqEB5SfVa7qBCZEBSGNvvM2d8w263M9",
  "key7": "5SrcWhsVjM9eNnb1nbF4sZdcSBcrqB5dooiBUpd9MJn5tW89dgiRqCm65j2811z7wx7XgHZJXmBo3ErLXxofeqhG",
  "key8": "2Eb1TTKBaCKeP5gYJXwZn619ejdsHu9ENaoX32wDKwaXnUjkV1XsSAPUVyS4Qc5tsaGG6F9gYSK8ChU3562RuVfj",
  "key9": "nzra4hHAicffq3MHpb552tcAK3AbNTxbnM5tgm9vpUrrmLpVwi2qHRJBeMDrkdnoTDQtzMYhPFkDNE8TFDdMnhK",
  "key10": "eJbzvExHVTY9i21nieyM3JG7WX7wLzK8ZVbkWvgiaXpVsc7EfGtpizwwXVRb4cRVWua75jupYnTzfnnAJPuHRD5",
  "key11": "45oMuktGY8inRWv74atLE8MMJYSDXY9e1DxXYzEQf4tmT7MzMqR1bn8Fs281nJ8hN84prs47TxAxk8KA53kRnMud",
  "key12": "3tu4Q9KEYyLquSxHXxWYwJxH8Fv1GZpzcbWBC1QzubxVoTXGLTE5Dy3cCjtcpZFJGdGs8Qm6QS6d8tW1hjyyKNgt",
  "key13": "5n2CxkUh2Grckq4nE7y6ASgUzPAqbKxTwwNfBH5H1j6L1o2Aw952Zu2qXB3FKYyHeQDFQbymvYcFoXD6sD586wYZ",
  "key14": "25UnGABnsQUmv8jQg7ipN1th6iF7ztZ2UUaJ5reBwocP9UK7tVBHLDt9CTzZ56Qi8tip1gCqE6jco3bbyDy8g5Jv",
  "key15": "LUK618L7LZc7cpbPSUnw3jaXn6vca6xuFPa1srtqwkeNGz2Hj69YEcKZwR5GfqQ8C4UnJgKjUQP7FVZgAqUTAks",
  "key16": "4kP9nfjDiWvcxwt38M58A23JhaAGXprBQcNmW6G7ocU5eKjvcaoNKVpKnVSRSjbcVGqdF2QcbZ7MjZ1E4pLkpaMY",
  "key17": "44bwYKJXsf7v8o9bdL5y9YABnjiXGmosnjXaSfsFhUfkLkpT5gWHB5fh6uEw22uXsRiUDw8uS3tV9Ed3fhcTPwGT",
  "key18": "5zYeGxLxnXCEp6KkF11RX7DTux4usmsfpE2gEcrkhMk3iHhHbRpmKioynP4rcwb53wuzyBNmBAGK7yahyXDqqSru",
  "key19": "2RmHSWYzW5PUyZHi7fe7qKLyT7v799dwcmWf6XkWz5iYBoz1AardyWTCFUbLeHo93cdEbxHKsdL3Ck3rTV4zvWqU",
  "key20": "2FNRy4Ef4UweTkuxNbv5isvDvGRCBBxDgrnF497ye7NJsjY63fqdb9qnAABxqc8VZ8bTcXKQRhpb1RPEv1xQ5nXB",
  "key21": "XxrcqpeYdE6H2sgNsmrpQwokKnHJXeSaoRgebE6o7m5gkqmFQzXpc4AYrqdmivrSToJNPEi5E183fugjDWMGX2N",
  "key22": "4KAYt8aBBiTiqYK7KuVdghk2KcpWcMf2Toy6MVoe1KWCeNJsFe3bE1ixdLCfrNyG14p8i988sjJZJYVMf6GhB3LK",
  "key23": "2uV75rfHR3AcVVdTGWPR3nCEDZzWiZBoSCs91r5iW9QCKpKu9ztRkXD4TQ9StoVkmx9nbDom11V3Z4zCz1okgMgw",
  "key24": "48tj8s4jS1qszh1MCts4egfrcQmwFR5ca9rdjfCZUSgNM6E2rwh2KDCD3qSEDUBXBT2JT8seeieqtJ3qLgBpD1Bk",
  "key25": "5RgjER8VXrc973CiCHPBiVBxuobJuNhZjCQ8KExbseYhuFFKQhpkaBjHXKdjM8Sd6jaiG3wYPkmteoRsNqjeoimM",
  "key26": "5CeSwen1JhsEaUiaPPQq6kMK9bUAdrVfdPjgeyu4fFfmJfQBw6PfT2QoEH1kgQ9ZzTzUoc7LBUPGpF3arxTEZGmP",
  "key27": "4gva1FGUiXcPpDwGeHDgg3No9vjJ4GqdtZFBTT5T4vSUUp9WeG73unoQq3VBrVKBDSrkmepGjAQWw1SuW6WyMZsw",
  "key28": "57fjpgy9WrAyCnJbGQsBXh7ZXd8E3YmdyU9usvMCKwv5pHVxKd4M31XaTGhpermm6FaQtwV8D9q3a2os1h7fck6R",
  "key29": "35NtFMe1J6xZxQk4D5q5kQpmCEKtAHncCMa9wf6iatUr6oCDnXwxskcBHUhMqwy5xTgTw8Rpcs1gvssmu9aP52dZ",
  "key30": "3HxhiJJeHcrf8gTKF6TKQEiDqXEGsZ1prkitt2xdCVxFcGJ2tuZ4XMDigudnQxm7fVHN6PqKstq2jHcDErB1Gave",
  "key31": "387uvvShZK4ALaa2jCxaBHn4Az2Lsaiz7nULmJrj9QZRcaRSEgiKkrn8sEmEVGz4m5P8uCpeEnRtz61Kf4HGLwXy",
  "key32": "4dsshagFwLWLyd363HuDB4TPNBppfb2e4kcw2MTeqxDURPue1pDXScXtg473vUtKybUSAhCcK4eBeNCLmVjQzZUt",
  "key33": "5BnLTB6r8oDthGwLp3Uhv2m7L9Mo3ytN2C5a6a3sG2awCgCoNnvAXdBPXi5EAPbn6pXd4j3Tk6CLxFrWdeBXsEGY",
  "key34": "34kGnC9SmEvrYzxqz3cMQZ4mkCBzESFGttYRS7vJw1ak4gtSTc6xc1Zd8BGLLJdaNwArqL4oHFAButadXXhhg311",
  "key35": "5L9PHscWCxZBW3GvNfuoZ3bsXAiUGuwKF3AwQnJn8Mo1Yg2KiUcLTfm5MGzGHb1syWc6RwhpoMYn3nc7uB4Ua4LZ",
  "key36": "3bUBu3tgjBaHUQ7zQ9UGfrmVcW766bvBVqX3ati4LEkQfgjCLbceWgJKiHZ3DJq1KimNCqzKUmQvSMoeuPRPfY7G",
  "key37": "4GRPUjWvEm1Ae6SX1N6BuksnhAJPb9Mg3EbJwdjQngkqnKhJvFbJBrnPRemzj5Z4JNDdQyofdj9LzrqZTQ9zTk6u",
  "key38": "5kfCHj3cHX9o4KcmeF4sQAF4EsqsrjFngC7Aqn76bGtbwx1PHeGHuQbETPW83tGZDMar1AMqkbGPStL4QLa18VL7",
  "key39": "5EeQDF7Xui1W6exPVhcgsCuqm73uk8NHSTnPoE7ioDa6vhLCv8kCbnztD58CqWPi6WZ5yyi93UCmZq7DPDR8dfY1",
  "key40": "2hz19V9fh2qHbn3JtfefZwzWnukY2skkRTRUp5ToWTTDs4uVK6HG9YNsDFiq4AqAHPR29h7UkkGKEUvgw1vZPHjh",
  "key41": "54dekzLS4JGc9msQwQLVFsExXsuD96MmHtjsSxtxApK7bAdhYeibo3VCj8b6cjJZ3wXsESHbc5gXd3SfQiqaRVAb"
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
