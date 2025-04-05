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
    "4oVWPThvuXrhnJj1MvpyZEC16Y8ptrzgGu6rzz6EuyTC4ATvSr2gkaNAqAWNLzD5dsK86MXMkL7TMneVrSqsvA2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r1suG3ev7J9Ea8C6URfy7rk7zxH4NGfGAUts6JAf57YBk1NYf5kzV6jFFbouddxS2RdVM76HEzz7yKQdMxsaDYF",
  "key1": "4XAbXvMzEQS98UYakCuEYpDYDwxQcuXDmtzQx9KjN1QXtjPh9CbDxk6LC39ahGZzpaSk9arAbYqL3mSQchv1gYpL",
  "key2": "3xF1eTdPZ91Q4gcgPkSaBGJLw8f8wyscir9EL5bVNjyExJfoxzZ9v8MvwcLD2bD8WCFM4g4MfL6eVCee4h6HLjQR",
  "key3": "Ea7UohCdjYbMyzs5HhSVtnTd9wHxFCucCaguHRpwzJ2gmBowqw7TNsqn8n6G2YmAKeP3J1GWJs7zEuZELg9zZBi",
  "key4": "2WxSUNSTZzd6JanJHMmoznpa5s3ZHs7UWsCzR89pPwMiYNVRLqi8QB9BH3fuxMYu86CD48T8fWLZDuMJtE8bFons",
  "key5": "4VcNCPf18PvSiRLAWW7n4tuKokiRuZWGaVCbytb7SfX1FjKvYAnoS2YDrCxNe8zupfhZEBDGHqC6CFpVoLk9dfet",
  "key6": "3SqJinUc9puXhPw6kqSs5Bg3tvTUSpAE5ZS8BgMEfqz13Vitw7TCp7LUeey1m4P39htkd1nzRJqcFsD6PRNwub6n",
  "key7": "5Ni31fHBCsLk3DV7uWVcwmDqfGXg2DBiEeR8vPLohm8Gzhbah9JXFAhZuE5kuW4h6fsM1qLYeUUHQVnPv3MKox7N",
  "key8": "5rx4vzic59yS1KQGAmHXeH3EaViHZwQEED6QbLVV8NPbtiwDybr75ihbyNfSEffKZ4QqzEjnKuPBE6LzzaGpVqx5",
  "key9": "6E5GwSQEzVkNVJF8UoysgXsKm1pAoATWBZZed7qAYmbyVtkb2aNBuX8WJoTfUh2CDEZn76YDutbCFhEztARCpg5",
  "key10": "3TNtsLBfoc6XJ6jry1V1YCVMeLfKFbNGAXg4uF4JXT4jZBHpykCZPAG4zKBf881aKwJdX4iYWEnh7S9V4miWT39X",
  "key11": "2qqWo2LsAZkAjkpUZmRC1tyV59i9m9m554P6DWXZpokhSAiFogDWVcMg2JAGrsMJ4pP2wFoQixPrWg6v4d4FCzR3",
  "key12": "58hkr4ptzXRfttTHJYxs9x75PZmmuBd2iTw7E2cyriED9DSkF4pNuZKrGTTY9xMxxy7UKMNTjRkeoihKmzo3MPm8",
  "key13": "3NKz9pPhyrViVMGEtzPrmcHGfmRFTgipiqsHn3ZEXyZpZZEy9zEj3nvsr9ie2KJ4UmPBp22oEuRYSu3rpaS118mY",
  "key14": "3tBYSiLdEtz2mitt7nq2j7yis8yH5eYbrhmFNxQaGoKowAtBJDUEyDV8Bir9aD3bLUUHrLSNtg6FrjpFRyia1fiQ",
  "key15": "33URrjBedr7z6NhyLkgqJkTiUZwvUL1haZ8JE6oGk8sg9Z6HQeEpFyiKd4ytNtUDbAeMozrtfgnqaATvFZica318",
  "key16": "3XrzppBcQyiimJU6k4RtfRmgD1o1ej2CJdZCCzLhYMZQuvLHPNF4GufJ5T7TJ1xCf3jq9xnivdmZExjMubk7Y5e5",
  "key17": "4s4zyz9z8c6q3TSZYUGZdjqKAEndF1ENc4sqX2wa1qywk3v8yJtts4idvjMdoqeNXQ7NwxvVPz4Mfgu2ntx49kUt",
  "key18": "5LzJ2urfTuyURfdre9AG3vEN64a47yehgojWdSxRyxvkqCVJbCA8yMLKSLzEFnDoDbuufimgpZAMsLafHWe3KZwT",
  "key19": "5vUJjcwWLFKRCbznogHyG4PyyXes17oSmrbfhh11WTXggKGrYYTWi25DjFXuxnxpnVRxv51iG1gy29CB59LtVsK2",
  "key20": "5wj1duzYAbFkEjDe1BW5eKnpmMktMbRxELgCQSKg6xbxETDTCv9n9iMLLfKLoFSFygJAEcLKvKmi32Wegu6FqN4C",
  "key21": "2NrwKJPQZek9tj9sExa7b152QnMiJHj89zQpNzxgnNWZWQRu5orFv5XcQKj5P1YgbJovLnLw6PkFYzgtxuxjDvaJ",
  "key22": "5B871gAn7yW2D5bffiC3WAcJTyomgpZVSCuckzGoP3M9N6TQioyN2bHXGHqGiaHyyoHeDayydzkvgTDP8b7qAgkw",
  "key23": "2exXKNjg7LcSdpBpPj5hcJTXSrP81DMeHf536DSF7uQivveeVvbamneswyPHVQdqUP6F5ReYwn8AZDgasiCmsdtS",
  "key24": "3DAtjrTh9GhrTjbVbZ5dQmvxDi87yPxAjX87Dc3WceoswYSU64qD4DfBbsKpjia85h8q1EWjZsLQMN4KKsjxZsBB",
  "key25": "GtuevaRsXxAV76GTkN5LPeyK1L7iHfi2paVLczfYZHLfq2fXbZ9xwR3EEtvtYDQKvjAJuVMWL8WXwDAFFPkA4dK",
  "key26": "3u4v5sf89xEE8bGkJbE1p9LqKgzX5qskGcAT23Ycgxhj9rMBgAEV6CYmi8txyc8rsYM7YsJrBgvhtDBoMycxX9HR",
  "key27": "4uMQ4ekF9MgYMvzALoKbUgmSS8UeBNEUeqqz6Lq5tAFAiiMU9Gf3xE7atZBKtU2ynpQ1Tqr2qxsAj3CVVpqWSABc",
  "key28": "277DUj4BYCofwLG7YmUcJMFM2Fd9KRBiqaeANqf2nJp9RdHd844iVxhbgc9DpijQ7TQu86qqfM4audYtNrq3W8MM",
  "key29": "4zp7QM4smBfqtv3Pa47zVqteuBMp329uBQGvTKNLDd4CfXaqCYPqGpwZntsuk43ELYGrEb4q1FaJuZhqjsYcWnf8",
  "key30": "54Sd4HDywBgMfT8V38fsJjyh4pRMvKvkzUbU25EzpR2ZKmnc9vMNdAbL3vqegJxWszJMftbXTsjRANHD21eRD49g",
  "key31": "5cDJ5XS1NjwbK6YAUSPcXBHLv9qgrbcTAczTbQnjigcSdK33dZVE9Eb2LKXZygerhKdKG4crwyWrVTRAkRSMjC9i",
  "key32": "486UfNVD2kYpqYWryWfBmPbH9Gn6TZAGCGdJG5uK1VNsno4WC8hm15ev22xs64Audmys4pRzPs8CBCUsAJ8JvARi",
  "key33": "urnwADuyHtV71uNoRM4h1aXTJChjqe62eBd2oz1YCxtnyrjK2UgQYqTggvAUYqZuenfMhbv7GiLdy8oL2VS5AvL",
  "key34": "62E3EQSRd8qzrphpRz6GYEzNDs3zyPCfp5AbsRsdcLm94QYDtKxaJftSbtArRGAjPRjPN8xQReaLgmaJkqGb9bAf",
  "key35": "2VoYEnz4KNojHhDsUL9jJNRPCM8tL1JVWuSm8XNYTrBCiYXdE2r2MpXCv8aKZmUDSG9ATy7Q9TDs1avUkWdjVw9n",
  "key36": "62cwyzZ4SvowCvjfmvNFhwpLeLZuVZK5mdv4EMrz64shZDbu1WG4JbhLf7mcPCSCq99c7SkjbhHMwJby1feVZu1",
  "key37": "aTKfjTWSwpU1apEM55Xuh4mBntWu4bcWcjUaTeoscACYuMoT1WW7ExPVx2zj5cHur4BAvPzM2rJuqVz7aePqfsa",
  "key38": "2mCDVxJeSVMaKEQUDqShRc3RBfpBPfoXntLvnj5ivfAKDb5N18gqtuRA8LJ6RrtrtZHKynWQnpvbmwXrKCqsnopf",
  "key39": "47Nb59KfyQhPaCgDXd5yL3okMxdwNBQYDnMtS5g7C4HFS6EHkRBQWAUrNRmrMVhddyfvmoebTTGQgjY1eHir48ye"
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
