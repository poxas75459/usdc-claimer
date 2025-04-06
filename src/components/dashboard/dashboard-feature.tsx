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
    "BAqjc7BDfwC3KkXsRqA1874NscTWpSThcg12yFQTvKGCu5Y1FxFrrQz4RFnE2eHBncHFR3UfWqrf3SoV24t5c2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jeHM8oj8RtHhYRfvrMmqJG9wk6Xv3NtiYNZT2f4mJNGPuDff5DZXTyp4pvFWfRwSY1R3YWf9WoteJ1ipDVzZUFc",
  "key1": "2qcTPYAFj1fvUoAX7ThEQbS47bH81EnMp3MvKJTnQzTLVS2nLz45WCumD4Pnb92RP3ZzFopSzuG5VWXvvg44PoR2",
  "key2": "2Azfcz4m3DmTYtvyLwKJF2fgtjnFNyfxehbD459rykJmVUkzkL5xtzCoHFu7kyzKCa8Xc8cAU8YR38LcVTjeovQw",
  "key3": "5yfRUpnP21u95pBnxCJdN2uBcDPEF9LwFEUdVFXHwREN1t2EYikqVz1nyNprbudvY378fzUMd6NTvq3L7yJLmMGD",
  "key4": "4TVC9AECk8tdSBkAKQU1ei7vx1Lkd2MBieDjWjJeYNfkrNqoGv2mJRL7ra8NBVgBeEwFNquxtMGqyfVZQe21YqZ5",
  "key5": "5fNQcVxcFSrajQerwyytVEvmb65FuCrPdTjRSRtyrbf7vXsToB6rXhuyt8m93ZGrz8nXdurpjX9GKVYrPVE4LPVr",
  "key6": "whKTnj4Jaee93BxET3rjhfw7EhSXjbqnf2LF6fPLZ8Ffy1wq468mdXpRNAWpeKNfHhk99QqRRi3R7bk6PqdFeUx",
  "key7": "5swDHkJbakLbP1gv2Xv9gCwWDvDJgZB9JNbzSqGYa4CaLf71NXeeuFqpDHGwHcsQ8mvejS1DapYrNxHPM9i25hHJ",
  "key8": "2PPT33Z85hYyydtiFKcssXQLGaSgnsadPZEn5ZR5uzCK7niQmUcF4AZJCx9gKtaiRgYBDweFGsCRVT62kfTMa1Rj",
  "key9": "3kRNTzJtRAvaKhFzxaM6guuA5kfSvKwM17XLoodo3tKsTJGWvxnWpzmWW7TxqQYivXs3UNwas9U6WRifewREJWgK",
  "key10": "wLJdhMPYYEAfdmnDSLEhbqP9vsdZwVQwHSo8fsuxA5tV9VPQhyFZj1LAuDevRxe4qSN4PQVZ6L397qs4AQ28Tdu",
  "key11": "2piFQK2pGVoUG1UPNW6pqUKGywiA6yi8Atu9NmWDL2LWumQCSUU6iAGYrmnysj1zkwCuX7Dd5SfBAkchxkQ6qRjB",
  "key12": "32wYTtoyissse91VwGS3NWpAas8tTK1jnYbUqCsBP4iBvPSXECtddhoRq3XAx3E3m9vFPrNgBa77hC1D6JkeTF9K",
  "key13": "BQWBwHGXMESnv7fXDdxUK1bV8hwouvobPZLm2aYJ7JnsMkk2Sc3YkxEJngLC8raJ87NU7ScSqykfdULuqENWzUy",
  "key14": "5H9yuvLfdGuFKsJDiEYCyiDhuhYvT2WBr1GabCmPY9Xp2Fp4a4xBRfj3Z41SL7yP3BrDVb5bv9Tutq4DGrgCbY1U",
  "key15": "4jATRSy1BiHnquNpfwW9UkCbCEETTsTBfM7nbGgCcEmniYy6t5vnYfXLyMgpt8z5sVA38tkKWZhFEQCiaH3eREzR",
  "key16": "5cAD6UX7UoTyXp1U74rSu3cX7xSzzVs8NwX8memQACAPFj6p8tbQZT8wKEmYh7pTVN78ZdzAEttBjkdAoC6Zs2pq",
  "key17": "7LUqG3qi8MRXKM8WSRT2ZmSEEBx63f1HaFPMuCtYcud4foNjWJothVpmiENdZ3Aj7ScHC33NQ4yrWoMBRqGkdnF",
  "key18": "4cod8BntXxjryZ4vxYpGqeNrVtDmw2eHxpk7ANoEn5aYGUTbXhKbDzdR4Wpwky4TX9k94HQcPbvD4pHM7KmQL8bB",
  "key19": "3a7zyr4Du82EvQcjPZPdvskBzvyo1QxB7QnasJW7v75HN9R8EeTu7ntzhknDtNENzoucu47Q2XZLq2p3QkmBSiAY",
  "key20": "5mBfGTG5nKeyTUrcbkCxKtkpKJDb9XPrbUSqJDjYKi6cGkaFQAbQao4rM7ZtDBrhnuRmpct8tqgDsH5atuwEZcQo",
  "key21": "2rLx4ctFWhQtBzhHU6hVuQrki9bnEWJFzPQY1ZNY7sXdbGVCmLryVJfqTZU9BkWZYSyBaNcKN61TbQFe9awtmLZH",
  "key22": "4YD9VTWJbizhY41AF3ADeDFtfsThomVNrsw1pofe5LCuZHSUZJFQbxbFHWkHteoKnnembisGNv6nfhTrirWKkXyS",
  "key23": "5YiNS49fyjBw8YAfazQHNH5DxQQv7b5RGPqGP7UjYB5LBJVbsrTxsDq3aNUAg6wiVDM318YnC6PJMgCxSagmcYEX",
  "key24": "2ywMctD9shKtgw8K8r8uUHDeKDZQWrVD18pvGkwZMzYwW3YZ5x2MxpNQTRXVhhjeaRKd2WMtiMj311FtDFZaBRiR",
  "key25": "4iHeZfQqMzJ6f16Lduh8tgi68BFKK27T3gLqmAHU6vJdxUTnEhyEdsVZ86EvQPZu24ZfNFURDWMYpESVhbbgf17s",
  "key26": "2SWNzgjBFrRCJrQ4LLoWECuVz1GzGqXMpxtcbR3FyZj7yBAmbBJKQAActjHHLUKCf6Xew8xcNq5Yw58h8Hjr7qZF",
  "key27": "vcWeZpjJaFqA3HMR2U8w8juTx9TspwvAKbLSPQsYzCAR1SfVDmEKdASzuUqYaFAFhqTzyPy8H3uVCUYizijmRdm",
  "key28": "2rt5QPyAEsADaGtnaDeDjhqta4Q3AmmGwwruyfCvogQ9QJ5eMHDJ3hCdpoCZMerixGdMkX7db2bjo7Ts4fiAtwJm",
  "key29": "65UKNQo2mpp4EWDVY6ezFXWRfV8h73mtd8Qx8MWru1ZCtwMCXGbyF2WU29iv3fxPrWegXHTEemfXSyAkJZknQymx",
  "key30": "iUuUXmTqgrCRmPSGWFexgpmF9bpC76ihC58X5LbjcwEVSiEeo5ucomUEhHxegBUsN9WWad68AXw6hQoBsDzfyNz",
  "key31": "3uZdMKmB2VYa3fDsKN9uZGSwmLe6cHhHPyc6PtvZY2PTifHHwwE6mW5WQbmmmo9d68bHgMmeudK2qU6vzmBkVd24",
  "key32": "634VzHyxDWDvUYrbAuQH7M89HV9njUGo3bH49eL2mHPsnsbMwaKG8v7AvV2tu7foMzrh21RVup9egbdHpqSLwNjX",
  "key33": "3ePWxJPx6WTRuyQm25F6DVTJmA1ybhag1Md8acZTLsKTgcZkZxyyVbnHZHoUeHtfur2WJaye5FzBCy2GyXbUXnry",
  "key34": "2bAgDyLWnPprbkgpVvbepev73SYtVKTeuNZMDaKvjUBJoM14nJjN4FV2JLgECTbYW9NJriHM4RWzfo61a1nDsP99",
  "key35": "2dSAunP5U9xh2BSNZ5iurVvLZbvaiK5uudcu8vdijBacTAMS9ktNM9n2U7RqihkGFT5cbZQdf2VZWcX3okY4JzRp"
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
