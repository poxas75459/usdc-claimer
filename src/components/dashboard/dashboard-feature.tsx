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
    "5wEGDY9b59WQG7bYUzAHHgNLLspFuQgiXiV4c4jVmd8HMUurL85WgunvnrvzgR9B1kdRc1PTgD582i5QfgQPHKfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YFmW8fp5wqLFzBTJHS412tmVFqU5Vdt7UpZRVVNqSBdg4ksVvFBTXPB7wTdpAxgGypXWFJCEWs54zdNVNEgChYQ",
  "key1": "5qwPjz7x2DxyFgzTB4SJdmeMtvfCpf9wS39LtUxoJNcdgQv5BX8XRm4QDMaBCBZUBegsc7Mi7ZR6C3AKDNnzsc2B",
  "key2": "2pfMzUYVDU6Zo2Hf7V8cqHE9XgDZQFjuHU8pd3GTiLF6hnYor55xALHR5JjRbqd2KWYM2RRr1hZLtnJWvcKmamKU",
  "key3": "2EEwVH2yDqx8kup128pX9wSEp3WJnSFmg8seQVvC3epq9CvB5d6PgbGkywmsSQy3X8zAQYFWEwA8P7uCoHiwWB5X",
  "key4": "5RzrSe7qABovbXZ7qr5ezYoSVKyDTnujmaSkeH7GKDNzHMuEPUBfAjLypVUiUqqsaeH5svxMA9aD3cfnCHqqpSvf",
  "key5": "3kFR1nFFWK3wbQxSkYKvYr3vqodRxqa8gwbWKjSqvWsqjJATkmiz4748GmSGRPZBiBEMiLnCtneUCZNVJVam9HrY",
  "key6": "KnzYs1oGuGfqiJPoGnjvJJdwYBumoTvwZL6N2PgywbwVPqkzgo9UtWDqinzCQqmyxSwuuSei1pk85t26XsqGxtR",
  "key7": "4pXvEoVCTsndLHBDMBkHhHwGewHRnudUvpi3buKTXMdF1HTovTLyHg6CodMdQadLf54zNLhx8qZ7iJvFTaYwLpuU",
  "key8": "1wSRbNyTX6awsKmCf8qS6yKK11SS61eSAVy9QXBXAYd7dFKQ595H6gMR7P5yeNpB2RjnKNGZ5d7hFMhvZZafAov",
  "key9": "3mnEKF6HcjtCvcP3pP8tLc4cBQaco6hj2wZzQTNj7nd3vjMJnmgEB2rrDXywPup6LZNv7vqXN9S5Z85QsYQQVrob",
  "key10": "5QQjw8tfRxsVLJeuRZYhQNjuYQS6EnSrKUcJMd3fDwddL97xRNMcZr2C21LQy3auWgejF7Lfpx4wKca3TGzJZKVe",
  "key11": "5HRPizj1iY1q4p2piuuTUco7dqLcpSQx52qr9pPkqiBnpPbbUJR5bkbwYCC42FY2yZmpB5yBGq6jeVcdaQGA8ZUE",
  "key12": "2QsxodjiN5Jh6yctmU3enbtDUwTporsbGpMgoxwMvrBfGshVukkJnXFGiAYAKfwzF2cPVziYZVpMgAfwb9ngWU9h",
  "key13": "2uoEjPobD82WmYbyY7se9ZPKdBC5rRp5WpW2vmqQymiXpsSYXoBYdVyAbepHTFCcHLo8rJCPnrCYk1XNFnmfKwKc",
  "key14": "27P6CTeCoTo6k5D5tNbahdx2Gdn1X8QbzfRGzyET6ATWo1PTXGrTfPrwChYEZFcgfGTAascy2pwzAMQ5Vh38W7tG",
  "key15": "4QLYEn44xyvZBbEQxkjbFCbqqvtesxibLox1LMu9sowN5JjWnHhxN7UVYtAe1JVnZ4bt6Sh74Wm2DMqWpYvKi5Np",
  "key16": "4y1GUMR25q5AQPnsDBb5Dq92cSANTEShC3d1DRKaURNBwTYxP1Hp6gZZUirJfFCrGnbiTbuyKKLFRkYMDzcvHrJ5",
  "key17": "64ENPeCbTHdCobMioDj2DAktf1BNqpmibRbSw4GMrAWDfZi1aLjrNFgWEyMZgXz6Y2kJBtqzdEBa31FsjjbQfi22",
  "key18": "5SrhXreX81LSpbg3uaYBJLHsd1TpqZFK4z3VBUnyMNLrgNSsjFbP3rbEEo5fEddCJEL2XSMuTaW1jUgVUK5Mva3G",
  "key19": "5aanUW2Hg79ZoduHfWLyPWST1VbtUiNHffMk5Mkw1vCppxvtxmNkDqhb1XqahZb44nC8Zvevr3hChS98noHLBjHg",
  "key20": "41UMso6TQEdeGJKV1DyW3eNYUbjQpHGBKW7NVxjm4c6AfiAYgsjENsRn65C6trcQh6hApFxkSG4VUkFM8eBWS2uP",
  "key21": "4tGrwGXLYtZQsYbGT6K8g1r4VA2u32wSzNmfDWjoj2i3FwiYKxX59V5gnpBqFJgCFLcpMUtvEV7yR8Kxz7ENLHdk",
  "key22": "3cDkAVhoJzBKCSi7WrynkTfi6oXaUrQLajBG547ytgDVHgZM6nKp7nuh1ugUoNTn57MA3GNvJaFvKK9GPTHhVRxC",
  "key23": "3kB5tebPyxWmkStVzbDmsDC15Yc8trRbQTTnZyyurfhYe17Pz7p5v1kqUdFaYiNjgiZixosvdpp7rW4eXfJ8GSrd",
  "key24": "2PxQttbPXLuKUA2f7ap3rhQ4rtwymD8hH1QkEeXDXKWr3zZCDNYQX6WnmNQWLH2HhNMXc9mGrAvrJhUQwQ88CRNn",
  "key25": "2dPLMaKfLkpuPVXjQXzem88SNfHFhwjnY9LpbjTvvpfFnVVNj45p679xumFZZ5RdA3C4QuNbzXpLwq8tBCmVDGMt",
  "key26": "4Ua3N3cbH3qmGmc7ajkr4uYUAxHoNtRRd3eZRquuNhd7FAJYxD1s5FMzBNRJz2RRbRC4a4Ph1sE8us9EE8uPpU3P",
  "key27": "2Et1ZEoGsysayCp3qVujUf6GtFTmdyLyYvGuk7TVdM8AV1PLqVYFXwR9sVC7jYPZf6YsGAYD5CjxUsv3dXBc4gRH",
  "key28": "KxaYJRE8yKV2ZKWcHqUynydqjrYEv3cmKhu6tanZDeoU9UyDcX9WmYbNr6CMbG7WMXy5gHrGhHyA9yzcMf8JD1Q",
  "key29": "3CYgvzv8pNizLA1y71mpsedkqGnkADyhJEaEGqsXEe9UaEf4YM9CVakg4osTH5T1bLbdbHEiNwhuMKKch6r3ZKuh"
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
