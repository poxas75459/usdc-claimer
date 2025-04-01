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
    "4z7g5d364yXwbPmDtLZkhQy43nw37NmKqgdx4bcsBuQenYx8v2eSqxYWxXHhfF3XWUPDrnT5to69NwMSuCBZcwPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CBzWrFHSb5rQqMqRQawMCcEhLL5Habpgsgcn7v7nUcMM48Kx3C7eJJ6jEYnHuVBP2uCreK5FrnAiqkLU6i5a9Mj",
  "key1": "2i1cHhsxxxgzhfnFdrcKe7x6Sj375Va8j7qKhL3UCLtQioTXdZTpk7WtZAixRQtu2P3iV9vUeRtwTLvp2fV2Nk2z",
  "key2": "3f8AMXPLjaqQkHv5Sj8Y95vm7oHq86DDtpTHAVtWTiW6Dm4ZB3RndqciX8XWvKRqZT8M1wPrVNjU6RuWrutr1Eem",
  "key3": "4Em7ZFh8BwtdpyxoWtjSEixCnDzidDzS4ajFVBPFjvRfVoewcPMgUXNLqM4J6zKFcX4GCz37V93NH361WaxDqzKi",
  "key4": "6VRzAjMZUTP6vA49L7B1ecWfJqfXEsE8ZhexyLGT6niNbX8i6qhZRvzBycp6WKrNG1SrFrNbowkU4JQS8hvw1H9",
  "key5": "4H59qpyUhfo9E3pjWoHUC7UnGbhyGejNS8X6WWRMnKTmED8R3EuLSUSL8yp1RQJzJ8i523EXvJhCEomgv4BGYk6G",
  "key6": "4p2ab1HLcVgqYn2rChx5XEL8YscPUey6Sx3jjgkrvkLf7Ux3kE4TNbKrHD7PVMUxpfhMwBV1SFGp8VAumPWta4pg",
  "key7": "31CPGPfZXHbEvFj5P61r8Lr72ME8XnTJ1EWEDUUUMK8ZERcMS3Xp7gnx6ksZLCU8wgZ7zVEY9faFbDvSNBWHDt8M",
  "key8": "emtBmKnwL3ned5sH6sHEHTkGJzMWbEFPYGpDVFtYhvwFS2Ddo6zMnPFjQGfQAwCH8o9Ww2ku6eNSbUb2xUVmj6W",
  "key9": "3i1adBscnpyV3CFA1cVXY3Ys3Vhcs9ExXsUsMvY6tNNVYmQvB5dKDBDa4FitDo3tz311x8anJDsx1Hc4VMv4dK37",
  "key10": "2RNLYjDErdmKY19Syd7e8K7zMQzuUc2wrWAHKDZeHATEhfkqC7w2PCpEsoDDHoAatJ4pkSkHfBUwr4Kjn1MBipo3",
  "key11": "3jsyEfVWNQQNQ6x23ftMStsLbNb9RZT2BCh2dpy9ZT4QX7AAiWhr6h1vWWGxkYyYMjTAHfPfipREXLtRrTix4mPr",
  "key12": "334gAwdX8QMAPpRWE25fdXx5hVbW3z8ZC1a6HnBsqBrRa43oxVd7FGt8fNGtfNH9iDTFwN9QPuSAzCwf15A6Lnje",
  "key13": "5UvrafY5UBQmhYQeDzteUxfxeW7gmtkWk6GpPQjPmu1Z54i5EjD9c4p6ompeo3coqLZkFwAKeWMVx6T96eNm4dS8",
  "key14": "3EpZnyhZxVuqVXmbCfbDPknLdWRQQfNRCPxmmLmRJ3tPBeZUYbgwBv7cE2dyPZviAu4XERFh6XS4HDhLESks3QfZ",
  "key15": "pSis2HafVTuMn53fSdEpWALiU2Zr1vJ8pQmpMcPZ4Ky9Rbovq5YADQnSa4VqtZcwwq3LRuNbzwCv5YVVzAA726M",
  "key16": "38FPoaYkuueWDGZcnzifknDqXin93SwZysM4uxC6T52FhAPkoidmeQ6iaN87BpXBK5cuuuSSa5DaZTZc7RZ9Qk5t",
  "key17": "2NWVMqpR11oKMfUnvUWFJzceL8vpgBFDEZZivpDif1xWRJ2dY3upQPmawbDemrPa8SYtNegfMePiHxks66C6s4zX",
  "key18": "4ogLXn5nnJBUAj4qcPKnFN3evxp3ovDxuyUBzhQngmdZQoVF1mARoKa8YKBUJMmY3iW25DXPkU8USqASGPs9FnC4",
  "key19": "2hNpHfgc2WnACyKcgdiWRekfVxUUEkqUBf6mApw8KTrjpxF8DZAY7whKyDaJMSD7xavMVVWF5aBbNxvu2qNRe6B4",
  "key20": "4Dg77jLooL68fd1uNBSnHbeTx8WhwcF2teV8wFMUFMQZtvrQea6CU8UgiVh61y7a56nTAHSrjAHmzMB57j3KixvJ",
  "key21": "WNdpipYP8ZTVybzmrLr9hGTMeeLKyz8rzDhwFAwcvAYRJqJo8ifd3kNsKaTMMKMir2XcHuJe5iHuDqHeMMRFZSc",
  "key22": "4SQTWzpYsyE3ih8yYmuLuaa6Eb4veJmj2DTWDh2KY3JeNUtyAZGwomFgeVdobiQtSut7PwrCd98rEMEegTxvTpo1",
  "key23": "5SiC9qorsnLnRg2xotDBcP7ZsE8GD63uRkByJXTBXwun3nCwqjxWNWhFuZ4YWi5435BDyjgMUCThzpZRF6FDUNeu",
  "key24": "1UBvbiLc1Juve3juj4x4UfRBgAhEgkRihjHYwz4Xsk7fFNsxaKvj6ZdLMACj8ejAwH2aHwCHZKeF9ebRRB76VuS",
  "key25": "YXEhpQyR8Xkrvazs7tDskWV6jMPE4jPCzkYJy94J2YFa8me2FWrSgwEv3bdaoLjUSVAzsFmZvoEjUEJXXoF4RDW",
  "key26": "5oWwCKskP5yxmpmmbvwiTtKeffqEDFDBwNCLd6oP1exFbAB5dCdwhPcL4aq2q4ryzL34DsNv3WMU2PcvgXURrANh",
  "key27": "5ie46Kd3QcbQbG81oaBSqabiMEtQy3eWb8KNYJRwySEo48nfbj2Y5cRWLTG57CsTaZVL3xBoPy6KXem4w9MkQHhY",
  "key28": "3yKrPvRjhwbP9VNEQsduujM33cjwvZDJjDad1KCzgpy7rave22VW3wCjhKLz8mbtkghzEfJWeSu8cCTrTQskBfcu",
  "key29": "ksJvuTqXn7mBtS9E5LhJfWBxS7qYw4TBPAaHhd4qQApj5yWnLmRSY5AZwAWaokEz6EUPHBhp3QWWLTxJxWdCLyX",
  "key30": "UFo48LHnDstLtvicgh3wcCbsyvw9Mur5yWM4N66CAkyRBzr6wHHAP8vRVJRbeMxQSPE33Z48WHge5Mn7S51C5Un",
  "key31": "5ihmhQk1yUmLY1xg9nxPX36JD9EBX8HJCPe1o679kSNa5qLisQkAmrmiiQH9F5RfTcSbiQ1oBbyvkfgE5HbHhibG",
  "key32": "4sGttugyB6GhFr5cHSPBqxGKe8V5TneW81U922F3y9mGdt7s5dNYju3U5vxvXymmUQPdcno1EMCr2o5DPL21jX9L",
  "key33": "3JTgUSUdEd3JStcWDnRPNoRqaGhNnATMANETS6eyvCuyoUtXJSuXpm1MjhTQrc3sY6scvBzMSZYTBdSErm5Z5P24",
  "key34": "29H4DqCMTCcvkPPkdhqgdkEgUn1Fn3zm9WG43MM1MNeCtWm2AgJ15Gr3oUf3Wc87q8vhk6PyGmeum1GrBSLjnHLf",
  "key35": "49thyZZa3Be35RxBe1Q6pyAYkump9ErTfRsjDJQLHbbDqsGigkCbhP787WgUWWRQexwW59HVVkuWHPuez24tyyVc",
  "key36": "2RjnSKcxsEgjq1kmof49Rogh22nCw4nhohtDKRP6Jo149dStbwB56cUEDYViCV3tLPkHfFbjteDHHAjmFhqqTk1m",
  "key37": "3c2VyHX4v5kKmQsaznodVsGAWr6zRsdt1zrMijVAwZWtECEmLQiCxk6diCZjvoJkpiUF3auu5ZLsEFkCqRJ4RQM1",
  "key38": "2MGmngxPsbv9pqvKerkynMU4AkyVZChyTau8J1HweTq7UsuCKAjjffUUVEUAaGMUvjNdcRxPpiRp7zhPceEBFMzQ",
  "key39": "4PawceWGANpRQjKdEekSiAdxX9SNHWjHyZZnJYSEBKY2cS6DVTC2eDxEWGos4bsM8oFpL4vAWJcH8NscX6k3i5ZZ",
  "key40": "2tAZ6QviA4XYSa5HX6miFXtJVANv8Pk6VXRQTpSFUjErCL2dsgxZsHpnQjN1CazK8T9ocfE4dz1EDBGGAgPP96qv"
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
