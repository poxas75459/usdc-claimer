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
    "3wdi8ni7q4M853A9HpyLLKPEaU6GSGGg6PGtfz1Pf4jCcUVXcMgMULNKkyEru9FVRmfXnCRjCTwLbAa2e18XRvrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yu7MJv1SUpeDqGtJnHDSpQeXkDsshzMk1fxp1Q1mBmcKwuewYcuYGwQCjgHNgNi2AqBFkF7zufoiFob8AfaT9Sg",
  "key1": "49AwKDTjCzXJ2aSf4ouBzo6w6baShRpymYUYKBvhYRa4RSero6LecpZ2HPgAE9DbXxGzTcdpwd6FzdPfU1FuzDHb",
  "key2": "5qDM1LEdQiBsvsWsQbg7jU5prVUs5U5DEdaQQXKJ2MDPPFZ5Hux1rAEqdn1d8n29E9mR3i5ktajJvxrpjvrRPYGY",
  "key3": "3GSmiEvY1wkduWK35pRth8gKM38ByhHLwP5Ro2ETc8wm1EWvBRFAxef3WNgJj2qJVKaZcZg96CmZSDhzjdSTAN3M",
  "key4": "3kcXrwnk5f4yWfF9e5k2ocLgLLFiaRP6AKhe489mvJrRnV1dapxqx8H4LKhZGnXwhzRXjUuVKgbH2YiuJSWUL5cN",
  "key5": "4o7ZfN5oNKFCz5FqUX2dsV4pcrKPGcSgUfyPt53juB3xxFSqfDwJ3vder4SzJhbTFR62sNb7N4ChTM4hJoPsJhmA",
  "key6": "5g3RRyCu4m4iFBWYJXvsFPH1d44m5DMAoSJLNxca7eVW4Pdmu8LUXaRhQdGnoUFouLhQzz2wyVuvjyjMmWc4cdjR",
  "key7": "3umKRYyWmxnjfWFTtCBzUdKdQfyxZSG8RbAiJn1E8p4DHqCLqJk99SCs4UkKm1U6mt2gy2yBmZTYWviyWgcQAdwC",
  "key8": "5ZLdKoEAiq5Lvvv5EfgJJXMqw1DsLG6MmHe1DTZGqjwQ2jpYbcK5BWxYmjTBeee7sFFUAX85UNLFYftwy3uZAqpo",
  "key9": "WmJJ6MT5RNJ2bEbHMN2JAUi4A6ehUqs8gsSCahL39F8RfWot2ft1APZ2dhMHT866NmoL4yjSJhhcZZ4bauZEukT",
  "key10": "2n1ucpcCAaojTyQsTN9jeqx9mqn5GB3huaSCBDgo6ihmWMRGBYH6ixW3iDCXoeWHkBgzuM4bzLhLT4GzxiMw3qjL",
  "key11": "FDCdGUu92wsZVMPZdkJ7GEYZViRNpprbnKDbd4t26LzigoR4H48CgUfgCFqShaBtC8iTqoT115xBQjV6UPRfepe",
  "key12": "kfK9ERqih9QGJE4atCMRq1NbQaWYtEuK8bomUiEff92N9wEXPV57JsoCghR2C3E9K36L42gs4CGavc6Tqz9wEAn",
  "key13": "4KLaJc1PhBnAsawrTXGDPtk9DPp1DeBtj1HkEibD8yPzfiaCTvx5tnBjxUmpSo46L4UUjgait2G5mZoFPGP2WndJ",
  "key14": "zB2LE7WsFbT14ZKQpY2iq3R6fZURg5Xm6oZzPYa4x6ox6NEXmhPcbNeX3aubq2ipDTRDDb2UZBeoegpB63ytwcL",
  "key15": "4kUk4GMTavpZ9Pd9oLfTNatAJh6adk8sgv5zFHx6NgrTUSYGkep6aSxiHvwSuPCz97j21yT2kPv6CRBbuNFJCzDn",
  "key16": "4F83qmdPHzAN7NVYPxKhGiwdcZA59wTVn5eqU1XrpAMsTW6mxQDGnbnXmPQbokRrRhcyWQBNfqyuGXDCB865EhMi",
  "key17": "3Pd7Qns3pHZ7M7uFutX9ozFXmm9pKBa8mkGxLbGuBQCnw1yEoNxPpQhF8Ti9MFJqzkHmCSnsuLQexKP4AMw4ogB7",
  "key18": "45QgqBFiUMSN21Z1UuMpqnWoymYDDMAry4DtLS787m8Mra6qAyRFbSvG6QNM6CTmUo7wD99GT3ft7d7ZXyULHpHs",
  "key19": "J5s18NMDaBadWwB6E2LuBHgs49tvbAFFQRaKxbWJGGJsTSHCwnWeJKvvacLhXoZSjz8ZYVtjnuGF8UEK9LvEN97",
  "key20": "4MKovnmwXeHtzGzozmCg9HDvwKgXs8Qq642T9EnckrXv2XushJ7w1LQ5G7odWKtnyoNCpMZfHdY78bCBVDWxHgDg",
  "key21": "2V7k8d1kT5NMMt5bjmfGWTHYL8Hs7ZpDsbMofDF6gjLUMEfYQ68rfQY3ekEYqrb2AhrMiYge3EFsejTAaqyVdKb3",
  "key22": "dxbrtAAVYRDU5ZtVx5c6VBzVZwqDk9FvDaL3w4h8QHsFookzH5e4bauMbf63DPwNxoYWYZymDkdVL48fhcsG8VF",
  "key23": "5XmijJpSpRKSPWFMadCzR2TrxgA5eyNr4dfqZ1vKWUL8J4uWx2pNjLHb6xMaT3QGUYJTDAMSaFGciPYMbavHNeU8",
  "key24": "Dcd6bkWhzeQzb7siQtirsNb9iJJh67gvaTYDBUEWEY9JxhgfquNFGVvzihHbKQDUe7kzNuq39MbSwwgaWxqnZu7",
  "key25": "4YZmSC3osbRCdnhynCf8CzkcGBGthssipvePoy9zg1eckoYibyhk9AuaC4tH6K3YUNo2DTTF7XL9xxPWRrAz1Mz2",
  "key26": "4AqZFsp66iYXGShsJumzdnd6MYXb3Lsbcr6tCqSQ7CbvNaA9KVrGGQGgPD9zJLtvyNMAGkzj3bNUrXYJC3yLKwNe",
  "key27": "4ufQBTCqgQRYEcvxopg4boHUK5yVP5A4zgS6sB33BbXpBMS5qEZ1Un348AQvz2mn69nHfDPBmRRR4NSGst3u4WTC",
  "key28": "31uDTo29BhRXPHitkv75Czqb5EvdXTxCPWWwXF2r8cHruXierLDAR5f5EthdWp3NnYULkntGSQEiH9So6R5dESM2",
  "key29": "5Yr5AmQvdj1DFg4ccdKQ8yUBSSicycfJdbu2Ln9VVQHnDujFk5K5QDSNpzBCU3vw7n1mFWjnFwcCsiRC533Yb57U",
  "key30": "2R8VLyn8TxQEXBHh7CymSMu7q36fTJtKpqG4sbz6fs9qaPTveTu7nHrkZNtP6yV5m6iiEsUKbjhC5aogefrEJ1TF",
  "key31": "tK2rQ2Y5pkdi1cPkEwZa5NL25c7gna3jor21rMuJqJXbcwTpGh5ZbVPVRoS8V4mPhLx9LgbEdCWUhUpbiEfFiQB",
  "key32": "8VumT3qFkUK2Ss8WxdBPdoVifs5Cb1Vr1bS93wNwWzYV9SKTJfr5XPM2Ucvd3JXww73oNQqwEAeyxcChK3C7omM"
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
