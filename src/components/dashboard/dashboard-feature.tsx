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
    "8h9gup7p3xLHZH67KppejvwAa8L4bpR2rnbhYSAvox4vkdb4pC6f3w3v5AQAYchMKQ3hKx4P8ZstnSx34PrVB9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2szDEsB491LPabTi5z9c7GkHj6f94b9zxkJxzdMrzTFfXRryu4sqV796yVCjtXWgXtBYitz7Kh7V7E6mNz99sixA",
  "key1": "2ecPWQYWCiuxxJJS1cPBFybnak3k5S5XmswoLcZjiZ1BJzxDG748euUvoEgiYEe2vJneXrmZUHpCBhPnuWeTRhSW",
  "key2": "52CaxNgS1DDK4etTnYb92rN1fkiBvqnmu4hkBTHforTYxsH3MSJXTLgaFfywdH81vZ1SSLFeji26nhTeSxWBVbKQ",
  "key3": "QUt2TfcdFCcyYmH2fxgiFWrW1vJMNxWmKe9GxGM2eR2LdTJKioyk8DnS4zL8xNJZCeWcD7AUoYTY9tpkRTiKFZo",
  "key4": "Nzvn9VSPwuuuq8btYMGUYAENcUfwjUp7CR3bYMMpBD8d8jL8MCESshAk3KvCEvpMFGjGeuUNYZQQHmrLTdnrZ2j",
  "key5": "5S1dbPYuaSyvAvfrAguVdJ2wGnRG1vdMrNNSPMAd8ouzm9yoqyNi4kKcdchfZNDTV5bqg7ieEpYS7DmwsYLJvJnq",
  "key6": "3SfEiLHgaxEijSUpwt8UU94PtSaWpoLbP6XZzrJyamoSC6uYYd7a6wc92tpt5tEDeLmGMpvG9ku3iS8YaWbyP7jZ",
  "key7": "53MurgkeLVug8Ym5XSvs2xocEQSJNUSS3zvEqpnuEcJzQUPqFrT8YUTMrjFQiMrTLcJSqPTSCSnVmvBZxMpT29zZ",
  "key8": "2wS3L9wdSesYHiMvHfRTK24pB2XWvCcdQ3WLMK3iwmXAs4EiaAQhTAK2TzKZVoXL3oU8sfWDfN6nEBNX7QHhA4HT",
  "key9": "3CQ7gWrreBJWGZ9A54yhzJvHnmkbVi5RpkbrYdgqFrkbU8zyEHKBSdKHhm1SsNAwRHZokrK6WaNZVHB2s2XUWpeU",
  "key10": "2irMHoKCBMENXmbpthxy4HP7jxLABpje54172GSzgjZGTC7AWm2Cv4RFCJskZ7iNkuRV51rjuVXbo7aLas2cw7Hz",
  "key11": "3j1fiyP8Xt3RRZdYudgDVCdkLsgsrPfXBLGPMQ5E6AkFEs1hFhJAtGoVtvtBtZrdhYA69xh9UGUppTjNEAwyXWep",
  "key12": "ymfUJMwfbcYqnjuPX9s2he3vhm4QhCnBTGVVQZAt1r9usTHYTtbrasoenHY6QY9kcjZG5HzBYExqUzgdtSwSYrd",
  "key13": "3BKfUjQTqKtkMBVC6oEXWaYrEi9jvQ6Z4AgAqgp2frWfrXzC1iHDvgKAkaZTNFxSjDy53gSq2T8pN1LDhexJ9K91",
  "key14": "5bC26dcmw5AaBoL5KmtvS2SARJGMz6g4FdyGQ3UY2SmnEj2LpcQc3UsRDXWFFFANjA1DcGigW4KGbJ611tNaqdt7",
  "key15": "4P2xo3QMhwp3zPuNE1gwZM8NhaCpRuq9tzxGdSpSb5Z867NaNECpvqQkV1Lf576FUJyTxJjgHhPfxamAsNj7z1SP",
  "key16": "Ttwk8zHwxH2Y8g9Mwjopk7wKXxWENkxF8DedRD4CZMxdxggMnpb8nmdiura79ppLCTuXxUt6bQqYb41ShNWGffq",
  "key17": "2PYeJH581WTBe6PFv91tYo2yQ9L59vkQZSwQJaCtYxzgVFLvJVvjokKWwYKJ8HSR5e2FGvgniE8BBVo6LfDUohVZ",
  "key18": "7j7jRQe6pLJcx36N1kGiEN7h1F6Jfyz5EapEq4MzJtsaYM9fwvjaseaqUzWHAsrYkxHE9qesCQVj1iMJkvevprL",
  "key19": "KFwuhZQfyxN5rzxjYWURJFeNXL5KhErkkaWXGpCr1BF9AyN9jLwmJ74KMAMQdK6Bawwf7tx2AwiHHBRnT47f2YA",
  "key20": "3LoLTZ4tndy5USBsUvgKqHTB61ynbz3ntksGcngEt5JMCCzGEStGPWcrbQKMtxWMvQ6VTXzX9rhx8AHf1s4m91B4",
  "key21": "2pfvazXJ7haUrR2D3sumGQ3teZ9DuELfuhsYj45XaKyNcTR74Xq6KCgNfCPWhTpkoj6D43pnkDa1q2hkWhLhsDrc",
  "key22": "2LrkTuBFiH5SPMMLzerHJuC2Ri9dM6tJ4snmDHaHPJJ2nKTarfvHWDUNf84jUUCepXnai7ymX3VSGMCQXuamgGSY",
  "key23": "4HmCzkmC3SqedyWXQaJ9D1cwDAAfCHZJrTzb5ULbtV5cwdcACDyEgSKkXATUhd3DDB8d7BgjzNWySY87cL4W25FE",
  "key24": "37j6HTU33NWJq9ALqd2FayLYQFx9YRmWBeZhd1pLn7bMQFz1oqazRMBkS8LRtPhw81sQ3LuDYPnnn9pnzPr5RW5p",
  "key25": "57uvNjsnDV7UmHtqPr5Smu1RNMmVYE1bC2cfnPZG95DP637Xsixp2DwDAnGtXdFho1bNorXpFqeWpNPYVZCDZoeR",
  "key26": "9anZnD8ui4kMyptbMzMaDhwUN1n9RB4nC42GwdMRAUBxVb4dFoVU9AXcHZppYGF24BhYTz8pBEka5PZswLp5Bfe",
  "key27": "2KswXwoDuvEy6VmpP1dL5diY6wkeG15G1YW5F5iCcePjbxwhDcgecyWNRsX3rWPdaJz7XHrUwqSeLPxZDgawXFMA"
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
