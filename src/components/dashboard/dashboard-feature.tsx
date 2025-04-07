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
    "3hp18GC5F9VfJUb7jhd6qpP8MnStX2cMRmZD4UVjNDUwRpjRLmsbUwaYJb9GGevjFkFEeR1MGgVJjR2YAMfnLE2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YmoahSbGyxcBLgDf2XL3nPBDVLLNX1UmgZTCo6XfKFNjVih5V4qz9zVUjy86T27Csu5VETUApAkT1Dj9e2GPSiY",
  "key1": "PPbaHQSjVnPo3TnfKzAEZ9uKxeVuabfTcWAZjAmWukBXvd34AqA4FJN5vZWXnw235d9KP496Tjy5PDGV6ZvqREa",
  "key2": "3rKwch9sXpAyWa2DSMzxMydWF72Q8Dn9cDTdPyrxrs49PBR2QNBFyek35eQMPJqmseJfNbjjug8BHXFuxVccbRsN",
  "key3": "2gHkMGF3kBrdkigvyrUXZvh9YYjfvSHiKZ3oJMJqYLvLHYgzT5TV7156vcCPWW3FAfXQ6Vx1Smv8CEbwhQqkc149",
  "key4": "3jxn5CsqNmvHp3xfUUgKKk48ocDrdS5kgHAqrRgsbpCnwikLXEgR2b4zk1hrHqkZ9SeXNRi6WaRonnDd54goVT5J",
  "key5": "36FNV7zQ65WgmsbFiG7mjoLHFkHgo8kDgFDgV8XNgVduPMJ6Sjp38zBsfhYVx5Mn6jzuBUs1aVeNLtMtQ9H3ACPN",
  "key6": "3yyDRWMBVLFV8qcT9mjEbNKDB1V3o2fpUgNxVttZwY8aCBdiSoFSSUF1Htz6Wox6Vd5Pcqc9Xv8MBNznMEKjFtyB",
  "key7": "5fEQRURHvE7df1PoDWkPwdJFJSXxKH8yXEJbKZQWiPuj17MA1XLVgETYWkiDBsTE3dQfZjeikUBjS9KkUaviePW7",
  "key8": "2QrreNDVmyC75xydaS9QxwomaydrwP2qW2CscXLHabfb74AoYftBmLYJRyUyVEjTjkKDzugcmiAfrZNU24taeYWc",
  "key9": "fq3iVCHu3vGcCUcZrwCv6KsUGFtJhW7VCnHSVqQM21zF1kVdT63yDhQExq4r22ZxMiXRwhYwjK4PV5sVWHHduox",
  "key10": "3YkdkDfk8p3WkuvHYwfg3J2c1zVi3hP9pqaQtRBELjE2kaQ8pgVJFhidbJEhZjMixDNzCD3JKVe6VtQgpdo13BJH",
  "key11": "5SMFELe11MeRGPvENaVoiVZvHAbBBDXDu1Hf4UzRCGfNVuVbtyVM1tXsweGRkUhvBRNsBYKQmyamZPhLuVxaNH3h",
  "key12": "2sutPQW27zD6jtH8LTWZZY8zQhtb18WZPcyaKHFNhdGB2SoEqzQM7qbfbZCWPTihbqQbt7dyjkVTNn2YSXayNPxy",
  "key13": "4uQMCram6nHLfR1wmYHAtWV8fnUSxBz3GZKmeJdepNae9eTiXEmHYwxjfgNkeFubxa7UfozoM4jzGKc1CC9hkmPY",
  "key14": "b3Rvvho3BvZe5WyGL9revTuxUw8PafdQLC9hmijRqN5PU1ozny1YVxBzcAygHPq2TjUWSZM5if1NW3qzt2P2t11",
  "key15": "45AeEj5UdBWKYvLn28RLwFzKX7TTkbvvbhgevDYU4N9CAtXVgb7jbq8rU1QH3FapwsUkDSYJqq4VhRiAF5faZUP2",
  "key16": "5UhBZCvaw8xTEeUWasmwciJrhux5NHBtRbFey1N42BDt7iPHyGnJh35BHtJEqsgtJE6znpeN2M7XLGURS8wRCvXU",
  "key17": "jdCf6F73U4hxdJiFKENKAtQt99V43bnsS1P85MD1rYWpPucKZMEbBve6tATtiFjne2gkMsY6pAfXP5sW82xM2kU",
  "key18": "4zvPqoYFcMEdMCHEQUJJAYiRppk7KHMQttDPAFHFxVahHFHbxKJtF8yNq2PmoRiUnmQ37tvforkDbWKvagkMLj13",
  "key19": "21JK2NogEpVp6Sr9Ysi1EhDh1r2HwHJNiVPJAuRjDwWUpz98NYLV3PGh7WihptqsGv1Xv79djbVfZW1SvBdYNdFq",
  "key20": "VoGiBy7DDSfkzxrPYPR2bfZVs1XoLPQhjpSVzwcxkwf6Pkz1iVVWg4GTXCQteZbAoeMokw8MWtHvwELYzHtWREc",
  "key21": "5ZxY5qNj51ULGFVCDiL5AWccgSpdLPfP8PCYAj5tZbtZmHZ5ChQj456Xo2fk6QqYAqjmg29hboRnoXmdFGfTZyYS",
  "key22": "3YE22YtJJ2d5QkoiSBhnWFvnnbzArxv2mZFrSiaLKRZ4T3tGSmHR1JXNwV2kbuwLBwkikPJSeuxUhRGW6P68qWp",
  "key23": "64HdgP8Gh2TTpzdZdPmP2mtPWQrHSX73xCagwH5VpeunNjWuWh232hQqbkfZp2WigWqZXYA8om91YnMUaKQfZbsV",
  "key24": "5DTHbw2QLiGXsqrKt42qHqJoBuVwbpLXhT6sCfU2KrHmw5cRVnVymNDk6vsTzr7WboY4tnTssez6LTAGWAeepQ98",
  "key25": "5v9tqbjytxKmQtptVTZ5yhf7YpYK5nWi1jfTt4s7MMPahDmh8BC7uqkhurPVNm9TLoBu8UyHW3gnshkquRxw4b2q",
  "key26": "5b2L5mHiRVs32FsMGraWHkfN5LqPKHPt68LUQ27JGtLStLHPcDe4tSWBbgKfDdVUaWJZTKuoisaB1zJTXEDCiYjJ",
  "key27": "4sd1hqdY5nue95jZWJsnCMqESpyeFpfnoCPDrEjUMxVzVjg8XqtHTS8afiNK3yQD1cWoQxy4J4KTZgM3F1X5aBEZ"
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
