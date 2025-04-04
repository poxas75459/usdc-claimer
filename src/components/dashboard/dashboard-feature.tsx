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
    "24GzuKCh8x21PvAxyhFrTGjyRvmhqQZ35xpozNTkW2msfCzWems4vXxTci3UNELjtRUoKx1RUgxHFjS62TJCUeAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33qEYE4T7QjCrMoNW3u8JnoyjfR9Rc2i4qBaPahUWXEtob9r499TFWERWFTRnicqktcPFdkEyFzdpJCHr4yJo7H",
  "key1": "4awujuvZeDXqCSxjtKs79Ew2i5zFxtXihiWSdEAS9Mos6b8RNEL9nSmqVbae8kBpwXihrygsmwZzRrZUiB3QbLN",
  "key2": "2HcWNKdttzDVVFNTsSGPWzzBkUUC1S6jRuhnZAQ1hf8HDAhLYiZGv8hNHRE8GCcvtywJ2vCoccrkqUh9etCJarRW",
  "key3": "5vsrcmLPav2qknHLtA89cgyGDbQac8E64o7Bw5MfBrey7c4y35aMf3FundyWdqeWGDyydiMP3hRZUmSYnsFSUXt7",
  "key4": "4uda9zebvoJYtcJBnb24HjB3qc63WWW768b4wAqUQep9VuAndyDKVtRaekK13Ts7srscfPjEiGopuZo8Dct3YooE",
  "key5": "54f7G4Mom6Hadbw5PM7yawcdw8R8umhmmPbBex48sm2px6s22VDWGDWm269V5Mi6DyoHj5zQxzxCUrFxhc7E8Kui",
  "key6": "5tSjeVXDadzq4o6YYAw12zcpJvNKzvurqmStcYLsQUDVayAo2JS7x4qmYsJqqHrnEh5wfdC3aysE6LxwrJDdUfeZ",
  "key7": "FYZLMmiuXF6DcM7Jq3kmwjkCVdXnycWCkbLQNmAshHnKEVrm59o1fRMqUCRsCZhP2AMTDnEioyHryrG1xLXxMwG",
  "key8": "23Pam5MbBFxGnGKCBc839aSP4bkw9aGawEv8VjoRGQ4k5gbqasDyJjq4GPcnU5NaWVPe8npNUQcAMMMpeuUXmxi5",
  "key9": "4zmuFsuYmbuEaqyjdWEefTHUCNXhaeRwv84eHGF1NuXHcPmwqavdMkxi7BRztek9RUstxakTc7sRsKd99bQcWwYf",
  "key10": "3PLNaCoEdroLTEsukEYwSUPvXWXMQQBYaVfZaKdUtCTvcUCxX5SmC4wQ1Mi9V4uyMVSQhLWmqCwQB39WHMiyEv1a",
  "key11": "5uNPcpUGreWyWg3biJeNHzPvnvP265Uj2X8N27p1UvusuwL6XpzWNdHxzyoNiSph4Aznx8PVAVZ5xHS1B3TTehU",
  "key12": "4ghWL5QRV3uf9roWuuoH3f5gcmStFPk49PapQTWUcMfoqhGB6mvcHSBUh1VaEN1ddBqgwcvLn2r5n925REG3B6Hh",
  "key13": "bcadjt4CHkTCMLDfhPS4bCC2V9hmmDJttpvp6KGLhoF9damy3Lmd5B3CDkWUf9tVf3yqUMbAVwB2iNeGb9hCsNc",
  "key14": "5gV1Y1fEEWBN44HFv3QhJjZkzLAarusz9ocQxxR6WEvxSFsVzGDsK7HkrSkyAHozTxJtvV2DPfjfGcQPsdR2h2us",
  "key15": "2BmHdXrJ8jNEraK6bmyf34hanE1aLhDFE5LRmW4ycssg4w78uZYpephryN1D5Q8Tv3fQBmAfGJE19gGCxGuDFBqP",
  "key16": "j42X2wfZnk46v6RqAABM3nSeUqSQ7D2k4gx5aiMU3jj9qtkNLwoy3xPqnZURS8JL1QEuKALygdZhg8wBwjmvGp4",
  "key17": "5L6XZVah6i72k3DEdU4iNUy7PnXaBo9xbvQ2EoGBZcfQwn7bVQXNzLAzXEqjZsHEEWBg1hnmGyfsxLddb4wE6eMW",
  "key18": "5Zy5dLfvEfdGQb3DjZ43kVZV4XcSSWRkgHRgX1ztburywzZpCJQsW7B17GV2MPXmxXSZWepdLZkLD9iswi8hQEaS",
  "key19": "5edyPmPcmmKAwAJFfzK8uFq8mfW6ycHHahPtc1g38LZaC84CoW46vgpXrjtMM4CqGGHrxUTSUWazHxXn11TSJM4R",
  "key20": "5XwM9nnevQZPtbNqaPnGMbfnygNJA4EJH5HQ1L3bL3YBgGhoaG3UhvCcYvAy4o2gQsjavFAQ2zW3cm4kXc5aLHJo",
  "key21": "3zh5cNxLkMyfV4Es6h6arbFQoXeFgXxLVoYzcTFyH6oGqw2yaA1pSy1hwMwRtfRk3KY6czE8YSmWb9ckRMcUzDUi",
  "key22": "HvzHT2fWfKyPaP9KhrVaq7j7cvTkETQGgaLPkqnzGeBv6GSssMLx9xTWJeVVpUHcYw9YgzB89GFM5w2Wy5tULZr",
  "key23": "4kyAsSijdV4bEAA2rtTLBoHE2RAF7zbS4ZHRUiPPiLvJBDJeKBoPgnwx3JtHr8H7woypQqpLqM7ufts1P58oGy5r",
  "key24": "38SPfjRJxohn7oaP9ibENdD4RLyuL7FPyBA7MZ16VZWjGYK2jhMR6ZgAtX4yUCo8PXaefc2JKESEu45onVsGxarJ",
  "key25": "4axMvk8HLp2htrs9FArZtf2fLKZBwTQ5CAUBYpbJefZcYduvYFBWV54HMnKqrMyvpEP7DZPzFenqyrpQAqKdsr1h",
  "key26": "fBSW4DJf89nHSw8qvaBdYBuzXcjAvMdJiF9ufViD9GhvfNM1bNdKv4Nsa1BzF5gDSqfHz7cdtuaEh1BfLfYdyM8",
  "key27": "3JsnDKGhKyAM1xbBnuoN6rf5JeKEvitB43YM3KBSCcZG4bVT6CcFeGoUanDST2dMhMLyE2yKustWzXvUKHdxsaP8",
  "key28": "3amAv6e96G8msTn9HyZRDpELNoJb3BXNBPdqHBhS6cob64XJdU4fcnoBGA7K8xx7Xr3NCkm3fGwpvfLhjHMsif7K",
  "key29": "2kxs4sMCgELuHc3bFtRpLCDFr1wTBi38cAYoFyCjJYqrHX7nxfybTnicWFJ8A2ce43QXUgf38t1CHvRcRZUfCuYJ",
  "key30": "3LYb3APoNihHrhhi2hbus9cNMspYirXhbzRSFbzcnHKJPFUj8eVYUWPbgSAdT8ivYoHXpHLRWxkCbE3Y9ZVXFNZA",
  "key31": "4n1MNhSuThqcRZA9CggmTkWpXpXZHDRQhMbWuVSMfWdn6ALkNaD7R9Z64SkF8WFz1JxWT3fVG6j22xDcCurXvaEm",
  "key32": "5XL7YDk1mHZJQoeXyDMrCoMEZqWo4umNsiy88nuWqoPd7wrTFiTGUXCVRDRjvoJ9thWyXcwRgNo8m6uYC7bkgRG4",
  "key33": "58MaJfH1CxfSt7Yz2YuazTJfo6nQid1YEBNy6LkE9SstQc6R2TiZ3okvyySUWFr69orVs4uDBMSJyrjJerps3GLs",
  "key34": "vsYoi5JsWf5tRQShaoVK6iQjhn44SNMRASHSEDMpg3hHuNpkjwxXiJa1ZDLqrW5VydNKJCVqF3i8SNESNL27otv",
  "key35": "2YpQeNQq1n4n3Ld4xUg8hYpKGpLyQJzKv7xs8SbzXBjzfKR2tGgWMFaJso2x78Q7xX4rNfvnLQFkQwAEjNYqggTs",
  "key36": "1phwC8AfG4hyBpcneDbxNP9becx9YGvYDfwCocdKDegUtnYYqbDAxRVbvG5bAqDDbA8K4qyQBeASzcsvT1tvuov",
  "key37": "8FDrKRVxaSnay4gdQuxd9b4H8axbLCtXuppMXptiwA5DKM26YzjvxPoKS4QsugYZdhjL7tH4Ay518sRUoEaFCL3",
  "key38": "2JEAr29eDHJjLeTjw3J51f5FMyi6z8N8qUB13rXLW2w8nFpE1KRjcMXCe5NVunp1Eq8LGh8ck5C1C494CkBxzdUW",
  "key39": "v8rERd7AYGttddMYdoLyUKoLpZpzhShjDZFDasZpq3v85ThRMXyPeoo1466y45Yr2APTvHmiPGkbyB6CXeNAnQp",
  "key40": "2C3x1unGE7Vzf9htz2MDWDnbe7E438jX1m1L9Z57QykZjzL3uwCkheeEeqzim7UXM7dR7NZwrQSSaEScUeR4qa2Y",
  "key41": "3vHPisFiQ4wxLonwRJ9yuQbG2M8n1amuGy5iQUtesMJrF2Lb4xh6NRKLNh51t4f3dVgX7vPtAo1nH9wzSkMkf2b5",
  "key42": "2k9yFvZhDo1xKLicGQ5PMivyDoLarkTjf6JJrqrqNdKXrsP4EbF4fNd94G8ThfE8K6M7qCEAd8UDbPRgsZsPFvzA",
  "key43": "2K7GgDRhcGf6jvJqc2J9mx8nxL45WdymGLr7VUe1LYirWMVitawVbMbwBYcHjdachm4HEaaxn5DoNV9mMcjqM9Q1",
  "key44": "kY1TcQqby5RG2ju7ThSJNrzCjE55BJXaFamP4dGvuvbtnAakaVz1fEhZhNr7PD5Gn317mZ96MhKazxP5ctDRZY6",
  "key45": "5WUK9f3ZzNoZYNHnouxAMFK5xrP8gq2KtEi87fSx12n1BW3hEVpXwuKTU27UTr5pqxh76gYemiRnKYai7CgUYHKf",
  "key46": "4WSdPTh7CLgWKY2efT7FFY6prrZ4aDJ3AYrwA8yGKNxe7Z7tfrpD362oJPX2kbDnQmGvivs9Ki5EHGU1gBgxGYUW"
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
