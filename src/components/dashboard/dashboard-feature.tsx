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
    "332SUkiLaG8ErpbkpJWcvMyPi1tetPhtzhua9UxbXJ9vkKa5B5zv6SjRgoyqcwjWVjDmPNv8e1LM9XCbP9nEUC3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66WXxTwdFPKKYLFEGyxGUZc8jSbbReQkmYzjAQzoAFH2QyRBto13YjXD3S5zztTAR4GFtMc9xkD2XbpHGXJeYuJK",
  "key1": "5x7nyqUgXuRpRGjttanNtgUSpBkZvGHvzccsnNGTsU5D2AbcW8rRaQw127L6ZArK8jY5tiQ3YU9xdrMn8EpFF52V",
  "key2": "adcFadsWR3UJw9H8YNagL388X6yE61RtaJtuC9gEqBnWQAesygQMP3ADg3KRDHdRndeS8h2TEPq1pJgWWyuzd5C",
  "key3": "3TwmTXEXaVocYK3QgBoLKJtTgwXyEM9HGu3mZ3B1GgKBu2dCAGnxW2MgMSB2HoJFoxYAoAjnAyDEWVcXqL7cEiZE",
  "key4": "4be7pC2gQr9FCXZfDaqfv13wBw5zCb99UKxTjuAs2QzSCrMoZGMPDasJRRhTKCowBJZUBFdHcBqRrsJ3kauopJ9V",
  "key5": "g3yWqxpgfEyCwmS9SHhg5uvvPExD65VyCD5iHurFxESqanFY9oL5uAJb1cTRRvyFM3KJiFetY9LKDi97UFcztxG",
  "key6": "4mTJRLxvgTYa15PgP3P3TBLmJbwh5ckfTWbYqgzCc7a5bKELetjGDVqt1iN8vvKqjTbMRqemHDDyCnQ4B5zh21tB",
  "key7": "5DeVQC5kEXmTF6EEgJjhgUV3x5CLgYsyvPrcR6DEPjZ5bCCLSgxECCFMKkmTnTorbBodFaSQVxQR2NazkD6GHVhM",
  "key8": "5b7BsfiTTkRtbeQPyXUWMBwYc7ejaoxjGqsnphdeYRAWJqhiMhKGB8vUVeyaMSW4vr4jPTJKPKTqzDoApFDoMmgX",
  "key9": "3FZTVwyXH6cqK5kf8MHGA1MfK7zowZA3T6a6T82aQDUpmwRQSvXQJLbKN3TYHiZCPZiWibBmRt9uNua86ogSUVxu",
  "key10": "46S9PfAkW5FF1SymRCkixGZDgV24VpstjXHV1LGrJuqtDLGsDvKHo8xk2ZesUb6XVNHMx84wocs1wHbgKDG4Xpok",
  "key11": "SYhzRvw284y5m4JXtK7kw1fYJSZFE3A5jsKhAcBscYaznpjHfxfw5xitBoFBVrfWbJoDHsyonwzsLBoqyYRxCxB",
  "key12": "2eVkGHdTjDxyyooLaou1ZtF12jWk51CsKxRGBvAeDifBeCBQpc5YcGtE9zK9QvJxGhJujohcUfQjZRPRvoiS6hVu",
  "key13": "3AXy2YwyAnSztStQ1uEoHs8S85WLqwZx8tNPAQV5wqFHFogpBYZuX5BQLJCuLDuBnRo8eV68nhQ4ky3FuhjWa13h",
  "key14": "3x4WbmCJvTZM2KSnahyyE5xJdHgNCM4kw4qAmccaNTCFCKnPRbsFJ93je2QbedPz9ZSARGkXcVdTGzosDj3Qb5eB",
  "key15": "4HRMGEJQGtyfKFjLWFD5Vnq5b3SRrpcS9DW3rDDbC7Wgw1xyfLCQXFwQ5Ddx8iVva7N7HeFk8JLRbKNym7tGUsLt",
  "key16": "5V588DPZBD4BqKp4nzGuQxUEcNRnKDJdGkvdGrraG7KdkEa71x6yVvt9JnEgtubatxW7G5HSxYN1e1j7scsfFqy1",
  "key17": "34pPzqxFTeLUmyQr5xKvgQVBBBuN6B5X9682kcpnZT3jdbiCmrgusjtgWCNBTvbjCZNLYwS4HBsnnNJZ77fpoXCP",
  "key18": "3WQ1kAPs3TFrwUvhc7Ro6Nms6X4JY8agS6xZ6Eu6NQGnLuzcjbfnvFy3cEgy2wjcrSBt6bbnXrQ1e7eaFEyPukuK",
  "key19": "2xT1opXaXnm1GgAHx5R2WPfbCrqPKeWKnJFdtxmUd4BLMY5EsSbC3UhPp1kRPhj9zv9CT8LrNeK9PnLbDgX2W4Qo",
  "key20": "efUTyaiFFkkYJCtbAy8wFjLLHHQCqF1Q8VKubZ2M5V1mTfq8CkF7toWMayiXvq7xNm1DXq65QRNNEVBh9DBEWA7",
  "key21": "5ByCjUEnVk3QU9dLC9QywjGgHoEkcoeb6s1h8KRnAZNkc8gk9KBwmNYD1ZutpSJZQLt5hFxqF5Z4SoU5zWvXkD9D",
  "key22": "2JJMG1GHnWzYX4CZFK6qDytpkAFGsZKMVDotm9pYYUZmqqKpSzJ2M8oh54Dg2VbZxaL5Deuxgy8kK4uu1cRzqwW7",
  "key23": "2daBrqGaYiUCY1kBkbyLwE25fRK2MFqWkx2jLss6MXLe8kZDAjYA1Cwe8RXHnxWsSP9oiVdnz81bxwFRqYtPinhp",
  "key24": "VX8qTEBdZTEZDowbuGoXpLKSx9TWM1KWfVU5xoWqLgPAvX3GJTack5qVG6EvgqHa89dVREucCvV4btUbS4GnYYt"
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
