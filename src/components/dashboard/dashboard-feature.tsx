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
    "MisW51b4U5uZAxA9iqC4tWWfPWiAPpBZpNBEKd2wJfRNgJ476FaRnmD4iK71Gr6qJyubcMzHLoAX49rZrc3FFNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3avqDtQ2URbnM6A3BtFWrQVsCnQKf4rsvoMcM7CgnEZyMUM1nEDrdkaY6hX627M4LPZTDp86MjHuZGkkd4vVEQbU",
  "key1": "5WJnwrDEtJaZihn5CqxamRc1acNLqmCpPVzy9XJdk61sPUCSEJjY3qZjJBNZGBuK6YD51XjCKZScxJDpcdXPpaPc",
  "key2": "5hAc7Ngb9SGN6PJw8MyS8Rmut2VtKvNqrQMULUapcUgqZCPJWhgMVt6H9tfRnkhoDD9xWiFupYjsVqeVDxwHrKmQ",
  "key3": "5rNhWnm9DiUFyQqSEzdjG5D7tmo2EujSedDydWsMZjcnQXtt6vJTzYHUWaCK73R6Txd5WNabuy5DvLny9n8oQiQu",
  "key4": "3udnqSuGYJgUaETe26t8ZXrTnJLXhgARNDXdxPWazm66w4N5erXtNz9E3YNzLYstVDFao9uEr6Cdsk3nXksyxkX2",
  "key5": "22Lwg7N7RVAgbxB5Wdpa1c2kdoMageQ9RqvR3YQhFwcNmiWZHrwrN4STWdtYHQbLNpXhtkfcoYKDdvB9cp8Ljm1o",
  "key6": "3bMtMnyc6wUHUMe8hwvJjQKC9XEa9dVbpJYb1dCxTG3Qdgvnh2c9RuiqainDKRgNLN7AxFwrU8pNEjMpa7eQWrms",
  "key7": "3hbmznPVynBHZePGnQ1kSoiP3xJh6SPyfZ2EpVX3NG85uCFSTwRiBaiaZ3LbiUfZHoTJYtvb3hQvsV4bUcYowcnG",
  "key8": "37UFxteN237kzdnQWHYEdJxZkseJLoWyycSGDasku4NRSYJ6v1HHyD6MaunNwNRx17md1jLvakWopy38Mk8Typ9W",
  "key9": "2ZhTvddfnQr56ZzoSgWVeJ7CHDtm7FWtYcEpi3vYHMZ3Zvhn6CdL3nyURRQkAPsRULsoKAK7uphbWk9dp77cXKtU",
  "key10": "HmYWVAAXE8mK83x35pB4XMZjhyvT6SFMXKhVhwqz3MNTRuhrEeGatYiWJDFpZpd9sjfx2zTdVvZoXDnreiayEwc",
  "key11": "3WuPL1R8chkshwWyoAw7FXDX4KRKSS8siDkHT9waXhVeqNuJtcdzqFXwdTuZzZYqXQ9zqsJ431EPPk37z3mzmXRP",
  "key12": "34XWtFkKncabMEk7cKeGw9C9n8jzyooW3ubRV9CGsyGXHS3J3w8wvBAirdNwUtMhc89d5peR8faPANjx16ALRn7J",
  "key13": "59V8fmPFhEcGNZedq8nf4446JEg4gXkpfNU9QPKCgyEGvLAQCuJSvTtoTzBs7NfL6NcBqQCfU4Yk22vjWQHBJWF6",
  "key14": "5Y65tvPxzp732PxtAfQbFUNG2gLq5YHdNLuAe3yVZuXn1GgAdnjDKm9MdcwvSiK2F5j3xi1AijKiv3GFFei4S3P",
  "key15": "5u4UU2X5ATiiZUvfqBB6EBtKYKqytiWq7FzuVDuCqd11yqZvmNFjvXG6aDDoiwFCkNrRugX4ndxTMo3pUA9kKagh",
  "key16": "28FTr4d8fZnuggxEUXs8TdkWwWeQW28KqnKarRp4ybsmn36Crg1GkqiKqyEoXAT8zLDnLE6prwFNMsgYSNuGR4YP",
  "key17": "d75aAwckW8Ywu1aiuBn4Tf5oqrDHocdNBJM9eYRdH7atH5TeWnZnYz15vd1qQawsnXeMm5bd7Ezs6QCrDpBLbGM",
  "key18": "4UkW8yDMYF7KgMChDStbCV2NmWeaVpcEKZ64S1e9jgSwFRkA8SWUg8vzTEkg3uc12sGbdUu8SDVfFc4m9HaqQsmu",
  "key19": "4PkNK2b2yKxtt6DyUpkn1SeSUca16wCjekZCyvkNuHsbbBnv3AhWcFxY9pJhvt3PuYgy6qDon3PUTku8zJgYbM5C",
  "key20": "3u3gGKvxwesejvQoQL9uC5hDW9iVv6yVZLhv5KUANe4EnRvZNcVKwamJrutbsAYfK7MxFbVyB9RHnFRMCiKAhmfR",
  "key21": "xDgY4ajKfE91zbMjxp6T88nMhf6Ei823uVTnQnfqk68bSmv3xppyqXnAREeKSm9Su4EYvBuw796FuS6BZZuDbBq",
  "key22": "JvwgB3WuuYnz8XL8j2iDgP1qmmKCQEyyTk42aJ5cV9NTKHoU1srkYsU5fmwv47tmh8MNr3UntV2YXCxhgAskGPE",
  "key23": "FqNVzwJgieXJbkcwzrP8TykdmpKHi9WQPUTeYdocWHgVWCcqM2DdURXg852Y2QJWM2d7cvq4RnasiKjGLQPSUwa",
  "key24": "3iEb8c1Q8mznyeR1RzMWVnahswfCzj59M3akxacrFcSY7bXsYKTgUL9HgsWUodDD7rC9tYyyo5zj65GsNAMBuoAk",
  "key25": "3A27Zq8t9qmWRFavhRCHYVTrove4VuQcuGcExF37ECoioaNHNjvuAfrHsEbpPBBPuH6Y3gDK9hztRRVVi2TKP9hC",
  "key26": "3Z7xzJ8DiCy1zfz9P9BCFNDLftqycrzMxczNY8JudXysS47m8KQP3HqRYZXuy8hWdmhMq4BcefnyPRFJB7M2N1nr",
  "key27": "4use9EFpvFG7UvJKigtfJVRo9CoFDg6zxwi8YiW9A8KnUsp1R3KvZjsL2K9pFRNNHpw6VB34bEBYe3Yp2txD2a3F",
  "key28": "3nPBDBi7grtRtQRN27x4qV4PST1w7164fRhRLZtnZ8uKtv8e9EHZoTaSUBgQRfEPmatwL2yW3Q1JxoCo4wAiCWjq",
  "key29": "zcFo6dNb6j4psg8eMKXfttirU7VrtAx3VcHjUfmaEqd2EraUmyffHNz8Y6bGap5Zr7nJBA36w2Rbszc2zUJdMbS",
  "key30": "25M8BCiZdHLi232NmHmebK8GoxHrMcJFe2c8rQ76eryAtWgYXVcEUSUpcPsa9H4Dx2CwKHM6uAfw7fSAKqgpqA3k",
  "key31": "xttgsgJpxfhDaz2dSi72fTfTro7eq1RvV9Jua8AkR99Y5cDcShZWFdnzZCKFktSppqkA4EEDnTun4a7HEb9QvLC",
  "key32": "5z1Pu1axGEc5pqgt53CxCD35krL2T29hhu7ZhPAabVH1Y3XdXAMEVSSEeqPzAqUQmhhUmLJsydjNM9iJHHRQWYJX"
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
