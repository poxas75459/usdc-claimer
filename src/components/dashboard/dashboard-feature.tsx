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
    "5WtpH8pdac8EpjDRjZVy32FKJHNiS6qywC4ngwCoByUQ1dngrnmxv5rHP8J7fyc1EKnedaeDgj9713V5znsjcJme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BhZVv4Y558U1sYHvTr5MxtNyHW72WTrui3ip3JXsBSFw4NBWqCMkdX4gQsZ5z5RdWM9DAvCkzbGNNTBEiP2hFxr",
  "key1": "2H12JAUBrS4YrhfDCW2gKKX4gK1h7bZrWomyNAE4FYMFeat5NnyESRMbuxv6p25dehrn9yA4KvdNwGuwsVRuFVVG",
  "key2": "3aSqdn8UBpUXMDZri8cHHod23Bt8Fc1Uod55BevWXNDQ34fsTfWwjv5VqDnE9oBvai8Bct47MpQcoipoSMxvT2Vj",
  "key3": "KjwEqgDMePECYos4Yv5rNWPK2B1VZ2kwSBDMKtsXd2pXqU6TywmRoX6NAzs6nhBWs5A2VripjE2xzEoYYNFYm7s",
  "key4": "5SKQ3aVo3kpMnZiAWZ9m8DVPZhAh9Z8SDC7sRq4BJJLYycaCygk7tf2wZg7CMsGevUbBnDDccy62JTcQr1Vh4BSR",
  "key5": "4s8FX6bRHg7Tr3FXCKP1iHBTKkzZ7DuDM3VQ4VJ3zWnCj4wCJZB2PJSmM8UDS7YQ9jVnz5JgbLFzokCicFiBqf8L",
  "key6": "oFmn7AevMU5Qacf92GoTLTKUHgk2xL6vqPVRce2GyZgk5RczC5SemYQYS618TFdyFdpFfUx2mN3ijmyBzXibDqj",
  "key7": "3ofANts5xsS7X9nzrVUFMSUqCnL53pJFk3rKB1jG4ZZqXbwF6DKf6tJgr7EJe71FjNqiNWtCAuQqG6XsDehtMsUK",
  "key8": "5zSmFE2UAT4jQfcUkktV9pGykkY9m6APJ3zyAVoQwedUgnkdMe6GrakP3RNPVEUxk6zij6GGVXNoVAiCxjrsXZ9j",
  "key9": "d4XAjxuFwWX4wcxRuj1uciWvw8e9TsVPMsVfdFB1KZCJRDyeZbN18qjet5MVvqK8dVPAwYbeVkGVWKNJVNkyAQq",
  "key10": "5YFiDmdiG9nB14tUPECZyUeuE6F1WMx9Nm5zkTMiuS5Vk4ZyXVmuKFLXvSWLPUmJHJ8uKVACHhHgunQYkF7Ychpx",
  "key11": "SAWctFU6AwjkxNc3uupFqG3awiShB5Q1nng6ExUZNAysAVdYZ77sYVV8gnegZvUx219ViTVpdo3k1USsEtCWc8U",
  "key12": "5sXwwDRJ2vVSbnxf7hrBY3BfY5h1QqQor59dwCYiW5stNF6TrdGWUsgohQLSrqYYe4X8utSbog6DTrN5nqvwnEJg",
  "key13": "3iVUSnaNFjtx4VxFUjRtVRcQYBrTnYxrhUmVnnX6Ry8kccmg5bQ7W1k3rxb8TmWeJ7YZzrzGA1eD6dqDEGVLEK7X",
  "key14": "3R4U1iQJyfnv9FW1SAjrKVNRaYrz3Ad6LeMGoYLowAa6uGq85a9YfRUfuF9cesX41qSdEcvwfhZbVBRMtVdGN3WC",
  "key15": "5ZjtSN3dsNzAn6u2tnQYofKaiuEUmj99tB6cdCCqhhgFpRSASwBoraDAQLsJ4N72zqwyg1VrT7kwbXJeUQ8cC4fv",
  "key16": "3kt6whD4p68ENXZL3e8P821b16UgLZhiwVTds5WHdLyiigSrjC1ixDHD71krP73uvoeGDRVceqPsHMZcxJKv555N",
  "key17": "57V9cSLpyhNVs2hE52cfvnVTunLdroRXg6DS7XRVQctNYoNKB1D3HoDhLAcyn417CLNiGAZzgPbNPSgmKBnK1Mx6",
  "key18": "4KJjs1ZdfuDq7wZg45wVcqZHwfHwid7Y4FAS7EdcRWeHJy3M3JX5bvtY2NxMwTV5LN8axaSz38u5hBCfAQrQn6kP",
  "key19": "iZDiuRDNH81ZadhYKUyyeLskC9ZLfcQMCdV57i9sNLrRmFk3hogz3ZzYe6sypCFPyJuBGmJ9nbSuyFoY8DgiJDu",
  "key20": "3vNWr2jenfxvyd125s5JNQTJ2hBFj8FhhzXnNWrTuibfnELGLs6x7XPHyBgsph5oBHj7v9LTpFFyDBhaxAF8PTiN",
  "key21": "xFTgBa77Wan5tKXaws1dKy5bmyjnC36bxQPBtpwKGSarsop9RR6VhUHuhpyM9zERmuqCKKGNtNDszhSZPwmrSTU",
  "key22": "5Gr1irb4owpK2W3pPhteLtZZ4scE1REm1TCsEn6nsyRSxnNxswNcQAJaNAZLpxySYduGE62ncZueTGsBdcahoyvc",
  "key23": "4YU295Dw4n9crTZWrNuDkB53u2vGqamWdN4SP2QALMRchDasgYWCH3AbEH31z9rrGGB4n6yuhBofu8WbUjUvPBGo",
  "key24": "25p8RNC9hLPtq2TTAB1GCkXMuMrGoNksngy7MH66rvnFXT5uxorPT78xM7gcnkkuNhze1PnZHQVVM1Az6k9Txgpt",
  "key25": "3Ec7TGqMJwCDMmrPex4aSzNg3smK3yRmuaBiE565rxAiYWXeDoDSY1iNdhU7J3ezGRknLFb76ogqgsPxp1BTdqEo",
  "key26": "tvjqWjNDdBAeL5C8mVwC13bDmj2QZ83wbYU4ZmjLbbU8spLvtyLnGsKczSa4V3wG43rG6sdvfK4PzafPaeh5nZm",
  "key27": "9ekMGz9XTN9M3PQ8Hycva8yGbCDoYfTdaSvLYPu8hMe4F2Wgjir2fEBoVkDB5YCo4BBcfjF4pFWym43FMfZM3Sm",
  "key28": "57nLFS6Z2dUEUqDGbs2RmQzqYCP5HQ1itJNjU3DU2w6U1im538XDfjXmZRfS8qZFXQCAgNn9TM3XdbaKnXWM2xqE",
  "key29": "4TXAsYm2CxYZ9muehAoXNhJsuvkHkfB2ApQAuMp4JjdCQip3x1HajPffFsWgM7jado3XvHnZsPtJnnHAUuK2xq3e",
  "key30": "5JNsWUnMGNVufq7zm6pn119k6DaaLYtq1v7FJE2NqSMjrJ1tDqP3YM9PPm3krqCPWYWxg8N5tCBkSj5Rzkns88nR",
  "key31": "4ZLY1YNkc9Kv8qNJC2dLyQuahtDjPSaLxS3b4eeB7Q6FckX5Gbsak8GjxUySS1DiDgsfZcTw6MwuU5M8Qn3re2eM",
  "key32": "42nZ3kCehKfqBvtTptDqsoi7FqhvT8UG2hEadQ8jsn8goHKF7PN7kKJdjsBF2VLtHX2UcC9yRWE9TP4tVJguwQ4V",
  "key33": "2Qj7uzsn9bWKJsJxGH6JZmBQBh5mrZu1Yj5f6WDqDDfoAJADC5tAWYmVbaUvWUyttaHGodcEsyyXQneczC5rgqGv",
  "key34": "3Fd2fNLgU1bVZYQrDsABN6gsDy84c3Ti2dDauzHbYKzzkTcngNHG5eQGo5HNMGygvw5txpx4esy3V9FX87qEkRDY",
  "key35": "5eU2ktvd8QnhR5u7X835Fd4isrVPd3xQXiAvqKJx96fwzV5W7aam5b79o5uvT8fcUcJ4QJDR2YBCdqJJ79ADLrzZ",
  "key36": "QBAupHsved3tKeJerMcUNX3b248WLQHA8D3pirFGYKvQfbihiAF2St59T9NT41hvQBbDTvok8rmmTTP21mZ9TB7",
  "key37": "2bTVvsQkkXXyb7My8zea8vM7qo3WPwbDbzj2Q7oUgHdWPmw3H3Y2q7KJT5v7xzJ2ybsCCsr1bQVhChgenGb5Ht9k",
  "key38": "4iR68zmJRAdC51cbY15VP9mzBCKKd8eNpsifkkLys283czNk86Tk2QjFTHWJR4RD9RgREm218H6byx9vE88mEsQm",
  "key39": "2d53myqw3acoosK8vXw7dMHiyhcwPoBSnqqL1J8e9nwZ1RYFBBuXk1y8ughkjY1tZb5m5AfLrC5NtfjLMt3fJng8",
  "key40": "5XwoWyTeTSPaAbZG15BKTmf9PNAMrgaa6gKrg3E5NL3Ndpcannf8SzBNFD8k7nsasjfZfz2QaS5jFjEynSjhTgMU",
  "key41": "3CDFb59Pdr2LaRFfmjL8WZfEnZURWqjRFtkaQRqJN14DVfx51uoWeZ3wCTF8bNjcYWabDK4yKPoUF4aX5MoaX78n"
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
