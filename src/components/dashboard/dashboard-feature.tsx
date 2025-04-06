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
    "5RjSJS1y55ukqwGw4hrSjjrMd5Cvrjkv6SAmGPqJLVrEqsibu5tj9hS4f2ATfjQcYa8wJWHMWHx1rafASJUJB3q7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46cnpyEAKp5N9m18JLBPsMKE8fVjc1AetywEkbtDmkjFBt4xWZXzycf9joGgjwWZ9ThXEPvHmTdrgCHDYidRFyGo",
  "key1": "53GH43gZLaL4jGWyo75dgGN1VMQ1haQiKH19sSNQfWWno24mqbXV4wEBHbtPAhQw9E9cLhWwmnRq62QvXbn2aF2S",
  "key2": "5X6wWLVXG26omwVQjqv11XLMxKjjKjwu64tpdPK8LozL5fkx7b1q9cRHshamy5yM7zRLZGYSFuJpsYsUFjnB3XUW",
  "key3": "5yYubiuF5Xz77jdFmUBBdecbUsw79AcrD6nLAR9JGXBWZws4UaJji1aTQDFRDC22zC6won3hn8YRktZV3VTELSix",
  "key4": "4riVgjdf8JnjZnjs7a8TkPr38hL3k5rhvFwZpDLrnNnYKNGVo5UWmg8fMLZx8CoSmnB3Eh23bnHHpLrhH9aVuyxu",
  "key5": "Df8QdR4TTWvGo5tegaQ5xwUytEkkQkEqKYmeADTrZpsT3YxhfbwZXwGSYs496t8KEHgj4bSq9heQn34RrLBUxM7",
  "key6": "5AYxyjGeS33TvFoSAuWgP6Vynxe7oZGnG11tcdTwmLZP1LUSmgrqKGwmVVezjrbki9CiVB8GtMHLWgKoZnYjjDnM",
  "key7": "rBycL8F1PD1TFeZt4C3Q3eX3zzyDdwXWJEg4Jih3QHnzqTMNjxSrggvvEm8Jq1LyRfJjz5wR1m6LSkS3pnr1V5K",
  "key8": "3A1dW9NF79eMfgAoKXipWy5sicNe8WkjvuqFQrcZY6kysGY2z1ii5J5bNffaRipsauRUQqXBEcbk8W7wWMqDX7As",
  "key9": "37Nn2JdY8JsBxQWsDCTkuuGpkqCYFA2wiJr86mqWAVSuLuMPrCAQUPYFGWKdbwqrub7bQTDprDk9yBtZky2T2hFR",
  "key10": "4iqa1NisqVnnZS6e7HTHnKVYbZqSrrLPiKdPwaumoA7QPdU4hDiUThoePwXQAjUpUGjiHMjjdZmxYniMnrmjQsmM",
  "key11": "37RZ95TGGGWUe4wyYr51GGx6MWg5vPcWYmFenWB9j1T4ewby82sNFXdpB6zsdvGw2MJRrDgJdtiUYxdXscMRLo5y",
  "key12": "43NxRagmFstLwBsu2e7epmX8spZDTYsynyyE1WXbueNFSnuoe1XcQZMKMLkDubWQ7YAVQEs7TSoZAsxt8JoqC2oD",
  "key13": "4WM3NTTQqAjZiYKCJeRDtLraYQBgPtkbhppM8Nm9YtGZqLRCSUAExbZfzowy2xJ3x46y5P1NNZN3soKHgcgfdjwx",
  "key14": "AWbNEPgcwCrR1MydKsNrky8LmmuzFxjFiDtBEUB6RPL53moLunEBSNo173efStRQ1Mx3pX4n6E2K6S3hFtyZCv5",
  "key15": "4ztchhkhZGXQCoWJ99vo1nCBEfL5Ukeoe6NvaiKCbGtRX4eiCWZLhApRyk2hwZ4WpzXUGTi5Re4TEEcWjPB9dvT5",
  "key16": "2cUe9f5stc1bbiuZX26zBm7UtAeZbrHHgsTCmbYvJ6bsmbL53mneruPoXrFwiYQHxvE8j2m68z1Yw9GQaLBoFyce",
  "key17": "iFLtnvwtjdLyuMTrtsvUMBYwHQ55yrb3vF6aanRniuPrCF7oQ72jhXWUegah3tTMmeSPsstUenCxYoxFTcU294n",
  "key18": "VJbgaytWwH4Q7qTXiMoz7oeHLMKzR4LY4DLBPTpxyQgtwcTha8LQurTCokZ6vYWWSCDoTnPPXuHVsdSztjp6F8o",
  "key19": "L7Pd3APFZEKTnkZbbg6Fot7GwtCM1MqnPSGEcwsGr8BJ3HGFVKYecHaBEbjsB4niTS1qnbH4CMR2JBr1Ct3uPyi",
  "key20": "4PuhdPJgRmBDv7Md9uDqfB2ZM1SiWNgee6tiYMGY4ifxCV1UFQq46FpQFNSq7gqaFHUg29qNC4L2jPZh7UKm7iPc",
  "key21": "rNTfRCcMJfJATDFZe5ze3oh2PqkFMTiUMRaZYhzJLJm9KiNJzNQ8NumS6tqdSaWgc5itc9W6GUwfouY75gQk8nv",
  "key22": "httw7SWB8eqHTMDDG32xvZGcKm18JteacoTbpqBRqRGEWkkZ3QTAXfWRinBNsTjVXZhrpGCcWKAycnLL2QFgPup",
  "key23": "uf8vpnFPdnXL7fsfoxSdDYMyzKAizvuj93bs7U7W1xALrZPQm1EyHUAPTxN9XxcJSMQbzGiqW6ZtattDhRc95F8",
  "key24": "3qxCU3XAcsm2QxT4HF413Vt5gY3KamYzc253Jr2mm5joSrPeCbW2ZtddWT7Dxk8QejZi558Vva7GnGiPkHGbzgZL",
  "key25": "5aZkWGgvfHR5nxxx1SBPPwxznrRKxdX47Dh8gBTZRPxmezycbX6S31qXFKRkzE67fNJ9zhD35sTPKKYTn8KnQUmF"
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
