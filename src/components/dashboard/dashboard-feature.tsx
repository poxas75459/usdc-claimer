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
    "4c6u5HKkgdewgGPq2Rfgsx7RHR3godkeud9Yb5BD9oeTh1UiCkGo8YDN7NDDGwyVeGZtWiCcq93UjqVmGLKGxDQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Uyto2yc3ejDyaapkGHvSQN31TabgFjBvCSj3Ta87e6PQxHyoWWyAWgG7KTe2Nuvh1CBHffCPPBjRwZ9pSfPfox",
  "key1": "Y1tDEHWh5gA5e9KJMaYQVDZTYmV4e65YE8TEP4Z3Wr2PST5ZZKaQoZKKJgFB1su9QhQS8sUkSr1NMCtEpMvWtpG",
  "key2": "58iqny4tA1PeTBgK7YnrPz9SKHNJPpXu1XEwi949cZRGYnS2TcCT6SZYMEKiLwRmZLZk7SCtRvNqCRnDegDBvrAx",
  "key3": "4F1d3dua8rB7DbfEb1JaUZF9XBpPtGByExAvAcpKPFQV7mY93sN5XUnqDNLJ8bjx1wCN2yugxp3JdykMXmH7p3bS",
  "key4": "3qRjkLQ1j8bZWHtyMik7J1grgr6RtAue934SAiKP3yRXfgA7iS1WJNmZzRmTKWrtZFL6wJVbyKppqm984fns9uG3",
  "key5": "3J6qkHSNG3B4ujto1A7orTNx6JEWWfx7ym46bx9A9oRXpSGfhpYiYBcLjgWySdQjmbKNd3huLoeqM91W95DtwCjL",
  "key6": "2yBxpTEzSWsiVAZv2c9ZpNjGS3iLwEJzQ6t4UTtnPvPRNsLeLVKbJYuZFHBZ33C1w6Ws5TaJRoBNV1eWT5D1cSwa",
  "key7": "4VoLX8ysL4yL7a4z4ZqwvyvzwiQR9UWUAGAoNHWqxhpGFtK8K8ZTQeWoFDW5hzZEmzTKetEQhBBmrJoQUHuNJ636",
  "key8": "3sfPxPmbX44u2mX5CiK3dVAHHSCB2nzCQoejK3H724tAEoYAcpGaeHJNKcJeciGqHUNL9jwTCjstJe39fiHuUJAd",
  "key9": "38zHgZdvqGNFYzk1fK2mSDd6ioWrS1bT6u672STEUKdcwLmCNXd4xLy4DCVALKyYc5MpWWWb4QjHj9912cmFHHFa",
  "key10": "YX5DtG75CbQTuxXh2SKto9GkPHbz4B97ijEnYPF9d5949B5dNPUY2W4bwUSFrcNEqSBZWLxUPAuMCjtZzas9GG9",
  "key11": "2sxdf6zKuQZXM9JRQRGy9BPdAapuS8xjWhRoDzNf3HfkvHqJckcqzgsygSr2mvkCEzMGYDHhhBJp8g1z2Sm6fRi2",
  "key12": "2c7DbXnaoAF7oxFuu5ACn4NEKJxLSD3bwPSNz2imqj8eT3DYofsMFPfh939TXnh2bPWCJGDRcTEnTQME598VAUP7",
  "key13": "4qiDS7VbBAXZqMSW4Yvhb5iYGtE7QoV2NiRqjZoxwsucEk7zukaXmiWkvHNZehu3KD5G4ewy1Tau26UDMnf8nQ6P",
  "key14": "3BpCM2mavGfpuconHypfBnLxjUfuMHLNh9C4vPvmqt5uMTpd8rMYHQsxfkqXfHyM5w8pTfNyd4ExhBHtPREbeaTJ",
  "key15": "ZB2GHZVadiJL4fjkDbbhN3ihQ7xPUa9JPyyqCiDrEEJmE79HgkJRygAUdpbaNk2J45JSP6YDmPq1qTuVrSDrTN3",
  "key16": "4XhGXt3hPedYKHXvXTQB9n8y1vu5igoVehju9tLjU7xmSUmmYgztNRenYgt6JiqrJLcuTwx8SqgwydsK273frcW8",
  "key17": "4tWFJidUYGhZuAJiPER9ynm7seYjNiZ2xduUAkQpVNtQSmUPz1YCbcFop4UiLjrTAsyUjaYMGzUFXjxG3c8pEjpS",
  "key18": "2a1ggDkQu2CpK76KDa2p1bfLeTsmgdbSopurfgiiZHBVEZV5fEvZVnH883L3vppvYALcRY6DfmYfbvPYWzXTykN6",
  "key19": "prprbNLJscAe5h7MgwSBegqvUWR8DrkoQ1T1JjbktGrP15uMZh4ycxz99UKLRpFTmUC9N9StKfRxMnNgZo4S6kh",
  "key20": "3xNxuzeWordnayXKemsWuuVdP8aoKwmLjDzgwZaXeXKuqzmVM42246XKPPMTrtwnaZbRNQDmC7KLX7yaFvKSf4JQ",
  "key21": "xNehUK7fgb68nXp3q9PyfkUSirhzFWRcb6qZzr8kDK93owBZJKVeVV7Fv5Hgo979Q6XLeFmfasffJunJjRGFyX8",
  "key22": "4qkbxhP64SfNxYFRDNthwNpADVucxEkrhqHY9uEJgTtQCR5KnnSK9P7fVowGsa1EJ5METPoQp9cHQxw6Ubn7qpnF",
  "key23": "JvvKzereGtQo92AzStHsQU786qVsnE7pHNqGusLPfixg4xkcDNdr3oKVqgNECVMs8Cvp43J9Jhtue2tXUACDVni",
  "key24": "5pWR4YvYacNbjZ76L7cp2kf67bPcNqetiLMKxBW1YfUpRWfdzR4oTWSATmrxW6BAZKAuTwcRGpXtcawowPjkSjbY",
  "key25": "4Xti5n8my7CzambCdPyujywphikAE7dZnzLyozqAcn6Qf6v9npUHAbTtNM7jocxzQVh7CXa6BsnVcRMWHDeCLrhs",
  "key26": "2pFj7nbBtgvhy2Bg18GivwZcrvjXq88kp5dV7HWw97AEzC7dsTMCFxSnn7VFhaZB9g5oMZGYxmKj8BnDFU19qAN6",
  "key27": "2zSmdY7EEzRunSXuw8kjrhDXe8kM4rEKVngQx7Y9YELafRneGGu95ak3cG5qmBHJ3pu9d9KDUY7KkCyAJjeie8ee",
  "key28": "3Mbjr1UZwcydhERJPdtm8NxVNP8tYyuLH7ESMKkopW5pRTsBTajb6QX1iEZDxyoip4sFUR3B9Fu8ZTTRTTXnwFUE",
  "key29": "4WX23AmM9PuVRk2DAgDHgRqengRNwEvMSwZ2hUbgvVDN9SzcxQs539Tcnvkf9N8DJmzdL3y98vmoLYAfiAv6x3DW",
  "key30": "5TPHCvuf6vzLgM3ThHcVfLrwJTgA7st2qRv3vjPbrwLsrp2iooYtUFUXLYQsDqexDkperjYEP5LaUrUUhp6kKME",
  "key31": "4WiHpSVtU5RmDE3N5h99CAQAVVq72irpiyJSyciu4ZuvD1qfDBv6JizsKjVLRFm1Mh1ZAzD9Sf8uh6DFAD1S3fg6",
  "key32": "3a8nYCa23RLTtUUu9ATeXZ4JuGbwdDbGPH7fF5s8PeKEbCTCzaHua2mouCuupExBhsCey1GJSv2sLubwnjoo7bMu",
  "key33": "2wTGHoNPUphdob6UhaSoC6yPTWDhpBdhDD3E5ogYHocZYxbTNwnuV2NtusDyhmkr5GzjdYXRrTDeJSgRkXaFGsY1",
  "key34": "3hRGmZqhftTV18t9RtFA5sKcq2RezXHZoRQoZ9ZU2qojWqfmuvSo8aib1dGU3ifR6ReuXVWTuhxKdCoQvxmApVZz",
  "key35": "3AKyMs4a7nLkUKThduya8oYpxPU16zjznK4NQMstPSVZp4wbYFE1Rx2HfPhqTPYH9cWpsM99Dg2VEnExhGNivsAj"
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
