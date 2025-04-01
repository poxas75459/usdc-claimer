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
    "5ZfuoJpn1AkGnm8WdDANBJ9cV75KKTMb4uWSivDaeEoC7hLJ92CLHds6qXTWGMHVnr7vWhhDFdvzSfneqVsHbhCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rjNcCwNE2ExRCz7yBQ5z6DetYuCTUTwTWSsLPtcFDo2J239k5sF8XngnWkvY8Gu5fcXpEop13A1nnHbtJgFTiWo",
  "key1": "4tMHaUc2LWKeaoLhBsSLWUz24BeNCZi5D7XemH4szcxr68NxT9H49po2qjtTt66XqCpMhY7xrTUv3DrtzuB7ATBe",
  "key2": "64VfUotkThhxBmQiAkbF4Juccc3W1cagfcmuq6VudTFbMBxu8BVSbjDoRckMqKsGonuoXq5sC1RQ3jSjj5jv7pvb",
  "key3": "8YRZwoEgusTLne9e3yt8twhSY1oRrT9qX2uZZqC4Jg36HguZW8DhTHv6tq8fbf8KsE5HAwbb6YMTQveqoLbpDYj",
  "key4": "49rUrvgFqTLxEXopJaxfYqJoAzCFQVSzbm6A58Lam632TX7QU4WLLroRhHxqLraqyWSNDRNZ5kKAqFPcKmLzvvB8",
  "key5": "2eiQiKkaL5ZrDEWL77sBq43UYJtRFS983wSUvXaZpbsTnjnVeXZYTaxNcMEV6n5zSEiJt4bVYroR8C75DMLtLfCm",
  "key6": "XnqwQsNukCn32vixMdufNkRuu9MQ72X5Gi5diSinmvZjAW8E1Cf6z8s2No6bDEbjfd7stx4W3qi1Ls3VpU28irw",
  "key7": "5YLzu6bC9GmybFrrSTK9gbDGhroSQ6fgSMEX3wLoYgyet2FgQhASvsmivRWFKAyZPx5TVA5MSkzc6F3ZZK53P6fk",
  "key8": "2Lxhf2WE6dSXd7np4z7RyJED3Eot2ghRTmy42ELtkUS2yo8nBoBpTvzbtKUB2SJsPHnyWWsZWSbyQTSMd1CYLQdS",
  "key9": "5u19UJRk35x6Yv6Ky5jaqX2yA1hrFLK69KVHg5y3WKbmRmxHjUsV5Stm3Bmn9FytJBQ6StoBrvyTpqXmXCjy9522",
  "key10": "7BG4FZGR7zQzg5FggeCkkKmCF1ZgarKYiAKKPmC4XBLTGLLiN8SSKr4LE8TYR2cCtvxnAJQPA8dHoMUbWJsuDaZ",
  "key11": "5gPEDeKuwbXBjfsVoAtJxn19SJEVjn2ggJSQMGnkMYgHM9JVhTyU6Tas7tPb96oEY6khQCwY66bYpVyqVgmDtRf2",
  "key12": "3RFdpemaym5BMXkwEAmbXXvzsgUeUD4VpFEdctTdYaut9yBAajam5R2qcsauaj55UEDC72JGAP34FB7SQaypbEya",
  "key13": "JHvzfURaCFPY3WuvHZdhrCs2Zv3jMHB4RWQNfV5g8CEJiBPa5DijY8iDftadygtkezFBe8wNQrAzEbM3WvJxMEU",
  "key14": "58TXVVitVPzqhbSHQ2WEgwJBA8WunRadfjqZgBf1j7HVnvzTpc9YDDCeAyP1h5NvfYcUxF1WzU6JG3divBXfC1ig",
  "key15": "WsHE2vAwqgfRdftTrQcnmA8daNPgZLD1tCDZTXGqgPaMjhFCMr5z2J5EeSzexbPrG5j5xR3ZYD7Eukb6Jg7cwuj",
  "key16": "2TArmHBa9gqT87Uj8oiFHfVNXvYLEiNETgCXqy9TCvNmjahnchoMpqekPAmwvqv5JhQBWRyswSAgDoZKHPQQcAiP",
  "key17": "49E4RUqfQd9Y22bb2PG1sXjttzpiad8XzGvE42s2dDGqm411Rg2DsE9TNAuwtiKoCBDWMGnFsgfqHDVkbRKfYfgU",
  "key18": "97iip32GdWSnAH9MnYBctueUNiGtqVo41TVv7UYYiyw6E7wj9jTQmxCXmQ3iSPbpkgwjmc54gwq7sDX6sYu5efG",
  "key19": "5gy8iRkwjbsugLU3rhAHhe8Kf6pWcTyj4Zo1KKYCMWPYMWp2MT81KmYj6sDQoDVyQVwGmLDYJaU9hXWubvHBs7iY",
  "key20": "2xAP7EQAMgoCKFdH2NN21MZRCGH47KGpGDA9f2pLACLrfhiNvtshn43N2m4k99CbtfSvbCSgqnfuu6HAUKAHyNHc",
  "key21": "4J37eoUhRcrQYZ6CAbJVUxJ1xt2NxWU7iMGYeJTKGfUy1JC1DdDj4tSLkGcDEBNeF7B9q1K8BreM4uN164EBg4KD",
  "key22": "nVeiwZEJgQ1Ec4C1sHaWpjtiXeeidFaGJPLt9agt4HqNSEUZ1STTADRS3tVCefeugPSX4E9z64rW636fmrYsMsD",
  "key23": "5gGj9hgsgQSTs2vjuiEq74RSBtUM2Pjqt6ynsdWxWAV5bguZE5aDdb9xn4bT4QYyGjsywgwWRzzQ5FpkKtGuxdp3",
  "key24": "xLRcbdCUPQFxDwGtKyvRnr88EyDVkqNBkjkpXzkZC2XWQ6Cq1eERCCuss2qoLEwnTX8qKGSX2GWaeKsXX2WwxUb",
  "key25": "3kTwCVmC17xcixT14NEG94sFXHD8onabcsdXAyaFQvKw6f85afotwkyDpHNF9z4QYA4uHi642CoAAduPt8hMAKC4",
  "key26": "338kPMUPNCRjuZL8E46NdfWF5VjDGLusqohSZn8EzwJGVKrzcvEmYM4g27ue2CMqgMkC7s1FrNcuKvECvbvQ4cEj",
  "key27": "5aoMBSheKMNMqFdwyYVNg596cvHSSqGZa1VPp3fkBRQFa81AWEc89vp5Kbxh2TcfoXsKZKmB8SwAMHCKJpANkif9",
  "key28": "5ZAGgtigHLpUJ5WGSubHFGHR68KFfTDHnSXvbzEssFfPtEy9gos2tE3ouZQQTiiUauPbzHGHRHNQaj5vc9UfogJs",
  "key29": "4EQwYFG5Nb9ze5opzFms14r9ZKcY3FYSqS128mZK2BdaKECPGHnA2H3rGseVCMwZJTGekcY4ULcxxGCRMseA17zU"
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
