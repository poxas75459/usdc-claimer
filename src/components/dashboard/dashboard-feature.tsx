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
    "9HXeKMoyXuZgBog3Mm96qe28SCbh8EwfNctUH3KBqd7a1zHvrW97Ax24oEchbJjwz8JL2r9Negr4SiEGHXHdQZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HBhR8A9yQKjmXDrD9AD3CvzARfNhQV1bgVnkQqpNLFbcugQWWyvhjh7edih4YusznTfkw2NXWT247PwF2uRz8Yj",
  "key1": "7JUR7ZEypWF3EvdsfmGK8vCmkkuekRYaduhMRrXfzh9vaty3Yquf1Z6MMSRoqYeGRnPV2f6rGXNHLpHrCFGWEbn",
  "key2": "gVrMShdy1awvo8Sxwg863bziCD2dsP1KHCFt4TsLgxosWaqj6SjHAyif5Qq6D11KKDuTmdASZURDFDPBzUjv4U6",
  "key3": "4cGkhu7aUA5sRgDnEAAw8itoofjHA4jchLzjD4zmGCR99Wy4UfAgQiQXv3jP19Uk5Am6nZs8d8BqTW5v1ovSL3sx",
  "key4": "3AniV9pCvdDbhGmtyaMNcxUX4XoyFBzRE18UNLnieCNAJakHUwua3uLLQtedjtou7CurapF1M8fXq7Z8VZHzkLmr",
  "key5": "2dLJHEMExhBruLoWYf4V34fG8pTHng1b1qpB1zevbwdgJ8EscjG6mWDNwXCamihaYhPjQKEmQsLK4qZBXNxL4Q4h",
  "key6": "zLhXN1oGdoLM8YxTpBKiNvi8VH3R7TKhSnTSNy3RJdwzz6EMUyn5nLQuQv1AeURF3kv78xRx2gHjacxMDen13c9",
  "key7": "3Gaami1EzNkCLhyGEpvEMqejJRkLLGfvpwsmws3ATsHkCueQhpMsDTMTC3tWdeHCz4CDeiFbtCHFnAaMe2gTgEuG",
  "key8": "3gLShHELVeUyX4Fupgsvo3xHw1U17c2h1pDai1qhn8crjBEaFjHZMJ8NFDnBxjDoaXsMVvUGxMMRKoDvjTccdkrd",
  "key9": "5vFuX9k4NSwSgHThovSrQB83wT9i6jBghGPM6oMT7LfWQp5FsznhRuniVhqWWsRHgxEPj4B71CChmt33Nm4eW9jP",
  "key10": "21F1waJFdBsECRbGLnDUrMQxvdE7QsJkvPnpxoXgv31EPx84XETG6fDKV54fWWC3gc7UWo81KqGDbZ7ukk4M8ffx",
  "key11": "iJKJ7tz1RFcJGnw4BYo8rYh8PN2DzgqJMWACZBbBgcFEd7cZ9hBmQeygsRQ4a4ZQAdHPKLHXhVsoBiL5y1FnDtR",
  "key12": "5573hK2eqDYLNJ5KbRKDTk6epgVQXzir9CPxiVmztg7WBx9TUwgYNmJ7tReZAWqkXw7TSxcmccATpKK9zwjc7wyf",
  "key13": "2HJV3rRvpkikhGKZHuWe5fJuvjiQGL6SjSme3dz19QoiPC7LsFPCyy2CQgL3jYrP2S1f58pYQSi4yyT5qgEVwKQX",
  "key14": "cihPbCpoekkJU5GR1vqDceEXTTXXkKn3ofed57ZnaBDJKnhast3ep7gBDPMsEpwxAtzABAMnvdsKsh1mxeE5GWW",
  "key15": "4NrdxN8Nb4hTgFxi91s2gmyRf7iqhVjDg4xJrxF9XQ5r9UmvgzLgfeQ7wb15WZyP9cFBiGa5uK6B4UXLFc8Ppvsv",
  "key16": "2mUGmccqcSBAfhryWgQ9s3NgQ8TTFVHnq47GgcRmXehaM7TTtg8ohScRAyum9bUMhccVFRfCDygmeNunG2dKASCV",
  "key17": "2TYux5E4joNbHVH6YgBRncMb8ZaxjpveYZe6yMgZ5tHrBeea4tLDg5p6WyEz9vVK4HJYnfD3xzTQt3pT92GbP41N",
  "key18": "2kSwYA1F7LooLNdVYRVwrPSbmMmwXewAAqFqdVUMijA5umtSPyzKNhETXjLMat6UqtX4ciSxTGUScFQqWhQKoXYM",
  "key19": "3WmZm4uaWFo5Qrzfpgam7ozBKELGpRM7tow8gQBUrUhytdeYs8UwhXE6TPTnfm5E8jKb5EKASV1gsUgybrsLGqzw",
  "key20": "2KkU9EDmCeL5Rqvz3eJHf5McEW3uhNKVovWrdogedxHbbMP5oDycuotw9uMMUoPpHYj2cV11XPPPmHWEBdx4bMLG",
  "key21": "3pU119BmL4bBbAH9BeT8cPoqMCyut315yyMpDWBt7Us3rEcZhFttKnkTsFPdAyvmw573Kd6o5TZctiVvH5fV3Qiu",
  "key22": "4b8ETVoDY4PggWUuDFra14tjzFr3LY4tKuiHdpKHRoraCBKx4T9aDaJaRk3RDShbZpaFHDZ2zBvqQPCw7aBquZs4",
  "key23": "4XwYg7QMDmGufdsCVauXhJSgfmgEksViB8sGFP48QmBNB4z3LP2842t3xtLmCsqVRBDMCSj2pgikF5v3V4Madpww",
  "key24": "VJakJHo1RrQZDJuoJpSjTnB78muH6LsjazUa3WW4bpWBPr4CvS57X2G8YVysEShVwhUoBZN1jRbjVjsz8Txsy3y",
  "key25": "5qyYZ28F6zGJm8j9ZjsGf8S6cdjLUSfARw5GWckqd5mTzJPUsQEXpKqd57DxvXZdo7kLhXGiCwqVsYuH6EEcoNvf",
  "key26": "fDV94ffrZzhUksaxC36WENjpSMLMxSs36FBLtVvd763tnDrowBHknMMWKo3fPon1EgBdKwZxoLeSYsFPkEDgoUQ",
  "key27": "M5ge3Ewxc5daoBFhJ7XoLxSce3eYbtdfKGexCy92WaxHKHyZqiR89WZnAJtPGaDRXqa1xEauWSDdo4Bc9rEtQQg",
  "key28": "3drsH6yKTt61uBvGNP1cZqRF9Dxuyzhd6fHvRfhF1dgaatr4DjGTSt4iQP2a7qPXdaaHxm2iDH8W7WHjvTRVAufJ",
  "key29": "3NGCHG1BhA2mP6J4iNKULrpSnpCwjW6ivQ9v7ZQ2kRQ5ZtD1GVNsrL8iVruAUXtNah99yQ1omWSokJsVWCVrds3H",
  "key30": "215u4NbEwKVm5q2eHvrzDJ9Jx6kJTW2LryLRygV4prMSnnXKrZm936JH51sMjzoxmZsA9ESbPHkN44xX7CSCjZ8X",
  "key31": "WiGdZMAqN2RVDfijTzGkGxU9CubMMiUUTJFKsAc644jYmYZgGVZWDrXohia4ZqKjSc2HQeeHwfFctrEcnTmxBg4",
  "key32": "J5WBkgL7MRByxFGGYZTdnWhdk7grFX2z1E9EZNcndCcHcTqCN2cy1hjEGRrE8GdyZ1DYV9KNCELMtrcD9j5V7tB",
  "key33": "YXhExuMVymjGFSDUHzNZfEwpD5arnEwyUP5b5mWkfCgtMAfsN7AFNRNmhv4JKcv3kwNogdEB45FrDH5BXn9VJM3",
  "key34": "WyPmcPdmqnguSUCN1Gqy4gXdfwnGJGMpLHDTmHyPGmjHkD1SMAvT1mgVLQdrcCTk59Q3VrZMXs9JWF1gweDsxxC",
  "key35": "2wd9eb4CiwLmgiGtfQPMs2gprcznyYqYFpqrz54mJWanhyuQuJQvQZkYydQroUdoYgk9SbvuUQRJMpXKCRJsMK6j",
  "key36": "5jiKyB7iEAuAZBgdhyYC83iRWd69AYcY9B3Kg6WVhpqg9zVajBQWyc4pjwDD26L5SP7i72iHuWUcfRKvR3GebD8X"
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
