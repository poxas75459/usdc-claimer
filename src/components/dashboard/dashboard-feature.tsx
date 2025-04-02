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
    "5LrtcoP72CZHAEitQwkh8EHP7bPs5Y8irJ2Vn38ZJrBvSj8zrYbv93txm43njQuFRu9WQ1P9CY3CgV7dmyEgAMfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XBkHVoQjAdSL5SZy7yQ6uEuKeE8mGPm5vUV5jtHnCYQPo9FqR3Znwd8XSDTa3CD5gjHdoTj3jxU9i1GnpKwnGTQ",
  "key1": "67J53TAeLcxsbQrsaRvRgHrJ2VpCJKUCWGXGJrQwv3rsSyw3nFDrcon6rriS9mYGM2yjqzwKxnojrobs9MeGJSik",
  "key2": "3jwbhgeb5waB2wnNSDx9KiAfN3A5u9yUr6jtURT4Tejm6u3fUyi4KrbUjDSxu5rB9WjEoZ4cWzc7QTCdePfTjzRy",
  "key3": "38bjPWCMEYh1QvoN8fieqP57knJMJkdtYLLMnpT3jm6TkGRxDm1actJipyzNd6Ppo2tNZPsdehdNqqtWLAKkGaqD",
  "key4": "5mSAD4GuRZSxvR4t9NRht26n2pBD6j7AbV6eFRr4MmY9J8JagXRRu9es6q7LN1sdexJMtHfnqL5idJSgXdcuqNZ6",
  "key5": "4LzZPniG7zASyWQVrKnzND7HC6TqBDefbXjibXq54YCc61gn7rdTGdWp4SzB4EF79VkMZBRo1g9ejwY3kHLGaAjB",
  "key6": "2nS3Cwqz7NEz4s7zQSGvjcoEtjxhrinLrvGYaYLatXNKkovSpXP5n2bySoTVnMqoGfRBxYzJrEiAhpLDwaBKqLL5",
  "key7": "38GEgusVVFHqhTVpAcAwaCpMX7rj1YnRWoXzdUH2YHQqBS6PUBUGyBE4xVcN7WxWDiw3aKHSWBGLFQ4tbtK5mCiC",
  "key8": "3xby2v8N6EKCKC5z8dLyPpPc5oDaHEN2sYEKiQd5NnTXLmRKDAFA4k7GtALUkQmFVBW86GTGQ1mSF48tPE1zPNuV",
  "key9": "2BRH7ZYTfKDoznjcGrC1L5YyeniS2HyEVkXNDFn5EGqnFUdDoPRtvqqK1yDjsQpH3Nfuj32Eaw9BrQyvPruNuqFM",
  "key10": "2WnSbZ5XRaUcBMB1HAeDwK4cw4PGCK1SFVt6Qqd8TvpMiunKynk3qeFdmnf1Z6rNSLHdEFaLnvfTU6WTzVoeWoRo",
  "key11": "5yJUS2atSM58hbAfwJpKswVhUov8AJkDVVkXj8apNaU9TQPVdKFexBfqauhNm6bPXuny99QNrhhxmGbFU89m5ojS",
  "key12": "TBG2mnwT1MA7ToiMjUyF557LeUwYkUaxkLepPvvZLV5eJnYSFqZB3i1seBCi51rywrHhSmz7Ds5MsVMKT63CAWc",
  "key13": "QDWAQNeaswqHN1JfsjWeMw92o8RSTnhMR1QUGWA5tK3xCBXWcumQGDnTpNkyWWprixnUaKXzBTU1zmKfb6RoWn6",
  "key14": "64VkL3RVnSmgtycDLkbNYKqQhQZisnsfGWAuBNoFxEa8BRkMdYXtyHcxetdPLQxZ8htRtH8pZGuqkUSGKnNq5YKt",
  "key15": "4gT9EaN5U4X7BkZFJPiDVW5ui9b1FpkDGq9xB6RbK1QCXgY9NPEx1dYmAihgv7f3SvNuc9ZVCwaoZZnhTLyHX73R",
  "key16": "3QdEgemdH4HX2U9m3ce4buyykzywDYVvWH4BcThwt9BvK8bccY6R7qPZXN9iXzsKv4FdHN71BcNHBQwKK97Q5Vm2",
  "key17": "5kYxHU3WFgb9ALcpFPGT5WKkueSpqETiz2E56mgGRceop4MyexzzRYAanD8dJSNWmewQkTM4LhBUzhJ31QGqUBd1",
  "key18": "59nweZhqKZwU35Mvsjr6EDNfNvd9PKjmtG6YAfPcvRjwmqXzPKQgU3FJ48ygry8xLTNYwRuAvg1qWFcTPwYmApu7",
  "key19": "4Ym8v1jSb1ttUuK6gFzrsyquLgY58j8m73BiwBQVarWVSjrPoeZze6drGMf3z1ReN3AqYLtPcjWX7YPXnWJkTCR8",
  "key20": "41Rhh8HZJsftZ5zQUhkDSAmXsuMmeA8vYZ6hBGvfo1b3nFSFvrLP1726zjqn99T7y7dXDTUZEaMnw2CCsH7HDydc",
  "key21": "2F9wPaDDJUNTQ4aT713C5Xo8ZPUU7kpnbMYZVkUG7ULmD8CwwVfHHWMpqGCxVoprNHbPRDwyPxZxdS6wHG5SYMJB",
  "key22": "4jyzeMXbMDahEqyNBwzxgmAoGMa557QPYgGb7nR6XoHjKwHSmtqaRnuN1dq3T9a33Y9FF4mpDMTPPX3hEsAPNMmB",
  "key23": "5jWaXVj6LVhvZQPnYhihbV47RoGBPH8NZ1opFiGPuy6FDrGr4RdAbeKn2wBQuADzjJPwemVc4Xdkp4FefGhUrxbX",
  "key24": "4BMh8dQVhmKgAQUJyp22ze5ugi46sLXSe19te7QLVyt31cKn9Ji41ySmkCMXrWiXubCQG7P7u3tD5yhiJvtzgAfg",
  "key25": "jZPHFV9592nJsnL5fBN6neYjoed2z74SBtnrKTk4zKYVLyJDCE9yjoqY9AxU74C8W39ozumqjDTxV9ZY4iEDUnd",
  "key26": "4N6wn42hGk3nYbr2KbNNeA7yZWWqBzMvNAK35xHYpCKFyWyQYXUis1qrF7ZhWFkrnghCTGrDMxjDCwcF9kKmoGtt",
  "key27": "3jFrQmqfWsbxLT2EDXQPP5XRRTdbioDnTNQmRKmbhwdcxrybEaf5UrSRqBHJGCnT4z1N47fQCMWTJZUfCXrVATC6",
  "key28": "5DcHw7CHz7WCUgRuyAtoapEPdZ7nZsAkh6gsmP49LCVywqQVSAiNagE4cAANk2jKsGMsbkMNn4ggZQU5jtsMED8N",
  "key29": "uMwqmmoktkPvRqfTVk4Hjs8111ynY43BSpmtYs6YCeUBk3H6rzky719EyHEFqjmPQUfxFXBjpRMUuLjhL9FH8Sx",
  "key30": "5ZCR8HyUNCsYtMfwJUFHkcXmwpFJi3d6HuXCyirWVyv1fbjZsSU1Ds21ZNiAdrTjnFVUtE29Wbqzx8jdFeEzNvXv",
  "key31": "3ufVDbKEst7koxGY1PqC3gHGg1wBea79WWHpzdFdg44VxRKbdC4foPXhxeqqEiyUUWXZWAYzkChc3XgxwH66yS3S",
  "key32": "4V79UwvW3PDqh9moJaZGFFHHYUCQFC6bsQyaasdZn16QSiK5GMmPAZvnjWbsD8D9Ue3UHosqt8annwXYMe3emqY3",
  "key33": "5nk8CNp2acoNjQRqy15kNgJRR12TeqD1F1Vw5nVuXttSESgamBFK5WJejAsTe5t57vZjmVPDFLuy7rwSow6Jkqq4",
  "key34": "2caHxzUmJhcNEnqsby4Nv7LCUWBgawo5VGY7vsvmvWUg2toFRc23qAw35XfS58Wkw2Ji4m5n3mF4irVqgMwAuM8K",
  "key35": "3T9mP5SFUDt59AQeatMQtsbTaHy2Kg3WsR8FppuPHrv82XMTAdhv7Q8Mzj9LatUy4omEXVLvDWhARaTHScNUunXK",
  "key36": "2NfBgXM234EqMBRLfrF4V1Ho9gqo3hNwJt81CXzEuqTisbfW6sbzuyLhKBBsB1LGkeVUEY7Vg6VjmY1g6kGdmcJs",
  "key37": "cgChckNNk9DvGri4bKsoJm6aMtpfL1op9UDmc9SUTpMspvi7SuQQsTatqvMCWcDAhEbjfzaVa71esUip7ydNQid",
  "key38": "2EvQ1YxPcGTyzN41Xv48saEkMh1UM61nAadYGTsruV4DwxNL6N1NxUsd1xXFPtxwhtBEib8tghn1WbmQZwGpYgsU",
  "key39": "5HJqaon3D4RYuhyyUEv5F1qacjxKvCVJiH5HT7wjBWdU21NbT36Y7DFRSDa4oD5zitE9x2p3UAd4DNGMdzrv9E5z"
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
