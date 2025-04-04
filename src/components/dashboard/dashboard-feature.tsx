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
    "p9r7swZQPjKqDdewu1EiayG5nLXEW1fA7f6yyTJLVVg4EihMtLWi5wYGtMHQg8pHvnJ7ekjhpNrHLWF7dX6ZuzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ukVvkuK3Ht9YmzyDt2Ur9sTZtXhUodQtDHK1qhJMxKbfJZNG1Dymh2TvdNmDXSH5Jxtep7S4Ac6muvFRwArS7jD",
  "key1": "64v2NS3gWWqMeMbDjTjU1Yb3qDwg1XuUTFDpYuuYX5o8Eo4p8k6KFioESREoAsWCQgBnY95ZLXpztrWfyJs3mzaD",
  "key2": "26MTQGu8EnkEQZ5NNn2mMV9j2wWhGcZxwqE8rSrhyGa4qxmN7Vvj9DTF43itB2qAfA9nsEqtK8e1upyj29osM9Xw",
  "key3": "4wKq8aDWYCf5MwXaddNus8Jn2EjT2Ak5uZMdB2fWZGssvNCDPRfY2VtGBoqDvRZpw3oTXAa6iuJNWMmenJPjvvKi",
  "key4": "RYvzHAgGxmqsan3feipo9Q6bZSNSGoRCQJtXigtUB84V3DSxYNXFocyjk4JEujwPspQau95nHH4fCC4gMoxwoYp",
  "key5": "37AqBectanzro4Rx6C8ZKBSTreHh3qe4Nae2efNjMjAmoqnkKmPXe53GJasFNczdfdxXCEB9es3FTfQ1mmvj7M12",
  "key6": "Srqsby2ychD1UHBfbbK7rGBbn7sXVppuK5Ss8cjuqssVR2VksYqQbTaBceuBvgmgpvSHJUPj2Nrc7dSTsF31fnh",
  "key7": "3ZodAzPMi9kYRiay7WsxukAc1CJhDhNU8AkEPKGh5Uh7T3AiqbjAguQiKYETimuF3vtVev4q2NEvy7kL9BukyX6D",
  "key8": "3E1BexdJh6qLtJr12cMzb4v3iGYpoKMv4p6ewVgp2weQL2BGXTQGtmnnUv3x4XecqdSahHEjkbNsTsqEQu1kRJS2",
  "key9": "5zs6571NE1vq8xCeojdiJ9XtsdZgM1J9mitcabWp5wrobJF5nVaQjXXCwggh9RjB2NMRvThrj3vZYtfm4PTktpeV",
  "key10": "4M6VZFPyhLBtXsBXNeXMKamy8a9L6MKwLceAmrGmNZqNWQoPhmVJCHSXaGdydFFudjvje7ZrECRnYutTaLVoBFVL",
  "key11": "3YCG8zEaKbemZrNTARotZdN2ens97CcLBNznQwSPnyuQF18TGsFwBuqRTzmhj7CJDgThYUtUgw2gnbdY12UUzYcE",
  "key12": "4dWdXbu4eZSkpFetzUmbhRbJJVyEAGMNAg7Ye9SKosKpDZ8jUWyd6zj6hssXVnNPdLMh27GEK7aTg7P67LE7J9kp",
  "key13": "5tuq5JiMFwgkUD83ByGVS7q9GrtRsv9Pe2x2LhuqLpU4K7HARWvMm3Y2pP98kzfd1ii9QnsbqDUCkinzTAE7ESgb",
  "key14": "2apYSad6Rgog3Bu7SvZy26egiPVV7znkpxveA2NaJXnG8pta5WvmQd8h9u1s2zytPgVTKQRAvK5QQTBUN9QBZkkC",
  "key15": "2SUqwp6qUHmHEmdeUTnNstQHsrLc3Wz84eVMp3PVMTvMZzv8YyFDNLLZsNX7yBFQ5uSLuH3ytE1C5kgPbF69VchT",
  "key16": "tK6JTyBNNPgU94pJLiaHQZ6Pr1ZxXW82faHsUBPssp9YNByPxS9A1NKNWUhd2FUDdDLkg7Vbu6i5a67rBdiTmh4",
  "key17": "PXai3CWubMg12DcAZ7jiRLyu3TEM6HUm3aXLQ1aDUKDuThRCMpWUMyDhs2BJLK97AYoyBcrkbUSNHaMvRPMFgSY",
  "key18": "2B12XfPTk7ETN2LEi748opaDHFtjGJ62eEguAz5jUSVRfDgXUyDLDZdYMTncWcro5qtNUNJqFaFpNSSoi2q1AeuH",
  "key19": "48zfiDRZaHfAd1nYj9Ji5VyYHAuXYYH6XDkJvt7rDNK86okBfjDc8fUAtxWZ7zRaVS8xajEmdqbJSUWhT9PBDAb2",
  "key20": "AhYq1uRUm4MtQBKKEh8ozjRzDUAnyxibBKyQTbuowcAs15XBxj66yJUCgNc4dv8q5anB1sv5ts59QMab3fB8MYQ",
  "key21": "3W6LbGSDqrc2b8yykoK47HWaAme7S8i9Xgy5RNXLoSFXmLi3yE4CGJoZszTMjZKjEmUbC8FFBJTSNdGSX2o3eB8r",
  "key22": "4EQG8Lp3zeBUZLtb9VVdHEEXYsrAXZ1FXK5P5v9rhQyuehYycnK1ZG98fNuf99isgUTcorVoL6to9bZM6awPGoXa",
  "key23": "3qvHwyr8HNDshx67tDZHddLUpCcQvk6wJQiR9eS9sUABqZHQbjku6178foc2Z8eutCXWfmkf4p7Zz7oenesNYANL",
  "key24": "4L4KJatiWWVU2R9JANVLMMHNw5BzWpfa5ZvGao8kYF7UNnXsTP8mVLZebKD96EpVPnKmETkWpF3a3ZpxU2whE7Mu",
  "key25": "2APWr5ZNsQYwnKcWWNF22brAe3u4VKZ18MVRZN1Cyo2NpbRJb4KHx2wazYU7EyyJsgjZSvq7HVAzpbhb3J8P1Exi",
  "key26": "5U98jxCjDLUshq7umn2j611fKZ5CKNXECVktpMSJ2vE2xsFAV6mAw1iDUoAxFGe136Q7EZHsa5CKpyjbiwxbdbRh",
  "key27": "5cuUvtbXiHrLTJkAZTYNAMu1VVKz6CEARHbNCCbRNAW96yPuqPyqEuxKfxaHPtGM76TngPmFu1v7LvQQuWrHk4Nc",
  "key28": "4Ey2DkmUUAXYiELZpC5PHiN3XonkiU8AW9c59o4NM45Jn2LFYQCH4B7tr1ydjCmi3vX6u1kZt6r342hRyDLTv2Yz",
  "key29": "3L6jPKspQi9i6USi3gn94XcyvXobenUXYrNwk4DsiEtndMRVXzvEULb1hPAQfzKopMwi1xf15oZiHkchgLo6NX5W",
  "key30": "4xLrPd2VrxdLNGHs45AMfBUyLtwBRxAKZMbCQSgWG9xvoutKdc7yKsnTcW6vd7dyzY3HZjXSAfDkrjnMLcU8pGWk",
  "key31": "5x2JDLdqTd2GGX4fzM8nWPtx7N12qScNvXq4MCiKjZ4pXWCfMWdM1BRBemoZ18roFFHUk4MxRQcQcYxpHqbQBJGS",
  "key32": "yN2ge1otVtTSw8RUb9fua3v7yVy2JTKCi9JfAwMnMikDumAcKaxs9oDPGkxctuAbSdCrbLWxnbNfh7WgrnfUkTg",
  "key33": "63MwjJaBKZLMwyeQ1DSEZyb3hA9QRitJUqi3BH4e7GEMX3oHwER4wHEg5bKkqKRndfxMFRmHqMcv5TFmbRqtwHfh",
  "key34": "33wrZyw3Z6nWY8xbr8iTNX2v9Yvrh1947nFsxW6CX7iEG1mgYFoSgqhXVCRjpbF8Yyte2ZLM1ELk8NB21tjHY4dA",
  "key35": "4fHUUMJTV4aSrqrq1iJKqtw4mQrjtCSv2uneAVtVJsgdUNhaRG7AcocB7A4sF5nBB3CgGGRo7aedKoVd2rxza9C3",
  "key36": "2QFuhFcdKZef6M3R7f3SChNXBhGmffFQ8QoV3PxpGjoSMkMNLzJsCNhcs9PTLTbtYDD3yyk4FDZfJN9jYy7r8bFD",
  "key37": "3SUZ6y6CP8fdinKSZr4sj4F2gY8NsgsHUiq5GBeWXd9xqghV2gZhYTyTB5DUWPhkLEdJw1DgwCiaH64KRbZ5xJV2",
  "key38": "5JLsCfFQouVJqa3bEQUYZmPax6McSLQwMSPFPQWVWrphG12bKrG5CitWdzgJcR2SbPB7g4o18CqHw2G7VfoPtsGA",
  "key39": "4ZSpZ5sn6A5yYCLuV49Y5qNYQhvq87T6LquwR5nYEExZMqTEdtkQT8hWwf6kKCsrTzx7Y97k48kQP1PFMvMEkFNU",
  "key40": "38s7u9k1oGVm879sA38G7fRucp3LYdes7JydHTGijr3EMzHw6duwRkadiE3LHMhaNNbv54buqgC8GpsXhQ1mhzfx"
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
