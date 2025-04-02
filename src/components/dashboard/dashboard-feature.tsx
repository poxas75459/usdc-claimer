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
    "3SiumyEexu6gtRdhYavYDbqhA2HBMnDrrG4QBG7WEU46tD8dKw23F3prGaCkwsTfsZjVsb5Nf7D28mJ2nh5JUJDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66hLheMsJGSadi39ra4ffgDq378kP5BjsSTyWhnzPXvxMRX3DuTXrhsqm9VPC6VbCh112LG17bFeGgrxKosq4fJj",
  "key1": "5T5PHbf3PtHXPGB7iN4UXq6sCQTJncN9GTJJj3mCtch7S4pcdcAEMxZ8chwrRygdbk9PTVyg5A9ns6qzQMDtuoRf",
  "key2": "4ZZr1PgPg1kpB8NVMLdsvVUVUkNufMacQsNpJat8Qtc82QV3Y5LRrQmAFUq5QSNJpLW5DTZ5kgmCZScUTrwtS8At",
  "key3": "3HN9c72UEuDwkrqQQbKkgki8T2Xv4nToSC4u5GvXSTgt3Gb5jXv7MhGHusVNsAifBiREiuNzCqq8vbUppMFoZFUX",
  "key4": "3ghaSGM7o1pjE5oRWsfv9ykMtEr2qSp8pXJbQsWrjUC2LA7vhfU9GHugnasxCRMbzq7Wkj7Qgy8dygkAe8hFqAg",
  "key5": "2KsaRFq4wMn1v4z5VmL7p8mSCQoiCFFSD36QeJKzjRYPAJpBps6df3Fdq5ZdNBZo7oLBW3fpEkFJz4wFWGaSNsp6",
  "key6": "5WXrLN4uHU7XzqkcvAdi1PQBD2KnwAYp67o9GYxN25txdnrz9Z8YdYqcF98eLr4Zs8Mpxq7c1tsJ7MuJGSgfSG4J",
  "key7": "2mqGHrs9HLQy4zz2wJDjNpfXgrhffA6xh66p83H6fkxzH4855BbXn5dTdetYvmi2wTL88cVo8XdhxouRrEcxisbL",
  "key8": "PC1BiurWfRiGg6oPhaXHnZohW2umB8BaSBuVjeQQYFFL9Jah2jwS6sLtd1MugTHkyxkoSmpZ3D5WwDSAapN1ouo",
  "key9": "phWAqes9Sq2Ebp6AEcFRaHHWQwmDYotBoxufuwmgVdJwTsr3cewU3FcYoS2ynBWCri7mM9BnJme4BDKWBcznXft",
  "key10": "5bBKsM4Uqow7eyDEkoYL8zKfA7ejNeREpP9vh1Pu2RWYD4YzKivC5bXEij4TJVitUKX6uXEUnLncbaBTGkC9ioo6",
  "key11": "CPNa9wBggEtwcFYpWGqGtPKdGc651C4NkGhq2ZcfBSaAUfuYKeY7LCe5Hiuwoh1iXqbgE6EzEL5LEUpAZbh2zpD",
  "key12": "47VEXtyWtnaUPuM2hd1HHJbo3unm4MMWZzxxbxYeKKHUJfB1azK4vhBzWYdH7M1WssFSN4SPxXf2k9s1o5BywqN1",
  "key13": "4cuUEC6gPtxeyJMSF28uxPCSPUZo8HBTGr4eidGQqaGPvvAaYmzsGJkVkiFD7wpRDz8FWpXacbdTsP2ZQYXVr8EM",
  "key14": "5ewvynz6KFemnGpbU3uHLEasfakTKa8jQPjgXSUbEo8YFHqJxGtvoKry2obyHs5ynDDX59fFqLsz1NWzpyhPq1AU",
  "key15": "352eHNX4yZG7RpQ2QnsqGotXnQQ3Xu4faDH7AsQZZxExqxHpG9LNw3n6h5pkg5ALCsNFdxyBkeDobQY3K4434bpJ",
  "key16": "2R5FRuFpeSP3jqe2eDdATBGPUUP5dBE22djfz5VktpEgppzuDvYSBNRjkwFN9CjXqgg2w6LYeNHi175oyM7wPdNn",
  "key17": "62Yno4nmbMY7e7yRRAcJJibBUdug2f3kduCgGavgbs7WL5DQs15jGXXYJG8atGyfJorqVahqNifjrDuZQ8wMXj6h",
  "key18": "3QhSaAy1a3aMU5h9NrzChGrZPxsHA9ebv48bWSpt1WwysWmP5xVtFUqjnViayu29GurHfz6P4mrXWW71BrP5fUj4",
  "key19": "3yJtvcXuYUvPsqXwP14GEdSYTVAETyTT6VgZziZBawbWx5RjCYBfQXLAADfEqyTwWHdotHpmngNjR42VGLYm4Qcx",
  "key20": "AyCzwsDUXDL1SLe2zKBCeHJaYjPN4SwmD2bWdKw7Ce4ff8m9qfmes8MSVc6afZYWK6WkJPjBpcUa3EY675sh5Yr",
  "key21": "2otzWfbhgRohwZniDg3PWWTcWthhDsX85AKXjCGYRnYG1ZaRLDrKC8e8wtP2Z3eN3GxcgmJJwRkZkA7YpKTD597P",
  "key22": "4m4vZ3bzjtVTQXAZhd41qVrGrJB7Ah7ZzY43xSRNaLzotQ4n56vQxfxgNSDHnXdaQKVEJXNB4JjQ1WmASVEAoyeA",
  "key23": "29pPchH5gosstT1xs4pYmN61BR7dKaA86SrW1B4V7NhM3Lyp7ZMge88WTSrUeGRxKfH1aQXBWDQtZkaycP8UTmun",
  "key24": "2zs8iqMDypKprRK5yKomFim1V5HEYt4eDmxqQMF6PG7Cz2cEX2jkDNRnmmRa4BfeDmP9wkDamrGtL2Dm6xmytfvT",
  "key25": "537GvzyidJUF6vYiFwJMHLAKqeBYL9c5vTazD9fC4gCqKHUoB56Fn898iq91ahDim3efmrnPDFVRrhXYMuAoosn4",
  "key26": "2hziXfmZGQQdHvMkS7vPqmmKRM8WDLAf8DutvbgLSSzR5Pq8cuRirPqZh86CEuMfVozPoLo15SDjbCEPtoZWAJ7S"
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
