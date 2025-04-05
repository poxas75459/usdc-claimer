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
    "5bin8c38eMhLKk58YV99WmBmJ1HX75qYYqBRt8oSxdYa4qFZMAjH49Zeg6FdKcxjV4heimMjWxdQLE2yjrshKAiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25PFoxumHM1CosHAF2PHmpYr28MeomkBpn1Bh19csHSgEAasZsFf2iVLS5FXcRukTPcky1wdGVVyeRsmtn9xZBBK",
  "key1": "duhcQKsdBh6RWPRjW52eZGJ1YJZd9kXTrJY1QPTcgNnFJ38yBzXpfyWaBe71Gzxd4N1RfAqBM6CjxhzheCUTW8z",
  "key2": "4E1GNoRsWLPKhQYvEpbB4us6vRN5N7HuJ9bzYc6q1t6w6SVm9stgR1a9odStRJ3HNENJEQ8UmkCrm7ZXtgHVzxY5",
  "key3": "5eDSbYyRWwm6fbacS6b13BzrUKYaDqpjZWnjnYo5KvLovomYzbf5fSyASsxQjjJTJiChYXdJPzLmcwFmuBFgbn9Z",
  "key4": "4mHvac25hQhoPC6n4dVJCr2hJgBRjwQfMuUg8Sopp1qXfzJDbxhs1ovpKAYT2H3Gy8gdh756LRWP2DaBARDaa5hQ",
  "key5": "3VnLfo8SP8wnXuAsKENtHNfywo3CrczsbEyUFN3KgajMQZPVjQDDy9vUEFk3S7C59f5BPGmZ7E1NkAH7B7Dxunii",
  "key6": "2xrKBBhf7ddLdgBsjA24V8DnPWSLTxF3KVBoHv5JCabs6qRDefMz1222osiCuMKbjPG32TX1DJmawWNp4QSgniNu",
  "key7": "3XSXSxXVxTpGryiiN2xSPZnCZEdyffnKVXaqjbmuMZeNxviCcz3EZ7xxE2mznnfUbC2735JL9FBCqERYtmt4FbE5",
  "key8": "VMG47L6uC921LSSm14XpbPH5euVTthskPNZZpFC9Tddw1jtHWnt9t8mStgpt7TAGX655UJzd3tepJSc4xuoTktX",
  "key9": "2zU8PwLKnwfKXsUxt8jtXy8z2cHCEBKMxzfHxtm3jYrEqCoSwMMWUCx7HkBWigux8Ns5BQGtHmdoep48ehu1D68g",
  "key10": "3YA8jTbVPCT7mYB2hvjAgj78rhQafMnxrE6RKSzHUf5hqLo8wnKc41pBxpqW58ffWyKjnv6TGNCzAjU5ASZnsKxD",
  "key11": "FmLsQp72aUSCem2VG64DwSb5FT4snfozbMuHEChKs6iFNqaayrxitUZCoxmGU2iqR4qjpACJnuK5x3U2aykHKZD",
  "key12": "2QK1vJ2WbeyrUsRjNGSj2HA7UsZi2GXSmS6GMQ5dadqiHjQBTLGR88ZJJEm5qoskKgDJtKxZDwV8bAHSZPkgpQPA",
  "key13": "2med7mtxhAuTKLw7CFrQWFb2wZFyFG4MPBdeM7UniHHqV3DJniEWBeMJESYMXv6Ab3qXfzJEcaKXw7uywsEPbYpc",
  "key14": "4XUqEwHQ8SRtQ1BEU27R8JP3TqXydKNuuhN1tD3RWyW1EzThQBKRJtkfu6829Y66UPqsgqV7GADnC54diMEMudyp",
  "key15": "5syHifVX9QSQ725sz48w6pyVo9Tn94hLDvz3KwmBEWqwk1TvWJXuBEAfJCdXBH3QpQm1SGu8XWNbFynmnjGW7eRp",
  "key16": "51vHxzZdaQULoYRYMDeNh48MZ9hP69d8BiVKoDTQnjYQRx9YUNWZouyyP6aQkpoGaZcEhEmXpSGcNWzqJoyBPEZv",
  "key17": "4VNP9hRrDutJSi18L4YqW4KvUYpR6xLEjZqXAeQFLj6GGHCoFk6x6NikVSaCahAkoLz4aBMACJNqN4orHWSGdEAn",
  "key18": "Jbfw9gErxynDXAhmDPBFNt5GfBJixJN3toxwEia6XaCV3auh5XA76znpgYKEosC1VoRfZPhTG1HExFQQngrTzG5",
  "key19": "5dhoLjGGALMn6uHuk6d4bsyzGVcmqPNxVLHwL7uybNSFm26TcVditepeW5jrnYa2dnmL39ZJwG44R29KZYi9gabv",
  "key20": "3gSp4bB5tKPgaB7kCH9qpEVJTqedANjpp3ivjUQrrG5aDihTabDDeSi2PPNXY7T2uySphHLMr5B3iPL4PnkufTqf",
  "key21": "657Qsq4u6kNZcdkedAjQmqC2TRNfdcY7CWkFTeiWEB798zHEnwJCJGnQCAYFDFY8ztHgL8KkeiWK3K2GYpZST7G8",
  "key22": "35EH68h5GXcMGxqLvkgXjnTXndqfNyaapgY9V9cTEfjdGs5HyEw1ahb5B2jK8pGFDwxkY79sNQgNtPKL92BcV9Eu",
  "key23": "49iaAwrD1ppJez5SsBG5TBAkySVunMBp7ZEYFyCSvMVygFnEQmak2HyRfTNMSeChQXnwUNKYGHGx3DYx534mg4tx",
  "key24": "2h95r7b7ftDEV9Vvj7HPujxAtxJvnrFvewn7ho3T5hDvYzxUpTE4MnGeNUpxDukmwW6j6ES1jtJ4e7f31wLwbuGZ",
  "key25": "qJfpoczVnEchxgTjU8q878JQ4diMFvScArSUe17HmGjRS75ScgjGRg3LFLTLVaEWEqpKF42czVH9ySqce9mRPj7",
  "key26": "5RKuTrvbLnYJgF63wnMgSsPkZ9LdkxrdUeyHjM41R5pNEsPRL7AhwipNPUfeLnoBLnqMHFAJwLjKjoxMUqLrTZk5",
  "key27": "2zSGbxLdHTkTLyv3Tp6tQNP12QK3RmccXHRGYiFZ83nijncSDrJ5VC918vJ3eeZMUzFYtDve7uSx171U1ChXpjNd",
  "key28": "3GEzdMRJ1U5S5WXmxEvui1unY4tFHP6S7jNbjUB1PoFt3EHwyYJL1b1SNofDrh6E1SCEka9yZVHDkMv6HvJSbKm4"
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
