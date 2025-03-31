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
    "2HyJchcwJJ9YGuC6p1DfvWCdR7gQFuvrbpQ1fHT5wTVTYn3eWmpu7ohUZijzJuo1RnetiYMEA1FapxR5fbuggCJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yMyrR8EKcwxGhJhEMKNqLsdk6KzRZEvxy6kJdXE1nEodLSPCqnSsdEk163hi5JfRfGvbn3JhNcMgxumN8YxDcUj",
  "key1": "3PJu3gzQwWxiwGwYcZVTSEgDU6A6kjTtjEjjxaArRd6Z4N1QNgi9GQ3j431aCr75nhRBuXrxdaT6ZwWQETWNTgXK",
  "key2": "5bLvtxPmMRsm2JnPurNh16yhkYKovpNuz7Qs2bJz5ZRyJZoy5HykrRsgVh3nzAPRN6xFvFMptFcEgrT4z8ti24Vw",
  "key3": "4gDhaNuikZhCUqUc2qCitVS2mihk6ZhaHyduAhwBSMF1Ddm7fdk1pYd9ve9r1SgGqftjCam7jpppr8a7Q3hp8StA",
  "key4": "32r3TGBghMYt1mTTyE5FLFpVS6uxRQ5bgGHEuvNDaPvB4syYHxSsm2w61wCMf7ZSNmsSqbAu9E375tgB1vdbGjFQ",
  "key5": "2xyCrADSxmyySxFhtUmDNFjhwZ9Xb3DpQeD3UzNuMtGa7MnqaueoLRSRUguPaAAZxDYU7tSva9xjUM4CmAkDfEQQ",
  "key6": "3hLsUBJWpZYATLpLTW6zCr3fpjFmzgncKtJn6cnd6VVYQGUJGJDQoPteMVL8zGj7kW2EnPQo22ixRVrTio1FD5V9",
  "key7": "JnYXATVGFC18W9s6mkrrmSXncHLDxECocNf4oQ6AM9HHD9P1vrUnszYX9AkJ19gna9e7CzEVjUnHBYMYxo6cVm5",
  "key8": "axLzhdd5qnL1oUEJULgLSd9LBTR43zod3SaHTKNM9aZzzEWVZfbE4X8iGYZaeaVfb6v3J1spX1ySwxxknstEiod",
  "key9": "tukXJzZumhbcp6RP96ocdHmpjzdziw3VcdpzbEZD7xj8XUUyi3238mgcRdsdnwfj7wzQPEjnKqVKxMVQU9Me1br",
  "key10": "2KVnfdheSmeGGoWQomEw8FuRfRayDGQsJyPTxQfFQRCTt9diPPoQLzCE5pjQSPTPmJenB79PT75FEHZ9XHGqt8JL",
  "key11": "4ziwAetGgHuhA273ciqBTDf6KUzym8GRyaAgRnsf2J6NMNMxNqyqmc2tx9pdLdZzDnBVDxtX2hbvyCNSqjBSmiQ3",
  "key12": "Urd1n4VqQQ733KUcCPDEaJwhFTyHgBV7KUKA8m6pKsxLZPJ7aS5hZWM8p6mbMeXfhrbaLrNB2BEvvY4kGHhK4xc",
  "key13": "4rnEWkuDZPiZzocNeKpgVAy8dzC6jwocxAncbwFyFScYWit4re4cLgb3bWZgWpDGcxD1mRc9CrTJ96LypWot6d9Z",
  "key14": "2y5DzzBpZay8mDwGMDSNdXAJ9FEkNeWKmYE5AnqkbHkBCVbK2xAXkLaM99xBnf2fdKhTaoF2g4vayPam5qyR4ozd",
  "key15": "2vtCwCrGfKW9as1mTFekPHhyxMvcSEYTipe3fXDjHbUikLtYDEYnGE74Q7bQAXicyZjY42wtCPUm3JdDn4VZGuG7",
  "key16": "671QJQBedJhitGXaYYAS2VgMf1m9WzsnQYJKayyCe8wqtYPEZBCUtJx7YY7iiwPgNnjifC4jtDoNnt5LtH7RSowX",
  "key17": "52r8jykjjfnGQzXia3XAwA2NxsZBTDdZjBX35PwUThDMBULR3HUtug2W1C4AkBgdmfpgordG9uT2ejZ1EypEuDjS",
  "key18": "cmfjNh4sfhRRDgz6QGDMj7upkYeF7krJ5NoArfuPHthZmoaBhaEKxgKtAdNqSFm2hDfdSDanmPwPoC8qFkKTKTq",
  "key19": "zvwcV9onTuJ7HsmwGa2KcK5yyrSkJBgR6B1QqXwnxhcoRom17CvHE5awSaiEZn9CgJFDih824BvnnVmCG7f5J1D",
  "key20": "3pty8DFPVY8x5d86pTR3VwYrn4VftFTYibY3ay1Mkb6DuX1Tx4ZtNBXtqUFVZ7jWZjKJnrX25J3gmuC8gsyXFdMs",
  "key21": "2pDuvs5Coqc3UVYUF8jbrA63VJ9RvEEP7mQunZMCPzMQ2MYPzGgtFiPDbu2APQnSpCY6bisHQi44recWZ7Go5gg9",
  "key22": "5WMgpqeRxSMLjtzHw2RvGASzzgMewV87YrhUGnUpKAbxJ4c9v6TZfaV5hQg9JaWZ9cQemK3r6vuQS63jnWPKTSdU",
  "key23": "4g6q1z4JyhHaqgsCnW1BFLq8tcf1VFFa2ZqYBfeJCpVtccDHjwfY9SQX3SFbwSPa7zbUJqT7J7zdZTLfhehEmfL9",
  "key24": "3DoNsU6BmsRuBQRh8SyG7Q1BaNkpxxL4hRQVPx7PsUJckoh5kASVk2P7c7JtE8RxLrtjH1Pm3iETjEPkPA6Ua35j",
  "key25": "4PASkmhSgrmyHQ2MvFn7UUZJWqo6HtneyE5St5GNQnNmDjLM8FzDebRpFKzBNQpNP4EhG1KFaXWachKKVvzN4vrL",
  "key26": "2zUTjctbiwqrBWNobSNeEX72J2p5C1VnQWbpdUEQH1oDJfBYQhhrKT33Yv6FuZWDzoy9b4zthmRBBfn4uN3Ys4ot",
  "key27": "2ZFkmgvyLrwtnFFLxSKmUYYtw2yoSynnD5WALqxNDaQwxqSXHZyk9affty2bJq8hqzeKUY8kJgnrCgoL5WQ4V2k2",
  "key28": "42yHUDqveUosCK6fXwPjZJxejbspdmUfd2PuZGBnHTnM3ujQdU7bfVTgwkchbwRD3eX6eiyQHkHRjL9jHE9ZUmyF",
  "key29": "26WD9vZ9hsiDBrjmqmgMzCdoL5uANTH7nuTuTLBEUVNUK6vzxQuryoPgNm6WZgsqfPuTGUQAJhpPq3bizUVZZUVt"
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
