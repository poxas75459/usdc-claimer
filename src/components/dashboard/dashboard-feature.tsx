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
    "bZPQp3MzijhLAokJrTkdEBtfgvcXEeqdUnXu5Rk5cVPvrkcbw1mD99onRaPKG8ZT4hdtHJKDRSfvvFR2zMsxrXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jaFef5mkqFzayTRfPKAAkTJT2owxHvnTqHpkur4CPsc4eENQFz5mPcd7P1wqS3WvqnMZX7LzntAVJd4Mjg9EPZv",
  "key1": "4MNEPwaiD5Z1KY5bwPsumgoUW5LLwjLcmm7MzrgfzoRsfhqJRsooQxsPWebCyS9KtDFn9vpbNrkHpggFLXiLCv8p",
  "key2": "2b64m4A8TXdTh5gZwJBU4uiNxYgo21nqKNSjVWzFbocoomnjKWTqQcT31HY6jE3kK4Q6uAgVPcALvwXguJD1dMtg",
  "key3": "5meYrNxjWv73MJLxDHKENGzJnDYbiQ9gizZgMGYRoT9SnTSQrx6KNTNbUygd2SaL4Nxbpzuyhrs4B1RkgzZ1iGQ6",
  "key4": "44UcA5TQKVyE5wgtvSjfhWZMHVRmLyukJ5aLE4mmo5JErLQTtceFKtxxh24WJhNz3514WWiXfGJDpGcEPQdY1GUG",
  "key5": "21zh9wrvbvxFgGVhQhmm9zKHHJ7MJkhcjBSK9NWqXtq38sqhvwgW8hQRock86giT66BzBEZrUbx2yNfuGuXsmYnk",
  "key6": "FYYBA6yLj4hNJYDiw7r4d2UwamqDUupjQCXNpohiPLMscmb5DEEQp6CgF952fwXVw7t3LS2rMT4LMtX9PFfvJKA",
  "key7": "2sDbkWXLhpRAm38q3SXBrhzVEtoHt24VKVVS9cHVKUCxLnsJYUPjQ4RxRRMNeZ6fEFXEK8Jr4NF1xgKLHwrb8ZFU",
  "key8": "42wutDvmCRxtLUt5JMSh3BQ6WMbJXUMdKd2qpaRZgyvKaKqS6SqS7uLKpLEv3ME8rHaTWuzcFcozeRSFcWKDdzfz",
  "key9": "2g5qaqVhevfXsSJxLsfTrdAvVLjMmNj5oTAEhaASFVyUboStwrMtXv6rAzWDtLx4eoRS5tMYikDE6z5GtgbWQKAi",
  "key10": "2DG6gnPmToDQvSinKsgAFUeVbZgiZX7KvmpW6YjL7RFZeNQT4zYW2JuRm2UUf7HuNhJnei15znW7YsQH9fJRcjnM",
  "key11": "4zp5bpLqFr2BRZ7kfX7Jh9Pc8px9BnG5uLbmaQL34YSnpztSjRw3DEMNcRYDgvsniNQ6bb62FsiBhAW1p2dC5eao",
  "key12": "wtPh8jMn6GWp2JhPbpwd7GVP9KbauVhzD3Aa6PJjA9ts4uQ8jifnPrhRvvMLEiLNtbEeZ2ffygRDoAhnCv5bPmB",
  "key13": "3KhWQfmFYpFYYNF3RaFYzMW6DLm43EzWXUKHyZ7avps72HGGLKvo9VKzanrhMDCTGLSLCVyfjPiTMSPEYEYeSPfk",
  "key14": "5WHZbWJUsD5or9ZsPRmVvVzL1cFZea8rAhJxcH1FWfcNLw6rmD9sNJLjPsDBaVkK6ADUE7fAWUR9Z2Kn1Zy7ETLg",
  "key15": "37UkHqQcb1moeE4o9f3zmwWyj56UJh4FwqNL4xA3MUn93FpwGo7J58cyP6Zy4GjCcmP4wmm9hgugzoHDxcPjJZJ2",
  "key16": "42E2KowutxkfXaEw4fp9sptJJCQQMsM9wDTqt76aaYkk1ZYGbKEcrmcH2x5xXX46wmeM4YZxPqwpj8LELWTmGdY3",
  "key17": "461JvAg7Vprwr4mRUVzE7FnVzmKdmRvk1iHzWrgraZdZdVCa5AvA3JgnZNgpmdifRDUZwaWzr7gc5TBb6iHY5e5L",
  "key18": "3BKhQyAeV61TcUp9wXNhpKYdtT2EZAx25yWRdJ9MHkVVX4Lh3yHCY7qWzdXoWqjn5A9DAfjh7AwNZqA54oRgHjUM",
  "key19": "5SMHjwK13GxpeypMZw1EdckGhQ5EngYmyoR2M7aXAq76G5vcE6hvHZvLFDFRcuYDo8EYVNdVTqB4WfPkjJWqePsA",
  "key20": "3daooi2qvtAJqsK2GfvwEqg364a6RjykPTANb6jdkeziXhniimkkRkwUBAEZwAXZXDmu3FnmXNwMPozfSwecDZ1y",
  "key21": "4EBn3AgJT3v6QmxjdCgNbUbZXEGyxZLy2N5MG94cKqY6iPBN5HRnxBcTCabBJJXdrTQgBb4Fws6Zgh68o473JQBy",
  "key22": "5U766oLjo5pZtajVVXwipxtUqrnS4yqNG6K6Xxy6phnmkiGXjBo2fqQfYqshaPAMhZmAaVqZAWBq1ZZCjVKRw9Va",
  "key23": "2vmsEMfHYHrkEN6DiX4NLqicBjtK49jfdwWZVwso9QZUTuRSvbwdyuoDZGD8TCyH215ZXo9EjWQbXFzzM3oNGzeR",
  "key24": "5x88PTvWkvaoqJ7i9yyREPaiZuR2oiDZJi2GQC2PvRhrMJ1n3QMNp3Ya6U8WcrdLxusMe491UncPfw4ftAuvLx4e",
  "key25": "4MJaXbqdWsmbvB2ThYJjrByMA6XXmAAfL9nTPL1oBtC5mRLyN2TRdPp5oaHYyDmq36eMkd4vo5ChLScBSL7Ujwx8",
  "key26": "2mTHd8un2qY7eTbtxV9f3gW64Xc2wimugbe8uAFPwp4xTMuSKQhp3YUnT3cpPpEkewV8pynJnzFe9cz3hXpTMFEW",
  "key27": "3NwzthiQ2cVGv7iQn2vmLYdQFbijVoG4yp22TJuZ96aJ5pscNpdLkqKoTBXTMNvKJDf7DGzC1X9ZhzgJVrnnvwuL",
  "key28": "4Tqpqh64SYB1Kf2z3t9pRU8UaptZpkgAH1SPgrjbA3xrX1rnaF3EB41bQfhg9PbZGt32XdhjPCsxXnoeiSxs1QVZ",
  "key29": "5TGqrx58Fnm7P1WWZKZBDmZvehVFgarVdTyY89h3mLg7wm3uvpWPpbkkE1q9iRMBKeLbZbGziiXPWWb5JAS1T1BT",
  "key30": "2jnmC53ZoJRYJdjX4XKuw428vp6v2q7Vi3Vi2w85RbGeorEBFpYB3GbqNM5925ozJ8yNpeTC46uGe6cMaemq4Fbe",
  "key31": "27jAGA7EKSmfKZ2rAagUm42FTXMbm9PSosZeXP38wj5AcxtquapRFG7q4Q4TrpZYzhqEQfc3yv3WwAP1xMiZ38F7",
  "key32": "65rZmYMUvMEqyxayqeBdMESq6LnAge9yisp3aKJjPaPBDEut7znxos7WtkXkyEUbg8yqD31XghzdhsPNVTvUBTCQ",
  "key33": "22cD47zWZogGUBxJ3ktpuLy66C2vaqgGzvx9Q4zHC7CpparYdQZZChC1v1PdTC3mezT5ot2FxLZdXYnxqTJZkeWR",
  "key34": "4KKpMnma2h3VGA9dQ2msfdwwNi64Y3N13cRKcjHqbnzpSbdFsQNFrwkcFrZL3ZTW1vW247vRRmnDRecpovnGp8BR",
  "key35": "w8zdWqWMUTNdXaW8kWQ1mscCwmJhs32Scv6Jxh54pedQuW7msX91iCrs1r3Lrp9GRQ76VzFuwridRv3tQV7ErrL",
  "key36": "5aXmdFL7bdhfTV5zL81NkthW1QkUHrhT2632ZasK34c6BLU9WFa94eKcsrfqJEg24m4hZcJSd1MseEBJDkJ5FkpY",
  "key37": "5ssZr2iGcBSHk447gcsxvmi2rBpAmqndEWHg3neNjzFXfCQGR5eDue8qWZaAg96P9LSPSnyWMGxFPxLEFkBzrQDq",
  "key38": "3yFbG6Dq3TykfmmBPWqmVHNPcNnJxDBT4J7pJ7kCDgHqYGJzNXqbbUBh5tKXSdBML1nL4mjnCSvkztWn8RSacQMN",
  "key39": "2C4AVEMjsHaWRoAr9bGreGdcE2aviAhXsX5tBnd6U4Smpx3qAKx2nCrNKWYxY3XrhhmXyx3AHTr3JSgmZHqLpk7B",
  "key40": "53Xa4r4kvSNDZsgXavBeVVc39PXbLUk8AJiRyunMefK8Es8XZXLZFihZmT5PpNLjUCGYY6E3KaNY2wdcA7Z3BoT2",
  "key41": "4UqCc4NfH38dER8y3DqCQqN9GgDYGvDiudGUR4TaSqy1h27veRbsknMmANQhvW9aviRbSMkW19WVx9bdPexKgVcU"
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
