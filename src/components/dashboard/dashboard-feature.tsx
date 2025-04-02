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
    "5Egk2obLKV6QcLsDvwN77F2BAV7PfvegjoQ3ssYxffGSvDAp4kREg3QVkuYVJzhmgbcsvLB9Rvq8xpLieMACFnVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ghBSnsV5w6QfABYPU2KFH3VHGos1mv2wJsPvgExGkr88yAPmPRsdT8HQMMZH3qBJRuV4iChLfukA6jd4b24NgUo",
  "key1": "4TXfsPy5fWRos66xQ6kEuvFs7FUQaXgqDimtH2DJ68vVRDzK6ZRbomhS4rnqpXNq14HqgJZMySSXi5ehgnE8xEzA",
  "key2": "5LVnNTchVXysrGcm8yqrw3UAsfrKZDQNG21zPaenMYHnKwJPqJbxcFm4m9rHftrCPkzuYFDpSikCBedWBg5kwW4w",
  "key3": "3WTXi783mirHPsXZJQpc7adFanrJ4tvh4V2W4297Q51Gqm5s8Mb6qM56NTmbyMYJACaYhWGjrn3kaDYdGXGUXYje",
  "key4": "311qmHDQrCUiL8hzC7aXa6f1qzwkTczgcT2E6QcxPyBdKHc1QYSU2fjxh3HE86Hncep8P3QA9dPxRKLLSke4iXBY",
  "key5": "tHrDrfkUHfq9Q27AP4HP2UYFtTiiddYdJPDKTzLCR7Dy2Uyh2rxLoQykokjQZT8en4NfAUbZdDN28XGodrECNc3",
  "key6": "4SRSSw8ePUURCciuohjJW35NjiJ8CPWna9ScsNPPYjQkNCdntDy4czbpJej7BMfB4oGke5q8Y2qm5jTvGW3wnCYP",
  "key7": "2r9cKhgXxjzFN7r6gravnA6qhrrbbj2ix2kQjKs2yhRaEANw4eYDKpsNtFqZQXXvBMtzFenmfsykxdG58pdixaDN",
  "key8": "2uDGXcasNUe6S3qUJ79maBBamu5qHgwDbRFmqb9Q8MAGcoD4abpvSCn7ttohYwGKMC6L2TX6VRf1tQHnKfzr3yDD",
  "key9": "5yf8aEwvNwwXDFArNHkFGnSP5MedKdytgpiB3wEBzfiGQCZ7SYkHv6uZuFgoRddjgFXqoJiaXnxvKg3wY9dpNejN",
  "key10": "289meUHaV2UWMKX5B5emudRxnwAycKkr4VZzUa9YrvSfw1MAYH13aHQeHPN76zoNrjJ6d5nLw6h1EgLWwHcpKZtM",
  "key11": "4XfFXPWJy3VynzuJB5x8xrwd7DmJk8xZDMjEZYXHVbV6RbAkewuP9ifkBX6uWZ3RPRSBojHWjTP5BGX7D5WVYAAZ",
  "key12": "fbraGkhacHvB5u4Yzo6Sh1mqwuvLBCJWFizFBS7YQewCrZa2cokDejt4GJhhWYYSDTw8neQFoNZ9eXhXYFpj87n",
  "key13": "EjX3xZMztZqBLsRPymR2huwLwuPqE8C7rJnMDBbHVVejGTUJEtMTAye8tdWGK4RmKoAof6UfLxJJ769io9SgLPh",
  "key14": "4CVfvo3jms5pGK4J2ovXw2WfMXcFhPNX7vvXh5ZCMcNJaWFEYKjuVvNf1SXwCm1vopUWXJGc1A2nNoJwCzppufTD",
  "key15": "4696o9VoKLv13gu7bsLYBXLur13XnzRkbAmtTY37yGMMKWZXfJLtbjfjQrXTRCGoPrg7Nzi52ZWBbbcZyBuvvC5D",
  "key16": "3Za3zQmUpqeUewRzDS2dge4YQ2NxtUTPhi3ZRTZSG7eQ3YdsNHkpD7i1MiGFA6Vr4k4nfubq8DjN8GTZ4RYwqoBi",
  "key17": "n7KKuSfojankYdEnU4yjzcvoVzUAq8EHcXJTKweHApt8TbodGMnoUxsPEpjXhL1iQ8ivx74SusPQquxbqeyhvNh",
  "key18": "ERDdnCjNcPDwWvL19KwoNcTnkRpn4ZX3PboDAbwaFDbTLaz4kNnNkn1jAsChtcBXiKScj55RCcrxUGBG9ShcE7J",
  "key19": "4L35sfCcRubfkjxBBCbVC4u28JTVcW8x7rnegDTbBTkWPiXJA4GduvWrs1V1ece4c33ZhxXX81JVaVZn6rWTrLsj",
  "key20": "5RHHKHZH4n3VTmxFfXfupZ2mHVtbFG6UPo79RVZaWaBnxNVZGg5zsh6mb3XRc6zD5zJYYSBMb7HBUiSzoWr73mtH",
  "key21": "2u1bVuftCzwm6A2SBEUW53n7CUMs7QhLrkjEpHEkVSwQne55q68jcfa8mGGphMXiaTeFH72oaif2F2QvdZXstvWk",
  "key22": "5nLHJkhFyUZtniFDELi34CFUeWFket495vYQ6RjMoroT8DCyYWd2nnGTjxGWgnJQfZB7pN8LwDi8d3rLKef1dvud",
  "key23": "31sbZoXygCB8GN6SUHPi5hsqoQpyEkTJmXCCtiZqqiCSWGnVxhCWtNb4vy5Af5eUfXstDD6xU1thJzDPh9ijGma8",
  "key24": "3EQsEPj9wPkPSqoV7g8R2oU3VMDM5mTBczwpXX1ndH4DqvvHm4u9YbCfbnLkohxqiQtqmgbg6YAEvcphd5grUBMT",
  "key25": "8xDrdb4hydqknZBnxXP5oaZ92GnJqbX3mzN6cG6BuXSt5kza8rPv8YEam1p4imGnVw3p7Q2Atz1re2CToDgP2Jn",
  "key26": "4QXgGGARzqxk925m7HMHBbidMb2LXb5L2t7CpE9KqmZjFL6EUU3mqqDRT944vpYF7FhqEXaFo7o1yn9gtcjMAoJf",
  "key27": "3RuX7AwK9R76LDfiht42gH3Pu7T7UxrmVXSBhksyxocyvAXmqucvNXFa1BDiYSkwzYGgN3XCwDSZ6oUnhydYMw2p",
  "key28": "4R4sj77rwVjbWFrLTnAeybyrcBzx81RhbmLuJUJHGkFPzp5d6Fm6bG53brgoWpGnhduNoH4B3Qmp7asmUuvFnQk",
  "key29": "4J8NvRYcMGsLa3q8MjaQFxSnLqUDyi9MqTkcKzAGunUh4Wuz6MuNWunoMfUbWwCtYx5JmfyUqEKVQV4J7QaRzCxG",
  "key30": "2GN5VrVVkcBNYG7LJm7S1biFcfUkGB5QF4EMQzYFkZrvsgRTGZnbAq3rpReTWCkcHd1fN64EV7ZVehLyrCdMqNQ9",
  "key31": "4yAFqZDCv3muskMi1K9nSRjt1skmhTKQ3frGDhVEtGe6Z687DiCKuwhwfgF3XFTM2GjvQBnepFiWDJdRHhwWXcWJ",
  "key32": "4w7WbzcPZt7znwJ1MqHJjfqqFnzqgW42WxU7qff3wYEQMwQ9WbKAZiEno2HNU7qWGDaxLKV6Es8YegjxoLuVGJ5d",
  "key33": "4TozCyxMRR9M9cn6RiwaLUUZZpYBNEqW5zAqR6hYYhvSNaJRxNeUGhDbvMZiihzc8h4CQw4WunkLW7jZAvvhqj6r",
  "key34": "3k3TSiLPTF5xGndDaqZysLUNor1MoG4khC3sMnsjAR5cAaiqchaRbWTcxYnc6YMBfS4qCk9rmEKnwXS5cmosP1Fh",
  "key35": "26uaHERPYJiGyW1aHDj9o6p84F2HWkTFyi9B9NYhSJJdjNXfVTgcLa5LEv8cECizMitYF2PxAe7bGMf3gpUQfYok",
  "key36": "3FnERvTCu1S9VDoe5j1UcHaiVHv2m1qchFzbrZzjJbB7farvVQzNuCsyxDgR5MYdF2ZhUahxgXMbJnqp6XqX4bG1"
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
