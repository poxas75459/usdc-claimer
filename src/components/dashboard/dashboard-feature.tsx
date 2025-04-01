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
    "2smtYUdwJ4QoYB22bqxuk94L51ka5idsKFJfmQE2z6BwzXpaYZHp7ptgW5MxUH2biwgXEykRg5U7TgTmdC4UQABj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7f7FA9f4yQ8vCVQCiX8Z9WCvfX4sFKswkfhDYyEKw9SsygvzGZxbGv2LVmxp6GgWMgpReKpy9z4wo3si8Xcb5vX",
  "key1": "3bdMPppYyaw5VULTiqz9XKQmDWeTQzH1En1TGDg2Jpsq64DgXdyVBWVYMH4sCxFGdVoFBY53jkwZHa52CM9gRMH",
  "key2": "2xTnE5xkkm4hwdmEqna11x9UDnND2wrMBU5kKhNy2ra1k2PwEuNg5cAcwcevmZenTPw8zbYTiGQhndCz7MSyZ7X5",
  "key3": "46vAokEFfAzW3nkGvYdR9rosjU2yCuZbRwDsYt673NPUBfLY46MEuuXv4fGs3QAgiek4ubqw6QiUB1K6qinXD598",
  "key4": "4LxNnJGrc8fW1E7fxHRQ1EXWeNkyfeKAGcYZvcRJutf2Wm9fBZsuAEnHDDQtaiKHRbbP7hLQhCh4cHxui63pXrBe",
  "key5": "4vrsPZdyHzq9nPxKAh2NjonkWKa2BuhJVMst9ZeSZwUaAVPVLexSnmh6nRgf1h6zLU9Cfc567SAcc3jGTxSi5Wfj",
  "key6": "3ibghSrYHQzFsZdTrf9YVLThwQEdFrD7hCjvsVf9fJ6GmynXAxTFkDppPxCryx1eXLqww1qqRS2DE5kcffCVcMqU",
  "key7": "9tE1YfQUh557AJPNE1Y2AvFkfvB12xmPoRcbrJx3L2QtWsYER2pz6zfm6TxTnMxLnEFGi21ppWvqxMHrkw7Dbxg",
  "key8": "4VeWZD1WtZVUUfGV3JFybJ3jwVrh3Zj3aZq9eBZRFb9yRgVokME2AHdgAURnuocUj52zdC6ShzdHEQr7zWK1RzAn",
  "key9": "7gNrimFGYPFnSaV95QSfJVSq2MpdC6kbbFrk45mgrPVn4hrbbiZQ8uNbMAJm4sPUMRyt6ir2e2R5wtpxofADuC2",
  "key10": "2zs7xiq7R7bKjiwGaJkvy7ji5wyGJPAb7q9ZQ2zRVDXNchRwzdYYdxmH4m9eE7PRkdpvETL5wuSch1vTntovfB9n",
  "key11": "65nSNFTY6qfeGo69eEKfEu8wGh1pB3gYkA8QCej6P2q3mc6tJ8EyRwhC1bGTY5NhX2o1tNtWGa9ymJf9D1N865aV",
  "key12": "63CpTry2uP6F7Wo1Cgbo1FBJxRL29UaWSfMq62iKsAYyEekeHLuA7WFyYrmoAca8pbrZHz4L5icvp9BR6zRUhfif",
  "key13": "kqifesuELpG1sgsr6EMQ1nro69o5MxuGo6HwP9bcBtoGArDi4BxkyXrn7HLL6jSBEAinQovrfZobkZhVpWSQ3kd",
  "key14": "3wgMNM5iaKRBYRzcoFLqm7LG4jSekqWgGaAsXtwmZz9mUgYSKUkBvCYpUdbxvSo863E2wL2Ky3mdCWVmKhCeAmK4",
  "key15": "YfvVg4afoSqAUDEPJNsBfVXnt3RREDHSzUoQQSgGbTT3wNygZTsyczYR4zUPPVaNEzfd6nKTXgALfjBmNtdet6G",
  "key16": "Kor1RQPP4LNhMw653nUvSoBpn3FQP97SfYivif9K4ERCQAmya7bZQipUJxhhcKo6k7AhzQrzbAcABB71jvGanku",
  "key17": "5mMZ8g7hLt5yCJCd55ScyAAExTq9ixJycoTLgmjNTCZwN31t8n8WJzbmykfkiK6FCAeRoAo7g8VuF4KquoV2Geig",
  "key18": "5v4h2rN74iJVyLjFLKmLXxK2f84H9MD1tez32VCXeBYBxsuMNYCaAMtQPZ6Zic6zkcNDKwEsk9pgo2qfBpVEirb",
  "key19": "2xxHLd9fghCjCrhr5rAak6GXYZ8TN59tTQxXyjC2k2YeWDdHbkeEg9oTzxY7mP7JxMkSYDMMKsC55rufZSw8sa3z",
  "key20": "5bT2qDCxZTbPDb4f6pWQhbaCKikdgQMjjnxEnyZR2V9h1tvKyQCSzSdZw14umZ2k7aWxCBQz4wdURdexuUv1ZNpF",
  "key21": "63bQUQS5VTx5F2NgWqQw3pMSKkp2qRygkkuDM6ajWJzMwiSTQfFjg8tcfgxZQzjWqvS89df3CdiejD5nP48TwTWB",
  "key22": "5aBDwp2gCQ5CGZ5hxfHfHcknx6EVDdMZER6MFifjU6dcA1ABZref1bCjhw9UKEuvs3QHT7eVi3MhYo4E6WE4E36a",
  "key23": "2TSxzh9EXspyYWeUWvU7tZzSmMpYqQbE3wS4TSCp3Mgm4fqwfs7Q8zHGQiTzSR7jrjyYYiJUJA5an3DHCqg1EiKz",
  "key24": "5S28vktaAn4Eq5GZ7m2KUSeuNyZdefQ9Xj6LhUueKZhwwHFqjUptts9ygoc1iQruwDMwaVT8JQJYr2MQwL2usSDe",
  "key25": "4fU39N2cn8AsLpEadeXv7AdV76mxqcGZsN443oUnotAoXGCSupqbuT1gJh3pZSRdwbje6s4CMGJBY8M48ZxjXUzE",
  "key26": "ezzvC4VUpf3jxKp6VWMNBd8k5tJwvhEutb5QfuPHCtHGXCWUGckm1L6Kwwg2xEpaTqwYEsb4f1ZYD7og1H6K7ch",
  "key27": "qpdLJTwCBvcYLvdr6V7Kj6F1SRFSvg7UDZGrvR32CrmGnthqdfzNFw5KcHQNNDtEcMF1aDNzqLmH3ipHHxiXm5B",
  "key28": "3W3b6E2DMFc2u7Guunq6yjtJRdTcTSUAaz3To5a1vXDUoGdmZQFTPfZhC534zNBTF3N9kwuzDdgBKMSpaURd6VDz",
  "key29": "4a6CnE3Xopa6uNvDymTnozxge3gGeUnn2uL8rERXwBPMdUe8sCiWADwFQsZNSd4A5Gbd26PrE7YzFMHrE6wfvsbL",
  "key30": "4DkdWZtf1HaSLniHgnSF94Za6tRpUYttXeroQ9jUGaqSXwWcQBwV9w6YW3c9L1wtQ4eWnKyqJWYLRReoCTkqHKfT",
  "key31": "4QitMTeB7gpwu5JNG6ccfy8RJneAVzhynYkZym1mF13yYPfXqMNX1fgUwmKbfUqxbWYqU8jhi6ZATxr73JWNBjqf",
  "key32": "2WgThFdDqP7oaradcKrY7qYqdx8SjcnfAdxU51PY4Dk75xSuMErRys5vuECGNHU3xd7HjW5YXEaDyYaT3wQRMVvZ",
  "key33": "65k75gaC4ovtY5MDXSEccpnM3vagrFB7M9dLRChfpyQWxu4gcc5E7jzYg1nzPiavYhd3tpyFjufymi5qXC4GV67K",
  "key34": "4coyLxiwJzwjkJxbPJfbYdE3P9TToGSbH9nfSb7CxBSr2D3zhnq6bJVE9Pcx9LGzvxGtdHTSZsTna7p9A464pcwv",
  "key35": "3BCuyaufz1dwPzHjvsjJH62LcS9aST4USFhm38GkMhLRAPsT1dD2ouqg7bSkybGoU64t4UwyUKoUXrgfBLoXN1YX",
  "key36": "v9n7Kcmz1iLrwV6JMdXJo8pTpUs5B7MNDdAkRvakcZUMEhF1PzLBvLAEBfRnVuadcegJtUAAf8QfB3Ko9wYmG2h",
  "key37": "5bja4hXWpaspPB9nFk49agbgVk59uWXKQvhyNCXox5Tnc8KHYxqdYSUe87nTb7tRgo6gfvCBcVnTvzp9qXR2snW4",
  "key38": "5bZADCAL5WTyZKcQm1RkvheAjQKMuxYc8Y9JT4N5TTWNvBzLgscfjqnurVpFJYSftb81zYPCgpoFgnaG4NmCtZLh",
  "key39": "4NEFyfgXdpi35M4w2bFMi3epUMAir3Ad7QLPVEPGDnMtUXg6SdJ7amQV3mYbXDuzhV1HTx6YnrtA1jHDVup6nKWQ",
  "key40": "5sD6xeeHxL8zniVeE7moHZBEdh2GGduWsqRiBcwSSXce3z8SzsXkamDbF6vVzeF5b7Kr67D8XJkbg9yxjK4b1LvP",
  "key41": "5HbBa3mLeK9a2LtEnNJdenWuLa2dnQ4xypGKuvhMtfvBFW2KLRg653yXk4CJKdkVHUaR9Gwihrep4UdqjnggqJHb"
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
