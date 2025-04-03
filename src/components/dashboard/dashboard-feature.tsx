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
    "2nJcNPivywWLnn84Jg4HzC6yt4UyKx6tVSg56FJDR8aZ2WHXo4VC22mvEUP6fHFLwACPK7mE6uv8gemhXrN8mYoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2phdctvjv87zNaHdD3LZcjbsE1Z3Y1QvoqwufkYjEYvMZx1nhwWs1zGQdnRNXhqUGKhsnP6aGyjcBoT1TiTAU557",
  "key1": "63vVMNZam6p1WCK7KQRTsWsqya5bGF7iNqQ5YQQLmxKXUVyM5Uj3KYqRMHVMiJRrGHJSbz5V9fX549CbuvqcmwCH",
  "key2": "5P65ikMp1Vw7A6isWrspGSeTs5iCJwwvtoh61pxy6eWr1PeU94Rbk5kGgRpc72SqHXtEx7ik4BmhwZk4SoLxbCUj",
  "key3": "5c6xdswL629LjZLuTreXPj2KgfMcv1a59tSKbNk5aT2bJsqmdioMzKxAL7LCEsvpxMUgubA9jWT9aXgAXUQJRCBA",
  "key4": "5A7VfLow6zPXbEF5Sxw6cPqoXn7YH2ejsvnxsK8eUP7RzeFowwvt2crfVHDRZQdtav4TT425foz7GptwfyWYkq4Y",
  "key5": "2FL6oTrLSCRy24cDMqjGMpVZtNydxbKhmT6wL23e4jMBkLxXtXfsmSZ3GYwuYSZCxueQMD6DhLqAsGdk4fAaU8Vy",
  "key6": "2BUR5E4WZyEHpCRmaAbc3pBMzE4vmndQFnoXjbJhFD7QwUv4X7gzcwDasE5gCoDzZXX9eTJMx25PTHPiGuewtXA6",
  "key7": "3pmkfshH5HGGfmJStgkcCDcxiTxHxD2q7xdMxzacUeCU2vfgiDYBbympDxj9JXGF9LWwVZSW8g4qB9YSmrhPnKe6",
  "key8": "5mZNbwPd4scwtRfiSVtTj32pzLCkVrDUp3sbFmwfiwKqJ9YqkJ2wL8AZXPqN5E9Qbt2f3NJw4LJNZuvmYwxv1gA",
  "key9": "3qc3UHh2SB9AhetNSLNWZYSDLAfuh6durpPS4WDtR9dj45FDXTZqSJRvVzWsUV7dRVTZmdYacQoZQx3s4J2Hr3z9",
  "key10": "3f6wDaUHRvMk2LLGows49fkoQLqYZ8QEgaJ9tudLe959TLUqivmj4Cv9tzNQpv6NfnLfwDBU5qoNuSTkPjFU18Q4",
  "key11": "4VvVqzwrk42WNqPzCFgYuVAveT4geDZKGMYH8mcL2LRZ3v7dTrjeaKSRjfkFRFBapPUoCenyKw6r53uNXVAJBWCe",
  "key12": "26Lp3FB1oCv5x3akqQizczLNGhYCjKTAsvUHeMc5BK2d1DaZQ4m8P3xKnawK75fzfgwt3GP8iKUyDKXBNQZzhDV4",
  "key13": "2gorfJSLsFgx5HffAaGtK4nAcUzpD7pUmFHF9s3RpZEBpTyWqN8TTv15mB4NANs4QEZkocyKuzDdz1Z5xhf8DQ2U",
  "key14": "67hSuK55yobayFVQYy1YcTHautv1PPZyybrGPtM5D4c8Quo9o7MAbLqdHzhHoVVFg1oT7wvp2ygwgdw4wwEHtCNy",
  "key15": "297ciEdY6C5yvbTLsEeApdRHjo9g45zTzX5d6yR9jVNSHHaJqTGDoBcg8t1hfP6TPoebv5LsA5y2bmkxa5y71bjc",
  "key16": "2Lpe5BfwJQi7BoKqy7LAdPUVQBNoFEJEfvSZda85pxjao4HiMXkn6xzVbPS7JPFEWH29saNE4yf6T8gwqAhjnb6D",
  "key17": "ZuyhAYwWgQE9YX8Dpo7zoBtX9rrvLaf3EwsVgbHJC36quQgyAGVR38W9kLeL4zKoyCT8gTaAojPFG3jJq9v6sCs",
  "key18": "5VHvZUSmWfH2D88iUScNHYu818opKqYZRBsFirHN21L4Ko18efni4rCeUtgimEY4VGGzHL9ALsVHPhkgiEz49siw",
  "key19": "56BXXgupKA4Bfy9WWcJ94bnbt351WFkxrL2izvgLVQg7ruZjpfbGL3rSEJ6DAGGic8KA1yG5Yc78SmWdxghk3CZY",
  "key20": "2SZPssaidRQrGux5KTJUccRgsru9de3t7AUuYHiUPCaT5vkhxiToNYisc94urfo9SipkidHujEFJEjwdtMzUg71e",
  "key21": "2tPg5srFRhE6ZzTcLaU3BDJoK2xoY8DW5ZKEvueYCgnFvyeUHX9YZRSgWhSpbgiUPtahmkTcz65QUVyzi31jgjC2",
  "key22": "5VwE5PzSoeqxcNRzXjJwxPsP2T4VapJ6R92eVuM3fP6jDKV4fcm7vtqFwB1tQLkPWEDf4TSsqQZY6TexqWssTGLP",
  "key23": "4EXdyLmCUejyCgaCvn1iPFhpzRP3Wf446FwJ3t7mJDFPUphLfCrfRwy1kJeQ3XTh8tC11DBaxTV46A1g84sjT9kf",
  "key24": "5SzdHtwxpZJ4qYX5rm23Yt1W5MSgFDKQNyDpDVXpufc2uyRmiWEHv8YUXTgxKo9aQu3SgWboyyhXZYAq9Tj5y2vL",
  "key25": "32KQXo3qHaNmdwWWgT1BhNp3L8iFcKZzbukGHWyJTb6z6QCfw6cxi3fSX77YjxLGq527qCmP7m1ct8s4PZQtAgcW",
  "key26": "4EX6girhQQT3F4VgajfKCwNdJeea5sfi2PWZxa2KcA8ctvXjjua6psFpkEuPGNhyFQcAedPDeXdpVWbJkw6qqUtb",
  "key27": "2sf8Zhbe7pLgCbaCaUbTBrTTD5PYV4iUimsJpFSBasgHAJnkvZj116ptQhyjE76LG3HSumPxTYrPGfd8vG6TN7jE",
  "key28": "5XbLpcgp3g4rR72aQy21QfHMrKcsJuirTHwUet5QCAcsLSLWf2vFDf7zzt7RWuQaqcjWRTQrhv4VTtTiYLX5mTKK",
  "key29": "jBRPXWJsUmH7AYU9XE16RSpmix1qnGMYJcSweBvgjMPeedLbG3ehmEMpXVNG7m9eDhnmw1UZxQp8Pkv3mnHMTG8",
  "key30": "5bW72NCasUGDdQ7ZrS1D3jK8Qcx77Dt8QprouXQN153LU4P1hJN98PkJahP8K9GmJbWNub7Gou2sj5e69vKZ1Ukj",
  "key31": "4NzmGUMzaTB2Y65tgvTNsBNbaGjSSionnaU7AmkCofKRtqrUtFWrEZwFRSEPbBp8yKcKrEYi9NLs4QkHAYYnndf6",
  "key32": "2DPqCFqpB2vcrPx8AoHb1gMdEW1tvVDQkFh61EYLiifeD6GJWUL5rHYbzCzvE4XCWGbNeHJaCaLKS3Uk4AoZHHpR",
  "key33": "4SLLeKGMWk9idG1ya2TFvydPYipoB8JFhVRutfNXckAudiB3g1rJRhC7LtuNHbr8hEkpdn4LercSkGcJFLrZ1xH7",
  "key34": "2ZNGZQAfvV8vLTmvvAc5NTLZcFxmih7UprfZR3vogKu4hY3vmicSt6b28EiZMipcjcmzfBHQTS2vPTa4JfPU295B",
  "key35": "2k3jUpCwwHcschau74LkijsAHDUpFoeHQRoj2gvQEUvFQdRohKyLhNWZAEP6ZCSLBktS9BY1HyUt1ymgkFDswPu3",
  "key36": "2Li927MEMpxvsCfX3sMDdUB1xkALkrw1BvDkwxJz5vsih2vcpVki87wfTQQWLuDERbXz1X77xVckP5czhwsT1FN9",
  "key37": "hmGuKsLuZh32CAna7XicM2m1aJonPvaic3u79NjNXqhQVuMjxra8DWAcBjwS4HxnntQPi1rrRh43YhDVWECAto8",
  "key38": "2n2ucw1PCA43a9Zih5xPGPeHVPHJTrpgMRsHFSh8P81i1LLHrR1xCrrpwm5Wkz2bHQBNsULGfC945NwwPYVppG2H",
  "key39": "3SXnYpQtApFnXiVXfotrtWUxwDsfPa96JPTLivCL3M3d7zhxTDCCuVygXdmjUWJS1DkXdSz3wyh1BJfvmXaWC3dx"
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
