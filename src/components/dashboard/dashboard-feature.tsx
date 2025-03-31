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
    "5M5DXWCcPXcVizkC7Zr6hgXWjYrTZFGnPK1tpLaS4e7TgRVwdSEkbwhqy3HmgJ5DbFZP474d8RRxEgemz9DMfo4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26CgnGQqkBRcENmuzUaxcGVnQ2KYo558zjCAXqdGbv6S13JStZsHiPYB7CNLGfYnBBUnYyKU3MoJaqYHCvKPdhZc",
  "key1": "3z3ZNmtmFK2ad9GH1VaeuEqGoVDCHRYkK1ScqAtTXCQZs5QyYKpaLwnERqW4i8eTpp7QKmLJxDkdHL3Qh2GzWGN6",
  "key2": "5iZsVXnBV88yxwwP1Y2XZpJgybkjcnPQUMGcRwDrJYquxmCC2nFZNPpU6Lu6RLrU3LEUsrb5jmhtn3WYrz1Vowv4",
  "key3": "tDqsLpwkx75j6AmPsY5xLzaEmwzbFZuTEHcQHz3jqG3Kvwq33PLCBQHCYeLWb2nJkbX6FCp4UUUSTQELFYSnJEa",
  "key4": "3oRSbahbpWMbPmkXdH4awwrNuf1Tnmc4sCm6bW6NdLW9AhxXFgQukGCFn7qz1jhGhp9GvqxiTmtArL53DvnNn3Gj",
  "key5": "Nu8UWTNR1J8wZ22EccbM4eRtPJC8piPb2HuK8JYwTBZXHodJ3HrTjGEMFtNntcFEt8FXxQPs44g6Uj1i7kpAjni",
  "key6": "26mJSRqTUWpR12Ea78Ep6ZwTnUNgNo55intG3Ec1JmqPuCXZUEcjcEwY4METq9fZ9FZYrboAEUpYkUg14aJvmcCq",
  "key7": "3AXkpxLAbboiGTgESbdhMt8mAw6ZZYW6qCmNmCzw2LB5jxks5eJcZgZPaVN9KFVKRLN37KgdRjN4K9CiSC5US7Gb",
  "key8": "4ZXoGJaPoP1mer6j6JNT7xATugUbuR8ev9JPZzX2tEri9FJx2EcjTjGZqJNSpt3Tbqkz4rJU1JRshxFmN6NP5Xi3",
  "key9": "3nHESs7EWbp3QiiduK4N13mw3yULniizDZ4UYjDRLQ6f38P77BjF8FwS1qvsjbZNXpGBjSYKdHA4zubTGtZD1Zam",
  "key10": "iifGvLdUubyowMGt45ybLMhZ9XNVgYKMWbgio4zGv58VQLmvuHMxXWwoVdv1RbbmS2qXn28hyzFSCam7HyUoGoa",
  "key11": "2Z7Te7vdcV3tKwJaNZqrm72PGwJyFtMzVL5vqeRKvkRwErmRRLdwdwFtXqectENkMCczZMetFHKriKxmPZzTyaQt",
  "key12": "3P3YVAnRHguLoNNt3SMTEgwJFAFqvMoDg3wP7Q3XoYydy5pWmhe9isu3gSu4F8M7NXkc8qZBLxrtGdVDbb7DXw9e",
  "key13": "pkjeR4fjvoqwAuFadKsf43Z1xkjqjrhKAdcdJoh5eWesGEzWMusYftnaZWDtG3wHPZGAAkss2ZWHCeGEUW4n6X4",
  "key14": "3bpBSrUyXmjcRmhKQkBer8gaUjUJc6qzuRjF6WhP3YoRxb6bQgeWD1nc3VCVKnWyywsUV9Xa7SjTboH8dyPVmef4",
  "key15": "3TPip5rjwDfPYDDLMS93KQpeB3wdzxNi5xN5nMcyEDvfChYyp7DaMvFzKE1AdqE1aqHtR6Q7g4YKbWQR4mREPVNz",
  "key16": "3Ng9z9hbZ3s5291wmP4tzFyFEvmoAHgRX78dKE3Wd3jWkFeRUD9Dp4eQCQNEnSaavLgUdSizEcFnWAxQWEGHN4xn",
  "key17": "5Mfmv4cryGqVGtQ5mfN4FhVzbemQ2SrQddTJNhNytXbb2chJXDWfhQdEkoBzaA2ZRxjima62ZC1EUm5VKaWHZG55",
  "key18": "AvHnH5eHS7xyUnDu6aMA5JfCLkzR7pNw4F3AwKfu76NToCP8zyY6i1wn6o7winXuZQs1LxkADCkFuj6pqxcpPCo",
  "key19": "LwyKsvpxUoVKhiN2vLAkBu5iC71hoqNdsiTgJRbSFES1g2EVtM7xZ6hDf4aYVWgs8NUxez628tZ13UozKojRBcz",
  "key20": "4MFddekKb4mDaXXFG1LVi7aWE7WhSxiSGvYGd9WEX5zxMboCgbsc9J2LEGiXYoJxWcih9NfAUFQ75Hpr92DE34qG",
  "key21": "3Cgk1pzXPozL2NDZd2em5mT3LPuhBSJeZ3BusFkoGHRSvsZkyAGSussNW1fW6dYndCUUH3JAabj4jXeLipTv2Gxt",
  "key22": "5zaTA7w3zab4z8X3Bo53gmM2B5e66TdyWv7TDGcugiN7FyEx8Ue5EHg2EMR3tVTb7J4K8vuhvWW8Kgfvr6vCaEyP",
  "key23": "3Am8GM6PpsfLpzmg74irXHt5L9QEQVF3iyKhrbQJdfShKscBNFX4qhH4DuNqzjU6KWc2cWDrQm33bXdKpccvS2PV",
  "key24": "4vy6Sj3eEMaowJAeXhPe4uswqbCt5JL2cHYD6D6et6McEUT4q8BVo6BnG3DMsM5ryLGvix9fmLbcS41oJPK1EdRb",
  "key25": "21e7dd1wRBYWuGZmwFGotxRUWw1xnQTtdGvwFKDhd91cbqJPtB2Hfn5uNkAHU1iSBy4keLas3XqRPTr5CR2s9WLj",
  "key26": "54WKAwnmaorGnVZNURNrSXtLjdJsTAiniRrTavLymJNBwUN8qzy4BEqmHgoAAN8PqwVzjZttQLEFEoYyXSn8cEUt",
  "key27": "4SDyLP2N71UiXy94iD4cgvg4BC9ZxhGBFnT2cmqQgpHj7sgcgRJAC4jTZCLDMfHZU5tQtt2q4cAEriFMohzyosxf",
  "key28": "4wMAjFv1cB5nV5jVrYzgx474TauD8eLa6QHEqDQqXjVes3ohN54xnnCUWnuBoBgsf66xDrPVznngM3JivGRf7jdx",
  "key29": "2wy7VA2fKQJ4sQ3TCT8DbWA4nR2jKfiE5ZbvkhB3tQodEV1snG7RKV88AZSbeV3TQcMVd5KLTRpTvhpaM5fUyt4U",
  "key30": "56phdrnTftNFeshKLdqmLd6X1KDxUyScmrzTh97oRxW5sVFZgPmygWW1UxyW3xbHCh1hRRjpK6SvV49Y24YUgpAy",
  "key31": "zAgWr6g9wMuLzhGd6yhnTySXpKD9kMDUCjV7eqMmC5b6H52YrkiXdNbzXaXyR9uEvNeBQ85VckP5RetCsvdRrgB",
  "key32": "3z4HPK948JajRsBtXA6aK4zGoH9Yu3XWuyfrLt99Z8NLx3Zh8pnF4KcK8fPYG7BWFzYaygY4Ny9KwPrkMzwkVfLV",
  "key33": "EkpY71ziBdWCa6aXRzfGGyL6cFpu3tMLHnBrPE4TExmnQKJsi7Np4pZ7SVTAHXdtggpWf4WtXxNJnh292MbAaPc",
  "key34": "2hCMCf92qGRNc59BefyybmSvrjf6Ex6CeKdy7oRtxoRUkUXu36SZ611G5vj23XN8EycMYy85dsoAfLXMn6veaB2o",
  "key35": "3tutBMkTb5n5dqNUpqU5fcTNd9UdKuVjfGSnaTQMXuBzbuR4ABwXHRZwqberTAGzDKL4qPcsYmCVQTGs32rePNcN",
  "key36": "2vCHxCacRPQfxXeu1ghvSvvWyT7SFTCq2a4Mr6nFmfj1nm4hK3qcA76nkp2qroxLdQHbzevVigcSXXiiisxiD2aR",
  "key37": "2DgVaoHH1BRkNQdYMkCmyG72az4ijfNFHMeqo32AFi2n8Gwxcw2LKcGPoEs7QkY3mJbmQYF4rhSaSZ3saapjDHJ",
  "key38": "5QP2koKPi2hX6vVBm9Ayrxuw3M96TR45UWNWpf1yBUovZvdr14fQfsumRUj8NLe9VhXRgiEvftxYfj6Kmymki9G9",
  "key39": "5mSKX55uEjZv2rfXcigbBwk21TCZvtVPkgPpowoaLpYhspMo6UFrRptukhBgqoW9ELh6tZUJSUWf9vpGhvJQv6uv",
  "key40": "3ABUFDrrp55t5mqLtqbGcX7Q7dHLD4mQRHsYHAAT9bAnPzW3vhr2BP8eLJxjbXoUWJnwBbnvwq4EJ34uZo14UaQk",
  "key41": "ygrwjPBQqTjjXC7sDm8bA7dVSW9sdMSmaGodrLhCdRuqT4JNpB9yBn7gcm77oa8zPtPMpJHwaf6YdrYqLLaytV4",
  "key42": "55oME3GHLQA1eZbwUPYdBA3Loak5QUes35SyWdZindjDwvXDYhpwtk9bT1Jvtf2U4pBCSsAtPjG25GyUZbEfNMW8",
  "key43": "Z3FxKaPKxJ5RPGgsmZ8ArSUAyreK5YVUCGeyKpwm87CArPnYg8cqzJ4dtPgD3zD59u6tTNCrSgtEqjaGyuoEpvS",
  "key44": "QpfWDeb6RT5tmdGpXafZn7PjL75uSFM56CXvATB7ws4AhTtSYwkXZLkicdPwEmfXfeKLyHZ9BvJZFLnqrYU92YV",
  "key45": "2xUZVmLhQ4zqfGRis2kMdauyPYnndEr65VC3qEs4XkMkY1S5fmAxXnJnGsfQf82TToypH6Q1oyksWxesRt47MT4i"
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
