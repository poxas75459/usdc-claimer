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
    "5f9V2RLphJrc4ujAKZiiUmj9jcviCJJwZzFTnUjQPjhKjm9RgdRJ9yzMpJ6wxDuLksQAGDH2uyT6iyY22YXCE9Zq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F8FN84D7gMn8A6rB6NrSVgUYSw1hnW9wkfzEAvn2SSFMXzW5wyouzM3ZBNxeQstraobwHeqoMejsNfFfD5Go1TV",
  "key1": "3mT3WmbCPD1hgfajKpfHMdBmM3rX5dv6Jn8EiPvpGztHZSx5sJFoKqLLjvsWC15t4pE3Up5WBBZSJsRWK5gWRYRL",
  "key2": "Vyq74HZnwur2zFHkkCMtc53JRdKpuG5GTMTa6d6vCK7tHVaac3ZGzbqRN1GWzWGpN3TUda7q1mw7oFwitrQDKQ4",
  "key3": "4QA9k3d36JwvNgxTqDQhM2rbgXecrebJKC87qNHpfYtZDqWLHj8YTEBpWQraEdjdnja8c8DfaJXhNd5eM1we818A",
  "key4": "3fCo5rdpDHeHVdCyKJk6nrkNZd7sEeVLPa7k3tDzgDocCDcXvSga2SQZ3NXCh31kmkdbXSArd2CsFGcEprW3x4Mq",
  "key5": "XDjwjy242f2meuKX6ozuMgaCYn9Wvq2RAu3zXscExjeE1ucTimy6JR1GSHMkq5QNhTAiySEHomCivhxmW4wgn5M",
  "key6": "5hQimKikyaxptxqMHmPzAaJ5GhiJAGPiczFB2ttE8RLpH73K214XMZiqWmC4mEVwCD9wGPeTuuUoUDfr8YmJd4Vx",
  "key7": "5Dsoeea7btBHoSSuPUj4VrQ33kpyLXufawq7D5s4eAdmug2cm8xe3hUu7gWNUVkVxQA3ybAVMvxPAXAMqB3M9ptG",
  "key8": "5LAHNX12CXwoCXpSsihkPP9pKVXsesvZw9fLGnZx77h38wHBJJPsSSN5ueGoHYUXMYUzBdnkHS8JA638JN5VxMVj",
  "key9": "4YrZB7arX5rb5Ua3v3wo7WWdWZN154P6szsKneaoYaUzMkEtaH1DADDHRr27kNug9q3At5PHPKqXYExJ5D2Zx2fX",
  "key10": "4AawNAnyhTCD82uL8hxxw2Po1ZgaNxtREv2pTUBY1Xa6fTC67dsL374kaVUMwrdDeYaNBSviombWqK3kbkTn3qp1",
  "key11": "46JxM78edV2p9NTjo6CdF3EgFk73FvZWqskK1b48YgZj5cauZKdd6gsM2QnrCz4vhS7cKDztP8rRPTDoqvAYeS3U",
  "key12": "cvyoYySWjoi3YwCujhVryaiCQmzepfhXzvaNZAAY85ZmuSnKtYRHgXKkpfuMwFoSEfhbMn3MptKThVYTasYmzD6",
  "key13": "5HbuEKuxWVv3QNZNxcsGXQuHbikCrLmJjRPBWa9manxTmkATPAQtTUDrQJ4trx8rmsLR9kRZYvNhQB959A1CSA5g",
  "key14": "2Stc2RR8YC9jSgK7iUMfeFU8YyaiLNEwSH7rwmo7VjDiUhnot5ar729dKQNurRnSZ43YiaPaCaViwSqmtKuBaaBt",
  "key15": "62qSqstqddFxKjopfVnxsAvBpCBVjb3vcCPk5pAdmvy9d4b9ZsdmV8oPdoeafJNzx2d4cTzNfQPxEvo69iGiCx7t",
  "key16": "sBEjGcUGugD433HdzBwpdWgsDsXmemDWCW1FKZgJE1fmd9pyuTk215GMNA1X8KbYxqXfUaexW1BaTME6Az3BnMM",
  "key17": "2RASkcgViRSRPapynFv5ZTYxydKX5oHwydYti9SWiCssAaYEfiJVB3qYNH3wMRq5RYnXXP3GfkdiHcFntYXfntb2",
  "key18": "2A93QvwkUzDzBbF8vmBa8bkZhDWZRZEJX5q8m8e4cypfn8td7kuM4EpjG9zCbDDf2L7HN4cShLdysiYMCLcAcMWp",
  "key19": "LSzLz4VBZKxn7BVrWhkVsxJ3MteYqa3YtAg4ndovtTtzhKFNjbUsHTVYPQjL5JcRRoo2888Lk1kWm2JtxZfyy7k",
  "key20": "5YRPyocJG38xvAVfFSsx5j1FUsAvP4uTvtUW2RAJvKNrzr1gprx31PkrT1kE9mhdT5A5wPCAYi5Foy2v8fLXo4Nm",
  "key21": "3ciMcNH85c6SKM3WuNRWoAGtWTWWR2oSPSLwnp8BFTkoC2RMyhFwedYUhepNHUVg2WyGNVaNjjBxEwcA81C8EatK",
  "key22": "3dC1rkSguq8tetZK7BFTdeKLH9iZdJRMdc8C8MYAxtLVyWL92L8rG53W1Cnz1mFLqooXrKStmqXGM3udLSTCpcHE",
  "key23": "5DMwxrCteEvkUyH58ZdvLoPz1Kca8x9gRQWEicJmy5SdKnxKzu25JehPAcqwcEjyZtSS8EntCafGiYzSDZPVxLFR",
  "key24": "5NKVLyEguLUVbbCVh3SQGBmoJfTLuShHJsSMsC92miUjRzfGBYwHFKbtqoYJZcS9aTQckX11DTJSUK5A8s45Mvaz",
  "key25": "28szrRGbLnrd8RSpGqrNFJ3JgFqodZLBVyhDjvfu3d3d5dnYBXJ13DtNWcukHW1TRUgrMdqaJtCfXbFFdUKcABGj",
  "key26": "fEhakAVRDwZPyyhXAaz2NejkkatqcFRxPTFtQivKUemv92SHR8WFna2kSeS8gRG8PegHgAJLVbYHgfP5JFsnwQa",
  "key27": "5EXY38zP6uCwosWaC16vcQ7e5viWFnMK6TXVommazcEyj6gBX5msdpXetbEhnUiwiwPmFXNPt9HCugQbEMDbpZ5L",
  "key28": "2qZNBZNthZY6L8j9q5v6Ba5MXcfwXCPG7Gn7wK1DAaEiuMMuDW1o5UPZ7xX9uop1szmJ9AnZdqej3VZTuRVVZDXd",
  "key29": "62q7BNWedupkQQ7NxUT4TzfiecfcLzhDwvayUxBugTTikqnFZwgiwyy3M7dVznrHaUD4JHLD947ji7PhB5j9qs1o",
  "key30": "24dDGa1MwNWJRuMyQ5j8bf3g8jdS5ofni6S4iPfJyVtUaQPGW7oc9XwQpMV5eyteBX2UxYBMesaF5K3NVBtBZciK",
  "key31": "5e94eigxHhEMcpzNgJm5PaFkra3JZPNaGYaKxoiLcAck6vv8hq6UNiWqFmskJgkLF4s4fhZMoyrDivLiMKKiYoKa",
  "key32": "NPt6mUU5qeqxGo74pKQNcDe2wqmbBAQkbHQ75Lk8No21tuVMZw8XhoZ7nVDWQ44YoM2vcNyW4T1BB6sxqkAVWYP",
  "key33": "XyzifqoJCJfkGvU1C3ND4F7fPFcbBy74inGsG9PMS8xaKiSiPPWsLcm5AJSUpj5TJLdhH8piomXpfg4BT13vyTw",
  "key34": "2EskuMaiepe2SiavLTpzKtWhXYe2UuXKRX3XLCHxLXd9t6v33cRhsC1Qq933UjhGJeTtG2DuaCUCpkyCd1fE19CW",
  "key35": "2CvgfP3NySJZYVZ22BqvMDCpUPPRcxxmrEBTwpazuA5f86VYyhwgFDbxCWA8Wm4yWt4oo1YazhQTPEpYh6zCaXLu",
  "key36": "3aa3RvFNwqFWKoVBjSxhzHsJtT4KEPXAZXAqMD7oNU8PCNWop1tWGkQD6Dm8DTrsqiQ7HqnD2y4CpWHHRwE93ys6"
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
