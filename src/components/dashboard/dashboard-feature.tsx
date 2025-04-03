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
    "2nYnH6VtXavafwTE6N2PxM52jXGQVLEMJSQHQGdtM8PM4CTHkUD6KgyAsUWYrr8i1qgqXCGapKMqGgrH4vYFvQqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uDh54512zsL63HFi7sV8jPkis5bYc4dRVUV4bpfotvL35K3bGRKLTQWVpjQP9Ug5TgQBvWb4BXnUcM6LKLTnvzx",
  "key1": "4PLeF42WAjmfZaCUwTZiCm47wRF9PwWkFQYEPyFrCpwQP5c32UjQCMsvwAHjSkBNZYKxjZ1xjStEtL7qiLHJpdRU",
  "key2": "5ZmEsFFsx7VL4SPh3ATstPkz5pfoEgQVohSsEeuVCqhuj42y1BTT7y12N6dAVmV31xeoTy1UA2mUw4VkViaQ14Ja",
  "key3": "ni5Po9XwrZb8CrzvfnhYMQStmwsGSLFexGEvbgCehTnhHznyk6HdGoTYHPMRJ5Y3wo7E7PvBFygme42VdsE6yF1",
  "key4": "3V5Eaq1DMkVK43jAWz1R9BZkeLrB8b87iEfXUfpc6Dz3xqWwwFNUWa6UaGxYtkPxwr2eQmK4jchFepCQ1TYEwyay",
  "key5": "3Gyu2L2Epq9MWvTz2Hjm8NXbF6U8jj4qFSbgYzTmXvPhgb8tQbtSEqV4PTjFHfzSb6prSpGedZRGhAAo5j4PUCzT",
  "key6": "2B5HJhLr2P8MSMcwvZ8UPjvPqRAdG4hYzy3KPCKSVNnPGAVjtRkJABTsDDn9g6YtG51pkZ9XtZsLj9a9dW2e2aB8",
  "key7": "2nCwFDEysaPejfQoE8rjRnoP3UsoV991y1bhzFLbwMgi3ofcv7y9XELSRiXjGG9tXwiVCsguhDpfbpriMSuBaKP3",
  "key8": "5CPdEuKbKnTM7HHmwhPPqt24jrUZAV4keBJ8x4xv85i3VXGJN2RytyPBS2zP4JDaqrYzPavF47t6s5gHGZjRPLK7",
  "key9": "4WUaHFGHxMTKf9XGqfAwY7RsxAvQ7v8KXWWaVHMiBt3sXvqGTRJMxqDwj3qSkKJXhXY41TDbaufejQNqJxViMYFB",
  "key10": "129jPg98bRFcs3C4sTsQ2C6YoetMFD7KxBpZaeJ5NkRnkKdiYcDh1XcPv2qMXvLCB9rwfL9td3BdBvaEi7HkHbsU",
  "key11": "62xf5cU6k2gquuXWybgxXM2iZvvMdnp3qZZrD4eg72bRhJ4pgLgiFCg8AckDDXz73AJ3H9462vuTgZPkwKhrmEvs",
  "key12": "MRWRSVh9SN4wRfdtrrkyb5JzHUbftnsP1ykQ8jb8Q3VQPcmizqPKTTSpmZooeXaiM9Ghb1gP3hSGuB5nH1dUrPo",
  "key13": "3JgrUauWLs2Hqk2MoPopVs2Bh1WqXnJczGxw91GWJvedzh18P67e51V1hvGguv3uBYWpGW4yxpSMHJv8vF4zsdwt",
  "key14": "5QGojQt9SzVjqaiHmneDRmuknRyLxfhUpxmEGzSZ3TuSysyXwdePS123EJmBxKbB29t6dZGZcUse6KKDcKWARSQV",
  "key15": "3qzsqPNkrTLLUVivFVdhdKBxnpRjZ5qj5t17okFGahgsaEhnCL5eNfudoUCKjaawQNs4BDCtttNHBcNkd5CSE1e1",
  "key16": "5ZMMXd2BQKUhNq73jyUGJTgHpg1oioBGyABVtXbMxCxGA4jcfUKY8hZt5ESxix4oW21ep65RGHPrBvZjsvoLX8wm",
  "key17": "3izbm1gBbLLxk7hTMx43WVYKKpRUC9E6ZJ4mFNVw2bwkGxeS2DMBycw2PcWPvntMSp3PrvXcKcYgwnGgcP3xSmrF",
  "key18": "44GWmbdJFYdTdDzSXjdGkqq93ZHLWeVdCy98tmcaygymkqcN3vQQZobtULzRKvNcPKJdsfVVZsqibPBwPJGR2ZDj",
  "key19": "67nXtGvRRxs4GCsDsR1S3LdVofbLtzXwUhRdScyXfK7RUbxFJg7H4D7zyEH3EFW99mN5i6QWCF6BqsX2QMRPc4Pz",
  "key20": "4EQgBTBAKy1Bi1QgtkNC7bd75cZCoGQN5EWHbuwq2F9MVB8JnbRFkRB24PKGjJaBUMg9HpJLWoQgbUoWDs4gpb5w",
  "key21": "35tvmjNwzC6nsMmDzmb2awDyWXEKjzi9eBKokp2GEt1uujNu62a3BhcFR4uEhKbnX75mqWXDzQrMaxsJG3EVs7va",
  "key22": "5bh8aE3VdwnKQj6NE95zmDjqcLdgt2i2XpNkNECzbkzSphPsfou8kDQ8TRLNVZuLLxmuHVBhn8MHUjoF6jbnNu67",
  "key23": "5GY75odheB6jtLy4nB18cuUtgnRa6VRGTxR1qcjDquvdjk92DeqZeHLqwfFmUBnUfLgfEt2uWtmcBxFhzFJDLzKC",
  "key24": "5Muemz7rDDyf5sboviS3VDCitGoH4RwHpEFJMNmmXJuuN8WuFetb4ZTvm8iJsTK7xoorJYb99xFWeuu9uku5tLrr",
  "key25": "5ajPRePygqYfmQTjJBCa1tYviRURFFTrPk8AiX4KcRivFHQJ2PBcjGajwN6PgwqLZLx4doqMHWYPvG9nHFbBMnWS",
  "key26": "2bVxJDMjhauZ3VesdmYwY3JFEtE1CLNQ1uY1cEhrURdnDN88661zvcvR2isUgWFv2ZuZtyThmrQVUVypdg1Sm3GK",
  "key27": "5kQbpq9rnptvp55TCjdgjNqZZCZCYCZPVwhwLimYvTKiTGToQCaXMDuYiPGANa8wAoaFS53jzPhimQ9AE7ekqhK6",
  "key28": "5nZpARLPS8WLuv5s5LQCw7EgnXcHqQSQk6fWMNj4ZqcZLYrcXj1gK9MhXXvgBRNvgHcpPUDQSLzUEmrxxbu6zFPo",
  "key29": "4vZ32u7d2ehyeNm64N3i4jGhcZEwdDfrbAW4Uwx4cn6RWBH2sMLxWAVaeJce5t4MUSfeCTe7yacMxNytXPmtHFWy",
  "key30": "2kJhUrWgWYFirkMhhm1VAon9r7YtqK2ZkH1aU8XszziTLsEM5rvFpnqq57phgcYWsDwafhe7tyfttaUmWEM5Sg4B",
  "key31": "4gDz4ay62jMqTnPcPCzMumYUFaguxw6AitqstSGH1nA8BDLAzV8nYsDBH8uE7NhjYsjC9nyK7wmDM2Yxkk8eM8Lc",
  "key32": "Y2EU9eS1zwNbvimRvPYziboAmVKFUsLvZXS5Xg9GaNaVpo9bdpEGQxghfWQRZCdFMPYWBTxW7BqRKF8pzio1LE6",
  "key33": "8d6RUNdkENQLiHw1KmVGc9jTBbVVjd2XQRDtrkQNigggNc7RQU1PSCF7jWGJ4qmY71SePJvjSpUYK1x8dXLS3S8",
  "key34": "28tWRr78eeMYH1yioDdRffw96fcqhHXrjRiTN4LjhXpxiEaivANQ9FWryqjCmJ8eUNC5BjEpEWB4qdKVvccpcygB",
  "key35": "3piJ37TykGPt7sDgqt6rBNe4HPgeF95bW5msHbDFKjGpP9naBvR816gyN29m4hbzXB27rvsb8jAsA51s2MLrDzze",
  "key36": "4MhtyzmeeqzwB1X3vFFVmuDhqMqhYKvwn5ZA4qu4TCyVjwbr6oXCR5TT7KvXrfX1ruc3DCmeVALbz9WJ8wLe2jGU",
  "key37": "574gJ7xM9Ki8TUX3yrtr3bnwJgv8t1jYMTcg3oXSiHyKohe1MS8M93mjx6Nz8qNNUAMNYWcfnQs4Y7kSsH7HxF7L",
  "key38": "3SCuTTDKb6U4KbTEL42Khc24omHJAzdNu6MCCRajMfqFio9vj6REdqEXh3ofUnyPew1P2ECCcrB9uS5kmtqaeRcr",
  "key39": "5D86zRdLHyvZJuLCCx1X38DCvgN8cmhBVWXpqyUkYc5FpmLwwdmkZWFi1bczKnJLB4bwduJazgZHnew1CEarMvVD",
  "key40": "2mZfCwa153iEmvKAahzUFu8DE5pxDvyLX8MShXkb2rLUgeyYVkbCcBU9bjVqEPrAYNJETh9UFL2bg95GbajGoLfN",
  "key41": "2eoDqPvAuGXqursBNhzwX9V2gXPeUS7Nsg65asp6cEYK4zmQEwATnCncwVEMeHXyeCNoEd6FuEkzTxMEfK4oKQAE",
  "key42": "35XfC22VAAeDCzsav9jYdcHkuGdMoQLzRHG3xBGtdwWdPU273tmZ2gEUxezDFPJ6iNwcy4U1fsp2oFFaJ66ggtzi",
  "key43": "4FpkLQN58ejVHEGmRmfLoszDnaA84YEQsm8B2tAfYZ2L9bxb3XCy8zz2M81bM8zvZaiks9APnh6BhG7iPr8iHrn",
  "key44": "MP91ERAt4G2WvaasN2gTQd6yPhhz1wSHnHPdduMetE16wrRZE11JwEdZ7iiAckUvwbYBf3YYZzsTnhfFZUoAYcW"
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
