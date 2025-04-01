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
    "2NgRxo9p7MzFRRcGFLmm2DxVn9dmawVvYXGZDbPj1Pv149Pb6YQxM9WvvCAp1cHtBT3euKmSZ3xdHYZkkusy685W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42bidL4eedJroeDe1SBDr8eiyo2aZmhfQAGwsoDXppCNnEzpRfBmNKf93jyswj8kSQKe2zhk4ByYWv4R1uFtebZL",
  "key1": "3v3eatsaFcY4cHapGy4W7av17hDLdGqQEvRGpSrMU1PXuYJuhkMXqUV1cPtZpuyHM9Fayt2bKWdth6hd5imnKPQP",
  "key2": "3Qbxh9E9GyocvhRUsN19hGHiZ1Z8KVA57rBTRCjpqBhai4ShCNGGj9YjnzqypYS6dCAunBqAzPqRtSrEvPGkFSu8",
  "key3": "o7P3pexFBadGJU21KN1AKUHjqnq6CHviYRHi2PA8PscmXj3cmr2jgz282ucd9gHkoC72SYAsqYkVRUcUjXk32mo",
  "key4": "2Kqk6LzkdVvysi4gwLXtUKetLEv2C2tYKbjCzB5TNfNNpjGKim5Gr8hnNZhTCDXZTeM82rKaajrB285wxJpBvHZB",
  "key5": "64AYi8AnuWffaenfakbgT2QbYHtCaHWzmwFgPyJfQRteYh4CRD4G2GWh1SgUfcLEaAMdjgSsFLsnEAnqzVba17Rk",
  "key6": "2fkAtFuPyrnx12SeGNWqPEJJsxfXzfS2S6hESP7LEsgB72ok2ZMhFJiMakRTFP5X6qXUadE1DoFnyxDa5FUsQjek",
  "key7": "ox53we3cAFmwzJueDnvQkQZoNtn6ubQ7Ww5FpX675aLmqzD2CFAVrayxnQ7Kex1y4BcTLJuZHMRWPmcf4Ece7dA",
  "key8": "5YhFVh1cx91Nk9JYwmfNbZwE35ydwpk1NSowtTD23MFvu5cFUEtnEAdws7DkxNFDktrQjFDfLFAhDPz2pyLJzLPx",
  "key9": "3DZqMDg8xFZ8H4XnfB6TWrrvr2Qfqc9onFQuxQYf4EjMLZ8tvkjxB3g5BnBwP6nMHZypUwXKCDxvTXyFGr2LyMJ9",
  "key10": "34Z9BT85RCJHXCNsnmi1nPdTMAG2e3i2FEUefjzCbKUVruaspbtfLE5vUmBj6wiKBFW32VUetND7EqjN2Ft9LpV2",
  "key11": "5zDA2fwUHCSVTHtcwMKaUs7wUrDTxtxh1EHRxitmNkVAMAiRa6BmzvuV9Aqr1FzQqNwwC9qoERPNcP6k8hp6zhka",
  "key12": "4PHyaVyGVK9A612qMQLnmYawgeEqUFu559gGAiMz6PZddzdzB7a8J2c8QLKVZKeBB6sBEPep1p37HzrqQ6XX94M7",
  "key13": "234BjSqFhJh2HGbB4KtnmnFHmd7qsEiLKjt59L7bJGKpzj2zW3wFWPYqZNjJYDj6xq8nDcceqAy43isYpmiJUxxE",
  "key14": "5mPuycafdzAcDAeWAWsKKeUov4rzD1oAYy7Jy1rPYQGxFsi7aieDmxahpEsswmmKYvzLE2G2dZC5ZgnHmHFo54cv",
  "key15": "3oYH3WSXiHMZQr2oKmbaGs8X1HoFu5vHuNXx8nAxEoy3RBX1cRxZ1foc8GVp5EUFpM18z1DSNGfAnq6xxqd7mwDe",
  "key16": "5DrgHByCGcVhBftHwgwxnb54BYk85HgfH5Cau2AiLYecDE6tq7Skm1E5TQ6XHheEvFrLFtj3dHPLJqp8fNMHWMoL",
  "key17": "3JVcdYaHywGsKBUAxDryE4aj5CSnuTWEy69GGer5Go7QJBWYB2aFTe9UPa9cmYLNLnmr9TTeMFXTvm88x7mxHe8z",
  "key18": "33Dts4R7US9QFRhn1yxLet22K66axuvEcZFEC37meVwcJY2quMxbeb8xops1JfjsqpJZ2J98Jba1HU6uPzZpMLct",
  "key19": "3PZbr8jrDZvHY5B8wkjrzej75S9ZGrAq7iKpmUjjB4oMgvzy7HHqDxsFxZUZEss1T9ivd8L3TuT9se1AcuBkwVx2",
  "key20": "4aQwnbcsZ7JeDg1Jb5sjbLULMgESh8v3Dmh8gxEhDYybTq2urdaye2hWQcPovqSqCA5RNYZKLSE7u68a9hgncwTc",
  "key21": "3TyYxuwaJq56T8xeY2LysCQXD4nFvN2ze5Hopz9DDbDcGoxubnTSmU5YWC416DuTbf2YvUkoMQbfxo7HmZckK6Xj",
  "key22": "5VMRLdUer3qqgTZRqphHHqWxpQPZEZdnsC3cgEvZTHrsH9Nva5EYGZCThfHauHN6oCfgmDdBFudVkpQp52CLSqTK",
  "key23": "FiAZyjuKWERTxGfFkQ3oQusYrk7wB41ZvoiQYuJfXAP1PQhqzjtE7fEuaw5Wxw5A73kQKLdrzrZHS3MZgeqCuJA",
  "key24": "5hjpZ7o1yB6TXfEwtQTaQkLsZxm1xNF9k2rfMpAD7jSmGPiaiMweEb8wi7ddxtnAvcWWx5d35p4NvV6xjNPE1Nv9",
  "key25": "uQeTkhREYD2i3tjU4bd5KTn9Tb2gZ8t9e3nCeJopmRr4yGZ4b3HXKB6XSUaxoBij9K37CSEV1PUiwCYVMLwfSZn",
  "key26": "2pPbLyMuQJ68r8NEupMMLC2UPeQDFrESSFQmCnRSHxYoKNxPiDruiQkepuDqUQoUErxCipWdrSkUA7Efy742ae7e"
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
