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
    "3peUhpdQSKZxoWSwBPBSw2QuvkxuQ9f2D3P3gb4oPLofKG5tftCFfkuzk8mWXeQLzN9cDEmrEZdbuXwrbvCVbaJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wZ2Qb197Gu1X3fkPwwmiFABCa1mASz7RYytABDxQTnwFQZhkhntxSKDHrA9UT9TvSR54BHTQWuyaCgJXJpwvFrZ",
  "key1": "nfkDLTzDLt7BkGiG7snQRBZRNVEZPmWs8EwZiBrU4EDPWz2PvuRAdjYyQbMa6HxLKCYD3gK95cAvYUP4rzagzN2",
  "key2": "3FkrcxUKMSi8DV4exiTeD3qqqDAWtiUbeF1pKQpjE53rsXSwN3CY3kYmnwMAkixSzarPiDcF3H6fR3ezJDyUKG9p",
  "key3": "5r6gm5hu5r9DUdjUifAdYZTAnWG3R5LmWZEzhdqAVssbwLkZLHmBMP4grfKnzhuBkEkoD45Ntfy5H4ZQxTG6hS6X",
  "key4": "2ne2pG4tMwLXzR1cTGxfoyXKb5NXoobS58h7wQmDbZQ2sNE5Dv9gg26syA4tKcMjK7dRcyX9Sif6VPbX1t4dvuxM",
  "key5": "2C66D7vwEgaemNKgoPXMTeWSrV9yMdaUzKbDYnH2wiAUEsVLBncSABGzCvL3W7w6tR7As69SGUp8FB4KgjGozfQj",
  "key6": "RkQw8UUVHsY3xhRcdqCXJLDbyEq1LtYxc9a8kaS4PrkR49BUQ4qdn7ukdJdvHKHChuT457CBycQKBB1mS3wFHkH",
  "key7": "2UnntWLoNBHkjKX2K5J26sSQsxFVQkpfWq4fqRQdzEf4uLus91NA9AXPinazfbkwcCCLoAyM9rRgwLN8VbbZ3dYg",
  "key8": "2BAzeY1Vfik7wQ5P6a91oxFz3xpHLJrihDpTmFXxoKyajoVsL6g2azL3uLC6hk5Z9MbBpgfE4igBAnbcytGWL3jP",
  "key9": "4rjpA4U9k3ZvKMypVjZefweGcUoG9z71jQdMFPqHZdVVmRk4K6FtKpmRuQYdFA8cbfCWFEKfRK2xtSPsrkafyTj5",
  "key10": "54k48y9gsVjShCtUAG29HqsfYudj6VdeGf6MqNyZS2GZRQHdwou2wTAt4ZPcpbVzkwPv3uH2HnhBqy3ti1RcSiq2",
  "key11": "nD2F9i5kij4uozokNUWA6BhDvWW2HB5PZPoRDxxC5VZFMPDZXd4UgueVfxFDLKgn4gWPvSzpKnpLJJocmmjAngq",
  "key12": "3qdRHAbYtHvY2MhFocCHX5HKPh3N37BADhL3kMaSgK3zYbDgSrhNuHSjLLBGgR12Ag2wPgWcYvoAnvjJH6AUdcSw",
  "key13": "qGnGJX31cF8cUwUwrEpLWPfM8TariTMVBPDZN9MAFVH2EpX2tFC9detnLSrZJrLxbc1sK2XMf4UJdixvobXFmju",
  "key14": "5CAkjptsH5gdsbhwNNAvXPMxcvSEVs6m97p1oGHWHENV8WweFXx7vHYLruZV7ZTFDw8V4vk3WMW42eenLNZze73B",
  "key15": "5UJtUph5jL9FRUaKq4D9FYezYeZyseEjZ8yATadem8wANQRbn7CnmQXp73TEk3WvEkRkYgx4GZpgZ8FJYfRtu7eM",
  "key16": "3kkEbE3twwu8Vw69XsghYbTh6tTwMxngcRVyZLFPmb4EKoxtd9d4AfLxF983RHFhTzjVSUv2XnHFkHGfe3MhELH9",
  "key17": "43zXsyoK4cHVpCHMDq8C459SKZQdhfn4AjRx6vVVrZQwAC91qFinuUZqvn6NQczJ4MHKQAnxYiQFsNsf8EhBbzmt",
  "key18": "4YF5QBFy7XQ9fhjmaUkfrZi5zNe9nLdXqNRQ3HwBd4pyFCREeVSfXKitpQzn5cKU1nXm4a3ZtF19v9foFdA13Xt4",
  "key19": "EWESGGMY8WkDRLc4V6a1sj8RuYd6TaRrRxuovTFwxmSk53DWhFKDythceATeo72Pn9u34wzoESf9evgiME2n37u",
  "key20": "5fpQbpap1WxJjAGJvohqZ6CqJS9TX33VEVUr6ZjNo4M1vYBpw5UtAwpfzy8xMqXS7UAHiQLSEh2GVcFq96A8haCJ",
  "key21": "2V6EeHoG594JETZN78h5m5XtRp2SQbrfPZFwvCCd9wcq8BfY1xduaaw5kKgFraAMKekZcygEFjya82gJXAzXAbw5",
  "key22": "3KvQa2VutHjYgxWDDtrzxhmUm9TsbuF4B6ZkFr1gVESkWPD3icWwaiAXpXUT8eo7oXgEdbCUDSpwMVboc2eonH58",
  "key23": "26ZXqSdi4EoDG9xFTaXXZteRJmmsLcHeKK4DHyY29XaXGXdkc2Fhxx2ZeSSnZ6YwW6Rfta7bgHyrgQL2WaGxGaCB",
  "key24": "TxDQcdzW1hz6WhXpA63rGjBWPjwW8XyW2wBQBCH39HwgHK5fcqahfQq1yuYN88T2RQtABhcihwFSpyg5t7cEZrx",
  "key25": "5qzrgq3UGn4amiykQH5rejxHaLsMokueYoeWEfVeNVjmanPGYhCxd8gE5iMFnPZPS3MYczFBSnB1Gd9RXykpQZWT",
  "key26": "2vEYgkvkAPboGbbwNVtjrD2p7DzovNq19oYDBkinwGPRSgKHwBg41JoKZSbMQ2Z9rHVnGX2juuyQovQpMh51FSYV",
  "key27": "2rszDH7Kap5s2QWUgWnrht793TwZugxx9kJAG1DavdsP4BMT5vsFKGDHALvexuQCqVHzCwPxyPADsTmxLgTym3be",
  "key28": "3zNYkD9bhBFpscEgoWLRYXqKyo7MSer63wu5BjAB9nZzAjQdR5L2Ag9DCdkziNpZmmismvaTczhRCUx6RkD4S15W",
  "key29": "23dsWTo3hiHcgoHLd1GbdFnEyK3P62VHamvEDDpRKfkP9gBZKssMgSjoWT8yRyUCcfy1WP2SDofXCAGruJ37hYAM",
  "key30": "2WcpUqGTajh3e6trfwHV53EMR9Hk7rqoAdrrZukPdxcqWTv1ZBGi9TQbQQy1isJoEGuLNPa5uXeGmdPvetcjbXKb",
  "key31": "dUg6rHx62PxokL22TDTeDkGpHq1jU5L3FoNYujLwn1cuCE127MMVQT8optCw5fLF3kgREqGCe2UiNe3DdYmrcan",
  "key32": "2RV6dDXRX4V29DMJGYUYfXoXbJvZ4r646A2eaFeJpW6Sn3LPfma58uCrmpP9oZfdFjHDoNW4rRn1nY7v8BJSeATK",
  "key33": "32ifdrBrWGSgJWxVqK1jJefBK5zRDkc7VYeJv2mT7d43bvEPKThB7oCHBuN4wnJPEDJSZs7eKppKr4NKiYsaAX6i"
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
