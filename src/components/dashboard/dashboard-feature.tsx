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
    "5n1TQFdZVQs69qfTYwhVEtXptUtetdc4U9TpbE9wzgwHDQkUmwbtmzVVWnoiexhbpJA3rM1t6wcu1nGmWdB2GMUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v4CSM2CozXeHQpNprtBFuqCLvqjaGRE7WNCQLzz6ruMvukpCqUUgLKd54ND6qVsnkSKit2RpoxnK8CwiNsup8tp",
  "key1": "5EULNNksnFPMyNeK45GkQGUv4mwFLH3DcT7duKDsaRpi8WybGG2z6SoXp6eDg6qBYmN9oz4gNaNQmK97pHj9QpXj",
  "key2": "664bBz8yWWbbh4tXtaFHQxMMm4JbmgnBagWp9iyEPcEhAGyLvFd27Ehrmun4aYNnKfLNg4oSU8YCUTnVsNwJBGfU",
  "key3": "3Gu26Ccmy5R2f1mZ3WGtNB1VTMVANkZ4NSF2jfisJyqePHhzfMfQjyFuPjjigW3Tjr8SrLrY6hQaTeJwQ5P6H9Hd",
  "key4": "5hYJUnMaaxTQmR748rjUJFG8PiDFscUtQ2soyEPpZnpZa8jpkyuNCxzhnzdsopwV3KAHHUdDsCzMAww9xYSSJPEB",
  "key5": "2voGgfUf9NB7AC6JnKzZpCze965GP1NamMidnVZsDqBcdiByu3ox5bZTo2iuqRHbHfKtsqUFCExp2rzodHdhx7Hk",
  "key6": "37YVLCQjTnCcTXgdtTCzk8UT55WDdtsPPZUwyDToWaTqzdzMk3HVhAZkk6tcZhzjwRdVJAc2ZUd7WSbYtauyQun1",
  "key7": "5BAVSoqnsThA72c6LAwPdQ5j2MRNCNZw5FXYiz3Qa7QupYYycShhZEL871hAFeWTVqKehw62FkbKGAa2n1s5cNo5",
  "key8": "4hJmhdva3qaryTHrytfbKgKgCFrYgWepgNzJbnt9nMQVkRkGj4SeXXDPjKekkatxMmB8G36zkNvUFUDbusZ5amCS",
  "key9": "239aZdUfinxq8A6k5ZjUnHTbLz2yaX6Uw3beZhPxEM6Gp6SaLXxj71A78cZb1qWWsy7vjEMskZ7ESNBwYZTX1mb9",
  "key10": "4i25cp7i7b7NRitrozRmCt9YqHKmtqZQcN59j95Qu4GwwY3FrJJnTuDieHaSnaUkrarkoWPv8Jc9zx9qhKbtQp84",
  "key11": "3dFjigNoRyMfEdvDJDn6ygqPVY2giVG7v7aP6pXUur4Gs1sf3ckDyksENuB3sxEiU77bGh2YLJzw2yjA9uPsvZUp",
  "key12": "Yt9T7BUmrUUeHxxP67MQjanWCMcrSbc9bYrKNbFjQAkPA8YtTEEsdgL7TwqHy587cT6i8rPnz9EWRWjsk1QEmNw",
  "key13": "3CDtzt3nEpDeAqH1ozEHV8VtHoZ21xbrRiUjDS9mFNeoZoUaGMLTHTXAmDq8ibSrG3Z7uQuxNKSZUqtBiHA7r5VT",
  "key14": "53tQEa42asTn2m1CXpBbTJKTvq2XP8svbt4nsooSqSfAnfo7CNE5X29xXM9ZupCAPpcVFR8nz2SB6WcuKnNR1bHV",
  "key15": "3nYeD58ixKig4Fu5gfe5wQYKX1zaQ1Mpz3Bv19hHNKZdKAKfdyFaHbGBxHenfEpask7coyVdykEANSsvQCzCGoLx",
  "key16": "5bH27QceXFM3P16gRm7oBz9j2JE2KCv67dPpzcvqQ8SwwfHWRHFSKNcyENtrTqmgqaUFsaVWgNngXx8BgWjWLXvo",
  "key17": "5SUt9bVVearRBY9u2hVGeYi7SL8Hvvgv4f3vb2nUz5x5TBJdotjcGspQK9Ev7onbzPzjBCVNNHdJpibo52cb9y19",
  "key18": "32JjcdwaQw4AMNMDm4d9Gy4zgUNuuALDTcCpc1ydYg2CqjYbUv37m22jXAfxqbX3TzKPuMNMX7igAiH9wb7BRXGj",
  "key19": "41WXnsMrFHFsaLz7bzf5J1cXyX9YfQZ6siSUtN8UwvJ4CZwY9UF27ver4W82Pekpng3pc1BwK7gDwyRRf4wpsbmx",
  "key20": "ZRS8racacVXiW8y9Gh6kb4nNsDQJ6L62uA8hAbJfYt1JPTi8Ks62GSUB3wj7nDbtbJr6NwpsLNHDmbjZoEmgGg6",
  "key21": "5Wg1pWb7jhK3zdfjqoW2QvF13gSj7HsVowRDjkBSR5UZVZAjoxanETH96AFFBzWpSmSVQqKvruSssMzQpcdZMfV7",
  "key22": "2JtqVLvw7vmJ6nTLw52Bk6ZayVEEvicYoQpXDEqunzaS4i6YfT1ztsNWrwv4cu1iZQUt7uXf3pv1giJeAKGqWa2p",
  "key23": "5wXFgM9cq2K1BSKHPm2ME9RzjxzsY5Ds8kULXP8SDviqnScp1QZDK4VroP2VVRvDiqjHxjYpZAtTpuFzU4WEahrJ",
  "key24": "2HvZoFMNBZq3TZAYbGH967b7Ha6Fwc8acUZ5ZRCp7reb2NXSDi986x8xydVsYKau1FqeApQJToh8PQcfc1qNsf4u",
  "key25": "4a8T9ZwUxvYHPth9EwCgG1qzsSwsmCZftGTg5oGcvi4T3MG8ApkeUsCMKJo8HKdDExv4WFCrv4Yz9yLvZEXzW3N4",
  "key26": "3EjMzCNnWfhRouPXrowvrw1RSpbHiMcyQZ8v1pkxppvWC2cQpnd9S3kZY2m3aijg7RXzcmTF6QEkj3VPBRosTfSd",
  "key27": "56Q4vrkRr35oKZJ81YyCwkkfFacUTTmhr7xNHnPM5A3rbkLxKogLHoqF5Qe79Sb6uXhpUeuMdxGidEnyKgSzeZVA",
  "key28": "5iQjVAg9yMvPyPYxytjmsqgeSaXXsB1VoDhUhjogRwiDcRbBU1UEKE3ts4JKhtYJzRGDVRdwZ87GCPgKCQ4Uu7nT",
  "key29": "4i5gJxnsK36JPUXNZmPDJmrABuujrgX1sxN7ssDtHkrVYJt1c2DKkNgVHB3UWrnyrGNMZ81SjphWhHPzKgC3S6iu"
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
