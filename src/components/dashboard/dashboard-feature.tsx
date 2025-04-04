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
    "5H8q6ECvVQqGCcHzRK2jcjL58CmrvZZnYJmVx8AdEmJiNnftVdcuQuGqtUptPS1btnY57cTFyZU9CJF8puVGbMvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Cg3F5yzdYTncdbBC6kxADTvpWwRswYM41Mhi1XocXjMYMywd3cbe9DCe3Afv8UaMDB9PUvcqj7xwGhf4KwQeLt",
  "key1": "3r1nEfzZ8Ex1TZexFp6qRY5jx83ppgk58LT6kxR3qGgXmSN2Rm7EDtSGXj7GphqCwtEUAepSpALaA1SgtyN3LVFK",
  "key2": "56mXHyLv8PxUaZV9QvaLZwCSwxvW2Yhfg6iYAGA3cJnWSQypwq8qC6U2qKo6MifHfkAfKRKvfhArksScshSvGmiZ",
  "key3": "5zvy8FJzMR7sSCrJLqvdhpF3aDh6rddpmEynhGQ9pk73LbY88eJL8cQ1qPUwT3BocHBgM6MicKz4HZBptQbnkQFa",
  "key4": "3NEQPxFLoFh4XMSPf3dkumP5HXbwp4tutWz7Pp4vE3et3vm375nCSMPwSpn3jYCYqMhpaodBpHZ59XmZo9pkSme9",
  "key5": "5LNUo4jXA8v3LZm2UC6y6671i59oYNUVucdoucULZRtj4QKk4nWtU9k6FJvEPFCxsQJAkzg8seKF73eE5YC2uknC",
  "key6": "vx47VjiBdmJiEaAKKyaeVNvoguSQCLnMH4s2MJ2x9NVdu8k1GxdMbfQFEmDedv59QhgMYkA7F5AtinbNNywBemE",
  "key7": "5T3irBR344kYvPMkXHrGzfmw8E8LX7pwHMWq5yCUa2q5Zqcw7XnvWhTbSsaWuNvjKjQRagKztJCnEc3j5JgFzdco",
  "key8": "MHLB3L1xNGEtacfUGQ9LxL2T9ktDAiBihTwz5L4PLjrQcEZgMBcNgyU6gBHLbGNtQs3MTNG2Um9gq4r7sPPTd8q",
  "key9": "maDJZFLpGdaYuzekhNHnK1puHD7p9spcUXbgukijjuSbqnpsWBU3vT4DyMkHtUSgVrFKBTJc27CNogMTyyS4pG2",
  "key10": "qVKD5sbADHkbyJzeV3Agmc43Q4eFVWzTFiKgyP65dKSTMSDPAyY4U3r9EVxpp3LxpBGLnXFwU45RD3fH8rRpWYF",
  "key11": "3sPs8jgtateaijJBwKwiezQJ9mU1a72dDC24EPgiwCfzs771GY7mKmSPEEUSpBLa56YbVFceAGKmF77nnyCCV6ow",
  "key12": "y5AWW4qqYdNVJomwtXkHxAcLAipL6XEAmbv1Kwg2A2MyGSVdjYX7HieFKaFyy8niREWdfu19B7ob5yfBGAP4TZ1",
  "key13": "D9S52DMiJPLWqvEsxW4fDwdfPaoWAJLyHxuMekFWMnYKd2MVMDeSEMDJem3h9oVNkKXL8EDwiSJHZFPDpSA6BMQ",
  "key14": "534QSQEadnNwtZfH4ZUfmbcqChgMhXaysghMuy4qxvADoqW4MNuS55X3PQjaq6CQqB7uLDUsGz5dos1NcLmhea51",
  "key15": "64BzhcyzH4nPRmicqddnYNcYZAMbMqsCrTAzV6wU1j6JoNiE7R1kEiHTHAA9QkzXvwUbiLjGauNCFLNY8eXqFHkm",
  "key16": "34s2U72aWHXAen8qb46QQPFC71X6XqgwZvfoGgVidSZDJWVhLiZdCWZVEEocYV8zYsthXFAvNMmZ9V1LtnsMak5F",
  "key17": "2jcjDNXiKcCC2bDK1VShcUYPUhW5hSprTcGtSdpxfiocrCvSBpK9SXuC6VmgxqM1rxeQMV8BENCY47r1pof2yzpp",
  "key18": "4pAYt1xfhhmB9sCm5Va4A8kt7sFAJKkeUs8ZmMnTa6Fb2ZU4xdEodjb5msAamCCihXcFBguoxEVjziNJwmkayyt1",
  "key19": "3PjY2KYo17ScrdaVc4yn3AjsgubaAPWFyGgw86PqHWpiiSsHg6cedwsWJrSWnEu8nAVzmP9bwAtaspcAKjnhtyy6",
  "key20": "2tUKg6iW7dqwUouMiGvVWfM8nKmzKEocMeLuUZunYKs99KREWaxvHhxA1fSFHwQb1TFGUjBgFD9v6UMo3FtNx81M",
  "key21": "4FiE7Dbu3fk56AKsnnShZcgeTiHCGBrgyQ2oAUL4gAEr67MfRwVDV5aLL76TtEFiWqXu9McKZrAgJzFqcKhb5aM1",
  "key22": "2Qau76yTG9QidUp9EQHfcd95T46WKbLAkuHYf7r76EmrKVK8azqy3V7CdBAc7sUTT8YMFXGJdYtgCCz6dFMZX5kD",
  "key23": "5NkFAuyi5z7UmqUd5LiQzp17MYaCUtxYhg2ShGTqdhMMw53QD6dXA1ZEjBRodyoytss38BkFmK2NNDXGe3Gndj9P",
  "key24": "3qbQkviszWLMnnTkbKT2a11qghmRdyvLB1TrT9Ku6j6x1yqLBJbaQdbhCEsP4yGVpiuY5xKPqYKDJ2oaYUGqQ6kA",
  "key25": "279RVKwSEa3UySTSU3s2o5L3cX1L6ajhzYm9snQ9mqw1mqKGyy2UikSmfMMmnQbJCyTuh5iSFkcdDdP6SL9PHfnW",
  "key26": "2hzsQABU1jBbZn91Rre8n3JrzXeBW2czvnEgjCNyUF2n35J21xm1WQXFjDikuYmwvQDhp7mPztEWZB2qsLPS7bbh",
  "key27": "uRC9JDGtHxfTx1tZN6dy1nhbdjqLfhwKcYkKRN9CpwXWfc7sDBpFznjUVw8YtQdsRxvfZ4dF8f2LQd8Yx3zPf6a",
  "key28": "3VsxGjDLK9PJvru9KWiXVWCAZ8mmZgjmEWyWr2pvnS6A8bgy95H3Kkwa8MEYnvCk229jsjCdx6aTGuXSJEfa3Wch",
  "key29": "4fUp5YxW2EAMV7ApHgymL2taM3shvhK6hQL3kQY1cE5RfzBE6Xd2xdt2mKej3hF6xsGrpkDF3chtNcufHwa7sHNj",
  "key30": "5rLNJR8Uz8RMsrN2BompWYHTXEMF8uKRmZTJCyhCc65TuCcZjQV5PM2uFhyX8YbdTNfgo5q3axuSmLyfFJHVtM3s",
  "key31": "5u3DFcA6ZRrtjH3YtL8DcByyu4B5Lx4yg2pxvzaymyHgBMPN7DzJDFffUnnqhMNj8GcJDsNeejHVLsjCKN5EWYrq",
  "key32": "2JtiTFkebvB8EtLsGuitVerpnYqrs9ezogmDRh1x79Y9WQ5EJeFLNoWuEygrkpVReakmk2eMcd87jDYAFUTw2w9a"
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
