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
    "pH8tE3BLkc5w93ZNYpYvfDAKk6Y5jccMhduVLfeHY5dwDjg2abHyS1Xbeu9ipA8qhZnquNTSUqTovBNrAeAQ4JH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RGQx3UcKpRcuS7udKUTvp5Am3Qq61eDskQKmB5AuNzt5GHVfRqQ54Ls45vA65XrScLvuugVp1nG1VhnpFj7izmp",
  "key1": "5LyVMVmmfHVrovaEEA52aWs5GeCZkWPD8G1xF1ByQRFnTv6uXt2ETRPUtzozaG7gjdMM43yLq9Cuq2WKLjuSuDEw",
  "key2": "3gVW75uAFcNqvEZGdG8YqjTxSyehon6rkVmed6mDUkPzn1S7SfiCc3PEytsPj5MVvRvxNPhRGUeFr8CvdZdpmDFE",
  "key3": "4fPaZLpQad7Ach6kYaQ27zGG8632EeDyS9gjX6PF6JLbdp9dQBgaDHZf6K6KqMu3gft2aXzTQZYq8Lv5Ws4y5B7x",
  "key4": "zfkhttShMypbwihem2ef3V2HBe7XqMnk39aDbxetE9GMr2BdTHeBgHHGABTcBFE4qFtJ3ZeeKMqsLXH6jN6Swdn",
  "key5": "mfY4GFkjrzYEWwrWkTa1kJqvzVdWyoDyqL8Wkr5tZArRBL2LyVRGFHYzegvskNaETXMrX3d2oNDU9s6XYe66Pnp",
  "key6": "4D71oGNgtACUzMwec86DnzzAg5prcZZKHL5aSpiNmWsMPDAqTKDuSeuGxFbt7BgmYxegrotYnWh4NHxUAzsfWBqz",
  "key7": "4oaq6jZM6UbSPJupxwPW2kuoCLxKW8ShrFKL6xZ4EAz3jijfgr38BKsXgCutiQTbs9hSkCLKDceUmKWY35qM7JKi",
  "key8": "5BpHGQQJjA79GLyFq8e3JvuCCUUhphDvFJXk1PYgtSvMSf3GLZVH8xM2HAaXNiAkxYAxaTceGTLJQfRJL5SHNkRy",
  "key9": "5seHdAE8UvtpimMjx6YNH2DR4yQkY5ukdHAPS3qe8XSEBTqiHGZx35YKxhyWVo7oUGh5PwfPbFuxHRv6SjvSkhdJ",
  "key10": "2sEFKxHguBssz4Xq71TXxB4u3TePmVBvuj2fHuYDX9T6JLZm4NDEjjaBcNU7wMUK97pTWXNYJYboFEvRSdbLpU6B",
  "key11": "2Zcy6icHpTUk5gYnUuHrP1fwpSFX2TqaDqKirvBaGCKvQgKNy7rsf3fVKUcDJb1SkiHBxukEBiz1LjSeRoR5QpQY",
  "key12": "fjf74WnLgbanMXb4Dw5huvvLCrbkDvM9ph5fvQUmJeT7p2zVkNHyHfRL8cXSzEfq7f5VToFKGiDn9fMx87qcmNd",
  "key13": "3PbA6GzT1bNEFNEMtYRpgEFCSSZgrSF4TyqXTE44rjn87nPT9vaDnpmTZeKaPcysY3qq7jmPVTbmwJHyK9XzxKSG",
  "key14": "3odaM4dq5QfNn81Z2qdEYfuTkCkw8GZsJbN9ibcHLjn2uYV1neC3UHKy937NteDAVZUQ2VyLrF3whqRPuhCwooBv",
  "key15": "2QE9EB2eZe54przxPRvVzhgeL9ARs5wmdK4Z3Qsvn83kE4tn3XVqXwE8GzHwB1JfwLnY5WYxKRU6wZJiW6iMku6x",
  "key16": "2ecxvc2aW2BzaxK9gSjFJSJU9TrKLLUxW98aoBki2mbeKd9NJD63SCWLHafK7rd7D9RKrJM9a5biDdaLrGUm9EP1",
  "key17": "2VeTNvRm4yLwJMQopwwpsTdwDTY8ThP3q3Gwj5KmQnmKJpoqpTL1PNcbn295qwRMiD71ioSPXGGXwesgSTova9sE",
  "key18": "3GLkK543FNvLgQokSYmUmZa9cZLSdvNVq9NFsELUj6TA76YnXq3B2Lw8cZ9mi4xLnPAnrNN3ZjxjgJXQeF9qU4DF",
  "key19": "438nbqdm6wUNgVPTLWbohRgY3uMUexSUkopc8efLBga7vNxGoCLcKDLui9ZrssBnQAomBdvR8pGMAtco4489RsP6",
  "key20": "3ssAiKoWGNe2GgdaMQL8A8ysLAMfRL3zZgnaKHLtCRn7s7BfkVWJgaMkHkNEz7WvWWGw6YLpqBKbdePX9W5vKtMR",
  "key21": "2JUjKzCLYKusNopGq9jbKgmfaJsyoKjWExTEQkVNzSn8nEF2sHsdH9wfBriMJiha3ui7yfM1JH7tpyyxQpg7KUDw",
  "key22": "5HSh99RYeJWvDS8HmEwt4roUT2mWGkSarYVoWFNwX9nf8oejSQooggzcy1zEXZBFLCk52pASgBUMAoNs6qwJoYzc",
  "key23": "4bEaCX6PCUMXNcjH25sEYyCmj2BqoZ4H4YsKo5iepKd1nRLBr37NqChf8arD7RC47DttSS6SpSvT2q6e3CcWXbVL",
  "key24": "5VzP32V9TduJWx9vxZJJiZcpLCZ7bwDV7wNsA6Vg6vWuYimmxtD3a9gHG55JHD3u97Haz4aSsoEeMQuobouNnuix",
  "key25": "2jBPJ4QZZ49rQsG6jWc1uGDMZysx9ArHqdebt9k6UP4Jg1ENujSfLBnj3ztCEtgZtKut88jGo3JMXoNprfn4hD5C",
  "key26": "5s9nNdL48pr5bh3SinhzbnKai8i48QFp8At3x3hwoaefawMw4ftQXKqi3zqJDmzXHMbu3TCL2NNMbY86gDx8TkU5",
  "key27": "RPUwQYRQW8JyAqu85nojznwJ5aLQ351mTc34AoBbp2ACq7WfriU8PxXwwq3cER2GFdLXv4ERruN2pWVrxB488qR",
  "key28": "43ToBTaAZDKX1p44ab5qPqj7sKTRnSiZ3AEFYPqZFj3bZWSDgw7j1tPqJ8xsYpJQUHujV61iFVAKGR2z4bGEvSrA",
  "key29": "3we1d79wEwT2CgYdJaCtus6ErYtRWLwJGv7Pk2fzxZPdgaJEThzPa3DXTbsLvTJLoEJR73rkNMBsr4w3o5itaY2Y",
  "key30": "2FVpJau7Fk5pFhtnVRahAaEtVyHekD9LUbyqoNWmqfBMz5yeDm8DbsTR4cBwQeDVrZY3HkqJtCUnyutKDQyTQgcw",
  "key31": "2vG98rnwvrTMZK4oE6vtTPuLBxbGkYRbwF3xwqwVf3eqnTQmD5CLihVahhyCgmuSmHFwE7GQjpnPdLUT5xDtMTXE",
  "key32": "4tjyNXiA6SbPp7L4nxJ1R9Znz8jdw64sXqMYnqm6aEtqStS1ArGY9qdUVkPcTbjXFLCQJ9RzZwSQrG35EGBW7iMD",
  "key33": "4WUQ4P6vKvNFazCB6qgB2Kf2UaG4Tj9taW6BDNqar5UFHVom1uN5qqvoBAfGS2jFhLcz7w8JZsyJNWu6iLvKM8ZN",
  "key34": "2H2CmQ1kd9kYUuNmLSGDRktgXVyGRB1yc8f1vWisz4GBVC3byGeEjvvxGshDGZJHMbpmEvB5YdSpbS9WPVJgA12X",
  "key35": "3tWL7mE8GvSbzu2sKZuf2ujLKir1pTMwxyP8sN2WxBqWZi51M4f8srhob9cMqbKEAm5X2tE511kk9Xpz6vHyzrWD",
  "key36": "4sUsxLHkPZBMgtVPLh4r6LCsA6BFuzSbWi942dotf591dPoeJUJw2e39brDSewWfdWWuk4XdjJeQtGFC8NTwQRdn",
  "key37": "3L5pZyx8cxzsXQk4yahWZ5U7FBC4W3bvdj37pSQYsCa7VeFEqArWWW2nuQ1yLJRxMnL1N4Mmm1TgTr2z848aqEJB"
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
