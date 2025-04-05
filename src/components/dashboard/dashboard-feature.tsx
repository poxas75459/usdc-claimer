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
    "eFPK9mNBnyz8PUgfbspMdXR11Tb229AyZBPRopsrJd4PbNhqvxUzQctRivcQLXJ7q5SaqUCbwuA3kzUwmAYGwir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ybVfyRNVuAJAwawrv2o9uo94RUSounCCZh4w3A3J9QS4yNoX2aEa1QYxFdSKv9e2crUNX9M1bousGtoYDXhoXsY",
  "key1": "4wk8RB1WoNdBTampRrfFThYxFQ4iiwNj7hRGBGxiD2hA3WatcnKfwjHQKNyJH1pKom7AKiEDstpxpdwQm5Yaoejy",
  "key2": "2J28FC7Psimqn1dMR6VwXPd2YU8YWRNkyD5AtTndWhahgvGWs1wp1Rkon1Gi1TkTy58f1DRBS7tsJJpZnT2wAR64",
  "key3": "zhzKQj9HHzU7axvc7kXLHGA9h3SxYtsw2G9M1rf9HN4y6RCpBo3YZdk6tC8HBohXjSiftSaL2KZncqTGkxj8Gj7",
  "key4": "2WBw3oXtNiWbi5CAHyBfts4nFvXkj8JNpD9ZGv75eK53axPW744cFpPPwUF2AUCwzF3MYcQ1dX5nTakT3Vg98uEM",
  "key5": "WPcHBPwxfXGKniBZ6ra1z4D5UAM8NRVh4fnnhmaJfjj9k3MhNbp5ZjffYtq8SN1rWhxdFxW6riEYAPaiZjEwkpL",
  "key6": "5yfCnBgA72KaV9Kv9X63No92VLSY3QzsMydV8LK7W1AifH8tRHDC4HdBzGiyLTtbYKT5Hgrx3qeYZXEBnC5seVdS",
  "key7": "5ru2KhDUeaWxKqZMU4HSjKGzWYcXbUWJDQW7stmofdAecGe2AWLP2z2a4urnJvvJ5WmiWLEbrhY81dGwTi8m8tvQ",
  "key8": "5usTBtNh5oJtRp84QRP4sDBC4jZ6n5s2gU6EeuUPRm6QBYyqQRo5ja9S9kR5GLoTKjKXVrtpVSWo6sAn1AEL7qAt",
  "key9": "NXbUsvue2UzW2GxRpzWhPga3XxdkNS65sZYSoWWUdDQRro2UZ1UL1EwBZQ1EV8D1KEACh5naShb1QSsEgqJ5GzR",
  "key10": "x41xWweymupA6n5tXHPcwaMmSMf9A8UG6k1qJbzem4RY46w6Rv75gs2vgu6Qf23T59uPtwVXL6rs4fv4u13duSt",
  "key11": "4Yq4N6tJr42T8g796qAG7UNfbCKxVLC1Pe1vT8bEwcnjPo4cYWQXszavVNrgwBbN4avcVoD1fKxTmbK4RfPpNhVi",
  "key12": "3EHwzvqYWWddijSCgEfeKmGexMKF2pDTeZiTWUR81wvC6HaJgzk3y7giC8ep2U9tDh4j1MiqSaeNY83Pr3cr6A7L",
  "key13": "3KdSJZquooiNYy9S8mwoKRGLg2JFpEWJFamdY51m3Aar5mV7kNMPkvUpRyYAeVNHTnB7f1DiLWWu8wNX99nadLhd",
  "key14": "3aRNqWUPz9nXzMTmvoVHND6APs8Age7gYPcGkudqRuDUMviVsjzfHuQK78T2p29HH1f2eegvVbbXvntiwRi7CXN1",
  "key15": "4oWSiPtHR1tLfyEgh8GbyEbeprVPhUHKNNvEFVJZWLxfiu9i9EdD3xYakGVxudmF1BGTrwKeT7MzQbaXsc3fGjbL",
  "key16": "3yWB9xSxFwt24F7qa42s1hR6orx1NAeBrNdJTgawsqP3A5t6T9RFzd5fYeNr4YYuX6SrYpKyjBGQQhoeRCe23wUr",
  "key17": "N2Pnqt3PJuNLGYtrDbmC4v5qis7VA6z8RiFTCZ2USwDCZ8ATjsMC24kvSQUPEV1nA7hxiBcVj2xGSFXTvHPm88x",
  "key18": "2YhsWQ4951hGQ6nzydjPyNs5mH4qAbyXq9pZ9chwFXuMhsPts3A4oJFfkFLtiF6EctSi1BsoXzqhQRJGGekzZgN7",
  "key19": "41pRKt6VkQupRQnS9WJ5osVfeEsNLMHGeYJ43cUM25U6wAXev87eCfW1PqFcZ3gRHgZQYY3JGKVfPznDzhmz9zKk",
  "key20": "2wNp7GT2nxcgp9LU3a9QmEuXrd34pEYsSg7z4orYCfqgcx66r46vyufXdfKQX3fwAAeoVQoLgkYaVVyxicxGr5Hn",
  "key21": "5zmstHeT8UyGZ82e7pMMbx5U8EjowKBSMLErRzqVTR584V2qTKkjMwom4278UkXH8XrAWtxr96kD4N2WoamRMwCR",
  "key22": "3NH87LBdd1bhNwVG3cMyAHoGaXq3bsPt6gRmc2HQ44Ti9kuynqf7GteJeJWPhaSCR9tszKvZvxhVTeuiX93EA9BB",
  "key23": "TQ4JKdzHRBZoLkNSLkaT94Sn2Z7ey1gGbcVJYwA3cuAeG4hV6LMusKqzTHMqrFDDYUkrdvumBAjRcq9TzzZtgX2",
  "key24": "4gFDbyzbKipZndYwtWdZgSy2kvCzFLHtaP1GPXRatfdq1fz8Cn7RTTGPgK3Bs5PDr593t7j1nDbpKNciuKQySJyT",
  "key25": "2oCzdLKQeda1Xdf75JA1TtbZxPnFFZdmEefS9JGotATMML5hpAGuw2grpE2ZXQRuSQoHj82zcBW4kAYpsPYej9tj",
  "key26": "3FgWhaNxoeFR6NdAbDZE8j7wEFAyV1dydzHD9gAmMsfvKB5b6BjrBRnCyEab9MsgrqKqfSgVsZN5zo5wYAqB5J8E",
  "key27": "4fmzLQA18UJMSJFVxdNxrNhPBqtUBUb54e7dZeNK9t9y4WVy1tnfGxmqA6cBVgEPS5U4XFd4TkrhQZrFexoQbgK4",
  "key28": "Hxa9rLAmbNJ1jPdueQkjFuuqXQpUSTsha2nJT5AouCeNbGDbwpBjXnVjcwGYxD8myydNxPkwpt1Gwr7hjYgYeSw",
  "key29": "67LW8SCazhp4F7TFCMEVTdYgLuwH6jT5HmFNLQ98NcLujEUEVzSwmHE6SnzS1MQmkgCqLJW2asFZ4WRo3nn7awEb",
  "key30": "3YLE3Ye4Awik6Ca67YcN7bdc3F6tM5P38hJXdJ2zNt3P1d91TScqVB8hNZ6i4yZ8YWYg3vMa47qA7eovtzN4Dc8U",
  "key31": "oAtjpEAiupYTQQjck59AWXL3MPZ4shdQrA85LHV5qPf6bXAqYjzGoooDHytjAjHbfBYtUkc1sH3PtGNDxv6KLks",
  "key32": "3S3TZnxQxGFX3uCQRwR5etUzVMU7NRB4LTCRu682XFdcJSGkQXDCJM81HWh94gPeYsuAPjLgoJpePtYFa9pUiEDC",
  "key33": "4qBN9UrpMLNSx5j35JVXM8fqwgfHH3npUm5RUdeY5zr3aXmq5eCBYnSPTjkjPt5adSXpKPjcKyQgP3Fq4tAbHa3E",
  "key34": "5uvKSo7Fcdy2QNx8DMRPZGwNWdV53J29Agw86ufuEzbxdn92dYiDP9uW7ejT5S8rS7D56b2B3wUmz2KtTVNiFQmg",
  "key35": "4yScs7Gycyw52v9J26MtioFjgnDv7xhyRcfpttB5NnZcdPjN1rJXSL4bzPDsBGW9SsxyeAEgqYKYB9D4UYmarvgr",
  "key36": "5WsGeYPjyrxgcAYoATe14nCA4Xq3da8NV8epsPkdHuTBk2mzM8Q9d9Fk2iWEF5R2qcZqZNrfQwyuJHmKjbKRhLEL",
  "key37": "121DDJnsMnayNhtswXcTcMhjQGX9T3RMJG5fqUfcuRmAEf18qnMvgvA7icGdU4m99AgAbYr5j7Q59x1EV8xCHFy7",
  "key38": "2j4BD3fht93tBdhDCWWpq4FYd6F4mYDNDPgnfAzZJQZURYKjKeN9Z7ZX1rAocRuKEKMwzCwtYF4qQ9WnVhvDMzKd",
  "key39": "5DqRucGEQAACL7whTff5sU6JcxzxfZaroWGVjPWzcuYzK7xpbXVAXynENy5Kime1RsB8rw957HR1v6eUWF2PNRB2",
  "key40": "2Exo8vuFokQ13UgjkjRoWop2kxi1YZxPYmYE9eZAasiWnT6fUcg2eucamqiTSdSV6MuNcHAeFKvVuCNMgiSLR786",
  "key41": "3dh7RaXX8KpAVgh7yQB5SQKNaxVkxjiY2RzVjjjSgHGBvCQd7g1wFJBLD9dk1oKN3iaRC6iC6G5UFAm5iPwzfYZF",
  "key42": "3wpZTu4hwHLEYop5Lv6NHrsjEZcbYTjTRKgrogHufrW8PajmLktHNLWFTSFVtBcqVv4n3kqXPmmXJkYwdxtY7FEY",
  "key43": "3dh3EGiJY7DS69JYBRdga93tcDA5ivkh4UjgW1PNDzFjvkenNhU6Azdd6WDBHETLPF1cLFA9Q3PPQUkLFz98Wr8G"
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
