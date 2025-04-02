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
    "5TVbg28pimUtgXQPjC6BY7ZYBA2m4C4zF1wK5HSvwx6nARUTf7JACkjfAtS9ZtfsRE5KPU5uXh5kWuDVhVAfKUFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KuWbowEZf8yGXyHJm7oBKCWBtBTCDpwD5w76Qr8eeqRZKXvyzgkLWRq1YyVQjU99d321kEhNoAECD16Ba8Kci1d",
  "key1": "5Qzbj162Prr2DQwJawWpjfGbjGyNHtMXxgETJVykH7WHh29QPJ4Nyv7qGfuYQYWZByfeLicXDPivyaaNb3yziMTR",
  "key2": "2sGCTXasiBRWR1DZnQEs1kQM76RLBXu96t4UuL44cc1zuarERGQLPkGZSadiawYQCPDFgUwE6qSTXeZgrqU6SDbC",
  "key3": "33ksyetMxQYFi1nERuCqH58mTrRpUKRPfXkwaELtQAw4QK1dMQmsj1yHYzckgdqEhnWjT6AFJjJw9iGKoR612pFd",
  "key4": "2PEccKnuNeiTzk3viHUqtgsKrJE1L5G855Re5mraQCwQzoLQ9xGr67PGWYFAXJHyCRpTNsnRperS2sKkKjvULzNU",
  "key5": "2qp6gwBHjbzSMcWVesydP6GDGsSZUoyHShPKsGVtiKozfBUYzJfSYHRUZCuJGVHghw9ZuLiCKsbckXP8SDfdzVBK",
  "key6": "5eMFsA8naHouSFYSrAqh8P4mWMso29mjZEaFDjQkYsfp8Vj9vhv5TmFhckMSXkLMdfzDMegpesT7XhXVe7f2KNLy",
  "key7": "2E5gn21XariXkAW2yFVpyJ86gBjBukcXPUQ3NTAP3wWLz2QmzpaKZfkQ43S7CAqBkxueHWE66wUw5FPXYfFKmB6k",
  "key8": "3cQpHegFAFb8b7KkF9zbz51reR9NJRx1Jj8x7SJbd4BAD2FwprKYumJY9M9YXJNvwHAXfZqNtSv2EUqA3S1vVAMY",
  "key9": "1fo9R1FT7Z69FsjkxNfegp5KvAm7jrwfH7ar8rrgo5X9BsEK9BV1dYLuYHt8ZsH7wYQMqGwjysfX7oy7S3NocB3",
  "key10": "8hrV9noij1sBqJY6ruDddrp2xaAGhs98RC3R5WSikBz2naD9cHCg83PEjWnhY5oC3ESC4HioEkMAUVW11qB3o7f",
  "key11": "2AgpoeL31UPnsQ7aJEJB18a8dAWce2zXGT3cGVpek2Y8aBjKSoAVYbrxUB6MyPwBEx4Mrht3czzXAo52SQFPoxyH",
  "key12": "W3MVTJUPXwmF7wfaJKMsTm5asPxRSsHF54tpdCFGpodQVW5aRhaWYMAU7fWtDugDsNGHJCZaewpjgH2B3J61irv",
  "key13": "5bSmKGwbXxd195YdeZZ7jw8UaAV4tyNaFvnHbTZPCs4dWv2QgSmvWm3iZdM6GyAcLzn3utNpiK919jvNSdDZNYVH",
  "key14": "nBw2j9gz2XKzxZjYE7LTiQBh8o7xxrPTuQZxYrqKwWhVpnAVhEMjNfX9gSQrRZb8VBJaArqP25g2KQdKni3ogur",
  "key15": "26JrvoWtHCfEqjCoaaGstphrCGWBqAWzd2i2MmzoW5dfM2EsCoJRkjYeBSDdKTg36ua9XYSeVyKkuQVZ6syu62iZ",
  "key16": "5VCVXQBGiUU3E6QJAF5hcRXPck63k9peKghVvTMrrDJZ61SdebVYS4U9R4KJFwYJH9TihLeFy4s9jB4A3mZj5o4x",
  "key17": "wdL59eeVdQLwBAi6ymWsb1EwF6jrjvtXGJrybZhjqzacuccPtTqeJPa1Bq9k8ZPLVEGve5i9jG6vojs8AU7fEkj",
  "key18": "yVUwQ6m34sv9yPh4Sewxhyyn8hFr5YqYa3UUoHvmXCGqJ1RN14WQUr2pPYcrePFtiLztrm9zxQsMsEQNehLey59",
  "key19": "4DZo5HVp4PCEiC2MW9vt27QLxrXkZ3urhzw6XQuSpdxqAAmBaJauvPAhdTDWJbrKHXYJQ7gddg21J6DFXwRFK2eR",
  "key20": "3a3G7CML2k6Mh18u43vmP9GRxS2GRv73i7zSRNZHVBQuQ4mZHYTktT4R1zmRQgYzjSJk5CPiFD9nXMEVUwGQviwJ",
  "key21": "SdhDwodV3SW3iD3UemdQb9DuG4XDfLYCcNd1DniWg6jDSpvgCoWyVHiKmjptbPR3FfJLf8L548o2PpYQTDUmLzk",
  "key22": "EizMzNSjcC4zccjcjfqubeJjpA4dS68BCv6bfMiSWxtrMnRtUYuJSQjFtxsUwSxUDNLcHVLNRGCCsuHD4zunkLN",
  "key23": "23pw11SMds2SBJhfdHucstbsudLgnmCCKNC8yg9Xs1jwtNETABXSCDN3c5XZwMcUYjWMDnSTpUCito1CNS1eGdJ3",
  "key24": "Upz91h4KyKL4ZGFeHqsj5nZJpuq22NrpBTcr1duZZPTMutQgdVXZhjR25sBdRqZpRCvu38oDBDyXDWmrvSgXhGM",
  "key25": "5kWEZJWJC6qqqNUwJUED5xJ9JePY5RW3nzo6ZvSvnLgYi6V5Y76wCTtAd7i1eEn6NZtRsbBwPzD7swBo1P4R1uoJ",
  "key26": "62Uq5pV4yNvNBUYgD1dn3gh5SQQSnjitn3X8rQ8PyCv5yas5A3adC4WWU3vmdDwe9NidLCtDP9kEMLEpWyj7pk9b",
  "key27": "4E2phJU2oRxPaJCZbKk7BaYkefFJFJgMKSbMsSZe7UXSXgr9FTRFryFMK3NA6CCbZegfifFV382WeJqMb52WfD7d",
  "key28": "4cbFmWcP24jv1fwahMaiYkugxHAMAEXoZiuSKrL1fZRwapS7bgYP4nR93KzDuaTFWBF3KVaJKstjVuY4npdinhez"
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
