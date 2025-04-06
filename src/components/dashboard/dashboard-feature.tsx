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
    "27o7GjxsbphRM7EQTMCobN2feAaHHMjM4ZxmWN6chRKnYHDSYPjaLdYhwKuEZ5Ws4HaPokb1n79n9AkdA6GmU9RU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55HTcBkaFBW4f7eKE9VbfqDfM1rkGSmM7SPxqffFNcUtUGgVG95ydUA89Uj2CpjbYiyhp9q1oajFnwnZBT5ahkKy",
  "key1": "5cune7LEo3hJyYrbeShW38Sc6Q4jsWV2E55ZExmCB8c2J5C2ZgxvAKZh3C7araxUz8qTuLxdFew4cSDiegoGbdgL",
  "key2": "JUwF9P8YQjiwsMhTsxkb1RjzstN9McESxnmtHgXi4F5hsWR6DDBQtYeBAEQYtkvUDsgp8XS3DPNegLeQvpiPrpq",
  "key3": "5tCm1ZcKK29sLJmCZcygaHjBTyqkf1JbPR6bPGKQJcyAHqFkbQzu9zFRzrnfsGRhxwXnxNW2uQuWFMYoak94Azk2",
  "key4": "3uMD1czWdrNVEgJQ8brWMskLo3bVPqNXTgQFy7FpeqdQcvycoTNtpHUyie9a48NoCBPAWsBooGStLMVZGZP7gMoo",
  "key5": "4ruU9dkMzFfatrqQoeMhQ3HSgT31qNHJ33jsVUeutWRMvwHZr2a5WrK4coP9cMsHZVn2tZ6ysxvYN8YdBisXBA12",
  "key6": "4oD8VEi8Wc2ooVzp4ueCMzqW7CAKdAJWYRg92KRXUWfYjpjq1FX68SLUaPX4Gp1WwJ2maNySVCdMLL5pxzSC7Gvr",
  "key7": "3iBUjqtjrJuH15KuMPnEjQhPZpvceJwJp1Gs57132YJ2Aboe9qXc86nDQWavSAaPRK8ozcKBeM83J6UrhfkXmMpf",
  "key8": "31KhxhEJ2V8JqvLRrB9vbS6BJ1WHMSQXppuev1ra7x1FBGtQJMiQtV3TSupRvhrD5C1jn1JZuENrHpM9d9FLaT2E",
  "key9": "2eYPSB4onSb6yZocmKxAfPGtuEjGwWYgbj5vgZja7bo841hNtoyj5uLCBHhFitQpodCxtEc3ppLfaEEBcREihmHX",
  "key10": "4t7wzZx6NLK6xNjCp4mNBCa8EXoZJfpRnkrmvLP6DcaNxvmUiKjQfPv38rTXxMVjBagdECNTa63E7stFSNFEkPEy",
  "key11": "23HC5yuC5FxGCRrBxYbHbKJQFyY2BJmmM5GuqNxfEuQ6v17yz9Kp2EABFHmEYMgrsn2w9NPUn46pv1XehFZ2Ehkb",
  "key12": "22gffD5q8rehUkm61NWJPf4cSuntXHxggxwRuF1VqmRJgQ8DtsQqkHvQNavikEyodLyZj6FcsYRXYCU5zGsxxHbD",
  "key13": "3LdpXXgCkSsaqTXrGBA19GPT5H931wBci35TVKrceJhv6AJBVDKbnThW9CQyKbEndh1xAK6PXKuEy8dewUsnJMtb",
  "key14": "2PKyTevg6xrDvKGVrxCgBZFKRXqxXvQ7bcjKP8YNPstqVgaEiWDU2ruPF7X4UBy1tr1MyBhs3GeVMARvCmXNLLPb",
  "key15": "4JDb7cULMtSNi9RLM4gGPzaw7fE3SUW66hJqEF2m21qkTym9DhSLfgkWWDWEXfutJ4tMP5USwtCvJmQVhVrSqbfW",
  "key16": "5ecn22Ba14DshoawnehCabCSkosDAfKerofKpXWpmum5Doma1dcozifhrg2KQSYwcdwD1mgm72e7QYLkQnvfY9xM",
  "key17": "47jAeuTGbVcGyqxKenpXPCSwaynnSUrEXuR37d7qUtfnoGBePr2hqr57kp8iSqD1s5PgM1UtGSjdgTNMgPqBQXd3",
  "key18": "5vc3upapZCiu4qCnnPzHKP5MfUr17V9uWm5tsv3DhZxi97XuYn66mfY3LqMRvCr5Bgvm74gqhTFJb12y4SGvxFEw",
  "key19": "5vjs2wrUsWw22XzvBiy5MXQvz8METpd2Uhdu7gdKf78B96F2MU7wCsQfkRK5y1Wrszw4F5XdzXBHYwwMTYcPPPnG",
  "key20": "3XxpACqTYfQtiGFqVfnmQoNAxz4S95eZSbPHrXYJra6MmmQzkH7iNB5AhZ8b6dpaj3HAqsxFJv32e4s148qA7Bka",
  "key21": "5N9uSszymPfAig3NiWbvY7nYXRQkmoWjwhPz1wqzBPh2SnV83mLgdHWmBEYnBso7rEf1BqPqS3XnoEcGnH6wXnb7",
  "key22": "GEcpo657J4PpktGUiG2rm97XLCjQKL6SNgpPwE3Z5AZKAffZu5YKRLakV6fBKSaGT3FC1XtfXtZpp8i8Ynr8Mpp",
  "key23": "3Y52Dnc8TLcdhWSoNd69T2NvGCwvq37vz1W1icNagfC6BsJJc6BTFjspsMt3mjkLJhyxe5eqvzQyp98P5zd22oXf",
  "key24": "2JQpYvUnq8bE7fZEzbsDNUTY19ESCATJHpFyDQyyDacwE2ea2vWUK1rwNEaLyMmmK5PWqtqyphtirgurDArMzZaX",
  "key25": "42akg2C7SYgq5xrbvDjrCK8JMr9GsfK6ioWyw98bq1w4KEraHCvxEbu9e56GxXeDTiRUngNeD9X6kzxuAV6LnVbk",
  "key26": "2hwU4aWkD5poKWwWv216rXEb73WnWqLGjkG3xgXL3u6aqSE5WjBPSRJE7FyQbpAXagipy5DWSTvdwwXLa9PRGqcU",
  "key27": "3pmCUrxdfgYLrMYJaFxEUAPYL1oPLgsaapuAfRbfbz1EaWkfXxk8v51ac4FvFzdVHiNEoTYFuHdKPDDWncPidy9x",
  "key28": "5Nwzkqe6h8mxXqto742Gm7senKhSZhwtLgjm6ZcregpD6PjpcEMPP3nAgWSwsK796Fu1W9Q5676rzcgFJiwDXZVd",
  "key29": "3LQP15WiDdAif59V3qgsouu8Re7sivxPwkPjfiqr4MpDSBMaxi4D3SfJUTEVyMkMp3fzao6hoH9DZDCSPMJVe5CB",
  "key30": "4GVWppSHYSLM12ABiPuFgTG4SraGgzXNBdpi9dEEyVbqBBWdikQkfrG1ctLnE29GFvJNZpiQj3v62kzAB4x8Pwz3"
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
