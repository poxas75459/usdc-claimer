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
    "3MkbSFiFVMAG54v3okWYFdDmKZUS5DaqpZfULe8h76cyYj7YNRznADZMvR32qa7MUqPVTmz4vDjMQfeGRZpUHKm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZNcmUwoipKAziCKnSx9RqtsJyPUfhNDvYbbF1bHnNCwHFC8Jivzk8xn38LULJmJromyqcHp37kiV3yKLR9CD5kh",
  "key1": "4zRDdUtPmMaVDFbN3KeXv9AdzW2Y13hJyms9FZaf6S6KBkPdPmVJBLFEwLXG4e8Fx27seagJxy52B8QbsXmsJXdi",
  "key2": "2JRZvc7agvgQ2md9bqjxshfJQ7sb2UmB2AT5zmjQt41XmbEz6MfGYDqfMyCddiNQSKQCzAGR6HUpiRmP6g7qb4BD",
  "key3": "4ceGjYVGx1uH9CVDEBGq1vy8JFnr4mxooBRSTjf3BB2J6f2XCwWyPyDmz7UzKiLKcrM67XjwmKrBKieLHtGsGGdz",
  "key4": "m8zT5ScK9J7jaXwKGud43NU9HKungsYGfDZT4qm1442xNwQgXYi6y9HfCGCd9zPP8noT956C8oBgeNhuZuv936U",
  "key5": "2WhXz83vT2WXM8RXhM2QBjrRTCnqpFVcbHAs5SoMxcSfcL1tdHXLMazMwjwEpvt5q7Zm3qSDdTvJoMewYbKgtf7A",
  "key6": "LDwz3QkCrv6vCD6ZB8hRZZbhieMMSNobi5uNJyFsFp9Fkn3T9yb5AiwJUikZwAfhY8wcvSsWFArCn7J6UYcyZ6A",
  "key7": "3Msrn78JPPvhXMC5m323TFaSquFgN7cxLJGy8cfw5k42Yc9XbEiPNcw5MppzDf3uszugEGcwYPDsBt8oHdYry8iw",
  "key8": "4je5sELx8qVfc6MJTFxQsyRyX1s3JsczYxoS4Kxo7bBEAruaKGFJqPmLnseAvJU5BWGVcCLWmWWUSjZ3dyN6AmhN",
  "key9": "37JJfdtVQYS9cBSq3pPgwNKJCLJxusuWQHMih2K1kwXZ2zXNgRu8AeiqQMahPXSvmkA2VrWyD6oBYkXYGEJmtyD9",
  "key10": "3iUtJ2HDmtZhKDVVvckMa5uhyY2Q5XtHuM9jYmqTRxUag79Lg9KWbRwBLmtXkfdNsWJf5RFhw535eBbSZAGdRVah",
  "key11": "3Rcm4onk7Ld1pAd43pctU8ABJiJtcxmGwjwYkesH28KeZnW2shd75sdv6DyiT26eq2AVqKtnmBvzugrU55knx9Tf",
  "key12": "5MS1zrEUzGJT1nocDi4Gv7ipB3nzWFd4D698eM3CBzkWTSdbuJuhKuxJwmJnP16t7TQcrYqyTCqZeY1tPygtxH1j",
  "key13": "2huAT3LVoUTkwvihjrseTTmpjKT8pnF5tnYaMqVTt12wzkpYgZY2HKfohBWEjCbLXLPKrgdwbHgy9zub4ZWNtwm8",
  "key14": "kVPTdDRtxRAfmbwSYxcjf4r4LZaDStJPaudSEFQa8EeiEbsAutwyPUhCioqjmvK3rmTuKertQi37Aegb1AJVrxs",
  "key15": "2g3PSzEVTWgnKhQQSQzF841Pia7owQcxw4h9Z4Hr1JLaCA8uLEMqnDNyvAaYSXd4bgmb2DtHqHa2nMiK6sxbgZWJ",
  "key16": "65hdHAdTAw7ZJLQcsAR1PCY31nGfFqjenXK3g4RBc6psBtaSMzZR4uitLNFrggsSFBjXN3hSHoob2L4xgnWaRRL5",
  "key17": "2yDtSaLfWvKCcBHY8TrF8SXpgCY2NJKoujpzExMdGYjyDq6E9ZDVLLEvTMZ8GduUsm7fvkEpWhTgPQGgg2AGqZRh",
  "key18": "4tRR3xSKiNMCeVu9xjttViPo6hsZfDAzhZoX1kyLmtjYVm9Q3XRCv3TkkvjrfyvQ9cvapGEUSjLBLj6Zn25NCj1z",
  "key19": "AV2yCB4QdbS2UAZXkpN9FcPqRN4KqZ4MxV986chV1QRnzT7PPsXdbHULiWaUnDas3CWfeRoBGuHziJ1zrk4yEc1",
  "key20": "35hEgJRcbiwW9RxSZCy8N66xYKZZScj5juQvgQFkwFheqowBkceb8WDjdaXBCCxnZsFqdqkaBzYm1BCPKp5TqaqJ",
  "key21": "3U7ZRYNd3v3GJcfoE1TZ6winbmd2semQXccCHV3GqC4G7qQQBVbhHBBpxS9zwWWC3TwNzen4FiZnd45JBGkhekUj",
  "key22": "2zrFfGBkUsbtk4Wdwgng8uuf8QJ6Th3XKPPqxw3e448nhMofaFdwQkL1DDcqRMmoWWThfVsQCocoog2R15xxFhe4",
  "key23": "3qMzZPUHUVnowMWyvcuQekSsL7ps9kwsvtK12dv8HjL9EcXvK5boB2oDKgEZNAta2wuoFVW5AHHPWfz1nJinDL64",
  "key24": "3aT8EWn36djTTCmCr5YmJczY9uQnrvwAxq3xaXePM8vMtAvV7jy6b7yq3D7uWQbDv7E4pVU7wYjkXcVBdibtKbHF",
  "key25": "2CEWLBjah42fSHq3NVzju31boVBzRzQ3wa3qrRVgXWGTPjuw1cvh4WSWFgTRgpqCkcLfyMZM8pbTx1EczaRHjD6Q"
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
