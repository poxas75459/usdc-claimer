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
    "2L7yXf9HofNNau7ZUBQisL4XWrSdogHFFnJLaggfVecHJFRBCqHhjQUA3u1xByNpweELbwSgvBTG4r9n4nxBvMUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WAQzV6KB4UsM5bgtxwByk35K1NDgUJZ9Na5XEFFysnwhVP9HwJj71MDFmwi6G2KFHC1WthVWHcjpBXhCR2EyQMN",
  "key1": "3ym5wkb5HCLs5LuUdo6RXPdP8fPu3VPSYsSryTBFTU8WMbE3vrzRkyETdUWbqKB53TGBiAnP5i1THQqCeizgFHeE",
  "key2": "6s72L4gRWp2B3wsBdsHggW4CZ4dF6kVdY96vwX6wPFSxrH8iQZsjxcYmsQr1kEjiwvjvHWpmauuMUG1eCVmukQ3",
  "key3": "5cmpBbQucQdkHEXKDd8XKf5UN6TPRgmWarBD8ikdgJVhyrtH9eZ33Y5VmPPdR2Nj3hJvwLHQQh7dscB7DKmU9cP",
  "key4": "dksjp3gPitVEUpFypd6jZ1q38eXpXcUwEUiACuZ9DinTjDzKB7GZ1jJ1Kuh1XxZMaHH759qzXRU1pyBokAp9m7S",
  "key5": "5gFAsooEXUoK5BoZg3LVqnDUDNj6RDJtb3cwLCdJRCw5Ni1UmqWNDw6vtjDAePu3ad18wUXGDM4MJoAvZkheSajy",
  "key6": "ifzBmUchHuPfebwdcZgA4MfRDiF6oioekBkL9yUDa4fmTPwixD8xvvfTvjiJedYSLyGgSgGsq8JB8NTEdT7dTe9",
  "key7": "3ZMHzXxFGmLr68qxEDUnKwnBSmXqSyafUynwjXFMcrv6wZuBdu1G35neUoioWuq4Q7foDeuH7Kr7sZXYw3F1zXyz",
  "key8": "446Fg3xL271Me8f5gHgytoMjudsydnrBbUitsa4ju5wh6p8adC5HBQ3cDNoXhNyPD4qpKA5XFj8CaU6sf8WwEgAS",
  "key9": "gz3mjDzoeHtetSSEjxFHd1Zyk9MEFddbZBwxNpcL9kCMghQL41zvqZVJfNHRgTP9rUFYye9kmHPMuC8PSeFrZc9",
  "key10": "56EoGYaZP4cn6YWVbALt4QXnYYeDJDvZ8AHF9o2gK6DnNZdH6sqAtea5Zjf64b2QHoQUN8szLHuYsCw8qvj56c7h",
  "key11": "3htTLTTZfSsvYK6fagnFTbpyd7USVTBf3F9kFbRNhqrQZT8cZUbyn1AR3KN4VJsZbGzpc8vcaYADJr6ujj6WZoyf",
  "key12": "3FwZa31JiuHiEWwdZrKBdQgo58eQYRj1bikemZTNZnEFvBEds4rb5DZPoR6Xb4yZNSrJqKh4mg51n1sc2iytLvc2",
  "key13": "3m6LVBJ3363D5UxeU4HTf5wUZpq3ZP1SnStwFhkR8xKe4xwBcyzqZCmsbvg23LtftjvPcdDkWr2X5JetkLooay4S",
  "key14": "2dgfXAxMXt1nrLQzbAFQffJqDrKna3xVUmC8ff8HoxuixKxqjPKTSJTJhHCqipotKLCa1wA3ggubgXZUBZUYUWyV",
  "key15": "2Mu8YDeftDKEYVGxbM1ezWyUNagFuKyeCBmsCANymn7XEWvudfNTrvcnidmLNwnvvnFyChBCHvV43Qe51WjPcJyR",
  "key16": "5gL14cT34aeWAYS2R5spNpNddBVJ1rSwAdYob9A7iSCEr2Qmbsti6cggcfmYUJTXLRFnw34SHjA7CPeAMdF3HM5e",
  "key17": "4DBUEBmsp7BAxxRfiKr2wxb4ru5ssKwL6UyGcCQJERtr3m52BaqWR6MAZJdwk88U8SLeWVMBuc9smXKArazwzdk2",
  "key18": "5zPFz8ao37THNtJCgPFm2MMkoaxMMyWJ4fTic6HXvioEZGCNwK9Hd2tqnKVneoNLZyAeT1CLjQ1Zo9PZ1JWwBUFJ",
  "key19": "4qgJfN7nBWspQLMMW1kYhpRWsZkA1eFCSiCW8pGAryT1tQ5yLj9f6GsKRt7jCnJmkhTHPh5KmyScKe2eLcCwbuEM",
  "key20": "4Vsvq4FH8dtwKNMEowkFHQmp5hqLDHYtW5j3XbmDxGTEqZePRXWCU3xawRRXrqzYUKXW2Zmcen85RCCXcBFcEdc2",
  "key21": "3UiJwiwvoV1gGPBcVDQW2PTZjpXRL9Lg2iJ3hHoDFYq3qN3iGjdJcodZ8KYTdXyX93NfFxyes1BppXW7bAWkrHNp",
  "key22": "3Bv1TRnBtTSuaT9bxoiT5eUuWanowa3WnJvsAKPrtxjqNz6uriVNaPZ5shi5nYf4XjatCCyvNf1VZzfCMjqrQL38",
  "key23": "3eQ833YjRFy3y21TJmusf61xHghzVEcDMAk8kDcxe8VB2BPAu8JeU66tDFNNQ6G7AQkd5L81zU3W6gPFnH5vPts2",
  "key24": "2TsPUptnkUQHk4BkwMEAsiN7wXpx6isYHx8w94nvX1dLq8EYms7WntsMDELjomfnnJgz5aiUGsAj9Jfxt9xX4uPi",
  "key25": "3Srsuz7rfYwCvr1Ydbw8q9VdrVmEnLThvQQgmJ8UFtny5zFycGBwyTD7WuXfVwtATSEorsfzwY551D7JkmexJiBt"
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
