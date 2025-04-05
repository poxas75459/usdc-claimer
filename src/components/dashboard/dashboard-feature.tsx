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
    "3fcMJYRB8SR4tNvq9siY8an6nuz7QBc6NBJR7hyWgEAjPw2QMWWEGcAG1NzReCTiysZfWhzgBFFfEuSetWdwEtDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BpQk6SGBK3f9b81VvYMBEQgB1A25P6q3zwg4btRG4PUrFBXqgN4JG56fC2wr513NeTPrkrjpsTUG3CpXfSXXXS4",
  "key1": "2p9qTHxjMXoSyyxCHBM5MbJCLWfJZJhsCTK1CRuHgGSW4PKTrfwekDPHo5A6xwE7FkxMoek5ohE35J3v1uny2cDc",
  "key2": "4TLDf2UX9H7MUeG1V8wBzuD56yRWrmgbFEkLhra64gFmLRicAmu7Ld6xoEMhz7oGEnvuaZjxturBNnNBYLywSUEk",
  "key3": "3UpiczGatUde149bYabYUtXy1YtPS92vurLzfrRVoJ2DYAPVBerCNfvap9X7GJVMCo6skeiM7DzyEREfQeAHsiKu",
  "key4": "4pcxnEqBDHCKJAVcetgkZpDN5RvRKWLsmhwbwi7LWRKvgdBdaiBUhnRrzVF9GRguqKaAECKDh8EG7Z1HtaYQLkof",
  "key5": "5yumpVqivtQ9WtRdRuxPPBUMYEKLA7wC3N3r9UcrjhiDAHiLmctGbrWTQJC9mCkNvEXThHYyNhhSjo5KWNwEU7sM",
  "key6": "2oYzUzGB3rDsGfyqUcjNB8D86b1LrhFSjGhvs9mSUNPtUbsFejSUwUTAt8mspGskkcZKDTsZ5GuYhFRWwUBtJHie",
  "key7": "5nMu2ACCt5Urm1BhXb5LMKdgHjFWjz5aStHRHXF8sdBs1uo3QnpNWi4HNFS7oKDWUAoWziYR44C83MWpaE9KksVE",
  "key8": "xBfVmP8fEgrxtqnoApCS7uFGjw4PsDMrmWC6dzDeLsVxaLXLmzTYmiepWj7TuQSzAkJJd3MjbRrdWVQ1kExKgJs",
  "key9": "2nyU1oKEgdEqgATofRyRiVoXRhJLSkHmLh2QGw5KjAMk3cJXvvPC54yUQRUcu82Upbueim5eFh9JqidkqZPPXbCR",
  "key10": "XbebQ4prcbNgX64Eq1N5pGLNpv9unT5JNZzAcWnkbEydzfkbW6bjoGy63qZomc2rKa2uxeiRD5jkAfJA8hVSERt",
  "key11": "2XndAY7PFBtRjGDkaCFZrCnub6hajjzbUjHSWJUqAHWF64Xo2ojE4zU9shuGDXr2iMefxuvFrQD6RvPF6zWLWf6F",
  "key12": "5kRsuzN8FDGBSyzeRitzhCRuZGGAhr4ya8xSb2KnNoHTWwdEhssPL6W2jBqyeTm3rqKqb3pmehYG95Z3TEBUtp6G",
  "key13": "4H5haDH5Bqnh5PNuPmN6RR3MoM8TWoEjzQ8PvmKQuBkS6ukcS55nVSaN1xKzYrYpkpGW2smqEkT8fWjuHaWn9bup",
  "key14": "3dspznT3cYp6d6ZbkQCQsqmNT3HxYcaNBqZcFvrMb86QDQbKGGtY4uu3UfBRD15M6nWvGd1hmEKpSz5CxfQJtinv",
  "key15": "4pqL8QVMSCnkWuaymkze8arGtxyCjtBYzKZUqS83yNLnyfjL339YKXeYcAXiAEM8ME5hXrPnXAQ9P9A72ovxv9W4",
  "key16": "45tRiwRBBxa6kRKEqACNfhxQ8ER24uiM4v4To8ZXPNFexyJr9Q6EZLQMmjYX2CG22GjA14htcmu1cKUwkaCQgDoe",
  "key17": "3Vj5HhNZs9Sma6tiunf8Q4A5HKUeVyvbxLS5NWSmguiePM4sqGQEunNZVv94hTw5YEX6mzahYd6BsLT7L9PDtW2F",
  "key18": "38uWJeVdLA8dfTYFfnoXjCzELALczrwQHKhKiFaXAcRndeztnNzExBYY2LfGmMhxXpbZoQS7GovZ3YvzNwGoRqUt",
  "key19": "3CWEo1S3DFjbuHuHdHwy9CbaJVjh3moesengZP6uhHMG4Grw5cZRH8nTTdysswxMUmKndTJQpfsffihXWWCPR87W",
  "key20": "4Tt4UNzksRbKVWKYyw46gXA2HcZei7eqMU9eZz1jAJWW4c9pepej7xTcntZjARixcxNyXr6n5ZU7wJLJ2QDEx5i",
  "key21": "2PKGZ759KVpwjf9Xx9Tu5Xu3rHpX1CZZLKqach5kSjAsNNwmk2sy7XMZHtNx21Xf7ELMfFhq39n8nzjjsxGCuwHH",
  "key22": "2SVPikZKZzLoe1DWhKiPuMbb4mr7bYsbNnnkaopEw3UqWusmwFPcYpAT2JDvWL4dzFCPdMkey4sR4quSpSfS2m3u",
  "key23": "533FjDYBeaMSm93QcUsQGAR16NKA9S11rCUmNpm2W6Mn8Qevck3WGBRhTAHECkuAgejVP8wgtJgdoZKzeTtLxmSt",
  "key24": "3Mj847MB3Ht5s6WXZhqJSzXAwKcF2m4rKCECDAa8zPD9vBYhJNL6zoctxfX7zsH5WDQTHQkw3D1d8ejV9ujhWwXU",
  "key25": "HspY3KEsRmnVtEwYAD6UxPJycjtzcuSH1QwL9gQPqcUo3ZDqRELJTZ6jEfW1HS6NDaURrWZbSKYjErKQN7xzXPV",
  "key26": "mvp6ZfqukpfQHeptErGLhS6Kj6U5csgDpL877o8Hu1Sb15WWFtRvW7dTcpqQ5CPQKGYhTs8CUqDs1qAumvBLXhB",
  "key27": "4SRGrRdChc1cQp23a94XZLJy6F3rEN5wjpo76Z8igQBfrxJMN3w4ovgRK9fYTY9iYFpdXvvEJiDu8MTzi1R85ikR",
  "key28": "3g5JeYkCzcuH38sHc6BmRrHjKq9tJJ1a1qzuZuZTtW91h2hGAcTsAK9TnCrD37hyvtqBEiXdQYe5XyFomeuneVUa",
  "key29": "3d6rPD3QCPGBFG8Ad8JKbBPoFenFpTdpfQa2KJxCDUsqwoVsA51PDWGLx34UCKTJ3K7SoCrwW7gy8HC8FTBiN38E",
  "key30": "LfzeCp5gkz8qCpgBNzPzqiGZa8G3ZJsAe9ugw2dtq8UoA3jVE2ZxVJ5jaE986NBtiS4aL9m3TgLg7wPfy6AtFzo",
  "key31": "4M9NvskY1iwYJc1rdMBzzGyMCYx9dXAyVrz7QER6WNoSWDzsvHRoumgG3KfryTRU3hJ5AMDkYTuwkJsA6ZwkNJsi",
  "key32": "4HBSeaapCPced9aGeWvg3aFUGjygLeHMSZcXTp34jyFe2VhYGJtih1uUTp2Wvmr58EPxYHiHGvqt7D4nQdrZTDpX",
  "key33": "dtbN5v1QkmTpcpe3cX4DfJvtf5ZgPQv7W4sZv57r7MU57Fh4peQfHYY2ZZjQYqF5NtSQVjWjeKifkQDDebqNAgh",
  "key34": "484rWWGatBZh9nGDBKVfQ2F1cAMxSuMfCoLXfGYDvN6eocEbYdodvqtg9VKh6ibTssLtCVfqDfLnxMQXK3vdzZjY",
  "key35": "2Gf5fi3BahAJ6Qcw888AVGQ7mtC7TNDnE4KMgjV95xF1hYTNHFdNSAubiyewsR9DZ8wEnK7WmkGEK6J8zS5vwp2i",
  "key36": "4M66d8BDKSKAojJA8tt5k3x6fjoe1QXUv8NPgU5sn14Xh5WkQ2iP1Yg9t8vnZXuBdhWf1a1HrxWc9rcHfrticq3V",
  "key37": "2m4DdfnM28BjRDjQ1z1ueZH5JEq2VKwcDWGq4uUUJJRZtBPxxeVmxiJRzvFWzzqj8VAbp8opeumf5HcWxMbM7wE",
  "key38": "ecVTczVsCR6v1HtuWcqRfvoeB9tWTaEoPAvPcNbw15QPWZpe8RUGgbySy8hMhZwaYrEqEBx9jxUZDiuFPtfHdMq",
  "key39": "3ocCY227Jd7pz7DE6CA9EwtmbChQ6GX1JohTJATnbXab8GPGR5ATXqz39iiPjPTmMhJ74gNbRFAFZDqQ3FJ8D3NN",
  "key40": "8fV21ZQ8YgYB8SW634M6KWWgJHWZdG6Gvp3KHyv75MAykKGs9Hf6XakjN23DDAE5unN3oDGfkenvH4SMhvJcC27",
  "key41": "2yJR1y6gaeD6ircW5iPsgvkGnArPiLu6mjxSeECVsmsj4vLcs4nSDLsVQ31BPLorG7eG5Ps8Dnti63Ut591yBA8y"
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
