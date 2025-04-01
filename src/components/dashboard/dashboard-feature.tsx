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
    "5EjKdYTSBCoiu8nDKdbeNsSYXSgGWpsVhAueFNeZc453kyarmQRGL6wb35g3bkCp6QFesNqsiaVNQHZfKnppBjQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wZudWBDXYAGAacEaXqE1Nvqzb7sKMCE2J9bo6u2dVsALTgqdAiFauVwUtpi4un8j1Jf6XoLJeWKC3csEenAakQe",
  "key1": "5Qy7n2vYvkLvGsskecEPJtjj5KDKzWREHKYw99akVtt9G5cjie9gqooCpPEkdF5MYaTofFQuZMxEQBUXhs8BHFe3",
  "key2": "2HG2fCitUQWsgM4Msfh5VvzEDeNFDDFia6TqpH29PoegW5Da2mcnJNQakndfUoJLKMcSMfXffnzCrRtPvDpuN7kv",
  "key3": "SGUu9B3U1iKALuSRqgaN2wy77TPDgPLwncoPP2TshVdpKECj95aQYDawJ6r1KFnUJXwzfR43o1sMbKTRC1uZSv1",
  "key4": "4EmAk4iK1dkhx2HHbjZ86Jje6wtbTe6mgCVyki4rcqqQyXkmaC4WvZRDkkj2Uf8vRxwjNsHnY76oxqXmSbZBrwuD",
  "key5": "2f86FY34NMdHqGtiLE2miJCKfjKoVHMV7RjYNVhpFxCQN6BMhF921kCUuRpsxmLoqwUNh9UPL7qML1mSqBqcq2ba",
  "key6": "5YDeJeyLpF3r7JrDNDDmgCQDakpkXysAVCuVdvXMjie5dQiHFgx1T3bczUmcvVK9FRVsBTXF3VVBZKJf543V7dy8",
  "key7": "5JKnFiPmhpCQoHhMbfnzJLED8AWNpR3Jgvwimr2ncpttFYMPxw6U9E3iqL7jtJMknAMAMfnyohehtRjWjvs9doJB",
  "key8": "wBc3ACTxceryL96sYuwrfFgVuDzqpRP9sTT8QLvihZFn8z39GW5RZxNN2Nf3Ehx1gPiDFrCc2W2ztBEEHp1ke54",
  "key9": "3VUzSzvNxeyvpm5s93o8xAdNGm7pgHJrLXhccAStGzy148rKT1DMA1LKdJXJ5jmxRVAhiBwx82Reqfgu7wp96CQa",
  "key10": "3tRTKssRBTA5yzWUFY7dVpGHEWos17gWtFWvptkJeg6DWZAjBjCJmETeBtx4EgEn6niVgjmSaptKHhiW9cRqJ7ic",
  "key11": "5mNF2WsXtrgzQ4tZSwsb3rNXY6ofTL6P71u2qKPNxXCbE5BS7E2qAFRFk5XyrHeVotzom5uWzaWLsLGqmr3Mxapf",
  "key12": "2kH2B3GQbfcDj43D7XKu43qrZnkp2iLZ8HEJdnAubCVjVbCyJ4vJ3HZ8sgPRQVEgLh9jes8HoHkZaEBCHDioFBtD",
  "key13": "4s16qR89Y7tdKXaN52M3RBia71h1aU64DcQY17ypTQtwx35MxWoag35kPCjMAsD3hgbVcgvdTcypgKN3gfJ2DnJm",
  "key14": "2fkp5XND1BRx1cesynbM2J5FQsqvJtTjjyc2kDmQ12RMNK8wvACtVa4nFvRT4rw7X1abPwwFbnxVcfNMTTPY1VwC",
  "key15": "5LoJXAGy86wbBZPAxXMLB5RNYXAcnPCXuoVAdBR9rqDhXsK3THFhrXHkSZZjLN2DwGyBVDVgPpPytvRFVqC9WQKJ",
  "key16": "45AcVB72mMaHz579cpVTcz5TufRoV16AJwoz2z4J3RidwoGJ4XrTFZwzN6qSdCemC6fbQBibYpbtFrAD8VFUU7FG",
  "key17": "2FoqTXCh475qTW8aEqo1kPwi8VXVuZcLPUciqFQ1UAZekUYiC64aCTzF2WWbSmxsvH2BPcKDXvuXEtWtA1S4HQmE",
  "key18": "gVFooeMZheqr8SqnAcNkoTdXu34wCE3zRtniiizTwmdxUacd3NCmy9Tbt9d5SYxcByUaLR3gNwxn8Jx2SeFibs9",
  "key19": "23XVvvEzeQafnBHrM5XXES8kUWbci5KY8yvYAJoDdn44fpHYfvC3g4AqDH48SNJy36NLzdQe65UZnc7HekUobLuD",
  "key20": "4FLpMBNhadqrv9T6yRUqgwK5zB7iy5rH8CdCkW3svzSWmd5Lc6h48kpYGQkRVAfmwvgAf2ypr4swysJcCYJSCRPK",
  "key21": "4qAnSKQxhEhUSKBPQfJMfYrJzXKoeHb3J5ubSVgh8FVhtse3ARxUfEFNvaVgfR5WSFgx8DQYbvhRwg8y5TWiz55C",
  "key22": "29xaFSfnbYxgcayoen4Z5eRAauTiMiqdqRDpAynLtbsWyEv1qH4fdqk8UKwz8szsZqCKSkizvJ5jjy7EM2wLg72J",
  "key23": "3rHWfg8wmtDwpejExoXZSUc3zHeDxVLAUo5NRKMMo6LkcYRNA4qi2qMka9TTfxG3ZL3DLXLsjfXXFdQdy7kyJE5T",
  "key24": "3gCRdP4DQsSoxvUxCG8WtcXzkXjJ1DsUpht9mYqNjyP4qPsPA6Un9ZdqdRCCLsrekeFEcTX2of8u9aL7UYStY9HK",
  "key25": "55LmLQ9fPgeYBoKnEzoiCCRbt1kpsszRGtcBb2k82yKBWNwJ63TvLHvUKtyEJxxFmN2CiVj4mgTZRtvuMf9obytq",
  "key26": "2gCKtJZ6aGb6ah2xxn4e3mbD8KDLhP8EZ6ZXfVi8ZGLB8yYshnSoT4a83r9uhACbYgc1D4kvYDGd9HMCgAipwoio",
  "key27": "3t46Nbkdvary1uLquKjgMhXHAJw8Gi3WkHxsYeXD6af9btarM5b62aWcHhLTkAwP7RXSQmkzbeYsMAoqJZKRJF78",
  "key28": "2qrx9apAnMSx2DJfDhBf53v22kyVBmCWusf8oDUUfGhcz3CcciuUArKV4dJh4fgQxJjqkaqk5fdYDdBVVoG3V5wa",
  "key29": "5zqU76oK2TcX4yJQt5viUca6jC7fL1v29628KJKj8Yd1ksEX2ECizHX2PEhf9xVZ57VzsLWvBiUa71obzpuWfPKg",
  "key30": "3aGr5x5D2FHHR6HhyXvGVSnpXcQ42pqgCdc6VGiNCLXS1wB3av1SXRzSdhxAyezKDpZHWWtfMnsXAYVS7j8sAgDQ"
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
