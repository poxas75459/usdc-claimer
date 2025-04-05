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
    "Gni6qDZBuhm5dFUHKXkMKwpBeyJj7JQDrv4nRn8PjcwctbEsdqUEcM2wJpogCrvEorFo6sHJns4DC8YBvkWVzwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cc2p6UtTTKrkoPo6JAUqpVoTDwUyD14n5HY4NGH9dQ15gTqq7qgnWXGzFH4BNbnSxWr7CgHTYSkFQL5PcwhHD4M",
  "key1": "5WtjnefikgPdaHy2KVkvzrw2CSJQeFJ1PD2WDstDehF1b3tKut85EsjGNag6Rh8BQ9BnhSd8euvo1FkS17qDwzhG",
  "key2": "3yCunNwpQpoU6wo9EP6KaQ7ZFhDneP49ooV6F6iQweG9gRqWWbCfbSVZZX3gYSx8YckRmGDq86So5SKbpfjYDoY",
  "key3": "3SdSgrp5r2xydsdcY4ZEAy82tW9o3oyGvcXNFh8HhyJg1CGxcuPgNubRzjWYFMX4ZmKmi21vEhkoQLjJXptefexF",
  "key4": "55dDfBqF6gBN74r326KAJCpHZkjqYzp25N19BvQbFHqRDfaXfoUTWEvu6ofdfDQoZ2trjNkuSEXrLzWtpeaqmBXv",
  "key5": "3JUqrSjxQf77UShxVDQtLjp7hRrWRfDSXQrB8NsQ8qubnPunqcnuZPq2VcBEifHFCGiAkxz9kkiFYWtdnepQ7VnV",
  "key6": "4srBvzd7AfU1QsEAm5bEzZGoZMUWitc6bN9i2GS87XpWXPFEgSgLEVX7UmjQjP7FdznLjorescM8WZnZ5HyWDR41",
  "key7": "4Pb2rqH2VomyeSc26LCMSTLzwTyeYNZmDHH9iUZzQZkvTNJ73K91jd2CPXBYir2UV7T67qJ6d7gArqo3i5a5Ufqc",
  "key8": "2gfz1EMEKpRVNmG6SLe2TFvDxRhpsnMNqe5wfj4rtxB8C7zxh7FHdD3UvdL7vca2TRUkSf9c5UgcUMMreEbrAvHt",
  "key9": "2JN6kvbWkU2uMYdVyFpsrRvN2sJD5K9o6mn6NHFZBQuzBqnHRj1oD6qntQjoqpPjxgRvTgi5sCZE37D1GZje7XyG",
  "key10": "4FTDnQdscNFu816NvwmgLYyf4pqNNJiJptybi6UC3Hpd3PrN8svbKw6pPKMFhpQzE131F9LkK4E74gdfmhBvJ5qo",
  "key11": "5GmAwEeo7tnkxvDomXAWfYGkXu87JCagQNsP3GvujdRfxuNcUrXsto3SN3eP8kKchrcHQ3yzAu5S8Bya9DdvoJzH",
  "key12": "i2LpAAttxDTHsobHBW6MvP3VTxto1nr3AAHRb3N7mmgHYxbwMRUgVub3gq4MmRbtpSzTAADSDNzKmtjzGCFtSyW",
  "key13": "3nczxUsCwxmhTNgnMr6kYeKsL2fmCZ4cbPjTT2yFfa294sXroXsdVsWBFKPsnhYDVqkNKJdeqTdRGRGAunabphU8",
  "key14": "4VGbDrJC3DM62NkXm3XYWRMWtKv19RQgyU6Yh1GggVjG59by6aDw9EJUqjvDT1p1N1YMXhnrUGpK46f7hAMmWYNY",
  "key15": "2RUerqoX1t8TpXJSg5CGWGSe8ZDtxju9N1D5ZZUcgr871PUc687tVPxsRWPxN7b15cJDB6tQq9jfErKYpK15MAeL",
  "key16": "5AMLUZMQiYNsZfDe8oduqH9gz11DNGA4eXZyqQ8eCSsLtNRUUdNDQZgExWL7P2ZhHZpUhsgyxtdxdGa7wwkhR6VR",
  "key17": "5eeEUj5pwLGz8AyeciTo31MLvCjNbBLtWy6pdJK781hig7x1Bq37zh9R1dh8TQgS1roqec4ssE7cRnT67Nv11CUm",
  "key18": "9PQYcEDeB9zgprAGYNq1BjEd9GEDrmBs5a1hSogDnYyU6dy316vVTwR2D7cfjRkmuQkbcWyVtVATGMK2zsLnNZz",
  "key19": "sYsBXiD9UUAp6CCCGbc57e8hftvPudwTrTQhowd3vguBGhMWQgK2yJ12Vs5J6wtr4DzLU2m8p6SHnLE33LgiJJR",
  "key20": "5VaWq2AtBiLxkvPLP4qi3wGoHugGpMQYjjRDa4RwhCAwnQRJBgBG7wJaPGQgz5AJYyTXpy9NYHE9h9XpS4ec8XwN",
  "key21": "21vvNgnrHQamrC1VqZnCvrTuEZ17GWMFHPMUESou2Cq1TjCbS2ukqNPXsTq3GvwU4Z2PSnJQyZB7bp52QLNk8LxB",
  "key22": "4siYDhzCDATvRmJoG3E1Ut6au6URV4zc9djGxxMHT35Yp5bhqXSBJsZLqsce1Twf2YKPH6aFFRht59v3HmqstPkz",
  "key23": "3tpTuH8cdKwVg5ix4kxfARizK7HLYeSdFom4yQ5b7cZFFUvEwb4iRPgtGd2Qm3VgQ1mo4R4ZhW64V7wJm76acppB",
  "key24": "2nPgtc1a8ZPZiMnSnS6jJvihWDnDrXJSjQmuRCARFSYib12Yqnn6jbNnneryU17yT4wGb6aXNy4XgJm7uroasvn8",
  "key25": "5aXt7v9JtfpTLaE2zJ3cQjq9hdBG64hb3nCs345wpkDg4DFimVqC9UJ6HGdJPrxuuTQ1kwDh6vd6PR4YG74gG5d7",
  "key26": "3JVTVD8N4FgLhpmXsVuLwkrig1jxGMaRHkDoKxMAKMvonw8psdP8aa89Xoe3b8UtWf9JR3saeciecZzd23wuKoWG",
  "key27": "5Y9uotMc5sVSn1aac1chSQ5sg7KMW1RFroLfSaxM8ckueRxrWH4adjbFPrThGcB83FUsEqQ8n9c6nNAZgqP9nL4u",
  "key28": "5MgCe8b6joWmaEFaZunun8aUK5VbjUCyAyJdCEfjQWE3125kJiQXJ88qznbx9iML3bCerc11WFjKfBNDXik9t5BH",
  "key29": "51R4XKuwPLeiajTvb4XwZJeopw8qXTE7W6adT6gzBWY4J823kSoqyamiNWNtTXqbSnYmYoi3iEq7yNKEN39njduN",
  "key30": "mKn1MLLFnVrmCV8U4J2tHbyubtPWyNH4gGc1NcBmQ2LgNp25t4ruZaHk8vs6nMGrbrn5E3F4VbBjCS2T43MtHCx",
  "key31": "4i4u8HidjZZAghpXhYMFuovdYsvpXtcxBuMtvnmrPzaoHjyYwgNi5tr28xfNW6wGtUkNUUoedFzr53Se8RmSvoYF",
  "key32": "2LYALvxSkNLTJBJLZ3SWWn8uXUU4bTETwZKo27HbcMaVEJCsSqwyF8ecbH7BiPZjgSfbvaSa1CnLJwM9DzLEyvfR"
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
