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
    "3YooR9pLDLpNxDD2Nm1e1ULYDMQLyeSHMRRmcv1Xe9x5gxn96qYcmtgtfhteTh9dH1Ni6aTn44PdKUNyZH3DsPCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E2dbHzh4MZhjTRSjekx52PHneNAFnWwrGzjvNzACaqRPTVCQUxDUfAWyqM4GbAymZrhRiX8gqsCYPVY1c5TCYAe",
  "key1": "4dSgqJ2j1qXFXekfgiJK8rYqMvMG6bR7uXNLjjT9cuPZsTioBcjXh2LgSMRcLjXbW4Hq2m2qpUPf2GRy4LJ5GNSs",
  "key2": "3vs7VjeFJSnYhbwie1H2ycqSKHd7jsgBUpjKVCcXSSii8ybTjdzSMfNaHAey9CfaPBTWLsy2uH5sQnujTqxCfaYA",
  "key3": "5WwRJTecU171MfNwDZSd8Yoadohxn5pwE2nPJG1XHPg31oWsvbYFCrpuZBruuN222pFqnBXx2in3su6dLE9FUxq6",
  "key4": "4h18MNVh6ZUfkDnxKK1vuZyjstQyizEZr1BAAxQLXtdVpxjPGnttUhtp6W2WvEcTYhDso4SnwrYE5L2ggtnCbgzx",
  "key5": "2rXXrP9Ax3BpGNoH9u1CCYpdZPLp9csn6KfCsXnL9R1ZbUmTGnknvU9R6j6DE4Ngzf5Ff8UwRkrp63Pntr2YMb82",
  "key6": "2DuGiQbVGMtoHWUYBG8BFZrPbDumPyH5nEtgkCK3pL215dMarZEBmKravaboaNbq8TjcaBpcSTScetesBMc36saM",
  "key7": "B5HM5b2nSU1NJCYsWL4Rj1i1oJmqVq9dFry4erNQQTPPGRVCEYSSo2LuSiGgNVytNbgkmUqEzRmn3jaSjFFs5h9",
  "key8": "53VcBey6FuQBHY3S1sPhgUcpnio9RaVWkL4j98RAXmRHPryoZ5PtVk1xyFmx61RkJ3QH7kgvjc4fwmAZd6BTpgji",
  "key9": "42GqFsroY5u7tk1Z1ui8UuFDTEvEXz4YGhC8CM3si61zyUAaqgvT8JLXjuo1nPiDhV5LMAxUXw7UzaeMDjJJSaBt",
  "key10": "4xzKHSwPeWugqjhr12ZC4CTVu8q93pwFeu5VzcUPU1JAtSCTN3sshTzLMySBDfnPfbvUbyxx8RapQr1uXzzbDsiG",
  "key11": "4SKpPiCDxjWsn9F275cARxfmNBv4ENnWHmpJDz6EKvkAZt7YmVPWKEyXygzitkbcJmi7soFYvf2RCfNE1rGPzb7M",
  "key12": "TEjx6d9ZsxYjsptLiUXeyuQi8qnqxUw6gHVgJuFbuQjymF5TBYT5hyD3CuQjAnGz2sE41z2AYwQF8DLtExQfVNs",
  "key13": "3c4AjzyX5B2NjbRdSTbhX7Y3XKXk18xjBGavACp1iHRXL7gNZf68s7wfSFgDeGqTJjbrNotendFKqsAiGPnrgYmy",
  "key14": "3eYmPq4pPBgMtjvvD4i9YmzvfKrrdiEVfz8YAydGHaNMBoYFtX1uYo5JZU3vqATF8Qjeg8P1qgjZa4azS2MptRHk",
  "key15": "kQ1iHiKp415LKDnYBs6xZRmm13r9mfzB7QeM1zoREAcZAKz5TqynTtNsZ46j7rTyFVij8Ya4vRpvjDPNi1Q1CUG",
  "key16": "BEeECkaogdJd69donwKe5Nd2idV6yaxAgS2fvSSxjYXdyhGhKUZ755JPsCzvLMspCcH7jquw9CF2aSbRHq7JWFN",
  "key17": "nm1dwo3T45X9ezjnqT7T8DaPQySTY3JCRvajTMDLPSp37S2JdSReyPJEr4g5QQe5cPXVJFeWfhh6NbEHofFGMKx",
  "key18": "595EQANLEa35YSuzJhskFcdGrRQhsN29My7gjMjnyCXVdmqFvw8ZVgX3kq46qFoBYyXhwnKoDRX5HyvnRcFVAyCL",
  "key19": "am6SPyPNQ7Z42JGKZ5YxbZqYqFVxXhqFJDoMup4dHhPNH5GXzwZwJJVtaUYm4vmNESLi62aNNDws6dcaExdyEv7",
  "key20": "5ukuT2zWdq9RKT6h8LGqoVnPJ42uhTzpg3beKXUQe5phVpswFvnuL7f6JcZ7RYpCrtFi9xHZgksgzgTiMFyvZfFL",
  "key21": "5rJhgBqYYYN1fZHGdrnKjauaDNxHafHnpbHTQPzQoeuaAXyrxWYNkKonccJtbix4CXtFbbNdUGU5xv1FtozJtsjJ",
  "key22": "5LcJXyvuWERXNAkWJZ8CwUSGyWHENyqKmovrtcknpYMtQHk3RA9tZNJNSsWRh7jC9yPDHjyi7UaAw6C1V6P7pnM6",
  "key23": "2NC2SGGbSnm6mQTbJMHMYzeAxVkcBQqtGNMfUaUiseFs9SGf93HRvfcacFbSDzLh5X4f2UnmsaZ7sH2SYrEnpEc4",
  "key24": "2QAFX4MGvEBKxZP1FuVwBqF8rQFg4PFARAsqcvhbxBJeznh827v1Y7YnTe7vRpJty3S4kKeefnqyYiQZdd34Lmzq",
  "key25": "2E9SaYtXMho9pCHusWNeUb8aWPBtKCqTvKEBoFHrZooetUdJbUaFeaKMZj1AyrUdhygN8kWsSKZKiEdoppzfh2fh",
  "key26": "2EjD4AFDc5bhgDEWUcxLwe9kuazppeZYb5wW2h3Bhotj6SLGRFEJz9H7jst1Zy1ff83vCo8vgL4h9odWYjKWebm6"
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
