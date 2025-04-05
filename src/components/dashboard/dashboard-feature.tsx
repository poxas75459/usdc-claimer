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
    "2eqgwsCfZRXDt4FMBi87aq4wU5ge1B3Nu7iK8XXpXyQ9xf6zzRrnRsKhhXEmyZz7T53ietb3SPYVvg8Yuk6sS49j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59xT9t6rBdPyNph3R2Wo6E4qvC2uroM1MXAohwxAwts5CfBf8ec7qnfn2Ziwb5QSnymEUJ7ounJKi1VoGQ6fkELK",
  "key1": "JQYBcoSx5GbAjEqiD2uuZC8ivqC9nYUNjQgi5C28msysz9WauqXcUY8DChRy4TAF1iMv32MHXz7EZJJrwJNX4EA",
  "key2": "3jXnH999no2YaahQpNBy1vjqtZZ3ebmUx9RhiW5pX4r5C3qmrS9pZNYy5sJd1irPy5mpyTDBQoDm6FLyoX1nwiHj",
  "key3": "5MwNq7fqhiKf3xH5dM2FtJWYQbZLjqL2DnGodK7vNqPooXPxRUQ8qCpLBskrDjV8iwvcd3fAQ4KVtW864BJ65mHY",
  "key4": "yqekWusiX78Dae4ztcXYUr4rRRLCK7uUVX9WN41SJaFRJzFTJfXj3ByoYYL1gSQh42ddsentCfdAwvefNkbDo6s",
  "key5": "4hpi2tHguPv5pMioHxqvDairoJhvCotFkJaU5MCP97G8mNcS2KsNmH2m8ouWnj1qFL4wiVa62VZyZCXmaE4RwbZm",
  "key6": "37UzfcyrECCi1yyo48GTfYu2Msc1jpEfKVn4w6HiAUjc2DExm7sWcq1mAvnx4D4h5uKXNDhvyEE13WFC5cX27361",
  "key7": "5EENYFztnxJ3J3k5noSkn5r6YxNF9cxN3x5nf9iPQnhgYZdzTR3BLdS4d9H2XHdFv33gKosLrqaUKNyzLL9LD29S",
  "key8": "2mT7otvwNv71YXvyALnNVV76c9qpAw27rDiLN7P1FtEbdCz26vfZ6SnuRhoVtad1y1aU331DDT2yEMzqVcqm58iF",
  "key9": "3DoqhzREyyJtqRa7harttZPdc7JThNBCsurp7pdEVFkqN2G9EyKH6Dt2VSwMBCmqxVgk2yhd96B95pY5tkgARdAC",
  "key10": "NPdCYmYwjCzSiQxWn1EonLiMMikGkeyaxYGBCzHnJxNLK2AfHpxG14HweW8iVV1CYnkk9KdEBiGbR5x7DxAwfRm",
  "key11": "59n7Nzs2oUsUw37RtqjkcW3g6UHeej87mhtcryW9uXcNok7AGrtQ5nzBFDWEKxKSBwEqNStpnwbEcPB8zz9NLn4B",
  "key12": "2WiArFiy2qsFVgiVuPyT6MvsZ2Q24gaCxVWFexQyxyx14nska2zJo3nibmmudNgxhJ1BehRTVHPEzErivz2ddMKF",
  "key13": "4XDno6KsQw9gckFjRweUm6KwHBB4pranvcA8U9mBjoWdL5SdkSx9385QZz4moxbA9TKFoEnnFxCvogaRs22uiC2P",
  "key14": "3VwaDv2GLD9qrj1cjNNcG4nszmFEMYHw2aNdPLPjTMe3XeSTiS7ADfUyqAWUiz5v67FpTyb747Pstg3kmTi5W5aZ",
  "key15": "4rSFkYxoA2YYGURy5tkp7ow4B5LLko5DnNd4u7k55LuVx8psQySAR1Anexp4nmZBr5TmxieNjSVoRiYM3K7qXmwn",
  "key16": "359UxPaygFdyar77VRFY8Woo4b4C632V3diHreMPDUQ7CGqSq7udzbo5cFHPMm33LoEHz9Kfskb3wcFSNtCruHZz",
  "key17": "4eHviV82tRoaaTcRxAfWLb3CX54Rc3nccEKJPDvc34bajurQhN5V96d8na8eh1aNZSdp9GD4xMKjS7tYtLxk1XbN",
  "key18": "3X2Rx5Qb8TJsT7zg3TehDTf3HDtt5nJJZc1JsGS2hkyqB4qqgdvsShjNtSEV1zajT2LSGfCDYNjcPMmtHPi8H13k",
  "key19": "2CPP8WQrGNZUEGJuLSPdtdkZN9yGxZXi9o1ReFB2Wcm5qhWdeqWUKnEubeDGi5EeGqmqVUQPwiDKnLHt4t8UGHP2",
  "key20": "62JPdagusQt8eqQFEDqTGCYhLLWxbvxAsG6ZhR4ScZh17j1gajtwVSfpGEzBmFjot4bUPD4oyVPxk81t8EQEtydT",
  "key21": "4HKcV6srujmDRTnFtuTSaor6SAvxVdNvhe86hereg4tTMnDbHj4MCJcz784mqDADjZWqr6WN3s5T4w6N9jk9o6cg",
  "key22": "21Ltnmm1GbApkw2QsemgTt5TZeRe2tGHTBDV61f2b5LxSb96qtjSybFT3YJDEUZW42jo2LCw5yCwQ6919mXwYdRH",
  "key23": "4dRRd1A74GcsSNFofyHxRb6798ktXyBYRZVpsuVvcKEeFswqvHioehJgT2mV6NpueadcqSZes4EAR1oAp9F1dLzt",
  "key24": "5dyceyNKoKn4YvffeUptFse9bd717GyXvpwigxVYN596RUsZ7u1ZhtVzdEQ3WCh2rJDKRiYeP7L8cyhqptU44BV",
  "key25": "5QeZsWngPLrXpjdJHxnfbjV4WBuWcjgDw9Eu8HKNovZFtw4SRrDic9na5dLm3Et1UQKi4TziwStW2SHo7f2z1fEu",
  "key26": "29e6wKY3eeCsLmwX87q7wGPPdcomytEDmDNTVBae9YgcAc7UM8dbfFAb5N9nA5nypBAu718WkttBofokkpfU6Rg9",
  "key27": "5K1CmawLoBNJwatvYajU7ntt91vB3a4rfSA7hPZqC9fBDaWXAYpNoLfoyQCBoELpz5AX9G4SgK7GR7BR7v6qjzPR"
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
