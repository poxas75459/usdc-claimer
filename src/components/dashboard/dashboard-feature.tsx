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
    "31N4eJbcU7S1wxqNetudkFmckXLph6n6FmTGZgzH3zjxuEBTUekBKuN4n4wXCL2or6qT3E6xSHUZXWjqHCgKrCHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UkyFVnDxigLUe8XhemQqepntZMocuDFv1dboAFFG2mC29yMbdvH5eiPpoGtnykvY3Zj4RuXe1eRcqFXQpw7LTnL",
  "key1": "3BLb1VTNWbsTiQMELTqmmkAH6zQF4i6MVzYC6qNF2xBma9BqJPv8WUnSYSmrePo2FjyoeawXF2TnVyKHF5npxoLG",
  "key2": "5HgNsyCuhxmamewWtyNJy2YDBQ6icnX2wkUgx2fLFUHDurovqEVqcgTVNHtKHmtcLGq8ZjkCSmn4PKQ7nMXNvyYG",
  "key3": "3EFkx2X2upZCJBr4PNtyEvQx6dn5fa2QwPpCA8zbzFNquL2K4cvbgyB5giBVpXHdYR7XARm8K1bwfgH5J2aoQazD",
  "key4": "3scKKxTmFWSvCLX9jqLApriPUTqaMZUY3UKrWJ6fFVicC35x1GiG2yugLpLCnMg4zB6EXMhoeshnUoFen9XSioLS",
  "key5": "5t7KRYE1jvAP5bGGKJXiF2X72GVJ3bvfTnZ8iwQ8cBsw88jCxTey7AuoVCvzsvhRuX7JRPJR4pYwDAsoNL79SF8p",
  "key6": "5z5j4gEZhC76oYr1h1BTCB4CV74BFrpAYd9a3k84tNPk8Cz1jjR2absF56paJHdHPMDCp2TrKq1F7wDEPBBM99xT",
  "key7": "3a6t2NgnCbsY1TfgfLhUtefwWdGkxRu1ZXrw1kUympJe9jjSHckGznVcpJwcf9kJeSb5jrQW2VecxZcA1HQ7Qzhp",
  "key8": "4Z7EVcQztSxm2xhCVhw5bv4zARNYeBRAFkt5pymTKy2pUMf7YCtxQuA96GMPRFsMBxVL3JqWpuWUx9CKLxTtXhUo",
  "key9": "23T2bg2uD14xD1amyyybSyopqUAAPM3aYNmrLxK7kspo2Qd7hepLJ8CyZjsmBoEdnDRnG1t5qXmqDBrNHfs42XwC",
  "key10": "3Y8idR5P9XLVRr5wFrisfQS7W2n9Do7TJRTSyYdirzWYoQn2mKaRrKsZbnKUmzaouYD3X2yXa91eUkEh4uof5T3i",
  "key11": "2oei2PkJWzQLk367btx9NFarxfxkP2SWNFZgqYUVKyNzS3rhPH3pbUJVYtZHVWpBGmVptFVB2hQ8i3Q9jXF11an",
  "key12": "3k6DebZ45LpFAUwX5veEH7yYoQx7SZKomATosqj5gGdAe6ucVAvrL3ZYY4RXerxEGEyWeeKAzMZrXUm4Shttsfz7",
  "key13": "5ngKHyKaUJ1Vg6MBu61J2n9wH6CLZrqBp25fh8XqHPiuKfdQQkxLauLHnePpYC5TjkojXjfHTDjXeqN6XpezGasq",
  "key14": "3g9rYedY6t1kJops7e9V6NHq83BmXUMjsaJVKXS5yRm6v823453VdwbPhEZogrb1QTHSDB1w7Stf6cQbU7tjPo4f",
  "key15": "5gLU2kYoYpf4Z6wourCqdHyV4SGsKxVvT5FHZPh8cKC7DS6qdkRfx58TdDH8znrKRvTvExMbXN4JanYdnDGprnA8",
  "key16": "G7MKG87NLmob9VPkQQ2pJjU7rGD6LDndZorXiuP6h3MAnp6rtYHBm4p3aDSNDkRXZFaRATX4ybvdMTTre3fxsUo",
  "key17": "CTzyGRDUWSAJjq4yoPi9Z975G6tFpoSMdVNAbR5RkMfXWbYYs4gDnrBgJHCqsygy7JddGcx7LR2UXzc5AC8cGW6",
  "key18": "3sZudEsvJJfVWDth34LDiwuXADoM7Ncpe55qnUHdb4DYq4tRVZj7ud4ZWhJBPyvkLJ4HBUqRojk1nkggzNhvRRaA",
  "key19": "2nZX8vjn176ojJXZEe92wmdCRmxAx1yv5bBM1x5SoDAaFQKBW6yx7kzNvUEfRwbZwzuqGt1AQBkdKT8YkkVBHAEf",
  "key20": "2waSMT6bCfJXf9AmN5hjMzdGCxXEhFcKWpHntF2TAF41hzrC9H4m68K7X9ohMxECjiJPf2qfU7SbVGcb1mXKyJwS",
  "key21": "4NedJhhsniQRkxwRmVkjUvMT9tFJ8j1g1d6y3Grdu5Pq36vgMTu9GUotygHHVRoi9Jfnf1MiL2iSbvERaduT9hN3",
  "key22": "5LJRHwtcPJ2ndhZZErrm8yYe2PVK4yjxoTWTwDutMhyhi82GEPN6tixwyEqhFZgsjk8FRbuQGKQrd28KBS7CaJMs",
  "key23": "36WPAbodpDnNeHJHvdWPhfwwUAewWukYepN9jiEWmwjSBmRPmGGzfBbB1vPMMVVrH8j7cyPj6BwbQ46HuVZQY6uT",
  "key24": "3gFQWb2fFfY6XJRgjtBnkeg2jzaoY6ysEQYbsqtXCuv8eZ7c7mcPkEzSWJHjjgN8vJrYN644tawpTtQZCtS8fSHb",
  "key25": "4kiMCdpeqrnzvXr5jGWdZR6JkoHpumdt1vRor6M5FsvySW8aNgJ1Pd3QUuxYxZvnnXY4xrEMCC4ZuHP8bi2yTCFQ",
  "key26": "4pYQC4dCRdyeguWJoY7K3H4KS53wGqkh1H7exFz5yhHeS2UR8GCiFbgXmiLAvJhaDkV6DGQ5848SzKRrtWyWVqdu",
  "key27": "45xSH7ELwyDXCp2aE69iY6twdPptufUwfcphfusYFjprqde5LVzB5EVf75w2dKgaFFzRqum2PKfyAm3R8PsUZb9c",
  "key28": "2kqQajKPVMAR55tdi7PhMNJc1Pruc1C3VTqLDUpFX4PtiAk4axbhtJaUSPNGTdptvYyr2MqR9trn2zUZSuyDohMP"
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
