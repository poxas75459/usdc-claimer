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
    "5nZZRBj1dD8hy5Yk66QXCFroPwDvKt4pyxnVoC7m8kYcNEAVzV18F61HqT2gLvBkTKSDcrPhFraPqBsKBWpK2hz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23LdS2aXhzagV86b7W84QYasVrQSBk6Xt6HnCiuPoW5WbF4DRGfzECzQx7mkNBWKk7YHgYsSWh2M3n223AGXYnpC",
  "key1": "5BrtsUWUw3cAoEgBcvVkwpH6JnzZurhBmAzT8RqbnYqTpDc55dSVMJu2iycr9aGcJ7xP2doksJzfpM5BgewrZYdr",
  "key2": "9YJQ5DowyZLx1vbHNK2GEtAFNPP2aEYtETW5ag7taYnWYtsXUsSRzTTBQxiFaVYQ3TFbZfZ4bW2z28EYHXUtRNB",
  "key3": "5yvPXB4BCURGJgZvL4Qxf9Qdpix917cfFqCczSvytTfiBpKvM6QMLQ7ReBLQAy9jC9AevBVh1SNAyfTriFNBgd8S",
  "key4": "Ta2M3ooe3tsnBcbjTsSJbfRVVYsRDutx2KY817UYqkj9XRRtSBLANv9wBysSYwWHgiLpbwF6rL2f8eRrPeVbb4R",
  "key5": "2hLXhZGxzpwar264LQ5E8iMYBnGZB3G3moo3f9ddbn3fx38CbgKrnfHX4NwR9GtStWKVHJ9fncEidqMEiF6xafxU",
  "key6": "2kqGXzMctzMT4VTM76fRkNarqPcNhjgH936ydLPbsSBFw7KmirBkX1zRj8HuArdpXiAcyw2ZRHmbmMLwtNvL9urg",
  "key7": "atA2smZzorg5Zqnw8tmjRid5zEHw3kdEAUtpuxhxgUum41tE5BFm1bf95fPbHPfb3vg9AMGNUTZpoTM3PxGGfnT",
  "key8": "zndCVVBVHx3kGonzzdiWhd7dW8y13SRMSwk2MyzCNi8wCYRBniXqSpsNZcFLvnhbJp8dWAYurNCHuZkCSqSimwE",
  "key9": "4AYb1cm7vx3CHdpePhKfojwxdcwo1wjgMh8beuh9rMAnJaF9hQqbXaPvzm6JSZ8qQhRbigY6PTkNwBmqaGHPZvrd",
  "key10": "3yAaw5JT9UbPD4v5fn1e55mNR495zw5QorFQevEGEVqFYeW1EWq7qScmsbYsMHoAogFzpxnscS6UQEJhX255xcf3",
  "key11": "33CUMw7zwct8rx1ahFM8dpCnkBAgLdPEuadWfnGNu7eA87JQsyboyhrvfPVXophYqbaNBGJA16yDSEi2JEAmLBbw",
  "key12": "3r2rmKaEGBSZgv7Dn1p4RZmGMMiK6Y9cytm9wj1wGaVuu2yQCuqXRJHdPFfpfMDSLm2xrW9nTrgpsxajm7oBUEzK",
  "key13": "5WnXB628noXYrbHM2zHLfTNsTGYHQ7TchsVXYnspzy6MneR6qQDzC81RJXfzJDreoX4hFoVJpJwJsA64WiABK4bY",
  "key14": "2KHkZfixbzALXSgmfFU1PMbFTq6qdSztopx2LsqqHEMbLjL7CUoee7dZ6bg326WEE6kbXpPdcP71MWYY6JKTStxp",
  "key15": "CvZTinrJ6UZYhVcbEACTCzkAKvNs8djiszyxmzH39KxxL8FzLuKrrA1R7ZSVgUyfvk2zzRyjnrzjRTJP99sL7QF",
  "key16": "3ttdZfFPRppnK7pHMeY2FpXAQTCdQMG7Usk29j5xoT6bnATAaKucsZ8aiynbSQQxAc66u9kbeXprDWTyiv6c5kR6",
  "key17": "3g6mDmEHYssSnuhiTwvRLbxWQBThBt4WempMmM9kvsrUraroH79k1zu3Darck8ujk3RtznjLZLzuaVfMCi44b3AY",
  "key18": "VsCQuFVTXX8wkFY3QWnVGiQjJkD7a1o2pyhgZdDK5BZYnBkP8gifwYZzUPBwP5VPgx6sN2ZGAHH3dVmmuqyTdMm",
  "key19": "2iybpPvJTSN9XWoFbmaC6RHE8wSCP5MMffEmQGycoA4ACRoT1KLPuAUUhb9wtEgzyWsxmR1HVjcuEEx9ZpoocF1g",
  "key20": "4PnS9vaDdcvJugMVUi2cwqwetTapaC7LDgZSwdL3SudaSkVSQ37kUmSpQtKtTaNoG4tmcD4iHXaCK7WVox8HiBig",
  "key21": "3XiJm8FBDVotLGL5XFKhtBPDN9WjMb4SCAR73opBFPgYpq62yDt9hvtYyeRcPHCy28R5R5tzPJM1wVhMz7YfjMwJ",
  "key22": "2kHV2VtsXR81yHgo3tHHP9yPnSzytct4k54pSfwQBqkXwPTh9o79j44bDqQ6MKmqN6pD6112Eame2crfPUV7BnWm",
  "key23": "LrVQbgYdAv58JCuCHkGKDcuzxqpasaFFX6Htv5Fpdpoj9VE9A79tKerBweVW5fhC69W5bp4cayPVd3eDVKoYqRR",
  "key24": "4hbsTNySxDE5ZqZvjaRMxXb44wMCtfSrebzhqhyd7n32jgY9gZCdbEW5JPvHECVhi2VA2knFkvWLRKhZQXbcQEGN",
  "key25": "26dsVkx1TRJdJvX2jkCJPFPwbq1WFfavD3vmLUGm1uG2fUoq6VmgKiEp1PSsF2YWikPA7My5phRo6WzjFxtRbAfj",
  "key26": "5uM7QXBj2o9xRLYU3YLXvYUXxHJFRUkimqUVvvY4skaPkpTXzsHnGoJcpqXBTfABS9zJ9WmM16cojgumZGwAbcqy",
  "key27": "4tjB8cb5kYiaQ35WAc1Gz5sPz4FjDai4Vc6uePyp5LypUDuaPw8RQ37xV5YY5v3JvjoGf2UryWfr14m2WJRVCz4Q",
  "key28": "5ejACQ74ssPPRLQotNqheK5N9baopRh3f6v76iSmUEvA3p6o4MsdHyhRY2ccyFsCG1oEhVmpuf8bYwZYL7REVKKq",
  "key29": "22pWScCEaoBQnKL5vicouwBCukfs5aBP1z7q5wrS2yTHD2tpbs2X5HcEAV44EbXdNqvRER9zA8nWKwNAayDhYzpz",
  "key30": "2WVNenukCkpjYUD4ozGS8ymPD4ZLhPVnF9CBy2swqx458U9yKFCxgtWZLbpro4wv9QvTgpbyvLsGPiqJB8p1rtBx",
  "key31": "5X3cmgKUbWwtcQA68P1n2h45twWsGsXx2EghypoSwbVJ3W1LhF7EUz8YebBsTLpib9Sge9YLWLmKMC3sMhjueHyX",
  "key32": "2LC18phHUi7jpYXfUWUhmf5puhP3Bb9TNpHA7qeNQXmMXa73viDp3A2vExuck8m6EGubp1vgKZNeh5SAkFySuhty",
  "key33": "3BKKbVDu7ipfknZ7WH3HMEJDW4XWCy4cQjBvsA7W6871osvPQTHSF23F6CGcLjAwyt4bbMdWUhFQCw7DA2hZrHW9",
  "key34": "3YLSYo7WTDxtUwcPARBZ5jhSGjfi9R54QzRTmDifEzSfuz6VkP1jbWpFX7j4K4fCEUdb3ezSWx2n1Z5pEBqDcKwb",
  "key35": "5uTeKJDVp8ZjmFooNWdqJdZmnvtHuSGawMzbxHcwDuYAWpXge6UphjpChaGCTjnurStpYZwYaM3USY9fPNy5bSAr",
  "key36": "4PXHLDrc2vJpnBnbw5q6T8nrxmvfyjutL7t3hrfKCSeprm3ptwRfQKonJA2HPXT4a6JLwHbY4mKxsR3FR357WwGS",
  "key37": "4KRFKCq7Yt7xxcxdN34Mnc8bPyMsLCsCKM96vuWYfehHb59VmsHzE3Db3fhwdCVdvomuExrxp1Swxh5p9Jo428jB",
  "key38": "3P7UHX6NH53Ak3FuxyfE2qZGFqAjXJHXNDiWBFoPFovPbbpdoAy3K41MuLA5ytV4ZnBFRwHbY68PgNNh5Yv8J1KL",
  "key39": "2zkScYYgXwJv1sxb8UHEXsBVcqf8SvyumBPTqV5ctPEUkGwsJUVJ9qgbD6ajSs8TBdgzMeYHoFuJvqge1aVKpTC4",
  "key40": "2WRDJswQcoeQTePjvtjfSJudBrM2TKKFJBSX4r36uEwAJrABiEm3sdteBknfoeSv2wbg1jWnFgah6F3Mg2bvfHQW",
  "key41": "4xJLpRLuwxCVoajfHg8HPJbP95qaVwUZsmqwKAB3TPRaMLgmpteeN1Euq3dmcDhiBx8c1gcBCGRUb7T53JQskkbL"
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
