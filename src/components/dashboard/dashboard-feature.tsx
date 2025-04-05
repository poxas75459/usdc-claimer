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
    "4inDJCjph6ugpfTy2ceHjxt9ZUzMWtTtyRFr98ZrJwmxzabUs3xTRgNftwUFcTjpN2uEvpS3Tck7NkQw1qZavp8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F9FmZe1PeeVdtZ2uGj69PD1i2L7bHmejPG26aZNdbfkLK1Wp4rFQfAF5Gk2i65vHqechAv5VAJUpzTsu9UvgcyN",
  "key1": "35MqyXWjHbzgSrABQbrfTNCawDMpT63Dy2dbNhaT32XmaMbA7RBrFYvMirshqZ4J34113RauEVjjuhwMTcbAUjaZ",
  "key2": "4Xxw1MSY7PAuZaoL2kRvYRyWVu9GSMZLFqj3uNdeSw9ciEV4sLVHgfZBF8yoEMKc77u6qpTxEZutjxdE7jk8S5Zr",
  "key3": "4CwbCBw6TQHSMUD7q3hbPgnuh7KfiLVZmxTd6KRNLeZ5ym8JXmWXoNmiEzL4xrHAVPLmtKeqKv9eCpc8DVX5MSG2",
  "key4": "4Lfk8Hj9sGhY5QrSAgEukhY78DtsTLc5XKJ7jfXm3rquz1w5drhAsfjtRqm4921JFezXCp7JMeDXbKq8mmJgwzN9",
  "key5": "t6nP7dMsbrj7AvRiNkFKfi2KWNRygPqgJzMGrdspYy3E4NWbpwdz9SGbWoih8NvGoFu9zzsFCK5ZnSmtapwKmxe",
  "key6": "JT8iyTtBfrxbdbWkTdz1KH4aE7acGxMcdyfWgjUHwqKurYdQKuBGu3qGmp5vuodyPZY2d274JB1U1aK6bp4iXr6",
  "key7": "5ahx6XmzRPGDxakyNjh1xPN8Dxrjph6vnBLwEFNPfditosW592KVF5b5sbigpL7ZfrVgy81cauZs7Qs2Fw1uLUZ3",
  "key8": "22dMYvbk9LYhu7QfdW3ZC67A6mQj5pFP4KyWH8nyGmUhVDCHYvJjxJmDy2nTdMZScQ1Zi1kWiSdZviGrHgA9LPZ5",
  "key9": "52EC35vhSd58GnqLoTuKMuGmeVCp1uFmzstPuhpQYuyBvNiYwX8DxxXBYzXjCYygFviB4CRXTJLFQZAeE1HH81xu",
  "key10": "p3np5G8uJLsgCnmBS5VFHLmrR5vhDRq1bgCs9U3Vtf7uypY9axKtWPzSYMXBRLqVx18Exi4fNezSAkfqGFmGRGS",
  "key11": "4Z3FxE7mfJ7ywNtjS4nGmSSCFj85xmjN3kWAd3PEAFskXGc6VoYaxQjU5tDXBWCQNDnoXPJxjMJEnyDC4axKPSwJ",
  "key12": "371ZhF8G9ZuG83K9sR6b2bQuPfwnkRHMm2zVxA3YrQYj96Z5oWA5Rs6JQNqpaA17m7dGBGdNSNUFGr8SscazWU9J",
  "key13": "3kfqxvXcCfroqGeJXfEPY4rAeRc7J5jfQUzfAefnP4Q8AQ4vyexDzxSeZk1FdRthK4V6N8Tx1G8GRcfWwL9Uiw7y",
  "key14": "rkZmZmhbdPrq21tCi1u6GBYXeVD4KDkvhGgHuPQzb7A6Zip2nDyGo2gzt9Tx2N4WCJ3VxdCFtfSqEcwccXttGYH",
  "key15": "42TcMEjqiu8RdWW7DzFCcZLnL2QvSf95YfmN5kRzv8YdsMzPimcVBrEqnNqXRvW45n1ipCjwHusnKGnsgVaHQw64",
  "key16": "621g4uZjT3d7qkQFj49aohyMdhfR82Z9u7DjEJDRHA6XkYGYyq1353f1UbRjVSivj2U57962uAWBB9S85ouuA3D5",
  "key17": "5oN2BtSK3kabTueTsqRMiobjTaCs9Cibjquo8xWNzScABUUciLiLafszMrAow3mC8Z2rr157fEPcTvzBdqK5kqpp",
  "key18": "Au8pnQqaQxf5c7RoKyeZgfwmMBu8L6sc6geYyBPNkqQiXRpmwPxChLXEqPrVHx73KdoaVh8aBYCXggN1hoP6V1A",
  "key19": "5qpuA8dgWdL6oECh3z644p65qK5NC7oFCzcNDcy7rpVoanHqkFM8dNEkgyNeJuC5dnnmtGWphckQbmno6gE9N9i7",
  "key20": "3oxaswBpE3x7EK8MnVWBX72HbteKGJsXfUzoAphvkMSEFKgLujaT177EBXm8dx3DN49jmL5d4d3phMHUd3euTZ46",
  "key21": "33sDwtcKtUYuqfG24BBj4hCSgwGNrLnE5L9SB1HheNJhkRi1HyXUAni8ypRbXSeD2UMdtG7GctNExL5BesBjZ65i",
  "key22": "3yvVKgopMQXprsWTPaj7AufKKSutyGSoNx24wSLYkVtHK1inb3Up2cPnAzJ4zaHqhMzNX3ymYzgJisa6yZCZMobe",
  "key23": "3vrGbZE5XEfFcRA1Cf1eRFcz9qGYwu5Gvj63c2WaHX9hiZ6EPH6BtAzxGXsLAT18XnKyubiYWQcunesmimACSFBq",
  "key24": "62Y41NU1FSmKXvC8cUrD9aacB9DjAzWwaugZ9gywjCxdRzrHaVgCmYG6oErucCEMfWVkxEeNPGfSLZXm4dcN2n8i",
  "key25": "2ggktFgkYDRR3ugbMp3Y3sy5VALHjpkLg6Eg3bsdTAoKk7nhQLXssX89hQKGwCGoKEewhLgKSQUMk8cqBwfRz7nb",
  "key26": "FE4YBdfYNKSK28Zy3pmnVND75qg1zzrVJCEXu5MZ3sHBJaPDRMYq3mWEYurpZ15Gi3hxZqhWyzXs1Efnob31ke3",
  "key27": "3Hc6dYVCtT1zFDcLAkQV5DSk2zNrVPpai2MQ7EsRzE3attXJfaXn33N5bhTkRCHVqCELX1di9BycE65GAF8caY6i",
  "key28": "wXTTyZZF44GSugMBBUQFZ2L96cmmPoNhJUegfnQeBAWYA1TTUBQbx5akAjeSs3YzAwonwM4xdWKPH1AoPNbVBS3",
  "key29": "4AytUdu8pkjfUCy64XvVe2wVQqWfoG4qKdXuWUymLWH5CYRs76PAETLtm1tHkUsRQMhtFfCksmntAW5Qu2qaLGik",
  "key30": "25hnBFXC8U34nxk4eUNZLMxohG4AxcUXNfky4UqdPpoe8zr5s6irda8rsWp1VzcCnn6bFhVprcSRG98VtA7Ae8T9",
  "key31": "2NFb7mo9VAxPixw4b5bZMzs3GbSmbQXHg3qi5EEhwpXYMeGvNU9CwxF8ePM17nQDsWKRoeNnSiAoYGxo4MTx1o9N"
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
