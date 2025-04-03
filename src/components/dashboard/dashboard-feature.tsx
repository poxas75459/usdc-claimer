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
    "4t2uiq4JE4gPSQfa6t4sthzBpwkXFku6TXtd34w7Mdk1pr3HGrhRcZrhN5b5rSuRL5n2KQboN6jLMScwCXUQUczj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31JcU65bRi5YUtpBw4SZuYAsSiB4CQb1BF7JRrTB23GShwaQ7xinCU5imzgoqV6A6GU5yQL7vNh7DXHtY7VipfAs",
  "key1": "22tZdSQd2Z5QnyJXdgqxzp5mto3JbuJtY5bZUPiknpea9y2xtYxiWLd4mKxJRN8iFkbXJ28THPwDRvvfDsMBjLkM",
  "key2": "4quN9hh8Uj9tR1X1ER34pJS2EbS7uM3EKxHimjRxRtoPVz54J8x4krFQd6kMHkgwRxgQFLBtBFw4fruCf6QTAHr9",
  "key3": "2SV9uboAt32vE9y7R8QCyBhNRAmYmXq229jKzuz7UWnaQr4KvHjfV7D1JhBxp1xM1uofezGrVksNKuRp3oXTMuxb",
  "key4": "49mnHZrZFW9FGkP5Nn2osnmmj2VVXoHx6Kpffm72mJFWkJexYTQ8oiujhfBiHQGnmH8hWtkXxtA92TCDJdPbFkrq",
  "key5": "5rU976ifrfxGVwiYTtPVRGEj5U2YbVWteBbqDuNtznP3MWsf4z5kuFmPkCy7P5X4NxmMu4yDNR1CdDr9oBgR7qxk",
  "key6": "4iRWY46YdHtzPPs5CVSnzqHuhfoQBXHktpbpmu3NRk39Jrun13ANWSg3eDxcgiak5ixRoLLnFYCB8bNmqEAdLPvK",
  "key7": "5Uw9MPuFfnR2rzGxzuxRfmtQqN3NMW747CCcR9Hb9CZDNpTSzkJZeg2QvyvUGxTRURbRCaYJUirwpkUBrNWDi2qc",
  "key8": "3F6omdtDU5pbLsL9eV5WEk3rPaxDdWbUjGwxWpShjJ65EXwMatWEtYUAphYk5dFu6nTTTCixmfaRMU2svU7cEdTn",
  "key9": "5J8ZCow25vPGaMMYyMFMaKouuuzS4dDoVzrQ3ovSLXeEPVd4vqgsyAACfSvRPSDBcrQuQ5j3VstjCN2ZWkoHmsRc",
  "key10": "2ERQVwyfMV17sBrBHQmiPaADdGSxNfh7nwoKveWfsWMKffGGEtzkBeZHNPoTeUtJqWbP2HAWkbRKfKgA2o3nCnnR",
  "key11": "4f1FSQiVt4oe5vdvZ6Kq7ki4bx6RgSg3EHJpDuzKk3qJJoC29zjjdz6vwe2kUTEUw5v6r8yE5wstDudWMwifNmae",
  "key12": "3PPDfsCJkZEsBGHDdtNrxNYU8Rg24yShc4ndV85YGzSr8BZ2q8b1iaEDS6kvvx6y8LcA9LdZ5ApniAohbnC3z6tt",
  "key13": "mhu6zjeYWFDygcjLGtNyNuVgeq8LBtT31HqWLoh2XYoFHe535VZf3TqKyGqufpUXpRMgDf9gKXpmeS2pjhkLtWM",
  "key14": "3B28JPTqjkX1MFkW8TCdok3VCrjfyFSxAXS5J9dcKjUspLKxVk9o5skeZ5EwjHuceUgynGMnPZr8duBHUiXwPhrL",
  "key15": "2vRunuKAzAMDah1udysREZoEhwts4hTcmu23mxCGqDMQCXijEA8RrfCBR1ygptyir69rBrnGkLx5VbpZuzqT2jx8",
  "key16": "2xD498v7ERGQbdXx9GqgpbmR6dYNb7xT1cG665BZScriv3KdH13E7stsTs3TWfL2GDK2RMhV446CSGHLQwjWpnXX",
  "key17": "3LWSUWn3L3Mpn4aHdTrP8B8QKXDTuNkqYbBEZyArM1H2r4BFPnb8YASt7bKA9yna9AZHiJBHnAozQwyweEnLtgnU",
  "key18": "31z8HXBU9d6tX7AUkg58pMNwtd8wkKJTT1ewKDQb7oQdxWPm3DThFAX4qhDYrZDMn9osvv9tT8o5FNosswwqZJPv",
  "key19": "4BFpPnDfA67KsyPeEMxstNgZtipbNz3pAUstXzkEPfa6tiptSuAfykrLiYGGqZ4izWG1o76uALddq7mUNBYEY6pr",
  "key20": "3CbiWJwkcDzs3AQ5zej8moH948qiYr5Tas822536awunDygRvraSnCV1FN2TrRf7L8uitEiidUuanTXhY8fULVW2",
  "key21": "3E9xYpyqkuafVbTqLpTf7R4ps5Zk3fgDsjjF3Tsu2QSUZNaGaJTwN7sjBTdRBLfD1LSyNZ3jhjsCZnG6jhsfA6Tw",
  "key22": "4yxP6U2wywZZDEYmQ7CR1HeMxY8Dp6MPsJd4HacxpT7XPWDQnPo8YBFbMChZW2SxViV8iXtz34XcCgWfLS4TBNSV",
  "key23": "3oB3b7sNeYUpJ82z4avmUfMammfsuYjhc7JnWtxdCbQjhTLEJvFnavxbVQfVadeE3xEaEW1P38hj4uEvvRxtod5R",
  "key24": "rNnwPdmbsmNTSMxuXkS73ei3FyuF7PjMTivhdSerQyddXj6dZ5mEPYJidU9hy3QjB9XdJMdxRKEYDGjVxZumJh7",
  "key25": "5UTAjAddoBEYs7yc7neb3co3CTA31edkmB3mvS5wfwYt3vbXBHPZTYkVhpUv8GtcGNqB372h15852JFYQRFmMQA2",
  "key26": "61qMXPS2eBTEqXyDhpGhWFQEfmLqdhno6cKQggkBkcKA7gpqmpF4NWrnp4LpcNufxrVh89yphXMtfGgSPK4ovFiG",
  "key27": "63VwkLzojoGAxijQgixj5EkfrexHBcigycQzW1HSfwwoQtV5fQ2MQfkfaNrZLjEMNeLMYTX3ejaM652wWFW8f7TW",
  "key28": "LTGhEveGTmge8mnA1E7YTPqkn6hMaoVksJhcAwUSvJyXw2tbEfgTfFZeBjy1aSmtQs4cecHJc847nN81UViGxvv",
  "key29": "5HcRwGgK1weEM3TSbLJgYsrCdpRw7wMRtQ5kq9wk8TerfdiW8sVyr7trfJFRqcnRXi8mY7Zd3CafzqzhuNUevJRe",
  "key30": "25ysmb9v48JjZLZvxNMdwkhM6a2qL2HGtnYbmEGD4Di3c5RgvC3c6vBN6Di2GXCWzdEgvgV9n8BPf5pKWAqpJyRS",
  "key31": "4KgeeDDW8mfD9CbH1yPnB9zK617hctnvNcVQCcdDMeM7zmRojqFGiUqfCruLoMHwav6QXTxbsZmAUMFMKKokfpdr"
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
