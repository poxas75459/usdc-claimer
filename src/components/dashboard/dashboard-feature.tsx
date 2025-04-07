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
    "2gK695hcz1QjitZqAUbyYVFwAvEKiMhnaTr6v8QzqXR4yyfcQBkvEBkvgEuPyHcNJ1jrU4oL6GvTKy5vwFVNXbbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QUsRcuwnMLj9ffbo3V3unFYqdeVDeQToFcVLNr3nkx2BBpTwHTFbvVHzsxBJfcgUzwah5fRjJfPNr1g6uoUzYU5",
  "key1": "2iw161wRMk4X1L4twZTcLU9nEdvwasCZxnv9wB57W7DeHjHNaAykYvp9F3LZJAfyNHw8jbFq1iwgKZFjsPW3ZVcT",
  "key2": "2JuVGRAjeEYpgeMEW7anAqbgEiudqCyzdJt6iwa9Zpwz19BTAZbB4DQGwEu43CW7twwjvpPWtsmbGHKqafyb3ACV",
  "key3": "35ZZW89ra1dc9Xe7oUE7rjvULJ2eXMrpXeEhTUdJjZXMZMQ99kgbSJBRZtGihVM8pdq7PCPYcnS1ug69e82XgdF8",
  "key4": "2Aii4Sng7KRsaA8yeRKVAg9NhENeEjVHLnU9umHhVr85WAUA1jwVEYEcPzUjq7AN7LH77pzoC8YgFauaDY9CvwPk",
  "key5": "2eixXvmbnq2YQM8K7Ws2QJ77FSQ8hMuCSyu34gCdYRVJwKCYuBXkh1KjAbPkLDXf8hTnuG3kqmDzQoGq3Vhr1Eug",
  "key6": "4EjczmfB5BkoGZfMqRejJw2XjmYb3Q1HfcMFASq83YU53AeVXnW6NjvSXonAzrtnVKX7vmPuMF1wdNrmUNMm7Ucw",
  "key7": "3ScVycSwGyRXc1smAUcbB5TvWxCvxfgGey7tLLLZE3JhBmqLAzCHiEz4Kri6rn9syKSXftGnu6AoegMT9eZFfPdK",
  "key8": "3D4HTwsK9quRpdeF8nDe6GMQHhH8E1x9pg3kW7rJYwavsPTijaNjZepLHoUJ2EjDrfLex3paC8bBAPa1RZjY1rsb",
  "key9": "4y4Bq2JW6vyGCz4PyedQWGYdZF8TGs4gATtA2wyBkvkKtWv5HsYwqUGPfnNmhd77thgYk1tQbTZ9s2PENxC1WQzs",
  "key10": "2kiZQvHhCZjz8XPWf9ScJd2ELkZLXd25vpawCFhzZgiPYFERm8Cw2pS5ioomvXmBmtkw3jL9yHRLQRfm4TtemKTP",
  "key11": "5RVCD8nYRTB9Ret4mh4F54GLtt39FxoFKrsCbZF7ATzE4f3raQLNZKDS3CMHXUufmbXxM1idddSatnasqwVyiaaG",
  "key12": "MoGeUnCUFufNnWUmxBBGtMa2rgUqbfYe62uJa1px6Rq1v7zZDBKB8YswZeU38K8zQGexFKtHRE6cacSZjMVQvBP",
  "key13": "24sFKk7fbD76huufEn4Rfw2yQdkHM17Ug7k8anHBfKoZRaPKrzQY2Q2Zp7NbSWcE8gsM8NkbRrFb3sV1ccxbG22i",
  "key14": "5wd35NPx7xYSSgEwNbLiLfd2rprWTKaqFVyKYC2hRVuUB6tvupg7qJppff6qUjuR3WBzB6hVwcJ12WEgFQow3d1U",
  "key15": "3GcQCur5MS9YS5pyyNqfxinspCwLkSckEBUcq1KJXANbAb6qjV33gTkRgS61bAmBvKqmjKjyRFaVtGgmasn7pqNp",
  "key16": "Eq2P77XVnLnYDzrDBs8iNKUVPW4kqua7n6TR8bDviBs5pRJDU2AeJXxMLM826TprSxnbdTKJ8Pkp1ZV1MaqtfgQ",
  "key17": "5qYKSiZfEVNNiyWLJpfKXp3UbxAfP8xmmfTEscLdHMY9Ei79sivpmYA4mkM6ht4xcxWoa7qAznU1ZZmBWfSFM1cQ",
  "key18": "39h23SNXFnTUAS66KQqs1Qmd58cHibR5QcGJJaxgqDZsgra79RZAaSsamzsgRjyiLMgqszzNVzczSo9FtVKRc9U8",
  "key19": "5fYZenJ3q3QZfR3r7tc56BvJTn98qTPCkCPybeDaTvKWLsZs1yfwhQqxdDXmCL1qwKiSQnwB3xiihtMCwiWuqTTF",
  "key20": "3Dnona6e5xfgc5dc8WN4eXkFvTWNiySWMNCfr3dTUSUUG281tSmGfgqQ9zgHSDZs2xuqPKSAKYfiZCQtYbZy8J1t",
  "key21": "3mRYWvHXGdv8AYDH9YGiyWajvgNBXz8R1BhiqrS4aKz1F7tVofgnoFC1WEr4oh946pwcPuwUgSsiMCJ8p2ModYGP",
  "key22": "2Sy6iyYd67Nzdy37EDnw9zGRqJXy6JehYkcKPqQA4JywrByztXiSSzFTojdYbvhehudcwkeiR2nvyDkfkKif45NJ",
  "key23": "3zeLWhkb6FJz9WajPudPS7AwYtujrcMNYfxbC33Brop4aipo69Th9kECDBddqK12pqigzfjRy6gi24LGPcWyAbnZ",
  "key24": "3ZzHvzFgFFpU3C55yYkVQ2sUCVAxwg6Zy2Bg1Hi5vT9tmM1v1cdSqp5qxczwdwV3y6EnjoHzfvcBiD8anphsv7GK",
  "key25": "2iiaCKUaDWLrTw3qDQE2mPAfKhGZBYxeQ247NgjR14VonjhwHKk2CM3hQkoyebsGfs7fjLyLqr2JTJhG1DeGmMrF",
  "key26": "4DwDSSgv97L5u9rKERFRSQ1AXak5bGK63ETpdQtbuRetiA8Wg4S1oDJwV2WCXNw8dKSCHxLfWH6724yPkZAKunVm",
  "key27": "21JNxVLddpyta55oydy2igrzaswzgFS24aZikcNC8GMWwpta7K13yVR78zGvUkNz6yiZ595SqNbPo4SU4b8ARLNe",
  "key28": "4rLdbenFJVpEmoMCMp8vV9PP9iGfMPGTsiAJW4KG6CTdVDkdjswyfsK31GXkb9AFeQ4mKFF9hQguvr8cQZbLREZ4",
  "key29": "5vKEx26xkRyCVXZwZXtRB3cKsbx8PGn9jxJykvYPqE1kkZxteqtn29hq53y9DBoCEUDm26XQmCL4FhyWeWbXxt92",
  "key30": "3jyLoDVj9cjPapY8K4ciQzGLktcnsBVucEnbZ2Eq8J8JGskjKBos6jxCAFytebsjeZ5nuHG53sxgrLEDbcdKN255",
  "key31": "5ymvgWX4ADHdwhCtbAyg8jUUtZDnBP3La9fkKhtBWv4C9z5Af7ayHPZUhfBif4b3UZsdSRKfjLB8pLTY3T9ZFDTA",
  "key32": "2m9HFEQokTRCsmNGpuXr51tJxRrA5RfCLh2AvpcN6xkeUzRmUFLJnh6yFV3zvkscUTPXtav7yrjEyCKK8P9eUK3d",
  "key33": "2EsTETtmUyrNtpXRfk9mWL4LRGttBw99PbU4dfF1k5CzX3PJVkyjCNQbZm7xzQJT8dMGBihGeq8H5R42QTmTw697",
  "key34": "cd4v37haHnFpUaiNAGGNgWrTWbbtmP6DiAVybEDWeahuwVK1hd9jFtPDzFbeMU1cYKZ6eyq7vPNzzayN4uQ2XRU",
  "key35": "53jxGyD6T9WmRfgsKejbQm4V5M3VzxSzZBB4SwavPkrfooKa8Fmyv7E8hZhNaV1i5JmdK27SdnrUWWv2TkrJC8f4"
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
